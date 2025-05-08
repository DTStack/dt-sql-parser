INSERT INTO db.tb ;

SELECT ids FROM db.;

CREATE TABLE db. VALUES;

DROP TABLE IF EXISTS db.a;

CREATE OR REPLACE VIEW db.v;

DROP VIEW db.v ;

SELECT name, calculate_age(birthday) AS age FROM students;

CREATE SCHEMA db ;

DROP SCHEMA IF EXISTS sch;

SHOW COLUMNS FROM tb ;

COMMENT ON COLUMN tb.;

ALTER TABLE tb RENAME COLUMN ;

ALTER TABLE tb RENAME COLUMN ids TO ;

ALTER TABLE users DROP COLUMN ;

ALTER TABLE users ADD COLUMN zi ;

SHOW COMMENT ON COLUMN tb.c ;

INSERT INTO tb (id, );

SELECT * FROM tb ORDER BY ;

SELECT * FROM tb GROUP BY ;

CREATE CATALOG  ;

DROP CATALOG cat ;

CREATE FUNCTION example.default. ;

DROP FUNCTION  ;

SELECT count(*) FROM customer order BY sum()

SELECT count(*) FROM customer where a > b

SELECT product_id, SUM(amount) AS total_sales FROM sales HAVING SUM(amount) > 1000;

SELECT array_agg(x ORDER BY t.y) FROM t;

SELECT orderId FROM orders WINDOW w AS (PARTITION BY clerk ORDER BY totalprice DESC)

SELECT id, amount, CASE WHEN amount > 1000 THEN 'High' WHEN amount BETWEEN 500 AND 1000 THEN 'Medium' ELSE 'Low' END AS sales_category FROM sales;

SELECT * FROM users CROSS JOIN UNNEST(friends) WITH ordinality;
