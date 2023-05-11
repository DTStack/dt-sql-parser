CREATE TABLE MyTable ('user_id' BIGINT, 'name' STRING) WITH ('connector' = 'oracle-x');

CREATE TABLE MyTable WITH ('connector' = 'oracle-x');

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

CREATE TABLE MyTable (id int, PRIMARY KEY (id) NOT ENFORCED) WITH ('connector' = 'kafka');

CREATE TABLE tbl1 (
    a bigint,
    h varchar,
    g AS 2 * (a + 1),
    ts AS toTimestamp(b, 'yyyy-MM-dd HH:mm:ss'),
    b varchar,
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
    id int,
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

CREATE TABLE catalog1.db1.table1 (id int) WITH ('connector' = 'kafka');

CREATE TABLE catalog1.db1.table1 (
    attr0 STRING,
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
    attr13 array<STRING>,
    attr14 ROW<attr15 float, attr16 timestamp(3)>,
    attr17 MAP<int, bigint>,
    name1 VARCHAR(64),
    message ROW<data ROW<UPO_TIMESTAMP VARCHAR(20)>>,
    raw RAW('class', 'snapshot')
) WITH ('connector' = 'kafka');

CREATE TABLE IF NOT EXISTS tbl1 (
    a bigint,
    h varchar,
    g AS 2 * (a + 1),
    ts AS toTimestamp(b, 'yyyy-MM-dd HH:mm:ss'),
    b varchar,
    proc AS PROCTIME(),
    PRIMARY KEY (a, b) NOT ENFORCED
) PARTITIONED BY (a, h) WITH (
    'connector' = 'kafka',
    'kafka.topic' = 'log.test'
);

CREATE TABLE tbl1 (
    a bigint COMMENT 'test column comment AAA.',
    h varchar,
    g AS 2 * (a + 1),
    ts AS toTimestamp(b, 'yyyy-MM-dd HH:mm:ss'),
    b varchar,
    proc AS PROCTIME(),
    meta STRING METADATA,
    my_meta STRING METADATA FROM 'meta',
    my_meta STRING METADATA FROM 'meta' VIRTUAL,
    PRIMARY KEY (a, b) NOT ENFORCED
) COMMENT 'test table comment ABC.' PARTITIONED BY (a, h) WITH (
    'connector' = 'kafka',
    'kafka.topic' = 'log.test'
);

CREATE TABLE tbl1 (
    a bigint COMMENT 'test column comment AAA.',
    h varchar,
    g AS 2 * (a + 1) COMMENT 'test computed column.',
    ts AS toTimestamp(b, 'yyyy-MM-dd HH:mm:ss'),
    b varchar,
    proc AS PROCTIME(),
    PRIMARY KEY (a, b) NOT ENFORCED
) COMMENT 'test table comment ABC.' PARTITIONED BY (a, h) WITH (
    'connector' = 'kafka',
    'kafka.topic' = 'log.test'
);

CREATE TABLE tbl1 (
    a bigint,
    h varchar,
    g AS 2 * (a + 1),
    ts AS toTimestamp(b, 'yyyy-MM-dd HH:mm:ss'),
    b varchar,
    proc AS PROCTIME(),
    PRIMARY KEY (a, b) NOT ENFORCED
) WITH (
    'connector' = 'kafka',
    'kafka.topic' = 'log.test'
);

CREATE TABLE tbl1 (
    a bigint PRIMARY KEY NOT ENFORCED COMMENT 'test column comment AAA.',
    h varchar CONSTRAINT ct1 PRIMARY KEY NOT ENFORCED,
    g AS 2 * (a + 1),
    ts AS toTimestamp(b, 'yyyy-MM-dd HH:mm:ss'),
    proc AS PROCTIME()
) WITH (
    'connector' = 'kafka',
    'kafka.topic' = 'log.test'
);

CREATE TABLE tbl1 (
    ts timestamp(3),
    id varchar,
    watermark FOR ts AS ts - INTERVAL '3' SECOND
) WITH (
    'connector' = 'kafka',
    'kafka.topic' = 'log.test'
);

CREATE TABLE tbl1 (
    log_ts varchar,
    ts AS to_timestamp(log_ts),
    WATERMARK FOR ts AS ts + INTERVAL '1' SECOND
) WITH (
    'connector' = 'kafka',
    'kafka.topic' = 'log.test'
);

CREATE TABLE tbl1 (
    f1 ROW<q1 bigint, q2 ROW<t1 timestamp, t2 varchar>, q3 boolean>,
    WATERMARK FOR f1.q2.t1 AS NOW()
) WITH (
    'connector' = 'kafka',
    'kafka.topic' = 'log.test'
);

CREATE TABLE tbl1 (
    a ARRAY<bigint>, 
    b MAP<int, varchar>,
    c ROW<cc0 int, cc1 float, cc2 varchar>,
    d MULTISET<varchar>,
    PRIMARY KEY (a, b) NOT ENFORCED
) with (
    'x' = 'y', 
    'asd' = 'data'
);

CREATE TABLE tbl1 (
    a ARRAY<ARRAY<bigint>>, 
    b MAP<MAP<int, varchar>, ARRAY<varchar>>,
    c ROW<cc0 ARRAY<int>, cc1 float, cc2 varchar>,
    d MULTISET<ARRAY<int>>,
    f TIMESTAMP(9),
    PRIMARY KEY (a, b) NOT ENFORCED
) with (
    'x' = 'y', 
    'asd' = 'data'
);

CREATE TABLE tbl1 (
    a ARRAY<ARRAY<bigint>>, 
    b MAP<MAP<int, varchar>, ARRAY<varchar>>,
    c ROW<cc0 ARRAY<int>, cc1 float, cc2 varchar>,
    d MULTISET<ARRAY<int>>,
    f TIMESTAMP(9),
    PRIMARY KEY (a, b) NOT ENFORCED
) with (
    'x' = 'y', 
    'asd' = 'data'
)  LIKE Orders (
   OVERWRITING OPTIONS
   EXCLUDING CONSTRAINTS
);