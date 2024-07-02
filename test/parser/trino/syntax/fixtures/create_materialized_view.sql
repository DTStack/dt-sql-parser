CREATE MATERIALIZED VIEW a AS SELECT * FROM t;
CREATE OR REPLACE MATERIALIZED VIEW catalog.schema.matview COMMENT 'A simple materialized view' AS SELECT * FROM catalog2.schema2.tab;
CREATE OR REPLACE MATERIALIZED VIEW catalog.schema.matview COMMENT 'A simple materialized view' AS SELECT * FROM catalog2.schema2.tab;
CREATE OR REPLACE MATERIALIZED VIEW catalog.schema.matview COMMENT 'A simple materialized view'WITH (partitioned_by = ARRAY ['dateint']) AS SELECT * FROM catalog2.schema2.tab;
CREATE OR REPLACE MATERIALIZED VIEW catalog.schema.matview COMMENT 'A partitioned materialized view' WITH (partitioned_by = ARRAY ['dateint']) AS WITH a (t, u) AS (SELECT * FROM x), b AS (SELECT * FROM a) TABLE b;

CREATE MATERIALIZED VIEW cancelled_orders
AS
    SELECT orderkey, totalprice
    FROM orders
    WHERE orderstatus = 3;

CREATE OR REPLACE MATERIALIZED VIEW order_totals_by_date
AS
    SELECT orderdate, sum(totalprice) AS price
    FROM orders
    GROUP BY orderdate;

CREATE MATERIALIZED VIEW orders_nation_mkgsegment
COMMENT 'Orders with nation and market segment data'
WITH ( partitioning = ARRAY['mktsegment', 'nationkey'] )
AS
    SELECT o.*, c.nationkey, c.mktsegment
    FROM orders AS o
    JOIN customer AS c
    ON o.custkey = c.custkey;

CREATE OR REPLACE MATERIALIZED VIEW 
IF NOT EXISTS orders_nation_mkgsegment
GRACE PERIOD INTERVAL '1' YEAR
COMMENT 'Orders with nation and market segment data'
WITH ( partitioning = ARRAY['mktsegment', 'nationkey'] )
AS SELECT * FROM t;