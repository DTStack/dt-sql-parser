import fs from 'fs';
import path from 'path';
import { FlinkSQL } from 'src/parser/flink';
import { CaretPosition, EntityContextType } from 'src/parser/common/types';
import { commentOtherLine } from 'test/helper';

const syntaxSql = fs.readFileSync(
    path.join(__dirname, 'fixtures', 'syntaxSuggestion.sql'),
    'utf-8'
);

describe('Flink SQL Syntax Suggestion', () => {
    const flink = new FlinkSQL();

    test('Validate Syntax SQL', () => {
        expect(flink.validate(syntaxSql).length).not.toBe(0);
        expect(flink.validate(syntaxSql).length).not.toBe(0);
        expect(flink.validate(syntaxSql).length).not.toBe(0);
    });

    test('Drop catalog', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 17,
        };
        const syntaxes = flink.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.CATALOG
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges?.length).toBe(1);
        expect(suggestion?.wordRanges).toEqual([
            {
                text: 'cat',
                line: 1,
                startIndex: 13,
                endIndex: 15,
                startColumn: 14,
                endColumn: 17,
            },
        ]);
    });

    test('Select table', () => {
        const pos: CaretPosition = {
            lineNumber: 3,
            column: 19,
        };
        const syntaxes = flink.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['cat', '.']);
    });

    test('Create table', () => {
        const pos: CaretPosition = {
            lineNumber: 5,
            column: 20,
        };
        const syntaxes = flink.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['cat', '.', 'db']);
    });

    test('Show tables from', () => {
        const pos: CaretPosition = {
            lineNumber: 7,
            column: 21,
        };
        const syntaxes = flink.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.DATABASE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['cat']);
    });

    test('Alter database', () => {
        const pos: CaretPosition = {
            lineNumber: 9,
            column: 20,
        };
        const syntaxes = flink.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.DATABASE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['cat', '.']);
    });

    test('Drop view', () => {
        const pos: CaretPosition = {
            lineNumber: 11,
            column: 12,
        };
        const syntaxes = flink.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.VIEW
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['v']);
    });

    test('Select view', () => {
        const pos: CaretPosition = {
            lineNumber: 13,
            column: 15,
        };
        const syntaxes = flink.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.VIEW
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('Create view', () => {
        const pos: CaretPosition = {
            lineNumber: 15,
            column: 15,
        };
        const syntaxes = flink.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.VIEW_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['cv']);
    });

    test('Function call', () => {
        const pos: CaretPosition = {
            lineNumber: 17,
            column: 27,
        };
        const syntaxes = flink.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.FUNCTION
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['calculate_age']);
    });

    test('Create Function', () => {
        const pos: CaretPosition = {
            lineNumber: 19,
            column: 20,
        };
        const syntaxes = flink.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.FUNCTION_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['fnc']);
    });

    test('Show columns from view', () => {
        const pos: CaretPosition = {
            lineNumber: 21,
            column: 22,
        };
        const syntaxes = flink.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.VIEW
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['vie']);
    });

    test('Show create table', () => {
        const pos: CaretPosition = {
            lineNumber: 23,
            column: 22,
        };
        const syntaxes = flink.getSuggestionAtCaretPosition(
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
            lineNumber: 25,
            column: 20,
        };
        const syntaxes = flink.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.VIEW
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['v1']);
    });

    test('Select columns', () => {
        const pos: CaretPosition = {
            lineNumber: 27,
            column: 11,
        };
        const syntaxes = flink.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['col']);
    });

    test('Select columns from table', () => {
        const pos: CaretPosition = {
            lineNumber: 29,
            column: 11,
        };
        const syntaxes = flink.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['col']);
    });

    test('Select multiple columns from table', () => {
        const pos: CaretPosition = {
            lineNumber: 31,
            column: 13,
        };
        const syntaxes = flink.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('Select order by column', () => {
        const pos: CaretPosition = {
            lineNumber: 33,
            column: 27,
        };
        const syntaxes = flink.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('Select group by column', () => {
        const pos: CaretPosition = {
            lineNumber: 35,
            column: 27,
        };
        const syntaxes = flink.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('Insert into spec columns', () => {
        const pos: CaretPosition = {
            lineNumber: 37,
            column: 26,
        };
        const syntaxes = flink.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['tb', '.', 'c']);
    });

    test('Watermark for', () => {
        const pos: CaretPosition = {
            lineNumber: 39,
            column: 56,
        };
        const syntaxes = flink.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('Create table new columns', () => {
        const pos: CaretPosition = {
            lineNumber: 41,
            column: 25,
        };
        const syntaxes = flink.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN_CREATE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });

    test('Select expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 43,
            column: 18,
        };
        const syntaxes = flink.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['amount']);
    });

    test('Group by expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 43,
            column: 53,
        };
        const syntaxes = flink.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['users']);
    });

    test('Having expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 43,
            column: 72,
        };
        const syntaxes = flink.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['amount']);
    });

    test('Limit by expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 45,
            column: 62,
        };
        const syntaxes = flink.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['order_id']);
    });

    test('When by expression column', () => {
        const pos: CaretPosition = {
            lineNumber: 47,
            column: 25,
        };
        const syntaxes = flink.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.COLUMN
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['age']);
    });

    test('Create Statement table properties', () => {
        const scenarios = [
            {
                caretPosition: {
                    lineNumber: 49,
                    column: 45,
                },
                entityContextType: EntityContextType.TABLE_PROPERTY_KEY,
            },
            {
                caretPosition: {
                    lineNumber: 49,
                    column: 55,
                },
                entityContextType: EntityContextType.TABLE_PROPERTY_VALUE,
            },
        ];

        scenarios.forEach((scenario) => {
            const suggestion = flink.getSuggestionAtCaretPosition(
                commentOtherLine(syntaxSql, scenario.caretPosition.lineNumber),
                scenario.caretPosition
            )?.syntax;

            expect(suggestion[0].syntaxContextType).toBe(scenario.entityContextType);
        });
    });

    test('Sync suggestion no duplicate syntaxContextType', () => {
        const pos: CaretPosition = {
            lineNumber: 51,
            column: 8,
        };
        const syntaxes = flink.getSuggestionAtCaretPosition(
            commentOtherLine(syntaxSql, pos.lineNumber),
            pos
        )?.syntax;
        const syntaxContextTypes = syntaxes?.map((syn) => syn.syntaxContextType);

        expect(syntaxContextTypes).not.toBeUndefined();
        expect(syntaxContextTypes).toEqual([EntityContextType.FUNCTION, EntityContextType.COLUMN]);
    });

    test('Select function or column', () => {
        const pos: CaretPosition = {
            lineNumber: 53,
            column: 11,
        };
        const syntaxes = flink.getSuggestionAtCaretPosition(
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

        const syntaxes = flink.getSuggestionAtCaretPosition(sql, pos)?.syntax;
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

        const syntaxes = flink.getSuggestionAtCaretPosition(sql, pos)?.syntax;
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

        const syntaxes = flink.getSuggestionAtCaretPosition(sql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(['db', '.']);
    });
});
