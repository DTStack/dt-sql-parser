import { SQL } from 'src/parser/sql';
import { readSQL } from 'test/helper';

const sql = new SQL();

const features = {
    set: readSQL(__dirname, 'optimize.sql'),
};

describe('SQL Optimize Syntax Tests', () => {
    features.set.forEach((itemSql) => {
        it(itemSql, () => {
            expect(sql.validate(itemSql).length).toBe(0);
        });
    });
});
