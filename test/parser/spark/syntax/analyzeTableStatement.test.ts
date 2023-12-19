import { SparkSQL } from '../../../filters';
import { readSQL } from '../../../helper';

const parser = new SparkSQL();

const features = {
    analyzeTable: readSQL(__dirname, 'analyzeTable.sql'),
};

describe('Spark Analyze Table Syntax Tests', () => {
    features.analyzeTable.forEach((itemSql) => {
        it(itemSql, () => {
            expect(parser.validate(itemSql).length).toBe(0);
        });
    });
});
