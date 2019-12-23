import * as  dtSqlParser from '../src';
import { SyntaxResult } from '../src/core/sqlSyntaxParser';
const parser = dtSqlParser.parser;
const filter = dtSqlParser.filter;
const flinksqlParser = dtSqlParser.flinksqlParser;


describe('complete test', () => {
    describe('hive', () => {
        test('complete result', () => {
            const sql = 'select id,name from user ';
            const result = parser.parserSql([sql, ''], dtSqlParser.parser.sqlType.Hive);
            expect(result.locations).toBeInstanceOf(Array);
            expect(result.suggestKeywords).toBeInstanceOf(Array);
        });
        test('empty result', () => {
            const sql = 'i';
            const result = parser.parserSql([sql, ''], dtSqlParser.parser.sqlType.Hive);
            expect(result.locations).toBeInstanceOf(Array);
            expect(result.locations).toHaveLength(0);
            expect(result.suggestKeywords).toBeInstanceOf(Array);
        })
    })
})

describe('syntax test', () => {
    describe('impala', () => {
        test('no error', () => {
            const sql = 'select id,name from user ';
            const result = parser.parseSyntax([sql, ''], dtSqlParser.parser.sqlType.Impala);
            expect(result).toBe(false);
        });
        test('insert', () => {
            const sql = `insert into user (id, name) values (1 ,'a')`;
            const result = parser.parseSyntax([sql, ''], dtSqlParser.parser.sqlType.Impala);
            expect(result).toBe(false);
        });
        test('WITH SERDEPROPERTIES', () => {
            const sql =`CREATE TABLE ih.h_b_py_detail (
                contract_no STRING,
                region_code STRING,
                credit_code STRING
              )
              PARTITIONED BY (
                cdate STRING
              )
              ROW FORMAT DELIMITED FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n'
              WITH SERDEPROPERTIES ('field.delim'=',', 'line.delim'='\n', 'serialization.format'=',')
              STORED AS TEXTFILE
              LOCATION 'hdfs://kudu1'
              TBLPROPERTIES ('last_modified_by'='anonymous', 'last_modified_time'='1577082098', 'skip.header.line.count'='1')`;
              const result = parser.parseSyntax([sql, ''], dtSqlParser.parser.sqlType.Impala);
            expect(result).toBe(false);
        })
    });
    describe('hive', () => {
        test('no error', () => {
            const sql = 'select id,name from user ';
            const result = parser.parseSyntax([sql, ''], dtSqlParser.parser.sqlType.Hive);
            expect(result).toBe(false);
        });
        test('select table should not be null', () => {
            const sql = 'select id,name from ';
            const result = parser.parseSyntax([sql, ''], dtSqlParser.parser.sqlType.Hive) as SyntaxResult;
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
            const result = parser.parseSyntax([sql, ''], dtSqlParser.parser.sqlType.Hive) as SyntaxResult;
            expect(result.text).toBe('1exists');
            expect(result.loc).toEqual({
                first_line: 1,
                last_line: 1,
                first_column: 20,
                last_column: 27
            })
        });
    })
    describe('flinksql', () => {
        test('no error', () => {
            const sql = `select id from user.id;`;
            const result = flinksqlParser(sql);
            expect(result).toBeNull();
        });
        test('empty sql', () => {
            const sql = ``;
            const result = flinksqlParser(sql);
            expect(result).toBeNull();
        });
        test('sql comment', () => {
            const sql = `-- name asf
            -- type FlinkSQL
            -- author admin@dtstack.com
            -- create time 2019-06-12 18:11:05
            -- desc `;
            const result = flinksqlParser(sql);
            expect(result).toBeNull();
        });
        test('position', () => {
            const sql = `selec`;
            const result = flinksqlParser(sql);
            expect(result.token.start).toBe(0);
            expect(result.token.stop).toBe(4);
        });
        test('test lateral table', () => {
            const sql = `select 
            id 
            FROM 
            userTable, LATERAL table(json(mess)) as t(ord, name_id);`;
            const result = flinksqlParser(sql);
            expect(result).toBeNull();
        });
        test('syntax error', () => {
            const sql = 'select id from user.id; \nselect id from us*er.id; \nselect id from *user.id;';
            const result = flinksqlParser(sql);
            expect(result).toMatchObject({
                line: 2,
                column: 17,
            });
            expect(result.token.start).toBe(42);
            expect(result.token.stop).toBe(42);
            const sql2 = `CREATE TABLE MyTable(
                message.after.id int AS id,
                message.after.userid varchar AS userid,
                message.after.username varchar AS username,
                message.after.prodid varchar AS prodid,
                message.after.price double AS price,
                message.after.amount int AS amount,
                message.after.discount double AS discount,
                message.after.tm timestamp AS tm,
                WATERMARK FOR tm AS withOffset(tm,1000)
                 )WITH(
                    'type' ='kafka11,
                    topic ='1'
                 );
                
                CREATE TABLE MyResult(
                    a double,
                    b timestamp,
                    c timestamp
                 )WITH(
                    type ='mysql',
                    url ='jdbc:mysql://1:3306/yanxi?charset=utf8'
                 );
                
                insert into MyResult
                select 
                    sum(price * amount * discount) as a,
                    TUMBLE_START( ROWTIME, INTERVAL '30' SECOND) as b
                from MyTable
                 group by
                     TUMBLE( ROWTIME, INTERVAL '30' SECOND);`;
            const result2 = flinksqlParser(sql2);
            expect(result2).not.toBeNull();
        });
        test('MATCH_RECOGNIZE', () => {
            const sql = `SELECT *
            FROM Ticker
                MATCH_RECOGNIZE (
                    PARTITION BY symbol
                    ORDER BY rowtime
                    MEASURES
                        START_ROW.rowtime AS start_tstamp,
                        LAST(PRICE_DOWN.rowtime) AS bottom_tstamp,
                        LAST(PRICE_UP.rowtime) AS end_tstamp
                    ONE ROW PER MATCH
                    AFTER MATCH SKIP TO LAST PRICE_UP
                    PATTERN (START_ROW PRICE_DOWN+ PRICE_UP)
                    DEFINE
                        PRICE_DOWN AS
                            (LAST(PRICE_DOWN.price, 1) IS NULL AND PRICE_DOWN.price < START_ROW.price) OR
                                PRICE_DOWN.price < LAST(PRICE_DOWN.price, 1),
                        PRICE_UP AS
                            PRICE_UP.price > LAST(PRICE_DOWN.price, 1)
                ) MR;`;
            const result = flinksqlParser(sql);
            expect(result).toBeNull();
        })
        test('test primary key', () => {
            const sql = `create table aa(
                name.a[1].a varchar as name ,
                ts int,
                primary key (id, id[2])
            ) with (
                type = 'kafka',
                aa = '12'
            );`;
            const result = flinksqlParser(sql);
            expect(result).toBeNull();
        })
    })
})