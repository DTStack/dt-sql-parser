-- https://dev.mysql.com/doc/refman/8.0/en/create-function-loadable.html

/* CREATE [AGGREGATE] FUNCTION [IF NOT EXISTS] function_name
    RETURNS {STRING|INTEGER|REAL|DECIMAL}
    SONAME shared_library_name */



CREATE FUNCTION IF NOT EXISTS my_concat_ws RETURNS STRING SONAME 'udf_my_concat_ws.so';
CREATE FUNCTION my_concat_ws RETURNS INTEGER SONAME 'udf_my_concat_ws.so';
CREATE FUNCTION my_concat_ws RETURNS REAL SONAME 'udf_my_concat_ws.so';
CREATE FUNCTION my_concat_ws RETURNS DECIMAL SONAME 'udf_my_concat_ws.so';
CREATE FUNCTION IF NOT EXISTS my_concat_ws RETURNS DECIMAL SONAME 'udf_my_concat_ws.so';



-- https://dev.mysql.com/doc/refman/8.0/en/create-procedure.html

CREATE FUNCTION hello (s CHAR(20)) RETURNS CHAR(50) DETERMINISTIC RETURN CONCAT('Hello, ',s,'!');
CREATE DEFINER = 'user' FUNCTION hello (s CHAR(20)) RETURNS CHAR(50) DETERMINISTIC RETURN CONCAT('Hello, ',s,'!');
CREATE FUNCTION `uuidToBinary`(_uuid BINARY(36)) RETURNS binary(16) DETERMINISTIC SQL SECURITY INVOKER RETURN UNHEX(
    CONCAT(
        SUBSTR(_uuid, 15, 4),
        SUBSTR(_uuid, 10, 4),
        SUBSTR(_uuid, 1, 8),
        SUBSTR(_uuid, 20, 4),
        SUBSTR(_uuid, 25)
    )
);
CREATE FUNCTION AddNumbers(num1 INT, num2 INT) RETURNS INT RETURN num1 + num2;
