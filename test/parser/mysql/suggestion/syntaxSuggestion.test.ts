import fs from 'fs';
import path from 'path';
import { MySQL } from 'src/parser/mysql';
import { EntityContextType, CaretPosition } from 'src/parser/common/types';
import { commentOtherLine } from 'test/helper';

const syntaxSql = fs.readFileSync(
    path.join(__dirname, 'fixtures', 'syntaxSuggestion.sql'),
    'utf-8'
);

describe('MySQL Syntax Suggestion', () => {
    const mysql = new MySQL();

    test('Validate Syntax SQL', () => {
        expect(mysql.validate(syntaxSql).length).not.toBe(0);
    });

    test('Insert table ', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 18,
        };
        const syntaxes = mysql.getSuggestionAtCaretPosition(
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
                text: 'db',
                line: 1,
                startIndex: 12,
                endIndex: 13,
                startColumn: 13,
                endColumn: 15,
            },
            {
                text: '.',
                line: 1,
                startIndex: 14,
                endIndex: 14,
                startColumn: 15,
                endColumn: 16,
            },
            {
                text: 'tb',
                line: 1,
                startIndex: 15,
                endIndex: 16,
                startColumn: 16,
                endColumn: 18,
            },
        ]);
    });

    test('Select table ', () => {
        const pos: CaretPosition = {
            lineNumber: 3,
            column: 18,
        };
        const syntaxes = mysql.getSuggestionAtCaretPosition(
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
        const syntaxes = mysql.getSuggestionAtCaretPosition(
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
        const syntaxes = mysql.getSuggestionAtCaretPosition(
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
        const syntaxes = mysql.getSuggestionAtCaretPosition(
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
        const syntaxes = mysql.getSuggestionAtCaretPosition(
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
        const syntaxes = mysql.getSuggestionAtCaretPosition(
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
        const syntaxes = mysql.getSuggestionAtCaretPosition(
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
        const syntaxes = mysql.getSuggestionAtCaretPosition(
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
        const syntaxes = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.DATABASE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['sch']);
    });

    test('Analyze table on column', () => {
        const pos: CaretPosition = {
            lineNumber: 21,
            column: 39,
        };
        const syntaxes = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['c1']);
    });

    test('Select columnName', () => {
        const pos: CaretPosition = {
            lineNumber: 23,
            column: 17,
        };
        const syntaxes = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['age']);
    });

    test('Alter table rename columns', () => {
        const pos: CaretPosition = {
            lineNumber: 25,
            column: 39,
        };
        const syntaxes = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('Alter table rename columns to', () => {
        const pos: CaretPosition = {
            lineNumber: 27,
            column: 48,
        };
        const syntaxes = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['t']);
    });

    test('Alter table add column', () => {
        const pos: CaretPosition = {
            lineNumber: 29,
            column: 22,
        };
        const syntaxes = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['c2']);
    });

    test('Alter table change columns', () => {
        const pos: CaretPosition = {
            lineNumber: 31,
            column: 41,
        };
        const syntaxes = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['FirstName']);
    });

    test('Insert into table spec columns', () => {
        const pos: CaretPosition = {
            lineNumber: 33,
            column: 24,
        };
        const syntaxes = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('Insert into table spec columns2', () => {
        const pos: CaretPosition = {
            lineNumber: 35,
            column: 29,
        };
        const syntaxes = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['n']);
    });

    test('Select columns case empty', () => {
        const pos: CaretPosition = {
            lineNumber: 37,
            column: 8,
        };
        const syntaxes = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('Select columns case seq', () => {
        const pos: CaretPosition = {
            lineNumber: 39,
            column: 13,
        };
        const syntaxes = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['n']);
    });

    test('Select columns from table case empty', () => {
        const pos: CaretPosition = {
            lineNumber: 41,
            column: 8,
        };
        const syntaxes = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('Select columns from table case seq', () => {
        const pos: CaretPosition = {
            lineNumber: 43,
            column: 13,
        };
        const syntaxes = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['n']);
    });

    test('Select group by', () => {
        const pos: CaretPosition = {
            lineNumber: 45,
            column: 32,
        };
        const syntaxes = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('Select group by', () => {
        const pos: CaretPosition = {
            lineNumber: 47,
            column: 39,
        };
        const syntaxes = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['i']);
    });

    test('Select group by rollup', () => {
        const pos: CaretPosition = {
            lineNumber: 49,
            column: 37,
        };
        const syntaxes = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('show create function', () => {
        const pos: CaretPosition = {
            lineNumber: 51,
            column: 31,
        };
        const syntaxes = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.FUNCTION
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['func_name']);
    });

    test('show create table', () => {
        const pos: CaretPosition = {
            lineNumber: 53,
            column: 27,
        };
        const syntaxes = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['tbl_name']);
    });

    test('show create dbName', () => {
        const pos: CaretPosition = {
            lineNumber: 55,
            column: 43,
        };
        const syntaxes = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.DATABASE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db_name']);
    });

    test('show create view', () => {
        const pos: CaretPosition = {
            lineNumber: 57,
            column: 24,
        };
        const syntaxes = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.VIEW
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['test', '.', 'v']);
    });

    test('Select expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 59,
            column: 24,
        };
        const syntaxes = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['salary']);
    });

    test('Group by expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 59,
            column: 72,
        };
        const syntaxes = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['user']);
    });

    test('Having expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 59,
            column: 91,
        };
        const syntaxes = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['salary']);
    });

    test('Select expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 59,
            column: 46,
        };
        const syntaxes = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['age']);
    });

    test('Join expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 61,
            column: 85,
        };
        const syntaxes = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([
            'p',
            '.',
            'category_id',
        ]);
    });

    test('Case expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 63,
            column: 30,
        };
        const syntaxes = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['score']);
    });

    test('Sync suggestion no duplicate syntaxContextType', () => {
        const pos: CaretPosition = {
            lineNumber: 65,
            column: 8,
        };
        const syntaxes = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const syntaxContextTypes = syntaxes?.map((syn) => syn.syntaxContextType);

        expect(syntaxContextTypes).not.toBeUndefined();
        expect(syntaxContextTypes).toEqual([EntityContextType.FUNCTION, EntityContextType.COLUMN]);
    });

    test('Select function or column', () => {
        const pos: CaretPosition = {
            lineNumber: 67,
            column: 11,
        };
        const syntaxes = mysql.getSuggestionAtCaretPosition(
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

        const syntaxes = mysql.getSuggestionAtCaretPosition(sql, pos)?.syntax;
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

        const syntaxes = mysql.getSuggestionAtCaretPosition(sql, pos)?.syntax;
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

        const syntaxes = mysql.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.']);
    });
});
