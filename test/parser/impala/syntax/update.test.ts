import { ImpalaSQL } from '../../../filters';
import { readSQL } from '../../../helper';

const parser = new ImpalaSQL();

const features = {
    update: readSQL(__dirname, 'update.sql'),
};

describe('ImpalaSQL Update Syntax Tests', () => {
    describe('UPDATE', () => {
        features.update.forEach((db) => {
            it(db, () => {
                expect(parser.validate(db).length).toBe(0);
            });
        });
    });
});
