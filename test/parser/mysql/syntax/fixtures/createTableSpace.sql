-- https://dev.mysql.com/doc/refman/8.0/en/create-tablespace.html

/* CREATE [UNDO] TABLESPACE tablespace_name

  InnoDB and NDB:
    [ADD DATAFILE 'file_name']
    [AUTOEXTEND_SIZE [=] value]

  InnoDB only:
    [FILE_BLOCK_SIZE = value]
    [ENCRYPTION [=] {'Y' | 'N'}]

  NDB only:
    USE LOGFILE GROUP logfile_group
    [EXTENT_SIZE [=] extent_size]
    [INITIAL_SIZE [=] initial_size]
    [MAX_SIZE [=] max_size]
    [NODEGROUP [=] nodegroup_id]
    [WAIT]
    [COMMENT [=] 'string']

  InnoDB and NDB:
    [ENGINE [=] engine_name]

  Reserved for future use:
    [ENGINE_ATTRIBUTE [=] 'string'] */


CREATE TABLESPACE ts1 ADD DATAFILE 'any_directory/../ts1.ibd' AUTOEXTEND_SIZE = 100M;
CREATE TABLESPACE ts1 ENGINE_ATTRIBUTE='{"key":"value"}';
CREATE TABLESPACE `ts1` ADD DATAFILE 'ts1.ibd' ENGINE=INNODB;
CREATE TABLESPACE `ts2` ADD DATAFILE 'ts2.ibd' FILE_BLOCK_SIZE = 8192 Engine=InnoDB;
CREATE TABLESPACE `ts3` ENGINE=INNODB;

CREATE UNDO TABLESPACE 'undo_003' ADD DATAFILE 'undo_003.ibu';



