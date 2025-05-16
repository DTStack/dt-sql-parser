CREATE TABLE IF NOT EXISTS new_tb1 like like_old_tb;

CREATE TABLE new_tb2 (new_col1 INT COMMENT 'this is new col1', new_col2 STRING)
    PARTITIONED BY (YEAR STRING)
    CLUSTERED BY (new_col1, NAME)
    SORTED BY (new_col1 ASC)
    INTO 3 BUCKETS
    STORED AS PARQUET
    COMMENT 'this is new_tb2 comment';

CREATE TABLE student_copy USING CSV AS SELECT * FROM student;

CREATE VIEW new_view1 (ID COMMENT 'Unique identification number', Name) 
COMMENT 'View for experienced employees' 
AS SELECT id, name FROM old_tb_1 WHERE working_years > 5;

SELECT id, name, em.deptno, deptname FROM employee AS em CROSS JOIN department AS dept;

INSERT INTO insert_tb (address, name, student_id) VALUES ('Hangzhou, China', 'Kent Yao', 11215016);

INSERT OVERWRITE target_tb TABLE source_tb;

INSERT OVERWRITE DIRECTORY '/path/to/output/directory' SELECT * FROM from_tb WHERE condition;

CREATE DATABASE IF NOT EXISTS customer_db COMMENT 'this is database comment';

USE NAMESPACE ns1;

CREATE OR REPLACE FUNCTION simple_udf AS 'SimpleUdfR';

CREATE FUNCTION simple_udf AS 'SimpleUdfR';