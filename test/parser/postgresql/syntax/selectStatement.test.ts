import { PostgreSQL } from 'src/parser/postgresql';
import { readSQL } from 'test/helper';

const postgresql = new PostgreSQL();

const features = {
    selects: readSQL(__dirname, 'select.sql'),
};

describe('PgSQL Select Syntax Tests', () => {
    features.selects.forEach((select) => {
        it(select, () => {
            expect(postgresql.validate(select).length).toBe(0);
        });
    });
});
