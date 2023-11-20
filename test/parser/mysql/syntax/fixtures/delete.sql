-- https://dev.mysql.com/doc/refman/8.0/en/delete.html

/* DELETE [LOW_PRIORITY] [QUICK] [IGNORE] FROM tbl_name [[AS] tbl_alias]
    [PARTITION (partition_name [, partition_name] ...)]
    [WHERE where_condition]
    [ORDER BY ...]
    [LIMIT row_count]

DELETE [LOW_PRIORITY] [QUICK] [IGNORE]
    tbl_name[.*] [, tbl_name[.*]] ...
    FROM table_references
    [WHERE where_condition]

DELETE [LOW_PRIORITY] [QUICK] [IGNORE]
    FROM tbl_name[.*] [, tbl_name[.*]] ...
    USING table_references
    [WHERE where_condition] */



DELETE LOW_PRIORITY QUICK IGNORE FROM some_log AS someLog PARTITION (partition_name, partition_name1)  WHERE user = 'cole' ORDER BY timestamp_column LIMIT 1;
DELETE LOW_PRIORITY IGNORE FROM some_log AS someLog PARTITION (partition_name, partition_name1)  WHERE user = 'cole' ORDER BY timestamp_column LIMIT 1;
DELETE LOW_PRIORITY QUICK FROM some_log AS someLog PARTITION (partition_name, partition_name1)  WHERE user = 'cole' ORDER BY timestamp_column LIMIT 1;
DELETE QUICK IGNORE FROM some_log AS someLog PARTITION (partition_name, partition_name1)  WHERE user = 'cole' ORDER BY timestamp_column LIMIT 1;
DELETE LOW_PRIORITY FROM some_log AS someLog PARTITION (partition_name)  WHERE user = 'cole' ORDER BY timestamp_column LIMIT 1;
DELETE QUICK FROM some_log AS someLog WHERE user = 'cole' ORDER BY timestamp_column LIMIT 1;
DELETE IGNORE FROM some_log AS someLog PARTITION (partition_name)  WHERE user = 'cole' ORDER BY timestamp_column LIMIT 1;
DELETE FROM some_log AS someLog PARTITION (partition_name)  WHERE user = 'cole' ORDER BY timestamp_column LIMIT 1;

DELETE FROM tbl_name;

DELETE t1, t2 FROM t1 INNER JOIN t2 INNER JOIN t3 WHERE t1.id=t2.id AND t2.id=t3.id;

DELETE FROM t1, t2 USING t1 INNER JOIN t2 INNER JOIN t3 WHERE t1.id=t2.id AND t2.id=t3.id;

DELETE t1 FROM t1 LEFT JOIN t2 ON t1.id=t2.id WHERE t2.id IS NULL;

DELETE a1, a2 FROM t1 AS a1 INNER JOIN t2 AS a2 WHERE a1.id=a2.id;
DELETE FROM a1, a2 USING t1 AS a1 INNER JOIN t2 AS a2 WHERE a1.id=a2.id;

DELETE t1, t2 FROM t1 INNER JOIN t2 WHERE a1.id=a2.id;
DELETE FROM t1, t2 USING t1 INNER JOIN t2 WHERE a1.id=a2.id;

DELETE FROM some_log WHERE user = 'cole'
