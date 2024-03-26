import FlinkSQL from 'src/parser/flink';
import { FlinkSqlParserVisitor } from 'src/lib/flink/FlinkSqlParserVisitor';
import { AbstractParseTreeVisitor } from 'antlr4ng';
import { TableExpressionContext } from 'src/lib/flink/FlinkSqlParser';

describe('Flink SQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new FlinkSQL();

    const parseTree = parser.parse(sql, (error) => {
        console.error('Parse error:', error);
    });

    test('Visitor visitTableName', () => {
        let result = '';
        class MyVisitor
            extends AbstractParseTreeVisitor<any>
            implements FlinkSqlParserVisitor<any>
        {
            protected defaultResult() {
                return result;
            }
            visitTableExpression(ctx: TableExpressionContext) {
                result = ctx.getText().toLowerCase();
            }
        }
        const visitor: any = new MyVisitor();
        visitor.visit(parseTree);

        expect(result).toBe(expectTableName);
    });
});
