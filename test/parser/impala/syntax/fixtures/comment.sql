-- COMMENT ON DATABASE db_name IS {'comment' | NULL}
COMMENT ON DATABASE my_database IS 'This is my database.';
COMMENT ON DATABASE my_database IS NULL;

-- COMMENT ON TABLE [db_name.]table_name IS {'comment' | NULL}
COMMENT ON TABLE my_database.my_table IS 'This is my table.';
COMMENT ON TABLE my_database.my_table IS NULL;
COMMENT ON TABLE my_table IS 'This is my table.';
COMMENT ON TABLE my_table IS NULL;

-- COMMENT ON COLUMN [db_name.]table_name.column_name IS {'comment' | NULL}
COMMENT ON TABLE my_database.my_table.age IS 'save for age.';
COMMENT ON TABLE my_database.my_table.age IS NULL;
COMMENT ON TABLE my_table.age IS 'This is my table.';
COMMENT ON TABLE my_table.age IS NULL;