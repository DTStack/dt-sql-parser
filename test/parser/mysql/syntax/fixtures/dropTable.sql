-- https://dev.mysql.com/doc/refman/8.0/en/drop-table.html

/* DROP [TEMPORARY] TABLE [IF EXISTS]
    tbl_name [, tbl_name] ...
    [RESTRICT | CASCADE] */


DROP TEMPORARY TABLE IF EXISTS tbl_name, tbl_name RESTRICT;
DROP TEMPORARY TABLE IF EXISTS tbl_name, tbl_name CASCADE;

DROP TABLE IF EXISTS tbl_name, tbl_name RESTRICT;
DROP TABLE tbl_name, tbl_name RESTRICT;
DROP TABLE IF EXISTS tbl_name, tbl_name CASCADE;
DROP TABLE tbl_name, tbl_name CASCADE;

DROP TABLE IF EXISTS tbl_name RESTRICT;
DROP TABLE tbl_name CASCADE;
