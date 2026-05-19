import { GenericSQL } from 'src/parser/generic';
import { readSQL } from 'test/helper';

const features = {
    dropTable: readSQL(__dirname, 'drop_table.sql'),
};

describe('GenericSQL Drop Table Statements Syntax Tests', () => {
    const parser = new GenericSQL();

    features.dropTable.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
