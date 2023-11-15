-- DESCRIBE [DATABASE] [FORMATTED|EXTENDED] object_name
DESCRIBE my_table;
DESCRIBE DATABASE my_table;
DESCRIBE DATABASE FORMATTED my_table;
DESCRIBE DATABASE EXTENDED my_table;
DESCRIBE FORMATTED my_table;
DESCRIBE EXTENDED my_table;
DESCRIBE FORMATTED my_table;
DESCRIBE EXTENDED my_db_name.my_table.my_col;
DESCRIBE FORMATTED my_db;

-- example
describe my_table;
describe my_database.my_table;
describe formatted my_table;
describe customer.c_orders.item;
describe customer.c_orders.item.o_lineitems;