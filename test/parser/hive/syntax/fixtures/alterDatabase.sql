ALTER DATABASE mydb1 SET DBPROPERTIES ('creator'='hayden','date'='2023-07-07');

ALTER SCHEMA myschema1 SET DBPROPERTIES ('creator'='hayden','date'='2023-07-07');

ALTER DATABASE database_name SET OWNER USER hayden;

ALTER SCHEMA database_name SET OWNER ROLE `admin`;

ALTER DATABASE database_name SET OWNER USER jack;

ALTER SCHEMA database_name SET OWNER ROLE ddladmin;
  
ALTER DATABASE database_name SET LOCATION '/myhive/mydb';

ALTER SCHEMA database_name SET LOCATION '/myhive/myschema';
 
ALTER DATABASE database_name SET MANAGEDLOCATION '/myhive/myinnerdb';

ALTER SCHEMA database_name SET MANAGEDLOCATION '/myhive/myinnerschema';