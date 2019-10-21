// Generated from ./grammar/sql.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by sqlParser.

function sqlVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

sqlVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
sqlVisitor.prototype.constructor = sqlVisitor;

// Visit a parse tree produced by sqlParser#singleStatement.
sqlVisitor.prototype.visitSingleStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#singleExpression.
sqlVisitor.prototype.visitSingleExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#singleTableIdentifier.
sqlVisitor.prototype.visitSingleTableIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#singleFunctionIdentifier.
sqlVisitor.prototype.visitSingleFunctionIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#singleDataType.
sqlVisitor.prototype.visitSingleDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#singleTableSchema.
sqlVisitor.prototype.visitSingleTableSchema = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#statementDefault.
sqlVisitor.prototype.visitStatementDefault = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#use.
sqlVisitor.prototype.visitUse = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#createDatabase.
sqlVisitor.prototype.visitCreateDatabase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#setDatabaseProperties.
sqlVisitor.prototype.visitSetDatabaseProperties = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#dropDatabase.
sqlVisitor.prototype.visitDropDatabase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#createTable.
sqlVisitor.prototype.visitCreateTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#createHiveTable.
sqlVisitor.prototype.visitCreateHiveTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#createFlinkTable.
sqlVisitor.prototype.visitCreateFlinkTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#createTableLike.
sqlVisitor.prototype.visitCreateTableLike = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#analyze.
sqlVisitor.prototype.visitAnalyze = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#addTableColumns.
sqlVisitor.prototype.visitAddTableColumns = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#renameTable.
sqlVisitor.prototype.visitRenameTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#setTableProperties.
sqlVisitor.prototype.visitSetTableProperties = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#unsetTableProperties.
sqlVisitor.prototype.visitUnsetTableProperties = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#changeColumn.
sqlVisitor.prototype.visitChangeColumn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#setTableSerDe.
sqlVisitor.prototype.visitSetTableSerDe = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#addTablePartition.
sqlVisitor.prototype.visitAddTablePartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#renameTablePartition.
sqlVisitor.prototype.visitRenameTablePartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#dropTablePartitions.
sqlVisitor.prototype.visitDropTablePartitions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#setTableLocation.
sqlVisitor.prototype.visitSetTableLocation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#recoverPartitions.
sqlVisitor.prototype.visitRecoverPartitions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#dropTable.
sqlVisitor.prototype.visitDropTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#createView.
sqlVisitor.prototype.visitCreateView = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#createTempViewUsing.
sqlVisitor.prototype.visitCreateTempViewUsing = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#alterViewQuery.
sqlVisitor.prototype.visitAlterViewQuery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#createFunction.
sqlVisitor.prototype.visitCreateFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#dropFunction.
sqlVisitor.prototype.visitDropFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#explain.
sqlVisitor.prototype.visitExplain = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#showTables.
sqlVisitor.prototype.visitShowTables = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#showTable.
sqlVisitor.prototype.visitShowTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#showDatabases.
sqlVisitor.prototype.visitShowDatabases = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#showTblProperties.
sqlVisitor.prototype.visitShowTblProperties = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#showColumns.
sqlVisitor.prototype.visitShowColumns = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#showPartitions.
sqlVisitor.prototype.visitShowPartitions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#showFunctions.
sqlVisitor.prototype.visitShowFunctions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#showCreateTable.
sqlVisitor.prototype.visitShowCreateTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#describeFunction.
sqlVisitor.prototype.visitDescribeFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#describeDatabase.
sqlVisitor.prototype.visitDescribeDatabase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#describeTable.
sqlVisitor.prototype.visitDescribeTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#refreshTable.
sqlVisitor.prototype.visitRefreshTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#refreshResource.
sqlVisitor.prototype.visitRefreshResource = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#cacheTable.
sqlVisitor.prototype.visitCacheTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#uncacheTable.
sqlVisitor.prototype.visitUncacheTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#clearCache.
sqlVisitor.prototype.visitClearCache = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#loadData.
sqlVisitor.prototype.visitLoadData = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#truncateTable.
sqlVisitor.prototype.visitTruncateTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#repairTable.
sqlVisitor.prototype.visitRepairTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#manageResource.
sqlVisitor.prototype.visitManageResource = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#failNativeCommand.
sqlVisitor.prototype.visitFailNativeCommand = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#setConfiguration.
sqlVisitor.prototype.visitSetConfiguration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#resetConfiguration.
sqlVisitor.prototype.visitResetConfiguration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#unsupportedHiveNativeCommands.
sqlVisitor.prototype.visitUnsupportedHiveNativeCommands = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#createTableHeader.
sqlVisitor.prototype.visitCreateTableHeader = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#bucketSpec.
sqlVisitor.prototype.visitBucketSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#skewSpec.
sqlVisitor.prototype.visitSkewSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#locationSpec.
sqlVisitor.prototype.visitLocationSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#query.
sqlVisitor.prototype.visitQuery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#insertOverwriteTable.
sqlVisitor.prototype.visitInsertOverwriteTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#insertIntoTable.
sqlVisitor.prototype.visitInsertIntoTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#insertOverwriteHiveDir.
sqlVisitor.prototype.visitInsertOverwriteHiveDir = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#insertOverwriteDir.
sqlVisitor.prototype.visitInsertOverwriteDir = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#partitionSpecLocation.
sqlVisitor.prototype.visitPartitionSpecLocation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#partitionSpec.
sqlVisitor.prototype.visitPartitionSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#partitionVal.
sqlVisitor.prototype.visitPartitionVal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#describeFuncName.
sqlVisitor.prototype.visitDescribeFuncName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#describeColName.
sqlVisitor.prototype.visitDescribeColName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#ctes.
sqlVisitor.prototype.visitCtes = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#namedQuery.
sqlVisitor.prototype.visitNamedQuery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#tableProvider.
sqlVisitor.prototype.visitTableProvider = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#tablePropertyList.
sqlVisitor.prototype.visitTablePropertyList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#tableProperty.
sqlVisitor.prototype.visitTableProperty = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#tablePropertyKey.
sqlVisitor.prototype.visitTablePropertyKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#tablePropertyValue.
sqlVisitor.prototype.visitTablePropertyValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#constantList.
sqlVisitor.prototype.visitConstantList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#nestedConstantList.
sqlVisitor.prototype.visitNestedConstantList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#createFileFormat.
sqlVisitor.prototype.visitCreateFileFormat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#tableFileFormat.
sqlVisitor.prototype.visitTableFileFormat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#genericFileFormat.
sqlVisitor.prototype.visitGenericFileFormat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#storageHandler.
sqlVisitor.prototype.visitStorageHandler = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#resource.
sqlVisitor.prototype.visitResource = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#singleInsertQuery.
sqlVisitor.prototype.visitSingleInsertQuery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#multiInsertQuery.
sqlVisitor.prototype.visitMultiInsertQuery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#queryOrganization.
sqlVisitor.prototype.visitQueryOrganization = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#multiInsertQueryBody.
sqlVisitor.prototype.visitMultiInsertQueryBody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#queryTermDefault.
sqlVisitor.prototype.visitQueryTermDefault = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#setOperation.
sqlVisitor.prototype.visitSetOperation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#queryPrimaryDefault.
sqlVisitor.prototype.visitQueryPrimaryDefault = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#table.
sqlVisitor.prototype.visitTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#inlineTableDefault1.
sqlVisitor.prototype.visitInlineTableDefault1 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#subquery.
sqlVisitor.prototype.visitSubquery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#sortItem.
sqlVisitor.prototype.visitSortItem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#querySpecification.
sqlVisitor.prototype.visitQuerySpecification = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#hint.
sqlVisitor.prototype.visitHint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#hintStatement.
sqlVisitor.prototype.visitHintStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#fromClause.
sqlVisitor.prototype.visitFromClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#aggregation.
sqlVisitor.prototype.visitAggregation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#groupingSet.
sqlVisitor.prototype.visitGroupingSet = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#pivotClause.
sqlVisitor.prototype.visitPivotClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#pivotColumn.
sqlVisitor.prototype.visitPivotColumn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#pivotValue.
sqlVisitor.prototype.visitPivotValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#lateralView.
sqlVisitor.prototype.visitLateralView = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#setQuantifier.
sqlVisitor.prototype.visitSetQuantifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#relation.
sqlVisitor.prototype.visitRelation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#joinRelation.
sqlVisitor.prototype.visitJoinRelation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#joinType.
sqlVisitor.prototype.visitJoinType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#joinCriteria.
sqlVisitor.prototype.visitJoinCriteria = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#sample.
sqlVisitor.prototype.visitSample = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#sampleByPercentile.
sqlVisitor.prototype.visitSampleByPercentile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#sampleByRows.
sqlVisitor.prototype.visitSampleByRows = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#sampleByBucket.
sqlVisitor.prototype.visitSampleByBucket = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#sampleByBytes.
sqlVisitor.prototype.visitSampleByBytes = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#identifierList.
sqlVisitor.prototype.visitIdentifierList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#identifierSeq.
sqlVisitor.prototype.visitIdentifierSeq = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#orderedIdentifierList.
sqlVisitor.prototype.visitOrderedIdentifierList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#orderedIdentifier.
sqlVisitor.prototype.visitOrderedIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#identifierCommentList.
sqlVisitor.prototype.visitIdentifierCommentList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#identifierComment.
sqlVisitor.prototype.visitIdentifierComment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#tableName.
sqlVisitor.prototype.visitTableName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#aliasedQuery.
sqlVisitor.prototype.visitAliasedQuery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#aliasedRelation.
sqlVisitor.prototype.visitAliasedRelation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#inlineTableDefault2.
sqlVisitor.prototype.visitInlineTableDefault2 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#tableValuedFunction.
sqlVisitor.prototype.visitTableValuedFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#matchRecognize.
sqlVisitor.prototype.visitMatchRecognize = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#measureColumn.
sqlVisitor.prototype.visitMeasureColumn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#condition1.
sqlVisitor.prototype.visitCondition1 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#variable.
sqlVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#pattern1.
sqlVisitor.prototype.visitPattern1 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#patternTerm.
sqlVisitor.prototype.visitPatternTerm = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#patternFactor.
sqlVisitor.prototype.visitPatternFactor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#patternQuantifier.
sqlVisitor.prototype.visitPatternQuantifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#minRepeat.
sqlVisitor.prototype.visitMinRepeat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#maxRepeat.
sqlVisitor.prototype.visitMaxRepeat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#repeat.
sqlVisitor.prototype.visitRepeat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#inlineTable.
sqlVisitor.prototype.visitInlineTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#functionTable.
sqlVisitor.prototype.visitFunctionTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#tableAlias.
sqlVisitor.prototype.visitTableAlias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#rowFormatSerde.
sqlVisitor.prototype.visitRowFormatSerde = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#rowFormatDelimited.
sqlVisitor.prototype.visitRowFormatDelimited = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#tableIdentifier.
sqlVisitor.prototype.visitTableIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#functionIdentifier.
sqlVisitor.prototype.visitFunctionIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#namedExpression.
sqlVisitor.prototype.visitNamedExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#namedExpressionSeq.
sqlVisitor.prototype.visitNamedExpressionSeq = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#expression.
sqlVisitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#logicalNot.
sqlVisitor.prototype.visitLogicalNot = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#predicated.
sqlVisitor.prototype.visitPredicated = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#exists.
sqlVisitor.prototype.visitExists = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#logicalBinary.
sqlVisitor.prototype.visitLogicalBinary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#predicate.
sqlVisitor.prototype.visitPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#valueExpressionDefault.
sqlVisitor.prototype.visitValueExpressionDefault = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#comparison.
sqlVisitor.prototype.visitComparison = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#arithmeticBinary.
sqlVisitor.prototype.visitArithmeticBinary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#arithmeticUnary.
sqlVisitor.prototype.visitArithmeticUnary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#struct.
sqlVisitor.prototype.visitStruct = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#dereference.
sqlVisitor.prototype.visitDereference = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#simpleCase.
sqlVisitor.prototype.visitSimpleCase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#columnReference.
sqlVisitor.prototype.visitColumnReference = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#rowConstructor.
sqlVisitor.prototype.visitRowConstructor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#last.
sqlVisitor.prototype.visitLast = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#star.
sqlVisitor.prototype.visitStar = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#subscript.
sqlVisitor.prototype.visitSubscript = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#subqueryExpression.
sqlVisitor.prototype.visitSubqueryExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#cast.
sqlVisitor.prototype.visitCast = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#constantDefault.
sqlVisitor.prototype.visitConstantDefault = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#lambda.
sqlVisitor.prototype.visitLambda = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#parenthesizedExpression.
sqlVisitor.prototype.visitParenthesizedExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#extract.
sqlVisitor.prototype.visitExtract = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#functionCall.
sqlVisitor.prototype.visitFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#searchedCase.
sqlVisitor.prototype.visitSearchedCase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#position.
sqlVisitor.prototype.visitPosition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#first.
sqlVisitor.prototype.visitFirst = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#nullLiteral.
sqlVisitor.prototype.visitNullLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#intervalLiteral.
sqlVisitor.prototype.visitIntervalLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#typeConstructor.
sqlVisitor.prototype.visitTypeConstructor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#numericLiteral.
sqlVisitor.prototype.visitNumericLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#booleanLiteral.
sqlVisitor.prototype.visitBooleanLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#stringLiteral.
sqlVisitor.prototype.visitStringLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#comparisonOperator.
sqlVisitor.prototype.visitComparisonOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#arithmeticOperator.
sqlVisitor.prototype.visitArithmeticOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#predicateOperator.
sqlVisitor.prototype.visitPredicateOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#booleanValue.
sqlVisitor.prototype.visitBooleanValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#interval.
sqlVisitor.prototype.visitInterval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#intervalField.
sqlVisitor.prototype.visitIntervalField = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#intervalValue.
sqlVisitor.prototype.visitIntervalValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#colPosition.
sqlVisitor.prototype.visitColPosition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#complexDataType.
sqlVisitor.prototype.visitComplexDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#primitiveDataType.
sqlVisitor.prototype.visitPrimitiveDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#colTypeList.
sqlVisitor.prototype.visitColTypeList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#colType.
sqlVisitor.prototype.visitColType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#dtColTypeList.
sqlVisitor.prototype.visitDtColTypeList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#dtColType.
sqlVisitor.prototype.visitDtColType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#complexColTypeList.
sqlVisitor.prototype.visitComplexColTypeList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#complexColType.
sqlVisitor.prototype.visitComplexColType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#whenClause.
sqlVisitor.prototype.visitWhenClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#windows.
sqlVisitor.prototype.visitWindows = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#namedWindow.
sqlVisitor.prototype.visitNamedWindow = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#windowRef.
sqlVisitor.prototype.visitWindowRef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#windowDef.
sqlVisitor.prototype.visitWindowDef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#windowFrame.
sqlVisitor.prototype.visitWindowFrame = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#frameBound.
sqlVisitor.prototype.visitFrameBound = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#qualifiedName.
sqlVisitor.prototype.visitQualifiedName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#identifier.
sqlVisitor.prototype.visitIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#unquotedIdentifier.
sqlVisitor.prototype.visitUnquotedIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#quotedIdentifierAlternative.
sqlVisitor.prototype.visitQuotedIdentifierAlternative = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#quotedIdentifier.
sqlVisitor.prototype.visitQuotedIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#decimalLiteral.
sqlVisitor.prototype.visitDecimalLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#integerLiteral.
sqlVisitor.prototype.visitIntegerLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#bigIntLiteral.
sqlVisitor.prototype.visitBigIntLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#smallIntLiteral.
sqlVisitor.prototype.visitSmallIntLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#tinyIntLiteral.
sqlVisitor.prototype.visitTinyIntLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#doubleLiteral.
sqlVisitor.prototype.visitDoubleLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#bigDecimalLiteral.
sqlVisitor.prototype.visitBigDecimalLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sqlParser#nonReserved.
sqlVisitor.prototype.visitNonReserved = function(ctx) {
  return this.visitChildren(ctx);
};



exports.sqlVisitor = sqlVisitor;