// Generated from /Users/jinjiongxi/workspace/dt-sql-parser/src/grammar/spark/SqlBase.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by SqlBaseParser.

function SqlBaseVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

SqlBaseVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
SqlBaseVisitor.prototype.constructor = SqlBaseVisitor;

// Visit a parse tree produced by SqlBaseParser#program.
SqlBaseVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#singleStatement.
SqlBaseVisitor.prototype.visitSingleStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#singleExpression.
SqlBaseVisitor.prototype.visitSingleExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#singleTableIdentifier.
SqlBaseVisitor.prototype.visitSingleTableIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#singleMultipartIdentifier.
SqlBaseVisitor.prototype.visitSingleMultipartIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#singleDataType.
SqlBaseVisitor.prototype.visitSingleDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#singleTableSchema.
SqlBaseVisitor.prototype.visitSingleTableSchema = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#statementDefault.
SqlBaseVisitor.prototype.visitStatementDefault = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#dmlStatement.
SqlBaseVisitor.prototype.visitDmlStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#use.
SqlBaseVisitor.prototype.visitUse = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#createNamespace.
SqlBaseVisitor.prototype.visitCreateNamespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#setNamespaceProperties.
SqlBaseVisitor.prototype.visitSetNamespaceProperties = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#setNamespaceLocation.
SqlBaseVisitor.prototype.visitSetNamespaceLocation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#dropNamespace.
SqlBaseVisitor.prototype.visitDropNamespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#showNamespaces.
SqlBaseVisitor.prototype.visitShowNamespaces = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#createTable.
SqlBaseVisitor.prototype.visitCreateTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#createHiveTable.
SqlBaseVisitor.prototype.visitCreateHiveTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#createTableLike.
SqlBaseVisitor.prototype.visitCreateTableLike = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#replaceTable.
SqlBaseVisitor.prototype.visitReplaceTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#analyze.
SqlBaseVisitor.prototype.visitAnalyze = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#addTableColumns.
SqlBaseVisitor.prototype.visitAddTableColumns = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#renameTableColumn.
SqlBaseVisitor.prototype.visitRenameTableColumn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#dropTableColumns.
SqlBaseVisitor.prototype.visitDropTableColumns = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#renameTable.
SqlBaseVisitor.prototype.visitRenameTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#setTableProperties.
SqlBaseVisitor.prototype.visitSetTableProperties = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#unsetTableProperties.
SqlBaseVisitor.prototype.visitUnsetTableProperties = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#alterTableAlterColumn.
SqlBaseVisitor.prototype.visitAlterTableAlterColumn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#hiveChangeColumn.
SqlBaseVisitor.prototype.visitHiveChangeColumn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#hiveReplaceColumns.
SqlBaseVisitor.prototype.visitHiveReplaceColumns = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#setTableSerDe.
SqlBaseVisitor.prototype.visitSetTableSerDe = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#addTablePartition.
SqlBaseVisitor.prototype.visitAddTablePartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#renameTablePartition.
SqlBaseVisitor.prototype.visitRenameTablePartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#dropTablePartitions.
SqlBaseVisitor.prototype.visitDropTablePartitions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#setTableLocation.
SqlBaseVisitor.prototype.visitSetTableLocation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#recoverPartitions.
SqlBaseVisitor.prototype.visitRecoverPartitions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#dropTable.
SqlBaseVisitor.prototype.visitDropTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#dropView.
SqlBaseVisitor.prototype.visitDropView = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#createView.
SqlBaseVisitor.prototype.visitCreateView = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#createTempViewUsing.
SqlBaseVisitor.prototype.visitCreateTempViewUsing = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#alterViewQuery.
SqlBaseVisitor.prototype.visitAlterViewQuery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#createFunction.
SqlBaseVisitor.prototype.visitCreateFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#dropFunction.
SqlBaseVisitor.prototype.visitDropFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#explain.
SqlBaseVisitor.prototype.visitExplain = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#showTables.
SqlBaseVisitor.prototype.visitShowTables = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#showTable.
SqlBaseVisitor.prototype.visitShowTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#showTblProperties.
SqlBaseVisitor.prototype.visitShowTblProperties = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#showColumns.
SqlBaseVisitor.prototype.visitShowColumns = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#showViews.
SqlBaseVisitor.prototype.visitShowViews = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#showPartitions.
SqlBaseVisitor.prototype.visitShowPartitions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#showFunctions.
SqlBaseVisitor.prototype.visitShowFunctions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#showCreateTable.
SqlBaseVisitor.prototype.visitShowCreateTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#showCurrentNamespace.
SqlBaseVisitor.prototype.visitShowCurrentNamespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#describeFunction.
SqlBaseVisitor.prototype.visitDescribeFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#describeNamespace.
SqlBaseVisitor.prototype.visitDescribeNamespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#describeRelation.
SqlBaseVisitor.prototype.visitDescribeRelation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#describeQuery.
SqlBaseVisitor.prototype.visitDescribeQuery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#commentNamespace.
SqlBaseVisitor.prototype.visitCommentNamespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#commentTable.
SqlBaseVisitor.prototype.visitCommentTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#refreshTable.
SqlBaseVisitor.prototype.visitRefreshTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#refreshFunction.
SqlBaseVisitor.prototype.visitRefreshFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#refreshResource.
SqlBaseVisitor.prototype.visitRefreshResource = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#cacheTable.
SqlBaseVisitor.prototype.visitCacheTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#uncacheTable.
SqlBaseVisitor.prototype.visitUncacheTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#clearCache.
SqlBaseVisitor.prototype.visitClearCache = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#loadData.
SqlBaseVisitor.prototype.visitLoadData = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#truncateTable.
SqlBaseVisitor.prototype.visitTruncateTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#repairTable.
SqlBaseVisitor.prototype.visitRepairTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#manageResource.
SqlBaseVisitor.prototype.visitManageResource = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#failNativeCommand.
SqlBaseVisitor.prototype.visitFailNativeCommand = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#setTimeZone.
SqlBaseVisitor.prototype.visitSetTimeZone = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#setQuotedConfiguration.
SqlBaseVisitor.prototype.visitSetQuotedConfiguration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#setConfiguration.
SqlBaseVisitor.prototype.visitSetConfiguration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#resetQuotedConfiguration.
SqlBaseVisitor.prototype.visitResetQuotedConfiguration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#resetConfiguration.
SqlBaseVisitor.prototype.visitResetConfiguration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#configKey.
SqlBaseVisitor.prototype.visitConfigKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#unsupportedHiveNativeCommands.
SqlBaseVisitor.prototype.visitUnsupportedHiveNativeCommands = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#createTableHeader.
SqlBaseVisitor.prototype.visitCreateTableHeader = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#replaceTableHeader.
SqlBaseVisitor.prototype.visitReplaceTableHeader = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#bucketSpec.
SqlBaseVisitor.prototype.visitBucketSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#skewSpec.
SqlBaseVisitor.prototype.visitSkewSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#locationSpec.
SqlBaseVisitor.prototype.visitLocationSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#commentSpec.
SqlBaseVisitor.prototype.visitCommentSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#query.
SqlBaseVisitor.prototype.visitQuery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#insertOverwriteTable.
SqlBaseVisitor.prototype.visitInsertOverwriteTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#insertIntoTable.
SqlBaseVisitor.prototype.visitInsertIntoTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#insertOverwriteHiveDir.
SqlBaseVisitor.prototype.visitInsertOverwriteHiveDir = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#insertOverwriteDir.
SqlBaseVisitor.prototype.visitInsertOverwriteDir = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#partitionSpecLocation.
SqlBaseVisitor.prototype.visitPartitionSpecLocation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#partitionSpec.
SqlBaseVisitor.prototype.visitPartitionSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#partitionVal.
SqlBaseVisitor.prototype.visitPartitionVal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#namespace.
SqlBaseVisitor.prototype.visitNamespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#describeFuncName.
SqlBaseVisitor.prototype.visitDescribeFuncName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#describeColName.
SqlBaseVisitor.prototype.visitDescribeColName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#ctes.
SqlBaseVisitor.prototype.visitCtes = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#namedQuery.
SqlBaseVisitor.prototype.visitNamedQuery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#tableProvider.
SqlBaseVisitor.prototype.visitTableProvider = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#createTableClauses.
SqlBaseVisitor.prototype.visitCreateTableClauses = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#tablePropertyList.
SqlBaseVisitor.prototype.visitTablePropertyList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#tableProperty.
SqlBaseVisitor.prototype.visitTableProperty = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#tablePropertyKey.
SqlBaseVisitor.prototype.visitTablePropertyKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#tablePropertyValue.
SqlBaseVisitor.prototype.visitTablePropertyValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#constantList.
SqlBaseVisitor.prototype.visitConstantList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#nestedConstantList.
SqlBaseVisitor.prototype.visitNestedConstantList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#createFileFormat.
SqlBaseVisitor.prototype.visitCreateFileFormat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#tableFileFormat.
SqlBaseVisitor.prototype.visitTableFileFormat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#genericFileFormat.
SqlBaseVisitor.prototype.visitGenericFileFormat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#storageHandler.
SqlBaseVisitor.prototype.visitStorageHandler = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#resource.
SqlBaseVisitor.prototype.visitResource = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#singleInsertQuery.
SqlBaseVisitor.prototype.visitSingleInsertQuery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#multiInsertQuery.
SqlBaseVisitor.prototype.visitMultiInsertQuery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#deleteFromTable.
SqlBaseVisitor.prototype.visitDeleteFromTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#updateTable.
SqlBaseVisitor.prototype.visitUpdateTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#mergeIntoTable.
SqlBaseVisitor.prototype.visitMergeIntoTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#queryOrganization.
SqlBaseVisitor.prototype.visitQueryOrganization = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#multiInsertQueryBody.
SqlBaseVisitor.prototype.visitMultiInsertQueryBody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#queryTermDefault.
SqlBaseVisitor.prototype.visitQueryTermDefault = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#setOperation.
SqlBaseVisitor.prototype.visitSetOperation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#queryPrimaryDefault.
SqlBaseVisitor.prototype.visitQueryPrimaryDefault = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#fromStmt.
SqlBaseVisitor.prototype.visitFromStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#table.
SqlBaseVisitor.prototype.visitTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#inlineTableDefault1.
SqlBaseVisitor.prototype.visitInlineTableDefault1 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#subquery.
SqlBaseVisitor.prototype.visitSubquery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#sortItem.
SqlBaseVisitor.prototype.visitSortItem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#fromStatement.
SqlBaseVisitor.prototype.visitFromStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#fromStatementBody.
SqlBaseVisitor.prototype.visitFromStatementBody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#transformQuerySpecification.
SqlBaseVisitor.prototype.visitTransformQuerySpecification = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#regularQuerySpecification.
SqlBaseVisitor.prototype.visitRegularQuerySpecification = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#transformClause.
SqlBaseVisitor.prototype.visitTransformClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#selectClause.
SqlBaseVisitor.prototype.visitSelectClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#setClause.
SqlBaseVisitor.prototype.visitSetClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#matchedClause.
SqlBaseVisitor.prototype.visitMatchedClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#notMatchedClause.
SqlBaseVisitor.prototype.visitNotMatchedClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#matchedAction.
SqlBaseVisitor.prototype.visitMatchedAction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#notMatchedAction.
SqlBaseVisitor.prototype.visitNotMatchedAction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#assignmentList.
SqlBaseVisitor.prototype.visitAssignmentList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#assignment.
SqlBaseVisitor.prototype.visitAssignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#whereClause.
SqlBaseVisitor.prototype.visitWhereClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#havingClause.
SqlBaseVisitor.prototype.visitHavingClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#hint.
SqlBaseVisitor.prototype.visitHint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#hintStatement.
SqlBaseVisitor.prototype.visitHintStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#fromClause.
SqlBaseVisitor.prototype.visitFromClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#aggregationClause.
SqlBaseVisitor.prototype.visitAggregationClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#groupingSet.
SqlBaseVisitor.prototype.visitGroupingSet = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#pivotClause.
SqlBaseVisitor.prototype.visitPivotClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#pivotColumn.
SqlBaseVisitor.prototype.visitPivotColumn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#pivotValue.
SqlBaseVisitor.prototype.visitPivotValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#lateralView.
SqlBaseVisitor.prototype.visitLateralView = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#setQuantifier.
SqlBaseVisitor.prototype.visitSetQuantifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#relation.
SqlBaseVisitor.prototype.visitRelation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#joinRelation.
SqlBaseVisitor.prototype.visitJoinRelation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#joinType.
SqlBaseVisitor.prototype.visitJoinType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#joinCriteria.
SqlBaseVisitor.prototype.visitJoinCriteria = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#sample.
SqlBaseVisitor.prototype.visitSample = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#sampleByPercentile.
SqlBaseVisitor.prototype.visitSampleByPercentile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#sampleByRows.
SqlBaseVisitor.prototype.visitSampleByRows = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#sampleByBucket.
SqlBaseVisitor.prototype.visitSampleByBucket = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#sampleByBytes.
SqlBaseVisitor.prototype.visitSampleByBytes = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#identifierList.
SqlBaseVisitor.prototype.visitIdentifierList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#identifierSeq.
SqlBaseVisitor.prototype.visitIdentifierSeq = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#orderedIdentifierList.
SqlBaseVisitor.prototype.visitOrderedIdentifierList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#orderedIdentifier.
SqlBaseVisitor.prototype.visitOrderedIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#identifierCommentList.
SqlBaseVisitor.prototype.visitIdentifierCommentList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#identifierComment.
SqlBaseVisitor.prototype.visitIdentifierComment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#tableName.
SqlBaseVisitor.prototype.visitTableName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#aliasedQuery.
SqlBaseVisitor.prototype.visitAliasedQuery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#aliasedRelation.
SqlBaseVisitor.prototype.visitAliasedRelation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#inlineTableDefault2.
SqlBaseVisitor.prototype.visitInlineTableDefault2 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#tableValuedFunction.
SqlBaseVisitor.prototype.visitTableValuedFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#inlineTable.
SqlBaseVisitor.prototype.visitInlineTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#functionTable.
SqlBaseVisitor.prototype.visitFunctionTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#tableAlias.
SqlBaseVisitor.prototype.visitTableAlias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#rowFormatSerde.
SqlBaseVisitor.prototype.visitRowFormatSerde = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#rowFormatDelimited.
SqlBaseVisitor.prototype.visitRowFormatDelimited = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#multipartIdentifierList.
SqlBaseVisitor.prototype.visitMultipartIdentifierList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#multipartIdentifier.
SqlBaseVisitor.prototype.visitMultipartIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#tableIdentifier.
SqlBaseVisitor.prototype.visitTableIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#namedExpression.
SqlBaseVisitor.prototype.visitNamedExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#namedExpressionSeq.
SqlBaseVisitor.prototype.visitNamedExpressionSeq = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#transformList.
SqlBaseVisitor.prototype.visitTransformList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#identityTransform.
SqlBaseVisitor.prototype.visitIdentityTransform = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#applyTransform.
SqlBaseVisitor.prototype.visitApplyTransform = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#transformArgument.
SqlBaseVisitor.prototype.visitTransformArgument = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#expression.
SqlBaseVisitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#logicalNot.
SqlBaseVisitor.prototype.visitLogicalNot = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#predicated.
SqlBaseVisitor.prototype.visitPredicated = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#exists.
SqlBaseVisitor.prototype.visitExists = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#logicalBinary.
SqlBaseVisitor.prototype.visitLogicalBinary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#predicate.
SqlBaseVisitor.prototype.visitPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#valueExpressionDefault.
SqlBaseVisitor.prototype.visitValueExpressionDefault = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#comparison.
SqlBaseVisitor.prototype.visitComparison = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#arithmeticBinary.
SqlBaseVisitor.prototype.visitArithmeticBinary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#arithmeticUnary.
SqlBaseVisitor.prototype.visitArithmeticUnary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#struct.
SqlBaseVisitor.prototype.visitStruct = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#dereference.
SqlBaseVisitor.prototype.visitDereference = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#simpleCase.
SqlBaseVisitor.prototype.visitSimpleCase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#columnReference.
SqlBaseVisitor.prototype.visitColumnReference = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#rowConstructor.
SqlBaseVisitor.prototype.visitRowConstructor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#last.
SqlBaseVisitor.prototype.visitLast = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#star.
SqlBaseVisitor.prototype.visitStar = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#overlay.
SqlBaseVisitor.prototype.visitOverlay = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#subscript.
SqlBaseVisitor.prototype.visitSubscript = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#subqueryExpression.
SqlBaseVisitor.prototype.visitSubqueryExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#substring.
SqlBaseVisitor.prototype.visitSubstring = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#currentDatetime.
SqlBaseVisitor.prototype.visitCurrentDatetime = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#cast.
SqlBaseVisitor.prototype.visitCast = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#constantDefault.
SqlBaseVisitor.prototype.visitConstantDefault = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#lambda.
SqlBaseVisitor.prototype.visitLambda = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#parenthesizedExpression.
SqlBaseVisitor.prototype.visitParenthesizedExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#extract.
SqlBaseVisitor.prototype.visitExtract = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#trim.
SqlBaseVisitor.prototype.visitTrim = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#functionCall.
SqlBaseVisitor.prototype.visitFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#searchedCase.
SqlBaseVisitor.prototype.visitSearchedCase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#position.
SqlBaseVisitor.prototype.visitPosition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#first.
SqlBaseVisitor.prototype.visitFirst = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#nullLiteral.
SqlBaseVisitor.prototype.visitNullLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#intervalLiteral.
SqlBaseVisitor.prototype.visitIntervalLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#typeConstructor.
SqlBaseVisitor.prototype.visitTypeConstructor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#numericLiteral.
SqlBaseVisitor.prototype.visitNumericLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#booleanLiteral.
SqlBaseVisitor.prototype.visitBooleanLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#stringLiteral.
SqlBaseVisitor.prototype.visitStringLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#comparisonOperator.
SqlBaseVisitor.prototype.visitComparisonOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#arithmeticOperator.
SqlBaseVisitor.prototype.visitArithmeticOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#predicateOperator.
SqlBaseVisitor.prototype.visitPredicateOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#booleanValue.
SqlBaseVisitor.prototype.visitBooleanValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#interval.
SqlBaseVisitor.prototype.visitInterval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#errorCapturingMultiUnitsInterval.
SqlBaseVisitor.prototype.visitErrorCapturingMultiUnitsInterval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#multiUnitsInterval.
SqlBaseVisitor.prototype.visitMultiUnitsInterval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#errorCapturingUnitToUnitInterval.
SqlBaseVisitor.prototype.visitErrorCapturingUnitToUnitInterval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#unitToUnitInterval.
SqlBaseVisitor.prototype.visitUnitToUnitInterval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#intervalValue.
SqlBaseVisitor.prototype.visitIntervalValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#colPosition.
SqlBaseVisitor.prototype.visitColPosition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#complexDataType.
SqlBaseVisitor.prototype.visitComplexDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#primitiveDataType.
SqlBaseVisitor.prototype.visitPrimitiveDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#qualifiedColTypeWithPositionList.
SqlBaseVisitor.prototype.visitQualifiedColTypeWithPositionList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#qualifiedColTypeWithPosition.
SqlBaseVisitor.prototype.visitQualifiedColTypeWithPosition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#colTypeList.
SqlBaseVisitor.prototype.visitColTypeList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#colType.
SqlBaseVisitor.prototype.visitColType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#complexColTypeList.
SqlBaseVisitor.prototype.visitComplexColTypeList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#complexColType.
SqlBaseVisitor.prototype.visitComplexColType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#whenClause.
SqlBaseVisitor.prototype.visitWhenClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#windowClause.
SqlBaseVisitor.prototype.visitWindowClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#namedWindow.
SqlBaseVisitor.prototype.visitNamedWindow = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#windowRef.
SqlBaseVisitor.prototype.visitWindowRef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#windowDef.
SqlBaseVisitor.prototype.visitWindowDef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#windowFrame.
SqlBaseVisitor.prototype.visitWindowFrame = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#frameBound.
SqlBaseVisitor.prototype.visitFrameBound = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#qualifiedNameList.
SqlBaseVisitor.prototype.visitQualifiedNameList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#functionName.
SqlBaseVisitor.prototype.visitFunctionName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#qualifiedName.
SqlBaseVisitor.prototype.visitQualifiedName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#errorCapturingIdentifier.
SqlBaseVisitor.prototype.visitErrorCapturingIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#errorIdent.
SqlBaseVisitor.prototype.visitErrorIdent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#realIdent.
SqlBaseVisitor.prototype.visitRealIdent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#identifier.
SqlBaseVisitor.prototype.visitIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#unquotedIdentifier.
SqlBaseVisitor.prototype.visitUnquotedIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#quotedIdentifierAlternative.
SqlBaseVisitor.prototype.visitQuotedIdentifierAlternative = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#quotedIdentifier.
SqlBaseVisitor.prototype.visitQuotedIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#exponentLiteral.
SqlBaseVisitor.prototype.visitExponentLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#decimalLiteral.
SqlBaseVisitor.prototype.visitDecimalLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#legacyDecimalLiteral.
SqlBaseVisitor.prototype.visitLegacyDecimalLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#integerLiteral.
SqlBaseVisitor.prototype.visitIntegerLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#bigIntLiteral.
SqlBaseVisitor.prototype.visitBigIntLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#smallIntLiteral.
SqlBaseVisitor.prototype.visitSmallIntLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#tinyIntLiteral.
SqlBaseVisitor.prototype.visitTinyIntLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#doubleLiteral.
SqlBaseVisitor.prototype.visitDoubleLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#floatLiteral.
SqlBaseVisitor.prototype.visitFloatLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#bigDecimalLiteral.
SqlBaseVisitor.prototype.visitBigDecimalLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#alterColumnAction.
SqlBaseVisitor.prototype.visitAlterColumnAction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#ansiNonReserved.
SqlBaseVisitor.prototype.visitAnsiNonReserved = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#strictNonReserved.
SqlBaseVisitor.prototype.visitStrictNonReserved = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlBaseParser#nonReserved.
SqlBaseVisitor.prototype.visitNonReserved = function(ctx) {
  return this.visitChildren(ctx);
};



exports.SqlBaseVisitor = SqlBaseVisitor;