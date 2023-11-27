import MySQL from '../../../src/parser/mysql';
import { MySqlParserListener } from '../../../src/lib/mysql/MySqlParserListener';
import { ParseTreeListener } from 'antlr4ts/tree';

describe('MySQL Listener Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new MySQL();

    const parseTree = parser.parse(sql);

    test('Listener enterTableName', async () => {
        let result = '';
        class MyListener implements MySqlParserListener {
            enterTableName = (ctx): void => {
                result = ctx.text.toLowerCase();
            };
        }
        const listenTableName: any = new MyListener();

        await parser.listen(listenTableName as ParseTreeListener, parseTree);
        expect(result).toBe(expectTableName);
    });
});
