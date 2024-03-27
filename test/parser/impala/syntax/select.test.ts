import { ImpalaSQL } from 'src/parser/impala';
import { readSQL } from 'test/helper';

const impala = new ImpalaSQL();

const features = {
    select: readSQL(__dirname, 'select.sql'),
};

describe('ImpalaSQL Select Syntax Tests', () => {
    describe('SELECT', () => {
        features.select.forEach((db) => {
            it(db, () => {
                expect(impala.validate(db).length).toBe(0);
            });
        });
    });
});
