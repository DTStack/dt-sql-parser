-- EXISTS
SELECT name
FROM nation
WHERE EXISTS (
     SELECT *
     FROM region
     WHERE region.regionkey = nation.regionkey
);
-- NOT EXISTS
SELECT name
FROM nation
WHERE NOT EXISTS (
     SELECT *
     FROM region
     WHERE region.regionkey = nation.regionkey
);
-- EXISTS with complex subquery
SELECT * FROM users u WHERE EXISTS (
    SELECT 1 FROM orders o
    WHERE o.user_id = u.id AND o.amount > 100
);
-- IN subquery
SELECT name
FROM nation
WHERE regionkey IN (
     SELECT regionkey
     FROM region
     WHERE name = 'AMERICA' OR name = 'AFRICA'
);
-- Scalar subquery
SELECT name
FROM nation
WHERE regionkey = (SELECT MAX(regionkey) FROM region);
-- EXISTS with multiple tables
SELECT * FROM users u WHERE EXISTS (
    SELECT 1 FROM orders o
    JOIN products p ON o.product_id = p.id
    WHERE o.user_id = u.id AND p.price > 100
);
-- NOT EXISTS with multiple tables
SELECT * FROM users u WHERE NOT EXISTS (
    SELECT 1 FROM orders o
    JOIN products p ON o.product_id = p.id
    WHERE o.user_id = u.id AND p.category = 'banned'
);
-- EXISTS with aggregate
SELECT * FROM users u WHERE EXISTS (
    SELECT 1 FROM orders o
    WHERE o.user_id = u.id
    GROUP BY o.user_id
    HAVING COUNT(id) > 5
);
-- EXISTS with IN
SELECT * FROM users u WHERE EXISTS (
    SELECT 1 FROM orders o
    WHERE o.user_id = u.id AND o.product_id IN (SELECT id FROM products WHERE category = 'electronics')
);
-- EXISTS with OR
SELECT * FROM users u WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.user_id = u.id AND o.status = 'completed'
) OR EXISTS (
    SELECT 1 FROM subscriptions s WHERE s.user_id = u.id AND s.active = 1
);
-- EXISTS with AND
SELECT * FROM users u WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.user_id = u.id
) AND EXISTS (
    SELECT 1 FROM profiles p WHERE p.user_id = u.id
);
-- NOT EXISTS with correlated
SELECT * FROM products p WHERE NOT EXISTS (
    SELECT 1 FROM order_items oi
    WHERE oi.product_id = p.id AND oi.quantity > 0
);
-- EXISTS in CTE
WITH has_orders AS (
    SELECT id FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id)
)
SELECT * FROM has_orders;
-- EXISTS with subquery in SELECT
SELECT id, CASE WHEN EXISTS (SELECT 1 FROM orders o WHERE o.user_id = users.id) THEN 'has_orders' ELSE 'no_orders' END AS status FROM users;
-- EXISTS with complex WHERE
SELECT * FROM users u WHERE EXISTS (
    SELECT 1 FROM orders o
    WHERE o.user_id = u.id AND o.amount > 100 AND o.status = 'completed'
) AND u.active = 1 AND u.age > 18;
-- EXISTS with GROUP BY
SELECT department, COUNT(id) FROM users u WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.user_id = u.id
) GROUP BY department;
-- EXISTS with ORDER BY
SELECT * FROM users u WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.user_id = u.id
) ORDER BY u.name;
-- EXISTS with LIMIT
SELECT * FROM users u WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.user_id = u.id
) LIMIT 100;
