import { ImpalaSQL } from 'src/parser/impala';
import { readSQL } from 'test/helper';

const impala = new ImpalaSQL();

const features = {
    deletes: readSQL(__dirname, 'delete.sql'),
};

describe('ImpalaSQL Delete Syntax Tests', () => {
    describe('DELETE', () => {
        features.deletes.forEach((db) => {
            it(db, () => {
                expect(impala.validate(db).length).toBe(0);
            });
        });
    });
});
