import TrinoSQL from 'src/parser/trinosql';
import { readSQL } from 'test/helper';

const features = {
    values: readSQL(__dirname, 'values.sql'),
};

describe('TrinoSQL Values Statements Syntax Tests', () => {
    const parser = new TrinoSQL();
    // values statements
    features.values.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
