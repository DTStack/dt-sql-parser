import PLSQL from 'src/parser/plsql';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { PlSqlParserListener } from 'src/lib/plsql/PlSqlParserListener';

describe('PLSQL Listener Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new PLSQL();

    const parseTree = parser.parse(sql);

    test('Listener enterTableName', async () => {
        let result = '';
        class MyListener implements PlSqlParserListener {
            enterTable_ref_list = (ctx): void => {
                result = ctx.text.toLowerCase();
            };
        }
        const listenTableName = new MyListener();

        await parser.listen(listenTableName as ParseTreeListener, parseTree);
        expect(result).toBe(expectTableName);
    });
});
