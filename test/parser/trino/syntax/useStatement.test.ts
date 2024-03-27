import { TrinoSQL } from 'src/parser/trino';
import { readSQL } from 'test/helper';

const features = {
    use: readSQL(__dirname, 'use.sql'),
};

describe('TrinoSQL Use Statements Syntax Tests', () => {
    const trino = new TrinoSQL();
    // use statements
    features.use.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });
});
