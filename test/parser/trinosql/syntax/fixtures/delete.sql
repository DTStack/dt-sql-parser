DELETE FROM t;
DELETE FROM "awesome table";
DELETE FROM t WHERE a = b;
DELETE FROM lineitem
WHERE orderkey IN (SELECT orderkey FROM orders WHERE priority = 'LOW');