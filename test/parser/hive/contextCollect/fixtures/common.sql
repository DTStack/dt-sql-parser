CREATE TEMPORARY TABLE IF NOT EXISTS copy_table LIKE origin_table;

CREATE TEMPORARY EXTERNAL TABLE IF NOT EXISTS list_bucket_multiple (col1 STRING, col2 INT, col3 STRING) COMMENT 'this is a comment';

CREATE TABLE IF NOT EXISTS derived_table AS
SELECT
    *
FROM
    origin_table;

CREATE VIEW mydb.bro_view
AS SELECT * FROM mydb.sale_tbl;

CREATE VIEW mydb.task_view (
    taskId COMMENT '任务id',
    taskName COMMENT '任务名称',
    taskRunTime COMMENT '任务运行时长'
)
COMMENT '一个任务信息视图'
TBLPROPERTIES(
    'author'='hayden'
)
AS SELECT DISTINCT id, `name`, runtime
    FROM task_tbl
    WHERE type='day';

CREATE MATERIALIZED VIEW IF NOT EXISTS mydb.bro_view
DISABLE REWRITE
COMMENT '一个测试视图'
AS SELECT * FROM mydb.sale_tbl;

SELECT col1, col2 FROM table_name_1;

SELECT a.* FROM a JOIN b ON (a.id = b.id AND a.department = b.department);

FROM table_name_1 SELECT col1, col2;

FROM a JOIN b ON (a.id = b.id AND a.department = b.department) SELECT a.*;

INSERT INTO TABLE students(a,b,c)
VALUES ('fred flintstone', 35, 1.28), ('barney rubble', 32, 2.32);

INSERT INTO table_name PARTITION (country, state)
SELECT col1, col2,
    CONCAT(country, '_', state) AS country_state
FROM source_table;

FROM page_view_stg pvs
INSERT OVERWRITE TABLE page_view PARTITION(dt='2008-06-08', country)
SELECT pvs.viewTime, pvs.userid, pvs.page_url, pvs.referrer_url, null, null, pvs.ip, pvs.cnt;