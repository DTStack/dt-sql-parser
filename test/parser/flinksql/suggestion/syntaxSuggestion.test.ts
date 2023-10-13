import fs from 'fs';
import path from 'path';
import { CaretPosition, SyntaxContextType } from '../../../../src/parser/common/basic-parser-types';
import FlinkSQL from '../../../../src/parser/flinksql';

const syntaxSql = fs.readFileSync(
    path.join(__dirname, 'fixtures', 'syntaxSuggestion.sql'),
    'utf-8'
);
const multipleSql = fs.readFileSync(path.join(__dirname, 'fixtures', 'multipleSql.sql'), 'utf-8');

describe('Flink SQL Syntax Suggestion', () => {
    const parser = new FlinkSQL();

    test('Validate Syntax SQL', () => {
        expect(parser.validate(syntaxSql).length).not.toBe(0);
        expect(parser.validate(syntaxSql).length).not.toBe(0);
        expect(parser.validate(syntaxSql).length).not.toBe(0);
    });

    test('Multiple SQL use database', () => {
        const pos: CaretPosition = {
            lineNumber: 19,
            column: 10,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(multipleSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.DATABASE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['cat1', '.']);
    });

    test('Drop catalog', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 17,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.CATALOG
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['cat']);
    });

    test('Select table', () => {
        const pos: CaretPosition = {
            lineNumber: 3,
            column: 19,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.TABLE
        );
        console.log(syntaxes);
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['cat', '.']);
    });

    test('Create table', () => {
        const pos: CaretPosition = {
            lineNumber: 5,
            column: 20,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.TABLE_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['cat', '.', 'db']);
    });

    test('Show tables from', () => {
        const pos: CaretPosition = {
            lineNumber: 7,
            column: 21,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.DATABASE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['cat']);
    });

    test('Alter database', () => {
        const pos: CaretPosition = {
            lineNumber: 9,
            column: 20,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.DATABASE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['cat', '.']);
    });

    test('Drop view', () => {
        const pos: CaretPosition = {
            lineNumber: 11,
            column: 12,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.VIEW
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['v']);
    });

    test('Select view', () => {
        const pos: CaretPosition = {
            lineNumber: 13,
            column: 15,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.VIEW
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('Create view', () => {
        const pos: CaretPosition = {
            lineNumber: 15,
            column: 15,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.VIEW_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['cv']);
    });

    test('Function call', () => {
        const pos: CaretPosition = {
            lineNumber: 17,
            column: 27,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.FUNCTION
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['calculate_age']);
    });

    test('Create Function', () => {
        const pos: CaretPosition = {
            lineNumber: 19,
            column: 20,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.FUNCTION_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['fnc']);
    });

    test('Show columns from view', () => {
        const pos: CaretPosition = {
            lineNumber: 21,
            column: 22,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.VIEW
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['vie']);
    });

    test('Show create table', () => {
        const pos: CaretPosition = {
            lineNumber: 23,
            column: 22,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['tb1']);
    });

    test('Show create view', () => {
        const pos: CaretPosition = {
            lineNumber: 25,
            column: 20,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.VIEW
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['v1']);
    });
});
