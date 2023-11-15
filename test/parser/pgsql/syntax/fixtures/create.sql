-- Creating a New Table
-- index_method: btree, hash, gist, spgist and gin
-- The Most Complicated
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

-- create Function
CREATE FUNCTION get_color_note (rainbow) RETURNS text AS
  'SELECT note FROM my_colors WHERE color = $1'
  LANGUAGE SQL;

-- Data types
CREATE TABLE products (
    product_no integer,
    price numeric,
    col4 smallint,
    col5 int,
    col6 bigint,
    col7 decimal,
    col8 smallserial,
    col9 serial,
    col10 bigserial,
    col11 real
);

-- Character Types
CREATE TABLE test1 (
    name text,
    a character(4),
    b character varying(4),
    c varchar(4)
);

-- Enumerated Types
CREATE TYPE mood AS ENUM ('sad', 'ok', 'happy');

-- Bit String Types
CREATE TABLE test (a BIT(3), b BIT VARYING(5));

-- Arrays
CREATE TABLE sal_emp (
    name            text,
    pay_by_quarter  integer[],
    schedule        text[][]
);

-- Composite Types
CREATE TYPE inventory_item AS (
    name            text,
    supplier_id     integer,
    price           numeric
);
CREATE TABLE on_hand (
    item      inventory_item,
    count     integer
);

-- Ranger Types
CREATE TYPE floatrange AS RANGE (
    subtype = float8,
    subtype_diff = float8mi
);

-- CREATE ACCESS METHOD
CREATE ACCESS METHOD name
    TYPE TABLE
    HANDLER handler_function;

-- CREATE AGGREGATE
CREATE AGGREGATE agg_name1 ( int, integer) (
    SFUNC = sfunc,
    STYPE = state_data_type,
    FINALFUNC = ffunc,
    INITCOND = initial_condition,
    SORTOP = sort_operator
);
CREATE AGGREGATE agg_name2 ( int, integer) (
    SFUNC = sfunc,
    STYPE = state_data_type
);
CREATE AGGREGATE agg_name3 (
    BASETYPE = base_type,
    SFUNC = sfunc,
    STYPE = state_data_type,
    FINALFUNC = ffunc,
    INITCOND = initial_condition,
    SORTOP = sort_operator
);
CREATE AGGREGATE agg_name4 (
    BASETYPE = base_type,
    SFUNC = sfunc,
    STYPE = state_data_type
);

-- CREATE CAST
CREATE CAST (source_type1 AS target_type1)
    WITH FUNCTION function_name1 (argument_type1,argument_type2)
    AS ASSIGNMENT;
CREATE CAST (source_type1 AS target_type1)
    WITH FUNCTION function_name1 (argument_type1);
CREATE CAST (source_type2 AS target_type2)
    WITHOUT FUNCTION
    AS IMPLICIT;
CREATE CAST (source_type2 AS target_type2)
    WITHOUT FUNCTION;
CREATE CAST (source_type3 AS target_type3)
    WITH INOUT
    AS ASSIGNMENT;
CREATE CAST (source_type3 AS target_type3)
    WITH INOUT;

-- CREATE COLLATION
CREATE COLLATION coll_name (
    LOCALE = locale,
    LC_COLLATE = lc_collate,
    LC_CTYPE = lc_ctype,
    PROVIDER = provider,
    DETERMINISTIC = boolean,
    RULES = rules,
    VERSION = version
);
CREATE COLLATION coll_name FROM existing_collation;

-- CREATE CONVERSION
CREATE DEFAULT CONVERSION conver_name
    FOR 'source_encoding' TO 'dest_encoding' FROM function_name;
CREATE CONVERSION conver_name1
    FOR 'source_encoding' TO 'dest_encoding' FROM function_name;

-- CREATE DATABASE
CREATE DATABASE name1
    WITH
    OWNER = user_name
    TEMPLATE = template
    ENCODING = encoding
    STRATEGY = strategy
    LOCALE = locale
    LC_COLLATE = lc_collate
    LC_CTYPE = lc_ctype
    ICU_LOCALE = icu_locale
    ICU_RULES = icu_rules
    LOCALE_PROVIDER = locale_provider
    COLLATION_VERSION = collation_version
    TABLESPACE = tablespace_name
    ALLOW_CONNECTIONS = allowconn 
    CONNECTION LIMIT = connlimit
    IS_TEMPLATE = istemplate
    OID = oid;
CREATE DATABASE name2;

-- CREATE DOMAIN
CREATE DOMAIN name AS data_type
COLLATE collation
DEFAULT expression
CONSTRAINT constraint_name NOT NULL
NULL
CHECK(
   VALUE ~ '^\d{5}$'
OR VALUE ~ '^\d{5}-\d{4}$'
);
CREATE DOMAIN domain_name my_type;

-- CREATE EVENT TRIGGER
CREATE EVENT TRIGGER trigger_name
  ON event_name
  WHEN TAG IN ('filter_value1', 'filter_value2') AND filter_variable IN ('filter_value1', 'filter_value2')
  EXECUTE PROCEDURE function_name();
CREATE EVENT TRIGGER trigger_name
  ON event_name
  EXECUTE PROCEDURE function_name();

-- CREATE EXTENSION
CREATE EXTENSION IF NOT EXISTS extension_name
    WITH SCHEMA schema_name
    VERSION version
    FROM old_version;
CREATE EXTENSION extension_name1;

-- CREATE FOREIGN DATA WRAPPER
CREATE FOREIGN DATA WRAPPER name1
HANDLER handler_function
VALIDATOR validator_function
OPTIONS ( option_name 'value', option_name1 'value2');
CREATE FOREIGN DATA WRAPPER name2
NO HANDLER
NO VALIDATOR
OPTIONS ( option_name 'value');
CREATE FOREIGN DATA WRAPPER name3;

-- CREATE FOREIGN TABLE
CREATE FOREIGN TABLE IF NOT EXISTS table_name (column_name varchar(10) OPTIONS ( option_name1 'value', option_name2 'values') COLLATE coll_name CONSTRAINT constraint_name  NOT NULL)
  SERVER server_name
  OPTIONS ( option_name1 'value', option_name2 'value3');
CREATE FOREIGN TABLE films (
    code        char(5) NOT NULL,
    title       varchar(40) NOT NULL,
    did         integer NOT NULL,
    date_prod   date,
    kind        varchar(10),
    len         interval hour to minute
)
SERVER film_server;

-- CREATE FUNCTION
CREATE OR REPLACE FUNCTION
    name ( INOUT argname int DEFAULT a>3)
    RETURNS integer
    AS 'obj_file'
    WITH (isStrict, isCachable);

-- CREATE GROUP
CREATE GROUP group_name WITH SUPERUSER NOSUPERUSER CREATEDB NOCREATEDB
    CREATEROLE NOCREATEROLE
    INHERIT NOINHERIT
    LOGIN NOLOGIN
    REPLICATION NOREPLICATION
    BYPASSRLS NOBYPASSRLS
    CONNECTION LIMIT 234
    ENCRYPTED PASSWORD 'password'
    VALID UNTIL '2023-09-23'
    IN ROLE role_name, role_name1
    IN GROUP role_name
    ROLE role_name
    ADMIN role_name
    USER role_name
    SYSID 757;
CREATE GROUP group_name WITH ENCRYPTED PASSWORD 'password';
CREATE GROUP group_name;

-- CREATE INDEX
CREATE UNIQUE INDEX CONCURRENTLY index_name ON table_name USING btree
    ((a > 4) COLLATE collation_name ASC NULLS LAST )
    INCLUDE (column_name1, clou_2)
    NULLS NOT DISTINCT
    WITH ( storage_parameter = 1) 
    TABLESPACE tablespace_name
    WHERE (y > 4);
CREATE INDEX ON table_name (col1);

-- CREATE LANGUAGE
CREATE OR REPLACE TRUSTED PROCEDURAL LANGUAGE lan_name1
    HANDLER call_handler INLINE inline_handler VALIDATOR valfunction;
CREATE LANGUAGE name;
CREATE LANGUAGE name HANDLER call_handler;

-- CREATE MATERIALIZED VIEW
CREATE MATERIALIZED VIEW table_name
    (column_name, column_name2) 
    WITH ( storage_parameter=3, storage_parameter1=4)
    TABLESPACE tablespace_name
    AS SELECT * FROM product
    WITH NO DATA;
CREATE MATERIALIZED VIEW table_name2 AS SELECT * FROM product;

-- CREATE OPERATOR
CREATE OPERATOR - (
    PROCEDURE = function_name,
    LEFTARG = left_type,
    RIGHTARG = right_type,
    COMMUTATOR = com_op,
    NEGATOR = neg_op,
    RESTRICT = res_proc,
    JOIN = join_proc,
    HASHES,
    MERGES
);
CREATE OPERATOR == (
    PROCEDURE = function_name
);

-- CREATE OPERATOR CLASS
CREATE OPERATOR CLASS op_class_name DEFAULT FOR TYPE type4
  USING index_method FAMILY family_name AS
  OPERATOR 2 = (arraytype, arraytype1) FOR ORDER BY sort_family_name,
    FUNCTION 4 (op_type1, op_type2 ) function_name ( argument_type, argument_type2 ),
    STORAGE storage_type;
CREATE OPERATOR CLASS gist__int_ops
FOR TYPE _int4 USING gist AS
        OPERATOR        3       &&;

-- CREATE OPERATOR FAMILY
CREATE OPERATOR FAMILY name USING index_method;

-- CREATE POLICY
CREATE POLICY name ON table_name
AS PERMISSIVE
    FOR INSERT
    TO PUBLIC
    USING ( using_expression )
    WITH CHECK ( check_expression );
CREATE POLICY name ON table_name;

-- CREATE PROCEDURE
CREATE OR REPLACE PROCEDURE
    name ( IN argname int DEFAULT default_expr)
    LANGUAGE lang_name
    TRANSFORM { FOR TYPE type_name } 
    EXTERNAL SECURITY INVOKER
    EXTERNAL SECURITY DEFINER
    SET configuration_parameter FROM CURRENT
    AS 'definition'
    AS 'obj_file', 'link_symbol'
    sql_body;

-- CREATE PUBLICATION
CREATE PUBLICATION name
    FOR ALL TABLES, FOR publication_object
    WITH ( publication_parameter = value);
CREATE PUBLICATION name;

-- CREATE ROLE
CREATE ROLE name WITH SUPERUSER CREATEDB CREATEROLE 
    CREATEUSER 
    INHERIT 
    LOGIN 
    REPLICATION
    CONNECTION LIMIT 234
    ENCRYPTED PASSWORD 'password'
    VALID UNTIL '2013-09-20'
    IN ROLE role_name, role_name2
    IN GROUP role_name2, role_name3
    ROLE role_name3, role_name4
    ADMIN role_name4, role_name5
    USER role_name5, role_name6
    SYSID 234;

-- CREATE RULE
CREATE OR REPLACE RULE name AS ON SELECT
    TO table_name WHERE y=3
    DO INSTEAD NOTHING;
CREATE OR REPLACE RULE name AS ON SELECT
    TO table_name WHERE y=3
    DO ALSO (SELECT bb FROM prod); 
CREATE RULE rule_name AS ON UPDATE TO table_name DO NOTHING;

-- CREATE SCHEMA
CREATE SCHEMA schema_name AUTHORIZATION user_name CREATE TABLE films (title text, release date, awards text[]) CREATE VIEW winners AS
        SELECT title, release FROM films WHERE awards IS NOT NULL;
CREATE SCHEMA AUTHORIZATION user_name CREATE TABLE films (title text, release date, awards text[]);
CREATE SCHEMA IF NOT EXISTS schema_name AUTHORIZATION user_name;
CREATE SCHEMA IF NOT EXISTS AUTHORIZATION user_name;

-- CREATE SEQUENCE
CREATE TEMPORARY SEQUENCE squen_name INCREMENT BY 2432 MINVALUE 45  MAXVALUE 12 
     START WITH 4654 CACHE 1232  NO CYCLE 
     OWNED BY table_name.column_name;
CREATE SEQUENCE squen_name;

-- CREATE SERVER
CREATE SERVER server_name TYPE 'server_type' VERSION 'server_version'
    FOREIGN DATA WRAPPER fdw_name
    OPTIONS ( option 'value', option 'value3');
CREATE SERVER server_name FOREIGN DATA WRAPPER fdw_name;

-- CREATE STATISTICS
CREATE STATISTICS IF NOT EXISTS statistics_name
    ON ( expression )
    FROM table_name;
CREATE STATISTICS IF NOT EXISTS statistics_name 
( statistics_kind )
    ON column_name, ( expression )
    FROM table_name;
CREATE STATISTICS ON column_name, column_name FROM table_name;

-- CREATE SUBSCRIPTION
CREATE SUBSCRIPTION subscription_name
    CONNECTION 'conninfo'
    PUBLICATION publication_name, publication_name1
    WITH ( subscription_parameter = value, subscription_parameter = value);
CREATE SUBSCRIPTION subscription_name
    CONNECTION 'conninfo'
    PUBLICATION publication_name;

-- CREATE TABLE
CREATE UNLOGGED TABLE IF NOT EXISTS table_name (
  column_name int STORAGE PLAIN COMPRESSION compression_method COLLATE collation_name NOT NULL,
  CONSTRAINT constraint_name 
  CHECK ( expression>3 ) NO INHERIT ,
  LIKE source_table 
)
INHERITS ( parent_table,  parent_table)
PARTITION BY RANGE ( column_name COLLATE collation_name opclass)
USING method
WITH ( storage_parameter = value)
ON COMMIT PRESERVE ROWS
TABLESPACE tablespace_name;
CREATE TABLE table_name (column_name int);
CREATE GLOBAL TEMPORARY TABLE table_name
    OF int ( column_name WITH OPTIONS GENERATED ALWAYS AS ( generation_expr ) STORED
)
PARTITION BY HASH ( ( expression>3 ) COLLATE collation_name opclass)
USING method
WITH ( storage_parameter = value )
ON COMMIT PRESERVE ROWS
TABLESPACE tablespace_name;
CREATE TABLE table_name OF type_name;
CREATE TABLE table_name
    PARTITION OF parent_table (
  column_name WITH OPTIONS NOT NULL
  NULL
  CHECK ( expression ) NO INHERIT
  DEFAULT default_expr
  GENERATED ALWAYS AS ( generation_expr ) STORED
  GENERATED BY DEFAULT AS IDENTITY ( AS data_type ) 
  UNIQUE NULLS NOT DISTINCT INCLUDE ( column_name ) 
  PRIMARY KEY WITH ( storage_parameter = value )
  REFERENCES reftable ( refcolumn ) MATCH FULL 
    ON DELETE NO ACTION ON UPDATE RESTRICT 
DEFERRABLE  INITIALLY DEFERRED
)  FOR VALUES FROM (MINVALUE, x>3) TO (MAXVALUE,MAXVALUE);

-- CREATE TABLE AS
CREATE GLOBAL TEMPORARY TABLE table_name
(column_name, column_name2)
WITH ( storage_parameter = 4)
ON COMMIT PRESERVE ROWS
TABLESPACE tablespace_name
AS SELECT * FROM ad
WITH NO DATA;
CREATE TABLE table_name AS SELECT * FROM ad;

-- CREATE TABLESPACE
CREATE TABLESPACE tablespace_name OWNER user_name LOCATION 'directory';
CREATE TABLESPACE tablespace_name LOCATION 'directory';

-- CREATE TEXT SEARCH CONFIGURATION
CREATE TEXT SEARCH CONFIGURATION name (
    PARSER = parser_name
);
CREATE TEXT SEARCH CONFIGURATION name (
    COPY = source_config
);

-- CREATE TEXT SEARCH DICTIONARY
CREATE TEXT SEARCH DICTIONARY name (
    TEMPLATE = template
);

-- CREATE TEXT SEARCH PARSER
CREATE TEXT SEARCH PARSER name (
    START = start_function ,
    GETTOKEN = gettoken_function ,
    END = end_function ,
    LEXTYPES = lextypes_function,
    HEADLINE = headline_function
);
CREATE TEXT SEARCH PARSER name (
    START = start_function ,
    GETTOKEN = gettoken_function ,
    END = end_function ,
    LEXTYPES = lextypes_function
);

-- CREATE TEXT SEARCH TEMPLATE
CREATE TEXT SEARCH TEMPLATE name (
    INIT = init_function,
    LEXIZE = lexize_function
);
CREATE TEXT SEARCH TEMPLATE name (
    LEXIZE = lexize_function
);

-- CREATE TRANSFORM
CREATE OR REPLACE TRANSFORM FOR type_name LANGUAGE lang_name (
    FROM SQL WITH FUNCTION from_sql_function_name (argument_type),
    TO SQL WITH FUNCTION to_sql_function_name (argument_type )
);

-- CREATE TRIGGER
CREATE OR REPLACE CONSTRAINT TRIGGER trig_name INSTEAD OF INSERT OR UPDATE
    ON table_name
    FROM referenced_table_name
    DEFERRABLE INITIALLY IMMEDIATE
    FOR EACH STATEMENT
    WHEN (OLD.balance IS DISTINCT FROM NEW.balance)
    EXECUTE PROCEDURE function_name ();

-- CREATE TYPE
CREATE TYPE name AS
    (attribute_name int COLLATE collation_name, attribute_name integer COLLATE collation_name);

CREATE TYPE name AS ENUM
    ('label', 'name');

CREATE TYPE name AS RANGE (
    SUBTYPE = subtype,
    SUBTYPE_OPCLASS = subtype_operator_class,
    COLLATION = collation,
    CANONICAL = canonical_function,
    SUBTYPE_DIFF = subtype_diff_function
    );
CREATE TYPE name (
    INPUT = input_function,
    OUTPUT = output_function,
    RECEIVE = receive_function,
    SEND = send_function,
    TYPMOD_IN = type_modifier_input_function,
    TYPMOD_OUT = type_modifier_output_function,
    ANALYZE = analyze_function,
    INTERNALLENGTH = 13,
    PASSEDBYVALUE,
    ALIGNMENT = alignment,
    STORAGE = storage,
    LIKE = like_type,
    CATEGORY = category,
    PREFERRED = preferred,
    DEFAULT = default_value,
    ELEMENT = float4,
    DELIMITER = delimiter,
    COLLATABLE = collatable
);
CREATE TYPE name;

-- CREATE USER
CREATE USER name WITH NOSUPERUSER NOCREATEDB NOCREATEROLE 
    NOCREATEUSER 
    NOINHERIT 
    NOLOGIN 
    NOREPLICATION
    CONNECTION LIMIT 234
    UNENCRYPTED PASSWORD 'password'
    VALID UNTIL '2013-09-20'
    IN ROLE role_name, role_name2
    IN GROUP role_name2, role_name3
    ROLE role_name3, role_name4
    ADMIN role_name4, role_name5
    USER role_name5, role_name6
    SYSID 234;

-- CREATE USER MAPPING
CREATE USER MAPPING FOR CURRENT_USER
    SERVER server_name
    OPTIONS ( option 'value');
CREATE USER MAPPING FOR PUBLIC
    SERVER server_name;

-- CREATE VIEW
CREATE OR REPLACE TEMP RECURSIVE VIEW name ( column_name, column_name2)
WITH ( view_option_name = 2321, view_option_name2='ewfwe')
AS SELECT * FROM my_view;
CREATE VIEW view_name AS SELECT * FROM my_view;

