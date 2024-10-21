-- Syntax
-- INSERT INTO [ TABLE ] table_identifier REPLACE WHERE boolean_expression query

-- Single Row Insert Using a VALUES Clause
INSERT INTO students VALUES ('Amy Smith', '123 Park Ave, San Jose', 111, 12.34, '-=--@#!$%%');

-- Multi-Row Insert Using a VALUES Clause
INSERT INTO students VALUES ('Bob Brown', '456 Taylor St, Cupelation', 222222), ('Cathy Johnson', '789 Race Ave, Pale Alto', 333333);

-- Insert Using a SELECT Statement
INSERT INTO students PARTITION (student_id = 444444) SELECT name, address FROM persons WHERE name = "Dora Williams";

-- Insert Using a REPLACE WHERE Statement
INSERT INTO persons REPLACE WHERE ssn = 123456789 SELECT * FROM persons2;

-- Insert Using a TABLE Statement
INSERT INTO students TABLE visiting_students;

-- Insert Using a FROM Statement
INSERT INTO students FROM applicants SELECT name, address, student_id WHERE qualified = true;

-- Insert Using a Typed Date Literal for a Partition Column Value
INSERT INTO students PARTITION (birthday = date'2019-01-02') VALUES ('Amy Smith', '123 Park Ave, San Jose');

-- Insert with a column list
INSERT INTO students (address, name, student_id) VALUES ('Hangzhou, China', 'Kent Yao', 11215016);

-- Insert with both a partition spec and a column list
INSERT INTO students PARTITION (student_id = 11215017) (address, name) VALUES ('Hangzhou, China', 'Kent Yao Jr.');


-- ============================================


-- Syntax
-- INSERT OVERWRITE [ LOCAL ] DIRECTORY [ directory_path ]
--     { spark_format | hive_format }
--     { VALUES ( { value | NULL } [ , ... ] ) [ , ( ... ) ] | query }
--     USING file_format [ OPTIONS ( key = val [ , ... ] ) ]
--     [ ROW FORMAT row_format ] [ STORED AS hive_serde ]

INSERT OVERWRITE DIRECTORY '/path/to/output/directory' SELECT * FROM your_table WHERE condition;
INSERT OVERWRITE DIRECTORY '/tmp/destination'
    USING parquet
    OPTIONS (col1 1, col2 2, col3 'test')
    SELECT * FROM test_table;
INSERT OVERWRITE DIRECTORY
    USING parquet
    OPTIONS ('path' '/tmp/destination', col1 1, col2 2, col3 'test')
    SELECT * FROM test_table;
INSERT OVERWRITE LOCAL DIRECTORY '/tmp/destination'
    USING parquet
    OPTIONS (col1 1, col2 2, col3 'test')
    SELECT * FROM test_table;
INSERT OVERWRITE LOCAL DIRECTORY
    USING parquet
    OPTIONS ('path' '/tmp/destination', col1 1, col2 2, col3 'test')
    SELECT * FROM test_table;


-- ============================================


-- Syntax
-- INSERT [ INTO | OVERWRITE ] [ TABLE ] table_identifier [ partition_spec ] [ ( column_list ) ] { VALUES ( { value | NULL } [ , ... ] ) [ , ( ... ) ] | query }

-- Insert Using a VALUES Clause
INSERT OVERWRITE students VALUES ('Ashur Hill', '456 Erica Ct, Cupelation', 111111), ('Brian Reed', '723 Kern Ave, Pale Alto', 222222);
-- Insert Using a SELECT Statement
INSERT OVERWRITE students PARTITION (student_id = 222222) SELECT name, address FROM persons WHERE name = "Dora Williams";
-- Insert Using a TABLE Statement
INSERT OVERWRITE students TABLE visiting_students;
-- Insert Using a FROM Statement
INSERT OVERWRITE students FROM applicants SELECT name, address, student_id WHERE qualified = true;
-- Insert Using a Typed Date Literal for a Partition Column Value
INSERT OVERWRITE students PARTITION (birthday = date'2019-01-02') VALUES('Jason Wang', '908 Bird St, Saratoga');
-- Insert with a column list
INSERT OVERWRITE students (address, name, student_id) VALUES ('Hangzhou, China', 'Kent Yao', 11215016);
-- Insert with both a partition spec and a column list
INSERT OVERWRITE students PARTITION (student_id = 11215016) (address, name) VALUES ('Hangzhou, China', 'Kent Yao Jr.');
