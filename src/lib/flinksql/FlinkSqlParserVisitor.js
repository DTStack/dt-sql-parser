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


// Visit a parse tree produced by FlinkSqlParserParser#selectStatement.
FlinkSqlParserVisitor.prototype.visitSelectStatement = function(ctx) {
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



exports.FlinkSqlParserVisitor = FlinkSqlParserVisitor;