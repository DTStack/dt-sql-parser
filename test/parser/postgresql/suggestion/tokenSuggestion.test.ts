import fs from 'fs';
import path from 'path';
import { PostgreSQL } from 'src/parser/postgresql';
import { CaretPosition } from 'src/parser/common/types';
import { commentOtherLine } from 'test/helper';

const tokenSql = fs.readFileSync(path.join(__dirname, 'fixtures', 'tokenSuggestion.sql'), 'utf-8');

describe('Postgres SQL Token Suggestion', () => {
    const postgresql = new PostgreSQL();
    test('After ALTER', () => {
        const pos: CaretPosition = {
            lineNumber: 3,
            column: 7,
        };
        const suggestion = postgresql.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toMatchUnorderedArray([
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
            'TEXT SEARCH',
            'EVENT TRIGGER',
            'LARGE OBJECT',
            'DEFAULT PRIVILEGES',
        ]);
    });

    test('After CREATE', () => {
        const pos: CaretPosition = {
            lineNumber: 9,
            column: 8,
        };
        const suggestion = postgresql.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toMatchUnorderedArray([
            'RECURSIVE',
            'VIEW',
            'TEMPORARY',
            'TEMP',
            'LOCAL',
            'GLOBAL',
            'UNLOGGED',
            'OR',
            'RULE',
            'INDEX',
            'UNIQUE',
            'TABLE',
            'COLLATION',
            'TEXT',
            'TYPE',
            'OPERATOR',
            'AGGREGATE',
            'DATABASE',
            'USER',
            'ROLE',
            'EVENT',
            'TRIGGER',
            'CONSTRAINT',
            'TRANSFORM',
            'TABLESPACE',
            'STATISTICS',
            'SUBSCRIPTION',
            'SEQUENCE',
            'SCHEMA',
            'LANGUAGE',
            'PROCEDURAL',
            'TRUSTED',
            'POLICY',
            'PUBLICATION',
            'MATERIALIZED',
            'GROUP',
            'PROCEDURE',
            'FUNCTION',
            'FOREIGN',
            'SERVER',
            'EXTENSION',
            'DOMAIN',
            'CONVERSION',
            'DEFAULT',
            'CAST',
            'ASSERTION',
            'ACCESS',
            'RECURSIVE VIEW',
            'TEXT SEARCH',
            'EVENT TRIGGER',
            'TRANSFORM FOR',
            'MATERIALIZED VIEW',
            'ACCESS METHOD',
        ]);
    });

    test('After DELETE', () => {
        const pos: CaretPosition = {
            lineNumber: 7,
            column: 8,
        };
        const suggestion = postgresql.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toMatchUnorderedArray(['FROM']);
    });

    test('After DROP', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 6,
        };
        const suggestion = postgresql.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toMatchUnorderedArray([
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
            'VIEW',
            'OWNED',
            'CAST',
            'INDEX',
            'DOMAIN',
            'TYPE',
            'TRIGGER',
            'RULE',
            'POLICY',
            'SCHEMA',
            'SERVER',
            'PUBLICATION',
            'LANGUAGE',
            'PROCEDURAL',
            'FOREIGN',
            'EXTENSION',
            'EVENT',
            'ACCESS',
            'TEXT',
            'STATISTICS',
            'CONVERSION',
            'COLLATION',
            'MATERIALIZED',
            'SEQUENCE',
            'TABLE',
            'OWNED BY',
            'TEXT SEARCH',
            'EVENT TRIGGER',
            'ACCESS METHOD',
        ]);
    });

    test('After INSERT', () => {
        const pos: CaretPosition = {
            lineNumber: 5,
            column: 8,
        };
        const suggestion = postgresql.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toMatchUnorderedArray(['INTO']);
    });

    test('After CREATE TABLE, show combined keywords', () => {
        const pos: CaretPosition = {
            lineNumber: 11,
            column: 14,
        };
        const suggestion = postgresql.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toContain('IF');
        expect(suggestion).toContain('IF NOT EXISTS');
    });

    test('After CREATE TABLE IF, show combined keywords', () => {
        const pos: CaretPosition = {
            lineNumber: 11,
            column: 17,
        };
        const suggestion = postgresql.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toContain('NOT');
        expect(suggestion).toContain('NOT EXISTS');
    });

    test('Suggestion in new line', () => {
        const pos: CaretPosition = {
            lineNumber: 14,
            column: 2,
        };
        const suggestion = postgresql.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, [13, 15]),
            pos
        )?.keywords;
        expect(suggestion.length).not.toBe(0);
    });
});
