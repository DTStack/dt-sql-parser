import TrinoSQL from '../../../../src/parser/trinosql';
import { readSQL } from '../../../helper';

const features = {
    deny: readSQL(__dirname, 'deny.sql'),
};

describe('TrinoSQL Deny Statements Syntax Tests', () => {
    const parser = new TrinoSQL();
    // deny statements
    features.deny.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
