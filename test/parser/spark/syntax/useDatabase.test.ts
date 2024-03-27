import { SparkSQL } from 'src/parser/spark';
import { readSQL } from 'test/helper';

const spark = new SparkSQL();

const features = {
    useDatabase: readSQL(__dirname, 'useDatabase.sql'),
};

describe('SparkSQL Use Database Syntax Tests', () => {
    Object.keys(features).forEach((key) => {
        features[key].forEach((sql) => {
            it(sql, () => {
                expect(spark.validate(sql).length).toBe(0);
            });
        });
    });
});
