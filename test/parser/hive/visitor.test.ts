import {
    HiveSQL,
    HiveSqlParserVisitor,
    AbstractParseTreeVisitor,
    HiveSqlParserRuleContext,
} from '../../filters';

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
        visitor.visit(parseTree as HiveSqlParserRuleContext.ProgramContext);

        expect(result).toBe(expectTableName);
    });
});
