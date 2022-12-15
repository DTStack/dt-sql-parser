import { PostgresSQL, PostgreSQLParserListener } from '../../../src';

describe('PostgresSQL Listener Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new PostgresSQL();

    const parserTree = parser.parse(sql);

    console.log('Parser tree string:', parserTree);

    test('Listener enterTableName', async () => {
        let result = '';
        class MyListener extends PostgreSQLParserListener {
            // eslint-disable-next-line camelcase
            enterTable_ref(ctx): void {
                result = ctx.getText().toLowerCase();
            }
        }
        const listenTableName: any = new MyListener();

        await parser.listen(listenTableName, parserTree);
        expect(result).toBe(expectTableName);
    });
});
