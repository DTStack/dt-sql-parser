import { SQL } from 'src/parser/sql';

describe('SQL Lexer tests', () => {
    const sql = new SQL();

    test('select id,name from user1;', () => {
        const sql = `select id,name from user1;`;
        const tokens = sql.getAllTokens(sql);
        expect(tokens.length).toBe(10);
    });

    test('SELECT * FROM t WHERE x = 1 AND y = 2;', () => {
        const sql = `SELECT * FROM t WHERE x = 1 AND y = 2;`;
        const tokens = sql.getAllTokens(sql);
        expect(tokens.length).toBe(24);
    });
});
