-- DOUBLE IN Query
SELECT 123.456E7 FROM DUAL;
-- GROUP BY 
SELECT * FROM table1 GROUP BY a;
SELECT * FROM table1 GROUP BY a, b;
SELECT * FROM table1 GROUP BY ();
-- GROUP BY GROUPING SETS
SELECT * FROM table1 GROUP BY GROUPING SETS (a);
SELECT a, b, GROUPING(a, b) FROM table1 GROUP BY GROUPING SETS ((a), (b));
-- GROUP BY ROLLUP
SELECT * FROM table1 GROUP BY ALL GROUPING SETS ((a, b), (a), ()), CUBE (c), ROLLUP (d);
SELECT * FROM table1 GROUP BY DISTINCT GROUPING SETS ((a, b), (a), ()), CUBE (c), ROLLUP (d);
-- GROUP BY CUBE
SELECT origin_state, destination_state, sum(package_weight)
FROM shipping
GROUP BY CUBE (origin_state, destination_state);
-- GROUP BY Combining multiple grouping expressions
SELECT origin_state, destination_state, origin_zip, sum(package_weight)
FROM shipping
GROUP BY
    GROUPING SETS ((origin_state, destination_state)),
    ROLLUP (origin_zip);

SELECT origin_state, destination_state, origin_zip, sum(package_weight)
FROM shipping
GROUP BY GROUPING SETS (
    (origin_state, destination_state, origin_zip),
    (origin_state, destination_state)
);

SELECT origin_state, destination_state, origin_zip, sum(package_weight)
FROM shipping
GROUP BY
    GROUPING SETS ((origin_state, destination_state)),
    GROUPING SETS ((origin_zip), ());
-- GROUP BY ALL and DISTINCT quantifiers 
SELECT origin_state, destination_state, origin_zip, sum(package_weight)
FROM shipping
GROUP BY ALL
    CUBE (origin_state, destination_state),
    ROLLUP (origin_state, origin_zip);

SELECT origin_state, destination_state, origin_zip, sum(package_weight)
FROM shipping
GROUP BY GROUPING SETS (
    (origin_state, destination_state, origin_zip),
    (origin_state, origin_zip),
    (origin_state, destination_state, origin_zip),
    (origin_state, origin_zip),
    (origin_state, destination_state),
    (origin_state),
    (origin_state, destination_state),
    (origin_state),
    (origin_state, destination_state),
    (origin_state),
    (destination_state),
    ()
);

SELECT origin_state, destination_state, origin_zip, sum(package_weight)
FROM shipping
GROUP BY DISTINCT
    CUBE (origin_state, destination_state),
    ROLLUP (origin_state, origin_zip);

SELECT origin_state, destination_state, origin_zip, sum(package_weight)
FROM shipping
GROUP BY GROUPING SETS (
    (origin_state, destination_state, origin_zip),
    (origin_state, origin_zip),
    (origin_state, destination_state),
    (origin_state),
    (destination_state),
    ()
);

-- GROUP BY GROUPING operation
SELECT origin_state, origin_zip, destination_state, sum(package_weight),
       grouping(origin_state, origin_zip, destination_state)
FROM shipping
GROUP BY GROUPING SETS (
    (origin_state),
    (origin_state, origin_zip),
    (destination_state)
);

-- ORDER BY 
SELECT * FROM table1 ORDER BY a;
-- Select expressions
SELECT (CAST(ROW(1, true) AS ROW(field1 bigint, field2 boolean))).* AS (alias1, alias2);
SELECT (CAST(ROW(1, true) AS ROW(field1 bigint, field2 boolean))).*;
SELECT (ROW(1, true)).*;
-- LIMIT
SELECT * FROM table1 LIMIT 2;
SELECT * FROM table1 LIMIT ALL;
SELECT * FROM (VALUES (1, '1'), (2, '2')) LIMIT ALL;
-- HAVING
SELECT count(*), mktsegment, nationkey,
       CAST(sum(acctbal) AS bigint) AS totalbal
FROM customer
GROUP BY mktsegment, nationkey
HAVING sum(acctbal) > 5700000
ORDER BY totalbal DESC;
-- WINDOW
SELECT orderkey, clerk, totalprice,
      rank() OVER w AS rnk
FROM orders
WINDOW w AS (PARTITION BY clerk ORDER BY totalprice DESC)
ORDER BY count() OVER w, clerk, rnk
-- AGGREGATION FILTER/ ORDER BY
SELECT SUM(x) FILTER (WHERE x > 4);
SELECT array_agg(x ORDER BY t.y) FROM t;
-- INTERSECT
SELECT 123 INTERSECT DISTINCT SELECT 123 INTERSECT ALL SELECT 123;
-- substring_built_in_function
SELECT substring('string' FROM 2);
SELECT substring('string' FROM 2 FOR 3);


SELECT COALESCE(SUM(c.amount), 0) AS total_amount FROM cust c;
SELECT SUM(c.amount) AS total_amount FROM cust c;
