import { PostgreSQL } from 'src/parser/postgresql';
import { PostgreSqlParserListener } from 'src/lib/postgresql/PostgreSqlParserListener';
import { ParseTreeListener } from 'antlr4ng';

describe('PostgreSQL Listener Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const postgresql = new PostgreSQL();

    const parseTree = postgresql.parse(sql);

    test('Listener enterTableName', async () => {
        let result = '';
        class MyListener implements PostgreSqlParserListener {
            enterTable_ref(ctx) {
                result = ctx.getText().toLowerCase();
            }
            visitTerminal() {}
            visitErrorNode() {}
            enterEveryRule() {}
            exitEveryRule() {}
        }
        const listenTableName = new MyListener();

        await postgresql.listen(listenTableName as ParseTreeListener, parseTree);
        expect(result).toBe(expectTableName);
    });

    test('Split sql listener', async () => {
        const singleStatementArr = [
            `SELECT id FROM games ORDER BY score;`,

            `INSERT INTO country_page_view
            SELECT user1, cnt FROM page_view_source`,

            `CREATE GLOBAL TEMPORARY TABLE table_name (column_name, column_name2)
                WITH ( storage_parameter = 4)
                ON COMMIT PRESERVE ROWS
                TABLESPACE tablespace_name
                AS SELECT * FROM ad
                WITH NO DATA;`,
        ];
        const sql = singleStatementArr.join('\n');
        const sqlSlices = postgresql.splitSQLByStatement(sql);

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
        expect(sqlSlices[2].endLine).toBe(9);
    });
});
