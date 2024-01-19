import fs from 'fs';
import path from 'path';
import PostgresSQL from 'src/parser/pgsql';
import { CaretPosition, SyntaxContextType } from 'src/parser/common/basic-parser-types';
import { commentOtherLine } from 'test/helper';

const syntaxSql = fs.readFileSync(
    path.join(__dirname, 'fixtures', 'syntaxSuggestion.sql'),
    'utf-8'
);

describe('Postgre SQL Syntax Suggestion', () => {
    const parser = new PostgresSQL();

    test('Validate Syntax SQL', () => {
        expect(parser.validate(syntaxSql).length).not.toBe(0);
        expect(parser.validate(syntaxSql).length).not.toBe(0);
        expect(parser.validate(syntaxSql).length).not.toBe(0);
    });

    test('Insert table ', () => {
        const pos: CaretPosition = {
            lineNumber: 3,
            column: 18,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.', 'tb']);
    });

    test('Alter table ', () => {
        const pos: CaretPosition = {
            lineNumber: 7,
            column: 15,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db']);
    });

    test('Select table', () => {
        const pos: CaretPosition = {
            lineNumber: 5,
            column: 18,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.']);
    });

    test('Create table ', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 18,
        };
        const pos1: CaretPosition = {
            lineNumber: 1,
            column: 31,
        };
        const pos2: CaretPosition = {
            lineNumber: 1,
            column: 67,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const syntaxes1 = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos1.lineNumber),
            pos1
        )?.syntax;
        const syntaxes2 = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos2.lineNumber),
            pos2
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.TABLE_CREATE
        );
        const suggestion1 = syntaxes1?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        const suggestion2 = syntaxes2?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.', 's']);
        expect(suggestion1).not.toBeUndefined();
        expect(suggestion1?.wordRanges.map((token) => token.text)).toEqual(['column_name']);
        expect(suggestion2).not.toBeUndefined();
        expect(suggestion2?.wordRanges.map((token) => token.text)).toEqual(['column_name']);
    });

    test('Create view ', () => {
        const pos: CaretPosition = {
            lineNumber: 9,
            column: 28,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.VIEW_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.', 'v']);
    });

    test('Drop view ', () => {
        const pos: CaretPosition = {
            lineNumber: 13,
            column: 14,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.VIEW
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.']);
    });

    test('Alter view ', () => {
        const pos: CaretPosition = {
            lineNumber: 11,
            column: 16,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.VIEW
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.', 'v']);
    });

    test('Create function ', () => {
        const pos: CaretPosition = {
            lineNumber: 15,
            column: 20,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.FUNCTION_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['fn1']);
    });

    test('Drop function', () => {
        const pos: CaretPosition = {
            lineNumber: 17,
            column: 18,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.FUNCTION
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['fn1']);
    });

    test('Create database', () => {
        const pos: CaretPosition = {
            lineNumber: 19,
            column: 19,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.DATABASE_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db']);
    });

    test('Drop database', () => {
        const pos: CaretPosition = {
            lineNumber: 21,
            column: 17,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.DATABASE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db']);
    });

    test('Alter database', () => {
        const pos: CaretPosition = {
            lineNumber: 23,
            column: 18,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.DATABASE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db']);
    });

    test('Create schema', () => {
        const pos: CaretPosition = {
            lineNumber: 25,
            column: 40,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.DATABASE_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['schema_name']);
    });

    test('Drop schema', () => {
        const pos: CaretPosition = {
            lineNumber: 27,
            column: 26,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.DATABASE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['sch']);
    });

    test('Alter schema', () => {
        const pos: CaretPosition = {
            lineNumber: 29,
            column: 18,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.DATABASE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['name']);
    });

    test('Alter Foreign Table With Column', () => {
        const pos: CaretPosition = {
            lineNumber: 31,
            column: 50,
        };
        const posCreate: CaretPosition = {
            lineNumber: 31,
            column: 69,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const syntaxesCreate = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, posCreate.lineNumber),
            posCreate
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        const suggestionCreate = syntaxesCreate?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['column_name']);
        expect(suggestionCreate).not.toBeUndefined();
        expect(suggestionCreate?.wordRanges.map((token) => token.text)).toEqual([
            'new_column_name',
        ]);
    });

    test('Alter MATERIALIZED VIEW With Column', () => {
        const pos: CaretPosition = {
            lineNumber: 33,
            column: 60,
        };
        const posCreate: CaretPosition = {
            lineNumber: 33,
            column: 79,
        };
        const posAction: CaretPosition = {
            lineNumber: 35,
            column: 52,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const syntaxesCreate = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, posCreate.lineNumber),
            posCreate
        )?.syntax;
        const syntaxesAction = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, posAction.lineNumber),
            posAction
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        const suggestionCreate = syntaxesCreate?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN_CREATE
        );
        const suggestionAction = syntaxesAction?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['column_name']);
        expect(suggestionCreate).not.toBeUndefined();
        expect(suggestionCreate?.wordRanges.map((token) => token.text)).toEqual([
            'new_column_name',
        ]);
        expect(suggestionAction).not.toBeUndefined();
        expect(suggestionAction?.wordRanges.map((token) => token.text)).toEqual(['column_name']);
    });

    test('Alter PUBLICATION With Column', () => {
        const pos: CaretPosition = {
            lineNumber: 37,
            column: 58,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['column_name']);
    });

    test('Alter SEQUENCE With Column', () => {
        const pos: CaretPosition = {
            lineNumber: 39,
            column: 52,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['column_name']);
    });

    test('Alter Table With Column', () => {
        const pos: CaretPosition = {
            lineNumber: 7,
            column: 33,
        };
        const posCreate: CaretPosition = {
            lineNumber: 41,
            column: 34,
        };
        const posAction: CaretPosition = {
            lineNumber: 41,
            column: 53,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const syntaxesCreate = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, posCreate.lineNumber),
            posCreate
        )?.syntax;
        const syntaxesAction = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, posAction.lineNumber),
            posAction
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        const suggestionCreate = syntaxesCreate?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        const suggestionAction = syntaxesAction?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['column_name']);
        expect(suggestionCreate).not.toBeUndefined();
        expect(suggestionCreate?.wordRanges.map((token) => token.text)).toEqual(['column_name']);
        expect(suggestionAction).not.toBeUndefined();
        expect(suggestionAction?.wordRanges.map((token) => token.text)).toEqual([
            'new_column_name',
        ]);
    });

    test('ANALYZE With Column', () => {
        const pos: CaretPosition = {
            lineNumber: 43,
            column: 32,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['column_name']);
    });

    test('Comment On With Column', () => {
        const pos: CaretPosition = {
            lineNumber: 45,
            column: 44,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['column_name']);
    });

    test('Copy With Column', () => {
        const pos: CaretPosition = {
            lineNumber: 47,
            column: 26,
        };
        const pos1: CaretPosition = {
            lineNumber: 47,
            column: 37,
        };
        const pos2: CaretPosition = {
            lineNumber: 47,
            column: 84,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const syntaxes1 = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos1.lineNumber),
            pos1
        )?.syntax;
        const syntaxes2 = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos2.lineNumber),
            pos2
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        const suggestion1 = syntaxes1?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        const suggestion2 = syntaxes2?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['col_name']);
        expect(suggestion1).not.toBeUndefined();
        expect(suggestion1?.wordRanges.map((token) => token.text)).toEqual(['col_name2']);
        expect(suggestion2).not.toBeUndefined();
        expect(suggestion2?.wordRanges.map((token) => token.text)).toEqual(['clumn_name']);
    });

    test('Create Foreign Table With Column', () => {
        const pos: CaretPosition = {
            lineNumber: 49,
            column: 45,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['column_name']);
    });

    test('Create Function With Column', () => {
        const pos: CaretPosition = {
            lineNumber: 51,
            column: 54,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['column_name']);
    });

    test('Create Index With Column', () => {
        const pos: CaretPosition = {
            lineNumber: 53,
            column: 40,
        };
        const pos1: CaretPosition = {
            lineNumber: 53,
            column: 60,
        };
        const pos2: CaretPosition = {
            lineNumber: 53,
            column: 71,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const syntaxes1 = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos1.lineNumber),
            pos1
        )?.syntax;
        const syntaxes2 = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos2.lineNumber),
            pos2
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        const suggestion1 = syntaxes1?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        const suggestion2 = syntaxes2?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['column_name']);
        expect(suggestion1).not.toBeUndefined();
        expect(suggestion1?.wordRanges.map((token) => token.text)).toEqual(['col_name1']);
        expect(suggestion2).not.toBeUndefined();
        expect(suggestion2?.wordRanges.map((token) => token.text)).toEqual(['col_name2']);
    });

    test('Create MATERIALIZED VIEW With Column', () => {
        const pos: CaretPosition = {
            lineNumber: 55,
            column: 46,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['col_name']);
    });

    test('Create STATISTICS With Column', () => {
        const pos: CaretPosition = {
            lineNumber: 57,
            column: 33,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['column_name']);
    });

    test('Create TRIGGER With Column', () => {
        const pos: CaretPosition = {
            lineNumber: 59,
            column: 48,
        };
        const pos1: CaretPosition = {
            lineNumber: 59,
            column: 93,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const syntaxes1 = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos1.lineNumber),
            pos1
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        const suggestion1 = syntaxes1?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.FUNCTION
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['column_name']);
        expect(suggestion1).not.toBeUndefined();
        expect(suggestion1?.wordRanges.map((token) => token.text)).toEqual(['function_name']);
    });

    test('GRANT With Column', () => {
        const pos: CaretPosition = {
            lineNumber: 61,
            column: 27,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['column_name']);
    });

    test('Insert Into With Column', () => {
        const pos: CaretPosition = {
            lineNumber: 63,
            column: 36,
        };
        const pos1: CaretPosition = {
            lineNumber: 63,
            column: 83,
        };
        const pos2: CaretPosition = {
            lineNumber: 63,
            column: 114,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const syntaxes1 = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos1.lineNumber),
            pos1
        )?.syntax;
        const syntaxes2 = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos2.lineNumber),
            pos2
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        const suggestion1 = syntaxes1?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        const suggestion2 = syntaxes2?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['column_name']);
        expect(suggestion1).not.toBeUndefined();
        expect(suggestion1?.wordRanges.map((token) => token.text)).toEqual(['index_column_name']);
        expect(suggestion2).not.toBeUndefined();
        expect(suggestion2?.wordRanges.map((token) => token.text)).toEqual(['column_name_exp']);
    });

    test('Merge With Column', () => {
        const pos: CaretPosition = {
            lineNumber: 65,
            column: 132,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['col_name']);
    });
    test('REVOKE With Column', () => {
        const pos: CaretPosition = {
            lineNumber: 67,
            column: 23,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['co_name']);
    });

    test('SECURITY With Column', () => {
        const pos: CaretPosition = {
            lineNumber: 69,
            column: 46,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['columnname']);
    });

    test('Select With Column', () => {
        const pos: CaretPosition = {
            lineNumber: 71,
            column: 31,
        };
        const pos1: CaretPosition = {
            lineNumber: 71,
            column: 103,
        };
        const pos2: CaretPosition = {
            lineNumber: 71,
            column: 119,
        };
        const pos3: CaretPosition = {
            lineNumber: 71,
            column: 134,
        };
        const pos4: CaretPosition = {
            lineNumber: 71,
            column: 147,
        };
        const pos5: CaretPosition = {
            lineNumber: 71,
            column: 162,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const syntaxes1 = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos1.lineNumber),
            pos1
        )?.syntax;
        const syntaxes2 = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos2.lineNumber),
            pos2
        )?.syntax;
        const syntaxes3 = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos3.lineNumber),
            pos3
        )?.syntax;
        const syntaxes4 = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos4.lineNumber),
            pos4
        )?.syntax;
        const syntaxes5 = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos5.lineNumber),
            pos5
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        const suggestion1 = syntaxes1?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        const suggestion2 = syntaxes2?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        const suggestion3 = syntaxes3?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        const suggestion4 = syntaxes4?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );

        const suggestion5 = syntaxes5?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['col_name']);
        expect(suggestion1).not.toBeUndefined();
        expect(suggestion1?.wordRanges.map((token) => token.text)).toEqual(['column_name']);
        expect(suggestion2).not.toBeUndefined();
        expect(suggestion2?.wordRanges.map((token) => token.text)).toEqual(['column_name']);
        expect(suggestion3).not.toBeUndefined();
        expect(suggestion3?.wordRanges.map((token) => token.text)).toEqual(['col_name']);
        expect(suggestion4).not.toBeUndefined();
        expect(suggestion4?.wordRanges.map((token) => token.text)).toEqual(['col_name']);
        expect(suggestion5).not.toBeUndefined();
        expect(suggestion5?.wordRanges.map((token) => token.text)).toEqual(['col_name']);
    });

    test('Update With Column', () => {
        const pos: CaretPosition = {
            lineNumber: 73,
            column: 32,
        };
        const pos1: CaretPosition = {
            lineNumber: 73,
            column: 47,
        };
        const pos2: CaretPosition = {
            lineNumber: 73,
            column: 53,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const syntaxes1 = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos1.lineNumber),
            pos1
        )?.syntax;
        const syntaxes2 = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos2.lineNumber),
            pos2
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        const suggestion1 = syntaxes1?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        const suggestion2 = syntaxes2?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['columnname']);
        expect(suggestion1).not.toBeUndefined();
        expect(suggestion1?.wordRanges.map((token) => token.text)).toEqual(['col1']);
        expect(suggestion2).not.toBeUndefined();
        expect(suggestion2?.wordRanges.map((token) => token.text)).toEqual(['col2']);
    });

    test('Vacuum With Column', () => {
        const pos: CaretPosition = {
            lineNumber: 75,
            column: 23,
        };
        const pos1: CaretPosition = {
            lineNumber: 75,
            column: 29,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const syntaxes1 = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos1.lineNumber),
            pos1
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        const suggestion1 = syntaxes1?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['col1']);
        expect(suggestion1).not.toBeUndefined();
        expect(suggestion1?.wordRanges.map((token) => token.text)).toEqual(['col2']);
    });
    test('Select table with expression', () => {
        const pos1: CaretPosition = {
            lineNumber: 77,
            column: 36,
        };
        const pos2: CaretPosition = {
            lineNumber: 77,
            column: 42,
        };
        const pos3: CaretPosition = {
            lineNumber: 77,
            column: 57,
        };
        const syntaxes1 = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos1.lineNumber),
            pos1
        )?.syntax;
        const syntaxes2 = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos2.lineNumber),
            pos2
        )?.syntax;
        const syntaxes3 = parser.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos3.lineNumber),
            pos3
        )?.syntax;
        const suggestion1 = syntaxes1?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        const suggestion2 = syntaxes2?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );
        const suggestion3 = syntaxes3?.find(
            (syn) => syn.syntaxContextType === SyntaxContextType.COLUMN
        );

        expect(suggestion1).not.toBeUndefined();
        expect(suggestion1?.wordRanges.map((token) => token.text)).toEqual(['col1']);
        expect(suggestion2).not.toBeUndefined();
        expect(suggestion2?.wordRanges.map((token) => token.text)).toEqual(['col2']);
        expect(suggestion3).not.toBeUndefined();
        expect(suggestion3?.wordRanges.map((token) => token.text)).toEqual(['col3']);
    });
});
