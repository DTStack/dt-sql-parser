import { PLSQL } from 'src/parser/plsql';

describe('PLSQL Lexer tests', () => {
    const plsql = new PLSQL();

    const sql = 'select id,name,sex from user1;';
    const tokens = plsql.getAllTokens(sql);

    test('token counts', () => {
        expect(tokens.length).toBe(12);
    });
});
