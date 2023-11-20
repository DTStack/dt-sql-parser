-- https://dev.mysql.com/doc/refman/8.0/en/set-resource-group.html

/* SET RESOURCE GROUP group_name
    [FOR thread_id [, thread_id] ...] */


SET RESOURCE GROUP rg1;
SET RESOURCE GROUP rg2 FOR 14, 78, 4;
SET RESOURCE GROUP rg2 FOR 14;
