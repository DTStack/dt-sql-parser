import { BasicSQL } from 'src/parser/basic';
import { readSQL } from 'test/helper';

const basic = new BasicSQL();

/**
 * 关键词有多个值
 * KW_NOT: 'NOT' | '!'
 * KW_RLIKE: 'RLIKE' | 'REGEXP';
 */
const features = {
    kwMultipleValues: readSQL(__dirname, 'kwMultipleValues.sql'),
};

describe('BasicSQL Keyword Has Multiple Values Syntax Tests', () => {
    Object.keys(features).forEach((key) => {
        features[key].forEach((sql) => {
            it(sql, () => {
                expect(basic.validate(sql).length).toBe(0);
            });
        });
    });
});
