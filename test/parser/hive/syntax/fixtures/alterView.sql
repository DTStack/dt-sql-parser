ALTER VIEW mydb.view1 SET TBLPROPERTIES ('author'='hayden','date'='2023-07-07')

ALTER VIEW view2 
AS SELECT DISTINCT id, `name`, runtime
    FROM task_tbl
    WHERE type='hour';

ALTER MATERIALIZED VIEW myschema1.materialized_view_1 
ENABLE REWRITE;