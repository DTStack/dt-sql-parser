-- https://dev.mysql.com/doc/refman/8.0/en/handler.html

/* HANDLER tbl_name OPEN [ [AS] alias]

HANDLER tbl_name READ index_name { = | <= | >= | < | > } (value1,value2,...)
    [ WHERE where_condition ] [LIMIT ... ]

HANDLER tbl_name READ index_name { FIRST | NEXT | PREV | LAST }
    [ WHERE where_condition ] [LIMIT ... ]

HANDLER tbl_name READ { FIRST | NEXT }
    [ WHERE where_condition ] [LIMIT ... ]

HANDLER tbl_name CLOSE */



HANDLER tbl_name OPEN AS tbl_name1;
HANDLER tbl_name OPEN;

HANDLER tbl_name READ index_name = ('value1', 'value2');
HANDLER tbl_name READ index_name = ('value1', 'value2') WHERE name = 'Tony' LIMIT 10;
HANDLER tbl_name READ index_name <= ('value1', 'value2') WHERE name = 'Tony' LIMIT 10;
HANDLER tbl_name READ index_name >= ('value1', 'value2') WHERE name = 'Tony' LIMIT 10;
HANDLER tbl_name READ index_name < ('value1', 'value2') WHERE name = 'Tony' LIMIT 10;
HANDLER tbl_name READ index_name > ('value1', 'value2') WHERE name = 'Tony' LIMIT 10;

HANDLER tbl_name READ index_name = ('value1', 'value2') WHERE name = 'Tony';
HANDLER tbl_name READ index_name <= ('value1', 'value2') WHERE name = 'Tony';
HANDLER tbl_name READ index_name >= ('value1', 'value2') WHERE name = 'Tony';
HANDLER tbl_name READ index_name < ('value1', 'value2') WHERE name = 'Tony';
HANDLER tbl_name READ index_name > ('value1', 'value2') WHERE name = 'Tony';

HANDLER tbl_name READ index_name FIRST WHERE name = 'Tony' LIMIT 10;
HANDLER tbl_name READ index_name NEXT WHERE name = 'Tony' LIMIT 10;
HANDLER tbl_name READ index_name PREV WHERE name = 'Tony' LIMIT 10;
HANDLER tbl_name READ index_name LAST WHERE name = 'Tony' LIMIT 10;

HANDLER tbl_name READ index_name FIRST WHERE name = 'Tony';
HANDLER tbl_name READ index_name NEXT WHERE name = 'Tony';
HANDLER tbl_name READ index_name PREV WHERE name = 'Tony';
HANDLER tbl_name READ index_name LAST WHERE name = 'Tony';

HANDLER tbl_name READ index_name FIRST;
HANDLER tbl_name READ index_name NEXT;
HANDLER tbl_name READ index_name PREV;
HANDLER tbl_name READ index_name LAST;

HANDLER tbl_name READ FIRST;
HANDLER tbl_name READ NEXT;

HANDLER tbl_name CLOSE;
