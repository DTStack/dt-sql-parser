import fs from 'fs';
import path from 'path';
import { HiveSQL } from 'src/parser/hive';
import { CaretPosition, EntityContextType } from 'src/parser/common/types';

const syntaxSql = fs.readFileSync(
    path.join(__dirname, 'fixtures', 'multipleStatement.sql'),
    'utf-8'
);

describe('HiveSQL Multiple Statements Syntax Suggestion', () => {
    const hive = new HiveSQL();

    test('Select from table ', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 15,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
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
        const syntaxes = hive.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges?.length).toBe(2);
        expect(suggestion?.wordRanges).toEqual([
            {
                text: 'db',
                line: 9,
                startIndex: 272,
                endIndex: 273,
                startColumn: 14,
                endColumn: 16,
            },
            {
                text: '.',
                line: 9,
                startIndex: 274,
                endIndex: 274,
                startColumn: 16,
                endColumn: 17,
            },
        ]);
    });

    test('Insert into table ', () => {
        const pos: CaretPosition = {
            lineNumber: 15,
            column: 13,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
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
        const syntaxes = hive.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });
});
