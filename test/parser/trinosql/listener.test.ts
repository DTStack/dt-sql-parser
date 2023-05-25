import trinoSQL from '../../../src/parser/trinosql';
import TrinoSqlParserListener from '../../../src/lib/trinosql/TrinoSqlListener';

describe('trino SQL Listener Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new trinoSQL();

    const parserTree = parser.parse(sql);

    test('Listener enterTableName', async () => {
        let result = '';
        class MyListener extends TrinoSqlParserListener {

            constructor() {
                super()
            }

            enterTableName = (ctx): void => {
                result = ctx.getText().toLowerCase();
            };
        }
        const listenTableName = new MyListener();

        await parser.listen(listenTableName, parserTree);
        expect(result).toBe(expectTableName);
    });
});
