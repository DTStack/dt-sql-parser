SELECT * FROM table_name WHERE NOT (age > 30);
SELECT * FROM table_name WHERE ! (age > 30);
SELECT * FROM table_name WHERE name RLIKE 'M+';
SELECT * FROM table_name WHERE name REGEXP 'M+';


-- ============================================


-- aggregate_function(input1 [, input2, ...]) FILTER (WHERE boolean_expression)
-- { PERCENTILE_CONT | PERCENTILE_DISC }(percentile) WITHIN GROUP (ORDER BY { order_by_expression [ ASC | DESC ] [ NULLS { FIRST | LAST } ] [ , ... ] }) FILTER (WHERE boolean_expression)

CREATE OR REPLACE TEMPORARY VIEW basic_pays AS SELECT * FROM VALUES
('Diane Murphy','Accounting',8435),
('Mary Patterson','Accounting',9998),
('Barry Jones','SCM',10586)
AS basic_pays(employee_name, department, salary);

SELECT * FROM basic_pays;
SELECT
    department,
    percentile_cont(0.25) WITHIN GROUP (ORDER BY salary) AS pc1,
    percentile_cont(0.25) WITHIN GROUP (ORDER BY salary) FILTER (WHERE employee_name LIKE '%Bo%') AS pc2,
    percentile_cont(0.25) WITHIN GROUP (ORDER BY salary DESC) AS pc3,
    percentile_cont(0.25) WITHIN GROUP (ORDER BY salary DESC) FILTER (WHERE employee_name LIKE '%Bo%') AS pc4,
    percentile_disc(0.25) WITHIN GROUP (ORDER BY salary) AS pd1,
    percentile_disc(0.25) WITHIN GROUP (ORDER BY salary) FILTER (WHERE employee_name LIKE '%Bo%') AS pd2,
    percentile_disc(0.25) WITHIN GROUP (ORDER BY salary DESC) AS pd3,
    percentile_disc(0.25) WITHIN GROUP (ORDER BY salary DESC) FILTER (WHERE employee_name LIKE '%Bo%') AS pd4
FROM basic_pays
GROUP BY department
ORDER BY department;


-- ============================================


-- CASE [ expression ] { WHEN boolean_expression THEN then_expression } [ ... ]
--     [ ELSE else_expression ]
-- END
SELECT id, CASE WHEN id > 200 THEN 'bigger' ELSE 'small' END FROM person;
SELECT id, CASE id WHEN 100 then 'bigger' WHEN  id > 300 THEN '300' ELSE 'small' END FROM person;
SELECT * FROM person WHERE CASE 1 = 1 WHEN 100 THEN 'big' WHEN 200 THEN 'bigger' WHEN 300 THEN 'biggest' ELSE 'small' END = 'small';


-- ============================================


-- WITH common_table_expression [ , ... ]
-- expression_name [ ( column_name [ , ... ] ) ] [ AS ] ( query )

-- CTE with multiple column aliases
WITH t(x, y) AS (SELECT 1, 2)
SELECT * FROM t WHERE x = 1 AND y = 2;
-- CTE in CTE definition
WITH t AS (WITH t2 AS (SELECT 1) SELECT * FROM t2) SELECT * FROM t;
-- CTE in subquery expression
SELECT (WITH t AS (SELECT 1) SELECT * FROM t);
-- CTE in CREATE VIEW statement
CREATE VIEW v AS WITH t(a, b, c, d) AS (SELECT 1, 2, 3, 4) SELECT * FROM t;
SELECT * FROM v;

-- If name conflict is detected in nested CTE, then AnalysisException is thrown by default.
-- SET spark.sql.legacy.ctePrecedencePolicy = CORRECTED (which is recommended),
-- inner CTE definitions take precedence over outer definitions.
SET spark.sql.legacy.ctePrecedencePolicy = CORRECTED;
WITH
    t AS (SELECT 1),
    t2 AS (
        WITH t AS (SELECT 2)
        SELECT * FROM t
    )
SELECT * FROM t2;


-- ============================================


-- CLUSTER BY { expression [ , ... ] }
SELECT name, age FROM person;
SELECT age, name FROM person CLUSTER BY age;


-- ============================================


-- DISTRIBUTE BY { expression [ , ... ] }
SELECT age, name FROM person DISTRIBUTE BY age;


-- ============================================


-- EXPLAIN [ EXTENDED | CODEGEN | COST | FORMATTED ] statement

-- Default Output
EXPLAIN select k, sum(v) from values (1, 2), (1, 3) t(k, v) group by k;
-- Using Extended
EXPLAIN EXTENDED select k, sum(v) from values (1, 2), (1, 3) t(k, v) group by k;

-- https://github.com/DTStack/dt-sql-parser/issues/131
SELECT count(1) FROM tableName;
-- https://github.com/DTStack/dt-sql-parser/issues/131
DELETE FROM tableName WHERE (SELECT count(1) FROM tableName WHERE pt = '20230601') > 0 AND  pt = '20230601';


-- ============================================


-- file_format.`file_path`
SELECT * FROM parquet.`examples/src/main/resources/users.parquet`;
SELECT * FROM orc.`examples/src/main/resources/users.orc`;
SELECT * FROM json.`examples/src/main/resources/people.json`;


-- ============================================


-- GROUP BY group_expression [ , group_expression [ , ... ] ] [ WITH { ROLLUP | CUBE } ]
-- GROUP BY { group_expression | { ROLLUP | CUBE | GROUPING SETS } (grouping_set [ , ...]) } [ , ... ]
-- aggregate_name ( [ DISTINCT ] expression [ , ... ] ) [ FILTER ( WHERE boolean_expression ) ]

-- Sum of quantity per dealership. Group by `id`.
SELECT id, sum(quantity) FROM dealer GROUP BY id ORDER BY id;
-- Use column position in GROUP by clause.
SELECT id, sum(quantity) FROM dealer GROUP BY 1 ORDER BY 1;
-- Multiple aggregations.
-- 1. Sum of quantity per dealership.
-- 2. Max quantity per dealership.
SELECT id, sum(quantity) AS sum, max(quantity) AS max FROM dealer GROUP BY id ORDER BY id;
-- Count the number of distinct dealer cities per car_model.
SELECT car_model, count(DISTINCT city) AS count FROM dealer GROUP BY car_model;
-- Sum of only 'Honda Civic' and 'Honda CRV' quantities per dealership.
SELECT id, sum(quantity) FILTER (
            WHERE car_model IN ('Honda Civic', 'Honda CRV')
        ) AS `sum(quantity)` FROM dealer
    GROUP BY id ORDER BY id;

-- Aggregations using multiple sets of grouping columns in a single statement.
-- Following performs aggregations based on four sets of grouping columns.
-- 1. city, car_model
-- 2. city
-- 3. car_model
-- 4. Empty grouping set. Returns quantities for all city and car models.
SELECT city, car_model, sum(quantity) AS sum FROM dealer
    GROUP BY GROUPING SETS ((city, car_model), (city), (car_model), ())
    ORDER BY city;

-- Group by processing with `ROLLUP` clause.
-- Equivalent GROUP BY GROUPING SETS ((city, car_model), (city), ())
SELECT city, car_model, sum(quantity) AS sum FROM dealer
    GROUP BY city, car_model WITH ROLLUP
    ORDER BY city, car_model;

-- Group by processing with `CUBE` clause.
-- Equivalent GROUP BY GROUPING SETS ((city, car_model), (city), (car_model), ())
SELECT city, car_model, sum(quantity) AS sum FROM dealer
    GROUP BY city, car_model WITH CUBE
    ORDER BY city, car_model;

--Select the first row in column age
SELECT FIRST(age) FROM person;

--Get the first row in column `age` ignore nulls,last row in column `id` and sum of column `id`.
SELECT FIRST(age IGNORE NULLS), LAST(id), SUM(id) FROM person;


-- ============================================


/*+ hint [ , ... ] */
SELECT /*+ COALESCE(3) */ * FROM t;
SELECT /*+ REPARTITION(3) */ * FROM t;
SELECT /*+ REPARTITION(c) */ * FROM t;
SELECT /*+ REPARTITION(3, c) */ * FROM t;
SELECT /*+ REPARTITION_BY_RANGE(c) */ * FROM t;
SELECT /*+ REPARTITION_BY_RANGE(3, c) */ * FROM t;
SELECT /*+ REBALANCE */ * FROM t;
SELECT /*+ REBALANCE(3) */ * FROM t;
SELECT /*+ REBALANCE(c) */ * FROM t;
SELECT /*+ REBALANCE(3, c) */ * FROM t;

-- multiple partitioning hints
EXPLAIN EXTENDED SELECT /*+ REPARTITION(100), COALESCE(500), REPARTITION_BY_RANGE(3, c) */ * FROM t;

-- Join Hints for broadcast join
SELECT /*+ BROADCAST(t1) */ * FROM t1 INNER JOIN t2 ON t1.key = t2.key;
SELECT /*+ BROADCASTJOIN (t1) */ * FROM t1 left JOIN t2 ON t1.key = t2.key;
SELECT /*+ MAPJOIN(t2) */ * FROM t1 right JOIN t2 ON t1.key = t2.key;

-- Join Hints for shuffle sort merge join
SELECT /*+ SHUFFLE_MERGE(t1) */ * FROM t1 INNER JOIN t2 ON t1.key = t2.key;
SELECT /*+ MERGEJOIN(t2) */ * FROM t1 INNER JOIN t2 ON t1.key = t2.key;
SELECT /*+ MERGE(t1) */ * FROM t1 INNER JOIN t2 ON t1.key = t2.key;

-- Join Hints for shuffle hash join
SELECT /*+ SHUFFLE_HASH(t1) */ * FROM t1 INNER JOIN t2 ON t1.key = t2.key;

-- Join Hints for shuffle-and-replicate nested loop join
SELECT /*+ SHUFFLE_REPLICATE_NL(t1) */ * FROM t1 INNER JOIN t2 ON t1.key = t2.key;

SELECT /*+ BROADCAST(t1), MERGE(t1, t2) */ * FROM t1 INNER JOIN t2 ON t1.key = t2.key;


-- ============================================


-- HAVING boolean_expression

-- `HAVING` clause referring to column in `GROUP BY`.
SELECT city, sum(quantity) AS sum FROM dealer GROUP BY city HAVING city = 'Fremont';
-- `HAVING` clause referring to aggregate function.
SELECT city, sum(quantity) AS sum FROM dealer GROUP BY city HAVING sum(quantity) > 15;
-- `HAVING` clause referring to aggregate function by its alias.
SELECT city, sum(quantity) AS sum FROM dealer GROUP BY city HAVING sum > 15;
-- `HAVING` clause referring to a different aggregate function than what is present in
-- `SELECT` list.
SELECT city, sum(quantity) AS sum FROM dealer GROUP BY city HAVING max(quantity) > 15;
-- `HAVING` clause referring to constant expression.
SELECT city, sum(quantity) AS sum FROM dealer GROUP BY city HAVING 1 > 0 ORDER BY city;
-- `HAVING` clause without a `GROUP BY` clause.
SELECT sum(quantity) AS sum FROM dealer HAVING sum(quantity) > 10;


-- ============================================


-- VALUES ( expression [ , ... ] ) [ table_alias ]

-- single row, without a table alias
SELECT * FROM VALUES ("one", 1);
-- three rows with a table alias
SELECT * FROM VALUES ("one", 1), ("two", 2), ("three", null) AS data(a, b);
-- complex types with a table alias
SELECT * FROM VALUES ("one", array(0, 1)), ("two", array(2, 3)) AS data(a, b);


-- ============================================


-- relation { [ join_type ] JOIN [ LATERAL ] relation [ join_criteria ] | NATURAL join_type JOIN [ LATERAL ] relation }

-- Use employee and department tables to demonstrate different type of joins.
SELECT * FROM employee;
SELECT * FROM department;
-- Use employee and department tables to demonstrate inner join.
SELECT id, name, employee.deptno, deptname FROM employee INNER JOIN department ON employee.deptno = department.deptno;
-- Use employee and department tables to demonstrate left join.
SELECT id, name, employee.deptno, deptname FROM employee LEFT JOIN department ON employee.deptno = department.deptno;
-- Use employee and department tables to demonstrate right join.
SELECT id, name, employee.deptno, deptname FROM employee RIGHT JOIN department ON employee.deptno = department.deptno;
-- Use employee and department tables to demonstrate full join.
SELECT id, name, employee.deptno, deptname FROM employee FULL JOIN department ON employee.deptno = department.deptno;
-- Use employee and department tables to demonstrate cross join.
SELECT id, name, employee.deptno, deptname FROM employee CROSS JOIN department;
-- Use employee and department tables to demonstrate semi join.
SELECT * FROM employee SEMI JOIN department ON employee.deptno = department.deptno;
-- Use employee and department tables to demonstrate anti join.
SELECT * FROM employee ANTI JOIN department ON employee.deptno = department.deptno;


-- ============================================


-- [ LATERAL ] primary_relation [ join_relation ]
SELECT * FROM t1,
  LATERAL (SELECT * FROM t2 WHERE t1.c1 = t2.c1);
SELECT a, b, c FROM t1,
  LATERAL (SELECT c1 + c2 AS a),
  LATERAL (SELECT c1 - c2 AS b),
  LATERAL (SELECT a * b AS c);


-- ============================================


-- LATERAL VIEW [ OUTER ] generator_function ( expression [ , ... ] ) [ table_alias ] AS column_alias [ , ... ]

SELECT * FROM person
    LATERAL VIEW EXPLODE(ARRAY(30, 60)) tableName AS c_age
    LATERAL VIEW EXPLODE(ARRAY(40, 80)) AS d_age;
SELECT c_age, COUNT(1) FROM person
    LATERAL VIEW EXPLODE(ARRAY(30, 60)) AS c_age
    LATERAL VIEW EXPLODE(ARRAY(40, 80)) AS d_age
GROUP BY c_age;
SELECT * FROM person LATERAL VIEW EXPLODE(ARRAY()) tableName AS c_age;
SELECT * FROM person LATERAL VIEW OUTER EXPLODE(ARRAY()) tableName AS c_age;


-- ============================================


-- [ NOT ] { LIKE search_pattern [ ESCAPE esc_char ] | [ RLIKE | REGEXP ] regex_pattern }
-- [ NOT ] { LIKE quantifiers ( search_pattern [ , ... ]) }
SELECT * FROM person WHERE name LIKE 'M%';
SELECT * FROM person WHERE name LIKE 'M_ry';
SELECT * FROM person WHERE name NOT LIKE 'M_ry';
SELECT * FROM person WHERE name RLIKE 'M+';
SELECT * FROM person WHERE name REGEXP 'M+';
SELECT * FROM person WHERE name LIKE '%\_%';
SELECT * FROM person WHERE name LIKE '%$_%' ESCAPE '$';
SELECT * FROM person WHERE name LIKE ALL ('%an%', '%an');
SELECT * FROM person WHERE name LIKE ANY ('%an%', '%an');
SELECT * FROM person WHERE name LIKE SOME ('%an%', '%an');
SELECT * FROM person WHERE name NOT LIKE ALL ('%an%', '%an');
SELECT * FROM person WHERE name NOT LIKE ANY ('%an%', '%an');
SELECT * FROM person WHERE name NOT LIKE SOME ('%an%', '%an');


-- ============================================


-- LIMIT { ALL | integer_expression }
-- Select the first two rows.
SELECT name, age FROM person ORDER BY name LIMIT 2;
-- Specifying ALL option on LIMIT returns all the rows.
SELECT name, age FROM person ORDER BY name LIMIT ALL;
-- A function expression as an input to LIMIT.
SELECT name, age FROM person ORDER BY name LIMIT length('SPARK');
-- A non-foldable expression as an input to LIMIT is not allowed.
SELECT name, age FROM person ORDER BY name LIMIT length(name);


-- ============================================


-- OFFSET integer_expression

-- Skip the first two rows.
SELECT name, age FROM person ORDER BY name OFFSET 2;
-- Skip the first two rows and returns the next three rows.
SELECT name, age FROM person ORDER BY name LIMIT 3 OFFSET 2;
-- A function expression as an input to OFFSET.
SELECT name, age FROM person ORDER BY name OFFSET length('SPARK');
-- A non-foldable expression as an input to OFFSET is not allowed.
SELECT name, age FROM person ORDER BY name OFFSET length(name);


-- ============================================


-- ORDER BY { expression [ sort_direction | nulls_sort_order ] [ , ... ] }
-- Sort rows by age. By default rows are sorted in ascending manner with NULL FIRST.
SELECT name, age FROM person ORDER BY age;
-- Sort rows in ascending manner keeping null values to be last.
SELECT name, age FROM person ORDER BY age NULLS LAST;
-- Sort rows by age in descending manner, which defaults to NULL LAST.
SELECT name, age FROM person ORDER BY age DESC;
-- Sort rows in ascending manner keeping null values to be first.
SELECT name, age FROM person ORDER BY age DESC NULLS FIRST;
-- Sort rows based on more than one column with each column having different
-- sort direction.
SELECT * FROM person ORDER BY name ASC, age DESC;


-- ============================================


-- PIVOT ( { aggregate_expression [ AS aggregate_expression_alias ] } [ , ... ]
--     FOR column_list IN ( expression_list ) )
SELECT * FROM person PIVOT (SUM(age) AS a, AVG(class) AS c FOR name IN ('John' AS john, 'Mike' AS mike));
SELECT * FROM person PIVOT (SUM(age) AS a, AVG(class) AS c FOR (name, age) IN (('John', 30) AS c1, ('Mike', 40) AS c2));


-- ============================================


-- [ ( ] relation [ ) ] EXCEPT | MINUS [ ALL | DISTINCT ] [ ( ] relation [ ) ]
-- Use number1 and number2 tables to demonstrate set operators in this page.
SELECT * FROM number1;
SELECT * FROM number2;
SELECT c FROM number1 EXCEPT SELECT c FROM number2;
SELECT c FROM number1 MINUS SELECT c FROM number2;
SELECT c FROM number1 EXCEPT ALL (SELECT c FROM number2);
SELECT c FROM number1 MINUS ALL (SELECT c FROM number2);

-- [ ( ] relation [ ) ] INTERSECT [ ALL | DISTINCT ] [ ( ] relation [ ) ]
(SELECT c FROM number1) INTERSECT (SELECT c FROM number2);
(SELECT c FROM number1) INTERSECT DISTINCT (SELECT c FROM number2);
(SELECT c FROM number1) INTERSECT ALL (SELECT c FROM number2);

-- [ ( ] relation [ ) ] UNION [ ALL | DISTINCT ] [ ( ] relation [ ) ]
(SELECT c FROM number1) UNION (SELECT c FROM number2);
(SELECT c FROM number1) UNION DISTINCT (SELECT c FROM number2);
SELECT c FROM number1 UNION ALL (SELECT c FROM number2);


-- ============================================


-- SORT BY { expression [ sort_direction | nulls_sort_order ] [ , ... ] }

-- Sort rows by `name` within each partition in ascending manner
SELECT /*+ REPARTITION(zip_code) */ name, age, zip_code FROM person SORT BY name;
-- Sort rows within each partition using column position.
SELECT /*+ REPARTITION(zip_code) */ name, age, zip_code FROM person SORT BY 1;
-- Sort rows within partition in ascending manner keeping null values to be last.
SELECT /*+ REPARTITION(zip_code) */ age, name, zip_code FROM person SORT BY age NULLS LAST;
-- Sort rows by age within each partition in descending manner, which defaults to NULL LAST.
SELECT /*+ REPARTITION(zip_code) */ age, name, zip_code FROM person SORT BY age DESC;
-- Sort rows by age within each partition in descending manner keeping null values to be first.
SELECT /*+ REPARTITION(zip_code) */ age, name, zip_code FROM person SORT BY age DESC NULLS FIRST;
-- Sort rows within each partition based on more than one column with each column having
-- different sort direction.
SELECT /*+ REPARTITION(zip_code) */ name, age, zip_code FROM person SORT BY name ASC, age DESC;


-- ============================================


-- TABLESAMPLE ({ integer_expression | decimal_expression } PERCENT)
--     | TABLESAMPLE ( integer_expression ROWS )
--     | TABLESAMPLE ( BUCKET integer_expression OUT OF integer_expression )

SELECT * FROM test TABLESAMPLE (50 PERCENT);
SELECT * FROM test TABLESAMPLE (5 ROWS);
SELECT * FROM test TABLESAMPLE (BUCKET 4 OUT OF 10);


-- ============================================


-- SELECT TRANSFORM ( expression [ , ... ] )
--     [ ROW FORMAT row_format ]
--     [ RECORDWRITER record_writer_class ]
--     USING command_or_script [ AS ( [ col_name [ col_type ] ] [ , ... ] ) ]
--     [ ROW FORMAT row_format ]
--     [ RECORDREADER record_reader_class ]

-- With specified output without data type
SELECT TRANSFORM(zip_code, name, age)
   USING 'cat' AS (a, b, c)
FROM person
WHERE zip_code > 94511;

-- With specified output with data type
SELECT TRANSFORM(zip_code, name, age)
   USING 'cat' AS (a STRING, b STRING, c STRING)
FROM person
WHERE zip_code > 94511;

-- Using ROW FORMAT DELIMITED
SELECT TRANSFORM(name, age)
    ROW FORMAT DELIMITED
    FIELDS TERMINATED BY ','
    LINES TERMINATED BY '\n'
    NULL DEFINED AS 'NULL'
    USING 'cat' AS (name_age string)
    ROW FORMAT DELIMITED
    FIELDS TERMINATED BY '@'
    LINES TERMINATED BY '\n'
    NULL DEFINED AS 'NULL'
FROM person;

-- Using Hive Serde
SELECT TRANSFORM(zip_code, name, age)
    ROW FORMAT SERDE 'org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe'
    WITH SERDEPROPERTIES (
      'field.delim' = '\t'
    )
    USING 'cat' AS (a STRING, b STRING, c STRING)
    ROW FORMAT SERDE 'org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe'
    WITH SERDEPROPERTIES (
      'field.delim' = '\t'
    )
FROM person
WHERE zip_code > 94511;

-- Schema-less mode
SELECT TRANSFORM(zip_code, name, age)
    USING 'cat'
FROM person
WHERE zip_code > 94500;


-- ============================================


-- range call with end
SELECT * FROM range(6 + cos(3));
-- range call with start and end
SELECT * FROM range(5, 10);
-- range call with numPartitions
SELECT * FROM range(0, 10, 2, 200);
-- range call with a table alias
SELECT * FROM range(5, 8) AS test;
SELECT explode(array(10, 20));
SELECT inline(array(struct(1, 'a'), struct(2, 'b')));
SELECT posexplode(array(10,20));
SELECT stack(2, 1, 2, 3);
SELECT json_tuple('{"a":1, "b":2}', 'a', 'b');
SELECT parse_url('http://spark.apache.org/path?query=1', 'HOST');
SELECT * FROM test LATERAL VIEW explode (ARRAY(3,4)) AS c2;


-- ============================================


-- UNPIVOT [ { INCLUDE | EXCLUDE } NULLS ] (
--     { single_value_column_unpivot | multi_value_column_unpivot }
-- ) [[AS] alias]

-- single_value_column_unpivot:
--     values_column
--     FOR name_column
--     IN (unpivot_column [[AS] alias] [, ...])

-- multi_value_column_unpivot:
--     (values_column [, ...])
--     FOR name_column
--     IN ((unpivot_column [, ...]) [[AS] alias] [, ...])

-- column names are used as unpivot columns
SELECT * FROM sales_quarterly
    UNPIVOT (
        sales FOR quarter IN (q1, q2, q3, q4)
    );

-- NULL values are excluded by default, they can be included
-- unpivot columns can be alias
-- unpivot result can be referenced via its alias
SELECT up.* FROM sales_quarterly
    UNPIVOT INCLUDE NULLS (
        sales FOR quarter IN (q1 AS Q1, q2 AS Q2, q3 AS Q3, q4 AS Q4)
    ) AS up;

-- multiple value columns can be unpivoted per row
SELECT * FROM sales_quarterly
    UNPIVOT EXCLUDE NULLS (
        (first_quarter, second_quarter)
        FOR half_of_the_year IN (
            (q1, q2) AS H1,
            (q3, q4) AS H2
        )
    );


-- ============================================


-- WHERE boolean_expression

-- Comparison operator in `WHERE` clause.
SELECT * FROM person WHERE id > 200 ORDER BY id;
-- Comparison and logical operators in `WHERE` clause.
SELECT * FROM person WHERE id = 200 OR id = 300 ORDER BY id;
-- IS NULL expression in `WHERE` clause.
SELECT * FROM person WHERE id > 300 OR age IS NULL ORDER BY id;
-- Function expression in `WHERE` clause.
SELECT * FROM person WHERE length(name) > 3 ORDER BY id;
-- `BETWEEN` expression in `WHERE` clause.
SELECT * FROM person WHERE id BETWEEN 200 AND 300 ORDER BY id;
-- Scalar Subquery in `WHERE` clause.
SELECT * FROM person WHERE age > (SELECT avg(age) FROM person);
-- Correlated Subquery in `WHERE` clause.
SELECT * FROM person AS parent WHERE EXISTS (SELECT 1 FROM person AS child WHERE parent.id = child.id AND child.age IS NULL);


-- ============================================


-- window_function [ nulls_option ] OVER
-- ( [  { PARTITION | DISTRIBUTE } BY partition_col_name = partition_col_val ( [ , ... ] ) ]
--   { ORDER | SORT } BY expression [ ASC | DESC ] [ NULLS { FIRST | LAST } ] [ , ... ]
--   [ window_frame ] )

SELECT * FROM employees;
SELECT name, dept, salary, RANK() OVER (PARTITION BY dept ORDER BY salary) AS rank FROM employees;
SELECT name, dept, salary, DENSE_RANK() OVER (PARTITION BY dept ORDER BY salary ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS dense_rank FROM employees;
SELECT name, dept, age, CUME_DIST() OVER (PARTITION BY dept ORDER BY age RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS cume_dist FROM employees;
SELECT name, dept, salary, MIN(salary) OVER (PARTITION BY dept ORDER BY salary) AS min FROM employees;
SELECT name, salary, LAG(salary) OVER (PARTITION BY dept ORDER BY salary) AS lag, LEAD(salary, 1, 0) OVER (PARTITION BY dept ORDER BY salary) AS lead FROM employees;
SELECT id, v, LEAD(v, 0) IGNORE NULLS OVER w lead, LAG(v, 0) IGNORE NULLS OVER w lag, NTH_VALUE(v, 2) IGNORE NULLS OVER w nth_value, FIRST_VALUE(v) IGNORE NULLS OVER w first_value, LAST_VALUE(v) IGNORE NULLS OVER w last_value FROM test_ignore_null WINDOW w AS (ORDER BY id) ORDER BY id;
