import { SQL } from 'src/parser/sql';
import { readSQL } from 'test/helper';

const sql = new SQL();

const features = {
    reset: readSQL(__dirname, 'reset.sql'),
};

describe('SQL Reset Syntax Tests', () => {
    features.reset.forEach((itemSql) => {
        it(itemSql, () => {
            expect(sql.validate(itemSql).length).toBe(0);
        });
    });
});
