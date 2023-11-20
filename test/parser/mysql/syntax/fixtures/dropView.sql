-- https://dev.mysql.com/doc/refman/8.0/en/drop-view.html

/* DROP VIEW [IF EXISTS]
    view_name [, view_name] ...
    [RESTRICT | CASCADE] */


DROP VIEW IF EXISTS view_name, view_name1, view_name2 RESTRICT;
DROP VIEW IF EXISTS view_name, view_name1, view_name2 CASCADE;
DROP VIEW view_name, view_name1, view_name2 RESTRICT;
DROP VIEW view_name, view_name1, view_name2 CASCADE;
DROP VIEW view_name RESTRICT;
