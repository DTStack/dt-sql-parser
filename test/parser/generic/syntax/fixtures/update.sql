-- Basic UPDATE
UPDATE users SET name = 'Jane' WHERE id = 1;
-- Multiple SET assignments
UPDATE users SET name = 'Jane', email = 'jane@example.com' WHERE id = 1;
-- UPDATE with expression
UPDATE products SET price = price * 1.1 WHERE category = 'electronics';
UPDATE products SET price = price - discount WHERE discount > 0;
-- UPDATE with subquery
UPDATE new_hires SET manager = (SELECT e.name FROM employees e WHERE e.employee_id = new_hires.manager_id);
-- UPDATE without WHERE
UPDATE users SET active = 1;
-- UPDATE with complex WHERE
UPDATE orders SET status = 'shipped' WHERE created_at < '2024-01-01' AND status = 'pending';
-- UPDATE with multiple conditions
UPDATE users SET active = 0 WHERE last_login < '2024-01-01' AND login_count < 5;
-- UPDATE with OR
UPDATE orders SET priority = 'high' WHERE amount > 1000 OR customer_type = 'premium';
-- UPDATE with IN
UPDATE products SET discount = 10 WHERE category IN ('electronics', 'clothing');
-- UPDATE with BETWEEN
UPDATE orders SET status = 'review' WHERE amount BETWEEN 100 AND 500;
-- UPDATE with LIKE
UPDATE users SET status = 'inactive' WHERE email LIKE '%test%';
-- UPDATE with IS NULL
UPDATE users SET email = 'pending@example.com' WHERE email IS NULL;
-- UPDATE with complex expression
UPDATE products SET price = price * (1 + tax_rate / 100) WHERE tax_rate > 0;
-- UPDATE with CASE
UPDATE orders SET status = CASE WHEN amount > 1000 THEN 'vip' ELSE 'standard' END WHERE status = 'pending';
-- UPDATE with COALESCE
UPDATE users SET name = COALESCE(name, 'unknown') WHERE name IS NULL;
-- UPDATE with CAST
UPDATE t SET value = CAST(amount AS INTEGER) WHERE amount IS NOT NULL;
-- UPDATE with multiple tables (not supported in generic, but single table with subquery)
UPDATE orders SET status = 'completed' WHERE id IN (SELECT order_id FROM payments WHERE status = 'success');
-- UPDATE with qualified name
UPDATE schema.users SET active = 1 WHERE id > 100;
UPDATE catalog.schema.users SET active = 1 WHERE id > 100;
-- UPDATE with DEFAULT
UPDATE t SET status = DEFAULT WHERE reset = 1;
-- UPDATE with NULL
UPDATE users SET phone = NULL WHERE phone = '';
-- UPDATE with string concatenation
UPDATE users SET full_name = first_name || ' ' || last_name WHERE full_name IS NULL;
-- UPDATE with arithmetic
UPDATE products SET price = price + 10, quantity = quantity - 1 WHERE id = 1;
-- UPDATE with complex boolean
UPDATE orders SET flag = 1 WHERE (status = 'active' AND amount > 100) OR (priority = 'high' AND created_at < '2024-01-01');
