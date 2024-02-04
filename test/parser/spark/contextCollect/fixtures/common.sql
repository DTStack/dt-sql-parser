CREATE TABLE IF NOT EXISTS new_tb1 like like_old_tb;

CREATE TABLE new_tb2 (new_col1 INT, new_col2 STRING)
    PARTITIONED BY (YEAR STRING)
    CLUSTERED BY (new_col1, NAME)
    SORTED BY (new_col1 ASC)
    INTO 3 BUCKETS
    STORED AS PARQUET;

CREATE TABLE student_copy USING CSV AS SELECT * FROM student;

CREATE VIEW new_view1 (ID COMMENT 'Unique identification number', Name) 
COMMENT 'View for experienced employees' 
AS SELECT id, name FROM old_tb_1 WHERE working_years > 5;

SELECT id, name, employee.deptno, deptname FROM employee CROSS JOIN department;

INSERT INTO insert_tb (address, name, student_id) VALUES ('Hangzhou, China', 'Kent Yao', 11215016);

INSERT OVERWRITE target_tb TABLE source_tb;

INSERT OVERWRITE DIRECTORY '/path/to/output/directory' SELECT * FROM from_tb WHERE condition;

CREATE DATABASE IF NOT EXISTS customer_db;

USE NAMESPACE ns1;