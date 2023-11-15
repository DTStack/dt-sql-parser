-- Modifying Tables
-- Adding a Column
ALTER TABLE products ADD COLUMN description text CHECK (description <> '');

-- Removing a Column
ALTER TABLE products DROP COLUMN description;

ALTER TABLE products DROP COLUMN description CASCADE;

-- Adding a Constraint
ALTER TABLE products ADD CHECK (name <> '');

ALTER TABLE products ADD CONSTRAINT some_name UNIQUE (product_no);

ALTER TABLE products ADD FOREIGN KEY (product_group_id) REFERENCES product_groups;

-- Removing a Constraint
ALTER TABLE products DROP CONSTRAINT some_name;

ALTER TABLE products ALTER COLUMN product_no SET NOT NULL;

-- Changing a Column's Default Value
ALTER TABLE products ALTER COLUMN price SET DEFAULT 7.77;

ALTER TABLE products ALTER COLUMN price DROP DEFAULT;

-- Changing a Column's Data Type
ALTER TABLE products ALTER COLUMN price TYPE numeric(10,2);

-- Renaming a Column
ALTER TABLE products RENAME COLUMN product_no TO product_number;

-- Renaming a Table
ALTER TABLE products RENAME TO items;

-- Managing Partitions
ALTER TABLE measurement_y2006m02 NO INHERIT measurement;

ALTER TABLE measurement_y2008m02 ADD CONSTRAINT y2008m02
   CHECK ( logdate >= DATE '2008-02-01' AND logdate < DATE '2008-03-01' );

-- ALTER AGGREGATE
ALTER AGGREGATE name ( int, integer) RENAME TO new_name;
ALTER AGGREGATE name ( text,int ) OWNER TO new_owner;
ALTER AGGREGATE name ( integer ) SET SCHEMA new_schema;

-- ALTER COLLATION
ALTER COLLATION name RENAME TO new_name;
ALTER COLLATION name OWNER TO new_owner;
ALTER COLLATION name SET SCHEMA new_schema;

-- ALTER CONVERSION
ALTER CONVERSION name RENAME TO new_name;
ALTER CONVERSION name OWNER TO new_owner;
ALTER CONVERSION name SET SCHEMA new_schema;

-- ALTER DATABASE
ALTER DATABASE name WITH CONNECTION LIMIT connlimit;
ALTER DATABASE name RENAME TO new_name;
ALTER DATABASE name OWNER TO new_owner;
ALTER DATABASE name OWNER TO CURRENT_ROLE;
ALTER DATABASE name OWNER TO CURRENT_USER;
ALTER DATABASE name OWNER TO SESSION_USER;
ALTER DATABASE name SET TABLESPACE new_tablespace;
ALTER DATABASE name SET configuration_parameter TO DEFAULT;
ALTER DATABASE name SET configuration_parameter FROM CURRENT;
ALTER DATABASE name RESET configuration_parameter;
ALTER DATABASE name RESET ALL;
ALTER DATABASE name;

-- ALTER DEFAULT PRIVILEGES
ALTER DEFAULT PRIVILEGES
   FOR ROLE target_role, target_role2
    IN SCHEMA schema_name, schema_name2
    GRANT SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER
    ON TABLES
    TO GROUP role_name, PUBLIC WITH GRANT OPTION;

-- ALTER DOMAIN
ALTER DOMAIN name SET DEFAULT expression;
ALTER DOMAIN name DROP DEFAULT;
ALTER DOMAIN name SET NOT NULL;
ALTER DOMAIN name ADD CONSTRAINT constraint_name
CHECK (char_length(VALUE) = 5) NOT VALID;
ALTER DOMAIN name
    DROP CONSTRAINT IF EXISTS constraint_name RESTRICT;
ALTER DOMAIN name
     RENAME CONSTRAINT constraint_name TO new_constraint_name;
ALTER DOMAIN name
    VALIDATE CONSTRAINT constraint_name;
ALTER DOMAIN name
    OWNER TO new_owner;
ALTER DOMAIN name
    RENAME TO new_name;
ALTER DOMAIN name
    SET SCHEMA new_schema;

-- ALTER EVENT TRIGGER
ALTER EVENT TRIGGER name DISABLE;
ALTER EVENT TRIGGER name ENABLE REPLICA;
ALTER EVENT TRIGGER name OWNER TO new_owner;
ALTER EVENT TRIGGER name RENAME TO new_name;

-- ALTER EXTENSION
ALTER EXTENSION name UPDATE TO new_version;
ALTER EXTENSION name SET SCHEMA new_schema;
ALTER EXTENSION name ADD AGGREGATE agg_name (agg_type, agg_type2);
ALTER EXTENSION name DROP CAST (source_type AS target_type);
ALTER EXTENSION name DROP COLLATION object_name;
ALTER EXTENSION name DROP CONVERSION object_name;
ALTER EXTENSION name DROP DOMAIN object_name;
ALTER EXTENSION name DROP EVENT TRIGGER object_name;
ALTER EXTENSION name DROP FOREIGN DATA WRAPPER object_name;
ALTER EXTENSION name DROP FOREIGN TABLE object_name ;
ALTER EXTENSION name DROP FUNCTION function_name ( IN argname int);
ALTER EXTENSION name DROP MATERIALIZED VIEW object_name;
ALTER EXTENSION name DROP OPERATOR > (int, int);
ALTER EXTENSION name DROP OPERATOR CLASS object_name USING index_method;
ALTER EXTENSION name DROP OPERATOR FAMILY object_name USING index_method;
ALTER EXTENSION name DROP PROCEDURAL LANGUAGE object_name;
ALTER EXTENSION name DROP SCHEMA object_name;
ALTER EXTENSION name DROP SEQUENCE object_name;
ALTER EXTENSION name DROP SERVER object_name;
ALTER EXTENSION name DROP TABLE object_name;
ALTER EXTENSION name DROP TEXT SEARCH CONFIGURATION object_name;
ALTER EXTENSION name DROP TEXT SEARCH DICTIONARY object_name;
ALTER EXTENSION name DROP TEXT SEARCH PARSER object_name;
ALTER EXTENSION name DROP TEXT SEARCH TEMPLATE object_name;
ALTER EXTENSION name DROP TYPE object_name;
ALTER EXTENSION name DROP VIEW object_name;

-- ALTER FOREIGN DATA WRAPPER
ALTER FOREIGN DATA WRAPPER name
HANDLER handler_function
VALIDATOR validator_function
OPTIONS (ADD option_1 'value', DROP option_2 'value');
ALTER FOREIGN DATA WRAPPER name OWNER TO new_owner;
ALTER FOREIGN DATA WRAPPER name RENAME TO new_name;

-- ALTER FOREIGN TABLE
ALTER FOREIGN TABLE IF EXISTS name
    ADD COLUMN column_name data_type COLLATE collation_name, DROP COLUMN IF EXISTS column_name CASCADE, ALTER COLUMN column_name SET DATA TYPE data_type, OWNER TO new_owner, OPTIONS (ADD option_1 'value', DROP option_2 'value');
ALTER FOREIGN TABLE table_name ALTER column_name DROP DEFAULT;
ALTER FOREIGN TABLE IF EXISTS name
    RENAME COLUMN column_name TO new_column_name;
ALTER FOREIGN TABLE IF EXISTS name
    RENAME TO new_name;
ALTER FOREIGN TABLE IF EXISTS name
    SET SCHEMA new_schema;

-- ALTER FUNCTION
ALTER FUNCTION name (VARIADIC argname argtype)
    CALLED ON NULL INPUT RESTRICT;
ALTER FUNCTION name ( INOUT argname argtype, OUT argname argtype)
    RENAME TO new_name;
ALTER FUNCTION name (INOUT argname argtype)
    OWNER TO new_owner;
ALTER FUNCTION name (IN argname argtype)
    SET SCHEMA new_schema;

-- ALTER GROUP
ALTER GROUP group_name ADD USER user_name, user_name1;
ALTER GROUP group_name DROP USER user_name,user_name2;
ALTER GROUP group_name RENAME TO new_name;

-- ALTER INDEX
ALTER INDEX IF EXISTS name RENAME TO new_name;
ALTER INDEX IF EXISTS name SET TABLESPACE tablespace_name;
ALTER INDEX IF EXISTS name SET ( storage_parameter = value2 );
ALTER INDEX IF EXISTS name RESET ( storage_parameter );
ALTER INDEX name ATTACH PARTITION index_name;
ALTER INDEX name NO DEPENDS ON EXTENSION extension_name;
ALTER INDEX IF EXISTS name ALTER COLUMN column_number
    SET STATISTICS 5;
ALTER INDEX ALL IN TABLESPACE name OWNED BY role_name,role_name2 
    SET TABLESPACE new_tablespace NOWAIT;


-- ALTER LANGUAGE
ALTER PROCEDURAL LANGUAGE name RENAME TO new_name;
ALTER LANGUAGE name OWNER TO new_owner;
ALTER LANGUAGE name OWNER TO CURRENT_ROLE;
ALTER LANGUAGE name OWNER TO CURRENT_USER;
ALTER LANGUAGE name OWNER TO SESSION_USER;

-- ALTER LARGE OBJECT
ALTER LARGE OBJECT 32423 OWNER TO new_owner;

-- ALTER MATERIALIZED VIEW
ALTER MATERIALIZED VIEW IF EXISTS name
    SET WITHOUT CLUSTER,CLUSTER ON index_name;
ALTER MATERIALIZED VIEW IF EXISTS name
    RENAME COLUMN column_name TO new_column_name;
ALTER MATERIALIZED VIEW IF EXISTS name
    RENAME TO new_name;
ALTER MATERIALIZED VIEW IF EXISTS name
    SET SCHEMA new_schema;
ALTER MATERIALIZED VIEW name SET SCHEMA new_schema;

-- ALTER OPERATOR
ALTER OPERATOR - ( NONE , int ) OWNER TO new_owner;
ALTER OPERATOR = ( integer , NONE ) SET SCHEMA new_schema;

-- ALTER OPERATOR CLASS
ALTER OPERATOR CLASS name USING index_method RENAME TO new_name;
ALTER OPERATOR CLASS name USING index_method OWNER TO new_owner;
ALTER OPERATOR CLASS name USING index_method SET SCHEMA new_schema;
ALTER OPERATOR FAMILY name USING index_method ADD
    OPERATOR 1 > ( int, int )
              FOR SEARCH,
              FUNCTION 24 ( int)
              function_name( int );

ALTER OPERATOR FAMILY name USING index_method DROP
OPERATOR 32 ( op_typ ),FUNCTION 34 ( op_type);

-- ALTER OPERATOR FAMILY
ALTER OPERATOR FAMILY name USING index_method ADD
OPERATOR 4 > ( int, integer ) FOR SEARCH,
   FUNCTION 3 ( int, int) function_name ( numeric );
ALTER OPERATOR FAMILY name USING index_method DROP
OPERATOR 4 ( op_type, op_type ),
 FUNCTION 4 ( op_type, op_type );
ALTER OPERATOR FAMILY name USING index_method RENAME TO new_name;
ALTER OPERATOR FAMILY name USING index_method OWNER TO new_owner;
ALTER OPERATOR FAMILY name USING index_method SET SCHEMA new_schema;

-- ALTER POLICY
ALTER POLICY name ON table_name RENAME TO new_name;
ALTER POLICY name ON table_name
    TO role_name, PUBLIC, CURRENT_ROLE, CURRENT_USER, SESSION_USER
    USING ( using_expression )
    WITH CHECK ( check_expression );

-- ALTER PROCEDURE
ALTER PROCEDURE name ( IN argname integer, IN argname int)
    RESET ALL RESTRICT;
ALTER PROCEDURE name (  IN argname integer )
    RENAME TO new_name;
ALTER PROCEDURE name ( IN argname integer)
    OWNER TO CURRENT_ROLE;
ALTER PROCEDURE name ( IN argname integer)
    SET SCHEMA new_schema;
ALTER PROCEDURE name ( IN argname integer)
    NO DEPENDS ON EXTENSION extension_name;

-- ALTER PUBLICATION
ALTER PUBLICATION name ADD TABLE ONLY table_name * ( column_name,column_name2) WHERE ( expression>3 );
ALTER PUBLICATION name SET TABLE ONLY table_name * ( column_name,column_name2) WHERE ( expression ), TABLE ONLY table_name * ( column_name,column_name2) WHERE ( expression );
ALTER PUBLICATION name DROP TABLE ONLY table_name * ( column_name,column_name2) WHERE ( expression );
ALTER PUBLICATION name SET ( publication_parameter = value, parameters2 )
ALTER PUBLICATION name OWNER TO CURRENT_ROLE;
ALTER PUBLICATION name RENAME TO new_name;

-- ALTER ROLE
ALTER ROLE name WITH SUPERUSER CREATEDB CREATEROLE VALID UNTIL 'timestamp';
ALTER ROLE name RENAME TO new_name;
ALTER ROLE ALL IN DATABASE database_name SET configuration_parameter = DEFAULT;
ALTER ROLE name IN DATABASE database_name SET configuration_parameter FROM CURRENT;
ALTER ROLE ALL IN DATABASE database_name RESET configuration_parameter;
ALTER ROLE name IN DATABASE database_name RESET ALL;

-- ALTER ROUTINE
ALTER ROUTINE name ( IN argname integer)
    COST execution_cost RESTRICT;
ALTER ROUTINE name
    COST execution_cost IMMUTABLE LEAKPROOF SECURITY INVOKER ROWS result_rows SET configuration_parameter TO DEFAULT SET configuration_parameter FROM CURRENT RESET configuration_parameter RESET ALL;
ALTER ROUTINE name ( IN argname integer)
    RENAME TO new_name;
ALTER ROUTINE name ( IN argname integer)
    OWNER TO CURRENT_ROLE;
ALTER ROUTINE name ( IN argname integer)
    SET SCHEMA new_schema;
ALTER ROUTINE name ( IN argname integer)
    NO DEPENDS ON EXTENSION extension_name;

-- ALTER RULE
ALTER RULE name ON table_name RENAME TO new_name;

-- ALTER SCHEMA
ALTER SCHEMA name RENAME TO new_name;
ALTER SCHEMA name OWNER TO new_owner;

-- ALTER SEQUENCE
ALTER SEQUENCE IF EXISTS name INCREMENT BY 324
MINVALUE 34  MAXVALUE 66 
START WITH 12 RESTART WITH 34 
RESTART WITH restart
CACHE 324 NO CYCLE
OWNED BY table_name.column_name;
ALTER SEQUENCE name OWNER TO new_owner;
ALTER SEQUENCE IF EXISTS name RENAME TO new_name;
ALTER SEQUENCE name SET SCHEMA new_schema;

-- ALTER SERVER
ALTER SERVER name VERSION 'new_version' OPTIONS ( ADD option 'value', SET option 'value', DROP option 'value');
ALTER SERVER name OWNER TO new_owner;
ALTER SERVER name RENAME TO new_name;

-- ALTER STATISTICS
ALTER STATISTICS name OWNER TO CURRENT_ROLE;
ALTER STATISTICS name OWNER TO CURRENT_USER;
ALTER STATISTICS name OWNER TO SESSION_USER;
ALTER STATISTICS name RENAME TO new_name;
ALTER STATISTICS name SET SCHEMA new_schema;
ALTER STATISTICS name SET STATISTICS 23;

-- ALTER SUBSCRIPTION
ALTER SUBSCRIPTION name CONNECTION 'conninfo';
ALTER SUBSCRIPTION name SET PUBLICATION  publication_name,publication_name1 WITH ( publication_option = value) ;
ALTER SUBSCRIPTION name ADD PUBLICATION publication_name WITH ( publication_option );
ALTER SUBSCRIPTION name DROP PUBLICATION publication_name WITH ( publication_option);
ALTER SUBSCRIPTION name REFRESH PUBLICATION WITH ( refresh_option = value);
ALTER SUBSCRIPTION name ENABLE;
ALTER SUBSCRIPTION name DISABLE;
ALTER SUBSCRIPTION name SET ( subscription_parameter = value);
ALTER SUBSCRIPTION name SKIP ( skip_option = value );
ALTER SUBSCRIPTION name OWNER TO CURRENT_ROLE;
ALTER SUBSCRIPTION name RENAME TO new_name;

-- ALTER SYSTEM
ALTER SYSTEM SET configuration_parameter TO DEFAULT;
ALTER SYSTEM RESET configuration_parameter;
ALTER SYSTEM RESET ALL;

-- ALTER TABLE
ALTER TABLE IF EXISTS ONLY name *
ALTER COLUMN column_name SET DEFAULT expression, DISABLE RULE rewrite_rule_name, ADD CONSTRAINT constraint_name
    UNIQUE USING INDEX index_name DEFERRABLE INITIALLY DEFERRED;
ALTER TABLE name 
RENAME COLUMN column_name TO new_column_name;
ALTER TABLE IF EXISTS ONLY name *
    RENAME CONSTRAINT constraint_name TO new_constraint_name;
ALTER TABLE IF EXISTS name
    RENAME TO new_name;
ALTER TABLE name
    SET SCHEMA new_schema;
ALTER TABLE ALL IN TABLESPACE name OWNED BY role_name,role_name2
    SET TABLESPACE new_tablespace NOWAIT;
ALTER TABLE IF EXISTS name
    ATTACH PARTITION partition_name FOR VALUES FROM (MINVALUE, x>3) TO (MAXVALUE,MAXVALUE);
ALTER TABLE orders
    ATTACH PARTITION orders_p4 FOR VALUES WITH (MODULUS 4, REMAINDER 4);
ALTER TABLE IF EXISTS name
    DETACH PARTITION partition_name CONCURRENTLY;

-- ALTER TABLESPACE
ALTER TABLESPACE name RENAME TO new_name;
ALTER TABLESPACE name OWNER TO new_owner;
ALTER TABLESPACE name SET ( tablespace_option = value, tablespace_option = value2 );
ALTER TABLESPACE name RESET ( tablespace_option, tablespace_option2 );

-- ALTER TEXT SEARCH CONFIGURATION
ALTER TEXT SEARCH CONFIGURATION name
    ADD MAPPING FOR token_type, token_type2 WITH dictionary_name, dictionary_name2;
ALTER TEXT SEARCH CONFIGURATION name
    ALTER MAPPING FOR token_type, token_type2 WITH dictionary_name, dictionary_name2;
ALTER TEXT SEARCH CONFIGURATION name
    ALTER MAPPING REPLACE old_dictionary WITH new_dictionary;
ALTER TEXT SEARCH CONFIGURATION name
    ALTER MAPPING FOR token_type REPLACE old_dictionary WITH new_dictionary;
ALTER TEXT SEARCH CONFIGURATION name
    DROP MAPPING IF EXISTS FOR token_type;
ALTER TEXT SEARCH CONFIGURATION name RENAME TO new_name;
ALTER TEXT SEARCH CONFIGURATION name OWNER TO new_owner;
ALTER TEXT SEARCH CONFIGURATION name SET SCHEMA new_schema;

-- ALTER TEXT SEARCH DICTIONARY
ALTER TEXT SEARCH DICTIONARY name (
    option_1 = value1, option_2
);
ALTER TEXT SEARCH DICTIONARY name RENAME TO new_name;
ALTER TEXT SEARCH DICTIONARY name OWNER TO new_owner;
ALTER TEXT SEARCH DICTIONARY name SET SCHEMA new_schema;

-- ALTER TEXT SEARCH PARSER
ALTER TEXT SEARCH PARSER name RENAME TO new_name;
ALTER TEXT SEARCH PARSER name SET SCHEMA new_schema;

-- ALTER TEXT SEARCH TEMPLATE
ALTER TEXT SEARCH TEMPLATE name RENAME TO new_name;
ALTER TEXT SEARCH TEMPLATE name SET SCHEMA new_schema;

-- ALTER TRIGGER
ALTER TRIGGER name ON table_name RENAME TO new_name;

-- ALTER TYPE
ALTER TYPE name ADD ATTRIBUTE attribute_name data_type COLLATE collation_name CASCADE;
ALTER TYPE name OWNER TO new_owner;
ALTER TYPE name RENAME ATTRIBUTE attribute_name TO new_attribute_name RESTRICT;
ALTER TYPE name RENAME TO new_name;
ALTER TYPE name SET SCHEMA new_schema;
ALTER TYPE name ADD VALUE IF NOT EXISTS 'new_enum_value' BEFORE 'existing_enum_value';

-- ALTER USER
ALTER USER name WITH NOSUPERUSER NOCREATEDB NOCREATEROLE NOCREATEUSER NOINHERIT NOLOGIN NOREPLICATION CONNECTION LIMIT 23 PASSWORD 'password' VALID UNTIL 'timestamp'; 
ALTER USER name;

-- ALTER USER MAPPING
ALTER USER MAPPING FOR CURRENT_USER
    SERVER server_name
    OPTIONS (ADD option 'value', SET option 'value', DROP option 'value');

-- ALTER VIEW
ALTER VIEW name ALTER COLUMN column_name SET DEFAULT expression;
ALTER VIEW IF EXISTS name ALTER column_name DROP DEFAULT;
ALTER VIEW name OWNER TO new_owner;
ALTER VIEW IF EXISTS name RENAME TO new_name;
ALTER VIEW name SET SCHEMA new_schema;
ALTER VIEW IF EXISTS name SET ( view_option_name = view_option_value, view_option_name2 = view_option_value2);
ALTER VIEW name RESET ( view_option_name, view_option_name );


