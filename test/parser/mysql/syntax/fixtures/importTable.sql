-- https://dev.mysql.com/doc/refman/8.0/en/import-table.html

-- IMPORT TABLE FROM sdi_file [, sdi_file] ...


IMPORT TABLE FROM '/tmp/mysql-files/employees.sdi', '/tmp/mysql-files/managers1.sdi', '/tmp/mysql-files/managers2.sdi';
IMPORT TABLE FROM '/tmp/mysql-files/employees.sdi', '/tmp/mysql-files/managers1.sdi';
IMPORT TABLE FROM '/tmp/mysql-files/*.sdi';
