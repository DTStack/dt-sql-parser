-- Syntax
-- TRUNCATE TABLE table_identifier [ partition_spec ]

TRUNCATE TABLE Student partition(age=10);

TRUNCATE TABLE Student;
