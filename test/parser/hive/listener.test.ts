import { ParseTreeListener } from 'antlr4ng';
import { HiveSQL } from 'src/parser/hive';
import { ProgramContext, SelectItemContext } from 'src/lib/hive/HiveSqlParser';
import { HiveSqlParserListener } from 'src/lib/hive/HiveSqlParserListener';

describe('HiveSQL Listener Tests', () => {
    const hive = new HiveSQL();
    test('Listener enterSelectList', async () => {
        const expectTableName = 'username';
        const sql = `select ${expectTableName} from tablename where inc_day='20190601' limit 1000;`;
        const parseTree = hive.parse(sql);

        let result = '';
        class MyListener implements HiveSqlParserListener {
            enterSelectItem(ctx: SelectItemContext) {
                result = ctx.getText();
            }
            visitTerminal() {}
            visitErrorNode() {}
            enterEveryRule() {}
            exitEveryRule() {}
        }
        const listenTableName = new MyListener();

        await hive.listen(listenTableName as ParseTreeListener, parseTree as ProgramContext);
        expect(result).toBe(expectTableName);
    });
    test('Listener enterCreateTable', async () => {
        const sql = `drop table table_name;`;
        const parseTree = hive.parse(sql);
        let result = '';
        class MyListener implements HiveSqlParserListener {
            enterDropTableStatement(ctx) {
                result = ctx.getText();
            }

            visitTerminal() {}
            visitErrorNode() {}
            enterEveryRule() {}
            exitEveryRule() {}
        }
        const listenTableName = new MyListener();

        await hive.listen(listenTableName as ParseTreeListener, parseTree as ProgramContext);
        expect(result).toBe('droptabletable_name');
    });

    test('Split sql listener', async () => {
        const singleStatementArr = [
            `SELECT id FROM games ORDER BY score;`,

            `INSERT INTO country_page_view
            SELECT user1, cnt FROM page_view_source`,

            `CREATE TEMPORARY EXTERNAL TABLE IF NOT EXISTS page_view(
                viewTime INT,
                userid BIGINT,
                page_url STRING,
                referrer_url STRING,
                ip STRING COMMENT 'IP Address of the User'
            ) COMMENT 'This is the page view table' PARTITIONED BY(dt STRING, country STRING) AS
            SELECT
                (key % 1024) new_key,
                concat(key, value) key_value_pair
            FROM
                key_value_store SORT BY new_key,
                key_value_pair;`,
        ];
        const sql = singleStatementArr.join('\n');
        const sqlSlices = hive.splitSQLByStatement(sql);

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
        expect(sqlSlices[2].endLine).toBe(16);
    });
});
