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

CREATE TABLE IF NOT EXISTS tbl1 (
    a BIGINT,
    h VARCHAR,
    g AS 2 * (a + 1),
    ts AS toTimestamp(b, 'yyyy-MM-dd HH:mm:ss'),
    b VARCHAR,
    proc AS PROCTIME(),
    PRIMARY KEY (a, b) NOT ENFORCED
) PARTITIONED BY (a, h) WITH (
    'connector' = 'kafka',
    'kafka.topic' = 'log.test'
);

CREATE TABLE tbl1 (
    a BIGINT COMMENT 'test column comment AAA.',
    h VARCHAR,
    g AS 2 * (a + 1),
    ts AS toTimestamp(b, 'yyyy-MM-dd HH:mm:ss'),
    b VARCHAR,
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
    a BIGINT COMMENT 'test column comment AAA.',
    h VARCHAR,
    g AS 2 * (a + 1) COMMENT 'test computed column.',
    ts AS toTimestamp(b, 'yyyy-MM-dd HH:mm:ss'),
    b VARCHAR,
    proc AS PROCTIME(),
    PRIMARY KEY (a, b) NOT ENFORCED
) COMMENT 'test table comment ABC.' PARTITIONED BY (a, h) WITH (
    'connector' = 'kafka',
    'kafka.topic' = 'log.test'
);

CREATE TABLE tbl1 (
    a BIGINT,
    h VARCHAR,
    g AS 2 * (a + 1),
    ts AS toTimestamp(b, 'yyyy-MM-dd HH:mm:ss'),
    b VARCHAR,
    proc AS PROCTIME(),
    PRIMARY KEY (a, b) NOT ENFORCED
) WITH (
    'connector' = 'kafka',
    'kafka.topic' = 'log.test'
);

CREATE TABLE tbl1 (
    a BIGINT PRIMARY KEY NOT ENFORCED COMMENT 'test column comment AAA.',
    h VARCHAR CONSTRAINT ct1 PRIMARY KEY NOT ENFORCED,
    g AS 2 * (a + 1),
    ts AS toTimestamp(b, 'yyyy-MM-dd HH:mm:ss'),
    proc AS PROCTIME()
) WITH (
    'connector' = 'kafka',
    'kafka.topic' = 'log.test'
);

CREATE TABLE tbl1 (
    ts TIMESTAMP(3),
    id VARCHAR,
    WATERMARK FOR ts AS ts - INTERVAL '3' SECOND
) WITH (
    'connector' = 'kafka',
    'kafka.topic' = 'log.test'
);

CREATE TABLE tbl1 (
    log_ts VARCHAR,
    ts AS to_timestamp(log_ts),
    WATERMARK FOR ts AS ts + INTERVAL '1' SECOND
) WITH (
    'connector' = 'kafka',
    'kafka.topic' = 'log.test'
);

CREATE TABLE tbl1 (
    f1 ROW<q1 BIGINT, q2 ROW<t1 TIMESTAMP, t2 VARCHAR>, q3 BOOLEAN>,
    WATERMARK FOR f1.q2.t1 AS NOW()
) WITH (
    'connector' = 'kafka',
    'kafka.topic' = 'log.test'
);

CREATE TABLE tbl1 (
    a ARRAY<BIGINT>, 
    b MAP<INT, VARCHAR>,
    c ROW<cc0 INT, cc1 FLOAT, cc2 VARCHAR>,
    d MULTISET<VARCHAR>,
    PRIMARY KEY (a, b) NOT ENFORCED
) WITH (
    'x' = 'y', 
    'asd' = 'data'
);

CREATE TABLE tbl1 (
    a ARRAY<ARRAY<BIGINT>>, 
    b MAP<MAP<INT, VARCHAR>, ARRAY<VARCHAR>>,
    c ROW<cc0 ARRAY<INT>, cc1 FLOAT, cc2 VARCHAR>,
    d MULTISET<ARRAY<INT>>,
    f TIMESTAMP(9),
    PRIMARY KEY (a, b) NOT ENFORCED
) WITH (
    'x' = 'y', 
    'asd' = 'data'
);

CREATE TABLE tbl1 (
    a ARRAY<ARRAY<BIGINT>>, 
    b MAP<MAP<INT, VARCHAR>, ARRAY<VARCHAR>>,
    c ROW<cc0 ARRAY<INT>, cc1 FLOAT, cc2 VARCHAR>,
    d MULTISET<ARRAY<INT>>,
    f TIMESTAMP(9),
    PRIMARY KEY (a, b) NOT ENFORCED
) WITH (
    'x' = 'y', 
    'asd' = 'data'
)  LIKE Orders (
   OVERWRITING OPTIONS
   EXCLUDING CONSTRAINTS
);

CREATE TEMPORARY TABLE server_logs (
    client_ip STRING,
    client_identity STRING,
    userid STRING,
    user_agent STRING,
    log_time TIMESTAMP(3),
    request_line STRING,
    status_code STRING,
    size INT
) WITH (
    'connector' = 'faker'
);

CREATE TEMPORARY TABLE aggregations1 (
    `browser`     STRING,
    `status_code` STRING,
    `end_time`    TIMESTAMP(3),
    `requests`    BIGINT NOT NULL
) WITH (
    'connector' = 'blackhole'
);

CREATE TABLE dt_catalog.dt_db.doctor_sightings (
    doctor        STRING,
    sighting_time TIMESTAMP(3),
    WATERMARK FOR sighting_time AS sighting_time - INTERVAL '15' SECONDS
) WITH (
    'connector' = 'faker'
);


CREATE TABLE dt_catalog.dt_db.bids (
    bid_id STRING,
    currency_code STRING,
    bid_price DOUBLE,
    transaction_time TIMESTAMP(3),
    WATERMARK FOR transaction_time AS transaction_time - INTERVAL '5' SECONDS  -- 定义事件时间，允许的最大窗口延迟为5s
) WITH (
    'connector' = 'faker'
);


CREATE TABLE dt_catalog.dt_db.currency_rates (
    `currency_code` STRING,
    `eur_rate` DECIMAL(6,4),
    `rate_time` TIMESTAMP(3),
    WATERMARK FOR `rate_time` AS rate_time - INTERVAL '15' SECONDS, -- 定义事件时间
    PRIMARY KEY (currency_code) NOT ENFORCED -- 定义主键
) WITH (
    'connector' = 'faker'
);

CREATE TABLE dt_catalog.dt_db.users (
    -- That was weird, NOT ENFORCED should have been necessary but we got a demo like the following and it could work!
    user_id INT PRIMARY KEY, 
    user_name VARCHAR(255) NOT NULL,
    age INT NULL
) WITH (
    'connector' = 'faker'
);

CREATE TABLE retail_order (
  message ROW <
    after ROW (
      pk_id varchar,
      id varchar,
      wid varchar,
      order_id varchar,
      cardNo varchar,
      billDate varchar,
      orderType varchar,
      saleChannel varchar,
      createTime timestamp,
      refno varchar,
      ts varchar,
      source varchar
    )
>,
  proc_time AS PROCTIME ()
)
WITH
  (
    -- 'properties.bootstrap.servers'='192.168.201.114:9092',
    'properties.bootstrap.servers' = '192.168.201.238:9092,192.168.201.239:9092,192.168.201.240:9092',
    'connector' = 'kafka-x',
    'scan.parallelism' = '1',
    'properties.group.id' = 'test_flink_custom_clue_create_clue',
    'format' = 'json',
    'topic' = 'jnby_retail_order_history',
    'scan.startup.mode' = 'latest-offset'
  );