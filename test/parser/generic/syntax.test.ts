import { GenericSQL } from '../../../src';

describe('Generic SQL Syntax Tests', () => {
    const parser = new GenericSQL();

    test('Select Statement', () => {
        const sql = 'select id,name from user1;';
        const result = parser.validate(sql);

        expect(result.length).toBe(0);
    });

    test('Select 1+1', () => {
        const sql = 'SELECT 1+1;';
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
});
