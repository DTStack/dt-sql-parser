-- https://dev.mysql.com/doc/refman/8.0/en/alter-procedure.html

/* ALTER PROCEDURE proc_name [characteristic ...]

characteristic: {
    COMMENT 'string'
  | LANGUAGE SQL
  | { CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }
  | SQL SECURITY { DEFINER | INVOKER }
} */


-- 和 ALTER FUNCTION 语法类似

ALTER PROCEDURE procedure_name;
ALTER PROCEDURE procedure_name COMMENT 'get id';
ALTER PROCEDURE procedure_name COMMENT 'get id' LANGUAGE SQL;
ALTER PROCEDURE procedure_name LANGUAGE SQL;
ALTER PROCEDURE procedure_name NOT DETERMINISTIC;
ALTER PROCEDURE procedure_name CONTAINS SQL;
ALTER PROCEDURE procedure_name NO SQL;
ALTER PROCEDURE procedure_name READS SQL DATA;
ALTER PROCEDURE procedure_name MODIFIES SQL DATA;
ALTER PROCEDURE procedure_name SQL SECURITY DEFINER;
ALTER PROCEDURE procedure_name SQL SECURITY INVOKER;
