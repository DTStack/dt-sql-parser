-- https://dev.mysql.com/doc/refman/8.0/en/alter-function.html

/* ALTER FUNCTION func_name [characteristic ...]

characteristic: {
    COMMENT 'string'
  | LANGUAGE SQL
  | { CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }
  | SQL SECURITY { DEFINER | INVOKER }
} */


ALTER FUNCTION function_name;
ALTER FUNCTION function_name COMMENT 'get id';
ALTER FUNCTION function_name COMMENT 'get id' LANGUAGE SQL;
ALTER FUNCTION function_name LANGUAGE SQL;
ALTER FUNCTION function_name NOT DETERMINISTIC;
ALTER FUNCTION function_name CONTAINS SQL;
ALTER FUNCTION function_name NO SQL;
ALTER FUNCTION function_name READS SQL DATA;
ALTER FUNCTION function_name MODIFIES SQL DATA;
ALTER FUNCTION function_name SQL SECURITY DEFINER;
ALTER FUNCTION function_name SQL SECURITY INVOKER;
