import { FlinkSQL } from 'src/parser/flink';

describe('FlinkSQL Lexer tests', () => {
    const flink = new FlinkSQL();

    const sql = 'SELECT * FROM table1';
    const tokens = flink.getAllTokens(sql);
    test('token counts', () => {
        expect(tokens.length).toBe(7);
    });
});
