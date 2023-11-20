/* https://dev.mysql.com/doc/refman/8.0/en/show-binary-logs.html */

SHOW BINARY LOGS;
SHOW MASTER LOGS;



/* https://dev.mysql.com/doc/refman/8.0/en/show-binlog-events.html */

/* SHOW BINLOG EVENTS
   [IN 'log_name']
   [FROM pos]
   [LIMIT [offset,] row_count] */

SHOW BINLOG EVENTS IN 'log_name' FROM 50 LIMIT 100, 500;
SHOW BINLOG EVENTS FROM 50 LIMIT 100, 500;
SHOW BINLOG EVENTS IN 'log_name' LIMIT 100, 500;
SHOW BINLOG EVENTS IN 'log_name' LIMIT 500;
SHOW BINLOG EVENTS FROM 50 LIMIT 100, 500;
SHOW BINLOG EVENTS LIMIT 100, 500;
SHOW BINLOG EVENTS LIMIT 500;
SHOW BINLOG EVENTS;



/* https://dev.mysql.com/doc/refman/8.0/en/show-character-set.html */

/* SHOW {CHARACTER SET | CHARSET}
    [LIKE 'pattern' | WHERE expr] */

SHOW CHARACTER SET WHERE age = 18;
SHOW CHARSET LIKE 'pattern';



/* https://dev.mysql.com/doc/refman/8.0/en/show-collation.html */

/* SHOW COLLATION
    [LIKE 'pattern' | WHERE expr] */


SHOW COLLATION LIKE 'pattern';
SHOW COLLATION WHERE age = 18;



/* https://dev.mysql.com/doc/refman/8.0/en/show-columns.html */

/* SHOW [EXTENDED] [FULL] {COLUMNS | FIELDS}
    {FROM | IN} tbl_name
    [{FROM | IN} db_name]
    [LIKE 'pattern' | WHERE expr] */

SHOW EXTENDED COLUMNS FROM tbl_name IN db_name LIKE 'pattern';
SHOW EXTENDED FULL COLUMNS FROM tbl_name IN db_name LIKE 'pattern';
SHOW EXTENDED COLUMNS FROM tbl_name IN db_name LIKE 'pattern';
SHOW FULL COLUMNS FROM tbl_name IN db_name LIKE 'pattern';
SHOW FULL COLUMNS FROM tbl_name IN db_name LIKE 'pattern';
SHOW COLUMNS FROM tbl_name IN db_name LIKE 'pattern';
SHOW COLUMNS IN tbl_name FROM db_name LIKE 'pattern';
SHOW COLUMNS IN tbl_name FROM db_name WHERE age = 18;
SHOW FIELDS IN tbl_name FROM db_name LIKE 'pattern';
SHOW FIELDS IN tbl_name FROM db_name WHERE age = 18;

SHOW COLUMNS FROM my_table FROM my_db;
SHOW COLUMNS FROM my_db.my_table;



/* https://dev.mysql.com/doc/refman/8.0/en/show-create-database.html */

/* SHOW CREATE {DATABASE | SCHEMA} [IF NOT EXISTS] db_name */

SHOW CREATE DATABASE IF NOT EXISTS db_name;
SHOW CREATE SCHEMA IF NOT EXISTS db_name;
SHOW CREATE DATABASE db_name;
SHOW CREATE SCHEMA db_name;



/* https://dev.mysql.com/doc/refman/8.0/en/show-create-event.html */

SHOW CREATE EVENT event_name;
SHOW CREATE EVENT my_schema.e_daily;



/* https://dev.mysql.com/doc/refman/8.0/en/show-create-function.html */

SHOW CREATE FUNCTION func_name;



/* https://dev.mysql.com/doc/refman/8.0/en/show-create-procedure.html */

SHOW CREATE PROCEDURE proc_name;



/* https://dev.mysql.com/doc/refman/8.0/en/show-create-table.html */

SHOW CREATE TABLE tbl_name;



/* https://dev.mysql.com/doc/refman/8.0/en/show-create-trigger.html */

SHOW CREATE TRIGGER trigger_name;



/* https://dev.mysql.com/doc/refman/8.0/en/show-create-user.html */

/* SHOW CREATE USER user */

SHOW CREATE USER user;
SHOW CREATE USER 'u1'@'localhost';



/* https://dev.mysql.com/doc/refman/8.0/en/show-create-view.html */

SHOW CREATE VIEW view_name;
SHOW CREATE VIEW test.v;



/* https://dev.mysql.com/doc/refman/8.0/en/show-databases.html */

/* SHOW {DATABASES | SCHEMAS}
    [LIKE 'pattern' | WHERE expr] */

SHOW DATABASES LIKE 'pattern';
SHOW SCHEMAS LIKE 'pattern';
SHOW DATABASES WHERE age = 18;
SHOW SCHEMAS WHERE age = 18;



/* https://dev.mysql.com/doc/refman/8.0/en/show-engine.html */

/* SHOW ENGINE engine_name {STATUS | MUTEX} */

SHOW ENGINE NDB STATUS;
SHOW ENGINE INNODB STATUS;
SHOW ENGINE INNODB MUTEX;
SHOW ENGINE PERFORMANCE_SCHEMA STATUS;



/* https://dev.mysql.com/doc/refman/8.0/en/show-engines.html */

/* SHOW [STORAGE] ENGINES */

SHOW STORAGE ENGINES;
SHOW ENGINES;



/* https://dev.mysql.com/doc/refman/8.0/en/show-errors.html */

/* SHOW ERRORS [LIMIT [offset,] row_count]
SHOW COUNT(*) ERRORS */

SHOW ERRORS LIMIT 50, 100;
SHOW ERRORS LIMIT 100;
SHOW ERRORS;
SHOW COUNT(*) ERRORS;



/* https://dev.mysql.com/doc/refman/8.0/en/show-events.html */

/* SHOW EVENTS
    [{FROM | IN} schema_name]
    [LIKE 'pattern' | WHERE expr] */

SHOW EVENTS FROM schema_name LIKE 'pattern';
SHOW EVENTS IN schema_name LIKE 'pattern';
SHOW EVENTS IN schema_name WHERE age = 18;
SHOW EVENTS WHERE age = 18;
SHOW EVENTS IN schema_name;
SHOW EVENTS;



/* https://dev.mysql.com/doc/refman/8.0/en/show-function-code.html */

SHOW FUNCTION CODE func_name;



/* https://dev.mysql.com/doc/refman/8.0/en/show-function-status.html */

/* SHOW FUNCTION STATUS
    [LIKE 'pattern' | WHERE expr] */

SHOW FUNCTION STATUS LIKE 'pattern';
SHOW FUNCTION STATUS WHERE age = 18;
SHOW FUNCTION STATUS;



/* https://dev.mysql.com/doc/refman/8.0/en/show-grants.html */

/* SHOW GRANTS
    [FOR user_or_role
        [USING role [, role] ...]]

user_or_role: {
    user (see Section 6.2.4, “Specifying Account Names”)
  | role (see Section 6.2.5, “Specifying Role Names”.
} */

SHOW GRANTS FOR 'jeffrey'@'localhost';
SHOW GRANTS;
SHOW GRANTS FOR CURRENT_USER;
SHOW GRANTS FOR CURRENT_USER();
SHOW GRANTS FOR 'u1'@'localhost' USING 'r2';
SHOW GRANTS FOR 'u1'@'localhost' USING 'r1', 'r2';



/* https://dev.mysql.com/doc/refman/8.0/en/show-index.html */

/* SHOW [EXTENDED] {INDEX | INDEXES | KEYS}
    {FROM | IN} tbl_name
    [{FROM | IN} db_name]
    [WHERE expr] */

SHOW EXTENDED INDEXES FROM tbl_name FROM db_name WHERE age = 18;
SHOW EXTENDED INDEXES FROM tbl_name IN db_name WHERE age = 18;
SHOW EXTENDED INDEX IN tbl_name IN db_name WHERE age = 18;
SHOW INDEXES FROM tbl_name FROM db_name WHERE age = 18;
SHOW INDEXES FROM tbl_name IN db_name WHERE age = 18;
SHOW INDEX IN tbl_name IN db_name WHERE age = 18;
SHOW INDEX IN tbl_name FROM db_name WHERE age = 18;
SHOW KEYS IN tbl_name WHERE age = 18;
SHOW KEYS IN tbl_name FROM db_name;
SHOW KEYS IN tbl_name;



/* https://dev.mysql.com/doc/refman/8.0/en/show-master-status.html */

SHOW MASTER STATUS;



/* https://dev.mysql.com/doc/refman/8.0/en/show-open-tables.html */

/* SHOW OPEN TABLES
    [{FROM | IN} db_name]
    [LIKE 'pattern' | WHERE expr] */

SHOW OPEN TABLES FROM db_name LIKE 'pattern';
SHOW OPEN TABLES FROM db_name WHERE age = 18;
SHOW OPEN TABLES IN db_name LIKE 'pattern';
SHOW OPEN TABLES IN db_name WHERE age = 18;
SHOW OPEN TABLES IN db_name;
SHOW OPEN TABLES WHERE age = 18;
SHOW OPEN TABLES;



/* https://dev.mysql.com/doc/refman/8.0/en/show-plugins.html */

SHOW PLUGINS;



/* https://dev.mysql.com/doc/refman/8.0/en/show-privileges.html */

SHOW PRIVILEGES;



/* https://dev.mysql.com/doc/refman/8.0/en/show-procedure-code.html */

SHOW PROCEDURE CODE proc_name;



/* https://dev.mysql.com/doc/refman/8.0/en/show-procedure-status.html */

/* SHOW PROCEDURE STATUS
    [LIKE 'pattern' | WHERE expr] */

SHOW PROCEDURE STATUS WHERE age = 18;
SHOW PROCEDURE STATUS LIKE 'pattern';
SHOW PROCEDURE STATUS;



/* https://dev.mysql.com/doc/refman/8.0/en/show-processlist.html */

/* SHOW [FULL] PROCESSLIST */

SHOW FULL PROCESSLIST;
SHOW PROCESSLIST;



/* https://dev.mysql.com/doc/refman/8.0/en/show-profile.html */

/* SHOW PROFILE [type [, type] ... ]
    [FOR QUERY n]
    [LIMIT row_count [OFFSET offset]]

type: {
    ALL
  | BLOCK IO
  | CONTEXT SWITCHES
  | CPU
  | IPC
  | MEMORY
  | PAGE FAULTS
  | SOURCE
  | SWAPS
} */

SHOW PROFILE;
SHOW PROFILE FOR QUERY 1;
SHOW PROFILE FOR QUERY 1 LIMIT 100 OFFSET 100;
SHOW PROFILE FOR QUERY 1 LIMIT 100;
SHOW PROFILE ALL FOR QUERY 1 LIMIT 100 OFFSET 100;
SHOW PROFILE ALL, BLOCK IO, CONTEXT SWITCHES, CPU, IPC, MEMORY, PAGE FAULTS, SOURCE, SWAPS FOR QUERY 1 LIMIT 100 OFFSET 100;
SHOW PROFILE ALL, BLOCK IO, CONTEXT SWITCHES, CPU FOR QUERY 1 LIMIT 100 OFFSET 100;
SHOW PROFILE IPC, MEMORY, PAGE FAULTS, SOURCE, SWAPS FOR QUERY 1 LIMIT 100;



/* https://dev.mysql.com/doc/refman/8.0/en/show-profiles.html */

SHOW PROFILES;



/* https://dev.mysql.com/doc/refman/8.0/en/show-relaylog-events.html */

/* SHOW RELAYLOG EVENTS
    [IN 'log_name']
    [FROM pos]
    [LIMIT [offset,] row_count]
    [channel_option]

channel_option:
    FOR CHANNEL channel */


SHOW RELAYLOG EVENTS IN 'log_name' FROM 50 LIMIT 100, 200 FOR CHANNEL 'channel';
SHOW RELAYLOG EVENTS LIMIT 100, 200 FOR CHANNEL 'channel';
SHOW RELAYLOG EVENTS IN 'log_name' FROM 50;
SHOW RELAYLOG EVENTS FROM 50 LIMIT 100, 200 FOR CHANNEL 'channel';
SHOW RELAYLOG EVENTS LIMIT 100, 200 FOR CHANNEL 'channel';
SHOW RELAYLOG EVENTS LIMIT 200 FOR CHANNEL 'channel';
SHOW RELAYLOG EVENTS FOR CHANNEL 'channel';
SHOW RELAYLOG EVENTS;



/* https://dev.mysql.com/doc/refman/8.0/en/show-replicas.html */

SHOW REPLICAS;



/* https://dev.mysql.com/doc/refman/8.0/en/show-slave-hosts.html */

/* {SHOW SLAVE HOSTS | SHOW REPLICAS} */

SHOW SLAVE HOSTS;
SHOW REPLICAS;



/* https://dev.mysql.com/doc/refman/8.0/en/show-replica-status.html */
/* https://dev.mysql.com/doc/refman/8.0/en/show-slave-status.html */

/* SHOW {REPLICA | SLAVE} STATUS [FOR CHANNEL channel] */

SHOW REPLICA STATUS FOR CHANNEL 'channel';
SHOW SLAVE STATUS FOR CHANNEL 'channel';
SHOW REPLICA STATUS;
SHOW SLAVE STATUS;



/* https://dev.mysql.com/doc/refman/8.0/en/show-status.html */

/* SHOW [GLOBAL | SESSION] STATUS
    [LIKE 'pattern' | WHERE expr] */

SHOW GLOBAL STATUS LIKE 'pattern';
SHOW GLOBAL STATUS WHERE age = 18;
SHOW SESSION STATUS LIKE 'pattern';
SHOW SESSION STATUS WHERE age = 18;
SHOW STATUS LIKE 'pattern';
SHOW STATUS WHERE age = 18;
SHOW GLOBAL STATUS;
SHOW SESSION STATUS;
SHOW STATUS;



/* https://dev.mysql.com/doc/refman/8.0/en/show-table-status.html */

/* SHOW TABLE STATUS
    [{FROM | IN} db_name]
    [LIKE 'pattern' | WHERE expr] */

SHOW TABLE STATUS FROM db_name LIKE 'pattern';
SHOW TABLE STATUS IN db_name WHERE age = 18;
SHOW TABLE STATUS IN db_name;
SHOW TABLE STATUS WHERE age = 18;
SHOW TABLE STATUS;



/* https://dev.mysql.com/doc/refman/8.0/en/show-tables.html */

/* SHOW [EXTENDED] [FULL] TABLES
    [{FROM | IN} db_name]
    [LIKE 'pattern' | WHERE expr] */

SHOW EXTENDED FULL TABLES FROM db_name LIKE 'pattern';
SHOW EXTENDED TABLES FROM db_name LIKE 'pattern';
SHOW FULL TABLES IN db_name WHERE age = 18;
SHOW TABLES FROM db_name LIKE 'pattern';
SHOW TABLES IN db_name WHERE age = 18;
SHOW TABLES IN db_name;
SHOW TABLES WHERE age = 18;
SHOW TABLES;



/* https://dev.mysql.com/doc/refman/8.0/en/show-triggers.html */

/* SHOW TRIGGERS
    [{FROM | IN} db_name]
    [LIKE 'pattern' | WHERE expr] */


SHOW TRIGGERS FROM db_name LIKE 'pattern';
SHOW TRIGGERS IN db_name WHERE age = 18;
SHOW TRIGGERS IN db_name;
SHOW TRIGGERS WHERE age = 18;
SHOW TRIGGERS;



/* https://dev.mysql.com/doc/refman/8.0/en/show-variables.html */

/* SHOW [GLOBAL | SESSION] VARIABLES
    [LIKE 'pattern' | WHERE expr] */

SHOW GLOBAL VARIABLES LIKE 'pattern';
SHOW SESSION VARIABLES WHERE age = 18;
SHOW VARIABLES LIKE 'pattern';
SHOW VARIABLES WHERE age = 18;
SHOW VARIABLES;



/* https://dev.mysql.com/doc/refman/8.0/en/show-warnings.html */

/* SHOW WARNINGS [LIMIT [offset,] row_count]
SHOW COUNT(*) WARNINGS */


SHOW WARNINGS LIMIT 100, 200;
SHOW WARNINGS LIMIT 200;
SHOW WARNINGS;
SHOW COUNT(*) WARNINGS;
