import { HiveSQL } from '../../filters';

describe('HiveSQL Lexer tests', () => {
    const parser = new HiveSQL();
    test('select token counts', () => {
        const sql = 'SELECT * FROM t1';
        const tokens = parser.getAllTokens(sql);
        expect(tokens.length).toBe(7);
    });

    test('select token counts', () => {
        const sql = 'show create table_name;';
        const tokens = parser.getAllTokens(sql);
        expect(tokens.length).toBe(6);
    });
});
