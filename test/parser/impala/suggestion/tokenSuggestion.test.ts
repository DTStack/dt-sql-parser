import fs from 'fs';
import path from 'path';
import { ImpalaSQL, CaretPosition } from '../../../filters';
import { commentOtherLine } from '../../../helper';

const tokenSql = fs.readFileSync(path.join(__dirname, 'fixtures', 'tokenSuggestion.sql'), 'utf-8');

describe('Impala SQL Token Suggestion', () => {
    const parser = new ImpalaSQL();

    test('After ALTER', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 7,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toEqual(['TABLE', 'VIEW', 'DATABASE']);
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

        expect(suggestion).toEqual([
            'TABLE',
            'EXTERNAL',
            'VIEW',
            'FUNCTION',
            'AGGREGATE',
            'ROLE',
            'DATABASE',
            'SCHEMA',
        ]);
    });

    test('After DROP', () => {
        const pos: CaretPosition = {
            lineNumber: 5,
            column: 6,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toEqual([
            'DATABASE',
            'SCHEMA',
            'TABLE',
            'VIEW',
            'STATS',
            'INCREMENTAL',
            'FUNCTION',
            'AGGREGATE',
            'ROLE',
        ]);
    });

    test('After INSERT', () => {
        const pos: CaretPosition = {
            lineNumber: 7,
            column: 8,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toEqual(['INTO', 'OVERWRITE']);
    });

    test('After SHOW', () => {
        const pos: CaretPosition = {
            lineNumber: 9,
            column: 6,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toEqual([
            'DATABASES',
            'SCHEMAS',
            'TABLES',
            'FUNCTIONS',
            'ANALYTIC',
            'AGGREGATE',
            'CREATE',
            'TABLE',
            'COLUMN',
            'PARTITIONS',
            'RANGE',
            'FILES',
            'GRANT',
            'ROLE',
            'ROLES',
            'CURRENT',
        ]);
    });
});
