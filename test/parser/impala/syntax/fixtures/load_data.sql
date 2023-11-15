/* LOAD DATA INPATH 'hdfs_file_or_directory_path' [OVERWRITE] INTO TABLE tablename
  [PARTITION (partcol1=val1, partcol2=val2 ...)] */
LOAD DATA INPATH 'hdfs_file_or_directory_path' INTO TABLE my_table;
LOAD DATA INPATH 'hdfs_file_or_directory_path' OVERWRITE INTO TABLE my_table;
LOAD DATA INPATH 'hdfs_file_or_directory_path' INTO TABLE my_table PARTITION (country = 'USA', age = 18);
LOAD DATA INPATH 'hdfs_file_or_directory_path' OVERWRITE INTO TABLE my_table PARTITION (country = 'USA', age = 18);

-- example
load data inpath '/user/doc_demo/thousand_strings.txt' into table t1;