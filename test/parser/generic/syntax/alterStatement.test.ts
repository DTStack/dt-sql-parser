import { GenericSQL } from 'src/parser/generic';
import { readSQL } from 'test/helper';

const features = {
    alterTable: readSQL(__dirname, 'alter_table.sql'),
};

describe('GenericSQL Alter Table Statements Syntax Tests', () => {
    const parser = new GenericSQL();

    features.alterTable.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
