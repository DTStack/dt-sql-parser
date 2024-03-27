import { ImpalaSQL } from 'src/parser/impala';
import { readSQL } from 'test/helper';

const impala = new ImpalaSQL();

const features = {
    shows: readSQL(__dirname, 'show.sql'),
};

describe('ImpalaSQL Show Syntax Tests', () => {
    describe('SHOW', () => {
        features.shows.forEach((db) => {
            it(db, () => {
                expect(impala.validate(db).length).toBe(0);
            });
        });
    });
});
