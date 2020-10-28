// Generated from /Users/erindeng/Desktop/dt-sql-parser/src/grammar/flinksql/FlinkSqlParser.g4 by ANTLR 4.8
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


// Visit a parse tree produced by FlinkSqlParser#createTable.
FlinkSqlParserVisitor.prototype.visitCreateTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#columnOptionDefinition.
FlinkSqlParserVisitor.prototype.visitColumnOptionDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#columnName.
FlinkSqlParserVisitor.prototype.visitColumnName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#columnType.
FlinkSqlParserVisitor.prototype.visitColumnType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#partitionDefinition.
FlinkSqlParserVisitor.prototype.visitPartitionDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#partitionColumnDefinition.
FlinkSqlParserVisitor.prototype.visitPartitionColumnDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#partitionColumnName.
FlinkSqlParserVisitor.prototype.visitPartitionColumnName = function(ctx) {
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


// Visit a parse tree produced by FlinkSqlParser#selectStatement.
FlinkSqlParserVisitor.prototype.visitSelectStatement = function(ctx) {
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


// Visit a parse tree produced by FlinkSqlParser#uidList.
FlinkSqlParserVisitor.prototype.visitUidList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FlinkSqlParser#uid.
FlinkSqlParserVisitor.prototype.visitUid = function(ctx) {
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


// Visit a parse tree produced by FlinkSqlParser#keyValueDefinition.
FlinkSqlParserVisitor.prototype.visitKeyValueDefinition = function(ctx) {
  return this.visitChildren(ctx);
};



exports.FlinkSqlParserVisitor = FlinkSqlParserVisitor;