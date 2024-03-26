import { SparkSQL } from 'src/parser/spark';
import { readSQL } from 'test/helper';

const spark = new SparkSQL();

const features = {
    refresh: readSQL(__dirname, 'refresh.sql'),
};

describe('Spark Refresh Syntax Tests', () => {
    features.refresh.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
});
