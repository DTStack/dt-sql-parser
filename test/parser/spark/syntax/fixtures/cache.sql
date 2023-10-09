-- CACHE LAZY TABLE testCache1 [ OPTIONS ( 'storageLevel' [ = ] value ) ] [ [ AS ] query ]

CACHE TABLE testCache OPTIONS ('storageLevel' 'DISK_ONLY') SELECT * FROM testData;

CACHE LAZY TABLE testCache1 SELECT * FROM testData;

CACHE LAZY TABLE testCache2 AS SELECT * FROM testData;


-- CLEAR CACHE

CLEAR CACHE;


-- UNCACHE TABLE [ IF EXISTS ] table_identifier

UNCACHE TABLE t1;
