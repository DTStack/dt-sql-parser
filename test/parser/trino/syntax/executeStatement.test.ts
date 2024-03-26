import { TrinoSQL } from 'src/parser/trino';
import { readSQL } from 'test/helper';

const features = {
    execute: readSQL(__dirname, 'execute.sql'),
};

describe('TrinoSQL Execute Statements Syntax Tests', () => {
    const trino = new TrinoSQL();
    // execute statements
    features.execute.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });
});
