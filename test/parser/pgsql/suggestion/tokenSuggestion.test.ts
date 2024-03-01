import fs from 'fs';
import path from 'path';
import PostgresSQL from 'src/parser/pgsql';
import { CaretPosition } from 'src/parser/common/basic-parser-types';
import { commentOtherLine } from 'test/helper';

const tokenSql = fs.readFileSync(path.join(__dirname, 'fixtures', 'tokenSuggestion.sql'), 'utf-8');

describe('Postgres SQL Token Suggestion', () => {
    const parser = new PostgresSQL();
    test('After ALTER', () => {
        const pos: CaretPosition = {
            lineNumber: 3,
            column: 7,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toMatchUnorderedArrary([
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

    test('After CREATE', () => {
        const pos: CaretPosition = {
            lineNumber: 9,
            column: 8,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toMatchUnorderedArrary([
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
        ]);
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
        expect(suggestion).toMatchUnorderedArrary(['FROM']);
    });

    test('After DROP', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 6,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toMatchUnorderedArrary([
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
        ]);
    });

    test('After INSERT', () => {
        const pos: CaretPosition = {
            lineNumber: 5,
            column: 8,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toMatchUnorderedArrary(['INTO']);
    });
});
