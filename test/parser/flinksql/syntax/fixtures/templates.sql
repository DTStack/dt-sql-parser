--********************************************************************--
-- Flink SQL 快速入门示例 创建表
-- 该模版仅支持使用"执行"功能。如需"提交"运行，需要您增加 INSERT 相关逻辑
--********************************************************************--
-- 执行创建临时表 DDL，不需要指定catalog.database
CREATE TABLE orders (
    order_uid  BIGINT,
    product_id BIGINT,
    price      DECIMAL(32, 2),
    order_time TIMESTAMP(3)
) WITH (
    'connector' = 'datagen'
);


--********************************************************************--
-- Flink SQL 快速入门示例 INSERT INTO
--********************************************************************--
-- 定义数据源表
CREATE TABLE server_logs (
    client_ip STRING,
    client_identity STRING,
    userid STRING,
    user_agent STRING,
    log_time TIMESTAMP(3),
    request_line STRING,
    status_code STRING,
    size INT
) WITH (
    'connector' = 'faker',   
    'fields.client_ip.expression' = '#{Internet.publicIpV4Address}',
    'fields.client_identity.expression' =  '-',
    'fields.userid.expression' =  '-',
    'fields.user_agent.expression' = '#{Internet.userAgentAny}',
    'fields.log_time.expression' =  '#{date.past ''15'',''5'',''SECONDS''}',
    'fields.request_line.expression' = '#{regexify ''(GET|POST|PUT|PATCH){1}''} #{regexify ''(/search\.html|/login\.html|/prod\.html|cart\.html|/order\.html){1}''} #{regexify ''(HTTP/1\.1|HTTP/2|/HTTP/1\.0){1}''}',
    'fields.status_code.expression' = '#{regexify ''(200|201|204|400|401|403|301){1}''}',
    'fields.size.expression' = '#{number.numberBetween ''100'',''10000000''}'
);

-- 定义结果表，实际应用中会选择 Kafka、JDBC 等作为结果表
CREATE TABLE client_errors (
    log_time TIMESTAMP(3),
    request_line STRING,
    status_code STRING,
    size INT
) WITH (
    'connector' = 'stream-x'
);

-- 写入数据到结果表
INSERT INTO client_errors
    SELECT
       log_time,
       request_line,
       status_code,
       size
    FROM server_logs
    WHERE
       status_code SIMILAR TO '4[0-9][0-9]';


--********************************************************************--
-- Flink SQL 快速入门示例 Statement Set
--********************************************************************--
-- 定义数据源表
CREATE TABLE server_logs (
    client_ip       STRING,
    client_identity STRING,
    userid          STRING,
    user_agent      STRING,
    log_time        TIMESTAMP(3),
    request_line    STRING,
    status_code     STRING,
    size            INT,
    WATERMARK FOR log_time AS log_time - INTERVAL '30' SECONDS
) WITH (
    'connector' = 'faker',    -- Faker 连接器仅在 VVR-4.0.12 及以上支持
    'fields.client_ip.expression' = '#{Internet.publicIpV4Address}',
    'fields.client_identity.expression' =  '-',
    'fields.userid.expression' =  '-',
    'fields.user_agent.expression' = '#{Internet.userAgentAny}',
    'fields.log_time.expression' =  '#{date.past ''15'',''5'',''SECONDS''}',
    'fields.request_line.expression' = '#{regexify ''(GET|POST|PUT|PATCH){1}''} #{regexify ''(/search\.html|/login\.html|/prod\.html|cart\.html|/order\.html){1}''} #{regexify ''(HTTP/1\.1|HTTP/2|/HTTP/1\.0){1}''}',
    'fields.status_code.expression' = '#{regexify ''(200|201|204|400|401|403|301){1}''}',
    'fields.size.expression' = '#{number.numberBetween ''100'',''10000000''}'
);

-- 定义结果表1
CREATE TABLE aggregations1 (
    `browser`     STRING,
    `status_code` STRING,
    `end_time`    TIMESTAMP(3),
    `requests`    BIGINT NOT NULL
) WITH (
    'connector' = 'blackhole'
);

-- 定义结果表2
CREATE TABLE aggregations2 (
    `browser`     STRING,
    `status_code` STRING,
    `requests`    BIGINT NOT NULL
) WITH (
       'connector' = 'stream-x'
);

-- This is a shared view that will be used by both insert into statements
CREATE VIEW browsers AS 
    SELECT
        REGEXP_EXTRACT(user_agent,'[^\/]+') AS browser,
        status_code,
        log_time
    FROM server_logs;

-- 封装多个INSERT INTO语句到一个STATEMENT SET语句中
BEGIN STATEMENT SET;
-- 5min窗口粒度聚合
INSERT INTO aggregations1
    SELECT
        browser,
        status_code,
        TUMBLE_ROWTIME(log_time, INTERVAL '5' MINUTE) AS end_time,
        COUNT(*) requests
FROM browsers
GROUP BY
    browser,
    status_code,
    TUMBLE(log_time, INTERVAL '5' MINUTE);
-- 1h窗口粒度聚合
INSERT INTO aggregations2
    SELECT
        browser,
        status_code,
        COUNT(*) requests
    FROM browsers
    GROUP BY
        browser,
        status_code,
        TUMBLE(log_time, INTERVAL '1' HOUR);
END;


--********************************************************************--
-- Flink SQL 快速入门示例 Watermark
-- 该模版仅支持使用"执行"功能。如需"提交"运行，需要您增加 INSERT 相关逻辑
--********************************************************************--
CREATE TABLE dt_catalog.dt_db.doctor_sightings (
    doctor        STRING,
    sighting_time TIMESTAMP(3),
    -- 通过watermark把sighting_time标识为事件时间，定义最大的乱序时间：期望所有的记录在目击发生后的15秒内都到达。
    WATERMARK FOR sighting_time AS sighting_time - INTERVAL '15' SECONDS
) WITH (
    'connector' = 'faker',   
    'fields.doctor.expression' = '#{dr_who.the_doctors}',
    'fields.sighting_time.expression' = '#{date.past ''15'',''SECONDS''}'
);

SELECT
    doctor,
    -- 在滚动窗口中使用sighting_time字段
    TUMBLE_ROWTIME(sighting_time, INTERVAL '1' MINUTE) AS sighting_time,
    COUNT(*) AS sightings
FROM dt_catalog.dt_db.doctor_sightings
GROUP BY
    TUMBLE(sighting_time, INTERVAL '1' MINUTE),
    doctor;


--********************************************************************--
-- Flink SQL 快速入门示例 GROUP BY
-- 该模版仅支持使用"执行"功能。如需"提交"运行，需要您增加 INSERT 相关逻辑
--********************************************************************--
-- 定义数据源表
CREATE TABLE dt_catalog.dt_db.server_logs (
    client_ip STRING,
    client_identity STRING,
    userid STRING,
    user_agent STRING,
    log_time TIMESTAMP(3),
    request_line STRING,
    status_code STRING,
    size INT
) WITH (
    'connector' = 'faker',   
    'fields.client_ip.expression' = '#{Internet.publicIpV4Address}',
    'fields.client_identity.expression' =  '-',
    'fields.userid.expression' =  '-',
    'fields.user_agent.expression' = '#{Internet.userAgentAny}',
    'fields.log_time.expression' =  '#{date.past ''15'',''5'',''SECONDS''}',
    'fields.request_line.expression' = '#{regexify ''(GET|POST|PUT|PATCH){1}''} #{regexify ''(/search\.html|/login\.html|/prod\.html|cart\.html|/order\.html){1}''} #{regexify ''(HTTP/1\.1|HTTP/2|/HTTP/1\.0){1}''}',
    'fields.status_code.expression' = '#{regexify ''(200|201|204|400|401|403|301){1}''}',
    'fields.size.expression' = '#{number.numberBetween ''100'',''10000000''}'
);

-- 采样user_agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A
-- 正则表达式: '[^\/]+' (匹配 '/' 之前的所有字符)
SELECT
    REGEXP_EXTRACT(user_agent,'[^\/]+') AS browser,
    status_code,
    COUNT(*) AS cnt_status
FROM dt_catalog.dt_db.server_logs
-- 按浏览器和状态码两个维度统计日志数量
GROUP BY
    REGEXP_EXTRACT(user_agent,'[^\/]+'),
    status_code;


--********************************************************************--
-- Flink SQL 快速入门示例 滚动窗口聚合
-- 该模版仅支持使用"执行"功能。如需"提交"运行，需要您增加 INSERT 相关逻辑
--********************************************************************--
CREATE TABLE dt_catalog.dt_db.server_logs (
    client_ip STRING,
    client_identity STRING,
    userid STRING,
    request_line STRING,
    status_code STRING,
    log_time AS PROCTIME() -- 使用当前系统处理时间作为表的时间字段
) WITH (
    'connector' = 'faker',  
    'fields.client_ip.expression' = '#{Internet.publicIpV4Address}',
    'fields.client_identity.expression' =  '-',
    'fields.userid.expression' =  '-',
    'fields.log_time.expression' =  '#{date.past ''15'',''5'',''SECONDS''}',
    'fields.request_line.expression' = '#{regexify ''(GET|POST|PUT|PATCH){1}''} #{regexify ''(/search\.html|/login\.html|/prod\.html|cart\.html|/order\.html){1}''} #{regexify ''(HTTP/1\.1|HTTP/2|/HTTP/1\.0){1}''}',
    'fields.status_code.expression' = '#{regexify ''(200|201|204|400|401|403|301){1}''}'
);

-- 按 window_start, window_end 维度计算每分钟窗口上不同的 ip 数量
SELECT window_start, window_end, COUNT(DISTINCT client_ip) AS ip_addresses
    FROM TABLE(
        -- 定义1min滑动窗口
        TUMBLE(TABLE dt_catalog.dt_db.server_logs, DESCRIPTOR(log_time), INTERVAL '1' MINUTE))
    GROUP BY window_start, window_end;


--********************************************************************--
-- Flink SQL 快速入门示例 滑动窗口聚合
-- 该模版仅支持使用"执行"功能。如需"提交"运行，需要您增加 INSERT 相关逻辑
--********************************************************************--
CREATE TABLE dt_catalog.dt_db.bids (
    bid_id STRING,
    currency_code STRING,
    bid_price DOUBLE,
    transaction_time TIMESTAMP(3),
    WATERMARK FOR transaction_time AS transaction_time - INTERVAL '5' SECONDS  -- 定义事件时间，允许的最大窗口延迟为5s
) WITH (
    'connector' = 'faker',   
    'fields.bid_id.expression' = '#{Internet.UUID}',
    'fields.currency_code.expression' = '#{regexify ''(EUR|USD|CNY)''}',
    'fields.bid_price.expression' = '#{Number.randomDouble ''2'',''1'',''150''}',
    'fields.transaction_time.expression' = '#{date.past ''30'',''SECONDS''}',
    'rows-per-second' = '100'
);

-- 定义1min 的滑动窗口，每隔 30s 滚动一次
SELECT window_start, window_end, currency_code, ROUND(AVG(bid_price),2) AS MovingAverageBidPrice
    FROM TABLE(
        HOP(TABLE dt_catalog.dt_db.bids, DESCRIPTOR(transaction_time), INTERVAL '30' SECONDS, INTERVAL '1' MINUTE))
    GROUP BY window_start, window_end, currency_code;


--********************************************************************--
-- Flink SQL 快速入门示例 累计窗口聚合
-- 该模版仅支持使用"执行"功能。如需"提交"运行，需要您增加 INSERT 相关逻辑
--********************************************************************--
-- 商品销售订单表
CREATE TABLE dt_catalog.dt_db.orders (
    order_id    BIGINT, -- 订单ID
    goods_id    BIGINT, -- 商品ID
    goods_sales DOUBLE, -- 商品销售额
    order_time  TIMESTAMP(3), -- 下单时间
    WATERMARK FOR order_time AS order_time - INTERVAL '5' SECONDS  -- 定义事件时间，允许的最大窗口延迟为5s
) WITH (
    'connector' = 'faker',   
    'fields.order_id.expression' = '#{number.numberBetween ''0'',''1000000000''}',
    'fields.goods_id.expression' = '#{number.numberBetween ''0'',''1000000000''}',
    'fields.goods_sales.expression' = '#{Number.randomDouble ''2'',''1'',''150''}',
    'fields.order_time.expression' = '#{date.past ''30'',''SECONDS''}',
    'rows-per-second' = '100'
);

-- 每分钟更新一次从零点开始截止到当前时刻的累计销售额
SELECT
    window_start,
    window_end, 
    SUM(goods_sales) AS cumulate_gmv -- 当天累计销售额
FROM TABLE(
    -- 定义窗口最大长度为一天的累计窗口，窗口滚动步长为1分钟
    CUMULATE(
        TABLE dt_catalog.dt_db.orders,
        DESCRIPTOR(order_time),
        INTERVAL '1' MINUTES,
        INTERVAL '1' DAY))
GROUP BY window_start, window_end;


--********************************************************************--
-- Flink SQL 快速入门示例 会话窗口聚合
-- 该模版仅支持使用"执行"功能。如需"提交"运行，需要您增加 INSERT 相关逻辑
--********************************************************************--
CREATE TABLE dt_catalog.dt_db.server_logs (
    client_ip STRING,
    client_identity STRING,
    userid STRING,
    log_time TIMESTAMP(3),
    request_line STRING,
    status_code STRING,
    WATERMARK FOR log_time AS log_time - INTERVAL '5' SECONDS -- 定义 watermark
) WITH (
    'connector' = 'faker',  
    'rows-per-second' = '5',
    'fields.client_ip.expression' = '#{Internet.publicIpV4Address}',
    'fields.client_identity.expression' =  '-',
    'fields.userid.expression' =  '#{regexify ''(morsapaes|knauf|sjwiesman){1}''}',
    'fields.log_time.expression' =  '#{date.past ''5'',''SECONDS''}',
    'fields.request_line.expression' = '#{regexify ''(GET|POST|PUT|PATCH){1}''} #{regexify ''(/search\.html|/login\.html|/prod\.html|cart\.html|/order\.html){1}''} #{regexify ''(HTTP/1\.1|HTTP/2|/HTTP/1\.0){1}''}',
    'fields.status_code.expression' = '#{regexify ''(200|201|204|400|401|403|301){1}''}'
);

SELECT 
    userid,
    SESSION_START(log_time, INTERVAL '10' SECOND) AS session_beg,
    SESSION_ROWTIME(log_time, INTERVAL '10' SECOND) AS session_end,
    COUNT(request_line) AS request_cnt
FROM dt_catalog.dt_db.server_logs
    WHERE status_code = '403'
    GROUP BY
        userid,
    -- 会话窗口的最大空闲间隔为10s，当10s内该窗口没有接收到新的请求，会关闭当前窗口
    SESSION(log_time, INTERVAL '10' SECOND);


--********************************************************************--
-- Flink SQL 快速入门示例 OVER窗口聚合
-- 该模版仅支持使用"执行"功能。如需"提交"运行，需要您增加 INSERT 相关逻辑
--********************************************************************--
CREATE TABLE dt_catalog.dt_db.temperature_measurements (
    measurement_time TIMESTAMP(3),
    city STRING,
    temperature FLOAT,
    WATERMARK FOR measurement_time AS measurement_time - INTERVAL '15' SECONDS -- 定义时间属性字段，OVER窗口排序时使用
) WITH (
    'connector' = 'faker',    -- Faker 连接器仅在 VVR-4.0.12 及以上支持
    'fields.measurement_time.expression' = '#{date.past ''15'',''SECONDS''}',
    'fields.temperature.expression' = '#{number.numberBetween ''0'',''50''}',
    'fields.city.expression' = '#{regexify ''(Chicago|Munich|Berlin|Portland|Hangzhou|Seatle|Beijing|New York){1}''}'
);

SELECT
    measurement_time,
    city,
    temperature,
    AVG(CAST(temperature AS FLOAT)) OVER last_minute AS avg_temperature_minute, -- 计算平均值
    MAX(temperature) OVER last_minute AS min_temperature_minute, -- 计算最大值
    MIN(temperature) OVER last_minute AS max_temperature_minute, -- 计算最小值
    STDDEV(CAST(temperature AS FLOAT)) OVER last_minute AS stdev_temperature_minute -- 计算标准差
FROM dt_catalog.dt_db.temperature_measurements
    WINDOW last_minute AS ( -- 定义1min时间间隔的OVER窗口，按城市粒度分区，温度测量值排序，每个元素都会触发一次计算
        PARTITION BY city
        ORDER BY measurement_time
        RANGE BETWEEN INTERVAL '1' MINUTE PRECEDING AND CURRENT ROW
    );

--********************************************************************--
-- Flink SQL 快速入门示例 级联窗口聚合
--********************************************************************--
CREATE TEMPORARY TABLE server_logs (
    log_time TIMESTAMP(3),
    client_ip STRING,
    client_identity STRING,
    userid STRING,
    request_line STRING,
    status_code STRING,
    size INT,
    WATERMARK FOR log_time AS log_time - INTERVAL '15' SECONDS -- 定义watermark
) WITH (
    'connector' = 'faker',   
    'fields.log_time.expression' =  '#{date.past ''15'',''5'',''SECONDS''}',
    'fields.client_ip.expression' = '#{Internet.publicIpV4Address}',
    'fields.client_identity.expression' =  '-',
    'fields.userid.expression' =  '-',
    'fields.request_line.expression' = '#{regexify ''(GET|POST|PUT|PATCH){1}''} #{regexify ''(/search\.html|/login\.html|/prod\.html|cart\.html|/order\.html){1}''} #{regexify ''(HTTP/1\.1|HTTP/2|/HTTP/1\.0){1}''}',
    'fields.status_code.expression' = '#{regexify ''(200|201|204|400|401|403|301){1}''}',
    'fields.size.expression' = '#{number.numberBetween ''100'',''10000000''}'
);

-- 1min聚合结果表
CREATE TEMPORARY TABLE avg_request_size_1m (
    window_start TIMESTAMP(3),
    window_end TIMESTAMP(3),
    avg_size BIGINT
) WITH (
    'connector' = 'blackhole'
);

-- 5min聚合结果表
CREATE TEMPORARY TABLE avg_request_size_5m (
    window_start TIMESTAMP(3),
    window_end TIMESTAMP(3),
    avg_size BIGINT
) WITH (
    'connector' = 'blackhole'
);

-- 1min窗口查询结果
CREATE VIEW server_logs_window_1m AS
SELECT 
    TUMBLE_START(log_time, INTERVAL '1' MINUTE) AS window_start,
    TUMBLE_ROWTIME(log_time, INTERVAL '1' MINUTE) AS window_end,
    SUM(size) AS total_size,
    COUNT(*) AS num_requests
FROM server_logs
    GROUP BY
    TUMBLE(log_time, INTERVAL '1' MINUTE);

-- 基于1min窗口查询结果，进行5min粒度窗口聚合
CREATE VIEW server_logs_window_5m AS
SELECT
    TUMBLE_START(window_end, INTERVAL '5' MINUTE) AS window_start,
    TUMBLE_ROWTIME(window_end, INTERVAL '5' MINUTE) AS window_end,
    SUM(total_size) AS total_size,
    SUM(num_requests) AS num_requests
FROM server_logs_window_1m
    GROUP BY
    TUMBLE(window_end, INTERVAL '5' MINUTE);

BEGIN STATEMENT SET;
-- 写入结果到1min窗口粒度结果表
INSERT INTO avg_request_size_1m SELECT
    window_start,
    window_end,
    total_size / num_requests AS avg_size
FROM server_logs_window_1m;

-- 写入结果到5min窗口粒度结果表
INSERT INTO avg_request_size_5m SELECT
    window_start,
    window_end,
    total_size / num_requests AS avg_size
FROM server_logs_window_5m;
END;


--********************************************************************--
-- Flink SQL 快速入门示例 去重
-- 该模版仅支持使用"执行"功能。如需"提交"运行，需要您增加 INSERT 相关逻辑
--********************************************************************--
CREATE TABLE dt_catalog.dt_db.orders (
  id INT,
  order_time AS CURRENT_TIMESTAMP,
  WATERMARK FOR order_time AS order_time - INTERVAL '5' SECONDS
)
WITH (
  'connector' = 'datagen',
  'rows-per-second'='10',
  'fields.id.kind'='random',
  'fields.id.min'='1',
  'fields.id.max'='100'
);

-- 对于每个order_id，按事件时间去重，只保留最新时间的记录即可实现去重
SELECT
  order_id,
  order_time
FROM (
    SELECT id AS order_id,
        order_time,
                -- 按事件时间升序排序
        ROW_NUMBER() OVER (PARTITION BY id ORDER BY order_time) AS rownum
    FROM dt_catalog.dt_db.orders)
WHERE rownum = 1; -- 只取排名第一的记录，去重是Top-N的一种特例


--********************************************************************--
-- Flink SQL 快速入门示例 Top-N
-- 该模版仅支持使用"执行"功能。如需"提交"运行，需要您增加 INSERT 相关逻辑
--********************************************************************--
CREATE TABLE dt_catalog.dt_db.spells_cast (
    wizard STRING,
    spell  STRING
) WITH (
  'connector' = 'faker',   
  'fields.wizard.expression' = '#{harry_potter.characters}',
  'fields.spell.expression' = '#{harry_potter.spells}'
);

-- 找出每个巫师最喜欢的两个法术
SELECT wizard, spell, times_cast
FROM (
    SELECT *,
    ROW_NUMBER() OVER (PARTITION BY wizard ORDER BY times_cast DESC) AS row_num -- 按法术次数降序排序
    FROM (SELECT wizard, spell, COUNT(*) AS times_cast FROM dt_catalog.dt_db.spells_cast GROUP BY wizard, spell) -- 计算每个巫师施展的各种法术的次数
)
WHERE row_num <= 2;


--********************************************************************--
-- Flink SQL 快速入门示例 窗口Top-N
-- 该模版仅支持使用"执行"功能。如需"提交"运行，需要您增加 INSERT 相关逻辑
--********************************************************************--
CREATE TABLE dt_catalog.dt_db.orders (
    bidtime TIMESTAMP(3),
    price DOUBLE,
    item STRING,
    supplier STRING,
    WATERMARK FOR bidtime AS bidtime - INTERVAL '5' SECONDS  -- 定义watermark
) WITH (
    'connector' = 'faker',  
    'fields.bidtime.expression' = '#{date.past ''30'',''SECONDS''}',
    'fields.price.expression' = '#{Number.randomDouble ''2'',''1'',''150''}',
    'fields.item.expression' = '#{Commerce.productName}',
    'fields.supplier.expression' = '#{regexify ''(Alice|Bob|Carol|Alex|Joe|James|Jane|Jack)''}',
    'rows-per-second' = '100'
);

-- 取出销售排名前三的供应商
SELECT *
    FROM (
        -- 按窗口时间分区，按价格降序排序
        SELECT *, ROW_NUMBER() OVER (PARTITION BY window_start, window_end ORDER BY price DESC) AS rownum
        FROM (
            -- 计算每个窗口内各个供应商的销售额
            SELECT window_start, window_end, supplier, SUM(price) AS price, COUNT(*) AS cnt
            FROM TABLE(
                TUMBLE(TABLE dt_catalog.dt_db.orders, DESCRIPTOR(bidtime), INTERVAL '10' MINUTES))
            GROUP BY window_start, window_end, supplier
        )
    ) 
WHERE rownum <= 3;


--********************************************************************--
-- Flink SQL 快速入门示例 模式检测CEP
-- 该模版仅支持使用"执行"功能。如需"提交"运行，需要您增加 INSERT 相关逻辑
--********************************************************************--
CREATE TABLE dt_catalog.dt_db.subscriptions (
    id STRING,
    user_id INT,
    type STRING,
    start_date TIMESTAMP(3),
    end_date TIMESTAMP(3),
    payment_expiration TIMESTAMP(3),
    proc_time AS PROCTIME()
) WITH (
    'connector' = 'faker',   
    'fields.id.expression' = '#{Internet.uuid}',
    'fields.user_id.expression' = '#{number.numberBetween ''1'',''50''}',
    'fields.type.expression'= '#{regexify ''(basic|premium|platinum){1}''}',
    'fields.start_date.expression' = '#{date.past ''30'',''DAYS''}',
    'fields.end_date.expression' = '#{date.future ''15'',''DAYS''}',
    'fields.payment_expiration.expression' = '#{date.future ''365'',''DAYS''}'
);

SELECT *
FROM dt_catalog.dt_db.subscriptions
    MATCH_RECOGNIZE ( -- 按user_id分区，按处理时间proc_time升序排序
        PARTITION BY user_id
        ORDER BY proc_time
        MEASURES
            LAST(PREMIUM.type) AS premium_type,
            AVG(TIMESTAMPDIFF(DAY,PREMIUM.start_date,PREMIUM.end_date)) AS premium_avg_duration,
            BASIC.start_date AS downgrade_date
        AFTER MATCH SKIP PAST LAST ROW
        --模式: 一个或多个‘premium‘或’platinum‘订阅事件
        --对于相同的'user_id'，后面跟着一个'basic'订阅事件
        PATTERN (PREMIUM+ BASIC)
        DEFINE PREMIUM AS PREMIUM.type IN ('premium','platinum'),
            BASIC AS BASIC.type = 'basic');


--********************************************************************--
-- Flink SQL 快速入门示例 Regular Join
-- 该模版仅支持使用"执行"功能。如需"提交"运行，需要您增加 INSERT 相关逻辑
--********************************************************************--
CREATE TABLE dt_catalog.dt_db.NOC (
    agent_id STRING,
    codename STRING
) WITH (
    'connector' = 'faker',   
    'fields.agent_id.expression' = '#{regexify ''(1|2|3|4|5){1}''}',
    'fields.codename.expression' = '#{superhero.name}',
    'number-of-rows' = '10'
);

CREATE TABLE dt_catalog.dt_db.RealNames (
    agent_id STRING,
    name STRING
) WITH (
    'connector' = 'faker',   
    'fields.agent_id.expression' = '#{regexify ''(1|2|3|4|5){1}''}',
    'fields.name.expression' = '#{Name.full_name}',
    'number-of-rows' = '10'
);

-- 使用agent_id作为两张表关联的条件，左右两边任何一张表来了新数据都会触发join动作
SELECT
    name,
    codename
FROM dt_catalog.dt_db.NOC t1
INNER JOIN dt_catalog.dt_db.RealNames t2 ON t1.agent_id = t2.agent_id;


--********************************************************************--
-- Flink SQL 快速入门示例 Interval Join
-- 该模版仅支持使用"执行"功能。如需"提交"运行，需要您增加 INSERT 相关逻辑
--********************************************************************--
CREATE TABLE dt_catalog.dt_db.orders (
    id INT,
    order_time AS TIMESTAMPADD(DAY, CAST(FLOOR(RAND()*(1-5+1)+5)*(-1) AS INT), CURRENT_TIMESTAMP)
) WITH (
    'connector' = 'datagen',
    'rows-per-second'='10',
    'fields.id.kind'='sequence',
    'fields.id.start'='1',
    'fields.id.end'='1000'
);

CREATE TABLE dt_catalog.dt_db.shipments (
    id INT,
    order_id INT,
    shipment_time AS TIMESTAMPADD(DAY, CAST(FLOOR(RAND()*(1-5+1)) AS INT), CURRENT_TIMESTAMP)
) WITH (
    'connector' = 'datagen',
    'rows-per-second'='5',
    'fields.id.kind'='random',
    'fields.id.min'='0',
    'fields.order_id.kind'='sequence',
    'fields.order_id.start'='1',
    'fields.order_id.end'='1000'
);

-- order表的每条数据会与shipments表过去三天至当前时刻时间范围内的数据进行join
SELECT
    o.id AS order_id,
    o.order_time,
    s.shipment_time,
    TIMESTAMPDIFF(DAY,o.order_time,s.shipment_time) AS day_diff
FROM dt_catalog.dt_db.orders o
    JOIN dt_catalog.dt_db.shipments s ON o.id = s.order_id
WHERE
    -- 时间 join 条件：shipments.shipment_time - INTERVAL '3' DAY <= orders.order_time < shipments.shipment_time
    o.order_time BETWEEN s.shipment_time - INTERVAL '3' DAY AND s.shipment_time;


--********************************************************************--
-- Flink SQL 快速入门示例 时态表Join
-- 该模版仅支持使用"执行"功能。如需"提交"运行，需要您增加 INSERT 相关逻辑
--********************************************************************--
-- 使用主键约束和watermark来定义一张版本表，这张表可以是一个cdc表、upsert类型的kafka topic等
CREATE TABLE dt_catalog.dt_db.currency_rates (
    `currency_code` STRING,
    `eur_rate` DECIMAL(6,4),
    `rate_time` TIMESTAMP(3),
    WATERMARK FOR `rate_time` AS rate_time - INTERVAL '15' SECONDS, -- 定义事件时间
    PRIMARY KEY (currency_code) NOT ENFORCED -- 定义主键
) WITH (
    'connector' = 'faker',   
    'fields.currency_code.expression' = '#{Currency.code}',
    'fields.eur_rate.expression' = '#{Number.randomDouble ''4'',''0'',''10''}',
    'fields.rate_time.expression' = '#{date.past ''15'',''SECONDS''}',
    'rows-per-second' = '100'
);

-- 这是一个append-only类型的动态表，需要定义watermk
CREATE TABLE dt_catalog.dt_db.transactions (
    `id` STRING,
    `currency_code` STRING,
    `total` DECIMAL(10,2),
    `transaction_time` TIMESTAMP(3),
     WATERMARK FOR `transaction_time` AS transaction_time - INTERVAL '30' SECONDS --定义watermark
) WITH (
    'connector' = 'faker',   
    'fields.id.expression' = '#{Internet.UUID}',
    'fields.currency_code.expression' = '#{Currency.code}',
    'fields.total.expression' = '#{Number.randomDouble ''2'',''10'',''1000''}',
    'fields.transaction_time.expression' = '#{date.past ''30'',''SECONDS''}',
    'rows-per-second' = '100'
);

-- 当左右两张表的watermark对齐时，才会触发join动作，左右两张表都需要定义watermark
SELECT
    t.id,
    t.total * c.eur_rate AS total_eur,
    t.total,
    c.currency_code,
    t.transaction_time
FROM dt_catalog.dt_db.transactions t
    -- transactions表每条记录都与currency_rates表transaction_time时刻的汇率进行join
    JOIN dt_catalog.dt_db.currency_rates FOR SYSTEM_TIME AS OF t.transaction_time AS c
    -- 指定join key
    ON t.currency_code = c.currency_code;


--********************************************************************--
-- Flink SQL 快速入门示例 维表Join
-- 该模版仅支持使用"执行"功能。如需"提交"运行，需要您增加 INSERT 相关逻辑
--********************************************************************--
CREATE TABLE dt_catalog.dt_db.subscriptions (
    id STRING,
    user_id INT,
    type STRING,
    start_date TIMESTAMP(3),
    end_date TIMESTAMP(3),
    payment_expiration TIMESTAMP(3),
    proc_time AS PROCTIME() -- 这里需要定义处理时间属性
) WITH (
    'connector' = 'faker',   
    'fields.id.expression' = '#{Internet.uuid}',
    'fields.user_id.expression' = '#{number.numberBetween ''1'',''50''}',
    'fields.type.expression'= '#{regexify ''(basic|premium|platinum){1}''}',
    'fields.start_date.expression' = '#{date.past ''30'',''DAYS''}',
    'fields.end_date.expression' = '#{date.future ''365'',''DAYS''}',
    'fields.payment_expiration.expression' = '#{date.future ''365'',''DAYS''}'
);

-- 定义维表，为了示例能直接运行，这里使用faker 作为维表，实际应用中一般会使用JDBC、Redis、Hbase等作为维表
CREATE TABLE dt_catalog.dt_db.users (
    user_id INT PRIMARY KEY, -- 定义主键
    user_name VARCHAR(255) NOT NULL,
    age INT NOT NULL
) WITH (
    'connector' = 'faker',   
    'fields.user_id.expression' = '#{number.numberBetween ''1'',''10''}',
    'fields.user_name.expression' = '#{regexify ''(ron|jark|danny){1}''}',
    'fields.age.expression' = '#{number.numberBetween ''1'',''30''}'
);

SELECT
    id AS subscription_id,
    type AS subscription_type,
    age AS user_age,
    CASE
        WHEN age < 18 THEN 1
        ELSE 0
    END AS is_minor
FROM dt_catalog.dt_db.subscriptions usub
    -- subscriptions每条记录都使用当前系统时间与维表users中的最新数据进行join
    JOIN dt_catalog.dt_db.users FOR SYSTEM_TIME AS OF usub.proc_time AS u
    -- 指定join key
    ON usub.user_id = u.user_id;


--********************************************************************--
-- Flink SQL ODS 层
-- 实际应用中，该任务应该是一个采集任务，源表为RDB
--********************************************************************--
CREATE  TABLE source_table (
    account_number STRING,
    channel_id INT,
    account_open_datetime TIMESTAMP(3)
) WITH (
    'connector' = 'faker', -- 使用 Flink Faker Connector
    'fields.account_number.expression' = '#{Finance.iban}', -- 随机生成银行账号
    'fields.channel_id.expression' = '#{number.numberBetween ''1'',''4''}', -- 渠道ID随机生成1到3之间的数字
    'fields.account_open_datetime.expression' =  '#{date.past ''15'',''5'',''SECONDS''}' -- 过去15天的日期，每5秒一条数据
);

-- 定义结果表，实际应用中应选择 Kafka等作为结果表
CREATE TABLE sink_table (
    account_number STRING,
    channel_id INT,
    account_open_datetime TIMESTAMP(3)
) WITH (
    'connector' = 'stream-x'
);

-- 写入数据到结果表
INSERT INTO sink_table SELECT * FROM source_table

--********************************************************************--
-- Flink SQL DWD 层
-- 实际应用中，源表为 ODS TOPIC
--********************************************************************--
CREATE  TABLE source_table (
    account_number STRING,
    channel_id INT,
    account_open_datetime TIMESTAMP(3)
) WITH (
    'connector' = 'faker', -- 使用 Flink Faker Connector
    'fields.account_number.expression' = '#{Finance.iban}', -- 随机生成银行账号
    'fields.channel_id.expression' = '#{number.numberBetween ''1'',''4''}', -- 渠道ID随机生成1到3之间的数字
    'fields.account_open_datetime.expression' =  '#{date.past ''15'',''5'',''SECONDS''}' -- 过去15天的日期，每5秒一条数据
);

-- 定义维表，实际应用中应选择RDB作为维表
CREATE  TABLE dim_table (
    channel_id INT,
    channel_name STRING,
    PRIMARY KEY (channel_id,channel_name) NOT ENFORCED
) WITH (
    'connector' = 'faker', -- 使用 Flink Faker Connector
    'fields.channel_id.expression' = '#{number.numberBetween ''1'',''4''}', -- 渠道ID随机生成1到3之间的数字
    'fields.channel_name.expression' =  '#{app.name}' -- 渠道名称
);

-- 定义结果表，实际应用中应选择 Kafka等作为结果表
CREATE TABLE sink_table (
    account_number STRING,
    channel_id INT,
    channel_name STRING,
    account_open_datetime TIMESTAMP(3)
) WITH (
    'connector' = 'stream-x'
);

-- 写入数据到结果表
INSERT INTO sink_table
    SELECT
        s1.account_number,
        s1. channel_id ,
        d1.channel_name,
        s1.account_open_datetime
    FROM source_table s1 
    left JOIN dim_table d1 ON s1.channel_id=d1.channel_id


--********************************************************************--
-- Flink SQL DWS 层
-- 实际应用中，源表为DWD TOPIC
--********************************************************************--
CREATE  TABLE source_table (
    account_number STRING,
    channel_id INT,
    channel_name STRING,
    account_open_datetime TIMESTAMP(3)
) WITH (
    'connector' = 'faker', -- 使用 Flink Faker Connector
    'fields.account_number.expression' = '#{Finance.iban}', -- 随机生成银行账号
    'fields.channel_id.expression' = '#{number.numberBetween ''1'',''4''}', -- 渠道ID随机生成1到3之间的数字
    'fields.channel_name.expression' =  '#{app.name}' ,-- 渠道名称
    'fields.account_open_datetime.expression' = '#{date.past ''15'',''5'',''SECONDS''}' -- 过去15天的日期，每5秒一条数据
);
DROP TABLE source_table
SELECT * FROM source_table

-- 定义结果表，实际应用中应选择Kafka作为结果表
CREATE TABLE sink_table (
    channel_id STRING,
    open_date STRING,
    cnt INT
) WITH (
    'connector' = 'stream-x'
);
DROP TABLE sink_table
SELECT * FROM sink_table

-- 写入数据到结果表
INSERT INTO sink_table
    SELECT 
        channel_id,
        DATE_FORMAT(account_open_datetime,'yyyy-MM-dd'),
        count(account_number) 
    FROM source_table 
    GROUP BY channel_id,DATE_FORMAT(account_open_datetime,'yyyy-MM-dd')


--********************************************************************--
-- Flink SQL ADS 层
-- 实际应用中，源表为DWS TOPIC
--********************************************************************--
CREATE TABLE source_table (
    channel_id STRING,
    open_time TIMESTAMP(3),
    cnt INT
) WITH (
    'connector' = 'faker', -- 使用 Flink Faker Connector
    'fields.channel_id.expression' = '#{number.numberBetween ''1'',''4''}', -- 渠道ID随机生成1到3之间的数字
    'fields.open_time.expression' =  '#{Date.future ''15'',''5'',''SECONDS''}' ,-- 日期
    'fields.cnt.expression' = '#{number.numberBetween ''1'',''100000000''}'-- 数量
);

-- 实际应用中，结果表为RDB
CREATE TABLE sink_table (
    open_date STRING,
    cnt INT
) WITH (
    'connector' = 'stream-x'
);

-- 写入数据到结果表
INSERT INTO sink_table
SELECT DATE_FORMAT(open_time,'yyyy-MM-dd'),count(1);