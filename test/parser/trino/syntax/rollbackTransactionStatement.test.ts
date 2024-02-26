import TrinoSQL from 'src/parser/trino';
import { readSQL } from 'test/helper';

const features = {
    rollbackTransaction: readSQL(__dirname, 'rollback_transaction.sql'),
};

describe('TrinoSQL Rollback Transaction Statements Syntax Tests', () => {
    const parser = new TrinoSQL();
    // rollback transaction statements
    features.rollbackTransaction.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
