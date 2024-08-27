-- CASE [ expression ] { WHEN boolean_expression THEN then_expression } [ ... ]
--     [ ELSE else_expression ]
-- END


SELECT id, CASE WHEN id > 200 THEN 'bigger' ELSE 'small' END FROM person;

SELECT id, CASE id WHEN 100 then 'bigger' WHEN  id > 300 THEN '300' ELSE 'small' END FROM person;

SELECT * FROM person WHERE CASE 1 = 1 WHEN 100 THEN 'big' WHEN 200 THEN 'bigger' WHEN 300 THEN 'biggest' ELSE 'small' END = 'small';
