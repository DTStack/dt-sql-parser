-- TABLESAMPLE ({ integer_expression | decimal_expression } PERCENT)
--     | TABLESAMPLE ( integer_expression ROWS )
--     | TABLESAMPLE ( BUCKET integer_expression OUT OF integer_expression )

SELECT * FROM test TABLESAMPLE (50 PERCENT);

SELECT * FROM test TABLESAMPLE (5 ROWS);

SELECT * FROM test TABLESAMPLE (BUCKET 4 OUT OF 10);
