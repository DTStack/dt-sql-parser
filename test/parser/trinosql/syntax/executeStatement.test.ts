import { TrinoSQL } from '../../../filters';
import { readSQL } from '../../../helper';

const features = {
    execute: readSQL(__dirname, 'execute.sql'),
};

describe('TrinoSQL Execute Statements Syntax Tests', () => {
    const parser = new TrinoSQL();
    // execute statements
    features.execute.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
