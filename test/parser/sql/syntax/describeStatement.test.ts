import { SQL } from 'src/parser/sql';
import { readSQL } from 'test/helper';

const sql = new SQL();

const features = {
    describe: readSQL(__dirname, 'describe.sql'),
};

describe('SQL Describe Syntax Tests', () => {
    features.describe.forEach((itemSql) => {
        it(itemSql, () => {
            expect(sql.validate(itemSql).length).toBe(0);
        });
    });
});
