ALTER VIEW mydb.view1 SET TBLPROPERTIES ('author'='hayden','date'='2023-07-07')

ALTER VIEW myview1 SET TBLPROPERTIES ('author'='hayden','date'='2023-09-04')

ALTER VIEW mydb.view2 
AS SELECT DISTINCT id, `name`, runtime
    FROM task_tbl
    WHERE type='hour';

ALTER VIEW myview2 
AS SELECT DISTINCT id, `name`, runtime
    FROM task_tbl
    WHERE type='hour';

ALTER MATERIALIZED VIEW myschema1.materialized_view_1 
ENABLE REWRITE;

ALTER MATERIALIZED VIEW myschema1.materialized_view_2 
DISABLE REWRITE;

ALTER MATERIALIZED VIEW my_materialized_view_1 
ENABLE REWRITE;

ALTER MATERIALIZED VIEW my_materialized_view_2 
DISABLE REWRITE;