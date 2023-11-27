-- https://dev.mysql.com/doc/refman/8.0/en/insert.html

/* INSERT [LOW_PRIORITY | DELAYED | HIGH_PRIORITY] [IGNORE]
    [INTO] tbl_name
    [PARTITION (partition_name [, partition_name] ...)]
    [(col_name [, col_name] ...)]
    { {VALUES | VALUE} (value_list) [, (value_list)] ... }
    [AS row_alias[(col_alias [, col_alias] ...)]]
    [ON DUPLICATE KEY UPDATE assignment_list]

INSERT [LOW_PRIORITY | DELAYED | HIGH_PRIORITY] [IGNORE]
    [INTO] tbl_name
    [PARTITION (partition_name [, partition_name] ...)]
    SET assignment_list
    [AS row_alias[(col_alias [, col_alias] ...)]]
    [ON DUPLICATE KEY UPDATE assignment_list]

INSERT [LOW_PRIORITY | HIGH_PRIORITY] [IGNORE]
    [INTO] tbl_name
    [PARTITION (partition_name [, partition_name] ...)]
    [(col_name [, col_name] ...)]
    { SELECT ...
      | TABLE table_name
      | VALUES row_constructor_list
    }
    [ON DUPLICATE KEY UPDATE assignment_list]


value:
    {expr | DEFAULT}

value_list:
    value [, value] ...

row_constructor_list:
    ROW(value_list)[, ROW(value_list)][, ...]

assignment:
    col_name =
          value
        | [row_alias.]col_name
        | [tbl_name.]col_name
        | [row_alias.]col_alias

assignment_list:
    assignment [, assignment] ... */


INSERT LOW_PRIORITY IGNORE INTO tbl_name PARTITION (partition_name, partition_name1) (col_name, col_name1) VALUES (KW_DEFAULT, KW_DEFAULT), (KW_DEFAULT, KW_DEFAULT) AS row_alias(col_alias, col_alias1) ON DUPLICATE KEY UPDATE col_name = 'abc';
INSERT LOW_PRIORITY IGNORE INTO tbl_name PARTITION (partition_name, partition_name1) (col_name, col_name1) VALUE (KW_DEFAULT, KW_DEFAULT), (KW_DEFAULT, KW_DEFAULT) AS row_alias(col_alias, col_alias1) ON DUPLICATE KEY UPDATE col_name = 'abc';

INSERT LOW_PRIORITY IGNORE INTO tbl_name PARTITION (partition_name, partition_name1) (col_name, col_name1) VALUES (value_list), (value_list1) AS row_alias(col_alias, col_alias1) ON DUPLICATE KEY UPDATE col_name = tbl_name.col_name;
INSERT LOW_PRIORITY IGNORE INTO tbl_name PARTITION (partition_name, partition_name1) (col_name, col_name1) VALUES (value_list), (value_list1) AS row_alias(col_alias, col_alias1) ON DUPLICATE KEY UPDATE col_name = 'abc', col_name = tbl_name.col_name;

INSERT LOW_PRIORITY IGNORE INTO tbl_name PARTITION (partition_name, partition_name1) (col_name, col_name1) VALUES (value_list), (value_list1) AS row_alias(col_alias) ON DUPLICATE KEY UPDATE col_name = 'abc';
INSERT LOW_PRIORITY IGNORE INTO tbl_name PARTITION (partition_name, partition_name1) (col_name, col_name1) VALUES (value_list), (value_list1) AS row_alias ON DUPLICATE KEY UPDATE col_name = 'abc';

INSERT LOW_PRIORITY IGNORE INTO tbl_name PARTITION (partition_name, partition_name1) SET col_name = 'abc' AS row_alias(col_alias, col_alias1) ON DUPLICATE KEY UPDATE col_name = 'abc';
INSERT LOW_PRIORITY IGNORE INTO tbl_name PARTITION (partition_name, partition_name1) SET col_name = 'abc' AS row_alias(col_alias) ON DUPLICATE KEY UPDATE col_name = 'abc';
INSERT LOW_PRIORITY IGNORE INTO tbl_name PARTITION (partition_name, partition_name1) SET col_name = 'abc', col_name1 = tbl_name.col_name AS row_alias ON DUPLICATE KEY UPDATE col_name = 'abc';

INSERT LOW_PRIORITY IGNORE INTO tbl_name PARTITION (partition_name, partition_name1) (col_name, col_name1) VALUES ROW(1,2,3), ROW(4,5,6), ROW(7,8,9) ON DUPLICATE KEY UPDATE col_name = 'abc';
INSERT LOW_PRIORITY IGNORE INTO tbl_name PARTITION (partition_name, partition_name1) (col_name, col_name1) TABLE table_name ON DUPLICATE KEY UPDATE col_name = 'abc';

INSERT DELAYED IGNORE INTO tbl_name PARTITION (partition_name, partition_name1) (col_name, col_name1) TABLE table_name ON DUPLICATE KEY UPDATE col_name = 'abc';

INSERT INTO tbl_name (col1,col2) VALUES(15,col1*2);
INSERT INTO tbl_name (col1,col2) VALUES(col2*2,15);
INSERT INTO tbl_name (a,b,c) VALUES(1,2,3), (4,5,6), (7,8,9);
INSERT INTO tbl_name (a,b,c) VALUES(1,2,3,4,5,6,7,8,9);
INSERT INTO tbl_name (a,b,c) VALUES ROW(1,2,3), ROW(4,5,6), ROW(7,8,9);


INSERT INTO tbl_temp2 (fld_id) SELECT tbl_temp1.fld_order_id FROM tbl_temp1 WHERE tbl_temp1.fld_order_id > 100;
INSERT INTO ta TABLE tb;

INSERT INTO t1 (a,b,c) VALUES (1,2,3) ON DUPLICATE KEY UPDATE c=c+1;
INSERT INTO t1 (a,b,c) VALUES (1,2,3),(4,5,6) ON DUPLICATE KEY UPDATE c=VALUES(a)+VALUES(b);
INSERT INTO t1 (a,b,c) VALUES (1,2,3) ON DUPLICATE KEY UPDATE c=3;
INSERT INTO t1 (a,b,c) VALUES (1,2,3),(4,5,6) AS new ON DUPLICATE KEY UPDATE c = new.a+new.b;
INSERT INTO t1 (a,b,c) VALUES (1,2,3),(4,5,6) AS new(m,n,p) ON DUPLICATE KEY UPDATE c = m+n;
INSERT INTO t1 SELECT c, c+d FROM t2 ON DUPLICATE KEY UPDATE b = VALUES(b);
INSERT INTO t1 SELECT * FROM (SELECT c, c+d AS e FROM t2) AS dt ON DUPLICATE KEY UPDATE b = e;
INSERT INTO t1 SET a=1,b=2,c=3 AS new ON DUPLICATE KEY UPDATE c = new.a+new.b;
INSERT INTO t1 SET a=1,b=2,c=3 AS new(m,n,p) ON DUPLICATE KEY UPDATE c = m+n;

INSERT INTO t1 (a, b) SELECT c, d FROM t2 UNION SELECT e, f FROM t3 ON DUPLICATE KEY UPDATE b = b + c;
INSERT INTO t1 (a, b) SELECT * FROM (SELECT c, d FROM t2 UNION SELECT e, f FROM t3) AS dt ON DUPLICATE KEY UPDATE b = b + c;
