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
