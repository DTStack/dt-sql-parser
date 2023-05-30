import PostgresSQL from "../../../src/parser/pgsql";

describe('PostgresSQL SQL Syntax Tests', () => {
    const parser = new PostgresSQL();

    test('Select Statement', () => {
        const sql = 'select id, t_name from user1;';
        const result = parser.validate(sql);

        expect(result.length).toBe(0);
    });

    test('Select 1+1', () => {
        const sql = 'SELECT 1+1;';
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });

    test('Select 1+1', () => {
        const sql = 'SELECT 1+1;';
        const result = parser.validate(sql);
        expect(result.length).toBe(0);
    });

});
