import TrinoSQL from 'src/parser/trino';
import { readSQL } from 'test/helper';

const features = {
    insertIntoTable: readSQL(__dirname, 'insert_into.sql'),
};

describe('TrinoSQL Insert Statements Syntax Tests', () => {
    const parser = new TrinoSQL();
    features.insertIntoTable.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
