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
    })
})