import MySQLParser from '../../../src/core/mysql';

describe('MySQL Syntax tests', () => {
    const mysql = new MySQLParser();
    test('Select Statement', () => {
        const sql = 'select id,name from user1;';
        const result = mysql.validate(sql);

        expect(result.length).toBe(0);
    });
});
