import fs from 'fs';
import path from 'path';
import { MySQL } from 'src/parser/mysql';
import { CaretPosition, EntityContextType } from 'src/parser/common/types';
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
        expect(entities.length).toBe(1);
        expect(entities[0].text).toBe('my_db.tb');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();
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

        const syntaxes = mysql.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);

        const entities = mysql.getAllEntities(sql, pos);
        expect(entities.length).toBe(2);
        expect(entities[0].text).toBe('insert_tb');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();

        expect(entities[1].text).toBe('from_tb');
        expect(entities[1].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[1].belongStmt.isContainCaret).toBeTruthy();
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

        const syntaxes = mysql.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);

        const entities = mysql.getAllEntities(sql, pos);
        expect(entities.length).toBe(2);
        expect(entities[0].text).toBe('sorted_census_data');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();

        expect(entities[1].text).toBe('unsorted_census_data');
        expect(entities[1].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[1].belongStmt.isContainCaret).toBeTruthy();
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
        expect(entities.length).toBe(2);
        expect(entities[0].text).toBe('sorted_census_data');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();

        expect(entities[1].text).toBe('unsorted_census_data');
        expect(entities[1].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[1].belongStmt.isContainCaret).toBeTruthy();
    });
});
