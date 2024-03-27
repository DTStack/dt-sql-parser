import fs from 'fs';
import path from 'path';
import { FlinkSQL } from 'src/parser/flink';
import { CaretPosition, EntityContextType } from 'src/parser/common/types';
import { commentOtherLine } from 'test/helper';

const syntaxSql = fs.readFileSync(
    path.join(__dirname, 'fixtures', 'suggestionWithEntity.sql'),
    'utf-8'
);

describe('Flink SQL Syntax Suggestion with collect entity', () => {
    const flink = new FlinkSQL();

    test('Validate Syntax SQL', () => {
        expect(flink.validate(syntaxSql).length).not.toBe(0);
    });

    test('select with no columns', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 8,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = flink.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);

        const entities = flink.getAllEntities(sql, pos);
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

        const syntaxes = flink.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);

        const entities = flink.getAllEntities(sql, pos);
        expect(entities.length).toBe(1);
        expect(entities[0].text).toBe('tb');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();
    });

    test('insert into from nested query with no column', () => {
        const pos: CaretPosition = {
            lineNumber: 5,
            column: 98,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = flink.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);

        const entities = flink.getAllEntities(sql, pos);
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
            lineNumber: 7,
            column: 102,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = flink.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);

        const entities = flink.getAllEntities(sql, pos);
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
            lineNumber: 9,
            column: 82,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = flink.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);

        const entities = flink.getAllEntities(sql, pos);
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
            lineNumber: 11,
            column: 86,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);

        const syntaxes = flink.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);

        const entities = flink.getAllEntities(sql, pos);
        expect(entities.length).toBe(2);
        expect(entities[0].text).toBe('derived_table');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE_CREATE);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();

        expect(entities[1].text).toBe('origin_table');
        expect(entities[1].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[1].belongStmt.isContainCaret).toBeTruthy();
    });
});
