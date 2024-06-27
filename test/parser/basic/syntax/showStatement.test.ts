import { BasicSQL } from 'src/parser/basic';
import { readSQL } from 'test/helper';

const basic = new BasicSQL();

const features = {
    show: readSQL(__dirname, 'show.sql'),
};

describe('Basic Show Syntax Tests', () => {
    features.show.forEach((itemSql) => {
        it(itemSql, () => {
            expect(basic.validate(itemSql).length).toBe(0);
        });
    });
});
