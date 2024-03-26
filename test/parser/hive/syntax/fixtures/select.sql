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

-- Subqueries in the WHERE Clause
SELECT A
FROM T1
WHERE EXISTS (SELECT B FROM T2 WHERE T1.X = T2.Y);

-- explode (array)
SELECT tf.* FROM (SELECT 0) t lateral view explode(ARRAY('A','B','C')) tf AS col;
-- explode (map)
SELECT tf.* FROM (SELECT 0) t lateral view explode(map('A',10,'B',20,'C',30)) tf AS KEY,VALUE;
-- posexplode (array)
SELECT tf.* FROM (SELECT 0) t lateral view posexplode(ARRAY('A','B','C')) tf AS pos,val;
-- inline (array of structs)
SELECT tf.* FROM (SELECT 0) t lateral view inline(ARRAY(STRUCT('A',10,DATE '2015-01-01'),STRUCT('B',20,DATE '2016-02-02'))) tf AS col1,col2,col3;
-- stack (values)
SELECT tf.* FROM (SELECT 0) t lateral view stack(2,'A',10,DATE '2015-01-01','B',20,DATE '2016-01-01') tf AS col0,col1,col2;


-- Lateral View Syntax
SELECT adid, count(1)
FROM pageAds LATERAL VIEW explode(adid_list) adTable AS adid
GROUP BY adid;

-- Multiple Lateral Views
SELECT * FROM exampleTable
LATERAL VIEW explode(col1) myTable1 AS myCol1
LATERAL VIEW explode(myCol1) myTable2 AS myCol2;

-- Outer Lateral Views
SELECT * FROM src LATERAL VIEW explode(array()) C AS a limit 10;
SELECT * FROM src LATERAL VIEW OUTER explode(array()) C AS a limit 10;

-- Windowing and Analytics Functions
SELECT a, COUNT(b) OVER (PARTITION BY c, d)
FROM T;

SELECT a, SUM(b) OVER (PARTITION BY c, d ORDER BY e, f)
FROM T;

SELECT a, AVG(b) OVER (PARTITION BY c ORDER BY d ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING)
FROM T;

SELECT a, SUM(b) OVER w
FROM T
WINDOW w AS (PARTITION BY c ORDER BY d ROWS UNBOUNDED PRECEDING);

SELECT a, LEAD(a) OVER (PARTITION BY b ORDER BY C)
FROM T;

SELECT a, LAG(a, 3, 0) OVER (PARTITION BY b ORDER BY C)
FROM T;

SELECT a, COUNT(distinct a) OVER (PARTITION BY b)
FROM T;

-- Common Table Expression
-- chaining CTEs
WITH q1 AS ( SELECT key FROM q2 WHERE key = '5'),
q2 AS ( SELECT key FROM src WHERE key = '5')
SELECT * FROM (SELECT key FROM q1) a;
  
-- union example
WITH q1 AS (SELECT * FROM src WHERE key= '5'),
q2 AS (SELECT * FROM src s2 WHERE key = '4')
SELECT * FROM q1 union all SELECT * FROM q2;

-- view example
CREATE VIEW v1 AS
WITH q1 AS ( SELECT key FROM src WHERE key = '5')
SELECT * FROM q1;
SELECT * FROM v1;
  
-- view example, name collision
CREATE VIEW v1 AS
WITH q1 AS ( SELECT key FROM src WHERE key = '5')
SELECT * FROM q1;
WITH q1 AS ( SELECT key FROM src WHERE key = '4')
SELECT * FROM v1;

-- GROUPING SETS clause
-- GROUPING SET queries and the equivalent GROUP BY queries
SELECT a, b, SUM(c) FROM tab1 GROUP BY a, b GROUPING SETS ( (a,b) );

SELECT a, b, SUM( c ) FROM tab1 GROUP BY a, b GROUPING SETS ( (a, b), a, b, ( ) );

-- Grouping__ID function
SELECT key, value, GROUPING__ID, count(*)
FROM T1
GROUP BY key, value WITH ROLLUP;

-- Grouping function
SELECT key, value, GROUPING__ID,
  grouping(key, value), grouping(value, key), grouping(key), grouping(value),
  count(*)
FROM T1
GROUP BY key, value WITH ROLLUP;

-- LanguageManual Explain -- EXPLAIN Syntax
EXPLAIN
FROM src INSERT OVERWRITE TABLE dest_g1 SELECT src.key, sum(substr(src.value,4)) GROUP BY src.key;

-- LanguageManual Explain -- The CBO Clause
EXPLAIN CBO
WITH customer_total_return AS
(SELECT sr_customer_sk AS ctr_customer_sk,
  sr_store_sk AS ctr_store_sk,
  SUM(SR_FEE) AS ctr_total_return
  FROM store_returns, date_dim
  WHERE sr_returned_date_sk = d_date_sk
    AND d_year =2000
  GROUP BY sr_customer_sk, sr_store_sk)
SELECT c_customer_id
FROM customer_total_return ctr1, store, customer
WHERE ctr1.ctr_total_return > (SELECT AVG(ctr_total_return)*1.2
FROM customer_total_return ctr2
WHERE ctr1.ctr_store_sk = ctr2.ctr_store_sk)
  AND s_store_sk = ctr1.ctr_store_sk
  AND s_state = 'NM'
  AND ctr1.ctr_customer_sk = c_customer_sk
ORDER BY c_customer_id
LIMIT 100;

-- LanguageManual Explain -- The AST Clause
EXPLAIN AST
FROM src INSERT OVERWRITE TABLE dest_g1 SELECT src.key, sum(substr(src.value,4)) GROUP BY src.key;

-- LanguageManual Explain -- The DEPENDENCY Clause
EXPLAIN DEPENDENCY
  SELECT key, count(1) FROM srcpart WHERE ds IS NOT NULL GROUP BY key;

-- LanguageManual Explain -- The AUTHORIZATION Clause
EXPLAIN AUTHORIZATION
  SELECT * FROM src JOIN srcpart;

-- LanguageManual Explain -- The LOCKS Clause
EXPLAIN LOCKS UPDATE target SET b = 1 WHERE p IN (SELECT t.q1 FROM source t WHERE t.a1=5);

-- LanguageManual Explain -- User-level Explain Output
EXPLAIN select sum(hash(key)), sum(hash(value)) from src_orc_merge_test_part where ds='2012-01-03' and ts='2012-01-03+14:46:31';

-- FROM xx SELECT
FROM table_name_1 SELECT col1, col2;

FROM a JOIN b ON (a.id = b.id AND a.department = b.department) SELECT a.*;