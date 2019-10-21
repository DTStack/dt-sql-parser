// Generated from ./grammar/sql.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
// This class defines a complete listener for a parse tree produced by sqlParser.
function sqlListener() {
    antlr4.tree.ParseTreeListener.call(this);
    return this;
}
sqlListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
sqlListener.prototype.constructor = sqlListener;
// Enter a parse tree produced by sqlParser#singleStatement.
sqlListener.prototype.enterSingleStatement = function (ctx) {
};
// Exit a parse tree produced by sqlParser#singleStatement.
sqlListener.prototype.exitSingleStatement = function (ctx) {
};
// Enter a parse tree produced by sqlParser#singleExpression.
sqlListener.prototype.enterSingleExpression = function (ctx) {
};
// Exit a parse tree produced by sqlParser#singleExpression.
sqlListener.prototype.exitSingleExpression = function (ctx) {
};
// Enter a parse tree produced by sqlParser#singleTableIdentifier.
sqlListener.prototype.enterSingleTableIdentifier = function (ctx) {
};
// Exit a parse tree produced by sqlParser#singleTableIdentifier.
sqlListener.prototype.exitSingleTableIdentifier = function (ctx) {
};
// Enter a parse tree produced by sqlParser#singleFunctionIdentifier.
sqlListener.prototype.enterSingleFunctionIdentifier = function (ctx) {
};
// Exit a parse tree produced by sqlParser#singleFunctionIdentifier.
sqlListener.prototype.exitSingleFunctionIdentifier = function (ctx) {
};
// Enter a parse tree produced by sqlParser#singleDataType.
sqlListener.prototype.enterSingleDataType = function (ctx) {
};
// Exit a parse tree produced by sqlParser#singleDataType.
sqlListener.prototype.exitSingleDataType = function (ctx) {
};
// Enter a parse tree produced by sqlParser#singleTableSchema.
sqlListener.prototype.enterSingleTableSchema = function (ctx) {
};
// Exit a parse tree produced by sqlParser#singleTableSchema.
sqlListener.prototype.exitSingleTableSchema = function (ctx) {
};
// Enter a parse tree produced by sqlParser#statementDefault.
sqlListener.prototype.enterStatementDefault = function (ctx) {
};
// Exit a parse tree produced by sqlParser#statementDefault.
sqlListener.prototype.exitStatementDefault = function (ctx) {
};
// Enter a parse tree produced by sqlParser#use.
sqlListener.prototype.enterUse = function (ctx) {
};
// Exit a parse tree produced by sqlParser#use.
sqlListener.prototype.exitUse = function (ctx) {
};
// Enter a parse tree produced by sqlParser#createDatabase.
sqlListener.prototype.enterCreateDatabase = function (ctx) {
};
// Exit a parse tree produced by sqlParser#createDatabase.
sqlListener.prototype.exitCreateDatabase = function (ctx) {
};
// Enter a parse tree produced by sqlParser#setDatabaseProperties.
sqlListener.prototype.enterSetDatabaseProperties = function (ctx) {
};
// Exit a parse tree produced by sqlParser#setDatabaseProperties.
sqlListener.prototype.exitSetDatabaseProperties = function (ctx) {
};
// Enter a parse tree produced by sqlParser#dropDatabase.
sqlListener.prototype.enterDropDatabase = function (ctx) {
};
// Exit a parse tree produced by sqlParser#dropDatabase.
sqlListener.prototype.exitDropDatabase = function (ctx) {
};
// Enter a parse tree produced by sqlParser#createTable.
sqlListener.prototype.enterCreateTable = function (ctx) {
};
// Exit a parse tree produced by sqlParser#createTable.
sqlListener.prototype.exitCreateTable = function (ctx) {
};
// Enter a parse tree produced by sqlParser#createHiveTable.
sqlListener.prototype.enterCreateHiveTable = function (ctx) {
};
// Exit a parse tree produced by sqlParser#createHiveTable.
sqlListener.prototype.exitCreateHiveTable = function (ctx) {
};
// Enter a parse tree produced by sqlParser#createFlinkTable.
sqlListener.prototype.enterCreateFlinkTable = function (ctx) {
};
// Exit a parse tree produced by sqlParser#createFlinkTable.
sqlListener.prototype.exitCreateFlinkTable = function (ctx) {
};
// Enter a parse tree produced by sqlParser#createTableLike.
sqlListener.prototype.enterCreateTableLike = function (ctx) {
};
// Exit a parse tree produced by sqlParser#createTableLike.
sqlListener.prototype.exitCreateTableLike = function (ctx) {
};
// Enter a parse tree produced by sqlParser#analyze.
sqlListener.prototype.enterAnalyze = function (ctx) {
};
// Exit a parse tree produced by sqlParser#analyze.
sqlListener.prototype.exitAnalyze = function (ctx) {
};
// Enter a parse tree produced by sqlParser#addTableColumns.
sqlListener.prototype.enterAddTableColumns = function (ctx) {
};
// Exit a parse tree produced by sqlParser#addTableColumns.
sqlListener.prototype.exitAddTableColumns = function (ctx) {
};
// Enter a parse tree produced by sqlParser#renameTable.
sqlListener.prototype.enterRenameTable = function (ctx) {
};
// Exit a parse tree produced by sqlParser#renameTable.
sqlListener.prototype.exitRenameTable = function (ctx) {
};
// Enter a parse tree produced by sqlParser#setTableProperties.
sqlListener.prototype.enterSetTableProperties = function (ctx) {
};
// Exit a parse tree produced by sqlParser#setTableProperties.
sqlListener.prototype.exitSetTableProperties = function (ctx) {
};
// Enter a parse tree produced by sqlParser#unsetTableProperties.
sqlListener.prototype.enterUnsetTableProperties = function (ctx) {
};
// Exit a parse tree produced by sqlParser#unsetTableProperties.
sqlListener.prototype.exitUnsetTableProperties = function (ctx) {
};
// Enter a parse tree produced by sqlParser#changeColumn.
sqlListener.prototype.enterChangeColumn = function (ctx) {
};
// Exit a parse tree produced by sqlParser#changeColumn.
sqlListener.prototype.exitChangeColumn = function (ctx) {
};
// Enter a parse tree produced by sqlParser#setTableSerDe.
sqlListener.prototype.enterSetTableSerDe = function (ctx) {
};
// Exit a parse tree produced by sqlParser#setTableSerDe.
sqlListener.prototype.exitSetTableSerDe = function (ctx) {
};
// Enter a parse tree produced by sqlParser#addTablePartition.
sqlListener.prototype.enterAddTablePartition = function (ctx) {
};
// Exit a parse tree produced by sqlParser#addTablePartition.
sqlListener.prototype.exitAddTablePartition = function (ctx) {
};
// Enter a parse tree produced by sqlParser#renameTablePartition.
sqlListener.prototype.enterRenameTablePartition = function (ctx) {
};
// Exit a parse tree produced by sqlParser#renameTablePartition.
sqlListener.prototype.exitRenameTablePartition = function (ctx) {
};
// Enter a parse tree produced by sqlParser#dropTablePartitions.
sqlListener.prototype.enterDropTablePartitions = function (ctx) {
};
// Exit a parse tree produced by sqlParser#dropTablePartitions.
sqlListener.prototype.exitDropTablePartitions = function (ctx) {
};
// Enter a parse tree produced by sqlParser#setTableLocation.
sqlListener.prototype.enterSetTableLocation = function (ctx) {
};
// Exit a parse tree produced by sqlParser#setTableLocation.
sqlListener.prototype.exitSetTableLocation = function (ctx) {
};
// Enter a parse tree produced by sqlParser#recoverPartitions.
sqlListener.prototype.enterRecoverPartitions = function (ctx) {
};
// Exit a parse tree produced by sqlParser#recoverPartitions.
sqlListener.prototype.exitRecoverPartitions = function (ctx) {
};
// Enter a parse tree produced by sqlParser#dropTable.
sqlListener.prototype.enterDropTable = function (ctx) {
};
// Exit a parse tree produced by sqlParser#dropTable.
sqlListener.prototype.exitDropTable = function (ctx) {
};
// Enter a parse tree produced by sqlParser#createView.
sqlListener.prototype.enterCreateView = function (ctx) {
};
// Exit a parse tree produced by sqlParser#createView.
sqlListener.prototype.exitCreateView = function (ctx) {
};
// Enter a parse tree produced by sqlParser#createTempViewUsing.
sqlListener.prototype.enterCreateTempViewUsing = function (ctx) {
};
// Exit a parse tree produced by sqlParser#createTempViewUsing.
sqlListener.prototype.exitCreateTempViewUsing = function (ctx) {
};
// Enter a parse tree produced by sqlParser#alterViewQuery.
sqlListener.prototype.enterAlterViewQuery = function (ctx) {
};
// Exit a parse tree produced by sqlParser#alterViewQuery.
sqlListener.prototype.exitAlterViewQuery = function (ctx) {
};
// Enter a parse tree produced by sqlParser#createFunction.
sqlListener.prototype.enterCreateFunction = function (ctx) {
};
// Exit a parse tree produced by sqlParser#createFunction.
sqlListener.prototype.exitCreateFunction = function (ctx) {
};
// Enter a parse tree produced by sqlParser#dropFunction.
sqlListener.prototype.enterDropFunction = function (ctx) {
};
// Exit a parse tree produced by sqlParser#dropFunction.
sqlListener.prototype.exitDropFunction = function (ctx) {
};
// Enter a parse tree produced by sqlParser#explain.
sqlListener.prototype.enterExplain = function (ctx) {
};
// Exit a parse tree produced by sqlParser#explain.
sqlListener.prototype.exitExplain = function (ctx) {
};
// Enter a parse tree produced by sqlParser#showTables.
sqlListener.prototype.enterShowTables = function (ctx) {
};
// Exit a parse tree produced by sqlParser#showTables.
sqlListener.prototype.exitShowTables = function (ctx) {
};
// Enter a parse tree produced by sqlParser#showTable.
sqlListener.prototype.enterShowTable = function (ctx) {
};
// Exit a parse tree produced by sqlParser#showTable.
sqlListener.prototype.exitShowTable = function (ctx) {
};
// Enter a parse tree produced by sqlParser#showDatabases.
sqlListener.prototype.enterShowDatabases = function (ctx) {
};
// Exit a parse tree produced by sqlParser#showDatabases.
sqlListener.prototype.exitShowDatabases = function (ctx) {
};
// Enter a parse tree produced by sqlParser#showTblProperties.
sqlListener.prototype.enterShowTblProperties = function (ctx) {
};
// Exit a parse tree produced by sqlParser#showTblProperties.
sqlListener.prototype.exitShowTblProperties = function (ctx) {
};
// Enter a parse tree produced by sqlParser#showColumns.
sqlListener.prototype.enterShowColumns = function (ctx) {
};
// Exit a parse tree produced by sqlParser#showColumns.
sqlListener.prototype.exitShowColumns = function (ctx) {
};
// Enter a parse tree produced by sqlParser#showPartitions.
sqlListener.prototype.enterShowPartitions = function (ctx) {
};
// Exit a parse tree produced by sqlParser#showPartitions.
sqlListener.prototype.exitShowPartitions = function (ctx) {
};
// Enter a parse tree produced by sqlParser#showFunctions.
sqlListener.prototype.enterShowFunctions = function (ctx) {
};
// Exit a parse tree produced by sqlParser#showFunctions.
sqlListener.prototype.exitShowFunctions = function (ctx) {
};
// Enter a parse tree produced by sqlParser#showCreateTable.
sqlListener.prototype.enterShowCreateTable = function (ctx) {
};
// Exit a parse tree produced by sqlParser#showCreateTable.
sqlListener.prototype.exitShowCreateTable = function (ctx) {
};
// Enter a parse tree produced by sqlParser#describeFunction.
sqlListener.prototype.enterDescribeFunction = function (ctx) {
};
// Exit a parse tree produced by sqlParser#describeFunction.
sqlListener.prototype.exitDescribeFunction = function (ctx) {
};
// Enter a parse tree produced by sqlParser#describeDatabase.
sqlListener.prototype.enterDescribeDatabase = function (ctx) {
};
// Exit a parse tree produced by sqlParser#describeDatabase.
sqlListener.prototype.exitDescribeDatabase = function (ctx) {
};
// Enter a parse tree produced by sqlParser#describeTable.
sqlListener.prototype.enterDescribeTable = function (ctx) {
};
// Exit a parse tree produced by sqlParser#describeTable.
sqlListener.prototype.exitDescribeTable = function (ctx) {
};
// Enter a parse tree produced by sqlParser#refreshTable.
sqlListener.prototype.enterRefreshTable = function (ctx) {
};
// Exit a parse tree produced by sqlParser#refreshTable.
sqlListener.prototype.exitRefreshTable = function (ctx) {
};
// Enter a parse tree produced by sqlParser#refreshResource.
sqlListener.prototype.enterRefreshResource = function (ctx) {
};
// Exit a parse tree produced by sqlParser#refreshResource.
sqlListener.prototype.exitRefreshResource = function (ctx) {
};
// Enter a parse tree produced by sqlParser#cacheTable.
sqlListener.prototype.enterCacheTable = function (ctx) {
};
// Exit a parse tree produced by sqlParser#cacheTable.
sqlListener.prototype.exitCacheTable = function (ctx) {
};
// Enter a parse tree produced by sqlParser#uncacheTable.
sqlListener.prototype.enterUncacheTable = function (ctx) {
};
// Exit a parse tree produced by sqlParser#uncacheTable.
sqlListener.prototype.exitUncacheTable = function (ctx) {
};
// Enter a parse tree produced by sqlParser#clearCache.
sqlListener.prototype.enterClearCache = function (ctx) {
};
// Exit a parse tree produced by sqlParser#clearCache.
sqlListener.prototype.exitClearCache = function (ctx) {
};
// Enter a parse tree produced by sqlParser#loadData.
sqlListener.prototype.enterLoadData = function (ctx) {
};
// Exit a parse tree produced by sqlParser#loadData.
sqlListener.prototype.exitLoadData = function (ctx) {
};
// Enter a parse tree produced by sqlParser#truncateTable.
sqlListener.prototype.enterTruncateTable = function (ctx) {
};
// Exit a parse tree produced by sqlParser#truncateTable.
sqlListener.prototype.exitTruncateTable = function (ctx) {
};
// Enter a parse tree produced by sqlParser#repairTable.
sqlListener.prototype.enterRepairTable = function (ctx) {
};
// Exit a parse tree produced by sqlParser#repairTable.
sqlListener.prototype.exitRepairTable = function (ctx) {
};
// Enter a parse tree produced by sqlParser#manageResource.
sqlListener.prototype.enterManageResource = function (ctx) {
};
// Exit a parse tree produced by sqlParser#manageResource.
sqlListener.prototype.exitManageResource = function (ctx) {
};
// Enter a parse tree produced by sqlParser#failNativeCommand.
sqlListener.prototype.enterFailNativeCommand = function (ctx) {
};
// Exit a parse tree produced by sqlParser#failNativeCommand.
sqlListener.prototype.exitFailNativeCommand = function (ctx) {
};
// Enter a parse tree produced by sqlParser#setConfiguration.
sqlListener.prototype.enterSetConfiguration = function (ctx) {
};
// Exit a parse tree produced by sqlParser#setConfiguration.
sqlListener.prototype.exitSetConfiguration = function (ctx) {
};
// Enter a parse tree produced by sqlParser#resetConfiguration.
sqlListener.prototype.enterResetConfiguration = function (ctx) {
};
// Exit a parse tree produced by sqlParser#resetConfiguration.
sqlListener.prototype.exitResetConfiguration = function (ctx) {
};
// Enter a parse tree produced by sqlParser#unsupportedHiveNativeCommands.
sqlListener.prototype.enterUnsupportedHiveNativeCommands = function (ctx) {
};
// Exit a parse tree produced by sqlParser#unsupportedHiveNativeCommands.
sqlListener.prototype.exitUnsupportedHiveNativeCommands = function (ctx) {
};
// Enter a parse tree produced by sqlParser#createTableHeader.
sqlListener.prototype.enterCreateTableHeader = function (ctx) {
};
// Exit a parse tree produced by sqlParser#createTableHeader.
sqlListener.prototype.exitCreateTableHeader = function (ctx) {
};
// Enter a parse tree produced by sqlParser#bucketSpec.
sqlListener.prototype.enterBucketSpec = function (ctx) {
};
// Exit a parse tree produced by sqlParser#bucketSpec.
sqlListener.prototype.exitBucketSpec = function (ctx) {
};
// Enter a parse tree produced by sqlParser#skewSpec.
sqlListener.prototype.enterSkewSpec = function (ctx) {
};
// Exit a parse tree produced by sqlParser#skewSpec.
sqlListener.prototype.exitSkewSpec = function (ctx) {
};
// Enter a parse tree produced by sqlParser#locationSpec.
sqlListener.prototype.enterLocationSpec = function (ctx) {
};
// Exit a parse tree produced by sqlParser#locationSpec.
sqlListener.prototype.exitLocationSpec = function (ctx) {
};
// Enter a parse tree produced by sqlParser#query.
sqlListener.prototype.enterQuery = function (ctx) {
};
// Exit a parse tree produced by sqlParser#query.
sqlListener.prototype.exitQuery = function (ctx) {
};
// Enter a parse tree produced by sqlParser#insertOverwriteTable.
sqlListener.prototype.enterInsertOverwriteTable = function (ctx) {
};
// Exit a parse tree produced by sqlParser#insertOverwriteTable.
sqlListener.prototype.exitInsertOverwriteTable = function (ctx) {
};
// Enter a parse tree produced by sqlParser#insertIntoTable.
sqlListener.prototype.enterInsertIntoTable = function (ctx) {
};
// Exit a parse tree produced by sqlParser#insertIntoTable.
sqlListener.prototype.exitInsertIntoTable = function (ctx) {
};
// Enter a parse tree produced by sqlParser#insertOverwriteHiveDir.
sqlListener.prototype.enterInsertOverwriteHiveDir = function (ctx) {
};
// Exit a parse tree produced by sqlParser#insertOverwriteHiveDir.
sqlListener.prototype.exitInsertOverwriteHiveDir = function (ctx) {
};
// Enter a parse tree produced by sqlParser#insertOverwriteDir.
sqlListener.prototype.enterInsertOverwriteDir = function (ctx) {
};
// Exit a parse tree produced by sqlParser#insertOverwriteDir.
sqlListener.prototype.exitInsertOverwriteDir = function (ctx) {
};
// Enter a parse tree produced by sqlParser#partitionSpecLocation.
sqlListener.prototype.enterPartitionSpecLocation = function (ctx) {
};
// Exit a parse tree produced by sqlParser#partitionSpecLocation.
sqlListener.prototype.exitPartitionSpecLocation = function (ctx) {
};
// Enter a parse tree produced by sqlParser#partitionSpec.
sqlListener.prototype.enterPartitionSpec = function (ctx) {
};
// Exit a parse tree produced by sqlParser#partitionSpec.
sqlListener.prototype.exitPartitionSpec = function (ctx) {
};
// Enter a parse tree produced by sqlParser#partitionVal.
sqlListener.prototype.enterPartitionVal = function (ctx) {
};
// Exit a parse tree produced by sqlParser#partitionVal.
sqlListener.prototype.exitPartitionVal = function (ctx) {
};
// Enter a parse tree produced by sqlParser#describeFuncName.
sqlListener.prototype.enterDescribeFuncName = function (ctx) {
};
// Exit a parse tree produced by sqlParser#describeFuncName.
sqlListener.prototype.exitDescribeFuncName = function (ctx) {
};
// Enter a parse tree produced by sqlParser#describeColName.
sqlListener.prototype.enterDescribeColName = function (ctx) {
};
// Exit a parse tree produced by sqlParser#describeColName.
sqlListener.prototype.exitDescribeColName = function (ctx) {
};
// Enter a parse tree produced by sqlParser#ctes.
sqlListener.prototype.enterCtes = function (ctx) {
};
// Exit a parse tree produced by sqlParser#ctes.
sqlListener.prototype.exitCtes = function (ctx) {
};
// Enter a parse tree produced by sqlParser#namedQuery.
sqlListener.prototype.enterNamedQuery = function (ctx) {
};
// Exit a parse tree produced by sqlParser#namedQuery.
sqlListener.prototype.exitNamedQuery = function (ctx) {
};
// Enter a parse tree produced by sqlParser#tableProvider.
sqlListener.prototype.enterTableProvider = function (ctx) {
};
// Exit a parse tree produced by sqlParser#tableProvider.
sqlListener.prototype.exitTableProvider = function (ctx) {
};
// Enter a parse tree produced by sqlParser#tablePropertyList.
sqlListener.prototype.enterTablePropertyList = function (ctx) {
};
// Exit a parse tree produced by sqlParser#tablePropertyList.
sqlListener.prototype.exitTablePropertyList = function (ctx) {
};
// Enter a parse tree produced by sqlParser#tableProperty.
sqlListener.prototype.enterTableProperty = function (ctx) {
};
// Exit a parse tree produced by sqlParser#tableProperty.
sqlListener.prototype.exitTableProperty = function (ctx) {
};
// Enter a parse tree produced by sqlParser#tablePropertyKey.
sqlListener.prototype.enterTablePropertyKey = function (ctx) {
};
// Exit a parse tree produced by sqlParser#tablePropertyKey.
sqlListener.prototype.exitTablePropertyKey = function (ctx) {
};
// Enter a parse tree produced by sqlParser#tablePropertyValue.
sqlListener.prototype.enterTablePropertyValue = function (ctx) {
};
// Exit a parse tree produced by sqlParser#tablePropertyValue.
sqlListener.prototype.exitTablePropertyValue = function (ctx) {
};
// Enter a parse tree produced by sqlParser#constantList.
sqlListener.prototype.enterConstantList = function (ctx) {
};
// Exit a parse tree produced by sqlParser#constantList.
sqlListener.prototype.exitConstantList = function (ctx) {
};
// Enter a parse tree produced by sqlParser#nestedConstantList.
sqlListener.prototype.enterNestedConstantList = function (ctx) {
};
// Exit a parse tree produced by sqlParser#nestedConstantList.
sqlListener.prototype.exitNestedConstantList = function (ctx) {
};
// Enter a parse tree produced by sqlParser#createFileFormat.
sqlListener.prototype.enterCreateFileFormat = function (ctx) {
};
// Exit a parse tree produced by sqlParser#createFileFormat.
sqlListener.prototype.exitCreateFileFormat = function (ctx) {
};
// Enter a parse tree produced by sqlParser#tableFileFormat.
sqlListener.prototype.enterTableFileFormat = function (ctx) {
};
// Exit a parse tree produced by sqlParser#tableFileFormat.
sqlListener.prototype.exitTableFileFormat = function (ctx) {
};
// Enter a parse tree produced by sqlParser#genericFileFormat.
sqlListener.prototype.enterGenericFileFormat = function (ctx) {
};
// Exit a parse tree produced by sqlParser#genericFileFormat.
sqlListener.prototype.exitGenericFileFormat = function (ctx) {
};
// Enter a parse tree produced by sqlParser#storageHandler.
sqlListener.prototype.enterStorageHandler = function (ctx) {
};
// Exit a parse tree produced by sqlParser#storageHandler.
sqlListener.prototype.exitStorageHandler = function (ctx) {
};
// Enter a parse tree produced by sqlParser#resource.
sqlListener.prototype.enterResource = function (ctx) {
};
// Exit a parse tree produced by sqlParser#resource.
sqlListener.prototype.exitResource = function (ctx) {
};
// Enter a parse tree produced by sqlParser#singleInsertQuery.
sqlListener.prototype.enterSingleInsertQuery = function (ctx) {
};
// Exit a parse tree produced by sqlParser#singleInsertQuery.
sqlListener.prototype.exitSingleInsertQuery = function (ctx) {
};
// Enter a parse tree produced by sqlParser#multiInsertQuery.
sqlListener.prototype.enterMultiInsertQuery = function (ctx) {
};
// Exit a parse tree produced by sqlParser#multiInsertQuery.
sqlListener.prototype.exitMultiInsertQuery = function (ctx) {
};
// Enter a parse tree produced by sqlParser#queryOrganization.
sqlListener.prototype.enterQueryOrganization = function (ctx) {
};
// Exit a parse tree produced by sqlParser#queryOrganization.
sqlListener.prototype.exitQueryOrganization = function (ctx) {
};
// Enter a parse tree produced by sqlParser#multiInsertQueryBody.
sqlListener.prototype.enterMultiInsertQueryBody = function (ctx) {
};
// Exit a parse tree produced by sqlParser#multiInsertQueryBody.
sqlListener.prototype.exitMultiInsertQueryBody = function (ctx) {
};
// Enter a parse tree produced by sqlParser#queryTermDefault.
sqlListener.prototype.enterQueryTermDefault = function (ctx) {
};
// Exit a parse tree produced by sqlParser#queryTermDefault.
sqlListener.prototype.exitQueryTermDefault = function (ctx) {
};
// Enter a parse tree produced by sqlParser#setOperation.
sqlListener.prototype.enterSetOperation = function (ctx) {
};
// Exit a parse tree produced by sqlParser#setOperation.
sqlListener.prototype.exitSetOperation = function (ctx) {
};
// Enter a parse tree produced by sqlParser#queryPrimaryDefault.
sqlListener.prototype.enterQueryPrimaryDefault = function (ctx) {
};
// Exit a parse tree produced by sqlParser#queryPrimaryDefault.
sqlListener.prototype.exitQueryPrimaryDefault = function (ctx) {
};
// Enter a parse tree produced by sqlParser#table.
sqlListener.prototype.enterTable = function (ctx) {
};
// Exit a parse tree produced by sqlParser#table.
sqlListener.prototype.exitTable = function (ctx) {
};
// Enter a parse tree produced by sqlParser#inlineTableDefault1.
sqlListener.prototype.enterInlineTableDefault1 = function (ctx) {
};
// Exit a parse tree produced by sqlParser#inlineTableDefault1.
sqlListener.prototype.exitInlineTableDefault1 = function (ctx) {
};
// Enter a parse tree produced by sqlParser#subquery.
sqlListener.prototype.enterSubquery = function (ctx) {
};
// Exit a parse tree produced by sqlParser#subquery.
sqlListener.prototype.exitSubquery = function (ctx) {
};
// Enter a parse tree produced by sqlParser#sortItem.
sqlListener.prototype.enterSortItem = function (ctx) {
};
// Exit a parse tree produced by sqlParser#sortItem.
sqlListener.prototype.exitSortItem = function (ctx) {
};
// Enter a parse tree produced by sqlParser#querySpecification.
sqlListener.prototype.enterQuerySpecification = function (ctx) {
};
// Exit a parse tree produced by sqlParser#querySpecification.
sqlListener.prototype.exitQuerySpecification = function (ctx) {
};
// Enter a parse tree produced by sqlParser#hint.
sqlListener.prototype.enterHint = function (ctx) {
};
// Exit a parse tree produced by sqlParser#hint.
sqlListener.prototype.exitHint = function (ctx) {
};
// Enter a parse tree produced by sqlParser#hintStatement.
sqlListener.prototype.enterHintStatement = function (ctx) {
};
// Exit a parse tree produced by sqlParser#hintStatement.
sqlListener.prototype.exitHintStatement = function (ctx) {
};
// Enter a parse tree produced by sqlParser#fromClause.
sqlListener.prototype.enterFromClause = function (ctx) {
};
// Exit a parse tree produced by sqlParser#fromClause.
sqlListener.prototype.exitFromClause = function (ctx) {
};
// Enter a parse tree produced by sqlParser#aggregation.
sqlListener.prototype.enterAggregation = function (ctx) {
};
// Exit a parse tree produced by sqlParser#aggregation.
sqlListener.prototype.exitAggregation = function (ctx) {
};
// Enter a parse tree produced by sqlParser#groupingSet.
sqlListener.prototype.enterGroupingSet = function (ctx) {
};
// Exit a parse tree produced by sqlParser#groupingSet.
sqlListener.prototype.exitGroupingSet = function (ctx) {
};
// Enter a parse tree produced by sqlParser#pivotClause.
sqlListener.prototype.enterPivotClause = function (ctx) {
};
// Exit a parse tree produced by sqlParser#pivotClause.
sqlListener.prototype.exitPivotClause = function (ctx) {
};
// Enter a parse tree produced by sqlParser#pivotColumn.
sqlListener.prototype.enterPivotColumn = function (ctx) {
};
// Exit a parse tree produced by sqlParser#pivotColumn.
sqlListener.prototype.exitPivotColumn = function (ctx) {
};
// Enter a parse tree produced by sqlParser#pivotValue.
sqlListener.prototype.enterPivotValue = function (ctx) {
};
// Exit a parse tree produced by sqlParser#pivotValue.
sqlListener.prototype.exitPivotValue = function (ctx) {
};
// Enter a parse tree produced by sqlParser#lateralView.
sqlListener.prototype.enterLateralView = function (ctx) {
};
// Exit a parse tree produced by sqlParser#lateralView.
sqlListener.prototype.exitLateralView = function (ctx) {
};
// Enter a parse tree produced by sqlParser#setQuantifier.
sqlListener.prototype.enterSetQuantifier = function (ctx) {
};
// Exit a parse tree produced by sqlParser#setQuantifier.
sqlListener.prototype.exitSetQuantifier = function (ctx) {
};
// Enter a parse tree produced by sqlParser#relation.
sqlListener.prototype.enterRelation = function (ctx) {
};
// Exit a parse tree produced by sqlParser#relation.
sqlListener.prototype.exitRelation = function (ctx) {
};
// Enter a parse tree produced by sqlParser#joinRelation.
sqlListener.prototype.enterJoinRelation = function (ctx) {
};
// Exit a parse tree produced by sqlParser#joinRelation.
sqlListener.prototype.exitJoinRelation = function (ctx) {
};
// Enter a parse tree produced by sqlParser#joinType.
sqlListener.prototype.enterJoinType = function (ctx) {
};
// Exit a parse tree produced by sqlParser#joinType.
sqlListener.prototype.exitJoinType = function (ctx) {
};
// Enter a parse tree produced by sqlParser#joinCriteria.
sqlListener.prototype.enterJoinCriteria = function (ctx) {
};
// Exit a parse tree produced by sqlParser#joinCriteria.
sqlListener.prototype.exitJoinCriteria = function (ctx) {
};
// Enter a parse tree produced by sqlParser#sample.
sqlListener.prototype.enterSample = function (ctx) {
};
// Exit a parse tree produced by sqlParser#sample.
sqlListener.prototype.exitSample = function (ctx) {
};
// Enter a parse tree produced by sqlParser#sampleByPercentile.
sqlListener.prototype.enterSampleByPercentile = function (ctx) {
};
// Exit a parse tree produced by sqlParser#sampleByPercentile.
sqlListener.prototype.exitSampleByPercentile = function (ctx) {
};
// Enter a parse tree produced by sqlParser#sampleByRows.
sqlListener.prototype.enterSampleByRows = function (ctx) {
};
// Exit a parse tree produced by sqlParser#sampleByRows.
sqlListener.prototype.exitSampleByRows = function (ctx) {
};
// Enter a parse tree produced by sqlParser#sampleByBucket.
sqlListener.prototype.enterSampleByBucket = function (ctx) {
};
// Exit a parse tree produced by sqlParser#sampleByBucket.
sqlListener.prototype.exitSampleByBucket = function (ctx) {
};
// Enter a parse tree produced by sqlParser#sampleByBytes.
sqlListener.prototype.enterSampleByBytes = function (ctx) {
};
// Exit a parse tree produced by sqlParser#sampleByBytes.
sqlListener.prototype.exitSampleByBytes = function (ctx) {
};
// Enter a parse tree produced by sqlParser#identifierList.
sqlListener.prototype.enterIdentifierList = function (ctx) {
};
// Exit a parse tree produced by sqlParser#identifierList.
sqlListener.prototype.exitIdentifierList = function (ctx) {
};
// Enter a parse tree produced by sqlParser#identifierSeq.
sqlListener.prototype.enterIdentifierSeq = function (ctx) {
};
// Exit a parse tree produced by sqlParser#identifierSeq.
sqlListener.prototype.exitIdentifierSeq = function (ctx) {
};
// Enter a parse tree produced by sqlParser#orderedIdentifierList.
sqlListener.prototype.enterOrderedIdentifierList = function (ctx) {
};
// Exit a parse tree produced by sqlParser#orderedIdentifierList.
sqlListener.prototype.exitOrderedIdentifierList = function (ctx) {
};
// Enter a parse tree produced by sqlParser#orderedIdentifier.
sqlListener.prototype.enterOrderedIdentifier = function (ctx) {
};
// Exit a parse tree produced by sqlParser#orderedIdentifier.
sqlListener.prototype.exitOrderedIdentifier = function (ctx) {
};
// Enter a parse tree produced by sqlParser#identifierCommentList.
sqlListener.prototype.enterIdentifierCommentList = function (ctx) {
};
// Exit a parse tree produced by sqlParser#identifierCommentList.
sqlListener.prototype.exitIdentifierCommentList = function (ctx) {
};
// Enter a parse tree produced by sqlParser#identifierComment.
sqlListener.prototype.enterIdentifierComment = function (ctx) {
};
// Exit a parse tree produced by sqlParser#identifierComment.
sqlListener.prototype.exitIdentifierComment = function (ctx) {
};
// Enter a parse tree produced by sqlParser#tableName.
sqlListener.prototype.enterTableName = function (ctx) {
};
// Exit a parse tree produced by sqlParser#tableName.
sqlListener.prototype.exitTableName = function (ctx) {
};
// Enter a parse tree produced by sqlParser#aliasedQuery.
sqlListener.prototype.enterAliasedQuery = function (ctx) {
};
// Exit a parse tree produced by sqlParser#aliasedQuery.
sqlListener.prototype.exitAliasedQuery = function (ctx) {
};
// Enter a parse tree produced by sqlParser#aliasedRelation.
sqlListener.prototype.enterAliasedRelation = function (ctx) {
};
// Exit a parse tree produced by sqlParser#aliasedRelation.
sqlListener.prototype.exitAliasedRelation = function (ctx) {
};
// Enter a parse tree produced by sqlParser#inlineTableDefault2.
sqlListener.prototype.enterInlineTableDefault2 = function (ctx) {
};
// Exit a parse tree produced by sqlParser#inlineTableDefault2.
sqlListener.prototype.exitInlineTableDefault2 = function (ctx) {
};
// Enter a parse tree produced by sqlParser#tableValuedFunction.
sqlListener.prototype.enterTableValuedFunction = function (ctx) {
};
// Exit a parse tree produced by sqlParser#tableValuedFunction.
sqlListener.prototype.exitTableValuedFunction = function (ctx) {
};
// Enter a parse tree produced by sqlParser#matchRecognize.
sqlListener.prototype.enterMatchRecognize = function (ctx) {
};
// Exit a parse tree produced by sqlParser#matchRecognize.
sqlListener.prototype.exitMatchRecognize = function (ctx) {
};
// Enter a parse tree produced by sqlParser#measureColumn.
sqlListener.prototype.enterMeasureColumn = function (ctx) {
};
// Exit a parse tree produced by sqlParser#measureColumn.
sqlListener.prototype.exitMeasureColumn = function (ctx) {
};
// Enter a parse tree produced by sqlParser#condition1.
sqlListener.prototype.enterCondition1 = function (ctx) {
};
// Exit a parse tree produced by sqlParser#condition1.
sqlListener.prototype.exitCondition1 = function (ctx) {
};
// Enter a parse tree produced by sqlParser#variable.
sqlListener.prototype.enterVariable = function (ctx) {
};
// Exit a parse tree produced by sqlParser#variable.
sqlListener.prototype.exitVariable = function (ctx) {
};
// Enter a parse tree produced by sqlParser#pattern1.
sqlListener.prototype.enterPattern1 = function (ctx) {
};
// Exit a parse tree produced by sqlParser#pattern1.
sqlListener.prototype.exitPattern1 = function (ctx) {
};
// Enter a parse tree produced by sqlParser#patternTerm.
sqlListener.prototype.enterPatternTerm = function (ctx) {
};
// Exit a parse tree produced by sqlParser#patternTerm.
sqlListener.prototype.exitPatternTerm = function (ctx) {
};
// Enter a parse tree produced by sqlParser#patternFactor.
sqlListener.prototype.enterPatternFactor = function (ctx) {
};
// Exit a parse tree produced by sqlParser#patternFactor.
sqlListener.prototype.exitPatternFactor = function (ctx) {
};
// Enter a parse tree produced by sqlParser#patternQuantifier.
sqlListener.prototype.enterPatternQuantifier = function (ctx) {
};
// Exit a parse tree produced by sqlParser#patternQuantifier.
sqlListener.prototype.exitPatternQuantifier = function (ctx) {
};
// Enter a parse tree produced by sqlParser#minRepeat.
sqlListener.prototype.enterMinRepeat = function (ctx) {
};
// Exit a parse tree produced by sqlParser#minRepeat.
sqlListener.prototype.exitMinRepeat = function (ctx) {
};
// Enter a parse tree produced by sqlParser#maxRepeat.
sqlListener.prototype.enterMaxRepeat = function (ctx) {
};
// Exit a parse tree produced by sqlParser#maxRepeat.
sqlListener.prototype.exitMaxRepeat = function (ctx) {
};
// Enter a parse tree produced by sqlParser#repeat.
sqlListener.prototype.enterRepeat = function (ctx) {
};
// Exit a parse tree produced by sqlParser#repeat.
sqlListener.prototype.exitRepeat = function (ctx) {
};
// Enter a parse tree produced by sqlParser#inlineTable.
sqlListener.prototype.enterInlineTable = function (ctx) {
};
// Exit a parse tree produced by sqlParser#inlineTable.
sqlListener.prototype.exitInlineTable = function (ctx) {
};
// Enter a parse tree produced by sqlParser#functionTable.
sqlListener.prototype.enterFunctionTable = function (ctx) {
};
// Exit a parse tree produced by sqlParser#functionTable.
sqlListener.prototype.exitFunctionTable = function (ctx) {
};
// Enter a parse tree produced by sqlParser#tableAlias.
sqlListener.prototype.enterTableAlias = function (ctx) {
};
// Exit a parse tree produced by sqlParser#tableAlias.
sqlListener.prototype.exitTableAlias = function (ctx) {
};
// Enter a parse tree produced by sqlParser#rowFormatSerde.
sqlListener.prototype.enterRowFormatSerde = function (ctx) {
};
// Exit a parse tree produced by sqlParser#rowFormatSerde.
sqlListener.prototype.exitRowFormatSerde = function (ctx) {
};
// Enter a parse tree produced by sqlParser#rowFormatDelimited.
sqlListener.prototype.enterRowFormatDelimited = function (ctx) {
};
// Exit a parse tree produced by sqlParser#rowFormatDelimited.
sqlListener.prototype.exitRowFormatDelimited = function (ctx) {
};
// Enter a parse tree produced by sqlParser#tableIdentifier.
sqlListener.prototype.enterTableIdentifier = function (ctx) {
};
// Exit a parse tree produced by sqlParser#tableIdentifier.
sqlListener.prototype.exitTableIdentifier = function (ctx) {
};
// Enter a parse tree produced by sqlParser#functionIdentifier.
sqlListener.prototype.enterFunctionIdentifier = function (ctx) {
};
// Exit a parse tree produced by sqlParser#functionIdentifier.
sqlListener.prototype.exitFunctionIdentifier = function (ctx) {
};
// Enter a parse tree produced by sqlParser#namedExpression.
sqlListener.prototype.enterNamedExpression = function (ctx) {
};
// Exit a parse tree produced by sqlParser#namedExpression.
sqlListener.prototype.exitNamedExpression = function (ctx) {
};
// Enter a parse tree produced by sqlParser#namedExpressionSeq.
sqlListener.prototype.enterNamedExpressionSeq = function (ctx) {
};
// Exit a parse tree produced by sqlParser#namedExpressionSeq.
sqlListener.prototype.exitNamedExpressionSeq = function (ctx) {
};
// Enter a parse tree produced by sqlParser#expression.
sqlListener.prototype.enterExpression = function (ctx) {
};
// Exit a parse tree produced by sqlParser#expression.
sqlListener.prototype.exitExpression = function (ctx) {
};
// Enter a parse tree produced by sqlParser#logicalNot.
sqlListener.prototype.enterLogicalNot = function (ctx) {
};
// Exit a parse tree produced by sqlParser#logicalNot.
sqlListener.prototype.exitLogicalNot = function (ctx) {
};
// Enter a parse tree produced by sqlParser#predicated.
sqlListener.prototype.enterPredicated = function (ctx) {
};
// Exit a parse tree produced by sqlParser#predicated.
sqlListener.prototype.exitPredicated = function (ctx) {
};
// Enter a parse tree produced by sqlParser#exists.
sqlListener.prototype.enterExists = function (ctx) {
};
// Exit a parse tree produced by sqlParser#exists.
sqlListener.prototype.exitExists = function (ctx) {
};
// Enter a parse tree produced by sqlParser#logicalBinary.
sqlListener.prototype.enterLogicalBinary = function (ctx) {
};
// Exit a parse tree produced by sqlParser#logicalBinary.
sqlListener.prototype.exitLogicalBinary = function (ctx) {
};
// Enter a parse tree produced by sqlParser#predicate.
sqlListener.prototype.enterPredicate = function (ctx) {
};
// Exit a parse tree produced by sqlParser#predicate.
sqlListener.prototype.exitPredicate = function (ctx) {
};
// Enter a parse tree produced by sqlParser#valueExpressionDefault.
sqlListener.prototype.enterValueExpressionDefault = function (ctx) {
};
// Exit a parse tree produced by sqlParser#valueExpressionDefault.
sqlListener.prototype.exitValueExpressionDefault = function (ctx) {
};
// Enter a parse tree produced by sqlParser#comparison.
sqlListener.prototype.enterComparison = function (ctx) {
};
// Exit a parse tree produced by sqlParser#comparison.
sqlListener.prototype.exitComparison = function (ctx) {
};
// Enter a parse tree produced by sqlParser#arithmeticBinary.
sqlListener.prototype.enterArithmeticBinary = function (ctx) {
};
// Exit a parse tree produced by sqlParser#arithmeticBinary.
sqlListener.prototype.exitArithmeticBinary = function (ctx) {
};
// Enter a parse tree produced by sqlParser#arithmeticUnary.
sqlListener.prototype.enterArithmeticUnary = function (ctx) {
};
// Exit a parse tree produced by sqlParser#arithmeticUnary.
sqlListener.prototype.exitArithmeticUnary = function (ctx) {
};
// Enter a parse tree produced by sqlParser#struct.
sqlListener.prototype.enterStruct = function (ctx) {
};
// Exit a parse tree produced by sqlParser#struct.
sqlListener.prototype.exitStruct = function (ctx) {
};
// Enter a parse tree produced by sqlParser#dereference.
sqlListener.prototype.enterDereference = function (ctx) {
};
// Exit a parse tree produced by sqlParser#dereference.
sqlListener.prototype.exitDereference = function (ctx) {
};
// Enter a parse tree produced by sqlParser#simpleCase.
sqlListener.prototype.enterSimpleCase = function (ctx) {
};
// Exit a parse tree produced by sqlParser#simpleCase.
sqlListener.prototype.exitSimpleCase = function (ctx) {
};
// Enter a parse tree produced by sqlParser#columnReference.
sqlListener.prototype.enterColumnReference = function (ctx) {
};
// Exit a parse tree produced by sqlParser#columnReference.
sqlListener.prototype.exitColumnReference = function (ctx) {
};
// Enter a parse tree produced by sqlParser#rowConstructor.
sqlListener.prototype.enterRowConstructor = function (ctx) {
};
// Exit a parse tree produced by sqlParser#rowConstructor.
sqlListener.prototype.exitRowConstructor = function (ctx) {
};
// Enter a parse tree produced by sqlParser#last.
sqlListener.prototype.enterLast = function (ctx) {
};
// Exit a parse tree produced by sqlParser#last.
sqlListener.prototype.exitLast = function (ctx) {
};
// Enter a parse tree produced by sqlParser#star.
sqlListener.prototype.enterStar = function (ctx) {
};
// Exit a parse tree produced by sqlParser#star.
sqlListener.prototype.exitStar = function (ctx) {
};
// Enter a parse tree produced by sqlParser#subscript.
sqlListener.prototype.enterSubscript = function (ctx) {
};
// Exit a parse tree produced by sqlParser#subscript.
sqlListener.prototype.exitSubscript = function (ctx) {
};
// Enter a parse tree produced by sqlParser#subqueryExpression.
sqlListener.prototype.enterSubqueryExpression = function (ctx) {
};
// Exit a parse tree produced by sqlParser#subqueryExpression.
sqlListener.prototype.exitSubqueryExpression = function (ctx) {
};
// Enter a parse tree produced by sqlParser#cast.
sqlListener.prototype.enterCast = function (ctx) {
};
// Exit a parse tree produced by sqlParser#cast.
sqlListener.prototype.exitCast = function (ctx) {
};
// Enter a parse tree produced by sqlParser#constantDefault.
sqlListener.prototype.enterConstantDefault = function (ctx) {
};
// Exit a parse tree produced by sqlParser#constantDefault.
sqlListener.prototype.exitConstantDefault = function (ctx) {
};
// Enter a parse tree produced by sqlParser#lambda.
sqlListener.prototype.enterLambda = function (ctx) {
};
// Exit a parse tree produced by sqlParser#lambda.
sqlListener.prototype.exitLambda = function (ctx) {
};
// Enter a parse tree produced by sqlParser#parenthesizedExpression.
sqlListener.prototype.enterParenthesizedExpression = function (ctx) {
};
// Exit a parse tree produced by sqlParser#parenthesizedExpression.
sqlListener.prototype.exitParenthesizedExpression = function (ctx) {
};
// Enter a parse tree produced by sqlParser#extract.
sqlListener.prototype.enterExtract = function (ctx) {
};
// Exit a parse tree produced by sqlParser#extract.
sqlListener.prototype.exitExtract = function (ctx) {
};
// Enter a parse tree produced by sqlParser#functionCall.
sqlListener.prototype.enterFunctionCall = function (ctx) {
};
// Exit a parse tree produced by sqlParser#functionCall.
sqlListener.prototype.exitFunctionCall = function (ctx) {
};
// Enter a parse tree produced by sqlParser#searchedCase.
sqlListener.prototype.enterSearchedCase = function (ctx) {
};
// Exit a parse tree produced by sqlParser#searchedCase.
sqlListener.prototype.exitSearchedCase = function (ctx) {
};
// Enter a parse tree produced by sqlParser#position.
sqlListener.prototype.enterPosition = function (ctx) {
};
// Exit a parse tree produced by sqlParser#position.
sqlListener.prototype.exitPosition = function (ctx) {
};
// Enter a parse tree produced by sqlParser#first.
sqlListener.prototype.enterFirst = function (ctx) {
};
// Exit a parse tree produced by sqlParser#first.
sqlListener.prototype.exitFirst = function (ctx) {
};
// Enter a parse tree produced by sqlParser#nullLiteral.
sqlListener.prototype.enterNullLiteral = function (ctx) {
};
// Exit a parse tree produced by sqlParser#nullLiteral.
sqlListener.prototype.exitNullLiteral = function (ctx) {
};
// Enter a parse tree produced by sqlParser#intervalLiteral.
sqlListener.prototype.enterIntervalLiteral = function (ctx) {
};
// Exit a parse tree produced by sqlParser#intervalLiteral.
sqlListener.prototype.exitIntervalLiteral = function (ctx) {
};
// Enter a parse tree produced by sqlParser#typeConstructor.
sqlListener.prototype.enterTypeConstructor = function (ctx) {
};
// Exit a parse tree produced by sqlParser#typeConstructor.
sqlListener.prototype.exitTypeConstructor = function (ctx) {
};
// Enter a parse tree produced by sqlParser#numericLiteral.
sqlListener.prototype.enterNumericLiteral = function (ctx) {
};
// Exit a parse tree produced by sqlParser#numericLiteral.
sqlListener.prototype.exitNumericLiteral = function (ctx) {
};
// Enter a parse tree produced by sqlParser#booleanLiteral.
sqlListener.prototype.enterBooleanLiteral = function (ctx) {
};
// Exit a parse tree produced by sqlParser#booleanLiteral.
sqlListener.prototype.exitBooleanLiteral = function (ctx) {
};
// Enter a parse tree produced by sqlParser#stringLiteral.
sqlListener.prototype.enterStringLiteral = function (ctx) {
};
// Exit a parse tree produced by sqlParser#stringLiteral.
sqlListener.prototype.exitStringLiteral = function (ctx) {
};
// Enter a parse tree produced by sqlParser#comparisonOperator.
sqlListener.prototype.enterComparisonOperator = function (ctx) {
};
// Exit a parse tree produced by sqlParser#comparisonOperator.
sqlListener.prototype.exitComparisonOperator = function (ctx) {
};
// Enter a parse tree produced by sqlParser#arithmeticOperator.
sqlListener.prototype.enterArithmeticOperator = function (ctx) {
};
// Exit a parse tree produced by sqlParser#arithmeticOperator.
sqlListener.prototype.exitArithmeticOperator = function (ctx) {
};
// Enter a parse tree produced by sqlParser#predicateOperator.
sqlListener.prototype.enterPredicateOperator = function (ctx) {
};
// Exit a parse tree produced by sqlParser#predicateOperator.
sqlListener.prototype.exitPredicateOperator = function (ctx) {
};
// Enter a parse tree produced by sqlParser#booleanValue.
sqlListener.prototype.enterBooleanValue = function (ctx) {
};
// Exit a parse tree produced by sqlParser#booleanValue.
sqlListener.prototype.exitBooleanValue = function (ctx) {
};
// Enter a parse tree produced by sqlParser#interval.
sqlListener.prototype.enterInterval = function (ctx) {
};
// Exit a parse tree produced by sqlParser#interval.
sqlListener.prototype.exitInterval = function (ctx) {
};
// Enter a parse tree produced by sqlParser#intervalField.
sqlListener.prototype.enterIntervalField = function (ctx) {
};
// Exit a parse tree produced by sqlParser#intervalField.
sqlListener.prototype.exitIntervalField = function (ctx) {
};
// Enter a parse tree produced by sqlParser#intervalValue.
sqlListener.prototype.enterIntervalValue = function (ctx) {
};
// Exit a parse tree produced by sqlParser#intervalValue.
sqlListener.prototype.exitIntervalValue = function (ctx) {
};
// Enter a parse tree produced by sqlParser#colPosition.
sqlListener.prototype.enterColPosition = function (ctx) {
};
// Exit a parse tree produced by sqlParser#colPosition.
sqlListener.prototype.exitColPosition = function (ctx) {
};
// Enter a parse tree produced by sqlParser#complexDataType.
sqlListener.prototype.enterComplexDataType = function (ctx) {
};
// Exit a parse tree produced by sqlParser#complexDataType.
sqlListener.prototype.exitComplexDataType = function (ctx) {
};
// Enter a parse tree produced by sqlParser#primitiveDataType.
sqlListener.prototype.enterPrimitiveDataType = function (ctx) {
};
// Exit a parse tree produced by sqlParser#primitiveDataType.
sqlListener.prototype.exitPrimitiveDataType = function (ctx) {
};
// Enter a parse tree produced by sqlParser#colTypeList.
sqlListener.prototype.enterColTypeList = function (ctx) {
};
// Exit a parse tree produced by sqlParser#colTypeList.
sqlListener.prototype.exitColTypeList = function (ctx) {
};
// Enter a parse tree produced by sqlParser#colType.
sqlListener.prototype.enterColType = function (ctx) {
};
// Exit a parse tree produced by sqlParser#colType.
sqlListener.prototype.exitColType = function (ctx) {
};
// Enter a parse tree produced by sqlParser#dtColTypeList.
sqlListener.prototype.enterDtColTypeList = function (ctx) {
};
// Exit a parse tree produced by sqlParser#dtColTypeList.
sqlListener.prototype.exitDtColTypeList = function (ctx) {
};
// Enter a parse tree produced by sqlParser#dtColType.
sqlListener.prototype.enterDtColType = function (ctx) {
};
// Exit a parse tree produced by sqlParser#dtColType.
sqlListener.prototype.exitDtColType = function (ctx) {
};
// Enter a parse tree produced by sqlParser#complexColTypeList.
sqlListener.prototype.enterComplexColTypeList = function (ctx) {
};
// Exit a parse tree produced by sqlParser#complexColTypeList.
sqlListener.prototype.exitComplexColTypeList = function (ctx) {
};
// Enter a parse tree produced by sqlParser#complexColType.
sqlListener.prototype.enterComplexColType = function (ctx) {
};
// Exit a parse tree produced by sqlParser#complexColType.
sqlListener.prototype.exitComplexColType = function (ctx) {
};
// Enter a parse tree produced by sqlParser#whenClause.
sqlListener.prototype.enterWhenClause = function (ctx) {
};
// Exit a parse tree produced by sqlParser#whenClause.
sqlListener.prototype.exitWhenClause = function (ctx) {
};
// Enter a parse tree produced by sqlParser#windows.
sqlListener.prototype.enterWindows = function (ctx) {
};
// Exit a parse tree produced by sqlParser#windows.
sqlListener.prototype.exitWindows = function (ctx) {
};
// Enter a parse tree produced by sqlParser#namedWindow.
sqlListener.prototype.enterNamedWindow = function (ctx) {
};
// Exit a parse tree produced by sqlParser#namedWindow.
sqlListener.prototype.exitNamedWindow = function (ctx) {
};
// Enter a parse tree produced by sqlParser#windowRef.
sqlListener.prototype.enterWindowRef = function (ctx) {
};
// Exit a parse tree produced by sqlParser#windowRef.
sqlListener.prototype.exitWindowRef = function (ctx) {
};
// Enter a parse tree produced by sqlParser#windowDef.
sqlListener.prototype.enterWindowDef = function (ctx) {
};
// Exit a parse tree produced by sqlParser#windowDef.
sqlListener.prototype.exitWindowDef = function (ctx) {
};
// Enter a parse tree produced by sqlParser#windowFrame.
sqlListener.prototype.enterWindowFrame = function (ctx) {
};
// Exit a parse tree produced by sqlParser#windowFrame.
sqlListener.prototype.exitWindowFrame = function (ctx) {
};
// Enter a parse tree produced by sqlParser#frameBound.
sqlListener.prototype.enterFrameBound = function (ctx) {
};
// Exit a parse tree produced by sqlParser#frameBound.
sqlListener.prototype.exitFrameBound = function (ctx) {
};
// Enter a parse tree produced by sqlParser#qualifiedName.
sqlListener.prototype.enterQualifiedName = function (ctx) {
};
// Exit a parse tree produced by sqlParser#qualifiedName.
sqlListener.prototype.exitQualifiedName = function (ctx) {
};
// Enter a parse tree produced by sqlParser#identifier.
sqlListener.prototype.enterIdentifier = function (ctx) {
};
// Exit a parse tree produced by sqlParser#identifier.
sqlListener.prototype.exitIdentifier = function (ctx) {
};
// Enter a parse tree produced by sqlParser#unquotedIdentifier.
sqlListener.prototype.enterUnquotedIdentifier = function (ctx) {
};
// Exit a parse tree produced by sqlParser#unquotedIdentifier.
sqlListener.prototype.exitUnquotedIdentifier = function (ctx) {
};
// Enter a parse tree produced by sqlParser#quotedIdentifierAlternative.
sqlListener.prototype.enterQuotedIdentifierAlternative = function (ctx) {
};
// Exit a parse tree produced by sqlParser#quotedIdentifierAlternative.
sqlListener.prototype.exitQuotedIdentifierAlternative = function (ctx) {
};
// Enter a parse tree produced by sqlParser#quotedIdentifier.
sqlListener.prototype.enterQuotedIdentifier = function (ctx) {
};
// Exit a parse tree produced by sqlParser#quotedIdentifier.
sqlListener.prototype.exitQuotedIdentifier = function (ctx) {
};
// Enter a parse tree produced by sqlParser#decimalLiteral.
sqlListener.prototype.enterDecimalLiteral = function (ctx) {
};
// Exit a parse tree produced by sqlParser#decimalLiteral.
sqlListener.prototype.exitDecimalLiteral = function (ctx) {
};
// Enter a parse tree produced by sqlParser#integerLiteral.
sqlListener.prototype.enterIntegerLiteral = function (ctx) {
};
// Exit a parse tree produced by sqlParser#integerLiteral.
sqlListener.prototype.exitIntegerLiteral = function (ctx) {
};
// Enter a parse tree produced by sqlParser#bigIntLiteral.
sqlListener.prototype.enterBigIntLiteral = function (ctx) {
};
// Exit a parse tree produced by sqlParser#bigIntLiteral.
sqlListener.prototype.exitBigIntLiteral = function (ctx) {
};
// Enter a parse tree produced by sqlParser#smallIntLiteral.
sqlListener.prototype.enterSmallIntLiteral = function (ctx) {
};
// Exit a parse tree produced by sqlParser#smallIntLiteral.
sqlListener.prototype.exitSmallIntLiteral = function (ctx) {
};
// Enter a parse tree produced by sqlParser#tinyIntLiteral.
sqlListener.prototype.enterTinyIntLiteral = function (ctx) {
};
// Exit a parse tree produced by sqlParser#tinyIntLiteral.
sqlListener.prototype.exitTinyIntLiteral = function (ctx) {
};
// Enter a parse tree produced by sqlParser#doubleLiteral.
sqlListener.prototype.enterDoubleLiteral = function (ctx) {
};
// Exit a parse tree produced by sqlParser#doubleLiteral.
sqlListener.prototype.exitDoubleLiteral = function (ctx) {
};
// Enter a parse tree produced by sqlParser#bigDecimalLiteral.
sqlListener.prototype.enterBigDecimalLiteral = function (ctx) {
};
// Exit a parse tree produced by sqlParser#bigDecimalLiteral.
sqlListener.prototype.exitBigDecimalLiteral = function (ctx) {
};
// Enter a parse tree produced by sqlParser#nonReserved.
sqlListener.prototype.enterNonReserved = function (ctx) {
};
// Exit a parse tree produced by sqlParser#nonReserved.
sqlListener.prototype.exitNonReserved = function (ctx) {
};
exports.sqlListener = sqlListener;
