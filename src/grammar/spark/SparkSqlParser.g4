// Grammar file from: https://github.com/apache/spark/blob/master/sql/api/src/main/antlr4/org/apache/spark/sql/catalyst/parser/SqlBaseParser.g4

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
 * This file is an adaptation of Presto's presto-parser/src/main/antlr4/com/facebook/presto/sql/parser/SqlBase.g4 grammar.
 */

parser grammar SparkSqlParser;

options { tokenVocab = SparkSqlLexer; }

@members {
  /**
   * When false, INTERSECT is given the greater precedence over the other set
   * operations (UNION, EXCEPT and MINUS) as per the SQL standard.
   */
  public legacy_setops_precedence_enabled = false;

  /**
   * When false, a literal with an exponent would be converted into
   * double type rather than decimal type.
   */
  public legacy_exponent_literal_as_decimal_enabled = false;

  /**
   * When true, the behavior of keywords follows ANSI SQL standard.
   */
  public SQL_standard_keyword_behavior = false;

  /**
   * When true, double quoted literals are identifiers rather than STRINGs.
   */
  public double_quoted_identifiers = false;
}

program
    : singleStatement EOF
    ;

singleStatement
    : statement SEMICOLON* EOF
    ;

singleExpression
    : namedExpression EOF
    ;

singleTableIdentifier
    : tableIdentifier EOF
    ;

singleMultipartIdentifier
    : multipartIdentifier EOF
    ;

singleFunctionIdentifier
    : functionIdentifier EOF
    ;

singleDataType
    : dataType EOF
    ;

singleTableSchema
    : colTypeList EOF
    ;

tableIdentifierReference: identifierReference;
viewIdentifierReference: identifierReference;
functionIdentifierReference: identifierReference;
namespaceIdentifierReference: identifierReference;

statement
    : query
    | ctes? dmlStatementNoWith
    | USE identifierReference
    | USE namespace namespaceIdentifierReference
    | SET CATALOG (identifier | stringLit)
    | CREATE namespace (IF NOT EXISTS)? namespaceIdentifierReference
        (commentSpec |
         locationSpec |
         (WITH (DBPROPERTIES | PROPERTIES) propertyList))*
    | ALTER namespace namespaceIdentifierReference
        SET (DBPROPERTIES | PROPERTIES) propertyList
    | ALTER namespace namespaceIdentifierReference
        SET locationSpec
    | DROP namespace (IF EXISTS)? namespaceIdentifierReference
        (RESTRICT | CASCADE)?
    | SHOW namespaces ((FROM | IN) multipartIdentifier)?
        (LIKE? pattern=stringLit)?
    | createTableHeader (LEFT_PAREN createOrReplaceTableColTypeList RIGHT_PAREN)? tableProvider?
        createTableClauses
        (AS? query)?
    | CREATE TABLE (IF NOT EXISTS)? target=tableIdentifier
        LIKE source=tableIdentifier
        (tableProvider |
        rowFormat |
        createFileFormat |
        locationSpec |
        (TBLPROPERTIES tableProps=propertyList))*
    | replaceTableHeader (LEFT_PAREN createOrReplaceTableColTypeList RIGHT_PAREN)? tableProvider?
        createTableClauses
        (AS? query)?
    | ANALYZE TABLE tableIdentifierReference partitionSpec? COMPUTE STATISTICS
        (identifier | FOR COLUMNS identifierSeq | FOR ALL COLUMNS)?
    | ANALYZE TABLES ((FROM | IN) tableIdentifierReference)? COMPUTE STATISTICS
        (identifier)?
    | ALTER TABLE tableIdentifierReference
        ADD (COLUMN | COLUMNS)
        qualifiedColTypeWithPositionList
    | ALTER TABLE tableIdentifierReference
        ADD (COLUMN | COLUMNS)
        LEFT_PAREN qualifiedColTypeWithPositionList RIGHT_PAREN
    | ALTER TABLE table=tableIdentifierReference
        RENAME COLUMN
        multipartIdentifier TO errorCapturingIdentifier
    | ALTER TABLE tableIdentifierReference
        DROP (COLUMN | COLUMNS) (IF EXISTS)?
        LEFT_PAREN multipartIdentifierList RIGHT_PAREN
    | ALTER TABLE tableIdentifierReference
        DROP (COLUMN | COLUMNS) (IF EXISTS)?
        multipartIdentifierList
    | ALTER (TABLE | VIEW) (tableIdentifierReference | viewIdentifierReference)
        RENAME TO multipartIdentifier
    | ALTER (TABLE | VIEW) (tableIdentifierReference | viewIdentifierReference)
        SET TBLPROPERTIES propertyList
    | ALTER (TABLE | VIEW) (tableIdentifierReference | viewIdentifierReference)
        UNSET TBLPROPERTIES (IF EXISTS)? propertyList
    | ALTER TABLE table=tableIdentifierReference
        (ALTER | CHANGE) COLUMN? column=multipartIdentifier
        alterColumnAction?
    | ALTER TABLE table=tableIdentifierReference partitionSpec?
        CHANGE COLUMN?
        colName=multipartIdentifier colType colPosition?
    | ALTER TABLE table=tableIdentifierReference partitionSpec?
        REPLACE COLUMNS
        LEFT_PAREN qualifiedColTypeWithPositionList
        RIGHT_PAREN
    | ALTER TABLE tableIdentifierReference (partitionSpec)?
        SET SERDE stringLit (WITH SERDEPROPERTIES propertyList)?
    | ALTER TABLE tableIdentifierReference (partitionSpec)?
        SET SERDEPROPERTIES propertyList
    | ALTER (TABLE | VIEW) (tableIdentifierReference | viewIdentifierReference) ADD (IF NOT EXISTS)?
        partitionSpecLocation+
    | ALTER TABLE tableIdentifierReference
        partitionSpec RENAME TO partitionSpec
    | ALTER (TABLE | VIEW) (tableIdentifierReference | viewIdentifierReference)
        DROP (IF EXISTS)? partitionSpec (COMMA partitionSpec)* PURGE?
    | ALTER TABLE tableIdentifierReference
        (partitionSpec)? SET locationSpec
    | ALTER TABLE tableIdentifierReference RECOVER PARTITIONS
    | DROP TABLE (IF EXISTS)? tableIdentifierReference PURGE?
    | DROP VIEW (IF EXISTS)? viewIdentifierReference
    | CREATE (OR REPLACE)? (GLOBAL? TEMPORARY)?
        VIEW (IF NOT EXISTS)? viewIdentifierReference
        identifierCommentList?
        (commentSpec |
         (PARTITIONED ON identifierList) |
         (TBLPROPERTIES propertyList))*
        AS query
    | CREATE (OR REPLACE)? GLOBAL? TEMPORARY VIEW
        tableIdentifier (LEFT_PAREN colTypeList RIGHT_PAREN)? tableProvider
        (OPTIONS propertyList)?
    | ALTER VIEW viewIdentifierReference AS? query
    | CREATE (OR REPLACE)? TEMPORARY? FUNCTION (IF NOT EXISTS)?
        functionIdentifierReference AS className=stringLit
        (USING resource (COMMA resource)*)?
    | DROP TEMPORARY? FUNCTION (IF EXISTS)? functionIdentifierReference
    | DECLARE (OR REPLACE)? VARIABLE?
        functionIdentifierReference dataType? variableDefaultExpression?
    | DROP TEMPORARY VARIABLE (IF EXISTS)? identifierReference
    | EXPLAIN (LOGICAL | FORMATTED | EXTENDED | CODEGEN | COST)?
        statement
    | SHOW TABLES ((FROM | IN) tableIdentifierReference)?
        (LIKE? pattern=stringLit)?
    | SHOW TABLE EXTENDED ((FROM | IN) ns=tableIdentifierReference)?
        LIKE pattern=stringLit partitionSpec?
    | SHOW TBLPROPERTIES table=tableIdentifierReference
        (LEFT_PAREN key=propertyKey RIGHT_PAREN)?
    | SHOW COLUMNS (FROM | IN) table=tableIdentifierReference
        ((FROM | IN) multipartIdentifier)?
    | SHOW VIEWS ((FROM | IN) viewIdentifierReference)?
        (LIKE? pattern=stringLit)?
    | SHOW PARTITIONS identifierReference partitionSpec?
    | SHOW identifier? FUNCTIONS ((FROM | IN) ns=functionIdentifierReference)?
        (LIKE? (legacy=multipartIdentifier | pattern=stringLit))?
    | SHOW CREATE TABLE tableIdentifierReference (AS SERDE)?
    | SHOW CURRENT namespace
    | SHOW CATALOGS (LIKE? pattern=stringLit)?
    | (DESC | DESCRIBE) FUNCTION EXTENDED? describeFuncName
    | (DESC | DESCRIBE) namespace EXTENDED?
        namespaceIdentifierReference
    | (DESC | DESCRIBE) TABLE? option=(EXTENDED | FORMATTED)?
        tableIdentifierReference partitionSpec? describeColName?
    | (DESC | DESCRIBE) QUERY? query
    | COMMENT ON namespace namespaceIdentifierReference IS
        comment
    | COMMENT ON TABLE tableIdentifierReference IS comment
    | REFRESH TABLE tableIdentifierReference
    | REFRESH FUNCTION functionIdentifierReference
    | REFRESH (stringLit | .*?)
    | CACHE LAZY? TABLE tableIdentifierReference
        (OPTIONS options=propertyList)? (AS? query)?
    | UNCACHE TABLE (IF EXISTS)? tableIdentifierReference
    | CLEAR CACHE
    | LOAD DATA LOCAL? INPATH path=stringLit OVERWRITE? INTO TABLE
        tableIdentifierReference partitionSpec?
    | TRUNCATE TABLE tableIdentifierReference partitionSpec?
    | (MSCK)? REPAIR TABLE tableIdentifierReference
        (option=(ADD|DROP|SYNC) PARTITIONS)?
    | op=(ADD | LIST) identifier .*?
    | SET ROLE .*?
    | SET TIME ZONE interval
    | SET TIME ZONE timezone
    | SET TIME ZONE .*?
    | SET (VARIABLE | VAR) assignmentList
    | SET (VARIABLE | VAR) LEFT_PAREN multipartIdentifierList RIGHT_PAREN EQ
          LEFT_PAREN query RIGHT_PAREN
    | SET configKey EQ configValue
    | SET configKey (EQ .*?)?
    | SET .*? EQ configValue
    | SET .*?
    | RESET configKey
    | RESET .*?
    | CREATE INDEX (IF NOT EXISTS)? identifier ON TABLE?
        tableIdentifierReference (USING indexType=identifier)?
        LEFT_PAREN multipartIdentifierPropertyList RIGHT_PAREN
        (OPTIONS options=propertyList)?
    | DROP INDEX (IF EXISTS)? identifier ON TABLE? tableIdentifierReference
    | unsupportedHiveNativeCommands .*?
    ;

timezone
    : stringLit
    | LOCAL
    ;

configKey
    : quotedIdentifier
    ;

configValue
    : backQuotedIdentifier
    ;

unsupportedHiveNativeCommands
    : kw1=CREATE kw2=ROLE
    | kw1=DROP kw2=ROLE
    | kw1=GRANT kw2=ROLE?
    | kw1=REVOKE kw2=ROLE?
    | kw1=SHOW kw2=GRANT
    | kw1=SHOW kw2=ROLE kw3=GRANT?
    | kw1=SHOW kw2=PRINCIPALS
    | kw1=SHOW kw2=ROLES
    | kw1=SHOW kw2=CURRENT kw3=ROLES
    | kw1=EXPORT kw2=TABLE
    | kw1=IMPORT kw2=TABLE
    | kw1=SHOW kw2=COMPACTIONS
    | kw1=SHOW kw2=CREATE kw3=TABLE
    | kw1=SHOW kw2=TRANSACTIONS
    | kw1=SHOW kw2=INDEXES
    | kw1=SHOW kw2=LOCKS
    | kw1=CREATE kw2=INDEX
    | kw1=DROP kw2=INDEX
    | kw1=ALTER kw2=INDEX
    | kw1=LOCK kw2=TABLE
    | kw1=LOCK kw2=DATABASE
    | kw1=UNLOCK kw2=TABLE
    | kw1=UNLOCK kw2=DATABASE
    | kw1=CREATE kw2=TEMPORARY kw3=MACRO
    | kw1=DROP kw2=TEMPORARY kw3=MACRO
    | kw1=ALTER kw2=TABLE tableIdentifier kw3=NOT kw4=CLUSTERED
    | kw1=ALTER kw2=TABLE tableIdentifier kw3=CLUSTERED kw4=BY
    | kw1=ALTER kw2=TABLE tableIdentifier kw3=NOT kw4=SORTED
    | kw1=ALTER kw2=TABLE tableIdentifier kw3=SKEWED kw4=BY
    | kw1=ALTER kw2=TABLE tableIdentifier kw3=NOT kw4=SKEWED
    | kw1=ALTER kw2=TABLE tableIdentifier kw3=NOT kw4=STORED kw5=AS kw6=DIRECTORIES
    | kw1=ALTER kw2=TABLE tableIdentifier kw3=SET kw4=SKEWED kw5=LOCATION
    | kw1=ALTER kw2=TABLE tableIdentifier kw3=EXCHANGE kw4=PARTITION
    | kw1=ALTER kw2=TABLE tableIdentifier kw3=ARCHIVE kw4=PARTITION
    | kw1=ALTER kw2=TABLE tableIdentifier kw3=UNARCHIVE kw4=PARTITION
    | kw1=ALTER kw2=TABLE tableIdentifier kw3=TOUCH
    | kw1=ALTER kw2=TABLE tableIdentifier partitionSpec? kw3=COMPACT
    | kw1=ALTER kw2=TABLE tableIdentifier partitionSpec? kw3=CONCATENATE
    | kw1=ALTER kw2=TABLE tableIdentifier partitionSpec? kw3=SET kw4=FILEFORMAT
    | kw1=ALTER kw2=TABLE tableIdentifier partitionSpec? kw3=REPLACE kw4=COLUMNS
    | kw1=START kw2=TRANSACTION
    | kw1=COMMIT
    | kw1=ROLLBACK
    | kw1=DFS
    ;

createTableHeader
    : CREATE TEMPORARY? EXTERNAL? TABLE (IF NOT EXISTS)? tableIdentifierReference
    ;

replaceTableHeader
    : (CREATE OR)? REPLACE TABLE tableIdentifierReference
    ;

bucketSpec
    : CLUSTERED BY identifierList
      (SORTED BY orderedIdentifierList)?
      INTO INTEGER_VALUE BUCKETS
    ;

skewSpec
    : SKEWED BY identifierList
      ON (constantList | nestedConstantList)
      (STORED AS DIRECTORIES)?
    ;

locationSpec
    : LOCATION stringLit
    ;

commentSpec
    : COMMENT stringLit
    ;

query
    : ctes? queryTerm queryOrganization
    ;

insertInto
    : INSERT OVERWRITE TABLE? tableIdentifierReference (partitionSpec (IF NOT EXISTS)?)?  ((BY NAME) | identifierList)?
    | INSERT INTO TABLE? tableIdentifierReference partitionSpec? (IF NOT EXISTS)? ((BY NAME) | identifierList)?
    | INSERT INTO TABLE? tableIdentifierReference REPLACE whereClause
    | INSERT OVERWRITE LOCAL? DIRECTORY path=stringLit rowFormat? createFileFormat?
    | INSERT OVERWRITE LOCAL? DIRECTORY (path=stringLit)? tableProvider (OPTIONS options=propertyList)?
    ;

partitionSpecLocation
    : partitionSpec locationSpec?
    ;

partitionSpec
    : PARTITION LEFT_PAREN partitionVal (COMMA partitionVal)* RIGHT_PAREN
    ;

partitionVal
    : identifier (EQ constant)?
    | identifier EQ DEFAULT
    ;

namespace
    : NAMESPACE
    | DATABASE
    | SCHEMA
    ;

namespaces
    : NAMESPACES
    | DATABASES
    | SCHEMAS
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
    : WITH namedQuery (COMMA namedQuery)*
    ;

namedQuery
    : name=errorCapturingIdentifier (columnAliases=identifierList)? AS? LEFT_PAREN query RIGHT_PAREN
    ;

tableProvider
    : USING multipartIdentifier
    ;

createTableClauses
    :((OPTIONS options=expressionPropertyList) |
     (PARTITIONED BY partitioning=partitionFieldList) |
     skewSpec |
     bucketSpec |
     rowFormat |
     createFileFormat |
     locationSpec |
     commentSpec |
     (TBLPROPERTIES tableProps=propertyList))*
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
    : STORED AS fileFormat
    | STORED BY storageHandler
    ;

fileFormat
    : INPUTFORMAT inFmt=stringLit OUTPUTFORMAT outFmt=stringLit
    | identifier
    ;

storageHandler
    : stringLit (WITH SERDEPROPERTIES propertyList)?
    ;

resource
    : identifier stringLit
    ;

dmlStatementNoWith
    : insertInto query
    | fromClause multiInsertQueryBody+
    | DELETE FROM identifierReference tableAlias whereClause?
    | UPDATE identifierReference tableAlias setClause whereClause?
    | MERGE INTO target=identifierReference targetAlias=tableAlias
        USING (source=identifierReference |
          LEFT_PAREN sourceQuery=query RIGHT_PAREN) sourceAlias=tableAlias
        ON mergeCondition=booleanExpression
        matchedClause*
        notMatchedClause*
        notMatchedBySourceClause*
    ;

identifierReference
    : IDENTIFIER_KW LEFT_PAREN expression RIGHT_PAREN
    | multipartIdentifier
    ;

queryOrganization
    : (ORDER BY order+=sortItem (COMMA order+=sortItem)*)?
      (CLUSTER BY clusterBy+=expression (COMMA clusterBy+=expression)*)?
      (DISTRIBUTE BY distributeBy+=expression (COMMA distributeBy+=expression)*)?
      (SORT BY sort+=sortItem (COMMA sort+=sortItem)*)?
      windowClause?
      (LIMIT (ALL | limit=expression))?
      (OFFSET offset=expression)?
    ;

multiInsertQueryBody
    : insertInto fromStatementBody
    ;

queryTerm
    : queryPrimary
    | left=queryTerm {this.legacy_setops_precedence_enabled}?
        operator=(INTERSECT | UNION | EXCEPT | SETMINUS) setQuantifier? right=queryTerm
    | left=queryTerm {!this.legacy_setops_precedence_enabled}?
        operator=INTERSECT setQuantifier? right=queryTerm
    | left=queryTerm {!this.legacy_setops_precedence_enabled}?
        operator=(UNION | EXCEPT | SETMINUS) setQuantifier? right=queryTerm
    ;

queryPrimary
    : querySpecification
    | fromStatement
    | TABLE tableIdentifierReference
    | inlineTable
    | LEFT_PAREN query RIGHT_PAREN
    ;

sortItem
    : expression ordering=(ASC | DESC)? (NULLS nullOrder=(LAST | FIRST))?
    ;

fromStatement
    : fromClause fromStatementBody+
    ;

fromStatementBody
    : transformClause
      whereClause?
      queryOrganization
    | selectClause
      lateralView*
      whereClause?
      aggregationClause?
      havingClause?
      windowClause?
      queryOrganization
    ;

querySpecification
    : transformClause
      fromClause?
      lateralView*
      whereClause?
      aggregationClause?
      havingClause?
      windowClause?
    | selectClause
      fromClause?
      lateralView*
      whereClause?
      aggregationClause?
      havingClause?
      windowClause?
    ;

transformClause
    : (SELECT kind=TRANSFORM LEFT_PAREN setQuantifier? expressionSeq RIGHT_PAREN
            | kind=MAP setQuantifier? expressionSeq
            | kind=REDUCE setQuantifier? expressionSeq)
      inRowFormat=rowFormat?
      (RECORDWRITER recordWriter=stringLit)?
      USING script=stringLit
      (AS (identifierSeq | colTypeList | (LEFT_PAREN (identifierSeq | colTypeList) RIGHT_PAREN)))?
      outRowFormat=rowFormat?
      (RECORDREADER recordReader=stringLit)?
    ;

selectClause
    : SELECT (hints+=hint)* setQuantifier? namedExpressionSeq
    ;

setClause
    : SET assignmentList
    ;

matchedClause
    : WHEN MATCHED (AND matchedCond=booleanExpression)? THEN matchedAction
    ;
notMatchedClause
    : WHEN NOT MATCHED (BY TARGET)? (AND notMatchedCond=booleanExpression)? THEN notMatchedAction
    ;

notMatchedBySourceClause
    : WHEN NOT MATCHED BY SOURCE (AND notMatchedBySourceCond=booleanExpression)? THEN notMatchedBySourceAction
    ;

matchedAction
    : DELETE
    | UPDATE SET ASTERISK
    | UPDATE SET assignmentList
    ;

notMatchedAction
    : INSERT ASTERISK
    | INSERT LEFT_PAREN multipartIdentifierList RIGHT_PAREN
        VALUES LEFT_PAREN expression (COMMA expression)* RIGHT_PAREN
    ;

notMatchedBySourceAction
    : DELETE
    | UPDATE SET assignmentList
    ;

assignmentList
    : assignment (COMMA assignment)*
    ;

assignment
    : key=multipartIdentifier EQ value=expression
    ;

whereClause
    : WHERE booleanExpression
    ;

havingClause
    : HAVING booleanExpression
    ;

hint
    : HENT_START hintStatements+=hintStatement (COMMA? hintStatements+=hintStatement)* HENT_END
    ;

hintStatement
    : hintName=identifier
    | hintName=identifier LEFT_PAREN parameters+=primaryExpression (COMMA parameters+=primaryExpression)* RIGHT_PAREN
    ;

fromClause
    : FROM relation (COMMA relation)* lateralView* pivotClause? unpivotClause?
    ;

temporalClause
    : FOR? (SYSTEM_VERSION | VERSION) AS OF version
    | FOR? (SYSTEM_TIME | TIMESTAMP) AS OF timestamp=valueExpression
    ;

aggregationClause
    : GROUP BY groupingExpressionsWithGroupingAnalytics+=groupByClause
        (COMMA groupingExpressionsWithGroupingAnalytics+=groupByClause)*
    | GROUP BY groupingExpressions+=expression (COMMA groupingExpressions+=expression)* (
      WITH kind=ROLLUP
    | WITH kind=CUBE
    | kind=GROUPING SETS LEFT_PAREN groupingSet (COMMA groupingSet)* RIGHT_PAREN)?
    ;

groupByClause
    : groupingAnalytics
    | expression
    ;

groupingAnalytics
    : (ROLLUP | CUBE) LEFT_PAREN groupingSet (COMMA groupingSet)* RIGHT_PAREN
    | GROUPING SETS LEFT_PAREN groupingElement (COMMA groupingElement)* RIGHT_PAREN
    ;

groupingElement
    : groupingAnalytics
    | groupingSet
    ;

groupingSet
    : LEFT_PAREN (expression (COMMA expression)*)? RIGHT_PAREN
    | expression
    ;

pivotClause
    : PIVOT LEFT_PAREN aggregates=namedExpressionSeq FOR pivotColumn IN LEFT_PAREN pivotValues+=pivotValue (COMMA pivotValues+=pivotValue)* RIGHT_PAREN RIGHT_PAREN
    ;

pivotColumn
    : identifiers+=identifier
    | LEFT_PAREN identifiers+=identifier (COMMA identifiers+=identifier)* RIGHT_PAREN
    ;

pivotValue
    : expression (AS? identifier)?
    ;

unpivotClause
    : UNPIVOT nullOperator=unpivotNullClause? LEFT_PAREN
        operator=unpivotOperator
      RIGHT_PAREN (AS? identifier)?
    ;

unpivotNullClause
    : (INCLUDE | EXCLUDE) NULLS
    ;

unpivotOperator
    : (unpivotSingleValueColumnClause | unpivotMultiValueColumnClause)
    ;

unpivotSingleValueColumnClause
    : unpivotValueColumn FOR unpivotNameColumn IN LEFT_PAREN unpivotColumns+=unpivotColumnAndAlias (COMMA unpivotColumns+=unpivotColumnAndAlias)* RIGHT_PAREN
    ;

unpivotMultiValueColumnClause
    : LEFT_PAREN unpivotValueColumns+=unpivotValueColumn (COMMA unpivotValueColumns+=unpivotValueColumn)* RIGHT_PAREN
      FOR unpivotNameColumn
      IN LEFT_PAREN unpivotColumnSets+=unpivotColumnSet (COMMA unpivotColumnSets+=unpivotColumnSet)* RIGHT_PAREN
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
    : AS? identifier
    ;

lateralView
    : LATERAL VIEW (OUTER)? qualifiedName LEFT_PAREN (expression (COMMA expression)*)? RIGHT_PAREN tblName=identifier (AS? colName+=identifier (COMMA colName+=identifier)*)?
    ;

setQuantifier
    : DISTINCT
    | ALL
    ;

relation
    : LATERAL? relationPrimary relationExtension*
    ;

relationExtension
    : joinRelation
    | pivotClause
    | unpivotClause
    ;

joinRelation
    : (joinType) JOIN LATERAL? right=relationPrimary joinCriteria?
    | NATURAL joinType JOIN LATERAL? right=relationPrimary
    ;

joinType
    : INNER?
    | CROSS
    | LEFT OUTER?
    | LEFT? SEMI
    | RIGHT OUTER?
    | FULL OUTER?
    | LEFT? ANTI
    ;

joinCriteria
    : ON booleanExpression
    | USING identifierList
    ;

sample
    : TABLESAMPLE LEFT_PAREN sampleMethod? RIGHT_PAREN (REPEATABLE LEFT_PAREN seed=INTEGER_VALUE RIGHT_PAREN)?
    ;

sampleMethod
    : negativeSign=MINUS? percentage=(INTEGER_VALUE | DECIMAL_VALUE) PERCENTLIT
    | expression ROWS
    | sampleType=BUCKET numerator=INTEGER_VALUE OUT OF denominator=INTEGER_VALUE
        (ON (identifier | qualifiedName LEFT_PAREN RIGHT_PAREN))?
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
    : ident=errorCapturingIdentifier ordering=(ASC | DESC)?
    ;

identifierCommentList
    : LEFT_PAREN identifierComment (COMMA identifierComment)* RIGHT_PAREN
    ;

identifierComment
    : identifier commentSpec?
    ;

relationPrimary
    : identifierReference temporalClause?
      sample? tableAlias
    | LEFT_PAREN query RIGHT_PAREN sample? tableAlias
    | LEFT_PAREN relation RIGHT_PAREN sample? tableAlias
    | inlineTable
    | functionTable
    ;

inlineTable
    : VALUES expression (COMMA expression)* tableAlias
    ;

functionTableSubqueryArgument
    : TABLE tableIdentifierReference tableArgumentPartitioning?
    | TABLE LEFT_PAREN tableIdentifierReference RIGHT_PAREN tableArgumentPartitioning?
    | TABLE LEFT_PAREN query RIGHT_PAREN tableArgumentPartitioning?
    ;

tableArgumentPartitioning
    : ((WITH SINGLE PARTITION)
        | ((PARTITION | DISTRIBUTE) BY
            (((LEFT_PAREN partition+=expression (COMMA partition+=expression)* RIGHT_PAREN))
            | partition+=expression)))
      ((ORDER | SORT) BY
        (((LEFT_PAREN sortItem (COMMA sortItem)* RIGHT_PAREN)
        | sortItem)))?
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
    : funcName=functionName LEFT_PAREN
      (functionTableArgument (COMMA functionTableArgument)*)?
      RIGHT_PAREN tableAlias
    ;

tableAlias
    : (AS? strictIdentifier identifierList?)?
    ;

rowFormat
    : ROW FORMAT SERDE name=stringLit (WITH SERDEPROPERTIES props=propertyList)?
    | ROW FORMAT DELIMITED
      (FIELDS TERMINATED BY fieldsTerminatedBy=stringLit (ESCAPED BY escapedBy=stringLit)?)?
      (COLLECTION ITEMS TERMINATED BY collectionItemsTerminatedBy=stringLit)?
      (MAP KEYS TERMINATED BY keysTerminatedBy=stringLit)?
      (LINES TERMINATED BY linesSeparatedBy=stringLit)?
      (NULL DEFINED AS nullDefinedAs=stringLit)?
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
    : multipartIdentifier (OPTIONS options=propertyList)?
    ;

tableIdentifier
    : (db=errorCapturingIdentifier DOT)? table=errorCapturingIdentifier
    ;

functionIdentifier
    : (db=errorCapturingIdentifier DOT)? function=errorCapturingIdentifier
    ;

namedExpression
    : expression (AS? (name=errorCapturingIdentifier | identifierList))?
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
    | transformName=identifier
      LEFT_PAREN transformArgument (COMMA transformArgument)* RIGHT_PAREN
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
    : NOT booleanExpression
    | EXISTS LEFT_PAREN query RIGHT_PAREN
    | valueExpression predicate?
    | left=booleanExpression operator=AND right=booleanExpression
    | left=booleanExpression operator=OR right=booleanExpression
    ;

predicate
    : NOT? kind=BETWEEN lower=valueExpression AND upper=valueExpression
    | NOT? kind=IN LEFT_PAREN expression (COMMA expression)* RIGHT_PAREN
    | NOT? kind=IN LEFT_PAREN query RIGHT_PAREN
    | NOT? kind=RLIKE pattern=valueExpression
    | NOT? kind=(LIKE | ILIKE) quantifier=(ANY | SOME | ALL) (LEFT_PAREN RIGHT_PAREN | LEFT_PAREN expression (COMMA expression)* RIGHT_PAREN)
    | NOT? kind=(LIKE | ILIKE) pattern=valueExpression (ESCAPE escapeChar=stringLit)?
    | IS NOT? kind=NULL
    | IS NOT? kind=(TRUE | FALSE | UNKNOWN)
    | IS NOT? kind=DISTINCT FROM right=valueExpression
    ;

valueExpression
    : primaryExpression
    | operator=(MINUS | PLUS | TILDE) valueExpression
    | left=valueExpression operator=(ASTERISK | SLASH | PERCENT | DIV) right=valueExpression
    | left=valueExpression operator=(PLUS | MINUS | CONCAT_PIPE) right=valueExpression
    | left=valueExpression operator=AMPERSAND right=valueExpression
    | left=valueExpression operator=HAT right=valueExpression
    | left=valueExpression operator=PIPE right=valueExpression
    | left=valueExpression comparisonOperator right=valueExpression
    ;

datetimeUnit
    : YEAR | QUARTER | MONTH
    | WEEK | DAY | DAYOFYEAR
    | HOUR | MINUTE | SECOND | MILLISECOND | MICROSECOND
    ;

primaryExpression
    : name=(CURRENT_DATE | CURRENT_TIMESTAMP | CURRENT_USER | USER | SESSION_USER)
    | name=(TIMESTAMPADD | DATEADD | DATE_ADD) LEFT_PAREN (unit=datetimeUnit | invalidUnit=stringLit) COMMA unitsAmount=valueExpression COMMA timestamp=valueExpression RIGHT_PAREN
    | name=(TIMESTAMPDIFF | DATEDIFF | DATE_DIFF | TIMEDIFF) LEFT_PAREN (unit=datetimeUnit | invalidUnit=stringLit) COMMA startTimestamp=valueExpression COMMA endTimestamp=valueExpression RIGHT_PAREN
    | CASE whenClause+ (ELSE elseExpression=expression)? END
    | CASE expression whenClause+ (ELSE elseExpression=expression)? END
    | name=(CAST | TRY_CAST) LEFT_PAREN expression AS dataType RIGHT_PAREN
    | STRUCT LEFT_PAREN (namedExpression (COMMA namedExpression)*)? RIGHT_PAREN
    | FIRST LEFT_PAREN expression (IGNORE NULLS)? RIGHT_PAREN
    | ANY_VALUE LEFT_PAREN expression (IGNORE NULLS)? RIGHT_PAREN
    | LAST LEFT_PAREN expression (IGNORE NULLS)? RIGHT_PAREN
    | POSITION LEFT_PAREN substr=valueExpression IN str=valueExpression RIGHT_PAREN
    | constant
    | ASTERISK
    | qualifiedName DOT ASTERISK
    | LEFT_PAREN namedExpression (COMMA namedExpression)+ RIGHT_PAREN
    | LEFT_PAREN query RIGHT_PAREN
    | IDENTIFIER_KW LEFT_PAREN expression RIGHT_PAREN
    | functionName LEFT_PAREN (setQuantifier? functionArgument
       (COMMA functionArgument)*)? RIGHT_PAREN
       (FILTER LEFT_PAREN WHERE where=booleanExpression RIGHT_PAREN)?
       (nullsOption=(IGNORE | RESPECT) NULLS)? ( OVER windowSpec)?
    | identifier ARROW expression
    | LEFT_PAREN identifier (COMMA identifier)+ RIGHT_PAREN ARROW expression
    | value=primaryExpression LEFT_BRACKET index=valueExpression RIGHT_BRACKET
    | identifier
    | base=primaryExpression DOT fieldName=identifier
    | LEFT_PAREN expression RIGHT_PAREN
    | EXTRACT LEFT_PAREN field=identifier FROM source=valueExpression RIGHT_PAREN
    | (SUBSTR | SUBSTRING) LEFT_PAREN str=valueExpression (FROM | COMMA) pos=valueExpression
      ((FOR | COMMA) len=valueExpression)? RIGHT_PAREN
    | TRIM LEFT_PAREN trimOption=(BOTH | LEADING | TRAILING)? (trimStr=valueExpression)?
       FROM srcStr=valueExpression RIGHT_PAREN
    | OVERLAY LEFT_PAREN input=valueExpression PLACING replace=valueExpression
      FROM position=valueExpression (FOR length=valueExpression)? RIGHT_PAREN
    | name=(PERCENTILE_CONT | PERCENTILE_DISC) LEFT_PAREN percentage=valueExpression RIGHT_PAREN
        WITHIN GROUP LEFT_PAREN ORDER BY sortItem RIGHT_PAREN
        (FILTER LEFT_PAREN WHERE where=booleanExpression RIGHT_PAREN)? ( OVER windowSpec)?
    ;

literalType
    : DATE
    | TIMESTAMP | TIMESTAMP_LTZ | TIMESTAMP_NTZ
    | INTERVAL
    | BINARY_HEX
    | unsupportedType=identifier
    ;

constant
    : NULL
    | QUESTION
    | COLON identifier
    | interval
    | literalType stringLit
    | number
    | booleanValue
    | stringLit+
    ;

comparisonOperator
    : EQ | NEQ | NEQJ | LT | LTE | GT | GTE | NSEQ
    ;

arithmeticOperator
    : PLUS | MINUS | ASTERISK | SLASH | PERCENT | DIV | TILDE | AMPERSAND | PIPE | CONCAT_PIPE | HAT
    ;

predicateOperator
    : OR | AND | IN | NOT
    ;

booleanValue
    : TRUE | FALSE
    ;

interval
    : INTERVAL (errorCapturingMultiUnitsInterval | errorCapturingUnitToUnitInterval)
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
    : value=intervalValue unitInUnitToUnit TO unitInUnitToUnit
    ;

intervalValue
    : (PLUS | MINUS)?
      (INTEGER_VALUE | DECIMAL_VALUE | stringLit)
    ;

unitInMultiUnits
    : NANOSECOND | NANOSECONDS | MICROSECOND | MICROSECONDS | MILLISECOND | MILLISECONDS
    | SECOND | SECONDS | MINUTE | MINUTES | HOUR | HOURS | DAY | DAYS | WEEK | WEEKS
    | MONTH | MONTHS | YEAR | YEARS
    ;

unitInUnitToUnit
    : SECOND | MINUTE | HOUR | DAY | MONTH | YEAR
    ;

colPosition
    : position=FIRST | position=AFTER afterCol=errorCapturingIdentifier
    ;

type
    : BOOLEAN
    | TINYINT | BYTE
    | SMALLINT | SHORT
    | INT | INTEGER
    | BIGINT | LONG
    | FLOAT | REAL
    | DOUBLE
    | DATE
    | TIMESTAMP | TIMESTAMP_NTZ | TIMESTAMP_LTZ
    | STRING
    | CHARACTER | CHAR
    | VARCHAR
    | BINARY
    | DECIMAL | DEC | NUMERIC
    | VOID
    | INTERVAL
    | ARRAY | STRUCT | MAP
    | unsupportedType=identifier
    ;

dataType
    : complex=ARRAY LT dataType GT
    | complex=MAP LT dataType COMMA dataType GT
    | complex=STRUCT (LT complexColTypeList? GT | NEQ)
    | INTERVAL (YEAR | MONTH) (TO MONTH)?
    | INTERVAL (DAY | HOUR | MINUTE | SECOND)
      (TO (HOUR | MINUTE | SECOND))?
    | type (LEFT_PAREN INTEGER_VALUE
      (COMMA INTEGER_VALUE)* RIGHT_PAREN)?
    ;

qualifiedColTypeWithPositionList
    : qualifiedColTypeWithPosition (COMMA qualifiedColTypeWithPosition)*
    ;

qualifiedColTypeWithPosition
    : name=multipartIdentifier dataType colDefinitionDescriptorWithPosition*
    ;

colDefinitionDescriptorWithPosition
    : NOT NULL
    | defaultExpression
    | commentSpec
    | colPosition
    ;

defaultExpression
    : DEFAULT expression
    ;

variableDefaultExpression
    : (DEFAULT | EQ) expression
    ;

colTypeList
    : colType (COMMA colType)*
    ;

colType
    : colName=errorCapturingIdentifier dataType (NOT NULL)? commentSpec?
    ;

createOrReplaceTableColTypeList
    : createOrReplaceTableColType (COMMA createOrReplaceTableColType)*
    ;

createOrReplaceTableColType
    : colName=errorCapturingIdentifier dataType colDefinitionOption*
    ;

colDefinitionOption
    : NOT NULL
    | defaultExpression
    | generationExpression
    | commentSpec
    ;

generationExpression
    : GENERATED ALWAYS AS LEFT_PAREN expression RIGHT_PAREN
    ;

complexColTypeList
    : complexColType (COMMA complexColType)*
    ;

complexColType
    : identifier COLON? dataType (NOT NULL)? commentSpec?
    ;

whenClause
    : WHEN condition=expression THEN result=expression
    ;

windowClause
    : WINDOW namedWindow (COMMA namedWindow)*
    ;

namedWindow
    : name=errorCapturingIdentifier AS windowSpec
    ;

windowSpec
    : name=errorCapturingIdentifier
    | LEFT_PAREN name=errorCapturingIdentifier RIGHT_PAREN
    | LEFT_PAREN
      ( CLUSTER BY partition+=expression (COMMA partition+=expression)*
      | ((PARTITION | DISTRIBUTE) BY partition+=expression (COMMA partition+=expression)*)?
        ((ORDER | SORT) BY sortItem (COMMA sortItem)*)?)
      windowFrame?
      RIGHT_PAREN
    ;

windowFrame
    : frameType=RANGE start=frameBound
    | frameType=ROWS start=frameBound
    | frameType=RANGE BETWEEN start=frameBound AND end=frameBound
    | frameType=ROWS BETWEEN start=frameBound AND end=frameBound
    ;

frameBound
    : UNBOUNDED boundType=(PRECEDING | FOLLOWING)
    | boundType=CURRENT ROW
    | expression boundType=(PRECEDING | FOLLOWING)
    ;

qualifiedNameList
    : qualifiedName (COMMA qualifiedName)*
    ;

functionName
    : IDENTIFIER_KW LEFT_PAREN expression RIGHT_PAREN
    | qualifiedName
    | FILTER
    | LEFT
    | RIGHT
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
    | {!this.SQL_standard_keyword_behavior}? strictNonReserved
    ;

strictIdentifier
    : IDENTIFIER
    | quotedIdentifier
    | {this.SQL_standard_keyword_behavior}? ansiNonReserved
    | {!this.SQL_standard_keyword_behavior}? nonReserved
    ;

quotedIdentifier
    : BACKQUOTED_IDENTIFIER
    | {this.double_quoted_identifiers}? DOUBLEQUOTED_STRING
    ;

backQuotedIdentifier
    : BACKQUOTED_IDENTIFIER
    ;

number
    : {!this.legacy_exponent_literal_as_decimal_enabled}? MINUS? EXPONENT_VALUE
    | {!this.legacy_exponent_literal_as_decimal_enabled}? MINUS? DECIMAL_VALUE
    | {this.legacy_exponent_literal_as_decimal_enabled}? MINUS? (EXPONENT_VALUE | DECIMAL_VALUE)
    | MINUS? INTEGER_VALUE
    | MINUS? BIGINT_LITERAL
    | MINUS? SMALLINT_LITERAL
    | MINUS? TINYINT_LITERAL
    | MINUS? DOUBLE_LITERAL
    | MINUS? FLOAT_LITERAL
    | MINUS? BIGDECIMAL_LITERAL
    ;

alterColumnAction
    : TYPE dataType
    | commentSpec
    | colPosition
    | setOrDrop=(SET | DROP) NOT NULL
    | SET defaultExpression
    | dropDefault=DROP DEFAULT
    ;

stringLit
    : STRING_LITERAL
    | {!this.double_quoted_identifiers}? DOUBLEQUOTED_STRING
    ;

comment
    : stringLit
    | NULL
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
    : ADD
    | AFTER
    | ALTER
    | ALWAYS
    | ANALYZE
    | ANTI
    | ANY_VALUE
    | ARCHIVE
    | ARRAY
    | ASC
    | AT
    | BETWEEN
    | BIGINT
    | BINARY
    | BINARY_HEX
    | BOOLEAN
    | BUCKET
    | BUCKETS
    | BY
    | BYTE
    | CACHE
    | CASCADE
    | CATALOG
    | CATALOGS
    | CHANGE
    | CHAR
    | CHARACTER
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
    | COST
    | CUBE
    | CURRENT
    | DATA
    | DATABASE
    | DATABASES
    | DATE
    | DATEADD
    | DATE_ADD
    | DATEDIFF
    | DATE_DIFF
    | DAY
    | DAYS
    | DAYOFYEAR
    | DBPROPERTIES
    | DEC
    | DECIMAL
    | DECLARE
    | DEFAULT
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
    | EXCLUDE
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
    | HOUR
    | HOURS
    | IDENTIFIER_KW
    | IF
    | IGNORE
    | IMPORT
    | INCLUDE
    | INDEX
    | INDEXES
    | INPATH
    | INPUTFORMAT
    | INSERT
    | INT
    | INTEGER
    | INTERVAL
    | ITEMS
    | KEYS
    | LAST
    | LAZY
    | LIKE
    | ILIKE
    | LIMIT
    | LINES
    | LIST
    | LOAD
    | LOCAL
    | LOCATION
    | LOCK
    | LOCKS
    | LOGICAL
    | LONG
    | MACRO
    | MAP
    | MATCHED
    | MERGE
    | MICROSECOND
    | MICROSECONDS
    | MILLISECOND
    | MILLISECONDS
    | MINUTE
    | MINUTES
    | MONTH
    | MONTHS
    | MSCK
    | NAME
    | NAMESPACE
    | NAMESPACES
    | NANOSECOND
    | NANOSECONDS
    | NO
    | NULLS
    | NUMERIC
    | OF
    | OPTION
    | OPTIONS
    | OUT
    | OUTPUTFORMAT
    | OVER
    | OVERLAY
    | OVERWRITE
    | PARTITION
    | PARTITIONED
    | PARTITIONS
    | PERCENTLIT
    | PIVOT
    | PLACING
    | POSITION
    | PRECEDING
    | PRINCIPALS
    | PROPERTIES
    | PURGE
    | QUARTER
    | QUERY
    | RANGE
    | REAL
    | RECORDREADER
    | RECORDWRITER
    | RECOVER
    | REDUCE
    | REFRESH
    | RENAME
    | REPAIR
    | REPEATABLE
    | REPLACE
    | RESET
    | RESPECT
    | RESTRICT
    | REVOKE
    | RLIKE
    | ROLE
    | ROLES
    | ROLLBACK
    | ROLLUP
    | ROW
    | ROWS
    | SCHEMA
    | SCHEMAS
    | SECOND
    | SECONDS
    | SEMI
    | SEPARATED
    | SERDE
    | SERDEPROPERTIES
    | SET
    | SETMINUS
    | SETS
    | SHORT
    | SHOW
    | SINGLE
    | SKEWED
    | SMALLINT
    | SORT
    | SORTED
    | SOURCE
    | START
    | STATISTICS
    | STORED
    | STRATIFY
    | STRING
    | STRUCT
    | SUBSTR
    | SUBSTRING
    | SYNC
    | SYSTEM_TIME
    | SYSTEM_VERSION
    | TABLES
    | TABLESAMPLE
    | TARGET
    | TBLPROPERTIES
    | TEMPORARY
    | TERMINATED
    | TIMEDIFF
    | TIMESTAMP
    | TIMESTAMP_LTZ
    | TIMESTAMP_NTZ
    | TIMESTAMPADD
    | TIMESTAMPDIFF
    | TINYINT
    | TOUCH
    | TRANSACTION
    | TRANSACTIONS
    | TRANSFORM
    | TRIM
    | TRUE
    | TRUNCATE
    | TRY_CAST
    | TYPE
    | UNARCHIVE
    | UNBOUNDED
    | UNCACHE
    | UNLOCK
    | UNPIVOT
    | UNSET
    | UPDATE
    | USE
    | VALUES
    | VARCHAR
    | VAR
    | VARIABLE
    | VERSION
    | VIEW
    | VIEWS
    | VOID
    | WEEK
    | WEEKS
    | WINDOW
    | YEAR
    | YEARS
    | ZONE
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
    : ANTI
    | CROSS
    | EXCEPT
    | FULL
    | INNER
    | INTERSECT
    | JOIN
    | LATERAL
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
//--DEFAULT-NON-RESERVED-START
    : ADD
    | AFTER
    | ALL
    | ALTER
    | ALWAYS
    | ANALYZE
    | AND
    | ANY
    | ANY_VALUE
    | ARCHIVE
    | ARRAY
    | AS
    | ASC
    | AT
    | AUTHORIZATION
    | BETWEEN
    | BIGINT
    | BINARY
    | BINARY_HEX
    | BOOLEAN
    | BOTH
    | BUCKET
    | BUCKETS
    | BY
    | BYTE
    | CACHE
    | CASCADE
    | CASE
    | CAST
    | CATALOG
    | CATALOGS
    | CHANGE
    | CHAR
    | CHARACTER
    | CHECK
    | CLEAR
    | CLUSTER
    | CLUSTERED
    | CODEGEN
    | COLLATE
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
    | COST
    | CREATE
    | CUBE
    | CURRENT
    | CURRENT_DATE
    | CURRENT_TIME
    | CURRENT_TIMESTAMP
    | CURRENT_USER
    | DATA
    | DATABASE
    | DATABASES
    | DATE
    | DATEADD
    | DATE_ADD
    | DATEDIFF
    | DATE_DIFF
    | DAY
    | DAYS
    | DAYOFYEAR
    | DBPROPERTIES
    | DEC
    | DECIMAL
    | DECLARE
    | DEFAULT
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
    | ESCAPE
    | ESCAPED
    | EXCHANGE
    | EXCLUDE
    | EXISTS
    | EXPLAIN
    | EXPORT
    | EXTENDED
    | EXTERNAL
    | EXTRACT
    | FALSE
    | FETCH
    | FILTER
    | FIELDS
    | FILEFORMAT
    | FIRST
    | FLOAT
    | FOLLOWING
    | FOR
    | FOREIGN
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
    | HOUR
    | HOURS
    | IDENTIFIER_KW
    | IF
    | IGNORE
    | IMPORT
    | IN
    | INCLUDE
    | INDEX
    | INDEXES
    | INPATH
    | INPUTFORMAT
    | INSERT
    | INT
    | INTEGER
    | INTERVAL
    | INTO
    | IS
    | ITEMS
    | KEYS
    | LAST
    | LAZY
    | LEADING
    | LIKE
    | LONG
    | ILIKE
    | LIMIT
    | LINES
    | LIST
    | LOAD
    | LOCAL
    | LOCATION
    | LOCK
    | LOCKS
    | LOGICAL
    | LONG
    | MACRO
    | MAP
    | MATCHED
    | MERGE
    | MICROSECOND
    | MICROSECONDS
    | MILLISECOND
    | MILLISECONDS
    | MINUTE
    | MINUTES
    | MONTH
    | MONTHS
    | MSCK
    | NAME
    | NAMESPACE
    | NAMESPACES
    | NANOSECOND
    | NANOSECONDS
    | NO
    | NOT
    | NULL
    | NULLS
    | NUMERIC
    | OF
    | OFFSET
    | ONLY
    | OPTION
    | OPTIONS
    | OR
    | ORDER
    | OUT
    | OUTER
    | OUTPUTFORMAT
    | OVER
    | OVERLAPS
    | OVERLAY
    | OVERWRITE
    | PARTITION
    | PARTITIONED
    | PARTITIONS
    | PERCENTILE_CONT
    | PERCENTILE_DISC
    | PERCENTLIT
    | PIVOT
    | PLACING
    | POSITION
    | PRECEDING
    | PRIMARY
    | PRINCIPALS
    | PROPERTIES
    | PURGE
    | QUARTER
    | QUERY
    | RANGE
    | REAL
    | RECORDREADER
    | RECORDWRITER
    | RECOVER
    | REDUCE
    | REFERENCES
    | REFRESH
    | RENAME
    | REPAIR
    | REPEATABLE
    | REPLACE
    | RESET
    | RESPECT
    | RESTRICT
    | REVOKE
    | RLIKE
    | ROLE
    | ROLES
    | ROLLBACK
    | ROLLUP
    | ROW
    | ROWS
    | SCHEMA
    | SCHEMAS
    | SECOND
    | SECONDS
    | SELECT
    | SEPARATED
    | SERDE
    | SERDEPROPERTIES
    | SESSION_USER
    | SET
    | SETS
    | SHORT
    | SHOW
    | SINGLE
    | SKEWED
    | SMALLINT
    | SOME
    | SORT
    | SORTED
    | SOURCE
    | START
    | STATISTICS
    | STORED
    | STRATIFY
    | STRING
    | STRUCT
    | SUBSTR
    | SUBSTRING
    | SYNC
    | SYSTEM_TIME
    | SYSTEM_VERSION
    | TABLE
    | TABLES
    | TABLESAMPLE
    | TARGET
    | TBLPROPERTIES
    | TEMPORARY
    | TERMINATED
    | THEN
    | TIME
    | TIMEDIFF
    | TIMESTAMP
    | TIMESTAMP_LTZ
    | TIMESTAMP_NTZ
    | TIMESTAMPADD
    | TIMESTAMPDIFF
    | TINYINT
    | TO
    | TOUCH
    | TRAILING
    | TRANSACTION
    | TRANSACTIONS
    | TRANSFORM
    | TRIM
    | TRUE
    | TRUNCATE
    | TRY_CAST
    | TYPE
    | UNARCHIVE
    | UNBOUNDED
    | UNCACHE
    | UNIQUE
    | UNKNOWN
    | UNLOCK
    | UNPIVOT
    | UNSET
    | UPDATE
    | USE
    | USER
    | VALUES
    | VARCHAR
    | VAR
    | VARIABLE
    | VERSION
    | VIEW
    | VIEWS
    | VOID
    | WEEK
    | WEEKS
    | WHEN
    | WHERE
    | WINDOW
    | WITH
    | WITHIN
    | YEAR
    | YEARS
    | ZONE
//--DEFAULT-NON-RESERVED-END
    ;
