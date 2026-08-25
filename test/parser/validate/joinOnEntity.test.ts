import { CaretPosition, EntityContextType } from 'src/parser/common/types';
import { FlinkSQL } from 'src/parser/flink';
import { HiveSQL } from 'src/parser/hive';
import { ImpalaSQL } from 'src/parser/impala';
import { MySQL } from 'src/parser/mysql';
import { PostgreSQL } from 'src/parser/postgresql';
import { SparkSQL } from 'src/parser/spark';
import { TrinoSQL } from 'src/parser/trino';
import type { BasicSQL } from 'src/parser/common/basicSQL';

const joinOnBothSidesSql = `SELECT o.age, u.age1
FROM orders o
JOIN t1 u ON o. = u.;`;

const joinOnRightSideSql = `SELECT o.age, u.age1
FROM orders o
JOIN t1 u ON o.age = u.`;

type SqlParser = BasicSQL<any, any, any>;

const parsers: [string, new () => SqlParser][] = [
    ['MySQL', MySQL],
    ['PostgreSQL', PostgreSQL],
    ['TrinoSQL', TrinoSQL],
    ['FlinkSQL', FlinkSQL],
    ['SparkSQL', SparkSQL],
    ['HiveSQL', HiveSQL],
    ['ImpalaSQL', ImpalaSQL],
];

function expectColumnSuggestion(
    parser: SqlParser,
    sql: string,
    pos: CaretPosition,
    expectedWordRanges: string[]
) {
    const syntaxes = parser.getSuggestionAtCaretPosition(sql, pos)?.syntax;
    const suggestion = syntaxes?.find((syn) => syn.syntaxContextType === EntityContextType.COLUMN);
    expect(suggestion).not.toBeUndefined();
    expect(suggestion?.wordRanges.map((token) => token.text)).toEqual(expectedWordRanges);
}

function expectAccessibleJoinTables(parser: SqlParser, sql: string, pos: CaretPosition) {
    const entities = parser.getAllEntities(sql, pos);
    const accessibleTables = entities?.filter(
        (e) => e.entityContextType === EntityContextType.TABLE && e.isAccessible
    );
    expect(accessibleTables?.map((e) => e._alias?.text)).toEqual(
        expect.arrayContaining(['o', 'u'])
    );
}

describe('JOIN ON clause column suggestion - issue #478', () => {
    describe.each(parsers)('%s', (_name, Parser) => {
        test('suggest column after table alias on left side of ON (o.)', () => {
            const parser = new Parser();
            const pos: CaretPosition = { lineNumber: 3, column: 16 };
            expectColumnSuggestion(parser, joinOnBothSidesSql, pos, ['o', '.']);
        });

        test('suggest column after table alias on right side of ON (u.)', () => {
            const parser = new Parser();
            const pos: CaretPosition = { lineNumber: 3, column: 24 };
            expectColumnSuggestion(parser, joinOnRightSideSql, pos, ['u', '.']);
        });

        test('expose accessible JOIN tables while completing left side', () => {
            const parser = new Parser();
            const pos: CaretPosition = { lineNumber: 3, column: 16 };
            expectAccessibleJoinTables(parser, joinOnBothSidesSql, pos);
        });

        test('expose accessible JOIN tables while completing right side', () => {
            const parser = new Parser();
            const pos: CaretPosition = { lineNumber: 3, column: 24 };
            expectAccessibleJoinTables(parser, joinOnRightSideSql, pos);
        });
    });
});

describe('Compound JOIN ON entity collection - issue #478', () => {
    describe.each(parsers)('%s', (_name, Parser) => {
        test('compound ON should still expose join tables at ON clause', () => {
            const parser = new Parser();
            const sql = 'SELECT o.age FROM orders o JOIN t1 u ON o.age = u.age AND o.id = u.id';
            const entities = parser.getAllEntities(sql, { lineNumber: 1, column: 45 });
            const tables = entities?.filter(
                (e) => e.entityContextType === EntityContextType.TABLE && e.isAccessible
            );
            expect(tables?.map((e) => e._alias?.text)).toEqual(expect.arrayContaining(['o', 'u']));
        });
    });
});

describe('JOIN ON clause validate incomplete SQL - issue #478', () => {
    describe.each(parsers)('%s', (_name, Parser) => {
        test('ON o. = u.age should report syntax error', () => {
            const parser = new Parser();
            const sql = `SELECT o.age FROM orders o JOIN t1 u ON o. = u.age`;
            expect(parser.validate(sql).length).toBeGreaterThan(0);
        });

        test('ON o.age = u. should report syntax error', () => {
            const parser = new Parser();
            const sql = `SELECT o.age FROM orders o JOIN t1 u ON o.age = u.`;
            expect(parser.validate(sql).length).toBeGreaterThan(0);
        });

        test('ON o. = u. should report syntax error', () => {
            const parser = new Parser();
            const sql = `SELECT o.age FROM orders o JOIN t1 u ON o. = u.`;
            expect(parser.validate(sql).length).toBeGreaterThan(0);
        });
    });
});
