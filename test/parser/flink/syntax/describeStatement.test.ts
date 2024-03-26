import { FlinkSQL } from 'src/parser/flink';
import { readSQL } from 'test/helper';

const features = {
    describes: readSQL(__dirname, 'describe.sql'),
};

describe('FlinkSQL Describe Syntax Tests', () => {
    const flink = new FlinkSQL();

    features.describes.forEach((sql) => {
        it(sql, () => {
            expect(flink.validate(sql).length).toBe(0);
        });
    });
});
