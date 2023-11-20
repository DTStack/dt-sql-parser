-- https://dev.mysql.com/doc/refman/8.0/en/union.html

/* query_expression_body UNION [ALL | DISTINCT] query_block
    [UNION [ALL | DISTINCT] query_expression_body]
    [...]

query_expression_body setOperations.sql */


SELECT 1, 2 UNION SELECT 'a', 'b';
(SELECT 1 UNION SELECT 1) UNION SELECT 1;
SELECT 1 FOR UPDATE UNION SELECT 1 FOR UPDATE;
(SELECT 1 FOR UPDATE) UNION (SELECT 1 FOR UPDATE);

SELECT 1, 2 UNION ALL SELECT 'a', 'b';
SELECT 1, 2 UNION DISTINCT SELECT 'a', 'b';

(SELECT 1 UNION ALL SELECT 1) UNION ALL SELECT 1;
(SELECT 1 UNION DISTINCT SELECT 1) UNION DISTINCT SELECT 1;
(SELECT 1 UNION ALL SELECT 1) UNION DISTINCT SELECT 1;
(SELECT 1 UNION DISTINCT SELECT 1) UNION ALL SELECT 1;
(SELECT 1 UNION ALL SELECT 1) UNION SELECT 1;
(SELECT 1 UNION DISTINCT SELECT 1) UNION SELECT 1;
