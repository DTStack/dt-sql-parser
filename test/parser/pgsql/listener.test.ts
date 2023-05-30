import { Target_listContext } from '../../../src/lib/pgsql/PostgreSQLParser';
import { PostgreSQLParserListener } from '../../../src/lib/pgsql/PostgreSQLParserListener';
import PostgresSQL from '../../../src/parser/pgsql';

describe('PostgresSQL Listener Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new PostgresSQL();

    const parserTree = parser.parse(sql);

    test('Listener enterTableName', async () => {
        let result = '';
        class MyListener implements PostgreSQLParserListener {
            enterTable_ref(ctx) {
                result = ctx.text.toLowerCase();
            }
        }
        const listenTableName: any = new MyListener();

        await parser.listen(listenTableName, parserTree);
        expect(result).toBe(expectTableName);
    });
});
