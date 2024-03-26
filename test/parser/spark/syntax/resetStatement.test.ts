import { SparkSQL } from 'src/parser/spark';
import { readSQL } from 'test/helper';

const spark = new SparkSQL();

const features = {
    reset: readSQL(__dirname, 'reset.sql'),
};

describe('Spark Reset Syntax Tests', () => {
    features.reset.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
});
