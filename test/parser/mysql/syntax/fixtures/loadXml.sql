-- https://dev.mysql.com/doc/refman/8.0/en/load-xml.html

/* LOAD XML
    [LOW_PRIORITY | CONCURRENT] [LOCAL]
    INFILE 'file_name'
    [REPLACE | IGNORE]
    INTO TABLE [db_name.]tbl_name
    [CHARACTER SET charset_name]
    [ROWS IDENTIFIED BY '<tagname>']
    [IGNORE number {LINES | ROWS}]
    [(field_name_or_user_var
        [, field_name_or_user_var] ...)]
    [SET col_name={expr | DEFAULT}
        [, col_name={expr | DEFAULT}] ...] */

LOAD XML LOW_PRIORITY LOCAL INFILE 'person.xml' REPLACE INTO TABLE db_name.person CHARACTER SET utf8mb4 ROWS IDENTIFIED BY '<person>' IGNORE 1 LINES (field_name_or_user_var, field_name_or_user_var1) SET column2 = @var1/100;
LOAD XML CONCURRENT INFILE 'person.xml' IGNORE INTO TABLE db_name.person CHARACTER SET utf8mb4 ROWS IDENTIFIED BY '<person>' IGNORE 1 ROWS (field_name_or_user_var, field_name_or_user_var1) SET column2 = @var1/100;

LOAD XML LOCAL INFILE 'person.xml' INTO TABLE db_name.person ROWS IDENTIFIED BY '<person>';
LOAD XML LOCAL INFILE 'person-dump.xml' INTO TABLE person2;
LOAD XML INFILE '../bin/person-dump.xml' INTO TABLE test.individual;






(SELECT 1 AS result UNION SELECT 2)
       ORDER BY result DESC LIMIT 1 OFFSET 1;
