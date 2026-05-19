-- INNER JOIN
SELECT u.name, o.amount FROM users u JOIN orders o ON u.id = o.user_id;
SELECT u.name, o.amount FROM users u INNER JOIN orders o ON u.id = o.user_id;
-- LEFT JOIN
SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON u.id = o.user_id;
SELECT u.name, o.amount FROM users u LEFT OUTER JOIN orders o ON u.id = o.user_id;
-- RIGHT JOIN
SELECT u.name, o.amount FROM users u RIGHT JOIN orders o ON u.id = o.user_id;
SELECT u.name, o.amount FROM users u RIGHT OUTER JOIN orders o ON u.id = o.user_id;
-- FULL JOIN
SELECT u.name, o.amount FROM users u FULL JOIN orders o ON u.id = o.user_id;
SELECT u.name, o.amount FROM users u FULL OUTER JOIN orders o ON u.id = o.user_id;
-- Multiple JOINs
SELECT * FROM t1 JOIN t2 ON t1.id = t2.id JOIN t3 ON t2.id = t3.id;
SELECT * FROM t1 JOIN t2 ON t1.id = t2.id JOIN t3 ON t2.id = t3.id JOIN t4 ON t3.id = t4.id;
-- JOIN with USING (not supported in grammar, but ON works)
SELECT * FROM t1 JOIN t2 ON t1.id = t2.id;
-- JOIN with subquery
SELECT * FROM users u JOIN (SELECT user_id, SUM(amount) AS total FROM orders GROUP BY user_id) AS o ON u.id = o.user_id;
-- Self join
SELECT a.name, b.name FROM users a JOIN users b ON a.manager_id = b.id;
-- JOIN with complex condition
SELECT * FROM t1 JOIN t2 ON t1.id = t2.id AND t1.status = 'active';
-- JOIN with multiple conditions
SELECT * FROM t1 JOIN t2 ON t1.a = t2.a AND t1.b = t2.b;
-- JOIN with WHERE
SELECT * FROM t1 JOIN t2 ON t1.id = t2.id WHERE t1.status = 'active';
-- JOIN with ORDER BY
SELECT * FROM t1 JOIN t2 ON t1.id = t2.id ORDER BY t1.name;
-- JOIN with GROUP BY
SELECT t1.type, COUNT(t1.id) FROM t1 JOIN t2 ON t1.id = t2.id GROUP BY t1.type;
-- JOIN with LIMIT
SELECT * FROM t1 JOIN t2 ON t1.id = t2.id LIMIT 100;
-- Multiple JOINs with different types
SELECT * FROM t1 JOIN t2 ON t1.id = t2.id LEFT JOIN t3 ON t2.id = t3.id;
SELECT * FROM t1 LEFT JOIN t2 ON t1.id = t2.id RIGHT JOIN t3 ON t2.id = t3.id;
SELECT * FROM t1 JOIN t2 ON t1.id = t2.id FULL JOIN t3 ON t2.id = t3.id;
-- JOIN with subquery in WHERE
SELECT * FROM t1 JOIN t2 ON t1.id = t2.id WHERE t1.id IN (SELECT id FROM t3);
-- JOIN with EXISTS
SELECT * FROM t1 JOIN t2 ON t1.id = t2.id WHERE EXISTS (SELECT 1 FROM t3 WHERE t3.id = t1.id);
-- JOIN with complex ON condition
SELECT * FROM t1 JOIN t2 ON (t1.a = t2.a OR t1.b = t2.b) AND t1.status = 'active';
-- JOIN with multiple tables in FROM
SELECT * FROM t1, t2 JOIN t3 ON t2.id = t3.id WHERE t1.id = t2.id;
-- JOIN with alias
SELECT a.id, b.name, c.amount FROM t1 a JOIN t2 b ON a.id = b.id JOIN t3 c ON b.id = c.id;
-- Self join with multiple conditions
SELECT a.id, b.id AS related_id FROM items a JOIN items b ON a.parent_id = b.id AND a.type = b.type;
-- LEFT JOIN with IS NULL
SELECT u.name FROM users u LEFT JOIN orders o ON u.id = o.user_id WHERE o.id IS NULL;
-- RIGHT JOIN with WHERE
SELECT u.name, o.amount FROM users u RIGHT JOIN orders o ON u.id = o.user_id WHERE o.amount > 100;
-- FULL JOIN with COALESCE
SELECT COALESCE(u.name, 'unknown'), COALESCE(o.amount, 0) FROM users u FULL JOIN orders o ON u.id = o.user_id;
-- JOIN with CTE
WITH active_users AS (SELECT id, name FROM users WHERE active = 1)
SELECT u.name, o.amount FROM active_users u JOIN orders o ON u.id = o.user_id;
-- JOIN with subquery in SELECT
SELECT u.name, (SELECT COUNT(o.id) FROM orders o WHERE o.user_id = u.id) AS order_count FROM users u;
-- Multiple JOINs with WHERE and ORDER BY
SELECT u.name, o.amount, p.name AS product
FROM users u
JOIN orders o ON u.id = o.user_id
JOIN products p ON o.product_id = p.id
WHERE o.amount > 100
ORDER BY o.amount DESC;
-- JOIN with GROUP BY and multiple aggregates
SELECT u.name, COUNT(o.id) AS order_count, SUM(o.amount) AS total
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.name;
