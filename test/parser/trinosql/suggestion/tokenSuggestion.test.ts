import fs from 'fs';
import path from 'path';
import { TrinoSQL, CaretPosition } from '../../../filters';
import { commentOtherLine } from '../../../helper';

const tokenSql = fs.readFileSync(path.join(__dirname, 'fixtures', 'tokenSuggestion.sql'), 'utf-8');

describe('Trino SQL Token Suggestion', () => {
    const parser = new TrinoSQL();

    test('After ALTER', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 7,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toEqual(['VIEW', 'MATERIALIZED', 'TABLE', 'SCHEMA']);
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

        expect(suggestion).toEqual(['ROLE', 'VIEW', 'OR', 'MATERIALIZED', 'TABLE', 'SCHEMA']);
    });

    test('After DEALLOCATE', () => {
        const pos: CaretPosition = {
            lineNumber: 5,
            column: 12,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toEqual(['PREPARE']);
    });

    test('After DELETE', () => {
        const pos: CaretPosition = {
            lineNumber: 7,
            column: 8,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toEqual(['FROM']);
    });

    test('After DESCRIBE', () => {
        const pos: CaretPosition = {
            lineNumber: 9,
            column: 10,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toEqual(['OUTPUT', 'INPUT']);
    });

    test('After DROP', () => {
        const pos: CaretPosition = {
            lineNumber: 11,
            column: 6,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toEqual(['ROLE', 'VIEW', 'MATERIALIZED', 'TABLE', 'SCHEMA']);
    });

    test('After INSERT', () => {
        const pos: CaretPosition = {
            lineNumber: 13,
            column: 8,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toEqual(['INTO']);
    });
});
