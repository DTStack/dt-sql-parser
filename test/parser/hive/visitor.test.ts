import { HiveSQL, HiveSqlVisitor } from '../../../src';

describe('Generic SQL Visitor Tests', () => {
    const expectTableName = 'dm_gis.dlv_addr_tc_count';
    const sql = `select citycode,tc,inc_day from ${expectTableName} where inc_day='20190501' limit 100;`;
    const parser = new HiveSQL();

    const parserTree = parser.parse(sql, (error) => {
        console.log('Parse error:', error);
    });

    // console.log('Parser tree string:', parser.toString(parserTree));

    test('Visitor visitTableName', () => {
        let result = '';
        class MyVisitor extends HiveSqlVisitor {
            visitTable_name(ctx): void {
                result = ctx.getText().toLowerCase();
                super.visitTable_name(ctx);
            }
        }

        const visitor: any = new MyVisitor();
        visitor.visit(parserTree);

        expect(result).toBe(expectTableName);
    });
});
