/* https://dev.mysql.com/doc/refman/8.0/en/set-variable.html */

/* SET variable = expr [, variable = expr] ...

variable: {
    user_var_name
  | param_name
  | local_var_name
  | {GLOBAL | @@GLOBAL.} system_var_name
  | {PERSIST | @@PERSIST.} system_var_name
  | {PERSIST_ONLY | @@PERSIST_ONLY.} system_var_name
  | [SESSION | @@SESSION. | @@] system_var_name
} */



SET @var_name = expr;
SET @name = 43;
SET @total_tax = (SELECT SUM(tax) FROM taxable_transactions);
SET GLOBAL max_connections = 1000;
SET @@GLOBAL.max_connections = 1000;
SET SESSION sql_mode = 'TRADITIONAL';
SET LOCAL sql_mode = 'TRADITIONAL';
SET @@SESSION.sql_mode = 'TRADITIONAL';
SET @@LOCAL.sql_mode = 'TRADITIONAL';
SET @@sql_mode = 'TRADITIONAL';
SET sql_mode = 'TRADITIONAL';
SET PERSIST max_connections = 1000;
SET @@PERSIST.max_connections = 1000;
SET PERSIST_ONLY back_log = 100;
SET @@PERSIST_ONLY.back_log = 100;
SET @@SESSION.max_join_size = DEFAULT;
SET @@SESSION.max_join_size = @@GLOBAL.max_join_size;
SET GLOBAL version = 'abc';
SET GLOBAL sql_log_bin = ON;
SET SESSION max_connections = 1000;
SET max_connections = 1000;
SET PERSIST port = 3307;
SET PERSIST_ONLY port = 3307;
SET @x = 1, SESSION sql_mode = '';
SET GLOBAL sort_buffer_size = 1000000, SESSION sort_buffer_size = 1000000;
SET @@GLOBAL.sort_buffer_size = 1000000, @@LOCAL.sort_buffer_size = 1000000;
SET GLOBAL max_connections = 1000, sort_buffer_size = 1000000;
SET @@GLOBAL.sort_buffer_size = 50000, sort_buffer_size = 1000000;
SELECT @@GLOBAL.sql_mode, @@SESSION.sql_mode, @@sql_mode;
