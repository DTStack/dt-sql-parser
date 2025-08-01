import fs from 'fs';
import path from 'path';
import { TrinoSQL } from 'src/parser/trino';
import { CaretPosition, EntityContextType } from 'src/parser/common/types';
import { commentOtherLine } from 'test/helper';

const syntaxSql = fs.readFileSync(
    path.join(__dirname, 'fixtures', 'syntaxSuggestion.sql'),
    'utf-8'
);

describe('Trino SQL Syntax Suggestion', () => {
    const trino = new TrinoSQL();

    test('Validate Syntax SQL', () => {
        expect(trino.validate(syntaxSql).length).not.toBe(0);
        expect(trino.validate(syntaxSql).length).not.toBe(0);
        expect(trino.validate(syntaxSql).length).not.toBe(0);
    });

    test('Insert table ', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 18,
        };
        const syntaxes = trino.getSuggestionAtCaretPosition(
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
            column: 20,
        };
        const syntaxes =
            trino.getSuggestionAtCaretPosition(commentOtherLine(syntaxSql, pos.lineNumber), pos)
                ?.syntax ?? [];

        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(
            syntaxes.some((item) => item.syntaxContextType === EntityContextType.VIEW)
        ).toBeTruthy();
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.']);
    });

    test('Create table ', () => {
        const pos: CaretPosition = {
            lineNumber: 5,
            column: 17,
        };
        const syntaxes = trino.getSuggestionAtCaretPosition(
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
        const syntaxes = trino.getSuggestionAtCaretPosition(
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
        const syntaxes = trino.getSuggestionAtCaretPosition(
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
        const syntaxes = trino.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.VIEW
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.', 'v']);
    });

    test('Use function', () => {
        const pos: CaretPosition = {
            lineNumber: 13,
            column: 27,
        };
        const syntaxes = trino.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.FUNCTION
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['calculate_age']);
    });

    test('Create schema', () => {
        const pos: CaretPosition = {
            lineNumber: 15,
            column: 17,
        };
        const syntaxes = trino.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.DATABASE_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db']);
    });

    test('Drop schema', () => {
        const pos: CaretPosition = {
            lineNumber: 17,
            column: 26,
        };
        const syntaxes = trino.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.DATABASE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['sch']);
    });

    test('Show Column From', () => {
        const pos: CaretPosition = {
            lineNumber: 19,
            column: 21,
        };
        const syntaxes =
            trino.getSuggestionAtCaretPosition(commentOtherLine(syntaxSql, pos.lineNumber), pos)
                ?.syntax ?? [];

        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );
        expect(
            syntaxes.some((item) => item.syntaxContextType === EntityContextType.VIEW)
        ).toBeTruthy();
        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['tb']);
    });

    test('Comment on column', () => {
        const pos: CaretPosition = {
            lineNumber: 21,
            column: 22,
        };
        const syntaxes = trino.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['tb', '.']);
    });

    test('RENAME column', () => {
        const pos: CaretPosition = {
            lineNumber: 23,
            column: 30,
        };
        const syntaxes = trino.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;

        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('RENAME column to', () => {
        const pos: CaretPosition = {
            lineNumber: 25,
            column: 37,
        };
        const syntaxes = trino.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;

        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('Drop column', () => {
        const pos: CaretPosition = {
            lineNumber: 27,
            column: 31,
        };
        const syntaxes = trino.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;

        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('Alter table add column', () => {
        const pos: CaretPosition = {
            lineNumber: 29,
            column: 32,
        };
        const syntaxes = trino.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;

        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['zi']);
    });

    test('Show comment on column', () => {
        const pos: CaretPosition = {
            lineNumber: 31,
            column: 28,
        };
        const syntaxes = trino.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['tb', '.', 'c']);
    });

    test('Insert into spec column', () => {
        const pos: CaretPosition = {
            lineNumber: 33,
            column: 21,
        };
        const syntaxes = trino.getSuggestionAtCaretPosition(
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
            lineNumber: 35,
            column: 27,
        };
        const syntaxes = trino.getSuggestionAtCaretPosition(
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
            lineNumber: 37,
            column: 27,
        };
        const syntaxes = trino.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('Create Catalog', () => {
        const pos: CaretPosition = {
            lineNumber: 39,
            column: 16,
        };
        const syntaxes = trino.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.CATALOG_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });
    test('Drop Catalog', () => {
        const pos: CaretPosition = {
            lineNumber: 41,
            column: 17,
        };
        const syntaxes = trino.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.CATALOG
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['cat']);
    });
    test('Create Function', () => {
        const pos: CaretPosition = {
            lineNumber: 43,
            column: 33,
        };
        const syntaxes = trino.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.FUNCTION_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([
            'example',
            '.',
            'default',
            '.',
        ]);
    });
    test('Drop Function', () => {
        const pos: CaretPosition = {
            lineNumber: 45,
            column: 15,
        };
        const syntaxes = trino.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.FUNCTION
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('GroupBy expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 47,
            column: 44,
        };
        const syntaxes = trino.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['sum', '(']);
    });

    test('Where expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 49,
            column: 42,
        };
        const syntaxes = trino.getSuggestionAtCaretPosition(
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
            lineNumber: 51,
            column: 75,
        };
        const syntaxes = trino.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['amount']);
    });

    test('Order by expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 53,
            column: 32,
        };
        const syntaxes = trino.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['t', '.', 'y']);
    });

    test('Partition by expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 55,
            column: 59,
        };
        const syntaxes = trino.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['clerk']);
    });

    test('Case When expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 57,
            column: 67,
        };
        const syntaxes = trino.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['amount']);
    });

    test('Join expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 59,
            column: 46,
        };
        const syntaxes = trino.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['friends']);
    });

    test('Sync suggestion no duplicate syntaxContextType', () => {
        const pos: CaretPosition = {
            lineNumber: 61,
            column: 8,
        };
        const syntaxes = trino.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const syntaxContextTypes = syntaxes?.map((syn) => syn.syntaxContextType);

        expect(syntaxContextTypes).not.toBeUndefined();
        expect(syntaxContextTypes).toEqual([EntityContextType.COLUMN, EntityContextType.FUNCTION]);
    });

    test('Select function or column', () => {
        const pos: CaretPosition = {
            lineNumber: 63,
            column: 11,
        };
        const syntaxes = trino.getSuggestionAtCaretPosition(
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

        const syntaxes = trino.getSuggestionAtCaretPosition(sql, pos)?.syntax;
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

        const syntaxes = trino.getSuggestionAtCaretPosition(sql, pos)?.syntax;
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

        const syntaxes = trino.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.']);
    });
});
