import { TrinoSQL } from 'src/parser/trino';
import { readSQL } from 'test/helper';

const features = {
    deallocatePrepare: readSQL(__dirname, 'deallocate_prepare.sql'),
};

describe('TrinoSQL deallocatePrepare Statements Syntax Tests', () => {
    const trino = new TrinoSQL();
    // deallocate_prepare statements
    features.deallocatePrepare.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });
});
