import fs from 'fs';
import path from 'path';
import { CaretPosition, EntityContextType } from 'src/parser/common/types';
import { MySQL } from 'src/parser/mysql';
import { commentOtherLine } from 'test/helper';

const syntaxSql = fs.readFileSync(
    path.join(__dirname, 'fixtures', 'suggestionWithEntity.sql'),
    'utf-8'
);

describe('MySQL Syntax Suggestion with collect entity', () => {
    const mysql = new MySQL();

    test('select with no columns', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 8,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = mysql.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);

        const entities = mysql.getAllEntities(sql, pos);
        expect(entities.length).toBe(2);
        expect(entities[0].text).toBe('my_db.tb');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();
        expect(entities[1].entityContextType).toBe(EntityContextType.QUERY_RESULT);
    });

    test('select with columns with trailing comma', () => {
        const pos: CaretPosition = {
            lineNumber: 3,
            column: 47,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = mysql.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);

        const entities = mysql.getAllEntities(sql, pos);
        expect(entities.length).toBe(2);
        expect(entities[0].text).toBe('students');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();
        expect(entities[1].entityContextType).toBe(EntityContextType.QUERY_RESULT);
    });

    test('insert into table as select with no column', () => {
        const pos: CaretPosition = {
            lineNumber: 5,
            column: 30,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = mysql.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);

        const entities = mysql.getAllEntities(sql, pos);
        expect(entities.length).toBe(3);

        expect(entities[0].text).toBe('from_tb');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();

        expect(entities[1].entityContextType).toBe(EntityContextType.QUERY_RESULT);

        expect(entities[2].text).toBe('insert_tb');
        expect(entities[2].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[2].belongStmt.isContainCaret).toBeTruthy();
    });

    test('insert into table as select with trailing comma', () => {
        const pos: CaretPosition = {
            lineNumber: 7,
            column: 39,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = mysql.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);

        const entities = mysql.getAllEntities(sql, pos);
        expect(entities.length).toBe(3);

        expect(entities[0].text).toBe('from_tb');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();

        expect(entities[1].entityContextType).toBe(EntityContextType.QUERY_RESULT);

        expect(entities[2].text).toBe('insert_tb');
        expect(entities[2].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[2].belongStmt.isContainCaret).toBeTruthy();
    });

    test('create table as select with no column', () => {
        const pos: CaretPosition = {
            lineNumber: 9,
            column: 43,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = mysql.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);

        const entities = mysql.getAllEntities(sql, pos);
        expect(entities.length).toBe(3);

        expect(entities[0].text).toBe('unsorted_census_data');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();

        expect(entities[1].entityContextType).toBe(EntityContextType.QUERY_RESULT);

        expect(entities[2].text).toBe('sorted_census_data');
        expect(entities[2].entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(entities[2].belongStmt.isContainCaret).toBeTruthy();
    });

    test('create table as select with trailing comma', () => {
        const pos: CaretPosition = {
            lineNumber: 11,
            column: 52,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = mysql.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);

        const entities = mysql.getAllEntities(sql, pos);
        expect(entities.length).toBe(3);

        expect(entities[0].text).toBe('unsorted_census_data');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();

        expect(entities[1].entityContextType).toBe(EntityContextType.QUERY_RESULT);

        expect(entities[2].text).toBe('sorted_census_data');
        expect(entities[2].entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(entities[2].belongStmt.isContainCaret).toBeTruthy();
    });

    test('isContainCaret should be truthy if caret position is whitespace at the end of statement', () => {
        const pos: CaretPosition = {
            lineNumber: 13,
            column: 25,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);
        const entities = mysql.getAllEntities(sql, pos);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();
    });

    test('isContainCaret should be falsy if caret position is whitespace after semicolon', () => {
        const pos: CaretPosition = {
            lineNumber: 15,
            column: 32,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);
        const entities = mysql.getAllEntities(sql, pos);

        // When caret is after semicolon, entities should not contain caret
        if (entities && entities.length > 0) {
            entities.forEach((entity) => {
                expect(entity.belongStmt.isContainCaret).toBeFalsy();
            });
        }
    });

    test('suggestion with table alias and dot', () => {
        const pos: CaretPosition = {
            lineNumber: 17,
            column: 11,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = mysql.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['tb', '.']);

        const entities = mysql.getAllEntities(sql, pos);
        expect(entities.length).toBe(2);
        expect(entities[0].text).toBe('tb');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();
        expect(entities[1].text).toBe('tb.');
        expect(entities[1].entityContextType).toBe(EntityContextType.QUERY_RESULT);
    });

    test('suggestion with table alias and dot (with alias from clause)', () => {
        const pos: CaretPosition = {
            lineNumber: 19,
            column: 11,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = mysql.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['t1', '.']);

        const entities = mysql.getAllEntities(sql, pos);
        expect(entities.length).toBe(2);
        expect(entities[0].text).toBe('sorted_census_data');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();
        expect(entities[1].text).toBe('t1.');
        expect(entities[1].entityContextType).toBe(EntityContextType.QUERY_RESULT);
    });
});
