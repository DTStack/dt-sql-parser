CREATE VIEW v AS
SELECT
    col1
FROM
    tbl;

CREATE TEMPORARY VIEW v AS
SELECT
    col1
FROM
    tbl;

CREATE VIEW v COMMENT 'this is a view' AS
SELECT
    col1
FROM
    tbl;

CREATE VIEW v(col1, col2) AS
SELECT
    col3,
    col4
FROM
    tbl;

CREATE VIEW v(col1, col2) COMMENT 'this is a view' AS
SELECT
    col3,
    col4
FROM
    tbl;

CREATE TEMPORARY VIEW IF NOT EXISTS v AS
SELECT
    col1
FROM
    tbl;