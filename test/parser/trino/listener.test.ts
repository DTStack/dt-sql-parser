import { TrinoSQL } from 'src/parser/trino';
import { TrinoSqlListener } from 'src/lib/trino/TrinoSqlListener';

describe('trino SQL Listener Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const trino = new TrinoSQL();

    const parseTree = trino.parse(sql);

    test('Listener enterTableName', async () => {
        class MyListener extends TrinoSqlListener {
            result = '';
            enterTableName = (ctx): void => {
                this.result = ctx.getText().toLowerCase();
            };
        }
        const listener = new MyListener();

        trino.listen(listener, parseTree);
        expect(listener.result).toBe(expectTableName);
    });

    test('Split sql listener', async () => {
        const singleStatementArr = [
            `SELECT id FROM games ORDER BY score;`,

            `INSERT INTO country_page_view
            SELECT user1, cnt FROM page_view_source`,

            `CREATE TABLE IF NOT EXISTS foo AS SELECT * FROM t;`,
        ];
        const sql = singleStatementArr.join('\n');
        const sqlSlices = trino.splitSQLByStatement(sql);

        expect(sqlSlices).not.toBeNull();

        // check text in result
        expect(sqlSlices.map((item) => item.text)).toEqual(singleStatementArr);

        // check startIndex and endIndex in result
        sqlSlices.forEach((slice, index) => {
            expect(sql.slice(slice.startIndex, slice.endIndex + 1)).toBe(singleStatementArr[index]);
        });

        // check lineNumber in result
        expect(sqlSlices[0].startLine).toBe(1);
        expect(sqlSlices[0].endLine).toBe(1);
        expect(sqlSlices[1].startLine).toBe(2);
        expect(sqlSlices[1].endLine).toBe(3);
        expect(sqlSlices[2].startLine).toBe(4);
        expect(sqlSlices[2].endLine).toBe(4);
    });
});
