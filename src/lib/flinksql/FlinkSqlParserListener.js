// Generated from /Users/erindeng/Desktop/dt-sql-parser/src/grammar/flinksql/FlinkSqlParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by FlinkSqlParserParser.
function FlinkSqlParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

FlinkSqlParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
FlinkSqlParserListener.prototype.constructor = FlinkSqlParserListener;

// Enter a parse tree produced by FlinkSqlParserParser#program.
FlinkSqlParserListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#program.
FlinkSqlParserListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#statement.
FlinkSqlParserListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#statement.
FlinkSqlParserListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#sqlStatements.
FlinkSqlParserListener.prototype.enterSqlStatements = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#sqlStatements.
FlinkSqlParserListener.prototype.exitSqlStatements = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#sqlStatement.
FlinkSqlParserListener.prototype.enterSqlStatement = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#sqlStatement.
FlinkSqlParserListener.prototype.exitSqlStatement = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#emptyStatement.
FlinkSqlParserListener.prototype.enterEmptyStatement = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#emptyStatement.
FlinkSqlParserListener.prototype.exitEmptyStatement = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#ddlStatement.
FlinkSqlParserListener.prototype.enterDdlStatement = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#ddlStatement.
FlinkSqlParserListener.prototype.exitDdlStatement = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#dmlStatement.
FlinkSqlParserListener.prototype.enterDmlStatement = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#dmlStatement.
FlinkSqlParserListener.prototype.exitDmlStatement = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#createTable.
FlinkSqlParserListener.prototype.enterCreateTable = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#createTable.
FlinkSqlParserListener.prototype.exitCreateTable = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#columnOptionDefinition.
FlinkSqlParserListener.prototype.enterColumnOptionDefinition = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#columnOptionDefinition.
FlinkSqlParserListener.prototype.exitColumnOptionDefinition = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#columnName.
FlinkSqlParserListener.prototype.enterColumnName = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#columnName.
FlinkSqlParserListener.prototype.exitColumnName = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#columnType.
FlinkSqlParserListener.prototype.enterColumnType = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#columnType.
FlinkSqlParserListener.prototype.exitColumnType = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#partitionDefinition.
FlinkSqlParserListener.prototype.enterPartitionDefinition = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#partitionDefinition.
FlinkSqlParserListener.prototype.exitPartitionDefinition = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#partitionColumnDefinition.
FlinkSqlParserListener.prototype.enterPartitionColumnDefinition = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#partitionColumnDefinition.
FlinkSqlParserListener.prototype.exitPartitionColumnDefinition = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#partitionColumnName.
FlinkSqlParserListener.prototype.enterPartitionColumnName = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#partitionColumnName.
FlinkSqlParserListener.prototype.exitPartitionColumnName = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#createDatabase.
FlinkSqlParserListener.prototype.enterCreateDatabase = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#createDatabase.
FlinkSqlParserListener.prototype.exitCreateDatabase = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#createView.
FlinkSqlParserListener.prototype.enterCreateView = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#createView.
FlinkSqlParserListener.prototype.exitCreateView = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#createFunction.
FlinkSqlParserListener.prototype.enterCreateFunction = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#createFunction.
FlinkSqlParserListener.prototype.exitCreateFunction = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#alterTable.
FlinkSqlParserListener.prototype.enterAlterTable = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#alterTable.
FlinkSqlParserListener.prototype.exitAlterTable = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#renameDefinition.
FlinkSqlParserListener.prototype.enterRenameDefinition = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#renameDefinition.
FlinkSqlParserListener.prototype.exitRenameDefinition = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#setKeyValueDefinition.
FlinkSqlParserListener.prototype.enterSetKeyValueDefinition = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#setKeyValueDefinition.
FlinkSqlParserListener.prototype.exitSetKeyValueDefinition = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#alterDatabase.
FlinkSqlParserListener.prototype.enterAlterDatabase = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#alterDatabase.
FlinkSqlParserListener.prototype.exitAlterDatabase = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#alterFunction.
FlinkSqlParserListener.prototype.enterAlterFunction = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#alterFunction.
FlinkSqlParserListener.prototype.exitAlterFunction = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#dropTable.
FlinkSqlParserListener.prototype.enterDropTable = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#dropTable.
FlinkSqlParserListener.prototype.exitDropTable = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#dropDatabase.
FlinkSqlParserListener.prototype.enterDropDatabase = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#dropDatabase.
FlinkSqlParserListener.prototype.exitDropDatabase = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#dropView.
FlinkSqlParserListener.prototype.enterDropView = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#dropView.
FlinkSqlParserListener.prototype.exitDropView = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#dropFunction.
FlinkSqlParserListener.prototype.enterDropFunction = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#dropFunction.
FlinkSqlParserListener.prototype.exitDropFunction = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#insertStatement.
FlinkSqlParserListener.prototype.enterInsertStatement = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#insertStatement.
FlinkSqlParserListener.prototype.exitInsertStatement = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#insertPartitionDefinition.
FlinkSqlParserListener.prototype.enterInsertPartitionDefinition = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#insertPartitionDefinition.
FlinkSqlParserListener.prototype.exitInsertPartitionDefinition = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#valuesDefinition.
FlinkSqlParserListener.prototype.enterValuesDefinition = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#valuesDefinition.
FlinkSqlParserListener.prototype.exitValuesDefinition = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#valuesRowDefinition.
FlinkSqlParserListener.prototype.enterValuesRowDefinition = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#valuesRowDefinition.
FlinkSqlParserListener.prototype.exitValuesRowDefinition = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#allValueDifinition.
FlinkSqlParserListener.prototype.enterAllValueDifinition = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#allValueDifinition.
FlinkSqlParserListener.prototype.exitAllValueDifinition = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#queryStatement.
FlinkSqlParserListener.prototype.enterQueryStatement = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#queryStatement.
FlinkSqlParserListener.prototype.exitQueryStatement = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#selectStatement.
FlinkSqlParserListener.prototype.enterSelectStatement = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#selectStatement.
FlinkSqlParserListener.prototype.exitSelectStatement = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#projectItemDefinition.
FlinkSqlParserListener.prototype.enterProjectItemDefinition = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#projectItemDefinition.
FlinkSqlParserListener.prototype.exitProjectItemDefinition = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#tableExpression.
FlinkSqlParserListener.prototype.enterTableExpression = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#tableExpression.
FlinkSqlParserListener.prototype.exitTableExpression = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#tableReference.
FlinkSqlParserListener.prototype.enterTableReference = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#tableReference.
FlinkSqlParserListener.prototype.exitTableReference = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#tablePrimary.
FlinkSqlParserListener.prototype.enterTablePrimary = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#tablePrimary.
FlinkSqlParserListener.prototype.exitTablePrimary = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#expression.
FlinkSqlParserListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#expression.
FlinkSqlParserListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#logicalNot.
FlinkSqlParserListener.prototype.enterLogicalNot = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#logicalNot.
FlinkSqlParserListener.prototype.exitLogicalNot = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#predicated.
FlinkSqlParserListener.prototype.enterPredicated = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#predicated.
FlinkSqlParserListener.prototype.exitPredicated = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#logicalBinary.
FlinkSqlParserListener.prototype.enterLogicalBinary = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#logicalBinary.
FlinkSqlParserListener.prototype.exitLogicalBinary = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#predicate.
FlinkSqlParserListener.prototype.enterPredicate = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#predicate.
FlinkSqlParserListener.prototype.exitPredicate = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#valueExpressionDefault.
FlinkSqlParserListener.prototype.enterValueExpressionDefault = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#valueExpressionDefault.
FlinkSqlParserListener.prototype.exitValueExpressionDefault = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#comparison.
FlinkSqlParserListener.prototype.enterComparison = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#comparison.
FlinkSqlParserListener.prototype.exitComparison = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#arithmeticBinary.
FlinkSqlParserListener.prototype.enterArithmeticBinary = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#arithmeticBinary.
FlinkSqlParserListener.prototype.exitArithmeticBinary = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#arithmeticUnary.
FlinkSqlParserListener.prototype.enterArithmeticUnary = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#arithmeticUnary.
FlinkSqlParserListener.prototype.exitArithmeticUnary = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#simpleCase.
FlinkSqlParserListener.prototype.enterSimpleCase = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#simpleCase.
FlinkSqlParserListener.prototype.exitSimpleCase = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#constantDefault.
FlinkSqlParserListener.prototype.enterConstantDefault = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#constantDefault.
FlinkSqlParserListener.prototype.exitConstantDefault = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#parenthesizedExpression.
FlinkSqlParserListener.prototype.enterParenthesizedExpression = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#parenthesizedExpression.
FlinkSqlParserListener.prototype.exitParenthesizedExpression = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#last.
FlinkSqlParserListener.prototype.enterLast = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#last.
FlinkSqlParserListener.prototype.exitLast = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#star.
FlinkSqlParserListener.prototype.enterStar = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#star.
FlinkSqlParserListener.prototype.exitStar = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#subscript.
FlinkSqlParserListener.prototype.enterSubscript = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#subscript.
FlinkSqlParserListener.prototype.exitSubscript = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#searchedCase.
FlinkSqlParserListener.prototype.enterSearchedCase = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#searchedCase.
FlinkSqlParserListener.prototype.exitSearchedCase = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#position.
FlinkSqlParserListener.prototype.enterPosition = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#position.
FlinkSqlParserListener.prototype.exitPosition = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#first.
FlinkSqlParserListener.prototype.enterFirst = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#first.
FlinkSqlParserListener.prototype.exitFirst = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#tableAlias.
FlinkSqlParserListener.prototype.enterTableAlias = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#tableAlias.
FlinkSqlParserListener.prototype.exitTableAlias = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#identifierList.
FlinkSqlParserListener.prototype.enterIdentifierList = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#identifierList.
FlinkSqlParserListener.prototype.exitIdentifierList = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#identifierSeq.
FlinkSqlParserListener.prototype.enterIdentifierSeq = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#identifierSeq.
FlinkSqlParserListener.prototype.exitIdentifierSeq = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#identifier.
FlinkSqlParserListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#identifier.
FlinkSqlParserListener.prototype.exitIdentifier = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#unquotedIdentifier.
FlinkSqlParserListener.prototype.enterUnquotedIdentifier = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#unquotedIdentifier.
FlinkSqlParserListener.prototype.exitUnquotedIdentifier = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#quotedIdentifierAlternative.
FlinkSqlParserListener.prototype.enterQuotedIdentifierAlternative = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#quotedIdentifierAlternative.
FlinkSqlParserListener.prototype.exitQuotedIdentifierAlternative = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#quotedIdentifier.
FlinkSqlParserListener.prototype.enterQuotedIdentifier = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#quotedIdentifier.
FlinkSqlParserListener.prototype.exitQuotedIdentifier = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#whenClause.
FlinkSqlParserListener.prototype.enterWhenClause = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#whenClause.
FlinkSqlParserListener.prototype.exitWhenClause = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#uidList.
FlinkSqlParserListener.prototype.enterUidList = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#uidList.
FlinkSqlParserListener.prototype.exitUidList = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#uid.
FlinkSqlParserListener.prototype.enterUid = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#uid.
FlinkSqlParserListener.prototype.exitUid = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#withOption.
FlinkSqlParserListener.prototype.enterWithOption = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#withOption.
FlinkSqlParserListener.prototype.exitWithOption = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#ifNotExists.
FlinkSqlParserListener.prototype.enterIfNotExists = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#ifNotExists.
FlinkSqlParserListener.prototype.exitIfNotExists = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#ifExists.
FlinkSqlParserListener.prototype.enterIfExists = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#ifExists.
FlinkSqlParserListener.prototype.exitIfExists = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#keyValueDefinition.
FlinkSqlParserListener.prototype.enterKeyValueDefinition = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#keyValueDefinition.
FlinkSqlParserListener.prototype.exitKeyValueDefinition = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#logicalOperator.
FlinkSqlParserListener.prototype.enterLogicalOperator = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#logicalOperator.
FlinkSqlParserListener.prototype.exitLogicalOperator = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#comparisonOperator.
FlinkSqlParserListener.prototype.enterComparisonOperator = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#comparisonOperator.
FlinkSqlParserListener.prototype.exitComparisonOperator = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#bitOperator.
FlinkSqlParserListener.prototype.enterBitOperator = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#bitOperator.
FlinkSqlParserListener.prototype.exitBitOperator = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#mathOperator.
FlinkSqlParserListener.prototype.enterMathOperator = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#mathOperator.
FlinkSqlParserListener.prototype.exitMathOperator = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#unaryOperator.
FlinkSqlParserListener.prototype.enterUnaryOperator = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#unaryOperator.
FlinkSqlParserListener.prototype.exitUnaryOperator = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#fullColumnName.
FlinkSqlParserListener.prototype.enterFullColumnName = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#fullColumnName.
FlinkSqlParserListener.prototype.exitFullColumnName = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#constant.
FlinkSqlParserListener.prototype.enterConstant = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#constant.
FlinkSqlParserListener.prototype.exitConstant = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#stringLiteral.
FlinkSqlParserListener.prototype.enterStringLiteral = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#stringLiteral.
FlinkSqlParserListener.prototype.exitStringLiteral = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#decimalLiteral.
FlinkSqlParserListener.prototype.enterDecimalLiteral = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#decimalLiteral.
FlinkSqlParserListener.prototype.exitDecimalLiteral = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#booleanLiteral.
FlinkSqlParserListener.prototype.enterBooleanLiteral = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#booleanLiteral.
FlinkSqlParserListener.prototype.exitBooleanLiteral = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#setQuantifier.
FlinkSqlParserListener.prototype.enterSetQuantifier = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#setQuantifier.
FlinkSqlParserListener.prototype.exitSetQuantifier = function(ctx) {
};



exports.FlinkSqlParserListener = FlinkSqlParserListener;