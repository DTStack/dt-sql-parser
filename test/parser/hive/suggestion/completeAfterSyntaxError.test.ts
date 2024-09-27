import { HiveSQL } from 'src/parser/hive';
import { CaretPosition, EntityContextType } from 'src/parser/common/types';

describe('HiveSQL Complete After Syntax Error', () => {
    const hive = new HiveSQL();

    const sql1 = `SELECT  FROM tb2;\nINSERT INTO `;
    const sql2 = `SELECT  FROM tb3;\nCREATE TABLE `;
    const sql3 = `SELECT FROM t1;\nSL`;

    test('Syntax error but end with semi, should suggest tableName', () => {
        const pos: CaretPosition = {
            lineNumber: 2,
            column: 13,
        };
        const suggestion = hive.getSuggestionAtCaretPosition(sql1, pos);
        expect(suggestion).not.toBeUndefined();

        // syntax
        const syntaxes = suggestion?.syntax;
        expect(syntaxes.length).toBe(1);
        expect(syntaxes[0].syntaxContextType).toBe(EntityContextType.TABLE);

        // keyword
        const keywords = suggestion?.keywords;
        expect(keywords.length).toBe(1);
        expect(keywords[0]).toBe('TABLE');
    });

    test('Syntax error but end with semi, should suggest tableNameCreate', () => {
        const pos: CaretPosition = {
            lineNumber: 2,
            column: 14,
        };
        const suggestion = hive.getSuggestionAtCaretPosition(sql2, pos);
        expect(suggestion).not.toBeUndefined();

        // syntax
        const syntaxes = suggestion?.syntax;
        expect(syntaxes.length).toBe(1);
        expect(syntaxes[0].syntaxContextType).toBe(EntityContextType.TABLE_CREATE);

        // keyword
        const keywords = suggestion?.keywords;
        expect(keywords.length).toBe(1);
        expect(keywords[0]).toBe('IF');
    });

    test('Syntax error but end with semi, should suggest filter token', () => {
        const pos: CaretPosition = {
            lineNumber: 2,
            column: 2,
        };
        const suggestion = hive.getSuggestionAtCaretPosition(sql3, pos);
        expect(suggestion).not.toBeUndefined();

        // syntax
        const syntaxes = suggestion?.syntax;
        expect(syntaxes.length).toBe(0);

        // keyword
        const filterKeywords = suggestion?.keywords?.filter(
            (item) => item.startsWith('S') && /S(?=.*L)/.test(item)
        );
        expect(filterKeywords).toMatchUnorderedArray(['SELECT']);
    });
});
