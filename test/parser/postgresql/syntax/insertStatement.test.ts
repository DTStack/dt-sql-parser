import { PostgreSQL } from 'src/parser/postgresql';
import { readSQL } from 'test/helper';

const postgresql = new PostgreSQL();

const features = {
    inserts: readSQL(__dirname, 'insert.sql'),
};

describe('PgSQL Insert Syntax Tests', () => {
    features.inserts.forEach((insertItem) => {
        it(insertItem, () => {
            expect(postgresql.validate(insertItem).length).toBe(0);
        });
    });
});
