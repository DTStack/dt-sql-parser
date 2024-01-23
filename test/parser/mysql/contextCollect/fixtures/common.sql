CREATE TABLE new_tb_with_col (id int, age int);

CREATE TABLE new_tb_from_old AS
    SELECT 
        old_tb1.column1, 
        old_tb2.column2
    FROM 
        old_tb1
    JOIN 
        old_tb2 ON old_tb1.id = old_tb2.id
    WHERE 
        old_tb1.column1 = 'value';


CREATE TABLE new_tb_like_old LIKE old_tb;

SELECT * FROM select_tb LIMIT 5,10; 

SELECT * INTO @my_var FROM into_select_tb;

SELECT * FROM from_tb LEFT JOIN join_tb ON (t1.a = t2.a);

INSERT INTO insert_tb (a,b,c) VALUES(1,2,3), (4,5,6), (7,8,9);

INSERT INTO insert_from_tb (a, b) SELECT c, d FROM from_tb1 UNION SELECT e, f FROM from_tb2 ON DUPLICATE KEY UPDATE b = b + c;

CREATE VIEW new_view (col1, col2) AS SELECT CURRENT_DATE;

CREATE VIEW db.new_view AS SELECT * FROM from_tb;