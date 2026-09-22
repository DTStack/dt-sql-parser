import { GenericSQL } from 'src/parser/generic';
import { AttrName, isCommonEntityContext } from 'src/parser/common/entityCollector';
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

    test('select with empty column after dot (a.)', () => {
        const sql = `SELECT a. FROM tb1 a`;
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 9,
        };

        const syntaxes = parser.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['a']);

        const entities = parser.getAllEntities(sql, pos);
        const tableEntity = entities.find((e) => e.entityContextType === EntityContextType.TABLE);
        expect(tableEntity).toBeDefined();
        expect(tableEntity?.text).toBe('tb1');
        expect(tableEntity?.belongStmt.isContainCaret).toBeTruthy();
    });

    test('select with empty column (trailing comma)', () => {
        const sql = `SELECT id, FROM tb`;
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 12,
        };

        const entities = parser.getAllEntities(sql, pos);
        const tableEntity = entities.find((e) => e.entityContextType === EntityContextType.TABLE);
        expect(tableEntity).toBeDefined();
        expect(tableEntity?.text).toBe('tb');
        expect(tableEntity?.belongStmt.isContainCaret).toBeTruthy();
    });

    test('should get columns from CREATE TABLE for suggestion', () => {
        const sql = `CREATE TABLE students (id int, name varchar(100), score decimal);\nSELECT  FROM students;`;
        const pos: CaretPosition = {
            lineNumber: 2,
            column: 8,
        };

        const entities = parser.getAllEntities(sql, pos);

        // Find the table in FROM clause
        const tableEntity = entities.find(
            (e) => e.entityContextType === EntityContextType.TABLE && e.text === 'students'
        );
        expect(tableEntity).toBeDefined();

        // Find the table definition in CREATE TABLE statement
        const tableCreateEntity = entities.find(
            (e) => e.entityContextType === EntityContextType.TABLE_CREATE && e.text === 'students'
        );
        expect(tableCreateEntity).toBeDefined();

        // Verify column information
        if (isCommonEntityContext(tableCreateEntity)) {
            expect(tableCreateEntity.columns?.length).toBe(3);
            const columnTexts = tableCreateEntity.columns?.map((col) => col.text);
            expect(columnTexts).toEqual(expect.arrayContaining(['id', 'name', 'score']));
            // Verify colType is extracted
            const idColumn = tableCreateEntity.columns?.find((col) => col.text === 'id');
            expect(idColumn?.[AttrName.colType]?.text).toBe('int');
        }
    });
});
