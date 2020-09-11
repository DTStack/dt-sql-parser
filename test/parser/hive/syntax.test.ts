import SQLParser from '../../../src/parser/hive';

describe('Hive SQL Syntax Tests', () => {
    const parser = new SQLParser();

    test('Select Statement', () => {
        const sql = 'SELECT * FROM employee WHERE salary>30000;';
        const result = parser.validate(sql);

        expect(result.length).toBe(0);
    });

    test('Select 1+1', () => {
        const sql = 'SELECT 1+1;';
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });
});
