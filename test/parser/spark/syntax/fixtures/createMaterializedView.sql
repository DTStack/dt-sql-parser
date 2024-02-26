/**
** Notes:
** 1. MATERIALIZED VIEW syntax has not been officially supported by Spark yet.
** 2. The support for the following syntax is based on the self-developed component of dtstack.
**/

-- CREATE MATERIALIZED VIEW [ IF NOT EXISTS ] view_identifier
--          [ USING data_source ]
--          [ OPTIONS ( key1=val1, key2=val2, ... ) ]
--          [ PARTITIONED BY ( col_name1, col_name2, ... ) ]
--          [ SKEWED BY ( col_name, col_name, ... )
--              ON ( ( col_value, col_value, ... ), ( col_value, col_value, ... ), ... )
--              [ STORED AS DIRECTORIES ] ]
--          [ CLUSTERED BY ( col_name3, col_name4, ... ) 
--              [ SORTED BY ( col_name [ ASC | DESC ], ... ) ] 
--              INTO num_buckets BUCKETS ]
--          [ ROW FORMAT row_format ] 
--          [ [ STORED AS file_format ]
--              | STORED BY 'storage.handler.class.name' [ WITH SERDEPROPERTIES (...) ] ) ]
--          [ LOCATION hdfs_path ]
--          [ COMMENT table_comment ]
--          [ TBLPROPERTIES (property_name=property_value, ...) ]
--          AS select_statement;

CREATE MATERIALIZED VIEW mv AS SELECT id FROM students;

CREATE MATERIALIZED VIEW userDB.mv AS SELECT id FROM students;

CREATE MATERIALIZED VIEW IF NOT EXISTS mv AS SELECT id FROM students;

-- Use data source
CREATE MATERIALIZED VIEW mv USING CSV AS SELECT id FROM students;

-- Use parquet data source with parquet storage options
CREATE MATERIALIZED VIEW mv 
    USING PARQUET
    OPTIONS (
      'parquet.bloom.filter.enabled'='true',
      'parquet.bloom.filter.enabled#age'='false'
    )
    AS SELECT id, age FROM students;

CREATE MATERIALIZED VIEW mv 
    PARTITIONED BY (id) 
    AS SELECT id FROM students;

CREATE MATERIALIZED VIEW mv 
    SKEWED BY (id) ON (1,5,6) 
    AS SELECT id FROM students;

CREATE MATERIALIZED VIEW mv 
    SKEWED BY (id) ON (1,5,6) STORED AS DIRECTORIES 
    AS SELECT id FROM students;

-- Create bucketed materialized view
CREATE MATERIALIZED VIEW mv 
    CLUSTERED BY (id) SORTED BY (id) INTO 3 BUCKETS
    AS SELECT id FROM students;

-- Use row format
CREATE MATERIALIZED VIEW mv 
    ROW FORMAT SERDE 'org.apache.hadoop.hive.serde2.RegexSerDe'
    WITH SERDEPROPERTIES (
        "input.regex" = ".*"
    )
    STORED AS TEXTFILE
    AS SELECT id FROM students;

-- Use file format with 'stored as'
CREATE MATERIALIZED VIEW mv 
    STORED AS TEXTFILE
    AS SELECT id FROM students;

-- Use file format with 'stored by'
CREATE MATERIALIZED VIEW mv 
    STORED BY 'org.apache.hadoop.hive.hbase.HBaseStorageHandler'
    WITH SERDEPROPERTIES (
        "hbase.columns.mapping" = "cf:string",
        "hbase.table.name" = "hbase_table_0"
    )
    AS SELECT id FROM students;

-- Specify view storage path
CREATE MATERIALIZED VIEW mv 
    STORED AS PARQUET
    LOCATION 'hdfs://mv/'
    AS SELECT id FROM students;

-- Add mv comment
CREATE MATERIALIZED VIEW mv 
    STORED AS PARQUET
    LOCATION 'hdfs://mv/'
    COMMENT 'A materialized view'
    AS SELECT id FROM students;

-- Set refresh properties
CREATE MATERIALIZED VIEW mv 
    TBLPROPERTIES("mv.enableAutoRefresh"="true", "mv.refreshInterval"="10min")
    AS SELECT id FROM students;
