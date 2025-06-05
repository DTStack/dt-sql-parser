import { ImpalaSQL } from 'src/parser/impala';
import { CaretPosition, EntityContextType } from 'src/parser/common/types';

describe('ImpalaSQL Complete After Syntax Error', () => {
    const impala = new ImpalaSQL();

    const sql1 = `SELECT  FROM tb2;\nINSERT INTO `;
    const sql2 = `SELECT  FROM tb3;\nCREATE TABLE `;
    const sql3 = `SELECT FROM t1;\nSL`;
    const sql4 = `SELECT FROM t1;\n-- the comment 1\n-- the comment 2\nSELECT * FROM db.`;

    test('Syntax error but end with semi, should suggest tableName', () => {
        const pos: CaretPosition = {
            lineNumber: 2,
            column: 13,
        };
        const suggestion = impala.getSuggestionAtCaretPosition(sql1, pos);
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
        const suggestion = impala.getSuggestionAtCaretPosition(sql2, pos);
        expect(suggestion).not.toBeUndefined();

        // syntax
        const syntaxes = suggestion?.syntax;
        expect(syntaxes.length).toBe(1);
        expect(syntaxes[0].syntaxContextType).toBe(EntityContextType.TABLE_CREATE);

        // keyword
        const keywords = suggestion?.keywords;
        expect(keywords).toMatchUnorderedArray(['IF', 'IF NOT EXISTS']);
    });

    test('Syntax error but end with semi, should suggest filter token', () => {
        const pos: CaretPosition = {
            lineNumber: 2,
            column: 2,
        };
        const suggestion = impala.getSuggestionAtCaretPosition(sql3, pos);
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

    test('Syntax suggestion after error and comments', () => {
        const pos: CaretPosition = {
            lineNumber: 4,
            column: 18,
        };
        const syntaxes = impala.getSuggestionAtCaretPosition(sql4, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        // syntax
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.']);
    });
});
