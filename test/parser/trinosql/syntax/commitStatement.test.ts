import TrinoSQL from 'src/parser/trinosql';
import { readSQL } from 'test/helper';

const features = {
    commit: readSQL(__dirname, 'commit.sql'),
};

describe('TrinoSQL Commit Statements Syntax Tests', () => {
    const parser = new TrinoSQL();
    // commit statements
    features.commit.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
