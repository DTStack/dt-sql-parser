import SQLParser from '../../../src/parser/hive';

describe('HiveSQL Lexer tests', () => {
    const parser = new SQLParser();
    test('select token counts', () => {
        const sql = 'SELECT * FROM t1';
        const tokens = parser.getAllTokens(sql);
        expect(tokens.length).toBe(4);
    });

    test('select token counts', () => {
        const sql = 'show create table_name;';
        const tokens = parser.getAllTokens(sql);
        expect(tokens.length).toBe(4);
    });
});
