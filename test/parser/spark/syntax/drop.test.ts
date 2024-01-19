import SparkSQL from 'src/parser/spark';
import { readSQL } from 'test/helper';

const parser = new SparkSQL();

const features = {
    dropDatabase: readSQL(__dirname, 'dropDatabase.sql'),
    dropFunction: readSQL(__dirname, 'dropFunction.sql'),
    dropTable: readSQL(__dirname, 'dropTable.sql'),
    dropView: readSQL(__dirname, 'dropView.sql'),
};

describe('SparkSQL Drop Syntax Tests', () => {
    Object.keys(features).forEach((key) => {
        features[key].forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });
    });
});
