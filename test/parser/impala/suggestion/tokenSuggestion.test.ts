import fs from 'fs';
import path from 'path';
import { CaretPosition } from '../../../../src/parser/common/basic-parser-types';
import impalaSQL from '../../../../src/parser/impala';
import { commentOtherLine } from '../../../helper';

const tokenSql = fs.readFileSync(path.join(__dirname, 'fixtures', 'tokenSuggestion.sql'), 'utf-8');

describe('Impala SQL Token Suggestion', () => {
    const parser = new impalaSQL();

    test('After ALTER', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 7,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(tokenSql, pos)?.keywords;

        expect(suggestion).toEqual(['VIEW', 'TABLE', 'DATABASE']);
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
            'ROLE',
            'FUNCTION',
            'AGGREGATE',
            'VIEW',
            'TABLE',
            'EXTERNAL',
            'DATABASE',
            'SCHEMA',
        ]);
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

        expect(suggestion).toEqual(['FROM']);
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

        expect(suggestion).toEqual([
            'GRANT',
            'ROLE',
            'ROLES',
            'CURRENT',
            'FILES',
            'PARTITIONS',
            'RANGE',
            'COLUMN',
            'TABLE',
            'CREATE',
            'FUNCTIONS',
            'AGGREGATE',
            'TABLES',
            'DATABASES',
            'SCHEMAS',
        ]);
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

        expect(suggestion).toEqual(['INTO', 'OVERWRITE']);
    });

    test('After SHOW', () => {
        const pos: CaretPosition = {
            lineNumber: 11,
            column: 6,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toEqual([
            'GRANT',
            'ROLE',
            'ROLES',
            'CURRENT',
            'FILES',
            'PARTITIONS',
            'RANGE',
            'COLUMN',
            'TABLE',
            'CREATE',
            'FUNCTIONS',
            'AGGREGATE',
            'TABLES',
            'DATABASES',
            'SCHEMAS',
        ]);
    });
    test('After REFRESH', () => {
        const pos: CaretPosition = {
            lineNumber: 13,
            column: 9,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toEqual([
            'GRANT',
            'ROLE',
            'ROLES',
            'CURRENT',
            'FILES',
            'PARTITIONS',
            'RANGE',
            'COLUMN',
            'TABLE',
            'CREATE',
            'FUNCTIONS',
            'AGGREGATE',
            'TABLES',
            'DATABASES',
            'SCHEMAS',
        ]);
    });
});
