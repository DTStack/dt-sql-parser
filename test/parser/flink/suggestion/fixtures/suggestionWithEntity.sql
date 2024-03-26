SELECT  FROM tb1;

SELECT col1, col2,  FROM tb;

INSERT INTO insert_tb PARTITION (country, state) SELECT col1, col2, country, state FROM ( SELECT  FROM inside_tb ) subquery;

INSERT INTO insert_tb PARTITION (country, state) SELECT col1, col2, country, state FROM ( SELECT id,  FROM inside_tb ) subquery;

CREATE TABLE IF NOT EXISTS derived_table WITH ('connector' = 'kafka')  AS SELECT  FROM origin_table;

CREATE TABLE IF NOT EXISTS derived_table WITH ('connector' = 'kafka')  AS SELECT id,  FROM origin_table;