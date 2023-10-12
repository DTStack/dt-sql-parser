import trinoSQL from '../../../src/parser/trinosql';
import { TrinoSqlListener } from '../../../src/lib/trinosql/TrinoSqlListener';
import { ParseTreeListener } from 'antlr4ts/tree';

describe('trino SQL Listener Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new trinoSQL();

    const parserTree = parser.parse(sql);

    test('Listener enterTableName', async () => {
        let result = '';
        class MyListener implements TrinoSqlListener {
            enterTableName = (ctx): void => {
                result = ctx.text.toLowerCase();
            };
        }
        const listenTableName = new MyListener();

        await parser.listen(listenTableName as ParseTreeListener, parserTree);
        expect(result).toBe(expectTableName);
    });
});
