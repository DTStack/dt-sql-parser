-- https://dev.mysql.com/doc/refman/8.0/en/parenthesized-query-expressions.html

/* parenthesized_query_expression:
    ( query_expression [order_by_clause] [limit_clause] )
      [order_by_clause]
      [limit_clause]
      [into_clause]

query_expression:
    query_block [set_op query_block [set_op query_block ...]]
      [order_by_clause]
      [limit_clause]
      [into_clause]

query_block:
    SELECT ... | TABLE | VALUES

order_by_clause:
    ORDER BY as for SELECT

limit_clause:
    LIMIT as for SELECT

into_clause:
    INTO as for SELECT

set_op:
    UNION | INTERSECT | EXCEPT */


(SELECT 1 AS result UNION SELECT 2);
(SELECT 1 AS result UNION SELECT 2) LIMIT 1;
(SELECT 1 AS result UNION SELECT 2) LIMIT 1 OFFSET 1;
(SELECT 1 AS result UNION SELECT 2) ORDER BY result DESC LIMIT 1;
(SELECT 1 AS result UNION SELECT 2) ORDER BY result DESC LIMIT 1 OFFSET 1;
(SELECT 1 AS result UNION SELECT 3 UNION SELECT 2) ORDER BY result LIMIT 1 OFFSET 1 INTO @var;
SELECT @var;

SELECT a FROM t1 EXCEPT SELECT b FROM t2 INTERSECT SELECT c FROM t3;
SELECT a FROM t1 EXCEPT (SELECT b FROM t2 INTERSECT SELECT c FROM t3);

(SELECT * FROM t1 ORDER BY a) UNION (SELECT * FROM t2 ORDER BY b) ORDER BY z;

(SELECT 1 LIMIT 1) UNION (VALUES ROW(2) LIMIT 1);
(VALUES ROW(1), ROW(2) LIMIT 2) EXCEPT (SELECT 2 LIMIT 1);
VALUES ROW(1), ROW(2) INTERSECT VALUES ROW(2), ROW(1) LIMIT 1;

(SELECT 1 LIMIT 1) UNION (SELECT 2 LIMIT 1) LIMIT 1;
(SELECT 1 LIMIT 1) UNION (SELECT 2) LIMIT 1;
(SELECT 'a' UNION SELECT 'b' LIMIT 2) LIMIT 3;
