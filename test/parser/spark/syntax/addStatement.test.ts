import { SparkSQL } from '../../../filters';
import { readSQL } from '../../../helper';

const parser = new SparkSQL();

const features = {
    add: readSQL(__dirname, 'add.sql'),
};

describe('Spark Add Syntax Tests', () => {
    features.add.forEach((itemSql) => {
        it(itemSql, () => {
            expect(parser.validate(itemSql).length).toBe(0);
        });
    });
});
