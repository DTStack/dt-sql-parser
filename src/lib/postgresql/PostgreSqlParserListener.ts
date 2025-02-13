// Generated from /Users/xuxiaoqi/Documents/work/dt-sql-parser/src/grammar/postgresql/PostgreSqlParser.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { SQLParserBase } from '../SQLParserBase';


import { ProgramContext } from "./PostgreSqlParser.js";
import { SingleStmtContext } from "./PostgreSqlParser.js";
import { StmtContext } from "./PostgreSqlParser.js";
import { CallstmtContext } from "./PostgreSqlParser.js";
import { CreaterolestmtContext } from "./PostgreSqlParser.js";
import { AlteroptroleelemContext } from "./PostgreSqlParser.js";
import { CreateoptroleelemContext } from "./PostgreSqlParser.js";
import { CreateuserstmtContext } from "./PostgreSqlParser.js";
import { AlterrolestmtContext } from "./PostgreSqlParser.js";
import { AlterrolesetstmtContext } from "./PostgreSqlParser.js";
import { AlterroutinestmtContext } from "./PostgreSqlParser.js";
import { Alter_routine_cluaseContext } from "./PostgreSqlParser.js";
import { Routine_actionContext } from "./PostgreSqlParser.js";
import { CreategroupstmtContext } from "./PostgreSqlParser.js";
import { AltergroupstmtContext } from "./PostgreSqlParser.js";
import { CreateschemastmtContext } from "./PostgreSqlParser.js";
import { SchemaNameCreateContext } from "./PostgreSqlParser.js";
import { Schema_stmtContext } from "./PostgreSqlParser.js";
import { VariablesetstmtContext } from "./PostgreSqlParser.js";
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
import { Nonreservedword_or_sconstContext } from "./PostgreSqlParser.js";
import { VariableresetstmtContext } from "./PostgreSqlParser.js";
import { Reset_restContext } from "./PostgreSqlParser.js";
import { SetresetclauseContext } from "./PostgreSqlParser.js";
import { FunctionsetresetclauseContext } from "./PostgreSqlParser.js";
import { VariableshowstmtContext } from "./PostgreSqlParser.js";
import { ConstraintssetstmtContext } from "./PostgreSqlParser.js";
import { CheckpointstmtContext } from "./PostgreSqlParser.js";
import { DiscardstmtContext } from "./PostgreSqlParser.js";
import { AltertablestmtContext } from "./PostgreSqlParser.js";
import { Alter_table_cmdsContext } from "./PostgreSqlParser.js";
import { Partition_bound_specContext } from "./PostgreSqlParser.js";
import { Partition_bound_cluaseContext } from "./PostgreSqlParser.js";
import { Partition_bound_chooseContext } from "./PostgreSqlParser.js";
import { Partition_with_cluaseContext } from "./PostgreSqlParser.js";
import { Partition_cmdContext } from "./PostgreSqlParser.js";
import { Index_partition_cmdContext } from "./PostgreSqlParser.js";
import { Alter_table_cmdContext } from "./PostgreSqlParser.js";
import { Alter_column_defaultContext } from "./PostgreSqlParser.js";
import { Opt_drop_behaviorContext } from "./PostgreSqlParser.js";
import { Opt_collate_clauseContext } from "./PostgreSqlParser.js";
import { ReloptionsContext } from "./PostgreSqlParser.js";
import { Opt_reloptionsContext } from "./PostgreSqlParser.js";
import { Reloption_elemContext } from "./PostgreSqlParser.js";
import { PartitionboundspecContext } from "./PostgreSqlParser.js";
import { AltercompositetypestmtContext } from "./PostgreSqlParser.js";
import { Alter_type_cmdContext } from "./PostgreSqlParser.js";
import { CloseportalstmtContext } from "./PostgreSqlParser.js";
import { CopystmtContext } from "./PostgreSqlParser.js";
import { Copy_optionsContext } from "./PostgreSqlParser.js";
import { Copy_generic_opt_elemContext } from "./PostgreSqlParser.js";
import { ColumnCreateTableContext } from "./PostgreSqlParser.js";
import { OpttempContext } from "./PostgreSqlParser.js";
import { OpttypedtableelementlistContext } from "./PostgreSqlParser.js";
import { TableelementlistContext } from "./PostgreSqlParser.js";
import { TableelementContext } from "./PostgreSqlParser.js";
import { TypedtableelementContext } from "./PostgreSqlParser.js";
import { Column_defContext } from "./PostgreSqlParser.js";
import { ColconstraintContext } from "./PostgreSqlParser.js";
import { ColconstraintelemContext } from "./PostgreSqlParser.js";
import { Generated_whenContext } from "./PostgreSqlParser.js";
import { TablelikeoptionContext } from "./PostgreSqlParser.js";
import { ConstraintelemContext } from "./PostgreSqlParser.js";
import { Opt_column_listContext } from "./PostgreSqlParser.js";
import { Opt_column_list_createContext } from "./PostgreSqlParser.js";
import { Column_listContext } from "./PostgreSqlParser.js";
import { Opt_c_includeContext } from "./PostgreSqlParser.js";
import { Key_matchContext } from "./PostgreSqlParser.js";
import { ExclusionconstraintelemContext } from "./PostgreSqlParser.js";
import { Key_actionsContext } from "./PostgreSqlParser.js";
import { Key_updateContext } from "./PostgreSqlParser.js";
import { Key_deleteContext } from "./PostgreSqlParser.js";
import { Key_actionContext } from "./PostgreSqlParser.js";
import { OptinheritContext } from "./PostgreSqlParser.js";
import { PartitionspecContext } from "./PostgreSqlParser.js";
import { Part_elemContext } from "./PostgreSqlParser.js";
import { Table_access_method_clauseContext } from "./PostgreSqlParser.js";
import { OptwithContext } from "./PostgreSqlParser.js";
import { OncommitoptionContext } from "./PostgreSqlParser.js";
import { OpttablespaceContext } from "./PostgreSqlParser.js";
import { OptconstablespaceContext } from "./PostgreSqlParser.js";
import { ExistingindexContext } from "./PostgreSqlParser.js";
import { CreatestatsstmtContext } from "./PostgreSqlParser.js";
import { AlterstatsstmtContext } from "./PostgreSqlParser.js";
import { QueryCreateTableContext } from "./PostgreSqlParser.js";
import { Create_as_targetContext } from "./PostgreSqlParser.js";
import { Opt_with_dataContext } from "./PostgreSqlParser.js";
import { CreateMaterializedViewContext } from "./PostgreSqlParser.js";
import { RefreshmatviewstmtContext } from "./PostgreSqlParser.js";
import { CreateseqstmtContext } from "./PostgreSqlParser.js";
import { AlterseqstmtContext } from "./PostgreSqlParser.js";
import { SeqoptelemContext } from "./PostgreSqlParser.js";
import { NumericonlyContext } from "./PostgreSqlParser.js";
import { CreateplangstmtContext } from "./PostgreSqlParser.js";
import { CreatetablespacestmtContext } from "./PostgreSqlParser.js";
import { CreateextensionstmtContext } from "./PostgreSqlParser.js";
import { AlterextensionstmtContext } from "./PostgreSqlParser.js";
import { AlterextensioncontentsstmtContext } from "./PostgreSqlParser.js";
import { CreatefdwstmtContext } from "./PostgreSqlParser.js";
import { Fdw_optionContext } from "./PostgreSqlParser.js";
import { AlterfdwstmtContext } from "./PostgreSqlParser.js";
import { Create_generic_optionsContext } from "./PostgreSqlParser.js";
import { Alter_generic_optionsContext } from "./PostgreSqlParser.js";
import { Alter_generic_option_elemContext } from "./PostgreSqlParser.js";
import { Generic_option_elemContext } from "./PostgreSqlParser.js";
import { CreateforeignserverstmtContext } from "./PostgreSqlParser.js";
import { Foreign_server_versionContext } from "./PostgreSqlParser.js";
import { AlterforeignserverstmtContext } from "./PostgreSqlParser.js";
import { CreateForeignTableContext } from "./PostgreSqlParser.js";
import { CreatePartitionForeignTableContext } from "./PostgreSqlParser.js";
import { ImportforeignschemastmtContext } from "./PostgreSqlParser.js";
import { CreateusermappingstmtContext } from "./PostgreSqlParser.js";
import { AlterusermappingstmtContext } from "./PostgreSqlParser.js";
import { CreatepolicystmtContext } from "./PostgreSqlParser.js";
import { AlterpolicystmtContext } from "./PostgreSqlParser.js";
import { AlterprocedurestmtContext } from "./PostgreSqlParser.js";
import { Procedure_actionContext } from "./PostgreSqlParser.js";
import { RowsecurityoptionalexprContext } from "./PostgreSqlParser.js";
import { RowsecurityoptionalwithcheckContext } from "./PostgreSqlParser.js";
import { CreateamstmtContext } from "./PostgreSqlParser.js";
import { CreatetrigstmtContext } from "./PostgreSqlParser.js";
import { TriggeractiontimeContext } from "./PostgreSqlParser.js";
import { TriggereventsContext } from "./PostgreSqlParser.js";
import { TriggeroneeventContext } from "./PostgreSqlParser.js";
import { TriggerwhenContext } from "./PostgreSqlParser.js";
import { Function_or_procedureContext } from "./PostgreSqlParser.js";
import { TriggerfuncargsContext } from "./PostgreSqlParser.js";
import { TriggerfuncargContext } from "./PostgreSqlParser.js";
import { ConstraintattributeElemContext } from "./PostgreSqlParser.js";
import { CreateeventtrigstmtContext } from "./PostgreSqlParser.js";
import { Event_trigger_when_itemContext } from "./PostgreSqlParser.js";
import { AltereventtrigstmtContext } from "./PostgreSqlParser.js";
import { CreateassertionstmtContext } from "./PostgreSqlParser.js";
import { DefinestmtContext } from "./PostgreSqlParser.js";
import { DefinitionContext } from "./PostgreSqlParser.js";
import { Def_elemContext } from "./PostgreSqlParser.js";
import { Def_argContext } from "./PostgreSqlParser.js";
import { Old_aggr_elemContext } from "./PostgreSqlParser.js";
import { AlterenumstmtContext } from "./PostgreSqlParser.js";
import { Opt_if_not_existsContext } from "./PostgreSqlParser.js";
import { CreateopclassstmtContext } from "./PostgreSqlParser.js";
import { Opclass_itemContext } from "./PostgreSqlParser.js";
import { CreateopfamilystmtContext } from "./PostgreSqlParser.js";
import { AlteropfamilystmtContext } from "./PostgreSqlParser.js";
import { Opclass_dropContext } from "./PostgreSqlParser.js";
import { ReassignownedstmtContext } from "./PostgreSqlParser.js";
import { DropstmtContext } from "./PostgreSqlParser.js";
import { Object_type_any_nameContext } from "./PostgreSqlParser.js";
import { Object_type_nameContext } from "./PostgreSqlParser.js";
import { Any_name_listContext } from "./PostgreSqlParser.js";
import { Any_nameContext } from "./PostgreSqlParser.js";
import { AttrsContext } from "./PostgreSqlParser.js";
import { TruncatestmtContext } from "./PostgreSqlParser.js";
import { Truncate_tableContext } from "./PostgreSqlParser.js";
import { CommentstmtContext } from "./PostgreSqlParser.js";
import { SeclabelstmtContext } from "./PostgreSqlParser.js";
import { FetchstmtContext } from "./PostgreSqlParser.js";
import { Fetch_argsContext } from "./PostgreSqlParser.js";
import { From_inContext } from "./PostgreSqlParser.js";
import { GrantstmtContext } from "./PostgreSqlParser.js";
import { RevokestmtContext } from "./PostgreSqlParser.js";
import { PrivilegesContext } from "./PostgreSqlParser.js";
import { BeforeprivilegeselectContext } from "./PostgreSqlParser.js";
import { PrivilegeContext } from "./PostgreSqlParser.js";
import { Privilege_targetContext } from "./PostgreSqlParser.js";
import { Grantee_listContext } from "./PostgreSqlParser.js";
import { GrantrolestmtContext } from "./PostgreSqlParser.js";
import { RevokerolestmtContext } from "./PostgreSqlParser.js";
import { AlterdefaultprivilegesstmtContext } from "./PostgreSqlParser.js";
import { DefaclactionContext } from "./PostgreSqlParser.js";
import { Defacl_privilege_targetContext } from "./PostgreSqlParser.js";
import { IndexstmtContext } from "./PostgreSqlParser.js";
import { Index_paramsContext } from "./PostgreSqlParser.js";
import { Index_elemContext } from "./PostgreSqlParser.js";
import { CreatefunctionstmtContext } from "./PostgreSqlParser.js";
import { Opt_or_replaceContext } from "./PostgreSqlParser.js";
import { Func_argsContext } from "./PostgreSqlParser.js";
import { Func_args_listContext } from "./PostgreSqlParser.js";
import { Routine_with_argtypes_listContext } from "./PostgreSqlParser.js";
import { Routine_with_argtypesContext } from "./PostgreSqlParser.js";
import { Procedure_with_argtypes_listContext } from "./PostgreSqlParser.js";
import { Procedure_with_argtypesContext } from "./PostgreSqlParser.js";
import { Function_with_argtypes_listContext } from "./PostgreSqlParser.js";
import { Function_with_argtypesContext } from "./PostgreSqlParser.js";
import { Func_argContext } from "./PostgreSqlParser.js";
import { Arg_classContext } from "./PostgreSqlParser.js";
import { Func_typeContext } from "./PostgreSqlParser.js";
import { Func_arg_with_defaultContext } from "./PostgreSqlParser.js";
import { Aggr_argsContext } from "./PostgreSqlParser.js";
import { Aggregate_with_argtypesContext } from "./PostgreSqlParser.js";
import { Common_func_opt_itemContext } from "./PostgreSqlParser.js";
import { Createfunc_opt_itemContext } from "./PostgreSqlParser.js";
import { Opt_definitionContext } from "./PostgreSqlParser.js";
import { Table_func_columnContext } from "./PostgreSqlParser.js";
import { AlterfunctionstmtContext } from "./PostgreSqlParser.js";
import { RemovefuncstmtContext } from "./PostgreSqlParser.js";
import { RemoveaggrstmtContext } from "./PostgreSqlParser.js";
import { RemoveoperstmtContext } from "./PostgreSqlParser.js";
import { Oper_argtypesContext } from "./PostgreSqlParser.js";
import { Any_operatorContext } from "./PostgreSqlParser.js";
import { Operator_with_argtypesContext } from "./PostgreSqlParser.js";
import { DostmtContext } from "./PostgreSqlParser.js";
import { CreatecaststmtContext } from "./PostgreSqlParser.js";
import { Opt_if_existsContext } from "./PostgreSqlParser.js";
import { CreatetransformstmtContext } from "./PostgreSqlParser.js";
import { Sql_with_functionContext } from "./PostgreSqlParser.js";
import { ReindexstmtContext } from "./PostgreSqlParser.js";
import { AltertblspcstmtContext } from "./PostgreSqlParser.js";
import { RenamestmtContext } from "./PostgreSqlParser.js";
import { AlterobjectdependsstmtContext } from "./PostgreSqlParser.js";
import { AlterobjectschemastmtContext } from "./PostgreSqlParser.js";
import { AlteroperatorstmtContext } from "./PostgreSqlParser.js";
import { Operator_def_listContext } from "./PostgreSqlParser.js";
import { Operator_def_elemContext } from "./PostgreSqlParser.js";
import { AltertypestmtContext } from "./PostgreSqlParser.js";
import { AlterownerstmtContext } from "./PostgreSqlParser.js";
import { CreatepublicationstmtContext } from "./PostgreSqlParser.js";
import { AlterpublicationstmtContext } from "./PostgreSqlParser.js";
import { CreatesubscriptionstmtContext } from "./PostgreSqlParser.js";
import { AltersubscriptionstmtContext } from "./PostgreSqlParser.js";
import { RulestmtContext } from "./PostgreSqlParser.js";
import { RuleactionstmtContext } from "./PostgreSqlParser.js";
import { NotifystmtContext } from "./PostgreSqlParser.js";
import { Notify_payloadContext } from "./PostgreSqlParser.js";
import { ListenstmtContext } from "./PostgreSqlParser.js";
import { UnlistenstmtContext } from "./PostgreSqlParser.js";
import { TransactionstmtContext } from "./PostgreSqlParser.js";
import { Opt_transactionContext } from "./PostgreSqlParser.js";
import { Transaction_mode_itemContext } from "./PostgreSqlParser.js";
import { Transaction_mode_listContext } from "./PostgreSqlParser.js";
import { CreateViewContext } from "./PostgreSqlParser.js";
import { LoadstmtContext } from "./PostgreSqlParser.js";
import { CreateDatabaseContext } from "./PostgreSqlParser.js";
import { Createdb_opt_itemContext } from "./PostgreSqlParser.js";
import { AlterdatabasestmtContext } from "./PostgreSqlParser.js";
import { AlterdatabasesetstmtContext } from "./PostgreSqlParser.js";
import { AltercollationstmtContext } from "./PostgreSqlParser.js";
import { AltersystemstmtContext } from "./PostgreSqlParser.js";
import { CreatedomainstmtContext } from "./PostgreSqlParser.js";
import { AlterdomainstmtContext } from "./PostgreSqlParser.js";
import { AltertsdictionarystmtContext } from "./PostgreSqlParser.js";
import { AltertsconfigurationstmtContext } from "./PostgreSqlParser.js";
import { CreateconversionstmtContext } from "./PostgreSqlParser.js";
import { ClusterstmtContext } from "./PostgreSqlParser.js";
import { VacuumstmtContext } from "./PostgreSqlParser.js";
import { AnalyzestmtContext } from "./PostgreSqlParser.js";
import { Analyze_keywordContext } from "./PostgreSqlParser.js";
import { Vac_analyze_option_elemContext } from "./PostgreSqlParser.js";
import { Analyze_option_elemContext } from "./PostgreSqlParser.js";
import { Opt_verboseContext } from "./PostgreSqlParser.js";
import { Vacuum_relationContext } from "./PostgreSqlParser.js";
import { Vacuum_relation_listContext } from "./PostgreSqlParser.js";
import { ExplainstmtContext } from "./PostgreSqlParser.js";
import { ExplainablestmtContext } from "./PostgreSqlParser.js";
import { Explain_option_listContext } from "./PostgreSqlParser.js";
import { PreparestmtContext } from "./PostgreSqlParser.js";
import { Prep_type_clauseContext } from "./PostgreSqlParser.js";
import { PreparablestmtContext } from "./PostgreSqlParser.js";
import { ExecutestmtContext } from "./PostgreSqlParser.js";
import { Execute_param_clauseContext } from "./PostgreSqlParser.js";
import { DeallocatestmtContext } from "./PostgreSqlParser.js";
import { InsertStatementContext } from "./PostgreSqlParser.js";
import { Insert_restContext } from "./PostgreSqlParser.js";
import { Insert_column_listContext } from "./PostgreSqlParser.js";
import { Insert_column_itemContext } from "./PostgreSqlParser.js";
import { Returning_clauseContext } from "./PostgreSqlParser.js";
import { DeletestmtContext } from "./PostgreSqlParser.js";
import { LockstmtContext } from "./PostgreSqlParser.js";
import { UpdatestmtContext } from "./PostgreSqlParser.js";
import { Set_clause_listContext } from "./PostgreSqlParser.js";
import { Set_clauseContext } from "./PostgreSqlParser.js";
import { DeclarecursorstmtContext } from "./PostgreSqlParser.js";
import { SelectStatementContext } from "./PostgreSqlParser.js";
import { Select_with_parensContext } from "./PostgreSqlParser.js";
import { Select_no_parensContext } from "./PostgreSqlParser.js";
import { Select_clauseContext } from "./PostgreSqlParser.js";
import { Simple_selectContext } from "./PostgreSqlParser.js";
import { Set_operator_with_all_or_distinctContext } from "./PostgreSqlParser.js";
import { With_clauseContext } from "./PostgreSqlParser.js";
import { Common_table_exprContext } from "./PostgreSqlParser.js";
import { Search_cluaseContext } from "./PostgreSqlParser.js";
import { Cycle_cluaseContext } from "./PostgreSqlParser.js";
import { Into_clauseContext } from "./PostgreSqlParser.js";
import { OpttempTableNameContext } from "./PostgreSqlParser.js";
import { Distinct_clauseContext } from "./PostgreSqlParser.js";
import { Sort_clauseContext } from "./PostgreSqlParser.js";
import { SortbyContext } from "./PostgreSqlParser.js";
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
import { Tablesample_clauseContext } from "./PostgreSqlParser.js";
import { Func_tableContext } from "./PostgreSqlParser.js";
import { Rowsfrom_itemContext } from "./PostgreSqlParser.js";
import { Where_clauseContext } from "./PostgreSqlParser.js";
import { Where_or_current_clauseContext } from "./PostgreSqlParser.js";
import { TablefuncelementlistContext } from "./PostgreSqlParser.js";
import { TablefuncelementContext } from "./PostgreSqlParser.js";
import { XmltableContext } from "./PostgreSqlParser.js";
import { Xmltable_column_elContext } from "./PostgreSqlParser.js";
import { Xml_namespace_elContext } from "./PostgreSqlParser.js";
import { TypenameContext } from "./PostgreSqlParser.js";
import { SimpletypenameContext } from "./PostgreSqlParser.js";
import { ConsttypenameContext } from "./PostgreSqlParser.js";
import { NumericContext } from "./PostgreSqlParser.js";
import { Opt_floatContext } from "./PostgreSqlParser.js";
import { BitContext } from "./PostgreSqlParser.js";
import { CharacterContext } from "./PostgreSqlParser.js";
import { ConstdatetimeContext } from "./PostgreSqlParser.js";
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
import { Xmlexists_argumentContext } from "./PostgreSqlParser.js";
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
import { Column_expr_noparenContext } from "./PostgreSqlParser.js";
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
import { SconstContext } from "./PostgreSqlParser.js";
import { AnysconstContext } from "./PostgreSqlParser.js";
import { SignediconstContext } from "./PostgreSqlParser.js";
import { RolespecContext } from "./PostgreSqlParser.js";
import { Role_listContext } from "./PostgreSqlParser.js";
import { ColidContext } from "./PostgreSqlParser.js";
import { Type_function_nameContext } from "./PostgreSqlParser.js";
import { NonreservedwordContext } from "./PostgreSqlParser.js";
import { CollabelContext } from "./PostgreSqlParser.js";
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
import { MergestmtContext } from "./PostgreSqlParser.js";
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
     * Enter a parse tree produced by `PostgreSqlParser.callstmt`.
     * @param ctx the parse tree
     */
    enterCallstmt?: (ctx: CallstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.callstmt`.
     * @param ctx the parse tree
     */
    exitCallstmt?: (ctx: CallstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createrolestmt`.
     * @param ctx the parse tree
     */
    enterCreaterolestmt?: (ctx: CreaterolestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createrolestmt`.
     * @param ctx the parse tree
     */
    exitCreaterolestmt?: (ctx: CreaterolestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alteroptroleelem`.
     * @param ctx the parse tree
     */
    enterAlteroptroleelem?: (ctx: AlteroptroleelemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alteroptroleelem`.
     * @param ctx the parse tree
     */
    exitAlteroptroleelem?: (ctx: AlteroptroleelemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createoptroleelem`.
     * @param ctx the parse tree
     */
    enterCreateoptroleelem?: (ctx: CreateoptroleelemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createoptroleelem`.
     * @param ctx the parse tree
     */
    exitCreateoptroleelem?: (ctx: CreateoptroleelemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createuserstmt`.
     * @param ctx the parse tree
     */
    enterCreateuserstmt?: (ctx: CreateuserstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createuserstmt`.
     * @param ctx the parse tree
     */
    exitCreateuserstmt?: (ctx: CreateuserstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterrolestmt`.
     * @param ctx the parse tree
     */
    enterAlterrolestmt?: (ctx: AlterrolestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterrolestmt`.
     * @param ctx the parse tree
     */
    exitAlterrolestmt?: (ctx: AlterrolestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterrolesetstmt`.
     * @param ctx the parse tree
     */
    enterAlterrolesetstmt?: (ctx: AlterrolesetstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterrolesetstmt`.
     * @param ctx the parse tree
     */
    exitAlterrolesetstmt?: (ctx: AlterrolesetstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterroutinestmt`.
     * @param ctx the parse tree
     */
    enterAlterroutinestmt?: (ctx: AlterroutinestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterroutinestmt`.
     * @param ctx the parse tree
     */
    exitAlterroutinestmt?: (ctx: AlterroutinestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alter_routine_cluase`.
     * @param ctx the parse tree
     */
    enterAlter_routine_cluase?: (ctx: Alter_routine_cluaseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alter_routine_cluase`.
     * @param ctx the parse tree
     */
    exitAlter_routine_cluase?: (ctx: Alter_routine_cluaseContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.creategroupstmt`.
     * @param ctx the parse tree
     */
    enterCreategroupstmt?: (ctx: CreategroupstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.creategroupstmt`.
     * @param ctx the parse tree
     */
    exitCreategroupstmt?: (ctx: CreategroupstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.altergroupstmt`.
     * @param ctx the parse tree
     */
    enterAltergroupstmt?: (ctx: AltergroupstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.altergroupstmt`.
     * @param ctx the parse tree
     */
    exitAltergroupstmt?: (ctx: AltergroupstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createschemastmt`.
     * @param ctx the parse tree
     */
    enterCreateschemastmt?: (ctx: CreateschemastmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createschemastmt`.
     * @param ctx the parse tree
     */
    exitCreateschemastmt?: (ctx: CreateschemastmtContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.variablesetstmt`.
     * @param ctx the parse tree
     */
    enterVariablesetstmt?: (ctx: VariablesetstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.variablesetstmt`.
     * @param ctx the parse tree
     */
    exitVariablesetstmt?: (ctx: VariablesetstmtContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.nonreservedword_or_sconst`.
     * @param ctx the parse tree
     */
    enterNonreservedword_or_sconst?: (ctx: Nonreservedword_or_sconstContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.nonreservedword_or_sconst`.
     * @param ctx the parse tree
     */
    exitNonreservedword_or_sconst?: (ctx: Nonreservedword_or_sconstContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.variableresetstmt`.
     * @param ctx the parse tree
     */
    enterVariableresetstmt?: (ctx: VariableresetstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.variableresetstmt`.
     * @param ctx the parse tree
     */
    exitVariableresetstmt?: (ctx: VariableresetstmtContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.setresetclause`.
     * @param ctx the parse tree
     */
    enterSetresetclause?: (ctx: SetresetclauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.setresetclause`.
     * @param ctx the parse tree
     */
    exitSetresetclause?: (ctx: SetresetclauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.functionsetresetclause`.
     * @param ctx the parse tree
     */
    enterFunctionsetresetclause?: (ctx: FunctionsetresetclauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.functionsetresetclause`.
     * @param ctx the parse tree
     */
    exitFunctionsetresetclause?: (ctx: FunctionsetresetclauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.variableshowstmt`.
     * @param ctx the parse tree
     */
    enterVariableshowstmt?: (ctx: VariableshowstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.variableshowstmt`.
     * @param ctx the parse tree
     */
    exitVariableshowstmt?: (ctx: VariableshowstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.constraintssetstmt`.
     * @param ctx the parse tree
     */
    enterConstraintssetstmt?: (ctx: ConstraintssetstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.constraintssetstmt`.
     * @param ctx the parse tree
     */
    exitConstraintssetstmt?: (ctx: ConstraintssetstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.checkpointstmt`.
     * @param ctx the parse tree
     */
    enterCheckpointstmt?: (ctx: CheckpointstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.checkpointstmt`.
     * @param ctx the parse tree
     */
    exitCheckpointstmt?: (ctx: CheckpointstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.discardstmt`.
     * @param ctx the parse tree
     */
    enterDiscardstmt?: (ctx: DiscardstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.discardstmt`.
     * @param ctx the parse tree
     */
    exitDiscardstmt?: (ctx: DiscardstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.altertablestmt`.
     * @param ctx the parse tree
     */
    enterAltertablestmt?: (ctx: AltertablestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.altertablestmt`.
     * @param ctx the parse tree
     */
    exitAltertablestmt?: (ctx: AltertablestmtContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.partition_bound_cluase`.
     * @param ctx the parse tree
     */
    enterPartition_bound_cluase?: (ctx: Partition_bound_cluaseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.partition_bound_cluase`.
     * @param ctx the parse tree
     */
    exitPartition_bound_cluase?: (ctx: Partition_bound_cluaseContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.partition_with_cluase`.
     * @param ctx the parse tree
     */
    enterPartition_with_cluase?: (ctx: Partition_with_cluaseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.partition_with_cluase`.
     * @param ctx the parse tree
     */
    exitPartition_with_cluase?: (ctx: Partition_with_cluaseContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.reloptions`.
     * @param ctx the parse tree
     */
    enterReloptions?: (ctx: ReloptionsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.reloptions`.
     * @param ctx the parse tree
     */
    exitReloptions?: (ctx: ReloptionsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.opt_reloptions`.
     * @param ctx the parse tree
     */
    enterOpt_reloptions?: (ctx: Opt_reloptionsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.opt_reloptions`.
     * @param ctx the parse tree
     */
    exitOpt_reloptions?: (ctx: Opt_reloptionsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.reloption_elem`.
     * @param ctx the parse tree
     */
    enterReloption_elem?: (ctx: Reloption_elemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.reloption_elem`.
     * @param ctx the parse tree
     */
    exitReloption_elem?: (ctx: Reloption_elemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.partitionboundspec`.
     * @param ctx the parse tree
     */
    enterPartitionboundspec?: (ctx: PartitionboundspecContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.partitionboundspec`.
     * @param ctx the parse tree
     */
    exitPartitionboundspec?: (ctx: PartitionboundspecContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.altercompositetypestmt`.
     * @param ctx the parse tree
     */
    enterAltercompositetypestmt?: (ctx: AltercompositetypestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.altercompositetypestmt`.
     * @param ctx the parse tree
     */
    exitAltercompositetypestmt?: (ctx: AltercompositetypestmtContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.closeportalstmt`.
     * @param ctx the parse tree
     */
    enterCloseportalstmt?: (ctx: CloseportalstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.closeportalstmt`.
     * @param ctx the parse tree
     */
    exitCloseportalstmt?: (ctx: CloseportalstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.copystmt`.
     * @param ctx the parse tree
     */
    enterCopystmt?: (ctx: CopystmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.copystmt`.
     * @param ctx the parse tree
     */
    exitCopystmt?: (ctx: CopystmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.copy_options`.
     * @param ctx the parse tree
     */
    enterCopy_options?: (ctx: Copy_optionsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.copy_options`.
     * @param ctx the parse tree
     */
    exitCopy_options?: (ctx: Copy_optionsContext) => void;
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
     * labeled alternative in `PostgreSqlParser.createstmt`.
     * @param ctx the parse tree
     */
    enterColumnCreateTable?: (ctx: ColumnCreateTableContext) => void;
    /**
     * Exit a parse tree produced by the `columnCreateTable`
     * labeled alternative in `PostgreSqlParser.createstmt`.
     * @param ctx the parse tree
     */
    exitColumnCreateTable?: (ctx: ColumnCreateTableContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.opttemp`.
     * @param ctx the parse tree
     */
    enterOpttemp?: (ctx: OpttempContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.opttemp`.
     * @param ctx the parse tree
     */
    exitOpttemp?: (ctx: OpttempContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.opttypedtableelementlist`.
     * @param ctx the parse tree
     */
    enterOpttypedtableelementlist?: (ctx: OpttypedtableelementlistContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.opttypedtableelementlist`.
     * @param ctx the parse tree
     */
    exitOpttypedtableelementlist?: (ctx: OpttypedtableelementlistContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.tableelementlist`.
     * @param ctx the parse tree
     */
    enterTableelementlist?: (ctx: TableelementlistContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.tableelementlist`.
     * @param ctx the parse tree
     */
    exitTableelementlist?: (ctx: TableelementlistContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.tableelement`.
     * @param ctx the parse tree
     */
    enterTableelement?: (ctx: TableelementContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.tableelement`.
     * @param ctx the parse tree
     */
    exitTableelement?: (ctx: TableelementContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.typedtableelement`.
     * @param ctx the parse tree
     */
    enterTypedtableelement?: (ctx: TypedtableelementContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.typedtableelement`.
     * @param ctx the parse tree
     */
    exitTypedtableelement?: (ctx: TypedtableelementContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.colconstraint`.
     * @param ctx the parse tree
     */
    enterColconstraint?: (ctx: ColconstraintContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.colconstraint`.
     * @param ctx the parse tree
     */
    exitColconstraint?: (ctx: ColconstraintContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.colconstraintelem`.
     * @param ctx the parse tree
     */
    enterColconstraintelem?: (ctx: ColconstraintelemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.colconstraintelem`.
     * @param ctx the parse tree
     */
    exitColconstraintelem?: (ctx: ColconstraintelemContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.tablelikeoption`.
     * @param ctx the parse tree
     */
    enterTablelikeoption?: (ctx: TablelikeoptionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.tablelikeoption`.
     * @param ctx the parse tree
     */
    exitTablelikeoption?: (ctx: TablelikeoptionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.constraintelem`.
     * @param ctx the parse tree
     */
    enterConstraintelem?: (ctx: ConstraintelemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.constraintelem`.
     * @param ctx the parse tree
     */
    exitConstraintelem?: (ctx: ConstraintelemContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.exclusionconstraintelem`.
     * @param ctx the parse tree
     */
    enterExclusionconstraintelem?: (ctx: ExclusionconstraintelemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.exclusionconstraintelem`.
     * @param ctx the parse tree
     */
    exitExclusionconstraintelem?: (ctx: ExclusionconstraintelemContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.optinherit`.
     * @param ctx the parse tree
     */
    enterOptinherit?: (ctx: OptinheritContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.optinherit`.
     * @param ctx the parse tree
     */
    exitOptinherit?: (ctx: OptinheritContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.partitionspec`.
     * @param ctx the parse tree
     */
    enterPartitionspec?: (ctx: PartitionspecContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.partitionspec`.
     * @param ctx the parse tree
     */
    exitPartitionspec?: (ctx: PartitionspecContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.optwith`.
     * @param ctx the parse tree
     */
    enterOptwith?: (ctx: OptwithContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.optwith`.
     * @param ctx the parse tree
     */
    exitOptwith?: (ctx: OptwithContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.oncommitoption`.
     * @param ctx the parse tree
     */
    enterOncommitoption?: (ctx: OncommitoptionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.oncommitoption`.
     * @param ctx the parse tree
     */
    exitOncommitoption?: (ctx: OncommitoptionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.opttablespace`.
     * @param ctx the parse tree
     */
    enterOpttablespace?: (ctx: OpttablespaceContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.opttablespace`.
     * @param ctx the parse tree
     */
    exitOpttablespace?: (ctx: OpttablespaceContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.optconstablespace`.
     * @param ctx the parse tree
     */
    enterOptconstablespace?: (ctx: OptconstablespaceContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.optconstablespace`.
     * @param ctx the parse tree
     */
    exitOptconstablespace?: (ctx: OptconstablespaceContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.existingindex`.
     * @param ctx the parse tree
     */
    enterExistingindex?: (ctx: ExistingindexContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.existingindex`.
     * @param ctx the parse tree
     */
    exitExistingindex?: (ctx: ExistingindexContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createstatsstmt`.
     * @param ctx the parse tree
     */
    enterCreatestatsstmt?: (ctx: CreatestatsstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createstatsstmt`.
     * @param ctx the parse tree
     */
    exitCreatestatsstmt?: (ctx: CreatestatsstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterstatsstmt`.
     * @param ctx the parse tree
     */
    enterAlterstatsstmt?: (ctx: AlterstatsstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterstatsstmt`.
     * @param ctx the parse tree
     */
    exitAlterstatsstmt?: (ctx: AlterstatsstmtContext) => void;
    /**
     * Enter a parse tree produced by the `queryCreateTable`
     * labeled alternative in `PostgreSqlParser.createasstmt`.
     * @param ctx the parse tree
     */
    enterQueryCreateTable?: (ctx: QueryCreateTableContext) => void;
    /**
     * Exit a parse tree produced by the `queryCreateTable`
     * labeled alternative in `PostgreSqlParser.createasstmt`.
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
     * labeled alternative in `PostgreSqlParser.creatematviewstmt`.
     * @param ctx the parse tree
     */
    enterCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => void;
    /**
     * Exit a parse tree produced by the `createMaterializedView`
     * labeled alternative in `PostgreSqlParser.creatematviewstmt`.
     * @param ctx the parse tree
     */
    exitCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.refreshmatviewstmt`.
     * @param ctx the parse tree
     */
    enterRefreshmatviewstmt?: (ctx: RefreshmatviewstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.refreshmatviewstmt`.
     * @param ctx the parse tree
     */
    exitRefreshmatviewstmt?: (ctx: RefreshmatviewstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createseqstmt`.
     * @param ctx the parse tree
     */
    enterCreateseqstmt?: (ctx: CreateseqstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createseqstmt`.
     * @param ctx the parse tree
     */
    exitCreateseqstmt?: (ctx: CreateseqstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterseqstmt`.
     * @param ctx the parse tree
     */
    enterAlterseqstmt?: (ctx: AlterseqstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterseqstmt`.
     * @param ctx the parse tree
     */
    exitAlterseqstmt?: (ctx: AlterseqstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.seqoptelem`.
     * @param ctx the parse tree
     */
    enterSeqoptelem?: (ctx: SeqoptelemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.seqoptelem`.
     * @param ctx the parse tree
     */
    exitSeqoptelem?: (ctx: SeqoptelemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.numericonly`.
     * @param ctx the parse tree
     */
    enterNumericonly?: (ctx: NumericonlyContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.numericonly`.
     * @param ctx the parse tree
     */
    exitNumericonly?: (ctx: NumericonlyContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createplangstmt`.
     * @param ctx the parse tree
     */
    enterCreateplangstmt?: (ctx: CreateplangstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createplangstmt`.
     * @param ctx the parse tree
     */
    exitCreateplangstmt?: (ctx: CreateplangstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createtablespacestmt`.
     * @param ctx the parse tree
     */
    enterCreatetablespacestmt?: (ctx: CreatetablespacestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createtablespacestmt`.
     * @param ctx the parse tree
     */
    exitCreatetablespacestmt?: (ctx: CreatetablespacestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createextensionstmt`.
     * @param ctx the parse tree
     */
    enterCreateextensionstmt?: (ctx: CreateextensionstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createextensionstmt`.
     * @param ctx the parse tree
     */
    exitCreateextensionstmt?: (ctx: CreateextensionstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterextensionstmt`.
     * @param ctx the parse tree
     */
    enterAlterextensionstmt?: (ctx: AlterextensionstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterextensionstmt`.
     * @param ctx the parse tree
     */
    exitAlterextensionstmt?: (ctx: AlterextensionstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterextensioncontentsstmt`.
     * @param ctx the parse tree
     */
    enterAlterextensioncontentsstmt?: (ctx: AlterextensioncontentsstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterextensioncontentsstmt`.
     * @param ctx the parse tree
     */
    exitAlterextensioncontentsstmt?: (ctx: AlterextensioncontentsstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createfdwstmt`.
     * @param ctx the parse tree
     */
    enterCreatefdwstmt?: (ctx: CreatefdwstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createfdwstmt`.
     * @param ctx the parse tree
     */
    exitCreatefdwstmt?: (ctx: CreatefdwstmtContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.alterfdwstmt`.
     * @param ctx the parse tree
     */
    enterAlterfdwstmt?: (ctx: AlterfdwstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterfdwstmt`.
     * @param ctx the parse tree
     */
    exitAlterfdwstmt?: (ctx: AlterfdwstmtContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.createforeignserverstmt`.
     * @param ctx the parse tree
     */
    enterCreateforeignserverstmt?: (ctx: CreateforeignserverstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createforeignserverstmt`.
     * @param ctx the parse tree
     */
    exitCreateforeignserverstmt?: (ctx: CreateforeignserverstmtContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.alterforeignserverstmt`.
     * @param ctx the parse tree
     */
    enterAlterforeignserverstmt?: (ctx: AlterforeignserverstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterforeignserverstmt`.
     * @param ctx the parse tree
     */
    exitAlterforeignserverstmt?: (ctx: AlterforeignserverstmtContext) => void;
    /**
     * Enter a parse tree produced by the `createForeignTable`
     * labeled alternative in `PostgreSqlParser.createforeigntablestmt`.
     * @param ctx the parse tree
     */
    enterCreateForeignTable?: (ctx: CreateForeignTableContext) => void;
    /**
     * Exit a parse tree produced by the `createForeignTable`
     * labeled alternative in `PostgreSqlParser.createforeigntablestmt`.
     * @param ctx the parse tree
     */
    exitCreateForeignTable?: (ctx: CreateForeignTableContext) => void;
    /**
     * Enter a parse tree produced by the `createPartitionForeignTable`
     * labeled alternative in `PostgreSqlParser.createforeigntablestmt`.
     * @param ctx the parse tree
     */
    enterCreatePartitionForeignTable?: (ctx: CreatePartitionForeignTableContext) => void;
    /**
     * Exit a parse tree produced by the `createPartitionForeignTable`
     * labeled alternative in `PostgreSqlParser.createforeigntablestmt`.
     * @param ctx the parse tree
     */
    exitCreatePartitionForeignTable?: (ctx: CreatePartitionForeignTableContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.importforeignschemastmt`.
     * @param ctx the parse tree
     */
    enterImportforeignschemastmt?: (ctx: ImportforeignschemastmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.importforeignschemastmt`.
     * @param ctx the parse tree
     */
    exitImportforeignschemastmt?: (ctx: ImportforeignschemastmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createusermappingstmt`.
     * @param ctx the parse tree
     */
    enterCreateusermappingstmt?: (ctx: CreateusermappingstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createusermappingstmt`.
     * @param ctx the parse tree
     */
    exitCreateusermappingstmt?: (ctx: CreateusermappingstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterusermappingstmt`.
     * @param ctx the parse tree
     */
    enterAlterusermappingstmt?: (ctx: AlterusermappingstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterusermappingstmt`.
     * @param ctx the parse tree
     */
    exitAlterusermappingstmt?: (ctx: AlterusermappingstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createpolicystmt`.
     * @param ctx the parse tree
     */
    enterCreatepolicystmt?: (ctx: CreatepolicystmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createpolicystmt`.
     * @param ctx the parse tree
     */
    exitCreatepolicystmt?: (ctx: CreatepolicystmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterpolicystmt`.
     * @param ctx the parse tree
     */
    enterAlterpolicystmt?: (ctx: AlterpolicystmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterpolicystmt`.
     * @param ctx the parse tree
     */
    exitAlterpolicystmt?: (ctx: AlterpolicystmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterprocedurestmt`.
     * @param ctx the parse tree
     */
    enterAlterprocedurestmt?: (ctx: AlterprocedurestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterprocedurestmt`.
     * @param ctx the parse tree
     */
    exitAlterprocedurestmt?: (ctx: AlterprocedurestmtContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.rowsecurityoptionalexpr`.
     * @param ctx the parse tree
     */
    enterRowsecurityoptionalexpr?: (ctx: RowsecurityoptionalexprContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.rowsecurityoptionalexpr`.
     * @param ctx the parse tree
     */
    exitRowsecurityoptionalexpr?: (ctx: RowsecurityoptionalexprContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.rowsecurityoptionalwithcheck`.
     * @param ctx the parse tree
     */
    enterRowsecurityoptionalwithcheck?: (ctx: RowsecurityoptionalwithcheckContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.rowsecurityoptionalwithcheck`.
     * @param ctx the parse tree
     */
    exitRowsecurityoptionalwithcheck?: (ctx: RowsecurityoptionalwithcheckContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createamstmt`.
     * @param ctx the parse tree
     */
    enterCreateamstmt?: (ctx: CreateamstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createamstmt`.
     * @param ctx the parse tree
     */
    exitCreateamstmt?: (ctx: CreateamstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createtrigstmt`.
     * @param ctx the parse tree
     */
    enterCreatetrigstmt?: (ctx: CreatetrigstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createtrigstmt`.
     * @param ctx the parse tree
     */
    exitCreatetrigstmt?: (ctx: CreatetrigstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.triggeractiontime`.
     * @param ctx the parse tree
     */
    enterTriggeractiontime?: (ctx: TriggeractiontimeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.triggeractiontime`.
     * @param ctx the parse tree
     */
    exitTriggeractiontime?: (ctx: TriggeractiontimeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.triggerevents`.
     * @param ctx the parse tree
     */
    enterTriggerevents?: (ctx: TriggereventsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.triggerevents`.
     * @param ctx the parse tree
     */
    exitTriggerevents?: (ctx: TriggereventsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.triggeroneevent`.
     * @param ctx the parse tree
     */
    enterTriggeroneevent?: (ctx: TriggeroneeventContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.triggeroneevent`.
     * @param ctx the parse tree
     */
    exitTriggeroneevent?: (ctx: TriggeroneeventContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.triggerwhen`.
     * @param ctx the parse tree
     */
    enterTriggerwhen?: (ctx: TriggerwhenContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.triggerwhen`.
     * @param ctx the parse tree
     */
    exitTriggerwhen?: (ctx: TriggerwhenContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.triggerfuncargs`.
     * @param ctx the parse tree
     */
    enterTriggerfuncargs?: (ctx: TriggerfuncargsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.triggerfuncargs`.
     * @param ctx the parse tree
     */
    exitTriggerfuncargs?: (ctx: TriggerfuncargsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.triggerfuncarg`.
     * @param ctx the parse tree
     */
    enterTriggerfuncarg?: (ctx: TriggerfuncargContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.triggerfuncarg`.
     * @param ctx the parse tree
     */
    exitTriggerfuncarg?: (ctx: TriggerfuncargContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.constraintattributeElem`.
     * @param ctx the parse tree
     */
    enterConstraintattributeElem?: (ctx: ConstraintattributeElemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.constraintattributeElem`.
     * @param ctx the parse tree
     */
    exitConstraintattributeElem?: (ctx: ConstraintattributeElemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createeventtrigstmt`.
     * @param ctx the parse tree
     */
    enterCreateeventtrigstmt?: (ctx: CreateeventtrigstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createeventtrigstmt`.
     * @param ctx the parse tree
     */
    exitCreateeventtrigstmt?: (ctx: CreateeventtrigstmtContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.altereventtrigstmt`.
     * @param ctx the parse tree
     */
    enterAltereventtrigstmt?: (ctx: AltereventtrigstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.altereventtrigstmt`.
     * @param ctx the parse tree
     */
    exitAltereventtrigstmt?: (ctx: AltereventtrigstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createassertionstmt`.
     * @param ctx the parse tree
     */
    enterCreateassertionstmt?: (ctx: CreateassertionstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createassertionstmt`.
     * @param ctx the parse tree
     */
    exitCreateassertionstmt?: (ctx: CreateassertionstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.definestmt`.
     * @param ctx the parse tree
     */
    enterDefinestmt?: (ctx: DefinestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.definestmt`.
     * @param ctx the parse tree
     */
    exitDefinestmt?: (ctx: DefinestmtContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.old_aggr_elem`.
     * @param ctx the parse tree
     */
    enterOld_aggr_elem?: (ctx: Old_aggr_elemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.old_aggr_elem`.
     * @param ctx the parse tree
     */
    exitOld_aggr_elem?: (ctx: Old_aggr_elemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterenumstmt`.
     * @param ctx the parse tree
     */
    enterAlterenumstmt?: (ctx: AlterenumstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterenumstmt`.
     * @param ctx the parse tree
     */
    exitAlterenumstmt?: (ctx: AlterenumstmtContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.createopclassstmt`.
     * @param ctx the parse tree
     */
    enterCreateopclassstmt?: (ctx: CreateopclassstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createopclassstmt`.
     * @param ctx the parse tree
     */
    exitCreateopclassstmt?: (ctx: CreateopclassstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.opclass_item`.
     * @param ctx the parse tree
     */
    enterOpclass_item?: (ctx: Opclass_itemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.opclass_item`.
     * @param ctx the parse tree
     */
    exitOpclass_item?: (ctx: Opclass_itemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createopfamilystmt`.
     * @param ctx the parse tree
     */
    enterCreateopfamilystmt?: (ctx: CreateopfamilystmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createopfamilystmt`.
     * @param ctx the parse tree
     */
    exitCreateopfamilystmt?: (ctx: CreateopfamilystmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alteropfamilystmt`.
     * @param ctx the parse tree
     */
    enterAlteropfamilystmt?: (ctx: AlteropfamilystmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alteropfamilystmt`.
     * @param ctx the parse tree
     */
    exitAlteropfamilystmt?: (ctx: AlteropfamilystmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.opclass_drop`.
     * @param ctx the parse tree
     */
    enterOpclass_drop?: (ctx: Opclass_dropContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.opclass_drop`.
     * @param ctx the parse tree
     */
    exitOpclass_drop?: (ctx: Opclass_dropContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.reassignownedstmt`.
     * @param ctx the parse tree
     */
    enterReassignownedstmt?: (ctx: ReassignownedstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.reassignownedstmt`.
     * @param ctx the parse tree
     */
    exitReassignownedstmt?: (ctx: ReassignownedstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.dropstmt`.
     * @param ctx the parse tree
     */
    enterDropstmt?: (ctx: DropstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.dropstmt`.
     * @param ctx the parse tree
     */
    exitDropstmt?: (ctx: DropstmtContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.truncatestmt`.
     * @param ctx the parse tree
     */
    enterTruncatestmt?: (ctx: TruncatestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.truncatestmt`.
     * @param ctx the parse tree
     */
    exitTruncatestmt?: (ctx: TruncatestmtContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.commentstmt`.
     * @param ctx the parse tree
     */
    enterCommentstmt?: (ctx: CommentstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.commentstmt`.
     * @param ctx the parse tree
     */
    exitCommentstmt?: (ctx: CommentstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.seclabelstmt`.
     * @param ctx the parse tree
     */
    enterSeclabelstmt?: (ctx: SeclabelstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.seclabelstmt`.
     * @param ctx the parse tree
     */
    exitSeclabelstmt?: (ctx: SeclabelstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.fetchstmt`.
     * @param ctx the parse tree
     */
    enterFetchstmt?: (ctx: FetchstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.fetchstmt`.
     * @param ctx the parse tree
     */
    exitFetchstmt?: (ctx: FetchstmtContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.grantstmt`.
     * @param ctx the parse tree
     */
    enterGrantstmt?: (ctx: GrantstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.grantstmt`.
     * @param ctx the parse tree
     */
    exitGrantstmt?: (ctx: GrantstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.revokestmt`.
     * @param ctx the parse tree
     */
    enterRevokestmt?: (ctx: RevokestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.revokestmt`.
     * @param ctx the parse tree
     */
    exitRevokestmt?: (ctx: RevokestmtContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.beforeprivilegeselect`.
     * @param ctx the parse tree
     */
    enterBeforeprivilegeselect?: (ctx: BeforeprivilegeselectContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.beforeprivilegeselect`.
     * @param ctx the parse tree
     */
    exitBeforeprivilegeselect?: (ctx: BeforeprivilegeselectContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.grantrolestmt`.
     * @param ctx the parse tree
     */
    enterGrantrolestmt?: (ctx: GrantrolestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.grantrolestmt`.
     * @param ctx the parse tree
     */
    exitGrantrolestmt?: (ctx: GrantrolestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.revokerolestmt`.
     * @param ctx the parse tree
     */
    enterRevokerolestmt?: (ctx: RevokerolestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.revokerolestmt`.
     * @param ctx the parse tree
     */
    exitRevokerolestmt?: (ctx: RevokerolestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterdefaultprivilegesstmt`.
     * @param ctx the parse tree
     */
    enterAlterdefaultprivilegesstmt?: (ctx: AlterdefaultprivilegesstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterdefaultprivilegesstmt`.
     * @param ctx the parse tree
     */
    exitAlterdefaultprivilegesstmt?: (ctx: AlterdefaultprivilegesstmtContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.indexstmt`.
     * @param ctx the parse tree
     */
    enterIndexstmt?: (ctx: IndexstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.indexstmt`.
     * @param ctx the parse tree
     */
    exitIndexstmt?: (ctx: IndexstmtContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.createfunctionstmt`.
     * @param ctx the parse tree
     */
    enterCreatefunctionstmt?: (ctx: CreatefunctionstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createfunctionstmt`.
     * @param ctx the parse tree
     */
    exitCreatefunctionstmt?: (ctx: CreatefunctionstmtContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.routine_with_argtypes_list`.
     * @param ctx the parse tree
     */
    enterRoutine_with_argtypes_list?: (ctx: Routine_with_argtypes_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.routine_with_argtypes_list`.
     * @param ctx the parse tree
     */
    exitRoutine_with_argtypes_list?: (ctx: Routine_with_argtypes_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.routine_with_argtypes`.
     * @param ctx the parse tree
     */
    enterRoutine_with_argtypes?: (ctx: Routine_with_argtypesContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.routine_with_argtypes`.
     * @param ctx the parse tree
     */
    exitRoutine_with_argtypes?: (ctx: Routine_with_argtypesContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.procedure_with_argtypes_list`.
     * @param ctx the parse tree
     */
    enterProcedure_with_argtypes_list?: (ctx: Procedure_with_argtypes_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.procedure_with_argtypes_list`.
     * @param ctx the parse tree
     */
    exitProcedure_with_argtypes_list?: (ctx: Procedure_with_argtypes_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.procedure_with_argtypes`.
     * @param ctx the parse tree
     */
    enterProcedure_with_argtypes?: (ctx: Procedure_with_argtypesContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.procedure_with_argtypes`.
     * @param ctx the parse tree
     */
    exitProcedure_with_argtypes?: (ctx: Procedure_with_argtypesContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.function_with_argtypes_list`.
     * @param ctx the parse tree
     */
    enterFunction_with_argtypes_list?: (ctx: Function_with_argtypes_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.function_with_argtypes_list`.
     * @param ctx the parse tree
     */
    exitFunction_with_argtypes_list?: (ctx: Function_with_argtypes_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.function_with_argtypes`.
     * @param ctx the parse tree
     */
    enterFunction_with_argtypes?: (ctx: Function_with_argtypesContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.function_with_argtypes`.
     * @param ctx the parse tree
     */
    exitFunction_with_argtypes?: (ctx: Function_with_argtypesContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.aggr_args`.
     * @param ctx the parse tree
     */
    enterAggr_args?: (ctx: Aggr_argsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.aggr_args`.
     * @param ctx the parse tree
     */
    exitAggr_args?: (ctx: Aggr_argsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.aggregate_with_argtypes`.
     * @param ctx the parse tree
     */
    enterAggregate_with_argtypes?: (ctx: Aggregate_with_argtypesContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.aggregate_with_argtypes`.
     * @param ctx the parse tree
     */
    exitAggregate_with_argtypes?: (ctx: Aggregate_with_argtypesContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.createfunc_opt_item`.
     * @param ctx the parse tree
     */
    enterCreatefunc_opt_item?: (ctx: Createfunc_opt_itemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createfunc_opt_item`.
     * @param ctx the parse tree
     */
    exitCreatefunc_opt_item?: (ctx: Createfunc_opt_itemContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.alterfunctionstmt`.
     * @param ctx the parse tree
     */
    enterAlterfunctionstmt?: (ctx: AlterfunctionstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterfunctionstmt`.
     * @param ctx the parse tree
     */
    exitAlterfunctionstmt?: (ctx: AlterfunctionstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.removefuncstmt`.
     * @param ctx the parse tree
     */
    enterRemovefuncstmt?: (ctx: RemovefuncstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.removefuncstmt`.
     * @param ctx the parse tree
     */
    exitRemovefuncstmt?: (ctx: RemovefuncstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.removeaggrstmt`.
     * @param ctx the parse tree
     */
    enterRemoveaggrstmt?: (ctx: RemoveaggrstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.removeaggrstmt`.
     * @param ctx the parse tree
     */
    exitRemoveaggrstmt?: (ctx: RemoveaggrstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.removeoperstmt`.
     * @param ctx the parse tree
     */
    enterRemoveoperstmt?: (ctx: RemoveoperstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.removeoperstmt`.
     * @param ctx the parse tree
     */
    exitRemoveoperstmt?: (ctx: RemoveoperstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.oper_argtypes`.
     * @param ctx the parse tree
     */
    enterOper_argtypes?: (ctx: Oper_argtypesContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.oper_argtypes`.
     * @param ctx the parse tree
     */
    exitOper_argtypes?: (ctx: Oper_argtypesContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.operator_with_argtypes`.
     * @param ctx the parse tree
     */
    enterOperator_with_argtypes?: (ctx: Operator_with_argtypesContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.operator_with_argtypes`.
     * @param ctx the parse tree
     */
    exitOperator_with_argtypes?: (ctx: Operator_with_argtypesContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.dostmt`.
     * @param ctx the parse tree
     */
    enterDostmt?: (ctx: DostmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.dostmt`.
     * @param ctx the parse tree
     */
    exitDostmt?: (ctx: DostmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createcaststmt`.
     * @param ctx the parse tree
     */
    enterCreatecaststmt?: (ctx: CreatecaststmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createcaststmt`.
     * @param ctx the parse tree
     */
    exitCreatecaststmt?: (ctx: CreatecaststmtContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.createtransformstmt`.
     * @param ctx the parse tree
     */
    enterCreatetransformstmt?: (ctx: CreatetransformstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createtransformstmt`.
     * @param ctx the parse tree
     */
    exitCreatetransformstmt?: (ctx: CreatetransformstmtContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.reindexstmt`.
     * @param ctx the parse tree
     */
    enterReindexstmt?: (ctx: ReindexstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.reindexstmt`.
     * @param ctx the parse tree
     */
    exitReindexstmt?: (ctx: ReindexstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.altertblspcstmt`.
     * @param ctx the parse tree
     */
    enterAltertblspcstmt?: (ctx: AltertblspcstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.altertblspcstmt`.
     * @param ctx the parse tree
     */
    exitAltertblspcstmt?: (ctx: AltertblspcstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.renamestmt`.
     * @param ctx the parse tree
     */
    enterRenamestmt?: (ctx: RenamestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.renamestmt`.
     * @param ctx the parse tree
     */
    exitRenamestmt?: (ctx: RenamestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterobjectdependsstmt`.
     * @param ctx the parse tree
     */
    enterAlterobjectdependsstmt?: (ctx: AlterobjectdependsstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterobjectdependsstmt`.
     * @param ctx the parse tree
     */
    exitAlterobjectdependsstmt?: (ctx: AlterobjectdependsstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterobjectschemastmt`.
     * @param ctx the parse tree
     */
    enterAlterobjectschemastmt?: (ctx: AlterobjectschemastmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterobjectschemastmt`.
     * @param ctx the parse tree
     */
    exitAlterobjectschemastmt?: (ctx: AlterobjectschemastmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alteroperatorstmt`.
     * @param ctx the parse tree
     */
    enterAlteroperatorstmt?: (ctx: AlteroperatorstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alteroperatorstmt`.
     * @param ctx the parse tree
     */
    exitAlteroperatorstmt?: (ctx: AlteroperatorstmtContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.altertypestmt`.
     * @param ctx the parse tree
     */
    enterAltertypestmt?: (ctx: AltertypestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.altertypestmt`.
     * @param ctx the parse tree
     */
    exitAltertypestmt?: (ctx: AltertypestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterownerstmt`.
     * @param ctx the parse tree
     */
    enterAlterownerstmt?: (ctx: AlterownerstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterownerstmt`.
     * @param ctx the parse tree
     */
    exitAlterownerstmt?: (ctx: AlterownerstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createpublicationstmt`.
     * @param ctx the parse tree
     */
    enterCreatepublicationstmt?: (ctx: CreatepublicationstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createpublicationstmt`.
     * @param ctx the parse tree
     */
    exitCreatepublicationstmt?: (ctx: CreatepublicationstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterpublicationstmt`.
     * @param ctx the parse tree
     */
    enterAlterpublicationstmt?: (ctx: AlterpublicationstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterpublicationstmt`.
     * @param ctx the parse tree
     */
    exitAlterpublicationstmt?: (ctx: AlterpublicationstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createsubscriptionstmt`.
     * @param ctx the parse tree
     */
    enterCreatesubscriptionstmt?: (ctx: CreatesubscriptionstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createsubscriptionstmt`.
     * @param ctx the parse tree
     */
    exitCreatesubscriptionstmt?: (ctx: CreatesubscriptionstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.altersubscriptionstmt`.
     * @param ctx the parse tree
     */
    enterAltersubscriptionstmt?: (ctx: AltersubscriptionstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.altersubscriptionstmt`.
     * @param ctx the parse tree
     */
    exitAltersubscriptionstmt?: (ctx: AltersubscriptionstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.rulestmt`.
     * @param ctx the parse tree
     */
    enterRulestmt?: (ctx: RulestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.rulestmt`.
     * @param ctx the parse tree
     */
    exitRulestmt?: (ctx: RulestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.ruleactionstmt`.
     * @param ctx the parse tree
     */
    enterRuleactionstmt?: (ctx: RuleactionstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.ruleactionstmt`.
     * @param ctx the parse tree
     */
    exitRuleactionstmt?: (ctx: RuleactionstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.notifystmt`.
     * @param ctx the parse tree
     */
    enterNotifystmt?: (ctx: NotifystmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.notifystmt`.
     * @param ctx the parse tree
     */
    exitNotifystmt?: (ctx: NotifystmtContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.listenstmt`.
     * @param ctx the parse tree
     */
    enterListenstmt?: (ctx: ListenstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.listenstmt`.
     * @param ctx the parse tree
     */
    exitListenstmt?: (ctx: ListenstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.unlistenstmt`.
     * @param ctx the parse tree
     */
    enterUnlistenstmt?: (ctx: UnlistenstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.unlistenstmt`.
     * @param ctx the parse tree
     */
    exitUnlistenstmt?: (ctx: UnlistenstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.transactionstmt`.
     * @param ctx the parse tree
     */
    enterTransactionstmt?: (ctx: TransactionstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.transactionstmt`.
     * @param ctx the parse tree
     */
    exitTransactionstmt?: (ctx: TransactionstmtContext) => void;
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
     * labeled alternative in `PostgreSqlParser.viewstmt`.
     * @param ctx the parse tree
     */
    enterCreateView?: (ctx: CreateViewContext) => void;
    /**
     * Exit a parse tree produced by the `createView`
     * labeled alternative in `PostgreSqlParser.viewstmt`.
     * @param ctx the parse tree
     */
    exitCreateView?: (ctx: CreateViewContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.loadstmt`.
     * @param ctx the parse tree
     */
    enterLoadstmt?: (ctx: LoadstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.loadstmt`.
     * @param ctx the parse tree
     */
    exitLoadstmt?: (ctx: LoadstmtContext) => void;
    /**
     * Enter a parse tree produced by the `createDatabase`
     * labeled alternative in `PostgreSqlParser.createdbstmt`.
     * @param ctx the parse tree
     */
    enterCreateDatabase?: (ctx: CreateDatabaseContext) => void;
    /**
     * Exit a parse tree produced by the `createDatabase`
     * labeled alternative in `PostgreSqlParser.createdbstmt`.
     * @param ctx the parse tree
     */
    exitCreateDatabase?: (ctx: CreateDatabaseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createdb_opt_item`.
     * @param ctx the parse tree
     */
    enterCreatedb_opt_item?: (ctx: Createdb_opt_itemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createdb_opt_item`.
     * @param ctx the parse tree
     */
    exitCreatedb_opt_item?: (ctx: Createdb_opt_itemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterdatabasestmt`.
     * @param ctx the parse tree
     */
    enterAlterdatabasestmt?: (ctx: AlterdatabasestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterdatabasestmt`.
     * @param ctx the parse tree
     */
    exitAlterdatabasestmt?: (ctx: AlterdatabasestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterdatabasesetstmt`.
     * @param ctx the parse tree
     */
    enterAlterdatabasesetstmt?: (ctx: AlterdatabasesetstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterdatabasesetstmt`.
     * @param ctx the parse tree
     */
    exitAlterdatabasesetstmt?: (ctx: AlterdatabasesetstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.altercollationstmt`.
     * @param ctx the parse tree
     */
    enterAltercollationstmt?: (ctx: AltercollationstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.altercollationstmt`.
     * @param ctx the parse tree
     */
    exitAltercollationstmt?: (ctx: AltercollationstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.altersystemstmt`.
     * @param ctx the parse tree
     */
    enterAltersystemstmt?: (ctx: AltersystemstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.altersystemstmt`.
     * @param ctx the parse tree
     */
    exitAltersystemstmt?: (ctx: AltersystemstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createdomainstmt`.
     * @param ctx the parse tree
     */
    enterCreatedomainstmt?: (ctx: CreatedomainstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createdomainstmt`.
     * @param ctx the parse tree
     */
    exitCreatedomainstmt?: (ctx: CreatedomainstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.alterdomainstmt`.
     * @param ctx the parse tree
     */
    enterAlterdomainstmt?: (ctx: AlterdomainstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.alterdomainstmt`.
     * @param ctx the parse tree
     */
    exitAlterdomainstmt?: (ctx: AlterdomainstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.altertsdictionarystmt`.
     * @param ctx the parse tree
     */
    enterAltertsdictionarystmt?: (ctx: AltertsdictionarystmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.altertsdictionarystmt`.
     * @param ctx the parse tree
     */
    exitAltertsdictionarystmt?: (ctx: AltertsdictionarystmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.altertsconfigurationstmt`.
     * @param ctx the parse tree
     */
    enterAltertsconfigurationstmt?: (ctx: AltertsconfigurationstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.altertsconfigurationstmt`.
     * @param ctx the parse tree
     */
    exitAltertsconfigurationstmt?: (ctx: AltertsconfigurationstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.createconversionstmt`.
     * @param ctx the parse tree
     */
    enterCreateconversionstmt?: (ctx: CreateconversionstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.createconversionstmt`.
     * @param ctx the parse tree
     */
    exitCreateconversionstmt?: (ctx: CreateconversionstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.clusterstmt`.
     * @param ctx the parse tree
     */
    enterClusterstmt?: (ctx: ClusterstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.clusterstmt`.
     * @param ctx the parse tree
     */
    exitClusterstmt?: (ctx: ClusterstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.vacuumstmt`.
     * @param ctx the parse tree
     */
    enterVacuumstmt?: (ctx: VacuumstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.vacuumstmt`.
     * @param ctx the parse tree
     */
    exitVacuumstmt?: (ctx: VacuumstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.analyzestmt`.
     * @param ctx the parse tree
     */
    enterAnalyzestmt?: (ctx: AnalyzestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.analyzestmt`.
     * @param ctx the parse tree
     */
    exitAnalyzestmt?: (ctx: AnalyzestmtContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.explainstmt`.
     * @param ctx the parse tree
     */
    enterExplainstmt?: (ctx: ExplainstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.explainstmt`.
     * @param ctx the parse tree
     */
    exitExplainstmt?: (ctx: ExplainstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.explainablestmt`.
     * @param ctx the parse tree
     */
    enterExplainablestmt?: (ctx: ExplainablestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.explainablestmt`.
     * @param ctx the parse tree
     */
    exitExplainablestmt?: (ctx: ExplainablestmtContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.preparestmt`.
     * @param ctx the parse tree
     */
    enterPreparestmt?: (ctx: PreparestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.preparestmt`.
     * @param ctx the parse tree
     */
    exitPreparestmt?: (ctx: PreparestmtContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.preparablestmt`.
     * @param ctx the parse tree
     */
    enterPreparablestmt?: (ctx: PreparablestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.preparablestmt`.
     * @param ctx the parse tree
     */
    exitPreparablestmt?: (ctx: PreparablestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.executestmt`.
     * @param ctx the parse tree
     */
    enterExecutestmt?: (ctx: ExecutestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.executestmt`.
     * @param ctx the parse tree
     */
    exitExecutestmt?: (ctx: ExecutestmtContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.deallocatestmt`.
     * @param ctx the parse tree
     */
    enterDeallocatestmt?: (ctx: DeallocatestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.deallocatestmt`.
     * @param ctx the parse tree
     */
    exitDeallocatestmt?: (ctx: DeallocatestmtContext) => void;
    /**
     * Enter a parse tree produced by the `insertStatement`
     * labeled alternative in `PostgreSqlParser.insertstmt`.
     * @param ctx the parse tree
     */
    enterInsertStatement?: (ctx: InsertStatementContext) => void;
    /**
     * Exit a parse tree produced by the `insertStatement`
     * labeled alternative in `PostgreSqlParser.insertstmt`.
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
     * Enter a parse tree produced by `PostgreSqlParser.deletestmt`.
     * @param ctx the parse tree
     */
    enterDeletestmt?: (ctx: DeletestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.deletestmt`.
     * @param ctx the parse tree
     */
    exitDeletestmt?: (ctx: DeletestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.lockstmt`.
     * @param ctx the parse tree
     */
    enterLockstmt?: (ctx: LockstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.lockstmt`.
     * @param ctx the parse tree
     */
    exitLockstmt?: (ctx: LockstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.updatestmt`.
     * @param ctx the parse tree
     */
    enterUpdatestmt?: (ctx: UpdatestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.updatestmt`.
     * @param ctx the parse tree
     */
    exitUpdatestmt?: (ctx: UpdatestmtContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.declarecursorstmt`.
     * @param ctx the parse tree
     */
    enterDeclarecursorstmt?: (ctx: DeclarecursorstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.declarecursorstmt`.
     * @param ctx the parse tree
     */
    exitDeclarecursorstmt?: (ctx: DeclarecursorstmtContext) => void;
    /**
     * Enter a parse tree produced by the `selectStatement`
     * labeled alternative in `PostgreSqlParser.selectstmt`.
     * @param ctx the parse tree
     */
    enterSelectStatement?: (ctx: SelectStatementContext) => void;
    /**
     * Exit a parse tree produced by the `selectStatement`
     * labeled alternative in `PostgreSqlParser.selectstmt`.
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
     * Enter a parse tree produced by `PostgreSqlParser.search_cluase`.
     * @param ctx the parse tree
     */
    enterSearch_cluase?: (ctx: Search_cluaseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.search_cluase`.
     * @param ctx the parse tree
     */
    exitSearch_cluase?: (ctx: Search_cluaseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.cycle_cluase`.
     * @param ctx the parse tree
     */
    enterCycle_cluase?: (ctx: Cycle_cluaseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.cycle_cluase`.
     * @param ctx the parse tree
     */
    exitCycle_cluase?: (ctx: Cycle_cluaseContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.opttempTableName`.
     * @param ctx the parse tree
     */
    enterOpttempTableName?: (ctx: OpttempTableNameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.opttempTableName`.
     * @param ctx the parse tree
     */
    exitOpttempTableName?: (ctx: OpttempTableNameContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.sortby`.
     * @param ctx the parse tree
     */
    enterSortby?: (ctx: SortbyContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.sortby`.
     * @param ctx the parse tree
     */
    exitSortby?: (ctx: SortbyContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.tablesample_clause`.
     * @param ctx the parse tree
     */
    enterTablesample_clause?: (ctx: Tablesample_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.tablesample_clause`.
     * @param ctx the parse tree
     */
    exitTablesample_clause?: (ctx: Tablesample_clauseContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.rowsfrom_item`.
     * @param ctx the parse tree
     */
    enterRowsfrom_item?: (ctx: Rowsfrom_itemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.rowsfrom_item`.
     * @param ctx the parse tree
     */
    exitRowsfrom_item?: (ctx: Rowsfrom_itemContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.tablefuncelementlist`.
     * @param ctx the parse tree
     */
    enterTablefuncelementlist?: (ctx: TablefuncelementlistContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.tablefuncelementlist`.
     * @param ctx the parse tree
     */
    exitTablefuncelementlist?: (ctx: TablefuncelementlistContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.tablefuncelement`.
     * @param ctx the parse tree
     */
    enterTablefuncelement?: (ctx: TablefuncelementContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.tablefuncelement`.
     * @param ctx the parse tree
     */
    exitTablefuncelement?: (ctx: TablefuncelementContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.xmltable`.
     * @param ctx the parse tree
     */
    enterXmltable?: (ctx: XmltableContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.xmltable`.
     * @param ctx the parse tree
     */
    exitXmltable?: (ctx: XmltableContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.xmltable_column_el`.
     * @param ctx the parse tree
     */
    enterXmltable_column_el?: (ctx: Xmltable_column_elContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.xmltable_column_el`.
     * @param ctx the parse tree
     */
    exitXmltable_column_el?: (ctx: Xmltable_column_elContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.simpletypename`.
     * @param ctx the parse tree
     */
    enterSimpletypename?: (ctx: SimpletypenameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.simpletypename`.
     * @param ctx the parse tree
     */
    exitSimpletypename?: (ctx: SimpletypenameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.consttypename`.
     * @param ctx the parse tree
     */
    enterConsttypename?: (ctx: ConsttypenameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.consttypename`.
     * @param ctx the parse tree
     */
    exitConsttypename?: (ctx: ConsttypenameContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.constdatetime`.
     * @param ctx the parse tree
     */
    enterConstdatetime?: (ctx: ConstdatetimeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.constdatetime`.
     * @param ctx the parse tree
     */
    exitConstdatetime?: (ctx: ConstdatetimeContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.xmlexists_argument`.
     * @param ctx the parse tree
     */
    enterXmlexists_argument?: (ctx: Xmlexists_argumentContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.xmlexists_argument`.
     * @param ctx the parse tree
     */
    exitXmlexists_argument?: (ctx: Xmlexists_argumentContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.column_expr_noparen`.
     * @param ctx the parse tree
     */
    enterColumn_expr_noparen?: (ctx: Column_expr_noparenContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.column_expr_noparen`.
     * @param ctx the parse tree
     */
    exitColumn_expr_noparen?: (ctx: Column_expr_noparenContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.sconst`.
     * @param ctx the parse tree
     */
    enterSconst?: (ctx: SconstContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.sconst`.
     * @param ctx the parse tree
     */
    exitSconst?: (ctx: SconstContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.signediconst`.
     * @param ctx the parse tree
     */
    enterSignediconst?: (ctx: SignediconstContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.signediconst`.
     * @param ctx the parse tree
     */
    exitSignediconst?: (ctx: SignediconstContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.rolespec`.
     * @param ctx the parse tree
     */
    enterRolespec?: (ctx: RolespecContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.rolespec`.
     * @param ctx the parse tree
     */
    exitRolespec?: (ctx: RolespecContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.colid`.
     * @param ctx the parse tree
     */
    enterColid?: (ctx: ColidContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.colid`.
     * @param ctx the parse tree
     */
    exitColid?: (ctx: ColidContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.nonreservedword`.
     * @param ctx the parse tree
     */
    enterNonreservedword?: (ctx: NonreservedwordContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.nonreservedword`.
     * @param ctx the parse tree
     */
    exitNonreservedword?: (ctx: NonreservedwordContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSqlParser.collabel`.
     * @param ctx the parse tree
     */
    enterCollabel?: (ctx: CollabelContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.collabel`.
     * @param ctx the parse tree
     */
    exitCollabel?: (ctx: CollabelContext) => void;
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
     * Enter a parse tree produced by `PostgreSqlParser.mergestmt`.
     * @param ctx the parse tree
     */
    enterMergestmt?: (ctx: MergestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSqlParser.mergestmt`.
     * @param ctx the parse tree
     */
    exitMergestmt?: (ctx: MergestmtContext) => void;
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

