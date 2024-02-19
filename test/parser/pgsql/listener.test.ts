import PostgresSQL from 'src/parser/pgsql';
import { PostgreSQLParserListener } from 'src/lib/pgsql/PostgreSQLParserListener';
import { ParseTreeListener } from 'antlr4ng';

describe('PostgresSQL Listener Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new PostgresSQL();

    const parseTree = parser.parse(sql);

    test('Listener enterTableName', async () => {
        let result = '';
        class MyListener implements PostgreSQLParserListener {
            enterTable_ref(ctx) {
                result = ctx.getText().toLowerCase();
            }
            visitTerminal() {}
            visitErrorNode() {}
            enterEveryRule() {}
            exitEveryRule() {}
        }
        const listenTableName = new MyListener();

        await parser.listen(listenTableName as ParseTreeListener, parseTree);
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
        const sqlSlices = parser.splitSQLByStatement(sql);

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
