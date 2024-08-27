import { SQL } from 'src/parser/sql';
import { readSQL } from 'test/helper';

const sql = new SQL();

const features = {
    show: readSQL(__dirname, 'show.sql'),
};

describe('SQL Show Syntax Tests', () => {
    features.show.forEach((itemSql) => {
        it(itemSql, () => {
            expect(sql.validate(itemSql).length).toBe(0);
        });
    });
});
