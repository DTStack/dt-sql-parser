import trinoSQL from '../../../src/parser/trinosql';
import trinoSqlParserListener from '../../../src/lib/trinosql/trinoSqlParserListener';
import { TableExpressionContext } from '../../../src/lib/trinosql/trinoSqlParser';

describe('trino SQL Listener Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new trinoSQL();

    const parserTree = parser.parse(sql);

    test('Listener enterTableName', async () => {
        let result = '';
        class MyListener extends trinoSqlParserListener {

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
