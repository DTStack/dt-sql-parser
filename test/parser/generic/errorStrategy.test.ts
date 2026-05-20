import { GenericSQL, GenericSplitListener } from 'src/parser/generic';
import { GenericSqlListener } from 'src/lib/generic/GenericSqlListener';

const validSQL1 = `INSERT INTO orders SELECT * FROM new_orders;`;
const validSQL2 = 'SELECT * FROM tb;';
const inValidSQL = 'CREATE TABLE VALUES;';

describe('GenericSQL ErrorStrategy test', () => {
    const parser = new GenericSQL();

    test('begin inValid', () => {
        const sql = [inValidSQL, validSQL1, validSQL2].join('\n');
        const parseTree = parser.parse(sql, () => {});
        const splitListener = new GenericSplitListener();
        parser.listen(splitListener as GenericSqlListener, parseTree);

        const statementCount = splitListener.statementsContext.length;
        splitListener.statementsContext.forEach((item, index) => {
            if (index !== statementCount - 1 && index !== statementCount - 2) {
                expect(item.exception).toBeTruthy();
            } else {
                expect(item.exception).toBeFalsy();
            }
        });
    });

    test('middle inValid', () => {
        const sql = [validSQL1, inValidSQL, validSQL2].join('\n');
        const parseTree = parser.parse(sql, () => {});
        const splitListener = new GenericSplitListener();
        parser.listen(splitListener as GenericSqlListener, parseTree);

        const statementCount = splitListener.statementsContext.length;
        splitListener.statementsContext.forEach((item, index) => {
            if (index !== statementCount - 1 && index !== 0) {
                expect(item.exception).toBeTruthy();
            } else {
                expect(item.exception).toBeFalsy();
            }
        });
    });

    test('end inValid', () => {
        const sql = [validSQL1, validSQL2, inValidSQL].join('\n');
        const parseTree = parser.parse(sql, () => {});
        const splitListener = new GenericSplitListener();
        parser.listen(splitListener as GenericSqlListener, parseTree);

        splitListener.statementsContext.forEach((item, index) => {
            if (index !== 0 && index !== 1) {
                expect(item.exception).toBeTruthy();
            } else {
                expect(item.exception).toBeFalsy();
            }
        });
    });
});
