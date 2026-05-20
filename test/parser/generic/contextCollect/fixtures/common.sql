CREATE TABLE orders (
  orderkey bigint,
  orderstatus varchar
);

SELECT * FROM table1 GROUP BY a;

INSERT INTO orders SELECT * FROM new_orders;

INSERT INTO cities SELECT id, name FROM source_cities;

SELECT id AS col1, name AS col2 FROM tb AS tb_alias;

select id, age as new_age, sum(amount) as total from t1;

select t1.*, t2.* from t1, t2;

select * from t1;

select id, (select max(age) from t3) as max_age from (select id, name from t1) as derived_table, t2;

select id from a1 where name in (select name from b1);
