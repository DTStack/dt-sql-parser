CREATE TABLE  VALUES -- unfinished

CREATE UNLOGGED TABLE table1 (col1 int) INHERITS (table_parent) WITHOUT OIDS ON COMMIT DROP;

CREATE SCHEMA schemaname AUTHORIZATION username;

ALTER TABLE products ADD FOREIGN KEY (product_group_id) REFERENCES product_groups;

SELECT * FROM db. ; -- unfinished

INSERT INTO weather (date, city, temp_hi, temp_lo) VALUES ('1994-11-29', 'Hayward', 54, 37);

ANALYZE VERBOSE table_name ( column_name, column_name2);

INSERT INTO  weather (date, city, temp_hi, temp_lo) VALUES ('1994-11-29', 'Hayward', 54, 37); -- unfinished

DROP TABLE products CASCADE;

DROP AGGREGATE aggname2(int);

INSERT INTO products (product_no, name, price) SELECT * FROM db. ; -- unfinished