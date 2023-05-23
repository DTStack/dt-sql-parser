SELECT * FROM users CROSS JOIN UNNEST(friends) WITH ordinality;
-- LATERAL
SELECT name, x, y
FROM nation
CROSS JOIN LATERAL (SELECT name || ' :-' AS x)
CROSS JOIN LATERAL (SELECT x || ')' AS y);

-- Qualifying column names#

SELECT nation.name, region.name
FROM nation
CROSS JOIN region;

SELECT n.name, r.name
FROM nation AS n
CROSS JOIN region AS r;

SELECT n.name, r.name
FROM nation n
CROSS JOIN region r;