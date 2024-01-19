import ImpalaSQL from 'src/parser/impala';
import { readSQL } from 'test/helper';

const parser = new ImpalaSQL();

const features = {
    deletes: readSQL(__dirname, 'delete.sql'),
};

describe('ImpalaSQL Delete Syntax Tests', () => {
    describe('DELETE', () => {
        features.deletes.forEach((db) => {
            it(db, () => {
                expect(parser.validate(db).length).toBe(0);
            });
        });
    });
});
