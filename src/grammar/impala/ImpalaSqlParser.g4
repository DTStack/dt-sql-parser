/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

 /**
 * This file is an adaptation of hetu-core/hetu-sql-migration-tool/src/main/antlr4/io/hetu/core/migration/source/impala/ImpalaSql.g4
 * Reference: https://github.com/openlookeng/hetu-core/blob/master/hetu-sql-migration-tool/src/main/antlr4/io/hetu/core/migration/source/impala/ImpalaSql.g4
 */


grammar ImpalaSqlParser;

options
{
    tokenVocab=ImpalaSqlLexer;
}

program : (statement SEMICOLON?)* EOF;

statement
    : query                                                            #statementDefault
    | KW_USE schema=identifier                                            #use
    | KW_CREATE (KW_SCHEMA | KW_DATABASE) (KW_IF KW_NOT KW_EXISTS)? qualifiedName
        (KW_COMMENT comment=string)? (KW_LOCATION location=string)?                            #createSchema
    | KW_ALTER KW_DATABASE qualifiedName KW_SET KW_OWNER (KW_USER | KW_ROLE) identifier         #alterSchema
    | KW_DROP (KW_SCHEMA | KW_DATABASE) (KW_IF KW_EXISTS)? qualifiedName (KW_CASCADE | KW_RESTRICT)?     #dropSchema
    | KW_CREATE KW_EXTERNAL? KW_TABLE (KW_IF KW_NOT KW_EXISTS)? tblName=qualifiedName
            (LPAREN tableElement (COMMA tableElement)* RPAREN)?
            (KW_PARTITIONED KW_BY LPAREN partitionedBy RPAREN)?
            (KW_SORT KW_BY LPAREN sortedBy RPAREN)?
            (KW_COMMENT comment=string)?
            (KW_ROW KW_FORMAT rowFormat)?
            (KW_WITH KW_SERDEPROPERTIES serdProp=properties)?
            (KW_STORED_AS stored_as=identifier)?
            (KW_LOCATION location=string)?
            (KW_CACHED KW_IN cacheName=qualifiedName (KW_WITH KW_REPLICATION EQ INTEGER_VALUE )? | KW_UNCACHED)?
            (KW_TBLPROPERTIES tblProp=properties)?
            (KW_AS query)?                                                         #createTable
    | KW_CREATE KW_EXTERNAL? KW_TABLE (KW_IF KW_NOT KW_EXISTS)? tblName=qualifiedName
        KW_LIKE (likeTableName=qualifiedName | KW_PARQUET parquet=string)
        (KW_COMMENT comment=string)?
        (KW_STORED_AS stored_as=identifier)?
        (KW_LOCATION location=string)?                                             #createTableLike
    | KW_CREATE KW_EXTERNAL? KW_TABLE (KW_IF KW_NOT KW_EXISTS)? tblName=qualifiedName
        (LPAREN kuduTableElement (COMMA kuduTableElement)* (COMMA KW_PRIMARY KW_KEY  columnAliases)? RPAREN)?
        (KW_PARTITION KW_BY .*)?
        (KW_COMMENT string)?
        KW_STORED_AS KW_KUDU
        (KW_TBLPROPERTIES tblProp=properties)?                            #createKuduTable
    | KW_CREATE KW_EXTERNAL? KW_TABLE (KW_IF KW_NOT KW_EXISTS)? tblName=qualifiedName
        (LPAREN KW_PRIMARY KW_KEY  columnAliases? RPAREN)?
        (KW_PARTITION KW_BY .*)?
        (KW_COMMENT string)?
        KW_STORED_AS KW_KUDU
        (KW_TBLPROPERTIES tblProp=properties)?
        KW_AS query                                                       #createKuduTableAsSelect
    | KW_ALTER KW_TABLE from=qualifiedName KW_RENAME KW_TO to=qualifiedName        #renameTable
    | KW_ALTER KW_TABLE qualifiedName KW_ADD (KW_IF KW_NOT KW_EXISTS)? KW_COLUMNS LPAREN columnSpecWithKudu (COMMA columnSpecWithKudu)*? RPAREN        #addColumns
    | KW_ALTER KW_TABLE qualifiedName KW_REPLACE KW_COLUMNS LPAREN columnSpecWithKudu (COMMA columnSpecWithKudu)*? RPAREN        #replaceColumns
    | KW_ALTER KW_TABLE qualifiedName KW_CHANGE KW_COLUMN columnSpecWithKudu      #editColumnDefine
    | KW_ALTER KW_TABLE qualifiedName KW_ADD KW_COLUMN (KW_IF KW_NOT KW_EXISTS)? columnSpecWithKudu        #addSingleColumn
    | KW_ALTER KW_TABLE qualifiedName KW_DROP (KW_COLUMN)? identifier        #dropSingleColumn
    | KW_ALTER KW_TABLE qualifiedName KW_SET KW_OWNER (KW_USER | KW_ROLE) identifier        #alterTableOwner
    | KW_ALTER KW_TABLE qualifiedName KW_ALTER (KW_COLUMN)? identifier (KW_SET kuduStorageAttr | KW_DROP KW_DEFAULT)        #alterTableKuduOnly
    | KW_ALTER KW_TABLE qualifiedName KW_ALTER (KW_COLUMN)? identifier KW_SET KW_COMMENT string      #alterTableNonKudu
    | KW_ALTER KW_TABLE qualifiedName KW_ADD (KW_IF KW_NOT KW_EXISTS)? KW_PARTITION expression (KW_LOCATION string)? (cacheSpec)?     #addPartitionByValue
    | KW_ALTER KW_TABLE qualifiedName KW_ADD (KW_IF KW_NOT KW_EXISTS)? KW_RANGE KW_PARTITION kuduPartitionSpec      #addPartitionByRange
    | KW_ALTER KW_TABLE qualifiedName KW_DROP (KW_IF KW_EXISTS)? KW_PARTITION expression KW_PURGE?    #dropPartitionByValue
    | KW_ALTER KW_TABLE qualifiedName KW_DROP (KW_IF KW_EXISTS)? KW_RANGE KW_PARTITION kuduPartitionSpec      #addPartitionByRange
    | KW_ALTER KW_TABLE qualifiedName KW_RECOVER KW_PARTITIONS      #recoverPartitions
    | KW_ALTER KW_TABLE qualifiedName (KW_PARTITION expression)? KW_SET ((KW_FILEFORMAT fileFormat) | (KW_ROW KW_FORMAT rowFormat) | (KW_LOCATION string) | (KW_TBLPROPERTIES tableOrSerdePropertities) | (KW_SERDEPROPERTIES tableOrSerdePropertities))      #alterFormat
    | KW_ALTER KW_TABLE qualifiedName KW_SET KW_COLUMN KW_STATS identifier LPAREN statsKey EQ string (COMMA statsKey EQ string)? RPAREN   #alterStatsKey
    | KW_ALTER KW_TABLE qualifiedName (KW_PARTITION expression)? KW_SET ((KW_CACHED KW_IN string (KW_WITH KW_REPLICATION EQ number)?) | KW_UNCACHED)   #alterPartitionCache
    | KW_DROP KW_TABLE (KW_IF KW_EXISTS)? qualifiedName KW_PURGE?                     #dropTable
    | KW_TRUNCATE KW_TABLE? (KW_IF KW_EXISTS)? qualifiedName                       #truncateTable
    | KW_CREATE KW_VIEW (KW_IF KW_NOT KW_EXISTS)?  qualifiedName viewColumns? (KW_COMMENT string)? KW_AS query                                                    #createView
    | KW_ALTER KW_VIEW qualifiedName viewColumns? KW_AS query                                                    #alterView
    | KW_ALTER KW_VIEW qualifiedName KW_RENAME KW_TO qualifiedName                  #renameView
    | KW_ALTER KW_VIEW qualifiedName KW_SET KW_OWNER (KW_USER|KW_ROLE) qualifiedName                  #alterViewOwner
    | KW_ALTER KW_VIEW qualifiedName KW_SET KW_TBLPROPERTIES LPAREN identifier EQ identifier (COMMA identifier EQ identifier)*? RPAREN                  #alterSetViewTblproperties
    | KW_ALTER KW_VIEW qualifiedName KW_UNSET KW_TBLPROPERTIES LPAREN identifier (COMMA identifier)*? RPAREN                  #alterUnSetViewTblproperties
    | KW_DROP KW_VIEW (KW_IF KW_EXISTS)? qualifiedName                             #dropView
    | KW_DESCRIBE KW_DATABASE? (KW_FORMATTED|KW_EXTENDED)? qualifiedName           #describeDbOrTable
    | KW_COMPUTE KW_STATS qualifiedName  (columnAliases)? (KW_TABLESAMPLE KW_SYSTEM LPAREN number RPAREN (KW_REPEATABLE LPAREN number RPAREN)?)?    #computeStats
    | KW_COMPUTE KW_INCREMENTAL KW_STATS qualifiedName (KW_PARTITION expression)?                                                        #computeIncrementalStats
    | KW_DROP KW_STATS qualifiedName                                          #dropStats
    | KW_DROP KW_INCREMENTAL KW_STATS qualifiedName KW_PARTITION  expression         #dropIncrementalStats
    | KW_CREATE KW_AGGREGATE? KW_FUNCTION (KW_IF KW_NOT KW_EXISTS)? qualifiedName (LPAREN(type (COMMA type)*)? RPAREN)?
             (KW_RETURNS type)?
             (KW_INTERMEDIATE type)?
             KW_LOCATION STRING
             (KW_SYMBOL EQ symbol=string)?
             (KW_INIT_FN EQ STRING)?
             (KW_UPDATE_FN EQ STRING)?
             (KW_MERGE_FN EQ STRING)?
             (KW_CLOSEFN EQ STRING)?
             (KW_SERIALIZE_FN EQ STRING)?
             (KW_FINALIZE_FN EQ STRING)?                                  #createFunction
    | KW_REFRESH KW_FUNCTIONS qualifiedName                                 #refreshFunction
    | KW_DROP KW_AGGREGATE? KW_FUNCTION (KW_IF KW_EXISTS)? qualifiedName (LPAREN(type (COMMA type)*)? RPAREN)?       #dropFunction
    | KW_CREATE KW_ROLE name=identifier                                      #createRole
    | KW_DROP KW_ROLE name=identifier                                        #dropRole
    | KW_GRANT KW_ROLE identifier KW_TO KW_GROUP identifier                        #grantRole
    // TODO: (qualifiedName)? 是否需要
    | KW_GRANT privilege KW_ON objectType (qualifiedName)? KW_TO grantee=principal           #grant
    | KW_REVOKE KW_ROLE identifier KW_FROM KW_GROUP identifier                             #grantRole
    // TODO: (qualifiedName)? 是否需要
    | KW_REVOKE (KW_GRANT KW_OPTION KW_FOR)? privilege KW_ON objectType (qualifiedName)? KW_FROM (grantee=principal | (KW_ROLE)? identifier)          #revoke
    | with? KW_INSERT hintClause? (KW_INTO | KW_OVERWRITE) KW_TABLE? qualifiedName
            columnAliases?
            (KW_PARTITION LPAREN expression(COMMA expression)*RPAREN)?
            hintClause? query                                           #insertInto
    | KW_DELETE KW_FROM? qualifiedName (KW_WHERE booleanExpression)?                                   #delete
    | KW_DELETE expression (KW_AS? identifier)? KW_FROM? relation ((COMMA relation)*)? (KW_WHERE booleanExpression)?                                   #deleteTableRef
    | KW_UPDATE qualifiedName KW_SET assignmentList (KW_FROM relation (COMMA relation)*)? (KW_WHERE booleanExpression)?    #updateTable
    | KW_UPSERT hintClause? KW_INTO KW_TABLE? qualifiedName
             columnAliases?
             hintClause? query                                          #upsert
    | KW_SHOW (KW_SCHEMAS | KW_DATABASES)
             (KW_LIKE? pattern=string (BITWISEOR string)*)?                                         #showSchemas
    | KW_SHOW KW_TABLES ((KW_FROM | KW_IN) qualifiedName)?
             (KW_LIKE? pattern=string (BITWISEOR string)*)?                                        #showTables
    | KW_SHOW (KW_AGGREGATE | KW_ANALYTIC)? KW_FUNCTIONS (KW_IN qualifiedName)?
             (KW_LIKE? pattern=string (BITWISEOR string)*)?                                  #showFunctions
    | KW_SHOW KW_CREATE KW_TABLE qualifiedName                                  #showCreateTable
    | KW_SHOW KW_CREATE KW_VIEW qualifiedName                                  #showCreateView
    | KW_SHOW KW_TABLE KW_STATS qualifiedName                                                      #showTableStats
    | KW_SHOW KW_COLUMN KW_STATS qualifiedName                                                     #showColumnStats
    | KW_SHOW (KW_RANGE)? KW_PARTITIONS qualifiedName                                              #showPartitions
    | KW_SHOW KW_FILES KW_IN qualifiedName (KW_PARTITION LPAREN expression (COMMA expression)?RPAREN)?         #showFiles
    | KW_SHOW (KW_CURRENT)? KW_ROLES                                                               #showRoles
    | KW_SHOW KW_ROLE KW_GRANT KW_GROUP identifier                                                    #showRoleGrant
    | KW_SHOW KW_GRANT KW_ROLE identifier                                                          #showGrantRole
    | KW_SHOW KW_GRANT KW_USER identifier
        (KW_ON (KW_SERVER | KW_DATABASE | KW_TABLE | KW_URI) (qualifiedName)? )?                         #showGrantUser
    | KW_COMMENT KW_ON (KW_DATABASE|KW_TABLE|KW_COLUMN) qualifiedName KW_IS (string | KW_NULL)                 #addComments
    | KW_EXPLAIN statement                                                                   #explain
    | KW_SET (KW_ALL | identifier EQ expression)?                                               #setSession
    | COLON KW_SHUTDOWN LPAREN (string)? (COLON expression)? (COMMA expression )? RPAREN                  #shutdown
    | KW_INVALIDATE KW_METADATA qualifiedName                                                   #invalidateMeta
    | KW_LOAD KW_DATA KW_INPATH STRING (KW_OVERWRITE)? KW_INTO KW_TABLE qualifiedName
        (KW_PARTITION LPAREN expression (COMMA expression)?RPAREN)?                                   #loadData
    | KW_REFRESH qualifiedName (KW_PARTITION LPAREN expression (COMMA expression)?RPAREN)?               #refreshMeta
    | KW_REFRESH KW_AUTHORIZATION                                                               #refreshAuth
    ;

assignmentList
    :  assignmentItem (COMMA assignmentItem)*
    ;

assignmentItem
    :  qualifiedName EQ expression
    ;

viewColumns
    : LPAREN identifier (KW_COMMENT string)? (COMMA identifier (KW_COMMENT string)?)* RPAREN
    ;

query
    :  with? queryNoWith
    ;

with
    : KW_WITH namedQuery (COMMA namedQuery)*
    ;

tableElement
    : columnDefinition
    ;

columnDefinition
    : identifier type (KW_COMMENT string)?
    ;

kuduTableElement
    : kuduColumnDefinition
    ;

kuduColumnDefinition
    : identifier type (kuduAttributes)? (KW_COMMENT string)? (KW_PRIMARY KW_KEY )?
    ;

columnSpecWithKudu
    : identifier type (KW_COMMENT string)? (kuduAttributes)?
    ;

kuduAttributes
    : ((KW_NOT)? KW_NULL | kuduStorageAttr)
    ;

kuduStorageAttr
    : KW_ENCODING expression
    | KW_COMPRESSION expression
    | KW_DEFAULT expression
    | KW_BLOCK_SIZE number
    ;
statsKey
    :  STATS_NUMDVS
    |  STATS_NUMNULLS
    |  STATS_AVGSIZE
    |  STATS_MAXSIZE
    ;
tableOrSerdePropertities
    : LPAREN identifier EQ constants (COMMA identifier EQ constants)*? RPAREN
    ;
fileFormat
    : KW_TEXTFILE
    | KW_PARQUET
    | KW_ORC
    | KW_AVRO
    | KW_SEQUENCEFILE
    | KW_RCFILE
    ;
partitionSpec
    : LPAREN identifier partitionCol constants (COMMA identifier partitionCol constants)? RPAREN
    ;
kuduPartitionSpec
    : KW_VALUE partitionCol constants | constants rangeOperator KW_VALUES rangeOperator constants
    ;
constants
    : INTEGER_VALUE
    | DECIMAL_VALUE
    | DOUBLE_VALUE
    | string
    | booleanValue
    ;

cacheSpec
    : KW_CACHED KW_IN identifier (KW_WITH KW_REPLICATION EQ number)?
    | KW_UNCACHED
    ;

rangeOperator
    :
    | LT
    | LTE
    | GT
    | GTE
    ;
partitionCol
    : EQ
    | NEQ
    | KW_LIKE
    | KW_RLIKE
    | KW_REGEXP
    | KW_BETWEEN
    | KW_IN
    | rangeOperator
    ;

likeClause
    : KW_LIKE qualifiedName (optionType=(KW_INCLUDING | KW_EXCLUDING) KW_PROPERTIES)?
    ;
hintClause
    : '-- +SHUFFLE' | '-- +NOSHUFFLE -- +CLUSTERED'
    | '/* +SHUFFLE */' | '/* +NOSHUFFLE */' | '/* +CLUSTERED */'
    | '[SHUFFLE]' | '[NOSHUFFLE]'
    ;

properties
    : LPAREN property (COMMA property)* RPAREN
    ;

partitionedBy
    : columnDefinition (COMMA columnDefinition)*
    ;

sortedBy
    : expression (COMMA expression)*
    ;

rowFormat
    : KW_DELIMITED (KW_FIELDS KW_TERMINATED KW_BY string (KW_ESCAPED KW_BY string)?)? (KW_LINES KW_TERMINATED KW_BY string)?
    ;

property
    : identifier EQ expression
    ;

queryNoWith:
      queryTerm
      (KW_ORDER KW_BY sortItem (COMMA sortItem)*)?
      (KW_LIMIT rows=INTEGER_VALUE  (KW_OFFSET offset=INTEGER_VALUE )?)?
    ;

queryTerm
    : queryPrimary                                                             #queryTermDefault
    | left=queryTerm operator=KW_INTERSECT setQuantifier? right=queryTerm         #setOperation
    | left=queryTerm operator=(KW_UNION | KW_EXCEPT) setQuantifier? right=queryTerm  #setOperation
    ;

queryPrimary
    : querySpecification                   #queryPrimaryDefault
    | KW_TABLE qualifiedName                  #table
    | KW_VALUES expression (COMMA expression)*  #inlineTable
    | LPAREN queryNoWith  RPAREN                 #subquery
    ;

sortItem
    : expression ordering=(KW_ASC | KW_DESC)? (KW_NULLS nullOrdering=(KW_FIRST | KW_LAST))?
    ;

querySpecification
    : KW_SELECT setQuantifier? (KW_STRAIGHT_JOIN)? selectItem (COMMA selectItem)*
      (KW_FROM relation (COMMA relation)*)?
      (KW_WHERE where=booleanExpression)?
      (KW_GROUP KW_BY groupBy)?
      (KW_HAVING having=booleanExpression)?
    ;

groupBy
    : setQuantifier? groupingElement (COMMA groupingElement)*
    ;

groupingElement
    : groupingSet                                            #singleGroupingSet
    ;

groupingSet
    : LPAREN (expression (COMMA expression)*)? RPAREN
    | expression
    ;

namedQuery
    : name=identifier (columnAliases)? KW_AS LPAREN query RPAREN
    ;

setQuantifier
    : KW_DISTINCT
    | KW_ALL
    ;

selectItem
    : expression (KW_AS? identifier)?  #selectSingle
    | qualifiedName DOT ASTERISK    #selectAll
    | ASTERISK                      #selectAll
    ;

relation
    : left=relation
      ( KW_CROSS KW_JOIN right=sampledRelation
      | joinType KW_JOIN rightRelation=relation joinCriteria
      )                                           #joinRelation
    | sampledRelation                             #relationDefault
    ;

joinType
    : KW_INNER?
    | KW_LEFT KW_INNER?
    | KW_RIGHT KW_INNER?
    | KW_LEFT KW_OUTER?
    | KW_RIGHT KW_OUTER?
    | KW_FULL KW_OUTER?
    | KW_LEFT KW_SEMI
    | KW_RIGHT KW_SEMI
    | KW_LEFT KW_ANTI
    | KW_RIGHT KW_ANTI
    ;

joinCriteria
    : KW_ON booleanExpression
    | KW_USING LPAREN identifier (COMMA identifier)* RPAREN
    ;

sampledRelation
    : aliasedRelation (
        KW_TABLESAMPLE sampleType LPAREN percentage=expression RPAREN
      )?
    ;

sampleType
    : KW_BERNOULLI
    | KW_SYSTEM
    ;

aliasedRelation
    : relationPrimary (KW_AS? identifier columnAliases?)?
    ;

columnAliases
    : LPAREN identifier (COMMA identifier)* RPAREN
    ;

relationPrimary
    : qualifiedName                                                   #tableName
    | LPAREN query RPAREN                                                   #subqueryRelation
    | KW_UNNEST LPAREN expression (COMMA expression)* RPAREN (KW_WITH KW_ORDINALITY)?  #unnest
    | KW_LATERAL LPAREN query RPAREN                                           #lateral
    | LPAREN relation RPAREN                                                #parenthesizedRelation
    ;

expression
    : booleanExpression
    ;

booleanExpression
    : valueExpression predicate[$valueExpression.ctx]?             #predicated
    | KW_NOT booleanExpression                                        #logicalNot
    | left=booleanExpression operator=KW_AND right=booleanExpression  #logicalBinary
    | left=booleanExpression operator=KW_OR right=booleanExpression   #logicalBinary
    ;

// workaround for https://github.com/antlr/antlr4/issues/780
predicate[ParserRuleContext value]
    : comparisonOperator right=valueExpression                            #comparison
    | comparisonOperator comparisonQuantifier LPAREN query RPAREN               #quantifiedComparison
    | KW_NOT? KW_BETWEEN lower=valueExpression KW_AND upper=valueExpression        #between
    | KW_NOT? KW_IN LPAREN expression (COMMA expression)* RPAREN                        #inList
    | KW_NOT? KW_IN LPAREN query RPAREN                                               #inSubquery
    | KW_NOT? KW_LIKE pattern=valueExpression (KW_ESCAPE escape=valueExpression)?  #like
    | KW_IS KW_NOT? KW_NULL                                                        #nullPredicate
    | KW_IS KW_NOT? KW_DISTINCT KW_FROM right=valueExpression                         #distinctFrom
    ;

valueExpression
    : primaryExpression                                                                 #valueExpressionDefault
    | operator=(MINUS | PLUS) valueExpression                                           #arithmeticUnary
    | left=valueExpression operator=(ASTERISK | SLASH | PERCENT) right=valueExpression  #arithmeticBinary
    | left=valueExpression operator=(PLUS | MINUS) right=valueExpression                #arithmeticBinary
    | left=valueExpression CONCAT right=valueExpression                                 #concatenation
    ;

primaryExpression
    : KW_NULL                                                                                #nullLiteral
    | interval                                                                            #intervalLiteral
    | identifier string                                                                   #typeConstructor
    | DOUBLE_PRECISION string                                                             #typeConstructor
    | number                                                                              #numericLiteral
    | booleanValue                                                                        #booleanLiteral
    | string                                                                              #stringLiteral
    | BINARY_LITERAL                                                                      #binaryLiteral
    | QUESTION                                                                                 #parameter
    | KW_POSITION LPAREN valueExpression KW_IN valueExpression RPAREN                                 #position
    | LPAREN expression (COMMA expression)+ RPAREN                                                #rowConstructor
    | KW_ROW LPAREN expression (COMMA expression)* RPAREN                                            #rowConstructor
    | qualifiedName LPAREN ASTERISK RPAREN filter? over?                                        #functionCall
    | qualifiedName LPAREN (setQuantifier? expression (COMMA expression)*)?
        (KW_ORDER KW_BY sortItem (COMMA sortItem)*)? RPAREN filter? over?                            #functionCall
    | identifier '->' expression                                                          #lambda
    | LPAREN (identifier (COMMA identifier)*)? RPAREN '->' expression                             #lambda
    | LPAREN query RPAREN                                                                       #subqueryExpression
    // This is an extension to ANSI SQL, which considers KW_EXISTS to be a <boolean expression>
    | KW_EXISTS LPAREN query RPAREN                                                                #exists
    | KW_CASE valueExpression whenClause+ (KW_ELSE elseExpression=expression)? KW_END              #simpleCase
    | KW_CASE whenClause+ (KW_ELSE elseExpression=expression)? KW_END                              #searchedCase
    | KW_CAST LPAREN expression KW_AS type RPAREN                                                     #cast
    | KW_TRY_CAST LPAREN expression KW_AS type RPAREN                                                 #cast
    | KW_ARRAY LSQUARE (expression (COMMA expression)*)? RSQUARE                                       #arrayConstructor
    | value=primaryExpression LSQUARE index=valueExpression RSQUARE                               #subscript
    | identifier                                                                          #columnReference
    | base=primaryExpression DOT fieldName=identifier                                     #dereference
    | name=KW_CURRENT_DATE                                                                   #specialDateTimeFunction
    | name=KW_CURRENT_TIME (LPAREN precision=INTEGER_VALUE  RPAREN)?                                #specialDateTimeFunction
    | name=KW_CURRENT_TIMESTAMP (LPAREN precision=INTEGER_VALUE  RPAREN)?                           #specialDateTimeFunction
    | name=KW_LOCALTIME (LPAREN precision=INTEGER_VALUE  RPAREN)?                                   #specialDateTimeFunction
    | name=KW_LOCALTIMESTAMP (LPAREN precision=INTEGER_VALUE  RPAREN)?                              #specialDateTimeFunction
    | name=KW_CURRENT_USER                                                                   #currentUser
    | name=KW_CURRENT_PATH                                                                   #currentPath
    | KW_SUBSTRING LPAREN valueExpression KW_FROM valueExpression (KW_FOR valueExpression)? RPAREN       #substring
    | KW_NORMALIZE LPAREN valueExpression (COMMA normalForm)? RPAREN                                 #normalize
    | KW_EXTRACT LPAREN identifier KW_FROM valueExpression RPAREN                                     #extract
    | LPAREN expression RPAREN                                                                  #parenthesizedExpression
    | KW_GROUPING LPAREN (qualifiedName (COMMA qualifiedName)*)? RPAREN                              #groupingOperation
    ;

string
    : STRING                                #basicStringLiteral
    | UNICODE_STRING (KW_UESCAPE STRING)?      #unicodeStringLiteral
    ;

comparisonOperator
    : EQ | NEQ | LT | LTE | GT | GTE
    ;

comparisonQuantifier
    : KW_ALL | KW_SOME | KW_ANY
    ;

booleanValue
    : KW_TRUE | KW_FALSE
    ;

interval
    : INTEGER_VALUE  intervalField
    | LPAREN INTEGER_VALUE  RPAREN intervalField
    | KW_INTERVAL INTEGER_VALUE  intervalField
    | KW_INTERVAL LPAREN INTEGER_VALUE  RPAREN intervalField
    ;

intervalField
    : KW_YEAR | KW_YEARS | KW_MONTH | KW_MONTHS | KW_DAY | KW_DAYS | KW_HOUR | KW_HOURS | KW_MINUTE | KW_MINUTES | KW_SECOND | KW_SECONDS
    ;

normalForm
    : KW_NFD | KW_NFC | KW_NFKD | KW_NFKC
    ;

type
    : type KW_ARRAY
    | KW_ARRAY LT type GT
    | KW_MAP LT type COMMA type GT
    | KW_STRUCT LT identifier COLON type (COMMA identifier COLON type)* GT
    | baseType (LPAREN typeParameter (COMMA typeParameter)* RPAREN)?
    ;

typeParameter
    : INTEGER_VALUE  | type
    ;

baseType
    : TIME_WITH_TIME_ZONE
    | TIMESTAMP_WITH_TIME_ZONE
    | DOUBLE_PRECISION
    | identifier
    ;

whenClause
    : KW_WHEN condition=expression KW_THEN result=expression
    ;

filter
    : KW_FILTER LPAREN KW_WHERE booleanExpression RPAREN
    ;

over
    : KW_OVER LPAREN
        (KW_PARTITION KW_BY partition+=expression (COMMA partition+=expression)*)?
        (KW_ORDER KW_BY sortItem (COMMA sortItem)*)?
        windowFrame?
      RPAREN
    ;

windowFrame
    : frameType=KW_RANGE start=frameBound
    | frameType=KW_ROWS start=frameBound
    | frameType=KW_RANGE KW_BETWEEN start=frameBound KW_AND end=frameBound
    | frameType=KW_ROWS KW_BETWEEN start=frameBound KW_AND end=frameBound
    ;

frameBound
    : KW_UNBOUNDED boundType=KW_PRECEDING                 #unboundedFrame
    | KW_UNBOUNDED boundType=KW_FOLLOWING                 #unboundedFrame
    | KW_CURRENT KW_ROW                                   #currentRowBound
    | expression boundType=(KW_PRECEDING | KW_FOLLOWING)  #boundedFrame
    ;

pathElement
    : identifier DOT identifier     #qualifiedArgument
    | identifier                    #unqualifiedArgument
    ;

pathSpecification
    : pathElement (COMMA pathElement)*
    ;

privilege
    : KW_ALL | KW_ALTER | KW_DROP | KW_CREATE | KW_INSERT | KW_REFRESH | KW_SELECT (LPAREN columnName=identifier RPAREN)?
    ;
objectType
    : KW_SERVER | KW_URI | KW_DATABASE | KW_TABLE
    ;
qualifiedName
    : identifier (DOT identifier)*
    ;

principal
    : KW_ROLE identifier       #rolePrincipal
    | KW_USER identifier       #userPrincipal
    | KW_GROUP identifier      #groupPrincipal
    ;

identifier
    : IDENTIFIER             #unquotedIdentifier
    | STRING                 #quotedIdentifier
    | nonReserved            #unquotedIdentifier
    | BACKQUOTED_IDENTIFIER  #backQuotedIdentifier
    | DIGIT_IDENTIFIER       #digitIdentifier
    ;

number
    : MINUS? DECIMAL_VALUE  #decimalLiteral
    | MINUS? DOUBLE_VALUE   #doubleLiteral
    | MINUS? INTEGER_VALUE   #integerLiteral
    ;

nonReserved
    // IMPORTANT: this rule must only contain tokens. Nested rules are not supported. See SqlParser.exitNonReserved
    : KW_ADD | KW_ADMIN | KW_ALL | KW_ANALYZE | KW_ANY | KW_ARRAY | KW_ASC | KW_AT
    | KW_BERNOULLI
    | KW_CALL | KW_CASCADE | KW_CATALOGS | KW_COLUMN | KW_COLUMNS | KW_COMMENT | KW_COMMIT | KW_COMMITTED | KW_CURRENT
    | KW_DATA | KW_DATABASE | KW_DATABASES | KW_DATE | KW_DAY | KW_DAYS | KW_DEFINER | KW_DESC
    | KW_EXCLUDING | KW_EXPLAIN
    | KW_FETCH | KW_FILTER | KW_FIRST | KW_FOLLOWING | KW_FORMAT | KW_FUNCTIONS
    | KW_GRANT | KW_GRANTED | KW_GRANTS | KW_GRAPHVIZ
    | KW_HOUR
    | KW_IF | KW_INCLUDING | KW_INPUT | KW_INTERVAL | KW_INVOKER | KW_IO | KW_ISOLATION
    | KW_JSON
    | KW_LAST | KW_LATERAL | KW_LEVEL | KW_LIMIT | KW_LOGICAL
    | KW_MAP | KW_MINUTE | KW_MONTH
    | KW_NEXT | KW_NFC | KW_NFD | KW_NFKC | KW_NFKD | KW_NO | KW_NONE | KW_NULLIF | KW_NULLS
    | KW_OFFSET | KW_ONLY | KW_OPTION | KW_ORDINALITY | KW_OUTPUT | KW_OVER
    | KW_PARTITION | KW_PARTITIONS | KW_PARQUET | KW_PATH | KW_POSITION | KW_PRECEDING | KW_PRIVILEGES | KW_PROPERTIES
    | KW_RANGE | KW_READ | KW_RENAME | KW_REPEATABLE | KW_REPLACE | KW_RESET | KW_RESTRICT | KW_REVOKE | KW_ROLE | KW_ROLES | KW_ROLLBACK | KW_ROW | KW_ROWS
    | KW_SCHEMA | KW_SCHEMAS | KW_SECOND | KW_SECONDS | KW_SECURITY | KW_SERIALIZABLE | KW_SESSION | KW_SET | KW_SETS
    | KW_SHOW | KW_SOME | KW_START | KW_STATS | KW_SUBSTRING | KW_SYSTEM
    | KW_TABLES | KW_TABLESAMPLE | KW_TEXT | KW_TIES | KW_TIME | KW_TIMESTAMP | KW_TO | KW_TRANSACTION | KW_TRY_CAST | KW_TYPE
    | KW_UNBOUNDED | KW_UNCOMMITTED | KW_USE | KW_USER
    | KW_VALIDATE | KW_VERBOSE | KW_VIEW | KW_VIEWS
    | KW_WORK | KW_WRITE
    | KW_YEAR
    | KW_ZONE
    | KW_DEFAULT
    ;