import fs from 'fs';
import path from 'path';
import { SparkSQL } from 'src/parser/spark';
import { CaretPosition, EntityContextType } from 'src/parser/common/types';

const syntaxSql = fs.readFileSync(
    path.join(__dirname, 'fixtures', 'completeAfterSyntaxError.sql'),
    'utf-8'
);

describe('SparkSQL Complete After Syntax Error', () => {
    const spark = new SparkSQL();

    test('Syntax error but end with semi, should suggest keywords which can start a single statement', () => {
        const sql1 = `SELECT  FROM tb1;\nI`;
        const pos: CaretPosition = {
            lineNumber: 2,
            column: 2,
        };
        const keywords = spark.getSuggestionAtCaretPosition(sql1, pos)?.keywords;
        expect(keywords).toMatchUnorderedArrary([
            'WITH',
            'SELECT',
            'MAP',
            'REDUCE',
            'FROM',
            'TABLE',
            'VALUES',
            'INSERT',
            'DELETE',
            'UPDATE',
            'MERGE',
            'USE',
            'SET',
            'CREATE',
            'ALTER',
            'DROP',
            'SHOW',
            'REPLACE',
            'ANALYZE',
            'DECLARE',
            'EXPLAIN',
            'DESC',
            'DESCRIBE',
            'COMMENT',
            'REFRESH',
            'CACHE',
            'UNCACHE',
            'CLEAR',
            'LOAD',
            'TRUNCATE',
            'MSCK',
            'REPAIR',
            'ADD',
            'LIST',
            'RESET',
            'OPTIMIZE',
            'GRANT',
            'REVOKE',
            'EXPORT',
            'IMPORT',
            'LOCK',
            'UNLOCK',
            'START',
            'COMMIT',
            'ROLLBACK',
            'DFS',
        ]);
    });

    test('Syntax error but end with semi, should suggest token', () => {
        const pos: CaretPosition = {
            lineNumber: 3,
            column: 13,
        };
        const suggestion = spark.getSuggestionAtCaretPosition(syntaxSql, pos);
        expect(suggestion).not.toBeUndefined();

        // syntax
        const syntaxes = suggestion?.syntax;
        expect(syntaxes.length).toBe(1);
        expect(syntaxes[0].syntaxContextType).toBe(EntityContextType.TABLE);

        const keywords = suggestion?.keywords;
        expect(keywords.length).toBe(1);
        expect(keywords[0]).toBe('TABLE');
    });

    test('Syntax error but start with keyword, should suggest token', () => {
        const pos: CaretPosition = {
            lineNumber: 9,
            column: 13,
        };
        const suggestion = spark.getSuggestionAtCaretPosition(syntaxSql, pos);
        expect(suggestion).not.toBeUndefined();

        // syntax
        const syntaxes = suggestion?.syntax;
        expect(syntaxes.length).toBe(1);
        expect(syntaxes[0].syntaxContextType).toBe(EntityContextType.TABLE);

        const keywords = suggestion?.keywords;
        expect(keywords.length).toBe(1);
        expect(keywords[0]).toBe('TABLE');
    });
});
