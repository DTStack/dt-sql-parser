import { GenericSQL } from 'src/parser/generic';
import { readSQL } from 'test/helper';

const features = {
    createTable: readSQL(__dirname, 'create_table.sql'),
};

describe('GenericSQL Create Table Statements Syntax Tests', () => {
    const parser = new GenericSQL();

    features.createTable.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
