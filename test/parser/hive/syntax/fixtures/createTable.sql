CREATE TEMPORARY TABLE list_bucket_multiple (col1 STRING, col2 INT, col3 STRING);

CREATE TRANSACTIONAL TABLE transactional_table_test(
    key STRING, 
    value STRING
) 
PARTITIONED BY(ds STRING) STORED AS ORC;

CREATE TABLE IF NOT EXISTS copy_table LIKE origin_table;

CREATE TABLE IF NOT EXISTS derived_table AS SELECT * FROM origin_table;

CREATE TABLE `mydb.t1`(
    `id` INT,
    `dept_no` INT,   
    `addr` STRING,   
    `tel` STRING,
    `hobby` ARRAY<STRING>,
    `add` MAP<STRING,STRING>
)
PARTITIONED BY(`date` STRING) 
ROW FORMAT DELIMITED FIELDS TERMINATED BY ','
COLLECTION ITEMS TERMINATED BY '-'
MAP KEYS TERMINATED BY ':';

CREATE EXTERNAL TABLE mydb.ext_table(
    id      INT,
    name    STRING,
    hobby   ARRAY<STRING>,
    add     MAP<STRING,STRING>
)
ROW FORMAT DELIMITED FIELDS TERMINATED BY ','
COLLECTION ITEMS TERMINATED BY '-'
MAP KEYS TERMINATED BY ':'
LOCATION '/user/mydb/ext_table'
TBLPROPERTIES('author'='hayden','desc'='一个外部测试表')
;

CREATE MANAGED TABLE managed_table (
    id INT COMMENT 'ID', 
    name STRING COMMENT '名称'
)
COMMENT '测试分桶'
CLUSTERED BY(id) SORTED BY (id) INTO 4 BUCKETS
STORED BY 'org.apache.hadoop.hive.hbase.HBaseStorageHandler';

CREATE TABLE list_bucket_multiple (
	col1 STRING,
 	col2 INT,
 	col3 STRING
)
SKEWED BY (col1, col2) ON (('s1',1), ('s3',3), ('s13',13), ('s78',78)) 
STORED AS DIRECTORIES;

