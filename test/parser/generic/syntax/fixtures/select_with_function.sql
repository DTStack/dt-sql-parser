-- Aggregate functions
SELECT COUNT(id) FROM users;
SELECT COUNT(DISTINCT department) FROM users;
SELECT SUM(amount) FROM orders;
SELECT AVG(age) FROM users;
SELECT MAX(created_at) FROM orders;
SELECT MIN(price) FROM products;
-- String functions
SELECT LOWER(name) FROM users;
SELECT UPPER(name) FROM users;
SELECT TRIM(name) FROM users;
SELECT LENGTH(name) FROM users;
SELECT SUBSTR(name, 1, 3) FROM users;
-- Math functions
SELECT ABS(balance) FROM accounts;
SELECT ROUND(price, 2) FROM products;
SELECT CEIL(price) FROM products;
SELECT FLOOR(price) FROM products;
-- Nested function calls
SELECT UPPER(TRIM(name)) FROM users;
SELECT ROUND(AVG(price), 2) FROM products;
SELECT LENGTH(COALESCE(name, '')) FROM users;
-- Function with multiple arguments
SELECT COALESCE(a, b, c) FROM t;
SELECT SUBSTR(name, 2, 5) FROM users;
-- Function in WHERE
SELECT * FROM users WHERE LENGTH(name) > 5;
SELECT * FROM products WHERE ROUND(price, 0) > 100;
-- Function in ORDER BY
SELECT * FROM users ORDER BY LENGTH(name) DESC;
-- Function in GROUP BY
SELECT department, COUNT(id) FROM users GROUP BY department;
-- Multiple aggregates
SELECT COUNT(id), SUM(amount), AVG(amount), MAX(amount), MIN(amount) FROM orders;
-- Aggregate with GROUP BY and HAVING
SELECT user_id, COUNT(id) AS cnt, SUM(amount) AS total FROM orders GROUP BY user_id HAVING COUNT(id) > 5;
-- String functions with expressions
SELECT UPPER(name || ' ' || email) FROM users;
SELECT TRIM(CONCAT(first_name, ' ', last_name)) FROM users;
-- Math functions with expressions
SELECT ABS(balance - credit_limit) FROM accounts;
SELECT ROUND(price * 0.9, 2) FROM products;
SELECT CEIL(amount / 100) * 100 AS rounded FROM orders;
SELECT FLOOR(price) AS floored FROM products;
-- Function in SELECT with alias
SELECT COUNT(id) AS user_count FROM users;
SELECT SUM(amount) AS total_sales FROM orders;
SELECT AVG(age) AS average_age FROM users;
SELECT MAX(created_at) AS latest FROM events;
SELECT MIN(price) AS cheapest FROM products;
-- Function with CASE
SELECT CASE WHEN COUNT(id) > 100 THEN 'large' ELSE 'small' END AS size FROM orders;
-- Function with COALESCE
SELECT COALESCE(SUM(amount), 0) FROM orders;
SELECT COALESCE(AVG(price), 0.0) FROM products;
-- Function in subquery
SELECT * FROM users WHERE id IN (SELECT user_id FROM orders GROUP BY user_id HAVING COUNT(id) > 5);
-- Function in CTE
WITH stats AS (SELECT user_id, COUNT(id) AS cnt, SUM(amount) AS total FROM orders GROUP BY user_id)
SELECT * FROM stats WHERE cnt > 5;
-- Function with DISTINCT
SELECT COUNT(DISTINCT department) FROM users;
SELECT SUM(DISTINCT amount) FROM orders;
-- Function with ORDER BY
SELECT department, COUNT(id) AS cnt FROM users GROUP BY department ORDER BY cnt DESC;
-- Function with LIMIT
SELECT user_id, COUNT(id) AS cnt FROM orders GROUP BY user_id ORDER BY cnt DESC LIMIT 10;
-- Complex function expressions
SELECT ROUND(AVG(CASE WHEN status = 'completed' THEN amount ELSE 0 END), 2) AS avg_completed FROM orders;
SELECT COUNT(CASE WHEN active = 1 THEN 1 END) AS active_count FROM users;
SELECT SUM(CASE WHEN type = 'A' THEN amount ELSE 0 END) AS type_a_total FROM orders;
