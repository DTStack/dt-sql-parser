import { GenericSQL } from 'src/parser/generic';
import { readSQL } from 'test/helper';

const features = {
    insertIntoTable: readSQL(__dirname, 'insert_into.sql'),
};

describe('GenericSQL Insert Statements Syntax Tests', () => {
    const parser = new GenericSQL();

    features.insertIntoTable.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
