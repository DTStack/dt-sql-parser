import MySQL from '../../../../src/parser/mysql';
import { readSQL } from '../../../helper';

const parser = new MySQL();

const features = {
    utility: readSQL(__dirname, 'utility.sql'),
};

describe('MySQL Other Administration Syntax Tests', () => {
    Object.keys(features).forEach((key) => {
        features[key].forEach((sql) => {
            it(sql, () => {
                const result = parser.validate(sql);
                if (result.length) {
                    console.log(result, `\n请检查 sql: ${sql}`);
                }
                expect(result.length).toBe(0);
            });
        });
    });
});
