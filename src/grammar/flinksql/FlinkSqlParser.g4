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
    (WHERE expression)?
    (GROUP BY groupItemDefinition (COMMA groupItemDefinition)*)
    (HAVING expression)?
    // (WINDOW windowName AS windowSpec (COMMA windowName AS windowSpec)*)?
    ;

projectItemDefinition
    : expression (AS? uid)? | uid '.' '*'
    ;

tableExpression
    : tableReference (COMMA tableReference)*
    | tableExpression NATURAL? (LEFT | RIGHT | FULL)? JOIN tableExpression joinCondition?
    ;

tableReference
    : tablePrimary matchRecognize? (AS? uid (LR_BRACKET uid (COMMA uid)* RR_BRACKET)?)?
    ;

matchRecognize
    :
    ;

tablePrimary
    : TABLE? uid dynamicTableOptions?
    | LATERAL TABLE LR_BRACKET uid LR_BRACKET expression (COMMA expression)* RR_BRACKET RR_BRACKET
    | UNNEST LR_BRACKET expression RR_BRACKET
    ;

dynamicTableOptions
    :
    ;

joinCondition
    : ON booleanExpression | USING LR_BRACKET uid (COMMA uid)* RR_BRACKET
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
    : expression (AS? uid)? | uid '.' '*'
    ;

queryOrderByDefinition
    : ORDER BY orderItemDefition (COMMA orderItemDefition)*
    ;

orderItemDefition
    : expression (ASC | DESC)
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

valuesRowDefinition
    : LR_BRACKET
        allValueDifinition (COMMA allValueDifinition)*
    RR_BRACKET
    ;

allValueDifinition
    : stringLiteral | booleanLiteral | DEC_DIGIT | NULL
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

expressions
    : expression (',' expression)*
    ;

//    Expressions, predicates

// Simplified approach for expression
expression
    : notOperator=(NOT | '!') expression                            #notExpression
    | expression logicalOperator expression                         #logicalExpression
    | predicate IS NOT? testValue=(TRUE | FALSE)                    #isExpression
    | predicate                                                     #predicateExpression
    ;

predicate
    : predicate NOT? IN '(' (selectStatement | expressions) ')'     #inPredicate
    | left=predicate comparisonOperator right=predicate             #binaryComparasionPredicate
    | predicate comparisonOperator
      quantifier=(ALL | ANY) '(' selectStatement ')'                #subqueryComparasionPredicate
    | predicate NOT? BETWEEN predicate AND predicate                #betweenPredicate
    | predicate NOT? LIKE predicate                                 #likePredicate
    | expressionAtom                                                #expressionAtomPredicate
    ;

expressionAtom
    : constant                                                      #constantExpressionAtom
    | fullColumnName                                                #fullColumnNameExpressionAtom
    | unaryOperator expressionAtom                                  #unaryExpressionAtom
    | BINARY expressionAtom                                         #binaryExpressionAtom
    | '(' expression (',' expression)* ')'                          #nestedExpressionAtom
    | ROW '(' expression (',' expression)+ ')'                      #nestedRowExpressionAtom
    | EXISTS '(' selectStatement ')'                                #existsExpessionAtom
    | '(' selectStatement ')'                                       #subqueryExpessionAtom
    | left=expressionAtom bitOperator right=expressionAtom          #bitExpressionAtom
    | left=expressionAtom mathOperator right=expressionAtom         #mathExpressionAtom
    ;

logicalOperator
    : AND | '&' '&' | OR | '|' '|'
    ;

comparisonOperator
    : '=' | '>' | '<' | '<' '=' | '>' '='
    | '<' '>' | '!' '=' | '<' '=' '>'
    ;
bitOperator
    : '<' '<' | '>' '>' | '&' | '^' | '|'
    ;

mathOperator
    : '*' | '/' | '%' | DIV | '+' | '-' | '--'
    ;

unaryOperator
    : '!' | '~' | '+' | '-' | NOT
    ;

fullColumnName
    : uid
    ;

constant
    : stringLiteral | decimalLiteral
    | '-' decimalLiteral
    | booleanLiteral
    | REAL_LITERAL | BIT_STRING
    | NOT? NULL
    ;

stringLiteral
    : STRING_LITERAL
    ;

decimalLiteral
    : DECIMAL_LITERAL | ZERO_DECIMAL | ONE_DECIMAL | TWO_DECIMAL
    ;

booleanLiteral
    : TRUE | FALSE;
