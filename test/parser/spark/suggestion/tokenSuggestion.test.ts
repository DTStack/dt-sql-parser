import fs from 'fs';
import path from 'path';
import { SparkSQL } from 'src/parser/spark';
import { CaretPosition } from 'src/parser/common/types';
import { commentOtherLine } from 'test/helper';

const tokenSql = fs.readFileSync(path.join(__dirname, 'fixtures', 'tokenSuggestion.sql'), 'utf-8');

describe('Spark SQL Token Suggestion', () => {
    const spark = new SparkSQL();

    test('After ALTER', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 7,
        };
        const suggestion = spark.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray([
            'TABLE',
            'INDEX',
            'VIEW',
            'MATERIALIZED',
            'DATABASE',
            'NAMESPACE',
            'SCHEMA',
        ]);
    });

    test('After CREATE', () => {
        const pos: CaretPosition = {
            lineNumber: 3,
            column: 8,
        };
        const suggestion = spark.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray([
            'TEMPORARY',
            'INDEX',
            'ROLE',
            'MATERIALIZED',
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
        const suggestion = spark.getSuggestionAtCaretPosition(
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
        const suggestion = spark.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray([
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
        const suggestion = spark.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray([
            'TEMPORARY',
            'INDEX',
            'ROLE',
            'FUNCTION',
            'MATERIALIZED',
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
        const suggestion = spark.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray(['OVERWRITE', 'INTO']);
    });

    test('After LOAD', () => {
        const pos: CaretPosition = {
            lineNumber: 13,
            column: 6,
        };
        const suggestion = spark.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray(['DATA']);
    });

    test('After SHOW', () => {
        const pos: CaretPosition = {
            lineNumber: 15,
            column: 6,
        };
        const suggestion = spark.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray([
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
            'MATERIALIZED',
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
        const suggestion = spark.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray(['TABLE']);
    });

    test('Suggestion in new line', () => {
        const pos: CaretPosition = {
            lineNumber: 21,
            column: 2,
        };
        const suggestion = spark.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, [20, 22]),
            pos
        )?.keywords;
        expect(suggestion.length).not.toBe(0);
    });
});
