-- https://dev.mysql.com/doc/refman/8.0/en/select.html

/* SELECT
    [ALL | DISTINCT | DISTINCTROW ]
    [HIGH_PRIORITY]
    [STRAIGHT_JOIN]
    [SQL_SMALL_RESULT] [SQL_BIG_RESULT] [SQL_BUFFER_RESULT]
    [SQL_CACHE | SQL_NO_CACHE] [SQL_CALC_FOUND_ROWS]
    select_expr [, select_expr] ...
    [into_option]
    [FROM table_references
      [PARTITION partition_list]]
    [WHERE where_condition]
    [GROUP BY {col_name | expr | position}, ... [WITH ROLLUP]]
    [HAVING where_condition]
    [WINDOW window_name AS (window_spec)
        [, window_name AS (window_spec)] ...]
    [ORDER BY {col_name | expr | position}
      [ASC | DESC], ... [WITH ROLLUP]]
    [LIMIT {[offset,] row_count | row_count OFFSET offset}]
    [into_option]
    [FOR {UPDATE | SHARE}
        [OF tbl_name [, tbl_name] ...]
        [NOWAIT | SKIP LOCKED]
      | LOCK IN SHARE MODE]
    [into_option]

into_option: {
    INTO OUTFILE 'file_name'
        [CHARACTER SET charset_name]
        export_options
  | INTO DUMPFILE 'file_name'
  | INTO var_name [, var_name] ...
} */


SELECT 1 + 1 FROM DUAL;
SELECT AVG(score), t1.* FROM t1;
SELECT CONCAT(last_name,', ',first_name) AS full_name FROM my_table ORDER BY full_name;
SELECT CONCAT(last_name,', ',first_name) full_name FROM my_table ORDER BY full_name;
SELECT column1 column2 FROM my_table;
SELECT t1.name, t2.salary FROM employee AS t1, info AS t2 WHERE t1.name = t2.name;
SELECT t1.name, t2.salary FROM employee t1, info t2 WHERE t1.name = t2.name;
SELECT college, region, seed FROM tournament ORDER BY region, seed;
SELECT college, region AS r, seed AS s FROM tournament ORDER BY r, s;
SELECT college, region, seed FROM tournament ORDER BY 2, 3;
SELECT a, b, COUNT(c) AS t FROM test_table GROUP BY a,b ORDER BY a,t DESC;
SELECT COUNT(col1) AS col2 FROM t GROUP BY col2 HAVING col2 = 2;
SELECT col_name FROM tbl_name HAVING col_name > 0;
SELECT col_name FROM tbl_name WHERE col_name > 0;
SELECT user, MAX(salary) FROM users GROUP BY user HAVING MAX(salary) > 10;
SELECT 12 AS a, a FROM t GROUP BY a;
SELECT * FROM tbl LIMIT 5,10;
SELECT * FROM tbl LIMIT 95,18446744073709551615;
SELECT * FROM tbl LIMIT 5;
SELECT * FROM tbl WINDOW window_name AS (window_spec) LIMIT 5;

SELECT * FROM t1, t2 FOR SHARE OF t1;
SELECT * FROM t1, t2 INTO OUTFILE '/path/to/file_name';
SELECT ALL HIGH_PRIORITY STRAIGHT_JOIN SQL_SMALL_RESULT SQL_CACHE * FROM tbl PARTITION (partition_name, partition_name1) LOCK IN SHARE MODE;
SELECT DISTINCTROW HIGH_PRIORITY STRAIGHT_JOIN SQL_BIG_RESULT SQL_NO_CACHE * FROM tbl PARTITION (partition_name, partition_name1) FOR UPDATE OF tbl_name SKIP LOCKED;
SELECT DISTINCT HIGH_PRIORITY STRAIGHT_JOIN SQL_BUFFER_RESULT SQL_CALC_FOUND_ROWS * FROM tbl PARTITION (partition_name, partition_name1) FOR UPDATE OF tbl_name SKIP LOCKED;

SELECT * INTO @my_var FROM t1;
SELECT * FROM t1 INTO @my_var FOR UPDATE;
SELECT 1 FOR UPDATE INTO @my_var;
SELECT * FROM t1 FOR UPDATE INTO @my_var;
SELECT id, data INTO @x, @y FROM test.t1 LIMIT 1;

SELECT * FROM t1 AS t INTO @x,@y,@z;
SELECT * FROM t1 AS t INTO OUTFILE '/tmp/select-values.txt';
SELECT a,b,a+b INTO OUTFILE '/tmp/result.txt' FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n' FROM test_table;
