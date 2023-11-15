/* UPDATE [database_name.]table_name SET col = val [, col = val ... ]
 [ FROM joined_table_refs ]
 [ WHERE where_conditions ] */
UPDATE
  my_table
SET
  col1 = 1,
  col2 = 2,
  col3 = 3;

UPDATE
  my_db.my_table
SET
  col1 = 1;

UPDATE
  my_db.my_table
SET
  col1 = 1
WHERE
  col2 = 1;

UPDATE
  my_db.my_table
SET
  col1 = 1
WHERE
  col2 = 1
  AND col3 BETWEEN 100
  AND 300;

UPDATE
  my_table
SET
  col1 = 'new_value'
FROM
  other_table
WHERE
  my_table.id = other_table.id;

UPDATE
  my_table
SET
  col1 = (
    SELECT
      MAX(col2)
    FROM
      other_table
    WHERE
      other_table.id = my_table.id
  )
WHERE
  col3 = 'value';

UPDATE
  my_table
SET
  col1 = CASE
    WHEN col2 > 10 THEN 'High'
    WHEN col2 > 5 THEN 'Medium'
    ELSE 'Low'
  END
WHERE
  col3 = 'value';

UPDATE
  my_table
SET
  col1 = (
    SELECT
      AVG(col2)
    FROM
      other_table
    WHERE
      other_table.id = my_table.id
    GROUP BY
      other_table.id
  )
WHERE
  col3 = 'value';

UPDATE
  my_table
SET
  col1 = other_table.val1
FROM
  my_table
  JOIN other_table ON my_table.id = other_table.id
WHERE
  my_table.col2 = 'value';

--example
UPDATE
  kudu_table
SET
  c3 = 'not applicable';

UPDATE
  kudu_table
SET
  c3 = NULL
WHERE
  c1 > 100
  AND c3 IS NULL;

UPDATE
  kudu_table
SET
  c3 = 'impossible'
WHERE
  1 = 0;

UPDATE
  kudu_table
SET
  c3 = upper(c3),
  c4 = FALSE,
  c5 = 0
WHERE
  c6 = TRUE;

UPDATE
  kudu_table
SET
  c3 = upper(c3)
FROM
  kudu_table
  JOIN non_kudu_table ON kudu_table.id = non_kudu_table.id;

UPDATE
  t1
SET
  c3 = upper(c3)
FROM
  kudu_table t1
  JOIN non_kudu_table t2 ON t1.id = t2.id;

UPDATE
  t1
SET
  c3 = upper(c3)
FROM
  kudu_table t1
  JOIN non_kudu_table t2 ON t1.id = t2.id
WHERE
  c3 != upper(c3);