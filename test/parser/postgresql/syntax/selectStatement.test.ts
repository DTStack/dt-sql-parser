import PostgreSQL from 'src/parser/postgresql';
import { readSQL } from 'test/helper';

const parser = new PostgreSQL();

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
