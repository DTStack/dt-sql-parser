import SQLParser from '../../../src/parser/hive';

describe('HiveSQL Lexer tests', () => {
    const parser = new SQLParser();
    // select id,name,sex from user1;
    const sql = 'SELECT * FROM t1';
    const tokens = parser.getAllTokens(sql);

    test('token counts', () => {
        expect(tokens.length).toBe(12);
    });
});
