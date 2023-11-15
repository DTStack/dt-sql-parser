/* CREATE FUNCTION [IF NOT EXISTS] [db_name.]function_name([arg_type[, arg_type...])
  RETURNS return_type
  LOCATION 'hdfs_path_to_dot_so'
  SYMBOL='symbol_name' */
CREATE FUNCTION function_name(arg_type1, arg_type2)
RETURNS return_type
LOCATION 'hdfs_path_to_dot_so'
SYMBOL='symbol_name';
CREATE FUNCTION db_name.function_name(arg_type1, arg_type2)
RETURNS return_type
LOCATION 'hdfs_path_to_dot_so'
SYMBOL='symbol_name';
CREATE FUNCTION IF NOT EXISTS function_name(arg_type1, arg_type2)
RETURNS return_type
LOCATION 'hdfs_path_to_dot_so'
SYMBOL='symbol_name';
CREATE FUNCTION IF NOT EXISTS db_name.function_name(arg_type1)
RETURNS return_type
LOCATION 'hdfs_path_to_dot_so'
SYMBOL='symbol_name';
CREATE FUNCTION IF NOT EXISTS db_name.function_name(arg_type1, arg_type2, arg_type3)
RETURNS return_type
LOCATION 'hdfs_path_to_dot_so'
SYMBOL='symbol_name';

/* CREATE FUNCTION [IF NOT EXISTS] [db_name.]function_name
  LOCATION 'hdfs_path_to_jar'
  SYMBOL='class_name' */
CREATE FUNCTION function_name
LOCATION 'hdfs_path_to_dot_so'
SYMBOL='symbol_name';
CREATE FUNCTION db_name.function_name
LOCATION 'hdfs_path_to_dot_so'
SYMBOL='symbol_name';
CREATE FUNCTION IF NOT EXISTS function_name
LOCATION 'hdfs_path_to_dot_so'
SYMBOL='symbol_name';
CREATE FUNCTION IF NOT EXISTS db_name.function_name
LOCATION 'hdfs_path_to_dot_so'
SYMBOL='symbol_name';

/* CREATE [AGGREGATE] FUNCTION [IF NOT EXISTS] [db_name.]function_name([arg_type[, arg_type...])
  RETURNS return_type
  [INTERMEDIATE type_spec]
  LOCATION 'hdfs_path'
  [INIT_FN='function]
  UPDATE_FN='function
  MERGE_FN='function
  [PREPARE_FN='function]
  [CLOSEFN='function]
  [SERIALIZE_FN='function]
  [FINALIZE_FN='function] */
CREATE AGGREGATE FUNCTION function_name(arg_type1, arg_type2)
RETURNS return_type
LOCATION 'hdfs_path'
UPDATE_FN='update_function'
MERGE_FN='merge_function';
CREATE AGGREGATE FUNCTION db_name.function_name(arg_type1, arg_type2)
RETURNS return_type
LOCATION 'hdfs_path'
UPDATE_FN='update_function'
MERGE_FN='merge_function';
CREATE AGGREGATE FUNCTION IF NOT EXISTS function_name(arg_type1, arg_type2)
RETURNS return_type
LOCATION 'hdfs_path'
UPDATE_FN='update_function'
MERGE_FN='merge_function';
CREATE AGGREGATE FUNCTION function_name(arg_type1, arg_type2)
RETURNS return_type
INTERMEDIATE intermediate_type
LOCATION 'hdfs_path'
INIT_FN ='init_function'
UPDATE_FN='update_function'
MERGE_FN='merge_function'
PREPARE_FN = 'prepare_fn'
CLOSEFN = 'closefn'
SERIALIZE_FN = 'serialize_function'
FINALIZE_FN = 'finalize_function';


-- example
create function my_func location '/user/impala/udfs/udf-examples.jar'
  symbol='org.apache.impala.TestUdf';