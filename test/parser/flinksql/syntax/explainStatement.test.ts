import FlinkSQL from 'src/parser/flinksql';
import { readSQL } from 'test/helper';

const features = {
    explains: readSQL(__dirname, 'explain.sql'),
};

describe('FlinkSQL Explain Syntax Tests', () => {
    const parser = new FlinkSQL();

    features.explains.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
