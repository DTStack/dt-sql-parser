-- https://dev.mysql.com/doc/refman/8.0/en/create-database.html

/* CREATE {DATABASE | SCHEMA} [IF NOT EXISTS] db_name
    [create_option] ...

create_option: [DEFAULT] {
    CHARACTER SET [=] charset_name
  | COLLATE [=] collation_name
  | ENCRYPTION [=] {'Y' | 'N'}
} */


-- https://dev.mysql.com/doc/refman/5.7/en/create-database.html

/* CREATE {DATABASE | SCHEMA} [IF NOT EXISTS] db_name
    [create_option] ...

create_option: [DEFAULT] {
    CHARACTER SET [=] charset_name
  | COLLATE [=] collation_name
} */


CREATE DATABASE IF NOT EXISTS db_name;
CREATE DATABASE db_name CHARACTER SET utf8mb4;
CREATE DATABASE db_name COLLATE utf8mb4_unicode_ci;
CREATE DATABASE db_name ENCRYPTION = 'Y';
CREATE DATABASE db_name DEFAULT ENCRYPTION 'N';

CREATE SCHEMA IF NOT EXISTS db_name DEFAULT ENCRYPTION 'Y';
CREATE SCHEMA db_name DEFAULT CHARACTER SET utf8mb4;
CREATE SCHEMA db_name DEFAULT COLLATE utf8mb4_unicode_ci;
CREATE SCHEMA db_name DEFAULT ENCRYPTION = 'Y';
CREATE SCHEMA db_name DEFAULT ENCRYPTION 'N';
