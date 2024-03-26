import { HiveSQL } from 'src/parser/hive';

describe('HiveSQL Lexer tests', () => {
    const hive = new HiveSQL();
    test('select token counts', () => {
        const sql = 'SELECT * FROM t1';
        const tokens = hive.getAllTokens(sql);
        expect(tokens.length).toBe(7);
    });

    test('select token counts', () => {
        const sql = 'show create table_name;';
        const tokens = hive.getAllTokens(sql);
        expect(tokens.length).toBe(6);
    });
});
