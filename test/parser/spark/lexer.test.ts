import SparkSQL from '../../../src/parser/spark';

const log = console.log.bind(console);

describe('SparkSQL Lexer tests', () => {
    const parser = new SparkSQL();

    test('select id,name from user1;', () => {
        const sql = `select id,name from user1;`;
        const tokens = parser.getAllTokens(sql);
        const length = tokens.length;
        expect(tokens.length - 1).toBe(10);
    });

    test('SELECT * FROM t WHERE x = 1 AND y = 2;', () => {
        const sql = `SELECT * FROM t WHERE x = 1 AND y = 2;`;
        const tokens = parser.getAllTokens(sql);
        expect(tokens.length - 1).toBe(24);
    });
});
