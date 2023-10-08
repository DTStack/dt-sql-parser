-- Syntax RENAME
-- ALTER TABLE table_identifier RENAME TO table_identifier
ALTER TABLE Student RENAME TO StudentInfo;
-- ALTER TABLE table_identifier partition_spec RENAME TO partition_spec
ALTER TABLE default.StudentInfo PARTITION (age='10') RENAME TO PARTITION (age='15');
ALTER TABLE default.StudentInfo PARTITION (age=10) RENAME TO PARTITION (age=12.323);


-- Syntax ADD COLUMNS
-- ALTER TABLE table_identifier ADD COLUMNS ( col_spec [ , ... ] )
ALTER TABLE StudentInfo ADD COLUMNS (LastName string, DOB timestamp);


-- Syntax DROP COLUMNS
-- ALTER TABLE table_identifier DROP { COLUMN | COLUMNS } [ ( ] col_name [ , ... ] [ ) ]
ALTER TABLE StudentInfo DROP columns (LastName, DOB);


-- Syntax RENAME COLUMN
-- ALTER TABLE table_identifier RENAME COLUMN col_name TO col_name
ALTER TABLE StudentInfo RENAME COLUMN name TO FirstName;


-- Syntax ALTER OR CHANGE COLUMN
-- ALTER TABLE table_identifier { ALTER | CHANGE } [ COLUMN ] col_name alterColumnAction
ALTER TABLE StudentInfo ALTER COLUMN FirstName COMMENT "new comment";
ALTER TABLE StudentInfo CHANGE COLUMN FirstName COMMENT "new comment";
ALTER TABLE StudentInfo ALTER FirstName COMMENT "new comment";
ALTER TABLE StudentInfo CHANGE FirstName COMMENT "new comment";


-- Syntax REPLACE COLUMNS
-- ALTER TABLE table_identifier [ partition_spec ] REPLACE COLUMNS [ ( ] qualified_col_type_with_position_list [ ) ]
ALTER TABLE StudentInfo REPLACE COLUMNS (name string, ID int COMMENT 'new comment');
ALTER TABLE StudentInfo REPLACE COLUMNS name string, ID int COMMENT 'new comment';


-- Syntax ADD PARTITION
-- ALTER TABLE table_identifier ADD [IF NOT EXISTS] ( partition_spec [ partition_spec ... ] )
ALTER TABLE StudentInfo ADD IF NOT EXISTS PARTITION (age=18);
ALTER TABLE StudentInfo ADD PARTITION (age=18);
-- Adding multiple partitions to the table
ALTER TABLE StudentInfo ADD IF NOT EXISTS PARTITION (age=18) PARTITION (age=20);
ALTER TABLE StudentInfo ADD PARTITION (age=18) PARTITION (age=20);

-- Syntax DROP PARTITION
-- ALTER TABLE table_identifier DROP [ IF EXISTS ] partition_spec [PURGE]
ALTER TABLE StudentInfo DROP IF EXISTS PARTITION (age=18);
ALTER TABLE StudentInfo DROP PARTITION (age=18);

-- Syntax SET TABLE PROPERTIES
-- ALTER TABLE table_identifier SET TBLPROPERTIES ( key1 = val1, key2 = val2, ... )
ALTER TABLE dbx.tab1 SET TBLPROPERTIES ('comment' = 'A table comment.');

-- Unset Table Properties
-- ALTER TABLE table_identifier UNSET TBLPROPERTIES [ IF EXISTS ] ( key1, key2, ... )
ALTER TABLE dbx.tab1 UNSET TBLPROPERTIES IF EXISTS ('winner');
ALTER TABLE dbx.tab1 UNSET TBLPROPERTIES ('winner');


-- Syntax SET SERDE
-- ALTER TABLE table_identifier [ partition_spec ] SET SERDEPROPERTIES ( key1 = val1, key2 = val2, ... )
ALTER TABLE test_tab SET SERDE 'org.apache.hadoop.hive.serde2.columnar.LazyBinaryColumnarSerDe';
-- ALTER TABLE table_identifier [ partition_spec ] SET SERDE serde_class_name [ WITH SERDEPROPERTIES ( key1 = val1, key2 = val2, ... ) ]
ALTER TABLE dbx.tab1 SET SERDE 'org.apache.hadoop' WITH SERDEPROPERTIES ('k' = 'v', 'kay' = 'vee')


-- Syntax SET LOCATION And SET FILE FORMAT
-- ALTER TABLE table_identifier [ partition_spec ] SET FILEFORMAT file_format
ALTER TABLE loc_orc SET FILEFORMAT orc;
ALTER TABLE p1 partition (month=2, day=2) SET FILEFORMAT parquet;

-- ALTER TABLE table_identifier [ partition_spec ] SET LOCATION 'new_location'
ALTER TABLE dbx.tab1 PARTITION (a='1', b='2') SET LOCATION '/path/to/part/ways'
ALTER TABLE dbx.tab1 SET LOCATION '/path/to/part/ways'


-- Syntax RECOVER PARTITIONS
-- ALTER TABLE table_identifier RECOVER PARTITIONS
ALTER TABLE dbx.tab1 RECOVER PARTITIONS;
