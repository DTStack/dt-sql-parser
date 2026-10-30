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

    test('select with join on dot empty column (o. and u.)', () => {
        const sql1 = `create table orders ( id BIGINT, age int, name VARCHAR ); create table t1 ( id1 BIGINT, age1 int, name1 VARCHAR ); SELECT o.age, u.age1 FROM orders o JOIN t1 u ON o.`;
        const pos1: CaretPosition = {
            lineNumber: 1,
            column: sql1.length + 1,
        };
        const syntaxes1 = parser.getSuggestionAtCaretPosition(sql1, pos1)?.syntax;
        const col1 = syntaxes1?.find((s) => s.syntaxContextType === EntityContextType.COLUMN);
        expect(col1).toBeDefined();
        expect(col1?.wordRanges.map((w) => w.text)).toEqual(['o', '.']);

        const sql2 = `create table orders ( id BIGINT, age int, name VARCHAR ); create table t1 ( id1 BIGINT, age1 int, name1 VARCHAR ); SELECT o.age, u.age1 FROM orders o JOIN t1 u ON o.id = u.`;
        const pos2: CaretPosition = {
            lineNumber: 1,
            column: sql2.length + 1,
        };
        const syntaxes2 = parser.getSuggestionAtCaretPosition(sql2, pos2)?.syntax;
        const col2 = syntaxes2?.find((s) => s.syntaxContextType === EntityContextType.COLUMN);
        expect(col2).toBeDefined();
        expect(col2?.wordRanges.map((w) => w.text)).toEqual(['u', '.']);

        const entities = parser.getAllEntities(sql2, pos2);
        const ordersTable = entities.find(
            (e) => e.entityContextType === EntityContextType.TABLE && e.text === 'orders'
        );
        expect(ordersTable).toBeDefined();
        expect(ordersTable?.[AttrName.alias]?.text).toBe('o');

        const t1Table = entities.find(
            (e) => e.entityContextType === EntityContextType.TABLE && e.text === 't1'
        );
        expect(t1Table).toBeDefined();
        expect(t1Table?.[AttrName.alias]?.text).toBe('u');
    });

    test('select with where empty column', () => {
        const sql = `create table orders ( id BIGINT, age int, name VARCHAR ); create table t1 ( id1 BIGINT, age1 int, name1 VARCHAR ); SELECT age FROM orders o where `;
        const pos: CaretPosition = {
            lineNumber: 1,
            column: sql.length + 1,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const col = syntaxes?.find((s) => s.syntaxContextType === EntityContextType.COLUMN);
        expect(col).toBeDefined();

        const entities = parser.getAllEntities(sql, pos);
        const ordersTable = entities.find(
            (e) => e.entityContextType === EntityContextType.TABLE && e.text === 'orders'
        );
        expect(ordersTable).toBeDefined();
        expect(ordersTable?.[AttrName.alias]?.text).toBe('o');
    });

    test('select with where dot empty column (o.)', () => {
        const sql = `SELECT * FROM orders o WHERE o.`;
        const pos: CaretPosition = {
            lineNumber: 1,
            column: sql.length + 1,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const col = syntaxes?.find((s) => s.syntaxContextType === EntityContextType.COLUMN);
        expect(col).toBeDefined();
        expect(col?.wordRanges.map((w) => w.text)).toEqual(['o', '.']);

        const entities = parser.getAllEntities(sql, pos);
        const ordersTable = entities.find(
            (e) => e.entityContextType === EntityContextType.TABLE && e.text === 'orders'
        );
        expect(ordersTable).toBeDefined();
        expect(ordersTable?.[AttrName.alias]?.text).toBe('o');
    });
});
