CREATE DATABASE db1 WITH ('key1' = 'value1', 'key2.a' = 'value2.a');

CREATE DATABASE IF NOT EXISTS db1 WITH ('key1' = 'value1', 'key2.a' = 'value2.a');

CREATE DATABASE catalog1.db1 WITH ('key1' = 'value1', 'key2.a' = 'value2.a');

CREATE DATABASE db1 COMMENT 'test create database' WITH ('key1' = 'value1', 'key2.a' = 'value2.a');

CREATE DATABASE IF NOT EXISTS dataApi COMMENT 'test create database' WITH ('key1' = 'value1', 'key2.a' = 'value2.a');