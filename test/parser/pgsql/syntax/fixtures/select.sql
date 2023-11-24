-- SELECT
WITH RECURSIVE query_name (id) AS (SELECT id FROM table_expression) 
SELECT ALL ON (col1,col2) random() AS name1 FROM table_expression 
WHERE name1=name1 
GROUP BY DISTINCT id  
HAVING sum(len) < interval '5 hours' 
WINDOW  w AS (PARTITION BY depname ORDER BY salary DESC)
 UNION ALL (SELECT * FROM others) 
 ORDER BY salary DESC 
 LIMIT ALL 
 OFFSET start ROWS 
 FETCH NEXT ROWS ONLY
  FOR UPDATE OF table_name, table_name2 NOWAIT;
SELECT;

SELECT * FROM db.tbs GROUP BY (col1 > 3, col2 < 8) ORDER BY col3 > 9;

WITH query_name (id) AS (SELECT id FROM table_expression) SELECT DISTINCT random() AS name1 FROM table_expression WHERE name1=name1 GROUP BY id  HAVING sum(len) < interval '5 hours' WINDOW  w AS (PARTITION BY depname ORDER BY salary DESC) INTERSECT DISTINCT (SELECT * FROM others) ORDER BY salary ASC LIMIT ALL OFFSET start FETCH NEXT ROW ONLY FOR NO KEY UPDATE;

WITH query_name (id) AS (SELECT id FROM table_expression) SELECT DISTINCT ON (col1) random() AS name1 FROM table_expression WHERE name1=name1 GROUP BY id  HAVING sum(len) < interval '5 hours' WINDOW  w AS (PARTITION BY depname ORDER BY salary DESC) EXCEPT (SELECT * FROM others) ORDER BY salary USING > NULL FIRST LIMIT 40 OFFSET start FETCH NEXT ROW ONLY FOR SHARE;

WITH query_name (id) AS (SELECT id FROM table_expression) SELECT DISTINCT ON (col1) random() AS name1 FROM table_expression WHERE name1=name1 GROUP BY id  HAVING sum(len) < interval '5 hours' WINDOW  w AS (PARTITION BY depname ORDER BY salary DESC) EXCEPT (SELECT * FROM others) ORDER BY salary USING > NULL FIRST LIMIT 40 OFFSET start FETCH NEXT ROW ONLY FOR KEY SHARE OF table_name NOWAIT;

-- SELECT INTO
WITH RECURSIVE query_name (id) AS (SELECT id FROM table_expression)
SELECT DISTINCT ON (col2, col3)
INTO TEMPORARY TABLE new_table
    FROM from_item
    WHERE name2=name1
    GROUP BY name
    HAVING s > 8
    WINDOW window_name AS ( RANGE UNBOUNDED PRECEDING  )
    INTERSECT DISTINCT (SELECT * FROM tb)
    ORDER BY expression_1 USING  > NULLS FIRST
    LIMIT ALL
    OFFSET start ROW
    FETCH FIRST 234 ROWS ONLY
    FOR UPDATE OF table_name  NOWAIT;
SELECT INTO new_table;

-- The Most Easy
SELECT * ;

-- Querying a Table

SELECT city, temp_lo, temp_hi, prcp, date FROM weather;

SELECT city, (temp_hi+temp_lo)/2 AS temp_avg, date FROM weather;

SELECT * FROM weather
    WHERE city = 'San Francisco' AND prcp > 0.0;

SELECT * FROM weather
    ORDER BY city;

SELECT * FROM weather
    ORDER BY city, temp_lo;

SELECT DISTINCT city
    FROM weather;

SELECT DISTINCT city
    FROM weather
    ORDER BY city;

-- Joins Between Tables
SELECT weather.city, weather.temp_lo, weather.temp_hi,
       weather.prcp, weather.date, cities.location
    FROM weather NATURAL LEFT OUTER JOIN cities
    WHERE cities.name = weather.city;

SELECT W1.city, W1.temp_lo AS low, W1.temp_hi AS high,
    W2.city, W2.temp_lo AS low, W2.temp_hi AS high
    FROM weather W1 NATURAL RIGHT OUTER JOIN weather W2
    WHERE W1.temp_lo < W2.temp_lo
    AND W1.temp_hi > W2.temp_hi;

SELECT *
    FROM weather w NATURAL FULL OUTER JOIN cities c
    WHERE w.city = c.name;

SELECT *
    FROM weather w CROSS JOIN cities c
    WHERE w.city = c.name;

-- Aggregate Functions

SELECT city, max(temp_lo)
    FROM weather
    WHERE city LIKE 'S%'
    GROUP BY city
    HAVING max(temp_lo) < 40;

-- Window Functions

SELECT depname, empno, salary, enroll_date
FROM
  (SELECT depname, empno, salary, enroll_date,
          rank() OVER (PARTITION BY depname ORDER BY salary DESC, empno) AS pos
     FROM empsalary
  ) AS ss
WHERE pos < 3;

SELECT sum(salary) OVER w, avg(salary) OVER w
  FROM empsalary
  WINDOW w AS (PARTITION BY depname ORDER BY salary DESC);

SELECT name, altitude
    FROM ONLY cities
    WHERE altitude > 500;

SELECT name, altitude
    FROM cities*
    WHERE altitude > 500;

SELECT c.tableoid, c.name, c.altitude
FROM cities c
WHERE c.altitude > 500;

-- Overview
WITH query_name (id) AS (SELECT id FROM table_expression) SELECT random() FROM table_expression ORDER BY salary DESC

-- Partitioning and Constraint Exclusion
SET constraint_exclusion = on;
SELECT count(*) FROM measurement WHERE logdate >= DATE '2008-01-01';

-- Table Functions

SELECT * FROM foo
    WHERE foosubid IN (
                        SELECT foosubid
                        FROM getfoo(foo.fooid) z
                        WHERE z.fooid = foo.fooid
                      );

SELECT *
    FROM dblink('dbname=mydb', 'SELECT proname, prosrc FROM pg_proc')
      AS t1(proname name, prosrc text)
    WHERE proname LIKE 'bytea%';

-- The Schema Search Path
SELECT 3 OPERATOR(pg_catalog.+) 4;


-- Monetary Types
SELECT '12.34'::float8::numeric::money;

-- Binary Data Types
SELECT '\xDEADBEEF';

-- bytea Escape Format
SELECT 'abc \153\154\155 \052\251\124'::bytea;

-- Date/Time Types  Interval Input
SELECT EXTRACT(days from '80 hours'::interval);

-- Text Search Types
SELECT 'a fat cat sat on a mat and ate a fat rat'::tsvector;

SELECT $$the lexeme '    ' contains spaces$$::tsvector;

SELECT $$the lexeme 'Joe''s' contains a quote$$::tsvector;

SELECT 'a:1 fat:2 cat:3 sat:4 on:5 a:6 mat:7 and:8 ate:9 a:10 fat:11 rat:12'::tsvector;

SELECT to_tsvector('english', 'The Fat Rats');

SELECT 'fat & rat & ! cat'::tsquery;

SELECT to_tsquery('Fat:ab & Cats');

-- Arrays --Accessing Arrays
SELECT name FROM sal_emp WHERE pay_by_quarter[1] <> pay_by_quarter[2];

SELECT schedule[1:2][2] FROM sal_emp WHERE name = 'Bill';

-- Arrays -- Searching in Arrays
SELECT * FROM sal_emp WHERE pay_by_quarter[1] = 10000 OR
                            pay_by_quarter[2] = 10000 OR
                            pay_by_quarter[3] = 10000 OR
                            pay_by_quarter[4] = 10000;

-- Array Input and Output Syntax
SELECT f1[1][-2][3] AS e1, f1[1][-1][5] AS e2
 FROM (SELECT '[1:1][-2:-1][3:5]={{{1,2,3},{4,5,6}}}'::int[] AS f1) AS ss;

-- Containment
SELECT int4range(10, 20) @> 3;

-- Object Identifier Types
SELECT * FROM pg_attribute WHERE attrelid = 'mytable'::regclass;