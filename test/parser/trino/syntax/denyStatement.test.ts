import { TrinoSQL } from 'src/parser/trino';
import { readSQL } from 'test/helper';

const features = {
    deny: readSQL(__dirname, 'deny.sql'),
};

describe('TrinoSQL Deny Statements Syntax Tests', () => {
    const trino = new TrinoSQL();
    // deny statements
    features.deny.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });
});
