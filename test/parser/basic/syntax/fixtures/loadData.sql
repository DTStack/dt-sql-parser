-- Syntax
-- LOAD DATA [ LOCAL ] INPATH path [ OVERWRITE ] INTO TABLE table_identifier [ partition_spec ]


-- Assuming the students table is in '/user/hive/warehouse/'
LOAD DATA LOCAL INPATH '/user/hive/warehouse/students' OVERWRITE INTO TABLE test_load;
LOAD DATA LOCAL INPATH '/path/to/datafile.csv' INTO TABLE my_table;
LOAD DATA INPATH '/path/to/datafile.csv' INTO TABLE my_table;

-- Assuming the test_partition table is in '/user/hive/warehouse/'
LOAD DATA LOCAL INPATH '/user/hive/warehouse/test_partition/c2=2/c3=3' OVERWRITE INTO TABLE test_load_partition PARTITION (c2=2, c3=3);
