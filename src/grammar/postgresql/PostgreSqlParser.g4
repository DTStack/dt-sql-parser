/*
 * [The "MIT license"] Copyright (C) 2014 Sam Harwell, Tunnel Vision Laboratories, LLC
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * 1. The above copyright notice and this permission notice shall be included in all copies or
 * substantial portions of the Software. 2. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
 * ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE. 3. Except as contained in this notice, the name of Tunnel Vision
 * Laboratories, LLC. shall not be used in advertising or otherwise to promote the sale, use or
 * other dealings in this Software without prior written authorization from Tunnel Vision
 * Laboratories, LLC.
 */

/**
 * This file is an adaptation of antlr's sql/postgresql/PostgreSQLParser.g4 grammar. Reference:
 * https://github.com/antlr/grammars-v4/blob/master/sql/postgresql/PostgreSQLParser.g4
 */

/**
 * Reference Doc: https://www.postgresql.org/docs/16.1/sql-commands.html
 */

// $antlr-format alignTrailingComments true, columnLimit 150, minEmptyLines 1, maxEmptyLinesToKeep 1, reflowComments false, useTab false
// $antlr-format allowShortRulesOnASingleLine false, allowShortBlocksOnASingleLine true, alignSemicolons hanging, alignColons hanging
// $antlr-format spaceBeforeAssignmentOperators false, keepEmptyLinesAtTheStartOfBlocks true

parser grammar PostgreSqlParser;

options {
    tokenVocab= PostgreSqlLexer;
    caseInsensitive= true;
    superClass=SQLParserBase;
}

@header {
import { SQLParserBase } from '../SQLParserBase';
}

program
    : singleStmt* EOF
    ;

singleStmt
    : stmt SEMI?
    ;

stmt
    : alterEventTrigStmt
    | alterCollationStmt
    | alterDatabaseStmt
    | alterDatabaseSetStmt
    | alterDefaultPrivilegesStmt
    | alterDomainStmt
    | alterEnumStmt
    | alterExtensionStmt
    | alterExtensionContentsStmt
    | alterFdwStmt
    | alterForeignServerStmt
    | alterFunctionStmt
    | alterGroupStmt
    | alterObjectDependsStmt
    | alterObjectSchemaStmt
    | alterOwnerStmt
    | alterOperatorStmt
    | alterTypeStmt
    | alterPolicyStmt
    | alterProcedureStmt
    | alterSeqStmt
    | alterSystemStmt
    | alterTableStmt
    | alterTblSpcStmt
    | alterCompositeTypeStmt
    | alterPublicationStmt
    | alterRoleSetStmt
    | alterRoutineStmt
    | alterRoleStmt
    | alterSubscriptionStmt
    | alterStatsStmt
    | alterSearchConfigurationStmt
    | alterSearchDictionaryStmt
    | alterUserMappingStmt
    | analyzeStmt
    | callStmt
    | checkPointStmt
    | closePortalStmt
    | clusterStmt
    | commentStmt
    | constraintsSetStmt
    | copyStmt
    | createAccessMethodStmt
    | createAsStmt
    | createAssertionStmt
    | createCastStmt
    | createConversionStmt
    | createDomainStmt
    | createExtensionStmt
    | createFdwStmt
    | createForeignServerStmt
    | createForeignTableStmt
    | createFunctionStmt
    | createGroupStmt
    | createMaterializedViewStmt
    | createOperatorClassStmt
    | createOperatorFamilyStmt
    | createPublicationStmt
    | alterOperatorFamilyStmt
    | createPolicyStmt
    | createProceduralLangStmt
    | createSchemaStmt
    | createSeqStmt
    | createStmt
    | createSubscriptionStmt
    | createStatsStmt
    | createTableSpaceStmt
    | createTransformStmt
    | createTrigStmt
    | createEventTrigStmt
    | createRoleStmt
    | createUserStmt
    | createUserMappingStmt
    | createDbStmt
    | dealLocateStmt
    | declareCursorStmt
    | defineStmt
    | deleteStmt
    | discardStmt
    | doStmt
    | dropStmt
    | executeStmt
    | explainStmt
    | fetchStmt
    | grantStmt
    | grantRoleStmt
    | mergeStmt
    | importForeignSchemaStmt
    | indexStmt
    | insertStmt
    | listenStmt
    | refreshMaterializedViewStmt
    | loadStmt
    | lockStmt
    | notifyStmt
    | prepareStmt
    | reassignOwnedStmt
    | reindexStmt
    | removeAggregateStmt
    | removeFuncStmt
    | removeOperatorStmt
    | renameStmt
    | revokeStmt
    | revokeRoleStmt
    | ruleStmt
    | secLabelStmt
    | selectStmt
    | transactionStmt
    | truncateStmt
    | unListenStmt
    | updateStmt
    | vacuumStmt
    | variableResetStmt
    | variableSetStmt
    | variableShowStmt
    | viewStmt
    | MetaCommand EndMetaCommand?
    ;

callStmt
    : KW_CALL funcApplication
    ;

createRoleStmt
    : KW_CREATE KW_ROLE roleSpec KW_WITH? createOperatorRoleElem*
    ;

alterOperatorRoleElem
    : KW_PASSWORD (stringConst | KW_NULL)
    | (KW_ENCRYPTED | KW_UNENCRYPTED) KW_PASSWORD stringConst
    | KW_INHERIT
    | KW_NOINHERIT
    | KW_CREATEUSER
    | KW_NOCREATEUSER
    | KW_CREATEROLE
    | KW_NOCREATEROLE
    | KW_CREATEDB
    | KW_NOCREATEDB
    | KW_SUPERUSER
    | KW_NOSUPERUSER
    | KW_LOGIN
    | KW_NOLOGIN
    | KW_REPLICATION
    | KW_NOREPLICATION
    | KW_BYPASSRLS
    | KW_NOBYPASSRLS
    | KW_CONNECTION KW_LIMIT signedConst
    | KW_VALID KW_UNTIL stringConst
    | KW_IN (KW_ROLE | KW_GROUP) nameList
    | (KW_ROLE | KW_USER) roleList
    | KW_ADMIN nameList
    | identifier
    ;

createOperatorRoleElem
    : alterOperatorRoleElem
    | KW_SYSID Integral
    | (KW_ADMIN | KW_ROLE) roleList
    | KW_IN (KW_ROLE | KW_GROUP) roleList
    ;

createUserStmt
    : KW_CREATE KW_USER roleSpec KW_WITH? createOperatorRoleElem*
    ;

alterRoleStmt
    : KW_ALTER (KW_ROLE | KW_USER) roleSpec KW_WITH? alterOperatorRoleElem*
    ;

alterRoleSetStmt
    : KW_ALTER (KW_ROLE | KW_USER) (KW_ALL | roleSpec) KW_IN KW_DATABASE databaseName setOrResetClause
    ;

alterRoutineStmt
    : KW_ALTER KW_ROUTINE routineName funcArgs? alterRoutineClause
    ;

alterRoutineClause
    : routineAction (routineAction)* KW_RESTRICT?
    | KW_RENAME KW_TO routineNameCreate
    | KW_OWNER KW_TO roleSpec
    | KW_SET KW_SCHEMA schemaNameCreate
    | KW_NO? KW_DEPENDS KW_ON KW_EXTENSION colId
    ;

routineAction
    : KW_IMMUTABLE
    | KW_STABLE
    | KW_VOLATILE
    | KW_NOT? KW_LEAKPROOF
    | (KW_EXTERNAL? KW_SECURITY KW_INVOKER | KW_EXTERNAL? KW_SECURITY KW_DEFINER)
    | KW_PARALLEL (KW_UNSAFE | KW_RESTRICTED | KW_SAFE)
    | KW_COST colLabel
    | KW_ROWS colId
    | KW_SET colId (KW_TO | EQUAL) (colId | KW_DEFAULT)
    | KW_SET colId KW_FROM KW_CURRENT
    | KW_RESET (colId | KW_ALL)
    ;

createGroupStmt
    : KW_CREATE KW_GROUP roleSpec KW_WITH? createOperatorRoleElem*
    ;

alterGroupStmt
    : KW_ALTER KW_GROUP roleSpec (KW_ADD | KW_DROP) KW_USER roleList
    ;

createSchemaStmt
    : KW_CREATE KW_SCHEMA ifNotExists? (
        schemaNameCreate? KW_AUTHORIZATION roleSpec
        | schemaNameCreate
    ) schemaStmt*
    ;

schemaNameCreate
    : anyName
    ;

schemaStmt
    : createStmt
    | indexStmt
    | createSeqStmt
    | createTrigStmt
    | grantStmt
    | viewStmt
    ;

variableSetStmt
    : KW_SET (KW_LOCAL | KW_SESSION)? setRest
    ;

setRest
    : KW_TRANSACTION transactionModeList
    | KW_SESSION KW_CHARACTERISTICS KW_AS KW_TRANSACTION transactionModeList
    | setRestMore
    ;

genericSet
    : (KW_ALL | varName) (KW_TO | EQUAL)? (KW_DEFAULT | varList)?
    ;

setRestMore
    : KW_TIME KW_ZONE zoneValue
    | KW_CATALOG stringConst
    | KW_SCHEMA schemaName
    | KW_NAMES (stringConst | KW_DEFAULT)?
    | KW_ROLE nonReservedWordOrStringConst
    | KW_SESSION KW_AUTHORIZATION nonReservedWordOrStringConst
    | KW_XML KW_OPTION documentOrContent
    | KW_TRANSACTION KW_SNAPSHOT stringConst
    | varName KW_FROM KW_CURRENT
    | genericSet
    ;

varName
    : colId (DOT colId)*
    ;

varList
    : varValue (COMMA varValue)*
    ;

varValue
    : booleanOrString
    | numericOnly
    ;

isoLevel
    : KW_READ (KW_UNCOMMITTED | KW_COMMITTED)
    | KW_REPEATABLE KW_READ
    | KW_SERIALIZABLE
    ;

optBooleanOrStringColumn
    : KW_TRUE
    | KW_FALSE
    | KW_ON
    | columnName
    | typeFuncNameKeyword
    | stringConst
    ;

booleanOrString
    : KW_TRUE
    | KW_FALSE
    | KW_ON
    | nonReservedWordOrStringConst
    ;

zoneValue
    : stringConst
    | KW_DEFAULT
    | identifier
    | KW_INTERVAL stringConst optInterval?
    | KW_INTERVAL optFloat stringConst
    | numericOnly
    | KW_LOCAL
    ;

nonReservedWordOrStringConst
    : nonReservedWord
    | stringConst
    ;

variableResetStmt
    : KW_RESET resetRest
    ;

resetRest
    : KW_TIME KW_ZONE
    | KW_TRANSACTION KW_ISOLATION KW_LEVEL
    | KW_SESSION KW_AUTHORIZATION
    | KW_ALL
    | varName
    ;

setOrResetClause
    : KW_SET setRest
    | variableResetStmt
    ;

functionSetOrResetClause
    : KW_SET setRestMore
    | variableResetStmt
    ;

variableShowStmt
    : KW_SHOW (
        varName
        | KW_TIME KW_ZONE
        | KW_TRANSACTION KW_ISOLATION KW_LEVEL
        | KW_SESSION KW_AUTHORIZATION
        | KW_ALL
    )
    ;

constraintsSetStmt
    : KW_SET KW_CONSTRAINTS (KW_ALL | qualifiedNameList) (KW_DEFERRED | KW_IMMEDIATE)
    ;

checkPointStmt
    : KW_CHECKPOINT
    ;

discardStmt
    : KW_DISCARD (KW_ALL | KW_TEMP | KW_TEMPORARY | KW_PLANS | KW_SEQUENCES)
    ;

alterTableStmt
    : KW_ALTER KW_TABLE ifExists? relationExpr (alterTableCmds | partitionCmd)
    | KW_ALTER KW_TABLE KW_ALL KW_IN optTableSpace (KW_OWNED KW_BY roleList)? KW_SET KW_TABLESPACE tableSpaceName KW_NOWAIT?
    | KW_ALTER KW_TABLE ifExists? tableName indexPartitionCmd partitionBoundSpec
    | KW_ALTER KW_TABLE ifExists? tableName KW_DETACH KW_PARTITION qualifiedName (
        KW_CONCURRENTLY
        | KW_FINALIZE
    )?
    | KW_ALTER KW_INDEX ifExists? qualifiedName (alterTableCmds | indexPartitionCmd)
    | KW_ALTER KW_INDEX KW_ALL KW_IN optTableSpace (KW_OWNED KW_BY roleList)? KW_SET optTableSpace KW_NOWAIT?
    | KW_ALTER KW_SEQUENCE ifExists? qualifiedName alterTableCmds
    | KW_ALTER KW_MATERIALIZED? KW_VIEW ifExists? viewName alterTableCmds
    | KW_ALTER KW_MATERIALIZED KW_VIEW KW_ALL KW_IN optTableSpace (KW_OWNED KW_BY roleList)? KW_SET KW_TABLESPACE tableSpaceName KW_NOWAIT?
    | KW_ALTER KW_FOREIGN KW_TABLE ifExists? relationExpr alterTableCmds
    ;

alterTableCmds
    : alterTableCmd (COMMA alterTableCmd)*
    ;

partitionCmd
    : indexPartitionCmd partitionBoundSpec
    | KW_DETACH KW_PARTITION qualifiedName
    ;

indexPartitionCmd
    : KW_ATTACH KW_PARTITION qualifiedName
    ;

alterTableCmd
    : KW_ADD (KW_CONSTRAINT colId)? constraintElem
    | KW_ALTER KW_CONSTRAINT colId constraintAttributeElem*
    | KW_VALIDATE KW_CONSTRAINT colId
    | KW_DROP KW_CONSTRAINT ifExists? colId optDropBehavior?
    | KW_SET KW_WITHOUT (KW_OIDS | KW_CLUSTER)
    | KW_CLUSTER KW_ON colId
    | KW_SET (KW_LOGGED | KW_UNLOGGED)
    | KW_ENABLE (KW_REPLICA | KW_ALWAYS)? KW_TRIGGER
    | KW_DISABLE KW_TRIGGER (KW_ALL | KW_USER | colId)
    | KW_ENABLE (KW_ALWAYS | KW_REPLICA) KW_RULE colId
    | KW_DISABLE KW_RULE colId
    | KW_NO? KW_INHERIT qualifiedName
    | KW_OF anyName
    | KW_NOT KW_OF
    | KW_OWNER KW_TO roleSpec
    | KW_SET KW_TABLESPACE tableSpaceName
    | KW_REPLICA KW_IDENTITY (KW_NOTHING | KW_FULL | KW_DEFAULT | existingIndex)
    | (KW_ENABLE | KW_DISABLE | (KW_NO? KW_FORCE)) KW_ROW KW_LEVEL KW_SECURITY
    | KW_DROP KW_COLUMN? ifExists? columnName optDropBehavior?
    | KW_ADD KW_COLUMN? ifNotExists? column_def
    | KW_ALTER KW_COLUMN? columnName (alterColumnDefault | alterGenericOptions)
    | KW_ALTER KW_COLUMN? columnName (KW_DROP | KW_SET) KW_NOT KW_NULL
    | KW_ALTER KW_COLUMN? columnName KW_DROP KW_EXPRESSION ifExists?
    | KW_ALTER KW_COLUMN? columnName KW_SET KW_STATISTICS signedConst
    | (KW_ALTER KW_COLUMN? columnName)? (KW_SET | KW_RESET) relOptions
    | KW_ALTER KW_COLUMN? columnName KW_SET KW_STORAGE colId
    | KW_ALTER KW_COLUMN? columnName KW_ADD KW_GENERATED generatedWhen KW_AS KW_IDENTITY (
        OPEN_PAREN seqOptElem+ CLOSE_PAREN
    )?
    | KW_ALTER KW_COLUMN? columnName (
        KW_RESTART (KW_WITH? numericOnly)?
        | KW_SET (seqOptElem | KW_GENERATED generatedWhen)
    )+
    | KW_ALTER KW_COLUMN? columnName KW_DROP KW_IDENTITY ifExists?
    | KW_ALTER KW_COLUMN? columnName (KW_SET KW_DATA)? KW_TYPE typename collateClause? (
        KW_USING expression
    )?
    | alterGenericOptions
    ;

alterColumnDefault
    : KW_SET KW_DEFAULT expression
    | KW_DROP KW_DEFAULT
    ;

optDropBehavior
    : KW_CASCADE
    | KW_RESTRICT
    ;

collateClause
    : KW_COLLATE anyName
    ;

relOptions
    : OPEN_PAREN relOptionElem (COMMA relOptionElem)* CLOSE_PAREN
    ;

optRelOptions
    : KW_WITH relOptions
    ;

relOptionElem
    : colLabel (EQUAL defArg | DOT defElem)?
    ;

partitionBoundSpec
    : KW_FOR KW_VALUES KW_WITH OPEN_PAREN KW_MODULUS numericOnly COMMA KW_REMAINDER numericOnly CLOSE_PAREN
    | KW_FOR KW_VALUES KW_IN executeParamClause
    | KW_FOR KW_VALUES KW_FROM executeParamClause KW_TO executeParamClause
    | KW_DEFAULT
    ;

alterCompositeTypeStmt
    : KW_ALTER KW_TYPE anyName alterTypeCmd (COMMA alterTypeCmd)*
    ;

alterTypeCmd
    : KW_ADD KW_ATTRIBUTE tableFuncElement optDropBehavior?
    | KW_DROP KW_ATTRIBUTE ifExists? colId optDropBehavior?
    | KW_ALTER KW_ATTRIBUTE colId (KW_SET KW_DATA)? KW_TYPE typename collateClause? optDropBehavior?
    ;

closePortalStmt
    : KW_CLOSE (colId | KW_ALL)
    ;

copyStmt
    : KW_COPY KW_BINARY? tableName optColumnList? (KW_FROM | KW_TO) KW_PROGRAM? (
        stringConst
        | KW_STDIN
        | KW_STDOUT
    ) (KW_USING? KW_DELIMITERS stringConst)? KW_WITH? copyOptions whereClause?
    | KW_COPY OPEN_PAREN preParableStmt CLOSE_PAREN KW_TO KW_PROGRAM? (
        stringConst
        | KW_STDIN
        | KW_STDOUT
    ) KW_WITH? copyOptions
    ;

copyOptionsNoparens
    : (
        KW_BINARY
        | KW_FREEZE
        | (KW_NULL | KW_DELIMITER | KW_ESCAPE | KW_QUOTE) KW_AS? stringConst
        | KW_CSV
        | KW_HEADER
        | KW_FORCE KW_QUOTE (columnList | STAR)
        | KW_FORCE KW_NOT? KW_NULL columnList
        | KW_ENCODING stringConst
        | (KW_FORCE_QUOTE | KW_FORCE_NOT_NULL | KW_FORCE_NULL) (
            OPEN_PAREN (columnList | STAR) (COMMA (columnList | STAR))* CLOSE_PAREN
        )?
    )*
    ;

copyOptions
    : copyOptionsNoparens
    | OPEN_PAREN (copyOptionsNoparens | copyGenericOptElem) (
        COMMA (copyOptionsNoparens | copyGenericOptElem)
    )* CLOSE_PAREN
    ;

copyGenericOptElem
    : colLabel (
        booleanOrString
        | numericOnly
        | STAR
        | OPEN_PAREN optBooleanOrStringColumn (COMMA optBooleanOrStringColumn)* CLOSE_PAREN
    )?
    ;

createStmt
    : KW_CREATE optTemp? KW_TABLE ifNotExists? tableNameCreate (
        OPEN_PAREN tableElementList? CLOSE_PAREN optInherit? partitionSpec? tableAccessMethodClause? optWith? onCommitOption? optTableSpace?
        | KW_OF anyName optTypedTableElEmentList? partitionSpec? tableAccessMethodClause? optWith? onCommitOption? optTableSpace?
        | KW_PARTITION KW_OF qualifiedName optTypedTableElEmentList? partitionBoundSpec partitionSpec? tableAccessMethodClause? optWith?
            onCommitOption? optTableSpace?
    ) # columnCreateTable
    ;

optTemp
    : KW_TEMPORARY
    | KW_TEMP
    | (KW_LOCAL | KW_GLOBAL) (KW_TEMPORARY | KW_TEMP)
    | KW_UNLOGGED
    ;

optTypedTableElEmentList
    : OPEN_PAREN typedTableElement (COMMA typedTableElement)* CLOSE_PAREN
    ;

tableElementList
    : tableElement (COMMA tableElement)*
    ;

tableElement
    : (KW_CONSTRAINT colId)? constraintElem
    | column_def
    | KW_LIKE qualifiedName ((KW_INCLUDING | KW_EXCLUDING) tableLikeOption)*
    ;

typedTableElement
    : columnNameCreate (KW_WITH KW_OPTIONS)? colConstraint*
    | (KW_CONSTRAINT colId)? constraintElem
    ;

column_def
    : columnNameCreate colType=typename createGenericOptions? (
        KW_STORAGE (KW_PLAIN | KW_EXTERNAL | KW_EXTENDED | KW_MAIN | KW_DEFAULT | colId)
    )? (KW_COMPRESSION colId)? (collateClause)? (KW_WITH KW_OPTIONS)? colConstraint*
    ;

colConstraint
    : (KW_CONSTRAINT colId)? colConstraintElem (KW_NOT? KW_DEFERRABLE)? (
        KW_INITIALLY (KW_DEFERRED | KW_IMMEDIATE)
    )?
    ;

colConstraintElem
    : KW_NOT? KW_NULL
    | KW_UNIQUE optDefinition? optConstableSpace?
    | KW_UNIQUE (KW_NULLS KW_NOT? KW_DISTINCT)? (
        (KW_INCLUDE indexParams)? withClause? optConstableSpace?
    )
    | KW_PRIMARY KW_KEY optDefinition? optConstableSpace?
    | KW_CHECK OPEN_PAREN expression CLOSE_PAREN (KW_NO KW_INHERIT)?
    | KW_DEFAULT primaryExpression
    | KW_GENERATED generatedWhen KW_AS (
        KW_IDENTITY (OPEN_PAREN seqOptElem+ CLOSE_PAREN)?
        | OPEN_PAREN expression CLOSE_PAREN KW_STORED
    )
    | KW_REFERENCES qualifiedName optColumnList? keyMatch? keyActions?
    | collateClause
    ;

generatedWhen
    : KW_ALWAYS
    | KW_BY KW_DEFAULT
    ;

tableLikeOption
    : KW_COMMENTS
    | KW_CONSTRAINTS
    | KW_DEFAULTS
    | KW_IDENTITY
    | KW_GENERATED
    | KW_INDEXES
    | KW_STATISTICS
    | KW_STORAGE
    | KW_ALL
    ;

constraintElem
    : KW_CHECK OPEN_PAREN expression CLOSE_PAREN constraintAttributeElem*
    | (KW_UNIQUE | ( KW_PRIMARY KW_KEY)) (
        optColumnList columnListInclude? optDefinition? optConstableSpace? constraintAttributeElem*
        | existingIndex constraintAttributeElem*
    )
    | KW_EXCLUDE tableAccessMethodClause? OPEN_PAREN exclusionConstraintElem (
        COMMA exclusionConstraintElem
    )* CLOSE_PAREN columnListInclude? optDefinition? optConstableSpace? (
        KW_WHERE OPEN_PAREN expression CLOSE_PAREN
    )? constraintAttributeElem*
    | KW_FOREIGN KW_KEY optColumnList KW_REFERENCES qualifiedName optColumnList? keyMatch? keyActions? constraintAttributeElem*
    ;

optColumnList
    : OPEN_PAREN columnList CLOSE_PAREN
    ;

columnListCreate
    : OPEN_PAREN columnNameCreate (COMMA columnNameCreate)* CLOSE_PAREN
    ;

columnList
    : columnName (COMMA columnName)*
    ;

columnListInclude
    : KW_INCLUDE optColumnList
    ;

keyMatch
    : KW_MATCH (KW_FULL | KW_PARTIAL | KW_SIMPLE)
    ;

exclusionConstraintElem
    : indexElem KW_WITH (anyOperator | KW_OPERATOR OPEN_PAREN anyOperator CLOSE_PAREN)
    ;

keyActions
    : keyUpdate keyDelete?
    | keyDelete keyUpdate?
    ;

keyUpdate
    : KW_ON KW_UPDATE keyAction
    ;

keyDelete
    : KW_ON KW_DELETE keyAction
    ;

keyAction
    : KW_NO KW_ACTION
    | KW_RESTRICT
    | KW_CASCADE
    | KW_SET (KW_NULL | KW_DEFAULT) columnList?
    ;

optInherit
    : KW_INHERITS OPEN_PAREN qualifiedNameList CLOSE_PAREN
    ;

partitionSpec
    : KW_PARTITION KW_BY colId OPEN_PAREN partElem (COMMA partElem)* CLOSE_PAREN
    ;

partElem
    : (columnName | funcExprWindowless | (OPEN_PAREN expression CLOSE_PAREN)) collateClause? anyName?
    ;

tableAccessMethodClause
    : KW_USING colId
    ;

optWith
    : KW_WITH relOptions
    | (KW_WITHOUT | KW_WITH) KW_OIDS
    ;

onCommitOption
    : KW_ON KW_COMMIT (KW_DROP | KW_DELETE KW_ROWS | KW_PRESERVE KW_ROWS)
    ;

optTableSpace
    : KW_TABLESPACE tableSpaceName
    ;

optConstableSpace
    : KW_USING KW_INDEX optTableSpace
    ;

existingIndex
    : KW_USING KW_INDEX colId
    ;

createStatsStmt
    : KW_CREATE KW_STATISTICS (ifNotExists? anyName)? optColumnList? KW_ON (
        columnExpr (COMMA columnExpr)*
        | exprList
    ) fromClause
    ;

alterStatsStmt
    : KW_ALTER KW_STATISTICS ifExists? anyName KW_SET KW_STATISTICS signedConst
    ;

createAsStmt
    : KW_CREATE optTemp? KW_TABLE ifNotExists? createAsTarget KW_AS selectStmt optWithData? # queryCreateTable
    ;

createAsTarget
    : tableNameCreate columnListCreate? tableAccessMethodClause? optWith? onCommitOption? optTableSpace?
    ;

optWithData
    : KW_WITH (KW_DATA | KW_NO KW_DATA)
    ;

createMaterializedViewStmt
    : KW_CREATE KW_UNLOGGED? KW_MATERIALIZED KW_VIEW ifNotExists? viewNameCreate columnListCreate? tableAccessMethodClause? optRelOptions?
        optTableSpace? KW_AS selectStmt optWithData? # createMaterializedView
    ;

refreshMaterializedViewStmt
    : KW_REFRESH KW_MATERIALIZED KW_VIEW KW_CONCURRENTLY? viewName optWithData?
    ;

createSeqStmt
    : KW_CREATE optTemp? KW_SEQUENCE ifNotExists? qualifiedName (seqOptElem+)?
    ;

alterSeqStmt
    : KW_ALTER KW_SEQUENCE ifExists? qualifiedName seqOptElem+
    ;

seqOptElem
    : KW_AS simpleTypeName
    | KW_CACHE numericOnly?
    | KW_INCREMENT KW_BY? numericOnly
    | (KW_MAXVALUE | KW_MINVALUE) numericOnly
    | KW_NO (KW_MAXVALUE | KW_MINVALUE | KW_CYCLE)
    | KW_OWNED KW_BY columnName
    | KW_SEQUENCE KW_NAME anyName
    | KW_START KW_WITH? numericOnly
    | KW_RESTART KW_WITH? numericOnly?
    ;

numericOnly
    : (PLUS | MINUS)? Numeric
    | signedConst
    ;

createProceduralLangStmt
    : KW_CREATE orReplaceOpt? KW_TRUSTED? KW_PROCEDURAL? KW_LANGUAGE colId (
        KW_HANDLER anyName (KW_INLINE anyName)? (KW_VALIDATOR anyName | KW_NO KW_VALIDATOR)?
    )?
    ;

createTableSpaceStmt
    : KW_CREATE optTableSpace (KW_OWNER roleSpec)? KW_LOCATION stringConst optRelOptions?
    ;

createExtensionStmt
    : KW_CREATE KW_EXTENSION ifNotExists? colId KW_WITH? (
        KW_SCHEMA schemaName
        | (KW_VERSION | KW_FROM) nonReservedWordOrStringConst
        | KW_CASCADE
    )*
    ;

alterExtensionStmt
    : KW_ALTER KW_EXTENSION colId KW_UPDATE (KW_TO nonReservedWordOrStringConst)*
    ;

alterExtensionContentsStmt
    : KW_ALTER KW_EXTENSION colId (KW_ADD | KW_DROP) (
        KW_TRANSFORM KW_FOR typename KW_LANGUAGE colId
        | KW_ROUTINE routineWithArgTypes
        | KW_PROCEDURE procedureWithArgTypes
        | KW_OPERATOR (KW_CLASS | KW_FAMILY) anyName tableAccessMethodClause
        | KW_OPERATOR operatorWithArgTypes
        | KW_FUNCTION functionWithArgTypes
        | (KW_DOMAIN | KW_TYPE) typename
        | KW_CAST OPEN_PAREN typename KW_AS typename CLOSE_PAREN
        | KW_AGGREGATE aggregateWithArgTypes
        | objectTypeName
        | objectTypeAnyName
    )
    ;

createFdwStmt
    : KW_CREATE KW_FOREIGN KW_DATA KW_WRAPPER colId (fdwOption+)? createGenericOptions?
    ;

fdwOption
    : (KW_HANDLER | KW_VALIDATOR) anyName?
    | KW_NO (KW_HANDLER | KW_VALIDATOR)
    ;

alterFdwStmt
    : KW_ALTER KW_FOREIGN KW_DATA KW_WRAPPER colId ((fdwOption+)? alterGenericOptions | fdwOption+)
    ;

createGenericOptions
    : KW_OPTIONS OPEN_PAREN genericOptionElem (COMMA genericOptionElem)* CLOSE_PAREN
    ;

alterGenericOptions
    : KW_OPTIONS OPEN_PAREN alterGenericOptionElem (COMMA alterGenericOptionElem)* CLOSE_PAREN
    ;

alterGenericOptionElem
    : (KW_SET | KW_ADD | KW_DROP) genericOptionElem
    ;

genericOptionElem
    : colLabel stringConst
    ;

createForeignServerStmt
    : KW_CREATE KW_SERVER ifNotExists? colId (KW_TYPE stringConst)? foreignServerVersion? KW_FOREIGN KW_DATA KW_WRAPPER colId createGenericOptions?
    ;

foreignServerVersion
    : KW_VERSION (stringConst | KW_NULL)
    ;

alterForeignServerStmt
    : KW_ALTER KW_SERVER colId (alterGenericOptions | foreignServerVersion alterGenericOptions?)
    ;

createForeignTableStmt
    : KW_CREATE KW_FOREIGN KW_TABLE ifNotExists? tableNameCreate OPEN_PAREN tableElementList? CLOSE_PAREN optInherit? KW_SERVER colId
        createGenericOptions? # createForeignTable
    | KW_CREATE KW_FOREIGN KW_TABLE ifNotExists? tableNameCreate KW_PARTITION KW_OF tableName optTypedTableElEmentList? partitionBoundSpec KW_SERVER
        colId createGenericOptions? # createPartitionForeignTable
    ;

importForeignSchemaStmt
    : KW_IMPORT KW_FOREIGN KW_SCHEMA schemaName (
        (KW_LIMIT KW_TO | KW_EXCEPT) OPEN_PAREN relationExprList CLOSE_PAREN
    )? KW_FROM KW_SERVER colId KW_INTO colId createGenericOptions?
    ;

createUserMappingStmt
    : KW_CREATE KW_USER KW_MAPPING ifNotExists? KW_FOR (roleSpec | KW_USER) KW_SERVER colId createGenericOptions?
    ;

alterUserMappingStmt
    : KW_ALTER KW_USER KW_MAPPING KW_FOR (roleSpec | KW_USER) KW_SERVER colId alterGenericOptions
    ;

createPolicyStmt
    : KW_CREATE KW_POLICY colId KW_ON qualifiedName (
        KW_AS (KW_PERMISSIVE | KW_RESTRICTIVE | identifier)
    )? (KW_FOR (KW_ALL | KW_SELECT | KW_INSERT | KW_UPDATE | KW_DELETE))? (KW_TO roleList)? rowSecurityOptionalExpr? rowSecurityOptionalWithCheck?
    ;

alterPolicyStmt
    : KW_ALTER KW_POLICY colId KW_ON qualifiedName (KW_TO roleList)? rowSecurityOptionalExpr? rowSecurityOptionalWithCheck?
    ;

alterProcedureStmt
    : KW_ALTER KW_PROCEDURE procedureName funcArgs? (
        procedureAction (procedureAction)* KW_RESTRICT?
        | KW_RENAME KW_TO procedureNameCreate
        | KW_OWNER KW_TO roleSpec
        | KW_SET KW_SCHEMA schemaNameCreate
        | KW_NO? KW_DEPENDS KW_ON KW_EXTENSION colId
    )
    ;

procedureAction
    : (KW_EXTERNAL? KW_SECURITY KW_INVOKER | KW_EXTERNAL? KW_SECURITY KW_DEFINER)
    | KW_SET colId (KW_TO | STAR) (colId | KW_DEFAULT)
    | KW_SET colId KW_FROM KW_CURRENT
    | KW_RESET (colId | KW_ALL)
    ;

rowSecurityOptionalExpr
    : KW_USING OPEN_PAREN expression CLOSE_PAREN
    ;

rowSecurityOptionalWithCheck
    : KW_WITH KW_CHECK OPEN_PAREN expression CLOSE_PAREN
    ;

createAccessMethodStmt
    : KW_CREATE KW_ACCESS KW_METHOD colId KW_TYPE (KW_INDEX | KW_TABLE) KW_HANDLER anyName
    ;

createTrigStmt
    : KW_CREATE orReplaceOpt? KW_TRIGGER colId triggerActionTime triggerEvents KW_ON tableName (
        KW_REFERENCING ((KW_NEW | KW_OLD) (KW_TABLE | KW_ROW) KW_AS? colId)+
    )? (KW_FOR KW_EACH? (KW_ROW | KW_STATEMENT))? triggerWhen? KW_EXECUTE functionOrProcedure OPEN_PAREN triggerFuncArgs CLOSE_PAREN
    | KW_CREATE orReplaceOpt? KW_CONSTRAINT? KW_TRIGGER colId triggerActionTime triggerEvents KW_ON tableName (
        KW_FROM qualifiedName
    )? constraintAttributeElem* (KW_FOR KW_EACH? (KW_ROW | KW_STATEMENT))? triggerWhen? KW_EXECUTE functionOrProcedure OPEN_PAREN triggerFuncArgs
        CLOSE_PAREN
    ;

triggerActionTime
    : KW_BEFORE
    | KW_AFTER
    | KW_INSTEAD KW_OF
    ;

triggerEvents
    : triggerOneEvent (KW_OR triggerOneEvent)*
    ;

triggerOneEvent
    : KW_INSERT
    | KW_DELETE
    | KW_UPDATE (KW_OF columnList)?
    | KW_TRUNCATE
    ;

triggerWhen
    : KW_WHEN OPEN_PAREN expression CLOSE_PAREN
    ;

functionOrProcedure
    : KW_FUNCTION functionName
    | KW_PROCEDURE procedureName
    ;

triggerFuncArgs
    : (triggerFuncArg |) (COMMA triggerFuncArg)*
    ;

triggerFuncArg
    : Integral
    | Numeric
    | stringConst
    | colLabel
    ;

constraintAttributeElem
    : KW_NOT? KW_DEFERRABLE
    | KW_INITIALLY (KW_IMMEDIATE | KW_DEFERRED)
    | KW_NOT KW_VALID
    | KW_NO KW_INHERIT
    ;

createEventTrigStmt
    : KW_CREATE KW_EVENT KW_TRIGGER colId KW_ON colLabel (
        KW_WHEN eventTriggerWhenItem (KW_AND eventTriggerWhenItem)*
    )? KW_EXECUTE functionOrProcedure OPEN_PAREN CLOSE_PAREN
    ;

eventTriggerWhenItem
    : colId KW_IN OPEN_PAREN stringConst (notifyPayload)* CLOSE_PAREN
    ;

alterEventTrigStmt
    : KW_ALTER KW_EVENT KW_TRIGGER colId (KW_ENABLE (KW_REPLICA | KW_ALWAYS)? | KW_DISABLE)
    ;

createAssertionStmt
    : KW_CREATE KW_ASSERTION anyName KW_CHECK OPEN_PAREN expression CLOSE_PAREN constraintAttributeElem*
    ;

defineStmt
    : KW_CREATE orReplaceOpt? KW_AGGREGATE functionName (
        (aggregateArgs definition)
        | OPEN_PAREN oldAggregateElem (COMMA oldAggregateElem)* CLOSE_PAREN
    )
    | KW_CREATE KW_OPERATOR anyOperator definition
    | KW_CREATE KW_TYPE anyName KW_AS (
        OPEN_PAREN tableFuncElementList? CLOSE_PAREN
        | KW_ENUM OPEN_PAREN (stringConst (notifyPayload)*)? CLOSE_PAREN
    )
    | KW_CREATE KW_TYPE anyName ((KW_AS KW_RANGE)? definition)?
    | KW_CREATE KW_TEXT KW_SEARCH (KW_PARSER | KW_DICTIONARY | KW_TEMPLATE | KW_CONFIGURATION) anyName definition
    | KW_CREATE KW_COLLATION ifNotExists? anyName (definition | (KW_FROM anyName))
    ;

definition
    : OPEN_PAREN defElem (COMMA defElem)* CLOSE_PAREN
    ;

defElem
    : colLabel (EQUAL defArg)?
    ;

defArg
    : funcType
    | reservedKeyword
    | qualAllOp
    | numericOnly
    | stringConst
    | KW_NONE
    ;

oldAggregateElem
    : identifier EQUAL defArg
    ;

alterEnumStmt
    : KW_ALTER KW_TYPE anyName KW_ADD KW_VALUE ifNotExists? stringConst (
        (KW_BEFORE | KW_AFTER) stringConst
    )?
    | KW_ALTER KW_TYPE anyName KW_RENAME KW_VALUE stringConst KW_TO stringConst
    ;

ifNotExists
    : KW_IF KW_NOT KW_EXISTS
    ;

createOperatorClassStmt
    : KW_CREATE KW_OPERATOR KW_CLASS anyName KW_DEFAULT? KW_FOR KW_TYPE typename tableAccessMethodClause (
        KW_FAMILY anyName
    )? KW_AS opClassItem (COMMA opClassItem)*
    ;

opClassItem
    : KW_OPERATOR Integral anyOperator operatorArgTypes? (
        KW_FOR (KW_SEARCH | (KW_ORDER KW_BY anyName))
    )? KW_RECHECK?
    | KW_FUNCTION Integral prepTypeClause? functionWithArgTypes
    | KW_STORAGE typename
    ;

createOperatorFamilyStmt
    : KW_CREATE KW_OPERATOR KW_FAMILY anyName tableAccessMethodClause
    ;

alterOperatorFamilyStmt
    : KW_ALTER KW_OPERATOR KW_FAMILY anyName tableAccessMethodClause (
        KW_ADD opClassItem (COMMA opClassItem)*
        | KW_DROP opClassDrop (COMMA opClassDrop)*
    )
    ;

opClassDrop
    : (KW_OPERATOR | KW_FUNCTION) Integral prepTypeClause
    ;

reassignOwnedStmt
    : KW_REASSIGN KW_OWNED KW_BY roleList KW_TO roleSpec
    ;

dropStmt
    : KW_DROP (
        KW_SEQUENCE
        | KW_INDEX
        | KW_COLLATION
        | KW_CONVERSION
        | KW_STATISTICS
        | KW_PUBLICATION
        | KW_SERVER
        | KW_ACCESS KW_METHOD
        | KW_EVENT KW_TRIGGER
        | KW_EXTENSION
        | KW_PROCEDURAL? KW_LANGUAGE
        | KW_FOREIGN KW_DATA KW_WRAPPER
        | KW_TEXT KW_SEARCH (KW_PARSER | KW_DICTIONARY | KW_TEMPLATE | KW_CONFIGURATION)
    ) ifExists? nameList optDropBehavior?
    | KW_DROP KW_MATERIALIZED? KW_VIEW ifExists? viewName (COMMA viewName)* optDropBehavior?
    | KW_DROP KW_FOREIGN? KW_TABLE ifExists? tableNameList optDropBehavior?
    | KW_DROP KW_SCHEMA ifExists? schemaNameList optDropBehavior?
    | KW_DROP (KW_POLICY | KW_RULE | KW_TRIGGER) ifExists? colId KW_ON anyName optDropBehavior?
    | KW_DROP (KW_TYPE | KW_DOMAIN) ifExists? typename (COMMA typename)* optDropBehavior?
    | KW_DROP KW_INDEX KW_CONCURRENTLY ifExists? anyNameList optDropBehavior?
    | KW_DROP KW_CAST ifExists? OPEN_PAREN typename KW_AS typename CLOSE_PAREN optDropBehavior?
    | KW_DROP KW_OPERATOR (KW_CLASS | KW_FAMILY) ifExists? anyName tableAccessMethodClause optDropBehavior?
    | KW_DROP KW_OWNED KW_BY roleList optDropBehavior?
    | KW_DROP KW_SUBSCRIPTION ifExists? colId optDropBehavior?
    | KW_DROP KW_TABLESPACE ifExists? tableSpaceName
    | KW_DROP KW_TRANSFORM ifExists? KW_FOR typename KW_LANGUAGE colId optDropBehavior?
    | KW_DROP (KW_ROLE | KW_USER | KW_GROUP) ifExists? roleList
    | KW_DROP KW_USER KW_MAPPING ifExists? KW_FOR (roleSpec | KW_USER) KW_SERVER colId
    | KW_DROP KW_DATABASE ifExists? databaseName (
        KW_WITH? (OPEN_PAREN KW_FORCE (COMMA KW_FORCE)* CLOSE_PAREN)
    )?
    ;

objectTypeAnyName
    : KW_FOREIGN? KW_TABLE tableName
    | KW_MATERIALIZED? KW_VIEW viewName
    | (KW_INDEX | KW_COLLATION | KW_CONVERSION | KW_STATISTICS | KW_SEQUENCE) anyName
    | KW_TEXT KW_SEARCH (KW_PARSER | KW_DICTIONARY | KW_TEMPLATE | KW_CONFIGURATION) anyName
    ;

objectTypeName
    : (
        KW_EVENT KW_TRIGGER
        | KW_ACCESS KW_METHOD
        | KW_EXTENSION
        | KW_PUBLICATION
        | KW_SERVER
        | KW_ROLE
        | KW_SUBSCRIPTION
        | KW_FOREIGN KW_DATA KW_WRAPPER
        | KW_PROCEDURAL? KW_LANGUAGE
    ) colId
    | KW_SCHEMA schemaName
    | KW_DATABASE databaseName
    | optTableSpace
    ;

anyNameList
    : anyName (COMMA anyName)*
    ;

anyName
    : colId attrs?
    ;

attrs
    : (DOT colLabel)+
    ;

truncateStmt
    : KW_TRUNCATE KW_TABLE? truncateTable (COMMA truncateTable)* (
        (KW_CONTINUE | KW_RESTART) KW_IDENTITY
    )? optDropBehavior?
    ;

truncateTable
    : KW_ONLY? tableName STAR?
    ;

commentStmt
    : KW_COMMENT KW_ON (
        objectTypeAnyName
        | objectTypeName
        | KW_COLUMN (colId attrs?) DOT columnName
        | (KW_TYPE | KW_DOMAIN) typename
        | KW_AGGREGATE aggregateWithArgTypes
        | KW_FUNCTION functionWithArgTypes
        | KW_OPERATOR operatorWithArgTypes
        | KW_CONSTRAINT colId KW_ON (tableName | (KW_DOMAIN? anyName))
        | (KW_POLICY | KW_RULE | KW_TRIGGER) colId KW_ON anyName
        | KW_PROCEDURE procedureWithArgTypes
        | KW_ROUTINE routineWithArgTypes
        | KW_TRANSFORM KW_FOR typename KW_LANGUAGE colId
        | KW_OPERATOR (KW_CLASS | KW_FAMILY) anyName tableAccessMethodClause
        | KW_LARGE KW_OBJECT numericOnly
        | KW_CAST OPEN_PAREN typename KW_AS typename CLOSE_PAREN
    ) KW_IS (stringConst | KW_NULL)
    ;

secLabelStmt
    : KW_SECURITY KW_LABEL (KW_FOR nonReservedWordOrStringConst)? KW_ON (
        (KW_TYPE | KW_DOMAIN) typename
        | KW_AGGREGATE aggregateWithArgTypes
        | KW_COLUMN columnName
        | KW_FUNCTION functionWithArgTypes
        | KW_LARGE KW_OBJECT numericOnly
        | KW_PROCEDURE procedureWithArgTypes
        | KW_ROUTINE routineWithArgTypes
        | objectTypeAnyName
        | objectTypeName
    ) KW_IS (stringConst | KW_NULL)
    ;

fetchStmt
    : (KW_FETCH | KW_MOVE) fetch_args
    ;

fetch_args
    : (KW_NEXT | KW_PRIOR | KW_FIRST | KW_LAST)? fromIn? colId
    | (KW_ABSOLUTE | KW_RELATIVE)? signedConst fromIn? colId
    | KW_FORWARD signedConst? fromIn? colId
    | KW_FORWARD? KW_ALL fromIn? colId
    | KW_BACKWARD (KW_ALL? | signedConst) fromIn? colId
    ;

fromIn
    : KW_FROM
    | KW_IN
    ;

grantStmt
    : KW_GRANT privileges KW_ON privilegeTarget KW_TO granteeList (KW_WITH KW_GRANT KW_OPTION)?
    ;

revokeStmt
    : KW_REVOKE (KW_GRANT KW_OPTION KW_FOR)? privileges KW_ON privilegeTarget KW_FROM granteeList optDropBehavior?
    ;

privileges
    : privilege (COMMA privilege)*
    | KW_ALL KW_PRIVILEGES? (optColumnList)?
    | beforePrivilegeSelect (COMMA beforePrivilegeSelect)*
    ;

beforePrivilegeSelect
    : KW_SELECT
    | KW_INSERT
    | KW_UPDATE
    | KW_DELETE
    | KW_TRUNCATE
    | KW_PEFERENCES
    | KW_TRIGGER
    | KW_USAGE
    | KW_CREATE
    | KW_CONNECT
    | KW_TEMPORARY
    | KW_TEMP
    | KW_EXECUTE
    ;

privilege
    : (KW_SELECT | KW_REFERENCES | KW_CREATE | colId) optColumnList?
    ;

privilegeTarget
    : KW_TABLE tableNameList
    | KW_SEQUENCE? qualifiedNameList
    | (KW_FOREIGN (KW_DATA KW_WRAPPER | KW_SERVER) | KW_LANGUAGE) nameList
    | KW_FUNCTION functionWithArgTypesList
    | KW_PROCEDURE procedureWithArgTypesList
    | KW_ROUTINE routineWithArgTypesList
    | KW_DATABASE databaseNameList
    | (KW_DOMAIN | KW_TYPE) anyNameList
    | KW_LARGE KW_OBJECT numericOnly (COMMA numericOnly)*
    | KW_SCHEMA schemaNameList
    | KW_TABLESPACE tableSpaceNameList
    | KW_ALL (KW_TABLES | KW_SEQUENCES | KW_FUNCTIONS | KW_PROCEDURES | KW_ROUTINES) KW_IN KW_SCHEMA schemaNameList
    ;

granteeList
    : (KW_GROUP? roleSpec) (COMMA (KW_GROUP? roleSpec))*
    ;

grantRoleStmt
    : KW_GRANT privilege (COMMA privilege)* KW_TO roleList (KW_WITH KW_ADMIN KW_OPTION)? (
        KW_GRANTED KW_BY roleSpec
    )?
    ;

revokeRoleStmt
    : KW_REVOKE (KW_ADMIN KW_OPTION KW_FOR)? privilege (COMMA privilege)* KW_FROM roleList (
        KW_GRANTED KW_BY roleSpec
    )? optDropBehavior?
    ;

alterDefaultPrivilegesStmt
    : KW_ALTER KW_DEFAULT KW_PRIVILEGES (
        KW_IN KW_SCHEMA schemaNameList
        | KW_FOR (KW_ROLE | KW_USER) roleList
    )* defaclaction
    ;

defaclaction
    : KW_GRANT privileges KW_ON defaclPrivilegeTarget KW_TO granteeList (
        KW_WITH KW_GRANT KW_OPTION
    )?
    | KW_REVOKE (KW_GRANT KW_OPTION KW_FOR)? privileges KW_ON defaclPrivilegeTarget KW_FROM granteeList optDropBehavior?
    ;

defaclPrivilegeTarget
    : KW_TABLES
    | KW_FUNCTIONS
    | KW_ROUTINES
    | KW_SEQUENCES
    | KW_TYPES
    | KW_SCHEMAS
    ;

//create index

indexStmt
    : KW_CREATE KW_UNIQUE? KW_INDEX KW_CONCURRENTLY? ifNotExists? colId? KW_ON relationExpr tableAccessMethodClause? indexParams (
        KW_INCLUDE indexParams
    )? (KW_NULLS KW_NOT? KW_DISTINCT)? optRelOptions? optTableSpace? whereClause?
    ;

indexParams
    : OPEN_PAREN indexElem (COMMA indexElem)* CLOSE_PAREN
    ;

indexElem
    : (columnName | funcExprWindowless | OPEN_PAREN expression CLOSE_PAREN) collateClause? (
        anyName?
        | anyName relOptions
    ) (KW_ASC | KW_DESC)? (KW_NULLS (KW_FIRST | KW_LAST))?
    ;

createFunctionStmt
    : KW_CREATE orReplaceOpt? (KW_FUNCTION functionNameCreate | KW_PROCEDURE procedureNameCreate) (
        OPEN_PAREN (funcArgWithDefault (COMMA funcArgWithDefault)*)? CLOSE_PAREN
    ) (
        KW_RETURNS (
            funcType
            | KW_TABLE (OPEN_PAREN tableFuncColumn (COMMA tableFuncColumn)* CLOSE_PAREN)
        )
    )? createFuncOptItem+ (KW_WITH OPEN_PAREN nameList CLOSE_PAREN)?
    ;

orReplaceOpt
    : KW_OR KW_REPLACE
    ;

funcArgs
    : OPEN_PAREN funcArgsList? CLOSE_PAREN
    ;

funcArgsList
    : funcArg (COMMA funcArg)*
    ;

routineWithArgTypesList
    : routineWithArgTypes (COMMA routineWithArgTypes)*
    ;

routineWithArgTypes
    : routineName funcArgs
    | typeFuncNameKeyword
    | qualifiedName
    ;

procedureWithArgTypesList
    : procedureWithArgTypes (COMMA procedureWithArgTypes)*
    ;

procedureWithArgTypes
    : procedureName funcArgs
    | typeFuncNameKeyword
    | qualifiedName
    ;

functionWithArgTypesList
    : functionWithArgTypes (COMMA functionWithArgTypes)*
    ;

functionWithArgTypes
    : functionName funcArgs
    | typeFuncNameKeyword
    | qualifiedName
    ;

funcArg
    : (argClass typeFunctionName? | typeFunctionName argClass?)? funcType
    ;

argClass
    : KW_IN KW_OUT?
    | KW_OUT
    | KW_INOUT
    | KW_VARIADIC
    ;

funcType
    : typename
    | KW_SETOF? typeFunctionName attrs PERCENT KW_TYPE
    ;

funcArgWithDefault
    : funcArg ((KW_DEFAULT | EQUAL) expression)?
    ;

aggregateArgs
    : OPEN_PAREN (STAR | funcArgsList? (KW_ORDER KW_BY funcArgsList)?) CLOSE_PAREN
    ;

aggregateWithArgTypes
    : functionName aggregateArgs
    ;

commonFuncOptItem
    : (KW_RETURNS KW_NULL | KW_CALLED) KW_ON KW_NULL KW_INPUT
    | KW_STRICT
    | KW_IMMUTABLE
    | KW_STABLE
    | KW_VOLATILE
    | KW_EXTERNAL? KW_SECURITY (KW_DEFINER | KW_INVOKER)
    | KW_LEAKPROOF
    | KW_NOT KW_LEAKPROOF
    | (KW_COST | KW_ROWS) numericOnly
    | KW_SUPPORT anyName
    | KW_SET setRestMore
    | variableResetStmt
    | KW_PARALLEL colId
    ;

createFuncOptItem
    : KW_AS stringConst notifyPayload
    | KW_LANGUAGE nonReservedWordOrStringConst
    | KW_TRANSFORM KW_FOR KW_TYPE typename (COMMA KW_FOR KW_TYPE typename)*
    | KW_WINDOW
    | KW_SET colId (KW_TO colId | EQUAL colId | KW_FROM KW_CURRENT)
    | KW_AS colId
    | stmt
    | commonFuncOptItem
    | colId
    ;

//https://www.postgresql.org/docs/9.1/sql-createfunction.html

//    | KW_AS 'definition'

//    | KW_AS 'obj_file', 'link_symbol'

optDefinition
    : KW_WITH definition
    ;

tableFuncColumn
    : columnName funcType
    ;

alterFunctionStmt
    : KW_ALTER (
        KW_FUNCTION functionWithArgTypes
        | KW_PROCEDURE procedureWithArgTypes
        | KW_ROUTINE routineWithArgTypes
    ) commonFuncOptItem+ KW_RESTRICT?
    ;

removeFuncStmt
    : KW_DROP (
        KW_FUNCTION ifExists? functionWithArgTypesList
        | KW_PROCEDURE ifExists? procedureWithArgTypesList
        | KW_ROUTINE ifExists? routineWithArgTypesList
    ) optDropBehavior?
    ;

removeAggregateStmt
    : KW_DROP KW_AGGREGATE ifExists? (aggregateWithArgTypes (COMMA aggregateWithArgTypes)*) optDropBehavior?
    ;

removeOperatorStmt
    : KW_DROP KW_OPERATOR ifExists? (operatorWithArgTypes (COMMA operatorWithArgTypes)*) optDropBehavior?
    ;

operatorArgTypes
    : OPEN_PAREN (typename (COMMA typename)? | KW_NONE COMMA typename | typename COMMA KW_NONE) CLOSE_PAREN
    ;

anyOperator
    : (colId DOT)* allOp
    ;

operatorWithArgTypes
    : anyOperator operatorArgTypes
    ;

doStmt
    : KW_DO (stringConst | KW_LANGUAGE nonReservedWordOrStringConst)+
    ;

createCastStmt
    : KW_CREATE KW_CAST OPEN_PAREN typename KW_AS typename CLOSE_PAREN (
        (KW_WITHOUT KW_FUNCTION (KW_AS (KW_ASSIGNMENT | KW_IMPLICIT))?)
        | (
            KW_WITH (KW_FUNCTION functionWithArgTypes | KW_INOUT) (
                KW_AS (KW_ASSIGNMENT | KW_IMPLICIT)
            )?
        )
    )
    ;

ifExists
    : KW_IF KW_EXISTS
    ;

createTransformStmt
    : KW_CREATE orReplaceOpt? KW_TRANSFORM KW_FOR typename KW_LANGUAGE colId OPEN_PAREN (
        KW_FROM sqlWithFunction (COMMA KW_TO sqlWithFunction)?
        | KW_TO sqlWithFunction (COMMA KW_FROM sqlWithFunction)?
    ) CLOSE_PAREN
    ;

sqlWithFunction
    : KW_SQL KW_WITH KW_FUNCTION functionWithArgTypes
    ;

reindexStmt
    : KW_REINDEX (OPEN_PAREN KW_VERBOSE (COMMA KW_VERBOSE)* CLOSE_PAREN)? (
        (
            KW_INDEX KW_CONCURRENTLY? qualifiedName
            | KW_TABLE KW_CONCURRENTLY? tableName
            | KW_SCHEMA KW_CONCURRENTLY? schemaName
            | KW_SYSTEM KW_CONCURRENTLY? colId
            | KW_DATABASE KW_CONCURRENTLY? databaseName
        )
    )
    ;

alterTblSpcStmt
    : KW_ALTER optTableSpace (KW_SET | KW_RESET) relOptions
    ;

renameStmt
    : KW_ALTER (KW_AGGREGATE aggregateWithArgTypes | KW_ROUTINE routineWithArgTypes) KW_RENAME KW_TO colId
    | KW_ALTER KW_DATABASE databaseName KW_RENAME KW_TO databaseNameCreate
    | KW_ALTER (KW_DOMAIN | KW_STATISTICS | KW_TYPE | KW_CONVERSION | KW_COLLATION) anyName KW_RENAME KW_TO colId
    | KW_ALTER KW_FUNCTION functionWithArgTypes KW_RENAME KW_TO functionNameCreate
    | KW_ALTER KW_OPERATOR (KW_CLASS | KW_FAMILY) anyName tableAccessMethodClause KW_RENAME KW_TO colId
    | KW_ALTER KW_PROCEDURE procedureWithArgTypes KW_RENAME KW_TO procedureNameCreate
    | KW_ALTER KW_SCHEMA schemaName KW_RENAME KW_TO schemaNameCreate
    | KW_ALTER (KW_SEQUENCE | KW_INDEX) ifExists? qualifiedName KW_RENAME KW_TO colId
    | KW_ALTER KW_MATERIALIZED? KW_VIEW ifExists? viewName KW_RENAME KW_TO viewNameCreate
    | KW_ALTER KW_FOREIGN? KW_TABLE ifExists? relationExpr KW_RENAME KW_TO tableNameCreate
    | KW_ALTER (
        KW_FOREIGN? KW_TABLE ifExists? relationExpr KW_RENAME KW_COLUMN?
        | KW_MATERIALIZED? KW_VIEW ifExists? viewName KW_RENAME KW_COLUMN?
    ) columnName KW_TO columnNameCreate
    | KW_ALTER (KW_TABLE ifExists? relationExpr | KW_DOMAIN anyName) KW_RENAME KW_CONSTRAINT colId KW_TO colId
    | KW_ALTER ((KW_POLICY ifExists?) | KW_RULE | KW_TRIGGER) colId KW_ON qualifiedName KW_RENAME KW_TO colId
    | KW_ALTER (
        KW_FOREIGN KW_DATA KW_WRAPPER
        | KW_PROCEDURAL? KW_LANGUAGE
        | KW_PUBLICATION
        | KW_SERVER
        | KW_SUBSCRIPTION
        | KW_EVENT KW_TRIGGER
    ) colId KW_RENAME KW_TO colId
    | KW_ALTER (KW_USER | KW_ROLE | KW_GROUP) roleSpec KW_RENAME KW_TO roleSpec
    | KW_ALTER optTableSpace KW_RENAME KW_TO tableSpaceName
    | KW_ALTER KW_TEXT KW_SEARCH (KW_PARSER | KW_DICTIONARY | KW_TEMPLATE | KW_CONFIGURATION) anyName KW_RENAME KW_TO colId
    | KW_ALTER KW_TYPE anyName KW_RENAME KW_ATTRIBUTE colId KW_TO colId optDropBehavior?
    ;

alterObjectDependsStmt
    : KW_ALTER (
        KW_FUNCTION functionWithArgTypes
        | KW_PROCEDURE procedureWithArgTypes
        | KW_ROUTINE routineWithArgTypes
        | KW_TRIGGER colId KW_ON qualifiedName
        | KW_MATERIALIZED KW_VIEW viewName
        | KW_INDEX qualifiedName
    ) KW_NO? KW_DEPENDS KW_ON KW_EXTENSION colId
    ;

alterObjectSchemaStmt
    : KW_ALTER (
        KW_AGGREGATE aggregateWithArgTypes
        | KW_EXTENSION colId
        | KW_FUNCTION functionWithArgTypes
        | KW_OPERATOR operatorWithArgTypes
        | KW_OPERATOR (KW_CLASS | KW_FAMILY) anyName tableAccessMethodClause
        | KW_PROCEDURE procedureWithArgTypes
        | KW_ROUTINE routineWithArgTypes
        | KW_SEQUENCE ifExists? qualifiedName
        | KW_MATERIALIZED? KW_VIEW ifExists? viewName
        | KW_FOREIGN? KW_TABLE ifExists? relationExpr
    ) KW_SET KW_SCHEMA schemaName
    | KW_ALTER (
        KW_TEXT KW_SEARCH (KW_PARSER | KW_DICTIONARY | KW_TEMPLATE | KW_CONFIGURATION)
        | KW_COLLATION
        | KW_CONVERSION
        | KW_DOMAIN
        | KW_STATISTICS
        | KW_TYPE
    ) anyName KW_SET KW_SCHEMA schemaName
    ;

alterOperatorStmt
    : KW_ALTER KW_OPERATOR operatorWithArgTypes KW_SET operatorDefList
    ;

operatorDefList
    : OPEN_PAREN operatorDefElem (COMMA operatorDefElem)* CLOSE_PAREN
    ;

operatorDefElem
    : colLabel EQUAL (KW_NONE | funcType | reservedKeyword | qualAllOp | numericOnly | stringConst)
    ;

alterTypeStmt
    : KW_ALTER KW_TYPE anyName KW_SET operatorDefList
    ;

alterOwnerStmt
    : KW_ALTER KW_OPERATOR (KW_CLASS | KW_FAMILY) anyName tableAccessMethodClause KW_OWNER KW_TO roleSpec
    | KW_ALTER (
        KW_AGGREGATE aggregateWithArgTypes
        | KW_DATABASE databaseName
        | KW_FUNCTION functionWithArgTypes
        | KW_PROCEDURAL? KW_LANGUAGE colId
        | KW_LARGE KW_OBJECT numericOnly
        | KW_LARGE KW_OBJECT numericOnly
        | KW_OPERATOR operatorWithArgTypes
        | KW_PROCEDURE procedureWithArgTypes
        | KW_ROUTINE routineWithArgTypes
        | KW_SCHEMA schemaName
        | optTableSpace
    ) KW_OWNER KW_TO roleSpec
    | KW_ALTER (
        KW_TEXT KW_SEARCH (KW_DICTIONARY | KW_CONFIGURATION)
        | KW_COLLATION
        | KW_CONVERSION
        | KW_DOMAIN
        | KW_TYPE
        | KW_STATISTICS
    ) anyName KW_OWNER KW_TO roleSpec
    | KW_ALTER (
        KW_SERVER
        | (KW_FOREIGN KW_DATA KW_WRAPPER)
        | (KW_EVENT KW_TRIGGER)
        | KW_PUBLICATION
        | KW_SUBSCRIPTION
    ) colId KW_OWNER KW_TO roleSpec
    ;

createPublicationStmt
    : KW_CREATE KW_PUBLICATION colId (KW_FOR KW_TABLE relationExprList | KW_FOR KW_ALL KW_TABLES)? optDefinition?
    ;

alterPublicationStmt
    : KW_ALTER KW_PUBLICATION colId (
        (KW_OWNER KW_TO roleSpec)
        | (KW_SET definition)
        | (KW_RENAME KW_TO colId)
        | (KW_ADD | KW_SET | KW_DROP) publicationRelationExpr (COMMA publicationRelationExpr)*
    )
    ;

createSubscriptionStmt
    : KW_CREATE KW_SUBSCRIPTION colId KW_CONNECTION stringConst KW_PUBLICATION (
        colLabel (COMMA colLabel)*
    ) optDefinition?
    ;

alterSubscriptionStmt
    : KW_ALTER KW_SUBSCRIPTION colId KW_SET definition
    | KW_ALTER KW_SUBSCRIPTION colId KW_CONNECTION stringConst
    | KW_ALTER KW_SUBSCRIPTION colId KW_REFRESH KW_PUBLICATION optDefinition?
    | KW_ALTER KW_SUBSCRIPTION colId (KW_SET | KW_ADD | KW_DROP) KW_PUBLICATION (
        colLabel (COMMA colLabel)*
    ) optDefinition?
    | KW_ALTER KW_SUBSCRIPTION colId (KW_ENABLE | KW_DISABLE)
    | KW_ALTER KW_SUBSCRIPTION colId KW_SKIP OPEN_PAREN oldAggregateElem CLOSE_PAREN
    | KW_ALTER KW_SUBSCRIPTION colId KW_OWNER KW_TO roleSpec
    ;

ruleStmt
    : KW_CREATE orReplaceOpt? KW_RULE colId KW_AS KW_ON (
        KW_SELECT
        | KW_UPDATE
        | KW_DELETE
        | KW_INSERT
    ) KW_TO qualifiedName whereClause? KW_DO (KW_INSTEAD | KW_ALSO)? (
        KW_NOTHING
        | ruleActionStmt
        | OPEN_PAREN (ruleActionStmt? (SEMI ruleActionStmt?)*) CLOSE_PAREN
    )
    ;

ruleActionStmt
    : selectStmt
    | insertStmt
    | updateStmt
    | deleteStmt
    | notifyStmt
    ;

notifyStmt
    : KW_NOTIFY colId notifyPayload?
    ;

notifyPayload
    : COMMA stringConst
    ;

listenStmt
    : KW_LISTEN colId
    ;

unListenStmt
    : KW_UNLISTEN (colId | STAR)
    ;

transactionStmt
    : KW_BEGIN optTransaction? transactionModeList?
    | KW_START KW_TRANSACTION transactionModeList?
    | KW_SAVEPOINT colId
    | KW_RELEASE KW_SAVEPOINT? colId
    | KW_PREPARE KW_TRANSACTION stringConst
    | (KW_COMMIT | KW_ROLLBACK) KW_PREPARED stringConst
    | (KW_ABORT | KW_END | KW_COMMIT | KW_ROLLBACK) optTransaction? (KW_AND KW_NO? KW_CHAIN)?
    | KW_ROLLBACK optTransaction? KW_TO KW_SAVEPOINT? colId
    ;

optTransaction
    : KW_WORK
    | KW_TRANSACTION
    ;

transactionModeItem
    : KW_ISOLATION KW_LEVEL isoLevel
    | KW_READ (KW_ONLY | KW_WRITE)
    | KW_NOT? KW_DEFERRABLE
    ;

transactionModeList
    : transactionModeItem (COMMA? transactionModeItem)*
    ;

viewStmt
    : KW_CREATE (KW_OR KW_REPLACE)? optTemp? (
        KW_VIEW viewNameCreate columnListCreate? optRelOptions?
        | KW_RECURSIVE KW_VIEW viewNameCreate optColumnList optRelOptions?
    ) KW_AS selectStmt (KW_WITH (KW_CASCADED | KW_LOCAL)? KW_CHECK KW_OPTION)? # createView
    ;

loadStmt
    : KW_LOAD stringConst
    ;

createDbStmt
    : KW_CREATE KW_DATABASE databaseNameCreate KW_WITH? (createDbOptItem+)? # createDatabase
    ;

createDbOptItem
    : (
        KW_CONNECTION KW_LIMIT
        | KW_ENCODING
        | KW_LOCATION
        | KW_OWNER
        | KW_TABLESPACE
        | KW_TEMPLATE
        | identifier
    ) EQUAL? (signedConst | booleanOrString | KW_DEFAULT)
    ;

alterDatabaseStmt
    : KW_ALTER KW_DATABASE databaseName (
        (KW_SET KW_TABLESPACE tableSpaceName)?
        | (KW_WITH? createDbOptItem+)?
    )
    ;

alterDatabaseSetStmt
    : KW_ALTER KW_DATABASE databaseName setOrResetClause?
    ;

alterCollationStmt
    : KW_ALTER KW_COLLATION anyName KW_REFRESH KW_VERSION
    ;

alterSystemStmt
    : KW_ALTER KW_SYSTEM (KW_SET | KW_RESET) genericSet
    ;

createDomainStmt
    : KW_CREATE KW_DOMAIN anyName KW_AS? typename colConstraint*
    ;

alterDomainStmt
    : KW_ALTER KW_DOMAIN anyName (
        alterColumnDefault
        | (KW_DROP | KW_SET) KW_NOT KW_NULL
        | KW_ADD (KW_CONSTRAINT colId)? constraintElem
        | KW_DROP KW_CONSTRAINT ifExists? colId optDropBehavior?
        | KW_VALIDATE KW_CONSTRAINT colId
    )
    ;

alterSearchDictionaryStmt
    : KW_ALTER KW_TEXT KW_SEARCH KW_DICTIONARY anyName definition
    ;

alterSearchConfigurationStmt
    : KW_ALTER KW_TEXT KW_SEARCH KW_CONFIGURATION anyName (KW_ADD | KW_ALTER) KW_MAPPING KW_FOR nameList KW_WITH anyNameList
    | KW_ALTER KW_TEXT KW_SEARCH KW_CONFIGURATION anyName KW_ALTER KW_MAPPING (KW_FOR nameList)? KW_REPLACE anyName KW_WITH anyName
    | KW_ALTER KW_TEXT KW_SEARCH KW_CONFIGURATION anyName KW_DROP KW_MAPPING ifExists? KW_FOR nameList
    ;

createConversionStmt
    : KW_CREATE KW_DEFAULT? KW_CONVERSION anyName KW_FOR stringConst KW_TO stringConst KW_FROM anyName
    ;

clusterStmt
    : KW_CLUSTER optVerbose? (tableName tableAccessMethodClause?)?
    | KW_CLUSTER OPEN_PAREN optVerbose (COMMA optVerbose)* CLOSE_PAREN tableName tableAccessMethodClause?
    ;

vacuumStmt
    : KW_VACUUM ((KW_FULL? KW_FREEZE? optVerbose? analyzeKeyword?) | (explainOptionList)?) vacuumRelationList?
    ;

analyzeStmt
    : analyzeKeyword (
        optVerbose?
        | OPEN_PAREN analyzeOptionElem (COMMA analyzeOptionElem)* CLOSE_PAREN
    ) vacuumRelationList?
    ;

analyzeKeyword
    : KW_ANALYZE
    | KW_ANALYSE
    ;

vacAnalyzeOptionElem
    : (nonReservedWord | analyzeKeyword) (booleanOrString | numericOnly)?
    ;

analyzeOptionElem
    : (KW_SKIP_LOCKED | KW_VERBOSE) (KW_FALSE | KW_TRUE)?
    | KW_BUFFER_USAGE_LIMIT (numericOnly | stringConst)
    ; // support on v12+

optVerbose
    : KW_VERBOSE (KW_FALSE | KW_TRUE)?
    ;

vacuumRelation
    : tableName optColumnList?
    ;

vacuumRelationList
    : vacuumRelation (COMMA vacuumRelation)*
    ;

explainStmt
    : KW_EXPLAIN (explainOptionList | KW_VERBOSE? | (analyzeKeyword optVerbose?)?) explainableStmt
    ;

explainableStmt
    : selectStmt
    | insertStmt
    | updateStmt
    | deleteStmt
    | declareCursorStmt
    | createAsStmt
    | createMaterializedViewStmt
    | refreshMaterializedViewStmt
    | executeStmt
    ;

explainOptionList
    : OPEN_PAREN vacAnalyzeOptionElem (COMMA vacAnalyzeOptionElem)* CLOSE_PAREN
    ;

prepareStmt
    : KW_PREPARE colId prepTypeClause? KW_AS preParableStmt
    ;

prepTypeClause
    : OPEN_PAREN typename (COMMA typename)* CLOSE_PAREN
    ;

preParableStmt
    : selectStmt
    | insertStmt
    | updateStmt
    | deleteStmt
    | mergeStmt
    ;

executeStmt
    : KW_EXECUTE colId executeParamClause?
    | KW_CREATE optTemp? KW_TABLE ifNotExists? createAsTarget KW_AS KW_EXECUTE colId executeParamClause? optWithData?
    ;

executeParamClause
    : OPEN_PAREN exprList CLOSE_PAREN
    ;

dealLocateStmt
    : KW_DEALLOCATE KW_PREPARE? (colId | KW_ALL)
    ;

insertStmt
    : withClause? KW_INSERT KW_INTO tableName (KW_AS colId)? insertRest (
        KW_ON KW_CONFLICT (indexParams whereClause? | KW_ON KW_CONSTRAINT colId)? KW_DO (
            KW_UPDATE KW_SET setClauseList whereClause?
            | KW_NOTHING
        )
    )? returningClause? # insertStatement
    ;

insertRest
    : (OPEN_PAREN insertColumnList CLOSE_PAREN)? (KW_OVERRIDING (KW_USER | KW_SYSTEM) KW_VALUE)? (
        defaultValuesOrValues
        | selectStmt
    )
    ;

insertColumnList
    : insertColumnItem (COMMA insertColumnItem)*
    ;

insertColumnItem
    : columnName optIndirection
    ;

returningClause
    : KW_RETURNING targetList
    ;

deleteStmt
    : withClause? KW_DELETE KW_FROM relationExprOptAlias (KW_USING fromList)? whereOrCurrentClause? returningClause?
    ;

lockStmt
    : KW_LOCK KW_TABLE? relationExprList (
        KW_IN (
            (KW_ACCESS | KW_ROW) (KW_SHARE | KW_EXCLUSIVE)
            | KW_SHARE (KW_UPDATE KW_EXCLUSIVE | KW_ROW KW_EXCLUSIVE)?
            | KW_EXCLUSIVE
        ) KW_MODE
    )? KW_NOWAIT?
    ;

updateStmt
    : withClause? KW_UPDATE relationExprOptAlias KW_SET setClauseList fromClause? whereOrCurrentClause? returningClause?
    ;

setClauseList
    : setClause (COMMA setClause)*
    ;

setClause
    : insertColumnItem EQUAL expression
    | OPEN_PAREN insertColumnList CLOSE_PAREN EQUAL (
        KW_ROW? expression
        | OPEN_PAREN selectClause CLOSE_PAREN
    )
    ;

declareCursorStmt
    : KW_DECLARE colId (((KW_NO? KW_SCROLL) | KW_BINARY | KW_INSENSITIVE)*) KW_CURSOR (
        (KW_WITH | KW_WITHOUT) KW_HOLD
    )? KW_FOR selectStmt
    ;

/*
 TODO: why selectWithParens alternative is needed at all? i guess it because original byson
 grammar can choose selectStmt(2)->selectWithParens on only OPEN_PARENT/SELECT kewords at the
 begining of statement; (select * from tab); parse can go through selectStmt(
 )->selectNoParens(1)->selectClause(2)->selectWithParens(1)->selectNoParens(1)->selectClause(1)->simpleSelect
 instead of
 selectStmt(1)->selectNoParens(1)->selectClause(2)->selectWithParens(1)->selectNoParens(1)->selectClause(1)->simpleSelect
 all standard tests passed on both variants
 */

selectStmt
    : selectNoParens   # selectStatement
    | selectWithParens # selectStatement
    ;

selectWithParens
    : OPEN_PAREN (selectNoParens | selectWithParens) CLOSE_PAREN
    ;

selectNoParens
    : withClause? selectClause sortClause? (
        forLockingClause selectLimit?
        | selectLimit forLockingClause?
    )?
    ;

selectClause
    : simpleSelect
    | selectWithParens
    ;

simpleSelect
    : (
        KW_SELECT (KW_ALL? intoClause? | distinctClause?) sqlExpression
        | valuesClause
        | KW_TABLE relationExpr
        | selectWithParens setOperatorWithAllOrDistinct (simpleSelect | selectWithParens)
    ) (setOperatorWithAllOrDistinct ( simpleSelect | selectWithParens))*
    ;

setOperatorWithAllOrDistinct
    : (KW_UNION | KW_INTERSECT | KW_EXCEPT) (KW_ALL | KW_DISTINCT)?
    ;

withClause
    : KW_WITH KW_RECURSIVE? (commonTableExpr (COMMA commonTableExpr)*)
    ;

commonTableExpr
    : colId optColumnList? KW_AS (KW_NOT? KW_MATERIALIZED)? OPEN_PAREN preParableStmt CLOSE_PAREN searchClause? cycleClause?
    ;

searchClause
    : KW_SEARCH (KW_BREADTH | KW_DEPTH) KW_FIRST KW_BY columnList KW_SET columnName
    ;

cycleClause
    : KW_CYCLE columnList KW_SET columnName (KW_TO colId KW_DEFAULT colId)? KW_USING columnName
    ;

intoClause
    : KW_INTO (KW_STRICT? optTempTableName | exprList)
    ;

optTempTableName
    : (KW_LOCAL | KW_GLOBAL)? (KW_TEMPORARY | KW_TEMP) KW_TABLE? tableNameCreate
    | KW_UNLOGGED? KW_TABLE? tableNameCreate
    ;

distinctClause
    : KW_DISTINCT (KW_ON executeParamClause)?
    ;

sortClause
    : KW_ORDER KW_BY sortBy (COMMA sortBy)*
    ;

sortBy
    : columnExprNoParen (KW_USING qualAllOp | (KW_ASC | KW_DESC))? (KW_NULLS (KW_FIRST | KW_LAST))?
    ;

selectLimit
    : // https://www.postgresql.org/docs/16/sql-select.html#SQL-LIMIT
    offsetClause fetchClause?
    | (limitClause | fetchClause) offsetClause?
    ;

limitClause
    : KW_LIMIT (expression | KW_ALL) (COMMA expression)?
    ;

fetchClause
    : KW_FETCH (KW_FIRST | KW_NEXT) (
        selectFetchFirstValue? (KW_ROW | KW_ROWS) (KW_ONLY | KW_WITH KW_TIES)
    )
    ;

offsetClause
    : KW_OFFSET (selectFetchFirstValue (KW_ROW | KW_ROWS) | expression)
    ;

selectFetchFirstValue
    : (PLUS | MINUS) (Integral | Numeric)
    | primaryExpression
    ;

groupClause
    : KW_GROUP KW_BY (KW_ALL | KW_DISTINCT)? groupByList
    ;

groupByList
    : groupByItem (COMMA groupByItem)*
    ;

groupByItem
    : columnExprNoParen
    | OPEN_PAREN CLOSE_PAREN
    | (KW_CUBE | KW_ROLLUP)? OPEN_PAREN (columnExprNoParen (COMMA columnExprNoParen)*) CLOSE_PAREN
    | KW_GROUPING KW_SETS OPEN_PAREN groupByList CLOSE_PAREN
    ;

forLockingClause
    : (
        KW_FOR ((KW_NO KW_KEY)? KW_UPDATE | KW_KEY? KW_SHARE) (KW_OF qualifiedNameList)? (
            KW_NOWAIT
            | KW_SKIP KW_LOCKED
        )?
    )+
    | KW_FOR KW_READ KW_ONLY
    ;

valuesClause
    : KW_VALUES executeParamClause (COMMA executeParamClause)*
    ;

fromClause
    : KW_FROM fromList
    ;

fromList
    : tableRef (COMMA tableRef)*
    ;

tableRef
    : (
        (relationExpr | (KW_ONLY? viewName STAR? columnList? whereClause?)) aliasClause? tableSampleClause?
        | KW_LATERAL? (
            xmlTable aliasClause?
            | funcTable funcAliasClause?
            | selectWithParens aliasClause?
        )
        | OPEN_PAREN tableRef (
            KW_CROSS KW_JOIN tableRef
            | KW_NATURAL joinType? KW_JOIN tableRef
            | joinType? KW_JOIN tableRef joinQual
        )? CLOSE_PAREN aliasClause?
    ) (
        KW_CROSS KW_JOIN tableRef
        | KW_NATURAL joinType? KW_JOIN tableRef
        | joinType? KW_JOIN tableRef joinQual
    )*
    ;

aliasClause
    : KW_AS? alias=colId (OPEN_PAREN nameList CLOSE_PAREN)?
    ;

funcAliasClause
    : aliasClause
    | (KW_AS alias=colId? | alias=colId) OPEN_PAREN tableFuncElementList CLOSE_PAREN
    ;

joinType
    : (KW_FULL | KW_LEFT | KW_RIGHT | KW_INNER) KW_OUTER?
    ;

joinQual
    : KW_USING optColumnList
    | KW_ON expression
    ;

relationExpr
    : truncateTable
    | KW_ONLY ( tableName | OPEN_PAREN tableName CLOSE_PAREN)
    | KW_IN KW_SCHEMA (schemaName | KW_CURRENT_SCHEMA)
    ;

publicationRelationExpr
    : KW_TABLE truncateTable (optColumnList)? whereClause?
    | KW_TABLE KW_ONLY ( tableName | OPEN_PAREN tableName CLOSE_PAREN)
    | KW_TABLES KW_IN KW_SCHEMA (schemaName | KW_CURRENT_SCHEMA)
    ;

relationExprList
    : relationExpr (COMMA relationExpr)*
    ;

relationExprOptAlias
    : relationExpr (KW_AS? colId)?
    ;

tableSampleClause
    : KW_TABLESAMPLE functionName executeParamClause (
        KW_REPEATABLE OPEN_PAREN expression CLOSE_PAREN
    )?
    ;

funcTable
    : (
        funcExprWindowless
        | (KW_ROWS KW_FROM OPEN_PAREN rowsFromItem (COMMA rowsFromItem)* CLOSE_PAREN)
    ) (KW_WITH KW_ORDINALITY)?
    ;

rowsFromItem
    : funcExprWindowless (KW_AS OPEN_PAREN tableFuncElementList CLOSE_PAREN)?
    ;

whereClause
    : KW_WHERE columnExprNoParen
    ;

whereOrCurrentClause
    : KW_WHERE (KW_CURRENT KW_OF colId | expression)
    ;

tableFuncElementList
    : tableFuncElement (COMMA tableFuncElement)*
    ;

tableFuncElement
    : colId typename collateClause?
    ;

xmlTable
    : KW_XMLTABLE OPEN_PAREN (
        (KW_XMLNAMESPACES OPEN_PAREN xmlNamespaceEle (COMMA xmlNamespaceEle)* CLOSE_PAREN COMMA)? primaryExpression xmlExistsArgument KW_COLUMNS
            xmlTableColumnEl (COMMA xmlTableColumnEl)*
    ) CLOSE_PAREN
    ;

xmlTableColumnEl
    : colId (
        typename (((KW_DEFAULT | identifier) expression | KW_NOT? KW_NULL)+)?
        | KW_FOR KW_ORDINALITY
    )
    ;

xmlNamespaceEle
    : primaryExpression KW_AS colLabel
    | KW_DEFAULT primaryExpression
    ;

typename
    : KW_SETOF? simpleTypeName (
        ((OPEN_BRACKET Integral? CLOSE_BRACKET)*)
        | KW_ARRAY (OPEN_BRACKET Integral CLOSE_BRACKET)?
    )
    | qualifiedName PERCENT (KW_ROWTYPE | KW_TYPE)
    ;

simpleTypeName
    : typeFunctionName attrs? executeParamClause?
    | constTypeName
    | KW_INTERVAL ( optInterval? | optFloat)
    ;

constTypeName
    : numeric
    | bit
    | character
    | constDatetime
    ;

numeric
    : KW_INT
    | KW_INTEGER
    | KW_SMALLINT
    | KW_BIGINT
    | KW_REAL
    | KW_FLOAT optFloat?
    | KW_DOUBLE KW_PRECISION
    | (KW_DECIMAL | KW_DEC | KW_NUMERIC) executeParamClause?
    | KW_BOOLEAN
    ;

optFloat
    : OPEN_PAREN Integral CLOSE_PAREN
    ;

bit
    : KW_BIT KW_VARYING? executeParamClause?
    ;

character
    : (
        (KW_CHARACTER | KW_CHAR | KW_NCHAR) KW_VARYING?
        | KW_VARCHAR
        | KW_NATIONAL (KW_CHARACTER | KW_CHAR) KW_VARYING?
    ) (optFloat)?
    ;

constDatetime
    : (KW_TIMESTAMP | KW_TIME) (optFloat)? ((KW_WITH | KW_WITHOUT) KW_TIME KW_ZONE)?
    ;

optInterval
    : KW_MONTH
    | intervalSecond
    | KW_YEAR (KW_TO KW_MONTH)?
    | KW_DAY (KW_TO (KW_HOUR | KW_MINUTE | intervalSecond))?
    | KW_HOUR (KW_TO (KW_MINUTE | intervalSecond))?
    | KW_MINUTE (KW_TO intervalSecond)?
    ;

intervalSecond
    : KW_SECOND (optFloat)?
    ;

//precendence accroding to Table 4.2. Operator Precedence (highest to lowest)

//https://www.postgresql.org/docs/12/sql-syntax-lexical.html#SQL-PRECEDENCE

/*
 original version of a_expr, for info a_expr: primaryExpression //:: left PostgreSQL-style typecast | a_expr
 TYPECAST typename -- 1 | a_expr KW_COLLATE anyName -- 2 | a_expr AT TIME ZONE a_expr-- 3 //right
 unary plus, unary minus | (PLUS| MINUS) a_expr -- 4 //left exponentiation | a_expr CARET a_expr --
 5 //left multiplication, division, modulo | a_expr (STAR | SLASH | PERCENT) a_expr -- 6 //left
 addition, subtraction | a_expr (PLUS | MINUS) a_expr -- 7 //left all other native and user-defined
 operators | a_expr qualOp a_expr -- 8 | qualOp a_expr -- 9 //range containment, set membership,
 string matching BETWEEN IN LIKE ILIKE SIMILAR | a_expr NOT? (LIKE|ILIKE|SIMILAR TO|(BETWEEN
 SYMMETRIC?)) a_expr opt_escape? -- 10 //< > = <= >= <> comparison operators | a_expr (LT | GT |
 EQUAL | LESS_EQUALS | GREATER_EQUALS | NOT_EQUALS) a_expr -- 11 //IS ISNULL NOTNULL IS TRUE, IS
 FALSE, IS NULL, IS KW_DISTINCT FROM, etc | a_expr IS NOT? ( NULL_P |TRUE_P |FALSE_P |UNKNOWN |KW_DISTINCT
 KW_FROM a_expr |OF OPEN_PAREN type_name_list CLOSE_PAREN |DOCUMENT_P |unicodeNormalForm? NORMALIZED ) --
 12 | a_expr (ISNULL|NOTNULL) -- 13 | row OVERLAPS row -- 14 //NOT right logical negation | NOT
 a_expr -- 15 //AND left logical conjunction | a_expr AND a_expr -- 16 //OR left logical disjunction
 | a_expr OR a_expr -- 17 | a_expr (LESS_LESS|GREATER_GREATER) a_expr -- 18 | a_expr qualOp -- 19 |
 a_expr NOT? IN_P in_expr -- 20 | a_expr subqueryOperator subType (selectWithParens|OPEN_PAREN a_expr
 CLOSE_PAREN) -- 21 | UNIQUE selectWithParens -- 22 | KW_DEFAULT -- 23 ;
 */

comparisonOperator
    : LT
    | GT
    | EQUAL
    | LESS_EQUALS
    | GREATER_EQUALS
    | NOT_EQUALS
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

predicate[antlr.ParserRuleContext value]
    : comparisonOperator right= valueExpression # comparison
    | comparisonOperator subqueryOperator subType (
        selectWithParens
        | OPEN_PAREN expression CLOSE_PAREN
    )                                                                         # quantifiedComparison
    | KW_NOT? KW_BETWEEN lower= valueExpression KW_AND upper= valueExpression # between
    | KW_NOT? KW_IN OPEN_PAREN expression (COMMA expression)* CLOSE_PAREN     # inList
    | KW_NOT? KW_IN selectWithParens                                          # inSubquery
    | KW_NOT? (KW_LIKE | KW_ILIKE | KW_SIMILAR KW_TO | KW_BETWEEN KW_SYMMETRIC?) pattern= valueExpression (
        KW_ESCAPE escape= valueExpression
    )?                                                         # like
    | KW_IS KW_NOT? KW_NULL                                    # nullPredicate
    | KW_IS KW_NOT? KW_DISTINCT KW_FROM right= valueExpression # distinctFrom
    ;

valueExpression
    : primaryExpression                                                               # valueExpressionDefault
    | valueExpression KW_AT KW_TIME KW_ZONE expression                                # atTimeZone
    | operator= (MINUS | PLUS) valueExpression                                        # arithmeticUnary
    | left= valueExpression operator= (STAR | SLASH | PERCENT) right= valueExpression # arithmeticBinary
    | left= valueExpression operator= (PLUS | MINUS) right= valueExpression           # arithmeticBinary
    | left= valueExpression CARET right= valueExpression                              # concatenation
    ;

primaryExpression
    : (KW_EXISTS | KW_UNIQUE) selectWithParens
    | KW_ARRAY (selectWithParens | arrayExpr)
    | PARAM optIndirection
    | KW_GROUPING executeParamClause
    | Integral
    | Numeric
    | BinaryStringConstant
    | HexadecimalStringConstant
    | functionName (stringConst | OPEN_PAREN funcArgList sortClause? CLOSE_PAREN stringConst)
    | constTypeName? stringConst
    | KW_INTERVAL ( stringConst optInterval? | optFloat stringConst)
    | KW_TRUE
    | KW_FALSE
    | KW_NULL
    | PLSQLVARIABLENAME
    | OPEN_PAREN a_expr_in_parens= expression CLOSE_PAREN optIndirection
    | KW_CASE expression? when_clause+ (KW_ELSE expression)? KW_END
    | func_expr
    | selectWithParens indirection?
    | explicitRow
    | OPEN_PAREN expression COMMA exprList CLOSE_PAREN
    | row KW_OVERLAPS row
    | columnNamePath
    | qualifiedName
    | primaryExpression TYPECAST typename
    | (PLUS | MINUS) primaryExpression
    | primaryExpression qualOp primaryExpression?
    | primaryExpression mathOp primaryExpression
    | qualOp primaryExpression
    | primaryExpression KW_IS KW_NOT? (
        KW_DISTINCT KW_FROM primaryExpression
        | KW_OF prepTypeClause
        | KW_DOCUMENT
    )
    ;

funcApplication
    : functionName OPEN_PAREN (
        funcArgList (COMMA KW_VARIADIC funcArgExpr)? sortClause?
        | KW_VARIADIC funcArgExpr sortClause?
        | (KW_ALL | KW_DISTINCT) funcArgList sortClause?
        | STAR
    )? CLOSE_PAREN
    ;

func_expr
    : funcApplication (KW_WITHIN KW_GROUP OPEN_PAREN sortClause CLOSE_PAREN)? (
        KW_FILTER OPEN_PAREN KW_WHERE expression CLOSE_PAREN
    )? (KW_OVER (windowSpecification | colId))?
    | funcExprCommonSubExpr
    ;

funcExprWindowless
    : funcApplication
    | funcExprCommonSubExpr
    ;

funcExprCommonSubExpr
    : KW_COLLATION KW_FOR OPEN_PAREN expression CLOSE_PAREN
    | KW_CURRENT_DATE
    | (KW_CURRENT_TIME | KW_CURRENT_TIMESTAMP | KW_LOCALTIME | KW_LOCALTIMESTAMP) (optFloat)?
    | KW_CURRENT_ROLE
    | KW_CURRENT_USER
    | KW_SESSION_USER
    | KW_USER
    | KW_CURRENT_CATALOG
    | KW_CURRENT_SCHEMA
    | (KW_CAST | KW_TREAT) OPEN_PAREN expression KW_AS typename CLOSE_PAREN
    | KW_EXTRACT OPEN_PAREN (extractArg KW_FROM expression)? CLOSE_PAREN
    | KW_NORMALIZE OPEN_PAREN expression (COMMA unicodeNormalForm)? CLOSE_PAREN
    | KW_OVERLAY OPEN_PAREN (
        expression KW_PLACING expression KW_FROM expression (KW_FOR expression)?
    ) CLOSE_PAREN
    | KW_POSITION OPEN_PAREN (primaryExpression KW_IN primaryExpression)? CLOSE_PAREN
    | KW_SUBSTRING OPEN_PAREN substrList? CLOSE_PAREN
    | KW_TRIM OPEN_PAREN (KW_BOTH | KW_LEADING | KW_TRAILING)? ((expression? KW_FROM)? exprList) CLOSE_PAREN
    | KW_NULLIF OPEN_PAREN expression COMMA expression CLOSE_PAREN
    | (KW_COALESCE | KW_GREATEST | KW_LEAST | KW_XMLCONCAT) executeParamClause
    | KW_XMLELEMENT OPEN_PAREN KW_NAME colLabel (
        COMMA ((KW_XMLATTRIBUTES OPEN_PAREN xmlAttributeList CLOSE_PAREN) | exprList)
    )? CLOSE_PAREN
    | KW_XMLEXISTS OPEN_PAREN primaryExpression xmlExistsArgument CLOSE_PAREN
    | KW_XMLFOREST OPEN_PAREN xmlAttributeList CLOSE_PAREN
    | KW_XMLPARSE OPEN_PAREN documentOrContent expression ((KW_PRESERVE | KW_STRIP) KW_WHITESPACE)? CLOSE_PAREN
    | KW_XMLPI OPEN_PAREN KW_NAME colLabel (COMMA expression)? CLOSE_PAREN
    | KW_XMLROOT OPEN_PAREN KW_XML expression COMMA KW_VERSION (( KW_NO KW_VALUE) | expression) (
        COMMA KW_STANDALONE ((KW_NO? KW_VALUE) | KW_YES)
    )? CLOSE_PAREN
    | KW_XMLSERIALIZE OPEN_PAREN documentOrContent expression KW_AS simpleTypeName CLOSE_PAREN
    ;

xmlAttributeList
    : xmlAttributeEl (COMMA xmlAttributeEl)*
    ;

xmlAttributeEl
    : expression (KW_AS colLabel)?
    ;

documentOrContent
    : KW_DOCUMENT
    | KW_CONTENT
    ;

xmlExistsArgument
    : KW_PASSING xmlPassingMech? primaryExpression xmlPassingMech?
    ;

xmlPassingMech
    : KW_BY (KW_REF | KW_VALUE)
    ;

windowClause
    : KW_WINDOW windowDefinition (COMMA windowDefinition)*
    ;

havingClause
    : KW_HAVING expression
    ;

windowDefinition
    : colId KW_AS windowSpecification
    ;

over_clause
    : KW_OVER (windowSpecification | colId)
    ;

windowSpecification
    : OPEN_PAREN colId? (KW_PARTITION KW_BY exprList)? sortClause? optFrameClause? CLOSE_PAREN
    ;

optFrameClause
    : (KW_RANGE | KW_ROWS | KW_GROUPS) ((KW_BETWEEN frameBound KW_AND)? frameBound) (
        KW_EXCLUDE (KW_CURRENT KW_ROW | KW_GROUP | KW_TIES | KW_NO KW_OTHERS)
    )?
    ;

frameBound
    : (KW_UNBOUNDED | expression) (KW_PRECEDING | KW_FOLLOWING)
    | KW_CURRENT KW_ROW
    ;

row
    : explicitRow
    | OPEN_PAREN exprList COMMA expression CLOSE_PAREN
    ;

explicitRow
    : KW_ROW OPEN_PAREN exprList? CLOSE_PAREN
    ;

subType
    : KW_ANY
    | KW_SOME
    | KW_ALL
    ;

allOp
    : Operator
    | mathOp
    ;

mathOp
    : PLUS
    | MINUS
    | STAR
    | SLASH
    | PERCENT
    | CARET
    | LT
    | GT
    | EQUAL
    | LESS_EQUALS
    | GREATER_EQUALS
    | NOT_EQUALS
    ;

qualOp
    : Operator
    | KW_OPERATOR OPEN_PAREN anyOperator CLOSE_PAREN
    ;

qualAllOp
    : allOp
    | KW_OPERATOR OPEN_PAREN anyOperator CLOSE_PAREN
    ;

subqueryOperator
    : qualAllOp
    | KW_NOT? (KW_LIKE | KW_ILIKE)
    ;

exprList
    : expression (COMMA expression)*
    ;

columnExpr
    : (OPEN_PAREN expression CLOSE_PAREN)
    | columnName
    ;

columnExprNoParen
    : expression
    | columnName
    ;

funcArgList
    : funcArgExpr (COMMA funcArgExpr)*
    ;

funcArgExpr
    : columnName
    | expression
    | typeFunctionName ((COLON_EQUALS | EQUALS_GREATER) expression)?
    ;

arrayExpr
    : OPEN_BRACKET (exprList | (arrayExpr (COMMA arrayExpr)*))? CLOSE_BRACKET
    ;

extractArg
    : identifier
    | KW_YEAR
    | KW_MONTH
    | KW_DAY
    | KW_HOUR
    | KW_MINUTE
    | KW_SECOND
    | stringConst
    ;

unicodeNormalForm
    : KW_NFC
    | KW_NFD
    | KW_NFKC
    | KW_NFKD
    ;

substrList
    : expression KW_FROM expression (KW_FOR expression)?
    | expression KW_FOR expression (KW_FROM expression)?
    | expression KW_SIMILAR expression KW_ESCAPE expression
    | exprList
    ;

when_clause
    : KW_WHEN expression KW_THEN expression
    ;

indirectionEl
    : DOT (colLabel | STAR)
    | OPEN_BRACKET (expression | expression? COLON expression?) CLOSE_BRACKET
    ;

indirection
    : indirectionEl+
    ;

optIndirection
    : indirectionEl*
    ;

targetList
    : targetEl (COMMA targetEl)*
    ;

targetEl
    : columnExprNoParen (KW_AS colLabel | identifier |) # target_label
    | STAR                                              # target_star
    ;

qualifiedNameList
    : qualifiedName (COMMA qualifiedName)*
    ;

tableNameList
    : tableName (COMMA tableName)*
    ;

schemaNameList
    : schemaName (COMMA schemaName)*
    ;

databaseNameList
    : databaseName (COMMA databaseName)*
    ;

tableSpaceNameCreate
    : qualifiedName
    ;

tableSpaceName
    : qualifiedName
    ;

tableNameCreate
    : qualifiedName
    ;

tableName
    : qualifiedName
    ;

viewNameCreate
    : qualifiedName
    ;

viewName
    : anyName
    ;

qualifiedName
    : colId indirection?
    ;

tableSpaceNameList
    : tableSpaceName (COMMA tableSpaceName)*
    ;

nameList
    : colId (COMMA colId)*
    ;

databaseNameCreate
    : anyName
    ;

databaseName
    : anyName
    ;

schemaName
    : anyName
    ;

routineNameCreate
    : colId
    ;

routineName
    : colId
    ;

procedureName
    : typeFunctionName
    | colId indirection
    ;

procedureNameCreate
    : typeFunctionName
    | colId indirection
    ;

columnName
    : colId optIndirection
    | {this.shouldMatchEmpty()}?
    ;

columnNamePath
    : colId optIndirection
    ;

columnNameCreate
    : colId
    ;

functionNameCreate
    : typeFunctionName
    | colId indirection
    ;

functionName
    : typeFunctionName
    | colId indirection
    ;

stringConst
    : anysconst (KW_UESCAPE anysconst)?
    ;

anysconst
    : StringConstant
    | UnicodeEscapeStringConstant
    | BeginDollarStringConstant DollarText* EndDollarStringConstant
    | EscapeStringConstant
    ;

signedConst
    : (PLUS | MINUS)? Integral
    ;

roleSpec
    : nonReservedWord
    | KW_CURRENT_USER
    | KW_CURRENT_ROLE
    | KW_SESSION_USER
    | KW_PUBLIC
    ;

roleList
    : roleSpec (COMMA roleSpec)*
    ;

colId
    : identifier
    | colNameKeyword
    ;

typeFunctionName
    : identifier
    | typeFuncNameKeyword
    ;

nonReservedWord
    : identifier
    | colNameKeyword
    | typeFuncNameKeyword
    ;

colLabel
    : identifier
    | colNameKeyword
    | typeFuncNameKeyword
    | reservedKeyword
    ;

identifier
    : Identifier (KW_UESCAPE anysconst)?
    | stringConst
    | QuotedIdentifier
    | UnicodeQuotedIdentifier
    | PLSQLVARIABLENAME
    | PLSQLIDENTIFIER
    | unreservedKeyword
    ;

unreservedKeyword
    : KW_ABORT
    | KW_ABSOLUTE
    | KW_ACCESS
    | KW_ACTION
    | KW_ADD
    | KW_ADMIN
    | KW_AFTER
    | KW_AGGREGATE
    | KW_ALSO
    | KW_ALTER
    | KW_ALWAYS
    | KW_ASSERTION
    | KW_ASSIGNMENT
    | KW_AT
    | KW_ATTACH
    | KW_ATTRIBUTE
    | KW_BACKWARD
    | KW_BEFORE
    | KW_BEGIN
    | KW_BUFFER_USAGE_LIMIT
    | KW_BY
    | KW_CACHE
    | KW_CALL
    | KW_CALLED
    | KW_CASCADE
    | KW_CASCADED
    | KW_CATALOG
    | KW_CHAIN
    | KW_CHARACTERISTICS
    | KW_CHECKPOINT
    | KW_CLASS
    | KW_CLOSE
    | KW_CLUSTER
    | KW_COLUMNS
    | KW_COMMENT
    | KW_COMMENTS
    | KW_COMMIT
    | KW_COMMITTED
    | KW_CONFIGURATION
    | KW_CONFLICT
    | KW_CONNECTION
    | KW_CONSTRAINTS
    | KW_CONTENT
    | KW_CONTINUE
    | KW_CONVERSION
    | KW_COPY
    | KW_COST
    | KW_CSV
    | KW_CUBE
    | KW_CURRENT
    | KW_CURSOR
    | KW_CYCLE
    | KW_DATA
    | KW_DATABASE
    | KW_DAY
    | KW_DEALLOCATE
    | KW_DECLARE
    | KW_DEFAULTS
    | KW_DEFERRED
    | KW_DEFINER
    | KW_DELETE
    | KW_DELIMITER
    | KW_DELIMITERS
    | KW_DEPENDS
    | KW_DETACH
    | KW_DICTIONARY
    | KW_DISABLE
    | KW_DISCARD
    | KW_DOCUMENT
    | KW_DOMAIN
    | KW_DOUBLE
    | KW_DROP
    | KW_EACH
    | KW_ENABLE
    | KW_ENCODING
    | KW_ENCRYPTED
    | KW_ENUM
    | KW_ESCAPE
    | KW_EVENT
    | KW_EXCLUDE
    | KW_EXCLUDING
    | KW_EXCLUSIVE
    | KW_EXECUTE
    | KW_EXPLAIN
    | KW_EXPRESSION
    | KW_EXTENSION
    | KW_EXTERNAL
    | KW_FAMILY
    | KW_FILTER
    | KW_FIRST
    | KW_FOLLOWING
    | KW_FORCE
    | KW_FORWARD
    | KW_FUNCTION
    | KW_FUNCTIONS
    | KW_GENERATED
    | KW_GLOBAL
    | KW_GRANTED
    | KW_GROUPS
    | KW_HANDLER
    | KW_HEADER
    | KW_HOLD
    | KW_HOUR
    | KW_IDENTITY
    | KW_IF
    | KW_IMMEDIATE
    | KW_IMMUTABLE
    | KW_IMPLICIT
    | KW_IMPORT
    | KW_INCLUDE
    | KW_INCLUDING
    | KW_INCREMENT
    | KW_INDEX
    | KW_INDEXES
    | KW_INHERIT
    | KW_INHERITS
    | KW_INLINE
    | KW_INPUT
    | KW_INSENSITIVE
    | KW_INSERT
    | KW_INSTEAD
    | KW_INVOKER
    | KW_ISOLATION
    | KW_KEY
    | KW_LABEL
    | KW_LANGUAGE
    | KW_LARGE
    | KW_LAST
    | KW_LEAKPROOF
    | KW_LEVEL
    | KW_LISTEN
    | KW_LOAD
    | KW_LOCAL
    | KW_LOCATION
    | KW_LOCK
    | KW_LOCKED
    | KW_LOGGED
    | KW_MAPPING
    | KW_MATCH
    | KW_MATERIALIZED
    | KW_MAXVALUE
    | KW_METHOD
    | KW_MINUTE
    | KW_MINVALUE
    | KW_MODE
    | KW_MONTH
    | KW_MOVE
    | KW_NAME
    | KW_NAMES
    | KW_NEW
    | KW_NEXT
    | KW_NFC
    | KW_NFD
    | KW_NFKC
    | KW_NFKD
    | KW_NO
    | KW_NORMALIZED
    | KW_NOTHING
    | KW_NOTIFY
    | KW_NOWAIT
    | KW_NULLS
    | KW_OBJECT
    | KW_OF
    | KW_OFF
    | KW_OIDS
    | KW_OLD
    | KW_OPERATOR
    | KW_OPTION
    | KW_OPTIONS
    | KW_ORDINALITY
    | KW_OTHERS
    | KW_OVER
    | KW_OVERRIDING
    | KW_OWNED
    | KW_OWNER
    | KW_PARALLEL
    | KW_PARSER
    | KW_PARTIAL
    | KW_PARTITION
    | KW_PASSING
    | KW_PASSWORD
    | KW_PLANS
    | KW_POLICY
    | KW_PRECEDING
    | KW_PREPARE
    | KW_PREPARED
    | KW_PRESERVE
    | KW_PRIOR
    | KW_PRIVILEGES
    | KW_PROCEDURAL
    | KW_PROCEDURE
    | KW_PROCEDURES
    | KW_PROGRAM
    | KW_PUBLICATION
    | KW_QUOTE
    | KW_RANGE
    | KW_READ
    | KW_REASSIGN
    | KW_RECHECK
    | KW_RECURSIVE
    | KW_REF
    | KW_REFERENCING
    | KW_REFRESH
    | KW_REINDEX
    | KW_RELATIVE
    | KW_RELEASE
    | KW_RENAME
    | KW_REPEATABLE
    | KW_REPLACE
    | KW_REPLICA
    | KW_RESET
    | KW_RESTART
    | KW_RESTRICT
    | KW_RETURNS
    | KW_REVOKE
    | KW_ROLE
    | KW_ROLLBACK
    | KW_ROLLUP
    | KW_ROUTINE
    | KW_ROUTINES
    | KW_ROWS
    | KW_RULE
    | KW_SAVEPOINT
    | KW_SCHEMA
    | KW_SCHEMAS
    | KW_SCROLL
    | KW_SEARCH
    | KW_SECOND
    | KW_SECURITY
    | KW_SEQUENCE
    | KW_SEQUENCES
    | KW_SERIALIZABLE
    | KW_SERVER
    | KW_SESSION
    | KW_SET
    | KW_SETS
    | KW_SHARE
    | KW_SHOW
    | KW_SIMPLE
    | KW_SKIP
    | KW_SKIP_LOCKED
    | KW_SNAPSHOT
    | KW_SQL
    | KW_STABLE
    | KW_STANDALONE
    | KW_START
    | KW_STATEMENT
    | KW_STATISTICS
    | KW_STDIN
    | KW_STDOUT
    | KW_STORAGE
    | KW_STORED
    | KW_STRICT
    | KW_STRIP
    | KW_SUBSCRIPTION
    | KW_SUPPORT
    | KW_SYSID
    | KW_SYSTEM
    | KW_TABLES
    | KW_TABLESPACE
    | KW_TEMP
    | KW_TEMPLATE
    | KW_TEMPORARY
    | KW_TEXT
    | KW_TIES
    | KW_TRANSACTION
    | KW_TRANSFORM
    | KW_TRIGGER
    | KW_TRUNCATE
    | KW_TRUSTED
    | KW_TYPE
    | KW_TYPES
    | KW_UESCAPE
    | KW_UNBOUNDED
    | KW_UNCOMMITTED
    | KW_UNENCRYPTED
    | KW_UNKNOWN
    | KW_UNLISTEN
    | KW_UNLOGGED
    | KW_UNTIL
    | KW_UPDATE
    | KW_VACUUM
    | KW_VALID
    | KW_VALIDATE
    | KW_VALIDATOR
    | KW_VALUE
    | KW_VARYING
    | KW_VERSION
    | KW_VIEW
    | KW_VIEWS
    | KW_VOLATILE
    | KW_WHITESPACE
    | KW_WITHIN
    | KW_WITHOUT
    | KW_WORK
    | KW_WRAPPER
    | KW_WRITE
    | KW_XML
    | KW_YEAR
    | KW_YES
    | KW_ZONE
    | KW_ALIAS
    | KW_ASSERT
    | KW_CONSTANT
    | KW_DEBUG
    | KW_DEFAULT
    | KW_DIAGNOSTICS
    | KW_DUMP
    | KW_ELSIF
    | KW_ERROR
    | KW_EXCEPTION
    | KW_EXIT
    | KW_GET
    | KW_INFO
    | KW_IS
    | KW_LOG
    | KW_NOTICE
    | KW_OPEN
    | KW_PUBLIC
    | KW_PERFORM
    | KW_PRINT_STRICT_PARAMS
    | KW_QUERY
    | KW_RAISE
    | KW_RETURN
    | KW_REVERSE
    | KW_ROWTYPE
    | KW_SLICE
    | KW_SQLSTATE
    | KW_STACKED
    | KW_USE_COLUMN
    | KW_USE_VARIABLE
    | KW_VARIABLE_CONFLICT
    | KW_WARNING
    | KW_OUTER
    ;

colNameKeyword
    : KW_BETWEEN
    | KW_BIGINT
    | bit
    | KW_BOOLEAN
    | KW_CHAR
    | character
    | KW_COALESCE
    | KW_DEC
    | KW_DECIMAL
    | KW_EXISTS
    | KW_EXTRACT
    | KW_FLOAT
    | KW_GREATEST
    | KW_GROUPING
    | KW_INOUT
    | KW_INT
    | KW_INTEGER
    | KW_INTERVAL
    | KW_LEAST
    | KW_NATIONAL
    | KW_NCHAR
    | KW_NONE
    | KW_NORMALIZE
    | KW_NULLIF
    | numeric
    | KW_OUT
    | KW_OVERLAY
    | KW_POSITION
    | KW_PRECISION
    | KW_REAL
    | KW_ROW
    | KW_SETOF
    | KW_SMALLINT
    | KW_SUBSTRING
    | KW_TIME
    | KW_TIMESTAMP
    | KW_TREAT
    | KW_TRIM
    | KW_VALUES
    | KW_VARCHAR
    | KW_XMLATTRIBUTES
    | KW_XMLCONCAT
    | KW_XMLELEMENT
    | KW_XMLEXISTS
    | KW_XMLFOREST
    | KW_XMLNAMESPACES
    | KW_XMLPARSE
    | KW_XMLPI
    | KW_XMLROOT
    | KW_XMLSERIALIZE
    | KW_XMLTABLE
    ;

typeFuncNameKeyword
    : KW_AUTHORIZATION
    | KW_BINARY
    | KW_COLLATION
    | KW_CONCURRENTLY
    | KW_CROSS
    | KW_CURRENT_SCHEMA
    | KW_FREEZE
    | KW_FULL
    | KW_ILIKE
    | KW_INNER
    | KW_IS
    | KW_ISNULL
    | KW_JOIN
    | KW_LEFT
    | KW_LIKE
    | KW_NATURAL
    | KW_NOTNULL
    | KW_OUTER
    | KW_OVERLAPS
    | KW_RIGHT
    | KW_SIMILAR
    | KW_TABLESAMPLE
    | KW_VERBOSE
    ;

reservedKeyword
    : KW_ALL
    | KW_ANALYSE
    | KW_ANALYZE
    | KW_AND
    | KW_ANY
    | KW_ARRAY
    | KW_AS
    | KW_ASC
    | KW_ASYMMETRIC
    | KW_BOTH
    | KW_CASE
    | KW_CAST
    | KW_CHECK
    | KW_COLLATE
    | KW_COLUMN
    | KW_CONSTRAINT
    | KW_CREATE
    | KW_CURRENT_CATALOG
    | KW_CURRENT_DATE
    | KW_CURRENT_ROLE
    | KW_CURRENT_TIME
    | KW_CURRENT_TIMESTAMP
    | KW_CURRENT_USER
    //                 | KW_DEFAULT
    | KW_DEFERRABLE
    | KW_DESC
    | KW_DISTINCT
    | KW_DO
    | KW_ELSE
    | KW_END
    | KW_EXCEPT
    | KW_FALSE
    | KW_FETCH
    | KW_FOR
    | KW_FOREIGN
    | KW_FROM
    | KW_GRANT
    | KW_GROUP
    | KW_HAVING
    | KW_IN
    | KW_INITIALLY
    | KW_INTERSECT
    /*
	 from pl_gram.y, line ~2982 Fortunately, INTO is a fully reserved word in the main grammar, so
	 at least we need not worry about it appearing as an identifier.
	 */

    //                 | INTO
    | KW_LATERAL
    | KW_LEADING
    | KW_LIMIT
    | KW_LOCALTIME
    | KW_LOCALTIMESTAMP
    | KW_NOT
    | KW_NULL
    | KW_OFFSET
    | KW_ON
    | KW_ONLY
    | KW_OR
    | KW_ORDER
    | KW_PLACING
    | KW_PRIMARY
    | KW_REFERENCES
    | KW_RETURNING
    | KW_SELECT
    | KW_SESSION_USER
    | KW_SOME
    | KW_SYMMETRIC
    | KW_TABLE
    | KW_THEN
    | KW_TO
    | KW_TRAILING
    | KW_TRUE
    | KW_UNION
    | KW_UNIQUE
    | KW_USER
    | KW_USING
    | KW_VARIADIC
    | KW_WHEN
    | KW_WHERE
    | KW_WINDOW
    | KW_WITH
    ;

// exceptionSect means opt_exception_sect in original grammar, don't be confused!

plBlock
    : (labelDecl? (KW_DECLARE ((declStatement | KW_DECLARE | labelDecl)+)?)?) KW_BEGIN procStmt* exceptionSect? KW_END anyIdentifier?
    ;

labelDecl
    : LESS_LESS anyIdentifier GREATER_GREATER
    ;

declStatement
    : anyIdentifier (
        KW_ALIAS KW_FOR (PARAM | colId)
        | KW_CONSTANT? typename (collateClause)? (KW_NOT KW_NULL)? (
            ( assignOperator | KW_DEFAULT) sqlExpression
        )?
        | (KW_NO? KW_SCROLL)? KW_CURSOR (
            OPEN_PAREN declCursorArg (COMMA declCursorArg)* CLOSE_PAREN
        )? (KW_IS | KW_FOR) selectStmt
    ) SEMI
    ;

declCursorArg
    : anyIdentifier typename
    ;

assignOperator
    : EQUAL
    | COLON_EQUALS
    ;

procStmt
    : plBlock SEMI
    | stmtReturn
    | stmtRaise
    | stmtAssign
    | stmtIf
    | stmtCase
    | stmtLoopWhileFor
    | stmtForeach
    | stmtExit
    | stmtAssert
    | stmtExecsql
    | stmtDynexecute
    | stmtPerform
    | stmtCall
    | stmtGetdiag
    | stmtOpen
    | stmtFetch
    | stmtMove
    | stmtClose
    | stmtNull
    | stmtCommitOrRollback
    | stmtSet
    ;

stmtPerform
    : KW_PERFORM sqlExpression SEMI
    ;

stmtCall
    : KW_CALL anyIdentifier (OPEN_PAREN exprList? CLOSE_PAREN SEMI)?
    | KW_DO anyIdentifier OPEN_PAREN exprList? CLOSE_PAREN SEMI
    ;

stmtAssign
    : assignVar assignOperator sqlExpression SEMI
    ;

stmtGetdiag
    : KW_GET (KW_CURRENT | KW_STACKED)? KW_DIAGNOSTICS (getdiagListItem (COMMA getdiagListItem)*) SEMI
    ;

getdiagListItem
    : assignVar assignOperator colId
    ;

assignVar
    : (anyName | PARAM) (OPEN_BRACKET expression CLOSE_BRACKET)*
    ;

stmtIf
    : KW_IF sqlExpression KW_THEN procStmt* ((KW_ELSIF expression KW_THEN procStmt*)*) stmtElse? KW_END KW_IF SEMI
    ;

stmtElse
    : KW_ELSE procStmt*
    ;

stmtCase
    : KW_CASE sqlExpression? (KW_WHEN exprList KW_THEN procStmt*)+ stmtElse? KW_END KW_CASE SEMI
    ;

stmtLoopWhileFor
    : labelDecl? ((KW_WHILE expression) | (KW_FOR forControl))? loopBody
    ;

//TODO: rewrite using read_sql_expression logic?

forControl
    : anyNameList KW_IN (
        colId executeParamClause?
        | selectStmt
        | explainStmt
        | KW_EXECUTE expression (KW_USING exprList)?
        | KW_REVERSE? expression DOT_DOT expression (KW_BY expression)?
    )
    ;

stmtForeach
    : labelDecl? KW_FOREACH anyNameList (KW_SLICE Integral)? KW_IN KW_ARRAY expression loopBody
    ;

stmtExit
    : (KW_EXIT | KW_CONTINUE) anyIdentifier? (KW_WHEN sqlExpression)? SEMI
    ;

//todo implement RETURN statement according to initial grammar line 1754

stmtReturn
    : KW_RETURN (
        KW_NEXT sqlExpression
        | KW_QUERY ( KW_EXECUTE expression KW_USING exprList | selectStmt)
        | sqlExpression?
    ) SEMI
    ;

//https://www.postgresql.org/docs/current/plpgsql-errors-and-messages.html

//RAISE [ level ] 'format' [, expression [, ... ]] [ USING option = expression [, ... ] ];

//RAISE [ level ] condition_name [ USING option = expression [, ... ] ];

//RAISE [ level ] SQLSTATE 'sqlstate' [ USING option = expression [, ... ] ];

//RAISE [ level ] USING option = expression [, ... ];

//RAISE ;

stmtRaise
    : KW_RAISE (
        (KW_DEBUG | KW_LOG | KW_INFO | KW_NOTICE | KW_WARNING | KW_EXCEPTION)? (
            identifier
            | (KW_SQLSTATE stringConst)
            | (stringConst ((COMMA expression)+)?)
        )? (KW_USING (optRaiseUsingElem (COMMA optRaiseUsingElem)*))? SEMI
    )?
    ;

optRaiseUsingElem
    : identifier EQUAL expression
    ;

stmtAssert
    : KW_ASSERT sqlExpression (COMMA sqlExpression)? SEMI
    ;

loopBody
    : KW_LOOP procStmt* KW_END KW_LOOP anyIdentifier? SEMI
    ;

//TODO: looks like all other statements like INSERT/SELECT/UPDATE/DELETE are handled here;

//pls take a look at original grammar

stmtExecsql
    : stmt optExecuteInto? SEMI
    ;

//https://www.postgresql.org/docs/current/plpgsql-statements.html#PLPGSQL-STATEMENTS-SQL-NORESULT

//EXECUTE command-string [ INTO [STRICT] target ] [ USING expression [, ... ] ];

stmtDynexecute
    : KW_EXECUTE expression (
        /*this is silly, but i have to time to find nice way to code */ optExecuteInto? (
            KW_USING exprList
        )?
        | (KW_USING exprList)? optExecuteInto?
        | //TODO
    ) SEMI
    ;

optExecuteInto
    : KW_INTO KW_STRICT? exprList
    ;

//https://www.postgresql.org/docs/current/plpgsql-cursors.html#PLPGSQL-CURSOR-OPENING

//OPEN unbound_cursorvar [ [ NO ] SCROLL ] KW_FOR query;

//OPEN unbound_cursorvar [ [ NO ] SCROLL ] KW_FOR EXECUTE query_string

//                                     [ USING expression [, ... ] ];

//OPEN bound_cursorvar [ ( [ argument_name := ] argument_value [, ...] ) ];

stmtOpen
    : KW_OPEN (
        cursorVariable (KW_NO? KW_SCROLL)? KW_FOR (
            selectStmt
            | KW_EXECUTE sqlExpression (KW_USING exprList)?
        )
        | colId (OPEN_PAREN (optOpenBoundListItem (COMMA optOpenBoundListItem)*) CLOSE_PAREN)?
    ) SEMI
    ;

optOpenBoundListItem
    : (colId COLON_EQUALS)? expression
    ;

//https://www.postgresql.org/docs/current/plpgsql-cursors.html#PLPGSQL-CURSOR-OPENING

//FETCH [ direction { KW_FROM | IN } ] cursor INTO target;

stmtFetch
    : KW_FETCH direction= optFetchFirection? fromIn? cursorVariable KW_INTO exprList SEMI
    ;

optFetchFirection
    : KW_NEXT
    | KW_PRIOR
    | KW_FIRST
    | KW_LAST
    | (KW_ABSOLUTE | KW_RELATIVE)? expression
    | KW_ALL
    | (KW_FORWARD | KW_BACKWARD) (expression | KW_ALL)?
    ;

//https://www.postgresql.org/docs/current/plpgsql-cursors.html#PLPGSQL-CURSOR-OPENING

//MOVE [ direction { KW_FROM | IN } ] cursor;

stmtMove
    : KW_MOVE optFetchFirection? cursorVariable SEMI
    ;

mergeStmt
    : withClause? KW_MERGE KW_INTO (KW_ONLY)? tableName (STAR)? (KW_AS? colId)? KW_USING dataSource KW_ON expression mergeWhenClause+ returningClause?
    ;

dataSource
    : ((KW_ONLY)? tableName (STAR)? | ( selectNoParens | valuesClause)) (KW_AS? colId)?
    ;

mergeWhenClause
    : KW_WHEN KW_MATCHED (KW_AND expression)? KW_THEN (mergeUpdate | KW_DELETE | KW_DO KW_NOTHING)
    | KW_WHEN KW_NOT KW_MATCHED (KW_AND expression)? KW_THEN (mergeInsert | KW_DO KW_NOTHING)
    ;

mergeInsert
    : KW_INSERT (optColumnList)? (KW_OVERRIDING (KW_SYSTEM | KW_USER) KW_VALUE)? defaultValuesOrValues
    ;

mergeUpdate
    : KW_UPDATE KW_SET (
        columnName EQUAL exprofdefault
        | optColumnList EQUAL OPEN_PAREN exprofdefault (COMMA exprofdefault)* CLOSE_PAREN
    )+
    ;

defaultValuesOrValues
    : KW_VALUES OPEN_PAREN exprofdefault (COMMA exprofdefault)* CLOSE_PAREN
    | KW_DEFAULT KW_VALUES
    ;

exprofdefault
    : sortBy
    | KW_DEFAULT
    ;

stmtClose
    : KW_CLOSE cursorVariable SEMI
    ;

stmtNull
    : KW_NULL SEMI
    ;

stmtCommitOrRollback
    : (KW_COMMIT | KW_ROLLBACK) (KW_AND KW_NO? KW_CHAIN)? SEMI
    ;

stmtSet
    : KW_SET anyName KW_TO KW_DEFAULT SEMI
    | KW_RESET (anyName | KW_ALL) SEMI
    ;

cursorVariable
    : colId
    | PARAM
    ;

exceptionSect
    : KW_EXCEPTION (KW_WHEN (procCondition (KW_OR procCondition)*) KW_THEN procStmt*)+
    ;

procCondition
    : anyIdentifier
    | KW_SQLSTATE stringConst
    ;

anyIdentifier
    : colId
    | unreservedKeyword
    ;

sqlExpression
    : targetList? intoClause? fromClause? whereClause? groupClause? havingClause? windowClause?
    ;