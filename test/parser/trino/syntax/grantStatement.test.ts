import { TrinoSQL } from 'src/parser/trino';
import { readSQL } from 'test/helper';

const features = {
    grant: readSQL(__dirname, 'grant.sql'),
};

describe('TrinoSQL Grant Statements Syntax Tests', () => {
    const trino = new TrinoSQL();
    // grant statements
    features.grant.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });
});
