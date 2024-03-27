ALTER FUNCTION tempFunction AS 'SimpleUdf';

ALTER temporary FUNCTION function1 AS 'org.apache.flink.function.function1';

ALTER temporary FUNCTION function1 AS 'org.apache.flink.function.function1' LANGUAGE scala;

ALTER temporary SYSTEM FUNCTION function1 AS 'org.apache.flink.function.function1';

ALTER temporary SYSTEM FUNCTION function1 AS 'org.apache.flink.function.function1' LANGUAGE java;

ALTER TEMPORARY SYSTEM FUNCTION IF EXISTS tempFunction AS 'SimpleUdf';

ALTER TEMPORARY FUNCTION IF EXISTS tempFunction AS 'SimpleUdf';

ALTER FUNCTION myudf AS 'com.example.MyUdf' LANGUAGE PYTHON;