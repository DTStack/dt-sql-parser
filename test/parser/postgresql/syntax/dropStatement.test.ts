import { PostgreSQL } from 'src/parser/postgresql';
import { readSQL } from 'test/helper';

const postgresql = new PostgreSQL();

const features = {
    drops: readSQL(__dirname, 'drop.sql'),
};

describe('PgSQL Delete Syntax Tests', () => {
    features.drops.forEach((drop) => {
        it(drop, () => {
            expect(postgresql.validate(drop).length).toBe(0);
        });
    });
});
