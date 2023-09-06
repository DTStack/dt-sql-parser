LOAD DATA INPATH 'hdfs://namenode:9000/user/hive/project/data1' INTO TABLE tbl1;

LOAD DATA LOCAL INPATH '/user/hive/project/data1' 
OVERWRITE INTO TABLE tablename 
PARTITION (pt1=1, pt2=2)
INPUTFORMAT 'com.apache.hadoop.textInputFormat'
SERDE 'JsonSerDe';