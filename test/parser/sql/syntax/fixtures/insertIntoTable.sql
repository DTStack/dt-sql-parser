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
