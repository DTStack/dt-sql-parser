import PostgreSQL from 'src/parser/postgresql';
import { readSQL } from 'test/helper';

const parser = new PostgreSQL();

const features = {
    inserts: readSQL(__dirname, 'insert.sql'),
};

describe('PgSQL Insert Syntax Tests', () => {
    features.inserts.forEach((insertItem) => {
        it(insertItem, () => {
            expect(parser.validate(insertItem).length).toBe(0);
        });
    });
});
