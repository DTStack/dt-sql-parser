import { GenericSQL } from 'src/parser/generic';
import { CaretPosition, EntityContextType } from 'src/parser/common/types';

describe('GenericSQL Complete After Syntax Error', () => {
    const parser = new GenericSQL();

    const sql1 = `SELECT  FROM tb2;\nINSERT INTO `;
    const sql2 = `SELECT  FROM tb3;\nCREATE TABLE `;
    const sql3 = `SELECT FROM t1;\nSL`;
    const sql4 = `SELECT FROM t1;\n-- the comment 1\n-- the comment 2\nSELECT * FROM db.`;

    test('Syntax error but end with semi, should suggest tableName', () => {
        const pos: CaretPosition = {
            lineNumber: 2,
            column: 13,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(sql1, pos);
        expect(suggestion).not.toBeUndefined();

        const syntaxes = suggestion?.syntax;
        expect(syntaxes.length).toBe(1);
        expect(syntaxes[0].syntaxContextType).toBe(EntityContextType.TABLE);

        const keywords = suggestion?.keywords;
        expect(keywords.length).toBe(0);
    });

    test('Syntax error but end with semi, should suggest tableNameCreate', () => {
        const pos: CaretPosition = {
            lineNumber: 2,
            column: 14,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(sql2, pos);
        expect(suggestion).not.toBeUndefined();

        const syntaxes = suggestion?.syntax;
        expect(syntaxes.length).toBe(1);
        expect(syntaxes[0].syntaxContextType).toBe(EntityContextType.TABLE_CREATE);

        const keywords = suggestion?.keywords;
        expect(keywords).toMatchUnorderedArray(['IF', 'IF NOT EXISTS']);
    });

    test('Syntax error but end with semi, should suggest filter token', () => {
        const pos: CaretPosition = {
            lineNumber: 2,
            column: 2,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(sql3, pos);
        expect(suggestion).not.toBeUndefined();

        const syntaxes = suggestion?.syntax;
        expect(syntaxes.length).toBe(0);

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
        const syntaxes = parser.getSuggestionAtCaretPosition(sql4, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.']);
    });
});
