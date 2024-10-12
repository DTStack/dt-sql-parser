SELECT  FROM tab;

SELECT name, calculate_age(birthdate) AS age,  FROM students;

INSERT INTO insert_tb SELECT  FROM from_tb;

INSERT INTO insert_tb SELECT id,  FROM from_tb;

CREATE TABLE sorted_census_data AS SELECT  FROM unsorted_census_data;

CREATE TABLE sorted_census_data AS SELECT id,  FROM unsorted_census_data;

SELECT t1.c1, t2.c2 FROM t1, t2 WHERE t1.id = t2.id AND t1.type_flag = t2.type_flag AND t1.c1 > 100;

SELECT * FROM t1 LEFT OUTER JOIN t2 ON t1.int_col < t2.int_col;

SELECT user_id AS "Top 10 Visitors", SUM(page_views) FROM web_stats GROUP BY page_views, user_id having times_purchased >= 100 ORDER BY SUM(page_views) DESC LIMIT 10;

UPDATE my_table SET col1 = CASE WHEN col2 > 10 THEN 'High' WHEN col2 > 5 THEN 'Medium' ELSE 'Low' END WHERE col3 = 'value';

create table million_rows_one_range (id string primary key, s string) partition by hash(id) partitions 50, range (partition 'a' <= values < '{') stored as kudu;