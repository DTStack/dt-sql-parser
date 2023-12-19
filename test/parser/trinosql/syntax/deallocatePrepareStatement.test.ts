import { TrinoSQL } from '../../../filters';
import { readSQL } from '../../../helper';

const features = {
    deallocatePrepare: readSQL(__dirname, 'deallocate_prepare.sql'),
};

describe('TrinoSQL deallocatePrepare Statements Syntax Tests', () => {
    const parser = new TrinoSQL();
    // deallocate_prepare statements
    features.deallocatePrepare.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
