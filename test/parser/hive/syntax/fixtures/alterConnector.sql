ALTER CONNECTOR mysql_local SET DCPROPERTIES ('creator'='hayden','date'='2023-07-07');
 
ALTER CONNECTOR pg_local SET URL 'jdbc:postgresql://localhost:5400';
  
ALTER CONNECTOR hbase_local SET OWNER USER `hayden`;

ALTER CONNECTOR hbase_local SET OWNER ROLE `admin`;

ALTER CONNECTOR hbase_local SET OWNER `zhaoge`;