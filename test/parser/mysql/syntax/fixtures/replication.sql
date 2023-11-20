-- https://dev.mysql.com/doc/refman/8.0/en/purge-binary-logs.html

/* PURGE { BINARY | MASTER } LOGS {
    TO 'log_name'
  | BEFORE datetime_expr
} */

PURGE BINARY LOGS TO 'mysql-bin.010';
PURGE BINARY LOGS BEFORE '2019-04-02 22:46:26';
PURGE MASTER LOGS TO 'mysql-bin.010';
PURGE MASTER LOGS BEFORE '2019-04-02 22:46:26';


/* https://dev.mysql.com/doc/refman/5.7/en/reset-master.html */

RESET MASTER;
