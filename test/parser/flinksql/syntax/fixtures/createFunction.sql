CREATE FUNCTION IF NOT EXISTS tempFunction AS 'SimpleUdf';

CREATE TEMPORARY FUNCTION function1 AS 'org.apache.fink.function.function1' LANGUAGE JAVA USING JAR 'file:///path/to/test.jar',
JAR 'hdfs:///path/to/test2.jar';