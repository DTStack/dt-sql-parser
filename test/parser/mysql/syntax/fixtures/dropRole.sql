-- https://dev.mysql.com/doc/refman/8.0/en/drop-role.html

/* DROP ROLE [IF EXISTS] role [, role ] ... */


DROP ROLE IF EXISTS 'developer', 'developer1';
DROP ROLE IF EXISTS 'developer';
DROP ROLE 'developer';
DROP ROLE 'webapp'@'localhost';
