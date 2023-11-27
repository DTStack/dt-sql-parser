-- https://dev.mysql.com/doc/refman/8.0/en/join.html

/* table_references:
    escaped_table_reference [, escaped_table_reference] ...

escaped_table_reference: {
    table_reference
  | { OJ table_reference }
}

table_reference: {
    table_factor
  | joined_table
}

table_factor: {
    tbl_name [PARTITION (partition_names)]
        [[AS] alias] [index_hint_list]
  | [LATERAL] table_subquery [AS] alias [(col_list)]
  | ( table_references )
}

joined_table: {
    table_reference {[INNER | CROSS] JOIN | STRAIGHT_JOIN} table_factor [join_specification]
  | table_reference {LEFT|RIGHT} [OUTER] JOIN table_reference join_specification
  | table_reference NATURAL [INNER | {LEFT|RIGHT} [OUTER]] JOIN table_factor
}

join_specification: {
    ON search_condition
  | USING (join_column_list)
}

join_column_list:
    column_name [, column_name] ...

index_hint_list:
    index_hint [, index_hint] ...

index_hint: {
    USE {INDEX|KEY}
      [FOR {JOIN|ORDER BY|GROUP BY}] ([index_list])
  | {IGNORE|FORCE} {INDEX|KEY}
      [FOR {JOIN|ORDER BY|GROUP BY}] (index_list)
}

index_list:
    index_name [, index_name] ... */


SELECT * FROM t1 LEFT JOIN (t2, t3, t4) ON (t2.a = t1.a AND t3.b = t1.b AND t4.c = t1.c);
SELECT * FROM t1 LEFT JOIN (t2 CROSS JOIN t3 CROSS JOIN t4) ON (t2.a = t1.a AND t3.b = t1.b AND t4.c = t1.c);

SELECT t1.name, t2.salary FROM employee AS t1 INNER JOIN info AS t2 ON t1.name = t2.name;
SELECT t1.name, t2.salary FROM employee t1 INNER JOIN info t2 ON t1.name = t2.name;

SELECT left_tbl.* FROM left_tbl LEFT JOIN right_tbl ON left_tbl.id = right_tbl.id WHERE right_tbl.id IS NULL;
SELECT left_tbl.* FROM { OJ left_tbl LEFT OUTER JOIN right_tbl ON left_tbl.id = right_tbl.id } WHERE right_tbl.id IS NULL;

SELECT * FROM table1, table2;
SELECT * FROM table1 INNER JOIN table2 ON table1.id = table2.id;
SELECT * FROM table1 LEFT JOIN table2 ON table1.id = table2.id;
SELECT * FROM table1 LEFT JOIN table2 USING (id);
SELECT * FROM table1 LEFT JOIN table2 ON table1.id = table2.id LEFT JOIN table3 ON table2.id = table3.id;

SELECT * FROM t1 NATURAL JOIN t2;
SELECT * FROM t1 JOIN t2 USING (j);
SELECT * FROM t1 NATURAL LEFT JOIN t2;
SELECT * FROM t1 NATURAL RIGHT JOIN t2;
SELECT * FROM t1 LEFT JOIN t2 ON (t1.a = t2.a);
SELECT * FROM t1 RIGHT JOIN t2 ON (t1.a = t2.a);
SELECT * FROM t1 JOIN t2 ON (i1 = i3) JOIN t3;
SELECT * FROM t1 JOIN t2 JOIN t3 ON (i1 = i3);
SELECT * FROM t1, t2 JOIN t3 ON (t1.i1 = t3.i3);
SELECT * FROM (t1, t2) JOIN t3 ON (t1.i1 = t3.i3);
SELECT * FROM t1 JOIN t2 JOIN t3 ON (t1.i1 = t3.i3);

SELECT * FROM t1 PARTITION (partition_names) AS t USE INDEX FOR JOIN ();
SELECT * FROM t1 PARTITION (partition_names) AS t USE INDEX FOR JOIN ();
SELECT * FROM t1 PARTITION (partition_names) AS t IGNORE INDEX FOR JOIN (index_name);
SELECT * FROM t1 PARTITION (partition_names) AS t IGNORE INDEX FOR GROUP BY (index_name);

SELECT * FROM LATERAL (SELECT 1, 2, 3) AS t (col_list);
SELECT * FROM LATERAL (SELECT 1, 2, 3) AS t;
SELECT * FROM (SELECT 1, 2, 3) AS t;
SELECT * FROM LATERAL (SELECT 1, 2, 3) t;
SELECT * FROM (SELECT 1, 2, 3) t;

SELECT * FROM t1 PARTITION (partition_names) AS t IGNORE INDEX FOR GROUP BY (index_name) INNER JOIN t1 ON search_condition;
SELECT * FROM t1 INNER JOIN t1 ON search_condition;
SELECT * FROM t1 CROSS JOIN t1 USING (join_column_list);
SELECT * FROM t1 JOIN t1 USING (join_column_list);
SELECT * FROM t1 STRAIGHT_JOIN t1 ON search_condition;
SELECT * FROM t1 STRAIGHT_JOIN t1;
SELECT * FROM t1 STRAIGHT_JOIN t1 USING (join_column_list);

SELECT * FROM t1 LEFT OUTER JOIN t2 PARTITION (partition_names) AS t IGNORE INDEX FOR GROUP BY (index_name) ON search_condition;
SELECT * FROM t1 LEFT OUTER JOIN t2 PARTITION (partition_names) AS t IGNORE INDEX FOR GROUP BY (index_name);
SELECT * FROM t1 RIGHT JOIN t2 PARTITION (partition_names) AS t IGNORE INDEX FOR GROUP BY (index_name) USING (join_column_list);

SELECT * FROM t1 NATURAL INNER OUTER JOIN t2 PARTITION (partition_names) AS t IGNORE INDEX FOR GROUP BY (index_name);
SELECT * FROM t1 NATURAL LEFT OUTER JOIN t2 PARTITION (partition_names) AS t;
SELECT * FROM t1 NATURAL RIGHT JOIN t2 PARTITION (partition_names) AS t;
SELECT * FROM t1 NATURAL JOIN t2;
