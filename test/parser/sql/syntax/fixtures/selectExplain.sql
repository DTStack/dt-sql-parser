-- EXPLAIN [ EXTENDED | CODEGEN | COST | FORMATTED ] statement

-- Default Output
EXPLAIN select k, sum(v) from values (1, 2), (1, 3) t(k, v) group by k;

-- Using Extended
EXPLAIN EXTENDED select k, sum(v) from values (1, 2), (1, 3) t(k, v) group by k;


-- https://github.com/DTStack/dt-sql-parser/issues/131
SELECT count(1) FROM tableName;

-- https://github.com/DTStack/dt-sql-parser/issues/131
DELETE FROM tableName WHERE (SELECT count(1) FROM tableName WHERE pt = '20230601') > 0 AND  pt = '20230601';
