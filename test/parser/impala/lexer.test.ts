import ImpalaSQL from 'src/parser/impala';

describe('ImpalaSQL Lexer tests', () => {
    const parser = new ImpalaSQL();

    const sql = 'SELECT * FROM table1';
    const tokens = parser.getAllTokens(sql);

    test('token counts', () => {
        expect(tokens.length).toBe(7);
    });
});
