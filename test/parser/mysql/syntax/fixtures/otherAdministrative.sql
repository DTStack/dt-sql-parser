/* https://dev.mysql.com/doc/refman/8.0/en/binlog.html */

BINLOG 'str';



/* https://dev.mysql.com/doc/refman/8.0/en/cache-index.html */

/* CACHE INDEX {
      tbl_index_list [, tbl_index_list] ...
    | tbl_name PARTITION (partition_list)
  }
  IN key_cache_name

tbl_index_list:
  tbl_name [{INDEX|KEY} (index_name[, index_name] ...)]

partition_list: {
    partition_name[, partition_name] ...
  | ALL
} */

CACHE INDEX t1, t2, t3 IN hot_cache;
CACHE INDEX t1 IN non_existent_cache;
CACHE INDEX t1 INDEX (index_name, index_name1), t2 KEY (index_name2, index_name3) IN non_existent_cache;

CACHE INDEX t1 PARTITION (partition_name, partition_name1) IN non_existent_cache;
CACHE INDEX t1 PARTITION (ALL) IN non_existent_cache;

CACHE INDEX pt PARTITION (p0) IN kc_fast;
CACHE INDEX pt PARTITION (p1, p3) IN kc_slow;
CACHE INDEX pt PARTITION (ALL) IN kc_all;
CACHE INDEX pt IN kc_all;



/* https://dev.mysql.com/doc/refman/8.0/en/flush.html */

/* FLUSH [NO_WRITE_TO_BINLOG | LOCAL] {
    flush_option [, flush_option] ...
  | tables_option
}

flush_option: {
    BINARY LOGS
  | DES_KEY_FILE
  | ENGINE LOGS
  | ERROR LOGS
  | GENERAL LOGS
  | HOSTS
  | LOGS
  | PRIVILEGES
  | OPTIMIZER_COSTS
  | RELAY LOGS [FOR CHANNEL channel]
  | SLOW LOGS
  | STATUS
  | USER_RESOURCES
}

tables_option: {
    TABLES
  | TABLES tbl_name [, tbl_name] ...
  | TABLES WITH READ LOCK
  | TABLES tbl_name [, tbl_name] ... WITH READ LOCK
  | TABLES tbl_name [, tbl_name] ... FOR EXPORT
} */

FLUSH NO_WRITE_TO_BINLOG BINARY LOGS, ENGINE LOGS, ERROR LOGS, GENERAL LOGS, HOSTS, LOGS, PRIVILEGES, OPTIMIZER_COSTS, RELAY LOGS FOR CHANNEL 'channel', SLOW LOGS, STATUS, USER_RESOURCES;
FLUSH LOCAL BINARY LOGS, ENGINE LOGS, ERROR LOGS, GENERAL LOGS, HOSTS, LOGS, PRIVILEGES, OPTIMIZER_COSTS, RELAY LOGS, SLOW LOGS, STATUS, USER_RESOURCES;
FLUSH LOCAL DES_KEY_FILE, QUERY CACHE;

FLUSH NO_WRITE_TO_BINLOG TABLES;
FLUSH NO_WRITE_TO_BINLOG TABLES t1, t2, t3;
FLUSH NO_WRITE_TO_BINLOG TABLES WITH READ LOCK;
FLUSH LOCAL TABLES t1, t2, t3 WITH READ LOCK;
FLUSH LOCAL TABLES t1, t2, t3 FOR EXPORT;

FLUSH BINARY LOGS;
FLUSH ENGINE LOGS;
FLUSH ERROR LOGS;
FLUSH GENERAL LOGS;
FLUSH RELAY LOGS;
FLUSH SLOW LOGS;



/* https://dev.mysql.com/doc/refman/8.0/en/kill.html */

/* KILL [CONNECTION | QUERY] processlist_id */

KILL CONNECTION processlist_id;
KILL QUERY processlist_id;



/* https://dev.mysql.com/doc/refman/8.0/en/load-index.html */

/* LOAD INDEX INTO CACHE
  tbl_index_list [, tbl_index_list] ...

tbl_index_list:
  tbl_name
    [PARTITION (partition_list)]
    [{INDEX|KEY} (index_name[, index_name] ...)]
    [IGNORE LEAVES]

partition_list: {
    partition_name[, partition_name] ...
  | ALL
} */

LOAD INDEX INTO CACHE t1 PARTITION (p0) INDEX (index_name, index_name1), t2 IGNORE LEAVES;
LOAD INDEX INTO CACHE t1 INDEX (index_name, index_name1), t2 IGNORE LEAVES;
LOAD INDEX INTO CACHE t1 IGNORE LEAVES;
LOAD INDEX INTO CACHE pt PARTITION (p0);
LOAD INDEX INTO CACHE pt PARTITION (p1, p3);
LOAD INDEX INTO CACHE pt PARTITION (ALL);
LOAD INDEX INTO CACHE pt;



/* https://dev.mysql.com/doc/refman/8.0/en/reset.html */

/* RESET reset_option [, reset_option] ...

reset_option: {
    MASTER
  | REPLICA
  | QUERY CACHE
  | SLAVE
} */

RESET MASTER, REPLICA, QUERY CACHE, SLAVE;



/* https://dev.mysql.com/doc/refman/8.0/en/reset-persist.html */

/* RESET PERSIST [[IF EXISTS] system_var_name] */

RESET PERSIST IF EXISTS system_var_name;
RESET PERSIST system_var_name;
RESET PERSIST;



/* https://dev.mysql.com/doc/refman/8.0/en/restart.html */

RESTART;



/* https://dev.mysql.com/doc/refman/8.0/en/shutdown.html */

SHUTDOWN;
