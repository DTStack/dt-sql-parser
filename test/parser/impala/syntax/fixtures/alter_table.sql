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
ALTER TABLE my_table ALTER COLUMN size { SET BLOCK_SIZE 1024 };
ALTER TABLE my_table ALTER COLUMN id { SET DEFAULT 0 };
ALTER TABLE my_table ALTER COLUMN name { SET ENCODING 'plain' };
ALTER TABLE my_table ALTER COLUMN address { SET COMPRESSION 'lz4' };
ALTER TABLE my_table ALTER COLUMN id { DROP DEFAULT };

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
ALTER TABLE my_table SET { FILEFORMAT parquet };
ALTER TABLE my_table PARTITION (date = '2023-01-01')  SET { FILEFORMAT orc };
ALTER TABLE my_table SET { ROW FORMAT DELIMITED FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' };
ALTER TABLE my_table SET { LOCATION '/path/to/new_location' };
ALTER TABLE my_table PARTITION (region = 'Europe') SET { LOCATION '/path/to/europe_partition' };
ALTER TABLE my_table SET { TBLPROPERTIES ('comment' = 'This is a table') };
ALTER TABLE my_table PARTITION (category = 'Books') SET { TBLPROPERTIES ('compression' = 'gzip') };
ALTER TABLE my_table SET { SERDEPROPERTIES ('field.delim' = '|') };
ALTER TABLE my_table PARTITION (date = '2023-01-01') SET { SERDEPROPERTIES ('serialization.null.format' = '\N') };

-- TODO
/* ALTER TABLE name colname
  ('statsKey'='val', ...) */
-- ALTER TABLE my_table age ('statsKey=numDVs');
-- ALTER TABLE my_table age ('statsKey=numNulls');
-- ALTER TABLE my_table age ('statsKey=avgSize');
-- ALTER TABLE my_table age ('statsKey=maxSize');

-- ALTER TABLE name [PARTITION (partition_spec)] SET { CACHED IN 'pool_name' [WITH REPLICATION = integer] | UNCACHED }
ALTER TABLE my_table SET { CACHED IN 'pool_name' };
ALTER TABLE my_table PARTITION (date = '2023-01-01')  SET { CACHED IN 'pool_name' };
ALTER TABLE my_table SET { CACHED IN 'pool_name' WITH REPLICATION = 3 };
ALTER TABLE my_table PARTITION (date = '2023-01-01') SET { CACHED IN 'pool_name' WITH REPLICATION = 2 };
ALTER TABLE my_table SET { UNCACHED };
ALTER TABLE my_table PARTITION (date = '2023-01-01')  SET{ UNCACHED };

