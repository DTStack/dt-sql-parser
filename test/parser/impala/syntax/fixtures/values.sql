-- VALUES (row)[, (row), ...];
VALUES ('r1_c1', 'r1_c2', 'r1_c3');
VALUES ('r1_c1', 'r1_c2', 'r1_c3'), ('r1_c1', 'r1_c2', 'r1_c3');
VALUES ('r1_c1', 'r1_c2', 'r1_c3'), ('r1_c1', 'r1_c2', 'r1_c3'), ('r1_c1', 'r1_c2', 'r1_c3');
VALUES ('r1_c1' as 'hi', 'r1_c2', 'r1_c3'), ('r1_c1', 'r1_c2', 'r1_c3' as 'hi');

-- example
VALUES(4,5,6),(7,8,9);
VALUES(1 AS c1, true AS c2, 'abc' AS c3), (100,false,'xyz');
VALUES (CAST('2019-01-01' AS TIMESTAMP)), ('2019-02-02');