CREATE TABLE IF NOT EXISTS bar (LIKE like_table INCLUDING PROPERTIES);

CREATE TABLE foo(x,y) AS SELECT a,b FROM t;

CREATE VIEW a COMMENT 'This is a view comment' AS SELECT * FROM t;

CREATE MATERIALIZED VIEW a COMMENT 'This is an MATERIALIZED view comment' AS SELECT * FROM t;

SELECT * FROM table1 GROUP BY a;

INSERT INTO orders SELECT * FROM new_orders;

INSERT INTO cities VALUES (1, 'San Francisco');

CREATE SCHEMA IF NOT EXISTS test;

USE information_schema;

SELECT id AS col1, name AS col2 FROM tb AS tb_alias;

CREATE TABLE orders (
  orderkey bigint,
  orderstatus varchar COMMENT 'order status'
)
COMMENT 'This is the orders table'
WITH (format = 'ORC');

select id, age as new_age, count(*) as total from t1;

select t1.*, t2.* from t1, t2;

select * from t1;

select id, (select max(age) from t3) as max_age from (select id, name from t1) as derived_table, t2;

select id from a1 where name in (select name from b1);
