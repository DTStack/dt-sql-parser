-- https://dev.mysql.com/doc/refman/8.0/en/create-function-loadable.html

/* CREATE [AGGREGATE] FUNCTION [IF NOT EXISTS] function_name
    RETURNS {STRING|INTEGER|REAL|DECIMAL}
    SONAME shared_library_name */



CREATE FUNCTION IF NOT EXISTS my_concat_ws RETURNS STRING SONAME 'udf_my_concat_ws.so';
CREATE FUNCTION my_concat_ws RETURNS INTEGER SONAME 'udf_my_concat_ws.so';
CREATE FUNCTION my_concat_ws RETURNS REAL SONAME 'udf_my_concat_ws.so';
CREATE FUNCTION my_concat_ws RETURNS DECIMAL SONAME 'udf_my_concat_ws.so';
CREATE FUNCTION IF NOT EXISTS my_concat_ws RETURNS DECIMAL SONAME 'udf_my_concat_ws.so';
