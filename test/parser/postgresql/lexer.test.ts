import PostgreSQL from 'src/parser/postgresql';

describe('PostgreSQL Lexer tests', () => {
    const mysqlParser = new PostgreSQL();

    const sql = 'select id,name,sex from user1;';
    const tokens = mysqlParser.getAllTokens(sql);

    test('token counts', () => {
        expect(tokens.length).toBe(12);
    });
});
