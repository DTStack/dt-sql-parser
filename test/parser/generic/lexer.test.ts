import SQLParser from '../../../src/parser/generic';

describe('GenericSQL Lexer tests', () => {
    const mysqlParser = new SQLParser();

    const sql = 'select id,name,sex from user1;';
    const tokens = mysqlParser.getAllTokens(sql);

    test('token counts', () => {
        expect(tokens.length).toBe(12);
    });
});
