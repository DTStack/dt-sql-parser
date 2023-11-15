-- EXPLAIN { select_query | ctas_stmt | insert_stmt }
EXPLAIN SELECT * FROM my_table;
EXPLAIN CREATE TABLE t1 (x INT, y STRING);
EXPLAIN INSERT INTO t1 VALUES (1, 'one'), (2, 'two'), (3, 'three');

-- example
EXPLAIN SELECT COUNT(*) FROM customer_address;
EXPLAIN SELECT * FROM functional_kudu.alltypestiny WHERE bigint_col < 1000 / 100;
EXPLAIN SELECT x,y from kudu_table WHERE
  x = 1 AND y NOT IN (2,3) AND z = 1
  AND a IS NOT NULL AND b > 0 AND length(s) > 5;