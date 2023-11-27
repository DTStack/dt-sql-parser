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

parser grammar ImpalaSqlParser;

options
{
    tokenVocab=ImpalaSqlLexer;
}

program : (statement SEMICOLON?)* EOF;

statement
    : queryStatement
    | useStatement
    | createStatement
    | alterStatement
    | truncateTableStatement
    | describeStatement
    | computeStatement
    | dropStatement
    | grantStatement
    | revokeStatement
    | insertStatement
    | deleteStatement
    | updateStatement
    | upsertStatement
    | showStatement
    | addCommentStatement
    | explainStatement
    | setStatement
    | shutdownStatement
    | invalidateMetaStatement
    | loadDataStatement
    | refreshStatement
    ;

useStatement: KW_USE databaseNamePath;

createStatement
    : createSchema
    | createRole
    | createAggregateFunction
    | createFunction
    | createView
    | createKuduTableAsSelect
    | createTableLike
    | createTableSelect
    ;

createTableSelect
    : KW_CREATE KW_EXTERNAL? KW_TABLE ifNotExists? tableNameCreate
        (LPAREN columnDefinition (COMMA columnDefinition)* (COMMA constraintSpecification)? RPAREN)?
        (KW_PARTITIONED KW_BY (partitionedBy | columnAliases) )?
        createCommonItem
        (KW_AS queryStatement)?
    ;

createTableLike
    : KW_CREATE KW_EXTERNAL? KW_TABLE ifNotExists? tableNameCreate
        KW_LIKE (tableNamePath | KW_PARQUET parquet=stringLiteral)
        (KW_PARTITIONED KW_BY partitionedBy)?
        createCommonItem
    ;

createKuduTableAsSelect
    : KW_CREATE KW_EXTERNAL? KW_TABLE ifNotExists? tableNameCreate
        (LPAREN kuduTableElement (COMMA kuduTableElement)* (COMMA KW_PRIMARY KW_KEY columnAliases)? RPAREN)?
        (KW_PRIMARY KW_KEY columnAliases?)?
        (KW_PARTITION KW_BY kuduPartitionClause)?
        (KW_COMMENT stringLiteral)?
        KW_STORED KW_AS KW_KUDU
        (KW_TBLPROPERTIES tblProp=properties)?
        (KW_AS queryStatement)?
    ;

createView: KW_CREATE KW_VIEW ifNotExists? viewNameCreate viewColumns? (KW_COMMENT stringLiteral)? (KW_TBLPROPERTIES tblProp=properties)? KW_AS queryStatement;

createSchema:
    KW_CREATE (KW_SCHEMA | KW_DATABASE) ifNotExists? databaseNameCreate
        (KW_COMMENT comment=stringLiteral)? (KW_LOCATION location=stringLiteral)?
    ;

createRole: KW_CREATE KW_ROLE name=identifier;

createAggregateFunction
    : KW_CREATE KW_AGGREGATE? KW_FUNCTION ifNotExists? functionNameCreate (LPAREN(type (COMMA type)*)? RPAREN)?
        KW_RETURNS type
        (KW_INTERMEDIATE type)?
        KW_LOCATION STRING
        (KW_INIT_FN EQ STRING)?
        KW_UPDATE_FN EQ STRING
        KW_MERGE_FN EQ STRING
        (KW_PREPARE_FN EQ STRING)?
        (KW_CLOSEFN EQ STRING)?
        (KW_SERIALIZE_FN EQ STRING)?
        (KW_FINALIZE_FN EQ STRING)?
    ;

createFunction
    : KW_CREATE KW_FUNCTION ifNotExists? functionNameCreate (LPAREN(type (COMMA type)*)? RPAREN)?
        (KW_RETURNS type)?
        KW_LOCATION STRING
        KW_SYMBOL EQ symbol=stringLiteral
    ;

alterStatement
    : alterDatabase
    | alterUnSetOrSetViewTblproperties
    | renameTable
    | alterViewOwner
    | alterView
    | renameView
    | dropPartitionByRangeOrValue
    | alterFormat
    | recoverPartitions
    | addPartitionByRangeOrValue
    | alterTableNonKuduOrKuduOnly
    | addSingleColumn
    | replaceOrAddColumns
    | editColumnDefine
    | alterStatsKey
    | alterPartitionCache
    | alterDropSingleColumn
    | alterTableOwner
    ;

alterDatabase: KW_ALTER KW_DATABASE databaseNamePath KW_SET KW_OWNER (KW_USER | KW_ROLE) identifier;

alterStatsKey: KW_ALTER KW_TABLE tableNamePath KW_SET KW_COLUMN KW_STATS columnNamePath LPAREN statsKey EQ stringLiteral (COMMA statsKey EQ stringLiteral)? RPAREN;

alterPartitionCache: KW_ALTER KW_TABLE tableNamePath (KW_PARTITION expression)? KW_SET ((KW_CACHED KW_IN stringLiteral (KW_WITH KW_REPLICATION EQ number)?) | KW_UNCACHED);

editColumnDefine: KW_ALTER KW_TABLE tableNamePath KW_CHANGE KW_COLUMN columnSpecWithKudu;

alterDropSingleColumn: KW_ALTER KW_TABLE tableNamePath KW_DROP (KW_COLUMN)? columnNamePath;

alterTableOwner: KW_ALTER KW_TABLE tableNamePath KW_SET KW_OWNER (KW_USER | KW_ROLE) identifier;

replaceOrAddColumns: KW_ALTER KW_TABLE tableNamePath (KW_REPLACE | KW_ADD ifNotExists?) KW_COLUMNS LPAREN columnSpecWithKudu (COMMA columnSpecWithKudu)*? RPAREN;

addSingleColumn: KW_ALTER KW_TABLE tableNamePath KW_ADD KW_COLUMN ifNotExists? columnSpecWithKudu;

alterTableNonKuduOrKuduOnly: KW_ALTER KW_TABLE tableNamePath KW_ALTER (KW_COLUMN)? columnNamePath (KW_SET (kuduStorageAttr | KW_COMMENT stringLiteral ) | KW_DROP KW_DEFAULT);

addPartitionByRangeOrValue: KW_ALTER KW_TABLE tableNamePath KW_ADD ifNotExists? (KW_PARTITION expression (KW_LOCATION stringLiteral)? (cacheSpec)? | KW_RANGE KW_PARTITION kuduPartitionSpec);

alterFormat: KW_ALTER KW_TABLE tableNamePath (KW_PARTITION expression)? KW_SET ((KW_FILEFORMAT fileFormat) | (KW_ROW KW_FORMAT rowFormat) | (KW_LOCATION stringLiteral) | (KW_TBLPROPERTIES tblProp=properties) | (KW_SERDEPROPERTIES tblProp=properties));

recoverPartitions: KW_ALTER KW_TABLE tableNamePath KW_RECOVER KW_PARTITIONS;

dropPartitionByRangeOrValue: KW_ALTER KW_TABLE tableNamePath KW_DROP ifExists? (KW_PARTITION expression KW_PURGE? | KW_RANGE KW_PARTITION kuduPartitionSpec);

alterView: KW_ALTER KW_VIEW viewNamePath viewColumns? KW_AS queryStatement;

renameView: KW_ALTER KW_VIEW viewNamePath KW_RENAME KW_TO viewNamePath;

alterViewOwner: KW_ALTER KW_VIEW viewNamePath KW_SET KW_OWNER (KW_USER | KW_ROLE) qualifiedName;

renameTable: KW_ALTER KW_TABLE tableNamePath KW_RENAME KW_TO tableNamePath;

alterUnSetOrSetViewTblproperties: KW_ALTER KW_VIEW viewNamePath (KW_UNSET | KW_SET) KW_TBLPROPERTIES tblProp=properties;

truncateTableStatement: KW_TRUNCATE KW_TABLE? ifExists? tableNamePath;

describeStatement: KW_DESCRIBE KW_DATABASE? (KW_FORMATTED | KW_EXTENDED)? (tableNamePath | databaseNamePath | columnNamePath);

computeStatement
    : computeStats
    | computeIncrementalStats
    ;

computeStats: KW_COMPUTE KW_STATS tableNamePath (columnAliases)? (KW_TABLESAMPLE KW_SYSTEM LPAREN number RPAREN (KW_REPEATABLE LPAREN number RPAREN)?)?;

computeIncrementalStats: KW_COMPUTE KW_INCREMENTAL KW_STATS tableNamePath (KW_PARTITION expression)?;

dropStatement
    : dropRole
    | dropFunction
    | dropIncrementalStats
    | dropView
    | dropTable
    | dropSchema
    ;

dropSchema: KW_DROP (KW_SCHEMA | KW_DATABASE) (ifExists)? databaseNamePath (KW_CASCADE | KW_RESTRICT)?;

dropView: KW_DROP KW_VIEW ifExists? viewNamePath;

dropTable: KW_DROP KW_TABLE ifExists? tableNamePath KW_PURGE?;

dropIncrementalStats: KW_DROP KW_INCREMENTAL? KW_STATS tableNamePath (KW_PARTITION expression)?;

dropFunction: KW_DROP KW_AGGREGATE? KW_FUNCTION ifExists? functionNamePath (LPAREN(type (COMMA type)*)? RPAREN)?;

dropRole: KW_DROP KW_ROLE name=identifier;

grantStatement
    : grantRole
    | grant
    ;

grantRole: KW_GRANT KW_ROLE identifier KW_TO KW_GROUP identifier;

grant: KW_GRANT privilege KW_ON objectType (qualifiedName)? KW_TO grantee=principal;

revokeStatement
    : revokeRole
    | revoke
    ;

revokeRole: KW_REVOKE KW_ROLE identifier KW_FROM KW_GROUP identifier;

revoke: KW_REVOKE (KW_GRANT KW_OPTION KW_FOR)? privilege KW_ON objectType (qualifiedName)? KW_FROM (grantee=principal | (KW_ROLE)? identifier);

insertStatement
    : with? KW_INSERT (KW_INTO | KW_OVERWRITE) KW_TABLE? tableNamePath
        columnAliases?
        (KW_PARTITION LPAREN expression(COMMA expression)*RPAREN)?
        queryStatement
    ;

deleteStatement
    : delete
    | deleteTableRef
    ;

delete: KW_DELETE KW_FROM? tableNamePath (KW_WHERE booleanExpression)?;

deleteTableRef: KW_DELETE tableNamePath (KW_AS? identifier)? KW_FROM (relation (COMMA relation)*)? (KW_WHERE booleanExpression)?;

updateStatement: KW_UPDATE tableNamePath KW_SET assignmentList (KW_FROM relation (COMMA relation)*)? (KW_WHERE booleanExpression)?;

upsertStatement: KW_UPSERT KW_INTO KW_TABLE? tableNamePath columnAliases? queryStatement;

showStatement
    : showRoles
    | showRoleGrant
    | showGrants
    | showFiles
    | showPartitions
    | showColumnStats
    | showTableStats
    | showCreateView
    | showCreateTable
    | showFunctions
    | showTables
    | showSchemas
    ;

showSchemas
    : KW_SHOW (KW_SCHEMAS | KW_DATABASES)
        (KW_LIKE? pattern=stringLiteral (BITWISEOR stringLiteral)*)?
    ;

showTables
    :
    KW_SHOW KW_TABLES (KW_IN tableNamePath)?
        (KW_LIKE? pattern=stringLiteral (BITWISEOR stringLiteral)*)?
    ;

showFunctions
    :
    KW_SHOW (KW_AGGREGATE | KW_ANALYTIC)? KW_FUNCTIONS (KW_IN databaseNamePath)?
        (KW_LIKE? pattern=stringLiteral (BITWISEOR stringLiteral)*)?
    ;

showCreateTable: KW_SHOW KW_CREATE KW_TABLE tableNamePath;

showCreateView: KW_SHOW KW_CREATE KW_VIEW viewNamePath;

showTableStats: KW_SHOW KW_TABLE KW_STATS tableNamePath;

showColumnStats: KW_SHOW KW_COLUMN KW_STATS tableNamePath;

showPartitions: KW_SHOW (KW_RANGE)? KW_PARTITIONS tableNamePath;

showFiles: KW_SHOW KW_FILES KW_IN tableNamePath (KW_PARTITION LPAREN expression (COMMA expression)?RPAREN)?;

showRoles: KW_SHOW (KW_CURRENT)? KW_ROLES;

showRoleGrant: KW_SHOW KW_ROLE KW_GRANT KW_GROUP identifier;

showGrants
    : showDatabaseGrant
    | showTableGrant
    | showColumnGrant
    | KW_SHOW KW_GRANT (KW_USER | KW_ROLE | KW_GROUP) identifier
        (KW_ON (KW_SERVER | KW_URI) (qualifiedName)?)?
    ;

showDatabaseGrant:
    KW_SHOW KW_GRANT (KW_USER | KW_ROLE | KW_GROUP) identifier
        (KW_ON KW_DATABASE (databaseNamePath)?)?
    ;

showTableGrant:
    KW_SHOW KW_GRANT (KW_USER | KW_ROLE | KW_GROUP) identifier
        (KW_ON KW_TABLE (tableNamePath)?)?
    ;

showColumnGrant:
    KW_SHOW KW_GRANT (KW_USER | KW_ROLE | KW_GROUP) identifier
        (KW_ON KW_COLUMN (columnNamePath)?)?
    ;

addCommentStatement
    : addDatabaseComments
    | addTableComments
    | addColumnComments
    ;

addDatabaseComments: KW_COMMENT KW_ON KW_DATABASE databaseNamePath KW_IS (stringLiteral | KW_NULL);

addTableComments: KW_COMMENT KW_ON KW_TABLE tableNamePath KW_IS (stringLiteral | KW_NULL);

addColumnComments: KW_COMMENT KW_ON KW_COLUMN columnNamePath KW_IS (stringLiteral | KW_NULL);

explainStatement: KW_EXPLAIN statement;

setStatement: KW_SET (KW_ALL | identifier EQ expression)?;

shutdownStatement: COLON KW_SHUTDOWN LPAREN (stringLiteral? | stringLiteral (COMMA expression)? | expression) RPAREN;

invalidateMetaStatement: KW_INVALIDATE KW_METADATA tableNamePath;

loadDataStatement:
    KW_LOAD KW_DATA KW_INPATH STRING (KW_OVERWRITE)? KW_INTO KW_TABLE tableNamePath
        (KW_PARTITION LPAREN expression (COMMA expression)?RPAREN)?
    ;

refreshStatement: refreshMeta | refreshAuth | refreshFunction;

refreshMeta: KW_REFRESH tableNamePath (KW_PARTITION LPAREN expression (COMMA expression)*? RPAREN)?;

refreshAuth: KW_REFRESH KW_AUTHORIZATION;

refreshFunction: KW_REFRESH KW_FUNCTIONS functionNamePath;

ifExists
    : KW_IF KW_EXISTS
    ;

ifNotExists
    : KW_IF KW_NOT KW_EXISTS
    ;

tableNameCreate
    : identifier
    | identifier (DOT identifier)?
    ;

databaseNameCreate: identifier;

viewNameCreate
    : identifier
    | identifier (DOT identifier)?
    ;

functionNameCreate: identifier | identifier (DOT identifier)?;

databaseNamePath: identifier;

tableNamePath
    : identifier
    | identifier (DOT identifier)?
    ;

viewNamePath
    : identifier
    | identifier (DOT identifier)?
    ;

functionNamePath: identifier | identifier (DOT identifier)?;

columnNamePath
    : identifier
    | identifier (DOT identifier)?
    | identifier DOT identifier (DOT identifier)?
    ;

tableOrViewPath: tableNamePath | viewNamePath;

createCommonItem
    :
    (KW_SORT KW_BY columnAliases)?
    (KW_COMMENT comment=stringLiteral)?
    (KW_ROW KW_FORMAT rowFormat)?
    (KW_WITH KW_SERDEPROPERTIES serdProp=properties)?
    (KW_STORED KW_AS fileFormat)?
    (KW_LOCATION location=stringLiteral)?
    (KW_CACHED KW_IN cacheName=qualifiedName (KW_WITH KW_REPLICATION EQ INTEGER_VALUE )? | KW_UNCACHED)?
    (KW_TBLPROPERTIES tblProp=properties)?
    ;

assignmentList
    :  assignmentItem (COMMA assignmentItem)*
    ;

assignmentItem
    :  qualifiedName EQ expression
    ;

viewColumns
    : LPAREN identifier (KW_COMMENT stringLiteral)? (COMMA identifier (KW_COMMENT stringLiteral)?)* RPAREN
    ;

queryStatement
    :  with? queryNoWith
    ;

with
    : KW_WITH namedQuery (COMMA namedQuery)*
    ;

constraintSpecification
    :
    KW_PRIMARY KW_KEY columnAliases (KW_DISABLE)? (KW_NOVALIDATE | COMMA KW_NOVALIDATE)? (KW_RELY | COMMA KW_RELY)? ((COMMA foreignKeySpecification | foreignKeySpecification) (COMMA foreignKeySpecification)*?)?
    ;

foreignKeySpecification
    :
    KW_FOREIGN KW_KEY columnAliases KW_REFERENCES tableNamePath columnAliases (KW_DISABLE)? (KW_NOVALIDATE)? (KW_RELY)?
    ;

columnDefinition
    : identifier type (KW_COMMENT stringLiteral)?
    ;

kuduTableElement
    : kuduColumnDefinition
    ;

kuduColumnDefinition
    : columnNamePath type (kuduAttributes kuduAttributes*?)? (KW_COMMENT stringLiteral)? (KW_PRIMARY KW_KEY )?
    ;

columnSpecWithKudu
    : columnNamePath type (KW_COMMENT stringLiteral)? (kuduAttributes kuduAttributes*?)?
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

fileFormat
    : KW_TEXTFILE
    | KW_PARQUET
    | KW_ORC
    | KW_AVRO
    | KW_SEQUENCEFILE
    | KW_RCFILE
    ;

kuduPartitionClause
    : (hashClause (COMMA hashClause)*? (COMMA rangeClause)?) | rangeClause
    ;

hashClause
    : KW_HASH columnAliases? KW_PARTITIONS number
    ;

rangeClause
    : KW_RANGE columnAliases? LPAREN (KW_PARTITION kuduPartitionSpec (COMMA KW_PARTITION kuduPartitionSpec)*?) RPAREN
    ;

kuduPartitionSpec
    : KW_VALUE partitionCol expression | (expression rangeOperator)? KW_VALUES (rangeOperator expression)?
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

properties
    : LPAREN property (COMMA property)* RPAREN
    ;

partitionedBy
    : LPAREN columnDefinition (COMMA columnDefinition)*? RPAREN
    ;

sortedBy
    : expression (COMMA expression)*
    ;

rowFormat
    : KW_DELIMITED (KW_FIELDS KW_TERMINATED KW_BY stringLiteral (KW_ESCAPED KW_BY stringLiteral)?)? (KW_LINES KW_TERMINATED KW_BY stringLiteral)?
    ;

property
    : identifier (EQ expression)?
    ;

queryNoWith:
      queryTerm
      (KW_ORDER KW_BY sortItem (COMMA sortItem)*)?
      (KW_LIMIT rows=expression (KW_OFFSET offset=INTEGER_VALUE )?)?
    ;

queryTerm
    : queryPrimary                                                             #queryTermDefault
    | left=queryTerm operator=KW_INTERSECT setQuantifier? right=queryTerm         #setOperation
    | left=queryTerm operator=(KW_UNION | KW_EXCEPT) setQuantifier? right=queryTerm  #setOperation
    ;

queryPrimary
    : querySpecification                   #queryPrimaryDefault
    | KW_TABLE tableNamePath                  #table
    | KW_VALUES expression (COMMA expression)*  #inlineTable
    | LPAREN queryNoWith RPAREN                 #subquery
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
    : name=identifier (columnAliases)? KW_AS subQueryRelation
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
        KW_TABLESAMPLE sampleType LPAREN percentage=expression RPAREN (KW_REPEATABLE LPAREN seed=expression RPAREN)?
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
    : LPAREN columnNamePath (COMMA columnNamePath)* RPAREN
    ;

relationPrimary
    : tableOrViewPath
    | KW_LATERAL? subQueryRelation
    | unnest
    | parenthesizedRelation
    ;

subQueryRelation: LPAREN queryStatement RPAREN;

unnest: KW_UNNEST LPAREN expression (COMMA expression)* RPAREN (KW_WITH KW_ORDINALITY)?;

parenthesizedRelation: LPAREN relation RPAREN;

expression
    : booleanExpression
    ;

booleanExpression
    : valueExpression predicate[$valueExpression.ctx]?             #predicated
    | KW_NOT booleanExpression                                        #logicalNot
    | left=booleanExpression operator=KW_AND right=booleanExpression  #logicalBinary
    | left=booleanExpression operator=KW_OR right=booleanExpression   #logicalBinary
    ;

predicate[ParserRuleContext value]
    : comparisonOperator right=valueExpression                            #comparison
    | comparisonOperator comparisonQuantifier subQueryRelation               #quantifiedComparison
    | KW_NOT? KW_BETWEEN lower=valueExpression KW_AND upper=valueExpression        #between
    | KW_NOT? KW_IN LPAREN expression (COMMA expression)* RPAREN                        #inList
    | KW_NOT? KW_IN subQueryRelation                                               #inSubquery
    | KW_NOT? KW_LIKE pattern=valueExpression (KW_ESCAPE escape=valueExpression)?  #like
    | KW_REGEXP pattern=valueExpression                      #REGEXP
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
    | identifier stringLiteral                                                                   #typeConstructor
    | DOUBLE_PRECISION stringLiteral                                                             #typeConstructor
    | number                                                                              #numericLiteral
    | booleanValue                                                                        #booleanLiteral
    | stringLiteral                                                                              #stringLiteralValues
    | BINARY_LITERAL                                                                      #binaryLiteral
    | QUESTION                                                                                 #parameter
    | KW_POSITION LPAREN valueExpression KW_IN valueExpression RPAREN                                 #position
    | LPAREN expression (KW_AS type)? (COMMA expression (KW_AS type)?)*? RPAREN                                                #rowConstructor
    | KW_ROW LPAREN expression (COMMA expression)* RPAREN                                            #rowConstructor
    | functionNamePath LPAREN ASTERISK RPAREN filter? over?                                        #functionCall
    | functionNamePath LPAREN (setQuantifier? expression (COMMA expression)*)?
        (KW_ORDER KW_BY sortItem (COMMA sortItem)*)? RPAREN filter? over?                            #functionCall
    | identifier RIGHT_ARROW expression                                                          #lambda
    | LPAREN (identifier (COMMA identifier)*)? RPAREN RIGHT_ARROW expression                             #lambda
    | LPAREN queryStatement RPAREN                                                                       #subqueryExpression
    | KW_EXISTS LPAREN queryStatement RPAREN                                                                #exists
    | KW_CASE valueExpression whenClause+ (KW_ELSE elseExpression=expression)? KW_END              #simpleCase
    | KW_CASE whenClause+ (KW_ELSE elseExpression=expression)? KW_END                              #searchedCase
    | KW_CAST LPAREN expression KW_AS type RPAREN                                                     #cast
    | KW_TRY_CAST LPAREN expression KW_AS type RPAREN                                                 #cast
    | KW_ARRAY LSQUARE (expression (COMMA expression)*)? RSQUARE                                       #arrayConstructor
    | value=primaryExpression LSQUARE index=valueExpression RSQUARE                               #subscript
    | columnNamePath                                                                          #columnReference
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

stringLiteral
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

/**
* replace start identifier with start_ in grammar.
* https://github.com/tunnelvisionlabs/antlr4ts/issues/417
*/
windowFrame
    : frameType=KW_RANGE start_=frameBound
    | frameType=KW_ROWS start_=frameBound
    | frameType=KW_RANGE KW_BETWEEN start_=frameBound KW_AND end=frameBound
    | frameType=KW_ROWS KW_BETWEEN start_=frameBound KW_AND end=frameBound
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
	: KW_ADD
	| KW_ALL
	| KW_ANY
	| KW_ARRAY
	| KW_ASC
	| KW_AT
	| KW_BERNOULLI
	| KW_CASCADE
	| KW_COLUMN
	| KW_COLUMNS
	| KW_COMMENT
	| KW_CURRENT
	| KW_DATA
	| KW_DATABASE
	| KW_DATABASES
	| KW_DAY
	| KW_DAYS
	| KW_DESC
	| KW_EXCLUDING
	| KW_EXPLAIN
	| KW_FILTER
	| KW_FIRST
	| KW_FOLLOWING
	| KW_FORMAT
	| KW_FUNCTIONS
	| KW_GRANT
	| KW_HOUR
	| KW_IF
	| KW_INCLUDING
	| KW_INTERVAL
	| KW_LAST
	| KW_LATERAL
	| KW_LIMIT
	| KW_MAP
	| KW_MINUTE
	| KW_MONTH
	| KW_NFC
	| KW_NFD
	| KW_NFKC
	| KW_NFKD
	| KW_NULLS
	| KW_OFFSET
	| KW_OPTION
	| KW_ORDINALITY
	| KW_OVER
	| KW_PARTITION
	| KW_PARTITIONS
	| KW_PARQUET
	| KW_POSITION
	| KW_PRECEDING
	| KW_PRIVILEGES
	| KW_PROPERTIES
	| KW_RANGE
	| KW_RENAME
	| KW_REPEATABLE
	| KW_REPLACE
	| KW_RESTRICT
	| KW_REVOKE
	| KW_ROLE
	| KW_ROLES
	| KW_ROW
	| KW_ROWS
	| KW_SCHEMA
	| KW_SCHEMAS
	| KW_SECOND
	| KW_SECONDS
	| KW_SET
	| KW_SHOW
	| KW_SOME
	| KW_STATS
	| KW_SUBSTRING
	| KW_SYSTEM
	| KW_TABLES
	| KW_TABLESAMPLE
    | KW_TRUNCATE
	| KW_TO
	| KW_TRY_CAST
	| KW_UNBOUNDED
	| KW_USE
	| KW_USER
	| KW_VIEW
	| KW_VIEWS
	| KW_YEAR
	| KW_DEFAULT
    ;