/*
MySQL (Positive Technologies) grammar
The MIT License (MIT).
Copyright (c) 2015-2017, Ivan Kochurkin (kvanttt@gmail.com), Positive Technologies.
Copyright (c) 2017, Ivan Khudyashev (IHudyashov@ptsecurity.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

// https://github.com/antlr/grammars-v4/blob/master/sql/mysql/Positive-Technologies/MySqlParser.g4
// SQL Statements: https://dev.mysql.com/doc/refman/8.0/en/sql-statements.html


parser grammar MySqlParser;

options { tokenVocab = MySqlLexer; }


// Top Level Description

program
    : sqlStatements? EOF
    ;

sqlStatements
    : (sqlStatement | emptyStatement_)*
        (sqlStatement SEMI? | emptyStatement_)
    ;

sqlStatement
    : ddlStatement | dmlStatement | transactionStatement
    | replicationStatement | preparedStatement
    | administrationStatement | utilityStatement
    ;

emptyStatement_
    : SEMI
    ;

ddlStatement
    : createDatabase | createEvent | createIndex
    | createLogfileGroup | createProcedure | createFunction
    | createServer | createTable | createTablespaceInnodb
    | createTablespaceNdb | createTrigger | createView | createRole
    | alterDatabase | alterEvent | alterFunction
    | alterInstance | alterLogfileGroup | alterProcedure
    | alterServer | alterTable | alterTablespace | alterView
    | dropDatabase | dropEvent | dropIndex
    | dropLogfileGroup | dropProcedure | dropFunction
    | dropServer | dropSpatial | dropTable | dropTablespace
    | dropTrigger | dropView | dropRole | setRole
    | renameTable | truncateTable
    ;

dmlStatement
    : selectStatement | setOperations | insertStatement | updateStatement
    | deleteStatement | replaceStatement | callStatement | interSectStatement
    | loadDataStatement | loadXmlStatement | parenthesizedQuery | doStatement
    | handlerStatement | importTableStatement | valuesStatement | withStatement
    | tableStatement
    ;

transactionStatement
    : startTransaction
    | beginWork | commitWork | rollbackWork
    | savepointStatement | rollbackStatement
    | releaseStatement | lockTables | unlockTables
    ;

replicationStatement
    : changeMaster | changeReplicationFilter | changeReplicationSource | purgeBinaryLogs
    | startSlaveOrReplica | stopSlaveOrReplica
    | startGroupReplication | stopGroupReplication
    | xaStartTransaction | xaEndTransaction | xaPrepareStatement
    | xaCommitWork | xaRollbackWork | xaRecoverWork
    ;

preparedStatement
    : prepareStatement | executeStatement | deallocatePrepare
    ;

// remark: NOT INCLUDED IN sqlStatement, but include in body
//  of routine's statements
compoundStatement
    : blockStatement
    | caseStatement | ifStatement | leaveStatement
    | loopStatement | repeatStatement | whileStatement
    | iterateStatement | returnStatement | cursorStatement
    ;

administrationStatement
    : alterUser | createUser | dropUser | grantStatement
    | grantProxy | renameUser | revokeStatement
    | alterResourceGroup | createResourceGroup | dropResourceGroup | setResourceGroup
    | analyzeTable | checkTable
    | checksumTable | optimizeTable | repairTable
    | installComponent | uninstallComponent | installPlugin | uninstallPlugin
    | cloneStatement | setStatement | showStatement | binlogStatement
    | cacheIndexStatement | flushStatement | killStatement
    | loadIndexIntoCache | resetStatement | resetPersist | resetAllChannel | reStartStatement
    | shutdownStatement
    ;

utilityStatement
    : simpleDescribeStatement | fullDescribeStatement | analyzeDescribeStatement
    | helpStatement | useStatement | signalStatement
    | resignalStatement | diagnosticsStatement
    ;


// Data Definition Language

//    Create statements

createDatabase
    : KW_CREATE dbFormat=(KW_DATABASE | KW_SCHEMA)
      ifNotExists? databaseNameCreate createDatabaseOption*
    ;

createEvent
    : KW_CREATE ownerStatement? KW_EVENT ifNotExists? event_name=fullId
      KW_ON KW_SCHEDULE scheduleExpression
      (KW_ON KW_COMPLETION KW_NOT? KW_PRESERVE)? enableType?
      (KW_COMMENT STRING_LITERAL)?
      KW_DO routineBody
    ;

createIndex
    : KW_CREATE
      intimeAction=(KW_ONLINE | KW_OFFLINE)?
      indexCategory=(KW_UNIQUE | KW_FULLTEXT | KW_SPATIAL)? KW_INDEX
      indexNameCreate indexType?
      KW_ON tableName indexColumnNames
      indexOption*
      (
        KW_ALGORITHM EQUAL_SYMBOL? algType=(KW_DEFAULT | KW_INPLACE | KW_COPY)
        | KW_LOCK EQUAL_SYMBOL? lockType=(KW_DEFAULT | KW_NONE | KW_SHARED | KW_EXCLUSIVE)
      )*
    ;

createLogfileGroup
    : KW_CREATE KW_LOGFILE KW_GROUP logfileGroupName=uid
      KW_ADD KW_UNDOFILE undoFile=STRING_LITERAL
      (KW_INITIAL_SIZE '='? initSize=fileSizeLiteral)?
      (KW_UNDO_BUFFER_SIZE '='? undoSize=fileSizeLiteral)?
      (KW_REDO_BUFFER_SIZE '='? redoSize=fileSizeLiteral)?
      (KW_NODEGROUP '='? nodegroup=uid)?
      KW_WAIT?
      (KW_COMMENT '='? comment=STRING_LITERAL)?
      KW_ENGINE '='? engineName
    ;

createProcedure
    : KW_CREATE ownerStatement? KW_PROCEDURE ifNotExists? sp_name=fullId
      '(' procedureParameter? (',' procedureParameter)* ')'
      routineOption*
      routineBody
    ;

createRole
    : KW_CREATE KW_ROLE ifNotExists? userOrRoleNames
    ;

createServer
    : KW_CREATE KW_SERVER servername=uid
        KW_FOREIGN KW_DATA KW_WRAPPER wrapperName=(KW_MYSQL | STRING_LITERAL)
        KW_OPTIONS '(' serverOption (',' serverOption)* ')'
    ;

createTable
    : KW_CREATE KW_TEMPORARY? KW_TABLE ifNotExists? tableNameCreate
        createDefinitions
        (tableOption (','? tableOption)* )?
        partitionDefinitions?                                         #copyCreateTable
    | KW_CREATE KW_TEMPORARY? KW_TABLE ifNotExists? tableNameCreate
        createDefinitions?
        (tableOption (','? tableOption)*)?
        partitionDefinitions?
        (KW_IGNORE | KW_REPLACE)?
        KW_AS? selectStatement                                        #columnCreateTable
    | KW_CREATE KW_TEMPORARY? KW_TABLE ifNotExists? tableNameCreate
       (KW_LIKE tableName | '(' KW_LIKE tableName ')')                #queryCreateTable
    ;

createTablespaceInnodb
    : KW_CREATE KW_UNDO? KW_TABLESPACE tablespaceNameCreate
      (KW_ADD KW_DATAFILE datafile=STRING_LITERAL)?
      (KW_AUTOEXTEND_SIZE '='? autoextendSize=fileSizeLiteral)?
      (KW_FILE_BLOCK_SIZE '=' fileBlockSize=fileSizeLiteral)?
      (KW_ENGINE '='? engineName)?
      (KW_ENGINE_ATTRIBUTE '='? STRING_LITERAL)?
    ;

createTablespaceNdb
    : KW_CREATE KW_UNDO? KW_TABLESPACE tablespaceNameCreate
      KW_ADD KW_DATAFILE datafile=STRING_LITERAL
      KW_USE KW_LOGFILE KW_GROUP logfileGroupName=uid
      (KW_EXTENT_SIZE '='? extentSize=fileSizeLiteral)?
      (KW_INITIAL_SIZE '='? initialSize=fileSizeLiteral)?
      (KW_AUTOEXTEND_SIZE '='? autoextendSize=fileSizeLiteral)?
      (KW_MAX_SIZE '='? maxSize=fileSizeLiteral)?
      (KW_NODEGROUP '='? nodegroup=uid)?
      KW_WAIT?
      (KW_COMMENT '='? comment=STRING_LITERAL)?
      KW_ENGINE '='? engineName
    ;

createTrigger
    : KW_CREATE ownerStatement? KW_TRIGGER ifNotExists? trigger_name=fullId
      triggerTime=(KW_BEFORE | KW_AFTER)
      triggerEvent=(KW_INSERT | KW_UPDATE | KW_DELETE)
      KW_ON tableName KW_FOR KW_EACH KW_ROW
      (triggerPlace=(KW_FOLLOWS | KW_PRECEDES) other_trigger_name=fullId)?
      routineBody
    ;

withClause
    : KW_WITH KW_RECURSIVE? commonTableExpressions
    ;

commonTableExpressions
    : cteName=uid ('(' cteColumnName=uid (',' cteColumnName=uid)* ')')?  KW_AS '(' dmlStatement ')'
      (',' commonTableExpressions)?
    ;

createView
    : KW_CREATE orReplace?
      (
        KW_ALGORITHM '=' algType=(KW_UNDEFINED | KW_MERGE | KW_TEMPTABLE)
      )?
      ownerStatement?
      (KW_SQL KW_SECURITY secContext=(KW_DEFINER | KW_INVOKER))?
      KW_VIEW viewNameCreate ('(' columnNames ')')? KW_AS
      (
        '(' withClause? selectStatement ')'
        |
        withClause? selectStatement (KW_WITH checkOption=(KW_CASCADED | KW_LOCAL)? KW_CHECK KW_OPTION)?
      )
    ;


// details

createDatabaseOption
    : KW_DEFAULT? charSet '='? (charsetName | KW_DEFAULT)
    | KW_DEFAULT? KW_COLLATE '='? collationName
    | KW_DEFAULT? KW_ENCRYPTION '='? STRING_LITERAL
    | KW_READ KW_ONLY '='? (KW_DEFAULT | ZERO_DECIMAL | ONE_DECIMAL)
    ;

charSet
    : KW_CHARACTER KW_SET
    | KW_CHARSET
    | KW_CHAR KW_SET
    ;

currentUserExpression
    : (KW_CURRENT_USER | KW_USER) ( '(' ')')?
    ;

ownerStatement
    : KW_DEFINER '=' (userName | currentUserExpression)
    ;

scheduleExpression
    : KW_AT timestampValue intervalExpr*                               #preciseSchedule
    | KW_EVERY (decimalLiteral | expression) intervalType
        (
          KW_STARTS startTimestamp=timestampValue
          (startIntervals+=intervalExpr)*
        )?
        (
          KW_ENDS endTimestamp=timestampValue
          (endIntervals+=intervalExpr)*
        )?                                                          #intervalSchedule
    ;

timestampValue
    : KW_CURRENT_TIMESTAMP
    | stringLiteral
    | decimalLiteral
    | expression
    ;

intervalExpr
    : '+' KW_INTERVAL (decimalLiteral | expression) intervalType
    ;

intervalType
    : intervalTypeBase
    | KW_YEAR | KW_YEAR_MONTH | KW_DAY_HOUR | KW_DAY_MINUTE
    | KW_DAY_SECOND | KW_HOUR_MINUTE | KW_HOUR_SECOND | KW_MINUTE_SECOND
    | KW_SECOND_MICROSECOND | KW_MINUTE_MICROSECOND
    | KW_HOUR_MICROSECOND | KW_DAY_MICROSECOND
    ;

enableType
    : KW_ENABLE | KW_DISABLE | KW_DISABLE KW_ON KW_SLAVE
    ;

indexType
    : KW_USING (KW_BTREE | KW_HASH)
    ;

indexOption
    : KW_KEY_BLOCK_SIZE EQUAL_SYMBOL? fileSizeLiteral
    | indexType
    | KW_WITH KW_PARSER parserName=uid
    | KW_COMMENT STRING_LITERAL
    | (KW_VISIBLE | KW_INVISIBLE)
    | KW_ENGINE_ATTRIBUTE EQUAL_SYMBOL? STRING_LITERAL
    | KW_SECONDARY_ENGINE_ATTRIBUTE EQUAL_SYMBOL? STRING_LITERAL
    ;

procedureParameter
    : direction=(KW_IN | KW_OUT | KW_INOUT)? paramName=uid dataType
    ;

routineOption
    : KW_COMMENT STRING_LITERAL                                        #routineComment
    | KW_LANGUAGE KW_SQL                                                  #routineLanguage
    | KW_NOT? KW_DETERMINISTIC                                            #routineBehavior
    | (
        KW_CONTAINS KW_SQL | KW_NO KW_SQL | KW_READS KW_SQL KW_DATA
        | KW_MODIFIES KW_SQL KW_DATA
      )                                                             #routineData
    | KW_SQL KW_SECURITY context=(KW_DEFINER | KW_INVOKER)                      #routineSecurity
    ;

serverOption
    : KW_HOST STRING_LITERAL
    | KW_DATABASE STRING_LITERAL
    | KW_USER STRING_LITERAL
    | KW_PASSWORD STRING_LITERAL
    | KW_SOCKET STRING_LITERAL
    | KW_OWNER STRING_LITERAL
    | KW_PORT decimalLiteral
    ;

createDefinitions
    : '(' createDefinition (',' createDefinition)* ')'
    ;

createDefinition
    : columnName columnDefinition
    | (KW_INDEX | KW_KEY) indexName? indexType? indexColumnNames indexOption*
    | (KW_FULLTEXT | KW_SPATIAL) (KW_INDEX | KW_KEY)? indexName? indexColumnNames indexOption*
    | constraintSymbol? KW_PRIMARY KW_KEY indexType? indexColumnNames indexOption*
    | constraintSymbol? KW_UNIQUE (KW_INDEX | KW_KEY)? indexName? indexType? indexColumnNames indexOption*
    | constraintSymbol? KW_FOREIGN KW_KEY indexName? indexColumnNames referenceDefinition
    | KW_CHECK '(' expression ')'
    | checkConstraintDefinition
    ;

checkConstraintDefinition
    : constraintSymbol? KW_CHECK '(' expression ')' (KW_NOT? KW_ENFORCED)?
    ;

constraintSymbol
    : KW_CONSTRAINT symbol=uid?
    ;

columnDefinition
    : dataType columnConstraint*
    ;

columnConstraint
    : nullNotnull                                                   #nullColumnConstraint
    | KW_DEFAULT defaultValue                                          #defaultColumnConstraint
    | KW_VISIBLE                                                       #visibilityColumnConstraint
    | KW_INVISIBLE                                                     #invisibilityColumnConstraint
    | (KW_AUTO_INCREMENT | KW_ON KW_UPDATE currentTimestamp)                 #autoIncrementColumnConstraint
    | KW_PRIMARY? KW_KEY                                                  #primaryKeyColumnConstraint
    | KW_UNIQUE KW_KEY?                                                   #uniqueKeyColumnConstraint
    | KW_COMMENT STRING_LITERAL                                        #commentColumnConstraint
    | KW_COLUMN_FORMAT colformat=(KW_FIXED | KW_DYNAMIC | KW_DEFAULT)           #formatColumnConstraint
    | KW_STORAGE storageval=(KW_DISK | KW_MEMORY | KW_DEFAULT)                  #storageColumnConstraint
    | referenceDefinition                                           #referenceColumnConstraint
    | KW_COLLATE collationName                                         #collateColumnConstraint
    | (KW_GENERATED KW_ALWAYS)? KW_AS '(' expression ')' (KW_VIRTUAL | KW_STORED)? #generatedColumnConstraint
    | KW_SERIAL KW_DEFAULT KW_VALUE                                          #serialDefaultColumnConstraint
    | checkConstraintDefinition                                             #checkExpr
    ;

referenceDefinition
    : KW_REFERENCES tableName indexColumnNames?
      (KW_MATCH matchType=(KW_FULL | KW_PARTIAL | KW_SIMPLE))?
      referenceAction?
    ;

referenceAction
    : KW_ON KW_DELETE onDelete=referenceControlType
      (
        KW_ON KW_UPDATE onUpdate=referenceControlType
      )?
    | KW_ON KW_UPDATE onUpdate=referenceControlType
      (
        KW_ON KW_DELETE onDelete=referenceControlType
      )?
    ;

referenceControlType
    : KW_RESTRICT | KW_CASCADE | KW_SET KW_NULL_LITERAL | KW_NO KW_ACTION | KW_SET KW_DEFAULT
    ;


tableOption
    : KW_ENGINE '='? engineName?                                                       #tableOptionEngine
    | KW_ENGINE_ATTRIBUTE '='? STRING_LITERAL                                          #tableOptionEngineAttribute
    | KW_AUTOEXTEND_SIZE '='? decimalLiteral                                           #tableOptionAutoextendSize
    | KW_AUTO_INCREMENT '='? decimalLiteral                                            #tableOptionAutoIncrement
    | KW_AVG_ROW_LENGTH '='? decimalLiteral                                            #tableOptionAverage
    | KW_DEFAULT? charSet '='? (charsetName|KW_DEFAULT)                                   #tableOptionCharset
    | (KW_CHECKSUM | KW_PAGE_CHECKSUM) '='? boolValue=('0' | '1')                         #tableOptionChecksum
    | KW_DEFAULT? KW_COLLATE '='? collationName                                           #tableOptionCollate
    | KW_COMMENT '='? STRING_LITERAL                                                   #tableOptionComment
    | KW_COMPRESSION '='? (STRING_LITERAL | ID)                                        #tableOptionCompression
    | KW_CONNECTION '='? STRING_LITERAL                                                #tableOptionConnection
    | (KW_DATA | KW_INDEX) KW_DIRECTORY '='? STRING_LITERAL                                  #tableOptionDataDirectory
    | KW_DELAY_KEY_WRITE '='? boolValue=('0' | '1')                                    #tableOptionDelay
    | KW_ENCRYPTION '='? STRING_LITERAL                                                #tableOptionEncryption
    | (KW_PAGE_COMPRESSED | STRING_LITERAL) '='? ('0' | '1')                           #tableOptionPageCompressed
    | (KW_PAGE_COMPRESSION_LEVEL | STRING_LITERAL) '='? decimalLiteral                 #tableOptionPageCompressionLevel
    | KW_ENCRYPTION_KEY_ID '='? decimalLiteral                                         #tableOptionEncryptionKeyId
    | KW_INDEX KW_DIRECTORY '='? STRING_LITERAL                                           #tableOptionIndexDirectory
    | KW_INSERT_METHOD '='? insertMethod=(KW_NO | KW_FIRST | KW_LAST)                           #tableOptionInsertMethod
    | KW_KEY_BLOCK_SIZE '='? fileSizeLiteral                                           #tableOptionKeyBlockSize
    | KW_MAX_ROWS '='? decimalLiteral                                                  #tableOptionMaxRows
    | KW_MIN_ROWS '='? decimalLiteral                                                  #tableOptionMinRows
    | KW_PACK_KEYS '='? extBoolValue=('0' | '1' | KW_DEFAULT)                             #tableOptionPackKeys
    | KW_PASSWORD '='? STRING_LITERAL                                                  #tableOptionPassword
    | KW_ROW_FORMAT '='?
        rowFormat=(
          KW_DEFAULT | KW_DYNAMIC | KW_FIXED | KW_COMPRESSED
          | KW_REDUNDANT | KW_COMPACT | ID
        )                                                                           #tableOptionRowFormat
    | KW_START KW_TRANSACTION                                                             #tableOptionStartTransaction
    | KW_SECONDARY_ENGINE_ATTRIBUTE '='? STRING_LITERAL                                #tableOptionSecondaryEngineAttribute
    | KW_STATS_AUTO_RECALC '='? extBoolValue=(KW_DEFAULT | '0' | '1')                     #tableOptionRecalculation
    | KW_STATS_PERSISTENT '='? extBoolValue=(KW_DEFAULT | '0' | '1')                      #tableOptionPersistent
    | KW_STATS_SAMPLE_PAGES '='? (KW_DEFAULT | decimalLiteral)                            #tableOptionSamplePage
    | KW_TABLESPACE tablespaceName tablespaceStorage?                                             #tableOptionTablespace
    | KW_TABLE_TYPE '=' tableType                                                      #tableOptionTableType
    | tablespaceStorage                                                             #tableOptionTablespace
    | KW_TRANSACTIONAL '='? ('0' | '1')                                                #tableOptionTransactional
    | KW_UNION '='? '(' tableNames ')'                                                     #tableOptionUnion
    ;

tableType
    : KW_MYSQL | KW_ODBC
    ;

tablespaceStorage
    : KW_STORAGE (KW_DISK | KW_MEMORY | KW_DEFAULT)
    ;

partitionDefinitions
    : KW_PARTITION KW_BY partitionFunctionDefinition
      (KW_PARTITIONS count=decimalLiteral)?
      (
        KW_SUBPARTITION KW_BY subpartitionFunctionDefinition
        (KW_SUBPARTITIONS subCount=decimalLiteral)?
      )?
    ('(' partitionDefinition (',' partitionDefinition)* ')')?
    ;

partitionFunctionDefinition
    : KW_LINEAR? KW_HASH '(' expression ')'                               #partitionFunctionHash
    | KW_LINEAR? KW_KEY (KW_ALGORITHM '=' algType=('1' | '2'))?
      '(' columnNames? ')'                                              #partitionFunctionKey
    | KW_RANGE ( '(' expression ')' | KW_COLUMNS '(' columnNames ')' )        #partitionFunctionRange
    | KW_LIST ( '(' expression ')' | KW_COLUMNS '(' columnNames ')' )         #partitionFunctionList
    ;

subpartitionFunctionDefinition
    : KW_LINEAR? KW_HASH '(' expression ')'                               #subPartitionFunctionHash
    | KW_LINEAR? KW_KEY (KW_ALGORITHM '=' algType=('1' | '2'))?
      '(' columnNames ')'                                               #subPartitionFunctionKey
    ;

partitionDefinition
    : KW_PARTITION partitionName KW_VALUES KW_LESS KW_THAN
      '('
          partitionDefinerAtom (',' partitionDefinerAtom)*
      ')'
      partitionOption*
      ( '(' subpartitionDefinition (',' subpartitionDefinition)* ')' )?       #partitionComparison
    | KW_PARTITION partitionName KW_VALUES KW_LESS KW_THAN
      partitionDefinerAtom partitionOption*
      ( '(' subpartitionDefinition (',' subpartitionDefinition)* ')' )?       #partitionComparison
    | KW_PARTITION partitionName KW_VALUES KW_IN
      '('
          partitionDefinerAtom (',' partitionDefinerAtom)*
      ')'
      partitionOption*
      ( '(' subpartitionDefinition (',' subpartitionDefinition)* ')' )?       #partitionListAtom
    | KW_PARTITION partitionName KW_VALUES KW_IN
      '('
          partitionDefinerVector (',' partitionDefinerVector)*
      ')'
      partitionOption*
      ( '(' subpartitionDefinition (',' subpartitionDefinition)* ')' )?       #partitionListVector
    | KW_PARTITION partitionName partitionOption*
      ( '(' subpartitionDefinition (',' subpartitionDefinition)* ')' )?       #partitionSimple
    ;

partitionDefinerAtom
    : constant | expression | KW_MAXVALUE
    ;

partitionDefinerVector
    : '(' partitionDefinerAtom (',' partitionDefinerAtom)+ ')'
    ;

subpartitionDefinition
    : KW_SUBPARTITION logicalName=uid partitionOption*
    ;

partitionOption
    : KW_DEFAULT? KW_STORAGE? KW_ENGINE '='? engineName                      #partitionOptionEngine
    | KW_COMMENT '='? comment=STRING_LITERAL                           #partitionOptionComment
    | KW_DATA KW_DIRECTORY '='? dataDirectory=STRING_LITERAL              #partitionOptionDataDirectory
    | KW_INDEX KW_DIRECTORY '='? indexDirectory=STRING_LITERAL            #partitionOptionIndexDirectory
    | KW_MAX_ROWS '='? maxRows=decimalLiteral                          #partitionOptionMaxRows
    | KW_MIN_ROWS '='? minRows=decimalLiteral                          #partitionOptionMinRows
    | KW_TABLESPACE '='? tablespaceName                                #partitionOptionTablespace
    | KW_NODEGROUP '='? nodegroup=uid                                  #partitionOptionNodeGroup
    ;

//    Alter statements

alterDatabase
    : KW_ALTER dbFormat=(KW_DATABASE | KW_SCHEMA) databaseName?
      createDatabaseOption+                                         #alterSimpleDatabase
    | KW_ALTER dbFormat=(KW_DATABASE | KW_SCHEMA) databaseName
      KW_UPGRADE KW_DATA KW_DIRECTORY KW_NAME                                   #alterUpgradeName
    ;

alterEvent
    : KW_ALTER ownerStatement?
      KW_EVENT event_name=fullId
      (KW_ON KW_SCHEDULE scheduleExpression)?
      (KW_ON KW_COMPLETION KW_NOT? KW_PRESERVE)?
      (KW_RENAME KW_TO new_event_name=fullId)? enableType?
      (KW_COMMENT STRING_LITERAL)?
      (KW_DO routineBody)?
    ;

alterFunction
    : KW_ALTER KW_FUNCTION functionName routineOption*
    ;

alterInstance
    : KW_ALTER KW_INSTANCE KW_ROTATE KW_INNODB KW_MASTER KW_KEY
    ;

alterLogfileGroup
    : KW_ALTER KW_LOGFILE KW_GROUP logfileGroupName=uid
      KW_ADD KW_UNDOFILE STRING_LITERAL
      (KW_INITIAL_SIZE '='? fileSizeLiteral)?
      KW_WAIT? KW_ENGINE '='? engineName
    ;

alterProcedure
    : KW_ALTER KW_PROCEDURE proc_name=fullId routineOption*
    ;

alterServer
    : KW_ALTER KW_SERVER serverName=uid KW_OPTIONS
      '(' serverOption (',' serverOption)* ')'
    ;

alterTable
    : KW_ALTER KW_TABLE tableName
      (alterOption (',' alterOption)*)?
      (alterPartitionSpecification alterPartitionSpecification*)?
    ;

alterTablespace
    : KW_ALTER KW_UNDO? KW_TABLESPACE tablespaceName
      (KW_ADD | KW_DROP) KW_DATAFILE STRING_LITERAL
      (KW_INITIAL_SIZE '='? fileSizeLiteral)?
      KW_WAIT?
      (KW_RENAME KW_TO tablespaceNameCreate)?
      (KW_AUTOEXTEND_SIZE '='? fileSizeLiteral)?
      (KW_SET (KW_ACTIVE | KW_INACTIVE))?
      (KW_ENCRYPTION '='? STRING_LITERAL)? // STRING_LITERAL is 'Y' or 'N'
      (KW_ENGINE '='? engineName)?
      (KW_ENGINE_ATTRIBUTE '='? STRING_LITERAL)?
    ;

alterView
    : KW_ALTER
      (
        KW_ALGORITHM '=' algType=(KW_UNDEFINED | KW_MERGE | KW_TEMPTABLE)
      )?
      ownerStatement?
      (KW_SQL KW_SECURITY secContext=(KW_DEFINER | KW_INVOKER))?
      KW_VIEW viewName ('(' columnNames ')')? KW_AS selectStatement
      (KW_WITH checkOpt=(KW_CASCADED | KW_LOCAL)? KW_CHECK KW_OPTION)?
    ;

alterOption
    : tableOption (','? tableOption)*                               #alterByTableOption
    | KW_ADD KW_COLUMN? columnName columnDefinition (KW_FIRST | KW_AFTER columnName)?            #alterByAddColumn
    | KW_ADD KW_COLUMN? '(' columnName columnDefinition ( ',' columnName columnDefinition)* ')'  #alterByAddColumns
    | KW_ADD (KW_INDEX | KW_KEY) indexName? indexType? indexColumnNames indexOption*    #alterByAddIndex
    | KW_ADD (KW_FULLTEXT | KW_SPATIAL) (KW_INDEX | KW_KEY)? indexName? indexColumnNames indexOption*     #alterByAddSpecialIndex
    | KW_ADD (KW_CONSTRAINT symbol=uid?)? KW_PRIMARY KW_KEY indexType? indexColumnNames indexOption*   #alterByAddPrimaryKey
    | KW_ADD (KW_CONSTRAINT symbol=uid?)? KW_UNIQUE (KW_INDEX | KW_KEY)? indexName? indexType? indexColumnNames indexOption*  #alterByAddUniqueKey
    | KW_ADD (KW_CONSTRAINT symbol=uid?)? KW_FOREIGN KW_KEY indexName? indexColumnNames referenceDefinition   #alterByAddForeignKey
    | KW_ADD checkConstraintDefinition?   #alterByAddCheckTableConstraint
    | KW_DROP (KW_CHECK | KW_CONSTRAINT) symbol=uid   #alterByDropConstraintCheck
    | KW_ALTER (KW_CHECK | KW_CONSTRAINT) symbol=uid KW_NOT? KW_ENFORCED?   #alterByAlterCheckTableConstraint
    | KW_ALGORITHM '='? (KW_DEFAULT | KW_INSTANT | KW_INPLACE | KW_COPY)   #alterBySetAlgorithm
    | KW_ALTER KW_COLUMN? columnName (KW_SET KW_DEFAULT defaultValue | KW_SET (KW_VISIBLE | KW_INVISIBLE) | KW_DROP KW_DEFAULT)    #alterByAlterColumnDefault
    | KW_ALTER KW_INDEX indexName (KW_VISIBLE | KW_INVISIBLE)   #alterByAlterIndexVisibility
    | KW_CHANGE KW_COLUMN? oldColumn=columnName newColumn=columnNameCreate columnDefinition (KW_FIRST | KW_AFTER columnName)?    #alterByChangeColumn
    | KW_DEFAULT? KW_CHARACTER KW_SET '=' charsetName (KW_COLLATE '='? collationName)?   #alterByDefaultCharset
    | KW_CONVERT KW_TO (KW_CHARSET | KW_CHARACTER KW_SET) charsetName (KW_COLLATE collationName)?   #alterByConvertCharset
    | (KW_DISABLE | KW_ENABLE) KW_KEYS      #alterKeys
    | (KW_DISCARD | KW_IMPORT) KW_TABLESPACE   #alterTablespaceOption
    | KW_DROP KW_COLUMN? columnName      #alterByDropColumn
    | KW_DROP (KW_INDEX | KW_KEY) indexName       #alterByDropIndex
    | KW_DROP KW_PRIMARY KW_KEY           #alterByDropPrimaryKey
    | KW_DROP KW_FOREIGN KW_KEY fk_symbol=uid       #alterByDropForeignKey
    | KW_FORCE                            #alterByForce
    | KW_LOCK '='? lockType=(KW_DEFAULT | KW_NONE | KW_SHARED | KW_EXCLUSIVE)      #alterByLock
    | KW_MODIFY KW_COLUMN? columnName columnDefinition (KW_FIRST | KW_AFTER columnName)?         #alterByModifyColumn
    | KW_ORDER KW_BY columnNames                                              #alterByOrder
    | KW_RENAME KW_COLUMN olcdColumn=columnName KW_TO newColumn=columnNameCreate               #alterByRenameColumn
    | KW_RENAME indexFormat=(KW_INDEX | KW_KEY) indexName KW_TO indexNameCreate             #alterByRenameIndex
    | KW_RENAME renameFormat=(KW_TO | KW_AS)? tableNameCreate                 #alterByRename
    | (KW_WITHOUT | KW_WITH) KW_VALIDATION                  #alterByValidate
    | alterPartitionSpecification                                   #alterPartition
    ;

alterPartitionSpecification
    : KW_ADD KW_PARTITION '(' partitionDefinition (',' partitionDefinition)* ')'        #alterByAddPartition
    | KW_DROP KW_PARTITION partitionNames                                        #alterByDropPartition
    | KW_DISCARD KW_PARTITION (partitionNames | KW_ALL) KW_TABLESPACE                  #alterByDiscardPartition
    | KW_IMPORT KW_PARTITION (partitionNames | KW_ALL) KW_TABLESPACE                   #alterByImportPartition
    | KW_TRUNCATE KW_PARTITION (partitionNames | KW_ALL)                            #alterByTruncatePartition
    | KW_COALESCE KW_PARTITION decimalLiteral                             #alterByCoalescePartition
    | KW_REORGANIZE KW_PARTITION partitionNames KW_INTO '(' partitionDefinition (',' partitionDefinition)* ')'   #alterByReorganizePartition
    | KW_EXCHANGE KW_PARTITION partitionName KW_WITH KW_TABLE tableName (validationFormat=(KW_WITH | KW_WITHOUT) KW_VALIDATION)?               #alterByExchangePartition
    | KW_ANALYZE KW_PARTITION (partitionNames | KW_ALL)                             #alterByAnalyzePartition
    | KW_CHECK KW_PARTITION (partitionNames | KW_ALL)                               #alterByCheckPartition
    | KW_OPTIMIZE KW_PARTITION (partitionNames | KW_ALL)                            #alterByOptimizePartition
    | KW_REBUILD KW_PARTITION (partitionNames | KW_ALL)                             #alterByRebuildPartition
    | KW_REPAIR KW_PARTITION (partitionNames | KW_ALL)                              #alterByRepairPartition
    | KW_REMOVE KW_PARTITIONING                                           #alterByRemovePartitioning
    | KW_UPGRADE KW_PARTITIONING                                          #alterByUpgradePartitioning
    ;

dropDatabase
    : KW_DROP dbFormat=(KW_DATABASE | KW_SCHEMA) ifExists? databaseName
    ;

dropEvent
    : KW_DROP KW_EVENT ifExists? event_name=fullId
    ;

dropIndex
    : KW_DROP KW_INDEX intimeAction=(KW_ONLINE | KW_OFFLINE)? indexName KW_ON tableName
      (
        KW_ALGORITHM '='? algType=(KW_DEFAULT | KW_INPLACE | KW_COPY)
        | KW_LOCK '='?
          lockType=(KW_DEFAULT | KW_NONE | KW_SHARED | KW_EXCLUSIVE)
      )*
    ;

dropLogfileGroup
    : KW_DROP KW_LOGFILE KW_GROUP logfileGroupName=uid KW_ENGINE '='? engineName
    ;

dropProcedure
    : KW_DROP KW_PROCEDURE ifExists? sp_name=fullId
    ;

dropFunction
    : KW_DROP KW_FUNCTION ifExists? functionName
    ;

dropServer
    : KW_DROP KW_SERVER ifExists? serverName=uid
    ;

dropSpatial
    : KW_DROP KW_SPATIAL KW_REFERENCE KW_SYSTEM ifExists? DECIMAL_LITERAL
    ;

dropTable
    : KW_DROP KW_TEMPORARY? KW_TABLE ifExists?
      tableNames dropType=(KW_RESTRICT | KW_CASCADE)?
    ;

dropTablespace
    : KW_DROP KW_UNDO? KW_TABLESPACE tablespaceName (KW_ENGINE '='? engineName)?
    ;

dropTrigger
    : KW_DROP KW_TRIGGER ifExists? trigger_name=fullId
    ;

dropView
    : KW_DROP KW_VIEW ifExists?
      viewName (',' viewName)* dropType=(KW_RESTRICT | KW_CASCADE)?
    ;

dropRole
    : KW_DROP KW_ROLE ifExists? userOrRoleNames
    ;

setRole
    : KW_SET KW_DEFAULT KW_ROLE (KW_NONE | KW_ALL | userOrRoleNames)
      KW_TO (userOrRoleName) (',' (userOrRoleName))*
    | KW_SET KW_ROLE roleOption
    ;

renameTable
    : KW_RENAME KW_TABLE renameTableClause (',' renameTableClause)*
    ;

renameTableClause
    : tableName KW_TO tableNameCreate
    ;

truncateTable
    : KW_TRUNCATE KW_TABLE? tableName
    ;

callStatement
    : KW_CALL sp_name=fullId ('(' (constants | expressions)? ')')?
    ;

deleteStatement
    : singleDeleteStatement | multipleDeleteStatement
    ;

doStatement
    : KW_DO expressions
    ;

handlerStatement
    : handlerOpenStatement
    | handlerReadIndexStatement
    | handlerReadStatement
    | handlerCloseStatement
    ;

insertStatement
    : KW_INSERT priority=(KW_LOW_PRIORITY | KW_DELAYED | KW_HIGH_PRIORITY)?
      KW_IGNORE? KW_INTO? tableName
      (KW_PARTITION '(' partitionNames? ')' )?
      (fullColumnNames? (valuesOrValueList | selectOrTableOrValues)?  asRowAlias? | setAssignmentList)
      asRowAlias?
      (
        KW_ON KW_DUPLICATE KW_KEY KW_UPDATE
        duplicatedFirst=updatedElement
        (',' duplicatedElements+=updatedElement)*
      )?
    ;

asRowAlias
    : KW_AS rowAlias=uid(fullColumnNames)?
    ;

selectOrTableOrValues
    : selectStatement
    | KW_TABLE tableName
    | rowValuesList
    ;

interSectStatement
    : interSectQuery (KW_INTERSECT (KW_ALL | KW_DISTINCT)? interSectQuery)+
    ;

interSectQuery
    : '('? querySpecification ')'?
    ;

loadDataStatement
    : KW_LOAD KW_DATA
      priority=(KW_LOW_PRIORITY | KW_CONCURRENT)?
      KW_LOCAL? KW_INFILE filename=STRING_LITERAL
      violation=(KW_REPLACE | KW_IGNORE)?
      KW_INTO KW_TABLE tableName
      (KW_PARTITION '(' partitionNames ')' )?
      (KW_CHARACTER KW_SET charset=charsetName)?
      (
        fieldsFormat=(KW_FIELDS | KW_COLUMNS)
        selectFieldsInto+
      )?
      (
        KW_LINES
          selectLinesInto+
      )?
      (
        KW_IGNORE decimalLiteral linesFormat=(KW_LINES | KW_ROWS)
      )?
      ( '(' assignmentField (',' assignmentField)* ')' )?
      (KW_SET updatedElement (',' updatedElement)*)?
    ;

loadXmlStatement
    : KW_LOAD KW_XML
      priority=(KW_LOW_PRIORITY | KW_CONCURRENT)?
      KW_LOCAL? KW_INFILE filename=STRING_LITERAL
      violation=(KW_REPLACE | KW_IGNORE)?
      KW_INTO KW_TABLE tableName
      (KW_CHARACTER KW_SET charset=charsetName)?
      (KW_ROWS KW_IDENTIFIED KW_BY '<'? tag=STRING_LITERAL '>'?)?
      ( KW_IGNORE decimalLiteral linesFormat=(KW_LINES | KW_ROWS) )?
      ( '(' assignmentField (',' assignmentField)* ')' )?
      (KW_SET updatedElement (',' updatedElement)*)?
    ;

parenthesizedQuery
    : '(' parenthesizedQueryExpression orderByClause? limitClause? ')' orderByClause? limitClause? intoClause?
    ;

replaceStatement
    : KW_REPLACE priority=(KW_LOW_PRIORITY | KW_DELAYED)?
      KW_INTO? tableName
      (KW_PARTITION '(' partitionNames ')' )?
      (
        ('(' columnNames ')')? replaceStatementValuesOrSelectOrTable
        | setAssignmentList
      )
    ;

// into clause within a given statement can appear only once
selectStatement
    : querySpecification lockClause?                                #simpleSelect
    | querySpecificationNointo lockClause? intoClause?    #simpleSelect
    | queryExpression lockClause?                                   #parenthesisSelect
    | querySpecificationNointo unionStatement+
        (
          KW_UNION unionType=(KW_ALL | KW_DISTINCT)?
          (querySpecification | queryExpression)
        )?
        orderByClause? limitClause? lockClause?                     #unionSelect
    | queryExpressionNointo unionParenthesis+
        (
          KW_UNION unionType=(KW_ALL | KW_DISTINCT)?
          queryExpression
        )?
        orderByClause? limitClause? lockClause?                     #unionParenthesisSelect
    | querySpecificationNointo (',' lateralStatement)+              #withLateralStatement
    ;

// https://dev.mysql.com/doc/refman/8.0/en/set-operations.html
setOperations
    : withClause? queryExpressionBody orderByClause? limitClause? intoClause?
    ;

queryExpressionBody
    : queryItem
    | queryExpressionBody KW_UNION (KW_ALL | KW_DISTINCT)? queryItem
    | queryExpressionBody KW_EXCEPT (KW_ALL | KW_DISTINCT)? queryItem
    ;
queryItem
    : queryPrimary
    | queryItem KW_INTERSECT (KW_ALL | KW_DISTINCT)? queryPrimary
    ;
queryPrimary
    : queryBlock
    | '(' queryExpressionBody orderByClause? limitClause? intoClause? ')'
    ;

updateStatement
    : singleUpdateStatement | multipleUpdateStatement
    ;

// https://dev.mysql.com/doc/refman/8.0/en/values.html
valuesStatement
    : rowValuesList (KW_ORDER KW_BY indexColumnName)? (KW_LIMIT limitClauseAtom)?
    ;


//    Detailed DML Statements

parenthesizedQueryExpression
    : queryBlock ((KW_UNION | KW_INTERSECT | KW_EXCEPT) queryBlock)* orderByClause? limitClause? intoClause?
    ;

queryBlock
    : selectStatement
    | tableStatement
    | valuesStatement
    ;

replaceStatementValuesOrSelectOrTable
    : selectStatement
    | KW_TABLE tableName
    | valuesOrValueList
    | rowValuesList
    ;

rowValuesList
    : KW_VALUES KW_ROW expressionsWithDefaults (',' KW_ROW expressionsWithDefaults)*
    ;

setAssignmentList
    : KW_SET setFirst=updatedElement (',' setElements+=updatedElement)*
    ;

updatedElement
    : columnName '=' expressionOrDefault
    ;

assignmentField
    : var_name=uid | LOCAL_ID
    ;

lockClause
    : KW_FOR (KW_UPDATE | KW_SHARE) (KW_OF tableName (',' tableName)*)? ((KW_NOWAIT | KW_SKIP) KW_LOCKED)?
    | KW_LOCK KW_IN KW_SHARE KW_MODE
    ;

singleDeleteStatement
    : KW_DELETE priority=KW_LOW_PRIORITY? KW_QUICK? KW_IGNORE?
    KW_FROM tableName (KW_AS? table_alias=uid)?
      (KW_PARTITION '(' partitionNames ')' )?
      (KW_WHERE expression)?
      orderByClause? (KW_LIMIT limitClauseAtom)?
    ;

multipleDeleteStatement
    : KW_DELETE priority=KW_LOW_PRIORITY? KW_QUICK? KW_IGNORE?
      (
        tableName ('.' '*')? ( ',' tableName ('.' '*')? )*
            KW_FROM tableSources
        | KW_FROM
            tableName ('.' '*')? ( ',' tableName ('.' '*')? )*
            KW_USING tableSources
      )
      (KW_WHERE expression)?
    ;

handlerOpenStatement
    : KW_HANDLER tableName KW_OPEN (KW_AS? table_alias=uid)?
    ;

handlerReadIndexStatement
    : KW_HANDLER tableName KW_READ indexName
      (
        comparisonBase '(' constants ')'
        | moveOrder=(KW_FIRST | KW_NEXT | KW_PREV | KW_LAST)
      )
      (KW_WHERE expression)? (KW_LIMIT limitClauseAtom)?
    ;

handlerReadStatement
    : KW_HANDLER tableName KW_READ moveOrder=(KW_FIRST | KW_NEXT)
      (KW_WHERE expression)? (KW_LIMIT limitClauseAtom)?
    ;

handlerCloseStatement
    : KW_HANDLER tableName KW_CLOSE
    ;

importTableStatement
    : KW_IMPORT KW_TABLE KW_FROM stringLiteral (',' stringLiteral)*
    ;

singleUpdateStatement
    : KW_UPDATE priority=KW_LOW_PRIORITY? KW_IGNORE? tableName (KW_AS? table_alias=uid)?
      KW_SET updatedElement (',' updatedElement)*
      (KW_WHERE expression)? orderByClause? limitClause?
    ;

multipleUpdateStatement
    : KW_UPDATE priority=KW_LOW_PRIORITY? KW_IGNORE? tableSources
      KW_SET updatedElement (',' updatedElement)*
      (KW_WHERE expression)?
    ;

// details

orderByClause
    : KW_ORDER KW_BY orderByExpression (',' orderByExpression)*
    ;

orderByExpression
    : expression order=(KW_ASC | KW_DESC)?
    ;

tableSources
    : tableSource (',' tableSource)*
    ;

tableSource
    : tableSourceItem joinPart*                                     #tableSourceBase
    | '(' tableSourceItem joinPart* ')'                             #tableSourceNested
    | jsonTable                                                     #tableJson
    ;

tableSourceItem
    : tableName
      (KW_PARTITION '(' partitionNames ')' )? (KW_AS? alias=uid)?
      (indexHint (',' indexHint)* )?                                #atomTableItem
    | KW_LATERAL? ( selectStatement | '(' parenthesisSubquery=selectStatement ')') KW_AS? alias=uid fullColumnNames?      #subqueryTableItem
    | '(' tableSources ')'                                          #tableSourcesItem
    ;

// (col_list) | (col_alias [, col_alias] ...)
fullColumnNames
    : '(' columnNames ')'
    ;

indexHint
    : indexHintAction=(KW_USE | KW_IGNORE | KW_FORCE)
      keyFormat=(KW_INDEX | KW_KEY) ( KW_FOR indexHintType)?
      '(' indexNames? ')'
    ;

indexHintType
    : KW_JOIN | KW_ORDER KW_BY | KW_GROUP KW_BY
    ;

joinPart
    : (KW_INNER | KW_CROSS)? KW_JOIN KW_LATERAL? tableSourceItem joinSpec*      #innerJoin
    | KW_STRAIGHT_JOIN tableSourceItem joinSpec*                #straightJoin
    | (KW_LEFT | KW_RIGHT) KW_OUTER? KW_JOIN KW_LATERAL? tableSourceItem joinSpec* #outerJoin
    | KW_NATURAL ((KW_INNER | (KW_LEFT | KW_RIGHT)) KW_OUTER?)? KW_JOIN tableSourceItem         #naturalJoin
    ;



joinSpec
    : (KW_ON expression)
    | KW_USING '(' columnNames ')'
    ;

//    Select Statement's Details

queryExpression
    : '(' querySpecification ')'
    | '(' queryExpression ')'
    ;

queryExpressionNointo
    : '(' querySpecificationNointo ')'
    | '(' queryExpressionNointo ')'
    ;

// into clause within a given statement can appear only once
querySpecification
    : KW_SELECT selectSpec* selectElements intoClause?
      fromClause groupByClause? havingClause? windowClause? orderByClause? limitClause?
    | KW_SELECT selectSpec* selectElements
      fromClause groupByClause? havingClause? windowClause? orderByClause? limitClause? intoClause?
    ;

querySpecificationNointo
    : KW_SELECT selectSpec* selectElements
      fromClause groupByClause? havingClause? windowClause? orderByClause? limitClause?
    ;

unionParenthesis
    : KW_UNION unionType=(KW_ALL | KW_DISTINCT)? queryExpressionNointo
    ;

unionStatement
    : KW_UNION unionType=(KW_ALL | KW_DISTINCT)?
      (querySpecificationNointo | queryExpressionNointo)
    ;

lateralStatement
    : KW_LATERAL (querySpecificationNointo |
               queryExpressionNointo |
               ('(' (querySpecificationNointo | queryExpressionNointo) ')' (KW_AS? alias=uid)?)
              )
    ;

// JSON

// https://dev.mysql.com/doc/refman/8.0/en/json-table-functions.html
jsonTable
    : KW_JSON_TABLE '('
        STRING_LITERAL ','
        STRING_LITERAL
        KW_COLUMNS '(' jsonColumnList ')'
      ')' (KW_AS? alias=uid)?
    ;

jsonColumnList
    : jsonColumn (',' jsonColumn)*
    ;

jsonColumn
    : columnName ( KW_FOR KW_ORDINALITY
                     | dataType ( KW_PATH STRING_LITERAL jsonOnEmpty? jsonOnError?
                                | KW_EXISTS KW_PATH STRING_LITERAL ) )
    | KW_NESTED KW_PATH? STRING_LITERAL KW_COLUMNS '(' jsonColumnList ')'
    ;

jsonOnEmpty
    : (KW_NULL_LITERAL | KW_ERROR | KW_DEFAULT defaultValue) KW_ON KW_EMPTY
    ;

jsonOnError
    : (KW_NULL_LITERAL | KW_ERROR | KW_DEFAULT defaultValue) KW_ON KW_ERROR
    ;

// details

selectSpec
    : (KW_ALL | KW_DISTINCT | KW_DISTINCTROW)
    | KW_HIGH_PRIORITY | KW_STRAIGHT_JOIN | KW_SQL_SMALL_RESULT
    | KW_SQL_BIG_RESULT | KW_SQL_BUFFER_RESULT
    | (KW_SQL_CACHE | KW_SQL_NO_CACHE)
    | KW_SQL_CALC_FOUND_ROWS
    ;

selectElements
    : (star='*' | selectElement ) (',' selectElement)*
    ;

selectElement
    : select_element=fullId '.' '*'                                                #selectStarElement
    | columnName (KW_AS? alias=uid)?                                     #selectColumnElement
    | functionCall (KW_AS? alias=uid)?                                       #selectFunctionElement
    | (LOCAL_ID VAR_ASSIGN)? expression (KW_AS? alias=uid)?                  #selectExpressionElement
    ;

intoClause
    : KW_INTO assignmentField (',' assignmentField )*                  #selectIntoVariables
    | KW_INTO KW_DUMPFILE STRING_LITERAL                                  #selectIntoDumpFile
    | (
        KW_INTO KW_OUTFILE filename=STRING_LITERAL
        (KW_CHARACTER KW_SET charset=charsetName)?
        (
          fieldsFormat=(KW_FIELDS | KW_COLUMNS)
          selectFieldsInto+
        )?
        (
          KW_LINES selectLinesInto+
        )?
      )                                                             #selectIntoTextFile
    ;

selectFieldsInto
    : KW_TERMINATED KW_BY terminationField=STRING_LITERAL
    | KW_OPTIONALLY? KW_ENCLOSED KW_BY enclosion=STRING_LITERAL
    | KW_ESCAPED KW_BY escaping=STRING_LITERAL
    ;

selectLinesInto
    : KW_STARTING KW_BY starting=STRING_LITERAL
    | KW_TERMINATED KW_BY terminationLine=STRING_LITERAL
    ;

fromClause
    : (KW_FROM tableSources)?
      (KW_WHERE whereExpr=expression)?
    ;

groupByClause
    :  KW_GROUP KW_BY
        groupByItem (',' groupByItem)*
        (KW_WITH KW_ROLLUP)?
    ;

havingClause
    :  KW_HAVING havingExpr=expression
    ;

windowClause
    :  KW_WINDOW windowName KW_AS '(' windowSpec ')' (',' windowName KW_AS '(' windowSpec ')')*
    ;

groupByItem
    : expression order=(KW_ASC | KW_DESC)?
    ;

limitClause
    : KW_LIMIT
    (
      (offset=limitClauseAtom ',')? limit=limitClauseAtom
      | limit=limitClauseAtom KW_OFFSET offset=limitClauseAtom
    )
    ;

limitClauseAtom
	: decimalLiteral | mysqlVariable | simpleId
	;


// Transaction's Statements

startTransaction
    : KW_START KW_TRANSACTION (transactionMode (',' transactionMode)* )?
    ;

beginWork
    : KW_BEGIN KW_WORK?
    ;

commitWork
    : KW_COMMIT KW_WORK?
      (KW_AND nochain=KW_NO? KW_CHAIN)?
      (norelease=KW_NO? KW_RELEASE)?
    ;

rollbackWork
    : KW_ROLLBACK KW_WORK?
      (KW_AND nochain=KW_NO? KW_CHAIN)?
      (norelease=KW_NO? KW_RELEASE)?
    ;

savepointStatement
    : KW_SAVEPOINT identifier=uid
    ;

rollbackStatement
    : KW_ROLLBACK KW_WORK? KW_TO KW_SAVEPOINT? identifier=uid
    ;

releaseStatement
    : KW_RELEASE KW_SAVEPOINT identifier=uid
    ;

lockTables
    : KW_LOCK (KW_TABLE | KW_TABLES) lockTableElement (',' lockTableElement)*
    ;

unlockTables
    : KW_UNLOCK KW_TABLES
    ;


// details

setAutocommitStatement
    : KW_SET KW_AUTOCOMMIT '=' autocommitValue=('0' | '1')
    ;

setTransactionStatement
    : KW_SET transactionContext=(KW_GLOBAL | KW_SESSION)? KW_TRANSACTION
      transactionOption (',' transactionOption)*
    ;

transactionMode
    : KW_WITH KW_CONSISTENT KW_SNAPSHOT
    | KW_READ KW_WRITE
    | KW_READ KW_ONLY
    ;

lockTableElement
    : tableName (KW_AS? alias=uid)? lockAction
    ;

lockAction
    : KW_READ KW_LOCAL? | KW_LOW_PRIORITY? KW_WRITE
    ;

transactionOption
    : KW_ISOLATION KW_LEVEL transactionLevel
    | KW_READ KW_WRITE
    | KW_READ KW_ONLY
    ;

transactionLevel
    : KW_REPEATABLE KW_READ
    | KW_READ KW_COMMITTED
    | KW_READ KW_UNCOMMITTED
    | KW_SERIALIZABLE
    ;


// Replication's Statements

//    Base Replication

changeMaster
    : KW_CHANGE KW_MASTER KW_TO masterOption (',' masterOption)* channelOption?
    ;

changeReplicationFilter
    : KW_CHANGE KW_REPLICATION KW_FILTER replicationFilter (',' replicationFilter)* channelOption?
    ;

changeReplicationSource
    : KW_CHANGE KW_REPLICATION KW_SOURCE KW_TO replicationSourceOption (',' replicationSourceOption)* channelOption?
    ;

purgeBinaryLogs
    : KW_PURGE purgeFormat=(KW_BINARY | KW_MASTER) KW_LOGS
       (
           KW_TO fileName=STRING_LITERAL
           | KW_BEFORE timeValue=STRING_LITERAL
       )
    ;

startSlaveOrReplica
    : KW_START (KW_SLAVE | KW_REPLICA) (threadType (',' threadType)*)?
      (KW_UNTIL untilOption)?
      connectionOptions* channelOption?
    ;

stopSlaveOrReplica
    : KW_STOP (KW_SLAVE | KW_REPLICA) (threadType (',' threadType)*)? channelOption?
    ;

startGroupReplication
    : KW_START KW_GROUP_REPLICATION (KW_USER '=' STRING_LITERAL)? (',' KW_PASSWORD '=' STRING_LITERAL)? (',' KW_DEFAULT_AUTH '=' STRING_LITERAL)?
    ;

stopGroupReplication
    : KW_STOP KW_GROUP_REPLICATION
    ;

masterOption
    : stringMasterOption '=' STRING_LITERAL                         #masterStringOption
    | decimalMasterOption '=' decimalLiteral                        #masterDecimalOption
    | boolMasterOption '=' boolVal=('0' | '1')                      #masterBoolOption
    | v8NewMasterOption                                             #v8AddMasterOption
    | KW_IGNORE_SERVER_IDS '=' '(' (server_id=uid (',' server_id=uid)*)? ')'            #masterUidListOption
    ;
stringMasterOption
    : KW_MASTER_BIND | KW_MASTER_HOST | KW_MASTER_USER | KW_MASTER_PASSWORD
    | KW_MASTER_LOG_FILE | KW_RELAY_LOG_FILE | KW_MASTER_COMPRESSION_ALGORITHMS
    | KW_MASTER_SSL_CA | KW_MASTER_SSL_CAPATH | KW_MASTER_SSL_CERT | KW_MASTER_SSL_CRL
    | KW_MASTER_SSL_CRLPATH | KW_MASTER_SSL_KEY | KW_MASTER_SSL_CIPHER
    | KW_MASTER_TLS_VERSION | KW_MASTER_TLS_CIPHERSUITES | KW_MASTER_PUBLIC_KEY_PATH
    | KW_NETWORK_NAMESPACE
    ;
decimalMasterOption
    : KW_MASTER_PORT | KW_MASTER_LOG_POS | KW_RELAY_LOG_POS | KW_MASTER_HEARTBEAT_PERIOD
    | KW_MASTER_CONNECT_RETRY | KW_MASTER_RETRY_COUNT | KW_MASTER_DELAY | KW_MASTER_ZSTD_COMPRESSION_LEVEL
    ;
boolMasterOption
    : KW_REQUIRE_ROW_FORMAT
    | KW_MASTER_AUTO_POSITION
    | KW_SOURCE_CONNECTION_AUTO_FAILOVER
    | KW_MASTER_SSL
    | KW_MASTER_SSL_VERIFY_SERVER_CERT
    | KW_GET_MASTER_PUBLIC_KEY
    | KW_GTID_ONLY
    ;
// https://dev.mysql.com/doc/refman/8.0/en/change-master-to.html
v8NewMasterOption
    : KW_PRIVILEGE_CHECKS_USER '=' (STRING_LITERAL | KW_NULL_LITERAL)
    | KW_REQUIRE_TABLE_PRIMARY_KEY_CHECK '=' (KW_STREAM | KW_ON | KW_OFF)
    | KW_ASSIGN_GTIDS_TO_ANONYMOUS_TRANSACTIONS '=' (KW_OFF | KW_LOCAL | gtuidSet)
    ;

replicationSourceOption
    : stringSourceOption '=' STRING_LITERAL                         #sourceStringOption
    | decimalSourceOption '=' decimalLiteral                        #sourceDecimalOption
    | boolSourceOption '=' boolVal=('0' | '1')                      #sourceBoolOption
    | otherSourceOption                                             #sourceOtherOption
    | KW_IGNORE_SERVER_IDS '=' '(' (server_id=uid (',' server_id=uid)*)? ')'            #sourceUidListOption
    ;
stringSourceOption
    : KW_SOURCE_BIND | KW_SOURCE_HOST | KW_SOURCE_USER | KW_SOURCE_PASSWORD
    | KW_SOURCE_LOG_FILE | KW_RELAY_LOG_FILE | KW_SOURCE_COMPRESSION_ALGORITHMS
    | KW_SOURCE_SSL_CA | KW_SOURCE_SSL_CAPATH | KW_SOURCE_SSL_CERT | KW_SOURCE_SSL_CRL
    | KW_SOURCE_SSL_CRLPATH | KW_SOURCE_SSL_KEY | KW_SOURCE_SSL_CIPHER
    | KW_SOURCE_TLS_VERSION | KW_SOURCE_TLS_CIPHERSUITES | KW_SOURCE_PUBLIC_KEY_PATH
    | KW_NETWORK_NAMESPACE
    ;
decimalSourceOption
    : KW_SOURCE_PORT | KW_SOURCE_LOG_POS | KW_RELAY_LOG_POS | KW_SOURCE_HEARTBEAT_PERIOD
    | KW_SOURCE_CONNECT_RETRY | KW_SOURCE_RETRY_COUNT | KW_SOURCE_DELAY | KW_SOURCE_ZSTD_COMPRESSION_LEVEL
    ;
boolSourceOption
    : KW_REQUIRE_ROW_FORMAT
    | KW_SOURCE_AUTO_POSITION
    | KW_SOURCE_CONNECTION_AUTO_FAILOVER
    | KW_SOURCE_SSL
    | KW_SOURCE_SSL_VERIFY_SERVER_CERT
    | KW_GET_SOURCE_PUBLIC_KEY
    | KW_GTID_ONLY
    ;
otherSourceOption
    : KW_PRIVILEGE_CHECKS_USER '=' (STRING_LITERAL | KW_NULL_LITERAL)
    | KW_REQUIRE_TABLE_PRIMARY_KEY_CHECK '=' (KW_STREAM | KW_ON | KW_OFF | KW_GENERATE)
    | KW_ASSIGN_GTIDS_TO_ANONYMOUS_TRANSACTIONS '=' (KW_OFF | KW_LOCAL | gtuidSet)
    ;

channelOption
    : KW_FOR KW_CHANNEL STRING_LITERAL
    ;

replicationFilter
    : KW_REPLICATE_DO_DB '=' '(' databaseName (',' databaseName)* ')'                           #doDbReplication
    | KW_REPLICATE_IGNORE_DB '=' '(' databaseName (',' databaseName)* ')'                       #ignoreDbReplication
    | KW_REPLICATE_DO_TABLE '=' '(' tableNames ')'                         #doTableReplication
    | KW_REPLICATE_IGNORE_TABLE '=' '(' tableNames ')'                     #ignoreTableReplication
    | KW_REPLICATE_WILD_DO_TABLE '=' '(' simpleStrings ')'             #wildDoTableReplication
    | KW_REPLICATE_WILD_IGNORE_TABLE
       '=' '(' simpleStrings ')'                                    #wildIgnoreTableReplication
    | KW_REPLICATE_REWRITE_DB '='
      '(' tablePair (',' tablePair)* ')'                            #rewriteDbReplication
    ;

tablePair
    : '(' firstTable=tableName ',' secondTable=tableName ')'
    ;

threadType
    : KW_IO_THREAD | KW_SQL_THREAD
    ;

untilOption
    : gtids=(KW_SQL_BEFORE_GTIDS | KW_SQL_AFTER_GTIDS) '=' gtuidSet                     #gtidsUntilOption
    | KW_MASTER_LOG_FILE '=' STRING_LITERAL ',' KW_MASTER_LOG_POS '=' decimalLiteral    #masterLogUntilOption
    | KW_SOURCE_LOG_FILE '=' STRING_LITERAL ',' KW_SOURCE_LOG_POS '=' decimalLiteral    #sourceLogUntilOption
    | KW_RELAY_LOG_FILE '=' STRING_LITERAL ',' KW_RELAY_LOG_POS '=' decimalLiteral      #relayLogUntilOption
    | KW_SQL_AFTER_MTS_GAPS                                                             #sqlGapsUntilOption
    ;

connectionOptions
    : KW_USER '=' conOptUser=STRING_LITERAL                            #userConnectionOption
    | KW_PASSWORD '=' conOptPassword=STRING_LITERAL                    #passwordConnectionOption
    | KW_DEFAULT_AUTH '=' conOptDefAuth=STRING_LITERAL                 #defaultAuthConnectionOption
    | KW_PLUGIN_DIR '=' conOptPluginDir=STRING_LITERAL                 #pluginDirConnectionOption
    ;

gtuidSet
    : uuidSet (',' uuidSet)*
    | STRING_LITERAL
    ;


//    XA Transactions

xaStartTransaction
    : KW_XA xaStart=(KW_START | KW_BEGIN) xid xaAction=(KW_JOIN | KW_RESUME)?
    ;

xaEndTransaction
    : KW_XA KW_END xid (KW_SUSPEND (KW_FOR KW_MIGRATE)?)?
    ;

xaPrepareStatement
    : KW_XA KW_PREPARE xid
    ;

xaCommitWork
    : KW_XA KW_COMMIT xid (KW_ONE KW_PHASE)?
    ;

xaRollbackWork
    : KW_XA KW_ROLLBACK xid
    ;

xaRecoverWork
    : KW_XA KW_RECOVER (KW_CONVERT xid)?
    ;


prepareStatement
    : KW_PREPARE stmt_name=uid KW_FROM
      (query=STRING_LITERAL | variable=LOCAL_ID)
    ;

executeStatement
    : KW_EXECUTE stmt_name=uid (KW_USING userVariables)?
    ;

deallocatePrepare
    : dropFormat=(KW_DEALLOCATE | KW_DROP) KW_PREPARE stmt_name=uid
    ;

routineBody
    : blockStatement | sqlStatement
    ;

blockStatement
    : (begin=uid ':')? KW_BEGIN
        (declareVariable SEMI)*
        (declareCondition SEMI)*
        (declareCursor SEMI)*
        (declareHandler SEMI)*
        procedureSqlStatement*
      KW_END end=uid?
    ;

caseStatement
    : KW_CASE (case_value=uid | expression)? caseAlternative+
      (KW_ELSE procedureSqlStatement+)?
      KW_END KW_CASE
    ;

ifStatement
    : KW_IF expression
      KW_THEN thenStatements+=procedureSqlStatement+
      elifAlternative*
      (KW_ELSE elseStatements+=procedureSqlStatement+ )?
      KW_END KW_IF
    ;

iterateStatement
    : KW_ITERATE label=uid
    ;

leaveStatement
    : KW_LEAVE label=uid
    ;

loopStatement
    : (begin_label=uid ':')?
      KW_LOOP procedureSqlStatement+
      KW_END KW_LOOP end_label=uid?
    ;

repeatStatement
    : (begin_label=uid ':')?
      KW_REPEAT procedureSqlStatement+
      KW_UNTIL expression
      KW_END KW_REPEAT end_label=uid?
    ;

returnStatement
    : KW_RETURN expression
    ;

whileStatement
    : (begin_label=uid ':')?
      KW_WHILE expression
      KW_DO procedureSqlStatement+
      KW_END KW_WHILE end_label=uid?
    ;

cursorStatement
    : KW_CLOSE cursor_name=uid                                                     #CloseCursor
    | KW_FETCH (KW_NEXT? KW_FROM)? cursor_name=uid KW_INTO var_names=uidList                 #FetchCursor
    | KW_OPEN cursor_name=uid                                                      #OpenCursor
    ;

declareVariable
    : KW_DECLARE var_names=uidList dataType (KW_DEFAULT expression)?
    ;

declareCondition
    : KW_DECLARE condition_name=uid KW_CONDITION KW_FOR
      ( decimalLiteral | KW_SQLSTATE KW_VALUE? STRING_LITERAL)
    ;

declareCursor
    : KW_DECLARE condition_name=uid KW_CURSOR KW_FOR selectStatement
    ;

declareHandler
    : KW_DECLARE handlerAction=(KW_CONTINUE | KW_EXIT | KW_UNDO)
      KW_HANDLER KW_FOR
      handlerConditionValue (',' handlerConditionValue)*
      routineBody
    ;

handlerConditionValue
    : decimalLiteral                                                #handlerConditionCode
    | KW_SQLSTATE KW_VALUE? STRING_LITERAL                                #handlerConditionState
    | condition_name=uid                                                           #handlerConditionName
    | KW_SQLWARNING                                                    #handlerConditionWarning
    | KW_NOT KW_FOUND                                                     #handlerConditionNotfound
    | KW_SQLEXCEPTION                                                  #handlerConditionException
    ;

procedureSqlStatement
    : (compoundStatement | sqlStatement) SEMI
    ;

caseAlternative
    : KW_WHEN (constant | expression)
      KW_THEN procedureSqlStatement+
    ;

elifAlternative
    : KW_ELSEIF expression
      KW_THEN procedureSqlStatement+
    ;

// Administration Statements

//    Account management statements

alterUser
    : KW_ALTER KW_USER ifExists? (
      (userSpecification (',' userSpecification)*)
      | (
        alterUserAuthOption (',' alterUserAuthOption)*
        (KW_REQUIRE (KW_NONE | tlsOption (KW_AND? tlsOption)* ))?
        (KW_WITH userResourceOption+)?
        (userPasswordOption | userLockOption)*
        ((KW_COMMENT | KW_ATTRIBUTE) STRING_LITERAL)?
      ) | ((userOrRoleName) KW_DEFAULT KW_ROLE roleOption)
    )
    ;

createUser
    : KW_CREATE KW_USER ifNotExists?
        userName createUserAuthOption? (',' userName createUserAuthOption?)*
        (KW_DEFAULT KW_ROLE roleOption)?
        (KW_REQUIRE (KW_NONE | tlsOption (KW_AND? tlsOption)*))?
        (KW_WITH userResourceOption+)?
        (userPasswordOption | userLockOption)*
        ((KW_COMMENT | KW_ATTRIBUTE) STRING_LITERAL)?
    ;

dropUser
    : KW_DROP KW_USER ifExists? userName (',' userName)*
    ;

grantStatement
    : KW_GRANT privelegeClause (',' privelegeClause)*
      KW_ON privilegeObjectType? privilegeLevel
      KW_TO ((userAuthOption (',' userAuthOption)*) | userOrRoleNames)
      (KW_REQUIRE (tlsNone=KW_NONE | tlsOption (KW_AND? tlsOption)*))?
      (KW_WITH (KW_GRANT KW_OPTION | userResourceOption)* )?
      (KW_AS userName (KW_WITH KW_ROLE roleOption)?)?
    | KW_GRANT (KW_PROXY KW_ON)? (userOrRoleName) (',' (userOrRoleName))*
      KW_TO (userOrRoleName) (',' (userOrRoleName))*
      (KW_WITH KW_ADMIN KW_OPTION)?
    ;

roleOption
    : KW_DEFAULT
    | KW_NONE
    | KW_ALL (KW_EXCEPT userOrRoleNames)?
    | userOrRoleNames
    ;

grantProxy
    : KW_GRANT KW_PROXY KW_ON fromFirst=userName
      KW_TO toFirst=userName (',' toOther+=userName)*
      (KW_WITH KW_GRANT KW_OPTION)?
    ;

alterResourceGroup
    : KW_ALTER KW_RESOURCE KW_GROUP groupName
      (KW_VCPU '='? resourceGroupVcpuSpec)?
      (KW_THREAD_PRIORITY '='? decimalLiteral)?
      ((KW_ENABLE | KW_DISABLE) KW_FORCE?)?
    ;

createResourceGroup
    : KW_CREATE KW_RESOURCE KW_GROUP groupNameCreate
      KW_TYPE '=' (KW_SYSTEM | KW_USER)
      (KW_VCPU '='? resourceGroupVcpuSpec)?
      (KW_THREAD_PRIORITY '='? decimalLiteral)?
      (KW_ENABLE | KW_DISABLE)?
    ;

dropResourceGroup
    : KW_DROP KW_RESOURCE KW_GROUP groupName KW_FORCE?
    ;

setResourceGroup
    : KW_SET KW_RESOURCE KW_GROUP groupName (KW_FOR decimalLiteral (',' decimalLiteral)*)?
    ;

resourceGroupVcpuSpec
    : (decimalLiteral | decimalLiteral MINUS decimalLiteral) (',' resourceGroupVcpuSpec)*
    ;

renameUser
    : KW_RENAME KW_USER
      renameUserClause (',' renameUserClause)*
    ;

revokeStatement
    : KW_REVOKE ifExists? privelegeClause (',' privelegeClause)*
        KW_ON privilegeObjectType? privilegeLevel
        KW_FROM userOrRoleNames
        ignoreUnknownUser?                                         #detailRevoke
    | KW_REVOKE ifExists? KW_ALL KW_PRIVILEGES? ',' KW_GRANT KW_OPTION
        KW_FROM userOrRoleNames ignoreUnknownUser?                 #shortRevoke
    | KW_REVOKE ifExists? (KW_PROXY KW_ON)? userOrRoleNames
        KW_FROM userOrRoleNames ignoreUnknownUser?                 #proxyAndRoleRevoke
    ;

ignoreUnknownUser
    : KW_IGNORE KW_UNKNOWN KW_USER
    ;

privilegeObjectType
    : KW_TABLE | KW_FUNCTION | KW_PROCEDURE
    ;

setPasswordStatement
    : KW_SET KW_PASSWORD (KW_FOR userName)? '=' ( passwordFunctionClause | STRING_LITERAL)   #v57
    | KW_SET KW_PASSWORD (KW_FOR userName)? (KW_TO KW_RANDOM | '=' STRING_LITERAL) (KW_REPLACE STRING_LITERAL)? (KW_RETAIN KW_CURRENT KW_PASSWORD)?  #v80
    ;

userSpecification
    : userName userPasswordOption
    ;

alterUserAuthOption
    : userName KW_IDENTIFIED KW_BY STRING_LITERAL authOptionClause
    | userName KW_IDENTIFIED KW_BY KW_RANDOM KW_PASSWORD authOptionClause
    | userName KW_IDENTIFIED KW_WITH authenticationRule
    | userName KW_DISCARD KW_OLD KW_PASSWORD
    | userName ((KW_ADD | KW_MODIFY | KW_DROP) factor factorAuthOption?)+
    | userName registrationOption?
    | userName
    ;

// createUser auth_option, 2fa_auth_option, 3fa_auth_option
createUserAuthOption
    : KW_IDENTIFIED KW_BY (STRING_LITERAL | (KW_RANDOM KW_PASSWORD) | (KW_PASSWORD STRING_LITERAL)) (KW_AND createUserAuthOption)?
    | KW_IDENTIFIED KW_WITH authPlugin=uid ((KW_BY (STRING_LITERAL | (KW_RANDOM KW_PASSWORD))) | KW_AS STRING_LITERAL)? (KW_AND createUserAuthOption)?
    | KW_IDENTIFIED KW_WITH authPlugin=uid createUserInitialAuthOption?
    ;
createUserInitialAuthOption
    : KW_INITIAL KW_AUTHENTICATION KW_IDENTIFIED KW_BY ((KW_RANDOM KW_PASSWORD) | STRING_LITERAL)
    | KW_INITIAL KW_AUTHENTICATION KW_IDENTIFIED KW_WITH authPlugin=uid KW_AS STRING_LITERAL
    ;

userAuthOption
    : userName KW_IDENTIFIED KW_BY KW_PASSWORD hashed=STRING_LITERAL         #hashAuthOption
    | userName KW_IDENTIFIED KW_BY KW_RANDOM KW_PASSWORD authOptionClause       #randomAuthOption
    | userName KW_IDENTIFIED KW_BY STRING_LITERAL authOptionClause        #stringAuthOption
    | userName KW_IDENTIFIED KW_WITH authenticationRule                   #moduleAuthOption
    | userName                                                      #simpleAuthOption
    ;

authOptionClause
    : (KW_REPLACE STRING_LITERAL)? (KW_RETAIN KW_CURRENT KW_PASSWORD)?
    ;

authenticationRule
    : authPlugin=uid
      ((KW_BY | KW_USING | KW_AS) (STRING_LITERAL | KW_RANDOM KW_PASSWORD)
      authOptionClause)?                                            #module
    | authPlugin=uid
      KW_USING passwordFunctionClause                                  #passwordModuleOption
    ;

tlsOption
    : KW_SSL
    | KW_X509
    | KW_CIPHER STRING_LITERAL
    | KW_ISSUER STRING_LITERAL
    | KW_SUBJECT STRING_LITERAL
    ;

userResourceOption
    : KW_MAX_QUERIES_PER_HOUR decimalLiteral
    | KW_MAX_UPDATES_PER_HOUR decimalLiteral
    | KW_MAX_CONNECTIONS_PER_HOUR decimalLiteral
    | KW_MAX_USER_CONNECTIONS decimalLiteral
    ;

userPasswordOption
    : KW_PASSWORD KW_EXPIRE
      (expireType=KW_DEFAULT
      | expireType=KW_NEVER
      | expireType=KW_INTERVAL decimalLiteral KW_DAY
      )?
    | KW_PASSWORD KW_HISTORY (KW_DEFAULT | decimalLiteral)
    | KW_PASSWORD KW_REUSE KW_INTERVAL (KW_DEFAULT | decimalLiteral KW_DAY)
    | KW_PASSWORD KW_REQUIRE KW_CURRENT (KW_OPTIONAL | KW_DEFAULT)?
    | KW_FAILED_LOGIN_ATTEMPTS decimalLiteral
    | KW_PASSWORD_LOCK_TIME (decimalLiteral | KW_UNBOUNDED)
    ;

userLockOption
    : KW_ACCOUNT lockType=(KW_LOCK | KW_UNLOCK)
    ;

factorAuthOption
    : KW_IDENTIFIED (KW_WITH authPlugin=uid)? ((KW_BY (STRING_LITERAL | (KW_RANDOM KW_PASSWORD))) | KW_AS STRING_LITERAL)
    ;

registrationOption
    : factor KW_INITIATE KW_REGISTRATION
    | factor KW_FINISH KW_REGISTRATION KW_SET KW_CHALLENGE_RESPONSE KW_AS STRING_LITERAL
    | factor KW_UNREGISTER
    ;

factor
    : (TWO_DECIMAL | THREE_DECIMAL) KW_FACTOR
    ;

privelegeClause
    : privilege ( '(' columnNames ')' )?
    ;

privilege
    : KW_ALL KW_PRIVILEGES?
    | KW_ALTER KW_ROUTINE?
    | KW_CREATE
      (KW_TEMPORARY KW_TABLES | KW_ROUTINE | KW_VIEW | KW_USER | KW_TABLESPACE | KW_ROLE)?
    | KW_DELETE | KW_DROP (KW_ROLE)? | KW_EVENT | KW_EXECUTE | KW_FILE | KW_GRANT KW_OPTION
    | KW_INDEX | KW_INSERT | KW_LOCK KW_TABLES | KW_PROCESS | KW_PROXY
    | KW_REFERENCES | KW_RELOAD
    | KW_REPLICATION (KW_CLIENT | KW_SLAVE)
    | KW_SELECT
    | KW_SHOW (KW_VIEW | KW_DATABASES)
    | KW_SHUTDOWN | KW_SUPER | KW_TRIGGER | KW_UPDATE | KW_USAGE
    | KW_APPLICATION_PASSWORD_ADMIN | KW_AUDIT_ABORT_EXEMPT | KW_AUDIT_ADMIN | KW_AUTHENTICATION_POLICY_ADMIN | KW_BACKUP_ADMIN | KW_BINLOG_ADMIN | KW_BINLOG_ENCRYPTION_ADMIN | KW_CLONE_ADMIN
    | KW_CONNECTION_ADMIN | KW_ENCRYPTION_KEY_ADMIN | KW_FIREWALL_ADMIN | KW_FIREWALL_EXEMPT | KW_FIREWALL_USER | KW_FLUSH_OPTIMIZER_COSTS
    | KW_FLUSH_STATUS | KW_FLUSH_TABLES | KW_FLUSH_USER_RESOURCES | KW_GROUP_REPLICATION_ADMIN
    | KW_INNODB_REDO_LOG_ARCHIVE | KW_INNODB_REDO_LOG_ENABLE | KW_NDB_STORED_USER | KW_PASSWORDLESS_USER_ADMIN | KW_PERSIST_RO_VARIABLES_ADMIN | KW_REPLICATION_APPLIER
    | KW_REPLICATION_SLAVE_ADMIN | KW_RESOURCE_GROUP_ADMIN | KW_RESOURCE_GROUP_USER | KW_ROLE_ADMIN
    | KW_SERVICE_CONNECTION_ADMIN
    | KW_SESSION_VARIABLES_ADMIN | KW_SET_USER_ID | KW_SKIP_QUERY_REWRITE | KW_SHOW_ROUTINE | KW_SYSTEM_USER | KW_SYSTEM_VARIABLES_ADMIN
    | KW_TABLE_ENCRYPTION_ADMIN | KW_TP_CONNECTION_ADMIN | KW_VERSION_TOKEN_ADMIN | KW_XA_RECOVER_ADMIN
    // MySQL on Amazon RDS
    | KW_LOAD KW_FROM KW_S3 | KW_SELECT KW_INTO KW_S3 | KW_INVOKE KW_LAMBDA
    ;

privilegeLevel
    : '*'                                                           #currentSchemaPriviLevel
    | '*' '.' '*'                                                   #globalPrivLevel
    | uid '.' '*'                                                   #definiteSchemaPrivLevel
    | uid '.' uid                                                   #definiteFullTablePrivLevel
    | uid dottedId                                                  #definiteFullTablePrivLevel2
    | uid                                                           #definiteTablePrivLevel
    ;

renameUserClause
    : fromFirst=userName KW_TO toFirst=userName
    ;

//    Table maintenance statements

analyzeTable
    : KW_ANALYZE tableActionOption? KW_TABLE tableNames
    | KW_ANALYZE tableActionOption? KW_TABLE tableName KW_UPDATE KW_HISTOGRAM KW_ON columnNames (KW_WITH decimalLiteral KW_BUCKETS)?
    | KW_ANALYZE tableActionOption? KW_TABLE tableName KW_UPDATE KW_HISTOGRAM KW_ON columnName (KW_USING KW_DATA STRING_LITERAL)?
    | KW_ANALYZE tableActionOption? KW_TABLE tableName KW_DROP KW_HISTOGRAM KW_ON columnNames
    ;

checkTable
    : KW_CHECK KW_TABLE tableNames checkTableOption*
    ;

checksumTable
    : KW_CHECKSUM KW_TABLE tableNames actionOption=(KW_QUICK | KW_EXTENDED)?
    ;

optimizeTable
    : KW_OPTIMIZE tableActionOption?
      (KW_TABLE | KW_TABLES) tableNames
    ;

repairTable
    : KW_REPAIR tableActionOption?
      KW_TABLE tableNames
      KW_QUICK? KW_EXTENDED? KW_USE_FRM?
    ;

tableActionOption
    : KW_NO_WRITE_TO_BINLOG | KW_LOCAL
    ;

checkTableOption
    : KW_FOR KW_UPGRADE | KW_QUICK | KW_FAST | KW_MEDIUM | KW_EXTENDED | KW_CHANGED
    ;

createFunction
    : KW_CREATE KW_AGGREGATE? KW_FUNCTION ifNotExists? functionNameCreate
      KW_RETURNS returnType=(KW_STRING | KW_INTEGER | KW_REAL | KW_DECIMAL)
      KW_SONAME STRING_LITERAL
    ;

installComponent
    : KW_INSTALL KW_COMPONENT component_name=uid (',' component_name=uid)* (KW_SET variableExpr (',' variableExpr)*)?
    ;
variableExpr
    : (KW_GLOBAL | GLOBAL_ID | KW_PERSIST | PERSIST_ID) system_var_name=fullId '=' expression
    ;

uninstallComponent
    : KW_UNINSTALL KW_COMPONENT component_name=uid (',' component_name=uid)*
    ;

installPlugin
    : KW_INSTALL KW_PLUGIN pluginName=uid KW_SONAME STRING_LITERAL
    ;

uninstallPlugin
    : KW_UNINSTALL KW_PLUGIN pluginName=uid
    ;


cloneStatement
    : KW_CLONE KW_LOCAL KW_DATA KW_DIRECTORY '='? STRING_LITERAL
    | KW_CLONE KW_INSTANCE KW_FROM userHostPort
        KW_IDENTIFIED KW_BY STRING_LITERAL
        (KW_DATA KW_DIRECTORY '='? STRING_LITERAL)?
        (KW_REQUIRE KW_NO? KW_SSL)?
    ;

setStatement
    : KW_SET variableClause ('=' | ':=') (expression | KW_ON)
      (',' variableClause ('=' | ':=') (expression | KW_ON))*                      #setVariable
    | KW_SET charSet (charsetName | KW_DEFAULT)          #setCharset
    | KW_SET KW_NAMES
        (charsetName (KW_COLLATE collationName)? | KW_DEFAULT)                        #setNames
    | setPasswordStatement                                                      #setPassword
    | setTransactionStatement                                                   #setTransaction
    | setAutocommitStatement                                                    #setAutocommit
    | KW_SET system_var_name=fullId ('=' | ':=') expression (',' system_var_name=fullId ('=' | ':=') expression)*    #setNewValueInsideTrigger
    ;

showStatement
    : KW_SHOW logFormat=(KW_BINARY | KW_MASTER) KW_LOGS                         #showMasterLogs
    | KW_SHOW logFormat=(KW_BINLOG | KW_RELAYLOG) KW_EVENTS
        (KW_IN filename=STRING_LITERAL)?
        (KW_FROM fromPosition=decimalLiteral)?
        (KW_LIMIT (offset=decimalLiteral ',')? rowCount=decimalLiteral)?
        channelOption?       #showLogEvents
    | KW_SHOW showCommonEntity showFilter?                             #showObjectFilter
    | KW_SHOW KW_EXTENDED? KW_FULL? columnsFormat=(KW_COLUMNS | KW_FIELDS)
      tableFormat=(KW_FROM | KW_IN) tableName
        (schemaFormat=(KW_FROM | KW_IN) databaseName)? showFilter?                 #showColumns
    | KW_SHOW KW_CREATE (KW_DATABASE | KW_SCHEMA) ifNotExists? databaseNameCreate      #showCreateDb
    | KW_SHOW KW_CREATE (KW_EVENT | KW_PROCEDURE | KW_TRIGGER) fullId    #showCreateFullIdObject
    | KW_SHOW KW_CREATE KW_FUNCTION functionNameCreate    #showCreateFunction
    | KW_SHOW KW_CREATE KW_VIEW viewNameCreate    #showCreateView
    | KW_SHOW KW_CREATE KW_TABLE tableNameCreate                    #showCreateTable
    | KW_SHOW KW_CREATE KW_USER userName                                     #showCreateUser
    | KW_SHOW KW_ENGINE engineName engineOption=(KW_STATUS | KW_MUTEX)          #showEngine
    | KW_SHOW showGlobalInfoClause                                     #showGlobalInfo
    | KW_SHOW errorFormat=(KW_ERRORS | KW_WARNINGS)
        (KW_LIMIT
          (offset=decimalLiteral ',')?
          rowCount=decimalLiteral
        )?                                                          #showErrors
    | KW_SHOW KW_COUNT '(' '*' ')' errorFormat=(KW_ERRORS | KW_WARNINGS)        #showCountErrors
    | KW_SHOW showSchemaEntity (schemaFormat=(KW_FROM | KW_IN) databaseName)? showFilter?          #showSchemaFilter
    | KW_SHOW KW_PROCEDURE KW_CODE proc_name=fullId               #showPercedureCode
    | KW_SHOW KW_FUNCTION KW_CODE functionName               #showFunctionCode
    | KW_SHOW KW_GRANTS (KW_FOR userOrRoleName (KW_USING userOrRoleNames)?)?                                   #showGrants
    | KW_SHOW KW_EXTENDED? indexFormat=(KW_INDEX | KW_INDEXES | KW_KEYS)
      tableFormat=(KW_FROM | KW_IN) tableName
        (schemaFormat=(KW_FROM | KW_IN) databaseName)? (KW_WHERE expression)?         #showIndexes
    | KW_SHOW KW_OPEN KW_TABLES ((KW_FROM | KW_IN) databaseName)? showFilter?     #showOpenTables
    | KW_SHOW KW_PROFILE (showProfileType (',' showProfileType)*)?
        (KW_FOR KW_QUERY queryCount=decimalLiteral)?
        (KW_LIMIT rowCount=decimalLiteral (KW_OFFSET offset=decimalLiteral)?)?       #showProfile
    | KW_SHOW (KW_REPLICA | KW_SLAVE) KW_STATUS channelOption?               #showSlaveStatus
    | KW_SHOW KW_REPLICAS              #showReplicas
    ;

// details

variableClause
    : LOCAL_ID | GLOBAL_ID | (('@' '@')? (KW_GLOBAL | KW_PERSIST | KW_PERSIST_ONLY | KW_SESSION | KW_LOCAL))? target=uid
    ;

showCommonEntity
    : KW_CHARACTER KW_SET | KW_CHARSET | KW_COLLATION | KW_DATABASES | KW_SCHEMAS
    | KW_FUNCTION KW_STATUS | KW_PROCEDURE KW_STATUS
    | (KW_GLOBAL | KW_SESSION)? (KW_STATUS | KW_VARIABLES)
    ;

showFilter
    : KW_LIKE STRING_LITERAL
    | KW_WHERE expression
    ;

showGlobalInfoClause
    : KW_STORAGE? KW_ENGINES | KW_MASTER KW_STATUS | KW_PLUGINS
    | KW_PRIVILEGES | KW_FULL? KW_PROCESSLIST | KW_PROFILES
    | KW_SLAVE KW_HOSTS | KW_AUTHORS | KW_CONTRIBUTORS
    ;

showSchemaEntity
    : KW_EVENTS | KW_TABLE KW_STATUS | KW_EXTENDED? KW_FULL? KW_TABLES | KW_TRIGGERS
    ;

showProfileType
    : KW_ALL | KW_BLOCK KW_IO | KW_CONTEXT KW_SWITCHES | KW_CPU | KW_IPC | KW_MEMORY
    | KW_PAGE KW_FAULTS | KW_SOURCE | KW_SWAPS
    ;


//    Other administrative statements

binlogStatement
    : KW_BINLOG STRING_LITERAL
    ;

cacheIndexStatement
    : KW_CACHE KW_INDEX
        (tableIndex (',' tableIndex)* | tableName KW_PARTITION '(' (partitionNames | KW_ALL) ')')
        KW_IN databaseName
    ;

flushStatement
    : KW_FLUSH tableActionOption?
      flushOption (',' flushOption)*
    ;

killStatement
    : KW_KILL connectionFormat=(KW_CONNECTION | KW_QUERY)? expression
    ;

loadIndexIntoCache
    : KW_LOAD KW_INDEX KW_INTO KW_CACHE
      loadedTableIndexes (',' loadedTableIndexes)*
    ;

resetStatement
    : KW_RESET resetOption (',' resetOption)*
    ;

resetOption
    : KW_MASTER | KW_REPLICA | KW_QUERY KW_CACHE | KW_SLAVE
    ;

resetPersist
    : KW_RESET KW_PERSIST (ifExists? system_var_name=uid)?
    ;

resetAllChannel
    : KW_RESET (KW_REPLICA | KW_SLAVE) KW_ALL? channelOption?
    ;

reStartStatement
    : KW_RESTART
    ;

shutdownStatement
    : KW_SHUTDOWN
    ;

tableIndex
    : tableName (indexFormat=(KW_INDEX | KW_KEY) '(' indexNames ')')?
    ;

flushOption
    : (
        KW_DES_KEY_FILE | KW_HOSTS
        | (
            KW_BINARY | KW_ENGINE | KW_ERROR | KW_GENERAL | KW_RELAY | KW_SLOW
          )? KW_LOGS
        | KW_OPTIMIZER_COSTS | KW_PRIVILEGES | KW_QUERY KW_CACHE | KW_STATUS
        | KW_USER_RESOURCES | KW_TABLES (KW_WITH KW_READ KW_LOCK)?
       )                                                            #simpleFlushOption
    | KW_RELAY KW_LOGS channelOption?                                     #channelFlushOption
    | (KW_TABLE | KW_TABLES) tableNames? flushTableOption?                    #tableFlushOption
    ;

flushTableOption
    : KW_WITH KW_READ KW_LOCK
    | KW_FOR KW_EXPORT
    ;

loadedTableIndexes
    : tableName
      ( KW_PARTITION '(' (partitionNames | KW_ALL) ')' )?
      ( indexFormat=(KW_INDEX | KW_KEY)? '(' indexNames ')' )?
      (KW_IGNORE KW_LEAVES)?
    ;

simpleDescribeStatement
    : command=(KW_EXPLAIN | KW_DESCRIBE | KW_DESC) tableName
      (column=columnName | pattern=STRING_LITERAL)?
    ;

fullDescribeStatement
    : command=(KW_EXPLAIN | KW_DESCRIBE | KW_DESC)
        (KW_EXTENDED | KW_PARTITIONS | KW_FORMAT '=' (KW_TRADITIONAL | KW_JSON | KW_TREE))?
        describeObjectClause
    ;

analyzeDescribeStatement
    : command=(KW_EXPLAIN | KW_DESCRIBE | KW_DESC) KW_ANALYZE (KW_FORMAT '=' KW_TREE)? selectStatement
    ;

helpStatement
    : KW_HELP STRING_LITERAL
    ;

useStatement
    : KW_USE databaseName
    ;

signalStatement
    : KW_SIGNAL ( ( KW_SQLSTATE KW_VALUE? stringLiteral ) | ID | REVERSE_QUOTE_ID )
        ( KW_SET signalConditionInformation ( ',' signalConditionInformation)* )?
    ;

resignalStatement
    : KW_RESIGNAL ( ( KW_SQLSTATE KW_VALUE? stringLiteral ) | ID | REVERSE_QUOTE_ID )?
        ( KW_SET signalConditionInformation ( ',' signalConditionInformation)* )?
    ;

signalConditionInformation
    : ( KW_CLASS_ORIGIN
          | KW_SUBCLASS_ORIGIN
          | KW_MESSAGE_TEXT
          | KW_MYSQL_ERRNO
          | KW_CONSTRAINT_CATALOG
          | KW_CONSTRAINT_SCHEMA
          | KW_CONSTRAINT_NAME
          | KW_CATALOG_NAME
          | KW_SCHEMA_NAME
          | KW_TABLE_NAME
          | KW_COLUMN_NAME
          | KW_CURSOR_NAME
        ) '=' ( stringLiteral | DECIMAL_LITERAL | mysqlVariable | simpleId )
    ;

withStatement
  : KW_WITH KW_RECURSIVE? commonTableExpressions (',' commonTableExpressions)*
  ;

tableStatement
  : KW_TABLE tableName orderByClause? limitClause?
  ;

diagnosticsStatement
    : KW_GET ( KW_CURRENT | KW_STACKED )? KW_DIAGNOSTICS (
          ( variableClause '=' ( KW_NUMBER | KW_ROW_COUNT ) ( ',' variableClause '=' ( KW_NUMBER | KW_ROW_COUNT ) )* )
        | ( KW_CONDITION  ( decimalLiteral | variableClause ) variableClause '=' diagnosticsConditionInformationName ( ',' variableClause '=' diagnosticsConditionInformationName )* )
      )
    ;

diagnosticsConditionInformationName
    : KW_CLASS_ORIGIN
    | KW_SUBCLASS_ORIGIN
    | KW_RETURNED_SQLSTATE
    | KW_MESSAGE_TEXT
    | KW_MYSQL_ERRNO
    | KW_CONSTRAINT_CATALOG
    | KW_CONSTRAINT_SCHEMA
    | KW_CONSTRAINT_NAME
    | KW_CATALOG_NAME
    | KW_SCHEMA_NAME
    | KW_TABLE_NAME
    | KW_COLUMN_NAME
    | KW_CURSOR_NAME
    ;

describeObjectClause
    : (selectStatement | deleteStatement | insertStatement | replaceStatement | updateStatement)    #describeStatements
    | KW_FOR KW_CONNECTION connection_id=uid                                            #describeConnection
    ;


databaseNameCreate
    : fullId
    ;
databaseName
    : fullId
    ;

functionNameCreate
    : fullId
    ;
functionName
    : fullId
    ;

viewNameCreate
    : fullId
    ;
viewName
    : fullId
    ;

indexNameCreate
    : uid
    ;
indexNames
    : indexName (',' indexName)*
    ;
indexName
    : uid
    ;

groupNameCreate
    : uid
    ;
groupName
    : uid
    ;

tableNameCreate
    : fullId
    ;
tableNames
    : tableName (',' tableName)*
    ;
tableName
    : fullId
    ;

userOrRoleNames
    : userOrRoleName (',' userOrRoleName)*
    ;
userOrRoleName
    : userName | uid
    ;

columnNameCreate
    : uid (dottedId dottedId? )?
    | .? dottedId dottedId?
    ;
columnNames
    : columnName (',' columnName)*
    ;
columnName
    : uid (dottedId dottedId? )?
    | .? dottedId dottedId?
    ;

tablespaceNameCreate
    : uid
    ;
tablespaceName
    : uid
    ;

partitionNameCreate
    : uid
    ;
partitionNames
    : partitionName (',' partitionName)*
    ;
partitionName
    : uid
    ;

indexColumnName
    : (uid ('(' decimalLiteral ')')? | expression) sortType=(KW_ASC | KW_DESC)?
    ;

userHostPort
    : userAtHost COLON_SYMB decimalLiteral
    ;
userAtHost
    : simpleUserName HOST_IP_ADDRESS
    ;

simpleUserName
    : STRING_LITERAL
    | ID
    | KW_ADMIN
    | keywordsCanBeId;
hostName: (LOCAL_ID | HOST_IP_ADDRESS | '@' );
userName
    : simpleUserName hostName?
    | currentUserExpression;

mysqlVariable
    : LOCAL_ID
    | GLOBAL_ID
    ;

charsetName
    : KW_BINARY
    | charsetNameBase
    | STRING_LITERAL
    | CHARSET_REVERSE_QOUTE_STRING
    ;

collationName
    : uid;

engineName
    : engineNameBase
    | ID
    | STRING_LITERAL
    ;

engineNameBase
    : KW_ARCHIVE | KW_BLACKHOLE | KW_CONNECT | KW_CSV | KW_FEDERATED | KW_INNODB | KW_MEMORY
    | KW_MRG_MYISAM | KW_MYISAM | KW_NDB | KW_NDBCLUSTER | KW_PERFORMANCE_SCHEMA | KW_TOKUDB
    ;

uuidSet
    : decimalLiteral '-' decimalLiteral '-' decimalLiteral
      '-' decimalLiteral '-' decimalLiteral
      (':' decimalLiteral '-' decimalLiteral)+
    ;

xid
    : globalTableUid=xuidStringId
      (
        ',' qualifier=xuidStringId
        (',' idFormat=decimalLiteral)?
      )?
    ;

xuidStringId
    : STRING_LITERAL
    | BIT_STRING
    | HEXADECIMAL_LITERAL+
    ;

fullId
    : uid dottedId?
    ;

uidList
    : uid (',' uid)*
    ;
uid
    : simpleId
    //| DOUBLE_QUOTE_ID
    //| REVERSE_QUOTE_ID
    | CHARSET_REVERSE_QOUTE_STRING
    | STRING_LITERAL
    ;

simpleId
    : ID
    | charsetNameBase
    | transactionLevelBase
    | engineNameBase
    | privilegesBase
    | intervalTypeBase
    | dataTypeBase
    | keywordsCanBeId
    | scalarFunctionName
    ;

dottedId
    : DOT_ID
    | '.' uid
    ;

decimalLiteral
    : DECIMAL_LITERAL | ZERO_DECIMAL | ONE_DECIMAL | TWO_DECIMAL | THREE_DECIMAL | REAL_LITERAL
    ;

fileSizeLiteral
    : FILESIZE_LITERAL | decimalLiteral;

stringLiteral
    : (
        STRING_CHARSET_NAME? STRING_LITERAL
        | START_NATIONAL_STRING_LITERAL
      ) STRING_LITERAL+
    | (
        STRING_CHARSET_NAME? STRING_LITERAL
        | START_NATIONAL_STRING_LITERAL
      ) (KW_COLLATE collationName)?
    ;

booleanLiteral
    : KW_TRUE | KW_FALSE;

hexadecimalLiteral
    : STRING_CHARSET_NAME? HEXADECIMAL_LITERAL;

nullNotnull
    : KW_NOT? (KW_NULL_LITERAL | NULL_SPEC_LITERAL)
    ;

constant
    : stringLiteral | decimalLiteral
    | '-' decimalLiteral
    | hexadecimalLiteral | booleanLiteral
    | REAL_LITERAL | BIT_STRING
    | KW_NOT? nullLiteral=(KW_NULL_LITERAL | NULL_SPEC_LITERAL)
    ;


//    Data Types

dataType
    : typeName=(
      KW_CHAR | KW_CHARACTER | KW_VARCHAR | KW_TINYTEXT | KW_TEXT | KW_MEDIUMTEXT | KW_LONGTEXT
       | KW_NCHAR | KW_NVARCHAR | KW_LONG
      )
      KW_VARYING?
      lengthOneDimension? KW_BINARY?
      (charSet charsetName)?
      (KW_COLLATE collationName | KW_BINARY)?                             #stringDataType
    | KW_NATIONAL typeName=(KW_CHAR | KW_CHARACTER) KW_VARYING
      lengthOneDimension? KW_BINARY?                                   #nationalVaryingStringDataType
    | KW_NATIONAL typeName=(KW_VARCHAR | KW_CHARACTER | KW_CHAR)
      lengthOneDimension? KW_BINARY?                                   #nationalStringDataType
    | KW_NCHAR typeName=KW_VARCHAR
      lengthOneDimension? KW_BINARY?                                   #nationalStringDataType
    | typeName=(
        KW_TINYINT | KW_SMALLINT | KW_MEDIUMINT | KW_INT | KW_INTEGER | KW_BIGINT
        | KW_MIDDLEINT | KW_INT1 | KW_INT2 | KW_INT3 | KW_INT4 | KW_INT8
      )
      lengthOneDimension? (KW_SIGNED | KW_UNSIGNED | KW_ZEROFILL)*           #dimensionDataType
    | typeName=KW_REAL
      lengthTwoDimension? (KW_SIGNED | KW_UNSIGNED | KW_ZEROFILL)*           #dimensionDataType
    | typeName=KW_DOUBLE KW_PRECISION?
      lengthTwoDimension? (KW_SIGNED | KW_UNSIGNED | KW_ZEROFILL)*           #dimensionDataType
    | typeName=(KW_DECIMAL | KW_DEC | KW_FIXED | KW_NUMERIC | KW_FLOAT | KW_FLOAT4 | KW_FLOAT8)
      lengthTwoOptionalDimension? (KW_SIGNED | KW_UNSIGNED | KW_ZEROFILL)*   #dimensionDataType
    | typeName=(
        KW_DATE | KW_TINYBLOB | KW_MEDIUMBLOB | KW_LONGBLOB
        | KW_BOOL | KW_BOOLEAN | KW_SERIAL
      )                                                             #simpleDataType
    | typeName=(
        KW_BIT | KW_TIME | KW_TIMESTAMP | KW_DATETIME | KW_BINARY
        | KW_VARBINARY | KW_BLOB | KW_YEAR
      )
      lengthOneDimension?                                           #dimensionDataType
    | typeName=(KW_ENUM | KW_SET)
      collectionOptions KW_BINARY?
      (charSet charsetName)?                                        #collectionDataType
    | typeName=(
        KW_GEOMETRYCOLLECTION | KW_GEOMCOLLECTION | KW_LINESTRING | KW_MULTILINESTRING
        | KW_MULTIPOINT | KW_MULTIPOLYGON | KW_POINT | KW_POLYGON | KW_JSON | KW_GEOMETRY
      )  (KW_SRID decimalLiteral)?                                    #spatialDataType
    | typeName=KW_LONG KW_VARCHAR?
      KW_BINARY?
      (charSet charsetName)?
      (KW_COLLATE collationName)?                                      #longVarcharDataType    // LONG VARCHAR is the same as LONG
    | KW_LONG KW_VARBINARY                                                #longVarbinaryDataType
    ;

collectionOptions
    : '(' STRING_LITERAL (',' STRING_LITERAL)* ')'
    ;

convertedDataType
    :
    (
      typeName=(KW_BINARY| KW_NCHAR) lengthOneDimension?
      | typeName=KW_CHAR lengthOneDimension? (charSet charsetName)?
      | typeName=(KW_DATE | KW_DATETIME | KW_TIME | KW_JSON | KW_INT | KW_INTEGER)
      | typeName=(KW_DECIMAL | KW_DEC) lengthTwoOptionalDimension?
      | (KW_SIGNED | KW_UNSIGNED) (KW_INTEGER | KW_INT)?
    ) KW_ARRAY?
    ;

lengthOneDimension
    : '(' decimalLiteral ')'
    ;

lengthTwoDimension
    : '(' decimalLiteral ',' decimalLiteral ')'
    ;

lengthTwoOptionalDimension
    : '(' decimalLiteral (',' decimalLiteral)? ')'
    ;



indexColumnNames
    : '(' indexColumnName (',' indexColumnName)* ')'
    ;

expressions
    : expression (',' expression)*
    ;

valuesOrValueList
    : (KW_VALUES | KW_VALUE) expressionsWithDefaults (',' expressionsWithDefaults)*
    ;

// (valueList)
expressionsWithDefaults
    : '(' expressionOrDefault (',' expressionOrDefault)* ')'
    ;

// value
expressionOrDefault
    : expression | KW_DEFAULT
    ;

constants
    : constant (',' constant)*
    ;

simpleStrings
    : STRING_LITERAL (',' STRING_LITERAL)*
    ;

userVariables
    : LOCAL_ID (',' LOCAL_ID)*
    ;


//    Common Expressons

defaultValue
    : KW_NULL_LITERAL
    | KW_CAST '(' expression KW_AS convertedDataType ')'
    | unaryOperator? constant
    | currentTimestamp (KW_ON KW_UPDATE currentTimestamp)?
    | '(' expression ')'
    | '(' fullId ')'
    ;

currentTimestamp
    :
    (
      (KW_CURRENT_TIMESTAMP | KW_LOCALTIME | KW_LOCALTIMESTAMP)
      ('(' decimalLiteral? ')')?
      | KW_NOW '(' decimalLiteral? ')'
    )
    ;

ifExists
    : KW_IF KW_EXISTS
    ;

ifNotExists
    : KW_IF KW_NOT KW_EXISTS
    ;

orReplace
    : KW_OR KW_REPLACE
    ;

//    Functions

functionCall
    : specificFunction                                              #specificFunctionCall
    | aggregateWindowedFunction                                     #aggregateFunctionCall
    | nonAggregateWindowedFunction                                  #nonAggregateFunctionCall
    | scalarFunctionName '(' functionArgs? ')'                      #scalarFunctionCall
    | fullId '(' functionArgs? ')'                                  #udfFunctionCall
    | passwordFunctionClause                                        #passwordFunctionCall
    ;

specificFunction
    : (
      KW_CURRENT_DATE | KW_CURRENT_TIME | KW_CURRENT_TIMESTAMP
      | KW_LOCALTIME | KW_UTC_TIMESTAMP | KW_SCHEMA
      ) ('(' ')')?                                                  #simpleFunctionCall
    | currentUserExpression                                         #currentUser
    | KW_CONVERT '(' expression separator=',' convertedDataType ')'    #dataTypeFunctionCall
    | KW_CONVERT '(' expression KW_USING charsetName ')'                  #dataTypeFunctionCall
    | KW_CAST '(' expression KW_AS convertedDataType ')'                  #dataTypeFunctionCall
    | KW_VALUES '(' columnName ')'                                 #valuesFunctionCall
    | KW_CASE expression caseFuncAlternative+
      (KW_ELSE elseArg=functionArg)? KW_END                               #caseExpressionFunctionCall
    | KW_CASE caseFuncAlternative+
      (KW_ELSE elseArg=functionArg)? KW_END                               #caseFunctionCall
    | KW_CHAR '(' functionArgs  (KW_USING charsetName)? ')'               #charFunctionCall
    | KW_POSITION
      '('
          (
            positionString=stringLiteral
            | positionExpression=expression
          )
          KW_IN
          (
            inString=stringLiteral
            | inExpression=expression
          )
      ')'                                                           #positionFunctionCall
    | (KW_SUBSTR | KW_SUBSTRING)
      '('
        (
          sourceString=stringLiteral
          | sourceExpression=expression
        ) KW_FROM
        (
          fromDecimal=decimalLiteral
          | fromExpression=expression
        )
        (
          KW_FOR
          (
            forDecimal=decimalLiteral
            | forExpression=expression
          )
        )?
      ')'                                                           #substrFunctionCall
    | KW_TRIM
      '('
        positioinForm=(KW_BOTH | KW_LEADING | KW_TRAILING)
        (
          sourceString=stringLiteral
          | sourceExpression=expression
        )?
        KW_FROM
        (
          fromString=stringLiteral
          | fromExpression=expression
        )
      ')'                                                           #trimFunctionCall
    | KW_TRIM
      '('
        (
          sourceString=stringLiteral
          | sourceExpression=expression
        )
        KW_FROM
        (
          fromString=stringLiteral
          | fromExpression=expression
        )
      ')'                                                           #trimFunctionCall
    | KW_WEIGHT_STRING
      '('
        (stringLiteral | expression)
        (KW_AS stringFormat=(KW_CHAR | KW_BINARY)
        '(' decimalLiteral ')' )?  levelsInWeightString?
      ')'                                                           #weightFunctionCall
    | KW_EXTRACT
      '('
        intervalType
        KW_FROM
        (
          sourceString=stringLiteral
          | sourceExpression=expression
        )
      ')'                                                           #extractFunctionCall
    | KW_GET_FORMAT
      '('
        datetimeFormat=(KW_DATE | KW_TIME | KW_DATETIME)
        ',' stringLiteral
      ')'                                                           #getFormatFunctionCall
    | KW_JSON_VALUE
      '(' expression
       ',' expression
         (KW_RETURNING convertedDataType)?
         jsonOnEmpty?
         jsonOnError?
       ')'                                                          #jsonValueFunctionCall
    ;

caseFuncAlternative
    : KW_WHEN condition=functionArg
      KW_THEN consequent=functionArg
    ;

levelsInWeightString
    : KW_LEVEL levelInWeightListElement
      (',' levelInWeightListElement)*                               #levelWeightList
    | KW_LEVEL
      firstLevel=decimalLiteral '-' lastLevel=decimalLiteral        #levelWeightRange
    ;

levelInWeightListElement
    : decimalLiteral orderType=(KW_ASC | KW_DESC | KW_REVERSE)?
    ;

aggregateWindowedFunction
    : (KW_AVG | KW_MAX | KW_MIN | KW_SUM)
      '(' aggregator=(KW_ALL | KW_DISTINCT)? functionArg ')' overClause?
    | KW_COUNT '(' (starArg='*' | aggregator=KW_ALL? functionArg | aggregator=KW_DISTINCT functionArgs) ')' overClause?
    | (
        KW_BIT_AND | KW_BIT_OR | KW_BIT_XOR | KW_STD | KW_STDDEV | KW_STDDEV_POP
        | KW_STDDEV_SAMP | KW_VAR_POP | KW_VAR_SAMP | KW_VARIANCE
      ) '(' aggregator=KW_ALL? functionArg ')' overClause?
    | KW_GROUP_CONCAT '('
        aggregator=KW_DISTINCT? functionArgs
        (KW_ORDER KW_BY
          orderByExpression (',' orderByExpression)*
        )? (KW_SEPARATOR separator=STRING_LITERAL)?
      ')'
    ;

nonAggregateWindowedFunction
    : (KW_LAG | KW_LEAD) '(' expression (',' decimalLiteral)? (',' decimalLiteral)? ')' overClause
    | (KW_FIRST_VALUE | KW_LAST_VALUE) '(' expression ')' overClause
    | (KW_CUME_DIST | KW_DENSE_RANK | KW_PERCENT_RANK | KW_RANK | KW_ROW_NUMBER) '('')' overClause
    | KW_NTH_VALUE '(' expression ',' decimalLiteral ')' overClause
    | KW_NTILE '(' decimalLiteral ')' overClause
    ;

overClause
    : KW_OVER ('(' windowSpec ')' | windowName)
    ;

windowSpec
    : windowName? partitionClause? orderByClause? frameClause?
    ;

windowName
    : uid
    ;

frameClause
    : frameUnits frameExtent
    ;

frameUnits
    : KW_ROWS | KW_RANGE
    ;

frameExtent
    : frameRange | frameBetween
    ;

frameBetween
    : KW_BETWEEN frameRange KW_AND frameRange
    ;

frameRange
    : KW_CURRENT KW_ROW
    | KW_UNBOUNDED (KW_PRECEDING | KW_FOLLOWING)
    | expression (KW_PRECEDING | KW_FOLLOWING)
    ;

partitionClause
    : KW_PARTITION KW_BY expression (',' expression)*
    ;

scalarFunctionName
    : functionNameBase
    | KW_ASCII | KW_CURDATE | KW_CURRENT_DATE | KW_CURRENT_TIME
    | KW_CURRENT_TIMESTAMP | KW_CURTIME | KW_DATE_ADD | KW_DATE_SUB
    | KW_IF | KW_INSERT | KW_LOCALTIME | KW_LOCALTIMESTAMP | KW_MID | KW_NOW
    | KW_REPEAT | KW_REPLACE | KW_SUBSTR | KW_SUBSTRING | KW_SYSDATE | KW_TRIM
    | KW_UTC_DATE | KW_UTC_TIME | KW_UTC_TIMESTAMP
    ;

passwordFunctionClause
    : (KW_PASSWORD | KW_OLD_PASSWORD) '(' functionArg ')'
    ;

functionArgs
    : functionArg (',' functionArg)*
    ;

functionArg
    : constant | columnName | functionCall | expression
    ;


//    Expressions, predicates

// Simplified approach for expression
expression
    : notOperator=(KW_NOT | '!') expression                            #notExpression
    | expression logicalOperator expression                         #logicalExpression
    | predicate KW_IS KW_NOT? testValue=(KW_TRUE | KW_FALSE | KW_UNKNOWN)          #isExpression
    | predicate                                                     #predicateExpression
    ;

predicate
    : predicate KW_NOT? KW_IN '(' (selectStatement | expressions) ')'     #inPredicate
    | predicate KW_IS nullNotnull                                      #isNullPredicate
    | left=predicate comparisonOperator right=predicate             #binaryComparisonPredicate
    | predicate comparisonOperator
      quantifier=(KW_ALL | KW_ANY | KW_SOME) '(' selectStatement ')'         #subqueryComparisonPredicate
    | predicate KW_NOT? KW_BETWEEN predicate KW_AND predicate                #betweenPredicate
    | predicate KW_SOUNDS KW_LIKE predicate                               #soundsLikePredicate
    | predicate KW_NOT? KW_LIKE predicate (KW_ESCAPE STRING_LITERAL)?        #likePredicate
    | predicate KW_NOT? regex=(KW_REGEXP | KW_RLIKE) predicate               #regexpPredicate
    | predicate KW_MEMBER KW_OF '(' predicate ')'                         #jsonMemberOfPredicate
    | expressionAtom                                                #expressionAtomPredicate
    ;


// Add in ASTVisitor nullNotnull in constant
expressionAtom
    : constant                                                      #constantExpressionAtom
    | columnName                                                #columnNameExpressionAtom
    | functionCall                                                  #functionCallExpressionAtom
    | expressionAtom KW_COLLATE collationName                          #collateExpressionAtom
    | mysqlVariable                                                 #mysqlVariableExpressionAtom
    | unaryOperator expressionAtom                                  #unaryExpressionAtom
    | KW_BINARY expressionAtom                                         #binaryExpressionAtom
    | LOCAL_ID VAR_ASSIGN expressionAtom                            #variableAssignExpressionAtom
    | '(' expression (',' expression)* ')'                          #nestedExpressionAtom
    | KW_ROW '(' expression (',' expression)+ ')'                      #nestedRowExpressionAtom
    | KW_EXISTS '(' selectStatement ')'                                #existsExpressionAtom
    | '(' selectStatement ')'                                       #subqueryExpressionAtom
    | KW_INTERVAL expression intervalType                              #intervalExpressionAtom
    | left=expressionAtom bitOperator right=expressionAtom          #bitExpressionAtom
    | left=expressionAtom mathOperator right=expressionAtom         #mathExpressionAtom
    | left=expressionAtom jsonOperator right=expressionAtom         #jsonExpressionAtom
    ;

unaryOperator
    : '!' | '~' | '+' | '-' | KW_NOT
    ;

comparisonOperator
    : comparisonBase
    | '<' '>' | '!' '=' | '<' '=' '>'
    ;

comparisonBase
    : '=' | '>' | '<' | '<' '=' | '>' '='
    ;

logicalOperator
    : KW_AND | '&' '&' | KW_XOR | KW_OR | '|' '|'
    ;

bitOperator
    : '<' '<' | '>' '>' | '&' | '^' | '|'
    ;

mathOperator
    : '*' | '/' | '%' | DIV | MOD | '+' | '-'
    ;

jsonOperator
    : '-' '>' | '-' '>' '>'
    ;

//    Simple id sets
//     (that keyword, which can be id)

charsetNameBase
    : KW_ARMSCII8 | KW_ASCII | KW_BIG5 | KW_BINARY | KW_CP1250 | KW_CP1251 | KW_CP1256 | KW_CP1257
    | KW_CP850 | KW_CP852 | KW_CP866 | KW_CP932 | KW_DEC8 | KW_EUCJPMS | KW_EUCKR
    | KW_GB18030 | KW_GB2312 | KW_GBK | KW_GEOSTD8 | KW_GREEK | KW_HEBREW | KW_HP8 | KW_KEYBCS2
    | KW_KOI8R | KW_KOI8U | KW_LATIN1 | KW_LATIN2 | KW_LATIN5 | KW_LATIN7 | KW_MACCE
    | KW_MACROMAN | KW_SJIS | KW_SWE7 | KW_TIS620 | KW_UCS2 | KW_UJIS | KW_UTF16
    | KW_UTF16LE | KW_UTF32 | KW_UTF8 | KW_UTF8MB3 | KW_UTF8MB4
    ;

transactionLevelBase
    : KW_REPEATABLE | KW_COMMITTED | KW_UNCOMMITTED | KW_SERIALIZABLE
    ;

privilegesBase
    : KW_TABLES | KW_ROUTINE | KW_EXECUTE | KW_FILE | KW_PROCESS
    | KW_RELOAD | KW_SHUTDOWN | KW_SUPER | KW_PRIVILEGES
    ;

intervalTypeBase
    : KW_QUARTER | KW_MONTH | KW_DAY | KW_HOUR
    | KW_MINUTE | KW_WEEK | KW_SECOND | KW_MICROSECOND
    ;

dataTypeBase
    : KW_DATE | KW_TIME | KW_TIMESTAMP | KW_DATETIME | KW_YEAR | KW_ENUM | KW_TEXT
    ;

keywordsCanBeId
    : KW_ACCOUNT | KW_ACTION | KW_ADMIN | KW_AFTER | KW_AGGREGATE | KW_ALGORITHM | KW_ANY | KW_ARRAY
    | KW_AT | KW_AUDIT_ADMIN | KW_AUDIT_ABORT_EXEMPT | KW_AUTHORS | KW_AUTOCOMMIT | KW_AUTOEXTEND_SIZE
    | KW_AUTO_INCREMENT | KW_AUTHENTICATION_POLICY_ADMIN | KW_AVG | KW_AVG_ROW_LENGTH | KW_ATTRIBUTE
    | KW_BACKUP_ADMIN | KW_BEGIN | KW_BINLOG | KW_BINLOG_ADMIN | KW_BINLOG_ENCRYPTION_ADMIN | KW_BIT | KW_BIT_AND | KW_BIT_OR | KW_BIT_XOR
    | KW_BLOCK | KW_BOOL | KW_BOOLEAN | KW_BTREE | KW_BUCKETS | KW_CACHE | KW_CASCADED | KW_CHAIN | KW_CHANGED
    | KW_CHANNEL | KW_CHECKSUM | KW_PAGE_CHECKSUM | KW_CATALOG_NAME | KW_CIPHER
    | KW_CLASS_ORIGIN | KW_CLIENT | KW_CLONE_ADMIN | KW_CLOSE | KW_CLUSTERING | KW_COALESCE | KW_CODE
    | KW_COLUMNS | KW_COLUMN_FORMAT | KW_COLUMN_NAME | KW_COMMENT | KW_COMMIT | KW_COMPACT
    | KW_COMPLETION | KW_COMPRESSED | KW_COMPRESSION | KW_CONCURRENT | KW_CONDITION | KW_CONNECT
    | KW_CONNECTION | KW_CONNECTION_ADMIN | KW_CONSISTENT | KW_CONSTRAINT_CATALOG | KW_CONSTRAINT_NAME
    | KW_CONSTRAINT_SCHEMA | KW_CONTAINS | KW_CONTEXT
    | KW_CONTRIBUTORS | KW_COPY | KW_COUNT | KW_CPU | KW_CURRENT | KW_CURRENT_USER | KW_CURSOR_NAME
    | KW_DATA | KW_DATAFILE | KW_DEALLOCATE
    | KW_DEFAULT | KW_DEFAULT_AUTH | KW_DEFINER | KW_DELAY_KEY_WRITE | KW_DES_KEY_FILE | KW_DIAGNOSTICS | KW_DIRECTORY
    | KW_DISABLE | KW_DISCARD | KW_DISK | KW_DO | KW_DUMPFILE | KW_DUPLICATE
    | KW_DYNAMIC | KW_EMPTY | KW_ENABLE | KW_ENCRYPTION | KW_ENCRYPTION_KEY_ADMIN | KW_END | KW_ENDS | KW_ENGINE | KW_ENGINE_ATTRIBUTE | KW_ENGINES | KW_ENFORCED
    | KW_ERROR | KW_ERRORS | KW_ESCAPE | KW_EUR | KW_EVEN | KW_EVENT | KW_EVENTS | KW_EVERY | KW_EXCEPT
    | KW_EXCHANGE | KW_EXCLUSIVE | KW_EXPIRE | KW_EXPORT | KW_EXTENDED | KW_EXTENT_SIZE | KW_FAILED_LOGIN_ATTEMPTS | KW_FAST | KW_FAULTS
    | KW_FIELDS | KW_FILE_BLOCK_SIZE | KW_FILTER | KW_FIREWALL_ADMIN | KW_FIREWALL_EXEMPT | KW_FIREWALL_USER | KW_FIRST | KW_FIXED | KW_FLUSH
    | KW_FOLLOWS | KW_FOUND | KW_FULL | KW_FUNCTION | KW_GENERAL | KW_GLOBAL | KW_GRANTS | KW_GROUP | KW_GROUP_CONCAT
    | KW_GROUP_REPLICATION | KW_GROUP_REPLICATION_ADMIN | KW_HANDLER | KW_HASH | KW_HELP | KW_HISTORY | KW_HOST | KW_HOSTS | KW_IDENTIFIED
    | KW_IGNORED | KW_IGNORE_SERVER_IDS | KW_IMPORT | KW_INDEXES | KW_INITIAL_SIZE | KW_INNODB_REDO_LOG_ARCHIVE
    | KW_INPLACE | KW_INSERT_METHOD | KW_INSTALL | KW_INSTANCE | KW_INSTANT | KW_INTERNAL | KW_INVOKE | KW_INVOKER | KW_IO
    | KW_IO_THREAD | KW_IPC | KW_ISO | KW_ISOLATION | KW_ISSUER | KW_JIS | KW_JSON | KW_KEY_BLOCK_SIZE
    | KW_LAMBDA | KW_LANGUAGE | KW_LAST | KW_LATERAL | KW_LEAVES | KW_LESS | KW_LEVEL | KW_LIST | KW_LOCAL
    | KW_LOGFILE | KW_LOGS | KW_MASTER | KW_MASTER_AUTO_POSITION
    | KW_MASTER_CONNECT_RETRY | KW_MASTER_DELAY
    | KW_MASTER_HEARTBEAT_PERIOD | KW_MASTER_HOST | KW_MASTER_LOG_FILE
    | KW_MASTER_LOG_POS | KW_MASTER_PASSWORD | KW_MASTER_PORT
    | KW_MASTER_RETRY_COUNT | KW_MASTER_SSL | KW_MASTER_SSL_CA
    | KW_MASTER_SSL_CAPATH | KW_MASTER_SSL_CERT | KW_MASTER_SSL_CIPHER
    | KW_MASTER_SSL_CRL | KW_MASTER_SSL_CRLPATH | KW_MASTER_SSL_KEY
    | KW_MASTER_TLS_VERSION | KW_MASTER_USER
    | KW_MAX_CONNECTIONS_PER_HOUR | KW_MAX_QUERIES_PER_HOUR
    | KW_MAX | KW_MAX_ROWS | KW_MAX_SIZE | KW_MAX_UPDATES_PER_HOUR
    | KW_MAX_USER_CONNECTIONS | KW_MEDIUM | KW_MEMBER | KW_MEMORY | KW_MERGE | KW_MESSAGE_TEXT
    | KW_MID | KW_MIGRATE
    | KW_MIN | KW_MIN_ROWS | KW_MODE | KW_MODIFY | KW_MUTEX | KW_MYSQL | KW_MYSQL_ERRNO | KW_NAME | KW_NAMES
    | KW_NCHAR | KW_NDB_STORED_USER | KW_NESTED | KW_NEVER | KW_NEXT | KW_NO | KW_NOCOPY | KW_NODEGROUP | KW_NONE | KW_NOWAIT | KW_NUMBER | KW_ODBC | KW_OFFLINE | KW_OFFSET
    | KW_OF | KW_OJ | KW_OLD_PASSWORD | KW_ONE | KW_ONLINE | KW_ONLY | KW_OPEN | KW_OPTIMIZER_COSTS
    | KW_OPTIONAL | KW_OPTIONS | KW_ORDER | KW_ORDINALITY | KW_OWNER | KW_PACK_KEYS | KW_PAGE | KW_PARSER | KW_PARTIAL
    | KW_PARTITIONING | KW_PARTITIONS | KW_PASSWORD | KW_PASSWORDLESS_USER_ADMIN | KW_PASSWORD_LOCK_TIME | KW_PATH | KW_PERSIST_RO_VARIABLES_ADMIN | KW_PHASE | KW_PLUGINS
    | KW_PLUGIN_DIR | KW_PLUGIN | KW_PORT | KW_PRECEDES | KW_PREPARE | KW_PRESERVE | KW_PREV | KW_PRIMARY
    | KW_PROCESSLIST | KW_PROFILE | KW_PROFILES | KW_PROXY | KW_QUERY | KW_QUICK
    | KW_REBUILD | KW_RECOVER | KW_RECURSIVE | KW_REDO_BUFFER_SIZE | KW_REDUNDANT
    | KW_RELAY | KW_RELAYLOG | KW_RELAY_LOG_FILE | KW_RELAY_LOG_POS | KW_REMOVE
    | KW_REORGANIZE | KW_REPAIR | KW_REPLICATE_DO_DB | KW_REPLICATE_DO_TABLE
    | KW_REPLICATE_IGNORE_DB | KW_REPLICATE_IGNORE_TABLE
    | KW_REPLICATE_REWRITE_DB | KW_REPLICATE_WILD_DO_TABLE
    | KW_REPLICATE_WILD_IGNORE_TABLE | KW_REPLICATION | KW_REPLICATION_APPLIER | KW_REPLICATION_SLAVE_ADMIN | KW_RESET
    | KW_RESOURCE_GROUP_ADMIN | KW_RESOURCE_GROUP_USER | KW_RESUME
    | KW_RETURNED_SQLSTATE | KW_RETURNS | KW_REUSE | KW_ROLE | KW_ROLE_ADMIN | KW_ROLLBACK | KW_ROLLUP | KW_ROTATE | KW_ROW | KW_ROWS
    | KW_ROW_FORMAT | KW_RTREE | KW_S3 | KW_SAVEPOINT | KW_SCHEDULE | KW_SCHEMA_NAME | KW_SECURITY | KW_SECONDARY_ENGINE_ATTRIBUTE | KW_SERIAL | KW_SERVER
    | KW_SESSION | KW_SESSION_VARIABLES_ADMIN | KW_SET_USER_ID | KW_SHARE | KW_SHARED | KW_SHOW_ROUTINE | KW_SIGNED | KW_SIMPLE | KW_SLAVE
    | KW_SLOW | KW_SKIP_QUERY_REWRITE | KW_SNAPSHOT | KW_SOCKET | KW_SOME | KW_SONAME | KW_SOUNDS | KW_SOURCE
    | KW_SQL_AFTER_GTIDS | KW_SQL_AFTER_MTS_GAPS | KW_SQL_BEFORE_GTIDS
    | KW_SQL_BUFFER_RESULT | KW_SQL_CACHE | KW_SQL_NO_CACHE | KW_SQL_THREAD
    | KW_STACKED | KW_START | KW_STARTS | KW_STATS_AUTO_RECALC | KW_STATS_PERSISTENT
    | KW_STATS_SAMPLE_PAGES | KW_STATUS | KW_STD | KW_STDDEV | KW_STDDEV_POP | KW_STDDEV_SAMP | KW_STOP | KW_STORAGE | KW_STRING
    | KW_SUBCLASS_ORIGIN | KW_SUBJECT | KW_SUBPARTITION | KW_SUBPARTITIONS | KW_SUM | KW_SUSPEND | KW_SWAPS
    | KW_SWITCHES | KW_SYSTEM_VARIABLES_ADMIN | KW_TABLE_NAME | KW_TABLESPACE | KW_TABLE_ENCRYPTION_ADMIN | KW_TABLE_TYPE
    | KW_TEMPORARY | KW_TEMPTABLE | KW_THAN | KW_TP_CONNECTION_ADMIN | KW_TRADITIONAL
    | KW_TRANSACTION | KW_TRANSACTIONAL | KW_TRIGGERS | KW_TRUNCATE | KW_UNBOUNDED | KW_UNDEFINED | KW_UNDOFILE
    | KW_UNDO_BUFFER_SIZE | KW_UNINSTALL | KW_UNKNOWN | KW_UNTIL | KW_UPGRADE | KW_USA | KW_USER | KW_USE_FRM | KW_USER_RESOURCES
    | KW_VALIDATION | KW_VALUE | KW_VAR_POP | KW_VAR_SAMP | KW_VARIABLES | KW_VARIANCE | KW_VERSION_TOKEN_ADMIN | KW_VIEW | KW_VIRTUAL
    | KW_WAIT | KW_WARNINGS | KW_WITHOUT | KW_WORK | KW_WRAPPER | KW_X509 | KW_XA | KW_XA_RECOVER_ADMIN | KW_XML
    ;

functionNameBase
    : KW_ABS | KW_ACOS | KW_ADDDATE | KW_ADDTIME | KW_AES_DECRYPT | KW_AES_ENCRYPT
    | KW_AREA | KW_ASBINARY | KW_ASIN | KW_ASTEXT | KW_ASWKB | KW_ASWKT
    | KW_ASYMMETRIC_DECRYPT | KW_ASYMMETRIC_DERIVE
    | KW_ASYMMETRIC_ENCRYPT | KW_ASYMMETRIC_SIGN | KW_ASYMMETRIC_VERIFY
    | KW_ATAN | KW_ATAN2 | KW_BENCHMARK | KW_BIN | KW_BIT_COUNT | KW_BIT_LENGTH
    | KW_BUFFER | KW_CEIL | KW_CEILING | KW_CENTROID | KW_CHARACTER_LENGTH
    | KW_CHARSET | KW_CHAR_LENGTH | KW_COERCIBILITY | KW_COLLATION
    | KW_COMPRESS | KW_CONCAT | KW_CONCAT_WS | KW_CONNECTION_ID | KW_CONV
    | KW_CONVERT_TZ | KW_COS | KW_COT | KW_COUNT | KW_CRC32
    | KW_CREATE_ASYMMETRIC_PRIV_KEY | KW_CREATE_ASYMMETRIC_PUB_KEY
    | KW_CREATE_DH_PARAMETERS | KW_CREATE_DIGEST | KW_CROSSES | KW_CUME_DIST | KW_DATABASE | KW_DATE
    | KW_DATEDIFF | KW_DATE_FORMAT | KW_DAY | KW_DAYNAME | KW_DAYOFMONTH
    | KW_DAYOFWEEK | KW_DAYOFYEAR | KW_DECODE | KW_DEGREES | KW_DENSE_RANK | KW_DES_DECRYPT
    | KW_DES_ENCRYPT | KW_DIMENSION | KW_DISJOINT | KW_ELT | KW_ENCODE
    | KW_ENCRYPT | KW_ENDPOINT | KW_ENVELOPE | KW_EQUALS | KW_EXP | KW_EXPORT_SET
    | KW_EXTERIORRING | KW_EXTRACTVALUE | KW_FIELD | KW_FIND_IN_SET | KW_FIRST_VALUE | KW_FLOOR
    | KW_FORMAT | KW_FOUND_ROWS | KW_FROM_BASE64 | KW_FROM_DAYS
    | KW_FROM_UNIXTIME | KW_GEOMCOLLFROMTEXT | KW_GEOMCOLLFROMWKB
    | KW_GEOMETRYCOLLECTION | KW_GEOMETRYCOLLECTIONFROMTEXT
    | KW_GEOMETRYCOLLECTIONFROMWKB | KW_GEOMETRYFROMTEXT
    | KW_GEOMETRYFROMWKB | KW_GEOMETRYN | KW_GEOMETRYTYPE | KW_GEOMFROMTEXT
    | KW_GEOMFROMWKB | KW_GET_FORMAT | KW_GET_LOCK | KW_GLENGTH | KW_GREATEST
    | KW_GTID_SUBSET | KW_GTID_SUBTRACT | KW_HEX | KW_HOUR | KW_IFNULL
    | KW_INET6_ATON | KW_INET6_NTOA | KW_INET_ATON | KW_INET_NTOA | KW_INSTR
    | KW_INTERIORRINGN | KW_INTERSECTS | KW_INVISIBLE
    | KW_ISCLOSED | KW_ISEMPTY | KW_ISNULL
    | KW_ISSIMPLE | KW_IS_FREE_LOCK | KW_IS_IPV4 | KW_IS_IPV4_COMPAT
    | KW_IS_IPV4_MAPPED | KW_IS_IPV6 | KW_IS_USED_LOCK | KW_LAG | KW_LAST_INSERT_ID | KW_LAST_VALUE
    | KW_LCASE | KW_LEAD | KW_LEAST | KW_LEFT | KW_LENGTH | KW_LINEFROMTEXT | KW_LINEFROMWKB
    | KW_LINESTRING | KW_LINESTRINGFROMTEXT | KW_LINESTRINGFROMWKB | KW_LN
    | KW_LOAD_FILE | KW_LOCATE | KW_LOG | KW_LOG10 | KW_LOG2 | KW_LOWER | KW_LPAD
    | KW_LTRIM | KW_MAKEDATE | KW_MAKETIME | KW_MAKE_SET | KW_MASTER_POS_WAIT
    | KW_MBRCONTAINS | KW_MBRDISJOINT | KW_MBREQUAL | KW_MBRINTERSECTS
    | KW_MBROVERLAPS | KW_MBRTOUCHES | KW_MBRWITHIN | KW_MD5 | KW_MICROSECOND
    | KW_MINUTE | KW_MLINEFROMTEXT | KW_MLINEFROMWKB | MOD| KW_MONTH | KW_MONTHNAME
    | KW_MPOINTFROMTEXT | KW_MPOINTFROMWKB | KW_MPOLYFROMTEXT
    | KW_MPOLYFROMWKB | KW_MULTILINESTRING | KW_MULTILINESTRINGFROMTEXT
    | KW_MULTILINESTRINGFROMWKB | KW_MULTIPOINT | KW_MULTIPOINTFROMTEXT
    | KW_MULTIPOINTFROMWKB | KW_MULTIPOLYGON | KW_MULTIPOLYGONFROMTEXT
    | KW_MULTIPOLYGONFROMWKB | KW_NAME_CONST | KW_NTH_VALUE | KW_NTILE | KW_NULLIF | KW_NUMGEOMETRIES
    | KW_NUMINTERIORRINGS | KW_NUMPOINTS | KW_OCT | KW_OCTET_LENGTH | KW_ORD
    | KW_OVERLAPS | KW_PERCENT_RANK | KW_PERIOD_ADD | KW_PERIOD_DIFF | KW_PI | KW_POINT
    | KW_POINTFROMTEXT | KW_POINTFROMWKB | KW_POINTN | KW_POLYFROMTEXT
    | KW_POLYFROMWKB | KW_POLYGON | KW_POLYGONFROMTEXT | KW_POLYGONFROMWKB
    | KW_POSITION | KW_POW | KW_POWER | KW_QUARTER | KW_QUOTE | KW_RADIANS | KW_RAND | KW_RANDOM | KW_RANK
    | KW_RANDOM_BYTES | KW_RELEASE_LOCK | KW_REVERSE | KW_RIGHT | KW_ROUND
    | KW_ROW_COUNT | KW_ROW_NUMBER | KW_RPAD | KW_RTRIM | KW_SCHEMA | KW_SECOND | KW_SEC_TO_TIME
    | KW_SESSION_USER | KW_SESSION_VARIABLES_ADMIN
    | KW_SHA | KW_SHA1 | KW_SHA2 | KW_SIGN | KW_SIN | KW_SLEEP
    | KW_SOUNDEX | KW_SQL_THREAD_WAIT_AFTER_GTIDS | KW_SQRT | KW_SRID
    | KW_STARTPOINT | KW_STRCMP | KW_STR_TO_DATE | KW_ST_AREA | KW_ST_ASBINARY
    | KW_ST_ASTEXT | KW_ST_ASWKB | KW_ST_ASWKT | KW_ST_BUFFER | KW_ST_CENTROID
    | KW_ST_CONTAINS | KW_ST_CROSSES | KW_ST_DIFFERENCE | KW_ST_DIMENSION
    | KW_ST_DISJOINT | KW_ST_DISTANCE | KW_ST_ENDPOINT | KW_ST_ENVELOPE
    | KW_ST_EQUALS | KW_ST_EXTERIORRING | KW_ST_GEOMCOLLFROMTEXT
    | KW_ST_GEOMCOLLFROMTXT | KW_ST_GEOMCOLLFROMWKB
    | KW_ST_GEOMETRYCOLLECTIONFROMTEXT
    | KW_ST_GEOMETRYCOLLECTIONFROMWKB | KW_ST_GEOMETRYFROMTEXT
    | KW_ST_GEOMETRYFROMWKB | KW_ST_GEOMETRYN | KW_ST_GEOMETRYTYPE
    | KW_ST_GEOMFROMTEXT | KW_ST_GEOMFROMWKB | KW_ST_INTERIORRINGN
    | KW_ST_INTERSECTION | KW_ST_INTERSECTS | KW_ST_ISCLOSED | KW_ST_ISEMPTY
    | KW_ST_ISSIMPLE | KW_ST_LINEFROMTEXT | KW_ST_LINEFROMWKB
    | KW_ST_LINESTRINGFROMTEXT | KW_ST_LINESTRINGFROMWKB
    | KW_ST_NUMGEOMETRIES | KW_ST_NUMINTERIORRING
    | KW_ST_NUMINTERIORRINGS | KW_ST_NUMPOINTS | KW_ST_OVERLAPS
    | KW_ST_POINTFROMTEXT | KW_ST_POINTFROMWKB | KW_ST_POINTN
    | KW_ST_POLYFROMTEXT | KW_ST_POLYFROMWKB | KW_ST_POLYGONFROMTEXT
    | KW_ST_POLYGONFROMWKB | KW_ST_SRID | KW_ST_STARTPOINT
    | KW_ST_SYMDIFFERENCE | KW_ST_TOUCHES | KW_ST_UNION | KW_ST_WITHIN
    | KW_ST_X | KW_ST_Y | KW_SUBDATE | KW_SUBSTRING_INDEX | KW_SUBTIME
    | KW_SYSTEM_USER | KW_TAN | KW_TIME | KW_TIMEDIFF | KW_TIMESTAMP
    | KW_TIMESTAMPADD | KW_TIMESTAMPDIFF | KW_TIME_FORMAT | KW_TIME_TO_SEC
    | KW_TOUCHES | KW_TO_BASE64 | KW_TO_DAYS | KW_TO_SECONDS | KW_UCASE
    | KW_UNCOMPRESS | KW_UNCOMPRESSED_LENGTH | KW_UNHEX | KW_UNIX_TIMESTAMP
    | KW_UPDATEXML | KW_UPPER | KW_UUID | KW_UUID_SHORT
    | KW_VALIDATE_PASSWORD_STRENGTH | KW_VERSION | KW_VISIBLE
    | KW_WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS | KW_WEEK | KW_WEEKDAY
    | KW_WEEKOFYEAR | KW_WEIGHT_STRING | KW_WITHIN | KW_YEAR | KW_YEARWEEK
    | KW_Y_FUNCTION | KW_X_FUNCTION
    | KW_JSON_ARRAY | KW_JSON_OBJECT | KW_JSON_QUOTE | KW_JSON_CONTAINS | KW_JSON_CONTAINS_PATH
    | KW_JSON_EXTRACT | KW_JSON_KEYS | KW_JSON_OVERLAPS | KW_JSON_SEARCH | KW_JSON_VALUE
    | KW_JSON_ARRAY_APPEND | KW_JSON_ARRAY_INSERT | KW_JSON_INSERT | KW_JSON_MERGE
    | KW_JSON_MERGE_PATCH | KW_JSON_MERGE_PRESERVE | KW_JSON_REMOVE | KW_JSON_REPLACE
    | KW_JSON_SET | KW_JSON_UNQUOTE | KW_JSON_DEPTH | KW_JSON_LENGTH | KW_JSON_TYPE
    | KW_JSON_VALID | KW_JSON_TABLE | KW_JSON_SCHEMA_VALID | KW_JSON_SCHEMA_VALIDATION_REPORT
    | KW_JSON_PRETTY | KW_JSON_STORAGE_FREE | KW_JSON_STORAGE_SIZE | KW_JSON_ARRAYAGG
    | KW_JSON_OBJECTAGG
    ;
