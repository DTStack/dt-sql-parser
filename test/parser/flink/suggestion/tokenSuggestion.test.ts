import fs from 'fs';
import path from 'path';
import { FlinkSQL } from 'src/parser/flink';
import { CaretPosition } from 'src/parser/common/types';
import { commentOtherLine } from 'test/helper';

const tokenSql = fs.readFileSync(path.join(__dirname, 'fixtures', 'tokenSuggestion.sql'), 'utf-8');

describe('Flink SQL Token Suggestion', () => {
    const flink = new FlinkSQL();

    test('Use Statement ', () => {
        const pos: CaretPosition = {
            lineNumber: 3,
            column: 5,
        };
        const suggestion = flink.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray(['MODULES', 'CATALOG']);
    });

    test('Create Statement ', () => {
        const pos: CaretPosition = {
            lineNumber: 5,
            column: 8,
        };
        const suggestion = flink.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray([
            'CATALOG',
            'FUNCTION',
            'TEMPORARY',
            'VIEW',
            'DATABASE',
            'TABLE',
        ]);
    });

    test('Show Statement ', () => {
        const pos: CaretPosition = {
            lineNumber: 7,
            column: 6,
        };
        const suggestion = flink.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray([
            'MODULES',
            'FULL',
            'FUNCTIONS',
            'USER',
            'CREATE',
            'COLUMNS',
            'TABLES',
            'CURRENT',
            'CATALOGS',
            'DATABASES',
            'VIEWS',
            'JARS',
        ]);
    });

    test('After CREATE TABLE, show combined keywords', () => {
        const pos: CaretPosition = {
            lineNumber: 9,
            column: 14,
        };
        const suggestion = flink.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toContain('IF');
        expect(suggestion).toContain('IF NOT EXISTS');
    });

    test('After CREATE TABLE IF, show combined keywords', () => {
        const pos: CaretPosition = {
            lineNumber: 9,
            column: 17,
        };
        const suggestion = flink.getSuggestionAtCaretPosition(
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
        const suggestion = flink.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, [12, 14]),
            pos
        )?.keywords;
        expect(suggestion.length).not.toBe(0);
    });
});
