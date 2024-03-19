import PostgresSQL from 'src/parser/pgsql';
import { readSQL } from 'test/helper';

const parser = new PostgresSQL();

const features = {
    alters: readSQL(__dirname, 'alter.sql'),
};

describe('PgSQL Create Syntax Tests', () => {
    // features.alters.forEach((alters) => {
    //     it(alters, () => {
    //         expect(parser.validate(alters).length).toBe(0);
    //     });
    // });

    test('dddd', () => {
        const ps = parser.createParser('ALTER TABLE products DROP CONSTRAINT some_name;');
        const tree = ps.program();
        const errors = parser.validate('ALTER TABLE products DROP CONSTRAINT some_name;');

        console.log(errors);
        expect(errors.length).toBe(0);
    });
});
