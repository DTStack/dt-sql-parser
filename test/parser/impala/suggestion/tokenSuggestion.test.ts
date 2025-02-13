import fs from 'fs';
import path from 'path';
import { ImpalaSQL } from 'src/parser/impala';
import { CaretPosition } from 'src/parser/common/types';
import { commentOtherLine } from 'test/helper';

const tokenSql = fs.readFileSync(path.join(__dirname, 'fixtures', 'tokenSuggestion.sql'), 'utf-8');

describe('Impala SQL Token Suggestion', () => {
    const impala = new ImpalaSQL();

    test('After ALTER', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 7,
        };
        const suggestion = impala.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray(['TABLE', 'VIEW', 'DATABASE']);
    });

    test('After CREATE', () => {
        const pos: CaretPosition = {
            lineNumber: 3,
            column: 8,
        };
        const suggestion = impala.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray([
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
        const suggestion = impala.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray([
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
        const suggestion = impala.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray(['INTO', 'OVERWRITE']);
    });

    test('After SHOW', () => {
        const pos: CaretPosition = {
            lineNumber: 9,
            column: 6,
        };
        const suggestion = impala.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray([
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

    test('Create table with column dataType', () => {
        const pos: CaretPosition = {
            lineNumber: 11,
            column: 21,
        };
        const suggestion = impala.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        const dataTypes = [
            'INT',
            'BINARY',
            'BIGINT',
            'BOOLEAN',
            'CHAR',
            'DATE',
            'DECIMAL',
            'DOUBLE',
            'INT',
            'MAP',
            'REAL',
            'SMALLINT',
            'FLOAT',
            'STRING',
            'STRUCT',
            'TIMESTAMP',
            'TINYINT',
            'VARCHAR',
            'COMPLEX',
        ];

        expect(dataTypes.every((dataType) => suggestion.includes(dataType))).toBe(true);
    });
});
