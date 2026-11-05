-- LATERAL VIEW [ OUTER ] generator_function ( expression [ , ... ] ) [ table_alias ] AS column_alias [ , ... ]

SELECT * FROM person
    LATERAL VIEW EXPLODE(ARRAY(30, 60)) tableName AS c_age
    LATERAL VIEW EXPLODE(ARRAY(40, 80)) AS d_age;

SELECT c_age, COUNT(1) FROM person
    LATERAL VIEW EXPLODE(ARRAY(30, 60)) AS c_age
    LATERAL VIEW EXPLODE(ARRAY(40, 80)) AS d_age
GROUP BY c_age;

SELECT * FROM person LATERAL VIEW EXPLODE(ARRAY()) tableName AS c_age;

SELECT * FROM person LATERAL VIEW OUTER EXPLODE(ARRAY()) tableName AS c_age;

SELECT * FROM person LATERAL VIEW schema1.custom_explode(ARRAY(30, 60)) tableName AS c_age;

SELECT * FROM person LATERAL VIEW catalog1.schema1.custom_explode(ARRAY(30, 60)) tableName AS c_age;

SELECT * FROM person LATERAL VIEW IDENTIFIER('explode')(ARRAY(30, 60)) tableName AS c_age;

SELECT * FROM person LATERAL VIEW POSEXPLODE(ARRAY(30, 60)) tableName AS pos, c_age;

SELECT * FROM person LATERAL VIEW OUTER POSEXPLODE(ARRAY(30, 60)) tableName pos, c_age;

SELECT * FROM person LATERAL VIEW EXPLODE(ARRAY(30, 60)) tableName;

SELECT * FROM person LATERAL VIEW EXPLODE(ARRAY(30, 60));

FROM person SELECT * LATERAL VIEW EXPLODE(ARRAY(30, 60)) tableName AS c_age;

SELECT c_age LATERAL VIEW EXPLODE(ARRAY(30, 60)) tableName AS c_age;
