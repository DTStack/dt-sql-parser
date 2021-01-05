import { PLSQL, PlSqlParserListener } from '../../../src';

describe('PLSQL Listener Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new PLSQL();

    const parserTree = parser.parse(sql);

    test('Listener enterTableName', async () => {
        let result = '';
        class MyListener extends PlSqlParserListener {
            // eslint-disable-next-line camelcase
            enterTable_ref_list(ctx): void {
                result = ctx.getText().toLowerCase();
            }
        }
        const listenTableName: any = new MyListener();

        await parser.listen(listenTableName, parserTree);
        expect(result).toBe(expectTableName);
    });
});
