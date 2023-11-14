-- DROP [AGGREGATE] FUNCTION [IF EXISTS] [db_name.]function_name(type[, type...])
DROP FUNCTION my_function(integer, text);
DROP FUNCTION IF EXISTS my_function(integer, boolean);
DROP FUNCTION my_database.my_function(integer);
DROP AGGREGATE FUNCTION my_function(integer, text);
DROP AGGREGATE FUNCTION IF EXISTS my_function(integer, text, binary);
DROP AGGREGATE FUNCTION my_database.my_function(integer);

-- DROP FUNCTION [IF EXISTS] [db_name.]function_name
DROP FUNCTION my_db.my_func;
DROP FUNCTION IF EXISTS  my_func;
DROP FUNCTION my_func;
DROP FUNCTION IF EXISTS my_db.my_func;

-- example
drop function my_func;