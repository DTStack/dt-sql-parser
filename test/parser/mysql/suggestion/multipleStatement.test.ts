import fs from 'fs';
import path from 'path';
import { CaretPosition, SyntaxContextType } from '../../../../src/parser/common/basic-parser-types';
import MySQL from '../../../../src/parser/mysql';

const syntaxSql = fs.readFileSync(
    path.join(__dirname, 'fixtures', 'multipleStatement.sql'),
    'utf-8'
);

describe('MySQL Multiple Statements Syntax Suggestion', () => {
    const parser = new MySQL();

    test('Select from table ', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 15,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('Create table ', () => {
        const pos: CaretPosition = {
            lineNumber: 9,
            column: 17,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.TABLE_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.']);
    });

    test('Insert into table ', () => {
        const pos: CaretPosition = {
            lineNumber: 15,
            column: 13,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('Insert into select from table ', () => {
        const pos: CaretPosition = {
            lineNumber: 21,
            column: 87,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });
});
