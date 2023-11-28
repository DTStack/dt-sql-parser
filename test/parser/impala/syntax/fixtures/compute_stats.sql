-- COMPUTE STATS [db_name.]table_name  [ ( column_list ) ] [TABLESAMPLE SYSTEM(percentage) [REPEATABLE(seed)]]
COMPUTE STATS my_table;
COMPUTE STATS my_table (column1, column2);
COMPUTE STATS my_table TABLESAMPLE SYSTEM(20);
COMPUTE STATS my_table (column1, column2) TABLESAMPLE SYSTEM(2) REPEATABLE(456);
COMPUTE STATS my_table TABLESAMPLE SYSTEM(2) REPEATABLE(456);


-- COMPUTE INCREMENTAL STATS [db_name.]table_name [PARTITION (partition_spec)]
COMPUTE INCREMENTAL STATS my_table;
COMPUTE INCREMENTAL STATS my_table PARTITION (date='2023-11-14');

-- example
compute stats t1;
compute incremental stats int_partitions partition (x < 100);
compute incremental stats int_partitions partition (x in (100, 150, 200));
compute incremental stats int_partitions partition (x between 100 and 175);
compute incremental stats int_partitions partition (x in (100, 150, 200) or x < 100);
compute incremental stats int_partitions partition (x != 150);
compute incremental stats item_partitioned;