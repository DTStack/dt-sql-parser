import { TrinoSQL } from 'src/parser/trino';
import { readSQL } from 'test/helper';

const features = {
    explain: readSQL(__dirname, 'explain.sql'),
};

describe('TrinoSQL Explain Statements Syntax Tests', () => {
    const trino = new TrinoSQL();
    // explain statements
    features.explain.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });
});
