-- Syntax
-- DROP { DATABASE | SCHEMA } [ IF EXISTS ] dbname [ RESTRICT | CASCADE ]


CREATE DATABASE inventory_db COMMENT 'This database is used to maintain Inventory';
CREATE SCHEMA inventory_db COMMENT 'This database is used to maintain Inventory';

DROP DATABASE inventory_db CASCADE;
DROP SCHEMA inventory_db CASCADE;

DROP DATABASE IF EXISTS inventory_db CASCADE;
DROP SCHEMA IF EXISTS inventory_db CASCADE;
DROP DATABASE inventory_db RESTRICT;
DROP SCHEMA inventory_db RESTRICT;
