parser grammar FlinkSqlParser;

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
    : selectStatement | insertStatement
    ;

createTable
    : CREATE TABLE tableName
    LR_BRACKET 
        columnOptionDefinition (COMMA columnOptionDefinition)*
    RR_BRACKET
    partitionDefinition?
    WITH LR_BRACKET
        withOptionDefinition (COMMA withOptionDefinition)*
    RR_BRACKET
    ;


tableName
    : ID (DOT_ID)*?
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

withOptionDefinition
    : REVERSE_QUOTE_ID EQUAL_SYMBOL REVERSE_QUOTE_ID
    ;

createDatabase
    :
    ;

createView
    :
    ;

createFunction
    :
    ;

alterTable
    :
    ;

alterDatabase
    :
    ;

alterFunction
    :
    ;

dropTable
    :
    ;

dropDatabase
    :
    ;

dropView
    :
    ;

dropFunction
    :
    ;

selectStatement
    :
    ;

insertStatement
    :
    ;