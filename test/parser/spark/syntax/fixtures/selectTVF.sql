-- range call with end
SELECT * FROM range(6 + cos(3));

-- range call with start and end
SELECT * FROM range(5, 10);

-- range call with numPartitions
SELECT * FROM range(0, 10, 2, 200);

-- range call with a table alias
SELECT * FROM range(5, 8) AS test;

SELECT explode(array(10, 20));

SELECT inline(array(struct(1, 'a'), struct(2, 'b')));

SELECT posexplode(array(10,20));

SELECT stack(2, 1, 2, 3);

SELECT json_tuple('{"a":1, "b":2}', 'a', 'b');

SELECT parse_url('http://spark.apache.org/path?query=1', 'HOST');

SELECT * FROM test LATERAL VIEW explode (ARRAY(3,4)) AS c2;
