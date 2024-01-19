import PostgresSQL from 'src/parser/pgsql';
import { readSQL } from 'test/helper';

const parser = new PostgresSQL();

const features = {
    others: readSQL(__dirname, 'others.sql'),
};

describe('PgSQL Other SQL Syntax Tests', () => {
    features.others.forEach((other) => {
        it(other, () => {
            expect(parser.validate(other).length).toBe(0);
        });
    });
});
