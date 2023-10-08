import SparkSQL from '../../../../src/parser/spark';
import { readSQL } from '../../../helper';

const parser = new SparkSQL();

const features = {
    describe: readSQL(__dirname, 'describe.sql'),
};

describe('Spark describe Syntax Tests', () => {
    features.describe.forEach((itemSql) => {
        it(itemSql, () => {
            expect(parser.validate(itemSql).length).toBe(0);
        });
    });
});
