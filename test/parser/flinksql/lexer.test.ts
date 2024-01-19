import FlinkSQL from 'src/parser/flinksql';

describe('FlinkSQL Lexer tests', () => {
    const parser = new FlinkSQL();

    const sql = 'SELECT * FROM table1';
    const tokens = parser.getAllTokens(sql);
    test('token counts', () => {
        expect(tokens.length).toBe(7);
    });
});
