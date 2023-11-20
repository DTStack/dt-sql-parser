-- https://dev.mysql.com/doc/refman/8.0/en/create-logfile-group.html

/* CREATE LOGFILE GROUP logfile_group
    ADD UNDOFILE 'undo_file'
    [INITIAL_SIZE [=] initial_size]
    [UNDO_BUFFER_SIZE [=] undo_buffer_size]
    [REDO_BUFFER_SIZE [=] redo_buffer_size]
    [NODEGROUP [=] nodegroup_id]
    [WAIT]
    [COMMENT [=] 'string']
    ENGINE [=] engine_name */


CREATE LOGFILE GROUP lg1 ADD UNDOFILE 'undo.dat' INITIAL_SIZE = 10M ENGINE = NDB;
CREATE LOGFILE GROUP lg1 ADD UNDOFILE 'undo.dat' INITIAL_SIZE 10M ENGINE = NDB;
CREATE LOGFILE GROUP lg1 ADD UNDOFILE 'undo.dat' ENGINE = NDB;

CREATE LOGFILE GROUP lg1 ADD UNDOFILE 'undo.dat' UNDO_BUFFER_SIZE = 10M ENGINE = NDB;
CREATE LOGFILE GROUP lg1 ADD UNDOFILE 'undo.dat' UNDO_BUFFER_SIZE 10M ENGINE = NDB;
CREATE LOGFILE GROUP lg1 ADD UNDOFILE 'undo.dat' ENGINE = NDB;

CREATE LOGFILE GROUP lg1 ADD UNDOFILE 'undo.dat' REDO_BUFFER_SIZE = 10M ENGINE = NDB;
CREATE LOGFILE GROUP lg1 ADD UNDOFILE 'undo.dat' REDO_BUFFER_SIZE 10M ENGINE = NDB;
CREATE LOGFILE GROUP lg1 ADD UNDOFILE 'undo.dat' ENGINE = NDB;

CREATE LOGFILE GROUP my_logfile_group ADD UNDOFILE 'undo_1.log' INITIAL_SIZE = 1G UNDO_BUFFER_SIZE = 16M ENGINE INNODB;

CREATE LOGFILE GROUP lg1 ADD UNDOFILE 'undo.dat' INITIAL_SIZE = 10M UNDO_BUFFER_SIZE = 10M REDO_BUFFER_SIZE = 10M NODEGROUP = nodegroup_id WAIT COMMENT = 'logfile' ENGINE = NDB;

CREATE LOGFILE GROUP myg1 ADD UNDOFILE 'myundo-1.dat' ENGINE=NDB;
