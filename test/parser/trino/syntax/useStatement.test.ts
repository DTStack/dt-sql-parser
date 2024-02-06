import TrinoSQL from 'src/parser/trino';
import { readSQL } from 'test/helper';

const features = {
    use: readSQL(__dirname, 'use.sql'),
};

describe('TrinoSQL Use Statements Syntax Tests', () => {
    const parser = new TrinoSQL();
    // use statements
    features.use.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
