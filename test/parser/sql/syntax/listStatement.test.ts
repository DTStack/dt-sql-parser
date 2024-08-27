import { SQL } from 'src/parser/sql';
import { readSQL } from 'test/helper';

const sql = new SQL();

const features = {
    list: readSQL(__dirname, 'list.sql'),
};

describe('SQL List Syntax Tests', () => {
    features.list.forEach((itemSql) => {
        it(itemSql, () => {
            expect(sql.validate(itemSql).length).toBe(0);
        });
    });
});
