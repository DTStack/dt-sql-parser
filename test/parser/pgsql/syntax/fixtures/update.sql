UPDATE MY_TABLE SET A = 5;

UPDATE weather
    SET temp_hi = temp_hi - 2,  temp_lo = temp_lo - 2
    WHERE date > '1994-11-28';

-- Transactions
UPDATE accounts SET balance = balance - 100.00
    WHERE name = 'Alice';
UPDATE branches SET balance = balance - 100.00
    WHERE name = (SELECT branch_name FROM accounts WHERE name = 'Alice');
UPDATE accounts SET balance = balance + 100.00
    WHERE name = 'Bob';
UPDATE branches SET balance = balance + 100.00
    WHERE name = (SELECT branch_name FROM accounts WHERE name = 'Bob');

UPDATE accounts SET balance = balance - 100.00
    WHERE name = 'Alice';

UPDATE mytable SET a = 5, b = b * 3, c = c + 1 WHERE a > 0;

-- Arrays -- Modifying Arrays
UPDATE sal_emp SET pay_by_quarter = ARRAY[25000,25000,27000,27000]
    WHERE name = 'Carol';

UPDATE sal_emp SET pay_by_quarter[1:2] = '{27000,27000}'
    WHERE name = 'Carol';

-- 

-- UPDATE
WITH RECURSIVE query_name (id) AS (SELECT id FROM table_expression)
UPDATE ONLY table_name * AS alias
    SET column_name = DEFAULT, (column_name, column_nam2) = ( a+1,DEFAULT)
    FROM from_list
    WHERE a=b
    RETURNING * AS output_name;
UPDATE table_name SET column_name = a + 3;
