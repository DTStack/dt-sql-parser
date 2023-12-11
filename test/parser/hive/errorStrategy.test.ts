import HiveSQL from '../../../src/parser/hive';
import { HiveSqlSplitListener } from '../../../src/parser/hive';
import { HiveSqlParserListener } from '../../../src/lib/hive/HiveSqlParserListener';

const validSQL1 = `INSERT INTO country_page_view
VALUES ('Chinese', 'mumiao', 18),
    ('Amercian', 'georage', 22);`;
const validSQL2 = 'SELECT * FROM tb;';
const inValidSQL = 'CREATE TABLE VALUES;';

describe('HiveSQL ErrorStrategy test', () => {
    const hiveSQL = new HiveSQL();
    test('begin inValid', () => {
        const sql = [inValidSQL, validSQL1, validSQL2].join('\n');
        // parse with empty errorListener
        const parseTree = hiveSQL.parse(sql, () => {});
        const splitListener = new HiveSqlSplitListener();
        hiveSQL.listen(splitListener as HiveSqlParserListener, parseTree);

        const statementCount = splitListener.statementsContext.length;
        splitListener.statementsContext.map((item, index) => {
            if (index !== statementCount - 1 && index !== statementCount - 2) {
                expect(item.exception).not.toBe(undefined);
            } else {
                expect(item.exception).toBe(undefined);
            }
        });
    });

    test('middle inValid', () => {
        const sql = [validSQL1, inValidSQL, validSQL2].join('\n');
        // parse with empty errorListener
        const parseTree = hiveSQL.parse(sql, () => {});
        const splitListener = new HiveSqlSplitListener();
        hiveSQL.listen(splitListener as HiveSqlParserListener, parseTree);

        const statementCount = splitListener.statementsContext.length;
        splitListener.statementsContext.map((item, index) => {
            if (index !== statementCount - 1 && index !== 0) {
                expect(item.exception).not.toBe(undefined);
            } else {
                expect(item.exception).toBe(undefined);
            }
        });
    });

    test('end inValid', () => {
        const sql = [validSQL1, validSQL2, inValidSQL].join('\n');
        // parse with empty errorListener
        const parseTree = hiveSQL.parse(sql, () => {});
        const splitListener = new HiveSqlSplitListener();
        hiveSQL.listen(splitListener as HiveSqlParserListener, parseTree);

        splitListener.statementsContext.map((item, index) => {
            if (index !== 0 && index !== 1) {
                expect(item.exception).not.toBe(undefined);
            } else {
                expect(item.exception).toBe(undefined);
            }
        });
    });
});
