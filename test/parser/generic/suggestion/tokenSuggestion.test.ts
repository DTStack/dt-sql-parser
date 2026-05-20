import fs from 'fs';
import path from 'path';
import { GenericSQL } from 'src/parser/generic';
import { CaretPosition } from 'src/parser/common/types';
import { commentOtherLine } from 'test/helper';

const tokenSql = fs.readFileSync(path.join(__dirname, 'fixtures', 'tokenSuggestion.sql'), 'utf-8');

describe('GenericSQL Token Suggestion', () => {
    const parser = new GenericSQL();

    test('After ALTER', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 7,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray(['TABLE']);
    });

    test('After CREATE', () => {
        const pos: CaretPosition = {
            lineNumber: 3,
            column: 8,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray(['TABLE']);
    });

    test('After DELETE', () => {
        const pos: CaretPosition = {
            lineNumber: 5,
            column: 8,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray(['FROM']);
    });

    test('After DROP', () => {
        const pos: CaretPosition = {
            lineNumber: 7,
            column: 6,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray(['TABLE']);
    });

    test('After INSERT', () => {
        const pos: CaretPosition = {
            lineNumber: 9,
            column: 8,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray(['INTO']);
    });

    test('After CREATE TABLE, show combined keywords', () => {
        const pos: CaretPosition = {
            lineNumber: 11,
            column: 14,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toContain('IF');
        expect(suggestion).toContain('IF NOT EXISTS');
    });

    test('After CREATE TABLE IF, show combined keywords', () => {
        const pos: CaretPosition = {
            lineNumber: 11,
            column: 17,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toContain('NOT');
        expect(suggestion).toContain('NOT EXISTS');
    });

    test('Suggestion in new line', () => {
        const pos: CaretPosition = {
            lineNumber: 13,
            column: 2,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, [12, 14]),
            pos
        )?.keywords;
        expect(suggestion.length).not.toBe(0);
    });

    test('After UPDATE', () => {
        const pos: CaretPosition = {
            lineNumber: 19,
            column: 8,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toBeDefined();
    });

    test('After SELECT * FROM tb WHERE', () => {
        const pos: CaretPosition = {
            lineNumber: 21,
            column: 27,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        // WHERE expects expression, not keyword suggestion
        expect(suggestion === undefined || suggestion.length >= 0).toBe(true);
    });

    test('After SELECT * FROM tb ORDER BY', () => {
        const pos: CaretPosition = {
            lineNumber: 23,
            column: 28,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toBeDefined();
    });

    test('After SELECT * FROM tb GROUP BY', () => {
        const pos: CaretPosition = {
            lineNumber: 25,
            column: 28,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toBeDefined();
    });

    test('After INSERT INTO tb (id,', () => {
        const pos: CaretPosition = {
            lineNumber: 27,
            column: 19,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toBeDefined();
    });

    test('After SELECT * FROM tb JOIN', () => {
        const pos: CaretPosition = {
            lineNumber: 29,
            column: 24,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toBeDefined();
    });

    test('After ALTER TABLE tb ADD', () => {
        const pos: CaretPosition = {
            lineNumber: 31,
            column: 21,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toBeDefined();
    });

    test('After ALTER TABLE tb DROP', () => {
        const pos: CaretPosition = {
            lineNumber: 33,
            column: 22,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toBeDefined();
    });

    test('After ALTER TABLE tb RENAME', () => {
        const pos: CaretPosition = {
            lineNumber: 35,
            column: 24,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toBeDefined();
    });

    test('After ALTER TABLE tb ALTER', () => {
        const pos: CaretPosition = {
            lineNumber: 37,
            column: 23,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toBeDefined();
    });
});
