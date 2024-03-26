import FlinkSQL from 'src/parser/flink';
import { readSQL } from 'test/helper';

const features = {
    uses: readSQL(__dirname, 'use.sql'),
};

describe('FlinkSQL Use Syntax Tests', () => {
    const parser = new FlinkSQL();

    features.uses.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
