import { MySQL } from '../../filters';

describe('MySQL Lexer tests', () => {
    const parser = new MySQL();

    const sql = 'select id,name,sex from user1;';
    const tokens = parser.getAllTokens(sql);

    test('token counts', () => {
        expect(tokens.length).toBe(12);
    });
});
