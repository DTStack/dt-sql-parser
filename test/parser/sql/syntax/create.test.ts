import { SQL } from 'src/parser/sql';
import { readSQL } from 'test/helper';

const sql = new SQL();

const features = {
    createDatabase: readSQL(__dirname, 'createDatabase.sql'),
    createFunction: readSQL(__dirname, 'createFunction.sql'),
    createView: readSQL(__dirname, 'createView.sql'),
    createMaterializedView: readSQL(__dirname, 'createMaterializedView.sql'),
};

describe('SQL Create Syntax Tests', () => {
    Object.keys(features).forEach((key) => {
        features[key].forEach((sql) => {
            it(sql, () => {
                expect(sql.validate(sql).length).toBe(0);
            });
        });
    });
});
