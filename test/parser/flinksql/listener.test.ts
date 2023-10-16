import FlinkSQL from '../../../src/parser/flinksql';
import { FlinkSqlParserListener } from '../../../src/lib/flinksql/FlinkSqlParserListener';
import { TableExpressionContext } from '../../../src/lib/flinksql/FlinkSqlParser';
import { ParseTreeListener } from 'antlr4ts/tree';

describe('Flink SQL Listener Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new FlinkSQL();

    const parseTree = parser.parse(sql);

    test('Listener enterTableName', async () => {
        let result = '';
        class MyListener implements FlinkSqlParserListener {
            enterTableExpression = (ctx: TableExpressionContext): void => {
                result = ctx.text.toLowerCase();
            };
        }
        const listenTableName = new MyListener();

        await parser.listen(listenTableName as ParseTreeListener, parseTree);
        expect(result).toBe(expectTableName);
    });
});
