import { BasicSQL } from 'src/parser/basic';
import { readSQL } from 'test/helper';

const basic = new BasicSQL();

const features = {
    analyzeTable: readSQL(__dirname, 'analyzeTable.sql'),
};

describe('Basic Analyze Table Syntax Tests', () => {
    features.analyzeTable.forEach((itemSql) => {
        it(itemSql, () => {
            expect(basic.validate(itemSql).length).toBe(0);
        });
    });
});
