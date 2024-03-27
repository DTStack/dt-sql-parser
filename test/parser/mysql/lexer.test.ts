import { MySQL } from 'src/parser/mysql';

describe('MySQL Lexer tests', () => {
    const mysql = new MySQL();

    const sql = 'select id,name,sex from user1;';
    const tokens = mysql.getAllTokens(sql);

    test('token counts', () => {
        expect(tokens.length).toBe(12);
    });
});
