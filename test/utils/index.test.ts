import { lexer, splitSql, cleanSql } from '../../src';

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
});
