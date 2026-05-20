-- Basic SELECT
SELECT * FROM table1;
SELECT id, name FROM users;
SELECT t.id, t.name FROM users t;
SELECT id AS user_id, name AS user_name FROM users;
SELECT DISTINCT name FROM users;
SELECT ALL name FROM users;
-- Arithmetic expressions
SELECT id + 1, price * 0.9, price - discount FROM products;
SELECT id, price / quantity AS unit_price FROM orders;
SELECT id, amount % 10 AS remainder FROM transactions;
-- String expressions
SELECT name || ' (' || email || ')' AS display FROM users;
-- Literal values
SELECT 123.456 FROM DUAL;
SELECT 'hello' AS greeting FROM DUAL;
SELECT NULL AS empty FROM DUAL;
SELECT TRUE AS flag FROM DUAL;
SELECT FALSE AS flag FROM DUAL;
-- CASE expression
SELECT CASE WHEN status = 1 THEN 'active' ELSE 'inactive' END FROM users;
SELECT CASE type WHEN 'A' THEN 1 WHEN 'B' THEN 2 ELSE 0 END FROM items;
SELECT CASE WHEN a > b THEN a WHEN a < b THEN b ELSE 0 END AS greater FROM t;
-- CAST expression
SELECT CAST(amount AS DECIMAL(10,2)) FROM orders;
SELECT CAST(id AS BIGINT) FROM users;
SELECT CAST(name AS VARCHAR(100)) FROM users;
SELECT CAST(created_at AS TIMESTAMP) FROM events;
-- COALESCE and NULLIF
SELECT COALESCE(name, 'unknown') FROM users;
SELECT COALESCE(a, b, c, 0) FROM t;
SELECT NULLIF(a, b) FROM t;
-- Function calls
SELECT LOWER(name) FROM users;
SELECT UPPER(email) FROM users;
SELECT TRIM(name) FROM users;
SELECT LENGTH(name) FROM users;
SELECT SUBSTR(name, 1, 3) FROM users;
SELECT ABS(balance) FROM accounts;
SELECT ROUND(price, 2) FROM products;
SELECT MAX(amount) FROM orders;
SELECT MIN(amount) FROM orders;
SELECT SUM(amount) FROM orders;
SELECT AVG(amount) FROM orders;
-- Boolean predicates
SELECT * FROM users WHERE id = 1;
SELECT * FROM users WHERE id <> 1;
SELECT * FROM users WHERE id != 1;
SELECT * FROM users WHERE id < 10;
SELECT * FROM users WHERE id <= 10;
SELECT * FROM users WHERE id > 1;
SELECT * FROM users WHERE id >= 1;
SELECT * FROM users WHERE age BETWEEN 18 AND 65;
SELECT * FROM users WHERE name LIKE '%john%';
SELECT * FROM users WHERE name NOT LIKE '%test%';
SELECT * FROM users WHERE id IN (1, 2, 3);
SELECT * FROM users WHERE id NOT IN (1, 2, 3);
SELECT * FROM users WHERE name IS NULL;
SELECT * FROM users WHERE name IS NOT NULL;
SELECT * FROM users WHERE id IS DISTINCT FROM 0;
SELECT * FROM users WHERE id IS NOT DISTINCT FROM 0;
-- Boolean logic
SELECT * FROM users WHERE active = 1 AND age > 18;
SELECT * FROM users WHERE active = 1 OR admin = 1;
SELECT * FROM users WHERE NOT active = 1;
SELECT * FROM users WHERE (active = 1 OR admin = 1) AND age > 18;
-- GROUP BY
SELECT * FROM table1 GROUP BY a;
SELECT * FROM table1 GROUP BY a, b;
SELECT a, COUNT(id) FROM t GROUP BY a;
SELECT a, b, SUM(c) FROM t GROUP BY a, b;
-- HAVING
SELECT a, COUNT(id) AS cnt FROM t GROUP BY a HAVING COUNT(id) > 1;
SELECT a, SUM(b) AS total FROM t GROUP BY a HAVING SUM(b) > 100;
-- ORDER BY
SELECT * FROM table1 ORDER BY a;
SELECT * FROM table1 ORDER BY a ASC;
SELECT * FROM table1 ORDER BY a DESC;
SELECT * FROM table1 ORDER BY a ASC, b DESC;
SELECT * FROM table1 ORDER BY a NULLS FIRST;
SELECT * FROM table1 ORDER BY a DESC NULLS LAST;
-- LIMIT / OFFSET
SELECT * FROM table1 LIMIT 10;
SELECT * FROM table1 LIMIT 10 OFFSET 5;
-- EXISTS
SELECT * FROM users WHERE EXISTS (SELECT 1 FROM orders WHERE orders.user_id = users.id);
SELECT * FROM users WHERE NOT EXISTS (SELECT 1 FROM orders WHERE orders.user_id = users.id);
-- Subquery in WHERE
SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
SELECT * FROM users WHERE id NOT IN (SELECT user_id FROM orders);
SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
-- Subquery in FROM
SELECT * FROM (SELECT id, name FROM users) AS sub;
SELECT sub.id, sub.name FROM (SELECT id, name FROM users WHERE active = 1) AS sub;
-- Scalar subquery
SELECT id, (SELECT MAX(amount) FROM orders) AS max_amount FROM users;
-- Multiple predicates
SELECT * FROM t WHERE a = 1 AND b = 2 AND c = 3;
SELECT * FROM t WHERE a = 1 OR b = 2 OR c = 3;
SELECT * FROM t WHERE (a = 1 AND b = 2) OR (c = 3 AND d = 4);
-- Multiple tables (implicit join)
SELECT * FROM t1, t2 WHERE t1.id = t2.id;
SELECT t1.a, t2.b FROM t1, t2 WHERE t1.id = t2.id;
-- Table alias
SELECT u.id, u.name FROM users u WHERE u.active = 1;
SELECT u.id, o.amount FROM users u, orders o WHERE u.id = o.user_id;
-- Nested function calls
SELECT UPPER(TRIM(name)) FROM users;
SELECT ROUND(AVG(amount), 2) FROM orders;
SELECT COALESCE(TRIM(name), 'unknown') FROM users;
SELECT CAST(COALESCE(amount, 0) AS DECIMAL(10,2)) FROM orders;
-- Complex CASE with subquery
SELECT CASE WHEN id IN (SELECT user_id FROM orders) THEN 'has_orders' ELSE 'no_orders' END FROM users;
-- CASE with multiple conditions
SELECT CASE WHEN a > 100 THEN 'high' WHEN a > 50 THEN 'medium' WHEN a > 0 THEN 'low' ELSE 'none' END FROM t;
-- Multiple aggregates
SELECT COUNT(id), SUM(amount), AVG(amount), MAX(amount), MIN(amount) FROM orders;
-- GROUP BY with HAVING and ORDER BY
SELECT a, COUNT(id) AS cnt FROM t GROUP BY a HAVING COUNT(id) > 1 ORDER BY cnt DESC;
-- Complex WHERE with BETWEEN and AND
SELECT * FROM t WHERE a BETWEEN 1 AND 100 AND b BETWEEN 50 AND 200;
-- WHERE with LIKE and OR
SELECT * FROM users WHERE name LIKE '%john%' OR email LIKE '%john%';
-- WHERE with IN subquery
SELECT * FROM users WHERE id IN (SELECT user_id FROM orders WHERE amount > 100);
-- WHERE with EXISTS and AND
SELECT * FROM users WHERE EXISTS (SELECT 1 FROM orders WHERE orders.user_id = users.id) AND active = 1;
-- Multiple subqueries in SELECT
SELECT id, (SELECT MAX(amount) FROM orders WHERE user_id = users.id) AS max_amount FROM users;
-- Subquery in FROM with alias
SELECT sub.id, sub.name FROM (SELECT id, name FROM users WHERE active = 1) AS sub WHERE sub.id > 10;
-- Complex expression in SELECT
SELECT id, CASE WHEN amount > 1000 THEN amount * 0.9 ELSE amount END AS discounted FROM orders;
-- CAST with different types
SELECT CAST(id AS VARCHAR(50)) FROM users;
SELECT CAST(amount AS INTEGER) FROM orders;
SELECT CAST(created_at AS DATE) FROM events;
SELECT CAST(active AS BOOLEAN) FROM users;
-- COALESCE with multiple arguments
SELECT COALESCE(a, b, c, d, 'default') FROM t;
-- Nested CASE
SELECT CASE WHEN a > 0 THEN CASE WHEN a > 100 THEN 'high' ELSE 'low' END ELSE 'none' END FROM t;
-- Complex arithmetic
SELECT (price * quantity) - discount AS total FROM orders;
SELECT (a + b) * (c - d) / e AS result FROM t;
-- String functions
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM users;
SELECT REPLACE(name, 'old', 'new') FROM users;
-- Multiple ORDER BY with NULLS
SELECT * FROM t ORDER BY a ASC NULLS FIRST, b DESC NULLS LAST, c;
-- LIMIT with expression
SELECT * FROM t LIMIT 100;
-- Complex CTE
WITH active_orders AS (
    SELECT user_id, SUM(amount) AS total
    FROM orders
    WHERE status = 'completed'
    GROUP BY user_id
),
user_stats AS (
    SELECT u.id, u.name, COALESCE(ao.total, 0) AS total_spent
    FROM users u
    LEFT JOIN active_orders ao ON u.id = ao.user_id
)
SELECT * FROM user_stats WHERE total_spent > 100;
-- CTE with aggregate
WITH counts AS (SELECT user_id, COUNT(id) AS cnt FROM orders GROUP BY user_id)
SELECT u.name, c.cnt FROM users u JOIN counts c ON u.id = c.user_id WHERE c.cnt > 5;
-- Recursive CTE with depth limit
WITH RECURSIVE tree AS (
    SELECT id, parent_id, 0 AS depth FROM items WHERE parent_id IS NULL
    UNION ALL
    SELECT i.id, i.parent_id, t.depth + 1 FROM items i JOIN tree t ON i.parent_id = t.id WHERE t.depth < 10
)
SELECT * FROM tree;
-- UNION with ORDER BY and LIMIT
SELECT id FROM t1 UNION ALL SELECT id FROM t2 ORDER BY id LIMIT 100;
-- INTERSECT with subquery
SELECT id FROM t1 WHERE id IN (SELECT id FROM t2) INTERSECT SELECT id FROM t3;
-- EXCEPT with WHERE
SELECT id FROM t1 EXCEPT SELECT id FROM t2 WHERE status = 'inactive';
-- Multiple set operations
SELECT id FROM t1 UNION SELECT id FROM t2 UNION ALL SELECT id FROM t3 EXCEPT SELECT id FROM t4;
-- Complex join with multiple conditions
SELECT * FROM t1 JOIN t2 ON t1.id = t2.id AND t1.type = t2.type AND t1.status = 'active';
-- Self join
SELECT a.id, b.id AS related_id FROM items a JOIN items b ON a.parent_id = b.id;
-- Multiple joins
SELECT u.name, o.amount, p.name AS product
FROM users u
JOIN orders o ON u.id = o.user_id
JOIN products p ON o.product_id = p.id;
-- LEFT JOIN with WHERE
SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON u.id = o.user_id WHERE o.amount > 100;
-- RIGHT JOIN
SELECT u.name, o.amount FROM users u RIGHT JOIN orders o ON u.id = o.user_id;
-- FULL JOIN
SELECT u.name, o.amount FROM users u FULL JOIN orders o ON u.id = o.user_id;
-- Subquery in JOIN
SELECT * FROM t1 JOIN (SELECT id, name FROM t2 WHERE active = 1) AS sub ON t1.id = sub.id;
-- Complex GROUP BY with multiple aggregates
SELECT user_id, COUNT(id) AS order_count, SUM(amount) AS total, AVG(amount) AS average FROM orders GROUP BY user_id HAVING COUNT(id) > 5 AND SUM(amount) > 1000;
-- WHERE with complex boolean
SELECT * FROM t WHERE (a > 1 AND b < 10) OR (c = 'x' AND d IS NOT NULL) OR (e BETWEEN 1 AND 100);
-- SELECT with all expression types
SELECT id, name, amount, CASE WHEN amount > 100 THEN 'high' ELSE 'low' END AS category, CAST(amount AS DECIMAL(10,2)) AS decimal_amount, COALESCE(name, 'unknown') AS display_name, UPPER(name) AS upper_name FROM orders WHERE id > 0 ORDER BY amount DESC LIMIT 50;
