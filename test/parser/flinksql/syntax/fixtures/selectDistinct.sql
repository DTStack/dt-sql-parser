SELECT DISTINCT order_id, price + tax FROM Orders;

SELECT DISTINCT order_id, price FROM (VALUES (1, 2.0), (2, 3.1)) AS t (order_id, price);

SELECT DISTINCT price + tax FROM Orders WHERE id = 10;

SELECT DISTINCT PRETTY_PRINT(order_id) FROM Orders;