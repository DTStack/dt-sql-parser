-- https://dev.mysql.com/doc/refman/8.0/en/create-function-loadable.html
-- https://dev.mysql.com/doc/refman/5.7/en/create-function-loadable.html

/* CREATE [AGGREGATE] FUNCTION [IF NOT EXISTS] function_name
    RETURNS {STRING|INTEGER|REAL|DECIMAL}
    SONAME shared_library_name */


CREATE AGGREGATE FUNCTION IF NOT EXISTS GetSum(a INT, b INT) RETURNS INTEGER RETURN a + b;

CREATE FUNCTION GetSum(a INT, b INT) RETURNS INTEGER RETURN a + b;
CREATE FUNCTION GetSum(a INT, b INT) RETURNS VARCHAR RETURN a + b;
CREATE FUNCTION GetSum(a INT, b INT) RETURNS REAL RETURN a + b;
CREATE FUNCTION GetSum(a INT, b INT) RETURNS DECIMAL RETURN a + b;

CREATE FUNCTION hello (s CHAR(20)) RETURNS CHAR(50) DETERMINISTIC RETURN CONCAT('Hello, ',s,'!');
