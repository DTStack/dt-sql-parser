import { ImpalaSQL, ImpalaSqlSplitListener } from 'src/parser/impala';
import { ImpalaSqlParserListener } from 'src/lib/impala/ImpalaSqlParserListener';

const validSQL1 = `INSERT INTO country_page_view
VALUES ('Chinese', 'mumiao', 18),
    ('Amercian', 'georage', 22);`;
const validSQL2 = 'SELECT * FROM tb;';
const inValidSQL = 'CREATE TABLE VALUES;';

describe('ImpalaSQL ErrorStrategy test', () => {
    const impalaSQL = new ImpalaSQL();
    test('begin inValid', () => {
        const sql = [inValidSQL, validSQL1, validSQL2].join('\n');
        // parse with empty errorListener
        const parseTree = impalaSQL.parse(sql, () => {});
        const splitListener = new ImpalaSqlSplitListener();
        impalaSQL.listen(splitListener as ImpalaSqlParserListener, parseTree);

        const statementCount = splitListener.statementsContext.length;
        splitListener.statementsContext.map((item, index) => {
            if (index !== statementCount - 1 && index !== statementCount - 2) {
                expect(item.exception).not.toBe(null);
            } else {
                expect(item.exception).toBe(null);
            }
        });
    });

    test('middle inValid', () => {
        const sql = [validSQL1, inValidSQL, validSQL2].join('\n');
        // parse with empty errorListener
        const parseTree = impalaSQL.parse(sql, () => {});
        const splitListener = new ImpalaSqlSplitListener();
        impalaSQL.listen(splitListener as ImpalaSqlParserListener, parseTree);

        const statementCount = splitListener.statementsContext.length;
        splitListener.statementsContext.map((item, index) => {
            if (index !== statementCount - 1 && index !== 0) {
                expect(item.exception).not.toBe(null);
            } else {
                expect(item.exception).toBe(null);
            }
        });
    });

    test('end inValid', () => {
        const sql = [validSQL1, validSQL2, inValidSQL].join('\n');
        // parse with empty errorListener
        const parseTree = impalaSQL.parse(sql, () => {});
        const splitListener = new ImpalaSqlSplitListener();
        impalaSQL.listen(splitListener as ImpalaSqlParserListener, parseTree);

        splitListener.statementsContext.map((item, index) => {
            if (index !== 0 && index !== 1) {
                expect(item.exception).not.toBe(null);
            } else {
                expect(item.exception).toBe(null);
            }
        });
    });
});
