import { BasicSQL } from 'src/parser/basic';
import { readSQL } from 'test/helper';

const basic = new BasicSQL();

const features = {
    cache: readSQL(__dirname, 'cache.sql'),
};

describe('Basic Cache Syntax Tests', () => {
    features.cache.forEach((itemSql) => {
        it(itemSql, () => {
            expect(basic.validate(itemSql).length).toBe(0);
        });
    });
});
