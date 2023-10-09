-- Syntax
-- CREATE { DATABASE | SCHEMA } [ IF NOT EXISTS ] database_name [ COMMENT database_comment ] [ LOCATION database_directory ] [ WITH DBPROPERTIES ( property_name = property_value [ , ... ] ) ]

CREATE DATABASE IF NOT EXISTS customer_db;
CREATE DATABASE customer_db;

CREATE SCHEMA IF NOT EXISTS customer_db;
CREATE SCHEMA customer_db;


CREATE DATABASE IF NOT EXISTS customer_db COMMENT 'This is customer database' LOCATION '/user' WITH DBPROPERTIES (ID=001, Name='John');
CREATE DATABASE IF NOT EXISTS customer_db LOCATION '/user' WITH DBPROPERTIES (ID=001, Name='John');
CREATE DATABASE IF NOT EXISTS customer_db WITH DBPROPERTIES (ID=001, Name='John');
CREATE DATABASE customer_db COMMENT 'This is customer database' LOCATION '/user' WITH DBPROPERTIES (ID=001, Name='John');
CREATE DATABASE customer_db LOCATION '/user' WITH DBPROPERTIES (ID=001, Name='John');
CREATE DATABASE customer_db WITH DBPROPERTIES (ID=001, Name='John');

CREATE SCHEMA IF NOT EXISTS customer_db COMMENT 'This is customer database' LOCATION '/user' WITH DBPROPERTIES (ID=001, Name='John');
CREATE SCHEMA IF NOT EXISTS customer_db LOCATION '/user' WITH DBPROPERTIES (ID=001, Name='John');
CREATE SCHEMA IF NOT EXISTS customer_db WITH DBPROPERTIES (ID=001, Name='John');
CREATE SCHEMA customer_db COMMENT 'This is customer database' LOCATION '/user' WITH DBPROPERTIES (ID=001, Name='John');
CREATE SCHEMA customer_db LOCATION '/user' WITH DBPROPERTIES (ID=001, Name='John');
CREATE SCHEMA customer_db WITH DBPROPERTIES (ID=001, Name='John');
