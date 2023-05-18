-- Window TVF Aggregation 
SELECT 
    window_start,
    window_end,
    supplier_id,
    SUM(price) as price
FROM TABLE(
    TUMBLE(TABLE Bid, DESCRIPTOR(bidtime), INTERVAL '10' MINUTES))
GROUP BY window_start, window_end, GROUPING SETS ((supplier_id), ());

SELECT 
    window_start,
    window_end,
    supplier_id,
    SUM(price) as price
FROM TABLE(
    TUMBLE(TABLE Bid, DESCRIPTOR(bidtime), INTERVAL '10' MINUTES))
GROUP BY window_start, window_end, ROLLUP (supplier_id);

SELECT 
    window_start, 
    window_end, 
    item, supplier_id,
    SUM(price) as price
FROM TABLE(
    TUMBLE(TABLE Bid, DESCRIPTOR(bidtime), INTERVAL '10' MINUTES))
GROUP BY window_start, window_end, CUBE (supplier_id, item);

-- GROUPING SETS
SELECT 
    window_start,
    window_end,
    supplier_id,
    SUM(price) as price
FROM TABLE(
    TUMBLE(TABLE Bid, DESCRIPTOR(bidtime), INTERVAL '10' MINUTES))
GROUP BY 
    window_start,
    window_end,
    GROUPING SETS ((supplier_id), ());

SELECT 
    window_start,
    window_end,
    supplier_id,
    SUM(price) as price
FROM TABLE(
    TUMBLE(TABLE Bid, DESCRIPTOR(bidtime), INTERVAL '10' MINUTES))
GROUP BY 
    window_start,
    window_end,
    ROLLUP (supplier_id);

SELECT
    window_start,
    window_end,
    item,
    supplier_id,
    SUM(price) as price
FROM TABLE(
    TUMBLE(TABLE Bid, DESCRIPTOR(bidtime), INTERVAL '10' MINUTES))
GROUP BY
    window_start,
    window_end,
    CUBE (supplier_id, item);

-- Group Window Aggregation
SELECT
    `user`,
    TUMBLE_START(order_time, INTERVAL '1' DAY) AS wStart,
    SUM(amount) FROM Orders
GROUP BY
    TUMBLE(order_time, INTERVAL '1' DAY),
    `user`;

SELECT
    `user`,
    TUMBLE_START(order_time, INTERVAL '1' DAY) AS wStart,
    SUM(amount) FROM Orders
GROUP BY
    HOP(order_time, INTERVAL '1' DAY),
    `user`;

SELECT
    `user`,
    TUMBLE_START(order_time, INTERVAL '1' DAY) AS wStart,
    SUM(amount) FROM Orders
GROUP BY
    SESSION(order_time, INTERVAL '1' DAY),
    `user`;

-- Having
SELECT SUM(amount)
FROM Orders
GROUP BY `users`
HAVING SUM(amount) > 50;

-- Over Aggregation
SELECT order_id, order_time, amount,
    SUM(amount) OVER (
        PARTITION BY product
        ORDER BY order_time
        RANGE BETWEEN INTERVAL '1' HOUR PRECEDING AND CURRENT ROW
    ) AS one_hour_prod_amount_sum
FROM Orders;

SELECT product, order_time, amount,
    SUM(amount) OVER (
        PARTITION BY product
        ORDER BY order_time
        ROWS BETWEEN 5 PRECEDING AND CURRENT ROW
    ) AS one_hour_prod_amount_sum
FROM source_table;

SELECT order_id, order_time, amount,
    SUM(amount) OVER w AS sum_amount,
    AVG(amount) OVER w AS avg_amount
FROM Orders
WINDOW w AS (
    PARTITION BY product
    ORDER BY order_time
    RANGE BETWEEN INTERVAL '1' HOUR PRECEDING AND CURRENT ROW);