DELETE FROM weather WHERE city = 'Hayward';

DELETE FROM products
  WHERE obsoletion_date = 'today'
  RETURNING ab AS abc_name;

WITH RECURSIVE a AS (SELECT * from bt )
DELETE FROM ONLY table_name * AS alias
USING using_list 
WHERE y > 4
RETURNING *;
