import { SparkSQL } from 'src/parser/spark';
import { readSQL } from 'test/helper';

const spark = new SparkSQL();

const features = {
    analyzeTable: readSQL(__dirname, 'analyzeTable.sql'),
};

describe('Spark Analyze Table Syntax Tests', () => {
    features.analyzeTable.forEach((itemSql) => {
        it(itemSql, () => {
            expect(spark.validate(itemSql).length).toBe(0);
        });
    });
});
