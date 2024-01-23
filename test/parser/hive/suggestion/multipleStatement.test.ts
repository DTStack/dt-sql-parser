import fs from 'fs';
import path from 'path';
import HiveSQL from 'src/parser/hive';
import { CaretPosition, EntityContextType } from 'src/parser/common/basic-parser-types';

const syntaxSql = fs.readFileSync(
    path.join(__dirname, 'fixtures', 'multipleStatement.sql'),
    'utf-8'
);

describe('HiveSQL Multiple Statements Syntax Suggestion', () => {
    const parser = new HiveSQL();

    test('Select from table ', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 15,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
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
            (syn) => syn.syntaxContextType === EntityContextType.TABLE_CREATE
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
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('Insert into select from table ', () => {
        const pos: CaretPosition = {
            lineNumber: 21,
            column: 75,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });
});
