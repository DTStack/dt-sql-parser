// Generated from dt-sql-parser/src/grammar/mysql/MySqlParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { AlterByTableOptionContext } from "./MySqlParser";
import { AlterByAddColumnContext } from "./MySqlParser";
import { AlterByAddColumnsContext } from "./MySqlParser";
import { AlterByAddIndexContext } from "./MySqlParser";
import { AlterByAddSpecialIndexContext } from "./MySqlParser";
import { AlterByAddPrimaryKeyContext } from "./MySqlParser";
import { AlterByAddUniqueKeyContext } from "./MySqlParser";
import { AlterByAddForeignKeyContext } from "./MySqlParser";
import { AlterByAddCheckTableConstraintContext } from "./MySqlParser";
import { AlterByDropConstraintCheckContext } from "./MySqlParser";
import { AlterByAlterCheckTableConstraintContext } from "./MySqlParser";
import { AlterBySetAlgorithmContext } from "./MySqlParser";
import { AlterByAlterColumnDefaultContext } from "./MySqlParser";
import { AlterByAlterIndexVisibilityContext } from "./MySqlParser";
import { AlterByChangeColumnContext } from "./MySqlParser";
import { AlterByDefaultCharsetContext } from "./MySqlParser";
import { AlterByConvertCharsetContext } from "./MySqlParser";
import { AlterKeysContext } from "./MySqlParser";
import { AlterTablespaceOptionContext } from "./MySqlParser";
import { AlterByDropColumnContext } from "./MySqlParser";
import { AlterByDropIndexContext } from "./MySqlParser";
import { AlterByDropPrimaryKeyContext } from "./MySqlParser";
import { AlterByDropForeignKeyContext } from "./MySqlParser";
import { AlterByForceContext } from "./MySqlParser";
import { AlterByLockContext } from "./MySqlParser";
import { AlterByModifyColumnContext } from "./MySqlParser";
import { AlterByOrderContext } from "./MySqlParser";
import { AlterByRenameColumnContext } from "./MySqlParser";
import { AlterByRenameIndexContext } from "./MySqlParser";
import { AlterByRenameContext } from "./MySqlParser";
import { AlterByValidateContext } from "./MySqlParser";
import { AlterPartitionContext } from "./MySqlParser";
import { ModuleContext } from "./MySqlParser";
import { PasswordModuleOptionContext } from "./MySqlParser";
import { SimpleFunctionCallContext } from "./MySqlParser";
import { CurrentUserContext } from "./MySqlParser";
import { DataTypeFunctionCallContext } from "./MySqlParser";
import { ValuesFunctionCallContext } from "./MySqlParser";
import { CaseExpressionFunctionCallContext } from "./MySqlParser";
import { CaseFunctionCallContext } from "./MySqlParser";
import { CharFunctionCallContext } from "./MySqlParser";
import { PositionFunctionCallContext } from "./MySqlParser";
import { SubstrFunctionCallContext } from "./MySqlParser";
import { TrimFunctionCallContext } from "./MySqlParser";
import { WeightFunctionCallContext } from "./MySqlParser";
import { ExtractFunctionCallContext } from "./MySqlParser";
import { GetFormatFunctionCallContext } from "./MySqlParser";
import { JsonValueFunctionCallContext } from "./MySqlParser";
import { InnerJoinContext } from "./MySqlParser";
import { StraightJoinContext } from "./MySqlParser";
import { OuterJoinContext } from "./MySqlParser";
import { NaturalJoinContext } from "./MySqlParser";
import { SetVariableContext } from "./MySqlParser";
import { SetCharsetContext } from "./MySqlParser";
import { SetNamesContext } from "./MySqlParser";
import { SetPasswordContext } from "./MySqlParser";
import { SetTransactionContext } from "./MySqlParser";
import { SetAutocommitContext } from "./MySqlParser";
import { SetNewValueInsideTriggerContext } from "./MySqlParser";
import { AtomTableItemContext } from "./MySqlParser";
import { SubqueryTableItemContext } from "./MySqlParser";
import { TableSourcesItemContext } from "./MySqlParser";
import { AlterByAddPartitionContext } from "./MySqlParser";
import { AlterByDropPartitionContext } from "./MySqlParser";
import { AlterByDiscardPartitionContext } from "./MySqlParser";
import { AlterByImportPartitionContext } from "./MySqlParser";
import { AlterByTruncatePartitionContext } from "./MySqlParser";
import { AlterByCoalescePartitionContext } from "./MySqlParser";
import { AlterByReorganizePartitionContext } from "./MySqlParser";
import { AlterByExchangePartitionContext } from "./MySqlParser";
import { AlterByAnalyzePartitionContext } from "./MySqlParser";
import { AlterByCheckPartitionContext } from "./MySqlParser";
import { AlterByOptimizePartitionContext } from "./MySqlParser";
import { AlterByRebuildPartitionContext } from "./MySqlParser";
import { AlterByRepairPartitionContext } from "./MySqlParser";
import { AlterByRemovePartitioningContext } from "./MySqlParser";
import { AlterByUpgradePartitioningContext } from "./MySqlParser";
import { SourceStringOptionContext } from "./MySqlParser";
import { SourceDecimalOptionContext } from "./MySqlParser";
import { SourceBoolOptionContext } from "./MySqlParser";
import { SourceOtherOptionContext } from "./MySqlParser";
import { SourceUidListOptionContext } from "./MySqlParser";
import { SimpleSelectContext } from "./MySqlParser";
import { ParenthesisSelectContext } from "./MySqlParser";
import { UnionSelectContext } from "./MySqlParser";
import { UnionParenthesisSelectContext } from "./MySqlParser";
import { WithLateralStatementContext } from "./MySqlParser";
import { StringDataTypeContext } from "./MySqlParser";
import { NationalVaryingStringDataTypeContext } from "./MySqlParser";
import { NationalStringDataTypeContext } from "./MySqlParser";
import { DimensionDataTypeContext } from "./MySqlParser";
import { SimpleDataTypeContext } from "./MySqlParser";
import { CollectionDataTypeContext } from "./MySqlParser";
import { SpatialDataTypeContext } from "./MySqlParser";
import { LongVarcharDataTypeContext } from "./MySqlParser";
import { LongVarbinaryDataTypeContext } from "./MySqlParser";
import { NullColumnConstraintContext } from "./MySqlParser";
import { DefaultColumnConstraintContext } from "./MySqlParser";
import { VisibilityColumnConstraintContext } from "./MySqlParser";
import { InvisibilityColumnConstraintContext } from "./MySqlParser";
import { AutoIncrementColumnConstraintContext } from "./MySqlParser";
import { PrimaryKeyColumnConstraintContext } from "./MySqlParser";
import { UniqueKeyColumnConstraintContext } from "./MySqlParser";
import { CommentColumnConstraintContext } from "./MySqlParser";
import { FormatColumnConstraintContext } from "./MySqlParser";
import { StorageColumnConstraintContext } from "./MySqlParser";
import { ReferenceColumnConstraintContext } from "./MySqlParser";
import { CollateColumnConstraintContext } from "./MySqlParser";
import { GeneratedColumnConstraintContext } from "./MySqlParser";
import { SerialDefaultColumnConstraintContext } from "./MySqlParser";
import { CheckExprContext } from "./MySqlParser";
import { SubPartitionFunctionHashContext } from "./MySqlParser";
import { SubPartitionFunctionKeyContext } from "./MySqlParser";
import { V57Context } from "./MySqlParser";
import { V80Context } from "./MySqlParser";
import { DescribeStatementsContext } from "./MySqlParser";
import { DescribeConnectionContext } from "./MySqlParser";
import { SpecificFunctionCallContext } from "./MySqlParser";
import { AggregateFunctionCallContext } from "./MySqlParser";
import { NonAggregateFunctionCallContext } from "./MySqlParser";
import { ScalarFunctionCallContext } from "./MySqlParser";
import { UdfFunctionCallContext } from "./MySqlParser";
import { PasswordFunctionCallContext } from "./MySqlParser";
import { TableOptionEngineContext } from "./MySqlParser";
import { TableOptionEngineAttributeContext } from "./MySqlParser";
import { TableOptionAutoextendSizeContext } from "./MySqlParser";
import { TableOptionAutoIncrementContext } from "./MySqlParser";
import { TableOptionAverageContext } from "./MySqlParser";
import { TableOptionCharsetContext } from "./MySqlParser";
import { TableOptionChecksumContext } from "./MySqlParser";
import { TableOptionCollateContext } from "./MySqlParser";
import { TableOptionCommentContext } from "./MySqlParser";
import { TableOptionCompressionContext } from "./MySqlParser";
import { TableOptionConnectionContext } from "./MySqlParser";
import { TableOptionDataDirectoryContext } from "./MySqlParser";
import { TableOptionDelayContext } from "./MySqlParser";
import { TableOptionEncryptionContext } from "./MySqlParser";
import { TableOptionPageCompressedContext } from "./MySqlParser";
import { TableOptionPageCompressionLevelContext } from "./MySqlParser";
import { TableOptionEncryptionKeyIdContext } from "./MySqlParser";
import { TableOptionIndexDirectoryContext } from "./MySqlParser";
import { TableOptionInsertMethodContext } from "./MySqlParser";
import { TableOptionKeyBlockSizeContext } from "./MySqlParser";
import { TableOptionMaxRowsContext } from "./MySqlParser";
import { TableOptionMinRowsContext } from "./MySqlParser";
import { TableOptionPackKeysContext } from "./MySqlParser";
import { TableOptionPasswordContext } from "./MySqlParser";
import { TableOptionRowFormatContext } from "./MySqlParser";
import { TableOptionStartTransactionContext } from "./MySqlParser";
import { TableOptionSecondaryEngineAttributeContext } from "./MySqlParser";
import { TableOptionRecalculationContext } from "./MySqlParser";
import { TableOptionPersistentContext } from "./MySqlParser";
import { TableOptionSamplePageContext } from "./MySqlParser";
import { TableOptionTablespaceContext } from "./MySqlParser";
import { TableOptionTableTypeContext } from "./MySqlParser";
import { TableOptionTransactionalContext } from "./MySqlParser";
import { TableOptionUnionContext } from "./MySqlParser";
import { ConstantExpressionAtomContext } from "./MySqlParser";
import { ColumnNameExpressionAtomContext } from "./MySqlParser";
import { FunctionCallExpressionAtomContext } from "./MySqlParser";
import { CollateExpressionAtomContext } from "./MySqlParser";
import { MysqlVariableExpressionAtomContext } from "./MySqlParser";
import { UnaryExpressionAtomContext } from "./MySqlParser";
import { BinaryExpressionAtomContext } from "./MySqlParser";
import { VariableAssignExpressionAtomContext } from "./MySqlParser";
import { NestedExpressionAtomContext } from "./MySqlParser";
import { NestedRowExpressionAtomContext } from "./MySqlParser";
import { ExistsExpressionAtomContext } from "./MySqlParser";
import { SubqueryExpressionAtomContext } from "./MySqlParser";
import { IntervalExpressionAtomContext } from "./MySqlParser";
import { BitExpressionAtomContext } from "./MySqlParser";
import { MathExpressionAtomContext } from "./MySqlParser";
import { JsonExpressionAtomContext } from "./MySqlParser";
import { MasterStringOptionContext } from "./MySqlParser";
import { MasterDecimalOptionContext } from "./MySqlParser";
import { MasterBoolOptionContext } from "./MySqlParser";
import { V8AddMasterOptionContext } from "./MySqlParser";
import { MasterUidListOptionContext } from "./MySqlParser";
import { GtidsUntilOptionContext } from "./MySqlParser";
import { MasterLogUntilOptionContext } from "./MySqlParser";
import { SourceLogUntilOptionContext } from "./MySqlParser";
import { RelayLogUntilOptionContext } from "./MySqlParser";
import { SqlGapsUntilOptionContext } from "./MySqlParser";
import { CopyCreateTableContext } from "./MySqlParser";
import { ColumnCreateTableContext } from "./MySqlParser";
import { QueryCreateTableContext } from "./MySqlParser";
import { PartitionFunctionHashContext } from "./MySqlParser";
import { PartitionFunctionKeyContext } from "./MySqlParser";
import { PartitionFunctionRangeContext } from "./MySqlParser";
import { PartitionFunctionListContext } from "./MySqlParser";
import { HandlerConditionCodeContext } from "./MySqlParser";
import { HandlerConditionStateContext } from "./MySqlParser";
import { HandlerConditionNameContext } from "./MySqlParser";
import { HandlerConditionWarningContext } from "./MySqlParser";
import { HandlerConditionNotfoundContext } from "./MySqlParser";
import { HandlerConditionExceptionContext } from "./MySqlParser";
import { LevelWeightListContext } from "./MySqlParser";
import { LevelWeightRangeContext } from "./MySqlParser";
import { InPredicateContext } from "./MySqlParser";
import { IsNullPredicateContext } from "./MySqlParser";
import { BinaryComparisonPredicateContext } from "./MySqlParser";
import { SubqueryComparisonPredicateContext } from "./MySqlParser";
import { BetweenPredicateContext } from "./MySqlParser";
import { SoundsLikePredicateContext } from "./MySqlParser";
import { LikePredicateContext } from "./MySqlParser";
import { RegexpPredicateContext } from "./MySqlParser";
import { JsonMemberOfPredicateContext } from "./MySqlParser";
import { ExpressionAtomPredicateContext } from "./MySqlParser";
import { UserConnectionOptionContext } from "./MySqlParser";
import { PasswordConnectionOptionContext } from "./MySqlParser";
import { DefaultAuthConnectionOptionContext } from "./MySqlParser";
import { PluginDirConnectionOptionContext } from "./MySqlParser";
import { SelectIntoVariablesContext } from "./MySqlParser";
import { SelectIntoDumpFileContext } from "./MySqlParser";
import { SelectIntoTextFileContext } from "./MySqlParser";
import { PartitionOptionEngineContext } from "./MySqlParser";
import { PartitionOptionCommentContext } from "./MySqlParser";
import { PartitionOptionDataDirectoryContext } from "./MySqlParser";
import { PartitionOptionIndexDirectoryContext } from "./MySqlParser";
import { PartitionOptionMaxRowsContext } from "./MySqlParser";
import { PartitionOptionMinRowsContext } from "./MySqlParser";
import { PartitionOptionTablespaceContext } from "./MySqlParser";
import { PartitionOptionNodeGroupContext } from "./MySqlParser";
import { DoDbReplicationContext } from "./MySqlParser";
import { IgnoreDbReplicationContext } from "./MySqlParser";
import { DoTableReplicationContext } from "./MySqlParser";
import { IgnoreTableReplicationContext } from "./MySqlParser";
import { WildDoTableReplicationContext } from "./MySqlParser";
import { WildIgnoreTableReplicationContext } from "./MySqlParser";
import { RewriteDbReplicationContext } from "./MySqlParser";
import { SelectStarElementContext } from "./MySqlParser";
import { SelectColumnElementContext } from "./MySqlParser";
import { SelectFunctionElementContext } from "./MySqlParser";
import { SelectExpressionElementContext } from "./MySqlParser";
import { NotExpressionContext } from "./MySqlParser";
import { LogicalExpressionContext } from "./MySqlParser";
import { IsExpressionContext } from "./MySqlParser";
import { PredicateExpressionContext } from "./MySqlParser";
import { PartitionComparisonContext } from "./MySqlParser";
import { PartitionListAtomContext } from "./MySqlParser";
import { PartitionListVectorContext } from "./MySqlParser";
import { PartitionSimpleContext } from "./MySqlParser";
import { HashAuthOptionContext } from "./MySqlParser";
import { RandomAuthOptionContext } from "./MySqlParser";
import { StringAuthOptionContext } from "./MySqlParser";
import { ModuleAuthOptionContext } from "./MySqlParser";
import { SimpleAuthOptionContext } from "./MySqlParser";
import { SimpleFlushOptionContext } from "./MySqlParser";
import { ChannelFlushOptionContext } from "./MySqlParser";
import { TableFlushOptionContext } from "./MySqlParser";
import { CloseCursorContext } from "./MySqlParser";
import { FetchCursorContext } from "./MySqlParser";
import { OpenCursorContext } from "./MySqlParser";
import { TableSourceBaseContext } from "./MySqlParser";
import { TableSourceNestedContext } from "./MySqlParser";
import { TableJsonContext } from "./MySqlParser";
import { PreciseScheduleContext } from "./MySqlParser";
import { IntervalScheduleContext } from "./MySqlParser";
import { RoutineCommentContext } from "./MySqlParser";
import { RoutineLanguageContext } from "./MySqlParser";
import { RoutineBehaviorContext } from "./MySqlParser";
import { RoutineDataContext } from "./MySqlParser";
import { RoutineSecurityContext } from "./MySqlParser";
import { CurrentSchemaPriviLevelContext } from "./MySqlParser";
import { GlobalPrivLevelContext } from "./MySqlParser";
import { DefiniteSchemaPrivLevelContext } from "./MySqlParser";
import { DefiniteFullTablePrivLevelContext } from "./MySqlParser";
import { DefiniteFullTablePrivLevel2Context } from "./MySqlParser";
import { DefiniteTablePrivLevelContext } from "./MySqlParser";
import { ShowMasterLogsContext } from "./MySqlParser";
import { ShowLogEventsContext } from "./MySqlParser";
import { ShowObjectFilterContext } from "./MySqlParser";
import { ShowColumnsContext } from "./MySqlParser";
import { ShowCreateDbContext } from "./MySqlParser";
import { ShowCreateFullIdObjectContext } from "./MySqlParser";
import { ShowCreateFunctionContext } from "./MySqlParser";
import { ShowCreateViewContext } from "./MySqlParser";
import { ShowCreateTableContext } from "./MySqlParser";
import { ShowCreateUserContext } from "./MySqlParser";
import { ShowEngineContext } from "./MySqlParser";
import { ShowGlobalInfoContext } from "./MySqlParser";
import { ShowErrorsContext } from "./MySqlParser";
import { ShowCountErrorsContext } from "./MySqlParser";
import { ShowSchemaFilterContext } from "./MySqlParser";
import { ShowPercedureCodeContext } from "./MySqlParser";
import { ShowFunctionCodeContext } from "./MySqlParser";
import { ShowGrantsContext } from "./MySqlParser";
import { ShowIndexesContext } from "./MySqlParser";
import { ShowOpenTablesContext } from "./MySqlParser";
import { ShowProfileContext } from "./MySqlParser";
import { ShowSlaveStatusContext } from "./MySqlParser";
import { ShowReplicasContext } from "./MySqlParser";
import { AlterSimpleDatabaseContext } from "./MySqlParser";
import { AlterUpgradeNameContext } from "./MySqlParser";
import { DetailRevokeContext } from "./MySqlParser";
import { ShortRevokeContext } from "./MySqlParser";
import { ProxyAndRoleRevokeContext } from "./MySqlParser";
import { ProgramContext } from "./MySqlParser";
import { SingleStatementContext } from "./MySqlParser";
import { SqlStatementContext } from "./MySqlParser";
import { EmptyStatement_Context } from "./MySqlParser";
import { DdlStatementContext } from "./MySqlParser";
import { DmlStatementContext } from "./MySqlParser";
import { TransactionStatementContext } from "./MySqlParser";
import { ReplicationStatementContext } from "./MySqlParser";
import { PreparedStatementContext } from "./MySqlParser";
import { CompoundStatementContext } from "./MySqlParser";
import { AdministrationStatementContext } from "./MySqlParser";
import { UtilityStatementContext } from "./MySqlParser";
import { CreateDatabaseContext } from "./MySqlParser";
import { CreateEventContext } from "./MySqlParser";
import { CreateIndexContext } from "./MySqlParser";
import { CreateLogfileGroupContext } from "./MySqlParser";
import { CreateProcedureContext } from "./MySqlParser";
import { CreateRoleContext } from "./MySqlParser";
import { CreateServerContext } from "./MySqlParser";
import { CreateTableContext } from "./MySqlParser";
import { CreateTablespaceInnodbContext } from "./MySqlParser";
import { CreateTablespaceNdbContext } from "./MySqlParser";
import { CreateTriggerContext } from "./MySqlParser";
import { WithClauseContext } from "./MySqlParser";
import { CommonTableExpressionsContext } from "./MySqlParser";
import { CreateViewContext } from "./MySqlParser";
import { CreateDatabaseOptionContext } from "./MySqlParser";
import { CharSetContext } from "./MySqlParser";
import { CurrentUserExpressionContext } from "./MySqlParser";
import { OwnerStatementContext } from "./MySqlParser";
import { ScheduleExpressionContext } from "./MySqlParser";
import { TimestampValueContext } from "./MySqlParser";
import { IntervalExprContext } from "./MySqlParser";
import { IntervalTypeContext } from "./MySqlParser";
import { EnableTypeContext } from "./MySqlParser";
import { IndexTypeContext } from "./MySqlParser";
import { IndexOptionContext } from "./MySqlParser";
import { ProcedureParameterContext } from "./MySqlParser";
import { RoutineOptionContext } from "./MySqlParser";
import { ServerOptionContext } from "./MySqlParser";
import { CreateDefinitionsContext } from "./MySqlParser";
import { CreateDefinitionContext } from "./MySqlParser";
import { CheckConstraintDefinitionContext } from "./MySqlParser";
import { ConstraintSymbolContext } from "./MySqlParser";
import { ColumnDefinitionContext } from "./MySqlParser";
import { ColumnConstraintContext } from "./MySqlParser";
import { ReferenceDefinitionContext } from "./MySqlParser";
import { ReferenceActionContext } from "./MySqlParser";
import { ReferenceControlTypeContext } from "./MySqlParser";
import { TableOptionContext } from "./MySqlParser";
import { TableTypeContext } from "./MySqlParser";
import { TablespaceStorageContext } from "./MySqlParser";
import { PartitionDefinitionsContext } from "./MySqlParser";
import { PartitionFunctionDefinitionContext } from "./MySqlParser";
import { SubpartitionFunctionDefinitionContext } from "./MySqlParser";
import { PartitionDefinitionContext } from "./MySqlParser";
import { PartitionDefinerAtomContext } from "./MySqlParser";
import { PartitionDefinerVectorContext } from "./MySqlParser";
import { SubpartitionDefinitionContext } from "./MySqlParser";
import { PartitionOptionContext } from "./MySqlParser";
import { AlterDatabaseContext } from "./MySqlParser";
import { AlterEventContext } from "./MySqlParser";
import { AlterFunctionContext } from "./MySqlParser";
import { AlterInstanceContext } from "./MySqlParser";
import { AlterLogfileGroupContext } from "./MySqlParser";
import { AlterProcedureContext } from "./MySqlParser";
import { AlterServerContext } from "./MySqlParser";
import { AlterTableContext } from "./MySqlParser";
import { AlterTablespaceContext } from "./MySqlParser";
import { AlterViewContext } from "./MySqlParser";
import { AlterOptionContext } from "./MySqlParser";
import { AlterPartitionSpecificationContext } from "./MySqlParser";
import { DropDatabaseContext } from "./MySqlParser";
import { DropEventContext } from "./MySqlParser";
import { DropIndexContext } from "./MySqlParser";
import { DropLogfileGroupContext } from "./MySqlParser";
import { DropProcedureContext } from "./MySqlParser";
import { DropFunctionContext } from "./MySqlParser";
import { DropServerContext } from "./MySqlParser";
import { DropSpatialContext } from "./MySqlParser";
import { DropTableContext } from "./MySqlParser";
import { DropTablespaceContext } from "./MySqlParser";
import { DropTriggerContext } from "./MySqlParser";
import { DropViewContext } from "./MySqlParser";
import { DropRoleContext } from "./MySqlParser";
import { SetRoleContext } from "./MySqlParser";
import { RenameTableContext } from "./MySqlParser";
import { RenameTableClauseContext } from "./MySqlParser";
import { TruncateTableContext } from "./MySqlParser";
import { CallStatementContext } from "./MySqlParser";
import { DeleteStatementContext } from "./MySqlParser";
import { DoStatementContext } from "./MySqlParser";
import { HandlerStatementContext } from "./MySqlParser";
import { InsertStatementContext } from "./MySqlParser";
import { AsRowAliasContext } from "./MySqlParser";
import { SelectOrTableOrValuesContext } from "./MySqlParser";
import { InterSectStatementContext } from "./MySqlParser";
import { InterSectQueryContext } from "./MySqlParser";
import { LoadDataStatementContext } from "./MySqlParser";
import { LoadXmlStatementContext } from "./MySqlParser";
import { ParenthesizedQueryContext } from "./MySqlParser";
import { ReplaceStatementContext } from "./MySqlParser";
import { SelectStatementContext } from "./MySqlParser";
import { SetOperationsContext } from "./MySqlParser";
import { QueryExpressionBodyContext } from "./MySqlParser";
import { QueryItemContext } from "./MySqlParser";
import { QueryPrimaryContext } from "./MySqlParser";
import { UpdateStatementContext } from "./MySqlParser";
import { ValuesStatementContext } from "./MySqlParser";
import { ParenthesizedQueryExpressionContext } from "./MySqlParser";
import { QueryBlockContext } from "./MySqlParser";
import { ReplaceStatementValuesOrSelectOrTableContext } from "./MySqlParser";
import { RowValuesListContext } from "./MySqlParser";
import { SetAssignmentListContext } from "./MySqlParser";
import { UpdatedElementContext } from "./MySqlParser";
import { AssignmentFieldContext } from "./MySqlParser";
import { LockClauseContext } from "./MySqlParser";
import { SingleDeleteStatementContext } from "./MySqlParser";
import { MultipleDeleteStatementContext } from "./MySqlParser";
import { HandlerOpenStatementContext } from "./MySqlParser";
import { HandlerReadIndexStatementContext } from "./MySqlParser";
import { HandlerReadStatementContext } from "./MySqlParser";
import { HandlerCloseStatementContext } from "./MySqlParser";
import { ImportTableStatementContext } from "./MySqlParser";
import { SingleUpdateStatementContext } from "./MySqlParser";
import { MultipleUpdateStatementContext } from "./MySqlParser";
import { OrderByClauseContext } from "./MySqlParser";
import { OrderByExpressionContext } from "./MySqlParser";
import { TableSourcesContext } from "./MySqlParser";
import { TableSourceContext } from "./MySqlParser";
import { TableSourceItemContext } from "./MySqlParser";
import { FullColumnNamesContext } from "./MySqlParser";
import { IndexHintContext } from "./MySqlParser";
import { IndexHintTypeContext } from "./MySqlParser";
import { JoinPartContext } from "./MySqlParser";
import { JoinSpecContext } from "./MySqlParser";
import { QueryExpressionContext } from "./MySqlParser";
import { QueryExpressionNointoContext } from "./MySqlParser";
import { QuerySpecificationContext } from "./MySqlParser";
import { QuerySpecificationNointoContext } from "./MySqlParser";
import { UnionParenthesisContext } from "./MySqlParser";
import { UnionStatementContext } from "./MySqlParser";
import { LateralStatementContext } from "./MySqlParser";
import { JsonTableContext } from "./MySqlParser";
import { JsonColumnListContext } from "./MySqlParser";
import { JsonColumnContext } from "./MySqlParser";
import { JsonOnEmptyContext } from "./MySqlParser";
import { JsonOnErrorContext } from "./MySqlParser";
import { SelectSpecContext } from "./MySqlParser";
import { SelectElementsContext } from "./MySqlParser";
import { SelectElementContext } from "./MySqlParser";
import { IntoClauseContext } from "./MySqlParser";
import { SelectFieldsIntoContext } from "./MySqlParser";
import { SelectLinesIntoContext } from "./MySqlParser";
import { FromClauseContext } from "./MySqlParser";
import { GroupByClauseContext } from "./MySqlParser";
import { HavingClauseContext } from "./MySqlParser";
import { WindowClauseContext } from "./MySqlParser";
import { GroupByItemContext } from "./MySqlParser";
import { LimitClauseContext } from "./MySqlParser";
import { LimitClauseAtomContext } from "./MySqlParser";
import { StartTransactionContext } from "./MySqlParser";
import { BeginWorkContext } from "./MySqlParser";
import { CommitWorkContext } from "./MySqlParser";
import { RollbackWorkContext } from "./MySqlParser";
import { SavepointStatementContext } from "./MySqlParser";
import { RollbackStatementContext } from "./MySqlParser";
import { ReleaseStatementContext } from "./MySqlParser";
import { LockTablesContext } from "./MySqlParser";
import { UnlockTablesContext } from "./MySqlParser";
import { SetAutocommitStatementContext } from "./MySqlParser";
import { SetTransactionStatementContext } from "./MySqlParser";
import { TransactionModeContext } from "./MySqlParser";
import { LockTableElementContext } from "./MySqlParser";
import { LockActionContext } from "./MySqlParser";
import { TransactionOptionContext } from "./MySqlParser";
import { TransactionLevelContext } from "./MySqlParser";
import { ChangeMasterContext } from "./MySqlParser";
import { ChangeReplicationFilterContext } from "./MySqlParser";
import { ChangeReplicationSourceContext } from "./MySqlParser";
import { PurgeBinaryLogsContext } from "./MySqlParser";
import { StartSlaveOrReplicaContext } from "./MySqlParser";
import { StopSlaveOrReplicaContext } from "./MySqlParser";
import { StartGroupReplicationContext } from "./MySqlParser";
import { StopGroupReplicationContext } from "./MySqlParser";
import { MasterOptionContext } from "./MySqlParser";
import { StringMasterOptionContext } from "./MySqlParser";
import { DecimalMasterOptionContext } from "./MySqlParser";
import { BoolMasterOptionContext } from "./MySqlParser";
import { V8NewMasterOptionContext } from "./MySqlParser";
import { ReplicationSourceOptionContext } from "./MySqlParser";
import { StringSourceOptionContext } from "./MySqlParser";
import { DecimalSourceOptionContext } from "./MySqlParser";
import { BoolSourceOptionContext } from "./MySqlParser";
import { OtherSourceOptionContext } from "./MySqlParser";
import { ChannelOptionContext } from "./MySqlParser";
import { ReplicationFilterContext } from "./MySqlParser";
import { TablePairContext } from "./MySqlParser";
import { ThreadTypeContext } from "./MySqlParser";
import { UntilOptionContext } from "./MySqlParser";
import { ConnectionOptionsContext } from "./MySqlParser";
import { GtuidSetContext } from "./MySqlParser";
import { XaStartTransactionContext } from "./MySqlParser";
import { XaEndTransactionContext } from "./MySqlParser";
import { XaPrepareStatementContext } from "./MySqlParser";
import { XaCommitWorkContext } from "./MySqlParser";
import { XaRollbackWorkContext } from "./MySqlParser";
import { XaRecoverWorkContext } from "./MySqlParser";
import { PrepareStatementContext } from "./MySqlParser";
import { ExecuteStatementContext } from "./MySqlParser";
import { DeallocatePrepareContext } from "./MySqlParser";
import { RoutineBodyContext } from "./MySqlParser";
import { BlockStatementContext } from "./MySqlParser";
import { CaseStatementContext } from "./MySqlParser";
import { IfStatementContext } from "./MySqlParser";
import { IterateStatementContext } from "./MySqlParser";
import { LeaveStatementContext } from "./MySqlParser";
import { LoopStatementContext } from "./MySqlParser";
import { RepeatStatementContext } from "./MySqlParser";
import { ReturnStatementContext } from "./MySqlParser";
import { WhileStatementContext } from "./MySqlParser";
import { CursorStatementContext } from "./MySqlParser";
import { DeclareVariableContext } from "./MySqlParser";
import { DeclareConditionContext } from "./MySqlParser";
import { DeclareCursorContext } from "./MySqlParser";
import { DeclareHandlerContext } from "./MySqlParser";
import { HandlerConditionValueContext } from "./MySqlParser";
import { ProcedureSqlStatementContext } from "./MySqlParser";
import { CaseAlternativeContext } from "./MySqlParser";
import { ElifAlternativeContext } from "./MySqlParser";
import { AlterUserContext } from "./MySqlParser";
import { CreateUserContext } from "./MySqlParser";
import { DropUserContext } from "./MySqlParser";
import { GrantStatementContext } from "./MySqlParser";
import { RoleOptionContext } from "./MySqlParser";
import { GrantProxyContext } from "./MySqlParser";
import { AlterResourceGroupContext } from "./MySqlParser";
import { CreateResourceGroupContext } from "./MySqlParser";
import { DropResourceGroupContext } from "./MySqlParser";
import { SetResourceGroupContext } from "./MySqlParser";
import { ResourceGroupVcpuSpecContext } from "./MySqlParser";
import { RenameUserContext } from "./MySqlParser";
import { RevokeStatementContext } from "./MySqlParser";
import { IgnoreUnknownUserContext } from "./MySqlParser";
import { PrivilegeObjectTypeContext } from "./MySqlParser";
import { SetPasswordStatementContext } from "./MySqlParser";
import { UserSpecificationContext } from "./MySqlParser";
import { AlterUserAuthOptionContext } from "./MySqlParser";
import { CreateUserAuthOptionContext } from "./MySqlParser";
import { CreateUserInitialAuthOptionContext } from "./MySqlParser";
import { UserAuthOptionContext } from "./MySqlParser";
import { AuthOptionClauseContext } from "./MySqlParser";
import { AuthenticationRuleContext } from "./MySqlParser";
import { TlsOptionContext } from "./MySqlParser";
import { UserResourceOptionContext } from "./MySqlParser";
import { UserPasswordOptionContext } from "./MySqlParser";
import { UserLockOptionContext } from "./MySqlParser";
import { FactorAuthOptionContext } from "./MySqlParser";
import { RegistrationOptionContext } from "./MySqlParser";
import { FactorContext } from "./MySqlParser";
import { PrivelegeClauseContext } from "./MySqlParser";
import { PrivilegeContext } from "./MySqlParser";
import { PrivilegeLevelContext } from "./MySqlParser";
import { RenameUserClauseContext } from "./MySqlParser";
import { AnalyzeTableContext } from "./MySqlParser";
import { CheckTableContext } from "./MySqlParser";
import { ChecksumTableContext } from "./MySqlParser";
import { OptimizeTableContext } from "./MySqlParser";
import { RepairTableContext } from "./MySqlParser";
import { TableActionOptionContext } from "./MySqlParser";
import { CheckTableOptionContext } from "./MySqlParser";
import { CreateFunctionContext } from "./MySqlParser";
import { InstallComponentContext } from "./MySqlParser";
import { VariableExprContext } from "./MySqlParser";
import { UninstallComponentContext } from "./MySqlParser";
import { InstallPluginContext } from "./MySqlParser";
import { UninstallPluginContext } from "./MySqlParser";
import { CloneStatementContext } from "./MySqlParser";
import { SetStatementContext } from "./MySqlParser";
import { ShowStatementContext } from "./MySqlParser";
import { VariableClauseContext } from "./MySqlParser";
import { ShowCommonEntityContext } from "./MySqlParser";
import { ShowFilterContext } from "./MySqlParser";
import { ShowGlobalInfoClauseContext } from "./MySqlParser";
import { ShowSchemaEntityContext } from "./MySqlParser";
import { ShowProfileTypeContext } from "./MySqlParser";
import { BinlogStatementContext } from "./MySqlParser";
import { CacheIndexStatementContext } from "./MySqlParser";
import { FlushStatementContext } from "./MySqlParser";
import { KillStatementContext } from "./MySqlParser";
import { LoadIndexIntoCacheContext } from "./MySqlParser";
import { ResetStatementContext } from "./MySqlParser";
import { ResetOptionContext } from "./MySqlParser";
import { ResetPersistContext } from "./MySqlParser";
import { ResetAllChannelContext } from "./MySqlParser";
import { ReStartStatementContext } from "./MySqlParser";
import { ShutdownStatementContext } from "./MySqlParser";
import { TableIndexContext } from "./MySqlParser";
import { FlushOptionContext } from "./MySqlParser";
import { FlushTableOptionContext } from "./MySqlParser";
import { LoadedTableIndexesContext } from "./MySqlParser";
import { SimpleDescribeStatementContext } from "./MySqlParser";
import { FullDescribeStatementContext } from "./MySqlParser";
import { AnalyzeDescribeStatementContext } from "./MySqlParser";
import { HelpStatementContext } from "./MySqlParser";
import { UseStatementContext } from "./MySqlParser";
import { SignalStatementContext } from "./MySqlParser";
import { ResignalStatementContext } from "./MySqlParser";
import { SignalConditionInformationContext } from "./MySqlParser";
import { WithStatementContext } from "./MySqlParser";
import { TableStatementContext } from "./MySqlParser";
import { DiagnosticsStatementContext } from "./MySqlParser";
import { DiagnosticsConditionInformationNameContext } from "./MySqlParser";
import { DescribeObjectClauseContext } from "./MySqlParser";
import { DatabaseNameCreateContext } from "./MySqlParser";
import { DatabaseNameContext } from "./MySqlParser";
import { FunctionNameCreateContext } from "./MySqlParser";
import { FunctionNameContext } from "./MySqlParser";
import { ViewNameCreateContext } from "./MySqlParser";
import { ViewNameContext } from "./MySqlParser";
import { IndexNameCreateContext } from "./MySqlParser";
import { IndexNamesContext } from "./MySqlParser";
import { IndexNameContext } from "./MySqlParser";
import { GroupNameCreateContext } from "./MySqlParser";
import { GroupNameContext } from "./MySqlParser";
import { TableNameCreateContext } from "./MySqlParser";
import { TableNamesContext } from "./MySqlParser";
import { TableNameContext } from "./MySqlParser";
import { UserOrRoleNamesContext } from "./MySqlParser";
import { UserOrRoleNameContext } from "./MySqlParser";
import { ColumnNameCreateContext } from "./MySqlParser";
import { ColumnNamesContext } from "./MySqlParser";
import { ColumnNameContext } from "./MySqlParser";
import { TablespaceNameCreateContext } from "./MySqlParser";
import { TablespaceNameContext } from "./MySqlParser";
import { PartitionNameCreateContext } from "./MySqlParser";
import { PartitionNamesContext } from "./MySqlParser";
import { PartitionNameContext } from "./MySqlParser";
import { IndexColumnNameContext } from "./MySqlParser";
import { UserHostPortContext } from "./MySqlParser";
import { UserAtHostContext } from "./MySqlParser";
import { SimpleUserNameContext } from "./MySqlParser";
import { HostNameContext } from "./MySqlParser";
import { UserNameContext } from "./MySqlParser";
import { MysqlVariableContext } from "./MySqlParser";
import { CharsetNameContext } from "./MySqlParser";
import { CollationNameContext } from "./MySqlParser";
import { EngineNameContext } from "./MySqlParser";
import { EngineNameBaseContext } from "./MySqlParser";
import { UuidSetContext } from "./MySqlParser";
import { XidContext } from "./MySqlParser";
import { XuidStringIdContext } from "./MySqlParser";
import { FullIdContext } from "./MySqlParser";
import { UidListContext } from "./MySqlParser";
import { UidContext } from "./MySqlParser";
import { SimpleIdContext } from "./MySqlParser";
import { DottedIdContext } from "./MySqlParser";
import { DecimalLiteralContext } from "./MySqlParser";
import { FileSizeLiteralContext } from "./MySqlParser";
import { StringLiteralContext } from "./MySqlParser";
import { BooleanLiteralContext } from "./MySqlParser";
import { HexadecimalLiteralContext } from "./MySqlParser";
import { NullNotnullContext } from "./MySqlParser";
import { ConstantContext } from "./MySqlParser";
import { DataTypeContext } from "./MySqlParser";
import { CollectionOptionsContext } from "./MySqlParser";
import { ConvertedDataTypeContext } from "./MySqlParser";
import { LengthOneDimensionContext } from "./MySqlParser";
import { LengthTwoDimensionContext } from "./MySqlParser";
import { LengthTwoOptionalDimensionContext } from "./MySqlParser";
import { IndexColumnNamesContext } from "./MySqlParser";
import { ExpressionsContext } from "./MySqlParser";
import { ValuesOrValueListContext } from "./MySqlParser";
import { ExpressionsWithDefaultsContext } from "./MySqlParser";
import { ExpressionOrDefaultContext } from "./MySqlParser";
import { ConstantsContext } from "./MySqlParser";
import { SimpleStringsContext } from "./MySqlParser";
import { UserVariablesContext } from "./MySqlParser";
import { DefaultValueContext } from "./MySqlParser";
import { CurrentTimestampContext } from "./MySqlParser";
import { IfExistsContext } from "./MySqlParser";
import { IfNotExistsContext } from "./MySqlParser";
import { OrReplaceContext } from "./MySqlParser";
import { FunctionCallContext } from "./MySqlParser";
import { SpecificFunctionContext } from "./MySqlParser";
import { CaseFuncAlternativeContext } from "./MySqlParser";
import { LevelsInWeightStringContext } from "./MySqlParser";
import { LevelInWeightListElementContext } from "./MySqlParser";
import { AggregateWindowedFunctionContext } from "./MySqlParser";
import { NonAggregateWindowedFunctionContext } from "./MySqlParser";
import { OverClauseContext } from "./MySqlParser";
import { WindowSpecContext } from "./MySqlParser";
import { WindowNameContext } from "./MySqlParser";
import { FrameClauseContext } from "./MySqlParser";
import { FrameUnitsContext } from "./MySqlParser";
import { FrameExtentContext } from "./MySqlParser";
import { FrameBetweenContext } from "./MySqlParser";
import { FrameRangeContext } from "./MySqlParser";
import { PartitionClauseContext } from "./MySqlParser";
import { ScalarFunctionNameContext } from "./MySqlParser";
import { PasswordFunctionClauseContext } from "./MySqlParser";
import { FunctionArgsContext } from "./MySqlParser";
import { FunctionArgContext } from "./MySqlParser";
import { ExpressionContext } from "./MySqlParser";
import { PredicateContext } from "./MySqlParser";
import { ExpressionAtomContext } from "./MySqlParser";
import { UnaryOperatorContext } from "./MySqlParser";
import { ComparisonOperatorContext } from "./MySqlParser";
import { ComparisonBaseContext } from "./MySqlParser";
import { LogicalOperatorContext } from "./MySqlParser";
import { BitOperatorContext } from "./MySqlParser";
import { MathOperatorContext } from "./MySqlParser";
import { JsonOperatorContext } from "./MySqlParser";
import { CharsetNameBaseContext } from "./MySqlParser";
import { TransactionLevelBaseContext } from "./MySqlParser";
import { PrivilegesBaseContext } from "./MySqlParser";
import { IntervalTypeBaseContext } from "./MySqlParser";
import { DataTypeBaseContext } from "./MySqlParser";
import { KeywordsCanBeIdContext } from "./MySqlParser";
import { FunctionNameBaseContext } from "./MySqlParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MySqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface MySqlParserVisitor<Result> extends ParseTreeVisitor<Result> {
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
	 * Visit a parse tree produced by the `simpleSelect`
	 * labeled alternative in `MySqlParser.selectStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleSelect?: (ctx: SimpleSelectContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenthesisSelect`
	 * labeled alternative in `MySqlParser.selectStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesisSelect?: (ctx: ParenthesisSelectContext) => Result;

	/**
	 * Visit a parse tree produced by the `unionSelect`
	 * labeled alternative in `MySqlParser.selectStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionSelect?: (ctx: UnionSelectContext) => Result;

	/**
	 * Visit a parse tree produced by the `unionParenthesisSelect`
	 * labeled alternative in `MySqlParser.selectStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionParenthesisSelect?: (ctx: UnionParenthesisSelectContext) => Result;

	/**
	 * Visit a parse tree produced by the `withLateralStatement`
	 * labeled alternative in `MySqlParser.selectStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithLateralStatement?: (ctx: WithLateralStatementContext) => Result;

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
	 * Visit a parse tree produced by the `constantExpressionAtom`
	 * labeled alternative in `MySqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantExpressionAtom?: (ctx: ConstantExpressionAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `columnNameExpressionAtom`
	 * labeled alternative in `MySqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameExpressionAtom?: (ctx: ColumnNameExpressionAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionCallExpressionAtom`
	 * labeled alternative in `MySqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallExpressionAtom?: (ctx: FunctionCallExpressionAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `collateExpressionAtom`
	 * labeled alternative in `MySqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollateExpressionAtom?: (ctx: CollateExpressionAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `mysqlVariableExpressionAtom`
	 * labeled alternative in `MySqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMysqlVariableExpressionAtom?: (ctx: MysqlVariableExpressionAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `unaryExpressionAtom`
	 * labeled alternative in `MySqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpressionAtom?: (ctx: UnaryExpressionAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `binaryExpressionAtom`
	 * labeled alternative in `MySqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryExpressionAtom?: (ctx: BinaryExpressionAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `variableAssignExpressionAtom`
	 * labeled alternative in `MySqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableAssignExpressionAtom?: (ctx: VariableAssignExpressionAtomContext) => Result;

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
	 * Visit a parse tree produced by the `existsExpressionAtom`
	 * labeled alternative in `MySqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistsExpressionAtom?: (ctx: ExistsExpressionAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `subqueryExpressionAtom`
	 * labeled alternative in `MySqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubqueryExpressionAtom?: (ctx: SubqueryExpressionAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `intervalExpressionAtom`
	 * labeled alternative in `MySqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalExpressionAtom?: (ctx: IntervalExpressionAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `bitExpressionAtom`
	 * labeled alternative in `MySqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitExpressionAtom?: (ctx: BitExpressionAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `mathExpressionAtom`
	 * labeled alternative in `MySqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMathExpressionAtom?: (ctx: MathExpressionAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `jsonExpressionAtom`
	 * labeled alternative in `MySqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonExpressionAtom?: (ctx: JsonExpressionAtomContext) => Result;

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
	 * Visit a parse tree produced by the `queryCreateTable`
	 * labeled alternative in `MySqlParser.createTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryCreateTable?: (ctx: QueryCreateTableContext) => Result;

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
	 * Visit a parse tree produced by the `inPredicate`
	 * labeled alternative in `MySqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInPredicate?: (ctx: InPredicateContext) => Result;

	/**
	 * Visit a parse tree produced by the `isNullPredicate`
	 * labeled alternative in `MySqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsNullPredicate?: (ctx: IsNullPredicateContext) => Result;

	/**
	 * Visit a parse tree produced by the `binaryComparisonPredicate`
	 * labeled alternative in `MySqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryComparisonPredicate?: (ctx: BinaryComparisonPredicateContext) => Result;

	/**
	 * Visit a parse tree produced by the `subqueryComparisonPredicate`
	 * labeled alternative in `MySqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubqueryComparisonPredicate?: (ctx: SubqueryComparisonPredicateContext) => Result;

	/**
	 * Visit a parse tree produced by the `betweenPredicate`
	 * labeled alternative in `MySqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBetweenPredicate?: (ctx: BetweenPredicateContext) => Result;

	/**
	 * Visit a parse tree produced by the `soundsLikePredicate`
	 * labeled alternative in `MySqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSoundsLikePredicate?: (ctx: SoundsLikePredicateContext) => Result;

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
	 * Visit a parse tree produced by the `jsonMemberOfPredicate`
	 * labeled alternative in `MySqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonMemberOfPredicate?: (ctx: JsonMemberOfPredicateContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionAtomPredicate`
	 * labeled alternative in `MySqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionAtomPredicate?: (ctx: ExpressionAtomPredicateContext) => Result;

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
	 * Visit a parse tree produced by the `selectFunctionElement`
	 * labeled alternative in `MySqlParser.selectElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectFunctionElement?: (ctx: SelectFunctionElementContext) => Result;

	/**
	 * Visit a parse tree produced by the `selectExpressionElement`
	 * labeled alternative in `MySqlParser.selectElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectExpressionElement?: (ctx: SelectExpressionElementContext) => Result;

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
	 * Visit a parse tree produced by the `isExpression`
	 * labeled alternative in `MySqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsExpression?: (ctx: IsExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `predicateExpression`
	 * labeled alternative in `MySqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicateExpression?: (ctx: PredicateExpressionContext) => Result;

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
	 * Visit a parse tree produced by `MySqlParser.createTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTable?: (ctx: CreateTableContext) => Result;

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
	 * Visit a parse tree produced by `MySqlParser.scheduleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScheduleExpression?: (ctx: ScheduleExpressionContext) => Result;

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
	 * Visit a parse tree produced by `MySqlParser.routineOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoutineOption?: (ctx: RoutineOptionContext) => Result;

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
	 * Visit a parse tree produced by `MySqlParser.columnConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnConstraint?: (ctx: ColumnConstraintContext) => Result;

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
	 * Visit a parse tree produced by `MySqlParser.tableOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOption?: (ctx: TableOptionContext) => Result;

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
	 * Visit a parse tree produced by `MySqlParser.partitionFunctionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionFunctionDefinition?: (ctx: PartitionFunctionDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `MySqlParser.subpartitionFunctionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubpartitionFunctionDefinition?: (ctx: SubpartitionFunctionDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `MySqlParser.partitionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionDefinition?: (ctx: PartitionDefinitionContext) => Result;

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
	 * Visit a parse tree produced by `MySqlParser.partitionOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionOption?: (ctx: PartitionOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `MySqlParser.alterDatabase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDatabase?: (ctx: AlterDatabaseContext) => Result;

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
	 * Visit a parse tree produced by `MySqlParser.alterOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterOption?: (ctx: AlterOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `MySqlParser.alterPartitionSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterPartitionSpecification?: (ctx: AlterPartitionSpecificationContext) => Result;

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
	 * Visit a parse tree produced by `MySqlParser.selectStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectStatement?: (ctx: SelectStatementContext) => Result;

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
	 * Visit a parse tree produced by `MySqlParser.tableSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableSource?: (ctx: TableSourceContext) => Result;

	/**
	 * Visit a parse tree produced by `MySqlParser.tableSourceItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableSourceItem?: (ctx: TableSourceItemContext) => Result;

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
	 * Visit a parse tree produced by `MySqlParser.joinPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinPart?: (ctx: JoinPartContext) => Result;

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
	 * Visit a parse tree produced by `MySqlParser.queryExpressionNointo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryExpressionNointo?: (ctx: QueryExpressionNointoContext) => Result;

	/**
	 * Visit a parse tree produced by `MySqlParser.querySpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuerySpecification?: (ctx: QuerySpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `MySqlParser.querySpecificationNointo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuerySpecificationNointo?: (ctx: QuerySpecificationNointoContext) => Result;

	/**
	 * Visit a parse tree produced by `MySqlParser.unionParenthesis`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionParenthesis?: (ctx: UnionParenthesisContext) => Result;

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
	 * Visit a parse tree produced by `MySqlParser.selectElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectElement?: (ctx: SelectElementContext) => Result;

	/**
	 * Visit a parse tree produced by `MySqlParser.intoClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntoClause?: (ctx: IntoClauseContext) => Result;

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
	 * Visit a parse tree produced by `MySqlParser.masterOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMasterOption?: (ctx: MasterOptionContext) => Result;

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
	 * Visit a parse tree produced by `MySqlParser.replicationSourceOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplicationSourceOption?: (ctx: ReplicationSourceOptionContext) => Result;

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
	 * Visit a parse tree produced by `MySqlParser.replicationFilter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplicationFilter?: (ctx: ReplicationFilterContext) => Result;

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
	 * Visit a parse tree produced by `MySqlParser.untilOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUntilOption?: (ctx: UntilOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `MySqlParser.connectionOptions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnectionOptions?: (ctx: ConnectionOptionsContext) => Result;

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
	 * Visit a parse tree produced by `MySqlParser.cursorStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCursorStatement?: (ctx: CursorStatementContext) => Result;

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
	 * Visit a parse tree produced by `MySqlParser.handlerConditionValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHandlerConditionValue?: (ctx: HandlerConditionValueContext) => Result;

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
	 * Visit a parse tree produced by `MySqlParser.revokeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRevokeStatement?: (ctx: RevokeStatementContext) => Result;

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
	 * Visit a parse tree produced by `MySqlParser.setPasswordStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetPasswordStatement?: (ctx: SetPasswordStatementContext) => Result;

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
	 * Visit a parse tree produced by `MySqlParser.userAuthOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUserAuthOption?: (ctx: UserAuthOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `MySqlParser.authOptionClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAuthOptionClause?: (ctx: AuthOptionClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `MySqlParser.authenticationRule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAuthenticationRule?: (ctx: AuthenticationRuleContext) => Result;

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
	 * Visit a parse tree produced by `MySqlParser.privilegeLevel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivilegeLevel?: (ctx: PrivilegeLevelContext) => Result;

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
	 * Visit a parse tree produced by `MySqlParser.setStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetStatement?: (ctx: SetStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `MySqlParser.showStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowStatement?: (ctx: ShowStatementContext) => Result;

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
	 * Visit a parse tree produced by `MySqlParser.flushOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlushOption?: (ctx: FlushOptionContext) => Result;

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
	 * Visit a parse tree produced by `MySqlParser.describeObjectClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescribeObjectClause?: (ctx: DescribeObjectClauseContext) => Result;

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
	 * Visit a parse tree produced by `MySqlParser.dataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataType?: (ctx: DataTypeContext) => Result;

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
	 * Visit a parse tree produced by `MySqlParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `MySqlParser.specificFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecificFunction?: (ctx: SpecificFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `MySqlParser.caseFuncAlternative`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseFuncAlternative?: (ctx: CaseFuncAlternativeContext) => Result;

	/**
	 * Visit a parse tree produced by `MySqlParser.levelsInWeightString`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLevelsInWeightString?: (ctx: LevelsInWeightStringContext) => Result;

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
	 * Visit a parse tree produced by `MySqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `MySqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicate?: (ctx: PredicateContext) => Result;

	/**
	 * Visit a parse tree produced by `MySqlParser.expressionAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionAtom?: (ctx: ExpressionAtomContext) => Result;

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

