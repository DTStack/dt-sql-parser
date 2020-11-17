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


// Select statements

queryStatement
    : 
    ;

selectStatement
    : SELECT setQuantifier?
    (ASTERISK_SIGN | projectItemDefinition (COMMA projectItemDefinition)*)
    FROM tableExpression
    ;

projectItemDefinition
    : expression (AS? uid)? | uid '.' '*'
    ;

tableExpression
    : tableReference (COMMA tableReference)*
    ;

tableReference
    : tablePrimary tableAlias
    ;

tablePrimary
    : TABLE? uid 
    ;

// expression

expression
    : booleanExpression
    ;

booleanExpression
    : NOT booleanExpression                                        #logicalNot
    // | EXISTS '(' query ')'                                         #exists
    | valueExpression predicate?                                   #predicated
    | left=booleanExpression operator=AND right=booleanExpression  #logicalBinary
    | left=booleanExpression operator=OR right=booleanExpression   #logicalBinary
    ;

predicate
    : NOT? kind=BETWEEN lower=valueExpression AND upper=valueExpression
    | NOT? kind=IN '(' expression (',' expression)* ')'
    // | NOT? kind=IN '(' query ')'
    | NOT? kind=RLIKE pattern=valueExpression
    | NOT? kind=LIKE quantifier=(ANY | ALL) ('('')' | '(' expression (',' expression)* ')')
    | NOT? kind=LIKE pattern=valueExpression
    | IS NOT? kind=NULL
    | IS NOT? kind=(TRUE | FALSE)
    | IS NOT? kind=DISTINCT FROM right=valueExpression
    ;

valueExpression
    : primaryExpression                                                                      #valueExpressionDefault
    | operator=(MINUS | PLUS | TILDE) valueExpression                                        #arithmeticUnary
    | left=valueExpression operator=(ASTERISK | SLASH | PERCENT | DIV) right=valueExpression #arithmeticBinary
    | left=valueExpression operator=(PLUS | MINUS | CONCAT_PIPE) right=valueExpression       #arithmeticBinary
    | left=valueExpression operator=AMPERSAND right=valueExpression                          #arithmeticBinary
    | left=valueExpression operator=HAT right=valueExpression                                #arithmeticBinary
    | left=valueExpression operator=PIPE right=valueExpression                               #arithmeticBinary
    | left=valueExpression comparisonOperator right=valueExpression                          #comparison
    ;

primaryExpression
    : CASE whenClause+ (ELSE elseExpression=expression)? END                                   #searchedCase
    | CASE value=expression whenClause+ (ELSE elseExpression=expression)? END                  #simpleCase
    // | CAST '(' expression AS dataType ')'                                                      #cast
    // | STRUCT '(' (argument+=namedExpression (',' argument+=namedExpression)*)? ')'             #struct
    | FIRST '(' expression (IGNORE NULLS)? ')'                                                 #first
    | LAST '(' expression (IGNORE NULLS)? ')'                                                  #last
    | POSITION '(' substr=valueExpression IN str=valueExpression ')'                           #position
    | constant                                                                                 #constantDefault
    | ASTERISK                                                                                 #star
    // | qualifiedName '.' ASTERISK                                                               #star
    // | '(' namedExpression (',' namedExpression)+ ')'                                           #rowConstructor
    // | '(' query ')'                                                                            #subqueryExpression
    // | functionName '(' (setQuantifier? argument+=expression (',' argument+=expression)*)? ')'
    //    (FILTER '(' WHERE where=booleanExpression ')')? (OVER windowSpec)?                      #functionCall
    // | identifier '->' expression                                                               #lambda
    // | '(' identifier (',' identifier)+ ')' '->' expression                                     #lambda
    | value=primaryExpression LS_BRACKET index=valueExpression RS_BRACKET                                   #subscript
    // | identifier                                                                               #columnReference
    // | base=primaryExpression '.' fieldName=identifier                                          #dereference
    | '(' expression ')'                                                                       #parenthesizedExpression
    // | EXTRACT '(' field=identifier FROM source=valueExpression ')'                             #extract
    // | (SUBSTR | SUBSTRING) '(' str=valueExpression (FROM | ',') pos=valueExpression
    //   ((FOR | ',') len=valueExpression)? ')'                                                   #substring
    // | TRIM '(' trimOption=(BOTH | LEADING | TRAILING)? (trimStr=valueExpression)?
    //    FROM srcStr=valueExpression ')'                                                         #trim
    // | OVERLAY '(' input=valueExpression PLACING replace=valueExpression
    //   FROM position=valueExpression (FOR length=valueExpression)? ')'                          #overlay
    ;


// base common

tableAlias
    : (AS? strictIdentifier identifierList?)?
    ;

identifierList
    : '(' identifierSeq ')'
    ;

identifierSeq
    : identifier (COMMA identifier)*
    ;

identifier
    : strictIdentifier
    ;

strictIdentifier
    : IDENTIFIER_BASE              #unquotedIdentifier
    | quotedIdentifier        #quotedIdentifierAlternative
    ;

quotedIdentifier
    : STRING_LITERAL
    ;

whenClause
    : WHEN condition=expression THEN result=expression
    ;

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
    : stringLiteral                                             // 引号包含的字符串
    | decimalLiteral                                            // 整数
    | '-' decimalLiteral                                        // 负整数
    | booleanLiteral                                            // 布尔值
    | REAL_LITERAL                                              // 小数
    | BIT_STRING
    | NOT? NULL                                                 // 空 | 非空
    ;

stringLiteral
    : STRING_LITERAL
    ;

decimalLiteral
    : DECIMAL_LITERAL | ZERO_DECIMAL | ONE_DECIMAL | TWO_DECIMAL
    ;

booleanLiteral
    : TRUE | FALSE;

setQuantifier
    : DISTINCT
    | ALL
    ;
