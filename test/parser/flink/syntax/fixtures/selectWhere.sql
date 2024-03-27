SELECT id, age FROM table1 WHERE age IS NOT NULL;

SELECT id, age FROM table1 WHERE age IS NOT DISTINCT FROM 12;

SELECT id, age FROM table1 WHERE age BETWEEN SYMMETRIC 25 AND 18;

SELECT id, age FROM table1 WHERE age NOT LIKE "%aa_d%" ESCAPE "a";

SELECT addr FROM table1 WHERE addr NOT SIMILAR TO '%(123|yz)%' ESCAPE "y";

SELECT id, age FROM table1 WHERE age NOT IN (18,19,20);

SELECT id FROM table1 WHERE id NOT IN ( SELECT * FROM table2 );

SELECT S,SNAME
FROM S
WHERE NOT EXISTS
    (SELECT *
    FROM C
   	WHERE NOT EXISTS
        (SELECT *
        FROM SC
        WHERE SC.S=S.S AND SC.C=C.C));

SELECT id, age FROM table1 WHERE age > 18 OR id = 1;

SELECT id, age FROM table1 WHERE age > 18 AND id > 10;