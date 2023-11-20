-- https://dev.mysql.com/doc/refman/8.0/en/create-event.html

/* CREATE
    [DEFINER = user]
    EVENT
    [IF NOT EXISTS]
    event_name
    ON SCHEDULE schedule
    [ON COMPLETION [NOT] PRESERVE]
    [ENABLE | DISABLE | DISABLE ON SLAVE]
    [COMMENT 'string']
    DO event_body

schedule: {
    AT timestamp [+ INTERVAL interval] ...
  | EVERY interval
    [STARTS timestamp [+ INTERVAL interval] ...]
    [ENDS timestamp [+ INTERVAL interval] ...]
}

interval:
    quantity {YEAR | QUARTER | MONTH | DAY | HOUR | MINUTE |
              WEEK | SECOND | YEAR_MONTH | DAY_HOUR | DAY_MINUTE |
              DAY_SECOND | HOUR_MINUTE | HOUR_SECOND | MINUTE_SECOND} */


CREATE EVENT IF NOT EXISTS my_event ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL 1 HOUR DO UPDATE my_schema.my_table SET mycol = mycol + 1;

CREATE EVENT e_totals ON SCHEDULE AT '2006-02-10 23:59:00' DO INSERT INTO test.totals VALUES (NOW());

CREATE EVENT e_hourly ON SCHEDULE EVERY 1 HOUR COMMENT 'Clears out sessions table each hour.' DO DELETE FROM site_activity.sessions;

CREATE EVENT e_daily
    ON SCHEDULE
      EVERY 1 DAY
    COMMENT 'Saves total number of sessions then clears the table each day'
    DO INSERT INTO site_activity.totals (time, total)
          SELECT CURRENT_TIMESTAMP, COUNT(*)
            FROM site_activity.sessions;

CREATE EVENT e_call_my ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL 1 DAY DO CALL myproc(5, 27);
