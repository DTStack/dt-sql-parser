-- https://dev.mysql.com/doc/refman/8.0/en/grant.html

/* GRANT
    priv_type [(column_list)]
      [, priv_type [(column_list)]] ...
    ON [object_type] priv_level
    TO user_or_role [, user_or_role] ...
    [WITH GRANT OPTION]
    [AS user
        [WITH ROLE
            DEFAULT
          | NONE
          | ALL
          | ALL EXCEPT role [, role ] ...
          | role [, role ] ...
        ]
    ]
}

GRANT PROXY ON user_or_role
    TO user_or_role [, user_or_role] ...
    [WITH GRANT OPTION]

GRANT role [, role] ...
    TO user_or_role [, user_or_role] ...
    [WITH ADMIN OPTION]

object_type: {
    TABLE
  | FUNCTION
  | PROCEDURE
}

priv_level: {
    *
  | *.*
  | db_name.*
  | db_name.tbl_name
  | tbl_name
  | db_name.routine_name
}

user_or_role: {
    user (see Section 6.2.4, “Specifying Account Names”)
  | role (see Section 6.2.5, “Specifying Role Names”)
} */


GRANT ALL ON db1.* TO 'jeffrey'@'localhost';
GRANT 'role1', 'role2' TO 'user1'@'localhost', 'user2'@'localhost';
GRANT SELECT ON world.* TO 'role3';
GRANT ALL ON db1.* TO 'jeffrey'@'localhost';
GRANT SELECT ON db2.invoice TO 'jeffrey'@'localhost';
CREATE USER u;
GRANT SELECT ON `d_`.* TO u;
GRANT INSERT ON `d%`.* TO u;
GRANT ALL ON test.* TO ''@'localhost';
GRANT SELECT, INSERT ON *.* TO u1;
GRANT SELECT, INSERT, UPDATE ON *.* TO u1;
GRANT ALL ON *.* TO 'some_user'@'some_host';
GRANT SELECT, INSERT ON *.* TO 'some_user'@'some_host';
GRANT ALL ON my_db.* TO 'some_user'@'some_host';
GRANT SELECT, INSERT ON my_db.* TO 'some_user'@'some_host';
GRANT ALL ON my_db.my_tbl TO 'some_user'@'some_host';
GRANT SELECT, INSERT ON my_db.my_tbl TO 'some_user'@'some_host';
GRANT SELECT (col1), INSERT (col1, col2) ON my_db.my_tbl TO 'some_user'@'some_host';
GRANT CREATE ROUTINE ON my_db.* TO 'some_user'@'some_host';
GRANT EXECUTE ON PROCEDURE my_db.my_proc TO 'some_user'@'some_host';
GRANT PROXY ON 'local_user'@'localhost' TO 'external_user'@'some_host';
GRANT 'role1', 'role2' TO 'user1'@'localhost', 'user2'@'localhost';
GRANT 'u1' TO 'u1';
GRANT SELECT, INSERT, UPDATE, DELETE ON *.* TO u1;
GRANT INSERT ON schema1.* TO r1;
GRANT SELECT ON schema2.* TO r1;
GRANT r1 TO u1;
GRANT SELECT, INSERT, UPDATE ON *.* TO u2;
GRANT SELECT, INSERT, UPDATE ON *.* TO u3 AS u4;
GRANT SELECT, INSERT, UPDATE ON *.* TO u4 AS u1 WITH ROLE r1;
GRANT USAGE ON *.* TO 'some_user'@'some_host' WITH GRANT OPTION;

GRANT ALL ON db1.t1 TO 'jeffrey'@'localhost' IDENTIFIED BY PASSWORD 'auth_string', 'jeffrey1'@'localhost' IDENTIFIED BY PASSWORD 'auth_string' REQUIRE NONE;
GRANT ALL ON db1.t1 TO 'jeffrey'@'localhost' IDENTIFIED BY PASSWORD 'auth_string', 'jeffrey1'@'localhost' IDENTIFIED BY PASSWORD 'auth_string' REQUIRE CIPHER 'cipher' AND ISSUER 'issuer' SUBJECT 'subject' X509;
GRANT ALL ON db1.t1 TO 'jeffrey'@'localhost' IDENTIFIED BY PASSWORD 'auth_string', 'jeffrey1'@'localhost' IDENTIFIED BY PASSWORD 'auth_string' REQUIRE CIPHER 'cipher' AND ISSUER 'issuer' SUBJECT 'subject' X509 WITH GRANT OPTION;
GRANT ALL ON db1.t1 TO 'jeffrey'@'localhost' IDENTIFIED BY PASSWORD 'auth_string', 'jeffrey1'@'localhost' IDENTIFIED BY PASSWORD 'auth_string' REQUIRE CIPHER 'cipher' AND ISSUER 'issuer' SUBJECT 'subject' X509 WITH MAX_UPDATES_PER_HOUR 100;

GRANT PROXY ON 'user' TO 'user1', 'user2' WITH GRANT OPTION;
GRANT PROXY ON 'user' TO 'user1', 'user2';
GRANT PROXY ON 'user' TO 'user1';

GRANT ALL ON db1.t1 TO 'user' WITH GRANT OPTION AS 'user1' WITH ROLE DEFAULT;
GRANT ALL ON db1.t1 TO 'user' WITH GRANT OPTION AS 'user1' WITH ROLE NONE;
GRANT ALL ON db1.t1 TO 'user' WITH GRANT OPTION AS 'user1' WITH ROLE ALL;
GRANT ALL ON db1.t1 TO 'user' WITH GRANT OPTION AS 'user1' WITH ROLE ALL EXCEPT 'developer';
GRANT ALL ON db1.t1 TO 'user' WITH GRANT OPTION AS 'user1' WITH ROLE 'developer';
GRANT ALL ON TABLE db1.t1 TO 'user' WITH GRANT OPTION AS 'user1' WITH ROLE 'developer';
GRANT ALL ON FUNCTION 'fcName' TO 'user' WITH GRANT OPTION AS 'user1' WITH ROLE 'developer';
GRANT ALL ON PROCEDURE 'name' TO 'user' WITH GRANT OPTION AS 'user1' WITH ROLE 'developer';

GRANT 'developer' TO 'user', 'developer1' WITH ADMIN OPTION;
GRANT 'developer' TO 'user';
