import fs from 'fs';
import path from 'path';
import { ImpalaSQL } from 'src/parser/impala';
import { CaretPosition, EntityContextType } from 'src/parser/common/types';
import { commentOtherLine } from 'test/helper';

const syntaxSql = fs.readFileSync(
    path.join(__dirname, 'fixtures', 'suggestionWithEntity.sql'),
    'utf-8'
);

describe('Impala SQL Syntax Suggestion with collect entity', () => {
    const impala = new ImpalaSQL();

    test('select with no column', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 8,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = impala.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);

        // TODO:
        // const entities = impala.getAllEntities(sql, pos);
        // expect(entities.length).toBe(1);
        // expect(entities[0].text).toBe('my_db.tb');
        // expect(entities[0].entityContextType).toBe(EntityContextType.TABLE);
        // expect(entities[0].belongStmt.isContainCaret).toBeTruthy();
    });

    test('select with columns with trailing comma', () => {
        const pos: CaretPosition = {
            lineNumber: 3,
            column: 47,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = impala.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);

        const entities = impala.getAllEntities(sql, pos);
        expect(entities.length).toBe(1);
        expect(entities[0].text).toBe('students');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();
    });

    test('insert into table as select with no column', () => {
        const pos: CaretPosition = {
            lineNumber: 5,
            column: 30,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = impala.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);

        const entities = impala.getAllEntities(sql, pos);
        expect(entities.length).toBe(1);
        expect(entities[0].text).toBe('insert_tb');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();

        // TODO:
        // expect(entities[1].text).toBe('from_tb');
        // expect(entities[1].entityContextType).toBe(EntityContextType.TABLE);
        // expect(entities[1].belongStmt.isContainCaret).toBeTruthy();
    });

    test('insert into table as select with trailing comma', () => {
        const pos: CaretPosition = {
            lineNumber: 7,
            column: 34,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = impala.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);

        const entities = impala.getAllEntities(sql, pos);
        expect(entities.length).toBe(2);
        expect(entities[0].text).toBe('insert_tb');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();

        expect(entities[1].text).toBe('from_tb');
        expect(entities[1].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[1].belongStmt.isContainCaret).toBeTruthy();
    });

    test('create table as select with no column', () => {
        const pos: CaretPosition = {
            lineNumber: 9,
            column: 43,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = impala.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);

        const entities = impala.getAllEntities(sql, pos);
        expect(entities.length).toBe(1);
        expect(entities[0].text).toBe('sorted_census_data');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();
        // TODO:
        // expect(entities[1].text).toBe('unsorted_census_data');
        // expect(entities[1].entityContextType).toBe(EntityContextType.TABLE);
        // expect(entities[1].belongStmt.isContainCaret).toBeTruthy();
    });

    test('create table as select with trailing comma', () => {
        const pos: CaretPosition = {
            lineNumber: 11,
            column: 47,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = impala.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);

        const entities = impala.getAllEntities(sql, pos);
        expect(entities.length).toBe(2);
        expect(entities[0].text).toBe('sorted_census_data');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();

        expect(entities[1].text).toBe('unsorted_census_data');
        expect(entities[1].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[1].belongStmt.isContainCaret).toBeTruthy();
    });

    test('isContainCaret should be truthy if caret position is whitespace at the end of statement', () => {
        const pos: CaretPosition = {
            lineNumber: 13,
            column: 25,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);
        const entities = impala.getAllEntities(sql, pos);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();
    });

    test('isContainCaret should be falsy if caret position is whitespace after semicolon', () => {
        const pos: CaretPosition = {
            lineNumber: 15,
            column: 32,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);
        const entities = impala.getAllEntities(sql, pos);
        expect(entities[0].belongStmt.isContainCaret).toBeFalsy();
    });

    test('Where expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 17,
            column: 52,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = impala.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['t2', '.', 'id']);
    });

    test('Join expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 19,
            column: 63,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = impala.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['t2', '.', 'int_col']);
    });

    test('Select expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 21,
            column: 52,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = impala.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['page_views']);
    });

    test('Group by expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 21,
            column: 97,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = impala.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['user_id']);
    });

    test('Order by expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 21,
            column: 151,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = impala.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['page_views']);
    });

    test('Having expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 21,
            column: 120,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = impala.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['times_purchased']);
    });

    test('When case expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 23,
            column: 69,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = impala.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['col2']);
    });

    test('Partition by expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 25,
            column: 91,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = impala.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['id']);
    });
});
