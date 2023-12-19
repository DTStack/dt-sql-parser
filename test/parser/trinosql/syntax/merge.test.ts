import { TrinoSQL } from '../../../filters';
import { readSQL } from '../../../helper';

const features = {
    merge: readSQL(__dirname, 'merge.sql'),
};

describe('TrinoSQL Merge Statements Syntax Tests', () => {
    const parser = new TrinoSQL();
    // merge statements
    features.merge.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
