import fs from 'fs';
import path from 'path';
import { FlinkSQL } from 'src/parser/flink';
import { CaretPosition, EntityContextType } from 'src/parser/common/types';
import { commentOtherLine } from 'test/helper';
import { CommonEntityContext, TableDeclareType } from 'src/parser/common/entityCollector';

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
        expect(entities.length).toBe(2);
        expect(entities[0].text).toBe('tb');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();

        expect(entities[1].entityContextType).toBe(EntityContextType.QUERY_RESULT);
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
        expect(entities.length).toBe(4);

        const insertTableEntity = entities.find(
            (e) => e.entityContextType === EntityContextType.TABLE && e.text === 'insert_tb'
        );
        const insideTableEntity = entities.find(
            (e) => e.entityContextType === EntityContextType.TABLE && e.text === 'inside_tb'
        );
        const derivedTableEntity = entities.find(
            (e: CommonEntityContext) =>
                e.entityContextType === EntityContextType.TABLE &&
                e.declareType === TableDeclareType.EXPRESSION
        );
        const queryResultEntity = entities.find(
            (e) => e.entityContextType === EntityContextType.QUERY_RESULT
        );

        expect(insideTableEntity.belongStmt.isContainCaret).toBeTruthy();
        expect(insertTableEntity.belongStmt.isContainCaret).toBeTruthy();
        expect(derivedTableEntity.belongStmt.isContainCaret).toBeTruthy();

        expect(queryResultEntity.text).toBe('col1, col2, country, state');
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

        expect(entities.length).toBe(5);

        const insertTableEntity = entities.find(
            (e) => e.entityContextType === EntityContextType.TABLE && e.text === 'insert_tb'
        );
        const insideTableEntity = entities.find(
            (e) => e.entityContextType === EntityContextType.TABLE && e.text === 'inside_tb'
        );
        const derivedTableEntity = entities.find(
            (e: CommonEntityContext) =>
                e.entityContextType === EntityContextType.TABLE &&
                e.declareType === TableDeclareType.EXPRESSION
        );

        expect(insertTableEntity.belongStmt.isContainCaret).toBeTruthy();
        expect(insideTableEntity.belongStmt.isContainCaret).toBeTruthy();
        expect(derivedTableEntity.belongStmt.isContainCaret).toBeTruthy();
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

        expect(entities[0].text).toBe('origin_table');
        expect(entities[0].entityContextType).toBe(EntityContextType.TABLE);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();

        expect(entities[1].text).toBe('derived_table');
        expect(entities[1].entityContextType).toBe(EntityContextType.TABLE_CREATE);
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
        expect(entities.length).toBe(3);

        const derivedTableEntity = entities.find(
            (e) =>
                e.entityContextType === EntityContextType.TABLE_CREATE && e.text === 'derived_table'
        );
        const originTableEntity = entities.find(
            (e) => e.entityContextType === EntityContextType.TABLE && e.text === 'origin_table'
        );
        const queryResultEntity = entities.find(
            (e) => e.entityContextType === EntityContextType.QUERY_RESULT
        );

        expect(derivedTableEntity.belongStmt.isContainCaret).toBeTruthy();
        expect(originTableEntity.belongStmt.isContainCaret).toBeTruthy();
        expect(queryResultEntity.text).toBe('id,');
    });

    test('isContainCaret should be truthy if caret position is whitespace at the end of statement', () => {
        const pos: CaretPosition = {
            lineNumber: 13,
            column: 25,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);
        const entities = flink.getAllEntities(sql, pos);
        expect(entities[0].belongStmt.isContainCaret).toBeTruthy();
    });

    test('isContainCaret should be falsy if caret position is whitespace after semicolon', () => {
        const pos: CaretPosition = {
            lineNumber: 15,
            column: 32,
        };
        const sql = commentOtherLine(syntaxSql, pos.lineNumber);
        const entities = flink.getAllEntities(sql, pos);
        expect(entities[0].belongStmt.isContainCaret).toBeFalsy();
    });
});
