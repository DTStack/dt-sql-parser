import { TrinoSQL } from 'src/parser/trino';
import { readSQL } from 'test/helper';

const features = {
    insertIntoTable: readSQL(__dirname, 'insert_into.sql'),
};

describe('TrinoSQL Insert Statements Syntax Tests', () => {
    const trino = new TrinoSQL();
    features.insertIntoTable.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });
});
