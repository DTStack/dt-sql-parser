// Generated from /Users/ziv/github.com/dt-sql-parser/src/grammar/generic/SqlParser.g4 by ANTLR 4.12.0

import {ParseTreeListener} from "antlr4";


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
 * This interface defines a complete listener for a parse tree produced by
 * `SqlParser`.
 */
export default class SqlParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SqlParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.sqlStatements`.
	 * @param ctx the parse tree
	 */
	enterSqlStatements?: (ctx: SqlStatementsContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.sqlStatements`.
	 * @param ctx the parse tree
	 */
	exitSqlStatements?: (ctx: SqlStatementsContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.sqlStatement`.
	 * @param ctx the parse tree
	 */
	enterSqlStatement?: (ctx: SqlStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.sqlStatement`.
	 * @param ctx the parse tree
	 */
	exitSqlStatement?: (ctx: SqlStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.emptyStatement`.
	 * @param ctx the parse tree
	 */
	enterEmptyStatement?: (ctx: EmptyStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.emptyStatement`.
	 * @param ctx the parse tree
	 */
	exitEmptyStatement?: (ctx: EmptyStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.ddlStatement`.
	 * @param ctx the parse tree
	 */
	enterDdlStatement?: (ctx: DdlStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.ddlStatement`.
	 * @param ctx the parse tree
	 */
	exitDdlStatement?: (ctx: DdlStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.dmlStatement`.
	 * @param ctx the parse tree
	 */
	enterDmlStatement?: (ctx: DmlStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.dmlStatement`.
	 * @param ctx the parse tree
	 */
	exitDmlStatement?: (ctx: DmlStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.transactionStatement`.
	 * @param ctx the parse tree
	 */
	enterTransactionStatement?: (ctx: TransactionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.transactionStatement`.
	 * @param ctx the parse tree
	 */
	exitTransactionStatement?: (ctx: TransactionStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.replicationStatement`.
	 * @param ctx the parse tree
	 */
	enterReplicationStatement?: (ctx: ReplicationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.replicationStatement`.
	 * @param ctx the parse tree
	 */
	exitReplicationStatement?: (ctx: ReplicationStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.preparedStatement`.
	 * @param ctx the parse tree
	 */
	enterPreparedStatement?: (ctx: PreparedStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.preparedStatement`.
	 * @param ctx the parse tree
	 */
	exitPreparedStatement?: (ctx: PreparedStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.compoundStatement`.
	 * @param ctx the parse tree
	 */
	enterCompoundStatement?: (ctx: CompoundStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.compoundStatement`.
	 * @param ctx the parse tree
	 */
	exitCompoundStatement?: (ctx: CompoundStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.administrationStatement`.
	 * @param ctx the parse tree
	 */
	enterAdministrationStatement?: (ctx: AdministrationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.administrationStatement`.
	 * @param ctx the parse tree
	 */
	exitAdministrationStatement?: (ctx: AdministrationStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.utilityStatement`.
	 * @param ctx the parse tree
	 */
	enterUtilityStatement?: (ctx: UtilityStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.utilityStatement`.
	 * @param ctx the parse tree
	 */
	exitUtilityStatement?: (ctx: UtilityStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.createDatabase`.
	 * @param ctx the parse tree
	 */
	enterCreateDatabase?: (ctx: CreateDatabaseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.createDatabase`.
	 * @param ctx the parse tree
	 */
	exitCreateDatabase?: (ctx: CreateDatabaseContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.createEvent`.
	 * @param ctx the parse tree
	 */
	enterCreateEvent?: (ctx: CreateEventContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.createEvent`.
	 * @param ctx the parse tree
	 */
	exitCreateEvent?: (ctx: CreateEventContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.createIndex`.
	 * @param ctx the parse tree
	 */
	enterCreateIndex?: (ctx: CreateIndexContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.createIndex`.
	 * @param ctx the parse tree
	 */
	exitCreateIndex?: (ctx: CreateIndexContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.createLogfileGroup`.
	 * @param ctx the parse tree
	 */
	enterCreateLogfileGroup?: (ctx: CreateLogfileGroupContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.createLogfileGroup`.
	 * @param ctx the parse tree
	 */
	exitCreateLogfileGroup?: (ctx: CreateLogfileGroupContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.createProcedure`.
	 * @param ctx the parse tree
	 */
	enterCreateProcedure?: (ctx: CreateProcedureContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.createProcedure`.
	 * @param ctx the parse tree
	 */
	exitCreateProcedure?: (ctx: CreateProcedureContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.createFunction`.
	 * @param ctx the parse tree
	 */
	enterCreateFunction?: (ctx: CreateFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.createFunction`.
	 * @param ctx the parse tree
	 */
	exitCreateFunction?: (ctx: CreateFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.createServer`.
	 * @param ctx the parse tree
	 */
	enterCreateServer?: (ctx: CreateServerContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.createServer`.
	 * @param ctx the parse tree
	 */
	exitCreateServer?: (ctx: CreateServerContext) => void;
	/**
	 * Enter a parse tree produced by the `copyCreateTable`
	 * labeled alternative in `SqlParser.createTable`.
	 * @param ctx the parse tree
	 */
	enterCopyCreateTable?: (ctx: CopyCreateTableContext) => void;
	/**
	 * Exit a parse tree produced by the `copyCreateTable`
	 * labeled alternative in `SqlParser.createTable`.
	 * @param ctx the parse tree
	 */
	exitCopyCreateTable?: (ctx: CopyCreateTableContext) => void;
	/**
	 * Enter a parse tree produced by the `queryCreateTable`
	 * labeled alternative in `SqlParser.createTable`.
	 * @param ctx the parse tree
	 */
	enterQueryCreateTable?: (ctx: QueryCreateTableContext) => void;
	/**
	 * Exit a parse tree produced by the `queryCreateTable`
	 * labeled alternative in `SqlParser.createTable`.
	 * @param ctx the parse tree
	 */
	exitQueryCreateTable?: (ctx: QueryCreateTableContext) => void;
	/**
	 * Enter a parse tree produced by the `columnCreateTable`
	 * labeled alternative in `SqlParser.createTable`.
	 * @param ctx the parse tree
	 */
	enterColumnCreateTable?: (ctx: ColumnCreateTableContext) => void;
	/**
	 * Exit a parse tree produced by the `columnCreateTable`
	 * labeled alternative in `SqlParser.createTable`.
	 * @param ctx the parse tree
	 */
	exitColumnCreateTable?: (ctx: ColumnCreateTableContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.createTablespaceInnodb`.
	 * @param ctx the parse tree
	 */
	enterCreateTablespaceInnodb?: (ctx: CreateTablespaceInnodbContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.createTablespaceInnodb`.
	 * @param ctx the parse tree
	 */
	exitCreateTablespaceInnodb?: (ctx: CreateTablespaceInnodbContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.createTablespaceNdb`.
	 * @param ctx the parse tree
	 */
	enterCreateTablespaceNdb?: (ctx: CreateTablespaceNdbContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.createTablespaceNdb`.
	 * @param ctx the parse tree
	 */
	exitCreateTablespaceNdb?: (ctx: CreateTablespaceNdbContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.createTrigger`.
	 * @param ctx the parse tree
	 */
	enterCreateTrigger?: (ctx: CreateTriggerContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.createTrigger`.
	 * @param ctx the parse tree
	 */
	exitCreateTrigger?: (ctx: CreateTriggerContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.createView`.
	 * @param ctx the parse tree
	 */
	enterCreateView?: (ctx: CreateViewContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.createView`.
	 * @param ctx the parse tree
	 */
	exitCreateView?: (ctx: CreateViewContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.createDatabaseOption`.
	 * @param ctx the parse tree
	 */
	enterCreateDatabaseOption?: (ctx: CreateDatabaseOptionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.createDatabaseOption`.
	 * @param ctx the parse tree
	 */
	exitCreateDatabaseOption?: (ctx: CreateDatabaseOptionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.ownerStatement`.
	 * @param ctx the parse tree
	 */
	enterOwnerStatement?: (ctx: OwnerStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.ownerStatement`.
	 * @param ctx the parse tree
	 */
	exitOwnerStatement?: (ctx: OwnerStatementContext) => void;
	/**
	 * Enter a parse tree produced by the `preciseSchedule`
	 * labeled alternative in `SqlParser.scheduleExpression`.
	 * @param ctx the parse tree
	 */
	enterPreciseSchedule?: (ctx: PreciseScheduleContext) => void;
	/**
	 * Exit a parse tree produced by the `preciseSchedule`
	 * labeled alternative in `SqlParser.scheduleExpression`.
	 * @param ctx the parse tree
	 */
	exitPreciseSchedule?: (ctx: PreciseScheduleContext) => void;
	/**
	 * Enter a parse tree produced by the `intervalSchedule`
	 * labeled alternative in `SqlParser.scheduleExpression`.
	 * @param ctx the parse tree
	 */
	enterIntervalSchedule?: (ctx: IntervalScheduleContext) => void;
	/**
	 * Exit a parse tree produced by the `intervalSchedule`
	 * labeled alternative in `SqlParser.scheduleExpression`.
	 * @param ctx the parse tree
	 */
	exitIntervalSchedule?: (ctx: IntervalScheduleContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.timestampValue`.
	 * @param ctx the parse tree
	 */
	enterTimestampValue?: (ctx: TimestampValueContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.timestampValue`.
	 * @param ctx the parse tree
	 */
	exitTimestampValue?: (ctx: TimestampValueContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.intervalExpr`.
	 * @param ctx the parse tree
	 */
	enterIntervalExpr?: (ctx: IntervalExprContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.intervalExpr`.
	 * @param ctx the parse tree
	 */
	exitIntervalExpr?: (ctx: IntervalExprContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.intervalType`.
	 * @param ctx the parse tree
	 */
	enterIntervalType?: (ctx: IntervalTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.intervalType`.
	 * @param ctx the parse tree
	 */
	exitIntervalType?: (ctx: IntervalTypeContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.enableType`.
	 * @param ctx the parse tree
	 */
	enterEnableType?: (ctx: EnableTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.enableType`.
	 * @param ctx the parse tree
	 */
	exitEnableType?: (ctx: EnableTypeContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.indexType`.
	 * @param ctx the parse tree
	 */
	enterIndexType?: (ctx: IndexTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.indexType`.
	 * @param ctx the parse tree
	 */
	exitIndexType?: (ctx: IndexTypeContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.indexOption`.
	 * @param ctx the parse tree
	 */
	enterIndexOption?: (ctx: IndexOptionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.indexOption`.
	 * @param ctx the parse tree
	 */
	exitIndexOption?: (ctx: IndexOptionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.procedureParameter`.
	 * @param ctx the parse tree
	 */
	enterProcedureParameter?: (ctx: ProcedureParameterContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.procedureParameter`.
	 * @param ctx the parse tree
	 */
	exitProcedureParameter?: (ctx: ProcedureParameterContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.functionParameter`.
	 * @param ctx the parse tree
	 */
	enterFunctionParameter?: (ctx: FunctionParameterContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.functionParameter`.
	 * @param ctx the parse tree
	 */
	exitFunctionParameter?: (ctx: FunctionParameterContext) => void;
	/**
	 * Enter a parse tree produced by the `routineComment`
	 * labeled alternative in `SqlParser.routineOption`.
	 * @param ctx the parse tree
	 */
	enterRoutineComment?: (ctx: RoutineCommentContext) => void;
	/**
	 * Exit a parse tree produced by the `routineComment`
	 * labeled alternative in `SqlParser.routineOption`.
	 * @param ctx the parse tree
	 */
	exitRoutineComment?: (ctx: RoutineCommentContext) => void;
	/**
	 * Enter a parse tree produced by the `routineLanguage`
	 * labeled alternative in `SqlParser.routineOption`.
	 * @param ctx the parse tree
	 */
	enterRoutineLanguage?: (ctx: RoutineLanguageContext) => void;
	/**
	 * Exit a parse tree produced by the `routineLanguage`
	 * labeled alternative in `SqlParser.routineOption`.
	 * @param ctx the parse tree
	 */
	exitRoutineLanguage?: (ctx: RoutineLanguageContext) => void;
	/**
	 * Enter a parse tree produced by the `routineBehavior`
	 * labeled alternative in `SqlParser.routineOption`.
	 * @param ctx the parse tree
	 */
	enterRoutineBehavior?: (ctx: RoutineBehaviorContext) => void;
	/**
	 * Exit a parse tree produced by the `routineBehavior`
	 * labeled alternative in `SqlParser.routineOption`.
	 * @param ctx the parse tree
	 */
	exitRoutineBehavior?: (ctx: RoutineBehaviorContext) => void;
	/**
	 * Enter a parse tree produced by the `routineData`
	 * labeled alternative in `SqlParser.routineOption`.
	 * @param ctx the parse tree
	 */
	enterRoutineData?: (ctx: RoutineDataContext) => void;
	/**
	 * Exit a parse tree produced by the `routineData`
	 * labeled alternative in `SqlParser.routineOption`.
	 * @param ctx the parse tree
	 */
	exitRoutineData?: (ctx: RoutineDataContext) => void;
	/**
	 * Enter a parse tree produced by the `routineSecurity`
	 * labeled alternative in `SqlParser.routineOption`.
	 * @param ctx the parse tree
	 */
	enterRoutineSecurity?: (ctx: RoutineSecurityContext) => void;
	/**
	 * Exit a parse tree produced by the `routineSecurity`
	 * labeled alternative in `SqlParser.routineOption`.
	 * @param ctx the parse tree
	 */
	exitRoutineSecurity?: (ctx: RoutineSecurityContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.serverOption`.
	 * @param ctx the parse tree
	 */
	enterServerOption?: (ctx: ServerOptionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.serverOption`.
	 * @param ctx the parse tree
	 */
	exitServerOption?: (ctx: ServerOptionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.createDefinitions`.
	 * @param ctx the parse tree
	 */
	enterCreateDefinitions?: (ctx: CreateDefinitionsContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.createDefinitions`.
	 * @param ctx the parse tree
	 */
	exitCreateDefinitions?: (ctx: CreateDefinitionsContext) => void;
	/**
	 * Enter a parse tree produced by the `columnDeclaration`
	 * labeled alternative in `SqlParser.createDefinition`.
	 * @param ctx the parse tree
	 */
	enterColumnDeclaration?: (ctx: ColumnDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `columnDeclaration`
	 * labeled alternative in `SqlParser.createDefinition`.
	 * @param ctx the parse tree
	 */
	exitColumnDeclaration?: (ctx: ColumnDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by the `constraintDeclaration`
	 * labeled alternative in `SqlParser.createDefinition`.
	 * @param ctx the parse tree
	 */
	enterConstraintDeclaration?: (ctx: ConstraintDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `constraintDeclaration`
	 * labeled alternative in `SqlParser.createDefinition`.
	 * @param ctx the parse tree
	 */
	exitConstraintDeclaration?: (ctx: ConstraintDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by the `indexDeclaration`
	 * labeled alternative in `SqlParser.createDefinition`.
	 * @param ctx the parse tree
	 */
	enterIndexDeclaration?: (ctx: IndexDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `indexDeclaration`
	 * labeled alternative in `SqlParser.createDefinition`.
	 * @param ctx the parse tree
	 */
	exitIndexDeclaration?: (ctx: IndexDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.columnDefinition`.
	 * @param ctx the parse tree
	 */
	enterColumnDefinition?: (ctx: ColumnDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.columnDefinition`.
	 * @param ctx the parse tree
	 */
	exitColumnDefinition?: (ctx: ColumnDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by the `nullColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 */
	enterNullColumnConstraint?: (ctx: NullColumnConstraintContext) => void;
	/**
	 * Exit a parse tree produced by the `nullColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 */
	exitNullColumnConstraint?: (ctx: NullColumnConstraintContext) => void;
	/**
	 * Enter a parse tree produced by the `defaultColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 */
	enterDefaultColumnConstraint?: (ctx: DefaultColumnConstraintContext) => void;
	/**
	 * Exit a parse tree produced by the `defaultColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 */
	exitDefaultColumnConstraint?: (ctx: DefaultColumnConstraintContext) => void;
	/**
	 * Enter a parse tree produced by the `autoIncrementColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 */
	enterAutoIncrementColumnConstraint?: (ctx: AutoIncrementColumnConstraintContext) => void;
	/**
	 * Exit a parse tree produced by the `autoIncrementColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 */
	exitAutoIncrementColumnConstraint?: (ctx: AutoIncrementColumnConstraintContext) => void;
	/**
	 * Enter a parse tree produced by the `primaryKeyColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 */
	enterPrimaryKeyColumnConstraint?: (ctx: PrimaryKeyColumnConstraintContext) => void;
	/**
	 * Exit a parse tree produced by the `primaryKeyColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 */
	exitPrimaryKeyColumnConstraint?: (ctx: PrimaryKeyColumnConstraintContext) => void;
	/**
	 * Enter a parse tree produced by the `uniqueKeyColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 */
	enterUniqueKeyColumnConstraint?: (ctx: UniqueKeyColumnConstraintContext) => void;
	/**
	 * Exit a parse tree produced by the `uniqueKeyColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 */
	exitUniqueKeyColumnConstraint?: (ctx: UniqueKeyColumnConstraintContext) => void;
	/**
	 * Enter a parse tree produced by the `commentColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 */
	enterCommentColumnConstraint?: (ctx: CommentColumnConstraintContext) => void;
	/**
	 * Exit a parse tree produced by the `commentColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 */
	exitCommentColumnConstraint?: (ctx: CommentColumnConstraintContext) => void;
	/**
	 * Enter a parse tree produced by the `formatColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 */
	enterFormatColumnConstraint?: (ctx: FormatColumnConstraintContext) => void;
	/**
	 * Exit a parse tree produced by the `formatColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 */
	exitFormatColumnConstraint?: (ctx: FormatColumnConstraintContext) => void;
	/**
	 * Enter a parse tree produced by the `storageColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 */
	enterStorageColumnConstraint?: (ctx: StorageColumnConstraintContext) => void;
	/**
	 * Exit a parse tree produced by the `storageColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 */
	exitStorageColumnConstraint?: (ctx: StorageColumnConstraintContext) => void;
	/**
	 * Enter a parse tree produced by the `referenceColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 */
	enterReferenceColumnConstraint?: (ctx: ReferenceColumnConstraintContext) => void;
	/**
	 * Exit a parse tree produced by the `referenceColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 */
	exitReferenceColumnConstraint?: (ctx: ReferenceColumnConstraintContext) => void;
	/**
	 * Enter a parse tree produced by the `collateColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 */
	enterCollateColumnConstraint?: (ctx: CollateColumnConstraintContext) => void;
	/**
	 * Exit a parse tree produced by the `collateColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 */
	exitCollateColumnConstraint?: (ctx: CollateColumnConstraintContext) => void;
	/**
	 * Enter a parse tree produced by the `generatedColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 */
	enterGeneratedColumnConstraint?: (ctx: GeneratedColumnConstraintContext) => void;
	/**
	 * Exit a parse tree produced by the `generatedColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 */
	exitGeneratedColumnConstraint?: (ctx: GeneratedColumnConstraintContext) => void;
	/**
	 * Enter a parse tree produced by the `serialDefaultColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 */
	enterSerialDefaultColumnConstraint?: (ctx: SerialDefaultColumnConstraintContext) => void;
	/**
	 * Exit a parse tree produced by the `serialDefaultColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 */
	exitSerialDefaultColumnConstraint?: (ctx: SerialDefaultColumnConstraintContext) => void;
	/**
	 * Enter a parse tree produced by the `checkColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 */
	enterCheckColumnConstraint?: (ctx: CheckColumnConstraintContext) => void;
	/**
	 * Exit a parse tree produced by the `checkColumnConstraint`
	 * labeled alternative in `SqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 */
	exitCheckColumnConstraint?: (ctx: CheckColumnConstraintContext) => void;
	/**
	 * Enter a parse tree produced by the `primaryKeyTableConstraint`
	 * labeled alternative in `SqlParser.tableConstraint`.
	 * @param ctx the parse tree
	 */
	enterPrimaryKeyTableConstraint?: (ctx: PrimaryKeyTableConstraintContext) => void;
	/**
	 * Exit a parse tree produced by the `primaryKeyTableConstraint`
	 * labeled alternative in `SqlParser.tableConstraint`.
	 * @param ctx the parse tree
	 */
	exitPrimaryKeyTableConstraint?: (ctx: PrimaryKeyTableConstraintContext) => void;
	/**
	 * Enter a parse tree produced by the `uniqueKeyTableConstraint`
	 * labeled alternative in `SqlParser.tableConstraint`.
	 * @param ctx the parse tree
	 */
	enterUniqueKeyTableConstraint?: (ctx: UniqueKeyTableConstraintContext) => void;
	/**
	 * Exit a parse tree produced by the `uniqueKeyTableConstraint`
	 * labeled alternative in `SqlParser.tableConstraint`.
	 * @param ctx the parse tree
	 */
	exitUniqueKeyTableConstraint?: (ctx: UniqueKeyTableConstraintContext) => void;
	/**
	 * Enter a parse tree produced by the `foreignKeyTableConstraint`
	 * labeled alternative in `SqlParser.tableConstraint`.
	 * @param ctx the parse tree
	 */
	enterForeignKeyTableConstraint?: (ctx: ForeignKeyTableConstraintContext) => void;
	/**
	 * Exit a parse tree produced by the `foreignKeyTableConstraint`
	 * labeled alternative in `SqlParser.tableConstraint`.
	 * @param ctx the parse tree
	 */
	exitForeignKeyTableConstraint?: (ctx: ForeignKeyTableConstraintContext) => void;
	/**
	 * Enter a parse tree produced by the `checkTableConstraint`
	 * labeled alternative in `SqlParser.tableConstraint`.
	 * @param ctx the parse tree
	 */
	enterCheckTableConstraint?: (ctx: CheckTableConstraintContext) => void;
	/**
	 * Exit a parse tree produced by the `checkTableConstraint`
	 * labeled alternative in `SqlParser.tableConstraint`.
	 * @param ctx the parse tree
	 */
	exitCheckTableConstraint?: (ctx: CheckTableConstraintContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.referenceDefinition`.
	 * @param ctx the parse tree
	 */
	enterReferenceDefinition?: (ctx: ReferenceDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.referenceDefinition`.
	 * @param ctx the parse tree
	 */
	exitReferenceDefinition?: (ctx: ReferenceDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.referenceAction`.
	 * @param ctx the parse tree
	 */
	enterReferenceAction?: (ctx: ReferenceActionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.referenceAction`.
	 * @param ctx the parse tree
	 */
	exitReferenceAction?: (ctx: ReferenceActionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.referenceControlType`.
	 * @param ctx the parse tree
	 */
	enterReferenceControlType?: (ctx: ReferenceControlTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.referenceControlType`.
	 * @param ctx the parse tree
	 */
	exitReferenceControlType?: (ctx: ReferenceControlTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `simpleIndexDeclaration`
	 * labeled alternative in `SqlParser.indexColumnDefinition`.
	 * @param ctx the parse tree
	 */
	enterSimpleIndexDeclaration?: (ctx: SimpleIndexDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleIndexDeclaration`
	 * labeled alternative in `SqlParser.indexColumnDefinition`.
	 * @param ctx the parse tree
	 */
	exitSimpleIndexDeclaration?: (ctx: SimpleIndexDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by the `specialIndexDeclaration`
	 * labeled alternative in `SqlParser.indexColumnDefinition`.
	 * @param ctx the parse tree
	 */
	enterSpecialIndexDeclaration?: (ctx: SpecialIndexDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `specialIndexDeclaration`
	 * labeled alternative in `SqlParser.indexColumnDefinition`.
	 * @param ctx the parse tree
	 */
	exitSpecialIndexDeclaration?: (ctx: SpecialIndexDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by the `tableOptionEngine`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	enterTableOptionEngine?: (ctx: TableOptionEngineContext) => void;
	/**
	 * Exit a parse tree produced by the `tableOptionEngine`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	exitTableOptionEngine?: (ctx: TableOptionEngineContext) => void;
	/**
	 * Enter a parse tree produced by the `tableOptionAutoIncrement`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	enterTableOptionAutoIncrement?: (ctx: TableOptionAutoIncrementContext) => void;
	/**
	 * Exit a parse tree produced by the `tableOptionAutoIncrement`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	exitTableOptionAutoIncrement?: (ctx: TableOptionAutoIncrementContext) => void;
	/**
	 * Enter a parse tree produced by the `tableOptionAverage`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	enterTableOptionAverage?: (ctx: TableOptionAverageContext) => void;
	/**
	 * Exit a parse tree produced by the `tableOptionAverage`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	exitTableOptionAverage?: (ctx: TableOptionAverageContext) => void;
	/**
	 * Enter a parse tree produced by the `tableOptionCharset`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	enterTableOptionCharset?: (ctx: TableOptionCharsetContext) => void;
	/**
	 * Exit a parse tree produced by the `tableOptionCharset`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	exitTableOptionCharset?: (ctx: TableOptionCharsetContext) => void;
	/**
	 * Enter a parse tree produced by the `tableOptionChecksum`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	enterTableOptionChecksum?: (ctx: TableOptionChecksumContext) => void;
	/**
	 * Exit a parse tree produced by the `tableOptionChecksum`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	exitTableOptionChecksum?: (ctx: TableOptionChecksumContext) => void;
	/**
	 * Enter a parse tree produced by the `tableOptionCollate`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	enterTableOptionCollate?: (ctx: TableOptionCollateContext) => void;
	/**
	 * Exit a parse tree produced by the `tableOptionCollate`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	exitTableOptionCollate?: (ctx: TableOptionCollateContext) => void;
	/**
	 * Enter a parse tree produced by the `tableOptionComment`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	enterTableOptionComment?: (ctx: TableOptionCommentContext) => void;
	/**
	 * Exit a parse tree produced by the `tableOptionComment`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	exitTableOptionComment?: (ctx: TableOptionCommentContext) => void;
	/**
	 * Enter a parse tree produced by the `tableOptionCompression`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	enterTableOptionCompression?: (ctx: TableOptionCompressionContext) => void;
	/**
	 * Exit a parse tree produced by the `tableOptionCompression`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	exitTableOptionCompression?: (ctx: TableOptionCompressionContext) => void;
	/**
	 * Enter a parse tree produced by the `tableOptionConnection`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	enterTableOptionConnection?: (ctx: TableOptionConnectionContext) => void;
	/**
	 * Exit a parse tree produced by the `tableOptionConnection`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	exitTableOptionConnection?: (ctx: TableOptionConnectionContext) => void;
	/**
	 * Enter a parse tree produced by the `tableOptionDataDirectory`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	enterTableOptionDataDirectory?: (ctx: TableOptionDataDirectoryContext) => void;
	/**
	 * Exit a parse tree produced by the `tableOptionDataDirectory`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	exitTableOptionDataDirectory?: (ctx: TableOptionDataDirectoryContext) => void;
	/**
	 * Enter a parse tree produced by the `tableOptionDelay`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	enterTableOptionDelay?: (ctx: TableOptionDelayContext) => void;
	/**
	 * Exit a parse tree produced by the `tableOptionDelay`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	exitTableOptionDelay?: (ctx: TableOptionDelayContext) => void;
	/**
	 * Enter a parse tree produced by the `tableOptionEncryption`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	enterTableOptionEncryption?: (ctx: TableOptionEncryptionContext) => void;
	/**
	 * Exit a parse tree produced by the `tableOptionEncryption`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	exitTableOptionEncryption?: (ctx: TableOptionEncryptionContext) => void;
	/**
	 * Enter a parse tree produced by the `tableOptionIndexDirectory`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	enterTableOptionIndexDirectory?: (ctx: TableOptionIndexDirectoryContext) => void;
	/**
	 * Exit a parse tree produced by the `tableOptionIndexDirectory`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	exitTableOptionIndexDirectory?: (ctx: TableOptionIndexDirectoryContext) => void;
	/**
	 * Enter a parse tree produced by the `tableOptionInsertMethod`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	enterTableOptionInsertMethod?: (ctx: TableOptionInsertMethodContext) => void;
	/**
	 * Exit a parse tree produced by the `tableOptionInsertMethod`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	exitTableOptionInsertMethod?: (ctx: TableOptionInsertMethodContext) => void;
	/**
	 * Enter a parse tree produced by the `tableOptionKeyBlockSize`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	enterTableOptionKeyBlockSize?: (ctx: TableOptionKeyBlockSizeContext) => void;
	/**
	 * Exit a parse tree produced by the `tableOptionKeyBlockSize`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	exitTableOptionKeyBlockSize?: (ctx: TableOptionKeyBlockSizeContext) => void;
	/**
	 * Enter a parse tree produced by the `tableOptionMaxRows`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	enterTableOptionMaxRows?: (ctx: TableOptionMaxRowsContext) => void;
	/**
	 * Exit a parse tree produced by the `tableOptionMaxRows`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	exitTableOptionMaxRows?: (ctx: TableOptionMaxRowsContext) => void;
	/**
	 * Enter a parse tree produced by the `tableOptionMinRows`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	enterTableOptionMinRows?: (ctx: TableOptionMinRowsContext) => void;
	/**
	 * Exit a parse tree produced by the `tableOptionMinRows`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	exitTableOptionMinRows?: (ctx: TableOptionMinRowsContext) => void;
	/**
	 * Enter a parse tree produced by the `tableOptionPackKeys`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	enterTableOptionPackKeys?: (ctx: TableOptionPackKeysContext) => void;
	/**
	 * Exit a parse tree produced by the `tableOptionPackKeys`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	exitTableOptionPackKeys?: (ctx: TableOptionPackKeysContext) => void;
	/**
	 * Enter a parse tree produced by the `tableOptionPassword`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	enterTableOptionPassword?: (ctx: TableOptionPasswordContext) => void;
	/**
	 * Exit a parse tree produced by the `tableOptionPassword`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	exitTableOptionPassword?: (ctx: TableOptionPasswordContext) => void;
	/**
	 * Enter a parse tree produced by the `tableOptionRowFormat`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	enterTableOptionRowFormat?: (ctx: TableOptionRowFormatContext) => void;
	/**
	 * Exit a parse tree produced by the `tableOptionRowFormat`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	exitTableOptionRowFormat?: (ctx: TableOptionRowFormatContext) => void;
	/**
	 * Enter a parse tree produced by the `tableOptionRecalculation`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	enterTableOptionRecalculation?: (ctx: TableOptionRecalculationContext) => void;
	/**
	 * Exit a parse tree produced by the `tableOptionRecalculation`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	exitTableOptionRecalculation?: (ctx: TableOptionRecalculationContext) => void;
	/**
	 * Enter a parse tree produced by the `tableOptionPersistent`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	enterTableOptionPersistent?: (ctx: TableOptionPersistentContext) => void;
	/**
	 * Exit a parse tree produced by the `tableOptionPersistent`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	exitTableOptionPersistent?: (ctx: TableOptionPersistentContext) => void;
	/**
	 * Enter a parse tree produced by the `tableOptionSamplePage`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	enterTableOptionSamplePage?: (ctx: TableOptionSamplePageContext) => void;
	/**
	 * Exit a parse tree produced by the `tableOptionSamplePage`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	exitTableOptionSamplePage?: (ctx: TableOptionSamplePageContext) => void;
	/**
	 * Enter a parse tree produced by the `tableOptionTablespace`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	enterTableOptionTablespace?: (ctx: TableOptionTablespaceContext) => void;
	/**
	 * Exit a parse tree produced by the `tableOptionTablespace`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	exitTableOptionTablespace?: (ctx: TableOptionTablespaceContext) => void;
	/**
	 * Enter a parse tree produced by the `tableOptionUnion`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	enterTableOptionUnion?: (ctx: TableOptionUnionContext) => void;
	/**
	 * Exit a parse tree produced by the `tableOptionUnion`
	 * labeled alternative in `SqlParser.tableOption`.
	 * @param ctx the parse tree
	 */
	exitTableOptionUnion?: (ctx: TableOptionUnionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.tablespaceStorage`.
	 * @param ctx the parse tree
	 */
	enterTablespaceStorage?: (ctx: TablespaceStorageContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.tablespaceStorage`.
	 * @param ctx the parse tree
	 */
	exitTablespaceStorage?: (ctx: TablespaceStorageContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.partitionDefinitions`.
	 * @param ctx the parse tree
	 */
	enterPartitionDefinitions?: (ctx: PartitionDefinitionsContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.partitionDefinitions`.
	 * @param ctx the parse tree
	 */
	exitPartitionDefinitions?: (ctx: PartitionDefinitionsContext) => void;
	/**
	 * Enter a parse tree produced by the `partitionFunctionHash`
	 * labeled alternative in `SqlParser.partitionFunctionDefinition`.
	 * @param ctx the parse tree
	 */
	enterPartitionFunctionHash?: (ctx: PartitionFunctionHashContext) => void;
	/**
	 * Exit a parse tree produced by the `partitionFunctionHash`
	 * labeled alternative in `SqlParser.partitionFunctionDefinition`.
	 * @param ctx the parse tree
	 */
	exitPartitionFunctionHash?: (ctx: PartitionFunctionHashContext) => void;
	/**
	 * Enter a parse tree produced by the `partitionFunctionKey`
	 * labeled alternative in `SqlParser.partitionFunctionDefinition`.
	 * @param ctx the parse tree
	 */
	enterPartitionFunctionKey?: (ctx: PartitionFunctionKeyContext) => void;
	/**
	 * Exit a parse tree produced by the `partitionFunctionKey`
	 * labeled alternative in `SqlParser.partitionFunctionDefinition`.
	 * @param ctx the parse tree
	 */
	exitPartitionFunctionKey?: (ctx: PartitionFunctionKeyContext) => void;
	/**
	 * Enter a parse tree produced by the `partitionFunctionRange`
	 * labeled alternative in `SqlParser.partitionFunctionDefinition`.
	 * @param ctx the parse tree
	 */
	enterPartitionFunctionRange?: (ctx: PartitionFunctionRangeContext) => void;
	/**
	 * Exit a parse tree produced by the `partitionFunctionRange`
	 * labeled alternative in `SqlParser.partitionFunctionDefinition`.
	 * @param ctx the parse tree
	 */
	exitPartitionFunctionRange?: (ctx: PartitionFunctionRangeContext) => void;
	/**
	 * Enter a parse tree produced by the `partitionFunctionList`
	 * labeled alternative in `SqlParser.partitionFunctionDefinition`.
	 * @param ctx the parse tree
	 */
	enterPartitionFunctionList?: (ctx: PartitionFunctionListContext) => void;
	/**
	 * Exit a parse tree produced by the `partitionFunctionList`
	 * labeled alternative in `SqlParser.partitionFunctionDefinition`.
	 * @param ctx the parse tree
	 */
	exitPartitionFunctionList?: (ctx: PartitionFunctionListContext) => void;
	/**
	 * Enter a parse tree produced by the `subPartitionFunctionHash`
	 * labeled alternative in `SqlParser.subpartitionFunctionDefinition`.
	 * @param ctx the parse tree
	 */
	enterSubPartitionFunctionHash?: (ctx: SubPartitionFunctionHashContext) => void;
	/**
	 * Exit a parse tree produced by the `subPartitionFunctionHash`
	 * labeled alternative in `SqlParser.subpartitionFunctionDefinition`.
	 * @param ctx the parse tree
	 */
	exitSubPartitionFunctionHash?: (ctx: SubPartitionFunctionHashContext) => void;
	/**
	 * Enter a parse tree produced by the `subPartitionFunctionKey`
	 * labeled alternative in `SqlParser.subpartitionFunctionDefinition`.
	 * @param ctx the parse tree
	 */
	enterSubPartitionFunctionKey?: (ctx: SubPartitionFunctionKeyContext) => void;
	/**
	 * Exit a parse tree produced by the `subPartitionFunctionKey`
	 * labeled alternative in `SqlParser.subpartitionFunctionDefinition`.
	 * @param ctx the parse tree
	 */
	exitSubPartitionFunctionKey?: (ctx: SubPartitionFunctionKeyContext) => void;
	/**
	 * Enter a parse tree produced by the `partitionComparision`
	 * labeled alternative in `SqlParser.partitionDefinition`.
	 * @param ctx the parse tree
	 */
	enterPartitionComparision?: (ctx: PartitionComparisionContext) => void;
	/**
	 * Exit a parse tree produced by the `partitionComparision`
	 * labeled alternative in `SqlParser.partitionDefinition`.
	 * @param ctx the parse tree
	 */
	exitPartitionComparision?: (ctx: PartitionComparisionContext) => void;
	/**
	 * Enter a parse tree produced by the `partitionListAtom`
	 * labeled alternative in `SqlParser.partitionDefinition`.
	 * @param ctx the parse tree
	 */
	enterPartitionListAtom?: (ctx: PartitionListAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `partitionListAtom`
	 * labeled alternative in `SqlParser.partitionDefinition`.
	 * @param ctx the parse tree
	 */
	exitPartitionListAtom?: (ctx: PartitionListAtomContext) => void;
	/**
	 * Enter a parse tree produced by the `partitionListVector`
	 * labeled alternative in `SqlParser.partitionDefinition`.
	 * @param ctx the parse tree
	 */
	enterPartitionListVector?: (ctx: PartitionListVectorContext) => void;
	/**
	 * Exit a parse tree produced by the `partitionListVector`
	 * labeled alternative in `SqlParser.partitionDefinition`.
	 * @param ctx the parse tree
	 */
	exitPartitionListVector?: (ctx: PartitionListVectorContext) => void;
	/**
	 * Enter a parse tree produced by the `partitionSimple`
	 * labeled alternative in `SqlParser.partitionDefinition`.
	 * @param ctx the parse tree
	 */
	enterPartitionSimple?: (ctx: PartitionSimpleContext) => void;
	/**
	 * Exit a parse tree produced by the `partitionSimple`
	 * labeled alternative in `SqlParser.partitionDefinition`.
	 * @param ctx the parse tree
	 */
	exitPartitionSimple?: (ctx: PartitionSimpleContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.partitionDefinerAtom`.
	 * @param ctx the parse tree
	 */
	enterPartitionDefinerAtom?: (ctx: PartitionDefinerAtomContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.partitionDefinerAtom`.
	 * @param ctx the parse tree
	 */
	exitPartitionDefinerAtom?: (ctx: PartitionDefinerAtomContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.partitionDefinerVector`.
	 * @param ctx the parse tree
	 */
	enterPartitionDefinerVector?: (ctx: PartitionDefinerVectorContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.partitionDefinerVector`.
	 * @param ctx the parse tree
	 */
	exitPartitionDefinerVector?: (ctx: PartitionDefinerVectorContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.subpartitionDefinition`.
	 * @param ctx the parse tree
	 */
	enterSubpartitionDefinition?: (ctx: SubpartitionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.subpartitionDefinition`.
	 * @param ctx the parse tree
	 */
	exitSubpartitionDefinition?: (ctx: SubpartitionDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by the `partitionOptionEngine`
	 * labeled alternative in `SqlParser.partitionOption`.
	 * @param ctx the parse tree
	 */
	enterPartitionOptionEngine?: (ctx: PartitionOptionEngineContext) => void;
	/**
	 * Exit a parse tree produced by the `partitionOptionEngine`
	 * labeled alternative in `SqlParser.partitionOption`.
	 * @param ctx the parse tree
	 */
	exitPartitionOptionEngine?: (ctx: PartitionOptionEngineContext) => void;
	/**
	 * Enter a parse tree produced by the `partitionOptionComment`
	 * labeled alternative in `SqlParser.partitionOption`.
	 * @param ctx the parse tree
	 */
	enterPartitionOptionComment?: (ctx: PartitionOptionCommentContext) => void;
	/**
	 * Exit a parse tree produced by the `partitionOptionComment`
	 * labeled alternative in `SqlParser.partitionOption`.
	 * @param ctx the parse tree
	 */
	exitPartitionOptionComment?: (ctx: PartitionOptionCommentContext) => void;
	/**
	 * Enter a parse tree produced by the `partitionOptionDataDirectory`
	 * labeled alternative in `SqlParser.partitionOption`.
	 * @param ctx the parse tree
	 */
	enterPartitionOptionDataDirectory?: (ctx: PartitionOptionDataDirectoryContext) => void;
	/**
	 * Exit a parse tree produced by the `partitionOptionDataDirectory`
	 * labeled alternative in `SqlParser.partitionOption`.
	 * @param ctx the parse tree
	 */
	exitPartitionOptionDataDirectory?: (ctx: PartitionOptionDataDirectoryContext) => void;
	/**
	 * Enter a parse tree produced by the `partitionOptionIndexDirectory`
	 * labeled alternative in `SqlParser.partitionOption`.
	 * @param ctx the parse tree
	 */
	enterPartitionOptionIndexDirectory?: (ctx: PartitionOptionIndexDirectoryContext) => void;
	/**
	 * Exit a parse tree produced by the `partitionOptionIndexDirectory`
	 * labeled alternative in `SqlParser.partitionOption`.
	 * @param ctx the parse tree
	 */
	exitPartitionOptionIndexDirectory?: (ctx: PartitionOptionIndexDirectoryContext) => void;
	/**
	 * Enter a parse tree produced by the `partitionOptionMaxRows`
	 * labeled alternative in `SqlParser.partitionOption`.
	 * @param ctx the parse tree
	 */
	enterPartitionOptionMaxRows?: (ctx: PartitionOptionMaxRowsContext) => void;
	/**
	 * Exit a parse tree produced by the `partitionOptionMaxRows`
	 * labeled alternative in `SqlParser.partitionOption`.
	 * @param ctx the parse tree
	 */
	exitPartitionOptionMaxRows?: (ctx: PartitionOptionMaxRowsContext) => void;
	/**
	 * Enter a parse tree produced by the `partitionOptionMinRows`
	 * labeled alternative in `SqlParser.partitionOption`.
	 * @param ctx the parse tree
	 */
	enterPartitionOptionMinRows?: (ctx: PartitionOptionMinRowsContext) => void;
	/**
	 * Exit a parse tree produced by the `partitionOptionMinRows`
	 * labeled alternative in `SqlParser.partitionOption`.
	 * @param ctx the parse tree
	 */
	exitPartitionOptionMinRows?: (ctx: PartitionOptionMinRowsContext) => void;
	/**
	 * Enter a parse tree produced by the `partitionOptionTablespace`
	 * labeled alternative in `SqlParser.partitionOption`.
	 * @param ctx the parse tree
	 */
	enterPartitionOptionTablespace?: (ctx: PartitionOptionTablespaceContext) => void;
	/**
	 * Exit a parse tree produced by the `partitionOptionTablespace`
	 * labeled alternative in `SqlParser.partitionOption`.
	 * @param ctx the parse tree
	 */
	exitPartitionOptionTablespace?: (ctx: PartitionOptionTablespaceContext) => void;
	/**
	 * Enter a parse tree produced by the `partitionOptionNodeGroup`
	 * labeled alternative in `SqlParser.partitionOption`.
	 * @param ctx the parse tree
	 */
	enterPartitionOptionNodeGroup?: (ctx: PartitionOptionNodeGroupContext) => void;
	/**
	 * Exit a parse tree produced by the `partitionOptionNodeGroup`
	 * labeled alternative in `SqlParser.partitionOption`.
	 * @param ctx the parse tree
	 */
	exitPartitionOptionNodeGroup?: (ctx: PartitionOptionNodeGroupContext) => void;
	/**
	 * Enter a parse tree produced by the `alterSimpleDatabase`
	 * labeled alternative in `SqlParser.alterDatabase`.
	 * @param ctx the parse tree
	 */
	enterAlterSimpleDatabase?: (ctx: AlterSimpleDatabaseContext) => void;
	/**
	 * Exit a parse tree produced by the `alterSimpleDatabase`
	 * labeled alternative in `SqlParser.alterDatabase`.
	 * @param ctx the parse tree
	 */
	exitAlterSimpleDatabase?: (ctx: AlterSimpleDatabaseContext) => void;
	/**
	 * Enter a parse tree produced by the `alterUpgradeName`
	 * labeled alternative in `SqlParser.alterDatabase`.
	 * @param ctx the parse tree
	 */
	enterAlterUpgradeName?: (ctx: AlterUpgradeNameContext) => void;
	/**
	 * Exit a parse tree produced by the `alterUpgradeName`
	 * labeled alternative in `SqlParser.alterDatabase`.
	 * @param ctx the parse tree
	 */
	exitAlterUpgradeName?: (ctx: AlterUpgradeNameContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.alterEvent`.
	 * @param ctx the parse tree
	 */
	enterAlterEvent?: (ctx: AlterEventContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.alterEvent`.
	 * @param ctx the parse tree
	 */
	exitAlterEvent?: (ctx: AlterEventContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.alterFunction`.
	 * @param ctx the parse tree
	 */
	enterAlterFunction?: (ctx: AlterFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.alterFunction`.
	 * @param ctx the parse tree
	 */
	exitAlterFunction?: (ctx: AlterFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.alterInstance`.
	 * @param ctx the parse tree
	 */
	enterAlterInstance?: (ctx: AlterInstanceContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.alterInstance`.
	 * @param ctx the parse tree
	 */
	exitAlterInstance?: (ctx: AlterInstanceContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.alterLogfileGroup`.
	 * @param ctx the parse tree
	 */
	enterAlterLogfileGroup?: (ctx: AlterLogfileGroupContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.alterLogfileGroup`.
	 * @param ctx the parse tree
	 */
	exitAlterLogfileGroup?: (ctx: AlterLogfileGroupContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.alterProcedure`.
	 * @param ctx the parse tree
	 */
	enterAlterProcedure?: (ctx: AlterProcedureContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.alterProcedure`.
	 * @param ctx the parse tree
	 */
	exitAlterProcedure?: (ctx: AlterProcedureContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.alterServer`.
	 * @param ctx the parse tree
	 */
	enterAlterServer?: (ctx: AlterServerContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.alterServer`.
	 * @param ctx the parse tree
	 */
	exitAlterServer?: (ctx: AlterServerContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.alterTable`.
	 * @param ctx the parse tree
	 */
	enterAlterTable?: (ctx: AlterTableContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.alterTable`.
	 * @param ctx the parse tree
	 */
	exitAlterTable?: (ctx: AlterTableContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.alterTablespace`.
	 * @param ctx the parse tree
	 */
	enterAlterTablespace?: (ctx: AlterTablespaceContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.alterTablespace`.
	 * @param ctx the parse tree
	 */
	exitAlterTablespace?: (ctx: AlterTablespaceContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.alterView`.
	 * @param ctx the parse tree
	 */
	enterAlterView?: (ctx: AlterViewContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.alterView`.
	 * @param ctx the parse tree
	 */
	exitAlterView?: (ctx: AlterViewContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByTableOption`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByTableOption?: (ctx: AlterByTableOptionContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByTableOption`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByTableOption?: (ctx: AlterByTableOptionContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByAddColumn`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByAddColumn?: (ctx: AlterByAddColumnContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByAddColumn`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByAddColumn?: (ctx: AlterByAddColumnContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByAddColumns`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByAddColumns?: (ctx: AlterByAddColumnsContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByAddColumns`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByAddColumns?: (ctx: AlterByAddColumnsContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByAddIndex`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByAddIndex?: (ctx: AlterByAddIndexContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByAddIndex`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByAddIndex?: (ctx: AlterByAddIndexContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByAddPrimaryKey`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByAddPrimaryKey?: (ctx: AlterByAddPrimaryKeyContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByAddPrimaryKey`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByAddPrimaryKey?: (ctx: AlterByAddPrimaryKeyContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByAddUniqueKey`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByAddUniqueKey?: (ctx: AlterByAddUniqueKeyContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByAddUniqueKey`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByAddUniqueKey?: (ctx: AlterByAddUniqueKeyContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByAddSpecialIndex`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByAddSpecialIndex?: (ctx: AlterByAddSpecialIndexContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByAddSpecialIndex`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByAddSpecialIndex?: (ctx: AlterByAddSpecialIndexContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByAddForeignKey`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByAddForeignKey?: (ctx: AlterByAddForeignKeyContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByAddForeignKey`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByAddForeignKey?: (ctx: AlterByAddForeignKeyContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByAddCheckTableConstraint`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByAddCheckTableConstraint?: (ctx: AlterByAddCheckTableConstraintContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByAddCheckTableConstraint`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByAddCheckTableConstraint?: (ctx: AlterByAddCheckTableConstraintContext) => void;
	/**
	 * Enter a parse tree produced by the `alterBySetAlgorithm`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterBySetAlgorithm?: (ctx: AlterBySetAlgorithmContext) => void;
	/**
	 * Exit a parse tree produced by the `alterBySetAlgorithm`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterBySetAlgorithm?: (ctx: AlterBySetAlgorithmContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByChangeDefault`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByChangeDefault?: (ctx: AlterByChangeDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByChangeDefault`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByChangeDefault?: (ctx: AlterByChangeDefaultContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByChangeColumn`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByChangeColumn?: (ctx: AlterByChangeColumnContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByChangeColumn`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByChangeColumn?: (ctx: AlterByChangeColumnContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByRenameColumn`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByRenameColumn?: (ctx: AlterByRenameColumnContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByRenameColumn`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByRenameColumn?: (ctx: AlterByRenameColumnContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByLock`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByLock?: (ctx: AlterByLockContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByLock`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByLock?: (ctx: AlterByLockContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByModifyColumn`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByModifyColumn?: (ctx: AlterByModifyColumnContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByModifyColumn`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByModifyColumn?: (ctx: AlterByModifyColumnContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByDropColumn`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByDropColumn?: (ctx: AlterByDropColumnContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByDropColumn`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByDropColumn?: (ctx: AlterByDropColumnContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByDropPrimaryKey`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByDropPrimaryKey?: (ctx: AlterByDropPrimaryKeyContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByDropPrimaryKey`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByDropPrimaryKey?: (ctx: AlterByDropPrimaryKeyContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByRenameIndex`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByRenameIndex?: (ctx: AlterByRenameIndexContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByRenameIndex`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByRenameIndex?: (ctx: AlterByRenameIndexContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByAlterIndexVisibility`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByAlterIndexVisibility?: (ctx: AlterByAlterIndexVisibilityContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByAlterIndexVisibility`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByAlterIndexVisibility?: (ctx: AlterByAlterIndexVisibilityContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByDropIndex`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByDropIndex?: (ctx: AlterByDropIndexContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByDropIndex`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByDropIndex?: (ctx: AlterByDropIndexContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByDropForeignKey`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByDropForeignKey?: (ctx: AlterByDropForeignKeyContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByDropForeignKey`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByDropForeignKey?: (ctx: AlterByDropForeignKeyContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByDisableKeys`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByDisableKeys?: (ctx: AlterByDisableKeysContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByDisableKeys`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByDisableKeys?: (ctx: AlterByDisableKeysContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByEnableKeys`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByEnableKeys?: (ctx: AlterByEnableKeysContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByEnableKeys`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByEnableKeys?: (ctx: AlterByEnableKeysContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByRename`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByRename?: (ctx: AlterByRenameContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByRename`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByRename?: (ctx: AlterByRenameContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByOrder`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByOrder?: (ctx: AlterByOrderContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByOrder`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByOrder?: (ctx: AlterByOrderContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByConvertCharset`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByConvertCharset?: (ctx: AlterByConvertCharsetContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByConvertCharset`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByConvertCharset?: (ctx: AlterByConvertCharsetContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByDefaultCharset`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByDefaultCharset?: (ctx: AlterByDefaultCharsetContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByDefaultCharset`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByDefaultCharset?: (ctx: AlterByDefaultCharsetContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByDiscardTablespace`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByDiscardTablespace?: (ctx: AlterByDiscardTablespaceContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByDiscardTablespace`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByDiscardTablespace?: (ctx: AlterByDiscardTablespaceContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByImportTablespace`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByImportTablespace?: (ctx: AlterByImportTablespaceContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByImportTablespace`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByImportTablespace?: (ctx: AlterByImportTablespaceContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByForce`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByForce?: (ctx: AlterByForceContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByForce`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByForce?: (ctx: AlterByForceContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByValidate`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByValidate?: (ctx: AlterByValidateContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByValidate`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByValidate?: (ctx: AlterByValidateContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByAddPartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByAddPartition?: (ctx: AlterByAddPartitionContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByAddPartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByAddPartition?: (ctx: AlterByAddPartitionContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByDropPartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByDropPartition?: (ctx: AlterByDropPartitionContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByDropPartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByDropPartition?: (ctx: AlterByDropPartitionContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByDiscardPartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByDiscardPartition?: (ctx: AlterByDiscardPartitionContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByDiscardPartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByDiscardPartition?: (ctx: AlterByDiscardPartitionContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByImportPartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByImportPartition?: (ctx: AlterByImportPartitionContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByImportPartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByImportPartition?: (ctx: AlterByImportPartitionContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByTruncatePartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByTruncatePartition?: (ctx: AlterByTruncatePartitionContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByTruncatePartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByTruncatePartition?: (ctx: AlterByTruncatePartitionContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByCoalescePartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByCoalescePartition?: (ctx: AlterByCoalescePartitionContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByCoalescePartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByCoalescePartition?: (ctx: AlterByCoalescePartitionContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByReorganizePartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByReorganizePartition?: (ctx: AlterByReorganizePartitionContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByReorganizePartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByReorganizePartition?: (ctx: AlterByReorganizePartitionContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByExchangePartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByExchangePartition?: (ctx: AlterByExchangePartitionContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByExchangePartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByExchangePartition?: (ctx: AlterByExchangePartitionContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByAnalyzePartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByAnalyzePartition?: (ctx: AlterByAnalyzePartitionContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByAnalyzePartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByAnalyzePartition?: (ctx: AlterByAnalyzePartitionContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByCheckPartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByCheckPartition?: (ctx: AlterByCheckPartitionContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByCheckPartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByCheckPartition?: (ctx: AlterByCheckPartitionContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByOptimizePartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByOptimizePartition?: (ctx: AlterByOptimizePartitionContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByOptimizePartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByOptimizePartition?: (ctx: AlterByOptimizePartitionContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByRebuildPartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByRebuildPartition?: (ctx: AlterByRebuildPartitionContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByRebuildPartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByRebuildPartition?: (ctx: AlterByRebuildPartitionContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByRepairPartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByRepairPartition?: (ctx: AlterByRepairPartitionContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByRepairPartition`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByRepairPartition?: (ctx: AlterByRepairPartitionContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByRemovePartitioning`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByRemovePartitioning?: (ctx: AlterByRemovePartitioningContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByRemovePartitioning`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByRemovePartitioning?: (ctx: AlterByRemovePartitioningContext) => void;
	/**
	 * Enter a parse tree produced by the `alterByUpgradePartitioning`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	enterAlterByUpgradePartitioning?: (ctx: AlterByUpgradePartitioningContext) => void;
	/**
	 * Exit a parse tree produced by the `alterByUpgradePartitioning`
	 * labeled alternative in `SqlParser.alterSpecification`.
	 * @param ctx the parse tree
	 */
	exitAlterByUpgradePartitioning?: (ctx: AlterByUpgradePartitioningContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.dropDatabase`.
	 * @param ctx the parse tree
	 */
	enterDropDatabase?: (ctx: DropDatabaseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.dropDatabase`.
	 * @param ctx the parse tree
	 */
	exitDropDatabase?: (ctx: DropDatabaseContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.dropEvent`.
	 * @param ctx the parse tree
	 */
	enterDropEvent?: (ctx: DropEventContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.dropEvent`.
	 * @param ctx the parse tree
	 */
	exitDropEvent?: (ctx: DropEventContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.dropIndex`.
	 * @param ctx the parse tree
	 */
	enterDropIndex?: (ctx: DropIndexContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.dropIndex`.
	 * @param ctx the parse tree
	 */
	exitDropIndex?: (ctx: DropIndexContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.dropLogfileGroup`.
	 * @param ctx the parse tree
	 */
	enterDropLogfileGroup?: (ctx: DropLogfileGroupContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.dropLogfileGroup`.
	 * @param ctx the parse tree
	 */
	exitDropLogfileGroup?: (ctx: DropLogfileGroupContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.dropProcedure`.
	 * @param ctx the parse tree
	 */
	enterDropProcedure?: (ctx: DropProcedureContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.dropProcedure`.
	 * @param ctx the parse tree
	 */
	exitDropProcedure?: (ctx: DropProcedureContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.dropFunction`.
	 * @param ctx the parse tree
	 */
	enterDropFunction?: (ctx: DropFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.dropFunction`.
	 * @param ctx the parse tree
	 */
	exitDropFunction?: (ctx: DropFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.dropServer`.
	 * @param ctx the parse tree
	 */
	enterDropServer?: (ctx: DropServerContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.dropServer`.
	 * @param ctx the parse tree
	 */
	exitDropServer?: (ctx: DropServerContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.dropTable`.
	 * @param ctx the parse tree
	 */
	enterDropTable?: (ctx: DropTableContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.dropTable`.
	 * @param ctx the parse tree
	 */
	exitDropTable?: (ctx: DropTableContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.dropTablespace`.
	 * @param ctx the parse tree
	 */
	enterDropTablespace?: (ctx: DropTablespaceContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.dropTablespace`.
	 * @param ctx the parse tree
	 */
	exitDropTablespace?: (ctx: DropTablespaceContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.dropTrigger`.
	 * @param ctx the parse tree
	 */
	enterDropTrigger?: (ctx: DropTriggerContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.dropTrigger`.
	 * @param ctx the parse tree
	 */
	exitDropTrigger?: (ctx: DropTriggerContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.dropView`.
	 * @param ctx the parse tree
	 */
	enterDropView?: (ctx: DropViewContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.dropView`.
	 * @param ctx the parse tree
	 */
	exitDropView?: (ctx: DropViewContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.renameTable`.
	 * @param ctx the parse tree
	 */
	enterRenameTable?: (ctx: RenameTableContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.renameTable`.
	 * @param ctx the parse tree
	 */
	exitRenameTable?: (ctx: RenameTableContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.renameTableClause`.
	 * @param ctx the parse tree
	 */
	enterRenameTableClause?: (ctx: RenameTableClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.renameTableClause`.
	 * @param ctx the parse tree
	 */
	exitRenameTableClause?: (ctx: RenameTableClauseContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.truncateTable`.
	 * @param ctx the parse tree
	 */
	enterTruncateTable?: (ctx: TruncateTableContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.truncateTable`.
	 * @param ctx the parse tree
	 */
	exitTruncateTable?: (ctx: TruncateTableContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.callStatement`.
	 * @param ctx the parse tree
	 */
	enterCallStatement?: (ctx: CallStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.callStatement`.
	 * @param ctx the parse tree
	 */
	exitCallStatement?: (ctx: CallStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.deleteStatement`.
	 * @param ctx the parse tree
	 */
	enterDeleteStatement?: (ctx: DeleteStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.deleteStatement`.
	 * @param ctx the parse tree
	 */
	exitDeleteStatement?: (ctx: DeleteStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.doStatement`.
	 * @param ctx the parse tree
	 */
	enterDoStatement?: (ctx: DoStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.doStatement`.
	 * @param ctx the parse tree
	 */
	exitDoStatement?: (ctx: DoStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.handlerStatement`.
	 * @param ctx the parse tree
	 */
	enterHandlerStatement?: (ctx: HandlerStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.handlerStatement`.
	 * @param ctx the parse tree
	 */
	exitHandlerStatement?: (ctx: HandlerStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.insertStatement`.
	 * @param ctx the parse tree
	 */
	enterInsertStatement?: (ctx: InsertStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.insertStatement`.
	 * @param ctx the parse tree
	 */
	exitInsertStatement?: (ctx: InsertStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.loadDataStatement`.
	 * @param ctx the parse tree
	 */
	enterLoadDataStatement?: (ctx: LoadDataStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.loadDataStatement`.
	 * @param ctx the parse tree
	 */
	exitLoadDataStatement?: (ctx: LoadDataStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.loadXmlStatement`.
	 * @param ctx the parse tree
	 */
	enterLoadXmlStatement?: (ctx: LoadXmlStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.loadXmlStatement`.
	 * @param ctx the parse tree
	 */
	exitLoadXmlStatement?: (ctx: LoadXmlStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.replaceStatement`.
	 * @param ctx the parse tree
	 */
	enterReplaceStatement?: (ctx: ReplaceStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.replaceStatement`.
	 * @param ctx the parse tree
	 */
	exitReplaceStatement?: (ctx: ReplaceStatementContext) => void;
	/**
	 * Enter a parse tree produced by the `simpleSelect`
	 * labeled alternative in `SqlParser.selectStatement`.
	 * @param ctx the parse tree
	 */
	enterSimpleSelect?: (ctx: SimpleSelectContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleSelect`
	 * labeled alternative in `SqlParser.selectStatement`.
	 * @param ctx the parse tree
	 */
	exitSimpleSelect?: (ctx: SimpleSelectContext) => void;
	/**
	 * Enter a parse tree produced by the `parenthesisSelect`
	 * labeled alternative in `SqlParser.selectStatement`.
	 * @param ctx the parse tree
	 */
	enterParenthesisSelect?: (ctx: ParenthesisSelectContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesisSelect`
	 * labeled alternative in `SqlParser.selectStatement`.
	 * @param ctx the parse tree
	 */
	exitParenthesisSelect?: (ctx: ParenthesisSelectContext) => void;
	/**
	 * Enter a parse tree produced by the `unionSelect`
	 * labeled alternative in `SqlParser.selectStatement`.
	 * @param ctx the parse tree
	 */
	enterUnionSelect?: (ctx: UnionSelectContext) => void;
	/**
	 * Exit a parse tree produced by the `unionSelect`
	 * labeled alternative in `SqlParser.selectStatement`.
	 * @param ctx the parse tree
	 */
	exitUnionSelect?: (ctx: UnionSelectContext) => void;
	/**
	 * Enter a parse tree produced by the `unionParenthesisSelect`
	 * labeled alternative in `SqlParser.selectStatement`.
	 * @param ctx the parse tree
	 */
	enterUnionParenthesisSelect?: (ctx: UnionParenthesisSelectContext) => void;
	/**
	 * Exit a parse tree produced by the `unionParenthesisSelect`
	 * labeled alternative in `SqlParser.selectStatement`.
	 * @param ctx the parse tree
	 */
	exitUnionParenthesisSelect?: (ctx: UnionParenthesisSelectContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.updateStatement`.
	 * @param ctx the parse tree
	 */
	enterUpdateStatement?: (ctx: UpdateStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.updateStatement`.
	 * @param ctx the parse tree
	 */
	exitUpdateStatement?: (ctx: UpdateStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.insertStatementValue`.
	 * @param ctx the parse tree
	 */
	enterInsertStatementValue?: (ctx: InsertStatementValueContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.insertStatementValue`.
	 * @param ctx the parse tree
	 */
	exitInsertStatementValue?: (ctx: InsertStatementValueContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.updatedElement`.
	 * @param ctx the parse tree
	 */
	enterUpdatedElement?: (ctx: UpdatedElementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.updatedElement`.
	 * @param ctx the parse tree
	 */
	exitUpdatedElement?: (ctx: UpdatedElementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.assignmentField`.
	 * @param ctx the parse tree
	 */
	enterAssignmentField?: (ctx: AssignmentFieldContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.assignmentField`.
	 * @param ctx the parse tree
	 */
	exitAssignmentField?: (ctx: AssignmentFieldContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.lockClause`.
	 * @param ctx the parse tree
	 */
	enterLockClause?: (ctx: LockClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.lockClause`.
	 * @param ctx the parse tree
	 */
	exitLockClause?: (ctx: LockClauseContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.singleDeleteStatement`.
	 * @param ctx the parse tree
	 */
	enterSingleDeleteStatement?: (ctx: SingleDeleteStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.singleDeleteStatement`.
	 * @param ctx the parse tree
	 */
	exitSingleDeleteStatement?: (ctx: SingleDeleteStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.multipleDeleteStatement`.
	 * @param ctx the parse tree
	 */
	enterMultipleDeleteStatement?: (ctx: MultipleDeleteStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.multipleDeleteStatement`.
	 * @param ctx the parse tree
	 */
	exitMultipleDeleteStatement?: (ctx: MultipleDeleteStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.handlerOpenStatement`.
	 * @param ctx the parse tree
	 */
	enterHandlerOpenStatement?: (ctx: HandlerOpenStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.handlerOpenStatement`.
	 * @param ctx the parse tree
	 */
	exitHandlerOpenStatement?: (ctx: HandlerOpenStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.handlerReadIndexStatement`.
	 * @param ctx the parse tree
	 */
	enterHandlerReadIndexStatement?: (ctx: HandlerReadIndexStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.handlerReadIndexStatement`.
	 * @param ctx the parse tree
	 */
	exitHandlerReadIndexStatement?: (ctx: HandlerReadIndexStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.handlerReadStatement`.
	 * @param ctx the parse tree
	 */
	enterHandlerReadStatement?: (ctx: HandlerReadStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.handlerReadStatement`.
	 * @param ctx the parse tree
	 */
	exitHandlerReadStatement?: (ctx: HandlerReadStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.handlerCloseStatement`.
	 * @param ctx the parse tree
	 */
	enterHandlerCloseStatement?: (ctx: HandlerCloseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.handlerCloseStatement`.
	 * @param ctx the parse tree
	 */
	exitHandlerCloseStatement?: (ctx: HandlerCloseStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.singleUpdateStatement`.
	 * @param ctx the parse tree
	 */
	enterSingleUpdateStatement?: (ctx: SingleUpdateStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.singleUpdateStatement`.
	 * @param ctx the parse tree
	 */
	exitSingleUpdateStatement?: (ctx: SingleUpdateStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.multipleUpdateStatement`.
	 * @param ctx the parse tree
	 */
	enterMultipleUpdateStatement?: (ctx: MultipleUpdateStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.multipleUpdateStatement`.
	 * @param ctx the parse tree
	 */
	exitMultipleUpdateStatement?: (ctx: MultipleUpdateStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.orderByClause`.
	 * @param ctx the parse tree
	 */
	enterOrderByClause?: (ctx: OrderByClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.orderByClause`.
	 * @param ctx the parse tree
	 */
	exitOrderByClause?: (ctx: OrderByClauseContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.orderByExpression`.
	 * @param ctx the parse tree
	 */
	enterOrderByExpression?: (ctx: OrderByExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.orderByExpression`.
	 * @param ctx the parse tree
	 */
	exitOrderByExpression?: (ctx: OrderByExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.tableSources`.
	 * @param ctx the parse tree
	 */
	enterTableSources?: (ctx: TableSourcesContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.tableSources`.
	 * @param ctx the parse tree
	 */
	exitTableSources?: (ctx: TableSourcesContext) => void;
	/**
	 * Enter a parse tree produced by the `tableSourceBase`
	 * labeled alternative in `SqlParser.tableSource`.
	 * @param ctx the parse tree
	 */
	enterTableSourceBase?: (ctx: TableSourceBaseContext) => void;
	/**
	 * Exit a parse tree produced by the `tableSourceBase`
	 * labeled alternative in `SqlParser.tableSource`.
	 * @param ctx the parse tree
	 */
	exitTableSourceBase?: (ctx: TableSourceBaseContext) => void;
	/**
	 * Enter a parse tree produced by the `tableSourceNested`
	 * labeled alternative in `SqlParser.tableSource`.
	 * @param ctx the parse tree
	 */
	enterTableSourceNested?: (ctx: TableSourceNestedContext) => void;
	/**
	 * Exit a parse tree produced by the `tableSourceNested`
	 * labeled alternative in `SqlParser.tableSource`.
	 * @param ctx the parse tree
	 */
	exitTableSourceNested?: (ctx: TableSourceNestedContext) => void;
	/**
	 * Enter a parse tree produced by the `atomTableItem`
	 * labeled alternative in `SqlParser.tableSourceItem`.
	 * @param ctx the parse tree
	 */
	enterAtomTableItem?: (ctx: AtomTableItemContext) => void;
	/**
	 * Exit a parse tree produced by the `atomTableItem`
	 * labeled alternative in `SqlParser.tableSourceItem`.
	 * @param ctx the parse tree
	 */
	exitAtomTableItem?: (ctx: AtomTableItemContext) => void;
	/**
	 * Enter a parse tree produced by the `subqueryTableItem`
	 * labeled alternative in `SqlParser.tableSourceItem`.
	 * @param ctx the parse tree
	 */
	enterSubqueryTableItem?: (ctx: SubqueryTableItemContext) => void;
	/**
	 * Exit a parse tree produced by the `subqueryTableItem`
	 * labeled alternative in `SqlParser.tableSourceItem`.
	 * @param ctx the parse tree
	 */
	exitSubqueryTableItem?: (ctx: SubqueryTableItemContext) => void;
	/**
	 * Enter a parse tree produced by the `tableSourcesItem`
	 * labeled alternative in `SqlParser.tableSourceItem`.
	 * @param ctx the parse tree
	 */
	enterTableSourcesItem?: (ctx: TableSourcesItemContext) => void;
	/**
	 * Exit a parse tree produced by the `tableSourcesItem`
	 * labeled alternative in `SqlParser.tableSourceItem`.
	 * @param ctx the parse tree
	 */
	exitTableSourcesItem?: (ctx: TableSourcesItemContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.indexHint`.
	 * @param ctx the parse tree
	 */
	enterIndexHint?: (ctx: IndexHintContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.indexHint`.
	 * @param ctx the parse tree
	 */
	exitIndexHint?: (ctx: IndexHintContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.indexHintType`.
	 * @param ctx the parse tree
	 */
	enterIndexHintType?: (ctx: IndexHintTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.indexHintType`.
	 * @param ctx the parse tree
	 */
	exitIndexHintType?: (ctx: IndexHintTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `innerJoin`
	 * labeled alternative in `SqlParser.joinPart`.
	 * @param ctx the parse tree
	 */
	enterInnerJoin?: (ctx: InnerJoinContext) => void;
	/**
	 * Exit a parse tree produced by the `innerJoin`
	 * labeled alternative in `SqlParser.joinPart`.
	 * @param ctx the parse tree
	 */
	exitInnerJoin?: (ctx: InnerJoinContext) => void;
	/**
	 * Enter a parse tree produced by the `straightJoin`
	 * labeled alternative in `SqlParser.joinPart`.
	 * @param ctx the parse tree
	 */
	enterStraightJoin?: (ctx: StraightJoinContext) => void;
	/**
	 * Exit a parse tree produced by the `straightJoin`
	 * labeled alternative in `SqlParser.joinPart`.
	 * @param ctx the parse tree
	 */
	exitStraightJoin?: (ctx: StraightJoinContext) => void;
	/**
	 * Enter a parse tree produced by the `outerJoin`
	 * labeled alternative in `SqlParser.joinPart`.
	 * @param ctx the parse tree
	 */
	enterOuterJoin?: (ctx: OuterJoinContext) => void;
	/**
	 * Exit a parse tree produced by the `outerJoin`
	 * labeled alternative in `SqlParser.joinPart`.
	 * @param ctx the parse tree
	 */
	exitOuterJoin?: (ctx: OuterJoinContext) => void;
	/**
	 * Enter a parse tree produced by the `naturalJoin`
	 * labeled alternative in `SqlParser.joinPart`.
	 * @param ctx the parse tree
	 */
	enterNaturalJoin?: (ctx: NaturalJoinContext) => void;
	/**
	 * Exit a parse tree produced by the `naturalJoin`
	 * labeled alternative in `SqlParser.joinPart`.
	 * @param ctx the parse tree
	 */
	exitNaturalJoin?: (ctx: NaturalJoinContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.queryExpression`.
	 * @param ctx the parse tree
	 */
	enterQueryExpression?: (ctx: QueryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.queryExpression`.
	 * @param ctx the parse tree
	 */
	exitQueryExpression?: (ctx: QueryExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.queryExpressionNointo`.
	 * @param ctx the parse tree
	 */
	enterQueryExpressionNointo?: (ctx: QueryExpressionNointoContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.queryExpressionNointo`.
	 * @param ctx the parse tree
	 */
	exitQueryExpressionNointo?: (ctx: QueryExpressionNointoContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.querySpecification`.
	 * @param ctx the parse tree
	 */
	enterQuerySpecification?: (ctx: QuerySpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.querySpecification`.
	 * @param ctx the parse tree
	 */
	exitQuerySpecification?: (ctx: QuerySpecificationContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.querySpecificationNointo`.
	 * @param ctx the parse tree
	 */
	enterQuerySpecificationNointo?: (ctx: QuerySpecificationNointoContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.querySpecificationNointo`.
	 * @param ctx the parse tree
	 */
	exitQuerySpecificationNointo?: (ctx: QuerySpecificationNointoContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.unionParenthesis`.
	 * @param ctx the parse tree
	 */
	enterUnionParenthesis?: (ctx: UnionParenthesisContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.unionParenthesis`.
	 * @param ctx the parse tree
	 */
	exitUnionParenthesis?: (ctx: UnionParenthesisContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.unionStatement`.
	 * @param ctx the parse tree
	 */
	enterUnionStatement?: (ctx: UnionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.unionStatement`.
	 * @param ctx the parse tree
	 */
	exitUnionStatement?: (ctx: UnionStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.selectSpec`.
	 * @param ctx the parse tree
	 */
	enterSelectSpec?: (ctx: SelectSpecContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.selectSpec`.
	 * @param ctx the parse tree
	 */
	exitSelectSpec?: (ctx: SelectSpecContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.selectElements`.
	 * @param ctx the parse tree
	 */
	enterSelectElements?: (ctx: SelectElementsContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.selectElements`.
	 * @param ctx the parse tree
	 */
	exitSelectElements?: (ctx: SelectElementsContext) => void;
	/**
	 * Enter a parse tree produced by the `selectStarElement`
	 * labeled alternative in `SqlParser.selectElement`.
	 * @param ctx the parse tree
	 */
	enterSelectStarElement?: (ctx: SelectStarElementContext) => void;
	/**
	 * Exit a parse tree produced by the `selectStarElement`
	 * labeled alternative in `SqlParser.selectElement`.
	 * @param ctx the parse tree
	 */
	exitSelectStarElement?: (ctx: SelectStarElementContext) => void;
	/**
	 * Enter a parse tree produced by the `selectColumnElement`
	 * labeled alternative in `SqlParser.selectElement`.
	 * @param ctx the parse tree
	 */
	enterSelectColumnElement?: (ctx: SelectColumnElementContext) => void;
	/**
	 * Exit a parse tree produced by the `selectColumnElement`
	 * labeled alternative in `SqlParser.selectElement`.
	 * @param ctx the parse tree
	 */
	exitSelectColumnElement?: (ctx: SelectColumnElementContext) => void;
	/**
	 * Enter a parse tree produced by the `selectFunctionElement`
	 * labeled alternative in `SqlParser.selectElement`.
	 * @param ctx the parse tree
	 */
	enterSelectFunctionElement?: (ctx: SelectFunctionElementContext) => void;
	/**
	 * Exit a parse tree produced by the `selectFunctionElement`
	 * labeled alternative in `SqlParser.selectElement`.
	 * @param ctx the parse tree
	 */
	exitSelectFunctionElement?: (ctx: SelectFunctionElementContext) => void;
	/**
	 * Enter a parse tree produced by the `selectExpressionElement`
	 * labeled alternative in `SqlParser.selectElement`.
	 * @param ctx the parse tree
	 */
	enterSelectExpressionElement?: (ctx: SelectExpressionElementContext) => void;
	/**
	 * Exit a parse tree produced by the `selectExpressionElement`
	 * labeled alternative in `SqlParser.selectElement`.
	 * @param ctx the parse tree
	 */
	exitSelectExpressionElement?: (ctx: SelectExpressionElementContext) => void;
	/**
	 * Enter a parse tree produced by the `selectIntoVariables`
	 * labeled alternative in `SqlParser.selectIntoExpression`.
	 * @param ctx the parse tree
	 */
	enterSelectIntoVariables?: (ctx: SelectIntoVariablesContext) => void;
	/**
	 * Exit a parse tree produced by the `selectIntoVariables`
	 * labeled alternative in `SqlParser.selectIntoExpression`.
	 * @param ctx the parse tree
	 */
	exitSelectIntoVariables?: (ctx: SelectIntoVariablesContext) => void;
	/**
	 * Enter a parse tree produced by the `selectIntoDumpFile`
	 * labeled alternative in `SqlParser.selectIntoExpression`.
	 * @param ctx the parse tree
	 */
	enterSelectIntoDumpFile?: (ctx: SelectIntoDumpFileContext) => void;
	/**
	 * Exit a parse tree produced by the `selectIntoDumpFile`
	 * labeled alternative in `SqlParser.selectIntoExpression`.
	 * @param ctx the parse tree
	 */
	exitSelectIntoDumpFile?: (ctx: SelectIntoDumpFileContext) => void;
	/**
	 * Enter a parse tree produced by the `selectIntoTextFile`
	 * labeled alternative in `SqlParser.selectIntoExpression`.
	 * @param ctx the parse tree
	 */
	enterSelectIntoTextFile?: (ctx: SelectIntoTextFileContext) => void;
	/**
	 * Exit a parse tree produced by the `selectIntoTextFile`
	 * labeled alternative in `SqlParser.selectIntoExpression`.
	 * @param ctx the parse tree
	 */
	exitSelectIntoTextFile?: (ctx: SelectIntoTextFileContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.selectFieldsInto`.
	 * @param ctx the parse tree
	 */
	enterSelectFieldsInto?: (ctx: SelectFieldsIntoContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.selectFieldsInto`.
	 * @param ctx the parse tree
	 */
	exitSelectFieldsInto?: (ctx: SelectFieldsIntoContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.selectLinesInto`.
	 * @param ctx the parse tree
	 */
	enterSelectLinesInto?: (ctx: SelectLinesIntoContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.selectLinesInto`.
	 * @param ctx the parse tree
	 */
	exitSelectLinesInto?: (ctx: SelectLinesIntoContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.fromClause`.
	 * @param ctx the parse tree
	 */
	enterFromClause?: (ctx: FromClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.fromClause`.
	 * @param ctx the parse tree
	 */
	exitFromClause?: (ctx: FromClauseContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.groupByItem`.
	 * @param ctx the parse tree
	 */
	enterGroupByItem?: (ctx: GroupByItemContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.groupByItem`.
	 * @param ctx the parse tree
	 */
	exitGroupByItem?: (ctx: GroupByItemContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.limitClause`.
	 * @param ctx the parse tree
	 */
	enterLimitClause?: (ctx: LimitClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.limitClause`.
	 * @param ctx the parse tree
	 */
	exitLimitClause?: (ctx: LimitClauseContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.limitClauseAtom`.
	 * @param ctx the parse tree
	 */
	enterLimitClauseAtom?: (ctx: LimitClauseAtomContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.limitClauseAtom`.
	 * @param ctx the parse tree
	 */
	exitLimitClauseAtom?: (ctx: LimitClauseAtomContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.startTransaction`.
	 * @param ctx the parse tree
	 */
	enterStartTransaction?: (ctx: StartTransactionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.startTransaction`.
	 * @param ctx the parse tree
	 */
	exitStartTransaction?: (ctx: StartTransactionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.beginWork`.
	 * @param ctx the parse tree
	 */
	enterBeginWork?: (ctx: BeginWorkContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.beginWork`.
	 * @param ctx the parse tree
	 */
	exitBeginWork?: (ctx: BeginWorkContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.commitWork`.
	 * @param ctx the parse tree
	 */
	enterCommitWork?: (ctx: CommitWorkContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.commitWork`.
	 * @param ctx the parse tree
	 */
	exitCommitWork?: (ctx: CommitWorkContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.rollbackWork`.
	 * @param ctx the parse tree
	 */
	enterRollbackWork?: (ctx: RollbackWorkContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.rollbackWork`.
	 * @param ctx the parse tree
	 */
	exitRollbackWork?: (ctx: RollbackWorkContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.savepointStatement`.
	 * @param ctx the parse tree
	 */
	enterSavepointStatement?: (ctx: SavepointStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.savepointStatement`.
	 * @param ctx the parse tree
	 */
	exitSavepointStatement?: (ctx: SavepointStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.rollbackStatement`.
	 * @param ctx the parse tree
	 */
	enterRollbackStatement?: (ctx: RollbackStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.rollbackStatement`.
	 * @param ctx the parse tree
	 */
	exitRollbackStatement?: (ctx: RollbackStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.releaseStatement`.
	 * @param ctx the parse tree
	 */
	enterReleaseStatement?: (ctx: ReleaseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.releaseStatement`.
	 * @param ctx the parse tree
	 */
	exitReleaseStatement?: (ctx: ReleaseStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.lockTables`.
	 * @param ctx the parse tree
	 */
	enterLockTables?: (ctx: LockTablesContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.lockTables`.
	 * @param ctx the parse tree
	 */
	exitLockTables?: (ctx: LockTablesContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.unlockTables`.
	 * @param ctx the parse tree
	 */
	enterUnlockTables?: (ctx: UnlockTablesContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.unlockTables`.
	 * @param ctx the parse tree
	 */
	exitUnlockTables?: (ctx: UnlockTablesContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.setAutocommitStatement`.
	 * @param ctx the parse tree
	 */
	enterSetAutocommitStatement?: (ctx: SetAutocommitStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.setAutocommitStatement`.
	 * @param ctx the parse tree
	 */
	exitSetAutocommitStatement?: (ctx: SetAutocommitStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.setTransactionStatement`.
	 * @param ctx the parse tree
	 */
	enterSetTransactionStatement?: (ctx: SetTransactionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.setTransactionStatement`.
	 * @param ctx the parse tree
	 */
	exitSetTransactionStatement?: (ctx: SetTransactionStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.transactionMode`.
	 * @param ctx the parse tree
	 */
	enterTransactionMode?: (ctx: TransactionModeContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.transactionMode`.
	 * @param ctx the parse tree
	 */
	exitTransactionMode?: (ctx: TransactionModeContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.lockTableElement`.
	 * @param ctx the parse tree
	 */
	enterLockTableElement?: (ctx: LockTableElementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.lockTableElement`.
	 * @param ctx the parse tree
	 */
	exitLockTableElement?: (ctx: LockTableElementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.lockAction`.
	 * @param ctx the parse tree
	 */
	enterLockAction?: (ctx: LockActionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.lockAction`.
	 * @param ctx the parse tree
	 */
	exitLockAction?: (ctx: LockActionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.transactionOption`.
	 * @param ctx the parse tree
	 */
	enterTransactionOption?: (ctx: TransactionOptionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.transactionOption`.
	 * @param ctx the parse tree
	 */
	exitTransactionOption?: (ctx: TransactionOptionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.transactionLevel`.
	 * @param ctx the parse tree
	 */
	enterTransactionLevel?: (ctx: TransactionLevelContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.transactionLevel`.
	 * @param ctx the parse tree
	 */
	exitTransactionLevel?: (ctx: TransactionLevelContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.changeMaster`.
	 * @param ctx the parse tree
	 */
	enterChangeMaster?: (ctx: ChangeMasterContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.changeMaster`.
	 * @param ctx the parse tree
	 */
	exitChangeMaster?: (ctx: ChangeMasterContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.changeReplicationFilter`.
	 * @param ctx the parse tree
	 */
	enterChangeReplicationFilter?: (ctx: ChangeReplicationFilterContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.changeReplicationFilter`.
	 * @param ctx the parse tree
	 */
	exitChangeReplicationFilter?: (ctx: ChangeReplicationFilterContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.purgeBinaryLogs`.
	 * @param ctx the parse tree
	 */
	enterPurgeBinaryLogs?: (ctx: PurgeBinaryLogsContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.purgeBinaryLogs`.
	 * @param ctx the parse tree
	 */
	exitPurgeBinaryLogs?: (ctx: PurgeBinaryLogsContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.resetMaster`.
	 * @param ctx the parse tree
	 */
	enterResetMaster?: (ctx: ResetMasterContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.resetMaster`.
	 * @param ctx the parse tree
	 */
	exitResetMaster?: (ctx: ResetMasterContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.resetSlave`.
	 * @param ctx the parse tree
	 */
	enterResetSlave?: (ctx: ResetSlaveContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.resetSlave`.
	 * @param ctx the parse tree
	 */
	exitResetSlave?: (ctx: ResetSlaveContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.startSlave`.
	 * @param ctx the parse tree
	 */
	enterStartSlave?: (ctx: StartSlaveContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.startSlave`.
	 * @param ctx the parse tree
	 */
	exitStartSlave?: (ctx: StartSlaveContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.stopSlave`.
	 * @param ctx the parse tree
	 */
	enterStopSlave?: (ctx: StopSlaveContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.stopSlave`.
	 * @param ctx the parse tree
	 */
	exitStopSlave?: (ctx: StopSlaveContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.startGroupReplication`.
	 * @param ctx the parse tree
	 */
	enterStartGroupReplication?: (ctx: StartGroupReplicationContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.startGroupReplication`.
	 * @param ctx the parse tree
	 */
	exitStartGroupReplication?: (ctx: StartGroupReplicationContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.stopGroupReplication`.
	 * @param ctx the parse tree
	 */
	enterStopGroupReplication?: (ctx: StopGroupReplicationContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.stopGroupReplication`.
	 * @param ctx the parse tree
	 */
	exitStopGroupReplication?: (ctx: StopGroupReplicationContext) => void;
	/**
	 * Enter a parse tree produced by the `masterStringOption`
	 * labeled alternative in `SqlParser.masterOption`.
	 * @param ctx the parse tree
	 */
	enterMasterStringOption?: (ctx: MasterStringOptionContext) => void;
	/**
	 * Exit a parse tree produced by the `masterStringOption`
	 * labeled alternative in `SqlParser.masterOption`.
	 * @param ctx the parse tree
	 */
	exitMasterStringOption?: (ctx: MasterStringOptionContext) => void;
	/**
	 * Enter a parse tree produced by the `masterDecimalOption`
	 * labeled alternative in `SqlParser.masterOption`.
	 * @param ctx the parse tree
	 */
	enterMasterDecimalOption?: (ctx: MasterDecimalOptionContext) => void;
	/**
	 * Exit a parse tree produced by the `masterDecimalOption`
	 * labeled alternative in `SqlParser.masterOption`.
	 * @param ctx the parse tree
	 */
	exitMasterDecimalOption?: (ctx: MasterDecimalOptionContext) => void;
	/**
	 * Enter a parse tree produced by the `masterBoolOption`
	 * labeled alternative in `SqlParser.masterOption`.
	 * @param ctx the parse tree
	 */
	enterMasterBoolOption?: (ctx: MasterBoolOptionContext) => void;
	/**
	 * Exit a parse tree produced by the `masterBoolOption`
	 * labeled alternative in `SqlParser.masterOption`.
	 * @param ctx the parse tree
	 */
	exitMasterBoolOption?: (ctx: MasterBoolOptionContext) => void;
	/**
	 * Enter a parse tree produced by the `masterRealOption`
	 * labeled alternative in `SqlParser.masterOption`.
	 * @param ctx the parse tree
	 */
	enterMasterRealOption?: (ctx: MasterRealOptionContext) => void;
	/**
	 * Exit a parse tree produced by the `masterRealOption`
	 * labeled alternative in `SqlParser.masterOption`.
	 * @param ctx the parse tree
	 */
	exitMasterRealOption?: (ctx: MasterRealOptionContext) => void;
	/**
	 * Enter a parse tree produced by the `masterUidListOption`
	 * labeled alternative in `SqlParser.masterOption`.
	 * @param ctx the parse tree
	 */
	enterMasterUidListOption?: (ctx: MasterUidListOptionContext) => void;
	/**
	 * Exit a parse tree produced by the `masterUidListOption`
	 * labeled alternative in `SqlParser.masterOption`.
	 * @param ctx the parse tree
	 */
	exitMasterUidListOption?: (ctx: MasterUidListOptionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.stringMasterOption`.
	 * @param ctx the parse tree
	 */
	enterStringMasterOption?: (ctx: StringMasterOptionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.stringMasterOption`.
	 * @param ctx the parse tree
	 */
	exitStringMasterOption?: (ctx: StringMasterOptionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.decimalMasterOption`.
	 * @param ctx the parse tree
	 */
	enterDecimalMasterOption?: (ctx: DecimalMasterOptionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.decimalMasterOption`.
	 * @param ctx the parse tree
	 */
	exitDecimalMasterOption?: (ctx: DecimalMasterOptionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.boolMasterOption`.
	 * @param ctx the parse tree
	 */
	enterBoolMasterOption?: (ctx: BoolMasterOptionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.boolMasterOption`.
	 * @param ctx the parse tree
	 */
	exitBoolMasterOption?: (ctx: BoolMasterOptionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.channelOption`.
	 * @param ctx the parse tree
	 */
	enterChannelOption?: (ctx: ChannelOptionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.channelOption`.
	 * @param ctx the parse tree
	 */
	exitChannelOption?: (ctx: ChannelOptionContext) => void;
	/**
	 * Enter a parse tree produced by the `doDbReplication`
	 * labeled alternative in `SqlParser.replicationFilter`.
	 * @param ctx the parse tree
	 */
	enterDoDbReplication?: (ctx: DoDbReplicationContext) => void;
	/**
	 * Exit a parse tree produced by the `doDbReplication`
	 * labeled alternative in `SqlParser.replicationFilter`.
	 * @param ctx the parse tree
	 */
	exitDoDbReplication?: (ctx: DoDbReplicationContext) => void;
	/**
	 * Enter a parse tree produced by the `ignoreDbReplication`
	 * labeled alternative in `SqlParser.replicationFilter`.
	 * @param ctx the parse tree
	 */
	enterIgnoreDbReplication?: (ctx: IgnoreDbReplicationContext) => void;
	/**
	 * Exit a parse tree produced by the `ignoreDbReplication`
	 * labeled alternative in `SqlParser.replicationFilter`.
	 * @param ctx the parse tree
	 */
	exitIgnoreDbReplication?: (ctx: IgnoreDbReplicationContext) => void;
	/**
	 * Enter a parse tree produced by the `doTableReplication`
	 * labeled alternative in `SqlParser.replicationFilter`.
	 * @param ctx the parse tree
	 */
	enterDoTableReplication?: (ctx: DoTableReplicationContext) => void;
	/**
	 * Exit a parse tree produced by the `doTableReplication`
	 * labeled alternative in `SqlParser.replicationFilter`.
	 * @param ctx the parse tree
	 */
	exitDoTableReplication?: (ctx: DoTableReplicationContext) => void;
	/**
	 * Enter a parse tree produced by the `ignoreTableReplication`
	 * labeled alternative in `SqlParser.replicationFilter`.
	 * @param ctx the parse tree
	 */
	enterIgnoreTableReplication?: (ctx: IgnoreTableReplicationContext) => void;
	/**
	 * Exit a parse tree produced by the `ignoreTableReplication`
	 * labeled alternative in `SqlParser.replicationFilter`.
	 * @param ctx the parse tree
	 */
	exitIgnoreTableReplication?: (ctx: IgnoreTableReplicationContext) => void;
	/**
	 * Enter a parse tree produced by the `wildDoTableReplication`
	 * labeled alternative in `SqlParser.replicationFilter`.
	 * @param ctx the parse tree
	 */
	enterWildDoTableReplication?: (ctx: WildDoTableReplicationContext) => void;
	/**
	 * Exit a parse tree produced by the `wildDoTableReplication`
	 * labeled alternative in `SqlParser.replicationFilter`.
	 * @param ctx the parse tree
	 */
	exitWildDoTableReplication?: (ctx: WildDoTableReplicationContext) => void;
	/**
	 * Enter a parse tree produced by the `wildIgnoreTableReplication`
	 * labeled alternative in `SqlParser.replicationFilter`.
	 * @param ctx the parse tree
	 */
	enterWildIgnoreTableReplication?: (ctx: WildIgnoreTableReplicationContext) => void;
	/**
	 * Exit a parse tree produced by the `wildIgnoreTableReplication`
	 * labeled alternative in `SqlParser.replicationFilter`.
	 * @param ctx the parse tree
	 */
	exitWildIgnoreTableReplication?: (ctx: WildIgnoreTableReplicationContext) => void;
	/**
	 * Enter a parse tree produced by the `rewriteDbReplication`
	 * labeled alternative in `SqlParser.replicationFilter`.
	 * @param ctx the parse tree
	 */
	enterRewriteDbReplication?: (ctx: RewriteDbReplicationContext) => void;
	/**
	 * Exit a parse tree produced by the `rewriteDbReplication`
	 * labeled alternative in `SqlParser.replicationFilter`.
	 * @param ctx the parse tree
	 */
	exitRewriteDbReplication?: (ctx: RewriteDbReplicationContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.tablePair`.
	 * @param ctx the parse tree
	 */
	enterTablePair?: (ctx: TablePairContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.tablePair`.
	 * @param ctx the parse tree
	 */
	exitTablePair?: (ctx: TablePairContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.threadType`.
	 * @param ctx the parse tree
	 */
	enterThreadType?: (ctx: ThreadTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.threadType`.
	 * @param ctx the parse tree
	 */
	exitThreadType?: (ctx: ThreadTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `gtidsUntilOption`
	 * labeled alternative in `SqlParser.untilOption`.
	 * @param ctx the parse tree
	 */
	enterGtidsUntilOption?: (ctx: GtidsUntilOptionContext) => void;
	/**
	 * Exit a parse tree produced by the `gtidsUntilOption`
	 * labeled alternative in `SqlParser.untilOption`.
	 * @param ctx the parse tree
	 */
	exitGtidsUntilOption?: (ctx: GtidsUntilOptionContext) => void;
	/**
	 * Enter a parse tree produced by the `masterLogUntilOption`
	 * labeled alternative in `SqlParser.untilOption`.
	 * @param ctx the parse tree
	 */
	enterMasterLogUntilOption?: (ctx: MasterLogUntilOptionContext) => void;
	/**
	 * Exit a parse tree produced by the `masterLogUntilOption`
	 * labeled alternative in `SqlParser.untilOption`.
	 * @param ctx the parse tree
	 */
	exitMasterLogUntilOption?: (ctx: MasterLogUntilOptionContext) => void;
	/**
	 * Enter a parse tree produced by the `relayLogUntilOption`
	 * labeled alternative in `SqlParser.untilOption`.
	 * @param ctx the parse tree
	 */
	enterRelayLogUntilOption?: (ctx: RelayLogUntilOptionContext) => void;
	/**
	 * Exit a parse tree produced by the `relayLogUntilOption`
	 * labeled alternative in `SqlParser.untilOption`.
	 * @param ctx the parse tree
	 */
	exitRelayLogUntilOption?: (ctx: RelayLogUntilOptionContext) => void;
	/**
	 * Enter a parse tree produced by the `sqlGapsUntilOption`
	 * labeled alternative in `SqlParser.untilOption`.
	 * @param ctx the parse tree
	 */
	enterSqlGapsUntilOption?: (ctx: SqlGapsUntilOptionContext) => void;
	/**
	 * Exit a parse tree produced by the `sqlGapsUntilOption`
	 * labeled alternative in `SqlParser.untilOption`.
	 * @param ctx the parse tree
	 */
	exitSqlGapsUntilOption?: (ctx: SqlGapsUntilOptionContext) => void;
	/**
	 * Enter a parse tree produced by the `userConnectionOption`
	 * labeled alternative in `SqlParser.connectionOption`.
	 * @param ctx the parse tree
	 */
	enterUserConnectionOption?: (ctx: UserConnectionOptionContext) => void;
	/**
	 * Exit a parse tree produced by the `userConnectionOption`
	 * labeled alternative in `SqlParser.connectionOption`.
	 * @param ctx the parse tree
	 */
	exitUserConnectionOption?: (ctx: UserConnectionOptionContext) => void;
	/**
	 * Enter a parse tree produced by the `passwordConnectionOption`
	 * labeled alternative in `SqlParser.connectionOption`.
	 * @param ctx the parse tree
	 */
	enterPasswordConnectionOption?: (ctx: PasswordConnectionOptionContext) => void;
	/**
	 * Exit a parse tree produced by the `passwordConnectionOption`
	 * labeled alternative in `SqlParser.connectionOption`.
	 * @param ctx the parse tree
	 */
	exitPasswordConnectionOption?: (ctx: PasswordConnectionOptionContext) => void;
	/**
	 * Enter a parse tree produced by the `defaultAuthConnectionOption`
	 * labeled alternative in `SqlParser.connectionOption`.
	 * @param ctx the parse tree
	 */
	enterDefaultAuthConnectionOption?: (ctx: DefaultAuthConnectionOptionContext) => void;
	/**
	 * Exit a parse tree produced by the `defaultAuthConnectionOption`
	 * labeled alternative in `SqlParser.connectionOption`.
	 * @param ctx the parse tree
	 */
	exitDefaultAuthConnectionOption?: (ctx: DefaultAuthConnectionOptionContext) => void;
	/**
	 * Enter a parse tree produced by the `pluginDirConnectionOption`
	 * labeled alternative in `SqlParser.connectionOption`.
	 * @param ctx the parse tree
	 */
	enterPluginDirConnectionOption?: (ctx: PluginDirConnectionOptionContext) => void;
	/**
	 * Exit a parse tree produced by the `pluginDirConnectionOption`
	 * labeled alternative in `SqlParser.connectionOption`.
	 * @param ctx the parse tree
	 */
	exitPluginDirConnectionOption?: (ctx: PluginDirConnectionOptionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.gtuidSet`.
	 * @param ctx the parse tree
	 */
	enterGtuidSet?: (ctx: GtuidSetContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.gtuidSet`.
	 * @param ctx the parse tree
	 */
	exitGtuidSet?: (ctx: GtuidSetContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.xaStartTransaction`.
	 * @param ctx the parse tree
	 */
	enterXaStartTransaction?: (ctx: XaStartTransactionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.xaStartTransaction`.
	 * @param ctx the parse tree
	 */
	exitXaStartTransaction?: (ctx: XaStartTransactionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.xaEndTransaction`.
	 * @param ctx the parse tree
	 */
	enterXaEndTransaction?: (ctx: XaEndTransactionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.xaEndTransaction`.
	 * @param ctx the parse tree
	 */
	exitXaEndTransaction?: (ctx: XaEndTransactionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.xaPrepareStatement`.
	 * @param ctx the parse tree
	 */
	enterXaPrepareStatement?: (ctx: XaPrepareStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.xaPrepareStatement`.
	 * @param ctx the parse tree
	 */
	exitXaPrepareStatement?: (ctx: XaPrepareStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.xaCommitWork`.
	 * @param ctx the parse tree
	 */
	enterXaCommitWork?: (ctx: XaCommitWorkContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.xaCommitWork`.
	 * @param ctx the parse tree
	 */
	exitXaCommitWork?: (ctx: XaCommitWorkContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.xaRollbackWork`.
	 * @param ctx the parse tree
	 */
	enterXaRollbackWork?: (ctx: XaRollbackWorkContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.xaRollbackWork`.
	 * @param ctx the parse tree
	 */
	exitXaRollbackWork?: (ctx: XaRollbackWorkContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.xaRecoverWork`.
	 * @param ctx the parse tree
	 */
	enterXaRecoverWork?: (ctx: XaRecoverWorkContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.xaRecoverWork`.
	 * @param ctx the parse tree
	 */
	exitXaRecoverWork?: (ctx: XaRecoverWorkContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.prepareStatement`.
	 * @param ctx the parse tree
	 */
	enterPrepareStatement?: (ctx: PrepareStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.prepareStatement`.
	 * @param ctx the parse tree
	 */
	exitPrepareStatement?: (ctx: PrepareStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.executeStatement`.
	 * @param ctx the parse tree
	 */
	enterExecuteStatement?: (ctx: ExecuteStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.executeStatement`.
	 * @param ctx the parse tree
	 */
	exitExecuteStatement?: (ctx: ExecuteStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.deallocatePrepare`.
	 * @param ctx the parse tree
	 */
	enterDeallocatePrepare?: (ctx: DeallocatePrepareContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.deallocatePrepare`.
	 * @param ctx the parse tree
	 */
	exitDeallocatePrepare?: (ctx: DeallocatePrepareContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.routineBody`.
	 * @param ctx the parse tree
	 */
	enterRoutineBody?: (ctx: RoutineBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.routineBody`.
	 * @param ctx the parse tree
	 */
	exitRoutineBody?: (ctx: RoutineBodyContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	enterBlockStatement?: (ctx: BlockStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	exitBlockStatement?: (ctx: BlockStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.caseStatement`.
	 * @param ctx the parse tree
	 */
	enterCaseStatement?: (ctx: CaseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.caseStatement`.
	 * @param ctx the parse tree
	 */
	exitCaseStatement?: (ctx: CaseStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.iterateStatement`.
	 * @param ctx the parse tree
	 */
	enterIterateStatement?: (ctx: IterateStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.iterateStatement`.
	 * @param ctx the parse tree
	 */
	exitIterateStatement?: (ctx: IterateStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.leaveStatement`.
	 * @param ctx the parse tree
	 */
	enterLeaveStatement?: (ctx: LeaveStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.leaveStatement`.
	 * @param ctx the parse tree
	 */
	exitLeaveStatement?: (ctx: LeaveStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	enterLoopStatement?: (ctx: LoopStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	exitLoopStatement?: (ctx: LoopStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.repeatStatement`.
	 * @param ctx the parse tree
	 */
	enterRepeatStatement?: (ctx: RepeatStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.repeatStatement`.
	 * @param ctx the parse tree
	 */
	exitRepeatStatement?: (ctx: RepeatStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Enter a parse tree produced by the `CloseCursor`
	 * labeled alternative in `SqlParser.cursorStatement`.
	 * @param ctx the parse tree
	 */
	enterCloseCursor?: (ctx: CloseCursorContext) => void;
	/**
	 * Exit a parse tree produced by the `CloseCursor`
	 * labeled alternative in `SqlParser.cursorStatement`.
	 * @param ctx the parse tree
	 */
	exitCloseCursor?: (ctx: CloseCursorContext) => void;
	/**
	 * Enter a parse tree produced by the `FetchCursor`
	 * labeled alternative in `SqlParser.cursorStatement`.
	 * @param ctx the parse tree
	 */
	enterFetchCursor?: (ctx: FetchCursorContext) => void;
	/**
	 * Exit a parse tree produced by the `FetchCursor`
	 * labeled alternative in `SqlParser.cursorStatement`.
	 * @param ctx the parse tree
	 */
	exitFetchCursor?: (ctx: FetchCursorContext) => void;
	/**
	 * Enter a parse tree produced by the `OpenCursor`
	 * labeled alternative in `SqlParser.cursorStatement`.
	 * @param ctx the parse tree
	 */
	enterOpenCursor?: (ctx: OpenCursorContext) => void;
	/**
	 * Exit a parse tree produced by the `OpenCursor`
	 * labeled alternative in `SqlParser.cursorStatement`.
	 * @param ctx the parse tree
	 */
	exitOpenCursor?: (ctx: OpenCursorContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.declareVariable`.
	 * @param ctx the parse tree
	 */
	enterDeclareVariable?: (ctx: DeclareVariableContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.declareVariable`.
	 * @param ctx the parse tree
	 */
	exitDeclareVariable?: (ctx: DeclareVariableContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.declareCondition`.
	 * @param ctx the parse tree
	 */
	enterDeclareCondition?: (ctx: DeclareConditionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.declareCondition`.
	 * @param ctx the parse tree
	 */
	exitDeclareCondition?: (ctx: DeclareConditionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.declareCursor`.
	 * @param ctx the parse tree
	 */
	enterDeclareCursor?: (ctx: DeclareCursorContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.declareCursor`.
	 * @param ctx the parse tree
	 */
	exitDeclareCursor?: (ctx: DeclareCursorContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.declareHandler`.
	 * @param ctx the parse tree
	 */
	enterDeclareHandler?: (ctx: DeclareHandlerContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.declareHandler`.
	 * @param ctx the parse tree
	 */
	exitDeclareHandler?: (ctx: DeclareHandlerContext) => void;
	/**
	 * Enter a parse tree produced by the `handlerConditionCode`
	 * labeled alternative in `SqlParser.handlerConditionValue`.
	 * @param ctx the parse tree
	 */
	enterHandlerConditionCode?: (ctx: HandlerConditionCodeContext) => void;
	/**
	 * Exit a parse tree produced by the `handlerConditionCode`
	 * labeled alternative in `SqlParser.handlerConditionValue`.
	 * @param ctx the parse tree
	 */
	exitHandlerConditionCode?: (ctx: HandlerConditionCodeContext) => void;
	/**
	 * Enter a parse tree produced by the `handlerConditionState`
	 * labeled alternative in `SqlParser.handlerConditionValue`.
	 * @param ctx the parse tree
	 */
	enterHandlerConditionState?: (ctx: HandlerConditionStateContext) => void;
	/**
	 * Exit a parse tree produced by the `handlerConditionState`
	 * labeled alternative in `SqlParser.handlerConditionValue`.
	 * @param ctx the parse tree
	 */
	exitHandlerConditionState?: (ctx: HandlerConditionStateContext) => void;
	/**
	 * Enter a parse tree produced by the `handlerConditionName`
	 * labeled alternative in `SqlParser.handlerConditionValue`.
	 * @param ctx the parse tree
	 */
	enterHandlerConditionName?: (ctx: HandlerConditionNameContext) => void;
	/**
	 * Exit a parse tree produced by the `handlerConditionName`
	 * labeled alternative in `SqlParser.handlerConditionValue`.
	 * @param ctx the parse tree
	 */
	exitHandlerConditionName?: (ctx: HandlerConditionNameContext) => void;
	/**
	 * Enter a parse tree produced by the `handlerConditionWarning`
	 * labeled alternative in `SqlParser.handlerConditionValue`.
	 * @param ctx the parse tree
	 */
	enterHandlerConditionWarning?: (ctx: HandlerConditionWarningContext) => void;
	/**
	 * Exit a parse tree produced by the `handlerConditionWarning`
	 * labeled alternative in `SqlParser.handlerConditionValue`.
	 * @param ctx the parse tree
	 */
	exitHandlerConditionWarning?: (ctx: HandlerConditionWarningContext) => void;
	/**
	 * Enter a parse tree produced by the `handlerConditionNotfound`
	 * labeled alternative in `SqlParser.handlerConditionValue`.
	 * @param ctx the parse tree
	 */
	enterHandlerConditionNotfound?: (ctx: HandlerConditionNotfoundContext) => void;
	/**
	 * Exit a parse tree produced by the `handlerConditionNotfound`
	 * labeled alternative in `SqlParser.handlerConditionValue`.
	 * @param ctx the parse tree
	 */
	exitHandlerConditionNotfound?: (ctx: HandlerConditionNotfoundContext) => void;
	/**
	 * Enter a parse tree produced by the `handlerConditionException`
	 * labeled alternative in `SqlParser.handlerConditionValue`.
	 * @param ctx the parse tree
	 */
	enterHandlerConditionException?: (ctx: HandlerConditionExceptionContext) => void;
	/**
	 * Exit a parse tree produced by the `handlerConditionException`
	 * labeled alternative in `SqlParser.handlerConditionValue`.
	 * @param ctx the parse tree
	 */
	exitHandlerConditionException?: (ctx: HandlerConditionExceptionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.procedureSqlStatement`.
	 * @param ctx the parse tree
	 */
	enterProcedureSqlStatement?: (ctx: ProcedureSqlStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.procedureSqlStatement`.
	 * @param ctx the parse tree
	 */
	exitProcedureSqlStatement?: (ctx: ProcedureSqlStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.caseAlternative`.
	 * @param ctx the parse tree
	 */
	enterCaseAlternative?: (ctx: CaseAlternativeContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.caseAlternative`.
	 * @param ctx the parse tree
	 */
	exitCaseAlternative?: (ctx: CaseAlternativeContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.elifAlternative`.
	 * @param ctx the parse tree
	 */
	enterElifAlternative?: (ctx: ElifAlternativeContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.elifAlternative`.
	 * @param ctx the parse tree
	 */
	exitElifAlternative?: (ctx: ElifAlternativeContext) => void;
	/**
	 * Enter a parse tree produced by the `alterUserMysqlV56`
	 * labeled alternative in `SqlParser.alterUser`.
	 * @param ctx the parse tree
	 */
	enterAlterUserMysqlV56?: (ctx: AlterUserMysqlV56Context) => void;
	/**
	 * Exit a parse tree produced by the `alterUserMysqlV56`
	 * labeled alternative in `SqlParser.alterUser`.
	 * @param ctx the parse tree
	 */
	exitAlterUserMysqlV56?: (ctx: AlterUserMysqlV56Context) => void;
	/**
	 * Enter a parse tree produced by the `alterUserMysqlV57`
	 * labeled alternative in `SqlParser.alterUser`.
	 * @param ctx the parse tree
	 */
	enterAlterUserMysqlV57?: (ctx: AlterUserMysqlV57Context) => void;
	/**
	 * Exit a parse tree produced by the `alterUserMysqlV57`
	 * labeled alternative in `SqlParser.alterUser`.
	 * @param ctx the parse tree
	 */
	exitAlterUserMysqlV57?: (ctx: AlterUserMysqlV57Context) => void;
	/**
	 * Enter a parse tree produced by the `createUserMysqlV56`
	 * labeled alternative in `SqlParser.createUser`.
	 * @param ctx the parse tree
	 */
	enterCreateUserMysqlV56?: (ctx: CreateUserMysqlV56Context) => void;
	/**
	 * Exit a parse tree produced by the `createUserMysqlV56`
	 * labeled alternative in `SqlParser.createUser`.
	 * @param ctx the parse tree
	 */
	exitCreateUserMysqlV56?: (ctx: CreateUserMysqlV56Context) => void;
	/**
	 * Enter a parse tree produced by the `createUserMysqlV57`
	 * labeled alternative in `SqlParser.createUser`.
	 * @param ctx the parse tree
	 */
	enterCreateUserMysqlV57?: (ctx: CreateUserMysqlV57Context) => void;
	/**
	 * Exit a parse tree produced by the `createUserMysqlV57`
	 * labeled alternative in `SqlParser.createUser`.
	 * @param ctx the parse tree
	 */
	exitCreateUserMysqlV57?: (ctx: CreateUserMysqlV57Context) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.dropUser`.
	 * @param ctx the parse tree
	 */
	enterDropUser?: (ctx: DropUserContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.dropUser`.
	 * @param ctx the parse tree
	 */
	exitDropUser?: (ctx: DropUserContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.grantStatement`.
	 * @param ctx the parse tree
	 */
	enterGrantStatement?: (ctx: GrantStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.grantStatement`.
	 * @param ctx the parse tree
	 */
	exitGrantStatement?: (ctx: GrantStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.grantProxy`.
	 * @param ctx the parse tree
	 */
	enterGrantProxy?: (ctx: GrantProxyContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.grantProxy`.
	 * @param ctx the parse tree
	 */
	exitGrantProxy?: (ctx: GrantProxyContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.renameUser`.
	 * @param ctx the parse tree
	 */
	enterRenameUser?: (ctx: RenameUserContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.renameUser`.
	 * @param ctx the parse tree
	 */
	exitRenameUser?: (ctx: RenameUserContext) => void;
	/**
	 * Enter a parse tree produced by the `detailRevoke`
	 * labeled alternative in `SqlParser.revokeStatement`.
	 * @param ctx the parse tree
	 */
	enterDetailRevoke?: (ctx: DetailRevokeContext) => void;
	/**
	 * Exit a parse tree produced by the `detailRevoke`
	 * labeled alternative in `SqlParser.revokeStatement`.
	 * @param ctx the parse tree
	 */
	exitDetailRevoke?: (ctx: DetailRevokeContext) => void;
	/**
	 * Enter a parse tree produced by the `shortRevoke`
	 * labeled alternative in `SqlParser.revokeStatement`.
	 * @param ctx the parse tree
	 */
	enterShortRevoke?: (ctx: ShortRevokeContext) => void;
	/**
	 * Exit a parse tree produced by the `shortRevoke`
	 * labeled alternative in `SqlParser.revokeStatement`.
	 * @param ctx the parse tree
	 */
	exitShortRevoke?: (ctx: ShortRevokeContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.revokeProxy`.
	 * @param ctx the parse tree
	 */
	enterRevokeProxy?: (ctx: RevokeProxyContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.revokeProxy`.
	 * @param ctx the parse tree
	 */
	exitRevokeProxy?: (ctx: RevokeProxyContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.setPasswordStatement`.
	 * @param ctx the parse tree
	 */
	enterSetPasswordStatement?: (ctx: SetPasswordStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.setPasswordStatement`.
	 * @param ctx the parse tree
	 */
	exitSetPasswordStatement?: (ctx: SetPasswordStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.userSpecification`.
	 * @param ctx the parse tree
	 */
	enterUserSpecification?: (ctx: UserSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.userSpecification`.
	 * @param ctx the parse tree
	 */
	exitUserSpecification?: (ctx: UserSpecificationContext) => void;
	/**
	 * Enter a parse tree produced by the `passwordAuthOption`
	 * labeled alternative in `SqlParser.userAuthOption`.
	 * @param ctx the parse tree
	 */
	enterPasswordAuthOption?: (ctx: PasswordAuthOptionContext) => void;
	/**
	 * Exit a parse tree produced by the `passwordAuthOption`
	 * labeled alternative in `SqlParser.userAuthOption`.
	 * @param ctx the parse tree
	 */
	exitPasswordAuthOption?: (ctx: PasswordAuthOptionContext) => void;
	/**
	 * Enter a parse tree produced by the `stringAuthOption`
	 * labeled alternative in `SqlParser.userAuthOption`.
	 * @param ctx the parse tree
	 */
	enterStringAuthOption?: (ctx: StringAuthOptionContext) => void;
	/**
	 * Exit a parse tree produced by the `stringAuthOption`
	 * labeled alternative in `SqlParser.userAuthOption`.
	 * @param ctx the parse tree
	 */
	exitStringAuthOption?: (ctx: StringAuthOptionContext) => void;
	/**
	 * Enter a parse tree produced by the `hashAuthOption`
	 * labeled alternative in `SqlParser.userAuthOption`.
	 * @param ctx the parse tree
	 */
	enterHashAuthOption?: (ctx: HashAuthOptionContext) => void;
	/**
	 * Exit a parse tree produced by the `hashAuthOption`
	 * labeled alternative in `SqlParser.userAuthOption`.
	 * @param ctx the parse tree
	 */
	exitHashAuthOption?: (ctx: HashAuthOptionContext) => void;
	/**
	 * Enter a parse tree produced by the `simpleAuthOption`
	 * labeled alternative in `SqlParser.userAuthOption`.
	 * @param ctx the parse tree
	 */
	enterSimpleAuthOption?: (ctx: SimpleAuthOptionContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleAuthOption`
	 * labeled alternative in `SqlParser.userAuthOption`.
	 * @param ctx the parse tree
	 */
	exitSimpleAuthOption?: (ctx: SimpleAuthOptionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.tlsOption`.
	 * @param ctx the parse tree
	 */
	enterTlsOption?: (ctx: TlsOptionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.tlsOption`.
	 * @param ctx the parse tree
	 */
	exitTlsOption?: (ctx: TlsOptionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.userResourceOption`.
	 * @param ctx the parse tree
	 */
	enterUserResourceOption?: (ctx: UserResourceOptionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.userResourceOption`.
	 * @param ctx the parse tree
	 */
	exitUserResourceOption?: (ctx: UserResourceOptionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.userPasswordOption`.
	 * @param ctx the parse tree
	 */
	enterUserPasswordOption?: (ctx: UserPasswordOptionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.userPasswordOption`.
	 * @param ctx the parse tree
	 */
	exitUserPasswordOption?: (ctx: UserPasswordOptionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.userLockOption`.
	 * @param ctx the parse tree
	 */
	enterUserLockOption?: (ctx: UserLockOptionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.userLockOption`.
	 * @param ctx the parse tree
	 */
	exitUserLockOption?: (ctx: UserLockOptionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.privelegeClause`.
	 * @param ctx the parse tree
	 */
	enterPrivelegeClause?: (ctx: PrivelegeClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.privelegeClause`.
	 * @param ctx the parse tree
	 */
	exitPrivelegeClause?: (ctx: PrivelegeClauseContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.privilege`.
	 * @param ctx the parse tree
	 */
	enterPrivilege?: (ctx: PrivilegeContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.privilege`.
	 * @param ctx the parse tree
	 */
	exitPrivilege?: (ctx: PrivilegeContext) => void;
	/**
	 * Enter a parse tree produced by the `currentSchemaPriviLevel`
	 * labeled alternative in `SqlParser.privilegeLevel`.
	 * @param ctx the parse tree
	 */
	enterCurrentSchemaPriviLevel?: (ctx: CurrentSchemaPriviLevelContext) => void;
	/**
	 * Exit a parse tree produced by the `currentSchemaPriviLevel`
	 * labeled alternative in `SqlParser.privilegeLevel`.
	 * @param ctx the parse tree
	 */
	exitCurrentSchemaPriviLevel?: (ctx: CurrentSchemaPriviLevelContext) => void;
	/**
	 * Enter a parse tree produced by the `globalPrivLevel`
	 * labeled alternative in `SqlParser.privilegeLevel`.
	 * @param ctx the parse tree
	 */
	enterGlobalPrivLevel?: (ctx: GlobalPrivLevelContext) => void;
	/**
	 * Exit a parse tree produced by the `globalPrivLevel`
	 * labeled alternative in `SqlParser.privilegeLevel`.
	 * @param ctx the parse tree
	 */
	exitGlobalPrivLevel?: (ctx: GlobalPrivLevelContext) => void;
	/**
	 * Enter a parse tree produced by the `definiteSchemaPrivLevel`
	 * labeled alternative in `SqlParser.privilegeLevel`.
	 * @param ctx the parse tree
	 */
	enterDefiniteSchemaPrivLevel?: (ctx: DefiniteSchemaPrivLevelContext) => void;
	/**
	 * Exit a parse tree produced by the `definiteSchemaPrivLevel`
	 * labeled alternative in `SqlParser.privilegeLevel`.
	 * @param ctx the parse tree
	 */
	exitDefiniteSchemaPrivLevel?: (ctx: DefiniteSchemaPrivLevelContext) => void;
	/**
	 * Enter a parse tree produced by the `definiteFullTablePrivLevel`
	 * labeled alternative in `SqlParser.privilegeLevel`.
	 * @param ctx the parse tree
	 */
	enterDefiniteFullTablePrivLevel?: (ctx: DefiniteFullTablePrivLevelContext) => void;
	/**
	 * Exit a parse tree produced by the `definiteFullTablePrivLevel`
	 * labeled alternative in `SqlParser.privilegeLevel`.
	 * @param ctx the parse tree
	 */
	exitDefiniteFullTablePrivLevel?: (ctx: DefiniteFullTablePrivLevelContext) => void;
	/**
	 * Enter a parse tree produced by the `definiteFullTablePrivLevel2`
	 * labeled alternative in `SqlParser.privilegeLevel`.
	 * @param ctx the parse tree
	 */
	enterDefiniteFullTablePrivLevel2?: (ctx: DefiniteFullTablePrivLevel2Context) => void;
	/**
	 * Exit a parse tree produced by the `definiteFullTablePrivLevel2`
	 * labeled alternative in `SqlParser.privilegeLevel`.
	 * @param ctx the parse tree
	 */
	exitDefiniteFullTablePrivLevel2?: (ctx: DefiniteFullTablePrivLevel2Context) => void;
	/**
	 * Enter a parse tree produced by the `definiteTablePrivLevel`
	 * labeled alternative in `SqlParser.privilegeLevel`.
	 * @param ctx the parse tree
	 */
	enterDefiniteTablePrivLevel?: (ctx: DefiniteTablePrivLevelContext) => void;
	/**
	 * Exit a parse tree produced by the `definiteTablePrivLevel`
	 * labeled alternative in `SqlParser.privilegeLevel`.
	 * @param ctx the parse tree
	 */
	exitDefiniteTablePrivLevel?: (ctx: DefiniteTablePrivLevelContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.renameUserClause`.
	 * @param ctx the parse tree
	 */
	enterRenameUserClause?: (ctx: RenameUserClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.renameUserClause`.
	 * @param ctx the parse tree
	 */
	exitRenameUserClause?: (ctx: RenameUserClauseContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.analyzeTable`.
	 * @param ctx the parse tree
	 */
	enterAnalyzeTable?: (ctx: AnalyzeTableContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.analyzeTable`.
	 * @param ctx the parse tree
	 */
	exitAnalyzeTable?: (ctx: AnalyzeTableContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.checkTable`.
	 * @param ctx the parse tree
	 */
	enterCheckTable?: (ctx: CheckTableContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.checkTable`.
	 * @param ctx the parse tree
	 */
	exitCheckTable?: (ctx: CheckTableContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.checksumTable`.
	 * @param ctx the parse tree
	 */
	enterChecksumTable?: (ctx: ChecksumTableContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.checksumTable`.
	 * @param ctx the parse tree
	 */
	exitChecksumTable?: (ctx: ChecksumTableContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.optimizeTable`.
	 * @param ctx the parse tree
	 */
	enterOptimizeTable?: (ctx: OptimizeTableContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.optimizeTable`.
	 * @param ctx the parse tree
	 */
	exitOptimizeTable?: (ctx: OptimizeTableContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.repairTable`.
	 * @param ctx the parse tree
	 */
	enterRepairTable?: (ctx: RepairTableContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.repairTable`.
	 * @param ctx the parse tree
	 */
	exitRepairTable?: (ctx: RepairTableContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.checkTableOption`.
	 * @param ctx the parse tree
	 */
	enterCheckTableOption?: (ctx: CheckTableOptionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.checkTableOption`.
	 * @param ctx the parse tree
	 */
	exitCheckTableOption?: (ctx: CheckTableOptionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.createUdfunction`.
	 * @param ctx the parse tree
	 */
	enterCreateUdfunction?: (ctx: CreateUdfunctionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.createUdfunction`.
	 * @param ctx the parse tree
	 */
	exitCreateUdfunction?: (ctx: CreateUdfunctionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.installPlugin`.
	 * @param ctx the parse tree
	 */
	enterInstallPlugin?: (ctx: InstallPluginContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.installPlugin`.
	 * @param ctx the parse tree
	 */
	exitInstallPlugin?: (ctx: InstallPluginContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.uninstallPlugin`.
	 * @param ctx the parse tree
	 */
	enterUninstallPlugin?: (ctx: UninstallPluginContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.uninstallPlugin`.
	 * @param ctx the parse tree
	 */
	exitUninstallPlugin?: (ctx: UninstallPluginContext) => void;
	/**
	 * Enter a parse tree produced by the `setVariable`
	 * labeled alternative in `SqlParser.setStatement`.
	 * @param ctx the parse tree
	 */
	enterSetVariable?: (ctx: SetVariableContext) => void;
	/**
	 * Exit a parse tree produced by the `setVariable`
	 * labeled alternative in `SqlParser.setStatement`.
	 * @param ctx the parse tree
	 */
	exitSetVariable?: (ctx: SetVariableContext) => void;
	/**
	 * Enter a parse tree produced by the `setCharset`
	 * labeled alternative in `SqlParser.setStatement`.
	 * @param ctx the parse tree
	 */
	enterSetCharset?: (ctx: SetCharsetContext) => void;
	/**
	 * Exit a parse tree produced by the `setCharset`
	 * labeled alternative in `SqlParser.setStatement`.
	 * @param ctx the parse tree
	 */
	exitSetCharset?: (ctx: SetCharsetContext) => void;
	/**
	 * Enter a parse tree produced by the `setNames`
	 * labeled alternative in `SqlParser.setStatement`.
	 * @param ctx the parse tree
	 */
	enterSetNames?: (ctx: SetNamesContext) => void;
	/**
	 * Exit a parse tree produced by the `setNames`
	 * labeled alternative in `SqlParser.setStatement`.
	 * @param ctx the parse tree
	 */
	exitSetNames?: (ctx: SetNamesContext) => void;
	/**
	 * Enter a parse tree produced by the `setPassword`
	 * labeled alternative in `SqlParser.setStatement`.
	 * @param ctx the parse tree
	 */
	enterSetPassword?: (ctx: SetPasswordContext) => void;
	/**
	 * Exit a parse tree produced by the `setPassword`
	 * labeled alternative in `SqlParser.setStatement`.
	 * @param ctx the parse tree
	 */
	exitSetPassword?: (ctx: SetPasswordContext) => void;
	/**
	 * Enter a parse tree produced by the `setTransaction`
	 * labeled alternative in `SqlParser.setStatement`.
	 * @param ctx the parse tree
	 */
	enterSetTransaction?: (ctx: SetTransactionContext) => void;
	/**
	 * Exit a parse tree produced by the `setTransaction`
	 * labeled alternative in `SqlParser.setStatement`.
	 * @param ctx the parse tree
	 */
	exitSetTransaction?: (ctx: SetTransactionContext) => void;
	/**
	 * Enter a parse tree produced by the `setAutocommit`
	 * labeled alternative in `SqlParser.setStatement`.
	 * @param ctx the parse tree
	 */
	enterSetAutocommit?: (ctx: SetAutocommitContext) => void;
	/**
	 * Exit a parse tree produced by the `setAutocommit`
	 * labeled alternative in `SqlParser.setStatement`.
	 * @param ctx the parse tree
	 */
	exitSetAutocommit?: (ctx: SetAutocommitContext) => void;
	/**
	 * Enter a parse tree produced by the `setNewValueInsideTrigger`
	 * labeled alternative in `SqlParser.setStatement`.
	 * @param ctx the parse tree
	 */
	enterSetNewValueInsideTrigger?: (ctx: SetNewValueInsideTriggerContext) => void;
	/**
	 * Exit a parse tree produced by the `setNewValueInsideTrigger`
	 * labeled alternative in `SqlParser.setStatement`.
	 * @param ctx the parse tree
	 */
	exitSetNewValueInsideTrigger?: (ctx: SetNewValueInsideTriggerContext) => void;
	/**
	 * Enter a parse tree produced by the `showMasterLogs`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	enterShowMasterLogs?: (ctx: ShowMasterLogsContext) => void;
	/**
	 * Exit a parse tree produced by the `showMasterLogs`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	exitShowMasterLogs?: (ctx: ShowMasterLogsContext) => void;
	/**
	 * Enter a parse tree produced by the `showLogEvents`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	enterShowLogEvents?: (ctx: ShowLogEventsContext) => void;
	/**
	 * Exit a parse tree produced by the `showLogEvents`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	exitShowLogEvents?: (ctx: ShowLogEventsContext) => void;
	/**
	 * Enter a parse tree produced by the `showObjectFilter`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	enterShowObjectFilter?: (ctx: ShowObjectFilterContext) => void;
	/**
	 * Exit a parse tree produced by the `showObjectFilter`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	exitShowObjectFilter?: (ctx: ShowObjectFilterContext) => void;
	/**
	 * Enter a parse tree produced by the `showColumns`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	enterShowColumns?: (ctx: ShowColumnsContext) => void;
	/**
	 * Exit a parse tree produced by the `showColumns`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	exitShowColumns?: (ctx: ShowColumnsContext) => void;
	/**
	 * Enter a parse tree produced by the `showCreateDb`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	enterShowCreateDb?: (ctx: ShowCreateDbContext) => void;
	/**
	 * Exit a parse tree produced by the `showCreateDb`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	exitShowCreateDb?: (ctx: ShowCreateDbContext) => void;
	/**
	 * Enter a parse tree produced by the `showCreateFullIdObject`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	enterShowCreateFullIdObject?: (ctx: ShowCreateFullIdObjectContext) => void;
	/**
	 * Exit a parse tree produced by the `showCreateFullIdObject`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	exitShowCreateFullIdObject?: (ctx: ShowCreateFullIdObjectContext) => void;
	/**
	 * Enter a parse tree produced by the `showCreateUser`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	enterShowCreateUser?: (ctx: ShowCreateUserContext) => void;
	/**
	 * Exit a parse tree produced by the `showCreateUser`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	exitShowCreateUser?: (ctx: ShowCreateUserContext) => void;
	/**
	 * Enter a parse tree produced by the `showEngine`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	enterShowEngine?: (ctx: ShowEngineContext) => void;
	/**
	 * Exit a parse tree produced by the `showEngine`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	exitShowEngine?: (ctx: ShowEngineContext) => void;
	/**
	 * Enter a parse tree produced by the `showGlobalInfo`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	enterShowGlobalInfo?: (ctx: ShowGlobalInfoContext) => void;
	/**
	 * Exit a parse tree produced by the `showGlobalInfo`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	exitShowGlobalInfo?: (ctx: ShowGlobalInfoContext) => void;
	/**
	 * Enter a parse tree produced by the `showErrors`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	enterShowErrors?: (ctx: ShowErrorsContext) => void;
	/**
	 * Exit a parse tree produced by the `showErrors`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	exitShowErrors?: (ctx: ShowErrorsContext) => void;
	/**
	 * Enter a parse tree produced by the `showCountErrors`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	enterShowCountErrors?: (ctx: ShowCountErrorsContext) => void;
	/**
	 * Exit a parse tree produced by the `showCountErrors`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	exitShowCountErrors?: (ctx: ShowCountErrorsContext) => void;
	/**
	 * Enter a parse tree produced by the `showSchemaFilter`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	enterShowSchemaFilter?: (ctx: ShowSchemaFilterContext) => void;
	/**
	 * Exit a parse tree produced by the `showSchemaFilter`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	exitShowSchemaFilter?: (ctx: ShowSchemaFilterContext) => void;
	/**
	 * Enter a parse tree produced by the `showRoutine`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	enterShowRoutine?: (ctx: ShowRoutineContext) => void;
	/**
	 * Exit a parse tree produced by the `showRoutine`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	exitShowRoutine?: (ctx: ShowRoutineContext) => void;
	/**
	 * Enter a parse tree produced by the `showGrants`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	enterShowGrants?: (ctx: ShowGrantsContext) => void;
	/**
	 * Exit a parse tree produced by the `showGrants`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	exitShowGrants?: (ctx: ShowGrantsContext) => void;
	/**
	 * Enter a parse tree produced by the `showIndexes`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	enterShowIndexes?: (ctx: ShowIndexesContext) => void;
	/**
	 * Exit a parse tree produced by the `showIndexes`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	exitShowIndexes?: (ctx: ShowIndexesContext) => void;
	/**
	 * Enter a parse tree produced by the `showOpenTables`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	enterShowOpenTables?: (ctx: ShowOpenTablesContext) => void;
	/**
	 * Exit a parse tree produced by the `showOpenTables`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	exitShowOpenTables?: (ctx: ShowOpenTablesContext) => void;
	/**
	 * Enter a parse tree produced by the `showProfile`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	enterShowProfile?: (ctx: ShowProfileContext) => void;
	/**
	 * Exit a parse tree produced by the `showProfile`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	exitShowProfile?: (ctx: ShowProfileContext) => void;
	/**
	 * Enter a parse tree produced by the `showSlaveStatus`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	enterShowSlaveStatus?: (ctx: ShowSlaveStatusContext) => void;
	/**
	 * Exit a parse tree produced by the `showSlaveStatus`
	 * labeled alternative in `SqlParser.showStatement`.
	 * @param ctx the parse tree
	 */
	exitShowSlaveStatus?: (ctx: ShowSlaveStatusContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.variableClause`.
	 * @param ctx the parse tree
	 */
	enterVariableClause?: (ctx: VariableClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.variableClause`.
	 * @param ctx the parse tree
	 */
	exitVariableClause?: (ctx: VariableClauseContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.showCommonEntity`.
	 * @param ctx the parse tree
	 */
	enterShowCommonEntity?: (ctx: ShowCommonEntityContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.showCommonEntity`.
	 * @param ctx the parse tree
	 */
	exitShowCommonEntity?: (ctx: ShowCommonEntityContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.showFilter`.
	 * @param ctx the parse tree
	 */
	enterShowFilter?: (ctx: ShowFilterContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.showFilter`.
	 * @param ctx the parse tree
	 */
	exitShowFilter?: (ctx: ShowFilterContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.showGlobalInfoClause`.
	 * @param ctx the parse tree
	 */
	enterShowGlobalInfoClause?: (ctx: ShowGlobalInfoClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.showGlobalInfoClause`.
	 * @param ctx the parse tree
	 */
	exitShowGlobalInfoClause?: (ctx: ShowGlobalInfoClauseContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.showSchemaEntity`.
	 * @param ctx the parse tree
	 */
	enterShowSchemaEntity?: (ctx: ShowSchemaEntityContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.showSchemaEntity`.
	 * @param ctx the parse tree
	 */
	exitShowSchemaEntity?: (ctx: ShowSchemaEntityContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.showProfileType`.
	 * @param ctx the parse tree
	 */
	enterShowProfileType?: (ctx: ShowProfileTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.showProfileType`.
	 * @param ctx the parse tree
	 */
	exitShowProfileType?: (ctx: ShowProfileTypeContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.binlogStatement`.
	 * @param ctx the parse tree
	 */
	enterBinlogStatement?: (ctx: BinlogStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.binlogStatement`.
	 * @param ctx the parse tree
	 */
	exitBinlogStatement?: (ctx: BinlogStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.cacheIndexStatement`.
	 * @param ctx the parse tree
	 */
	enterCacheIndexStatement?: (ctx: CacheIndexStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.cacheIndexStatement`.
	 * @param ctx the parse tree
	 */
	exitCacheIndexStatement?: (ctx: CacheIndexStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.flushStatement`.
	 * @param ctx the parse tree
	 */
	enterFlushStatement?: (ctx: FlushStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.flushStatement`.
	 * @param ctx the parse tree
	 */
	exitFlushStatement?: (ctx: FlushStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.killStatement`.
	 * @param ctx the parse tree
	 */
	enterKillStatement?: (ctx: KillStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.killStatement`.
	 * @param ctx the parse tree
	 */
	exitKillStatement?: (ctx: KillStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.loadIndexIntoCache`.
	 * @param ctx the parse tree
	 */
	enterLoadIndexIntoCache?: (ctx: LoadIndexIntoCacheContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.loadIndexIntoCache`.
	 * @param ctx the parse tree
	 */
	exitLoadIndexIntoCache?: (ctx: LoadIndexIntoCacheContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.resetStatement`.
	 * @param ctx the parse tree
	 */
	enterResetStatement?: (ctx: ResetStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.resetStatement`.
	 * @param ctx the parse tree
	 */
	exitResetStatement?: (ctx: ResetStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.shutdownStatement`.
	 * @param ctx the parse tree
	 */
	enterShutdownStatement?: (ctx: ShutdownStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.shutdownStatement`.
	 * @param ctx the parse tree
	 */
	exitShutdownStatement?: (ctx: ShutdownStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.tableIndexes`.
	 * @param ctx the parse tree
	 */
	enterTableIndexes?: (ctx: TableIndexesContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.tableIndexes`.
	 * @param ctx the parse tree
	 */
	exitTableIndexes?: (ctx: TableIndexesContext) => void;
	/**
	 * Enter a parse tree produced by the `simpleFlushOption`
	 * labeled alternative in `SqlParser.flushOption`.
	 * @param ctx the parse tree
	 */
	enterSimpleFlushOption?: (ctx: SimpleFlushOptionContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleFlushOption`
	 * labeled alternative in `SqlParser.flushOption`.
	 * @param ctx the parse tree
	 */
	exitSimpleFlushOption?: (ctx: SimpleFlushOptionContext) => void;
	/**
	 * Enter a parse tree produced by the `channelFlushOption`
	 * labeled alternative in `SqlParser.flushOption`.
	 * @param ctx the parse tree
	 */
	enterChannelFlushOption?: (ctx: ChannelFlushOptionContext) => void;
	/**
	 * Exit a parse tree produced by the `channelFlushOption`
	 * labeled alternative in `SqlParser.flushOption`.
	 * @param ctx the parse tree
	 */
	exitChannelFlushOption?: (ctx: ChannelFlushOptionContext) => void;
	/**
	 * Enter a parse tree produced by the `tableFlushOption`
	 * labeled alternative in `SqlParser.flushOption`.
	 * @param ctx the parse tree
	 */
	enterTableFlushOption?: (ctx: TableFlushOptionContext) => void;
	/**
	 * Exit a parse tree produced by the `tableFlushOption`
	 * labeled alternative in `SqlParser.flushOption`.
	 * @param ctx the parse tree
	 */
	exitTableFlushOption?: (ctx: TableFlushOptionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.flushTableOption`.
	 * @param ctx the parse tree
	 */
	enterFlushTableOption?: (ctx: FlushTableOptionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.flushTableOption`.
	 * @param ctx the parse tree
	 */
	exitFlushTableOption?: (ctx: FlushTableOptionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.loadedTableIndexes`.
	 * @param ctx the parse tree
	 */
	enterLoadedTableIndexes?: (ctx: LoadedTableIndexesContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.loadedTableIndexes`.
	 * @param ctx the parse tree
	 */
	exitLoadedTableIndexes?: (ctx: LoadedTableIndexesContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.simpleDescribeStatement`.
	 * @param ctx the parse tree
	 */
	enterSimpleDescribeStatement?: (ctx: SimpleDescribeStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.simpleDescribeStatement`.
	 * @param ctx the parse tree
	 */
	exitSimpleDescribeStatement?: (ctx: SimpleDescribeStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.fullDescribeStatement`.
	 * @param ctx the parse tree
	 */
	enterFullDescribeStatement?: (ctx: FullDescribeStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.fullDescribeStatement`.
	 * @param ctx the parse tree
	 */
	exitFullDescribeStatement?: (ctx: FullDescribeStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.helpStatement`.
	 * @param ctx the parse tree
	 */
	enterHelpStatement?: (ctx: HelpStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.helpStatement`.
	 * @param ctx the parse tree
	 */
	exitHelpStatement?: (ctx: HelpStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.useStatement`.
	 * @param ctx the parse tree
	 */
	enterUseStatement?: (ctx: UseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.useStatement`.
	 * @param ctx the parse tree
	 */
	exitUseStatement?: (ctx: UseStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.signalStatement`.
	 * @param ctx the parse tree
	 */
	enterSignalStatement?: (ctx: SignalStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.signalStatement`.
	 * @param ctx the parse tree
	 */
	exitSignalStatement?: (ctx: SignalStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.resignalStatement`.
	 * @param ctx the parse tree
	 */
	enterResignalStatement?: (ctx: ResignalStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.resignalStatement`.
	 * @param ctx the parse tree
	 */
	exitResignalStatement?: (ctx: ResignalStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.signalConditionInformation`.
	 * @param ctx the parse tree
	 */
	enterSignalConditionInformation?: (ctx: SignalConditionInformationContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.signalConditionInformation`.
	 * @param ctx the parse tree
	 */
	exitSignalConditionInformation?: (ctx: SignalConditionInformationContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.diagnosticsStatement`.
	 * @param ctx the parse tree
	 */
	enterDiagnosticsStatement?: (ctx: DiagnosticsStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.diagnosticsStatement`.
	 * @param ctx the parse tree
	 */
	exitDiagnosticsStatement?: (ctx: DiagnosticsStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.diagnosticsConditionInformationName`.
	 * @param ctx the parse tree
	 */
	enterDiagnosticsConditionInformationName?: (ctx: DiagnosticsConditionInformationNameContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.diagnosticsConditionInformationName`.
	 * @param ctx the parse tree
	 */
	exitDiagnosticsConditionInformationName?: (ctx: DiagnosticsConditionInformationNameContext) => void;
	/**
	 * Enter a parse tree produced by the `describeStatements`
	 * labeled alternative in `SqlParser.describeObjectClause`.
	 * @param ctx the parse tree
	 */
	enterDescribeStatements?: (ctx: DescribeStatementsContext) => void;
	/**
	 * Exit a parse tree produced by the `describeStatements`
	 * labeled alternative in `SqlParser.describeObjectClause`.
	 * @param ctx the parse tree
	 */
	exitDescribeStatements?: (ctx: DescribeStatementsContext) => void;
	/**
	 * Enter a parse tree produced by the `describeConnection`
	 * labeled alternative in `SqlParser.describeObjectClause`.
	 * @param ctx the parse tree
	 */
	enterDescribeConnection?: (ctx: DescribeConnectionContext) => void;
	/**
	 * Exit a parse tree produced by the `describeConnection`
	 * labeled alternative in `SqlParser.describeObjectClause`.
	 * @param ctx the parse tree
	 */
	exitDescribeConnection?: (ctx: DescribeConnectionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.fullId`.
	 * @param ctx the parse tree
	 */
	enterFullId?: (ctx: FullIdContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.fullId`.
	 * @param ctx the parse tree
	 */
	exitFullId?: (ctx: FullIdContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.tableName`.
	 * @param ctx the parse tree
	 */
	enterTableName?: (ctx: TableNameContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.tableName`.
	 * @param ctx the parse tree
	 */
	exitTableName?: (ctx: TableNameContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.fullColumnName`.
	 * @param ctx the parse tree
	 */
	enterFullColumnName?: (ctx: FullColumnNameContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.fullColumnName`.
	 * @param ctx the parse tree
	 */
	exitFullColumnName?: (ctx: FullColumnNameContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.indexColumnName`.
	 * @param ctx the parse tree
	 */
	enterIndexColumnName?: (ctx: IndexColumnNameContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.indexColumnName`.
	 * @param ctx the parse tree
	 */
	exitIndexColumnName?: (ctx: IndexColumnNameContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.userName`.
	 * @param ctx the parse tree
	 */
	enterUserName?: (ctx: UserNameContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.userName`.
	 * @param ctx the parse tree
	 */
	exitUserName?: (ctx: UserNameContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.mysqlVariable`.
	 * @param ctx the parse tree
	 */
	enterMysqlVariable?: (ctx: MysqlVariableContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.mysqlVariable`.
	 * @param ctx the parse tree
	 */
	exitMysqlVariable?: (ctx: MysqlVariableContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.charsetName`.
	 * @param ctx the parse tree
	 */
	enterCharsetName?: (ctx: CharsetNameContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.charsetName`.
	 * @param ctx the parse tree
	 */
	exitCharsetName?: (ctx: CharsetNameContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.collationName`.
	 * @param ctx the parse tree
	 */
	enterCollationName?: (ctx: CollationNameContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.collationName`.
	 * @param ctx the parse tree
	 */
	exitCollationName?: (ctx: CollationNameContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.engineName`.
	 * @param ctx the parse tree
	 */
	enterEngineName?: (ctx: EngineNameContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.engineName`.
	 * @param ctx the parse tree
	 */
	exitEngineName?: (ctx: EngineNameContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.uuidSet`.
	 * @param ctx the parse tree
	 */
	enterUuidSet?: (ctx: UuidSetContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.uuidSet`.
	 * @param ctx the parse tree
	 */
	exitUuidSet?: (ctx: UuidSetContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.xid`.
	 * @param ctx the parse tree
	 */
	enterXid?: (ctx: XidContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.xid`.
	 * @param ctx the parse tree
	 */
	exitXid?: (ctx: XidContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.xuidStringId`.
	 * @param ctx the parse tree
	 */
	enterXuidStringId?: (ctx: XuidStringIdContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.xuidStringId`.
	 * @param ctx the parse tree
	 */
	exitXuidStringId?: (ctx: XuidStringIdContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.authPlugin`.
	 * @param ctx the parse tree
	 */
	enterAuthPlugin?: (ctx: AuthPluginContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.authPlugin`.
	 * @param ctx the parse tree
	 */
	exitAuthPlugin?: (ctx: AuthPluginContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.uid`.
	 * @param ctx the parse tree
	 */
	enterUid?: (ctx: UidContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.uid`.
	 * @param ctx the parse tree
	 */
	exitUid?: (ctx: UidContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.simpleId`.
	 * @param ctx the parse tree
	 */
	enterSimpleId?: (ctx: SimpleIdContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.simpleId`.
	 * @param ctx the parse tree
	 */
	exitSimpleId?: (ctx: SimpleIdContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.dottedId`.
	 * @param ctx the parse tree
	 */
	enterDottedId?: (ctx: DottedIdContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.dottedId`.
	 * @param ctx the parse tree
	 */
	exitDottedId?: (ctx: DottedIdContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.decimalLiteral`.
	 * @param ctx the parse tree
	 */
	enterDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.decimalLiteral`.
	 * @param ctx the parse tree
	 */
	exitDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.fileSizeLiteral`.
	 * @param ctx the parse tree
	 */
	enterFileSizeLiteral?: (ctx: FileSizeLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.fileSizeLiteral`.
	 * @param ctx the parse tree
	 */
	exitFileSizeLiteral?: (ctx: FileSizeLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.booleanLiteral`.
	 * @param ctx the parse tree
	 */
	enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.booleanLiteral`.
	 * @param ctx the parse tree
	 */
	exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.hexadecimalLiteral`.
	 * @param ctx the parse tree
	 */
	enterHexadecimalLiteral?: (ctx: HexadecimalLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.hexadecimalLiteral`.
	 * @param ctx the parse tree
	 */
	exitHexadecimalLiteral?: (ctx: HexadecimalLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.nullNotnull`.
	 * @param ctx the parse tree
	 */
	enterNullNotnull?: (ctx: NullNotnullContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.nullNotnull`.
	 * @param ctx the parse tree
	 */
	exitNullNotnull?: (ctx: NullNotnullContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;
	/**
	 * Enter a parse tree produced by the `stringDataType`
	 * labeled alternative in `SqlParser.dataType`.
	 * @param ctx the parse tree
	 */
	enterStringDataType?: (ctx: StringDataTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `stringDataType`
	 * labeled alternative in `SqlParser.dataType`.
	 * @param ctx the parse tree
	 */
	exitStringDataType?: (ctx: StringDataTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `nationalStringDataType`
	 * labeled alternative in `SqlParser.dataType`.
	 * @param ctx the parse tree
	 */
	enterNationalStringDataType?: (ctx: NationalStringDataTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `nationalStringDataType`
	 * labeled alternative in `SqlParser.dataType`.
	 * @param ctx the parse tree
	 */
	exitNationalStringDataType?: (ctx: NationalStringDataTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `nationalVaryingStringDataType`
	 * labeled alternative in `SqlParser.dataType`.
	 * @param ctx the parse tree
	 */
	enterNationalVaryingStringDataType?: (ctx: NationalVaryingStringDataTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `nationalVaryingStringDataType`
	 * labeled alternative in `SqlParser.dataType`.
	 * @param ctx the parse tree
	 */
	exitNationalVaryingStringDataType?: (ctx: NationalVaryingStringDataTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `dimensionDataType`
	 * labeled alternative in `SqlParser.dataType`.
	 * @param ctx the parse tree
	 */
	enterDimensionDataType?: (ctx: DimensionDataTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `dimensionDataType`
	 * labeled alternative in `SqlParser.dataType`.
	 * @param ctx the parse tree
	 */
	exitDimensionDataType?: (ctx: DimensionDataTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `simpleDataType`
	 * labeled alternative in `SqlParser.dataType`.
	 * @param ctx the parse tree
	 */
	enterSimpleDataType?: (ctx: SimpleDataTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleDataType`
	 * labeled alternative in `SqlParser.dataType`.
	 * @param ctx the parse tree
	 */
	exitSimpleDataType?: (ctx: SimpleDataTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `collectionDataType`
	 * labeled alternative in `SqlParser.dataType`.
	 * @param ctx the parse tree
	 */
	enterCollectionDataType?: (ctx: CollectionDataTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `collectionDataType`
	 * labeled alternative in `SqlParser.dataType`.
	 * @param ctx the parse tree
	 */
	exitCollectionDataType?: (ctx: CollectionDataTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `spatialDataType`
	 * labeled alternative in `SqlParser.dataType`.
	 * @param ctx the parse tree
	 */
	enterSpatialDataType?: (ctx: SpatialDataTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `spatialDataType`
	 * labeled alternative in `SqlParser.dataType`.
	 * @param ctx the parse tree
	 */
	exitSpatialDataType?: (ctx: SpatialDataTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `longVarcharDataType`
	 * labeled alternative in `SqlParser.dataType`.
	 * @param ctx the parse tree
	 */
	enterLongVarcharDataType?: (ctx: LongVarcharDataTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `longVarcharDataType`
	 * labeled alternative in `SqlParser.dataType`.
	 * @param ctx the parse tree
	 */
	exitLongVarcharDataType?: (ctx: LongVarcharDataTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `longVarbinaryDataType`
	 * labeled alternative in `SqlParser.dataType`.
	 * @param ctx the parse tree
	 */
	enterLongVarbinaryDataType?: (ctx: LongVarbinaryDataTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `longVarbinaryDataType`
	 * labeled alternative in `SqlParser.dataType`.
	 * @param ctx the parse tree
	 */
	exitLongVarbinaryDataType?: (ctx: LongVarbinaryDataTypeContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.collectionOptions`.
	 * @param ctx the parse tree
	 */
	enterCollectionOptions?: (ctx: CollectionOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.collectionOptions`.
	 * @param ctx the parse tree
	 */
	exitCollectionOptions?: (ctx: CollectionOptionsContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.convertedDataType`.
	 * @param ctx the parse tree
	 */
	enterConvertedDataType?: (ctx: ConvertedDataTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.convertedDataType`.
	 * @param ctx the parse tree
	 */
	exitConvertedDataType?: (ctx: ConvertedDataTypeContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.lengthOneDimension`.
	 * @param ctx the parse tree
	 */
	enterLengthOneDimension?: (ctx: LengthOneDimensionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.lengthOneDimension`.
	 * @param ctx the parse tree
	 */
	exitLengthOneDimension?: (ctx: LengthOneDimensionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.lengthTwoDimension`.
	 * @param ctx the parse tree
	 */
	enterLengthTwoDimension?: (ctx: LengthTwoDimensionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.lengthTwoDimension`.
	 * @param ctx the parse tree
	 */
	exitLengthTwoDimension?: (ctx: LengthTwoDimensionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.lengthTwoOptionalDimension`.
	 * @param ctx the parse tree
	 */
	enterLengthTwoOptionalDimension?: (ctx: LengthTwoOptionalDimensionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.lengthTwoOptionalDimension`.
	 * @param ctx the parse tree
	 */
	exitLengthTwoOptionalDimension?: (ctx: LengthTwoOptionalDimensionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.uidList`.
	 * @param ctx the parse tree
	 */
	enterUidList?: (ctx: UidListContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.uidList`.
	 * @param ctx the parse tree
	 */
	exitUidList?: (ctx: UidListContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.tables`.
	 * @param ctx the parse tree
	 */
	enterTables?: (ctx: TablesContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.tables`.
	 * @param ctx the parse tree
	 */
	exitTables?: (ctx: TablesContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.indexColumnNames`.
	 * @param ctx the parse tree
	 */
	enterIndexColumnNames?: (ctx: IndexColumnNamesContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.indexColumnNames`.
	 * @param ctx the parse tree
	 */
	exitIndexColumnNames?: (ctx: IndexColumnNamesContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.expressions`.
	 * @param ctx the parse tree
	 */
	enterExpressions?: (ctx: ExpressionsContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.expressions`.
	 * @param ctx the parse tree
	 */
	exitExpressions?: (ctx: ExpressionsContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.expressionsWithDefaults`.
	 * @param ctx the parse tree
	 */
	enterExpressionsWithDefaults?: (ctx: ExpressionsWithDefaultsContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.expressionsWithDefaults`.
	 * @param ctx the parse tree
	 */
	exitExpressionsWithDefaults?: (ctx: ExpressionsWithDefaultsContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.constants`.
	 * @param ctx the parse tree
	 */
	enterConstants?: (ctx: ConstantsContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.constants`.
	 * @param ctx the parse tree
	 */
	exitConstants?: (ctx: ConstantsContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.simpleStrings`.
	 * @param ctx the parse tree
	 */
	enterSimpleStrings?: (ctx: SimpleStringsContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.simpleStrings`.
	 * @param ctx the parse tree
	 */
	exitSimpleStrings?: (ctx: SimpleStringsContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.userVariables`.
	 * @param ctx the parse tree
	 */
	enterUserVariables?: (ctx: UserVariablesContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.userVariables`.
	 * @param ctx the parse tree
	 */
	exitUserVariables?: (ctx: UserVariablesContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.defaultValue`.
	 * @param ctx the parse tree
	 */
	enterDefaultValue?: (ctx: DefaultValueContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.defaultValue`.
	 * @param ctx the parse tree
	 */
	exitDefaultValue?: (ctx: DefaultValueContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.currentTimestamp`.
	 * @param ctx the parse tree
	 */
	enterCurrentTimestamp?: (ctx: CurrentTimestampContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.currentTimestamp`.
	 * @param ctx the parse tree
	 */
	exitCurrentTimestamp?: (ctx: CurrentTimestampContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.expressionOrDefault`.
	 * @param ctx the parse tree
	 */
	enterExpressionOrDefault?: (ctx: ExpressionOrDefaultContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.expressionOrDefault`.
	 * @param ctx the parse tree
	 */
	exitExpressionOrDefault?: (ctx: ExpressionOrDefaultContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.ifExists`.
	 * @param ctx the parse tree
	 */
	enterIfExists?: (ctx: IfExistsContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.ifExists`.
	 * @param ctx the parse tree
	 */
	exitIfExists?: (ctx: IfExistsContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.ifNotExists`.
	 * @param ctx the parse tree
	 */
	enterIfNotExists?: (ctx: IfNotExistsContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.ifNotExists`.
	 * @param ctx the parse tree
	 */
	exitIfNotExists?: (ctx: IfNotExistsContext) => void;
	/**
	 * Enter a parse tree produced by the `specificFunctionCall`
	 * labeled alternative in `SqlParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterSpecificFunctionCall?: (ctx: SpecificFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `specificFunctionCall`
	 * labeled alternative in `SqlParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitSpecificFunctionCall?: (ctx: SpecificFunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by the `aggregateFunctionCall`
	 * labeled alternative in `SqlParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterAggregateFunctionCall?: (ctx: AggregateFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `aggregateFunctionCall`
	 * labeled alternative in `SqlParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitAggregateFunctionCall?: (ctx: AggregateFunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by the `scalarFunctionCall`
	 * labeled alternative in `SqlParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterScalarFunctionCall?: (ctx: ScalarFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `scalarFunctionCall`
	 * labeled alternative in `SqlParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitScalarFunctionCall?: (ctx: ScalarFunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by the `udfFunctionCall`
	 * labeled alternative in `SqlParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterUdfFunctionCall?: (ctx: UdfFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `udfFunctionCall`
	 * labeled alternative in `SqlParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitUdfFunctionCall?: (ctx: UdfFunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by the `passwordFunctionCall`
	 * labeled alternative in `SqlParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterPasswordFunctionCall?: (ctx: PasswordFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `passwordFunctionCall`
	 * labeled alternative in `SqlParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitPasswordFunctionCall?: (ctx: PasswordFunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by the `simpleFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 */
	enterSimpleFunctionCall?: (ctx: SimpleFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 */
	exitSimpleFunctionCall?: (ctx: SimpleFunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by the `dataTypeFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 */
	enterDataTypeFunctionCall?: (ctx: DataTypeFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `dataTypeFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 */
	exitDataTypeFunctionCall?: (ctx: DataTypeFunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by the `valuesFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 */
	enterValuesFunctionCall?: (ctx: ValuesFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `valuesFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 */
	exitValuesFunctionCall?: (ctx: ValuesFunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by the `caseFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 */
	enterCaseFunctionCall?: (ctx: CaseFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `caseFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 */
	exitCaseFunctionCall?: (ctx: CaseFunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by the `charFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 */
	enterCharFunctionCall?: (ctx: CharFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `charFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 */
	exitCharFunctionCall?: (ctx: CharFunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by the `positionFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 */
	enterPositionFunctionCall?: (ctx: PositionFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `positionFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 */
	exitPositionFunctionCall?: (ctx: PositionFunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by the `substrFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 */
	enterSubstrFunctionCall?: (ctx: SubstrFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `substrFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 */
	exitSubstrFunctionCall?: (ctx: SubstrFunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by the `trimFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 */
	enterTrimFunctionCall?: (ctx: TrimFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `trimFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 */
	exitTrimFunctionCall?: (ctx: TrimFunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by the `weightFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 */
	enterWeightFunctionCall?: (ctx: WeightFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `weightFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 */
	exitWeightFunctionCall?: (ctx: WeightFunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by the `extractFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 */
	enterExtractFunctionCall?: (ctx: ExtractFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `extractFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 */
	exitExtractFunctionCall?: (ctx: ExtractFunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by the `getFormatFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 */
	enterGetFormatFunctionCall?: (ctx: GetFormatFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `getFormatFunctionCall`
	 * labeled alternative in `SqlParser.specificFunction`.
	 * @param ctx the parse tree
	 */
	exitGetFormatFunctionCall?: (ctx: GetFormatFunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.caseFuncAlternative`.
	 * @param ctx the parse tree
	 */
	enterCaseFuncAlternative?: (ctx: CaseFuncAlternativeContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.caseFuncAlternative`.
	 * @param ctx the parse tree
	 */
	exitCaseFuncAlternative?: (ctx: CaseFuncAlternativeContext) => void;
	/**
	 * Enter a parse tree produced by the `levelWeightList`
	 * labeled alternative in `SqlParser.levelsInWeightString`.
	 * @param ctx the parse tree
	 */
	enterLevelWeightList?: (ctx: LevelWeightListContext) => void;
	/**
	 * Exit a parse tree produced by the `levelWeightList`
	 * labeled alternative in `SqlParser.levelsInWeightString`.
	 * @param ctx the parse tree
	 */
	exitLevelWeightList?: (ctx: LevelWeightListContext) => void;
	/**
	 * Enter a parse tree produced by the `levelWeightRange`
	 * labeled alternative in `SqlParser.levelsInWeightString`.
	 * @param ctx the parse tree
	 */
	enterLevelWeightRange?: (ctx: LevelWeightRangeContext) => void;
	/**
	 * Exit a parse tree produced by the `levelWeightRange`
	 * labeled alternative in `SqlParser.levelsInWeightString`.
	 * @param ctx the parse tree
	 */
	exitLevelWeightRange?: (ctx: LevelWeightRangeContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.levelInWeightListElement`.
	 * @param ctx the parse tree
	 */
	enterLevelInWeightListElement?: (ctx: LevelInWeightListElementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.levelInWeightListElement`.
	 * @param ctx the parse tree
	 */
	exitLevelInWeightListElement?: (ctx: LevelInWeightListElementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.aggregateWindowedFunction`.
	 * @param ctx the parse tree
	 */
	enterAggregateWindowedFunction?: (ctx: AggregateWindowedFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.aggregateWindowedFunction`.
	 * @param ctx the parse tree
	 */
	exitAggregateWindowedFunction?: (ctx: AggregateWindowedFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.scalarFunctionName`.
	 * @param ctx the parse tree
	 */
	enterScalarFunctionName?: (ctx: ScalarFunctionNameContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.scalarFunctionName`.
	 * @param ctx the parse tree
	 */
	exitScalarFunctionName?: (ctx: ScalarFunctionNameContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.passwordFunctionClause`.
	 * @param ctx the parse tree
	 */
	enterPasswordFunctionClause?: (ctx: PasswordFunctionClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.passwordFunctionClause`.
	 * @param ctx the parse tree
	 */
	exitPasswordFunctionClause?: (ctx: PasswordFunctionClauseContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.functionArgs`.
	 * @param ctx the parse tree
	 */
	enterFunctionArgs?: (ctx: FunctionArgsContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.functionArgs`.
	 * @param ctx the parse tree
	 */
	exitFunctionArgs?: (ctx: FunctionArgsContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.functionArg`.
	 * @param ctx the parse tree
	 */
	enterFunctionArg?: (ctx: FunctionArgContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.functionArg`.
	 * @param ctx the parse tree
	 */
	exitFunctionArg?: (ctx: FunctionArgContext) => void;
	/**
	 * Enter a parse tree produced by the `isExpression`
	 * labeled alternative in `SqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterIsExpression?: (ctx: IsExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `isExpression`
	 * labeled alternative in `SqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitIsExpression?: (ctx: IsExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `notExpression`
	 * labeled alternative in `SqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNotExpression?: (ctx: NotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `notExpression`
	 * labeled alternative in `SqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNotExpression?: (ctx: NotExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `logicalExpression`
	 * labeled alternative in `SqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLogicalExpression?: (ctx: LogicalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalExpression`
	 * labeled alternative in `SqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLogicalExpression?: (ctx: LogicalExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `predicateExpression`
	 * labeled alternative in `SqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPredicateExpression?: (ctx: PredicateExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `predicateExpression`
	 * labeled alternative in `SqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPredicateExpression?: (ctx: PredicateExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `soundsLikePredicate`
	 * labeled alternative in `SqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterSoundsLikePredicate?: (ctx: SoundsLikePredicateContext) => void;
	/**
	 * Exit a parse tree produced by the `soundsLikePredicate`
	 * labeled alternative in `SqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitSoundsLikePredicate?: (ctx: SoundsLikePredicateContext) => void;
	/**
	 * Enter a parse tree produced by the `expressionAtomPredicate`
	 * labeled alternative in `SqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterExpressionAtomPredicate?: (ctx: ExpressionAtomPredicateContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionAtomPredicate`
	 * labeled alternative in `SqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitExpressionAtomPredicate?: (ctx: ExpressionAtomPredicateContext) => void;
	/**
	 * Enter a parse tree produced by the `inPredicate`
	 * labeled alternative in `SqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterInPredicate?: (ctx: InPredicateContext) => void;
	/**
	 * Exit a parse tree produced by the `inPredicate`
	 * labeled alternative in `SqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitInPredicate?: (ctx: InPredicateContext) => void;
	/**
	 * Enter a parse tree produced by the `subqueryComparasionPredicate`
	 * labeled alternative in `SqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterSubqueryComparasionPredicate?: (ctx: SubqueryComparasionPredicateContext) => void;
	/**
	 * Exit a parse tree produced by the `subqueryComparasionPredicate`
	 * labeled alternative in `SqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitSubqueryComparasionPredicate?: (ctx: SubqueryComparasionPredicateContext) => void;
	/**
	 * Enter a parse tree produced by the `betweenPredicate`
	 * labeled alternative in `SqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterBetweenPredicate?: (ctx: BetweenPredicateContext) => void;
	/**
	 * Exit a parse tree produced by the `betweenPredicate`
	 * labeled alternative in `SqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitBetweenPredicate?: (ctx: BetweenPredicateContext) => void;
	/**
	 * Enter a parse tree produced by the `binaryComparasionPredicate`
	 * labeled alternative in `SqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterBinaryComparasionPredicate?: (ctx: BinaryComparasionPredicateContext) => void;
	/**
	 * Exit a parse tree produced by the `binaryComparasionPredicate`
	 * labeled alternative in `SqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitBinaryComparasionPredicate?: (ctx: BinaryComparasionPredicateContext) => void;
	/**
	 * Enter a parse tree produced by the `isNullPredicate`
	 * labeled alternative in `SqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterIsNullPredicate?: (ctx: IsNullPredicateContext) => void;
	/**
	 * Exit a parse tree produced by the `isNullPredicate`
	 * labeled alternative in `SqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitIsNullPredicate?: (ctx: IsNullPredicateContext) => void;
	/**
	 * Enter a parse tree produced by the `likePredicate`
	 * labeled alternative in `SqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterLikePredicate?: (ctx: LikePredicateContext) => void;
	/**
	 * Exit a parse tree produced by the `likePredicate`
	 * labeled alternative in `SqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitLikePredicate?: (ctx: LikePredicateContext) => void;
	/**
	 * Enter a parse tree produced by the `regexpPredicate`
	 * labeled alternative in `SqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterRegexpPredicate?: (ctx: RegexpPredicateContext) => void;
	/**
	 * Exit a parse tree produced by the `regexpPredicate`
	 * labeled alternative in `SqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitRegexpPredicate?: (ctx: RegexpPredicateContext) => void;
	/**
	 * Enter a parse tree produced by the `unaryExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpressionAtom?: (ctx: UnaryExpressionAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpressionAtom?: (ctx: UnaryExpressionAtomContext) => void;
	/**
	 * Enter a parse tree produced by the `collateExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 */
	enterCollateExpressionAtom?: (ctx: CollateExpressionAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `collateExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 */
	exitCollateExpressionAtom?: (ctx: CollateExpressionAtomContext) => void;
	/**
	 * Enter a parse tree produced by the `subqueryExpessionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 */
	enterSubqueryExpessionAtom?: (ctx: SubqueryExpessionAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `subqueryExpessionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 */
	exitSubqueryExpessionAtom?: (ctx: SubqueryExpessionAtomContext) => void;
	/**
	 * Enter a parse tree produced by the `mysqlVariableExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 */
	enterMysqlVariableExpressionAtom?: (ctx: MysqlVariableExpressionAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `mysqlVariableExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 */
	exitMysqlVariableExpressionAtom?: (ctx: MysqlVariableExpressionAtomContext) => void;
	/**
	 * Enter a parse tree produced by the `nestedExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 */
	enterNestedExpressionAtom?: (ctx: NestedExpressionAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `nestedExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 */
	exitNestedExpressionAtom?: (ctx: NestedExpressionAtomContext) => void;
	/**
	 * Enter a parse tree produced by the `nestedRowExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 */
	enterNestedRowExpressionAtom?: (ctx: NestedRowExpressionAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `nestedRowExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 */
	exitNestedRowExpressionAtom?: (ctx: NestedRowExpressionAtomContext) => void;
	/**
	 * Enter a parse tree produced by the `mathExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 */
	enterMathExpressionAtom?: (ctx: MathExpressionAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `mathExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 */
	exitMathExpressionAtom?: (ctx: MathExpressionAtomContext) => void;
	/**
	 * Enter a parse tree produced by the `intervalExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 */
	enterIntervalExpressionAtom?: (ctx: IntervalExpressionAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `intervalExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 */
	exitIntervalExpressionAtom?: (ctx: IntervalExpressionAtomContext) => void;
	/**
	 * Enter a parse tree produced by the `existsExpessionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 */
	enterExistsExpessionAtom?: (ctx: ExistsExpessionAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `existsExpessionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 */
	exitExistsExpessionAtom?: (ctx: ExistsExpessionAtomContext) => void;
	/**
	 * Enter a parse tree produced by the `constantExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 */
	enterConstantExpressionAtom?: (ctx: ConstantExpressionAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `constantExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 */
	exitConstantExpressionAtom?: (ctx: ConstantExpressionAtomContext) => void;
	/**
	 * Enter a parse tree produced by the `functionCallExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 */
	enterFunctionCallExpressionAtom?: (ctx: FunctionCallExpressionAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `functionCallExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 */
	exitFunctionCallExpressionAtom?: (ctx: FunctionCallExpressionAtomContext) => void;
	/**
	 * Enter a parse tree produced by the `binaryExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 */
	enterBinaryExpressionAtom?: (ctx: BinaryExpressionAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `binaryExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 */
	exitBinaryExpressionAtom?: (ctx: BinaryExpressionAtomContext) => void;
	/**
	 * Enter a parse tree produced by the `fullColumnNameExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 */
	enterFullColumnNameExpressionAtom?: (ctx: FullColumnNameExpressionAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `fullColumnNameExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 */
	exitFullColumnNameExpressionAtom?: (ctx: FullColumnNameExpressionAtomContext) => void;
	/**
	 * Enter a parse tree produced by the `bitExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 */
	enterBitExpressionAtom?: (ctx: BitExpressionAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `bitExpressionAtom`
	 * labeled alternative in `SqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 */
	exitBitExpressionAtom?: (ctx: BitExpressionAtomContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.unaryOperator`.
	 * @param ctx the parse tree
	 */
	enterUnaryOperator?: (ctx: UnaryOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.unaryOperator`.
	 * @param ctx the parse tree
	 */
	exitUnaryOperator?: (ctx: UnaryOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.logicalOperator`.
	 * @param ctx the parse tree
	 */
	enterLogicalOperator?: (ctx: LogicalOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.logicalOperator`.
	 * @param ctx the parse tree
	 */
	exitLogicalOperator?: (ctx: LogicalOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.bitOperator`.
	 * @param ctx the parse tree
	 */
	enterBitOperator?: (ctx: BitOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.bitOperator`.
	 * @param ctx the parse tree
	 */
	exitBitOperator?: (ctx: BitOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.mathOperator`.
	 * @param ctx the parse tree
	 */
	enterMathOperator?: (ctx: MathOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.mathOperator`.
	 * @param ctx the parse tree
	 */
	exitMathOperator?: (ctx: MathOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.charsetNameBase`.
	 * @param ctx the parse tree
	 */
	enterCharsetNameBase?: (ctx: CharsetNameBaseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.charsetNameBase`.
	 * @param ctx the parse tree
	 */
	exitCharsetNameBase?: (ctx: CharsetNameBaseContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.transactionLevelBase`.
	 * @param ctx the parse tree
	 */
	enterTransactionLevelBase?: (ctx: TransactionLevelBaseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.transactionLevelBase`.
	 * @param ctx the parse tree
	 */
	exitTransactionLevelBase?: (ctx: TransactionLevelBaseContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.privilegesBase`.
	 * @param ctx the parse tree
	 */
	enterPrivilegesBase?: (ctx: PrivilegesBaseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.privilegesBase`.
	 * @param ctx the parse tree
	 */
	exitPrivilegesBase?: (ctx: PrivilegesBaseContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.intervalTypeBase`.
	 * @param ctx the parse tree
	 */
	enterIntervalTypeBase?: (ctx: IntervalTypeBaseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.intervalTypeBase`.
	 * @param ctx the parse tree
	 */
	exitIntervalTypeBase?: (ctx: IntervalTypeBaseContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.dataTypeBase`.
	 * @param ctx the parse tree
	 */
	enterDataTypeBase?: (ctx: DataTypeBaseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.dataTypeBase`.
	 * @param ctx the parse tree
	 */
	exitDataTypeBase?: (ctx: DataTypeBaseContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.keywordsCanBeId`.
	 * @param ctx the parse tree
	 */
	enterKeywordsCanBeId?: (ctx: KeywordsCanBeIdContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.keywordsCanBeId`.
	 * @param ctx the parse tree
	 */
	exitKeywordsCanBeId?: (ctx: KeywordsCanBeIdContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.functionNameBase`.
	 * @param ctx the parse tree
	 */
	enterFunctionNameBase?: (ctx: FunctionNameBaseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.functionNameBase`.
	 * @param ctx the parse tree
	 */
	exitFunctionNameBase?: (ctx: FunctionNameBaseContext) => void;
}

