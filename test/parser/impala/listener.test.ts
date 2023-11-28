import impalaSQL from '../../../src/parser/impala';
import { ImpalaSqlParserListener } from '../../../src/lib/impala/ImpalaSqlParserListener';
import { ParseTreeListener } from 'antlr4ts/tree';

describe('impala SQL Listener Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new impalaSQL();

    const parseTree = parser.parse(sql);

    test('Listener enterTableName', async () => {
        let result = '';
        class MyListener implements ImpalaSqlParserListener {
            enterTableNamePath = (ctx): void => {
                result = ctx.text.toLowerCase();
            };
        }
        const listenTableName = new MyListener();

        await parser.listen(listenTableName as ParseTreeListener, parseTree);
        expect(result).toBe(expectTableName);
    });
});
