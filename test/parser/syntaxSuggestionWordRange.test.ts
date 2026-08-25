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
import { CandidatesCollection } from 'antlr4-c3';
import { Token } from 'antlr4ng';
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

class TestableSparkSQL extends SparkSQL {
    public getCandidateTokenRangesForTest(
        candidates: CandidatesCollection,
        candidateStartTokenIndex: number,
        allTokens: Token[],
        caretTokenIndex: number
    ): Token[] {
        return this.getCandidateTokenRanges(
            candidates,
            candidateStartTokenIndex,
            allTokens,
            caretTokenIndex
        );
    }
}

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

test('preserves a multi-level qualified table name when another candidate starts in the middle', () => {
    const parser = new TestableSparkSQL();
    const allTokens = parser.getAllTokens('catalog.schema.table');
    const candidates = new CandidatesCollection();
    candidates.rules.set(0, { startTokenIndex: 0, ruleList: [] });
    candidates.rules.set(1, { startTokenIndex: 2, ruleList: [] });

    const wordRanges = parser.getCandidateTokenRangesForTest(candidates, 0, allTokens, 4);

    expect(wordRanges.map((wordRange) => wordRange.text)).toEqual([
        'catalog',
        '.',
        'schema',
        '.',
        'table',
    ]);
});
