import ImpalaSQL from '../../../../src/parser/impala';
import { readSQL } from '../../../helper';

const parser = new ImpalaSQL();

const features = {
    update: readSQL(__dirname, 'upsert.sql'),
};

describe('ImpalaSQL Upsert Syntax Tests', () => {
    describe('UPSERT', () => {
        features.update.forEach((db) => {
            it(db, () => {
                expect(parser.validate(db).length).toBe(0);
            });
        });
    });
});
