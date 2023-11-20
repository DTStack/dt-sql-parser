-- https://dev.mysql.com/doc/refman/8.0/en/alter-event.html

/* ALTER
    [DEFINER = user]
    EVENT event_name
    [ON SCHEDULE schedule]
    [ON COMPLETION [NOT] PRESERVE]
    [RENAME TO new_event_name]
    [ENABLE | DISABLE | DISABLE ON SLAVE]
    [COMMENT 'string']
    [DO event_body] */


ALTER EVENT no_such_event ON SCHEDULE EVERY '2:3' DAY_HOUR;

ALTER EVENT myevent ON SCHEDULE EVERY 12 HOUR STARTS CURRENT_TIMESTAMP + INTERVAL 4 HOUR;

ALTER EVENT myevent ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL 1 DAY DO TRUNCATE TABLE myschema.mytable;

ALTER EVENT myevent DISABLE;

ALTER EVENT myevent RENAME TO yourevent;

ALTER EVENT myevent RENAME TO yourevent;

ALTER EVENT olddb.myevent RENAME TO newdb.myevent;
