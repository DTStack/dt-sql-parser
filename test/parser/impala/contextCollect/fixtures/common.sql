CREATE TABLE new_Table like old_table;

create table census (name string, census_year int COMMENT 'year comment') partitioned by (year int) COMMENT 'common census table comment';

CREATE TABLE sorted_census_data
  SORT BY (last_name, state)
  STORED AS PARQUET
  AS SELECT last_name, first_name, state, address
    FROM unsorted_census_data;

CREATE TABLE ctas_t1
  PRIMARY KEY (id) PARTITION BY HASH (id) PARTITIONS 10
  STORED AS KUDU
  AS SELECT id, s FROM kudu_t1;

CREATE TABLE kudu_t3 (id BIGINT COMMENT 'id column comment', year INT, s STRING COMMENT 'string column comment',
    b BOOLEAN, PRIMARY KEY (id,year))
  PARTITION BY HASH (id) PARTITIONS 20,
  RANGE (year) (PARTITION 1980 <= VALUES < 1990,
    PARTITION 1990 <= VALUES < 2000,
    PARTITION VALUE = 2001,
    PARTITION 2001 < VALUES < 2003)
  COMMENT 'kudu table comment'
  STORED AS KUDU;

CREATE VIEW my_view (age COMMENT 'this is number col', age1 COMMENT 'this is number age') COMMENT 'view comment' TBLPROPERTIES ('tblp1' = '1') AS SELECT * FROM my_table;

insert into t2 (y, x) select c1 from t1;

SELECT * from a;

SELECT t1.c1, t2.c2 FROM table1 AS t1 JOIN table2 AS t2
  ON t1.id = t2.id and t1.type_flag = t2.type_flag
  WHERE t1.c1 > 100;

CREATE DATABASE my_db COMMENT 'my first db' LOCATION '/path/to/partition';

CREATE SCHEMA IF NOT EXISTS my_schema COMMENT 'my first schema' LOCATION '/path/to/partition';

COMMENT ON DATABASE my_database IS 'This is my database.';

CREATE AGGREGATE FUNCTION function_name(arg_type1, arg_type2)
RETURNS return_type
LOCATION 'hdfs_path'
UPDATE_FN='update_function'
MERGE_FN='merge_function';

CREATE FUNCTION function_name(arg_type1, arg_type2)
RETURNS return_type
LOCATION 'hdfs_path_to_dot_so'
SYMBOL='symbol_name';
