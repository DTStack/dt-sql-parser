-- INNER Equi-JOIN
SELECT *
FROM Orders
INNER JOIN Product
ON Orders.product_id = Product.id;

-- OUTER Equi-JOIN 
SELECT *
FROM Orders
LEFT JOIN Product
ON Orders.product_id = Product.id;

SELECT *
FROM Orders
RIGHT JOIN Product
ON Orders.product_id = Product.id;

SELECT *
FROM Orders
FULL OUTER JOIN Product
ON Orders.product_id = Product.id;

-- Interval Joins
SELECT *
FROM Orders o, Shipments s
WHERE o.id = s.order_id
AND o.order_time BETWEEN s.ship_time - INTERVAL '4' HOUR AND s.ship_time;

SELECT *
FROM Orders o, Shipments s
WHERE o.id = s.order_id
AND o.order_time = s.ship_time; -- ltime = rtime

SELECT *
FROM Orders o, Shipments s
WHERE o.id = s.order_id
AND o.order_time >= s.ship_time -- ltime >= rtime AND ltime < rtime + INTERVAL '10' MINUTE
AND o.order_time < s.ship_time + INTERVAL '10' MINUTE; 

-- Temporal Joins
SELECT 
     order_id,
     price,
     orders.currency,
     conversion_rate,
     order_time
FROM orders
LEFT JOIN currency_rates FOR SYSTEM_TIME AS OF orders.order_time
ON orders.currency = currency_rates.currency;

SELECT
    o_amount, r_rate
FROM
    Orders,
    LATERAL TABLE (Rates(o_proctime))
WHERE
    r_currency = o_currency;

-- Lookup Join
SELECT o.order_id, o.total, c.country, c.zip
FROM Orders AS o
    JOIN Customers FOR SYSTEM_TIME AS OF o.proc_time AS c
        ON o.customer_id = c.id;

-- Table Function INNER JOIN
SELECT order_id, res
FROM Orders,
LATERAL TABLE(table_func(order_id)) t(res);

-- Table Function LEFT OUTER JOIN 
SELECT order_id, res
FROM Orders
LEFT OUTER JOIN LATERAL TABLE(table_func(order_id)) t(res)
    ON TRUE;

-- Cross Join
SELECT order_id, tag
FROM Orders CROSS JOIN UNNEST(tags) AS t (tag)

-- FULL OUTER Window Join
SELECT L.num as L_Num, L.id as L_Id, R.num as R_Num, R.id as R_Id,
COALESCE(L.window_start, R.window_start) as window_start,
COALESCE(L.window_end, R.window_end) as window_end
FROM (
    SELECT * FROM TABLE(TUMBLE(TABLE LeftTable, DESCRIPTOR(row_time), INTERVAL '5' MINUTES))
) L
FULL JOIN (
    SELECT * FROM TABLE(TUMBLE(TABLE RightTable, DESCRIPTOR(row_time), INTERVAL '5' MINUTES))
) R
ON L.num = R.num AND L.window_start = R.window_start AND L.window_end = R.window_end;

-- Semi Window Joins
SELECT *
FROM (
    SELECT * FROM TABLE(TUMBLE(TABLE LeftTable, DESCRIPTOR(row_time), INTERVAL '5' MINUTES))
) L WHERE L.num IN (
    SELECT num FROM (   
        SELECT * FROM TABLE(TUMBLE(TABLE RightTable, DESCRIPTOR(row_time), INTERVAL '5' MINUTES))
    ) R WHERE L.window_start = R.window_start AND L.window_end = R.window_end
);

SELECT *
FROM (
    SELECT * FROM TABLE(TUMBLE(TABLE LeftTable, DESCRIPTOR(row_time), INTERVAL '5' MINUTES))
) L WHERE L.num IN (
    SELECT num FROM (   
        SELECT * FROM TABLE(TUMBLE(TABLE RightTable, DESCRIPTOR(row_time), INTERVAL '5' MINUTES))
    ) R WHERE L.window_start = R.window_start AND L.window_end = R.window_end
);

-- Anti Window Joins
SELECT *
FROM (
    SELECT * FROM TABLE(TUMBLE(TABLE LeftTable, DESCRIPTOR(row_time), INTERVAL '5' MINUTES))
) L WHERE L.num NOT IN (
    SELECT num FROM (   
        SELECT * FROM TABLE(TUMBLE(TABLE RightTable, DESCRIPTOR(row_time), INTERVAL '5' MINUTES))
    ) R WHERE L.window_start = R.window_start AND L.window_end = R.window_end
);

SELECT *
FROM (
    SELECT * FROM TABLE(TUMBLE(TABLE LeftTable, DESCRIPTOR(row_time), INTERVAL '5' MINUTES))
) L WHERE NOT EXISTS (
    SELECT * FROM (
        SELECT * FROM TABLE(TUMBLE(TABLE RightTable, DESCRIPTOR(row_time), INTERVAL '5' MINUTES))
    ) R WHERE L.num = R.num AND L.window_start = R.window_start AND L.window_end = R.window_end
);