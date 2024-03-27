import { TrinoSQL } from 'src/parser/trino';
import { readSQL } from 'test/helper';

const features = {
    matchRecognize: readSQL(__dirname, 'match_recognize.sql'),
};

describe('TrinoSQL Match Recognize Statements Syntax Tests', () => {
    const trino = new TrinoSQL();
    // match recognize statements
    features.matchRecognize.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });
});
