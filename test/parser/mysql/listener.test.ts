import MySQL from '../../../src/parser/mysql';
import { MySqlParserListener } from '../../../src/lib/mysql/MySqlParserListener';
import { ParseTreeListener } from 'antlr4ts/tree';

describe('MySQL Listener Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName};`;
    const parser = new MySQL();

    const parseTree = parser.parse(sql);

    test('Listener enterTableName', async () => {
        let result = '';
        class MyListener implements MySqlParserListener {
            enterTableName = (ctx): void => {
                result = ctx.text.toLowerCase();
            };
        }
        const listenTableName: any = new MyListener();

        await parser.listen(listenTableName as ParseTreeListener, parseTree);
        expect(result).toBe(expectTableName);
    });

    test('Split sql listener', async () => {
        const singleStatementArr = [
            `SELECT id FROM games ORDER BY score;`,

            `INSERT INTO country_page_view
            SELECT user1, cnt FROM page_view_source`,

            `CREATE TABLE lc (a INT NULL, b INT NULL) PARTITION BY LIST COLUMNS(a,b) (
                PARTITION p0 VALUES IN( (0,0), (NULL,NULL) ),
                PARTITION p1 VALUES IN( (0,1), (0,2), (0,3), (1,1), (1,2) ),
                PARTITION p2 VALUES IN( (1,0), (2,0), (2,1), (3,0), (3,1) ),
                PARTITION p3 VALUES IN( (1,3), (2,2), (2,3), (3,2), (3,3) )
            );`,

            `;`,
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
        expect(sqlSlices[3].startLine).toBe(10);
        expect(sqlSlices[3].endLine).toBe(10);
    });
});
