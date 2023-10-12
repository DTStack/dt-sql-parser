import FlinkSQL from '../../../../src/parser/flinksql';
import { readSQL } from '../../../helper';

const features = {
    describes: readSQL(__dirname, 'describe.sql'),
};

describe('FlinkSQL Describe Syntax Tests', () => {
    const parser = new FlinkSQL();

    features.describes.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
