import { FlinkSQL } from 'src/parser/flink';
import { readSQL } from 'test/helper';

const features = {
    explains: readSQL(__dirname, 'explain.sql'),
};

describe('FlinkSQL Explain Syntax Tests', () => {
    const flink = new FlinkSQL();

    features.explains.forEach((sql) => {
        it(sql, () => {
            expect(flink.validate(sql).length).toBe(0);
        });
    });
});
