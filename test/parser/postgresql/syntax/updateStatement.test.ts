import { PostgreSQL } from 'src/parser/postgresql';
import { readSQL } from 'test/helper';

const postgresql = new PostgreSQL();

const features = {
    updates: readSQL(__dirname, 'update.sql'),
};

describe('PgSQL Update Syntax Tests', () => {
    features.updates.forEach((update) => {
        it(update, () => {
            expect(postgresql.validate(update).length).toBe(0);
        });
    });
});
