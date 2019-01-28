{
    var legacy_setops_precedence_enbled = false;
    var isValidDecimal=function() {
        var nextChar = _input.LA(1);
        if (nextChar >= 'A' && nextChar <= 'Z' || nextChar >= '0' && nextChar <= '9' ||
        nextChar == '_') {
        return false;
        } else {
        return true;
        }
    }
}

start
= singleStatement

singleStatement
= statement

singleExpression
= namedExpression

singleTableIdentifier
= tableIdentifier

singleFunctionIdentifier
= functionIdentifier

singleDataType
= dataType

singleTableSchema
= colTypeList

statement
= query //#statementDefault
/ (USE db:identifier)    //#use
/ (CREATE DATABASE (IF NOT EXISTS)? identifier
        (COMMENT comment:STRING)? locationSpec?
        (WITH DBPROPERTIES tablePropertyList)?)   //createDatabase
/ (ALTER DATABASE identifier SET DBPROPERTIES tablePropertyList) //setDatabaseProperties
/ (DROP DATABASE (IF EXISTS)? identifier (RESTRICT / CASCADE)?) //dropDatabase
/ (createTableHeader ('(' colTypeList ')')? tableProvider
        ((OPTIONS options:tablePropertyList) /
        (PARTITIONED BY partitionColumnNames:identifierList) /
        bucketSpec /
        locationSpec /
        (COMMENT comment:STRING) /
        (TBLPROPERTIES tableProps:tablePropertyList))*
        (AS? query)?)                                                  //createTable
/ (createTableHeader ('(' columns:colTypeList ')')?
        ((COMMENT comment:STRING) /
        (PARTITIONED BY '(' partitionColumns:colTypeList ')') /
        bucketSpec /
        skewSpec /
        rowFormat /
        createFileFormat /
        locationSpec /
        (TBLPROPERTIES tableProps:tablePropertyList))*
        (AS? query)?)                                                   //createHiveTable
/ (CREATE TABLE (IF NOT EXISTS)? target:tableIdentifier
        LIKE source:tableIdentifier locationSpec?)                     //#createTableLike
/ (ANALYZE TABLE tableIdentifier partitionSpec? COMPUTE STATISTICS
        (identifier / FOR COLUMNS identifierSeq / FOR ALL COLUMNS)?)    //#analyze
/ (ALTER TABLE tableIdentifier
        ADD COLUMNS '(' columns:colTypeList ')')                        //#addTableColumns
/ (ALTER (TABLE / VIEW) from:tableIdentifier
        RENAME TO to:tableIdentifier)                                   //#renameTable
/ (ALTER (TABLE / VIEW) tableIdentifier
        SET TBLPROPERTIES tablePropertyList)                            //#setTableProperties
/ (ALTER (TABLE / VIEW) tableIdentifier
        UNSET TBLPROPERTIES (IF EXISTS)? tablePropertyList             //#unsetTableProperties
/ (ALTER TABLE tableIdentifier partitionSpec?)
        CHANGE COLUMN? identifier colType colPosition?)                // #changeColumn
/ (ALTER TABLE tableIdentifier (partitionSpec)?
        SET SERDE STRING (WITH SERDEPROPERTIES tablePropertyList)?)     //#setTableSerDe
/ (ALTER TABLE tableIdentifier (partitionSpec)?
        SET SERDEPROPERTIES tablePropertyList)                          //#setTableSerDe
/ (ALTER TABLE tableIdentifier ADD (IF NOT EXISTS)?
        partitionSpecLocation+)                                        // #addTablePartition
/ (ALTER VIEW tableIdentifier ADD (IF NOT EXISTS)?
        partitionSpec+)                                                 //#addTablePartition
/ (ALTER TABLE tableIdentifier
        from:partitionSpec RENAME TO to:partitionSpec)                  //#renameTablePartition
/ (ALTER TABLE tableIdentifier
        DROP (IF EXISTS)? partitionSpec (',' partitionSpec)* PURGE?)    //#dropTablePartitions
/ (ALTER VIEW tableIdentifier
        DROP (IF EXISTS)? partitionSpec (',' partitionSpec)*)           //#dropTablePartitions
/ (ALTER TABLE tableIdentifier partitionSpec? SET locationSpec)      //#setTableLocation
/ (ALTER TABLE tableIdentifier RECOVER PARTITIONS)                   //#recoverPartitions
/ (DROP TABLE (IF EXISTS)? tableIdentifier PURGE?)                   //#dropTable
/ (DROP VIEW (IF EXISTS)? tableIdentifier)                           //#dropTable
/ (CREATE (OR REPLACE)? (GLOBAL? TEMPORARY)?
        VIEW (IF NOT EXISTS)? tableIdentifier
        identifierCommentList? (COMMENT STRING)?
        (PARTITIONED ON identifierList)?
        (TBLPROPERTIES tablePropertyList)? AS query)                    //#createView
/ (CREATE (OR REPLACE)? GLOBAL? TEMPORARY VIEW
        tableIdentifier ('(' colTypeList ')')? tableProvider
        (OPTIONS tablePropertyList)?)                                   //#createTempViewUsing
/ (ALTER VIEW tableIdentifier AS? query)                             //#alterViewQuery
/ (CREATE (OR REPLACE)? TEMPORARY? FUNCTION (IF NOT EXISTS)?
        qualifiedName AS className:STRING
        (USING resource (',' resource)*)?)                             // #createFunction
/ (DROP TEMPORARY? FUNCTION (IF EXISTS)? qualifiedName)             // #dropFunction
/ (EXPLAIN (LOGICAL / FORMATTED / EXTENDED / CODEGEN / COST)?
        statement)                                                     // #explain
/ (SHOW TABLES ((FROM / IN) db:identifier)?
        (LIKE? pattern:STRING)?)                                       // #showTables
/ (SHOW TABLE EXTENDED ((FROM / IN) db:identifier)?
        LIKE pattern:STRING partitionSpec?)                            // #showTable
/ (SHOW DATABASES (LIKE? pattern:STRING)?)                          // #showDatabases
/ (SHOW TBLPROPERTIES table:tableIdentifier
        ('(' key:tablePropertyKey ')')?)                               // #showTblProperties
/ (SHOW COLUMNS (FROM / IN) tableIdentifier
        ((FROM / IN) db:identifier)?)                                  // #showColumns
/ (SHOW PARTITIONS tableIdentifier partitionSpec?)                  // #showPartitions
/ (SHOW identifier? FUNCTIONS
        (LIKE? (qualifiedName / pattern:STRING))?)                     // #showFunctions
/ (SHOW CREATE TABLE tableIdentifier)                                //#showCreateTable
/ (DESC / DESCRIBE) FUNCTION EXTENDED? describeFuncName            //#describeFunction
/ (DESC / DESCRIBE) DATABASE EXTENDED? identifier                  //#describeDatabase
/ (DESC / DESCRIBE) TABLE? option:(EXTENDED / FORMATTED)?
        tableIdentifier partitionSpec? describeColName?                //#describeTable
/ (REFRESH TABLE tableIdentifier)                                    //#refreshTable
/ (REFRESH (STRING / .*?))                                          // #refreshResource
/ (CACHE LAZY? TABLE tableIdentifier
        (OPTIONS options=tablePropertyList)? (AS? query)?)             // #cacheTable
/ (UNCACHE TABLE (IF EXISTS)? tableIdentifier)                      // #uncacheTable
/ (CLEAR CACHE)                                                     // #clearCache
/ (LOAD DATA LOCAL? INPATH path=STRING OVERWRITE? INTO TABLE
        tableIdentifier partitionSpec?)                                // #loadData
/ (TRUNCATE TABLE tableIdentifier partitionSpec?)                   // #truncateTable
/ (MSCK REPAIR TABLE tableIdentifier)                               // #repairTable
/ (op:(ADD / LIST) identifier .*?)                                  // #manageResource
/ (SET ROLE .*?)                                                    // #failNativeCommand
/ (SET .*?)                                                        //  #setConfiguration
/ (RESET)                                                          //  #resetConfiguration
/ (unsupportedHiveNativeCommands .*?)                              //  #failNativeCommand