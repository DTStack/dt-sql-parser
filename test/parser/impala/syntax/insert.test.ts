import { ImpalaSQL } from 'src/parser/impala';
import { readSQL } from 'test/helper';

const impala = new ImpalaSQL();

const features = {
    insert: readSQL(__dirname, 'insert.sql'),
};

describe('ImpalaSQL Insert Syntax Tests', () => {
    describe('INSERT', () => {
        features.insert.forEach((db) => {
            it(db, () => {
                expect(impala.validate(db).length).toBe(0);
            });
        });
    });
});
