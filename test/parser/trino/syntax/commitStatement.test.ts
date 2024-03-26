import { TrinoSQL } from 'src/parser/trino';
import { readSQL } from 'test/helper';

const features = {
    commit: readSQL(__dirname, 'commit.sql'),
};

describe('TrinoSQL Commit Statements Syntax Tests', () => {
    const trino = new TrinoSQL();
    // commit statements
    features.commit.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });
});
