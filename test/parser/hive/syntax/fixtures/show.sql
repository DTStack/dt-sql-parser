-- Show Databases
SHOW SCHEMAS;

SHOW DATABASES LIKE 'identifier_with_wildcards';

-- Show Connectors
SHOW CONNECTORS;

-- Show Tables
SHOW TABLES;

SHOW TABLES IN db1 'identifier_with_wildcards';

-- Show Views
SHOW VIEWS;

SHOW VIEWS FROM schema1 LIKE 'pattern_with_wildcards';

SHOW MATERIALIZED VIEWS IN database2 LIKE 'pattern_with_wildcards';

-- Show Partitions
SHOW PARTITIONS tbl1;

SHOW PARTITIONS table_name PARTITION(ds='2010-03-03', hr='12');

SHOW PARTITIONS databaseFoo.tableBar WHERE hr >= 10 AND ds='2010-03-03' ORDER BY hr DESC LIMIT 10;  

-- Show Table/Partition Extended
SHOW TABLE EXTENDED LIKE part_table;

SHOW TABLE EXTENDED IN database3 LIKE 'identifier_with_wildcards' PARTITION(ds='2010-03-03', hr='12');

-- Show Table Properties
SHOW TBLPROPERTIES tblname;

SHOW TBLPROPERTIES tblname("foo");

-- Show Create Table
SHOW CREATE TABLE db.tbl1;

-- Show Indexes
SHOW INDEX ON idx_tbl;

SHOW FORMATTED INDEXES ON idx_tbl2 FROM db_1;

-- Show Columns
SHOW COLUMNS FROM tble;

SHOW COLUMNS IN table_name FROM db_1 LIKE 'pattern_with_wildcards';

-- Show Functions
SHOW FUNCTIONS;

SHOW FUNCTIONS LIKE "<pattern>";

-- Show Locks
SHOW LOCKS tbl1;

SHOW LOCKS tbl2 EXTENDED;

SHOW LOCKS tbl3 PARTITION (ds='2010-03-03', hr='12');

SHOW LOCKS tbl4 PARTITION (ds='2010-03-03', hr='12') EXTENDED;

SHOW LOCKS DATABASE db1; 

-- Show Conf
SHOW CONF 'conf1';

-- Show Transactions
SHOW TRANSACTIONS;

-- Show Compactions
SHOW COMPACTIONS;

SHOW COMPACTIONS DATABASE db1;

SHOW COMPACTIONS tbl0;

SHOW COMPACTIONS db1.tbl0 
PARTITION (p=101,day='Monday') 
POOL 'pool0' 
TYPE 'minor' 
STATUS 'ready for clean' 
ORDER BY cq_table DESC, cq_state
LIMIT 42;

-- Show Roles
SHOW ROLES;

SHOW CURRENT ROLES;

-- Show Role Grant
SHOW ROLE GRANT USER user1;

SHOW ROLE GRANT ROLE `role`;

-- Show Principals
SHOW PRINCIPALS role1;

-- Show Grant
SHOW GRANT USER ashutosh ON TABLE hivejiratable;

SHOW GRANT ROLE role1 ON ALL; 

SHOW GRANT ON TABLE hivejiratable;



