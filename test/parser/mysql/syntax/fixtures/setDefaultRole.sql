-- https://dev.mysql.com/doc/refman/8.0/en/set-default-role.html

/* SET DEFAULT ROLE
    {NONE | ALL | role [, role ] ...}
    TO user [, user ] ... */


SET DEFAULT ROLE NONE TO 'user', 'user1';
SET DEFAULT ROLE ALL TO 'user';
SET DEFAULT ROLE 'role', 'developer' TO 'user', 'user1'
