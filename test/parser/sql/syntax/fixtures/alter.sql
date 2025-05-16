-- Syntax ALTER PROPERTIES
-- ALTER { DATABASE | SCHEMA | NAMESPACE } database_name SET { DBPROPERTIES | PROPERTIES } ( property_name = property_value [ , ... ] )

ALTER DATABASE inventory SET DBPROPERTIES ('Edited-by' = 'John', 'Edit-date' = '01/01/2001');
ALTER DATABASE inventory SET PROPERTIES ('Edited-by' = 'John', 'Edit-date' = '01/01/2001');


-- Syntax ALTER LOCATION
-- ALTER { DATABASE | SCHEMA | NAMESPACE } database_name SET LOCATION 'new_location'

ALTER DATABASE inventory SET LOCATION 'file:/temp/spark-warehouse/new_inventory.db';
ALTER SCHEMA inventory SET LOCATION 'file:/temp/spark-warehouse/new_inventory.db';
ALTER NAMESPACE inventory SET LOCATION 'file:/temp/spark-warehouse/new_inventory.db';


-- ============================================


-- Syntax RENAME
ALTER TABLE Student RENAME TO StudentInfo;
ALTER TABLE default.StudentInfo PARTITION (age='10') RENAME TO PARTITION (age='15');
ALTER TABLE default.StudentInfo PARTITION (age=10) RENAME TO PARTITION (age=12.323);

-- Syntax ADD COLUMNS
ALTER TABLE StudentInfo ADD COLUMNS (LastName string, DOB timestamp);

-- Syntax DROP COLUMNS
ALTER TABLE StudentInfo DROP columns (LastName, DOB);

-- Syntax RENAME COLUMN
ALTER TABLE StudentInfo RENAME COLUMN name TO FirstName;

-- Syntax ALTER OR CHANGE COLUMN
ALTER TABLE StudentInfo ALTER COLUMN FirstName COMMENT "new comment";
ALTER TABLE StudentInfo CHANGE COLUMN FirstName COMMENT "new comment";
ALTER TABLE StudentInfo ALTER FirstName COMMENT "new comment";
ALTER TABLE StudentInfo CHANGE FirstName COMMENT "new comment";

-- Syntax REPLACE COLUMNS
ALTER TABLE StudentInfo REPLACE COLUMNS (name string, ID int COMMENT 'new comment');
ALTER TABLE StudentInfo REPLACE COLUMNS name string, ID int COMMENT 'new comment';

-- Syntax ADD PARTITION
ALTER TABLE StudentInfo ADD IF NOT EXISTS PARTITION (age=18);
ALTER TABLE StudentInfo ADD PARTITION (age=18);
-- Adding multiple partitions to the table
ALTER TABLE StudentInfo ADD IF NOT EXISTS PARTITION (age=18) PARTITION (age=20);
ALTER TABLE StudentInfo ADD PARTITION (age=18) PARTITION (age=20);

-- Syntax DROP PARTITION
ALTER TABLE StudentInfo DROP IF EXISTS PARTITION (age=18);

-- Syntax SET SERDE
ALTER TABLE test_tab SET SERDE 'org.apache.hadoop.hive.serde2.columnar.LazyBinaryColumnarSerDe';
ALTER TABLE dbx.tab1 SET SERDE 'org.apache.hadoop' WITH SERDEPROPERTIES ('k' = 'v', 'kay' = 'vee')

-- Syntax SET LOCATION And SET FILE FORMAT
ALTER TABLE loc_orc SET FILEFORMAT orc;
ALTER TABLE p1 partition (month=2, day=2) SET FILEFORMAT parquet;
ALTER TABLE dbx.tab1 PARTITION (a='1', b='2') SET LOCATION '/path/to/part/ways'
ALTER TABLE dbx.tab1 SET LOCATION '/path/to/part/ways'

-- Syntax RECOVER PARTITIONS
ALTER TABLE dbx.tab1 RECOVER PARTITIONS;


-- ============================================


-- Syntax RENAME View
ALTER VIEW tempdb1.v1 RENAME TO tempdb1.v2;
-- Syntax ALTER View AS SELECT
ALTER VIEW tempdb1.v2 AS SELECT * FROM tempdb1.v1;
