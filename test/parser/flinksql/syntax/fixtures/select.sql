SELECT * FROM Orders;

SELECT order_id, price + tax FROM Orders;

SELECT order_id, price FROM (VALUES (1, 2.0), (2, 3.1)) AS t (order_id, price);

SELECT price + tax FROM Orders WHERE id = 10;

SELECT PRETTY_PRINT(order_id) FROM Orders;

SELECT * FROM Orders ORDER BY order_time, order_id;

SELECT * FROM Orders ORDER BY orderTime LIMIT 3;