ALTER FUNCTION tempFunction AS 'SimpleUdf';

alter temporary function function1 as 'org.apache.flink.function.function1';

alter temporary function function1 as 'org.apache.flink.function.function1' language scala;

alter temporary system function function1 as 'org.apache.flink.function.function1';

alter temporary system function function1 as 'org.apache.flink.function.function1' language java;

ALTER TEMPORARY SYSTEM FUNCTION IF EXISTS tempFunction AS 'SimpleUdf';

ALTER TEMPORARY FUNCTION IF EXISTS tempFunction AS 'SimpleUdf';

ALTER FUNCTION myudf AS 'com.example.MyUdf' LANGUAGE PYTHON;