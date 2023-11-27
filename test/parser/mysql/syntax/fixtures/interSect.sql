-- https://dev.mysql.com/doc/refman/5.7/en/intersect.html

/* query_expression_body INTERSECT [ALL | DISTINCT] query_expression_body
    [INTERSECT [ALL | DISTINCT] query_expression_body]
    [...]

query_expression_body:
    See Section 13.2.14, “Set Operations with UNION, INTERSECT, and EXCEPT” */


(SELECT * FROM table_name1) INTERSECT (SELECT * FROM table_name2);
SELECT column_list FROM table_a WHERE age = 12 INTERSECT SELECT column1, COUNT(column2) FROM table_name GROUP BY column1;
