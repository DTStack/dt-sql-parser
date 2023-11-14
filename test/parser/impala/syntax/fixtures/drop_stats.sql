-- DROP STATS [database_name.]table_name
DROP STATS my_table;
DROP STATS my_db.my_table;

-- DROP INCREMENTAL STATS [database_name.]table_name PARTITION (partition_spec)
DROP INCREMENTAL STATS my_table PARTITION (date = "1111-11-11");
DROP INCREMENTAL STATS my_db.my_table PARTITION (year < 1995 and last_name like 'A%');

-- example
drop incremental stats item_partitioned partition (i_category='Sports');
drop incremental stats item_partitioned partition (i_category='Electronics');
drop stats item_partitioned;