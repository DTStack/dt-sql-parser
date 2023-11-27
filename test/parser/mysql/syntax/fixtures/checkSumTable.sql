-- https://dev.mysql.com/doc/refman/8.0/en/checksum-table.html

/* CHECKSUM TABLE tbl_name [, tbl_name] ... [QUICK | EXTENDED] */


CHECKSUM TABLE t1, t2, t3 QUICK;
CHECKSUM TABLE t1, t2, t3 EXTENDED;
CHECKSUM TABLE t1 QUICK;
CHECKSUM TABLE t1 EXTENDED;
