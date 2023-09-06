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