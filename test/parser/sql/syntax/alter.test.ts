import { SQL } from 'src/parser/sql';
import { readSQL } from 'test/helper';

const sql = new SQL();

const features = {
    alterDatabase: readSQL(__dirname, 'alterDatabase.sql'),
    altertTable: readSQL(__dirname, 'alterTable.sql'),
    alterView: readSQL(__dirname, 'alterView.sql'),
    alterMaterializedView: readSQL(__dirname, 'alterMaterializedView.sql'),
};

describe('SQL Alter Syntax Tests', () => {
    Object.keys(features).forEach((key) => {
        features[key].forEach((sql) => {
            it(sql, () => {
                expect(sql.validate(sql).length).toBe(0);
            });
        });
    });
});
