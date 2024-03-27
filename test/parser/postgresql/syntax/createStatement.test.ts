import { PostgreSQL } from 'src/parser/postgresql';
import { readSQL } from 'test/helper';

const postgresql = new PostgreSQL();

const features = {
    creates: readSQL(__dirname, 'create.sql'),
};

describe('PgSQL Create Syntax Tests', () => {
    features.creates.forEach((create) => {
        it(create, () => {
            expect(postgresql.validate(create).length).toBe(0);
        });
    });
});
