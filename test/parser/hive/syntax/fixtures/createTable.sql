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
) COMMENT 'This is the page view table' PARTITIONED BY(dt STRING, country STRING) CLUSTERED BY(userid) SORTED BY(viewTime) INTO 32 BUCKETS ROW FORMAT DELIMITED FIELDS TERMINATED BY '\001' COLLECTION ITEMS TERMINATED BY '\002' MAP KEYS TERMINATED BY '\003' STORED AS SEQUENCEFILE;

CREATE TEMPORARY EXTERNAL TABLE IF NOT EXISTS page_view(
    viewTime INT,
    userid BIGINT,
    page_url STRING,
    referrer_url STRING,
    ip STRING COMMENT 'IP Address of the User'
) COMMENT 'This is the page view table' PARTITIONED BY(dt STRING, country STRING) CLUSTERED BY(userid) SORTED BY(viewTime) INTO 32 BUCKETS ROW FORMAT DELIMITED FIELDS TERMINATED BY '\001' COLLECTION ITEMS TERMINATED BY '\002' MAP KEYS TERMINATED BY '\003' STORED AS SEQUENCEFILE;

CREATE TEMPORARY EXTERNAL TABLE IF NOT EXISTS page_view(
    viewTime INT,
    userid BIGINT,
    page_url STRING,
    referrer_url STRING,
    ip STRING COMMENT 'IP Address of the User'
) COMMENT 'This is the page view table' PARTITIONED BY(dt STRING, country STRING) CLUSTERED BY(userid) SORTED BY(viewTime) INTO 32 BUCKETS ROW FORMAT DELIMITED FIELDS TERMINATED BY '\001' COLLECTION ITEMS TERMINATED BY '\002' MAP KEYS TERMINATED BY '\003' STORED AS SEQUENCEFILE LOCATION '/hsd_path';

CREATE TEMPORARY EXTERNAL TABLE IF NOT EXISTS page_view(
    viewTime INT,
    userid BIGINT,
    page_url STRING,
    referrer_url STRING,
    ip STRING COMMENT 'IP Address of the User'
) COMMENT 'This is the page view table' PARTITIONED BY(dt STRING, country STRING) CLUSTERED BY(userid) SORTED BY(viewTime) INTO 32 BUCKETS ROW FORMAT DELIMITED FIELDS TERMINATED BY '\001' COLLECTION ITEMS TERMINATED BY '\002' MAP KEYS TERMINATED BY '\003' STORED AS SEQUENCEFILE LOCATION '/hsd_path' AS
SELECT
    (key % 1024) new_key,
    concat(key, value) key_value_pair
FROM
    key_value_store SORT BY new_key,
    key_value_pair;


CREATE TABLE list_bucket_single (key STRING, value STRING)
  SKEWED BY (key) ON (1,5,6) STORED AS DIRECTORIES;

CREATE TRANSACTIONAL TABLE transactional_table_test(key STRING, value STRING) PARTITIONED BY(ds STRING) STORED AS ORC;

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

CREATE TABLE list_bucket_multiple (col1 STRING, col2 INT, col3 STRING) SKEWED BY (col1, col2) ON (('s1', 1), ('s3', 3), ('s13', 13), ('s78', 78)) STORED AS DIRECTORIES;