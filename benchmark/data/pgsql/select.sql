WITH RECURSIVE query_name (id) AS (SELECT id FROM table_expression) 
SELECT DISTINCT ON (col1,col2) random() AS name1 FROM table_expression 
WHERE name1=name1 
GROUP BY DISTINCT id  
HAVING sum(len) < interval '5 hours' 
WINDOW  w AS (PARTITION BY depname ORDER BY salary DESC)
 UNION ALL (SELECT * FROM others) 
 ORDER BY salary DESC 
 FETCH NEXT ROWS ONLY
 OFFSET start ROWS 
  FOR UPDATE OF table_name, table_name2 NOWAIT;
SELECT;

SELECT * FROM db.tbs GROUP BY (col1 > 3, col2 < 8) ORDER BY col3 > 9;

WITH query_name (id) AS (SELECT id FROM table_expression) SELECT DISTINCT random() AS name1 FROM table_expression WHERE name1=name1 GROUP BY id  HAVING sum(len) < interval '5 hours' WINDOW  w AS (PARTITION BY depname ORDER BY salary DESC) INTERSECT DISTINCT (SELECT * FROM others) ORDER BY salary ASC OFFSET start FETCH NEXT ROW ONLY FOR NO KEY UPDATE;

WITH query_name (id) AS (SELECT id FROM table_expression) SELECT DISTINCT ON (col1) random() AS name1 FROM table_expression WHERE name1=name1 GROUP BY id  HAVING sum(len) < interval '5 hours' WINDOW  w AS (PARTITION BY depname ORDER BY salary DESC) EXCEPT (SELECT * FROM others) ORDER BY salary USING > NULLS FIRST OFFSET start FETCH NEXT ROW ONLY FOR SHARE;

WITH query_name (id) AS (SELECT id FROM table_expression) SELECT DISTINCT ON (col1) random() AS name1 FROM table_expression WHERE name1=name1 GROUP BY id  HAVING sum(len) < interval '5 hours' WINDOW  w AS (PARTITION BY depname ORDER BY salary DESC) EXCEPT (SELECT * FROM others) ORDER BY salary USING > NULLS FIRST OFFSET start FETCH NEXT ROW ONLY FOR KEY SHARE OF table_name NOWAIT;

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