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


-- ============================================


-- Syntax
-- DROP [ TEMPORARY ] FUNCTION [ IF EXISTS ] function_name

DROP FUNCTION test_avg;
DROP TEMPORARY FUNCTION test_avg;
DROP TEMPORARY FUNCTION IF EXISTS test_avg;
DROP TEMPORARY FUNCTION test_avg;


-- ============================================


-- Syntax
-- DROP TABLE [ IF EXISTS ] table_identifier [ PURGE ]

DROP TABLE userDB.employable;
DROP TABLE IF EXISTS employable;
DROP TABLE employable;
DROP TABLE IF EXISTS employable PURGE;
DROP TABLE employable PURGE;


-- ============================================


-- Syntax
-- DROP VIEW [ IF EXISTS ] view_identifier

DROP VIEW employeeView;
DROP VIEW userDB.employeeView;
DROP VIEW IF EXISTS employeeView;
