CREATE DATABASE mydb;

CREATE SCHEMA myschema;

CREATE DATABASE IF NOT EXISTS mydb
    COMMENT 'my test db'
    LOCATION '/myhive/myoutdb'
    MANAGEDLOCATION '/myhive/myindb'
    WITH DBPROPERTIES  ('creator'='ypc','date'='2021-03-09');

CREATE SCHEMA IF NOT EXISTS myschema 
    COMMENT 'my test myschema'
    LOCATION '/myhive/myoutschema'
    MANAGEDLOCATION '/myhive/myinschema'
    WITH DBPROPERTIES  ('creator'='ypc','date'='2021-03-09');
