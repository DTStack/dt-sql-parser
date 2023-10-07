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
