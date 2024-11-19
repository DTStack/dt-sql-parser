import fs from 'fs';
import path from 'path';
import { SparkSQL } from 'src/parser/spark';
import { CaretPosition, EntityContextType } from 'src/parser/common/types';

const syntaxSql = fs.readFileSync(
    path.join(__dirname, 'fixtures', 'multipleStatement.sql'),
    'utf-8'
);

describe('SparkSQL Multiple Statements Syntax Suggestion', () => {
    const spark = new SparkSQL();

    test('Create table ', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 14,
        };
        const syntaxes = spark.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
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
        const syntaxes = spark.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges?.length).toBe(2);
        expect(suggestion?.wordRanges).toEqual([
            {
                endColumn: 17,
                endIndex: 258,
                line: 9,
                startColumn: 15,
                startIndex: 257,
                text: 'db',
            },
            {
                endColumn: 18,
                endIndex: 259,
                line: 9,
                startColumn: 17,
                startIndex: 259,
                text: '.',
            },
        ]);
    });

    test('Insert into table ', () => {
        const pos: CaretPosition = {
            lineNumber: 15,
            column: 13,
        };
        const syntaxes = spark.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
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
        const syntaxes = spark.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.']);
    });
});
