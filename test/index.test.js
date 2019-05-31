const dtSqlParser = require('../lib/index');
const parser = dtSqlParser.parser;
const filter = dtSqlParser.filter;


describe('complete test', () => {
    describe('hive', () => {
        test('complete result', () => {
            const sql = 'select id,name from user ';
            const result = parser.parserSql([sql, ''], 'hive');
            expect(result.locations).toBeInstanceOf(Array);
            expect(result.suggestKeywords).toBeInstanceOf(Array);
        });
        test('empty result', () => {
            const sql = 'i';
            const result = parser.parserSql([sql, ''], 'hive');
            expect(result.locations).toBeInstanceOf(Array);
            expect(result.locations).toHaveLength(0);
            expect(result.suggestKeywords).toBeInstanceOf(Array);
        })
    })
})

describe('syntax test', () => {
    describe('hive', () => {
        test('no error', () => {
            const sql = 'select id,name from user ';
            const result = parser.parseSyntax([sql, ''], 'hive');
            expect(result).toBe(false);
        });
        test('select table should not be null', () => {
            const sql = 'select id,name from ';
            const result = parser.parseSyntax([sql, ''], 'hive');
            expect(result.loc).toEqual({
                first_line: 1,
                last_line: 1,
                first_column: 20,
                last_column: 20
            })
        });
        test('sql contains the wrong keyword', () => {
            const sql = `create table if not 1exists ods_order_header (
                order_header_id     string comment 'order id'
               ,order_date          bigint comment 'order date'
           )comment 'order table'
           PARTITIONED BY (ds string);`;
            const result = parser.parseSyntax([sql, ''], 'hive');
            expect(result.text).toBe('1exists');
            expect(result.loc).toEqual({
                first_line: 1,
                last_line: 1,
                first_column: 20,
                last_column: 27
            })
        });
    })
})