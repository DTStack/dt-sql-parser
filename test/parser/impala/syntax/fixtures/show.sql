-- SHOW DATABASES [[LIKE] 'pattern']
SHOW DATABASES;

SHOW DATABASES 'xxx';

SHOW DATABASES LIKE 'xxx';

-- SHOW SCHEMAS [[LIKE] 'pattern']
SHOW SCHEMAS;

SHOW SCHEMAS 'xxx';

SHOW SCHEMAS LIKE 'xxx';

-- SHOW TABLES [IN database_name] [[LIKE] 'pattern']
SHOW TABLES;

SHOW TABLES 'xxx';

SHOW TABLES LIKE 'xxx';

SHOW TABLES IN my_db;

SHOW TABLES IN my_db 'xxx';

SHOW TABLES IN my_db LIKE 'xxx';

-- SHOW [AGGREGATE | ANALYTIC] FUNCTIONS [IN database_name] [[LIKE] 'pattern']
SHOW FUNCTIONS;

SHOW FUNCTIONS 'xxx';

SHOW FUNCTIONS LIKE 'xxx';

SHOW FUNCTIONS IN my_db;

SHOW FUNCTIONS IN my_db 'xxx';

SHOW FUNCTIONS IN my_db LIKE 'xxx';

SHOW ANALYTIC FUNCTIONS IN my_db LIKE 'xxx';

SHOW AGGREGATE FUNCTIONS IN my_db LIKE 'xxx';

-- SHOW CREATE TABLE [database_name].table_name
SHOW CREATE TABLE my_table;

SHOW CREATE TABLE my_db.my_table;

-- SHOW CREATE VIEW [database_name].view_name
SHOW CREATE VIEW my_table;

SHOW CREATE VIEW my_db.my_table;

-- SHOW TABLE STATS [database_name.]table_name
SHOW TABLE STATS my_table;

SHOW TABLE STATS my_db.my_table;

-- SHOW COLUMN STATS [database_name.]table_name
SHOW COLUMN STATS my_table;

SHOW COLUMN STATS my_db.my_table;

-- SHOW PARTITIONS [database_name.]table_name
SHOW PARTITIONS my_table;

SHOW PARTITIONS my_db.my_table;

-- SHOW [RANGE] PARTITIONS [database_name.]table_name
SHOW RANGE PARTITIONS my_table;

SHOW RANGE PARTITIONS my_db.my_table;

-- SHOW FILES IN [database_name.]table_name [PARTITION (key_col_expression [, key_col_expression]]
SHOW FILES IN my_table;

SHOW FILES IN my_db.my_table;

SHOW FILES IN my_db.my_table PARTITION (
    "date" = "1110-11-11",
    age BETWEEN 100
    AND 200
);

SHOW ROLES;

SHOW CURRENT ROLES;

SHOW ROLE GRANT GROUP group_name;

SHOW GRANT USER user_name;

SHOW GRANT USER user_name ON SERVER;

SHOW GRANT USER user_name ON DATABASE database_name;

SHOW GRANT USER user_name ON TABLE database_name.table_name;

SHOW GRANT USER user_name ON URI my_uri;

SHOW GRANT USER user_name ON COLUMN database_name.table_name.column_name;

SHOW GRANT ROLE role_name;

SHOW GRANT ROLE role_name ON SERVER;

SHOW GRANT ROLE role_name ON DATABASE database_name;

SHOW GRANT ROLE role_name ON TABLE database_name.table_name;

SHOW GRANT ROLE role_name ON URI my_uri;

SHOW GRANT ROLE role_name ON COLUMN database_name.table_name.column_name;

SHOW GRANT GROUP group_name ON SERVER;

SHOW GRANT GROUP group_name ON DATABASE database_name;

SHOW GRANT GROUP group_name ON TABLE database_name.table_name;

SHOW GRANT GROUP group_name ON URI my_uri;

SHOW GRANT GROUP group_name ON COLUMN database_name.table_name.column_name;

-- example
SHOW DATABASES 'a*';

SHOW DATABASES LIKE 'a*';

SHOW TABLES IN some_db LIKE '*fact*';

SHOW TABLES '*dim*|*fact*';

show files in sample_table partition (j < 5);

show files in sample_table partition (
    k = 3,
    l between 1
    and 10
);

show files in sample_table partition (month like 'J%');

show files in unpart_text;

show partitions part_text;

show files in s3_testing.sample_data_s3;

show roles;

show current roles;

show tables in full_db like 'dim*';

show CREATE TABLE numeric_grades_default_letter;

show range partitions numeric_grades_default_letter;

show table stats kudu_table;

show column stats customer;

show functions in _impala_builtins;

show functions in _impala_builtins like '*week*';