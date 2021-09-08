import { lexer, splitSql, cleanSql } from '../../src';
import { TokenType } from '../../src/utils/token';

describe('utils', () => {
    test('split single sql', () => {
        const sql = 'select id,name from user';
        const result = splitSql(sql);
        expect(result.length).toEqual(1);
    });

    test('split multiple sql', () => {
        const sql = `-- a ;
        select * from a;
        /* 
            xxx
            xxx
        */
        select user from b`;
        const result = splitSql(sql);
        expect(result.length).toEqual(2);
    });

    test('split special quotation sql', () => {
        const sql = `select regexp_replace('a', 'bc', 'xfe'feefe', '233'); 
            select regexp_replace('abc', "fe", '233');`;
        const result = splitSql(sql);
        expect(result.length).toEqual(2);
    });

    test('lexer', () => {
        const sql = `-- a ;
        select * from a;
        /* 
            xxx
            xxx
        */
        select user from b;`;
        const result = lexer(sql);
        expect(result.length).toEqual(4);
    });
    test('lexer for comments', () => {
        const sql = `select * from a;--comments`;
        const expected = `--comments`;
        const result = lexer(sql);
        const comments = result.find((token) =>
            token.type === TokenType.Comment,
        );
        expect(comments.value).toEqual(expected);
    });
    test('cleanSql', () => {
        const sql = `-- a ;
        select * from a;
        /* 
            xxx
            xxx
        */
        select user from b`;
        const result = cleanSql(sql);
        expect(result.indexOf('xxx')).toEqual(-1);
    });

    test('clean SQL white spaces', () => {
        const sql = `   
        select * from a;    `;
        const expected = 'select * from a;';
        const result = cleanSql(sql);
        expect(result).toEqual(expected);
    });
});
