SELECT * FROM  -- unfinished

CREATE VIEW my_view AS SELECT * FROM my_table;

create table census (name string, census_year int) partitioned by (year int);

ALTER VIEW v1 RENAME TO db2.v2;

CREATE TABLE db. ; -- unfinished

INSERT INTO target_table (col1, col2, col3) PARTITION (year = 2016, month IN (10, 11, 12)) SELECT * FROM dual;

EXPLAIN INSERT INTO t1 VALUES (1, 'one'), (2, 'two'), (3, 'three');

INSERT INTO  VALUES (100, 99.9 / 10, 'abc', true, now ()); -- unfinished

ALTER TABLE my_table REPLACE COLUMNS (age INT COMMENT 'Updated Age');

ALTER DATABASE my_db SET OWNER USER 'impala';

INSERT INTO t2 (c1) SELECT c1 FROM t1.; -- unfinished