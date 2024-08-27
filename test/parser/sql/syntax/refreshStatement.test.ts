import { SQL } from 'src/parser/sql';
import { readSQL } from 'test/helper';

const sql = new SQL();

const features = {
    refresh: readSQL(__dirname, 'refresh.sql'),
};

describe('SQL Refresh Syntax Tests', () => {
    features.refresh.forEach((itemSql) => {
        it(itemSql, () => {
            expect(sql.validate(itemSql).length).toBe(0);
        });
    });
});
