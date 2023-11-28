-- DROP TABLE [IF EXISTS] [db_name.]table_name [PURGE]
DROP TABLE my_table;
DROP TABLE my_db.my_table;
DROP TABLE IF EXISTS my_table;
DROP TABLE IF EXISTS my_db.my_table;
DROP TABLE IF EXISTS my_db.my_table PURGE;

-- example
drop table unimportant;
drop table my_db.trivial;