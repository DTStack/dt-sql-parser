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


// Enter a parse tree produced by FlinkSqlParserParser#selectStatement.
FlinkSqlParserListener.prototype.enterSelectStatement = function(ctx) {
};

// Exit a parse tree produced by FlinkSqlParserParser#selectStatement.
FlinkSqlParserListener.prototype.exitSelectStatement = function(ctx) {
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



exports.FlinkSqlParserListener = FlinkSqlParserListener;