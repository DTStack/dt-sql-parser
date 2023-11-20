-- https://dev.mysql.com/doc/refman/8.0/en/drop-tablespace.html

/* DROP [UNDO] TABLESPACE tablespace_name
    [ENGINE [=] engine_name] */


DROP UNDO TABLESPACE tablespace_name ENGINE = engine_name;
DROP TABLESPACE tablespace_name ENGINE = engine_name;
DROP UNDO TABLESPACE tablespace_name;

DROP UNDO TABLESPACE tablespace_name ENGINE engine_name;
DROP TABLESPACE tablespace_name ENGINE engine_name;
DROP TABLESPACE tablespace_name;
