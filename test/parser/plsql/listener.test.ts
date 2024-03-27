import { PLSQL } from 'src/parser/plsql';
import { ParseTreeListener } from 'antlr4ng';
import { PlSqlParserListener } from 'src/lib/plsql/PlSqlParserListener';

describe('PLSQL Listener Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const plsql = new PLSQL();

    const parseTree = plsql.parse(sql);

    test('Listener enterTableName', async () => {
        let result = '';
        class MyListener implements PlSqlParserListener {
            enterTable_ref_list = (ctx): void => {
                result = ctx.getText().toLowerCase();
            };
            visitTerminal() {}
            visitErrorNode() {}
            enterEveryRule() {}
            exitEveryRule() {}
        }
        const listenTableName = new MyListener();

        await plsql.listen(listenTableName as ParseTreeListener, parseTree);
        expect(result).toBe(expectTableName);
    });
});
