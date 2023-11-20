-- https://dev.mysql.com/doc/refman/8.0/en/alter-instance.html

/* ALTER INSTANCE instance_action

instance_action: {
  | {ENABLE|DISABLE} INNODB REDO_LOG
  | ROTATE INNODB MASTER KEY
  | ROTATE BINLOG MASTER KEY
  | RELOAD TLS
      [FOR CHANNEL {mysql_main | mysql_admin}]
      [NO ROLLBACK ON ERROR]
  | RELOAD KEYRING
} */


ALTER INSTANCE ROTATE INNODB MASTER KEY;
