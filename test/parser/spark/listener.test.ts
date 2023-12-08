import { ParseTreeListener } from 'antlr4ts/tree';
import { SparkSqlParserListener } from '../../../src/lib/spark/SparkSqlParserListener';
import SparkSQL from '../../../src/parser/spark';

describe('Spark SQL Listener Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new SparkSQL();

    const parseTree = parser.parse(sql);

    test('Listener exitRelationPrimary', () => {
        let result = '';
        class MyListener implements SparkSqlParserListener {
            exitRelationPrimary = (ctx): void => {
                result = ctx.text.toLowerCase();
            };
        }
        const listenTableName = new MyListener();

        parser.listen(listenTableName as ParseTreeListener, parseTree);
        expect(result).toBe(expectTableName);
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
        expect(sqlSlices[1].endLine).toBe(2);
        expect(sqlSlices[2].startLine).toBe(3);
        expect(sqlSlices[2].endLine).toBe(10);
    });
});
