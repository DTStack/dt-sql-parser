import SQLParser from '../../../src/parser/spark';

const log = console.log.bind(console);

describe('Spark SQL Syntax Tests', () => {
    const parser = new SQLParser();

    test('Select Statement', () => {
        const sql = 'select id,name from user1;';
        const result = parser.validate(sql);
        log('result', result);
        expect(result.length).toBe(0);
    });

    test('Select 1+1', () => {
        const sql = 'SELECT 1+1;';
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });

    test('select', () => {
        const sql = 'select * from person where age >= 20 order by age desc limit 2';
        const result = parser.validate(sql);
        log('result', result);
        expect(result.length).toBe(0);
    });
});
