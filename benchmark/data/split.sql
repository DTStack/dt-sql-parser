CREATE TEMPORARY TABLE list_bucket_multiple (col1 STRING, col2 INT, col3 STRING);

CREATE TEMPORARY EXTERNAL TABLE list_bucket_multiple (col1 STRING, col2 INT, col3 STRING);

CREATE TEMPORARY EXTERNAL TABLE IF NOT EXISTS list_bucket_multiple (col1 STRING, col2 INT, col3 STRING);

CREATE TEMPORARY EXTERNAL TABLE IF NOT EXISTS list_bucket_multiple (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TEMPORARY EXTERNAL TABLE IF NOT EXISTS list_bucket_multiple (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment1' PARTITIONED BY (`date` STRING COMMENT 'column_comment');

CREATE TEMPORARY EXTERNAL TABLE IF NOT EXISTS list_bucket_multiple (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment2' PARTITIONED BY (`date` STRING COMMENT 'column_comment') CLUSTERED BY (col1, col2) INTO 32 BUCKETS;

CREATE TEMPORARY EXTERNAL TABLE IF NOT EXISTS list_bucket_multiple (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment3' PARTITIONED BY (`date` STRING COMMENT 'column_comment') CLUSTERED BY (col1, col2) SORTED BY (col1 ASC) INTO 22 BUCKETS;

CREATE TEMPORARY EXTERNAL TABLE IF NOT EXISTS list_bucket_multiple (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment4' PARTITIONED BY (`date` STRING COMMENT 'column_comment') CLUSTERED BY (col1, col2) SORTED BY (col1 ASC) INTO 34 BUCKETS SKEWED BY (col1, col2) ON (('s1', 1), ('s3', 3), ('s13', 13), ('s78', 78)) STORED AS DIRECTORIES;

CREATE TABLE page_view(
    viewTime INT,
    userid BIGINT,
    page_url STRING,
    referrer_url STRING,
    ip STRING COMMENT 'IP Address of the User'
) COMMENT 'This is the page view table' PARTITIONED BY(dt STRING, country STRING) CLUSTERED BY(userid) SORTED BY(viewTime) INTO 32 BUCKETS ROW FORMAT DELIMITED FIELDS TERMINATED BY '\001' COLLECTION ITEMS TERMINATED BY '\002' MAP KEYS TERMINATED BY '\003' STORED AS SEQUENCEFILE;

CREATE TEMPORARY EXTERNAL TABLE page_view(
    viewTime INT,
    userid BIGINT,
    page_url STRING,
    referrer_url STRING,
    ip STRING COMMENT 'IP Address of the User'
) COMMENT 'This is the page view table' PARTITIONED BY(dt STRING, country STRING) CLUSTERED BY(userid) SORTED BY(viewTime) INTO 32 BUCKETS ROW FORMAT DELIMITED FIELDS TERMINATED BY '\001' COLLECTION ITEMS TERMINATED BY '\002' MAP KEYS TERMINATED BY '\003' STORED AS TEXTFILE;

CREATE TEMPORARY EXTERNAL TABLE IF NOT EXISTS page_view(
    viewTime INT,
    userid BIGINT,
    page_url STRING,
    referrer_url STRING,
    ip STRING COMMENT 'IP Address of the User'
) COMMENT 'This is the page view table' PARTITIONED BY(dt STRING, country STRING) CLUSTERED BY(userid) SORTED BY(viewTime) INTO 32 BUCKETS ROW FORMAT DELIMITED FIELDS TERMINATED BY '\001' COLLECTION ITEMS TERMINATED BY '\002' MAP KEYS TERMINATED BY '\003' STORED AS RCFILE;

CREATE TEMPORARY EXTERNAL TABLE IF NOT EXISTS page_view(
    viewTime INT,
    userid BIGINT,
    page_url STRING,
    referrer_url STRING,
    ip STRING COMMENT 'IP Address of the User'
) COMMENT 'This is the page view table' PARTITIONED BY(dt STRING, country STRING) CLUSTERED BY(userid) SORTED BY(viewTime) INTO 32 BUCKETS ROW FORMAT DELIMITED FIELDS TERMINATED BY '\001' COLLECTION ITEMS TERMINATED BY '\002' MAP KEYS TERMINATED BY '\003' STORED AS ORC LOCATION '/hsd_path';

CREATE TEMPORARY EXTERNAL TABLE IF NOT EXISTS page_view(
    viewTime INT,
    userid BIGINT,
    page_url STRING,
    referrer_url STRING,
    ip STRING COMMENT 'IP Address of the User'
) COMMENT 'This is the page view table' PARTITIONED BY(dt STRING, country STRING) CLUSTERED BY(userid) SORTED BY(viewTime) INTO 32 BUCKETS ROW FORMAT DELIMITED FIELDS TERMINATED BY '\001' COLLECTION ITEMS TERMINATED BY '\002' MAP KEYS TERMINATED BY '\003' STORED AS PARQUET LOCATION '/hsd_path' AS
SELECT
    (key % 1024) new_key,
    concat(key, value) key_value_pair
FROM
    key_value_store SORT BY new_key,
    key_value_pair;


CREATE TABLE list_bucket_single (key STRING, value STRING)
  SKEWED BY (key) ON (1,5,6) STORED AS AVRO;

CREATE TRANSACTIONAL TABLE transactional_table_test(key STRING, value STRING) PARTITIONED BY(ds STRING) STORED AS INPUTFORMAT 'inputfilename' OUTPUTFORMAT 'outputfilename';

CREATE TABLE IF NOT EXISTS copy_table LIKE origin_table;

CREATE TEMPORARY TABLE IF NOT EXISTS copy_table LIKE origin_table;

CREATE TEMPORARY EXTERNAL TABLE IF NOT EXISTS copy_table LIKE origin_table;

CREATE TEMPORARY EXTERNAL TABLE IF NOT EXISTS copy_table LIKE origin_table LOCATION '/hdfs_path';

CREATE TABLE IF NOT EXISTS derived_table AS
SELECT
    *
FROM
    origin_table;

CREATE TABLE `mydb.t1`(
    `id` INT,
    `dept_no` INT,
    `addr` STRING,
    `tel` STRING,
    `hobby` ARRAY < STRING >,
    `add` MAP < STRING,
    STRING >
) PARTITIONED BY(`date` STRING) ROW FORMAT DELIMITED FIELDS TERMINATED BY ',' COLLECTION ITEMS TERMINATED BY '-' MAP KEYS TERMINATED BY ':';

CREATE EXTERNAL TABLE mydb.ext_table(
    id INT,
    name STRING,
    hobby ARRAY < STRING >,
    add
        MAP < STRING,
        STRING >
) ROW FORMAT DELIMITED FIELDS TERMINATED BY ',' COLLECTION ITEMS TERMINATED BY '-' MAP KEYS TERMINATED BY ':' LOCATION '/user/mydb/ext_table' TBLPROPERTIES('author' = 'hayden', 'desc' = '一个外部测试表');

CREATE MANAGED TABLE managed_table (
    id INT COMMENT 'ID',
    name STRING COMMENT '名称'
) COMMENT '测试分桶' CLUSTERED BY(id) SORTED BY (id) INTO 4 BUCKETS STORED BY 'org.apache.hadoop.hive.hbase.HBaseStorageHandler';

CREATE TABLE list_bucket_multiple (col1 STRING, col2 INT, col3 STRING) SKEWED BY (col1, col2) ON (('s1', 1), ('s3', 3), ('s13', 13), ('s78', 78)) STORED AS JSONFILE;

CREATE TABLE IF NOT EXISTS t1 (
    id INT COMMENT '索引',
    name STRING COMMENT '姓名',
    age SMALLINT COMMENT '年龄'
) COMMENT "t1表" lifecycle 29;
CREATE MANAGED TABLE managed_table (
    id INT COMMENT 'ID',
    name STRING COMMENT '名称'
) COMMENT '测试分桶' CLUSTERED BY(id) SORTED BY (id) INTO 4 BUCKETS STORED BY 'org.apache.hadoop.hive.hbase.HBaseStorageHandler' lifecycle 29;
CREATE TABLE employee (
    eid int,
    name String,
    salary String,
    destination String)
    STORED AS ORC
    lifecycle 10;


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

-- Show Databases
SHOW SCHEMAS;

SHOW DATABASES LIKE 'identifier_with_wildcards';

-- Show Connectors
SHOW CONNECTORS;

-- Show Tables
SHOW TABLES;

SHOW TABLES IN db1 'identifier_with_wildcards';

-- Show Views
SHOW VIEWS;

SHOW VIEWS FROM schema1 LIKE 'pattern_with_wildcards';

SHOW MATERIALIZED VIEWS IN database2 LIKE 'pattern_with_wildcards';

-- Show Partitions
SHOW PARTITIONS tbl1;

SHOW PARTITIONS table_name PARTITION(ds='2010-03-03', hr='12');

SHOW PARTITIONS databaseFoo.tableBar WHERE hr >= 10 AND ds='2010-03-03' ORDER BY hr DESC LIMIT 10;  

-- Show Table/Partition Extended
SHOW TABLE EXTENDED LIKE part_table;

SHOW TABLE EXTENDED IN database3 LIKE 'identifier_with_wildcards' PARTITION(ds='2010-03-03', hr='12');

-- Show Table Properties
SHOW TBLPROPERTIES tblname;

SHOW TBLPROPERTIES tblname("foo");

-- Show Create Table
SHOW CREATE TABLE db.tbl1;

-- Show Indexes
SHOW INDEX ON idx_tbl;

SHOW FORMATTED INDEXES ON idx_tbl2 FROM db_1;

-- Show Columns
SHOW COLUMNS FROM tble;

SHOW COLUMNS IN table_name FROM db_1 LIKE 'pattern_with_wildcards';

-- Show Functions
SHOW FUNCTIONS;

SHOW FUNCTIONS LIKE "<pattern>";

-- Show Locks
SHOW LOCKS tbl1;

SHOW LOCKS tbl2 EXTENDED;

SHOW LOCKS tbl3 PARTITION (ds='2010-03-03', hr='12');

SHOW LOCKS tbl4 PARTITION (ds='2010-03-03', hr='12') EXTENDED;

SHOW LOCKS DATABASE db1; 

-- Show Conf
SHOW CONF 'conf1';

-- Show Transactions
SHOW TRANSACTIONS;

-- Show Compactions
SHOW COMPACTIONS;

SHOW COMPACTIONS DATABASE db1;

SHOW COMPACTIONS tbl0;

SHOW COMPACTIONS db1.tbl0 
PARTITION (p=101,day='Monday') 
POOL 'pool0' 
TYPE 'minor' 
STATUS 'ready for clean' 
ORDER BY cq_table DESC, cq_state
LIMIT 42;

-- Show Roles
SHOW ROLES;

SHOW CURRENT ROLES;

-- Show Role Grant
SHOW ROLE GRANT USER user1;

SHOW ROLE GRANT ROLE `role`;

-- Show Principals
SHOW PRINCIPALS role1;

-- Show Grant
SHOW GRANT USER ashutosh ON TABLE hivejiratable;

SHOW GRANT ROLE role1 ON ALL; 

SHOW GRANT ON TABLE hivejiratable;

-- Rename Table
ALTER TABLE tbl1 RENAME TO tbl2;

-- Alter Table Properties
ALTER TABLE mydb.tb22 SET TBLPROPERTIES ('creator'='hayden');

-- Alter Table Comment
ALTER TABLE mydb.tb22 SET TBLPROPERTIES ('comment' = 'This is a new comment!');

-- Add SerDe Properties
ALTER TABLE employee_tb SET SERDE 'com.dt.test'; 

ALTER TABLE employee_tb PARTITION (
    `pt1`='1'
) SET SERDE 'com.dt.test'; 

ALTER TABLE employee_tb 
SET SERDE 'com.dt.test'
WITH SERDEPROPERTIES ('field.delim' = ',');

ALTER TABLE employee_tb PARTITION (
    `pt1`='1'
)
SET SERDE 'com.dt.test'
WITH SERDEPROPERTIES ('field.delim' = ',');

ALTER TABLE sale_rbl 
PARTITION (
    `pt1`='1'
)
SET SERDEPROPERTIES ('field.delim' = ',');

ALTER TABLE sale_rbl SET SERDEPROPERTIES ('field.delim' = ',');

-- Remove SerDe Properties
ALTER TABLE sale_rbl UNSET SERDEPROPERTIES ('field.delim');

ALTER TABLE sale_rbl PARTITION (
    `pt1`='1'
) UNSET SERDEPROPERTIES ('field.delim');

-- Alter Table Storage Properties
ALTER TABLE students 
CLUSTERED BY (id, `name`, age)
SORTED BY (age)
INTO 2 BUCKETS;

ALTER TABLE students 
CLUSTERED BY (id, `name`, age) 
INTO 2 BUCKETS;

-- Alter Table Skewed or Stored as Directories
ALTER TABLE dt_shop 
SKEWED BY (id, cost)
ON (('id',1), ('cost', 1000));

ALTER TABLE dt_shop 
SKEWED BY (id, cost)
ON (('id',1), ('cost', 1000)) 
STORED AS DIRECTORIES;

-- Alter Table Not Skewed
ALTER TABLE dt_shop NOT SKEWED;

-- Alter Table Not Stored as Directories
ALTER TABLE dt_shop NOT STORED AS DIRECTORIES;

-- Alter Table Set Skewed Location
ALTER TABLE dt_shop SET SKEWED LOCATION ('id'='location1', "cost"="loaction2"  );

-- Alter Table Constraints
ALTER TABLE tbl1 
ADD CONSTRAINT const1 
PRIMARY KEY (id) 
DISABLE NOVALIDATE;

ALTER TABLE tbl2 
ADD CONSTRAINT const2 
FOREIGN KEY (id, `name`) 
REFERENCES refer_tb(rid, rname) 
DISABLE NOVALIDATE RELY;

ALTER TABLE tbl3
ADD CONSTRAINT const3 
UNIQUE (`name`, `age`) 
DISABLE NOVALIDATE;

ALTER TABLE tbl4 
CHANGE COLUMN `col1` `col2` STRING CONSTRAINT const4 
NOT NULL ENABLE;

ALTER TABLE tbl5 
CHANGE COLUMN `col3` `col4` INT CONSTRAINT const5 
DEFAULT 998 ENABLE;

ALTER TABLE tbl6 
CHANGE COLUMN col5 col6  MAP<STRING, STRING> CONSTRAINT const6 
CHECK (1) ENABLE;
 
ALTER TABLE tbl7 DROP CONSTRAINT remove_const;

-- Alter Partition

ALTER TABLE add_par_tbl 
ADD 
PARTITION (`pt1` = 1);

ALTER TABLE add_par_tbl 
ADD 
PARTITION (`pt1` = 1) LOCATION '/pat/loc';

ALTER TABLE add_par_tbl 
ADD 
PARTITION (`pt1` = 1) LOCATION '/pat/loc' 
PARTITION (`pt2` = 2, `pt3`=3) LOCATION '/pat/loc' ;

ALTER TABLE add_par_tbl 
ADD IF NOT EXISTS 
PARTITION (`pt1` = 1);

ALTER TABLE add_par_tbl 
ADD IF NOT EXISTS 
PARTITION (`pt1` = 1) LOCATION '/pat/loc';

ALTER TABLE add_par_tbl 
ADD IF NOT EXISTS 
PARTITION (`pt1` = 1) LOCATION '/pat/loc' 
PARTITION (`pt2` = 2, `pt3`=3) LOCATION '/pat/loc';

-- Rename Partition
ALTER TABLE ren_par_tbl
PARTITION (`pt1`=1) 
RENAME TO PARTITION (`pt2`=2) ;

-- Exchange Partition
ALTER TABLE ex_part_tbl2 
EXCHANGE PARTITION (`pt1`=1)
WITH TABLE ex_part_tbl1;

ALTER TABLE ex_part_tbl2 
EXCHANGE PARTITION (`pt1`=1, `pt2`=2)
WITH TABLE ex_part_tbl1;

-- Recover Partitions
MSCK TABLE rec_tbl;

MSCK REPAIR TABLE rec_tbl;

MSCK REPAIR TABLE rec_tbl SYNC PARTITIONS;

MSCK REPAIR TABLE rec_tbl ADD PARTITIONS;

MSCK REPAIR TABLE rec_tbl DROP PARTITIONS;

ALTER TABLE rec_tbl RECOVER PARTITIONS;

-- Drop Partitions
ALTER TABLE dr_tbl1 DROP PARTITION (`pt1`=1);

ALTER TABLE dr_tbl1 DROP PARTITION (`pt1`=1, `pt2`=2);

ALTER TABLE dr_tbl1 DROP PARTITION (`pt1`=1) IGNORE PROTECTION;

ALTER TABLE dr_tbl1 DROP PARTITION (`pt1`=1) IGNORE PROTECTION PURGE;

ALTER TABLE dr_tbl2 DROP IF EXISTS PARTITION (`pt2`=2) PURGE;

ALTER TABLE dr_tbl2 DROP IF EXISTS PARTITION (`pt2`=2) IGNORE PROTECTION PURGE;

-- Archive Partition
ALTER TABLE arch_pt_tbl1 ARCHIVE PARTITION (`pt1`=1);

ALTER TABLE arch_pt_tbl2 UNARCHIVE PARTITION (`pt2`=2) ;

-- Alter Table/Partition File Format
ALTER TABLE tbl1 SET FILEFORMAT orc;

ALTER TABLE tbl2 PARTITION (`pt1`=1) SET FILEFORMAT orc;

-- Alter Table/Partition Location
ALTER TABLE tbl3 SET LOCATION "new location";

ALTER TABLE tbl4 PARTITION (`pt1`=1) SET LOCATION "new location";

-- Alter Table/Partition Touch
ALTER TABLE tbl5 TOUCH;

ALTER TABLE tbl6 TOUCH PARTITION (`pt1`=1);

-- Alter Table/Partition Protections
ALTER TABLE tbl7 ENABLE NO_DROP;

ALTER TABLE tbl7 DISABLE NO_DROP;

ALTER TABLE tbl7 ENABLE NO_DROP CASCADE;

ALTER TABLE tbl7 DISABLE NO_DROP CASCADE;

ALTER TABLE tbl8 PARTITION (`pt1`=1) DISABLE NO_DROP;

ALTER TABLE tbl8 PARTITION (`pt1`=1) ENABLE NO_DROP;

ALTER TABLE tbl8 PARTITION (`pt1`=1) DISABLE NO_DROP CASCADE;

ALTER TABLE tbl8 PARTITION (`pt1`=1) ENABLE NO_DROP CASCADE;
  
ALTER TABLE tbl9 DISABLE OFFLINE;

ALTER TABLE tbl9 ENABLE OFFLINE;

ALTER TABLE db1.tbl PARTITION (`pt1`=1) ENABLE OFFLINE;

ALTER TABLE db1.tbl PARTITION (`pt1`=1) DISABLE OFFLINE;

ALTER TABLE foo PARTITION (ds='2008-04-08', hr=11) CHANGE COLUMN dec_column_name dec_column_name DECIMAL(38,18);

-- Alter Table/Partition Compact
ALTER TABLE tbl_com COMPACT 'compaction_type';

ALTER TABLE tbl_com2 PARTITION (pt1 = 'partition_value')
COMPACT 'compaction_type';

ALTER TABLE tbl_com2 PARTITION (pt1 = 'partition_value')
COMPACT 'compaction_type' AND WAIT;

ALTER TABLE tbl_com2 PARTITION (pt1 = 'partition_value')
COMPACT 'compaction_type' AND WAIT
CLUSTERED INTO 1 BUCKETS;

ALTER TABLE tbl_com2 PARTITION (pt1 = 'partition_value')
COMPACT 'compaction_type' AND WAIT
CLUSTERED INTO 1 BUCKETS
ORDER BY col1;

ALTER TABLE tbl_com2 PARTITION (pt1 = 'partition_value')
COMPACT 'compaction_type' AND WAIT
CLUSTERED INTO 1 BUCKETS
ORDER BY col1
POOL 'pool1';

ALTER TABLE tbl_com2 PARTITION (pt1 = 'partition_value')
COMPACT 'compaction_type' AND WAIT
CLUSTERED INTO 1 BUCKETS
ORDER BY col1
POOL 'pool1'
WITH OVERWRITE TBLPROPERTIES ("propKey1"="propVal");

-- Alter Table/Partition Concatenate
ALTER TABLE tbl22 CONCATENATE;

ALTER TABLE tbl23 PARTITION (pt1 = 'anyValue') CONCATENATE;

ALTER TABLE tbl23 PARTITION (pt1 = 'anyValue', pt2 = 'anyValue2') CONCATENATE;

-- Alter Table/Partition Update columns
ALTER TABLE tbl24 UPDATE COLUMNS;

ALTER TABLE tbl24 PARTITION (pt1 = 'partition_value') UPDATE COLUMNS;

ALTER TABLE tbl24 PARTITION (pt1 = 'partition_value', pt2 = 'partition_value2') UPDATE COLUMNS;

-- Change Column Name/Type/Position/Comment
ALTER TABLE test_change CHANGE a a1 INT;

ALTER TABLE test_change CHANGE COLUMN a a1 INT;

ALTER TABLE test_change PARTITION (pt1 = 'partition_value')  CHANGE c c1 INT FIRST;

ALTER TABLE test_change PARTITION (pt1 = 'partition_value')  CHANGE c c1 INT FIRST;

ALTER TABLE test_change PARTITION (pt1 = 'partition_value')  CHANGE COLUMN c c1 INT FIRST;

ALTER TABLE test_change PARTITION (pt1 = 'partition_value')  CHANGE COLUMN c c1 INT FIRST;

ALTER TABLE test_change PARTITION (pt1 = 'partition_value')  CHANGE COLUMN c c1 INT COMMENT 'this is comment1' FIRST;

ALTER TABLE test_change PARTITION (pt1 = 'partition_value')  CHANGE COLUMN c c1 INT COMMENT 'this is comment1' AFTER cc;

ALTER TABLE test_change PARTITION (pt1 = 'partition_value')  CHANGE COLUMN c c1 INT COMMENT 'this is comment1' FIRST CASCADE;

ALTER TABLE test_change PARTITION (pt1 = 'partition_value')  CHANGE COLUMN c c1 INT COMMENT 'this is comment1' AFTER RESTRICT;

ALTER TABLE test_change CHANGE a1 a1 INT COMMENT 'this is column a1' RESTRICT;

ALTER TABLE test_change CHANGE a1 a2 STRING AFTER b CASCADE;

-- Add/Replace Columns
ALTER TABLE rp_col_tbl1 ADD COLUMNS (`col1` INT);

ALTER TABLE rp_col_tbl2 REPLACE COLUMNS (`col2` INT);

ALTER TABLE rp_col_tbl1 ADD COLUMNS (`col1` INT) CASCADE;

ALTER TABLE rp_col_tbl2 REPLACE COLUMNS (`col2` INT) RESTRICT;

ALTER TABLE rp_col_tbl1 PARTITION (`pt1`=1) ADD COLUMNS (`col1` INT) CASCADE;

ALTER TABLE rp_col_tbl2 PARTITION (`pt1`=1) REPLACE COLUMNS (`col2` INT) RESTRICT;

ALTER TABLE rp_col_tbl2 
PARTITION (`pt1`=1)
ADD COLUMNS (`col3` INT COMMENT 'a new col')
CASCADE;

-- Partial Partition Specification 
ALTER TABLE foo PARTITION (ds='2008-04-08', hr=11) CHANGE COLUMN dec_column_name dec_column_name DECIMAL(38,18);

-- Rename Table
ALTER TABLE tbl1 RENAME TO tbl2;

-- Alter Table Properties
ALTER TABLE mydb.tb22 SET TBLPROPERTIES ('creator'='hayden');

-- Alter Table Comment
ALTER TABLE mydb.tb22 SET TBLPROPERTIES ('comment' = 'This is a new comment!');

-- Add SerDe Properties
ALTER TABLE employee_tb SET SERDE 'com.dt.test'; 

ALTER TABLE employee_tb PARTITION (
    `pt1`='1'
) SET SERDE 'com.dt.test'; 

ALTER TABLE employee_tb 
SET SERDE 'com.dt.test'
WITH SERDEPROPERTIES ('field.delim' = ',');

ALTER TABLE employee_tb PARTITION (
    `pt1`='1'
)
SET SERDE 'com.dt.test'
WITH SERDEPROPERTIES ('field.delim' = ',');

ALTER TABLE sale_rbl 
PARTITION (
    `pt1`='1'
)
SET SERDEPROPERTIES ('field.delim' = ',');

ALTER TABLE sale_rbl SET SERDEPROPERTIES ('field.delim' = ',');

-- Remove SerDe Properties
ALTER TABLE sale_rbl UNSET SERDEPROPERTIES ('field.delim');

ALTER TABLE sale_rbl PARTITION (
    `pt1`='1'
) UNSET SERDEPROPERTIES ('field.delim');

-- Alter Table Storage Properties
ALTER TABLE students 
CLUSTERED BY (id, `name`, age)
SORTED BY (age)
INTO 2 BUCKETS;

ALTER TABLE students 
CLUSTERED BY (id, `name`, age) 
INTO 2 BUCKETS;

-- Alter Table Skewed or Stored as Directories
ALTER TABLE dt_shop 
SKEWED BY (id, cost)
ON (('id',1), ('cost', 1000));

ALTER TABLE dt_shop 
SKEWED BY (id, cost)
ON (('id',1), ('cost', 1000)) 
STORED AS DIRECTORIES;

-- Alter Table Not Skewed
ALTER TABLE dt_shop NOT SKEWED;

-- Alter Table Not Stored as Directories
ALTER TABLE dt_shop NOT STORED AS DIRECTORIES;

-- Alter Table Set Skewed Location
ALTER TABLE dt_shop SET SKEWED LOCATION ('id'='location1', "cost"="loaction2"  );

-- Alter Table Constraints
ALTER TABLE tbl1 
ADD CONSTRAINT const1 
PRIMARY KEY (id) 
DISABLE NOVALIDATE;

ALTER TABLE tbl2 
ADD CONSTRAINT const2 
FOREIGN KEY (id, `name`) 
REFERENCES refer_tb(rid, rname) 
DISABLE NOVALIDATE RELY;

ALTER TABLE tbl3
ADD CONSTRAINT const3 
UNIQUE (`name`, `age`) 
DISABLE NOVALIDATE;

ALTER TABLE tbl4 
CHANGE COLUMN `col1` `col2` STRING CONSTRAINT const4 
NOT NULL ENABLE;

ALTER TABLE tbl5 
CHANGE COLUMN `col3` `col4` INT CONSTRAINT const5 
DEFAULT 998 ENABLE;

ALTER TABLE tbl6 
CHANGE COLUMN col5 col6  MAP<STRING, STRING> CONSTRAINT const6 
CHECK (1) ENABLE;
 
ALTER TABLE tbl7 DROP CONSTRAINT remove_const;

-- Alter Partition

ALTER TABLE add_par_tbl 
ADD 
PARTITION (`pt1` = 1);

ALTER TABLE add_par_tbl 
ADD 
PARTITION (`pt1` = 1) LOCATION '/pat/loc';

ALTER TABLE add_par_tbl 
ADD 
PARTITION (`pt1` = 1) LOCATION '/pat/loc' 
PARTITION (`pt2` = 2, `pt3`=3) LOCATION '/pat/loc' ;

ALTER TABLE add_par_tbl 
ADD IF NOT EXISTS 
PARTITION (`pt1` = 1);

ALTER TABLE add_par_tbl 
ADD IF NOT EXISTS 
PARTITION (`pt1` = 1) LOCATION '/pat/loc';

ALTER TABLE add_par_tbl 
ADD IF NOT EXISTS 
PARTITION (`pt1` = 1) LOCATION '/pat/loc' 
PARTITION (`pt2` = 2, `pt3`=3) LOCATION '/pat/loc';

-- Rename Partition
ALTER TABLE ren_par_tbl
PARTITION (`pt1`=1) 
RENAME TO PARTITION (`pt2`=2) ;

-- Exchange Partition
ALTER TABLE ex_part_tbl2 
EXCHANGE PARTITION (`pt1`=1)
WITH TABLE ex_part_tbl1;

ALTER TABLE ex_part_tbl2 
EXCHANGE PARTITION (`pt1`=1, `pt2`=2)
WITH TABLE ex_part_tbl1;

-- Recover Partitions
MSCK TABLE rec_tbl;

MSCK REPAIR TABLE rec_tbl;

MSCK REPAIR TABLE rec_tbl SYNC PARTITIONS;

MSCK REPAIR TABLE rec_tbl ADD PARTITIONS;

MSCK REPAIR TABLE rec_tbl DROP PARTITIONS;

ALTER TABLE rec_tbl RECOVER PARTITIONS;

-- Drop Partitions
ALTER TABLE dr_tbl1 DROP PARTITION (`pt1`=1);

ALTER TABLE dr_tbl1 DROP PARTITION (`pt1`=1, `pt2`=2);

ALTER TABLE dr_tbl1 DROP PARTITION (`pt1`=1) IGNORE PROTECTION;

ALTER TABLE dr_tbl1 DROP PARTITION (`pt1`=1) IGNORE PROTECTION PURGE;

ALTER TABLE dr_tbl2 DROP IF EXISTS PARTITION (`pt2`=2) PURGE;

ALTER TABLE dr_tbl2 DROP IF EXISTS PARTITION (`pt2`=2) IGNORE PROTECTION PURGE;

-- Archive Partition
ALTER TABLE arch_pt_tbl1 ARCHIVE PARTITION (`pt1`=1);

ALTER TABLE arch_pt_tbl2 UNARCHIVE PARTITION (`pt2`=2) ;

-- Alter Table/Partition File Format
ALTER TABLE tbl1 SET FILEFORMAT orc;

ALTER TABLE tbl2 PARTITION (`pt1`=1) SET FILEFORMAT orc;

-- Alter Table/Partition Location
ALTER TABLE tbl3 SET LOCATION "new location";

ALTER TABLE tbl4 PARTITION (`pt1`=1) SET LOCATION "new location";

-- Alter Table/Partition Touch
ALTER TABLE tbl5 TOUCH;

ALTER TABLE tbl6 TOUCH PARTITION (`pt1`=1);

-- Alter Table/Partition Protections
ALTER TABLE tbl7 ENABLE NO_DROP;

ALTER TABLE tbl7 DISABLE NO_DROP;

ALTER TABLE tbl7 ENABLE NO_DROP CASCADE;

ALTER TABLE tbl7 DISABLE NO_DROP CASCADE;

ALTER TABLE tbl8 PARTITION (`pt1`=1) DISABLE NO_DROP;

ALTER TABLE tbl8 PARTITION (`pt1`=1) ENABLE NO_DROP;

ALTER TABLE tbl8 PARTITION (`pt1`=1) DISABLE NO_DROP CASCADE;

ALTER TABLE tbl8 PARTITION (`pt1`=1) ENABLE NO_DROP CASCADE;
  
ALTER TABLE tbl9 DISABLE OFFLINE;

ALTER TABLE tbl9 ENABLE OFFLINE;

ALTER TABLE db1.tbl PARTITION (`pt1`=1) ENABLE OFFLINE;

ALTER TABLE db1.tbl PARTITION (`pt1`=1) DISABLE OFFLINE;

ALTER TABLE foo PARTITION (ds='2008-04-08', hr=11) CHANGE COLUMN dec_column_name dec_column_name DECIMAL(38,18);

-- Alter Table/Partition Compact
ALTER TABLE tbl_com COMPACT 'compaction_type';

ALTER TABLE tbl_com2 PARTITION (pt1 = 'partition_value')
COMPACT 'compaction_type';

ALTER TABLE tbl_com2 PARTITION (pt1 = 'partition_value')
COMPACT 'compaction_type' AND WAIT;

ALTER TABLE tbl_com2 PARTITION (pt1 = 'partition_value')
COMPACT 'compaction_type' AND WAIT
CLUSTERED INTO 1 BUCKETS;

ALTER TABLE tbl_com2 PARTITION (pt1 = 'partition_value')
COMPACT 'compaction_type' AND WAIT
CLUSTERED INTO 1 BUCKETS
ORDER BY col1;

ALTER TABLE tbl_com2 PARTITION (pt1 = 'partition_value')
COMPACT 'compaction_type' AND WAIT
CLUSTERED INTO 1 BUCKETS
ORDER BY col1
POOL 'pool1';

ALTER TABLE tbl_com2 PARTITION (pt1 = 'partition_value')
COMPACT 'compaction_type' AND WAIT
CLUSTERED INTO 1 BUCKETS
ORDER BY col1
POOL 'pool1'
WITH OVERWRITE TBLPROPERTIES ("propKey1"="propVal");

-- Alter Table/Partition Concatenate
ALTER TABLE tbl22 CONCATENATE;

ALTER TABLE tbl23 PARTITION (pt1 = 'anyValue') CONCATENATE;

ALTER TABLE tbl23 PARTITION (pt1 = 'anyValue', pt2 = 'anyValue2') CONCATENATE;

-- Alter Table/Partition Update columns
ALTER TABLE tbl24 UPDATE COLUMNS;

ALTER TABLE tbl24 PARTITION (pt1 = 'partition_value') UPDATE COLUMNS;

ALTER TABLE tbl24 PARTITION (pt1 = 'partition_value', pt2 = 'partition_value2') UPDATE COLUMNS;

-- Change Column Name/Type/Position/Comment
ALTER TABLE test_change CHANGE a a1 INT;

ALTER TABLE test_change CHANGE COLUMN a a1 INT;

ALTER TABLE test_change PARTITION (pt1 = 'partition_value')  CHANGE c c1 INT FIRST;

ALTER TABLE test_change PARTITION (pt1 = 'partition_value')  CHANGE c c1 INT FIRST;

ALTER TABLE test_change PARTITION (pt1 = 'partition_value')  CHANGE COLUMN c c1 INT FIRST;

ALTER TABLE test_change PARTITION (pt1 = 'partition_value')  CHANGE COLUMN c c1 INT FIRST;

ALTER TABLE test_change PARTITION (pt1 = 'partition_value')  CHANGE COLUMN c c1 INT COMMENT 'this is comment1' FIRST;

ALTER TABLE test_change PARTITION (pt1 = 'partition_value')  CHANGE COLUMN c c1 INT COMMENT 'this is comment1' AFTER cc;

ALTER TABLE test_change PARTITION (pt1 = 'partition_value')  CHANGE COLUMN c c1 INT COMMENT 'this is comment1' FIRST CASCADE;

ALTER TABLE test_change PARTITION (pt1 = 'partition_value')  CHANGE COLUMN c c1 INT COMMENT 'this is comment1' AFTER RESTRICT;

ALTER TABLE test_change CHANGE a1 a1 INT COMMENT 'this is column a1' RESTRICT;

ALTER TABLE test_change CHANGE a1 a2 STRING AFTER b CASCADE;

-- Add/Replace Columns
ALTER TABLE rp_col_tbl1 ADD COLUMNS (`col1` INT);

ALTER TABLE rp_col_tbl2 REPLACE COLUMNS (`col2` INT);

ALTER TABLE rp_col_tbl1 ADD COLUMNS (`col1` INT) CASCADE;

ALTER TABLE rp_col_tbl2 REPLACE COLUMNS (`col2` INT) RESTRICT;

ALTER TABLE rp_col_tbl1 PARTITION (`pt1`=1) ADD COLUMNS (`col1` INT) CASCADE;

ALTER TABLE rp_col_tbl2 PARTITION (`pt1`=1) REPLACE COLUMNS (`col2` INT) RESTRICT;

ALTER TABLE rp_col_tbl2 
PARTITION (`pt1`=1)
ADD COLUMNS (`col3` INT COMMENT 'a new col')
CASCADE;

-- Partial Partition Specification 
ALTER TABLE foo PARTITION (ds='2008-04-08', hr=11) CHANGE COLUMN dec_column_name dec_column_name DECIMAL(38,18);