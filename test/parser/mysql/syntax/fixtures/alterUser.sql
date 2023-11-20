-- https://dev.mysql.com/doc/refman/8.0/en/alter-user.html

/* ALTER USER [IF EXISTS]
    user [auth_option] [, user [auth_option]] ...
    [REQUIRE {NONE | tls_option [[AND] tls_option] ...}]
    [WITH resource_option [resource_option] ...]
    [password_option | lock_option] ...
    [COMMENT 'comment_string' | ATTRIBUTE 'json_object']

ALTER USER [IF EXISTS]
    USER() user_func_auth_option

ALTER USER [IF EXISTS]
    user [registration_option]

ALTER USER [IF EXISTS]
    USER() [registration_option]

ALTER USER [IF EXISTS]
    user DEFAULT ROLE
    {NONE | ALL | role [, role ] ...}

user:
    (see Section 6.2.4, “Specifying Account Names”)

auth_option: {
    IDENTIFIED BY 'auth_string'
        [REPLACE 'current_auth_string']
        [RETAIN CURRENT PASSWORD]
  | IDENTIFIED BY RANDOM PASSWORD
        [REPLACE 'current_auth_string']
        [RETAIN CURRENT PASSWORD]
  | IDENTIFIED WITH auth_plugin
  | IDENTIFIED WITH auth_plugin BY 'auth_string'
        [REPLACE 'current_auth_string']
        [RETAIN CURRENT PASSWORD]
  | IDENTIFIED WITH auth_plugin BY RANDOM PASSWORD
        [REPLACE 'current_auth_string']
        [RETAIN CURRENT PASSWORD]
  | IDENTIFIED WITH auth_plugin AS 'auth_string'
  | DISCARD OLD PASSWORD
  | ADD factor factor_auth_option [ADD factor factor_auth_option]
  | MODIFY factor factor_auth_option [MODIFY factor factor_auth_option]
  | DROP factor [DROP factor]
}

user_func_auth_option: {
    IDENTIFIED BY 'auth_string'
        [REPLACE 'current_auth_string']
        [RETAIN CURRENT PASSWORD]
  | DISCARD OLD PASSWORD
}

factor_auth_option: {
    IDENTIFIED BY 'auth_string'
  | IDENTIFIED BY RANDOM PASSWORD
  | IDENTIFIED WITH auth_plugin BY 'auth_string'
  | IDENTIFIED WITH auth_plugin BY RANDOM PASSWORD
  | IDENTIFIED WITH auth_plugin AS 'auth_string'
}

registration_option: {
    factor INITIATE REGISTRATION
  | factor FINISH REGISTRATION SET CHALLENGE_RESPONSE AS 'auth_string'
  | factor UNREGISTER
}

factor: {2 | 3} FACTOR

tls_option: {
   SSL
 | X509
 | CIPHER 'cipher'
 | ISSUER 'issuer'
 | SUBJECT 'subject'
}

resource_option: {
    MAX_QUERIES_PER_HOUR count
  | MAX_UPDATES_PER_HOUR count
  | MAX_CONNECTIONS_PER_HOUR count
  | MAX_USER_CONNECTIONS count
}

password_option: {
    PASSWORD EXPIRE [DEFAULT | NEVER | INTERVAL N DAY]
  | PASSWORD HISTORY {DEFAULT | N}
  | PASSWORD REUSE INTERVAL {DEFAULT | N DAY}
  | PASSWORD REQUIRE CURRENT [DEFAULT | OPTIONAL]
  | FAILED_LOGIN_ATTEMPTS N
  | PASSWORD_LOCK_TIME {N | UNBOUNDED}
}

lock_option: {
    ACCOUNT LOCK
  | ACCOUNT UNLOCK
} */


ALTER USER 'jeffrey'@'localhost' IDENTIFIED BY 'new_password' PASSWORD EXPIRE;
ALTER USER 'jeffrey'@'localhost' IDENTIFIED WITH caching_sha2_password BY 'new_password' PASSWORD EXPIRE INTERVAL 180 DAY;
ALTER USER 'jeffrey'@'localhost' ACCOUNT LOCK;
ALTER USER 'jeffrey'@'localhost' ACCOUNT UNLOCK;
ALTER USER 'jeffrey'@'localhost' REQUIRE SSL WITH MAX_CONNECTIONS_PER_HOUR 20;
ALTER USER 'jeffrey'@'localhost' IDENTIFIED BY 'jeffrey_new_password', 'jeanne'@'localhost', 'josh'@'localhost' IDENTIFIED BY 'josh_new_password' REPLACE 'josh_current_password' RETAIN CURRENT PASSWORD REQUIRE SSL WITH MAX_USER_CONNECTIONS 2 PASSWORD HISTORY 5;
ALTER USER 'josh'@'localhost' DISCARD OLD PASSWORD;
ALTER USER 'jeffrey'@'localhost' IDENTIFIED BY 'password';
ALTER USER 'jeffrey'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
ALTER USER 'jeffrey'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password' REPLACE 'current_password';
ALTER USER 'jeffrey'@'localhost' IDENTIFIED BY 'new_password' RETAIN CURRENT PASSWORD;
ALTER USER 'jeffery'@'localhost' DISCARD OLD PASSWORD;
ALTER USER 'jeffrey'@'localhost' IDENTIFIED WITH mysql_native_password AS '*6C8989366EAF75BB670AD8EA7A7FC1176A95CEF4';
ALTER USER 'user' DROP 2 FACTOR DROP 3 FACTOR;
ALTER USER 'joe'@'10.0.0.1' DEFAULT ROLE administrator, developer;
ALTER USER 'jeffrey'@'localhost' REQUIRE NONE;
ALTER USER 'jeffrey'@'localhost' REQUIRE SSL;
ALTER USER 'jeffrey'@'localhost' REQUIRE X509;
ALTER USER 'jeffrey'@'localhost' REQUIRE ISSUER '/C=SE/ST=Stockholm/L=Stockholm/ O=MySQL/CN=CA/emailAddress=ca@example.com';
ALTER USER 'jeffrey'@'localhost' REQUIRE SUBJECT '/C=SE/ST=Stockholm/L=Stockholm/ O=MySQL demo client certificate/ CN=client/emailAddress=client@example.com';
ALTER USER 'jeffrey'@'localhost' REQUIRE CIPHER 'EDH-RSA-DES-CBC3-SHA';
ALTER USER 'jeffrey'@'localhost' REQUIRE SUBJECT '/C=SE/ST=Stockholm/L=Stockholm/ O=MySQL demo client certificate/ CN=client/emailAddress=client@example.com' AND ISSUER '/C=SE/ST=Stockholm/L=Stockholm/ O=MySQL/CN=CA/emailAddress=ca@example.com' AND CIPHER 'EDH-RSA-DES-CBC3-SHA';
ALTER USER 'jeffrey'@'localhost' WITH MAX_QUERIES_PER_HOUR 500 MAX_UPDATES_PER_HOUR 100;
ALTER USER 'jeffrey'@'localhost' PASSWORD EXPIRE;
ALTER USER 'jeffrey'@'localhost' PASSWORD EXPIRE DEFAULT;
ALTER USER 'jeffrey'@'localhost' PASSWORD EXPIRE NEVER;
ALTER USER 'jeffrey'@'localhost' PASSWORD EXPIRE INTERVAL 180 DAY;
ALTER USER 'jeffrey'@'localhost' PASSWORD HISTORY DEFAULT;
ALTER USER 'jeffrey'@'localhost' PASSWORD HISTORY 6;
ALTER USER 'jeffrey'@'localhost' PASSWORD REUSE INTERVAL DEFAULT;
ALTER USER 'jeffrey'@'localhost' PASSWORD REUSE INTERVAL 360 DAY;
ALTER USER 'jeffrey'@'localhost' PASSWORD REQUIRE CURRENT;
ALTER USER 'jeffrey'@'localhost' PASSWORD REQUIRE CURRENT OPTIONAL;
ALTER USER 'jeffrey'@'localhost' PASSWORD REQUIRE CURRENT DEFAULT;
ALTER USER 'jeffrey'@'localhost' FAILED_LOGIN_ATTEMPTS 4 PASSWORD_LOCK_TIME 2;
ALTER USER 'bill'@'localhost' ATTRIBUTE '{"baz": "faz", "foo": "moo"}';
ALTER USER 'bill'@'localhost' ATTRIBUTE '{"foo": null}';
ALTER USER 'bill'@'localhost' COMMENT 'Something about Bill';
ALTER USER 'bill'@'localhost' COMMENT '';
ALTER USER 'bill'@'localhost' ATTRIBUTE '{"comment": null}';


ALTER USER IF EXISTS 'user' IDENTIFIED BY 'auth_string' REPLACE 'current_auth_string' RETAIN CURRENT PASSWORD;
ALTER USER 'user' IDENTIFIED BY 'auth_string' REPLACE 'current_auth_string' RETAIN CURRENT PASSWORD;
ALTER USER 'user' IDENTIFIED BY 'auth_string' REPLACE 'current_auth_string';
ALTER USER 'user' IDENTIFIED BY 'auth_string' RETAIN CURRENT PASSWORD;
ALTER USER 'user' IDENTIFIED BY 'auth_string';

ALTER USER IF EXISTS 'user' IDENTIFIED BY RANDOM PASSWORD REPLACE 'current_auth_string' RETAIN CURRENT PASSWORD;
ALTER USER 'user' IDENTIFIED BY RANDOM PASSWORD REPLACE 'current_auth_string' RETAIN CURRENT PASSWORD;
ALTER USER 'user' IDENTIFIED BY RANDOM PASSWORD REPLACE 'current_auth_string';
ALTER USER 'user' IDENTIFIED BY RANDOM PASSWORD RETAIN CURRENT PASSWORD;
ALTER USER 'user' IDENTIFIED BY RANDOM PASSWORD;

ALTER USER IF EXISTS 'user' IDENTIFIED WITH 'auth_plugin' BY 'auth_string' REPLACE 'current_auth_string' RETAIN CURRENT PASSWORD;
ALTER USER 'user' IDENTIFIED WITH 'auth_plugin' BY 'auth_string' REPLACE 'current_auth_string' RETAIN CURRENT PASSWORD;
ALTER USER 'user' IDENTIFIED WITH 'auth_plugin' BY 'auth_string' REPLACE 'current_auth_string';
ALTER USER 'user' IDENTIFIED WITH 'auth_plugin' BY 'auth_string' RETAIN CURRENT PASSWORD;
ALTER USER 'user' IDENTIFIED WITH 'auth_plugin' BY 'auth_string';

ALTER USER IF EXISTS 'user' IDENTIFIED WITH 'auth_plugin' BY RANDOM PASSWORD REPLACE 'current_auth_string' RETAIN CURRENT PASSWORD;
ALTER USER 'user' IDENTIFIED WITH 'auth_plugin' BY RANDOM PASSWORD REPLACE 'current_auth_string' RETAIN CURRENT PASSWORD;
ALTER USER 'user' IDENTIFIED WITH 'auth_plugin' BY RANDOM PASSWORD REPLACE 'current_auth_string';
ALTER USER 'user' IDENTIFIED WITH 'auth_plugin' BY RANDOM PASSWORD RETAIN CURRENT PASSWORD;
ALTER USER 'user' IDENTIFIED WITH 'auth_plugin' BY RANDOM PASSWORD;

ALTER USER IF EXISTS 'user' IDENTIFIED WITH 'auth_plugin' AS 'auth_string' REPLACE 'current_auth_string' RETAIN CURRENT PASSWORD;
ALTER USER 'user' IDENTIFIED WITH 'auth_plugin' AS 'auth_string' REPLACE 'current_auth_string' RETAIN CURRENT PASSWORD;
ALTER USER 'user' IDENTIFIED WITH 'auth_plugin' AS 'auth_string' REPLACE 'current_auth_string';
ALTER USER 'user' IDENTIFIED WITH 'auth_plugin' AS 'auth_string' RETAIN CURRENT PASSWORD;
ALTER USER 'user' IDENTIFIED WITH 'auth_plugin' AS 'auth_string';

ALTER USER 'user' IDENTIFIED WITH 'auth_plugin';

ALTER USER USER() DISCARD OLD PASSWORD;
ALTER USER 'user' DISCARD OLD PASSWORD;

ALTER USER IF EXISTS 'user' ADD 2 FACTOR IDENTIFIED BY 'auth_string' ADD 2 FACTOR IDENTIFIED BY 'auth_string';
ALTER USER 'user' ADD 2 FACTOR IDENTIFIED BY 'auth_string' ADD 2 FACTOR IDENTIFIED BY 'auth_string';
ALTER USER 'user' ADD 2 FACTOR IDENTIFIED BY RANDOM PASSWORD;
ALTER USER 'user' ADD 2 FACTOR IDENTIFIED WITH 'auth_plugin' BY 'auth_string';
ALTER USER 'user' ADD 3 FACTOR IDENTIFIED WITH 'auth_plugin' BY RANDOM PASSWORD;
ALTER USER 'user' ADD 3 FACTOR IDENTIFIED WITH 'auth_plugin' AS 'auth_string';
ALTER USER 'user' ADD 3 FACTOR IDENTIFIED WITH 'auth_plugin' AS 'auth_string' ADD 2 FACTOR IDENTIFIED WITH 'auth_plugin' AS 'auth_string';

ALTER USER IF EXISTS 'user' MODIFY 2 FACTOR IDENTIFIED BY 'auth_string' MODIFY 2 FACTOR IDENTIFIED BY 'auth_string';
ALTER USER 'user' MODIFY 2 FACTOR IDENTIFIED BY 'auth_string' MODIFY 2 FACTOR IDENTIFIED BY 'auth_string';
ALTER USER 'user' MODIFY 2 FACTOR IDENTIFIED BY RANDOM PASSWORD;
ALTER USER 'user' MODIFY 2 FACTOR IDENTIFIED WITH 'auth_plugin' BY 'auth_string';
ALTER USER 'user' MODIFY 3 FACTOR IDENTIFIED WITH 'auth_plugin' BY RANDOM PASSWORD;
ALTER USER 'user' MODIFY 3 FACTOR IDENTIFIED WITH 'auth_plugin' AS 'auth_string';
ALTER USER 'user' MODIFY 3 FACTOR IDENTIFIED WITH 'auth_plugin' AS 'auth_string' MODIFY 2 FACTOR IDENTIFIED WITH 'auth_plugin' AS 'auth_string';

ALTER USER 'user' DROP 2 FACTOR DROP 3 FACTOR;

ALTER USER IF EXISTS USER() IDENTIFIED BY 'auth_string';
ALTER USER USER() IDENTIFIED BY 'auth_string' REPLACE 'current_auth_string' RETAIN CURRENT PASSWORD;
ALTER USER USER() IDENTIFIED BY 'auth_string' REPLACE 'current_auth_string';
ALTER USER USER() IDENTIFIED BY 'auth_string' RETAIN CURRENT PASSWORD;
ALTER USER USER() DISCARD OLD PASSWORD;
ALTER USER USER() IDENTIFIED BY 'auth_string';

ALTER USER IF EXISTS 'user' 2 FACTOR INITIATE REGISTRATION;
ALTER USER 'user' 2 FACTOR INITIATE REGISTRATION;
ALTER USER 'user' 3 FACTOR FINISH REGISTRATION SET CHALLENGE_RESPONSE AS 'auth_string';
ALTER USER 'user' 3 FACTOR UNREGISTER;
ALTER USER 'user';

ALTER USER IF EXISTS USER() 2 FACTOR INITIATE REGISTRATION;
ALTER USER USER() 2 FACTOR INITIATE REGISTRATION;
ALTER USER USER() 3 FACTOR FINISH REGISTRATION SET CHALLENGE_RESPONSE AS 'auth_string';
ALTER USER USER() 3 FACTOR UNREGISTER;
ALTER USER USER();

ALTER USER IF EXISTS 'user' DEFAULT ROLE NONE;
ALTER USER 'user' DEFAULT ROLE NONE;
ALTER USER 'user' DEFAULT ROLE ALL;
ALTER USER 'user' DEFAULT ROLE developer;
