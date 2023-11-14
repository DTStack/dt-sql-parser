-- ALTER VIEW [database_name.]view_name [(column_name [COMMENT 'column_comment'][, ...])] AS select_statement;
ALTER VIEW my_view
AS SELECT column_name1, column_name2, column_name3 FROM table_name;
ALTER VIEW my_view
(column_name1 COMMENT 'Column 1', column_name2, column_name3 COMMENT 'Column 3')
AS SELECT column_name1, column_name2, column_name3 FROM table_name;
ALTER VIEW db1.my_view
(column_name1 COMMENT 'Column 1', column_name2, column_name3 COMMENT 'Column 3')
AS SELECT column_name1, column_name2, column_name3 FROM table_name;
ALTER VIEW my_view
(col1 COMMENT 'Description for Column 1', col2, col3 COMMENT 'Description for Column 3')
AS SELECT col1, col2, col3 FROM my_table;

-- ALTER VIEW [database_name.]view_name RENAME TO [database_name.]view_name;
ALTER VIEW db1.v1 RENAME TO db2.v2;
ALTER VIEW v1 RENAME TO db2.v2;
ALTER VIEW v1 RENAME TO v2;
ALTER VIEW db1.v1 RENAME TO v2;

-- ALTER VIEW [database_name.]view_name SET OWNER USER user_name;
ALTER VIEW my_view SET OWNER USER 'name';
ALTER VIEW db.my_view SET OWNER USER 'name';

-- ALTER VIEW [database_name.]view_name SET TBLPROPERTIES ('name' = 'value'[, 'name' = 'value' ...]);
ALTER VIEW v1 SET TBLPROPERTIES ('tblp1' = '1', 'tblp2' = '2', 'tblp3' = '3');
ALTER VIEW db.v1 SET TBLPROPERTIES ('tblp1' = '1', 'tblp2' = '2', 'tblp3' = '3');
ALTER VIEW db.v1 SET TBLPROPERTIES ('tblp1' = '1');


-- ALTER VIEW [database_name.]view_name UNSET TBLPROPERTIES ('name'[, ...]);
ALTER VIEW v1 UNSET TBLPROPERTIES ('tblp1', 'tblp2');
ALTER VIEW db.v1 UNSET TBLPROPERTIES ('tblp1');
ALTER VIEW db.v1 UNSET TBLPROPERTIES ('tblp1', 'tblp2', 'tblp3');

-- example
ALTER VIEW v1 AS SELECT x, UPPER(s) s FROM t2;
ALTER VIEW v1 (c1, c2) AS SELECT x, UPPER(s) s FROM t2;
ALTER VIEW v7 (c1 COMMENT 'Comment for c1', c2) AS SELECT t1.c1, t1.c2 FROM t1;
ALTER VIEW db1.v1 RENAME TO db2.v2;
ALTER VIEW db1.v1 RENAME TO db1.v2;
ALTER VIEW db1.v1 RENAME TO db2.v1;
ALTER VIEW v1 SET TBLPROPERTIES ('tblp1' = '1', 'tblp2' = '2');
ALTER VIEW v1 UNSET TBLPROPERTIES ('tblp1', 'tblp2');
