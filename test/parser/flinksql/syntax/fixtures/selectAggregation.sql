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

-- Group Window Aggregation
SELECT
  user,
  TUMBLE_START(order_time, INTERVAL '1' DAY) AS wStart,
  SUM(amount) FROM Orders
GROUP BY
  TUMBLE(order_time, INTERVAL '1' DAY),
  user