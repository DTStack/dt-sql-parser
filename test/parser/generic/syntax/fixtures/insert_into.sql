-- INSERT with SELECT
INSERT INTO orders SELECT * FROM new_orders;
-- INSERT with column list and SELECT
INSERT INTO target (col1, col2) SELECT a, b FROM source;
-- INSERT with WHERE
INSERT INTO orders SELECT id, name FROM users WHERE active = 1;
-- INSERT with JOIN
INSERT INTO target SELECT u.id, o.amount FROM users u JOIN orders o ON u.id = o.user_id;
-- INSERT with subquery
INSERT INTO archive SELECT * FROM orders WHERE id IN (SELECT order_id FROM completed);
-- INSERT with UNION
INSERT INTO all_names SELECT name FROM users UNION SELECT name FROM employees;
-- INSERT with UNION ALL
INSERT INTO all_records SELECT id FROM t1 UNION ALL SELECT id FROM t2;
-- INSERT with INTERSECT
INSERT INTO common_ids SELECT id FROM t1 INTERSECT SELECT id FROM t2;
-- INSERT with EXCEPT
INSERT INTO unique_ids SELECT id FROM t1 EXCEPT SELECT id FROM t2;
-- INSERT with complex SELECT
INSERT INTO user_summary (user_id, total_orders, total_amount)
SELECT user_id, COUNT(id), SUM(amount) FROM orders GROUP BY user_id;
-- INSERT with CTE
INSERT INTO active_user_orders
WITH active_users AS (SELECT id FROM users WHERE active = 1)
SELECT o.* FROM orders o JOIN active_users au ON o.user_id = au.id;
-- INSERT with multiple columns and complex expression
INSERT INTO calculated (id, value, category)
SELECT id, price * quantity, CASE WHEN amount > 1000 THEN 'high' ELSE 'low' END FROM orders;
-- INSERT with WHERE and ORDER BY
INSERT INTO top_orders SELECT * FROM orders WHERE status = 'completed' ORDER BY amount DESC LIMIT 100;
-- INSERT with JOIN and WHERE
INSERT INTO user_orders (user_name, order_amount)
SELECT u.name, o.amount FROM users u JOIN orders o ON u.id = o.user_id WHERE o.status = 'completed';
-- INSERT with subquery in WHERE
INSERT INTO vip_orders SELECT * FROM orders WHERE user_id IN (SELECT id FROM users WHERE plan = 'premium');
-- INSERT with EXISTS
INSERT INTO active_orders SELECT * FROM orders o WHERE EXISTS (SELECT 1 FROM users u WHERE u.id = o.user_id AND u.active = 1);
-- INSERT with qualified names
INSERT INTO schema.target SELECT * FROM schema.source;
INSERT INTO catalog.schema.target SELECT * FROM catalog.schema.source;
-- INSERT with column list and expressions
INSERT INTO summary (user_id, avg_amount, max_amount)
SELECT user_id, AVG(amount), MAX(amount) FROM orders GROUP BY user_id;
-- INSERT with HAVING
INSERT INTO frequent_users
SELECT user_id, COUNT(id) AS cnt FROM orders GROUP BY user_id HAVING COUNT(id) > 10;
-- INSERT with LIMIT
INSERT INTO sample_data SELECT * FROM orders LIMIT 1000;
-- INSERT with multiple JOINs
INSERT INTO full_report (user_name, product_name, amount)
SELECT u.name, p.name, o.amount
FROM users u
JOIN orders o ON u.id = o.user_id
JOIN products p ON o.product_id = p.id;
-- INSERT with COALESCE
INSERT INTO clean_data (id, name)
SELECT id, COALESCE(name, 'unknown') FROM users;
-- INSERT with CAST
INSERT INTO typed_data (id, amount)
SELECT id, CAST(amount AS DECIMAL(10,2)) FROM raw_data;
