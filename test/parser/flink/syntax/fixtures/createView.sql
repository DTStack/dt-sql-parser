CREATE VIEW v AS
SELECT
    col1
FROM
    tbl;

CREATE TEMPORARY VIEW v AS
SELECT
    col1
FROM
    tbl;

CREATE VIEW v COMMENT 'this is a view' AS
SELECT
    col1
FROM
    tbl;

CREATE VIEW v(col1, col2) AS
SELECT
    col3,
    col4
FROM
    tbl;

CREATE VIEW v(col1, col2) COMMENT 'this is a view' AS
SELECT
    col3,
    col4
FROM
    tbl;

CREATE TEMPORARY VIEW IF NOT EXISTS v AS
SELECT
    col1
FROM
    tbl;

CREATE TEMPORARY VIEW browsers AS 
SELECT
    REGEXP_EXTRACT(user_agent,'[^\/]+') AS browser,
    status_code,
    log_time
FROM 
    server_logs;

CREATE VIEW server_logs_window_1m AS
SELECT 
    TUMBLE_START(log_time, INTERVAL '1' MINUTE) AS window_start,
    TUMBLE_ROWTIME(log_time, INTERVAL '1' MINUTE) AS window_end,
    SUM(size) AS total_size,
    COUNT(*) AS num_requests
FROM 
    server_logs
GROUP BY
    TUMBLE(log_time, INTERVAL '1' MINUTE);

    create view v_search_product as
select
  *
from
  (
    select
      request_id,
      click_time,
      date_format (click_time, 'yyyy-MM-dd') as click_date,
      cast(wid as bigint) as wid,
      query,
      row_number() over (
        partition by
          wid,
          date_format (click_time, 'yyyy-MM-dd')
        order by
          click_time
      ) as ranks
    from
      search_product
    where
      wid is not null
      and wid <> 'None'
      and date_format (click_time, 'yyyy-MM-dd') >= to_date ('2024-12-04', 'yyyy-MM-dd')
  ) t
where
  ranks = 1
  and wid > 0;