import HiveSqlVisitor from '../../../src/lib/hive/HiveSqlVisitor';
import HiveSQL from '../../../src/parser/hive';

describe('Generic SQL Visitor Tests', () => {
    const expectTableName = 'dm_gis.dlv_addr_tc_count';
    const sql = `select citycode,tc,inc_day from ${expectTableName} where inc_day='20190501' limit 100;`;
    const parser = new HiveSQL();

    const parserTree = parser.parse(sql, (error) => {
        console.log('Parse error:', error);
    });

    test('Visitor visitTableName', () => {
        let result = '';
        class MyVisitor extends HiveSqlVisitor<any> {
            visitTable_name = (ctx): void => {
                result = ctx.getText().toLowerCase();
                super.visitTable_name?.(ctx);
            }
        }

        const visitor = new MyVisitor();
        visitor.visit(parserTree);

        expect(result).toBe(expectTableName);
    });
});
