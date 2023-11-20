-- https://dev.mysql.com/doc/refman/8.0/en/drop-user.html

/* DROP USER [IF EXISTS] user [, user] ... */


DROP USER IF EXISTS 'user', 'user1';
DROP USER IF EXISTS 'user';
DROP USER 'user';
DROP USER 'jeffrey'@'localhost';
