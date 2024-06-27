import { BasicSQL } from 'src/parser/basic';
import { readSQL } from 'test/helper';

const basic = new BasicSQL();

const features = {
    alterDatabase: readSQL(__dirname, 'alterDatabase.sql'),
    altertTable: readSQL(__dirname, 'alterTable.sql'),
    alterView: readSQL(__dirname, 'alterView.sql'),
    alterMaterializedView: readSQL(__dirname, 'alterMaterializedView.sql'),
};

describe('BasicSQL Alter Syntax Tests', () => {
    Object.keys(features).forEach((key) => {
        features[key].forEach((sql) => {
            it(sql, () => {
                expect(basic.validate(sql).length).toBe(0);
            });
        });
    });
});
