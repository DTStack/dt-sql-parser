import ImpalaSQL from '../../../../src/parser/impala';
import { readSQL } from '../../../helper';

const parser = new ImpalaSQL();

const features = {
    select: readSQL(__dirname, 'select.sql'),
};

describe('ImpalaSQL Select Syntax Tests', () => {
    describe('SELECT', () => {
        features.select.forEach((db) => {
            it(db, () => {
                expect(parser.validate(db).length).toBe(0);
            });
        });
    });
});
