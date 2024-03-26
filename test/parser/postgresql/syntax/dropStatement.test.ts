import PostgreSQL from 'src/parser/postgresql';
import { readSQL } from 'test/helper';

const parser = new PostgreSQL();

const features = {
    drops: readSQL(__dirname, 'drop.sql'),
};

describe('PgSQL Delete Syntax Tests', () => {
    features.drops.forEach((drop) => {
        it(drop, () => {
            expect(parser.validate(drop).length).toBe(0);
        });
    });
});
