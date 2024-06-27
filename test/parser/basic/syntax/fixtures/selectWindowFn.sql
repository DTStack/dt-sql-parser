-- window_function [ nulls_option ] OVER
-- ( [  { PARTITION | DISTRIBUTE } BY partition_col_name = partition_col_val ( [ , ... ] ) ]
--   { ORDER | SORT } BY expression [ ASC | DESC ] [ NULLS { FIRST | LAST } ] [ , ... ]
--   [ window_frame ] )


CREATE TABLE employees (name STRING, dept STRING, salary INT, age INT);

INSERT INTO employees VALUES ("Lisa", "Sales", 10000, 35);
INSERT INTO employees VALUES ("Evan", "Sales", 32000, 38);
INSERT INTO employees VALUES ("Fred", "Engineering", 21000, 28);
INSERT INTO employees VALUES ("Alex", "Sales", 30000, 33);
INSERT INTO employees VALUES ("Tom", "Engineering", 23000, 33);
INSERT INTO employees VALUES ("Jane", "Marketing", 29000, 28);
INSERT INTO employees VALUES ("Jeff", "Marketing", 35000, 38);
INSERT INTO employees VALUES ("Paul", "Engineering", 29000, 23);
INSERT INTO employees VALUES ("Chloe", "Engineering", 23000, 25);

SELECT * FROM employees;

SELECT name, dept, salary, RANK() OVER (PARTITION BY dept ORDER BY salary) AS rank FROM employees;

SELECT name, dept, salary, DENSE_RANK() OVER (PARTITION BY dept ORDER BY salary ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS dense_rank FROM employees;

SELECT name, dept, age, CUME_DIST() OVER (PARTITION BY dept ORDER BY age RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS cume_dist FROM employees;

SELECT name, dept, salary, MIN(salary) OVER (PARTITION BY dept ORDER BY salary) AS min FROM employees;

SELECT name, salary, LAG(salary) OVER (PARTITION BY dept ORDER BY salary) AS lag, LEAD(salary, 1, 0) OVER (PARTITION BY dept ORDER BY salary) AS lead FROM employees;

SELECT id, v, LEAD(v, 0) IGNORE NULLS OVER w lead, LAG(v, 0) IGNORE NULLS OVER w lag, NTH_VALUE(v, 2) IGNORE NULLS OVER w nth_value, FIRST_VALUE(v) IGNORE NULLS OVER w first_value, LAST_VALUE(v) IGNORE NULLS OVER w last_value FROM test_ignore_null WINDOW w AS (ORDER BY id) ORDER BY id;
