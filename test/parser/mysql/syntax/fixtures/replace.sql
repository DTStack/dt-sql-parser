-- https://dev.mysql.com/doc/refman/5.7/en/replace.html

/* REPLACE [LOW_PRIORITY | DELAYED]
    [INTO] tbl_name
    [PARTITION (partition_name [, partition_name] ...)]
    [(col_name [, col_name] ...)]
    { {VALUES | VALUE} (value_list) [, (value_list)] ...
      |
      VALUES row_constructor_list
    }

REPLACE [LOW_PRIORITY | DELAYED]
    [INTO] tbl_name
    [PARTITION (partition_name [, partition_name] ...)]
    SET assignment_list

REPLACE [LOW_PRIORITY | DELAYED]
    [INTO] tbl_name
    [PARTITION (partition_name [, partition_name] ...)]
    [(col_name [, col_name] ...)]
    {SELECT ... | TABLE table_name}

value:
    {expr | DEFAULT}

value_list:
    value [, value] ...

row_constructor_list:
    ROW(value_list)[, ROW(value_list)][, ...]

assignment:
    col_name = value

assignment_list:
    assignment [, assignment] ... */


REPLACE LOW_PRIORITY INTO test PARTITION (partition_name, partition_name1) (col_name, col_name1) VALUES (1, 'Old', '2014-08-20 18:47:00'), (2, 'Old', '2014-08-20 18:48:00');
REPLACE LOW_PRIORITY test PARTITION (partition_name, partition_name1) (col_name) VALUE ('Old');
REPLACE LOW_PRIORITY INTO test PARTITION (partition_name, partition_name1) (col_name, col_name1) VALUES ROW(1,2,3), ROW(4,5,6), ROW(7,8,9);
REPLACE DELAYED test PARTITION (partition_name, partition_name1) (col_name, col_name1) VALUES (1, 'Old', '2014-08-20 18:47:00'), (2, 'Old', '2014-08-20 18:48:00');
REPLACE DELAYED INTO test PARTITION (partition_name, partition_name1) (col_name) VALUE ('Old');
REPLACE DELAYED test PARTITION (partition_name, partition_name1) (col_name, col_name1) VALUES ROW(1,2,3), ROW(4,5,6), ROW(7,8,9);
REPLACE LOW_PRIORITY INTO test VALUES (1, 'Old', '2014-08-20 18:47:00'), (2, 'Old', '2014-08-20 18:48:00');
REPLACE LOW_PRIORITY test VALUE ('Old');
REPLACE LOW_PRIORITY INTO test VALUES ROW(1,2,3), ROW(4,5,6), ROW(7,8,9);
REPLACE DELAYED test VALUES (1, 'Old', '2014-08-20 18:47:00'), (2, 'Old', '2014-08-20 18:48:00');
REPLACE DELAYED INTO test VALUE ('Old');
REPLACE DELAYED test VALUES ROW(1,2,3), ROW(4,5,6), ROW(7,8,9);

REPLACE LOW_PRIORITY INTO test PARTITION (partition_name, partition_name1) SET col_name = 'abc', col_name1 = tbl_name.col_name1;
REPLACE INTO test PARTITION (partition_name, partition_name1) SET col_name = 'abc', col_name1 = tbl_name.col_name1;
REPLACE LOW_PRIORITY test PARTITION (partition_name, partition_name1) SET col_name = tbl_name.col_name;
REPLACE DELAYED INTO test PARTITION (partition_name, partition_name1) SET col_name = 'abc', col_name1 = tbl_name.col_name1;
REPLACE DELAYED test PARTITION (partition_name, partition_name1) SET col_name = tbl_name.col_name;

REPLACE LOW_PRIORITY INTO test PARTITION (partition_name, partition_name1) (col_name, col_name1) SELECT tbl_temp1.fld_order_id FROM tbl_temp1 WHERE tbl_temp1.fld_order_id > 100;
REPLACE LOW_PRIORITY INTO test PARTITION (partition_name, partition_name1) (col_name, col_name1) SELECT c, c+d AS e FROM t2;
REPLACE LOW_PRIORITY INTO test PARTITION (partition_name, partition_name1) (col_name, col_name1) TABLE table_name;
REPLACE DELAYED test SELECT tbl_temp1.fld_order_id FROM tbl_temp1 WHERE tbl_temp1.fld_order_id > 100;
REPLACE DELAYED test SELECT c, c+d AS e FROM t2;
REPLACE DELAYED test TABLE table_name;
REPLACE test TABLE table_name;

REPLACE INTO test VALUES (1, 'Old', '2014-08-20 18:47:00');
