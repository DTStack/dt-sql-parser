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
 *
 */

/**
 * This file is an adaptation of spark's spark/sql/api/src/main/antlr4/org/apache/spark/sql/catalyst/parser/SqlBaseParser.g4 grammar.
 * Reference: https://github.com/apache/spark/blob/master/sql/api/src/main/antlr4/org/apache/spark/sql/catalyst/parser/SqlBaseParser.g4
 */

// $antlr-format alignTrailingComments true, columnLimit 150, minEmptyLines 1, maxEmptyLinesToKeep 1, reflowComments false, useTab false
// $antlr-format allowShortRulesOnASingleLine false, allowShortBlocksOnASingleLine true, alignSemicolons hanging, alignColons hanging
// $antlr-format spaceBeforeAssignmentOperators false, keepEmptyLinesAtTheStartOfBlocks true

parser grammar SparkSqlParser;

options {
    tokenVocab=SparkSqlLexer;
    caseInsensitive= true;
}

program
    : singleStatement* EOF
    ;

singleStatement
    : statement SEMICOLON?
    ;

statement
    : query
    | ctes? dmlStatementNoWith
    | KW_USE dbSchemaName
    | KW_USE dbSchema dbSchemaName
    | KW_SET KW_CATALOG (identifier | stringLit)
    | KW_CREATE dbSchema (ifNotExists)? dbSchemaNameCreate (
        commentSpec
        | locationSpec
        | (KW_WITH (KW_DBPROPERTIES | KW_PROPERTIES) propertyList)
    )*
    | KW_ALTER dbSchema dbSchemaName KW_SET (KW_DBPROPERTIES | KW_PROPERTIES) propertyList
    | KW_ALTER dbSchema dbSchemaName KW_SET locationSpec
    | KW_DROP dbSchema (ifExists)? dbSchemaName (KW_RESTRICT | KW_CASCADE)?
    | KW_SHOW dbSchemas ((KW_FROM | KW_IN) multipartIdentifier)? (KW_LIKE? pattern=stringLit)?
    | createTableHeader (LEFT_PAREN createOrReplaceTableColTypeList RIGHT_PAREN)? tableProvider? createTableClauses (
        KW_AS? query
    )?
    | KW_CREATE KW_TABLE (ifNotExists)? target=tableNameCreate KW_LIKE source=tableName (
        tableProvider
        | rowFormat
        | createFileFormat
        | locationSpec
        | (KW_TBLPROPERTIES tableProps=propertyList)
    )*
    | replaceTableHeader (LEFT_PAREN createOrReplaceTableColTypeList RIGHT_PAREN)? tableProvider? createTableClauses (
        KW_AS? query
    )?
    | KW_ANALYZE KW_TABLE tableName partitionSpec? KW_COMPUTE KW_STATISTICS (
        KW_NOSCAN
        | KW_FOR KW_COLUMNS columnNameSeq
        | KW_FOR KW_ALL KW_COLUMNS
    )?
    | KW_ANALYZE KW_TABLES ((KW_FROM | KW_IN) dbSchemaName)? KW_COMPUTE KW_STATISTICS (KW_NOSCAN)?
    | KW_ALTER KW_TABLE tableName KW_ADD KW_COLUMN qualifiedColTypeWithPositionForAdd
    | KW_ALTER KW_TABLE tableName KW_ADD KW_COLUMNS LEFT_PAREN qualifiedColTypeWithPositionSeqForAdd RIGHT_PAREN
    | KW_ALTER KW_TABLE table=tableName KW_RENAME KW_COLUMN columnName KW_TO columnNameCreate
    | KW_ALTER KW_TABLE tableName KW_DROP KW_COLUMN (ifExists)? columnName
    | KW_ALTER KW_TABLE tableName KW_DROP KW_COLUMNS (ifExists)? LEFT_PAREN columnNameSeq RIGHT_PAREN
    | KW_ALTER (KW_TABLE tableName | KW_VIEW viewName) KW_RENAME KW_TO multipartIdentifier
    | KW_ALTER (KW_TABLE tableName | KW_VIEW viewName) KW_SET KW_TBLPROPERTIES propertyList
    | KW_ALTER (KW_TABLE tableName | KW_VIEW viewName) KW_UNSET KW_TBLPROPERTIES (ifExists)? propertyList
    | KW_ALTER KW_TABLE table=tableName (KW_ALTER | KW_CHANGE) KW_COLUMN? column=columnName alterColumnAction?
    | KW_ALTER KW_TABLE table=tableName partitionSpec? KW_CHANGE KW_COLUMN? colName=columnName colType colPosition?
    | KW_ALTER KW_TABLE table=tableName partitionSpec? KW_REPLACE KW_COLUMNS LEFT_PAREN qualifiedColTypeWithPositionSeqForReplace RIGHT_PAREN
    | KW_ALTER KW_TABLE tableName (partitionSpec)? KW_SET KW_SERDE stringLit (
        KW_WITH KW_SERDEPROPERTIES propertyList
    )?
    | KW_ALTER KW_TABLE tableName (partitionSpec)? KW_SET KW_SERDEPROPERTIES propertyList
    | KW_ALTER (KW_TABLE tableName | KW_VIEW viewName) KW_ADD (ifNotExists)? partitionSpecLocation+
    | KW_ALTER KW_TABLE tableName partitionSpec KW_RENAME KW_TO partitionSpec
    | KW_ALTER (KW_TABLE tableName | KW_VIEW viewName) KW_DROP (ifExists)? partitionSpec (
        COMMA partitionSpec
    )* KW_PURGE?
    | KW_ALTER KW_TABLE tableName (partitionSpec)? KW_SET locationSpec
    | KW_ALTER KW_TABLE tableName KW_RECOVER KW_PARTITIONS
    | KW_ALTER KW_MATERIALIZED KW_VIEW viewName (KW_ENABLE | KW_DISABLE) KW_REWRITE
    | KW_ALTER KW_MATERIALIZED KW_VIEW viewName KW_SET KW_TBLPROPERTIES propertyList
    | KW_DROP KW_TABLE (ifExists)? tableName KW_PURGE?
    | KW_DROP KW_VIEW (ifExists)? viewName
    | KW_DROP KW_MATERIALIZED KW_VIEW (ifExists)? viewName
    | KW_CREATE (KW_OR KW_REPLACE)? (KW_GLOBAL? KW_TEMPORARY)? KW_VIEW (ifNotExists)? viewNameCreate identifierCommentList? (
        commentSpec
        | (KW_PARTITIONED KW_ON identifierList)
        | (KW_TBLPROPERTIES propertyList)
    )* KW_AS query
    | KW_CREATE (KW_OR KW_REPLACE)? KW_GLOBAL? KW_TEMPORARY KW_VIEW viewNameCreate (
        LEFT_PAREN colTypeList RIGHT_PAREN
    )? tableProvider (KW_OPTIONS propertyList)?
    | KW_ALTER KW_VIEW viewName KW_AS? query
    | KW_CREATE (KW_OR KW_REPLACE)? KW_TEMPORARY? KW_FUNCTION (ifNotExists)? functionNameCreate KW_AS className=stringLit (
        KW_USING resource (COMMA resource)*
    )?
    |
    // Self developed materialized view syntax by dtstack, spark not support now.
    KW_CREATE KW_MATERIALIZED KW_VIEW (ifNotExists)? viewNameCreate tableProvider? (
        (KW_OPTIONS options=propertyList)
        | (KW_PARTITIONED KW_BY partitioning=partitionFieldList)
        | skewSpec
        | bucketSpec
        | rowFormat
        | createFileFormat
        | locationSpec
        | commentSpec
        | (KW_TBLPROPERTIES tableProps=propertyList)
    )* KW_AS query
    | KW_DROP KW_TEMPORARY? KW_FUNCTION (ifExists)? functionName
    | KW_DECLARE (KW_OR KW_REPLACE)? KW_VARIABLE? functionName dataType? variableDefaultExpression?
    | KW_DROP KW_TEMPORARY KW_VARIABLE (ifExists)? (tableName | viewName | functionName)
    | KW_EXPLAIN (KW_LOGICAL | KW_FORMATTED | KW_EXTENDED | KW_CODEGEN | KW_COST)? statement
    | KW_SHOW KW_TABLES ((KW_FROM | KW_IN) dbSchemaName)? (KW_LIKE? pattern=stringLit)?
    | KW_SHOW KW_TABLE KW_EXTENDED ((KW_FROM | KW_IN) ns=dbSchemaName)? KW_LIKE pattern=stringLit partitionSpec?
    | KW_SHOW KW_TBLPROPERTIES table=tableName (LEFT_PAREN key=propertyKey RIGHT_PAREN)?
    | KW_SHOW KW_COLUMNS (KW_FROM | KW_IN) table=tableName ((KW_FROM | KW_IN) dbSchemaName)?
    | KW_SHOW KW_VIEWS ((KW_FROM | KW_IN) dbSchemaName)? (KW_LIKE? pattern=stringLit)?
    | KW_SHOW KW_PARTITIONS tableName partitionSpec?
    | KW_SHOW functionKind? KW_FUNCTIONS ((KW_FROM | KW_IN) ns=dbSchemaName)? (
        KW_LIKE? (legacy=multipartIdentifier | pattern=stringLit)
    )?
    | KW_SHOW KW_CREATE KW_TABLE tableName (KW_AS KW_SERDE)?
    | KW_SHOW KW_CURRENT dbSchema
    | KW_SHOW KW_CATALOGS (KW_LIKE? pattern=stringLit)?
    | KW_SHOW KW_MATERIALIZED KW_VIEWS ((KW_FROM | KW_IN) db_name=dbSchemaName)? (
        KW_LIKE? pattern=stringLit
    )?
    | KW_SHOW KW_CREATE KW_MATERIALIZED KW_VIEW viewName (KW_AS KW_SERDE)?
    | (KW_DESC | KW_DESCRIBE) KW_FUNCTION KW_EXTENDED? describeFuncName
    | (KW_DESC | KW_DESCRIBE) KW_DATABASE KW_EXTENDED? dbSchemaName
    | (KW_DESC | KW_DESCRIBE) KW_TABLE? option=(KW_EXTENDED | KW_FORMATTED)? tableName partitionSpec? describeColName?
    | (KW_DESC | KW_DESCRIBE) KW_QUERY? query
    | KW_COMMENT KW_ON dbSchema dbSchemaName KW_IS comment
    | KW_COMMENT KW_ON KW_TABLE tableName KW_IS comment
    | KW_REFRESH KW_TABLE tableName
    | KW_REFRESH KW_FUNCTION functionName
    | KW_REFRESH (stringLit | .*?)
    | KW_REFRESH KW_MATERIALIZED KW_VIEW viewName
    | KW_CACHE KW_LAZY? KW_TABLE tableName (KW_OPTIONS options=propertyList)? (KW_AS? query)?
    | KW_UNCACHE KW_TABLE (ifExists)? tableName
    | KW_CLEAR KW_CACHE
    | KW_LOAD KW_DATA KW_LOCAL? KW_INPATH path=stringLit KW_OVERWRITE? KW_INTO KW_TABLE tableName partitionSpec?
    | KW_TRUNCATE KW_TABLE tableName partitionSpec?
    | (KW_MSCK)? KW_REPAIR KW_TABLE tableName (option=(KW_ADD | KW_DROP | KW_SYNC) KW_PARTITIONS)?
    | op=(KW_ADD | KW_LIST) identifier .*?
    | KW_SET KW_ROLE .*?
    | KW_SET KW_TIME KW_ZONE interval
    | KW_SET KW_TIME KW_ZONE timezone
    | KW_SET KW_TIME KW_ZONE .*?
    | KW_SET (KW_VARIABLE | KW_VAR) assignmentList
    | KW_SET (KW_VARIABLE | KW_VAR) LEFT_PAREN multipartIdentifierList RIGHT_PAREN EQ LEFT_PAREN query RIGHT_PAREN
    | KW_SET configKey EQ configValue
    | KW_SET configKey (EQ .*?)?
    | KW_SET .*? EQ configValue
    | KW_SET .*?
    | KW_RESET configKey
    | KW_RESET .*?
    | KW_CREATE KW_INDEX (ifNotExists)? identifier KW_ON KW_TABLE? tableName (
        KW_USING indexType=identifier
    )? LEFT_PAREN multipartIdentifierPropertyList RIGHT_PAREN (KW_OPTIONS options=propertyList)?
    | KW_DROP KW_INDEX (ifExists)? identifier KW_ON KW_TABLE? tableName
    | KW_OPTIMIZE tableName whereClause? zorderClause
    | unsupportedHiveNativeCommands .*?
    ;

timezone
    : stringLit
    | KW_LOCAL
    ;

configKey
    : quotedIdentifier
    ;

configValue
    : backQuotedIdentifier
    ;

unsupportedHiveNativeCommands
    : kw1=KW_CREATE kw2=KW_ROLE
    | kw1=KW_DROP kw2=KW_ROLE
    | kw1=KW_GRANT kw2=KW_ROLE?
    | kw1=KW_REVOKE kw2=KW_ROLE?
    | kw1=KW_SHOW kw2=KW_GRANT
    | kw1=KW_SHOW kw2=KW_ROLE kw3=KW_GRANT?
    | kw1=KW_SHOW kw2=KW_PRINCIPALS
    | kw1=KW_SHOW kw2=KW_ROLES
    | kw1=KW_SHOW kw2=KW_CURRENT kw3=KW_ROLES
    | kw1=KW_EXPORT kw2=KW_TABLE
    | kw1=KW_IMPORT kw2=KW_TABLE
    | kw1=KW_SHOW kw2=KW_COMPACTIONS
    | kw1=KW_SHOW kw2=KW_CREATE kw3=KW_TABLE
    | kw1=KW_SHOW kw2=KW_TRANSACTIONS
    | kw1=KW_SHOW kw2=KW_INDEXES
    | kw1=KW_SHOW kw2=KW_LOCKS
    | kw1=KW_CREATE kw2=KW_INDEX
    | kw1=KW_DROP kw2=KW_INDEX
    | kw1=KW_ALTER kw2=KW_INDEX
    | kw1=KW_LOCK kw2=KW_TABLE
    | kw1=KW_LOCK kw2=KW_DATABASE
    | kw1=KW_UNLOCK kw2=KW_TABLE
    | kw1=KW_UNLOCK kw2=KW_DATABASE
    | kw1=KW_CREATE kw2=KW_TEMPORARY kw3=KW_MACRO
    | kw1=KW_DROP kw2=KW_TEMPORARY kw3=KW_MACRO
    | kw1=KW_ALTER kw2=KW_TABLE tableName kw3=KW_NOT kw4=KW_CLUSTERED
    | kw1=KW_ALTER kw2=KW_TABLE tableName kw3=KW_CLUSTERED kw4=KW_BY
    | kw1=KW_ALTER kw2=KW_TABLE tableName kw3=KW_NOT kw4=KW_SORTED
    | kw1=KW_ALTER kw2=KW_TABLE tableName kw3=KW_SKEWED kw4=KW_BY
    | kw1=KW_ALTER kw2=KW_TABLE tableName kw3=KW_NOT kw4=KW_SKEWED
    | kw1=KW_ALTER kw2=KW_TABLE tableName kw3=KW_NOT kw4=KW_STORED kw5=KW_AS kw6=KW_DIRECTORIES
    | kw1=KW_ALTER kw2=KW_TABLE tableName kw3=KW_SET kw4=KW_SKEWED kw5=KW_LOCATION
    | kw1=KW_ALTER kw2=KW_TABLE tableName kw3=KW_EXCHANGE kw4=KW_PARTITION
    | kw1=KW_ALTER kw2=KW_TABLE tableName kw3=KW_ARCHIVE kw4=KW_PARTITION
    | kw1=KW_ALTER kw2=KW_TABLE tableName kw3=KW_UNARCHIVE kw4=KW_PARTITION
    | kw1=KW_ALTER kw2=KW_TABLE tableName kw3=KW_TOUCH
    | kw1=KW_ALTER kw2=KW_TABLE tableName partitionSpec? kw3=KW_COMPACT
    | kw1=KW_ALTER kw2=KW_TABLE tableName partitionSpec? kw3=KW_CONCATENATE
    | kw1=KW_ALTER kw2=KW_TABLE tableName partitionSpec? kw3=KW_SET kw4=KW_FILEFORMAT
    | kw1=KW_ALTER kw2=KW_TABLE tableName partitionSpec? kw3=KW_REPLACE kw4=KW_COLUMNS
    | kw1=KW_START kw2=KW_TRANSACTION
    | kw1=KW_COMMIT
    | kw1=KW_ROLLBACK
    | kw1=KW_DFS
    ;

createTableHeader
    : KW_CREATE KW_TEMPORARY? KW_EXTERNAL? KW_TABLE (ifNotExists)? tableNameCreate
    ;

replaceTableHeader
    : (KW_CREATE KW_OR)? KW_REPLACE KW_TABLE tableNameCreate
    ;

bucketSpec
    : KW_CLUSTERED KW_BY identifierList (KW_SORTED KW_BY orderedIdentifierList)? KW_INTO INTEGER_VALUE KW_BUCKETS
    ;

skewSpec
    : KW_SKEWED KW_BY identifierList KW_ON (constantList | nestedConstantList) (
        KW_STORED KW_AS KW_DIRECTORIES
    )?
    ;

locationSpec
    : KW_LOCATION stringLit
    ;

commentSpec
    : KW_COMMENT stringLit
    ;

query
    : ctes? queryTerm queryOrganization
    ;

insertInto
    : KW_INSERT KW_OVERWRITE KW_TABLE? tableName (partitionSpec (ifNotExists)?)? (
        (KW_BY KW_NAME)
        | (LEFT_PAREN columnNameSeq RIGHT_PAREN)
    )?
    | KW_INSERT KW_INTO KW_TABLE? tableName partitionSpec? (ifNotExists)? (
        (KW_BY KW_NAME)
        | (LEFT_PAREN columnNameSeq RIGHT_PAREN)
    )?
    | KW_INSERT KW_INTO KW_TABLE? tableName KW_REPLACE whereClause
    | KW_INSERT KW_OVERWRITE KW_LOCAL? KW_DIRECTORY path=stringLit rowFormat? createFileFormat?
    | KW_INSERT KW_OVERWRITE KW_LOCAL? KW_DIRECTORY (path=stringLit)? tableProvider (
        KW_OPTIONS options=propertyList
    )?
    ;

partitionSpecLocation
    : partitionSpec locationSpec?
    ;

partitionSpec
    : KW_PARTITION LEFT_PAREN partitionVal (COMMA partitionVal)* RIGHT_PAREN
    ;

partitionVal
    : identifier (EQ constant)?
    | identifier EQ KW_DEFAULT
    ;

dbSchema
    : KW_NAMESPACE
    | KW_DATABASE
    | KW_SCHEMA
    ;

dbSchemas
    : KW_NAMESPACES
    | KW_DATABASES
    | KW_SCHEMAS
    ;

describeFuncName
    : identifierReference
    | stringLit
    | comparisonOperator
    | arithmeticOperator
    | predicateOperator
    ;

describeColName
    : nameParts+=identifier (DOT nameParts+=identifier)*
    ;

ctes
    : KW_WITH namedQuery (COMMA namedQuery)*
    ;

namedQuery
    : name=errorCapturingIdentifier (columnAliases=identifierList)? KW_AS? LEFT_PAREN query RIGHT_PAREN
    ;

tableProvider
    : KW_USING multipartIdentifier
    ;

createTableClauses
    : (
        (KW_OPTIONS options=expressionPropertyList)
        | (KW_PARTITIONED KW_BY partitioning=partitionFieldList)
        | skewSpec
        | bucketSpec
        | rowFormat
        | createFileFormat
        | locationSpec
        | commentSpec
        | (KW_TBLPROPERTIES tableProps=propertyList)
    )*
    ;

propertyList
    : LEFT_PAREN property (COMMA property)* RIGHT_PAREN
    ;

property
    : key=propertyKey (EQ? value=propertyValue)?
    ;

propertyKey
    : identifier (DOT identifier)*
    | stringLit
    ;

propertyValue
    : INTEGER_VALUE
    | DECIMAL_VALUE
    | booleanValue
    | stringLit
    ;

expressionPropertyList
    : LEFT_PAREN expressionProperty (COMMA expressionProperty)* RIGHT_PAREN
    ;

expressionProperty
    : key=propertyKey (EQ? value=expression)?
    ;

constantList
    : LEFT_PAREN constant (COMMA constant)* RIGHT_PAREN
    ;

nestedConstantList
    : LEFT_PAREN constantList (COMMA constantList)* RIGHT_PAREN
    ;

createFileFormat
    : KW_STORED KW_AS fileFormat
    | KW_STORED KW_BY storageHandler
    ;

fileFormat
    : KW_INPUTFORMAT inFmt=stringLit KW_OUTPUTFORMAT outFmt=stringLit
    | identifier
    ;

storageHandler
    : stringLit (KW_WITH KW_SERDEPROPERTIES propertyList)?
    ;

resource
    : identifier stringLit
    ;

dmlStatementNoWith
    : insertInto query
    | fromClause multiInsertQueryBody+
    | KW_DELETE KW_FROM tableName tableAlias whereClause?
    | KW_UPDATE tableName tableAlias setClause whereClause?
    | KW_MERGE KW_INTO target=tableName targetAlias=tableAlias KW_USING (
        source=identifierReference
        | LEFT_PAREN sourceQuery=query RIGHT_PAREN
    ) sourceAlias=tableAlias KW_ON mergeCondition=booleanExpression matchedClause* notMatchedClause* notMatchedBySourceClause*
    ;

dbSchemaName
    : identifierReference
    ;

dbSchemaNameCreate
    : identifierReference
    ;

tableNameCreate
    : tableIdentifier
    ;

tableName
    : tableIdentifier
    ;

viewNameCreate
    : viewIdentifier
    ;

viewName
    : viewIdentifier
    ;

columnName
    : multipartIdentifier
    ;

columnNameSeq
    : columnName (COMMA columnName)*
    ;

columnNameCreate
    : errorCapturingIdentifier
    ;

identifierReference
    : KW_IDENTIFIER LEFT_PAREN expression RIGHT_PAREN
    | multipartIdentifier
    ;

queryOrganization
    : (KW_ORDER KW_BY order+=sortItem (COMMA order+=sortItem)*)? (
        KW_CLUSTER KW_BY clusterBy+=expression (COMMA clusterBy+=expression)*
    )? (KW_DISTRIBUTE KW_BY distributeBy+=expression (COMMA distributeBy+=expression)*)? (
        KW_SORT KW_BY sort+=sortItem (COMMA sort+=sortItem)*
    )? windowClause? (KW_LIMIT (KW_ALL | limit=expression))? (KW_OFFSET offset=expression)?
    ;

multiInsertQueryBody
    : insertInto fromStatementBody
    ;

queryTerm
    : queryPrimary
    | left=queryTerm operator=(KW_INTERSECT | KW_UNION | KW_EXCEPT | KW_MINUS) setQuantifier? right=queryTerm
    | left=queryTerm operator=KW_INTERSECT setQuantifier? right=queryTerm
    | left=queryTerm operator=(KW_UNION | KW_EXCEPT | KW_MINUS) setQuantifier? right=queryTerm
    ;

queryPrimary
    : querySpecification
    | fromStatement
    | KW_TABLE tableName
    | inlineTable
    | LEFT_PAREN query RIGHT_PAREN
    ;

sortItem
    : (columnName | expression) ordering=(KW_ASC | KW_DESC)? (
        KW_NULLS nullOrder=(KW_LAST | KW_FIRST)
    )?
    ;

fromStatement
    : fromClause fromStatementBody+
    ;

fromStatementBody
    : transformClause whereClause? queryOrganization
    | selectClause lateralView* whereClause? aggregationClause? havingClause? windowClause? queryOrganization
    ;

querySpecification
    : transformClause fromClause? lateralView* whereClause? aggregationClause? havingClause? windowClause?
    | selectClause fromClause? lateralView* whereClause? aggregationClause? havingClause? windowClause?
    ;

transformClause
    : (
        KW_SELECT kind=KW_TRANSFORM LEFT_PAREN setQuantifier? expressionSeq RIGHT_PAREN
        | kind=KW_MAP setQuantifier? expressionSeq
        | kind=KW_REDUCE setQuantifier? expressionSeq
    ) inRowFormat=rowFormat? (KW_RECORDWRITER recordWriter=stringLit)? KW_USING script=stringLit (
        KW_AS (
            identifierSeq
            | colTypeList
            | (LEFT_PAREN (identifierSeq | colTypeList) RIGHT_PAREN)
        )
    )? outRowFormat=rowFormat? (KW_RECORDREADER recordReader=stringLit)?
    ;

selectClause
    : KW_SELECT (hints+=hint)* setQuantifier? namedExpressionSeq
    ;

setClause
    : KW_SET assignmentList
    ;

matchedClause
    : KW_WHEN KW_MATCHED (KW_AND matchedCond=booleanExpression)? KW_THEN matchedAction
    ;

notMatchedClause
    : KW_WHEN KW_NOT KW_MATCHED (KW_BY KW_TARGET)? (KW_AND notMatchedCond=booleanExpression)? KW_THEN notMatchedAction
    ;

notMatchedBySourceClause
    : KW_WHEN KW_NOT KW_MATCHED KW_BY KW_SOURCE (KW_AND notMatchedBySourceCond=booleanExpression)? KW_THEN notMatchedBySourceAction
    ;

matchedAction
    : KW_DELETE
    | KW_UPDATE KW_SET ASTERISK
    | KW_UPDATE KW_SET assignmentList
    ;

notMatchedAction
    : KW_INSERT ASTERISK
    | KW_INSERT LEFT_PAREN multipartIdentifierList RIGHT_PAREN KW_VALUES LEFT_PAREN expression (
        COMMA expression
    )* RIGHT_PAREN
    ;

notMatchedBySourceAction
    : KW_DELETE
    | KW_UPDATE KW_SET assignmentList
    ;

assignmentList
    : assignment (COMMA assignment)*
    ;

assignment
    : key=multipartIdentifier EQ value=expression
    ;

whereClause
    : KW_WHERE booleanExpression
    ;

havingClause
    : KW_HAVING booleanExpression
    ;

hint
    : HENT_START hintStatements+=hintStatement (COMMA? hintStatements+=hintStatement)* HENT_END
    ;

hintStatement
    : hintName=identifier
    | hintName=identifier LEFT_PAREN parameters+=primaryExpression (
        COMMA parameters+=primaryExpression
    )* RIGHT_PAREN
    ;

fromClause
    : KW_FROM relation (COMMA relation)* lateralView* pivotClause? unpivotClause?
    ;

functionKind
    : KW_USER
    | KW_SYSTEM
    | KW_ALL
    ;

temporalClause
    : KW_FOR? (KW_SYSTEM_VERSION | KW_VERSION) KW_AS KW_OF version
    | KW_FOR? (KW_SYSTEM_TIME | KW_TIMESTAMP) KW_AS KW_OF timestamp=valueExpression
    ;

aggregationClause
    : KW_GROUP KW_BY groupingExpressionsWithGroupingAnalytics+=groupByClause (
        COMMA groupingExpressionsWithGroupingAnalytics+=groupByClause
    )*
    | KW_GROUP KW_BY groupingExpressions+=expression (COMMA groupingExpressions+=expression)* (
        KW_WITH kind=KW_ROLLUP
        | KW_WITH kind=KW_CUBE
        | kind=KW_GROUPING KW_SETS LEFT_PAREN groupingSet (COMMA groupingSet)* RIGHT_PAREN
    )?
    ;

groupByClause
    : columnName
    | groupingAnalytics
    | expression
    ;

groupingAnalytics
    : (KW_ROLLUP | KW_CUBE) LEFT_PAREN groupingSet (COMMA groupingSet)* RIGHT_PAREN
    | KW_GROUPING KW_SETS LEFT_PAREN groupingElement (COMMA groupingElement)* RIGHT_PAREN
    ;

groupingElement
    : groupingAnalytics
    | groupingSet
    ;

groupingSet
    : columnName
    | expression
    | LEFT_PAREN ((columnName | expression) (COMMA (columnName | expression))*)? RIGHT_PAREN
    ;

pivotClause
    : KW_PIVOT LEFT_PAREN aggregates=namedExpressionSeq KW_FOR pivotColumn KW_IN LEFT_PAREN pivotValues+=pivotValue (
        COMMA pivotValues+=pivotValue
    )* RIGHT_PAREN RIGHT_PAREN
    ;

pivotColumn
    : identifiers+=identifier
    | LEFT_PAREN identifiers+=identifier (COMMA identifiers+=identifier)* RIGHT_PAREN
    ;

pivotValue
    : expression (KW_AS? identifier)?
    ;

unpivotClause
    : KW_UNPIVOT nullOperator=unpivotNullClause? LEFT_PAREN operator=unpivotOperator RIGHT_PAREN (
        KW_AS? identifier
    )?
    ;

unpivotNullClause
    : (KW_INCLUDE | KW_EXCLUDE) KW_NULLS
    ;

unpivotOperator
    : (unpivotSingleValueColumnClause | unpivotMultiValueColumnClause)
    ;

unpivotSingleValueColumnClause
    : unpivotValueColumn KW_FOR unpivotNameColumn KW_IN LEFT_PAREN unpivotColumns+=unpivotColumnAndAlias (
        COMMA unpivotColumns+=unpivotColumnAndAlias
    )* RIGHT_PAREN
    ;

unpivotMultiValueColumnClause
    : LEFT_PAREN unpivotValueColumns+=unpivotValueColumn (
        COMMA unpivotValueColumns+=unpivotValueColumn
    )* RIGHT_PAREN KW_FOR unpivotNameColumn KW_IN LEFT_PAREN unpivotColumnSets+=unpivotColumnSet (
        COMMA unpivotColumnSets+=unpivotColumnSet
    )* RIGHT_PAREN
    ;

unpivotColumnSet
    : LEFT_PAREN unpivotColumns+=unpivotColumn (COMMA unpivotColumns+=unpivotColumn)* RIGHT_PAREN unpivotAlias?
    ;

unpivotValueColumn
    : identifier
    ;

unpivotNameColumn
    : identifier
    ;

unpivotColumnAndAlias
    : unpivotColumn unpivotAlias?
    ;

unpivotColumn
    : multipartIdentifier
    ;

unpivotAlias
    : KW_AS? identifier
    ;

ifNotExists
    : KW_IF KW_NOT KW_EXISTS
    ;

ifExists
    : KW_IF KW_EXISTS
    ;

lateralView
    : KW_LATERAL KW_VIEW (KW_OUTER)? viewName LEFT_PAREN (expression (COMMA expression)*)? RIGHT_PAREN tableAlias (
        KW_AS? colName+=identifier (COMMA colName+=identifier)*
    )?
    ;

setQuantifier
    : KW_DISTINCT
    | KW_ALL
    ;

relation
    : KW_LATERAL? relationPrimary relationExtension*
    | tableName
    ;

relationExtension
    : joinRelation
    | pivotClause
    | unpivotClause
    ;

joinRelation
    : (joinType) KW_JOIN KW_LATERAL? right=relationPrimary joinCriteria?
    | KW_NATURAL joinType KW_JOIN KW_LATERAL? right=relationPrimary
    ;

joinType
    : KW_INNER?
    | KW_CROSS
    | KW_LEFT KW_OUTER?
    | KW_LEFT? KW_SEMI
    | KW_RIGHT KW_OUTER?
    | KW_FULL KW_OUTER?
    | KW_LEFT? KW_ANTI
    ;

joinCriteria
    : KW_ON booleanExpression
    | KW_USING identifierList
    ;

sample
    : KW_TABLESAMPLE LEFT_PAREN sampleMethod? RIGHT_PAREN (
        KW_REPEATABLE LEFT_PAREN seed=INTEGER_VALUE RIGHT_PAREN
    )?
    ;

sampleMethod
    : negativeSign=MINUS? percentage=(INTEGER_VALUE | DECIMAL_VALUE) KW_PERCENTLIT
    | expression KW_ROWS
    | sampleType=KW_BUCKET numerator=INTEGER_VALUE KW_OUT KW_OF denominator=INTEGER_VALUE (
        KW_ON (identifier | qualifiedName LEFT_PAREN RIGHT_PAREN)
    )?
    | bytes=expression
    ;

identifierList
    : LEFT_PAREN identifierSeq RIGHT_PAREN
    ;

identifierSeq
    : ident+=errorCapturingIdentifier (COMMA ident+=errorCapturingIdentifier)*
    ;

orderedIdentifierList
    : LEFT_PAREN orderedIdentifier (COMMA orderedIdentifier)* RIGHT_PAREN
    ;

orderedIdentifier
    : ident=errorCapturingIdentifier ordering=(KW_ASC | KW_DESC)?
    ;

identifierCommentList
    : LEFT_PAREN identifierComment (COMMA identifierComment)* RIGHT_PAREN
    ;

identifierComment
    : identifier commentSpec?
    ;

relationPrimary
    : identifierReference temporalClause? sample? tableAlias
    | LEFT_PAREN query RIGHT_PAREN sample? tableAlias
    | LEFT_PAREN relation RIGHT_PAREN sample? tableAlias
    | inlineTable
    | functionTable
    ;

inlineTable
    : KW_VALUES expression (COMMA expression)* tableAlias
    ;

functionTableSubqueryArgument
    : KW_TABLE tableName tableArgumentPartitioning?
    | KW_TABLE LEFT_PAREN tableName RIGHT_PAREN tableArgumentPartitioning?
    | KW_TABLE LEFT_PAREN query RIGHT_PAREN tableArgumentPartitioning?
    ;

tableArgumentPartitioning
    : (
        (KW_WITH KW_SINGLE KW_PARTITION)
        | (
            (KW_PARTITION | KW_DISTRIBUTE) KW_BY (
                ((LEFT_PAREN partition+=expression (COMMA partition+=expression)* RIGHT_PAREN))
                | partition+=expression
            )
        )
    ) (
        (KW_ORDER | KW_SORT) KW_BY (
            ((LEFT_PAREN sortItem (COMMA sortItem)* RIGHT_PAREN) | sortItem)
        )
    )?
    ;

functionTableNamedArgumentExpression
    : key=identifier FAT_ARROW table=functionTableSubqueryArgument
    ;

functionTableReferenceArgument
    : functionTableSubqueryArgument
    | functionTableNamedArgumentExpression
    ;

functionTableArgument
    : functionTableReferenceArgument
    | functionArgument
    ;

functionTable
    : functionName LEFT_PAREN (functionTableArgument (COMMA functionTableArgument)*)? RIGHT_PAREN tableAlias
    ;

tableAlias
    : (KW_AS? strictIdentifier identifierList?)?
    ;

rowFormat
    : KW_ROW KW_FORMAT KW_SERDE name=stringLit (KW_WITH KW_SERDEPROPERTIES props=propertyList)?
    | KW_ROW KW_FORMAT KW_DELIMITED (
        KW_FIELDS KW_TERMINATED KW_BY fieldsTerminatedBy=stringLit (
            KW_ESCAPED KW_BY escapedBy=stringLit
        )?
    )? (KW_COLLECTION KW_ITEMS KW_TERMINATED KW_BY collectionItemsTerminatedBy=stringLit)? (
        KW_MAP KW_KEYS KW_TERMINATED KW_BY keysTerminatedBy=stringLit
    )? (KW_LINES KW_TERMINATED KW_BY linesSeparatedBy=stringLit)? (
        KW_NULL KW_DEFINED KW_AS nullDefinedAs=stringLit
    )?
    ;

multipartIdentifierList
    : multipartIdentifier (COMMA multipartIdentifier)*
    ;

multipartIdentifier
    : parts+=errorCapturingIdentifier (DOT parts+=errorCapturingIdentifier)*
    ;

multipartIdentifierPropertyList
    : multipartIdentifierProperty (COMMA multipartIdentifierProperty)*
    ;

multipartIdentifierProperty
    : multipartIdentifier (KW_OPTIONS options=propertyList)?
    ;

tableIdentifier
    : (db=errorCapturingIdentifier DOT)? table=errorCapturingIdentifier
    ;

viewIdentifier
    : (db=errorCapturingIdentifier DOT)? view=errorCapturingIdentifier
    ;

namedExpression
    : (columnName | expression) (KW_AS? (name=errorCapturingIdentifier | identifierList))?
    ;

namedExpressionSeq
    : namedExpression (COMMA namedExpression)*
    ;

partitionFieldList
    : LEFT_PAREN fields+=partitionField (COMMA fields+=partitionField)* RIGHT_PAREN
    ;

partitionField
    : transform
    | colType
    ;

transform
    : qualifiedName
    | transformName=identifier LEFT_PAREN transformArgument (COMMA transformArgument)* RIGHT_PAREN
    ;

transformArgument
    : qualifiedName
    | constant
    ;

expression
    : booleanExpression
    ;

namedArgumentExpression
    : key=identifier FAT_ARROW value=expression
    ;

functionArgument
    : expression
    | namedArgumentExpression
    ;

expressionSeq
    : expression (COMMA expression)*
    ;

booleanExpression
    : (KW_NOT | NOT) booleanExpression
    | KW_EXISTS LEFT_PAREN query RIGHT_PAREN
    | valueExpression predicate?
    | left=booleanExpression operator=KW_AND right=booleanExpression
    | left=booleanExpression operator=KW_OR right=booleanExpression
    ;

predicate
    : KW_NOT? kind=KW_BETWEEN lower=valueExpression KW_AND upper=valueExpression
    | KW_NOT? kind=KW_IN LEFT_PAREN expression (COMMA expression)* RIGHT_PAREN
    | KW_NOT? kind=KW_IN LEFT_PAREN query RIGHT_PAREN
    | KW_NOT? kind=(KW_RLIKE | KW_REGEXP) pattern=valueExpression
    | KW_NOT? kind=(KW_LIKE | KW_ILIKE) quantifier=(KW_ANY | KW_SOME | KW_ALL) (
        LEFT_PAREN RIGHT_PAREN
        | LEFT_PAREN expression (COMMA expression)* RIGHT_PAREN
    )
    | KW_NOT? kind=(KW_LIKE | KW_ILIKE) pattern=valueExpression (KW_ESCAPE escapeChar=stringLit)?
    | KW_IS KW_NOT? kind=KW_NULL
    | KW_IS KW_NOT? kind=(KW_TRUE | KW_FALSE | KW_UNKNOWN)
    | KW_IS KW_NOT? kind=KW_DISTINCT KW_FROM right=valueExpression
    ;

valueExpression
    : primaryExpression
    | operator=(MINUS | PLUS | TILDE) valueExpression
    | left=valueExpression operator=(ASTERISK | SLASH | PERCENT | KW_DIV) right=valueExpression
    | left=valueExpression operator=(PLUS | MINUS | CONCAT_PIPE) right=valueExpression
    | left=valueExpression operator=AMPERSAND right=valueExpression
    | left=valueExpression operator=HAT right=valueExpression
    | left=valueExpression operator=PIPE right=valueExpression
    | left=valueExpression comparisonOperator right=valueExpression
    ;

datetimeUnit
    : KW_YEAR
    | KW_QUARTER
    | KW_MONTH
    | KW_WEEK
    | KW_DAY
    | KW_DAYOFYEAR
    | KW_HOUR
    | KW_MINUTE
    | KW_SECOND
    | KW_MILLISECOND
    | KW_MICROSECOND
    ;

primaryExpression
    : name=(KW_CURRENT_DATE | KW_CURRENT_TIMESTAMP | KW_CURRENT_USER | KW_USER | KW_SESSION_USER)
    | name=(KW_TIMESTAMPADD | KW_DATEADD | KW_DATE_ADD) LEFT_PAREN (
        unit=datetimeUnit
        | invalidUnit=stringLit
    ) COMMA unitsAmount=valueExpression COMMA timestamp=valueExpression RIGHT_PAREN
    | name=(KW_TIMESTAMPDIFF | KW_DATEDIFF | KW_DATE_DIFF | KW_TIMEDIFF) LEFT_PAREN (
        unit=datetimeUnit
        | invalidUnit=stringLit
    ) COMMA startTimestamp=valueExpression COMMA endTimestamp=valueExpression RIGHT_PAREN
    | KW_CASE whenClause+ (KW_ELSE elseExpression=expression)? KW_END
    | KW_CASE expression whenClause+ (KW_ELSE elseExpression=expression)? KW_END
    | name=(KW_CAST | KW_TRY_CAST) LEFT_PAREN expression KW_AS dataType RIGHT_PAREN
    | KW_STRUCT LEFT_PAREN (namedExpression (COMMA namedExpression)*)? RIGHT_PAREN
    | KW_FIRST LEFT_PAREN expression (KW_IGNORE KW_NULLS)? RIGHT_PAREN
    | KW_ANY_VALUE LEFT_PAREN expression (KW_IGNORE KW_NULLS)? RIGHT_PAREN
    | KW_LAST LEFT_PAREN expression (KW_IGNORE KW_NULLS)? RIGHT_PAREN
    | KW_POSITION LEFT_PAREN substr=valueExpression KW_IN str=valueExpression RIGHT_PAREN
    | constant
    | ASTERISK
    | qualifiedName DOT ASTERISK
    | LEFT_PAREN namedExpression (COMMA namedExpression)+ RIGHT_PAREN
    | LEFT_PAREN query RIGHT_PAREN
    | KW_IDENTIFIER LEFT_PAREN expression RIGHT_PAREN
    | functionName LEFT_PAREN (setQuantifier? functionArgument (COMMA functionArgument)*)? RIGHT_PAREN (
        KW_FILTER LEFT_PAREN KW_WHERE where=booleanExpression RIGHT_PAREN
    )? (nullsOption=(KW_IGNORE | KW_RESPECT) KW_NULLS)? (KW_OVER windowSpec)?
    | identifier ARROW expression
    | LEFT_PAREN identifier (COMMA identifier)+ RIGHT_PAREN ARROW expression
    | value=primaryExpression LEFT_BRACKET index=valueExpression RIGHT_BRACKET
    | identifier
    | base=primaryExpression DOT fieldName=identifier
    | LEFT_PAREN expression RIGHT_PAREN
    | KW_EXTRACT LEFT_PAREN field=identifier KW_FROM source=valueExpression RIGHT_PAREN
    | (KW_SUBSTR | KW_SUBSTRING) LEFT_PAREN str=valueExpression (KW_FROM | COMMA) pos=valueExpression (
        (KW_FOR | COMMA) len=valueExpression
    )? RIGHT_PAREN
    | KW_TRIM LEFT_PAREN trimOption=(KW_BOTH | KW_LEADING | KW_TRAILING)? (
        trimStr=valueExpression
    )? KW_FROM srcStr=valueExpression RIGHT_PAREN
    | KW_OVERLAY LEFT_PAREN input=valueExpression KW_PLACING replace=valueExpression KW_FROM position=valueExpression (
        KW_FOR length=valueExpression
    )? RIGHT_PAREN
    | name=(KW_PERCENTILE_CONT | KW_PERCENTILE_DISC) LEFT_PAREN percentage=valueExpression RIGHT_PAREN KW_WITHIN KW_GROUP LEFT_PAREN KW_ORDER KW_BY
        sortItem RIGHT_PAREN (KW_FILTER LEFT_PAREN KW_WHERE where=booleanExpression RIGHT_PAREN)? (
        KW_OVER windowSpec
    )?
    ;

literalType
    : KW_DATE
    | KW_TIMESTAMP
    | KW_TIMESTAMP_LTZ
    | KW_TIMESTAMP_NTZ
    | KW_INTERVAL
    | KW_BINARY_HEX
    | unsupportedType=identifier
    ;

constant
    : KW_NULL
    | QUESTION
    | COLON identifier
    | interval
    | literalType stringLit
    | number
    | booleanValue
    | stringLit+
    ;

comparisonOperator
    : EQ
    | NEQ
    | NEQJ
    | LT
    | LTE
    | GT
    | GTE
    | NSEQ
    ;

arithmeticOperator
    : PLUS
    | MINUS
    | ASTERISK
    | SLASH
    | PERCENT
    | KW_DIV
    | TILDE
    | AMPERSAND
    | PIPE
    | CONCAT_PIPE
    | HAT
    ;

predicateOperator
    : KW_OR
    | KW_AND
    | KW_IN
    | KW_NOT
    ;

booleanValue
    : KW_TRUE
    | KW_FALSE
    ;

interval
    : KW_INTERVAL (errorCapturingMultiUnitsInterval | errorCapturingUnitToUnitInterval)
    ;

errorCapturingMultiUnitsInterval
    : body=multiUnitsInterval unitToUnitInterval?
    ;

multiUnitsInterval
    : (intervalValue unit+=unitInMultiUnits)+
    ;

errorCapturingUnitToUnitInterval
    : body=unitToUnitInterval (error1=multiUnitsInterval | error2=unitToUnitInterval)?
    ;

unitToUnitInterval
    : value=intervalValue unitInUnitToUnit KW_TO unitInUnitToUnit
    ;

intervalValue
    : (PLUS | MINUS)? (INTEGER_VALUE | DECIMAL_VALUE | stringLit)
    ;

unitInMultiUnits
    : KW_NANOSECOND
    | KW_NANOSECONDS
    | KW_MICROSECOND
    | KW_MICROSECONDS
    | KW_MILLISECOND
    | KW_MILLISECONDS
    | KW_SECOND
    | KW_SECONDS
    | KW_MINUTE
    | KW_MINUTES
    | KW_HOUR
    | KW_HOURS
    | KW_DAY
    | KW_DAYS
    | KW_WEEK
    | KW_WEEKS
    | KW_MONTH
    | KW_MONTHS
    | KW_YEAR
    | KW_YEARS
    ;

unitInUnitToUnit
    : KW_SECOND
    | KW_MINUTE
    | KW_HOUR
    | KW_DAY
    | KW_MONTH
    | KW_YEAR
    ;

colPosition
    : position=KW_FIRST
    | position=KW_AFTER afterCol=errorCapturingIdentifier
    ;

type
    : KW_BOOLEAN
    | KW_TINYINT
    | KW_BYTE
    | KW_SMALLINT
    | KW_SHORT
    | KW_INT
    | KW_INTEGER
    | KW_BIGINT
    | KW_LONG
    | KW_FLOAT
    | KW_REAL
    | KW_DOUBLE
    | KW_DATE
    | KW_TIMESTAMP
    | KW_TIMESTAMP_NTZ
    | KW_TIMESTAMP_LTZ
    | KW_STRING
    | KW_CHARACTER
    | KW_CHAR
    | KW_VARCHAR
    | KW_BINARY
    | KW_DECIMAL
    | KW_DEC
    | KW_NUMERIC
    | KW_VOID
    | KW_INTERVAL
    | KW_ARRAY
    | KW_STRUCT
    | KW_MAP
    | unsupportedType=identifier
    ;

dataType
    : complex=KW_ARRAY LT dataType GT
    | complex=KW_MAP LT dataType COMMA dataType GT
    | complex=KW_STRUCT (LT complexColTypeList? GT | NEQ)
    | KW_INTERVAL (KW_YEAR | KW_MONTH) (KW_TO KW_MONTH)?
    | KW_INTERVAL (KW_DAY | KW_HOUR | KW_MINUTE | KW_SECOND) (
        KW_TO (KW_HOUR | KW_MINUTE | KW_SECOND)
    )?
    | type (LEFT_PAREN INTEGER_VALUE (COMMA INTEGER_VALUE)* RIGHT_PAREN)?
    ;

qualifiedColTypeWithPositionSeqForAdd
    : qualifiedColTypeWithPositionForAdd (COMMA qualifiedColTypeWithPositionForAdd)*
    ;

qualifiedColTypeWithPositionForAdd
    : name=columnNameCreate dataType colDefinitionDescriptorWithPosition*
    ;

qualifiedColTypeWithPositionSeqForReplace
    : qualifiedColTypeWithPositionForReplace (COMMA qualifiedColTypeWithPositionForReplace)*
    ;

qualifiedColTypeWithPositionForReplace
    : name=columnName dataType colDefinitionDescriptorWithPosition*
    ;

colDefinitionDescriptorWithPosition
    : KW_NOT KW_NULL
    | defaultExpression
    | commentSpec
    | colPosition
    ;

defaultExpression
    : KW_DEFAULT expression
    ;

variableDefaultExpression
    : (KW_DEFAULT | EQ) expression
    ;

colTypeList
    : colType (COMMA colType)*
    ;

colType
    : colName=errorCapturingIdentifier dataType (KW_NOT KW_NULL)? commentSpec?
    ;

createOrReplaceTableColTypeList
    : createOrReplaceTableColType (COMMA createOrReplaceTableColType)*
    ;

createOrReplaceTableColType
    : colName=columnNameCreate dataType colDefinitionOption*
    ;

colDefinitionOption
    : KW_NOT KW_NULL
    | defaultExpression
    | generationExpression
    | commentSpec
    ;

generationExpression
    : KW_GENERATED KW_ALWAYS KW_AS LEFT_PAREN expression RIGHT_PAREN
    ;

complexColTypeList
    : complexColType (COMMA complexColType)*
    ;

complexColType
    : identifier COLON? dataType (KW_NOT KW_NULL)? commentSpec?
    ;

whenClause
    : KW_WHEN condition=expression KW_THEN result=expression
    ;

windowClause
    : KW_WINDOW namedWindow (COMMA namedWindow)*
    ;

zorderClause
    : KW_ZORDER KW_BY columnNameSeq
    ;

namedWindow
    : name=errorCapturingIdentifier KW_AS windowSpec
    ;

windowSpec
    : name=errorCapturingIdentifier
    | LEFT_PAREN name=errorCapturingIdentifier RIGHT_PAREN
    | LEFT_PAREN (
        KW_CLUSTER KW_BY partition+=expression (COMMA partition+=expression)*
        | (
            (KW_PARTITION | KW_DISTRIBUTE) KW_BY partition+=expression (
                COMMA partition+=expression
            )*
        )? ((KW_ORDER | KW_SORT) KW_BY sortItem (COMMA sortItem)*)?
    ) windowFrame? RIGHT_PAREN
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
    : KW_UNBOUNDED boundType=(KW_PRECEDING | KW_FOLLOWING)
    | boundType=KW_CURRENT KW_ROW
    | expression boundType=(KW_PRECEDING | KW_FOLLOWING)
    ;

qualifiedNameList
    : qualifiedName (COMMA qualifiedName)*
    ;

functionName
    : KW_IDENTIFIER LEFT_PAREN expression RIGHT_PAREN
    | qualifiedName
    | KW_FILTER
    | KW_LEFT
    | KW_RIGHT
    ;

functionNameCreate
    : qualifiedName
    ;

qualifiedName
    : identifier (DOT identifier)*
    ;

// this rule is used for explicitly capturing wrong identifiers such as test-table, which should actually be `test-table`
// replace identifier with errorCapturingIdentifier where the immediate follow symbol is not an expression, otherwise
// valid expressions such as "a-b" can be recognized as an identifier
errorCapturingIdentifier
    : identifier errorCapturingIdentifierExtra
    ;

// extra left-factoring grammar
errorCapturingIdentifierExtra
    : (MINUS identifier)+
    |
    ;

identifier
    : strictIdentifier
    | strictNonReserved
    ;

strictIdentifier
    : IDENTIFIER
    | quotedIdentifier
    | ansiNonReserved
    | nonReserved
    ;

quotedIdentifier
    : BACKQUOTED_IDENTIFIER
    | DOUBLEQUOTED_STRING
    ;

backQuotedIdentifier
    : BACKQUOTED_IDENTIFIER
    ;

number
    : MINUS? EXPONENT_VALUE
    | MINUS? DECIMAL_VALUE
    | MINUS? (EXPONENT_VALUE | DECIMAL_VALUE)
    | MINUS? INTEGER_VALUE
    | MINUS? BIGINT_LITERAL
    | MINUS? SMALLINT_LITERAL
    | MINUS? TINYINT_LITERAL
    | MINUS? DOUBLE_LITERAL
    | MINUS? FLOAT_LITERAL
    | MINUS? BIGDECIMAL_LITERAL
    ;

alterColumnAction
    : KW_TYPE dataType
    | commentSpec
    | colPosition
    | setOrDrop=(KW_SET | KW_DROP) KW_NOT KW_NULL
    | KW_SET defaultExpression
    | dropDefault=KW_DROP KW_DEFAULT
    ;

stringLit
    : STRING_LITERAL
    | DOUBLEQUOTED_STRING
    ;

comment
    : stringLit
    | KW_NULL
    ;

version
    : INTEGER_VALUE
    | stringLit
    ;

// When `SQL_standard_keyword_behavior=true`, there are 2 kinds of keywords in Spark SQL.
// - Reserved keywords:
//     Keywords that are reserved and can't be used as identifiers for table, view, column,
//     function, alias, etc.
// - Non-reserved keywords:
//     Keywords that have a special meaning only in particular contexts and can be used as
//     identifiers in other contexts. For example, `EXPLAIN SELECT ...` is a command, but EXPLAIN
//     can be used as identifiers in other places.
// You can find the full keywords list by searching "Start of the keywords list" in this file.
// The non-reserved keywords are listed below. Keywords not in this list are reserved keywords.
ansiNonReserved
    //--ANSI-NON-RESERVED-START
    : KW_ADD
    | KW_AFTER
    | KW_ALTER
    | KW_ALWAYS
    | KW_ANALYZE
    | KW_ANTI
    | KW_ANY_VALUE
    | KW_ARCHIVE
    | KW_ARRAY
    | KW_ASC
    | KW_AT
    | KW_BETWEEN
    | KW_BIGINT
    | KW_BINARY
    | KW_BINARY_HEX
    | KW_BOOLEAN
    | KW_BUCKET
    | KW_BUCKETS
    | KW_BY
    | KW_BYTE
    | KW_CACHE
    | KW_CASCADE
    | KW_CATALOG
    | KW_CATALOGS
    | KW_CHANGE
    | KW_CHAR
    | KW_CHARACTER
    | KW_CLEAR
    | KW_CLUSTER
    | KW_CLUSTERED
    | KW_CODEGEN
    | KW_COLLECTION
    | KW_COLUMNS
    | KW_COMMENT
    | KW_COMMIT
    | KW_COMPACT
    | KW_COMPACTIONS
    | KW_COMPUTE
    | KW_CONCATENATE
    | KW_COST
    | KW_CUBE
    | KW_CURRENT
    | KW_DATA
    | KW_DATABASE
    | KW_DATABASES
    | KW_DATE
    | KW_DATEADD
    | KW_DATE_ADD
    | KW_DATEDIFF
    | KW_DATE_DIFF
    | KW_DAY
    | KW_DAYS
    | KW_DAYOFYEAR
    | KW_DBPROPERTIES
    | KW_DEC
    | KW_DECIMAL
    | KW_DECLARE
    | KW_DEFAULT
    | KW_DEFINED
    | KW_DELETE
    | KW_DELIMITED
    | KW_DESC
    | KW_DESCRIBE
    | KW_DFS
    | KW_DIRECTORIES
    | KW_DIRECTORY
    | KW_DISABLE
    | KW_DISTRIBUTE
    | KW_DIV
    | KW_DOUBLE
    | KW_DROP
    | KW_ENABLE
    | KW_ESCAPED
    | KW_EXCHANGE
    | KW_EXCLUDE
    | KW_EXISTS
    | KW_EXPLAIN
    | KW_EXPORT
    | KW_EXTENDED
    | KW_EXTERNAL
    | KW_EXTRACT
    | KW_FIELDS
    | KW_FILEFORMAT
    | KW_FIRST
    | KW_FLOAT
    | KW_FOLLOWING
    | KW_FORMAT
    | KW_FORMATTED
    | KW_FUNCTION
    | KW_FUNCTIONS
    | KW_GENERATED
    | KW_GLOBAL
    | KW_GROUPING
    | KW_HOUR
    | KW_HOURS
    | KW_IDENTIFIER
    | KW_IF
    | KW_IGNORE
    | KW_IMPORT
    | KW_INCLUDE
    | KW_INDEX
    | KW_INDEXES
    | KW_INPATH
    | KW_INPUTFORMAT
    | KW_INSERT
    | KW_INT
    | KW_INTEGER
    | KW_INTERVAL
    | KW_ITEMS
    | KW_KEYS
    | KW_LAST
    | KW_LAZY
    | KW_LIKE
    | KW_ILIKE
    | KW_LIMIT
    | KW_LINES
    | KW_LIST
    | KW_LOAD
    | KW_LOCAL
    | KW_LOCATION
    | KW_LOCK
    | KW_LOCKS
    | KW_LOGICAL
    | KW_LONG
    | KW_MACRO
    | KW_MAP
    | KW_MATCHED
    | KW_MATERIALIZED
    | KW_MERGE
    | KW_MICROSECOND
    | KW_MICROSECONDS
    | KW_MILLISECOND
    | KW_MILLISECONDS
    | KW_MINUTE
    | KW_MINUTES
    | KW_MONTH
    | KW_MONTHS
    | KW_MSCK
    | KW_NAME
    | KW_NAMESPACE
    | KW_NAMESPACES
    | KW_NANOSECOND
    | KW_NANOSECONDS
    | KW_NO
    | KW_NULLS
    | KW_NUMERIC
    | KW_OF
    | KW_OPTIMIZE
    | KW_OPTION
    | KW_OPTIONS
    | KW_OUT
    | KW_OUTPUTFORMAT
    | KW_OVER
    | KW_OVERLAY
    | KW_OVERWRITE
    | KW_PARTITION
    | KW_PARTITIONED
    | KW_PARTITIONS
    | KW_PERCENTLIT
    | KW_PIVOT
    | KW_PLACING
    | KW_POSITION
    | KW_PRECEDING
    | KW_PRINCIPALS
    | KW_PROPERTIES
    | KW_PURGE
    | KW_QUARTER
    | KW_QUERY
    | KW_RANGE
    | KW_REAL
    | KW_RECORDREADER
    | KW_RECORDWRITER
    | KW_RECOVER
    | KW_REDUCE
    | KW_REFRESH
    | KW_RENAME
    | KW_REPAIR
    | KW_REPEATABLE
    | KW_REPLACE
    | KW_RESET
    | KW_RESPECT
    | KW_RESTRICT
    | KW_REVOKE
    | KW_REWRITE
    | KW_RLIKE
    | KW_REGEXP
    | KW_ROLE
    | KW_ROLES
    | KW_ROLLBACK
    | KW_ROLLUP
    | KW_ROW
    | KW_ROWS
    | KW_SCHEMA
    | KW_SCHEMAS
    | KW_SECOND
    | KW_SECONDS
    | KW_SEMI
    | KW_SEPARATED
    | KW_SERDE
    | KW_SERDEPROPERTIES
    | KW_SET
    | KW_MINUS
    | KW_SETS
    | KW_SHORT
    | KW_SHOW
    | KW_SINGLE
    | KW_SKEWED
    | KW_SMALLINT
    | KW_SORT
    | KW_SORTED
    | KW_SOURCE
    | KW_START
    | KW_STATISTICS
    | KW_STORED
    | KW_STRATIFY
    | KW_STRING
    | KW_STRUCT
    | KW_SUBSTR
    | KW_SUBSTRING
    | KW_SYNC
    | KW_SYSTEM
    | KW_SYSTEM_TIME
    | KW_SYSTEM_VERSION
    | KW_TABLES
    | KW_TABLESAMPLE
    | KW_TARGET
    | KW_TBLPROPERTIES
    | KW_TEMPORARY
    | KW_TERMINATED
    | KW_TIMEDIFF
    | KW_TIMESTAMP
    | KW_TIMESTAMP_LTZ
    | KW_TIMESTAMP_NTZ
    | KW_TIMESTAMPADD
    | KW_TIMESTAMPDIFF
    | KW_TINYINT
    | KW_TOUCH
    | KW_TRANSACTION
    | KW_TRANSACTIONS
    | KW_TRANSFORM
    | KW_TRIM
    | KW_TRUE
    | KW_TRUNCATE
    | KW_TRY_CAST
    | KW_TYPE
    | KW_UNARCHIVE
    | KW_UNBOUNDED
    | KW_UNCACHE
    | KW_UNLOCK
    | KW_UNPIVOT
    | KW_UNSET
    | KW_UPDATE
    | KW_USE
    | KW_VALUES
    | KW_VARCHAR
    | KW_VAR
    | KW_VARIABLE
    | KW_VERSION
    | KW_VIEW
    | KW_VIEWS
    | KW_VOID
    | KW_WEEK
    | KW_WEEKS
    | KW_WINDOW
    | KW_YEAR
    | KW_YEARS
    | KW_ZONE
    | KW_ZORDER
    //--ANSI-NON-RESERVED-END
    ;

// When `SQL_standard_keyword_behavior=false`, there are 2 kinds of keywords in Spark SQL.
// - Non-reserved keywords:
//     Same definition as the one when `SQL_standard_keyword_behavior=true`.
// - Strict-non-reserved keywords:
//     A strict version of non-reserved keywords, which can not be used as table alias.
// You can find the full keywords list by searching "Start of the keywords list" in this file.
// The strict-non-reserved keywords are listed in `strictNonReserved`.
// The non-reserved keywords are listed in `nonReserved`.
// These 2 together contain all the keywords.
strictNonReserved
    : KW_ANTI
    | KW_CROSS
    | KW_EXCEPT
    | KW_FULL
    | KW_INNER
    | KW_INTERSECT
    | KW_JOIN
    | KW_LATERAL
    | KW_LEFT
    | KW_NATURAL
    | KW_ON
    | KW_RIGHT
    | KW_SEMI
    | KW_MINUS
    | KW_UNION
    | KW_USING
    ;

nonReserved
    //--DEFAULT-NON-RESERVED-START
    : KW_ADD
    | KW_AFTER
    | KW_ALL
    | KW_ALTER
    | KW_ALWAYS
    | KW_ANALYZE
    | KW_AND
    | KW_ANY
    | KW_ANY_VALUE
    | KW_ARCHIVE
    | KW_ARRAY
    | KW_AS
    | KW_ASC
    | KW_AT
    | KW_AUTHORIZATION
    | KW_BETWEEN
    | KW_BIGINT
    | KW_BINARY
    | KW_BINARY_HEX
    | KW_BOOLEAN
    | KW_BOTH
    | KW_BUCKET
    | KW_BUCKETS
    | KW_BY
    | KW_BYTE
    | KW_CACHE
    | KW_CASCADE
    | KW_CASE
    | KW_CAST
    | KW_CATALOG
    | KW_CATALOGS
    | KW_CHANGE
    | KW_CHAR
    | KW_CHARACTER
    | KW_CHECK
    | KW_CLEAR
    | KW_CLUSTER
    | KW_CLUSTERED
    | KW_CODEGEN
    | KW_COLLATE
    | KW_COLLECTION
    | KW_COLUMN
    | KW_COLUMNS
    | KW_COMMENT
    | KW_COMMIT
    | KW_COMPACT
    | KW_COMPACTIONS
    | KW_COMPUTE
    | KW_CONCATENATE
    | KW_CONSTRAINT
    | KW_COST
    | KW_CREATE
    | KW_CUBE
    | KW_CURRENT
    | KW_CURRENT_DATE
    | KW_CURRENT_TIME
    | KW_CURRENT_TIMESTAMP
    | KW_CURRENT_USER
    | KW_DATA
    | KW_DATABASE
    | KW_DATABASES
    | KW_DATE
    | KW_DATEADD
    | KW_DATE_ADD
    | KW_DATEDIFF
    | KW_DATE_DIFF
    | KW_DAY
    | KW_DAYS
    | KW_DAYOFYEAR
    | KW_DBPROPERTIES
    | KW_DEC
    | KW_DECIMAL
    | KW_DECLARE
    | KW_DEFAULT
    | KW_DEFINED
    | KW_DELETE
    | KW_DELIMITED
    | KW_DESC
    | KW_DESCRIBE
    | KW_DFS
    | KW_DIRECTORIES
    | KW_DIRECTORY
    | KW_DISABLE
    | KW_DISTINCT
    | KW_DISTRIBUTE
    | KW_DIV
    | KW_DOUBLE
    | KW_DROP
    | KW_ELSE
    | KW_ENABLE
    | KW_END
    | KW_ESCAPE
    | KW_ESCAPED
    | KW_EXCHANGE
    | KW_EXCLUDE
    | KW_EXISTS
    | KW_EXPLAIN
    | KW_EXPORT
    | KW_EXTENDED
    | KW_EXTERNAL
    | KW_EXTRACT
    | KW_FALSE
    | KW_FETCH
    | KW_FILTER
    | KW_FIELDS
    | KW_FILEFORMAT
    | KW_FIRST
    | KW_FLOAT
    | KW_FOLLOWING
    | KW_FOR
    | KW_FOREIGN
    | KW_FORMAT
    | KW_FORMATTED
    | KW_FROM
    | KW_FUNCTION
    | KW_FUNCTIONS
    | KW_GENERATED
    | KW_GLOBAL
    | KW_GRANT
    | KW_GROUP
    | KW_GROUPING
    | KW_HAVING
    | KW_HOUR
    | KW_HOURS
    | KW_IDENTIFIER
    | KW_IF
    | KW_IGNORE
    | KW_IMPORT
    | KW_IN
    | KW_INCLUDE
    | KW_INDEX
    | KW_INDEXES
    | KW_INPATH
    | KW_INPUTFORMAT
    | KW_INSERT
    | KW_INT
    | KW_INTEGER
    | KW_INTERVAL
    | KW_INTO
    | KW_IS
    | KW_ITEMS
    | KW_KEYS
    | KW_LAST
    | KW_LAZY
    | KW_LEADING
    | KW_LIKE
    | KW_LONG
    | KW_ILIKE
    | KW_LIMIT
    | KW_LINES
    | KW_LIST
    | KW_LOAD
    | KW_LOCAL
    | KW_LOCATION
    | KW_LOCK
    | KW_LOCKS
    | KW_LOGICAL
    | KW_LONG
    | KW_MACRO
    | KW_MAP
    | KW_MATCHED
    | KW_MATERIALIZED
    | KW_MERGE
    | KW_MICROSECOND
    | KW_MICROSECONDS
    | KW_MILLISECOND
    | KW_MILLISECONDS
    | KW_MINUTE
    | KW_MINUTES
    | KW_MONTH
    | KW_MONTHS
    | KW_MSCK
    | KW_NAME
    | KW_NAMESPACE
    | KW_NAMESPACES
    | KW_NANOSECOND
    | KW_NANOSECONDS
    | KW_NO
    | KW_NOT
    | KW_NULL
    | KW_NULLS
    | KW_NUMERIC
    | KW_OF
    | KW_OFFSET
    | KW_ONLY
    | KW_OPTIMIZE
    | KW_OPTION
    | KW_OPTIONS
    | KW_OR
    | KW_ORDER
    | KW_OUT
    | KW_OUTER
    | KW_OUTPUTFORMAT
    | KW_OVER
    | KW_OVERLAPS
    | KW_OVERLAY
    | KW_OVERWRITE
    | KW_PARTITION
    | KW_PARTITIONED
    | KW_PARTITIONS
    | KW_PERCENTILE_CONT
    | KW_PERCENTILE_DISC
    | KW_PERCENTLIT
    | KW_PIVOT
    | KW_PLACING
    | KW_POSITION
    | KW_PRECEDING
    | KW_PRIMARY
    | KW_PRINCIPALS
    | KW_PROPERTIES
    | KW_PURGE
    | KW_QUARTER
    | KW_QUERY
    | KW_RANGE
    | KW_REAL
    | KW_RECORDREADER
    | KW_RECORDWRITER
    | KW_RECOVER
    | KW_REDUCE
    | KW_REFERENCES
    | KW_REFRESH
    | KW_RENAME
    | KW_REPAIR
    | KW_REPEATABLE
    | KW_REPLACE
    | KW_RESET
    | KW_RESPECT
    | KW_RESTRICT
    | KW_REVOKE
    | KW_REWRITE
    | KW_RLIKE
    | KW_REGEXP
    | KW_ROLE
    | KW_ROLES
    | KW_ROLLBACK
    | KW_ROLLUP
    | KW_ROW
    | KW_ROWS
    | KW_SCHEMA
    | KW_SCHEMAS
    | KW_SECOND
    | KW_SECONDS
    | KW_SELECT
    | KW_SEPARATED
    | KW_SERDE
    | KW_SERDEPROPERTIES
    | KW_SESSION_USER
    | KW_SET
    | KW_SETS
    | KW_SHORT
    | KW_SHOW
    | KW_SINGLE
    | KW_SKEWED
    | KW_SMALLINT
    | KW_SOME
    | KW_SORT
    | KW_SORTED
    | KW_SOURCE
    | KW_START
    | KW_STATISTICS
    | KW_STORED
    | KW_STRATIFY
    | KW_STRING
    | KW_STRUCT
    | KW_SUBSTR
    | KW_SUBSTRING
    | KW_SYNC
    | KW_SYSTEM
    | KW_SYSTEM_TIME
    | KW_SYSTEM_VERSION
    | KW_TABLE
    | KW_TABLES
    | KW_TABLESAMPLE
    | KW_TARGET
    | KW_TBLPROPERTIES
    | KW_TEMPORARY
    | KW_TERMINATED
    | KW_THEN
    | KW_TIME
    | KW_TIMEDIFF
    | KW_TIMESTAMP
    | KW_TIMESTAMP_LTZ
    | KW_TIMESTAMP_NTZ
    | KW_TIMESTAMPADD
    | KW_TIMESTAMPDIFF
    | KW_TINYINT
    | KW_TO
    | KW_TOUCH
    | KW_TRAILING
    | KW_TRANSACTION
    | KW_TRANSACTIONS
    | KW_TRANSFORM
    | KW_TRIM
    | KW_TRUE
    | KW_TRUNCATE
    | KW_TRY_CAST
    | KW_TYPE
    | KW_UNARCHIVE
    | KW_UNBOUNDED
    | KW_UNCACHE
    | KW_UNIQUE
    | KW_UNKNOWN
    | KW_UNLOCK
    | KW_UNPIVOT
    | KW_UNSET
    | KW_UPDATE
    | KW_USE
    | KW_USER
    | KW_VALUES
    | KW_VARCHAR
    | KW_VAR
    | KW_VARIABLE
    | KW_VERSION
    | KW_VIEW
    | KW_VIEWS
    | KW_VOID
    | KW_WEEK
    | KW_WEEKS
    | KW_WHEN
    | KW_WHERE
    | KW_WINDOW
    | KW_WITH
    | KW_WITHIN
    | KW_YEAR
    | KW_YEARS
    | KW_ZONE
    | KW_ZORDER
    //--DEFAULT-NON-RESERVED-END
    ;