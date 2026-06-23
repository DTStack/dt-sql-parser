SELECT cust_key, value OVER w, label OVER w
    FROM orders
    WINDOW w AS (
                 PARTITION BY cust_key
                 ORDER BY order_date
                 MEASURES
                        RUNNING LAST(total_price) AS value,
                        CLASSIFIER() AS label
                 ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING
                 PATTERN (A B+ C+)
                 DEFINE
                        B AS B.value < PREV (B.value),
                        C AS C.value > PREV (C.value)
                );

-- GROUPS frame (frameExtent inlined)
SELECT id, SUM(val) OVER (ORDER BY ts GROUPS BETWEEN 1 PRECEDING AND 1 FOLLOWING) FROM t1;
SELECT id, SUM(val) OVER (ORDER BY ts GROUPS UNBOUNDED PRECEDING) FROM t1;
