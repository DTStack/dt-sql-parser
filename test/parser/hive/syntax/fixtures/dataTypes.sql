--   TINYINT
--   | SMALLINT
--   | INT
--   | BIGINT
--   | BOOLEAN
--   | FLOAT
--   | DOUBLE
--   | DOUBLE PRECISION -- (Note: Available in Hive 2.2.0 and later)
--   | STRING
--   | BINARY      -- (Note: Available in Hive 0.8.0 and later)
--   | TIMESTAMP   -- (Note: Available in Hive 0.8.0 and later)
--   | DECIMAL     -- (Note: Available in Hive 0.11.0 and later)
--   | DECIMAL(precision, scale)  -- (Note: Available in Hive 0.13.0 and later)
--   | DATE        -- (Note: Available in Hive 0.12.0 and later)
--   | VARCHAR     -- (Note: Available in Hive 0.12.0 and later)
--   | CHAR        -- (Note: Available in Hive 0.13.0 and later)
--   | ARRAY<data_type> (Note: negative values and non-constant expressions are allowed as of Hive 0.14.)
--   | MAP<primitive_type, data_type> (Note: negative values and non-constant expressions are allowed as of Hive 0.14.)
--   | STRUCT<col_name : data_type [COMMENT col_comment], ...>
--   | UNIONTYPE<data_type, data_type, ...> (Note: Only available starting with Hive 0.7.0.)
CREATE TABLE test_table (
    viewTime INT,
    userid BIGINT,
    page_url STRING,
    age TINYINT,
    instance FLOAT,
    isAduit BOOLEAN,
    score DOUBLE,
    aver DOUBLE PRECISION,
    somename BINARY,
    someid DECIMAL,
    birth TIMESTAMP,
    schooldt DATE,
    someint SMALLINT,
    colvarchar VARCHAR(1),
    colchar CHAR(2),
    coldecil DECIMAL(3,4),
    list ARRAY <STRING>,
    realmap MAP <STRING, DATE>,
    realstruct STRUCT<col_name: STRING>,
    collast UNIONTYPE <DOUBLE, STRING>
);

-- INTERVAL
UPDATE tablenames SET birthdt=INTERVAL '1-2' YEAR TO MONTH;