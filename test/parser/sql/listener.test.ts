import { Sql } from 'src/parser/sql';
import { SqlParserListener } from 'src/lib/sql/SqlParserListener';

describe('Sql Listener Tests', () => {
    const expectTableName = 'user1';
    const sqlText = `select id,name,sex from ${expectTableName};`;
    const sql = new Sql();

    const parseTree = sql.parse(sqlText);

    test('Listener exitTableName', () => {
        class MyListener extends SqlParserListener {
            result = '';
            exitTableName = (ctx): void => {
                this.result = ctx.getText().toLowerCase();
            };
        }
        const listener = new MyListener();

        sql.listen(listener, parseTree);
        expect(listener.result).toBe(expectTableName);
    });

    test('Split sql listener', async () => {
        const singleStatementArr = [
            `SELECT /*+ REPARTITION(zip_code) */ name, age, zip_code FROM person SORT BY name ASC, age DESC;`,

            `INSERT INTO students FROM applicants SELECT name, address, student_id WHERE qualified = true;`,

            `CREATE TABLE student_bucket
                USING parquet
                CLUSTERED BY (id) INTO 4 buckets (
                WITH tmpTable AS (
                    SELECT * FROM student WHERE id > 100
                )
                SELECT * FROM tmpTable
            );`,
        ];

        const sqlText = singleStatementArr.join('\n');
        const sqlSlices = sql.splitSQLByStatement(sqlText);

        expect(sqlSlices).not.toBeNull();

        // check text in result
        expect(sqlSlices.map((item) => item.text)).toEqual(singleStatementArr);

        // check startIndex and endIndex in result
        sqlSlices.forEach((slice, index) => {
            expect(sqlText.slice(slice.startIndex, slice.endIndex + 1)).toBe(
                singleStatementArr[index]
            );
        });

        // check lineNumber in result
        expect(sqlSlices[0].startLine).toBe(1);
        expect(sqlSlices[0].endLine).toBe(1);
        expect(sqlSlices[1].startLine).toBe(2);
        expect(sqlSlices[1].endLine).toBe(2);
        expect(sqlSlices[2].startLine).toBe(3);
        expect(sqlSlices[2].endLine).toBe(10);
    });
});
