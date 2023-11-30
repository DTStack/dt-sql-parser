import impalaSQL from '../../../src/parser/impala';
import { ImpalaSqlParserListener } from '../../../src/lib/impala/ImpalaSqlParserListener';
import { ParseTreeListener } from 'antlr4ts/tree';

describe('impala SQL Listener Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new impalaSQL();

    const parseTree = parser.parse(sql);

    test('Listener enterTableNamePath', async () => {
        let result = '';
        class MyListener implements ImpalaSqlParserListener {
            enterTableNamePath = (ctx): void => {
                result = ctx.text.toLowerCase();
            };
        }
        const listenTableName = new MyListener();

        await parser.listen(listenTableName as ParseTreeListener, parseTree);
        expect(result).toBe(expectTableName);
    });

    test('Listener sql', async () => {
        const sql = `SELECT id FROM games ORDER BY score DESC;\nSHOW SCHEMAS LIKE 'xxx';`;
        const sqlSlices = parser.splitSQLByStatement(sql);
        expect(sqlSlices.length).toBe(2);

        expect(sqlSlices[0].text).toBe('SELECT id FROM games ORDER BY score DESC;');
        expect(sql.slice(sqlSlices[0].startIndex, sqlSlices[0].endIndex + 1)).toBe(
            sqlSlices[0].text
        );
        expect(sqlSlices[0].startLine).toBe(1);
        expect(sqlSlices[0].endLine).toBe(1);

        expect(sqlSlices[1].text).toBe(`SHOW SCHEMAS LIKE 'xxx';`);
        expect(sql.slice(sqlSlices[1].startIndex, sqlSlices[1].endIndex + 1)).toBe(
            sqlSlices[1].text
        );
        expect(sqlSlices[1].startLine).toBe(2);
        expect(sqlSlices[1].endLine).toBe(2);
    });
});
