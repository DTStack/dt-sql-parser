import { ImpalaSQL } from 'src/parser/impala';
import { ImpalaSqlParserListener } from 'src/lib/impala/ImpalaSqlParserListener';

describe('impala SQL Listener Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const impala = new ImpalaSQL();

    const parseTree = impala.parse(sql);

    test('Listener enterTableNamePath', async () => {
        let result = '';
        class MyListener extends ImpalaSqlParserListener {
            enterTableNamePath = (ctx): void => {
                result = ctx.getText().toLowerCase();
            };
        }
        const listener = new MyListener();

        impala.listen(listener, parseTree);
        expect(result).toBe(expectTableName);
    });

    test('Split sql listener', async () => {
        const singleStatementArr = [
            `SELECT id FROM games ORDER BY score;`,

            `INSERT INTO country_page_view
            SELECT user1, cnt FROM page_view_source`,

            `CREATE TABLE sorted_census_data
            SORT BY (last_name, state)
            STORED AS PARQUET
            AS SELECT last_name, first_name, state, address
              FROM unsorted_census_data;`,
        ];
        const sql = singleStatementArr.join('\n');
        const sqlSlices = impala.splitSQLByStatement(sql);

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
        expect(sqlSlices[2].endLine).toBe(8);
    });
});
