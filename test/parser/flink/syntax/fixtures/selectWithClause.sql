WITH orders_with_total AS (
    SELECT order_id, price + tax AS total
    FROM Orders
)
SELECT order_id, SUM(total)
FROM orders_with_total
GROUP BY order_id;

-- CTE with quoted identifier (withItemName inlined to identifier)
WITH `my_cte` AS (
    SELECT id, name FROM users
)
SELECT * FROM `my_cte`;

-- CTE with column list
WITH cte1 (col1, col2) AS (
    SELECT id, name FROM users
)
SELECT col1, col2 FROM cte1;