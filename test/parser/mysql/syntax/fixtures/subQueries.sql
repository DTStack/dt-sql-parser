-- https://dev.mysql.com/doc/refman/8.0/en/scalar-subqueries.html
SELECT (SELECT s2 FROM t1);
SELECT (SELECT s1 FROM t2) FROM t1;
SELECT (SELECT * FROM t2) FROM t1;
SELECT UPPER((SELECT s1 FROM t1)) FROM t2;


-- https://dev.mysql.com/doc/refman/8.0/en/comparisons-using-subqueries.html
SELECT * FROM t1 WHERE column1 = (SELECT MAX(column2) FROM t2);
SELECT * FROM t1 AS t WHERE 2 = (SELECT COUNT(*) FROM t1 WHERE t1.id = t.id);


-- https://dev.mysql.com/doc/refman/8.0/en/any-in-some-subqueries.html
SELECT s1 FROM t1 WHERE s1 > ANY (SELECT s1 FROM t2);
SELECT s1 FROM t1 WHERE s1 = ANY (SELECT s1 FROM t2);
SELECT s1 FROM t1 WHERE s1 IN (SELECT s1 FROM t2);
SELECT s1 FROM t1 WHERE s1 <> ANY (SELECT s1 FROM t2);
SELECT s1 FROM t1 WHERE s1 <> SOME (SELECT s1 FROM t2);
SELECT s1 FROM t1 WHERE s1 > ANY (SELECT s1 FROM t2);
SELECT s1 FROM t1 WHERE s1 = ANY (SELECT s1 FROM t2);
SELECT s1 FROM t1 WHERE s1 IN (SELECT s1 FROM t2);
SELECT s1 FROM t1 WHERE s1 <> ANY (SELECT s1 FROM t2);
SELECT s1 FROM t1 WHERE s1 <> SOME (SELECT s1 FROM t2);


-- https://dev.mysql.com/doc/refman/8.0/en/all-subqueries.html
SELECT s1 FROM t1 WHERE s1 > ALL (SELECT s1 FROM t2);
SELECT * FROM t1 WHERE 1 > ALL (SELECT s1 FROM t2);
SELECT * FROM t1 WHERE 1 > (SELECT s1 FROM t2);
SELECT * FROM t1 WHERE 1 > ALL (SELECT MAX(s1) FROM t2);
SELECT s1 FROM t1 WHERE s1 <> ALL (SELECT s1 FROM t2);
SELECT s1 FROM t1 WHERE s1 NOT IN (SELECT s1 FROM t2);
SELECT s1 FROM t1 WHERE s1 <> ALL (SELECT s1 FROM t2);
SELECT s1 FROM t1 WHERE s1 NOT IN (SELECT s1 FROM t2);


-- https://dev.mysql.com/doc/refman/8.0/en/row-subqueries.html
SELECT * FROM t1 WHERE (col1,col2) = (SELECT col3, col4 FROM t2 WHERE id = 10);
SELECT * FROM t1 WHERE ROW(col1,col2) = (SELECT col3, col4 FROM t2 WHERE id = 10);
SELECT * FROM t1 WHERE ROW(1) = (SELECT column1 FROM t2);
SELECT * FROM t1 WHERE (column1,column2) = (1,1);
SELECT * FROM t1 WHERE column1 = 1 AND column2 = 1;
SELECT column1,column2,column3 FROM t1 WHERE (column1,column2,column3) IN (SELECT column1,column2,column3 FROM t2);


-- https://dev.mysql.com/doc/refman/8.0/en/exists-and-not-exists-subqueries.html
SELECT column1 FROM t1 WHERE EXISTS (SELECT * FROM t2);
SELECT DISTINCT store_type FROM stores WHERE EXISTS (SELECT * FROM cities_stores WHERE cities_stores.store_type = stores.store_type);
SELECT DISTINCT store_type FROM stores WHERE NOT EXISTS (SELECT * FROM cities_stores WHERE cities_stores.store_type = stores.store_type);
SELECT DISTINCT store_type FROM stores WHERE NOT EXISTS (SELECT * FROM cities WHERE NOT EXISTS (SELECT * FROM cities_stores WHERE cities_stores.city = cities.city AND cities_stores.store_type = stores.store_type));
SELECT column1 FROM t1 WHERE EXISTS (SELECT s1 FROM t2);


-- https://dev.mysql.com/doc/refman/8.0/en/correlated-subqueries.html
SELECT * FROM t1 WHERE column1 = ANY (SELECT column1 FROM t2 WHERE t2.column2 = t1.column2);
SELECT column1 FROM t1 AS x WHERE x.column1 = (SELECT column1 FROM t2 AS x WHERE x.column1 = (SELECT column1 FROM t3 WHERE x.column2 = t3.column1));
SELECT * FROM t1 WHERE ( SELECT a FROM t2 WHERE t2.a=t1.a ) > 0;
SELECT t1.* FROM t1 LEFT OUTER JOIN (SELECT a, COUNT(*) AS ct FROM t2 GROUP BY a) AS derived ON  t1.a = derived.a AND REJECT_IF((ct > 1), "ERROR 1242 (21000): Subquery returns more than 1 row") WHERE derived.a > 0;


-- https://dev.mysql.com/doc/refman/8.0/en/derived-tables.html
SELECT c1,c2,c3 FROM (SELECT s1 AS c1, s2 AS c2, s3*2 AS c3 FROM t1) AS t WHERE c1 > 1;
SELECT AVG(SUM(column1)) FROM t1 GROUP BY column1;
SELECT AVG(sum_column1) FROM (SELECT SUM(column1) AS sum_column1 FROM t1 GROUP BY column1) AS t1;
SELECT * FROM (SELECT 1, 2, 3, 4) AS dt;
SELECT * FROM (SELECT 1, 2, 3, 4) AS dt (a, b, c, d);
SELECT * FROM t1 WHERE t1.d > (SELECT AVG(dt.a) FROM (SELECT SUM(t2.a) AS a FROM t2 WHERE t2.b = t1.b GROUP BY t2.c) dt WHERE dt.a > 10);


-- https://dev.mysql.com/doc/refman/8.0/en/lateral-derived-tables.html
SELECT
  salesperson.name,
  -- find maximum sale size for this salesperson
  (SELECT MAX(amount) AS amount
    FROM all_sales
    WHERE all_sales.salesperson_id = salesperson.id)
  AS amount,
  -- find customer for this maximum size
  (SELECT customer_name
    FROM all_sales
    WHERE all_sales.salesperson_id = salesperson.id
    AND all_sales.amount =
         -- find maximum size, again
         (SELECT MAX(amount) AS amount
           FROM all_sales
           WHERE all_sales.salesperson_id = salesperson.id))
  AS customer_name
FROM
  salesperson;

SELECT
  salesperson.name,
  max_sale.amount,
  max_sale_customer.customer_name
FROM
  salesperson,
  -- calculate maximum size, cache it in transient derived table max_sale
  (SELECT MAX(amount) AS amount
    FROM all_sales
    WHERE all_sales.salesperson_id = salesperson.id)
  AS max_sale,
  -- find customer, reusing cached maximum size
  (SELECT customer_name
    FROM all_sales
    WHERE all_sales.salesperson_id = salesperson.id
    AND all_sales.amount =
        -- the cached maximum size
        max_sale.amount)
  AS max_sale_customer;

SELECT
  salesperson.name,
  max_sale.amount,
  max_sale_customer.customer_name
FROM
  salesperson,
  -- calculate maximum size, cache it in transient derived table max_sale
  LATERAL
  (SELECT MAX(amount) AS amount
    FROM all_sales
    WHERE all_sales.salesperson_id = salesperson.id)
  AS max_sale,
  -- find customer, reusing cached maximum size
  LATERAL
  (SELECT customer_name
    FROM all_sales
    WHERE all_sales.salesperson_id = salesperson.id
    AND all_sales.amount =
        -- the cached maximum size
        max_sale.amount)
  AS max_sale_customer;

SELECT
  salesperson.name,
  -- find maximum size and customer at same time
  (SELECT amount, customer_name
    FROM all_sales
    WHERE all_sales.salesperson_id = salesperson.id
    ORDER BY amount DESC LIMIT 1)
FROM
  salesperson;

SELECT
  salesperson.name,
  max_sale.amount,
  max_sale.customer_name
FROM
  salesperson,
  -- find maximum size and customer at same time
  (SELECT amount, customer_name
    FROM all_sales
    WHERE all_sales.salesperson_id = salesperson.id
    ORDER BY amount DESC LIMIT 1)
  AS max_sale;

SELECT
  salesperson.name,
  max_sale.amount,
  max_sale.customer_name
FROM
  salesperson,
  -- find maximum size and customer at same time
  LATERAL
  (SELECT amount, customer_name
    FROM all_sales
    WHERE all_sales.salesperson_id = salesperson.id
    ORDER BY amount DESC LIMIT 1)
  AS max_sale;


-- https://dev.mysql.com/doc/refman/8.0/en/subquery-errors.html
SELECT * FROM t1 WHERE s1 IN (SELECT s2 FROM t2 ORDER BY s1 LIMIT 1);
SELECT (SELECT column1, column2 FROM t2) FROM t1;
SELECT * FROM t1 WHERE column1 = (SELECT column1 FROM t2);
SELECT * FROM t1 WHERE column1 = ANY (SELECT column1 FROM t2);
UPDATE t1 SET column2 = (SELECT MAX(column1) FROM t1);


-- https://dev.mysql.com/doc/refman/8.0/en/optimizing-subqueries.html
SELECT * FROM t1 WHERE s1 IN (SELECT s1 FROM t1 UNION ALL SELECT s1 FROM t2);
SELECT * FROM t1 WHERE s1 IN (SELECT s1 FROM t1) OR s1 IN (SELECT s1 FROM t2);
SELECT (SELECT column1 + 5 FROM t1) FROM t2;
SELECT (SELECT column1 FROM t1) + 5 FROM t2;


-- https://dev.mysql.com/doc/refman/8.0/en/subquery-restrictions.html
SELECT * FROM t1 WHERE s1 IN (SELECT s2 FROM t2 ORDER BY s1 LIMIT 1);



