import { TrinoSQL } from 'src/parser/trino';
import { EntityContextType } from 'src/parser/common/types';
import { StmtContextType } from 'src/parser/common/entityCollector';

describe('Trino view DDL integration', () => {
    const trino = new TrinoSQL();

    test.each([
        'ALTER VIEW people REFRESH extra;',
        'ALTER VIEW IF EXISTS people REFRESH;',
        'CREATE VIEW IF EXISTS people AS SELECT 1;',
        'CREATE VIEW IF NOT EXISTS people;',
        'COMMENT ON MATERIALIZED VIEW people IS 123;',
        'COMMENT ON MATERIALIZED VIEW people;',
        'ALTER MATERIALIZED VIEW people SET AUTHORIZATION;',
        'ALTER MATERIALIZED VIEW IF EXISTS people SET AUTHORIZATION alice;',
    ])('rejects malformed or unsupported syntax: %s', (sql) => {
        expect(trino.validate(sql)).not.toHaveLength(0);
    });

    test.each([
        'ALTER VIEW catalog.schema.people REFRESH;',
        "COMMENT ON MATERIALIZED VIEW catalog.schema.people IS 'comment';",
        'ALTER MATERIALIZED VIEW catalog.schema.people SET AUTHORIZATION ROLE alice;',
    ])('collects the existing view: %s', (sql) => {
        const entities = trino.getAllEntities(sql);
        expect(entities).toHaveLength(1);
        expect(entities?.[0]).toMatchObject({
            entityContextType: EntityContextType.VIEW,
            text: 'catalog.schema.people',
        });
        const position = entities?.[0].position;
        expect(sql.slice(position.startIndex, position.endIndex + 1)).toBe('catalog.schema.people');
    });

    test('collects the created view, its comment, and CTE source', () => {
        const sql = `CREATE VIEW IF NOT EXISTS catalog.schema.people COMMENT 'view comment'
            SECURITY INVOKER WITH (foo = 'bar')
            AS WITH source AS (SELECT id FROM users) SELECT id FROM source;`;
        expect(trino.validate(sql)).toHaveLength(0);
        const entities = trino.getAllEntities(sql);
        const view = entities?.find(
            (entity) => entity.entityContextType === EntityContextType.VIEW_CREATE
        );
        expect(view).toMatchObject({
            text: 'catalog.schema.people',
            _comment: { text: "'view comment'" },
            belongStmt: { stmtContextType: StmtContextType.CREATE_VIEW_STMT },
        });
        expect(entities).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    entityContextType: EntityContextType.TABLE,
                    text: 'users',
                }),
                expect.objectContaining({
                    entityContextType: EntityContextType.TABLE,
                    text: 'source',
                }),
            ])
        );
    });

    test.each([
        ['CREATE VIEW ', EntityContextType.VIEW_CREATE],
        ['CREATE VIEW IF NOT EXISTS ', EntityContextType.VIEW_CREATE],
        ['ALTER VIEW ', EntityContextType.VIEW],
        ['COMMENT ON MATERIALIZED VIEW ', EntityContextType.VIEW],
        ['ALTER MATERIALIZED VIEW ', EntityContextType.VIEW],
    ])('suggests view names after %s', (sql, entityType) => {
        const suggestions = trino.getSuggestionAtCaretPosition(sql, {
            lineNumber: 1,
            column: sql.length + 1,
        });
        expect(suggestions?.syntax).toEqual(
            expect.arrayContaining([expect.objectContaining({ syntaxContextType: entityType })])
        );
    });

    test.each([
        ['CREATE VIEW ', 'IF NOT EXISTS'],
        ['CREATE VIEW IF ', 'NOT EXISTS'],
        ['ALTER VIEW people ', 'REFRESH'],
        ['COMMENT ON MATERIALIZED VIEW people ', 'IS'],
        ['ALTER MATERIALIZED VIEW people SET ', 'AUTHORIZATION'],
        ['ALTER MATERIALIZED VIEW people SET AUTHORIZATION ', 'USER'],
        ['ALTER MATERIALIZED VIEW people SET AUTHORIZATION ', 'ROLE'],
    ])('suggests %s -> %s', (sql, keyword) => {
        const suggestions = trino.getSuggestionAtCaretPosition(sql, {
            lineNumber: 1,
            column: sql.length + 1,
        });
        expect(suggestions?.keywords).toContain(keyword);
    });

    test('preserves a qualified view prefix during completion', () => {
        const sql = 'CREATE VIEW IF NOT EXISTS catalog.schema.';
        const suggestions = trino.getSuggestionAtCaretPosition(sql, {
            lineNumber: 1,
            column: sql.length + 1,
        });
        const view = suggestions?.syntax.find(
            (suggestion) => suggestion.syntaxContextType === EntityContextType.VIEW_CREATE
        );
        expect(view?.wordRanges.map((word) => word.text)).toEqual(['catalog', '.', 'schema', '.']);
    });

    test('splits old and new view statements with exact source ranges', () => {
        const statements = [
            'CREATE VIEW IF NOT EXISTS people AS SELECT * FROM users;',
            'ALTER VIEW people REFRESH;',
            "COMMENT ON MATERIALIZED VIEW totals IS 'owner''s; view';",
            'ALTER MATERIALIZED VIEW totals SET AUTHORIZATION USER alice;',
            'ALTER VIEW people RENAME TO persons;',
            'ALTER MATERIALIZED VIEW totals SET PROPERTIES foo = 123;',
            'REFRESH MATERIALIZED VIEW totals;',
            'SELECT * FROM persons;',
        ];
        const sql = statements.join('\n');
        expect(trino.validate(sql)).toHaveLength(0);
        const slices = trino.splitSQLByStatement(sql);
        expect(slices?.map((slice) => slice.text)).toEqual(statements);
        slices?.forEach((slice, index) => {
            expect(sql.slice(slice.startIndex, slice.endIndex + 1)).toBe(statements[index]);
            expect(slice.startLine).toBe(index + 1);
            expect(slice.endLine).toBe(index + 1);
        });
    });

    test('recovers completion after an invalid preceding statement', () => {
        const sql = 'SELECT FROM users;\nALTER VIEW people ';
        const suggestions = trino.getSuggestionAtCaretPosition(sql, {
            lineNumber: 2,
            column: 'ALTER VIEW people '.length + 1,
        });
        expect(suggestions?.keywords).toContain('REFRESH');
    });
});
