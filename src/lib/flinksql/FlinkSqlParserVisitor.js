// Generated from /Users/yuwan/Desktop/yuwan/dt-sql-parser/src/grammar/flinksql/FlinkSqlParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by FlinkSqlParser.

function FlinkSqlParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

FlinkSqlParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
FlinkSqlParserVisitor.prototype.constructor = FlinkSqlParserVisitor;

// Visit a parse tree produced by FlinkSqlParser#program.
FlinkSqlParserVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#statement.
FlinkSqlParserVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#sqlStatements.
FlinkSqlParserVisitor.prototype.visitSqlStatements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#sqlStatement.
FlinkSqlParserVisitor.prototype.visitSqlStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#emptyStatement.
FlinkSqlParserVisitor.prototype.visitEmptyStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#ddlStatement.
FlinkSqlParserVisitor.prototype.visitDdlStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#dmlStatement.
FlinkSqlParserVisitor.prototype.visitDmlStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#describeStatement.
FlinkSqlParserVisitor.prototype.visitDescribeStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#explainStatement.
FlinkSqlParserVisitor.prototype.visitExplainStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#useStatement.
FlinkSqlParserVisitor.prototype.visitUseStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#showStatememt.
FlinkSqlParserVisitor.prototype.visitShowStatememt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#createTable.
FlinkSqlParserVisitor.prototype.visitCreateTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#columnOptionDefinition.
FlinkSqlParserVisitor.prototype.visitColumnOptionDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#physicalColumnDefinition.
FlinkSqlParserVisitor.prototype.visitPhysicalColumnDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#columnName.
FlinkSqlParserVisitor.prototype.visitColumnName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#columnNameList.
FlinkSqlParserVisitor.prototype.visitColumnNameList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#columnType.
FlinkSqlParserVisitor.prototype.visitColumnType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#lengthOneDimension.
FlinkSqlParserVisitor.prototype.visitLengthOneDimension = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#lengthTwoOptionalDimension.
FlinkSqlParserVisitor.prototype.visitLengthTwoOptionalDimension = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#lengthTwoStringDimension.
FlinkSqlParserVisitor.prototype.visitLengthTwoStringDimension = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#lengthOneTypeDimension.
FlinkSqlParserVisitor.prototype.visitLengthOneTypeDimension = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#mapTypeDimension.
FlinkSqlParserVisitor.prototype.visitMapTypeDimension = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#rowTypeDimension.
FlinkSqlParserVisitor.prototype.visitRowTypeDimension = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#columnConstraint.
FlinkSqlParserVisitor.prototype.visitColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#commentSpec.
FlinkSqlParserVisitor.prototype.visitCommentSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#metadataColumnDefinition.
FlinkSqlParserVisitor.prototype.visitMetadataColumnDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#metadataKey.
FlinkSqlParserVisitor.prototype.visitMetadataKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#computedColumnDefinition.
FlinkSqlParserVisitor.prototype.visitComputedColumnDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#computedColumnExpression.
FlinkSqlParserVisitor.prototype.visitComputedColumnExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#watermarkDefinition.
FlinkSqlParserVisitor.prototype.visitWatermarkDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#tableConstraint.
FlinkSqlParserVisitor.prototype.visitTableConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#constraintName.
FlinkSqlParserVisitor.prototype.visitConstraintName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#selfDefinitionClause.
FlinkSqlParserVisitor.prototype.visitSelfDefinitionClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#partitionDefinition.
FlinkSqlParserVisitor.prototype.visitPartitionDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#transformList.
FlinkSqlParserVisitor.prototype.visitTransformList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#identityTransform.
FlinkSqlParserVisitor.prototype.visitIdentityTransform = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#applyTransform.
FlinkSqlParserVisitor.prototype.visitApplyTransform = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#transformArgument.
FlinkSqlParserVisitor.prototype.visitTransformArgument = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#likeDefinition.
FlinkSqlParserVisitor.prototype.visitLikeDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#sourceTable.
FlinkSqlParserVisitor.prototype.visitSourceTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#likeOption.
FlinkSqlParserVisitor.prototype.visitLikeOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#createCatalog.
FlinkSqlParserVisitor.prototype.visitCreateCatalog = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#createDatabase.
FlinkSqlParserVisitor.prototype.visitCreateDatabase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#createView.
FlinkSqlParserVisitor.prototype.visitCreateView = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#createFunction.
FlinkSqlParserVisitor.prototype.visitCreateFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#alterTable.
FlinkSqlParserVisitor.prototype.visitAlterTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#renameDefinition.
FlinkSqlParserVisitor.prototype.visitRenameDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#setKeyValueDefinition.
FlinkSqlParserVisitor.prototype.visitSetKeyValueDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#alterDatabase.
FlinkSqlParserVisitor.prototype.visitAlterDatabase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#alterFunction.
FlinkSqlParserVisitor.prototype.visitAlterFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#dropTable.
FlinkSqlParserVisitor.prototype.visitDropTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#dropDatabase.
FlinkSqlParserVisitor.prototype.visitDropDatabase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#dropView.
FlinkSqlParserVisitor.prototype.visitDropView = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#dropFunction.
FlinkSqlParserVisitor.prototype.visitDropFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#insertStatement.
FlinkSqlParserVisitor.prototype.visitInsertStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#insertPartitionDefinition.
FlinkSqlParserVisitor.prototype.visitInsertPartitionDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#valuesDefinition.
FlinkSqlParserVisitor.prototype.visitValuesDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#valuesRowDefinition.
FlinkSqlParserVisitor.prototype.visitValuesRowDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#queryStatement.
FlinkSqlParserVisitor.prototype.visitQueryStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#valuesCaluse.
FlinkSqlParserVisitor.prototype.visitValuesCaluse = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#selectStatement.
FlinkSqlParserVisitor.prototype.visitSelectStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#selectClause.
FlinkSqlParserVisitor.prototype.visitSelectClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#projectItemDefinition.
FlinkSqlParserVisitor.prototype.visitProjectItemDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#fromClause.
FlinkSqlParserVisitor.prototype.visitFromClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#tableExpression.
FlinkSqlParserVisitor.prototype.visitTableExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#tableReference.
FlinkSqlParserVisitor.prototype.visitTableReference = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#tablePrimary.
FlinkSqlParserVisitor.prototype.visitTablePrimary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#tablePath.
FlinkSqlParserVisitor.prototype.visitTablePath = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#systemTimePeriod.
FlinkSqlParserVisitor.prototype.visitSystemTimePeriod = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#dateTimeExpression.
FlinkSqlParserVisitor.prototype.visitDateTimeExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#joinCondition.
FlinkSqlParserVisitor.prototype.visitJoinCondition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#whereClause.
FlinkSqlParserVisitor.prototype.visitWhereClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#groupByClause.
FlinkSqlParserVisitor.prototype.visitGroupByClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#groupItemDefinition.
FlinkSqlParserVisitor.prototype.visitGroupItemDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#havingClause.
FlinkSqlParserVisitor.prototype.visitHavingClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#orderByCaluse.
FlinkSqlParserVisitor.prototype.visitOrderByCaluse = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#orderItemDefition.
FlinkSqlParserVisitor.prototype.visitOrderItemDefition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#limitClause.
FlinkSqlParserVisitor.prototype.visitLimitClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#windowClause.
FlinkSqlParserVisitor.prototype.visitWindowClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#namedWindow.
FlinkSqlParserVisitor.prototype.visitNamedWindow = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#windowSpec.
FlinkSqlParserVisitor.prototype.visitWindowSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#sortItem.
FlinkSqlParserVisitor.prototype.visitSortItem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#windowFrame.
FlinkSqlParserVisitor.prototype.visitWindowFrame = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#frameBound.
FlinkSqlParserVisitor.prototype.visitFrameBound = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#expression.
FlinkSqlParserVisitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#logicalNot.
FlinkSqlParserVisitor.prototype.visitLogicalNot = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#predicated.
FlinkSqlParserVisitor.prototype.visitPredicated = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#exists.
FlinkSqlParserVisitor.prototype.visitExists = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#logicalBinary.
FlinkSqlParserVisitor.prototype.visitLogicalBinary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#predicate.
FlinkSqlParserVisitor.prototype.visitPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#valueExpressionDefault.
FlinkSqlParserVisitor.prototype.visitValueExpressionDefault = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#comparison.
FlinkSqlParserVisitor.prototype.visitComparison = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#arithmeticBinary.
FlinkSqlParserVisitor.prototype.visitArithmeticBinary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#arithmeticUnary.
FlinkSqlParserVisitor.prototype.visitArithmeticUnary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#dereference.
FlinkSqlParserVisitor.prototype.visitDereference = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#simpleCase.
FlinkSqlParserVisitor.prototype.visitSimpleCase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#columnReference.
FlinkSqlParserVisitor.prototype.visitColumnReference = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#last.
FlinkSqlParserVisitor.prototype.visitLast = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#star.
FlinkSqlParserVisitor.prototype.visitStar = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#subscript.
FlinkSqlParserVisitor.prototype.visitSubscript = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#subqueryExpression.
FlinkSqlParserVisitor.prototype.visitSubqueryExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#cast.
FlinkSqlParserVisitor.prototype.visitCast = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#constantDefault.
FlinkSqlParserVisitor.prototype.visitConstantDefault = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#parenthesizedExpression.
FlinkSqlParserVisitor.prototype.visitParenthesizedExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#functionCall.
FlinkSqlParserVisitor.prototype.visitFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#searchedCase.
FlinkSqlParserVisitor.prototype.visitSearchedCase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#position.
FlinkSqlParserVisitor.prototype.visitPosition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#first.
FlinkSqlParserVisitor.prototype.visitFirst = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#functionName.
FlinkSqlParserVisitor.prototype.visitFunctionName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#dereferenceDefinition.
FlinkSqlParserVisitor.prototype.visitDereferenceDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#correlationName.
FlinkSqlParserVisitor.prototype.visitCorrelationName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#qualifiedName.
FlinkSqlParserVisitor.prototype.visitQualifiedName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#interval.
FlinkSqlParserVisitor.prototype.visitInterval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#errorCapturingMultiUnitsInterval.
FlinkSqlParserVisitor.prototype.visitErrorCapturingMultiUnitsInterval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#multiUnitsInterval.
FlinkSqlParserVisitor.prototype.visitMultiUnitsInterval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#errorCapturingUnitToUnitInterval.
FlinkSqlParserVisitor.prototype.visitErrorCapturingUnitToUnitInterval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#unitToUnitInterval.
FlinkSqlParserVisitor.prototype.visitUnitToUnitInterval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#intervalValue.
FlinkSqlParserVisitor.prototype.visitIntervalValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#columnAlias.
FlinkSqlParserVisitor.prototype.visitColumnAlias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#tableAlias.
FlinkSqlParserVisitor.prototype.visitTableAlias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#errorCapturingIdentifier.
FlinkSqlParserVisitor.prototype.visitErrorCapturingIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#errorIdent.
FlinkSqlParserVisitor.prototype.visitErrorIdent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#realIdent.
FlinkSqlParserVisitor.prototype.visitRealIdent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#identifierList.
FlinkSqlParserVisitor.prototype.visitIdentifierList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#identifierSeq.
FlinkSqlParserVisitor.prototype.visitIdentifierSeq = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#identifier.
FlinkSqlParserVisitor.prototype.visitIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#unquotedIdentifierAlternative.
FlinkSqlParserVisitor.prototype.visitUnquotedIdentifierAlternative = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#quotedIdentifierAlternative.
FlinkSqlParserVisitor.prototype.visitQuotedIdentifierAlternative = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#ansiNonReservedKeywords.
FlinkSqlParserVisitor.prototype.visitAnsiNonReservedKeywords = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#nonReservedKeywords.
FlinkSqlParserVisitor.prototype.visitNonReservedKeywords = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#unquotedIdentifier.
FlinkSqlParserVisitor.prototype.visitUnquotedIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#quotedIdentifier.
FlinkSqlParserVisitor.prototype.visitQuotedIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#whenClause.
FlinkSqlParserVisitor.prototype.visitWhenClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#uidList.
FlinkSqlParserVisitor.prototype.visitUidList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#uid.
FlinkSqlParserVisitor.prototype.visitUid = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#plusUid.
FlinkSqlParserVisitor.prototype.visitPlusUid = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#withOption.
FlinkSqlParserVisitor.prototype.visitWithOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#ifNotExists.
FlinkSqlParserVisitor.prototype.visitIfNotExists = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#ifExists.
FlinkSqlParserVisitor.prototype.visitIfExists = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#tablePropertyList.
FlinkSqlParserVisitor.prototype.visitTablePropertyList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#tableProperty.
FlinkSqlParserVisitor.prototype.visitTableProperty = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#tablePropertyKey.
FlinkSqlParserVisitor.prototype.visitTablePropertyKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#tablePropertyValue.
FlinkSqlParserVisitor.prototype.visitTablePropertyValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#logicalOperator.
FlinkSqlParserVisitor.prototype.visitLogicalOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#comparisonOperator.
FlinkSqlParserVisitor.prototype.visitComparisonOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#bitOperator.
FlinkSqlParserVisitor.prototype.visitBitOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#mathOperator.
FlinkSqlParserVisitor.prototype.visitMathOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#unaryOperator.
FlinkSqlParserVisitor.prototype.visitUnaryOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#fullColumnName.
FlinkSqlParserVisitor.prototype.visitFullColumnName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#constant.
FlinkSqlParserVisitor.prototype.visitConstant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#stringLiteral.
FlinkSqlParserVisitor.prototype.visitStringLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#decimalLiteral.
FlinkSqlParserVisitor.prototype.visitDecimalLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#booleanLiteral.
FlinkSqlParserVisitor.prototype.visitBooleanLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#setQuantifier.
FlinkSqlParserVisitor.prototype.visitSetQuantifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#ansiNonReserved.
FlinkSqlParserVisitor.prototype.visitAnsiNonReserved = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#strictNonReserved.
FlinkSqlParserVisitor.prototype.visitStrictNonReserved = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#nonReserved.
FlinkSqlParserVisitor.prototype.visitNonReserved = function(ctx) {
  return this.visitChildren(ctx);
};



exports.FlinkSqlParserVisitor = FlinkSqlParserVisitor;