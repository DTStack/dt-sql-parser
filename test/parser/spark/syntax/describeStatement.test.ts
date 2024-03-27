import { SparkSQL } from 'src/parser/spark';
import { readSQL } from 'test/helper';

const spark = new SparkSQL();

const features = {
    describe: readSQL(__dirname, 'describe.sql'),
};

describe('Spark Describe Syntax Tests', () => {
    features.describe.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
});
