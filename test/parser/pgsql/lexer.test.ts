import { PostgresSQL } from '../../filters';

describe('PostgresSQL Lexer tests', () => {
    const mysqlParser = new PostgresSQL();

    const sql = 'select id,name,sex from user1;';
    const tokens = mysqlParser.getAllTokens(sql);

    test('token counts', () => {
        expect(tokens.length).toBe(12);
    });
});
