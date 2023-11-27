-- https://dev.mysql.com/doc/refman/8.0/en/set-password.html

/* SET PASSWORD [FOR user] auth_option
    [REPLACE 'current_auth_string']
    [RETAIN CURRENT PASSWORD]

auth_option: {
    = 'auth_string'
  | TO RANDOM
} */


SET PASSWORD FOR user = 'auth_string' REPLACE 'current_auth_string' RETAIN CURRENT PASSWORD;
SET PASSWORD FOR user = 'auth_string' REPLACE 'current_auth_string';
SET PASSWORD FOR user TO RANDOM RETAIN CURRENT PASSWORD;
SET PASSWORD FOR user TO RANDOM;

SET PASSWORD TO RANDOM REPLACE 'current_auth_string' RETAIN CURRENT PASSWORD;
SET PASSWORD TO RANDOM REPLACE 'current_auth_string';
SET PASSWORD TO RANDOM RETAIN CURRENT PASSWORD;

SET PASSWORD = 'auth_string';
SET PASSWORD TO RANDOM;

SET PASSWORD FOR 'jeffrey'@'localhost' = 'auth_string';
SET PASSWORD FOR 'bob'@'%.example.org' = 'auth_string';




/* https://dev.mysql.com/doc/refman/5.7/en/set-password.html */

/* SET PASSWORD [FOR user] = password_option */


SET PASSWORD FOR user = 'auth_string';
SET PASSWORD FOR user = PASSWORD('auth_string');
SET PASSWORD = 'auth_string';
SET PASSWORD = PASSWORD('auth_string');
