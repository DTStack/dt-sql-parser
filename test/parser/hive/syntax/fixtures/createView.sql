-- Common View
CREATE VIEW mydb.bro_view
AS SELECT * FROM mydb.sale_tbl;

CREATE VIEW IF NOT EXISTS mydb.bro_view
COMMENT '一个测试视图'
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


-- Materialized View
CREATE MATERIALIZED VIEW IF NOT EXISTS mydb.bro_view
DISABLE REWRITE
COMMENT '一个测试视图'
AS SELECT * FROM mydb.sale_tbl;

CREATE MATERIALIZED VIEW druid_wiki_mv
COMMENT '这是一个物化视图'
STORED AS PARQUET
AS
SELECT page, `user`, c_added, c_removed
FROM src;

CREATE MATERIALIZED VIEW IF NOT EXISTS mv2
DISABLE REWRITE
PARTITIONED ON (lo_revenue)
ROW FORMAT DELIMITED FIELDS TERMINATED BY ','
LOCATION '/user/hive/materialized_view'
TBLPROPERTIES('author'='hayden','desc'='一个物化视图')
AS
SELECT lo_revenue,
    lo_extendedprice * lo_discount AS d_price,
    lo_revenue - lo_supplycost AS d_balance
FROM customer, dates, lineorder, part, supplier
WHERE lo_orderdate = d_datekey;
