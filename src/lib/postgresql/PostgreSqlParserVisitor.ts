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
     * Visit a parse tree produced by `PostgreSqlParser.alter_routine_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_routine_clause?: (ctx: Alter_routine_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.routine_action`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoutine_action?: (ctx: Routine_actionContext) => Result;
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
     * Visit a parse tree produced by the `schemaNameCreate`
     * labeled alternative in `PostgreSqlParser.schema_name_create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSchemaNameCreate?: (ctx: SchemaNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.schema_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSchema_stmt?: (ctx: Schema_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.variableSetStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableSetStmt?: (ctx: VariableSetStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.set_rest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_rest?: (ctx: Set_restContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.generic_set`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneric_set?: (ctx: Generic_setContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.set_rest_more`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_rest_more?: (ctx: Set_rest_moreContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.var_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVar_name?: (ctx: Var_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.var_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVar_list?: (ctx: Var_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.var_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVar_value?: (ctx: Var_valueContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.iso_level`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIso_level?: (ctx: Iso_levelContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.opt_boolean_or_string_column`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_boolean_or_string_column?: (ctx: Opt_boolean_or_string_columnContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.opt_boolean_or_string`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_boolean_or_string?: (ctx: Opt_boolean_or_stringContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.zone_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitZone_value?: (ctx: Zone_valueContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.reset_rest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReset_rest?: (ctx: Reset_restContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.alter_table_cmds`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_table_cmds?: (ctx: Alter_table_cmdsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.partition_bound_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartition_bound_spec?: (ctx: Partition_bound_specContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.partition_bound_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartition_bound_clause?: (ctx: Partition_bound_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.partition_bound_choose`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartition_bound_choose?: (ctx: Partition_bound_chooseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.partition_with_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartition_with_clause?: (ctx: Partition_with_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.partition_cmd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartition_cmd?: (ctx: Partition_cmdContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.index_partition_cmd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_partition_cmd?: (ctx: Index_partition_cmdContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alter_table_cmd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_table_cmd?: (ctx: Alter_table_cmdContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alter_column_default`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_column_default?: (ctx: Alter_column_defaultContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.opt_drop_behavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_drop_behavior?: (ctx: Opt_drop_behaviorContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.opt_collate_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_collate_clause?: (ctx: Opt_collate_clauseContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.alter_type_cmd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_type_cmd?: (ctx: Alter_type_cmdContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.copy_generic_opt_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopy_generic_opt_elem?: (ctx: Copy_generic_opt_elemContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.generated_when`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenerated_when?: (ctx: Generated_whenContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.opt_column_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_column_list?: (ctx: Opt_column_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.opt_column_list_create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_column_list_create?: (ctx: Opt_column_list_createContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.column_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_list?: (ctx: Column_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.opt_c_include`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_c_include?: (ctx: Opt_c_includeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.key_match`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKey_match?: (ctx: Key_matchContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.exclusionConstraintElem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExclusionConstraintElem?: (ctx: ExclusionConstraintElemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.key_actions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKey_actions?: (ctx: Key_actionsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.key_update`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKey_update?: (ctx: Key_updateContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.key_delete`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKey_delete?: (ctx: Key_deleteContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.key_action`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKey_action?: (ctx: Key_actionContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.part_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPart_elem?: (ctx: Part_elemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.table_access_method_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_access_method_clause?: (ctx: Table_access_method_clauseContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.create_as_target`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_as_target?: (ctx: Create_as_targetContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.opt_with_data`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_with_data?: (ctx: Opt_with_dataContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.fdw_option`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFdw_option?: (ctx: Fdw_optionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterFdwStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterFdwStmt?: (ctx: AlterFdwStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.create_generic_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_generic_options?: (ctx: Create_generic_optionsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alter_generic_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_generic_options?: (ctx: Alter_generic_optionsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alter_generic_option_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_generic_option_elem?: (ctx: Alter_generic_option_elemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.generic_option_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneric_option_elem?: (ctx: Generic_option_elemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createForeignServerStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateForeignServerStmt?: (ctx: CreateForeignServerStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.foreign_server_version`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForeign_server_version?: (ctx: Foreign_server_versionContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.procedure_action`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedure_action?: (ctx: Procedure_actionContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.function_or_procedure`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_or_procedure?: (ctx: Function_or_procedureContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.event_trigger_when_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEvent_trigger_when_item?: (ctx: Event_trigger_when_itemContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.def_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDef_elem?: (ctx: Def_elemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.def_arg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDef_arg?: (ctx: Def_argContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.old_aggregate_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOld_aggregate_elem?: (ctx: Old_aggregate_elemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alterEnumStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterEnumStmt?: (ctx: AlterEnumStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.opt_if_not_exists`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_if_not_exists?: (ctx: Opt_if_not_existsContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.object_type_any_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_type_any_name?: (ctx: Object_type_any_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.object_type_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_type_name?: (ctx: Object_type_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.any_name_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAny_name_list?: (ctx: Any_name_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.any_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAny_name?: (ctx: Any_nameContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.truncate_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTruncate_table?: (ctx: Truncate_tableContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.from_in`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrom_in?: (ctx: From_inContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.privilege_target`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrivilege_target?: (ctx: Privilege_targetContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.grantee_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrantee_list?: (ctx: Grantee_listContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.defacl_privilege_target`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefacl_privilege_target?: (ctx: Defacl_privilege_targetContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.indexStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndexStmt?: (ctx: IndexStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.index_params`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_params?: (ctx: Index_paramsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.index_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_elem?: (ctx: Index_elemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createFunctionStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateFunctionStmt?: (ctx: CreateFunctionStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.opt_or_replace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_or_replace?: (ctx: Opt_or_replaceContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.func_args`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_args?: (ctx: Func_argsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.func_args_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_args_list?: (ctx: Func_args_listContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.func_arg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_arg?: (ctx: Func_argContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.arg_class`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArg_class?: (ctx: Arg_classContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.func_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_type?: (ctx: Func_typeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.func_arg_with_default`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_arg_with_default?: (ctx: Func_arg_with_defaultContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.aggregate_args`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregate_args?: (ctx: Aggregate_argsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.aggregateWithArgTypes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregateWithArgTypes?: (ctx: AggregateWithArgTypesContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.common_func_opt_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommon_func_opt_item?: (ctx: Common_func_opt_itemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.create_func_opt_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_func_opt_item?: (ctx: Create_func_opt_itemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.opt_definition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_definition?: (ctx: Opt_definitionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.table_func_column`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_func_column?: (ctx: Table_func_columnContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.any_operator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAny_operator?: (ctx: Any_operatorContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.opt_if_exists`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_if_exists?: (ctx: Opt_if_existsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.createTransformStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTransformStmt?: (ctx: CreateTransformStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.sql_with_function`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSql_with_function?: (ctx: Sql_with_functionContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.operator_def_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperator_def_list?: (ctx: Operator_def_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.operator_def_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperator_def_elem?: (ctx: Operator_def_elemContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.notify_payload`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotify_payload?: (ctx: Notify_payloadContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.opt_transaction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_transaction?: (ctx: Opt_transactionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.transaction_mode_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransaction_mode_item?: (ctx: Transaction_mode_itemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.transaction_mode_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransaction_mode_list?: (ctx: Transaction_mode_listContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.create_db_opt_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_db_opt_item?: (ctx: Create_db_opt_itemContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.analyze_keyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyze_keyword?: (ctx: Analyze_keywordContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.vac_analyze_option_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVac_analyze_option_elem?: (ctx: Vac_analyze_option_elemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.analyze_option_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyze_option_elem?: (ctx: Analyze_option_elemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.opt_verbose`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_verbose?: (ctx: Opt_verboseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.vacuum_relation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVacuum_relation?: (ctx: Vacuum_relationContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.vacuum_relation_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVacuum_relation_list?: (ctx: Vacuum_relation_listContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.explain_option_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplain_option_list?: (ctx: Explain_option_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.prepareStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrepareStmt?: (ctx: PrepareStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.prep_type_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrep_type_clause?: (ctx: Prep_type_clauseContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.execute_param_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExecute_param_clause?: (ctx: Execute_param_clauseContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.insert_rest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsert_rest?: (ctx: Insert_restContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.insert_column_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsert_column_list?: (ctx: Insert_column_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.insert_column_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsert_column_item?: (ctx: Insert_column_itemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.returning_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturning_clause?: (ctx: Returning_clauseContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.set_clause_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_clause_list?: (ctx: Set_clause_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.set_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_clause?: (ctx: Set_clauseContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.select_with_parens`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelect_with_parens?: (ctx: Select_with_parensContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.select_no_parens`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelect_no_parens?: (ctx: Select_no_parensContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.select_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelect_clause?: (ctx: Select_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.simple_select`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimple_select?: (ctx: Simple_selectContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.set_operator_with_all_or_distinct`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_operator_with_all_or_distinct?: (ctx: Set_operator_with_all_or_distinctContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.with_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWith_clause?: (ctx: With_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.common_table_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommon_table_expr?: (ctx: Common_table_exprContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.search_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSearch_clause?: (ctx: Search_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.cycle_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCycle_clause?: (ctx: Cycle_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.into_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInto_clause?: (ctx: Into_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.optTempTableName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptTempTableName?: (ctx: OptTempTableNameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.distinct_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDistinct_clause?: (ctx: Distinct_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.sort_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSort_clause?: (ctx: Sort_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.sortBy`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSortBy?: (ctx: SortByContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.select_limit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelect_limit?: (ctx: Select_limitContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.limit_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLimit_clause?: (ctx: Limit_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.fetch_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFetch_clause?: (ctx: Fetch_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.offset_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOffset_clause?: (ctx: Offset_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.select_fetch_first_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelect_fetch_first_value?: (ctx: Select_fetch_first_valueContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.group_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroup_clause?: (ctx: Group_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.group_by_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroup_by_list?: (ctx: Group_by_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.group_by_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroup_by_item?: (ctx: Group_by_itemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.for_locking_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFor_locking_clause?: (ctx: For_locking_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.values_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValues_clause?: (ctx: Values_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.from_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrom_clause?: (ctx: From_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.from_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrom_list?: (ctx: From_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.table_ref`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_ref?: (ctx: Table_refContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.alias_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlias_clause?: (ctx: Alias_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.func_alias_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_alias_clause?: (ctx: Func_alias_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.join_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoin_type?: (ctx: Join_typeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.join_qual`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoin_qual?: (ctx: Join_qualContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.relation_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelation_expr?: (ctx: Relation_exprContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.publication_relation_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPublication_relation_expr?: (ctx: Publication_relation_exprContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.relation_expr_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelation_expr_list?: (ctx: Relation_expr_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.relation_expr_opt_alias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelation_expr_opt_alias?: (ctx: Relation_expr_opt_aliasContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.tableSampleClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableSampleClause?: (ctx: TableSampleClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.func_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_table?: (ctx: Func_tableContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.rowsFromItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowsFromItem?: (ctx: RowsFromItemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.where_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhere_clause?: (ctx: Where_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.where_or_current_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhere_or_current_clause?: (ctx: Where_or_current_clauseContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.xml_namespace_el`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_namespace_el?: (ctx: Xml_namespace_elContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.opt_float`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_float?: (ctx: Opt_floatContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.opt_interval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_interval?: (ctx: Opt_intervalContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.interval_second`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterval_second?: (ctx: Interval_secondContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.func_application`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_application?: (ctx: Func_applicationContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.func_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_expr?: (ctx: Func_exprContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.func_expr_windowless`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_expr_windowless?: (ctx: Func_expr_windowlessContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.func_expr_common_subexpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_expr_common_subexpr?: (ctx: Func_expr_common_subexprContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.xml_attribute_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_attribute_list?: (ctx: Xml_attribute_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.xml_attribute_el`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_attribute_el?: (ctx: Xml_attribute_elContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.document_or_content`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDocument_or_content?: (ctx: Document_or_contentContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.xmlExistsArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmlExistsArgument?: (ctx: XmlExistsArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.xml_passing_mech`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_passing_mech?: (ctx: Xml_passing_mechContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.window_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindow_clause?: (ctx: Window_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.window_definition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindow_definition?: (ctx: Window_definitionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.over_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOver_clause?: (ctx: Over_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.window_specification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindow_specification?: (ctx: Window_specificationContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.opt_frame_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_frame_clause?: (ctx: Opt_frame_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.frame_bound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrame_bound?: (ctx: Frame_boundContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.row`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRow?: (ctx: RowContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.explicit_row`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplicit_row?: (ctx: Explicit_rowContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.sub_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSub_type?: (ctx: Sub_typeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.all_op`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAll_op?: (ctx: All_opContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.mathop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMathop?: (ctx: MathopContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.qual_op`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQual_op?: (ctx: Qual_opContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.qual_all_op`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQual_all_op?: (ctx: Qual_all_opContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.subquery_Op`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubquery_Op?: (ctx: Subquery_OpContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.expr_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr_list?: (ctx: Expr_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.column_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_expr?: (ctx: Column_exprContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.column_expr_no_paren`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_expr_no_paren?: (ctx: Column_expr_no_parenContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.func_arg_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_arg_list?: (ctx: Func_arg_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.func_arg_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_arg_expr?: (ctx: Func_arg_exprContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.array_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArray_expr?: (ctx: Array_exprContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.extract_arg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtract_arg?: (ctx: Extract_argContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.unicode_normal_form`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnicode_normal_form?: (ctx: Unicode_normal_formContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.substr_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubstr_list?: (ctx: Substr_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.when_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhen_clause?: (ctx: When_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.indirection_el`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndirection_el?: (ctx: Indirection_elContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.indirection`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndirection?: (ctx: IndirectionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.opt_indirection`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_indirection?: (ctx: Opt_indirectionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.target_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTarget_list?: (ctx: Target_listContext) => Result;
    /**
     * Visit a parse tree produced by the `target_label`
     * labeled alternative in `PostgreSqlParser.target_el`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTarget_label?: (ctx: Target_labelContext) => Result;
    /**
     * Visit a parse tree produced by the `target_star`
     * labeled alternative in `PostgreSqlParser.target_el`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTarget_star?: (ctx: Target_starContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.qualified_name_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualified_name_list?: (ctx: Qualified_name_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.table_name_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_name_list?: (ctx: Table_name_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.schema_name_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSchema_name_list?: (ctx: Schema_name_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.database_nameList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatabase_nameList?: (ctx: Database_nameListContext) => Result;
    /**
     * Visit a parse tree produced by the `tablespaceNameCreate`
     * labeled alternative in `PostgreSqlParser.tablespace_name_create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablespaceNameCreate?: (ctx: TablespaceNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by the `tablespaceName`
     * labeled alternative in `PostgreSqlParser.tablespace_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablespaceName?: (ctx: TablespaceNameContext) => Result;
    /**
     * Visit a parse tree produced by the `tableNameCreate`
     * labeled alternative in `PostgreSqlParser.table_name_create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableNameCreate?: (ctx: TableNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by the `tableName`
     * labeled alternative in `PostgreSqlParser.table_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableName?: (ctx: TableNameContext) => Result;
    /**
     * Visit a parse tree produced by the `viewNameCreate`
     * labeled alternative in `PostgreSqlParser.view_name_create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewNameCreate?: (ctx: ViewNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by the `viewName`
     * labeled alternative in `PostgreSqlParser.view_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewName?: (ctx: ViewNameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.qualified_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualified_name?: (ctx: Qualified_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.tablespace_name_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablespace_name_list?: (ctx: Tablespace_name_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.name_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitName_list?: (ctx: Name_listContext) => Result;
    /**
     * Visit a parse tree produced by the `databaseNameCreate`
     * labeled alternative in `PostgreSqlParser.database_name_create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatabaseNameCreate?: (ctx: DatabaseNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by the `databaseName`
     * labeled alternative in `PostgreSqlParser.database_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatabaseName?: (ctx: DatabaseNameContext) => Result;
    /**
     * Visit a parse tree produced by the `schemaName`
     * labeled alternative in `PostgreSqlParser.schema_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSchemaName?: (ctx: SchemaNameContext) => Result;
    /**
     * Visit a parse tree produced by the `routineNameCreate`
     * labeled alternative in `PostgreSqlParser.routine_name_create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoutineNameCreate?: (ctx: RoutineNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by the `routineName`
     * labeled alternative in `PostgreSqlParser.routine_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoutineName?: (ctx: RoutineNameContext) => Result;
    /**
     * Visit a parse tree produced by the `procedureName`
     * labeled alternative in `PostgreSqlParser.procedure_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedureName?: (ctx: ProcedureNameContext) => Result;
    /**
     * Visit a parse tree produced by the `procedureNameCreate`
     * labeled alternative in `PostgreSqlParser.procedure_name_create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedureNameCreate?: (ctx: ProcedureNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by the `columnName`
     * labeled alternative in `PostgreSqlParser.column_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnName?: (ctx: ColumnNameContext) => Result;
    /**
     * Visit a parse tree produced by the `columnNameMatch`
     * labeled alternative in `PostgreSqlParser.column_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameMatch?: (ctx: ColumnNameMatchContext) => Result;
    /**
     * Visit a parse tree produced by the `columnNameCreate`
     * labeled alternative in `PostgreSqlParser.column_name_create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameCreate?: (ctx: ColumnNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by the `functionNameCreate`
     * labeled alternative in `PostgreSqlParser.function_name_create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionNameCreate?: (ctx: FunctionNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by the `functionName`
     * labeled alternative in `PostgreSqlParser.function_name`.
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
     * Visit a parse tree produced by `PostgreSqlParser.role_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRole_list?: (ctx: Role_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.colId`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColId?: (ctx: ColIdContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.type_function_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_function_name?: (ctx: Type_function_nameContext) => Result;
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
     * Visit a parse tree produced by `PostgreSqlParser.unreserved_keyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnreserved_keyword?: (ctx: Unreserved_keywordContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.col_name_keyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCol_name_keyword?: (ctx: Col_name_keywordContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.type_func_name_keyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_func_name_keyword?: (ctx: Type_func_name_keywordContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.reserved_keyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReserved_keyword?: (ctx: Reserved_keywordContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.pl_block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPl_block?: (ctx: Pl_blockContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.label_decl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLabel_decl?: (ctx: Label_declContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.decl_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_statement?: (ctx: Decl_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.decl_cursor_arg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_cursor_arg?: (ctx: Decl_cursor_argContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.assign_operator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssign_operator?: (ctx: Assign_operatorContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.proc_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProc_stmt?: (ctx: Proc_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmt_perform`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_perform?: (ctx: Stmt_performContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmt_call`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_call?: (ctx: Stmt_callContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmt_assign`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_assign?: (ctx: Stmt_assignContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmt_getdiag`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_getdiag?: (ctx: Stmt_getdiagContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.getdiag_list_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGetdiag_list_item?: (ctx: Getdiag_list_itemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.assign_var`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssign_var?: (ctx: Assign_varContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmt_if`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_if?: (ctx: Stmt_ifContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmt_else`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_else?: (ctx: Stmt_elseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmt_case`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_case?: (ctx: Stmt_caseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmt_loop_while_for`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_loop_while_for?: (ctx: Stmt_loop_while_forContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.for_control`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFor_control?: (ctx: For_controlContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmt_foreach_a`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_foreach_a?: (ctx: Stmt_foreach_aContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmt_exit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_exit?: (ctx: Stmt_exitContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmt_return`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_return?: (ctx: Stmt_returnContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmt_raise`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_raise?: (ctx: Stmt_raiseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.opt_raise_using_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_raise_using_elem?: (ctx: Opt_raise_using_elemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmt_assert`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_assert?: (ctx: Stmt_assertContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.loop_body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoop_body?: (ctx: Loop_bodyContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmt_execsql`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_execsql?: (ctx: Stmt_execsqlContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmt_dynexecute`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_dynexecute?: (ctx: Stmt_dynexecuteContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.opt_execute_into`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_execute_into?: (ctx: Opt_execute_intoContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmt_open`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_open?: (ctx: Stmt_openContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.opt_open_bound_list_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_open_bound_list_item?: (ctx: Opt_open_bound_list_itemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmt_fetch`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_fetch?: (ctx: Stmt_fetchContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.opt_fetch_direction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_fetch_direction?: (ctx: Opt_fetch_directionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmt_move`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_move?: (ctx: Stmt_moveContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.mergeStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMergeStmt?: (ctx: MergeStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.data_source`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitData_source?: (ctx: Data_sourceContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.merge_when_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMerge_when_clause?: (ctx: Merge_when_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.merge_insert`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMerge_insert?: (ctx: Merge_insertContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.merge_update`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMerge_update?: (ctx: Merge_updateContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.default_values_or_values`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefault_values_or_values?: (ctx: Default_values_or_valuesContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.exprofdefault`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExprofdefault?: (ctx: ExprofdefaultContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmt_close`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_close?: (ctx: Stmt_closeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmt_null`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_null?: (ctx: Stmt_nullContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmt_commit_or_rollback`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_commit_or_rollback?: (ctx: Stmt_commit_or_rollbackContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.stmt_set`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_set?: (ctx: Stmt_setContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.cursor_variable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCursor_variable?: (ctx: Cursor_variableContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.exception_sect`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitException_sect?: (ctx: Exception_sectContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.proc_condition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProc_condition?: (ctx: Proc_conditionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.any_identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAny_identifier?: (ctx: Any_identifierContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSqlParser.sql_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSql_expression?: (ctx: Sql_expressionContext) => Result;
}

