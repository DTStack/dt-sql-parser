import { TrinoSQL } from 'src/parser/trino';

describe('trinoSQL Lexer tests', () => {
    const trino = new TrinoSQL();

    const sql = 'SELECT * FROM table1';
    const tokens = trino.getAllTokens(sql);

    test('token counts', () => {
        expect(tokens.length).toBe(7);
    });
});
