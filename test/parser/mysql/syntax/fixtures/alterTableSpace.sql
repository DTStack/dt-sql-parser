-- v5.7: https://dev.mysql.com/doc/refman/5.7/en/alter-tablespace.html

/* ALTER TABLESPACE tablespace_name
    {ADD | DROP} DATAFILE 'file_name'
    [INITIAL_SIZE [=] size]
    [WAIT]
    ENGINE [=] engine_name */


ALTER TABLESPACE tablespace_name ADD DATAFILE "file_name" ENGINE 'engine_name';
ALTER TABLESPACE tablespace_name DROP DATAFILE "file_name" ENGINE 'engine_name';

ALTER TABLESPACE tablespace_name DROP DATAFILE "file_name" INITIAL_SIZE = 1G ENGINE 'engine_name';
ALTER TABLESPACE tablespace_name DROP DATAFILE "file_name" INITIAL_SIZE 1G ENGINE 'engine_name';
ALTER TABLESPACE tablespace_name DROP DATAFILE "file_name" INITIAL_SIZE 1G WAIT ENGINE 'engine_name';
ALTER TABLESPACE tablespace_name DROP DATAFILE "file_name" INITIAL_SIZE 1G WAIT ENGINE = 'engine_name';





-- v8: https://dev.mysql.com/doc/refman/8.0/en/alter-tablespace.html

/* ALTER [UNDO] TABLESPACE tablespace_name
  NDB only:
    {ADD | DROP} DATAFILE 'file_name'
    [INITIAL_SIZE [=] size]
    [WAIT]
  InnoDB and NDB:
    [RENAME TO tablespace_name]
  InnoDB only:
    [AUTOEXTEND_SIZE [=] 'value']
    [SET {ACTIVE | INACTIVE}]
    [ENCRYPTION [=] {'Y' | 'N'}]
  InnoDB and NDB:
    [ENGINE [=] engine_name]
  Reserved for future use:
    [ENGINE_ATTRIBUTE [=] 'string'] */


ALTER UNDO TABLESPACE tablespace_name ADD DATAFILE "file_name" INITIAL_SIZE = 500M WAIT RENAME TO new_tablespace_name AUTOEXTEND_SIZE = 500M SET ACTIVE ENCRYPTION = 'Y' ENGINE 'engine_name' ENGINE_ATTRIBUTE = 'aaa';
ALTER TABLESPACE tablespace_name DROP DATAFILE "file_name" INITIAL_SIZE 500M WAIT AUTOEXTEND_SIZE = 500M SET ACTIVE ENCRYPTION = 'N' ENGINE 'engine_name' ENGINE_ATTRIBUTE = 'aaa';
ALTER TABLESPACE tablespace_name DROP DATAFILE "file_name";


