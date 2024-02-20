import SparkSQL from 'src/parser/spark';
import { readSQL } from 'test/helper';

const parser = new SparkSQL();

const features = {
    createDatabase: readSQL(__dirname, 'createDatabase.sql'),
    createFunction: readSQL(__dirname, 'createFunction.sql'),
    createView: readSQL(__dirname, 'createView.sql'),
    createMaterializedView: readSQL(__dirname, 'createMaterializedView.sql'),
};

describe('SparkSQL Create Syntax Tests', () => {
    Object.keys(features).forEach((key) => {
        features[key].forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });
    });
});
