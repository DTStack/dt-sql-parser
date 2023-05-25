-- EXISTS
SELECT name
FROM nation
WHERE EXISTS (
     SELECT *
     FROM region
     WHERE region.regionkey = nation.regionkey
);
-- IN
SELECT name
FROM nation
WHERE regionkey IN (
     SELECT regionkey
     FROM region
     WHERE name = 'AMERICA' OR name = 'AFRICA'
);
-- Scalar subquery
SELECT name
FROM nation
WHERE regionkey = (SELECT max(regionkey) FROM region);