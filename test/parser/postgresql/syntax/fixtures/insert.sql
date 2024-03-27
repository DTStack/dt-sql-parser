-- Inserting Data
INSERT INTO weather VALUES ('San Francisco', 46, 50, 0.25, '1994-11-27');

INSERT INTO weather (city, temp_lo, temp_hi, prcp, date)
    VALUES ('San Francisco', 43, 57, 0.0, '1994-11-29');

INSERT INTO weather (date, city, temp_hi, temp_lo)
    VALUES ('1994-11-29', 'Hayward', 54, 37);

INSERT INTO products (product_no, name, price)
  SELECT product_no, name, price FROM new_products
    WHERE release_date = 'today';

INSERT INTO products DEFAULT VALUES;

INSERT INTO cities (name, population, altitude, state)
VALUES ('New York', NULL, NULL, 'NY');

-- Boolean Type
INSERT INTO test1 VALUES (FALSE, TRUE, 'non est', 't', 'true', 'y', 'on', '1', 'f', 'false', 'n', 'no', 'off', 0);

-- Arrays -- . Array Value Input
INSERT INTO sal_emp
    VALUES ('Bill',
    '{10000, 10000, 10000, 10000}',
    '{{"meeting", "lunch"}, {"training", "presentation"}}');

-- Range Types
INSERT INTO reservation VALUES
    (1108, '[2010-01-01 14:30, 2010-01-01 15:30)');

-- INSERT
WITH RECURSIVE a AS (SELECT * from bt )
INSERT INTO table_name.dt ( column_name, column_name2)
    VALUES (1, 2)
    RETURNING * ;
INSERT INTO films DEFAULT VALUES;