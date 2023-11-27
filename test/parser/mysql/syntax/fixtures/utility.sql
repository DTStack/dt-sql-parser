/* https://dev.mysql.com/doc/refman/8.0/en/explain.html */

/* {EXPLAIN | DESCRIBE | DESC}
    tbl_name [col_name | wild]

{EXPLAIN | DESCRIBE | DESC}
    [explain_type]
    {explainable_stmt | FOR CONNECTION connection_id}

{EXPLAIN | DESCRIBE | DESC} ANALYZE [FORMAT = TREE] select_statement

explain_type: {
    EXTENDED
  | PARTITIONS
  | FORMAT = format_name
}

format_name: {
    TRADITIONAL
  | JSON
  | TREE
}

explainable_stmt: {
    SELECT statement
  | TABLE statement
  | DELETE statement
  | INSERT statement
  | REPLACE statement
  | UPDATE statement
} */


EXPLAIN t1 c1;
EXPLAIN t1 '%size%';
DESC t1 '%size%';
DESCRIBE t1;
DESC t1;

EXPLAIN SELECT * FROM t1;
DESCRIBE FOR CONNECTION 'connection_id';
DESCRIBE EXTENDED SELECT * FROM t1;
DESC EXTENDED FOR CONNECTION 'connection_id';
DESCRIBE PARTITIONS SELECT * FROM t1;
DESC PARTITIONS FOR CONNECTION 'connection_id';
DESC FORMAT = TRADITIONAL FOR CONNECTION 'connection_id';
DESC FORMAT = JSON FOR CONNECTION 'connection_id';
DESC FORMAT = TREE FOR CONNECTION 'connection_id';



/* https://dev.mysql.com/doc/refman/8.0/en/help.html */

HELP 'search_string';



/* https://dev.mysql.com/doc/refman/8.0/en/use.html */

USE db_name;
