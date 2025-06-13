INSERT INTO db.tb ;

SELECT * FROM db.;

CREATE TABLE db. VALUES;

DROP TABLE IF EXISTS db.a;

CREATE OR REPLACE VIEW db.v;

DROP VIEW db.v ;

CREATE FUNCTION fn1;

SELECT name, calculate_age(birthday) AS age FROM students;

CREATE DATABASE db;

DROP SCHEMA IF EXISTS sch;

SELECT co;

SELECT  ;

INSERT INTO tb ( );

SELECT * FROM tb1 ORDER BY tb.c;

CREATE TABLE newtb ( id INT, n );

MERGE INTO tablename USING tablename2 ON (tablename.id = tablename2.id) WHEN MATCHED THEN UPDATE SET tablename.col ;

ALTER TABLE tbl CHANGE COLUMN  ;

ALTER TABLE tbl CHANGE COLUMN tbl.oldcol new ;

FROM table_name_1 SELECT col1, col2;

FROM a JOIN b ON (a.id = b.id AND a.department = b.department) SELECT a.*;

FROM page_view_stg INSERT;

SELECT key FROM (SELECT key FROM src ORDER BY sum(a,b) LIMIT 10)subq1;

SELECT col1 FROM t1 GROUP BY col1 HAVING SUM(col2) > 10;

SELECT col1 FROM (SELECT col1, SUM(col2) AS col2sum FROM t1 GROUP BY col1 > 20) t2 WHERE t2.col2sum > 10;

SELECT col1, col2 FROM t1 DISTRIBUTE BY col1 SORT BY col1 ASC, col2 DESC;

SELECT id, RANK() OVER (PARTITION BY customer_id ORDER BY sale_date) AS rank FROM sales QUALIFY rank = 1;

SELECT id, customer_id, amount FROM sales CLUSTER BY customer_id;

SELECT sum(t3.col), col2 FROM t1 DISTRIBUTE BY col1 SORT BY col1 ASC, col2 DESC;

SELECT a, COUNT(b) OVER (PARTITION BY c, d) FROM T;

SELECT a.* FROM a JOIN b ON (a.id = b.id AND a.department = b.department);

SELECT col1, col2, CASE WHEN month = 'January' THEN 2023 ELSE 2024 END AS year, CAST(day AS int) AS day FROM source_table;