import { BasicSQL } from 'src/parser/basic';
import { readSQL } from 'test/helper';

const basic = new BasicSQL();

const features = {
    list: readSQL(__dirname, 'list.sql'),
};

describe('Basic List Syntax Tests', () => {
    features.list.forEach((itemSql) => {
        it(itemSql, () => {
            expect(basic.validate(itemSql).length).toBe(0);
        });
    });
});
