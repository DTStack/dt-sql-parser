-- Syntax RENAME
-- ALTER TABLE table_identifier RENAME TO table_identifier
ALTER TABLE Student RENAME TO StudentInfo;
-- ALTER TABLE table_identifier partition_spec RENAME TO partition_spec
ALTER TABLE default.StudentInfo PARTITION (age='10') RENAME TO PARTITION (age='15');
ALTER TABLE default.StudentInfo PARTITION (age=10) RENAME TO PARTITION (age=12.323);


-- Syntax ADD COLUMNS
-- ALTER TABLE table_identifier ADD COLUMNS ( col_spec [ , ... ] )
ALTER TABLE StudentInfo ADD COLUMNS (LastName string, DOB timestamp);


-- Syntax DROP COLUMNS
-- ALTER TABLE table_identifier DROP { COLUMN | COLUMNS } [ ( ] col_name [ , ... ] [ ) ]
ALTER TABLE StudentInfo DROP columns (LastName, DOB);


-- Syntax RENAME COLUMN
-- ALTER TABLE table_identifier RENAME COLUMN col_name TO col_name
ALTER TABLE StudentInfo RENAME COLUMN name TO FirstName;


-- Syntax ALTER OR CHANGE COLUMN
-- ALTER TABLE table_identifier { ALTER | CHANGE } [ COLUMN ] col_name alterColumnAction
ALTER TABLE StudentInfo ALTER COLUMN FirstName COMMENT "new comment";
ALTER TABLE StudentInfo CHANGE COLUMN FirstName COMMENT "new comment";
ALTER TABLE StudentInfo ALTER FirstName COMMENT "new comment";
ALTER TABLE StudentInfo CHANGE FirstName COMMENT "new comment";


-- Syntax REPLACE COLUMNS
-- ALTER TABLE table_identifier [ partition_spec ] REPLACE COLUMNS [ ( ] qualified_col_type_with_position_list [ ) ]
ALTER TABLE StudentInfo REPLACE COLUMNS (name string, ID int COMMENT 'new comment');
ALTER TABLE StudentInfo REPLACE COLUMNS name string, ID int COMMENT 'new comment';


-- Syntax ADD PARTITION
-- ALTER TABLE table_identifier ADD [IF NOT EXISTS] ( partition_spec [ partition_spec ... ] )
ALTER TABLE StudentInfo ADD IF NOT EXISTS PARTITION (age=18);
ALTER TABLE StudentInfo ADD PARTITION (age=18);
-- Adding multiple partitions to the table
ALTER TABLE StudentInfo ADD IF NOT EXISTS PARTITION (age=18) PARTITION (age=20);
ALTER TABLE StudentInfo ADD PARTITION (age=18) PARTITION (age=20);

-- Syntax DROP PARTITION
-- ALTER TABLE table_identifier DROP [ IF EXISTS ] partition_spec [PURGE]
ALTER TABLE StudentInfo DROP IF EXISTS PARTITION (age=18);
ALTER TABLE StudentInfo DROP PARTITION (age=18);

-- Syntax SET TABLE PROPERTIES
-- ALTER TABLE table_identifier SET TBLPROPERTIES ( key1 = val1, key2 = val2, ... )
ALTER TABLE dbx.tab1 SET TBLPROPERTIES ('comment' = 'A table comment.');

-- Unset Table Properties
-- ALTER TABLE table_identifier UNSET TBLPROPERTIES [ IF EXISTS ] ( key1, key2, ... )
ALTER TABLE dbx.tab1 UNSET TBLPROPERTIES IF EXISTS ('winner');
ALTER TABLE dbx.tab1 UNSET TBLPROPERTIES ('winner');


-- Syntax SET SERDE
-- ALTER TABLE table_identifier [ partition_spec ] SET SERDEPROPERTIES ( key1 = val1, key2 = val2, ... )
ALTER TABLE test_tab SET SERDE 'org.apache.hadoop.hive.serde2.columnar.LazyBinaryColumnarSerDe';
-- ALTER TABLE table_identifier [ partition_spec ] SET SERDE serde_class_name [ WITH SERDEPROPERTIES ( key1 = val1, key2 = val2, ... ) ]
ALTER TABLE dbx.tab1 SET SERDE 'org.apache.hadoop' WITH SERDEPROPERTIES ('k' = 'v', 'kay' = 'vee')


-- Syntax SET LOCATION And SET FILE FORMAT
-- ALTER TABLE table_identifier [ partition_spec ] SET FILEFORMAT file_format
ALTER TABLE loc_orc SET FILEFORMAT orc;
ALTER TABLE p1 partition (month=2, day=2) SET FILEFORMAT parquet;

-- ALTER TABLE table_identifier [ partition_spec ] SET LOCATION 'new_location'
ALTER TABLE dbx.tab1 PARTITION (a='1', b='2') SET LOCATION '/path/to/part/ways'
ALTER TABLE dbx.tab1 SET LOCATION '/path/to/part/ways'


-- Syntax RECOVER PARTITIONS
-- ALTER TABLE table_identifier RECOVER PARTITIONS
ALTER TABLE dbx.tab1 RECOVER PARTITIONS;


-- After Profiling
ALTER TABLE my_table RENAME COLUMN old_column TO new_column;
ALTER TABLE sales_data REPLACE COLUMNS (product_id INT, product_name STRING, price DECIMAL(10,2), sale_date DATE);
ALTER TABLE sales_data PARTITION (region='US') REPLACE COLUMNS (product_id INT, product_name STRING, price DECIMAL(10,2), sale_date DATE);
COMMENT ON TABLE sales_2025 IS '2025 年销售数据表';
COMMENT ON NAMESPACE hr IS '人力资源相关的数据集合';
SET TIME ZONE INTERVAL '+08:00' HOUR TO MINUTE;
SET TIME ZONE LOCAL;
SET TIME ZONE 'Asia/Shanghai';
SET TIME ZONE SYSTEM;
SET TIME ZONE DEFAULT;
SET spark.sql.shuffle.partitions = `200`;
SET spark.sql.adaptive.enabled = true;
SET spark.sql.autoBroadcastJoinThreshold = 10MB;
SET;
RESET spark.sql.shuffle.partitions;
SELECT * FROM a UNION SELECT * FROM b;
SELECT * FROM a UNION ALL SELECT * FROM b;
SELECT id FROM a INTERSECT SELECT id FROM b;
SELECT id FROM a INTERSECT DISTINCT SELECT id FROM b;
SELECT id FROM a EXCEPT SELECT id FROM b;
SELECT id FROM a EXCEPT ALL SELECT id FROM b;
SELECT id FROM a MINUS SELECT id FROM b;
(SELECT * FROM x UNION ALL SELECT * FROM y) EXCEPT SELECT * FROM z;
SELECT id, name FROM users WHERE age > 18;
SELECT department, COUNT(*) AS cnt FROM employees GROUP BY department HAVING cnt > 10;
SELECT id, salary, AVG(salary) OVER (PARTITION BY department ORDER BY hire_date) AS avg_salary FROM employees;
SELECT uid, word FROM documents LATERAL VIEW explode(split(content, ' ')) t AS word;
SELECT TRANSFORM (name, age) USING 'python3 /scripts/normalize.py' AS (norm_name STRING, norm_age INT) FROM users;
SELECT TRANSFORM (col1, col2) USING 'map_script.sh' AS (key, value) FROM logs WHERE status = 'OK' GROUP BY col1 HAVING COUNT(*) > 10;
SELECT id, amount, SUM(amount) OVER (PARTITION BY customer_id ORDER BY date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS rolling_sum FROM transactions WHERE date >= '2024-01-01';
SELECT a.id, b.value FROM table_a a INNER JOIN table_b b ON a.id = b.id;
SELECT a.id, b.value FROM table_a a JOIN table_b b ON a.id = b.id;
SELECT a.* FROM table_a a LEFT SEMI JOIN table_b b ON a.id = b.id;
SELECT a.* FROM table_a a LEFT ANTI JOIN table_b b ON a.id = b.id;
SELECT a.id, b.value FROM table_a a LEFT OUTER JOIN table_b b ON a.id = b.id;
SELECT a.id, b.value FROM table_a a RIGHT OUTER JOIN table_b b ON a.id = b.id;
SELECT a.id, b.value FROM table_a a FULL OUTER JOIN table_b b ON a.id = b.id;
SELECT * FROM table_a TABLESAMPLE(10 PERCENT);
SELECT * FROM table_a TABLESAMPLE(-25 PERCENT);
SELECT * FROM table_a TABLESAMPLE(100 ROWS);
SELECT * FROM table_a TABLESAMPLE(BUCKET 2 OUT OF 4);
SELECT * FROM table_a TABLESAMPLE(BUCKET 1 OUT OF 10 ON id);
SELECT * FROM table_a TABLESAMPLE(BUCKET 3 OUT OF 5 ON rand());
SELECT * FROM table_a TABLESAMPLE(1024);
SELECT id, salary, SUM(salary) OVER (ORDER BY hire_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS cumulative_salary FROM employees;
SELECT id, salary, SUM(salary) OVER (ORDER BY hire_date ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING) AS remaining_salary FROM employees;
SELECT id, salary, SUM(salary) OVER (ORDER BY hire_date ROWS BETWEEN CURRENT ROW AND CURRENT ROW) AS single_row_salary FROM employees;
SELECT id, salary, SUM(salary) OVER (ORDER BY hire_date ROWS BETWEEN 3 PRECEDING AND CURRENT ROW) AS rolling_3 FROM employees;
SELECT id, salary, SUM(salary) OVER (ORDER BY hire_date ROWS BETWEEN CURRENT ROW AND 5 FOLLOWING) AS next_5 FROM employees;
