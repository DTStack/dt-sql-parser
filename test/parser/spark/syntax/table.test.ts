import SparkSQL from '../../../../src/parser/spark';
import { readSQL } from '../../../helper';

const parser = new SparkSQL();

const features = {
    createDataSourceTable: readSQL(__dirname, 'createDataSourceTable.sql'),
    createHiveFormatTable: readSQL(__dirname, 'createHiveFormatTable.sql'),
    createTableLike: readSQL(__dirname, 'createTableLike.sql'),

    repairTable: readSQL(__dirname, 'repairTable.sql'),
    truncateTable: readSQL(__dirname, 'truncateTable.sql'),
};

describe('SparkSQL About Table Syntax Tests', () => {
    Object.keys(features).forEach((key) => {
        features[key].forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });
    });
});
