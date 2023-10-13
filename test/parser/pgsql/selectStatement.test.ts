import PostgresSQL from '../../../src/parser/pgsql';
import { readSQL } from '../../helper';

const parser = new PostgresSQL();

const features = {
    base: readSQL(__dirname, 'select.sql'),
};

describe('Postgre SQL Query Statement Tests', () => {
    describe('Base Select', () => {
        features.base.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });
    });
});
