-- Simple CTE
WITH active_users AS (SELECT * FROM users WHERE status = 'active')
SELECT * FROM active_users;
-- CTE with column alias
WITH stats AS (SELECT user_id, SUM(amount) AS total FROM orders GROUP BY user_id)
SELECT u.name, s.total FROM users u JOIN stats s ON u.id = s.user_id;
-- Multiple CTEs
WITH t1 AS (SELECT id FROM a), t2 AS (SELECT name FROM b)
SELECT t1.id, t2.name FROM t1 JOIN t2 ON t1.id = t2.id;
-- Chained CTEs
WITH
  x AS (SELECT a FROM t),
  y AS (SELECT a AS b FROM x),
  z AS (SELECT b AS c FROM y)
SELECT c FROM z;
-- Recursive CTE
WITH RECURSIVE ancestors AS (
    SELECT id, parent_id FROM items WHERE id = 1
    UNION ALL
    SELECT i.id, i.parent_id FROM items i JOIN ancestors a ON i.id = a.parent_id
)
SELECT * FROM ancestors;
-- CTE with complex join
WITH
  t1 AS (SELECT a, MAX(b) AS b FROM x GROUP BY a),
  t2 AS (SELECT a, AVG(d) AS d FROM y GROUP BY a)
SELECT t1.*, t2.*
FROM t1
JOIN t2 ON t1.a = t2.a;
-- CTE with WHERE
WITH active_users AS (SELECT id, name FROM users WHERE active = 1)
SELECT * FROM active_users WHERE id > 10;
-- CTE with ORDER BY
WITH sorted_users AS (SELECT id, name FROM users ORDER BY name)
SELECT * FROM sorted_users LIMIT 10;
-- CTE with LIMIT
WITH top_users AS (SELECT id, name FROM users LIMIT 100)
SELECT * FROM top_users WHERE active = 1;
-- CTE with aggregate
WITH user_stats AS (SELECT user_id, COUNT(id) AS cnt, SUM(amount) AS total FROM orders GROUP BY user_id)
SELECT * FROM user_stats WHERE cnt > 5;
-- CTE with HAVING
WITH dept_counts AS (SELECT department, COUNT(id) AS cnt FROM users GROUP BY department HAVING COUNT(id) > 10)
SELECT * FROM dept_counts ORDER BY cnt DESC;
-- CTE with multiple references
WITH counts AS (SELECT user_id, COUNT(id) AS cnt FROM orders GROUP BY user_id)
SELECT u.name, c.cnt FROM users u JOIN counts c ON u.id = c.user_id WHERE c.cnt > 5;
-- CTE with subquery
WITH active_orders AS (SELECT * FROM orders WHERE status = 'completed')
SELECT u.name, SUM(ao.amount) FROM users u JOIN active_orders ao ON u.id = ao.user_id GROUP BY u.name;
-- CTE with expression
WITH calculated AS (SELECT id, price * quantity AS total FROM orders)
SELECT * FROM calculated WHERE total > 1000;
-- CTE with CASE
WITH categorized AS (SELECT id, CASE WHEN amount > 1000 THEN 'high' ELSE 'low' END AS category FROM orders)
SELECT category, COUNT(id) FROM categorized GROUP BY category;
-- CTE with multiple aggregates
WITH stats AS (
    SELECT user_id, COUNT(id) AS order_count, SUM(amount) AS total, AVG(amount) AS average
    FROM orders GROUP BY user_id
)
SELECT * FROM stats WHERE order_count > 5 AND total > 1000;
-- CTE with JOIN
WITH user_orders AS (
    SELECT u.id, u.name, SUM(o.amount) AS total
    FROM users u JOIN orders o ON u.id = o.user_id
    GROUP BY u.id, u.name
)
SELECT * FROM user_orders WHERE total > 500;
-- CTE with LEFT JOIN
WITH user_totals AS (
    SELECT u.id, u.name, COALESCE(SUM(o.amount), 0) AS total
    FROM users u LEFT JOIN orders o ON u.id = o.user_id
    GROUP BY u.id, u.name
)
SELECT * FROM user_totals;
-- CTE with EXISTS
WITH active_users AS (SELECT id FROM users WHERE active = 1)
SELECT * FROM orders o WHERE EXISTS (SELECT 1 FROM active_users au WHERE au.id = o.user_id);
-- CTE with IN subquery
WITH premium_users AS (SELECT id FROM users WHERE plan = 'premium')
SELECT * FROM orders WHERE user_id IN (SELECT id FROM premium_users);
-- CTE with scalar subquery
WITH max_amount AS (SELECT MAX(amount) AS max_val FROM orders)
SELECT * FROM orders WHERE amount = (SELECT max_val FROM max_amount);
-- CTE with set operations
WITH combined AS (SELECT id FROM t1 UNION ALL SELECT id FROM t2)
SELECT * FROM combined WHERE id > 10;
