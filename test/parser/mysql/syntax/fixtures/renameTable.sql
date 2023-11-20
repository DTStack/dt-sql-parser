-- https://dev.mysql.com/doc/refman/8.0/en/rename-table.html

/* RENAME TABLE
    tbl_name TO new_tbl_name
    [, tbl_name2 TO new_tbl_name2] ... */


RENAME TABLE tbl_name TO new_tbl_name, tbl_name1 TO new_tbl_name1;
RENAME TABLE tbl_name TO new_tbl_name;

RENAME TABLE old_table TO tmp_table,
             new_table TO old_table,
             tmp_table TO new_table;

RENAME TABLE current_db.tbl_name TO other_db.tbl_name;
