import PostgresSQL from 'src/parser/pgsql';
import { readSQL } from 'test/helper';

const parser = new PostgresSQL();

const features = {
    updates: readSQL(__dirname, 'update.sql'),
};

describe('PgSQL Update Syntax Tests', () => {
    features.updates.forEach((update) => {
        it(update, () => {
            expect(parser.validate(update).length).toBe(0);
        });
    });
});
