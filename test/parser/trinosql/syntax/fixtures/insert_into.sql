INSERT INTO orders
SELECT * FROM new_orders;

INSERT INTO cities VALUES (1, 'San Francisco');

INSERT INTO cities VALUES (2, 'San Jose'), (3, 'Oakland');

INSERT INTO nation (nationkey, name, regionkey, comment)
VALUES (26, 'POLAND', 3, 'no comment');

INSERT INTO nation (nationkey, name, regionkey)
VALUES (26, 'POLAND', 3);