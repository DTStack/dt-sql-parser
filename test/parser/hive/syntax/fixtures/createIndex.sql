CREATE INDEX table01_index 
ON TABLE table01 (column2) 
AS 'org.apache.hadoop.hive.ql.index.compact.CompactIndexHandler'
COMMENT '这是一个索引';

CREATE INDEX table02_index 
ON TABLE table02 (column3) 
AS 'org.apache.hadoop.hive.ql.index.compact.CompactIndexHandler' 
WITH DEFERRED REBUILD;

CREATE INDEX table03_index 
ON TABLE table03 (column4) 
AS 'COMPACT' 
TBLPROPERTIES ("prop1"="value1", "prop2"="value2");

CREATE INDEX table04_index
ON TABLE table04 (column5) 
AS 'COMPACT' 
IN TABLE indextable1
STORED BY 'org.apache.hadoop.hive.hbase.HBaseStorageHandler';
IDXPROPERTIES ("prop3"="value3", "prop4"="value4");

CREATE INDEX table05_index 
ON TABLE table05 (column6) 
AS 'COMPACT'
STORED AS RCFILE;

CREATE INDEX table06_index 
ON TABLE table06 (column7) 
AS 'COMPACT' 
ROW FORMAT DELIMITED FIELDS TERMINATED BY '\t' 
STORED AS TEXTFILE;




