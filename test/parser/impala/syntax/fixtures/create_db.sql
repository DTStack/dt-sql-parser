-- CREATE (DATABASE|SCHEMA) [IF NOT EXISTS] database_name[COMMENT 'database_comment'] [LOCATION hdfs_path];
CREATE DATABASE my_db;
CREATE DATABASE IF NOT EXISTS my_db1;
CREATE DATABASE my_db COMMENT 'my first db';
CREATE DATABASE my_db LOCATION '/path/to/partition';
CREATE DATABASE my_db COMMENT 'my first db' LOCATION '/path/to/partition';
CREATE DATABASE IF NOT EXISTS my_db COMMENT 'my first db' LOCATION '/path/to/partition';
CREATE SCHEMA my_schema;
CREATE SCHEMA IF NOT EXISTS my_schema1;
CREATE SCHEMA my_schema COMMENT 'my first schema';
CREATE SCHEMA my_schema LOCATION '/path/to/partition';
CREATE SCHEMA my_schema COMMENT 'my first schema' LOCATION '/path/to/partition';
CREATE SCHEMA IF NOT EXISTS my_schema COMMENT 'my first schema' LOCATION '/path/to/partition';


-- example
create database first_db;