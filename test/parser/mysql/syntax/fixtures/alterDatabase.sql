-- https://dev.mysql.com/doc/refman/8.0/en/alter-database.html

/* ALTER {DATABASE | SCHEMA} [db_name]
    alter_option ...

alter_option: {
    [DEFAULT] CHARACTER SET [=] charset_name
  | [DEFAULT] COLLATE [=] collation_name
  | [DEFAULT] ENCRYPTION [=] {'Y' | 'N'}
  | READ ONLY [=] {DEFAULT | 0 | 1}
} */


ALTER DATABASE mydb READ ONLY = 0 DEFAULT COLLATE utf8mb4_bin;
ALTER SCHEMA mydb READ ONLY = 1 DEFAULT COLLATE utf8mb4_bin;

ALTER DATABASE READ ONLY = DEFAULT;

ALTER DATABASE mydb READ ONLY = 0;
ALTER DATABASE mydb READ ONLY = 1;
