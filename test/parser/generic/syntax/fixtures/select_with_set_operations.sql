-- UNION
SELECT name FROM users UNION SELECT name FROM employees;
SELECT name FROM users UNION ALL SELECT name FROM employees;
-- INTERSECT
SELECT name FROM users INTERSECT SELECT name FROM employees;
SELECT name FROM users INTERSECT ALL SELECT name FROM employees;
-- EXCEPT
SELECT name FROM users EXCEPT SELECT name FROM employees;
SELECT name FROM users EXCEPT ALL SELECT name FROM employees;
-- Multiple set operations
SELECT name FROM users UNION SELECT name FROM employees UNION SELECT name FROM admins;
SELECT name FROM users UNION ALL SELECT name FROM employees INTERSECT SELECT name FROM admins;
-- Set operations with ORDER BY
SELECT id, name FROM t1 UNION SELECT id, name FROM t2 ORDER BY id;
-- Set operations with LIMIT
SELECT id FROM t1 UNION SELECT id FROM t2 LIMIT 10;
-- Set operations with subqueries
SELECT * FROM (SELECT id FROM t1 UNION SELECT id FROM t2) AS combined;
-- UNION with WHERE
SELECT id, name FROM t1 WHERE active = 1 UNION SELECT id, name FROM t2 WHERE active = 1;
-- UNION with GROUP BY
SELECT department, COUNT(id) FROM users GROUP BY department UNION SELECT department, COUNT(id) FROM employees GROUP BY department;
-- UNION with ORDER BY on individual query
SELECT id, name FROM t1 ORDER BY name UNION SELECT id, name FROM t2 ORDER BY name;
-- INTERSECT with WHERE
SELECT id FROM t1 WHERE status = 'active' INTERSECT SELECT id FROM t2 WHERE status = 'active';
-- EXCEPT with WHERE
SELECT id FROM t1 WHERE status = 'active' EXCEPT SELECT id FROM t2 WHERE status = 'inactive';
-- Multiple UNION ALL
SELECT id FROM t1 UNION ALL SELECT id FROM t2 UNION ALL SELECT id FROM t3;
-- UNION with different column names
SELECT id AS user_id, name AS user_name FROM t1 UNION SELECT id, name FROM t2;
-- UNION with expressions
SELECT id, UPPER(name) FROM t1 UNION SELECT id, LOWER(name) FROM t2;
-- UNION with subquery
SELECT id FROM (SELECT id FROM t1 UNION SELECT id FROM t2) AS combined WHERE id > 10;
-- INTERSECT with subquery
SELECT id FROM t1 WHERE id IN (SELECT id FROM t2) INTERSECT SELECT id FROM t3;
-- EXCEPT with subquery
SELECT id FROM t1 EXCEPT SELECT id FROM t2 WHERE id IN (SELECT id FROM t3);
-- Complex set operations with ORDER BY and LIMIT
SELECT id, name FROM t1 UNION ALL SELECT id, name FROM t2 UNION ALL SELECT id, name FROM t3 ORDER BY id LIMIT 100;
-- UNION with aggregate
SELECT 'users' AS type, COUNT(id) AS cnt FROM users UNION ALL SELECT 'orders', COUNT(id) FROM orders;
-- UNION with CASE
SELECT id, CASE WHEN type = 'A' THEN 'alpha' ELSE 'beta' END AS category FROM t1 UNION ALL SELECT id, name FROM t2;
-- INTERSECT with ORDER BY
SELECT id FROM t1 INTERSECT SELECT id FROM t2 ORDER BY id;
-- EXCEPT with LIMIT
SELECT id FROM t1 EXCEPT SELECT id FROM t2 LIMIT 10;
-- Multiple INTERSECT
SELECT id FROM t1 INTERSECT SELECT id FROM t2 INTERSECT SELECT id FROM t3;
-- Multiple EXCEPT
SELECT id FROM t1 EXCEPT SELECT id FROM t2 EXCEPT SELECT id FROM t3;
-- UNION with CTE
WITH combined AS (SELECT id FROM t1 UNION ALL SELECT id FROM t2) SELECT * FROM combined;
