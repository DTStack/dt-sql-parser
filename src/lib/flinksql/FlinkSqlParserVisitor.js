// Generated from /Users/erindeng/Desktop/dt-sql-parser/src/grammar/flinksql/FlinkSqlParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by FlinkSqlParserParser.

function FlinkSqlParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

FlinkSqlParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
FlinkSqlParserVisitor.prototype.constructor = FlinkSqlParserVisitor;

// Visit a parse tree produced by FlinkSqlParserParser#program.
FlinkSqlParserVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#statement.
FlinkSqlParserVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#sqlStatements.
FlinkSqlParserVisitor.prototype.visitSqlStatements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#sqlStatement.
FlinkSqlParserVisitor.prototype.visitSqlStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#emptyStatement.
FlinkSqlParserVisitor.prototype.visitEmptyStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#ddlStatement.
FlinkSqlParserVisitor.prototype.visitDdlStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#dmlStatement.
FlinkSqlParserVisitor.prototype.visitDmlStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#createTable.
FlinkSqlParserVisitor.prototype.visitCreateTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#columnOptionDefinition.
FlinkSqlParserVisitor.prototype.visitColumnOptionDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#columnName.
FlinkSqlParserVisitor.prototype.visitColumnName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#columnType.
FlinkSqlParserVisitor.prototype.visitColumnType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#partitionDefinition.
FlinkSqlParserVisitor.prototype.visitPartitionDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#partitionColumnDefinition.
FlinkSqlParserVisitor.prototype.visitPartitionColumnDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#partitionColumnName.
FlinkSqlParserVisitor.prototype.visitPartitionColumnName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#createDatabase.
FlinkSqlParserVisitor.prototype.visitCreateDatabase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#createView.
FlinkSqlParserVisitor.prototype.visitCreateView = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#createFunction.
FlinkSqlParserVisitor.prototype.visitCreateFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#alterTable.
FlinkSqlParserVisitor.prototype.visitAlterTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#renameDefinition.
FlinkSqlParserVisitor.prototype.visitRenameDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#setKeyValueDefinition.
FlinkSqlParserVisitor.prototype.visitSetKeyValueDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#alterDatabase.
FlinkSqlParserVisitor.prototype.visitAlterDatabase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#alterFunction.
FlinkSqlParserVisitor.prototype.visitAlterFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#dropTable.
FlinkSqlParserVisitor.prototype.visitDropTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#dropDatabase.
FlinkSqlParserVisitor.prototype.visitDropDatabase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#dropView.
FlinkSqlParserVisitor.prototype.visitDropView = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#dropFunction.
FlinkSqlParserVisitor.prototype.visitDropFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#queryStatement.
FlinkSqlParserVisitor.prototype.visitQueryStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#selectStatements.
FlinkSqlParserVisitor.prototype.visitSelectStatements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#selectStatement.
FlinkSqlParserVisitor.prototype.visitSelectStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#projectItemDefinition.
FlinkSqlParserVisitor.prototype.visitProjectItemDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#tableExpression.
FlinkSqlParserVisitor.prototype.visitTableExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#tableReference.
FlinkSqlParserVisitor.prototype.visitTableReference = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#matchRecognize.
FlinkSqlParserVisitor.prototype.visitMatchRecognize = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#tablePrimary.
FlinkSqlParserVisitor.prototype.visitTablePrimary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#dynamicTableOptions.
FlinkSqlParserVisitor.prototype.visitDynamicTableOptions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#joinCondition.
FlinkSqlParserVisitor.prototype.visitJoinCondition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#booleanExpression.
FlinkSqlParserVisitor.prototype.visitBooleanExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#groupItemDefinition.
FlinkSqlParserVisitor.prototype.visitGroupItemDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#selectWithoutFromDefinition.
FlinkSqlParserVisitor.prototype.visitSelectWithoutFromDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#projectItem.
FlinkSqlParserVisitor.prototype.visitProjectItem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#queryOrderByDefinition.
FlinkSqlParserVisitor.prototype.visitQueryOrderByDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#orderItemDefition.
FlinkSqlParserVisitor.prototype.visitOrderItemDefition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#queryLimitDefinition.
FlinkSqlParserVisitor.prototype.visitQueryLimitDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#countDefinition.
FlinkSqlParserVisitor.prototype.visitCountDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#queryOffsetDefinition.
FlinkSqlParserVisitor.prototype.visitQueryOffsetDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#queryFetchDefinition.
FlinkSqlParserVisitor.prototype.visitQueryFetchDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#insertStatement.
FlinkSqlParserVisitor.prototype.visitInsertStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#insertPartitionDefinition.
FlinkSqlParserVisitor.prototype.visitInsertPartitionDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#valuesDefinition.
FlinkSqlParserVisitor.prototype.visitValuesDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#valuesRowDefinition.
FlinkSqlParserVisitor.prototype.visitValuesRowDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#allValueDifinition.
FlinkSqlParserVisitor.prototype.visitAllValueDifinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#uidList.
FlinkSqlParserVisitor.prototype.visitUidList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#uid.
FlinkSqlParserVisitor.prototype.visitUid = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#withOption.
FlinkSqlParserVisitor.prototype.visitWithOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#ifNotExists.
FlinkSqlParserVisitor.prototype.visitIfNotExists = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#ifExists.
FlinkSqlParserVisitor.prototype.visitIfExists = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#keyValueDefinition.
FlinkSqlParserVisitor.prototype.visitKeyValueDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#expressions.
FlinkSqlParserVisitor.prototype.visitExpressions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#isExpression.
FlinkSqlParserVisitor.prototype.visitIsExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#notExpression.
FlinkSqlParserVisitor.prototype.visitNotExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#logicalExpression.
FlinkSqlParserVisitor.prototype.visitLogicalExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#predicateExpression.
FlinkSqlParserVisitor.prototype.visitPredicateExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#expressionAtomPredicate.
FlinkSqlParserVisitor.prototype.visitExpressionAtomPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#inPredicate.
FlinkSqlParserVisitor.prototype.visitInPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#subqueryComparasionPredicate.
FlinkSqlParserVisitor.prototype.visitSubqueryComparasionPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#betweenPredicate.
FlinkSqlParserVisitor.prototype.visitBetweenPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#binaryComparasionPredicate.
FlinkSqlParserVisitor.prototype.visitBinaryComparasionPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#likePredicate.
FlinkSqlParserVisitor.prototype.visitLikePredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#unaryExpressionAtom.
FlinkSqlParserVisitor.prototype.visitUnaryExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#subqueryExpessionAtom.
FlinkSqlParserVisitor.prototype.visitSubqueryExpessionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#existsExpessionAtom.
FlinkSqlParserVisitor.prototype.visitExistsExpessionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#constantExpressionAtom.
FlinkSqlParserVisitor.prototype.visitConstantExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#binaryExpressionAtom.
FlinkSqlParserVisitor.prototype.visitBinaryExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#fullColumnNameExpressionAtom.
FlinkSqlParserVisitor.prototype.visitFullColumnNameExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#bitExpressionAtom.
FlinkSqlParserVisitor.prototype.visitBitExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#nestedExpressionAtom.
FlinkSqlParserVisitor.prototype.visitNestedExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#nestedRowExpressionAtom.
FlinkSqlParserVisitor.prototype.visitNestedRowExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#mathExpressionAtom.
FlinkSqlParserVisitor.prototype.visitMathExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#logicalOperator.
FlinkSqlParserVisitor.prototype.visitLogicalOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#comparisonOperator.
FlinkSqlParserVisitor.prototype.visitComparisonOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#bitOperator.
FlinkSqlParserVisitor.prototype.visitBitOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#mathOperator.
FlinkSqlParserVisitor.prototype.visitMathOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#unaryOperator.
FlinkSqlParserVisitor.prototype.visitUnaryOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#fullColumnName.
FlinkSqlParserVisitor.prototype.visitFullColumnName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#constant.
FlinkSqlParserVisitor.prototype.visitConstant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#stringLiteral.
FlinkSqlParserVisitor.prototype.visitStringLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#decimalLiteral.
FlinkSqlParserVisitor.prototype.visitDecimalLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#booleanLiteral.
FlinkSqlParserVisitor.prototype.visitBooleanLiteral = function(ctx) {
  return this.visitChildren(ctx);
};



exports.FlinkSqlParserVisitor = FlinkSqlParserVisitor;