import fs from 'fs';
import path from 'path';
import TrinoSQL from 'src/parser/trinosql';
import { CaretPosition, EntityContextType } from 'src/parser/common/basic-parser-types';
import { commentOtherLine } from 'test/helper';

const syntaxSql = fs.readFileSync(
    path.join(__dirname, 'fixtures', 'syntaxSuggestion.sql'),
    'utf-8'
);

describe('Trino SQL Syntax Suggestion', () => {
    const parser = new TrinoSQL();

    test('Validate Syntax SQL', () => {
        expect(parser.validate(syntaxSql).length).not.toBe(0);
        expect(parser.validate(syntaxSql).length).not.toBe(0);
        expect(parser.validate(syntaxSql).length).not.toBe(0);
    });

    test('Insert table ', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 18,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;

        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.', 'tb']);
    });

    test('Select table ', () => {
        const pos: CaretPosition = {
            lineNumber: 3,
            column: 20,
        };
        const syntaxes =
            parser.getSuggestionAtCaretPosition(commentOtherLine(syntaxSql, pos.lineNumber), pos)
                ?.syntax ?? [];

        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(
            syntaxes.some((item) => item.syntaxContextType === EntityContextType.VIEW)
        ).toBeTruthy();
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.']);
    });

    test('Create table ', () => {
        const pos: CaretPosition = {
            lineNumber: 5,
            column: 17,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.']);
    });

    test('DROP table ', () => {
        const pos: CaretPosition = {
            lineNumber: 7,
            column: 26,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.', 'a']);
    });

    test('Create view ', () => {
        const pos: CaretPosition = {
            lineNumber: 9,
            column: 28,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.VIEW_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.', 'v']);
    });

    test('Drop view ', () => {
        const pos: CaretPosition = {
            lineNumber: 11,
            column: 15,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.VIEW
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.', 'v']);
    });

    test('Use function', () => {
        const pos: CaretPosition = {
            lineNumber: 13,
            column: 27,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.FUNCTION
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['calculate_age']);
    });

    test('Create schema', () => {
        const pos: CaretPosition = {
            lineNumber: 15,
            column: 17,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.DATABASE_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db']);
    });

    test('Drop schema', () => {
        const pos: CaretPosition = {
            lineNumber: 17,
            column: 26,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.DATABASE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['sch']);
    });

    test('Show Column From', () => {
        const pos: CaretPosition = {
            lineNumber: 19,
            column: 21,
        };
        const syntaxes =
            parser.getSuggestionAtCaretPosition(commentOtherLine(syntaxSql, pos.lineNumber), pos)
                ?.syntax ?? [];

        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );
        expect(
            syntaxes.some((item) => item.syntaxContextType === EntityContextType.VIEW)
        ).toBeTruthy();
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['tb']);
    });

    test('Comment on column', () => {
        const pos: CaretPosition = {
            lineNumber: 21,
            column: 22,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['tb', '.']);
    });

    test('RENAME column', () => {
        const pos: CaretPosition = {
            lineNumber: 23,
            column: 30,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;

        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('RENAME column to', () => {
        const pos: CaretPosition = {
            lineNumber: 25,
            column: 37,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;

        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('Drop column', () => {
        const pos: CaretPosition = {
            lineNumber: 27,
            column: 31,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;

        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('Alter table add column', () => {
        const pos: CaretPosition = {
            lineNumber: 29,
            column: 32,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;

        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['zi']);
    });

    test('Show comment on column', () => {
        const pos: CaretPosition = {
            lineNumber: 31,
            column: 28,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['tb', '.', 'c']);
    });

    test('Insert into spec column', () => {
        const pos: CaretPosition = {
            lineNumber: 33,
            column: 21,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('Select order by', () => {
        const pos: CaretPosition = {
            lineNumber: 35,
            column: 27,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('Select group by', () => {
        const pos: CaretPosition = {
            lineNumber: 37,
            column: 27,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });
});
