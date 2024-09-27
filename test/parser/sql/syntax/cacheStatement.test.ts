import { SQL } from 'src/parser/sql';
import { readSQL } from 'test/helper';

const sql = new SQL();

const features = {
    cache: readSQL(__dirname, 'cache.sql'),
};

describe('SQL Cache Syntax Tests', () => {
    features.cache.forEach((itemSql) => {
        it(itemSql, () => {
            expect(sql.validate(itemSql).length).toBe(0);
        });
    });
});
