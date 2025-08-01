import fs from 'fs';
import path from 'path';
import { ImpalaSQL } from 'src/parser/impala';
import { CaretPosition, EntityContextType } from 'src/parser/common/types';
import { commentOtherLine } from 'test/helper';

const syntaxSql = fs.readFileSync(
    path.join(__dirname, 'fixtures', 'syntaxSuggestion.sql'),
    'utf-8'
);

describe('Impala SQL Syntax Suggestion', () => {
    const impala = new ImpalaSQL();

    test('Select table', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 20,
        };
        const syntaxes = impala.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges?.length).toBe(3);
        expect(suggestion?.wordRanges).toEqual([
            {
                text: 'cat',
                line: 1,
                startIndex: 14,
                endIndex: 16,
                startColumn: 15,
                endColumn: 18,
            },
            {
                text: '.',
                line: 1,
                startIndex: 17,
                endIndex: 17,
                startColumn: 18,
                endColumn: 19,
            },
            {
                text: 'a',
                line: 1,
                startIndex: 18,
                endIndex: 18,
                startColumn: 19,
                endColumn: 20,
            },
        ]);
    });

    test('Function call', () => {
        const pos: CaretPosition = {
            lineNumber: 3,
            column: 27,
        };
        const syntaxes = impala.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.FUNCTION
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['calculate_age']);
    });

    test('Alter database', () => {
        const pos: CaretPosition = {
            lineNumber: 5,
            column: 19,
        };
        const syntaxes = impala.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.DATABASE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['cat']);
    });

    test('Alter table', () => {
        const pos: CaretPosition = {
            lineNumber: 7,
            column: 21,
        };
        const syntaxes = impala.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['my_table']);
    });

    test('Alter table column', () => {
        const pos: CaretPosition = {
            lineNumber: 7,
            column: 32,
        };
        const syntaxes = impala.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['age']);
    });

    test('Alter view', () => {
        const pos: CaretPosition = {
            lineNumber: 9,
            column: 19,
        };
        const syntaxes = impala.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.VIEW
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['my_view']);
    });

    test('Drop view', () => {
        const pos: CaretPosition = {
            lineNumber: 11,
            column: 12,
        };
        const syntaxes = impala.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.VIEW
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['v']);
    });

    test('Drop database', () => {
        const pos: CaretPosition = {
            lineNumber: 13,
            column: 20,
        };
        const syntaxes = impala.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.DATABASE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['my_db']);
    });

    test('Drop table', () => {
        const pos: CaretPosition = {
            lineNumber: 15,
            column: 20,
        };
        const syntaxes = impala.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['my_table']);
    });

    test('Drop function', () => {
        const pos: CaretPosition = {
            lineNumber: 17,
            column: 22,
        };
        const syntaxes = impala.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.FUNCTION
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['my_func']);
    });

    test('DELETE table', () => {
        const pos: CaretPosition = {
            lineNumber: 19,
            column: 21,
        };
        const syntaxes = impala.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['my_table']);
    });

    test('Create view', () => {
        const pos: CaretPosition = {
            lineNumber: 21,
            column: 15,
        };
        const syntaxes = impala.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.VIEW_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['cv']);
    });

    test('Create table', () => {
        const pos: CaretPosition = {
            lineNumber: 23,
            column: 20,
        };
        const syntaxes = impala.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['cat', '.', 'db']);
    });

    test('Create Function', () => {
        const pos: CaretPosition = {
            lineNumber: 25,
            column: 20,
        };
        const syntaxes = impala.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.FUNCTION_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['fnc']);
    });

    test('Create database', () => {
        const pos: CaretPosition = {
            lineNumber: 27,
            column: 25,
        };
        const syntaxes = impala.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.DATABASE_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['FIRST_DB']);
    });

    test('Show tables in', () => {
        const pos: CaretPosition = {
            lineNumber: 29,
            column: 19,
        };
        const syntaxes = impala.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['cat']);
    });

    test('Show column stats table', () => {
        const pos: CaretPosition = {
            lineNumber: 31,
            column: 22,
        };
        const syntaxes = impala.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['vie']);
    });

    test('Show create table', () => {
        const pos: CaretPosition = {
            lineNumber: 33,
            column: 22,
        };
        const syntaxes = impala.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['tb1']);
    });

    test('Show create view', () => {
        const pos: CaretPosition = {
            lineNumber: 35,
            column: 20,
        };
        const syntaxes = impala.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.VIEW
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['v1']);
    });

    test('Select group by', () => {
        const pos: CaretPosition = {
            lineNumber: 37,
            column: 22,
        };
        const syntaxes = impala.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['id']);
    });

    test('Select order by', () => {
        const pos: CaretPosition = {
            lineNumber: 39,
            column: 22,
        };
        const syntaxes = impala.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['id']);
    });

    test('Create Table column', () => {
        const pos: CaretPosition = {
            lineNumber: 41,
            column: 36,
        };
        const syntaxes = impala.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['last_name']);
    });

    test('Alert Table column', () => {
        const pos: CaretPosition = {
            lineNumber: 43,
            column: 36,
        };
        const syntaxes = impala.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['age']);
    });

    test('Create Table kudu', () => {
        const pos: CaretPosition = {
            lineNumber: 45,
            column: 45,
        };
        const syntaxes = impala.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['id']);
    });

    test('Create Table partitions', () => {
        const pos: CaretPosition = {
            lineNumber: 47,
            column: 49,
        };
        const syntaxes = impala.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['YEAR']);
    });

    test('Sync suggestion no duplicate syntaxContextType', () => {
        const pos: CaretPosition = {
            lineNumber: 49,
            column: 8,
        };
        const syntaxes = impala.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const syntaxContextTypes = syntaxes?.map((syn) => syn.syntaxContextType);

        expect(syntaxContextTypes).not.toBeUndefined();
        expect(syntaxContextTypes).toEqual([EntityContextType.COLUMN, EntityContextType.FUNCTION]);
    });

    test('Select function or column', () => {
        const pos: CaretPosition = {
            lineNumber: 51,
            column: 11,
        };
        const syntaxes = impala.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const wordRangesArr = syntaxes?.map((syn) => syn.wordRanges);

        expect(wordRangesArr).not.toBeUndefined();
        expect(wordRangesArr.length).toBe(2);
        expect(
            wordRangesArr.map((wordRanges) => wordRanges.map((wordRange) => wordRange.text))
        ).toEqual([['age'], ['age']]);
    });

    test('Syntax suggestion after a comment', () => {
        const sql = `-- the comment\nSELECT * FROM db.`;
        const pos: CaretPosition = {
            lineNumber: 2,
            column: 18,
        };

        const syntaxes = impala.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.']);
    });

    test('Syntax suggestion after comments', () => {
        const sql = `-- the comment 1\n-- the comment 2\nSELECT * FROM db.`;
        const pos: CaretPosition = {
            lineNumber: 3,
            column: 18,
        };

        const syntaxes = impala.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.']);
    });

    test('Syntax suggestion after comments', () => {
        const sql = `-- SELECT FROM t1;\n-- the comment 1\n-- the comment 2\nSELECT * FROM db.`;
        const pos: CaretPosition = {
            lineNumber: 4,
            column: 18,
        };

        const syntaxes = impala.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.']);
    });
});
