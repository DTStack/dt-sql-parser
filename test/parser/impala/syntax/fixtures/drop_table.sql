-- DROP TABLE [IF EXISTS] [db_name.]table_name [PURGE]
DROP TABLE my_table;
DROP TABLE my_db.my_table;
DROP TABLE IF EXISTS my_table;
DROP TABLE IF EXISTS my_db.my_table;
DROP TABLE IF EXISTS my_db.my_table PURGE;


drop table unimportant;
drop table temporary.trivial;