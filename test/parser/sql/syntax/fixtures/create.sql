-- Syntax
-- CREATE { DATABASE | SCHEMA } [ IF NOT EXISTS ] database_name [ COMMENT database_comment ] [ LOCATION database_directory ] [ WITH DBPROPERTIES ( property_name = property_value [ , ... ] ) ]

CREATE DATABASE IF NOT EXISTS customer_db;
CREATE DATABASE customer_db;

CREATE SCHEMA IF NOT EXISTS customer_db;
CREATE SCHEMA customer_db;

CREATE DATABASE IF NOT EXISTS customer_db COMMENT 'This is customer database' LOCATION '/user' WITH DBPROPERTIES (ID=001, Name='John');
CREATE DATABASE IF NOT EXISTS customer_db LOCATION '/user' WITH DBPROPERTIES (ID=001, Name='John');
CREATE DATABASE IF NOT EXISTS customer_db WITH DBPROPERTIES (ID=001, Name='John');
CREATE DATABASE customer_db COMMENT 'This is customer database' LOCATION '/user' WITH DBPROPERTIES (ID=001, Name='John');
CREATE DATABASE customer_db LOCATION '/user' WITH DBPROPERTIES (ID=001, Name='John');
CREATE DATABASE customer_db WITH DBPROPERTIES (ID=001, Name='John');

CREATE SCHEMA IF NOT EXISTS customer_db COMMENT 'This is customer database' LOCATION '/user' WITH DBPROPERTIES (ID=001, Name='John');
CREATE SCHEMA IF NOT EXISTS customer_db LOCATION '/user' WITH DBPROPERTIES (ID=001, Name='John');
CREATE SCHEMA IF NOT EXISTS customer_db WITH DBPROPERTIES (ID=001, Name='John');
CREATE SCHEMA customer_db COMMENT 'This is customer database' LOCATION '/user' WITH DBPROPERTIES (ID=001, Name='John');
CREATE SCHEMA customer_db LOCATION '/user' WITH DBPROPERTIES (ID=001, Name='John');
CREATE SCHEMA customer_db WITH DBPROPERTIES (ID=001, Name='John');


-- ============================================


-- Syntax
-- CREATE [ OR REPLACE ] [ TEMPORARY ] FUNCTION [ IF NOT EXISTS ] function_name AS class_name [ resource_locations ]

CREATE OR REPLACE TEMPORARY FUNCTION IF NOT EXISTS simple_udf AS 'SimpleUdfR' USING JAR '/tmp/SimpleUdfR.jar';
CREATE OR REPLACE TEMPORARY FUNCTION IF NOT EXISTS simple_udf AS 'SimpleUdfR';

CREATE OR REPLACE FUNCTION IF NOT EXISTS simple_udf AS 'SimpleUdfR';
CREATE TEMPORARY FUNCTION IF NOT EXISTS simple_udf AS 'SimpleUdfR';
CREATE FUNCTION IF NOT EXISTS simple_udf AS 'SimpleUdfR';

CREATE OR REPLACE FUNCTION simple_udf AS 'SimpleUdfR';
CREATE TEMPORARY FUNCTION simple_udf AS 'SimpleUdfR';
CREATE FUNCTION simple_udf AS 'SimpleUdfR';

CREATE FUNCTION simple_udf AS 'SimpleUdf' USING JAR '/tmp/SimpleUdf.jar';

CREATE TEMPORARY FUNCTION simple_temp_udf AS 'SimpleUdf' USING JAR '/tmp/SimpleUdf.jar';


-- ============================================


-- Syntax
-- CREATE TABLE [ IF NOT EXISTS ] table_identifier
--     [ ( col_name1 col_type1 [ COMMENT col_comment1 ], ... ) ]
--     USING data_source
--     [ OPTIONS ( key1=val1, key2=val2, ... ) ]
--     [ PARTITIONED BY ( col_name1, col_name2, ... ) ]
--     [ CLUSTERED BY ( col_name3, col_name4, ... )
--         [ SORTED BY ( col_name [ ASC | DESC ], ... ) ]
--         INTO num_buckets BUCKETS ]
--     [ LOCATION path ]
--     [ COMMENT table_comment ]
--     [ TBLPROPERTIES ( key1=val1, key2=val2, ... ) ]
--     [ AS select_statement ]


--Use data source
CREATE TABLE student (id INT, name STRING, age INT) USING CSV;
CREATE TABLE IF NOT EXISTS student (id INT, name STRING, age INT) USING CSV;

--Use data from another table
CREATE TABLE student_copy USING CSV AS SELECT * FROM student;

--Omit the USING clause, which uses the default data source (parquet by default)
CREATE TABLE student (id INT, name STRING, age INT);

--Use parquet data source with parquet storage options
--The columns 'id' and 'name' enable the bloom filter during writing parquet file,
--column 'age' does not enable
CREATE TABLE student_parquet(id INT, name STRING, age INT) USING PARQUET
    OPTIONS (
      'parquet.bloom.filter.enabled'='true',
      'parquet.bloom.filter.enabled#age'='false'
    );

--Specify table comment and properties
CREATE TABLE student (id INT, name STRING, age INT) USING CSV
    LOCATION 'file:/temp/spark-warehouse/new_inventory.db'
    COMMENT 'this is a comment'
    TBLPROPERTIES ('foo'='bar');

--Specify table comment and properties with different clauses order
CREATE TABLE student (id INT, name STRING, age INT) USING CSV
    TBLPROPERTIES ('foo'='bar')
    COMMENT 'this is a comment';

--Create partitioned and bucketed table
CREATE TABLE student (id INT, name STRING, age INT)
    USING CSV
    PARTITIONED BY (age)
    CLUSTERED BY (Id)
    SORTED BY (Id ASC) INTO 4 buckets;

--Create partitioned and bucketed table through CTAS
CREATE TABLE student_partition_bucket
    USING parquet
    PARTITIONED BY (age)
    CLUSTERED BY (id) INTO 4 buckets
    AS SELECT * FROM student;

--Create bucketed table through CTAS and CTE
CREATE TABLE student_bucket
    USING parquet
    CLUSTERED BY (id) INTO 4 buckets (
    WITH tmpTable AS (
        SELECT * FROM student WHERE id > 100
    )
    SELECT * FROM tmpTable
);

-- dtstack SparkSQL/HiveSQL lifecycle
CREATE TABLE IF NOT EXISTS t1 (
    id INT COMMENT '索引',
    name STRING COMMENT '姓名',
    age SMALLINT COMMENT '年龄'
) COMMENT "t1表" lifecycle 29;


-- ============================================


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


-- ============================================


-- Syntax
-- CREATE TABLE [IF NOT EXISTS] table_identifier LIKE source_table_identifier
--     USING data_source
--     [ ROW FORMAT row_format ]
--     [ STORED AS file_format ]
--     [ TBLPROPERTIES ( key1=val1, key2=val2, ... ) ]
--     [ LOCATION path ]

-- Create table using an existing table
CREATE TABLE Student_Duple like Student;
CREATE TABLE IF NOT EXISTS Student_Duple like Student;

-- Create table like using a data source
CREATE TABLE Student_Duple like Student USING CSV;

-- Table is created as external table at the location specified
CREATE TABLE Student_Duple like Student location '/root1/home';

-- Create table like using a rowformat
CREATE TABLE Student_Duple like Student
    ROW FORMAT DELIMITED FIELDS TERMINATED BY ','
    STORED AS TEXTFILE
    TBLPROPERTIES ('owner'='xxxx');


-- ============================================


-- dtstack SparkSQL/HiveSQL lifecycle
CREATE TABLE Student_Duple like Student
    ROW FORMAT DELIMITED FIELDS TERMINATED BY ','
    STORED AS TEXTFILE
    TBLPROPERTIES ('owner'='xxxx') lifecycle 29;


-- ============================================


-- Syntax
-- CREATE [ OR REPLACE ] [ [ GLOBAL ] TEMPORARY ] VIEW [ IF NOT EXISTS ] view_identifier create_view_clauses AS query

CREATE OR REPLACE VIEW experienced_employee (ID COMMENT 'Unique identification number', Name) COMMENT 'View for experienced employees' AS SELECT id, name FROM all_employee WHERE working_years > 5;
CREATE VIEW experienced_employee (ID COMMENT 'Unique identification number', Name) COMMENT 'View for experienced employees' AS SELECT id, name FROM all_employee WHERE working_years > 5;

CREATE OR REPLACE GLOBAL TEMPORARY VIEW IF NOT EXISTS subscribed_movies AS SELECT mo.member_id, mb.full_name, mo.movie_title FROM movies AS mo INNER JOIN members AS mb ON mo.member_id = mb.id;
CREATE OR REPLACE GLOBAL TEMPORARY VIEW subscribed_movies AS SELECT mo.member_id, mb.full_name, mo.movie_title FROM movies AS mo INNER JOIN members AS mb ON mo.member_id = mb.id;
CREATE GLOBAL TEMPORARY VIEW IF NOT EXISTS subscribed_movies AS SELECT mo.member_id, mb.full_name, mo.movie_title FROM movies AS mo INNER JOIN members AS mb ON mo.member_id = mb.id;
CREATE GLOBAL TEMPORARY VIEW subscribed_movies AS SELECT mo.member_id, mb.full_name, mo.movie_title FROM movies AS mo INNER JOIN members AS mb ON mo.member_id = mb.id;
