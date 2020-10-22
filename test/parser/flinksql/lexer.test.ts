import SQLParser from '../../../src/parser/flinksql';
// todo 校验 token 解析
describe('FlinkSQL Lexer tests', () => {
    const parser = new SQLParser();

    const sql = 'SELECT * FROM table1';
    const tokens = parser.getAllTokens(sql);

    test('token counts', () => {
        expect(tokens.length).toBe(7);
    });
});
