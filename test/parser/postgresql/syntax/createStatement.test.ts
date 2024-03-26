import PostgreSQL from 'src/parser/postgresql';
import { readSQL } from 'test/helper';

const parser = new PostgreSQL();

const features = {
    creates: readSQL(__dirname, 'create.sql'),
};

describe('PgSQL Create Syntax Tests', () => {
    features.creates.forEach((create) => {
        it(create, () => {
            expect(parser.validate(create).length).toBe(0);
        });
    });
});
