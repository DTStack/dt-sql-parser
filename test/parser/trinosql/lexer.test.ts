import { TrinoSQL } from '../../filters';

describe('trinoSQL Lexer tests', () => {
    const parser = new TrinoSQL();

    const sql = 'SELECT * FROM table1';
    const tokens = parser.getAllTokens(sql);

    test('token counts', () => {
        expect(tokens.length).toBe(7);
    });
});
