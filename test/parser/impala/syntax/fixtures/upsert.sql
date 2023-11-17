/* UPSERT [hint_clause] INTO [TABLE] [db_name.]table_name
 [(column_list)]
 {
 [hint_clause] select_statement
 | VALUES (value [, value ...]) [, (value [, value ...]) ...]
 } */
UPSERT INTO my_table
SELECT
    id,
    'new_value1',
    'new_value2'
FROM
    other_table
WHERE
    condition;

UPSERT -- +NOSHUFFLE -- +CLUSTERED
INTO my_table
/* +NOSHUFFLE */
SELECT
    id,
    'new_value1',
    'new_value2'
FROM
    other_table
WHERE
    condition;

UPSERT INTO my_table -- +SHUFFLE
SELECT
    id,
    'new_value1',
    'new_value2'
FROM
    other_table
WHERE
    condition;

UPSERT INTO my_table (id, col1, col2)
SELECT
    id,
    'new_value1',
    'new_value2'
FROM
    other_table
WHERE
    condition;

UPSERT INTO TABLE my_db.my_table (id, col1, col2)
SELECT
    id,
    'new_value1',
    'new_value2'
FROM
    other_table
WHERE
    condition;

UPSERT INTO my_table (id, col1, col2)
VALUES
    (1, 'new_value1', 'new_value2'),
    (2, 'new_value3', 'new_value4');

UPSERT -- +NOSHUFFLE -- +CLUSTERED
INTO my_db.my_table
VALUES
    (1, 'new_value1', 'new_value2'),
    (2, 'new_value3', 'new_value4');

-- --TODO: [NOSHUFFLE] 匹配失败
--  UPSERT INTO my_table [NOSHUFFLE]
--  SELECT
--  id,
--  'new_value1',
--  'new_value2'
--  FROM
--  other_table
--  WHERE
--  condition;

-- example
UPSERT INTO kudu_table (pk, c1, c2, c3)
VALUES
    (0, 'hello', 50, true),
    (1, 'world', -1, false);

UPSERT INTO production_table
SELECT
    *
FROM
    staging_table;

UPSERT INTO production_table
SELECT
    *
FROM
    staging_table
WHERE
    c1 IS NOT NULL
    AND c2 > 0;