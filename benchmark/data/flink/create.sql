CREATE TABLE MyTable ('user_id' BIGINT, 'name' STRING) WITH ('connector' = 'oracle-x');

CREATE TABLE MyTable WITH ('connector' = 'oracle-x');

CREATE TEMPORARY TABLE client_errors (
    log_time TIMESTAMP(3),
    request_line STRING,
    status_code STRING,
    size INT
) WITH (
    'connector' = 'stream-x'
);

-- 尽管官方文档的 BNF 里没有支持创建临时表，但实际上是支持的
CREATE TEMPORARY TABLE MyTable ('user_id' BIGINT, 'name' STRING) WITH ('connector' = 'oracle-x');

CREATE TABLE MyTable (
    'user_id' BIGINT,
    'name' STRING,
    'timestamp' BIGINT METADATA,                                                  -- part of the query-to-sink schema
    'offset' BIGINT METADATA VIRTUAL,                                             -- not part of the query-to-sink schema
    'record_time' TIMESTAMP(3) WITH LOCAL TIME ZONE METADATA FROM 'timestamp'     -- reads and writes a Kafka record's timestamp
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

CREATE TABLE MyTable (id INT, PRIMARY KEY (id) NOT ENFORCED) WITH ('connector' = 'kafka');

CREATE TABLE tbl1 (
    a BIGINT,
    h VARCHAR,
    g AS 2 * (a + 1),
    ts AS toTimestamp(b, 'yyyy-MM-dd HH:mm:ss'),
    b VARCHAR,
    proc AS PROCTIME(),
    meta STRING METADATA,
    my_meta STRING METADATA FROM 'meta',
    my_meta STRING METADATA FROM 'meta' VIRTUAL,
    meta STRING METADATA VIRTUAL,
    PRIMARY KEY (a, b) NOT ENFORCED
) PARTITIONED BY (a, h) WITH (
    'connector' = 'kafka',
    'kafka.topic' = 'log.test'
);

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
    id INT,
    -- Add watermark definition
    WATERMARK FOR order_time AS order_time - INTERVAL '5' SECOND
) WITH (
    -- Overwrite the startup-mode
    'scan.startup.mode' = 'latest-offset'
) LIKE Orders_in_file (
    -- Exclude everything besides the computed columns which we need to generate the watermark for.
    -- We do not want to have the partitions or filesystem options as those do not apply to kafka. 
    EXCLUDING ALL 
    INCLUDING GENERATED
);

CREATE TABLE my_ctas_table WITH ('connector' = 'kafka') 
AS SELECT
    id,
    name,
    age
FROM
    source_table
WHERE
    mod(id, 10) = 0;

CREATE TABLE catalog1.db1.table1 (id INT) WITH ('connector' = 'kafka');

CREATE TABLE catalog1.db1.table1 (
    attr0 STRING,
    attr1 BOOLEAN,
    attr3 DECIMAL(38, 18),
    attr4 TINYINT,
    attr5 SMALLINT,
    attr6 INT,
    attr7 BIGINT,
    attr8 FLOAT,
    attr9 DOUBLE,
    attr10 DATE,
    attr11 TIME,
    attr12 TIMESTAMP(3),
    attr13 ARRAY<STRING>,
    attr14 ROW<attr15 FLOAT, attr16 TIMESTAMP(3)>,
    attr17 MAP<INT, BIGINT>,
    name1 VARCHAR(64),
    message ROW<data ROW<UPO_TIMESTAMP VARCHAR(20)>>,
    `raw` RAW('class', 'snapshot')
) WITH ('connector' = 'kafka');