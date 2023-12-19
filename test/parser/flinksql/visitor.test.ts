import { FlinkSQL, AbstractParseTreeVisitor, FlinkSqlParserVisitor } from '../../filters';

describe('Flink SQL Visitor Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new FlinkSQL();

    const parseTree = parser.parse(sql, (error) => {
        console.log('Parse error:', error);
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
            visitTableExpression = (ctx): void => {
                result = ctx.text.toLowerCase();
            };
        }
        const visitor: any = new MyVisitor();
        visitor.visit(parseTree);

        expect(result).toBe(expectTableName);
    });
});
