import { BasicSQL } from 'src/parser/basic';
import { readSQL } from 'test/helper';

const basic = new BasicSQL();

const features = {
    reset: readSQL(__dirname, 'reset.sql'),
};

describe('Basic Reset Syntax Tests', () => {
    features.reset.forEach((itemSql) => {
        it(itemSql, () => {
            expect(basic.validate(itemSql).length).toBe(0);
        });
    });
});
