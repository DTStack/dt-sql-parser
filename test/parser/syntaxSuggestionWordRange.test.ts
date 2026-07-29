import {
    FlinkSQL,
    GenericSQL,
    HiveSQL,
    ImpalaSQL,
    MySQL,
    PostgreSQL,
    SparkSQL,
    TrinoSQL,
} from 'src/index';
import { EntityContextType } from 'src/parser/common/types';

type SuggestionParser = Pick<MySQL, 'getSuggestionAtCaretPosition'>;

const parserFactories: Array<[string, () => SuggestionParser]> = [
    ['MySQL', () => new MySQL()],
    ['FlinkSQL', () => new FlinkSQL()],
    ['SparkSQL', () => new SparkSQL()],
    ['HiveSQL', () => new HiveSQL()],
    ['PostgreSQL', () => new PostgreSQL()],
    ['TrinoSQL', () => new TrinoSQL()],
    ['ImpalaSQL', () => new ImpalaSQL()],
    ['GenericSQL', () => new GenericSQL()],
];

const scenarios = [
    {
        name: 'exclude trailing whitespace from table word ranges',
        sql: 'SELECT * FROM current_catalog_schema1 ',
        expected: ['current_catalog_schema1'],
    },
    {
        name: 'exclude AS from table word ranges',
        sql: 'SELECT * FROM current_catalog_schema1 as',
        expected: ['current_catalog_schema1'],
    },
    {
        name: 'exclude alias from table word ranges',
        sql: 'SELECT * FROM current_catalog_schema1 alias',
        expected: ['current_catalog_schema1'],
    },
    {
        name: 'preserve an incomplete qualified table name',
        sql: 'SELECT * FROM db.',
        expected: ['db', '.'],
    },
];

describe.each(parserFactories)('%s syntax suggestion word ranges', (_name, createParser) => {
    test.each(scenarios)('$name', ({ sql, expected }) => {
        const tableSuggestion = createParser()
            .getSuggestionAtCaretPosition(sql, {
                lineNumber: 1,
                column: sql.length + 1,
            })
            ?.syntax.find((suggestion) => suggestion.syntaxContextType === EntityContextType.TABLE);

        expect(tableSuggestion).toBeDefined();
        expect(tableSuggestion?.wordRanges.map((wordRange) => wordRange.text)).toEqual(expected);
    });
});

test('SparkSQL preserves a qualified table name separated by hidden tokens', () => {
    const sql = 'SELECT * FROM db. table';
    const tableSuggestion = new SparkSQL()
        .getSuggestionAtCaretPosition(sql, {
            lineNumber: 1,
            column: sql.length + 1,
        })
        ?.syntax.find((suggestion) => suggestion.syntaxContextType === EntityContextType.TABLE);

    expect(tableSuggestion).toBeDefined();
    expect(tableSuggestion?.wordRanges.map((wordRange) => wordRange.text)).toEqual([
        'db',
        '.',
        'table',
    ]);
});

test('SparkSQL preserves a qualified table name separated by a comment', () => {
    const sql = 'SELECT * FROM db./* comment */table';
    const tableSuggestion = new SparkSQL()
        .getSuggestionAtCaretPosition(sql, {
            lineNumber: 1,
            column: sql.length + 1,
        })
        ?.syntax.find((suggestion) => suggestion.syntaxContextType === EntityContextType.TABLE);

    expect(tableSuggestion).toBeDefined();
    expect(tableSuggestion?.wordRanges.map((wordRange) => wordRange.text)).toEqual([
        'db',
        '.',
        'table',
    ]);
});
