-- Syntax
-- CREATE TABLE [IF NOT EXISTS] table_identifier LIKE source_table_identifier
--     USING data_source
--     [ ROW FORMAT row_format ]
--     [ STORED AS file_format ]
--     [ TBLPROPERTIES ( key1=val1, key2=val2, ... ) ]
--     [ LOCATION path ]


-- Create table using an existing table
CREATE TABLE Student_Duple like Student;
CREATE TABLE IF NOT EXISTS Student_Duple like Student;

-- Create table like using a data source
CREATE TABLE Student_Duple like Student USING CSV;

-- Table is created as external table at the location specified
CREATE TABLE Student_Duple like Student location '/root1/home';

-- Create table like using a rowformat
CREATE TABLE Student_Duple like Student
    ROW FORMAT DELIMITED FIELDS TERMINATED BY ','
    STORED AS TEXTFILE
    TBLPROPERTIES ('owner'='xxxx');
