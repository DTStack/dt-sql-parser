// Generated from /Users/ziv/Workspace/dt-sql-parser/src/grammar/mysql/MySQLParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by MySQLParser.
function MySQLParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

MySQLParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
MySQLParserListener.prototype.constructor = MySQLParserListener;

// Enter a parse tree produced by MySQLParser#statement.
MySQLParserListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#statement.
MySQLParserListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#sqlStatements.
MySQLParserListener.prototype.enterSqlStatements = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#sqlStatements.
MySQLParserListener.prototype.exitSqlStatements = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#sqlStatement.
MySQLParserListener.prototype.enterSqlStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#sqlStatement.
MySQLParserListener.prototype.exitSqlStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#emptyStatement.
MySQLParserListener.prototype.enterEmptyStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#emptyStatement.
MySQLParserListener.prototype.exitEmptyStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#ddlStatement.
MySQLParserListener.prototype.enterDdlStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#ddlStatement.
MySQLParserListener.prototype.exitDdlStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#dmlStatement.
MySQLParserListener.prototype.enterDmlStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#dmlStatement.
MySQLParserListener.prototype.exitDmlStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#transactionStatement.
MySQLParserListener.prototype.enterTransactionStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#transactionStatement.
MySQLParserListener.prototype.exitTransactionStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#replicationStatement.
MySQLParserListener.prototype.enterReplicationStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#replicationStatement.
MySQLParserListener.prototype.exitReplicationStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#preparedStatement.
MySQLParserListener.prototype.enterPreparedStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#preparedStatement.
MySQLParserListener.prototype.exitPreparedStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#compoundStatement.
MySQLParserListener.prototype.enterCompoundStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#compoundStatement.
MySQLParserListener.prototype.exitCompoundStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#administrationStatement.
MySQLParserListener.prototype.enterAdministrationStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#administrationStatement.
MySQLParserListener.prototype.exitAdministrationStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#utilityStatement.
MySQLParserListener.prototype.enterUtilityStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#utilityStatement.
MySQLParserListener.prototype.exitUtilityStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#createDatabase.
MySQLParserListener.prototype.enterCreateDatabase = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#createDatabase.
MySQLParserListener.prototype.exitCreateDatabase = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#createEvent.
MySQLParserListener.prototype.enterCreateEvent = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#createEvent.
MySQLParserListener.prototype.exitCreateEvent = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#createIndex.
MySQLParserListener.prototype.enterCreateIndex = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#createIndex.
MySQLParserListener.prototype.exitCreateIndex = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#createLogfileGroup.
MySQLParserListener.prototype.enterCreateLogfileGroup = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#createLogfileGroup.
MySQLParserListener.prototype.exitCreateLogfileGroup = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#createProcedure.
MySQLParserListener.prototype.enterCreateProcedure = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#createProcedure.
MySQLParserListener.prototype.exitCreateProcedure = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#createFunction.
MySQLParserListener.prototype.enterCreateFunction = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#createFunction.
MySQLParserListener.prototype.exitCreateFunction = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#createServer.
MySQLParserListener.prototype.enterCreateServer = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#createServer.
MySQLParserListener.prototype.exitCreateServer = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#copyCreateTable.
MySQLParserListener.prototype.enterCopyCreateTable = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#copyCreateTable.
MySQLParserListener.prototype.exitCopyCreateTable = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#queryCreateTable.
MySQLParserListener.prototype.enterQueryCreateTable = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#queryCreateTable.
MySQLParserListener.prototype.exitQueryCreateTable = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#columnCreateTable.
MySQLParserListener.prototype.enterColumnCreateTable = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#columnCreateTable.
MySQLParserListener.prototype.exitColumnCreateTable = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#createTablespaceInnodb.
MySQLParserListener.prototype.enterCreateTablespaceInnodb = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#createTablespaceInnodb.
MySQLParserListener.prototype.exitCreateTablespaceInnodb = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#createTablespaceNdb.
MySQLParserListener.prototype.enterCreateTablespaceNdb = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#createTablespaceNdb.
MySQLParserListener.prototype.exitCreateTablespaceNdb = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#createTrigger.
MySQLParserListener.prototype.enterCreateTrigger = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#createTrigger.
MySQLParserListener.prototype.exitCreateTrigger = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#createView.
MySQLParserListener.prototype.enterCreateView = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#createView.
MySQLParserListener.prototype.exitCreateView = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#createDatabaseOption.
MySQLParserListener.prototype.enterCreateDatabaseOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#createDatabaseOption.
MySQLParserListener.prototype.exitCreateDatabaseOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#ownerStatement.
MySQLParserListener.prototype.enterOwnerStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#ownerStatement.
MySQLParserListener.prototype.exitOwnerStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#preciseSchedule.
MySQLParserListener.prototype.enterPreciseSchedule = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#preciseSchedule.
MySQLParserListener.prototype.exitPreciseSchedule = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#intervalSchedule.
MySQLParserListener.prototype.enterIntervalSchedule = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#intervalSchedule.
MySQLParserListener.prototype.exitIntervalSchedule = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#timestampValue.
MySQLParserListener.prototype.enterTimestampValue = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#timestampValue.
MySQLParserListener.prototype.exitTimestampValue = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#intervalExpr.
MySQLParserListener.prototype.enterIntervalExpr = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#intervalExpr.
MySQLParserListener.prototype.exitIntervalExpr = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#intervalType.
MySQLParserListener.prototype.enterIntervalType = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#intervalType.
MySQLParserListener.prototype.exitIntervalType = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#enableType.
MySQLParserListener.prototype.enterEnableType = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#enableType.
MySQLParserListener.prototype.exitEnableType = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#indexType.
MySQLParserListener.prototype.enterIndexType = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#indexType.
MySQLParserListener.prototype.exitIndexType = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#indexOption.
MySQLParserListener.prototype.enterIndexOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#indexOption.
MySQLParserListener.prototype.exitIndexOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#procedureParameter.
MySQLParserListener.prototype.enterProcedureParameter = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#procedureParameter.
MySQLParserListener.prototype.exitProcedureParameter = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#functionParameter.
MySQLParserListener.prototype.enterFunctionParameter = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#functionParameter.
MySQLParserListener.prototype.exitFunctionParameter = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#routineComment.
MySQLParserListener.prototype.enterRoutineComment = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#routineComment.
MySQLParserListener.prototype.exitRoutineComment = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#routineLanguage.
MySQLParserListener.prototype.enterRoutineLanguage = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#routineLanguage.
MySQLParserListener.prototype.exitRoutineLanguage = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#routineBehavior.
MySQLParserListener.prototype.enterRoutineBehavior = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#routineBehavior.
MySQLParserListener.prototype.exitRoutineBehavior = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#routineData.
MySQLParserListener.prototype.enterRoutineData = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#routineData.
MySQLParserListener.prototype.exitRoutineData = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#routineSecurity.
MySQLParserListener.prototype.enterRoutineSecurity = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#routineSecurity.
MySQLParserListener.prototype.exitRoutineSecurity = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#serverOption.
MySQLParserListener.prototype.enterServerOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#serverOption.
MySQLParserListener.prototype.exitServerOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#createDefinitions.
MySQLParserListener.prototype.enterCreateDefinitions = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#createDefinitions.
MySQLParserListener.prototype.exitCreateDefinitions = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#columnDeclaration.
MySQLParserListener.prototype.enterColumnDeclaration = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#columnDeclaration.
MySQLParserListener.prototype.exitColumnDeclaration = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#constraintDeclaration.
MySQLParserListener.prototype.enterConstraintDeclaration = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#constraintDeclaration.
MySQLParserListener.prototype.exitConstraintDeclaration = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#indexDeclaration.
MySQLParserListener.prototype.enterIndexDeclaration = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#indexDeclaration.
MySQLParserListener.prototype.exitIndexDeclaration = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#columnDefinition.
MySQLParserListener.prototype.enterColumnDefinition = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#columnDefinition.
MySQLParserListener.prototype.exitColumnDefinition = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#nullColumnConstraint.
MySQLParserListener.prototype.enterNullColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#nullColumnConstraint.
MySQLParserListener.prototype.exitNullColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#defaultColumnConstraint.
MySQLParserListener.prototype.enterDefaultColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#defaultColumnConstraint.
MySQLParserListener.prototype.exitDefaultColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#autoIncrementColumnConstraint.
MySQLParserListener.prototype.enterAutoIncrementColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#autoIncrementColumnConstraint.
MySQLParserListener.prototype.exitAutoIncrementColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#primaryKeyColumnConstraint.
MySQLParserListener.prototype.enterPrimaryKeyColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#primaryKeyColumnConstraint.
MySQLParserListener.prototype.exitPrimaryKeyColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#uniqueKeyColumnConstraint.
MySQLParserListener.prototype.enterUniqueKeyColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#uniqueKeyColumnConstraint.
MySQLParserListener.prototype.exitUniqueKeyColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#commentColumnConstraint.
MySQLParserListener.prototype.enterCommentColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#commentColumnConstraint.
MySQLParserListener.prototype.exitCommentColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#formatColumnConstraint.
MySQLParserListener.prototype.enterFormatColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#formatColumnConstraint.
MySQLParserListener.prototype.exitFormatColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#storageColumnConstraint.
MySQLParserListener.prototype.enterStorageColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#storageColumnConstraint.
MySQLParserListener.prototype.exitStorageColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#referenceColumnConstraint.
MySQLParserListener.prototype.enterReferenceColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#referenceColumnConstraint.
MySQLParserListener.prototype.exitReferenceColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#collateColumnConstraint.
MySQLParserListener.prototype.enterCollateColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#collateColumnConstraint.
MySQLParserListener.prototype.exitCollateColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#generatedColumnConstraint.
MySQLParserListener.prototype.enterGeneratedColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#generatedColumnConstraint.
MySQLParserListener.prototype.exitGeneratedColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#serialDefaultColumnConstraint.
MySQLParserListener.prototype.enterSerialDefaultColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#serialDefaultColumnConstraint.
MySQLParserListener.prototype.exitSerialDefaultColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#checkColumnConstraint.
MySQLParserListener.prototype.enterCheckColumnConstraint = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#checkColumnConstraint.
MySQLParserListener.prototype.exitCheckColumnConstraint = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#primaryKeyTableConstraint.
MySQLParserListener.prototype.enterPrimaryKeyTableConstraint = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#primaryKeyTableConstraint.
MySQLParserListener.prototype.exitPrimaryKeyTableConstraint = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#uniqueKeyTableConstraint.
MySQLParserListener.prototype.enterUniqueKeyTableConstraint = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#uniqueKeyTableConstraint.
MySQLParserListener.prototype.exitUniqueKeyTableConstraint = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#foreignKeyTableConstraint.
MySQLParserListener.prototype.enterForeignKeyTableConstraint = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#foreignKeyTableConstraint.
MySQLParserListener.prototype.exitForeignKeyTableConstraint = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#checkTableConstraint.
MySQLParserListener.prototype.enterCheckTableConstraint = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#checkTableConstraint.
MySQLParserListener.prototype.exitCheckTableConstraint = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#referenceDefinition.
MySQLParserListener.prototype.enterReferenceDefinition = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#referenceDefinition.
MySQLParserListener.prototype.exitReferenceDefinition = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#referenceAction.
MySQLParserListener.prototype.enterReferenceAction = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#referenceAction.
MySQLParserListener.prototype.exitReferenceAction = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#referenceControlType.
MySQLParserListener.prototype.enterReferenceControlType = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#referenceControlType.
MySQLParserListener.prototype.exitReferenceControlType = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#simpleIndexDeclaration.
MySQLParserListener.prototype.enterSimpleIndexDeclaration = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#simpleIndexDeclaration.
MySQLParserListener.prototype.exitSimpleIndexDeclaration = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#specialIndexDeclaration.
MySQLParserListener.prototype.enterSpecialIndexDeclaration = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#specialIndexDeclaration.
MySQLParserListener.prototype.exitSpecialIndexDeclaration = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tableOptionEngine.
MySQLParserListener.prototype.enterTableOptionEngine = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tableOptionEngine.
MySQLParserListener.prototype.exitTableOptionEngine = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tableOptionAutoIncrement.
MySQLParserListener.prototype.enterTableOptionAutoIncrement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tableOptionAutoIncrement.
MySQLParserListener.prototype.exitTableOptionAutoIncrement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tableOptionAverage.
MySQLParserListener.prototype.enterTableOptionAverage = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tableOptionAverage.
MySQLParserListener.prototype.exitTableOptionAverage = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tableOptionCharset.
MySQLParserListener.prototype.enterTableOptionCharset = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tableOptionCharset.
MySQLParserListener.prototype.exitTableOptionCharset = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tableOptionChecksum.
MySQLParserListener.prototype.enterTableOptionChecksum = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tableOptionChecksum.
MySQLParserListener.prototype.exitTableOptionChecksum = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tableOptionCollate.
MySQLParserListener.prototype.enterTableOptionCollate = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tableOptionCollate.
MySQLParserListener.prototype.exitTableOptionCollate = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tableOptionComment.
MySQLParserListener.prototype.enterTableOptionComment = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tableOptionComment.
MySQLParserListener.prototype.exitTableOptionComment = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tableOptionCompression.
MySQLParserListener.prototype.enterTableOptionCompression = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tableOptionCompression.
MySQLParserListener.prototype.exitTableOptionCompression = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tableOptionConnection.
MySQLParserListener.prototype.enterTableOptionConnection = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tableOptionConnection.
MySQLParserListener.prototype.exitTableOptionConnection = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tableOptionDataDirectory.
MySQLParserListener.prototype.enterTableOptionDataDirectory = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tableOptionDataDirectory.
MySQLParserListener.prototype.exitTableOptionDataDirectory = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tableOptionDelay.
MySQLParserListener.prototype.enterTableOptionDelay = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tableOptionDelay.
MySQLParserListener.prototype.exitTableOptionDelay = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tableOptionEncryption.
MySQLParserListener.prototype.enterTableOptionEncryption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tableOptionEncryption.
MySQLParserListener.prototype.exitTableOptionEncryption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tableOptionIndexDirectory.
MySQLParserListener.prototype.enterTableOptionIndexDirectory = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tableOptionIndexDirectory.
MySQLParserListener.prototype.exitTableOptionIndexDirectory = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tableOptionInsertMethod.
MySQLParserListener.prototype.enterTableOptionInsertMethod = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tableOptionInsertMethod.
MySQLParserListener.prototype.exitTableOptionInsertMethod = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tableOptionKeyBlockSize.
MySQLParserListener.prototype.enterTableOptionKeyBlockSize = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tableOptionKeyBlockSize.
MySQLParserListener.prototype.exitTableOptionKeyBlockSize = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tableOptionMaxRows.
MySQLParserListener.prototype.enterTableOptionMaxRows = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tableOptionMaxRows.
MySQLParserListener.prototype.exitTableOptionMaxRows = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tableOptionMinRows.
MySQLParserListener.prototype.enterTableOptionMinRows = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tableOptionMinRows.
MySQLParserListener.prototype.exitTableOptionMinRows = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tableOptionPackKeys.
MySQLParserListener.prototype.enterTableOptionPackKeys = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tableOptionPackKeys.
MySQLParserListener.prototype.exitTableOptionPackKeys = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tableOptionPassword.
MySQLParserListener.prototype.enterTableOptionPassword = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tableOptionPassword.
MySQLParserListener.prototype.exitTableOptionPassword = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tableOptionRowFormat.
MySQLParserListener.prototype.enterTableOptionRowFormat = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tableOptionRowFormat.
MySQLParserListener.prototype.exitTableOptionRowFormat = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tableOptionRecalculation.
MySQLParserListener.prototype.enterTableOptionRecalculation = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tableOptionRecalculation.
MySQLParserListener.prototype.exitTableOptionRecalculation = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tableOptionPersistent.
MySQLParserListener.prototype.enterTableOptionPersistent = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tableOptionPersistent.
MySQLParserListener.prototype.exitTableOptionPersistent = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tableOptionSamplePage.
MySQLParserListener.prototype.enterTableOptionSamplePage = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tableOptionSamplePage.
MySQLParserListener.prototype.exitTableOptionSamplePage = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tableOptionTablespace.
MySQLParserListener.prototype.enterTableOptionTablespace = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tableOptionTablespace.
MySQLParserListener.prototype.exitTableOptionTablespace = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tableOptionUnion.
MySQLParserListener.prototype.enterTableOptionUnion = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tableOptionUnion.
MySQLParserListener.prototype.exitTableOptionUnion = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tablespaceStorage.
MySQLParserListener.prototype.enterTablespaceStorage = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tablespaceStorage.
MySQLParserListener.prototype.exitTablespaceStorage = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#partitionDefinitions.
MySQLParserListener.prototype.enterPartitionDefinitions = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#partitionDefinitions.
MySQLParserListener.prototype.exitPartitionDefinitions = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#partitionFunctionHash.
MySQLParserListener.prototype.enterPartitionFunctionHash = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#partitionFunctionHash.
MySQLParserListener.prototype.exitPartitionFunctionHash = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#partitionFunctionKey.
MySQLParserListener.prototype.enterPartitionFunctionKey = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#partitionFunctionKey.
MySQLParserListener.prototype.exitPartitionFunctionKey = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#partitionFunctionRange.
MySQLParserListener.prototype.enterPartitionFunctionRange = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#partitionFunctionRange.
MySQLParserListener.prototype.exitPartitionFunctionRange = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#partitionFunctionList.
MySQLParserListener.prototype.enterPartitionFunctionList = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#partitionFunctionList.
MySQLParserListener.prototype.exitPartitionFunctionList = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#subPartitionFunctionHash.
MySQLParserListener.prototype.enterSubPartitionFunctionHash = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#subPartitionFunctionHash.
MySQLParserListener.prototype.exitSubPartitionFunctionHash = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#subPartitionFunctionKey.
MySQLParserListener.prototype.enterSubPartitionFunctionKey = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#subPartitionFunctionKey.
MySQLParserListener.prototype.exitSubPartitionFunctionKey = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#partitionComparision.
MySQLParserListener.prototype.enterPartitionComparision = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#partitionComparision.
MySQLParserListener.prototype.exitPartitionComparision = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#partitionListAtom.
MySQLParserListener.prototype.enterPartitionListAtom = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#partitionListAtom.
MySQLParserListener.prototype.exitPartitionListAtom = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#partitionListVector.
MySQLParserListener.prototype.enterPartitionListVector = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#partitionListVector.
MySQLParserListener.prototype.exitPartitionListVector = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#partitionSimple.
MySQLParserListener.prototype.enterPartitionSimple = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#partitionSimple.
MySQLParserListener.prototype.exitPartitionSimple = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#partitionDefinerAtom.
MySQLParserListener.prototype.enterPartitionDefinerAtom = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#partitionDefinerAtom.
MySQLParserListener.prototype.exitPartitionDefinerAtom = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#partitionDefinerVector.
MySQLParserListener.prototype.enterPartitionDefinerVector = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#partitionDefinerVector.
MySQLParserListener.prototype.exitPartitionDefinerVector = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#subpartitionDefinition.
MySQLParserListener.prototype.enterSubpartitionDefinition = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#subpartitionDefinition.
MySQLParserListener.prototype.exitSubpartitionDefinition = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#partitionOptionEngine.
MySQLParserListener.prototype.enterPartitionOptionEngine = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#partitionOptionEngine.
MySQLParserListener.prototype.exitPartitionOptionEngine = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#partitionOptionComment.
MySQLParserListener.prototype.enterPartitionOptionComment = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#partitionOptionComment.
MySQLParserListener.prototype.exitPartitionOptionComment = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#partitionOptionDataDirectory.
MySQLParserListener.prototype.enterPartitionOptionDataDirectory = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#partitionOptionDataDirectory.
MySQLParserListener.prototype.exitPartitionOptionDataDirectory = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#partitionOptionIndexDirectory.
MySQLParserListener.prototype.enterPartitionOptionIndexDirectory = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#partitionOptionIndexDirectory.
MySQLParserListener.prototype.exitPartitionOptionIndexDirectory = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#partitionOptionMaxRows.
MySQLParserListener.prototype.enterPartitionOptionMaxRows = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#partitionOptionMaxRows.
MySQLParserListener.prototype.exitPartitionOptionMaxRows = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#partitionOptionMinRows.
MySQLParserListener.prototype.enterPartitionOptionMinRows = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#partitionOptionMinRows.
MySQLParserListener.prototype.exitPartitionOptionMinRows = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#partitionOptionTablespace.
MySQLParserListener.prototype.enterPartitionOptionTablespace = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#partitionOptionTablespace.
MySQLParserListener.prototype.exitPartitionOptionTablespace = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#partitionOptionNodeGroup.
MySQLParserListener.prototype.enterPartitionOptionNodeGroup = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#partitionOptionNodeGroup.
MySQLParserListener.prototype.exitPartitionOptionNodeGroup = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterSimpleDatabase.
MySQLParserListener.prototype.enterAlterSimpleDatabase = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterSimpleDatabase.
MySQLParserListener.prototype.exitAlterSimpleDatabase = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterUpgradeName.
MySQLParserListener.prototype.enterAlterUpgradeName = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterUpgradeName.
MySQLParserListener.prototype.exitAlterUpgradeName = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterEvent.
MySQLParserListener.prototype.enterAlterEvent = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterEvent.
MySQLParserListener.prototype.exitAlterEvent = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterFunction.
MySQLParserListener.prototype.enterAlterFunction = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterFunction.
MySQLParserListener.prototype.exitAlterFunction = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterInstance.
MySQLParserListener.prototype.enterAlterInstance = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterInstance.
MySQLParserListener.prototype.exitAlterInstance = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterLogfileGroup.
MySQLParserListener.prototype.enterAlterLogfileGroup = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterLogfileGroup.
MySQLParserListener.prototype.exitAlterLogfileGroup = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterProcedure.
MySQLParserListener.prototype.enterAlterProcedure = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterProcedure.
MySQLParserListener.prototype.exitAlterProcedure = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterServer.
MySQLParserListener.prototype.enterAlterServer = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterServer.
MySQLParserListener.prototype.exitAlterServer = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterTable.
MySQLParserListener.prototype.enterAlterTable = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterTable.
MySQLParserListener.prototype.exitAlterTable = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterTablespace.
MySQLParserListener.prototype.enterAlterTablespace = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterTablespace.
MySQLParserListener.prototype.exitAlterTablespace = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterView.
MySQLParserListener.prototype.enterAlterView = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterView.
MySQLParserListener.prototype.exitAlterView = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByTableOption.
MySQLParserListener.prototype.enterAlterByTableOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByTableOption.
MySQLParserListener.prototype.exitAlterByTableOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByAddColumn.
MySQLParserListener.prototype.enterAlterByAddColumn = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByAddColumn.
MySQLParserListener.prototype.exitAlterByAddColumn = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByAddColumns.
MySQLParserListener.prototype.enterAlterByAddColumns = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByAddColumns.
MySQLParserListener.prototype.exitAlterByAddColumns = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByAddIndex.
MySQLParserListener.prototype.enterAlterByAddIndex = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByAddIndex.
MySQLParserListener.prototype.exitAlterByAddIndex = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByAddPrimaryKey.
MySQLParserListener.prototype.enterAlterByAddPrimaryKey = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByAddPrimaryKey.
MySQLParserListener.prototype.exitAlterByAddPrimaryKey = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByAddUniqueKey.
MySQLParserListener.prototype.enterAlterByAddUniqueKey = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByAddUniqueKey.
MySQLParserListener.prototype.exitAlterByAddUniqueKey = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByAddSpecialIndex.
MySQLParserListener.prototype.enterAlterByAddSpecialIndex = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByAddSpecialIndex.
MySQLParserListener.prototype.exitAlterByAddSpecialIndex = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByAddForeignKey.
MySQLParserListener.prototype.enterAlterByAddForeignKey = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByAddForeignKey.
MySQLParserListener.prototype.exitAlterByAddForeignKey = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByAddCheckTableConstraint.
MySQLParserListener.prototype.enterAlterByAddCheckTableConstraint = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByAddCheckTableConstraint.
MySQLParserListener.prototype.exitAlterByAddCheckTableConstraint = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterBySetAlgorithm.
MySQLParserListener.prototype.enterAlterBySetAlgorithm = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterBySetAlgorithm.
MySQLParserListener.prototype.exitAlterBySetAlgorithm = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByChangeDefault.
MySQLParserListener.prototype.enterAlterByChangeDefault = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByChangeDefault.
MySQLParserListener.prototype.exitAlterByChangeDefault = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByChangeColumn.
MySQLParserListener.prototype.enterAlterByChangeColumn = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByChangeColumn.
MySQLParserListener.prototype.exitAlterByChangeColumn = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByRenameColumn.
MySQLParserListener.prototype.enterAlterByRenameColumn = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByRenameColumn.
MySQLParserListener.prototype.exitAlterByRenameColumn = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByLock.
MySQLParserListener.prototype.enterAlterByLock = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByLock.
MySQLParserListener.prototype.exitAlterByLock = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByModifyColumn.
MySQLParserListener.prototype.enterAlterByModifyColumn = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByModifyColumn.
MySQLParserListener.prototype.exitAlterByModifyColumn = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByDropColumn.
MySQLParserListener.prototype.enterAlterByDropColumn = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByDropColumn.
MySQLParserListener.prototype.exitAlterByDropColumn = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByDropPrimaryKey.
MySQLParserListener.prototype.enterAlterByDropPrimaryKey = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByDropPrimaryKey.
MySQLParserListener.prototype.exitAlterByDropPrimaryKey = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByRenameIndex.
MySQLParserListener.prototype.enterAlterByRenameIndex = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByRenameIndex.
MySQLParserListener.prototype.exitAlterByRenameIndex = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByAlterIndexVisibility.
MySQLParserListener.prototype.enterAlterByAlterIndexVisibility = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByAlterIndexVisibility.
MySQLParserListener.prototype.exitAlterByAlterIndexVisibility = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByDropIndex.
MySQLParserListener.prototype.enterAlterByDropIndex = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByDropIndex.
MySQLParserListener.prototype.exitAlterByDropIndex = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByDropForeignKey.
MySQLParserListener.prototype.enterAlterByDropForeignKey = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByDropForeignKey.
MySQLParserListener.prototype.exitAlterByDropForeignKey = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByDisableKeys.
MySQLParserListener.prototype.enterAlterByDisableKeys = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByDisableKeys.
MySQLParserListener.prototype.exitAlterByDisableKeys = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByEnableKeys.
MySQLParserListener.prototype.enterAlterByEnableKeys = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByEnableKeys.
MySQLParserListener.prototype.exitAlterByEnableKeys = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByRename.
MySQLParserListener.prototype.enterAlterByRename = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByRename.
MySQLParserListener.prototype.exitAlterByRename = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByOrder.
MySQLParserListener.prototype.enterAlterByOrder = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByOrder.
MySQLParserListener.prototype.exitAlterByOrder = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByConvertCharset.
MySQLParserListener.prototype.enterAlterByConvertCharset = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByConvertCharset.
MySQLParserListener.prototype.exitAlterByConvertCharset = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByDefaultCharset.
MySQLParserListener.prototype.enterAlterByDefaultCharset = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByDefaultCharset.
MySQLParserListener.prototype.exitAlterByDefaultCharset = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByDiscardTablespace.
MySQLParserListener.prototype.enterAlterByDiscardTablespace = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByDiscardTablespace.
MySQLParserListener.prototype.exitAlterByDiscardTablespace = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByImportTablespace.
MySQLParserListener.prototype.enterAlterByImportTablespace = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByImportTablespace.
MySQLParserListener.prototype.exitAlterByImportTablespace = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByForce.
MySQLParserListener.prototype.enterAlterByForce = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByForce.
MySQLParserListener.prototype.exitAlterByForce = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByValidate.
MySQLParserListener.prototype.enterAlterByValidate = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByValidate.
MySQLParserListener.prototype.exitAlterByValidate = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByAddPartition.
MySQLParserListener.prototype.enterAlterByAddPartition = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByAddPartition.
MySQLParserListener.prototype.exitAlterByAddPartition = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByDropPartition.
MySQLParserListener.prototype.enterAlterByDropPartition = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByDropPartition.
MySQLParserListener.prototype.exitAlterByDropPartition = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByDiscardPartition.
MySQLParserListener.prototype.enterAlterByDiscardPartition = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByDiscardPartition.
MySQLParserListener.prototype.exitAlterByDiscardPartition = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByImportPartition.
MySQLParserListener.prototype.enterAlterByImportPartition = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByImportPartition.
MySQLParserListener.prototype.exitAlterByImportPartition = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByTruncatePartition.
MySQLParserListener.prototype.enterAlterByTruncatePartition = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByTruncatePartition.
MySQLParserListener.prototype.exitAlterByTruncatePartition = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByCoalescePartition.
MySQLParserListener.prototype.enterAlterByCoalescePartition = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByCoalescePartition.
MySQLParserListener.prototype.exitAlterByCoalescePartition = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByReorganizePartition.
MySQLParserListener.prototype.enterAlterByReorganizePartition = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByReorganizePartition.
MySQLParserListener.prototype.exitAlterByReorganizePartition = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByExchangePartition.
MySQLParserListener.prototype.enterAlterByExchangePartition = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByExchangePartition.
MySQLParserListener.prototype.exitAlterByExchangePartition = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByAnalyzePartition.
MySQLParserListener.prototype.enterAlterByAnalyzePartition = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByAnalyzePartition.
MySQLParserListener.prototype.exitAlterByAnalyzePartition = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByCheckPartition.
MySQLParserListener.prototype.enterAlterByCheckPartition = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByCheckPartition.
MySQLParserListener.prototype.exitAlterByCheckPartition = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByOptimizePartition.
MySQLParserListener.prototype.enterAlterByOptimizePartition = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByOptimizePartition.
MySQLParserListener.prototype.exitAlterByOptimizePartition = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByRebuildPartition.
MySQLParserListener.prototype.enterAlterByRebuildPartition = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByRebuildPartition.
MySQLParserListener.prototype.exitAlterByRebuildPartition = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByRepairPartition.
MySQLParserListener.prototype.enterAlterByRepairPartition = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByRepairPartition.
MySQLParserListener.prototype.exitAlterByRepairPartition = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByRemovePartitioning.
MySQLParserListener.prototype.enterAlterByRemovePartitioning = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByRemovePartitioning.
MySQLParserListener.prototype.exitAlterByRemovePartitioning = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterByUpgradePartitioning.
MySQLParserListener.prototype.enterAlterByUpgradePartitioning = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterByUpgradePartitioning.
MySQLParserListener.prototype.exitAlterByUpgradePartitioning = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#dropDatabase.
MySQLParserListener.prototype.enterDropDatabase = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#dropDatabase.
MySQLParserListener.prototype.exitDropDatabase = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#dropEvent.
MySQLParserListener.prototype.enterDropEvent = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#dropEvent.
MySQLParserListener.prototype.exitDropEvent = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#dropIndex.
MySQLParserListener.prototype.enterDropIndex = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#dropIndex.
MySQLParserListener.prototype.exitDropIndex = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#dropLogfileGroup.
MySQLParserListener.prototype.enterDropLogfileGroup = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#dropLogfileGroup.
MySQLParserListener.prototype.exitDropLogfileGroup = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#dropProcedure.
MySQLParserListener.prototype.enterDropProcedure = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#dropProcedure.
MySQLParserListener.prototype.exitDropProcedure = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#dropFunction.
MySQLParserListener.prototype.enterDropFunction = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#dropFunction.
MySQLParserListener.prototype.exitDropFunction = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#dropServer.
MySQLParserListener.prototype.enterDropServer = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#dropServer.
MySQLParserListener.prototype.exitDropServer = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#dropTable.
MySQLParserListener.prototype.enterDropTable = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#dropTable.
MySQLParserListener.prototype.exitDropTable = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#dropTablespace.
MySQLParserListener.prototype.enterDropTablespace = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#dropTablespace.
MySQLParserListener.prototype.exitDropTablespace = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#dropTrigger.
MySQLParserListener.prototype.enterDropTrigger = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#dropTrigger.
MySQLParserListener.prototype.exitDropTrigger = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#dropView.
MySQLParserListener.prototype.enterDropView = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#dropView.
MySQLParserListener.prototype.exitDropView = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#renameTable.
MySQLParserListener.prototype.enterRenameTable = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#renameTable.
MySQLParserListener.prototype.exitRenameTable = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#renameTableClause.
MySQLParserListener.prototype.enterRenameTableClause = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#renameTableClause.
MySQLParserListener.prototype.exitRenameTableClause = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#truncateTable.
MySQLParserListener.prototype.enterTruncateTable = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#truncateTable.
MySQLParserListener.prototype.exitTruncateTable = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#callStatement.
MySQLParserListener.prototype.enterCallStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#callStatement.
MySQLParserListener.prototype.exitCallStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#deleteStatement.
MySQLParserListener.prototype.enterDeleteStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#deleteStatement.
MySQLParserListener.prototype.exitDeleteStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#doStatement.
MySQLParserListener.prototype.enterDoStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#doStatement.
MySQLParserListener.prototype.exitDoStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#handlerStatement.
MySQLParserListener.prototype.enterHandlerStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#handlerStatement.
MySQLParserListener.prototype.exitHandlerStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#insertStatement.
MySQLParserListener.prototype.enterInsertStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#insertStatement.
MySQLParserListener.prototype.exitInsertStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#loadDataStatement.
MySQLParserListener.prototype.enterLoadDataStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#loadDataStatement.
MySQLParserListener.prototype.exitLoadDataStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#loadXmlStatement.
MySQLParserListener.prototype.enterLoadXmlStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#loadXmlStatement.
MySQLParserListener.prototype.exitLoadXmlStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#replaceStatement.
MySQLParserListener.prototype.enterReplaceStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#replaceStatement.
MySQLParserListener.prototype.exitReplaceStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#simpleSelect.
MySQLParserListener.prototype.enterSimpleSelect = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#simpleSelect.
MySQLParserListener.prototype.exitSimpleSelect = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#parenthesisSelect.
MySQLParserListener.prototype.enterParenthesisSelect = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#parenthesisSelect.
MySQLParserListener.prototype.exitParenthesisSelect = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#unionSelect.
MySQLParserListener.prototype.enterUnionSelect = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#unionSelect.
MySQLParserListener.prototype.exitUnionSelect = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#unionParenthesisSelect.
MySQLParserListener.prototype.enterUnionParenthesisSelect = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#unionParenthesisSelect.
MySQLParserListener.prototype.exitUnionParenthesisSelect = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#updateStatement.
MySQLParserListener.prototype.enterUpdateStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#updateStatement.
MySQLParserListener.prototype.exitUpdateStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#insertStatementValue.
MySQLParserListener.prototype.enterInsertStatementValue = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#insertStatementValue.
MySQLParserListener.prototype.exitInsertStatementValue = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#updatedElement.
MySQLParserListener.prototype.enterUpdatedElement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#updatedElement.
MySQLParserListener.prototype.exitUpdatedElement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#assignmentField.
MySQLParserListener.prototype.enterAssignmentField = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#assignmentField.
MySQLParserListener.prototype.exitAssignmentField = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#lockClause.
MySQLParserListener.prototype.enterLockClause = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#lockClause.
MySQLParserListener.prototype.exitLockClause = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#singleDeleteStatement.
MySQLParserListener.prototype.enterSingleDeleteStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#singleDeleteStatement.
MySQLParserListener.prototype.exitSingleDeleteStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#multipleDeleteStatement.
MySQLParserListener.prototype.enterMultipleDeleteStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#multipleDeleteStatement.
MySQLParserListener.prototype.exitMultipleDeleteStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#handlerOpenStatement.
MySQLParserListener.prototype.enterHandlerOpenStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#handlerOpenStatement.
MySQLParserListener.prototype.exitHandlerOpenStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#handlerReadIndexStatement.
MySQLParserListener.prototype.enterHandlerReadIndexStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#handlerReadIndexStatement.
MySQLParserListener.prototype.exitHandlerReadIndexStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#handlerReadStatement.
MySQLParserListener.prototype.enterHandlerReadStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#handlerReadStatement.
MySQLParserListener.prototype.exitHandlerReadStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#handlerCloseStatement.
MySQLParserListener.prototype.enterHandlerCloseStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#handlerCloseStatement.
MySQLParserListener.prototype.exitHandlerCloseStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#singleUpdateStatement.
MySQLParserListener.prototype.enterSingleUpdateStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#singleUpdateStatement.
MySQLParserListener.prototype.exitSingleUpdateStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#multipleUpdateStatement.
MySQLParserListener.prototype.enterMultipleUpdateStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#multipleUpdateStatement.
MySQLParserListener.prototype.exitMultipleUpdateStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#orderByClause.
MySQLParserListener.prototype.enterOrderByClause = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#orderByClause.
MySQLParserListener.prototype.exitOrderByClause = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#orderByExpression.
MySQLParserListener.prototype.enterOrderByExpression = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#orderByExpression.
MySQLParserListener.prototype.exitOrderByExpression = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tableSources.
MySQLParserListener.prototype.enterTableSources = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tableSources.
MySQLParserListener.prototype.exitTableSources = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tableSourceBase.
MySQLParserListener.prototype.enterTableSourceBase = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tableSourceBase.
MySQLParserListener.prototype.exitTableSourceBase = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tableSourceNested.
MySQLParserListener.prototype.enterTableSourceNested = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tableSourceNested.
MySQLParserListener.prototype.exitTableSourceNested = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#atomTableItem.
MySQLParserListener.prototype.enterAtomTableItem = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#atomTableItem.
MySQLParserListener.prototype.exitAtomTableItem = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#subqueryTableItem.
MySQLParserListener.prototype.enterSubqueryTableItem = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#subqueryTableItem.
MySQLParserListener.prototype.exitSubqueryTableItem = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tableSourcesItem.
MySQLParserListener.prototype.enterTableSourcesItem = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tableSourcesItem.
MySQLParserListener.prototype.exitTableSourcesItem = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#indexHint.
MySQLParserListener.prototype.enterIndexHint = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#indexHint.
MySQLParserListener.prototype.exitIndexHint = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#indexHintType.
MySQLParserListener.prototype.enterIndexHintType = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#indexHintType.
MySQLParserListener.prototype.exitIndexHintType = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#innerJoin.
MySQLParserListener.prototype.enterInnerJoin = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#innerJoin.
MySQLParserListener.prototype.exitInnerJoin = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#straightJoin.
MySQLParserListener.prototype.enterStraightJoin = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#straightJoin.
MySQLParserListener.prototype.exitStraightJoin = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#outerJoin.
MySQLParserListener.prototype.enterOuterJoin = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#outerJoin.
MySQLParserListener.prototype.exitOuterJoin = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#naturalJoin.
MySQLParserListener.prototype.enterNaturalJoin = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#naturalJoin.
MySQLParserListener.prototype.exitNaturalJoin = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#queryExpression.
MySQLParserListener.prototype.enterQueryExpression = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#queryExpression.
MySQLParserListener.prototype.exitQueryExpression = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#queryExpressionNointo.
MySQLParserListener.prototype.enterQueryExpressionNointo = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#queryExpressionNointo.
MySQLParserListener.prototype.exitQueryExpressionNointo = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#querySpecification.
MySQLParserListener.prototype.enterQuerySpecification = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#querySpecification.
MySQLParserListener.prototype.exitQuerySpecification = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#querySpecificationNointo.
MySQLParserListener.prototype.enterQuerySpecificationNointo = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#querySpecificationNointo.
MySQLParserListener.prototype.exitQuerySpecificationNointo = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#unionParenthesis.
MySQLParserListener.prototype.enterUnionParenthesis = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#unionParenthesis.
MySQLParserListener.prototype.exitUnionParenthesis = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#unionStatement.
MySQLParserListener.prototype.enterUnionStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#unionStatement.
MySQLParserListener.prototype.exitUnionStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#selectSpec.
MySQLParserListener.prototype.enterSelectSpec = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#selectSpec.
MySQLParserListener.prototype.exitSelectSpec = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#selectElements.
MySQLParserListener.prototype.enterSelectElements = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#selectElements.
MySQLParserListener.prototype.exitSelectElements = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#selectStarElement.
MySQLParserListener.prototype.enterSelectStarElement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#selectStarElement.
MySQLParserListener.prototype.exitSelectStarElement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#selectColumnElement.
MySQLParserListener.prototype.enterSelectColumnElement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#selectColumnElement.
MySQLParserListener.prototype.exitSelectColumnElement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#selectFunctionElement.
MySQLParserListener.prototype.enterSelectFunctionElement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#selectFunctionElement.
MySQLParserListener.prototype.exitSelectFunctionElement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#selectExpressionElement.
MySQLParserListener.prototype.enterSelectExpressionElement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#selectExpressionElement.
MySQLParserListener.prototype.exitSelectExpressionElement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#selectIntoVariables.
MySQLParserListener.prototype.enterSelectIntoVariables = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#selectIntoVariables.
MySQLParserListener.prototype.exitSelectIntoVariables = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#selectIntoDumpFile.
MySQLParserListener.prototype.enterSelectIntoDumpFile = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#selectIntoDumpFile.
MySQLParserListener.prototype.exitSelectIntoDumpFile = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#selectIntoTextFile.
MySQLParserListener.prototype.enterSelectIntoTextFile = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#selectIntoTextFile.
MySQLParserListener.prototype.exitSelectIntoTextFile = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#selectFieldsInto.
MySQLParserListener.prototype.enterSelectFieldsInto = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#selectFieldsInto.
MySQLParserListener.prototype.exitSelectFieldsInto = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#selectLinesInto.
MySQLParserListener.prototype.enterSelectLinesInto = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#selectLinesInto.
MySQLParserListener.prototype.exitSelectLinesInto = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#fromClause.
MySQLParserListener.prototype.enterFromClause = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#fromClause.
MySQLParserListener.prototype.exitFromClause = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#groupByItem.
MySQLParserListener.prototype.enterGroupByItem = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#groupByItem.
MySQLParserListener.prototype.exitGroupByItem = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#limitClause.
MySQLParserListener.prototype.enterLimitClause = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#limitClause.
MySQLParserListener.prototype.exitLimitClause = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#limitClauseAtom.
MySQLParserListener.prototype.enterLimitClauseAtom = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#limitClauseAtom.
MySQLParserListener.prototype.exitLimitClauseAtom = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#startTransaction.
MySQLParserListener.prototype.enterStartTransaction = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#startTransaction.
MySQLParserListener.prototype.exitStartTransaction = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#beginWork.
MySQLParserListener.prototype.enterBeginWork = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#beginWork.
MySQLParserListener.prototype.exitBeginWork = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#commitWork.
MySQLParserListener.prototype.enterCommitWork = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#commitWork.
MySQLParserListener.prototype.exitCommitWork = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#rollbackWork.
MySQLParserListener.prototype.enterRollbackWork = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#rollbackWork.
MySQLParserListener.prototype.exitRollbackWork = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#savepointStatement.
MySQLParserListener.prototype.enterSavepointStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#savepointStatement.
MySQLParserListener.prototype.exitSavepointStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#rollbackStatement.
MySQLParserListener.prototype.enterRollbackStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#rollbackStatement.
MySQLParserListener.prototype.exitRollbackStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#releaseStatement.
MySQLParserListener.prototype.enterReleaseStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#releaseStatement.
MySQLParserListener.prototype.exitReleaseStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#lockTables.
MySQLParserListener.prototype.enterLockTables = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#lockTables.
MySQLParserListener.prototype.exitLockTables = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#unlockTables.
MySQLParserListener.prototype.enterUnlockTables = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#unlockTables.
MySQLParserListener.prototype.exitUnlockTables = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#setAutocommitStatement.
MySQLParserListener.prototype.enterSetAutocommitStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#setAutocommitStatement.
MySQLParserListener.prototype.exitSetAutocommitStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#setTransactionStatement.
MySQLParserListener.prototype.enterSetTransactionStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#setTransactionStatement.
MySQLParserListener.prototype.exitSetTransactionStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#transactionMode.
MySQLParserListener.prototype.enterTransactionMode = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#transactionMode.
MySQLParserListener.prototype.exitTransactionMode = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#lockTableElement.
MySQLParserListener.prototype.enterLockTableElement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#lockTableElement.
MySQLParserListener.prototype.exitLockTableElement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#lockAction.
MySQLParserListener.prototype.enterLockAction = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#lockAction.
MySQLParserListener.prototype.exitLockAction = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#transactionOption.
MySQLParserListener.prototype.enterTransactionOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#transactionOption.
MySQLParserListener.prototype.exitTransactionOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#transactionLevel.
MySQLParserListener.prototype.enterTransactionLevel = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#transactionLevel.
MySQLParserListener.prototype.exitTransactionLevel = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#changeMaster.
MySQLParserListener.prototype.enterChangeMaster = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#changeMaster.
MySQLParserListener.prototype.exitChangeMaster = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#changeReplicationFilter.
MySQLParserListener.prototype.enterChangeReplicationFilter = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#changeReplicationFilter.
MySQLParserListener.prototype.exitChangeReplicationFilter = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#purgeBinaryLogs.
MySQLParserListener.prototype.enterPurgeBinaryLogs = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#purgeBinaryLogs.
MySQLParserListener.prototype.exitPurgeBinaryLogs = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#resetMaster.
MySQLParserListener.prototype.enterResetMaster = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#resetMaster.
MySQLParserListener.prototype.exitResetMaster = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#resetSlave.
MySQLParserListener.prototype.enterResetSlave = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#resetSlave.
MySQLParserListener.prototype.exitResetSlave = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#startSlave.
MySQLParserListener.prototype.enterStartSlave = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#startSlave.
MySQLParserListener.prototype.exitStartSlave = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#stopSlave.
MySQLParserListener.prototype.enterStopSlave = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#stopSlave.
MySQLParserListener.prototype.exitStopSlave = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#startGroupReplication.
MySQLParserListener.prototype.enterStartGroupReplication = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#startGroupReplication.
MySQLParserListener.prototype.exitStartGroupReplication = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#stopGroupReplication.
MySQLParserListener.prototype.enterStopGroupReplication = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#stopGroupReplication.
MySQLParserListener.prototype.exitStopGroupReplication = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#masterStringOption.
MySQLParserListener.prototype.enterMasterStringOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#masterStringOption.
MySQLParserListener.prototype.exitMasterStringOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#masterDecimalOption.
MySQLParserListener.prototype.enterMasterDecimalOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#masterDecimalOption.
MySQLParserListener.prototype.exitMasterDecimalOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#masterBoolOption.
MySQLParserListener.prototype.enterMasterBoolOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#masterBoolOption.
MySQLParserListener.prototype.exitMasterBoolOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#masterRealOption.
MySQLParserListener.prototype.enterMasterRealOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#masterRealOption.
MySQLParserListener.prototype.exitMasterRealOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#masterUidListOption.
MySQLParserListener.prototype.enterMasterUidListOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#masterUidListOption.
MySQLParserListener.prototype.exitMasterUidListOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#stringMasterOption.
MySQLParserListener.prototype.enterStringMasterOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#stringMasterOption.
MySQLParserListener.prototype.exitStringMasterOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#decimalMasterOption.
MySQLParserListener.prototype.enterDecimalMasterOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#decimalMasterOption.
MySQLParserListener.prototype.exitDecimalMasterOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#boolMasterOption.
MySQLParserListener.prototype.enterBoolMasterOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#boolMasterOption.
MySQLParserListener.prototype.exitBoolMasterOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#channelOption.
MySQLParserListener.prototype.enterChannelOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#channelOption.
MySQLParserListener.prototype.exitChannelOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#doDbReplication.
MySQLParserListener.prototype.enterDoDbReplication = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#doDbReplication.
MySQLParserListener.prototype.exitDoDbReplication = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#ignoreDbReplication.
MySQLParserListener.prototype.enterIgnoreDbReplication = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#ignoreDbReplication.
MySQLParserListener.prototype.exitIgnoreDbReplication = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#doTableReplication.
MySQLParserListener.prototype.enterDoTableReplication = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#doTableReplication.
MySQLParserListener.prototype.exitDoTableReplication = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#ignoreTableReplication.
MySQLParserListener.prototype.enterIgnoreTableReplication = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#ignoreTableReplication.
MySQLParserListener.prototype.exitIgnoreTableReplication = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#wildDoTableReplication.
MySQLParserListener.prototype.enterWildDoTableReplication = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#wildDoTableReplication.
MySQLParserListener.prototype.exitWildDoTableReplication = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#wildIgnoreTableReplication.
MySQLParserListener.prototype.enterWildIgnoreTableReplication = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#wildIgnoreTableReplication.
MySQLParserListener.prototype.exitWildIgnoreTableReplication = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#rewriteDbReplication.
MySQLParserListener.prototype.enterRewriteDbReplication = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#rewriteDbReplication.
MySQLParserListener.prototype.exitRewriteDbReplication = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tablePair.
MySQLParserListener.prototype.enterTablePair = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tablePair.
MySQLParserListener.prototype.exitTablePair = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#threadType.
MySQLParserListener.prototype.enterThreadType = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#threadType.
MySQLParserListener.prototype.exitThreadType = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#gtidsUntilOption.
MySQLParserListener.prototype.enterGtidsUntilOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#gtidsUntilOption.
MySQLParserListener.prototype.exitGtidsUntilOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#masterLogUntilOption.
MySQLParserListener.prototype.enterMasterLogUntilOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#masterLogUntilOption.
MySQLParserListener.prototype.exitMasterLogUntilOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#relayLogUntilOption.
MySQLParserListener.prototype.enterRelayLogUntilOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#relayLogUntilOption.
MySQLParserListener.prototype.exitRelayLogUntilOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#sqlGapsUntilOption.
MySQLParserListener.prototype.enterSqlGapsUntilOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#sqlGapsUntilOption.
MySQLParserListener.prototype.exitSqlGapsUntilOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#userConnectionOption.
MySQLParserListener.prototype.enterUserConnectionOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#userConnectionOption.
MySQLParserListener.prototype.exitUserConnectionOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#passwordConnectionOption.
MySQLParserListener.prototype.enterPasswordConnectionOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#passwordConnectionOption.
MySQLParserListener.prototype.exitPasswordConnectionOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#defaultAuthConnectionOption.
MySQLParserListener.prototype.enterDefaultAuthConnectionOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#defaultAuthConnectionOption.
MySQLParserListener.prototype.exitDefaultAuthConnectionOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#pluginDirConnectionOption.
MySQLParserListener.prototype.enterPluginDirConnectionOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#pluginDirConnectionOption.
MySQLParserListener.prototype.exitPluginDirConnectionOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#gtuidSet.
MySQLParserListener.prototype.enterGtuidSet = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#gtuidSet.
MySQLParserListener.prototype.exitGtuidSet = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#xaStartTransaction.
MySQLParserListener.prototype.enterXaStartTransaction = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#xaStartTransaction.
MySQLParserListener.prototype.exitXaStartTransaction = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#xaEndTransaction.
MySQLParserListener.prototype.enterXaEndTransaction = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#xaEndTransaction.
MySQLParserListener.prototype.exitXaEndTransaction = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#xaPrepareStatement.
MySQLParserListener.prototype.enterXaPrepareStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#xaPrepareStatement.
MySQLParserListener.prototype.exitXaPrepareStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#xaCommitWork.
MySQLParserListener.prototype.enterXaCommitWork = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#xaCommitWork.
MySQLParserListener.prototype.exitXaCommitWork = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#xaRollbackWork.
MySQLParserListener.prototype.enterXaRollbackWork = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#xaRollbackWork.
MySQLParserListener.prototype.exitXaRollbackWork = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#xaRecoverWork.
MySQLParserListener.prototype.enterXaRecoverWork = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#xaRecoverWork.
MySQLParserListener.prototype.exitXaRecoverWork = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#prepareStatement.
MySQLParserListener.prototype.enterPrepareStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#prepareStatement.
MySQLParserListener.prototype.exitPrepareStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#executeStatement.
MySQLParserListener.prototype.enterExecuteStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#executeStatement.
MySQLParserListener.prototype.exitExecuteStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#deallocatePrepare.
MySQLParserListener.prototype.enterDeallocatePrepare = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#deallocatePrepare.
MySQLParserListener.prototype.exitDeallocatePrepare = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#routineBody.
MySQLParserListener.prototype.enterRoutineBody = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#routineBody.
MySQLParserListener.prototype.exitRoutineBody = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#blockStatement.
MySQLParserListener.prototype.enterBlockStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#blockStatement.
MySQLParserListener.prototype.exitBlockStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#caseStatement.
MySQLParserListener.prototype.enterCaseStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#caseStatement.
MySQLParserListener.prototype.exitCaseStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#ifStatement.
MySQLParserListener.prototype.enterIfStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#ifStatement.
MySQLParserListener.prototype.exitIfStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#iterateStatement.
MySQLParserListener.prototype.enterIterateStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#iterateStatement.
MySQLParserListener.prototype.exitIterateStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#leaveStatement.
MySQLParserListener.prototype.enterLeaveStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#leaveStatement.
MySQLParserListener.prototype.exitLeaveStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#loopStatement.
MySQLParserListener.prototype.enterLoopStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#loopStatement.
MySQLParserListener.prototype.exitLoopStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#repeatStatement.
MySQLParserListener.prototype.enterRepeatStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#repeatStatement.
MySQLParserListener.prototype.exitRepeatStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#returnStatement.
MySQLParserListener.prototype.enterReturnStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#returnStatement.
MySQLParserListener.prototype.exitReturnStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#whileStatement.
MySQLParserListener.prototype.enterWhileStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#whileStatement.
MySQLParserListener.prototype.exitWhileStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#CloseCursor.
MySQLParserListener.prototype.enterCloseCursor = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#CloseCursor.
MySQLParserListener.prototype.exitCloseCursor = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#FetchCursor.
MySQLParserListener.prototype.enterFetchCursor = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#FetchCursor.
MySQLParserListener.prototype.exitFetchCursor = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#OpenCursor.
MySQLParserListener.prototype.enterOpenCursor = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#OpenCursor.
MySQLParserListener.prototype.exitOpenCursor = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#declareVariable.
MySQLParserListener.prototype.enterDeclareVariable = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#declareVariable.
MySQLParserListener.prototype.exitDeclareVariable = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#declareCondition.
MySQLParserListener.prototype.enterDeclareCondition = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#declareCondition.
MySQLParserListener.prototype.exitDeclareCondition = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#declareCursor.
MySQLParserListener.prototype.enterDeclareCursor = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#declareCursor.
MySQLParserListener.prototype.exitDeclareCursor = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#declareHandler.
MySQLParserListener.prototype.enterDeclareHandler = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#declareHandler.
MySQLParserListener.prototype.exitDeclareHandler = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#handlerConditionCode.
MySQLParserListener.prototype.enterHandlerConditionCode = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#handlerConditionCode.
MySQLParserListener.prototype.exitHandlerConditionCode = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#handlerConditionState.
MySQLParserListener.prototype.enterHandlerConditionState = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#handlerConditionState.
MySQLParserListener.prototype.exitHandlerConditionState = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#handlerConditionName.
MySQLParserListener.prototype.enterHandlerConditionName = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#handlerConditionName.
MySQLParserListener.prototype.exitHandlerConditionName = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#handlerConditionWarning.
MySQLParserListener.prototype.enterHandlerConditionWarning = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#handlerConditionWarning.
MySQLParserListener.prototype.exitHandlerConditionWarning = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#handlerConditionNotfound.
MySQLParserListener.prototype.enterHandlerConditionNotfound = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#handlerConditionNotfound.
MySQLParserListener.prototype.exitHandlerConditionNotfound = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#handlerConditionException.
MySQLParserListener.prototype.enterHandlerConditionException = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#handlerConditionException.
MySQLParserListener.prototype.exitHandlerConditionException = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#procedureSqlStatement.
MySQLParserListener.prototype.enterProcedureSqlStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#procedureSqlStatement.
MySQLParserListener.prototype.exitProcedureSqlStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#caseAlternative.
MySQLParserListener.prototype.enterCaseAlternative = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#caseAlternative.
MySQLParserListener.prototype.exitCaseAlternative = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#elifAlternative.
MySQLParserListener.prototype.enterElifAlternative = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#elifAlternative.
MySQLParserListener.prototype.exitElifAlternative = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterUserMysqlV56.
MySQLParserListener.prototype.enterAlterUserMysqlV56 = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterUserMysqlV56.
MySQLParserListener.prototype.exitAlterUserMysqlV56 = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#alterUserMysqlV57.
MySQLParserListener.prototype.enterAlterUserMysqlV57 = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#alterUserMysqlV57.
MySQLParserListener.prototype.exitAlterUserMysqlV57 = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#createUserMysqlV56.
MySQLParserListener.prototype.enterCreateUserMysqlV56 = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#createUserMysqlV56.
MySQLParserListener.prototype.exitCreateUserMysqlV56 = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#createUserMysqlV57.
MySQLParserListener.prototype.enterCreateUserMysqlV57 = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#createUserMysqlV57.
MySQLParserListener.prototype.exitCreateUserMysqlV57 = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#dropUser.
MySQLParserListener.prototype.enterDropUser = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#dropUser.
MySQLParserListener.prototype.exitDropUser = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#grantStatement.
MySQLParserListener.prototype.enterGrantStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#grantStatement.
MySQLParserListener.prototype.exitGrantStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#grantProxy.
MySQLParserListener.prototype.enterGrantProxy = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#grantProxy.
MySQLParserListener.prototype.exitGrantProxy = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#renameUser.
MySQLParserListener.prototype.enterRenameUser = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#renameUser.
MySQLParserListener.prototype.exitRenameUser = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#detailRevoke.
MySQLParserListener.prototype.enterDetailRevoke = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#detailRevoke.
MySQLParserListener.prototype.exitDetailRevoke = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#shortRevoke.
MySQLParserListener.prototype.enterShortRevoke = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#shortRevoke.
MySQLParserListener.prototype.exitShortRevoke = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#revokeProxy.
MySQLParserListener.prototype.enterRevokeProxy = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#revokeProxy.
MySQLParserListener.prototype.exitRevokeProxy = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#setPasswordStatement.
MySQLParserListener.prototype.enterSetPasswordStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#setPasswordStatement.
MySQLParserListener.prototype.exitSetPasswordStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#userSpecification.
MySQLParserListener.prototype.enterUserSpecification = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#userSpecification.
MySQLParserListener.prototype.exitUserSpecification = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#passwordAuthOption.
MySQLParserListener.prototype.enterPasswordAuthOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#passwordAuthOption.
MySQLParserListener.prototype.exitPasswordAuthOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#stringAuthOption.
MySQLParserListener.prototype.enterStringAuthOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#stringAuthOption.
MySQLParserListener.prototype.exitStringAuthOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#hashAuthOption.
MySQLParserListener.prototype.enterHashAuthOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#hashAuthOption.
MySQLParserListener.prototype.exitHashAuthOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#simpleAuthOption.
MySQLParserListener.prototype.enterSimpleAuthOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#simpleAuthOption.
MySQLParserListener.prototype.exitSimpleAuthOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tlsOption.
MySQLParserListener.prototype.enterTlsOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tlsOption.
MySQLParserListener.prototype.exitTlsOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#userResourceOption.
MySQLParserListener.prototype.enterUserResourceOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#userResourceOption.
MySQLParserListener.prototype.exitUserResourceOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#userPasswordOption.
MySQLParserListener.prototype.enterUserPasswordOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#userPasswordOption.
MySQLParserListener.prototype.exitUserPasswordOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#userLockOption.
MySQLParserListener.prototype.enterUserLockOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#userLockOption.
MySQLParserListener.prototype.exitUserLockOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#privelegeClause.
MySQLParserListener.prototype.enterPrivelegeClause = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#privelegeClause.
MySQLParserListener.prototype.exitPrivelegeClause = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#privilege.
MySQLParserListener.prototype.enterPrivilege = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#privilege.
MySQLParserListener.prototype.exitPrivilege = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#currentSchemaPriviLevel.
MySQLParserListener.prototype.enterCurrentSchemaPriviLevel = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#currentSchemaPriviLevel.
MySQLParserListener.prototype.exitCurrentSchemaPriviLevel = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#globalPrivLevel.
MySQLParserListener.prototype.enterGlobalPrivLevel = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#globalPrivLevel.
MySQLParserListener.prototype.exitGlobalPrivLevel = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#definiteSchemaPrivLevel.
MySQLParserListener.prototype.enterDefiniteSchemaPrivLevel = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#definiteSchemaPrivLevel.
MySQLParserListener.prototype.exitDefiniteSchemaPrivLevel = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#definiteFullTablePrivLevel.
MySQLParserListener.prototype.enterDefiniteFullTablePrivLevel = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#definiteFullTablePrivLevel.
MySQLParserListener.prototype.exitDefiniteFullTablePrivLevel = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#definiteFullTablePrivLevel2.
MySQLParserListener.prototype.enterDefiniteFullTablePrivLevel2 = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#definiteFullTablePrivLevel2.
MySQLParserListener.prototype.exitDefiniteFullTablePrivLevel2 = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#definiteTablePrivLevel.
MySQLParserListener.prototype.enterDefiniteTablePrivLevel = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#definiteTablePrivLevel.
MySQLParserListener.prototype.exitDefiniteTablePrivLevel = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#renameUserClause.
MySQLParserListener.prototype.enterRenameUserClause = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#renameUserClause.
MySQLParserListener.prototype.exitRenameUserClause = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#analyzeTable.
MySQLParserListener.prototype.enterAnalyzeTable = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#analyzeTable.
MySQLParserListener.prototype.exitAnalyzeTable = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#checkTable.
MySQLParserListener.prototype.enterCheckTable = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#checkTable.
MySQLParserListener.prototype.exitCheckTable = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#checksumTable.
MySQLParserListener.prototype.enterChecksumTable = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#checksumTable.
MySQLParserListener.prototype.exitChecksumTable = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#optimizeTable.
MySQLParserListener.prototype.enterOptimizeTable = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#optimizeTable.
MySQLParserListener.prototype.exitOptimizeTable = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#repairTable.
MySQLParserListener.prototype.enterRepairTable = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#repairTable.
MySQLParserListener.prototype.exitRepairTable = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#checkTableOption.
MySQLParserListener.prototype.enterCheckTableOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#checkTableOption.
MySQLParserListener.prototype.exitCheckTableOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#createUdfunction.
MySQLParserListener.prototype.enterCreateUdfunction = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#createUdfunction.
MySQLParserListener.prototype.exitCreateUdfunction = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#installPlugin.
MySQLParserListener.prototype.enterInstallPlugin = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#installPlugin.
MySQLParserListener.prototype.exitInstallPlugin = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#uninstallPlugin.
MySQLParserListener.prototype.enterUninstallPlugin = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#uninstallPlugin.
MySQLParserListener.prototype.exitUninstallPlugin = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#setVariable.
MySQLParserListener.prototype.enterSetVariable = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#setVariable.
MySQLParserListener.prototype.exitSetVariable = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#setCharset.
MySQLParserListener.prototype.enterSetCharset = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#setCharset.
MySQLParserListener.prototype.exitSetCharset = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#setNames.
MySQLParserListener.prototype.enterSetNames = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#setNames.
MySQLParserListener.prototype.exitSetNames = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#setPassword.
MySQLParserListener.prototype.enterSetPassword = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#setPassword.
MySQLParserListener.prototype.exitSetPassword = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#setTransaction.
MySQLParserListener.prototype.enterSetTransaction = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#setTransaction.
MySQLParserListener.prototype.exitSetTransaction = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#setAutocommit.
MySQLParserListener.prototype.enterSetAutocommit = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#setAutocommit.
MySQLParserListener.prototype.exitSetAutocommit = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#setNewValueInsideTrigger.
MySQLParserListener.prototype.enterSetNewValueInsideTrigger = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#setNewValueInsideTrigger.
MySQLParserListener.prototype.exitSetNewValueInsideTrigger = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#showMasterLogs.
MySQLParserListener.prototype.enterShowMasterLogs = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#showMasterLogs.
MySQLParserListener.prototype.exitShowMasterLogs = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#showLogEvents.
MySQLParserListener.prototype.enterShowLogEvents = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#showLogEvents.
MySQLParserListener.prototype.exitShowLogEvents = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#showObjectFilter.
MySQLParserListener.prototype.enterShowObjectFilter = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#showObjectFilter.
MySQLParserListener.prototype.exitShowObjectFilter = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#showColumns.
MySQLParserListener.prototype.enterShowColumns = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#showColumns.
MySQLParserListener.prototype.exitShowColumns = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#showCreateDb.
MySQLParserListener.prototype.enterShowCreateDb = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#showCreateDb.
MySQLParserListener.prototype.exitShowCreateDb = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#showCreateFullIdObject.
MySQLParserListener.prototype.enterShowCreateFullIdObject = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#showCreateFullIdObject.
MySQLParserListener.prototype.exitShowCreateFullIdObject = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#showCreateUser.
MySQLParserListener.prototype.enterShowCreateUser = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#showCreateUser.
MySQLParserListener.prototype.exitShowCreateUser = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#showEngine.
MySQLParserListener.prototype.enterShowEngine = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#showEngine.
MySQLParserListener.prototype.exitShowEngine = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#showGlobalInfo.
MySQLParserListener.prototype.enterShowGlobalInfo = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#showGlobalInfo.
MySQLParserListener.prototype.exitShowGlobalInfo = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#showErrors.
MySQLParserListener.prototype.enterShowErrors = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#showErrors.
MySQLParserListener.prototype.exitShowErrors = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#showCountErrors.
MySQLParserListener.prototype.enterShowCountErrors = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#showCountErrors.
MySQLParserListener.prototype.exitShowCountErrors = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#showSchemaFilter.
MySQLParserListener.prototype.enterShowSchemaFilter = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#showSchemaFilter.
MySQLParserListener.prototype.exitShowSchemaFilter = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#showRoutine.
MySQLParserListener.prototype.enterShowRoutine = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#showRoutine.
MySQLParserListener.prototype.exitShowRoutine = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#showGrants.
MySQLParserListener.prototype.enterShowGrants = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#showGrants.
MySQLParserListener.prototype.exitShowGrants = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#showIndexes.
MySQLParserListener.prototype.enterShowIndexes = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#showIndexes.
MySQLParserListener.prototype.exitShowIndexes = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#showOpenTables.
MySQLParserListener.prototype.enterShowOpenTables = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#showOpenTables.
MySQLParserListener.prototype.exitShowOpenTables = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#showProfile.
MySQLParserListener.prototype.enterShowProfile = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#showProfile.
MySQLParserListener.prototype.exitShowProfile = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#showSlaveStatus.
MySQLParserListener.prototype.enterShowSlaveStatus = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#showSlaveStatus.
MySQLParserListener.prototype.exitShowSlaveStatus = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#variableClause.
MySQLParserListener.prototype.enterVariableClause = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#variableClause.
MySQLParserListener.prototype.exitVariableClause = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#showCommonEntity.
MySQLParserListener.prototype.enterShowCommonEntity = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#showCommonEntity.
MySQLParserListener.prototype.exitShowCommonEntity = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#showFilter.
MySQLParserListener.prototype.enterShowFilter = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#showFilter.
MySQLParserListener.prototype.exitShowFilter = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#showGlobalInfoClause.
MySQLParserListener.prototype.enterShowGlobalInfoClause = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#showGlobalInfoClause.
MySQLParserListener.prototype.exitShowGlobalInfoClause = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#showSchemaEntity.
MySQLParserListener.prototype.enterShowSchemaEntity = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#showSchemaEntity.
MySQLParserListener.prototype.exitShowSchemaEntity = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#showProfileType.
MySQLParserListener.prototype.enterShowProfileType = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#showProfileType.
MySQLParserListener.prototype.exitShowProfileType = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#binlogStatement.
MySQLParserListener.prototype.enterBinlogStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#binlogStatement.
MySQLParserListener.prototype.exitBinlogStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#cacheIndexStatement.
MySQLParserListener.prototype.enterCacheIndexStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#cacheIndexStatement.
MySQLParserListener.prototype.exitCacheIndexStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#flushStatement.
MySQLParserListener.prototype.enterFlushStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#flushStatement.
MySQLParserListener.prototype.exitFlushStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#killStatement.
MySQLParserListener.prototype.enterKillStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#killStatement.
MySQLParserListener.prototype.exitKillStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#loadIndexIntoCache.
MySQLParserListener.prototype.enterLoadIndexIntoCache = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#loadIndexIntoCache.
MySQLParserListener.prototype.exitLoadIndexIntoCache = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#resetStatement.
MySQLParserListener.prototype.enterResetStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#resetStatement.
MySQLParserListener.prototype.exitResetStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#shutdownStatement.
MySQLParserListener.prototype.enterShutdownStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#shutdownStatement.
MySQLParserListener.prototype.exitShutdownStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tableIndexes.
MySQLParserListener.prototype.enterTableIndexes = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tableIndexes.
MySQLParserListener.prototype.exitTableIndexes = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#simpleFlushOption.
MySQLParserListener.prototype.enterSimpleFlushOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#simpleFlushOption.
MySQLParserListener.prototype.exitSimpleFlushOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#channelFlushOption.
MySQLParserListener.prototype.enterChannelFlushOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#channelFlushOption.
MySQLParserListener.prototype.exitChannelFlushOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tableFlushOption.
MySQLParserListener.prototype.enterTableFlushOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tableFlushOption.
MySQLParserListener.prototype.exitTableFlushOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#flushTableOption.
MySQLParserListener.prototype.enterFlushTableOption = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#flushTableOption.
MySQLParserListener.prototype.exitFlushTableOption = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#loadedTableIndexes.
MySQLParserListener.prototype.enterLoadedTableIndexes = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#loadedTableIndexes.
MySQLParserListener.prototype.exitLoadedTableIndexes = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#simpleDescribeStatement.
MySQLParserListener.prototype.enterSimpleDescribeStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#simpleDescribeStatement.
MySQLParserListener.prototype.exitSimpleDescribeStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#fullDescribeStatement.
MySQLParserListener.prototype.enterFullDescribeStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#fullDescribeStatement.
MySQLParserListener.prototype.exitFullDescribeStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#helpStatement.
MySQLParserListener.prototype.enterHelpStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#helpStatement.
MySQLParserListener.prototype.exitHelpStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#useStatement.
MySQLParserListener.prototype.enterUseStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#useStatement.
MySQLParserListener.prototype.exitUseStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#signalStatement.
MySQLParserListener.prototype.enterSignalStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#signalStatement.
MySQLParserListener.prototype.exitSignalStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#resignalStatement.
MySQLParserListener.prototype.enterResignalStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#resignalStatement.
MySQLParserListener.prototype.exitResignalStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#signalConditionInformation.
MySQLParserListener.prototype.enterSignalConditionInformation = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#signalConditionInformation.
MySQLParserListener.prototype.exitSignalConditionInformation = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#diagnosticsStatement.
MySQLParserListener.prototype.enterDiagnosticsStatement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#diagnosticsStatement.
MySQLParserListener.prototype.exitDiagnosticsStatement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#diagnosticsConditionInformationName.
MySQLParserListener.prototype.enterDiagnosticsConditionInformationName = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#diagnosticsConditionInformationName.
MySQLParserListener.prototype.exitDiagnosticsConditionInformationName = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#describeStatements.
MySQLParserListener.prototype.enterDescribeStatements = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#describeStatements.
MySQLParserListener.prototype.exitDescribeStatements = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#describeConnection.
MySQLParserListener.prototype.enterDescribeConnection = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#describeConnection.
MySQLParserListener.prototype.exitDescribeConnection = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#fullId.
MySQLParserListener.prototype.enterFullId = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#fullId.
MySQLParserListener.prototype.exitFullId = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tableName.
MySQLParserListener.prototype.enterTableName = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tableName.
MySQLParserListener.prototype.exitTableName = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#fullColumnName.
MySQLParserListener.prototype.enterFullColumnName = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#fullColumnName.
MySQLParserListener.prototype.exitFullColumnName = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#indexColumnName.
MySQLParserListener.prototype.enterIndexColumnName = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#indexColumnName.
MySQLParserListener.prototype.exitIndexColumnName = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#userName.
MySQLParserListener.prototype.enterUserName = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#userName.
MySQLParserListener.prototype.exitUserName = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#mysqlVariable.
MySQLParserListener.prototype.enterMysqlVariable = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#mysqlVariable.
MySQLParserListener.prototype.exitMysqlVariable = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#charsetName.
MySQLParserListener.prototype.enterCharsetName = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#charsetName.
MySQLParserListener.prototype.exitCharsetName = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#collationName.
MySQLParserListener.prototype.enterCollationName = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#collationName.
MySQLParserListener.prototype.exitCollationName = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#engineName.
MySQLParserListener.prototype.enterEngineName = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#engineName.
MySQLParserListener.prototype.exitEngineName = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#uuidSet.
MySQLParserListener.prototype.enterUuidSet = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#uuidSet.
MySQLParserListener.prototype.exitUuidSet = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#xid.
MySQLParserListener.prototype.enterXid = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#xid.
MySQLParserListener.prototype.exitXid = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#xuidStringId.
MySQLParserListener.prototype.enterXuidStringId = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#xuidStringId.
MySQLParserListener.prototype.exitXuidStringId = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#authPlugin.
MySQLParserListener.prototype.enterAuthPlugin = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#authPlugin.
MySQLParserListener.prototype.exitAuthPlugin = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#uid.
MySQLParserListener.prototype.enterUid = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#uid.
MySQLParserListener.prototype.exitUid = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#simpleId.
MySQLParserListener.prototype.enterSimpleId = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#simpleId.
MySQLParserListener.prototype.exitSimpleId = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#dottedId.
MySQLParserListener.prototype.enterDottedId = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#dottedId.
MySQLParserListener.prototype.exitDottedId = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#decimalLiteral.
MySQLParserListener.prototype.enterDecimalLiteral = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#decimalLiteral.
MySQLParserListener.prototype.exitDecimalLiteral = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#fileSizeLiteral.
MySQLParserListener.prototype.enterFileSizeLiteral = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#fileSizeLiteral.
MySQLParserListener.prototype.exitFileSizeLiteral = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#stringLiteral.
MySQLParserListener.prototype.enterStringLiteral = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#stringLiteral.
MySQLParserListener.prototype.exitStringLiteral = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#booleanLiteral.
MySQLParserListener.prototype.enterBooleanLiteral = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#booleanLiteral.
MySQLParserListener.prototype.exitBooleanLiteral = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#hexadecimalLiteral.
MySQLParserListener.prototype.enterHexadecimalLiteral = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#hexadecimalLiteral.
MySQLParserListener.prototype.exitHexadecimalLiteral = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#nullNotnull.
MySQLParserListener.prototype.enterNullNotnull = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#nullNotnull.
MySQLParserListener.prototype.exitNullNotnull = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#constant.
MySQLParserListener.prototype.enterConstant = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#constant.
MySQLParserListener.prototype.exitConstant = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#stringDataType.
MySQLParserListener.prototype.enterStringDataType = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#stringDataType.
MySQLParserListener.prototype.exitStringDataType = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#nationalStringDataType.
MySQLParserListener.prototype.enterNationalStringDataType = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#nationalStringDataType.
MySQLParserListener.prototype.exitNationalStringDataType = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#nationalVaryingStringDataType.
MySQLParserListener.prototype.enterNationalVaryingStringDataType = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#nationalVaryingStringDataType.
MySQLParserListener.prototype.exitNationalVaryingStringDataType = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#dimensionDataType.
MySQLParserListener.prototype.enterDimensionDataType = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#dimensionDataType.
MySQLParserListener.prototype.exitDimensionDataType = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#simpleDataType.
MySQLParserListener.prototype.enterSimpleDataType = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#simpleDataType.
MySQLParserListener.prototype.exitSimpleDataType = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#collectionDataType.
MySQLParserListener.prototype.enterCollectionDataType = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#collectionDataType.
MySQLParserListener.prototype.exitCollectionDataType = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#spatialDataType.
MySQLParserListener.prototype.enterSpatialDataType = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#spatialDataType.
MySQLParserListener.prototype.exitSpatialDataType = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#longVarcharDataType.
MySQLParserListener.prototype.enterLongVarcharDataType = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#longVarcharDataType.
MySQLParserListener.prototype.exitLongVarcharDataType = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#longVarbinaryDataType.
MySQLParserListener.prototype.enterLongVarbinaryDataType = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#longVarbinaryDataType.
MySQLParserListener.prototype.exitLongVarbinaryDataType = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#collectionOptions.
MySQLParserListener.prototype.enterCollectionOptions = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#collectionOptions.
MySQLParserListener.prototype.exitCollectionOptions = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#convertedDataType.
MySQLParserListener.prototype.enterConvertedDataType = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#convertedDataType.
MySQLParserListener.prototype.exitConvertedDataType = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#lengthOneDimension.
MySQLParserListener.prototype.enterLengthOneDimension = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#lengthOneDimension.
MySQLParserListener.prototype.exitLengthOneDimension = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#lengthTwoDimension.
MySQLParserListener.prototype.enterLengthTwoDimension = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#lengthTwoDimension.
MySQLParserListener.prototype.exitLengthTwoDimension = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#lengthTwoOptionalDimension.
MySQLParserListener.prototype.enterLengthTwoOptionalDimension = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#lengthTwoOptionalDimension.
MySQLParserListener.prototype.exitLengthTwoOptionalDimension = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#uidList.
MySQLParserListener.prototype.enterUidList = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#uidList.
MySQLParserListener.prototype.exitUidList = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#tables.
MySQLParserListener.prototype.enterTables = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#tables.
MySQLParserListener.prototype.exitTables = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#indexColumnNames.
MySQLParserListener.prototype.enterIndexColumnNames = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#indexColumnNames.
MySQLParserListener.prototype.exitIndexColumnNames = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#expressions.
MySQLParserListener.prototype.enterExpressions = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#expressions.
MySQLParserListener.prototype.exitExpressions = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#expressionsWithDefaults.
MySQLParserListener.prototype.enterExpressionsWithDefaults = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#expressionsWithDefaults.
MySQLParserListener.prototype.exitExpressionsWithDefaults = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#constants.
MySQLParserListener.prototype.enterConstants = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#constants.
MySQLParserListener.prototype.exitConstants = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#simpleStrings.
MySQLParserListener.prototype.enterSimpleStrings = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#simpleStrings.
MySQLParserListener.prototype.exitSimpleStrings = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#userVariables.
MySQLParserListener.prototype.enterUserVariables = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#userVariables.
MySQLParserListener.prototype.exitUserVariables = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#defaultValue.
MySQLParserListener.prototype.enterDefaultValue = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#defaultValue.
MySQLParserListener.prototype.exitDefaultValue = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#currentTimestamp.
MySQLParserListener.prototype.enterCurrentTimestamp = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#currentTimestamp.
MySQLParserListener.prototype.exitCurrentTimestamp = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#expressionOrDefault.
MySQLParserListener.prototype.enterExpressionOrDefault = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#expressionOrDefault.
MySQLParserListener.prototype.exitExpressionOrDefault = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#ifExists.
MySQLParserListener.prototype.enterIfExists = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#ifExists.
MySQLParserListener.prototype.exitIfExists = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#ifNotExists.
MySQLParserListener.prototype.enterIfNotExists = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#ifNotExists.
MySQLParserListener.prototype.exitIfNotExists = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#specificFunctionCall.
MySQLParserListener.prototype.enterSpecificFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#specificFunctionCall.
MySQLParserListener.prototype.exitSpecificFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#aggregateFunctionCall.
MySQLParserListener.prototype.enterAggregateFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#aggregateFunctionCall.
MySQLParserListener.prototype.exitAggregateFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#scalarFunctionCall.
MySQLParserListener.prototype.enterScalarFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#scalarFunctionCall.
MySQLParserListener.prototype.exitScalarFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#udfFunctionCall.
MySQLParserListener.prototype.enterUdfFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#udfFunctionCall.
MySQLParserListener.prototype.exitUdfFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#passwordFunctionCall.
MySQLParserListener.prototype.enterPasswordFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#passwordFunctionCall.
MySQLParserListener.prototype.exitPasswordFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#simpleFunctionCall.
MySQLParserListener.prototype.enterSimpleFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#simpleFunctionCall.
MySQLParserListener.prototype.exitSimpleFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#dataTypeFunctionCall.
MySQLParserListener.prototype.enterDataTypeFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#dataTypeFunctionCall.
MySQLParserListener.prototype.exitDataTypeFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#valuesFunctionCall.
MySQLParserListener.prototype.enterValuesFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#valuesFunctionCall.
MySQLParserListener.prototype.exitValuesFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#caseFunctionCall.
MySQLParserListener.prototype.enterCaseFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#caseFunctionCall.
MySQLParserListener.prototype.exitCaseFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#charFunctionCall.
MySQLParserListener.prototype.enterCharFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#charFunctionCall.
MySQLParserListener.prototype.exitCharFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#positionFunctionCall.
MySQLParserListener.prototype.enterPositionFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#positionFunctionCall.
MySQLParserListener.prototype.exitPositionFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#substrFunctionCall.
MySQLParserListener.prototype.enterSubstrFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#substrFunctionCall.
MySQLParserListener.prototype.exitSubstrFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#trimFunctionCall.
MySQLParserListener.prototype.enterTrimFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#trimFunctionCall.
MySQLParserListener.prototype.exitTrimFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#weightFunctionCall.
MySQLParserListener.prototype.enterWeightFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#weightFunctionCall.
MySQLParserListener.prototype.exitWeightFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#extractFunctionCall.
MySQLParserListener.prototype.enterExtractFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#extractFunctionCall.
MySQLParserListener.prototype.exitExtractFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#getFormatFunctionCall.
MySQLParserListener.prototype.enterGetFormatFunctionCall = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#getFormatFunctionCall.
MySQLParserListener.prototype.exitGetFormatFunctionCall = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#caseFuncAlternative.
MySQLParserListener.prototype.enterCaseFuncAlternative = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#caseFuncAlternative.
MySQLParserListener.prototype.exitCaseFuncAlternative = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#levelWeightList.
MySQLParserListener.prototype.enterLevelWeightList = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#levelWeightList.
MySQLParserListener.prototype.exitLevelWeightList = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#levelWeightRange.
MySQLParserListener.prototype.enterLevelWeightRange = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#levelWeightRange.
MySQLParserListener.prototype.exitLevelWeightRange = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#levelInWeightListElement.
MySQLParserListener.prototype.enterLevelInWeightListElement = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#levelInWeightListElement.
MySQLParserListener.prototype.exitLevelInWeightListElement = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#aggregateWindowedFunction.
MySQLParserListener.prototype.enterAggregateWindowedFunction = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#aggregateWindowedFunction.
MySQLParserListener.prototype.exitAggregateWindowedFunction = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#scalarFunctionName.
MySQLParserListener.prototype.enterScalarFunctionName = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#scalarFunctionName.
MySQLParserListener.prototype.exitScalarFunctionName = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#passwordFunctionClause.
MySQLParserListener.prototype.enterPasswordFunctionClause = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#passwordFunctionClause.
MySQLParserListener.prototype.exitPasswordFunctionClause = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#functionArgs.
MySQLParserListener.prototype.enterFunctionArgs = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#functionArgs.
MySQLParserListener.prototype.exitFunctionArgs = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#functionArg.
MySQLParserListener.prototype.enterFunctionArg = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#functionArg.
MySQLParserListener.prototype.exitFunctionArg = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#isExpression.
MySQLParserListener.prototype.enterIsExpression = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#isExpression.
MySQLParserListener.prototype.exitIsExpression = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#notExpression.
MySQLParserListener.prototype.enterNotExpression = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#notExpression.
MySQLParserListener.prototype.exitNotExpression = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#logicalExpression.
MySQLParserListener.prototype.enterLogicalExpression = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#logicalExpression.
MySQLParserListener.prototype.exitLogicalExpression = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#predicateExpression.
MySQLParserListener.prototype.enterPredicateExpression = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#predicateExpression.
MySQLParserListener.prototype.exitPredicateExpression = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#soundsLikePredicate.
MySQLParserListener.prototype.enterSoundsLikePredicate = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#soundsLikePredicate.
MySQLParserListener.prototype.exitSoundsLikePredicate = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#expressionAtomPredicate.
MySQLParserListener.prototype.enterExpressionAtomPredicate = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#expressionAtomPredicate.
MySQLParserListener.prototype.exitExpressionAtomPredicate = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#inPredicate.
MySQLParserListener.prototype.enterInPredicate = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#inPredicate.
MySQLParserListener.prototype.exitInPredicate = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#subqueryComparasionPredicate.
MySQLParserListener.prototype.enterSubqueryComparasionPredicate = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#subqueryComparasionPredicate.
MySQLParserListener.prototype.exitSubqueryComparasionPredicate = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#betweenPredicate.
MySQLParserListener.prototype.enterBetweenPredicate = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#betweenPredicate.
MySQLParserListener.prototype.exitBetweenPredicate = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#binaryComparasionPredicate.
MySQLParserListener.prototype.enterBinaryComparasionPredicate = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#binaryComparasionPredicate.
MySQLParserListener.prototype.exitBinaryComparasionPredicate = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#isNullPredicate.
MySQLParserListener.prototype.enterIsNullPredicate = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#isNullPredicate.
MySQLParserListener.prototype.exitIsNullPredicate = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#likePredicate.
MySQLParserListener.prototype.enterLikePredicate = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#likePredicate.
MySQLParserListener.prototype.exitLikePredicate = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#regexpPredicate.
MySQLParserListener.prototype.enterRegexpPredicate = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#regexpPredicate.
MySQLParserListener.prototype.exitRegexpPredicate = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#unaryExpressionAtom.
MySQLParserListener.prototype.enterUnaryExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#unaryExpressionAtom.
MySQLParserListener.prototype.exitUnaryExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#collateExpressionAtom.
MySQLParserListener.prototype.enterCollateExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#collateExpressionAtom.
MySQLParserListener.prototype.exitCollateExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#subqueryExpessionAtom.
MySQLParserListener.prototype.enterSubqueryExpessionAtom = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#subqueryExpessionAtom.
MySQLParserListener.prototype.exitSubqueryExpessionAtom = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#mysqlVariableExpressionAtom.
MySQLParserListener.prototype.enterMysqlVariableExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#mysqlVariableExpressionAtom.
MySQLParserListener.prototype.exitMysqlVariableExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#nestedExpressionAtom.
MySQLParserListener.prototype.enterNestedExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#nestedExpressionAtom.
MySQLParserListener.prototype.exitNestedExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#nestedRowExpressionAtom.
MySQLParserListener.prototype.enterNestedRowExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#nestedRowExpressionAtom.
MySQLParserListener.prototype.exitNestedRowExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#mathExpressionAtom.
MySQLParserListener.prototype.enterMathExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#mathExpressionAtom.
MySQLParserListener.prototype.exitMathExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#intervalExpressionAtom.
MySQLParserListener.prototype.enterIntervalExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#intervalExpressionAtom.
MySQLParserListener.prototype.exitIntervalExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#existsExpessionAtom.
MySQLParserListener.prototype.enterExistsExpessionAtom = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#existsExpessionAtom.
MySQLParserListener.prototype.exitExistsExpessionAtom = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#constantExpressionAtom.
MySQLParserListener.prototype.enterConstantExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#constantExpressionAtom.
MySQLParserListener.prototype.exitConstantExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#functionCallExpressionAtom.
MySQLParserListener.prototype.enterFunctionCallExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#functionCallExpressionAtom.
MySQLParserListener.prototype.exitFunctionCallExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#binaryExpressionAtom.
MySQLParserListener.prototype.enterBinaryExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#binaryExpressionAtom.
MySQLParserListener.prototype.exitBinaryExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#fullColumnNameExpressionAtom.
MySQLParserListener.prototype.enterFullColumnNameExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#fullColumnNameExpressionAtom.
MySQLParserListener.prototype.exitFullColumnNameExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#bitExpressionAtom.
MySQLParserListener.prototype.enterBitExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#bitExpressionAtom.
MySQLParserListener.prototype.exitBitExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#unaryOperator.
MySQLParserListener.prototype.enterUnaryOperator = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#unaryOperator.
MySQLParserListener.prototype.exitUnaryOperator = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#comparisonOperator.
MySQLParserListener.prototype.enterComparisonOperator = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#comparisonOperator.
MySQLParserListener.prototype.exitComparisonOperator = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#logicalOperator.
MySQLParserListener.prototype.enterLogicalOperator = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#logicalOperator.
MySQLParserListener.prototype.exitLogicalOperator = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#bitOperator.
MySQLParserListener.prototype.enterBitOperator = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#bitOperator.
MySQLParserListener.prototype.exitBitOperator = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#mathOperator.
MySQLParserListener.prototype.enterMathOperator = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#mathOperator.
MySQLParserListener.prototype.exitMathOperator = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#charsetNameBase.
MySQLParserListener.prototype.enterCharsetNameBase = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#charsetNameBase.
MySQLParserListener.prototype.exitCharsetNameBase = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#transactionLevelBase.
MySQLParserListener.prototype.enterTransactionLevelBase = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#transactionLevelBase.
MySQLParserListener.prototype.exitTransactionLevelBase = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#privilegesBase.
MySQLParserListener.prototype.enterPrivilegesBase = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#privilegesBase.
MySQLParserListener.prototype.exitPrivilegesBase = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#intervalTypeBase.
MySQLParserListener.prototype.enterIntervalTypeBase = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#intervalTypeBase.
MySQLParserListener.prototype.exitIntervalTypeBase = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#dataTypeBase.
MySQLParserListener.prototype.enterDataTypeBase = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#dataTypeBase.
MySQLParserListener.prototype.exitDataTypeBase = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#keywordsCanBeId.
MySQLParserListener.prototype.enterKeywordsCanBeId = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#keywordsCanBeId.
MySQLParserListener.prototype.exitKeywordsCanBeId = function(ctx) {
};


// Enter a parse tree produced by MySQLParser#functionNameBase.
MySQLParserListener.prototype.enterFunctionNameBase = function(ctx) {
};

// Exit a parse tree produced by MySQLParser#functionNameBase.
MySQLParserListener.prototype.exitFunctionNameBase = function(ctx) {
};



exports.MySQLParserListener = MySQLParserListener;