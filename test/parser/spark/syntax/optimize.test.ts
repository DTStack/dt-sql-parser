import SparkSQL from 'src/parser/spark';
import { readSQL } from 'test/helper';

const parser = new SparkSQL();

const features = {
    set: readSQL(__dirname, 'optimize.sql'),
};

describe('Spark Optimize Syntax Tests', () => {
    features.set.forEach((itemSql) => {
        it(itemSql, () => {
            expect(parser.validate(itemSql).length).toBe(0);
        });
    });
});
