-- ALTER TABLE [old_db_name.]old_table_name RENAME TO [new_db_name.]new_table_name
ALTER TABLE old_table_name RENAME TO new_table_name;
ALTER TABLE old_db_name.old_table_name RENAME TO new_table_name;
ALTER TABLE old_table_name RENAME TO new_db_name.new_table_name;
ALTER TABLE old_db_name.old_table_name RENAME TO new_db_name.new_table_name;

-- ALTER TABLE name ADD [IF NOT EXISTS] COLUMNS (col_spec[, col_spec ...])
ALTER TABLE my_table ADD COLUMNS (id INT COMMENT 'Identifier', name STRING COMMENT 'Name');
ALTER TABLE my_table ADD IF NOT EXISTS COLUMNS (age INT COMMENT 'Age');
ALTER TABLE my_table ADD COLUMNS (email STRING COMMENT 'Email');

-- ALTER TABLE name REPLACE COLUMNS (col_spec[, col_spec ...])
ALTER TABLE my_table REPLACE COLUMNS (age INT COMMENT 'Updated Age');
ALTER TABLE my_table REPLACE COLUMNS (email STRING COMMENT 'Updated Email', address STRING COMMENT 'Updated Address');

-- ALTER TABLE name ADD COLUMN [IF NOT EXISTS] col_spec
ALTER TABLE my_table ADD COLUMN age INT COMMENT 'Updated Age';
ALTER TABLE my_table ADD COLUMN IF NOT EXISTS age INT COMMENT 'Updated Age';

-- ALTER TABLE name DROP [COLUMN] column_name
ALTER TABLE my_table DROP COLUMN column_name;
ALTER TABLE my_table DROP column_name;

-- ALTER TABLE name CHANGE column_name col_spec
ALTER TABLE my_table CHANGE COLUMN age INT COMMENT 'Updated Age';

-- ALTER TABLE name SET OWNER USER user_name
ALTER TABLE my_table SET OWNER USER user_name;

/* Kudu tables only.
ALTER TABLE name ALTER [COLUMN] column_name
  { SET kudu_storage_attr attr_value
    | DROP DEFAULT } */
ALTER TABLE my_table ALTER COLUMN size SET BLOCK_SIZE 1024 ;
ALTER TABLE my_table ALTER COLUMN id  SET DEFAULT 0 ;
ALTER TABLE my_table ALTER COLUMN name SET ENCODING 'plain' ;
ALTER TABLE my_table ALTER COLUMN address SET COMPRESSION 'lz4';
ALTER TABLE my_table ALTER COLUMN id DROP DEFAULT;

/* Non-Kudu tables only.
ALTER TABLE name ALTER [COLUMN] column_name
  SET COMMENT 'comment_text' */
ALTER TABLE my_table ALTER age SET COMMENT '年龄';
ALTER TABLE my_table ALTER COLUMN age SET COMMENT '年龄';

/* ALTER TABLE name ADD [IF NOT EXISTS] PARTITION (partition_spec)
  [location_spec]
  [cache_spec] */
ALTER TABLE my_table ADD PARTITION (date = '2023-01-01');
ALTER TABLE my_table ADD IF NOT EXISTS PARTITION (date = '2023-01-01');
ALTER TABLE my_table ADD PARTITION (country = 'USA') LOCATION '/path/to/partition';
ALTER TABLE my_table ADD IF NOT EXISTS PARTITION (category = 'Books') LOCATION '/path/to/books_partition';
ALTER TABLE my_table ADD PARTITION (date = '2023-01-01') CACHED IN 'pool_name' WITH REPLICATION = 3;
ALTER TABLE my_table ADD IF NOT EXISTS PARTITION (date = '2023-01-01') CACHED IN 'pool_name' WITH REPLICATION = 3;
ALTER TABLE my_table ADD PARTITION (country = 'USA') UNCACHED;
ALTER TABLE my_table ADD IF NOT EXISTS PARTITION (country = 'USA') UNCACHED;

-- ALTER TABLE name ADD [IF NOT EXISTS] RANGE PARTITION kudu_partition_spec
ALTER TABLE my_table ADD RANGE PARTITION VALUE = 100;
ALTER TABLE my_table ADD IF NOT EXISTS RANGE PARTITION 10 < VALUES < 20;


/* ALTER TABLE name DROP [IF EXISTS] PARTITION (partition_spec)
  [PURGE] */
ALTER TABLE my_table DROP PARTITION (date = '2023-01-01');
ALTER TABLE my_table DROP IF EXISTS PARTITION (name = 'impala');

-- ALTER TABLE name DROP [IF EXISTS] RANGE PARTITION kudu_partition_spec
ALTER TABLE my_table DROP RANGE PARTITION VALUE != 100;
ALTER TABLE my_table DROP IF EXISTS RANGE PARTITION 10 >= VALUES < 20;

-- ALTER TABLE name RECOVER PARTITIONS
ALTER TABLE my_table RECOVER PARTITIONS

/* ALTER TABLE name [PARTITION (partition_spec)]
  SET { FILEFORMAT file_format
  | ROW FORMAT row_format
  | LOCATION 'hdfs_path_of_directory'
  | TBLPROPERTIES (table_properties)
  | SERDEPROPERTIES (serde_properties) } */
ALTER TABLE my_table SET FILEFORMAT parquet ;
ALTER TABLE my_table PARTITION (date = '2023-01-01')  SET FILEFORMAT orc;
ALTER TABLE my_table SET ROW FORMAT DELIMITED FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n';
ALTER TABLE my_table SET LOCATION '/path/to/new_location';
ALTER TABLE my_table PARTITION (region = 'Europe') SET LOCATION '/path/to/europe_partition';
ALTER TABLE my_table SET TBLPROPERTIES ('comment' = 'This is a table');
ALTER TABLE my_table PARTITION (category = 'Books') SET TBLPROPERTIES ('compression' = 'gzip');
ALTER TABLE my_table SET SERDEPROPERTIES ('field.delim' = '|');
ALTER TABLE my_table PARTITION (date = '2023-01-01') SET SERDEPROPERTIES ('serialization.null.format' = '\N');

-- TODO
/* ALTER TABLE name colname
  ('statsKey'='val', ...) */
-- ALTER TABLE my_table age ('statsKey=numDVs');
-- ALTER TABLE my_table age ('statsKey=numNulls');
-- ALTER TABLE my_table age ('statsKey=avgSize');
-- ALTER TABLE my_table age ('statsKey=maxSize');

-- ALTER TABLE name [PARTITION (partition_spec)] SET { CACHED IN 'pool_name' [WITH REPLICATION = integer] | UNCACHED }
ALTER TABLE my_table SET CACHED IN 'pool_name';
ALTER TABLE my_table PARTITION (date = '2023-01-01')  SET CACHED IN 'pool_name';
ALTER TABLE my_table SET CACHED IN 'pool_name' WITH REPLICATION = 3 ;
ALTER TABLE my_table PARTITION (date = '2023-01-01') SET CACHED IN 'pool_name' WITH REPLICATION = 2;
ALTER TABLE my_table SET UNCACHED;
ALTER TABLE my_table PARTITION (date = '2023-01-01')  SET UNCACHED;


-- example
alter table historical_data drop partition (year < 1995);
alter table historical_data drop partition (year < 1995, last_name like 'A%');
alter table historical_data drop partition (year = 1996 and month between 1 and 6);
alter table fast_growing_data partition (year = 2016, month in (10,11,12)) set fileformat parquet;
alter table d1.mobile rename to mobile;
alter table d2.mobile rename to d3.mobile;
alter table p1 add partition (month=1, day=1);
alter table p1 add partition (month=1, day=2);
alter table p1 add partition (month=2, day=1);
alter table p1 add partition (month=2, day=2);
alter table p1 partition (month=1, day=1) set location '/usr/external_data/new_years_day';
alter table t1 add partition (yy = 2016, mm = 2);
alter table t1 add partition (yy = 2016, mm = 3);
alter table t1 recover partitions;
alter table analysis_data set tblproperties('numRows'='1001000000', 'STATS_GENERATED_VIA_STATS_TASK'='true');
alter table partitioned_data partition(year=2009, month=4) set tblproperties ('numRows'='30000', 'STATS_GENERATED_VIA_STATS_TASK'='true');
alter table partitioned_data set tblproperties ('numRows'='1030000', 'STATS_GENERATED_VIA_STATS_TASK'='true');
alter table t1 set column stats x ('numDVs'='2','numNulls'='0');
alter table t1 set column stats s ('numdvs'='3','maxsize'='4');
alter table optional_columns drop column a2;
alter table optional_columns drop column a1;
alter table p1 partition (month=2, day=2) set fileformat parquet;
alter table partition_t add partition (y=2000);
ALTER TABLE t1 ADD COLUMNS (y STRING ENCODING prefix_encoding);
ALTER TABLE t1 ADD COLUMNS (z INT DEFAULT 10);
-- TODO: 和语法文件对应不上
-- ALTER TABLE t1 ADD COLUMNS (a STRING NOT NULL DEFAULT '', t TIMESTAMP COMPRESSION default_compression);
alter table kt alter column s set encoding prefix_encoding;
alter table kt alter x set block_size 2048;
alter table kt alter column t set compression zlib;