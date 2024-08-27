import { SQL } from 'src/parser/sql';
import { readSQL } from 'test/helper';

const sql = new SQL();

const features = {
    createDataSourceTable: readSQL(__dirname, 'createDataSourceTable.sql'),
    createHiveFormatTable: readSQL(__dirname, 'createHiveFormatTable.sql'),
    createTableLike: readSQL(__dirname, 'createTableLike.sql'),

    repairTable: readSQL(__dirname, 'repairTable.sql'),
    truncateTable: readSQL(__dirname, 'truncateTable.sql'),
};

describe('SQL About Table Syntax Tests', () => {
    Object.keys(features).forEach((key) => {
        features[key].forEach((sql) => {
            it(sql, () => {
                expect(sql.validate(sql).length).toBe(0);
            });
        });
    });
});
