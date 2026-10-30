import {
    EntityContext,
    AttrName,
    CommonEntityContext,
    TableDeclareType,
} from 'src/parser/common/entityCollector';
import { CaretPosition, EntityContextType } from 'src/parser/common/types';

interface CteParser {
    validate(sql: string): unknown[];
    getAllEntities(sql: string, caretPosition?: CaretPosition): EntityContext[] | null;
}

const issueSql = `WITH sales_data AS (
    SELECT product_id, SUM(amount) AS total_sales
    FROM orders
),
top_products AS (
    SELECT product_id, total_sales
    FROM sales_data
)
SELECT tp.total_sales
FROM top_products tp
JOIN products p ON tp.product_id = p.id`;

function caretAt(sql: string, needle: string, occurrence = 0): CaretPosition {
    let from = 0;
    for (let i = 0; i <= occurrence; i++) {
        const index = sql.indexOf(needle, from);
        if (index < 0) {
            throw new Error(`Cannot find "${needle}" occurrence ${occurrence}`);
        }
        if (i === occurrence) {
            const before = sql.slice(0, index);
            return {
                lineNumber: before.split('\n').length,
                column: index - before.lastIndexOf('\n'),
            };
        }
        from = index + needle.length;
    }
    throw new Error(`Cannot find "${needle}"`);
}

function tablesNamed(entities: EntityContext[], name: string): CommonEntityContext[] {
    return entities.filter(
        (entity): entity is CommonEntityContext =>
            entity.entityContextType === EntityContextType.TABLE &&
            entity.text.toLowerCase() === name.toLowerCase()
    );
}

function columnLabels(entity: CommonEntityContext | undefined): string[] {
    return entity?.columns?.map((column) => column[AttrName.alias]?.text ?? column.text) ?? [];
}

export function registerCteCases(dialect: string, Parser: new () => CteParser) {
    describe(`${dialect} CTE entity collector`, () => {
        const parser = new Parser();

        test('collects CTE definitions and references from the issue sample', () => {
            expect(parser.validate(issueSql)).toHaveLength(0);
            const entities = parser.getAllEntities(issueSql) ?? [];

            const salesData = tablesNamed(entities, 'sales_data');
            const topProducts = tablesNamed(entities, 'top_products');
            const orders = tablesNamed(entities, 'orders');
            const products = tablesNamed(entities, 'products');

            expect(salesData).toHaveLength(2);
            expect(topProducts).toHaveLength(2);
            expect(orders).toHaveLength(1);
            expect(products).toHaveLength(1);

            salesData.forEach((entity) => {
                expect(entity.declareType).toBe(TableDeclareType.EXPRESSION);
            });
            expect(salesData[0].relatedEntities?.[0]).toBe(salesData[1].relatedEntities?.[0]);
            expect(columnLabels(salesData[0].relatedEntities?.[0] as CommonEntityContext)).toEqual([
                'product_id',
                'total_sales',
            ]);

            const definition = topProducts.find((entity) => !entity[AttrName.alias]);
            const reference = topProducts.find((entity) => entity[AttrName.alias]?.text === 'tp');
            expect(definition?.declareType).toBe(TableDeclareType.EXPRESSION);
            expect(reference?.declareType).toBe(TableDeclareType.EXPRESSION);
            expect(definition?.relatedEntities?.[0]).toBe(reference?.relatedEntities?.[0]);
            expect(orders[0].declareType).toBe(TableDeclareType.LITERAL);
            expect(products[0].declareType).toBe(TableDeclareType.LITERAL);
            expect(products[0][AttrName.alias]?.text).toBe('p');
        });

        test('keeps a CTE invisible inside its own body and visible afterwards', () => {
            const insideOwnBody =
                parser.getAllEntities(issueSql, caretAt(issueSql, 'orders')) ?? [];
            expect(
                tablesNamed(insideOwnBody, 'sales_data').some((entity) => entity.isAccessible)
            ).toBe(false);
            expect(tablesNamed(insideOwnBody, 'orders')[0].isAccessible).toBe(true);
            expect(
                tablesNamed(insideOwnBody, 'top_products').some((entity) => entity.isAccessible)
            ).toBe(false);

            const insideLaterCte =
                parser.getAllEntities(issueSql, caretAt(issueSql, 'sales_data', 1)) ?? [];
            expect(
                tablesNamed(insideLaterCte, 'sales_data').some((entity) => entity.isAccessible)
            ).toBe(true);
            expect(tablesNamed(insideLaterCte, 'orders')[0].isAccessible).toBe(false);
            expect(
                tablesNamed(insideLaterCte, 'top_products').some((entity) => entity.isAccessible)
            ).toBe(false);

            const inOuterQuery =
                parser.getAllEntities(issueSql, caretAt(issueSql, 'top_products', 1)) ?? [];
            expect(
                tablesNamed(inOuterQuery, 'sales_data').some((entity) => entity.isAccessible)
            ).toBe(true);
            expect(
                tablesNamed(inOuterQuery, 'top_products').filter((entity) => entity.isAccessible)
            ).toHaveLength(2);
            expect(tablesNamed(inOuterQuery, 'products')[0].isAccessible).toBe(true);
            expect(tablesNamed(inOuterQuery, 'orders')[0].isAccessible).toBe(false);
        });

        test('uses an explicit column list as the outward schema', () => {
            const sql = `WITH cte (pid, sales) AS (
    SELECT product_id, SUM(amount) AS total_sales FROM orders
)
SELECT pid FROM cte`;
            expect(parser.validate(sql)).toHaveLength(0);
            const entities = parser.getAllEntities(sql) ?? [];
            const cteEntities = tablesNamed(entities, 'cte');
            expect(cteEntities.length).toBeGreaterThanOrEqual(2);
            const outward = cteEntities[0].relatedEntities?.[0] as CommonEntityContext;
            expect(outward.columns?.map((column) => column.text)).toEqual(['pid', 'sales']);

            const inner = entities.find(
                (entity): entity is CommonEntityContext =>
                    entity.entityContextType === EntityContextType.QUERY_RESULT &&
                    entity.text.includes('product_id')
            );
            expect(columnLabels(inner)).toEqual(['product_id', 'total_sales']);
            expect(inner).not.toBe(outward);
        });

        test('binds a reference to the nearest preceding CTE', () => {
            const sql = `WITH cte AS (
    SELECT a FROM t1
),
cte AS (
    SELECT b FROM t2
)
SELECT * FROM cte`;
            expect(parser.validate(sql)).toHaveLength(0);
            const entities = parser.getAllEntities(sql) ?? [];
            const cteEntities = tablesNamed(entities, 'cte').sort(
                (left, right) => left.position.startTokenIndex - right.position.startTokenIndex
            );
            const reference = cteEntities[cteEntities.length - 1];
            expect(reference.declareType).toBe(TableDeclareType.EXPRESSION);
            const outward = reference.relatedEntities?.[0] as CommonEntityContext;
            expect(outward.text).toBe('b');
            expect(cteEntities[1].relatedEntities?.[0]).toBe(outward);
            expect(cteEntities[0].relatedEntities?.[0]).not.toBe(outward);
        });

        test('matches CTE names without case sensitivity', () => {
            const sql = `WITH Sales_Data AS (
    SELECT a FROM t1
)
SELECT * FROM sales_data`;
            expect(parser.validate(sql)).toHaveLength(0);
            const entities = parser.getAllEntities(sql) ?? [];
            const matched = tablesNamed(entities, 'sales_data');
            expect(matched).toHaveLength(2);
            matched.forEach((entity) => {
                expect(entity.declareType).toBe(TableDeclareType.EXPRESSION);
            });
        });

        test('keeps a CTE visible at an unfinished FROM', () => {
            const sql = `WITH sales_data AS (
    SELECT product_id FROM orders
)
SELECT product_id
FROM `;
            const lines = sql.split('\n');
            const entities =
                parser.getAllEntities(sql, {
                    lineNumber: lines.length,
                    column: lines[lines.length - 1].length + 1,
                }) ?? [];
            const salesData = tablesNamed(entities, 'sales_data');
            expect(salesData.some((entity) => !entity[AttrName.alias] && entity.isAccessible)).toBe(
                true
            );
            expect(tablesNamed(entities, 'orders').some((entity) => entity.isAccessible)).toBe(
                false
            );
        });

        test('does not leak a CTE into the next statement', () => {
            const sql = `WITH cte AS (
    SELECT a FROM t1
)
SELECT * FROM cte;
SELECT * FROM cte`;
            expect(parser.validate(sql)).toHaveLength(0);
            const entities = parser.getAllEntities(sql, caretAt(sql, 'FROM cte', 1)) ?? [];
            const visible = tablesNamed(entities, 'cte').sort(
                (left, right) => left.position.startTokenIndex - right.position.startTokenIndex
            );
            const reference = visible[visible.length - 1];
            expect(reference.declareType).toBe(TableDeclareType.LITERAL);
            expect(reference.isAccessible).toBe(true);
            expect(
                visible.some(
                    (entity) =>
                        entity.declareType === TableDeclareType.EXPRESSION && entity.isAccessible
                )
            ).toBe(false);
        });

        test('inner WITH shadows an outer CTE of the same name', () => {
            const sql = `WITH cte AS (
    SELECT a FROM t1
),
wrapper AS (
    WITH cte AS (
        SELECT b FROM t2
    )
    SELECT * FROM cte
)
SELECT * FROM wrapper`;
            expect(parser.validate(sql)).toHaveLength(0);
            const entities = parser.getAllEntities(sql, caretAt(sql, 'FROM cte')) ?? [];
            const cteEntities = tablesNamed(entities, 'cte').sort(
                (left, right) => right.position.startTokenIndex - left.position.startTokenIndex
            );
            const reference = cteEntities[0];
            expect(reference.declareType).toBe(TableDeclareType.EXPRESSION);
            expect((reference.relatedEntities?.[0] as CommonEntityContext).text).toBe('b');
            expect(
                cteEntities
                    .filter((entity) => entity.isAccessible)
                    .every(
                        (entity) =>
                            (entity.relatedEntities?.[0] as CommonEntityContext).text === 'b'
                    )
            ).toBe(true);
        });

        test('uses the first branch of UNION as the outward schema', () => {
            const sql = `WITH cte AS (
    SELECT a FROM t1
    UNION
    SELECT b FROM t2
)
SELECT * FROM cte`;
            expect(parser.validate(sql)).toHaveLength(0);
            const entities = parser.getAllEntities(sql) ?? [];
            const outward = tablesNamed(entities, 'cte')[0]
                .relatedEntities?.[0] as CommonEntityContext;
            expect(outward.text).toBe('a');
        });

        test('never emits a name entity whose text spans a parse error', () => {
            // `FROM` immediately followed by `JOIN` is the half-typed state that made
            // the playground suggest a table called `JOIN myOwn`. Error recovery used to
            // stretch the table context across `JOIN myOwn\nORDER BY 1`, and that raw
            // source slice became the entity `text`.
            //
            // Dialects recover differently and the invariant has to hold for all of
            // them: PostgreSQL/Flink/MySQL/Hive report an error and yield no name
            // entity, Trino/Impala recover with a clean `myOwn`, and Spark's grammar
            // accepts the statement outright. Only the whitespace check is universal —
            // an identifier can never contain one, so any entity text that does is a
            // context that swallowed the error.
            const sql = `SELECT 1
FROM
JOIN myOwn
ORDER BY 1`;
            const entities = parser.getAllEntities(sql) ?? [];
            const nameEntities = entities.filter((entity) =>
                [
                    EntityContextType.TABLE,
                    EntityContextType.TABLE_CREATE,
                    EntityContextType.VIEW,
                    EntityContextType.VIEW_CREATE,
                    EntityContextType.COLUMN,
                    EntityContextType.DATABASE,
                    EntityContextType.DATABASE_CREATE,
                ].includes(entity.entityContextType)
            );

            nameEntities.forEach((entity) => {
                expect(entity.text).not.toMatch(/\s/);
            });
        });
    });
}
