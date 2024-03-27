import { PostgreSQL } from 'src/parser/postgresql';
import { readSQL } from 'test/helper';

const postgresql = new PostgreSQL();

const features = {
    others: readSQL(__dirname, 'others.sql'),
};

describe('PgSQL Other SQL Syntax Tests', () => {
    features.others.forEach((other) => {
        it(other, () => {
            expect(postgresql.validate(other).length).toBe(0);
        });
    });
});
