-- SQL Standards Based Hive Authorization
-- Role Management Commands -- Set Role
SET ROLE `admin`;

SET ROLE ALL;

SET ROLE NONE;

-- Role Management Commands -- Grant Role
GRANT role_name TO USER user_name;

GRANT role_name, role_name TO USER user1, ROLE role2 WITH ADMIN OPTION ;

-- Role Management Commands -- Revoke Role
REVOKE role_name FROM USER `user`;

REVOKE ADMIN OPTION FOR role_name, role_name FROM USER `user`, ROLE `role`;

-- Managing Object Privileges -- Object Privilege Commands
GRANT
    INSERT
    ON table_or_view_name
    TO USER `user`;

GRANT INSERT, SELECT, UPDATE, DELETE, ALL ON table_or_view_name1 TO USER `user`, ROLE `role` WITH GRANT OPTION;

REVOKE INSERT
    ON table_or_view_name
    FROM USER `user`;

REVOKE GRANT OPTION FOR ALL, ALTER, UPDATE, CREATE, DROP, INDEX, LOCK, SELECT, SHOW_DATABASE
    ON table_or_view_name
    FROM USER `user`, ROLE `role`;

-- Lock and Unlock Statements
LOCK TABLE tbl1 SHARED;

LOCK TABLE tbl2 EXCLUSIVE;

LOCK TABLE tbl3 PARTITION (ds='2010-03-03') SHARED;

UNLOCK TABLE tbl1;

UNLOCK TABLE tbl2 PARTITION (ds='2010-03-03');

-- Lock and Unlock Database
LOCK DATABASE mydb SHARED;

LOCK DATABASE mydb EXCLUSIVE;

UNLOCK DATABASE mydb;

UNLOCK SCHEMA myschema;

