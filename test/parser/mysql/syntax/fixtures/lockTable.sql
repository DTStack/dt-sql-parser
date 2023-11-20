-- https://dev.mysql.com/doc/refman/8.0/en/lock-instance-for-backup.html

/* LOCK TABLES
    tbl_name [[AS] alias] lock_type
    [, tbl_name [[AS] alias] lock_type] ...

lock_type: {
    READ [LOCAL]
  | [LOW_PRIORITY] WRITE
}

UNLOCK TABLES */


LOCK TABLES t1 READ;
LOCK TABLE t WRITE, t AS t1 READ;
LOCK TABLE t READ;
LOCK TABLE t READ LOCAL;
LOCK TABLE t AS my_alias READ;
LOCK TABLES t1 WRITE, t2 READ;

LOCK TABLES trans READ, customer LOW_PRIORITY WRITE;
LOCK TABLES trans READ, customer WRITE;

UNLOCK TABLES;
