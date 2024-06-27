import { BasicSQL } from 'src/parser/basic';
import { readSQL } from 'test/helper';

const basic = new BasicSQL();

const features = {
    createDataSourceTable: readSQL(__dirname, 'createDataSourceTable.sql'),
    createHiveFormatTable: readSQL(__dirname, 'createHiveFormatTable.sql'),
    createTableLike: readSQL(__dirname, 'createTableLike.sql'),

    repairTable: readSQL(__dirname, 'repairTable.sql'),
    truncateTable: readSQL(__dirname, 'truncateTable.sql'),
};

describe('BasicSQL About Table Syntax Tests', () => {
    Object.keys(features).forEach((key) => {
        features[key].forEach((sql) => {
            it(sql, () => {
                expect(basic.validate(sql).length).toBe(0);
            });
        });
    });
});
