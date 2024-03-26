import PostgreSQL from 'src/parser/postgresql';
import { readSQL } from 'test/helper';

const parser = new PostgreSQL();

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
