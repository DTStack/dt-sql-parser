import { TrinoSQL } from '../../../filters';
import { readSQL } from '../../../helper';

const features = {
    matchRecognize: readSQL(__dirname, 'match_recognize.sql'),
};

describe('TrinoSQL Match Recognize Statements Syntax Tests', () => {
    const parser = new TrinoSQL();
    // match recognize statements
    features.matchRecognize.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
