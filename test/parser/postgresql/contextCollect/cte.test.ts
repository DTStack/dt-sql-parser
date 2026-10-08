import { AttrName, CommonEntityContext, TableDeclareType } from 'src/parser/common/entityCollector';
import { EntityContextType } from 'src/parser/common/types';
import { PostgreSQL } from 'src/parser/postgresql';
import { registerCteCases } from 'test/common/cteCases';

registerCteCases('PostgreSQL', PostgreSQL);

describe('PostgreSQL CTE on DML', () => {
    const parser = new PostgreSQL();

    test('collects a CTE used by INSERT', () => {
        const sql = `WITH cte AS (
    SELECT a FROM t1
)
INSERT INTO t2
SELECT * FROM cte`;
        expect(parser.validate(sql)).toHaveLength(0);
        const entities = parser.getAllEntities(sql) ?? [];
        const cteEntities = entities.filter(
            (entity): entity is CommonEntityContext =>
                entity.entityContextType === EntityContextType.TABLE &&
                entity.text.toLowerCase() === 'cte'
        );
        expect(cteEntities.length).toBeGreaterThanOrEqual(2);
        cteEntities.forEach((entity) => {
            expect(entity.declareType).toBe(TableDeclareType.EXPRESSION);
        });
        expect(cteEntities[0].relatedEntities?.[0]).toBe(cteEntities[1].relatedEntities?.[0]);
        expect((cteEntities[0].relatedEntities?.[0] as CommonEntityContext).text).toBe('a');
        expect(cteEntities.some((entity) => entity[AttrName.alias])).toBe(false);
    });
});
