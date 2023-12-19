import { PostgresSQL } from '../../../filters';
import { readSQL } from '../../../helper';

const parser = new PostgresSQL();

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
