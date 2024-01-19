import TrinoSQL from 'src/parser/trinosql';
import { readSQL } from 'test/helper';

const features = {
    grant: readSQL(__dirname, 'grant.sql'),
};

describe('TrinoSQL Grant Statements Syntax Tests', () => {
    const parser = new TrinoSQL();
    // grant statements
    features.grant.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
