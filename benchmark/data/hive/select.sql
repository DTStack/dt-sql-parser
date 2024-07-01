-- Select Syntax
SELECT col1, col2 FROM table_name_1;

SELECT ALL col3, col4 FROM table_name_2 WHERE amount > 10 AND region = "US" GROUP BY col5 ORDER BY col6 CLUSTER BY col7 LIMIT 2,5;

-- WHERE Clause
SELECT * FROM sales WHERE amount > 10 AND region = "US";

-- ALL and DISTINCT Clauses
SELECT DISTINCT col1 FROM t1;

-- Partition Based Queries
SELECT page_views.*
FROM page_views
WHERE page_views.`date` >= '2018-03-01' AND page_views.`date` <= '2018-03-31';

SELECT page_views.*
FROM page_views JOIN dim_users
  ON (page_views.user_id = dim_users.id AND page_views.adate >= '2008-03-01' AND page_views.adate <= '2008-03-31');

-- HAVING Clause
SELECT col1 FROM t1 GROUP BY col1 HAVING SUM(col2) > 10;

SELECT col1 FROM (SELECT col1, SUM(col2) AS col2sum FROM t1 GROUP BY col1) t2 WHERE t2.col2sum > 10;

-- LIMIT Clause
SELECT * FROM customers LIMIT 5;

SELECT * FROM customers ORDER BY create_date LIMIT 5;

SELECT * FROM customers ORDER BY create_date LIMIT 2,5;

-- REGEX Column Specification
SELECT `(ds|hr)?+.+` FROM sales;

-- Syntax of Sort By
SELECT key, value FROM src SORT BY key ASC, value DESC;

-- Distribute By
SELECT col1, col2 FROM t1 DISTRIBUTE BY col1 SORT BY col1 ASC, col2 DESC;

-- Join Syntax
SELECT a.* FROM a JOIN b ON (a.id = b.id AND a.department = b.department);

-- MapJoin Restrictions
SELECT /*+ MAPJOIN(b) */ a.key, a.value
FROM a JOIN b ON a.key = b.key;

-- Union Syntax
-- UNION within a FROM Clause
SELECT u.id, actions.adate
FROM (
    SELECT av.uid AS uid
    FROM action_video av
    WHERE av.adate = '2008-06-03'
    UNION ALL
    SELECT ac.uid AS uid
    FROM action_comment ac
    WHERE ac.adate = '2008-06-03'
 ) actions JOIN users u ON (u.id = actions.uid);

-- Unions in DDL and Insert Statements--Applying Subclauses
SELECT key FROM (SELECT key FROM src ORDER BY key LIMIT 10)subq1
UNION
SELECT key FROM (SELECT key FROM src1 ORDER BY key LIMIT 10)subq2;

SELECT key FROM src
UNION
SELECT key FROM src1 
ORDER BY key LIMIT 10;

-- Unions in DDL and Insert Statements--Column Aliases for Schema Matching
INSERT OVERWRITE TABLE target_table
  SELECT name, id, category FROM source_table_1
  UNION ALL
  SELECT name, id, "Category159" as category FROM source_table_2;

-- Unions in DDL and Insert Statements--Column Type Conversion
SELECT name, id, cast('2001-01-01' as date) d FROM source_table_1
UNION ALL
SELECT name, id, hiredate as d FROM source_table_2;

-- Sampling Bucketized Table
SELECT *
FROM source TABLESAMPLE(BUCKET 3 OUT OF 32 ON rand()) s;

-- Block Sampling
SELECT *
FROM source TABLESAMPLE(0.1 PERCENT) s;

SELECT *
FROM source TABLESAMPLE(100M) s;

-- Subqueries in the FROM Clause
SELECT t3.col
FROM (
  SELECT a+b AS col
  FROM t1
  UNION ALL
  SELECT c+d AS col
  FROM t2
) t3;
