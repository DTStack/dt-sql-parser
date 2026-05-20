-- CASE WHEN
SELECT CASE WHEN status = 1 THEN 'active' WHEN status = 2 THEN 'pending' ELSE 'inactive' END AS status_text FROM users;
SELECT CASE type WHEN 'A' THEN 1 WHEN 'B' THEN 2 WHEN 'C' THEN 3 ELSE 0 END AS type_code FROM items;
-- CAST
SELECT CAST(amount AS DECIMAL(10,2)) FROM orders;
SELECT CAST(id AS BIGINT) FROM users;
SELECT CAST(name AS VARCHAR(100)) FROM users;
SELECT CAST(created_at AS TIMESTAMP) FROM events;
SELECT CAST(is_active AS BOOLEAN) FROM users;
-- COALESCE
SELECT COALESCE(name, 'unknown') FROM users;
SELECT COALESCE(a, b, c, 0) FROM t;
-- NULLIF
SELECT NULLIF(a, b) FROM t;
SELECT NULLIF(name, '') FROM users;
-- Arithmetic
SELECT id + 1, price * 0.9, price - discount, price / quantity, amount % 10 FROM products;
-- Unary operators
SELECT -id, +price FROM products;
-- String concatenation
SELECT name || ' (' || email || ')' FROM users;
SELECT first_name || ' ' || last_name AS full_name FROM users;
-- BETWEEN
SELECT * FROM users WHERE age BETWEEN 18 AND 65;
SELECT * FROM orders WHERE amount BETWEEN 100.0 AND 500.0;
-- LIKE
SELECT * FROM users WHERE name LIKE '%john%';
SELECT * FROM users WHERE name NOT LIKE 'test%';
SELECT * FROM users WHERE email LIKE '%@gmail.com' ESCAPE '\\';
-- IS NULL / IS NOT NULL
SELECT * FROM users WHERE name IS NULL;
SELECT * FROM users WHERE name IS NOT NULL;
-- IS DISTINCT FROM
SELECT * FROM users WHERE id IS DISTINCT FROM 0;
SELECT * FROM users WHERE id IS NOT DISTINCT FROM 0;
-- Nested CASE
SELECT CASE WHEN a > 0 THEN CASE WHEN b > 0 THEN 'both' ELSE 'a only' END ELSE 'neither' END FROM t;
-- Complex expression
SELECT (a + b) * c - d / e AS result FROM t;
-- CASE with subquery
SELECT CASE WHEN id IN (SELECT user_id FROM orders) THEN 'has_orders' ELSE 'no_orders' END FROM users;
-- CASE with BETWEEN
SELECT CASE WHEN age BETWEEN 18 AND 25 THEN 'young' WHEN age BETWEEN 26 AND 40 THEN 'middle' ELSE 'senior' END FROM users;
-- CASE with LIKE
SELECT CASE WHEN name LIKE '%test%' THEN 'test' ELSE 'production' END FROM items;
-- CASE with IS NULL
SELECT CASE WHEN name IS NULL THEN 'unknown' ELSE name END FROM users;
-- Multiple CAST
SELECT CAST(CAST(amount AS INTEGER) AS VARCHAR(50)) FROM orders;
-- CAST with expression
SELECT CAST(price * 1.1 AS DECIMAL(10,2)) FROM products;
-- Nested COALESCE
SELECT COALESCE(COALESCE(a, b), c) FROM t;
-- COALESCE with CAST
SELECT COALESCE(CAST(amount AS VARCHAR), '0') FROM orders;
-- NULLIF with expressions
SELECT NULLIF(a + b, 0) FROM t;
SELECT NULLIF(TRIM(name), '') FROM users;
-- Complex arithmetic with parentheses
SELECT ((a + b) * (c - d)) / (e + f) AS result FROM t;
SELECT a * b + c * d - e / f AS mixed FROM t;
-- String functions in expressions
SELECT UPPER(COALESCE(name, 'unknown')) FROM users;
SELECT TRIM(CONCAT(first_name, ' ', last_name)) FROM users;
SELECT LENGTH(TRIM(name)) FROM users;
-- Nested function calls
SELECT ROUND(CAST(AVG(amount) AS DECIMAL(10,2)), 2) FROM orders;
SELECT UPPER(SUBSTR(name, 1, 3)) FROM users;
-- CASE with multiple WHEN and complex conditions
SELECT CASE WHEN a > 100 AND b > 100 THEN 'both_high' WHEN a > 100 OR b > 100 THEN 'one_high' ELSE 'neither' END FROM t;
-- CASE with OR conditions
SELECT CASE WHEN status = 'active' OR status = 'pending' THEN 'valid' ELSE 'invalid' END FROM users;
-- CAST with BOOLEAN
SELECT CAST(active AS BOOLEAN) FROM users;
SELECT CAST(1 AS BOOLEAN) FROM t;
-- CAST with DATE/TIMESTAMP
SELECT CAST(created_at AS DATE) FROM events;
SELECT CAST(updated_at AS TIMESTAMP) FROM events;
-- COALESCE with NULL
SELECT COALESCE(NULL, NULL, 'default') FROM t;
SELECT COALESCE(a, NULL, b) FROM t;
-- NULLIF with NULL
SELECT NULLIF(a, NULL) FROM t;
-- Complex boolean in CASE
SELECT CASE WHEN (a > 0 AND b > 0) OR (c > 0 AND d > 0) THEN 'positive' ELSE 'non_positive' END FROM t;
-- Arithmetic with NULL
SELECT a + NULL FROM t;
SELECT a * NULL + b FROM t;
-- String concatenation with NULL
SELECT name || NULL FROM users;
SELECT NULL || name FROM users;
