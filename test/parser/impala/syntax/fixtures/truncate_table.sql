-- TRUNCATE [TABLE] [IF EXISTS] [db_name.]table_name
TRUNCATE my_table;
TRUNCATE my_db.my_table;
TRUNCATE TABLE my_table;
TRUNCATE IF EXISTS my_db.my_table;
TRUNCATE TABLE IF EXISTS my_db.my_table;

-- example
TRUNCATE TABLE truncate_demo;
TRUNCATE TABLE IF EXISTS staging_table2;