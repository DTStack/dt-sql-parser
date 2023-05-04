import FlinkSQL from '../../../src/parser/flinksql';
import FlinkSqlParserListener from '../../../src/lib/flinksql/FlinkSqlParserListener';
import { TableExpressionContext } from '../../../src/lib/flinksql/FlinkSqlParser';

describe('Flink SQL Listener Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new FlinkSQL();

    const parserTree = parser.parse(sql);

    test('Listener enterTableName', async () => {
        let result = '';
        class MyListener extends FlinkSqlParserListener {

            constructor() {
                super()
            }

            enterTableExpression = (ctx: TableExpressionContext): void => {
                result = ctx.getText().toLowerCase();
            }
        }
        const listenTableName = new MyListener();

        await parser.listen(listenTableName, parserTree);
        expect(result).toBe(expectTableName);
    });
});
