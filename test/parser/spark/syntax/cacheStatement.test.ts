import SparkSQL from '../../../../src/parser/spark';
import { readSQL } from '../../../helper';

const parser = new SparkSQL();

const features = {
    cache: readSQL(__dirname, 'cache.sql'),
};

describe('Spark Cache Syntax Tests', () => {
    features.cache.forEach((itemSql) => {
        it(itemSql, () => {
            expect(parser.validate(itemSql).length).toBe(0);
        });
    });
});
