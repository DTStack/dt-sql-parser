import { SparkSQL } from 'src/parser/spark';
import { readSQL } from 'test/helper';

const spark = new SparkSQL();

const features = {
    loadData: readSQL(__dirname, 'loadData.sql'),
};

describe('SparkSQL Load Syntax Tests', () => {
    Object.keys(features).forEach((key) => {
        features[key].forEach((sql) => {
            it(sql, () => {
                expect(spark.validate(sql).length).toBe(0);
            });
        });
    });
});
