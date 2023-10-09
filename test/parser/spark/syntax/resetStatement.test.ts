import SparkSQL from '../../../../src/parser/spark';
import { readSQL } from '../../../helper';

const parser = new SparkSQL();

const features = {
    reset: readSQL(__dirname, 'reset.sql'),
};

describe('Spark reset Syntax Tests', () => {
    features.reset.forEach((itemSql) => {
        it(itemSql, () => {
            expect(parser.validate(itemSql).length).toBe(0);
        });
    });
});
