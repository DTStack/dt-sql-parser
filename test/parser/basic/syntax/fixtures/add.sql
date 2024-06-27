
-- ADD { FILE | FILES } resource_name [ ... ]

ADD FILE /tmp/test;

ADD FILE "/path/to/file/abc.txt";

ADD FILE '/another/test.txt';

ADD FILE "/path with space/abc.txt";

ADD FILE "/path/to/some/directory";

ADD FILES "/path with space/cde.txt" '/path with space/fgh.txt';

-- ADD { JAR | JARS } file_name [ ... ]

ADD JAR /tmp/test.jar;

ADD JAR "/path/to/some.jar";

ADD JAR '/some/other.jar';

ADD JAR "/path with space/abc.jar";

ADD JARS "/path with space/def.jar" '/path with space/ghi.jar';

ADD JAR "ivy://group:module:version";

ADD JAR "ivy://group:module:version?transitive=false"

ADD JAR "ivy://group:module:version?transitive=true"

ADD JAR "ivy://group:module:version?exclude=group:module&transitive=true"
