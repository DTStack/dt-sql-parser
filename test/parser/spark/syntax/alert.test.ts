import { SparkSQL } from '../../../filters';
import { readSQL } from '../../../helper';

const parser = new SparkSQL();

const features = {
    alertDatabase: readSQL(__dirname, 'alertDatabase.sql'),
    alertTable: readSQL(__dirname, 'alertTable.sql'),
    alertView: readSQL(__dirname, 'alertView.sql'),
};

describe('SparkSQL Alert Syntax Tests', () => {
    Object.keys(features).forEach((key) => {
        features[key].forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });
    });
});
