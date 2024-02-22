-- Syntax RENAME View
-- ALTER VIEW view_identifier RENAME TO view_identifier
ALTER VIEW tempdb1.v1 RENAME TO tempdb1.v2;


-- Syntax SET View Properties
-- ALTER VIEW view_identifier SET TBLPROPERTIES ( property_key = property_val [ , ... ] )
ALTER VIEW tempdb1.v2 SET TBLPROPERTIES ('created.by.user' = "John", 'created.date' = '01-01-2001' );


-- Syntax UNSET View Properties
-- ALTER VIEW view_identifier UNSET TBLPROPERTIES [ IF EXISTS ]  ( property_key [ , ... ] )
ALTER VIEW tempdb1.v2 UNSET TBLPROPERTIES IF EXISTS ('created.by.user', 'created.date');
ALTER VIEW tempdb1.v2 UNSET TBLPROPERTIES ('created.by.user', 'created.date');


-- Syntax ALTER View AS SELECT
-- ALTER VIEW view_identifier AS select_statement
ALTER VIEW tempdb1.v2 AS SELECT * FROM tempdb1.v1;



