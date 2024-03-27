import { HiveSQL } from 'src/parser/hive';
import { HiveSqlParserVisitor } from 'src/lib/hive/HiveSqlParserVisitor';
import { ProgramContext, TableNameContext } from 'src/lib/hive/HiveSqlParser';

describe('HiveSQL Visitor Tests', () => {
    const expectTableName = 'dm_gis.dlv_addr_tc_count';
    const sql = `select citycode,tc,inc_day from ${expectTableName} where inc_day='20190501' limit 100;`;
    const hive = new HiveSQL();

    const parseTree = hive.parse(sql, (error) => {
        console.error('Parse error:', error);
    });

    test('Visitor visitTableName', () => {
        class MyVisitor extends HiveSqlParserVisitor<string> {
            defaultResult(): string {
                return '';
            }
            aggregateResult(aggregate: string, nextResult: string): string {
                return aggregate + nextResult;
            }
            visitProgram = (ctx: ProgramContext) => {
                return this.visitChildren(ctx);
            };
            visitTableName = (ctx: TableNameContext) => {
                return ctx.getText().toLowerCase();
            };
        }

        const visitor = new MyVisitor();
        const result = visitor.visit(parseTree);

        expect(result).toBe(expectTableName);
    });
});
