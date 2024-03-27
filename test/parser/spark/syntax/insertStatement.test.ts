import { SparkSQL } from 'src/parser/spark';
import { readSQL } from 'test/helper';

const spark = new SparkSQL();

const features = {
    insertIntoTable: readSQL(__dirname, 'insertIntoTable.sql'),
    insertOverwriteTable: readSQL(__dirname, 'insertOverwriteTable.sql'),
    insertOverwriteDirectory: readSQL(__dirname, 'insertOverwriteDirectory.sql'),
    loadData: readSQL(__dirname, 'loadData.sql'),
};

describe('SparkSQL Insert Syntax Tests', () => {
    Object.keys(features).forEach((key) => {
        features[key].forEach((sql) => {
            it(sql, () => {
                expect(spark.validate(sql).length).toBe(0);
            });
        });
    });
});
