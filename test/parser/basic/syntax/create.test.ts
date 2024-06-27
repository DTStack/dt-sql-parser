import { BasicSQL } from 'src/parser/basic';
import { readSQL } from 'test/helper';

const basic = new BasicSQL();

const features = {
    createDatabase: readSQL(__dirname, 'createDatabase.sql'),
    createFunction: readSQL(__dirname, 'createFunction.sql'),
    createView: readSQL(__dirname, 'createView.sql'),
    createMaterializedView: readSQL(__dirname, 'createMaterializedView.sql'),
};

describe('BasicSQL Create Syntax Tests', () => {
    Object.keys(features).forEach((key) => {
        features[key].forEach((sql) => {
            it(sql, () => {
                expect(basic.validate(sql).length).toBe(0);
            });
        });
    });
});
