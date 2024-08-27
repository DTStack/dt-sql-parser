-- PIVOT ( { aggregate_expression [ AS aggregate_expression_alias ] } [ , ... ]
--     FOR column_list IN ( expression_list ) )

SELECT * FROM person PIVOT (SUM(age) AS a, AVG(class) AS c FOR name IN ('John' AS john, 'Mike' AS mike));

SELECT * FROM person PIVOT (SUM(age) AS a, AVG(class) AS c FOR (name, age) IN (('John', 30) AS c1, ('Mike', 40) AS c2));
