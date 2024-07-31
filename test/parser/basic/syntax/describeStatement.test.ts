import { BasicSQL } from 'src/parser/basic';
import { readSQL } from 'test/helper';

const basic = new BasicSQL();

const features = {
    describe: readSQL(__dirname, 'describe.sql'),
};

describe('Basic Describe Syntax Tests', () => {
    features.describe.forEach((itemSql) => {
        it(itemSql, () => {
            expect(basic.validate(itemSql).length).toBe(0);
        });
    });
});
