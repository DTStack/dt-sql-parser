import fs from 'fs';
import path from 'path';
import { TrinoSQL } from 'src/parser/trino';
import { CaretPosition, EntityContextType } from 'src/parser/common/types';

const syntaxSql = fs.readFileSync(
    path.join(__dirname, 'fixtures', 'multipleStatement.sql'),
    'utf-8'
);

describe('TrinoSQL Multiple Statements Syntax Suggestion', () => {
    const trino = new TrinoSQL();

    test('Create table ', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 14,
        };
        const syntaxes = trino.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('Select from table', () => {
        const pos: CaretPosition = {
            lineNumber: 9,
            column: 20,
        };
        const syntaxes = trino.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges?.length).toBe(2);
        expect(suggestion?.wordRanges).toEqual([
            {
                text: 'db',
                line: 9,
                startIndex: 137,
                endIndex: 138,
                startColumn: 17,
                endColumn: 19,
            },
            {
                text: '.',
                line: 9,
                startIndex: 139,
                endIndex: 139,
                startColumn: 19,
                endColumn: 20,
            },
        ]);
    });

    test('Insert into table ', () => {
        const pos: CaretPosition = {
            lineNumber: 15,
            column: 13,
        };
        const syntaxes = trino.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('Insert into select from table ', () => {
        const pos: CaretPosition = {
            lineNumber: 21,
            column: 65,
        };
        const syntaxes = trino.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.']);
    });
});
