import { ParserRuleContext } from 'antlr4ng';

import {
    FlinkSQL,
    GenericSQL,
    HiveSQL,
    ImpalaSQL,
    MySQL,
    PostgreSQL,
    SparkSQL,
    TrinoSQL,
} from 'src/parser';

const dialects = [
    ['MySQL', () => new MySQL()],
    ['FlinkSQL', () => new FlinkSQL()],
    ['SparkSQL', () => new SparkSQL()],
    ['HiveSQL', () => new HiveSQL()],
    ['PostgreSQL', () => new PostgreSQL()],
    ['TrinoSQL', () => new TrinoSQL()],
    ['ImpalaSQL', () => new ImpalaSQL()],
    ['GenericSQL', () => new GenericSQL()],
] as const;

test.each(dialects)(
    '%s exposes each top-level statement as a direct program child',
    (_, createParser) => {
        const parseTree = createParser().parse('SELECT * FROM t; SELECT * FROM u');
        const topLevelStatements =
            parseTree.children?.filter((child) => child instanceof ParserRuleContext) ?? [];

        expect(topLevelStatements).toHaveLength(2);
        expect(topLevelStatements.map((statement) => statement.getText())).toEqual([
            'SELECT*FROMt;',
            'SELECT*FROMu',
        ]);
    }
);

describe.each(dialects)('%s suggestion at caret position', (_, createParser) => {
    const parser = createParser();

    test('only suggests keywords for the current statement', () => {
        const sql = 'SELECT * FROM t ';
        const keywords = parser.getSuggestionAtCaretPosition(sql, {
            lineNumber: 1,
            column: sql.length + 1,
        })?.keywords;

        expect(keywords).toContain('WHERE');
        expect(keywords).not.toContain('SELECT');
    });

    test('does not suggest a new statement for an incomplete word', () => {
        const sql = 'SELECT * FROM t  s';
        const keywords = parser.getSuggestionAtCaretPosition(sql, {
            lineNumber: 1,
            column: sql.length + 1,
        })?.keywords;

        expect(keywords).not.toContain('SELECT');
    });

    test('suggests a new statement after semicolon', () => {
        const sql = 'SELECT * FROM t; ';
        const keywords = parser.getSuggestionAtCaretPosition(sql, {
            lineNumber: 1,
            column: sql.length + 1,
        })?.keywords;

        expect(keywords).toContain('SELECT');
    });

    test('only suggests keywords for the second statement', () => {
        const sql = 'SELECT * FROM t; SELECT * FROM u ';
        const keywords = parser.getSuggestionAtCaretPosition(sql, {
            lineNumber: 1,
            column: sql.length + 1,
        })?.keywords;

        expect(keywords).toContain('WHERE');
        expect(keywords).not.toContain('SELECT');
    });

    test('filters final keyword suggestions', () => {
        const sql = 'SELECT * FROM t; ';
        const keywordFilter = jest.fn((keyword: string) => keyword !== 'SELECT');
        const keywords = parser.getSuggestionAtCaretPosition(
            sql,
            {
                lineNumber: 1,
                column: sql.length + 1,
            },
            { keywordFilter }
        )?.keywords;

        expect(keywordFilter).toHaveBeenCalledWith('SELECT');
        expect(keywords).not.toContain('SELECT');
    });

    test('supports keyword whitelist', () => {
        const sql = 'SELECT * FROM t ';
        const keywords = parser.getSuggestionAtCaretPosition(
            sql,
            {
                lineNumber: 1,
                column: sql.length + 1,
            },
            { keywordFilter: (keyword) => keyword === 'WHERE' }
        )?.keywords;

        expect(keywords).toEqual(['WHERE']);
    });

    test('filters combined keyword by final text', () => {
        const sql = 'SELECT * FROM t ';
        const keywords = parser.getSuggestionAtCaretPosition(
            sql,
            {
                lineNumber: 1,
                column: sql.length + 1,
            },
            { keywordFilter: (keyword) => keyword !== 'ORDER BY' }
        )?.keywords;

        expect(keywords).toContain('ORDER');
        expect(keywords).not.toContain('ORDER BY');
    });

    test('does not filter syntax suggestions', () => {
        const sql = 'SELECT * FROM ';
        const caretPosition = {
            lineNumber: 1,
            column: sql.length + 1,
        };
        const originalSuggestions = parser.getSuggestionAtCaretPosition(sql, caretPosition);
        const filteredSuggestions = parser.getSuggestionAtCaretPosition(sql, caretPosition, {
            keywordFilter: () => false,
        });

        expect(originalSuggestions?.syntax.length).toBeGreaterThan(0);
        expect(filteredSuggestions?.keywords).toEqual([]);
        expect(filteredSuggestions?.syntax).toEqual(originalSuggestions?.syntax);
    });

    test('propagates keyword filter errors', () => {
        const sql = 'SELECT * FROM t ';

        expect(() =>
            parser.getSuggestionAtCaretPosition(
                sql,
                {
                    lineNumber: 1,
                    column: sql.length + 1,
                },
                {
                    keywordFilter: () => {
                        throw new Error('keyword filter failed');
                    },
                }
            )
        ).toThrow('keyword filter failed');
    });
});

test('does not add root-absent statement-start keywords to a MySQL nested query', () => {
    const parser = new MySQL();
    const sql = 'SELECT * FROM t WHERE EXISTS (';
    const keywords = parser.getSuggestionAtCaretPosition(sql, {
        lineNumber: 1,
        column: sql.length + 1,
    })?.keywords;

    expect(keywords).not.toContain('CREATE');
    expect(keywords).not.toContain('ALTER');
    expect(keywords).not.toContain('DROP');
    expect(keywords).not.toContain('INSERT');
    expect(keywords).not.toContain('CALL');
});

test('keeps MySQL combined keywords from the current statement', () => {
    const parser = new MySQL();
    const sql = 'SELECT * FROM t ';
    const keywords = parser.getSuggestionAtCaretPosition(sql, {
        lineNumber: 1,
        column: sql.length + 1,
    })?.keywords;

    expect(keywords).toContain('LOCK IN SHARE MODE');
});

test('keeps Impala combined keywords from the current statement', () => {
    const parser = new ImpalaSQL();
    const sql = 'CREATE TABLE t (id INT) ';
    const keywords = parser.getSuggestionAtCaretPosition(sql, {
        lineNumber: 1,
        column: sql.length + 1,
    })?.keywords;

    expect(keywords).toContain('WITH SERDEPROPERTIES');
});
