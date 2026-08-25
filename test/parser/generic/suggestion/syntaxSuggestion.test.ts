import fs from 'fs';
import path from 'path';
import { GenericSQL } from 'src/parser/generic';
import { CaretPosition, EntityContextType } from 'src/parser/common/types';
import { commentOtherLine } from 'test/helper';

const syntaxSql = fs.readFileSync(
    path.join(__dirname, 'fixtures', 'syntaxSuggestion.sql'),
    'utf-8'
);

describe('GenericSQL Syntax Suggestion', () => {
    const parser = new GenericSQL();

    test('Validate Syntax SQL', () => {
        expect(parser.validate(syntaxSql).length).not.toBe(0);
    });

    test('Insert table', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 13,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;

        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );
        expect(suggestion).not.toBeUndefined();
    });

    test('Create table', () => {
        const pos: CaretPosition = {
            lineNumber: 5,
            column: 14,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;

        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE_CREATE
        );
        expect(suggestion).not.toBeUndefined();
    });

    test('Drop table', () => {
        const pos: CaretPosition = {
            lineNumber: 7,
            column: 12,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;

        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );
        expect(suggestion).not.toBeUndefined();
    });

    test('Function call', () => {
        const pos: CaretPosition = {
            lineNumber: 29,
            column: 9,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;

        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.FUNCTION
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['CONCAT']);
    });

    test('Create table column', () => {
        const pos: CaretPosition = {
            lineNumber: 31,
            column: 26,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;

        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN_CREATE
        );
        expect(suggestion).not.toBeUndefined();
    });
});
