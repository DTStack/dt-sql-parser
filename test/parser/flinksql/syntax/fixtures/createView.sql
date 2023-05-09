CREATE TEMPORARY VIEW IF NOT EXISTS tempView AS
SELECT
    product,
    amount
FROM
    Orders;