import fs from 'fs';
import path from 'path';
import { HiveSQL } from 'src/parser/hive';
import { CaretPosition, EntityContextType } from 'src/parser/common/types';
import { commentOtherLine } from 'test/helper';

const syntaxSql = fs.readFileSync(
    path.join(__dirname, 'fixtures', 'suggestionWithEntity.sql'),
    'utf-8'
);

describe('Hive SQL Syntax Suggestion with collect entity', () => {
    const hive = new HiveSQL();

    test('Validate Syntax SQL', () => {
        expect(hive.validate(syntaxSql).length).not.toBe(0);
    });

    test('select with no columns', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 8,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = hive.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);

        const entities = hive.getAllEntities(sql, pos);
        expect(entities.length).toBe(1);
        expect(entities[0].text).toBe('tb1');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();
    });

    test('select with columns with columns and trailing comma', () => {
        const pos: CaretPosition = {
            lineNumber: 3,
            column: 20,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = hive.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);

        const entities = hive.getAllEntities(sql, pos);
        expect(entities.length).toBe(1);
        expect(entities[0].text).toBe('tb');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();
    });

    test('from table select with no column', () => {
        const pos: CaretPosition = {
            lineNumber: 5,
            column: 26,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = hive.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);

        const entities = hive.getAllEntities(sql, pos);
        expect(entities.length).toBe(1);
        expect(entities[0].text).toBe('table_name_1');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[0].belongStmt.rootStmt.isContainCaret).toBeTruthy();
    });

    test('from table select with with columns and trailing comma', () => {
        const pos: CaretPosition = {
            lineNumber: 7,
            column: 38,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = hive.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);

        const entities = hive.getAllEntities(sql, pos);
        expect(entities.length).toBe(1);
        expect(entities[0].text).toBe('table_name_1');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[0].belongStmt.rootStmt.isContainCaret).toBeTruthy();
    });

    test('from joined table select with no column', () => {
        const pos: CaretPosition = {
            lineNumber: 9,
            column: 71,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = hive.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);

        const entities = hive.getAllEntities(sql, pos);
        expect(entities.length).toBe(2);
        expect(entities[0].text).toBe('a');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();
        expect(entities[0].belongStmt.rootStmt.isContainCaret).toBeTruthy();

        expect(entities[1].text).toBe('b');
        expect(entities[1].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[1].belongStmt.isContainCaret).toBeTruthy();
        expect(entities[1].belongStmt.rootStmt.isContainCaret).toBeTruthy();
    });

    test('from joined table select with columns and trailing comma', () => {
        const pos: CaretPosition = {
            lineNumber: 11,
            column: 76,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = hive.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);

        const entities = hive.getAllEntities(sql, pos);
        expect(entities.length).toBe(2);
        expect(entities[0].text).toBe('a');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();
        expect(entities[0].belongStmt.rootStmt.isContainCaret).toBeTruthy();

        expect(entities[1].text).toBe('b');
        expect(entities[1].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[1].belongStmt.isContainCaret).toBeTruthy();
        expect(entities[1].belongStmt.rootStmt.isContainCaret).toBeTruthy();
    });

    test('from table insert into table select no columns', () => {
        const pos: CaretPosition = {
            lineNumber: 13,
            column: 100,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = hive.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);

        const entities = hive.getAllEntities(sql, pos);
        expect(entities.length).toBe(2);
        expect(entities[0].text).toBe('page_view_stg');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();
        expect(entities[0].belongStmt.rootStmt.isContainCaret).toBeTruthy();

        expect(entities[1].text).toBe('page_view');
        expect(entities[1].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[1].belongStmt.isContainCaret).toBeTruthy();
        expect(entities[1].belongStmt.rootStmt.isContainCaret).toBeTruthy();
    });

    test('from table insert into table select with column and trailing comma', () => {
        const pos: CaretPosition = {
            lineNumber: 15,
            column: 104,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = hive.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);

        const entities = hive.getAllEntities(sql, pos);
        expect(entities.length).toBe(2);
        expect(entities[0].text).toBe('page_view_stg');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();
        expect(entities[0].belongStmt.rootStmt.isContainCaret).toBeTruthy();

        expect(entities[1].text).toBe('page_view');
        expect(entities[1].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[1].belongStmt.isContainCaret).toBeTruthy();
        expect(entities[1].belongStmt.rootStmt.isContainCaret).toBeTruthy();
    });

    test('insert into from nested query with no column', () => {
        const pos: CaretPosition = {
            lineNumber: 17,
            column: 98,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = hive.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);

        const entities = hive.getAllEntities(sql, pos);
        expect(entities.length).toBe(2);
        expect(entities[0].text).toBe('insert_tb');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();

        expect(entities[1].text).toBe('inside_tb');
        expect(entities[1].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[1].belongStmt.isContainCaret).toBeTruthy();
    });

    test('insert into from nested query with columns and trailing comma', () => {
        const pos: CaretPosition = {
            lineNumber: 19,
            column: 102,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = hive.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);

        const entities = hive.getAllEntities(sql, pos);
        expect(entities.length).toBe(2);
        expect(entities[0].text).toBe('insert_tb');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();

        expect(entities[1].text).toBe('inside_tb');
        expect(entities[1].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[1].belongStmt.isContainCaret).toBeTruthy();
    });

    test('create table as select with no column', () => {
        const pos: CaretPosition = {
            lineNumber: 21,
            column: 52,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = hive.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);

        const entities = hive.getAllEntities(sql, pos);
        expect(entities.length).toBe(2);
        expect(entities[0].text).toBe('derived_table');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();

        expect(entities[1].text).toBe('origin_table');
        expect(entities[1].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[1].belongStmt.isContainCaret).toBeTruthy();
    });

    test('create table as select with columns and trailing comma', () => {
        const pos: CaretPosition = {
            lineNumber: 23,
            column: 56,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = hive.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);

        const entities = hive.getAllEntities(sql, pos);
        expect(entities.length).toBe(2);
        expect(entities[0].text).toBe('derived_table');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();

        expect(entities[1].text).toBe('origin_table');
        expect(entities[1].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[1].belongStmt.isContainCaret).toBeTruthy();
    });

    test('isContainCaret should be truthy if caret position is whitespace at the end of statement', () => {
        const pos: CaretPosition = {
            lineNumber: 25,
            column: 25,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);
        const entities = hive.getAllEntities(sql, pos);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();
    });

    test('isContainCaret should be falsy if caret position is whitespace after semicolon', () => {
        const pos: CaretPosition = {
            lineNumber: 27,
            column: 32,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);
        const entities = hive.getAllEntities(sql, pos);
        expect(entities[0].belongStmt.isContainCaret).toBeFalsy();
    });
});
