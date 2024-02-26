-- SHOW COLUMNS table_identifier [ database ]

SHOW COLUMNS IN customer;

SHOW COLUMNS IN salesdb.customer;

SHOW COLUMNS IN customer IN salesdb;


-- SHOW CREATE TABLE table_identifier [ AS SERDE ]

SHOW CREATE TABLE test;

SHOW CREATE TABLE test AS SERDE;


-- SHOW { DATABASES | SCHEMAS } [ LIKE regex_pattern ]

SHOW DATABASES;

SHOW DATABASES LIKE 'pay*';

SHOW SCHEMAS;


-- SHOW [ function_kind ] FUNCTIONS [ { FROM | IN } database_name ] [ LIKE regex_pattern ]

SHOW FUNCTIONS trim;

SHOW SYSTEM FUNCTIONS concat;

SHOW SYSTEM FUNCTIONS FROM salesdb LIKE 'max';

SHOW FUNCTIONS LIKE 't*';

SHOW FUNCTIONS LIKE 'yea*|windo*';

SHOW FUNCTIONS LIKE 't[a-z][a-z][a-z]';


-- SHOW PARTITIONS table_identifier [ partition_spec ]

SHOW PARTITIONS customer;

SHOW PARTITIONS salesdb.customer;

SHOW PARTITIONS customer PARTITION (state = 'CA', city = 'Fremont');

SHOW PARTITIONS customer PARTITION (state = 'CA');

SHOW PARTITIONS customer PARTITION (city =  'San Jose');


-- SHOW TABLE EXTENDED [ { IN | FROM } database_name ] LIKE regex_pattern
--     [ partition_spec ]

SHOW TABLE EXTENDED LIKE 'employee';

SHOW TABLE EXTENDED  LIKE 'employe*';

SHOW TABLE EXTENDED  IN default LIKE 'employee' PARTITION (grade=1);

SHOW TABLE EXTENDED  IN default LIKE 'empl*' PARTITION (grade=1);


-- SHOW TABLES [ { FROM | IN } database_name ] [ LIKE regex_pattern ]

SHOW TABLES;

SHOW TABLES FROM userdb;

SHOW TABLES IN userdb;

SHOW TABLES FROM default LIKE 'sam*';

SHOW TABLES LIKE 'sam*|suj';


-- SHOW TBLPROPERTIES table_identifier
--    [ ( unquoted_property_key | property_key_as_string_literal ) ]

SHOW TBLPROPERTIES customer;

SHOW TBLPROPERTIES salesdb.customer;

SHOW TBLPROPERTIES customer (created.by.user);

SHOW TBLPROPERTIES customer ('created.date');


-- SHOW VIEWS [ { FROM | IN } database_name ] [ LIKE regex_pattern ]

SHOW VIEWS;

SHOW VIEWS FROM userdb;

SHOW VIEWS IN global_temp;

SHOW VIEWS FROM default LIKE 'sam*';

SHOW VIEWS LIKE 'sam|suj|temp*';

-- SHOW MATERIALIZED VIEWS [ { FROM | IN } database_name ] [ LIKE? regex_pattern ];

SHOW MATERIALIZED VIEWS;

SHOW MATERIALIZED VIEWS IN userdb;

SHOW MATERIALIZED VIEWS FROM userdb;

SHOW MATERIALIZED VIEWS LIKE 'test_view1|test_view2';

SHOW MATERIALIZED VIEWS IN userdb LIKE 'test_view1|test_view2';

SHOW MATERIALIZED VIEWS FROM userdb LIKE 'test_view1|test_view2';

SHOW MATERIALIZED VIEWS "test_*";

SHOW MATERIALIZED VIEWS IN userdb "test_*";

-- SHOW CREATE MATERIALIZED VIEW view_identifier [ AS SERDE ];

SHOW CREATE MATERIALIZED VIEW mv;

SHOW CREATE MATERIALIZED VIEW userdb.mv;

SHOW CREATE MATERIALIZED VIEW mv AS SERDE;