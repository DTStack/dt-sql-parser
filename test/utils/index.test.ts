import * as utils from '../../src/utils';
describe('utils', () => {
    describe('split sql', () => {
        test('single', () => {
            let sql = 'select id,name from user';
            let result = utils.splitSql(sql);
            expect(result).toEqual([sql.length - 1])
            sql += ';';
            result = utils.splitSql(sql);
            expect(result).toEqual([sql.length - 1])
        });
        test('multiple', () => {
            const sql = `-- a ;
            select * from a;
            select user from b`;
            const result = utils.splitSql(sql);
            expect(result).toEqual([34, 65])
        });
        test('error sql', () => {
            const sql = `CREATE TABLE MyResult(
                a double,
                b timestamp,
                c timestamp
             )WITH(
                type ='mysql,
                url ='jdbc:mysql://1.1.1.1:3306/hi?charset=utf8',
                userName ='name',
                password ='123',
                tableName ='user'
             );`;
            const result = utils.splitSql(sql);
            expect(result).toEqual([337])
            const sql2 = `CREATE TABLE MyResult(
                a double,
                b timestamp,
                c timestamp
             )WITH(
                type ='mysql,
                url ='jdbc:mysql://1.1.1.1:3306/hi?charset=utf8',
                userName ='name',
                password ='123',
                tableName ='user'
             )`;
            const result2 = utils.splitSql(sql2);
            expect(result2).toEqual([336])
        });
    })
})