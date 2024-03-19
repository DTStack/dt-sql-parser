// Generated from dt-sql-parser/src/grammar/mysql/MySqlParser.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { ProgramContext } from "./MySqlParser.js";
import { SingleStatementContext } from "./MySqlParser.js";
import { SqlStatementContext } from "./MySqlParser.js";
import { EmptyStatement_Context } from "./MySqlParser.js";
import { DdlStatementContext } from "./MySqlParser.js";
import { DmlStatementContext } from "./MySqlParser.js";
import { TransactionStatementContext } from "./MySqlParser.js";
import { ReplicationStatementContext } from "./MySqlParser.js";
import { PreparedStatementContext } from "./MySqlParser.js";
import { CompoundStatementContext } from "./MySqlParser.js";
import { AdministrationStatementContext } from "./MySqlParser.js";
import { UtilityStatementContext } from "./MySqlParser.js";
import { CreateDatabaseContext } from "./MySqlParser.js";
import { CreateEventContext } from "./MySqlParser.js";
import { CreateIndexContext } from "./MySqlParser.js";
import { CreateLogfileGroupContext } from "./MySqlParser.js";
import { CreateProcedureContext } from "./MySqlParser.js";
import { CreateRoleContext } from "./MySqlParser.js";
import { CreateServerContext } from "./MySqlParser.js";
import { QueryCreateTableContext } from "./MySqlParser.js";
import { CopyCreateTableContext } from "./MySqlParser.js";
import { ColumnCreateTableContext } from "./MySqlParser.js";
import { CreateTablespaceInnodbContext } from "./MySqlParser.js";
import { CreateTablespaceNdbContext } from "./MySqlParser.js";
import { CreateTriggerContext } from "./MySqlParser.js";
import { WithClauseContext } from "./MySqlParser.js";
import { CommonTableExpressionsContext } from "./MySqlParser.js";
import { CreateViewContext } from "./MySqlParser.js";
import { CreateDatabaseOptionContext } from "./MySqlParser.js";
import { CharSetContext } from "./MySqlParser.js";
import { CurrentUserExpressionContext } from "./MySqlParser.js";
import { OwnerStatementContext } from "./MySqlParser.js";
import { PreciseScheduleContext } from "./MySqlParser.js";
import { IntervalScheduleContext } from "./MySqlParser.js";
import { TimestampValueContext } from "./MySqlParser.js";
import { IntervalExprContext } from "./MySqlParser.js";
import { IntervalTypeContext } from "./MySqlParser.js";
import { EnableTypeContext } from "./MySqlParser.js";
import { IndexTypeContext } from "./MySqlParser.js";
import { IndexOptionContext } from "./MySqlParser.js";
import { ProcedureParameterContext } from "./MySqlParser.js";
import { RoutineCommentContext } from "./MySqlParser.js";
import { RoutineLanguageContext } from "./MySqlParser.js";
import { RoutineBehaviorContext } from "./MySqlParser.js";
import { RoutineDataContext } from "./MySqlParser.js";
import { RoutineSecurityContext } from "./MySqlParser.js";
import { ServerOptionContext } from "./MySqlParser.js";
import { CreateDefinitionsContext } from "./MySqlParser.js";
import { CreateDefinitionContext } from "./MySqlParser.js";
import { CheckConstraintDefinitionContext } from "./MySqlParser.js";
import { ConstraintSymbolContext } from "./MySqlParser.js";
import { ColumnDefinitionContext } from "./MySqlParser.js";
import { NullColumnConstraintContext } from "./MySqlParser.js";
import { DefaultColumnConstraintContext } from "./MySqlParser.js";
import { VisibilityColumnConstraintContext } from "./MySqlParser.js";
import { InvisibilityColumnConstraintContext } from "./MySqlParser.js";
import { AutoIncrementColumnConstraintContext } from "./MySqlParser.js";
import { PrimaryKeyColumnConstraintContext } from "./MySqlParser.js";
import { UniqueKeyColumnConstraintContext } from "./MySqlParser.js";
import { CommentColumnConstraintContext } from "./MySqlParser.js";
import { FormatColumnConstraintContext } from "./MySqlParser.js";
import { StorageColumnConstraintContext } from "./MySqlParser.js";
import { ReferenceColumnConstraintContext } from "./MySqlParser.js";
import { CollateColumnConstraintContext } from "./MySqlParser.js";
import { GeneratedColumnConstraintContext } from "./MySqlParser.js";
import { SerialDefaultColumnConstraintContext } from "./MySqlParser.js";
import { CheckExprContext } from "./MySqlParser.js";
import { ReferenceDefinitionContext } from "./MySqlParser.js";
import { ReferenceActionContext } from "./MySqlParser.js";
import { ReferenceControlTypeContext } from "./MySqlParser.js";
import { TableOptionEngineContext } from "./MySqlParser.js";
import { TableOptionEngineAttributeContext } from "./MySqlParser.js";
import { TableOptionAutoextendSizeContext } from "./MySqlParser.js";
import { TableOptionAutoIncrementContext } from "./MySqlParser.js";
import { TableOptionAverageContext } from "./MySqlParser.js";
import { TableOptionCharsetContext } from "./MySqlParser.js";
import { TableOptionChecksumContext } from "./MySqlParser.js";
import { TableOptionCollateContext } from "./MySqlParser.js";
import { TableOptionCommentContext } from "./MySqlParser.js";
import { TableOptionCompressionContext } from "./MySqlParser.js";
import { TableOptionConnectionContext } from "./MySqlParser.js";
import { TableOptionDataDirectoryContext } from "./MySqlParser.js";
import { TableOptionDelayContext } from "./MySqlParser.js";
import { TableOptionEncryptionContext } from "./MySqlParser.js";
import { TableOptionPageCompressedContext } from "./MySqlParser.js";
import { TableOptionPageCompressionLevelContext } from "./MySqlParser.js";
import { TableOptionEncryptionKeyIdContext } from "./MySqlParser.js";
import { TableOptionIndexDirectoryContext } from "./MySqlParser.js";
import { TableOptionInsertMethodContext } from "./MySqlParser.js";
import { TableOptionKeyBlockSizeContext } from "./MySqlParser.js";
import { TableOptionMaxRowsContext } from "./MySqlParser.js";
import { TableOptionMinRowsContext } from "./MySqlParser.js";
import { TableOptionPackKeysContext } from "./MySqlParser.js";
import { TableOptionPasswordContext } from "./MySqlParser.js";
import { TableOptionRowFormatContext } from "./MySqlParser.js";
import { TableOptionStartTransactionContext } from "./MySqlParser.js";
import { TableOptionSecondaryEngineAttributeContext } from "./MySqlParser.js";
import { TableOptionRecalculationContext } from "./MySqlParser.js";
import { TableOptionPersistentContext } from "./MySqlParser.js";
import { TableOptionSamplePageContext } from "./MySqlParser.js";
import { TableOptionTablespaceContext } from "./MySqlParser.js";
import { TableOptionTableTypeContext } from "./MySqlParser.js";
import { TableOptionTransactionalContext } from "./MySqlParser.js";
import { TableOptionUnionContext } from "./MySqlParser.js";
import { TableTypeContext } from "./MySqlParser.js";
import { TablespaceStorageContext } from "./MySqlParser.js";
import { PartitionDefinitionsContext } from "./MySqlParser.js";
import { PartitionFunctionHashContext } from "./MySqlParser.js";
import { PartitionFunctionKeyContext } from "./MySqlParser.js";
import { PartitionFunctionRangeContext } from "./MySqlParser.js";
import { PartitionFunctionListContext } from "./MySqlParser.js";
import { SubPartitionFunctionHashContext } from "./MySqlParser.js";
import { SubPartitionFunctionKeyContext } from "./MySqlParser.js";
import { PartitionComparisonContext } from "./MySqlParser.js";
import { PartitionListAtomContext } from "./MySqlParser.js";
import { PartitionListVectorContext } from "./MySqlParser.js";
import { PartitionSimpleContext } from "./MySqlParser.js";
import { PartitionDefinerAtomContext } from "./MySqlParser.js";
import { PartitionDefinerVectorContext } from "./MySqlParser.js";
import { SubpartitionDefinitionContext } from "./MySqlParser.js";
import { PartitionOptionEngineContext } from "./MySqlParser.js";
import { PartitionOptionCommentContext } from "./MySqlParser.js";
import { PartitionOptionDataDirectoryContext } from "./MySqlParser.js";
import { PartitionOptionIndexDirectoryContext } from "./MySqlParser.js";
import { PartitionOptionMaxRowsContext } from "./MySqlParser.js";
import { PartitionOptionMinRowsContext } from "./MySqlParser.js";
import { PartitionOptionTablespaceContext } from "./MySqlParser.js";
import { PartitionOptionNodeGroupContext } from "./MySqlParser.js";
import { AlterSimpleDatabaseContext } from "./MySqlParser.js";
import { AlterUpgradeNameContext } from "./MySqlParser.js";
import { AlterEventContext } from "./MySqlParser.js";
import { AlterFunctionContext } from "./MySqlParser.js";
import { AlterInstanceContext } from "./MySqlParser.js";
import { AlterLogfileGroupContext } from "./MySqlParser.js";
import { AlterProcedureContext } from "./MySqlParser.js";
import { AlterServerContext } from "./MySqlParser.js";
import { AlterTableContext } from "./MySqlParser.js";
import { AlterTablespaceContext } from "./MySqlParser.js";
import { AlterViewContext } from "./MySqlParser.js";
import { AlterByTableOptionContext } from "./MySqlParser.js";
import { AlterByAddColumnContext } from "./MySqlParser.js";
import { AlterByAddColumnsContext } from "./MySqlParser.js";
import { AlterByAddIndexContext } from "./MySqlParser.js";
import { AlterByAddSpecialIndexContext } from "./MySqlParser.js";
import { AlterByAddPrimaryKeyContext } from "./MySqlParser.js";
import { AlterByAddUniqueKeyContext } from "./MySqlParser.js";
import { AlterByAddForeignKeyContext } from "./MySqlParser.js";
import { AlterByAddCheckTableConstraintContext } from "./MySqlParser.js";
import { AlterByDropConstraintCheckContext } from "./MySqlParser.js";
import { AlterByAlterCheckTableConstraintContext } from "./MySqlParser.js";
import { AlterBySetAlgorithmContext } from "./MySqlParser.js";
import { AlterByAlterColumnDefaultContext } from "./MySqlParser.js";
import { AlterByAlterIndexVisibilityContext } from "./MySqlParser.js";
import { AlterByChangeColumnContext } from "./MySqlParser.js";
import { AlterByDefaultCharsetContext } from "./MySqlParser.js";
import { AlterByConvertCharsetContext } from "./MySqlParser.js";
import { AlterKeysContext } from "./MySqlParser.js";
import { AlterTablespaceOptionContext } from "./MySqlParser.js";
import { AlterByDropColumnContext } from "./MySqlParser.js";
import { AlterByDropIndexContext } from "./MySqlParser.js";
import { AlterByDropPrimaryKeyContext } from "./MySqlParser.js";
import { AlterByDropForeignKeyContext } from "./MySqlParser.js";
import { AlterByForceContext } from "./MySqlParser.js";
import { AlterByLockContext } from "./MySqlParser.js";
import { AlterByModifyColumnContext } from "./MySqlParser.js";
import { AlterByOrderContext } from "./MySqlParser.js";
import { AlterByRenameColumnContext } from "./MySqlParser.js";
import { AlterByRenameIndexContext } from "./MySqlParser.js";
import { AlterByRenameContext } from "./MySqlParser.js";
import { AlterByValidateContext } from "./MySqlParser.js";
import { AlterPartitionContext } from "./MySqlParser.js";
import { AlterByAddPartitionContext } from "./MySqlParser.js";
import { AlterByDropPartitionContext } from "./MySqlParser.js";
import { AlterByDiscardPartitionContext } from "./MySqlParser.js";
import { AlterByImportPartitionContext } from "./MySqlParser.js";
import { AlterByTruncatePartitionContext } from "./MySqlParser.js";
import { AlterByCoalescePartitionContext } from "./MySqlParser.js";
import { AlterByReorganizePartitionContext } from "./MySqlParser.js";
import { AlterByExchangePartitionContext } from "./MySqlParser.js";
import { AlterByAnalyzePartitionContext } from "./MySqlParser.js";
import { AlterByCheckPartitionContext } from "./MySqlParser.js";
import { AlterByOptimizePartitionContext } from "./MySqlParser.js";
import { AlterByRebuildPartitionContext } from "./MySqlParser.js";
import { AlterByRepairPartitionContext } from "./MySqlParser.js";
import { AlterByRemovePartitioningContext } from "./MySqlParser.js";
import { AlterByUpgradePartitioningContext } from "./MySqlParser.js";
import { DropDatabaseContext } from "./MySqlParser.js";
import { DropEventContext } from "./MySqlParser.js";
import { DropIndexContext } from "./MySqlParser.js";
import { DropLogfileGroupContext } from "./MySqlParser.js";
import { DropProcedureContext } from "./MySqlParser.js";
import { DropFunctionContext } from "./MySqlParser.js";
import { DropServerContext } from "./MySqlParser.js";
import { DropSpatialContext } from "./MySqlParser.js";
import { DropTableContext } from "./MySqlParser.js";
import { DropTablespaceContext } from "./MySqlParser.js";
import { DropTriggerContext } from "./MySqlParser.js";
import { DropViewContext } from "./MySqlParser.js";
import { DropRoleContext } from "./MySqlParser.js";
import { SetRoleContext } from "./MySqlParser.js";
import { RenameTableContext } from "./MySqlParser.js";
import { RenameTableClauseContext } from "./MySqlParser.js";
import { TruncateTableContext } from "./MySqlParser.js";
import { CallStatementContext } from "./MySqlParser.js";
import { DeleteStatementContext } from "./MySqlParser.js";
import { DoStatementContext } from "./MySqlParser.js";
import { HandlerStatementContext } from "./MySqlParser.js";
import { InsertStatementContext } from "./MySqlParser.js";
import { AsRowAliasContext } from "./MySqlParser.js";
import { SelectOrTableOrValuesContext } from "./MySqlParser.js";
import { InterSectStatementContext } from "./MySqlParser.js";
import { InterSectQueryContext } from "./MySqlParser.js";
import { LoadDataStatementContext } from "./MySqlParser.js";
import { LoadXmlStatementContext } from "./MySqlParser.js";
import { ParenthesizedQueryContext } from "./MySqlParser.js";
import { ReplaceStatementContext } from "./MySqlParser.js";
import { UnionAndLateralSelectContext } from "./MySqlParser.js";
import { SelectExpressionContext } from "./MySqlParser.js";
import { SetOperationsContext } from "./MySqlParser.js";
import { QueryExpressionBodyContext } from "./MySqlParser.js";
import { QueryItemContext } from "./MySqlParser.js";
import { QueryPrimaryContext } from "./MySqlParser.js";
import { UpdateStatementContext } from "./MySqlParser.js";
import { ValuesStatementContext } from "./MySqlParser.js";
import { ParenthesizedQueryExpressionContext } from "./MySqlParser.js";
import { QueryBlockContext } from "./MySqlParser.js";
import { ReplaceStatementValuesOrSelectOrTableContext } from "./MySqlParser.js";
import { RowValuesListContext } from "./MySqlParser.js";
import { SetAssignmentListContext } from "./MySqlParser.js";
import { UpdatedElementContext } from "./MySqlParser.js";
import { AssignmentFieldContext } from "./MySqlParser.js";
import { LockClauseContext } from "./MySqlParser.js";
import { SingleDeleteStatementContext } from "./MySqlParser.js";
import { MultipleDeleteStatementContext } from "./MySqlParser.js";
import { HandlerOpenStatementContext } from "./MySqlParser.js";
import { HandlerReadIndexStatementContext } from "./MySqlParser.js";
import { HandlerReadStatementContext } from "./MySqlParser.js";
import { HandlerCloseStatementContext } from "./MySqlParser.js";
import { ImportTableStatementContext } from "./MySqlParser.js";
import { SingleUpdateStatementContext } from "./MySqlParser.js";
import { MultipleUpdateStatementContext } from "./MySqlParser.js";
import { OrderByClauseContext } from "./MySqlParser.js";
import { OrderByExpressionContext } from "./MySqlParser.js";
import { TableSourcesContext } from "./MySqlParser.js";
import { TableSourceBaseContext } from "./MySqlParser.js";
import { TableSourceNestedContext } from "./MySqlParser.js";
import { TableJsonContext } from "./MySqlParser.js";
import { AtomTableItemContext } from "./MySqlParser.js";
import { SubqueryTableItemContext } from "./MySqlParser.js";
import { TableSourcesItemContext } from "./MySqlParser.js";
import { FullColumnNamesContext } from "./MySqlParser.js";
import { IndexHintContext } from "./MySqlParser.js";
import { IndexHintTypeContext } from "./MySqlParser.js";
import { InnerJoinContext } from "./MySqlParser.js";
import { StraightJoinContext } from "./MySqlParser.js";
import { OuterJoinContext } from "./MySqlParser.js";
import { NaturalJoinContext } from "./MySqlParser.js";
import { JoinSpecContext } from "./MySqlParser.js";
import { QueryExpressionContext } from "./MySqlParser.js";
import { QuerySpecificationContext } from "./MySqlParser.js";
import { UnionStatementContext } from "./MySqlParser.js";
import { LateralStatementContext } from "./MySqlParser.js";
import { JsonTableContext } from "./MySqlParser.js";
import { JsonColumnListContext } from "./MySqlParser.js";
import { JsonColumnContext } from "./MySqlParser.js";
import { JsonOnEmptyContext } from "./MySqlParser.js";
import { JsonOnErrorContext } from "./MySqlParser.js";
import { SelectSpecContext } from "./MySqlParser.js";
import { SelectElementsContext } from "./MySqlParser.js";
import { SelectExpressionElementContext } from "./MySqlParser.js";
import { SelectFunctionElementContext } from "./MySqlParser.js";
import { SelectStarElementContext } from "./MySqlParser.js";
import { SelectColumnElementContext } from "./MySqlParser.js";
import { SelectIntoVariablesContext } from "./MySqlParser.js";
import { SelectIntoDumpFileContext } from "./MySqlParser.js";
import { SelectIntoTextFileContext } from "./MySqlParser.js";
import { SelectFieldsIntoContext } from "./MySqlParser.js";
import { SelectLinesIntoContext } from "./MySqlParser.js";
import { FromClauseContext } from "./MySqlParser.js";
import { GroupByClauseContext } from "./MySqlParser.js";
import { HavingClauseContext } from "./MySqlParser.js";
import { WindowClauseContext } from "./MySqlParser.js";
import { GroupByItemContext } from "./MySqlParser.js";
import { LimitClauseContext } from "./MySqlParser.js";
import { LimitClauseAtomContext } from "./MySqlParser.js";
import { StartTransactionContext } from "./MySqlParser.js";
import { BeginWorkContext } from "./MySqlParser.js";
import { CommitWorkContext } from "./MySqlParser.js";
import { RollbackWorkContext } from "./MySqlParser.js";
import { SavepointStatementContext } from "./MySqlParser.js";
import { RollbackStatementContext } from "./MySqlParser.js";
import { ReleaseStatementContext } from "./MySqlParser.js";
import { LockTablesContext } from "./MySqlParser.js";
import { UnlockTablesContext } from "./MySqlParser.js";
import { SetAutocommitStatementContext } from "./MySqlParser.js";
import { SetTransactionStatementContext } from "./MySqlParser.js";
import { TransactionModeContext } from "./MySqlParser.js";
import { LockTableElementContext } from "./MySqlParser.js";
import { LockActionContext } from "./MySqlParser.js";
import { TransactionOptionContext } from "./MySqlParser.js";
import { TransactionLevelContext } from "./MySqlParser.js";
import { ChangeMasterContext } from "./MySqlParser.js";
import { ChangeReplicationFilterContext } from "./MySqlParser.js";
import { ChangeReplicationSourceContext } from "./MySqlParser.js";
import { PurgeBinaryLogsContext } from "./MySqlParser.js";
import { StartSlaveOrReplicaContext } from "./MySqlParser.js";
import { StopSlaveOrReplicaContext } from "./MySqlParser.js";
import { StartGroupReplicationContext } from "./MySqlParser.js";
import { StopGroupReplicationContext } from "./MySqlParser.js";
import { MasterStringOptionContext } from "./MySqlParser.js";
import { MasterDecimalOptionContext } from "./MySqlParser.js";
import { MasterBoolOptionContext } from "./MySqlParser.js";
import { V8AddMasterOptionContext } from "./MySqlParser.js";
import { MasterUidListOptionContext } from "./MySqlParser.js";
import { StringMasterOptionContext } from "./MySqlParser.js";
import { DecimalMasterOptionContext } from "./MySqlParser.js";
import { BoolMasterOptionContext } from "./MySqlParser.js";
import { V8NewMasterOptionContext } from "./MySqlParser.js";
import { SourceStringOptionContext } from "./MySqlParser.js";
import { SourceDecimalOptionContext } from "./MySqlParser.js";
import { SourceBoolOptionContext } from "./MySqlParser.js";
import { SourceOtherOptionContext } from "./MySqlParser.js";
import { SourceUidListOptionContext } from "./MySqlParser.js";
import { StringSourceOptionContext } from "./MySqlParser.js";
import { DecimalSourceOptionContext } from "./MySqlParser.js";
import { BoolSourceOptionContext } from "./MySqlParser.js";
import { OtherSourceOptionContext } from "./MySqlParser.js";
import { ChannelOptionContext } from "./MySqlParser.js";
import { DoDbReplicationContext } from "./MySqlParser.js";
import { IgnoreDbReplicationContext } from "./MySqlParser.js";
import { DoTableReplicationContext } from "./MySqlParser.js";
import { IgnoreTableReplicationContext } from "./MySqlParser.js";
import { WildDoTableReplicationContext } from "./MySqlParser.js";
import { WildIgnoreTableReplicationContext } from "./MySqlParser.js";
import { RewriteDbReplicationContext } from "./MySqlParser.js";
import { TablePairContext } from "./MySqlParser.js";
import { ThreadTypeContext } from "./MySqlParser.js";
import { GtidsUntilOptionContext } from "./MySqlParser.js";
import { MasterLogUntilOptionContext } from "./MySqlParser.js";
import { SourceLogUntilOptionContext } from "./MySqlParser.js";
import { RelayLogUntilOptionContext } from "./MySqlParser.js";
import { SqlGapsUntilOptionContext } from "./MySqlParser.js";
import { UserConnectionOptionContext } from "./MySqlParser.js";
import { PasswordConnectionOptionContext } from "./MySqlParser.js";
import { DefaultAuthConnectionOptionContext } from "./MySqlParser.js";
import { PluginDirConnectionOptionContext } from "./MySqlParser.js";
import { GtuidSetContext } from "./MySqlParser.js";
import { XaStartTransactionContext } from "./MySqlParser.js";
import { XaEndTransactionContext } from "./MySqlParser.js";
import { XaPrepareStatementContext } from "./MySqlParser.js";
import { XaCommitWorkContext } from "./MySqlParser.js";
import { XaRollbackWorkContext } from "./MySqlParser.js";
import { XaRecoverWorkContext } from "./MySqlParser.js";
import { PrepareStatementContext } from "./MySqlParser.js";
import { ExecuteStatementContext } from "./MySqlParser.js";
import { DeallocatePrepareContext } from "./MySqlParser.js";
import { RoutineBodyContext } from "./MySqlParser.js";
import { BlockStatementContext } from "./MySqlParser.js";
import { CaseStatementContext } from "./MySqlParser.js";
import { IfStatementContext } from "./MySqlParser.js";
import { IterateStatementContext } from "./MySqlParser.js";
import { LeaveStatementContext } from "./MySqlParser.js";
import { LoopStatementContext } from "./MySqlParser.js";
import { RepeatStatementContext } from "./MySqlParser.js";
import { ReturnStatementContext } from "./MySqlParser.js";
import { WhileStatementContext } from "./MySqlParser.js";
import { CloseCursorContext } from "./MySqlParser.js";
import { FetchCursorContext } from "./MySqlParser.js";
import { OpenCursorContext } from "./MySqlParser.js";
import { DeclareVariableContext } from "./MySqlParser.js";
import { DeclareConditionContext } from "./MySqlParser.js";
import { DeclareCursorContext } from "./MySqlParser.js";
import { DeclareHandlerContext } from "./MySqlParser.js";
import { HandlerConditionCodeContext } from "./MySqlParser.js";
import { HandlerConditionStateContext } from "./MySqlParser.js";
import { HandlerConditionNameContext } from "./MySqlParser.js";
import { HandlerConditionWarningContext } from "./MySqlParser.js";
import { HandlerConditionNotfoundContext } from "./MySqlParser.js";
import { HandlerConditionExceptionContext } from "./MySqlParser.js";
import { ProcedureSqlStatementContext } from "./MySqlParser.js";
import { CaseAlternativeContext } from "./MySqlParser.js";
import { ElifAlternativeContext } from "./MySqlParser.js";
import { AlterUserContext } from "./MySqlParser.js";
import { CreateUserContext } from "./MySqlParser.js";
import { DropUserContext } from "./MySqlParser.js";
import { GrantStatementContext } from "./MySqlParser.js";
import { RoleOptionContext } from "./MySqlParser.js";
import { GrantProxyContext } from "./MySqlParser.js";
import { AlterResourceGroupContext } from "./MySqlParser.js";
import { CreateResourceGroupContext } from "./MySqlParser.js";
import { DropResourceGroupContext } from "./MySqlParser.js";
import { SetResourceGroupContext } from "./MySqlParser.js";
import { ResourceGroupVcpuSpecContext } from "./MySqlParser.js";
import { RenameUserContext } from "./MySqlParser.js";
import { DetailRevokeContext } from "./MySqlParser.js";
import { ShortRevokeContext } from "./MySqlParser.js";
import { ProxyAndRoleRevokeContext } from "./MySqlParser.js";
import { IgnoreUnknownUserContext } from "./MySqlParser.js";
import { PrivilegeObjectTypeContext } from "./MySqlParser.js";
import { V57Context } from "./MySqlParser.js";
import { V80Context } from "./MySqlParser.js";
import { UserSpecificationContext } from "./MySqlParser.js";
import { AlterUserAuthOptionContext } from "./MySqlParser.js";
import { CreateUserAuthOptionContext } from "./MySqlParser.js";
import { CreateUserInitialAuthOptionContext } from "./MySqlParser.js";
import { HashAuthOptionContext } from "./MySqlParser.js";
import { RandomAuthOptionContext } from "./MySqlParser.js";
import { StringAuthOptionContext } from "./MySqlParser.js";
import { ModuleAuthOptionContext } from "./MySqlParser.js";
import { SimpleAuthOptionContext } from "./MySqlParser.js";
import { AuthOptionClauseContext } from "./MySqlParser.js";
import { ModuleContext } from "./MySqlParser.js";
import { PasswordModuleOptionContext } from "./MySqlParser.js";
import { TlsOptionContext } from "./MySqlParser.js";
import { UserResourceOptionContext } from "./MySqlParser.js";
import { UserPasswordOptionContext } from "./MySqlParser.js";
import { UserLockOptionContext } from "./MySqlParser.js";
import { FactorAuthOptionContext } from "./MySqlParser.js";
import { RegistrationOptionContext } from "./MySqlParser.js";
import { FactorContext } from "./MySqlParser.js";
import { PrivelegeClauseContext } from "./MySqlParser.js";
import { PrivilegeContext } from "./MySqlParser.js";
import { CurrentSchemaPriviLevelContext } from "./MySqlParser.js";
import { GlobalPrivLevelContext } from "./MySqlParser.js";
import { DefiniteSchemaPrivLevelContext } from "./MySqlParser.js";
import { DefiniteFullTablePrivLevelContext } from "./MySqlParser.js";
import { DefiniteFullTablePrivLevel2Context } from "./MySqlParser.js";
import { DefiniteTablePrivLevelContext } from "./MySqlParser.js";
import { RenameUserClauseContext } from "./MySqlParser.js";
import { AnalyzeTableContext } from "./MySqlParser.js";
import { CheckTableContext } from "./MySqlParser.js";
import { ChecksumTableContext } from "./MySqlParser.js";
import { OptimizeTableContext } from "./MySqlParser.js";
import { RepairTableContext } from "./MySqlParser.js";
import { TableActionOptionContext } from "./MySqlParser.js";
import { CheckTableOptionContext } from "./MySqlParser.js";
import { CreateFunctionContext } from "./MySqlParser.js";
import { InstallComponentContext } from "./MySqlParser.js";
import { VariableExprContext } from "./MySqlParser.js";
import { UninstallComponentContext } from "./MySqlParser.js";
import { InstallPluginContext } from "./MySqlParser.js";
import { UninstallPluginContext } from "./MySqlParser.js";
import { CloneStatementContext } from "./MySqlParser.js";
import { SetVariableContext } from "./MySqlParser.js";
import { SetCharsetContext } from "./MySqlParser.js";
import { SetNamesContext } from "./MySqlParser.js";
import { SetPasswordContext } from "./MySqlParser.js";
import { SetTransactionContext } from "./MySqlParser.js";
import { SetAutocommitContext } from "./MySqlParser.js";
import { SetNewValueInsideTriggerContext } from "./MySqlParser.js";
import { ShowMasterLogsContext } from "./MySqlParser.js";
import { ShowLogEventsContext } from "./MySqlParser.js";
import { ShowObjectFilterContext } from "./MySqlParser.js";
import { ShowColumnsContext } from "./MySqlParser.js";
import { ShowCreateDbContext } from "./MySqlParser.js";
import { ShowCreateFullIdObjectContext } from "./MySqlParser.js";
import { ShowCreateFunctionContext } from "./MySqlParser.js";
import { ShowCreateViewContext } from "./MySqlParser.js";
import { ShowCreateTableContext } from "./MySqlParser.js";
import { ShowCreateUserContext } from "./MySqlParser.js";
import { ShowEngineContext } from "./MySqlParser.js";
import { ShowGlobalInfoContext } from "./MySqlParser.js";
import { ShowErrorsContext } from "./MySqlParser.js";
import { ShowCountErrorsContext } from "./MySqlParser.js";
import { ShowSchemaFilterContext } from "./MySqlParser.js";
import { ShowPercedureCodeContext } from "./MySqlParser.js";
import { ShowFunctionCodeContext } from "./MySqlParser.js";
import { ShowGrantsContext } from "./MySqlParser.js";
import { ShowIndexesContext } from "./MySqlParser.js";
import { ShowOpenTablesContext } from "./MySqlParser.js";
import { ShowProfileContext } from "./MySqlParser.js";
import { ShowSlaveStatusContext } from "./MySqlParser.js";
import { ShowReplicasContext } from "./MySqlParser.js";
import { VariableClauseContext } from "./MySqlParser.js";
import { ShowCommonEntityContext } from "./MySqlParser.js";
import { ShowFilterContext } from "./MySqlParser.js";
import { ShowGlobalInfoClauseContext } from "./MySqlParser.js";
import { ShowSchemaEntityContext } from "./MySqlParser.js";
import { ShowProfileTypeContext } from "./MySqlParser.js";
import { BinlogStatementContext } from "./MySqlParser.js";
import { CacheIndexStatementContext } from "./MySqlParser.js";
import { FlushStatementContext } from "./MySqlParser.js";
import { KillStatementContext } from "./MySqlParser.js";
import { LoadIndexIntoCacheContext } from "./MySqlParser.js";
import { ResetStatementContext } from "./MySqlParser.js";
import { ResetOptionContext } from "./MySqlParser.js";
import { ResetPersistContext } from "./MySqlParser.js";
import { ResetAllChannelContext } from "./MySqlParser.js";
import { ReStartStatementContext } from "./MySqlParser.js";
import { ShutdownStatementContext } from "./MySqlParser.js";
import { TableIndexContext } from "./MySqlParser.js";
import { SimpleFlushOptionContext } from "./MySqlParser.js";
import { ChannelFlushOptionContext } from "./MySqlParser.js";
import { TableFlushOptionContext } from "./MySqlParser.js";
import { FlushTableOptionContext } from "./MySqlParser.js";
import { LoadedTableIndexesContext } from "./MySqlParser.js";
import { SimpleDescribeStatementContext } from "./MySqlParser.js";
import { FullDescribeStatementContext } from "./MySqlParser.js";
import { AnalyzeDescribeStatementContext } from "./MySqlParser.js";
import { HelpStatementContext } from "./MySqlParser.js";
import { UseStatementContext } from "./MySqlParser.js";
import { SignalStatementContext } from "./MySqlParser.js";
import { ResignalStatementContext } from "./MySqlParser.js";
import { SignalConditionInformationContext } from "./MySqlParser.js";
import { WithStatementContext } from "./MySqlParser.js";
import { TableStatementContext } from "./MySqlParser.js";
import { DiagnosticsStatementContext } from "./MySqlParser.js";
import { DiagnosticsConditionInformationNameContext } from "./MySqlParser.js";
import { DescribeStatementsContext } from "./MySqlParser.js";
import { DescribeConnectionContext } from "./MySqlParser.js";
import { DatabaseNameCreateContext } from "./MySqlParser.js";
import { DatabaseNameContext } from "./MySqlParser.js";
import { FunctionNameCreateContext } from "./MySqlParser.js";
import { FunctionNameContext } from "./MySqlParser.js";
import { ViewNameCreateContext } from "./MySqlParser.js";
import { ViewNameContext } from "./MySqlParser.js";
import { IndexNameCreateContext } from "./MySqlParser.js";
import { IndexNamesContext } from "./MySqlParser.js";
import { IndexNameContext } from "./MySqlParser.js";
import { GroupNameCreateContext } from "./MySqlParser.js";
import { GroupNameContext } from "./MySqlParser.js";
import { TableNameCreateContext } from "./MySqlParser.js";
import { TableNamesContext } from "./MySqlParser.js";
import { TableNameContext } from "./MySqlParser.js";
import { UserOrRoleNamesContext } from "./MySqlParser.js";
import { UserOrRoleNameContext } from "./MySqlParser.js";
import { ColumnNameCreateContext } from "./MySqlParser.js";
import { ColumnNamesContext } from "./MySqlParser.js";
import { ColumnNameContext } from "./MySqlParser.js";
import { TablespaceNameCreateContext } from "./MySqlParser.js";
import { TablespaceNameContext } from "./MySqlParser.js";
import { PartitionNameCreateContext } from "./MySqlParser.js";
import { PartitionNamesContext } from "./MySqlParser.js";
import { PartitionNameContext } from "./MySqlParser.js";
import { IndexColumnNameContext } from "./MySqlParser.js";
import { UserHostPortContext } from "./MySqlParser.js";
import { UserAtHostContext } from "./MySqlParser.js";
import { SimpleUserNameContext } from "./MySqlParser.js";
import { HostNameContext } from "./MySqlParser.js";
import { UserNameContext } from "./MySqlParser.js";
import { MysqlVariableContext } from "./MySqlParser.js";
import { CharsetNameContext } from "./MySqlParser.js";
import { CollationNameContext } from "./MySqlParser.js";
import { EngineNameContext } from "./MySqlParser.js";
import { EngineNameBaseContext } from "./MySqlParser.js";
import { UuidSetContext } from "./MySqlParser.js";
import { XidContext } from "./MySqlParser.js";
import { XuidStringIdContext } from "./MySqlParser.js";
import { FullIdContext } from "./MySqlParser.js";
import { UidListContext } from "./MySqlParser.js";
import { UidContext } from "./MySqlParser.js";
import { SimpleIdContext } from "./MySqlParser.js";
import { DottedIdContext } from "./MySqlParser.js";
import { DecimalLiteralContext } from "./MySqlParser.js";
import { FileSizeLiteralContext } from "./MySqlParser.js";
import { StringLiteralContext } from "./MySqlParser.js";
import { BooleanLiteralContext } from "./MySqlParser.js";
import { HexadecimalLiteralContext } from "./MySqlParser.js";
import { NullNotnullContext } from "./MySqlParser.js";
import { ConstantContext } from "./MySqlParser.js";
import { StringDataTypeContext } from "./MySqlParser.js";
import { NationalVaryingStringDataTypeContext } from "./MySqlParser.js";
import { NationalStringDataTypeContext } from "./MySqlParser.js";
import { DimensionDataTypeContext } from "./MySqlParser.js";
import { SimpleDataTypeContext } from "./MySqlParser.js";
import { CollectionDataTypeContext } from "./MySqlParser.js";
import { SpatialDataTypeContext } from "./MySqlParser.js";
import { LongVarcharDataTypeContext } from "./MySqlParser.js";
import { LongVarbinaryDataTypeContext } from "./MySqlParser.js";
import { CollectionOptionsContext } from "./MySqlParser.js";
import { ConvertedDataTypeContext } from "./MySqlParser.js";
import { LengthOneDimensionContext } from "./MySqlParser.js";
import { LengthTwoDimensionContext } from "./MySqlParser.js";
import { LengthTwoOptionalDimensionContext } from "./MySqlParser.js";
import { IndexColumnNamesContext } from "./MySqlParser.js";
import { ExpressionsContext } from "./MySqlParser.js";
import { ValuesOrValueListContext } from "./MySqlParser.js";
import { ExpressionsWithDefaultsContext } from "./MySqlParser.js";
import { ExpressionOrDefaultContext } from "./MySqlParser.js";
import { ConstantsContext } from "./MySqlParser.js";
import { SimpleStringsContext } from "./MySqlParser.js";
import { UserVariablesContext } from "./MySqlParser.js";
import { DefaultValueContext } from "./MySqlParser.js";
import { CurrentTimestampContext } from "./MySqlParser.js";
import { IfExistsContext } from "./MySqlParser.js";
import { IfNotExistsContext } from "./MySqlParser.js";
import { OrReplaceContext } from "./MySqlParser.js";
import { SpecificFunctionCallContext } from "./MySqlParser.js";
import { AggregateFunctionCallContext } from "./MySqlParser.js";
import { NonAggregateFunctionCallContext } from "./MySqlParser.js";
import { ScalarFunctionCallContext } from "./MySqlParser.js";
import { UdfFunctionCallContext } from "./MySqlParser.js";
import { PasswordFunctionCallContext } from "./MySqlParser.js";
import { SimpleFunctionCallContext } from "./MySqlParser.js";
import { CurrentUserContext } from "./MySqlParser.js";
import { DataTypeFunctionCallContext } from "./MySqlParser.js";
import { ValuesFunctionCallContext } from "./MySqlParser.js";
import { CaseExpressionFunctionCallContext } from "./MySqlParser.js";
import { CaseFunctionCallContext } from "./MySqlParser.js";
import { CharFunctionCallContext } from "./MySqlParser.js";
import { PositionFunctionCallContext } from "./MySqlParser.js";
import { SubstrFunctionCallContext } from "./MySqlParser.js";
import { TrimFunctionCallContext } from "./MySqlParser.js";
import { WeightFunctionCallContext } from "./MySqlParser.js";
import { ExtractFunctionCallContext } from "./MySqlParser.js";
import { GetFormatFunctionCallContext } from "./MySqlParser.js";
import { JsonValueFunctionCallContext } from "./MySqlParser.js";
import { CaseFuncAlternativeContext } from "./MySqlParser.js";
import { LevelWeightListContext } from "./MySqlParser.js";
import { LevelWeightRangeContext } from "./MySqlParser.js";
import { LevelInWeightListElementContext } from "./MySqlParser.js";
import { AggregateWindowedFunctionContext } from "./MySqlParser.js";
import { NonAggregateWindowedFunctionContext } from "./MySqlParser.js";
import { OverClauseContext } from "./MySqlParser.js";
import { WindowSpecContext } from "./MySqlParser.js";
import { WindowNameContext } from "./MySqlParser.js";
import { FrameClauseContext } from "./MySqlParser.js";
import { FrameUnitsContext } from "./MySqlParser.js";
import { FrameExtentContext } from "./MySqlParser.js";
import { FrameBetweenContext } from "./MySqlParser.js";
import { FrameRangeContext } from "./MySqlParser.js";
import { PartitionClauseContext } from "./MySqlParser.js";
import { ScalarFunctionNameContext } from "./MySqlParser.js";
import { PasswordFunctionClauseContext } from "./MySqlParser.js";
import { FunctionArgsContext } from "./MySqlParser.js";
import { FunctionArgContext } from "./MySqlParser.js";
import { IsExpressionContext } from "./MySqlParser.js";
import { NotExpressionContext } from "./MySqlParser.js";
import { LogicalExpressionContext } from "./MySqlParser.js";
import { PredicateExpressionContext } from "./MySqlParser.js";
import { SoundsLikePredicateContext } from "./MySqlParser.js";
import { ExpressionAtomPredicateContext } from "./MySqlParser.js";
import { SubqueryComparisonPredicateContext } from "./MySqlParser.js";
import { JsonMemberOfPredicateContext } from "./MySqlParser.js";
import { BinaryComparisonPredicateContext } from "./MySqlParser.js";
import { InPredicateContext } from "./MySqlParser.js";
import { BetweenPredicateContext } from "./MySqlParser.js";
import { IsNullPredicateContext } from "./MySqlParser.js";
import { LikePredicateContext } from "./MySqlParser.js";
import { RegexpPredicateContext } from "./MySqlParser.js";
import { UnaryExpressionAtomContext } from "./MySqlParser.js";
import { CollateExpressionAtomContext } from "./MySqlParser.js";
import { ColumnNameExpressionAtomContext } from "./MySqlParser.js";
import { VariableAssignExpressionAtomContext } from "./MySqlParser.js";
import { MysqlVariableExpressionAtomContext } from "./MySqlParser.js";
import { NestedExpressionAtomContext } from "./MySqlParser.js";
import { NestedRowExpressionAtomContext } from "./MySqlParser.js";
import { MathExpressionAtomContext } from "./MySqlParser.js";
import { ExistsExpressionAtomContext } from "./MySqlParser.js";
import { IntervalExpressionAtomContext } from "./MySqlParser.js";
import { JsonExpressionAtomContext } from "./MySqlParser.js";
import { SubqueryExpressionAtomContext } from "./MySqlParser.js";
import { ConstantExpressionAtomContext } from "./MySqlParser.js";
import { FunctionCallExpressionAtomContext } from "./MySqlParser.js";
import { BinaryExpressionAtomContext } from "./MySqlParser.js";
import { BitExpressionAtomContext } from "./MySqlParser.js";
import { UnaryOperatorContext } from "./MySqlParser.js";
import { ComparisonOperatorContext } from "./MySqlParser.js";
import { ComparisonBaseContext } from "./MySqlParser.js";
import { LogicalOperatorContext } from "./MySqlParser.js";
import { BitOperatorContext } from "./MySqlParser.js";
import { MathOperatorContext } from "./MySqlParser.js";
import { JsonOperatorContext } from "./MySqlParser.js";
import { CharsetNameBaseContext } from "./MySqlParser.js";
import { TransactionLevelBaseContext } from "./MySqlParser.js";
import { PrivilegesBaseContext } from "./MySqlParser.js";
import { IntervalTypeBaseContext } from "./MySqlParser.js";
import { DataTypeBaseContext } from "./MySqlParser.js";
import { KeywordsCanBeIdContext } from "./MySqlParser.js";
import { FunctionNameBaseContext } from "./MySqlParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MySqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class MySqlParserVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `MySqlParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.singleStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleStatement?: (ctx: SingleStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.sqlStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSqlStatement?: (ctx: SqlStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.emptyStatement_`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEmptyStatement_?: (ctx: EmptyStatement_Context) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.ddlStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDdlStatement?: (ctx: DdlStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.dmlStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDmlStatement?: (ctx: DmlStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.transactionStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransactionStatement?: (ctx: TransactionStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.replicationStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplicationStatement?: (ctx: ReplicationStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.preparedStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPreparedStatement?: (ctx: PreparedStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.compoundStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompoundStatement?: (ctx: CompoundStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.administrationStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdministrationStatement?: (ctx: AdministrationStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.utilityStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUtilityStatement?: (ctx: UtilityStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.createDatabase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateDatabase?: (ctx: CreateDatabaseContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.createEvent`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateEvent?: (ctx: CreateEventContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.createIndex`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateIndex?: (ctx: CreateIndexContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.createLogfileGroup`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateLogfileGroup?: (ctx: CreateLogfileGroupContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.createProcedure`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateProcedure?: (ctx: CreateProcedureContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.createRole`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateRole?: (ctx: CreateRoleContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.createServer`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateServer?: (ctx: CreateServerContext) => Result;
    /**
     * Visit a parse tree produced by the `queryCreateTable`
     * labeled alternative in `MySqlParser.createTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryCreateTable?: (ctx: QueryCreateTableContext) => Result;
    /**
     * Visit a parse tree produced by the `copyCreateTable`
     * labeled alternative in `MySqlParser.createTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopyCreateTable?: (ctx: CopyCreateTableContext) => Result;
    /**
     * Visit a parse tree produced by the `columnCreateTable`
     * labeled alternative in `MySqlParser.createTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnCreateTable?: (ctx: ColumnCreateTableContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.createTablespaceInnodb`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTablespaceInnodb?: (ctx: CreateTablespaceInnodbContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.createTablespaceNdb`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTablespaceNdb?: (ctx: CreateTablespaceNdbContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.createTrigger`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTrigger?: (ctx: CreateTriggerContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.withClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWithClause?: (ctx: WithClauseContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.commonTableExpressions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommonTableExpressions?: (ctx: CommonTableExpressionsContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.createView`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateView?: (ctx: CreateViewContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.createDatabaseOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateDatabaseOption?: (ctx: CreateDatabaseOptionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.charSet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCharSet?: (ctx: CharSetContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.currentUserExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCurrentUserExpression?: (ctx: CurrentUserExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.ownerStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOwnerStatement?: (ctx: OwnerStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `preciseSchedule`
     * labeled alternative in `MySqlParser.scheduleExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPreciseSchedule?: (ctx: PreciseScheduleContext) => Result;
    /**
     * Visit a parse tree produced by the `intervalSchedule`
     * labeled alternative in `MySqlParser.scheduleExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntervalSchedule?: (ctx: IntervalScheduleContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.timestampValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimestampValue?: (ctx: TimestampValueContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.intervalExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntervalExpr?: (ctx: IntervalExprContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.intervalType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntervalType?: (ctx: IntervalTypeContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.enableType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnableType?: (ctx: EnableTypeContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.indexType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndexType?: (ctx: IndexTypeContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.indexOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndexOption?: (ctx: IndexOptionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.procedureParameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedureParameter?: (ctx: ProcedureParameterContext) => Result;
    /**
     * Visit a parse tree produced by the `routineComment`
     * labeled alternative in `MySqlParser.routineOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoutineComment?: (ctx: RoutineCommentContext) => Result;
    /**
     * Visit a parse tree produced by the `routineLanguage`
     * labeled alternative in `MySqlParser.routineOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoutineLanguage?: (ctx: RoutineLanguageContext) => Result;
    /**
     * Visit a parse tree produced by the `routineBehavior`
     * labeled alternative in `MySqlParser.routineOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoutineBehavior?: (ctx: RoutineBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by the `routineData`
     * labeled alternative in `MySqlParser.routineOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoutineData?: (ctx: RoutineDataContext) => Result;
    /**
     * Visit a parse tree produced by the `routineSecurity`
     * labeled alternative in `MySqlParser.routineOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoutineSecurity?: (ctx: RoutineSecurityContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.serverOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitServerOption?: (ctx: ServerOptionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.createDefinitions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateDefinitions?: (ctx: CreateDefinitionsContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.createDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateDefinition?: (ctx: CreateDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.checkConstraintDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCheckConstraintDefinition?: (ctx: CheckConstraintDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.constraintSymbol`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstraintSymbol?: (ctx: ConstraintSymbolContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.columnDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnDefinition?: (ctx: ColumnDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by the `nullColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNullColumnConstraint?: (ctx: NullColumnConstraintContext) => Result;
    /**
     * Visit a parse tree produced by the `defaultColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefaultColumnConstraint?: (ctx: DefaultColumnConstraintContext) => Result;
    /**
     * Visit a parse tree produced by the `visibilityColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVisibilityColumnConstraint?: (ctx: VisibilityColumnConstraintContext) => Result;
    /**
     * Visit a parse tree produced by the `invisibilityColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInvisibilityColumnConstraint?: (ctx: InvisibilityColumnConstraintContext) => Result;
    /**
     * Visit a parse tree produced by the `autoIncrementColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAutoIncrementColumnConstraint?: (ctx: AutoIncrementColumnConstraintContext) => Result;
    /**
     * Visit a parse tree produced by the `primaryKeyColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimaryKeyColumnConstraint?: (ctx: PrimaryKeyColumnConstraintContext) => Result;
    /**
     * Visit a parse tree produced by the `uniqueKeyColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUniqueKeyColumnConstraint?: (ctx: UniqueKeyColumnConstraintContext) => Result;
    /**
     * Visit a parse tree produced by the `commentColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommentColumnConstraint?: (ctx: CommentColumnConstraintContext) => Result;
    /**
     * Visit a parse tree produced by the `formatColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFormatColumnConstraint?: (ctx: FormatColumnConstraintContext) => Result;
    /**
     * Visit a parse tree produced by the `storageColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStorageColumnConstraint?: (ctx: StorageColumnConstraintContext) => Result;
    /**
     * Visit a parse tree produced by the `referenceColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReferenceColumnConstraint?: (ctx: ReferenceColumnConstraintContext) => Result;
    /**
     * Visit a parse tree produced by the `collateColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCollateColumnConstraint?: (ctx: CollateColumnConstraintContext) => Result;
    /**
     * Visit a parse tree produced by the `generatedColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneratedColumnConstraint?: (ctx: GeneratedColumnConstraintContext) => Result;
    /**
     * Visit a parse tree produced by the `serialDefaultColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSerialDefaultColumnConstraint?: (ctx: SerialDefaultColumnConstraintContext) => Result;
    /**
     * Visit a parse tree produced by the `checkExpr`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCheckExpr?: (ctx: CheckExprContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.referenceDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReferenceDefinition?: (ctx: ReferenceDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.referenceAction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReferenceAction?: (ctx: ReferenceActionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.referenceControlType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReferenceControlType?: (ctx: ReferenceControlTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionEngine`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionEngine?: (ctx: TableOptionEngineContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionEngineAttribute`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionEngineAttribute?: (ctx: TableOptionEngineAttributeContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionAutoextendSize`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionAutoextendSize?: (ctx: TableOptionAutoextendSizeContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionAutoIncrement`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionAutoIncrement?: (ctx: TableOptionAutoIncrementContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionAverage`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionAverage?: (ctx: TableOptionAverageContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionCharset`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionCharset?: (ctx: TableOptionCharsetContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionChecksum`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionChecksum?: (ctx: TableOptionChecksumContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionCollate`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionCollate?: (ctx: TableOptionCollateContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionComment`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionComment?: (ctx: TableOptionCommentContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionCompression`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionCompression?: (ctx: TableOptionCompressionContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionConnection`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionConnection?: (ctx: TableOptionConnectionContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionDataDirectory`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionDataDirectory?: (ctx: TableOptionDataDirectoryContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionDelay`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionDelay?: (ctx: TableOptionDelayContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionEncryption`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionEncryption?: (ctx: TableOptionEncryptionContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionPageCompressed`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionPageCompressed?: (ctx: TableOptionPageCompressedContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionPageCompressionLevel`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionPageCompressionLevel?: (ctx: TableOptionPageCompressionLevelContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionEncryptionKeyId`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionEncryptionKeyId?: (ctx: TableOptionEncryptionKeyIdContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionIndexDirectory`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionIndexDirectory?: (ctx: TableOptionIndexDirectoryContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionInsertMethod`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionInsertMethod?: (ctx: TableOptionInsertMethodContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionKeyBlockSize`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionKeyBlockSize?: (ctx: TableOptionKeyBlockSizeContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionMaxRows`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionMaxRows?: (ctx: TableOptionMaxRowsContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionMinRows`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionMinRows?: (ctx: TableOptionMinRowsContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionPackKeys`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionPackKeys?: (ctx: TableOptionPackKeysContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionPassword`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionPassword?: (ctx: TableOptionPasswordContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionRowFormat`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionRowFormat?: (ctx: TableOptionRowFormatContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionStartTransaction`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionStartTransaction?: (ctx: TableOptionStartTransactionContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionSecondaryEngineAttribute`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionSecondaryEngineAttribute?: (ctx: TableOptionSecondaryEngineAttributeContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionRecalculation`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionRecalculation?: (ctx: TableOptionRecalculationContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionPersistent`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionPersistent?: (ctx: TableOptionPersistentContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionSamplePage`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionSamplePage?: (ctx: TableOptionSamplePageContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionTablespace`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionTablespace?: (ctx: TableOptionTablespaceContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionTableType`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionTableType?: (ctx: TableOptionTableTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionTransactional`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionTransactional?: (ctx: TableOptionTransactionalContext) => Result;
    /**
     * Visit a parse tree produced by the `tableOptionUnion`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableOptionUnion?: (ctx: TableOptionUnionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.tableType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableType?: (ctx: TableTypeContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.tablespaceStorage`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablespaceStorage?: (ctx: TablespaceStorageContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.partitionDefinitions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionDefinitions?: (ctx: PartitionDefinitionsContext) => Result;
    /**
     * Visit a parse tree produced by the `partitionFunctionHash`
     * labeled alternative in `MySqlParser.partitionFunctionDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionFunctionHash?: (ctx: PartitionFunctionHashContext) => Result;
    /**
     * Visit a parse tree produced by the `partitionFunctionKey`
     * labeled alternative in `MySqlParser.partitionFunctionDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionFunctionKey?: (ctx: PartitionFunctionKeyContext) => Result;
    /**
     * Visit a parse tree produced by the `partitionFunctionRange`
     * labeled alternative in `MySqlParser.partitionFunctionDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionFunctionRange?: (ctx: PartitionFunctionRangeContext) => Result;
    /**
     * Visit a parse tree produced by the `partitionFunctionList`
     * labeled alternative in `MySqlParser.partitionFunctionDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionFunctionList?: (ctx: PartitionFunctionListContext) => Result;
    /**
     * Visit a parse tree produced by the `subPartitionFunctionHash`
     * labeled alternative in `MySqlParser.subpartitionFunctionDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubPartitionFunctionHash?: (ctx: SubPartitionFunctionHashContext) => Result;
    /**
     * Visit a parse tree produced by the `subPartitionFunctionKey`
     * labeled alternative in `MySqlParser.subpartitionFunctionDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubPartitionFunctionKey?: (ctx: SubPartitionFunctionKeyContext) => Result;
    /**
     * Visit a parse tree produced by the `partitionComparison`
     * labeled alternative in `MySqlParser.partitionDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionComparison?: (ctx: PartitionComparisonContext) => Result;
    /**
     * Visit a parse tree produced by the `partitionListAtom`
     * labeled alternative in `MySqlParser.partitionDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionListAtom?: (ctx: PartitionListAtomContext) => Result;
    /**
     * Visit a parse tree produced by the `partitionListVector`
     * labeled alternative in `MySqlParser.partitionDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionListVector?: (ctx: PartitionListVectorContext) => Result;
    /**
     * Visit a parse tree produced by the `partitionSimple`
     * labeled alternative in `MySqlParser.partitionDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionSimple?: (ctx: PartitionSimpleContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.partitionDefinerAtom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionDefinerAtom?: (ctx: PartitionDefinerAtomContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.partitionDefinerVector`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionDefinerVector?: (ctx: PartitionDefinerVectorContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.subpartitionDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubpartitionDefinition?: (ctx: SubpartitionDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by the `partitionOptionEngine`
     * labeled alternative in `MySqlParser.partitionOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionOptionEngine?: (ctx: PartitionOptionEngineContext) => Result;
    /**
     * Visit a parse tree produced by the `partitionOptionComment`
     * labeled alternative in `MySqlParser.partitionOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionOptionComment?: (ctx: PartitionOptionCommentContext) => Result;
    /**
     * Visit a parse tree produced by the `partitionOptionDataDirectory`
     * labeled alternative in `MySqlParser.partitionOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionOptionDataDirectory?: (ctx: PartitionOptionDataDirectoryContext) => Result;
    /**
     * Visit a parse tree produced by the `partitionOptionIndexDirectory`
     * labeled alternative in `MySqlParser.partitionOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionOptionIndexDirectory?: (ctx: PartitionOptionIndexDirectoryContext) => Result;
    /**
     * Visit a parse tree produced by the `partitionOptionMaxRows`
     * labeled alternative in `MySqlParser.partitionOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionOptionMaxRows?: (ctx: PartitionOptionMaxRowsContext) => Result;
    /**
     * Visit a parse tree produced by the `partitionOptionMinRows`
     * labeled alternative in `MySqlParser.partitionOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionOptionMinRows?: (ctx: PartitionOptionMinRowsContext) => Result;
    /**
     * Visit a parse tree produced by the `partitionOptionTablespace`
     * labeled alternative in `MySqlParser.partitionOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionOptionTablespace?: (ctx: PartitionOptionTablespaceContext) => Result;
    /**
     * Visit a parse tree produced by the `partitionOptionNodeGroup`
     * labeled alternative in `MySqlParser.partitionOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionOptionNodeGroup?: (ctx: PartitionOptionNodeGroupContext) => Result;
    /**
     * Visit a parse tree produced by the `alterSimpleDatabase`
     * labeled alternative in `MySqlParser.alterDatabase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterSimpleDatabase?: (ctx: AlterSimpleDatabaseContext) => Result;
    /**
     * Visit a parse tree produced by the `alterUpgradeName`
     * labeled alternative in `MySqlParser.alterDatabase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterUpgradeName?: (ctx: AlterUpgradeNameContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.alterEvent`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterEvent?: (ctx: AlterEventContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.alterFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterFunction?: (ctx: AlterFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.alterInstance`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterInstance?: (ctx: AlterInstanceContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.alterLogfileGroup`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterLogfileGroup?: (ctx: AlterLogfileGroupContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.alterProcedure`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterProcedure?: (ctx: AlterProcedureContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.alterServer`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterServer?: (ctx: AlterServerContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.alterTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTable?: (ctx: AlterTableContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.alterTablespace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTablespace?: (ctx: AlterTablespaceContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.alterView`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterView?: (ctx: AlterViewContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByTableOption`
     * labeled alternative in `MySqlParser.alterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByTableOption?: (ctx: AlterByTableOptionContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByAddColumn`
     * labeled alternative in `MySqlParser.alterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByAddColumn?: (ctx: AlterByAddColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByAddColumns`
     * labeled alternative in `MySqlParser.alterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByAddColumns?: (ctx: AlterByAddColumnsContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByAddIndex`
     * labeled alternative in `MySqlParser.alterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByAddIndex?: (ctx: AlterByAddIndexContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByAddSpecialIndex`
     * labeled alternative in `MySqlParser.alterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByAddSpecialIndex?: (ctx: AlterByAddSpecialIndexContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByAddPrimaryKey`
     * labeled alternative in `MySqlParser.alterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByAddPrimaryKey?: (ctx: AlterByAddPrimaryKeyContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByAddUniqueKey`
     * labeled alternative in `MySqlParser.alterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByAddUniqueKey?: (ctx: AlterByAddUniqueKeyContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByAddForeignKey`
     * labeled alternative in `MySqlParser.alterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByAddForeignKey?: (ctx: AlterByAddForeignKeyContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByAddCheckTableConstraint`
     * labeled alternative in `MySqlParser.alterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByAddCheckTableConstraint?: (ctx: AlterByAddCheckTableConstraintContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByDropConstraintCheck`
     * labeled alternative in `MySqlParser.alterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByDropConstraintCheck?: (ctx: AlterByDropConstraintCheckContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByAlterCheckTableConstraint`
     * labeled alternative in `MySqlParser.alterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByAlterCheckTableConstraint?: (ctx: AlterByAlterCheckTableConstraintContext) => Result;
    /**
     * Visit a parse tree produced by the `alterBySetAlgorithm`
     * labeled alternative in `MySqlParser.alterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterBySetAlgorithm?: (ctx: AlterBySetAlgorithmContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByAlterColumnDefault`
     * labeled alternative in `MySqlParser.alterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByAlterColumnDefault?: (ctx: AlterByAlterColumnDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByAlterIndexVisibility`
     * labeled alternative in `MySqlParser.alterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByAlterIndexVisibility?: (ctx: AlterByAlterIndexVisibilityContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByChangeColumn`
     * labeled alternative in `MySqlParser.alterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByChangeColumn?: (ctx: AlterByChangeColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByDefaultCharset`
     * labeled alternative in `MySqlParser.alterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByDefaultCharset?: (ctx: AlterByDefaultCharsetContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByConvertCharset`
     * labeled alternative in `MySqlParser.alterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByConvertCharset?: (ctx: AlterByConvertCharsetContext) => Result;
    /**
     * Visit a parse tree produced by the `alterKeys`
     * labeled alternative in `MySqlParser.alterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterKeys?: (ctx: AlterKeysContext) => Result;
    /**
     * Visit a parse tree produced by the `alterTablespaceOption`
     * labeled alternative in `MySqlParser.alterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTablespaceOption?: (ctx: AlterTablespaceOptionContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByDropColumn`
     * labeled alternative in `MySqlParser.alterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByDropColumn?: (ctx: AlterByDropColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByDropIndex`
     * labeled alternative in `MySqlParser.alterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByDropIndex?: (ctx: AlterByDropIndexContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByDropPrimaryKey`
     * labeled alternative in `MySqlParser.alterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByDropPrimaryKey?: (ctx: AlterByDropPrimaryKeyContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByDropForeignKey`
     * labeled alternative in `MySqlParser.alterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByDropForeignKey?: (ctx: AlterByDropForeignKeyContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByForce`
     * labeled alternative in `MySqlParser.alterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByForce?: (ctx: AlterByForceContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByLock`
     * labeled alternative in `MySqlParser.alterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByLock?: (ctx: AlterByLockContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByModifyColumn`
     * labeled alternative in `MySqlParser.alterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByModifyColumn?: (ctx: AlterByModifyColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByOrder`
     * labeled alternative in `MySqlParser.alterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByOrder?: (ctx: AlterByOrderContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByRenameColumn`
     * labeled alternative in `MySqlParser.alterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByRenameColumn?: (ctx: AlterByRenameColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByRenameIndex`
     * labeled alternative in `MySqlParser.alterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByRenameIndex?: (ctx: AlterByRenameIndexContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByRename`
     * labeled alternative in `MySqlParser.alterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByRename?: (ctx: AlterByRenameContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByValidate`
     * labeled alternative in `MySqlParser.alterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByValidate?: (ctx: AlterByValidateContext) => Result;
    /**
     * Visit a parse tree produced by the `alterPartition`
     * labeled alternative in `MySqlParser.alterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterPartition?: (ctx: AlterPartitionContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByAddPartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByAddPartition?: (ctx: AlterByAddPartitionContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByDropPartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByDropPartition?: (ctx: AlterByDropPartitionContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByDiscardPartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByDiscardPartition?: (ctx: AlterByDiscardPartitionContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByImportPartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByImportPartition?: (ctx: AlterByImportPartitionContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByTruncatePartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByTruncatePartition?: (ctx: AlterByTruncatePartitionContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByCoalescePartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByCoalescePartition?: (ctx: AlterByCoalescePartitionContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByReorganizePartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByReorganizePartition?: (ctx: AlterByReorganizePartitionContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByExchangePartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByExchangePartition?: (ctx: AlterByExchangePartitionContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByAnalyzePartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByAnalyzePartition?: (ctx: AlterByAnalyzePartitionContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByCheckPartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByCheckPartition?: (ctx: AlterByCheckPartitionContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByOptimizePartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByOptimizePartition?: (ctx: AlterByOptimizePartitionContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByRebuildPartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByRebuildPartition?: (ctx: AlterByRebuildPartitionContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByRepairPartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByRepairPartition?: (ctx: AlterByRepairPartitionContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByRemovePartitioning`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByRemovePartitioning?: (ctx: AlterByRemovePartitioningContext) => Result;
    /**
     * Visit a parse tree produced by the `alterByUpgradePartitioning`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterByUpgradePartitioning?: (ctx: AlterByUpgradePartitioningContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.dropDatabase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropDatabase?: (ctx: DropDatabaseContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.dropEvent`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropEvent?: (ctx: DropEventContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.dropIndex`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropIndex?: (ctx: DropIndexContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.dropLogfileGroup`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropLogfileGroup?: (ctx: DropLogfileGroupContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.dropProcedure`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropProcedure?: (ctx: DropProcedureContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.dropFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropFunction?: (ctx: DropFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.dropServer`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropServer?: (ctx: DropServerContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.dropSpatial`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropSpatial?: (ctx: DropSpatialContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.dropTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropTable?: (ctx: DropTableContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.dropTablespace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropTablespace?: (ctx: DropTablespaceContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.dropTrigger`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropTrigger?: (ctx: DropTriggerContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.dropView`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropView?: (ctx: DropViewContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.dropRole`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropRole?: (ctx: DropRoleContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.setRole`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetRole?: (ctx: SetRoleContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.renameTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenameTable?: (ctx: RenameTableContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.renameTableClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenameTableClause?: (ctx: RenameTableClauseContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.truncateTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTruncateTable?: (ctx: TruncateTableContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.callStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCallStatement?: (ctx: CallStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.deleteStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeleteStatement?: (ctx: DeleteStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.doStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDoStatement?: (ctx: DoStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.handlerStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHandlerStatement?: (ctx: HandlerStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.insertStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertStatement?: (ctx: InsertStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.asRowAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAsRowAlias?: (ctx: AsRowAliasContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.selectOrTableOrValues`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectOrTableOrValues?: (ctx: SelectOrTableOrValuesContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.interSectStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterSectStatement?: (ctx: InterSectStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.interSectQuery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterSectQuery?: (ctx: InterSectQueryContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.loadDataStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoadDataStatement?: (ctx: LoadDataStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.loadXmlStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoadXmlStatement?: (ctx: LoadXmlStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.parenthesizedQuery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParenthesizedQuery?: (ctx: ParenthesizedQueryContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.replaceStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplaceStatement?: (ctx: ReplaceStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `unionAndLateralSelect`
     * labeled alternative in `MySqlParser.selectStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnionAndLateralSelect?: (ctx: UnionAndLateralSelectContext) => Result;
    /**
     * Visit a parse tree produced by the `selectExpression`
     * labeled alternative in `MySqlParser.selectStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectExpression?: (ctx: SelectExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.setOperations`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetOperations?: (ctx: SetOperationsContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.queryExpressionBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryExpressionBody?: (ctx: QueryExpressionBodyContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.queryItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryItem?: (ctx: QueryItemContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.queryPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryPrimary?: (ctx: QueryPrimaryContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.updateStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdateStatement?: (ctx: UpdateStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.valuesStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValuesStatement?: (ctx: ValuesStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.parenthesizedQueryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParenthesizedQueryExpression?: (ctx: ParenthesizedQueryExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.queryBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryBlock?: (ctx: QueryBlockContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.replaceStatementValuesOrSelectOrTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplaceStatementValuesOrSelectOrTable?: (ctx: ReplaceStatementValuesOrSelectOrTableContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.rowValuesList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowValuesList?: (ctx: RowValuesListContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.setAssignmentList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetAssignmentList?: (ctx: SetAssignmentListContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.updatedElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdatedElement?: (ctx: UpdatedElementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.assignmentField`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignmentField?: (ctx: AssignmentFieldContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.lockClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLockClause?: (ctx: LockClauseContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.singleDeleteStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleDeleteStatement?: (ctx: SingleDeleteStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.multipleDeleteStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipleDeleteStatement?: (ctx: MultipleDeleteStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.handlerOpenStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHandlerOpenStatement?: (ctx: HandlerOpenStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.handlerReadIndexStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHandlerReadIndexStatement?: (ctx: HandlerReadIndexStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.handlerReadStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHandlerReadStatement?: (ctx: HandlerReadStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.handlerCloseStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHandlerCloseStatement?: (ctx: HandlerCloseStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.importTableStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImportTableStatement?: (ctx: ImportTableStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.singleUpdateStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleUpdateStatement?: (ctx: SingleUpdateStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.multipleUpdateStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipleUpdateStatement?: (ctx: MultipleUpdateStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.orderByClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderByClause?: (ctx: OrderByClauseContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.orderByExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderByExpression?: (ctx: OrderByExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.tableSources`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableSources?: (ctx: TableSourcesContext) => Result;
    /**
     * Visit a parse tree produced by the `tableSourceBase`
     * labeled alternative in `MySqlParser.tableSource`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableSourceBase?: (ctx: TableSourceBaseContext) => Result;
    /**
     * Visit a parse tree produced by the `tableSourceNested`
     * labeled alternative in `MySqlParser.tableSource`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableSourceNested?: (ctx: TableSourceNestedContext) => Result;
    /**
     * Visit a parse tree produced by the `tableJson`
     * labeled alternative in `MySqlParser.tableSource`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableJson?: (ctx: TableJsonContext) => Result;
    /**
     * Visit a parse tree produced by the `atomTableItem`
     * labeled alternative in `MySqlParser.tableSourceItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAtomTableItem?: (ctx: AtomTableItemContext) => Result;
    /**
     * Visit a parse tree produced by the `subqueryTableItem`
     * labeled alternative in `MySqlParser.tableSourceItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubqueryTableItem?: (ctx: SubqueryTableItemContext) => Result;
    /**
     * Visit a parse tree produced by the `tableSourcesItem`
     * labeled alternative in `MySqlParser.tableSourceItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableSourcesItem?: (ctx: TableSourcesItemContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.fullColumnNames`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFullColumnNames?: (ctx: FullColumnNamesContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.indexHint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndexHint?: (ctx: IndexHintContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.indexHintType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndexHintType?: (ctx: IndexHintTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `innerJoin`
     * labeled alternative in `MySqlParser.joinPart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInnerJoin?: (ctx: InnerJoinContext) => Result;
    /**
     * Visit a parse tree produced by the `straightJoin`
     * labeled alternative in `MySqlParser.joinPart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStraightJoin?: (ctx: StraightJoinContext) => Result;
    /**
     * Visit a parse tree produced by the `outerJoin`
     * labeled alternative in `MySqlParser.joinPart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOuterJoin?: (ctx: OuterJoinContext) => Result;
    /**
     * Visit a parse tree produced by the `naturalJoin`
     * labeled alternative in `MySqlParser.joinPart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNaturalJoin?: (ctx: NaturalJoinContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.joinSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinSpec?: (ctx: JoinSpecContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.queryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryExpression?: (ctx: QueryExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.querySpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuerySpecification?: (ctx: QuerySpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.unionStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnionStatement?: (ctx: UnionStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.lateralStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLateralStatement?: (ctx: LateralStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.jsonTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJsonTable?: (ctx: JsonTableContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.jsonColumnList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJsonColumnList?: (ctx: JsonColumnListContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.jsonColumn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJsonColumn?: (ctx: JsonColumnContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.jsonOnEmpty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJsonOnEmpty?: (ctx: JsonOnEmptyContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.jsonOnError`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJsonOnError?: (ctx: JsonOnErrorContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.selectSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectSpec?: (ctx: SelectSpecContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.selectElements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectElements?: (ctx: SelectElementsContext) => Result;
    /**
     * Visit a parse tree produced by the `selectExpressionElement`
     * labeled alternative in `MySqlParser.selectElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectExpressionElement?: (ctx: SelectExpressionElementContext) => Result;
    /**
     * Visit a parse tree produced by the `selectFunctionElement`
     * labeled alternative in `MySqlParser.selectElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectFunctionElement?: (ctx: SelectFunctionElementContext) => Result;
    /**
     * Visit a parse tree produced by the `selectStarElement`
     * labeled alternative in `MySqlParser.selectElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectStarElement?: (ctx: SelectStarElementContext) => Result;
    /**
     * Visit a parse tree produced by the `selectColumnElement`
     * labeled alternative in `MySqlParser.selectElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectColumnElement?: (ctx: SelectColumnElementContext) => Result;
    /**
     * Visit a parse tree produced by the `selectIntoVariables`
     * labeled alternative in `MySqlParser.intoClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectIntoVariables?: (ctx: SelectIntoVariablesContext) => Result;
    /**
     * Visit a parse tree produced by the `selectIntoDumpFile`
     * labeled alternative in `MySqlParser.intoClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectIntoDumpFile?: (ctx: SelectIntoDumpFileContext) => Result;
    /**
     * Visit a parse tree produced by the `selectIntoTextFile`
     * labeled alternative in `MySqlParser.intoClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectIntoTextFile?: (ctx: SelectIntoTextFileContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.selectFieldsInto`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectFieldsInto?: (ctx: SelectFieldsIntoContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.selectLinesInto`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectLinesInto?: (ctx: SelectLinesIntoContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.fromClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromClause?: (ctx: FromClauseContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.groupByClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupByClause?: (ctx: GroupByClauseContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.havingClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHavingClause?: (ctx: HavingClauseContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.windowClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowClause?: (ctx: WindowClauseContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.groupByItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupByItem?: (ctx: GroupByItemContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.limitClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLimitClause?: (ctx: LimitClauseContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.limitClauseAtom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLimitClauseAtom?: (ctx: LimitClauseAtomContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.startTransaction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStartTransaction?: (ctx: StartTransactionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.beginWork`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBeginWork?: (ctx: BeginWorkContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.commitWork`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommitWork?: (ctx: CommitWorkContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.rollbackWork`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRollbackWork?: (ctx: RollbackWorkContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.savepointStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSavepointStatement?: (ctx: SavepointStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.rollbackStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRollbackStatement?: (ctx: RollbackStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.releaseStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReleaseStatement?: (ctx: ReleaseStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.lockTables`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLockTables?: (ctx: LockTablesContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.unlockTables`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnlockTables?: (ctx: UnlockTablesContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.setAutocommitStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetAutocommitStatement?: (ctx: SetAutocommitStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.setTransactionStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTransactionStatement?: (ctx: SetTransactionStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.transactionMode`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransactionMode?: (ctx: TransactionModeContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.lockTableElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLockTableElement?: (ctx: LockTableElementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.lockAction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLockAction?: (ctx: LockActionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.transactionOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransactionOption?: (ctx: TransactionOptionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.transactionLevel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransactionLevel?: (ctx: TransactionLevelContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.changeMaster`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitChangeMaster?: (ctx: ChangeMasterContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.changeReplicationFilter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitChangeReplicationFilter?: (ctx: ChangeReplicationFilterContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.changeReplicationSource`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitChangeReplicationSource?: (ctx: ChangeReplicationSourceContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.purgeBinaryLogs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPurgeBinaryLogs?: (ctx: PurgeBinaryLogsContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.startSlaveOrReplica`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStartSlaveOrReplica?: (ctx: StartSlaveOrReplicaContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.stopSlaveOrReplica`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStopSlaveOrReplica?: (ctx: StopSlaveOrReplicaContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.startGroupReplication`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStartGroupReplication?: (ctx: StartGroupReplicationContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.stopGroupReplication`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStopGroupReplication?: (ctx: StopGroupReplicationContext) => Result;
    /**
     * Visit a parse tree produced by the `masterStringOption`
     * labeled alternative in `MySqlParser.masterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMasterStringOption?: (ctx: MasterStringOptionContext) => Result;
    /**
     * Visit a parse tree produced by the `masterDecimalOption`
     * labeled alternative in `MySqlParser.masterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMasterDecimalOption?: (ctx: MasterDecimalOptionContext) => Result;
    /**
     * Visit a parse tree produced by the `masterBoolOption`
     * labeled alternative in `MySqlParser.masterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMasterBoolOption?: (ctx: MasterBoolOptionContext) => Result;
    /**
     * Visit a parse tree produced by the `v8AddMasterOption`
     * labeled alternative in `MySqlParser.masterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitV8AddMasterOption?: (ctx: V8AddMasterOptionContext) => Result;
    /**
     * Visit a parse tree produced by the `masterUidListOption`
     * labeled alternative in `MySqlParser.masterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMasterUidListOption?: (ctx: MasterUidListOptionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.stringMasterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringMasterOption?: (ctx: StringMasterOptionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.decimalMasterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecimalMasterOption?: (ctx: DecimalMasterOptionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.boolMasterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBoolMasterOption?: (ctx: BoolMasterOptionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.v8NewMasterOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitV8NewMasterOption?: (ctx: V8NewMasterOptionContext) => Result;
    /**
     * Visit a parse tree produced by the `sourceStringOption`
     * labeled alternative in `MySqlParser.replicationSourceOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSourceStringOption?: (ctx: SourceStringOptionContext) => Result;
    /**
     * Visit a parse tree produced by the `sourceDecimalOption`
     * labeled alternative in `MySqlParser.replicationSourceOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSourceDecimalOption?: (ctx: SourceDecimalOptionContext) => Result;
    /**
     * Visit a parse tree produced by the `sourceBoolOption`
     * labeled alternative in `MySqlParser.replicationSourceOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSourceBoolOption?: (ctx: SourceBoolOptionContext) => Result;
    /**
     * Visit a parse tree produced by the `sourceOtherOption`
     * labeled alternative in `MySqlParser.replicationSourceOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSourceOtherOption?: (ctx: SourceOtherOptionContext) => Result;
    /**
     * Visit a parse tree produced by the `sourceUidListOption`
     * labeled alternative in `MySqlParser.replicationSourceOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSourceUidListOption?: (ctx: SourceUidListOptionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.stringSourceOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringSourceOption?: (ctx: StringSourceOptionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.decimalSourceOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecimalSourceOption?: (ctx: DecimalSourceOptionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.boolSourceOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBoolSourceOption?: (ctx: BoolSourceOptionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.otherSourceOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOtherSourceOption?: (ctx: OtherSourceOptionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.channelOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitChannelOption?: (ctx: ChannelOptionContext) => Result;
    /**
     * Visit a parse tree produced by the `doDbReplication`
     * labeled alternative in `MySqlParser.replicationFilter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDoDbReplication?: (ctx: DoDbReplicationContext) => Result;
    /**
     * Visit a parse tree produced by the `ignoreDbReplication`
     * labeled alternative in `MySqlParser.replicationFilter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIgnoreDbReplication?: (ctx: IgnoreDbReplicationContext) => Result;
    /**
     * Visit a parse tree produced by the `doTableReplication`
     * labeled alternative in `MySqlParser.replicationFilter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDoTableReplication?: (ctx: DoTableReplicationContext) => Result;
    /**
     * Visit a parse tree produced by the `ignoreTableReplication`
     * labeled alternative in `MySqlParser.replicationFilter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIgnoreTableReplication?: (ctx: IgnoreTableReplicationContext) => Result;
    /**
     * Visit a parse tree produced by the `wildDoTableReplication`
     * labeled alternative in `MySqlParser.replicationFilter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWildDoTableReplication?: (ctx: WildDoTableReplicationContext) => Result;
    /**
     * Visit a parse tree produced by the `wildIgnoreTableReplication`
     * labeled alternative in `MySqlParser.replicationFilter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWildIgnoreTableReplication?: (ctx: WildIgnoreTableReplicationContext) => Result;
    /**
     * Visit a parse tree produced by the `rewriteDbReplication`
     * labeled alternative in `MySqlParser.replicationFilter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRewriteDbReplication?: (ctx: RewriteDbReplicationContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.tablePair`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablePair?: (ctx: TablePairContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.threadType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitThreadType?: (ctx: ThreadTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `gtidsUntilOption`
     * labeled alternative in `MySqlParser.untilOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGtidsUntilOption?: (ctx: GtidsUntilOptionContext) => Result;
    /**
     * Visit a parse tree produced by the `masterLogUntilOption`
     * labeled alternative in `MySqlParser.untilOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMasterLogUntilOption?: (ctx: MasterLogUntilOptionContext) => Result;
    /**
     * Visit a parse tree produced by the `sourceLogUntilOption`
     * labeled alternative in `MySqlParser.untilOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSourceLogUntilOption?: (ctx: SourceLogUntilOptionContext) => Result;
    /**
     * Visit a parse tree produced by the `relayLogUntilOption`
     * labeled alternative in `MySqlParser.untilOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelayLogUntilOption?: (ctx: RelayLogUntilOptionContext) => Result;
    /**
     * Visit a parse tree produced by the `sqlGapsUntilOption`
     * labeled alternative in `MySqlParser.untilOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSqlGapsUntilOption?: (ctx: SqlGapsUntilOptionContext) => Result;
    /**
     * Visit a parse tree produced by the `userConnectionOption`
     * labeled alternative in `MySqlParser.connectionOptions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUserConnectionOption?: (ctx: UserConnectionOptionContext) => Result;
    /**
     * Visit a parse tree produced by the `passwordConnectionOption`
     * labeled alternative in `MySqlParser.connectionOptions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPasswordConnectionOption?: (ctx: PasswordConnectionOptionContext) => Result;
    /**
     * Visit a parse tree produced by the `defaultAuthConnectionOption`
     * labeled alternative in `MySqlParser.connectionOptions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefaultAuthConnectionOption?: (ctx: DefaultAuthConnectionOptionContext) => Result;
    /**
     * Visit a parse tree produced by the `pluginDirConnectionOption`
     * labeled alternative in `MySqlParser.connectionOptions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPluginDirConnectionOption?: (ctx: PluginDirConnectionOptionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.gtuidSet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGtuidSet?: (ctx: GtuidSetContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.xaStartTransaction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXaStartTransaction?: (ctx: XaStartTransactionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.xaEndTransaction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXaEndTransaction?: (ctx: XaEndTransactionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.xaPrepareStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXaPrepareStatement?: (ctx: XaPrepareStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.xaCommitWork`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXaCommitWork?: (ctx: XaCommitWorkContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.xaRollbackWork`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXaRollbackWork?: (ctx: XaRollbackWorkContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.xaRecoverWork`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXaRecoverWork?: (ctx: XaRecoverWorkContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.prepareStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrepareStatement?: (ctx: PrepareStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.executeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExecuteStatement?: (ctx: ExecuteStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.deallocatePrepare`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeallocatePrepare?: (ctx: DeallocatePrepareContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.routineBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoutineBody?: (ctx: RoutineBodyContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.blockStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlockStatement?: (ctx: BlockStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.caseStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCaseStatement?: (ctx: CaseStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.ifStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfStatement?: (ctx: IfStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.iterateStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIterateStatement?: (ctx: IterateStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.leaveStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLeaveStatement?: (ctx: LeaveStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.loopStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoopStatement?: (ctx: LoopStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.repeatStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRepeatStatement?: (ctx: RepeatStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.returnStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnStatement?: (ctx: ReturnStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.whileStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhileStatement?: (ctx: WhileStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `CloseCursor`
     * labeled alternative in `MySqlParser.cursorStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCloseCursor?: (ctx: CloseCursorContext) => Result;
    /**
     * Visit a parse tree produced by the `FetchCursor`
     * labeled alternative in `MySqlParser.cursorStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFetchCursor?: (ctx: FetchCursorContext) => Result;
    /**
     * Visit a parse tree produced by the `OpenCursor`
     * labeled alternative in `MySqlParser.cursorStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpenCursor?: (ctx: OpenCursorContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.declareVariable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeclareVariable?: (ctx: DeclareVariableContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.declareCondition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeclareCondition?: (ctx: DeclareConditionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.declareCursor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeclareCursor?: (ctx: DeclareCursorContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.declareHandler`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeclareHandler?: (ctx: DeclareHandlerContext) => Result;
    /**
     * Visit a parse tree produced by the `handlerConditionCode`
     * labeled alternative in `MySqlParser.handlerConditionValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHandlerConditionCode?: (ctx: HandlerConditionCodeContext) => Result;
    /**
     * Visit a parse tree produced by the `handlerConditionState`
     * labeled alternative in `MySqlParser.handlerConditionValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHandlerConditionState?: (ctx: HandlerConditionStateContext) => Result;
    /**
     * Visit a parse tree produced by the `handlerConditionName`
     * labeled alternative in `MySqlParser.handlerConditionValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHandlerConditionName?: (ctx: HandlerConditionNameContext) => Result;
    /**
     * Visit a parse tree produced by the `handlerConditionWarning`
     * labeled alternative in `MySqlParser.handlerConditionValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHandlerConditionWarning?: (ctx: HandlerConditionWarningContext) => Result;
    /**
     * Visit a parse tree produced by the `handlerConditionNotfound`
     * labeled alternative in `MySqlParser.handlerConditionValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHandlerConditionNotfound?: (ctx: HandlerConditionNotfoundContext) => Result;
    /**
     * Visit a parse tree produced by the `handlerConditionException`
     * labeled alternative in `MySqlParser.handlerConditionValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHandlerConditionException?: (ctx: HandlerConditionExceptionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.procedureSqlStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedureSqlStatement?: (ctx: ProcedureSqlStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.caseAlternative`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCaseAlternative?: (ctx: CaseAlternativeContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.elifAlternative`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElifAlternative?: (ctx: ElifAlternativeContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.alterUser`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterUser?: (ctx: AlterUserContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.createUser`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateUser?: (ctx: CreateUserContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.dropUser`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropUser?: (ctx: DropUserContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.grantStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrantStatement?: (ctx: GrantStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.roleOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoleOption?: (ctx: RoleOptionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.grantProxy`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrantProxy?: (ctx: GrantProxyContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.alterResourceGroup`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterResourceGroup?: (ctx: AlterResourceGroupContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.createResourceGroup`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateResourceGroup?: (ctx: CreateResourceGroupContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.dropResourceGroup`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropResourceGroup?: (ctx: DropResourceGroupContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.setResourceGroup`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetResourceGroup?: (ctx: SetResourceGroupContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.resourceGroupVcpuSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResourceGroupVcpuSpec?: (ctx: ResourceGroupVcpuSpecContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.renameUser`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenameUser?: (ctx: RenameUserContext) => Result;
    /**
     * Visit a parse tree produced by the `detailRevoke`
     * labeled alternative in `MySqlParser.revokeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDetailRevoke?: (ctx: DetailRevokeContext) => Result;
    /**
     * Visit a parse tree produced by the `shortRevoke`
     * labeled alternative in `MySqlParser.revokeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShortRevoke?: (ctx: ShortRevokeContext) => Result;
    /**
     * Visit a parse tree produced by the `proxyAndRoleRevoke`
     * labeled alternative in `MySqlParser.revokeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProxyAndRoleRevoke?: (ctx: ProxyAndRoleRevokeContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.ignoreUnknownUser`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIgnoreUnknownUser?: (ctx: IgnoreUnknownUserContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.privilegeObjectType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrivilegeObjectType?: (ctx: PrivilegeObjectTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `v57`
     * labeled alternative in `MySqlParser.setPasswordStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitV57?: (ctx: V57Context) => Result;
    /**
     * Visit a parse tree produced by the `v80`
     * labeled alternative in `MySqlParser.setPasswordStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitV80?: (ctx: V80Context) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.userSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUserSpecification?: (ctx: UserSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.alterUserAuthOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterUserAuthOption?: (ctx: AlterUserAuthOptionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.createUserAuthOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateUserAuthOption?: (ctx: CreateUserAuthOptionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.createUserInitialAuthOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateUserInitialAuthOption?: (ctx: CreateUserInitialAuthOptionContext) => Result;
    /**
     * Visit a parse tree produced by the `hashAuthOption`
     * labeled alternative in `MySqlParser.userAuthOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHashAuthOption?: (ctx: HashAuthOptionContext) => Result;
    /**
     * Visit a parse tree produced by the `randomAuthOption`
     * labeled alternative in `MySqlParser.userAuthOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRandomAuthOption?: (ctx: RandomAuthOptionContext) => Result;
    /**
     * Visit a parse tree produced by the `stringAuthOption`
     * labeled alternative in `MySqlParser.userAuthOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringAuthOption?: (ctx: StringAuthOptionContext) => Result;
    /**
     * Visit a parse tree produced by the `moduleAuthOption`
     * labeled alternative in `MySqlParser.userAuthOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModuleAuthOption?: (ctx: ModuleAuthOptionContext) => Result;
    /**
     * Visit a parse tree produced by the `simpleAuthOption`
     * labeled alternative in `MySqlParser.userAuthOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleAuthOption?: (ctx: SimpleAuthOptionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.authOptionClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAuthOptionClause?: (ctx: AuthOptionClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `module`
     * labeled alternative in `MySqlParser.authenticationRule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModule?: (ctx: ModuleContext) => Result;
    /**
     * Visit a parse tree produced by the `passwordModuleOption`
     * labeled alternative in `MySqlParser.authenticationRule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPasswordModuleOption?: (ctx: PasswordModuleOptionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.tlsOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTlsOption?: (ctx: TlsOptionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.userResourceOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUserResourceOption?: (ctx: UserResourceOptionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.userPasswordOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUserPasswordOption?: (ctx: UserPasswordOptionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.userLockOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUserLockOption?: (ctx: UserLockOptionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.factorAuthOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFactorAuthOption?: (ctx: FactorAuthOptionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.registrationOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRegistrationOption?: (ctx: RegistrationOptionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.factor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFactor?: (ctx: FactorContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.privelegeClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrivelegeClause?: (ctx: PrivelegeClauseContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.privilege`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrivilege?: (ctx: PrivilegeContext) => Result;
    /**
     * Visit a parse tree produced by the `currentSchemaPriviLevel`
     * labeled alternative in `MySqlParser.privilegeLevel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCurrentSchemaPriviLevel?: (ctx: CurrentSchemaPriviLevelContext) => Result;
    /**
     * Visit a parse tree produced by the `globalPrivLevel`
     * labeled alternative in `MySqlParser.privilegeLevel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGlobalPrivLevel?: (ctx: GlobalPrivLevelContext) => Result;
    /**
     * Visit a parse tree produced by the `definiteSchemaPrivLevel`
     * labeled alternative in `MySqlParser.privilegeLevel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefiniteSchemaPrivLevel?: (ctx: DefiniteSchemaPrivLevelContext) => Result;
    /**
     * Visit a parse tree produced by the `definiteFullTablePrivLevel`
     * labeled alternative in `MySqlParser.privilegeLevel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefiniteFullTablePrivLevel?: (ctx: DefiniteFullTablePrivLevelContext) => Result;
    /**
     * Visit a parse tree produced by the `definiteFullTablePrivLevel2`
     * labeled alternative in `MySqlParser.privilegeLevel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefiniteFullTablePrivLevel2?: (ctx: DefiniteFullTablePrivLevel2Context) => Result;
    /**
     * Visit a parse tree produced by the `definiteTablePrivLevel`
     * labeled alternative in `MySqlParser.privilegeLevel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefiniteTablePrivLevel?: (ctx: DefiniteTablePrivLevelContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.renameUserClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenameUserClause?: (ctx: RenameUserClauseContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.analyzeTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyzeTable?: (ctx: AnalyzeTableContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.checkTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCheckTable?: (ctx: CheckTableContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.checksumTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitChecksumTable?: (ctx: ChecksumTableContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.optimizeTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptimizeTable?: (ctx: OptimizeTableContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.repairTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRepairTable?: (ctx: RepairTableContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.tableActionOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableActionOption?: (ctx: TableActionOptionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.checkTableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCheckTableOption?: (ctx: CheckTableOptionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.createFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateFunction?: (ctx: CreateFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.installComponent`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInstallComponent?: (ctx: InstallComponentContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.variableExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableExpr?: (ctx: VariableExprContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.uninstallComponent`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUninstallComponent?: (ctx: UninstallComponentContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.installPlugin`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInstallPlugin?: (ctx: InstallPluginContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.uninstallPlugin`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUninstallPlugin?: (ctx: UninstallPluginContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.cloneStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCloneStatement?: (ctx: CloneStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `setVariable`
     * labeled alternative in `MySqlParser.setStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetVariable?: (ctx: SetVariableContext) => Result;
    /**
     * Visit a parse tree produced by the `setCharset`
     * labeled alternative in `MySqlParser.setStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetCharset?: (ctx: SetCharsetContext) => Result;
    /**
     * Visit a parse tree produced by the `setNames`
     * labeled alternative in `MySqlParser.setStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetNames?: (ctx: SetNamesContext) => Result;
    /**
     * Visit a parse tree produced by the `setPassword`
     * labeled alternative in `MySqlParser.setStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetPassword?: (ctx: SetPasswordContext) => Result;
    /**
     * Visit a parse tree produced by the `setTransaction`
     * labeled alternative in `MySqlParser.setStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTransaction?: (ctx: SetTransactionContext) => Result;
    /**
     * Visit a parse tree produced by the `setAutocommit`
     * labeled alternative in `MySqlParser.setStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetAutocommit?: (ctx: SetAutocommitContext) => Result;
    /**
     * Visit a parse tree produced by the `setNewValueInsideTrigger`
     * labeled alternative in `MySqlParser.setStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetNewValueInsideTrigger?: (ctx: SetNewValueInsideTriggerContext) => Result;
    /**
     * Visit a parse tree produced by the `showMasterLogs`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowMasterLogs?: (ctx: ShowMasterLogsContext) => Result;
    /**
     * Visit a parse tree produced by the `showLogEvents`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowLogEvents?: (ctx: ShowLogEventsContext) => Result;
    /**
     * Visit a parse tree produced by the `showObjectFilter`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowObjectFilter?: (ctx: ShowObjectFilterContext) => Result;
    /**
     * Visit a parse tree produced by the `showColumns`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowColumns?: (ctx: ShowColumnsContext) => Result;
    /**
     * Visit a parse tree produced by the `showCreateDb`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCreateDb?: (ctx: ShowCreateDbContext) => Result;
    /**
     * Visit a parse tree produced by the `showCreateFullIdObject`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCreateFullIdObject?: (ctx: ShowCreateFullIdObjectContext) => Result;
    /**
     * Visit a parse tree produced by the `showCreateFunction`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCreateFunction?: (ctx: ShowCreateFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `showCreateView`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCreateView?: (ctx: ShowCreateViewContext) => Result;
    /**
     * Visit a parse tree produced by the `showCreateTable`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCreateTable?: (ctx: ShowCreateTableContext) => Result;
    /**
     * Visit a parse tree produced by the `showCreateUser`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCreateUser?: (ctx: ShowCreateUserContext) => Result;
    /**
     * Visit a parse tree produced by the `showEngine`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowEngine?: (ctx: ShowEngineContext) => Result;
    /**
     * Visit a parse tree produced by the `showGlobalInfo`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowGlobalInfo?: (ctx: ShowGlobalInfoContext) => Result;
    /**
     * Visit a parse tree produced by the `showErrors`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowErrors?: (ctx: ShowErrorsContext) => Result;
    /**
     * Visit a parse tree produced by the `showCountErrors`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCountErrors?: (ctx: ShowCountErrorsContext) => Result;
    /**
     * Visit a parse tree produced by the `showSchemaFilter`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowSchemaFilter?: (ctx: ShowSchemaFilterContext) => Result;
    /**
     * Visit a parse tree produced by the `showPercedureCode`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowPercedureCode?: (ctx: ShowPercedureCodeContext) => Result;
    /**
     * Visit a parse tree produced by the `showFunctionCode`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowFunctionCode?: (ctx: ShowFunctionCodeContext) => Result;
    /**
     * Visit a parse tree produced by the `showGrants`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowGrants?: (ctx: ShowGrantsContext) => Result;
    /**
     * Visit a parse tree produced by the `showIndexes`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowIndexes?: (ctx: ShowIndexesContext) => Result;
    /**
     * Visit a parse tree produced by the `showOpenTables`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowOpenTables?: (ctx: ShowOpenTablesContext) => Result;
    /**
     * Visit a parse tree produced by the `showProfile`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowProfile?: (ctx: ShowProfileContext) => Result;
    /**
     * Visit a parse tree produced by the `showSlaveStatus`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowSlaveStatus?: (ctx: ShowSlaveStatusContext) => Result;
    /**
     * Visit a parse tree produced by the `showReplicas`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowReplicas?: (ctx: ShowReplicasContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.variableClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableClause?: (ctx: VariableClauseContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.showCommonEntity`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCommonEntity?: (ctx: ShowCommonEntityContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.showFilter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowFilter?: (ctx: ShowFilterContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.showGlobalInfoClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowGlobalInfoClause?: (ctx: ShowGlobalInfoClauseContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.showSchemaEntity`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowSchemaEntity?: (ctx: ShowSchemaEntityContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.showProfileType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowProfileType?: (ctx: ShowProfileTypeContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.binlogStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBinlogStatement?: (ctx: BinlogStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.cacheIndexStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCacheIndexStatement?: (ctx: CacheIndexStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.flushStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFlushStatement?: (ctx: FlushStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.killStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKillStatement?: (ctx: KillStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.loadIndexIntoCache`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoadIndexIntoCache?: (ctx: LoadIndexIntoCacheContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.resetStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResetStatement?: (ctx: ResetStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.resetOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResetOption?: (ctx: ResetOptionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.resetPersist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResetPersist?: (ctx: ResetPersistContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.resetAllChannel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResetAllChannel?: (ctx: ResetAllChannelContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.reStartStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReStartStatement?: (ctx: ReStartStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.shutdownStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShutdownStatement?: (ctx: ShutdownStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.tableIndex`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableIndex?: (ctx: TableIndexContext) => Result;
    /**
     * Visit a parse tree produced by the `simpleFlushOption`
     * labeled alternative in `MySqlParser.flushOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleFlushOption?: (ctx: SimpleFlushOptionContext) => Result;
    /**
     * Visit a parse tree produced by the `channelFlushOption`
     * labeled alternative in `MySqlParser.flushOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitChannelFlushOption?: (ctx: ChannelFlushOptionContext) => Result;
    /**
     * Visit a parse tree produced by the `tableFlushOption`
     * labeled alternative in `MySqlParser.flushOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableFlushOption?: (ctx: TableFlushOptionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.flushTableOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFlushTableOption?: (ctx: FlushTableOptionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.loadedTableIndexes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoadedTableIndexes?: (ctx: LoadedTableIndexesContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.simpleDescribeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleDescribeStatement?: (ctx: SimpleDescribeStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.fullDescribeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFullDescribeStatement?: (ctx: FullDescribeStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.analyzeDescribeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyzeDescribeStatement?: (ctx: AnalyzeDescribeStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.helpStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHelpStatement?: (ctx: HelpStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.useStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUseStatement?: (ctx: UseStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.signalStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSignalStatement?: (ctx: SignalStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.resignalStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResignalStatement?: (ctx: ResignalStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.signalConditionInformation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSignalConditionInformation?: (ctx: SignalConditionInformationContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.withStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWithStatement?: (ctx: WithStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.tableStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableStatement?: (ctx: TableStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.diagnosticsStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDiagnosticsStatement?: (ctx: DiagnosticsStatementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.diagnosticsConditionInformationName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDiagnosticsConditionInformationName?: (ctx: DiagnosticsConditionInformationNameContext) => Result;
    /**
     * Visit a parse tree produced by the `describeStatements`
     * labeled alternative in `MySqlParser.describeObjectClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeStatements?: (ctx: DescribeStatementsContext) => Result;
    /**
     * Visit a parse tree produced by the `describeConnection`
     * labeled alternative in `MySqlParser.describeObjectClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeConnection?: (ctx: DescribeConnectionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.databaseNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatabaseNameCreate?: (ctx: DatabaseNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.databaseName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatabaseName?: (ctx: DatabaseNameContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.functionNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionNameCreate?: (ctx: FunctionNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.functionName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionName?: (ctx: FunctionNameContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.viewNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewNameCreate?: (ctx: ViewNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.viewName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewName?: (ctx: ViewNameContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.indexNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndexNameCreate?: (ctx: IndexNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.indexNames`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndexNames?: (ctx: IndexNamesContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.indexName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndexName?: (ctx: IndexNameContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.groupNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupNameCreate?: (ctx: GroupNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.groupName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupName?: (ctx: GroupNameContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.tableNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableNameCreate?: (ctx: TableNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.tableNames`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableNames?: (ctx: TableNamesContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.tableName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableName?: (ctx: TableNameContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.userOrRoleNames`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUserOrRoleNames?: (ctx: UserOrRoleNamesContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.userOrRoleName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUserOrRoleName?: (ctx: UserOrRoleNameContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.columnNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameCreate?: (ctx: ColumnNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.columnNames`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNames?: (ctx: ColumnNamesContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.columnName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnName?: (ctx: ColumnNameContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.tablespaceNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablespaceNameCreate?: (ctx: TablespaceNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.tablespaceName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablespaceName?: (ctx: TablespaceNameContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.partitionNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionNameCreate?: (ctx: PartitionNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.partitionNames`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionNames?: (ctx: PartitionNamesContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.partitionName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionName?: (ctx: PartitionNameContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.indexColumnName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndexColumnName?: (ctx: IndexColumnNameContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.userHostPort`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUserHostPort?: (ctx: UserHostPortContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.userAtHost`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUserAtHost?: (ctx: UserAtHostContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.simpleUserName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleUserName?: (ctx: SimpleUserNameContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.hostName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHostName?: (ctx: HostNameContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.userName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUserName?: (ctx: UserNameContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.mysqlVariable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMysqlVariable?: (ctx: MysqlVariableContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.charsetName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCharsetName?: (ctx: CharsetNameContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.collationName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCollationName?: (ctx: CollationNameContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.engineName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEngineName?: (ctx: EngineNameContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.engineNameBase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEngineNameBase?: (ctx: EngineNameBaseContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.uuidSet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUuidSet?: (ctx: UuidSetContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.xid`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXid?: (ctx: XidContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.xuidStringId`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXuidStringId?: (ctx: XuidStringIdContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.fullId`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFullId?: (ctx: FullIdContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.uidList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUidList?: (ctx: UidListContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.uid`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUid?: (ctx: UidContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.simpleId`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleId?: (ctx: SimpleIdContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.dottedId`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDottedId?: (ctx: DottedIdContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.decimalLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecimalLiteral?: (ctx: DecimalLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.fileSizeLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFileSizeLiteral?: (ctx: FileSizeLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.stringLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringLiteral?: (ctx: StringLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.booleanLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.hexadecimalLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHexadecimalLiteral?: (ctx: HexadecimalLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.nullNotnull`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNullNotnull?: (ctx: NullNotnullContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.constant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstant?: (ctx: ConstantContext) => Result;
    /**
     * Visit a parse tree produced by the `stringDataType`
     * labeled alternative in `MySqlParser.dataType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringDataType?: (ctx: StringDataTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `nationalVaryingStringDataType`
     * labeled alternative in `MySqlParser.dataType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNationalVaryingStringDataType?: (ctx: NationalVaryingStringDataTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `nationalStringDataType`
     * labeled alternative in `MySqlParser.dataType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNationalStringDataType?: (ctx: NationalStringDataTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `dimensionDataType`
     * labeled alternative in `MySqlParser.dataType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDimensionDataType?: (ctx: DimensionDataTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `simpleDataType`
     * labeled alternative in `MySqlParser.dataType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleDataType?: (ctx: SimpleDataTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `collectionDataType`
     * labeled alternative in `MySqlParser.dataType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCollectionDataType?: (ctx: CollectionDataTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `spatialDataType`
     * labeled alternative in `MySqlParser.dataType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSpatialDataType?: (ctx: SpatialDataTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `longVarcharDataType`
     * labeled alternative in `MySqlParser.dataType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLongVarcharDataType?: (ctx: LongVarcharDataTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `longVarbinaryDataType`
     * labeled alternative in `MySqlParser.dataType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLongVarbinaryDataType?: (ctx: LongVarbinaryDataTypeContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.collectionOptions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCollectionOptions?: (ctx: CollectionOptionsContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.convertedDataType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConvertedDataType?: (ctx: ConvertedDataTypeContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.lengthOneDimension`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLengthOneDimension?: (ctx: LengthOneDimensionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.lengthTwoDimension`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLengthTwoDimension?: (ctx: LengthTwoDimensionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.lengthTwoOptionalDimension`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLengthTwoOptionalDimension?: (ctx: LengthTwoOptionalDimensionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.indexColumnNames`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndexColumnNames?: (ctx: IndexColumnNamesContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.expressions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressions?: (ctx: ExpressionsContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.valuesOrValueList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValuesOrValueList?: (ctx: ValuesOrValueListContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.expressionsWithDefaults`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionsWithDefaults?: (ctx: ExpressionsWithDefaultsContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.expressionOrDefault`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionOrDefault?: (ctx: ExpressionOrDefaultContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.constants`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstants?: (ctx: ConstantsContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.simpleStrings`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleStrings?: (ctx: SimpleStringsContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.userVariables`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUserVariables?: (ctx: UserVariablesContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.defaultValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefaultValue?: (ctx: DefaultValueContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.currentTimestamp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCurrentTimestamp?: (ctx: CurrentTimestampContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.ifExists`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfExists?: (ctx: IfExistsContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.ifNotExists`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfNotExists?: (ctx: IfNotExistsContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.orReplace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrReplace?: (ctx: OrReplaceContext) => Result;
    /**
     * Visit a parse tree produced by the `specificFunctionCall`
     * labeled alternative in `MySqlParser.functionCall`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSpecificFunctionCall?: (ctx: SpecificFunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by the `aggregateFunctionCall`
     * labeled alternative in `MySqlParser.functionCall`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregateFunctionCall?: (ctx: AggregateFunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by the `nonAggregateFunctionCall`
     * labeled alternative in `MySqlParser.functionCall`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonAggregateFunctionCall?: (ctx: NonAggregateFunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by the `scalarFunctionCall`
     * labeled alternative in `MySqlParser.functionCall`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitScalarFunctionCall?: (ctx: ScalarFunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by the `udfFunctionCall`
     * labeled alternative in `MySqlParser.functionCall`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUdfFunctionCall?: (ctx: UdfFunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by the `passwordFunctionCall`
     * labeled alternative in `MySqlParser.functionCall`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPasswordFunctionCall?: (ctx: PasswordFunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by the `simpleFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleFunctionCall?: (ctx: SimpleFunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by the `currentUser`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCurrentUser?: (ctx: CurrentUserContext) => Result;
    /**
     * Visit a parse tree produced by the `dataTypeFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDataTypeFunctionCall?: (ctx: DataTypeFunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by the `valuesFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValuesFunctionCall?: (ctx: ValuesFunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by the `caseExpressionFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCaseExpressionFunctionCall?: (ctx: CaseExpressionFunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by the `caseFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCaseFunctionCall?: (ctx: CaseFunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by the `charFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCharFunctionCall?: (ctx: CharFunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by the `positionFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPositionFunctionCall?: (ctx: PositionFunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by the `substrFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubstrFunctionCall?: (ctx: SubstrFunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by the `trimFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrimFunctionCall?: (ctx: TrimFunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by the `weightFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWeightFunctionCall?: (ctx: WeightFunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by the `extractFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtractFunctionCall?: (ctx: ExtractFunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by the `getFormatFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGetFormatFunctionCall?: (ctx: GetFormatFunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by the `jsonValueFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJsonValueFunctionCall?: (ctx: JsonValueFunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.caseFuncAlternative`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCaseFuncAlternative?: (ctx: CaseFuncAlternativeContext) => Result;
    /**
     * Visit a parse tree produced by the `levelWeightList`
     * labeled alternative in `MySqlParser.levelsInWeightString`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLevelWeightList?: (ctx: LevelWeightListContext) => Result;
    /**
     * Visit a parse tree produced by the `levelWeightRange`
     * labeled alternative in `MySqlParser.levelsInWeightString`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLevelWeightRange?: (ctx: LevelWeightRangeContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.levelInWeightListElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLevelInWeightListElement?: (ctx: LevelInWeightListElementContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.aggregateWindowedFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregateWindowedFunction?: (ctx: AggregateWindowedFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.nonAggregateWindowedFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonAggregateWindowedFunction?: (ctx: NonAggregateWindowedFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.overClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOverClause?: (ctx: OverClauseContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.windowSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowSpec?: (ctx: WindowSpecContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.windowName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowName?: (ctx: WindowNameContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.frameClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrameClause?: (ctx: FrameClauseContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.frameUnits`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrameUnits?: (ctx: FrameUnitsContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.frameExtent`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrameExtent?: (ctx: FrameExtentContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.frameBetween`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrameBetween?: (ctx: FrameBetweenContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.frameRange`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrameRange?: (ctx: FrameRangeContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.partitionClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionClause?: (ctx: PartitionClauseContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.scalarFunctionName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitScalarFunctionName?: (ctx: ScalarFunctionNameContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.passwordFunctionClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPasswordFunctionClause?: (ctx: PasswordFunctionClauseContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.functionArgs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionArgs?: (ctx: FunctionArgsContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.functionArg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionArg?: (ctx: FunctionArgContext) => Result;
    /**
     * Visit a parse tree produced by the `isExpression`
     * labeled alternative in `MySqlParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIsExpression?: (ctx: IsExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `notExpression`
     * labeled alternative in `MySqlParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotExpression?: (ctx: NotExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `logicalExpression`
     * labeled alternative in `MySqlParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalExpression?: (ctx: LogicalExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `predicateExpression`
     * labeled alternative in `MySqlParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicateExpression?: (ctx: PredicateExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `soundsLikePredicate`
     * labeled alternative in `MySqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSoundsLikePredicate?: (ctx: SoundsLikePredicateContext) => Result;
    /**
     * Visit a parse tree produced by the `expressionAtomPredicate`
     * labeled alternative in `MySqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionAtomPredicate?: (ctx: ExpressionAtomPredicateContext) => Result;
    /**
     * Visit a parse tree produced by the `subqueryComparisonPredicate`
     * labeled alternative in `MySqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubqueryComparisonPredicate?: (ctx: SubqueryComparisonPredicateContext) => Result;
    /**
     * Visit a parse tree produced by the `jsonMemberOfPredicate`
     * labeled alternative in `MySqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJsonMemberOfPredicate?: (ctx: JsonMemberOfPredicateContext) => Result;
    /**
     * Visit a parse tree produced by the `binaryComparisonPredicate`
     * labeled alternative in `MySqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBinaryComparisonPredicate?: (ctx: BinaryComparisonPredicateContext) => Result;
    /**
     * Visit a parse tree produced by the `inPredicate`
     * labeled alternative in `MySqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInPredicate?: (ctx: InPredicateContext) => Result;
    /**
     * Visit a parse tree produced by the `betweenPredicate`
     * labeled alternative in `MySqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBetweenPredicate?: (ctx: BetweenPredicateContext) => Result;
    /**
     * Visit a parse tree produced by the `isNullPredicate`
     * labeled alternative in `MySqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIsNullPredicate?: (ctx: IsNullPredicateContext) => Result;
    /**
     * Visit a parse tree produced by the `likePredicate`
     * labeled alternative in `MySqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLikePredicate?: (ctx: LikePredicateContext) => Result;
    /**
     * Visit a parse tree produced by the `regexpPredicate`
     * labeled alternative in `MySqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRegexpPredicate?: (ctx: RegexpPredicateContext) => Result;
    /**
     * Visit a parse tree produced by the `unaryExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryExpressionAtom?: (ctx: UnaryExpressionAtomContext) => Result;
    /**
     * Visit a parse tree produced by the `collateExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCollateExpressionAtom?: (ctx: CollateExpressionAtomContext) => Result;
    /**
     * Visit a parse tree produced by the `columnNameExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameExpressionAtom?: (ctx: ColumnNameExpressionAtomContext) => Result;
    /**
     * Visit a parse tree produced by the `variableAssignExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableAssignExpressionAtom?: (ctx: VariableAssignExpressionAtomContext) => Result;
    /**
     * Visit a parse tree produced by the `mysqlVariableExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMysqlVariableExpressionAtom?: (ctx: MysqlVariableExpressionAtomContext) => Result;
    /**
     * Visit a parse tree produced by the `nestedExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNestedExpressionAtom?: (ctx: NestedExpressionAtomContext) => Result;
    /**
     * Visit a parse tree produced by the `nestedRowExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNestedRowExpressionAtom?: (ctx: NestedRowExpressionAtomContext) => Result;
    /**
     * Visit a parse tree produced by the `mathExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMathExpressionAtom?: (ctx: MathExpressionAtomContext) => Result;
    /**
     * Visit a parse tree produced by the `existsExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExistsExpressionAtom?: (ctx: ExistsExpressionAtomContext) => Result;
    /**
     * Visit a parse tree produced by the `intervalExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntervalExpressionAtom?: (ctx: IntervalExpressionAtomContext) => Result;
    /**
     * Visit a parse tree produced by the `jsonExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJsonExpressionAtom?: (ctx: JsonExpressionAtomContext) => Result;
    /**
     * Visit a parse tree produced by the `subqueryExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubqueryExpressionAtom?: (ctx: SubqueryExpressionAtomContext) => Result;
    /**
     * Visit a parse tree produced by the `constantExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstantExpressionAtom?: (ctx: ConstantExpressionAtomContext) => Result;
    /**
     * Visit a parse tree produced by the `functionCallExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionCallExpressionAtom?: (ctx: FunctionCallExpressionAtomContext) => Result;
    /**
     * Visit a parse tree produced by the `binaryExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBinaryExpressionAtom?: (ctx: BinaryExpressionAtomContext) => Result;
    /**
     * Visit a parse tree produced by the `bitExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBitExpressionAtom?: (ctx: BitExpressionAtomContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.unaryOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryOperator?: (ctx: UnaryOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.comparisonOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.comparisonBase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparisonBase?: (ctx: ComparisonBaseContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.logicalOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalOperator?: (ctx: LogicalOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.bitOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBitOperator?: (ctx: BitOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.mathOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMathOperator?: (ctx: MathOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.jsonOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJsonOperator?: (ctx: JsonOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.charsetNameBase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCharsetNameBase?: (ctx: CharsetNameBaseContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.transactionLevelBase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransactionLevelBase?: (ctx: TransactionLevelBaseContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.privilegesBase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrivilegesBase?: (ctx: PrivilegesBaseContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.intervalTypeBase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntervalTypeBase?: (ctx: IntervalTypeBaseContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.dataTypeBase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDataTypeBase?: (ctx: DataTypeBaseContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.keywordsCanBeId`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKeywordsCanBeId?: (ctx: KeywordsCanBeIdContext) => Result;
    /**
     * Visit a parse tree produced by `MySqlParser.functionNameBase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionNameBase?: (ctx: FunctionNameBaseContext) => Result;
}

