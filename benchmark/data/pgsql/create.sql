CREATE GLOBAL TEMPORARY TABLE IF NOT EXISTS table1 (col1 int COLLATE collation1 CONSTRAINT constraint_name NOT NULL DEFERRABLE) INHERITS (table_parent) WITH (storage_parameter = 1) ON COMMIT PRESERVE ROWS TABLESPACE tablespace_name;

CREATE LOCAL TEMP TABLE table1 (col1 int CONSTRAINT constraint_name NULL NOT DEFERRABLE, col2 text CHECK (age > 5) NOT DEFERRABLE INITIALLY DEFERRED, LIKE source_table INCLUDING DEFAULTS) INHERITS (table_parent) WITH OIDS TABLESPACE tablespace_name;

CREATE LOCAL TEMP TABLE table1 (col1 int) INHERITS (table_parent) WITH OIDS ON COMMIT DELETE ROWS;

CREATE UNLOGGED TABLE table1 (col1 int) INHERITS (table_parent) WITHOUT OIDS ON COMMIT DROP;

CREATE TABLE table_name1 OF type_name (col1 WITH OPTIONS CONSTRAINT constraint_name NOT NULL, col2 WITH OPTIONS CONSTRAINT constraint_name CHECK (age > 5) NOT DEFERRABLE INITIALLY DEFERRED);

CREATE TABLE table_name1 OF type_name (col1 WITH OPTIONS CONSTRAINT constraint_name NOT NULL, EXCLUDE USING hash (c WITH &&+) WITH (storage_parameter=3) USING INDEX TABLESPACE tablespace_name WHERE (predicate1=123) NOT DEFERRABLE INITIALLY DEFERRED);


CREATE TABLE weather (
    city varchar(80),
    temp_lo int,
    -- low temperature
    temp_hi int,
    -- high temperature
    prcp real,
    -- precipitation
    date date
);

CREATE TABLE cities (
    name varchar(80),
    location point
);

-- remove it
DROP TABLE weather;

-- operate view
CREATE VIEW myview AS
SELECT
    city,
    temp_lo,
    temp_hi,
    prcp,
    date,
    location
FROM
    weather,
    cities
WHERE
    city = name;

-- Foreign Keys
CREATE TABLE cities (
    city varchar(80) primary key,
    location point
);

CREATE TABLE weather (
    city varchar(80) references cities(city),
    temp_lo int,
    temp_hi int,
    prcp real,
    date date
);

-- Schemas

-- Creating a Schema
CREATE SCHEMA myschema;

CREATE SCHEMA database1.schema1.table1;

CREATE SCHEMA schemaname AUTHORIZATION username;

-- The Public Schema
CREATE TABLE public7.products(col1 int);

-- Inheritance
CREATE TABLE capitals (
    state           char(2)
) INHERITS (cities);

-- Partitioning Implementing Partitioning
CREATE TABLE measurement_y2006m02 (
    CHECK ( logdate >= DATE '2006-02-01' AND logdate < DATE '2006-03-01' )
) INHERITS (measurement);

CREATE TRIGGER insert_measurement_trigger
    BEFORE INSERT ON measurement
    FOR EACH ROW EXECUTE PROCEDURE measurement_insert_trigger();

CREATE TABLE measurement (
    city_id         int not null,
    logdate         date not null,
    peaktemp        int,
    unitsales       int
);

CREATE VIEW measurement AS
          SELECT * FROM measurement_y2006m02
UNION ALL SELECT * FROM measurement_y2006m03;
