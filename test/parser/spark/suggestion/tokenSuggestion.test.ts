import fs from 'fs';
import path from 'path';
import { CaretPosition } from '../../../../src/parser/common/basic-parser-types';
import SparkSQL from '../../../../src/parser/spark';

const tokenSql = fs.readFileSync(path.join(__dirname, 'fixtures', 'tokenSuggestion.sql'), 'utf-8');

describe('Spark SQL Syntax Suggestion', () => {
    const parser = new SparkSQL();

    test('After ALTER', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 7,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(tokenSql, pos)?.keywords;

        expect(suggestion).toEqual(['TABLE', 'INDEX', 'VIEW', 'DATABASE', 'NAMESPACE', 'SCHEMA']);
    });

    test('After CREATE', () => {
        const pos: CaretPosition = {
            lineNumber: 3,
            column: 8,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(tokenSql, pos)?.keywords;

        expect(suggestion).toEqual([
            'TEMPORARY',
            'INDEX',
            'ROLE',
            'FUNCTION',
            'OR',
            'GLOBAL',
            'VIEW',
            'TABLE',
            'EXTERNAL',
            'DATABASE',
            'NAMESPACE',
            'SCHEMA',
        ]);
    });

    test('After DELETE', () => {
        const pos: CaretPosition = {
            lineNumber: 5,
            column: 8,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(tokenSql, pos)?.keywords;

        expect(suggestion).toEqual(['FROM']);
    });

    test('After DESCRIBE', () => {
        const pos: CaretPosition = {
            lineNumber: 7,
            column: 10,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(tokenSql, pos)?.keywords;

        expect(suggestion).toEqual([
            'WITH',
            'SELECT',
            'MAP',
            'REDUCE',
            'FROM',
            'TABLE',
            'VALUES',
            'QUERY',
            'EXTENDED',
            'FORMATTED',
            'DATABASE',
            'FUNCTION',
        ]);
    });

    test('After DROP', () => {
        const pos: CaretPosition = {
            lineNumber: 9,
            column: 6,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(tokenSql, pos)?.keywords;

        expect(suggestion).toEqual([
            'TEMPORARY',
            'INDEX',
            'ROLE',
            'FUNCTION',
            'VIEW',
            'TABLE',
            'DATABASE',
            'NAMESPACE',
            'SCHEMA',
        ]);
    });

    test('After INSERT', () => {
        const pos: CaretPosition = {
            lineNumber: 11,
            column: 8,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(tokenSql, pos)?.keywords;

        expect(suggestion).toEqual(['OVERWRITE', 'INTO']);
    });

    test('After LOAD', () => {
        const pos: CaretPosition = {
            lineNumber: 13,
            column: 6,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(tokenSql, pos)?.keywords;

        expect(suggestion).toEqual(['DATA']);
    });

    test('After SHOW', () => {
        const pos: CaretPosition = {
            lineNumber: 15,
            column: 6,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(tokenSql, pos)?.keywords;

        expect(suggestion).toEqual([
            'LOCKS',
            'INDEXES',
            'TRANSACTIONS',
            'CREATE',
            'COMPACTIONS',
            'CURRENT',
            'ROLES',
            'PRINCIPALS',
            'ROLE',
            'GRANT',
            'CATALOGS',
            'FUNCTIONS',
            'ALL',
            'SYSTEM',
            'USER',
            'PARTITIONS',
            'VIEWS',
            'COLUMNS',
            'TBLPROPERTIES',
            'TABLE',
            'TABLES',
            'DATABASES',
            'NAMESPACES',
            'SCHEMAS',
        ]);
    });

    test('After EXPORT', () => {
        const pos: CaretPosition = {
            lineNumber: 17,
            column: 8,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(tokenSql, pos)?.keywords;

        expect(suggestion).toEqual(['TABLE']);
    });
});
