import SparkSQL from '../../../../src/parser/spark';
import { readSQL } from '../../../helper';

const parser = new SparkSQL();

const features = {
    refresh: readSQL(__dirname, 'refresh.sql'),
};

describe('Spark Refresh Syntax Tests', () => {
    features.refresh.forEach((itemSql) => {
        it(itemSql, () => {
            expect(parser.validate(itemSql).length).toBe(0);
        });
    });
});
