import { Sql } from 'src/parser/sql';

describe('Sql Lexer tests', () => {
    const sql = new Sql();

    test('select id,name from user1;', () => {
        const sqlText = `select id,name from user1;`;
        const tokens = sql.getAllTokens(sqlText);
        expect(tokens.length).toBe(10);
    });

    test('SELECT * FROM t WHERE x = 1 AND y = 2;', () => {
        const sqlText = `SELECT * FROM t WHERE x = 1 AND y = 2;`;
        const tokens = sql.getAllTokens(sqlText);
        expect(tokens.length).toBe(24);
    });
});
