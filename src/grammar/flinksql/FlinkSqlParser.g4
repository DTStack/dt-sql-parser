parser grammar FlinkSqlParser;

options { tokenVocab=FlinkSqlLexer; }

program: statement EOF;

statement
    : sqlStatements EOF
    ;

sqlStatements
    : (sqlStatement SEMICOLON? | emptyStatement)*
    ;

sqlStatement
    : ddlStatement | dmlStatement | describeStatement | explainStatement | useStatement | showStatememt
    ;

emptyStatement
    : SEMICOLON
    ;

ddlStatement
    : createTable | createDatabase | createView | createFunction | createCatalog
    | alterTable | alterDatabase | alterFunction
    | dropTable | dropDatabase | dropView | dropFunction
    ;

dmlStatement
    : queryStatement | insertStatement
    ;

describeStatement
    : DESCRIBE uid
    ;

explainStatement
    : EXPLAIN identifier FOR dmlStatement
    ;

useStatement
    : USE CATALOG? uid
    ;

showStatememt
    : SHOW (CATALOGS | DATABASES | TABLES | FUNCTIONS | VIEWS)
    ;


// Create statements

createTable
    : CREATE TABLE uid
    LR_BRACKET 
        columnOptionDefinition (COMMA columnOptionDefinition)*
        (COMMA watermarkDefinition)?
        (COMMA tableConstraint)?
        (COMMA selfDefinitionClause)?
    RR_BRACKET
    commentSpec?
    partitionDefinition?
    withOption
    likeDefinition?
    ;

columnOptionDefinition
    : columnName columnType lengthOneDimension? columnAlias?
    ;

columnName
    : plusUid | expression
    ;

columnNameList
    : columnName (',' columnName)*
    ;

columnType
    : typeName=(CHAR | VARCHAR | STRING | BINARY | VARBINARY | BYTES
    | DECIMAL | TINYINT | SMALLINT | INT | BIGINT | FLOAT | DOUBLE
    | DATE | TIME | TIMESTAMP
    | ARRAY | MAP | MULTISET | ROW
    | BOOLEAN | RAW | NULL
    | DATETIME)
    ;

lengthOneDimension
    : '(' decimalLiteral ')'
    ;

commentSpec
    : COMMENT STRING_LITERAL
    ;

watermarkDefinition
    : WATERMARK FOR expression AS expression
    ;

tableConstraint
    : (CONSTRAINT identifier)? PRIMARY KEY '(' columnNameList ')'
    ;

selfDefinitionClause // 数栈自定义语句 ‘PERIOD FOR SYSTEM_TIME’
    : PERIOD FOR SYSTEM_TIME
    ;

partitionDefinition
    : PARTITIONED BY transformList
    ;

transformList
    : '(' transform (',' transform)* ')'
    ;

transform
    : qualifiedName                                                           #identityTransform
    | transformName=identifier
      '(' transformArgument (',' transformArgument)* ')'  #applyTransform
    ;

transformArgument
    : qualifiedName
    | constant
    ;

likeDefinition
    : LIKE identifier likeOption
    ;

likeOption
    : (INCLUDING | EXCLUDING) (ALL | CONSTRAINTS)
    | (INCLUDING | EXCLUDING) (GENERATED | OPTIONS)
    ;

createCatalog
    : CREATE CATALOG uid withOption
    ;

createDatabase
    : CREATE DATABASE ifNotExists? uid commentSpec? withOption
    ;

createView
    : CREATE TEMPORARY? VIEW ifNotExists? uid columnNameList? commentSpec? AS queryStatement
    ;

createFunction
    : CREATE (TEMPORARY|TEMPORARY SYSTEM) FUNCTION ifNotExists? uid AS identifier (LANGUAGE identifier)?
    ;

// Alter statements

alterTable
    : ALTER TABLE uid (renameDefinition | setKeyValueDefinition)
    ;

renameDefinition
    : RENAME TO uid
    ;

setKeyValueDefinition
    : SET tablePropertyList
    ;

alterDatabase
    : ALTER DATABASE uid setKeyValueDefinition
    ;

alterFunction
    : ALTER (TEMPORARY|TEMPORARY SYSTEM) FUNCTION ifExists? uid AS identifier (LANGUAGE identifier)? 
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
        insertPartitionDefinition? queryStatement
        | valuesDefinition
    )
    ;

insertPartitionDefinition
    : PARTITION tablePropertyList
    ;

valuesDefinition
    : VALUES valuesRowDefinition (COMMA valuesRowDefinition)*
    ;

valuesRowDefinition
    : LR_BRACKET
        constant (COMMA constant)*
    RR_BRACKET
    ;


// Select statements

queryStatement
    : valuesCaluse
    | '(' queryStatement ')'
    | left=queryStatement operator=(INTERSECT | UNION | EXCEPT) ALL? right=queryStatement orderByCaluse? limitClause?
    | selectClause orderByCaluse? limitClause?
    | selectStatement orderByCaluse? limitClause?
    ;

valuesCaluse
    : VALUES expression (COMMA expression )*
    ;

selectStatement
    : selectClause fromClause whereClause? groupByClause? havingClause? windowClause?
    ;

selectClause
    : SELECT setQuantifier? (ASTERISK_SIGN | projectItemDefinition (COMMA projectItemDefinition)*)
    ;

projectItemDefinition
    : expression (AS? uid)?
    ;

fromClause
    : FROM tableExpression
    ;

tableExpression
    : tableReference (COMMA tableReference)*
    | tableExpression NATURAL? (LEFT | RIGHT | FULL)? JOIN tableExpression joinCondition?
    ;

tableReference
    : tablePrimary tableAlias?
    ;

tablePrimary
    : TABLE? expression
    | LATERAL TABLE LR_BRACKET uid LR_BRACKET expression (COMMA expression)* RR_BRACKET RR_BRACKET
    | UNNEST LR_BRACKET expression RR_BRACKET
    ;

joinCondition
    : ON booleanExpression
    | USING LR_BRACKET uid (COMMA uid)* RR_BRACKET
    ;

whereClause
    : WHERE booleanExpression
    ;

groupByClause
    : GROUP BY groupItemDefinition (COMMA groupItemDefinition)*
    ;

groupItemDefinition
    : expression
    | LR_BRACKET RR_BRACKET
    | LR_BRACKET expression (COMMA expression)* RR_BRACKET
    | CUBE LR_BRACKET expression (COMMA expression)* RR_BRACKET
    | ROLLUP LR_BRACKET expression (COMMA expression)* RR_BRACKET
    | GROUPING SETS LR_BRACKET groupItemDefinition (COMMA groupItemDefinition)* RR_BRACKET
    ;

havingClause
    : HAVING booleanExpression
    ;

orderByCaluse
    : ORDER BY orderItemDefition (COMMA orderItemDefition)*
    ;

orderItemDefition
    : expression (ASC | DESC)?
    ;

limitClause
    : LIMIT (ALL | limit=expression)
    ;

windowClause
    : WINDOW namedWindow (',' namedWindow)*
    ;

namedWindow
    : name=errorCapturingIdentifier AS windowSpec
    ;

windowSpec
    : name=errorCapturingIdentifier?
    '('
        (ORDER BY sortItem (',' sortItem)*)?
        (PARTITION BY expression (',' expression)*)?
        windowFrame?
    ')'
    ;

sortItem
    : expression ordering=(ASC | DESC)? (NULLS nullOrder=(LAST | FIRST))?
    ;

windowFrame
    : RANGE frameBound
    | ROWS frameBound
    ;

frameBound
    : expression PRECEDING
    ;


// expression

expression
    : booleanExpression
    ;

booleanExpression
    : NOT booleanExpression                                        #logicalNot
    | EXISTS '(' queryStatement ')'                                         #exists
    | valueExpression predicate?                                   #predicated
    | left=booleanExpression operator=AND right=booleanExpression  #logicalBinary
    | left=booleanExpression operator=OR right=booleanExpression   #logicalBinary
    ;

predicate
    : NOT? kind=BETWEEN lower=valueExpression AND upper=valueExpression
    | NOT? kind=IN '(' expression (',' expression)* ')'
    | NOT? kind=IN '(' queryStatement ')'
    | kind=EXISTS '(' queryStatement ')'
    | NOT? kind=RLIKE pattern=valueExpression
    | NOT? kind=LIKE quantifier=(ANY | ALL) ('('')' | '(' expression (',' expression)* ')')
    | NOT? kind=LIKE pattern=valueExpression
    | IS NOT? kind=NULL
    | IS NOT? kind=(TRUE | FALSE)
    | IS NOT? kind=DISTINCT FROM right=valueExpression
    ;

valueExpression
    : primaryExpression                                                                      #valueExpressionDefault
    | operator=('-' | '+' | '~') valueExpression                                        #arithmeticUnary
    | left=valueExpression operator=('*' | '/' | '%' | DIV) right=valueExpression #arithmeticBinary
    | left=valueExpression operator=('+' | '-' | DOUBLE_VERTICAL_SIGN) right=valueExpression       #arithmeticBinary
    | left=valueExpression operator='&' right=valueExpression                          #arithmeticBinary
    | left=valueExpression operator='^' right=valueExpression                                #arithmeticBinary
    | left=valueExpression operator='|' right=valueExpression                               #arithmeticBinary
    | left=valueExpression comparisonOperator right=valueExpression                          #comparison
    ;

primaryExpression
    : CASE whenClause+ (ELSE elseExpression=expression)? END                                   #searchedCase
    | CASE value=expression whenClause+ (ELSE elseExpression=expression)? END                  #simpleCase
    | CAST '(' expression AS columnType ')'                                                      #cast
    // | STRUCT '(' (argument+=namedExpression (',' argument+=namedExpression)*)? ')'             #struct
    | FIRST '(' expression (IGNORE NULLS)? ')'                                                 #first
    | LAST '(' expression (IGNORE NULLS)? ')'                                                  #last
    | POSITION '(' substr=valueExpression IN str=valueExpression ')'                           #position
    | constant                                                                                 #constantDefault
    | '*'                                                                                 #star
    | uid '.' '*'                                                                #star
    // | '(' namedExpression (',' namedExpression)+ ')'                                           #rowConstructor
    | '(' queryStatement ')'                                                                            #subqueryExpression
    | functionName '(' (setQuantifier? expression (',' expression)*)? ')'                      #functionCall
    // | identifier '->' expression                                                               #lambda
    // | '(' identifier (',' identifier)+ ')' '->' expression                                     #lambda
    | value=primaryExpression LS_BRACKET index=valueExpression RS_BRACKET                                   #subscript
    | identifier                                                                               #columnReference
    | dereferenceDefinition                                                                                      #dereference
    | '(' expression ')'                                                                       #parenthesizedExpression
    // | EXTRACT '(' field=identifier FROM source=valueExpression ')'                             #extract
    // | (SUBSTR | SUBSTRING) '(' str=valueExpression (FROM | ',') pos=valueExpression
    //   ((FOR | ',') len=valueExpression)? ')'                                                   #substring
    // | TRIM '(' trimOption=(BOTH | LEADING | TRAILING)? (trimStr=valueExpression)?
    //    FROM srcStr=valueExpression ')'                                                         #trim
    // | OVERLAY '(' input=valueExpression PLACING replace=valueExpression
    //   FROM position=valueExpression (FOR length=valueExpression)? ')'                          #overlay
    ;

functionName
    : uid
    ;

dereferenceDefinition
    : uid
    ;


// base common

qualifiedName
    : identifier | dereferenceDefinition
    ;

interval
    : INTERVAL (errorCapturingMultiUnitsInterval | errorCapturingUnitToUnitInterval)?
    ;

errorCapturingMultiUnitsInterval
    : multiUnitsInterval unitToUnitInterval?
    ;

multiUnitsInterval
    : (intervalValue identifier)+
    ;

errorCapturingUnitToUnitInterval
    : body=unitToUnitInterval (error1=multiUnitsInterval | error2=unitToUnitInterval)?
    ;

unitToUnitInterval
    : value=intervalValue from=identifier TO to=identifier
    ;

intervalValue
    : ('+' | '-')? (DIG_LITERAL | REAL_LITERAL)
    | STRING_LITERAL
    ;

columnAlias
    : AS? strictIdentifier identifierList?
    ;

tableAlias
    : AS? strictIdentifier identifierList?
    ;

errorCapturingIdentifier
    : identifier errorCapturingIdentifierExtra
    ;

errorCapturingIdentifierExtra
    : (MINUS identifier)+    #errorIdent
    |                        #realIdent
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
    : unquotedIdentifier              #unquotedIdentifierAlternative
    | quotedIdentifier        #quotedIdentifierAlternative
    ;

unquotedIdentifier
    : DIG_LITERAL | ID_LITERAL
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
    : ID_LITERAL DOT_ID*?
    ;

plusUid  // 匹配 xxx.$xx xx:xxxx 等字符
    : (ID_LITERAL | PLUS_ID_LITERAL) (DOT_ID | PLUS_DOT_ID)*?
    ;

withOption
    : WITH tablePropertyList
    ;

ifNotExists
    : IF NOT EXISTS;

ifExists
    : IF EXISTS;

tablePropertyList
    : '(' tableProperty (',' tableProperty)* ')'
    ;

tableProperty
    : key=tablePropertyKey (EQUAL_SYMBOL? value=tablePropertyValue)?
    ;

tablePropertyKey
    : identifier | dereferenceDefinition
    | STRING_LITERAL
    ;

tablePropertyValue
    : DIG_LITERAL
    | REAL_LITERAL
    | booleanLiteral
    | STRING_LITERAL
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
    : '*' | SLASH_SIGN | PENCENT_SIGN | DIV | '+' | '-' | DOUBLE_HYPNEN_SIGN
    ;

unaryOperator
    : '!' | '~' | ADD_SIGN | '-' | NOT
    ;

fullColumnName
    : uid
    ;

constant
    : stringLiteral                                             // 引号包含的字符串
    | decimalLiteral                                            // 整数
    | interval                                                  // INTERVAL keywords
    | HYPNEN_SIGN decimalLiteral                                        // 负整数
    | booleanLiteral                                            // 布尔值
    | REAL_LITERAL                                              // 小数
    | BIT_STRING
    | NOT? NULL                                                 // 空 | 非空
    ;

stringLiteral
    : STRING_LITERAL
    ;

decimalLiteral
    : DIG_LITERAL
    ;

booleanLiteral
    : TRUE | FALSE;

setQuantifier
    : DISTINCT
    | ALL
    ;
