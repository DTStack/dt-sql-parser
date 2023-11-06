import PgSQL from '../../../../src/parser/pgsql';
import { readSQL } from '../../../helper';

const parser = new PgSQL();

const features = {
    deletes: readSQL(__dirname, 'delete.sql'),
};

describe('PgSQL Delete Syntax Tests', () => {
    features.deletes.forEach((deleteItem) => {
        it(deleteItem, () => {
            expect(parser.validate(deleteItem).length).toBe(0);
        });
    });
});
