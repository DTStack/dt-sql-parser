import { BasicSQL } from 'src/parser/basic';
import { readSQL } from 'test/helper';

const basic = new BasicSQL();

const features = {
    insertIntoTable: readSQL(__dirname, 'insertIntoTable.sql'),
    insertOverwriteTable: readSQL(__dirname, 'insertOverwriteTable.sql'),
    insertOverwriteDirectory: readSQL(__dirname, 'insertOverwriteDirectory.sql'),
    loadData: readSQL(__dirname, 'loadData.sql'),
};

describe('BasicSQL Insert Syntax Tests', () => {
    Object.keys(features).forEach((key) => {
        features[key].forEach((sql) => {
            it(sql, () => {
                expect(basic.validate(sql).length).toBe(0);
            });
        });
    });
});
