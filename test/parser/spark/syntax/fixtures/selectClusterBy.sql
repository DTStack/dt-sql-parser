
-- CLUSTER BY { expression [ , ... ] }

CREATE TABLE person (name STRING, age INT);
INSERT INTO person VALUES
    ('Zen Hui', 25),
    ('Anil B', 18),
    ('Shone S', 16),
    ('Mike A', 25),
    ('John A', 18),
    ('Jack N', 16);

-- Reduce the number of shuffle partitions to 2 to illustrate the behavior of `CLUSTER BY`.
-- It's easier to see the clustering and sorting behavior with less number of partitions.
SET spark.sql.shuffle.partitions = 2;

-- Select the rows with no ordering. Please note that without any sort directive, the results
-- of the query is not deterministic. It's included here to show the difference in behavior
-- of a query when `CLUSTER BY` is not used vs when it's used. The query below produces rows
-- where age column is not sorted.
SELECT name, age FROM person;

-- Produces rows clustered by age. Persons with same age are clustered together.
-- In the query below, persons with age 18 and 25 are in first partition and the
-- persons with age 16 are in the second partition. The rows are sorted based
-- on age within each partition.
SELECT age, name FROM person CLUSTER BY age;


SELECT COALESCE(SUM(c.amount), 0) AS total_amount FROM cust c;
SELECT SUM(c.amount) AS total_amount FROM cust c;