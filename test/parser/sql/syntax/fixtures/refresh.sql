-- REFRESH resource_path

REFRESH "hdfs://path/to/table";


-- REFRESH FUNCTION function_identifier

REFRESH FUNCTION func1;

REFRESH FUNCTION db1.func1;


-- REFRESH [TABLE] table_identifier

REFRESH TABLE tbl1;

REFRESH TABLE tempDB.view1;

-- REFRESH MATERIALIZED VIEW view_identifier

REFRESH MATERIALIZED VIEW mv;

REFRESH MATERIALIZED VIEW userDB.mv;
