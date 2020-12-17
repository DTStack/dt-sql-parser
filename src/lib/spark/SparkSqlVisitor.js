// Generated from /Users/jinjiongxi/workspace/dt-sql-parser/src/grammar/spark/SparkSql.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by SparkSqlParser.

function SparkSqlVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

SparkSqlVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
SparkSqlVisitor.prototype.constructor = SparkSqlVisitor;

// Visit a parse tree produced by SparkSqlParser#program.
SparkSqlVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#singleStatement.
SparkSqlVisitor.prototype.visitSingleStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#emptyStatement.
SparkSqlVisitor.prototype.visitEmptyStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#singleExpression.
SparkSqlVisitor.prototype.visitSingleExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#singleTableIdentifier.
SparkSqlVisitor.prototype.visitSingleTableIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#singleMultipartIdentifier.
SparkSqlVisitor.prototype.visitSingleMultipartIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#singleDataType.
SparkSqlVisitor.prototype.visitSingleDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#singleTableSchema.
SparkSqlVisitor.prototype.visitSingleTableSchema = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#statementDefault.
SparkSqlVisitor.prototype.visitStatementDefault = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#dmlStatement.
SparkSqlVisitor.prototype.visitDmlStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#use.
SparkSqlVisitor.prototype.visitUse = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#createNamespace.
SparkSqlVisitor.prototype.visitCreateNamespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#setNamespaceProperties.
SparkSqlVisitor.prototype.visitSetNamespaceProperties = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#setNamespaceLocation.
SparkSqlVisitor.prototype.visitSetNamespaceLocation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#dropNamespace.
SparkSqlVisitor.prototype.visitDropNamespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#showNamespaces.
SparkSqlVisitor.prototype.visitShowNamespaces = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#createTable.
SparkSqlVisitor.prototype.visitCreateTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#createHiveTable.
SparkSqlVisitor.prototype.visitCreateHiveTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#createTableLike.
SparkSqlVisitor.prototype.visitCreateTableLike = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#replaceTable.
SparkSqlVisitor.prototype.visitReplaceTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#analyze.
SparkSqlVisitor.prototype.visitAnalyze = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#addTableColumns.
SparkSqlVisitor.prototype.visitAddTableColumns = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#renameTableColumn.
SparkSqlVisitor.prototype.visitRenameTableColumn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#dropTableColumns.
SparkSqlVisitor.prototype.visitDropTableColumns = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#renameTable.
SparkSqlVisitor.prototype.visitRenameTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#setTableProperties.
SparkSqlVisitor.prototype.visitSetTableProperties = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#unsetTableProperties.
SparkSqlVisitor.prototype.visitUnsetTableProperties = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#alterTableAlterColumn.
SparkSqlVisitor.prototype.visitAlterTableAlterColumn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#hiveChangeColumn.
SparkSqlVisitor.prototype.visitHiveChangeColumn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#hiveReplaceColumns.
SparkSqlVisitor.prototype.visitHiveReplaceColumns = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#setTableSerDe.
SparkSqlVisitor.prototype.visitSetTableSerDe = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#addTablePartition.
SparkSqlVisitor.prototype.visitAddTablePartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#renameTablePartition.
SparkSqlVisitor.prototype.visitRenameTablePartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#dropTablePartitions.
SparkSqlVisitor.prototype.visitDropTablePartitions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#setTableLocation.
SparkSqlVisitor.prototype.visitSetTableLocation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#recoverPartitions.
SparkSqlVisitor.prototype.visitRecoverPartitions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#dropTable.
SparkSqlVisitor.prototype.visitDropTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#dropView.
SparkSqlVisitor.prototype.visitDropView = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#createView.
SparkSqlVisitor.prototype.visitCreateView = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#createTempViewUsing.
SparkSqlVisitor.prototype.visitCreateTempViewUsing = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#alterViewQuery.
SparkSqlVisitor.prototype.visitAlterViewQuery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#createFunction.
SparkSqlVisitor.prototype.visitCreateFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#dropFunction.
SparkSqlVisitor.prototype.visitDropFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#explain.
SparkSqlVisitor.prototype.visitExplain = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#showTables.
SparkSqlVisitor.prototype.visitShowTables = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#showTable.
SparkSqlVisitor.prototype.visitShowTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#showTblProperties.
SparkSqlVisitor.prototype.visitShowTblProperties = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#showColumns.
SparkSqlVisitor.prototype.visitShowColumns = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#showViews.
SparkSqlVisitor.prototype.visitShowViews = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#showPartitions.
SparkSqlVisitor.prototype.visitShowPartitions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#showFunctions.
SparkSqlVisitor.prototype.visitShowFunctions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#showCreateTable.
SparkSqlVisitor.prototype.visitShowCreateTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#showCurrentNamespace.
SparkSqlVisitor.prototype.visitShowCurrentNamespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#describeFunction.
SparkSqlVisitor.prototype.visitDescribeFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#describeNamespace.
SparkSqlVisitor.prototype.visitDescribeNamespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#describeRelation.
SparkSqlVisitor.prototype.visitDescribeRelation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#describeQuery.
SparkSqlVisitor.prototype.visitDescribeQuery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#commentNamespace.
SparkSqlVisitor.prototype.visitCommentNamespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#commentTable.
SparkSqlVisitor.prototype.visitCommentTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#refreshTable.
SparkSqlVisitor.prototype.visitRefreshTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#refreshFunction.
SparkSqlVisitor.prototype.visitRefreshFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#refreshResource.
SparkSqlVisitor.prototype.visitRefreshResource = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#cacheTable.
SparkSqlVisitor.prototype.visitCacheTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#uncacheTable.
SparkSqlVisitor.prototype.visitUncacheTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#clearCache.
SparkSqlVisitor.prototype.visitClearCache = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#loadData.
SparkSqlVisitor.prototype.visitLoadData = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#truncateTable.
SparkSqlVisitor.prototype.visitTruncateTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#repairTable.
SparkSqlVisitor.prototype.visitRepairTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#manageResource.
SparkSqlVisitor.prototype.visitManageResource = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#failNativeCommand.
SparkSqlVisitor.prototype.visitFailNativeCommand = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#setTimeZone.
SparkSqlVisitor.prototype.visitSetTimeZone = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#setQuotedConfiguration.
SparkSqlVisitor.prototype.visitSetQuotedConfiguration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#setConfiguration.
SparkSqlVisitor.prototype.visitSetConfiguration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#resetQuotedConfiguration.
SparkSqlVisitor.prototype.visitResetQuotedConfiguration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#resetConfiguration.
SparkSqlVisitor.prototype.visitResetConfiguration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#configKey.
SparkSqlVisitor.prototype.visitConfigKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#unsupportedHiveNativeCommands.
SparkSqlVisitor.prototype.visitUnsupportedHiveNativeCommands = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#createTableHeader.
SparkSqlVisitor.prototype.visitCreateTableHeader = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#replaceTableHeader.
SparkSqlVisitor.prototype.visitReplaceTableHeader = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#bucketSpec.
SparkSqlVisitor.prototype.visitBucketSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#skewSpec.
SparkSqlVisitor.prototype.visitSkewSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#locationSpec.
SparkSqlVisitor.prototype.visitLocationSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#commentSpec.
SparkSqlVisitor.prototype.visitCommentSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#query.
SparkSqlVisitor.prototype.visitQuery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#insertOverwriteTable.
SparkSqlVisitor.prototype.visitInsertOverwriteTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#insertIntoTable.
SparkSqlVisitor.prototype.visitInsertIntoTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#insertOverwriteHiveDir.
SparkSqlVisitor.prototype.visitInsertOverwriteHiveDir = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#insertOverwriteDir.
SparkSqlVisitor.prototype.visitInsertOverwriteDir = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#partitionSpecLocation.
SparkSqlVisitor.prototype.visitPartitionSpecLocation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#partitionSpec.
SparkSqlVisitor.prototype.visitPartitionSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#partitionVal.
SparkSqlVisitor.prototype.visitPartitionVal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#namespace.
SparkSqlVisitor.prototype.visitNamespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#describeFuncName.
SparkSqlVisitor.prototype.visitDescribeFuncName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#describeColName.
SparkSqlVisitor.prototype.visitDescribeColName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#ctes.
SparkSqlVisitor.prototype.visitCtes = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#namedQuery.
SparkSqlVisitor.prototype.visitNamedQuery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#tableProvider.
SparkSqlVisitor.prototype.visitTableProvider = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#createTableClauses.
SparkSqlVisitor.prototype.visitCreateTableClauses = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#tablePropertyList.
SparkSqlVisitor.prototype.visitTablePropertyList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#tableProperty.
SparkSqlVisitor.prototype.visitTableProperty = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#tablePropertyKey.
SparkSqlVisitor.prototype.visitTablePropertyKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#tablePropertyValue.
SparkSqlVisitor.prototype.visitTablePropertyValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#constantList.
SparkSqlVisitor.prototype.visitConstantList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#nestedConstantList.
SparkSqlVisitor.prototype.visitNestedConstantList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#createFileFormat.
SparkSqlVisitor.prototype.visitCreateFileFormat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#tableFileFormat.
SparkSqlVisitor.prototype.visitTableFileFormat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#genericFileFormat.
SparkSqlVisitor.prototype.visitGenericFileFormat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#storageHandler.
SparkSqlVisitor.prototype.visitStorageHandler = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#resource.
SparkSqlVisitor.prototype.visitResource = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#singleInsertQuery.
SparkSqlVisitor.prototype.visitSingleInsertQuery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#multiInsertQuery.
SparkSqlVisitor.prototype.visitMultiInsertQuery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#deleteFromTable.
SparkSqlVisitor.prototype.visitDeleteFromTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#updateTable.
SparkSqlVisitor.prototype.visitUpdateTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#mergeIntoTable.
SparkSqlVisitor.prototype.visitMergeIntoTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#queryOrganization.
SparkSqlVisitor.prototype.visitQueryOrganization = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#multiInsertQueryBody.
SparkSqlVisitor.prototype.visitMultiInsertQueryBody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#queryTermDefault.
SparkSqlVisitor.prototype.visitQueryTermDefault = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#setOperation.
SparkSqlVisitor.prototype.visitSetOperation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#queryPrimaryDefault.
SparkSqlVisitor.prototype.visitQueryPrimaryDefault = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#fromStmt.
SparkSqlVisitor.prototype.visitFromStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#table.
SparkSqlVisitor.prototype.visitTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#inlineTableDefault1.
SparkSqlVisitor.prototype.visitInlineTableDefault1 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#subquery.
SparkSqlVisitor.prototype.visitSubquery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#sortItem.
SparkSqlVisitor.prototype.visitSortItem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#fromStatement.
SparkSqlVisitor.prototype.visitFromStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#fromStatementBody.
SparkSqlVisitor.prototype.visitFromStatementBody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#transformQuerySpecification.
SparkSqlVisitor.prototype.visitTransformQuerySpecification = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#regularQuerySpecification.
SparkSqlVisitor.prototype.visitRegularQuerySpecification = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#transformClause.
SparkSqlVisitor.prototype.visitTransformClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#selectClause.
SparkSqlVisitor.prototype.visitSelectClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#setClause.
SparkSqlVisitor.prototype.visitSetClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#matchedClause.
SparkSqlVisitor.prototype.visitMatchedClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#notMatchedClause.
SparkSqlVisitor.prototype.visitNotMatchedClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#matchedAction.
SparkSqlVisitor.prototype.visitMatchedAction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#notMatchedAction.
SparkSqlVisitor.prototype.visitNotMatchedAction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#assignmentList.
SparkSqlVisitor.prototype.visitAssignmentList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#assignment.
SparkSqlVisitor.prototype.visitAssignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#whereClause.
SparkSqlVisitor.prototype.visitWhereClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#havingClause.
SparkSqlVisitor.prototype.visitHavingClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#hint.
SparkSqlVisitor.prototype.visitHint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#hintStatement.
SparkSqlVisitor.prototype.visitHintStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#fromClause.
SparkSqlVisitor.prototype.visitFromClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#aggregationClause.
SparkSqlVisitor.prototype.visitAggregationClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#groupingSet.
SparkSqlVisitor.prototype.visitGroupingSet = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#pivotClause.
SparkSqlVisitor.prototype.visitPivotClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#pivotColumn.
SparkSqlVisitor.prototype.visitPivotColumn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#pivotValue.
SparkSqlVisitor.prototype.visitPivotValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#lateralView.
SparkSqlVisitor.prototype.visitLateralView = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#setQuantifier.
SparkSqlVisitor.prototype.visitSetQuantifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#relation.
SparkSqlVisitor.prototype.visitRelation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#joinRelation.
SparkSqlVisitor.prototype.visitJoinRelation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#joinType.
SparkSqlVisitor.prototype.visitJoinType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#joinCriteria.
SparkSqlVisitor.prototype.visitJoinCriteria = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#sample.
SparkSqlVisitor.prototype.visitSample = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#sampleByPercentile.
SparkSqlVisitor.prototype.visitSampleByPercentile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#sampleByRows.
SparkSqlVisitor.prototype.visitSampleByRows = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#sampleByBucket.
SparkSqlVisitor.prototype.visitSampleByBucket = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#sampleByBytes.
SparkSqlVisitor.prototype.visitSampleByBytes = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#identifierList.
SparkSqlVisitor.prototype.visitIdentifierList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#identifierSeq.
SparkSqlVisitor.prototype.visitIdentifierSeq = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#orderedIdentifierList.
SparkSqlVisitor.prototype.visitOrderedIdentifierList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#orderedIdentifier.
SparkSqlVisitor.prototype.visitOrderedIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#identifierCommentList.
SparkSqlVisitor.prototype.visitIdentifierCommentList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#identifierComment.
SparkSqlVisitor.prototype.visitIdentifierComment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#tableName.
SparkSqlVisitor.prototype.visitTableName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#aliasedQuery.
SparkSqlVisitor.prototype.visitAliasedQuery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#aliasedRelation.
SparkSqlVisitor.prototype.visitAliasedRelation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#inlineTableDefault2.
SparkSqlVisitor.prototype.visitInlineTableDefault2 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#tableValuedFunction.
SparkSqlVisitor.prototype.visitTableValuedFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#inlineTable.
SparkSqlVisitor.prototype.visitInlineTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#functionTable.
SparkSqlVisitor.prototype.visitFunctionTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#tableAlias.
SparkSqlVisitor.prototype.visitTableAlias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#rowFormatSerde.
SparkSqlVisitor.prototype.visitRowFormatSerde = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#rowFormatDelimited.
SparkSqlVisitor.prototype.visitRowFormatDelimited = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#multipartIdentifierList.
SparkSqlVisitor.prototype.visitMultipartIdentifierList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#multipartIdentifier.
SparkSqlVisitor.prototype.visitMultipartIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#tableIdentifier.
SparkSqlVisitor.prototype.visitTableIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#namedExpression.
SparkSqlVisitor.prototype.visitNamedExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#namedExpressionSeq.
SparkSqlVisitor.prototype.visitNamedExpressionSeq = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#transformList.
SparkSqlVisitor.prototype.visitTransformList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#identityTransform.
SparkSqlVisitor.prototype.visitIdentityTransform = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#applyTransform.
SparkSqlVisitor.prototype.visitApplyTransform = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#transformArgument.
SparkSqlVisitor.prototype.visitTransformArgument = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#expression.
SparkSqlVisitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#logicalNot.
SparkSqlVisitor.prototype.visitLogicalNot = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#predicated.
SparkSqlVisitor.prototype.visitPredicated = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#exists.
SparkSqlVisitor.prototype.visitExists = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#logicalBinary.
SparkSqlVisitor.prototype.visitLogicalBinary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#predicate.
SparkSqlVisitor.prototype.visitPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#valueExpressionDefault.
SparkSqlVisitor.prototype.visitValueExpressionDefault = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#comparison.
SparkSqlVisitor.prototype.visitComparison = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#arithmeticBinary.
SparkSqlVisitor.prototype.visitArithmeticBinary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#arithmeticUnary.
SparkSqlVisitor.prototype.visitArithmeticUnary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#struct.
SparkSqlVisitor.prototype.visitStruct = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#dereference.
SparkSqlVisitor.prototype.visitDereference = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#simpleCase.
SparkSqlVisitor.prototype.visitSimpleCase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#columnReference.
SparkSqlVisitor.prototype.visitColumnReference = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#rowConstructor.
SparkSqlVisitor.prototype.visitRowConstructor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#last.
SparkSqlVisitor.prototype.visitLast = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#star.
SparkSqlVisitor.prototype.visitStar = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#overlay.
SparkSqlVisitor.prototype.visitOverlay = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#subscript.
SparkSqlVisitor.prototype.visitSubscript = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#subqueryExpression.
SparkSqlVisitor.prototype.visitSubqueryExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#substring.
SparkSqlVisitor.prototype.visitSubstring = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#currentDatetime.
SparkSqlVisitor.prototype.visitCurrentDatetime = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#cast.
SparkSqlVisitor.prototype.visitCast = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#constantDefault.
SparkSqlVisitor.prototype.visitConstantDefault = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#lambda.
SparkSqlVisitor.prototype.visitLambda = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#parenthesizedExpression.
SparkSqlVisitor.prototype.visitParenthesizedExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#extract.
SparkSqlVisitor.prototype.visitExtract = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#trim.
SparkSqlVisitor.prototype.visitTrim = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#functionCall.
SparkSqlVisitor.prototype.visitFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#searchedCase.
SparkSqlVisitor.prototype.visitSearchedCase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#position.
SparkSqlVisitor.prototype.visitPosition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#first.
SparkSqlVisitor.prototype.visitFirst = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#nullLiteral.
SparkSqlVisitor.prototype.visitNullLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#intervalLiteral.
SparkSqlVisitor.prototype.visitIntervalLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#typeConstructor.
SparkSqlVisitor.prototype.visitTypeConstructor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#numericLiteral.
SparkSqlVisitor.prototype.visitNumericLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#booleanLiteral.
SparkSqlVisitor.prototype.visitBooleanLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#stringLiteral.
SparkSqlVisitor.prototype.visitStringLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#comparisonOperator.
SparkSqlVisitor.prototype.visitComparisonOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#arithmeticOperator.
SparkSqlVisitor.prototype.visitArithmeticOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#predicateOperator.
SparkSqlVisitor.prototype.visitPredicateOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#booleanValue.
SparkSqlVisitor.prototype.visitBooleanValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#interval.
SparkSqlVisitor.prototype.visitInterval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#errorCapturingMultiUnitsInterval.
SparkSqlVisitor.prototype.visitErrorCapturingMultiUnitsInterval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#multiUnitsInterval.
SparkSqlVisitor.prototype.visitMultiUnitsInterval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#errorCapturingUnitToUnitInterval.
SparkSqlVisitor.prototype.visitErrorCapturingUnitToUnitInterval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#unitToUnitInterval.
SparkSqlVisitor.prototype.visitUnitToUnitInterval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#intervalValue.
SparkSqlVisitor.prototype.visitIntervalValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#colPosition.
SparkSqlVisitor.prototype.visitColPosition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#complexDataType.
SparkSqlVisitor.prototype.visitComplexDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#primitiveDataType.
SparkSqlVisitor.prototype.visitPrimitiveDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#qualifiedColTypeWithPositionList.
SparkSqlVisitor.prototype.visitQualifiedColTypeWithPositionList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#qualifiedColTypeWithPosition.
SparkSqlVisitor.prototype.visitQualifiedColTypeWithPosition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#colTypeList.
SparkSqlVisitor.prototype.visitColTypeList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#colType.
SparkSqlVisitor.prototype.visitColType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#complexColTypeList.
SparkSqlVisitor.prototype.visitComplexColTypeList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#complexColType.
SparkSqlVisitor.prototype.visitComplexColType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#whenClause.
SparkSqlVisitor.prototype.visitWhenClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#windowClause.
SparkSqlVisitor.prototype.visitWindowClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#namedWindow.
SparkSqlVisitor.prototype.visitNamedWindow = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#windowRef.
SparkSqlVisitor.prototype.visitWindowRef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#windowDef.
SparkSqlVisitor.prototype.visitWindowDef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#windowFrame.
SparkSqlVisitor.prototype.visitWindowFrame = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#frameBound.
SparkSqlVisitor.prototype.visitFrameBound = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#qualifiedNameList.
SparkSqlVisitor.prototype.visitQualifiedNameList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#functionName.
SparkSqlVisitor.prototype.visitFunctionName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#qualifiedName.
SparkSqlVisitor.prototype.visitQualifiedName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#errorCapturingIdentifier.
SparkSqlVisitor.prototype.visitErrorCapturingIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#errorIdent.
SparkSqlVisitor.prototype.visitErrorIdent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#realIdent.
SparkSqlVisitor.prototype.visitRealIdent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#identifier.
SparkSqlVisitor.prototype.visitIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#unquotedIdentifier.
SparkSqlVisitor.prototype.visitUnquotedIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#quotedIdentifierAlternative.
SparkSqlVisitor.prototype.visitQuotedIdentifierAlternative = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#quotedIdentifier.
SparkSqlVisitor.prototype.visitQuotedIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#exponentLiteral.
SparkSqlVisitor.prototype.visitExponentLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#decimalLiteral.
SparkSqlVisitor.prototype.visitDecimalLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#legacyDecimalLiteral.
SparkSqlVisitor.prototype.visitLegacyDecimalLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#integerLiteral.
SparkSqlVisitor.prototype.visitIntegerLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#bigIntLiteral.
SparkSqlVisitor.prototype.visitBigIntLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#smallIntLiteral.
SparkSqlVisitor.prototype.visitSmallIntLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#tinyIntLiteral.
SparkSqlVisitor.prototype.visitTinyIntLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#doubleLiteral.
SparkSqlVisitor.prototype.visitDoubleLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#floatLiteral.
SparkSqlVisitor.prototype.visitFloatLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#bigDecimalLiteral.
SparkSqlVisitor.prototype.visitBigDecimalLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#alterColumnAction.
SparkSqlVisitor.prototype.visitAlterColumnAction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#ansiNonReserved.
SparkSqlVisitor.prototype.visitAnsiNonReserved = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#strictNonReserved.
SparkSqlVisitor.prototype.visitStrictNonReserved = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SparkSqlParser#nonReserved.
SparkSqlVisitor.prototype.visitNonReserved = function(ctx) {
  return this.visitChildren(ctx);
};



exports.SparkSqlVisitor = SparkSqlVisitor;