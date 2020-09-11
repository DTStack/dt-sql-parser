// Generated from /Users/ziv/Workspace/dt-sql-parser/src/grammar/generic/SqlParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by SqlParser.

function SqlParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

SqlParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
SqlParserVisitor.prototype.constructor = SqlParserVisitor;

// Visit a parse tree produced by SqlParser#program.
SqlParserVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#statement.
SqlParserVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#sqlStatements.
SqlParserVisitor.prototype.visitSqlStatements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#sqlStatement.
SqlParserVisitor.prototype.visitSqlStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#emptyStatement.
SqlParserVisitor.prototype.visitEmptyStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#ddlStatement.
SqlParserVisitor.prototype.visitDdlStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#dmlStatement.
SqlParserVisitor.prototype.visitDmlStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#transactionStatement.
SqlParserVisitor.prototype.visitTransactionStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#replicationStatement.
SqlParserVisitor.prototype.visitReplicationStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#preparedStatement.
SqlParserVisitor.prototype.visitPreparedStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#compoundStatement.
SqlParserVisitor.prototype.visitCompoundStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#administrationStatement.
SqlParserVisitor.prototype.visitAdministrationStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#utilityStatement.
SqlParserVisitor.prototype.visitUtilityStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#createDatabase.
SqlParserVisitor.prototype.visitCreateDatabase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#createEvent.
SqlParserVisitor.prototype.visitCreateEvent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#createIndex.
SqlParserVisitor.prototype.visitCreateIndex = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#createLogfileGroup.
SqlParserVisitor.prototype.visitCreateLogfileGroup = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#createProcedure.
SqlParserVisitor.prototype.visitCreateProcedure = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#createFunction.
SqlParserVisitor.prototype.visitCreateFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#createServer.
SqlParserVisitor.prototype.visitCreateServer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#copyCreateTable.
SqlParserVisitor.prototype.visitCopyCreateTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#queryCreateTable.
SqlParserVisitor.prototype.visitQueryCreateTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#columnCreateTable.
SqlParserVisitor.prototype.visitColumnCreateTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#createTablespaceInnodb.
SqlParserVisitor.prototype.visitCreateTablespaceInnodb = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#createTablespaceNdb.
SqlParserVisitor.prototype.visitCreateTablespaceNdb = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#createTrigger.
SqlParserVisitor.prototype.visitCreateTrigger = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#createView.
SqlParserVisitor.prototype.visitCreateView = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#createDatabaseOption.
SqlParserVisitor.prototype.visitCreateDatabaseOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#ownerStatement.
SqlParserVisitor.prototype.visitOwnerStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#preciseSchedule.
SqlParserVisitor.prototype.visitPreciseSchedule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#intervalSchedule.
SqlParserVisitor.prototype.visitIntervalSchedule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#timestampValue.
SqlParserVisitor.prototype.visitTimestampValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#intervalExpr.
SqlParserVisitor.prototype.visitIntervalExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#intervalType.
SqlParserVisitor.prototype.visitIntervalType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#enableType.
SqlParserVisitor.prototype.visitEnableType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#indexType.
SqlParserVisitor.prototype.visitIndexType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#indexOption.
SqlParserVisitor.prototype.visitIndexOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#procedureParameter.
SqlParserVisitor.prototype.visitProcedureParameter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#functionParameter.
SqlParserVisitor.prototype.visitFunctionParameter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#routineComment.
SqlParserVisitor.prototype.visitRoutineComment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#routineLanguage.
SqlParserVisitor.prototype.visitRoutineLanguage = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#routineBehavior.
SqlParserVisitor.prototype.visitRoutineBehavior = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#routineData.
SqlParserVisitor.prototype.visitRoutineData = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#routineSecurity.
SqlParserVisitor.prototype.visitRoutineSecurity = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#serverOption.
SqlParserVisitor.prototype.visitServerOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#createDefinitions.
SqlParserVisitor.prototype.visitCreateDefinitions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#columnDeclaration.
SqlParserVisitor.prototype.visitColumnDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#constraintDeclaration.
SqlParserVisitor.prototype.visitConstraintDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#indexDeclaration.
SqlParserVisitor.prototype.visitIndexDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#columnDefinition.
SqlParserVisitor.prototype.visitColumnDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#nullColumnConstraint.
SqlParserVisitor.prototype.visitNullColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#defaultColumnConstraint.
SqlParserVisitor.prototype.visitDefaultColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#autoIncrementColumnConstraint.
SqlParserVisitor.prototype.visitAutoIncrementColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#primaryKeyColumnConstraint.
SqlParserVisitor.prototype.visitPrimaryKeyColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#uniqueKeyColumnConstraint.
SqlParserVisitor.prototype.visitUniqueKeyColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#commentColumnConstraint.
SqlParserVisitor.prototype.visitCommentColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#formatColumnConstraint.
SqlParserVisitor.prototype.visitFormatColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#storageColumnConstraint.
SqlParserVisitor.prototype.visitStorageColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#referenceColumnConstraint.
SqlParserVisitor.prototype.visitReferenceColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#collateColumnConstraint.
SqlParserVisitor.prototype.visitCollateColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#generatedColumnConstraint.
SqlParserVisitor.prototype.visitGeneratedColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#serialDefaultColumnConstraint.
SqlParserVisitor.prototype.visitSerialDefaultColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#checkColumnConstraint.
SqlParserVisitor.prototype.visitCheckColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#primaryKeyTableConstraint.
SqlParserVisitor.prototype.visitPrimaryKeyTableConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#uniqueKeyTableConstraint.
SqlParserVisitor.prototype.visitUniqueKeyTableConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#foreignKeyTableConstraint.
SqlParserVisitor.prototype.visitForeignKeyTableConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#checkTableConstraint.
SqlParserVisitor.prototype.visitCheckTableConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#referenceDefinition.
SqlParserVisitor.prototype.visitReferenceDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#referenceAction.
SqlParserVisitor.prototype.visitReferenceAction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#referenceControlType.
SqlParserVisitor.prototype.visitReferenceControlType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#simpleIndexDeclaration.
SqlParserVisitor.prototype.visitSimpleIndexDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#specialIndexDeclaration.
SqlParserVisitor.prototype.visitSpecialIndexDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableOptionEngine.
SqlParserVisitor.prototype.visitTableOptionEngine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableOptionAutoIncrement.
SqlParserVisitor.prototype.visitTableOptionAutoIncrement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableOptionAverage.
SqlParserVisitor.prototype.visitTableOptionAverage = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableOptionCharset.
SqlParserVisitor.prototype.visitTableOptionCharset = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableOptionChecksum.
SqlParserVisitor.prototype.visitTableOptionChecksum = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableOptionCollate.
SqlParserVisitor.prototype.visitTableOptionCollate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableOptionComment.
SqlParserVisitor.prototype.visitTableOptionComment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableOptionCompression.
SqlParserVisitor.prototype.visitTableOptionCompression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableOptionConnection.
SqlParserVisitor.prototype.visitTableOptionConnection = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableOptionDataDirectory.
SqlParserVisitor.prototype.visitTableOptionDataDirectory = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableOptionDelay.
SqlParserVisitor.prototype.visitTableOptionDelay = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableOptionEncryption.
SqlParserVisitor.prototype.visitTableOptionEncryption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableOptionIndexDirectory.
SqlParserVisitor.prototype.visitTableOptionIndexDirectory = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableOptionInsertMethod.
SqlParserVisitor.prototype.visitTableOptionInsertMethod = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableOptionKeyBlockSize.
SqlParserVisitor.prototype.visitTableOptionKeyBlockSize = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableOptionMaxRows.
SqlParserVisitor.prototype.visitTableOptionMaxRows = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableOptionMinRows.
SqlParserVisitor.prototype.visitTableOptionMinRows = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableOptionPackKeys.
SqlParserVisitor.prototype.visitTableOptionPackKeys = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableOptionPassword.
SqlParserVisitor.prototype.visitTableOptionPassword = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableOptionRowFormat.
SqlParserVisitor.prototype.visitTableOptionRowFormat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableOptionRecalculation.
SqlParserVisitor.prototype.visitTableOptionRecalculation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableOptionPersistent.
SqlParserVisitor.prototype.visitTableOptionPersistent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableOptionSamplePage.
SqlParserVisitor.prototype.visitTableOptionSamplePage = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableOptionTablespace.
SqlParserVisitor.prototype.visitTableOptionTablespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableOptionUnion.
SqlParserVisitor.prototype.visitTableOptionUnion = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tablespaceStorage.
SqlParserVisitor.prototype.visitTablespaceStorage = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#partitionDefinitions.
SqlParserVisitor.prototype.visitPartitionDefinitions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#partitionFunctionHash.
SqlParserVisitor.prototype.visitPartitionFunctionHash = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#partitionFunctionKey.
SqlParserVisitor.prototype.visitPartitionFunctionKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#partitionFunctionRange.
SqlParserVisitor.prototype.visitPartitionFunctionRange = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#partitionFunctionList.
SqlParserVisitor.prototype.visitPartitionFunctionList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#subPartitionFunctionHash.
SqlParserVisitor.prototype.visitSubPartitionFunctionHash = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#subPartitionFunctionKey.
SqlParserVisitor.prototype.visitSubPartitionFunctionKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#partitionComparision.
SqlParserVisitor.prototype.visitPartitionComparision = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#partitionListAtom.
SqlParserVisitor.prototype.visitPartitionListAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#partitionListVector.
SqlParserVisitor.prototype.visitPartitionListVector = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#partitionSimple.
SqlParserVisitor.prototype.visitPartitionSimple = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#partitionDefinerAtom.
SqlParserVisitor.prototype.visitPartitionDefinerAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#partitionDefinerVector.
SqlParserVisitor.prototype.visitPartitionDefinerVector = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#subpartitionDefinition.
SqlParserVisitor.prototype.visitSubpartitionDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#partitionOptionEngine.
SqlParserVisitor.prototype.visitPartitionOptionEngine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#partitionOptionComment.
SqlParserVisitor.prototype.visitPartitionOptionComment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#partitionOptionDataDirectory.
SqlParserVisitor.prototype.visitPartitionOptionDataDirectory = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#partitionOptionIndexDirectory.
SqlParserVisitor.prototype.visitPartitionOptionIndexDirectory = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#partitionOptionMaxRows.
SqlParserVisitor.prototype.visitPartitionOptionMaxRows = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#partitionOptionMinRows.
SqlParserVisitor.prototype.visitPartitionOptionMinRows = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#partitionOptionTablespace.
SqlParserVisitor.prototype.visitPartitionOptionTablespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#partitionOptionNodeGroup.
SqlParserVisitor.prototype.visitPartitionOptionNodeGroup = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterSimpleDatabase.
SqlParserVisitor.prototype.visitAlterSimpleDatabase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterUpgradeName.
SqlParserVisitor.prototype.visitAlterUpgradeName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterEvent.
SqlParserVisitor.prototype.visitAlterEvent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterFunction.
SqlParserVisitor.prototype.visitAlterFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterInstance.
SqlParserVisitor.prototype.visitAlterInstance = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterLogfileGroup.
SqlParserVisitor.prototype.visitAlterLogfileGroup = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterProcedure.
SqlParserVisitor.prototype.visitAlterProcedure = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterServer.
SqlParserVisitor.prototype.visitAlterServer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterTable.
SqlParserVisitor.prototype.visitAlterTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterTablespace.
SqlParserVisitor.prototype.visitAlterTablespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterView.
SqlParserVisitor.prototype.visitAlterView = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByTableOption.
SqlParserVisitor.prototype.visitAlterByTableOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByAddColumn.
SqlParserVisitor.prototype.visitAlterByAddColumn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByAddColumns.
SqlParserVisitor.prototype.visitAlterByAddColumns = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByAddIndex.
SqlParserVisitor.prototype.visitAlterByAddIndex = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByAddPrimaryKey.
SqlParserVisitor.prototype.visitAlterByAddPrimaryKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByAddUniqueKey.
SqlParserVisitor.prototype.visitAlterByAddUniqueKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByAddSpecialIndex.
SqlParserVisitor.prototype.visitAlterByAddSpecialIndex = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByAddForeignKey.
SqlParserVisitor.prototype.visitAlterByAddForeignKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByAddCheckTableConstraint.
SqlParserVisitor.prototype.visitAlterByAddCheckTableConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterBySetAlgorithm.
SqlParserVisitor.prototype.visitAlterBySetAlgorithm = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByChangeDefault.
SqlParserVisitor.prototype.visitAlterByChangeDefault = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByChangeColumn.
SqlParserVisitor.prototype.visitAlterByChangeColumn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByRenameColumn.
SqlParserVisitor.prototype.visitAlterByRenameColumn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByLock.
SqlParserVisitor.prototype.visitAlterByLock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByModifyColumn.
SqlParserVisitor.prototype.visitAlterByModifyColumn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByDropColumn.
SqlParserVisitor.prototype.visitAlterByDropColumn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByDropPrimaryKey.
SqlParserVisitor.prototype.visitAlterByDropPrimaryKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByRenameIndex.
SqlParserVisitor.prototype.visitAlterByRenameIndex = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByAlterIndexVisibility.
SqlParserVisitor.prototype.visitAlterByAlterIndexVisibility = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByDropIndex.
SqlParserVisitor.prototype.visitAlterByDropIndex = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByDropForeignKey.
SqlParserVisitor.prototype.visitAlterByDropForeignKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByDisableKeys.
SqlParserVisitor.prototype.visitAlterByDisableKeys = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByEnableKeys.
SqlParserVisitor.prototype.visitAlterByEnableKeys = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByRename.
SqlParserVisitor.prototype.visitAlterByRename = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByOrder.
SqlParserVisitor.prototype.visitAlterByOrder = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByConvertCharset.
SqlParserVisitor.prototype.visitAlterByConvertCharset = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByDefaultCharset.
SqlParserVisitor.prototype.visitAlterByDefaultCharset = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByDiscardTablespace.
SqlParserVisitor.prototype.visitAlterByDiscardTablespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByImportTablespace.
SqlParserVisitor.prototype.visitAlterByImportTablespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByForce.
SqlParserVisitor.prototype.visitAlterByForce = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByValidate.
SqlParserVisitor.prototype.visitAlterByValidate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByAddPartition.
SqlParserVisitor.prototype.visitAlterByAddPartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByDropPartition.
SqlParserVisitor.prototype.visitAlterByDropPartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByDiscardPartition.
SqlParserVisitor.prototype.visitAlterByDiscardPartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByImportPartition.
SqlParserVisitor.prototype.visitAlterByImportPartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByTruncatePartition.
SqlParserVisitor.prototype.visitAlterByTruncatePartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByCoalescePartition.
SqlParserVisitor.prototype.visitAlterByCoalescePartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByReorganizePartition.
SqlParserVisitor.prototype.visitAlterByReorganizePartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByExchangePartition.
SqlParserVisitor.prototype.visitAlterByExchangePartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByAnalyzePartition.
SqlParserVisitor.prototype.visitAlterByAnalyzePartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByCheckPartition.
SqlParserVisitor.prototype.visitAlterByCheckPartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByOptimizePartition.
SqlParserVisitor.prototype.visitAlterByOptimizePartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByRebuildPartition.
SqlParserVisitor.prototype.visitAlterByRebuildPartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByRepairPartition.
SqlParserVisitor.prototype.visitAlterByRepairPartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByRemovePartitioning.
SqlParserVisitor.prototype.visitAlterByRemovePartitioning = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterByUpgradePartitioning.
SqlParserVisitor.prototype.visitAlterByUpgradePartitioning = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#dropDatabase.
SqlParserVisitor.prototype.visitDropDatabase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#dropEvent.
SqlParserVisitor.prototype.visitDropEvent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#dropIndex.
SqlParserVisitor.prototype.visitDropIndex = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#dropLogfileGroup.
SqlParserVisitor.prototype.visitDropLogfileGroup = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#dropProcedure.
SqlParserVisitor.prototype.visitDropProcedure = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#dropFunction.
SqlParserVisitor.prototype.visitDropFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#dropServer.
SqlParserVisitor.prototype.visitDropServer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#dropTable.
SqlParserVisitor.prototype.visitDropTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#dropTablespace.
SqlParserVisitor.prototype.visitDropTablespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#dropTrigger.
SqlParserVisitor.prototype.visitDropTrigger = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#dropView.
SqlParserVisitor.prototype.visitDropView = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#renameTable.
SqlParserVisitor.prototype.visitRenameTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#renameTableClause.
SqlParserVisitor.prototype.visitRenameTableClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#truncateTable.
SqlParserVisitor.prototype.visitTruncateTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#callStatement.
SqlParserVisitor.prototype.visitCallStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#deleteStatement.
SqlParserVisitor.prototype.visitDeleteStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#doStatement.
SqlParserVisitor.prototype.visitDoStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#handlerStatement.
SqlParserVisitor.prototype.visitHandlerStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#insertStatement.
SqlParserVisitor.prototype.visitInsertStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#loadDataStatement.
SqlParserVisitor.prototype.visitLoadDataStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#loadXmlStatement.
SqlParserVisitor.prototype.visitLoadXmlStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#replaceStatement.
SqlParserVisitor.prototype.visitReplaceStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#simpleSelect.
SqlParserVisitor.prototype.visitSimpleSelect = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#parenthesisSelect.
SqlParserVisitor.prototype.visitParenthesisSelect = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#unionSelect.
SqlParserVisitor.prototype.visitUnionSelect = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#unionParenthesisSelect.
SqlParserVisitor.prototype.visitUnionParenthesisSelect = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#updateStatement.
SqlParserVisitor.prototype.visitUpdateStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#insertStatementValue.
SqlParserVisitor.prototype.visitInsertStatementValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#updatedElement.
SqlParserVisitor.prototype.visitUpdatedElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#assignmentField.
SqlParserVisitor.prototype.visitAssignmentField = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#lockClause.
SqlParserVisitor.prototype.visitLockClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#singleDeleteStatement.
SqlParserVisitor.prototype.visitSingleDeleteStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#multipleDeleteStatement.
SqlParserVisitor.prototype.visitMultipleDeleteStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#handlerOpenStatement.
SqlParserVisitor.prototype.visitHandlerOpenStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#handlerReadIndexStatement.
SqlParserVisitor.prototype.visitHandlerReadIndexStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#handlerReadStatement.
SqlParserVisitor.prototype.visitHandlerReadStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#handlerCloseStatement.
SqlParserVisitor.prototype.visitHandlerCloseStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#singleUpdateStatement.
SqlParserVisitor.prototype.visitSingleUpdateStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#multipleUpdateStatement.
SqlParserVisitor.prototype.visitMultipleUpdateStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#orderByClause.
SqlParserVisitor.prototype.visitOrderByClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#orderByExpression.
SqlParserVisitor.prototype.visitOrderByExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableSources.
SqlParserVisitor.prototype.visitTableSources = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableSourceBase.
SqlParserVisitor.prototype.visitTableSourceBase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableSourceNested.
SqlParserVisitor.prototype.visitTableSourceNested = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#atomTableItem.
SqlParserVisitor.prototype.visitAtomTableItem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#subqueryTableItem.
SqlParserVisitor.prototype.visitSubqueryTableItem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableSourcesItem.
SqlParserVisitor.prototype.visitTableSourcesItem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#indexHint.
SqlParserVisitor.prototype.visitIndexHint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#indexHintType.
SqlParserVisitor.prototype.visitIndexHintType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#innerJoin.
SqlParserVisitor.prototype.visitInnerJoin = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#straightJoin.
SqlParserVisitor.prototype.visitStraightJoin = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#outerJoin.
SqlParserVisitor.prototype.visitOuterJoin = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#naturalJoin.
SqlParserVisitor.prototype.visitNaturalJoin = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#queryExpression.
SqlParserVisitor.prototype.visitQueryExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#queryExpressionNointo.
SqlParserVisitor.prototype.visitQueryExpressionNointo = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#querySpecification.
SqlParserVisitor.prototype.visitQuerySpecification = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#querySpecificationNointo.
SqlParserVisitor.prototype.visitQuerySpecificationNointo = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#unionParenthesis.
SqlParserVisitor.prototype.visitUnionParenthesis = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#unionStatement.
SqlParserVisitor.prototype.visitUnionStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#selectSpec.
SqlParserVisitor.prototype.visitSelectSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#selectElements.
SqlParserVisitor.prototype.visitSelectElements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#selectStarElement.
SqlParserVisitor.prototype.visitSelectStarElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#selectColumnElement.
SqlParserVisitor.prototype.visitSelectColumnElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#selectFunctionElement.
SqlParserVisitor.prototype.visitSelectFunctionElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#selectExpressionElement.
SqlParserVisitor.prototype.visitSelectExpressionElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#selectIntoVariables.
SqlParserVisitor.prototype.visitSelectIntoVariables = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#selectIntoDumpFile.
SqlParserVisitor.prototype.visitSelectIntoDumpFile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#selectIntoTextFile.
SqlParserVisitor.prototype.visitSelectIntoTextFile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#selectFieldsInto.
SqlParserVisitor.prototype.visitSelectFieldsInto = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#selectLinesInto.
SqlParserVisitor.prototype.visitSelectLinesInto = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#fromClause.
SqlParserVisitor.prototype.visitFromClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#groupByItem.
SqlParserVisitor.prototype.visitGroupByItem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#limitClause.
SqlParserVisitor.prototype.visitLimitClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#limitClauseAtom.
SqlParserVisitor.prototype.visitLimitClauseAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#startTransaction.
SqlParserVisitor.prototype.visitStartTransaction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#beginWork.
SqlParserVisitor.prototype.visitBeginWork = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#commitWork.
SqlParserVisitor.prototype.visitCommitWork = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#rollbackWork.
SqlParserVisitor.prototype.visitRollbackWork = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#savepointStatement.
SqlParserVisitor.prototype.visitSavepointStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#rollbackStatement.
SqlParserVisitor.prototype.visitRollbackStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#releaseStatement.
SqlParserVisitor.prototype.visitReleaseStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#lockTables.
SqlParserVisitor.prototype.visitLockTables = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#unlockTables.
SqlParserVisitor.prototype.visitUnlockTables = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#setAutocommitStatement.
SqlParserVisitor.prototype.visitSetAutocommitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#setTransactionStatement.
SqlParserVisitor.prototype.visitSetTransactionStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#transactionMode.
SqlParserVisitor.prototype.visitTransactionMode = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#lockTableElement.
SqlParserVisitor.prototype.visitLockTableElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#lockAction.
SqlParserVisitor.prototype.visitLockAction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#transactionOption.
SqlParserVisitor.prototype.visitTransactionOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#transactionLevel.
SqlParserVisitor.prototype.visitTransactionLevel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#changeMaster.
SqlParserVisitor.prototype.visitChangeMaster = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#changeReplicationFilter.
SqlParserVisitor.prototype.visitChangeReplicationFilter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#purgeBinaryLogs.
SqlParserVisitor.prototype.visitPurgeBinaryLogs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#resetMaster.
SqlParserVisitor.prototype.visitResetMaster = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#resetSlave.
SqlParserVisitor.prototype.visitResetSlave = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#startSlave.
SqlParserVisitor.prototype.visitStartSlave = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#stopSlave.
SqlParserVisitor.prototype.visitStopSlave = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#startGroupReplication.
SqlParserVisitor.prototype.visitStartGroupReplication = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#stopGroupReplication.
SqlParserVisitor.prototype.visitStopGroupReplication = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#masterStringOption.
SqlParserVisitor.prototype.visitMasterStringOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#masterDecimalOption.
SqlParserVisitor.prototype.visitMasterDecimalOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#masterBoolOption.
SqlParserVisitor.prototype.visitMasterBoolOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#masterRealOption.
SqlParserVisitor.prototype.visitMasterRealOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#masterUidListOption.
SqlParserVisitor.prototype.visitMasterUidListOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#stringMasterOption.
SqlParserVisitor.prototype.visitStringMasterOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#decimalMasterOption.
SqlParserVisitor.prototype.visitDecimalMasterOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#boolMasterOption.
SqlParserVisitor.prototype.visitBoolMasterOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#channelOption.
SqlParserVisitor.prototype.visitChannelOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#doDbReplication.
SqlParserVisitor.prototype.visitDoDbReplication = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#ignoreDbReplication.
SqlParserVisitor.prototype.visitIgnoreDbReplication = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#doTableReplication.
SqlParserVisitor.prototype.visitDoTableReplication = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#ignoreTableReplication.
SqlParserVisitor.prototype.visitIgnoreTableReplication = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#wildDoTableReplication.
SqlParserVisitor.prototype.visitWildDoTableReplication = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#wildIgnoreTableReplication.
SqlParserVisitor.prototype.visitWildIgnoreTableReplication = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#rewriteDbReplication.
SqlParserVisitor.prototype.visitRewriteDbReplication = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tablePair.
SqlParserVisitor.prototype.visitTablePair = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#threadType.
SqlParserVisitor.prototype.visitThreadType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#gtidsUntilOption.
SqlParserVisitor.prototype.visitGtidsUntilOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#masterLogUntilOption.
SqlParserVisitor.prototype.visitMasterLogUntilOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#relayLogUntilOption.
SqlParserVisitor.prototype.visitRelayLogUntilOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#sqlGapsUntilOption.
SqlParserVisitor.prototype.visitSqlGapsUntilOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#userConnectionOption.
SqlParserVisitor.prototype.visitUserConnectionOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#passwordConnectionOption.
SqlParserVisitor.prototype.visitPasswordConnectionOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#defaultAuthConnectionOption.
SqlParserVisitor.prototype.visitDefaultAuthConnectionOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#pluginDirConnectionOption.
SqlParserVisitor.prototype.visitPluginDirConnectionOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#gtuidSet.
SqlParserVisitor.prototype.visitGtuidSet = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#xaStartTransaction.
SqlParserVisitor.prototype.visitXaStartTransaction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#xaEndTransaction.
SqlParserVisitor.prototype.visitXaEndTransaction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#xaPrepareStatement.
SqlParserVisitor.prototype.visitXaPrepareStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#xaCommitWork.
SqlParserVisitor.prototype.visitXaCommitWork = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#xaRollbackWork.
SqlParserVisitor.prototype.visitXaRollbackWork = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#xaRecoverWork.
SqlParserVisitor.prototype.visitXaRecoverWork = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#prepareStatement.
SqlParserVisitor.prototype.visitPrepareStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#executeStatement.
SqlParserVisitor.prototype.visitExecuteStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#deallocatePrepare.
SqlParserVisitor.prototype.visitDeallocatePrepare = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#routineBody.
SqlParserVisitor.prototype.visitRoutineBody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#blockStatement.
SqlParserVisitor.prototype.visitBlockStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#caseStatement.
SqlParserVisitor.prototype.visitCaseStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#ifStatement.
SqlParserVisitor.prototype.visitIfStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#iterateStatement.
SqlParserVisitor.prototype.visitIterateStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#leaveStatement.
SqlParserVisitor.prototype.visitLeaveStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#loopStatement.
SqlParserVisitor.prototype.visitLoopStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#repeatStatement.
SqlParserVisitor.prototype.visitRepeatStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#returnStatement.
SqlParserVisitor.prototype.visitReturnStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#whileStatement.
SqlParserVisitor.prototype.visitWhileStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#CloseCursor.
SqlParserVisitor.prototype.visitCloseCursor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#FetchCursor.
SqlParserVisitor.prototype.visitFetchCursor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#OpenCursor.
SqlParserVisitor.prototype.visitOpenCursor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#declareVariable.
SqlParserVisitor.prototype.visitDeclareVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#declareCondition.
SqlParserVisitor.prototype.visitDeclareCondition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#declareCursor.
SqlParserVisitor.prototype.visitDeclareCursor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#declareHandler.
SqlParserVisitor.prototype.visitDeclareHandler = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#handlerConditionCode.
SqlParserVisitor.prototype.visitHandlerConditionCode = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#handlerConditionState.
SqlParserVisitor.prototype.visitHandlerConditionState = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#handlerConditionName.
SqlParserVisitor.prototype.visitHandlerConditionName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#handlerConditionWarning.
SqlParserVisitor.prototype.visitHandlerConditionWarning = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#handlerConditionNotfound.
SqlParserVisitor.prototype.visitHandlerConditionNotfound = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#handlerConditionException.
SqlParserVisitor.prototype.visitHandlerConditionException = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#procedureSqlStatement.
SqlParserVisitor.prototype.visitProcedureSqlStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#caseAlternative.
SqlParserVisitor.prototype.visitCaseAlternative = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#elifAlternative.
SqlParserVisitor.prototype.visitElifAlternative = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterUserMysqlV56.
SqlParserVisitor.prototype.visitAlterUserMysqlV56 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#alterUserMysqlV57.
SqlParserVisitor.prototype.visitAlterUserMysqlV57 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#createUserMysqlV56.
SqlParserVisitor.prototype.visitCreateUserMysqlV56 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#createUserMysqlV57.
SqlParserVisitor.prototype.visitCreateUserMysqlV57 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#dropUser.
SqlParserVisitor.prototype.visitDropUser = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#grantStatement.
SqlParserVisitor.prototype.visitGrantStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#grantProxy.
SqlParserVisitor.prototype.visitGrantProxy = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#renameUser.
SqlParserVisitor.prototype.visitRenameUser = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#detailRevoke.
SqlParserVisitor.prototype.visitDetailRevoke = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#shortRevoke.
SqlParserVisitor.prototype.visitShortRevoke = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#revokeProxy.
SqlParserVisitor.prototype.visitRevokeProxy = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#setPasswordStatement.
SqlParserVisitor.prototype.visitSetPasswordStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#userSpecification.
SqlParserVisitor.prototype.visitUserSpecification = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#passwordAuthOption.
SqlParserVisitor.prototype.visitPasswordAuthOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#stringAuthOption.
SqlParserVisitor.prototype.visitStringAuthOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#hashAuthOption.
SqlParserVisitor.prototype.visitHashAuthOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#simpleAuthOption.
SqlParserVisitor.prototype.visitSimpleAuthOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tlsOption.
SqlParserVisitor.prototype.visitTlsOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#userResourceOption.
SqlParserVisitor.prototype.visitUserResourceOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#userPasswordOption.
SqlParserVisitor.prototype.visitUserPasswordOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#userLockOption.
SqlParserVisitor.prototype.visitUserLockOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#privelegeClause.
SqlParserVisitor.prototype.visitPrivelegeClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#privilege.
SqlParserVisitor.prototype.visitPrivilege = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#currentSchemaPriviLevel.
SqlParserVisitor.prototype.visitCurrentSchemaPriviLevel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#globalPrivLevel.
SqlParserVisitor.prototype.visitGlobalPrivLevel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#definiteSchemaPrivLevel.
SqlParserVisitor.prototype.visitDefiniteSchemaPrivLevel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#definiteFullTablePrivLevel.
SqlParserVisitor.prototype.visitDefiniteFullTablePrivLevel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#definiteFullTablePrivLevel2.
SqlParserVisitor.prototype.visitDefiniteFullTablePrivLevel2 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#definiteTablePrivLevel.
SqlParserVisitor.prototype.visitDefiniteTablePrivLevel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#renameUserClause.
SqlParserVisitor.prototype.visitRenameUserClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#analyzeTable.
SqlParserVisitor.prototype.visitAnalyzeTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#checkTable.
SqlParserVisitor.prototype.visitCheckTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#checksumTable.
SqlParserVisitor.prototype.visitChecksumTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#optimizeTable.
SqlParserVisitor.prototype.visitOptimizeTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#repairTable.
SqlParserVisitor.prototype.visitRepairTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#checkTableOption.
SqlParserVisitor.prototype.visitCheckTableOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#createUdfunction.
SqlParserVisitor.prototype.visitCreateUdfunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#installPlugin.
SqlParserVisitor.prototype.visitInstallPlugin = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#uninstallPlugin.
SqlParserVisitor.prototype.visitUninstallPlugin = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#setVariable.
SqlParserVisitor.prototype.visitSetVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#setCharset.
SqlParserVisitor.prototype.visitSetCharset = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#setNames.
SqlParserVisitor.prototype.visitSetNames = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#setPassword.
SqlParserVisitor.prototype.visitSetPassword = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#setTransaction.
SqlParserVisitor.prototype.visitSetTransaction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#setAutocommit.
SqlParserVisitor.prototype.visitSetAutocommit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#setNewValueInsideTrigger.
SqlParserVisitor.prototype.visitSetNewValueInsideTrigger = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#showMasterLogs.
SqlParserVisitor.prototype.visitShowMasterLogs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#showLogEvents.
SqlParserVisitor.prototype.visitShowLogEvents = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#showObjectFilter.
SqlParserVisitor.prototype.visitShowObjectFilter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#showColumns.
SqlParserVisitor.prototype.visitShowColumns = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#showCreateDb.
SqlParserVisitor.prototype.visitShowCreateDb = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#showCreateFullIdObject.
SqlParserVisitor.prototype.visitShowCreateFullIdObject = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#showCreateUser.
SqlParserVisitor.prototype.visitShowCreateUser = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#showEngine.
SqlParserVisitor.prototype.visitShowEngine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#showGlobalInfo.
SqlParserVisitor.prototype.visitShowGlobalInfo = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#showErrors.
SqlParserVisitor.prototype.visitShowErrors = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#showCountErrors.
SqlParserVisitor.prototype.visitShowCountErrors = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#showSchemaFilter.
SqlParserVisitor.prototype.visitShowSchemaFilter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#showRoutine.
SqlParserVisitor.prototype.visitShowRoutine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#showGrants.
SqlParserVisitor.prototype.visitShowGrants = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#showIndexes.
SqlParserVisitor.prototype.visitShowIndexes = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#showOpenTables.
SqlParserVisitor.prototype.visitShowOpenTables = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#showProfile.
SqlParserVisitor.prototype.visitShowProfile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#showSlaveStatus.
SqlParserVisitor.prototype.visitShowSlaveStatus = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#variableClause.
SqlParserVisitor.prototype.visitVariableClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#showCommonEntity.
SqlParserVisitor.prototype.visitShowCommonEntity = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#showFilter.
SqlParserVisitor.prototype.visitShowFilter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#showGlobalInfoClause.
SqlParserVisitor.prototype.visitShowGlobalInfoClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#showSchemaEntity.
SqlParserVisitor.prototype.visitShowSchemaEntity = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#showProfileType.
SqlParserVisitor.prototype.visitShowProfileType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#binlogStatement.
SqlParserVisitor.prototype.visitBinlogStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#cacheIndexStatement.
SqlParserVisitor.prototype.visitCacheIndexStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#flushStatement.
SqlParserVisitor.prototype.visitFlushStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#killStatement.
SqlParserVisitor.prototype.visitKillStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#loadIndexIntoCache.
SqlParserVisitor.prototype.visitLoadIndexIntoCache = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#resetStatement.
SqlParserVisitor.prototype.visitResetStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#shutdownStatement.
SqlParserVisitor.prototype.visitShutdownStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableIndexes.
SqlParserVisitor.prototype.visitTableIndexes = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#simpleFlushOption.
SqlParserVisitor.prototype.visitSimpleFlushOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#channelFlushOption.
SqlParserVisitor.prototype.visitChannelFlushOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableFlushOption.
SqlParserVisitor.prototype.visitTableFlushOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#flushTableOption.
SqlParserVisitor.prototype.visitFlushTableOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#loadedTableIndexes.
SqlParserVisitor.prototype.visitLoadedTableIndexes = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#simpleDescribeStatement.
SqlParserVisitor.prototype.visitSimpleDescribeStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#fullDescribeStatement.
SqlParserVisitor.prototype.visitFullDescribeStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#helpStatement.
SqlParserVisitor.prototype.visitHelpStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#useStatement.
SqlParserVisitor.prototype.visitUseStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#signalStatement.
SqlParserVisitor.prototype.visitSignalStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#resignalStatement.
SqlParserVisitor.prototype.visitResignalStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#signalConditionInformation.
SqlParserVisitor.prototype.visitSignalConditionInformation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#diagnosticsStatement.
SqlParserVisitor.prototype.visitDiagnosticsStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#diagnosticsConditionInformationName.
SqlParserVisitor.prototype.visitDiagnosticsConditionInformationName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#describeStatements.
SqlParserVisitor.prototype.visitDescribeStatements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#describeConnection.
SqlParserVisitor.prototype.visitDescribeConnection = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#fullId.
SqlParserVisitor.prototype.visitFullId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableName.
SqlParserVisitor.prototype.visitTableName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#fullColumnName.
SqlParserVisitor.prototype.visitFullColumnName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#indexColumnName.
SqlParserVisitor.prototype.visitIndexColumnName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#userName.
SqlParserVisitor.prototype.visitUserName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#mysqlVariable.
SqlParserVisitor.prototype.visitMysqlVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#charsetName.
SqlParserVisitor.prototype.visitCharsetName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#collationName.
SqlParserVisitor.prototype.visitCollationName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#engineName.
SqlParserVisitor.prototype.visitEngineName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#uuidSet.
SqlParserVisitor.prototype.visitUuidSet = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#xid.
SqlParserVisitor.prototype.visitXid = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#xuidStringId.
SqlParserVisitor.prototype.visitXuidStringId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#authPlugin.
SqlParserVisitor.prototype.visitAuthPlugin = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#uid.
SqlParserVisitor.prototype.visitUid = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#simpleId.
SqlParserVisitor.prototype.visitSimpleId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#dottedId.
SqlParserVisitor.prototype.visitDottedId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#decimalLiteral.
SqlParserVisitor.prototype.visitDecimalLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#fileSizeLiteral.
SqlParserVisitor.prototype.visitFileSizeLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#stringLiteral.
SqlParserVisitor.prototype.visitStringLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#booleanLiteral.
SqlParserVisitor.prototype.visitBooleanLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#hexadecimalLiteral.
SqlParserVisitor.prototype.visitHexadecimalLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#nullNotnull.
SqlParserVisitor.prototype.visitNullNotnull = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#constant.
SqlParserVisitor.prototype.visitConstant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#stringDataType.
SqlParserVisitor.prototype.visitStringDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#nationalStringDataType.
SqlParserVisitor.prototype.visitNationalStringDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#nationalVaryingStringDataType.
SqlParserVisitor.prototype.visitNationalVaryingStringDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#dimensionDataType.
SqlParserVisitor.prototype.visitDimensionDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#simpleDataType.
SqlParserVisitor.prototype.visitSimpleDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#collectionDataType.
SqlParserVisitor.prototype.visitCollectionDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#spatialDataType.
SqlParserVisitor.prototype.visitSpatialDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#longVarcharDataType.
SqlParserVisitor.prototype.visitLongVarcharDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#longVarbinaryDataType.
SqlParserVisitor.prototype.visitLongVarbinaryDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#collectionOptions.
SqlParserVisitor.prototype.visitCollectionOptions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#convertedDataType.
SqlParserVisitor.prototype.visitConvertedDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#lengthOneDimension.
SqlParserVisitor.prototype.visitLengthOneDimension = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#lengthTwoDimension.
SqlParserVisitor.prototype.visitLengthTwoDimension = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#lengthTwoOptionalDimension.
SqlParserVisitor.prototype.visitLengthTwoOptionalDimension = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#uidList.
SqlParserVisitor.prototype.visitUidList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tables.
SqlParserVisitor.prototype.visitTables = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#indexColumnNames.
SqlParserVisitor.prototype.visitIndexColumnNames = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#expressions.
SqlParserVisitor.prototype.visitExpressions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#expressionsWithDefaults.
SqlParserVisitor.prototype.visitExpressionsWithDefaults = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#constants.
SqlParserVisitor.prototype.visitConstants = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#simpleStrings.
SqlParserVisitor.prototype.visitSimpleStrings = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#userVariables.
SqlParserVisitor.prototype.visitUserVariables = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#defaultValue.
SqlParserVisitor.prototype.visitDefaultValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#currentTimestamp.
SqlParserVisitor.prototype.visitCurrentTimestamp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#expressionOrDefault.
SqlParserVisitor.prototype.visitExpressionOrDefault = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#ifExists.
SqlParserVisitor.prototype.visitIfExists = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#ifNotExists.
SqlParserVisitor.prototype.visitIfNotExists = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#specificFunctionCall.
SqlParserVisitor.prototype.visitSpecificFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#aggregateFunctionCall.
SqlParserVisitor.prototype.visitAggregateFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#scalarFunctionCall.
SqlParserVisitor.prototype.visitScalarFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#udfFunctionCall.
SqlParserVisitor.prototype.visitUdfFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#passwordFunctionCall.
SqlParserVisitor.prototype.visitPasswordFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#simpleFunctionCall.
SqlParserVisitor.prototype.visitSimpleFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#dataTypeFunctionCall.
SqlParserVisitor.prototype.visitDataTypeFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#valuesFunctionCall.
SqlParserVisitor.prototype.visitValuesFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#caseFunctionCall.
SqlParserVisitor.prototype.visitCaseFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#charFunctionCall.
SqlParserVisitor.prototype.visitCharFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#positionFunctionCall.
SqlParserVisitor.prototype.visitPositionFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#substrFunctionCall.
SqlParserVisitor.prototype.visitSubstrFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#trimFunctionCall.
SqlParserVisitor.prototype.visitTrimFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#weightFunctionCall.
SqlParserVisitor.prototype.visitWeightFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#extractFunctionCall.
SqlParserVisitor.prototype.visitExtractFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#getFormatFunctionCall.
SqlParserVisitor.prototype.visitGetFormatFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#caseFuncAlternative.
SqlParserVisitor.prototype.visitCaseFuncAlternative = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#levelWeightList.
SqlParserVisitor.prototype.visitLevelWeightList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#levelWeightRange.
SqlParserVisitor.prototype.visitLevelWeightRange = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#levelInWeightListElement.
SqlParserVisitor.prototype.visitLevelInWeightListElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#aggregateWindowedFunction.
SqlParserVisitor.prototype.visitAggregateWindowedFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#scalarFunctionName.
SqlParserVisitor.prototype.visitScalarFunctionName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#passwordFunctionClause.
SqlParserVisitor.prototype.visitPasswordFunctionClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#functionArgs.
SqlParserVisitor.prototype.visitFunctionArgs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#functionArg.
SqlParserVisitor.prototype.visitFunctionArg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#isExpression.
SqlParserVisitor.prototype.visitIsExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#notExpression.
SqlParserVisitor.prototype.visitNotExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#logicalExpression.
SqlParserVisitor.prototype.visitLogicalExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#predicateExpression.
SqlParserVisitor.prototype.visitPredicateExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#soundsLikePredicate.
SqlParserVisitor.prototype.visitSoundsLikePredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#expressionAtomPredicate.
SqlParserVisitor.prototype.visitExpressionAtomPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#inPredicate.
SqlParserVisitor.prototype.visitInPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#subqueryComparasionPredicate.
SqlParserVisitor.prototype.visitSubqueryComparasionPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#betweenPredicate.
SqlParserVisitor.prototype.visitBetweenPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#binaryComparasionPredicate.
SqlParserVisitor.prototype.visitBinaryComparasionPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#isNullPredicate.
SqlParserVisitor.prototype.visitIsNullPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#likePredicate.
SqlParserVisitor.prototype.visitLikePredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#regexpPredicate.
SqlParserVisitor.prototype.visitRegexpPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#unaryExpressionAtom.
SqlParserVisitor.prototype.visitUnaryExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#collateExpressionAtom.
SqlParserVisitor.prototype.visitCollateExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#subqueryExpessionAtom.
SqlParserVisitor.prototype.visitSubqueryExpessionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#mysqlVariableExpressionAtom.
SqlParserVisitor.prototype.visitMysqlVariableExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#nestedExpressionAtom.
SqlParserVisitor.prototype.visitNestedExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#nestedRowExpressionAtom.
SqlParserVisitor.prototype.visitNestedRowExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#mathExpressionAtom.
SqlParserVisitor.prototype.visitMathExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#intervalExpressionAtom.
SqlParserVisitor.prototype.visitIntervalExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#existsExpessionAtom.
SqlParserVisitor.prototype.visitExistsExpessionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#constantExpressionAtom.
SqlParserVisitor.prototype.visitConstantExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#functionCallExpressionAtom.
SqlParserVisitor.prototype.visitFunctionCallExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#binaryExpressionAtom.
SqlParserVisitor.prototype.visitBinaryExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#fullColumnNameExpressionAtom.
SqlParserVisitor.prototype.visitFullColumnNameExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#bitExpressionAtom.
SqlParserVisitor.prototype.visitBitExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#unaryOperator.
SqlParserVisitor.prototype.visitUnaryOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#comparisonOperator.
SqlParserVisitor.prototype.visitComparisonOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#logicalOperator.
SqlParserVisitor.prototype.visitLogicalOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#bitOperator.
SqlParserVisitor.prototype.visitBitOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#mathOperator.
SqlParserVisitor.prototype.visitMathOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#charsetNameBase.
SqlParserVisitor.prototype.visitCharsetNameBase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#transactionLevelBase.
SqlParserVisitor.prototype.visitTransactionLevelBase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#privilegesBase.
SqlParserVisitor.prototype.visitPrivilegesBase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#intervalTypeBase.
SqlParserVisitor.prototype.visitIntervalTypeBase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#dataTypeBase.
SqlParserVisitor.prototype.visitDataTypeBase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#keywordsCanBeId.
SqlParserVisitor.prototype.visitKeywordsCanBeId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#functionNameBase.
SqlParserVisitor.prototype.visitFunctionNameBase = function(ctx) {
  return this.visitChildren(ctx);
};



exports.SqlParserVisitor = SqlParserVisitor;