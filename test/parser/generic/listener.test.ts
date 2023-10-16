import GenericSQL from '../../../src/parser/generic';
import { SqlParserListener } from '../../../src/lib/generic/SqlParserListener';
import { ParseTreeListener } from 'antlr4ts/tree';

describe('Generic SQL Listener Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new GenericSQL();

    const parseTree = parser.parse(sql);

    test('Listener enterTableName', async () => {
        let result = '';
        class MyListener implements SqlParserListener {
            enterTableName = (ctx): void => {
                result = ctx.text.toLowerCase();
            };
        }
        const listenTableName: any = new MyListener();

        await parser.listen(listenTableName as ParseTreeListener, parseTree);
        expect(result).toBe(expectTableName);
    });
});
