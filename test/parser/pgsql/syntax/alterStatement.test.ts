import PgSQL from '../../../../src/parser/pgsql';
import { readSQL } from '../../../helper';

const parser = new PgSQL();

const features = {
    alters: readSQL(__dirname, 'alter.sql'),
};

describe('PgSQL Create Syntax Tests', () => {
    features.alters.forEach((alters) => {
        it(alters, () => {
            expect(parser.validate(alters).length).toBe(0);
        });
    });
});
