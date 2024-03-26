import { PostgreSQL } from 'src/parser/postgresql';
import { readSQL } from 'test/helper';

const postgresql = new PostgreSQL();

const features = {
    alters: readSQL(__dirname, 'alter.sql'),
};

describe('PgSQL Create Syntax Tests', () => {
    features.alters.forEach((alters) => {
        it(alters, () => {
            expect(postgresql.validate(alters).length).toBe(0);
        });
    });
});
