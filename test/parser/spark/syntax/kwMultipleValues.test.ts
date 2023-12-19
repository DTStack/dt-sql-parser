import { SparkSQL } from '../../../filters';
import { readSQL } from '../../../helper';

const parser = new SparkSQL();

/**
 * 关键词有多个值
 * KW_NOT: 'NOT' | '!'
 * KW_RLIKE: 'RLIKE' | 'REGEXP';
 */
const features = {
    kwMultipleValues: readSQL(__dirname, 'kwMultipleValues.sql'),
};

describe('SparkSQL Keyword Has Multiple Values Syntax Tests', () => {
    Object.keys(features).forEach((key) => {
        features[key].forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });
    });
});
