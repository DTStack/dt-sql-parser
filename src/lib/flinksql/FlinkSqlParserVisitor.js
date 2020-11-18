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


// Visit a parse tree produced by FlinkSqlParserParser#queryStatement.
FlinkSqlParserVisitor.prototype.visitQueryStatement = function(ctx) {
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


// Visit a parse tree produced by FlinkSqlParserParser#tablePrimary.
FlinkSqlParserVisitor.prototype.visitTablePrimary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#expression.
FlinkSqlParserVisitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#logicalNot.
FlinkSqlParserVisitor.prototype.visitLogicalNot = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#predicated.
FlinkSqlParserVisitor.prototype.visitPredicated = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#logicalBinary.
FlinkSqlParserVisitor.prototype.visitLogicalBinary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#predicate.
FlinkSqlParserVisitor.prototype.visitPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#valueExpressionDefault.
FlinkSqlParserVisitor.prototype.visitValueExpressionDefault = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#comparison.
FlinkSqlParserVisitor.prototype.visitComparison = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#arithmeticBinary.
FlinkSqlParserVisitor.prototype.visitArithmeticBinary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#arithmeticUnary.
FlinkSqlParserVisitor.prototype.visitArithmeticUnary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#simpleCase.
FlinkSqlParserVisitor.prototype.visitSimpleCase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#constantDefault.
FlinkSqlParserVisitor.prototype.visitConstantDefault = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#parenthesizedExpression.
FlinkSqlParserVisitor.prototype.visitParenthesizedExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#last.
FlinkSqlParserVisitor.prototype.visitLast = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#star.
FlinkSqlParserVisitor.prototype.visitStar = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#subscript.
FlinkSqlParserVisitor.prototype.visitSubscript = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#searchedCase.
FlinkSqlParserVisitor.prototype.visitSearchedCase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#position.
FlinkSqlParserVisitor.prototype.visitPosition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#first.
FlinkSqlParserVisitor.prototype.visitFirst = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#tableAlias.
FlinkSqlParserVisitor.prototype.visitTableAlias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#identifierList.
FlinkSqlParserVisitor.prototype.visitIdentifierList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#identifierSeq.
FlinkSqlParserVisitor.prototype.visitIdentifierSeq = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#identifier.
FlinkSqlParserVisitor.prototype.visitIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#unquotedIdentifier.
FlinkSqlParserVisitor.prototype.visitUnquotedIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#quotedIdentifierAlternative.
FlinkSqlParserVisitor.prototype.visitQuotedIdentifierAlternative = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#quotedIdentifier.
FlinkSqlParserVisitor.prototype.visitQuotedIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParserParser#whenClause.
FlinkSqlParserVisitor.prototype.visitWhenClause = function(ctx) {
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


// Visit a parse tree produced by FlinkSqlParserParser#setQuantifier.
FlinkSqlParserVisitor.prototype.visitSetQuantifier = function(ctx) {
  return this.visitChildren(ctx);
};



exports.FlinkSqlParserVisitor = FlinkSqlParserVisitor;