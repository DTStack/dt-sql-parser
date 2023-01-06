// Generated from /Users/ziv/github.com/dt-sql-parser/src/grammar/generic/SqlParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by SqlParser.
function SqlParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

SqlParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
SqlParserListener.prototype.constructor = SqlParserListener;

// Enter a parse tree produced by SqlParser#program.
SqlParserListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by SqlParser#program.
SqlParserListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by SqlParser#statement.
SqlParserListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#statement.
SqlParserListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#sqlStatements.
SqlParserListener.prototype.enterSqlStatements = function(ctx) {
};

// Exit a parse tree produced by SqlParser#sqlStatements.
SqlParserListener.prototype.exitSqlStatements = function(ctx) {
};


// Enter a parse tree produced by SqlParser#sqlStatement.
SqlParserListener.prototype.enterSqlStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#sqlStatement.
SqlParserListener.prototype.exitSqlStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#emptyStatement.
SqlParserListener.prototype.enterEmptyStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#emptyStatement.
SqlParserListener.prototype.exitEmptyStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#ddlStatement.
SqlParserListener.prototype.enterDdlStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#ddlStatement.
SqlParserListener.prototype.exitDdlStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#dmlStatement.
SqlParserListener.prototype.enterDmlStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#dmlStatement.
SqlParserListener.prototype.exitDmlStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#transactionStatement.
SqlParserListener.prototype.enterTransactionStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#transactionStatement.
SqlParserListener.prototype.exitTransactionStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#replicationStatement.
SqlParserListener.prototype.enterReplicationStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#replicationStatement.
SqlParserListener.prototype.exitReplicationStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#preparedStatement.
SqlParserListener.prototype.enterPreparedStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#preparedStatement.
SqlParserListener.prototype.exitPreparedStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#compoundStatement.
SqlParserListener.prototype.enterCompoundStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#compoundStatement.
SqlParserListener.prototype.exitCompoundStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#administrationStatement.
SqlParserListener.prototype.enterAdministrationStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#administrationStatement.
SqlParserListener.prototype.exitAdministrationStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#utilityStatement.
SqlParserListener.prototype.enterUtilityStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#utilityStatement.
SqlParserListener.prototype.exitUtilityStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#createDatabase.
SqlParserListener.prototype.enterCreateDatabase = function(ctx) {
};

// Exit a parse tree produced by SqlParser#createDatabase.
SqlParserListener.prototype.exitCreateDatabase = function(ctx) {
};


// Enter a parse tree produced by SqlParser#createEvent.
SqlParserListener.prototype.enterCreateEvent = function(ctx) {
};

// Exit a parse tree produced by SqlParser#createEvent.
SqlParserListener.prototype.exitCreateEvent = function(ctx) {
};


// Enter a parse tree produced by SqlParser#createIndex.
SqlParserListener.prototype.enterCreateIndex = function(ctx) {
};

// Exit a parse tree produced by SqlParser#createIndex.
SqlParserListener.prototype.exitCreateIndex = function(ctx) {
};


// Enter a parse tree produced by SqlParser#createLogfileGroup.
SqlParserListener.prototype.enterCreateLogfileGroup = function(ctx) {
};

// Exit a parse tree produced by SqlParser#createLogfileGroup.
SqlParserListener.prototype.exitCreateLogfileGroup = function(ctx) {
};


// Enter a parse tree produced by SqlParser#createProcedure.
SqlParserListener.prototype.enterCreateProcedure = function(ctx) {
};

// Exit a parse tree produced by SqlParser#createProcedure.
SqlParserListener.prototype.exitCreateProcedure = function(ctx) {
};


// Enter a parse tree produced by SqlParser#createFunction.
SqlParserListener.prototype.enterCreateFunction = function(ctx) {
};

// Exit a parse tree produced by SqlParser#createFunction.
SqlParserListener.prototype.exitCreateFunction = function(ctx) {
};


// Enter a parse tree produced by SqlParser#createServer.
SqlParserListener.prototype.enterCreateServer = function(ctx) {
};

// Exit a parse tree produced by SqlParser#createServer.
SqlParserListener.prototype.exitCreateServer = function(ctx) {
};


// Enter a parse tree produced by SqlParser#copyCreateTable.
SqlParserListener.prototype.enterCopyCreateTable = function(ctx) {
};

// Exit a parse tree produced by SqlParser#copyCreateTable.
SqlParserListener.prototype.exitCopyCreateTable = function(ctx) {
};


// Enter a parse tree produced by SqlParser#queryCreateTable.
SqlParserListener.prototype.enterQueryCreateTable = function(ctx) {
};

// Exit a parse tree produced by SqlParser#queryCreateTable.
SqlParserListener.prototype.exitQueryCreateTable = function(ctx) {
};


// Enter a parse tree produced by SqlParser#columnCreateTable.
SqlParserListener.prototype.enterColumnCreateTable = function(ctx) {
};

// Exit a parse tree produced by SqlParser#columnCreateTable.
SqlParserListener.prototype.exitColumnCreateTable = function(ctx) {
};


// Enter a parse tree produced by SqlParser#createTablespaceInnodb.
SqlParserListener.prototype.enterCreateTablespaceInnodb = function(ctx) {
};

// Exit a parse tree produced by SqlParser#createTablespaceInnodb.
SqlParserListener.prototype.exitCreateTablespaceInnodb = function(ctx) {
};


// Enter a parse tree produced by SqlParser#createTablespaceNdb.
SqlParserListener.prototype.enterCreateTablespaceNdb = function(ctx) {
};

// Exit a parse tree produced by SqlParser#createTablespaceNdb.
SqlParserListener.prototype.exitCreateTablespaceNdb = function(ctx) {
};


// Enter a parse tree produced by SqlParser#createTrigger.
SqlParserListener.prototype.enterCreateTrigger = function(ctx) {
};

// Exit a parse tree produced by SqlParser#createTrigger.
SqlParserListener.prototype.exitCreateTrigger = function(ctx) {
};


// Enter a parse tree produced by SqlParser#createView.
SqlParserListener.prototype.enterCreateView = function(ctx) {
};

// Exit a parse tree produced by SqlParser#createView.
SqlParserListener.prototype.exitCreateView = function(ctx) {
};


// Enter a parse tree produced by SqlParser#createDatabaseOption.
SqlParserListener.prototype.enterCreateDatabaseOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#createDatabaseOption.
SqlParserListener.prototype.exitCreateDatabaseOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#ownerStatement.
SqlParserListener.prototype.enterOwnerStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#ownerStatement.
SqlParserListener.prototype.exitOwnerStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#preciseSchedule.
SqlParserListener.prototype.enterPreciseSchedule = function(ctx) {
};

// Exit a parse tree produced by SqlParser#preciseSchedule.
SqlParserListener.prototype.exitPreciseSchedule = function(ctx) {
};


// Enter a parse tree produced by SqlParser#intervalSchedule.
SqlParserListener.prototype.enterIntervalSchedule = function(ctx) {
};

// Exit a parse tree produced by SqlParser#intervalSchedule.
SqlParserListener.prototype.exitIntervalSchedule = function(ctx) {
};


// Enter a parse tree produced by SqlParser#timestampValue.
SqlParserListener.prototype.enterTimestampValue = function(ctx) {
};

// Exit a parse tree produced by SqlParser#timestampValue.
SqlParserListener.prototype.exitTimestampValue = function(ctx) {
};


// Enter a parse tree produced by SqlParser#intervalExpr.
SqlParserListener.prototype.enterIntervalExpr = function(ctx) {
};

// Exit a parse tree produced by SqlParser#intervalExpr.
SqlParserListener.prototype.exitIntervalExpr = function(ctx) {
};


// Enter a parse tree produced by SqlParser#intervalType.
SqlParserListener.prototype.enterIntervalType = function(ctx) {
};

// Exit a parse tree produced by SqlParser#intervalType.
SqlParserListener.prototype.exitIntervalType = function(ctx) {
};


// Enter a parse tree produced by SqlParser#enableType.
SqlParserListener.prototype.enterEnableType = function(ctx) {
};

// Exit a parse tree produced by SqlParser#enableType.
SqlParserListener.prototype.exitEnableType = function(ctx) {
};


// Enter a parse tree produced by SqlParser#indexType.
SqlParserListener.prototype.enterIndexType = function(ctx) {
};

// Exit a parse tree produced by SqlParser#indexType.
SqlParserListener.prototype.exitIndexType = function(ctx) {
};


// Enter a parse tree produced by SqlParser#indexOption.
SqlParserListener.prototype.enterIndexOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#indexOption.
SqlParserListener.prototype.exitIndexOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#procedureParameter.
SqlParserListener.prototype.enterProcedureParameter = function(ctx) {
};

// Exit a parse tree produced by SqlParser#procedureParameter.
SqlParserListener.prototype.exitProcedureParameter = function(ctx) {
};


// Enter a parse tree produced by SqlParser#functionParameter.
SqlParserListener.prototype.enterFunctionParameter = function(ctx) {
};

// Exit a parse tree produced by SqlParser#functionParameter.
SqlParserListener.prototype.exitFunctionParameter = function(ctx) {
};


// Enter a parse tree produced by SqlParser#routineComment.
SqlParserListener.prototype.enterRoutineComment = function(ctx) {
};

// Exit a parse tree produced by SqlParser#routineComment.
SqlParserListener.prototype.exitRoutineComment = function(ctx) {
};


// Enter a parse tree produced by SqlParser#routineLanguage.
SqlParserListener.prototype.enterRoutineLanguage = function(ctx) {
};

// Exit a parse tree produced by SqlParser#routineLanguage.
SqlParserListener.prototype.exitRoutineLanguage = function(ctx) {
};


// Enter a parse tree produced by SqlParser#routineBehavior.
SqlParserListener.prototype.enterRoutineBehavior = function(ctx) {
};

// Exit a parse tree produced by SqlParser#routineBehavior.
SqlParserListener.prototype.exitRoutineBehavior = function(ctx) {
};


// Enter a parse tree produced by SqlParser#routineData.
SqlParserListener.prototype.enterRoutineData = function(ctx) {
};

// Exit a parse tree produced by SqlParser#routineData.
SqlParserListener.prototype.exitRoutineData = function(ctx) {
};


// Enter a parse tree produced by SqlParser#routineSecurity.
SqlParserListener.prototype.enterRoutineSecurity = function(ctx) {
};

// Exit a parse tree produced by SqlParser#routineSecurity.
SqlParserListener.prototype.exitRoutineSecurity = function(ctx) {
};


// Enter a parse tree produced by SqlParser#serverOption.
SqlParserListener.prototype.enterServerOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#serverOption.
SqlParserListener.prototype.exitServerOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#createDefinitions.
SqlParserListener.prototype.enterCreateDefinitions = function(ctx) {
};

// Exit a parse tree produced by SqlParser#createDefinitions.
SqlParserListener.prototype.exitCreateDefinitions = function(ctx) {
};


// Enter a parse tree produced by SqlParser#columnDeclaration.
SqlParserListener.prototype.enterColumnDeclaration = function(ctx) {
};

// Exit a parse tree produced by SqlParser#columnDeclaration.
SqlParserListener.prototype.exitColumnDeclaration = function(ctx) {
};


// Enter a parse tree produced by SqlParser#constraintDeclaration.
SqlParserListener.prototype.enterConstraintDeclaration = function(ctx) {
};

// Exit a parse tree produced by SqlParser#constraintDeclaration.
SqlParserListener.prototype.exitConstraintDeclaration = function(ctx) {
};


// Enter a parse tree produced by SqlParser#indexDeclaration.
SqlParserListener.prototype.enterIndexDeclaration = function(ctx) {
};

// Exit a parse tree produced by SqlParser#indexDeclaration.
SqlParserListener.prototype.exitIndexDeclaration = function(ctx) {
};


// Enter a parse tree produced by SqlParser#columnDefinition.
SqlParserListener.prototype.enterColumnDefinition = function(ctx) {
};

// Exit a parse tree produced by SqlParser#columnDefinition.
SqlParserListener.prototype.exitColumnDefinition = function(ctx) {
};


// Enter a parse tree produced by SqlParser#nullColumnConstraint.
SqlParserListener.prototype.enterNullColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by SqlParser#nullColumnConstraint.
SqlParserListener.prototype.exitNullColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by SqlParser#defaultColumnConstraint.
SqlParserListener.prototype.enterDefaultColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by SqlParser#defaultColumnConstraint.
SqlParserListener.prototype.exitDefaultColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by SqlParser#autoIncrementColumnConstraint.
SqlParserListener.prototype.enterAutoIncrementColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by SqlParser#autoIncrementColumnConstraint.
SqlParserListener.prototype.exitAutoIncrementColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by SqlParser#primaryKeyColumnConstraint.
SqlParserListener.prototype.enterPrimaryKeyColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by SqlParser#primaryKeyColumnConstraint.
SqlParserListener.prototype.exitPrimaryKeyColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by SqlParser#uniqueKeyColumnConstraint.
SqlParserListener.prototype.enterUniqueKeyColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by SqlParser#uniqueKeyColumnConstraint.
SqlParserListener.prototype.exitUniqueKeyColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by SqlParser#commentColumnConstraint.
SqlParserListener.prototype.enterCommentColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by SqlParser#commentColumnConstraint.
SqlParserListener.prototype.exitCommentColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by SqlParser#formatColumnConstraint.
SqlParserListener.prototype.enterFormatColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by SqlParser#formatColumnConstraint.
SqlParserListener.prototype.exitFormatColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by SqlParser#storageColumnConstraint.
SqlParserListener.prototype.enterStorageColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by SqlParser#storageColumnConstraint.
SqlParserListener.prototype.exitStorageColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by SqlParser#referenceColumnConstraint.
SqlParserListener.prototype.enterReferenceColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by SqlParser#referenceColumnConstraint.
SqlParserListener.prototype.exitReferenceColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by SqlParser#collateColumnConstraint.
SqlParserListener.prototype.enterCollateColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by SqlParser#collateColumnConstraint.
SqlParserListener.prototype.exitCollateColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by SqlParser#generatedColumnConstraint.
SqlParserListener.prototype.enterGeneratedColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by SqlParser#generatedColumnConstraint.
SqlParserListener.prototype.exitGeneratedColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by SqlParser#serialDefaultColumnConstraint.
SqlParserListener.prototype.enterSerialDefaultColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by SqlParser#serialDefaultColumnConstraint.
SqlParserListener.prototype.exitSerialDefaultColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by SqlParser#checkColumnConstraint.
SqlParserListener.prototype.enterCheckColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by SqlParser#checkColumnConstraint.
SqlParserListener.prototype.exitCheckColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by SqlParser#primaryKeyTableConstraint.
SqlParserListener.prototype.enterPrimaryKeyTableConstraint = function(ctx) {
};

// Exit a parse tree produced by SqlParser#primaryKeyTableConstraint.
SqlParserListener.prototype.exitPrimaryKeyTableConstraint = function(ctx) {
};


// Enter a parse tree produced by SqlParser#uniqueKeyTableConstraint.
SqlParserListener.prototype.enterUniqueKeyTableConstraint = function(ctx) {
};

// Exit a parse tree produced by SqlParser#uniqueKeyTableConstraint.
SqlParserListener.prototype.exitUniqueKeyTableConstraint = function(ctx) {
};


// Enter a parse tree produced by SqlParser#foreignKeyTableConstraint.
SqlParserListener.prototype.enterForeignKeyTableConstraint = function(ctx) {
};

// Exit a parse tree produced by SqlParser#foreignKeyTableConstraint.
SqlParserListener.prototype.exitForeignKeyTableConstraint = function(ctx) {
};


// Enter a parse tree produced by SqlParser#checkTableConstraint.
SqlParserListener.prototype.enterCheckTableConstraint = function(ctx) {
};

// Exit a parse tree produced by SqlParser#checkTableConstraint.
SqlParserListener.prototype.exitCheckTableConstraint = function(ctx) {
};


// Enter a parse tree produced by SqlParser#referenceDefinition.
SqlParserListener.prototype.enterReferenceDefinition = function(ctx) {
};

// Exit a parse tree produced by SqlParser#referenceDefinition.
SqlParserListener.prototype.exitReferenceDefinition = function(ctx) {
};


// Enter a parse tree produced by SqlParser#referenceAction.
SqlParserListener.prototype.enterReferenceAction = function(ctx) {
};

// Exit a parse tree produced by SqlParser#referenceAction.
SqlParserListener.prototype.exitReferenceAction = function(ctx) {
};


// Enter a parse tree produced by SqlParser#referenceControlType.
SqlParserListener.prototype.enterReferenceControlType = function(ctx) {
};

// Exit a parse tree produced by SqlParser#referenceControlType.
SqlParserListener.prototype.exitReferenceControlType = function(ctx) {
};


// Enter a parse tree produced by SqlParser#simpleIndexDeclaration.
SqlParserListener.prototype.enterSimpleIndexDeclaration = function(ctx) {
};

// Exit a parse tree produced by SqlParser#simpleIndexDeclaration.
SqlParserListener.prototype.exitSimpleIndexDeclaration = function(ctx) {
};


// Enter a parse tree produced by SqlParser#specialIndexDeclaration.
SqlParserListener.prototype.enterSpecialIndexDeclaration = function(ctx) {
};

// Exit a parse tree produced by SqlParser#specialIndexDeclaration.
SqlParserListener.prototype.exitSpecialIndexDeclaration = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableOptionEngine.
SqlParserListener.prototype.enterTableOptionEngine = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableOptionEngine.
SqlParserListener.prototype.exitTableOptionEngine = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableOptionAutoIncrement.
SqlParserListener.prototype.enterTableOptionAutoIncrement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableOptionAutoIncrement.
SqlParserListener.prototype.exitTableOptionAutoIncrement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableOptionAverage.
SqlParserListener.prototype.enterTableOptionAverage = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableOptionAverage.
SqlParserListener.prototype.exitTableOptionAverage = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableOptionCharset.
SqlParserListener.prototype.enterTableOptionCharset = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableOptionCharset.
SqlParserListener.prototype.exitTableOptionCharset = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableOptionChecksum.
SqlParserListener.prototype.enterTableOptionChecksum = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableOptionChecksum.
SqlParserListener.prototype.exitTableOptionChecksum = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableOptionCollate.
SqlParserListener.prototype.enterTableOptionCollate = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableOptionCollate.
SqlParserListener.prototype.exitTableOptionCollate = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableOptionComment.
SqlParserListener.prototype.enterTableOptionComment = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableOptionComment.
SqlParserListener.prototype.exitTableOptionComment = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableOptionCompression.
SqlParserListener.prototype.enterTableOptionCompression = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableOptionCompression.
SqlParserListener.prototype.exitTableOptionCompression = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableOptionConnection.
SqlParserListener.prototype.enterTableOptionConnection = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableOptionConnection.
SqlParserListener.prototype.exitTableOptionConnection = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableOptionDataDirectory.
SqlParserListener.prototype.enterTableOptionDataDirectory = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableOptionDataDirectory.
SqlParserListener.prototype.exitTableOptionDataDirectory = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableOptionDelay.
SqlParserListener.prototype.enterTableOptionDelay = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableOptionDelay.
SqlParserListener.prototype.exitTableOptionDelay = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableOptionEncryption.
SqlParserListener.prototype.enterTableOptionEncryption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableOptionEncryption.
SqlParserListener.prototype.exitTableOptionEncryption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableOptionIndexDirectory.
SqlParserListener.prototype.enterTableOptionIndexDirectory = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableOptionIndexDirectory.
SqlParserListener.prototype.exitTableOptionIndexDirectory = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableOptionInsertMethod.
SqlParserListener.prototype.enterTableOptionInsertMethod = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableOptionInsertMethod.
SqlParserListener.prototype.exitTableOptionInsertMethod = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableOptionKeyBlockSize.
SqlParserListener.prototype.enterTableOptionKeyBlockSize = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableOptionKeyBlockSize.
SqlParserListener.prototype.exitTableOptionKeyBlockSize = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableOptionMaxRows.
SqlParserListener.prototype.enterTableOptionMaxRows = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableOptionMaxRows.
SqlParserListener.prototype.exitTableOptionMaxRows = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableOptionMinRows.
SqlParserListener.prototype.enterTableOptionMinRows = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableOptionMinRows.
SqlParserListener.prototype.exitTableOptionMinRows = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableOptionPackKeys.
SqlParserListener.prototype.enterTableOptionPackKeys = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableOptionPackKeys.
SqlParserListener.prototype.exitTableOptionPackKeys = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableOptionPassword.
SqlParserListener.prototype.enterTableOptionPassword = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableOptionPassword.
SqlParserListener.prototype.exitTableOptionPassword = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableOptionRowFormat.
SqlParserListener.prototype.enterTableOptionRowFormat = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableOptionRowFormat.
SqlParserListener.prototype.exitTableOptionRowFormat = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableOptionRecalculation.
SqlParserListener.prototype.enterTableOptionRecalculation = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableOptionRecalculation.
SqlParserListener.prototype.exitTableOptionRecalculation = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableOptionPersistent.
SqlParserListener.prototype.enterTableOptionPersistent = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableOptionPersistent.
SqlParserListener.prototype.exitTableOptionPersistent = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableOptionSamplePage.
SqlParserListener.prototype.enterTableOptionSamplePage = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableOptionSamplePage.
SqlParserListener.prototype.exitTableOptionSamplePage = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableOptionTablespace.
SqlParserListener.prototype.enterTableOptionTablespace = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableOptionTablespace.
SqlParserListener.prototype.exitTableOptionTablespace = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableOptionUnion.
SqlParserListener.prototype.enterTableOptionUnion = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableOptionUnion.
SqlParserListener.prototype.exitTableOptionUnion = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tablespaceStorage.
SqlParserListener.prototype.enterTablespaceStorage = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tablespaceStorage.
SqlParserListener.prototype.exitTablespaceStorage = function(ctx) {
};


// Enter a parse tree produced by SqlParser#partitionDefinitions.
SqlParserListener.prototype.enterPartitionDefinitions = function(ctx) {
};

// Exit a parse tree produced by SqlParser#partitionDefinitions.
SqlParserListener.prototype.exitPartitionDefinitions = function(ctx) {
};


// Enter a parse tree produced by SqlParser#partitionFunctionHash.
SqlParserListener.prototype.enterPartitionFunctionHash = function(ctx) {
};

// Exit a parse tree produced by SqlParser#partitionFunctionHash.
SqlParserListener.prototype.exitPartitionFunctionHash = function(ctx) {
};


// Enter a parse tree produced by SqlParser#partitionFunctionKey.
SqlParserListener.prototype.enterPartitionFunctionKey = function(ctx) {
};

// Exit a parse tree produced by SqlParser#partitionFunctionKey.
SqlParserListener.prototype.exitPartitionFunctionKey = function(ctx) {
};


// Enter a parse tree produced by SqlParser#partitionFunctionRange.
SqlParserListener.prototype.enterPartitionFunctionRange = function(ctx) {
};

// Exit a parse tree produced by SqlParser#partitionFunctionRange.
SqlParserListener.prototype.exitPartitionFunctionRange = function(ctx) {
};


// Enter a parse tree produced by SqlParser#partitionFunctionList.
SqlParserListener.prototype.enterPartitionFunctionList = function(ctx) {
};

// Exit a parse tree produced by SqlParser#partitionFunctionList.
SqlParserListener.prototype.exitPartitionFunctionList = function(ctx) {
};


// Enter a parse tree produced by SqlParser#subPartitionFunctionHash.
SqlParserListener.prototype.enterSubPartitionFunctionHash = function(ctx) {
};

// Exit a parse tree produced by SqlParser#subPartitionFunctionHash.
SqlParserListener.prototype.exitSubPartitionFunctionHash = function(ctx) {
};


// Enter a parse tree produced by SqlParser#subPartitionFunctionKey.
SqlParserListener.prototype.enterSubPartitionFunctionKey = function(ctx) {
};

// Exit a parse tree produced by SqlParser#subPartitionFunctionKey.
SqlParserListener.prototype.exitSubPartitionFunctionKey = function(ctx) {
};


// Enter a parse tree produced by SqlParser#partitionComparision.
SqlParserListener.prototype.enterPartitionComparision = function(ctx) {
};

// Exit a parse tree produced by SqlParser#partitionComparision.
SqlParserListener.prototype.exitPartitionComparision = function(ctx) {
};


// Enter a parse tree produced by SqlParser#partitionListAtom.
SqlParserListener.prototype.enterPartitionListAtom = function(ctx) {
};

// Exit a parse tree produced by SqlParser#partitionListAtom.
SqlParserListener.prototype.exitPartitionListAtom = function(ctx) {
};


// Enter a parse tree produced by SqlParser#partitionListVector.
SqlParserListener.prototype.enterPartitionListVector = function(ctx) {
};

// Exit a parse tree produced by SqlParser#partitionListVector.
SqlParserListener.prototype.exitPartitionListVector = function(ctx) {
};


// Enter a parse tree produced by SqlParser#partitionSimple.
SqlParserListener.prototype.enterPartitionSimple = function(ctx) {
};

// Exit a parse tree produced by SqlParser#partitionSimple.
SqlParserListener.prototype.exitPartitionSimple = function(ctx) {
};


// Enter a parse tree produced by SqlParser#partitionDefinerAtom.
SqlParserListener.prototype.enterPartitionDefinerAtom = function(ctx) {
};

// Exit a parse tree produced by SqlParser#partitionDefinerAtom.
SqlParserListener.prototype.exitPartitionDefinerAtom = function(ctx) {
};


// Enter a parse tree produced by SqlParser#partitionDefinerVector.
SqlParserListener.prototype.enterPartitionDefinerVector = function(ctx) {
};

// Exit a parse tree produced by SqlParser#partitionDefinerVector.
SqlParserListener.prototype.exitPartitionDefinerVector = function(ctx) {
};


// Enter a parse tree produced by SqlParser#subpartitionDefinition.
SqlParserListener.prototype.enterSubpartitionDefinition = function(ctx) {
};

// Exit a parse tree produced by SqlParser#subpartitionDefinition.
SqlParserListener.prototype.exitSubpartitionDefinition = function(ctx) {
};


// Enter a parse tree produced by SqlParser#partitionOptionEngine.
SqlParserListener.prototype.enterPartitionOptionEngine = function(ctx) {
};

// Exit a parse tree produced by SqlParser#partitionOptionEngine.
SqlParserListener.prototype.exitPartitionOptionEngine = function(ctx) {
};


// Enter a parse tree produced by SqlParser#partitionOptionComment.
SqlParserListener.prototype.enterPartitionOptionComment = function(ctx) {
};

// Exit a parse tree produced by SqlParser#partitionOptionComment.
SqlParserListener.prototype.exitPartitionOptionComment = function(ctx) {
};


// Enter a parse tree produced by SqlParser#partitionOptionDataDirectory.
SqlParserListener.prototype.enterPartitionOptionDataDirectory = function(ctx) {
};

// Exit a parse tree produced by SqlParser#partitionOptionDataDirectory.
SqlParserListener.prototype.exitPartitionOptionDataDirectory = function(ctx) {
};


// Enter a parse tree produced by SqlParser#partitionOptionIndexDirectory.
SqlParserListener.prototype.enterPartitionOptionIndexDirectory = function(ctx) {
};

// Exit a parse tree produced by SqlParser#partitionOptionIndexDirectory.
SqlParserListener.prototype.exitPartitionOptionIndexDirectory = function(ctx) {
};


// Enter a parse tree produced by SqlParser#partitionOptionMaxRows.
SqlParserListener.prototype.enterPartitionOptionMaxRows = function(ctx) {
};

// Exit a parse tree produced by SqlParser#partitionOptionMaxRows.
SqlParserListener.prototype.exitPartitionOptionMaxRows = function(ctx) {
};


// Enter a parse tree produced by SqlParser#partitionOptionMinRows.
SqlParserListener.prototype.enterPartitionOptionMinRows = function(ctx) {
};

// Exit a parse tree produced by SqlParser#partitionOptionMinRows.
SqlParserListener.prototype.exitPartitionOptionMinRows = function(ctx) {
};


// Enter a parse tree produced by SqlParser#partitionOptionTablespace.
SqlParserListener.prototype.enterPartitionOptionTablespace = function(ctx) {
};

// Exit a parse tree produced by SqlParser#partitionOptionTablespace.
SqlParserListener.prototype.exitPartitionOptionTablespace = function(ctx) {
};


// Enter a parse tree produced by SqlParser#partitionOptionNodeGroup.
SqlParserListener.prototype.enterPartitionOptionNodeGroup = function(ctx) {
};

// Exit a parse tree produced by SqlParser#partitionOptionNodeGroup.
SqlParserListener.prototype.exitPartitionOptionNodeGroup = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterSimpleDatabase.
SqlParserListener.prototype.enterAlterSimpleDatabase = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterSimpleDatabase.
SqlParserListener.prototype.exitAlterSimpleDatabase = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterUpgradeName.
SqlParserListener.prototype.enterAlterUpgradeName = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterUpgradeName.
SqlParserListener.prototype.exitAlterUpgradeName = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterEvent.
SqlParserListener.prototype.enterAlterEvent = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterEvent.
SqlParserListener.prototype.exitAlterEvent = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterFunction.
SqlParserListener.prototype.enterAlterFunction = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterFunction.
SqlParserListener.prototype.exitAlterFunction = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterInstance.
SqlParserListener.prototype.enterAlterInstance = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterInstance.
SqlParserListener.prototype.exitAlterInstance = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterLogfileGroup.
SqlParserListener.prototype.enterAlterLogfileGroup = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterLogfileGroup.
SqlParserListener.prototype.exitAlterLogfileGroup = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterProcedure.
SqlParserListener.prototype.enterAlterProcedure = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterProcedure.
SqlParserListener.prototype.exitAlterProcedure = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterServer.
SqlParserListener.prototype.enterAlterServer = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterServer.
SqlParserListener.prototype.exitAlterServer = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterTable.
SqlParserListener.prototype.enterAlterTable = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterTable.
SqlParserListener.prototype.exitAlterTable = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterTablespace.
SqlParserListener.prototype.enterAlterTablespace = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterTablespace.
SqlParserListener.prototype.exitAlterTablespace = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterView.
SqlParserListener.prototype.enterAlterView = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterView.
SqlParserListener.prototype.exitAlterView = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByTableOption.
SqlParserListener.prototype.enterAlterByTableOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByTableOption.
SqlParserListener.prototype.exitAlterByTableOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByAddColumn.
SqlParserListener.prototype.enterAlterByAddColumn = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByAddColumn.
SqlParserListener.prototype.exitAlterByAddColumn = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByAddColumns.
SqlParserListener.prototype.enterAlterByAddColumns = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByAddColumns.
SqlParserListener.prototype.exitAlterByAddColumns = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByAddIndex.
SqlParserListener.prototype.enterAlterByAddIndex = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByAddIndex.
SqlParserListener.prototype.exitAlterByAddIndex = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByAddPrimaryKey.
SqlParserListener.prototype.enterAlterByAddPrimaryKey = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByAddPrimaryKey.
SqlParserListener.prototype.exitAlterByAddPrimaryKey = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByAddUniqueKey.
SqlParserListener.prototype.enterAlterByAddUniqueKey = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByAddUniqueKey.
SqlParserListener.prototype.exitAlterByAddUniqueKey = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByAddSpecialIndex.
SqlParserListener.prototype.enterAlterByAddSpecialIndex = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByAddSpecialIndex.
SqlParserListener.prototype.exitAlterByAddSpecialIndex = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByAddForeignKey.
SqlParserListener.prototype.enterAlterByAddForeignKey = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByAddForeignKey.
SqlParserListener.prototype.exitAlterByAddForeignKey = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByAddCheckTableConstraint.
SqlParserListener.prototype.enterAlterByAddCheckTableConstraint = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByAddCheckTableConstraint.
SqlParserListener.prototype.exitAlterByAddCheckTableConstraint = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterBySetAlgorithm.
SqlParserListener.prototype.enterAlterBySetAlgorithm = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterBySetAlgorithm.
SqlParserListener.prototype.exitAlterBySetAlgorithm = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByChangeDefault.
SqlParserListener.prototype.enterAlterByChangeDefault = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByChangeDefault.
SqlParserListener.prototype.exitAlterByChangeDefault = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByChangeColumn.
SqlParserListener.prototype.enterAlterByChangeColumn = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByChangeColumn.
SqlParserListener.prototype.exitAlterByChangeColumn = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByRenameColumn.
SqlParserListener.prototype.enterAlterByRenameColumn = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByRenameColumn.
SqlParserListener.prototype.exitAlterByRenameColumn = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByLock.
SqlParserListener.prototype.enterAlterByLock = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByLock.
SqlParserListener.prototype.exitAlterByLock = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByModifyColumn.
SqlParserListener.prototype.enterAlterByModifyColumn = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByModifyColumn.
SqlParserListener.prototype.exitAlterByModifyColumn = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByDropColumn.
SqlParserListener.prototype.enterAlterByDropColumn = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByDropColumn.
SqlParserListener.prototype.exitAlterByDropColumn = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByDropPrimaryKey.
SqlParserListener.prototype.enterAlterByDropPrimaryKey = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByDropPrimaryKey.
SqlParserListener.prototype.exitAlterByDropPrimaryKey = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByRenameIndex.
SqlParserListener.prototype.enterAlterByRenameIndex = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByRenameIndex.
SqlParserListener.prototype.exitAlterByRenameIndex = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByAlterIndexVisibility.
SqlParserListener.prototype.enterAlterByAlterIndexVisibility = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByAlterIndexVisibility.
SqlParserListener.prototype.exitAlterByAlterIndexVisibility = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByDropIndex.
SqlParserListener.prototype.enterAlterByDropIndex = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByDropIndex.
SqlParserListener.prototype.exitAlterByDropIndex = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByDropForeignKey.
SqlParserListener.prototype.enterAlterByDropForeignKey = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByDropForeignKey.
SqlParserListener.prototype.exitAlterByDropForeignKey = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByDisableKeys.
SqlParserListener.prototype.enterAlterByDisableKeys = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByDisableKeys.
SqlParserListener.prototype.exitAlterByDisableKeys = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByEnableKeys.
SqlParserListener.prototype.enterAlterByEnableKeys = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByEnableKeys.
SqlParserListener.prototype.exitAlterByEnableKeys = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByRename.
SqlParserListener.prototype.enterAlterByRename = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByRename.
SqlParserListener.prototype.exitAlterByRename = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByOrder.
SqlParserListener.prototype.enterAlterByOrder = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByOrder.
SqlParserListener.prototype.exitAlterByOrder = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByConvertCharset.
SqlParserListener.prototype.enterAlterByConvertCharset = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByConvertCharset.
SqlParserListener.prototype.exitAlterByConvertCharset = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByDefaultCharset.
SqlParserListener.prototype.enterAlterByDefaultCharset = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByDefaultCharset.
SqlParserListener.prototype.exitAlterByDefaultCharset = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByDiscardTablespace.
SqlParserListener.prototype.enterAlterByDiscardTablespace = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByDiscardTablespace.
SqlParserListener.prototype.exitAlterByDiscardTablespace = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByImportTablespace.
SqlParserListener.prototype.enterAlterByImportTablespace = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByImportTablespace.
SqlParserListener.prototype.exitAlterByImportTablespace = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByForce.
SqlParserListener.prototype.enterAlterByForce = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByForce.
SqlParserListener.prototype.exitAlterByForce = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByValidate.
SqlParserListener.prototype.enterAlterByValidate = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByValidate.
SqlParserListener.prototype.exitAlterByValidate = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByAddPartition.
SqlParserListener.prototype.enterAlterByAddPartition = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByAddPartition.
SqlParserListener.prototype.exitAlterByAddPartition = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByDropPartition.
SqlParserListener.prototype.enterAlterByDropPartition = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByDropPartition.
SqlParserListener.prototype.exitAlterByDropPartition = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByDiscardPartition.
SqlParserListener.prototype.enterAlterByDiscardPartition = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByDiscardPartition.
SqlParserListener.prototype.exitAlterByDiscardPartition = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByImportPartition.
SqlParserListener.prototype.enterAlterByImportPartition = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByImportPartition.
SqlParserListener.prototype.exitAlterByImportPartition = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByTruncatePartition.
SqlParserListener.prototype.enterAlterByTruncatePartition = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByTruncatePartition.
SqlParserListener.prototype.exitAlterByTruncatePartition = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByCoalescePartition.
SqlParserListener.prototype.enterAlterByCoalescePartition = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByCoalescePartition.
SqlParserListener.prototype.exitAlterByCoalescePartition = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByReorganizePartition.
SqlParserListener.prototype.enterAlterByReorganizePartition = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByReorganizePartition.
SqlParserListener.prototype.exitAlterByReorganizePartition = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByExchangePartition.
SqlParserListener.prototype.enterAlterByExchangePartition = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByExchangePartition.
SqlParserListener.prototype.exitAlterByExchangePartition = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByAnalyzePartition.
SqlParserListener.prototype.enterAlterByAnalyzePartition = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByAnalyzePartition.
SqlParserListener.prototype.exitAlterByAnalyzePartition = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByCheckPartition.
SqlParserListener.prototype.enterAlterByCheckPartition = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByCheckPartition.
SqlParserListener.prototype.exitAlterByCheckPartition = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByOptimizePartition.
SqlParserListener.prototype.enterAlterByOptimizePartition = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByOptimizePartition.
SqlParserListener.prototype.exitAlterByOptimizePartition = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByRebuildPartition.
SqlParserListener.prototype.enterAlterByRebuildPartition = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByRebuildPartition.
SqlParserListener.prototype.exitAlterByRebuildPartition = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByRepairPartition.
SqlParserListener.prototype.enterAlterByRepairPartition = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByRepairPartition.
SqlParserListener.prototype.exitAlterByRepairPartition = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByRemovePartitioning.
SqlParserListener.prototype.enterAlterByRemovePartitioning = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByRemovePartitioning.
SqlParserListener.prototype.exitAlterByRemovePartitioning = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterByUpgradePartitioning.
SqlParserListener.prototype.enterAlterByUpgradePartitioning = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterByUpgradePartitioning.
SqlParserListener.prototype.exitAlterByUpgradePartitioning = function(ctx) {
};


// Enter a parse tree produced by SqlParser#dropDatabase.
SqlParserListener.prototype.enterDropDatabase = function(ctx) {
};

// Exit a parse tree produced by SqlParser#dropDatabase.
SqlParserListener.prototype.exitDropDatabase = function(ctx) {
};


// Enter a parse tree produced by SqlParser#dropEvent.
SqlParserListener.prototype.enterDropEvent = function(ctx) {
};

// Exit a parse tree produced by SqlParser#dropEvent.
SqlParserListener.prototype.exitDropEvent = function(ctx) {
};


// Enter a parse tree produced by SqlParser#dropIndex.
SqlParserListener.prototype.enterDropIndex = function(ctx) {
};

// Exit a parse tree produced by SqlParser#dropIndex.
SqlParserListener.prototype.exitDropIndex = function(ctx) {
};


// Enter a parse tree produced by SqlParser#dropLogfileGroup.
SqlParserListener.prototype.enterDropLogfileGroup = function(ctx) {
};

// Exit a parse tree produced by SqlParser#dropLogfileGroup.
SqlParserListener.prototype.exitDropLogfileGroup = function(ctx) {
};


// Enter a parse tree produced by SqlParser#dropProcedure.
SqlParserListener.prototype.enterDropProcedure = function(ctx) {
};

// Exit a parse tree produced by SqlParser#dropProcedure.
SqlParserListener.prototype.exitDropProcedure = function(ctx) {
};


// Enter a parse tree produced by SqlParser#dropFunction.
SqlParserListener.prototype.enterDropFunction = function(ctx) {
};

// Exit a parse tree produced by SqlParser#dropFunction.
SqlParserListener.prototype.exitDropFunction = function(ctx) {
};


// Enter a parse tree produced by SqlParser#dropServer.
SqlParserListener.prototype.enterDropServer = function(ctx) {
};

// Exit a parse tree produced by SqlParser#dropServer.
SqlParserListener.prototype.exitDropServer = function(ctx) {
};


// Enter a parse tree produced by SqlParser#dropTable.
SqlParserListener.prototype.enterDropTable = function(ctx) {
};

// Exit a parse tree produced by SqlParser#dropTable.
SqlParserListener.prototype.exitDropTable = function(ctx) {
};


// Enter a parse tree produced by SqlParser#dropTablespace.
SqlParserListener.prototype.enterDropTablespace = function(ctx) {
};

// Exit a parse tree produced by SqlParser#dropTablespace.
SqlParserListener.prototype.exitDropTablespace = function(ctx) {
};


// Enter a parse tree produced by SqlParser#dropTrigger.
SqlParserListener.prototype.enterDropTrigger = function(ctx) {
};

// Exit a parse tree produced by SqlParser#dropTrigger.
SqlParserListener.prototype.exitDropTrigger = function(ctx) {
};


// Enter a parse tree produced by SqlParser#dropView.
SqlParserListener.prototype.enterDropView = function(ctx) {
};

// Exit a parse tree produced by SqlParser#dropView.
SqlParserListener.prototype.exitDropView = function(ctx) {
};


// Enter a parse tree produced by SqlParser#renameTable.
SqlParserListener.prototype.enterRenameTable = function(ctx) {
};

// Exit a parse tree produced by SqlParser#renameTable.
SqlParserListener.prototype.exitRenameTable = function(ctx) {
};


// Enter a parse tree produced by SqlParser#renameTableClause.
SqlParserListener.prototype.enterRenameTableClause = function(ctx) {
};

// Exit a parse tree produced by SqlParser#renameTableClause.
SqlParserListener.prototype.exitRenameTableClause = function(ctx) {
};


// Enter a parse tree produced by SqlParser#truncateTable.
SqlParserListener.prototype.enterTruncateTable = function(ctx) {
};

// Exit a parse tree produced by SqlParser#truncateTable.
SqlParserListener.prototype.exitTruncateTable = function(ctx) {
};


// Enter a parse tree produced by SqlParser#callStatement.
SqlParserListener.prototype.enterCallStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#callStatement.
SqlParserListener.prototype.exitCallStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#deleteStatement.
SqlParserListener.prototype.enterDeleteStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#deleteStatement.
SqlParserListener.prototype.exitDeleteStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#doStatement.
SqlParserListener.prototype.enterDoStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#doStatement.
SqlParserListener.prototype.exitDoStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#handlerStatement.
SqlParserListener.prototype.enterHandlerStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#handlerStatement.
SqlParserListener.prototype.exitHandlerStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#insertStatement.
SqlParserListener.prototype.enterInsertStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#insertStatement.
SqlParserListener.prototype.exitInsertStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#loadDataStatement.
SqlParserListener.prototype.enterLoadDataStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#loadDataStatement.
SqlParserListener.prototype.exitLoadDataStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#loadXmlStatement.
SqlParserListener.prototype.enterLoadXmlStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#loadXmlStatement.
SqlParserListener.prototype.exitLoadXmlStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#replaceStatement.
SqlParserListener.prototype.enterReplaceStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#replaceStatement.
SqlParserListener.prototype.exitReplaceStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#simpleSelect.
SqlParserListener.prototype.enterSimpleSelect = function(ctx) {
};

// Exit a parse tree produced by SqlParser#simpleSelect.
SqlParserListener.prototype.exitSimpleSelect = function(ctx) {
};


// Enter a parse tree produced by SqlParser#parenthesisSelect.
SqlParserListener.prototype.enterParenthesisSelect = function(ctx) {
};

// Exit a parse tree produced by SqlParser#parenthesisSelect.
SqlParserListener.prototype.exitParenthesisSelect = function(ctx) {
};


// Enter a parse tree produced by SqlParser#unionSelect.
SqlParserListener.prototype.enterUnionSelect = function(ctx) {
};

// Exit a parse tree produced by SqlParser#unionSelect.
SqlParserListener.prototype.exitUnionSelect = function(ctx) {
};


// Enter a parse tree produced by SqlParser#unionParenthesisSelect.
SqlParserListener.prototype.enterUnionParenthesisSelect = function(ctx) {
};

// Exit a parse tree produced by SqlParser#unionParenthesisSelect.
SqlParserListener.prototype.exitUnionParenthesisSelect = function(ctx) {
};


// Enter a parse tree produced by SqlParser#updateStatement.
SqlParserListener.prototype.enterUpdateStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#updateStatement.
SqlParserListener.prototype.exitUpdateStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#insertStatementValue.
SqlParserListener.prototype.enterInsertStatementValue = function(ctx) {
};

// Exit a parse tree produced by SqlParser#insertStatementValue.
SqlParserListener.prototype.exitInsertStatementValue = function(ctx) {
};


// Enter a parse tree produced by SqlParser#updatedElement.
SqlParserListener.prototype.enterUpdatedElement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#updatedElement.
SqlParserListener.prototype.exitUpdatedElement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#assignmentField.
SqlParserListener.prototype.enterAssignmentField = function(ctx) {
};

// Exit a parse tree produced by SqlParser#assignmentField.
SqlParserListener.prototype.exitAssignmentField = function(ctx) {
};


// Enter a parse tree produced by SqlParser#lockClause.
SqlParserListener.prototype.enterLockClause = function(ctx) {
};

// Exit a parse tree produced by SqlParser#lockClause.
SqlParserListener.prototype.exitLockClause = function(ctx) {
};


// Enter a parse tree produced by SqlParser#singleDeleteStatement.
SqlParserListener.prototype.enterSingleDeleteStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#singleDeleteStatement.
SqlParserListener.prototype.exitSingleDeleteStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#multipleDeleteStatement.
SqlParserListener.prototype.enterMultipleDeleteStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#multipleDeleteStatement.
SqlParserListener.prototype.exitMultipleDeleteStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#handlerOpenStatement.
SqlParserListener.prototype.enterHandlerOpenStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#handlerOpenStatement.
SqlParserListener.prototype.exitHandlerOpenStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#handlerReadIndexStatement.
SqlParserListener.prototype.enterHandlerReadIndexStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#handlerReadIndexStatement.
SqlParserListener.prototype.exitHandlerReadIndexStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#handlerReadStatement.
SqlParserListener.prototype.enterHandlerReadStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#handlerReadStatement.
SqlParserListener.prototype.exitHandlerReadStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#handlerCloseStatement.
SqlParserListener.prototype.enterHandlerCloseStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#handlerCloseStatement.
SqlParserListener.prototype.exitHandlerCloseStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#singleUpdateStatement.
SqlParserListener.prototype.enterSingleUpdateStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#singleUpdateStatement.
SqlParserListener.prototype.exitSingleUpdateStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#multipleUpdateStatement.
SqlParserListener.prototype.enterMultipleUpdateStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#multipleUpdateStatement.
SqlParserListener.prototype.exitMultipleUpdateStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#orderByClause.
SqlParserListener.prototype.enterOrderByClause = function(ctx) {
};

// Exit a parse tree produced by SqlParser#orderByClause.
SqlParserListener.prototype.exitOrderByClause = function(ctx) {
};


// Enter a parse tree produced by SqlParser#orderByExpression.
SqlParserListener.prototype.enterOrderByExpression = function(ctx) {
};

// Exit a parse tree produced by SqlParser#orderByExpression.
SqlParserListener.prototype.exitOrderByExpression = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableSources.
SqlParserListener.prototype.enterTableSources = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableSources.
SqlParserListener.prototype.exitTableSources = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableSourceBase.
SqlParserListener.prototype.enterTableSourceBase = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableSourceBase.
SqlParserListener.prototype.exitTableSourceBase = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableSourceNested.
SqlParserListener.prototype.enterTableSourceNested = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableSourceNested.
SqlParserListener.prototype.exitTableSourceNested = function(ctx) {
};


// Enter a parse tree produced by SqlParser#atomTableItem.
SqlParserListener.prototype.enterAtomTableItem = function(ctx) {
};

// Exit a parse tree produced by SqlParser#atomTableItem.
SqlParserListener.prototype.exitAtomTableItem = function(ctx) {
};


// Enter a parse tree produced by SqlParser#subqueryTableItem.
SqlParserListener.prototype.enterSubqueryTableItem = function(ctx) {
};

// Exit a parse tree produced by SqlParser#subqueryTableItem.
SqlParserListener.prototype.exitSubqueryTableItem = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableSourcesItem.
SqlParserListener.prototype.enterTableSourcesItem = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableSourcesItem.
SqlParserListener.prototype.exitTableSourcesItem = function(ctx) {
};


// Enter a parse tree produced by SqlParser#indexHint.
SqlParserListener.prototype.enterIndexHint = function(ctx) {
};

// Exit a parse tree produced by SqlParser#indexHint.
SqlParserListener.prototype.exitIndexHint = function(ctx) {
};


// Enter a parse tree produced by SqlParser#indexHintType.
SqlParserListener.prototype.enterIndexHintType = function(ctx) {
};

// Exit a parse tree produced by SqlParser#indexHintType.
SqlParserListener.prototype.exitIndexHintType = function(ctx) {
};


// Enter a parse tree produced by SqlParser#innerJoin.
SqlParserListener.prototype.enterInnerJoin = function(ctx) {
};

// Exit a parse tree produced by SqlParser#innerJoin.
SqlParserListener.prototype.exitInnerJoin = function(ctx) {
};


// Enter a parse tree produced by SqlParser#straightJoin.
SqlParserListener.prototype.enterStraightJoin = function(ctx) {
};

// Exit a parse tree produced by SqlParser#straightJoin.
SqlParserListener.prototype.exitStraightJoin = function(ctx) {
};


// Enter a parse tree produced by SqlParser#outerJoin.
SqlParserListener.prototype.enterOuterJoin = function(ctx) {
};

// Exit a parse tree produced by SqlParser#outerJoin.
SqlParserListener.prototype.exitOuterJoin = function(ctx) {
};


// Enter a parse tree produced by SqlParser#naturalJoin.
SqlParserListener.prototype.enterNaturalJoin = function(ctx) {
};

// Exit a parse tree produced by SqlParser#naturalJoin.
SqlParserListener.prototype.exitNaturalJoin = function(ctx) {
};


// Enter a parse tree produced by SqlParser#queryExpression.
SqlParserListener.prototype.enterQueryExpression = function(ctx) {
};

// Exit a parse tree produced by SqlParser#queryExpression.
SqlParserListener.prototype.exitQueryExpression = function(ctx) {
};


// Enter a parse tree produced by SqlParser#queryExpressionNointo.
SqlParserListener.prototype.enterQueryExpressionNointo = function(ctx) {
};

// Exit a parse tree produced by SqlParser#queryExpressionNointo.
SqlParserListener.prototype.exitQueryExpressionNointo = function(ctx) {
};


// Enter a parse tree produced by SqlParser#querySpecification.
SqlParserListener.prototype.enterQuerySpecification = function(ctx) {
};

// Exit a parse tree produced by SqlParser#querySpecification.
SqlParserListener.prototype.exitQuerySpecification = function(ctx) {
};


// Enter a parse tree produced by SqlParser#querySpecificationNointo.
SqlParserListener.prototype.enterQuerySpecificationNointo = function(ctx) {
};

// Exit a parse tree produced by SqlParser#querySpecificationNointo.
SqlParserListener.prototype.exitQuerySpecificationNointo = function(ctx) {
};


// Enter a parse tree produced by SqlParser#unionParenthesis.
SqlParserListener.prototype.enterUnionParenthesis = function(ctx) {
};

// Exit a parse tree produced by SqlParser#unionParenthesis.
SqlParserListener.prototype.exitUnionParenthesis = function(ctx) {
};


// Enter a parse tree produced by SqlParser#unionStatement.
SqlParserListener.prototype.enterUnionStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#unionStatement.
SqlParserListener.prototype.exitUnionStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#selectSpec.
SqlParserListener.prototype.enterSelectSpec = function(ctx) {
};

// Exit a parse tree produced by SqlParser#selectSpec.
SqlParserListener.prototype.exitSelectSpec = function(ctx) {
};


// Enter a parse tree produced by SqlParser#selectElements.
SqlParserListener.prototype.enterSelectElements = function(ctx) {
};

// Exit a parse tree produced by SqlParser#selectElements.
SqlParserListener.prototype.exitSelectElements = function(ctx) {
};


// Enter a parse tree produced by SqlParser#selectStarElement.
SqlParserListener.prototype.enterSelectStarElement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#selectStarElement.
SqlParserListener.prototype.exitSelectStarElement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#selectColumnElement.
SqlParserListener.prototype.enterSelectColumnElement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#selectColumnElement.
SqlParserListener.prototype.exitSelectColumnElement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#selectFunctionElement.
SqlParserListener.prototype.enterSelectFunctionElement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#selectFunctionElement.
SqlParserListener.prototype.exitSelectFunctionElement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#selectExpressionElement.
SqlParserListener.prototype.enterSelectExpressionElement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#selectExpressionElement.
SqlParserListener.prototype.exitSelectExpressionElement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#selectIntoVariables.
SqlParserListener.prototype.enterSelectIntoVariables = function(ctx) {
};

// Exit a parse tree produced by SqlParser#selectIntoVariables.
SqlParserListener.prototype.exitSelectIntoVariables = function(ctx) {
};


// Enter a parse tree produced by SqlParser#selectIntoDumpFile.
SqlParserListener.prototype.enterSelectIntoDumpFile = function(ctx) {
};

// Exit a parse tree produced by SqlParser#selectIntoDumpFile.
SqlParserListener.prototype.exitSelectIntoDumpFile = function(ctx) {
};


// Enter a parse tree produced by SqlParser#selectIntoTextFile.
SqlParserListener.prototype.enterSelectIntoTextFile = function(ctx) {
};

// Exit a parse tree produced by SqlParser#selectIntoTextFile.
SqlParserListener.prototype.exitSelectIntoTextFile = function(ctx) {
};


// Enter a parse tree produced by SqlParser#selectFieldsInto.
SqlParserListener.prototype.enterSelectFieldsInto = function(ctx) {
};

// Exit a parse tree produced by SqlParser#selectFieldsInto.
SqlParserListener.prototype.exitSelectFieldsInto = function(ctx) {
};


// Enter a parse tree produced by SqlParser#selectLinesInto.
SqlParserListener.prototype.enterSelectLinesInto = function(ctx) {
};

// Exit a parse tree produced by SqlParser#selectLinesInto.
SqlParserListener.prototype.exitSelectLinesInto = function(ctx) {
};


// Enter a parse tree produced by SqlParser#fromClause.
SqlParserListener.prototype.enterFromClause = function(ctx) {
};

// Exit a parse tree produced by SqlParser#fromClause.
SqlParserListener.prototype.exitFromClause = function(ctx) {
};


// Enter a parse tree produced by SqlParser#groupByItem.
SqlParserListener.prototype.enterGroupByItem = function(ctx) {
};

// Exit a parse tree produced by SqlParser#groupByItem.
SqlParserListener.prototype.exitGroupByItem = function(ctx) {
};


// Enter a parse tree produced by SqlParser#limitClause.
SqlParserListener.prototype.enterLimitClause = function(ctx) {
};

// Exit a parse tree produced by SqlParser#limitClause.
SqlParserListener.prototype.exitLimitClause = function(ctx) {
};


// Enter a parse tree produced by SqlParser#limitClauseAtom.
SqlParserListener.prototype.enterLimitClauseAtom = function(ctx) {
};

// Exit a parse tree produced by SqlParser#limitClauseAtom.
SqlParserListener.prototype.exitLimitClauseAtom = function(ctx) {
};


// Enter a parse tree produced by SqlParser#startTransaction.
SqlParserListener.prototype.enterStartTransaction = function(ctx) {
};

// Exit a parse tree produced by SqlParser#startTransaction.
SqlParserListener.prototype.exitStartTransaction = function(ctx) {
};


// Enter a parse tree produced by SqlParser#beginWork.
SqlParserListener.prototype.enterBeginWork = function(ctx) {
};

// Exit a parse tree produced by SqlParser#beginWork.
SqlParserListener.prototype.exitBeginWork = function(ctx) {
};


// Enter a parse tree produced by SqlParser#commitWork.
SqlParserListener.prototype.enterCommitWork = function(ctx) {
};

// Exit a parse tree produced by SqlParser#commitWork.
SqlParserListener.prototype.exitCommitWork = function(ctx) {
};


// Enter a parse tree produced by SqlParser#rollbackWork.
SqlParserListener.prototype.enterRollbackWork = function(ctx) {
};

// Exit a parse tree produced by SqlParser#rollbackWork.
SqlParserListener.prototype.exitRollbackWork = function(ctx) {
};


// Enter a parse tree produced by SqlParser#savepointStatement.
SqlParserListener.prototype.enterSavepointStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#savepointStatement.
SqlParserListener.prototype.exitSavepointStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#rollbackStatement.
SqlParserListener.prototype.enterRollbackStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#rollbackStatement.
SqlParserListener.prototype.exitRollbackStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#releaseStatement.
SqlParserListener.prototype.enterReleaseStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#releaseStatement.
SqlParserListener.prototype.exitReleaseStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#lockTables.
SqlParserListener.prototype.enterLockTables = function(ctx) {
};

// Exit a parse tree produced by SqlParser#lockTables.
SqlParserListener.prototype.exitLockTables = function(ctx) {
};


// Enter a parse tree produced by SqlParser#unlockTables.
SqlParserListener.prototype.enterUnlockTables = function(ctx) {
};

// Exit a parse tree produced by SqlParser#unlockTables.
SqlParserListener.prototype.exitUnlockTables = function(ctx) {
};


// Enter a parse tree produced by SqlParser#setAutocommitStatement.
SqlParserListener.prototype.enterSetAutocommitStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#setAutocommitStatement.
SqlParserListener.prototype.exitSetAutocommitStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#setTransactionStatement.
SqlParserListener.prototype.enterSetTransactionStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#setTransactionStatement.
SqlParserListener.prototype.exitSetTransactionStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#transactionMode.
SqlParserListener.prototype.enterTransactionMode = function(ctx) {
};

// Exit a parse tree produced by SqlParser#transactionMode.
SqlParserListener.prototype.exitTransactionMode = function(ctx) {
};


// Enter a parse tree produced by SqlParser#lockTableElement.
SqlParserListener.prototype.enterLockTableElement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#lockTableElement.
SqlParserListener.prototype.exitLockTableElement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#lockAction.
SqlParserListener.prototype.enterLockAction = function(ctx) {
};

// Exit a parse tree produced by SqlParser#lockAction.
SqlParserListener.prototype.exitLockAction = function(ctx) {
};


// Enter a parse tree produced by SqlParser#transactionOption.
SqlParserListener.prototype.enterTransactionOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#transactionOption.
SqlParserListener.prototype.exitTransactionOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#transactionLevel.
SqlParserListener.prototype.enterTransactionLevel = function(ctx) {
};

// Exit a parse tree produced by SqlParser#transactionLevel.
SqlParserListener.prototype.exitTransactionLevel = function(ctx) {
};


// Enter a parse tree produced by SqlParser#changeMaster.
SqlParserListener.prototype.enterChangeMaster = function(ctx) {
};

// Exit a parse tree produced by SqlParser#changeMaster.
SqlParserListener.prototype.exitChangeMaster = function(ctx) {
};


// Enter a parse tree produced by SqlParser#changeReplicationFilter.
SqlParserListener.prototype.enterChangeReplicationFilter = function(ctx) {
};

// Exit a parse tree produced by SqlParser#changeReplicationFilter.
SqlParserListener.prototype.exitChangeReplicationFilter = function(ctx) {
};


// Enter a parse tree produced by SqlParser#purgeBinaryLogs.
SqlParserListener.prototype.enterPurgeBinaryLogs = function(ctx) {
};

// Exit a parse tree produced by SqlParser#purgeBinaryLogs.
SqlParserListener.prototype.exitPurgeBinaryLogs = function(ctx) {
};


// Enter a parse tree produced by SqlParser#resetMaster.
SqlParserListener.prototype.enterResetMaster = function(ctx) {
};

// Exit a parse tree produced by SqlParser#resetMaster.
SqlParserListener.prototype.exitResetMaster = function(ctx) {
};


// Enter a parse tree produced by SqlParser#resetSlave.
SqlParserListener.prototype.enterResetSlave = function(ctx) {
};

// Exit a parse tree produced by SqlParser#resetSlave.
SqlParserListener.prototype.exitResetSlave = function(ctx) {
};


// Enter a parse tree produced by SqlParser#startSlave.
SqlParserListener.prototype.enterStartSlave = function(ctx) {
};

// Exit a parse tree produced by SqlParser#startSlave.
SqlParserListener.prototype.exitStartSlave = function(ctx) {
};


// Enter a parse tree produced by SqlParser#stopSlave.
SqlParserListener.prototype.enterStopSlave = function(ctx) {
};

// Exit a parse tree produced by SqlParser#stopSlave.
SqlParserListener.prototype.exitStopSlave = function(ctx) {
};


// Enter a parse tree produced by SqlParser#startGroupReplication.
SqlParserListener.prototype.enterStartGroupReplication = function(ctx) {
};

// Exit a parse tree produced by SqlParser#startGroupReplication.
SqlParserListener.prototype.exitStartGroupReplication = function(ctx) {
};


// Enter a parse tree produced by SqlParser#stopGroupReplication.
SqlParserListener.prototype.enterStopGroupReplication = function(ctx) {
};

// Exit a parse tree produced by SqlParser#stopGroupReplication.
SqlParserListener.prototype.exitStopGroupReplication = function(ctx) {
};


// Enter a parse tree produced by SqlParser#masterStringOption.
SqlParserListener.prototype.enterMasterStringOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#masterStringOption.
SqlParserListener.prototype.exitMasterStringOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#masterDecimalOption.
SqlParserListener.prototype.enterMasterDecimalOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#masterDecimalOption.
SqlParserListener.prototype.exitMasterDecimalOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#masterBoolOption.
SqlParserListener.prototype.enterMasterBoolOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#masterBoolOption.
SqlParserListener.prototype.exitMasterBoolOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#masterRealOption.
SqlParserListener.prototype.enterMasterRealOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#masterRealOption.
SqlParserListener.prototype.exitMasterRealOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#masterUidListOption.
SqlParserListener.prototype.enterMasterUidListOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#masterUidListOption.
SqlParserListener.prototype.exitMasterUidListOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#stringMasterOption.
SqlParserListener.prototype.enterStringMasterOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#stringMasterOption.
SqlParserListener.prototype.exitStringMasterOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#decimalMasterOption.
SqlParserListener.prototype.enterDecimalMasterOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#decimalMasterOption.
SqlParserListener.prototype.exitDecimalMasterOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#boolMasterOption.
SqlParserListener.prototype.enterBoolMasterOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#boolMasterOption.
SqlParserListener.prototype.exitBoolMasterOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#channelOption.
SqlParserListener.prototype.enterChannelOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#channelOption.
SqlParserListener.prototype.exitChannelOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#doDbReplication.
SqlParserListener.prototype.enterDoDbReplication = function(ctx) {
};

// Exit a parse tree produced by SqlParser#doDbReplication.
SqlParserListener.prototype.exitDoDbReplication = function(ctx) {
};


// Enter a parse tree produced by SqlParser#ignoreDbReplication.
SqlParserListener.prototype.enterIgnoreDbReplication = function(ctx) {
};

// Exit a parse tree produced by SqlParser#ignoreDbReplication.
SqlParserListener.prototype.exitIgnoreDbReplication = function(ctx) {
};


// Enter a parse tree produced by SqlParser#doTableReplication.
SqlParserListener.prototype.enterDoTableReplication = function(ctx) {
};

// Exit a parse tree produced by SqlParser#doTableReplication.
SqlParserListener.prototype.exitDoTableReplication = function(ctx) {
};


// Enter a parse tree produced by SqlParser#ignoreTableReplication.
SqlParserListener.prototype.enterIgnoreTableReplication = function(ctx) {
};

// Exit a parse tree produced by SqlParser#ignoreTableReplication.
SqlParserListener.prototype.exitIgnoreTableReplication = function(ctx) {
};


// Enter a parse tree produced by SqlParser#wildDoTableReplication.
SqlParserListener.prototype.enterWildDoTableReplication = function(ctx) {
};

// Exit a parse tree produced by SqlParser#wildDoTableReplication.
SqlParserListener.prototype.exitWildDoTableReplication = function(ctx) {
};


// Enter a parse tree produced by SqlParser#wildIgnoreTableReplication.
SqlParserListener.prototype.enterWildIgnoreTableReplication = function(ctx) {
};

// Exit a parse tree produced by SqlParser#wildIgnoreTableReplication.
SqlParserListener.prototype.exitWildIgnoreTableReplication = function(ctx) {
};


// Enter a parse tree produced by SqlParser#rewriteDbReplication.
SqlParserListener.prototype.enterRewriteDbReplication = function(ctx) {
};

// Exit a parse tree produced by SqlParser#rewriteDbReplication.
SqlParserListener.prototype.exitRewriteDbReplication = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tablePair.
SqlParserListener.prototype.enterTablePair = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tablePair.
SqlParserListener.prototype.exitTablePair = function(ctx) {
};


// Enter a parse tree produced by SqlParser#threadType.
SqlParserListener.prototype.enterThreadType = function(ctx) {
};

// Exit a parse tree produced by SqlParser#threadType.
SqlParserListener.prototype.exitThreadType = function(ctx) {
};


// Enter a parse tree produced by SqlParser#gtidsUntilOption.
SqlParserListener.prototype.enterGtidsUntilOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#gtidsUntilOption.
SqlParserListener.prototype.exitGtidsUntilOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#masterLogUntilOption.
SqlParserListener.prototype.enterMasterLogUntilOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#masterLogUntilOption.
SqlParserListener.prototype.exitMasterLogUntilOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#relayLogUntilOption.
SqlParserListener.prototype.enterRelayLogUntilOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#relayLogUntilOption.
SqlParserListener.prototype.exitRelayLogUntilOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#sqlGapsUntilOption.
SqlParserListener.prototype.enterSqlGapsUntilOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#sqlGapsUntilOption.
SqlParserListener.prototype.exitSqlGapsUntilOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#userConnectionOption.
SqlParserListener.prototype.enterUserConnectionOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#userConnectionOption.
SqlParserListener.prototype.exitUserConnectionOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#passwordConnectionOption.
SqlParserListener.prototype.enterPasswordConnectionOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#passwordConnectionOption.
SqlParserListener.prototype.exitPasswordConnectionOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#defaultAuthConnectionOption.
SqlParserListener.prototype.enterDefaultAuthConnectionOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#defaultAuthConnectionOption.
SqlParserListener.prototype.exitDefaultAuthConnectionOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#pluginDirConnectionOption.
SqlParserListener.prototype.enterPluginDirConnectionOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#pluginDirConnectionOption.
SqlParserListener.prototype.exitPluginDirConnectionOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#gtuidSet.
SqlParserListener.prototype.enterGtuidSet = function(ctx) {
};

// Exit a parse tree produced by SqlParser#gtuidSet.
SqlParserListener.prototype.exitGtuidSet = function(ctx) {
};


// Enter a parse tree produced by SqlParser#xaStartTransaction.
SqlParserListener.prototype.enterXaStartTransaction = function(ctx) {
};

// Exit a parse tree produced by SqlParser#xaStartTransaction.
SqlParserListener.prototype.exitXaStartTransaction = function(ctx) {
};


// Enter a parse tree produced by SqlParser#xaEndTransaction.
SqlParserListener.prototype.enterXaEndTransaction = function(ctx) {
};

// Exit a parse tree produced by SqlParser#xaEndTransaction.
SqlParserListener.prototype.exitXaEndTransaction = function(ctx) {
};


// Enter a parse tree produced by SqlParser#xaPrepareStatement.
SqlParserListener.prototype.enterXaPrepareStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#xaPrepareStatement.
SqlParserListener.prototype.exitXaPrepareStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#xaCommitWork.
SqlParserListener.prototype.enterXaCommitWork = function(ctx) {
};

// Exit a parse tree produced by SqlParser#xaCommitWork.
SqlParserListener.prototype.exitXaCommitWork = function(ctx) {
};


// Enter a parse tree produced by SqlParser#xaRollbackWork.
SqlParserListener.prototype.enterXaRollbackWork = function(ctx) {
};

// Exit a parse tree produced by SqlParser#xaRollbackWork.
SqlParserListener.prototype.exitXaRollbackWork = function(ctx) {
};


// Enter a parse tree produced by SqlParser#xaRecoverWork.
SqlParserListener.prototype.enterXaRecoverWork = function(ctx) {
};

// Exit a parse tree produced by SqlParser#xaRecoverWork.
SqlParserListener.prototype.exitXaRecoverWork = function(ctx) {
};


// Enter a parse tree produced by SqlParser#prepareStatement.
SqlParserListener.prototype.enterPrepareStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#prepareStatement.
SqlParserListener.prototype.exitPrepareStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#executeStatement.
SqlParserListener.prototype.enterExecuteStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#executeStatement.
SqlParserListener.prototype.exitExecuteStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#deallocatePrepare.
SqlParserListener.prototype.enterDeallocatePrepare = function(ctx) {
};

// Exit a parse tree produced by SqlParser#deallocatePrepare.
SqlParserListener.prototype.exitDeallocatePrepare = function(ctx) {
};


// Enter a parse tree produced by SqlParser#routineBody.
SqlParserListener.prototype.enterRoutineBody = function(ctx) {
};

// Exit a parse tree produced by SqlParser#routineBody.
SqlParserListener.prototype.exitRoutineBody = function(ctx) {
};


// Enter a parse tree produced by SqlParser#blockStatement.
SqlParserListener.prototype.enterBlockStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#blockStatement.
SqlParserListener.prototype.exitBlockStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#caseStatement.
SqlParserListener.prototype.enterCaseStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#caseStatement.
SqlParserListener.prototype.exitCaseStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#ifStatement.
SqlParserListener.prototype.enterIfStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#ifStatement.
SqlParserListener.prototype.exitIfStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#iterateStatement.
SqlParserListener.prototype.enterIterateStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#iterateStatement.
SqlParserListener.prototype.exitIterateStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#leaveStatement.
SqlParserListener.prototype.enterLeaveStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#leaveStatement.
SqlParserListener.prototype.exitLeaveStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#loopStatement.
SqlParserListener.prototype.enterLoopStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#loopStatement.
SqlParserListener.prototype.exitLoopStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#repeatStatement.
SqlParserListener.prototype.enterRepeatStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#repeatStatement.
SqlParserListener.prototype.exitRepeatStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#returnStatement.
SqlParserListener.prototype.enterReturnStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#returnStatement.
SqlParserListener.prototype.exitReturnStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#whileStatement.
SqlParserListener.prototype.enterWhileStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#whileStatement.
SqlParserListener.prototype.exitWhileStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#CloseCursor.
SqlParserListener.prototype.enterCloseCursor = function(ctx) {
};

// Exit a parse tree produced by SqlParser#CloseCursor.
SqlParserListener.prototype.exitCloseCursor = function(ctx) {
};


// Enter a parse tree produced by SqlParser#FetchCursor.
SqlParserListener.prototype.enterFetchCursor = function(ctx) {
};

// Exit a parse tree produced by SqlParser#FetchCursor.
SqlParserListener.prototype.exitFetchCursor = function(ctx) {
};


// Enter a parse tree produced by SqlParser#OpenCursor.
SqlParserListener.prototype.enterOpenCursor = function(ctx) {
};

// Exit a parse tree produced by SqlParser#OpenCursor.
SqlParserListener.prototype.exitOpenCursor = function(ctx) {
};


// Enter a parse tree produced by SqlParser#declareVariable.
SqlParserListener.prototype.enterDeclareVariable = function(ctx) {
};

// Exit a parse tree produced by SqlParser#declareVariable.
SqlParserListener.prototype.exitDeclareVariable = function(ctx) {
};


// Enter a parse tree produced by SqlParser#declareCondition.
SqlParserListener.prototype.enterDeclareCondition = function(ctx) {
};

// Exit a parse tree produced by SqlParser#declareCondition.
SqlParserListener.prototype.exitDeclareCondition = function(ctx) {
};


// Enter a parse tree produced by SqlParser#declareCursor.
SqlParserListener.prototype.enterDeclareCursor = function(ctx) {
};

// Exit a parse tree produced by SqlParser#declareCursor.
SqlParserListener.prototype.exitDeclareCursor = function(ctx) {
};


// Enter a parse tree produced by SqlParser#declareHandler.
SqlParserListener.prototype.enterDeclareHandler = function(ctx) {
};

// Exit a parse tree produced by SqlParser#declareHandler.
SqlParserListener.prototype.exitDeclareHandler = function(ctx) {
};


// Enter a parse tree produced by SqlParser#handlerConditionCode.
SqlParserListener.prototype.enterHandlerConditionCode = function(ctx) {
};

// Exit a parse tree produced by SqlParser#handlerConditionCode.
SqlParserListener.prototype.exitHandlerConditionCode = function(ctx) {
};


// Enter a parse tree produced by SqlParser#handlerConditionState.
SqlParserListener.prototype.enterHandlerConditionState = function(ctx) {
};

// Exit a parse tree produced by SqlParser#handlerConditionState.
SqlParserListener.prototype.exitHandlerConditionState = function(ctx) {
};


// Enter a parse tree produced by SqlParser#handlerConditionName.
SqlParserListener.prototype.enterHandlerConditionName = function(ctx) {
};

// Exit a parse tree produced by SqlParser#handlerConditionName.
SqlParserListener.prototype.exitHandlerConditionName = function(ctx) {
};


// Enter a parse tree produced by SqlParser#handlerConditionWarning.
SqlParserListener.prototype.enterHandlerConditionWarning = function(ctx) {
};

// Exit a parse tree produced by SqlParser#handlerConditionWarning.
SqlParserListener.prototype.exitHandlerConditionWarning = function(ctx) {
};


// Enter a parse tree produced by SqlParser#handlerConditionNotfound.
SqlParserListener.prototype.enterHandlerConditionNotfound = function(ctx) {
};

// Exit a parse tree produced by SqlParser#handlerConditionNotfound.
SqlParserListener.prototype.exitHandlerConditionNotfound = function(ctx) {
};


// Enter a parse tree produced by SqlParser#handlerConditionException.
SqlParserListener.prototype.enterHandlerConditionException = function(ctx) {
};

// Exit a parse tree produced by SqlParser#handlerConditionException.
SqlParserListener.prototype.exitHandlerConditionException = function(ctx) {
};


// Enter a parse tree produced by SqlParser#procedureSqlStatement.
SqlParserListener.prototype.enterProcedureSqlStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#procedureSqlStatement.
SqlParserListener.prototype.exitProcedureSqlStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#caseAlternative.
SqlParserListener.prototype.enterCaseAlternative = function(ctx) {
};

// Exit a parse tree produced by SqlParser#caseAlternative.
SqlParserListener.prototype.exitCaseAlternative = function(ctx) {
};


// Enter a parse tree produced by SqlParser#elifAlternative.
SqlParserListener.prototype.enterElifAlternative = function(ctx) {
};

// Exit a parse tree produced by SqlParser#elifAlternative.
SqlParserListener.prototype.exitElifAlternative = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterUserMysqlV56.
SqlParserListener.prototype.enterAlterUserMysqlV56 = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterUserMysqlV56.
SqlParserListener.prototype.exitAlterUserMysqlV56 = function(ctx) {
};


// Enter a parse tree produced by SqlParser#alterUserMysqlV57.
SqlParserListener.prototype.enterAlterUserMysqlV57 = function(ctx) {
};

// Exit a parse tree produced by SqlParser#alterUserMysqlV57.
SqlParserListener.prototype.exitAlterUserMysqlV57 = function(ctx) {
};


// Enter a parse tree produced by SqlParser#createUserMysqlV56.
SqlParserListener.prototype.enterCreateUserMysqlV56 = function(ctx) {
};

// Exit a parse tree produced by SqlParser#createUserMysqlV56.
SqlParserListener.prototype.exitCreateUserMysqlV56 = function(ctx) {
};


// Enter a parse tree produced by SqlParser#createUserMysqlV57.
SqlParserListener.prototype.enterCreateUserMysqlV57 = function(ctx) {
};

// Exit a parse tree produced by SqlParser#createUserMysqlV57.
SqlParserListener.prototype.exitCreateUserMysqlV57 = function(ctx) {
};


// Enter a parse tree produced by SqlParser#dropUser.
SqlParserListener.prototype.enterDropUser = function(ctx) {
};

// Exit a parse tree produced by SqlParser#dropUser.
SqlParserListener.prototype.exitDropUser = function(ctx) {
};


// Enter a parse tree produced by SqlParser#grantStatement.
SqlParserListener.prototype.enterGrantStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#grantStatement.
SqlParserListener.prototype.exitGrantStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#grantProxy.
SqlParserListener.prototype.enterGrantProxy = function(ctx) {
};

// Exit a parse tree produced by SqlParser#grantProxy.
SqlParserListener.prototype.exitGrantProxy = function(ctx) {
};


// Enter a parse tree produced by SqlParser#renameUser.
SqlParserListener.prototype.enterRenameUser = function(ctx) {
};

// Exit a parse tree produced by SqlParser#renameUser.
SqlParserListener.prototype.exitRenameUser = function(ctx) {
};


// Enter a parse tree produced by SqlParser#detailRevoke.
SqlParserListener.prototype.enterDetailRevoke = function(ctx) {
};

// Exit a parse tree produced by SqlParser#detailRevoke.
SqlParserListener.prototype.exitDetailRevoke = function(ctx) {
};


// Enter a parse tree produced by SqlParser#shortRevoke.
SqlParserListener.prototype.enterShortRevoke = function(ctx) {
};

// Exit a parse tree produced by SqlParser#shortRevoke.
SqlParserListener.prototype.exitShortRevoke = function(ctx) {
};


// Enter a parse tree produced by SqlParser#revokeProxy.
SqlParserListener.prototype.enterRevokeProxy = function(ctx) {
};

// Exit a parse tree produced by SqlParser#revokeProxy.
SqlParserListener.prototype.exitRevokeProxy = function(ctx) {
};


// Enter a parse tree produced by SqlParser#setPasswordStatement.
SqlParserListener.prototype.enterSetPasswordStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#setPasswordStatement.
SqlParserListener.prototype.exitSetPasswordStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#userSpecification.
SqlParserListener.prototype.enterUserSpecification = function(ctx) {
};

// Exit a parse tree produced by SqlParser#userSpecification.
SqlParserListener.prototype.exitUserSpecification = function(ctx) {
};


// Enter a parse tree produced by SqlParser#passwordAuthOption.
SqlParserListener.prototype.enterPasswordAuthOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#passwordAuthOption.
SqlParserListener.prototype.exitPasswordAuthOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#stringAuthOption.
SqlParserListener.prototype.enterStringAuthOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#stringAuthOption.
SqlParserListener.prototype.exitStringAuthOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#hashAuthOption.
SqlParserListener.prototype.enterHashAuthOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#hashAuthOption.
SqlParserListener.prototype.exitHashAuthOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#simpleAuthOption.
SqlParserListener.prototype.enterSimpleAuthOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#simpleAuthOption.
SqlParserListener.prototype.exitSimpleAuthOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tlsOption.
SqlParserListener.prototype.enterTlsOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tlsOption.
SqlParserListener.prototype.exitTlsOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#userResourceOption.
SqlParserListener.prototype.enterUserResourceOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#userResourceOption.
SqlParserListener.prototype.exitUserResourceOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#userPasswordOption.
SqlParserListener.prototype.enterUserPasswordOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#userPasswordOption.
SqlParserListener.prototype.exitUserPasswordOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#userLockOption.
SqlParserListener.prototype.enterUserLockOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#userLockOption.
SqlParserListener.prototype.exitUserLockOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#privelegeClause.
SqlParserListener.prototype.enterPrivelegeClause = function(ctx) {
};

// Exit a parse tree produced by SqlParser#privelegeClause.
SqlParserListener.prototype.exitPrivelegeClause = function(ctx) {
};


// Enter a parse tree produced by SqlParser#privilege.
SqlParserListener.prototype.enterPrivilege = function(ctx) {
};

// Exit a parse tree produced by SqlParser#privilege.
SqlParserListener.prototype.exitPrivilege = function(ctx) {
};


// Enter a parse tree produced by SqlParser#currentSchemaPriviLevel.
SqlParserListener.prototype.enterCurrentSchemaPriviLevel = function(ctx) {
};

// Exit a parse tree produced by SqlParser#currentSchemaPriviLevel.
SqlParserListener.prototype.exitCurrentSchemaPriviLevel = function(ctx) {
};


// Enter a parse tree produced by SqlParser#globalPrivLevel.
SqlParserListener.prototype.enterGlobalPrivLevel = function(ctx) {
};

// Exit a parse tree produced by SqlParser#globalPrivLevel.
SqlParserListener.prototype.exitGlobalPrivLevel = function(ctx) {
};


// Enter a parse tree produced by SqlParser#definiteSchemaPrivLevel.
SqlParserListener.prototype.enterDefiniteSchemaPrivLevel = function(ctx) {
};

// Exit a parse tree produced by SqlParser#definiteSchemaPrivLevel.
SqlParserListener.prototype.exitDefiniteSchemaPrivLevel = function(ctx) {
};


// Enter a parse tree produced by SqlParser#definiteFullTablePrivLevel.
SqlParserListener.prototype.enterDefiniteFullTablePrivLevel = function(ctx) {
};

// Exit a parse tree produced by SqlParser#definiteFullTablePrivLevel.
SqlParserListener.prototype.exitDefiniteFullTablePrivLevel = function(ctx) {
};


// Enter a parse tree produced by SqlParser#definiteFullTablePrivLevel2.
SqlParserListener.prototype.enterDefiniteFullTablePrivLevel2 = function(ctx) {
};

// Exit a parse tree produced by SqlParser#definiteFullTablePrivLevel2.
SqlParserListener.prototype.exitDefiniteFullTablePrivLevel2 = function(ctx) {
};


// Enter a parse tree produced by SqlParser#definiteTablePrivLevel.
SqlParserListener.prototype.enterDefiniteTablePrivLevel = function(ctx) {
};

// Exit a parse tree produced by SqlParser#definiteTablePrivLevel.
SqlParserListener.prototype.exitDefiniteTablePrivLevel = function(ctx) {
};


// Enter a parse tree produced by SqlParser#renameUserClause.
SqlParserListener.prototype.enterRenameUserClause = function(ctx) {
};

// Exit a parse tree produced by SqlParser#renameUserClause.
SqlParserListener.prototype.exitRenameUserClause = function(ctx) {
};


// Enter a parse tree produced by SqlParser#analyzeTable.
SqlParserListener.prototype.enterAnalyzeTable = function(ctx) {
};

// Exit a parse tree produced by SqlParser#analyzeTable.
SqlParserListener.prototype.exitAnalyzeTable = function(ctx) {
};


// Enter a parse tree produced by SqlParser#checkTable.
SqlParserListener.prototype.enterCheckTable = function(ctx) {
};

// Exit a parse tree produced by SqlParser#checkTable.
SqlParserListener.prototype.exitCheckTable = function(ctx) {
};


// Enter a parse tree produced by SqlParser#checksumTable.
SqlParserListener.prototype.enterChecksumTable = function(ctx) {
};

// Exit a parse tree produced by SqlParser#checksumTable.
SqlParserListener.prototype.exitChecksumTable = function(ctx) {
};


// Enter a parse tree produced by SqlParser#optimizeTable.
SqlParserListener.prototype.enterOptimizeTable = function(ctx) {
};

// Exit a parse tree produced by SqlParser#optimizeTable.
SqlParserListener.prototype.exitOptimizeTable = function(ctx) {
};


// Enter a parse tree produced by SqlParser#repairTable.
SqlParserListener.prototype.enterRepairTable = function(ctx) {
};

// Exit a parse tree produced by SqlParser#repairTable.
SqlParserListener.prototype.exitRepairTable = function(ctx) {
};


// Enter a parse tree produced by SqlParser#checkTableOption.
SqlParserListener.prototype.enterCheckTableOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#checkTableOption.
SqlParserListener.prototype.exitCheckTableOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#createUdfunction.
SqlParserListener.prototype.enterCreateUdfunction = function(ctx) {
};

// Exit a parse tree produced by SqlParser#createUdfunction.
SqlParserListener.prototype.exitCreateUdfunction = function(ctx) {
};


// Enter a parse tree produced by SqlParser#installPlugin.
SqlParserListener.prototype.enterInstallPlugin = function(ctx) {
};

// Exit a parse tree produced by SqlParser#installPlugin.
SqlParserListener.prototype.exitInstallPlugin = function(ctx) {
};


// Enter a parse tree produced by SqlParser#uninstallPlugin.
SqlParserListener.prototype.enterUninstallPlugin = function(ctx) {
};

// Exit a parse tree produced by SqlParser#uninstallPlugin.
SqlParserListener.prototype.exitUninstallPlugin = function(ctx) {
};


// Enter a parse tree produced by SqlParser#setVariable.
SqlParserListener.prototype.enterSetVariable = function(ctx) {
};

// Exit a parse tree produced by SqlParser#setVariable.
SqlParserListener.prototype.exitSetVariable = function(ctx) {
};


// Enter a parse tree produced by SqlParser#setCharset.
SqlParserListener.prototype.enterSetCharset = function(ctx) {
};

// Exit a parse tree produced by SqlParser#setCharset.
SqlParserListener.prototype.exitSetCharset = function(ctx) {
};


// Enter a parse tree produced by SqlParser#setNames.
SqlParserListener.prototype.enterSetNames = function(ctx) {
};

// Exit a parse tree produced by SqlParser#setNames.
SqlParserListener.prototype.exitSetNames = function(ctx) {
};


// Enter a parse tree produced by SqlParser#setPassword.
SqlParserListener.prototype.enterSetPassword = function(ctx) {
};

// Exit a parse tree produced by SqlParser#setPassword.
SqlParserListener.prototype.exitSetPassword = function(ctx) {
};


// Enter a parse tree produced by SqlParser#setTransaction.
SqlParserListener.prototype.enterSetTransaction = function(ctx) {
};

// Exit a parse tree produced by SqlParser#setTransaction.
SqlParserListener.prototype.exitSetTransaction = function(ctx) {
};


// Enter a parse tree produced by SqlParser#setAutocommit.
SqlParserListener.prototype.enterSetAutocommit = function(ctx) {
};

// Exit a parse tree produced by SqlParser#setAutocommit.
SqlParserListener.prototype.exitSetAutocommit = function(ctx) {
};


// Enter a parse tree produced by SqlParser#setNewValueInsideTrigger.
SqlParserListener.prototype.enterSetNewValueInsideTrigger = function(ctx) {
};

// Exit a parse tree produced by SqlParser#setNewValueInsideTrigger.
SqlParserListener.prototype.exitSetNewValueInsideTrigger = function(ctx) {
};


// Enter a parse tree produced by SqlParser#showMasterLogs.
SqlParserListener.prototype.enterShowMasterLogs = function(ctx) {
};

// Exit a parse tree produced by SqlParser#showMasterLogs.
SqlParserListener.prototype.exitShowMasterLogs = function(ctx) {
};


// Enter a parse tree produced by SqlParser#showLogEvents.
SqlParserListener.prototype.enterShowLogEvents = function(ctx) {
};

// Exit a parse tree produced by SqlParser#showLogEvents.
SqlParserListener.prototype.exitShowLogEvents = function(ctx) {
};


// Enter a parse tree produced by SqlParser#showObjectFilter.
SqlParserListener.prototype.enterShowObjectFilter = function(ctx) {
};

// Exit a parse tree produced by SqlParser#showObjectFilter.
SqlParserListener.prototype.exitShowObjectFilter = function(ctx) {
};


// Enter a parse tree produced by SqlParser#showColumns.
SqlParserListener.prototype.enterShowColumns = function(ctx) {
};

// Exit a parse tree produced by SqlParser#showColumns.
SqlParserListener.prototype.exitShowColumns = function(ctx) {
};


// Enter a parse tree produced by SqlParser#showCreateDb.
SqlParserListener.prototype.enterShowCreateDb = function(ctx) {
};

// Exit a parse tree produced by SqlParser#showCreateDb.
SqlParserListener.prototype.exitShowCreateDb = function(ctx) {
};


// Enter a parse tree produced by SqlParser#showCreateFullIdObject.
SqlParserListener.prototype.enterShowCreateFullIdObject = function(ctx) {
};

// Exit a parse tree produced by SqlParser#showCreateFullIdObject.
SqlParserListener.prototype.exitShowCreateFullIdObject = function(ctx) {
};


// Enter a parse tree produced by SqlParser#showCreateUser.
SqlParserListener.prototype.enterShowCreateUser = function(ctx) {
};

// Exit a parse tree produced by SqlParser#showCreateUser.
SqlParserListener.prototype.exitShowCreateUser = function(ctx) {
};


// Enter a parse tree produced by SqlParser#showEngine.
SqlParserListener.prototype.enterShowEngine = function(ctx) {
};

// Exit a parse tree produced by SqlParser#showEngine.
SqlParserListener.prototype.exitShowEngine = function(ctx) {
};


// Enter a parse tree produced by SqlParser#showGlobalInfo.
SqlParserListener.prototype.enterShowGlobalInfo = function(ctx) {
};

// Exit a parse tree produced by SqlParser#showGlobalInfo.
SqlParserListener.prototype.exitShowGlobalInfo = function(ctx) {
};


// Enter a parse tree produced by SqlParser#showErrors.
SqlParserListener.prototype.enterShowErrors = function(ctx) {
};

// Exit a parse tree produced by SqlParser#showErrors.
SqlParserListener.prototype.exitShowErrors = function(ctx) {
};


// Enter a parse tree produced by SqlParser#showCountErrors.
SqlParserListener.prototype.enterShowCountErrors = function(ctx) {
};

// Exit a parse tree produced by SqlParser#showCountErrors.
SqlParserListener.prototype.exitShowCountErrors = function(ctx) {
};


// Enter a parse tree produced by SqlParser#showSchemaFilter.
SqlParserListener.prototype.enterShowSchemaFilter = function(ctx) {
};

// Exit a parse tree produced by SqlParser#showSchemaFilter.
SqlParserListener.prototype.exitShowSchemaFilter = function(ctx) {
};


// Enter a parse tree produced by SqlParser#showRoutine.
SqlParserListener.prototype.enterShowRoutine = function(ctx) {
};

// Exit a parse tree produced by SqlParser#showRoutine.
SqlParserListener.prototype.exitShowRoutine = function(ctx) {
};


// Enter a parse tree produced by SqlParser#showGrants.
SqlParserListener.prototype.enterShowGrants = function(ctx) {
};

// Exit a parse tree produced by SqlParser#showGrants.
SqlParserListener.prototype.exitShowGrants = function(ctx) {
};


// Enter a parse tree produced by SqlParser#showIndexes.
SqlParserListener.prototype.enterShowIndexes = function(ctx) {
};

// Exit a parse tree produced by SqlParser#showIndexes.
SqlParserListener.prototype.exitShowIndexes = function(ctx) {
};


// Enter a parse tree produced by SqlParser#showOpenTables.
SqlParserListener.prototype.enterShowOpenTables = function(ctx) {
};

// Exit a parse tree produced by SqlParser#showOpenTables.
SqlParserListener.prototype.exitShowOpenTables = function(ctx) {
};


// Enter a parse tree produced by SqlParser#showProfile.
SqlParserListener.prototype.enterShowProfile = function(ctx) {
};

// Exit a parse tree produced by SqlParser#showProfile.
SqlParserListener.prototype.exitShowProfile = function(ctx) {
};


// Enter a parse tree produced by SqlParser#showSlaveStatus.
SqlParserListener.prototype.enterShowSlaveStatus = function(ctx) {
};

// Exit a parse tree produced by SqlParser#showSlaveStatus.
SqlParserListener.prototype.exitShowSlaveStatus = function(ctx) {
};


// Enter a parse tree produced by SqlParser#variableClause.
SqlParserListener.prototype.enterVariableClause = function(ctx) {
};

// Exit a parse tree produced by SqlParser#variableClause.
SqlParserListener.prototype.exitVariableClause = function(ctx) {
};


// Enter a parse tree produced by SqlParser#showCommonEntity.
SqlParserListener.prototype.enterShowCommonEntity = function(ctx) {
};

// Exit a parse tree produced by SqlParser#showCommonEntity.
SqlParserListener.prototype.exitShowCommonEntity = function(ctx) {
};


// Enter a parse tree produced by SqlParser#showFilter.
SqlParserListener.prototype.enterShowFilter = function(ctx) {
};

// Exit a parse tree produced by SqlParser#showFilter.
SqlParserListener.prototype.exitShowFilter = function(ctx) {
};


// Enter a parse tree produced by SqlParser#showGlobalInfoClause.
SqlParserListener.prototype.enterShowGlobalInfoClause = function(ctx) {
};

// Exit a parse tree produced by SqlParser#showGlobalInfoClause.
SqlParserListener.prototype.exitShowGlobalInfoClause = function(ctx) {
};


// Enter a parse tree produced by SqlParser#showSchemaEntity.
SqlParserListener.prototype.enterShowSchemaEntity = function(ctx) {
};

// Exit a parse tree produced by SqlParser#showSchemaEntity.
SqlParserListener.prototype.exitShowSchemaEntity = function(ctx) {
};


// Enter a parse tree produced by SqlParser#showProfileType.
SqlParserListener.prototype.enterShowProfileType = function(ctx) {
};

// Exit a parse tree produced by SqlParser#showProfileType.
SqlParserListener.prototype.exitShowProfileType = function(ctx) {
};


// Enter a parse tree produced by SqlParser#binlogStatement.
SqlParserListener.prototype.enterBinlogStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#binlogStatement.
SqlParserListener.prototype.exitBinlogStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#cacheIndexStatement.
SqlParserListener.prototype.enterCacheIndexStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#cacheIndexStatement.
SqlParserListener.prototype.exitCacheIndexStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#flushStatement.
SqlParserListener.prototype.enterFlushStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#flushStatement.
SqlParserListener.prototype.exitFlushStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#killStatement.
SqlParserListener.prototype.enterKillStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#killStatement.
SqlParserListener.prototype.exitKillStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#loadIndexIntoCache.
SqlParserListener.prototype.enterLoadIndexIntoCache = function(ctx) {
};

// Exit a parse tree produced by SqlParser#loadIndexIntoCache.
SqlParserListener.prototype.exitLoadIndexIntoCache = function(ctx) {
};


// Enter a parse tree produced by SqlParser#resetStatement.
SqlParserListener.prototype.enterResetStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#resetStatement.
SqlParserListener.prototype.exitResetStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#shutdownStatement.
SqlParserListener.prototype.enterShutdownStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#shutdownStatement.
SqlParserListener.prototype.exitShutdownStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableIndexes.
SqlParserListener.prototype.enterTableIndexes = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableIndexes.
SqlParserListener.prototype.exitTableIndexes = function(ctx) {
};


// Enter a parse tree produced by SqlParser#simpleFlushOption.
SqlParserListener.prototype.enterSimpleFlushOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#simpleFlushOption.
SqlParserListener.prototype.exitSimpleFlushOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#channelFlushOption.
SqlParserListener.prototype.enterChannelFlushOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#channelFlushOption.
SqlParserListener.prototype.exitChannelFlushOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableFlushOption.
SqlParserListener.prototype.enterTableFlushOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableFlushOption.
SqlParserListener.prototype.exitTableFlushOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#flushTableOption.
SqlParserListener.prototype.enterFlushTableOption = function(ctx) {
};

// Exit a parse tree produced by SqlParser#flushTableOption.
SqlParserListener.prototype.exitFlushTableOption = function(ctx) {
};


// Enter a parse tree produced by SqlParser#loadedTableIndexes.
SqlParserListener.prototype.enterLoadedTableIndexes = function(ctx) {
};

// Exit a parse tree produced by SqlParser#loadedTableIndexes.
SqlParserListener.prototype.exitLoadedTableIndexes = function(ctx) {
};


// Enter a parse tree produced by SqlParser#simpleDescribeStatement.
SqlParserListener.prototype.enterSimpleDescribeStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#simpleDescribeStatement.
SqlParserListener.prototype.exitSimpleDescribeStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#fullDescribeStatement.
SqlParserListener.prototype.enterFullDescribeStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#fullDescribeStatement.
SqlParserListener.prototype.exitFullDescribeStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#helpStatement.
SqlParserListener.prototype.enterHelpStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#helpStatement.
SqlParserListener.prototype.exitHelpStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#useStatement.
SqlParserListener.prototype.enterUseStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#useStatement.
SqlParserListener.prototype.exitUseStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#signalStatement.
SqlParserListener.prototype.enterSignalStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#signalStatement.
SqlParserListener.prototype.exitSignalStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#resignalStatement.
SqlParserListener.prototype.enterResignalStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#resignalStatement.
SqlParserListener.prototype.exitResignalStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#signalConditionInformation.
SqlParserListener.prototype.enterSignalConditionInformation = function(ctx) {
};

// Exit a parse tree produced by SqlParser#signalConditionInformation.
SqlParserListener.prototype.exitSignalConditionInformation = function(ctx) {
};


// Enter a parse tree produced by SqlParser#diagnosticsStatement.
SqlParserListener.prototype.enterDiagnosticsStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#diagnosticsStatement.
SqlParserListener.prototype.exitDiagnosticsStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#diagnosticsConditionInformationName.
SqlParserListener.prototype.enterDiagnosticsConditionInformationName = function(ctx) {
};

// Exit a parse tree produced by SqlParser#diagnosticsConditionInformationName.
SqlParserListener.prototype.exitDiagnosticsConditionInformationName = function(ctx) {
};


// Enter a parse tree produced by SqlParser#describeStatements.
SqlParserListener.prototype.enterDescribeStatements = function(ctx) {
};

// Exit a parse tree produced by SqlParser#describeStatements.
SqlParserListener.prototype.exitDescribeStatements = function(ctx) {
};


// Enter a parse tree produced by SqlParser#describeConnection.
SqlParserListener.prototype.enterDescribeConnection = function(ctx) {
};

// Exit a parse tree produced by SqlParser#describeConnection.
SqlParserListener.prototype.exitDescribeConnection = function(ctx) {
};


// Enter a parse tree produced by SqlParser#fullId.
SqlParserListener.prototype.enterFullId = function(ctx) {
};

// Exit a parse tree produced by SqlParser#fullId.
SqlParserListener.prototype.exitFullId = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableName.
SqlParserListener.prototype.enterTableName = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableName.
SqlParserListener.prototype.exitTableName = function(ctx) {
};


// Enter a parse tree produced by SqlParser#fullColumnName.
SqlParserListener.prototype.enterFullColumnName = function(ctx) {
};

// Exit a parse tree produced by SqlParser#fullColumnName.
SqlParserListener.prototype.exitFullColumnName = function(ctx) {
};


// Enter a parse tree produced by SqlParser#indexColumnName.
SqlParserListener.prototype.enterIndexColumnName = function(ctx) {
};

// Exit a parse tree produced by SqlParser#indexColumnName.
SqlParserListener.prototype.exitIndexColumnName = function(ctx) {
};


// Enter a parse tree produced by SqlParser#userName.
SqlParserListener.prototype.enterUserName = function(ctx) {
};

// Exit a parse tree produced by SqlParser#userName.
SqlParserListener.prototype.exitUserName = function(ctx) {
};


// Enter a parse tree produced by SqlParser#mysqlVariable.
SqlParserListener.prototype.enterMysqlVariable = function(ctx) {
};

// Exit a parse tree produced by SqlParser#mysqlVariable.
SqlParserListener.prototype.exitMysqlVariable = function(ctx) {
};


// Enter a parse tree produced by SqlParser#charsetName.
SqlParserListener.prototype.enterCharsetName = function(ctx) {
};

// Exit a parse tree produced by SqlParser#charsetName.
SqlParserListener.prototype.exitCharsetName = function(ctx) {
};


// Enter a parse tree produced by SqlParser#collationName.
SqlParserListener.prototype.enterCollationName = function(ctx) {
};

// Exit a parse tree produced by SqlParser#collationName.
SqlParserListener.prototype.exitCollationName = function(ctx) {
};


// Enter a parse tree produced by SqlParser#engineName.
SqlParserListener.prototype.enterEngineName = function(ctx) {
};

// Exit a parse tree produced by SqlParser#engineName.
SqlParserListener.prototype.exitEngineName = function(ctx) {
};


// Enter a parse tree produced by SqlParser#uuidSet.
SqlParserListener.prototype.enterUuidSet = function(ctx) {
};

// Exit a parse tree produced by SqlParser#uuidSet.
SqlParserListener.prototype.exitUuidSet = function(ctx) {
};


// Enter a parse tree produced by SqlParser#xid.
SqlParserListener.prototype.enterXid = function(ctx) {
};

// Exit a parse tree produced by SqlParser#xid.
SqlParserListener.prototype.exitXid = function(ctx) {
};


// Enter a parse tree produced by SqlParser#xuidStringId.
SqlParserListener.prototype.enterXuidStringId = function(ctx) {
};

// Exit a parse tree produced by SqlParser#xuidStringId.
SqlParserListener.prototype.exitXuidStringId = function(ctx) {
};


// Enter a parse tree produced by SqlParser#authPlugin.
SqlParserListener.prototype.enterAuthPlugin = function(ctx) {
};

// Exit a parse tree produced by SqlParser#authPlugin.
SqlParserListener.prototype.exitAuthPlugin = function(ctx) {
};


// Enter a parse tree produced by SqlParser#uid.
SqlParserListener.prototype.enterUid = function(ctx) {
};

// Exit a parse tree produced by SqlParser#uid.
SqlParserListener.prototype.exitUid = function(ctx) {
};


// Enter a parse tree produced by SqlParser#simpleId.
SqlParserListener.prototype.enterSimpleId = function(ctx) {
};

// Exit a parse tree produced by SqlParser#simpleId.
SqlParserListener.prototype.exitSimpleId = function(ctx) {
};


// Enter a parse tree produced by SqlParser#dottedId.
SqlParserListener.prototype.enterDottedId = function(ctx) {
};

// Exit a parse tree produced by SqlParser#dottedId.
SqlParserListener.prototype.exitDottedId = function(ctx) {
};


// Enter a parse tree produced by SqlParser#decimalLiteral.
SqlParserListener.prototype.enterDecimalLiteral = function(ctx) {
};

// Exit a parse tree produced by SqlParser#decimalLiteral.
SqlParserListener.prototype.exitDecimalLiteral = function(ctx) {
};


// Enter a parse tree produced by SqlParser#fileSizeLiteral.
SqlParserListener.prototype.enterFileSizeLiteral = function(ctx) {
};

// Exit a parse tree produced by SqlParser#fileSizeLiteral.
SqlParserListener.prototype.exitFileSizeLiteral = function(ctx) {
};


// Enter a parse tree produced by SqlParser#stringLiteral.
SqlParserListener.prototype.enterStringLiteral = function(ctx) {
};

// Exit a parse tree produced by SqlParser#stringLiteral.
SqlParserListener.prototype.exitStringLiteral = function(ctx) {
};


// Enter a parse tree produced by SqlParser#booleanLiteral.
SqlParserListener.prototype.enterBooleanLiteral = function(ctx) {
};

// Exit a parse tree produced by SqlParser#booleanLiteral.
SqlParserListener.prototype.exitBooleanLiteral = function(ctx) {
};


// Enter a parse tree produced by SqlParser#hexadecimalLiteral.
SqlParserListener.prototype.enterHexadecimalLiteral = function(ctx) {
};

// Exit a parse tree produced by SqlParser#hexadecimalLiteral.
SqlParserListener.prototype.exitHexadecimalLiteral = function(ctx) {
};


// Enter a parse tree produced by SqlParser#nullNotnull.
SqlParserListener.prototype.enterNullNotnull = function(ctx) {
};

// Exit a parse tree produced by SqlParser#nullNotnull.
SqlParserListener.prototype.exitNullNotnull = function(ctx) {
};


// Enter a parse tree produced by SqlParser#constant.
SqlParserListener.prototype.enterConstant = function(ctx) {
};

// Exit a parse tree produced by SqlParser#constant.
SqlParserListener.prototype.exitConstant = function(ctx) {
};


// Enter a parse tree produced by SqlParser#stringDataType.
SqlParserListener.prototype.enterStringDataType = function(ctx) {
};

// Exit a parse tree produced by SqlParser#stringDataType.
SqlParserListener.prototype.exitStringDataType = function(ctx) {
};


// Enter a parse tree produced by SqlParser#nationalStringDataType.
SqlParserListener.prototype.enterNationalStringDataType = function(ctx) {
};

// Exit a parse tree produced by SqlParser#nationalStringDataType.
SqlParserListener.prototype.exitNationalStringDataType = function(ctx) {
};


// Enter a parse tree produced by SqlParser#nationalVaryingStringDataType.
SqlParserListener.prototype.enterNationalVaryingStringDataType = function(ctx) {
};

// Exit a parse tree produced by SqlParser#nationalVaryingStringDataType.
SqlParserListener.prototype.exitNationalVaryingStringDataType = function(ctx) {
};


// Enter a parse tree produced by SqlParser#dimensionDataType.
SqlParserListener.prototype.enterDimensionDataType = function(ctx) {
};

// Exit a parse tree produced by SqlParser#dimensionDataType.
SqlParserListener.prototype.exitDimensionDataType = function(ctx) {
};


// Enter a parse tree produced by SqlParser#simpleDataType.
SqlParserListener.prototype.enterSimpleDataType = function(ctx) {
};

// Exit a parse tree produced by SqlParser#simpleDataType.
SqlParserListener.prototype.exitSimpleDataType = function(ctx) {
};


// Enter a parse tree produced by SqlParser#collectionDataType.
SqlParserListener.prototype.enterCollectionDataType = function(ctx) {
};

// Exit a parse tree produced by SqlParser#collectionDataType.
SqlParserListener.prototype.exitCollectionDataType = function(ctx) {
};


// Enter a parse tree produced by SqlParser#spatialDataType.
SqlParserListener.prototype.enterSpatialDataType = function(ctx) {
};

// Exit a parse tree produced by SqlParser#spatialDataType.
SqlParserListener.prototype.exitSpatialDataType = function(ctx) {
};


// Enter a parse tree produced by SqlParser#longVarcharDataType.
SqlParserListener.prototype.enterLongVarcharDataType = function(ctx) {
};

// Exit a parse tree produced by SqlParser#longVarcharDataType.
SqlParserListener.prototype.exitLongVarcharDataType = function(ctx) {
};


// Enter a parse tree produced by SqlParser#longVarbinaryDataType.
SqlParserListener.prototype.enterLongVarbinaryDataType = function(ctx) {
};

// Exit a parse tree produced by SqlParser#longVarbinaryDataType.
SqlParserListener.prototype.exitLongVarbinaryDataType = function(ctx) {
};


// Enter a parse tree produced by SqlParser#collectionOptions.
SqlParserListener.prototype.enterCollectionOptions = function(ctx) {
};

// Exit a parse tree produced by SqlParser#collectionOptions.
SqlParserListener.prototype.exitCollectionOptions = function(ctx) {
};


// Enter a parse tree produced by SqlParser#convertedDataType.
SqlParserListener.prototype.enterConvertedDataType = function(ctx) {
};

// Exit a parse tree produced by SqlParser#convertedDataType.
SqlParserListener.prototype.exitConvertedDataType = function(ctx) {
};


// Enter a parse tree produced by SqlParser#lengthOneDimension.
SqlParserListener.prototype.enterLengthOneDimension = function(ctx) {
};

// Exit a parse tree produced by SqlParser#lengthOneDimension.
SqlParserListener.prototype.exitLengthOneDimension = function(ctx) {
};


// Enter a parse tree produced by SqlParser#lengthTwoDimension.
SqlParserListener.prototype.enterLengthTwoDimension = function(ctx) {
};

// Exit a parse tree produced by SqlParser#lengthTwoDimension.
SqlParserListener.prototype.exitLengthTwoDimension = function(ctx) {
};


// Enter a parse tree produced by SqlParser#lengthTwoOptionalDimension.
SqlParserListener.prototype.enterLengthTwoOptionalDimension = function(ctx) {
};

// Exit a parse tree produced by SqlParser#lengthTwoOptionalDimension.
SqlParserListener.prototype.exitLengthTwoOptionalDimension = function(ctx) {
};


// Enter a parse tree produced by SqlParser#uidList.
SqlParserListener.prototype.enterUidList = function(ctx) {
};

// Exit a parse tree produced by SqlParser#uidList.
SqlParserListener.prototype.exitUidList = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tables.
SqlParserListener.prototype.enterTables = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tables.
SqlParserListener.prototype.exitTables = function(ctx) {
};


// Enter a parse tree produced by SqlParser#indexColumnNames.
SqlParserListener.prototype.enterIndexColumnNames = function(ctx) {
};

// Exit a parse tree produced by SqlParser#indexColumnNames.
SqlParserListener.prototype.exitIndexColumnNames = function(ctx) {
};


// Enter a parse tree produced by SqlParser#expressions.
SqlParserListener.prototype.enterExpressions = function(ctx) {
};

// Exit a parse tree produced by SqlParser#expressions.
SqlParserListener.prototype.exitExpressions = function(ctx) {
};


// Enter a parse tree produced by SqlParser#expressionsWithDefaults.
SqlParserListener.prototype.enterExpressionsWithDefaults = function(ctx) {
};

// Exit a parse tree produced by SqlParser#expressionsWithDefaults.
SqlParserListener.prototype.exitExpressionsWithDefaults = function(ctx) {
};


// Enter a parse tree produced by SqlParser#constants.
SqlParserListener.prototype.enterConstants = function(ctx) {
};

// Exit a parse tree produced by SqlParser#constants.
SqlParserListener.prototype.exitConstants = function(ctx) {
};


// Enter a parse tree produced by SqlParser#simpleStrings.
SqlParserListener.prototype.enterSimpleStrings = function(ctx) {
};

// Exit a parse tree produced by SqlParser#simpleStrings.
SqlParserListener.prototype.exitSimpleStrings = function(ctx) {
};


// Enter a parse tree produced by SqlParser#userVariables.
SqlParserListener.prototype.enterUserVariables = function(ctx) {
};

// Exit a parse tree produced by SqlParser#userVariables.
SqlParserListener.prototype.exitUserVariables = function(ctx) {
};


// Enter a parse tree produced by SqlParser#defaultValue.
SqlParserListener.prototype.enterDefaultValue = function(ctx) {
};

// Exit a parse tree produced by SqlParser#defaultValue.
SqlParserListener.prototype.exitDefaultValue = function(ctx) {
};


// Enter a parse tree produced by SqlParser#currentTimestamp.
SqlParserListener.prototype.enterCurrentTimestamp = function(ctx) {
};

// Exit a parse tree produced by SqlParser#currentTimestamp.
SqlParserListener.prototype.exitCurrentTimestamp = function(ctx) {
};


// Enter a parse tree produced by SqlParser#expressionOrDefault.
SqlParserListener.prototype.enterExpressionOrDefault = function(ctx) {
};

// Exit a parse tree produced by SqlParser#expressionOrDefault.
SqlParserListener.prototype.exitExpressionOrDefault = function(ctx) {
};


// Enter a parse tree produced by SqlParser#ifExists.
SqlParserListener.prototype.enterIfExists = function(ctx) {
};

// Exit a parse tree produced by SqlParser#ifExists.
SqlParserListener.prototype.exitIfExists = function(ctx) {
};


// Enter a parse tree produced by SqlParser#ifNotExists.
SqlParserListener.prototype.enterIfNotExists = function(ctx) {
};

// Exit a parse tree produced by SqlParser#ifNotExists.
SqlParserListener.prototype.exitIfNotExists = function(ctx) {
};


// Enter a parse tree produced by SqlParser#specificFunctionCall.
SqlParserListener.prototype.enterSpecificFunctionCall = function(ctx) {
};

// Exit a parse tree produced by SqlParser#specificFunctionCall.
SqlParserListener.prototype.exitSpecificFunctionCall = function(ctx) {
};


// Enter a parse tree produced by SqlParser#aggregateFunctionCall.
SqlParserListener.prototype.enterAggregateFunctionCall = function(ctx) {
};

// Exit a parse tree produced by SqlParser#aggregateFunctionCall.
SqlParserListener.prototype.exitAggregateFunctionCall = function(ctx) {
};


// Enter a parse tree produced by SqlParser#scalarFunctionCall.
SqlParserListener.prototype.enterScalarFunctionCall = function(ctx) {
};

// Exit a parse tree produced by SqlParser#scalarFunctionCall.
SqlParserListener.prototype.exitScalarFunctionCall = function(ctx) {
};


// Enter a parse tree produced by SqlParser#udfFunctionCall.
SqlParserListener.prototype.enterUdfFunctionCall = function(ctx) {
};

// Exit a parse tree produced by SqlParser#udfFunctionCall.
SqlParserListener.prototype.exitUdfFunctionCall = function(ctx) {
};


// Enter a parse tree produced by SqlParser#passwordFunctionCall.
SqlParserListener.prototype.enterPasswordFunctionCall = function(ctx) {
};

// Exit a parse tree produced by SqlParser#passwordFunctionCall.
SqlParserListener.prototype.exitPasswordFunctionCall = function(ctx) {
};


// Enter a parse tree produced by SqlParser#simpleFunctionCall.
SqlParserListener.prototype.enterSimpleFunctionCall = function(ctx) {
};

// Exit a parse tree produced by SqlParser#simpleFunctionCall.
SqlParserListener.prototype.exitSimpleFunctionCall = function(ctx) {
};


// Enter a parse tree produced by SqlParser#dataTypeFunctionCall.
SqlParserListener.prototype.enterDataTypeFunctionCall = function(ctx) {
};

// Exit a parse tree produced by SqlParser#dataTypeFunctionCall.
SqlParserListener.prototype.exitDataTypeFunctionCall = function(ctx) {
};


// Enter a parse tree produced by SqlParser#valuesFunctionCall.
SqlParserListener.prototype.enterValuesFunctionCall = function(ctx) {
};

// Exit a parse tree produced by SqlParser#valuesFunctionCall.
SqlParserListener.prototype.exitValuesFunctionCall = function(ctx) {
};


// Enter a parse tree produced by SqlParser#caseFunctionCall.
SqlParserListener.prototype.enterCaseFunctionCall = function(ctx) {
};

// Exit a parse tree produced by SqlParser#caseFunctionCall.
SqlParserListener.prototype.exitCaseFunctionCall = function(ctx) {
};


// Enter a parse tree produced by SqlParser#charFunctionCall.
SqlParserListener.prototype.enterCharFunctionCall = function(ctx) {
};

// Exit a parse tree produced by SqlParser#charFunctionCall.
SqlParserListener.prototype.exitCharFunctionCall = function(ctx) {
};


// Enter a parse tree produced by SqlParser#positionFunctionCall.
SqlParserListener.prototype.enterPositionFunctionCall = function(ctx) {
};

// Exit a parse tree produced by SqlParser#positionFunctionCall.
SqlParserListener.prototype.exitPositionFunctionCall = function(ctx) {
};


// Enter a parse tree produced by SqlParser#substrFunctionCall.
SqlParserListener.prototype.enterSubstrFunctionCall = function(ctx) {
};

// Exit a parse tree produced by SqlParser#substrFunctionCall.
SqlParserListener.prototype.exitSubstrFunctionCall = function(ctx) {
};


// Enter a parse tree produced by SqlParser#trimFunctionCall.
SqlParserListener.prototype.enterTrimFunctionCall = function(ctx) {
};

// Exit a parse tree produced by SqlParser#trimFunctionCall.
SqlParserListener.prototype.exitTrimFunctionCall = function(ctx) {
};


// Enter a parse tree produced by SqlParser#weightFunctionCall.
SqlParserListener.prototype.enterWeightFunctionCall = function(ctx) {
};

// Exit a parse tree produced by SqlParser#weightFunctionCall.
SqlParserListener.prototype.exitWeightFunctionCall = function(ctx) {
};


// Enter a parse tree produced by SqlParser#extractFunctionCall.
SqlParserListener.prototype.enterExtractFunctionCall = function(ctx) {
};

// Exit a parse tree produced by SqlParser#extractFunctionCall.
SqlParserListener.prototype.exitExtractFunctionCall = function(ctx) {
};


// Enter a parse tree produced by SqlParser#getFormatFunctionCall.
SqlParserListener.prototype.enterGetFormatFunctionCall = function(ctx) {
};

// Exit a parse tree produced by SqlParser#getFormatFunctionCall.
SqlParserListener.prototype.exitGetFormatFunctionCall = function(ctx) {
};


// Enter a parse tree produced by SqlParser#caseFuncAlternative.
SqlParserListener.prototype.enterCaseFuncAlternative = function(ctx) {
};

// Exit a parse tree produced by SqlParser#caseFuncAlternative.
SqlParserListener.prototype.exitCaseFuncAlternative = function(ctx) {
};


// Enter a parse tree produced by SqlParser#levelWeightList.
SqlParserListener.prototype.enterLevelWeightList = function(ctx) {
};

// Exit a parse tree produced by SqlParser#levelWeightList.
SqlParserListener.prototype.exitLevelWeightList = function(ctx) {
};


// Enter a parse tree produced by SqlParser#levelWeightRange.
SqlParserListener.prototype.enterLevelWeightRange = function(ctx) {
};

// Exit a parse tree produced by SqlParser#levelWeightRange.
SqlParserListener.prototype.exitLevelWeightRange = function(ctx) {
};


// Enter a parse tree produced by SqlParser#levelInWeightListElement.
SqlParserListener.prototype.enterLevelInWeightListElement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#levelInWeightListElement.
SqlParserListener.prototype.exitLevelInWeightListElement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#aggregateWindowedFunction.
SqlParserListener.prototype.enterAggregateWindowedFunction = function(ctx) {
};

// Exit a parse tree produced by SqlParser#aggregateWindowedFunction.
SqlParserListener.prototype.exitAggregateWindowedFunction = function(ctx) {
};


// Enter a parse tree produced by SqlParser#scalarFunctionName.
SqlParserListener.prototype.enterScalarFunctionName = function(ctx) {
};

// Exit a parse tree produced by SqlParser#scalarFunctionName.
SqlParserListener.prototype.exitScalarFunctionName = function(ctx) {
};


// Enter a parse tree produced by SqlParser#passwordFunctionClause.
SqlParserListener.prototype.enterPasswordFunctionClause = function(ctx) {
};

// Exit a parse tree produced by SqlParser#passwordFunctionClause.
SqlParserListener.prototype.exitPasswordFunctionClause = function(ctx) {
};


// Enter a parse tree produced by SqlParser#functionArgs.
SqlParserListener.prototype.enterFunctionArgs = function(ctx) {
};

// Exit a parse tree produced by SqlParser#functionArgs.
SqlParserListener.prototype.exitFunctionArgs = function(ctx) {
};


// Enter a parse tree produced by SqlParser#functionArg.
SqlParserListener.prototype.enterFunctionArg = function(ctx) {
};

// Exit a parse tree produced by SqlParser#functionArg.
SqlParserListener.prototype.exitFunctionArg = function(ctx) {
};


// Enter a parse tree produced by SqlParser#isExpression.
SqlParserListener.prototype.enterIsExpression = function(ctx) {
};

// Exit a parse tree produced by SqlParser#isExpression.
SqlParserListener.prototype.exitIsExpression = function(ctx) {
};


// Enter a parse tree produced by SqlParser#notExpression.
SqlParserListener.prototype.enterNotExpression = function(ctx) {
};

// Exit a parse tree produced by SqlParser#notExpression.
SqlParserListener.prototype.exitNotExpression = function(ctx) {
};


// Enter a parse tree produced by SqlParser#logicalExpression.
SqlParserListener.prototype.enterLogicalExpression = function(ctx) {
};

// Exit a parse tree produced by SqlParser#logicalExpression.
SqlParserListener.prototype.exitLogicalExpression = function(ctx) {
};


// Enter a parse tree produced by SqlParser#predicateExpression.
SqlParserListener.prototype.enterPredicateExpression = function(ctx) {
};

// Exit a parse tree produced by SqlParser#predicateExpression.
SqlParserListener.prototype.exitPredicateExpression = function(ctx) {
};


// Enter a parse tree produced by SqlParser#soundsLikePredicate.
SqlParserListener.prototype.enterSoundsLikePredicate = function(ctx) {
};

// Exit a parse tree produced by SqlParser#soundsLikePredicate.
SqlParserListener.prototype.exitSoundsLikePredicate = function(ctx) {
};


// Enter a parse tree produced by SqlParser#expressionAtomPredicate.
SqlParserListener.prototype.enterExpressionAtomPredicate = function(ctx) {
};

// Exit a parse tree produced by SqlParser#expressionAtomPredicate.
SqlParserListener.prototype.exitExpressionAtomPredicate = function(ctx) {
};


// Enter a parse tree produced by SqlParser#inPredicate.
SqlParserListener.prototype.enterInPredicate = function(ctx) {
};

// Exit a parse tree produced by SqlParser#inPredicate.
SqlParserListener.prototype.exitInPredicate = function(ctx) {
};


// Enter a parse tree produced by SqlParser#subqueryComparasionPredicate.
SqlParserListener.prototype.enterSubqueryComparasionPredicate = function(ctx) {
};

// Exit a parse tree produced by SqlParser#subqueryComparasionPredicate.
SqlParserListener.prototype.exitSubqueryComparasionPredicate = function(ctx) {
};


// Enter a parse tree produced by SqlParser#betweenPredicate.
SqlParserListener.prototype.enterBetweenPredicate = function(ctx) {
};

// Exit a parse tree produced by SqlParser#betweenPredicate.
SqlParserListener.prototype.exitBetweenPredicate = function(ctx) {
};


// Enter a parse tree produced by SqlParser#binaryComparasionPredicate.
SqlParserListener.prototype.enterBinaryComparasionPredicate = function(ctx) {
};

// Exit a parse tree produced by SqlParser#binaryComparasionPredicate.
SqlParserListener.prototype.exitBinaryComparasionPredicate = function(ctx) {
};


// Enter a parse tree produced by SqlParser#isNullPredicate.
SqlParserListener.prototype.enterIsNullPredicate = function(ctx) {
};

// Exit a parse tree produced by SqlParser#isNullPredicate.
SqlParserListener.prototype.exitIsNullPredicate = function(ctx) {
};


// Enter a parse tree produced by SqlParser#likePredicate.
SqlParserListener.prototype.enterLikePredicate = function(ctx) {
};

// Exit a parse tree produced by SqlParser#likePredicate.
SqlParserListener.prototype.exitLikePredicate = function(ctx) {
};


// Enter a parse tree produced by SqlParser#regexpPredicate.
SqlParserListener.prototype.enterRegexpPredicate = function(ctx) {
};

// Exit a parse tree produced by SqlParser#regexpPredicate.
SqlParserListener.prototype.exitRegexpPredicate = function(ctx) {
};


// Enter a parse tree produced by SqlParser#unaryExpressionAtom.
SqlParserListener.prototype.enterUnaryExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by SqlParser#unaryExpressionAtom.
SqlParserListener.prototype.exitUnaryExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by SqlParser#collateExpressionAtom.
SqlParserListener.prototype.enterCollateExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by SqlParser#collateExpressionAtom.
SqlParserListener.prototype.exitCollateExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by SqlParser#subqueryExpessionAtom.
SqlParserListener.prototype.enterSubqueryExpessionAtom = function(ctx) {
};

// Exit a parse tree produced by SqlParser#subqueryExpessionAtom.
SqlParserListener.prototype.exitSubqueryExpessionAtom = function(ctx) {
};


// Enter a parse tree produced by SqlParser#mysqlVariableExpressionAtom.
SqlParserListener.prototype.enterMysqlVariableExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by SqlParser#mysqlVariableExpressionAtom.
SqlParserListener.prototype.exitMysqlVariableExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by SqlParser#nestedExpressionAtom.
SqlParserListener.prototype.enterNestedExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by SqlParser#nestedExpressionAtom.
SqlParserListener.prototype.exitNestedExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by SqlParser#nestedRowExpressionAtom.
SqlParserListener.prototype.enterNestedRowExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by SqlParser#nestedRowExpressionAtom.
SqlParserListener.prototype.exitNestedRowExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by SqlParser#mathExpressionAtom.
SqlParserListener.prototype.enterMathExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by SqlParser#mathExpressionAtom.
SqlParserListener.prototype.exitMathExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by SqlParser#intervalExpressionAtom.
SqlParserListener.prototype.enterIntervalExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by SqlParser#intervalExpressionAtom.
SqlParserListener.prototype.exitIntervalExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by SqlParser#existsExpessionAtom.
SqlParserListener.prototype.enterExistsExpessionAtom = function(ctx) {
};

// Exit a parse tree produced by SqlParser#existsExpessionAtom.
SqlParserListener.prototype.exitExistsExpessionAtom = function(ctx) {
};


// Enter a parse tree produced by SqlParser#constantExpressionAtom.
SqlParserListener.prototype.enterConstantExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by SqlParser#constantExpressionAtom.
SqlParserListener.prototype.exitConstantExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by SqlParser#functionCallExpressionAtom.
SqlParserListener.prototype.enterFunctionCallExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by SqlParser#functionCallExpressionAtom.
SqlParserListener.prototype.exitFunctionCallExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by SqlParser#binaryExpressionAtom.
SqlParserListener.prototype.enterBinaryExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by SqlParser#binaryExpressionAtom.
SqlParserListener.prototype.exitBinaryExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by SqlParser#fullColumnNameExpressionAtom.
SqlParserListener.prototype.enterFullColumnNameExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by SqlParser#fullColumnNameExpressionAtom.
SqlParserListener.prototype.exitFullColumnNameExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by SqlParser#bitExpressionAtom.
SqlParserListener.prototype.enterBitExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by SqlParser#bitExpressionAtom.
SqlParserListener.prototype.exitBitExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by SqlParser#unaryOperator.
SqlParserListener.prototype.enterUnaryOperator = function(ctx) {
};

// Exit a parse tree produced by SqlParser#unaryOperator.
SqlParserListener.prototype.exitUnaryOperator = function(ctx) {
};


// Enter a parse tree produced by SqlParser#comparisonOperator.
SqlParserListener.prototype.enterComparisonOperator = function(ctx) {
};

// Exit a parse tree produced by SqlParser#comparisonOperator.
SqlParserListener.prototype.exitComparisonOperator = function(ctx) {
};


// Enter a parse tree produced by SqlParser#logicalOperator.
SqlParserListener.prototype.enterLogicalOperator = function(ctx) {
};

// Exit a parse tree produced by SqlParser#logicalOperator.
SqlParserListener.prototype.exitLogicalOperator = function(ctx) {
};


// Enter a parse tree produced by SqlParser#bitOperator.
SqlParserListener.prototype.enterBitOperator = function(ctx) {
};

// Exit a parse tree produced by SqlParser#bitOperator.
SqlParserListener.prototype.exitBitOperator = function(ctx) {
};


// Enter a parse tree produced by SqlParser#mathOperator.
SqlParserListener.prototype.enterMathOperator = function(ctx) {
};

// Exit a parse tree produced by SqlParser#mathOperator.
SqlParserListener.prototype.exitMathOperator = function(ctx) {
};


// Enter a parse tree produced by SqlParser#charsetNameBase.
SqlParserListener.prototype.enterCharsetNameBase = function(ctx) {
};

// Exit a parse tree produced by SqlParser#charsetNameBase.
SqlParserListener.prototype.exitCharsetNameBase = function(ctx) {
};


// Enter a parse tree produced by SqlParser#transactionLevelBase.
SqlParserListener.prototype.enterTransactionLevelBase = function(ctx) {
};

// Exit a parse tree produced by SqlParser#transactionLevelBase.
SqlParserListener.prototype.exitTransactionLevelBase = function(ctx) {
};


// Enter a parse tree produced by SqlParser#privilegesBase.
SqlParserListener.prototype.enterPrivilegesBase = function(ctx) {
};

// Exit a parse tree produced by SqlParser#privilegesBase.
SqlParserListener.prototype.exitPrivilegesBase = function(ctx) {
};


// Enter a parse tree produced by SqlParser#intervalTypeBase.
SqlParserListener.prototype.enterIntervalTypeBase = function(ctx) {
};

// Exit a parse tree produced by SqlParser#intervalTypeBase.
SqlParserListener.prototype.exitIntervalTypeBase = function(ctx) {
};


// Enter a parse tree produced by SqlParser#dataTypeBase.
SqlParserListener.prototype.enterDataTypeBase = function(ctx) {
};

// Exit a parse tree produced by SqlParser#dataTypeBase.
SqlParserListener.prototype.exitDataTypeBase = function(ctx) {
};


// Enter a parse tree produced by SqlParser#keywordsCanBeId.
SqlParserListener.prototype.enterKeywordsCanBeId = function(ctx) {
};

// Exit a parse tree produced by SqlParser#keywordsCanBeId.
SqlParserListener.prototype.exitKeywordsCanBeId = function(ctx) {
};


// Enter a parse tree produced by SqlParser#functionNameBase.
SqlParserListener.prototype.enterFunctionNameBase = function(ctx) {
};

// Exit a parse tree produced by SqlParser#functionNameBase.
SqlParserListener.prototype.exitFunctionNameBase = function(ctx) {
};



exports.SqlParserListener = SqlParserListener;