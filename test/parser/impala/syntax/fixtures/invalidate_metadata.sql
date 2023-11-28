-- INVALIDATE METADATA [[db_name.]table_name]
INVALIDATE METADATA new_table_from_hive;
INVALIDATE METADATA new_db_from_hive.new_table_from_hive;

-- example
INVALIDATE METADATA new_db_from_hive.new_table_from_hive;