import { PLSQL } from 'src/parser/plsql';
import { PlSqlParserVisitor } from 'src/lib/plsql/PlSqlParserVisitor';

describe('PLSQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const plsql = new PLSQL();

    const parseTree = plsql.parse(sql);

    test('Visitor visitTable_ref_list', () => {
        class MyVisitor extends PlSqlParserVisitor<string> {
            defaultResult(): string {
                return '';
            }
            aggregateResult(aggregate: string, nextResult: string): string {
                return aggregate + nextResult;
            }
            visitProgram = (ctx) => {
                return this.visitChildren(ctx);
            };
            visitTable_ref_list = (ctx) => {
                return ctx.getText().toLowerCase();
            };
        }
        const visitor = new MyVisitor();
        const result = visitor.visit(parseTree);

        expect(result).toBe(expectTableName);
    });
});
