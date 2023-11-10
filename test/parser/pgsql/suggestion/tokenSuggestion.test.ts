import fs from 'fs';
import path from 'path';
import { CaretPosition } from '../../../../src/parser/common/basic-parser-types';
import PostgresSQL from '../../../../src/parser/pgsql';

const tokenSql = fs.readFileSync(path.join(__dirname, 'fixtures', 'tokenSuggestion.sql'), 'utf-8');

describe('Postgres SQL Token Suggestion', () => {
    const parser = new PostgresSQL();

    test('After ALTER', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 7,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(tokenSql, pos)?.keywords;
        expect(suggestion).toEqual([
            'TYPE',
            'TEXT',
            'STATISTICS',
            'TABLESPACE',
            'USER',
            'ROLE',
            'EVENT',
            'TRIGGER',
            'RULE',
            'FOREIGN',
            'TABLE',
            'MATERIALIZED',
            'VIEW',
            'INDEX',
            'SEQUENCE',
            'SUBSCRIPTION',
            'SERVER',
            'SCHEMA',
            'ROUTINE',
            'PUBLICATION',
            'PROCEDURE',
            'POLICY',
            'OPERATOR',
            'LANGUAGE',
            'PROCEDURAL',
            'GROUP',
            'FUNCTION',
            'DOMAIN',
            'DATABASE',
            'CONVERSION',
            'COLLATION',
            'AGGREGATE',
            'SYSTEM',
            'LARGE',
            'EXTENSION',
            'DEFAULT',
        ]);
    });

    test('After COMMENT', () => {
        const pos: CaretPosition = {
            lineNumber: 7,
            column: 9,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(tokenSql, pos)?.keywords;
        expect(suggestion).toEqual(['ON']);
    });

    test('After CREATE', () => {
        const pos: CaretPosition = {
            lineNumber: 3,
            column: 8,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(tokenSql, pos)?.keywords;
        expect(suggestion).toEqual([
            'ACCESS',
            'AGGREGATE',
            'CAST',
            'COLLATION',
            'CONVERSION',
            'DATABASE',
            'DOMAIN',
            'EVENT',
            'EXTENSION',
            'FOREIGN',
            'FUNCTION',
            'GROUP',
            'INDEX',
            'UNIQUE',
            'LANGUAGE',
            'OR',
            'TRUSTED',
            'PROCEDURAL',
            'MATERIALIZED',
            'OPERATOR',
            'POLICY',
            'PROCEDURE',
            'PUBLICATION',
            'ROLE',
            'RULE',
            'SCHEMA',
            'SEQUENCE',
            'TEMPORARY',
            'TEMP',
            'UNLOGGED',
            'SERVER',
            'STATISTICS',
            'SUBSCRIPTION',
            'TABLE',
            'TABLESPACE',
            'TEXT',
            'TRIGGER',
            'TYPE',
            'USER',
            'VIEW',
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

    test('After DROP', () => {
        const pos: CaretPosition = {
            lineNumber: 9,
            column: 6,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(tokenSql, pos)?.keywords;
        expect(suggestion).toEqual([
            'OPERATOR',
            'ROUTINE',
            'PROCEDURE',
            'FUNCTION',
            'AGGREGATE',
            'DATABASE',
            'USER',
            'GROUP',
            'ROLE',
            'TRANSFORM',
            'TABLESPACE',
            'SUBSCRIPTION',
            'INDEX',
            'DOMAIN',
            'TYPE',
            'RULE',
            'TRIGGER',
            'POLICY',
            'ACCESS',
            'EVENT',
            'EXTENSION',
            'FOREIGN',
            'PROCEDURAL',
            'LANGUAGE',
            'PUBLICATION',
            'SCHEMA',
            'SERVER',
            'TABLE',
            'SEQUENCE',
            'VIEW',
            'MATERIALIZED',
            'COLLATION',
            'CONVERSION',
            'STATISTICS',
            'TEXT',
            'OWNED',
            'CAST',
        ]);
    });

    test('After GRANT', () => {
        const pos: CaretPosition = {
            lineNumber: 13,
            column: 7,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(tokenSql, pos)?.keywords;
        expect(suggestion).toEqual([
            'SELECT',
            'INSERT',
            'UPDATE',
            'DELETE',
            'TRUNCATE',
            'PEFERENCES',
            'TRIGGER',
            'USAGE',
            'ALL',
            'EXECUTE',
            'CREATE',
            'CONNECT',
            'TEMPORARY',
            'TEMP',
        ]);
    });

    test('After INSERT', () => {
        const pos: CaretPosition = {
            lineNumber: 11,
            column: 8,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(tokenSql, pos)?.keywords;
        expect(suggestion).toEqual(['INTO']);
    });
});
