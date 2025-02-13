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
import { Alter_routine_clauseContext } from "./PostgreSqlParser.js";
import { Routine_actionContext } from "./PostgreSqlParser.js";
import { CreateGroupStmtContext } from "./PostgreSqlParser.js";
import { AlterGroupStmtContext } from "./PostgreSqlParser.js";
import { CreateSchemaStmtContext } from "./PostgreSqlParser.js";
import { SchemaNameCreateContext } from "./PostgreSqlParser.js";
import { Schema_stmtContext } from "./PostgreSqlParser.js";
import { VariableSetStmtContext } from "./PostgreSqlParser.js";
import { Set_restContext } from "./PostgreSqlParser.js";
import { Generic_setContext } from "./PostgreSqlParser.js";
import { Set_rest_moreContext } from "./PostgreSqlParser.js";
import { Var_nameContext } from "./PostgreSqlParser.js";
import { Var_listContext } from "./PostgreSqlParser.js";
import { Var_valueContext } from "./PostgreSqlParser.js";
import { Iso_levelContext } from "./PostgreSqlParser.js";
import { Opt_boolean_or_string_columnContext } from "./PostgreSqlParser.js";
import { Opt_boolean_or_stringContext } from "./PostgreSqlParser.js";
import { Zone_valueContext } from "./PostgreSqlParser.js";
import { NonReservedWordOrStringConstContext } from "./PostgreSqlParser.js";
import { VariableResetStmtContext } from "./PostgreSqlParser.js";
import { Reset_restContext } from "./PostgreSqlParser.js";
import { SetOrResetClauseContext } from "./PostgreSqlParser.js";
import { FunctionSetOrResetClauseContext } from "./PostgreSqlParser.js";
import { VariableShowStmtContext } from "./PostgreSqlParser.js";
import { ConstraintsSetStmtContext } from "./PostgreSqlParser.js";
import { CheckPointStmtContext } from "./PostgreSqlParser.js";
import { DiscardStmtContext } from "./PostgreSqlParser.js";
import { AlterTableStmtContext } from "./PostgreSqlParser.js";
import { Alter_table_cmdsContext } from "./PostgreSqlParser.js";
import { Partition_bound_specContext } from "./PostgreSqlParser.js";
import { Partition_bound_clauseContext } from "./PostgreSqlParser.js";
import { Partition_bound_chooseContext } from "./PostgreSqlParser.js";
import { Partition_with_clauseContext } from "./PostgreSqlParser.js";
import { Partition_cmdContext } from "./PostgreSqlParser.js";
import { Index_partition_cmdContext } from "./PostgreSqlParser.js";
import { Alter_table_cmdContext } from "./PostgreSqlParser.js";
import { Alter_column_defaultContext } from "./PostgreSqlParser.js";
import { Opt_drop_behaviorContext } from "./PostgreSqlParser.js";
import { Opt_collate_clauseContext } from "./PostgreSqlParser.js";
import { RelOptionsContext } from "./PostgreSqlParser.js";
import { OptRelOptionsContext } from "./PostgreSqlParser.js";
import { RelOptionElemContext } from "./PostgreSqlParser.js";
import { PartitionBoundSpecContext } from "./PostgreSqlParser.js";
import { AlterCompositeTypeStmtContext } from "./PostgreSqlParser.js";
import { Alter_type_cmdContext } from "./PostgreSqlParser.js";
import { ClosePortalStmtContext } from "./PostgreSqlParser.js";
import { CopyStmtContext } from "./PostgreSqlParser.js";
import { CopyOptionsNoparensContext } from "./PostgreSqlParser.js";
import { CopyOptionsContext } from "./PostgreSqlParser.js";
import { Copy_generic_opt_elemContext } from "./PostgreSqlParser.js";
import { ColumnCreateTableContext } from "./PostgreSqlParser.js";
import { OptTempContext } from "./PostgreSqlParser.js";
import { OptTypedTableElEmentListContext } from "./PostgreSqlParser.js";
import { TableElementListContext } from "./PostgreSqlParser.js";
import { TableElementContext } from "./PostgreSqlParser.js";
import { TypedTableElementContext } from "./PostgreSqlParser.js";
import { Column_defContext } from "./PostgreSqlParser.js";
import { ColConstraintContext } from "./PostgreSqlParser.js";
import { ColConstraintElemContext } from "./PostgreSqlParser.js";
import { Generated_whenContext } from "./PostgreSqlParser.js";
import { TableLikeOptionContext } from "./PostgreSqlParser.js";
import { ConstraintElemContext } from "./PostgreSqlParser.js";
import { Opt_column_listContext } from "./PostgreSqlParser.js";
import { Opt_column_list_createContext } from "./PostgreSqlParser.js";
import { Column_listContext } from "./PostgreSqlParser.js";
import { Opt_c_includeContext } from "./PostgreSqlParser.js";
import { Key_matchContext } from "./PostgreSqlParser.js";
import { ExclusionConstraintElemContext } from "./PostgreSqlParser.js";
import { Key_actionsContext } from "./PostgreSqlParser.js";
import { Key_updateContext } from "./PostgreSqlParser.js";
import { Key_deleteContext } from "./PostgreSqlParser.js";
import { Key_actionContext } from "./PostgreSqlParser.js";
import { OptInheritContext } from "./PostgreSqlParser.js";
import { PartitionSpecContext } from "./PostgreSqlParser.js";
import { Part_elemContext } from "./PostgreSqlParser.js";
import { Table_access_method_clauseContext } from "./PostgreSqlParser.js";
import { OptWithContext } from "./PostgreSqlParser.js";
import { OnCommitOptionContext } from "./PostgreSqlParser.js";
import { OptTableSpaceContext } from "./PostgreSqlParser.js";
import { OptConstableSpaceContext } from "./PostgreSqlParser.js";
import { ExistingIndexContext } from "./PostgreSqlParser.js";
import { CreateStatsStmtContext } from "./PostgreSqlParser.js";
import { AlterStatsStmtContext } from "./PostgreSqlParser.js";
import { QueryCreateTableContext } from "./PostgreSqlParser.js";
import { Create_as_targetContext } from "./PostgreSqlParser.js";
import { Opt_with_dataContext } from "./PostgreSqlParser.js";
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
import { Fdw_optionContext } from "./PostgreSqlParser.js";
import { AlterFdwStmtContext } from "./PostgreSqlParser.js";
import { Create_generic_optionsContext } from "./PostgreSqlParser.js";
import { Alter_generic_optionsContext } from "./PostgreSqlParser.js";
import { Alter_generic_option_elemContext } from "./PostgreSqlParser.js";
import { Generic_option_elemContext } from "./PostgreSqlParser.js";
import { CreateForeignServerStmtContext } from "./PostgreSqlParser.js";
import { Foreign_server_versionContext } from "./PostgreSqlParser.js";
import { AlterForeignServerStmtContext } from "./PostgreSqlParser.js";
import { CreateForeignTableContext } from "./PostgreSqlParser.js";
import { CreatePartitionForeignTableContext } from "./PostgreSqlParser.js";
import { ImportForeignSchemaStmtContext } from "./PostgreSqlParser.js";
import { CreateUserMappingStmtContext } from "./PostgreSqlParser.js";
import { AlterUserMappingStmtContext } from "./PostgreSqlParser.js";
import { CreatePolicyStmtContext } from "./PostgreSqlParser.js";
import { AlterPolicyStmtContext } from "./PostgreSqlParser.js";
import { AlterProcedureStmtContext } from "./PostgreSqlParser.js";
import { Procedure_actionContext } from "./PostgreSqlParser.js";
import { RowSecurityOptionalExprContext } from "./PostgreSqlParser.js";
import { RowSecurityOptionalWithCheckContext } from "./PostgreSqlParser.js";
import { CreateAccessMethodStmtContext } from "./PostgreSqlParser.js";
import { CreateTrigStmtContext } from "./PostgreSqlParser.js";
import { TriggerActionTimeContext } from "./PostgreSqlParser.js";
import { TriggerEventsContext } from "./PostgreSqlParser.js";
import { TriggerOneEventContext } from "./PostgreSqlParser.js";
import { TriggerWhenContext } from "./PostgreSqlParser.js";
import { Function_or_procedureContext } from "./PostgreSqlParser.js";
import { TriggerFuncArgsContext } from "./PostgreSqlParser.js";
import { TriggerFuncArgContext } from "./PostgreSqlParser.js";
import { ConstraintAttributeElemContext } from "./PostgreSqlParser.js";
import { CreateEventTrigStmtContext } from "./PostgreSqlParser.js";
import { Event_trigger_when_itemContext } from "./PostgreSqlParser.js";
import { AlterEventTrigStmtContext } from "./PostgreSqlParser.js";
import { CreateAssertionStmtContext } from "./PostgreSqlParser.js";
import { DefineStmtContext } from "./PostgreSqlParser.js";
import { DefinitionContext } from "./PostgreSqlParser.js";
import { Def_elemContext } from "./PostgreSqlParser.js";
import { Def_argContext } from "./PostgreSqlParser.js";
import { Old_aggregate_elemContext } from "./PostgreSqlParser.js";
import { AlterEnumStmtContext } from "./PostgreSqlParser.js";
import { Opt_if_not_existsContext } from "./PostgreSqlParser.js";
import { CreateOperatorClassStmtContext } from "./PostgreSqlParser.js";
import { OpClassItemContext } from "./PostgreSqlParser.js";
import { CreateOperatorFamilyStmtContext } from "./PostgreSqlParser.js";
import { AlterOperatorFamilyStmtContext } from "./PostgreSqlParser.js";
import { OpClassDropContext } from "./PostgreSqlParser.js";
import { ReassignOwnedStmtContext } from "./PostgreSqlParser.js";
import { DropStmtContext } from "./PostgreSqlParser.js";
import { Object_type_any_nameContext } from "./PostgreSqlParser.js";
import { Object_type_nameContext } from "./PostgreSqlParser.js";
import { Any_name_listContext } from "./PostgreSqlParser.js";
import { Any_nameContext } from "./PostgreSqlParser.js";
import { AttrsContext } from "./PostgreSqlParser.js";
import { TruncateStmtContext } from "./PostgreSqlParser.js";
import { Truncate_tableContext } from "./PostgreSqlParser.js";
import { CommentStmtContext } from "./PostgreSqlParser.js";
import { SecLabelStmtContext } from "./PostgreSqlParser.js";
import { FetchStmtContext } from "./PostgreSqlParser.js";
import { Fetch_argsContext } from "./PostgreSqlParser.js";
import { From_inContext } from "./PostgreSqlParser.js";
import { GrantStmtContext } from "./PostgreSqlParser.js";
import { RevokeStmtContext } from "./PostgreSqlParser.js";
import { PrivilegesContext } from "./PostgreSqlParser.js";
import { BeforePrivilegeSelectContext } from "./PostgreSqlParser.js";
import { PrivilegeContext } from "./PostgreSqlParser.js";
import { Privilege_targetContext } from "./PostgreSqlParser.js";
import { Grantee_listContext } from "./PostgreSqlParser.js";
import { GrantRoleStmtContext } from "./PostgreSqlParser.js";
import { RevokeRoleStmtContext } from "./PostgreSqlParser.js";
import { AlterDefaultPrivilegesStmtContext } from "./PostgreSqlParser.js";
import { DefaclactionContext } from "./PostgreSqlParser.js";
import { Defacl_privilege_targetContext } from "./PostgreSqlParser.js";
import { IndexStmtContext } from "./PostgreSqlParser.js";
import { Index_paramsContext } from "./PostgreSqlParser.js";
import { Index_elemContext } from "./PostgreSqlParser.js";
import { CreateFunctionStmtContext } from "./PostgreSqlParser.js";
import { Opt_or_replaceContext } from "./PostgreSqlParser.js";
import { Func_argsContext } from "./PostgreSqlParser.js";
import { Func_args_listContext } from "./PostgreSqlParser.js";
import { RoutineWithArgTypesListContext } from "./PostgreSqlParser.js";
import { RoutineWithArgTypesContext } from "./PostgreSqlParser.js";
import { ProcedureWithArgTypesListContext } from "./PostgreSqlParser.js";
import { ProcedureWithArgTypesContext } from "./PostgreSqlParser.js";
import { FunctionWithArgTypesListContext } from "./PostgreSqlParser.js";
import { FunctionWithArgTypesContext } from "./PostgreSqlParser.js";
import { Func_argContext } from "./PostgreSqlParser.js";
import { Arg_classContext } from "./PostgreSqlParser.js";
import { Func_typeContext } from "./PostgreSqlParser.js";
import { Func_arg_with_defaultContext } from "./PostgreSqlParser.js";
import { Aggregate_argsContext } from "./PostgreSqlParser.js";
import { AggregateWithArgTypesContext } from "./PostgreSqlParser.js";
import { Common_func_opt_itemContext } from "./PostgreSqlParser.js";
import { Create_func_opt_itemContext } from "./PostgreSqlParser.js";
import { Opt_definitionContext } from "./PostgreSqlParser.js";
import { Table_func_columnContext } from "./PostgreSqlParser.js";
import { AlterFunctionStmtContext } from "./PostgreSqlParser.js";
import { RemoveFuncStmtContext } from "./PostgreSqlParser.js";
import { RemoveAggregateStmtContext } from "./PostgreSqlParser.js";
import { RemoveOperatorStmtContext } from "./PostgreSqlParser.js";
import { OperatorArgTypesContext } from "./PostgreSqlParser.js";
import { Any_operatorContext } from "./PostgreSqlParser.js";
import { OperatorWithArgTypesContext } from "./PostgreSqlParser.js";
import { DoStmtContext } from "./PostgreSqlParser.js";
import { CreateCastStmtContext } from "./PostgreSqlParser.js";
import { Opt_if_existsContext } from "./PostgreSqlParser.js";
import { CreateTransformStmtContext } from "./PostgreSqlParser.js";
import { Sql_with_functionContext } from "./PostgreSqlParser.js";
import { ReindexStmtContext } from "./PostgreSqlParser.js";
import { AlterTblSpcStmtContext } from "./PostgreSqlParser.js";
import { RenameStmtContext } from "./PostgreSqlParser.js";
import { AlterObjectDependsStmtContext } from "./PostgreSqlParser.js";
import { AlterObjectSchemaStmtContext } from "./PostgreSqlParser.js";
import { AlterOperatorStmtContext } from "./PostgreSqlParser.js";
import { Operator_def_listContext } from "./PostgreSqlParser.js";
import { Operator_def_elemContext } from "./PostgreSqlParser.js";
import { AlterTypeStmtContext } from "./PostgreSqlParser.js";
import { AlterOwnerStmtContext } from "./PostgreSqlParser.js";
import { CreatePublicationStmtContext } from "./PostgreSqlParser.js";
import { AlterPublicationStmtContext } from "./PostgreSqlParser.js";
import { CreateSubscriptionStmtContext } from "./PostgreSqlParser.js";
import { AlterSubscriptionStmtContext } from "./PostgreSqlParser.js";
import { RuleStmtContext } from "./PostgreSqlParser.js";
import { RuleActionStmtContext } from "./PostgreSqlParser.js";
import { NotifyStmtContext } from "./PostgreSqlParser.js";
import { Notify_payloadContext } from "./PostgreSqlParser.js";
import { ListenStmtContext } from "./PostgreSqlParser.js";
import { UnListenStmtContext } from "./PostgreSqlParser.js";
import { TransactionStmtContext } from "./PostgreSqlParser.js";
import { Opt_transactionContext } from "./PostgreSqlParser.js";
import { Transaction_mode_itemContext } from "./PostgreSqlParser.js";
import { Transaction_mode_listContext } from "./PostgreSqlParser.js";
import { CreateViewContext } from "./PostgreSqlParser.js";
import { LoadStmtContext } from "./PostgreSqlParser.js";
import { CreateDatabaseContext } from "./PostgreSqlParser.js";
import { Create_db_opt_itemContext } from "./PostgreSqlParser.js";
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
import { Analyze_keywordContext } from "./PostgreSqlParser.js";
import { Vac_analyze_option_elemContext } from "./PostgreSqlParser.js";
import { Analyze_option_elemContext } from "./PostgreSqlParser.js";
import { Opt_verboseContext } from "./PostgreSqlParser.js";
import { Vacuum_relationContext } from "./PostgreSqlParser.js";
import { Vacuum_relation_listContext } from "./PostgreSqlParser.js";
import { ExplainStmtContext } from "./PostgreSqlParser.js";
import { ExplainableStmtContext } from "./PostgreSqlParser.js";
import { Explain_option_listContext } from "./PostgreSqlParser.js";
import { PrepareStmtContext } from "./PostgreSqlParser.js";
import { Prep_type_clauseContext } from "./PostgreSqlParser.js";
import { PreParableStmtContext } from "./PostgreSqlParser.js";
import { ExecuteStmtContext } from "./PostgreSqlParser.js";
import { Execute_param_clauseContext } from "./PostgreSqlParser.js";
import { DealLocateStmtContext } from "./PostgreSqlParser.js";
import { InsertStatementContext } from "./PostgreSqlParser.js";
import { Insert_restContext } from "./PostgreSqlParser.js";
import { Insert_column_listContext } from "./PostgreSqlParser.js";
import { Insert_column_itemContext } from "./PostgreSqlParser.js";
import { Returning_clauseContext } from "./PostgreSqlParser.js";
import { DeleteStmtContext } from "./PostgreSqlParser.js";
import { LockStmtContext } from "./PostgreSqlParser.js";
import { UpdateStmtContext } from "./PostgreSqlParser.js";
import { Set_clause_listContext } from "./PostgreSqlParser.js";
import { Set_clauseContext } from "./PostgreSqlParser.js";
import { DeclareCursorStmtContext } from "./PostgreSqlParser.js";
import { SelectStatementContext } from "./PostgreSqlParser.js";
import { Select_with_parensContext } from "./PostgreSqlParser.js";
import { Select_no_parensContext } from "./PostgreSqlParser.js";
import { Select_clauseContext } from "./PostgreSqlParser.js";
import { Simple_selectContext } from "./PostgreSqlParser.js";
import { Set_operator_with_all_or_distinctContext } from "./PostgreSqlParser.js";
import { With_clauseContext } from "./PostgreSqlParser.js";
import { Common_table_exprContext } from "./PostgreSqlParser.js";
import { Search_clauseContext } from "./PostgreSqlParser.js";
import { Cycle_clauseContext } from "./PostgreSqlParser.js";
import { Into_clauseContext } from "./PostgreSqlParser.js";
import { OptTempTableNameContext } from "./PostgreSqlParser.js";
import { Distinct_clauseContext } from "./PostgreSqlParser.js";
import { Sort_clauseContext } from "./PostgreSqlParser.js";
import { SortByContext } from "./PostgreSqlParser.js";
import { Select_limitContext } from "./PostgreSqlParser.js";
import { Limit_clauseContext } from "./PostgreSqlParser.js";
import { Fetch_clauseContext } from "./PostgreSqlParser.js";
import { Offset_clauseContext } from "./PostgreSqlParser.js";
import { Select_fetch_first_valueContext } from "./PostgreSqlParser.js";
import { Group_clauseContext } from "./PostgreSqlParser.js";
import { Group_by_listContext } from "./PostgreSqlParser.js";
import { Group_by_itemContext } from "./PostgreSqlParser.js";
import { For_locking_clauseContext } from "./PostgreSqlParser.js";
import { Values_clauseContext } from "./PostgreSqlParser.js";
import { From_clauseContext } from "./PostgreSqlParser.js";
import { From_listContext } from "./PostgreSqlParser.js";
import { Table_refContext } from "./PostgreSqlParser.js";
import { Alias_clauseContext } from "./PostgreSqlParser.js";
import { Func_alias_clauseContext } from "./PostgreSqlParser.js";
import { Join_typeContext } from "./PostgreSqlParser.js";
import { Join_qualContext } from "./PostgreSqlParser.js";
import { Relation_exprContext } from "./PostgreSqlParser.js";
import { Publication_relation_exprContext } from "./PostgreSqlParser.js";
import { Relation_expr_listContext } from "./PostgreSqlParser.js";
import { Relation_expr_opt_aliasContext } from "./PostgreSqlParser.js";
import { TableSampleClauseContext } from "./PostgreSqlParser.js";
import { Func_tableContext } from "./PostgreSqlParser.js";
import { RowsFromItemContext } from "./PostgreSqlParser.js";
import { Where_clauseContext } from "./PostgreSqlParser.js";
import { Where_or_current_clauseContext } from "./PostgreSqlParser.js";
import { TableFuncElementListContext } from "./PostgreSqlParser.js";
import { TableFuncElementContext } from "./PostgreSqlParser.js";
import { XmlTableContext } from "./PostgreSqlParser.js";
import { XmlTableColumnElContext } from "./PostgreSqlParser.js";
import { Xml_namespace_elContext } from "./PostgreSqlParser.js";
import { TypenameContext } from "./PostgreSqlParser.js";
import { SimpleTypeNameContext } from "./PostgreSqlParser.js";
import { ConstTypeNameContext } from "./PostgreSqlParser.js";
import { NumericContext } from "./PostgreSqlParser.js";
import { Opt_floatContext } from "./PostgreSqlParser.js";
import { BitContext } from "./PostgreSqlParser.js";
import { CharacterContext } from "./PostgreSqlParser.js";
import { ConstDatetimeContext } from "./PostgreSqlParser.js";
import { Opt_intervalContext } from "./PostgreSqlParser.js";
import { Interval_secondContext } from "./PostgreSqlParser.js";
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
import { Func_applicationContext } from "./PostgreSqlParser.js";
import { Func_exprContext } from "./PostgreSqlParser.js";
import { Func_expr_windowlessContext } from "./PostgreSqlParser.js";
import { Func_expr_common_subexprContext } from "./PostgreSqlParser.js";
import { Xml_attribute_listContext } from "./PostgreSqlParser.js";
import { Xml_attribute_elContext } from "./PostgreSqlParser.js";
import { Document_or_contentContext } from "./PostgreSqlParser.js";
import { XmlExistsArgumentContext } from "./PostgreSqlParser.js";
import { Xml_passing_mechContext } from "./PostgreSqlParser.js";
import { Window_clauseContext } from "./PostgreSqlParser.js";
import { Window_definitionContext } from "./PostgreSqlParser.js";
import { Over_clauseContext } from "./PostgreSqlParser.js";
import { Window_specificationContext } from "./PostgreSqlParser.js";
import { Opt_frame_clauseContext } from "./PostgreSqlParser.js";
import { Frame_boundContext } from "./PostgreSqlParser.js";
import { RowContext } from "./PostgreSqlParser.js";
import { Explicit_rowContext } from "./PostgreSqlParser.js";
import { Sub_typeContext } from "./PostgreSqlParser.js";
import { All_opContext } from "./PostgreSqlParser.js";
import { MathopContext } from "./PostgreSqlParser.js";
import { Qual_opContext } from "./PostgreSqlParser.js";
import { Qual_all_opContext } from "./PostgreSqlParser.js";
import { Subquery_OpContext } from "./PostgreSqlParser.js";
import { Expr_listContext } from "./PostgreSqlParser.js";
import { Column_exprContext } from "./PostgreSqlParser.js";
import { Column_expr_no_parenContext } from "./PostgreSqlParser.js";
import { Func_arg_listContext } from "./PostgreSqlParser.js";
import { Func_arg_exprContext } from "./PostgreSqlParser.js";
import { Array_exprContext } from "./PostgreSqlParser.js";
import { Extract_argContext } from "./PostgreSqlParser.js";
import { Unicode_normal_formContext } from "./PostgreSqlParser.js";
import { Substr_listContext } from "./PostgreSqlParser.js";
import { When_clauseContext } from "./PostgreSqlParser.js";
import { Indirection_elContext } from "./PostgreSqlParser.js";
import { IndirectionContext } from "./PostgreSqlParser.js";
import { Opt_indirectionContext } from "./PostgreSqlParser.js";
import { Target_listContext } from "./PostgreSqlParser.js";
import { Target_labelContext } from "./PostgreSqlParser.js";
import { Target_starContext } from "./PostgreSqlParser.js";
import { Qualified_name_listContext } from "./PostgreSqlParser.js";
import { Table_name_listContext } from "./PostgreSqlParser.js";
import { Schema_name_listContext } from "./PostgreSqlParser.js";
import { Database_nameListContext } from "./PostgreSqlParser.js";
import { TablespaceNameCreateContext } from "./PostgreSqlParser.js";
import { TablespaceNameContext } from "./PostgreSqlParser.js";
import { TableNameCreateContext } from "./PostgreSqlParser.js";
import { TableNameContext } from "./PostgreSqlParser.js";
import { ViewNameCreateContext } from "./PostgreSqlParser.js";
import { ViewNameContext } from "./PostgreSqlParser.js";
import { Qualified_nameContext } from "./PostgreSqlParser.js";
import { Tablespace_name_listContext } from "./PostgreSqlParser.js";
import { Name_listContext } from "./PostgreSqlParser.js";
import { DatabaseNameCreateContext } from "./PostgreSqlParser.js";
import { DatabaseNameContext } from "./PostgreSqlParser.js";
import { SchemaNameContext } from "./PostgreSqlParser.js";
import { RoutineNameCreateContext } from "./PostgreSqlParser.js";
import { RoutineNameContext } from "./PostgreSqlParser.js";
import { ProcedureNameContext } from "./PostgreSqlParser.js";
import { ProcedureNameCreateContext } from "./PostgreSqlParser.js";
import { ColumnNameContext } from "./PostgreSqlParser.js";
import { ColumnNameMatchContext } from "./PostgreSqlParser.js";
import { ColumnNameCreateContext } from "./PostgreSqlParser.js";
import { FunctionNameCreateContext } from "./PostgreSqlParser.js";
import { FunctionNameContext } from "./PostgreSqlParser.js";
import { StringConstContext } from "./PostgreSqlParser.js";
import { AnysconstContext } from "./PostgreSqlParser.js";
import { SignedConstContext } from "./PostgreSqlParser.js";
import { RoleSpecContext } from "./PostgreSqlParser.js";
import { Role_listContext } from "./PostgreSqlParser.js";
import { ColIdContext } from "./PostgreSqlParser.js";
import { Type_function_nameContext } from "./PostgreSqlParser.js";
import { NonReservedWordContext } from "./PostgreSqlParser.js";
import { ColLabelContext } from "./PostgreSqlParser.js";
import { IdentifierContext } from "./PostgreSqlParser.js";
import { Unreserved_keywordContext } from "./PostgreSqlParser.js";
import { Col_name_keywordContext } from "./PostgreSqlParser.js";
import { Type_func_name_keywordContext } from "./PostgreSqlParser.js";
import { Reserved_keywordContext } from "./PostgreSqlParser.js";
import { Pl_blockContext } from "./PostgreSqlParser.js";
import { Label_declContext } from "./PostgreSqlParser.js";
import { Decl_statementContext } from "./PostgreSqlParser.js";
import { Decl_cursor_argContext } from "./PostgreSqlParser.js";
import { Assign_operatorContext } from "./PostgreSqlParser.js";
import { Proc_stmtContext } from "./PostgreSqlParser.js";
import { Stmt_performContext } from "./PostgreSqlParser.js";
import { Stmt_callContext } from "./PostgreSqlParser.js";
import { Stmt_assignContext } from "./PostgreSqlParser.js";
import { Stmt_getdiagContext } from "./PostgreSqlParser.js";
import { Getdiag_list_itemContext } from "./PostgreSqlParser.js";
import { Assign_varContext } from "./PostgreSqlParser.js";
import { Stmt_ifContext } from "./PostgreSqlParser.js";
import { Stmt_elseContext } from "./PostgreSqlParser.js";
import { Stmt_caseContext } from "./PostgreSqlParser.js";
import { Stmt_loop_while_forContext } from "./PostgreSqlParser.js";
import { For_controlContext } from "./PostgreSqlParser.js";
import { Stmt_foreach_aContext } from "./PostgreSqlParser.js";
import { Stmt_exitContext } from "./PostgreSqlParser.js";
import { Stmt_returnContext } from "./PostgreSqlParser.js";
import { Stmt_raiseContext } from "./PostgreSqlParser.js";
import { Opt_raise_using_elemContext } from "./PostgreSqlParser.js";
import { Stmt_assertContext } from "./PostgreSqlParser.js";
import { Loop_bodyContext } from "./PostgreSqlParser.js";
import { Stmt_execsqlContext } from "./PostgreSqlParser.js";
import { Stmt_dynexecuteContext } from "./PostgreSqlParser.js";
import { Opt_execute_intoContext } from "./PostgreSqlParser.js";
import { Stmt_openContext } from "./PostgreSqlParser.js";
import { Opt_open_bound_list_itemContext } from "./PostgreSqlParser.js";
import { Stmt_fetchContext } from "./PostgreSqlParser.js";
import { Opt_fetch_directionContext } from "./PostgreSqlParser.js";
import { Stmt_moveContext } from "./PostgreSqlParser.js";
import { MergeStmtContext } from "./PostgreSqlParser.js";
import { Data_sourceContext } from "./PostgreSqlParser.js";
import { Merge_when_clauseContext } from "./PostgreSqlParser.js";
import { Merge_insertContext } from "./PostgreSqlParser.js";
import { Merge_updateContext } from "./PostgreSqlParser.js";
import { Default_values_or_valuesContext } from "./PostgreSqlParser.js";
import { ExprofdefaultContext } from "./PostgreSqlParser.js";
import { Stmt_closeContext } from "./PostgreSqlParser.js";
import { Stmt_nullContext } from "./PostgreSqlParser.js";
import { Stmt_commit_or_rollbackContext } from "./PostgreSqlParser.js";
import { Stmt_setContext } from "./PostgreSqlParser.js";
import { Cursor_variableContext } from "./PostgreSqlParser.js";
import { Exception_sectContext } from "./PostgreSqlParser.js";
import { Proc_conditionContext } from "./PostgreSqlParser.js";
import { Any_identifierContext } from "./PostgreSqlParser.js";
import { Sql_expressionContext } from "./PostgreSqlParser.js";


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
     * Enter a parse tree produced by `PostgreSqlParser.alter_routine_clause`.
     * @param ctx the parse tree
     */
    enterAlter_routine_clause?: (ctx: Alter_routine_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alter_routine_clause`.
     * @param ctx the parse tree
     */
    exitAlter_routine_clause?: (ctx: Alter_routine_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.routine_action`.
     * @param ctx the parse tree
     */
    enterRoutine_action?: (ctx: Routine_actionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.routine_action`.
     * @param ctx the parse tree
     */
    exitRoutine_action?: (ctx: Routine_actionContext) => void;
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
     * Enter a parse tree produced by the `schemaNameCreate`
     * labeled alternative in `PostgreSqlParser.schema_name_create`.
     * @param ctx the parse tree
     */
    enterSchemaNameCreate?: (ctx: SchemaNameCreateContext) => void;
    /**
     * Exit a parse tree produced by the `schemaNameCreate`
     * labeled alternative in `PostgreSqlParser.schema_name_create`.
     * @param ctx the parse tree
     */
    exitSchemaNameCreate?: (ctx: SchemaNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.schema_stmt`.
     * @param ctx the parse tree
     */
    enterSchema_stmt?: (ctx: Schema_stmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.schema_stmt`.
     * @param ctx the parse tree
     */
    exitSchema_stmt?: (ctx: Schema_stmtContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.set_rest`.
     * @param ctx the parse tree
     */
    enterSet_rest?: (ctx: Set_restContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.set_rest`.
     * @param ctx the parse tree
     */
    exitSet_rest?: (ctx: Set_restContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.generic_set`.
     * @param ctx the parse tree
     */
    enterGeneric_set?: (ctx: Generic_setContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.generic_set`.
     * @param ctx the parse tree
     */
    exitGeneric_set?: (ctx: Generic_setContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.set_rest_more`.
     * @param ctx the parse tree
     */
    enterSet_rest_more?: (ctx: Set_rest_moreContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.set_rest_more`.
     * @param ctx the parse tree
     */
    exitSet_rest_more?: (ctx: Set_rest_moreContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.var_name`.
     * @param ctx the parse tree
     */
    enterVar_name?: (ctx: Var_nameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.var_name`.
     * @param ctx the parse tree
     */
    exitVar_name?: (ctx: Var_nameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.var_list`.
     * @param ctx the parse tree
     */
    enterVar_list?: (ctx: Var_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.var_list`.
     * @param ctx the parse tree
     */
    exitVar_list?: (ctx: Var_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.var_value`.
     * @param ctx the parse tree
     */
    enterVar_value?: (ctx: Var_valueContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.var_value`.
     * @param ctx the parse tree
     */
    exitVar_value?: (ctx: Var_valueContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.iso_level`.
     * @param ctx the parse tree
     */
    enterIso_level?: (ctx: Iso_levelContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.iso_level`.
     * @param ctx the parse tree
     */
    exitIso_level?: (ctx: Iso_levelContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.opt_boolean_or_string_column`.
     * @param ctx the parse tree
     */
    enterOpt_boolean_or_string_column?: (ctx: Opt_boolean_or_string_columnContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.opt_boolean_or_string_column`.
     * @param ctx the parse tree
     */
    exitOpt_boolean_or_string_column?: (ctx: Opt_boolean_or_string_columnContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.opt_boolean_or_string`.
     * @param ctx the parse tree
     */
    enterOpt_boolean_or_string?: (ctx: Opt_boolean_or_stringContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.opt_boolean_or_string`.
     * @param ctx the parse tree
     */
    exitOpt_boolean_or_string?: (ctx: Opt_boolean_or_stringContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.zone_value`.
     * @param ctx the parse tree
     */
    enterZone_value?: (ctx: Zone_valueContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.zone_value`.
     * @param ctx the parse tree
     */
    exitZone_value?: (ctx: Zone_valueContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.reset_rest`.
     * @param ctx the parse tree
     */
    enterReset_rest?: (ctx: Reset_restContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.reset_rest`.
     * @param ctx the parse tree
     */
    exitReset_rest?: (ctx: Reset_restContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.alter_table_cmds`.
     * @param ctx the parse tree
     */
    enterAlter_table_cmds?: (ctx: Alter_table_cmdsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alter_table_cmds`.
     * @param ctx the parse tree
     */
    exitAlter_table_cmds?: (ctx: Alter_table_cmdsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.partition_bound_spec`.
     * @param ctx the parse tree
     */
    enterPartition_bound_spec?: (ctx: Partition_bound_specContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.partition_bound_spec`.
     * @param ctx the parse tree
     */
    exitPartition_bound_spec?: (ctx: Partition_bound_specContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.partition_bound_clause`.
     * @param ctx the parse tree
     */
    enterPartition_bound_clause?: (ctx: Partition_bound_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.partition_bound_clause`.
     * @param ctx the parse tree
     */
    exitPartition_bound_clause?: (ctx: Partition_bound_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.partition_bound_choose`.
     * @param ctx the parse tree
     */
    enterPartition_bound_choose?: (ctx: Partition_bound_chooseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.partition_bound_choose`.
     * @param ctx the parse tree
     */
    exitPartition_bound_choose?: (ctx: Partition_bound_chooseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.partition_with_clause`.
     * @param ctx the parse tree
     */
    enterPartition_with_clause?: (ctx: Partition_with_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.partition_with_clause`.
     * @param ctx the parse tree
     */
    exitPartition_with_clause?: (ctx: Partition_with_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.partition_cmd`.
     * @param ctx the parse tree
     */
    enterPartition_cmd?: (ctx: Partition_cmdContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.partition_cmd`.
     * @param ctx the parse tree
     */
    exitPartition_cmd?: (ctx: Partition_cmdContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.index_partition_cmd`.
     * @param ctx the parse tree
     */
    enterIndex_partition_cmd?: (ctx: Index_partition_cmdContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.index_partition_cmd`.
     * @param ctx the parse tree
     */
    exitIndex_partition_cmd?: (ctx: Index_partition_cmdContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alter_table_cmd`.
     * @param ctx the parse tree
     */
    enterAlter_table_cmd?: (ctx: Alter_table_cmdContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alter_table_cmd`.
     * @param ctx the parse tree
     */
    exitAlter_table_cmd?: (ctx: Alter_table_cmdContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alter_column_default`.
     * @param ctx the parse tree
     */
    enterAlter_column_default?: (ctx: Alter_column_defaultContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alter_column_default`.
     * @param ctx the parse tree
     */
    exitAlter_column_default?: (ctx: Alter_column_defaultContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.opt_drop_behavior`.
     * @param ctx the parse tree
     */
    enterOpt_drop_behavior?: (ctx: Opt_drop_behaviorContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.opt_drop_behavior`.
     * @param ctx the parse tree
     */
    exitOpt_drop_behavior?: (ctx: Opt_drop_behaviorContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.opt_collate_clause`.
     * @param ctx the parse tree
     */
    enterOpt_collate_clause?: (ctx: Opt_collate_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.opt_collate_clause`.
     * @param ctx the parse tree
     */
    exitOpt_collate_clause?: (ctx: Opt_collate_clauseContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.alter_type_cmd`.
     * @param ctx the parse tree
     */
    enterAlter_type_cmd?: (ctx: Alter_type_cmdContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alter_type_cmd`.
     * @param ctx the parse tree
     */
    exitAlter_type_cmd?: (ctx: Alter_type_cmdContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.copy_generic_opt_elem`.
     * @param ctx the parse tree
     */
    enterCopy_generic_opt_elem?: (ctx: Copy_generic_opt_elemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.copy_generic_opt_elem`.
     * @param ctx the parse tree
     */
    exitCopy_generic_opt_elem?: (ctx: Copy_generic_opt_elemContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.generated_when`.
     * @param ctx the parse tree
     */
    enterGenerated_when?: (ctx: Generated_whenContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.generated_when`.
     * @param ctx the parse tree
     */
    exitGenerated_when?: (ctx: Generated_whenContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.opt_column_list`.
     * @param ctx the parse tree
     */
    enterOpt_column_list?: (ctx: Opt_column_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.opt_column_list`.
     * @param ctx the parse tree
     */
    exitOpt_column_list?: (ctx: Opt_column_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.opt_column_list_create`.
     * @param ctx the parse tree
     */
    enterOpt_column_list_create?: (ctx: Opt_column_list_createContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.opt_column_list_create`.
     * @param ctx the parse tree
     */
    exitOpt_column_list_create?: (ctx: Opt_column_list_createContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.column_list`.
     * @param ctx the parse tree
     */
    enterColumn_list?: (ctx: Column_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.column_list`.
     * @param ctx the parse tree
     */
    exitColumn_list?: (ctx: Column_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.opt_c_include`.
     * @param ctx the parse tree
     */
    enterOpt_c_include?: (ctx: Opt_c_includeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.opt_c_include`.
     * @param ctx the parse tree
     */
    exitOpt_c_include?: (ctx: Opt_c_includeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.key_match`.
     * @param ctx the parse tree
     */
    enterKey_match?: (ctx: Key_matchContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.key_match`.
     * @param ctx the parse tree
     */
    exitKey_match?: (ctx: Key_matchContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.key_actions`.
     * @param ctx the parse tree
     */
    enterKey_actions?: (ctx: Key_actionsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.key_actions`.
     * @param ctx the parse tree
     */
    exitKey_actions?: (ctx: Key_actionsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.key_update`.
     * @param ctx the parse tree
     */
    enterKey_update?: (ctx: Key_updateContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.key_update`.
     * @param ctx the parse tree
     */
    exitKey_update?: (ctx: Key_updateContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.key_delete`.
     * @param ctx the parse tree
     */
    enterKey_delete?: (ctx: Key_deleteContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.key_delete`.
     * @param ctx the parse tree
     */
    exitKey_delete?: (ctx: Key_deleteContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.key_action`.
     * @param ctx the parse tree
     */
    enterKey_action?: (ctx: Key_actionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.key_action`.
     * @param ctx the parse tree
     */
    exitKey_action?: (ctx: Key_actionContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.part_elem`.
     * @param ctx the parse tree
     */
    enterPart_elem?: (ctx: Part_elemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.part_elem`.
     * @param ctx the parse tree
     */
    exitPart_elem?: (ctx: Part_elemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.table_access_method_clause`.
     * @param ctx the parse tree
     */
    enterTable_access_method_clause?: (ctx: Table_access_method_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.table_access_method_clause`.
     * @param ctx the parse tree
     */
    exitTable_access_method_clause?: (ctx: Table_access_method_clauseContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.create_as_target`.
     * @param ctx the parse tree
     */
    enterCreate_as_target?: (ctx: Create_as_targetContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.create_as_target`.
     * @param ctx the parse tree
     */
    exitCreate_as_target?: (ctx: Create_as_targetContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.opt_with_data`.
     * @param ctx the parse tree
     */
    enterOpt_with_data?: (ctx: Opt_with_dataContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.opt_with_data`.
     * @param ctx the parse tree
     */
    exitOpt_with_data?: (ctx: Opt_with_dataContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.fdw_option`.
     * @param ctx the parse tree
     */
    enterFdw_option?: (ctx: Fdw_optionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.fdw_option`.
     * @param ctx the parse tree
     */
    exitFdw_option?: (ctx: Fdw_optionContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.create_generic_options`.
     * @param ctx the parse tree
     */
    enterCreate_generic_options?: (ctx: Create_generic_optionsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.create_generic_options`.
     * @param ctx the parse tree
     */
    exitCreate_generic_options?: (ctx: Create_generic_optionsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alter_generic_options`.
     * @param ctx the parse tree
     */
    enterAlter_generic_options?: (ctx: Alter_generic_optionsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alter_generic_options`.
     * @param ctx the parse tree
     */
    exitAlter_generic_options?: (ctx: Alter_generic_optionsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alter_generic_option_elem`.
     * @param ctx the parse tree
     */
    enterAlter_generic_option_elem?: (ctx: Alter_generic_option_elemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alter_generic_option_elem`.
     * @param ctx the parse tree
     */
    exitAlter_generic_option_elem?: (ctx: Alter_generic_option_elemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.generic_option_elem`.
     * @param ctx the parse tree
     */
    enterGeneric_option_elem?: (ctx: Generic_option_elemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.generic_option_elem`.
     * @param ctx the parse tree
     */
    exitGeneric_option_elem?: (ctx: Generic_option_elemContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.foreign_server_version`.
     * @param ctx the parse tree
     */
    enterForeign_server_version?: (ctx: Foreign_server_versionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.foreign_server_version`.
     * @param ctx the parse tree
     */
    exitForeign_server_version?: (ctx: Foreign_server_versionContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.procedure_action`.
     * @param ctx the parse tree
     */
    enterProcedure_action?: (ctx: Procedure_actionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.procedure_action`.
     * @param ctx the parse tree
     */
    exitProcedure_action?: (ctx: Procedure_actionContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.function_or_procedure`.
     * @param ctx the parse tree
     */
    enterFunction_or_procedure?: (ctx: Function_or_procedureContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.function_or_procedure`.
     * @param ctx the parse tree
     */
    exitFunction_or_procedure?: (ctx: Function_or_procedureContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.event_trigger_when_item`.
     * @param ctx the parse tree
     */
    enterEvent_trigger_when_item?: (ctx: Event_trigger_when_itemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.event_trigger_when_item`.
     * @param ctx the parse tree
     */
    exitEvent_trigger_when_item?: (ctx: Event_trigger_when_itemContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.def_elem`.
     * @param ctx the parse tree
     */
    enterDef_elem?: (ctx: Def_elemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.def_elem`.
     * @param ctx the parse tree
     */
    exitDef_elem?: (ctx: Def_elemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.def_arg`.
     * @param ctx the parse tree
     */
    enterDef_arg?: (ctx: Def_argContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.def_arg`.
     * @param ctx the parse tree
     */
    exitDef_arg?: (ctx: Def_argContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.old_aggregate_elem`.
     * @param ctx the parse tree
     */
    enterOld_aggregate_elem?: (ctx: Old_aggregate_elemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.old_aggregate_elem`.
     * @param ctx the parse tree
     */
    exitOld_aggregate_elem?: (ctx: Old_aggregate_elemContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.opt_if_not_exists`.
     * @param ctx the parse tree
     */
    enterOpt_if_not_exists?: (ctx: Opt_if_not_existsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.opt_if_not_exists`.
     * @param ctx the parse tree
     */
    exitOpt_if_not_exists?: (ctx: Opt_if_not_existsContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.object_type_any_name`.
     * @param ctx the parse tree
     */
    enterObject_type_any_name?: (ctx: Object_type_any_nameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.object_type_any_name`.
     * @param ctx the parse tree
     */
    exitObject_type_any_name?: (ctx: Object_type_any_nameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.object_type_name`.
     * @param ctx the parse tree
     */
    enterObject_type_name?: (ctx: Object_type_nameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.object_type_name`.
     * @param ctx the parse tree
     */
    exitObject_type_name?: (ctx: Object_type_nameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.any_name_list`.
     * @param ctx the parse tree
     */
    enterAny_name_list?: (ctx: Any_name_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.any_name_list`.
     * @param ctx the parse tree
     */
    exitAny_name_list?: (ctx: Any_name_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.any_name`.
     * @param ctx the parse tree
     */
    enterAny_name?: (ctx: Any_nameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.any_name`.
     * @param ctx the parse tree
     */
    exitAny_name?: (ctx: Any_nameContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.truncate_table`.
     * @param ctx the parse tree
     */
    enterTruncate_table?: (ctx: Truncate_tableContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.truncate_table`.
     * @param ctx the parse tree
     */
    exitTruncate_table?: (ctx: Truncate_tableContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.from_in`.
     * @param ctx the parse tree
     */
    enterFrom_in?: (ctx: From_inContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.from_in`.
     * @param ctx the parse tree
     */
    exitFrom_in?: (ctx: From_inContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.privilege_target`.
     * @param ctx the parse tree
     */
    enterPrivilege_target?: (ctx: Privilege_targetContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.privilege_target`.
     * @param ctx the parse tree
     */
    exitPrivilege_target?: (ctx: Privilege_targetContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.grantee_list`.
     * @param ctx the parse tree
     */
    enterGrantee_list?: (ctx: Grantee_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.grantee_list`.
     * @param ctx the parse tree
     */
    exitGrantee_list?: (ctx: Grantee_listContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.defacl_privilege_target`.
     * @param ctx the parse tree
     */
    enterDefacl_privilege_target?: (ctx: Defacl_privilege_targetContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.defacl_privilege_target`.
     * @param ctx the parse tree
     */
    exitDefacl_privilege_target?: (ctx: Defacl_privilege_targetContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.index_params`.
     * @param ctx the parse tree
     */
    enterIndex_params?: (ctx: Index_paramsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.index_params`.
     * @param ctx the parse tree
     */
    exitIndex_params?: (ctx: Index_paramsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.index_elem`.
     * @param ctx the parse tree
     */
    enterIndex_elem?: (ctx: Index_elemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.index_elem`.
     * @param ctx the parse tree
     */
    exitIndex_elem?: (ctx: Index_elemContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.opt_or_replace`.
     * @param ctx the parse tree
     */
    enterOpt_or_replace?: (ctx: Opt_or_replaceContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.opt_or_replace`.
     * @param ctx the parse tree
     */
    exitOpt_or_replace?: (ctx: Opt_or_replaceContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.func_args`.
     * @param ctx the parse tree
     */
    enterFunc_args?: (ctx: Func_argsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.func_args`.
     * @param ctx the parse tree
     */
    exitFunc_args?: (ctx: Func_argsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.func_args_list`.
     * @param ctx the parse tree
     */
    enterFunc_args_list?: (ctx: Func_args_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.func_args_list`.
     * @param ctx the parse tree
     */
    exitFunc_args_list?: (ctx: Func_args_listContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.func_arg`.
     * @param ctx the parse tree
     */
    enterFunc_arg?: (ctx: Func_argContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.func_arg`.
     * @param ctx the parse tree
     */
    exitFunc_arg?: (ctx: Func_argContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.arg_class`.
     * @param ctx the parse tree
     */
    enterArg_class?: (ctx: Arg_classContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.arg_class`.
     * @param ctx the parse tree
     */
    exitArg_class?: (ctx: Arg_classContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.func_type`.
     * @param ctx the parse tree
     */
    enterFunc_type?: (ctx: Func_typeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.func_type`.
     * @param ctx the parse tree
     */
    exitFunc_type?: (ctx: Func_typeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.func_arg_with_default`.
     * @param ctx the parse tree
     */
    enterFunc_arg_with_default?: (ctx: Func_arg_with_defaultContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.func_arg_with_default`.
     * @param ctx the parse tree
     */
    exitFunc_arg_with_default?: (ctx: Func_arg_with_defaultContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.aggregate_args`.
     * @param ctx the parse tree
     */
    enterAggregate_args?: (ctx: Aggregate_argsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.aggregate_args`.
     * @param ctx the parse tree
     */
    exitAggregate_args?: (ctx: Aggregate_argsContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.common_func_opt_item`.
     * @param ctx the parse tree
     */
    enterCommon_func_opt_item?: (ctx: Common_func_opt_itemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.common_func_opt_item`.
     * @param ctx the parse tree
     */
    exitCommon_func_opt_item?: (ctx: Common_func_opt_itemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.create_func_opt_item`.
     * @param ctx the parse tree
     */
    enterCreate_func_opt_item?: (ctx: Create_func_opt_itemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.create_func_opt_item`.
     * @param ctx the parse tree
     */
    exitCreate_func_opt_item?: (ctx: Create_func_opt_itemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.opt_definition`.
     * @param ctx the parse tree
     */
    enterOpt_definition?: (ctx: Opt_definitionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.opt_definition`.
     * @param ctx the parse tree
     */
    exitOpt_definition?: (ctx: Opt_definitionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.table_func_column`.
     * @param ctx the parse tree
     */
    enterTable_func_column?: (ctx: Table_func_columnContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.table_func_column`.
     * @param ctx the parse tree
     */
    exitTable_func_column?: (ctx: Table_func_columnContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.any_operator`.
     * @param ctx the parse tree
     */
    enterAny_operator?: (ctx: Any_operatorContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.any_operator`.
     * @param ctx the parse tree
     */
    exitAny_operator?: (ctx: Any_operatorContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.opt_if_exists`.
     * @param ctx the parse tree
     */
    enterOpt_if_exists?: (ctx: Opt_if_existsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.opt_if_exists`.
     * @param ctx the parse tree
     */
    exitOpt_if_exists?: (ctx: Opt_if_existsContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.sql_with_function`.
     * @param ctx the parse tree
     */
    enterSql_with_function?: (ctx: Sql_with_functionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.sql_with_function`.
     * @param ctx the parse tree
     */
    exitSql_with_function?: (ctx: Sql_with_functionContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.operator_def_list`.
     * @param ctx the parse tree
     */
    enterOperator_def_list?: (ctx: Operator_def_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.operator_def_list`.
     * @param ctx the parse tree
     */
    exitOperator_def_list?: (ctx: Operator_def_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.operator_def_elem`.
     * @param ctx the parse tree
     */
    enterOperator_def_elem?: (ctx: Operator_def_elemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.operator_def_elem`.
     * @param ctx the parse tree
     */
    exitOperator_def_elem?: (ctx: Operator_def_elemContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.notify_payload`.
     * @param ctx the parse tree
     */
    enterNotify_payload?: (ctx: Notify_payloadContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.notify_payload`.
     * @param ctx the parse tree
     */
    exitNotify_payload?: (ctx: Notify_payloadContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.opt_transaction`.
     * @param ctx the parse tree
     */
    enterOpt_transaction?: (ctx: Opt_transactionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.opt_transaction`.
     * @param ctx the parse tree
     */
    exitOpt_transaction?: (ctx: Opt_transactionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.transaction_mode_item`.
     * @param ctx the parse tree
     */
    enterTransaction_mode_item?: (ctx: Transaction_mode_itemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.transaction_mode_item`.
     * @param ctx the parse tree
     */
    exitTransaction_mode_item?: (ctx: Transaction_mode_itemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.transaction_mode_list`.
     * @param ctx the parse tree
     */
    enterTransaction_mode_list?: (ctx: Transaction_mode_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.transaction_mode_list`.
     * @param ctx the parse tree
     */
    exitTransaction_mode_list?: (ctx: Transaction_mode_listContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.create_db_opt_item`.
     * @param ctx the parse tree
     */
    enterCreate_db_opt_item?: (ctx: Create_db_opt_itemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.create_db_opt_item`.
     * @param ctx the parse tree
     */
    exitCreate_db_opt_item?: (ctx: Create_db_opt_itemContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.analyze_keyword`.
     * @param ctx the parse tree
     */
    enterAnalyze_keyword?: (ctx: Analyze_keywordContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.analyze_keyword`.
     * @param ctx the parse tree
     */
    exitAnalyze_keyword?: (ctx: Analyze_keywordContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.vac_analyze_option_elem`.
     * @param ctx the parse tree
     */
    enterVac_analyze_option_elem?: (ctx: Vac_analyze_option_elemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.vac_analyze_option_elem`.
     * @param ctx the parse tree
     */
    exitVac_analyze_option_elem?: (ctx: Vac_analyze_option_elemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.analyze_option_elem`.
     * @param ctx the parse tree
     */
    enterAnalyze_option_elem?: (ctx: Analyze_option_elemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.analyze_option_elem`.
     * @param ctx the parse tree
     */
    exitAnalyze_option_elem?: (ctx: Analyze_option_elemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.opt_verbose`.
     * @param ctx the parse tree
     */
    enterOpt_verbose?: (ctx: Opt_verboseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.opt_verbose`.
     * @param ctx the parse tree
     */
    exitOpt_verbose?: (ctx: Opt_verboseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.vacuum_relation`.
     * @param ctx the parse tree
     */
    enterVacuum_relation?: (ctx: Vacuum_relationContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.vacuum_relation`.
     * @param ctx the parse tree
     */
    exitVacuum_relation?: (ctx: Vacuum_relationContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.vacuum_relation_list`.
     * @param ctx the parse tree
     */
    enterVacuum_relation_list?: (ctx: Vacuum_relation_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.vacuum_relation_list`.
     * @param ctx the parse tree
     */
    exitVacuum_relation_list?: (ctx: Vacuum_relation_listContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.explain_option_list`.
     * @param ctx the parse tree
     */
    enterExplain_option_list?: (ctx: Explain_option_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.explain_option_list`.
     * @param ctx the parse tree
     */
    exitExplain_option_list?: (ctx: Explain_option_listContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.prep_type_clause`.
     * @param ctx the parse tree
     */
    enterPrep_type_clause?: (ctx: Prep_type_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.prep_type_clause`.
     * @param ctx the parse tree
     */
    exitPrep_type_clause?: (ctx: Prep_type_clauseContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.execute_param_clause`.
     * @param ctx the parse tree
     */
    enterExecute_param_clause?: (ctx: Execute_param_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.execute_param_clause`.
     * @param ctx the parse tree
     */
    exitExecute_param_clause?: (ctx: Execute_param_clauseContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.insert_rest`.
     * @param ctx the parse tree
     */
    enterInsert_rest?: (ctx: Insert_restContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.insert_rest`.
     * @param ctx the parse tree
     */
    exitInsert_rest?: (ctx: Insert_restContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.insert_column_list`.
     * @param ctx the parse tree
     */
    enterInsert_column_list?: (ctx: Insert_column_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.insert_column_list`.
     * @param ctx the parse tree
     */
    exitInsert_column_list?: (ctx: Insert_column_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.insert_column_item`.
     * @param ctx the parse tree
     */
    enterInsert_column_item?: (ctx: Insert_column_itemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.insert_column_item`.
     * @param ctx the parse tree
     */
    exitInsert_column_item?: (ctx: Insert_column_itemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.returning_clause`.
     * @param ctx the parse tree
     */
    enterReturning_clause?: (ctx: Returning_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.returning_clause`.
     * @param ctx the parse tree
     */
    exitReturning_clause?: (ctx: Returning_clauseContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.set_clause_list`.
     * @param ctx the parse tree
     */
    enterSet_clause_list?: (ctx: Set_clause_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.set_clause_list`.
     * @param ctx the parse tree
     */
    exitSet_clause_list?: (ctx: Set_clause_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.set_clause`.
     * @param ctx the parse tree
     */
    enterSet_clause?: (ctx: Set_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.set_clause`.
     * @param ctx the parse tree
     */
    exitSet_clause?: (ctx: Set_clauseContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.select_with_parens`.
     * @param ctx the parse tree
     */
    enterSelect_with_parens?: (ctx: Select_with_parensContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.select_with_parens`.
     * @param ctx the parse tree
     */
    exitSelect_with_parens?: (ctx: Select_with_parensContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.select_no_parens`.
     * @param ctx the parse tree
     */
    enterSelect_no_parens?: (ctx: Select_no_parensContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.select_no_parens`.
     * @param ctx the parse tree
     */
    exitSelect_no_parens?: (ctx: Select_no_parensContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.select_clause`.
     * @param ctx the parse tree
     */
    enterSelect_clause?: (ctx: Select_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.select_clause`.
     * @param ctx the parse tree
     */
    exitSelect_clause?: (ctx: Select_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.simple_select`.
     * @param ctx the parse tree
     */
    enterSimple_select?: (ctx: Simple_selectContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.simple_select`.
     * @param ctx the parse tree
     */
    exitSimple_select?: (ctx: Simple_selectContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.set_operator_with_all_or_distinct`.
     * @param ctx the parse tree
     */
    enterSet_operator_with_all_or_distinct?: (ctx: Set_operator_with_all_or_distinctContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.set_operator_with_all_or_distinct`.
     * @param ctx the parse tree
     */
    exitSet_operator_with_all_or_distinct?: (ctx: Set_operator_with_all_or_distinctContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.with_clause`.
     * @param ctx the parse tree
     */
    enterWith_clause?: (ctx: With_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.with_clause`.
     * @param ctx the parse tree
     */
    exitWith_clause?: (ctx: With_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.common_table_expr`.
     * @param ctx the parse tree
     */
    enterCommon_table_expr?: (ctx: Common_table_exprContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.common_table_expr`.
     * @param ctx the parse tree
     */
    exitCommon_table_expr?: (ctx: Common_table_exprContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.search_clause`.
     * @param ctx the parse tree
     */
    enterSearch_clause?: (ctx: Search_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.search_clause`.
     * @param ctx the parse tree
     */
    exitSearch_clause?: (ctx: Search_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.cycle_clause`.
     * @param ctx the parse tree
     */
    enterCycle_clause?: (ctx: Cycle_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.cycle_clause`.
     * @param ctx the parse tree
     */
    exitCycle_clause?: (ctx: Cycle_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.into_clause`.
     * @param ctx the parse tree
     */
    enterInto_clause?: (ctx: Into_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.into_clause`.
     * @param ctx the parse tree
     */
    exitInto_clause?: (ctx: Into_clauseContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.distinct_clause`.
     * @param ctx the parse tree
     */
    enterDistinct_clause?: (ctx: Distinct_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.distinct_clause`.
     * @param ctx the parse tree
     */
    exitDistinct_clause?: (ctx: Distinct_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.sort_clause`.
     * @param ctx the parse tree
     */
    enterSort_clause?: (ctx: Sort_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.sort_clause`.
     * @param ctx the parse tree
     */
    exitSort_clause?: (ctx: Sort_clauseContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.select_limit`.
     * @param ctx the parse tree
     */
    enterSelect_limit?: (ctx: Select_limitContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.select_limit`.
     * @param ctx the parse tree
     */
    exitSelect_limit?: (ctx: Select_limitContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.limit_clause`.
     * @param ctx the parse tree
     */
    enterLimit_clause?: (ctx: Limit_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.limit_clause`.
     * @param ctx the parse tree
     */
    exitLimit_clause?: (ctx: Limit_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.fetch_clause`.
     * @param ctx the parse tree
     */
    enterFetch_clause?: (ctx: Fetch_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.fetch_clause`.
     * @param ctx the parse tree
     */
    exitFetch_clause?: (ctx: Fetch_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.offset_clause`.
     * @param ctx the parse tree
     */
    enterOffset_clause?: (ctx: Offset_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.offset_clause`.
     * @param ctx the parse tree
     */
    exitOffset_clause?: (ctx: Offset_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.select_fetch_first_value`.
     * @param ctx the parse tree
     */
    enterSelect_fetch_first_value?: (ctx: Select_fetch_first_valueContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.select_fetch_first_value`.
     * @param ctx the parse tree
     */
    exitSelect_fetch_first_value?: (ctx: Select_fetch_first_valueContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.group_clause`.
     * @param ctx the parse tree
     */
    enterGroup_clause?: (ctx: Group_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.group_clause`.
     * @param ctx the parse tree
     */
    exitGroup_clause?: (ctx: Group_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.group_by_list`.
     * @param ctx the parse tree
     */
    enterGroup_by_list?: (ctx: Group_by_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.group_by_list`.
     * @param ctx the parse tree
     */
    exitGroup_by_list?: (ctx: Group_by_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.group_by_item`.
     * @param ctx the parse tree
     */
    enterGroup_by_item?: (ctx: Group_by_itemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.group_by_item`.
     * @param ctx the parse tree
     */
    exitGroup_by_item?: (ctx: Group_by_itemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.for_locking_clause`.
     * @param ctx the parse tree
     */
    enterFor_locking_clause?: (ctx: For_locking_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.for_locking_clause`.
     * @param ctx the parse tree
     */
    exitFor_locking_clause?: (ctx: For_locking_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.values_clause`.
     * @param ctx the parse tree
     */
    enterValues_clause?: (ctx: Values_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.values_clause`.
     * @param ctx the parse tree
     */
    exitValues_clause?: (ctx: Values_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.from_clause`.
     * @param ctx the parse tree
     */
    enterFrom_clause?: (ctx: From_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.from_clause`.
     * @param ctx the parse tree
     */
    exitFrom_clause?: (ctx: From_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.from_list`.
     * @param ctx the parse tree
     */
    enterFrom_list?: (ctx: From_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.from_list`.
     * @param ctx the parse tree
     */
    exitFrom_list?: (ctx: From_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.table_ref`.
     * @param ctx the parse tree
     */
    enterTable_ref?: (ctx: Table_refContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.table_ref`.
     * @param ctx the parse tree
     */
    exitTable_ref?: (ctx: Table_refContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alias_clause`.
     * @param ctx the parse tree
     */
    enterAlias_clause?: (ctx: Alias_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alias_clause`.
     * @param ctx the parse tree
     */
    exitAlias_clause?: (ctx: Alias_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.func_alias_clause`.
     * @param ctx the parse tree
     */
    enterFunc_alias_clause?: (ctx: Func_alias_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.func_alias_clause`.
     * @param ctx the parse tree
     */
    exitFunc_alias_clause?: (ctx: Func_alias_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.join_type`.
     * @param ctx the parse tree
     */
    enterJoin_type?: (ctx: Join_typeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.join_type`.
     * @param ctx the parse tree
     */
    exitJoin_type?: (ctx: Join_typeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.join_qual`.
     * @param ctx the parse tree
     */
    enterJoin_qual?: (ctx: Join_qualContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.join_qual`.
     * @param ctx the parse tree
     */
    exitJoin_qual?: (ctx: Join_qualContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.relation_expr`.
     * @param ctx the parse tree
     */
    enterRelation_expr?: (ctx: Relation_exprContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.relation_expr`.
     * @param ctx the parse tree
     */
    exitRelation_expr?: (ctx: Relation_exprContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.publication_relation_expr`.
     * @param ctx the parse tree
     */
    enterPublication_relation_expr?: (ctx: Publication_relation_exprContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.publication_relation_expr`.
     * @param ctx the parse tree
     */
    exitPublication_relation_expr?: (ctx: Publication_relation_exprContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.relation_expr_list`.
     * @param ctx the parse tree
     */
    enterRelation_expr_list?: (ctx: Relation_expr_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.relation_expr_list`.
     * @param ctx the parse tree
     */
    exitRelation_expr_list?: (ctx: Relation_expr_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.relation_expr_opt_alias`.
     * @param ctx the parse tree
     */
    enterRelation_expr_opt_alias?: (ctx: Relation_expr_opt_aliasContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.relation_expr_opt_alias`.
     * @param ctx the parse tree
     */
    exitRelation_expr_opt_alias?: (ctx: Relation_expr_opt_aliasContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.func_table`.
     * @param ctx the parse tree
     */
    enterFunc_table?: (ctx: Func_tableContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.func_table`.
     * @param ctx the parse tree
     */
    exitFunc_table?: (ctx: Func_tableContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.where_clause`.
     * @param ctx the parse tree
     */
    enterWhere_clause?: (ctx: Where_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.where_clause`.
     * @param ctx the parse tree
     */
    exitWhere_clause?: (ctx: Where_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.where_or_current_clause`.
     * @param ctx the parse tree
     */
    enterWhere_or_current_clause?: (ctx: Where_or_current_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.where_or_current_clause`.
     * @param ctx the parse tree
     */
    exitWhere_or_current_clause?: (ctx: Where_or_current_clauseContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.xml_namespace_el`.
     * @param ctx the parse tree
     */
    enterXml_namespace_el?: (ctx: Xml_namespace_elContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.xml_namespace_el`.
     * @param ctx the parse tree
     */
    exitXml_namespace_el?: (ctx: Xml_namespace_elContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.opt_float`.
     * @param ctx the parse tree
     */
    enterOpt_float?: (ctx: Opt_floatContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.opt_float`.
     * @param ctx the parse tree
     */
    exitOpt_float?: (ctx: Opt_floatContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.opt_interval`.
     * @param ctx the parse tree
     */
    enterOpt_interval?: (ctx: Opt_intervalContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.opt_interval`.
     * @param ctx the parse tree
     */
    exitOpt_interval?: (ctx: Opt_intervalContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.interval_second`.
     * @param ctx the parse tree
     */
    enterInterval_second?: (ctx: Interval_secondContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.interval_second`.
     * @param ctx the parse tree
     */
    exitInterval_second?: (ctx: Interval_secondContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.func_application`.
     * @param ctx the parse tree
     */
    enterFunc_application?: (ctx: Func_applicationContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.func_application`.
     * @param ctx the parse tree
     */
    exitFunc_application?: (ctx: Func_applicationContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.func_expr_windowless`.
     * @param ctx the parse tree
     */
    enterFunc_expr_windowless?: (ctx: Func_expr_windowlessContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.func_expr_windowless`.
     * @param ctx the parse tree
     */
    exitFunc_expr_windowless?: (ctx: Func_expr_windowlessContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.func_expr_common_subexpr`.
     * @param ctx the parse tree
     */
    enterFunc_expr_common_subexpr?: (ctx: Func_expr_common_subexprContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.func_expr_common_subexpr`.
     * @param ctx the parse tree
     */
    exitFunc_expr_common_subexpr?: (ctx: Func_expr_common_subexprContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.xml_attribute_list`.
     * @param ctx the parse tree
     */
    enterXml_attribute_list?: (ctx: Xml_attribute_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.xml_attribute_list`.
     * @param ctx the parse tree
     */
    exitXml_attribute_list?: (ctx: Xml_attribute_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.xml_attribute_el`.
     * @param ctx the parse tree
     */
    enterXml_attribute_el?: (ctx: Xml_attribute_elContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.xml_attribute_el`.
     * @param ctx the parse tree
     */
    exitXml_attribute_el?: (ctx: Xml_attribute_elContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.document_or_content`.
     * @param ctx the parse tree
     */
    enterDocument_or_content?: (ctx: Document_or_contentContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.document_or_content`.
     * @param ctx the parse tree
     */
    exitDocument_or_content?: (ctx: Document_or_contentContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.xml_passing_mech`.
     * @param ctx the parse tree
     */
    enterXml_passing_mech?: (ctx: Xml_passing_mechContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.xml_passing_mech`.
     * @param ctx the parse tree
     */
    exitXml_passing_mech?: (ctx: Xml_passing_mechContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.window_clause`.
     * @param ctx the parse tree
     */
    enterWindow_clause?: (ctx: Window_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.window_clause`.
     * @param ctx the parse tree
     */
    exitWindow_clause?: (ctx: Window_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.window_definition`.
     * @param ctx the parse tree
     */
    enterWindow_definition?: (ctx: Window_definitionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.window_definition`.
     * @param ctx the parse tree
     */
    exitWindow_definition?: (ctx: Window_definitionContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.window_specification`.
     * @param ctx the parse tree
     */
    enterWindow_specification?: (ctx: Window_specificationContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.window_specification`.
     * @param ctx the parse tree
     */
    exitWindow_specification?: (ctx: Window_specificationContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.opt_frame_clause`.
     * @param ctx the parse tree
     */
    enterOpt_frame_clause?: (ctx: Opt_frame_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.opt_frame_clause`.
     * @param ctx the parse tree
     */
    exitOpt_frame_clause?: (ctx: Opt_frame_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.frame_bound`.
     * @param ctx the parse tree
     */
    enterFrame_bound?: (ctx: Frame_boundContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.frame_bound`.
     * @param ctx the parse tree
     */
    exitFrame_bound?: (ctx: Frame_boundContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.explicit_row`.
     * @param ctx the parse tree
     */
    enterExplicit_row?: (ctx: Explicit_rowContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.explicit_row`.
     * @param ctx the parse tree
     */
    exitExplicit_row?: (ctx: Explicit_rowContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.sub_type`.
     * @param ctx the parse tree
     */
    enterSub_type?: (ctx: Sub_typeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.sub_type`.
     * @param ctx the parse tree
     */
    exitSub_type?: (ctx: Sub_typeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.all_op`.
     * @param ctx the parse tree
     */
    enterAll_op?: (ctx: All_opContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.all_op`.
     * @param ctx the parse tree
     */
    exitAll_op?: (ctx: All_opContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.mathop`.
     * @param ctx the parse tree
     */
    enterMathop?: (ctx: MathopContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.mathop`.
     * @param ctx the parse tree
     */
    exitMathop?: (ctx: MathopContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.qual_op`.
     * @param ctx the parse tree
     */
    enterQual_op?: (ctx: Qual_opContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.qual_op`.
     * @param ctx the parse tree
     */
    exitQual_op?: (ctx: Qual_opContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.qual_all_op`.
     * @param ctx the parse tree
     */
    enterQual_all_op?: (ctx: Qual_all_opContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.qual_all_op`.
     * @param ctx the parse tree
     */
    exitQual_all_op?: (ctx: Qual_all_opContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.subquery_Op`.
     * @param ctx the parse tree
     */
    enterSubquery_Op?: (ctx: Subquery_OpContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.subquery_Op`.
     * @param ctx the parse tree
     */
    exitSubquery_Op?: (ctx: Subquery_OpContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.expr_list`.
     * @param ctx the parse tree
     */
    enterExpr_list?: (ctx: Expr_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.expr_list`.
     * @param ctx the parse tree
     */
    exitExpr_list?: (ctx: Expr_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.column_expr`.
     * @param ctx the parse tree
     */
    enterColumn_expr?: (ctx: Column_exprContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.column_expr`.
     * @param ctx the parse tree
     */
    exitColumn_expr?: (ctx: Column_exprContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.column_expr_no_paren`.
     * @param ctx the parse tree
     */
    enterColumn_expr_no_paren?: (ctx: Column_expr_no_parenContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.column_expr_no_paren`.
     * @param ctx the parse tree
     */
    exitColumn_expr_no_paren?: (ctx: Column_expr_no_parenContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.func_arg_list`.
     * @param ctx the parse tree
     */
    enterFunc_arg_list?: (ctx: Func_arg_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.func_arg_list`.
     * @param ctx the parse tree
     */
    exitFunc_arg_list?: (ctx: Func_arg_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.func_arg_expr`.
     * @param ctx the parse tree
     */
    enterFunc_arg_expr?: (ctx: Func_arg_exprContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.func_arg_expr`.
     * @param ctx the parse tree
     */
    exitFunc_arg_expr?: (ctx: Func_arg_exprContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.array_expr`.
     * @param ctx the parse tree
     */
    enterArray_expr?: (ctx: Array_exprContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.array_expr`.
     * @param ctx the parse tree
     */
    exitArray_expr?: (ctx: Array_exprContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.extract_arg`.
     * @param ctx the parse tree
     */
    enterExtract_arg?: (ctx: Extract_argContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.extract_arg`.
     * @param ctx the parse tree
     */
    exitExtract_arg?: (ctx: Extract_argContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.unicode_normal_form`.
     * @param ctx the parse tree
     */
    enterUnicode_normal_form?: (ctx: Unicode_normal_formContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.unicode_normal_form`.
     * @param ctx the parse tree
     */
    exitUnicode_normal_form?: (ctx: Unicode_normal_formContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.substr_list`.
     * @param ctx the parse tree
     */
    enterSubstr_list?: (ctx: Substr_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.substr_list`.
     * @param ctx the parse tree
     */
    exitSubstr_list?: (ctx: Substr_listContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.indirection_el`.
     * @param ctx the parse tree
     */
    enterIndirection_el?: (ctx: Indirection_elContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.indirection_el`.
     * @param ctx the parse tree
     */
    exitIndirection_el?: (ctx: Indirection_elContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.opt_indirection`.
     * @param ctx the parse tree
     */
    enterOpt_indirection?: (ctx: Opt_indirectionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.opt_indirection`.
     * @param ctx the parse tree
     */
    exitOpt_indirection?: (ctx: Opt_indirectionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.target_list`.
     * @param ctx the parse tree
     */
    enterTarget_list?: (ctx: Target_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.target_list`.
     * @param ctx the parse tree
     */
    exitTarget_list?: (ctx: Target_listContext) => void;
    /**
     * Enter a parse tree produced by the `target_label`
     * labeled alternative in `PostgreSqlParser.target_el`.
     * @param ctx the parse tree
     */
    enterTarget_label?: (ctx: Target_labelContext) => void;
    /**
     * Exit a parse tree produced by the `target_label`
     * labeled alternative in `PostgreSqlParser.target_el`.
     * @param ctx the parse tree
     */
    exitTarget_label?: (ctx: Target_labelContext) => void;
    /**
     * Enter a parse tree produced by the `target_star`
     * labeled alternative in `PostgreSqlParser.target_el`.
     * @param ctx the parse tree
     */
    enterTarget_star?: (ctx: Target_starContext) => void;
    /**
     * Exit a parse tree produced by the `target_star`
     * labeled alternative in `PostgreSqlParser.target_el`.
     * @param ctx the parse tree
     */
    exitTarget_star?: (ctx: Target_starContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.qualified_name_list`.
     * @param ctx the parse tree
     */
    enterQualified_name_list?: (ctx: Qualified_name_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.qualified_name_list`.
     * @param ctx the parse tree
     */
    exitQualified_name_list?: (ctx: Qualified_name_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.table_name_list`.
     * @param ctx the parse tree
     */
    enterTable_name_list?: (ctx: Table_name_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.table_name_list`.
     * @param ctx the parse tree
     */
    exitTable_name_list?: (ctx: Table_name_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.schema_name_list`.
     * @param ctx the parse tree
     */
    enterSchema_name_list?: (ctx: Schema_name_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.schema_name_list`.
     * @param ctx the parse tree
     */
    exitSchema_name_list?: (ctx: Schema_name_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.database_nameList`.
     * @param ctx the parse tree
     */
    enterDatabase_nameList?: (ctx: Database_nameListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.database_nameList`.
     * @param ctx the parse tree
     */
    exitDatabase_nameList?: (ctx: Database_nameListContext) => void;
    /**
     * Enter a parse tree produced by the `tablespaceNameCreate`
     * labeled alternative in `PostgreSqlParser.tablespace_name_create`.
     * @param ctx the parse tree
     */
    enterTablespaceNameCreate?: (ctx: TablespaceNameCreateContext) => void;
    /**
     * Exit a parse tree produced by the `tablespaceNameCreate`
     * labeled alternative in `PostgreSqlParser.tablespace_name_create`.
     * @param ctx the parse tree
     */
    exitTablespaceNameCreate?: (ctx: TablespaceNameCreateContext) => void;
    /**
     * Enter a parse tree produced by the `tablespaceName`
     * labeled alternative in `PostgreSqlParser.tablespace_name`.
     * @param ctx the parse tree
     */
    enterTablespaceName?: (ctx: TablespaceNameContext) => void;
    /**
     * Exit a parse tree produced by the `tablespaceName`
     * labeled alternative in `PostgreSqlParser.tablespace_name`.
     * @param ctx the parse tree
     */
    exitTablespaceName?: (ctx: TablespaceNameContext) => void;
    /**
     * Enter a parse tree produced by the `tableNameCreate`
     * labeled alternative in `PostgreSqlParser.table_name_create`.
     * @param ctx the parse tree
     */
    enterTableNameCreate?: (ctx: TableNameCreateContext) => void;
    /**
     * Exit a parse tree produced by the `tableNameCreate`
     * labeled alternative in `PostgreSqlParser.table_name_create`.
     * @param ctx the parse tree
     */
    exitTableNameCreate?: (ctx: TableNameCreateContext) => void;
    /**
     * Enter a parse tree produced by the `tableName`
     * labeled alternative in `PostgreSqlParser.table_name`.
     * @param ctx the parse tree
     */
    enterTableName?: (ctx: TableNameContext) => void;
    /**
     * Exit a parse tree produced by the `tableName`
     * labeled alternative in `PostgreSqlParser.table_name`.
     * @param ctx the parse tree
     */
    exitTableName?: (ctx: TableNameContext) => void;
    /**
     * Enter a parse tree produced by the `viewNameCreate`
     * labeled alternative in `PostgreSqlParser.view_name_create`.
     * @param ctx the parse tree
     */
    enterViewNameCreate?: (ctx: ViewNameCreateContext) => void;
    /**
     * Exit a parse tree produced by the `viewNameCreate`
     * labeled alternative in `PostgreSqlParser.view_name_create`.
     * @param ctx the parse tree
     */
    exitViewNameCreate?: (ctx: ViewNameCreateContext) => void;
    /**
     * Enter a parse tree produced by the `viewName`
     * labeled alternative in `PostgreSqlParser.view_name`.
     * @param ctx the parse tree
     */
    enterViewName?: (ctx: ViewNameContext) => void;
    /**
     * Exit a parse tree produced by the `viewName`
     * labeled alternative in `PostgreSqlParser.view_name`.
     * @param ctx the parse tree
     */
    exitViewName?: (ctx: ViewNameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.qualified_name`.
     * @param ctx the parse tree
     */
    enterQualified_name?: (ctx: Qualified_nameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.qualified_name`.
     * @param ctx the parse tree
     */
    exitQualified_name?: (ctx: Qualified_nameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.tablespace_name_list`.
     * @param ctx the parse tree
     */
    enterTablespace_name_list?: (ctx: Tablespace_name_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.tablespace_name_list`.
     * @param ctx the parse tree
     */
    exitTablespace_name_list?: (ctx: Tablespace_name_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.name_list`.
     * @param ctx the parse tree
     */
    enterName_list?: (ctx: Name_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.name_list`.
     * @param ctx the parse tree
     */
    exitName_list?: (ctx: Name_listContext) => void;
    /**
     * Enter a parse tree produced by the `databaseNameCreate`
     * labeled alternative in `PostgreSqlParser.database_name_create`.
     * @param ctx the parse tree
     */
    enterDatabaseNameCreate?: (ctx: DatabaseNameCreateContext) => void;
    /**
     * Exit a parse tree produced by the `databaseNameCreate`
     * labeled alternative in `PostgreSqlParser.database_name_create`.
     * @param ctx the parse tree
     */
    exitDatabaseNameCreate?: (ctx: DatabaseNameCreateContext) => void;
    /**
     * Enter a parse tree produced by the `databaseName`
     * labeled alternative in `PostgreSqlParser.database_name`.
     * @param ctx the parse tree
     */
    enterDatabaseName?: (ctx: DatabaseNameContext) => void;
    /**
     * Exit a parse tree produced by the `databaseName`
     * labeled alternative in `PostgreSqlParser.database_name`.
     * @param ctx the parse tree
     */
    exitDatabaseName?: (ctx: DatabaseNameContext) => void;
    /**
     * Enter a parse tree produced by the `schemaName`
     * labeled alternative in `PostgreSqlParser.schema_name`.
     * @param ctx the parse tree
     */
    enterSchemaName?: (ctx: SchemaNameContext) => void;
    /**
     * Exit a parse tree produced by the `schemaName`
     * labeled alternative in `PostgreSqlParser.schema_name`.
     * @param ctx the parse tree
     */
    exitSchemaName?: (ctx: SchemaNameContext) => void;
    /**
     * Enter a parse tree produced by the `routineNameCreate`
     * labeled alternative in `PostgreSqlParser.routine_name_create`.
     * @param ctx the parse tree
     */
    enterRoutineNameCreate?: (ctx: RoutineNameCreateContext) => void;
    /**
     * Exit a parse tree produced by the `routineNameCreate`
     * labeled alternative in `PostgreSqlParser.routine_name_create`.
     * @param ctx the parse tree
     */
    exitRoutineNameCreate?: (ctx: RoutineNameCreateContext) => void;
    /**
     * Enter a parse tree produced by the `routineName`
     * labeled alternative in `PostgreSqlParser.routine_name`.
     * @param ctx the parse tree
     */
    enterRoutineName?: (ctx: RoutineNameContext) => void;
    /**
     * Exit a parse tree produced by the `routineName`
     * labeled alternative in `PostgreSqlParser.routine_name`.
     * @param ctx the parse tree
     */
    exitRoutineName?: (ctx: RoutineNameContext) => void;
    /**
     * Enter a parse tree produced by the `procedureName`
     * labeled alternative in `PostgreSqlParser.procedure_name`.
     * @param ctx the parse tree
     */
    enterProcedureName?: (ctx: ProcedureNameContext) => void;
    /**
     * Exit a parse tree produced by the `procedureName`
     * labeled alternative in `PostgreSqlParser.procedure_name`.
     * @param ctx the parse tree
     */
    exitProcedureName?: (ctx: ProcedureNameContext) => void;
    /**
     * Enter a parse tree produced by the `procedureNameCreate`
     * labeled alternative in `PostgreSqlParser.procedure_name_create`.
     * @param ctx the parse tree
     */
    enterProcedureNameCreate?: (ctx: ProcedureNameCreateContext) => void;
    /**
     * Exit a parse tree produced by the `procedureNameCreate`
     * labeled alternative in `PostgreSqlParser.procedure_name_create`.
     * @param ctx the parse tree
     */
    exitProcedureNameCreate?: (ctx: ProcedureNameCreateContext) => void;
    /**
     * Enter a parse tree produced by the `columnName`
     * labeled alternative in `PostgreSqlParser.column_name`.
     * @param ctx the parse tree
     */
    enterColumnName?: (ctx: ColumnNameContext) => void;
    /**
     * Exit a parse tree produced by the `columnName`
     * labeled alternative in `PostgreSqlParser.column_name`.
     * @param ctx the parse tree
     */
    exitColumnName?: (ctx: ColumnNameContext) => void;
    /**
     * Enter a parse tree produced by the `columnNameMatch`
     * labeled alternative in `PostgreSqlParser.column_name`.
     * @param ctx the parse tree
     */
    enterColumnNameMatch?: (ctx: ColumnNameMatchContext) => void;
    /**
     * Exit a parse tree produced by the `columnNameMatch`
     * labeled alternative in `PostgreSqlParser.column_name`.
     * @param ctx the parse tree
     */
    exitColumnNameMatch?: (ctx: ColumnNameMatchContext) => void;
    /**
     * Enter a parse tree produced by the `columnNameCreate`
     * labeled alternative in `PostgreSqlParser.column_name_create`.
     * @param ctx the parse tree
     */
    enterColumnNameCreate?: (ctx: ColumnNameCreateContext) => void;
    /**
     * Exit a parse tree produced by the `columnNameCreate`
     * labeled alternative in `PostgreSqlParser.column_name_create`.
     * @param ctx the parse tree
     */
    exitColumnNameCreate?: (ctx: ColumnNameCreateContext) => void;
    /**
     * Enter a parse tree produced by the `functionNameCreate`
     * labeled alternative in `PostgreSqlParser.function_name_create`.
     * @param ctx the parse tree
     */
    enterFunctionNameCreate?: (ctx: FunctionNameCreateContext) => void;
    /**
     * Exit a parse tree produced by the `functionNameCreate`
     * labeled alternative in `PostgreSqlParser.function_name_create`.
     * @param ctx the parse tree
     */
    exitFunctionNameCreate?: (ctx: FunctionNameCreateContext) => void;
    /**
     * Enter a parse tree produced by the `functionName`
     * labeled alternative in `PostgreSqlParser.function_name`.
     * @param ctx the parse tree
     */
    enterFunctionName?: (ctx: FunctionNameContext) => void;
    /**
     * Exit a parse tree produced by the `functionName`
     * labeled alternative in `PostgreSqlParser.function_name`.
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
     * Enter a parse tree produced by `PostgreSqlParser.role_list`.
     * @param ctx the parse tree
     */
    enterRole_list?: (ctx: Role_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.role_list`.
     * @param ctx the parse tree
     */
    exitRole_list?: (ctx: Role_listContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.type_function_name`.
     * @param ctx the parse tree
     */
    enterType_function_name?: (ctx: Type_function_nameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.type_function_name`.
     * @param ctx the parse tree
     */
    exitType_function_name?: (ctx: Type_function_nameContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.unreserved_keyword`.
     * @param ctx the parse tree
     */
    enterUnreserved_keyword?: (ctx: Unreserved_keywordContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.unreserved_keyword`.
     * @param ctx the parse tree
     */
    exitUnreserved_keyword?: (ctx: Unreserved_keywordContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.col_name_keyword`.
     * @param ctx the parse tree
     */
    enterCol_name_keyword?: (ctx: Col_name_keywordContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.col_name_keyword`.
     * @param ctx the parse tree
     */
    exitCol_name_keyword?: (ctx: Col_name_keywordContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.type_func_name_keyword`.
     * @param ctx the parse tree
     */
    enterType_func_name_keyword?: (ctx: Type_func_name_keywordContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.type_func_name_keyword`.
     * @param ctx the parse tree
     */
    exitType_func_name_keyword?: (ctx: Type_func_name_keywordContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.reserved_keyword`.
     * @param ctx the parse tree
     */
    enterReserved_keyword?: (ctx: Reserved_keywordContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.reserved_keyword`.
     * @param ctx the parse tree
     */
    exitReserved_keyword?: (ctx: Reserved_keywordContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.pl_block`.
     * @param ctx the parse tree
     */
    enterPl_block?: (ctx: Pl_blockContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.pl_block`.
     * @param ctx the parse tree
     */
    exitPl_block?: (ctx: Pl_blockContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.label_decl`.
     * @param ctx the parse tree
     */
    enterLabel_decl?: (ctx: Label_declContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.label_decl`.
     * @param ctx the parse tree
     */
    exitLabel_decl?: (ctx: Label_declContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.decl_statement`.
     * @param ctx the parse tree
     */
    enterDecl_statement?: (ctx: Decl_statementContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.decl_statement`.
     * @param ctx the parse tree
     */
    exitDecl_statement?: (ctx: Decl_statementContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.decl_cursor_arg`.
     * @param ctx the parse tree
     */
    enterDecl_cursor_arg?: (ctx: Decl_cursor_argContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.decl_cursor_arg`.
     * @param ctx the parse tree
     */
    exitDecl_cursor_arg?: (ctx: Decl_cursor_argContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.assign_operator`.
     * @param ctx the parse tree
     */
    enterAssign_operator?: (ctx: Assign_operatorContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.assign_operator`.
     * @param ctx the parse tree
     */
    exitAssign_operator?: (ctx: Assign_operatorContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.proc_stmt`.
     * @param ctx the parse tree
     */
    enterProc_stmt?: (ctx: Proc_stmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.proc_stmt`.
     * @param ctx the parse tree
     */
    exitProc_stmt?: (ctx: Proc_stmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmt_perform`.
     * @param ctx the parse tree
     */
    enterStmt_perform?: (ctx: Stmt_performContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmt_perform`.
     * @param ctx the parse tree
     */
    exitStmt_perform?: (ctx: Stmt_performContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmt_call`.
     * @param ctx the parse tree
     */
    enterStmt_call?: (ctx: Stmt_callContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmt_call`.
     * @param ctx the parse tree
     */
    exitStmt_call?: (ctx: Stmt_callContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmt_assign`.
     * @param ctx the parse tree
     */
    enterStmt_assign?: (ctx: Stmt_assignContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmt_assign`.
     * @param ctx the parse tree
     */
    exitStmt_assign?: (ctx: Stmt_assignContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmt_getdiag`.
     * @param ctx the parse tree
     */
    enterStmt_getdiag?: (ctx: Stmt_getdiagContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmt_getdiag`.
     * @param ctx the parse tree
     */
    exitStmt_getdiag?: (ctx: Stmt_getdiagContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.getdiag_list_item`.
     * @param ctx the parse tree
     */
    enterGetdiag_list_item?: (ctx: Getdiag_list_itemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.getdiag_list_item`.
     * @param ctx the parse tree
     */
    exitGetdiag_list_item?: (ctx: Getdiag_list_itemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.assign_var`.
     * @param ctx the parse tree
     */
    enterAssign_var?: (ctx: Assign_varContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.assign_var`.
     * @param ctx the parse tree
     */
    exitAssign_var?: (ctx: Assign_varContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmt_if`.
     * @param ctx the parse tree
     */
    enterStmt_if?: (ctx: Stmt_ifContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmt_if`.
     * @param ctx the parse tree
     */
    exitStmt_if?: (ctx: Stmt_ifContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmt_else`.
     * @param ctx the parse tree
     */
    enterStmt_else?: (ctx: Stmt_elseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmt_else`.
     * @param ctx the parse tree
     */
    exitStmt_else?: (ctx: Stmt_elseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmt_case`.
     * @param ctx the parse tree
     */
    enterStmt_case?: (ctx: Stmt_caseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmt_case`.
     * @param ctx the parse tree
     */
    exitStmt_case?: (ctx: Stmt_caseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmt_loop_while_for`.
     * @param ctx the parse tree
     */
    enterStmt_loop_while_for?: (ctx: Stmt_loop_while_forContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmt_loop_while_for`.
     * @param ctx the parse tree
     */
    exitStmt_loop_while_for?: (ctx: Stmt_loop_while_forContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.for_control`.
     * @param ctx the parse tree
     */
    enterFor_control?: (ctx: For_controlContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.for_control`.
     * @param ctx the parse tree
     */
    exitFor_control?: (ctx: For_controlContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmt_foreach_a`.
     * @param ctx the parse tree
     */
    enterStmt_foreach_a?: (ctx: Stmt_foreach_aContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmt_foreach_a`.
     * @param ctx the parse tree
     */
    exitStmt_foreach_a?: (ctx: Stmt_foreach_aContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmt_exit`.
     * @param ctx the parse tree
     */
    enterStmt_exit?: (ctx: Stmt_exitContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmt_exit`.
     * @param ctx the parse tree
     */
    exitStmt_exit?: (ctx: Stmt_exitContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmt_return`.
     * @param ctx the parse tree
     */
    enterStmt_return?: (ctx: Stmt_returnContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmt_return`.
     * @param ctx the parse tree
     */
    exitStmt_return?: (ctx: Stmt_returnContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmt_raise`.
     * @param ctx the parse tree
     */
    enterStmt_raise?: (ctx: Stmt_raiseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmt_raise`.
     * @param ctx the parse tree
     */
    exitStmt_raise?: (ctx: Stmt_raiseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.opt_raise_using_elem`.
     * @param ctx the parse tree
     */
    enterOpt_raise_using_elem?: (ctx: Opt_raise_using_elemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.opt_raise_using_elem`.
     * @param ctx the parse tree
     */
    exitOpt_raise_using_elem?: (ctx: Opt_raise_using_elemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmt_assert`.
     * @param ctx the parse tree
     */
    enterStmt_assert?: (ctx: Stmt_assertContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmt_assert`.
     * @param ctx the parse tree
     */
    exitStmt_assert?: (ctx: Stmt_assertContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.loop_body`.
     * @param ctx the parse tree
     */
    enterLoop_body?: (ctx: Loop_bodyContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.loop_body`.
     * @param ctx the parse tree
     */
    exitLoop_body?: (ctx: Loop_bodyContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmt_execsql`.
     * @param ctx the parse tree
     */
    enterStmt_execsql?: (ctx: Stmt_execsqlContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmt_execsql`.
     * @param ctx the parse tree
     */
    exitStmt_execsql?: (ctx: Stmt_execsqlContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmt_dynexecute`.
     * @param ctx the parse tree
     */
    enterStmt_dynexecute?: (ctx: Stmt_dynexecuteContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmt_dynexecute`.
     * @param ctx the parse tree
     */
    exitStmt_dynexecute?: (ctx: Stmt_dynexecuteContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.opt_execute_into`.
     * @param ctx the parse tree
     */
    enterOpt_execute_into?: (ctx: Opt_execute_intoContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.opt_execute_into`.
     * @param ctx the parse tree
     */
    exitOpt_execute_into?: (ctx: Opt_execute_intoContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmt_open`.
     * @param ctx the parse tree
     */
    enterStmt_open?: (ctx: Stmt_openContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmt_open`.
     * @param ctx the parse tree
     */
    exitStmt_open?: (ctx: Stmt_openContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.opt_open_bound_list_item`.
     * @param ctx the parse tree
     */
    enterOpt_open_bound_list_item?: (ctx: Opt_open_bound_list_itemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.opt_open_bound_list_item`.
     * @param ctx the parse tree
     */
    exitOpt_open_bound_list_item?: (ctx: Opt_open_bound_list_itemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmt_fetch`.
     * @param ctx the parse tree
     */
    enterStmt_fetch?: (ctx: Stmt_fetchContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmt_fetch`.
     * @param ctx the parse tree
     */
    exitStmt_fetch?: (ctx: Stmt_fetchContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.opt_fetch_direction`.
     * @param ctx the parse tree
     */
    enterOpt_fetch_direction?: (ctx: Opt_fetch_directionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.opt_fetch_direction`.
     * @param ctx the parse tree
     */
    exitOpt_fetch_direction?: (ctx: Opt_fetch_directionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmt_move`.
     * @param ctx the parse tree
     */
    enterStmt_move?: (ctx: Stmt_moveContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmt_move`.
     * @param ctx the parse tree
     */
    exitStmt_move?: (ctx: Stmt_moveContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.data_source`.
     * @param ctx the parse tree
     */
    enterData_source?: (ctx: Data_sourceContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.data_source`.
     * @param ctx the parse tree
     */
    exitData_source?: (ctx: Data_sourceContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.merge_when_clause`.
     * @param ctx the parse tree
     */
    enterMerge_when_clause?: (ctx: Merge_when_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.merge_when_clause`.
     * @param ctx the parse tree
     */
    exitMerge_when_clause?: (ctx: Merge_when_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.merge_insert`.
     * @param ctx the parse tree
     */
    enterMerge_insert?: (ctx: Merge_insertContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.merge_insert`.
     * @param ctx the parse tree
     */
    exitMerge_insert?: (ctx: Merge_insertContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.merge_update`.
     * @param ctx the parse tree
     */
    enterMerge_update?: (ctx: Merge_updateContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.merge_update`.
     * @param ctx the parse tree
     */
    exitMerge_update?: (ctx: Merge_updateContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.default_values_or_values`.
     * @param ctx the parse tree
     */
    enterDefault_values_or_values?: (ctx: Default_values_or_valuesContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.default_values_or_values`.
     * @param ctx the parse tree
     */
    exitDefault_values_or_values?: (ctx: Default_values_or_valuesContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.stmt_close`.
     * @param ctx the parse tree
     */
    enterStmt_close?: (ctx: Stmt_closeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmt_close`.
     * @param ctx the parse tree
     */
    exitStmt_close?: (ctx: Stmt_closeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmt_null`.
     * @param ctx the parse tree
     */
    enterStmt_null?: (ctx: Stmt_nullContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmt_null`.
     * @param ctx the parse tree
     */
    exitStmt_null?: (ctx: Stmt_nullContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmt_commit_or_rollback`.
     * @param ctx the parse tree
     */
    enterStmt_commit_or_rollback?: (ctx: Stmt_commit_or_rollbackContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmt_commit_or_rollback`.
     * @param ctx the parse tree
     */
    exitStmt_commit_or_rollback?: (ctx: Stmt_commit_or_rollbackContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.stmt_set`.
     * @param ctx the parse tree
     */
    enterStmt_set?: (ctx: Stmt_setContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.stmt_set`.
     * @param ctx the parse tree
     */
    exitStmt_set?: (ctx: Stmt_setContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.cursor_variable`.
     * @param ctx the parse tree
     */
    enterCursor_variable?: (ctx: Cursor_variableContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.cursor_variable`.
     * @param ctx the parse tree
     */
    exitCursor_variable?: (ctx: Cursor_variableContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.exception_sect`.
     * @param ctx the parse tree
     */
    enterException_sect?: (ctx: Exception_sectContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.exception_sect`.
     * @param ctx the parse tree
     */
    exitException_sect?: (ctx: Exception_sectContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.proc_condition`.
     * @param ctx the parse tree
     */
    enterProc_condition?: (ctx: Proc_conditionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.proc_condition`.
     * @param ctx the parse tree
     */
    exitProc_condition?: (ctx: Proc_conditionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.any_identifier`.
     * @param ctx the parse tree
     */
    enterAny_identifier?: (ctx: Any_identifierContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.any_identifier`.
     * @param ctx the parse tree
     */
    exitAny_identifier?: (ctx: Any_identifierContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.sql_expression`.
     * @param ctx the parse tree
     */
    enterSql_expression?: (ctx: Sql_expressionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.sql_expression`.
     * @param ctx the parse tree
     */
    exitSql_expression?: (ctx: Sql_expressionContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

