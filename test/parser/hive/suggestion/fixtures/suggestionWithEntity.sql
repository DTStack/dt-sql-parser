SELECT  FROM tb1

SELECT col1, col2,  FROM tb

FROM table_name_1 SELECT  ; -- TODO: request semicolon

FROM table_name_1 SELECT col1, col2,   ; -- TODO: request semicolon

FROM a JOIN b ON (a.id = b.id AND a.department = b.department) SELECT  ; -- TODO: request semicolon

FROM a JOIN b ON (a.id = b.id AND a.department = b.department) SELECT a.*,  ; -- TODO: request semicolon

FROM page_view_stg pvs INSERT OVERWRITE TABLE page_view PARTITION(dt='2008-06-08', country) SELECT  ; -- TODO: request semicolon

FROM page_view_stg pvs INSERT OVERWRITE TABLE page_view PARTITION(dt='2008-06-08', country) SELECT id,  ; -- TODO: request semicolon

INSERT INTO insert_tb PARTITION (country, state) SELECT col1, col2, country, state FROM ( SELECT  FROM inside_tb ) subquery

INSERT INTO insert_tb PARTITION (country, state) SELECT col1, col2, country, state FROM ( SELECT id,  FROM inside_tb ) subquery

CREATE TABLE IF NOT EXISTS derived_table AS SELECT  FROM origin_table

CREATE TABLE IF NOT EXISTS derived_table AS SELECT id,  FROM origin_table