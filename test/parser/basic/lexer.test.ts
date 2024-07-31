import { BasicSQL } from 'src/parser/basic';

describe('BasicSQL Lexer tests', () => {
    const basic = new BasicSQL();

    test('select id,name from user1;', () => {
        const sql = `select id,name from user1;`;
        const tokens = basic.getAllTokens(sql);
        expect(tokens.length).toBe(10);
    });

    test('SELECT * FROM t WHERE x = 1 AND y = 2;', () => {
        const sql = `SELECT * FROM t WHERE x = 1 AND y = 2;`;
        const tokens = basic.getAllTokens(sql);
        expect(tokens.length).toBe(24);
    });
});
