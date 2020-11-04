grammar FlinkSqlParser;

options { tokenVocab=FlinkSqlLexer; }

program: statement EOF;

statement
    : sqlStatements EOF
    ;

sqlStatements
    : (sqlStatement SEMICOLON | emptyStatement)*
    ;

sqlStatement
    : ddlStatement | dmlStatement
    ;

emptyStatement
    : SEMICOLON
    ;

ddlStatement
    : createTable | createDatabase | createView | createFunction
    | alterTable | alterDatabase | alterFunction
    | dropTable | dropDatabase | dropView | dropFunction
    ;

dmlStatement
    : queryStatement | insertStatement
    ;


// Create statements

createTable
    : CREATE TABLE uid
    LR_BRACKET 
        columnOptionDefinition (COMMA columnOptionDefinition)*
    RR_BRACKET
    partitionDefinition?
    withOption
    ;

columnOptionDefinition
    : columnName columnType
    ;

columnName
    : ID
    ;

columnType
    : CHAR | VARCHAR | STRING | BINARY | VARBINARY | BYTES
    | DECIMAL | TINYINT | SMALLINT | INT | BIGINT | FLOAT | DOUBLE
    | DATE | TIME | TIMESTAMP
    | ARRAY | MAP | MULTISET | ROW
    | BOOLEAN | RAW | NULL
    ;

partitionDefinition
    : PARTITIONED BY partitionColumnDefinition
    ;

partitionColumnDefinition
    : partitionColumnName (COMMA partitionColumnName)*
    ;

partitionColumnName
    : ID
    ;

createDatabase
    : CREATE DATABASE ifNotExists? uid withOption
    ;

createView
    : CREATE TEMPORARY? VIEW ifNotExists? uid AS selectStatement
    ;

createFunction
    :
    ;

// Alter statements

alterTable
    : ALTER TABLE uid (renameDefinition | setKeyValueDefinition)
    ;

renameDefinition
    : RENAME TO uid
    ;

setKeyValueDefinition
    : SET LR_BRACKET
        keyValueDefinition (COMMA keyValueDefinition)*
    RR_BRACKET
    ;

alterDatabase
    : ALTER DATABASE uid setKeyValueDefinition
    ;

alterFunction
    :
    ;


// Drop statements

dropTable
    : DROP TABLE ifExists? uid
    ;

dropDatabase
    : DROP DATABASE ifExists? uid dropType=(RESTRICT | CASCADE)?
    ;

dropView
    : DROP TEMPORARY? VIEW ifExists? uid
    ;

dropFunction
    : DROP (TEMPORARY|TEMPORARY SYSTEM)? FUNCTION ifExists? uid
    ;


// Select statements

queryStatement
    : valuesDefinition
    | (
        selectStatement
        | selectWithoutFromDefinition
        // | queryStatement UNION ALL? queryStatement
        // | queryStatement EXCEPT queryStatement
        // | queryStatement INTERSECT queryStatement
    ) queryOrderByDefinition? queryLimitDefinition? queryOffsetDefinition? queryFetchDefinition?
    ;

selectStatement
    : SELECT (ALL | DISTINCT)? 
    (ASTERISK_SIGN | projectItemDefinition (COMMA projectItemDefinition)*)
    FROM tableExpression
    ;

projectItemDefinition // expression (AS? columnAlias)? | tableAlias . *
    :
    ;

tableExpression
    :
    ;

selectWithoutFromDefinition
    : 
    ;

queryOrderByDefinition
    : ORDER BY orderItemDefition (COMMA orderItemDefition)*
    ;

orderItemDefition // expression (ASC | DESC)?
    : 
    ;

queryLimitDefinition
    : LIMIT (countDefinition | ALL)
    ;

countDefinition
    :
    ;

queryOffsetDefinition // OFFSET start (ROW | ROWS)
    :
    ;

queryFetchDefinition // FETCH (FIRST | NEXT) countDefinition? (ROW | ROWS) ONLY
    :
    ;


// Insert statements

insertStatement
    : INSERT (INTO | OVERWRITE) uid
    (
        insertPartitionDefinition? selectStatement
        | valuesDefinition
    )
    ;

insertPartitionDefinition
    : PARTITION LR_BRACKET
        keyValueDefinition (COMMA keyValueDefinition)*
    RR_BRACKET
    ;

valuesDefinition
    : VALUES valuesRowDefinition (COMMA valuesRowDefinition)*
    ;

// TODO 匹配所有的值 任意value 即：(val1 [, val2, ...])
valuesRowDefinition
    : LR_BRACKET
        .*?
    RR_BRACKET
    ;

// base common

uidList
    : uid (',' uid)*
    ;

uid
    : ID (DOT_ID)*?
    ;

withOption
    : WITH LR_BRACKET
        keyValueDefinition (COMMA keyValueDefinition)*
    RR_BRACKET
    ;

ifNotExists
    : IF NOT EXISTS;

ifExists
    : IF EXISTS;

keyValueDefinition
    : DOUBLE_QUOTE_ID EQUAL_SYMBOL DOUBLE_QUOTE_ID
    ;