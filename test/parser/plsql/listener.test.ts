import { PLSQL } from 'src/parser/plsql';
import { PlSqlParserListener } from 'src/lib/plsql/PlSqlParserListener';

describe('PLSQL Listener Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const plsql = new PLSQL();

    const parseTree = plsql.parse(sql);

    test('Listener enterTableName', async () => {
        class MyListener extends PlSqlParserListener {
            result = '';

            enterTable_ref_list = (ctx) => {
                this.result = ctx.getText().toLowerCase();
            };
        }
        const listener = new MyListener();

        plsql.listen(listener, parseTree);
        expect(listener.result).toBe(expectTableName);
    });
});
