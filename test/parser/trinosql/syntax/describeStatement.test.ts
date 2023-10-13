import TrinoSQL from '../../../../src/parser/trinosql';
import { readSQL } from '../../../helper';

const features = {
    describe: readSQL(__dirname, 'describe.sql'),
};

describe('TrinoSQL Describe Statements Syntax Tests', () => {
    const parser = new TrinoSQL();
    // describe statements
    features.describe.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
