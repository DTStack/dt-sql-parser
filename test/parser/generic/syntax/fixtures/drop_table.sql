-- Basic DROP TABLE
DROP TABLE users;
DROP TABLE orders;
-- IF EXISTS
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS orders;
-- Qualified names
DROP TABLE schema.table_name;
DROP TABLE catalog.schema.table_name;
DROP TABLE IF EXISTS schema.table_name;
DROP TABLE IF EXISTS catalog.schema.table_name;
-- Various table names
DROP TABLE users;
DROP TABLE orders;
DROP TABLE products;
DROP TABLE order_items;
DROP TABLE user_sessions;
-- IF EXISTS with various names
DROP TABLE IF EXISTS temp_table;
DROP TABLE IF EXISTS backup_users;
DROP TABLE IF EXISTS old_orders;
-- Qualified names with various schemas
DROP TABLE public.users;
DROP TABLE sales.orders;
DROP TABLE inventory.products;
DROP TABLE IF EXISTS public.users;
DROP TABLE IF EXISTS sales.orders;
DROP TABLE IF EXISTS inventory.products;
-- Three-part names
DROP TABLE catalog.public.users;
DROP TABLE catalog.sales.orders;
DROP TABLE IF EXISTS catalog.public.users;
DROP TABLE IF EXISTS catalog.sales.orders;
