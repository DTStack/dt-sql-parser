import fs from 'fs';
import path from 'path';
import { CaretPosition, HiveSQL } from '../../../filters';
import { commentOtherLine } from '../../../helper';

const tokenSql = fs.readFileSync(path.join(__dirname, 'fixtures', 'tokenSuggestion.sql'), 'utf-8');

describe('Hive SQL Token Suggestion', () => {
    const parser = new HiveSQL();

    test('After ALTER', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 7,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toEqual([
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
        ]);
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

    test('After DESCRIBE', () => {
        const pos: CaretPosition = {
            lineNumber: 7,
            column: 10,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toEqual([
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
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toEqual([
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
        ]);
    });

    test('After EXPORT', () => {
        const pos: CaretPosition = {
            lineNumber: 11,
            column: 8,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toEqual(['TABLE']);
    });

    test('After IMPORT', () => {
        const pos: CaretPosition = {
            lineNumber: 13,
            column: 8,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toEqual(['FROM', 'TABLE', 'EXTERNAL']);
    });

    test('After INSERT', () => {
        const pos: CaretPosition = {
            lineNumber: 15,
            column: 8,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toEqual(['INTO', 'OVERWRITE']);
    });

    test('After LOAD', () => {
        const pos: CaretPosition = {
            lineNumber: 17,
            column: 6,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toEqual(['DATA']);
    });

    test('After SHOW', () => {
        const pos: CaretPosition = {
            lineNumber: 19,
            column: 6,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toEqual([
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
        ]);
    });
});
