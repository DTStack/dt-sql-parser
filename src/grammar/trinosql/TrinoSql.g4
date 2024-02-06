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
 * This file is an adaptation of trino's trino/core/trino-parser/src/main/antlr4/io/trino/sql/parser/SqlBase.g4 grammar.
 * Reference: https://github.com/trinodb/trino/blob/385/core/trino-parser/src/main/antlr4/io/trino/sql/parser/SqlBase.g4
 */

// $antlr-format alignTrailingComments true, columnLimit 150, minEmptyLines 1, maxEmptyLinesToKeep 1, reflowComments false, useTab false
// $antlr-format allowShortRulesOnASingleLine false, allowShortBlocksOnASingleLine true, alignSemicolons hanging, alignColons hanging
// $antlr-format spaceBeforeAssignmentOperators false, keepEmptyLinesAtTheStartOfBlocks true

grammar TrinoSql;

tokens {
    DELIMITER
}

// Modified entrypoint
program
    : statements* EOF
    ;

statements
    : singleStatement
    ;

standaloneClause
    : standaloneExpression
    | standalonePathSpecification
    | standaloneType
    | standaloneRowPattern
    ;

singleStatement
    : statement SEMICOLON?
    ;

standaloneExpression
    : expression SEMICOLON?
    ;

standalonePathSpecification
    : pathSpecification SEMICOLON?
    ;

standaloneType
    : type SEMICOLON?
    ;

standaloneRowPattern
    : rowPattern SEMICOLON?
    ;

statement
    : query             # statementDefault
    | KW_USE schemaName # use
    | KW_CREATE KW_SCHEMA (KW_IF KW_NOT KW_EXISTS)? schemaNameCreate (KW_AUTHORIZATION principal)? (
        KW_WITH properties
    )?                                                                            # createSchema
    | KW_DROP KW_SCHEMA (KW_IF KW_EXISTS)? schemaName (KW_CASCADE | KW_RESTRICT)? # dropSchema
    | KW_ALTER KW_SCHEMA schemaName KW_RENAME KW_TO schemaNameCreate              # renameSchema
    | KW_ALTER KW_SCHEMA schemaName KW_SET KW_AUTHORIZATION principal             # setSchemaAuthorization
    | KW_CREATE KW_TABLE (KW_IF KW_NOT KW_EXISTS)? tableNameCreate columnListCreate? (
        KW_COMMENT string
    )? (KW_WITH properties)? KW_AS (query | '(' query ')') (KW_WITH (KW_NO)? KW_DATA)? # createTableAsSelect
    | KW_CREATE KW_TABLE (KW_IF KW_NOT KW_EXISTS)? tableNameCreate '(' tableElement (
        ',' tableElement
    )* ')' (KW_COMMENT string)? (KW_WITH properties)?                                                                                   # createTable
    | KW_DROP KW_TABLE (KW_IF KW_EXISTS)? tableName                                                                                     # dropTable
    | KW_INSERT KW_INTO tableName columnList? query                                                                                     # insertInto
    | KW_DELETE KW_FROM tableName (KW_WHERE booleanExpression)?                                                                         # delete
    | KW_TRUNCATE KW_TABLE tableName                                                                                                    # truncateTable
    | KW_ALTER KW_TABLE (KW_IF KW_EXISTS)? from= tableName KW_RENAME KW_TO to= tableNameCreate                                          # renameTable
    | KW_COMMENT KW_ON KW_TABLE tableName KW_IS (string | KW_NULL)                                                                      # commentTable
    | KW_COMMENT KW_ON KW_COLUMN columnName KW_IS (string | KW_NULL)                                                                    # commentColumn
    | KW_ALTER KW_TABLE (KW_IF KW_EXISTS)? tableName KW_RENAME KW_COLUMN (KW_IF KW_EXISTS)? from= columnName KW_TO to= columnNameCreate # renameColumn
    | KW_ALTER KW_TABLE (KW_IF KW_EXISTS)? tableName KW_DROP KW_COLUMN (KW_IF KW_EXISTS)? column= columnName                            # dropColumn
    | KW_ALTER KW_TABLE (KW_IF KW_EXISTS)? tableName KW_ADD KW_COLUMN (KW_IF KW_NOT KW_EXISTS)? column= columnDefinition                # addColumn
    | KW_ALTER KW_TABLE tableName KW_SET KW_AUTHORIZATION principal                                                                     # setTableAuthorization
    | KW_ALTER KW_TABLE tableName KW_SET KW_PROPERTIES propertyAssignments                                                              # setTableProperties
    | KW_ALTER KW_TABLE tableName KW_EXECUTE procedureName= identifier (
        '(' (callArgument (',' callArgument)*)? ')'
    )? (KW_WHERE where= booleanExpression)?      # tableExecute
    | KW_ANALYZE tableName (KW_WITH properties)? # analyze
    | KW_CREATE (KW_OR KW_REPLACE)? KW_MATERIALIZED KW_VIEW (KW_IF KW_NOT KW_EXISTS)? viewNameCreate (
        KW_COMMENT string
    )? (KW_WITH properties)? KW_AS query # createMaterializedView
    | KW_CREATE (KW_OR KW_REPLACE)? KW_VIEW viewNameCreate (KW_COMMENT string)? (
        KW_SECURITY (KW_DEFINER | KW_INVOKER)
    )? KW_AS query                                                                                          # createView
    | KW_REFRESH KW_MATERIALIZED KW_VIEW viewName                                                           # refreshMaterializedView
    | KW_DROP KW_MATERIALIZED KW_VIEW (KW_IF KW_EXISTS)? viewName                                           # dropMaterializedView
    | KW_ALTER KW_MATERIALIZED KW_VIEW (KW_IF KW_EXISTS)? from= viewName KW_RENAME KW_TO to= viewNameCreate # renameMaterializedView
    | KW_ALTER KW_MATERIALIZED KW_VIEW viewName KW_SET KW_PROPERTIES propertyAssignments                    # setMaterializedViewProperties
    | KW_DROP KW_VIEW (KW_IF KW_EXISTS)? viewName                                                           # dropView
    | KW_ALTER KW_VIEW from= viewName KW_RENAME KW_TO to= viewNameCreate                                    # renameView
    | KW_ALTER KW_VIEW from= viewName KW_SET KW_AUTHORIZATION principal                                     # setViewAuthorization
    | KW_CALL functionName '(' (callArgument (',' callArgument)*)? ')'                                      # call
    | KW_CREATE KW_ROLE name= identifier (KW_WITH KW_ADMIN grantor)? (KW_IN catalogName)?                   # createRole
    | KW_DROP KW_ROLE name= identifier                                                                      # dropRole
    | KW_GRANT roles KW_TO principal (',' principal)* (KW_WITH KW_ADMIN KW_OPTION)? (
        KW_GRANTED KW_BY grantor
    )? (KW_IN catalogName)? # grantRoles
    | KW_REVOKE (KW_ADMIN KW_OPTION KW_FOR)? roles KW_FROM principal (',' principal)* (
        KW_GRANTED KW_BY grantor
    )? (KW_IN catalogName)?                                                     # revokeRoles
    | KW_SET KW_ROLE (KW_ALL | KW_NONE | role= identifier) (KW_IN catalogName)? # setRole
    | KW_GRANT (privilege (',' privilege)* | KW_ALL KW_PRIVILEGES) KW_ON (
        KW_SCHEMA? schemaName
        | KW_TABLE? tableName
    )? KW_TO grantee= principal (KW_WITH KW_GRANT KW_OPTION)? # grant
    | KW_DENY (privilege (',' privilege)* | KW_ALL KW_PRIVILEGES) KW_ON (
        KW_SCHEMA? schemaName
        | KW_TABLE? tableName
    ) KW_TO grantee= principal # deny
    | KW_REVOKE (KW_GRANT KW_OPTION KW_FOR)? (privilege (',' privilege)* | KW_ALL KW_PRIVILEGES) KW_ON (
        KW_SCHEMA? schemaName
        | KW_TABLE? tableName
    )? KW_FROM grantee= principal                                                                # revoke
    | KW_SHOW KW_GRANTS (KW_ON KW_TABLE? tableName)?                                             # showGrants
    | KW_EXPLAIN KW_ANALYZE? KW_VERBOSE? ('(' explainOption (',' explainOption)* ')')? statement # explain
    | KW_SHOW KW_CREATE KW_TABLE tableName                                                       # showCreateTable
    | KW_SHOW KW_CREATE KW_SCHEMA schemaName                                                     # showCreateSchema
    | KW_SHOW KW_CREATE KW_VIEW viewName                                                         # showCreateView
    | KW_SHOW KW_CREATE KW_MATERIALIZED KW_VIEW viewName                                         # showCreateMaterializedView
    | KW_SHOW KW_TABLES ((KW_FROM | KW_IN) schemaName)? (
        KW_LIKE pattern= string (KW_ESCAPE escape= string)?
    )? # showTables
    | KW_SHOW KW_SCHEMAS ((KW_FROM | KW_IN) catalogName)? (
        KW_LIKE pattern= string (KW_ESCAPE escape= string)?
    )?                                                                           # showSchemas
    | KW_SHOW KW_CATALOGS (KW_LIKE pattern= string (KW_ESCAPE escape= string)?)? # showCatalogs
    | KW_SHOW KW_COLUMNS (KW_FROM | KW_IN) tableOrViewName? (
        KW_LIKE pattern= string (KW_ESCAPE escape= string)?
    )?                                                                            # showColumns
    | KW_SHOW KW_STATS KW_FOR tableName                                           # showStats
    | KW_SHOW KW_STATS KW_FOR '(' query ')'                                       # showStatsForQuery
    | KW_SHOW KW_CURRENT? KW_ROLES ((KW_FROM | KW_IN) identifier)?                # showRoles
    | KW_SHOW KW_ROLE KW_GRANTS ((KW_FROM | KW_IN) identifier)?                   # showRoleGrants
    | KW_DESCRIBE tableOrViewName                                                 # showColumns
    | KW_DESC tableOrViewName                                                     # showColumns
    | KW_SHOW KW_FUNCTIONS (KW_LIKE pattern= string (KW_ESCAPE escape= string)?)? # showFunctions
    | KW_SHOW KW_SESSION (KW_LIKE pattern= string (KW_ESCAPE escape= string)?)?   # showSession
    | KW_SET KW_SESSION qualifiedName EQ expression                               # setSession
    | KW_RESET KW_SESSION qualifiedName                                           # resetSession
    | KW_START KW_TRANSACTION (transactionMode (',' transactionMode)*)?           # startTransaction
    | KW_COMMIT KW_WORK?                                                          # commit
    | KW_ROLLBACK KW_WORK?                                                        # rollback
    | KW_PREPARE identifier KW_FROM statement                                     # prepare
    | KW_DEALLOCATE KW_PREPARE identifier                                         # deallocate
    | KW_EXECUTE identifier (KW_USING expression (',' expression)*)?              # execute
    | KW_DESCRIBE KW_INPUT identifier                                             # describeInput
    | KW_DESCRIBE KW_OUTPUT identifier                                            # describeOutput
    | KW_SET KW_PATH pathSpecification                                            # setPath
    | KW_SET KW_TIME KW_ZONE (KW_LOCAL | expression)                              # setTimeZone
    | KW_UPDATE tableName KW_SET updateAssignment (',' updateAssignment)* (
        KW_WHERE where= booleanExpression
    )?                                                                                              # update
    | KW_MERGE KW_INTO tableName (KW_AS? identifier)? KW_USING relation KW_ON expression mergeCase+ # merge
    | KW_SHOW KW_COMMENT KW_ON KW_TABLE tableName                                                   # showTableComment
    | KW_SHOW KW_COMMENT KW_ON KW_COLUMN columnName                                                 # showColumnComment
    ;

query
    : with? queryNoWith # queryStatement
    ;

with
    : KW_WITH KW_RECURSIVE? namedQuery (',' namedQuery)*
    ;

tableElement
    : columnDefinition
    | likeClause
    ;

columnDefinition
    : columnNameCreate type (KW_NOT KW_NULL)? (KW_COMMENT string)? (KW_WITH properties)?
    ;

likeClause
    : KW_LIKE tableName (optionType= (KW_INCLUDING | KW_EXCLUDING) KW_PROPERTIES)?
    ;

properties
    : '(' propertyAssignments ')'
    ;

propertyAssignments
    : property (',' property)*
    ;

property
    : identifier EQ propertyValue
    ;

propertyValue
    : KW_DEFAULT # defaultPropertyValue
    | expression # nonDefaultPropertyValue
    ;

queryNoWith
    : queryTerm (KW_ORDER KW_BY sortItem (',' sortItem)*)? (
        KW_OFFSET offset= rowCount (KW_ROW | KW_ROWS)?
    )? (
        (KW_LIMIT limit= limitRowCount)
        | (
            KW_FETCH (KW_FIRST | KW_NEXT) (fetchFirst= rowCount)? (KW_ROW | KW_ROWS) (
                KW_ONLY
                | KW_WITH KW_TIES
            )
        )
    )?
    ;

limitRowCount
    : KW_ALL
    | rowCount
    ;

rowCount
    : INTEGER_VALUE
    | QUESTION_MARK
    ;

queryTerm
    : queryPrimary                                                                     # queryTermDefault
    | left= queryTerm operator= KW_INTERSECT setQuantifier? right= queryTerm           # setOperation
    | left= queryTerm operator= (KW_UNION | KW_EXCEPT) setQuantifier? right= queryTerm # setOperation
    ;

queryPrimary
    : querySpecification                     # queryPrimaryDefault
    | KW_TABLE tableName                     # table
    | KW_VALUES expression (',' expression)* # inlineTable
    | '(' queryNoWith ')'                    # subquery
    ;

sortItem
    : (columnName | expression) ordering= (KW_ASC | KW_DESC)? (
        KW_NULLS nullOrdering= (KW_FIRST | KW_LAST)
    )?
    ;

querySpecification
    : KW_SELECT setQuantifier? selectItem (',' selectItem)* (KW_FROM relation (',' relation)*)? (
        KW_WHERE where= booleanExpression
    )? (KW_GROUP KW_BY groupBy)? (KW_HAVING having= booleanExpression)? (
        KW_WINDOW windowDefinition (',' windowDefinition)*
    )?
    ;

groupBy
    : setQuantifier? groupingElement (',' groupingElement)*
    ;

groupingElement
    : groupingSet                                                # singleGroupingSet
    | KW_ROLLUP '(' (groupingTerm (',' groupingTerm)*)? ')'      # rollup
    | KW_CUBE '(' (groupingTerm (',' groupingTerm)*)? ')'        # cube
    | KW_GROUPING KW_SETS '(' groupingSet (',' groupingSet)* ')' # multipleGroupingSets
    ;

groupingSet
    : '(' (groupingTerm (',' groupingTerm)*)? ')'
    | groupingTerm
    ;

groupingTerm
    : columnName
    | expression
    ;

windowDefinition
    : name= identifier KW_AS '(' windowSpecification ')'
    ;

windowSpecification
    : (existingWindowName= identifier)? (
        KW_PARTITION KW_BY partition+= expression (',' partition+= expression)*
    )? (KW_ORDER KW_BY sortItem (',' sortItem)*)? windowFrame?
    ;

namedQuery
    : name= identifier (columnAliases)? KW_AS '(' query ')'
    ;

setQuantifier
    : KW_DISTINCT
    | KW_ALL
    ;

selectItem
    : (columnName | expression) (KW_AS? identifier)?        # selectSingle
    | primaryExpression '.' ASTERISK (KW_AS columnAliases)? # selectAll
    | ASTERISK                                              # selectAll
    ;

relation
    : left= relation (
        KW_CROSS KW_JOIN right= sampledRelation
        | joinType KW_JOIN rightRelation= relation joinCriteria
        | KW_NATURAL joinType KW_JOIN right= sampledRelation
    )                 # joinRelation
    | sampledRelation # relationDefault
    ;

joinType
    : KW_INNER?
    | KW_LEFT KW_OUTER?
    | KW_RIGHT KW_OUTER?
    | KW_FULL KW_OUTER?
    ;

joinCriteria
    : KW_ON booleanExpression
    | KW_USING '(' identifier (',' identifier)* ')'
    ;

sampledRelation
    : patternRecognition (KW_TABLESAMPLE sampleType '(' percentage= expression ')')?
    ;

sampleType
    : KW_BERNOULLI
    | KW_SYSTEM
    ;

patternRecognition
    : aliasedRelation (
        KW_MATCH_RECOGNIZE '(' (
            KW_PARTITION KW_BY partition+= expression (',' partition+= expression)*
        )? (KW_ORDER KW_BY sortItem (',' sortItem)*)? (
            KW_MEASURES measureDefinition (',' measureDefinition)*
        )? rowsPerMatch? (KW_AFTER KW_MATCH skipTo)? (KW_INITIAL | KW_SEEK)? KW_PATTERN '(' rowPattern ')' (
            KW_SUBSET subsetDefinition (',' subsetDefinition)*
        )? KW_DEFINE variableDefinition (',' variableDefinition)* ')' (
            KW_AS? identifier columnAliases?
        )?
    )?
    ;

measureDefinition
    : expression KW_AS identifier
    ;

rowsPerMatch
    : KW_ONE KW_ROW KW_PER KW_MATCH
    | KW_ALL KW_ROWS KW_PER KW_MATCH emptyMatchHandling?
    ;

emptyMatchHandling
    : KW_SHOW KW_EMPTY KW_MATCHES
    | KW_OMIT KW_EMPTY KW_MATCHES
    | KW_WITH KW_UNMATCHED KW_ROWS
    ;

skipTo
    : 'SKIP' KW_TO KW_NEXT KW_ROW
    | 'SKIP' KW_PAST KW_LAST KW_ROW
    | 'SKIP' KW_TO KW_FIRST identifier
    | 'SKIP' KW_TO KW_LAST identifier
    | 'SKIP' KW_TO identifier
    ;

subsetDefinition
    : name= identifier EQ '(' union+= identifier (',' union+= identifier)* ')'
    ;

variableDefinition
    : identifier KW_AS expression
    ;

aliasedRelation
    : relationPrimary (KW_AS? identifier columnAliases?)?
    ;

columnListCreate
    : '(' columnNameCreate (',' columnNameCreate)* ')'
    ;

columnList
    : '(' columnName (',' columnName)* ')'
    ;

columnAliases
    : '(' identifier (',' identifier)* ')'
    ;

relationPrimary
    : tableOrViewName                                                         # tableOrViewRelation
    | '(' query ')'                                                           # subqueryRelation
    | KW_UNNEST '(' expression (',' expression)* ')' (KW_WITH KW_ORDINALITY)? # unnest
    | KW_LATERAL '(' query ')'                                                # lateral
    | '(' relation ')'                                                        # parenthesizedRelation
    ;

expression
    : booleanExpression
    ;

booleanExpression
    : valueExpression predicate[$valueExpression.ctx]?                  # predicated
    | KW_NOT booleanExpression                                          # logicalNot
    | left= booleanExpression operator= KW_AND right= booleanExpression # logicalBinary
    | left= booleanExpression operator= KW_OR right= booleanExpression  # logicalBinary
    ;

// workaround for https://github.com/antlr/antlr4/issues/780
predicate[ParserRuleContext value]
    : comparisonOperator right= valueExpression                                     # comparison
    | comparisonOperator comparisonQuantifier '(' query ')'                         # quantifiedComparison
    | KW_NOT? KW_BETWEEN lower= valueExpression KW_AND upper= valueExpression       # between
    | KW_NOT? KW_IN '(' expression (',' expression)* ')'                            # inList
    | KW_NOT? KW_IN '(' query ')'                                                   # inSubquery
    | KW_NOT? KW_LIKE pattern= valueExpression (KW_ESCAPE escape= valueExpression)? # like
    | KW_IS KW_NOT? KW_NULL                                                         # nullPredicate
    | KW_IS KW_NOT? KW_DISTINCT KW_FROM right= valueExpression                      # distinctFrom
    ;

valueExpression
    : primaryExpression                                                                   # valueExpressionDefault
    | valueExpression KW_AT timeZoneSpecifier                                             # atTimeZone
    | operator= (MINUS | PLUS) valueExpression                                            # arithmeticUnary
    | left= valueExpression operator= (ASTERISK | SLASH | PERCENT) right= valueExpression # arithmeticBinary
    | left= valueExpression operator= (PLUS | MINUS) right= valueExpression               # arithmeticBinary
    | left= valueExpression CONCAT right= valueExpression                                 # concatenation
    ;

primaryExpression
    : KW_NULL                                                   # nullLiteral
    | interval                                                  # intervalLiteral
    | identifier string                                         # typeConstructor
    | KW_DOUBLE KW_PRECISION string                             # typeConstructor
    | number                                                    # numericLiteral
    | booleanValue                                              # booleanLiteral
    | string                                                    # stringLiteral
    | BINARY_LITERAL                                            # binaryLiteral
    | QUESTION_MARK                                             # parameter
    | KW_POSITION '(' valueExpression KW_IN valueExpression ')' # position
    | '(' expression (',' expression)+ ')'                      # rowConstructor
    | KW_ROW '(' expression (',' expression)* ')'               # rowConstructor
    | functionName '(' ASTERISK ')' filter? over?               # functionCall
    | processingMode? functionName '(' (setQuantifier? expression (',' expression)*)? (
        KW_ORDER KW_BY sortItem (',' sortItem)*
    )? ')' filter? (nullTreatment? over)?                     # functionCall
    | identifier over                                         # measure
    | identifier '->' expression                              # lambda
    | '(' (identifier (',' identifier)*)? ')' '->' expression # lambda
    | '(' query ')'                                           # subqueryExpression
    // This is an extension to ANSI SQL, which considers KW_EXISTS to be a <boolean expression>
    | KW_EXISTS '(' query ')'                                                                # exists
    | KW_CASE operand= expression whenClause+ (KW_ELSE elseExpression= expression)? KW_END   # simpleCase
    | KW_CASE whenClause+ (KW_ELSE elseExpression= expression)? KW_END                       # searchedCase
    | KW_CAST '(' expression KW_AS type ')'                                                  # cast
    | KW_TRY_CAST '(' expression KW_AS type ')'                                              # cast
    | KW_ARRAY '[' (expression (',' expression)*)? ']'                                       # arrayConstructor
    | value= primaryExpression '[' index= valueExpression ']'                                # subscript
    | identifier                                                                             # columnReference
    | base= primaryExpression '.' fieldName= identifier                                      # dereference
    | name= KW_CURRENT_DATE                                                                  # specialDateTimeFunction
    | name= KW_CURRENT_TIME ('(' precision= INTEGER_VALUE ')')?                              # specialDateTimeFunction
    | name= KW_CURRENT_TIMESTAMP ('(' precision= INTEGER_VALUE ')')?                         # specialDateTimeFunction
    | name= KW_LOCALTIME ('(' precision= INTEGER_VALUE ')')?                                 # specialDateTimeFunction
    | name= KW_LOCALTIMESTAMP ('(' precision= INTEGER_VALUE ')')?                            # specialDateTimeFunction
    | name= KW_CURRENT_USER                                                                  # currentUser
    | name= KW_CURRENT_CATALOG                                                               # currentCatalog
    | name= KW_CURRENT_SCHEMA                                                                # currentSchema
    | name= KW_CURRENT_PATH                                                                  # currentPath
    | KW_SUBSTRING '(' valueExpression KW_FROM valueExpression (KW_FOR valueExpression)? ')' # substring
    | KW_NORMALIZE '(' valueExpression (',' normalForm)? ')'                                 # normalize
    | KW_EXTRACT '(' identifier KW_FROM valueExpression ')'                                  # extract
    | '(' expression ')'                                                                     # parenthesizedExpression
    | KW_GROUPING '(' (qualifiedName (',' qualifiedName)*)? ')'                              # groupingOperation
    ;

processingMode
    : KW_RUNNING
    | KW_FINAL
    ;

nullTreatment
    : KW_IGNORE KW_NULLS
    | KW_RESPECT KW_NULLS
    ;

string
    : STRING                              # basicStringLiteral
    | UNICODE_STRING (KW_UESCAPE STRING)? # unicodeStringLiteral
    ;

timeZoneSpecifier
    : KW_TIME KW_ZONE interval # timeZoneInterval
    | KW_TIME KW_ZONE string   # timeZoneString
    ;

comparisonOperator
    : EQ
    | NEQ
    | LT
    | LTE
    | GT
    | GTE
    ;

comparisonQuantifier
    : KW_ALL
    | KW_SOME
    | KW_ANY
    ;

booleanValue
    : KW_TRUE
    | KW_FALSE
    ;

interval
    : KW_INTERVAL sign= (PLUS | MINUS)? string from= intervalField (KW_TO to= intervalField)?
    ;

intervalField
    : KW_YEAR
    | KW_MONTH
    | KW_DAY
    | KW_HOUR
    | KW_MINUTE
    | KW_SECOND
    ;

normalForm
    : KW_NFD
    | KW_NFC
    | KW_NFKD
    | KW_NFKC
    ;

type
    : KW_ROW '(' rowField (',' rowField)* ')'                                              # rowType
    | KW_INTERVAL from= intervalField (KW_TO to= intervalField)?                           # intervalType
    | base= KW_TIMESTAMP ('(' precision= typeParameter ')')? (KW_WITHOUT KW_TIME KW_ZONE)? # dateTimeType
    | base= KW_TIMESTAMP ('(' precision= typeParameter ')')? KW_WITH KW_TIME KW_ZONE       # dateTimeType
    | base= KW_TIME ('(' precision= typeParameter ')')? (KW_WITHOUT KW_TIME KW_ZONE)?      # dateTimeType
    | base= KW_TIME ('(' precision= typeParameter ')')? KW_WITH KW_TIME KW_ZONE            # dateTimeType
    | KW_DOUBLE KW_PRECISION                                                               # doublePrecisionType
    | KW_ARRAY '<' type '>'                                                                # legacyArrayType
    | KW_MAP '<' keyType= type ',' valueType= type '>'                                     # legacyMapType
    | type KW_ARRAY ('[' INTEGER_VALUE ']')?                                               # arrayType
    | identifier ('(' typeParameter (',' typeParameter)* ')')?                             # genericType
    ;

rowField
    : type
    | identifier type
    ;

typeParameter
    : INTEGER_VALUE
    | type
    ;

whenClause
    : KW_WHEN condition= expression KW_THEN result= expression
    ;

filter
    : KW_FILTER '(' KW_WHERE booleanExpression ')'
    ;

mergeCase
    : KW_WHEN KW_MATCHED (KW_AND condition= expression)? KW_THEN KW_UPDATE KW_SET targets+= identifier EQ values+= expression (
        ',' targets+= identifier EQ values+= expression
    )*                                                                     # mergeUpdate
    | KW_WHEN KW_MATCHED (KW_AND condition= expression)? KW_THEN KW_DELETE # mergeDelete
    | KW_WHEN KW_NOT KW_MATCHED (KW_AND condition= expression)? KW_THEN KW_INSERT (
        '(' targets+= identifier (',' targets+= identifier)* ')'
    )? KW_VALUES '(' values+= expression (',' values+= expression)* ')' # mergeInsert
    ;

over
    : KW_OVER (windowName= identifier | '(' windowSpecification ')')
    ;

windowFrame
    : (KW_MEASURES measureDefinition (',' measureDefinition)*)? frameExtent (
        KW_AFTER KW_MATCH skipTo
    )? (KW_INITIAL | KW_SEEK)? (KW_PATTERN '(' rowPattern ')')? (
        KW_SUBSET subsetDefinition (',' subsetDefinition)*
    )? (KW_DEFINE variableDefinition (',' variableDefinition)*)?
    ;

frameExtent
    : frameType= KW_RANGE frameStart= frameBound
    | frameType= KW_ROWS frameStart= frameBound
    | frameType= KW_GROUPS frameStart= frameBound
    | frameType= KW_RANGE KW_BETWEEN frameStart= frameBound KW_AND end= frameBound
    | frameType= KW_ROWS KW_BETWEEN frameStart= frameBound KW_AND end= frameBound
    | frameType= KW_GROUPS KW_BETWEEN frameStart= frameBound KW_AND end= frameBound
    ;

frameBound
    : KW_UNBOUNDED boundType= KW_PRECEDING                # unboundedFrame
    | KW_UNBOUNDED boundType= KW_FOLLOWING                # unboundedFrame
    | KW_CURRENT KW_ROW                                   # currentRowBound
    | expression boundType= (KW_PRECEDING | KW_FOLLOWING) # boundedFrame
    ;

rowPattern
    : patternPrimary patternQuantifier? # quantifiedPrimary
    | rowPattern rowPattern             # patternConcatenation
    | rowPattern '|' rowPattern         # patternAlternation
    ;

patternPrimary
    : identifier                                      # patternVariable
    | '(' ')'                                         # emptyPattern
    | KW_PERMUTE '(' rowPattern (',' rowPattern)* ')' # patternPermutation
    | '(' rowPattern ')'                              # groupedPattern
    | '^'                                             # partitionStartAnchor
    | '$'                                             # partitionEndAnchor
    | '{-' rowPattern '-}'                            # excludedPattern
    ;

patternQuantifier
    : ASTERISK (reluctant= QUESTION_MARK)?                                                       # zeroOrMoreQuantifier
    | PLUS (reluctant= QUESTION_MARK)?                                                           # oneOrMoreQuantifier
    | QUESTION_MARK (reluctant= QUESTION_MARK)?                                                  # zeroOrOneQuantifier
    | '{' exactly= INTEGER_VALUE '}' (reluctant= QUESTION_MARK)?                                 # rangeQuantifier
    | '{' (atLeast= INTEGER_VALUE)? ',' (atMost= INTEGER_VALUE)? '}' (reluctant= QUESTION_MARK)? # rangeQuantifier
    ;

updateAssignment
    : identifier EQ expression
    ;

explainOption
    : KW_FORMAT value= (KW_TEXT | KW_GRAPHVIZ | KW_JSON)                 # explainFormat
    | KW_TYPE value= (KW_LOGICAL | KW_DISTRIBUTED | KW_VALIDATE | KW_IO) # explainType
    ;

transactionMode
    : KW_ISOLATION KW_LEVEL levelOfIsolation   # isolationLevel
    | KW_READ accessMode= (KW_ONLY | KW_WRITE) # transactionAccessMode
    ;

levelOfIsolation
    : KW_READ KW_UNCOMMITTED # readUncommitted
    | KW_READ KW_COMMITTED   # readCommitted
    | KW_REPEATABLE KW_READ  # repeatableRead
    | KW_SERIALIZABLE        # serializable
    ;

callArgument
    : expression                 # positionalArgument
    | identifier '=>' expression # namedArgument
    ;

pathElement
    : identifier '.' identifier # qualifiedArgument
    | identifier                # unqualifiedArgument
    ;

pathSpecification
    : pathElement (',' pathElement)*
    ;

privilege
    : KW_SELECT
    | KW_DELETE
    | KW_INSERT
    | KW_UPDATE
    ;

tableOrViewName
    : tableName
    | viewName
    ;

tableName
    : tablePath
    ;

tableNameCreate
    : tablePath
    ;

viewName
    : viewPath
    ;

viewNameCreate
    : viewPath
    ;

tablePath
    : table= identifier
    | schema= identifier '.' table= identifier
    | catalog= identifier '.' schema= identifier '.' table= identifier
    ;

viewPath
    : view= identifier
    | schema= identifier '.' view= identifier
    | catalog= identifier '.' schema= identifier '.' view= identifier
    ;

schemaName
    : schemaPath
    ;

schemaNameCreate
    : schemaPath
    ;

schemaPath
    : schema= identifier
    | catalog= identifier '.' schema= identifier
    ;

catalogName
    : catalog= identifier
    ;

catalogNameCreate
    : catalog= identifier
    ;

functionName
    : qualifiedName
    ;

columnName
    : qualifiedName
    ;

columnNameCreate
    : identifier
    ;

qualifiedName
    : identifier ('.' identifier)*
    ;

grantor
    : principal       # specifiedPrincipal
    | KW_CURRENT_USER # currentUserGrantor
    | KW_CURRENT_ROLE # currentRoleGrantor
    ;

principal
    : identifier         # unspecifiedPrincipal
    | KW_USER identifier # userPrincipal
    | KW_ROLE identifier # rolePrincipal
    ;

roles
    : identifier (',' identifier)*
    ;

identifier
    : IDENTIFIER            # unquotedIdentifier
    | QUOTED_IDENTIFIER     # quotedIdentifier
    | nonReserved           # unquotedIdentifier
    | BACKQUOTED_IDENTIFIER # backQuotedIdentifier
    | DIGIT_IDENTIFIER      # digitIdentifier
    ;

number
    : MINUS? DECIMAL_VALUE # decimalLiteral
    | MINUS? DOUBLE_VALUE  # doubleLiteral
    | MINUS? INTEGER_VALUE # integerLiteral
    ;

nonReserved
    : KW_ADD
    | KW_ADMIN
    | KW_AFTER
    | KW_ALL
    | KW_ANALYZE
    | KW_ANY
    | KW_ARRAY
    | KW_ASC
    | KW_AT
    | KW_AUTHORIZATION
    | KW_BERNOULLI
    | KW_CALL
    | KW_CASCADE
    | KW_CATALOGS
    | KW_COLUMN
    | KW_COLUMNS
    | KW_COMMENT
    | KW_COMMIT
    | KW_COMMITTED
    | KW_CURRENT
    | KW_DATA
    | KW_DATE
    | KW_DAY
    | KW_DEFAULT
    | KW_DEFINE
    | KW_DEFINER
    | KW_DESC
    | KW_DISTRIBUTED
    | KW_DOUBLE
    | KW_EMPTY
    | KW_EXCLUDING
    | KW_EXPLAIN
    | KW_FETCH
    | KW_FILTER
    | KW_FINAL
    | KW_FIRST
    | KW_FOLLOWING
    | KW_FORMAT
    | KW_FUNCTIONS
    | KW_GRANT
    | KW_GRANTED
    | KW_GRANTS
    | KW_DENY
    | KW_GRAPHVIZ
    | KW_GROUPS
    | KW_HOUR
    | KW_IF
    | KW_IGNORE
    | KW_INCLUDING
    | KW_INITIAL
    | KW_INPUT
    | KW_INTERVAL
    | KW_INVOKER
    | KW_IO
    | KW_ISOLATION
    | KW_JSON
    | KW_LAST
    | KW_LATERAL
    | KW_LEVEL
    | KW_LIMIT
    | KW_LOCAL
    | KW_LOGICAL
    | KW_MAP
    | KW_MATCH
    | KW_MATCHED
    | KW_MATCHES
    | KW_MATCH_RECOGNIZE
    | KW_MATERIALIZED
    | KW_MEASURES
    | KW_MERGE
    | KW_MINUTE
    | KW_MONTH
    | KW_NEXT
    | KW_NFC
    | KW_NFD
    | KW_NFKC
    | KW_NFKD
    | KW_NO
    | KW_NONE
    | KW_NULLIF
    | KW_NULLS
    | KW_OFFSET
    | KW_OMIT
    | KW_ONE
    | KW_ONLY
    | KW_OPTION
    | KW_ORDINALITY
    | KW_OUTPUT
    | KW_OVER
    | KW_PARTITION
    | KW_PARTITIONS
    | KW_PAST
    | KW_PATH
    | KW_PATTERN
    | KW_PER
    | KW_PERMUTE
    | KW_POSITION
    | KW_PRECEDING
    | KW_PRECISION
    | KW_PRIVILEGES
    | KW_PROPERTIES
    | KW_RANGE
    | KW_READ
    | KW_REFRESH
    | KW_RENAME
    | KW_REPEATABLE
    | KW_REPLACE
    | KW_RESET
    | KW_RESPECT
    | KW_RESTRICT
    | KW_REVOKE
    | KW_ROLE
    | KW_ROLES
    | KW_ROLLBACK
    | KW_ROW
    | KW_ROWS
    | KW_RUNNING
    | KW_SCHEMA
    | KW_SCHEMAS
    | KW_SECOND
    | KW_SECURITY
    | KW_SEEK
    | KW_SERIALIZABLE
    | KW_SESSION
    | KW_SET
    | KW_SETS
    | KW_SHOW
    | KW_SOME
    | KW_START
    | KW_STATS
    | KW_SUBSET
    | KW_SUBSTRING
    | KW_SYSTEM
    | KW_TABLES
    | KW_TABLESAMPLE
    | KW_TEXT
    | KW_TIES
    | KW_TIME
    | KW_TIMESTAMP
    | KW_TO
    | KW_TRANSACTION
    | KW_TRUNCATE
    | KW_TRY_CAST
    | KW_TYPE
    | KW_UNBOUNDED
    | KW_UNCOMMITTED
    | KW_UNMATCHED
    | KW_UPDATE
    | KW_USE
    | KW_USER
    | KW_VALIDATE
    | KW_VERBOSE
    | KW_VIEW
    | KW_WINDOW
    | KW_WITHOUT
    | KW_WORK
    | KW_WRITE
    | KW_YEAR
    | KW_ZONE
    ;

/** 
 * Don't modify the following comments manually, it's used for formatting.
 * If the antlr.format.json changed,
 * copy the comments from the header of any lexer file to overwrite the comments below.
 */

// $antlr-format alignTrailingComments true, columnLimit 150, maxEmptyLinesToKeep 1, reflowComments false, useTab false
// $antlr-format allowShortRulesOnASingleLine true, allowShortBlocksOnASingleLine true, minEmptyLines 0, alignSemicolons none, alignColons trailing
// $antlr-format singleLineOverrulesHangingColon true, alignLexerCommands true, alignLabels true, alignTrailers true
// $antlr-format spaceBeforeAssignmentOperators false, groupedAlignments true

KW_ADD               : 'ADD';
KW_ADMIN             : 'ADMIN';
KW_AFTER             : 'AFTER';
KW_ALL               : 'ALL';
KW_ALTER             : 'ALTER';
KW_ANALYZE           : 'ANALYZE';
KW_AND               : 'AND';
KW_ANY               : 'ANY';
KW_ARRAY             : 'ARRAY';
KW_AS                : 'AS';
KW_ASC               : 'ASC';
KW_AT                : 'AT';
KW_AUTHORIZATION     : 'AUTHORIZATION';
KW_BERNOULLI         : 'BERNOULLI';
KW_BETWEEN           : 'BETWEEN';
KW_BY                : 'BY';
KW_CALL              : 'CALL';
KW_CASCADE           : 'CASCADE';
KW_CASE              : 'CASE';
KW_CAST              : 'CAST';
KW_CATALOGS          : 'CATALOGS';
KW_COLUMN            : 'COLUMN';
KW_COLUMNS           : 'COLUMNS';
KW_COMMENT           : 'COMMENT';
KW_COMMIT            : 'COMMIT';
KW_COMMITTED         : 'COMMITTED';
KW_CONSTRAINT        : 'CONSTRAINT';
KW_CREATE            : 'CREATE';
KW_CROSS             : 'CROSS';
KW_CUBE              : 'CUBE';
KW_CURRENT           : 'CURRENT';
KW_CURRENT_CATALOG   : 'CURRENT_CATALOG';
KW_CURRENT_DATE      : 'CURRENT_DATE';
KW_CURRENT_PATH      : 'CURRENT_PATH';
KW_CURRENT_ROLE      : 'CURRENT_ROLE';
KW_CURRENT_SCHEMA    : 'CURRENT_SCHEMA';
KW_CURRENT_TIME      : 'CURRENT_TIME';
KW_CURRENT_TIMESTAMP : 'CURRENT_TIMESTAMP';
KW_CURRENT_USER      : 'CURRENT_USER';
KW_DATA              : 'DATA';
KW_DATE              : 'DATE';
KW_DAY               : 'DAY';
KW_DEFAULT           : 'DEFAULT';
KW_DEALLOCATE        : 'DEALLOCATE';
KW_DEFINER           : 'DEFINER';
KW_DELETE            : 'DELETE';
KW_DESC              : 'DESC';
KW_DESCRIBE          : 'DESCRIBE';
KW_DEFINE            : 'DEFINE';
KW_DISTINCT          : 'DISTINCT';
KW_DISTRIBUTED       : 'DISTRIBUTED';
KW_DOUBLE            : 'DOUBLE';
KW_DROP              : 'DROP';
KW_ELSE              : 'ELSE';
KW_EMPTY             : 'EMPTY';
KW_END               : 'END';
KW_ESCAPE            : 'ESCAPE';
KW_EXCEPT            : 'EXCEPT';
KW_EXCLUDING         : 'EXCLUDING';
KW_EXECUTE           : 'EXECUTE';
KW_EXISTS            : 'EXISTS';
KW_EXPLAIN           : 'EXPLAIN';
KW_EXTRACT           : 'EXTRACT';
KW_FALSE             : 'FALSE';
KW_FETCH             : 'FETCH';
KW_FILTER            : 'FILTER';
KW_FINAL             : 'FINAL';
KW_FIRST             : 'FIRST';
KW_FOLLOWING         : 'FOLLOWING';
KW_FOR               : 'FOR';
KW_FORMAT            : 'FORMAT';
KW_FROM              : 'FROM';
KW_FULL              : 'FULL';
KW_FUNCTIONS         : 'FUNCTIONS';
KW_GRANT             : 'GRANT';
KW_GRANTED           : 'GRANTED';
KW_GRANTS            : 'GRANTS';
KW_DENY              : 'DENY';
KW_GRAPHVIZ          : 'GRAPHVIZ';
KW_GROUP             : 'GROUP';
KW_GROUPING          : 'GROUPING';
KW_GROUPS            : 'GROUPS';
KW_HAVING            : 'HAVING';
KW_HOUR              : 'HOUR';
KW_IF                : 'IF';
KW_IGNORE            : 'IGNORE';
KW_IN                : 'IN';
KW_INCLUDING         : 'INCLUDING';
KW_INITIAL           : 'INITIAL';
KW_INNER             : 'INNER';
KW_INPUT             : 'INPUT';
KW_INSERT            : 'INSERT';
KW_INTERSECT         : 'INTERSECT';
KW_INTERVAL          : 'INTERVAL';
KW_INTO              : 'INTO';
KW_INVOKER           : 'INVOKER';
KW_IO                : 'IO';
KW_IS                : 'IS';
KW_ISOLATION         : 'ISOLATION';
KW_JOIN              : 'JOIN';
KW_JSON              : 'JSON';
KW_LAST              : 'LAST';
KW_LATERAL           : 'LATERAL';
KW_LEFT              : 'LEFT';
KW_LEVEL             : 'LEVEL';
KW_LIKE              : 'LIKE';
KW_LIMIT             : 'LIMIT';
KW_LOCAL             : 'LOCAL';
KW_LOCALTIME         : 'LOCALTIME';
KW_LOCALTIMESTAMP    : 'LOCALTIMESTAMP';
KW_LOGICAL           : 'LOGICAL';
KW_MAP               : 'MAP';
KW_MATCH             : 'MATCH';
KW_MATCHED           : 'MATCHED';
KW_MATCHES           : 'MATCHES';
KW_MATCH_RECOGNIZE   : 'MATCH_RECOGNIZE';
KW_MATERIALIZED      : 'MATERIALIZED';
KW_MEASURES          : 'MEASURES';
KW_MERGE             : 'MERGE';
KW_MINUTE            : 'MINUTE';
KW_MONTH             : 'MONTH';
KW_NATURAL           : 'NATURAL';
KW_NEXT              : 'NEXT';
KW_NFC               : 'NFC';
KW_NFD               : 'NFD';
KW_NFKC              : 'NFKC';
KW_NFKD              : 'NFKD';
KW_NO                : 'NO';
KW_NONE              : 'NONE';
KW_NORMALIZE         : 'NORMALIZE';
KW_NOT               : 'NOT';
KW_NULL              : 'NULL';
KW_NULLIF            : 'NULLIF';
KW_NULLS             : 'NULLS';
KW_OFFSET            : 'OFFSET';
KW_OMIT              : 'OMIT';
KW_ON                : 'ON';
KW_ONE               : 'ONE';
KW_ONLY              : 'ONLY';
KW_OPTION            : 'OPTION';
KW_OR                : 'OR';
KW_ORDER             : 'ORDER';
KW_ORDINALITY        : 'ORDINALITY';
KW_OUTER             : 'OUTER';
KW_OUTPUT            : 'OUTPUT';
KW_OVER              : 'OVER';
KW_PARTITION         : 'PARTITION';
KW_PARTITIONS        : 'PARTITIONS';
KW_PAST              : 'PAST';
KW_PATH              : 'PATH';
KW_PATTERN           : 'PATTERN';
KW_PER               : 'PER';
KW_PERMUTE           : 'PERMUTE';
KW_POSITION          : 'POSITION';
KW_PRECEDING         : 'PRECEDING';
KW_PRECISION         : 'PRECISION';
KW_PREPARE           : 'PREPARE';
KW_PRIVILEGES        : 'PRIVILEGES';
KW_PROPERTIES        : 'PROPERTIES';
KW_RANGE             : 'RANGE';
KW_READ              : 'READ';
KW_RECURSIVE         : 'RECURSIVE';
KW_REFRESH           : 'REFRESH';
KW_RENAME            : 'RENAME';
KW_REPEATABLE        : 'REPEATABLE';
KW_REPLACE           : 'REPLACE';
KW_RESET             : 'RESET';
KW_RESPECT           : 'RESPECT';
KW_RESTRICT          : 'RESTRICT';
KW_REVOKE            : 'REVOKE';
KW_RIGHT             : 'RIGHT';
KW_ROLE              : 'ROLE';
KW_ROLES             : 'ROLES';
KW_ROLLBACK          : 'ROLLBACK';
KW_ROLLUP            : 'ROLLUP';
KW_ROW               : 'ROW';
KW_ROWS              : 'ROWS';
KW_RUNNING           : 'RUNNING';
KW_SCHEMA            : 'SCHEMA';
KW_SCHEMAS           : 'SCHEMAS';
KW_SECOND            : 'SECOND';
KW_SECURITY          : 'SECURITY';
KW_SEEK              : 'SEEK';
KW_SELECT            : 'SELECT';
KW_SERIALIZABLE      : 'SERIALIZABLE';
KW_SESSION           : 'SESSION';
KW_SET               : 'SET';
KW_SETS              : 'SETS';
KW_SHOW              : 'SHOW';
KW_SOME              : 'SOME';
KW_START             : 'START';
KW_STATS             : 'STATS';
KW_SUBSET            : 'SUBSET';
KW_SUBSTRING         : 'SUBSTRING';
KW_SYSTEM            : 'SYSTEM';
KW_TABLE             : 'TABLE';
KW_TABLES            : 'TABLES';
KW_TABLESAMPLE       : 'TABLESAMPLE';
KW_TEXT              : 'TEXT';
KW_THEN              : 'THEN';
KW_TIES              : 'TIES';
KW_TIME              : 'TIME';
KW_TIMESTAMP         : 'TIMESTAMP';
KW_TO                : 'TO';
KW_TRANSACTION       : 'TRANSACTION';
KW_TRUNCATE          : 'TRUNCATE';
KW_TRUE              : 'TRUE';
KW_TRY_CAST          : 'TRY_CAST';
KW_TYPE              : 'TYPE';
KW_UESCAPE           : 'UESCAPE';
KW_UNBOUNDED         : 'UNBOUNDED';
KW_UNCOMMITTED       : 'UNCOMMITTED';
KW_UNION             : 'UNION';
KW_UNMATCHED         : 'UNMATCHED';
KW_UNNEST            : 'UNNEST';
KW_UPDATE            : 'UPDATE';
KW_USE               : 'USE';
KW_USER              : 'USER';
KW_USING             : 'USING';
KW_VALIDATE          : 'VALIDATE';
KW_VALUES            : 'VALUES';
KW_VERBOSE           : 'VERBOSE';
KW_VIEW              : 'VIEW';
KW_WHEN              : 'WHEN';
KW_WHERE             : 'WHERE';
KW_WINDOW            : 'WINDOW';
KW_WITH              : 'WITH';
KW_WITHOUT           : 'WITHOUT';
KW_WORK              : 'WORK';
KW_WRITE             : 'WRITE';
KW_YEAR              : 'YEAR';
KW_ZONE              : 'ZONE';

EQ  : '=';
NEQ : '<>' | '!=';
LT  : '<';
LTE : '<=';
GT  : '>';
GTE : '>=';

PLUS          : '+';
MINUS         : '-';
ASTERISK      : '*';
SLASH         : '/';
PERCENT       : '%';
CONCAT        : '||';
QUESTION_MARK : '?';

STRING: '\'' ( ~'\'' | '\'\'')* '\'';

UNICODE_STRING: 'U&\'' ( ~'\'' | '\'\'')* '\'';

// Note: we allow any character inside the binary literal and validate its a correct literal when
// the AST is being constructed. This allows us to provide more meaningful error messages to the
// user
BINARY_LITERAL: 'X\'' (~'\'')* '\'';

INTEGER_VALUE: DIGIT+;

DECIMAL_VALUE: DIGIT+ '.' DIGIT* | '.' DIGIT+;

DOUBLE_VALUE: DIGIT+ ('.' DIGIT*)? EXPONENT | '.' DIGIT+ EXPONENT;

IDENTIFIER: (LETTER | '_') (LETTER | DIGIT | '_')*;

DIGIT_IDENTIFIER: DIGIT (LETTER | DIGIT | '_')+;

QUOTED_IDENTIFIER: '"' ( ~'"' | '""')* '"';

BACKQUOTED_IDENTIFIER : '`' ( ~'`' | '``')* '`';
SEMICOLON             : ';';

fragment EXPONENT: 'E' [+-]? DIGIT+;

fragment DIGIT: [0-9];

fragment LETTER: [A-Za-z];

SIMPLE_COMMENT: '--' ~[\r\n]* '\r'? '\n'? -> channel(HIDDEN);

BRACKETED_COMMENT: '/*' .*? '*/' -> channel(HIDDEN);

WS: [ \r\n\t]+ -> channel(HIDDEN);

// Catch-all for anything we can't recognize. We use this to be able to ignore and recover all the
// text when splitting statements with DelimiterLexer
UNRECOGNIZED: .;