import { TrinoSQL } from '../../../filters';
import { readSQL } from '../../../helper';

const features = {
    call: readSQL(__dirname, 'call.sql'),
};

describe('TrinoSQL Call Statements Syntax Tests', () => {
    const parser = new TrinoSQL();
    // call statements
    features.call.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
