import { SQL } from 'src/parser/sql';
import { readSQL } from 'test/helper';

const sql = new SQL();

const features = {
    add: readSQL(__dirname, 'add.sql'),
};

describe('SQL Add Syntax Tests', () => {
    features.add.forEach((itemSql) => {
        it(itemSql, () => {
            expect(sql.validate(itemSql).length).toBe(0);
        });
    });
});
