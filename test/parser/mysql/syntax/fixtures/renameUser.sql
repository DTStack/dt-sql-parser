-- https://dev.mysql.com/doc/refman/8.0/en/rename-user.html

/* RENAME USER old_user TO new_user
    [, old_user TO new_user] ... */

RENAME USER 'jeffrey'@'localhost' TO 'jeff'@'127.0.0.1', 'jeffrey1'@'localhost' TO 'jeff1'@'127.0.0.1';
RENAME USER 'jeffrey'@'localhost' TO 'jeff'@'127.0.0.1';
