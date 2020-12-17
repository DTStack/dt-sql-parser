import SQLParser, { FlinkSqlParserVisitor } from '../../../src/parser/flinksql';

describe('Flink SQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new SQLParser();

    const parserTree = parser.parse(sql, (error) => {
        console.log('Parse error:', error);
    });

    // console.log('Parser tree string:', parser.toString(parserTree));

    test('Visitor visitTableName', () => {
        let result = '';
        class MyVisitor extends FlinkSqlParserVisitor {
            visitTableExpression(ctx): void {
                result = ctx.getText().toLowerCase();
                super.visitTableExpression(ctx);
            }
        }
        const visitor: any = new MyVisitor();
        visitor.visit(parserTree);

        expect(result).toBe(expectTableName);
    });
});
