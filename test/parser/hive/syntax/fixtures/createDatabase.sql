CREATE DATABASE mydb;

CREATE REMOTE DATABASE mydb;

CREATE REMOTE DATABASE IF NOT EXISTS mydb;

CREATE SCHEMA myschema;

CREATE REMOTE SCHEMA myschema;

CREATE REMOTE SCHEMA IF NOT EXISTS myschema;

CREATE DATABASE IF NOT EXISTS mydb COMMENT 'my test db';

CREATE DATABASE IF NOT EXISTS mydb COMMENT 'my test db' LOCATION '/myhive/myoutdb';

CREATE DATABASE IF NOT EXISTS mydb COMMENT 'my test db' LOCATION '/myhive/myoutdb' MANAGEDLOCATION '/myhive/myindb';

CREATE REMOTE DATABASE IF NOT EXISTS mydb COMMENT 'my test db' LOCATION '/myhive/myoutdb' MANAGEDLOCATION '/myhive/myindb' WITH DBPROPERTIES ('creator' = 'ypc', 'date' = '2021-03-09');

CREATE SCHEMA IF NOT EXISTS myschema COMMENT 'my test myschema';

CREATE SCHEMA IF NOT EXISTS myschema COMMENT 'my test myschema' LOCATION '/myhive/myoutschema';

CREATE SCHEMA IF NOT EXISTS myschema COMMENT 'my test myschema' LOCATION '/myhive/myoutschema' MANAGEDLOCATION '/myhive/myinschema';

CREATE SCHEMA IF NOT EXISTS myschema COMMENT 'my test myschema' LOCATION '/myhive/myoutschema' MANAGEDLOCATION '/myhive/myinschema' WITH DBPROPERTIES ('creator' = 'ypc', 'date' = '2021-03-09');