DROP CATALOG cat;

SELECT * FROM cat. ;

CREATE TABLE cat.db ;

SHOW TABLES FROM cat;

ALTER DATABASE cat.;

DROP VIEW v;

SELECT * FROM ;

CREATE VIEW cv;

SELECT name, calculate_age(birthdate) AS age FROM students;

CREATE FUNCTION fnc;

SHOW COLUMNS FROM vie;

SHOW CREATE TABLE tb1;

SHOW CREATE VIEW v1;

SELECT col ;

SELECT col FROM tb1;

SELECT col,  FROM tb1;

SELECT * FROM tb ORDER BY ;

SELECT * FROM tb GROUP BY ;

INSERT INTO tb (col, tb.c );

CREATE TABLE yourTable (ts TIMESTAMP(3), WATERMARK FOR  );

CREATE TABLE newTable (  );

SELECT SUM(amount) FROM Orders GROUP BY length(users) HAVING SUM(amount) > 50;

SELECT * FROM Orders ORDER BY orderTime LIMIT length(order_id);

SELECT age CASE WHEN age < 18 THEN 1  ELSE 0 END AS is_minor FROM dt_catalog.dt_db.subscriptions;

CREATE TABLE tmp_table (col INT) WITH ('connector'='kafka');

SELECT  FROM tb1;

SELECT age FROM tb1;