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
    : valuesDefinition | selectStatements queryOrderByDefinition? queryLimitDefinition? queryOffsetDefinition? queryFetchDefinition?
    ;

selectStatements
    : selectStatement
    | selectWithoutFromDefinition
    // | queryStatement UNION ALL? queryStatement
    // | queryStatement EXCEPT queryStatement
    // | queryStatement INTERSECT queryStatement
    ;

selectStatement
    : SELECT (ALL | DISTINCT)? 
    (ASTERISK_SIGN | projectItemDefinition (COMMA projectItemDefinition)*)
    FROM tableExpression
    (WHERE booleanExpression)?
    (GROUP BY groupItemDefinition (COMMA groupItemDefinition)*)
    (HAVING booleanExpression)?
    // (WINDOW windowName AS windowSpec (COMMA windowName AS windowSpec)*)?
    ;

projectItemDefinition // expression (AS? columnAlias)? | tableAlias . *
    :
    ;

tableExpression
    : tableReference (COMMA tableReference)*
    | tableExpression NATURAL? (LEFT | RIGHT | FULL)? JOIN tableExpression joinCondition?
    ;

tableReference
    : // tablePrimary matchRecognize? (AS? alias (LR_BRACKET columnAlias (COMMA columnAlias)* RR_BRACKET)?)?
    ;

// tablePrimary
//     : TABLE? uid dynamicTableOptions?
//     | LATERAL TABLE LR_BRACKET uid LR_BRACKET expression (COMMA expression)* RR_BRACKET RR_BRACKET
//     | UNNEST LR_BRACKET expression RR_BRACKET
//     ;


joinCondition // ON booleanExpression | USING LR_BRACKET column (COMMA column)* RR_BRACKET
    :
    ;

booleanExpression
    :
    ;

groupItemDefinition
    : expression
    | LR_BRACKET RR_BRACKET
    | LR_BRACKET expression (COMMA expression)* RR_BRACKET
    | CUBE LR_BRACKET expression (COMMA expression)* RR_BRACKET
    | ROLLUP LR_BRACKET expression (COMMA expression)* RR_BRACKET
    | GROUPING SETS LR_BRACKET groupItemDefinition (COMMA groupItemDefinition)* RR_BRACKET
    ;

// windowRef
//     : windowName | windowSpec
//     ;

// windowSpec
//     : windowName 
//     LR_BRACKET
//         (ORDER BY orderItem (COMMA orderItem)*)?
//         (PARTITION BY expression (COMMA expression)*)
//         (
//             RANGE numericOrIntervalExpression PRECEDING
//             | ROWS numericExpression PRECEDING
//         )?
//     RR_BRACKET
//     ;

selectWithoutFromDefinition
    : SELECT (ALL | DISTINCT)? (ASTERISK_SIGN | projectItem (COMMA projectItem)*)
    ;

projectItem
    : // expression (AS? columnAlias)? | tableAlias . *
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

expression
    :
    ;