grammar FlinkSqlParser;

// import FlinkSqlLexer;
// options { tokenVocab=FlinkSqlLexer; }

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
    : createTable | createDatabase | createView | createFunction | createCatalog
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
        watermarkDefinition?
    RR_BRACKET
    commentSpec?
    partitionDefinition?
    withOption
    likeDefinition?
    ;

columnOptionDefinition
    : columnName columnType lengthOneDimension?
    ;

columnName
    : ID
    ;

columnType
    : typeName=(CHAR | VARCHAR | STRING | BINARY | VARBINARY | BYTES
    | DECIMAL | TINYINT | SMALLINT | INT | BIGINT | FLOAT | DOUBLE
    | DATE | TIME | TIMESTAMP
    | ARRAY | MAP | MULTISET | ROW
    | BOOLEAN | RAW | NULL)
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
    : CREATE TEMPORARY? VIEW ifNotExists? uid (columnName (',' columnName)*)? commentSpec AS queryStatement
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
    | left=valueExpression operator=('+' | '-' | '||') right=valueExpression       #arithmeticBinary
    | left=valueExpression operator='&' right=valueExpression                          #arithmeticBinary
    | left=valueExpression operator='^' right=valueExpression                                #arithmeticBinary
    | left=valueExpression operator='|' right=valueExpression                               #arithmeticBinary
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
    : identifier ('.' identifier)*
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
    : DIG_LITERAL | ID
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
    : WITH tablePropertyList
    ;

ifNotExists
    : IF NOT EXISTS;

ifExists
    : IF EXISTS;

keyValueDefinition
    : STRING_LITERAL EQUAL_SYMBOL STRING_LITERAL
    ;

tablePropertyList
    : '(' tableProperty (',' tableProperty)* ')'
    ;

tableProperty
    : key=tablePropertyKey (EQUAL_SYMBOL? value=tablePropertyValue)?
    ;

tablePropertyKey
    : identifier ('.' identifier)*
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


/* 
lexer grammar
*/


// SKIP

SPACE:                               [ \t\r\n]+    -> channel(HIDDEN);
COMMENT_INPUT:                       '/*' .*? '*/' -> channel(HIDDEN);
LINE_COMMENT:                        (
                                       ('-- ' | '#') ~[\r\n]* ('\r'? '\n' | EOF)
                                       | '--' ('\r'? '\n' | EOF)
                                     ) -> channel(HIDDEN);


// Common Keywords

SELECT:                       'SELECT';
FROM:                         'FROM';
ADD:                          'ADD';
AS:                           'AS';
ALL:                          'ALL';
ANY:                          'ANY';
DISTINCT:                     'DISTINCT';
WHERE:                        'WHERE';
GROUP:                        'GROUP';
BY:                           'BY';
GROUPING:                     'GROUPING';
SETS:                         'SETS';
CUBE:                         'CUBE';
ROLLUP:                       'ROLLUP';
ORDER:                        'ORDER';
HAVING:                       'HAVING';
LIMIT:                        'LIMIT';
AT:                           'AT';
OR:                           'OR';
AND:                          'AND';
IN:                           'IN';
NOT:                          'NOT';
NO:                           'NO';
EXISTS:                       'EXISTS';
BETWEEN:                      'BETWEEN';
LIKE:                         'LIKE';
RLIKE:                        'RLIKE';
IS:                           'IS';
TRUE:                         'TRUE';
FALSE:                        'FALSE';
NULLS:                        'NULLS';
ASC:                          'ASC';
DESC:                         'DESC';
FOR:                          'FOR';
INTERVAL:                     'INTERVAL';
CASE:                         'CASE';
WHEN:                         'WHEN';
THEN:                         'THEN';
ELSE:                         'ELSE';
END:                          'END';
JOIN:                         'JOIN';
CROSS:                        'CROSS';
OUTER:                        'OUTER';
INNER:                        'INNER';
LEFT:                         'LEFT';
SEMI:                         'SEMI';
RIGHT:                        'RIGHT';
FULL:                         'FULL';
NATURAL:                      'NATURAL';
ON:                           'ON';
PIVOT:                        'PIVOT';
LATERAL:                      'LATERAL';
WINDOW:                       'WINDOW';
OVER:                         'OVER';
PARTITION:                    'PARTITION';
RANGE:                        'RANGE';
ROWS:                         'ROWS';
UNBOUNDED:                    'UNBOUNDED';
PRECEDING:                    'PRECEDING';
FOLLOWING:                    'FOLLOWING';
CURRENT:                      'CURRENT';
FIRST:                        'FIRST';
AFTER:                        'AFTER';
LAST:                         'LAST';
WITH:                         'WITH';
VALUES:                       'VALUES';
CREATE:                       'CREATE';
TABLE:                        'TABLE';
DIRECTORY:                    'DIRECTORY';
VIEW:                         'VIEW';
REPLACE:                      'REPLACE';
INSERT:                       'INSERT';
DELETE:                       'DELETE';
INTO:                         'INTO';
DESCRIBE:                     'DESCRIBE';
EXPLAIN:                      'EXPLAIN';
FORMAT:                       'FORMAT';
LOGICAL:                      'LOGICAL';
CODEGEN:                      'CODEGEN';
COST:                         'COST';
CAST:                         'CAST';
SHOW:                         'SHOW';
TABLES:                       'TABLES';
COLUMNS:                      'COLUMNS';
COLUMN:                       'COLUMN';
USE:                          'USE';
PARTITIONS:                   'PARTITIONS';
FUNCTIONS:                    'FUNCTIONS';
DROP:                         'DROP';
UNION:                        'UNION';
EXCEPT:                       'EXCEPT';
SETMINUS:                     'SETMINUS';
INTERSECT:                    'INTERSECT';
TO:                           'TO';
TABLESAMPLE:                  'TABLESAMPLE';
STRATIFY:                     'STRATIFY';
ALTER:                        'ALTER';
RENAME:                       'RENAME';
STRUCT:                       'STRUCT';
COMMENT:                      'COMMENT';
SET:                          'SET';
RESET:                        'RESET';
DATA:                         'DATA';
START:                        'START';
TRANSACTION:                  'TRANSACTION';
COMMIT:                       'COMMIT';
ROLLBACK:                     'ROLLBACK';
MACRO:                        'MACRO';
IGNORE:                       'IGNORE';
BOTH:                         'BOTH';
LEADING:                      'LEADING';
TRAILING:                     'TRAILING';
IF:                           'IF';
POSITION:                     'POSITION';
EXTRACT:                      'EXTRACT';
EQ:                           'EQ';
NSEQ:                         'NSEQ';
NEQ:                          'NEQ';
NEQJ:                         'NEQJ';
LT:                           'LT';
LTE:                          'LTE';
GT:                           'GT';
GTE:                          'GTE';
PLUS:                         'PLUS';
MINUS:                        'MINUS';
ASTERISK:                     'ASTERISK';
SLASH:                        'SLASH';
PERCENT:                      'PERCENT';
DIV:                          'DIV';
TILDE:                        'TILDE';
AMPERSAND:                    'AMPERSAND';
PIPE:                         'PIPE';
CONCAT_PIPE:                  'CONCAT_PIPE';
HAT:                          'HAT';
PERCENTLIT:                   'PERCENTLIT';
BUCKET:                       'BUCKET';
OUT:                          'OUT';
OF:                           'OF';
SORT:                         'SORT';
CLUSTER:                      'CLUSTER';
DISTRIBUTE:                   'DISTRIBUTE';
OVERWRITE:                    'OVERWRITE';
TRANSFORM:                    'TRANSFORM';
REDUCE:                       'REDUCE';
USING:                        'USING';
SERDE:                        'SERDE';
SERDEPROPERTIES:              'SERDEPROPERTIES';
RECORDREADER:                 'RECORDREADER';
RECORDWRITER:                 'RECORDWRITER';
DELIMITED:                    'DELIMITED';
FIELDS:                       'FIELDS';
TERMINATED:                   'TERMINATED';
COLLECTION:                   'COLLECTION';
ITEMS:                        'ITEMS';
KEYS:                         'KEYS';
ESCAPED:                      'ESCAPED';
LINES:                        'LINES';
SEPARATED:                    'SEPARATED';
FUNCTION:                     'FUNCTION';
EXTENDED:                     'EXTENDED';
REFRESH:                      'REFRESH';
CLEAR:                        'CLEAR';
CACHE:                        'CACHE';
UNCACHE:                      'UNCACHE';
LAZY:                         'LAZY';
FORMATTED:                    'FORMATTED';
GLOBAL:                       'GLOBAL';
TEMPORARY:                    'TEMPORARY';
OPTIONS:                      'OPTIONS';
UNSET:                        'UNSET';
TBLPROPERTIES:                'TBLPROPERTIES';
DBPROPERTIES:                 'DBPROPERTIES';
BUCKETS:                      'BUCKETS';
SKEWED:                       'SKEWED';
STORED:                       'STORED';
DIRECTORIES:                  'DIRECTORIES';
LOCATION:                     'LOCATION';
EXCHANGE:                     'EXCHANGE';
ARCHIVE:                      'ARCHIVE';
UNARCHIVE:                    'UNARCHIVE';
FILEFORMAT:                   'FILEFORMAT';
TOUCH:                        'TOUCH';
COMPACT:                      'COMPACT';
CONCATENATE:                  'CONCATENATE';
CHANGE:                       'CHANGE';
CASCADE:                      'CASCADE';
RESTRICT:                     'RESTRICT';
CLUSTERED:                    'CLUSTERED';
SORTED:                       'SORTED';
PURGE:                        'PURGE';
INPUTFORMAT:                  'INPUTFORMAT';
OUTPUTFORMAT:                 'OUTPUTFORMAT';
DATABASE:                     'DATABASE';
DATABASES:                    'DATABASES';
DFS:                          'DFS';
TRUNCATE:                     'TRUNCATE';
ANALYZE:                      'ANALYZE';
COMPUTE:                      'COMPUTE';
LIST:                         'LIST';
STATISTICS:                   'STATISTICS';
PARTITIONED:                  'PARTITIONED';
EXTERNAL:                     'EXTERNAL';
DEFINED:                      'DEFINED';
REVOKE:                       'REVOKE';
GRANT:                        'GRANT';
LOCK:                         'LOCK';
UNLOCK:                       'UNLOCK';
MSCK:                         'MSCK';
REPAIR:                       'REPAIR';
RECOVER:                      'RECOVER';
EXPORT:                       'EXPORT';
IMPORT:                       'IMPORT';
LOAD:                         'LOAD';
ROLE:                         'ROLE';
ROLES:                        'ROLES';
COMPACTIONS:                  'COMPACTIONS';
PRINCIPALS:                   'PRINCIPALS';
TRANSACTIONS:                 'TRANSACTIONS';
INDEX:                        'INDEX';
INDEXES:                      'INDEXES';
LOCKS:                        'LOCKS';
OPTION:                       'OPTION';
ANTI:                         'ANTI';
LOCAL:                        'LOCAL';
INPATH:                       'INPATH';
WATERMARK:                    'WATERMARK';
UNNEST:                       'UNNEST';
MATCH_RECOGNIZE:              'MATCH_RECOGNIZE';
MEASURES:                     'MEASURES';
ONE:                          'ONE';
PER:                          'PER';
MATCH:                        'MATCH';
SKIP1:                        'SKIP1';
NEXT:                         'NEXT';
PAST:                         'PAST';
PATTERN:                      'PATTERN';
WITHIN:                       'WITHIN';
DEFINE:                       'DEFINE';
WS:                           'WS';
SYSTEM:                       'SYSTEM';
INCLUDING:                    'INCLUDING';
EXCLUDING:                    'EXCLUDING';
CONSTRAINTS:                  'CONSTRAINTS';
OVERWRITING:                  'OVERWRITING';
GENERATED:                    'GENERATED';
CATALOG:                      'CATALOG';
LANGUAGE:                     'LANGUAGE';


// DATA TYPE Keywords

STRING:                       'STRING';
ARRAY:                        'ARRAY';
MAP:                          'MAP';
CHAR:                         'CHAR';
VARCHAR:                      'VARCHAR';
BINARY:                       'BINARY';
VARBINARY:                    'VARBINARY';
BYTES:                        'BYTES';
DECIMAL:                      'DECIMAL';
TINYINT:                      'TINYINT';
SMALLINT:                     'SMALLINT';
INT:                          'INT';
BIGINT:                       'BIGINT';
FLOAT:                        'FLOAT';
DOUBLE:                       'DOUBLE';
DATE:                         'DATE';
TIME:                         'TIME';
TIMESTAMP:                    'TIMESTAMP';
MULTISET:                     'MULTISET';
BOOLEAN:                      'BOOLEAN';
RAW:                          'RAW';
ROW:                          'ROW';
NULL:                         'NULL';


// Operators. Comparation

EQUAL_SYMBOL:                        '=';
GREATER_SYMBOL:                      '>';
LESS_SYMBOL:                         '<';
EXCLAMATION_SYMBOL:                  '!';


// Operators. Bit

BIT_NOT_OP:                          '~';
BIT_OR_OP:                           '|';
BIT_AND_OP:                          '&';
BIT_XOR_OP:                          '^';


// Constructors symbols

DOT:                                 '.';
LS_BRACKET:                          '[';
RS_BRACKET:                          ']';
LR_BRACKET:                          '(';
RR_BRACKET:                          ')';
COMMA:                               ',';
SEMICOLON:                           ';';
AT_SIGN:                             '@';
SINGLE_QUOTE_SYMB:                   '\'';
DOUBLE_QUOTE_SYMB:                   '"';
REVERSE_QUOTE_SYMB:                  '`';
COLON_SYMB:                          ':';
ASTERISK_SIGN:                       '*';
UNDERLINE_SIGN:                      '_';
HYPNEN_SIGN:                         '-';
ADD_SIGN:                            '+';
PENCENT_SIGN:                        '%';
DOUBLE_HYPNEN_SIGN:                  '--';
SLASH_SIGN:                          '/';
DOT_ID:                              '.' ID_LITERAL;
STRING_LITERAL:                      DQUOTA_STRING | SQUOTA_STRING | BQUOTA_STRING;
DIG_LITERAL:                         DEC_DIGIT+;
REAL_LITERAL:                        (DEC_DIGIT+)? '.' DEC_DIGIT+
                                     | DEC_DIGIT+ '.' EXPONENT_NUM_PART
                                     | (DEC_DIGIT+)? '.' (DEC_DIGIT+ EXPONENT_NUM_PART)
                                     | DEC_DIGIT+ EXPONENT_NUM_PART;
BIT_STRING:                          BIT_STRING_L;
ID:                                  ID_LITERAL;

fragment EXPONENT_NUM_PART:          'E' [-+]? DEC_DIGIT+;
fragment ID_LITERAL:                 [A-Z_0-9a-z]*?[A-Z_a-z]+?[A-Z_0-9a-z]*;
fragment DEC_DIGIT:                  [0-9];
fragment DEC_LETTER:                 [A-Za-z];
fragment DQUOTA_STRING:              '"' ( '\\'. | '""' | ~('"'| '\\') )* '"';
fragment SQUOTA_STRING:              '\'' ('\\'. | '\'\'' | ~('\'' | '\\'))* '\'';
fragment BIT_STRING_L:               'B' '\'' [01]+ '\'';
fragment BQUOTA_STRING:              '`' ( '\\'. | '``' | ~('`'|'\\'))* '`';