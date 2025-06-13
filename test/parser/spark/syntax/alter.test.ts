import { SparkSQL } from 'src/parser/spark';
import { readSQL } from 'test/helper';

const spark = new SparkSQL();

const features = {
    alterDatabase: readSQL(__dirname, 'alterDatabase.sql'),
    alterTable: readSQL(__dirname, 'alterTable.sql'),
    alterView: readSQL(__dirname, 'alterView.sql'),
    alterMaterializedView: readSQL(__dirname, 'alterMaterializedView.sql'),
};

describe('SparkSQL Alter Syntax Tests', () => {
    Object.keys(features).forEach((key) => {
        features[key].forEach((sql) => {
            it(sql, () => {
                expect(spark.validate(sql).length).toBe(0);
            });
        });
    });
});
