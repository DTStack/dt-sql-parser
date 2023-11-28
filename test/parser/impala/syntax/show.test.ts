import ImpalaSQL from '../../../../src/parser/impala';
import { readSQL } from '../../../helper';

const parser = new ImpalaSQL();

const features = {
    shows: readSQL(__dirname, 'show.sql'),
};

describe('ImpalaSQL Show Syntax Tests', () => {
    describe('SHOW', () => {
        features.shows.forEach((db) => {
            it(db, () => {
                expect(parser.validate(db).length).toBe(0);
            });
        });
    });
});
