CREATE FUNCTION base_analizer AS 'com.udf.BaseFieldUDF';
CREATE TEMPORARY FUNCTION flat_analizer AS 'com.udtf.EventJsonUDTF';

CREATE FUNCTION base_analizer 
AS "com.BaseFieldUDF" 
USING JAR 'hdfs://hadoop12:9000/user/hive/jars/hivefunction-1.0-SNAPSHOT.jar';

CREATE FUNCTION test_udf
AS "com.BaseFieldUDF"
USING JAR 'hdfs://hadoop12:9000/user/hive/jars/hivetestfunc-1.0-SNAPSHOT.jar'
, FILE 'hdfs://hadoop12:9000/user/hive/files/hivetestfunc.java'
, ARCHIVE 'hdfs://hadoop12:9000/user/hive/files/hivetestfunc.txt'
