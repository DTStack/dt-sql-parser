import { FlinkSQL } from 'src/parser/flink';
import { FlinkSqlParserVisitor } from 'src/lib/flink/FlinkSqlParserVisitor';
import { ProgramContext, TableExpressionContext } from 'src/lib/flink/FlinkSqlParser';

describe('Flink SQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const flink = new FlinkSQL();

    const parseTree = flink.parse(sql, (error) => {
        console.error('Parse error:', error);
    });

    test('Visitor visitTableName', () => {
        class MyVisitor extends FlinkSqlParserVisitor<string> {
            defaultResult(): string {
                return '';
            }
            aggregateResult(aggregate: string, nextResult: string): string {
                return aggregate + nextResult;
            }
            visitProgram = (ctx: ProgramContext) => {
                return this.visitChildren(ctx);
            };
            visitTableExpression = (ctx: TableExpressionContext) => {
                return ctx.getText().toLowerCase();
            };
        }
        const visitor = new MyVisitor();
        const result = visitor.visit(parseTree);

        expect(result).toBe(expectTableName);
    });
});
