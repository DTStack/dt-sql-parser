import fs from 'fs';
import path from 'path';
import { HiveSQL } from 'src/parser/hive';
import { CaretPosition, EntityContextType } from 'src/parser/common/types';
import { commentOtherLine } from 'test/helper';

const syntaxSql = fs.readFileSync(
    path.join(__dirname, 'fixtures', 'syntaxSuggestion.sql'),
    'utf-8'
);

describe('Hive SQL Syntax Suggestion', () => {
    const hive = new HiveSQL();

    test('Validate Syntax SQL', () => {
        expect(hive.validate(syntaxSql).length).not.toBe(0);
        expect(hive.validate(syntaxSql).length).not.toBe(0);
        expect(hive.validate(syntaxSql).length).not.toBe(0);
    });

    test('Insert table ', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 18,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.', 'tb']);
    });

    test('Select table ', () => {
        const pos: CaretPosition = {
            lineNumber: 3,
            column: 18,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.']);
    });

    test('Create table ', () => {
        const pos: CaretPosition = {
            lineNumber: 5,
            column: 17,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.']);
    });

    test('DROP table ', () => {
        const pos: CaretPosition = {
            lineNumber: 7,
            column: 26,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.', 'a']);
    });

    test('Create view ', () => {
        const pos: CaretPosition = {
            lineNumber: 9,
            column: 28,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.VIEW_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.', 'v']);
    });

    test('Drop view ', () => {
        const pos: CaretPosition = {
            lineNumber: 11,
            column: 15,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.VIEW
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.', 'v']);
    });

    test('Create function ', () => {
        const pos: CaretPosition = {
            lineNumber: 13,
            column: 20,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.FUNCTION_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['fn1']);
    });

    test('Use function', () => {
        const pos: CaretPosition = {
            lineNumber: 15,
            column: 27,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.FUNCTION
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['calculate_age']);
    });

    test('Create database', () => {
        const pos: CaretPosition = {
            lineNumber: 17,
            column: 19,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.DATABASE_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db']);
    });

    test('Drop database', () => {
        const pos: CaretPosition = {
            lineNumber: 19,
            column: 26,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.DATABASE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['sch']);
    });

    test('Select column with no fill-in', () => {
        const pos: CaretPosition = {
            lineNumber: 23,
            column: 8,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('Insert into spec col', () => {
        const pos: CaretPosition = {
            lineNumber: 25,
            column: 18,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('Select order by', () => {
        const pos: CaretPosition = {
            lineNumber: 27,
            column: 32,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['tb', '.', 'c']);
    });

    test('Create Table new column', () => {
        const pos: CaretPosition = {
            lineNumber: 29,
            column: 31,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['n']);
    });

    test('Merge into when matched', () => {
        const pos: CaretPosition = {
            lineNumber: 31,
            column: 115,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([
            'tablename',
            '.',
            'col',
        ]);
    });

    test('Alter Table rename col', () => {
        const pos: CaretPosition = {
            lineNumber: 33,
            column: 31,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('Alter Table rename col to', () => {
        const pos: CaretPosition = {
            lineNumber: 35,
            column: 45,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['new']);
    });

    test('From Table Select', () => {
        const pos: CaretPosition = {
            lineNumber: 37,
            column: 18,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['table_name_1']);
    });

    test('From Table Select join', () => {
        const pos: CaretPosition = {
            lineNumber: 39,
            column: 14,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['b']);
    });

    test('From Table Insert', () => {
        const pos: CaretPosition = {
            lineNumber: 41,
            column: 19,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['page_view_stg']);
    });

    test('Order by expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 43,
            column: 54,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['b']);
    });

    test('Having expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 45,
            column: 50,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['col2']);
    });

    test('Group by expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 47,
            column: 74,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['col1']);
    });

    test('Where expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 47,
            column: 100,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['t2', '.', 'col2sum']);
    });

    test('Sort by expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 49,
            column: 58,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['col1']);
    });

    test('Cluster by expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 53,
            column: 63,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['customer_id']);
    });

    test('Distribute by expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 55,
            column: 52,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['col1']);
    });

    test('select expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 55,
            column: 18,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['t3', '.', 'col']);
    });

    test('Partition by expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 57,
            column: 40,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['c']);
    });

    test('Join expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 59,
            column: 41,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['b', '.', 'id']);
    });

    test('Cast expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 61,
            column: 89,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['day']);
    });

    test('Case/When expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 61,
            column: 35,
        };
        const syntaxes = hive.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['month']);
    });
});
