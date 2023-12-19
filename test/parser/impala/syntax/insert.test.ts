import { ImpalaSQL } from '../../../filters';
import { readSQL } from '../../../helper';

const parser = new ImpalaSQL();

const features = {
    insert: readSQL(__dirname, 'insert.sql'),
};

describe('ImpalaSQL Insert Syntax Tests', () => {
    describe('INSERT', () => {
        features.insert.forEach((db) => {
            it(db, () => {
                expect(parser.validate(db).length).toBe(0);
            });
        });
    });
});
