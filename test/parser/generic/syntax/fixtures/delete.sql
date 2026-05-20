-- Basic DELETE
DELETE FROM t;
-- DELETE with WHERE
DELETE FROM t WHERE a = b;
DELETE FROM users WHERE active = 0;
-- DELETE with subquery
DELETE FROM lineitem WHERE orderkey IN (SELECT orderkey FROM orders WHERE priority = 'LOW');
-- DELETE with complex WHERE
DELETE FROM logs WHERE created_at < '2023-01-01' AND level = 'DEBUG';
DELETE FROM orders WHERE status = 'cancelled' AND updated_at < '2024-01-01';
-- DELETE with OR
DELETE FROM users WHERE active = 0 OR last_login < '2023-01-01';
-- DELETE with IN
DELETE FROM products WHERE category IN ('discontinued', 'out_of_stock');
-- DELETE with BETWEEN
DELETE FROM logs WHERE created_at BETWEEN '2023-01-01' AND '2023-12-31';
-- DELETE with LIKE
DELETE FROM temp_data WHERE filename LIKE '%test%';
-- DELETE with IS NULL
DELETE FROM users WHERE email IS NULL AND phone IS NULL;
-- DELETE with subquery
DELETE FROM orders WHERE user_id IN (SELECT id FROM blacklist);
-- DELETE with NOT IN
DELETE FROM users WHERE id NOT IN (SELECT user_id FROM orders);
-- DELETE with complex boolean
DELETE FROM t WHERE (a > 100 AND b = 'old') OR (c < 0 AND d = 'invalid');
-- DELETE with subquery in WHERE
DELETE FROM orders WHERE user_id IN (SELECT id FROM users WHERE active = 0);
-- DELETE with qualified name
DELETE FROM schema.temp_table WHERE id > 0;
DELETE FROM catalog.schema.temp_table WHERE id > 0;
-- DELETE with multiple conditions
DELETE FROM logs WHERE level = 'DEBUG' AND created_at < '2024-01-01' AND source = 'test';
-- DELETE with NOT IN
DELETE FROM products WHERE id NOT IN (SELECT product_id FROM active_products);
-- DELETE with comparison
DELETE FROM orders WHERE amount < 0;
DELETE FROM orders WHERE amount > 10000;
DELETE FROM orders WHERE amount <= 0;
DELETE FROM orders WHERE amount >= 10000;
-- DELETE with AND and OR
DELETE FROM t WHERE (a = 1 AND b = 2) OR (c = 3 AND d = 4) OR (e = 5);
