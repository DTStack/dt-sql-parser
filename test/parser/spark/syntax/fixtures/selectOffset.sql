-- OFFSET integer_expression

-- Skip the first two rows.
SELECT name, age FROM person ORDER BY name OFFSET 2;

-- Skip the first two rows and returns the next three rows.
SELECT name, age FROM person ORDER BY name LIMIT 3 OFFSET 2;

-- A function expression as an input to OFFSET.
SELECT name, age FROM person ORDER BY name OFFSET length('SPARK');

-- A non-foldable expression as an input to OFFSET is not allowed.
SELECT name, age FROM person ORDER BY name OFFSET length(name);
