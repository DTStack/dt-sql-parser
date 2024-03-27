SELECT * FROM  -- unfinished

CREATE TEMPORARY VIEW IF NOT EXISTS v AS SELECT col1 FROM tbl;

CREATE TEMPORARY TABLE client_errors (
    log_time TIMESTAMP(3),
    request_line STRING,
    status_code STRING,
    size INT
) WITH (
    'connector' = 'stream-x'
);

ALTER VIEW v1 RENAME TO v2;

CREATE TABLE db. ; -- unfinished

LOAD MODULE CORE;

REMOVE JAR '<path_to_filename>.jar'

INSERT INTO  VALUES (100, 99.9 / 10, 'abc', true, now ()); -- unfinished

CREATE DATABASE IF NOT EXISTS dataApi COMMENT 'test create database' WITH ('key1' = 'value1', 'key2.a' = 'value2.a');

DROP DATABASE IF EXISTS Orders RESTRICT;

INSERT INTO country_page_view
SELECT `user`,
    cnt
FROM db. ; -- unfinished