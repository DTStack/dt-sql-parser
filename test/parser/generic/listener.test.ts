import SQLParser, { SqlParserListener } from '../../../src/parser/generic';

describe('Generic SQL Listener Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new SQLParser();

    const parserTree = parser.parse(sql);

    test('Listener enterTableName', async () => {
        let result = '';
        class MyListener extends SqlParserListener {
            enterTableName(ctx): void {
                result = ctx.getText().toLowerCase();
            }
        }
        const listenTableName: any = new MyListener();

        await parser.listen(listenTableName, parserTree);
        expect(result).toBe(expectTableName);
    });
});
