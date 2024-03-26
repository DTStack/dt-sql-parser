import { ImpalaSQL } from 'src/parser/impala';

describe('ImpalaSQL Lexer tests', () => {
    const impala = new ImpalaSQL();

    const sql = 'SELECT * FROM table1';
    const tokens = impala.getAllTokens(sql);

    test('token counts', () => {
        expect(tokens.length).toBe(7);
    });
});
