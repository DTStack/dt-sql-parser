import fs from 'fs';
import path from 'path';
import { TrinoSQL } from 'src/parser/trino';
import { CaretPosition, EntityContextType } from 'src/parser/common/types';
import { commentOtherLine } from 'test/helper';

const tokenSql = fs.readFileSync(path.join(__dirname, 'fixtures', 'tokenSuggestion.sql'), 'utf-8');

describe('Trino SQL Token Suggestion', () => {
    const trino = new TrinoSQL();

    test('After ALTER', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 7,
        };
        const suggestion = trino.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray(['VIEW', 'MATERIALIZED', 'TABLE', 'SCHEMA']);
    });

    test('After CREATE', () => {
        const pos: CaretPosition = {
            lineNumber: 3,
            column: 8,
        };
        const suggestion = trino.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray([
            'ROLE',
            'FUNCTION',
            'OR',
            'VIEW',
            'MATERIALIZED',
            'TABLE',
            'SCHEMA',
            'CATALOG',
        ]);
    });

    test('After DEALLOCATE', () => {
        const pos: CaretPosition = {
            lineNumber: 5,
            column: 12,
        };
        const suggestion = trino.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray(['PREPARE']);
    });

    test('After DELETE', () => {
        const pos: CaretPosition = {
            lineNumber: 7,
            column: 8,
        };
        const suggestion = trino.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray(['FROM']);
    });

    test('After DESCRIBE', () => {
        const pos: CaretPosition = {
            lineNumber: 9,
            column: 10,
        };
        const suggestion = trino.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        );

        expect(suggestion?.keywords?.includes('INPUT')).toBeTruthy();
        expect(suggestion?.keywords?.includes('OUTPUT')).toBeTruthy();

        expect(
            suggestion?.syntax?.find((item) => item.syntaxContextType === EntityContextType.TABLE)
        ).not.toBeUndefined();
        expect(
            suggestion?.syntax?.find((item) => item.syntaxContextType === EntityContextType.VIEW)
        ).not.toBeUndefined();
    });

    test('After DROP', () => {
        const pos: CaretPosition = {
            lineNumber: 11,
            column: 6,
        };
        const suggestion = trino.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray([
            'ROLE',
            'FUNCTION',
            'VIEW',
            'MATERIALIZED',
            'TABLE',
            'SCHEMA',
            'CATALOG',
        ]);
    });

    test('After INSERT', () => {
        const pos: CaretPosition = {
            lineNumber: 13,
            column: 8,
        };
        const suggestion = trino.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray(['INTO']);
    });

    test('Suggestion in new line', () => {
        const pos: CaretPosition = {
            lineNumber: 16,
            column: 2,
        };
        const suggestion = trino.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, [15, 17]),
            pos
        )?.keywords;
        expect(suggestion.length).not.toBe(0);
    });
});
