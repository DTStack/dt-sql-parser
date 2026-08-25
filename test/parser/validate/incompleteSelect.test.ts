import { FlinkSQL } from 'src/parser/flink';
import { HiveSQL } from 'src/parser/hive';
import { ImpalaSQL } from 'src/parser/impala';
import { MySQL } from 'src/parser/mysql';
import { PostgreSQL } from 'src/parser/postgresql';
import { SparkSQL } from 'src/parser/spark';
import { TrinoSQL } from 'src/parser/trino';
import type { BasicSQL } from 'src/parser/common/basicSQL';
import { selectFromOnlySql } from './fixtures/incompleteSelect';

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

describe('Validate incomplete SELECT without columns - issue #478', () => {
    describe.each(parsers)('%s', (_name, Parser) => {
        test('SELECT followed by FROM should report syntax error', () => {
            expect(new Parser().validate(selectFromOnlySql).length).toBeGreaterThan(0);
        });
    });
});
