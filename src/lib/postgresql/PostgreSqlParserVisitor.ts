// Generated from dt-sql-parser/src/grammar/postgresql/PostgreSqlParser.g4 by ANTLR 4.13.1

// @ts-nocheck

import { AbstractParseTreeVisitor } from "antlr4ng";


import { SQLParserBase } from '../SQLParserBase';


import { ProgramContext } from "./PostgreSqlParser.js";
import { SingleStmtContext } from "./PostgreSqlParser.js";
import { StmtContext } from "./PostgreSqlParser.js";
import { CallStmtContext } from "./PostgreSqlParser.js";
import { CreateRoleStmtContext } from "./PostgreSqlParser.js";
import { AlterOperatorRoleElemContext } from "./PostgreSqlParser.js";
import { CreateOperatorRoleElemContext } from "./PostgreSqlParser.js";
import { CreateUserStmtContext } from "./PostgreSqlParser.js";
import { AlterRoleStmtContext } from "./PostgreSqlParser.js";
import { AlterRoleSetStmtContext } from "./PostgreSqlParser.js";
import { AlterRoutineStmtContext } from "./PostgreSqlParser.js";
import { AlterRoutineClauseContext } from "./PostgreSqlParser.js";
import { RoutineActionContext } from "./PostgreSqlParser.js";
import { CreateGroupStmtContext } from "./PostgreSqlParser.js";
import { AlterGroupStmtContext } from "./PostgreSqlParser.js";
import { CreateSchemaStmtContext } from "./PostgreSqlParser.js";
import { SchemaNameCreateContext } from "./PostgreSqlParser.js";
import { SchemaStmtContext } from "./PostgreSqlParser.js";
import { VariableSetStmtContext } from "./PostgreSqlParser.js";
import { SetRestContext } from "./PostgreSqlParser.js";
import { GenericSetContext } from "./PostgreSqlParser.js";
import { SetRestMoreContext } from "./PostgreSqlParser.js";
import { VarNameContext } from "./PostgreSqlParser.js";
import { VarListContext } from "./PostgreSqlParser.js";
import { VarValueContext } from "./PostgreSqlParser.js";
import { IsoLevelContext } from "./PostgreSqlParser.js";
import { OptBooleanOrStringColumnContext } from "./PostgreSqlParser.js";
import { BooleanOrStringContext } from "./PostgreSqlParser.js";
import { ZoneValueContext } from "./PostgreSqlParser.js";
import { NonReservedWordOrStringConstContext } from "./PostgreSqlParser.js";
import { VariableResetStmtContext } from "./PostgreSqlParser.js";
import { ResetRestContext } from "./PostgreSqlParser.js";
import { SetOrResetClauseContext } from "./PostgreSqlParser.js";
import { FunctionSetOrResetClauseContext } from "./PostgreSqlParser.js";
import { VariableShowStmtContext } from "./PostgreSqlParser.js";
import { ConstraintsSetStmtContext } from "./PostgreSqlParser.js";
import { CheckPointStmtContext } from "./PostgreSqlParser.js";
import { DiscardStmtContext } from "./PostgreSqlParser.js";
import { AlterTableStmtContext } from "./PostgreSqlParser.js";
import { AlterTableCmdsContext } from "./PostgreSqlParser.js";
import { PartitionCmdContext } from "./PostgreSqlParser.js";
import { IndexPartitionCmdContext } from "./PostgreSqlParser.js";
import { AlterTableCmdContext } from "./PostgreSqlParser.js";
import { AlterColumnDefaultContext } from "./PostgreSqlParser.js";
import { OptDropBehaviorContext } from "./PostgreSqlParser.js";
import { CollateClauseContext } from "./PostgreSqlParser.js";
import { RelOptionsContext } from "./PostgreSqlParser.js";
import { OptRelOptionsContext } from "./PostgreSqlParser.js";
import { RelOptionElemContext } from "./PostgreSqlParser.js";
import { PartitionBoundSpecContext } from "./PostgreSqlParser.js";
import { AlterCompositeTypeStmtContext } from "./PostgreSqlParser.js";
import { AlterTypeCmdContext } from "./PostgreSqlParser.js";
import { ClosePortalStmtContext } from "./PostgreSqlParser.js";
import { CopyStmtContext } from "./PostgreSqlParser.js";
import { CopyOptionsNoparensContext } from "./PostgreSqlParser.js";
import { CopyOptionsContext } from "./PostgreSqlParser.js";
import { CopyGenericOptElemContext } from "./PostgreSqlParser.js";
import { ColumnCreateTableContext } from "./PostgreSqlParser.js";
import { OptTempContext } from "./PostgreSqlParser.js";
import { OptTypedTableElEmentListContext } from "./PostgreSqlParser.js";
import { TableElementListContext } from "./PostgreSqlParser.js";
import { TableElementContext } from "./PostgreSqlParser.js";
import { TypedTableElementContext } from "./PostgreSqlParser.js";
import { Column_defContext } from "./PostgreSqlParser.js";
import { ColConstraintContext } from "./PostgreSqlParser.js";
import { ColConstraintElemContext } from "./PostgreSqlParser.js";
import { GeneratedWhenContext } from "./PostgreSqlParser.js";
import { TableLikeOptionContext } from "./PostgreSqlParser.js";
import { ConstraintElemContext } from "./PostgreSqlParser.js";
import { OptColumnListContext } from "./PostgreSqlParser.js";
import { ColumnListCreateContext } from "./PostgreSqlParser.js";
import { ColumnListContext } from "./PostgreSqlParser.js";
import { ColumnListIncludeContext } from "./PostgreSqlParser.js";
import { KeyMatchContext } from "./PostgreSqlParser.js";
import { ExclusionConstraintElemContext } from "./PostgreSqlParser.js";
import { KeyActionsContext } from "./PostgreSqlParser.js";
import { KeyUpdateContext } from "./PostgreSqlParser.js";
import { KeyDeleteContext } from "./PostgreSqlParser.js";
import { KeyActionContext } from "./PostgreSqlParser.js";
import { OptInheritContext } from "./PostgreSqlParser.js";
import { PartitionSpecContext } from "./PostgreSqlParser.js";
import { PartElemContext } from "./PostgreSqlParser.js";
import { TableAccessMethodClauseContext } from "./PostgreSqlParser.js";
import { OptWithContext } from "./PostgreSqlParser.js";
import { OnCommitOptionContext } from "./PostgreSqlParser.js";
import { OptTableSpaceContext } from "./PostgreSqlParser.js";
import { OptConstableSpaceContext } from "./PostgreSqlParser.js";
import { ExistingIndexContext } from "./PostgreSqlParser.js";
import { CreateStatsStmtContext } from "./PostgreSqlParser.js";
import { AlterStatsStmtContext } from "./PostgreSqlParser.js";
import { QueryCreateTableContext } from "./PostgreSqlParser.js";
import { CreateAsTargetContext } from "./PostgreSqlParser.js";
import { OptWithDataContext } from "./PostgreSqlParser.js";
import { CreateMaterializedViewContext } from "./PostgreSqlParser.js";
import { RefreshMaterializedViewStmtContext } from "./PostgreSqlParser.js";
import { CreateSeqStmtContext } from "./PostgreSqlParser.js";
import { AlterSeqStmtContext } from "./PostgreSqlParser.js";
import { SeqOptElemContext } from "./PostgreSqlParser.js";
import { NumericOnlyContext } from "./PostgreSqlParser.js";
import { CreateProceduralLangStmtContext } from "./PostgreSqlParser.js";
import { CreateTableSpaceStmtContext } from "./PostgreSqlParser.js";
import { CreateExtensionStmtContext } from "./PostgreSqlParser.js";
import { AlterExtensionStmtContext } from "./PostgreSqlParser.js";
import { AlterExtensionContentsStmtContext } from "./PostgreSqlParser.js";
import { CreateFdwStmtContext } from "./PostgreSqlParser.js";
import { FdwOptionContext } from "./PostgreSqlParser.js";
import { AlterFdwStmtContext } from "./PostgreSqlParser.js";
import { CreateGenericOptionsContext } from "./PostgreSqlParser.js";
import { AlterGenericOptionsContext } from "./PostgreSqlParser.js";
import { AlterGenericOptionElemContext } from "./PostgreSqlParser.js";
import { GenericOptionElemContext } from "./PostgreSqlParser.js";
import { CreateForeignServerStmtContext } from "./PostgreSqlParser.js";
import { ForeignServerVersionContext } from "./PostgreSqlParser.js";
import { AlterForeignServerStmtContext } from "./PostgreSqlParser.js";
import { CreateForeignTableContext } from "./PostgreSqlParser.js";
import { CreatePartitionForeignTableContext } from "./PostgreSqlParser.js";
import { ImportForeignSchemaStmtContext } from "./PostgreSqlParser.js";
import { CreateUserMappingStmtContext } from "./PostgreSqlParser.js";
import { AlterUserMappingStmtContext } from "./PostgreSqlParser.js";
import { CreatePolicyStmtContext } from "./PostgreSqlParser.js";
import { AlterPolicyStmtContext } from "./PostgreSqlParser.js";
import { AlterProcedureStmtContext } from "./PostgreSqlParser.js";
import { ProcedureActionContext } from "./PostgreSqlParser.js";
import { RowSecurityOptionalExprContext } from "./PostgreSqlParser.js";
import { RowSecurityOptionalWithCheckContext } from "./PostgreSqlParser.js";
import { CreateAccessMethodStmtContext } from "./PostgreSqlParser.js";
import { CreateTrigStmtContext } from "./PostgreSqlParser.js";
import { TriggerActionTimeContext } from "./PostgreSqlParser.js";
import { TriggerEventsContext } from "./PostgreSqlParser.js";
import { TriggerOneEventContext } from "./PostgreSqlParser.js";
import { TriggerWhenContext } from "./PostgreSqlParser.js";
import { FunctionOrProcedureContext } from "./PostgreSqlParser.js";
import { TriggerFuncArgsContext } from "./PostgreSqlParser.js";
import { TriggerFuncArgContext } from "./PostgreSqlParser.js";
import { ConstraintAttributeElemContext } from "./PostgreSqlParser.js";
import { CreateEventTrigStmtContext } from "./PostgreSqlParser.js";
import { EventTriggerWhenItemContext } from "./PostgreSqlParser.js";
import { AlterEventTrigStmtContext } from "./PostgreSqlParser.js";
import { CreateAssertionStmtContext } from "./PostgreSqlParser.js";
import { DefineStmtContext } from "./PostgreSqlParser.js";
import { DefinitionContext } from "./PostgreSqlParser.js";
import { DefElemContext } from "./PostgreSqlParser.js";
import { DefArgContext } from "./PostgreSqlParser.js";
import { OldAggregateElemContext } from "./PostgreSqlParser.js";
import { AlterEnumStmtContext } from "./PostgreSqlParser.js";
import { IfNotExistsContext } from "./PostgreSqlParser.js";
import { CreateOperatorClassStmtContext } from "./PostgreSqlParser.js";
import { OpClassItemContext } from "./PostgreSqlParser.js";
import { CreateOperatorFamilyStmtContext } from "./PostgreSqlParser.js";
import { AlterOperatorFamilyStmtContext } from "./PostgreSqlParser.js";
import { OpClassDropContext } from "./PostgreSqlParser.js";
import { ReassignOwnedStmtContext } from "./PostgreSqlParser.js";
import { DropStmtContext } from "./PostgreSqlParser.js";
import { ObjectTypeAnyNameContext } from "./PostgreSqlParser.js";
import { ObjectTypeNameContext } from "./PostgreSqlParser.js";
import { AnyNameListContext } from "./PostgreSqlParser.js";
import { AnyNameContext } from "./PostgreSqlParser.js";
import { AttrsContext } from "./PostgreSqlParser.js";
import { TruncateStmtContext } from "./PostgreSqlParser.js";
import { TruncateTableContext } from "./PostgreSqlParser.js";
import { CommentStmtContext } from "./PostgreSqlParser.js";
import { SecLabelStmtContext } from "./PostgreSqlParser.js";
import { FetchStmtContext } from "./PostgreSqlParser.js";
import { Fetch_argsContext } from "./PostgreSqlParser.js";
import { FromInContext } from "./PostgreSqlParser.js";
import { GrantStmtContext } from "./PostgreSqlParser.js";
import { RevokeStmtContext } from "./PostgreSqlParser.js";
import { PrivilegesContext } from "./PostgreSqlParser.js";
import { BeforePrivilegeSelectContext } from "./PostgreSqlParser.js";
import { PrivilegeContext } from "./PostgreSqlParser.js";
import { PrivilegeTargetContext } from "./PostgreSqlParser.js";
import { GranteeListContext } from "./PostgreSqlParser.js";
import { GrantRoleStmtContext } from "./PostgreSqlParser.js";
import { RevokeRoleStmtContext } from "./PostgreSqlParser.js";
import { AlterDefaultPrivilegesStmtContext } from "./PostgreSqlParser.js";
import { DefaclactionContext } from "./PostgreSqlParser.js";
import { DefaclPrivilegeTargetContext } from "./PostgreSqlParser.js";
import { IndexStmtContext } from "./PostgreSqlParser.js";
import { IndexParamsContext } from "./PostgreSqlParser.js";
import { IndexElemContext } from "./PostgreSqlParser.js";
import { CreateFunctionStmtContext } from "./PostgreSqlParser.js";
import { OrReplaceOptContext } from "./PostgreSqlParser.js";
import { FuncArgsContext } from "./PostgreSqlParser.js";
import { FuncArgsListContext } from "./PostgreSqlParser.js";
import { RoutineWithArgTypesListContext } from "./PostgreSqlParser.js";
import { RoutineWithArgTypesContext } from "./PostgreSqlParser.js";
import { ProcedureWithArgTypesListContext } from "./PostgreSqlParser.js";
import { ProcedureWithArgTypesContext } from "./PostgreSqlParser.js";
import { FunctionWithArgTypesListContext } from "./PostgreSqlParser.js";
import { FunctionWithArgTypesContext } from "./PostgreSqlParser.js";
import { FuncArgContext } from "./PostgreSqlParser.js";
import { ArgClassContext } from "./PostgreSqlParser.js";
import { FuncTypeContext } from "./PostgreSqlParser.js";
import { FuncArgWithDefaultContext } from "./PostgreSqlParser.js";
import { AggregateArgsContext } from "./PostgreSqlParser.js";
import { AggregateWithArgTypesContext } from "./PostgreSqlParser.js";
import { CommonFuncOptItemContext } from "./PostgreSqlParser.js";
import { CreateFuncOptItemContext } from "./PostgreSqlParser.js";
import { OptDefinitionContext } from "./PostgreSqlParser.js";
import { TableFuncColumnContext } from "./PostgreSqlParser.js";
import { AlterFunctionStmtContext } from "./PostgreSqlParser.js";
import { RemoveFuncStmtContext } from "./PostgreSqlParser.js";
import { RemoveAggregateStmtContext } from "./PostgreSqlParser.js";
import { RemoveOperatorStmtContext } from "./PostgreSqlParser.js";
import { OperatorArgTypesContext } from "./PostgreSqlParser.js";
import { AnyOperatorContext } from "./PostgreSqlParser.js";
import { OperatorWithArgTypesContext } from "./PostgreSqlParser.js";
import { DoStmtContext } from "./PostgreSqlParser.js";
import { CreateCastStmtContext } from "./PostgreSqlParser.js";
import { IfExistsContext } from "./PostgreSqlParser.js";
import { CreateTransformStmtContext } from "./PostgreSqlParser.js";
import { SqlWithFunctionContext } from "./PostgreSqlParser.js";
import { ReindexStmtContext } from "./PostgreSqlParser.js";
import { AlterTblSpcStmtContext } from "./PostgreSqlParser.js";
import { RenameStmtContext } from "./PostgreSqlParser.js";
import { AlterObjectDependsStmtContext } from "./PostgreSqlParser.js";
import { AlterObjectSchemaStmtContext } from "./PostgreSqlParser.js";
import { AlterOperatorStmtContext } from "./PostgreSqlParser.js";
import { OperatorDefListContext } from "./PostgreSqlParser.js";
import { OperatorDefElemContext } from "./PostgreSqlParser.js";
import { AlterTypeStmtContext } from "./PostgreSqlParser.js";
import { AlterOwnerStmtContext } from "./PostgreSqlParser.js";
import { CreatePublicationStmtContext } from "./PostgreSqlParser.js";
import { AlterPublicationStmtContext } from "./PostgreSqlParser.js";
import { CreateSubscriptionStmtContext } from "./PostgreSqlParser.js";
import { AlterSubscriptionStmtContext } from "./PostgreSqlParser.js";
import { RuleStmtContext } from "./PostgreSqlParser.js";
import { RuleActionStmtContext } from "./PostgreSqlParser.js";
import { NotifyStmtContext } from "./PostgreSqlParser.js";
import { NotifyPayloadContext } from "./PostgreSqlParser.js";
import { ListenStmtContext } from "./PostgreSqlParser.js";
import { UnListenStmtContext } from "./PostgreSqlParser.js";
import { TransactionStmtContext } from "./PostgreSqlParser.js";
import { OptTransactionContext } from "./PostgreSqlParser.js";
import { TransactionModeItemContext } from "./PostgreSqlParser.js";
import { TransactionModeListContext } from "./PostgreSqlParser.js";
import { CreateViewContext } from "./PostgreSqlParser.js";
import { LoadStmtContext } from "./PostgreSqlParser.js";
import { CreateDatabaseContext } from "./PostgreSqlParser.js";
import { CreateDbOptItemContext } from "./PostgreSqlParser.js";
import { AlterDatabaseStmtContext } from "./PostgreSqlParser.js";
import { AlterDatabaseSetStmtContext } from "./PostgreSqlParser.js";
import { AlterCollationStmtContext } from "./PostgreSqlParser.js";
import { AlterSystemStmtContext } from "./PostgreSqlParser.js";
import { CreateDomainStmtContext } from "./PostgreSqlParser.js";
import { AlterDomainStmtContext } from "./PostgreSqlParser.js";
import { AlterSearchDictionaryStmtContext } from "./PostgreSqlParser.js";
import { AlterSearchConfigurationStmtContext } from "./PostgreSqlParser.js";
import { CreateConversionStmtContext } from "./PostgreSqlParser.js";
import { ClusterStmtContext } from "./PostgreSqlParser.js";
import { VacuumStmtContext } from "./PostgreSqlParser.js";
import { AnalyzeStmtContext } from "./PostgreSqlParser.js";
import { AnalyzeKeywordContext } from "./PostgreSqlParser.js";
import { VacAnalyzeOptionElemContext } from "./PostgreSqlParser.js";
import { AnalyzeOptionElemContext } from "./PostgreSqlParser.js";
import { OptVerboseContext } from "./PostgreSqlParser.js";
import { VacuumRelationContext } from "./PostgreSqlParser.js";
import { VacuumRelationListContext } from "./PostgreSqlParser.js";
import { ExplainStmtContext } from "./PostgreSqlParser.js";
import { ExplainableStmtContext } from "./PostgreSqlParser.js";
import { ExplainOptionListContext } from "./PostgreSqlParser.js";
import { PrepareStmtContext } from "./PostgreSqlParser.js";
import { PrepTypeClauseContext } from "./PostgreSqlParser.js";
import { PreParableStmtContext } from "./PostgreSqlParser.js";
import { ExecuteStmtContext } from "./PostgreSqlParser.js";
import { ExecuteParamClauseContext } from "./PostgreSqlParser.js";
import { DealLocateStmtContext } from "./PostgreSqlParser.js";
import { InsertStatementContext } from "./PostgreSqlParser.js";
import { InsertRestContext } from "./PostgreSqlParser.js";
import { InsertColumnListContext } from "./PostgreSqlParser.js";
import { InsertColumnItemContext } from "./PostgreSqlParser.js";
import { ReturningClauseContext } from "./PostgreSqlParser.js";
import { DeleteStmtContext } from "./PostgreSqlParser.js";
import { LockStmtContext } from "./PostgreSqlParser.js";
import { UpdateStmtContext } from "./PostgreSqlParser.js";
import { SetClauseListContext } from "./PostgreSqlParser.js";
import { SetClauseContext } from "./PostgreSqlParser.js";
import { DeclareCursorStmtContext } from "./PostgreSqlParser.js";
import { SelectStatementContext } from "./PostgreSqlParser.js";
import { SelectWithParensContext } from "./PostgreSqlParser.js";
import { SelectNoParensContext } from "./PostgreSqlParser.js";
import { SelectClauseContext } from "./PostgreSqlParser.js";
import { SimpleSelectContext } from "./PostgreSqlParser.js";
import { SetOperatorWithAllOrDistinctContext } from "./PostgreSqlParser.js";
import { WithClauseContext } from "./PostgreSqlParser.js";
import { CommonTableExprContext } from "./PostgreSqlParser.js";
import { SearchClauseContext } from "./PostgreSqlParser.js";
import { CycleClauseContext } from "./PostgreSqlParser.js";
import { IntoClauseContext } from "./PostgreSqlParser.js";
import { OptTempTableNameContext } from "./PostgreSqlParser.js";
import { DistinctClauseContext } from "./PostgreSqlParser.js";
import { SortClauseContext } from "./PostgreSqlParser.js";
import { SortByContext } from "./PostgreSqlParser.js";
import { SelectLimitContext } from "./PostgreSqlParser.js";
import { LimitClauseContext } from "./PostgreSqlParser.js";
import { FetchClauseContext } from "./PostgreSqlParser.js";
import { OffsetClauseContext } from "./PostgreSqlParser.js";
import { SelectFetchFirstValueContext } from "./PostgreSqlParser.js";
import { GroupClauseContext } from "./PostgreSqlParser.js";
import { GroupByListContext } from "./PostgreSqlParser.js";
import { GroupByItemContext } from "./PostgreSqlParser.js";
import { ForLockingClauseContext } from "./PostgreSqlParser.js";
import { ValuesClauseContext } from "./PostgreSqlParser.js";
import { FromClauseContext } from "./PostgreSqlParser.js";
import { FromListContext } from "./PostgreSqlParser.js";
import { TableRefContext } from "./PostgreSqlParser.js";
import { AliasClauseContext } from "./PostgreSqlParser.js";
import { FuncAliasClauseContext } from "./PostgreSqlParser.js";
import { JoinTypeContext } from "./PostgreSqlParser.js";
import { JoinQualContext } from "./PostgreSqlParser.js";
import { RelationExprContext } from "./PostgreSqlParser.js";
import { PublicationRelationExprContext } from "./PostgreSqlParser.js";
import { RelationExprListContext } from "./PostgreSqlParser.js";
import { RelationExprOptAliasContext } from "./PostgreSqlParser.js";
import { TableSampleClauseContext } from "./PostgreSqlParser.js";
import { FuncTableContext } from "./PostgreSqlParser.js";
import { RowsFromItemContext } from "./PostgreSqlParser.js";
import { WhereClauseContext } from "./PostgreSqlParser.js";
import { WhereOrCurrentClauseContext } from "./PostgreSqlParser.js";
import { TableFuncElementListContext } from "./PostgreSqlParser.js";
import { TableFuncElementContext } from "./PostgreSqlParser.js";
import { XmlTableContext } from "./PostgreSqlParser.js";
import { XmlTableColumnElContext } from "./PostgreSqlParser.js";
import { XmlNamespaceEleContext } from "./PostgreSqlParser.js";
import { TypenameContext } from "./PostgreSqlParser.js";
import { SimpleTypeNameContext } from "./PostgreSqlParser.js";
import { ConstTypeNameContext } from "./PostgreSqlParser.js";
import { NumericContext } from "./PostgreSqlParser.js";
import { OptFloatContext } from "./PostgreSqlParser.js";
import { BitContext } from "./PostgreSqlParser.js";
import { CharacterContext } from "./PostgreSqlParser.js";
import { ConstDatetimeContext } from "./PostgreSqlParser.js";
import { OptIntervalContext } from "./PostgreSqlParser.js";
import { IntervalSecondContext } from "./PostgreSqlParser.js";
import { ComparisonOperatorContext } from "./PostgreSqlParser.js";
import { ExpressionContext } from "./PostgreSqlParser.js";
import { LogicalNotContext } from "./PostgreSqlParser.js";
import { PredicatedContext } from "./PostgreSqlParser.js";
import { LogicalBinaryContext } from "./PostgreSqlParser.js";
import { ComparisonContext } from "./PostgreSqlParser.js";
import { QuantifiedComparisonContext } from "./PostgreSqlParser.js";
import { BetweenContext } from "./PostgreSqlParser.js";
import { InListContext } from "./PostgreSqlParser.js";
import { InSubqueryContext } from "./PostgreSqlParser.js";
import { LikeContext } from "./PostgreSqlParser.js";
import { NullPredicateContext } from "./PostgreSqlParser.js";
import { DistinctFromContext } from "./PostgreSqlParser.js";
import { ValueExpressionDefaultContext } from "./PostgreSqlParser.js";
import { ConcatenationContext } from "./PostgreSqlParser.js";
import { ArithmeticBinaryContext } from "./PostgreSqlParser.js";
import { ArithmeticUnaryContext } from "./PostgreSqlParser.js";
import { AtTimeZoneContext } from "./PostgreSqlParser.js";
import { PrimaryExpressionContext } from "./PostgreSqlParser.js";
import { FuncApplicationContext } from "./PostgreSqlParser.js";
import { Func_exprContext } from "./PostgreSqlParser.js";
import { FuncExprWindowlessContext } from "./PostgreSqlParser.js";
import { FuncExprCommonSubExprContext } from "./PostgreSqlParser.js";
import { XmlAttributeListContext } from "./PostgreSqlParser.js";
import { XmlAttributeElContext } from "./PostgreSqlParser.js";
import { DocumentOrContentContext } from "./PostgreSqlParser.js";
import { XmlExistsArgumentContext } from "./PostgreSqlParser.js";
import { XmlPassingMechContext } from "./PostgreSqlParser.js";
import { WindowClauseContext } from "./PostgreSqlParser.js";
import { HavingClauseContext } from "./PostgreSqlParser.js";
import { WindowDefinitionContext } from "./PostgreSqlParser.js";
import { Over_clauseContext } from "./PostgreSqlParser.js";
import { WindowSpecificationContext } from "./PostgreSqlParser.js";
import { OptFrameClauseContext } from "./PostgreSqlParser.js";
import { FrameBoundContext } from "./PostgreSqlParser.js";
import { RowContext } from "./PostgreSqlParser.js";
import { ExplicitRowContext } from "./PostgreSqlParser.js";
import { SubTypeContext } from "./PostgreSqlParser.js";
import { AllOpContext } from "./PostgreSqlParser.js";
import { MathOpContext } from "./PostgreSqlParser.js";
import { QualOpContext } from "./PostgreSqlParser.js";
import { QualAllOpContext } from "./PostgreSqlParser.js";
import { SubqueryOperatorContext } from "./PostgreSqlParser.js";
import { ExprListContext } from "./PostgreSqlParser.js";
import { ColumnExprContext } from "./PostgreSqlParser.js";
import { ColumnExprNoParenContext } from "./PostgreSqlParser.js";
import { FuncArgListContext } from "./PostgreSqlParser.js";
import { FuncArgExprContext } from "./PostgreSqlParser.js";
import { ArrayExprContext } from "./PostgreSqlParser.js";
import { ExtractArgContext } from "./PostgreSqlParser.js";
import { UnicodeNormalFormContext } from "./PostgreSqlParser.js";
import { SubstrListContext } from "./PostgreSqlParser.js";
import { When_clauseContext } from "./PostgreSqlParser.js";
import { IndirectionElContext } from "./PostgreSqlParser.js";
import { IndirectionContext } from "./PostgreSqlParser.js";
import { OptIndirectionContext } from "./PostgreSqlParser.js";
import { TargetListContext } from "./PostgreSqlParser.js";
import { Target_labelContext } from "./PostgreSqlParser.js";
import { Target_starContext } from "./PostgreSqlParser.js";
import { QualifiedNameListContext } from "./PostgreSqlParser.js";
import { TableNameListContext } from "./PostgreSqlParser.js";
import { SchemaNameListContext } from "./PostgreSqlParser.js";
import { DatabaseNameListContext } from "./PostgreSqlParser.js";
import { TableSpaceNameCreateContext } from "./PostgreSqlParser.js";
import { TableSpaceNameContext } from "./PostgreSqlParser.js";
import { TableNameCreateContext } from "./PostgreSqlParser.js";
import { TableNameContext } from "./PostgreSqlParser.js";
import { ViewNameCreateContext } from "./PostgreSqlParser.js";
import { ViewNameContext } from "./PostgreSqlParser.js";
import { QualifiedNameContext } from "./PostgreSqlParser.js";
import { TableSpaceNameListContext } from "./PostgreSqlParser.js";
import { NameListContext } from "./PostgreSqlParser.js";
import { DatabaseNameCreateContext } from "./PostgreSqlParser.js";
import { DatabaseNameContext } from "./PostgreSqlParser.js";
import { SchemaNameContext } from "./PostgreSqlParser.js";
import { RoutineNameCreateContext } from "./PostgreSqlParser.js";
import { RoutineNameContext } from "./PostgreSqlParser.js";
import { ProcedureNameContext } from "./PostgreSqlParser.js";
import { ProcedureNameCreateContext } from "./PostgreSqlParser.js";
import { ColumnNameContext } from "./PostgreSqlParser.js";
import { ColumnNamePathContext } from "./PostgreSqlParser.js";
import { ColumnNameCreateContext } from "./PostgreSqlParser.js";
import { FunctionNameCreateContext } from "./PostgreSqlParser.js";
import { FunctionNameContext } from "./PostgreSqlParser.js";
import { StringConstContext } from "./PostgreSqlParser.js";
import { AnysconstContext } from "./PostgreSqlParser.js";
import { SignedConstContext } from "./PostgreSqlParser.js";
import { RoleSpecContext } from "./PostgreSqlParser.js";
import { RoleListContext } from "./PostgreSqlParser.js";
import { ColIdContext } from "./PostgreSqlParser.js";
import { TypeFunctionNameContext } from "./PostgreSqlParser.js";
import { NonReservedWordContext } from "./PostgreSqlParser.js";
import { ColLabelContext } from "./PostgreSqlParser.js";
import { IdentifierContext } from "./PostgreSqlParser.js";
import { UnreservedKeywordContext } from "./PostgreSqlParser.js";
import { ColNameKeywordContext } from "./PostgreSqlParser.js";
import { TypeFuncNameKeywordContext } from "./PostgreSqlParser.js";
import { ReservedKeywordContext } from "./PostgreSqlParser.js";
import { PlBlockContext } from "./PostgreSqlParser.js";
import { LabelDeclContext } from "./PostgreSqlParser.js";
import { DeclStatementContext } from "./PostgreSqlParser.js";
import { DeclCursorArgContext } from "./PostgreSqlParser.js";
import { AssignOperatorContext } from "./PostgreSqlParser.js";
import { ProcStmtContext } from "./PostgreSqlParser.js";
import { StmtPerformContext } from "./PostgreSqlParser.js";
import { StmtCallContext } from "./PostgreSqlParser.js";
import { StmtAssignContext } from "./PostgreSqlParser.js";
import { StmtGetdiagContext } from "./PostgreSqlParser.js";
import { GetdiagListItemContext } from "./PostgreSqlParser.js";
import { AssignVarContext } from "./PostgreSqlParser.js";
import { StmtIfContext } from "./PostgreSqlParser.js";
import { StmtElseContext } from "./PostgreSqlParser.js";
import { StmtCaseContext } from "./PostgreSqlParser.js";
import { StmtLoopWhileForContext } from "./PostgreSqlParser.js";
import { ForControlContext } from "./PostgreSqlParser.js";
import { StmtForeachContext } from "./PostgreSqlParser.js";
import { StmtExitContext } from "./PostgreSqlParser.js";
import { StmtReturnContext } from "./PostgreSqlParser.js";
import { StmtRaiseContext } from "./PostgreSqlParser.js";
import { OptRaiseUsingElemContext } from "./PostgreSqlParser.js";
import { StmtAssertContext } from "./PostgreSqlParser.js";
import { LoopBodyContext } from "./PostgreSqlParser.js";
import { StmtExecsqlContext } from "./PostgreSqlParser.js";
import { StmtDynexecuteContext } from "./PostgreSqlParser.js";
import { OptExecuteIntoContext } from "./PostgreSqlParser.js";
import { StmtOpenContext } from "./PostgreSqlParser.js";
import { OptOpenBoundListItemContext } from "./PostgreSqlParser.js";
import { StmtFetchContext } from "./PostgreSqlParser.js";
import { OptFetchFirectionContext } from "./PostgreSqlParser.js";
import { StmtMoveContext } from "./PostgreSqlParser.js";
import { MergeStmtContext } from "./PostgreSqlParser.js";
import { DataSourceContext } from "./PostgreSqlParser.js";
import { MergeWhenClauseContext } from "./PostgreSqlParser.js";
import { MergeInsertContext } from "./PostgreSqlParser.js";
import { MergeUpdateContext } from "./PostgreSqlParser.js";
import { DefaultValuesOrValuesContext } from "./PostgreSqlParser.js";
import { ExprofdefaultContext } from "./PostgreSqlParser.js";
import { StmtCloseContext } from "./PostgreSqlParser.js";
import { StmtNullContext } from "./PostgreSqlParser.js";
import { StmtCommitOrRollbackContext } from "./PostgreSqlParser.js";
import { StmtSetContext } from "./PostgreSqlParser.js";
import { CursorVariableContext } from "./PostgreSqlParser.js";
import { ExceptionSectContext } from "./PostgreSqlParser.js";
import { ProcConditionContext } from "./PostgreSqlParser.js";
import { AnyIdentifierContext } from "./PostgreSqlParser.js";
import { SqlExpressionContext } from "./PostgreSqlParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PostgreSqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class PostgreSqlParserVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `PostgreSqlParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.singleStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleStmt?: (ctx: SingleStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt?: (ctx: StmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.callStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCallStmt?: (ctx: CallStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createRoleStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateRoleStmt?: (ctx: CreateRoleStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterOperatorRoleElem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterOperatorRoleElem?: (ctx: AlterOperatorRoleElemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createOperatorRoleElem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateOperatorRoleElem?: (ctx: CreateOperatorRoleElemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createUserStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateUserStmt?: (ctx: CreateUserStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterRoleStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterRoleStmt?: (ctx: AlterRoleStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterRoleSetStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterRoleSetStmt?: (ctx: AlterRoleSetStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterRoutineStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterRoutineStmt?: (ctx: AlterRoutineStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterRoutineClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterRoutineClause?: (ctx: AlterRoutineClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.routineAction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoutineAction?: (ctx: RoutineActionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createGroupStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateGroupStmt?: (ctx: CreateGroupStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterGroupStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterGroupStmt?: (ctx: AlterGroupStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createSchemaStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateSchemaStmt?: (ctx: CreateSchemaStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.schemaNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSchemaNameCreate?: (ctx: SchemaNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.schemaStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSchemaStmt?: (ctx: SchemaStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.variableSetStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableSetStmt?: (ctx: VariableSetStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.setRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetRest?: (ctx: SetRestContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.genericSet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenericSet?: (ctx: GenericSetContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.setRestMore`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetRestMore?: (ctx: SetRestMoreContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.varName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVarName?: (ctx: VarNameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.varList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVarList?: (ctx: VarListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.varValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVarValue?: (ctx: VarValueContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.isoLevel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIsoLevel?: (ctx: IsoLevelContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.optBooleanOrStringColumn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptBooleanOrStringColumn?: (ctx: OptBooleanOrStringColumnContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.booleanOrString`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanOrString?: (ctx: BooleanOrStringContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.zoneValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitZoneValue?: (ctx: ZoneValueContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.nonReservedWordOrStringConst`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonReservedWordOrStringConst?: (ctx: NonReservedWordOrStringConstContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.variableResetStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableResetStmt?: (ctx: VariableResetStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.resetRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResetRest?: (ctx: ResetRestContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.setOrResetClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetOrResetClause?: (ctx: SetOrResetClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.functionSetOrResetClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionSetOrResetClause?: (ctx: FunctionSetOrResetClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.variableShowStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableShowStmt?: (ctx: VariableShowStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.constraintsSetStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstraintsSetStmt?: (ctx: ConstraintsSetStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.checkPointStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCheckPointStmt?: (ctx: CheckPointStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.discardStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDiscardStmt?: (ctx: DiscardStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterTableStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTableStmt?: (ctx: AlterTableStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterTableCmds`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTableCmds?: (ctx: AlterTableCmdsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.partitionCmd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionCmd?: (ctx: PartitionCmdContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.indexPartitionCmd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndexPartitionCmd?: (ctx: IndexPartitionCmdContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterTableCmd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTableCmd?: (ctx: AlterTableCmdContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterColumnDefault`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterColumnDefault?: (ctx: AlterColumnDefaultContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.optDropBehavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptDropBehavior?: (ctx: OptDropBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.collateClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCollateClause?: (ctx: CollateClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.relOptions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelOptions?: (ctx: RelOptionsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.optRelOptions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptRelOptions?: (ctx: OptRelOptionsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.relOptionElem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelOptionElem?: (ctx: RelOptionElemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.partitionBoundSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionBoundSpec?: (ctx: PartitionBoundSpecContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterCompositeTypeStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterCompositeTypeStmt?: (ctx: AlterCompositeTypeStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterTypeCmd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTypeCmd?: (ctx: AlterTypeCmdContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.closePortalStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClosePortalStmt?: (ctx: ClosePortalStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.copyStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopyStmt?: (ctx: CopyStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.copyOptionsNoparens`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopyOptionsNoparens?: (ctx: CopyOptionsNoparensContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.copyOptions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopyOptions?: (ctx: CopyOptionsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.copyGenericOptElem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopyGenericOptElem?: (ctx: CopyGenericOptElemContext) => Result;
    /**
     * Visit a parse tree produced by the `columnCreateTable`
     * labeled alternative in `PostgreSqlParser.createStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnCreateTable?: (ctx: ColumnCreateTableContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.optTemp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptTemp?: (ctx: OptTempContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.optTypedTableElEmentList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptTypedTableElEmentList?: (ctx: OptTypedTableElEmentListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.tableElementList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableElementList?: (ctx: TableElementListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.tableElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableElement?: (ctx: TableElementContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.typedTableElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypedTableElement?: (ctx: TypedTableElementContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.column_def`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_def?: (ctx: Column_defContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.colConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColConstraint?: (ctx: ColConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.colConstraintElem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColConstraintElem?: (ctx: ColConstraintElemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.generatedWhen`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneratedWhen?: (ctx: GeneratedWhenContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.tableLikeOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableLikeOption?: (ctx: TableLikeOptionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.constraintElem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstraintElem?: (ctx: ConstraintElemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.optColumnList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptColumnList?: (ctx: OptColumnListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.columnListCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnListCreate?: (ctx: ColumnListCreateContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.columnList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnList?: (ctx: ColumnListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.columnListInclude`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnListInclude?: (ctx: ColumnListIncludeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.keyMatch`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKeyMatch?: (ctx: KeyMatchContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.exclusionConstraintElem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExclusionConstraintElem?: (ctx: ExclusionConstraintElemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.keyActions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKeyActions?: (ctx: KeyActionsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.keyUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKeyUpdate?: (ctx: KeyUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.keyDelete`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKeyDelete?: (ctx: KeyDeleteContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.keyAction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKeyAction?: (ctx: KeyActionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.optInherit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptInherit?: (ctx: OptInheritContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.partitionSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionSpec?: (ctx: PartitionSpecContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.partElem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartElem?: (ctx: PartElemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.tableAccessMethodClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableAccessMethodClause?: (ctx: TableAccessMethodClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.optWith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptWith?: (ctx: OptWithContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.onCommitOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOnCommitOption?: (ctx: OnCommitOptionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.optTableSpace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptTableSpace?: (ctx: OptTableSpaceContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.optConstableSpace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptConstableSpace?: (ctx: OptConstableSpaceContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.existingIndex`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExistingIndex?: (ctx: ExistingIndexContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createStatsStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateStatsStmt?: (ctx: CreateStatsStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterStatsStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStatsStmt?: (ctx: AlterStatsStmtContext) => Result;
    /**
     * Visit a parse tree produced by the `queryCreateTable`
     * labeled alternative in `PostgreSqlParser.createAsStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryCreateTable?: (ctx: QueryCreateTableContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createAsTarget`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateAsTarget?: (ctx: CreateAsTargetContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.optWithData`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptWithData?: (ctx: OptWithDataContext) => Result;
    /**
     * Visit a parse tree produced by the `createMaterializedView`
     * labeled alternative in `PostgreSqlParser.createMaterializedViewStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.refreshMaterializedViewStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefreshMaterializedViewStmt?: (ctx: RefreshMaterializedViewStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createSeqStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateSeqStmt?: (ctx: CreateSeqStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterSeqStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterSeqStmt?: (ctx: AlterSeqStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.seqOptElem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSeqOptElem?: (ctx: SeqOptElemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.numericOnly`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumericOnly?: (ctx: NumericOnlyContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createProceduralLangStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateProceduralLangStmt?: (ctx: CreateProceduralLangStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createTableSpaceStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTableSpaceStmt?: (ctx: CreateTableSpaceStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createExtensionStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateExtensionStmt?: (ctx: CreateExtensionStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterExtensionStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterExtensionStmt?: (ctx: AlterExtensionStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterExtensionContentsStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterExtensionContentsStmt?: (ctx: AlterExtensionContentsStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createFdwStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateFdwStmt?: (ctx: CreateFdwStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.fdwOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFdwOption?: (ctx: FdwOptionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterFdwStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterFdwStmt?: (ctx: AlterFdwStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createGenericOptions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateGenericOptions?: (ctx: CreateGenericOptionsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterGenericOptions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterGenericOptions?: (ctx: AlterGenericOptionsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterGenericOptionElem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterGenericOptionElem?: (ctx: AlterGenericOptionElemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.genericOptionElem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenericOptionElem?: (ctx: GenericOptionElemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createForeignServerStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateForeignServerStmt?: (ctx: CreateForeignServerStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.foreignServerVersion`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForeignServerVersion?: (ctx: ForeignServerVersionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterForeignServerStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterForeignServerStmt?: (ctx: AlterForeignServerStmtContext) => Result;
    /**
     * Visit a parse tree produced by the `createForeignTable`
     * labeled alternative in `PostgreSqlParser.createForeignTableStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateForeignTable?: (ctx: CreateForeignTableContext) => Result;
    /**
     * Visit a parse tree produced by the `createPartitionForeignTable`
     * labeled alternative in `PostgreSqlParser.createForeignTableStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatePartitionForeignTable?: (ctx: CreatePartitionForeignTableContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.importForeignSchemaStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImportForeignSchemaStmt?: (ctx: ImportForeignSchemaStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createUserMappingStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateUserMappingStmt?: (ctx: CreateUserMappingStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterUserMappingStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterUserMappingStmt?: (ctx: AlterUserMappingStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createPolicyStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatePolicyStmt?: (ctx: CreatePolicyStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterPolicyStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterPolicyStmt?: (ctx: AlterPolicyStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterProcedureStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterProcedureStmt?: (ctx: AlterProcedureStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.procedureAction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedureAction?: (ctx: ProcedureActionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.rowSecurityOptionalExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowSecurityOptionalExpr?: (ctx: RowSecurityOptionalExprContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.rowSecurityOptionalWithCheck`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowSecurityOptionalWithCheck?: (ctx: RowSecurityOptionalWithCheckContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createAccessMethodStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateAccessMethodStmt?: (ctx: CreateAccessMethodStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createTrigStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTrigStmt?: (ctx: CreateTrigStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.triggerActionTime`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerActionTime?: (ctx: TriggerActionTimeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.triggerEvents`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerEvents?: (ctx: TriggerEventsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.triggerOneEvent`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerOneEvent?: (ctx: TriggerOneEventContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.triggerWhen`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerWhen?: (ctx: TriggerWhenContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.functionOrProcedure`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionOrProcedure?: (ctx: FunctionOrProcedureContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.triggerFuncArgs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerFuncArgs?: (ctx: TriggerFuncArgsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.triggerFuncArg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerFuncArg?: (ctx: TriggerFuncArgContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.constraintAttributeElem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstraintAttributeElem?: (ctx: ConstraintAttributeElemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createEventTrigStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateEventTrigStmt?: (ctx: CreateEventTrigStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.eventTriggerWhenItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEventTriggerWhenItem?: (ctx: EventTriggerWhenItemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterEventTrigStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterEventTrigStmt?: (ctx: AlterEventTrigStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createAssertionStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateAssertionStmt?: (ctx: CreateAssertionStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.defineStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefineStmt?: (ctx: DefineStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.definition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefinition?: (ctx: DefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.defElem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefElem?: (ctx: DefElemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.defArg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefArg?: (ctx: DefArgContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.oldAggregateElem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOldAggregateElem?: (ctx: OldAggregateElemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterEnumStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterEnumStmt?: (ctx: AlterEnumStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.ifNotExists`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfNotExists?: (ctx: IfNotExistsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createOperatorClassStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateOperatorClassStmt?: (ctx: CreateOperatorClassStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.opClassItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpClassItem?: (ctx: OpClassItemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createOperatorFamilyStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateOperatorFamilyStmt?: (ctx: CreateOperatorFamilyStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterOperatorFamilyStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterOperatorFamilyStmt?: (ctx: AlterOperatorFamilyStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.opClassDrop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpClassDrop?: (ctx: OpClassDropContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.reassignOwnedStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReassignOwnedStmt?: (ctx: ReassignOwnedStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.dropStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropStmt?: (ctx: DropStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.objectTypeAnyName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectTypeAnyName?: (ctx: ObjectTypeAnyNameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.objectTypeName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectTypeName?: (ctx: ObjectTypeNameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.anyNameList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnyNameList?: (ctx: AnyNameListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.anyName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnyName?: (ctx: AnyNameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.attrs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttrs?: (ctx: AttrsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.truncateStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTruncateStmt?: (ctx: TruncateStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.truncateTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTruncateTable?: (ctx: TruncateTableContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.commentStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommentStmt?: (ctx: CommentStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.secLabelStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSecLabelStmt?: (ctx: SecLabelStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.fetchStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFetchStmt?: (ctx: FetchStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.fetch_args`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFetch_args?: (ctx: Fetch_argsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.fromIn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromIn?: (ctx: FromInContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.grantStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrantStmt?: (ctx: GrantStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.revokeStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRevokeStmt?: (ctx: RevokeStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.privileges`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrivileges?: (ctx: PrivilegesContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.beforePrivilegeSelect`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBeforePrivilegeSelect?: (ctx: BeforePrivilegeSelectContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.privilege`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrivilege?: (ctx: PrivilegeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.privilegeTarget`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrivilegeTarget?: (ctx: PrivilegeTargetContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.granteeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGranteeList?: (ctx: GranteeListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.grantRoleStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrantRoleStmt?: (ctx: GrantRoleStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.revokeRoleStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRevokeRoleStmt?: (ctx: RevokeRoleStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterDefaultPrivilegesStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterDefaultPrivilegesStmt?: (ctx: AlterDefaultPrivilegesStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.defaclaction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefaclaction?: (ctx: DefaclactionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.defaclPrivilegeTarget`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefaclPrivilegeTarget?: (ctx: DefaclPrivilegeTargetContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.indexStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndexStmt?: (ctx: IndexStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.indexParams`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndexParams?: (ctx: IndexParamsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.indexElem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndexElem?: (ctx: IndexElemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createFunctionStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateFunctionStmt?: (ctx: CreateFunctionStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.orReplaceOpt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrReplaceOpt?: (ctx: OrReplaceOptContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.funcArgs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFuncArgs?: (ctx: FuncArgsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.funcArgsList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFuncArgsList?: (ctx: FuncArgsListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.routineWithArgTypesList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoutineWithArgTypesList?: (ctx: RoutineWithArgTypesListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.routineWithArgTypes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoutineWithArgTypes?: (ctx: RoutineWithArgTypesContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.procedureWithArgTypesList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedureWithArgTypesList?: (ctx: ProcedureWithArgTypesListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.procedureWithArgTypes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedureWithArgTypes?: (ctx: ProcedureWithArgTypesContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.functionWithArgTypesList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionWithArgTypesList?: (ctx: FunctionWithArgTypesListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.functionWithArgTypes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionWithArgTypes?: (ctx: FunctionWithArgTypesContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.funcArg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFuncArg?: (ctx: FuncArgContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.argClass`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArgClass?: (ctx: ArgClassContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.funcType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFuncType?: (ctx: FuncTypeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.funcArgWithDefault`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFuncArgWithDefault?: (ctx: FuncArgWithDefaultContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.aggregateArgs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregateArgs?: (ctx: AggregateArgsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.aggregateWithArgTypes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregateWithArgTypes?: (ctx: AggregateWithArgTypesContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.commonFuncOptItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommonFuncOptItem?: (ctx: CommonFuncOptItemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createFuncOptItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateFuncOptItem?: (ctx: CreateFuncOptItemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.optDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptDefinition?: (ctx: OptDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.tableFuncColumn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableFuncColumn?: (ctx: TableFuncColumnContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterFunctionStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterFunctionStmt?: (ctx: AlterFunctionStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.removeFuncStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRemoveFuncStmt?: (ctx: RemoveFuncStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.removeAggregateStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRemoveAggregateStmt?: (ctx: RemoveAggregateStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.removeOperatorStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRemoveOperatorStmt?: (ctx: RemoveOperatorStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.operatorArgTypes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperatorArgTypes?: (ctx: OperatorArgTypesContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.anyOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnyOperator?: (ctx: AnyOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.operatorWithArgTypes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperatorWithArgTypes?: (ctx: OperatorWithArgTypesContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.doStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDoStmt?: (ctx: DoStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createCastStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateCastStmt?: (ctx: CreateCastStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.ifExists`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfExists?: (ctx: IfExistsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createTransformStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTransformStmt?: (ctx: CreateTransformStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.sqlWithFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSqlWithFunction?: (ctx: SqlWithFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.reindexStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReindexStmt?: (ctx: ReindexStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterTblSpcStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTblSpcStmt?: (ctx: AlterTblSpcStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.renameStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenameStmt?: (ctx: RenameStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterObjectDependsStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterObjectDependsStmt?: (ctx: AlterObjectDependsStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterObjectSchemaStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterObjectSchemaStmt?: (ctx: AlterObjectSchemaStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterOperatorStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterOperatorStmt?: (ctx: AlterOperatorStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.operatorDefList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperatorDefList?: (ctx: OperatorDefListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.operatorDefElem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperatorDefElem?: (ctx: OperatorDefElemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterTypeStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTypeStmt?: (ctx: AlterTypeStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterOwnerStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterOwnerStmt?: (ctx: AlterOwnerStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createPublicationStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatePublicationStmt?: (ctx: CreatePublicationStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterPublicationStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterPublicationStmt?: (ctx: AlterPublicationStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createSubscriptionStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateSubscriptionStmt?: (ctx: CreateSubscriptionStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterSubscriptionStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterSubscriptionStmt?: (ctx: AlterSubscriptionStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.ruleStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRuleStmt?: (ctx: RuleStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.ruleActionStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRuleActionStmt?: (ctx: RuleActionStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.notifyStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotifyStmt?: (ctx: NotifyStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.notifyPayload`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotifyPayload?: (ctx: NotifyPayloadContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.listenStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListenStmt?: (ctx: ListenStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.unListenStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnListenStmt?: (ctx: UnListenStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.transactionStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransactionStmt?: (ctx: TransactionStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.optTransaction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptTransaction?: (ctx: OptTransactionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.transactionModeItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransactionModeItem?: (ctx: TransactionModeItemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.transactionModeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransactionModeList?: (ctx: TransactionModeListContext) => Result;
    /**
     * Visit a parse tree produced by the `createView`
     * labeled alternative in `PostgreSqlParser.viewStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateView?: (ctx: CreateViewContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.loadStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoadStmt?: (ctx: LoadStmtContext) => Result;
    /**
     * Visit a parse tree produced by the `createDatabase`
     * labeled alternative in `PostgreSqlParser.createDbStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateDatabase?: (ctx: CreateDatabaseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createDbOptItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateDbOptItem?: (ctx: CreateDbOptItemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterDatabaseStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterDatabaseStmt?: (ctx: AlterDatabaseStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterDatabaseSetStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterDatabaseSetStmt?: (ctx: AlterDatabaseSetStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterCollationStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterCollationStmt?: (ctx: AlterCollationStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterSystemStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterSystemStmt?: (ctx: AlterSystemStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createDomainStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateDomainStmt?: (ctx: CreateDomainStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterDomainStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterDomainStmt?: (ctx: AlterDomainStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterSearchDictionaryStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterSearchDictionaryStmt?: (ctx: AlterSearchDictionaryStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterSearchConfigurationStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterSearchConfigurationStmt?: (ctx: AlterSearchConfigurationStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createConversionStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateConversionStmt?: (ctx: CreateConversionStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.clusterStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClusterStmt?: (ctx: ClusterStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.vacuumStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVacuumStmt?: (ctx: VacuumStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.analyzeStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyzeStmt?: (ctx: AnalyzeStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.analyzeKeyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyzeKeyword?: (ctx: AnalyzeKeywordContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.vacAnalyzeOptionElem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVacAnalyzeOptionElem?: (ctx: VacAnalyzeOptionElemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.analyzeOptionElem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyzeOptionElem?: (ctx: AnalyzeOptionElemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.optVerbose`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptVerbose?: (ctx: OptVerboseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.vacuumRelation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVacuumRelation?: (ctx: VacuumRelationContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.vacuumRelationList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVacuumRelationList?: (ctx: VacuumRelationListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.explainStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplainStmt?: (ctx: ExplainStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.explainableStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplainableStmt?: (ctx: ExplainableStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.explainOptionList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplainOptionList?: (ctx: ExplainOptionListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.prepareStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrepareStmt?: (ctx: PrepareStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.prepTypeClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrepTypeClause?: (ctx: PrepTypeClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.preParableStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPreParableStmt?: (ctx: PreParableStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.executeStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExecuteStmt?: (ctx: ExecuteStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.executeParamClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExecuteParamClause?: (ctx: ExecuteParamClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.dealLocateStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDealLocateStmt?: (ctx: DealLocateStmtContext) => Result;
    /**
     * Visit a parse tree produced by the `insertStatement`
     * labeled alternative in `PostgreSqlParser.insertStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertStatement?: (ctx: InsertStatementContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.insertRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertRest?: (ctx: InsertRestContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.insertColumnList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertColumnList?: (ctx: InsertColumnListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.insertColumnItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertColumnItem?: (ctx: InsertColumnItemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.returningClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturningClause?: (ctx: ReturningClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.deleteStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeleteStmt?: (ctx: DeleteStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.lockStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLockStmt?: (ctx: LockStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.updateStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdateStmt?: (ctx: UpdateStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.setClauseList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetClauseList?: (ctx: SetClauseListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.setClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetClause?: (ctx: SetClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.declareCursorStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeclareCursorStmt?: (ctx: DeclareCursorStmtContext) => Result;
    /**
     * Visit a parse tree produced by the `selectStatement`
     * labeled alternative in `PostgreSqlParser.selectStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectStatement?: (ctx: SelectStatementContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.selectWithParens`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectWithParens?: (ctx: SelectWithParensContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.selectNoParens`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectNoParens?: (ctx: SelectNoParensContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.selectClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectClause?: (ctx: SelectClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.simpleSelect`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleSelect?: (ctx: SimpleSelectContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.setOperatorWithAllOrDistinct`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetOperatorWithAllOrDistinct?: (ctx: SetOperatorWithAllOrDistinctContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.withClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWithClause?: (ctx: WithClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.commonTableExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommonTableExpr?: (ctx: CommonTableExprContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.searchClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSearchClause?: (ctx: SearchClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.cycleClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCycleClause?: (ctx: CycleClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.intoClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntoClause?: (ctx: IntoClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.optTempTableName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptTempTableName?: (ctx: OptTempTableNameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.distinctClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDistinctClause?: (ctx: DistinctClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.sortClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSortClause?: (ctx: SortClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.sortBy`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSortBy?: (ctx: SortByContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.selectLimit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectLimit?: (ctx: SelectLimitContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.limitClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLimitClause?: (ctx: LimitClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.fetchClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFetchClause?: (ctx: FetchClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.offsetClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOffsetClause?: (ctx: OffsetClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.selectFetchFirstValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectFetchFirstValue?: (ctx: SelectFetchFirstValueContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.groupClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupClause?: (ctx: GroupClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.groupByList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupByList?: (ctx: GroupByListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.groupByItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupByItem?: (ctx: GroupByItemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.forLockingClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForLockingClause?: (ctx: ForLockingClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.valuesClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValuesClause?: (ctx: ValuesClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.fromClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromClause?: (ctx: FromClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.fromList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromList?: (ctx: FromListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.tableRef`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableRef?: (ctx: TableRefContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.aliasClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAliasClause?: (ctx: AliasClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.funcAliasClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFuncAliasClause?: (ctx: FuncAliasClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.joinType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinType?: (ctx: JoinTypeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.joinQual`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinQual?: (ctx: JoinQualContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.relationExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelationExpr?: (ctx: RelationExprContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.publicationRelationExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPublicationRelationExpr?: (ctx: PublicationRelationExprContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.relationExprList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelationExprList?: (ctx: RelationExprListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.relationExprOptAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelationExprOptAlias?: (ctx: RelationExprOptAliasContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.tableSampleClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableSampleClause?: (ctx: TableSampleClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.funcTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFuncTable?: (ctx: FuncTableContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.rowsFromItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowsFromItem?: (ctx: RowsFromItemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.whereClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhereClause?: (ctx: WhereClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.whereOrCurrentClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhereOrCurrentClause?: (ctx: WhereOrCurrentClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.tableFuncElementList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableFuncElementList?: (ctx: TableFuncElementListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.tableFuncElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableFuncElement?: (ctx: TableFuncElementContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.xmlTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmlTable?: (ctx: XmlTableContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.xmlTableColumnEl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmlTableColumnEl?: (ctx: XmlTableColumnElContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.xmlNamespaceEle`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmlNamespaceEle?: (ctx: XmlNamespaceEleContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.typename`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypename?: (ctx: TypenameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.simpleTypeName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleTypeName?: (ctx: SimpleTypeNameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.constTypeName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstTypeName?: (ctx: ConstTypeNameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.numeric`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumeric?: (ctx: NumericContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.optFloat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptFloat?: (ctx: OptFloatContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.bit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBit?: (ctx: BitContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.character`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCharacter?: (ctx: CharacterContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.constDatetime`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstDatetime?: (ctx: ConstDatetimeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.optInterval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptInterval?: (ctx: OptIntervalContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.intervalSecond`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntervalSecond?: (ctx: IntervalSecondContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.comparisonOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `logicalNot`
     * labeled alternative in `PostgreSqlParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalNot?: (ctx: LogicalNotContext) => Result;
    /**
     * Visit a parse tree produced by the `predicated`
     * labeled alternative in `PostgreSqlParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicated?: (ctx: PredicatedContext) => Result;
    /**
     * Visit a parse tree produced by the `logicalBinary`
     * labeled alternative in `PostgreSqlParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalBinary?: (ctx: LogicalBinaryContext) => Result;
    /**
     * Visit a parse tree produced by the `comparison`
     * labeled alternative in `PostgreSqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparison?: (ctx: ComparisonContext) => Result;
    /**
     * Visit a parse tree produced by the `quantifiedComparison`
     * labeled alternative in `PostgreSqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuantifiedComparison?: (ctx: QuantifiedComparisonContext) => Result;
    /**
     * Visit a parse tree produced by the `between`
     * labeled alternative in `PostgreSqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBetween?: (ctx: BetweenContext) => Result;
    /**
     * Visit a parse tree produced by the `inList`
     * labeled alternative in `PostgreSqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInList?: (ctx: InListContext) => Result;
    /**
     * Visit a parse tree produced by the `inSubquery`
     * labeled alternative in `PostgreSqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInSubquery?: (ctx: InSubqueryContext) => Result;
    /**
     * Visit a parse tree produced by the `like`
     * labeled alternative in `PostgreSqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLike?: (ctx: LikeContext) => Result;
    /**
     * Visit a parse tree produced by the `nullPredicate`
     * labeled alternative in `PostgreSqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNullPredicate?: (ctx: NullPredicateContext) => Result;
    /**
     * Visit a parse tree produced by the `distinctFrom`
     * labeled alternative in `PostgreSqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDistinctFrom?: (ctx: DistinctFromContext) => Result;
    /**
     * Visit a parse tree produced by the `valueExpressionDefault`
     * labeled alternative in `PostgreSqlParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `concatenation`
     * labeled alternative in `PostgreSqlParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConcatenation?: (ctx: ConcatenationContext) => Result;
    /**
     * Visit a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `PostgreSqlParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => Result;
    /**
     * Visit a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `PostgreSqlParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => Result;
    /**
     * Visit a parse tree produced by the `atTimeZone`
     * labeled alternative in `PostgreSqlParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAtTimeZone?: (ctx: AtTimeZoneContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.funcApplication`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFuncApplication?: (ctx: FuncApplicationContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.func_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_expr?: (ctx: Func_exprContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.funcExprWindowless`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFuncExprWindowless?: (ctx: FuncExprWindowlessContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.funcExprCommonSubExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFuncExprCommonSubExpr?: (ctx: FuncExprCommonSubExprContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.xmlAttributeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmlAttributeList?: (ctx: XmlAttributeListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.xmlAttributeEl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmlAttributeEl?: (ctx: XmlAttributeElContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.documentOrContent`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDocumentOrContent?: (ctx: DocumentOrContentContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.xmlExistsArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmlExistsArgument?: (ctx: XmlExistsArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.xmlPassingMech`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmlPassingMech?: (ctx: XmlPassingMechContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.windowClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowClause?: (ctx: WindowClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.havingClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHavingClause?: (ctx: HavingClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.windowDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowDefinition?: (ctx: WindowDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.over_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOver_clause?: (ctx: Over_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.windowSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowSpecification?: (ctx: WindowSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.optFrameClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptFrameClause?: (ctx: OptFrameClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.frameBound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrameBound?: (ctx: FrameBoundContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.row`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRow?: (ctx: RowContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.explicitRow`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplicitRow?: (ctx: ExplicitRowContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.subType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubType?: (ctx: SubTypeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.allOp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAllOp?: (ctx: AllOpContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.mathOp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMathOp?: (ctx: MathOpContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.qualOp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualOp?: (ctx: QualOpContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.qualAllOp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualAllOp?: (ctx: QualAllOpContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.subqueryOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubqueryOperator?: (ctx: SubqueryOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.exprList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExprList?: (ctx: ExprListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.columnExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnExpr?: (ctx: ColumnExprContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.columnExprNoParen`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnExprNoParen?: (ctx: ColumnExprNoParenContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.funcArgList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFuncArgList?: (ctx: FuncArgListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.funcArgExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFuncArgExpr?: (ctx: FuncArgExprContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.arrayExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayExpr?: (ctx: ArrayExprContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.extractArg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtractArg?: (ctx: ExtractArgContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.unicodeNormalForm`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnicodeNormalForm?: (ctx: UnicodeNormalFormContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.substrList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubstrList?: (ctx: SubstrListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.when_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhen_clause?: (ctx: When_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.indirectionEl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndirectionEl?: (ctx: IndirectionElContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.indirection`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndirection?: (ctx: IndirectionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.optIndirection`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptIndirection?: (ctx: OptIndirectionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.targetList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTargetList?: (ctx: TargetListContext) => Result;
    /**
     * Visit a parse tree produced by the `target_label`
     * labeled alternative in `PostgreSqlParser.targetEl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTarget_label?: (ctx: Target_labelContext) => Result;
    /**
     * Visit a parse tree produced by the `target_star`
     * labeled alternative in `PostgreSqlParser.targetEl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTarget_star?: (ctx: Target_starContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.qualifiedNameList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedNameList?: (ctx: QualifiedNameListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.tableNameList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableNameList?: (ctx: TableNameListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.schemaNameList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSchemaNameList?: (ctx: SchemaNameListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.databaseNameList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatabaseNameList?: (ctx: DatabaseNameListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.tableSpaceNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableSpaceNameCreate?: (ctx: TableSpaceNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.tableSpaceName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableSpaceName?: (ctx: TableSpaceNameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.tableNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableNameCreate?: (ctx: TableNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.tableName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableName?: (ctx: TableNameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.viewNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewNameCreate?: (ctx: ViewNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.viewName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewName?: (ctx: ViewNameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.qualifiedName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedName?: (ctx: QualifiedNameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.tableSpaceNameList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableSpaceNameList?: (ctx: TableSpaceNameListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.nameList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNameList?: (ctx: NameListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.databaseNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatabaseNameCreate?: (ctx: DatabaseNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.databaseName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatabaseName?: (ctx: DatabaseNameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.schemaName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSchemaName?: (ctx: SchemaNameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.routineNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoutineNameCreate?: (ctx: RoutineNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.routineName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoutineName?: (ctx: RoutineNameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.procedureName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedureName?: (ctx: ProcedureNameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.procedureNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedureNameCreate?: (ctx: ProcedureNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.columnName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnName?: (ctx: ColumnNameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.columnNamePath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNamePath?: (ctx: ColumnNamePathContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.columnNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameCreate?: (ctx: ColumnNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.functionNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionNameCreate?: (ctx: FunctionNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.functionName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionName?: (ctx: FunctionNameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stringConst`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringConst?: (ctx: StringConstContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.anysconst`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnysconst?: (ctx: AnysconstContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.signedConst`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSignedConst?: (ctx: SignedConstContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.roleSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoleSpec?: (ctx: RoleSpecContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.roleList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoleList?: (ctx: RoleListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.colId`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColId?: (ctx: ColIdContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.typeFunctionName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeFunctionName?: (ctx: TypeFunctionNameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.nonReservedWord`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonReservedWord?: (ctx: NonReservedWordContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.colLabel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColLabel?: (ctx: ColLabelContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifier?: (ctx: IdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.unreservedKeyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnreservedKeyword?: (ctx: UnreservedKeywordContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.colNameKeyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColNameKeyword?: (ctx: ColNameKeywordContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.typeFuncNameKeyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeFuncNameKeyword?: (ctx: TypeFuncNameKeywordContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.reservedKeyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReservedKeyword?: (ctx: ReservedKeywordContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.plBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPlBlock?: (ctx: PlBlockContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.labelDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLabelDecl?: (ctx: LabelDeclContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.declStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeclStatement?: (ctx: DeclStatementContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.declCursorArg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeclCursorArg?: (ctx: DeclCursorArgContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.assignOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignOperator?: (ctx: AssignOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.procStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcStmt?: (ctx: ProcStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmtPerform`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmtPerform?: (ctx: StmtPerformContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmtCall`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmtCall?: (ctx: StmtCallContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmtAssign`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmtAssign?: (ctx: StmtAssignContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmtGetdiag`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmtGetdiag?: (ctx: StmtGetdiagContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.getdiagListItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGetdiagListItem?: (ctx: GetdiagListItemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.assignVar`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignVar?: (ctx: AssignVarContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmtIf`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmtIf?: (ctx: StmtIfContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmtElse`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmtElse?: (ctx: StmtElseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmtCase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmtCase?: (ctx: StmtCaseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmtLoopWhileFor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmtLoopWhileFor?: (ctx: StmtLoopWhileForContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.forControl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForControl?: (ctx: ForControlContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmtForeach`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmtForeach?: (ctx: StmtForeachContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmtExit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmtExit?: (ctx: StmtExitContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmtReturn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmtReturn?: (ctx: StmtReturnContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmtRaise`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmtRaise?: (ctx: StmtRaiseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.optRaiseUsingElem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptRaiseUsingElem?: (ctx: OptRaiseUsingElemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmtAssert`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmtAssert?: (ctx: StmtAssertContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.loopBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoopBody?: (ctx: LoopBodyContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmtExecsql`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmtExecsql?: (ctx: StmtExecsqlContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmtDynexecute`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmtDynexecute?: (ctx: StmtDynexecuteContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.optExecuteInto`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptExecuteInto?: (ctx: OptExecuteIntoContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmtOpen`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmtOpen?: (ctx: StmtOpenContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.optOpenBoundListItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptOpenBoundListItem?: (ctx: OptOpenBoundListItemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmtFetch`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmtFetch?: (ctx: StmtFetchContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.optFetchFirection`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptFetchFirection?: (ctx: OptFetchFirectionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmtMove`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmtMove?: (ctx: StmtMoveContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.mergeStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMergeStmt?: (ctx: MergeStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.dataSource`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDataSource?: (ctx: DataSourceContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.mergeWhenClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMergeWhenClause?: (ctx: MergeWhenClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.mergeInsert`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMergeInsert?: (ctx: MergeInsertContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.mergeUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMergeUpdate?: (ctx: MergeUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.defaultValuesOrValues`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefaultValuesOrValues?: (ctx: DefaultValuesOrValuesContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.exprofdefault`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExprofdefault?: (ctx: ExprofdefaultContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmtClose`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmtClose?: (ctx: StmtCloseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmtNull`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmtNull?: (ctx: StmtNullContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmtCommitOrRollback`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmtCommitOrRollback?: (ctx: StmtCommitOrRollbackContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmtSet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmtSet?: (ctx: StmtSetContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.cursorVariable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCursorVariable?: (ctx: CursorVariableContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.exceptionSect`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExceptionSect?: (ctx: ExceptionSectContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.procCondition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcCondition?: (ctx: ProcConditionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.anyIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnyIdentifier?: (ctx: AnyIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.sqlExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSqlExpression?: (ctx: SqlExpressionContext) => Result;
}

