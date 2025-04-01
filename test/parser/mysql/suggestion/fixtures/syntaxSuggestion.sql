INSERT INTO db.tb ;

SELECT * FROM db.;

CREATE TABLE db. VALUES;

DROP TABLE IF EXISTS db.a;

CREATE OR REPLACE VIEW db.v;

DROP VIEW db.v;

CREATE FUNCTION fn1;

SELECT name, calculate_age(birthday) AS age FROM students;

CREATE DATABASE db;

DROP SCHEMA IF EXISTS sch;

ANALYZE TABLE t UPDATE HISTOGRAM ON c1, c2, c3 WITH 10 BUCKETS;

SELECT name, age FROM students;

ALTER TABLE StudentInfo RENAME COLUMN ;

ALTER TABLE StudentInfo RENAME COLUMN name TO t;

ALTER TABLE t1 ADD c2 INT GENERATED ALWAYS AS (c1 + 1) STORED;

ALTER TABLE StudentInfo CHANGE FirstName;

INSERT INTO students (  );

INSERT INTO students ( id, n );

SELECT ;

SELECT id, n;

SELECT  FROM tbl;

SELECT id, n FROM tbl;

SELECT id, n FROM tbl GROUP BY  ;

SELECT id, n FROM tbl ORDER BY name, i ;

SELECT id FROM tb1 GROUP BY ROLLUP(  );

SHOW CREATE FUNCTION func_name;

SHOW CREATE TABLE tbl_name;

SHOW CREATE DATABASE IF NOT EXISTS db_name;

SHOW CREATE VIEW test.v;

SELECT user, MAX(salary) FROM users where age = 10 GROUP BY length(user) HAVING MAX(salary) > 10;

SELECT c.category_id FROM category c JOIN product p ON c.category_id = p.category_id;

SELECT score, CASE WHEN score >= 90 THEN 'A' ELSE 'F' END AS grade FROM students;