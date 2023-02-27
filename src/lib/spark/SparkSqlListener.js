// Generated from /Users/ziv/github.com/dt-sql-parser/src/grammar/spark/SparkSql.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by SparkSqlParser.
function SparkSqlListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

SparkSqlListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
SparkSqlListener.prototype.constructor = SparkSqlListener;

// Enter a parse tree produced by SparkSqlParser#program.
SparkSqlListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#program.
SparkSqlListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#singleStatement.
SparkSqlListener.prototype.enterSingleStatement = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#singleStatement.
SparkSqlListener.prototype.exitSingleStatement = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#emptyStatement.
SparkSqlListener.prototype.enterEmptyStatement = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#emptyStatement.
SparkSqlListener.prototype.exitEmptyStatement = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#singleExpression.
SparkSqlListener.prototype.enterSingleExpression = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#singleExpression.
SparkSqlListener.prototype.exitSingleExpression = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#singleTableIdentifier.
SparkSqlListener.prototype.enterSingleTableIdentifier = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#singleTableIdentifier.
SparkSqlListener.prototype.exitSingleTableIdentifier = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#singleMultipartIdentifier.
SparkSqlListener.prototype.enterSingleMultipartIdentifier = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#singleMultipartIdentifier.
SparkSqlListener.prototype.exitSingleMultipartIdentifier = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#singleDataType.
SparkSqlListener.prototype.enterSingleDataType = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#singleDataType.
SparkSqlListener.prototype.exitSingleDataType = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#singleTableSchema.
SparkSqlListener.prototype.enterSingleTableSchema = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#singleTableSchema.
SparkSqlListener.prototype.exitSingleTableSchema = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#statementDefault.
SparkSqlListener.prototype.enterStatementDefault = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#statementDefault.
SparkSqlListener.prototype.exitStatementDefault = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#dmlStatement.
SparkSqlListener.prototype.enterDmlStatement = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#dmlStatement.
SparkSqlListener.prototype.exitDmlStatement = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#use.
SparkSqlListener.prototype.enterUse = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#use.
SparkSqlListener.prototype.exitUse = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#createNamespace.
SparkSqlListener.prototype.enterCreateNamespace = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#createNamespace.
SparkSqlListener.prototype.exitCreateNamespace = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#setNamespaceProperties.
SparkSqlListener.prototype.enterSetNamespaceProperties = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#setNamespaceProperties.
SparkSqlListener.prototype.exitSetNamespaceProperties = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#setNamespaceLocation.
SparkSqlListener.prototype.enterSetNamespaceLocation = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#setNamespaceLocation.
SparkSqlListener.prototype.exitSetNamespaceLocation = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#dropNamespace.
SparkSqlListener.prototype.enterDropNamespace = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#dropNamespace.
SparkSqlListener.prototype.exitDropNamespace = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#showNamespaces.
SparkSqlListener.prototype.enterShowNamespaces = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#showNamespaces.
SparkSqlListener.prototype.exitShowNamespaces = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#createTable.
SparkSqlListener.prototype.enterCreateTable = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#createTable.
SparkSqlListener.prototype.exitCreateTable = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#createHiveTable.
SparkSqlListener.prototype.enterCreateHiveTable = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#createHiveTable.
SparkSqlListener.prototype.exitCreateHiveTable = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#createTableLike.
SparkSqlListener.prototype.enterCreateTableLike = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#createTableLike.
SparkSqlListener.prototype.exitCreateTableLike = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#replaceTable.
SparkSqlListener.prototype.enterReplaceTable = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#replaceTable.
SparkSqlListener.prototype.exitReplaceTable = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#analyze.
SparkSqlListener.prototype.enterAnalyze = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#analyze.
SparkSqlListener.prototype.exitAnalyze = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#addTableColumns.
SparkSqlListener.prototype.enterAddTableColumns = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#addTableColumns.
SparkSqlListener.prototype.exitAddTableColumns = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#renameTableColumn.
SparkSqlListener.prototype.enterRenameTableColumn = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#renameTableColumn.
SparkSqlListener.prototype.exitRenameTableColumn = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#dropTableColumns.
SparkSqlListener.prototype.enterDropTableColumns = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#dropTableColumns.
SparkSqlListener.prototype.exitDropTableColumns = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#renameTable.
SparkSqlListener.prototype.enterRenameTable = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#renameTable.
SparkSqlListener.prototype.exitRenameTable = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#setTableProperties.
SparkSqlListener.prototype.enterSetTableProperties = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#setTableProperties.
SparkSqlListener.prototype.exitSetTableProperties = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#unsetTableProperties.
SparkSqlListener.prototype.enterUnsetTableProperties = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#unsetTableProperties.
SparkSqlListener.prototype.exitUnsetTableProperties = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#alterTableAlterColumn.
SparkSqlListener.prototype.enterAlterTableAlterColumn = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#alterTableAlterColumn.
SparkSqlListener.prototype.exitAlterTableAlterColumn = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#hiveChangeColumn.
SparkSqlListener.prototype.enterHiveChangeColumn = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#hiveChangeColumn.
SparkSqlListener.prototype.exitHiveChangeColumn = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#hiveReplaceColumns.
SparkSqlListener.prototype.enterHiveReplaceColumns = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#hiveReplaceColumns.
SparkSqlListener.prototype.exitHiveReplaceColumns = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#setTableSerDe.
SparkSqlListener.prototype.enterSetTableSerDe = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#setTableSerDe.
SparkSqlListener.prototype.exitSetTableSerDe = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#addTablePartition.
SparkSqlListener.prototype.enterAddTablePartition = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#addTablePartition.
SparkSqlListener.prototype.exitAddTablePartition = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#renameTablePartition.
SparkSqlListener.prototype.enterRenameTablePartition = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#renameTablePartition.
SparkSqlListener.prototype.exitRenameTablePartition = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#dropTablePartitions.
SparkSqlListener.prototype.enterDropTablePartitions = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#dropTablePartitions.
SparkSqlListener.prototype.exitDropTablePartitions = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#setTableLocation.
SparkSqlListener.prototype.enterSetTableLocation = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#setTableLocation.
SparkSqlListener.prototype.exitSetTableLocation = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#recoverPartitions.
SparkSqlListener.prototype.enterRecoverPartitions = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#recoverPartitions.
SparkSqlListener.prototype.exitRecoverPartitions = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#dropTable.
SparkSqlListener.prototype.enterDropTable = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#dropTable.
SparkSqlListener.prototype.exitDropTable = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#dropView.
SparkSqlListener.prototype.enterDropView = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#dropView.
SparkSqlListener.prototype.exitDropView = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#createView.
SparkSqlListener.prototype.enterCreateView = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#createView.
SparkSqlListener.prototype.exitCreateView = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#createTempViewUsing.
SparkSqlListener.prototype.enterCreateTempViewUsing = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#createTempViewUsing.
SparkSqlListener.prototype.exitCreateTempViewUsing = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#alterViewQuery.
SparkSqlListener.prototype.enterAlterViewQuery = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#alterViewQuery.
SparkSqlListener.prototype.exitAlterViewQuery = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#createFunction.
SparkSqlListener.prototype.enterCreateFunction = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#createFunction.
SparkSqlListener.prototype.exitCreateFunction = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#dropFunction.
SparkSqlListener.prototype.enterDropFunction = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#dropFunction.
SparkSqlListener.prototype.exitDropFunction = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#explain.
SparkSqlListener.prototype.enterExplain = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#explain.
SparkSqlListener.prototype.exitExplain = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#showTables.
SparkSqlListener.prototype.enterShowTables = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#showTables.
SparkSqlListener.prototype.exitShowTables = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#showTable.
SparkSqlListener.prototype.enterShowTable = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#showTable.
SparkSqlListener.prototype.exitShowTable = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#showTblProperties.
SparkSqlListener.prototype.enterShowTblProperties = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#showTblProperties.
SparkSqlListener.prototype.exitShowTblProperties = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#showColumns.
SparkSqlListener.prototype.enterShowColumns = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#showColumns.
SparkSqlListener.prototype.exitShowColumns = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#showViews.
SparkSqlListener.prototype.enterShowViews = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#showViews.
SparkSqlListener.prototype.exitShowViews = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#showPartitions.
SparkSqlListener.prototype.enterShowPartitions = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#showPartitions.
SparkSqlListener.prototype.exitShowPartitions = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#showFunctions.
SparkSqlListener.prototype.enterShowFunctions = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#showFunctions.
SparkSqlListener.prototype.exitShowFunctions = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#showCreateTable.
SparkSqlListener.prototype.enterShowCreateTable = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#showCreateTable.
SparkSqlListener.prototype.exitShowCreateTable = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#showCurrentNamespace.
SparkSqlListener.prototype.enterShowCurrentNamespace = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#showCurrentNamespace.
SparkSqlListener.prototype.exitShowCurrentNamespace = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#describeFunction.
SparkSqlListener.prototype.enterDescribeFunction = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#describeFunction.
SparkSqlListener.prototype.exitDescribeFunction = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#describeNamespace.
SparkSqlListener.prototype.enterDescribeNamespace = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#describeNamespace.
SparkSqlListener.prototype.exitDescribeNamespace = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#describeRelation.
SparkSqlListener.prototype.enterDescribeRelation = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#describeRelation.
SparkSqlListener.prototype.exitDescribeRelation = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#describeQuery.
SparkSqlListener.prototype.enterDescribeQuery = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#describeQuery.
SparkSqlListener.prototype.exitDescribeQuery = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#commentNamespace.
SparkSqlListener.prototype.enterCommentNamespace = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#commentNamespace.
SparkSqlListener.prototype.exitCommentNamespace = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#commentTable.
SparkSqlListener.prototype.enterCommentTable = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#commentTable.
SparkSqlListener.prototype.exitCommentTable = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#refreshTable.
SparkSqlListener.prototype.enterRefreshTable = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#refreshTable.
SparkSqlListener.prototype.exitRefreshTable = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#refreshFunction.
SparkSqlListener.prototype.enterRefreshFunction = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#refreshFunction.
SparkSqlListener.prototype.exitRefreshFunction = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#refreshResource.
SparkSqlListener.prototype.enterRefreshResource = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#refreshResource.
SparkSqlListener.prototype.exitRefreshResource = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#cacheTable.
SparkSqlListener.prototype.enterCacheTable = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#cacheTable.
SparkSqlListener.prototype.exitCacheTable = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#uncacheTable.
SparkSqlListener.prototype.enterUncacheTable = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#uncacheTable.
SparkSqlListener.prototype.exitUncacheTable = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#clearCache.
SparkSqlListener.prototype.enterClearCache = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#clearCache.
SparkSqlListener.prototype.exitClearCache = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#loadData.
SparkSqlListener.prototype.enterLoadData = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#loadData.
SparkSqlListener.prototype.exitLoadData = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#truncateTable.
SparkSqlListener.prototype.enterTruncateTable = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#truncateTable.
SparkSqlListener.prototype.exitTruncateTable = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#repairTable.
SparkSqlListener.prototype.enterRepairTable = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#repairTable.
SparkSqlListener.prototype.exitRepairTable = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#manageResource.
SparkSqlListener.prototype.enterManageResource = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#manageResource.
SparkSqlListener.prototype.exitManageResource = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#failNativeCommand.
SparkSqlListener.prototype.enterFailNativeCommand = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#failNativeCommand.
SparkSqlListener.prototype.exitFailNativeCommand = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#setTimeZone.
SparkSqlListener.prototype.enterSetTimeZone = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#setTimeZone.
SparkSqlListener.prototype.exitSetTimeZone = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#setQuotedConfiguration.
SparkSqlListener.prototype.enterSetQuotedConfiguration = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#setQuotedConfiguration.
SparkSqlListener.prototype.exitSetQuotedConfiguration = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#setConfiguration.
SparkSqlListener.prototype.enterSetConfiguration = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#setConfiguration.
SparkSqlListener.prototype.exitSetConfiguration = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#resetQuotedConfiguration.
SparkSqlListener.prototype.enterResetQuotedConfiguration = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#resetQuotedConfiguration.
SparkSqlListener.prototype.exitResetQuotedConfiguration = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#resetConfiguration.
SparkSqlListener.prototype.enterResetConfiguration = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#resetConfiguration.
SparkSqlListener.prototype.exitResetConfiguration = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#configKey.
SparkSqlListener.prototype.enterConfigKey = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#configKey.
SparkSqlListener.prototype.exitConfigKey = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#unsupportedHiveNativeCommands.
SparkSqlListener.prototype.enterUnsupportedHiveNativeCommands = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#unsupportedHiveNativeCommands.
SparkSqlListener.prototype.exitUnsupportedHiveNativeCommands = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#createTableHeader.
SparkSqlListener.prototype.enterCreateTableHeader = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#createTableHeader.
SparkSqlListener.prototype.exitCreateTableHeader = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#replaceTableHeader.
SparkSqlListener.prototype.enterReplaceTableHeader = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#replaceTableHeader.
SparkSqlListener.prototype.exitReplaceTableHeader = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#bucketSpec.
SparkSqlListener.prototype.enterBucketSpec = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#bucketSpec.
SparkSqlListener.prototype.exitBucketSpec = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#skewSpec.
SparkSqlListener.prototype.enterSkewSpec = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#skewSpec.
SparkSqlListener.prototype.exitSkewSpec = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#locationSpec.
SparkSqlListener.prototype.enterLocationSpec = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#locationSpec.
SparkSqlListener.prototype.exitLocationSpec = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#commentSpec.
SparkSqlListener.prototype.enterCommentSpec = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#commentSpec.
SparkSqlListener.prototype.exitCommentSpec = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#query.
SparkSqlListener.prototype.enterQuery = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#query.
SparkSqlListener.prototype.exitQuery = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#insertOverwriteTable.
SparkSqlListener.prototype.enterInsertOverwriteTable = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#insertOverwriteTable.
SparkSqlListener.prototype.exitInsertOverwriteTable = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#insertIntoTable.
SparkSqlListener.prototype.enterInsertIntoTable = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#insertIntoTable.
SparkSqlListener.prototype.exitInsertIntoTable = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#insertOverwriteHiveDir.
SparkSqlListener.prototype.enterInsertOverwriteHiveDir = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#insertOverwriteHiveDir.
SparkSqlListener.prototype.exitInsertOverwriteHiveDir = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#insertOverwriteDir.
SparkSqlListener.prototype.enterInsertOverwriteDir = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#insertOverwriteDir.
SparkSqlListener.prototype.exitInsertOverwriteDir = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#partitionSpecLocation.
SparkSqlListener.prototype.enterPartitionSpecLocation = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#partitionSpecLocation.
SparkSqlListener.prototype.exitPartitionSpecLocation = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#partitionSpec.
SparkSqlListener.prototype.enterPartitionSpec = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#partitionSpec.
SparkSqlListener.prototype.exitPartitionSpec = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#partitionVal.
SparkSqlListener.prototype.enterPartitionVal = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#partitionVal.
SparkSqlListener.prototype.exitPartitionVal = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#namespace.
SparkSqlListener.prototype.enterNamespace = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#namespace.
SparkSqlListener.prototype.exitNamespace = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#describeFuncName.
SparkSqlListener.prototype.enterDescribeFuncName = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#describeFuncName.
SparkSqlListener.prototype.exitDescribeFuncName = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#describeColName.
SparkSqlListener.prototype.enterDescribeColName = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#describeColName.
SparkSqlListener.prototype.exitDescribeColName = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#ctes.
SparkSqlListener.prototype.enterCtes = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#ctes.
SparkSqlListener.prototype.exitCtes = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#namedQuery.
SparkSqlListener.prototype.enterNamedQuery = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#namedQuery.
SparkSqlListener.prototype.exitNamedQuery = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#tableProvider.
SparkSqlListener.prototype.enterTableProvider = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#tableProvider.
SparkSqlListener.prototype.exitTableProvider = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#createTableClauses.
SparkSqlListener.prototype.enterCreateTableClauses = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#createTableClauses.
SparkSqlListener.prototype.exitCreateTableClauses = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#tablePropertyList.
SparkSqlListener.prototype.enterTablePropertyList = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#tablePropertyList.
SparkSqlListener.prototype.exitTablePropertyList = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#tableProperty.
SparkSqlListener.prototype.enterTableProperty = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#tableProperty.
SparkSqlListener.prototype.exitTableProperty = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#tablePropertyKey.
SparkSqlListener.prototype.enterTablePropertyKey = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#tablePropertyKey.
SparkSqlListener.prototype.exitTablePropertyKey = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#tablePropertyValue.
SparkSqlListener.prototype.enterTablePropertyValue = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#tablePropertyValue.
SparkSqlListener.prototype.exitTablePropertyValue = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#constantList.
SparkSqlListener.prototype.enterConstantList = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#constantList.
SparkSqlListener.prototype.exitConstantList = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#nestedConstantList.
SparkSqlListener.prototype.enterNestedConstantList = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#nestedConstantList.
SparkSqlListener.prototype.exitNestedConstantList = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#createFileFormat.
SparkSqlListener.prototype.enterCreateFileFormat = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#createFileFormat.
SparkSqlListener.prototype.exitCreateFileFormat = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#tableFileFormat.
SparkSqlListener.prototype.enterTableFileFormat = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#tableFileFormat.
SparkSqlListener.prototype.exitTableFileFormat = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#genericFileFormat.
SparkSqlListener.prototype.enterGenericFileFormat = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#genericFileFormat.
SparkSqlListener.prototype.exitGenericFileFormat = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#storageHandler.
SparkSqlListener.prototype.enterStorageHandler = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#storageHandler.
SparkSqlListener.prototype.exitStorageHandler = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#resource.
SparkSqlListener.prototype.enterResource = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#resource.
SparkSqlListener.prototype.exitResource = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#singleInsertQuery.
SparkSqlListener.prototype.enterSingleInsertQuery = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#singleInsertQuery.
SparkSqlListener.prototype.exitSingleInsertQuery = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#multiInsertQuery.
SparkSqlListener.prototype.enterMultiInsertQuery = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#multiInsertQuery.
SparkSqlListener.prototype.exitMultiInsertQuery = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#deleteFromTable.
SparkSqlListener.prototype.enterDeleteFromTable = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#deleteFromTable.
SparkSqlListener.prototype.exitDeleteFromTable = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#updateTable.
SparkSqlListener.prototype.enterUpdateTable = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#updateTable.
SparkSqlListener.prototype.exitUpdateTable = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#mergeIntoTable.
SparkSqlListener.prototype.enterMergeIntoTable = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#mergeIntoTable.
SparkSqlListener.prototype.exitMergeIntoTable = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#queryOrganization.
SparkSqlListener.prototype.enterQueryOrganization = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#queryOrganization.
SparkSqlListener.prototype.exitQueryOrganization = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#multiInsertQueryBody.
SparkSqlListener.prototype.enterMultiInsertQueryBody = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#multiInsertQueryBody.
SparkSqlListener.prototype.exitMultiInsertQueryBody = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#queryTermDefault.
SparkSqlListener.prototype.enterQueryTermDefault = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#queryTermDefault.
SparkSqlListener.prototype.exitQueryTermDefault = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#setOperation.
SparkSqlListener.prototype.enterSetOperation = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#setOperation.
SparkSqlListener.prototype.exitSetOperation = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#queryPrimaryDefault.
SparkSqlListener.prototype.enterQueryPrimaryDefault = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#queryPrimaryDefault.
SparkSqlListener.prototype.exitQueryPrimaryDefault = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#fromStmt.
SparkSqlListener.prototype.enterFromStmt = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#fromStmt.
SparkSqlListener.prototype.exitFromStmt = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#table.
SparkSqlListener.prototype.enterTable = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#table.
SparkSqlListener.prototype.exitTable = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#inlineTableDefault1.
SparkSqlListener.prototype.enterInlineTableDefault1 = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#inlineTableDefault1.
SparkSqlListener.prototype.exitInlineTableDefault1 = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#subquery.
SparkSqlListener.prototype.enterSubquery = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#subquery.
SparkSqlListener.prototype.exitSubquery = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#sortItem.
SparkSqlListener.prototype.enterSortItem = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#sortItem.
SparkSqlListener.prototype.exitSortItem = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#fromStatement.
SparkSqlListener.prototype.enterFromStatement = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#fromStatement.
SparkSqlListener.prototype.exitFromStatement = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#fromStatementBody.
SparkSqlListener.prototype.enterFromStatementBody = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#fromStatementBody.
SparkSqlListener.prototype.exitFromStatementBody = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#transformQuerySpecification.
SparkSqlListener.prototype.enterTransformQuerySpecification = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#transformQuerySpecification.
SparkSqlListener.prototype.exitTransformQuerySpecification = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#regularQuerySpecification.
SparkSqlListener.prototype.enterRegularQuerySpecification = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#regularQuerySpecification.
SparkSqlListener.prototype.exitRegularQuerySpecification = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#transformClause.
SparkSqlListener.prototype.enterTransformClause = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#transformClause.
SparkSqlListener.prototype.exitTransformClause = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#selectClause.
SparkSqlListener.prototype.enterSelectClause = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#selectClause.
SparkSqlListener.prototype.exitSelectClause = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#setClause.
SparkSqlListener.prototype.enterSetClause = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#setClause.
SparkSqlListener.prototype.exitSetClause = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#matchedClause.
SparkSqlListener.prototype.enterMatchedClause = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#matchedClause.
SparkSqlListener.prototype.exitMatchedClause = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#notMatchedClause.
SparkSqlListener.prototype.enterNotMatchedClause = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#notMatchedClause.
SparkSqlListener.prototype.exitNotMatchedClause = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#matchedAction.
SparkSqlListener.prototype.enterMatchedAction = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#matchedAction.
SparkSqlListener.prototype.exitMatchedAction = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#notMatchedAction.
SparkSqlListener.prototype.enterNotMatchedAction = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#notMatchedAction.
SparkSqlListener.prototype.exitNotMatchedAction = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#assignmentList.
SparkSqlListener.prototype.enterAssignmentList = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#assignmentList.
SparkSqlListener.prototype.exitAssignmentList = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#assignment.
SparkSqlListener.prototype.enterAssignment = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#assignment.
SparkSqlListener.prototype.exitAssignment = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#whereClause.
SparkSqlListener.prototype.enterWhereClause = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#whereClause.
SparkSqlListener.prototype.exitWhereClause = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#havingClause.
SparkSqlListener.prototype.enterHavingClause = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#havingClause.
SparkSqlListener.prototype.exitHavingClause = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#hint.
SparkSqlListener.prototype.enterHint = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#hint.
SparkSqlListener.prototype.exitHint = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#hintStatement.
SparkSqlListener.prototype.enterHintStatement = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#hintStatement.
SparkSqlListener.prototype.exitHintStatement = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#fromClause.
SparkSqlListener.prototype.enterFromClause = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#fromClause.
SparkSqlListener.prototype.exitFromClause = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#aggregationClause.
SparkSqlListener.prototype.enterAggregationClause = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#aggregationClause.
SparkSqlListener.prototype.exitAggregationClause = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#groupingSet.
SparkSqlListener.prototype.enterGroupingSet = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#groupingSet.
SparkSqlListener.prototype.exitGroupingSet = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#pivotClause.
SparkSqlListener.prototype.enterPivotClause = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#pivotClause.
SparkSqlListener.prototype.exitPivotClause = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#pivotColumn.
SparkSqlListener.prototype.enterPivotColumn = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#pivotColumn.
SparkSqlListener.prototype.exitPivotColumn = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#pivotValue.
SparkSqlListener.prototype.enterPivotValue = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#pivotValue.
SparkSqlListener.prototype.exitPivotValue = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#lateralView.
SparkSqlListener.prototype.enterLateralView = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#lateralView.
SparkSqlListener.prototype.exitLateralView = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#setQuantifier.
SparkSqlListener.prototype.enterSetQuantifier = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#setQuantifier.
SparkSqlListener.prototype.exitSetQuantifier = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#relation.
SparkSqlListener.prototype.enterRelation = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#relation.
SparkSqlListener.prototype.exitRelation = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#joinRelation.
SparkSqlListener.prototype.enterJoinRelation = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#joinRelation.
SparkSqlListener.prototype.exitJoinRelation = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#joinType.
SparkSqlListener.prototype.enterJoinType = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#joinType.
SparkSqlListener.prototype.exitJoinType = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#joinCriteria.
SparkSqlListener.prototype.enterJoinCriteria = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#joinCriteria.
SparkSqlListener.prototype.exitJoinCriteria = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#sample.
SparkSqlListener.prototype.enterSample = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#sample.
SparkSqlListener.prototype.exitSample = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#sampleByPercentile.
SparkSqlListener.prototype.enterSampleByPercentile = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#sampleByPercentile.
SparkSqlListener.prototype.exitSampleByPercentile = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#sampleByRows.
SparkSqlListener.prototype.enterSampleByRows = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#sampleByRows.
SparkSqlListener.prototype.exitSampleByRows = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#sampleByBucket.
SparkSqlListener.prototype.enterSampleByBucket = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#sampleByBucket.
SparkSqlListener.prototype.exitSampleByBucket = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#sampleByBytes.
SparkSqlListener.prototype.enterSampleByBytes = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#sampleByBytes.
SparkSqlListener.prototype.exitSampleByBytes = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#identifierList.
SparkSqlListener.prototype.enterIdentifierList = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#identifierList.
SparkSqlListener.prototype.exitIdentifierList = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#identifierSeq.
SparkSqlListener.prototype.enterIdentifierSeq = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#identifierSeq.
SparkSqlListener.prototype.exitIdentifierSeq = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#orderedIdentifierList.
SparkSqlListener.prototype.enterOrderedIdentifierList = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#orderedIdentifierList.
SparkSqlListener.prototype.exitOrderedIdentifierList = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#orderedIdentifier.
SparkSqlListener.prototype.enterOrderedIdentifier = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#orderedIdentifier.
SparkSqlListener.prototype.exitOrderedIdentifier = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#identifierCommentList.
SparkSqlListener.prototype.enterIdentifierCommentList = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#identifierCommentList.
SparkSqlListener.prototype.exitIdentifierCommentList = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#identifierComment.
SparkSqlListener.prototype.enterIdentifierComment = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#identifierComment.
SparkSqlListener.prototype.exitIdentifierComment = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#tableName.
SparkSqlListener.prototype.enterTableName = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#tableName.
SparkSqlListener.prototype.exitTableName = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#aliasedQuery.
SparkSqlListener.prototype.enterAliasedQuery = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#aliasedQuery.
SparkSqlListener.prototype.exitAliasedQuery = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#aliasedRelation.
SparkSqlListener.prototype.enterAliasedRelation = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#aliasedRelation.
SparkSqlListener.prototype.exitAliasedRelation = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#inlineTableDefault2.
SparkSqlListener.prototype.enterInlineTableDefault2 = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#inlineTableDefault2.
SparkSqlListener.prototype.exitInlineTableDefault2 = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#tableValuedFunction.
SparkSqlListener.prototype.enterTableValuedFunction = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#tableValuedFunction.
SparkSqlListener.prototype.exitTableValuedFunction = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#inlineTable.
SparkSqlListener.prototype.enterInlineTable = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#inlineTable.
SparkSqlListener.prototype.exitInlineTable = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#functionTable.
SparkSqlListener.prototype.enterFunctionTable = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#functionTable.
SparkSqlListener.prototype.exitFunctionTable = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#tableAlias.
SparkSqlListener.prototype.enterTableAlias = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#tableAlias.
SparkSqlListener.prototype.exitTableAlias = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#rowFormatSerde.
SparkSqlListener.prototype.enterRowFormatSerde = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#rowFormatSerde.
SparkSqlListener.prototype.exitRowFormatSerde = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#rowFormatDelimited.
SparkSqlListener.prototype.enterRowFormatDelimited = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#rowFormatDelimited.
SparkSqlListener.prototype.exitRowFormatDelimited = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#multipartIdentifierList.
SparkSqlListener.prototype.enterMultipartIdentifierList = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#multipartIdentifierList.
SparkSqlListener.prototype.exitMultipartIdentifierList = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#multipartIdentifier.
SparkSqlListener.prototype.enterMultipartIdentifier = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#multipartIdentifier.
SparkSqlListener.prototype.exitMultipartIdentifier = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#tableIdentifier.
SparkSqlListener.prototype.enterTableIdentifier = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#tableIdentifier.
SparkSqlListener.prototype.exitTableIdentifier = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#namedExpression.
SparkSqlListener.prototype.enterNamedExpression = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#namedExpression.
SparkSqlListener.prototype.exitNamedExpression = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#namedExpressionSeq.
SparkSqlListener.prototype.enterNamedExpressionSeq = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#namedExpressionSeq.
SparkSqlListener.prototype.exitNamedExpressionSeq = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#transformList.
SparkSqlListener.prototype.enterTransformList = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#transformList.
SparkSqlListener.prototype.exitTransformList = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#identityTransform.
SparkSqlListener.prototype.enterIdentityTransform = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#identityTransform.
SparkSqlListener.prototype.exitIdentityTransform = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#applyTransform.
SparkSqlListener.prototype.enterApplyTransform = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#applyTransform.
SparkSqlListener.prototype.exitApplyTransform = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#transformArgument.
SparkSqlListener.prototype.enterTransformArgument = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#transformArgument.
SparkSqlListener.prototype.exitTransformArgument = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#expression.
SparkSqlListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#expression.
SparkSqlListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#logicalNot.
SparkSqlListener.prototype.enterLogicalNot = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#logicalNot.
SparkSqlListener.prototype.exitLogicalNot = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#predicated.
SparkSqlListener.prototype.enterPredicated = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#predicated.
SparkSqlListener.prototype.exitPredicated = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#exists.
SparkSqlListener.prototype.enterExists = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#exists.
SparkSqlListener.prototype.exitExists = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#logicalBinary.
SparkSqlListener.prototype.enterLogicalBinary = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#logicalBinary.
SparkSqlListener.prototype.exitLogicalBinary = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#predicate.
SparkSqlListener.prototype.enterPredicate = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#predicate.
SparkSqlListener.prototype.exitPredicate = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#valueExpressionDefault.
SparkSqlListener.prototype.enterValueExpressionDefault = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#valueExpressionDefault.
SparkSqlListener.prototype.exitValueExpressionDefault = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#comparison.
SparkSqlListener.prototype.enterComparison = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#comparison.
SparkSqlListener.prototype.exitComparison = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#arithmeticBinary.
SparkSqlListener.prototype.enterArithmeticBinary = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#arithmeticBinary.
SparkSqlListener.prototype.exitArithmeticBinary = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#arithmeticUnary.
SparkSqlListener.prototype.enterArithmeticUnary = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#arithmeticUnary.
SparkSqlListener.prototype.exitArithmeticUnary = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#struct.
SparkSqlListener.prototype.enterStruct = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#struct.
SparkSqlListener.prototype.exitStruct = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#dereference.
SparkSqlListener.prototype.enterDereference = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#dereference.
SparkSqlListener.prototype.exitDereference = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#simpleCase.
SparkSqlListener.prototype.enterSimpleCase = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#simpleCase.
SparkSqlListener.prototype.exitSimpleCase = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#columnReference.
SparkSqlListener.prototype.enterColumnReference = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#columnReference.
SparkSqlListener.prototype.exitColumnReference = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#rowConstructor.
SparkSqlListener.prototype.enterRowConstructor = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#rowConstructor.
SparkSqlListener.prototype.exitRowConstructor = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#last.
SparkSqlListener.prototype.enterLast = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#last.
SparkSqlListener.prototype.exitLast = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#star.
SparkSqlListener.prototype.enterStar = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#star.
SparkSqlListener.prototype.exitStar = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#overlay.
SparkSqlListener.prototype.enterOverlay = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#overlay.
SparkSqlListener.prototype.exitOverlay = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#subscript.
SparkSqlListener.prototype.enterSubscript = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#subscript.
SparkSqlListener.prototype.exitSubscript = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#subqueryExpression.
SparkSqlListener.prototype.enterSubqueryExpression = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#subqueryExpression.
SparkSqlListener.prototype.exitSubqueryExpression = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#substring.
SparkSqlListener.prototype.enterSubstring = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#substring.
SparkSqlListener.prototype.exitSubstring = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#currentDatetime.
SparkSqlListener.prototype.enterCurrentDatetime = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#currentDatetime.
SparkSqlListener.prototype.exitCurrentDatetime = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#cast.
SparkSqlListener.prototype.enterCast = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#cast.
SparkSqlListener.prototype.exitCast = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#constantDefault.
SparkSqlListener.prototype.enterConstantDefault = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#constantDefault.
SparkSqlListener.prototype.exitConstantDefault = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#lambda.
SparkSqlListener.prototype.enterLambda = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#lambda.
SparkSqlListener.prototype.exitLambda = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#parenthesizedExpression.
SparkSqlListener.prototype.enterParenthesizedExpression = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#parenthesizedExpression.
SparkSqlListener.prototype.exitParenthesizedExpression = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#extract.
SparkSqlListener.prototype.enterExtract = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#extract.
SparkSqlListener.prototype.exitExtract = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#trim.
SparkSqlListener.prototype.enterTrim = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#trim.
SparkSqlListener.prototype.exitTrim = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#functionCall.
SparkSqlListener.prototype.enterFunctionCall = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#functionCall.
SparkSqlListener.prototype.exitFunctionCall = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#searchedCase.
SparkSqlListener.prototype.enterSearchedCase = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#searchedCase.
SparkSqlListener.prototype.exitSearchedCase = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#position.
SparkSqlListener.prototype.enterPosition = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#position.
SparkSqlListener.prototype.exitPosition = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#first.
SparkSqlListener.prototype.enterFirst = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#first.
SparkSqlListener.prototype.exitFirst = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#nullLiteral.
SparkSqlListener.prototype.enterNullLiteral = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#nullLiteral.
SparkSqlListener.prototype.exitNullLiteral = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#intervalLiteral.
SparkSqlListener.prototype.enterIntervalLiteral = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#intervalLiteral.
SparkSqlListener.prototype.exitIntervalLiteral = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#typeConstructor.
SparkSqlListener.prototype.enterTypeConstructor = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#typeConstructor.
SparkSqlListener.prototype.exitTypeConstructor = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#numericLiteral.
SparkSqlListener.prototype.enterNumericLiteral = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#numericLiteral.
SparkSqlListener.prototype.exitNumericLiteral = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#booleanLiteral.
SparkSqlListener.prototype.enterBooleanLiteral = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#booleanLiteral.
SparkSqlListener.prototype.exitBooleanLiteral = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#stringLiteral.
SparkSqlListener.prototype.enterStringLiteral = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#stringLiteral.
SparkSqlListener.prototype.exitStringLiteral = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#comparisonOperator.
SparkSqlListener.prototype.enterComparisonOperator = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#comparisonOperator.
SparkSqlListener.prototype.exitComparisonOperator = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#arithmeticOperator.
SparkSqlListener.prototype.enterArithmeticOperator = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#arithmeticOperator.
SparkSqlListener.prototype.exitArithmeticOperator = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#predicateOperator.
SparkSqlListener.prototype.enterPredicateOperator = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#predicateOperator.
SparkSqlListener.prototype.exitPredicateOperator = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#booleanValue.
SparkSqlListener.prototype.enterBooleanValue = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#booleanValue.
SparkSqlListener.prototype.exitBooleanValue = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#interval.
SparkSqlListener.prototype.enterInterval = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#interval.
SparkSqlListener.prototype.exitInterval = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#errorCapturingMultiUnitsInterval.
SparkSqlListener.prototype.enterErrorCapturingMultiUnitsInterval = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#errorCapturingMultiUnitsInterval.
SparkSqlListener.prototype.exitErrorCapturingMultiUnitsInterval = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#multiUnitsInterval.
SparkSqlListener.prototype.enterMultiUnitsInterval = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#multiUnitsInterval.
SparkSqlListener.prototype.exitMultiUnitsInterval = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#errorCapturingUnitToUnitInterval.
SparkSqlListener.prototype.enterErrorCapturingUnitToUnitInterval = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#errorCapturingUnitToUnitInterval.
SparkSqlListener.prototype.exitErrorCapturingUnitToUnitInterval = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#unitToUnitInterval.
SparkSqlListener.prototype.enterUnitToUnitInterval = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#unitToUnitInterval.
SparkSqlListener.prototype.exitUnitToUnitInterval = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#intervalValue.
SparkSqlListener.prototype.enterIntervalValue = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#intervalValue.
SparkSqlListener.prototype.exitIntervalValue = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#colPosition.
SparkSqlListener.prototype.enterColPosition = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#colPosition.
SparkSqlListener.prototype.exitColPosition = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#complexDataType.
SparkSqlListener.prototype.enterComplexDataType = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#complexDataType.
SparkSqlListener.prototype.exitComplexDataType = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#primitiveDataType.
SparkSqlListener.prototype.enterPrimitiveDataType = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#primitiveDataType.
SparkSqlListener.prototype.exitPrimitiveDataType = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#qualifiedColTypeWithPositionList.
SparkSqlListener.prototype.enterQualifiedColTypeWithPositionList = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#qualifiedColTypeWithPositionList.
SparkSqlListener.prototype.exitQualifiedColTypeWithPositionList = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#qualifiedColTypeWithPosition.
SparkSqlListener.prototype.enterQualifiedColTypeWithPosition = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#qualifiedColTypeWithPosition.
SparkSqlListener.prototype.exitQualifiedColTypeWithPosition = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#colTypeList.
SparkSqlListener.prototype.enterColTypeList = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#colTypeList.
SparkSqlListener.prototype.exitColTypeList = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#colType.
SparkSqlListener.prototype.enterColType = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#colType.
SparkSqlListener.prototype.exitColType = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#complexColTypeList.
SparkSqlListener.prototype.enterComplexColTypeList = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#complexColTypeList.
SparkSqlListener.prototype.exitComplexColTypeList = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#complexColType.
SparkSqlListener.prototype.enterComplexColType = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#complexColType.
SparkSqlListener.prototype.exitComplexColType = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#whenClause.
SparkSqlListener.prototype.enterWhenClause = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#whenClause.
SparkSqlListener.prototype.exitWhenClause = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#windowClause.
SparkSqlListener.prototype.enterWindowClause = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#windowClause.
SparkSqlListener.prototype.exitWindowClause = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#namedWindow.
SparkSqlListener.prototype.enterNamedWindow = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#namedWindow.
SparkSqlListener.prototype.exitNamedWindow = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#windowRef.
SparkSqlListener.prototype.enterWindowRef = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#windowRef.
SparkSqlListener.prototype.exitWindowRef = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#windowDef.
SparkSqlListener.prototype.enterWindowDef = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#windowDef.
SparkSqlListener.prototype.exitWindowDef = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#windowFrame.
SparkSqlListener.prototype.enterWindowFrame = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#windowFrame.
SparkSqlListener.prototype.exitWindowFrame = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#frameBound.
SparkSqlListener.prototype.enterFrameBound = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#frameBound.
SparkSqlListener.prototype.exitFrameBound = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#qualifiedNameList.
SparkSqlListener.prototype.enterQualifiedNameList = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#qualifiedNameList.
SparkSqlListener.prototype.exitQualifiedNameList = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#functionName.
SparkSqlListener.prototype.enterFunctionName = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#functionName.
SparkSqlListener.prototype.exitFunctionName = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#qualifiedName.
SparkSqlListener.prototype.enterQualifiedName = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#qualifiedName.
SparkSqlListener.prototype.exitQualifiedName = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#errorCapturingIdentifier.
SparkSqlListener.prototype.enterErrorCapturingIdentifier = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#errorCapturingIdentifier.
SparkSqlListener.prototype.exitErrorCapturingIdentifier = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#errorIdent.
SparkSqlListener.prototype.enterErrorIdent = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#errorIdent.
SparkSqlListener.prototype.exitErrorIdent = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#realIdent.
SparkSqlListener.prototype.enterRealIdent = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#realIdent.
SparkSqlListener.prototype.exitRealIdent = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#identifier.
SparkSqlListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#identifier.
SparkSqlListener.prototype.exitIdentifier = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#unquotedIdentifier.
SparkSqlListener.prototype.enterUnquotedIdentifier = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#unquotedIdentifier.
SparkSqlListener.prototype.exitUnquotedIdentifier = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#quotedIdentifierAlternative.
SparkSqlListener.prototype.enterQuotedIdentifierAlternative = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#quotedIdentifierAlternative.
SparkSqlListener.prototype.exitQuotedIdentifierAlternative = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#quotedIdentifier.
SparkSqlListener.prototype.enterQuotedIdentifier = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#quotedIdentifier.
SparkSqlListener.prototype.exitQuotedIdentifier = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#exponentLiteral.
SparkSqlListener.prototype.enterExponentLiteral = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#exponentLiteral.
SparkSqlListener.prototype.exitExponentLiteral = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#decimalLiteral.
SparkSqlListener.prototype.enterDecimalLiteral = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#decimalLiteral.
SparkSqlListener.prototype.exitDecimalLiteral = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#legacyDecimalLiteral.
SparkSqlListener.prototype.enterLegacyDecimalLiteral = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#legacyDecimalLiteral.
SparkSqlListener.prototype.exitLegacyDecimalLiteral = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#integerLiteral.
SparkSqlListener.prototype.enterIntegerLiteral = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#integerLiteral.
SparkSqlListener.prototype.exitIntegerLiteral = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#bigIntLiteral.
SparkSqlListener.prototype.enterBigIntLiteral = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#bigIntLiteral.
SparkSqlListener.prototype.exitBigIntLiteral = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#smallIntLiteral.
SparkSqlListener.prototype.enterSmallIntLiteral = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#smallIntLiteral.
SparkSqlListener.prototype.exitSmallIntLiteral = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#tinyIntLiteral.
SparkSqlListener.prototype.enterTinyIntLiteral = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#tinyIntLiteral.
SparkSqlListener.prototype.exitTinyIntLiteral = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#doubleLiteral.
SparkSqlListener.prototype.enterDoubleLiteral = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#doubleLiteral.
SparkSqlListener.prototype.exitDoubleLiteral = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#floatLiteral.
SparkSqlListener.prototype.enterFloatLiteral = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#floatLiteral.
SparkSqlListener.prototype.exitFloatLiteral = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#bigDecimalLiteral.
SparkSqlListener.prototype.enterBigDecimalLiteral = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#bigDecimalLiteral.
SparkSqlListener.prototype.exitBigDecimalLiteral = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#alterColumnAction.
SparkSqlListener.prototype.enterAlterColumnAction = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#alterColumnAction.
SparkSqlListener.prototype.exitAlterColumnAction = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#ansiNonReserved.
SparkSqlListener.prototype.enterAnsiNonReserved = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#ansiNonReserved.
SparkSqlListener.prototype.exitAnsiNonReserved = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#strictNonReserved.
SparkSqlListener.prototype.enterStrictNonReserved = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#strictNonReserved.
SparkSqlListener.prototype.exitStrictNonReserved = function(ctx) {
};


// Enter a parse tree produced by SparkSqlParser#nonReserved.
SparkSqlListener.prototype.enterNonReserved = function(ctx) {
};

// Exit a parse tree produced by SparkSqlParser#nonReserved.
SparkSqlListener.prototype.exitNonReserved = function(ctx) {
};



exports.SparkSqlListener = SparkSqlListener;