import MySQLParser from '../../../src/core/mysql';

describe('MySQL Lexer tests', () => {
    const mysqlParser = new MySQLParser();

    const sql = 'select id,name,sex from user1;';
    const tokens = mysqlParser.getAllTokens(sql);

    test('token counts', () => {
        expect(tokens.length).toBe(12);
    });

    test('token counts', () => {
        expect(tokens.length).toBe(12);
    });
});
