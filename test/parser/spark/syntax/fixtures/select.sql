-- https://github.com/DTStack/dt-sql-parser/issues/131
SELECT count(1) FROM tableName;

-- https://github.com/DTStack/dt-sql-parser/issues/131
DELETE FROM tableName WHERE (SELECT count(1) FROM tableName WHERE pt = '20230601') > 0 AND  pt = '20230601';
