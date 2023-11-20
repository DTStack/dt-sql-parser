-- https://dev.mysql.com/doc/refman/8.0/en/set-role.html

/* SET ROLE {
    DEFAULT
  | NONE
  | ALL
  | ALL EXCEPT role [, role ] ...
  | role [, role ] ...
} */


SET ROLE DEFAULT;
SET ROLE NONE;
SET ROLE ALL;
SET ROLE ALL EXCEPT 'role', 'role1';
SET ROLE 'role', 'role1';
