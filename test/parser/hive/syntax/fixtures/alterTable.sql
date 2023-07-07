-- Rename Table
ALTER TABLE tbl1 RENAME TO tbl2;

-- Alter Table Properties
ALTER TABLE mydb.tb22 SET TBLPROPERTIES ('creator'='hayden');

-- Alter Table Comment
ALTER TABLE mydb.tb22 SET TBLPROPERTIES ('comment' = 'This is a new comment!');

-- Add SerDe Properties
ALTER TABLE employee_tb SET SERDE 'com.dt.test'; 

ALTER TABLE employee_tb 
SET SERDE 'com.dt.test'
WITH SERDEPROPERTIES ('field.delim' = ',');

ALTER TABLE sale_rbl 
PARTITION (
    `pt1`='1'
)
SET SERDEPROPERTIES ('field.delim' = ',');

-- Remove SerDe Properties
ALTER TABLE sale_rbl UNSET SERDEPROPERTIES ('field.delim');

-- Alter Table Storage Properties
ALTER TABLE students 
CLUSTERED BY (id, `name`, age)
SORTED BY (age)
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
ADD IF NOT EXISTS 
PARTITION (`pt1` = 1) LOCATION '/pat/loc' 
PARTITION (`pt2` = 2, `pt3`=3) LOCATION '/pat/loc' 

-- Rename Partition
ALTER TABLE ren_par_tbl
PARTITION (`pt1`=1) 
RENAME TO PARTITION (`pt2`=2) ;

-- Exchange Partition
ALTER TABLE ex_part_tbl2 
EXCHANGE PARTITION (`pt1`=1)
WITH TABLE ex_part_tbl1;

-- Recover Partitions
MSCK TABLE rec_tbl;

MSCK REPAIR TABLE rec_tbl SYNC PARTITIONS;

-- Drop Partitions
ALTER TABLE dr_tbl1 DROP PARTITION (`pt1`=1);

ALTER TABLE dr_tbl2 DROP IF EXISTS PARTITION (`pt2`=2) PURGE;

-- ALTER TABLE dr_tbl2 DROP IF EXISTS PARTITION (`pt2`=2) IGNORE PROTECTION PURGE;

-- Archive Partition
ALTER TABLE arch_pt_tbl1 ARCHIVE PARTITION (`pt1`=1);

ALTER TABLE arch_pt_tbl2 UNARCHIVE PARTITION (`pt2`=2) ;

-- Add/Replace Columns
ALTER TABLE rp_col_tbl1 ADD COLUMNS (`col1` INT);

ALTER TABLE rp_col_tbl2 REPLACE COLUMNS (`col2` INT);

ALTER TABLE rp_col_tbl2 
PARTITION (`pt1`=1)
ADD COLUMNS (`col3` INT COMMENT 'a new col')
CASCADE;
