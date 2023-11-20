-- https://dev.mysql.com/doc/refman/8.0/en/revoke.html

/* REVOKE [IF EXISTS]
    priv_type [(column_list)]
      [, priv_type [(column_list)]] ...
    ON [object_type] priv_level
    FROM user_or_role [, user_or_role] ...
    [IGNORE UNKNOWN USER]

REVOKE [IF EXISTS] ALL [PRIVILEGES], GRANT OPTION
    FROM user_or_role [, user_or_role] ...
    [IGNORE UNKNOWN USER]

REVOKE [IF EXISTS] PROXY ON user_or_role
    FROM user_or_role [, user_or_role] ...
    [IGNORE UNKNOWN USER]

REVOKE [IF EXISTS] role [, role ] ...
    FROM user_or_role [, user_or_role ] ...
    [IGNORE UNKNOWN USER]

user_or_role: {
    user (see Section 6.2.4, “Specifying Account Names”)
  | role (see Section 6.2.5, “Specifying Role Names”
} */


REVOKE INSERT ON *.* FROM 'jeffrey'@'localhost';
REVOKE 'role1', 'role2' FROM 'user1'@'localhost', 'user2'@'localhost';
REVOKE SELECT ON world.* FROM 'role3';
REVOKE ALL PRIVILEGES, GRANT OPTION FROM 'user_or_role';
REVOKE SELECT ON test.t1 FROM jerry@localhost;
REVOKE IF EXISTS SELECT ON test.t1 FROM jerry@localhost;
REVOKE SELECT ON test FROM jerry@localhost;
REVOKE IF EXISTS SELECT ON test FROM jerry@localhost;
REVOKE SELECT ON test FROM jerry@localhost IGNORE UNKNOWN USER;
REVOKE IF EXISTS SELECT ON test FROM jerry@localhost IGNORE UNKNOWN USER;


REVOKE IF EXISTS SELECT (col1), SELECT (col1) ON TABLE *.* FROM u2, 'developer' IGNORE UNKNOWN USER;
REVOKE SELECT (col1), SELECT (col1) ON TABLE *.* FROM u2, 'developer' IGNORE UNKNOWN USER;
REVOKE SELECT (col1), SELECT (col1) ON TABLE *.* FROM u2, 'developer';
REVOKE SELECT (col1), SELECT (col1) ON TABLE *.* FROM u2 IGNORE UNKNOWN USER;
REVOKE SELECT (col1), SELECT (col1) ON *.* FROM u2 IGNORE UNKNOWN USER;

REVOKE IF EXISTS ALL PRIVILEGES, GRANT OPTION FROM user_or_role, 'developer' IGNORE UNKNOWN USER;
REVOKE IF EXISTS ALL PRIVILEGES, GRANT OPTION FROM user_or_role, 'developer';
REVOKE ALL PRIVILEGES, GRANT OPTION FROM user_or_role, 'developer';
REVOKE ALL, GRANT OPTION FROM user_or_role, 'developer';
REVOKE ALL, GRANT OPTION FROM user_or_role IGNORE UNKNOWN USER;
REVOKE ALL, GRANT OPTION FROM user_or_role;

REVOKE IF EXISTS PROXY ON user_or_role FROM user_or_role, 'developer' IGNORE UNKNOWN USER;
REVOKE PROXY ON user_or_role FROM user_or_role, 'developer' IGNORE UNKNOWN USER;
REVOKE PROXY ON user_or_role FROM user_or_role, 'developer';
REVOKE PROXY ON user_or_role FROM user_or_role IGNORE UNKNOWN USER;
REVOKE PROXY ON user_or_role FROM user_or_role;

REVOKE IF EXISTS 'role', 'role1' FROM user_or_role, 'developer' IGNORE UNKNOWN USER;
REVOKE IF EXISTS 'role', 'role1' FROM user_or_role, 'developer';
REVOKE 'role' FROM user_or_role, 'developer';
REVOKE 'role', 'role1' FROM user_or_role;
REVOKE 'role' FROM user_or_role;
