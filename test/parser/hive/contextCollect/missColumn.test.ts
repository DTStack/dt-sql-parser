import { EntityContextType } from 'src/parser/common/basic-parser-types';
import { StmtContextType } from 'src/parser/common/entityCollector';
import PostgreSQL from 'src/parser/pgsql';

const missingColumnSql1 = `SELECT  FROM tab;`;

const missingColumnSql2 = `SELECT col1, col2,  FROM tab;`;

describe('Hive entity collector test with missing column', () => {
    test('no column', () => {
        const postgreSql = new PostgreSQL();

        const allEntities = postgreSql.getAllEntities(missingColumnSql1, {
            lineNumber: 1,
            column: 8,
        });
        expect(allEntities.length).toBe(1);

        const sourceTableEntity = allEntities[0];

        expect(sourceTableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(sourceTableEntity.position.line).toBe(1);
        expect(sourceTableEntity.position.startColumn).toBe(14);
        expect(sourceTableEntity.position.endColumn).toBe(17);
        expect(sourceTableEntity.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        expect(sourceTableEntity.text).toBe('tab');
    });

    test('column list with trailing comma', () => {
        const postgreSql = new PostgreSQL();

        const allEntities = postgreSql.getAllEntities(missingColumnSql2, {
            lineNumber: 1,
            column: 20,
        });
        expect(allEntities.length).toBe(1);

        const sourceTableEntity = allEntities[0];

        expect(sourceTableEntity.entityContextType).toBe(EntityContextType.TABLE);
        expect(sourceTableEntity.position.line).toBe(1);
        expect(sourceTableEntity.position.startColumn).toBe(26);
        expect(sourceTableEntity.position.endColumn).toBe(29);
        expect(sourceTableEntity.belongStmt.stmtContextType).toBe(StmtContextType.SELECT_STMT);
        expect(sourceTableEntity.text).toBe('tab');
    });
});
