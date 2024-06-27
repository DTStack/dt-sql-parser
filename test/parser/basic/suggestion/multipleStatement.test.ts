import fs from 'fs';
import path from 'path';
import { BasicSQL } from 'src/parser/basic';
import { CaretPosition, EntityContextType } from 'src/parser/common/types';

const syntaxSql = fs.readFileSync(
    path.join(__dirname, 'fixtures', 'multipleStatement.sql'),
    'utf-8'
);

describe('BasicSQL Multiple Statements Syntax Suggestion', () => {
    const basic = new BasicSQL();

    test('Create table ', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 14,
        };
        const syntaxes = basic.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('Select from table', () => {
        const pos: CaretPosition = {
            lineNumber: 9,
            column: 18,
        };
        const syntaxes = basic.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.']);
    });

    test('Insert into table ', () => {
        const pos: CaretPosition = {
            lineNumber: 15,
            column: 13,
        };
        const syntaxes = basic.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
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
        const syntaxes = basic.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.']);
    });
});
