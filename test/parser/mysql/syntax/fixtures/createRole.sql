-- https://dev.mysql.com/doc/refman/8.0/en/create-role.html

/* CREATE ROLE [IF NOT EXISTS] role [, role ] ... */


CREATE ROLE 'admin', 'developer';
CREATE ROLE 'webapp'@'localhost';
