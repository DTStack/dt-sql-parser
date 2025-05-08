import fs from 'fs';
import path from 'path';
import { commentOtherLine } from 'test/helper';
import { HiveSQL } from 'src/parser/hive';
import { CaretPosition } from 'src/parser/common/types';

const tokenSql = fs.readFileSync(path.join(__dirname, 'fixtures', 'tokenSuggestion.sql'), 'utf-8');

describe('Hive SQL Token Suggestion', () => {
    const hive = new HiveSQL();

    test('After ALTER', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 7,
        };
        const suggestion = hive.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toMatchUnorderedArray([
            'APPLICATION',
            'GROUP',
            'USER',
            'POOL',
            'TRIGGER',
            'RESOURCE',
            'SCHEDULED',
            'INDEX',
            'CONNECTOR',
            'DATABASE',
            'SCHEMA',
            'MATERIALIZED',
            'VIEW',
            'TABLE',
            'RESOURCE PLAN',
            'SCHEDULED QUERY',
            'MATERIALIZED VIEW',
        ]);
    });

    test('After CREATE', () => {
        const pos: CaretPosition = {
            lineNumber: 3,
            column: 8,
        };
        const suggestion = hive.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toMatchUnorderedArray([
            'CONNECTOR',
            'APPLICATION',
            'GROUP',
            'USER',
            'POOL',
            'TRIGGER',
            'RESOURCE',
            'ROLE',
            'INDEX',
            'TEMPORARY',
            'FUNCTION',
            'SCHEDULED',
            'MATERIALIZED',
            'VIEW',
            'OR',
            'MANAGED',
            'TABLE',
            'EXTERNAL',
            'TRANSACTIONAL',
            'REMOTE',
            'DATABASE',
            'SCHEMA',
            'RESOURCE PLAN',
            'SCHEDULED QUERY',
            'MATERIALIZED VIEW',
            'OR REPLACE',
            'MANAGED TABLE',
        ]);
    });

    test('After DELETE', () => {
        const pos: CaretPosition = {
            lineNumber: 5,
            column: 8,
        };
        const suggestion = hive.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toMatchUnorderedArray(['FROM']);
    });

    test('After DESCRIBE', () => {
        const pos: CaretPosition = {
            lineNumber: 7,
            column: 10,
        };
        const suggestion = hive.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toMatchUnorderedArray([
            'EXTENDED',
            'FORMATTED',
            'FUNCTION',
            'CONNECTOR',
            'DATABASE',
            'SCHEMA',
        ]);
    });

    test('After DROP', () => {
        const pos: CaretPosition = {
            lineNumber: 9,
            column: 6,
        };
        const suggestion = hive.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toMatchUnorderedArray([
            'CONNECTOR',
            'APPLICATION',
            'GROUP',
            'USER',
            'POOL',
            'TRIGGER',
            'RESOURCE',
            'ROLE',
            'INDEX',
            'TEMPORARY',
            'FUNCTION',
            'MATERIALIZED',
            'VIEW',
            'SCHEDULED',
            'TABLE',
            'DATABASE',
            'SCHEMA',
            'RESOURCE PLAN',
            'MATERIALIZED VIEW',
            'SCHEDULED QUERY',
        ]);
    });

    test('After EXPORT', () => {
        const pos: CaretPosition = {
            lineNumber: 11,
            column: 8,
        };
        const suggestion = hive.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toMatchUnorderedArray(['TABLE']);
    });

    test('After IMPORT', () => {
        const pos: CaretPosition = {
            lineNumber: 13,
            column: 8,
        };
        const suggestion = hive.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toMatchUnorderedArray(['FROM', 'TABLE', 'EXTERNAL']);
    });

    test('After INSERT', () => {
        const pos: CaretPosition = {
            lineNumber: 15,
            column: 8,
        };
        const suggestion = hive.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toMatchUnorderedArray(['INTO', 'OVERWRITE']);
    });

    test('After LOAD', () => {
        const pos: CaretPosition = {
            lineNumber: 17,
            column: 6,
        };
        const suggestion = hive.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toMatchUnorderedArray(['DATA']);
    });

    test('After SHOW', () => {
        const pos: CaretPosition = {
            lineNumber: 19,
            column: 6,
        };
        const suggestion = hive.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toMatchUnorderedArray([
            'CURRENT',
            'ROLES',
            'PRINCIPALS',
            'ROLE',
            'GRANT',
            'INDEX',
            'INDEXES',
            'FORMATTED',
            'CONNECTORS',
            'RESOURCE',
            'CONF',
            'TRANSACTIONS',
            'COMPACTIONS',
            'LOCKS',
            'TBLPROPERTIES',
            'TABLE',
            'CREATE',
            'PARTITIONS',
            'FUNCTIONS',
            'COLUMNS',
            'SORTED',
            'MATERIALIZED',
            'VIEWS',
            'TABLES',
            'EXTENDED',
            'DATABASES',
            'SCHEMAS',
            'CURRENT ROLES',
            'ROLE GRANT',
            'TABLE EXTENDED',
            'MATERIALIZED VIEWS',
        ]);
    });

    test('After CREATE TABLE, show combined keywords', () => {
        const pos: CaretPosition = {
            lineNumber: 21,
            column: 14,
        };
        const suggestion = hive.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toContain('IF');
        expect(suggestion).toContain('IF NOT EXISTS');
    });

    test('After CREATE TABLE IF, show combined keywords', () => {
        const pos: CaretPosition = {
            lineNumber: 21,
            column: 17,
        };
        const suggestion = hive.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toContain('NOT');
        expect(suggestion).toContain('NOT EXISTS');
    });

    test('Suggestion in new line', () => {
        const pos: CaretPosition = {
            lineNumber: 25,
            column: 2,
        };
        const suggestion = hive.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, [24, 26]),
            pos
        )?.keywords;
        expect(suggestion.length).not.toBe(0);
    });
});
