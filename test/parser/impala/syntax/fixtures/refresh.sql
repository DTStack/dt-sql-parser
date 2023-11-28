-- REFRESH [db_name.]table_name [PARTITION (key_col1=val1 [, key_col2=val2...])]
REFRESH my_table;
REFRESH my_db.my_table;
REFRESH my_db.my_table PARTITION (age BETWEEN 100 AND 200, key_col2=val2, date = "1110-10-10");
REFRESH table_name PARTITION (key_col1=val1, key_col2=val2, date = "1110-10-10");

-- example
refresh p2 partition (y=0, z=3);
refresh p2 partition (y=0, z=-1);
