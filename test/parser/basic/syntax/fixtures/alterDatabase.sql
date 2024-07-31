-- Syntax ALTER PROPERTIES
-- ALTER { DATABASE | SCHEMA | NAMESPACE } database_name SET { DBPROPERTIES | PROPERTIES } ( property_name = property_value [ , ... ] )

ALTER DATABASE inventory SET DBPROPERTIES ('Edited-by' = 'John', 'Edit-date' = '01/01/2001');
ALTER DATABASE inventory SET PROPERTIES ('Edited-by' = 'John', 'Edit-date' = '01/01/2001');


-- Syntax ALTER LOCATION
-- ALTER { DATABASE | SCHEMA | NAMESPACE } database_name SET LOCATION 'new_location'

ALTER DATABASE inventory SET LOCATION 'file:/temp/spark-warehouse/new_inventory.db';
ALTER SCHEMA inventory SET LOCATION 'file:/temp/spark-warehouse/new_inventory.db';
ALTER NAMESPACE inventory SET LOCATION 'file:/temp/spark-warehouse/new_inventory.db';
