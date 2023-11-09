import PgSQL from '../../../../src/parser/pgsql';
import { readSQL } from '../../../helper';

const parser = new PgSQL();

const features = {
    selects: readSQL(__dirname, 'select.sql'),
};

describe('PgSQL Select Syntax Tests', () => {
    features.selects.forEach((select) => {
        it(select, () => {
            expect(parser.validate(select).length).toBe(0);
        });
    });
});
