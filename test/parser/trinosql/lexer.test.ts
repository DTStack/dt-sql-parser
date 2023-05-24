import trinoSQL from '../../../src/parser/trinosql';

describe('trinoSQL Lexer tests', () => {
    const parser = new trinoSQL();

    const sql = 'SELECT * FROM table1';
    const tokens = parser.getAllTokens(sql);

    test('token counts', () => {
        expect(tokens.length - 1).toBe(7);
    });
});
