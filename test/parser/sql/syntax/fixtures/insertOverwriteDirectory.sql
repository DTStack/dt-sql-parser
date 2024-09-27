-- Syntax
-- INSERT OVERWRITE [ LOCAL ] DIRECTORY [ directory_path ]
--     { spark_format | hive_format }
--     { VALUES ( { value | NULL } [ , ... ] ) [ , ( ... ) ] | query }
--     USING file_format [ OPTIONS ( key = val [ , ... ] ) ]
--     [ ROW FORMAT row_format ] [ STORED AS hive_serde ]


INSERT OVERWRITE DIRECTORY '/path/to/output/directory' SELECT * FROM your_table WHERE condition;

INSERT OVERWRITE DIRECTORY '/tmp/destination'
    USING parquet
    OPTIONS (col1 1, col2 2, col3 'test')
    SELECT * FROM test_table;

INSERT OVERWRITE DIRECTORY
    USING parquet
    OPTIONS ('path' '/tmp/destination', col1 1, col2 2, col3 'test')
    SELECT * FROM test_table;

INSERT OVERWRITE LOCAL DIRECTORY '/tmp/destination'
    USING parquet
    OPTIONS (col1 1, col2 2, col3 'test')
    SELECT * FROM test_table;

INSERT OVERWRITE LOCAL DIRECTORY
    USING parquet
    OPTIONS ('path' '/tmp/destination', col1 1, col2 2, col3 'test')
    SELECT * FROM test_table;
