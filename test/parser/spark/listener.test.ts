import SQLParser, { SqlBaseListener } from '../../../src/parser/spark';

describe('Spark SQL Listener Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new SQLParser();

    const parserTree = parser.parse(sql);

    test('Listener enterTableName', () => {
        let result = '';
        class MyListener extends SqlBaseListener {
            enterTableName(ctx): void {
                result = ctx.getText().toLowerCase();
            }
        }
        const listenTableName: any = new MyListener();

        parser.listen(listenTableName, parserTree);
        expect(result).toBe(expectTableName);
    });
});
