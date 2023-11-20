-- https://dev.mysql.com/doc/refman/8.0/en/set-operations.html

/* query_expression:
  [with_clause]
  query_expression_body
  [order_by_clause] [limit_clause] [into_clause]

query_expression_body:
    query_term
 |  query_expression_body UNION [ALL | DISTINCT] query_term
 |  query_expression_body EXCEPT [ALL | DISTINCT] query_term

query_term:
    query_primary
 |  query_term INTERSECT [ALL | DISTINCT] query_primary

query_primary:
    query_block
 |  '(' query_expression_body [order_by_clause] [limit_clause] [into_clause] ')'*/


(SELECT a FROM t1 WHERE a=10 AND b=1) EXCEPT (SELECT a FROM t2 WHERE a=11 AND b=2 ORDER BY a LIMIT 10);
(SELECT * FROM t1 ORDER BY a LIMIT 10) UNION (SELECT * FROM t2 ORDER BY a LIMIT 10);

(SELECT a FROM t1 WHERE a=10 AND b=1 ORDER BY a LIMIT 10) UNION (SELECT a FROM t2 WHERE a=11 AND b=2 ORDER BY a LIMIT 10);
(SELECT * FROM t1 ORDER BY x LIMIT 10) INTERSECT (SELECT * FROM t2 ORDER BY a LIMIT 10);

SELECT * FROM t1 UNION SELECT * FROM t2;

VALUES ROW(4,-2), ROW(5,9) UNION SELECT * FROM t2;
VALUES ROW(4,-2), ROW(5,9) UNION SELECT * FROM t2;
SELECT * FROM t1 UNION VALUES ROW(4,-2),ROW(5,9);
SELECT * FROM t1 UNION VALUES ROW(4,-2),ROW(5,9);
VALUES ROW(4,-2), ROW(5,9) UNION VALUES ROW(4,-2),ROW(5,9);
VALUES ROW(4,-2), ROW(5,9), ROW(-1,3) UNION VALUES ROW(1,2), ROW(3,4), ROW(-1,3) ORDER BY column_0 DESC LIMIT 3;
