import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { HiveSqlParserVisitor } from '../../../src/lib/hive/HiveSqlParserVisitor';
import HiveSQL from '../../../src/parser/hive';
import { ProgramContext } from '../../../src/lib/hive/HiveSqlParser';

describe('HiveSQL Visitor Tests', () => {
    const expectTableName = 'dm_gis.dlv_addr_tc_count';
    const sql = `select citycode,tc,inc_day from ${expectTableName} where inc_day='20190501' limit 100;`;
    const parser = new HiveSQL();

    const parseTree = parser.parse(sql, (error) => {
        console.log('Parse error:', error);
    });

    test('Visitor visitTableName', () => {
        let result = '';
        class MyVisitor extends AbstractParseTreeVisitor<any> implements HiveSqlParserVisitor<any> {
            defaultResult() {
                return result;
            }

            visitTableName(ctx) {
                result = ctx.text.toLowerCase();
            }
        }

        const visitor = new MyVisitor();
        visitor.visit(parseTree as ProgramContext);

        expect(result).toBe(expectTableName);
    });
});
