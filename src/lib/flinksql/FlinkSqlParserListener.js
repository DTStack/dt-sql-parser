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


// Enter a parse tree produced by FlinkSqlParserParser#queryStatement.
FlinkSqlParserListener.prototype.enterQueryStatement = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#queryStatement.
FlinkSqlParserListener.prototype.exitQueryStatement = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#selectStatements.
FlinkSqlParserListener.prototype.enterSelectStatements = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#selectStatements.
FlinkSqlParserListener.prototype.exitSelectStatements = function(ctx) {
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


// Enter a parse tree produced by FlinkSqlParserParser#matchRecognize.
FlinkSqlParserListener.prototype.enterMatchRecognize = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#matchRecognize.
FlinkSqlParserListener.prototype.exitMatchRecognize = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#tablePrimary.
FlinkSqlParserListener.prototype.enterTablePrimary = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#tablePrimary.
FlinkSqlParserListener.prototype.exitTablePrimary = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#dynamicTableOptions.
FlinkSqlParserListener.prototype.enterDynamicTableOptions = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#dynamicTableOptions.
FlinkSqlParserListener.prototype.exitDynamicTableOptions = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#joinCondition.
FlinkSqlParserListener.prototype.enterJoinCondition = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#joinCondition.
FlinkSqlParserListener.prototype.exitJoinCondition = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#booleanExpression.
FlinkSqlParserListener.prototype.enterBooleanExpression = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#booleanExpression.
FlinkSqlParserListener.prototype.exitBooleanExpression = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#groupItemDefinition.
FlinkSqlParserListener.prototype.enterGroupItemDefinition = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#groupItemDefinition.
FlinkSqlParserListener.prototype.exitGroupItemDefinition = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#selectWithoutFromDefinition.
FlinkSqlParserListener.prototype.enterSelectWithoutFromDefinition = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#selectWithoutFromDefinition.
FlinkSqlParserListener.prototype.exitSelectWithoutFromDefinition = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#projectItem.
FlinkSqlParserListener.prototype.enterProjectItem = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#projectItem.
FlinkSqlParserListener.prototype.exitProjectItem = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#queryOrderByDefinition.
FlinkSqlParserListener.prototype.enterQueryOrderByDefinition = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#queryOrderByDefinition.
FlinkSqlParserListener.prototype.exitQueryOrderByDefinition = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#orderItemDefition.
FlinkSqlParserListener.prototype.enterOrderItemDefition = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#orderItemDefition.
FlinkSqlParserListener.prototype.exitOrderItemDefition = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#queryLimitDefinition.
FlinkSqlParserListener.prototype.enterQueryLimitDefinition = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#queryLimitDefinition.
FlinkSqlParserListener.prototype.exitQueryLimitDefinition = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#countDefinition.
FlinkSqlParserListener.prototype.enterCountDefinition = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#countDefinition.
FlinkSqlParserListener.prototype.exitCountDefinition = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#queryOffsetDefinition.
FlinkSqlParserListener.prototype.enterQueryOffsetDefinition = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#queryOffsetDefinition.
FlinkSqlParserListener.prototype.exitQueryOffsetDefinition = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#queryFetchDefinition.
FlinkSqlParserListener.prototype.enterQueryFetchDefinition = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#queryFetchDefinition.
FlinkSqlParserListener.prototype.exitQueryFetchDefinition = function(ctx) {
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


// Enter a parse tree produced by FlinkSqlParserParser#expressions.
FlinkSqlParserListener.prototype.enterExpressions = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#expressions.
FlinkSqlParserListener.prototype.exitExpressions = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#isExpression.
FlinkSqlParserListener.prototype.enterIsExpression = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#isExpression.
FlinkSqlParserListener.prototype.exitIsExpression = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#notExpression.
FlinkSqlParserListener.prototype.enterNotExpression = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#notExpression.
FlinkSqlParserListener.prototype.exitNotExpression = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#logicalExpression.
FlinkSqlParserListener.prototype.enterLogicalExpression = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#logicalExpression.
FlinkSqlParserListener.prototype.exitLogicalExpression = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#predicateExpression.
FlinkSqlParserListener.prototype.enterPredicateExpression = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#predicateExpression.
FlinkSqlParserListener.prototype.exitPredicateExpression = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#expressionAtomPredicate.
FlinkSqlParserListener.prototype.enterExpressionAtomPredicate = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#expressionAtomPredicate.
FlinkSqlParserListener.prototype.exitExpressionAtomPredicate = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#inPredicate.
FlinkSqlParserListener.prototype.enterInPredicate = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#inPredicate.
FlinkSqlParserListener.prototype.exitInPredicate = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#subqueryComparasionPredicate.
FlinkSqlParserListener.prototype.enterSubqueryComparasionPredicate = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#subqueryComparasionPredicate.
FlinkSqlParserListener.prototype.exitSubqueryComparasionPredicate = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#betweenPredicate.
FlinkSqlParserListener.prototype.enterBetweenPredicate = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#betweenPredicate.
FlinkSqlParserListener.prototype.exitBetweenPredicate = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#binaryComparasionPredicate.
FlinkSqlParserListener.prototype.enterBinaryComparasionPredicate = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#binaryComparasionPredicate.
FlinkSqlParserListener.prototype.exitBinaryComparasionPredicate = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#likePredicate.
FlinkSqlParserListener.prototype.enterLikePredicate = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#likePredicate.
FlinkSqlParserListener.prototype.exitLikePredicate = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#unaryExpressionAtom.
FlinkSqlParserListener.prototype.enterUnaryExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#unaryExpressionAtom.
FlinkSqlParserListener.prototype.exitUnaryExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#subqueryExpessionAtom.
FlinkSqlParserListener.prototype.enterSubqueryExpessionAtom = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#subqueryExpessionAtom.
FlinkSqlParserListener.prototype.exitSubqueryExpessionAtom = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#existsExpessionAtom.
FlinkSqlParserListener.prototype.enterExistsExpessionAtom = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#existsExpessionAtom.
FlinkSqlParserListener.prototype.exitExistsExpessionAtom = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#constantExpressionAtom.
FlinkSqlParserListener.prototype.enterConstantExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#constantExpressionAtom.
FlinkSqlParserListener.prototype.exitConstantExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#binaryExpressionAtom.
FlinkSqlParserListener.prototype.enterBinaryExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#binaryExpressionAtom.
FlinkSqlParserListener.prototype.exitBinaryExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#fullColumnNameExpressionAtom.
FlinkSqlParserListener.prototype.enterFullColumnNameExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#fullColumnNameExpressionAtom.
FlinkSqlParserListener.prototype.exitFullColumnNameExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#bitExpressionAtom.
FlinkSqlParserListener.prototype.enterBitExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#bitExpressionAtom.
FlinkSqlParserListener.prototype.exitBitExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#nestedExpressionAtom.
FlinkSqlParserListener.prototype.enterNestedExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#nestedExpressionAtom.
FlinkSqlParserListener.prototype.exitNestedExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#nestedRowExpressionAtom.
FlinkSqlParserListener.prototype.enterNestedRowExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#nestedRowExpressionAtom.
FlinkSqlParserListener.prototype.exitNestedRowExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParserParser#mathExpressionAtom.
FlinkSqlParserListener.prototype.enterMathExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#mathExpressionAtom.
FlinkSqlParserListener.prototype.exitMathExpressionAtom = function(ctx) {
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



exports.FlinkSqlParserListener = FlinkSqlParserListener;