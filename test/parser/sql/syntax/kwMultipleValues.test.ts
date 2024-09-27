import { SQL } from 'src/parser/sql';
import { readSQL } from 'test/helper';

const sql = new SQL();

/**
 * 关键词有多个值
 * KW_NOT: 'NOT' | '!'
 * KW_RLIKE: 'RLIKE' | 'REGEXP';
 */
const features = {
    kwMultipleValues: readSQL(__dirname, 'kwMultipleValues.sql'),
};

describe('SQL Keyword Has Multiple Values Syntax Tests', () => {
    Object.keys(features).forEach((key) => {
        features[key].forEach((sql) => {
            it(sql, () => {
                expect(sql.validate(sql).length).toBe(0);
            });
        });
    });
});
