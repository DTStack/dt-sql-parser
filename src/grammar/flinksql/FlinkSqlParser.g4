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
    : CREATE TABLE ifNotExists? sourceTable
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
    : physicalColumnDefinition
    | metadataColumnDefinition
    | computedColumnDefinition
    ;

physicalColumnDefinition
    : columnName columnType columnConstraint? commentSpec?
    ;

columnName
    : plusUid | expression
    ;

columnNameList
    : columnName (',' columnName)*
    ;

columnType
    : typeName=(DATE | BOOLEAN | NULL)
    | typeName=(CHAR | VARCHAR | STRING | BINARY | VARBINARY | BYTES
        | TINYINT | SMALLINT | INT | INTEGER | BIGINT
        | TIME | TIMESTAMP | TIMESTAMP_LTZ | DATETIME
    ) lengthOneDimension?
    | typeName=(DECIMAL | DEC | NUMERIC | FLOAT | DOUBLE) lengthTwoOptionalDimension?
    | type=(ARRAY | MULTISET) lengthOneTypeDimension?
    | type=MAP mapTypeDimension?
    | type=ROW rowTypeDimension?
    | type=RAW lengthTwoStringDimension?
    ;

lengthOneDimension
    : '(' decimalLiteral ')'
    ;

lengthTwoOptionalDimension
    : '(' decimalLiteral (',' decimalLiteral)? ')'
    ;

lengthTwoStringDimension
    : '(' stringLiteral (',' stringLiteral)? ')'
    ;

lengthOneTypeDimension
    : LESS_SYMBOL columnType GREATER_SYMBOL
    ;

mapTypeDimension
    : LESS_SYMBOL columnType (COMMA columnType) GREATER_SYMBOL
    ;

rowTypeDimension
    : LESS_SYMBOL columnName columnType (COMMA columnName columnType)* GREATER_SYMBOL
    ;

columnConstraint
    :(CONSTRAINT constraintName)? PRIMARY KEY (NOT ENFORCED)?
    ;

commentSpec
    : COMMENT STRING_LITERAL
    ;

metadataColumnDefinition
    : columnName columnType METADATA (FROM metadataKey)? VIRTUAL?
    ;

metadataKey
    : STRING_LITERAL
    ;

computedColumnDefinition
    : columnName AS computedColumnExpression commentSpec?
    ;

// 计算表达式
computedColumnExpression
    : expression
    ;

watermarkDefinition
    : WATERMARK FOR expression AS expression
    ;

tableConstraint
    : (CONSTRAINT constraintName)? PRIMARY KEY '(' columnNameList ')' (NOT ENFORCED)?
    ;

constraintName
    : identifier
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
    : LIKE sourceTable (LR_BRACKET likeOption* RR_BRACKET)?
    ;

sourceTable
    : uid
    ;

likeOption
    : (INCLUDING | EXCLUDING) (ALL | CONSTRAINTS | PARTITIONS)
    | (INCLUDING | EXCLUDING | OVERWRITING) (GENERATED | OPTIONS | WATERMARKS)
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
    : insertSimpleStatement | insertMulStatementCompatibility | insertMulStatement
    ;

insertSimpleStatement
    : EXECUTE? INSERT (INTO | OVERWRITE) uid
    (
        insertPartitionDefinition? insertColumnListDefinition? queryStatement
        | valuesDefinition
    )
    ;

insertPartitionDefinition
    : PARTITION tablePropertyList
    ;

insertColumnListDefinition
    : LR_BRACKET columnNameList RR_BRACKET
    ;

valuesDefinition
    : VALUES valuesRowDefinition (COMMA valuesRowDefinition)*
    ;

valuesRowDefinition
    : LR_BRACKET
        constant (COMMA constant)*
    RR_BRACKET
    ;

insertMulStatementCompatibility
    : BEGIN STATEMENT SET SEMICOLON (insertSimpleStatement SEMICOLON)+ END
    ;

insertMulStatement
    : EXECUTE STATEMENT SET BEGIN (insertSimpleStatement SEMICOLON)+ END
    ;


// Select statements

queryStatement
    : valuesCaluse
    | WITH withItem (COMMA withItem)* queryStatement
    | '(' queryStatement ')'
    | left=queryStatement operator=(INTERSECT | UNION | EXCEPT) ALL? right=queryStatement orderByCaluse? limitClause?
    | selectClause orderByCaluse? limitClause?
    | selectStatement orderByCaluse? limitClause?
    ;

valuesCaluse
    : VALUES expression (COMMA expression )*
    ;

withItem
    : withItemName (LR_BRACKET columnName (COMMA columnName)* RR_BRACKET)? AS LR_BRACKET queryStatement RR_BRACKET
    ;

withItemName
    : identifier
    ;

selectStatement
    : selectClause fromClause whereClause? groupByClause? havingClause? windowClause?
    ;

selectClause
    : SELECT setQuantifier? (ASTERISK_SIGN | projectItemDefinition (COMMA projectItemDefinition)*)
    ;

projectItemDefinition
    : expression (AS? expression)?
    ;

fromClause
    : FROM tableExpression
    ;

tableExpression
    : tableReference (COMMA tableReference)*
    | tableExpression NATURAL? (LEFT | RIGHT | FULL | INNER)? OUTER? JOIN tableExpression joinCondition?
    | tableExpression CROSS JOIN tableExpression
    ;

tableReference
    : tablePrimary tableAlias?
    ;

tablePrimary
    : TABLE? tablePath systemTimePeriod? (AS? correlationName)?
    | LATERAL TABLE LR_BRACKET functionName LR_BRACKET expression (COMMA expression)* RR_BRACKET RR_BRACKET
    | LATERAL? LR_BRACKET queryStatement RR_BRACKET
    | UNNEST LR_BRACKET expression RR_BRACKET
    ;

tablePath
    : uid
    ;

systemTimePeriod
    : FOR SYSTEM_TIME AS OF dateTimeExpression
    ;

dateTimeExpression
    : expression
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

correlationName
    : identifier
    ;

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
    | strictNonReserved
    ;

strictIdentifier
    : unquotedIdentifier              #unquotedIdentifierAlternative
    | quotedIdentifier        #quotedIdentifierAlternative
    | ansiNonReserved        #ansiNonReservedKeywords
    | nonReserved        #nonReservedKeywords
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

ansiNonReserved
    : ADD
    | AFTER
    | ALTER
    | ANALYZE
    | ANTI
    | ARCHIVE
    | ARRAY
    | ASC
    | AT
    | BETWEEN
    | BIGINT
    | BINARY
    | BOOLEAN
    | BUCKET
    | BUCKETS
    | BY
    | BYTES
    | CACHE
    | CASCADE
    | CATALOG
    | CATALOGS
    | CHANGE
    | CHAR
    | CLEAR
    | CLUSTER
    | CLUSTERED
    | CODEGEN
    | COLLECTION
    | COLUMNS
    | COMMENT
    | COMMIT
    | COMPACT
    | COMPACTIONS
    | COMPUTE
    | CONCATENATE
    | CONSTRAINTS
    | COST
    | CUBE
    | CURRENT
    | DATA
    | DATABASE
    | DATABASES
    | DATE
    | DATETIME
    | DBPROPERTIES
    | DECIMAL
    | DEFINED
    | DELETE
    | DELIMITED
    | DESC
    | DESCRIBE
    | DFS
    | DIRECTORIES
    | DIRECTORY
    | DISTRIBUTE
    | DIV
    | DOUBLE
    | DROP
    | ESCAPED
    | EXCHANGE
    | EXCLUDING
    | EXISTS
    | EXPLAIN
    | EXPORT
    | EXTENDED
    | EXTERNAL
    | EXTRACT
    | FIELDS
    | FILEFORMAT
    | FIRST
    | FLOAT
    | FOLLOWING
    | FORMAT
    | FORMATTED
    | FUNCTION
    | FUNCTIONS
    | GENERATED
    | GLOBAL
    | GROUPING
    | IF
    | IGNORE
    | IMPORT
    | INCLUDING
    | INDEX
    | INDEXES
    | INPATH
    | INPUTFORMAT
    | INSERT
    | INT
    | INTERVAL
    | ITEMS
    | KEY
    | KEYS
    | LANGUAGE
    | LAST
    | LATERAL
    | LAZY
    | LIKE
    | LIMIT
    | LINES
    | LIST
    | LOAD
    | LOCAL
    | LOCATION
    | LOCK
    | LOCKS
    | LOGICAL
    | MACRO
    | MAP
    | MATCH
    | MINUS
    | MSCK
    | MULTISET
    | NEXT
    | NO
    | NULL
    | NULLS
    | OF
    | OPTION
    | OPTIONS
    | OUT
    | OUTPUTFORMAT
    | OVER
    | OVERWRITE
    | PARTITION
    | PARTITIONED
    | PARTITIONS
    | PERCENTLIT
    | PERIOD
    | PIVOT
    | POSITION
    | PRECEDING
    | PRINCIPALS
    | PURGE
    | RANGE
    | RAW
    | RECORDREADER
    | RECORDWRITER
    | RECOVER
    | REDUCE
    | REFRESH
    | RENAME
    | REPAIR
    | REPLACE
    | RESET
    | RESTRICT
    | REVOKE
    | RLIKE
    | ROLE
    | ROLES
    | ROLLBACK
    | ROLLUP
    | ROW
    | ROWS
    | SEMI
    | SEPARATED
    | SERDE
    | SERDEPROPERTIES
    | SET
    | SETMINUS
    | SETS
    | SHOW
    | SKEWED
    | SMALLINT
    | SORT
    | SORTED
    | START
    | STATISTICS
    | STORED
    | STRATIFY
    | STRING
    | STRUCT
    | SYSTEM
    | SYSTEM_TIME
    | TABLES
    | TABLESAMPLE
    | TBLPROPERTIES
    | TEMPORARY
    | TERMINATED
    | TIME
    | TIMESTAMP
    | TINYINT
    | TOUCH
    | TRANSACTION
    | TRANSACTIONS
    | TRANSFORM
    | TRUE
    | TRUNCATE
    | UNARCHIVE
    | UNBOUNDED
    | UNCACHE
    | UNLOCK
    | UNSET
    | UNNEST
    | USE
    | VALUES
    | VARBINARY
    | VARCHAR
    | VIEW
    | VIEWS
    | WATERMARK
    | WINDOW
    | WITHIN
    | WS
    ;

strictNonReserved
    : ANTI
    | CROSS
    | EXCEPT
    | FULL
    | INNER
    | INTERSECT
    | JOIN
    | LEFT
    | NATURAL
    | ON
    | RIGHT
    | SEMI
    | SETMINUS
    | UNION
    | USING
    ;

nonReserved
    : ADD
    | AFTER
    | ALL
    | ALTER
    | ANALYZE
    | AND
    | ANY
    | COLUMNS
    | ARRAY
    | AS
    | ASC
    | AT
    | BETWEEN
    | BIGINT
    | BINARY
    | BOOLEAN
    | BOTH
    | BUCKET
    | BUCKETS
    | BY
    | BYTES
    | CACHE
    | CASCADE
    | CASE
    | CAST
    | CATALOG
    | CATALOGS
    | CHANGE
    | CHAR
    | CLEAR
    | CLUSTER
    | CLUSTERED
    | CODEGEN
    | COLLECTION
    | COLUMN
    | COLUMNS
    | COMMENT
    | COMMIT
    | COMPACT
    | COMPACTIONS
    | COMPUTE
    | CONCATENATE
    | CONSTRAINT
    | CONSTRAINTS
    | COST
    | CREATE
    | CUBE
    | CURRENT
    | DATA
    | DATABASE
    | DATABASES
    | DATE
    | DATETIME
    | DBPROPERTIES
    | DECIMAL
    | DEFINED
    | DELETE
    | DELIMITED
    | DESC
    | DESCRIBE
    | DFS
    | DIRECTORIES
    | DIRECTORY
    | DISTINCT
    | DISTRIBUTE
    | DIV
    | DOUBLE
    | DROP
    | ELSE
    | END
    | ESCAPED
    | EXCHANGE
    | EXCLUDING
    | EXISTS
    | EXPLAIN
    | EXPORT
    | EXTENDED
    | EXTERNAL
    | EXTRACT
    | FALSE
    | FIELDS
    | FILEFORMAT
    | FIRST
    | FLOAT
    | FOLLOWING
    | FOR
    | FORMAT
    | FORMATTED
    | FROM
    | FUNCTION
    | FUNCTIONS
    | GENERATED
    | GLOBAL
    | GRANT
    | GROUP
    | GROUPING
    | HAVING
    | IF
    | IGNORE
    | IMPORT
    | IN
    | INCLUDING
    | INDEX
    | INDEXES
    | INPATH
    | INPUTFORMAT
    | INSERT
    | INT
    | INTERVAL
    | INTO
    | IS
    | ITEMS
    | KEY
    | KEYS
    | LANGUAGE
    | LAST
    | LATERAL
    | LAZY
    | LEADING
    | LIKE
    | LIMIT
    | LINES
    | LIST
    | LOAD
    | LOCAL
    | LOCATION
    | LOCK
    | LOCKS
    | LOGICAL
    | MACRO
    | MAP
    | MATCH
    | MINUS
    | MSCK
    | MULTISET
    | NEXT
    | NO
    | NOT
    | NULL
    | NULLS
    | OF
    | OPTION
    | OPTIONS
    | OR
    | ORDER
    | OUT
    | OUTER
    | OUTPUTFORMAT
    | OVER
    | OVERWRITE
    | PARTITION
    | PARTITIONED
    | PARTITIONS
    | PERCENTLIT
    | PERIOD
    | PIVOT
    | POSITION
    | PRECEDING
    | PRIMARY
    | PRINCIPALS
    | PURGE
    | RANGE
    | RAW
    | RECORDREADER
    | RECORDWRITER
    | RECOVER
    | REDUCE
    | REFRESH
    | RENAME
    | REPAIR
    | REPLACE
    | RESET
    | RESTRICT
    | REVOKE
    | RLIKE
    | ROLE
    | ROLES
    | ROLLBACK
    | ROLLUP
    | ROW
    | ROWS
    | SELECT
    | SEPARATED
    | SERDE
    | SERDEPROPERTIES
    | SET
    | SETS
    | SHOW
    | SKEWED
    | SMALLINT
    | SORT
    | SORTED
    | START
    | STATISTICS
    | STORED
    | STRATIFY
    | STRING
    | STRUCT
    | SYSTEM
    | SYSTEM_TIME
    | TABLE
    | TABLES
    | TABLESAMPLE
    | TBLPROPERTIES
    | TEMPORARY
    | TERMINATED
    | THEN
    | TIME
    | TIMESTAMP
    | TINYINT
    | TO
    | TOUCH
    | TRAILING
    | TRANSACTION
    | TRANSACTIONS
    | TRANSFORM
    | TRUE
    | TRUNCATE
    | UNARCHIVE
    | UNBOUNDED
    | UNCACHE
    | UNLOCK
    | UNSET
    | UNNEST
    | USE
    | VALUES
    | VARBINARY
    | VARCHAR
    | VIEW
    | VIEWS
    | WATERMARK
    | WHEN
    | WHERE
    | WINDOW
    | WITH
    | WITHIN
    | WS
    ;
