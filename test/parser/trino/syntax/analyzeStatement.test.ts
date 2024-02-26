import TrinoSQL from 'src/parser/trino';
import { readSQL } from 'test/helper';

const features = {
    analyze: readSQL(__dirname, 'analyze.sql'),
};

describe('TrinoSQL Analyze Statements Syntax Tests', () => {
    const parser = new TrinoSQL();
    // analyze statements
    features.analyze.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
