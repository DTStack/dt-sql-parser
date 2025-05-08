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

ANALYZE TABLE students COMPUTE STATISTICS FOR COLUMNS name, co ;

ALTER TABLE StudentInfo ADD COLUMNS (LastName string,  );

ALTER TABLE StudentInfo RENAME COLUMN ;

ALTER TABLE StudentInfo RENAME COLUMN name TO t;

ALTER TABLE StudentInfo DROP COLUMNS (LastName, );

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

CREATE MATERIALIZED VIEW db.mv;

DROP MATERIALIZED VIEW db.mv;

ALTER MATERIALIZED VIEW db.mv;

REFRESH MATERIALIZED VIEW db.mv;

SHOW CREATE MATERIALIZED VIEW db.mv;

SHOW MATERIALIZED VIEWS from db;

OPTIMIZE db.tb;

OPTIMIZE db.tb ZORDER BY  ;

OPTIMIZE db.tb ZORDER BY name, i;

SELECT name, age FROM person ORDER BY length(age) LIMIT length(name);

SELECT id, CASE id WHEN 100 then 'bigger' WHEN  id > 300 THEN '300' ELSE 'small' END FROM person;

INSERT OVERWRITE students PARTITION (student_id = 222222) SELECT name, address FROM persons WHERE name = "Dora Williams";

SELECT id, name, employee.deptno, deptname FROM employee FULL JOIN department ON employee.deptno = department.deptno;

SELECT city, sum(quantity) AS sum FROM dealer GROUP BY sum(city) HAVING max(quantity) > 15;
