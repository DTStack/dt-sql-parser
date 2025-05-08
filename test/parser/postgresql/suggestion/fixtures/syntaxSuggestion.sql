CREATE TABLE db.s (column_name int) PARTITION BY LIST (column_name);

INSERT INTO db.tb ;

SELECT * FROM db. ;

ALTER TABLE db ALTER column_name DROP NOT NULL;

CREATE OR REPLACE VIEW db.v;

ALTER VIEW db.v ;

DROP VIEW db. ;

CREATE FUNCTION fn1;

DROP FUNCTION fn1;

CREATE DATABASE db;

DROP DATABASE db ;

ALTER DATABASE db ;

CREATE SCHEMA IF NOT EXISTS schema_name;

DROP SCHEMA IF EXISTS sch;

ALTER SCHEMA name RENAME TO new_name;

ALTER FOREIGN TABLE table_name RENAME column_name TO new_column_name;

ALTER MATERIALIZED VIEW view_name RENAME COLUMN column_name TO new_column_name;

ALTER MATERIALIZED VIEW view_name ALTER column_name SET STATISTICS 45;

ALTER PUBLICATION name ADD TABLE table_name ( column_name);

ALTER SEQUENCE name OWNED BY table_name.column_name;

ALTER TABLE db RENAME column_name TO new_column_name;

ANALYZE table_name (column_name);

COMMENT ON COLUMN relation_name.column_name IS NULL;

COPY table_name (col_name, col_name2) FROM 'filename' WITH (FORCE_QUOTE (clumn_name));

CREATE FOREIGN TABLE table_name (column_name int) SERVER server_name;

CREATE FUNCTION name (int) RETURNS TABLE (column_name column_type) LANGUAGE lang_name;

CREATE INDEX ON table_name (column_name) INCLUDE (col_name1, col_name2);

CREATE MATERIALIZED VIEW table_name (col_name);

CREATE STATISTICS ON column_name FROM table_name;

CREATE TRIGGER name AFTER UPDATE OF column_name ON table_name EXECUTE FUNCTION function_name;

GRANT SELECT ( column_name) ON table_name TO role_specification;

INSERT INTO table_name (column_name) DEFAULT VALUES ON CONFLICT (index_column_name) DO UPDATE SET column_name_exp = DEFAULT; 

MERGE INTO wines w USING wine_stock_changes s ON s.winename = w.winename WHEN NOT MATCHED AND stock_delta > 0 THEN INSERT (col_name) VALUES(s.winename, s.stock_delta);

REVOKE SELECT (co_name) ON table_name FROM PUBLIC;

SECURITY LABEL ON COLUMN tablename.columnname IS string_literal;

WITH with_query_name (col_name) AS (SELECT id FROM table_expression) SEARCH DEPTH FIRST BY column_name SET column_name CYCLE col_name SET col_name USING col_name SELECT;

UPDATE tablename SET columnname = a + b, (col1, col2) = (a+3, b+4);

VACUUM tablename (col1, col2);

SELECT * FROM db.tbs GROUP BY (col1, col2) ORDER BY col3;

TRUNCATE TABLE ;

TRUNCATE TABLE t1;

SELECT * FROM db.tbs GROUP BY sum(length(col1+col2)) ORDER BY length(sum(col1/clo2));

VALUES (1, '3'), (3, 'sdsd') ORDER BY sort_expression ASC LIMIT id = 1;

CREATE OR REPLACE RULE name AS ON SELECT TO table_name WHERE length(y+x) = 3 DO INSTEAD NOTHING;

WITH query_name (id) AS (SELECT id FROM table_expression) SELECT DISTINCT ON (col1) random() AS name1 FROM table_expression WHERE name1=name1 GROUP BY id  HAVING sum(len+y) < interval '5 hours' WINDOW  w AS (PARTITION BY depname ORDER BY salary DESC) EXCEPT (SELECT * FROM others) ORDER BY salary USING > NULLS FIRST OFFSET start FETCH NEXT ROW ONLY FOR KEY SHARE OF table_name NOWAIT;

CREATE CONSTRAINT TRIGGER trig_name INSTEAD OF INSERT OR UPDATE ON table_name FROM referenced_table_name WHEN (OLD.balance IS DISTINCT FROM NEW.balance) EXECUTE PROCEDURE function_name ();
