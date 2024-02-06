SELECT * FROM UNNEST(ARRAY[1,2]) AS t(number);

SELECT * FROM UNNEST(
        map_from_entries(
            ARRAY[
                ('SQL',1974),
                ('Java', 1995)
            ]
        )
) AS t(language, first_appeared_year);

SELECT *
FROM UNNEST(
        ARRAY[
            ROW('Java',  1995),
            ROW('SQL' , 1974)],
        ARRAY[
            ROW(false),
            ROW(true)]
) as t(language,first_appeared_year,declarative);

SELECT a, b, rownumber
FROM UNNEST (
    ARRAY[2, 5],
    ARRAY[7, 8, 9]
     ) WITH ORDINALITY AS t(a, b, rownumber);

SELECT * FROM UNNEST (ARRAY[]) AS t(value);

SELECT * FROM UNNEST (CAST(null AS ARRAY(integer))) AS t(number);

SELECT student, score
FROM (
   VALUES
      ('John', ARRAY[7, 10, 9]),
      ('Mary', ARRAY[4, 8, 9])
) AS tests (student, scores)
CROSS JOIN UNNEST(scores) AS t(score);

SELECT numbers, animals, n, a
FROM (
  VALUES
    (ARRAY[2, 5], ARRAY['dog', 'cat', 'bird']),
    (ARRAY[7, 8, 9], ARRAY['cow', 'pig'])
) AS x (numbers, animals)
CROSS JOIN UNNEST(numbers, animals) AS t (n, a);

SELECT runner, checkpoint
FROM (
   VALUES
      ('Joe', ARRAY[10, 20, 30, 42]),
      ('Roger', ARRAY[10]),
      ('Dave', ARRAY[]),
      ('Levi', NULL)
) AS marathon (runner, checkpoints)
LEFT JOIN UNNEST(checkpoints) AS t(checkpoint) ON TRUE;
