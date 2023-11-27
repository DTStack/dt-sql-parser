-- https://dev.mysql.com/doc/refman/8.0/en/optimize-table.html

/* OPTIMIZE [NO_WRITE_TO_BINLOG | LOCAL]
    TABLE tbl_name [, tbl_name] ... */


OPTIMIZE NO_WRITE_TO_BINLOG TABLE t1, t2, t3;
OPTIMIZE LOCAL TABLE t1, t2, t3;
OPTIMIZE TABLE t1, t2, t3;

OPTIMIZE NO_WRITE_TO_BINLOG TABLE t1;
OPTIMIZE LOCAL TABLE t1;
OPTIMIZE TABLE t1;
