CREATE TABLE new_tb AS
    SELECT 
        old_tb1.column1, 
        old_tb2.column2
    FROM 
        old_tb1
    JOIN 
        old_tb2 ON old_tb1.id = old_tb2.id
    WHERE 
        old_tb1.column1 = 'value'