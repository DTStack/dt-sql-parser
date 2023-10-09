import SparkSQL from '../../../../src/parser/spark';
import { readSQL } from '../../../helper';

const parser = new SparkSQL();

const features = {
    select: readSQL(__dirname, 'select.sql'),
};

describe('Spark select Syntax Tests', () => {
    features.select.forEach((itemSql) => {
        it(itemSql, () => {
            expect(parser.validate(itemSql).length).toBe(0);
        });
    });
});
