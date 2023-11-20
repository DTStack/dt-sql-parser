-- https://dev.mysql.com/doc/refman/8.0/en/load-data.html

/* LOAD DATA
    [LOW_PRIORITY | CONCURRENT] [LOCAL]
    INFILE 'file_name'
    [REPLACE | IGNORE]
    INTO TABLE tbl_name
    [PARTITION (partition_name [, partition_name] ...)]
    [CHARACTER SET charset_name]
    [{FIELDS | COLUMNS}
        [TERMINATED BY 'string']
        [[OPTIONALLY] ENCLOSED BY 'char']
        [ESCAPED BY 'char']
    ]
    [LINES
        [STARTING BY 'string']
        [TERMINATED BY 'string']
    ]
    [IGNORE number {LINES | ROWS}]
    [(col_name_or_user_var
        [, col_name_or_user_var] ...)]
    [SET col_name={expr | DEFAULT}
        [, col_name={expr | DEFAULT}] ...] */


LOAD DATA LOW_PRIORITY LOCAL INFILE 'data.txt' REPLACE INTO TABLE db2.my_table PARTITION (partition_name, partition_name1) CHARACTER SET utf8mb4 COLUMNS TERMINATED BY ',' OPTIONALLY ENCLOSED BY 'char' ESCAPED BY 'char' LINES STARTING BY 'xxx' TERMINATED BY ',' IGNORE 1 ROWS (col_name_or_user_var) SET column2 = @var1/100;

LOAD DATA INFILE 'data.txt' INTO TABLE db2.my_table;
LOAD DATA INFILE '/tmp/test.txt' INTO TABLE test FIELDS TERMINATED BY ','  LINES STARTING BY 'xxx';
LOAD DATA INFILE '/tmp/test.txt' INTO TABLE test IGNORE 1 LINES;
LOAD DATA INFILE 'data.txt' INTO TABLE table2 FIELDS TERMINATED BY ',';
LOAD DATA INFILE 'data.txt' INTO TABLE table2 FIELDS TERMINATED BY '\t';
LOAD DATA INFILE 'data.txt' INTO TABLE tbl_name FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r\n' IGNORE 1 LINES;
LOAD DATA INFILE '/tmp/jokes.txt' INTO TABLE jokes FIELDS TERMINATED BY '' LINES TERMINATED BY '\n%%\n' (joke);
LOAD DATA INFILE 'person_data.txt' INTO TABLE person_data;
LOAD DATA INFILE 'person_data.txt' INTO TABLE person_data (col_name_or_user_var, col_name_or_user_var1);
LOAD DATA INFILE 'file.txt' INTO TABLE t1 (column1, @var1) SET column2 = @var1/100;
LOAD DATA INFILE 'file.txt' INTO TABLE t1 (column1, column2) SET column3 = CURRENT_TIMESTAMP;
LOAD DATA INFILE 'file.txt' INTO TABLE t1 (column1, @dummy, column2, @dummy, column3);
LOAD DATA INFILE '/tmp/bit_test.txt' INTO TABLE bit_test (@var1) SET b = CAST(CONV(MID(@var1, 3, LENGTH(@var1)-3), 2, 10) AS UNSIGNED);
