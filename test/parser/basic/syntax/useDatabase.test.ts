import { BasicSQL } from 'src/parser/basic';
import { readSQL } from 'test/helper';

const basic = new BasicSQL();

const features = {
    useDatabase: readSQL(__dirname, 'useDatabase.sql'),
};

describe('BasicSQL Use Database Syntax Tests', () => {
    Object.keys(features).forEach((key) => {
        features[key].forEach((sql) => {
            it(sql, () => {
                expect(basic.validate(sql).length).toBe(0);
            });
        });
    });
});
