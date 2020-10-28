// Generated from /Users/erindeng/Desktop/dt-sql-parser/src/grammar/flinksql/FlinkSqlParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by FlinkSqlParser.
function FlinkSqlParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

FlinkSqlParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
FlinkSqlParserListener.prototype.constructor = FlinkSqlParserListener;

// Enter a parse tree produced by FlinkSqlParser#program.
FlinkSqlParserListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#program.
FlinkSqlParserListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#statement.
FlinkSqlParserListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#statement.
FlinkSqlParserListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#sqlStatements.
FlinkSqlParserListener.prototype.enterSqlStatements = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#sqlStatements.
FlinkSqlParserListener.prototype.exitSqlStatements = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#sqlStatement.
FlinkSqlParserListener.prototype.enterSqlStatement = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#sqlStatement.
FlinkSqlParserListener.prototype.exitSqlStatement = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#emptyStatement.
FlinkSqlParserListener.prototype.enterEmptyStatement = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#emptyStatement.
FlinkSqlParserListener.prototype.exitEmptyStatement = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#ddlStatement.
FlinkSqlParserListener.prototype.enterDdlStatement = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#ddlStatement.
FlinkSqlParserListener.prototype.exitDdlStatement = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#dmlStatement.
FlinkSqlParserListener.prototype.enterDmlStatement = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#dmlStatement.
FlinkSqlParserListener.prototype.exitDmlStatement = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#createTable.
FlinkSqlParserListener.prototype.enterCreateTable = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#createTable.
FlinkSqlParserListener.prototype.exitCreateTable = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#columnOptionDefinition.
FlinkSqlParserListener.prototype.enterColumnOptionDefinition = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#columnOptionDefinition.
FlinkSqlParserListener.prototype.exitColumnOptionDefinition = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#columnName.
FlinkSqlParserListener.prototype.enterColumnName = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#columnName.
FlinkSqlParserListener.prototype.exitColumnName = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#columnType.
FlinkSqlParserListener.prototype.enterColumnType = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#columnType.
FlinkSqlParserListener.prototype.exitColumnType = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#partitionDefinition.
FlinkSqlParserListener.prototype.enterPartitionDefinition = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#partitionDefinition.
FlinkSqlParserListener.prototype.exitPartitionDefinition = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#partitionColumnDefinition.
FlinkSqlParserListener.prototype.enterPartitionColumnDefinition = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#partitionColumnDefinition.
FlinkSqlParserListener.prototype.exitPartitionColumnDefinition = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#partitionColumnName.
FlinkSqlParserListener.prototype.enterPartitionColumnName = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#partitionColumnName.
FlinkSqlParserListener.prototype.exitPartitionColumnName = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#createDatabase.
FlinkSqlParserListener.prototype.enterCreateDatabase = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#createDatabase.
FlinkSqlParserListener.prototype.exitCreateDatabase = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#createView.
FlinkSqlParserListener.prototype.enterCreateView = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#createView.
FlinkSqlParserListener.prototype.exitCreateView = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#createFunction.
FlinkSqlParserListener.prototype.enterCreateFunction = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#createFunction.
FlinkSqlParserListener.prototype.exitCreateFunction = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#alterTable.
FlinkSqlParserListener.prototype.enterAlterTable = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#alterTable.
FlinkSqlParserListener.prototype.exitAlterTable = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#renameDefinition.
FlinkSqlParserListener.prototype.enterRenameDefinition = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#renameDefinition.
FlinkSqlParserListener.prototype.exitRenameDefinition = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#setKeyValueDefinition.
FlinkSqlParserListener.prototype.enterSetKeyValueDefinition = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#setKeyValueDefinition.
FlinkSqlParserListener.prototype.exitSetKeyValueDefinition = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#alterDatabase.
FlinkSqlParserListener.prototype.enterAlterDatabase = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#alterDatabase.
FlinkSqlParserListener.prototype.exitAlterDatabase = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#alterFunction.
FlinkSqlParserListener.prototype.enterAlterFunction = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#alterFunction.
FlinkSqlParserListener.prototype.exitAlterFunction = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#dropTable.
FlinkSqlParserListener.prototype.enterDropTable = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#dropTable.
FlinkSqlParserListener.prototype.exitDropTable = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#dropDatabase.
FlinkSqlParserListener.prototype.enterDropDatabase = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#dropDatabase.
FlinkSqlParserListener.prototype.exitDropDatabase = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#dropView.
FlinkSqlParserListener.prototype.enterDropView = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#dropView.
FlinkSqlParserListener.prototype.exitDropView = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#dropFunction.
FlinkSqlParserListener.prototype.enterDropFunction = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#dropFunction.
FlinkSqlParserListener.prototype.exitDropFunction = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#selectStatement.
FlinkSqlParserListener.prototype.enterSelectStatement = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#selectStatement.
FlinkSqlParserListener.prototype.exitSelectStatement = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#insertStatement.
FlinkSqlParserListener.prototype.enterInsertStatement = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#insertStatement.
FlinkSqlParserListener.prototype.exitInsertStatement = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#insertPartitionDefinition.
FlinkSqlParserListener.prototype.enterInsertPartitionDefinition = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#insertPartitionDefinition.
FlinkSqlParserListener.prototype.exitInsertPartitionDefinition = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#valuesDefinition.
FlinkSqlParserListener.prototype.enterValuesDefinition = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#valuesDefinition.
FlinkSqlParserListener.prototype.exitValuesDefinition = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#valuesRowDefinition.
FlinkSqlParserListener.prototype.enterValuesRowDefinition = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#valuesRowDefinition.
FlinkSqlParserListener.prototype.exitValuesRowDefinition = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#uidList.
FlinkSqlParserListener.prototype.enterUidList = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#uidList.
FlinkSqlParserListener.prototype.exitUidList = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#uid.
FlinkSqlParserListener.prototype.enterUid = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#uid.
FlinkSqlParserListener.prototype.exitUid = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#withOption.
FlinkSqlParserListener.prototype.enterWithOption = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#withOption.
FlinkSqlParserListener.prototype.exitWithOption = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#ifNotExists.
FlinkSqlParserListener.prototype.enterIfNotExists = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#ifNotExists.
FlinkSqlParserListener.prototype.exitIfNotExists = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#ifExists.
FlinkSqlParserListener.prototype.enterIfExists = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#ifExists.
FlinkSqlParserListener.prototype.exitIfExists = function(ctx) {
};


// Enter a parse tree produced by FlinkSqlParser#keyValueDefinition.
FlinkSqlParserListener.prototype.enterKeyValueDefinition = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParser#keyValueDefinition.
FlinkSqlParserListener.prototype.exitKeyValueDefinition = function(ctx) {
};



exports.FlinkSqlParserListener = FlinkSqlParserListener;