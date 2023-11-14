-- DROP (DATABASE|SCHEMA) [IF EXISTS] database_name [RESTRICT | CASCADE];
DROP DATABASE my_database;
DROP DATABASE IF EXISTS my_database;
DROP DATABASE my_database RESTRICT;
DROP DATABASE IF EXISTS my_database CASCADE;
DROP SCHEMA my_database;
DROP SCHEMA IF EXISTS my_database;
DROP SCHEMA my_database RESTRICT;
DROP SCHEMA IF EXISTS my_database CASCADE;

drop database temp;
drop database temp cascade;