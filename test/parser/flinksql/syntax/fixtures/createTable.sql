CREATE TABLE MyTable ('user_id' BIGINT, 'name' STRING) WITH ('connector' = 'oracle-x');

CREATE TEMPORARY TABLE MyTable ('user_id' BIGINT, 'name' STRING) WITH ('connector' = 'oracle-x');

CREATE TABLE MyTable (
    'user_id' BIGINT,
    'name' STRING,
    'timestamp' BIGINT METADATA,
    -- part of the query-to-sink schema
    'offset' BIGINT METADATA VIRTUAL,
    -- not part of the query-to-sink schema
    'record_time' TIMESTAMP_LTZ(3) METADATA
    FROM
        'timestamp' -- reads and writes a Kafka record's timestamp
) WITH ('connector' = 'kafka');

CREATE TABLE MyTable (
    'user_id' BIGINT,
    'price' DOUBLE,
    'quantity' DOUBLE,
    'cost' AS price * quanitity -- evaluate expression and supply the result to queries
) WITH ('connector' = 'kafka');

CREATE TABLE MyTable (
    'user' BIGINT,
    product STRING,
    order_time TIMESTAMP(3),
    WATERMARK FOR order_time AS order_time - INTERVAL '5' SECOND
) WITH ('connector' = 'kafka');

CREATE TABLE MyTable (id int, PRIMARY KEY (id) NOT ENFORCED) WITH ('connector' = 'kafka');

CREATE TABLE Orders_in_file (
    'user' BIGINT,
    product STRING,
    order_time_string STRING,
    order_time AS to_timestamp(order_time)
) PARTITIONED BY ('user') WITH (
    'connector' = 'filesystem',
    'path' = '...'
);

CREATE TABLE Orders_with_watermark (
    id int,
    -- Add watermark definition
    WATERMARK FOR order_time AS order_time - INTERVAL '5' SECOND
) WITH (
    -- Overwrite the startup-mode
    'scan.startup.mode' = 'latest-offset'
) LIKE Orders_in_file (
    -- Exclude everything besides the computed columns which we need to generate the watermark for.
    -- We do not want to have the partitions or filesystem options as those do not apply to kafka. 
    EXCLUDING ALL INCLUDING GENERATED
);

CREATE TABLE my_ctas_table WITH ('connector' = 'kafka') AS
SELECT
    id,
    name,
    age
FROM
    source_table
WHERE
    mod(id, 10) = 0;

CREATE TABLE catalog1.db1.table1 (id int) WITH ('connector' = 'kafka');

CREATE TABLE catalog1.db1.table1 (
    attr0 string,
    attr1 boolean,
    attr3 decimal(38, 18),
    attr4 TINYINT,
    attr5 smallint,
    attr6 int,
    attr7 bigint,
    attr8 float,
    attr9 double,
    attr10 date,
    attr11 time,
    attr12 timestamp(3),
    attr13 array < string >,
    attr14 row < attr15 float,
    attr16 timestamp(3) >,
    attr17 map < int,
    bigint >,
    name1 VARCHAR(64),
    message ROW < data ROW < UPO_TIMESTAMP VARCHAR(20) > >,
    raw RAW('class', 'snapshot')
) WITH ('connector' = 'kafka');