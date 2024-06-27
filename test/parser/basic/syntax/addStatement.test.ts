import { BasicSQL } from 'src/parser/basic';
import { readSQL } from 'test/helper';

const basic = new BasicSQL();

const features = {
    add: readSQL(__dirname, 'add.sql'),
};

describe('Basic Add Syntax Tests', () => {
    features.add.forEach((itemSql) => {
        it(itemSql, () => {
            expect(basic.validate(itemSql).length).toBe(0);
        });
    });
});
