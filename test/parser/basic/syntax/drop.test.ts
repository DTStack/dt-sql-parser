import { BasicSQL } from 'src/parser/basic';
import { readSQL } from 'test/helper';

const basic = new BasicSQL();

const features = {
    dropDatabase: readSQL(__dirname, 'dropDatabase.sql'),
    dropFunction: readSQL(__dirname, 'dropFunction.sql'),
    dropTable: readSQL(__dirname, 'dropTable.sql'),
    dropView: readSQL(__dirname, 'dropView.sql'),
    dropMaterializedView: readSQL(__dirname, 'dropMaterializedView.sql'),
};

describe('BasicSQL Drop Syntax Tests', () => {
    Object.keys(features).forEach((key) => {
        features[key].forEach((sql) => {
            it(sql, () => {
                expect(basic.validate(sql).length).toBe(0);
            });
        });
    });
});
