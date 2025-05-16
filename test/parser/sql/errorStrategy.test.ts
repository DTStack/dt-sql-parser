import { Sql, SqlSplitListener } from 'src/parser/sql';
import { SqlParserListener } from 'src/lib/sql/SqlParserListener';

const validSQL1 = `INSERT INTO country_page_view
VALUES ('Chinese', 'mumiao', 18),
    ('Amercian', 'georage', 22);`;
const validSQL2 = 'SELECT * FROM tb;';
const inValidSQL = 'CREATE TABLE;';

describe('Sql ErrorStrategy test', () => {
    const sql = new Sql();

    // TODO: handle unexpected case
    // test('begin inValid', () => {
    //     const sqlText = [inValidSQL, validSQL1, validSQL2].join('\n');
    //     // parse with empty errorListener
    //     const parseTree = sql.parse(sqlText, () => {});
    //     const splitListener = new SqlSplitListener();
    //     sql.listen(splitListener as SqlParserListener, parseTree);

    //     const statementCount = splitListener.statementsContext.length;
    //     splitListener.statementsContext.map((item, index) => {
    //         if (index !== statementCount - 1 && index !== statementCount - 2) {
    //             expect(item.exception).not.toBe(null);
    //         } else {
    //             expect(item.exception).toBe(null);
    //         }
    //     });
    // });

    // TODO: handle unexpected case
    // test('middle inValid', () => {
    //     const sqlText = [validSQL1, inValidSQL, validSQL2].join('\n');
    //     // parse with empty errorListener
    //     const parseTree = sql.parse(sqlText, () => {});
    //     const splitListener = new SqlSplitListener();
    //     sql.listen(splitListener as SqlParserListener, parseTree);

    //     const statementCount = splitListener.statementsContext.length;
    //     splitListener.statementsContext.map((item, index) => {
    //         if (index !== statementCount - 1 && index !== 0) {
    //             expect(item.exception).not.toBe(null);
    //         } else {
    //             expect(item.exception).toBe(null);
    //         }
    //     });
    // });

    test('end inValid', () => {
        const sqlText = [validSQL1, validSQL2, inValidSQL].join('\n');
        // parse with empty errorListener
        const parseTree = sql.parse(sqlText, () => {});
        const splitListener = new SqlSplitListener();
        sql.listen(splitListener as SqlParserListener, parseTree);

        splitListener.statementsContext.map((item, index) => {
            if (index !== 0 && index !== 1) {
                expect(item.exception).not.toBe(null);
            } else {
                expect(item.exception).toBe(null);
            }
        });
    });
});
