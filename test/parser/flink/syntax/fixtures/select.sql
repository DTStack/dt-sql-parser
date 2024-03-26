SELECT * FROM Orders;

SELECT order_id, price + tax FROM Orders;

SELECT order_id, price FROM (VALUES (1, 2.0), (2, 3.1)) AS t (order_id, price);

SELECT price + tax FROM Orders WHERE id = 10;

SELECT * FROM person WHERE id = 200 OR id = 300;

SELECT id, sum(quantity) FROM dealer GROUP BY id;

SELECT PRETTY_PRINT(order_id) FROM Orders;

SELECT * FROM Orders ORDER BY order_time, order_id;

SELECT * FROM Orders ORDER BY orderTime LIMIT 3;

SELECT * FROM catalog1.db1.table1;