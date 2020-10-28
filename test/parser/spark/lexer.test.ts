import SQLParser from '../../../src/parser/spark';

describe('SparkSQL Lexer tests', () => {
    const mysqlParser = new SQLParser();

    // const sql = 'select id,name,sex from user1;';
    const sql = 'select * from person where age >= 20 order by age desc limit 2;';
    const tokens = mysqlParser.getAllTokens(sql);
    console.log('tokens', tokens);

    test('token counts', () => {
        expect(tokens.length).toBe(28);
    });
});
