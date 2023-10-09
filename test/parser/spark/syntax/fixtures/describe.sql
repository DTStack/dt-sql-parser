-- { DESC | DESCRIBE } DATABASE [ EXTENDED ] db_name

DESCRIBE DATABASE employees;

DESCRIBE DATABASE EXTENDED employees;

DESC DATABASE deployment;


-- { DESC | DESCRIBE } FUNCTION [ EXTENDED ] function_name

DESC FUNCTION abs;

DESC FUNCTION EXTENDED abs;

DESC FUNCTION max;

DESC FUNCTION EXTENDED explode;


-- { DESC | DESCRIBE } [ QUERY ] input_statement

DESCRIBE QUERY SELECT age, sum(age) FROM person GROUP BY age;

DESCRIBE QUERY WITH all_names_cte
    AS (SELECT name from person) SELECT * FROM all_names_cte;

DESC QUERY VALUES(100, 'John', 10000) AS employee(id, name, salary);

DESC QUERY TABLE person;

DESCRIBE FROM person SELECT age;


-- { DESC | DESCRIBE } [ TABLE ] [ format ] table_identifier [ partition_spec ] [ col_name ]

DESCRIBE TABLE customer;

DESCRIBE TABLE salesdb.customer;

DESCRIBE TABLE EXTENDED customer;

DESCRIBE TABLE EXTENDED customer PARTITION (state = 'AR');

DESCRIBE customer salesdb.customer.name;
