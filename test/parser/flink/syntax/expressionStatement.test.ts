import FlinkSQL from 'src/parser/flink';
import { readSQL } from 'test/helper';

const features = {
    expression: readSQL(__dirname, 'expression.sql'),
};

describe('FlinkSQL Expression Syntax Tests', () => {
    const parser = new FlinkSQL();

    features.expression.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
