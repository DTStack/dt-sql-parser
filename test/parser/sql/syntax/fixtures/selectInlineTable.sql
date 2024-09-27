-- VALUES ( expression [ , ... ] ) [ table_alias ]

-- single row, without a table alias
SELECT * FROM VALUES ("one", 1);

-- three rows with a table alias
SELECT * FROM VALUES ("one", 1), ("two", 2), ("three", null) AS data(a, b);

-- complex types with a table alias
SELECT * FROM VALUES ("one", array(0, 1)), ("two", array(2, 3)) AS data(a, b);
