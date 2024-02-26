import TrinoSQL from 'src/parser/trino';
import { readSQL } from 'test/helper';

const features = {
    startTransaction: readSQL(__dirname, 'start_transaction.sql'),
};

describe('TrinoSQL Start Transaction Statements Syntax Tests', () => {
    const parser = new TrinoSQL();
    // start transaction statements
    features.startTransaction.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
