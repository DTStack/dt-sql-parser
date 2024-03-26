import { ImpalaSQL } from 'src/parser/impala';
import { readSQL } from 'test/helper';

const impala = new ImpalaSQL();

const features = {
    update: readSQL(__dirname, 'update.sql'),
};

describe('ImpalaSQL Update Syntax Tests', () => {
    describe('UPDATE', () => {
        features.update.forEach((db) => {
            it(db, () => {
                expect(impala.validate(db).length).toBe(0);
            });
        });
    });
});
