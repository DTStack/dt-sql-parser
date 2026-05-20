-- IN subquery
SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
-- NOT IN subquery
SELECT * FROM users WHERE id NOT IN (SELECT user_id FROM orders WHERE amount > 100);
-- EXISTS subquery
SELECT * FROM users WHERE EXISTS (SELECT 1 FROM orders WHERE orders.user_id = users.id);
-- NOT EXISTS subquery
SELECT * FROM users WHERE NOT EXISTS (SELECT 1 FROM orders WHERE orders.user_id = users.id);
-- Scalar subquery
SELECT id, (SELECT MAX(amount) FROM orders) AS max_amount FROM users;
-- Subquery in FROM
SELECT * FROM (SELECT id, name FROM users) AS sub;
-- Correlated subquery
SELECT id, name FROM users u WHERE age > (SELECT AVG(age) FROM users WHERE department = u.department);
-- Nested subquery
SELECT * FROM (SELECT * FROM (SELECT id FROM users) AS inner_sub) AS outer_sub;
-- Subquery with JOIN
SELECT u.name, o.total FROM users u JOIN (SELECT user_id, SUM(amount) AS total FROM orders GROUP BY user_id) AS o ON u.id = o.user_id;
-- Subquery with comparison
SELECT * FROM t WHERE a > (SELECT MAX(x) FROM t2);
-- IN with multiple columns (not supported, use OR)
SELECT * FROM t WHERE a IN (SELECT x FROM t2) AND b IN (SELECT y FROM t2);
-- NOT IN with NULL handling
SELECT * FROM t WHERE id NOT IN (SELECT id FROM t2 WHERE id IS NOT NULL);
-- EXISTS with complex correlated
SELECT * FROM users u WHERE EXISTS (
    SELECT 1 FROM orders o
    WHERE o.user_id = u.id AND o.amount > 100 AND o.status = 'completed'
);
-- NOT EXISTS with complex correlated
SELECT * FROM users u WHERE NOT EXISTS (
    SELECT 1 FROM orders o
    WHERE o.user_id = u.id AND o.status = 'cancelled'
);
-- Scalar subquery in SELECT
SELECT id, name, (SELECT COUNT(id) FROM orders WHERE user_id = users.id) AS order_count FROM users;
-- Multiple scalar subqueries
SELECT id,
    (SELECT COUNT(id) FROM orders WHERE user_id = users.id) AS order_count,
    (SELECT SUM(amount) FROM orders WHERE user_id = users.id) AS total_amount
FROM users;
-- Subquery in FROM with WHERE
SELECT sub.id, sub.name FROM (SELECT id, name FROM users WHERE active = 1) AS sub WHERE sub.id > 10;
-- Subquery in FROM with GROUP BY
SELECT sub.department, sub.cnt FROM (SELECT department, COUNT(id) AS cnt FROM users GROUP BY department) AS sub WHERE sub.cnt > 5;
-- Correlated subquery in SELECT
SELECT id, name, (SELECT MAX(amount) FROM orders WHERE user_id = users.id) AS max_order FROM users;
-- Correlated subquery with aggregate
SELECT id, name FROM users WHERE (SELECT COUNT(id) FROM orders WHERE user_id = users.id) > 5;
-- Nested subquery in WHERE
SELECT * FROM users WHERE id IN (SELECT user_id FROM orders WHERE product_id IN (SELECT id FROM products WHERE category = 'electronics'));
-- Subquery with JOIN in FROM
SELECT sub.name, sub.total FROM (
    SELECT u.name, SUM(o.amount) AS total
    FROM users u JOIN orders o ON u.id = o.user_id
    GROUP BY u.name
) AS sub WHERE sub.total > 1000;
-- Subquery with multiple tables
SELECT * FROM (SELECT u.name, o.amount FROM users u JOIN orders o ON u.id = o.user_id) AS sub;
-- Subquery with ORDER BY
SELECT * FROM (SELECT id, name FROM users ORDER BY name) AS sub LIMIT 10;
-- Subquery with LIMIT
SELECT * FROM (SELECT id, name FROM users LIMIT 100) AS sub WHERE sub.id > 50;
-- EXISTS with subquery in JOIN
SELECT * FROM users u
JOIN orders o ON u.id = o.user_id
WHERE EXISTS (SELECT 1 FROM products p WHERE p.id = o.product_id AND p.price > 100);
-- IN with subquery and additional conditions
SELECT * FROM users WHERE id IN (SELECT user_id FROM orders WHERE amount > 100) AND active = 1;
-- NOT EXISTS with multiple tables
SELECT * FROM users u WHERE NOT EXISTS (
    SELECT 1 FROM orders o
    JOIN products p ON o.product_id = p.id
    WHERE o.user_id = u.id AND p.category = 'banned'
);
-- Scalar subquery with aggregate
SELECT id, (SELECT AVG(amount) FROM orders) AS avg_amount FROM users;
-- Subquery in CASE
SELECT id, CASE WHEN id IN (SELECT user_id FROM orders) THEN 'has_orders' ELSE 'no_orders' END AS status FROM users;
