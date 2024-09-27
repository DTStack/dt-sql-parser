import { SQL } from 'src/parser/sql';
import { readSQL } from 'test/helper';

const sql = new SQL();

const features = {
    insertIntoTable: readSQL(__dirname, 'insertIntoTable.sql'),
    insertOverwriteTable: readSQL(__dirname, 'insertOverwriteTable.sql'),
    insertOverwriteDirectory: readSQL(__dirname, 'insertOverwriteDirectory.sql'),
    loadData: readSQL(__dirname, 'loadData.sql'),
};

describe('SQL Insert Syntax Tests', () => {
    Object.keys(features).forEach((key) => {
        features[key].forEach((sql) => {
            it(sql, () => {
                expect(sql.validate(sql).length).toBe(0);
            });
        });
    });
});
