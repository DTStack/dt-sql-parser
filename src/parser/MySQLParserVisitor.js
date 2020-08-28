// Generated from /Users/ziv/Workspace/dt-sql-parser/src/grammar/mysql/MySQLParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by MySQLParser.

function MySQLParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

MySQLParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
MySQLParserVisitor.prototype.constructor = MySQLParserVisitor;

// Visit a parse tree produced by MySQLParser#statement.
MySQLParserVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#sqlStatements.
MySQLParserVisitor.prototype.visitSqlStatements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#sqlStatement.
MySQLParserVisitor.prototype.visitSqlStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#emptyStatement.
MySQLParserVisitor.prototype.visitEmptyStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#ddlStatement.
MySQLParserVisitor.prototype.visitDdlStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#dmlStatement.
MySQLParserVisitor.prototype.visitDmlStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#transactionStatement.
MySQLParserVisitor.prototype.visitTransactionStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#replicationStatement.
MySQLParserVisitor.prototype.visitReplicationStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#preparedStatement.
MySQLParserVisitor.prototype.visitPreparedStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#compoundStatement.
MySQLParserVisitor.prototype.visitCompoundStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#administrationStatement.
MySQLParserVisitor.prototype.visitAdministrationStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#utilityStatement.
MySQLParserVisitor.prototype.visitUtilityStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#createDatabase.
MySQLParserVisitor.prototype.visitCreateDatabase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#createEvent.
MySQLParserVisitor.prototype.visitCreateEvent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#createIndex.
MySQLParserVisitor.prototype.visitCreateIndex = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#createLogfileGroup.
MySQLParserVisitor.prototype.visitCreateLogfileGroup = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#createProcedure.
MySQLParserVisitor.prototype.visitCreateProcedure = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#createFunction.
MySQLParserVisitor.prototype.visitCreateFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#createServer.
MySQLParserVisitor.prototype.visitCreateServer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#copyCreateTable.
MySQLParserVisitor.prototype.visitCopyCreateTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#queryCreateTable.
MySQLParserVisitor.prototype.visitQueryCreateTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#columnCreateTable.
MySQLParserVisitor.prototype.visitColumnCreateTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#createTablespaceInnodb.
MySQLParserVisitor.prototype.visitCreateTablespaceInnodb = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#createTablespaceNdb.
MySQLParserVisitor.prototype.visitCreateTablespaceNdb = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#createTrigger.
MySQLParserVisitor.prototype.visitCreateTrigger = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#createView.
MySQLParserVisitor.prototype.visitCreateView = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#createDatabaseOption.
MySQLParserVisitor.prototype.visitCreateDatabaseOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#ownerStatement.
MySQLParserVisitor.prototype.visitOwnerStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#preciseSchedule.
MySQLParserVisitor.prototype.visitPreciseSchedule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#intervalSchedule.
MySQLParserVisitor.prototype.visitIntervalSchedule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#timestampValue.
MySQLParserVisitor.prototype.visitTimestampValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#intervalExpr.
MySQLParserVisitor.prototype.visitIntervalExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#intervalType.
MySQLParserVisitor.prototype.visitIntervalType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#enableType.
MySQLParserVisitor.prototype.visitEnableType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#indexType.
MySQLParserVisitor.prototype.visitIndexType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#indexOption.
MySQLParserVisitor.prototype.visitIndexOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#procedureParameter.
MySQLParserVisitor.prototype.visitProcedureParameter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#functionParameter.
MySQLParserVisitor.prototype.visitFunctionParameter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#routineComment.
MySQLParserVisitor.prototype.visitRoutineComment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#routineLanguage.
MySQLParserVisitor.prototype.visitRoutineLanguage = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#routineBehavior.
MySQLParserVisitor.prototype.visitRoutineBehavior = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#routineData.
MySQLParserVisitor.prototype.visitRoutineData = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#routineSecurity.
MySQLParserVisitor.prototype.visitRoutineSecurity = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#serverOption.
MySQLParserVisitor.prototype.visitServerOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#createDefinitions.
MySQLParserVisitor.prototype.visitCreateDefinitions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#columnDeclaration.
MySQLParserVisitor.prototype.visitColumnDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#constraintDeclaration.
MySQLParserVisitor.prototype.visitConstraintDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#indexDeclaration.
MySQLParserVisitor.prototype.visitIndexDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#columnDefinition.
MySQLParserVisitor.prototype.visitColumnDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#nullColumnConstraint.
MySQLParserVisitor.prototype.visitNullColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#defaultColumnConstraint.
MySQLParserVisitor.prototype.visitDefaultColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#autoIncrementColumnConstraint.
MySQLParserVisitor.prototype.visitAutoIncrementColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#primaryKeyColumnConstraint.
MySQLParserVisitor.prototype.visitPrimaryKeyColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#uniqueKeyColumnConstraint.
MySQLParserVisitor.prototype.visitUniqueKeyColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#commentColumnConstraint.
MySQLParserVisitor.prototype.visitCommentColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#formatColumnConstraint.
MySQLParserVisitor.prototype.visitFormatColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#storageColumnConstraint.
MySQLParserVisitor.prototype.visitStorageColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#referenceColumnConstraint.
MySQLParserVisitor.prototype.visitReferenceColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#collateColumnConstraint.
MySQLParserVisitor.prototype.visitCollateColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#generatedColumnConstraint.
MySQLParserVisitor.prototype.visitGeneratedColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#serialDefaultColumnConstraint.
MySQLParserVisitor.prototype.visitSerialDefaultColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#checkColumnConstraint.
MySQLParserVisitor.prototype.visitCheckColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#primaryKeyTableConstraint.
MySQLParserVisitor.prototype.visitPrimaryKeyTableConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#uniqueKeyTableConstraint.
MySQLParserVisitor.prototype.visitUniqueKeyTableConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#foreignKeyTableConstraint.
MySQLParserVisitor.prototype.visitForeignKeyTableConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#checkTableConstraint.
MySQLParserVisitor.prototype.visitCheckTableConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#referenceDefinition.
MySQLParserVisitor.prototype.visitReferenceDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#referenceAction.
MySQLParserVisitor.prototype.visitReferenceAction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#referenceControlType.
MySQLParserVisitor.prototype.visitReferenceControlType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#simpleIndexDeclaration.
MySQLParserVisitor.prototype.visitSimpleIndexDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#specialIndexDeclaration.
MySQLParserVisitor.prototype.visitSpecialIndexDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tableOptionEngine.
MySQLParserVisitor.prototype.visitTableOptionEngine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tableOptionAutoIncrement.
MySQLParserVisitor.prototype.visitTableOptionAutoIncrement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tableOptionAverage.
MySQLParserVisitor.prototype.visitTableOptionAverage = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tableOptionCharset.
MySQLParserVisitor.prototype.visitTableOptionCharset = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tableOptionChecksum.
MySQLParserVisitor.prototype.visitTableOptionChecksum = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tableOptionCollate.
MySQLParserVisitor.prototype.visitTableOptionCollate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tableOptionComment.
MySQLParserVisitor.prototype.visitTableOptionComment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tableOptionCompression.
MySQLParserVisitor.prototype.visitTableOptionCompression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tableOptionConnection.
MySQLParserVisitor.prototype.visitTableOptionConnection = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tableOptionDataDirectory.
MySQLParserVisitor.prototype.visitTableOptionDataDirectory = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tableOptionDelay.
MySQLParserVisitor.prototype.visitTableOptionDelay = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tableOptionEncryption.
MySQLParserVisitor.prototype.visitTableOptionEncryption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tableOptionIndexDirectory.
MySQLParserVisitor.prototype.visitTableOptionIndexDirectory = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tableOptionInsertMethod.
MySQLParserVisitor.prototype.visitTableOptionInsertMethod = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tableOptionKeyBlockSize.
MySQLParserVisitor.prototype.visitTableOptionKeyBlockSize = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tableOptionMaxRows.
MySQLParserVisitor.prototype.visitTableOptionMaxRows = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tableOptionMinRows.
MySQLParserVisitor.prototype.visitTableOptionMinRows = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tableOptionPackKeys.
MySQLParserVisitor.prototype.visitTableOptionPackKeys = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tableOptionPassword.
MySQLParserVisitor.prototype.visitTableOptionPassword = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tableOptionRowFormat.
MySQLParserVisitor.prototype.visitTableOptionRowFormat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tableOptionRecalculation.
MySQLParserVisitor.prototype.visitTableOptionRecalculation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tableOptionPersistent.
MySQLParserVisitor.prototype.visitTableOptionPersistent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tableOptionSamplePage.
MySQLParserVisitor.prototype.visitTableOptionSamplePage = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tableOptionTablespace.
MySQLParserVisitor.prototype.visitTableOptionTablespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tableOptionUnion.
MySQLParserVisitor.prototype.visitTableOptionUnion = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tablespaceStorage.
MySQLParserVisitor.prototype.visitTablespaceStorage = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#partitionDefinitions.
MySQLParserVisitor.prototype.visitPartitionDefinitions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#partitionFunctionHash.
MySQLParserVisitor.prototype.visitPartitionFunctionHash = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#partitionFunctionKey.
MySQLParserVisitor.prototype.visitPartitionFunctionKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#partitionFunctionRange.
MySQLParserVisitor.prototype.visitPartitionFunctionRange = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#partitionFunctionList.
MySQLParserVisitor.prototype.visitPartitionFunctionList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#subPartitionFunctionHash.
MySQLParserVisitor.prototype.visitSubPartitionFunctionHash = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#subPartitionFunctionKey.
MySQLParserVisitor.prototype.visitSubPartitionFunctionKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#partitionComparision.
MySQLParserVisitor.prototype.visitPartitionComparision = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#partitionListAtom.
MySQLParserVisitor.prototype.visitPartitionListAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#partitionListVector.
MySQLParserVisitor.prototype.visitPartitionListVector = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#partitionSimple.
MySQLParserVisitor.prototype.visitPartitionSimple = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#partitionDefinerAtom.
MySQLParserVisitor.prototype.visitPartitionDefinerAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#partitionDefinerVector.
MySQLParserVisitor.prototype.visitPartitionDefinerVector = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#subpartitionDefinition.
MySQLParserVisitor.prototype.visitSubpartitionDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#partitionOptionEngine.
MySQLParserVisitor.prototype.visitPartitionOptionEngine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#partitionOptionComment.
MySQLParserVisitor.prototype.visitPartitionOptionComment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#partitionOptionDataDirectory.
MySQLParserVisitor.prototype.visitPartitionOptionDataDirectory = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#partitionOptionIndexDirectory.
MySQLParserVisitor.prototype.visitPartitionOptionIndexDirectory = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#partitionOptionMaxRows.
MySQLParserVisitor.prototype.visitPartitionOptionMaxRows = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#partitionOptionMinRows.
MySQLParserVisitor.prototype.visitPartitionOptionMinRows = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#partitionOptionTablespace.
MySQLParserVisitor.prototype.visitPartitionOptionTablespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#partitionOptionNodeGroup.
MySQLParserVisitor.prototype.visitPartitionOptionNodeGroup = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterSimpleDatabase.
MySQLParserVisitor.prototype.visitAlterSimpleDatabase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterUpgradeName.
MySQLParserVisitor.prototype.visitAlterUpgradeName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterEvent.
MySQLParserVisitor.prototype.visitAlterEvent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterFunction.
MySQLParserVisitor.prototype.visitAlterFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterInstance.
MySQLParserVisitor.prototype.visitAlterInstance = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterLogfileGroup.
MySQLParserVisitor.prototype.visitAlterLogfileGroup = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterProcedure.
MySQLParserVisitor.prototype.visitAlterProcedure = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterServer.
MySQLParserVisitor.prototype.visitAlterServer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterTable.
MySQLParserVisitor.prototype.visitAlterTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterTablespace.
MySQLParserVisitor.prototype.visitAlterTablespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterView.
MySQLParserVisitor.prototype.visitAlterView = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByTableOption.
MySQLParserVisitor.prototype.visitAlterByTableOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByAddColumn.
MySQLParserVisitor.prototype.visitAlterByAddColumn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByAddColumns.
MySQLParserVisitor.prototype.visitAlterByAddColumns = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByAddIndex.
MySQLParserVisitor.prototype.visitAlterByAddIndex = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByAddPrimaryKey.
MySQLParserVisitor.prototype.visitAlterByAddPrimaryKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByAddUniqueKey.
MySQLParserVisitor.prototype.visitAlterByAddUniqueKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByAddSpecialIndex.
MySQLParserVisitor.prototype.visitAlterByAddSpecialIndex = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByAddForeignKey.
MySQLParserVisitor.prototype.visitAlterByAddForeignKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByAddCheckTableConstraint.
MySQLParserVisitor.prototype.visitAlterByAddCheckTableConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterBySetAlgorithm.
MySQLParserVisitor.prototype.visitAlterBySetAlgorithm = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByChangeDefault.
MySQLParserVisitor.prototype.visitAlterByChangeDefault = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByChangeColumn.
MySQLParserVisitor.prototype.visitAlterByChangeColumn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByRenameColumn.
MySQLParserVisitor.prototype.visitAlterByRenameColumn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByLock.
MySQLParserVisitor.prototype.visitAlterByLock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByModifyColumn.
MySQLParserVisitor.prototype.visitAlterByModifyColumn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByDropColumn.
MySQLParserVisitor.prototype.visitAlterByDropColumn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByDropPrimaryKey.
MySQLParserVisitor.prototype.visitAlterByDropPrimaryKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByRenameIndex.
MySQLParserVisitor.prototype.visitAlterByRenameIndex = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByAlterIndexVisibility.
MySQLParserVisitor.prototype.visitAlterByAlterIndexVisibility = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByDropIndex.
MySQLParserVisitor.prototype.visitAlterByDropIndex = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByDropForeignKey.
MySQLParserVisitor.prototype.visitAlterByDropForeignKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByDisableKeys.
MySQLParserVisitor.prototype.visitAlterByDisableKeys = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByEnableKeys.
MySQLParserVisitor.prototype.visitAlterByEnableKeys = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByRename.
MySQLParserVisitor.prototype.visitAlterByRename = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByOrder.
MySQLParserVisitor.prototype.visitAlterByOrder = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByConvertCharset.
MySQLParserVisitor.prototype.visitAlterByConvertCharset = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByDefaultCharset.
MySQLParserVisitor.prototype.visitAlterByDefaultCharset = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByDiscardTablespace.
MySQLParserVisitor.prototype.visitAlterByDiscardTablespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByImportTablespace.
MySQLParserVisitor.prototype.visitAlterByImportTablespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByForce.
MySQLParserVisitor.prototype.visitAlterByForce = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByValidate.
MySQLParserVisitor.prototype.visitAlterByValidate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByAddPartition.
MySQLParserVisitor.prototype.visitAlterByAddPartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByDropPartition.
MySQLParserVisitor.prototype.visitAlterByDropPartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByDiscardPartition.
MySQLParserVisitor.prototype.visitAlterByDiscardPartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByImportPartition.
MySQLParserVisitor.prototype.visitAlterByImportPartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByTruncatePartition.
MySQLParserVisitor.prototype.visitAlterByTruncatePartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByCoalescePartition.
MySQLParserVisitor.prototype.visitAlterByCoalescePartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByReorganizePartition.
MySQLParserVisitor.prototype.visitAlterByReorganizePartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByExchangePartition.
MySQLParserVisitor.prototype.visitAlterByExchangePartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByAnalyzePartition.
MySQLParserVisitor.prototype.visitAlterByAnalyzePartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByCheckPartition.
MySQLParserVisitor.prototype.visitAlterByCheckPartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByOptimizePartition.
MySQLParserVisitor.prototype.visitAlterByOptimizePartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByRebuildPartition.
MySQLParserVisitor.prototype.visitAlterByRebuildPartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByRepairPartition.
MySQLParserVisitor.prototype.visitAlterByRepairPartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByRemovePartitioning.
MySQLParserVisitor.prototype.visitAlterByRemovePartitioning = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterByUpgradePartitioning.
MySQLParserVisitor.prototype.visitAlterByUpgradePartitioning = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#dropDatabase.
MySQLParserVisitor.prototype.visitDropDatabase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#dropEvent.
MySQLParserVisitor.prototype.visitDropEvent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#dropIndex.
MySQLParserVisitor.prototype.visitDropIndex = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#dropLogfileGroup.
MySQLParserVisitor.prototype.visitDropLogfileGroup = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#dropProcedure.
MySQLParserVisitor.prototype.visitDropProcedure = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#dropFunction.
MySQLParserVisitor.prototype.visitDropFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#dropServer.
MySQLParserVisitor.prototype.visitDropServer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#dropTable.
MySQLParserVisitor.prototype.visitDropTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#dropTablespace.
MySQLParserVisitor.prototype.visitDropTablespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#dropTrigger.
MySQLParserVisitor.prototype.visitDropTrigger = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#dropView.
MySQLParserVisitor.prototype.visitDropView = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#renameTable.
MySQLParserVisitor.prototype.visitRenameTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#renameTableClause.
MySQLParserVisitor.prototype.visitRenameTableClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#truncateTable.
MySQLParserVisitor.prototype.visitTruncateTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#callStatement.
MySQLParserVisitor.prototype.visitCallStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#deleteStatement.
MySQLParserVisitor.prototype.visitDeleteStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#doStatement.
MySQLParserVisitor.prototype.visitDoStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#handlerStatement.
MySQLParserVisitor.prototype.visitHandlerStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#insertStatement.
MySQLParserVisitor.prototype.visitInsertStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#loadDataStatement.
MySQLParserVisitor.prototype.visitLoadDataStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#loadXmlStatement.
MySQLParserVisitor.prototype.visitLoadXmlStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#replaceStatement.
MySQLParserVisitor.prototype.visitReplaceStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#simpleSelect.
MySQLParserVisitor.prototype.visitSimpleSelect = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#parenthesisSelect.
MySQLParserVisitor.prototype.visitParenthesisSelect = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#unionSelect.
MySQLParserVisitor.prototype.visitUnionSelect = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#unionParenthesisSelect.
MySQLParserVisitor.prototype.visitUnionParenthesisSelect = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#updateStatement.
MySQLParserVisitor.prototype.visitUpdateStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#insertStatementValue.
MySQLParserVisitor.prototype.visitInsertStatementValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#updatedElement.
MySQLParserVisitor.prototype.visitUpdatedElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#assignmentField.
MySQLParserVisitor.prototype.visitAssignmentField = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#lockClause.
MySQLParserVisitor.prototype.visitLockClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#singleDeleteStatement.
MySQLParserVisitor.prototype.visitSingleDeleteStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#multipleDeleteStatement.
MySQLParserVisitor.prototype.visitMultipleDeleteStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#handlerOpenStatement.
MySQLParserVisitor.prototype.visitHandlerOpenStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#handlerReadIndexStatement.
MySQLParserVisitor.prototype.visitHandlerReadIndexStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#handlerReadStatement.
MySQLParserVisitor.prototype.visitHandlerReadStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#handlerCloseStatement.
MySQLParserVisitor.prototype.visitHandlerCloseStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#singleUpdateStatement.
MySQLParserVisitor.prototype.visitSingleUpdateStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#multipleUpdateStatement.
MySQLParserVisitor.prototype.visitMultipleUpdateStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#orderByClause.
MySQLParserVisitor.prototype.visitOrderByClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#orderByExpression.
MySQLParserVisitor.prototype.visitOrderByExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tableSources.
MySQLParserVisitor.prototype.visitTableSources = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tableSourceBase.
MySQLParserVisitor.prototype.visitTableSourceBase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tableSourceNested.
MySQLParserVisitor.prototype.visitTableSourceNested = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#atomTableItem.
MySQLParserVisitor.prototype.visitAtomTableItem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#subqueryTableItem.
MySQLParserVisitor.prototype.visitSubqueryTableItem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tableSourcesItem.
MySQLParserVisitor.prototype.visitTableSourcesItem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#indexHint.
MySQLParserVisitor.prototype.visitIndexHint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#indexHintType.
MySQLParserVisitor.prototype.visitIndexHintType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#innerJoin.
MySQLParserVisitor.prototype.visitInnerJoin = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#straightJoin.
MySQLParserVisitor.prototype.visitStraightJoin = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#outerJoin.
MySQLParserVisitor.prototype.visitOuterJoin = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#naturalJoin.
MySQLParserVisitor.prototype.visitNaturalJoin = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#queryExpression.
MySQLParserVisitor.prototype.visitQueryExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#queryExpressionNointo.
MySQLParserVisitor.prototype.visitQueryExpressionNointo = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#querySpecification.
MySQLParserVisitor.prototype.visitQuerySpecification = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#querySpecificationNointo.
MySQLParserVisitor.prototype.visitQuerySpecificationNointo = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#unionParenthesis.
MySQLParserVisitor.prototype.visitUnionParenthesis = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#unionStatement.
MySQLParserVisitor.prototype.visitUnionStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#selectSpec.
MySQLParserVisitor.prototype.visitSelectSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#selectElements.
MySQLParserVisitor.prototype.visitSelectElements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#selectStarElement.
MySQLParserVisitor.prototype.visitSelectStarElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#selectColumnElement.
MySQLParserVisitor.prototype.visitSelectColumnElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#selectFunctionElement.
MySQLParserVisitor.prototype.visitSelectFunctionElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#selectExpressionElement.
MySQLParserVisitor.prototype.visitSelectExpressionElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#selectIntoVariables.
MySQLParserVisitor.prototype.visitSelectIntoVariables = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#selectIntoDumpFile.
MySQLParserVisitor.prototype.visitSelectIntoDumpFile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#selectIntoTextFile.
MySQLParserVisitor.prototype.visitSelectIntoTextFile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#selectFieldsInto.
MySQLParserVisitor.prototype.visitSelectFieldsInto = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#selectLinesInto.
MySQLParserVisitor.prototype.visitSelectLinesInto = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#fromClause.
MySQLParserVisitor.prototype.visitFromClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#groupByItem.
MySQLParserVisitor.prototype.visitGroupByItem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#limitClause.
MySQLParserVisitor.prototype.visitLimitClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#limitClauseAtom.
MySQLParserVisitor.prototype.visitLimitClauseAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#startTransaction.
MySQLParserVisitor.prototype.visitStartTransaction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#beginWork.
MySQLParserVisitor.prototype.visitBeginWork = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#commitWork.
MySQLParserVisitor.prototype.visitCommitWork = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#rollbackWork.
MySQLParserVisitor.prototype.visitRollbackWork = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#savepointStatement.
MySQLParserVisitor.prototype.visitSavepointStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#rollbackStatement.
MySQLParserVisitor.prototype.visitRollbackStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#releaseStatement.
MySQLParserVisitor.prototype.visitReleaseStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#lockTables.
MySQLParserVisitor.prototype.visitLockTables = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#unlockTables.
MySQLParserVisitor.prototype.visitUnlockTables = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#setAutocommitStatement.
MySQLParserVisitor.prototype.visitSetAutocommitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#setTransactionStatement.
MySQLParserVisitor.prototype.visitSetTransactionStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#transactionMode.
MySQLParserVisitor.prototype.visitTransactionMode = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#lockTableElement.
MySQLParserVisitor.prototype.visitLockTableElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#lockAction.
MySQLParserVisitor.prototype.visitLockAction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#transactionOption.
MySQLParserVisitor.prototype.visitTransactionOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#transactionLevel.
MySQLParserVisitor.prototype.visitTransactionLevel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#changeMaster.
MySQLParserVisitor.prototype.visitChangeMaster = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#changeReplicationFilter.
MySQLParserVisitor.prototype.visitChangeReplicationFilter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#purgeBinaryLogs.
MySQLParserVisitor.prototype.visitPurgeBinaryLogs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#resetMaster.
MySQLParserVisitor.prototype.visitResetMaster = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#resetSlave.
MySQLParserVisitor.prototype.visitResetSlave = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#startSlave.
MySQLParserVisitor.prototype.visitStartSlave = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#stopSlave.
MySQLParserVisitor.prototype.visitStopSlave = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#startGroupReplication.
MySQLParserVisitor.prototype.visitStartGroupReplication = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#stopGroupReplication.
MySQLParserVisitor.prototype.visitStopGroupReplication = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#masterStringOption.
MySQLParserVisitor.prototype.visitMasterStringOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#masterDecimalOption.
MySQLParserVisitor.prototype.visitMasterDecimalOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#masterBoolOption.
MySQLParserVisitor.prototype.visitMasterBoolOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#masterRealOption.
MySQLParserVisitor.prototype.visitMasterRealOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#masterUidListOption.
MySQLParserVisitor.prototype.visitMasterUidListOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#stringMasterOption.
MySQLParserVisitor.prototype.visitStringMasterOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#decimalMasterOption.
MySQLParserVisitor.prototype.visitDecimalMasterOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#boolMasterOption.
MySQLParserVisitor.prototype.visitBoolMasterOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#channelOption.
MySQLParserVisitor.prototype.visitChannelOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#doDbReplication.
MySQLParserVisitor.prototype.visitDoDbReplication = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#ignoreDbReplication.
MySQLParserVisitor.prototype.visitIgnoreDbReplication = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#doTableReplication.
MySQLParserVisitor.prototype.visitDoTableReplication = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#ignoreTableReplication.
MySQLParserVisitor.prototype.visitIgnoreTableReplication = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#wildDoTableReplication.
MySQLParserVisitor.prototype.visitWildDoTableReplication = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#wildIgnoreTableReplication.
MySQLParserVisitor.prototype.visitWildIgnoreTableReplication = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#rewriteDbReplication.
MySQLParserVisitor.prototype.visitRewriteDbReplication = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tablePair.
MySQLParserVisitor.prototype.visitTablePair = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#threadType.
MySQLParserVisitor.prototype.visitThreadType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#gtidsUntilOption.
MySQLParserVisitor.prototype.visitGtidsUntilOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#masterLogUntilOption.
MySQLParserVisitor.prototype.visitMasterLogUntilOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#relayLogUntilOption.
MySQLParserVisitor.prototype.visitRelayLogUntilOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#sqlGapsUntilOption.
MySQLParserVisitor.prototype.visitSqlGapsUntilOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#userConnectionOption.
MySQLParserVisitor.prototype.visitUserConnectionOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#passwordConnectionOption.
MySQLParserVisitor.prototype.visitPasswordConnectionOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#defaultAuthConnectionOption.
MySQLParserVisitor.prototype.visitDefaultAuthConnectionOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#pluginDirConnectionOption.
MySQLParserVisitor.prototype.visitPluginDirConnectionOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#gtuidSet.
MySQLParserVisitor.prototype.visitGtuidSet = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#xaStartTransaction.
MySQLParserVisitor.prototype.visitXaStartTransaction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#xaEndTransaction.
MySQLParserVisitor.prototype.visitXaEndTransaction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#xaPrepareStatement.
MySQLParserVisitor.prototype.visitXaPrepareStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#xaCommitWork.
MySQLParserVisitor.prototype.visitXaCommitWork = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#xaRollbackWork.
MySQLParserVisitor.prototype.visitXaRollbackWork = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#xaRecoverWork.
MySQLParserVisitor.prototype.visitXaRecoverWork = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#prepareStatement.
MySQLParserVisitor.prototype.visitPrepareStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#executeStatement.
MySQLParserVisitor.prototype.visitExecuteStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#deallocatePrepare.
MySQLParserVisitor.prototype.visitDeallocatePrepare = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#routineBody.
MySQLParserVisitor.prototype.visitRoutineBody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#blockStatement.
MySQLParserVisitor.prototype.visitBlockStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#caseStatement.
MySQLParserVisitor.prototype.visitCaseStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#ifStatement.
MySQLParserVisitor.prototype.visitIfStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#iterateStatement.
MySQLParserVisitor.prototype.visitIterateStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#leaveStatement.
MySQLParserVisitor.prototype.visitLeaveStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#loopStatement.
MySQLParserVisitor.prototype.visitLoopStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#repeatStatement.
MySQLParserVisitor.prototype.visitRepeatStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#returnStatement.
MySQLParserVisitor.prototype.visitReturnStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#whileStatement.
MySQLParserVisitor.prototype.visitWhileStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#CloseCursor.
MySQLParserVisitor.prototype.visitCloseCursor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#FetchCursor.
MySQLParserVisitor.prototype.visitFetchCursor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#OpenCursor.
MySQLParserVisitor.prototype.visitOpenCursor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#declareVariable.
MySQLParserVisitor.prototype.visitDeclareVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#declareCondition.
MySQLParserVisitor.prototype.visitDeclareCondition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#declareCursor.
MySQLParserVisitor.prototype.visitDeclareCursor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#declareHandler.
MySQLParserVisitor.prototype.visitDeclareHandler = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#handlerConditionCode.
MySQLParserVisitor.prototype.visitHandlerConditionCode = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#handlerConditionState.
MySQLParserVisitor.prototype.visitHandlerConditionState = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#handlerConditionName.
MySQLParserVisitor.prototype.visitHandlerConditionName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#handlerConditionWarning.
MySQLParserVisitor.prototype.visitHandlerConditionWarning = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#handlerConditionNotfound.
MySQLParserVisitor.prototype.visitHandlerConditionNotfound = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#handlerConditionException.
MySQLParserVisitor.prototype.visitHandlerConditionException = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#procedureSqlStatement.
MySQLParserVisitor.prototype.visitProcedureSqlStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#caseAlternative.
MySQLParserVisitor.prototype.visitCaseAlternative = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#elifAlternative.
MySQLParserVisitor.prototype.visitElifAlternative = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterUserMysqlV56.
MySQLParserVisitor.prototype.visitAlterUserMysqlV56 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#alterUserMysqlV57.
MySQLParserVisitor.prototype.visitAlterUserMysqlV57 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#createUserMysqlV56.
MySQLParserVisitor.prototype.visitCreateUserMysqlV56 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#createUserMysqlV57.
MySQLParserVisitor.prototype.visitCreateUserMysqlV57 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#dropUser.
MySQLParserVisitor.prototype.visitDropUser = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#grantStatement.
MySQLParserVisitor.prototype.visitGrantStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#grantProxy.
MySQLParserVisitor.prototype.visitGrantProxy = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#renameUser.
MySQLParserVisitor.prototype.visitRenameUser = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#detailRevoke.
MySQLParserVisitor.prototype.visitDetailRevoke = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#shortRevoke.
MySQLParserVisitor.prototype.visitShortRevoke = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#revokeProxy.
MySQLParserVisitor.prototype.visitRevokeProxy = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#setPasswordStatement.
MySQLParserVisitor.prototype.visitSetPasswordStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#userSpecification.
MySQLParserVisitor.prototype.visitUserSpecification = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#passwordAuthOption.
MySQLParserVisitor.prototype.visitPasswordAuthOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#stringAuthOption.
MySQLParserVisitor.prototype.visitStringAuthOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#hashAuthOption.
MySQLParserVisitor.prototype.visitHashAuthOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#simpleAuthOption.
MySQLParserVisitor.prototype.visitSimpleAuthOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tlsOption.
MySQLParserVisitor.prototype.visitTlsOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#userResourceOption.
MySQLParserVisitor.prototype.visitUserResourceOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#userPasswordOption.
MySQLParserVisitor.prototype.visitUserPasswordOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#userLockOption.
MySQLParserVisitor.prototype.visitUserLockOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#privelegeClause.
MySQLParserVisitor.prototype.visitPrivelegeClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#privilege.
MySQLParserVisitor.prototype.visitPrivilege = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#currentSchemaPriviLevel.
MySQLParserVisitor.prototype.visitCurrentSchemaPriviLevel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#globalPrivLevel.
MySQLParserVisitor.prototype.visitGlobalPrivLevel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#definiteSchemaPrivLevel.
MySQLParserVisitor.prototype.visitDefiniteSchemaPrivLevel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#definiteFullTablePrivLevel.
MySQLParserVisitor.prototype.visitDefiniteFullTablePrivLevel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#definiteFullTablePrivLevel2.
MySQLParserVisitor.prototype.visitDefiniteFullTablePrivLevel2 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#definiteTablePrivLevel.
MySQLParserVisitor.prototype.visitDefiniteTablePrivLevel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#renameUserClause.
MySQLParserVisitor.prototype.visitRenameUserClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#analyzeTable.
MySQLParserVisitor.prototype.visitAnalyzeTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#checkTable.
MySQLParserVisitor.prototype.visitCheckTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#checksumTable.
MySQLParserVisitor.prototype.visitChecksumTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#optimizeTable.
MySQLParserVisitor.prototype.visitOptimizeTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#repairTable.
MySQLParserVisitor.prototype.visitRepairTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#checkTableOption.
MySQLParserVisitor.prototype.visitCheckTableOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#createUdfunction.
MySQLParserVisitor.prototype.visitCreateUdfunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#installPlugin.
MySQLParserVisitor.prototype.visitInstallPlugin = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#uninstallPlugin.
MySQLParserVisitor.prototype.visitUninstallPlugin = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#setVariable.
MySQLParserVisitor.prototype.visitSetVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#setCharset.
MySQLParserVisitor.prototype.visitSetCharset = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#setNames.
MySQLParserVisitor.prototype.visitSetNames = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#setPassword.
MySQLParserVisitor.prototype.visitSetPassword = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#setTransaction.
MySQLParserVisitor.prototype.visitSetTransaction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#setAutocommit.
MySQLParserVisitor.prototype.visitSetAutocommit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#setNewValueInsideTrigger.
MySQLParserVisitor.prototype.visitSetNewValueInsideTrigger = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#showMasterLogs.
MySQLParserVisitor.prototype.visitShowMasterLogs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#showLogEvents.
MySQLParserVisitor.prototype.visitShowLogEvents = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#showObjectFilter.
MySQLParserVisitor.prototype.visitShowObjectFilter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#showColumns.
MySQLParserVisitor.prototype.visitShowColumns = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#showCreateDb.
MySQLParserVisitor.prototype.visitShowCreateDb = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#showCreateFullIdObject.
MySQLParserVisitor.prototype.visitShowCreateFullIdObject = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#showCreateUser.
MySQLParserVisitor.prototype.visitShowCreateUser = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#showEngine.
MySQLParserVisitor.prototype.visitShowEngine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#showGlobalInfo.
MySQLParserVisitor.prototype.visitShowGlobalInfo = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#showErrors.
MySQLParserVisitor.prototype.visitShowErrors = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#showCountErrors.
MySQLParserVisitor.prototype.visitShowCountErrors = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#showSchemaFilter.
MySQLParserVisitor.prototype.visitShowSchemaFilter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#showRoutine.
MySQLParserVisitor.prototype.visitShowRoutine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#showGrants.
MySQLParserVisitor.prototype.visitShowGrants = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#showIndexes.
MySQLParserVisitor.prototype.visitShowIndexes = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#showOpenTables.
MySQLParserVisitor.prototype.visitShowOpenTables = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#showProfile.
MySQLParserVisitor.prototype.visitShowProfile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#showSlaveStatus.
MySQLParserVisitor.prototype.visitShowSlaveStatus = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#variableClause.
MySQLParserVisitor.prototype.visitVariableClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#showCommonEntity.
MySQLParserVisitor.prototype.visitShowCommonEntity = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#showFilter.
MySQLParserVisitor.prototype.visitShowFilter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#showGlobalInfoClause.
MySQLParserVisitor.prototype.visitShowGlobalInfoClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#showSchemaEntity.
MySQLParserVisitor.prototype.visitShowSchemaEntity = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#showProfileType.
MySQLParserVisitor.prototype.visitShowProfileType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#binlogStatement.
MySQLParserVisitor.prototype.visitBinlogStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#cacheIndexStatement.
MySQLParserVisitor.prototype.visitCacheIndexStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#flushStatement.
MySQLParserVisitor.prototype.visitFlushStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#killStatement.
MySQLParserVisitor.prototype.visitKillStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#loadIndexIntoCache.
MySQLParserVisitor.prototype.visitLoadIndexIntoCache = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#resetStatement.
MySQLParserVisitor.prototype.visitResetStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#shutdownStatement.
MySQLParserVisitor.prototype.visitShutdownStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tableIndexes.
MySQLParserVisitor.prototype.visitTableIndexes = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#simpleFlushOption.
MySQLParserVisitor.prototype.visitSimpleFlushOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#channelFlushOption.
MySQLParserVisitor.prototype.visitChannelFlushOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tableFlushOption.
MySQLParserVisitor.prototype.visitTableFlushOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#flushTableOption.
MySQLParserVisitor.prototype.visitFlushTableOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#loadedTableIndexes.
MySQLParserVisitor.prototype.visitLoadedTableIndexes = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#simpleDescribeStatement.
MySQLParserVisitor.prototype.visitSimpleDescribeStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#fullDescribeStatement.
MySQLParserVisitor.prototype.visitFullDescribeStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#helpStatement.
MySQLParserVisitor.prototype.visitHelpStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#useStatement.
MySQLParserVisitor.prototype.visitUseStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#signalStatement.
MySQLParserVisitor.prototype.visitSignalStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#resignalStatement.
MySQLParserVisitor.prototype.visitResignalStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#signalConditionInformation.
MySQLParserVisitor.prototype.visitSignalConditionInformation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#diagnosticsStatement.
MySQLParserVisitor.prototype.visitDiagnosticsStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#diagnosticsConditionInformationName.
MySQLParserVisitor.prototype.visitDiagnosticsConditionInformationName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#describeStatements.
MySQLParserVisitor.prototype.visitDescribeStatements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#describeConnection.
MySQLParserVisitor.prototype.visitDescribeConnection = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#fullId.
MySQLParserVisitor.prototype.visitFullId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tableName.
MySQLParserVisitor.prototype.visitTableName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#fullColumnName.
MySQLParserVisitor.prototype.visitFullColumnName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#indexColumnName.
MySQLParserVisitor.prototype.visitIndexColumnName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#userName.
MySQLParserVisitor.prototype.visitUserName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#mysqlVariable.
MySQLParserVisitor.prototype.visitMysqlVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#charsetName.
MySQLParserVisitor.prototype.visitCharsetName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#collationName.
MySQLParserVisitor.prototype.visitCollationName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#engineName.
MySQLParserVisitor.prototype.visitEngineName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#uuidSet.
MySQLParserVisitor.prototype.visitUuidSet = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#xid.
MySQLParserVisitor.prototype.visitXid = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#xuidStringId.
MySQLParserVisitor.prototype.visitXuidStringId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#authPlugin.
MySQLParserVisitor.prototype.visitAuthPlugin = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#uid.
MySQLParserVisitor.prototype.visitUid = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#simpleId.
MySQLParserVisitor.prototype.visitSimpleId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#dottedId.
MySQLParserVisitor.prototype.visitDottedId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#decimalLiteral.
MySQLParserVisitor.prototype.visitDecimalLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#fileSizeLiteral.
MySQLParserVisitor.prototype.visitFileSizeLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#stringLiteral.
MySQLParserVisitor.prototype.visitStringLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#booleanLiteral.
MySQLParserVisitor.prototype.visitBooleanLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#hexadecimalLiteral.
MySQLParserVisitor.prototype.visitHexadecimalLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#nullNotnull.
MySQLParserVisitor.prototype.visitNullNotnull = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#constant.
MySQLParserVisitor.prototype.visitConstant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#stringDataType.
MySQLParserVisitor.prototype.visitStringDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#nationalStringDataType.
MySQLParserVisitor.prototype.visitNationalStringDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#nationalVaryingStringDataType.
MySQLParserVisitor.prototype.visitNationalVaryingStringDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#dimensionDataType.
MySQLParserVisitor.prototype.visitDimensionDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#simpleDataType.
MySQLParserVisitor.prototype.visitSimpleDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#collectionDataType.
MySQLParserVisitor.prototype.visitCollectionDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#spatialDataType.
MySQLParserVisitor.prototype.visitSpatialDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#longVarcharDataType.
MySQLParserVisitor.prototype.visitLongVarcharDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#longVarbinaryDataType.
MySQLParserVisitor.prototype.visitLongVarbinaryDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#collectionOptions.
MySQLParserVisitor.prototype.visitCollectionOptions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#convertedDataType.
MySQLParserVisitor.prototype.visitConvertedDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#lengthOneDimension.
MySQLParserVisitor.prototype.visitLengthOneDimension = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#lengthTwoDimension.
MySQLParserVisitor.prototype.visitLengthTwoDimension = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#lengthTwoOptionalDimension.
MySQLParserVisitor.prototype.visitLengthTwoOptionalDimension = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#uidList.
MySQLParserVisitor.prototype.visitUidList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#tables.
MySQLParserVisitor.prototype.visitTables = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#indexColumnNames.
MySQLParserVisitor.prototype.visitIndexColumnNames = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#expressions.
MySQLParserVisitor.prototype.visitExpressions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#expressionsWithDefaults.
MySQLParserVisitor.prototype.visitExpressionsWithDefaults = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#constants.
MySQLParserVisitor.prototype.visitConstants = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#simpleStrings.
MySQLParserVisitor.prototype.visitSimpleStrings = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#userVariables.
MySQLParserVisitor.prototype.visitUserVariables = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#defaultValue.
MySQLParserVisitor.prototype.visitDefaultValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#currentTimestamp.
MySQLParserVisitor.prototype.visitCurrentTimestamp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#expressionOrDefault.
MySQLParserVisitor.prototype.visitExpressionOrDefault = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#ifExists.
MySQLParserVisitor.prototype.visitIfExists = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#ifNotExists.
MySQLParserVisitor.prototype.visitIfNotExists = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#specificFunctionCall.
MySQLParserVisitor.prototype.visitSpecificFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#aggregateFunctionCall.
MySQLParserVisitor.prototype.visitAggregateFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#scalarFunctionCall.
MySQLParserVisitor.prototype.visitScalarFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#udfFunctionCall.
MySQLParserVisitor.prototype.visitUdfFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#passwordFunctionCall.
MySQLParserVisitor.prototype.visitPasswordFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#simpleFunctionCall.
MySQLParserVisitor.prototype.visitSimpleFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#dataTypeFunctionCall.
MySQLParserVisitor.prototype.visitDataTypeFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#valuesFunctionCall.
MySQLParserVisitor.prototype.visitValuesFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#caseFunctionCall.
MySQLParserVisitor.prototype.visitCaseFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#charFunctionCall.
MySQLParserVisitor.prototype.visitCharFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#positionFunctionCall.
MySQLParserVisitor.prototype.visitPositionFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#substrFunctionCall.
MySQLParserVisitor.prototype.visitSubstrFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#trimFunctionCall.
MySQLParserVisitor.prototype.visitTrimFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#weightFunctionCall.
MySQLParserVisitor.prototype.visitWeightFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#extractFunctionCall.
MySQLParserVisitor.prototype.visitExtractFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#getFormatFunctionCall.
MySQLParserVisitor.prototype.visitGetFormatFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#caseFuncAlternative.
MySQLParserVisitor.prototype.visitCaseFuncAlternative = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#levelWeightList.
MySQLParserVisitor.prototype.visitLevelWeightList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#levelWeightRange.
MySQLParserVisitor.prototype.visitLevelWeightRange = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#levelInWeightListElement.
MySQLParserVisitor.prototype.visitLevelInWeightListElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#aggregateWindowedFunction.
MySQLParserVisitor.prototype.visitAggregateWindowedFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#scalarFunctionName.
MySQLParserVisitor.prototype.visitScalarFunctionName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#passwordFunctionClause.
MySQLParserVisitor.prototype.visitPasswordFunctionClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#functionArgs.
MySQLParserVisitor.prototype.visitFunctionArgs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#functionArg.
MySQLParserVisitor.prototype.visitFunctionArg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#isExpression.
MySQLParserVisitor.prototype.visitIsExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#notExpression.
MySQLParserVisitor.prototype.visitNotExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#logicalExpression.
MySQLParserVisitor.prototype.visitLogicalExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#predicateExpression.
MySQLParserVisitor.prototype.visitPredicateExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#soundsLikePredicate.
MySQLParserVisitor.prototype.visitSoundsLikePredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#expressionAtomPredicate.
MySQLParserVisitor.prototype.visitExpressionAtomPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#inPredicate.
MySQLParserVisitor.prototype.visitInPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#subqueryComparasionPredicate.
MySQLParserVisitor.prototype.visitSubqueryComparasionPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#betweenPredicate.
MySQLParserVisitor.prototype.visitBetweenPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#binaryComparasionPredicate.
MySQLParserVisitor.prototype.visitBinaryComparasionPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#isNullPredicate.
MySQLParserVisitor.prototype.visitIsNullPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#likePredicate.
MySQLParserVisitor.prototype.visitLikePredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#regexpPredicate.
MySQLParserVisitor.prototype.visitRegexpPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#unaryExpressionAtom.
MySQLParserVisitor.prototype.visitUnaryExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#collateExpressionAtom.
MySQLParserVisitor.prototype.visitCollateExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#subqueryExpessionAtom.
MySQLParserVisitor.prototype.visitSubqueryExpessionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#mysqlVariableExpressionAtom.
MySQLParserVisitor.prototype.visitMysqlVariableExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#nestedExpressionAtom.
MySQLParserVisitor.prototype.visitNestedExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#nestedRowExpressionAtom.
MySQLParserVisitor.prototype.visitNestedRowExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#mathExpressionAtom.
MySQLParserVisitor.prototype.visitMathExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#intervalExpressionAtom.
MySQLParserVisitor.prototype.visitIntervalExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#existsExpessionAtom.
MySQLParserVisitor.prototype.visitExistsExpessionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#constantExpressionAtom.
MySQLParserVisitor.prototype.visitConstantExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#functionCallExpressionAtom.
MySQLParserVisitor.prototype.visitFunctionCallExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#binaryExpressionAtom.
MySQLParserVisitor.prototype.visitBinaryExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#fullColumnNameExpressionAtom.
MySQLParserVisitor.prototype.visitFullColumnNameExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#bitExpressionAtom.
MySQLParserVisitor.prototype.visitBitExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#unaryOperator.
MySQLParserVisitor.prototype.visitUnaryOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#comparisonOperator.
MySQLParserVisitor.prototype.visitComparisonOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#logicalOperator.
MySQLParserVisitor.prototype.visitLogicalOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#bitOperator.
MySQLParserVisitor.prototype.visitBitOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#mathOperator.
MySQLParserVisitor.prototype.visitMathOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#charsetNameBase.
MySQLParserVisitor.prototype.visitCharsetNameBase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#transactionLevelBase.
MySQLParserVisitor.prototype.visitTransactionLevelBase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#privilegesBase.
MySQLParserVisitor.prototype.visitPrivilegesBase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#intervalTypeBase.
MySQLParserVisitor.prototype.visitIntervalTypeBase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#dataTypeBase.
MySQLParserVisitor.prototype.visitDataTypeBase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#keywordsCanBeId.
MySQLParserVisitor.prototype.visitKeywordsCanBeId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySQLParser#functionNameBase.
MySQLParserVisitor.prototype.visitFunctionNameBase = function(ctx) {
  return this.visitChildren(ctx);
};



exports.MySQLParserVisitor = MySQLParserVisitor;