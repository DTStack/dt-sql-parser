-- Refer: https://github.com/apache/flink/blob/master/flink-table/flink-sql-parser/src/test/java/org/apache/flink/sql/parser/FlinkSqlParserImplTest.java#L2016
-- Just for simple alter table statements, it not include alter table columns statements

ALTER TABLE
    t1 RENAME TO t2;

ALTER TABLE
    IF EXISTS t1 RENAME TO t2;

ALTER TABLE
    c1.d1.t1 RENAME TO t2;

ALTER TABLE
    IF EXISTS c1.d1.t1 RENAME TO t2;

ALTER TABLE
    t1 RENAME a TO b;

ALTER TABLE
    IF EXISTS t1 RENAME a TO b;

ALTER TABLE
    IF EXISTS t1 RENAME a.x TO a.y;

ALTER TABLE
    t1
set
    ('key1' = 'value1');

ALTER TABLE
    IF EXISTS t1
set
    ('key1' = 'value1');

ALTER TABLE
    t1
ADD
    CONSTRAINT ct1 PRIMARY KEY(a, b);

ALTER TABLE
    t1
ADD
    CONSTRAINT ct1 PRIMARY KEY(a, b) NOT ENFORCED;

ALTER TABLE
    IF EXISTS t1
ADD
    CONSTRAINT ct1 PRIMARY KEY(a, b) NOT ENFORCED;

ALTER TABLE
    t1
ADD
    UNIQUE(a, b);

ALTER TABLE
    IF EXISTS t1
ADD
    UNIQUE(a, b);

ALTER TABLE
    t1 DROP CONSTRAINT ct1;

ALTER TABLE
    IF EXISTS t1 DROP CONSTRAINT ct1;

