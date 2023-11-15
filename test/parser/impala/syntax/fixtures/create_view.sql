/* CREATE VIEW [IF NOT EXISTS] view_name
    [(column_name [COMMENT 'column_comment'][, ...])]
    [COMMENT 'view_comment']
    [TBLPROPERTIES ('name' = 'value'[, ...])]
  AS select_statement */
CREATE VIEW my_view AS SELECT * FROM my_table;
CREATE VIEW IF NOT EXISTS my_view AS SELECT * FROM my_table;
CREATE VIEW IF NOT EXISTS my_view (age COMMENT 'this is number col') AS SELECT * FROM my_table;
CREATE VIEW IF NOT EXISTS my_view (age COMMENT 'this is number col') COMMENT 'this is test view' AS SELECT * FROM my_table;
CREATE VIEW my_view (age COMMENT 'this is number col') COMMENT 'this is test view' TBLPROPERTIES ('tblp1' = '1', 'aaa' = '2') AS SELECT * FROM my_table;
CREATE VIEW my_view COMMENT 'this is test view' TBLPROPERTIES ('tblp1' = '1', 'aaa' = '2') AS SELECT * FROM my_table;
CREATE VIEW my_view (age COMMENT 'this is number col', age1 COMMENT 'this is number col') TBLPROPERTIES ('tblp1' = '1') AS SELECT * FROM my_table;

-- example
CREATE VIEW v1 AS SELECT * FROM t1;
CREATE VIEW v2 AS SELECT c1, c3, c7 FROM t1;
CREATE VIEW v3 AS SELECT DISTINCT c1, c3, c7 FROM t1 WHERE c1 IS NOT NULL AND c5 > 0;
CREATE VIEW v4 AS SELECT c4 AS last_name, c6 AS address, c2 AS birth_date FROM t1;
CREATE VIEW v5 AS SELECT c1, CAST(c3 AS STRING) c3, CONCAT(c4,c5) c5, TRIM(c6) c6, "Constant" c8 FROM t1;
CREATE VIEW v6 AS SELECT t1.c1, t2.c2 FROM t1 JOIN t2 ON t1.id = t2.id;
CREATE VIEW v7 (c1 COMMENT 'Comment for c1', c2) COMMENT 'Comment for v7' AS SELECT t1.c1, t1.c2 FROM t1;
CREATE VIEW v7 (c1 , c2) TBLPROPERTIES ('tblp1' = '1') AS SELECT t1.c1, t1.c2 FROM t1;