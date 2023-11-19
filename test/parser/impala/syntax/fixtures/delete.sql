-- DELETE [FROM] [database_name.]table_name [ WHERE where_conditions ]
DELETE FROM my_database.my_table;

DELETE my_database.my_table;

DELETE my_table;

DELETE FROM my_table;

DELETE FROM my_table WHERE col1 LIKE 'prefix%';

DELETE FROM my_table WHERE col1 IN (SELECT col2 FROM other_table WHERE col3 = 'value1');

-- DELETE table_ref FROM [joined_table_refs] [ WHERE where_conditions ]
DELETE condition_column FROM table1 AS t1
  INNER JOIN table2 AS t2 ON t1.column_name = t2.column_name
  WHERE t1.condition_column = value1;

DELETE condition_column FROM table1
  WHERE column_name IN (SELECT column_name FROM table2 WHERE condition);

DELETE condition_column FROM table1 AS t1
  INNER JOIN (
    SELECT column_name FROM table2 WHERE condition
  ) AS t2 ON t1.column_name = t2.column_name
  WHERE t1.condition_column = value1;

DELETE condition_column FROM table1 AS t1
  INNER JOIN table2 AS t2 ON t1.column_name = t2.column_name
  WHERE t1.condition_column = value1 AND t2.other_column = value1;

-- example
DELETE FROM my_table;

DELETE my_table;

DELETE FROM my_table WHERE c1 = 100;

DELETE FROM my_table WHERE
  (c1 > c2 OR c3 IN ('hello','world')) AND c4 IS NOT NULL;

DELETE FROM t1 WHERE
  (c1 IN (1,2,3) AND c2 > c3) OR c4 IS NOT NULL;

DELETE FROM time_series WHERE
  year = 2016 AND month IN (11,12) AND day > 15;

DELETE FROM t1 WHERE
  c5 IN (SELECT DISTINCT other_col FROM other_my_table);

DELETE FROM my_table WHERE 1 = 0;

DELETE t1 FROM t1 JOIN t2 ON t1.x = t2.x;

DELETE t1 FROM t1 JOIN t2 ON t1.x = t2.x
  WHERE t1.y = FALSE and t2.z > 100;

DELETE t1 FROM my_table t1 JOIN other_table t2 ON t1.x = t2.x;

DELETE t2 FROM non_kudu_non_ice_table t1 JOIN kudu_or_ice_table t2 ON t1.x = t2.x;