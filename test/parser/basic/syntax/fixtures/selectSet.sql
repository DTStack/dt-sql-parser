-- [ ( ] relation [ ) ] EXCEPT | MINUS [ ALL | DISTINCT ] [ ( ] relation [ ) ]

-- Use number1 and number2 tables to demonstrate set operators in this page.
SELECT * FROM number1;

SELECT * FROM number2;

SELECT c FROM number1 EXCEPT SELECT c FROM number2;

SELECT c FROM number1 MINUS SELECT c FROM number2;

SELECT c FROM number1 EXCEPT ALL (SELECT c FROM number2);

SELECT c FROM number1 MINUS ALL (SELECT c FROM number2);

-- [ ( ] relation [ ) ] INTERSECT [ ALL | DISTINCT ] [ ( ] relation [ ) ]

(SELECT c FROM number1) INTERSECT (SELECT c FROM number2);

(SELECT c FROM number1) INTERSECT DISTINCT (SELECT c FROM number2);

(SELECT c FROM number1) INTERSECT ALL (SELECT c FROM number2);


-- [ ( ] relation [ ) ] UNION [ ALL | DISTINCT ] [ ( ] relation [ ) ]

(SELECT c FROM number1) UNION (SELECT c FROM number2);

(SELECT c FROM number1) UNION DISTINCT (SELECT c FROM number2);

SELECT c FROM number1 UNION ALL (SELECT c FROM number2);
