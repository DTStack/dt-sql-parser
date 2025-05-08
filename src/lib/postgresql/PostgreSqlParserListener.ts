// Generated from dt-sql-parser/src/grammar/postgresql/PostgreSqlParser.g4 by ANTLR 4.13.1

// @ts-nocheck

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


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
 * This interface defines a complete listener for a parse tree produced by
 * `PostgreSqlParser`.
 */
export class PostgreSqlParserListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `PostgreSqlParser.program`.
     * @param ctx the parse tree
     */
    enterProgram?: (ctx: ProgramContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.program`.
     * @param ctx the parse tree
     */
    exitProgram?: (ctx: ProgramContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.singleStmt`.
     * @param ctx the parse tree
     */
    enterSingleStmt?: (ctx: SingleStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.singleStmt`.
     * @param ctx the parse tree
     */
    exitSingleStmt?: (ctx: SingleStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmt`.
     * @param ctx the parse tree
     */
    enterStmt?: (ctx: StmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmt`.
     * @param ctx the parse tree
     */
    exitStmt?: (ctx: StmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.callStmt`.
     * @param ctx the parse tree
     */
    enterCallStmt?: (ctx: CallStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.callStmt`.
     * @param ctx the parse tree
     */
    exitCallStmt?: (ctx: CallStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createRoleStmt`.
     * @param ctx the parse tree
     */
    enterCreateRoleStmt?: (ctx: CreateRoleStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createRoleStmt`.
     * @param ctx the parse tree
     */
    exitCreateRoleStmt?: (ctx: CreateRoleStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterOperatorRoleElem`.
     * @param ctx the parse tree
     */
    enterAlterOperatorRoleElem?: (ctx: AlterOperatorRoleElemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterOperatorRoleElem`.
     * @param ctx the parse tree
     */
    exitAlterOperatorRoleElem?: (ctx: AlterOperatorRoleElemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createOperatorRoleElem`.
     * @param ctx the parse tree
     */
    enterCreateOperatorRoleElem?: (ctx: CreateOperatorRoleElemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createOperatorRoleElem`.
     * @param ctx the parse tree
     */
    exitCreateOperatorRoleElem?: (ctx: CreateOperatorRoleElemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createUserStmt`.
     * @param ctx the parse tree
     */
    enterCreateUserStmt?: (ctx: CreateUserStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createUserStmt`.
     * @param ctx the parse tree
     */
    exitCreateUserStmt?: (ctx: CreateUserStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterRoleStmt`.
     * @param ctx the parse tree
     */
    enterAlterRoleStmt?: (ctx: AlterRoleStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterRoleStmt`.
     * @param ctx the parse tree
     */
    exitAlterRoleStmt?: (ctx: AlterRoleStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterRoleSetStmt`.
     * @param ctx the parse tree
     */
    enterAlterRoleSetStmt?: (ctx: AlterRoleSetStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterRoleSetStmt`.
     * @param ctx the parse tree
     */
    exitAlterRoleSetStmt?: (ctx: AlterRoleSetStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterRoutineStmt`.
     * @param ctx the parse tree
     */
    enterAlterRoutineStmt?: (ctx: AlterRoutineStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterRoutineStmt`.
     * @param ctx the parse tree
     */
    exitAlterRoutineStmt?: (ctx: AlterRoutineStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterRoutineClause`.
     * @param ctx the parse tree
     */
    enterAlterRoutineClause?: (ctx: AlterRoutineClauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterRoutineClause`.
     * @param ctx the parse tree
     */
    exitAlterRoutineClause?: (ctx: AlterRoutineClauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.routineAction`.
     * @param ctx the parse tree
     */
    enterRoutineAction?: (ctx: RoutineActionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.routineAction`.
     * @param ctx the parse tree
     */
    exitRoutineAction?: (ctx: RoutineActionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createGroupStmt`.
     * @param ctx the parse tree
     */
    enterCreateGroupStmt?: (ctx: CreateGroupStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createGroupStmt`.
     * @param ctx the parse tree
     */
    exitCreateGroupStmt?: (ctx: CreateGroupStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterGroupStmt`.
     * @param ctx the parse tree
     */
    enterAlterGroupStmt?: (ctx: AlterGroupStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterGroupStmt`.
     * @param ctx the parse tree
     */
    exitAlterGroupStmt?: (ctx: AlterGroupStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createSchemaStmt`.
     * @param ctx the parse tree
     */
    enterCreateSchemaStmt?: (ctx: CreateSchemaStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createSchemaStmt`.
     * @param ctx the parse tree
     */
    exitCreateSchemaStmt?: (ctx: CreateSchemaStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.schemaNameCreate`.
     * @param ctx the parse tree
     */
    enterSchemaNameCreate?: (ctx: SchemaNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.schemaNameCreate`.
     * @param ctx the parse tree
     */
    exitSchemaNameCreate?: (ctx: SchemaNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.schemaStmt`.
     * @param ctx the parse tree
     */
    enterSchemaStmt?: (ctx: SchemaStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.schemaStmt`.
     * @param ctx the parse tree
     */
    exitSchemaStmt?: (ctx: SchemaStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.variableSetStmt`.
     * @param ctx the parse tree
     */
    enterVariableSetStmt?: (ctx: VariableSetStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.variableSetStmt`.
     * @param ctx the parse tree
     */
    exitVariableSetStmt?: (ctx: VariableSetStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.setRest`.
     * @param ctx the parse tree
     */
    enterSetRest?: (ctx: SetRestContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.setRest`.
     * @param ctx the parse tree
     */
    exitSetRest?: (ctx: SetRestContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.genericSet`.
     * @param ctx the parse tree
     */
    enterGenericSet?: (ctx: GenericSetContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.genericSet`.
     * @param ctx the parse tree
     */
    exitGenericSet?: (ctx: GenericSetContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.setRestMore`.
     * @param ctx the parse tree
     */
    enterSetRestMore?: (ctx: SetRestMoreContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.setRestMore`.
     * @param ctx the parse tree
     */
    exitSetRestMore?: (ctx: SetRestMoreContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.varName`.
     * @param ctx the parse tree
     */
    enterVarName?: (ctx: VarNameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.varName`.
     * @param ctx the parse tree
     */
    exitVarName?: (ctx: VarNameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.varList`.
     * @param ctx the parse tree
     */
    enterVarList?: (ctx: VarListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.varList`.
     * @param ctx the parse tree
     */
    exitVarList?: (ctx: VarListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.varValue`.
     * @param ctx the parse tree
     */
    enterVarValue?: (ctx: VarValueContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.varValue`.
     * @param ctx the parse tree
     */
    exitVarValue?: (ctx: VarValueContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.isoLevel`.
     * @param ctx the parse tree
     */
    enterIsoLevel?: (ctx: IsoLevelContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.isoLevel`.
     * @param ctx the parse tree
     */
    exitIsoLevel?: (ctx: IsoLevelContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.optBooleanOrStringColumn`.
     * @param ctx the parse tree
     */
    enterOptBooleanOrStringColumn?: (ctx: OptBooleanOrStringColumnContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.optBooleanOrStringColumn`.
     * @param ctx the parse tree
     */
    exitOptBooleanOrStringColumn?: (ctx: OptBooleanOrStringColumnContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.booleanOrString`.
     * @param ctx the parse tree
     */
    enterBooleanOrString?: (ctx: BooleanOrStringContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.booleanOrString`.
     * @param ctx the parse tree
     */
    exitBooleanOrString?: (ctx: BooleanOrStringContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.zoneValue`.
     * @param ctx the parse tree
     */
    enterZoneValue?: (ctx: ZoneValueContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.zoneValue`.
     * @param ctx the parse tree
     */
    exitZoneValue?: (ctx: ZoneValueContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.nonReservedWordOrStringConst`.
     * @param ctx the parse tree
     */
    enterNonReservedWordOrStringConst?: (ctx: NonReservedWordOrStringConstContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.nonReservedWordOrStringConst`.
     * @param ctx the parse tree
     */
    exitNonReservedWordOrStringConst?: (ctx: NonReservedWordOrStringConstContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.variableResetStmt`.
     * @param ctx the parse tree
     */
    enterVariableResetStmt?: (ctx: VariableResetStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.variableResetStmt`.
     * @param ctx the parse tree
     */
    exitVariableResetStmt?: (ctx: VariableResetStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.resetRest`.
     * @param ctx the parse tree
     */
    enterResetRest?: (ctx: ResetRestContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.resetRest`.
     * @param ctx the parse tree
     */
    exitResetRest?: (ctx: ResetRestContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.setOrResetClause`.
     * @param ctx the parse tree
     */
    enterSetOrResetClause?: (ctx: SetOrResetClauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.setOrResetClause`.
     * @param ctx the parse tree
     */
    exitSetOrResetClause?: (ctx: SetOrResetClauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.functionSetOrResetClause`.
     * @param ctx the parse tree
     */
    enterFunctionSetOrResetClause?: (ctx: FunctionSetOrResetClauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.functionSetOrResetClause`.
     * @param ctx the parse tree
     */
    exitFunctionSetOrResetClause?: (ctx: FunctionSetOrResetClauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.variableShowStmt`.
     * @param ctx the parse tree
     */
    enterVariableShowStmt?: (ctx: VariableShowStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.variableShowStmt`.
     * @param ctx the parse tree
     */
    exitVariableShowStmt?: (ctx: VariableShowStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.constraintsSetStmt`.
     * @param ctx the parse tree
     */
    enterConstraintsSetStmt?: (ctx: ConstraintsSetStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.constraintsSetStmt`.
     * @param ctx the parse tree
     */
    exitConstraintsSetStmt?: (ctx: ConstraintsSetStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.checkPointStmt`.
     * @param ctx the parse tree
     */
    enterCheckPointStmt?: (ctx: CheckPointStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.checkPointStmt`.
     * @param ctx the parse tree
     */
    exitCheckPointStmt?: (ctx: CheckPointStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.discardStmt`.
     * @param ctx the parse tree
     */
    enterDiscardStmt?: (ctx: DiscardStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.discardStmt`.
     * @param ctx the parse tree
     */
    exitDiscardStmt?: (ctx: DiscardStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterTableStmt`.
     * @param ctx the parse tree
     */
    enterAlterTableStmt?: (ctx: AlterTableStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterTableStmt`.
     * @param ctx the parse tree
     */
    exitAlterTableStmt?: (ctx: AlterTableStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterTableCmds`.
     * @param ctx the parse tree
     */
    enterAlterTableCmds?: (ctx: AlterTableCmdsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterTableCmds`.
     * @param ctx the parse tree
     */
    exitAlterTableCmds?: (ctx: AlterTableCmdsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.partitionCmd`.
     * @param ctx the parse tree
     */
    enterPartitionCmd?: (ctx: PartitionCmdContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.partitionCmd`.
     * @param ctx the parse tree
     */
    exitPartitionCmd?: (ctx: PartitionCmdContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.indexPartitionCmd`.
     * @param ctx the parse tree
     */
    enterIndexPartitionCmd?: (ctx: IndexPartitionCmdContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.indexPartitionCmd`.
     * @param ctx the parse tree
     */
    exitIndexPartitionCmd?: (ctx: IndexPartitionCmdContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterTableCmd`.
     * @param ctx the parse tree
     */
    enterAlterTableCmd?: (ctx: AlterTableCmdContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterTableCmd`.
     * @param ctx the parse tree
     */
    exitAlterTableCmd?: (ctx: AlterTableCmdContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterColumnDefault`.
     * @param ctx the parse tree
     */
    enterAlterColumnDefault?: (ctx: AlterColumnDefaultContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterColumnDefault`.
     * @param ctx the parse tree
     */
    exitAlterColumnDefault?: (ctx: AlterColumnDefaultContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.optDropBehavior`.
     * @param ctx the parse tree
     */
    enterOptDropBehavior?: (ctx: OptDropBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.optDropBehavior`.
     * @param ctx the parse tree
     */
    exitOptDropBehavior?: (ctx: OptDropBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.collateClause`.
     * @param ctx the parse tree
     */
    enterCollateClause?: (ctx: CollateClauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.collateClause`.
     * @param ctx the parse tree
     */
    exitCollateClause?: (ctx: CollateClauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.relOptions`.
     * @param ctx the parse tree
     */
    enterRelOptions?: (ctx: RelOptionsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.relOptions`.
     * @param ctx the parse tree
     */
    exitRelOptions?: (ctx: RelOptionsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.optRelOptions`.
     * @param ctx the parse tree
     */
    enterOptRelOptions?: (ctx: OptRelOptionsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.optRelOptions`.
     * @param ctx the parse tree
     */
    exitOptRelOptions?: (ctx: OptRelOptionsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.relOptionElem`.
     * @param ctx the parse tree
     */
    enterRelOptionElem?: (ctx: RelOptionElemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.relOptionElem`.
     * @param ctx the parse tree
     */
    exitRelOptionElem?: (ctx: RelOptionElemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.partitionBoundSpec`.
     * @param ctx the parse tree
     */
    enterPartitionBoundSpec?: (ctx: PartitionBoundSpecContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.partitionBoundSpec`.
     * @param ctx the parse tree
     */
    exitPartitionBoundSpec?: (ctx: PartitionBoundSpecContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterCompositeTypeStmt`.
     * @param ctx the parse tree
     */
    enterAlterCompositeTypeStmt?: (ctx: AlterCompositeTypeStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterCompositeTypeStmt`.
     * @param ctx the parse tree
     */
    exitAlterCompositeTypeStmt?: (ctx: AlterCompositeTypeStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterTypeCmd`.
     * @param ctx the parse tree
     */
    enterAlterTypeCmd?: (ctx: AlterTypeCmdContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterTypeCmd`.
     * @param ctx the parse tree
     */
    exitAlterTypeCmd?: (ctx: AlterTypeCmdContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.closePortalStmt`.
     * @param ctx the parse tree
     */
    enterClosePortalStmt?: (ctx: ClosePortalStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.closePortalStmt`.
     * @param ctx the parse tree
     */
    exitClosePortalStmt?: (ctx: ClosePortalStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.copyStmt`.
     * @param ctx the parse tree
     */
    enterCopyStmt?: (ctx: CopyStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.copyStmt`.
     * @param ctx the parse tree
     */
    exitCopyStmt?: (ctx: CopyStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.copyOptionsNoparens`.
     * @param ctx the parse tree
     */
    enterCopyOptionsNoparens?: (ctx: CopyOptionsNoparensContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.copyOptionsNoparens`.
     * @param ctx the parse tree
     */
    exitCopyOptionsNoparens?: (ctx: CopyOptionsNoparensContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.copyOptions`.
     * @param ctx the parse tree
     */
    enterCopyOptions?: (ctx: CopyOptionsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.copyOptions`.
     * @param ctx the parse tree
     */
    exitCopyOptions?: (ctx: CopyOptionsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.copyGenericOptElem`.
     * @param ctx the parse tree
     */
    enterCopyGenericOptElem?: (ctx: CopyGenericOptElemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.copyGenericOptElem`.
     * @param ctx the parse tree
     */
    exitCopyGenericOptElem?: (ctx: CopyGenericOptElemContext) => void;
    /**
     * Enter a parse tree produced by the `columnCreateTable`
     * labeled alternative in `PostgreSqlParser.createStmt`.
     * @param ctx the parse tree
     */
    enterColumnCreateTable?: (ctx: ColumnCreateTableContext) => void;
    /**
     * Exit a parse tree produced by the `columnCreateTable`
     * labeled alternative in `PostgreSqlParser.createStmt`.
     * @param ctx the parse tree
     */
    exitColumnCreateTable?: (ctx: ColumnCreateTableContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.optTemp`.
     * @param ctx the parse tree
     */
    enterOptTemp?: (ctx: OptTempContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.optTemp`.
     * @param ctx the parse tree
     */
    exitOptTemp?: (ctx: OptTempContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.optTypedTableElEmentList`.
     * @param ctx the parse tree
     */
    enterOptTypedTableElEmentList?: (ctx: OptTypedTableElEmentListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.optTypedTableElEmentList`.
     * @param ctx the parse tree
     */
    exitOptTypedTableElEmentList?: (ctx: OptTypedTableElEmentListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.tableElementList`.
     * @param ctx the parse tree
     */
    enterTableElementList?: (ctx: TableElementListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.tableElementList`.
     * @param ctx the parse tree
     */
    exitTableElementList?: (ctx: TableElementListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.tableElement`.
     * @param ctx the parse tree
     */
    enterTableElement?: (ctx: TableElementContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.tableElement`.
     * @param ctx the parse tree
     */
    exitTableElement?: (ctx: TableElementContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.typedTableElement`.
     * @param ctx the parse tree
     */
    enterTypedTableElement?: (ctx: TypedTableElementContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.typedTableElement`.
     * @param ctx the parse tree
     */
    exitTypedTableElement?: (ctx: TypedTableElementContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.column_def`.
     * @param ctx the parse tree
     */
    enterColumn_def?: (ctx: Column_defContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.column_def`.
     * @param ctx the parse tree
     */
    exitColumn_def?: (ctx: Column_defContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.colConstraint`.
     * @param ctx the parse tree
     */
    enterColConstraint?: (ctx: ColConstraintContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.colConstraint`.
     * @param ctx the parse tree
     */
    exitColConstraint?: (ctx: ColConstraintContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.colConstraintElem`.
     * @param ctx the parse tree
     */
    enterColConstraintElem?: (ctx: ColConstraintElemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.colConstraintElem`.
     * @param ctx the parse tree
     */
    exitColConstraintElem?: (ctx: ColConstraintElemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.generatedWhen`.
     * @param ctx the parse tree
     */
    enterGeneratedWhen?: (ctx: GeneratedWhenContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.generatedWhen`.
     * @param ctx the parse tree
     */
    exitGeneratedWhen?: (ctx: GeneratedWhenContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.tableLikeOption`.
     * @param ctx the parse tree
     */
    enterTableLikeOption?: (ctx: TableLikeOptionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.tableLikeOption`.
     * @param ctx the parse tree
     */
    exitTableLikeOption?: (ctx: TableLikeOptionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.constraintElem`.
     * @param ctx the parse tree
     */
    enterConstraintElem?: (ctx: ConstraintElemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.constraintElem`.
     * @param ctx the parse tree
     */
    exitConstraintElem?: (ctx: ConstraintElemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.optColumnList`.
     * @param ctx the parse tree
     */
    enterOptColumnList?: (ctx: OptColumnListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.optColumnList`.
     * @param ctx the parse tree
     */
    exitOptColumnList?: (ctx: OptColumnListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.columnListCreate`.
     * @param ctx the parse tree
     */
    enterColumnListCreate?: (ctx: ColumnListCreateContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.columnListCreate`.
     * @param ctx the parse tree
     */
    exitColumnListCreate?: (ctx: ColumnListCreateContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.columnList`.
     * @param ctx the parse tree
     */
    enterColumnList?: (ctx: ColumnListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.columnList`.
     * @param ctx the parse tree
     */
    exitColumnList?: (ctx: ColumnListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.columnListInclude`.
     * @param ctx the parse tree
     */
    enterColumnListInclude?: (ctx: ColumnListIncludeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.columnListInclude`.
     * @param ctx the parse tree
     */
    exitColumnListInclude?: (ctx: ColumnListIncludeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.keyMatch`.
     * @param ctx the parse tree
     */
    enterKeyMatch?: (ctx: KeyMatchContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.keyMatch`.
     * @param ctx the parse tree
     */
    exitKeyMatch?: (ctx: KeyMatchContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.exclusionConstraintElem`.
     * @param ctx the parse tree
     */
    enterExclusionConstraintElem?: (ctx: ExclusionConstraintElemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.exclusionConstraintElem`.
     * @param ctx the parse tree
     */
    exitExclusionConstraintElem?: (ctx: ExclusionConstraintElemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.keyActions`.
     * @param ctx the parse tree
     */
    enterKeyActions?: (ctx: KeyActionsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.keyActions`.
     * @param ctx the parse tree
     */
    exitKeyActions?: (ctx: KeyActionsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.keyUpdate`.
     * @param ctx the parse tree
     */
    enterKeyUpdate?: (ctx: KeyUpdateContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.keyUpdate`.
     * @param ctx the parse tree
     */
    exitKeyUpdate?: (ctx: KeyUpdateContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.keyDelete`.
     * @param ctx the parse tree
     */
    enterKeyDelete?: (ctx: KeyDeleteContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.keyDelete`.
     * @param ctx the parse tree
     */
    exitKeyDelete?: (ctx: KeyDeleteContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.keyAction`.
     * @param ctx the parse tree
     */
    enterKeyAction?: (ctx: KeyActionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.keyAction`.
     * @param ctx the parse tree
     */
    exitKeyAction?: (ctx: KeyActionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.optInherit`.
     * @param ctx the parse tree
     */
    enterOptInherit?: (ctx: OptInheritContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.optInherit`.
     * @param ctx the parse tree
     */
    exitOptInherit?: (ctx: OptInheritContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.partitionSpec`.
     * @param ctx the parse tree
     */
    enterPartitionSpec?: (ctx: PartitionSpecContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.partitionSpec`.
     * @param ctx the parse tree
     */
    exitPartitionSpec?: (ctx: PartitionSpecContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.partElem`.
     * @param ctx the parse tree
     */
    enterPartElem?: (ctx: PartElemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.partElem`.
     * @param ctx the parse tree
     */
    exitPartElem?: (ctx: PartElemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.tableAccessMethodClause`.
     * @param ctx the parse tree
     */
    enterTableAccessMethodClause?: (ctx: TableAccessMethodClauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.tableAccessMethodClause`.
     * @param ctx the parse tree
     */
    exitTableAccessMethodClause?: (ctx: TableAccessMethodClauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.optWith`.
     * @param ctx the parse tree
     */
    enterOptWith?: (ctx: OptWithContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.optWith`.
     * @param ctx the parse tree
     */
    exitOptWith?: (ctx: OptWithContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.onCommitOption`.
     * @param ctx the parse tree
     */
    enterOnCommitOption?: (ctx: OnCommitOptionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.onCommitOption`.
     * @param ctx the parse tree
     */
    exitOnCommitOption?: (ctx: OnCommitOptionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.optTableSpace`.
     * @param ctx the parse tree
     */
    enterOptTableSpace?: (ctx: OptTableSpaceContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.optTableSpace`.
     * @param ctx the parse tree
     */
    exitOptTableSpace?: (ctx: OptTableSpaceContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.optConstableSpace`.
     * @param ctx the parse tree
     */
    enterOptConstableSpace?: (ctx: OptConstableSpaceContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.optConstableSpace`.
     * @param ctx the parse tree
     */
    exitOptConstableSpace?: (ctx: OptConstableSpaceContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.existingIndex`.
     * @param ctx the parse tree
     */
    enterExistingIndex?: (ctx: ExistingIndexContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.existingIndex`.
     * @param ctx the parse tree
     */
    exitExistingIndex?: (ctx: ExistingIndexContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createStatsStmt`.
     * @param ctx the parse tree
     */
    enterCreateStatsStmt?: (ctx: CreateStatsStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createStatsStmt`.
     * @param ctx the parse tree
     */
    exitCreateStatsStmt?: (ctx: CreateStatsStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterStatsStmt`.
     * @param ctx the parse tree
     */
    enterAlterStatsStmt?: (ctx: AlterStatsStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterStatsStmt`.
     * @param ctx the parse tree
     */
    exitAlterStatsStmt?: (ctx: AlterStatsStmtContext) => void;
    /**
     * Enter a parse tree produced by the `queryCreateTable`
     * labeled alternative in `PostgreSqlParser.createAsStmt`.
     * @param ctx the parse tree
     */
    enterQueryCreateTable?: (ctx: QueryCreateTableContext) => void;
    /**
     * Exit a parse tree produced by the `queryCreateTable`
     * labeled alternative in `PostgreSqlParser.createAsStmt`.
     * @param ctx the parse tree
     */
    exitQueryCreateTable?: (ctx: QueryCreateTableContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createAsTarget`.
     * @param ctx the parse tree
     */
    enterCreateAsTarget?: (ctx: CreateAsTargetContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createAsTarget`.
     * @param ctx the parse tree
     */
    exitCreateAsTarget?: (ctx: CreateAsTargetContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.optWithData`.
     * @param ctx the parse tree
     */
    enterOptWithData?: (ctx: OptWithDataContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.optWithData`.
     * @param ctx the parse tree
     */
    exitOptWithData?: (ctx: OptWithDataContext) => void;
    /**
     * Enter a parse tree produced by the `createMaterializedView`
     * labeled alternative in `PostgreSqlParser.createMaterializedViewStmt`.
     * @param ctx the parse tree
     */
    enterCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => void;
    /**
     * Exit a parse tree produced by the `createMaterializedView`
     * labeled alternative in `PostgreSqlParser.createMaterializedViewStmt`.
     * @param ctx the parse tree
     */
    exitCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.refreshMaterializedViewStmt`.
     * @param ctx the parse tree
     */
    enterRefreshMaterializedViewStmt?: (ctx: RefreshMaterializedViewStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.refreshMaterializedViewStmt`.
     * @param ctx the parse tree
     */
    exitRefreshMaterializedViewStmt?: (ctx: RefreshMaterializedViewStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createSeqStmt`.
     * @param ctx the parse tree
     */
    enterCreateSeqStmt?: (ctx: CreateSeqStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createSeqStmt`.
     * @param ctx the parse tree
     */
    exitCreateSeqStmt?: (ctx: CreateSeqStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterSeqStmt`.
     * @param ctx the parse tree
     */
    enterAlterSeqStmt?: (ctx: AlterSeqStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterSeqStmt`.
     * @param ctx the parse tree
     */
    exitAlterSeqStmt?: (ctx: AlterSeqStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.seqOptElem`.
     * @param ctx the parse tree
     */
    enterSeqOptElem?: (ctx: SeqOptElemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.seqOptElem`.
     * @param ctx the parse tree
     */
    exitSeqOptElem?: (ctx: SeqOptElemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.numericOnly`.
     * @param ctx the parse tree
     */
    enterNumericOnly?: (ctx: NumericOnlyContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.numericOnly`.
     * @param ctx the parse tree
     */
    exitNumericOnly?: (ctx: NumericOnlyContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createProceduralLangStmt`.
     * @param ctx the parse tree
     */
    enterCreateProceduralLangStmt?: (ctx: CreateProceduralLangStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createProceduralLangStmt`.
     * @param ctx the parse tree
     */
    exitCreateProceduralLangStmt?: (ctx: CreateProceduralLangStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createTableSpaceStmt`.
     * @param ctx the parse tree
     */
    enterCreateTableSpaceStmt?: (ctx: CreateTableSpaceStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createTableSpaceStmt`.
     * @param ctx the parse tree
     */
    exitCreateTableSpaceStmt?: (ctx: CreateTableSpaceStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createExtensionStmt`.
     * @param ctx the parse tree
     */
    enterCreateExtensionStmt?: (ctx: CreateExtensionStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createExtensionStmt`.
     * @param ctx the parse tree
     */
    exitCreateExtensionStmt?: (ctx: CreateExtensionStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterExtensionStmt`.
     * @param ctx the parse tree
     */
    enterAlterExtensionStmt?: (ctx: AlterExtensionStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterExtensionStmt`.
     * @param ctx the parse tree
     */
    exitAlterExtensionStmt?: (ctx: AlterExtensionStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterExtensionContentsStmt`.
     * @param ctx the parse tree
     */
    enterAlterExtensionContentsStmt?: (ctx: AlterExtensionContentsStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterExtensionContentsStmt`.
     * @param ctx the parse tree
     */
    exitAlterExtensionContentsStmt?: (ctx: AlterExtensionContentsStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createFdwStmt`.
     * @param ctx the parse tree
     */
    enterCreateFdwStmt?: (ctx: CreateFdwStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createFdwStmt`.
     * @param ctx the parse tree
     */
    exitCreateFdwStmt?: (ctx: CreateFdwStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.fdwOption`.
     * @param ctx the parse tree
     */
    enterFdwOption?: (ctx: FdwOptionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.fdwOption`.
     * @param ctx the parse tree
     */
    exitFdwOption?: (ctx: FdwOptionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterFdwStmt`.
     * @param ctx the parse tree
     */
    enterAlterFdwStmt?: (ctx: AlterFdwStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterFdwStmt`.
     * @param ctx the parse tree
     */
    exitAlterFdwStmt?: (ctx: AlterFdwStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createGenericOptions`.
     * @param ctx the parse tree
     */
    enterCreateGenericOptions?: (ctx: CreateGenericOptionsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createGenericOptions`.
     * @param ctx the parse tree
     */
    exitCreateGenericOptions?: (ctx: CreateGenericOptionsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterGenericOptions`.
     * @param ctx the parse tree
     */
    enterAlterGenericOptions?: (ctx: AlterGenericOptionsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterGenericOptions`.
     * @param ctx the parse tree
     */
    exitAlterGenericOptions?: (ctx: AlterGenericOptionsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterGenericOptionElem`.
     * @param ctx the parse tree
     */
    enterAlterGenericOptionElem?: (ctx: AlterGenericOptionElemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterGenericOptionElem`.
     * @param ctx the parse tree
     */
    exitAlterGenericOptionElem?: (ctx: AlterGenericOptionElemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.genericOptionElem`.
     * @param ctx the parse tree
     */
    enterGenericOptionElem?: (ctx: GenericOptionElemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.genericOptionElem`.
     * @param ctx the parse tree
     */
    exitGenericOptionElem?: (ctx: GenericOptionElemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createForeignServerStmt`.
     * @param ctx the parse tree
     */
    enterCreateForeignServerStmt?: (ctx: CreateForeignServerStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createForeignServerStmt`.
     * @param ctx the parse tree
     */
    exitCreateForeignServerStmt?: (ctx: CreateForeignServerStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.foreignServerVersion`.
     * @param ctx the parse tree
     */
    enterForeignServerVersion?: (ctx: ForeignServerVersionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.foreignServerVersion`.
     * @param ctx the parse tree
     */
    exitForeignServerVersion?: (ctx: ForeignServerVersionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterForeignServerStmt`.
     * @param ctx the parse tree
     */
    enterAlterForeignServerStmt?: (ctx: AlterForeignServerStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterForeignServerStmt`.
     * @param ctx the parse tree
     */
    exitAlterForeignServerStmt?: (ctx: AlterForeignServerStmtContext) => void;
    /**
     * Enter a parse tree produced by the `createForeignTable`
     * labeled alternative in `PostgreSqlParser.createForeignTableStmt`.
     * @param ctx the parse tree
     */
    enterCreateForeignTable?: (ctx: CreateForeignTableContext) => void;
    /**
     * Exit a parse tree produced by the `createForeignTable`
     * labeled alternative in `PostgreSqlParser.createForeignTableStmt`.
     * @param ctx the parse tree
     */
    exitCreateForeignTable?: (ctx: CreateForeignTableContext) => void;
    /**
     * Enter a parse tree produced by the `createPartitionForeignTable`
     * labeled alternative in `PostgreSqlParser.createForeignTableStmt`.
     * @param ctx the parse tree
     */
    enterCreatePartitionForeignTable?: (ctx: CreatePartitionForeignTableContext) => void;
    /**
     * Exit a parse tree produced by the `createPartitionForeignTable`
     * labeled alternative in `PostgreSqlParser.createForeignTableStmt`.
     * @param ctx the parse tree
     */
    exitCreatePartitionForeignTable?: (ctx: CreatePartitionForeignTableContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.importForeignSchemaStmt`.
     * @param ctx the parse tree
     */
    enterImportForeignSchemaStmt?: (ctx: ImportForeignSchemaStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.importForeignSchemaStmt`.
     * @param ctx the parse tree
     */
    exitImportForeignSchemaStmt?: (ctx: ImportForeignSchemaStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createUserMappingStmt`.
     * @param ctx the parse tree
     */
    enterCreateUserMappingStmt?: (ctx: CreateUserMappingStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createUserMappingStmt`.
     * @param ctx the parse tree
     */
    exitCreateUserMappingStmt?: (ctx: CreateUserMappingStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterUserMappingStmt`.
     * @param ctx the parse tree
     */
    enterAlterUserMappingStmt?: (ctx: AlterUserMappingStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterUserMappingStmt`.
     * @param ctx the parse tree
     */
    exitAlterUserMappingStmt?: (ctx: AlterUserMappingStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createPolicyStmt`.
     * @param ctx the parse tree
     */
    enterCreatePolicyStmt?: (ctx: CreatePolicyStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createPolicyStmt`.
     * @param ctx the parse tree
     */
    exitCreatePolicyStmt?: (ctx: CreatePolicyStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterPolicyStmt`.
     * @param ctx the parse tree
     */
    enterAlterPolicyStmt?: (ctx: AlterPolicyStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterPolicyStmt`.
     * @param ctx the parse tree
     */
    exitAlterPolicyStmt?: (ctx: AlterPolicyStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterProcedureStmt`.
     * @param ctx the parse tree
     */
    enterAlterProcedureStmt?: (ctx: AlterProcedureStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterProcedureStmt`.
     * @param ctx the parse tree
     */
    exitAlterProcedureStmt?: (ctx: AlterProcedureStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.procedureAction`.
     * @param ctx the parse tree
     */
    enterProcedureAction?: (ctx: ProcedureActionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.procedureAction`.
     * @param ctx the parse tree
     */
    exitProcedureAction?: (ctx: ProcedureActionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.rowSecurityOptionalExpr`.
     * @param ctx the parse tree
     */
    enterRowSecurityOptionalExpr?: (ctx: RowSecurityOptionalExprContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.rowSecurityOptionalExpr`.
     * @param ctx the parse tree
     */
    exitRowSecurityOptionalExpr?: (ctx: RowSecurityOptionalExprContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.rowSecurityOptionalWithCheck`.
     * @param ctx the parse tree
     */
    enterRowSecurityOptionalWithCheck?: (ctx: RowSecurityOptionalWithCheckContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.rowSecurityOptionalWithCheck`.
     * @param ctx the parse tree
     */
    exitRowSecurityOptionalWithCheck?: (ctx: RowSecurityOptionalWithCheckContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createAccessMethodStmt`.
     * @param ctx the parse tree
     */
    enterCreateAccessMethodStmt?: (ctx: CreateAccessMethodStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createAccessMethodStmt`.
     * @param ctx the parse tree
     */
    exitCreateAccessMethodStmt?: (ctx: CreateAccessMethodStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createTrigStmt`.
     * @param ctx the parse tree
     */
    enterCreateTrigStmt?: (ctx: CreateTrigStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createTrigStmt`.
     * @param ctx the parse tree
     */
    exitCreateTrigStmt?: (ctx: CreateTrigStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.triggerActionTime`.
     * @param ctx the parse tree
     */
    enterTriggerActionTime?: (ctx: TriggerActionTimeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.triggerActionTime`.
     * @param ctx the parse tree
     */
    exitTriggerActionTime?: (ctx: TriggerActionTimeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.triggerEvents`.
     * @param ctx the parse tree
     */
    enterTriggerEvents?: (ctx: TriggerEventsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.triggerEvents`.
     * @param ctx the parse tree
     */
    exitTriggerEvents?: (ctx: TriggerEventsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.triggerOneEvent`.
     * @param ctx the parse tree
     */
    enterTriggerOneEvent?: (ctx: TriggerOneEventContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.triggerOneEvent`.
     * @param ctx the parse tree
     */
    exitTriggerOneEvent?: (ctx: TriggerOneEventContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.triggerWhen`.
     * @param ctx the parse tree
     */
    enterTriggerWhen?: (ctx: TriggerWhenContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.triggerWhen`.
     * @param ctx the parse tree
     */
    exitTriggerWhen?: (ctx: TriggerWhenContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.functionOrProcedure`.
     * @param ctx the parse tree
     */
    enterFunctionOrProcedure?: (ctx: FunctionOrProcedureContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.functionOrProcedure`.
     * @param ctx the parse tree
     */
    exitFunctionOrProcedure?: (ctx: FunctionOrProcedureContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.triggerFuncArgs`.
     * @param ctx the parse tree
     */
    enterTriggerFuncArgs?: (ctx: TriggerFuncArgsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.triggerFuncArgs`.
     * @param ctx the parse tree
     */
    exitTriggerFuncArgs?: (ctx: TriggerFuncArgsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.triggerFuncArg`.
     * @param ctx the parse tree
     */
    enterTriggerFuncArg?: (ctx: TriggerFuncArgContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.triggerFuncArg`.
     * @param ctx the parse tree
     */
    exitTriggerFuncArg?: (ctx: TriggerFuncArgContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.constraintAttributeElem`.
     * @param ctx the parse tree
     */
    enterConstraintAttributeElem?: (ctx: ConstraintAttributeElemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.constraintAttributeElem`.
     * @param ctx the parse tree
     */
    exitConstraintAttributeElem?: (ctx: ConstraintAttributeElemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createEventTrigStmt`.
     * @param ctx the parse tree
     */
    enterCreateEventTrigStmt?: (ctx: CreateEventTrigStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createEventTrigStmt`.
     * @param ctx the parse tree
     */
    exitCreateEventTrigStmt?: (ctx: CreateEventTrigStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.eventTriggerWhenItem`.
     * @param ctx the parse tree
     */
    enterEventTriggerWhenItem?: (ctx: EventTriggerWhenItemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.eventTriggerWhenItem`.
     * @param ctx the parse tree
     */
    exitEventTriggerWhenItem?: (ctx: EventTriggerWhenItemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterEventTrigStmt`.
     * @param ctx the parse tree
     */
    enterAlterEventTrigStmt?: (ctx: AlterEventTrigStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterEventTrigStmt`.
     * @param ctx the parse tree
     */
    exitAlterEventTrigStmt?: (ctx: AlterEventTrigStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createAssertionStmt`.
     * @param ctx the parse tree
     */
    enterCreateAssertionStmt?: (ctx: CreateAssertionStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createAssertionStmt`.
     * @param ctx the parse tree
     */
    exitCreateAssertionStmt?: (ctx: CreateAssertionStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.defineStmt`.
     * @param ctx the parse tree
     */
    enterDefineStmt?: (ctx: DefineStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.defineStmt`.
     * @param ctx the parse tree
     */
    exitDefineStmt?: (ctx: DefineStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.definition`.
     * @param ctx the parse tree
     */
    enterDefinition?: (ctx: DefinitionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.definition`.
     * @param ctx the parse tree
     */
    exitDefinition?: (ctx: DefinitionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.defElem`.
     * @param ctx the parse tree
     */
    enterDefElem?: (ctx: DefElemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.defElem`.
     * @param ctx the parse tree
     */
    exitDefElem?: (ctx: DefElemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.defArg`.
     * @param ctx the parse tree
     */
    enterDefArg?: (ctx: DefArgContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.defArg`.
     * @param ctx the parse tree
     */
    exitDefArg?: (ctx: DefArgContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.oldAggregateElem`.
     * @param ctx the parse tree
     */
    enterOldAggregateElem?: (ctx: OldAggregateElemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.oldAggregateElem`.
     * @param ctx the parse tree
     */
    exitOldAggregateElem?: (ctx: OldAggregateElemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterEnumStmt`.
     * @param ctx the parse tree
     */
    enterAlterEnumStmt?: (ctx: AlterEnumStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterEnumStmt`.
     * @param ctx the parse tree
     */
    exitAlterEnumStmt?: (ctx: AlterEnumStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.ifNotExists`.
     * @param ctx the parse tree
     */
    enterIfNotExists?: (ctx: IfNotExistsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.ifNotExists`.
     * @param ctx the parse tree
     */
    exitIfNotExists?: (ctx: IfNotExistsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createOperatorClassStmt`.
     * @param ctx the parse tree
     */
    enterCreateOperatorClassStmt?: (ctx: CreateOperatorClassStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createOperatorClassStmt`.
     * @param ctx the parse tree
     */
    exitCreateOperatorClassStmt?: (ctx: CreateOperatorClassStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.opClassItem`.
     * @param ctx the parse tree
     */
    enterOpClassItem?: (ctx: OpClassItemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.opClassItem`.
     * @param ctx the parse tree
     */
    exitOpClassItem?: (ctx: OpClassItemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createOperatorFamilyStmt`.
     * @param ctx the parse tree
     */
    enterCreateOperatorFamilyStmt?: (ctx: CreateOperatorFamilyStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createOperatorFamilyStmt`.
     * @param ctx the parse tree
     */
    exitCreateOperatorFamilyStmt?: (ctx: CreateOperatorFamilyStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterOperatorFamilyStmt`.
     * @param ctx the parse tree
     */
    enterAlterOperatorFamilyStmt?: (ctx: AlterOperatorFamilyStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterOperatorFamilyStmt`.
     * @param ctx the parse tree
     */
    exitAlterOperatorFamilyStmt?: (ctx: AlterOperatorFamilyStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.opClassDrop`.
     * @param ctx the parse tree
     */
    enterOpClassDrop?: (ctx: OpClassDropContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.opClassDrop`.
     * @param ctx the parse tree
     */
    exitOpClassDrop?: (ctx: OpClassDropContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.reassignOwnedStmt`.
     * @param ctx the parse tree
     */
    enterReassignOwnedStmt?: (ctx: ReassignOwnedStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.reassignOwnedStmt`.
     * @param ctx the parse tree
     */
    exitReassignOwnedStmt?: (ctx: ReassignOwnedStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.dropStmt`.
     * @param ctx the parse tree
     */
    enterDropStmt?: (ctx: DropStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.dropStmt`.
     * @param ctx the parse tree
     */
    exitDropStmt?: (ctx: DropStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.objectTypeAnyName`.
     * @param ctx the parse tree
     */
    enterObjectTypeAnyName?: (ctx: ObjectTypeAnyNameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.objectTypeAnyName`.
     * @param ctx the parse tree
     */
    exitObjectTypeAnyName?: (ctx: ObjectTypeAnyNameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.objectTypeName`.
     * @param ctx the parse tree
     */
    enterObjectTypeName?: (ctx: ObjectTypeNameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.objectTypeName`.
     * @param ctx the parse tree
     */
    exitObjectTypeName?: (ctx: ObjectTypeNameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.anyNameList`.
     * @param ctx the parse tree
     */
    enterAnyNameList?: (ctx: AnyNameListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.anyNameList`.
     * @param ctx the parse tree
     */
    exitAnyNameList?: (ctx: AnyNameListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.anyName`.
     * @param ctx the parse tree
     */
    enterAnyName?: (ctx: AnyNameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.anyName`.
     * @param ctx the parse tree
     */
    exitAnyName?: (ctx: AnyNameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.attrs`.
     * @param ctx the parse tree
     */
    enterAttrs?: (ctx: AttrsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.attrs`.
     * @param ctx the parse tree
     */
    exitAttrs?: (ctx: AttrsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.truncateStmt`.
     * @param ctx the parse tree
     */
    enterTruncateStmt?: (ctx: TruncateStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.truncateStmt`.
     * @param ctx the parse tree
     */
    exitTruncateStmt?: (ctx: TruncateStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.truncateTable`.
     * @param ctx the parse tree
     */
    enterTruncateTable?: (ctx: TruncateTableContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.truncateTable`.
     * @param ctx the parse tree
     */
    exitTruncateTable?: (ctx: TruncateTableContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.commentStmt`.
     * @param ctx the parse tree
     */
    enterCommentStmt?: (ctx: CommentStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.commentStmt`.
     * @param ctx the parse tree
     */
    exitCommentStmt?: (ctx: CommentStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.secLabelStmt`.
     * @param ctx the parse tree
     */
    enterSecLabelStmt?: (ctx: SecLabelStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.secLabelStmt`.
     * @param ctx the parse tree
     */
    exitSecLabelStmt?: (ctx: SecLabelStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.fetchStmt`.
     * @param ctx the parse tree
     */
    enterFetchStmt?: (ctx: FetchStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.fetchStmt`.
     * @param ctx the parse tree
     */
    exitFetchStmt?: (ctx: FetchStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.fetch_args`.
     * @param ctx the parse tree
     */
    enterFetch_args?: (ctx: Fetch_argsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.fetch_args`.
     * @param ctx the parse tree
     */
    exitFetch_args?: (ctx: Fetch_argsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.fromIn`.
     * @param ctx the parse tree
     */
    enterFromIn?: (ctx: FromInContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.fromIn`.
     * @param ctx the parse tree
     */
    exitFromIn?: (ctx: FromInContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.grantStmt`.
     * @param ctx the parse tree
     */
    enterGrantStmt?: (ctx: GrantStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.grantStmt`.
     * @param ctx the parse tree
     */
    exitGrantStmt?: (ctx: GrantStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.revokeStmt`.
     * @param ctx the parse tree
     */
    enterRevokeStmt?: (ctx: RevokeStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.revokeStmt`.
     * @param ctx the parse tree
     */
    exitRevokeStmt?: (ctx: RevokeStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.privileges`.
     * @param ctx the parse tree
     */
    enterPrivileges?: (ctx: PrivilegesContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.privileges`.
     * @param ctx the parse tree
     */
    exitPrivileges?: (ctx: PrivilegesContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.beforePrivilegeSelect`.
     * @param ctx the parse tree
     */
    enterBeforePrivilegeSelect?: (ctx: BeforePrivilegeSelectContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.beforePrivilegeSelect`.
     * @param ctx the parse tree
     */
    exitBeforePrivilegeSelect?: (ctx: BeforePrivilegeSelectContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.privilege`.
     * @param ctx the parse tree
     */
    enterPrivilege?: (ctx: PrivilegeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.privilege`.
     * @param ctx the parse tree
     */
    exitPrivilege?: (ctx: PrivilegeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.privilegeTarget`.
     * @param ctx the parse tree
     */
    enterPrivilegeTarget?: (ctx: PrivilegeTargetContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.privilegeTarget`.
     * @param ctx the parse tree
     */
    exitPrivilegeTarget?: (ctx: PrivilegeTargetContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.granteeList`.
     * @param ctx the parse tree
     */
    enterGranteeList?: (ctx: GranteeListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.granteeList`.
     * @param ctx the parse tree
     */
    exitGranteeList?: (ctx: GranteeListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.grantRoleStmt`.
     * @param ctx the parse tree
     */
    enterGrantRoleStmt?: (ctx: GrantRoleStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.grantRoleStmt`.
     * @param ctx the parse tree
     */
    exitGrantRoleStmt?: (ctx: GrantRoleStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.revokeRoleStmt`.
     * @param ctx the parse tree
     */
    enterRevokeRoleStmt?: (ctx: RevokeRoleStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.revokeRoleStmt`.
     * @param ctx the parse tree
     */
    exitRevokeRoleStmt?: (ctx: RevokeRoleStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterDefaultPrivilegesStmt`.
     * @param ctx the parse tree
     */
    enterAlterDefaultPrivilegesStmt?: (ctx: AlterDefaultPrivilegesStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterDefaultPrivilegesStmt`.
     * @param ctx the parse tree
     */
    exitAlterDefaultPrivilegesStmt?: (ctx: AlterDefaultPrivilegesStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.defaclaction`.
     * @param ctx the parse tree
     */
    enterDefaclaction?: (ctx: DefaclactionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.defaclaction`.
     * @param ctx the parse tree
     */
    exitDefaclaction?: (ctx: DefaclactionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.defaclPrivilegeTarget`.
     * @param ctx the parse tree
     */
    enterDefaclPrivilegeTarget?: (ctx: DefaclPrivilegeTargetContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.defaclPrivilegeTarget`.
     * @param ctx the parse tree
     */
    exitDefaclPrivilegeTarget?: (ctx: DefaclPrivilegeTargetContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.indexStmt`.
     * @param ctx the parse tree
     */
    enterIndexStmt?: (ctx: IndexStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.indexStmt`.
     * @param ctx the parse tree
     */
    exitIndexStmt?: (ctx: IndexStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.indexParams`.
     * @param ctx the parse tree
     */
    enterIndexParams?: (ctx: IndexParamsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.indexParams`.
     * @param ctx the parse tree
     */
    exitIndexParams?: (ctx: IndexParamsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.indexElem`.
     * @param ctx the parse tree
     */
    enterIndexElem?: (ctx: IndexElemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.indexElem`.
     * @param ctx the parse tree
     */
    exitIndexElem?: (ctx: IndexElemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createFunctionStmt`.
     * @param ctx the parse tree
     */
    enterCreateFunctionStmt?: (ctx: CreateFunctionStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createFunctionStmt`.
     * @param ctx the parse tree
     */
    exitCreateFunctionStmt?: (ctx: CreateFunctionStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.orReplaceOpt`.
     * @param ctx the parse tree
     */
    enterOrReplaceOpt?: (ctx: OrReplaceOptContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.orReplaceOpt`.
     * @param ctx the parse tree
     */
    exitOrReplaceOpt?: (ctx: OrReplaceOptContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.funcArgs`.
     * @param ctx the parse tree
     */
    enterFuncArgs?: (ctx: FuncArgsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.funcArgs`.
     * @param ctx the parse tree
     */
    exitFuncArgs?: (ctx: FuncArgsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.funcArgsList`.
     * @param ctx the parse tree
     */
    enterFuncArgsList?: (ctx: FuncArgsListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.funcArgsList`.
     * @param ctx the parse tree
     */
    exitFuncArgsList?: (ctx: FuncArgsListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.routineWithArgTypesList`.
     * @param ctx the parse tree
     */
    enterRoutineWithArgTypesList?: (ctx: RoutineWithArgTypesListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.routineWithArgTypesList`.
     * @param ctx the parse tree
     */
    exitRoutineWithArgTypesList?: (ctx: RoutineWithArgTypesListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.routineWithArgTypes`.
     * @param ctx the parse tree
     */
    enterRoutineWithArgTypes?: (ctx: RoutineWithArgTypesContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.routineWithArgTypes`.
     * @param ctx the parse tree
     */
    exitRoutineWithArgTypes?: (ctx: RoutineWithArgTypesContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.procedureWithArgTypesList`.
     * @param ctx the parse tree
     */
    enterProcedureWithArgTypesList?: (ctx: ProcedureWithArgTypesListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.procedureWithArgTypesList`.
     * @param ctx the parse tree
     */
    exitProcedureWithArgTypesList?: (ctx: ProcedureWithArgTypesListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.procedureWithArgTypes`.
     * @param ctx the parse tree
     */
    enterProcedureWithArgTypes?: (ctx: ProcedureWithArgTypesContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.procedureWithArgTypes`.
     * @param ctx the parse tree
     */
    exitProcedureWithArgTypes?: (ctx: ProcedureWithArgTypesContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.functionWithArgTypesList`.
     * @param ctx the parse tree
     */
    enterFunctionWithArgTypesList?: (ctx: FunctionWithArgTypesListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.functionWithArgTypesList`.
     * @param ctx the parse tree
     */
    exitFunctionWithArgTypesList?: (ctx: FunctionWithArgTypesListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.functionWithArgTypes`.
     * @param ctx the parse tree
     */
    enterFunctionWithArgTypes?: (ctx: FunctionWithArgTypesContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.functionWithArgTypes`.
     * @param ctx the parse tree
     */
    exitFunctionWithArgTypes?: (ctx: FunctionWithArgTypesContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.funcArg`.
     * @param ctx the parse tree
     */
    enterFuncArg?: (ctx: FuncArgContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.funcArg`.
     * @param ctx the parse tree
     */
    exitFuncArg?: (ctx: FuncArgContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.argClass`.
     * @param ctx the parse tree
     */
    enterArgClass?: (ctx: ArgClassContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.argClass`.
     * @param ctx the parse tree
     */
    exitArgClass?: (ctx: ArgClassContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.funcType`.
     * @param ctx the parse tree
     */
    enterFuncType?: (ctx: FuncTypeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.funcType`.
     * @param ctx the parse tree
     */
    exitFuncType?: (ctx: FuncTypeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.funcArgWithDefault`.
     * @param ctx the parse tree
     */
    enterFuncArgWithDefault?: (ctx: FuncArgWithDefaultContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.funcArgWithDefault`.
     * @param ctx the parse tree
     */
    exitFuncArgWithDefault?: (ctx: FuncArgWithDefaultContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.aggregateArgs`.
     * @param ctx the parse tree
     */
    enterAggregateArgs?: (ctx: AggregateArgsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.aggregateArgs`.
     * @param ctx the parse tree
     */
    exitAggregateArgs?: (ctx: AggregateArgsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.aggregateWithArgTypes`.
     * @param ctx the parse tree
     */
    enterAggregateWithArgTypes?: (ctx: AggregateWithArgTypesContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.aggregateWithArgTypes`.
     * @param ctx the parse tree
     */
    exitAggregateWithArgTypes?: (ctx: AggregateWithArgTypesContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.commonFuncOptItem`.
     * @param ctx the parse tree
     */
    enterCommonFuncOptItem?: (ctx: CommonFuncOptItemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.commonFuncOptItem`.
     * @param ctx the parse tree
     */
    exitCommonFuncOptItem?: (ctx: CommonFuncOptItemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createFuncOptItem`.
     * @param ctx the parse tree
     */
    enterCreateFuncOptItem?: (ctx: CreateFuncOptItemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createFuncOptItem`.
     * @param ctx the parse tree
     */
    exitCreateFuncOptItem?: (ctx: CreateFuncOptItemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.optDefinition`.
     * @param ctx the parse tree
     */
    enterOptDefinition?: (ctx: OptDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.optDefinition`.
     * @param ctx the parse tree
     */
    exitOptDefinition?: (ctx: OptDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.tableFuncColumn`.
     * @param ctx the parse tree
     */
    enterTableFuncColumn?: (ctx: TableFuncColumnContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.tableFuncColumn`.
     * @param ctx the parse tree
     */
    exitTableFuncColumn?: (ctx: TableFuncColumnContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterFunctionStmt`.
     * @param ctx the parse tree
     */
    enterAlterFunctionStmt?: (ctx: AlterFunctionStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterFunctionStmt`.
     * @param ctx the parse tree
     */
    exitAlterFunctionStmt?: (ctx: AlterFunctionStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.removeFuncStmt`.
     * @param ctx the parse tree
     */
    enterRemoveFuncStmt?: (ctx: RemoveFuncStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.removeFuncStmt`.
     * @param ctx the parse tree
     */
    exitRemoveFuncStmt?: (ctx: RemoveFuncStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.removeAggregateStmt`.
     * @param ctx the parse tree
     */
    enterRemoveAggregateStmt?: (ctx: RemoveAggregateStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.removeAggregateStmt`.
     * @param ctx the parse tree
     */
    exitRemoveAggregateStmt?: (ctx: RemoveAggregateStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.removeOperatorStmt`.
     * @param ctx the parse tree
     */
    enterRemoveOperatorStmt?: (ctx: RemoveOperatorStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.removeOperatorStmt`.
     * @param ctx the parse tree
     */
    exitRemoveOperatorStmt?: (ctx: RemoveOperatorStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.operatorArgTypes`.
     * @param ctx the parse tree
     */
    enterOperatorArgTypes?: (ctx: OperatorArgTypesContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.operatorArgTypes`.
     * @param ctx the parse tree
     */
    exitOperatorArgTypes?: (ctx: OperatorArgTypesContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.anyOperator`.
     * @param ctx the parse tree
     */
    enterAnyOperator?: (ctx: AnyOperatorContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.anyOperator`.
     * @param ctx the parse tree
     */
    exitAnyOperator?: (ctx: AnyOperatorContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.operatorWithArgTypes`.
     * @param ctx the parse tree
     */
    enterOperatorWithArgTypes?: (ctx: OperatorWithArgTypesContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.operatorWithArgTypes`.
     * @param ctx the parse tree
     */
    exitOperatorWithArgTypes?: (ctx: OperatorWithArgTypesContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.doStmt`.
     * @param ctx the parse tree
     */
    enterDoStmt?: (ctx: DoStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.doStmt`.
     * @param ctx the parse tree
     */
    exitDoStmt?: (ctx: DoStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createCastStmt`.
     * @param ctx the parse tree
     */
    enterCreateCastStmt?: (ctx: CreateCastStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createCastStmt`.
     * @param ctx the parse tree
     */
    exitCreateCastStmt?: (ctx: CreateCastStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.ifExists`.
     * @param ctx the parse tree
     */
    enterIfExists?: (ctx: IfExistsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.ifExists`.
     * @param ctx the parse tree
     */
    exitIfExists?: (ctx: IfExistsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createTransformStmt`.
     * @param ctx the parse tree
     */
    enterCreateTransformStmt?: (ctx: CreateTransformStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createTransformStmt`.
     * @param ctx the parse tree
     */
    exitCreateTransformStmt?: (ctx: CreateTransformStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.sqlWithFunction`.
     * @param ctx the parse tree
     */
    enterSqlWithFunction?: (ctx: SqlWithFunctionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.sqlWithFunction`.
     * @param ctx the parse tree
     */
    exitSqlWithFunction?: (ctx: SqlWithFunctionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.reindexStmt`.
     * @param ctx the parse tree
     */
    enterReindexStmt?: (ctx: ReindexStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.reindexStmt`.
     * @param ctx the parse tree
     */
    exitReindexStmt?: (ctx: ReindexStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterTblSpcStmt`.
     * @param ctx the parse tree
     */
    enterAlterTblSpcStmt?: (ctx: AlterTblSpcStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterTblSpcStmt`.
     * @param ctx the parse tree
     */
    exitAlterTblSpcStmt?: (ctx: AlterTblSpcStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.renameStmt`.
     * @param ctx the parse tree
     */
    enterRenameStmt?: (ctx: RenameStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.renameStmt`.
     * @param ctx the parse tree
     */
    exitRenameStmt?: (ctx: RenameStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterObjectDependsStmt`.
     * @param ctx the parse tree
     */
    enterAlterObjectDependsStmt?: (ctx: AlterObjectDependsStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterObjectDependsStmt`.
     * @param ctx the parse tree
     */
    exitAlterObjectDependsStmt?: (ctx: AlterObjectDependsStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterObjectSchemaStmt`.
     * @param ctx the parse tree
     */
    enterAlterObjectSchemaStmt?: (ctx: AlterObjectSchemaStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterObjectSchemaStmt`.
     * @param ctx the parse tree
     */
    exitAlterObjectSchemaStmt?: (ctx: AlterObjectSchemaStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterOperatorStmt`.
     * @param ctx the parse tree
     */
    enterAlterOperatorStmt?: (ctx: AlterOperatorStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterOperatorStmt`.
     * @param ctx the parse tree
     */
    exitAlterOperatorStmt?: (ctx: AlterOperatorStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.operatorDefList`.
     * @param ctx the parse tree
     */
    enterOperatorDefList?: (ctx: OperatorDefListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.operatorDefList`.
     * @param ctx the parse tree
     */
    exitOperatorDefList?: (ctx: OperatorDefListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.operatorDefElem`.
     * @param ctx the parse tree
     */
    enterOperatorDefElem?: (ctx: OperatorDefElemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.operatorDefElem`.
     * @param ctx the parse tree
     */
    exitOperatorDefElem?: (ctx: OperatorDefElemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterTypeStmt`.
     * @param ctx the parse tree
     */
    enterAlterTypeStmt?: (ctx: AlterTypeStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterTypeStmt`.
     * @param ctx the parse tree
     */
    exitAlterTypeStmt?: (ctx: AlterTypeStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterOwnerStmt`.
     * @param ctx the parse tree
     */
    enterAlterOwnerStmt?: (ctx: AlterOwnerStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterOwnerStmt`.
     * @param ctx the parse tree
     */
    exitAlterOwnerStmt?: (ctx: AlterOwnerStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createPublicationStmt`.
     * @param ctx the parse tree
     */
    enterCreatePublicationStmt?: (ctx: CreatePublicationStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createPublicationStmt`.
     * @param ctx the parse tree
     */
    exitCreatePublicationStmt?: (ctx: CreatePublicationStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterPublicationStmt`.
     * @param ctx the parse tree
     */
    enterAlterPublicationStmt?: (ctx: AlterPublicationStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterPublicationStmt`.
     * @param ctx the parse tree
     */
    exitAlterPublicationStmt?: (ctx: AlterPublicationStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createSubscriptionStmt`.
     * @param ctx the parse tree
     */
    enterCreateSubscriptionStmt?: (ctx: CreateSubscriptionStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createSubscriptionStmt`.
     * @param ctx the parse tree
     */
    exitCreateSubscriptionStmt?: (ctx: CreateSubscriptionStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterSubscriptionStmt`.
     * @param ctx the parse tree
     */
    enterAlterSubscriptionStmt?: (ctx: AlterSubscriptionStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterSubscriptionStmt`.
     * @param ctx the parse tree
     */
    exitAlterSubscriptionStmt?: (ctx: AlterSubscriptionStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.ruleStmt`.
     * @param ctx the parse tree
     */
    enterRuleStmt?: (ctx: RuleStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.ruleStmt`.
     * @param ctx the parse tree
     */
    exitRuleStmt?: (ctx: RuleStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.ruleActionStmt`.
     * @param ctx the parse tree
     */
    enterRuleActionStmt?: (ctx: RuleActionStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.ruleActionStmt`.
     * @param ctx the parse tree
     */
    exitRuleActionStmt?: (ctx: RuleActionStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.notifyStmt`.
     * @param ctx the parse tree
     */
    enterNotifyStmt?: (ctx: NotifyStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.notifyStmt`.
     * @param ctx the parse tree
     */
    exitNotifyStmt?: (ctx: NotifyStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.notifyPayload`.
     * @param ctx the parse tree
     */
    enterNotifyPayload?: (ctx: NotifyPayloadContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.notifyPayload`.
     * @param ctx the parse tree
     */
    exitNotifyPayload?: (ctx: NotifyPayloadContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.listenStmt`.
     * @param ctx the parse tree
     */
    enterListenStmt?: (ctx: ListenStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.listenStmt`.
     * @param ctx the parse tree
     */
    exitListenStmt?: (ctx: ListenStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.unListenStmt`.
     * @param ctx the parse tree
     */
    enterUnListenStmt?: (ctx: UnListenStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.unListenStmt`.
     * @param ctx the parse tree
     */
    exitUnListenStmt?: (ctx: UnListenStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.transactionStmt`.
     * @param ctx the parse tree
     */
    enterTransactionStmt?: (ctx: TransactionStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.transactionStmt`.
     * @param ctx the parse tree
     */
    exitTransactionStmt?: (ctx: TransactionStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.optTransaction`.
     * @param ctx the parse tree
     */
    enterOptTransaction?: (ctx: OptTransactionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.optTransaction`.
     * @param ctx the parse tree
     */
    exitOptTransaction?: (ctx: OptTransactionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.transactionModeItem`.
     * @param ctx the parse tree
     */
    enterTransactionModeItem?: (ctx: TransactionModeItemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.transactionModeItem`.
     * @param ctx the parse tree
     */
    exitTransactionModeItem?: (ctx: TransactionModeItemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.transactionModeList`.
     * @param ctx the parse tree
     */
    enterTransactionModeList?: (ctx: TransactionModeListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.transactionModeList`.
     * @param ctx the parse tree
     */
    exitTransactionModeList?: (ctx: TransactionModeListContext) => void;
    /**
     * Enter a parse tree produced by the `createView`
     * labeled alternative in `PostgreSqlParser.viewStmt`.
     * @param ctx the parse tree
     */
    enterCreateView?: (ctx: CreateViewContext) => void;
    /**
     * Exit a parse tree produced by the `createView`
     * labeled alternative in `PostgreSqlParser.viewStmt`.
     * @param ctx the parse tree
     */
    exitCreateView?: (ctx: CreateViewContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.loadStmt`.
     * @param ctx the parse tree
     */
    enterLoadStmt?: (ctx: LoadStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.loadStmt`.
     * @param ctx the parse tree
     */
    exitLoadStmt?: (ctx: LoadStmtContext) => void;
    /**
     * Enter a parse tree produced by the `createDatabase`
     * labeled alternative in `PostgreSqlParser.createDbStmt`.
     * @param ctx the parse tree
     */
    enterCreateDatabase?: (ctx: CreateDatabaseContext) => void;
    /**
     * Exit a parse tree produced by the `createDatabase`
     * labeled alternative in `PostgreSqlParser.createDbStmt`.
     * @param ctx the parse tree
     */
    exitCreateDatabase?: (ctx: CreateDatabaseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createDbOptItem`.
     * @param ctx the parse tree
     */
    enterCreateDbOptItem?: (ctx: CreateDbOptItemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createDbOptItem`.
     * @param ctx the parse tree
     */
    exitCreateDbOptItem?: (ctx: CreateDbOptItemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterDatabaseStmt`.
     * @param ctx the parse tree
     */
    enterAlterDatabaseStmt?: (ctx: AlterDatabaseStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterDatabaseStmt`.
     * @param ctx the parse tree
     */
    exitAlterDatabaseStmt?: (ctx: AlterDatabaseStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterDatabaseSetStmt`.
     * @param ctx the parse tree
     */
    enterAlterDatabaseSetStmt?: (ctx: AlterDatabaseSetStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterDatabaseSetStmt`.
     * @param ctx the parse tree
     */
    exitAlterDatabaseSetStmt?: (ctx: AlterDatabaseSetStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterCollationStmt`.
     * @param ctx the parse tree
     */
    enterAlterCollationStmt?: (ctx: AlterCollationStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterCollationStmt`.
     * @param ctx the parse tree
     */
    exitAlterCollationStmt?: (ctx: AlterCollationStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterSystemStmt`.
     * @param ctx the parse tree
     */
    enterAlterSystemStmt?: (ctx: AlterSystemStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterSystemStmt`.
     * @param ctx the parse tree
     */
    exitAlterSystemStmt?: (ctx: AlterSystemStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createDomainStmt`.
     * @param ctx the parse tree
     */
    enterCreateDomainStmt?: (ctx: CreateDomainStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createDomainStmt`.
     * @param ctx the parse tree
     */
    exitCreateDomainStmt?: (ctx: CreateDomainStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterDomainStmt`.
     * @param ctx the parse tree
     */
    enterAlterDomainStmt?: (ctx: AlterDomainStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterDomainStmt`.
     * @param ctx the parse tree
     */
    exitAlterDomainStmt?: (ctx: AlterDomainStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterSearchDictionaryStmt`.
     * @param ctx the parse tree
     */
    enterAlterSearchDictionaryStmt?: (ctx: AlterSearchDictionaryStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterSearchDictionaryStmt`.
     * @param ctx the parse tree
     */
    exitAlterSearchDictionaryStmt?: (ctx: AlterSearchDictionaryStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterSearchConfigurationStmt`.
     * @param ctx the parse tree
     */
    enterAlterSearchConfigurationStmt?: (ctx: AlterSearchConfigurationStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterSearchConfigurationStmt`.
     * @param ctx the parse tree
     */
    exitAlterSearchConfigurationStmt?: (ctx: AlterSearchConfigurationStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createConversionStmt`.
     * @param ctx the parse tree
     */
    enterCreateConversionStmt?: (ctx: CreateConversionStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createConversionStmt`.
     * @param ctx the parse tree
     */
    exitCreateConversionStmt?: (ctx: CreateConversionStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.clusterStmt`.
     * @param ctx the parse tree
     */
    enterClusterStmt?: (ctx: ClusterStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.clusterStmt`.
     * @param ctx the parse tree
     */
    exitClusterStmt?: (ctx: ClusterStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.vacuumStmt`.
     * @param ctx the parse tree
     */
    enterVacuumStmt?: (ctx: VacuumStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.vacuumStmt`.
     * @param ctx the parse tree
     */
    exitVacuumStmt?: (ctx: VacuumStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.analyzeStmt`.
     * @param ctx the parse tree
     */
    enterAnalyzeStmt?: (ctx: AnalyzeStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.analyzeStmt`.
     * @param ctx the parse tree
     */
    exitAnalyzeStmt?: (ctx: AnalyzeStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.analyzeKeyword`.
     * @param ctx the parse tree
     */
    enterAnalyzeKeyword?: (ctx: AnalyzeKeywordContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.analyzeKeyword`.
     * @param ctx the parse tree
     */
    exitAnalyzeKeyword?: (ctx: AnalyzeKeywordContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.vacAnalyzeOptionElem`.
     * @param ctx the parse tree
     */
    enterVacAnalyzeOptionElem?: (ctx: VacAnalyzeOptionElemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.vacAnalyzeOptionElem`.
     * @param ctx the parse tree
     */
    exitVacAnalyzeOptionElem?: (ctx: VacAnalyzeOptionElemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.analyzeOptionElem`.
     * @param ctx the parse tree
     */
    enterAnalyzeOptionElem?: (ctx: AnalyzeOptionElemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.analyzeOptionElem`.
     * @param ctx the parse tree
     */
    exitAnalyzeOptionElem?: (ctx: AnalyzeOptionElemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.optVerbose`.
     * @param ctx the parse tree
     */
    enterOptVerbose?: (ctx: OptVerboseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.optVerbose`.
     * @param ctx the parse tree
     */
    exitOptVerbose?: (ctx: OptVerboseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.vacuumRelation`.
     * @param ctx the parse tree
     */
    enterVacuumRelation?: (ctx: VacuumRelationContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.vacuumRelation`.
     * @param ctx the parse tree
     */
    exitVacuumRelation?: (ctx: VacuumRelationContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.vacuumRelationList`.
     * @param ctx the parse tree
     */
    enterVacuumRelationList?: (ctx: VacuumRelationListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.vacuumRelationList`.
     * @param ctx the parse tree
     */
    exitVacuumRelationList?: (ctx: VacuumRelationListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.explainStmt`.
     * @param ctx the parse tree
     */
    enterExplainStmt?: (ctx: ExplainStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.explainStmt`.
     * @param ctx the parse tree
     */
    exitExplainStmt?: (ctx: ExplainStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.explainableStmt`.
     * @param ctx the parse tree
     */
    enterExplainableStmt?: (ctx: ExplainableStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.explainableStmt`.
     * @param ctx the parse tree
     */
    exitExplainableStmt?: (ctx: ExplainableStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.explainOptionList`.
     * @param ctx the parse tree
     */
    enterExplainOptionList?: (ctx: ExplainOptionListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.explainOptionList`.
     * @param ctx the parse tree
     */
    exitExplainOptionList?: (ctx: ExplainOptionListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.prepareStmt`.
     * @param ctx the parse tree
     */
    enterPrepareStmt?: (ctx: PrepareStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.prepareStmt`.
     * @param ctx the parse tree
     */
    exitPrepareStmt?: (ctx: PrepareStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.prepTypeClause`.
     * @param ctx the parse tree
     */
    enterPrepTypeClause?: (ctx: PrepTypeClauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.prepTypeClause`.
     * @param ctx the parse tree
     */
    exitPrepTypeClause?: (ctx: PrepTypeClauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.preParableStmt`.
     * @param ctx the parse tree
     */
    enterPreParableStmt?: (ctx: PreParableStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.preParableStmt`.
     * @param ctx the parse tree
     */
    exitPreParableStmt?: (ctx: PreParableStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.executeStmt`.
     * @param ctx the parse tree
     */
    enterExecuteStmt?: (ctx: ExecuteStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.executeStmt`.
     * @param ctx the parse tree
     */
    exitExecuteStmt?: (ctx: ExecuteStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.executeParamClause`.
     * @param ctx the parse tree
     */
    enterExecuteParamClause?: (ctx: ExecuteParamClauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.executeParamClause`.
     * @param ctx the parse tree
     */
    exitExecuteParamClause?: (ctx: ExecuteParamClauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.dealLocateStmt`.
     * @param ctx the parse tree
     */
    enterDealLocateStmt?: (ctx: DealLocateStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.dealLocateStmt`.
     * @param ctx the parse tree
     */
    exitDealLocateStmt?: (ctx: DealLocateStmtContext) => void;
    /**
     * Enter a parse tree produced by the `insertStatement`
     * labeled alternative in `PostgreSqlParser.insertStmt`.
     * @param ctx the parse tree
     */
    enterInsertStatement?: (ctx: InsertStatementContext) => void;
    /**
     * Exit a parse tree produced by the `insertStatement`
     * labeled alternative in `PostgreSqlParser.insertStmt`.
     * @param ctx the parse tree
     */
    exitInsertStatement?: (ctx: InsertStatementContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.insertRest`.
     * @param ctx the parse tree
     */
    enterInsertRest?: (ctx: InsertRestContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.insertRest`.
     * @param ctx the parse tree
     */
    exitInsertRest?: (ctx: InsertRestContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.insertColumnList`.
     * @param ctx the parse tree
     */
    enterInsertColumnList?: (ctx: InsertColumnListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.insertColumnList`.
     * @param ctx the parse tree
     */
    exitInsertColumnList?: (ctx: InsertColumnListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.insertColumnItem`.
     * @param ctx the parse tree
     */
    enterInsertColumnItem?: (ctx: InsertColumnItemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.insertColumnItem`.
     * @param ctx the parse tree
     */
    exitInsertColumnItem?: (ctx: InsertColumnItemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.returningClause`.
     * @param ctx the parse tree
     */
    enterReturningClause?: (ctx: ReturningClauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.returningClause`.
     * @param ctx the parse tree
     */
    exitReturningClause?: (ctx: ReturningClauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.deleteStmt`.
     * @param ctx the parse tree
     */
    enterDeleteStmt?: (ctx: DeleteStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.deleteStmt`.
     * @param ctx the parse tree
     */
    exitDeleteStmt?: (ctx: DeleteStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.lockStmt`.
     * @param ctx the parse tree
     */
    enterLockStmt?: (ctx: LockStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.lockStmt`.
     * @param ctx the parse tree
     */
    exitLockStmt?: (ctx: LockStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.updateStmt`.
     * @param ctx the parse tree
     */
    enterUpdateStmt?: (ctx: UpdateStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.updateStmt`.
     * @param ctx the parse tree
     */
    exitUpdateStmt?: (ctx: UpdateStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.setClauseList`.
     * @param ctx the parse tree
     */
    enterSetClauseList?: (ctx: SetClauseListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.setClauseList`.
     * @param ctx the parse tree
     */
    exitSetClauseList?: (ctx: SetClauseListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.setClause`.
     * @param ctx the parse tree
     */
    enterSetClause?: (ctx: SetClauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.setClause`.
     * @param ctx the parse tree
     */
    exitSetClause?: (ctx: SetClauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.declareCursorStmt`.
     * @param ctx the parse tree
     */
    enterDeclareCursorStmt?: (ctx: DeclareCursorStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.declareCursorStmt`.
     * @param ctx the parse tree
     */
    exitDeclareCursorStmt?: (ctx: DeclareCursorStmtContext) => void;
    /**
     * Enter a parse tree produced by the `selectStatement`
     * labeled alternative in `PostgreSqlParser.selectStmt`.
     * @param ctx the parse tree
     */
    enterSelectStatement?: (ctx: SelectStatementContext) => void;
    /**
     * Exit a parse tree produced by the `selectStatement`
     * labeled alternative in `PostgreSqlParser.selectStmt`.
     * @param ctx the parse tree
     */
    exitSelectStatement?: (ctx: SelectStatementContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.selectWithParens`.
     * @param ctx the parse tree
     */
    enterSelectWithParens?: (ctx: SelectWithParensContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.selectWithParens`.
     * @param ctx the parse tree
     */
    exitSelectWithParens?: (ctx: SelectWithParensContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.selectNoParens`.
     * @param ctx the parse tree
     */
    enterSelectNoParens?: (ctx: SelectNoParensContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.selectNoParens`.
     * @param ctx the parse tree
     */
    exitSelectNoParens?: (ctx: SelectNoParensContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.selectClause`.
     * @param ctx the parse tree
     */
    enterSelectClause?: (ctx: SelectClauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.selectClause`.
     * @param ctx the parse tree
     */
    exitSelectClause?: (ctx: SelectClauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.simpleSelect`.
     * @param ctx the parse tree
     */
    enterSimpleSelect?: (ctx: SimpleSelectContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.simpleSelect`.
     * @param ctx the parse tree
     */
    exitSimpleSelect?: (ctx: SimpleSelectContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.setOperatorWithAllOrDistinct`.
     * @param ctx the parse tree
     */
    enterSetOperatorWithAllOrDistinct?: (ctx: SetOperatorWithAllOrDistinctContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.setOperatorWithAllOrDistinct`.
     * @param ctx the parse tree
     */
    exitSetOperatorWithAllOrDistinct?: (ctx: SetOperatorWithAllOrDistinctContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.withClause`.
     * @param ctx the parse tree
     */
    enterWithClause?: (ctx: WithClauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.withClause`.
     * @param ctx the parse tree
     */
    exitWithClause?: (ctx: WithClauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.commonTableExpr`.
     * @param ctx the parse tree
     */
    enterCommonTableExpr?: (ctx: CommonTableExprContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.commonTableExpr`.
     * @param ctx the parse tree
     */
    exitCommonTableExpr?: (ctx: CommonTableExprContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.searchClause`.
     * @param ctx the parse tree
     */
    enterSearchClause?: (ctx: SearchClauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.searchClause`.
     * @param ctx the parse tree
     */
    exitSearchClause?: (ctx: SearchClauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.cycleClause`.
     * @param ctx the parse tree
     */
    enterCycleClause?: (ctx: CycleClauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.cycleClause`.
     * @param ctx the parse tree
     */
    exitCycleClause?: (ctx: CycleClauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.intoClause`.
     * @param ctx the parse tree
     */
    enterIntoClause?: (ctx: IntoClauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.intoClause`.
     * @param ctx the parse tree
     */
    exitIntoClause?: (ctx: IntoClauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.optTempTableName`.
     * @param ctx the parse tree
     */
    enterOptTempTableName?: (ctx: OptTempTableNameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.optTempTableName`.
     * @param ctx the parse tree
     */
    exitOptTempTableName?: (ctx: OptTempTableNameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.distinctClause`.
     * @param ctx the parse tree
     */
    enterDistinctClause?: (ctx: DistinctClauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.distinctClause`.
     * @param ctx the parse tree
     */
    exitDistinctClause?: (ctx: DistinctClauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.sortClause`.
     * @param ctx the parse tree
     */
    enterSortClause?: (ctx: SortClauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.sortClause`.
     * @param ctx the parse tree
     */
    exitSortClause?: (ctx: SortClauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.sortBy`.
     * @param ctx the parse tree
     */
    enterSortBy?: (ctx: SortByContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.sortBy`.
     * @param ctx the parse tree
     */
    exitSortBy?: (ctx: SortByContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.selectLimit`.
     * @param ctx the parse tree
     */
    enterSelectLimit?: (ctx: SelectLimitContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.selectLimit`.
     * @param ctx the parse tree
     */
    exitSelectLimit?: (ctx: SelectLimitContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.limitClause`.
     * @param ctx the parse tree
     */
    enterLimitClause?: (ctx: LimitClauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.limitClause`.
     * @param ctx the parse tree
     */
    exitLimitClause?: (ctx: LimitClauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.fetchClause`.
     * @param ctx the parse tree
     */
    enterFetchClause?: (ctx: FetchClauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.fetchClause`.
     * @param ctx the parse tree
     */
    exitFetchClause?: (ctx: FetchClauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.offsetClause`.
     * @param ctx the parse tree
     */
    enterOffsetClause?: (ctx: OffsetClauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.offsetClause`.
     * @param ctx the parse tree
     */
    exitOffsetClause?: (ctx: OffsetClauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.selectFetchFirstValue`.
     * @param ctx the parse tree
     */
    enterSelectFetchFirstValue?: (ctx: SelectFetchFirstValueContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.selectFetchFirstValue`.
     * @param ctx the parse tree
     */
    exitSelectFetchFirstValue?: (ctx: SelectFetchFirstValueContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.groupClause`.
     * @param ctx the parse tree
     */
    enterGroupClause?: (ctx: GroupClauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.groupClause`.
     * @param ctx the parse tree
     */
    exitGroupClause?: (ctx: GroupClauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.groupByList`.
     * @param ctx the parse tree
     */
    enterGroupByList?: (ctx: GroupByListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.groupByList`.
     * @param ctx the parse tree
     */
    exitGroupByList?: (ctx: GroupByListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.groupByItem`.
     * @param ctx the parse tree
     */
    enterGroupByItem?: (ctx: GroupByItemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.groupByItem`.
     * @param ctx the parse tree
     */
    exitGroupByItem?: (ctx: GroupByItemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.forLockingClause`.
     * @param ctx the parse tree
     */
    enterForLockingClause?: (ctx: ForLockingClauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.forLockingClause`.
     * @param ctx the parse tree
     */
    exitForLockingClause?: (ctx: ForLockingClauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.valuesClause`.
     * @param ctx the parse tree
     */
    enterValuesClause?: (ctx: ValuesClauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.valuesClause`.
     * @param ctx the parse tree
     */
    exitValuesClause?: (ctx: ValuesClauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.fromClause`.
     * @param ctx the parse tree
     */
    enterFromClause?: (ctx: FromClauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.fromClause`.
     * @param ctx the parse tree
     */
    exitFromClause?: (ctx: FromClauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.fromList`.
     * @param ctx the parse tree
     */
    enterFromList?: (ctx: FromListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.fromList`.
     * @param ctx the parse tree
     */
    exitFromList?: (ctx: FromListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.tableRef`.
     * @param ctx the parse tree
     */
    enterTableRef?: (ctx: TableRefContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.tableRef`.
     * @param ctx the parse tree
     */
    exitTableRef?: (ctx: TableRefContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.aliasClause`.
     * @param ctx the parse tree
     */
    enterAliasClause?: (ctx: AliasClauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.aliasClause`.
     * @param ctx the parse tree
     */
    exitAliasClause?: (ctx: AliasClauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.funcAliasClause`.
     * @param ctx the parse tree
     */
    enterFuncAliasClause?: (ctx: FuncAliasClauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.funcAliasClause`.
     * @param ctx the parse tree
     */
    exitFuncAliasClause?: (ctx: FuncAliasClauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.joinType`.
     * @param ctx the parse tree
     */
    enterJoinType?: (ctx: JoinTypeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.joinType`.
     * @param ctx the parse tree
     */
    exitJoinType?: (ctx: JoinTypeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.joinQual`.
     * @param ctx the parse tree
     */
    enterJoinQual?: (ctx: JoinQualContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.joinQual`.
     * @param ctx the parse tree
     */
    exitJoinQual?: (ctx: JoinQualContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.relationExpr`.
     * @param ctx the parse tree
     */
    enterRelationExpr?: (ctx: RelationExprContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.relationExpr`.
     * @param ctx the parse tree
     */
    exitRelationExpr?: (ctx: RelationExprContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.publicationRelationExpr`.
     * @param ctx the parse tree
     */
    enterPublicationRelationExpr?: (ctx: PublicationRelationExprContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.publicationRelationExpr`.
     * @param ctx the parse tree
     */
    exitPublicationRelationExpr?: (ctx: PublicationRelationExprContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.relationExprList`.
     * @param ctx the parse tree
     */
    enterRelationExprList?: (ctx: RelationExprListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.relationExprList`.
     * @param ctx the parse tree
     */
    exitRelationExprList?: (ctx: RelationExprListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.relationExprOptAlias`.
     * @param ctx the parse tree
     */
    enterRelationExprOptAlias?: (ctx: RelationExprOptAliasContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.relationExprOptAlias`.
     * @param ctx the parse tree
     */
    exitRelationExprOptAlias?: (ctx: RelationExprOptAliasContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.tableSampleClause`.
     * @param ctx the parse tree
     */
    enterTableSampleClause?: (ctx: TableSampleClauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.tableSampleClause`.
     * @param ctx the parse tree
     */
    exitTableSampleClause?: (ctx: TableSampleClauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.funcTable`.
     * @param ctx the parse tree
     */
    enterFuncTable?: (ctx: FuncTableContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.funcTable`.
     * @param ctx the parse tree
     */
    exitFuncTable?: (ctx: FuncTableContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.rowsFromItem`.
     * @param ctx the parse tree
     */
    enterRowsFromItem?: (ctx: RowsFromItemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.rowsFromItem`.
     * @param ctx the parse tree
     */
    exitRowsFromItem?: (ctx: RowsFromItemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.whereClause`.
     * @param ctx the parse tree
     */
    enterWhereClause?: (ctx: WhereClauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.whereClause`.
     * @param ctx the parse tree
     */
    exitWhereClause?: (ctx: WhereClauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.whereOrCurrentClause`.
     * @param ctx the parse tree
     */
    enterWhereOrCurrentClause?: (ctx: WhereOrCurrentClauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.whereOrCurrentClause`.
     * @param ctx the parse tree
     */
    exitWhereOrCurrentClause?: (ctx: WhereOrCurrentClauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.tableFuncElementList`.
     * @param ctx the parse tree
     */
    enterTableFuncElementList?: (ctx: TableFuncElementListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.tableFuncElementList`.
     * @param ctx the parse tree
     */
    exitTableFuncElementList?: (ctx: TableFuncElementListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.tableFuncElement`.
     * @param ctx the parse tree
     */
    enterTableFuncElement?: (ctx: TableFuncElementContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.tableFuncElement`.
     * @param ctx the parse tree
     */
    exitTableFuncElement?: (ctx: TableFuncElementContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.xmlTable`.
     * @param ctx the parse tree
     */
    enterXmlTable?: (ctx: XmlTableContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.xmlTable`.
     * @param ctx the parse tree
     */
    exitXmlTable?: (ctx: XmlTableContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.xmlTableColumnEl`.
     * @param ctx the parse tree
     */
    enterXmlTableColumnEl?: (ctx: XmlTableColumnElContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.xmlTableColumnEl`.
     * @param ctx the parse tree
     */
    exitXmlTableColumnEl?: (ctx: XmlTableColumnElContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.xmlNamespaceEle`.
     * @param ctx the parse tree
     */
    enterXmlNamespaceEle?: (ctx: XmlNamespaceEleContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.xmlNamespaceEle`.
     * @param ctx the parse tree
     */
    exitXmlNamespaceEle?: (ctx: XmlNamespaceEleContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.typename`.
     * @param ctx the parse tree
     */
    enterTypename?: (ctx: TypenameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.typename`.
     * @param ctx the parse tree
     */
    exitTypename?: (ctx: TypenameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.simpleTypeName`.
     * @param ctx the parse tree
     */
    enterSimpleTypeName?: (ctx: SimpleTypeNameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.simpleTypeName`.
     * @param ctx the parse tree
     */
    exitSimpleTypeName?: (ctx: SimpleTypeNameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.constTypeName`.
     * @param ctx the parse tree
     */
    enterConstTypeName?: (ctx: ConstTypeNameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.constTypeName`.
     * @param ctx the parse tree
     */
    exitConstTypeName?: (ctx: ConstTypeNameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.numeric`.
     * @param ctx the parse tree
     */
    enterNumeric?: (ctx: NumericContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.numeric`.
     * @param ctx the parse tree
     */
    exitNumeric?: (ctx: NumericContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.optFloat`.
     * @param ctx the parse tree
     */
    enterOptFloat?: (ctx: OptFloatContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.optFloat`.
     * @param ctx the parse tree
     */
    exitOptFloat?: (ctx: OptFloatContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.bit`.
     * @param ctx the parse tree
     */
    enterBit?: (ctx: BitContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.bit`.
     * @param ctx the parse tree
     */
    exitBit?: (ctx: BitContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.character`.
     * @param ctx the parse tree
     */
    enterCharacter?: (ctx: CharacterContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.character`.
     * @param ctx the parse tree
     */
    exitCharacter?: (ctx: CharacterContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.constDatetime`.
     * @param ctx the parse tree
     */
    enterConstDatetime?: (ctx: ConstDatetimeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.constDatetime`.
     * @param ctx the parse tree
     */
    exitConstDatetime?: (ctx: ConstDatetimeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.optInterval`.
     * @param ctx the parse tree
     */
    enterOptInterval?: (ctx: OptIntervalContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.optInterval`.
     * @param ctx the parse tree
     */
    exitOptInterval?: (ctx: OptIntervalContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.intervalSecond`.
     * @param ctx the parse tree
     */
    enterIntervalSecond?: (ctx: IntervalSecondContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.intervalSecond`.
     * @param ctx the parse tree
     */
    exitIntervalSecond?: (ctx: IntervalSecondContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `logicalNot`
     * labeled alternative in `PostgreSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterLogicalNot?: (ctx: LogicalNotContext) => void;
    /**
     * Exit a parse tree produced by the `logicalNot`
     * labeled alternative in `PostgreSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitLogicalNot?: (ctx: LogicalNotContext) => void;
    /**
     * Enter a parse tree produced by the `predicated`
     * labeled alternative in `PostgreSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterPredicated?: (ctx: PredicatedContext) => void;
    /**
     * Exit a parse tree produced by the `predicated`
     * labeled alternative in `PostgreSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitPredicated?: (ctx: PredicatedContext) => void;
    /**
     * Enter a parse tree produced by the `logicalBinary`
     * labeled alternative in `PostgreSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterLogicalBinary?: (ctx: LogicalBinaryContext) => void;
    /**
     * Exit a parse tree produced by the `logicalBinary`
     * labeled alternative in `PostgreSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitLogicalBinary?: (ctx: LogicalBinaryContext) => void;
    /**
     * Enter a parse tree produced by the `comparison`
     * labeled alternative in `PostgreSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterComparison?: (ctx: ComparisonContext) => void;
    /**
     * Exit a parse tree produced by the `comparison`
     * labeled alternative in `PostgreSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitComparison?: (ctx: ComparisonContext) => void;
    /**
     * Enter a parse tree produced by the `quantifiedComparison`
     * labeled alternative in `PostgreSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterQuantifiedComparison?: (ctx: QuantifiedComparisonContext) => void;
    /**
     * Exit a parse tree produced by the `quantifiedComparison`
     * labeled alternative in `PostgreSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitQuantifiedComparison?: (ctx: QuantifiedComparisonContext) => void;
    /**
     * Enter a parse tree produced by the `between`
     * labeled alternative in `PostgreSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterBetween?: (ctx: BetweenContext) => void;
    /**
     * Exit a parse tree produced by the `between`
     * labeled alternative in `PostgreSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitBetween?: (ctx: BetweenContext) => void;
    /**
     * Enter a parse tree produced by the `inList`
     * labeled alternative in `PostgreSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterInList?: (ctx: InListContext) => void;
    /**
     * Exit a parse tree produced by the `inList`
     * labeled alternative in `PostgreSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitInList?: (ctx: InListContext) => void;
    /**
     * Enter a parse tree produced by the `inSubquery`
     * labeled alternative in `PostgreSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterInSubquery?: (ctx: InSubqueryContext) => void;
    /**
     * Exit a parse tree produced by the `inSubquery`
     * labeled alternative in `PostgreSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitInSubquery?: (ctx: InSubqueryContext) => void;
    /**
     * Enter a parse tree produced by the `like`
     * labeled alternative in `PostgreSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterLike?: (ctx: LikeContext) => void;
    /**
     * Exit a parse tree produced by the `like`
     * labeled alternative in `PostgreSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitLike?: (ctx: LikeContext) => void;
    /**
     * Enter a parse tree produced by the `nullPredicate`
     * labeled alternative in `PostgreSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterNullPredicate?: (ctx: NullPredicateContext) => void;
    /**
     * Exit a parse tree produced by the `nullPredicate`
     * labeled alternative in `PostgreSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitNullPredicate?: (ctx: NullPredicateContext) => void;
    /**
     * Enter a parse tree produced by the `distinctFrom`
     * labeled alternative in `PostgreSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterDistinctFrom?: (ctx: DistinctFromContext) => void;
    /**
     * Exit a parse tree produced by the `distinctFrom`
     * labeled alternative in `PostgreSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitDistinctFrom?: (ctx: DistinctFromContext) => void;
    /**
     * Enter a parse tree produced by the `valueExpressionDefault`
     * labeled alternative in `PostgreSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `valueExpressionDefault`
     * labeled alternative in `PostgreSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `concatenation`
     * labeled alternative in `PostgreSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterConcatenation?: (ctx: ConcatenationContext) => void;
    /**
     * Exit a parse tree produced by the `concatenation`
     * labeled alternative in `PostgreSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitConcatenation?: (ctx: ConcatenationContext) => void;
    /**
     * Enter a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `PostgreSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
    /**
     * Exit a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `PostgreSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
    /**
     * Enter a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `PostgreSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
    /**
     * Exit a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `PostgreSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
    /**
     * Enter a parse tree produced by the `atTimeZone`
     * labeled alternative in `PostgreSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterAtTimeZone?: (ctx: AtTimeZoneContext) => void;
    /**
     * Exit a parse tree produced by the `atTimeZone`
     * labeled alternative in `PostgreSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitAtTimeZone?: (ctx: AtTimeZoneContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.funcApplication`.
     * @param ctx the parse tree
     */
    enterFuncApplication?: (ctx: FuncApplicationContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.funcApplication`.
     * @param ctx the parse tree
     */
    exitFuncApplication?: (ctx: FuncApplicationContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.func_expr`.
     * @param ctx the parse tree
     */
    enterFunc_expr?: (ctx: Func_exprContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.func_expr`.
     * @param ctx the parse tree
     */
    exitFunc_expr?: (ctx: Func_exprContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.funcExprWindowless`.
     * @param ctx the parse tree
     */
    enterFuncExprWindowless?: (ctx: FuncExprWindowlessContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.funcExprWindowless`.
     * @param ctx the parse tree
     */
    exitFuncExprWindowless?: (ctx: FuncExprWindowlessContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.funcExprCommonSubExpr`.
     * @param ctx the parse tree
     */
    enterFuncExprCommonSubExpr?: (ctx: FuncExprCommonSubExprContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.funcExprCommonSubExpr`.
     * @param ctx the parse tree
     */
    exitFuncExprCommonSubExpr?: (ctx: FuncExprCommonSubExprContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.xmlAttributeList`.
     * @param ctx the parse tree
     */
    enterXmlAttributeList?: (ctx: XmlAttributeListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.xmlAttributeList`.
     * @param ctx the parse tree
     */
    exitXmlAttributeList?: (ctx: XmlAttributeListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.xmlAttributeEl`.
     * @param ctx the parse tree
     */
    enterXmlAttributeEl?: (ctx: XmlAttributeElContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.xmlAttributeEl`.
     * @param ctx the parse tree
     */
    exitXmlAttributeEl?: (ctx: XmlAttributeElContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.documentOrContent`.
     * @param ctx the parse tree
     */
    enterDocumentOrContent?: (ctx: DocumentOrContentContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.documentOrContent`.
     * @param ctx the parse tree
     */
    exitDocumentOrContent?: (ctx: DocumentOrContentContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.xmlExistsArgument`.
     * @param ctx the parse tree
     */
    enterXmlExistsArgument?: (ctx: XmlExistsArgumentContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.xmlExistsArgument`.
     * @param ctx the parse tree
     */
    exitXmlExistsArgument?: (ctx: XmlExistsArgumentContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.xmlPassingMech`.
     * @param ctx the parse tree
     */
    enterXmlPassingMech?: (ctx: XmlPassingMechContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.xmlPassingMech`.
     * @param ctx the parse tree
     */
    exitXmlPassingMech?: (ctx: XmlPassingMechContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.windowClause`.
     * @param ctx the parse tree
     */
    enterWindowClause?: (ctx: WindowClauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.windowClause`.
     * @param ctx the parse tree
     */
    exitWindowClause?: (ctx: WindowClauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.windowDefinition`.
     * @param ctx the parse tree
     */
    enterWindowDefinition?: (ctx: WindowDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.windowDefinition`.
     * @param ctx the parse tree
     */
    exitWindowDefinition?: (ctx: WindowDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.over_clause`.
     * @param ctx the parse tree
     */
    enterOver_clause?: (ctx: Over_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.over_clause`.
     * @param ctx the parse tree
     */
    exitOver_clause?: (ctx: Over_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.windowSpecification`.
     * @param ctx the parse tree
     */
    enterWindowSpecification?: (ctx: WindowSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.windowSpecification`.
     * @param ctx the parse tree
     */
    exitWindowSpecification?: (ctx: WindowSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.optFrameClause`.
     * @param ctx the parse tree
     */
    enterOptFrameClause?: (ctx: OptFrameClauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.optFrameClause`.
     * @param ctx the parse tree
     */
    exitOptFrameClause?: (ctx: OptFrameClauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.frameBound`.
     * @param ctx the parse tree
     */
    enterFrameBound?: (ctx: FrameBoundContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.frameBound`.
     * @param ctx the parse tree
     */
    exitFrameBound?: (ctx: FrameBoundContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.row`.
     * @param ctx the parse tree
     */
    enterRow?: (ctx: RowContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.row`.
     * @param ctx the parse tree
     */
    exitRow?: (ctx: RowContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.explicitRow`.
     * @param ctx the parse tree
     */
    enterExplicitRow?: (ctx: ExplicitRowContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.explicitRow`.
     * @param ctx the parse tree
     */
    exitExplicitRow?: (ctx: ExplicitRowContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.subType`.
     * @param ctx the parse tree
     */
    enterSubType?: (ctx: SubTypeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.subType`.
     * @param ctx the parse tree
     */
    exitSubType?: (ctx: SubTypeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.allOp`.
     * @param ctx the parse tree
     */
    enterAllOp?: (ctx: AllOpContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.allOp`.
     * @param ctx the parse tree
     */
    exitAllOp?: (ctx: AllOpContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.mathOp`.
     * @param ctx the parse tree
     */
    enterMathOp?: (ctx: MathOpContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.mathOp`.
     * @param ctx the parse tree
     */
    exitMathOp?: (ctx: MathOpContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.qualOp`.
     * @param ctx the parse tree
     */
    enterQualOp?: (ctx: QualOpContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.qualOp`.
     * @param ctx the parse tree
     */
    exitQualOp?: (ctx: QualOpContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.qualAllOp`.
     * @param ctx the parse tree
     */
    enterQualAllOp?: (ctx: QualAllOpContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.qualAllOp`.
     * @param ctx the parse tree
     */
    exitQualAllOp?: (ctx: QualAllOpContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.subqueryOperator`.
     * @param ctx the parse tree
     */
    enterSubqueryOperator?: (ctx: SubqueryOperatorContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.subqueryOperator`.
     * @param ctx the parse tree
     */
    exitSubqueryOperator?: (ctx: SubqueryOperatorContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.exprList`.
     * @param ctx the parse tree
     */
    enterExprList?: (ctx: ExprListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.exprList`.
     * @param ctx the parse tree
     */
    exitExprList?: (ctx: ExprListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.columnExpr`.
     * @param ctx the parse tree
     */
    enterColumnExpr?: (ctx: ColumnExprContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.columnExpr`.
     * @param ctx the parse tree
     */
    exitColumnExpr?: (ctx: ColumnExprContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.columnExprNoParen`.
     * @param ctx the parse tree
     */
    enterColumnExprNoParen?: (ctx: ColumnExprNoParenContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.columnExprNoParen`.
     * @param ctx the parse tree
     */
    exitColumnExprNoParen?: (ctx: ColumnExprNoParenContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.funcArgList`.
     * @param ctx the parse tree
     */
    enterFuncArgList?: (ctx: FuncArgListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.funcArgList`.
     * @param ctx the parse tree
     */
    exitFuncArgList?: (ctx: FuncArgListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.funcArgExpr`.
     * @param ctx the parse tree
     */
    enterFuncArgExpr?: (ctx: FuncArgExprContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.funcArgExpr`.
     * @param ctx the parse tree
     */
    exitFuncArgExpr?: (ctx: FuncArgExprContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.arrayExpr`.
     * @param ctx the parse tree
     */
    enterArrayExpr?: (ctx: ArrayExprContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.arrayExpr`.
     * @param ctx the parse tree
     */
    exitArrayExpr?: (ctx: ArrayExprContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.extractArg`.
     * @param ctx the parse tree
     */
    enterExtractArg?: (ctx: ExtractArgContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.extractArg`.
     * @param ctx the parse tree
     */
    exitExtractArg?: (ctx: ExtractArgContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.unicodeNormalForm`.
     * @param ctx the parse tree
     */
    enterUnicodeNormalForm?: (ctx: UnicodeNormalFormContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.unicodeNormalForm`.
     * @param ctx the parse tree
     */
    exitUnicodeNormalForm?: (ctx: UnicodeNormalFormContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.substrList`.
     * @param ctx the parse tree
     */
    enterSubstrList?: (ctx: SubstrListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.substrList`.
     * @param ctx the parse tree
     */
    exitSubstrList?: (ctx: SubstrListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.when_clause`.
     * @param ctx the parse tree
     */
    enterWhen_clause?: (ctx: When_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.when_clause`.
     * @param ctx the parse tree
     */
    exitWhen_clause?: (ctx: When_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.indirectionEl`.
     * @param ctx the parse tree
     */
    enterIndirectionEl?: (ctx: IndirectionElContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.indirectionEl`.
     * @param ctx the parse tree
     */
    exitIndirectionEl?: (ctx: IndirectionElContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.indirection`.
     * @param ctx the parse tree
     */
    enterIndirection?: (ctx: IndirectionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.indirection`.
     * @param ctx the parse tree
     */
    exitIndirection?: (ctx: IndirectionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.optIndirection`.
     * @param ctx the parse tree
     */
    enterOptIndirection?: (ctx: OptIndirectionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.optIndirection`.
     * @param ctx the parse tree
     */
    exitOptIndirection?: (ctx: OptIndirectionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.targetList`.
     * @param ctx the parse tree
     */
    enterTargetList?: (ctx: TargetListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.targetList`.
     * @param ctx the parse tree
     */
    exitTargetList?: (ctx: TargetListContext) => void;
    /**
     * Enter a parse tree produced by the `target_label`
     * labeled alternative in `PostgreSqlParser.targetEl`.
     * @param ctx the parse tree
     */
    enterTarget_label?: (ctx: Target_labelContext) => void;
    /**
     * Exit a parse tree produced by the `target_label`
     * labeled alternative in `PostgreSqlParser.targetEl`.
     * @param ctx the parse tree
     */
    exitTarget_label?: (ctx: Target_labelContext) => void;
    /**
     * Enter a parse tree produced by the `target_star`
     * labeled alternative in `PostgreSqlParser.targetEl`.
     * @param ctx the parse tree
     */
    enterTarget_star?: (ctx: Target_starContext) => void;
    /**
     * Exit a parse tree produced by the `target_star`
     * labeled alternative in `PostgreSqlParser.targetEl`.
     * @param ctx the parse tree
     */
    exitTarget_star?: (ctx: Target_starContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.qualifiedNameList`.
     * @param ctx the parse tree
     */
    enterQualifiedNameList?: (ctx: QualifiedNameListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.qualifiedNameList`.
     * @param ctx the parse tree
     */
    exitQualifiedNameList?: (ctx: QualifiedNameListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.tableNameList`.
     * @param ctx the parse tree
     */
    enterTableNameList?: (ctx: TableNameListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.tableNameList`.
     * @param ctx the parse tree
     */
    exitTableNameList?: (ctx: TableNameListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.schemaNameList`.
     * @param ctx the parse tree
     */
    enterSchemaNameList?: (ctx: SchemaNameListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.schemaNameList`.
     * @param ctx the parse tree
     */
    exitSchemaNameList?: (ctx: SchemaNameListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.databaseNameList`.
     * @param ctx the parse tree
     */
    enterDatabaseNameList?: (ctx: DatabaseNameListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.databaseNameList`.
     * @param ctx the parse tree
     */
    exitDatabaseNameList?: (ctx: DatabaseNameListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.tableSpaceNameCreate`.
     * @param ctx the parse tree
     */
    enterTableSpaceNameCreate?: (ctx: TableSpaceNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.tableSpaceNameCreate`.
     * @param ctx the parse tree
     */
    exitTableSpaceNameCreate?: (ctx: TableSpaceNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.tableSpaceName`.
     * @param ctx the parse tree
     */
    enterTableSpaceName?: (ctx: TableSpaceNameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.tableSpaceName`.
     * @param ctx the parse tree
     */
    exitTableSpaceName?: (ctx: TableSpaceNameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.tableNameCreate`.
     * @param ctx the parse tree
     */
    enterTableNameCreate?: (ctx: TableNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.tableNameCreate`.
     * @param ctx the parse tree
     */
    exitTableNameCreate?: (ctx: TableNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.tableName`.
     * @param ctx the parse tree
     */
    enterTableName?: (ctx: TableNameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.tableName`.
     * @param ctx the parse tree
     */
    exitTableName?: (ctx: TableNameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.viewNameCreate`.
     * @param ctx the parse tree
     */
    enterViewNameCreate?: (ctx: ViewNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.viewNameCreate`.
     * @param ctx the parse tree
     */
    exitViewNameCreate?: (ctx: ViewNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.viewName`.
     * @param ctx the parse tree
     */
    enterViewName?: (ctx: ViewNameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.viewName`.
     * @param ctx the parse tree
     */
    exitViewName?: (ctx: ViewNameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.qualifiedName`.
     * @param ctx the parse tree
     */
    enterQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.qualifiedName`.
     * @param ctx the parse tree
     */
    exitQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.tableSpaceNameList`.
     * @param ctx the parse tree
     */
    enterTableSpaceNameList?: (ctx: TableSpaceNameListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.tableSpaceNameList`.
     * @param ctx the parse tree
     */
    exitTableSpaceNameList?: (ctx: TableSpaceNameListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.nameList`.
     * @param ctx the parse tree
     */
    enterNameList?: (ctx: NameListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.nameList`.
     * @param ctx the parse tree
     */
    exitNameList?: (ctx: NameListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.databaseNameCreate`.
     * @param ctx the parse tree
     */
    enterDatabaseNameCreate?: (ctx: DatabaseNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.databaseNameCreate`.
     * @param ctx the parse tree
     */
    exitDatabaseNameCreate?: (ctx: DatabaseNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.databaseName`.
     * @param ctx the parse tree
     */
    enterDatabaseName?: (ctx: DatabaseNameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.databaseName`.
     * @param ctx the parse tree
     */
    exitDatabaseName?: (ctx: DatabaseNameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.schemaName`.
     * @param ctx the parse tree
     */
    enterSchemaName?: (ctx: SchemaNameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.schemaName`.
     * @param ctx the parse tree
     */
    exitSchemaName?: (ctx: SchemaNameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.routineNameCreate`.
     * @param ctx the parse tree
     */
    enterRoutineNameCreate?: (ctx: RoutineNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.routineNameCreate`.
     * @param ctx the parse tree
     */
    exitRoutineNameCreate?: (ctx: RoutineNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.routineName`.
     * @param ctx the parse tree
     */
    enterRoutineName?: (ctx: RoutineNameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.routineName`.
     * @param ctx the parse tree
     */
    exitRoutineName?: (ctx: RoutineNameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.procedureName`.
     * @param ctx the parse tree
     */
    enterProcedureName?: (ctx: ProcedureNameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.procedureName`.
     * @param ctx the parse tree
     */
    exitProcedureName?: (ctx: ProcedureNameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.procedureNameCreate`.
     * @param ctx the parse tree
     */
    enterProcedureNameCreate?: (ctx: ProcedureNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.procedureNameCreate`.
     * @param ctx the parse tree
     */
    exitProcedureNameCreate?: (ctx: ProcedureNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.columnName`.
     * @param ctx the parse tree
     */
    enterColumnName?: (ctx: ColumnNameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.columnName`.
     * @param ctx the parse tree
     */
    exitColumnName?: (ctx: ColumnNameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.columnNameCreate`.
     * @param ctx the parse tree
     */
    enterColumnNameCreate?: (ctx: ColumnNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.columnNameCreate`.
     * @param ctx the parse tree
     */
    exitColumnNameCreate?: (ctx: ColumnNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.functionNameCreate`.
     * @param ctx the parse tree
     */
    enterFunctionNameCreate?: (ctx: FunctionNameCreateContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.functionNameCreate`.
     * @param ctx the parse tree
     */
    exitFunctionNameCreate?: (ctx: FunctionNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.functionName`.
     * @param ctx the parse tree
     */
    enterFunctionName?: (ctx: FunctionNameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.functionName`.
     * @param ctx the parse tree
     */
    exitFunctionName?: (ctx: FunctionNameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stringConst`.
     * @param ctx the parse tree
     */
    enterStringConst?: (ctx: StringConstContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stringConst`.
     * @param ctx the parse tree
     */
    exitStringConst?: (ctx: StringConstContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.anysconst`.
     * @param ctx the parse tree
     */
    enterAnysconst?: (ctx: AnysconstContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.anysconst`.
     * @param ctx the parse tree
     */
    exitAnysconst?: (ctx: AnysconstContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.signedConst`.
     * @param ctx the parse tree
     */
    enterSignedConst?: (ctx: SignedConstContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.signedConst`.
     * @param ctx the parse tree
     */
    exitSignedConst?: (ctx: SignedConstContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.roleSpec`.
     * @param ctx the parse tree
     */
    enterRoleSpec?: (ctx: RoleSpecContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.roleSpec`.
     * @param ctx the parse tree
     */
    exitRoleSpec?: (ctx: RoleSpecContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.roleList`.
     * @param ctx the parse tree
     */
    enterRoleList?: (ctx: RoleListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.roleList`.
     * @param ctx the parse tree
     */
    exitRoleList?: (ctx: RoleListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.colId`.
     * @param ctx the parse tree
     */
    enterColId?: (ctx: ColIdContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.colId`.
     * @param ctx the parse tree
     */
    exitColId?: (ctx: ColIdContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.typeFunctionName`.
     * @param ctx the parse tree
     */
    enterTypeFunctionName?: (ctx: TypeFunctionNameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.typeFunctionName`.
     * @param ctx the parse tree
     */
    exitTypeFunctionName?: (ctx: TypeFunctionNameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.nonReservedWord`.
     * @param ctx the parse tree
     */
    enterNonReservedWord?: (ctx: NonReservedWordContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.nonReservedWord`.
     * @param ctx the parse tree
     */
    exitNonReservedWord?: (ctx: NonReservedWordContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.colLabel`.
     * @param ctx the parse tree
     */
    enterColLabel?: (ctx: ColLabelContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.colLabel`.
     * @param ctx the parse tree
     */
    exitColLabel?: (ctx: ColLabelContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.identifier`.
     * @param ctx the parse tree
     */
    enterIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.identifier`.
     * @param ctx the parse tree
     */
    exitIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.unreservedKeyword`.
     * @param ctx the parse tree
     */
    enterUnreservedKeyword?: (ctx: UnreservedKeywordContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.unreservedKeyword`.
     * @param ctx the parse tree
     */
    exitUnreservedKeyword?: (ctx: UnreservedKeywordContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.colNameKeyword`.
     * @param ctx the parse tree
     */
    enterColNameKeyword?: (ctx: ColNameKeywordContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.colNameKeyword`.
     * @param ctx the parse tree
     */
    exitColNameKeyword?: (ctx: ColNameKeywordContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.typeFuncNameKeyword`.
     * @param ctx the parse tree
     */
    enterTypeFuncNameKeyword?: (ctx: TypeFuncNameKeywordContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.typeFuncNameKeyword`.
     * @param ctx the parse tree
     */
    exitTypeFuncNameKeyword?: (ctx: TypeFuncNameKeywordContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.reservedKeyword`.
     * @param ctx the parse tree
     */
    enterReservedKeyword?: (ctx: ReservedKeywordContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.reservedKeyword`.
     * @param ctx the parse tree
     */
    exitReservedKeyword?: (ctx: ReservedKeywordContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.plBlock`.
     * @param ctx the parse tree
     */
    enterPlBlock?: (ctx: PlBlockContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.plBlock`.
     * @param ctx the parse tree
     */
    exitPlBlock?: (ctx: PlBlockContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.labelDecl`.
     * @param ctx the parse tree
     */
    enterLabelDecl?: (ctx: LabelDeclContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.labelDecl`.
     * @param ctx the parse tree
     */
    exitLabelDecl?: (ctx: LabelDeclContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.declStatement`.
     * @param ctx the parse tree
     */
    enterDeclStatement?: (ctx: DeclStatementContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.declStatement`.
     * @param ctx the parse tree
     */
    exitDeclStatement?: (ctx: DeclStatementContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.declCursorArg`.
     * @param ctx the parse tree
     */
    enterDeclCursorArg?: (ctx: DeclCursorArgContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.declCursorArg`.
     * @param ctx the parse tree
     */
    exitDeclCursorArg?: (ctx: DeclCursorArgContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.assignOperator`.
     * @param ctx the parse tree
     */
    enterAssignOperator?: (ctx: AssignOperatorContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.assignOperator`.
     * @param ctx the parse tree
     */
    exitAssignOperator?: (ctx: AssignOperatorContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.procStmt`.
     * @param ctx the parse tree
     */
    enterProcStmt?: (ctx: ProcStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.procStmt`.
     * @param ctx the parse tree
     */
    exitProcStmt?: (ctx: ProcStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmtPerform`.
     * @param ctx the parse tree
     */
    enterStmtPerform?: (ctx: StmtPerformContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmtPerform`.
     * @param ctx the parse tree
     */
    exitStmtPerform?: (ctx: StmtPerformContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmtCall`.
     * @param ctx the parse tree
     */
    enterStmtCall?: (ctx: StmtCallContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmtCall`.
     * @param ctx the parse tree
     */
    exitStmtCall?: (ctx: StmtCallContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmtAssign`.
     * @param ctx the parse tree
     */
    enterStmtAssign?: (ctx: StmtAssignContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmtAssign`.
     * @param ctx the parse tree
     */
    exitStmtAssign?: (ctx: StmtAssignContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmtGetdiag`.
     * @param ctx the parse tree
     */
    enterStmtGetdiag?: (ctx: StmtGetdiagContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmtGetdiag`.
     * @param ctx the parse tree
     */
    exitStmtGetdiag?: (ctx: StmtGetdiagContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.getdiagListItem`.
     * @param ctx the parse tree
     */
    enterGetdiagListItem?: (ctx: GetdiagListItemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.getdiagListItem`.
     * @param ctx the parse tree
     */
    exitGetdiagListItem?: (ctx: GetdiagListItemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.assignVar`.
     * @param ctx the parse tree
     */
    enterAssignVar?: (ctx: AssignVarContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.assignVar`.
     * @param ctx the parse tree
     */
    exitAssignVar?: (ctx: AssignVarContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmtIf`.
     * @param ctx the parse tree
     */
    enterStmtIf?: (ctx: StmtIfContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmtIf`.
     * @param ctx the parse tree
     */
    exitStmtIf?: (ctx: StmtIfContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmtElse`.
     * @param ctx the parse tree
     */
    enterStmtElse?: (ctx: StmtElseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmtElse`.
     * @param ctx the parse tree
     */
    exitStmtElse?: (ctx: StmtElseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmtCase`.
     * @param ctx the parse tree
     */
    enterStmtCase?: (ctx: StmtCaseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmtCase`.
     * @param ctx the parse tree
     */
    exitStmtCase?: (ctx: StmtCaseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmtLoopWhileFor`.
     * @param ctx the parse tree
     */
    enterStmtLoopWhileFor?: (ctx: StmtLoopWhileForContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmtLoopWhileFor`.
     * @param ctx the parse tree
     */
    exitStmtLoopWhileFor?: (ctx: StmtLoopWhileForContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.forControl`.
     * @param ctx the parse tree
     */
    enterForControl?: (ctx: ForControlContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.forControl`.
     * @param ctx the parse tree
     */
    exitForControl?: (ctx: ForControlContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmtForeach`.
     * @param ctx the parse tree
     */
    enterStmtForeach?: (ctx: StmtForeachContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmtForeach`.
     * @param ctx the parse tree
     */
    exitStmtForeach?: (ctx: StmtForeachContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmtExit`.
     * @param ctx the parse tree
     */
    enterStmtExit?: (ctx: StmtExitContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmtExit`.
     * @param ctx the parse tree
     */
    exitStmtExit?: (ctx: StmtExitContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmtReturn`.
     * @param ctx the parse tree
     */
    enterStmtReturn?: (ctx: StmtReturnContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmtReturn`.
     * @param ctx the parse tree
     */
    exitStmtReturn?: (ctx: StmtReturnContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmtRaise`.
     * @param ctx the parse tree
     */
    enterStmtRaise?: (ctx: StmtRaiseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmtRaise`.
     * @param ctx the parse tree
     */
    exitStmtRaise?: (ctx: StmtRaiseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.optRaiseUsingElem`.
     * @param ctx the parse tree
     */
    enterOptRaiseUsingElem?: (ctx: OptRaiseUsingElemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.optRaiseUsingElem`.
     * @param ctx the parse tree
     */
    exitOptRaiseUsingElem?: (ctx: OptRaiseUsingElemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmtAssert`.
     * @param ctx the parse tree
     */
    enterStmtAssert?: (ctx: StmtAssertContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmtAssert`.
     * @param ctx the parse tree
     */
    exitStmtAssert?: (ctx: StmtAssertContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.loopBody`.
     * @param ctx the parse tree
     */
    enterLoopBody?: (ctx: LoopBodyContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.loopBody`.
     * @param ctx the parse tree
     */
    exitLoopBody?: (ctx: LoopBodyContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmtExecsql`.
     * @param ctx the parse tree
     */
    enterStmtExecsql?: (ctx: StmtExecsqlContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmtExecsql`.
     * @param ctx the parse tree
     */
    exitStmtExecsql?: (ctx: StmtExecsqlContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmtDynexecute`.
     * @param ctx the parse tree
     */
    enterStmtDynexecute?: (ctx: StmtDynexecuteContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmtDynexecute`.
     * @param ctx the parse tree
     */
    exitStmtDynexecute?: (ctx: StmtDynexecuteContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.optExecuteInto`.
     * @param ctx the parse tree
     */
    enterOptExecuteInto?: (ctx: OptExecuteIntoContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.optExecuteInto`.
     * @param ctx the parse tree
     */
    exitOptExecuteInto?: (ctx: OptExecuteIntoContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmtOpen`.
     * @param ctx the parse tree
     */
    enterStmtOpen?: (ctx: StmtOpenContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmtOpen`.
     * @param ctx the parse tree
     */
    exitStmtOpen?: (ctx: StmtOpenContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.optOpenBoundListItem`.
     * @param ctx the parse tree
     */
    enterOptOpenBoundListItem?: (ctx: OptOpenBoundListItemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.optOpenBoundListItem`.
     * @param ctx the parse tree
     */
    exitOptOpenBoundListItem?: (ctx: OptOpenBoundListItemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmtFetch`.
     * @param ctx the parse tree
     */
    enterStmtFetch?: (ctx: StmtFetchContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmtFetch`.
     * @param ctx the parse tree
     */
    exitStmtFetch?: (ctx: StmtFetchContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.optFetchFirection`.
     * @param ctx the parse tree
     */
    enterOptFetchFirection?: (ctx: OptFetchFirectionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.optFetchFirection`.
     * @param ctx the parse tree
     */
    exitOptFetchFirection?: (ctx: OptFetchFirectionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmtMove`.
     * @param ctx the parse tree
     */
    enterStmtMove?: (ctx: StmtMoveContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmtMove`.
     * @param ctx the parse tree
     */
    exitStmtMove?: (ctx: StmtMoveContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.mergeStmt`.
     * @param ctx the parse tree
     */
    enterMergeStmt?: (ctx: MergeStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.mergeStmt`.
     * @param ctx the parse tree
     */
    exitMergeStmt?: (ctx: MergeStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.dataSource`.
     * @param ctx the parse tree
     */
    enterDataSource?: (ctx: DataSourceContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.dataSource`.
     * @param ctx the parse tree
     */
    exitDataSource?: (ctx: DataSourceContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.mergeWhenClause`.
     * @param ctx the parse tree
     */
    enterMergeWhenClause?: (ctx: MergeWhenClauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.mergeWhenClause`.
     * @param ctx the parse tree
     */
    exitMergeWhenClause?: (ctx: MergeWhenClauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.mergeInsert`.
     * @param ctx the parse tree
     */
    enterMergeInsert?: (ctx: MergeInsertContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.mergeInsert`.
     * @param ctx the parse tree
     */
    exitMergeInsert?: (ctx: MergeInsertContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.mergeUpdate`.
     * @param ctx the parse tree
     */
    enterMergeUpdate?: (ctx: MergeUpdateContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.mergeUpdate`.
     * @param ctx the parse tree
     */
    exitMergeUpdate?: (ctx: MergeUpdateContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.defaultValuesOrValues`.
     * @param ctx the parse tree
     */
    enterDefaultValuesOrValues?: (ctx: DefaultValuesOrValuesContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.defaultValuesOrValues`.
     * @param ctx the parse tree
     */
    exitDefaultValuesOrValues?: (ctx: DefaultValuesOrValuesContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.exprofdefault`.
     * @param ctx the parse tree
     */
    enterExprofdefault?: (ctx: ExprofdefaultContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.exprofdefault`.
     * @param ctx the parse tree
     */
    exitExprofdefault?: (ctx: ExprofdefaultContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmtClose`.
     * @param ctx the parse tree
     */
    enterStmtClose?: (ctx: StmtCloseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmtClose`.
     * @param ctx the parse tree
     */
    exitStmtClose?: (ctx: StmtCloseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmtNull`.
     * @param ctx the parse tree
     */
    enterStmtNull?: (ctx: StmtNullContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmtNull`.
     * @param ctx the parse tree
     */
    exitStmtNull?: (ctx: StmtNullContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmtCommitOrRollback`.
     * @param ctx the parse tree
     */
    enterStmtCommitOrRollback?: (ctx: StmtCommitOrRollbackContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmtCommitOrRollback`.
     * @param ctx the parse tree
     */
    exitStmtCommitOrRollback?: (ctx: StmtCommitOrRollbackContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmtSet`.
     * @param ctx the parse tree
     */
    enterStmtSet?: (ctx: StmtSetContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmtSet`.
     * @param ctx the parse tree
     */
    exitStmtSet?: (ctx: StmtSetContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.cursorVariable`.
     * @param ctx the parse tree
     */
    enterCursorVariable?: (ctx: CursorVariableContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.cursorVariable`.
     * @param ctx the parse tree
     */
    exitCursorVariable?: (ctx: CursorVariableContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.exceptionSect`.
     * @param ctx the parse tree
     */
    enterExceptionSect?: (ctx: ExceptionSectContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.exceptionSect`.
     * @param ctx the parse tree
     */
    exitExceptionSect?: (ctx: ExceptionSectContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.procCondition`.
     * @param ctx the parse tree
     */
    enterProcCondition?: (ctx: ProcConditionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.procCondition`.
     * @param ctx the parse tree
     */
    exitProcCondition?: (ctx: ProcConditionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.anyIdentifier`.
     * @param ctx the parse tree
     */
    enterAnyIdentifier?: (ctx: AnyIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.anyIdentifier`.
     * @param ctx the parse tree
     */
    exitAnyIdentifier?: (ctx: AnyIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.sqlExpression`.
     * @param ctx the parse tree
     */
    enterSqlExpression?: (ctx: SqlExpressionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.sqlExpression`.
     * @param ctx the parse tree
     */
    exitSqlExpression?: (ctx: SqlExpressionContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

