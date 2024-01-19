import fs from 'fs';
import path from 'path';
import FlinkSQL from 'src/parser/flinksql';
import { CaretPosition, SyntaxContextType } from 'src/parser/common/basic-parser-types';
import { commentOtherLine } from 'test/helper';

const syntaxSql = fs.readFileSync(
    path.join(__dirname, 'fixtures', 'syntaxSuggestion.sql'),
    'utf-8'
);

describe('Flink SQL Syntax Suggestion', () => {
    const parser = new FlinkSQL();

    test('Validate Syntax SQL', () => {
        expect(parser.validate(syntaxSql).length).not.toBe(0);
        expect(parser.validate(syntaxSql).length).not.toBe(0);
        expect(parser.validate(syntaxSql).length).not.toBe(0);
    });

    test('Drop catalog', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 17,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
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
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['cat', '.']);
    });

    test('Create table', () => {
        const pos: CaretPosition = {
            lineNumber: 5,
            column: 20,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
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
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
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
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
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
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
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
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
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
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
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
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
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
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
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
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
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
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
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
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.VIEW
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['v1']);
    });

    test('Select columns', () => {
        const pos: CaretPosition = {
            lineNumber: 27,
            column: 11,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['col']);
    });

    test('Select columns from table', () => {
        const pos: CaretPosition = {
            lineNumber: 29,
            column: 11,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['col']);
    });

    test('Select multiple columns from table', () => {
        const pos: CaretPosition = {
            lineNumber: 31,
            column: 13,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('Select order by column', () => {
        const pos: CaretPosition = {
            lineNumber: 33,
            column: 27,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('Select group by column', () => {
        const pos: CaretPosition = {
            lineNumber: 35,
            column: 30,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['tb', '.']);
    });

    test('Insert into spec columns', () => {
        const pos: CaretPosition = {
            lineNumber: 37,
            column: 26,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['tb', '.', 'c']);
    });

    test('Watermark for', () => {
        const pos: CaretPosition = {
            lineNumber: 39,
            column: 56,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('Create table new columns', () => {
        const pos: CaretPosition = {
            lineNumber: 41,
            column: 25,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });
});
