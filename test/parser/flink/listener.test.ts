import { FlinkSQL } from 'src/parser/flink';
import { FlinkSqlParserListener } from 'src/lib/flink/FlinkSqlParserListener';
import { TableExpressionContext } from 'src/lib/flink/FlinkSqlParser';

describe('Flink SQL Listener Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const flink = new FlinkSQL();

    const parseTree = flink.parse(sql);

    test('Listener enterTableName', async () => {
        class MyListener extends FlinkSqlParserListener {
            result = '';

            enterTableExpression = (ctx: TableExpressionContext): void => {
                this.result = ctx.getText().toLowerCase();
            };
        }
        const listener = new MyListener();

        flink.listen(listener, parseTree);
        expect(listener.result).toBe(expectTableName);
    });

    test('Split sql listener', async () => {
        const singleStatementArr = [
            `SELECT id FROM games ORDER BY score;`,

            `INSERT INTO country_page_view
        SELECT user1, cnt FROM page_view_source`,

            `BEGIN STATEMENT SET;
            INSERT INTO country_page_view
            VALUES ('Chinese', 'mumiao', 18),
                ('Amercian', 'georage', 22);
            INSERT INTO country_page_view
            VALUES ('Chinese', 'mumiao', 18),
                ('Amercian', 'georage', 22);
            END;`,

            `;`,
        ];
        const sql = singleStatementArr.join('\n');
        const sqlSlices = flink.splitSQLByStatement(sql);

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
        expect(sqlSlices[2].endLine).toBe(11);
        expect(sqlSlices[3].startLine).toBe(12);
        expect(sqlSlices[3].endLine).toBe(12);
    });
});
