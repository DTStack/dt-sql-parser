import { TrinoSQL } from 'src/parser/trino';
import { readSQL } from 'test/helper';

const features = {
    rollbackTransaction: readSQL(__dirname, 'rollback_transaction.sql'),
};

describe('TrinoSQL Rollback Transaction Statements Syntax Tests', () => {
    const trino = new TrinoSQL();
    // rollback transaction statements
    features.rollbackTransaction.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });
});
