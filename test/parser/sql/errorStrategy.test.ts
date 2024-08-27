import { SQL, SQLSplitListener } from 'src/parser/sql';
import { SQLParserListener } from 'src/lib/sql/SQLParserListener';

const validSQL1 = `INSERT INTO country_page_view
VALUES ('Chinese', 'mumiao', 18),
    ('Amercian', 'georage', 22);`;
const validSQL2 = 'SELECT * FROM tb;';
const inValidSQL = 'CREATE TABLE;';

describe('Generic SQL ErrorStrategy test', () => {
    const GenericSQL = new SQL();

    // TODO: handle unexpected case
    // test('begin inValid', () => {
    //     const sql = [inValidSQL, validSQL1, validSQL2].join('\n');
    //     // parse with empty errorListener
    //     const parseTree = SQL.parse(sql, () => {});
    //     const splitListener = new SQLSplitListener();
    //     SQL.listen(splitListener as SQLParserListener, parseTree);

    //     const statementCount = splitListener.statementsContext.length;
    //     splitListener.statementsContext.map((item, index) => {
    //         if(index !== statementCount-1 && index !== statementCount - 2) {
    //             expect(item.exception).not.toBe(null);
    //         } else {
    //             expect(item.exception).toBe(null);
    //         }
    //     })
    // });

    // TODO: handle unexpected case
    // test('middle inValid', () => {
    //     const sql = [validSQL1, inValidSQL, validSQL2].join('\n');
    //     // parse with empty errorListener
    //     const parseTree = SQL.parse(sql, () => {});
    //     const splitListener = new SQLSplitListener();
    //     SQL.listen(splitListener as SQLParserListener, parseTree);

    //     const statementCount = splitListener.statementsContext.length;
    //     splitListener.statementsContext.map((item, index) => {
    //         if(index !== statementCount-1 && index !== 0) {
    //             expect(item.exception).not.toBe(null);
    //         } else {
    //             expect(item.exception).toBe(null);
    //         }
    //     })
    // });

    test('end inValid', () => {
        const sql = [validSQL1, validSQL2, inValidSQL].join('\n');
        // parse with empty errorListener
        const parseTree = GenericSQL.parse(sql, () => {});
        const splitListener = new SQLSplitListener();
        GenericSQL.listen(splitListener as SQLParserListener, parseTree);

        splitListener.statementsContext.map((item, index) => {
            if (index !== 0 && index !== 1) {
                expect(item.exception).not.toBe(null);
            } else {
                expect(item.exception).toBe(null);
            }
        });
    });
});
