CREATE FUNCTION IF NOT EXISTS tempFunction AS 'SimpleUdf';

CREATE FUNCTION catalog1.db1.function1 AS 'org.apache.flink.function.function1';

CREATE TEMPORARY FUNCTION catalog1.db1.function1 AS 'org.apache.flink.function.function1';

CREATE TEMPORARY FUNCTION db1.function1 AS 'org.apache.flink.function.function1';

CREATE TEMPORARY FUNCTION function1 AS 'org.apache.flink.function.function1';

CREATE TEMPORARY FUNCTION IF NOT EXISTS catalog1.db1.function1 AS 'org.apache.flink.function.function1';

CREATE TEMPORARY FUNCTION function1 AS 'org.apache.flink.function.function1' LANGUAGE JAVA;

CREATE TEMPORARY SYSTEM FUNCTION function1 AS 'org.apache.flink.function.function1' LANGUAGE SCALA;

CREATE TEMPORARY SYSTEM FUNCTION IF NOT EXISTS function1 AS 'org.apache.flink.function.function1' LANGUAGE PYTHON;

-- test create function USING jar
CREATE TEMPORARY FUNCTION function1 AS 'org.apache.fink.function.function1' LANGUAGE JAVA USING JAR 'file:///path/to/test.jar',
JAR 'hdfs:///path/to/test2.jar';

CREATE TEMPORARY FUNCTION function1 AS 'org.apache.flink.function.function1' LANGUAGE SCALA USING JAR '/path/to/test.jar';

CREATE TEMPORARY SYSTEM FUNCTION function1 AS 'org.apache.flink.function.function1' LANGUAGE SCALA USING JAR '/path/to/test.jar';

CREATE FUNCTION function1 AS 'org.apache.flink.function.function1' LANGUAGE JAVA USING JAR 'file:///path/to/test.jar',
JAR 'hdfs:///path/to/test2.jar';