import { SparkSQL } from 'src/parser/spark';
import { readSQL } from 'test/helper';

const spark = new SparkSQL();

const features = {
    set: readSQL(__dirname, 'set.sql'),
};

describe('Spark Set Syntax Tests', () => {
    features.set.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
});
