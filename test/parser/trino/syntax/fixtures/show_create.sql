SHOW CREATE TABLE sf1.orders;

SHOW CREATE SCHEMA IF NOT EXISTS traffic;

SHOW CREATE VIEW test AS
SELECT orderkey, orderstatus, totalprice / 2 AS half
FROM orders;

SHOW CREATE MATERIALIZED VIEW cancelled_orders
AS
    SELECT orderkey, totalprice
    FROM orders
    WHERE orderstatus = 3;    

SHOW CREATE FUNCTION example.default.meaning_of_life;