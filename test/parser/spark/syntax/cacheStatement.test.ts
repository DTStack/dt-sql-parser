import { SparkSQL } from 'src/parser/spark';
import { readSQL } from 'test/helper';

const spark = new SparkSQL();

const features = {
    cache: readSQL(__dirname, 'cache.sql'),
};

describe('Spark Cache Syntax Tests', () => {
    features.cache.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
});
