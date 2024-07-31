import { BasicSQL } from 'src/parser/basic';
import { readSQL } from 'test/helper';

const basic = new BasicSQL();

const features = {
    refresh: readSQL(__dirname, 'refresh.sql'),
};

describe('Basic Refresh Syntax Tests', () => {
    features.refresh.forEach((itemSql) => {
        it(itemSql, () => {
            expect(basic.validate(itemSql).length).toBe(0);
        });
    });
});
