-- https://dev.mysql.com/doc/refman/8.0/en/table.html

/* TABLE table_name [ORDER BY column_name] [LIMIT number [OFFSET number]] */

SELECT * FROM t;
TABLE t;
TABLE t ORDER BY b;
TABLE t LIMIT 3;
TABLE t ORDER BY b LIMIT 3;
TABLE t ORDER BY b LIMIT 3 OFFSET 2;

SELECT * FROM t1 WHERE a IN (SELECT x FROM t2);
SELECT * FROM t1 WHERE a IN (SELECT * FROM t2);
