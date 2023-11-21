-- https://dev.mysql.com/doc/refman/8.0/en/with.html#common-table-expressions-similar-constructs


WITH cte1 AS (SELECT a, b FROM table1), cte2 AS (SELECT c, d FROM table2) SELECT b, d FROM cte1 JOIN cte2 WHERE cte1.a = cte2.c;
WITH cte (col1, col2) AS (SELECT 1, 2 UNION ALL SELECT 3, 4) SELECT col1, col2 FROM cte;
WITH cte AS (SELECT 1 AS col1, 2 AS col2 UNION ALL SELECT 3, 4) SELECT col1, col2 FROM cte;

WITH RECURSIVE cte (n) AS (SELECT 1 UNION ALL SELECT n + 1 FROM cte WHERE n < 5) SELECT * FROM cte;
WITH RECURSIVE cte AS (SELECT 1 AS n, 'abc' AS str UNION ALL SELECT n + 1, CONCAT(str, str) FROM cte WHERE n < 3) SELECT * FROM cte;
WITH RECURSIVE cte AS (SELECT 1 AS n, CAST('abc' AS CHAR(20)) AS str UNION ALL SELECT n + 1, CONCAT(str, str) FROM cte WHERE n < 3) SELECT * FROM cte;

WITH cte1 AS (SELECT 1) SELECT * FROM (SELECT * FROM cte2 JOIN cte1) AS dt;

WITH RECURSIVE cte AS (SELECT 1 AS n, 1 AS p, -1 AS q UNION ALL SELECT n + 1, q * 2, p * 2 FROM cte WHERE n < 5) SELECT * FROM cte;
WITH RECURSIVE cte (n) AS (SELECT 1 UNION ALL SELECT n + 1 FROM cte) SELECT * FROM cte;
WITH RECURSIVE cte (n) AS(SELECT 1 UNION ALL SELECT n + 1 FROM cte) SELECT /*+ SET_VAR(cte_max_recursion_depth = 1M) */ * FROM cte;
WITH RECURSIVE cte (n) AS (SELECT 1 UNION ALL SELECT n + 1 FROM cte) SELECT /*+ MAX_EXECUTION_TIME(1000) */ * FROM cte;
WITH RECURSIVE cte (n) AS (SELECT 1 UNION ALL SELECT n + 1 FROM cte LIMIT 10000) SELECT * FROM cte;
WITH RECURSIVE cte (n) AS (SELECT 1 UNION ALL SELECT n + 1 FROM cte LIMIT 10000) SELECT /*+ MAX_EXECUTION_TIME(1000) */ * FROM cte;
WITH RECURSIVE fibonacci (n, fib_n, next_fib_n) AS (SELECT 1, 0, 1 UNION ALL SELECT n + 1, next_fib_n, fib_n + next_fib_n FROM fibonacci WHERE n < 10) SELECT * FROM fibonacci;
WITH RECURSIVE dates (date) AS (SELECT MIN(date) FROM sales UNION ALL SELECT date + INTERVAL 1 DAY FROM dates WHERE date + INTERVAL 1 DAY <= (SELECT MAX(date) FROM sales)) SELECT * FROM dates;
WITH RECURSIVE dates (date) AS (SELECT MIN(date) FROM sales UNION ALL SELECT date + INTERVAL 1 DAY FROM dates WHERE date + INTERVAL 1 DAY <= (SELECT MAX(date) FROM sales)) SELECT dates.date, COALESCE(SUM(price), 0) AS sum_price FROM dates LEFT JOIN sales ON dates.date = sales.date GROUP BY dates.date ORDER BY dates.date;
WITH RECURSIVE employee_paths (id, name, path) AS (SELECT id, name, CAST(id AS CHAR(200)) FROM employees WHERE manager_id IS NULL UNION ALL SELECT e.id, e.name, CONCAT(ep.path, ',', e.id) FROM employee_paths AS ep JOIN employees AS e ON ep.id = e.manager_id) SELECT * FROM employee_paths ORDER BY path;
WITH cte AS (SELECT 1) SELECT * FROM cte;


WITH cte1(txt) AS (SELECT "This "),
     cte2(txt) AS (SELECT CONCAT(cte1.txt,"is a ") FROM cte1),
     cte3(txt) AS (SELECT "nice query" UNION
                   SELECT "query that rocks" UNION
                   SELECT "query"),
     cte4(txt) AS (SELECT concat(cte2.txt, cte3.txt) FROM cte2, cte3)
SELECT MAX(txt), MIN(txt) FROM cte4;

WITH RECURSIVE my_cte AS (SELECT 1 AS n UNION ALL SELECT 1+n FROM my_cte WHERE n<10) SELECT * FROM my_cte;
WITH RECURSIVE my_cte(n) AS (SELECT 1 UNION ALL SELECT 1+n FROM my_cte WHERE n<6) DELETE FROM numbers WHERE numbers.n > (SELECT AVG(n) FROM my_cte);
WITH RECURSIVE my_cte AS (SELECT 1 AS n UNION ALL SELECT 1+n FROM my_cte WHERE n<10) SELECT * FROM my_cte;
WITH RECURSIVE my_cte AS (SELECT 1 as f, 1 as next_f UNION ALL SELECT next_f, f+next_f FROM my_cte WHERE f < 500) SELECT * FROM my_cte;

WITH RECURSIVE
digits AS
(
  SELECT '0' AS d UNION ALL SELECT '1'
),
strings AS
(
  SELECT '' AS s
  UNION ALL
  SELECT CONCAT(strings.s, digits.d)
  FROM strings, digits
  WHERE LENGTH(strings.s) < 4
)
SELECT s FROM strings WHERE LENGTH(s)=4;

WITH RECURSIVE
digits AS
(
  SELECT '0' AS d UNION ALL SELECT '1'
),
strings AS
(
  SELECT CAST('' AS CHAR(4)) AS s
  UNION ALL
  SELECT CONCAT(strings.s, digits.d)
  FROM strings, digits
  WHERE LENGTH(strings.s) < 4
)
SELECT * FROM strings WHERE LENGTH(s)=4;

WITH RECURSIVE cte AS
(
  SELECT category_id, name FROM category WHERE parent IS NULL
  UNION ALL
  SELECT c.category_id, c.name FROM category c JOIN cte
  ON cte.category_id=c.parent
)
SELECT name FROM cte;

WITH RECURSIVE cte AS
(
  SELECT category_id, name, 0 AS depth FROM category WHERE parent IS NULL
  UNION ALL
  SELECT c.category_id, c.name, cte.depth+1 FROM category c JOIN cte ON
    cte.category_id=c.parent
)
SELECT * FROM cte ORDER BY depth;

WITH RECURSIVE cte AS
(
  SELECT category_id, name, CAST(category_id AS CHAR(200)) AS path
  FROM category WHERE parent IS NULL
  UNION ALL
  SELECT c.category_id, c.name, CONCAT(cte.path, ",", c.category_id)
  FROM category c JOIN cte ON cte.category_id=c.parent
)
SELECT * FROM cte ORDER BY path;

WITH RECURSIVE cte AS
(
  SELECT name, parent FROM category WHERE name='FLASH'
  UNION ALL
  SELECT c.name, c.parent FROM category c JOIN cte
  ON c.category_id=cte.parent
)
SELECT * FROM cte;

WITH RECURSIVE cte AS
(
  SELECT name, parent, 0 as depth FROM category WHERE name='FLASH'
  UNION ALL
  SELECT c.name, c.parent, cte.depth-1 FROM category c JOIN cte
  ON c.category_id=cte.parent
)
SELECT * FROM cte ORDER BY depth;

WITH RECURSIVE cte AS
(
  SELECT category_id, CAST(name AS CHAR(200)) AS name,
         CAST(category_id AS CHAR(200)) AS path,
         0 as depth
  FROM category WHERE parent IS NULL
  UNION ALL
  SELECT c.category_id,
         CONCAT(REPEAT(' ', cte.depth+1), c.name),
         CONCAT(cte.path, ",", c.category_id),
         cte.depth+1
  FROM category c JOIN cte ON
  cte.category_id=c.parent
)
SELECT * FROM cte ORDER BY path;

WITH RECURSIVE cte AS
(
  SELECT category_id, name,
         CAST(category_id AS CHAR(200)) AS path,
         0 as depth
  FROM category WHERE name='PORTABLE ELECTRONICS'
  UNION ALL
  SELECT c.category_id,
         c.name,
         CONCAT(cte.path, ",", c.category_id),
         cte.depth+1
  FROM category c JOIN cte
  ON cte.category_id=c.parent
)
SELECT * FROM cte ORDER BY path;

WITH RECURSIVE cte AS
(
  SELECT category_id, name, 0 as depth
  FROM category WHERE name='PORTABLE ELECTRONICS'
  UNION ALL
  SELECT c.category_id, c.name, cte.depth+1
  FROM category c JOIN cte
  ON cte.category_id=c.parent
  WHERE cte.depth=0
)
SELECT * FROM cte;

WITH RECURSIVE cte AS
(
  SELECT c.category_id, c.name AS cat_name, c.parent, p.name AS prod_name
  FROM category c JOIN product p ON c.category_id=p.category_id
  UNION ALL
  SELECT c.category_id, c.name, c.parent, cte.prod_name
  FROM cte JOIN category c ON c.category_id=cte.parent
)
SELECT cat_name, COUNT(*) AS prod_in_cat FROM cte
GROUP BY cat_name;

WITH RECURSIVE descendants AS (SELECT person FROM t1 WHERE person='Thurimbert' UNION ALL SELECT t.person FROM descendants d, t1 t WHERE t.parent=d.person) SELECT * FROM descendants;
WITH RECURSIVE descendants AS (SELECT person, 1 as level FROM t1 WHERE person='Thurimbert' UNION ALL SELECT t.person, d.level+1 FROM descendants d, t1 t WHERE t.parent=d.person) SELECT * FROM descendants ORDER BY level;
WITH RECURSIVE descendants AS (SELECT person, CAST(person AS CHAR(500)) AS path FROM t1 WHERE person='Thurimbert' UNION ALL SELECT t.person, CONCAT(d.path, ',', t.person) FROM descendants d, t1 t WHERE t.parent=d.person) SELECT * FROM descendants ORDER BY path;
WITH RECURSIVE all_destinations AS (SELECT destination AS planet FROM rockets WHERE origin='Earth' UNION ALL SELECT r.destination FROM rockets r, all_destinations d WHERE r.origin=d.planet) SELECT * FROM all_destinations;
WITH RECURSIVE all_destinations AS (SELECT destination AS planet FROM rockets WHERE origin='Earth' UNION ALL SELECT r.destination FROM rockets r, all_destinations d WHERE r.origin=d.planet) SELECT * FROM all_destinations;
WITH RECURSIVE all_destinations AS (SELECT destination AS planet FROM rockets WHERE origin='Earth' UNION DISTINCT SELECT r.destination FROM rockets r, all_destinations d WHERE r.origin=d.planet) SELECT * FROM all_destinations;
WITH RECURSIVE all_destinations AS (SELECT destination AS planet, trip_time AS total_time FROM rockets WHERE origin='Earth' UNION DISTINCT SELECT r.destination, d.total_time+r.trip_time FROM rockets r, all_destinations d WHERE r.origin=d.planet) SELECT * FROM all_destinations;
WITH RECURSIVE all_destinations AS (SELECT destination AS planet, trip_time AS total_time, CAST(destination AS CHAR(500)) AS path FROM rockets WHERE origin='Earth' UNION ALL SELECT r.destination, d.total_time+r.trip_time, CONCAT(d.path, ',', r.destination) FROM rockets r, all_destinations d WHERE r.origin=d.planet AND FIND_IN_SET(r.destination, d.path)=0) SELECT * FROM all_destinations;
WITH RECURSIVE all_destinations AS (SELECT destination AS planet, trip_time AS total_time, CAST(destination AS CHAR(500)) AS path, 0 AS is_cycle FROM rockets WHERE origin='Earth' UNION ALL SELECT r.destination, d.total_time+r.trip_time, CONCAT(d.path, ',', r.destination), FIND_IN_SET(r.destination, d.path)!=0 FROM rockets r, all_destinations d WHERE r.origin=d.planet AND is_cycle=0) SELECT * FROM all_destinations;
