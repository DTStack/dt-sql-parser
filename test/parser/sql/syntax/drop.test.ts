import { SQL } from 'src/parser/sql';
import { readSQL } from 'test/helper';

const sql = new SQL();

const features = {
    dropDatabase: readSQL(__dirname, 'dropDatabase.sql'),
    dropFunction: readSQL(__dirname, 'dropFunction.sql'),
    dropTable: readSQL(__dirname, 'dropTable.sql'),
    dropView: readSQL(__dirname, 'dropView.sql'),
    dropMaterializedView: readSQL(__dirname, 'dropMaterializedView.sql'),
};

describe('SQL Drop Syntax Tests', () => {
    Object.keys(features).forEach((key) => {
        features[key].forEach((sql) => {
            it(sql, () => {
                expect(sql.validate(sql).length).toBe(0);
            });
        });
    });
});
