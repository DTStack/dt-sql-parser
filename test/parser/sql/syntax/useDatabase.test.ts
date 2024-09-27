import { SQL } from 'src/parser/sql';
import { readSQL } from 'test/helper';

const sql = new SQL();

const features = {
    useDatabase: readSQL(__dirname, 'useDatabase.sql'),
};

describe('SQL Use Database Syntax Tests', () => {
    Object.keys(features).forEach((key) => {
        features[key].forEach((sql) => {
            it(sql, () => {
                expect(sql.validate(sql).length).toBe(0);
            });
        });
    });
});
