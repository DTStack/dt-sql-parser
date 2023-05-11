// dt-sql-parser/src/grammar/generic/SqlParser.g4 by ANTLR 4.12.0

import {ParseTreeVisitor} from 'antlr4';


import { ProgramContext } from "./SqlParser";
import { StatementContext } from "./SqlParser";
import { SqlStatementsContext } from "./SqlParser";
import { SqlStatementContext } from "./SqlParser";
import { EmptyStatementContext } from "./SqlParser";
import { DdlStatementContext } from "./SqlParser";
import { DmlStatementContext } from "./SqlParser";
import { TransactionStatementContext } from "./SqlParser";
import { ReplicationStatementContext } from "./SqlParser";
import { PreparedStatementContext } from "./SqlParser";
import { CompoundStatementContext } from "./SqlParser";
import { AdministrationStatementContext } from "./SqlParser";
import { UtilityStatementContext } from "./SqlParser";
import { CreateDatabaseContext } from "./SqlParser";
import { CreateEventContext } from "./SqlParser";
import { CreateIndexContext } from "./SqlParser";
import { CreateLogfileGroupContext } from "./SqlParser";
import { CreateProcedureContext } from "./SqlParser";
import { CreateFunctionContext } from "./SqlParser";
import { CreateServerContext } from "./SqlParser";
import { CopyCreateTableContext } from "./SqlParser";
import { QueryCreateTableContext } from "./SqlParser";
import { ColumnCreateTableContext } from "./SqlParser";
import { CreateTablespaceInnodbContext } from "./SqlParser";
import { CreateTablespaceNdbContext } from "./SqlParser";
import { CreateTriggerContext } from "./SqlParser";
import { CreateViewContext } from "./SqlParser";
import { CreateDatabaseOptionContext } from "./SqlParser";
import { OwnerStatementContext } from "./SqlParser";
import { PreciseScheduleContext } from "./SqlParser";
import { IntervalScheduleContext } from "./SqlParser";
import { TimestampValueContext } from "./SqlParser";
import { IntervalExprContext } from "./SqlParser";
import { IntervalTypeContext } from "./SqlParser";
import { EnableTypeContext } from "./SqlParser";
import { IndexTypeContext } from "./SqlParser";
import { IndexOptionContext } from "./SqlParser";
import { ProcedureParameterContext } from "./SqlParser";
import { FunctionParameterContext } from "./SqlParser";
import { RoutineCommentContext } from "./SqlParser";
import { RoutineLanguageContext } from "./SqlParser";
import { RoutineBehaviorContext } from "./SqlParser";
import { RoutineDataContext } from "./SqlParser";
import { RoutineSecurityContext } from "./SqlParser";
import { ServerOptionContext } from "./SqlParser";
import { CreateDefinitionsContext } from "./SqlParser";
import { ColumnDeclarationContext } from "./SqlParser";
import { ConstraintDeclarationContext } from "./SqlParser";
import { IndexDeclarationContext } from "./SqlParser";
import { ColumnDefinitionContext } from "./SqlParser";
import { NullColumnConstraintContext } from "./SqlParser";
import { DefaultColumnConstraintContext } from "./SqlParser";
import { AutoIncrementColumnConstraintContext } from "./SqlParser";
import { PrimaryKeyColumnConstraintContext } from "./SqlParser";
import { UniqueKeyColumnConstraintContext } from "./SqlParser";
import { CommentColumnConstraintContext } from "./SqlParser";
import { FormatColumnConstraintContext } from "./SqlParser";
import { StorageColumnConstraintContext } from "./SqlParser";
import { ReferenceColumnConstraintContext } from "./SqlParser";
import { CollateColumnConstraintContext } from "./SqlParser";
import { GeneratedColumnConstraintContext } from "./SqlParser";
import { SerialDefaultColumnConstraintContext } from "./SqlParser";
import { CheckColumnConstraintContext } from "./SqlParser";
import { PrimaryKeyTableConstraintContext } from "./SqlParser";
import { UniqueKeyTableConstraintContext } from "./SqlParser";
import { ForeignKeyTableConstraintContext } from "./SqlParser";
import { CheckTableConstraintContext } from "./SqlParser";
import { ReferenceDefinitionContext } from "./SqlParser";
import { ReferenceActionContext } from "./SqlParser";
import { ReferenceControlTypeContext } from "./SqlParser";
import { SimpleIndexDeclarationContext } from "./SqlParser";
import { SpecialIndexDeclarationContext } from "./SqlParser";
import { TableOptionEngineContext } from "./SqlParser";
import { TableOptionAutoIncrementContext } from "./SqlParser";
import { TableOptionAverageContext } from "./SqlParser";
import { TableOptionCharsetContext } from "./SqlParser";
import { TableOptionChecksumContext } from "./SqlParser";
import { TableOptionCollateContext } from "./SqlParser";
import { TableOptionCommentContext } from "./SqlParser";
import { TableOptionCompressionContext } from "./SqlParser";
import { TableOptionConnectionContext } from "./SqlParser";
import { TableOptionDataDirectoryContext } from "./SqlParser";
import { TableOptionDelayContext } from "./SqlParser";
import { TableOptionEncryptionContext } from "./SqlParser";
import { TableOptionIndexDirectoryContext } from "./SqlParser";
import { TableOptionInsertMethodContext } from "./SqlParser";
import { TableOptionKeyBlockSizeContext } from "./SqlParser";
import { TableOptionMaxRowsContext } from "./SqlParser";
import { TableOptionMinRowsContext } from "./SqlParser";
import { TableOptionPackKeysContext } from "./SqlParser";
import { TableOptionPasswordContext } from "./SqlParser";
import { TableOptionRowFormatContext } from "./SqlParser";
import { TableOptionRecalculationContext } from "./SqlParser";
import { TableOptionPersistentContext } from "./SqlParser";
import { TableOptionSamplePageContext } from "./SqlParser";
import { TableOptionTablespaceContext } from "./SqlParser";
import { TableOptionUnionContext } from "./SqlParser";
import { TablespaceStorageContext } from "./SqlParser";
import { PartitionDefinitionsContext } from "./SqlParser";
import { PartitionFunctionHashContext } from "./SqlParser";
import { PartitionFunctionKeyContext } from "./SqlParser";
import { PartitionFunctionRangeContext } from "./SqlParser";
import { PartitionFunctionListContext } from "./SqlParser";
import { SubPartitionFunctionHashContext } from "./SqlParser";
import { SubPartitionFunctionKeyContext } from "./SqlParser";
import { PartitionComparisionContext } from "./SqlParser";
import { PartitionListAtomContext } from "./SqlParser";
import { PartitionListVectorContext } from "./SqlParser";
import { PartitionSimpleContext } from "./SqlParser";
import { PartitionDefinerAtomContext } from "./SqlParser";
import { PartitionDefinerVectorContext } from "./SqlParser";
import { SubpartitionDefinitionContext } from "./SqlParser";
import { PartitionOptionEngineContext } from "./SqlParser";
import { PartitionOptionCommentContext } from "./SqlParser";
import { PartitionOptionDataDirectoryContext } from "./SqlParser";
import { PartitionOptionIndexDirectoryContext } from "./SqlParser";
import { PartitionOptionMaxRowsContext } from "./SqlParser";
import { PartitionOptionMinRowsContext } from "./SqlParser";
import { PartitionOptionTablespaceContext } from "./SqlParser";
import { PartitionOptionNodeGroupContext } from "./SqlParser";
import { AlterSimpleDatabaseContext } from "./SqlParser";
import { AlterUpgradeNameContext } from "./SqlParser";
import { AlterEventContext } from "./SqlParser";
import { AlterFunctionContext } from "./SqlParser";
import { AlterInstanceContext } from "./SqlParser";
import { AlterLogfileGroupContext } from "./SqlParser";
import { AlterProcedureContext } from "./SqlParser";
import { AlterServerContext } from "./SqlParser";
import { AlterTableContext } from "./SqlParser";
import { AlterTablespaceContext } from "./SqlParser";
import { AlterViewContext } from "./SqlParser";
import { AlterByTableOptionContext } from "./SqlParser";
import { AlterByAddColumnContext } from "./SqlParser";
import { AlterByAddColumnsContext } from "./SqlParser";
import { AlterByAddIndexContext } from "./SqlParser";
import { AlterByAddPrimaryKeyContext } from "./SqlParser";
import { AlterByAddUniqueKeyContext } from "./SqlParser";
import { AlterByAddSpecialIndexContext } from "./SqlParser";
import { AlterByAddForeignKeyContext } from "./SqlParser";
import { AlterByAddCheckTableConstraintContext } from "./SqlParser";
import { AlterBySetAlgorithmContext } from "./SqlParser";
import { AlterByChangeDefaultContext } from "./SqlParser";
import { AlterByChangeColumnContext } from "./SqlParser";
import { AlterByRenameColumnContext } from "./SqlParser";
import { AlterByLockContext } from "./SqlParser";
import { AlterByModifyColumnContext } from "./SqlParser";
import { AlterByDropColumnContext } from "./SqlParser";
import { AlterByDropPrimaryKeyContext } from "./SqlParser";
import { AlterByRenameIndexContext } from "./SqlParser";
import { AlterByAlterIndexVisibilityContext } from "./SqlParser";
import { AlterByDropIndexContext } from "./SqlParser";
import { AlterByDropForeignKeyContext } from "./SqlParser";
import { AlterByDisableKeysContext } from "./SqlParser";
import { AlterByEnableKeysContext } from "./SqlParser";
import { AlterByRenameContext } from "./SqlParser";
import { AlterByOrderContext } from "./SqlParser";
import { AlterByConvertCharsetContext } from "./SqlParser";
import { AlterByDefaultCharsetContext } from "./SqlParser";
import { AlterByDiscardTablespaceContext } from "./SqlParser";
import { AlterByImportTablespaceContext } from "./SqlParser";
import { AlterByForceContext } from "./SqlParser";
import { AlterByValidateContext } from "./SqlParser";
import { AlterByAddPartitionContext } from "./SqlParser";
import { AlterByDropPartitionContext } from "./SqlParser";
import { AlterByDiscardPartitionContext } from "./SqlParser";
import { AlterByImportPartitionContext } from "./SqlParser";
import { AlterByTruncatePartitionContext } from "./SqlParser";
import { AlterByCoalescePartitionContext } from "./SqlParser";
import { AlterByReorganizePartitionContext } from "./SqlParser";
import { AlterByExchangePartitionContext } from "./SqlParser";
import { AlterByAnalyzePartitionContext } from "./SqlParser";
import { AlterByCheckPartitionContext } from "./SqlParser";
import { AlterByOptimizePartitionContext } from "./SqlParser";
import { AlterByRebuildPartitionContext } from "./SqlParser";
import { AlterByRepairPartitionContext } from "./SqlParser";
import { AlterByRemovePartitioningContext } from "./SqlParser";
import { AlterByUpgradePartitioningContext } from "./SqlParser";
import { DropDatabaseContext } from "./SqlParser";
import { DropEventContext } from "./SqlParser";
import { DropIndexContext } from "./SqlParser";
import { DropLogfileGroupContext } from "./SqlParser";
import { DropProcedureContext } from "./SqlParser";
import { DropFunctionContext } from "./SqlParser";
import { DropServerContext } from "./SqlParser";
import { DropTableContext } from "./SqlParser";
import { DropTablespaceContext } from "./SqlParser";
import { DropTriggerContext } from "./SqlParser";
import { DropViewContext } from "./SqlParser";
import { RenameTableContext } from "./SqlParser";
import { RenameTableClauseContext } from "./SqlParser";
import { TruncateTableContext } from "./SqlParser";
import { CallStatementContext } from "./SqlParser";
import { DeleteStatementContext } from "./SqlParser";
import { DoStatementContext } from "./SqlParser";
import { HandlerStatementContext } from "./SqlParser";
import { InsertStatementContext } from "./SqlParser";
import { LoadDataStatementContext } from "./SqlParser";
import { LoadXmlStatementContext } from "./SqlParser";
import { ReplaceStatementContext } from "./SqlParser";
import { SimpleSelectContext } from "./SqlParser";
import { ParenthesisSelectContext } from "./SqlParser";
import { UnionSelectContext } from "./SqlParser";
import { UnionParenthesisSelectContext } from "./SqlParser";
import { UpdateStatementContext } from "./SqlParser";
import { InsertStatementValueContext } from "./SqlParser";
import { UpdatedElementContext } from "./SqlParser";
import { AssignmentFieldContext } from "./SqlParser";
import { LockClauseContext } from "./SqlParser";
import { SingleDeleteStatementContext } from "./SqlParser";
import { MultipleDeleteStatementContext } from "./SqlParser";
import { HandlerOpenStatementContext } from "./SqlParser";
import { HandlerReadIndexStatementContext } from "./SqlParser";
import { HandlerReadStatementContext } from "./SqlParser";
import { HandlerCloseStatementContext } from "./SqlParser";
import { SingleUpdateStatementContext } from "./SqlParser";
import { MultipleUpdateStatementContext } from "./SqlParser";
import { OrderByClauseContext } from "./SqlParser";
import { OrderByExpressionContext } from "./SqlParser";
import { TableSourcesContext } from "./SqlParser";
import { TableSourceBaseContext } from "./SqlParser";
import { TableSourceNestedContext } from "./SqlParser";
import { AtomTableItemContext } from "./SqlParser";
import { SubqueryTableItemContext } from "./SqlParser";
import { TableSourcesItemContext } from "./SqlParser";
import { IndexHintContext } from "./SqlParser";
import { IndexHintTypeContext } from "./SqlParser";
import { InnerJoinContext } from "./SqlParser";
import { StraightJoinContext } from "./SqlParser";
import { OuterJoinContext } from "./SqlParser";
import { NaturalJoinContext } from "./SqlParser";
import { QueryExpressionContext } from "./SqlParser";
import { QueryExpressionNointoContext } from "./SqlParser";
import { QuerySpecificationContext } from "./SqlParser";
import { QuerySpecificationNointoContext } from "./SqlParser";
import { UnionParenthesisContext } from "./SqlParser";
import { UnionStatementContext } from "./SqlParser";
import { SelectSpecContext } from "./SqlParser";
import { SelectElementsContext } from "./SqlParser";
import { SelectStarElementContext } from "./SqlParser";
import { SelectColumnElementContext } from "./SqlParser";
import { SelectFunctionElementContext } from "./SqlParser";
import { SelectExpressionElementContext } from "./SqlParser";
import { SelectIntoVariablesContext } from "./SqlParser";
import { SelectIntoDumpFileContext } from "./SqlParser";
import { SelectIntoTextFileContext } from "./SqlParser";
import { SelectFieldsIntoContext } from "./SqlParser";
import { SelectLinesIntoContext } from "./SqlParser";
import { FromClauseContext } from "./SqlParser";
import { GroupByItemContext } from "./SqlParser";
import { LimitClauseContext } from "./SqlParser";
import { LimitClauseAtomContext } from "./SqlParser";
import { StartTransactionContext } from "./SqlParser";
import { BeginWorkContext } from "./SqlParser";
import { CommitWorkContext } from "./SqlParser";
import { RollbackWorkContext } from "./SqlParser";
import { SavepointStatementContext } from "./SqlParser";
import { RollbackStatementContext } from "./SqlParser";
import { ReleaseStatementContext } from "./SqlParser";
import { LockTablesContext } from "./SqlParser";
import { UnlockTablesContext } from "./SqlParser";
import { SetAutocommitStatementContext } from "./SqlParser";
import { SetTransactionStatementContext } from "./SqlParser";
import { TransactionModeContext } from "./SqlParser";
import { LockTableElementContext } from "./SqlParser";
import { LockActionContext } from "./SqlParser";
import { TransactionOptionContext } from "./SqlParser";
import { TransactionLevelContext } from "./SqlParser";
import { ChangeMasterContext } from "./SqlParser";
import { ChangeReplicationFilterContext } from "./SqlParser";
import { PurgeBinaryLogsContext } from "./SqlParser";
import { ResetMasterContext } from "./SqlParser";
import { ResetSlaveContext } from "./SqlParser";
import { StartSlaveContext } from "./SqlParser";
import { StopSlaveContext } from "./SqlParser";
import { StartGroupReplicationContext } from "./SqlParser";
import { StopGroupReplicationContext } from "./SqlParser";
import { MasterStringOptionContext } from "./SqlParser";
import { MasterDecimalOptionContext } from "./SqlParser";
import { MasterBoolOptionContext } from "./SqlParser";
import { MasterRealOptionContext } from "./SqlParser";
import { MasterUidListOptionContext } from "./SqlParser";
import { StringMasterOptionContext } from "./SqlParser";
import { DecimalMasterOptionContext } from "./SqlParser";
import { BoolMasterOptionContext } from "./SqlParser";
import { ChannelOptionContext } from "./SqlParser";
import { DoDbReplicationContext } from "./SqlParser";
import { IgnoreDbReplicationContext } from "./SqlParser";
import { DoTableReplicationContext } from "./SqlParser";
import { IgnoreTableReplicationContext } from "./SqlParser";
import { WildDoTableReplicationContext } from "./SqlParser";
import { WildIgnoreTableReplicationContext } from "./SqlParser";
import { RewriteDbReplicationContext } from "./SqlParser";
import { TablePairContext } from "./SqlParser";
import { ThreadTypeContext } from "./SqlParser";
import { GtidsUntilOptionContext } from "./SqlParser";
import { MasterLogUntilOptionContext } from "./SqlParser";
import { RelayLogUntilOptionContext } from "./SqlParser";
import { SqlGapsUntilOptionContext } from "./SqlParser";
import { UserConnectionOptionContext } from "./SqlParser";
import { PasswordConnectionOptionContext } from "./SqlParser";
import { DefaultAuthConnectionOptionContext } from "./SqlParser";
import { PluginDirConnectionOptionContext } from "./SqlParser";
import { GtuidSetContext } from "./SqlParser";
import { XaStartTransactionContext } from "./SqlParser";
import { XaEndTransactionContext } from "./SqlParser";
import { XaPrepareStatementContext } from "./SqlParser";
import { XaCommitWorkContext } from "./SqlParser";
import { XaRollbackWorkContext } from "./SqlParser";
import { XaRecoverWorkContext } from "./SqlParser";
import { PrepareStatementContext } from "./SqlParser";
import { ExecuteStatementContext } from "./SqlParser";
import { DeallocatePrepareContext } from "./SqlParser";
import { RoutineBodyContext } from "./SqlParser";
import { BlockStatementContext } from "./SqlParser";
import { CaseStatementContext } from "./SqlParser";
import { IfStatementContext } from "./SqlParser";
import { IterateStatementContext } from "./SqlParser";
import { LeaveStatementContext } from "./SqlParser";
import { LoopStatementContext } from "./SqlParser";
import { RepeatStatementContext } from "./SqlParser";
import { ReturnStatementContext } from "./SqlParser";
import { WhileStatementContext } from "./SqlParser";
import { CloseCursorContext } from "./SqlParser";
import { FetchCursorContext } from "./SqlParser";
import { OpenCursorContext } from "./SqlParser";
import { DeclareVariableContext } from "./SqlParser";
import { DeclareConditionContext } from "./SqlParser";
import { DeclareCursorContext } from "./SqlParser";
import { DeclareHandlerContext } from "./SqlParser";
import { HandlerConditionCodeContext } from "./SqlParser";
import { HandlerConditionStateContext } from "./SqlParser";
import { HandlerConditionNameContext } from "./SqlParser";
import { HandlerConditionWarningContext } from "./SqlParser";
import { HandlerConditionNotfoundContext } from "./SqlParser";
import { HandlerConditionExceptionContext } from "./SqlParser";
import { ProcedureSqlStatementContext } from "./SqlParser";
import { CaseAlternativeContext } from "./SqlParser";
import { ElifAlternativeContext } from "./SqlParser";
import { AlterUserMysqlV56Context } from "./SqlParser";
import { AlterUserMysqlV57Context } from "./SqlParser";
import { CreateUserMysqlV56Context } from "./SqlParser";
import { CreateUserMysqlV57Context } from "./SqlParser";
import { DropUserContext } from "./SqlParser";
import { GrantStatementContext } from "./SqlParser";
import { GrantProxyContext } from "./SqlParser";
import { RenameUserContext } from "./SqlParser";
import { DetailRevokeContext } from "./SqlParser";
import { ShortRevokeContext } from "./SqlParser";
import { RevokeProxyContext } from "./SqlParser";
import { SetPasswordStatementContext } from "./SqlParser";
import { UserSpecificationContext } from "./SqlParser";
import { PasswordAuthOptionContext } from "./SqlParser";
import { StringAuthOptionContext } from "./SqlParser";
import { HashAuthOptionContext } from "./SqlParser";
import { SimpleAuthOptionContext } from "./SqlParser";
import { TlsOptionContext } from "./SqlParser";
import { UserResourceOptionContext } from "./SqlParser";
import { UserPasswordOptionContext } from "./SqlParser";
import { UserLockOptionContext } from "./SqlParser";
import { PrivelegeClauseContext } from "./SqlParser";
import { PrivilegeContext } from "./SqlParser";
import { CurrentSchemaPriviLevelContext } from "./SqlParser";
import { GlobalPrivLevelContext } from "./SqlParser";
import { DefiniteSchemaPrivLevelContext } from "./SqlParser";
import { DefiniteFullTablePrivLevelContext } from "./SqlParser";
import { DefiniteFullTablePrivLevel2Context } from "./SqlParser";
import { DefiniteTablePrivLevelContext } from "./SqlParser";
import { RenameUserClauseContext } from "./SqlParser";
import { AnalyzeTableContext } from "./SqlParser";
import { CheckTableContext } from "./SqlParser";
import { ChecksumTableContext } from "./SqlParser";
import { OptimizeTableContext } from "./SqlParser";
import { RepairTableContext } from "./SqlParser";
import { CheckTableOptionContext } from "./SqlParser";
import { CreateUdfunctionContext } from "./SqlParser";
import { InstallPluginContext } from "./SqlParser";
import { UninstallPluginContext } from "./SqlParser";
import { SetVariableContext } from "./SqlParser";
import { SetCharsetContext } from "./SqlParser";
import { SetNamesContext } from "./SqlParser";
import { SetPasswordContext } from "./SqlParser";
import { SetTransactionContext } from "./SqlParser";
import { SetAutocommitContext } from "./SqlParser";
import { SetNewValueInsideTriggerContext } from "./SqlParser";
import { ShowMasterLogsContext } from "./SqlParser";
import { ShowLogEventsContext } from "./SqlParser";
import { ShowObjectFilterContext } from "./SqlParser";
import { ShowColumnsContext } from "./SqlParser";
import { ShowCreateDbContext } from "./SqlParser";
import { ShowCreateFullIdObjectContext } from "./SqlParser";
import { ShowCreateUserContext } from "./SqlParser";
import { ShowEngineContext } from "./SqlParser";
import { ShowGlobalInfoContext } from "./SqlParser";
import { ShowErrorsContext } from "./SqlParser";
import { ShowCountErrorsContext } from "./SqlParser";
import { ShowSchemaFilterContext } from "./SqlParser";
import { ShowRoutineContext } from "./SqlParser";
import { ShowGrantsContext } from "./SqlParser";
import { ShowIndexesContext } from "./SqlParser";
import { ShowOpenTablesContext } from "./SqlParser";
import { ShowProfileContext } from "./SqlParser";
import { ShowSlaveStatusContext } from "./SqlParser";
import { VariableClauseContext } from "./SqlParser";
import { ShowCommonEntityContext } from "./SqlParser";
import { ShowFilterContext } from "./SqlParser";
import { ShowGlobalInfoClauseContext } from "./SqlParser";
import { ShowSchemaEntityContext } from "./SqlParser";
import { ShowProfileTypeContext } from "./SqlParser";
import { BinlogStatementContext } from "./SqlParser";
import { CacheIndexStatementContext } from "./SqlParser";
import { FlushStatementContext } from "./SqlParser";
import { KillStatementContext } from "./SqlParser";
import { LoadIndexIntoCacheContext } from "./SqlParser";
import { ResetStatementContext } from "./SqlParser";
import { ShutdownStatementContext } from "./SqlParser";
import { TableIndexesContext } from "./SqlParser";
import { SimpleFlushOptionContext } from "./SqlParser";
import { ChannelFlushOptionContext } from "./SqlParser";
import { TableFlushOptionContext } from "./SqlParser";
import { FlushTableOptionContext } from "./SqlParser";
import { LoadedTableIndexesContext } from "./SqlParser";
import { SimpleDescribeStatementContext } from "./SqlParser";
import { FullDescribeStatementContext } from "./SqlParser";
import { HelpStatementContext } from "./SqlParser";
import { UseStatementContext } from "./SqlParser";
import { SignalStatementContext } from "./SqlParser";
import { ResignalStatementContext } from "./SqlParser";
import { SignalConditionInformationContext } from "./SqlParser";
import { DiagnosticsStatementContext } from "./SqlParser";
import { DiagnosticsConditionInformationNameContext } from "./SqlParser";
import { DescribeStatementsContext } from "./SqlParser";
import { DescribeConnectionContext } from "./SqlParser";
import { FullIdContext } from "./SqlParser";
import { TableNameContext } from "./SqlParser";
import { FullColumnNameContext } from "./SqlParser";
import { IndexColumnNameContext } from "./SqlParser";
import { UserNameContext } from "./SqlParser";
import { MysqlVariableContext } from "./SqlParser";
import { CharsetNameContext } from "./SqlParser";
import { CollationNameContext } from "./SqlParser";
import { EngineNameContext } from "./SqlParser";
import { UuidSetContext } from "./SqlParser";
import { XidContext } from "./SqlParser";
import { XuidStringIdContext } from "./SqlParser";
import { AuthPluginContext } from "./SqlParser";
import { UidContext } from "./SqlParser";
import { SimpleIdContext } from "./SqlParser";
import { DottedIdContext } from "./SqlParser";
import { DecimalLiteralContext } from "./SqlParser";
import { FileSizeLiteralContext } from "./SqlParser";
import { StringLiteralContext } from "./SqlParser";
import { BooleanLiteralContext } from "./SqlParser";
import { HexadecimalLiteralContext } from "./SqlParser";
import { NullNotnullContext } from "./SqlParser";
import { ConstantContext } from "./SqlParser";
import { StringDataTypeContext } from "./SqlParser";
import { NationalStringDataTypeContext } from "./SqlParser";
import { NationalVaryingStringDataTypeContext } from "./SqlParser";
import { DimensionDataTypeContext } from "./SqlParser";
import { SimpleDataTypeContext } from "./SqlParser";
import { CollectionDataTypeContext } from "./SqlParser";
import { SpatialDataTypeContext } from "./SqlParser";
import { LongVarcharDataTypeContext } from "./SqlParser";
import { LongVarbinaryDataTypeContext } from "./SqlParser";
import { CollectionOptionsContext } from "./SqlParser";
import { ConvertedDataTypeContext } from "./SqlParser";
import { LengthOneDimensionContext } from "./SqlParser";
import { LengthTwoDimensionContext } from "./SqlParser";
import { LengthTwoOptionalDimensionContext } from "./SqlParser";
import { UidListContext } from "./SqlParser";
import { TablesContext } from "./SqlParser";
import { IndexColumnNamesContext } from "./SqlParser";
import { ExpressionsContext } from "./SqlParser";
import { ExpressionsWithDefaultsContext } from "./SqlParser";
import { ConstantsContext } from "./SqlParser";
import { SimpleStringsContext } from "./SqlParser";
import { UserVariablesContext } from "./SqlParser";
import { DefaultValueContext } from "./SqlParser";
import { CurrentTimestampContext } from "./SqlParser";
import { ExpressionOrDefaultContext } from "./SqlParser";
import { IfExistsContext } from "./SqlParser";
import { IfNotExistsContext } from "./SqlParser";
import { SpecificFunctionCallContext } from "./SqlParser";
import { AggregateFunctionCallContext } from "./SqlParser";
import { ScalarFunctionCallContext } from "./SqlParser";
import { UdfFunctionCallContext } from "./SqlParser";
import { PasswordFunctionCallContext } from "./SqlParser";
import { SimpleFunctionCallContext } from "./SqlParser";
import { DataTypeFunctionCallContext } from "./SqlParser";
import { ValuesFunctionCallContext } from "./SqlParser";
import { CaseFunctionCallContext } from "./SqlParser";
import { CharFunctionCallContext } from "./SqlParser";
import { PositionFunctionCallContext } from "./SqlParser";
import { SubstrFunctionCallContext } from "./SqlParser";
import { TrimFunctionCallContext } from "./SqlParser";
import { WeightFunctionCallContext } from "./SqlParser";
import { ExtractFunctionCallContext } from "./SqlParser";
import { GetFormatFunctionCallContext } from "./SqlParser";
import { CaseFuncAlternativeContext } from "./SqlParser";
import { LevelWeightListContext } from "./SqlParser";
import { LevelWeightRangeContext } from "./SqlParser";
import { LevelInWeightListElementContext } from "./SqlParser";
import { AggregateWindowedFunctionContext } from "./SqlParser";
import { ScalarFunctionNameContext } from "./SqlParser";
import { PasswordFunctionClauseContext } from "./SqlParser";
import { FunctionArgsContext } from "./SqlParser";
import { FunctionArgContext } from "./SqlParser";
import { IsExpressionContext } from "./SqlParser";
import { NotExpressionContext } from "./SqlParser";
import { LogicalExpressionContext } from "./SqlParser";
import { PredicateExpressionContext } from "./SqlParser";
import { SoundsLikePredicateContext } from "./SqlParser";
import { ExpressionAtomPredicateContext } from "./SqlParser";
import { InPredicateContext } from "./SqlParser";
import { SubqueryComparasionPredicateContext } from "./SqlParser";
import { BetweenPredicateContext } from "./SqlParser";
import { BinaryComparasionPredicateContext } from "./SqlParser";
import { IsNullPredicateContext } from "./SqlParser";
import { LikePredicateContext } from "./SqlParser";
import { RegexpPredicateContext } from "./SqlParser";
import { UnaryExpressionAtomContext } from "./SqlParser";
import { CollateExpressionAtomContext } from "./SqlParser";
import { SubqueryExpessionAtomContext } from "./SqlParser";
import { MysqlVariableExpressionAtomContext } from "./SqlParser";
import { NestedExpressionAtomContext } from "./SqlParser";
import { NestedRowExpressionAtomContext } from "./SqlParser";
import { MathExpressionAtomContext } from "./SqlParser";
import { IntervalExpressionAtomContext } from "./SqlParser";
import { ExistsExpessionAtomContext } from "./SqlParser";
import { ConstantExpressionAtomContext } from "./SqlParser";
import { FunctionCallExpressionAtomContext } from "./SqlParser";
import { BinaryExpressionAtomContext } from "./SqlParser";
import { FullColumnNameExpressionAtomContext } from "./SqlParser";
import { BitExpressionAtomContext } from "./SqlParser";
import { UnaryOperatorContext } from "./SqlParser";
import { ComparisonOperatorContext } from "./SqlParser";
import { LogicalOperatorContext } from "./SqlParser";
import { BitOperatorContext } from "./SqlParser";
import { MathOperatorContext } from "./SqlParser";
import { CharsetNameBaseContext } from "./SqlParser";
import { TransactionLevelBaseContext } from "./SqlParser";
import { PrivilegesBaseContext } from "./SqlParser";
import { IntervalTypeBaseContext } from "./SqlParser";
import { DataTypeBaseContext } from "./SqlParser";
import { KeywordsCanBeIdContext } from "./SqlParser";
import { FunctionNameBaseContext } from "./SqlParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class SqlParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `SqlParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.sqlStatements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlStatements?: (ctx: SqlStatementsContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.sqlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlStatement?: (ctx: SqlStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.emptyStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyStatement?: (ctx: EmptyStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.ddlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDdlStatement?: (ctx: DdlStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.dmlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDmlStatement?: (ctx: DmlStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.transactionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransactionStatement?: (ctx: TransactionStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.replicationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplicationStatement?: (ctx: ReplicationStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.preparedStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreparedStatement?: (ctx: PreparedStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.compoundStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompoundStatement?: (ctx: CompoundStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.administrationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdministrationStatement?: (ctx: AdministrationStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.utilityStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUtilityStatement?: (ctx: UtilityStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.createDatabase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateDatabase?: (ctx: CreateDatabaseContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.createEvent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateEvent?: (ctx: CreateEventContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.createIndex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateIndex?: (ctx: CreateIndexContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.createLogfileGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateLogfileGroup?: (ctx: CreateLogfileGroupContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.createProcedure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateProcedure?: (ctx: CreateProcedureContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.createFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateFunction?: (ctx: CreateFunctionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.createServer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateServer?: (ctx: CreateServerContext) => Result;
	/**
	 * Visit a parse tree produced by the `copyCreateTable`
	 * labeled alternative in `SqlParser.createTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCopyCreateTable?: (ctx: CopyCreateTableContext) => Result;
	/**
	 * Visit a parse tree produced by the `queryCreateTable`
	 * labeled alternative in `SqlParser.createTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryCreateTable?: (ctx: QueryCreateTableContext) => Result;
	/**
	 * Visit a parse tree produced by the `columnCreateTable`
	 * labeled alternative in `SqlParser.createTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnCreateTable?: (ctx: ColumnCreateTableContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.createTablespaceInnodb`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTablespaceInnodb?: (ctx: CreateTablespaceInnodbContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.createTablespaceNdb`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTablespaceNdb?: (ctx: CreateTablespaceNdbContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.createTrigger`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTrigger?: (ctx: CreateTriggerContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.createView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateView?: (ctx: CreateViewContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.createDatabaseOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateDatabaseOption?: (ctx: CreateDatabaseOptionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.ownerStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOwnerStatement?: (ctx: OwnerStatementContext) => Result;
	/**
	 * Visit a parse tree produced by the `preciseSchedule`
	 * labeled alternative in `SqlParser.scheduleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreciseSchedule?: (ctx: PreciseScheduleContext) => Result;
	/**
	 * Visit a parse tree produced by the `intervalSchedule`
	 * labeled alternative in `SqlParser.scheduleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalSchedule?: (ctx: IntervalScheduleContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.timestampValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimestampValue?: (ctx: TimestampValueContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.intervalExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalExpr?: (ctx: IntervalExprContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.intervalType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalType?: (ctx: IntervalTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.enableType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnableType?: (ctx: EnableTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.indexType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexType?: (ctx: IndexTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.indexOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexOption?: (ctx: IndexOptionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.procedureParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedureParameter?: (ctx: ProcedureParameterContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.functionParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionParameter?: (ctx: FunctionParameterContext) => Result;
	/**
	 * Visit a parse tree produced by the `routineComment`
	 * labeled alternative in `SqlParser.routineOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoutineComment?: (ctx: RoutineCommentContext) => Result;
	/**
	 * Visit a parse tree produced by the `routineLanguage`
	 * labeled alternative in `SqlParser.routineOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoutineLanguage?: (ctx: RoutineLanguageContext) => Result;
	/**
	 * Visit a parse tree produced by the `routineBehavior`
	 * labeled alternative in `SqlParser.routineOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoutineBehavior?: (ctx: RoutineBehaviorContext) => Result;
	/**
	 * Visit a parse tree produced by the `routineData`
	 * labeled alternative in `SqlParser.routineOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoutineData?: (ctx: RoutineDataContext) => Result;
	/**
	 * Visit a parse tree produced by the `routineSecurity`
	 * labeled alternative in `SqlParser.routineOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoutineSecurity?: (ctx: RoutineSecurityContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.serverOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitServerOption?: (ctx: ServerOptionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.createDefinitions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateDefinitions?: (ctx: CreateDefinitionsContext) => Result;
	/**
	 * Visit a parse tree produced by the `columnDeclaration`
	 * labeled alternative in `SqlParser.createDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnDeclaration?: (ctx: ColumnDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by the `constraintDeclaration`
	 * labeled alternative in `SqlParser.createDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraintDeclaration?: (ctx: ConstraintDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by the `indexDeclaration`
	 * labeled alternative in `SqlParser.createDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexDeclaration?: (ctx: IndexDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.columnDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnDefinition?: (ctx: ColumnDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by the `nullColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullColumnConstraint?: (ctx: NullColumnConstraintContext) => Result;
	/**
	 * Visit a parse tree produced by the `defaultColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultColumnConstraint?: (ctx: DefaultColumnConstraintContext) => Result;
	/**
	 * Visit a parse tree produced by the `autoIncrementColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAutoIncrementColumnConstraint?: (ctx: AutoIncrementColumnConstraintContext) => Result;
	/**
	 * Visit a parse tree produced by the `primaryKeyColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryKeyColumnConstraint?: (ctx: PrimaryKeyColumnConstraintContext) => Result;
	/**
	 * Visit a parse tree produced by the `uniqueKeyColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUniqueKeyColumnConstraint?: (ctx: UniqueKeyColumnConstraintContext) => Result;
	/**
	 * Visit a parse tree produced by the `commentColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentColumnConstraint?: (ctx: CommentColumnConstraintContext) => Result;
	/**
	 * Visit a parse tree produced by the `formatColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormatColumnConstraint?: (ctx: FormatColumnConstraintContext) => Result;
	/**
	 * Visit a parse tree produced by the `storageColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStorageColumnConstraint?: (ctx: StorageColumnConstraintContext) => Result;
	/**
	 * Visit a parse tree produced by the `referenceColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReferenceColumnConstraint?: (ctx: ReferenceColumnConstraintContext) => Result;
	/**
	 * Visit a parse tree produced by the `collateColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollateColumnConstraint?: (ctx: CollateColumnConstraintContext) => Result;
	/**
	 * Visit a parse tree produced by the `generatedColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeneratedColumnConstraint?: (ctx: GeneratedColumnConstraintContext) => Result;
	/**
	 * Visit a parse tree produced by the `serialDefaultColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSerialDefaultColumnConstraint?: (ctx: SerialDefaultColumnConstraintContext) => Result;
	/**
	 * Visit a parse tree produced by the `checkColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCheckColumnConstraint?: (ctx: CheckColumnConstraintContext) => Result;
	/**
	 * Visit a parse tree produced by the `primaryKeyTableConstraint`
	 * labeled alternative in `SqlParser.tableConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryKeyTableConstraint?: (ctx: PrimaryKeyTableConstraintContext) => Result;
	/**
	 * Visit a parse tree produced by the `uniqueKeyTableConstraint`
	 * labeled alternative in `SqlParser.tableConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUniqueKeyTableConstraint?: (ctx: UniqueKeyTableConstraintContext) => Result;
	/**
	 * Visit a parse tree produced by the `foreignKeyTableConstraint`
	 * labeled alternative in `SqlParser.tableConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForeignKeyTableConstraint?: (ctx: ForeignKeyTableConstraintContext) => Result;
	/**
	 * Visit a parse tree produced by the `checkTableConstraint`
	 * labeled alternative in `SqlParser.tableConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCheckTableConstraint?: (ctx: CheckTableConstraintContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.referenceDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReferenceDefinition?: (ctx: ReferenceDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.referenceAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReferenceAction?: (ctx: ReferenceActionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.referenceControlType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReferenceControlType?: (ctx: ReferenceControlTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `simpleIndexDeclaration`
	 * labeled alternative in `SqlParser.indexColumnDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleIndexDeclaration?: (ctx: SimpleIndexDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by the `specialIndexDeclaration`
	 * labeled alternative in `SqlParser.indexColumnDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecialIndexDeclaration?: (ctx: SpecialIndexDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableOptionEngine`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOptionEngine?: (ctx: TableOptionEngineContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableOptionAutoIncrement`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOptionAutoIncrement?: (ctx: TableOptionAutoIncrementContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableOptionAverage`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOptionAverage?: (ctx: TableOptionAverageContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableOptionCharset`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOptionCharset?: (ctx: TableOptionCharsetContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableOptionChecksum`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOptionChecksum?: (ctx: TableOptionChecksumContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableOptionCollate`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOptionCollate?: (ctx: TableOptionCollateContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableOptionComment`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOptionComment?: (ctx: TableOptionCommentContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableOptionCompression`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOptionCompression?: (ctx: TableOptionCompressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableOptionConnection`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOptionConnection?: (ctx: TableOptionConnectionContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableOptionDataDirectory`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOptionDataDirectory?: (ctx: TableOptionDataDirectoryContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableOptionDelay`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOptionDelay?: (ctx: TableOptionDelayContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableOptionEncryption`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOptionEncryption?: (ctx: TableOptionEncryptionContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableOptionIndexDirectory`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOptionIndexDirectory?: (ctx: TableOptionIndexDirectoryContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableOptionInsertMethod`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOptionInsertMethod?: (ctx: TableOptionInsertMethodContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableOptionKeyBlockSize`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOptionKeyBlockSize?: (ctx: TableOptionKeyBlockSizeContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableOptionMaxRows`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOptionMaxRows?: (ctx: TableOptionMaxRowsContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableOptionMinRows`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOptionMinRows?: (ctx: TableOptionMinRowsContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableOptionPackKeys`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOptionPackKeys?: (ctx: TableOptionPackKeysContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableOptionPassword`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOptionPassword?: (ctx: TableOptionPasswordContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableOptionRowFormat`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOptionRowFormat?: (ctx: TableOptionRowFormatContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableOptionRecalculation`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOptionRecalculation?: (ctx: TableOptionRecalculationContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableOptionPersistent`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOptionPersistent?: (ctx: TableOptionPersistentContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableOptionSamplePage`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOptionSamplePage?: (ctx: TableOptionSamplePageContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableOptionTablespace`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOptionTablespace?: (ctx: TableOptionTablespaceContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableOptionUnion`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOptionUnion?: (ctx: TableOptionUnionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.tablespaceStorage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablespaceStorage?: (ctx: TablespaceStorageContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.partitionDefinitions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionDefinitions?: (ctx: PartitionDefinitionsContext) => Result;
	/**
	 * Visit a parse tree produced by the `partitionFunctionHash`
	 * labeled alternative in `SqlParser.partitionFunctionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionFunctionHash?: (ctx: PartitionFunctionHashContext) => Result;
	/**
	 * Visit a parse tree produced by the `partitionFunctionKey`
	 * labeled alternative in `SqlParser.partitionFunctionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionFunctionKey?: (ctx: PartitionFunctionKeyContext) => Result;
	/**
	 * Visit a parse tree produced by the `partitionFunctionRange`
	 * labeled alternative in `SqlParser.partitionFunctionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionFunctionRange?: (ctx: PartitionFunctionRangeContext) => Result;
	/**
	 * Visit a parse tree produced by the `partitionFunctionList`
	 * labeled alternative in `SqlParser.partitionFunctionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionFunctionList?: (ctx: PartitionFunctionListContext) => Result;
	/**
	 * Visit a parse tree produced by the `subPartitionFunctionHash`
	 * labeled alternative in `SqlParser.subpartitionFunctionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubPartitionFunctionHash?: (ctx: SubPartitionFunctionHashContext) => Result;
	/**
	 * Visit a parse tree produced by the `subPartitionFunctionKey`
	 * labeled alternative in `SqlParser.subpartitionFunctionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubPartitionFunctionKey?: (ctx: SubPartitionFunctionKeyContext) => Result;
	/**
	 * Visit a parse tree produced by the `partitionComparision`
	 * labeled alternative in `SqlParser.partitionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionComparision?: (ctx: PartitionComparisionContext) => Result;
	/**
	 * Visit a parse tree produced by the `partitionListAtom`
	 * labeled alternative in `SqlParser.partitionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionListAtom?: (ctx: PartitionListAtomContext) => Result;
	/**
	 * Visit a parse tree produced by the `partitionListVector`
	 * labeled alternative in `SqlParser.partitionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionListVector?: (ctx: PartitionListVectorContext) => Result;
	/**
	 * Visit a parse tree produced by the `partitionSimple`
	 * labeled alternative in `SqlParser.partitionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionSimple?: (ctx: PartitionSimpleContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.partitionDefinerAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionDefinerAtom?: (ctx: PartitionDefinerAtomContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.partitionDefinerVector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionDefinerVector?: (ctx: PartitionDefinerVectorContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.subpartitionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubpartitionDefinition?: (ctx: SubpartitionDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by the `partitionOptionEngine`
	 * labeled alternative in `SqlParser.partitionOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionOptionEngine?: (ctx: PartitionOptionEngineContext) => Result;
	/**
	 * Visit a parse tree produced by the `partitionOptionComment`
	 * labeled alternative in `SqlParser.partitionOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionOptionComment?: (ctx: PartitionOptionCommentContext) => Result;
	/**
	 * Visit a parse tree produced by the `partitionOptionDataDirectory`
	 * labeled alternative in `SqlParser.partitionOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionOptionDataDirectory?: (ctx: PartitionOptionDataDirectoryContext) => Result;
	/**
	 * Visit a parse tree produced by the `partitionOptionIndexDirectory`
	 * labeled alternative in `SqlParser.partitionOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionOptionIndexDirectory?: (ctx: PartitionOptionIndexDirectoryContext) => Result;
	/**
	 * Visit a parse tree produced by the `partitionOptionMaxRows`
	 * labeled alternative in `SqlParser.partitionOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionOptionMaxRows?: (ctx: PartitionOptionMaxRowsContext) => Result;
	/**
	 * Visit a parse tree produced by the `partitionOptionMinRows`
	 * labeled alternative in `SqlParser.partitionOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionOptionMinRows?: (ctx: PartitionOptionMinRowsContext) => Result;
	/**
	 * Visit a parse tree produced by the `partitionOptionTablespace`
	 * labeled alternative in `SqlParser.partitionOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionOptionTablespace?: (ctx: PartitionOptionTablespaceContext) => Result;
	/**
	 * Visit a parse tree produced by the `partitionOptionNodeGroup`
	 * labeled alternative in `SqlParser.partitionOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionOptionNodeGroup?: (ctx: PartitionOptionNodeGroupContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterSimpleDatabase`
	 * labeled alternative in `SqlParser.alterDatabase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterSimpleDatabase?: (ctx: AlterSimpleDatabaseContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterUpgradeName`
	 * labeled alternative in `SqlParser.alterDatabase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterUpgradeName?: (ctx: AlterUpgradeNameContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.alterEvent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterEvent?: (ctx: AlterEventContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.alterFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterFunction?: (ctx: AlterFunctionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.alterInstance`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterInstance?: (ctx: AlterInstanceContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.alterLogfileGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterLogfileGroup?: (ctx: AlterLogfileGroupContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.alterProcedure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterProcedure?: (ctx: AlterProcedureContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.alterServer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterServer?: (ctx: AlterServerContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.alterTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTable?: (ctx: AlterTableContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.alterTablespace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTablespace?: (ctx: AlterTablespaceContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.alterView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterView?: (ctx: AlterViewContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByTableOption`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByTableOption?: (ctx: AlterByTableOptionContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByAddColumn`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByAddColumn?: (ctx: AlterByAddColumnContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByAddColumns`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByAddColumns?: (ctx: AlterByAddColumnsContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByAddIndex`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByAddIndex?: (ctx: AlterByAddIndexContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByAddPrimaryKey`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByAddPrimaryKey?: (ctx: AlterByAddPrimaryKeyContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByAddUniqueKey`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByAddUniqueKey?: (ctx: AlterByAddUniqueKeyContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByAddSpecialIndex`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByAddSpecialIndex?: (ctx: AlterByAddSpecialIndexContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByAddForeignKey`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByAddForeignKey?: (ctx: AlterByAddForeignKeyContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByAddCheckTableConstraint`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByAddCheckTableConstraint?: (ctx: AlterByAddCheckTableConstraintContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterBySetAlgorithm`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterBySetAlgorithm?: (ctx: AlterBySetAlgorithmContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByChangeDefault`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByChangeDefault?: (ctx: AlterByChangeDefaultContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByChangeColumn`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByChangeColumn?: (ctx: AlterByChangeColumnContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByRenameColumn`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByRenameColumn?: (ctx: AlterByRenameColumnContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByLock`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByLock?: (ctx: AlterByLockContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByModifyColumn`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByModifyColumn?: (ctx: AlterByModifyColumnContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByDropColumn`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByDropColumn?: (ctx: AlterByDropColumnContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByDropPrimaryKey`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByDropPrimaryKey?: (ctx: AlterByDropPrimaryKeyContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByRenameIndex`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByRenameIndex?: (ctx: AlterByRenameIndexContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByAlterIndexVisibility`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByAlterIndexVisibility?: (ctx: AlterByAlterIndexVisibilityContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByDropIndex`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByDropIndex?: (ctx: AlterByDropIndexContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByDropForeignKey`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByDropForeignKey?: (ctx: AlterByDropForeignKeyContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByDisableKeys`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByDisableKeys?: (ctx: AlterByDisableKeysContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByEnableKeys`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByEnableKeys?: (ctx: AlterByEnableKeysContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByRename`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByRename?: (ctx: AlterByRenameContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByOrder`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByOrder?: (ctx: AlterByOrderContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByConvertCharset`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByConvertCharset?: (ctx: AlterByConvertCharsetContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByDefaultCharset`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByDefaultCharset?: (ctx: AlterByDefaultCharsetContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByDiscardTablespace`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByDiscardTablespace?: (ctx: AlterByDiscardTablespaceContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByImportTablespace`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByImportTablespace?: (ctx: AlterByImportTablespaceContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByForce`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByForce?: (ctx: AlterByForceContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByValidate`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByValidate?: (ctx: AlterByValidateContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByAddPartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByAddPartition?: (ctx: AlterByAddPartitionContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByDropPartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByDropPartition?: (ctx: AlterByDropPartitionContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByDiscardPartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByDiscardPartition?: (ctx: AlterByDiscardPartitionContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByImportPartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByImportPartition?: (ctx: AlterByImportPartitionContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByTruncatePartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByTruncatePartition?: (ctx: AlterByTruncatePartitionContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByCoalescePartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByCoalescePartition?: (ctx: AlterByCoalescePartitionContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByReorganizePartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByReorganizePartition?: (ctx: AlterByReorganizePartitionContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByExchangePartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByExchangePartition?: (ctx: AlterByExchangePartitionContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByAnalyzePartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByAnalyzePartition?: (ctx: AlterByAnalyzePartitionContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByCheckPartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByCheckPartition?: (ctx: AlterByCheckPartitionContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByOptimizePartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByOptimizePartition?: (ctx: AlterByOptimizePartitionContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByRebuildPartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByRebuildPartition?: (ctx: AlterByRebuildPartitionContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByRepairPartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByRepairPartition?: (ctx: AlterByRepairPartitionContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByRemovePartitioning`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByRemovePartitioning?: (ctx: AlterByRemovePartitioningContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterByUpgradePartitioning`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterByUpgradePartitioning?: (ctx: AlterByUpgradePartitioningContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.dropDatabase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropDatabase?: (ctx: DropDatabaseContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.dropEvent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropEvent?: (ctx: DropEventContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.dropIndex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropIndex?: (ctx: DropIndexContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.dropLogfileGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropLogfileGroup?: (ctx: DropLogfileGroupContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.dropProcedure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropProcedure?: (ctx: DropProcedureContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.dropFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropFunction?: (ctx: DropFunctionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.dropServer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropServer?: (ctx: DropServerContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.dropTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropTable?: (ctx: DropTableContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.dropTablespace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropTablespace?: (ctx: DropTablespaceContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.dropTrigger`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropTrigger?: (ctx: DropTriggerContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.dropView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropView?: (ctx: DropViewContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.renameTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameTable?: (ctx: RenameTableContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.renameTableClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameTableClause?: (ctx: RenameTableClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.truncateTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTruncateTable?: (ctx: TruncateTableContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.callStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallStatement?: (ctx: CallStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.deleteStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeleteStatement?: (ctx: DeleteStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.doStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoStatement?: (ctx: DoStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.handlerStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHandlerStatement?: (ctx: HandlerStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.insertStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertStatement?: (ctx: InsertStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.loadDataStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoadDataStatement?: (ctx: LoadDataStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.loadXmlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoadXmlStatement?: (ctx: LoadXmlStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.replaceStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplaceStatement?: (ctx: ReplaceStatementContext) => Result;
	/**
	 * Visit a parse tree produced by the `simpleSelect`
	 * labeled alternative in `SqlParser.selectStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleSelect?: (ctx: SimpleSelectContext) => Result;
	/**
	 * Visit a parse tree produced by the `parenthesisSelect`
	 * labeled alternative in `SqlParser.selectStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesisSelect?: (ctx: ParenthesisSelectContext) => Result;
	/**
	 * Visit a parse tree produced by the `unionSelect`
	 * labeled alternative in `SqlParser.selectStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionSelect?: (ctx: UnionSelectContext) => Result;
	/**
	 * Visit a parse tree produced by the `unionParenthesisSelect`
	 * labeled alternative in `SqlParser.selectStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionParenthesisSelect?: (ctx: UnionParenthesisSelectContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.updateStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdateStatement?: (ctx: UpdateStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.insertStatementValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertStatementValue?: (ctx: InsertStatementValueContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.updatedElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdatedElement?: (ctx: UpdatedElementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.assignmentField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentField?: (ctx: AssignmentFieldContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.lockClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLockClause?: (ctx: LockClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.singleDeleteStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleDeleteStatement?: (ctx: SingleDeleteStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.multipleDeleteStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultipleDeleteStatement?: (ctx: MultipleDeleteStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.handlerOpenStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHandlerOpenStatement?: (ctx: HandlerOpenStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.handlerReadIndexStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHandlerReadIndexStatement?: (ctx: HandlerReadIndexStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.handlerReadStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHandlerReadStatement?: (ctx: HandlerReadStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.handlerCloseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHandlerCloseStatement?: (ctx: HandlerCloseStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.singleUpdateStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleUpdateStatement?: (ctx: SingleUpdateStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.multipleUpdateStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultipleUpdateStatement?: (ctx: MultipleUpdateStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.orderByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderByClause?: (ctx: OrderByClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.orderByExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderByExpression?: (ctx: OrderByExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.tableSources`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableSources?: (ctx: TableSourcesContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableSourceBase`
	 * labeled alternative in `SqlParser.tableSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableSourceBase?: (ctx: TableSourceBaseContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableSourceNested`
	 * labeled alternative in `SqlParser.tableSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableSourceNested?: (ctx: TableSourceNestedContext) => Result;
	/**
	 * Visit a parse tree produced by the `atomTableItem`
	 * labeled alternative in `SqlParser.tableSourceItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomTableItem?: (ctx: AtomTableItemContext) => Result;
	/**
	 * Visit a parse tree produced by the `subqueryTableItem`
	 * labeled alternative in `SqlParser.tableSourceItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubqueryTableItem?: (ctx: SubqueryTableItemContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableSourcesItem`
	 * labeled alternative in `SqlParser.tableSourceItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableSourcesItem?: (ctx: TableSourcesItemContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.indexHint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexHint?: (ctx: IndexHintContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.indexHintType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexHintType?: (ctx: IndexHintTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `innerJoin`
	 * labeled alternative in `SqlParser.joinPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInnerJoin?: (ctx: InnerJoinContext) => Result;
	/**
	 * Visit a parse tree produced by the `straightJoin`
	 * labeled alternative in `SqlParser.joinPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStraightJoin?: (ctx: StraightJoinContext) => Result;
	/**
	 * Visit a parse tree produced by the `outerJoin`
	 * labeled alternative in `SqlParser.joinPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOuterJoin?: (ctx: OuterJoinContext) => Result;
	/**
	 * Visit a parse tree produced by the `naturalJoin`
	 * labeled alternative in `SqlParser.joinPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNaturalJoin?: (ctx: NaturalJoinContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.queryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryExpression?: (ctx: QueryExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.queryExpressionNointo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryExpressionNointo?: (ctx: QueryExpressionNointoContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.querySpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuerySpecification?: (ctx: QuerySpecificationContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.querySpecificationNointo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuerySpecificationNointo?: (ctx: QuerySpecificationNointoContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.unionParenthesis`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionParenthesis?: (ctx: UnionParenthesisContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.unionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionStatement?: (ctx: UnionStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.selectSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectSpec?: (ctx: SelectSpecContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.selectElements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectElements?: (ctx: SelectElementsContext) => Result;
	/**
	 * Visit a parse tree produced by the `selectStarElement`
	 * labeled alternative in `SqlParser.selectElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectStarElement?: (ctx: SelectStarElementContext) => Result;
	/**
	 * Visit a parse tree produced by the `selectColumnElement`
	 * labeled alternative in `SqlParser.selectElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectColumnElement?: (ctx: SelectColumnElementContext) => Result;
	/**
	 * Visit a parse tree produced by the `selectFunctionElement`
	 * labeled alternative in `SqlParser.selectElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectFunctionElement?: (ctx: SelectFunctionElementContext) => Result;
	/**
	 * Visit a parse tree produced by the `selectExpressionElement`
	 * labeled alternative in `SqlParser.selectElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectExpressionElement?: (ctx: SelectExpressionElementContext) => Result;
	/**
	 * Visit a parse tree produced by the `selectIntoVariables`
	 * labeled alternative in `SqlParser.selectIntoExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectIntoVariables?: (ctx: SelectIntoVariablesContext) => Result;
	/**
	 * Visit a parse tree produced by the `selectIntoDumpFile`
	 * labeled alternative in `SqlParser.selectIntoExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectIntoDumpFile?: (ctx: SelectIntoDumpFileContext) => Result;
	/**
	 * Visit a parse tree produced by the `selectIntoTextFile`
	 * labeled alternative in `SqlParser.selectIntoExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectIntoTextFile?: (ctx: SelectIntoTextFileContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.selectFieldsInto`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectFieldsInto?: (ctx: SelectFieldsIntoContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.selectLinesInto`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectLinesInto?: (ctx: SelectLinesIntoContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.fromClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromClause?: (ctx: FromClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.groupByItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupByItem?: (ctx: GroupByItemContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.limitClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLimitClause?: (ctx: LimitClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.limitClauseAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLimitClauseAtom?: (ctx: LimitClauseAtomContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.startTransaction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStartTransaction?: (ctx: StartTransactionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.beginWork`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBeginWork?: (ctx: BeginWorkContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.commitWork`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommitWork?: (ctx: CommitWorkContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.rollbackWork`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollbackWork?: (ctx: RollbackWorkContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.savepointStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSavepointStatement?: (ctx: SavepointStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.rollbackStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollbackStatement?: (ctx: RollbackStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.releaseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReleaseStatement?: (ctx: ReleaseStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.lockTables`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLockTables?: (ctx: LockTablesContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.unlockTables`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnlockTables?: (ctx: UnlockTablesContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.setAutocommitStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetAutocommitStatement?: (ctx: SetAutocommitStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.setTransactionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetTransactionStatement?: (ctx: SetTransactionStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.transactionMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransactionMode?: (ctx: TransactionModeContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.lockTableElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLockTableElement?: (ctx: LockTableElementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.lockAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLockAction?: (ctx: LockActionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.transactionOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransactionOption?: (ctx: TransactionOptionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.transactionLevel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransactionLevel?: (ctx: TransactionLevelContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.changeMaster`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChangeMaster?: (ctx: ChangeMasterContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.changeReplicationFilter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChangeReplicationFilter?: (ctx: ChangeReplicationFilterContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.purgeBinaryLogs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPurgeBinaryLogs?: (ctx: PurgeBinaryLogsContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.resetMaster`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResetMaster?: (ctx: ResetMasterContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.resetSlave`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResetSlave?: (ctx: ResetSlaveContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.startSlave`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStartSlave?: (ctx: StartSlaveContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.stopSlave`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStopSlave?: (ctx: StopSlaveContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.startGroupReplication`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStartGroupReplication?: (ctx: StartGroupReplicationContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.stopGroupReplication`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStopGroupReplication?: (ctx: StopGroupReplicationContext) => Result;
	/**
	 * Visit a parse tree produced by the `masterStringOption`
	 * labeled alternative in `SqlParser.masterOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMasterStringOption?: (ctx: MasterStringOptionContext) => Result;
	/**
	 * Visit a parse tree produced by the `masterDecimalOption`
	 * labeled alternative in `SqlParser.masterOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMasterDecimalOption?: (ctx: MasterDecimalOptionContext) => Result;
	/**
	 * Visit a parse tree produced by the `masterBoolOption`
	 * labeled alternative in `SqlParser.masterOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMasterBoolOption?: (ctx: MasterBoolOptionContext) => Result;
	/**
	 * Visit a parse tree produced by the `masterRealOption`
	 * labeled alternative in `SqlParser.masterOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMasterRealOption?: (ctx: MasterRealOptionContext) => Result;
	/**
	 * Visit a parse tree produced by the `masterUidListOption`
	 * labeled alternative in `SqlParser.masterOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMasterUidListOption?: (ctx: MasterUidListOptionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.stringMasterOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringMasterOption?: (ctx: StringMasterOptionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.decimalMasterOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimalMasterOption?: (ctx: DecimalMasterOptionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.boolMasterOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolMasterOption?: (ctx: BoolMasterOptionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.channelOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChannelOption?: (ctx: ChannelOptionContext) => Result;
	/**
	 * Visit a parse tree produced by the `doDbReplication`
	 * labeled alternative in `SqlParser.replicationFilter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoDbReplication?: (ctx: DoDbReplicationContext) => Result;
	/**
	 * Visit a parse tree produced by the `ignoreDbReplication`
	 * labeled alternative in `SqlParser.replicationFilter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIgnoreDbReplication?: (ctx: IgnoreDbReplicationContext) => Result;
	/**
	 * Visit a parse tree produced by the `doTableReplication`
	 * labeled alternative in `SqlParser.replicationFilter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoTableReplication?: (ctx: DoTableReplicationContext) => Result;
	/**
	 * Visit a parse tree produced by the `ignoreTableReplication`
	 * labeled alternative in `SqlParser.replicationFilter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIgnoreTableReplication?: (ctx: IgnoreTableReplicationContext) => Result;
	/**
	 * Visit a parse tree produced by the `wildDoTableReplication`
	 * labeled alternative in `SqlParser.replicationFilter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWildDoTableReplication?: (ctx: WildDoTableReplicationContext) => Result;
	/**
	 * Visit a parse tree produced by the `wildIgnoreTableReplication`
	 * labeled alternative in `SqlParser.replicationFilter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWildIgnoreTableReplication?: (ctx: WildIgnoreTableReplicationContext) => Result;
	/**
	 * Visit a parse tree produced by the `rewriteDbReplication`
	 * labeled alternative in `SqlParser.replicationFilter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRewriteDbReplication?: (ctx: RewriteDbReplicationContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.tablePair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePair?: (ctx: TablePairContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.threadType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThreadType?: (ctx: ThreadTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `gtidsUntilOption`
	 * labeled alternative in `SqlParser.untilOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGtidsUntilOption?: (ctx: GtidsUntilOptionContext) => Result;
	/**
	 * Visit a parse tree produced by the `masterLogUntilOption`
	 * labeled alternative in `SqlParser.untilOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMasterLogUntilOption?: (ctx: MasterLogUntilOptionContext) => Result;
	/**
	 * Visit a parse tree produced by the `relayLogUntilOption`
	 * labeled alternative in `SqlParser.untilOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelayLogUntilOption?: (ctx: RelayLogUntilOptionContext) => Result;
	/**
	 * Visit a parse tree produced by the `sqlGapsUntilOption`
	 * labeled alternative in `SqlParser.untilOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlGapsUntilOption?: (ctx: SqlGapsUntilOptionContext) => Result;
	/**
	 * Visit a parse tree produced by the `userConnectionOption`
	 * labeled alternative in `SqlParser.connectionOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUserConnectionOption?: (ctx: UserConnectionOptionContext) => Result;
	/**
	 * Visit a parse tree produced by the `passwordConnectionOption`
	 * labeled alternative in `SqlParser.connectionOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPasswordConnectionOption?: (ctx: PasswordConnectionOptionContext) => Result;
	/**
	 * Visit a parse tree produced by the `defaultAuthConnectionOption`
	 * labeled alternative in `SqlParser.connectionOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultAuthConnectionOption?: (ctx: DefaultAuthConnectionOptionContext) => Result;
	/**
	 * Visit a parse tree produced by the `pluginDirConnectionOption`
	 * labeled alternative in `SqlParser.connectionOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPluginDirConnectionOption?: (ctx: PluginDirConnectionOptionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.gtuidSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGtuidSet?: (ctx: GtuidSetContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.xaStartTransaction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXaStartTransaction?: (ctx: XaStartTransactionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.xaEndTransaction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXaEndTransaction?: (ctx: XaEndTransactionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.xaPrepareStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXaPrepareStatement?: (ctx: XaPrepareStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.xaCommitWork`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXaCommitWork?: (ctx: XaCommitWorkContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.xaRollbackWork`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXaRollbackWork?: (ctx: XaRollbackWorkContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.xaRecoverWork`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXaRecoverWork?: (ctx: XaRecoverWorkContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.prepareStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrepareStatement?: (ctx: PrepareStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.executeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecuteStatement?: (ctx: ExecuteStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.deallocatePrepare`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeallocatePrepare?: (ctx: DeallocatePrepareContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.routineBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoutineBody?: (ctx: RoutineBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.blockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatement?: (ctx: BlockStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.caseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseStatement?: (ctx: CaseStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.iterateStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIterateStatement?: (ctx: IterateStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.leaveStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeaveStatement?: (ctx: LeaveStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.loopStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopStatement?: (ctx: LoopStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.repeatStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeatStatement?: (ctx: RepeatStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;
	/**
	 * Visit a parse tree produced by the `CloseCursor`
	 * labeled alternative in `SqlParser.cursorStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCloseCursor?: (ctx: CloseCursorContext) => Result;
	/**
	 * Visit a parse tree produced by the `FetchCursor`
	 * labeled alternative in `SqlParser.cursorStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFetchCursor?: (ctx: FetchCursorContext) => Result;
	/**
	 * Visit a parse tree produced by the `OpenCursor`
	 * labeled alternative in `SqlParser.cursorStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpenCursor?: (ctx: OpenCursorContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.declareVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclareVariable?: (ctx: DeclareVariableContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.declareCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclareCondition?: (ctx: DeclareConditionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.declareCursor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclareCursor?: (ctx: DeclareCursorContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.declareHandler`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclareHandler?: (ctx: DeclareHandlerContext) => Result;
	/**
	 * Visit a parse tree produced by the `handlerConditionCode`
	 * labeled alternative in `SqlParser.handlerConditionValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHandlerConditionCode?: (ctx: HandlerConditionCodeContext) => Result;
	/**
	 * Visit a parse tree produced by the `handlerConditionState`
	 * labeled alternative in `SqlParser.handlerConditionValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHandlerConditionState?: (ctx: HandlerConditionStateContext) => Result;
	/**
	 * Visit a parse tree produced by the `handlerConditionName`
	 * labeled alternative in `SqlParser.handlerConditionValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHandlerConditionName?: (ctx: HandlerConditionNameContext) => Result;
	/**
	 * Visit a parse tree produced by the `handlerConditionWarning`
	 * labeled alternative in `SqlParser.handlerConditionValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHandlerConditionWarning?: (ctx: HandlerConditionWarningContext) => Result;
	/**
	 * Visit a parse tree produced by the `handlerConditionNotfound`
	 * labeled alternative in `SqlParser.handlerConditionValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHandlerConditionNotfound?: (ctx: HandlerConditionNotfoundContext) => Result;
	/**
	 * Visit a parse tree produced by the `handlerConditionException`
	 * labeled alternative in `SqlParser.handlerConditionValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHandlerConditionException?: (ctx: HandlerConditionExceptionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.procedureSqlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedureSqlStatement?: (ctx: ProcedureSqlStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.caseAlternative`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseAlternative?: (ctx: CaseAlternativeContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.elifAlternative`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElifAlternative?: (ctx: ElifAlternativeContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterUserMysqlV56`
	 * labeled alternative in `SqlParser.alterUser`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterUserMysqlV56?: (ctx: AlterUserMysqlV56Context) => Result;
	/**
	 * Visit a parse tree produced by the `alterUserMysqlV57`
	 * labeled alternative in `SqlParser.alterUser`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterUserMysqlV57?: (ctx: AlterUserMysqlV57Context) => Result;
	/**
	 * Visit a parse tree produced by the `createUserMysqlV56`
	 * labeled alternative in `SqlParser.createUser`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateUserMysqlV56?: (ctx: CreateUserMysqlV56Context) => Result;
	/**
	 * Visit a parse tree produced by the `createUserMysqlV57`
	 * labeled alternative in `SqlParser.createUser`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateUserMysqlV57?: (ctx: CreateUserMysqlV57Context) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.dropUser`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropUser?: (ctx: DropUserContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.grantStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrantStatement?: (ctx: GrantStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.grantProxy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrantProxy?: (ctx: GrantProxyContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.renameUser`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameUser?: (ctx: RenameUserContext) => Result;
	/**
	 * Visit a parse tree produced by the `detailRevoke`
	 * labeled alternative in `SqlParser.revokeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDetailRevoke?: (ctx: DetailRevokeContext) => Result;
	/**
	 * Visit a parse tree produced by the `shortRevoke`
	 * labeled alternative in `SqlParser.revokeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShortRevoke?: (ctx: ShortRevokeContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.revokeProxy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRevokeProxy?: (ctx: RevokeProxyContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.setPasswordStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetPasswordStatement?: (ctx: SetPasswordStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.userSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUserSpecification?: (ctx: UserSpecificationContext) => Result;
	/**
	 * Visit a parse tree produced by the `passwordAuthOption`
	 * labeled alternative in `SqlParser.userAuthOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPasswordAuthOption?: (ctx: PasswordAuthOptionContext) => Result;
	/**
	 * Visit a parse tree produced by the `stringAuthOption`
	 * labeled alternative in `SqlParser.userAuthOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringAuthOption?: (ctx: StringAuthOptionContext) => Result;
	/**
	 * Visit a parse tree produced by the `hashAuthOption`
	 * labeled alternative in `SqlParser.userAuthOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHashAuthOption?: (ctx: HashAuthOptionContext) => Result;
	/**
	 * Visit a parse tree produced by the `simpleAuthOption`
	 * labeled alternative in `SqlParser.userAuthOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleAuthOption?: (ctx: SimpleAuthOptionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.tlsOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTlsOption?: (ctx: TlsOptionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.userResourceOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUserResourceOption?: (ctx: UserResourceOptionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.userPasswordOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUserPasswordOption?: (ctx: UserPasswordOptionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.userLockOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUserLockOption?: (ctx: UserLockOptionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.privelegeClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivelegeClause?: (ctx: PrivelegeClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.privilege`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivilege?: (ctx: PrivilegeContext) => Result;
	/**
	 * Visit a parse tree produced by the `currentSchemaPriviLevel`
	 * labeled alternative in `SqlParser.privilegeLevel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentSchemaPriviLevel?: (ctx: CurrentSchemaPriviLevelContext) => Result;
	/**
	 * Visit a parse tree produced by the `globalPrivLevel`
	 * labeled alternative in `SqlParser.privilegeLevel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalPrivLevel?: (ctx: GlobalPrivLevelContext) => Result;
	/**
	 * Visit a parse tree produced by the `definiteSchemaPrivLevel`
	 * labeled alternative in `SqlParser.privilegeLevel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefiniteSchemaPrivLevel?: (ctx: DefiniteSchemaPrivLevelContext) => Result;
	/**
	 * Visit a parse tree produced by the `definiteFullTablePrivLevel`
	 * labeled alternative in `SqlParser.privilegeLevel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefiniteFullTablePrivLevel?: (ctx: DefiniteFullTablePrivLevelContext) => Result;
	/**
	 * Visit a parse tree produced by the `definiteFullTablePrivLevel2`
	 * labeled alternative in `SqlParser.privilegeLevel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefiniteFullTablePrivLevel2?: (ctx: DefiniteFullTablePrivLevel2Context) => Result;
	/**
	 * Visit a parse tree produced by the `definiteTablePrivLevel`
	 * labeled alternative in `SqlParser.privilegeLevel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefiniteTablePrivLevel?: (ctx: DefiniteTablePrivLevelContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.renameUserClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameUserClause?: (ctx: RenameUserClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.analyzeTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnalyzeTable?: (ctx: AnalyzeTableContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.checkTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCheckTable?: (ctx: CheckTableContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.checksumTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChecksumTable?: (ctx: ChecksumTableContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.optimizeTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptimizeTable?: (ctx: OptimizeTableContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.repairTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepairTable?: (ctx: RepairTableContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.checkTableOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCheckTableOption?: (ctx: CheckTableOptionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.createUdfunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateUdfunction?: (ctx: CreateUdfunctionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.installPlugin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstallPlugin?: (ctx: InstallPluginContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.uninstallPlugin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUninstallPlugin?: (ctx: UninstallPluginContext) => Result;
	/**
	 * Visit a parse tree produced by the `setVariable`
	 * labeled alternative in `SqlParser.setStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetVariable?: (ctx: SetVariableContext) => Result;
	/**
	 * Visit a parse tree produced by the `setCharset`
	 * labeled alternative in `SqlParser.setStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetCharset?: (ctx: SetCharsetContext) => Result;
	/**
	 * Visit a parse tree produced by the `setNames`
	 * labeled alternative in `SqlParser.setStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetNames?: (ctx: SetNamesContext) => Result;
	/**
	 * Visit a parse tree produced by the `setPassword`
	 * labeled alternative in `SqlParser.setStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetPassword?: (ctx: SetPasswordContext) => Result;
	/**
	 * Visit a parse tree produced by the `setTransaction`
	 * labeled alternative in `SqlParser.setStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetTransaction?: (ctx: SetTransactionContext) => Result;
	/**
	 * Visit a parse tree produced by the `setAutocommit`
	 * labeled alternative in `SqlParser.setStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetAutocommit?: (ctx: SetAutocommitContext) => Result;
	/**
	 * Visit a parse tree produced by the `setNewValueInsideTrigger`
	 * labeled alternative in `SqlParser.setStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetNewValueInsideTrigger?: (ctx: SetNewValueInsideTriggerContext) => Result;
	/**
	 * Visit a parse tree produced by the `showMasterLogs`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowMasterLogs?: (ctx: ShowMasterLogsContext) => Result;
	/**
	 * Visit a parse tree produced by the `showLogEvents`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowLogEvents?: (ctx: ShowLogEventsContext) => Result;
	/**
	 * Visit a parse tree produced by the `showObjectFilter`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowObjectFilter?: (ctx: ShowObjectFilterContext) => Result;
	/**
	 * Visit a parse tree produced by the `showColumns`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowColumns?: (ctx: ShowColumnsContext) => Result;
	/**
	 * Visit a parse tree produced by the `showCreateDb`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCreateDb?: (ctx: ShowCreateDbContext) => Result;
	/**
	 * Visit a parse tree produced by the `showCreateFullIdObject`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCreateFullIdObject?: (ctx: ShowCreateFullIdObjectContext) => Result;
	/**
	 * Visit a parse tree produced by the `showCreateUser`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCreateUser?: (ctx: ShowCreateUserContext) => Result;
	/**
	 * Visit a parse tree produced by the `showEngine`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowEngine?: (ctx: ShowEngineContext) => Result;
	/**
	 * Visit a parse tree produced by the `showGlobalInfo`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowGlobalInfo?: (ctx: ShowGlobalInfoContext) => Result;
	/**
	 * Visit a parse tree produced by the `showErrors`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowErrors?: (ctx: ShowErrorsContext) => Result;
	/**
	 * Visit a parse tree produced by the `showCountErrors`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCountErrors?: (ctx: ShowCountErrorsContext) => Result;
	/**
	 * Visit a parse tree produced by the `showSchemaFilter`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowSchemaFilter?: (ctx: ShowSchemaFilterContext) => Result;
	/**
	 * Visit a parse tree produced by the `showRoutine`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowRoutine?: (ctx: ShowRoutineContext) => Result;
	/**
	 * Visit a parse tree produced by the `showGrants`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowGrants?: (ctx: ShowGrantsContext) => Result;
	/**
	 * Visit a parse tree produced by the `showIndexes`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowIndexes?: (ctx: ShowIndexesContext) => Result;
	/**
	 * Visit a parse tree produced by the `showOpenTables`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowOpenTables?: (ctx: ShowOpenTablesContext) => Result;
	/**
	 * Visit a parse tree produced by the `showProfile`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowProfile?: (ctx: ShowProfileContext) => Result;
	/**
	 * Visit a parse tree produced by the `showSlaveStatus`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowSlaveStatus?: (ctx: ShowSlaveStatusContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.variableClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableClause?: (ctx: VariableClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.showCommonEntity`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCommonEntity?: (ctx: ShowCommonEntityContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.showFilter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowFilter?: (ctx: ShowFilterContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.showGlobalInfoClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowGlobalInfoClause?: (ctx: ShowGlobalInfoClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.showSchemaEntity`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowSchemaEntity?: (ctx: ShowSchemaEntityContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.showProfileType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowProfileType?: (ctx: ShowProfileTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.binlogStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinlogStatement?: (ctx: BinlogStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.cacheIndexStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCacheIndexStatement?: (ctx: CacheIndexStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.flushStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlushStatement?: (ctx: FlushStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.killStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKillStatement?: (ctx: KillStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.loadIndexIntoCache`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoadIndexIntoCache?: (ctx: LoadIndexIntoCacheContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.resetStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResetStatement?: (ctx: ResetStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.shutdownStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShutdownStatement?: (ctx: ShutdownStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.tableIndexes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableIndexes?: (ctx: TableIndexesContext) => Result;
	/**
	 * Visit a parse tree produced by the `simpleFlushOption`
	 * labeled alternative in `SqlParser.flushOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleFlushOption?: (ctx: SimpleFlushOptionContext) => Result;
	/**
	 * Visit a parse tree produced by the `channelFlushOption`
	 * labeled alternative in `SqlParser.flushOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChannelFlushOption?: (ctx: ChannelFlushOptionContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableFlushOption`
	 * labeled alternative in `SqlParser.flushOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableFlushOption?: (ctx: TableFlushOptionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.flushTableOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlushTableOption?: (ctx: FlushTableOptionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.loadedTableIndexes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoadedTableIndexes?: (ctx: LoadedTableIndexesContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.simpleDescribeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleDescribeStatement?: (ctx: SimpleDescribeStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.fullDescribeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFullDescribeStatement?: (ctx: FullDescribeStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.helpStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHelpStatement?: (ctx: HelpStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.useStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUseStatement?: (ctx: UseStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.signalStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignalStatement?: (ctx: SignalStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.resignalStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResignalStatement?: (ctx: ResignalStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.signalConditionInformation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignalConditionInformation?: (ctx: SignalConditionInformationContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.diagnosticsStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDiagnosticsStatement?: (ctx: DiagnosticsStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.diagnosticsConditionInformationName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDiagnosticsConditionInformationName?: (ctx: DiagnosticsConditionInformationNameContext) => Result;
	/**
	 * Visit a parse tree produced by the `describeStatements`
	 * labeled alternative in `SqlParser.describeObjectClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescribeStatements?: (ctx: DescribeStatementsContext) => Result;
	/**
	 * Visit a parse tree produced by the `describeConnection`
	 * labeled alternative in `SqlParser.describeObjectClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescribeConnection?: (ctx: DescribeConnectionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.fullId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFullId?: (ctx: FullIdContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.tableName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableName?: (ctx: TableNameContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.fullColumnName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFullColumnName?: (ctx: FullColumnNameContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.indexColumnName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexColumnName?: (ctx: IndexColumnNameContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.userName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUserName?: (ctx: UserNameContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.mysqlVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMysqlVariable?: (ctx: MysqlVariableContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.charsetName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharsetName?: (ctx: CharsetNameContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.collationName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollationName?: (ctx: CollationNameContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.engineName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEngineName?: (ctx: EngineNameContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.uuidSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUuidSet?: (ctx: UuidSetContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.xid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXid?: (ctx: XidContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.xuidStringId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXuidStringId?: (ctx: XuidStringIdContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.authPlugin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAuthPlugin?: (ctx: AuthPluginContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.uid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUid?: (ctx: UidContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.simpleId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleId?: (ctx: SimpleIdContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.dottedId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDottedId?: (ctx: DottedIdContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.decimalLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimalLiteral?: (ctx: DecimalLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.fileSizeLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFileSizeLiteral?: (ctx: FileSizeLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.stringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.booleanLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.hexadecimalLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHexadecimalLiteral?: (ctx: HexadecimalLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.nullNotnull`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullNotnull?: (ctx: NullNotnullContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;
	/**
	 * Visit a parse tree produced by the `stringDataType`
	 * labeled alternative in `SqlParser.dataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringDataType?: (ctx: StringDataTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `nationalStringDataType`
	 * labeled alternative in `SqlParser.dataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNationalStringDataType?: (ctx: NationalStringDataTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `nationalVaryingStringDataType`
	 * labeled alternative in `SqlParser.dataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNationalVaryingStringDataType?: (ctx: NationalVaryingStringDataTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `dimensionDataType`
	 * labeled alternative in `SqlParser.dataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDimensionDataType?: (ctx: DimensionDataTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `simpleDataType`
	 * labeled alternative in `SqlParser.dataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleDataType?: (ctx: SimpleDataTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `collectionDataType`
	 * labeled alternative in `SqlParser.dataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollectionDataType?: (ctx: CollectionDataTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `spatialDataType`
	 * labeled alternative in `SqlParser.dataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpatialDataType?: (ctx: SpatialDataTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `longVarcharDataType`
	 * labeled alternative in `SqlParser.dataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLongVarcharDataType?: (ctx: LongVarcharDataTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `longVarbinaryDataType`
	 * labeled alternative in `SqlParser.dataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLongVarbinaryDataType?: (ctx: LongVarbinaryDataTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.collectionOptions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollectionOptions?: (ctx: CollectionOptionsContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.convertedDataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConvertedDataType?: (ctx: ConvertedDataTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.lengthOneDimension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLengthOneDimension?: (ctx: LengthOneDimensionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.lengthTwoDimension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLengthTwoDimension?: (ctx: LengthTwoDimensionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.lengthTwoOptionalDimension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLengthTwoOptionalDimension?: (ctx: LengthTwoOptionalDimensionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.uidList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUidList?: (ctx: UidListContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.tables`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTables?: (ctx: TablesContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.indexColumnNames`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexColumnNames?: (ctx: IndexColumnNamesContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.expressions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressions?: (ctx: ExpressionsContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.expressionsWithDefaults`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionsWithDefaults?: (ctx: ExpressionsWithDefaultsContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.constants`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstants?: (ctx: ConstantsContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.simpleStrings`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleStrings?: (ctx: SimpleStringsContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.userVariables`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUserVariables?: (ctx: UserVariablesContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.defaultValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultValue?: (ctx: DefaultValueContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.currentTimestamp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentTimestamp?: (ctx: CurrentTimestampContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.expressionOrDefault`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionOrDefault?: (ctx: ExpressionOrDefaultContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.ifExists`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfExists?: (ctx: IfExistsContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.ifNotExists`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfNotExists?: (ctx: IfNotExistsContext) => Result;
	/**
	 * Visit a parse tree produced by the `specificFunctionCall`
	 * labeled alternative in `SqlParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecificFunctionCall?: (ctx: SpecificFunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by the `aggregateFunctionCall`
	 * labeled alternative in `SqlParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggregateFunctionCall?: (ctx: AggregateFunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by the `scalarFunctionCall`
	 * labeled alternative in `SqlParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScalarFunctionCall?: (ctx: ScalarFunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by the `udfFunctionCall`
	 * labeled alternative in `SqlParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUdfFunctionCall?: (ctx: UdfFunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by the `passwordFunctionCall`
	 * labeled alternative in `SqlParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPasswordFunctionCall?: (ctx: PasswordFunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by the `simpleFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleFunctionCall?: (ctx: SimpleFunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by the `dataTypeFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataTypeFunctionCall?: (ctx: DataTypeFunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by the `valuesFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValuesFunctionCall?: (ctx: ValuesFunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by the `caseFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseFunctionCall?: (ctx: CaseFunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by the `charFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharFunctionCall?: (ctx: CharFunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by the `positionFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPositionFunctionCall?: (ctx: PositionFunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by the `substrFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubstrFunctionCall?: (ctx: SubstrFunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by the `trimFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrimFunctionCall?: (ctx: TrimFunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by the `weightFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWeightFunctionCall?: (ctx: WeightFunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by the `extractFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtractFunctionCall?: (ctx: ExtractFunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by the `getFormatFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetFormatFunctionCall?: (ctx: GetFormatFunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.caseFuncAlternative`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseFuncAlternative?: (ctx: CaseFuncAlternativeContext) => Result;
	/**
	 * Visit a parse tree produced by the `levelWeightList`
	 * labeled alternative in `SqlParser.levelsInWeightString`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLevelWeightList?: (ctx: LevelWeightListContext) => Result;
	/**
	 * Visit a parse tree produced by the `levelWeightRange`
	 * labeled alternative in `SqlParser.levelsInWeightString`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLevelWeightRange?: (ctx: LevelWeightRangeContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.levelInWeightListElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLevelInWeightListElement?: (ctx: LevelInWeightListElementContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.aggregateWindowedFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggregateWindowedFunction?: (ctx: AggregateWindowedFunctionContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.scalarFunctionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScalarFunctionName?: (ctx: ScalarFunctionNameContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.passwordFunctionClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPasswordFunctionClause?: (ctx: PasswordFunctionClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.functionArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionArgs?: (ctx: FunctionArgsContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.functionArg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionArg?: (ctx: FunctionArgContext) => Result;
	/**
	 * Visit a parse tree produced by the `isExpression`
	 * labeled alternative in `SqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsExpression?: (ctx: IsExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `notExpression`
	 * labeled alternative in `SqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotExpression?: (ctx: NotExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `logicalExpression`
	 * labeled alternative in `SqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalExpression?: (ctx: LogicalExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `predicateExpression`
	 * labeled alternative in `SqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicateExpression?: (ctx: PredicateExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `soundsLikePredicate`
	 * labeled alternative in `SqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSoundsLikePredicate?: (ctx: SoundsLikePredicateContext) => Result;
	/**
	 * Visit a parse tree produced by the `expressionAtomPredicate`
	 * labeled alternative in `SqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionAtomPredicate?: (ctx: ExpressionAtomPredicateContext) => Result;
	/**
	 * Visit a parse tree produced by the `inPredicate`
	 * labeled alternative in `SqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInPredicate?: (ctx: InPredicateContext) => Result;
	/**
	 * Visit a parse tree produced by the `subqueryComparasionPredicate`
	 * labeled alternative in `SqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubqueryComparasionPredicate?: (ctx: SubqueryComparasionPredicateContext) => Result;
	/**
	 * Visit a parse tree produced by the `betweenPredicate`
	 * labeled alternative in `SqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBetweenPredicate?: (ctx: BetweenPredicateContext) => Result;
	/**
	 * Visit a parse tree produced by the `binaryComparasionPredicate`
	 * labeled alternative in `SqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryComparasionPredicate?: (ctx: BinaryComparasionPredicateContext) => Result;
	/**
	 * Visit a parse tree produced by the `isNullPredicate`
	 * labeled alternative in `SqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsNullPredicate?: (ctx: IsNullPredicateContext) => Result;
	/**
	 * Visit a parse tree produced by the `likePredicate`
	 * labeled alternative in `SqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLikePredicate?: (ctx: LikePredicateContext) => Result;
	/**
	 * Visit a parse tree produced by the `regexpPredicate`
	 * labeled alternative in `SqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegexpPredicate?: (ctx: RegexpPredicateContext) => Result;
	/**
	 * Visit a parse tree produced by the `unaryExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpressionAtom?: (ctx: UnaryExpressionAtomContext) => Result;
	/**
	 * Visit a parse tree produced by the `collateExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollateExpressionAtom?: (ctx: CollateExpressionAtomContext) => Result;
	/**
	 * Visit a parse tree produced by the `subqueryExpessionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubqueryExpessionAtom?: (ctx: SubqueryExpessionAtomContext) => Result;
	/**
	 * Visit a parse tree produced by the `mysqlVariableExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMysqlVariableExpressionAtom?: (ctx: MysqlVariableExpressionAtomContext) => Result;
	/**
	 * Visit a parse tree produced by the `nestedExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNestedExpressionAtom?: (ctx: NestedExpressionAtomContext) => Result;
	/**
	 * Visit a parse tree produced by the `nestedRowExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNestedRowExpressionAtom?: (ctx: NestedRowExpressionAtomContext) => Result;
	/**
	 * Visit a parse tree produced by the `mathExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMathExpressionAtom?: (ctx: MathExpressionAtomContext) => Result;
	/**
	 * Visit a parse tree produced by the `intervalExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalExpressionAtom?: (ctx: IntervalExpressionAtomContext) => Result;
	/**
	 * Visit a parse tree produced by the `existsExpessionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistsExpessionAtom?: (ctx: ExistsExpessionAtomContext) => Result;
	/**
	 * Visit a parse tree produced by the `constantExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantExpressionAtom?: (ctx: ConstantExpressionAtomContext) => Result;
	/**
	 * Visit a parse tree produced by the `functionCallExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallExpressionAtom?: (ctx: FunctionCallExpressionAtomContext) => Result;
	/**
	 * Visit a parse tree produced by the `binaryExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryExpressionAtom?: (ctx: BinaryExpressionAtomContext) => Result;
	/**
	 * Visit a parse tree produced by the `fullColumnNameExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFullColumnNameExpressionAtom?: (ctx: FullColumnNameExpressionAtomContext) => Result;
	/**
	 * Visit a parse tree produced by the `bitExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitExpressionAtom?: (ctx: BitExpressionAtomContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.unaryOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryOperator?: (ctx: UnaryOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.comparisonOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.logicalOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOperator?: (ctx: LogicalOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.bitOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitOperator?: (ctx: BitOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.mathOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMathOperator?: (ctx: MathOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.charsetNameBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharsetNameBase?: (ctx: CharsetNameBaseContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.transactionLevelBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransactionLevelBase?: (ctx: TransactionLevelBaseContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.privilegesBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivilegesBase?: (ctx: PrivilegesBaseContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.intervalTypeBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalTypeBase?: (ctx: IntervalTypeBaseContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.dataTypeBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataTypeBase?: (ctx: DataTypeBaseContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.keywordsCanBeId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeywordsCanBeId?: (ctx: KeywordsCanBeIdContext) => Result;
	/**
	 * Visit a parse tree produced by `SqlParser.functionNameBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionNameBase?: (ctx: FunctionNameBaseContext) => Result;
}

