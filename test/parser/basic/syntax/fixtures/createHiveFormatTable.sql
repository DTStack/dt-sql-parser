-- Syntax
-- CREATE [ EXTERNAL ] TABLE [ IF NOT EXISTS ] table_identifier
--     [ ( col_name1[:] col_type1 [ COMMENT col_comment1 ], ... ) ]
--     [ COMMENT table_comment ]
--     [ PARTITIONED BY ( col_name2[:] col_type2 [ COMMENT col_comment2 ], ... )
--         | ( col_name1, col_name2, ... ) ]
--     [ CLUSTERED BY ( col_name1, col_name2, ...)
--         [ SORTED BY ( col_name1 [ ASC | DESC ], col_name2 [ ASC | DESC ], ... ) ]
--         INTO num_buckets BUCKETS ]
--     [ ROW FORMAT row_format ]
--     [ STORED AS file_format ]
--     [ LOCATION path ]
--     [ TBLPROPERTIES ( key1=val1, key2=val2, ... ) ]
--     [ AS select_statement ]


--Use hive format
CREATE TABLE student (id INT, name STRING, age INT) STORED AS ORC;

--Use data from another table
CREATE TABLE student_copy STORED AS ORC
    AS SELECT * FROM student;

--Specify table comment and properties
CREATE TABLE student (id INT, name STRING, age INT)
    COMMENT 'this is a comment'
    STORED AS ORC
    TBLPROPERTIES ('foo'='bar');

--Specify table comment and properties with different clauses order
CREATE TABLE student (id INT, name STRING, age INT)
    STORED AS ORC
    TBLPROPERTIES ('foo'='bar')
    COMMENT 'this is a comment';

--Create partitioned table
CREATE TABLE student (id INT, name STRING)
    PARTITIONED BY (age INT)
    STORED AS ORC;

--Create partitioned table with different clauses order
CREATE TABLE student (id INT, name STRING)
    STORED AS ORC
    PARTITIONED BY (age INT);

--Use Row Format and file format
CREATE TABLE IF NOT EXISTS student (id INT, name STRING)
    ROW FORMAT DELIMITED FIELDS TERMINATED BY ','
    STORED AS TEXTFILE;

--Use complex datatype
CREATE EXTERNAL TABLE family(
        name STRING,
        friends ARRAY<STRING>,
        children MAP<STRING, INT>,
        address STRUCT<street: STRING, city: STRING>
    )
    ROW FORMAT DELIMITED FIELDS TERMINATED BY ',' ESCAPED BY '\\'
    COLLECTION ITEMS TERMINATED BY '_'
    MAP KEYS TERMINATED BY ':'
    LINES TERMINATED BY '\n'
    NULL DEFINED AS 'foonull'
    STORED AS TEXTFILE
    LOCATION '/tmp/family/';

--Use predefined custom SerDe
CREATE TABLE avroExample
    ROW FORMAT SERDE 'org.apache.hadoop.hive.serde2.avro.AvroSerDe'
    STORED AS INPUTFORMAT 'org.apache.hadoop.hive.ql.io.avro.AvroContainerInputFormat'
        OUTPUTFORMAT 'org.apache.hadoop.hive.ql.io.avro.AvroContainerOutputFormat'
    TBLPROPERTIES ('avro.schema.literal'='{ "namespace": "org.apache.hive",
        "name": "first_schema",
        "type": "record",
        "fields": [
                { "name":"string1", "type":"string" },
                { "name":"string2", "type":"string" }
            ] }');

--Use personalized custom SerDe(we may need to `ADD JAR xxx.jar` first to ensure we can find the serde_class,
--or you may run into `CLASSNOTFOUND` exception)
ADD JAR /tmp/hive_serde_example.jar;

CREATE EXTERNAL TABLE family (id INT, name STRING)
    ROW FORMAT SERDE 'com.ly.spark.serde.SerDeExample'
    STORED AS INPUTFORMAT 'com.ly.spark.example.serde.io.SerDeExampleInputFormat'
        OUTPUTFORMAT 'com.ly.spark.example.serde.io.SerDeExampleOutputFormat'
    LOCATION '/tmp/family/';

--Use `CLUSTERED BY` clause to create bucket table without `SORTED BY`
CREATE TABLE clustered_by_test1 (ID INT, AGE STRING)
    CLUSTERED BY (ID)
    INTO 4 BUCKETS
    STORED AS ORC

--Use `CLUSTERED BY` clause to create bucket table with `SORTED BY`
CREATE TABLE clustered_by_test2 (ID INT, NAME STRING)
    PARTITIONED BY (YEAR STRING)
    CLUSTERED BY (ID, NAME)
    SORTED BY (ID ASC)
    INTO 3 BUCKETS
    STORED AS PARQUET
