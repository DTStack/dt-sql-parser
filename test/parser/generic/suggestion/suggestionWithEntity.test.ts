import { GenericSQL } from 'src/parser/generic';
import { CaretPosition, EntityContextType } from 'src/parser/common/types';

describe('GenericSQL Syntax Suggestion with collect entity', () => {
    const parser = new GenericSQL();

    test('select from table with caret at FROM', () => {
        const sql = `SELECT id, name FROM students`;
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 20,
        };

        const entities = parser.getAllEntities(sql, pos);
        expect(entities.length).toBeGreaterThanOrEqual(1);
        const tableEntity = entities.find((e) => e.entityContextType === EntityContextType.TABLE);
        expect(tableEntity).toBeDefined();
        expect(tableEntity?.text).toBe('students');
    });

    test('insert into table as select', () => {
        const sql = `INSERT INTO insert_tb SELECT id FROM from_tb`;
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 35,
        };

        const entities = parser.getAllEntities(sql, pos);
        expect(entities.length).toBeGreaterThanOrEqual(2);
        const fromTable = entities.find(
            (e) => e.entityContextType === EntityContextType.TABLE && e.text === 'from_tb'
        );
        expect(fromTable).toBeDefined();
    });

    test('create table as select', () => {
        const sql = `CREATE TABLE new_tb (id INT, name VARCHAR(50))`;
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 14,
        };

        const entities = parser.getAllEntities(sql, pos);
        expect(entities.length).toBeGreaterThanOrEqual(1);
        const tableCreate = entities.find(
            (e) => e.entityContextType === EntityContextType.TABLE_CREATE
        );
        expect(tableCreate).toBeDefined();
        expect(tableCreate?.text).toBe('new_tb');
    });

    test('isContainCaret should be truthy if caret is in statement', () => {
        const sql = `SELECT id FROM tb WHERE name = 'test'`;
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 20,
        };
        const entities = parser.getAllEntities(sql, pos);
        expect(entities.length).toBeGreaterThan(0);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();
    });

    test('isContainCaret should be falsy if caret is after semicolon', () => {
        const sql = `SELECT id FROM tb; SELECT name FROM tb2`;
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 25,
        };
        const entities = parser.getAllEntities(sql, pos);
        const firstStmtEntities = entities.filter((e) => e.belongStmt.position.startLine === 1);
        if (firstStmtEntities.length > 0) {
            expect(firstStmtEntities[0].belongStmt.isContainCaret).toBeFalsy();
        }
    });
});
