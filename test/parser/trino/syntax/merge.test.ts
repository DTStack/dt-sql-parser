import { TrinoSQL } from 'src/parser/trino';
import { readSQL } from 'test/helper';

const features = {
    merge: readSQL(__dirname, 'merge.sql'),
};

describe('TrinoSQL Merge Statements Syntax Tests', () => {
    const trino = new TrinoSQL();
    // merge statements
    features.merge.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });
});
