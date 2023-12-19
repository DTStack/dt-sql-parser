import { PostgresSQL } from '../../../filters';
import { readSQL } from '../../../helper';

const parser = new PostgresSQL();

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
