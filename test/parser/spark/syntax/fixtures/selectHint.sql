/*+ hint [ , ... ] */

SELECT /*+ COALESCE(3) */ * FROM t;

SELECT /*+ REPARTITION(3) */ * FROM t;

SELECT /*+ REPARTITION(c) */ * FROM t;

SELECT /*+ REPARTITION(3, c) */ * FROM t;

SELECT /*+ REPARTITION_BY_RANGE(c) */ * FROM t;

SELECT /*+ REPARTITION_BY_RANGE(3, c) */ * FROM t;

SELECT /*+ REBALANCE */ * FROM t;

SELECT /*+ REBALANCE(3) */ * FROM t;

SELECT /*+ REBALANCE(c) */ * FROM t;

SELECT /*+ REBALANCE(3, c) */ * FROM t;

-- multiple partitioning hints
EXPLAIN EXTENDED SELECT /*+ REPARTITION(100), COALESCE(500), REPARTITION_BY_RANGE(3, c) */ * FROM t;

-- == Parsed Logical Plan ==
-- 'UnresolvedHint REPARTITION, [100]
-- +- 'UnresolvedHint COALESCE, [500]
--    +- 'UnresolvedHint REPARTITION_BY_RANGE, [3, 'c]
--       +- 'Project [*]
--          +- 'UnresolvedRelation [t]

-- == Analyzed Logical Plan ==
-- name: string, c: int
-- Repartition 100, true
-- +- Repartition 500, false
--    +- RepartitionByExpression [c#30 ASC NULLS FIRST], 3
--       +- Project [name#29, c#30]
--          +- SubqueryAlias spark_catalog.default.t
--             +- Relation[name#29,c#30] parquet

-- == Optimized Logical Plan ==
-- Repartition 100, true
-- +- Relation[name#29,c#30] parquet

-- == Physical Plan ==
-- Exchange RoundRobinPartitioning(100), false, [id=#121]
-- +- *(1) ColumnarToRow
--    +- FileScan parquet default.t[name#29,c#30] Batched: true, DataFilters: [], Format: Parquet,
--       Location: CatalogFileIndex[file:/spark/spark-warehouse/t], PartitionFilters: [],
--       PushedFilters: [], ReadSchema: struct<name:string>

-- Join Hints for broadcast join
SELECT /*+ BROADCAST(t1) */ * FROM t1 INNER JOIN t2 ON t1.key = t2.key;
SELECT /*+ BROADCASTJOIN (t1) */ * FROM t1 left JOIN t2 ON t1.key = t2.key;
SELECT /*+ MAPJOIN(t2) */ * FROM t1 right JOIN t2 ON t1.key = t2.key;

-- Join Hints for shuffle sort merge join
SELECT /*+ SHUFFLE_MERGE(t1) */ * FROM t1 INNER JOIN t2 ON t1.key = t2.key;
SELECT /*+ MERGEJOIN(t2) */ * FROM t1 INNER JOIN t2 ON t1.key = t2.key;
SELECT /*+ MERGE(t1) */ * FROM t1 INNER JOIN t2 ON t1.key = t2.key;

-- Join Hints for shuffle hash join
SELECT /*+ SHUFFLE_HASH(t1) */ * FROM t1 INNER JOIN t2 ON t1.key = t2.key;

-- Join Hints for shuffle-and-replicate nested loop join
SELECT /*+ SHUFFLE_REPLICATE_NL(t1) */ * FROM t1 INNER JOIN t2 ON t1.key = t2.key;

-- When different join strategy hints are specified on both sides of a join, Spark
-- prioritizes the BROADCAST hint over the MERGE hint over the SHUFFLE_HASH hint
-- over the SHUFFLE_REPLICATE_NL hint.
-- Spark will issue Warning in the following example
-- org.apache.spark.sql.catalyst.analysis.HintErrorLogger: Hint (strategy=merge)
-- is overridden by another hint and will not take effect.
SELECT /*+ BROADCAST(t1), MERGE(t1, t2) */ * FROM t1 INNER JOIN t2 ON t1.key = t2.key;
