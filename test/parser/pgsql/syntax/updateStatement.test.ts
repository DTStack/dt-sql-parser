import PgSQL from '../../../../src/parser/pgsql';
import { readSQL } from '../../../helper';

const parser = new PgSQL();

const features = {
    updates: readSQL(__dirname, 'update.sql'),
};

describe('PgSQL Update Syntax Tests', () => {
    features.updates.forEach((update) => {
        it(update, () => {
            expect(parser.validate(update).length).toBe(0);
        });
    });
});
