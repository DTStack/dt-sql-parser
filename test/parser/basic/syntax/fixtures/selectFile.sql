-- file_format.`file_path`

-- PARQUET file
SELECT * FROM parquet.`examples/src/main/resources/users.parquet`;

-- ORC file
SELECT * FROM orc.`examples/src/main/resources/users.orc`;

-- JSON file
SELECT * FROM json.`examples/src/main/resources/people.json`;
