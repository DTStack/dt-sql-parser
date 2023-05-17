-- Refer: https://github.com/apache/flink/blob/master/flink-table/flink-sql-parser/src/test/java/org/apache/flink/sql/parser/FlinkSqlParserImplTest.java#L2016
-- Just for simple alter table statements, it not include alter table columns statements

alter table
    t1 rename to t2;

alter table
    if exists t1 rename to t2;

alter table
    c1.d1.t1 rename to t2;

alter table
    if exists c1.d1.t1 rename to t2;

alter table
    t1 rename a to b;

alter table
    if exists t1 rename a to b;

alter table
    if exists t1 rename a.x to a.y;

alter table
    t1
set
    ('key1' = 'value1');

alter table
    if exists t1
set
    ('key1' = 'value1');

alter table
    t1
add
    constraint ct1 primary key(a, b);

alter table
    t1
add
    constraint ct1 primary key(a, b) not enforced;

alter table
    if exists t1
add
    constraint ct1 primary key(a, b) not enforced;

alter table
    t1
add
    unique(a, b);

alter table
    if exists t1
add
    unique(a, b);

alter table
    t1 drop constraint ct1;

alter table
    if exists t1 drop constraint ct1;

