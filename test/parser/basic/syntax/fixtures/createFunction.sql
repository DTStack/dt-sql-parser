-- Syntax
-- CREATE [ OR REPLACE ] [ TEMPORARY ] FUNCTION [ IF NOT EXISTS ] function_name AS class_name [ resource_locations ]

CREATE OR REPLACE TEMPORARY FUNCTION IF NOT EXISTS simple_udf AS 'SimpleUdfR' USING JAR '/tmp/SimpleUdfR.jar';
CREATE OR REPLACE TEMPORARY FUNCTION IF NOT EXISTS simple_udf AS 'SimpleUdfR';

CREATE OR REPLACE FUNCTION IF NOT EXISTS simple_udf AS 'SimpleUdfR';
CREATE TEMPORARY FUNCTION IF NOT EXISTS simple_udf AS 'SimpleUdfR';
CREATE FUNCTION IF NOT EXISTS simple_udf AS 'SimpleUdfR';

CREATE OR REPLACE FUNCTION simple_udf AS 'SimpleUdfR';
CREATE TEMPORARY FUNCTION simple_udf AS 'SimpleUdfR';
CREATE FUNCTION simple_udf AS 'SimpleUdfR';


CREATE FUNCTION simple_udf AS 'SimpleUdf' USING JAR '/tmp/SimpleUdf.jar';

CREATE TEMPORARY FUNCTION simple_temp_udf AS 'SimpleUdf' USING JAR '/tmp/SimpleUdf.jar';

