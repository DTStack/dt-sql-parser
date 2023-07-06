CREATE CONNECTOR IF NOT EXISTS mysql_local
TYPE 'mysql' 
URL 'jdbc:mysql://localhost:5432';

CREATE CONNECTOR pg_local 
TYPE 'postgres' 
URL 'jdbc:postgresql://localhost:5432' 
COMMENT '这是一个 postgres 连接器'
WITH DCPROPERTIES ("hive.sql.dbcp.username"="postgres", "hive.sql.dbcp.password"="postgres");