-- [ LATERAL ] primary_relation [ join_relation ]

SELECT * FROM t1,
  LATERAL (SELECT * FROM t2 WHERE t1.c1 = t2.c1);

SELECT a, b, c FROM t1,
  LATERAL (SELECT c1 + c2 AS a),
  LATERAL (SELECT c1 - c2 AS b),
  LATERAL (SELECT a * b AS c);
