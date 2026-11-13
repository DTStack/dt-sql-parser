import { PostgreSQL } from 'src/parser/postgresql';

describe('PostgreSQL Lexer tests', () => {
    const mysqlParser = new PostgreSQL();

    const sql = 'select id,name,sex from user1;';
    const tokens = mysqlParser.getAllTokens(sql);

    test('token counts', () => {
        expect(tokens.length).toBe(12);
    });

    test('tokens after an escape string constant are lexed normally', () => {
        const escapeTokens = mysqlParser.getAllTokens(`SELECT E'a\\nb' FROM t;`);
        expect(escapeTokens.map((token) => token.text)).toEqual([
            'SELECT',
            ' ',
            "E'a\\nb'",
            ' ',
            'FROM',
            ' ',
            't',
            ';',
        ]);
    });
});
