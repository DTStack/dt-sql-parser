-- Inserting data into Hive Tables from queries
INSERT INTO table_name PARTITION (partition_col)
SELECT col1, col2, partition_col
FROM source_table;

FROM source_table
INSERT OVERWRITE TABLE table_name PARTITION (partition_col='value1')
SELECT col1, col2
WHERE partition_col = 'value1'
INSERT INTO TABLE table_name PARTITION (partition_col='value2')
SELECT col1, col2
WHERE partition_col = 'value2';

FROM page_view_stg pvs
INSERT OVERWRITE TABLE page_view PARTITION(dt='2008-06-08', country)
SELECT pvs.viewTime, pvs.userid, pvs.page_url, pvs.referrer_url, null, null, pvs.ip, pvs.cnt;


-- Writing data into the filesystem from queries
INSERT OVERWRITE LOCAL DIRECTORY '/path/to/output'
SELECT col1, col2
FROM table_name;

INSERT OVERWRITE DIRECTORY '/path/to/output'
STORED AS PARQUET
SELECT col1, col2
FROM table_name;

INSERT INTO table_name PARTITION (year, month, day)
SELECT col1, col2, 
    CASE 
        WHEN month = 'January' THEN 2023
        WHEN month = 'February' THEN 2023
        ELSE 2024
    END AS year,
    CASE 
        WHEN month = 'January' THEN 1
        WHEN month = 'February' THEN 2
        ELSE 3
    END AS month,
    CAST(day AS int) AS day
FROM source_table;

INSERT INTO table_name PARTITION (country, state)
SELECT col1, col2,
    CONCAT(country, '_', state) AS country_state
FROM source_table;

INSERT INTO table_name PARTITION (country, state)
SELECT col1, col2, country, state
FROM (
    SELECT col1, col2,
        CASE
            WHEN country = 'USA' THEN 'United States'
            ELSE country
        END AS country,
        CASE
            WHEN country = 'USA' THEN 'NA'
            ELSE state
        END AS state
    FROM source_table
) subquery;

INSERT OVERWRITE LOCAL DIRECTORY '/path/to/output'
ROW FORMAT DELIMITED
FIELDS TERMINATED BY ',' 
ESCAPED BY '^'
COLLECTION ITEMS TERMINATED BY '.'
MAP KEYS TERMINATED BY ':'
LINES TERMINATED BY 'n'
NULL DEFINED AS 'x'
SELECT col1, col2
FROM table_name;

INSERT OVERWRITE LOCAL DIRECTORY '/path/to/output'
ROW FORMAT SERDE 'org.apache.hadoop.hive.serde2.avro.AvroSerDe'
STORED AS AVRO
SELECT col1, col2
FROM table_name;