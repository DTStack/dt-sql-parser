-- Drop Database
DROP SCHEMA schema1 ;

DROP DATABASE IF EXISTS mydb1 RESTRICT;

DROP DATABASE IF EXISTS mydb1 CASCADE;

-- Drop Connector
DROP CONNECTOR connector1;

DROP CONNECTOR IF EXISTS connector1;

-- Drop View
DROP VIEW view1;

DROP VIEW IF EXISTS mydb1.view2;

DROP MATERIALIZED VIEW materialized_view_name;

-- Drop Table
DROP TABLE tb1; 

DROP TABLE IF EXISTS db1.tb2 PURGE; 

-- Drop Macro
DROP TEMPORARY MACRO macro1;

DROP TEMPORARY MACRO IF EXISTS macro2;

-- Drop Role
DROP ROLE `admin`;

-- Drop Index
DROP INDEX table01_index ON table01;

DROP INDEX IF EXISTS table02_index ON table02;

-- Drop Function
DROP FUNCTION func1;

DROP FUNCTION IF EXISTS func2;

-- Drop Schedule Query
DROP SCHEDULED QUERY sq_1;