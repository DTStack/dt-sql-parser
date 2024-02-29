// Generated from dt-sql-parser/src/grammar/pgsql/PostgreSQLParser.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { ProgramContext } from "./PostgreSQLParser.js";
import { PlsqlrootContext } from "./PostgreSQLParser.js";
import { SingleStmtContext } from "./PostgreSQLParser.js";
import { StmtContext } from "./PostgreSQLParser.js";
import { PlsqlconsolecommandContext } from "./PostgreSQLParser.js";
import { CallstmtContext } from "./PostgreSQLParser.js";
import { CreaterolestmtContext } from "./PostgreSQLParser.js";
import { Opt_withContext } from "./PostgreSQLParser.js";
import { OptrolelistContext } from "./PostgreSQLParser.js";
import { AlteroptrolelistContext } from "./PostgreSQLParser.js";
import { AlteroptroleelemContext } from "./PostgreSQLParser.js";
import { CreateoptroleelemContext } from "./PostgreSQLParser.js";
import { CreateuserstmtContext } from "./PostgreSQLParser.js";
import { AlterrolestmtContext } from "./PostgreSQLParser.js";
import { Opt_in_databaseContext } from "./PostgreSQLParser.js";
import { AlterrolesetstmtContext } from "./PostgreSQLParser.js";
import { AlterroutinestmtContext } from "./PostgreSQLParser.js";
import { Alter_routine_cluaseContext } from "./PostgreSQLParser.js";
import { Routine_action_listContext } from "./PostgreSQLParser.js";
import { Routine_actionContext } from "./PostgreSQLParser.js";
import { CreategroupstmtContext } from "./PostgreSQLParser.js";
import { AltergroupstmtContext } from "./PostgreSQLParser.js";
import { Add_dropContext } from "./PostgreSQLParser.js";
import { CreateschemastmtContext } from "./PostgreSQLParser.js";
import { SchemaNameCreateContext } from "./PostgreSQLParser.js";
import { OptschemaeltlistContext } from "./PostgreSQLParser.js";
import { Schema_stmtContext } from "./PostgreSQLParser.js";
import { VariablesetstmtContext } from "./PostgreSQLParser.js";
import { Set_restContext } from "./PostgreSQLParser.js";
import { Generic_setContext } from "./PostgreSQLParser.js";
import { Set_rest_moreContext } from "./PostgreSQLParser.js";
import { Var_nameContext } from "./PostgreSQLParser.js";
import { Var_listContext } from "./PostgreSQLParser.js";
import { Var_valueContext } from "./PostgreSQLParser.js";
import { Iso_levelContext } from "./PostgreSQLParser.js";
import { Opt_boolean_or_string_columnContext } from "./PostgreSQLParser.js";
import { Opt_boolean_or_stringContext } from "./PostgreSQLParser.js";
import { Zone_valueContext } from "./PostgreSQLParser.js";
import { Opt_encodingContext } from "./PostgreSQLParser.js";
import { Nonreservedword_or_sconst_columnContext } from "./PostgreSQLParser.js";
import { Nonreservedword_or_sconstContext } from "./PostgreSQLParser.js";
import { VariableresetstmtContext } from "./PostgreSQLParser.js";
import { Reset_restContext } from "./PostgreSQLParser.js";
import { Generic_resetContext } from "./PostgreSQLParser.js";
import { SetresetclauseContext } from "./PostgreSQLParser.js";
import { FunctionsetresetclauseContext } from "./PostgreSQLParser.js";
import { VariableshowstmtContext } from "./PostgreSQLParser.js";
import { ConstraintssetstmtContext } from "./PostgreSQLParser.js";
import { Constraints_set_listContext } from "./PostgreSQLParser.js";
import { Constraints_set_modeContext } from "./PostgreSQLParser.js";
import { CheckpointstmtContext } from "./PostgreSQLParser.js";
import { DiscardstmtContext } from "./PostgreSQLParser.js";
import { AltertablestmtContext } from "./PostgreSQLParser.js";
import { Alter_table_cmdsContext } from "./PostgreSQLParser.js";
import { Partition_bound_specContext } from "./PostgreSQLParser.js";
import { Partition_bound_cluaseContext } from "./PostgreSQLParser.js";
import { Partition_bound_chooseContext } from "./PostgreSQLParser.js";
import { Partition_with_cluaseContext } from "./PostgreSQLParser.js";
import { Partition_cmdContext } from "./PostgreSQLParser.js";
import { Index_partition_cmdContext } from "./PostgreSQLParser.js";
import { Alter_table_cmdContext } from "./PostgreSQLParser.js";
import { Alter_column_defaultContext } from "./PostgreSQLParser.js";
import { Opt_drop_behaviorContext } from "./PostgreSQLParser.js";
import { Opt_collate_clauseContext } from "./PostgreSQLParser.js";
import { Alter_usingContext } from "./PostgreSQLParser.js";
import { Replica_identityContext } from "./PostgreSQLParser.js";
import { ReloptionsContext } from "./PostgreSQLParser.js";
import { Opt_reloptionsContext } from "./PostgreSQLParser.js";
import { Reloption_listContext } from "./PostgreSQLParser.js";
import { Reloption_elemContext } from "./PostgreSQLParser.js";
import { Alter_identity_column_option_listContext } from "./PostgreSQLParser.js";
import { Alter_identity_column_optionContext } from "./PostgreSQLParser.js";
import { PartitionboundspecContext } from "./PostgreSQLParser.js";
import { Hash_partbound_elemContext } from "./PostgreSQLParser.js";
import { Hash_partboundContext } from "./PostgreSQLParser.js";
import { AltercompositetypestmtContext } from "./PostgreSQLParser.js";
import { Alter_type_cmdsContext } from "./PostgreSQLParser.js";
import { Alter_type_cmdContext } from "./PostgreSQLParser.js";
import { CloseportalstmtContext } from "./PostgreSQLParser.js";
import { CopystmtContext } from "./PostgreSQLParser.js";
import { Copy_fromContext } from "./PostgreSQLParser.js";
import { Opt_programContext } from "./PostgreSQLParser.js";
import { Copy_file_nameContext } from "./PostgreSQLParser.js";
import { Copy_optionsContext } from "./PostgreSQLParser.js";
import { Copy_opt_listContext } from "./PostgreSQLParser.js";
import { Copy_opt_itemContext } from "./PostgreSQLParser.js";
import { Opt_binaryContext } from "./PostgreSQLParser.js";
import { Copy_delimiterContext } from "./PostgreSQLParser.js";
import { Opt_usingContext } from "./PostgreSQLParser.js";
import { Copy_generic_opt_listContext } from "./PostgreSQLParser.js";
import { Copy_generic_opt_elemContext } from "./PostgreSQLParser.js";
import { Copy_generic_opt_argContext } from "./PostgreSQLParser.js";
import { Copy_generic_opt_arg_listContext } from "./PostgreSQLParser.js";
import { Copy_generic_opt_arg_list_itemContext } from "./PostgreSQLParser.js";
import { ColumnCreateTableContext } from "./PostgreSQLParser.js";
import { OpttempContext } from "./PostgreSQLParser.js";
import { Table_column_listContext } from "./PostgreSQLParser.js";
import { OpttableelementlistContext } from "./PostgreSQLParser.js";
import { OpttypedtableelementlistContext } from "./PostgreSQLParser.js";
import { TableelementlistContext } from "./PostgreSQLParser.js";
import { TypedtableelementlistContext } from "./PostgreSQLParser.js";
import { TableelementContext } from "./PostgreSQLParser.js";
import { TypedtableelementContext } from "./PostgreSQLParser.js";
import { Column_defContext } from "./PostgreSQLParser.js";
import { CompressionCluaseContext } from "./PostgreSQLParser.js";
import { StorageCluaseContext } from "./PostgreSQLParser.js";
import { ColumnOptionsContext } from "./PostgreSQLParser.js";
import { ColquallistContext } from "./PostgreSQLParser.js";
import { ColconstraintContext } from "./PostgreSQLParser.js";
import { ColconstraintelemContext } from "./PostgreSQLParser.js";
import { Nulls_distinctContext } from "./PostgreSQLParser.js";
import { Generated_whenContext } from "./PostgreSQLParser.js";
import { Deferrable_triggerContext } from "./PostgreSQLParser.js";
import { Initially_triggerContext } from "./PostgreSQLParser.js";
import { TablelikeclauseContext } from "./PostgreSQLParser.js";
import { TablelikeoptionlistContext } from "./PostgreSQLParser.js";
import { TablelikeoptionContext } from "./PostgreSQLParser.js";
import { TableconstraintContext } from "./PostgreSQLParser.js";
import { ConstraintelemContext } from "./PostgreSQLParser.js";
import { Opt_no_inheritContext } from "./PostgreSQLParser.js";
import { Opt_column_listContext } from "./PostgreSQLParser.js";
import { Opt_column_list_createContext } from "./PostgreSQLParser.js";
import { Column_listContext } from "./PostgreSQLParser.js";
import { Column_list_createContext } from "./PostgreSQLParser.js";
import { Opt_c_includeContext } from "./PostgreSQLParser.js";
import { Key_matchContext } from "./PostgreSQLParser.js";
import { ExclusionconstraintlistContext } from "./PostgreSQLParser.js";
import { ExclusionconstraintelemContext } from "./PostgreSQLParser.js";
import { ExclusionwhereclauseContext } from "./PostgreSQLParser.js";
import { Key_actionsContext } from "./PostgreSQLParser.js";
import { Key_updateContext } from "./PostgreSQLParser.js";
import { Key_deleteContext } from "./PostgreSQLParser.js";
import { Key_actionContext } from "./PostgreSQLParser.js";
import { OptinheritContext } from "./PostgreSQLParser.js";
import { OptpartitionspecContext } from "./PostgreSQLParser.js";
import { PartitionspecContext } from "./PostgreSQLParser.js";
import { Part_paramsContext } from "./PostgreSQLParser.js";
import { Part_elemContext } from "./PostgreSQLParser.js";
import { Table_access_method_clauseContext } from "./PostgreSQLParser.js";
import { OptwithContext } from "./PostgreSQLParser.js";
import { OncommitoptionContext } from "./PostgreSQLParser.js";
import { OpttablespaceContext } from "./PostgreSQLParser.js";
import { Index_paramenters_createContext } from "./PostgreSQLParser.js";
import { OptconstablespaceContext } from "./PostgreSQLParser.js";
import { ExistingindexContext } from "./PostgreSQLParser.js";
import { CreatestatsstmtContext } from "./PostgreSQLParser.js";
import { AlterstatsstmtContext } from "./PostgreSQLParser.js";
import { QueryCreateTableContext } from "./PostgreSQLParser.js";
import { Create_as_targetContext } from "./PostgreSQLParser.js";
import { Opt_with_dataContext } from "./PostgreSQLParser.js";
import { CreateMaterializedViewContext } from "./PostgreSQLParser.js";
import { Create_mv_targetContext } from "./PostgreSQLParser.js";
import { OptnologContext } from "./PostgreSQLParser.js";
import { RefreshmatviewstmtContext } from "./PostgreSQLParser.js";
import { CreateseqstmtContext } from "./PostgreSQLParser.js";
import { AlterseqstmtContext } from "./PostgreSQLParser.js";
import { OptseqoptlistContext } from "./PostgreSQLParser.js";
import { OptparenthesizedseqoptlistContext } from "./PostgreSQLParser.js";
import { SeqoptlistContext } from "./PostgreSQLParser.js";
import { SeqoptelemContext } from "./PostgreSQLParser.js";
import { Opt_byContext } from "./PostgreSQLParser.js";
import { NumericonlyContext } from "./PostgreSQLParser.js";
import { Numericonly_listContext } from "./PostgreSQLParser.js";
import { CreateplangstmtContext } from "./PostgreSQLParser.js";
import { Opt_trustedContext } from "./PostgreSQLParser.js";
import { Handler_nameContext } from "./PostgreSQLParser.js";
import { Opt_inline_handlerContext } from "./PostgreSQLParser.js";
import { Validator_clauseContext } from "./PostgreSQLParser.js";
import { Opt_validatorContext } from "./PostgreSQLParser.js";
import { Opt_proceduralContext } from "./PostgreSQLParser.js";
import { CreatetablespacestmtContext } from "./PostgreSQLParser.js";
import { OpttablespaceownerContext } from "./PostgreSQLParser.js";
import { CreateextensionstmtContext } from "./PostgreSQLParser.js";
import { Create_extension_opt_listContext } from "./PostgreSQLParser.js";
import { Create_extension_opt_itemContext } from "./PostgreSQLParser.js";
import { AlterextensionstmtContext } from "./PostgreSQLParser.js";
import { Alter_extension_opt_listContext } from "./PostgreSQLParser.js";
import { Alter_extension_opt_itemContext } from "./PostgreSQLParser.js";
import { AlterextensioncontentsstmtContext } from "./PostgreSQLParser.js";
import { CreatefdwstmtContext } from "./PostgreSQLParser.js";
import { Fdw_optionContext } from "./PostgreSQLParser.js";
import { Fdw_optionsContext } from "./PostgreSQLParser.js";
import { Opt_fdw_optionsContext } from "./PostgreSQLParser.js";
import { AlterfdwstmtContext } from "./PostgreSQLParser.js";
import { Create_generic_optionsContext } from "./PostgreSQLParser.js";
import { Generic_option_listContext } from "./PostgreSQLParser.js";
import { Alter_generic_optionsContext } from "./PostgreSQLParser.js";
import { Alter_generic_option_listContext } from "./PostgreSQLParser.js";
import { Alter_generic_option_elemContext } from "./PostgreSQLParser.js";
import { Generic_option_elemContext } from "./PostgreSQLParser.js";
import { Generic_option_nameContext } from "./PostgreSQLParser.js";
import { Generic_option_argContext } from "./PostgreSQLParser.js";
import { CreateforeignserverstmtContext } from "./PostgreSQLParser.js";
import { Opt_typeContext } from "./PostgreSQLParser.js";
import { Foreign_server_versionContext } from "./PostgreSQLParser.js";
import { Opt_foreign_server_versionContext } from "./PostgreSQLParser.js";
import { AlterforeignserverstmtContext } from "./PostgreSQLParser.js";
import { CreateForeignTableContext } from "./PostgreSQLParser.js";
import { CreatePartitionForeignTableContext } from "./PostgreSQLParser.js";
import { ImportforeignschemastmtContext } from "./PostgreSQLParser.js";
import { Import_qualification_typeContext } from "./PostgreSQLParser.js";
import { Import_qualificationContext } from "./PostgreSQLParser.js";
import { CreateusermappingstmtContext } from "./PostgreSQLParser.js";
import { Auth_identContext } from "./PostgreSQLParser.js";
import { AlterusermappingstmtContext } from "./PostgreSQLParser.js";
import { CreatepolicystmtContext } from "./PostgreSQLParser.js";
import { AlterpolicystmtContext } from "./PostgreSQLParser.js";
import { AlterprocedurestmtContext } from "./PostgreSQLParser.js";
import { Procedure_cluaseContext } from "./PostgreSQLParser.js";
import { Procedure_actionContext } from "./PostgreSQLParser.js";
import { RowsecurityoptionalexprContext } from "./PostgreSQLParser.js";
import { RowsecurityoptionalwithcheckContext } from "./PostgreSQLParser.js";
import { RowsecuritydefaulttoroleContext } from "./PostgreSQLParser.js";
import { RowsecurityoptionaltoroleContext } from "./PostgreSQLParser.js";
import { RowsecuritydefaultpermissiveContext } from "./PostgreSQLParser.js";
import { RowsecuritydefaultforcmdContext } from "./PostgreSQLParser.js";
import { Row_security_cmdContext } from "./PostgreSQLParser.js";
import { CreateamstmtContext } from "./PostgreSQLParser.js";
import { Am_typeContext } from "./PostgreSQLParser.js";
import { CreatetrigstmtContext } from "./PostgreSQLParser.js";
import { TriggeractiontimeContext } from "./PostgreSQLParser.js";
import { ForeachrowContext } from "./PostgreSQLParser.js";
import { RoworstatmentContext } from "./PostgreSQLParser.js";
import { TriggereventsContext } from "./PostgreSQLParser.js";
import { TriggeroneeventContext } from "./PostgreSQLParser.js";
import { TriggerreferencingContext } from "./PostgreSQLParser.js";
import { TriggertransitionsContext } from "./PostgreSQLParser.js";
import { TriggertransitionContext } from "./PostgreSQLParser.js";
import { TransitionoldornewContext } from "./PostgreSQLParser.js";
import { TransitionrowortableContext } from "./PostgreSQLParser.js";
import { TransitionrelnameContext } from "./PostgreSQLParser.js";
import { TriggerforspecContext } from "./PostgreSQLParser.js";
import { TriggerforopteachContext } from "./PostgreSQLParser.js";
import { TriggerfortypeContext } from "./PostgreSQLParser.js";
import { TriggerwhenContext } from "./PostgreSQLParser.js";
import { Function_or_procedureContext } from "./PostgreSQLParser.js";
import { TriggerfuncargsContext } from "./PostgreSQLParser.js";
import { TriggerfuncargContext } from "./PostgreSQLParser.js";
import { OptconstrfromtableContext } from "./PostgreSQLParser.js";
import { ConstraintattributespecContext } from "./PostgreSQLParser.js";
import { ConstraintattributeElemContext } from "./PostgreSQLParser.js";
import { CreateeventtrigstmtContext } from "./PostgreSQLParser.js";
import { Event_trigger_when_listContext } from "./PostgreSQLParser.js";
import { Event_trigger_when_itemContext } from "./PostgreSQLParser.js";
import { Event_trigger_value_listContext } from "./PostgreSQLParser.js";
import { AltereventtrigstmtContext } from "./PostgreSQLParser.js";
import { Enable_triggerContext } from "./PostgreSQLParser.js";
import { CreateassertionstmtContext } from "./PostgreSQLParser.js";
import { DefinestmtContext } from "./PostgreSQLParser.js";
import { DefinitionContext } from "./PostgreSQLParser.js";
import { Def_listContext } from "./PostgreSQLParser.js";
import { Def_elemContext } from "./PostgreSQLParser.js";
import { Def_argContext } from "./PostgreSQLParser.js";
import { Old_aggr_definitionContext } from "./PostgreSQLParser.js";
import { Old_aggr_listContext } from "./PostgreSQLParser.js";
import { Old_aggr_elemContext } from "./PostgreSQLParser.js";
import { Opt_enum_val_listContext } from "./PostgreSQLParser.js";
import { Enum_val_listContext } from "./PostgreSQLParser.js";
import { AlterenumstmtContext } from "./PostgreSQLParser.js";
import { Opt_if_not_existsContext } from "./PostgreSQLParser.js";
import { CreateopclassstmtContext } from "./PostgreSQLParser.js";
import { Opclass_item_listContext } from "./PostgreSQLParser.js";
import { Opclass_itemContext } from "./PostgreSQLParser.js";
import { Opt_defaultContext } from "./PostgreSQLParser.js";
import { Opt_opfamilyContext } from "./PostgreSQLParser.js";
import { Opclass_purposeContext } from "./PostgreSQLParser.js";
import { Opt_recheckContext } from "./PostgreSQLParser.js";
import { CreateopfamilystmtContext } from "./PostgreSQLParser.js";
import { AlteropfamilystmtContext } from "./PostgreSQLParser.js";
import { Opclass_drop_listContext } from "./PostgreSQLParser.js";
import { Opclass_dropContext } from "./PostgreSQLParser.js";
import { ReassignownedstmtContext } from "./PostgreSQLParser.js";
import { DropstmtContext } from "./PostgreSQLParser.js";
import { View_nameListContext } from "./PostgreSQLParser.js";
import { Object_type_any_nameContext } from "./PostgreSQLParser.js";
import { Object_type_nameContext } from "./PostgreSQLParser.js";
import { Object_type_name_on_any_nameContext } from "./PostgreSQLParser.js";
import { Any_name_listContext } from "./PostgreSQLParser.js";
import { Table_column_nameContext } from "./PostgreSQLParser.js";
import { Relation_column_nameContext } from "./PostgreSQLParser.js";
import { Relation_nameContext } from "./PostgreSQLParser.js";
import { Any_nameContext } from "./PostgreSQLParser.js";
import { AttrsContext } from "./PostgreSQLParser.js";
import { Type_name_listContext } from "./PostgreSQLParser.js";
import { TruncatestmtContext } from "./PostgreSQLParser.js";
import { Opt_restart_seqsContext } from "./PostgreSQLParser.js";
import { CommentstmtContext } from "./PostgreSQLParser.js";
import { Comment_textContext } from "./PostgreSQLParser.js";
import { SeclabelstmtContext } from "./PostgreSQLParser.js";
import { Opt_providerContext } from "./PostgreSQLParser.js";
import { Security_labelContext } from "./PostgreSQLParser.js";
import { FetchstmtContext } from "./PostgreSQLParser.js";
import { Fetch_argsContext } from "./PostgreSQLParser.js";
import { From_inContext } from "./PostgreSQLParser.js";
import { Opt_from_inContext } from "./PostgreSQLParser.js";
import { GrantstmtContext } from "./PostgreSQLParser.js";
import { RevokestmtContext } from "./PostgreSQLParser.js";
import { PrivilegesContext } from "./PostgreSQLParser.js";
import { BeforeprivilegeselectlistContext } from "./PostgreSQLParser.js";
import { BeforeprivilegeselectContext } from "./PostgreSQLParser.js";
import { Privilege_listContext } from "./PostgreSQLParser.js";
import { PrivilegeContext } from "./PostgreSQLParser.js";
import { Privilege_targetContext } from "./PostgreSQLParser.js";
import { Grantee_listContext } from "./PostgreSQLParser.js";
import { GranteeContext } from "./PostgreSQLParser.js";
import { Opt_grant_grant_optionContext } from "./PostgreSQLParser.js";
import { GrantrolestmtContext } from "./PostgreSQLParser.js";
import { RevokerolestmtContext } from "./PostgreSQLParser.js";
import { Opt_grant_admin_optionContext } from "./PostgreSQLParser.js";
import { Opt_granted_byContext } from "./PostgreSQLParser.js";
import { AlterdefaultprivilegesstmtContext } from "./PostgreSQLParser.js";
import { DefacloptionlistContext } from "./PostgreSQLParser.js";
import { DefacloptionContext } from "./PostgreSQLParser.js";
import { DefaclactionContext } from "./PostgreSQLParser.js";
import { Defacl_privilege_targetContext } from "./PostgreSQLParser.js";
import { IndexstmtContext } from "./PostgreSQLParser.js";
import { Opt_uniqueContext } from "./PostgreSQLParser.js";
import { Opt_concurrentlyContext } from "./PostgreSQLParser.js";
import { Opt_index_nameContext } from "./PostgreSQLParser.js";
import { Access_method_clauseContext } from "./PostgreSQLParser.js";
import { Index_paramsContext } from "./PostgreSQLParser.js";
import { Index_elem_optionsContext } from "./PostgreSQLParser.js";
import { Index_elemContext } from "./PostgreSQLParser.js";
import { Opt_includeContext } from "./PostgreSQLParser.js";
import { Index_including_paramsContext } from "./PostgreSQLParser.js";
import { Opt_collateContext } from "./PostgreSQLParser.js";
import { Opt_classContext } from "./PostgreSQLParser.js";
import { Opt_asc_descContext } from "./PostgreSQLParser.js";
import { Opt_nulls_orderContext } from "./PostgreSQLParser.js";
import { CreatefunctionstmtContext } from "./PostgreSQLParser.js";
import { AttrilistContext } from "./PostgreSQLParser.js";
import { Opt_or_replaceContext } from "./PostgreSQLParser.js";
import { Func_argsContext } from "./PostgreSQLParser.js";
import { Func_args_listContext } from "./PostgreSQLParser.js";
import { Routine_with_argtypes_listContext } from "./PostgreSQLParser.js";
import { Routine_with_argtypesContext } from "./PostgreSQLParser.js";
import { Procedure_with_argtypes_listContext } from "./PostgreSQLParser.js";
import { Procedure_with_argtypesContext } from "./PostgreSQLParser.js";
import { Function_with_argtypes_listContext } from "./PostgreSQLParser.js";
import { Function_with_argtypesContext } from "./PostgreSQLParser.js";
import { Func_args_with_defaultsContext } from "./PostgreSQLParser.js";
import { Func_args_with_defaults_listContext } from "./PostgreSQLParser.js";
import { Func_argContext } from "./PostgreSQLParser.js";
import { Arg_classContext } from "./PostgreSQLParser.js";
import { Param_nameContext } from "./PostgreSQLParser.js";
import { Func_returnContext } from "./PostgreSQLParser.js";
import { Func_typeContext } from "./PostgreSQLParser.js";
import { Func_arg_with_defaultContext } from "./PostgreSQLParser.js";
import { Aggr_argContext } from "./PostgreSQLParser.js";
import { Aggr_argsContext } from "./PostgreSQLParser.js";
import { Aggr_args_listContext } from "./PostgreSQLParser.js";
import { Aggregate_with_argtypesContext } from "./PostgreSQLParser.js";
import { Aggregate_with_argtypes_listContext } from "./PostgreSQLParser.js";
import { Createfunc_opt_listContext } from "./PostgreSQLParser.js";
import { Common_func_opt_itemContext } from "./PostgreSQLParser.js";
import { Createfunc_opt_itemContext } from "./PostgreSQLParser.js";
import { Transform_type_listContext } from "./PostgreSQLParser.js";
import { Opt_definitionContext } from "./PostgreSQLParser.js";
import { Table_func_columnContext } from "./PostgreSQLParser.js";
import { Table_func_column_listContext } from "./PostgreSQLParser.js";
import { AlterfunctionstmtContext } from "./PostgreSQLParser.js";
import { AlterFunctionTypeClauseContext } from "./PostgreSQLParser.js";
import { Alterfunc_opt_listContext } from "./PostgreSQLParser.js";
import { Opt_restrictContext } from "./PostgreSQLParser.js";
import { RemovefuncstmtContext } from "./PostgreSQLParser.js";
import { RemoveaggrstmtContext } from "./PostgreSQLParser.js";
import { RemoveoperstmtContext } from "./PostgreSQLParser.js";
import { Oper_argtypesContext } from "./PostgreSQLParser.js";
import { Any_operatorContext } from "./PostgreSQLParser.js";
import { Operator_with_argtypes_listContext } from "./PostgreSQLParser.js";
import { Operator_with_argtypesContext } from "./PostgreSQLParser.js";
import { DostmtContext } from "./PostgreSQLParser.js";
import { Dostmt_opt_listContext } from "./PostgreSQLParser.js";
import { Dostmt_opt_itemContext } from "./PostgreSQLParser.js";
import { CreatecaststmtContext } from "./PostgreSQLParser.js";
import { Cast_contextContext } from "./PostgreSQLParser.js";
import { Opt_if_existsContext } from "./PostgreSQLParser.js";
import { CreatetransformstmtContext } from "./PostgreSQLParser.js";
import { Transform_element_listContext } from "./PostgreSQLParser.js";
import { ReindexstmtContext } from "./PostgreSQLParser.js";
import { Reindex_target_typeContext } from "./PostgreSQLParser.js";
import { Reindex_target_multitableContext } from "./PostgreSQLParser.js";
import { Reindex_option_listContext } from "./PostgreSQLParser.js";
import { Reindex_option_elemContext } from "./PostgreSQLParser.js";
import { AltertblspcstmtContext } from "./PostgreSQLParser.js";
import { RenamestmtContext } from "./PostgreSQLParser.js";
import { Opt_columnContext } from "./PostgreSQLParser.js";
import { Opt_set_dataContext } from "./PostgreSQLParser.js";
import { AlterobjectdependsstmtContext } from "./PostgreSQLParser.js";
import { Opt_noContext } from "./PostgreSQLParser.js";
import { AlterobjectschemastmtContext } from "./PostgreSQLParser.js";
import { AlteroperatorstmtContext } from "./PostgreSQLParser.js";
import { Operator_def_listContext } from "./PostgreSQLParser.js";
import { Operator_def_elemContext } from "./PostgreSQLParser.js";
import { Operator_def_argContext } from "./PostgreSQLParser.js";
import { AltertypestmtContext } from "./PostgreSQLParser.js";
import { AlterownerstmtContext } from "./PostgreSQLParser.js";
import { CreatepublicationstmtContext } from "./PostgreSQLParser.js";
import { Opt_publication_for_tablesContext } from "./PostgreSQLParser.js";
import { Publication_for_tablesContext } from "./PostgreSQLParser.js";
import { AlterpublicationstmtContext } from "./PostgreSQLParser.js";
import { CreatesubscriptionstmtContext } from "./PostgreSQLParser.js";
import { Publication_name_listContext } from "./PostgreSQLParser.js";
import { Publication_name_itemContext } from "./PostgreSQLParser.js";
import { AltersubscriptionstmtContext } from "./PostgreSQLParser.js";
import { RulestmtContext } from "./PostgreSQLParser.js";
import { RuleactionlistContext } from "./PostgreSQLParser.js";
import { RuleactionmultiContext } from "./PostgreSQLParser.js";
import { RuleactionstmtContext } from "./PostgreSQLParser.js";
import { RuleactionstmtOrEmptyContext } from "./PostgreSQLParser.js";
import { EventContext } from "./PostgreSQLParser.js";
import { Opt_insteadContext } from "./PostgreSQLParser.js";
import { NotifystmtContext } from "./PostgreSQLParser.js";
import { Notify_payloadContext } from "./PostgreSQLParser.js";
import { ListenstmtContext } from "./PostgreSQLParser.js";
import { UnlistenstmtContext } from "./PostgreSQLParser.js";
import { TransactionstmtContext } from "./PostgreSQLParser.js";
import { Opt_transactionContext } from "./PostgreSQLParser.js";
import { Transaction_mode_itemContext } from "./PostgreSQLParser.js";
import { Transaction_mode_listContext } from "./PostgreSQLParser.js";
import { Transaction_mode_list_or_emptyContext } from "./PostgreSQLParser.js";
import { Opt_transaction_chainContext } from "./PostgreSQLParser.js";
import { CreateViewContext } from "./PostgreSQLParser.js";
import { Opt_check_optionContext } from "./PostgreSQLParser.js";
import { LoadstmtContext } from "./PostgreSQLParser.js";
import { CreateDatabaseContext } from "./PostgreSQLParser.js";
import { Createdb_opt_listContext } from "./PostgreSQLParser.js";
import { Createdb_opt_itemsContext } from "./PostgreSQLParser.js";
import { Createdb_opt_itemContext } from "./PostgreSQLParser.js";
import { Createdb_opt_nameContext } from "./PostgreSQLParser.js";
import { Opt_equalContext } from "./PostgreSQLParser.js";
import { AlterdatabasestmtContext } from "./PostgreSQLParser.js";
import { AlterdatabasesetstmtContext } from "./PostgreSQLParser.js";
import { Drop_option_listContext } from "./PostgreSQLParser.js";
import { Drop_optionContext } from "./PostgreSQLParser.js";
import { AltercollationstmtContext } from "./PostgreSQLParser.js";
import { AltersystemstmtContext } from "./PostgreSQLParser.js";
import { CreatedomainstmtContext } from "./PostgreSQLParser.js";
import { AlterdomainstmtContext } from "./PostgreSQLParser.js";
import { Opt_asContext } from "./PostgreSQLParser.js";
import { AltertsdictionarystmtContext } from "./PostgreSQLParser.js";
import { AltertsconfigurationstmtContext } from "./PostgreSQLParser.js";
import { Any_withContext } from "./PostgreSQLParser.js";
import { CreateconversionstmtContext } from "./PostgreSQLParser.js";
import { ClusterstmtContext } from "./PostgreSQLParser.js";
import { Opt_verbose_listContext } from "./PostgreSQLParser.js";
import { Cluster_index_specificationContext } from "./PostgreSQLParser.js";
import { VacuumstmtContext } from "./PostgreSQLParser.js";
import { AnalyzestmtContext } from "./PostgreSQLParser.js";
import { Vac_analyze_option_listContext } from "./PostgreSQLParser.js";
import { Analyze_keywordContext } from "./PostgreSQLParser.js";
import { Vac_analyze_option_elemContext } from "./PostgreSQLParser.js";
import { Vac_analyze_option_nameContext } from "./PostgreSQLParser.js";
import { Vac_analyze_option_argContext } from "./PostgreSQLParser.js";
import { Opt_analyzeContext } from "./PostgreSQLParser.js";
import { Analyze_options_listContext } from "./PostgreSQLParser.js";
import { Analyze_option_elemContext } from "./PostgreSQLParser.js";
import { Opt_verboseContext } from "./PostgreSQLParser.js";
import { Opt_skiplockContext } from "./PostgreSQLParser.js";
import { Opt_buffer_usage_limitContext } from "./PostgreSQLParser.js";
import { Opt_fullContext } from "./PostgreSQLParser.js";
import { Opt_freezeContext } from "./PostgreSQLParser.js";
import { Opt_name_listContext } from "./PostgreSQLParser.js";
import { Vacuum_relationContext } from "./PostgreSQLParser.js";
import { Vacuum_relation_listContext } from "./PostgreSQLParser.js";
import { Opt_vacuum_relation_listContext } from "./PostgreSQLParser.js";
import { ExplainstmtContext } from "./PostgreSQLParser.js";
import { ExplainablestmtContext } from "./PostgreSQLParser.js";
import { Explain_option_listContext } from "./PostgreSQLParser.js";
import { Explain_option_elemContext } from "./PostgreSQLParser.js";
import { Explain_option_nameContext } from "./PostgreSQLParser.js";
import { Explain_option_argContext } from "./PostgreSQLParser.js";
import { PreparestmtContext } from "./PostgreSQLParser.js";
import { Prep_type_clauseContext } from "./PostgreSQLParser.js";
import { PreparablestmtContext } from "./PostgreSQLParser.js";
import { ExecutestmtContext } from "./PostgreSQLParser.js";
import { Execute_param_clauseContext } from "./PostgreSQLParser.js";
import { DeallocatestmtContext } from "./PostgreSQLParser.js";
import { InsertStatementContext } from "./PostgreSQLParser.js";
import { Insert_targetContext } from "./PostgreSQLParser.js";
import { Insert_restContext } from "./PostgreSQLParser.js";
import { Override_kindContext } from "./PostgreSQLParser.js";
import { Insert_column_listContext } from "./PostgreSQLParser.js";
import { Insert_column_itemContext } from "./PostgreSQLParser.js";
import { Opt_on_conflictContext } from "./PostgreSQLParser.js";
import { Opt_conf_exprContext } from "./PostgreSQLParser.js";
import { Returning_clauseContext } from "./PostgreSQLParser.js";
import { DeletestmtContext } from "./PostgreSQLParser.js";
import { Using_clauseContext } from "./PostgreSQLParser.js";
import { LockstmtContext } from "./PostgreSQLParser.js";
import { Opt_lockContext } from "./PostgreSQLParser.js";
import { Lock_typeContext } from "./PostgreSQLParser.js";
import { Opt_nowaitContext } from "./PostgreSQLParser.js";
import { Opt_nowait_or_skipContext } from "./PostgreSQLParser.js";
import { UpdatestmtContext } from "./PostgreSQLParser.js";
import { Set_clause_listContext } from "./PostgreSQLParser.js";
import { Set_clauseContext } from "./PostgreSQLParser.js";
import { Set_targetContext } from "./PostgreSQLParser.js";
import { Set_target_listContext } from "./PostgreSQLParser.js";
import { DeclarecursorstmtContext } from "./PostgreSQLParser.js";
import { Cursor_nameContext } from "./PostgreSQLParser.js";
import { Cursor_optionsContext } from "./PostgreSQLParser.js";
import { Opt_holdContext } from "./PostgreSQLParser.js";
import { SelectStatementContext } from "./PostgreSQLParser.js";
import { Select_with_parensContext } from "./PostgreSQLParser.js";
import { Select_no_parensContext } from "./PostgreSQLParser.js";
import { Select_clauseContext } from "./PostgreSQLParser.js";
import { Simple_selectContext } from "./PostgreSQLParser.js";
import { UnionContext } from "./PostgreSQLParser.js";
import { IntersectContext } from "./PostgreSQLParser.js";
import { ExceptContext } from "./PostgreSQLParser.js";
import { Set_operator_with_all_or_distinctContext } from "./PostgreSQLParser.js";
import { With_clauseContext } from "./PostgreSQLParser.js";
import { Cte_listContext } from "./PostgreSQLParser.js";
import { Common_table_exprContext } from "./PostgreSQLParser.js";
import { Search_cluaseContext } from "./PostgreSQLParser.js";
import { Cycle_cluaseContext } from "./PostgreSQLParser.js";
import { Opt_materializedContext } from "./PostgreSQLParser.js";
import { Opt_with_clauseContext } from "./PostgreSQLParser.js";
import { Into_clauseContext } from "./PostgreSQLParser.js";
import { Opt_strictContext } from "./PostgreSQLParser.js";
import { OpttempTableNameContext } from "./PostgreSQLParser.js";
import { Opt_tableContext } from "./PostgreSQLParser.js";
import { All_or_distinctContext } from "./PostgreSQLParser.js";
import { Distinct_clauseContext } from "./PostgreSQLParser.js";
import { Opt_all_clauseContext } from "./PostgreSQLParser.js";
import { Opt_sort_clauseContext } from "./PostgreSQLParser.js";
import { Sort_clauseContext } from "./PostgreSQLParser.js";
import { Sortby_listContext } from "./PostgreSQLParser.js";
import { SortbyContext } from "./PostgreSQLParser.js";
import { Select_limitContext } from "./PostgreSQLParser.js";
import { Opt_select_limitContext } from "./PostgreSQLParser.js";
import { Limit_clauseContext } from "./PostgreSQLParser.js";
import { Fetch_clauseContext } from "./PostgreSQLParser.js";
import { Offset_clauseContext } from "./PostgreSQLParser.js";
import { Select_limit_valueContext } from "./PostgreSQLParser.js";
import { Select_offset_valueContext } from "./PostgreSQLParser.js";
import { Select_fetch_first_valueContext } from "./PostgreSQLParser.js";
import { I_or_f_constContext } from "./PostgreSQLParser.js";
import { Row_or_rowsContext } from "./PostgreSQLParser.js";
import { First_or_nextContext } from "./PostgreSQLParser.js";
import { Group_clauseContext } from "./PostgreSQLParser.js";
import { Group_by_listContext } from "./PostgreSQLParser.js";
import { Group_by_itemContext } from "./PostgreSQLParser.js";
import { Empty_grouping_setContext } from "./PostgreSQLParser.js";
import { Rollup_clauseContext } from "./PostgreSQLParser.js";
import { Cube_clauseContext } from "./PostgreSQLParser.js";
import { Grouping_sets_clauseContext } from "./PostgreSQLParser.js";
import { Having_clauseContext } from "./PostgreSQLParser.js";
import { For_locking_clauseContext } from "./PostgreSQLParser.js";
import { Opt_for_locking_clauseContext } from "./PostgreSQLParser.js";
import { For_locking_itemsContext } from "./PostgreSQLParser.js";
import { For_locking_itemContext } from "./PostgreSQLParser.js";
import { For_locking_strengthContext } from "./PostgreSQLParser.js";
import { Locked_rels_listContext } from "./PostgreSQLParser.js";
import { Values_clauseContext } from "./PostgreSQLParser.js";
import { From_clauseContext } from "./PostgreSQLParser.js";
import { From_listContext } from "./PostgreSQLParser.js";
import { Table_refContext } from "./PostgreSQLParser.js";
import { Alias_clauseContext } from "./PostgreSQLParser.js";
import { Opt_alias_clauseContext } from "./PostgreSQLParser.js";
import { Func_alias_clauseContext } from "./PostgreSQLParser.js";
import { Join_typeContext } from "./PostgreSQLParser.js";
import { Join_qualContext } from "./PostgreSQLParser.js";
import { Relation_exprContext } from "./PostgreSQLParser.js";
import { View_relation_exprContext } from "./PostgreSQLParser.js";
import { Publication_relation_exprContext } from "./PostgreSQLParser.js";
import { Relation_expr_listContext } from "./PostgreSQLParser.js";
import { Publication_relation_expr_listContext } from "./PostgreSQLParser.js";
import { Relation_expr_opt_aliasContext } from "./PostgreSQLParser.js";
import { Tablesample_clauseContext } from "./PostgreSQLParser.js";
import { Opt_repeatable_clauseContext } from "./PostgreSQLParser.js";
import { Func_tableContext } from "./PostgreSQLParser.js";
import { Rowsfrom_itemContext } from "./PostgreSQLParser.js";
import { Rowsfrom_listContext } from "./PostgreSQLParser.js";
import { Opt_col_def_listContext } from "./PostgreSQLParser.js";
import { Opt_ordinalityContext } from "./PostgreSQLParser.js";
import { Where_clauseContext } from "./PostgreSQLParser.js";
import { Where_or_current_clauseContext } from "./PostgreSQLParser.js";
import { OpttablefuncelementlistContext } from "./PostgreSQLParser.js";
import { TablefuncelementlistContext } from "./PostgreSQLParser.js";
import { TablefuncelementContext } from "./PostgreSQLParser.js";
import { XmltableContext } from "./PostgreSQLParser.js";
import { Xmltable_column_listContext } from "./PostgreSQLParser.js";
import { Xmltable_column_elContext } from "./PostgreSQLParser.js";
import { Xmltable_column_option_listContext } from "./PostgreSQLParser.js";
import { Xmltable_column_option_elContext } from "./PostgreSQLParser.js";
import { Xml_namespace_listContext } from "./PostgreSQLParser.js";
import { Xml_namespace_elContext } from "./PostgreSQLParser.js";
import { TypenameContext } from "./PostgreSQLParser.js";
import { Opt_array_boundsContext } from "./PostgreSQLParser.js";
import { SimpletypenameContext } from "./PostgreSQLParser.js";
import { ConsttypenameContext } from "./PostgreSQLParser.js";
import { GenerictypeContext } from "./PostgreSQLParser.js";
import { Opt_type_modifiersContext } from "./PostgreSQLParser.js";
import { NumericContext } from "./PostgreSQLParser.js";
import { Opt_floatContext } from "./PostgreSQLParser.js";
import { BitContext } from "./PostgreSQLParser.js";
import { ConstbitContext } from "./PostgreSQLParser.js";
import { BitwithlengthContext } from "./PostgreSQLParser.js";
import { BitwithoutlengthContext } from "./PostgreSQLParser.js";
import { CharacterContext } from "./PostgreSQLParser.js";
import { ConstcharacterContext } from "./PostgreSQLParser.js";
import { Character_cContext } from "./PostgreSQLParser.js";
import { Opt_varyingContext } from "./PostgreSQLParser.js";
import { ConstdatetimeContext } from "./PostgreSQLParser.js";
import { ConstintervalContext } from "./PostgreSQLParser.js";
import { Opt_timezoneContext } from "./PostgreSQLParser.js";
import { Opt_intervalContext } from "./PostgreSQLParser.js";
import { Interval_secondContext } from "./PostgreSQLParser.js";
import { Opt_escapeContext } from "./PostgreSQLParser.js";
import { A_exprContext } from "./PostgreSQLParser.js";
import { A_expr_qualContext } from "./PostgreSQLParser.js";
import { A_expr_lesslessContext } from "./PostgreSQLParser.js";
import { A_expr_orContext } from "./PostgreSQLParser.js";
import { A_expr_andContext } from "./PostgreSQLParser.js";
import { A_expr_inContext } from "./PostgreSQLParser.js";
import { A_expr_unary_notContext } from "./PostgreSQLParser.js";
import { A_expr_isnullContext } from "./PostgreSQLParser.js";
import { A_expr_is_notContext } from "./PostgreSQLParser.js";
import { A_expr_compareContext } from "./PostgreSQLParser.js";
import { A_expr_likeContext } from "./PostgreSQLParser.js";
import { A_expr_qual_opContext } from "./PostgreSQLParser.js";
import { A_expr_unary_qualopContext } from "./PostgreSQLParser.js";
import { A_expr_addContext } from "./PostgreSQLParser.js";
import { A_expr_mulContext } from "./PostgreSQLParser.js";
import { A_expr_caretContext } from "./PostgreSQLParser.js";
import { A_expr_unary_signContext } from "./PostgreSQLParser.js";
import { A_expr_at_time_zoneContext } from "./PostgreSQLParser.js";
import { A_expr_collateContext } from "./PostgreSQLParser.js";
import { A_expr_typecastContext } from "./PostgreSQLParser.js";
import { B_exprContext } from "./PostgreSQLParser.js";
import { C_expr_existsContext } from "./PostgreSQLParser.js";
import { C_expr_exprContext } from "./PostgreSQLParser.js";
import { C_expr_caseContext } from "./PostgreSQLParser.js";
import { PlsqlvariablenameContext } from "./PostgreSQLParser.js";
import { Func_applicationContext } from "./PostgreSQLParser.js";
import { Func_exprContext } from "./PostgreSQLParser.js";
import { Func_expr_windowlessContext } from "./PostgreSQLParser.js";
import { Func_expr_common_subexprContext } from "./PostgreSQLParser.js";
import { Xml_root_versionContext } from "./PostgreSQLParser.js";
import { Opt_xml_root_standaloneContext } from "./PostgreSQLParser.js";
import { Xml_attributesContext } from "./PostgreSQLParser.js";
import { Xml_attribute_listContext } from "./PostgreSQLParser.js";
import { Xml_attribute_elContext } from "./PostgreSQLParser.js";
import { Document_or_contentContext } from "./PostgreSQLParser.js";
import { Xml_whitespace_optionContext } from "./PostgreSQLParser.js";
import { Xmlexists_argumentContext } from "./PostgreSQLParser.js";
import { Xml_passing_mechContext } from "./PostgreSQLParser.js";
import { Within_group_clauseContext } from "./PostgreSQLParser.js";
import { Filter_clauseContext } from "./PostgreSQLParser.js";
import { Window_clauseContext } from "./PostgreSQLParser.js";
import { Window_definition_listContext } from "./PostgreSQLParser.js";
import { Window_definitionContext } from "./PostgreSQLParser.js";
import { Over_clauseContext } from "./PostgreSQLParser.js";
import { Window_specificationContext } from "./PostgreSQLParser.js";
import { Opt_existing_window_nameContext } from "./PostgreSQLParser.js";
import { Opt_partition_clauseContext } from "./PostgreSQLParser.js";
import { Opt_frame_clauseContext } from "./PostgreSQLParser.js";
import { Frame_extentContext } from "./PostgreSQLParser.js";
import { Frame_boundContext } from "./PostgreSQLParser.js";
import { Opt_window_exclusion_clauseContext } from "./PostgreSQLParser.js";
import { RowContext } from "./PostgreSQLParser.js";
import { Explicit_rowContext } from "./PostgreSQLParser.js";
import { Implicit_rowContext } from "./PostgreSQLParser.js";
import { Sub_typeContext } from "./PostgreSQLParser.js";
import { All_opContext } from "./PostgreSQLParser.js";
import { MathopContext } from "./PostgreSQLParser.js";
import { Qual_opContext } from "./PostgreSQLParser.js";
import { Qual_all_opContext } from "./PostgreSQLParser.js";
import { Subquery_OpContext } from "./PostgreSQLParser.js";
import { Expr_listContext } from "./PostgreSQLParser.js";
import { Column_expr_list_noparenContext } from "./PostgreSQLParser.js";
import { Column_expr_listContext } from "./PostgreSQLParser.js";
import { Column_exprContext } from "./PostgreSQLParser.js";
import { Column_expr_noparenContext } from "./PostgreSQLParser.js";
import { Func_arg_listContext } from "./PostgreSQLParser.js";
import { Func_arg_exprContext } from "./PostgreSQLParser.js";
import { Type_listContext } from "./PostgreSQLParser.js";
import { Array_exprContext } from "./PostgreSQLParser.js";
import { Array_expr_listContext } from "./PostgreSQLParser.js";
import { Extract_listContext } from "./PostgreSQLParser.js";
import { Extract_argContext } from "./PostgreSQLParser.js";
import { Unicode_normal_formContext } from "./PostgreSQLParser.js";
import { Overlay_listContext } from "./PostgreSQLParser.js";
import { Position_listContext } from "./PostgreSQLParser.js";
import { Substr_listContext } from "./PostgreSQLParser.js";
import { Trim_listContext } from "./PostgreSQLParser.js";
import { In_expr_selectContext } from "./PostgreSQLParser.js";
import { In_expr_listContext } from "./PostgreSQLParser.js";
import { Case_exprContext } from "./PostgreSQLParser.js";
import { When_clause_listContext } from "./PostgreSQLParser.js";
import { When_clauseContext } from "./PostgreSQLParser.js";
import { Case_defaultContext } from "./PostgreSQLParser.js";
import { Case_argContext } from "./PostgreSQLParser.js";
import { ColumnrefContext } from "./PostgreSQLParser.js";
import { Indirection_elContext } from "./PostgreSQLParser.js";
import { Opt_slice_boundContext } from "./PostgreSQLParser.js";
import { IndirectionContext } from "./PostgreSQLParser.js";
import { Opt_indirectionContext } from "./PostgreSQLParser.js";
import { Opt_target_listContext } from "./PostgreSQLParser.js";
import { Target_listContext } from "./PostgreSQLParser.js";
import { Target_labelContext } from "./PostgreSQLParser.js";
import { Target_starContext } from "./PostgreSQLParser.js";
import { Qualified_name_listContext } from "./PostgreSQLParser.js";
import { Table_name_listContext } from "./PostgreSQLParser.js";
import { Schema_name_listContext } from "./PostgreSQLParser.js";
import { Database_nameListContext } from "./PostgreSQLParser.js";
import { Procedure_name_listContext } from "./PostgreSQLParser.js";
import { TablespaceNameCreateContext } from "./PostgreSQLParser.js";
import { TablespaceNameContext } from "./PostgreSQLParser.js";
import { TableNameCreateContext } from "./PostgreSQLParser.js";
import { TableNameContext } from "./PostgreSQLParser.js";
import { ViewNameCreateContext } from "./PostgreSQLParser.js";
import { ViewNameContext } from "./PostgreSQLParser.js";
import { Qualified_nameContext } from "./PostgreSQLParser.js";
import { Tablespace_name_listContext } from "./PostgreSQLParser.js";
import { Name_listContext } from "./PostgreSQLParser.js";
import { DatabaseNameCreateContext } from "./PostgreSQLParser.js";
import { DatabaseNameContext } from "./PostgreSQLParser.js";
import { SchemaNameContext } from "./PostgreSQLParser.js";
import { RoutineNameCreateContext } from "./PostgreSQLParser.js";
import { RoutineNameContext } from "./PostgreSQLParser.js";
import { ProcedureNameContext } from "./PostgreSQLParser.js";
import { ProcedureNameCreateContext } from "./PostgreSQLParser.js";
import { ColumnNameContext } from "./PostgreSQLParser.js";
import { ColumnNameCreateContext } from "./PostgreSQLParser.js";
import { NameContext } from "./PostgreSQLParser.js";
import { Attr_nameContext } from "./PostgreSQLParser.js";
import { File_nameContext } from "./PostgreSQLParser.js";
import { FunctionNameCreateContext } from "./PostgreSQLParser.js";
import { FunctionNameContext } from "./PostgreSQLParser.js";
import { Usual_nameContext } from "./PostgreSQLParser.js";
import { AexprconstContext } from "./PostgreSQLParser.js";
import { XconstContext } from "./PostgreSQLParser.js";
import { BconstContext } from "./PostgreSQLParser.js";
import { FconstContext } from "./PostgreSQLParser.js";
import { IconstContext } from "./PostgreSQLParser.js";
import { SconstContext } from "./PostgreSQLParser.js";
import { AnysconstContext } from "./PostgreSQLParser.js";
import { Opt_uescapeContext } from "./PostgreSQLParser.js";
import { SignediconstContext } from "./PostgreSQLParser.js";
import { GroupnameContext } from "./PostgreSQLParser.js";
import { RoleidContext } from "./PostgreSQLParser.js";
import { RolespecContext } from "./PostgreSQLParser.js";
import { Role_listContext } from "./PostgreSQLParser.js";
import { ColidContext } from "./PostgreSQLParser.js";
import { Index_method_choicesContext } from "./PostgreSQLParser.js";
import { Exclude_elementContext } from "./PostgreSQLParser.js";
import { Index_paramentersContext } from "./PostgreSQLParser.js";
import { Type_function_nameContext } from "./PostgreSQLParser.js";
import { Type_usual_nameContext } from "./PostgreSQLParser.js";
import { Nonreservedword_columnContext } from "./PostgreSQLParser.js";
import { NonreservedwordContext } from "./PostgreSQLParser.js";
import { CollabelContext } from "./PostgreSQLParser.js";
import { IdentifierContext } from "./PostgreSQLParser.js";
import { PlsqlidentifierContext } from "./PostgreSQLParser.js";
import { Unreserved_keywordContext } from "./PostgreSQLParser.js";
import { Col_name_keywordContext } from "./PostgreSQLParser.js";
import { Type_func_name_keywordContext } from "./PostgreSQLParser.js";
import { Reserved_keywordContext } from "./PostgreSQLParser.js";
import { Pl_functionContext } from "./PostgreSQLParser.js";
import { Comp_optionsContext } from "./PostgreSQLParser.js";
import { Comp_optionContext } from "./PostgreSQLParser.js";
import { SharpContext } from "./PostgreSQLParser.js";
import { Option_valueContext } from "./PostgreSQLParser.js";
import { Opt_semiContext } from "./PostgreSQLParser.js";
import { Pl_blockContext } from "./PostgreSQLParser.js";
import { Decl_sectContext } from "./PostgreSQLParser.js";
import { Decl_startContext } from "./PostgreSQLParser.js";
import { Decl_stmtsContext } from "./PostgreSQLParser.js";
import { Label_declContext } from "./PostgreSQLParser.js";
import { Decl_stmtContext } from "./PostgreSQLParser.js";
import { Decl_statementContext } from "./PostgreSQLParser.js";
import { Opt_scrollableContext } from "./PostgreSQLParser.js";
import { Decl_cursor_queryContext } from "./PostgreSQLParser.js";
import { Decl_cursor_argsContext } from "./PostgreSQLParser.js";
import { Decl_cursor_arglistContext } from "./PostgreSQLParser.js";
import { Decl_cursor_argContext } from "./PostgreSQLParser.js";
import { Decl_is_forContext } from "./PostgreSQLParser.js";
import { Decl_aliasitemContext } from "./PostgreSQLParser.js";
import { Decl_varnameContext } from "./PostgreSQLParser.js";
import { Decl_constContext } from "./PostgreSQLParser.js";
import { Decl_datatypeContext } from "./PostgreSQLParser.js";
import { Decl_collateContext } from "./PostgreSQLParser.js";
import { Decl_notnullContext } from "./PostgreSQLParser.js";
import { Decl_defvalContext } from "./PostgreSQLParser.js";
import { Decl_defkeyContext } from "./PostgreSQLParser.js";
import { Assign_operatorContext } from "./PostgreSQLParser.js";
import { Proc_sectContext } from "./PostgreSQLParser.js";
import { Proc_stmtContext } from "./PostgreSQLParser.js";
import { Stmt_performContext } from "./PostgreSQLParser.js";
import { Stmt_callContext } from "./PostgreSQLParser.js";
import { Opt_expr_listContext } from "./PostgreSQLParser.js";
import { Stmt_assignContext } from "./PostgreSQLParser.js";
import { Stmt_getdiagContext } from "./PostgreSQLParser.js";
import { Getdiag_area_optContext } from "./PostgreSQLParser.js";
import { Getdiag_listContext } from "./PostgreSQLParser.js";
import { Getdiag_list_itemContext } from "./PostgreSQLParser.js";
import { Getdiag_itemContext } from "./PostgreSQLParser.js";
import { Getdiag_targetContext } from "./PostgreSQLParser.js";
import { Assign_varContext } from "./PostgreSQLParser.js";
import { Stmt_ifContext } from "./PostgreSQLParser.js";
import { Stmt_elsifsContext } from "./PostgreSQLParser.js";
import { Stmt_elseContext } from "./PostgreSQLParser.js";
import { Stmt_caseContext } from "./PostgreSQLParser.js";
import { Opt_expr_until_whenContext } from "./PostgreSQLParser.js";
import { Case_when_listContext } from "./PostgreSQLParser.js";
import { Case_whenContext } from "./PostgreSQLParser.js";
import { Opt_case_elseContext } from "./PostgreSQLParser.js";
import { Stmt_loopContext } from "./PostgreSQLParser.js";
import { Stmt_whileContext } from "./PostgreSQLParser.js";
import { Stmt_forContext } from "./PostgreSQLParser.js";
import { For_controlContext } from "./PostgreSQLParser.js";
import { Opt_for_using_expressionContext } from "./PostgreSQLParser.js";
import { Opt_cursor_parametersContext } from "./PostgreSQLParser.js";
import { Opt_reverseContext } from "./PostgreSQLParser.js";
import { Opt_by_expressionContext } from "./PostgreSQLParser.js";
import { For_variableContext } from "./PostgreSQLParser.js";
import { Stmt_foreach_aContext } from "./PostgreSQLParser.js";
import { Foreach_sliceContext } from "./PostgreSQLParser.js";
import { Stmt_exitContext } from "./PostgreSQLParser.js";
import { Exit_typeContext } from "./PostgreSQLParser.js";
import { Stmt_returnContext } from "./PostgreSQLParser.js";
import { Opt_return_resultContext } from "./PostgreSQLParser.js";
import { Stmt_raiseContext } from "./PostgreSQLParser.js";
import { Opt_stmt_raise_levelContext } from "./PostgreSQLParser.js";
import { Opt_raise_listContext } from "./PostgreSQLParser.js";
import { Opt_raise_usingContext } from "./PostgreSQLParser.js";
import { Opt_raise_using_elemContext } from "./PostgreSQLParser.js";
import { Opt_raise_using_elem_listContext } from "./PostgreSQLParser.js";
import { Stmt_assertContext } from "./PostgreSQLParser.js";
import { Opt_stmt_assert_messageContext } from "./PostgreSQLParser.js";
import { Loop_bodyContext } from "./PostgreSQLParser.js";
import { Stmt_execsqlContext } from "./PostgreSQLParser.js";
import { Stmt_dynexecuteContext } from "./PostgreSQLParser.js";
import { Opt_execute_usingContext } from "./PostgreSQLParser.js";
import { Opt_execute_using_listContext } from "./PostgreSQLParser.js";
import { Opt_execute_intoContext } from "./PostgreSQLParser.js";
import { Stmt_openContext } from "./PostgreSQLParser.js";
import { Opt_open_bound_list_itemContext } from "./PostgreSQLParser.js";
import { Opt_open_bound_listContext } from "./PostgreSQLParser.js";
import { Opt_open_usingContext } from "./PostgreSQLParser.js";
import { Opt_scroll_optionContext } from "./PostgreSQLParser.js";
import { Opt_scroll_option_noContext } from "./PostgreSQLParser.js";
import { Stmt_fetchContext } from "./PostgreSQLParser.js";
import { Into_targetContext } from "./PostgreSQLParser.js";
import { Opt_cursor_fromContext } from "./PostgreSQLParser.js";
import { Opt_fetch_directionContext } from "./PostgreSQLParser.js";
import { Stmt_moveContext } from "./PostgreSQLParser.js";
import { MergestmtContext } from "./PostgreSQLParser.js";
import { Data_sourceContext } from "./PostgreSQLParser.js";
import { Join_conditionContext } from "./PostgreSQLParser.js";
import { Merge_when_clauseContext } from "./PostgreSQLParser.js";
import { Merge_insertContext } from "./PostgreSQLParser.js";
import { Merge_updateContext } from "./PostgreSQLParser.js";
import { Default_values_or_valuesContext } from "./PostgreSQLParser.js";
import { ExprofdefaultlistContext } from "./PostgreSQLParser.js";
import { ExprofdefaultContext } from "./PostgreSQLParser.js";
import { Stmt_closeContext } from "./PostgreSQLParser.js";
import { Stmt_nullContext } from "./PostgreSQLParser.js";
import { Stmt_commitContext } from "./PostgreSQLParser.js";
import { Stmt_rollbackContext } from "./PostgreSQLParser.js";
import { Plsql_opt_transaction_chainContext } from "./PostgreSQLParser.js";
import { Stmt_setContext } from "./PostgreSQLParser.js";
import { Cursor_variableContext } from "./PostgreSQLParser.js";
import { Exception_sectContext } from "./PostgreSQLParser.js";
import { Proc_exceptionsContext } from "./PostgreSQLParser.js";
import { Proc_exceptionContext } from "./PostgreSQLParser.js";
import { Proc_conditionsContext } from "./PostgreSQLParser.js";
import { Proc_conditionContext } from "./PostgreSQLParser.js";
import { Opt_block_labelContext } from "./PostgreSQLParser.js";
import { Opt_loop_labelContext } from "./PostgreSQLParser.js";
import { Opt_labelContext } from "./PostgreSQLParser.js";
import { Opt_exitcondContext } from "./PostgreSQLParser.js";
import { Any_identifierContext } from "./PostgreSQLParser.js";
import { Plsql_unreserved_keywordContext } from "./PostgreSQLParser.js";
import { Sql_expressionContext } from "./PostgreSQLParser.js";
import { Expr_until_thenContext } from "./PostgreSQLParser.js";
import { Expr_until_semiContext } from "./PostgreSQLParser.js";
import { Expr_until_rightbracketContext } from "./PostgreSQLParser.js";
import { Expr_until_loopContext } from "./PostgreSQLParser.js";
import { Make_execsql_stmtContext } from "./PostgreSQLParser.js";
import { Opt_returning_clause_intoContext } from "./PostgreSQLParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `PostgreSQLParser`.
 */
export class PostgreSQLParserListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `PostgreSQLParser.program`.
     * @param ctx the parse tree
     */
    enterProgram?: (ctx: ProgramContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.program`.
     * @param ctx the parse tree
     */
    exitProgram?: (ctx: ProgramContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.plsqlroot`.
     * @param ctx the parse tree
     */
    enterPlsqlroot?: (ctx: PlsqlrootContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.plsqlroot`.
     * @param ctx the parse tree
     */
    exitPlsqlroot?: (ctx: PlsqlrootContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.singleStmt`.
     * @param ctx the parse tree
     */
    enterSingleStmt?: (ctx: SingleStmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.singleStmt`.
     * @param ctx the parse tree
     */
    exitSingleStmt?: (ctx: SingleStmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.stmt`.
     * @param ctx the parse tree
     */
    enterStmt?: (ctx: StmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.stmt`.
     * @param ctx the parse tree
     */
    exitStmt?: (ctx: StmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.plsqlconsolecommand`.
     * @param ctx the parse tree
     */
    enterPlsqlconsolecommand?: (ctx: PlsqlconsolecommandContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.plsqlconsolecommand`.
     * @param ctx the parse tree
     */
    exitPlsqlconsolecommand?: (ctx: PlsqlconsolecommandContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.callstmt`.
     * @param ctx the parse tree
     */
    enterCallstmt?: (ctx: CallstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.callstmt`.
     * @param ctx the parse tree
     */
    exitCallstmt?: (ctx: CallstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.createrolestmt`.
     * @param ctx the parse tree
     */
    enterCreaterolestmt?: (ctx: CreaterolestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.createrolestmt`.
     * @param ctx the parse tree
     */
    exitCreaterolestmt?: (ctx: CreaterolestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_with`.
     * @param ctx the parse tree
     */
    enterOpt_with?: (ctx: Opt_withContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_with`.
     * @param ctx the parse tree
     */
    exitOpt_with?: (ctx: Opt_withContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.optrolelist`.
     * @param ctx the parse tree
     */
    enterOptrolelist?: (ctx: OptrolelistContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.optrolelist`.
     * @param ctx the parse tree
     */
    exitOptrolelist?: (ctx: OptrolelistContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alteroptrolelist`.
     * @param ctx the parse tree
     */
    enterAlteroptrolelist?: (ctx: AlteroptrolelistContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alteroptrolelist`.
     * @param ctx the parse tree
     */
    exitAlteroptrolelist?: (ctx: AlteroptrolelistContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alteroptroleelem`.
     * @param ctx the parse tree
     */
    enterAlteroptroleelem?: (ctx: AlteroptroleelemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alteroptroleelem`.
     * @param ctx the parse tree
     */
    exitAlteroptroleelem?: (ctx: AlteroptroleelemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.createoptroleelem`.
     * @param ctx the parse tree
     */
    enterCreateoptroleelem?: (ctx: CreateoptroleelemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.createoptroleelem`.
     * @param ctx the parse tree
     */
    exitCreateoptroleelem?: (ctx: CreateoptroleelemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.createuserstmt`.
     * @param ctx the parse tree
     */
    enterCreateuserstmt?: (ctx: CreateuserstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.createuserstmt`.
     * @param ctx the parse tree
     */
    exitCreateuserstmt?: (ctx: CreateuserstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alterrolestmt`.
     * @param ctx the parse tree
     */
    enterAlterrolestmt?: (ctx: AlterrolestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alterrolestmt`.
     * @param ctx the parse tree
     */
    exitAlterrolestmt?: (ctx: AlterrolestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_in_database`.
     * @param ctx the parse tree
     */
    enterOpt_in_database?: (ctx: Opt_in_databaseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_in_database`.
     * @param ctx the parse tree
     */
    exitOpt_in_database?: (ctx: Opt_in_databaseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alterrolesetstmt`.
     * @param ctx the parse tree
     */
    enterAlterrolesetstmt?: (ctx: AlterrolesetstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alterrolesetstmt`.
     * @param ctx the parse tree
     */
    exitAlterrolesetstmt?: (ctx: AlterrolesetstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alterroutinestmt`.
     * @param ctx the parse tree
     */
    enterAlterroutinestmt?: (ctx: AlterroutinestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alterroutinestmt`.
     * @param ctx the parse tree
     */
    exitAlterroutinestmt?: (ctx: AlterroutinestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alter_routine_cluase`.
     * @param ctx the parse tree
     */
    enterAlter_routine_cluase?: (ctx: Alter_routine_cluaseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alter_routine_cluase`.
     * @param ctx the parse tree
     */
    exitAlter_routine_cluase?: (ctx: Alter_routine_cluaseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.routine_action_list`.
     * @param ctx the parse tree
     */
    enterRoutine_action_list?: (ctx: Routine_action_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.routine_action_list`.
     * @param ctx the parse tree
     */
    exitRoutine_action_list?: (ctx: Routine_action_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.routine_action`.
     * @param ctx the parse tree
     */
    enterRoutine_action?: (ctx: Routine_actionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.routine_action`.
     * @param ctx the parse tree
     */
    exitRoutine_action?: (ctx: Routine_actionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.creategroupstmt`.
     * @param ctx the parse tree
     */
    enterCreategroupstmt?: (ctx: CreategroupstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.creategroupstmt`.
     * @param ctx the parse tree
     */
    exitCreategroupstmt?: (ctx: CreategroupstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.altergroupstmt`.
     * @param ctx the parse tree
     */
    enterAltergroupstmt?: (ctx: AltergroupstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.altergroupstmt`.
     * @param ctx the parse tree
     */
    exitAltergroupstmt?: (ctx: AltergroupstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.add_drop`.
     * @param ctx the parse tree
     */
    enterAdd_drop?: (ctx: Add_dropContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.add_drop`.
     * @param ctx the parse tree
     */
    exitAdd_drop?: (ctx: Add_dropContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.createschemastmt`.
     * @param ctx the parse tree
     */
    enterCreateschemastmt?: (ctx: CreateschemastmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.createschemastmt`.
     * @param ctx the parse tree
     */
    exitCreateschemastmt?: (ctx: CreateschemastmtContext) => void;
    /**
     * Enter a parse tree produced by the `schemaNameCreate`
     * labeled alternative in `PostgreSQLParser.schema_name_create`.
     * @param ctx the parse tree
     */
    enterSchemaNameCreate?: (ctx: SchemaNameCreateContext) => void;
    /**
     * Exit a parse tree produced by the `schemaNameCreate`
     * labeled alternative in `PostgreSQLParser.schema_name_create`.
     * @param ctx the parse tree
     */
    exitSchemaNameCreate?: (ctx: SchemaNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.optschemaeltlist`.
     * @param ctx the parse tree
     */
    enterOptschemaeltlist?: (ctx: OptschemaeltlistContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.optschemaeltlist`.
     * @param ctx the parse tree
     */
    exitOptschemaeltlist?: (ctx: OptschemaeltlistContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.schema_stmt`.
     * @param ctx the parse tree
     */
    enterSchema_stmt?: (ctx: Schema_stmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.schema_stmt`.
     * @param ctx the parse tree
     */
    exitSchema_stmt?: (ctx: Schema_stmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.variablesetstmt`.
     * @param ctx the parse tree
     */
    enterVariablesetstmt?: (ctx: VariablesetstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.variablesetstmt`.
     * @param ctx the parse tree
     */
    exitVariablesetstmt?: (ctx: VariablesetstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.set_rest`.
     * @param ctx the parse tree
     */
    enterSet_rest?: (ctx: Set_restContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.set_rest`.
     * @param ctx the parse tree
     */
    exitSet_rest?: (ctx: Set_restContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.generic_set`.
     * @param ctx the parse tree
     */
    enterGeneric_set?: (ctx: Generic_setContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.generic_set`.
     * @param ctx the parse tree
     */
    exitGeneric_set?: (ctx: Generic_setContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.set_rest_more`.
     * @param ctx the parse tree
     */
    enterSet_rest_more?: (ctx: Set_rest_moreContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.set_rest_more`.
     * @param ctx the parse tree
     */
    exitSet_rest_more?: (ctx: Set_rest_moreContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.var_name`.
     * @param ctx the parse tree
     */
    enterVar_name?: (ctx: Var_nameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.var_name`.
     * @param ctx the parse tree
     */
    exitVar_name?: (ctx: Var_nameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.var_list`.
     * @param ctx the parse tree
     */
    enterVar_list?: (ctx: Var_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.var_list`.
     * @param ctx the parse tree
     */
    exitVar_list?: (ctx: Var_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.var_value`.
     * @param ctx the parse tree
     */
    enterVar_value?: (ctx: Var_valueContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.var_value`.
     * @param ctx the parse tree
     */
    exitVar_value?: (ctx: Var_valueContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.iso_level`.
     * @param ctx the parse tree
     */
    enterIso_level?: (ctx: Iso_levelContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.iso_level`.
     * @param ctx the parse tree
     */
    exitIso_level?: (ctx: Iso_levelContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_boolean_or_string_column`.
     * @param ctx the parse tree
     */
    enterOpt_boolean_or_string_column?: (ctx: Opt_boolean_or_string_columnContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_boolean_or_string_column`.
     * @param ctx the parse tree
     */
    exitOpt_boolean_or_string_column?: (ctx: Opt_boolean_or_string_columnContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_boolean_or_string`.
     * @param ctx the parse tree
     */
    enterOpt_boolean_or_string?: (ctx: Opt_boolean_or_stringContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_boolean_or_string`.
     * @param ctx the parse tree
     */
    exitOpt_boolean_or_string?: (ctx: Opt_boolean_or_stringContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.zone_value`.
     * @param ctx the parse tree
     */
    enterZone_value?: (ctx: Zone_valueContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.zone_value`.
     * @param ctx the parse tree
     */
    exitZone_value?: (ctx: Zone_valueContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_encoding`.
     * @param ctx the parse tree
     */
    enterOpt_encoding?: (ctx: Opt_encodingContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_encoding`.
     * @param ctx the parse tree
     */
    exitOpt_encoding?: (ctx: Opt_encodingContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.nonreservedword_or_sconst_column`.
     * @param ctx the parse tree
     */
    enterNonreservedword_or_sconst_column?: (ctx: Nonreservedword_or_sconst_columnContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.nonreservedword_or_sconst_column`.
     * @param ctx the parse tree
     */
    exitNonreservedword_or_sconst_column?: (ctx: Nonreservedword_or_sconst_columnContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.nonreservedword_or_sconst`.
     * @param ctx the parse tree
     */
    enterNonreservedword_or_sconst?: (ctx: Nonreservedword_or_sconstContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.nonreservedword_or_sconst`.
     * @param ctx the parse tree
     */
    exitNonreservedword_or_sconst?: (ctx: Nonreservedword_or_sconstContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.variableresetstmt`.
     * @param ctx the parse tree
     */
    enterVariableresetstmt?: (ctx: VariableresetstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.variableresetstmt`.
     * @param ctx the parse tree
     */
    exitVariableresetstmt?: (ctx: VariableresetstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.reset_rest`.
     * @param ctx the parse tree
     */
    enterReset_rest?: (ctx: Reset_restContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.reset_rest`.
     * @param ctx the parse tree
     */
    exitReset_rest?: (ctx: Reset_restContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.generic_reset`.
     * @param ctx the parse tree
     */
    enterGeneric_reset?: (ctx: Generic_resetContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.generic_reset`.
     * @param ctx the parse tree
     */
    exitGeneric_reset?: (ctx: Generic_resetContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.setresetclause`.
     * @param ctx the parse tree
     */
    enterSetresetclause?: (ctx: SetresetclauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.setresetclause`.
     * @param ctx the parse tree
     */
    exitSetresetclause?: (ctx: SetresetclauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.functionsetresetclause`.
     * @param ctx the parse tree
     */
    enterFunctionsetresetclause?: (ctx: FunctionsetresetclauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.functionsetresetclause`.
     * @param ctx the parse tree
     */
    exitFunctionsetresetclause?: (ctx: FunctionsetresetclauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.variableshowstmt`.
     * @param ctx the parse tree
     */
    enterVariableshowstmt?: (ctx: VariableshowstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.variableshowstmt`.
     * @param ctx the parse tree
     */
    exitVariableshowstmt?: (ctx: VariableshowstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.constraintssetstmt`.
     * @param ctx the parse tree
     */
    enterConstraintssetstmt?: (ctx: ConstraintssetstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.constraintssetstmt`.
     * @param ctx the parse tree
     */
    exitConstraintssetstmt?: (ctx: ConstraintssetstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.constraints_set_list`.
     * @param ctx the parse tree
     */
    enterConstraints_set_list?: (ctx: Constraints_set_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.constraints_set_list`.
     * @param ctx the parse tree
     */
    exitConstraints_set_list?: (ctx: Constraints_set_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.constraints_set_mode`.
     * @param ctx the parse tree
     */
    enterConstraints_set_mode?: (ctx: Constraints_set_modeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.constraints_set_mode`.
     * @param ctx the parse tree
     */
    exitConstraints_set_mode?: (ctx: Constraints_set_modeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.checkpointstmt`.
     * @param ctx the parse tree
     */
    enterCheckpointstmt?: (ctx: CheckpointstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.checkpointstmt`.
     * @param ctx the parse tree
     */
    exitCheckpointstmt?: (ctx: CheckpointstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.discardstmt`.
     * @param ctx the parse tree
     */
    enterDiscardstmt?: (ctx: DiscardstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.discardstmt`.
     * @param ctx the parse tree
     */
    exitDiscardstmt?: (ctx: DiscardstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.altertablestmt`.
     * @param ctx the parse tree
     */
    enterAltertablestmt?: (ctx: AltertablestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.altertablestmt`.
     * @param ctx the parse tree
     */
    exitAltertablestmt?: (ctx: AltertablestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alter_table_cmds`.
     * @param ctx the parse tree
     */
    enterAlter_table_cmds?: (ctx: Alter_table_cmdsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alter_table_cmds`.
     * @param ctx the parse tree
     */
    exitAlter_table_cmds?: (ctx: Alter_table_cmdsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.partition_bound_spec`.
     * @param ctx the parse tree
     */
    enterPartition_bound_spec?: (ctx: Partition_bound_specContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.partition_bound_spec`.
     * @param ctx the parse tree
     */
    exitPartition_bound_spec?: (ctx: Partition_bound_specContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.partition_bound_cluase`.
     * @param ctx the parse tree
     */
    enterPartition_bound_cluase?: (ctx: Partition_bound_cluaseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.partition_bound_cluase`.
     * @param ctx the parse tree
     */
    exitPartition_bound_cluase?: (ctx: Partition_bound_cluaseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.partition_bound_choose`.
     * @param ctx the parse tree
     */
    enterPartition_bound_choose?: (ctx: Partition_bound_chooseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.partition_bound_choose`.
     * @param ctx the parse tree
     */
    exitPartition_bound_choose?: (ctx: Partition_bound_chooseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.partition_with_cluase`.
     * @param ctx the parse tree
     */
    enterPartition_with_cluase?: (ctx: Partition_with_cluaseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.partition_with_cluase`.
     * @param ctx the parse tree
     */
    exitPartition_with_cluase?: (ctx: Partition_with_cluaseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.partition_cmd`.
     * @param ctx the parse tree
     */
    enterPartition_cmd?: (ctx: Partition_cmdContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.partition_cmd`.
     * @param ctx the parse tree
     */
    exitPartition_cmd?: (ctx: Partition_cmdContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.index_partition_cmd`.
     * @param ctx the parse tree
     */
    enterIndex_partition_cmd?: (ctx: Index_partition_cmdContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.index_partition_cmd`.
     * @param ctx the parse tree
     */
    exitIndex_partition_cmd?: (ctx: Index_partition_cmdContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alter_table_cmd`.
     * @param ctx the parse tree
     */
    enterAlter_table_cmd?: (ctx: Alter_table_cmdContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alter_table_cmd`.
     * @param ctx the parse tree
     */
    exitAlter_table_cmd?: (ctx: Alter_table_cmdContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alter_column_default`.
     * @param ctx the parse tree
     */
    enterAlter_column_default?: (ctx: Alter_column_defaultContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alter_column_default`.
     * @param ctx the parse tree
     */
    exitAlter_column_default?: (ctx: Alter_column_defaultContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_drop_behavior`.
     * @param ctx the parse tree
     */
    enterOpt_drop_behavior?: (ctx: Opt_drop_behaviorContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_drop_behavior`.
     * @param ctx the parse tree
     */
    exitOpt_drop_behavior?: (ctx: Opt_drop_behaviorContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_collate_clause`.
     * @param ctx the parse tree
     */
    enterOpt_collate_clause?: (ctx: Opt_collate_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_collate_clause`.
     * @param ctx the parse tree
     */
    exitOpt_collate_clause?: (ctx: Opt_collate_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alter_using`.
     * @param ctx the parse tree
     */
    enterAlter_using?: (ctx: Alter_usingContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alter_using`.
     * @param ctx the parse tree
     */
    exitAlter_using?: (ctx: Alter_usingContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.replica_identity`.
     * @param ctx the parse tree
     */
    enterReplica_identity?: (ctx: Replica_identityContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.replica_identity`.
     * @param ctx the parse tree
     */
    exitReplica_identity?: (ctx: Replica_identityContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.reloptions`.
     * @param ctx the parse tree
     */
    enterReloptions?: (ctx: ReloptionsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.reloptions`.
     * @param ctx the parse tree
     */
    exitReloptions?: (ctx: ReloptionsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_reloptions`.
     * @param ctx the parse tree
     */
    enterOpt_reloptions?: (ctx: Opt_reloptionsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_reloptions`.
     * @param ctx the parse tree
     */
    exitOpt_reloptions?: (ctx: Opt_reloptionsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.reloption_list`.
     * @param ctx the parse tree
     */
    enterReloption_list?: (ctx: Reloption_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.reloption_list`.
     * @param ctx the parse tree
     */
    exitReloption_list?: (ctx: Reloption_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.reloption_elem`.
     * @param ctx the parse tree
     */
    enterReloption_elem?: (ctx: Reloption_elemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.reloption_elem`.
     * @param ctx the parse tree
     */
    exitReloption_elem?: (ctx: Reloption_elemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alter_identity_column_option_list`.
     * @param ctx the parse tree
     */
    enterAlter_identity_column_option_list?: (ctx: Alter_identity_column_option_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alter_identity_column_option_list`.
     * @param ctx the parse tree
     */
    exitAlter_identity_column_option_list?: (ctx: Alter_identity_column_option_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alter_identity_column_option`.
     * @param ctx the parse tree
     */
    enterAlter_identity_column_option?: (ctx: Alter_identity_column_optionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alter_identity_column_option`.
     * @param ctx the parse tree
     */
    exitAlter_identity_column_option?: (ctx: Alter_identity_column_optionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.partitionboundspec`.
     * @param ctx the parse tree
     */
    enterPartitionboundspec?: (ctx: PartitionboundspecContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.partitionboundspec`.
     * @param ctx the parse tree
     */
    exitPartitionboundspec?: (ctx: PartitionboundspecContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.hash_partbound_elem`.
     * @param ctx the parse tree
     */
    enterHash_partbound_elem?: (ctx: Hash_partbound_elemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.hash_partbound_elem`.
     * @param ctx the parse tree
     */
    exitHash_partbound_elem?: (ctx: Hash_partbound_elemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.hash_partbound`.
     * @param ctx the parse tree
     */
    enterHash_partbound?: (ctx: Hash_partboundContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.hash_partbound`.
     * @param ctx the parse tree
     */
    exitHash_partbound?: (ctx: Hash_partboundContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.altercompositetypestmt`.
     * @param ctx the parse tree
     */
    enterAltercompositetypestmt?: (ctx: AltercompositetypestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.altercompositetypestmt`.
     * @param ctx the parse tree
     */
    exitAltercompositetypestmt?: (ctx: AltercompositetypestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alter_type_cmds`.
     * @param ctx the parse tree
     */
    enterAlter_type_cmds?: (ctx: Alter_type_cmdsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alter_type_cmds`.
     * @param ctx the parse tree
     */
    exitAlter_type_cmds?: (ctx: Alter_type_cmdsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alter_type_cmd`.
     * @param ctx the parse tree
     */
    enterAlter_type_cmd?: (ctx: Alter_type_cmdContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alter_type_cmd`.
     * @param ctx the parse tree
     */
    exitAlter_type_cmd?: (ctx: Alter_type_cmdContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.closeportalstmt`.
     * @param ctx the parse tree
     */
    enterCloseportalstmt?: (ctx: CloseportalstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.closeportalstmt`.
     * @param ctx the parse tree
     */
    exitCloseportalstmt?: (ctx: CloseportalstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.copystmt`.
     * @param ctx the parse tree
     */
    enterCopystmt?: (ctx: CopystmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.copystmt`.
     * @param ctx the parse tree
     */
    exitCopystmt?: (ctx: CopystmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.copy_from`.
     * @param ctx the parse tree
     */
    enterCopy_from?: (ctx: Copy_fromContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.copy_from`.
     * @param ctx the parse tree
     */
    exitCopy_from?: (ctx: Copy_fromContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_program`.
     * @param ctx the parse tree
     */
    enterOpt_program?: (ctx: Opt_programContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_program`.
     * @param ctx the parse tree
     */
    exitOpt_program?: (ctx: Opt_programContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.copy_file_name`.
     * @param ctx the parse tree
     */
    enterCopy_file_name?: (ctx: Copy_file_nameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.copy_file_name`.
     * @param ctx the parse tree
     */
    exitCopy_file_name?: (ctx: Copy_file_nameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.copy_options`.
     * @param ctx the parse tree
     */
    enterCopy_options?: (ctx: Copy_optionsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.copy_options`.
     * @param ctx the parse tree
     */
    exitCopy_options?: (ctx: Copy_optionsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.copy_opt_list`.
     * @param ctx the parse tree
     */
    enterCopy_opt_list?: (ctx: Copy_opt_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.copy_opt_list`.
     * @param ctx the parse tree
     */
    exitCopy_opt_list?: (ctx: Copy_opt_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.copy_opt_item`.
     * @param ctx the parse tree
     */
    enterCopy_opt_item?: (ctx: Copy_opt_itemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.copy_opt_item`.
     * @param ctx the parse tree
     */
    exitCopy_opt_item?: (ctx: Copy_opt_itemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_binary`.
     * @param ctx the parse tree
     */
    enterOpt_binary?: (ctx: Opt_binaryContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_binary`.
     * @param ctx the parse tree
     */
    exitOpt_binary?: (ctx: Opt_binaryContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.copy_delimiter`.
     * @param ctx the parse tree
     */
    enterCopy_delimiter?: (ctx: Copy_delimiterContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.copy_delimiter`.
     * @param ctx the parse tree
     */
    exitCopy_delimiter?: (ctx: Copy_delimiterContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_using`.
     * @param ctx the parse tree
     */
    enterOpt_using?: (ctx: Opt_usingContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_using`.
     * @param ctx the parse tree
     */
    exitOpt_using?: (ctx: Opt_usingContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.copy_generic_opt_list`.
     * @param ctx the parse tree
     */
    enterCopy_generic_opt_list?: (ctx: Copy_generic_opt_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.copy_generic_opt_list`.
     * @param ctx the parse tree
     */
    exitCopy_generic_opt_list?: (ctx: Copy_generic_opt_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.copy_generic_opt_elem`.
     * @param ctx the parse tree
     */
    enterCopy_generic_opt_elem?: (ctx: Copy_generic_opt_elemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.copy_generic_opt_elem`.
     * @param ctx the parse tree
     */
    exitCopy_generic_opt_elem?: (ctx: Copy_generic_opt_elemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.copy_generic_opt_arg`.
     * @param ctx the parse tree
     */
    enterCopy_generic_opt_arg?: (ctx: Copy_generic_opt_argContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.copy_generic_opt_arg`.
     * @param ctx the parse tree
     */
    exitCopy_generic_opt_arg?: (ctx: Copy_generic_opt_argContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.copy_generic_opt_arg_list`.
     * @param ctx the parse tree
     */
    enterCopy_generic_opt_arg_list?: (ctx: Copy_generic_opt_arg_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.copy_generic_opt_arg_list`.
     * @param ctx the parse tree
     */
    exitCopy_generic_opt_arg_list?: (ctx: Copy_generic_opt_arg_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.copy_generic_opt_arg_list_item`.
     * @param ctx the parse tree
     */
    enterCopy_generic_opt_arg_list_item?: (ctx: Copy_generic_opt_arg_list_itemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.copy_generic_opt_arg_list_item`.
     * @param ctx the parse tree
     */
    exitCopy_generic_opt_arg_list_item?: (ctx: Copy_generic_opt_arg_list_itemContext) => void;
    /**
     * Enter a parse tree produced by the `columnCreateTable`
     * labeled alternative in `PostgreSQLParser.createstmt`.
     * @param ctx the parse tree
     */
    enterColumnCreateTable?: (ctx: ColumnCreateTableContext) => void;
    /**
     * Exit a parse tree produced by the `columnCreateTable`
     * labeled alternative in `PostgreSQLParser.createstmt`.
     * @param ctx the parse tree
     */
    exitColumnCreateTable?: (ctx: ColumnCreateTableContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opttemp`.
     * @param ctx the parse tree
     */
    enterOpttemp?: (ctx: OpttempContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opttemp`.
     * @param ctx the parse tree
     */
    exitOpttemp?: (ctx: OpttempContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.table_column_list`.
     * @param ctx the parse tree
     */
    enterTable_column_list?: (ctx: Table_column_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.table_column_list`.
     * @param ctx the parse tree
     */
    exitTable_column_list?: (ctx: Table_column_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opttableelementlist`.
     * @param ctx the parse tree
     */
    enterOpttableelementlist?: (ctx: OpttableelementlistContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opttableelementlist`.
     * @param ctx the parse tree
     */
    exitOpttableelementlist?: (ctx: OpttableelementlistContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opttypedtableelementlist`.
     * @param ctx the parse tree
     */
    enterOpttypedtableelementlist?: (ctx: OpttypedtableelementlistContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opttypedtableelementlist`.
     * @param ctx the parse tree
     */
    exitOpttypedtableelementlist?: (ctx: OpttypedtableelementlistContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.tableelementlist`.
     * @param ctx the parse tree
     */
    enterTableelementlist?: (ctx: TableelementlistContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.tableelementlist`.
     * @param ctx the parse tree
     */
    exitTableelementlist?: (ctx: TableelementlistContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.typedtableelementlist`.
     * @param ctx the parse tree
     */
    enterTypedtableelementlist?: (ctx: TypedtableelementlistContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.typedtableelementlist`.
     * @param ctx the parse tree
     */
    exitTypedtableelementlist?: (ctx: TypedtableelementlistContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.tableelement`.
     * @param ctx the parse tree
     */
    enterTableelement?: (ctx: TableelementContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.tableelement`.
     * @param ctx the parse tree
     */
    exitTableelement?: (ctx: TableelementContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.typedtableelement`.
     * @param ctx the parse tree
     */
    enterTypedtableelement?: (ctx: TypedtableelementContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.typedtableelement`.
     * @param ctx the parse tree
     */
    exitTypedtableelement?: (ctx: TypedtableelementContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.column_def`.
     * @param ctx the parse tree
     */
    enterColumn_def?: (ctx: Column_defContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.column_def`.
     * @param ctx the parse tree
     */
    exitColumn_def?: (ctx: Column_defContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.compressionCluase`.
     * @param ctx the parse tree
     */
    enterCompressionCluase?: (ctx: CompressionCluaseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.compressionCluase`.
     * @param ctx the parse tree
     */
    exitCompressionCluase?: (ctx: CompressionCluaseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.storageCluase`.
     * @param ctx the parse tree
     */
    enterStorageCluase?: (ctx: StorageCluaseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.storageCluase`.
     * @param ctx the parse tree
     */
    exitStorageCluase?: (ctx: StorageCluaseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.columnOptions`.
     * @param ctx the parse tree
     */
    enterColumnOptions?: (ctx: ColumnOptionsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.columnOptions`.
     * @param ctx the parse tree
     */
    exitColumnOptions?: (ctx: ColumnOptionsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.colquallist`.
     * @param ctx the parse tree
     */
    enterColquallist?: (ctx: ColquallistContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.colquallist`.
     * @param ctx the parse tree
     */
    exitColquallist?: (ctx: ColquallistContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.colconstraint`.
     * @param ctx the parse tree
     */
    enterColconstraint?: (ctx: ColconstraintContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.colconstraint`.
     * @param ctx the parse tree
     */
    exitColconstraint?: (ctx: ColconstraintContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.colconstraintelem`.
     * @param ctx the parse tree
     */
    enterColconstraintelem?: (ctx: ColconstraintelemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.colconstraintelem`.
     * @param ctx the parse tree
     */
    exitColconstraintelem?: (ctx: ColconstraintelemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.nulls_distinct`.
     * @param ctx the parse tree
     */
    enterNulls_distinct?: (ctx: Nulls_distinctContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.nulls_distinct`.
     * @param ctx the parse tree
     */
    exitNulls_distinct?: (ctx: Nulls_distinctContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.generated_when`.
     * @param ctx the parse tree
     */
    enterGenerated_when?: (ctx: Generated_whenContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.generated_when`.
     * @param ctx the parse tree
     */
    exitGenerated_when?: (ctx: Generated_whenContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.deferrable_trigger`.
     * @param ctx the parse tree
     */
    enterDeferrable_trigger?: (ctx: Deferrable_triggerContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.deferrable_trigger`.
     * @param ctx the parse tree
     */
    exitDeferrable_trigger?: (ctx: Deferrable_triggerContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.initially_trigger`.
     * @param ctx the parse tree
     */
    enterInitially_trigger?: (ctx: Initially_triggerContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.initially_trigger`.
     * @param ctx the parse tree
     */
    exitInitially_trigger?: (ctx: Initially_triggerContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.tablelikeclause`.
     * @param ctx the parse tree
     */
    enterTablelikeclause?: (ctx: TablelikeclauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.tablelikeclause`.
     * @param ctx the parse tree
     */
    exitTablelikeclause?: (ctx: TablelikeclauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.tablelikeoptionlist`.
     * @param ctx the parse tree
     */
    enterTablelikeoptionlist?: (ctx: TablelikeoptionlistContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.tablelikeoptionlist`.
     * @param ctx the parse tree
     */
    exitTablelikeoptionlist?: (ctx: TablelikeoptionlistContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.tablelikeoption`.
     * @param ctx the parse tree
     */
    enterTablelikeoption?: (ctx: TablelikeoptionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.tablelikeoption`.
     * @param ctx the parse tree
     */
    exitTablelikeoption?: (ctx: TablelikeoptionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.tableconstraint`.
     * @param ctx the parse tree
     */
    enterTableconstraint?: (ctx: TableconstraintContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.tableconstraint`.
     * @param ctx the parse tree
     */
    exitTableconstraint?: (ctx: TableconstraintContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.constraintelem`.
     * @param ctx the parse tree
     */
    enterConstraintelem?: (ctx: ConstraintelemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.constraintelem`.
     * @param ctx the parse tree
     */
    exitConstraintelem?: (ctx: ConstraintelemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_no_inherit`.
     * @param ctx the parse tree
     */
    enterOpt_no_inherit?: (ctx: Opt_no_inheritContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_no_inherit`.
     * @param ctx the parse tree
     */
    exitOpt_no_inherit?: (ctx: Opt_no_inheritContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_column_list`.
     * @param ctx the parse tree
     */
    enterOpt_column_list?: (ctx: Opt_column_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_column_list`.
     * @param ctx the parse tree
     */
    exitOpt_column_list?: (ctx: Opt_column_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_column_list_create`.
     * @param ctx the parse tree
     */
    enterOpt_column_list_create?: (ctx: Opt_column_list_createContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_column_list_create`.
     * @param ctx the parse tree
     */
    exitOpt_column_list_create?: (ctx: Opt_column_list_createContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.column_list`.
     * @param ctx the parse tree
     */
    enterColumn_list?: (ctx: Column_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.column_list`.
     * @param ctx the parse tree
     */
    exitColumn_list?: (ctx: Column_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.column_list_create`.
     * @param ctx the parse tree
     */
    enterColumn_list_create?: (ctx: Column_list_createContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.column_list_create`.
     * @param ctx the parse tree
     */
    exitColumn_list_create?: (ctx: Column_list_createContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_c_include`.
     * @param ctx the parse tree
     */
    enterOpt_c_include?: (ctx: Opt_c_includeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_c_include`.
     * @param ctx the parse tree
     */
    exitOpt_c_include?: (ctx: Opt_c_includeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.key_match`.
     * @param ctx the parse tree
     */
    enterKey_match?: (ctx: Key_matchContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.key_match`.
     * @param ctx the parse tree
     */
    exitKey_match?: (ctx: Key_matchContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.exclusionconstraintlist`.
     * @param ctx the parse tree
     */
    enterExclusionconstraintlist?: (ctx: ExclusionconstraintlistContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.exclusionconstraintlist`.
     * @param ctx the parse tree
     */
    exitExclusionconstraintlist?: (ctx: ExclusionconstraintlistContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.exclusionconstraintelem`.
     * @param ctx the parse tree
     */
    enterExclusionconstraintelem?: (ctx: ExclusionconstraintelemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.exclusionconstraintelem`.
     * @param ctx the parse tree
     */
    exitExclusionconstraintelem?: (ctx: ExclusionconstraintelemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.exclusionwhereclause`.
     * @param ctx the parse tree
     */
    enterExclusionwhereclause?: (ctx: ExclusionwhereclauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.exclusionwhereclause`.
     * @param ctx the parse tree
     */
    exitExclusionwhereclause?: (ctx: ExclusionwhereclauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.key_actions`.
     * @param ctx the parse tree
     */
    enterKey_actions?: (ctx: Key_actionsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.key_actions`.
     * @param ctx the parse tree
     */
    exitKey_actions?: (ctx: Key_actionsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.key_update`.
     * @param ctx the parse tree
     */
    enterKey_update?: (ctx: Key_updateContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.key_update`.
     * @param ctx the parse tree
     */
    exitKey_update?: (ctx: Key_updateContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.key_delete`.
     * @param ctx the parse tree
     */
    enterKey_delete?: (ctx: Key_deleteContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.key_delete`.
     * @param ctx the parse tree
     */
    exitKey_delete?: (ctx: Key_deleteContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.key_action`.
     * @param ctx the parse tree
     */
    enterKey_action?: (ctx: Key_actionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.key_action`.
     * @param ctx the parse tree
     */
    exitKey_action?: (ctx: Key_actionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.optinherit`.
     * @param ctx the parse tree
     */
    enterOptinherit?: (ctx: OptinheritContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.optinherit`.
     * @param ctx the parse tree
     */
    exitOptinherit?: (ctx: OptinheritContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.optpartitionspec`.
     * @param ctx the parse tree
     */
    enterOptpartitionspec?: (ctx: OptpartitionspecContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.optpartitionspec`.
     * @param ctx the parse tree
     */
    exitOptpartitionspec?: (ctx: OptpartitionspecContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.partitionspec`.
     * @param ctx the parse tree
     */
    enterPartitionspec?: (ctx: PartitionspecContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.partitionspec`.
     * @param ctx the parse tree
     */
    exitPartitionspec?: (ctx: PartitionspecContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.part_params`.
     * @param ctx the parse tree
     */
    enterPart_params?: (ctx: Part_paramsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.part_params`.
     * @param ctx the parse tree
     */
    exitPart_params?: (ctx: Part_paramsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.part_elem`.
     * @param ctx the parse tree
     */
    enterPart_elem?: (ctx: Part_elemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.part_elem`.
     * @param ctx the parse tree
     */
    exitPart_elem?: (ctx: Part_elemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.table_access_method_clause`.
     * @param ctx the parse tree
     */
    enterTable_access_method_clause?: (ctx: Table_access_method_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.table_access_method_clause`.
     * @param ctx the parse tree
     */
    exitTable_access_method_clause?: (ctx: Table_access_method_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.optwith`.
     * @param ctx the parse tree
     */
    enterOptwith?: (ctx: OptwithContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.optwith`.
     * @param ctx the parse tree
     */
    exitOptwith?: (ctx: OptwithContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.oncommitoption`.
     * @param ctx the parse tree
     */
    enterOncommitoption?: (ctx: OncommitoptionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.oncommitoption`.
     * @param ctx the parse tree
     */
    exitOncommitoption?: (ctx: OncommitoptionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opttablespace`.
     * @param ctx the parse tree
     */
    enterOpttablespace?: (ctx: OpttablespaceContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opttablespace`.
     * @param ctx the parse tree
     */
    exitOpttablespace?: (ctx: OpttablespaceContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.index_paramenters_create`.
     * @param ctx the parse tree
     */
    enterIndex_paramenters_create?: (ctx: Index_paramenters_createContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.index_paramenters_create`.
     * @param ctx the parse tree
     */
    exitIndex_paramenters_create?: (ctx: Index_paramenters_createContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.optconstablespace`.
     * @param ctx the parse tree
     */
    enterOptconstablespace?: (ctx: OptconstablespaceContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.optconstablespace`.
     * @param ctx the parse tree
     */
    exitOptconstablespace?: (ctx: OptconstablespaceContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.existingindex`.
     * @param ctx the parse tree
     */
    enterExistingindex?: (ctx: ExistingindexContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.existingindex`.
     * @param ctx the parse tree
     */
    exitExistingindex?: (ctx: ExistingindexContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.createstatsstmt`.
     * @param ctx the parse tree
     */
    enterCreatestatsstmt?: (ctx: CreatestatsstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.createstatsstmt`.
     * @param ctx the parse tree
     */
    exitCreatestatsstmt?: (ctx: CreatestatsstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alterstatsstmt`.
     * @param ctx the parse tree
     */
    enterAlterstatsstmt?: (ctx: AlterstatsstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alterstatsstmt`.
     * @param ctx the parse tree
     */
    exitAlterstatsstmt?: (ctx: AlterstatsstmtContext) => void;
    /**
     * Enter a parse tree produced by the `queryCreateTable`
     * labeled alternative in `PostgreSQLParser.createasstmt`.
     * @param ctx the parse tree
     */
    enterQueryCreateTable?: (ctx: QueryCreateTableContext) => void;
    /**
     * Exit a parse tree produced by the `queryCreateTable`
     * labeled alternative in `PostgreSQLParser.createasstmt`.
     * @param ctx the parse tree
     */
    exitQueryCreateTable?: (ctx: QueryCreateTableContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.create_as_target`.
     * @param ctx the parse tree
     */
    enterCreate_as_target?: (ctx: Create_as_targetContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.create_as_target`.
     * @param ctx the parse tree
     */
    exitCreate_as_target?: (ctx: Create_as_targetContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_with_data`.
     * @param ctx the parse tree
     */
    enterOpt_with_data?: (ctx: Opt_with_dataContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_with_data`.
     * @param ctx the parse tree
     */
    exitOpt_with_data?: (ctx: Opt_with_dataContext) => void;
    /**
     * Enter a parse tree produced by the `createMaterializedView`
     * labeled alternative in `PostgreSQLParser.creatematviewstmt`.
     * @param ctx the parse tree
     */
    enterCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => void;
    /**
     * Exit a parse tree produced by the `createMaterializedView`
     * labeled alternative in `PostgreSQLParser.creatematviewstmt`.
     * @param ctx the parse tree
     */
    exitCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.create_mv_target`.
     * @param ctx the parse tree
     */
    enterCreate_mv_target?: (ctx: Create_mv_targetContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.create_mv_target`.
     * @param ctx the parse tree
     */
    exitCreate_mv_target?: (ctx: Create_mv_targetContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.optnolog`.
     * @param ctx the parse tree
     */
    enterOptnolog?: (ctx: OptnologContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.optnolog`.
     * @param ctx the parse tree
     */
    exitOptnolog?: (ctx: OptnologContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.refreshmatviewstmt`.
     * @param ctx the parse tree
     */
    enterRefreshmatviewstmt?: (ctx: RefreshmatviewstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.refreshmatviewstmt`.
     * @param ctx the parse tree
     */
    exitRefreshmatviewstmt?: (ctx: RefreshmatviewstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.createseqstmt`.
     * @param ctx the parse tree
     */
    enterCreateseqstmt?: (ctx: CreateseqstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.createseqstmt`.
     * @param ctx the parse tree
     */
    exitCreateseqstmt?: (ctx: CreateseqstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alterseqstmt`.
     * @param ctx the parse tree
     */
    enterAlterseqstmt?: (ctx: AlterseqstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alterseqstmt`.
     * @param ctx the parse tree
     */
    exitAlterseqstmt?: (ctx: AlterseqstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.optseqoptlist`.
     * @param ctx the parse tree
     */
    enterOptseqoptlist?: (ctx: OptseqoptlistContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.optseqoptlist`.
     * @param ctx the parse tree
     */
    exitOptseqoptlist?: (ctx: OptseqoptlistContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.optparenthesizedseqoptlist`.
     * @param ctx the parse tree
     */
    enterOptparenthesizedseqoptlist?: (ctx: OptparenthesizedseqoptlistContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.optparenthesizedseqoptlist`.
     * @param ctx the parse tree
     */
    exitOptparenthesizedseqoptlist?: (ctx: OptparenthesizedseqoptlistContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.seqoptlist`.
     * @param ctx the parse tree
     */
    enterSeqoptlist?: (ctx: SeqoptlistContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.seqoptlist`.
     * @param ctx the parse tree
     */
    exitSeqoptlist?: (ctx: SeqoptlistContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.seqoptelem`.
     * @param ctx the parse tree
     */
    enterSeqoptelem?: (ctx: SeqoptelemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.seqoptelem`.
     * @param ctx the parse tree
     */
    exitSeqoptelem?: (ctx: SeqoptelemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_by`.
     * @param ctx the parse tree
     */
    enterOpt_by?: (ctx: Opt_byContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_by`.
     * @param ctx the parse tree
     */
    exitOpt_by?: (ctx: Opt_byContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.numericonly`.
     * @param ctx the parse tree
     */
    enterNumericonly?: (ctx: NumericonlyContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.numericonly`.
     * @param ctx the parse tree
     */
    exitNumericonly?: (ctx: NumericonlyContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.numericonly_list`.
     * @param ctx the parse tree
     */
    enterNumericonly_list?: (ctx: Numericonly_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.numericonly_list`.
     * @param ctx the parse tree
     */
    exitNumericonly_list?: (ctx: Numericonly_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.createplangstmt`.
     * @param ctx the parse tree
     */
    enterCreateplangstmt?: (ctx: CreateplangstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.createplangstmt`.
     * @param ctx the parse tree
     */
    exitCreateplangstmt?: (ctx: CreateplangstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_trusted`.
     * @param ctx the parse tree
     */
    enterOpt_trusted?: (ctx: Opt_trustedContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_trusted`.
     * @param ctx the parse tree
     */
    exitOpt_trusted?: (ctx: Opt_trustedContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.handler_name`.
     * @param ctx the parse tree
     */
    enterHandler_name?: (ctx: Handler_nameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.handler_name`.
     * @param ctx the parse tree
     */
    exitHandler_name?: (ctx: Handler_nameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_inline_handler`.
     * @param ctx the parse tree
     */
    enterOpt_inline_handler?: (ctx: Opt_inline_handlerContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_inline_handler`.
     * @param ctx the parse tree
     */
    exitOpt_inline_handler?: (ctx: Opt_inline_handlerContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.validator_clause`.
     * @param ctx the parse tree
     */
    enterValidator_clause?: (ctx: Validator_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.validator_clause`.
     * @param ctx the parse tree
     */
    exitValidator_clause?: (ctx: Validator_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_validator`.
     * @param ctx the parse tree
     */
    enterOpt_validator?: (ctx: Opt_validatorContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_validator`.
     * @param ctx the parse tree
     */
    exitOpt_validator?: (ctx: Opt_validatorContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_procedural`.
     * @param ctx the parse tree
     */
    enterOpt_procedural?: (ctx: Opt_proceduralContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_procedural`.
     * @param ctx the parse tree
     */
    exitOpt_procedural?: (ctx: Opt_proceduralContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.createtablespacestmt`.
     * @param ctx the parse tree
     */
    enterCreatetablespacestmt?: (ctx: CreatetablespacestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.createtablespacestmt`.
     * @param ctx the parse tree
     */
    exitCreatetablespacestmt?: (ctx: CreatetablespacestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opttablespaceowner`.
     * @param ctx the parse tree
     */
    enterOpttablespaceowner?: (ctx: OpttablespaceownerContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opttablespaceowner`.
     * @param ctx the parse tree
     */
    exitOpttablespaceowner?: (ctx: OpttablespaceownerContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.createextensionstmt`.
     * @param ctx the parse tree
     */
    enterCreateextensionstmt?: (ctx: CreateextensionstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.createextensionstmt`.
     * @param ctx the parse tree
     */
    exitCreateextensionstmt?: (ctx: CreateextensionstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.create_extension_opt_list`.
     * @param ctx the parse tree
     */
    enterCreate_extension_opt_list?: (ctx: Create_extension_opt_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.create_extension_opt_list`.
     * @param ctx the parse tree
     */
    exitCreate_extension_opt_list?: (ctx: Create_extension_opt_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.create_extension_opt_item`.
     * @param ctx the parse tree
     */
    enterCreate_extension_opt_item?: (ctx: Create_extension_opt_itemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.create_extension_opt_item`.
     * @param ctx the parse tree
     */
    exitCreate_extension_opt_item?: (ctx: Create_extension_opt_itemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alterextensionstmt`.
     * @param ctx the parse tree
     */
    enterAlterextensionstmt?: (ctx: AlterextensionstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alterextensionstmt`.
     * @param ctx the parse tree
     */
    exitAlterextensionstmt?: (ctx: AlterextensionstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alter_extension_opt_list`.
     * @param ctx the parse tree
     */
    enterAlter_extension_opt_list?: (ctx: Alter_extension_opt_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alter_extension_opt_list`.
     * @param ctx the parse tree
     */
    exitAlter_extension_opt_list?: (ctx: Alter_extension_opt_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alter_extension_opt_item`.
     * @param ctx the parse tree
     */
    enterAlter_extension_opt_item?: (ctx: Alter_extension_opt_itemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alter_extension_opt_item`.
     * @param ctx the parse tree
     */
    exitAlter_extension_opt_item?: (ctx: Alter_extension_opt_itemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alterextensioncontentsstmt`.
     * @param ctx the parse tree
     */
    enterAlterextensioncontentsstmt?: (ctx: AlterextensioncontentsstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alterextensioncontentsstmt`.
     * @param ctx the parse tree
     */
    exitAlterextensioncontentsstmt?: (ctx: AlterextensioncontentsstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.createfdwstmt`.
     * @param ctx the parse tree
     */
    enterCreatefdwstmt?: (ctx: CreatefdwstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.createfdwstmt`.
     * @param ctx the parse tree
     */
    exitCreatefdwstmt?: (ctx: CreatefdwstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.fdw_option`.
     * @param ctx the parse tree
     */
    enterFdw_option?: (ctx: Fdw_optionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.fdw_option`.
     * @param ctx the parse tree
     */
    exitFdw_option?: (ctx: Fdw_optionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.fdw_options`.
     * @param ctx the parse tree
     */
    enterFdw_options?: (ctx: Fdw_optionsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.fdw_options`.
     * @param ctx the parse tree
     */
    exitFdw_options?: (ctx: Fdw_optionsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_fdw_options`.
     * @param ctx the parse tree
     */
    enterOpt_fdw_options?: (ctx: Opt_fdw_optionsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_fdw_options`.
     * @param ctx the parse tree
     */
    exitOpt_fdw_options?: (ctx: Opt_fdw_optionsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alterfdwstmt`.
     * @param ctx the parse tree
     */
    enterAlterfdwstmt?: (ctx: AlterfdwstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alterfdwstmt`.
     * @param ctx the parse tree
     */
    exitAlterfdwstmt?: (ctx: AlterfdwstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.create_generic_options`.
     * @param ctx the parse tree
     */
    enterCreate_generic_options?: (ctx: Create_generic_optionsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.create_generic_options`.
     * @param ctx the parse tree
     */
    exitCreate_generic_options?: (ctx: Create_generic_optionsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.generic_option_list`.
     * @param ctx the parse tree
     */
    enterGeneric_option_list?: (ctx: Generic_option_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.generic_option_list`.
     * @param ctx the parse tree
     */
    exitGeneric_option_list?: (ctx: Generic_option_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alter_generic_options`.
     * @param ctx the parse tree
     */
    enterAlter_generic_options?: (ctx: Alter_generic_optionsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alter_generic_options`.
     * @param ctx the parse tree
     */
    exitAlter_generic_options?: (ctx: Alter_generic_optionsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alter_generic_option_list`.
     * @param ctx the parse tree
     */
    enterAlter_generic_option_list?: (ctx: Alter_generic_option_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alter_generic_option_list`.
     * @param ctx the parse tree
     */
    exitAlter_generic_option_list?: (ctx: Alter_generic_option_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alter_generic_option_elem`.
     * @param ctx the parse tree
     */
    enterAlter_generic_option_elem?: (ctx: Alter_generic_option_elemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alter_generic_option_elem`.
     * @param ctx the parse tree
     */
    exitAlter_generic_option_elem?: (ctx: Alter_generic_option_elemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.generic_option_elem`.
     * @param ctx the parse tree
     */
    enterGeneric_option_elem?: (ctx: Generic_option_elemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.generic_option_elem`.
     * @param ctx the parse tree
     */
    exitGeneric_option_elem?: (ctx: Generic_option_elemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.generic_option_name`.
     * @param ctx the parse tree
     */
    enterGeneric_option_name?: (ctx: Generic_option_nameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.generic_option_name`.
     * @param ctx the parse tree
     */
    exitGeneric_option_name?: (ctx: Generic_option_nameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.generic_option_arg`.
     * @param ctx the parse tree
     */
    enterGeneric_option_arg?: (ctx: Generic_option_argContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.generic_option_arg`.
     * @param ctx the parse tree
     */
    exitGeneric_option_arg?: (ctx: Generic_option_argContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.createforeignserverstmt`.
     * @param ctx the parse tree
     */
    enterCreateforeignserverstmt?: (ctx: CreateforeignserverstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.createforeignserverstmt`.
     * @param ctx the parse tree
     */
    exitCreateforeignserverstmt?: (ctx: CreateforeignserverstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_type`.
     * @param ctx the parse tree
     */
    enterOpt_type?: (ctx: Opt_typeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_type`.
     * @param ctx the parse tree
     */
    exitOpt_type?: (ctx: Opt_typeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.foreign_server_version`.
     * @param ctx the parse tree
     */
    enterForeign_server_version?: (ctx: Foreign_server_versionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.foreign_server_version`.
     * @param ctx the parse tree
     */
    exitForeign_server_version?: (ctx: Foreign_server_versionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_foreign_server_version`.
     * @param ctx the parse tree
     */
    enterOpt_foreign_server_version?: (ctx: Opt_foreign_server_versionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_foreign_server_version`.
     * @param ctx the parse tree
     */
    exitOpt_foreign_server_version?: (ctx: Opt_foreign_server_versionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alterforeignserverstmt`.
     * @param ctx the parse tree
     */
    enterAlterforeignserverstmt?: (ctx: AlterforeignserverstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alterforeignserverstmt`.
     * @param ctx the parse tree
     */
    exitAlterforeignserverstmt?: (ctx: AlterforeignserverstmtContext) => void;
    /**
     * Enter a parse tree produced by the `createForeignTable`
     * labeled alternative in `PostgreSQLParser.createforeigntablestmt`.
     * @param ctx the parse tree
     */
    enterCreateForeignTable?: (ctx: CreateForeignTableContext) => void;
    /**
     * Exit a parse tree produced by the `createForeignTable`
     * labeled alternative in `PostgreSQLParser.createforeigntablestmt`.
     * @param ctx the parse tree
     */
    exitCreateForeignTable?: (ctx: CreateForeignTableContext) => void;
    /**
     * Enter a parse tree produced by the `createPartitionForeignTable`
     * labeled alternative in `PostgreSQLParser.createforeigntablestmt`.
     * @param ctx the parse tree
     */
    enterCreatePartitionForeignTable?: (ctx: CreatePartitionForeignTableContext) => void;
    /**
     * Exit a parse tree produced by the `createPartitionForeignTable`
     * labeled alternative in `PostgreSQLParser.createforeigntablestmt`.
     * @param ctx the parse tree
     */
    exitCreatePartitionForeignTable?: (ctx: CreatePartitionForeignTableContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.importforeignschemastmt`.
     * @param ctx the parse tree
     */
    enterImportforeignschemastmt?: (ctx: ImportforeignschemastmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.importforeignschemastmt`.
     * @param ctx the parse tree
     */
    exitImportforeignschemastmt?: (ctx: ImportforeignschemastmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.import_qualification_type`.
     * @param ctx the parse tree
     */
    enterImport_qualification_type?: (ctx: Import_qualification_typeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.import_qualification_type`.
     * @param ctx the parse tree
     */
    exitImport_qualification_type?: (ctx: Import_qualification_typeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.import_qualification`.
     * @param ctx the parse tree
     */
    enterImport_qualification?: (ctx: Import_qualificationContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.import_qualification`.
     * @param ctx the parse tree
     */
    exitImport_qualification?: (ctx: Import_qualificationContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.createusermappingstmt`.
     * @param ctx the parse tree
     */
    enterCreateusermappingstmt?: (ctx: CreateusermappingstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.createusermappingstmt`.
     * @param ctx the parse tree
     */
    exitCreateusermappingstmt?: (ctx: CreateusermappingstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.auth_ident`.
     * @param ctx the parse tree
     */
    enterAuth_ident?: (ctx: Auth_identContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.auth_ident`.
     * @param ctx the parse tree
     */
    exitAuth_ident?: (ctx: Auth_identContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alterusermappingstmt`.
     * @param ctx the parse tree
     */
    enterAlterusermappingstmt?: (ctx: AlterusermappingstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alterusermappingstmt`.
     * @param ctx the parse tree
     */
    exitAlterusermappingstmt?: (ctx: AlterusermappingstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.createpolicystmt`.
     * @param ctx the parse tree
     */
    enterCreatepolicystmt?: (ctx: CreatepolicystmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.createpolicystmt`.
     * @param ctx the parse tree
     */
    exitCreatepolicystmt?: (ctx: CreatepolicystmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alterpolicystmt`.
     * @param ctx the parse tree
     */
    enterAlterpolicystmt?: (ctx: AlterpolicystmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alterpolicystmt`.
     * @param ctx the parse tree
     */
    exitAlterpolicystmt?: (ctx: AlterpolicystmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alterprocedurestmt`.
     * @param ctx the parse tree
     */
    enterAlterprocedurestmt?: (ctx: AlterprocedurestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alterprocedurestmt`.
     * @param ctx the parse tree
     */
    exitAlterprocedurestmt?: (ctx: AlterprocedurestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.procedure_cluase`.
     * @param ctx the parse tree
     */
    enterProcedure_cluase?: (ctx: Procedure_cluaseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.procedure_cluase`.
     * @param ctx the parse tree
     */
    exitProcedure_cluase?: (ctx: Procedure_cluaseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.procedure_action`.
     * @param ctx the parse tree
     */
    enterProcedure_action?: (ctx: Procedure_actionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.procedure_action`.
     * @param ctx the parse tree
     */
    exitProcedure_action?: (ctx: Procedure_actionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.rowsecurityoptionalexpr`.
     * @param ctx the parse tree
     */
    enterRowsecurityoptionalexpr?: (ctx: RowsecurityoptionalexprContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.rowsecurityoptionalexpr`.
     * @param ctx the parse tree
     */
    exitRowsecurityoptionalexpr?: (ctx: RowsecurityoptionalexprContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.rowsecurityoptionalwithcheck`.
     * @param ctx the parse tree
     */
    enterRowsecurityoptionalwithcheck?: (ctx: RowsecurityoptionalwithcheckContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.rowsecurityoptionalwithcheck`.
     * @param ctx the parse tree
     */
    exitRowsecurityoptionalwithcheck?: (ctx: RowsecurityoptionalwithcheckContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.rowsecuritydefaulttorole`.
     * @param ctx the parse tree
     */
    enterRowsecuritydefaulttorole?: (ctx: RowsecuritydefaulttoroleContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.rowsecuritydefaulttorole`.
     * @param ctx the parse tree
     */
    exitRowsecuritydefaulttorole?: (ctx: RowsecuritydefaulttoroleContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.rowsecurityoptionaltorole`.
     * @param ctx the parse tree
     */
    enterRowsecurityoptionaltorole?: (ctx: RowsecurityoptionaltoroleContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.rowsecurityoptionaltorole`.
     * @param ctx the parse tree
     */
    exitRowsecurityoptionaltorole?: (ctx: RowsecurityoptionaltoroleContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.rowsecuritydefaultpermissive`.
     * @param ctx the parse tree
     */
    enterRowsecuritydefaultpermissive?: (ctx: RowsecuritydefaultpermissiveContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.rowsecuritydefaultpermissive`.
     * @param ctx the parse tree
     */
    exitRowsecuritydefaultpermissive?: (ctx: RowsecuritydefaultpermissiveContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.rowsecuritydefaultforcmd`.
     * @param ctx the parse tree
     */
    enterRowsecuritydefaultforcmd?: (ctx: RowsecuritydefaultforcmdContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.rowsecuritydefaultforcmd`.
     * @param ctx the parse tree
     */
    exitRowsecuritydefaultforcmd?: (ctx: RowsecuritydefaultforcmdContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.row_security_cmd`.
     * @param ctx the parse tree
     */
    enterRow_security_cmd?: (ctx: Row_security_cmdContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.row_security_cmd`.
     * @param ctx the parse tree
     */
    exitRow_security_cmd?: (ctx: Row_security_cmdContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.createamstmt`.
     * @param ctx the parse tree
     */
    enterCreateamstmt?: (ctx: CreateamstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.createamstmt`.
     * @param ctx the parse tree
     */
    exitCreateamstmt?: (ctx: CreateamstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.am_type`.
     * @param ctx the parse tree
     */
    enterAm_type?: (ctx: Am_typeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.am_type`.
     * @param ctx the parse tree
     */
    exitAm_type?: (ctx: Am_typeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.createtrigstmt`.
     * @param ctx the parse tree
     */
    enterCreatetrigstmt?: (ctx: CreatetrigstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.createtrigstmt`.
     * @param ctx the parse tree
     */
    exitCreatetrigstmt?: (ctx: CreatetrigstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.triggeractiontime`.
     * @param ctx the parse tree
     */
    enterTriggeractiontime?: (ctx: TriggeractiontimeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.triggeractiontime`.
     * @param ctx the parse tree
     */
    exitTriggeractiontime?: (ctx: TriggeractiontimeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.foreachrow`.
     * @param ctx the parse tree
     */
    enterForeachrow?: (ctx: ForeachrowContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.foreachrow`.
     * @param ctx the parse tree
     */
    exitForeachrow?: (ctx: ForeachrowContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.roworstatment`.
     * @param ctx the parse tree
     */
    enterRoworstatment?: (ctx: RoworstatmentContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.roworstatment`.
     * @param ctx the parse tree
     */
    exitRoworstatment?: (ctx: RoworstatmentContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.triggerevents`.
     * @param ctx the parse tree
     */
    enterTriggerevents?: (ctx: TriggereventsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.triggerevents`.
     * @param ctx the parse tree
     */
    exitTriggerevents?: (ctx: TriggereventsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.triggeroneevent`.
     * @param ctx the parse tree
     */
    enterTriggeroneevent?: (ctx: TriggeroneeventContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.triggeroneevent`.
     * @param ctx the parse tree
     */
    exitTriggeroneevent?: (ctx: TriggeroneeventContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.triggerreferencing`.
     * @param ctx the parse tree
     */
    enterTriggerreferencing?: (ctx: TriggerreferencingContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.triggerreferencing`.
     * @param ctx the parse tree
     */
    exitTriggerreferencing?: (ctx: TriggerreferencingContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.triggertransitions`.
     * @param ctx the parse tree
     */
    enterTriggertransitions?: (ctx: TriggertransitionsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.triggertransitions`.
     * @param ctx the parse tree
     */
    exitTriggertransitions?: (ctx: TriggertransitionsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.triggertransition`.
     * @param ctx the parse tree
     */
    enterTriggertransition?: (ctx: TriggertransitionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.triggertransition`.
     * @param ctx the parse tree
     */
    exitTriggertransition?: (ctx: TriggertransitionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.transitionoldornew`.
     * @param ctx the parse tree
     */
    enterTransitionoldornew?: (ctx: TransitionoldornewContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.transitionoldornew`.
     * @param ctx the parse tree
     */
    exitTransitionoldornew?: (ctx: TransitionoldornewContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.transitionrowortable`.
     * @param ctx the parse tree
     */
    enterTransitionrowortable?: (ctx: TransitionrowortableContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.transitionrowortable`.
     * @param ctx the parse tree
     */
    exitTransitionrowortable?: (ctx: TransitionrowortableContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.transitionrelname`.
     * @param ctx the parse tree
     */
    enterTransitionrelname?: (ctx: TransitionrelnameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.transitionrelname`.
     * @param ctx the parse tree
     */
    exitTransitionrelname?: (ctx: TransitionrelnameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.triggerforspec`.
     * @param ctx the parse tree
     */
    enterTriggerforspec?: (ctx: TriggerforspecContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.triggerforspec`.
     * @param ctx the parse tree
     */
    exitTriggerforspec?: (ctx: TriggerforspecContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.triggerforopteach`.
     * @param ctx the parse tree
     */
    enterTriggerforopteach?: (ctx: TriggerforopteachContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.triggerforopteach`.
     * @param ctx the parse tree
     */
    exitTriggerforopteach?: (ctx: TriggerforopteachContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.triggerfortype`.
     * @param ctx the parse tree
     */
    enterTriggerfortype?: (ctx: TriggerfortypeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.triggerfortype`.
     * @param ctx the parse tree
     */
    exitTriggerfortype?: (ctx: TriggerfortypeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.triggerwhen`.
     * @param ctx the parse tree
     */
    enterTriggerwhen?: (ctx: TriggerwhenContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.triggerwhen`.
     * @param ctx the parse tree
     */
    exitTriggerwhen?: (ctx: TriggerwhenContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.function_or_procedure`.
     * @param ctx the parse tree
     */
    enterFunction_or_procedure?: (ctx: Function_or_procedureContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.function_or_procedure`.
     * @param ctx the parse tree
     */
    exitFunction_or_procedure?: (ctx: Function_or_procedureContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.triggerfuncargs`.
     * @param ctx the parse tree
     */
    enterTriggerfuncargs?: (ctx: TriggerfuncargsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.triggerfuncargs`.
     * @param ctx the parse tree
     */
    exitTriggerfuncargs?: (ctx: TriggerfuncargsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.triggerfuncarg`.
     * @param ctx the parse tree
     */
    enterTriggerfuncarg?: (ctx: TriggerfuncargContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.triggerfuncarg`.
     * @param ctx the parse tree
     */
    exitTriggerfuncarg?: (ctx: TriggerfuncargContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.optconstrfromtable`.
     * @param ctx the parse tree
     */
    enterOptconstrfromtable?: (ctx: OptconstrfromtableContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.optconstrfromtable`.
     * @param ctx the parse tree
     */
    exitOptconstrfromtable?: (ctx: OptconstrfromtableContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.constraintattributespec`.
     * @param ctx the parse tree
     */
    enterConstraintattributespec?: (ctx: ConstraintattributespecContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.constraintattributespec`.
     * @param ctx the parse tree
     */
    exitConstraintattributespec?: (ctx: ConstraintattributespecContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.constraintattributeElem`.
     * @param ctx the parse tree
     */
    enterConstraintattributeElem?: (ctx: ConstraintattributeElemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.constraintattributeElem`.
     * @param ctx the parse tree
     */
    exitConstraintattributeElem?: (ctx: ConstraintattributeElemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.createeventtrigstmt`.
     * @param ctx the parse tree
     */
    enterCreateeventtrigstmt?: (ctx: CreateeventtrigstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.createeventtrigstmt`.
     * @param ctx the parse tree
     */
    exitCreateeventtrigstmt?: (ctx: CreateeventtrigstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.event_trigger_when_list`.
     * @param ctx the parse tree
     */
    enterEvent_trigger_when_list?: (ctx: Event_trigger_when_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.event_trigger_when_list`.
     * @param ctx the parse tree
     */
    exitEvent_trigger_when_list?: (ctx: Event_trigger_when_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.event_trigger_when_item`.
     * @param ctx the parse tree
     */
    enterEvent_trigger_when_item?: (ctx: Event_trigger_when_itemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.event_trigger_when_item`.
     * @param ctx the parse tree
     */
    exitEvent_trigger_when_item?: (ctx: Event_trigger_when_itemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.event_trigger_value_list`.
     * @param ctx the parse tree
     */
    enterEvent_trigger_value_list?: (ctx: Event_trigger_value_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.event_trigger_value_list`.
     * @param ctx the parse tree
     */
    exitEvent_trigger_value_list?: (ctx: Event_trigger_value_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.altereventtrigstmt`.
     * @param ctx the parse tree
     */
    enterAltereventtrigstmt?: (ctx: AltereventtrigstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.altereventtrigstmt`.
     * @param ctx the parse tree
     */
    exitAltereventtrigstmt?: (ctx: AltereventtrigstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.enable_trigger`.
     * @param ctx the parse tree
     */
    enterEnable_trigger?: (ctx: Enable_triggerContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.enable_trigger`.
     * @param ctx the parse tree
     */
    exitEnable_trigger?: (ctx: Enable_triggerContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.createassertionstmt`.
     * @param ctx the parse tree
     */
    enterCreateassertionstmt?: (ctx: CreateassertionstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.createassertionstmt`.
     * @param ctx the parse tree
     */
    exitCreateassertionstmt?: (ctx: CreateassertionstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.definestmt`.
     * @param ctx the parse tree
     */
    enterDefinestmt?: (ctx: DefinestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.definestmt`.
     * @param ctx the parse tree
     */
    exitDefinestmt?: (ctx: DefinestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.definition`.
     * @param ctx the parse tree
     */
    enterDefinition?: (ctx: DefinitionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.definition`.
     * @param ctx the parse tree
     */
    exitDefinition?: (ctx: DefinitionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.def_list`.
     * @param ctx the parse tree
     */
    enterDef_list?: (ctx: Def_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.def_list`.
     * @param ctx the parse tree
     */
    exitDef_list?: (ctx: Def_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.def_elem`.
     * @param ctx the parse tree
     */
    enterDef_elem?: (ctx: Def_elemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.def_elem`.
     * @param ctx the parse tree
     */
    exitDef_elem?: (ctx: Def_elemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.def_arg`.
     * @param ctx the parse tree
     */
    enterDef_arg?: (ctx: Def_argContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.def_arg`.
     * @param ctx the parse tree
     */
    exitDef_arg?: (ctx: Def_argContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.old_aggr_definition`.
     * @param ctx the parse tree
     */
    enterOld_aggr_definition?: (ctx: Old_aggr_definitionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.old_aggr_definition`.
     * @param ctx the parse tree
     */
    exitOld_aggr_definition?: (ctx: Old_aggr_definitionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.old_aggr_list`.
     * @param ctx the parse tree
     */
    enterOld_aggr_list?: (ctx: Old_aggr_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.old_aggr_list`.
     * @param ctx the parse tree
     */
    exitOld_aggr_list?: (ctx: Old_aggr_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.old_aggr_elem`.
     * @param ctx the parse tree
     */
    enterOld_aggr_elem?: (ctx: Old_aggr_elemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.old_aggr_elem`.
     * @param ctx the parse tree
     */
    exitOld_aggr_elem?: (ctx: Old_aggr_elemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_enum_val_list`.
     * @param ctx the parse tree
     */
    enterOpt_enum_val_list?: (ctx: Opt_enum_val_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_enum_val_list`.
     * @param ctx the parse tree
     */
    exitOpt_enum_val_list?: (ctx: Opt_enum_val_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.enum_val_list`.
     * @param ctx the parse tree
     */
    enterEnum_val_list?: (ctx: Enum_val_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.enum_val_list`.
     * @param ctx the parse tree
     */
    exitEnum_val_list?: (ctx: Enum_val_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alterenumstmt`.
     * @param ctx the parse tree
     */
    enterAlterenumstmt?: (ctx: AlterenumstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alterenumstmt`.
     * @param ctx the parse tree
     */
    exitAlterenumstmt?: (ctx: AlterenumstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_if_not_exists`.
     * @param ctx the parse tree
     */
    enterOpt_if_not_exists?: (ctx: Opt_if_not_existsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_if_not_exists`.
     * @param ctx the parse tree
     */
    exitOpt_if_not_exists?: (ctx: Opt_if_not_existsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.createopclassstmt`.
     * @param ctx the parse tree
     */
    enterCreateopclassstmt?: (ctx: CreateopclassstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.createopclassstmt`.
     * @param ctx the parse tree
     */
    exitCreateopclassstmt?: (ctx: CreateopclassstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opclass_item_list`.
     * @param ctx the parse tree
     */
    enterOpclass_item_list?: (ctx: Opclass_item_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opclass_item_list`.
     * @param ctx the parse tree
     */
    exitOpclass_item_list?: (ctx: Opclass_item_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opclass_item`.
     * @param ctx the parse tree
     */
    enterOpclass_item?: (ctx: Opclass_itemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opclass_item`.
     * @param ctx the parse tree
     */
    exitOpclass_item?: (ctx: Opclass_itemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_default`.
     * @param ctx the parse tree
     */
    enterOpt_default?: (ctx: Opt_defaultContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_default`.
     * @param ctx the parse tree
     */
    exitOpt_default?: (ctx: Opt_defaultContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_opfamily`.
     * @param ctx the parse tree
     */
    enterOpt_opfamily?: (ctx: Opt_opfamilyContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_opfamily`.
     * @param ctx the parse tree
     */
    exitOpt_opfamily?: (ctx: Opt_opfamilyContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opclass_purpose`.
     * @param ctx the parse tree
     */
    enterOpclass_purpose?: (ctx: Opclass_purposeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opclass_purpose`.
     * @param ctx the parse tree
     */
    exitOpclass_purpose?: (ctx: Opclass_purposeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_recheck`.
     * @param ctx the parse tree
     */
    enterOpt_recheck?: (ctx: Opt_recheckContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_recheck`.
     * @param ctx the parse tree
     */
    exitOpt_recheck?: (ctx: Opt_recheckContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.createopfamilystmt`.
     * @param ctx the parse tree
     */
    enterCreateopfamilystmt?: (ctx: CreateopfamilystmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.createopfamilystmt`.
     * @param ctx the parse tree
     */
    exitCreateopfamilystmt?: (ctx: CreateopfamilystmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alteropfamilystmt`.
     * @param ctx the parse tree
     */
    enterAlteropfamilystmt?: (ctx: AlteropfamilystmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alteropfamilystmt`.
     * @param ctx the parse tree
     */
    exitAlteropfamilystmt?: (ctx: AlteropfamilystmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opclass_drop_list`.
     * @param ctx the parse tree
     */
    enterOpclass_drop_list?: (ctx: Opclass_drop_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opclass_drop_list`.
     * @param ctx the parse tree
     */
    exitOpclass_drop_list?: (ctx: Opclass_drop_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opclass_drop`.
     * @param ctx the parse tree
     */
    enterOpclass_drop?: (ctx: Opclass_dropContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opclass_drop`.
     * @param ctx the parse tree
     */
    exitOpclass_drop?: (ctx: Opclass_dropContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.reassignownedstmt`.
     * @param ctx the parse tree
     */
    enterReassignownedstmt?: (ctx: ReassignownedstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.reassignownedstmt`.
     * @param ctx the parse tree
     */
    exitReassignownedstmt?: (ctx: ReassignownedstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.dropstmt`.
     * @param ctx the parse tree
     */
    enterDropstmt?: (ctx: DropstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.dropstmt`.
     * @param ctx the parse tree
     */
    exitDropstmt?: (ctx: DropstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.view_nameList`.
     * @param ctx the parse tree
     */
    enterView_nameList?: (ctx: View_nameListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.view_nameList`.
     * @param ctx the parse tree
     */
    exitView_nameList?: (ctx: View_nameListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.object_type_any_name`.
     * @param ctx the parse tree
     */
    enterObject_type_any_name?: (ctx: Object_type_any_nameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.object_type_any_name`.
     * @param ctx the parse tree
     */
    exitObject_type_any_name?: (ctx: Object_type_any_nameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.object_type_name`.
     * @param ctx the parse tree
     */
    enterObject_type_name?: (ctx: Object_type_nameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.object_type_name`.
     * @param ctx the parse tree
     */
    exitObject_type_name?: (ctx: Object_type_nameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.object_type_name_on_any_name`.
     * @param ctx the parse tree
     */
    enterObject_type_name_on_any_name?: (ctx: Object_type_name_on_any_nameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.object_type_name_on_any_name`.
     * @param ctx the parse tree
     */
    exitObject_type_name_on_any_name?: (ctx: Object_type_name_on_any_nameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.any_name_list`.
     * @param ctx the parse tree
     */
    enterAny_name_list?: (ctx: Any_name_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.any_name_list`.
     * @param ctx the parse tree
     */
    exitAny_name_list?: (ctx: Any_name_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.table_column_name`.
     * @param ctx the parse tree
     */
    enterTable_column_name?: (ctx: Table_column_nameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.table_column_name`.
     * @param ctx the parse tree
     */
    exitTable_column_name?: (ctx: Table_column_nameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.relation_column_name`.
     * @param ctx the parse tree
     */
    enterRelation_column_name?: (ctx: Relation_column_nameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.relation_column_name`.
     * @param ctx the parse tree
     */
    exitRelation_column_name?: (ctx: Relation_column_nameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.relation_name`.
     * @param ctx the parse tree
     */
    enterRelation_name?: (ctx: Relation_nameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.relation_name`.
     * @param ctx the parse tree
     */
    exitRelation_name?: (ctx: Relation_nameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.any_name`.
     * @param ctx the parse tree
     */
    enterAny_name?: (ctx: Any_nameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.any_name`.
     * @param ctx the parse tree
     */
    exitAny_name?: (ctx: Any_nameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.attrs`.
     * @param ctx the parse tree
     */
    enterAttrs?: (ctx: AttrsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.attrs`.
     * @param ctx the parse tree
     */
    exitAttrs?: (ctx: AttrsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.type_name_list`.
     * @param ctx the parse tree
     */
    enterType_name_list?: (ctx: Type_name_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.type_name_list`.
     * @param ctx the parse tree
     */
    exitType_name_list?: (ctx: Type_name_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.truncatestmt`.
     * @param ctx the parse tree
     */
    enterTruncatestmt?: (ctx: TruncatestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.truncatestmt`.
     * @param ctx the parse tree
     */
    exitTruncatestmt?: (ctx: TruncatestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_restart_seqs`.
     * @param ctx the parse tree
     */
    enterOpt_restart_seqs?: (ctx: Opt_restart_seqsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_restart_seqs`.
     * @param ctx the parse tree
     */
    exitOpt_restart_seqs?: (ctx: Opt_restart_seqsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.commentstmt`.
     * @param ctx the parse tree
     */
    enterCommentstmt?: (ctx: CommentstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.commentstmt`.
     * @param ctx the parse tree
     */
    exitCommentstmt?: (ctx: CommentstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.comment_text`.
     * @param ctx the parse tree
     */
    enterComment_text?: (ctx: Comment_textContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.comment_text`.
     * @param ctx the parse tree
     */
    exitComment_text?: (ctx: Comment_textContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.seclabelstmt`.
     * @param ctx the parse tree
     */
    enterSeclabelstmt?: (ctx: SeclabelstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.seclabelstmt`.
     * @param ctx the parse tree
     */
    exitSeclabelstmt?: (ctx: SeclabelstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_provider`.
     * @param ctx the parse tree
     */
    enterOpt_provider?: (ctx: Opt_providerContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_provider`.
     * @param ctx the parse tree
     */
    exitOpt_provider?: (ctx: Opt_providerContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.security_label`.
     * @param ctx the parse tree
     */
    enterSecurity_label?: (ctx: Security_labelContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.security_label`.
     * @param ctx the parse tree
     */
    exitSecurity_label?: (ctx: Security_labelContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.fetchstmt`.
     * @param ctx the parse tree
     */
    enterFetchstmt?: (ctx: FetchstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.fetchstmt`.
     * @param ctx the parse tree
     */
    exitFetchstmt?: (ctx: FetchstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.fetch_args`.
     * @param ctx the parse tree
     */
    enterFetch_args?: (ctx: Fetch_argsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.fetch_args`.
     * @param ctx the parse tree
     */
    exitFetch_args?: (ctx: Fetch_argsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.from_in`.
     * @param ctx the parse tree
     */
    enterFrom_in?: (ctx: From_inContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.from_in`.
     * @param ctx the parse tree
     */
    exitFrom_in?: (ctx: From_inContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_from_in`.
     * @param ctx the parse tree
     */
    enterOpt_from_in?: (ctx: Opt_from_inContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_from_in`.
     * @param ctx the parse tree
     */
    exitOpt_from_in?: (ctx: Opt_from_inContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.grantstmt`.
     * @param ctx the parse tree
     */
    enterGrantstmt?: (ctx: GrantstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.grantstmt`.
     * @param ctx the parse tree
     */
    exitGrantstmt?: (ctx: GrantstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.revokestmt`.
     * @param ctx the parse tree
     */
    enterRevokestmt?: (ctx: RevokestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.revokestmt`.
     * @param ctx the parse tree
     */
    exitRevokestmt?: (ctx: RevokestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.privileges`.
     * @param ctx the parse tree
     */
    enterPrivileges?: (ctx: PrivilegesContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.privileges`.
     * @param ctx the parse tree
     */
    exitPrivileges?: (ctx: PrivilegesContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.beforeprivilegeselectlist`.
     * @param ctx the parse tree
     */
    enterBeforeprivilegeselectlist?: (ctx: BeforeprivilegeselectlistContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.beforeprivilegeselectlist`.
     * @param ctx the parse tree
     */
    exitBeforeprivilegeselectlist?: (ctx: BeforeprivilegeselectlistContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.beforeprivilegeselect`.
     * @param ctx the parse tree
     */
    enterBeforeprivilegeselect?: (ctx: BeforeprivilegeselectContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.beforeprivilegeselect`.
     * @param ctx the parse tree
     */
    exitBeforeprivilegeselect?: (ctx: BeforeprivilegeselectContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.privilege_list`.
     * @param ctx the parse tree
     */
    enterPrivilege_list?: (ctx: Privilege_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.privilege_list`.
     * @param ctx the parse tree
     */
    exitPrivilege_list?: (ctx: Privilege_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.privilege`.
     * @param ctx the parse tree
     */
    enterPrivilege?: (ctx: PrivilegeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.privilege`.
     * @param ctx the parse tree
     */
    exitPrivilege?: (ctx: PrivilegeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.privilege_target`.
     * @param ctx the parse tree
     */
    enterPrivilege_target?: (ctx: Privilege_targetContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.privilege_target`.
     * @param ctx the parse tree
     */
    exitPrivilege_target?: (ctx: Privilege_targetContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.grantee_list`.
     * @param ctx the parse tree
     */
    enterGrantee_list?: (ctx: Grantee_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.grantee_list`.
     * @param ctx the parse tree
     */
    exitGrantee_list?: (ctx: Grantee_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.grantee`.
     * @param ctx the parse tree
     */
    enterGrantee?: (ctx: GranteeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.grantee`.
     * @param ctx the parse tree
     */
    exitGrantee?: (ctx: GranteeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_grant_grant_option`.
     * @param ctx the parse tree
     */
    enterOpt_grant_grant_option?: (ctx: Opt_grant_grant_optionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_grant_grant_option`.
     * @param ctx the parse tree
     */
    exitOpt_grant_grant_option?: (ctx: Opt_grant_grant_optionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.grantrolestmt`.
     * @param ctx the parse tree
     */
    enterGrantrolestmt?: (ctx: GrantrolestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.grantrolestmt`.
     * @param ctx the parse tree
     */
    exitGrantrolestmt?: (ctx: GrantrolestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.revokerolestmt`.
     * @param ctx the parse tree
     */
    enterRevokerolestmt?: (ctx: RevokerolestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.revokerolestmt`.
     * @param ctx the parse tree
     */
    exitRevokerolestmt?: (ctx: RevokerolestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_grant_admin_option`.
     * @param ctx the parse tree
     */
    enterOpt_grant_admin_option?: (ctx: Opt_grant_admin_optionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_grant_admin_option`.
     * @param ctx the parse tree
     */
    exitOpt_grant_admin_option?: (ctx: Opt_grant_admin_optionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_granted_by`.
     * @param ctx the parse tree
     */
    enterOpt_granted_by?: (ctx: Opt_granted_byContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_granted_by`.
     * @param ctx the parse tree
     */
    exitOpt_granted_by?: (ctx: Opt_granted_byContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alterdefaultprivilegesstmt`.
     * @param ctx the parse tree
     */
    enterAlterdefaultprivilegesstmt?: (ctx: AlterdefaultprivilegesstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alterdefaultprivilegesstmt`.
     * @param ctx the parse tree
     */
    exitAlterdefaultprivilegesstmt?: (ctx: AlterdefaultprivilegesstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.defacloptionlist`.
     * @param ctx the parse tree
     */
    enterDefacloptionlist?: (ctx: DefacloptionlistContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.defacloptionlist`.
     * @param ctx the parse tree
     */
    exitDefacloptionlist?: (ctx: DefacloptionlistContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.defacloption`.
     * @param ctx the parse tree
     */
    enterDefacloption?: (ctx: DefacloptionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.defacloption`.
     * @param ctx the parse tree
     */
    exitDefacloption?: (ctx: DefacloptionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.defaclaction`.
     * @param ctx the parse tree
     */
    enterDefaclaction?: (ctx: DefaclactionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.defaclaction`.
     * @param ctx the parse tree
     */
    exitDefaclaction?: (ctx: DefaclactionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.defacl_privilege_target`.
     * @param ctx the parse tree
     */
    enterDefacl_privilege_target?: (ctx: Defacl_privilege_targetContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.defacl_privilege_target`.
     * @param ctx the parse tree
     */
    exitDefacl_privilege_target?: (ctx: Defacl_privilege_targetContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.indexstmt`.
     * @param ctx the parse tree
     */
    enterIndexstmt?: (ctx: IndexstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.indexstmt`.
     * @param ctx the parse tree
     */
    exitIndexstmt?: (ctx: IndexstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_unique`.
     * @param ctx the parse tree
     */
    enterOpt_unique?: (ctx: Opt_uniqueContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_unique`.
     * @param ctx the parse tree
     */
    exitOpt_unique?: (ctx: Opt_uniqueContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_concurrently`.
     * @param ctx the parse tree
     */
    enterOpt_concurrently?: (ctx: Opt_concurrentlyContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_concurrently`.
     * @param ctx the parse tree
     */
    exitOpt_concurrently?: (ctx: Opt_concurrentlyContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_index_name`.
     * @param ctx the parse tree
     */
    enterOpt_index_name?: (ctx: Opt_index_nameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_index_name`.
     * @param ctx the parse tree
     */
    exitOpt_index_name?: (ctx: Opt_index_nameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.access_method_clause`.
     * @param ctx the parse tree
     */
    enterAccess_method_clause?: (ctx: Access_method_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.access_method_clause`.
     * @param ctx the parse tree
     */
    exitAccess_method_clause?: (ctx: Access_method_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.index_params`.
     * @param ctx the parse tree
     */
    enterIndex_params?: (ctx: Index_paramsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.index_params`.
     * @param ctx the parse tree
     */
    exitIndex_params?: (ctx: Index_paramsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.index_elem_options`.
     * @param ctx the parse tree
     */
    enterIndex_elem_options?: (ctx: Index_elem_optionsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.index_elem_options`.
     * @param ctx the parse tree
     */
    exitIndex_elem_options?: (ctx: Index_elem_optionsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.index_elem`.
     * @param ctx the parse tree
     */
    enterIndex_elem?: (ctx: Index_elemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.index_elem`.
     * @param ctx the parse tree
     */
    exitIndex_elem?: (ctx: Index_elemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_include`.
     * @param ctx the parse tree
     */
    enterOpt_include?: (ctx: Opt_includeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_include`.
     * @param ctx the parse tree
     */
    exitOpt_include?: (ctx: Opt_includeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.index_including_params`.
     * @param ctx the parse tree
     */
    enterIndex_including_params?: (ctx: Index_including_paramsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.index_including_params`.
     * @param ctx the parse tree
     */
    exitIndex_including_params?: (ctx: Index_including_paramsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_collate`.
     * @param ctx the parse tree
     */
    enterOpt_collate?: (ctx: Opt_collateContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_collate`.
     * @param ctx the parse tree
     */
    exitOpt_collate?: (ctx: Opt_collateContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_class`.
     * @param ctx the parse tree
     */
    enterOpt_class?: (ctx: Opt_classContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_class`.
     * @param ctx the parse tree
     */
    exitOpt_class?: (ctx: Opt_classContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_asc_desc`.
     * @param ctx the parse tree
     */
    enterOpt_asc_desc?: (ctx: Opt_asc_descContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_asc_desc`.
     * @param ctx the parse tree
     */
    exitOpt_asc_desc?: (ctx: Opt_asc_descContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_nulls_order`.
     * @param ctx the parse tree
     */
    enterOpt_nulls_order?: (ctx: Opt_nulls_orderContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_nulls_order`.
     * @param ctx the parse tree
     */
    exitOpt_nulls_order?: (ctx: Opt_nulls_orderContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.createfunctionstmt`.
     * @param ctx the parse tree
     */
    enterCreatefunctionstmt?: (ctx: CreatefunctionstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.createfunctionstmt`.
     * @param ctx the parse tree
     */
    exitCreatefunctionstmt?: (ctx: CreatefunctionstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.attrilist`.
     * @param ctx the parse tree
     */
    enterAttrilist?: (ctx: AttrilistContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.attrilist`.
     * @param ctx the parse tree
     */
    exitAttrilist?: (ctx: AttrilistContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_or_replace`.
     * @param ctx the parse tree
     */
    enterOpt_or_replace?: (ctx: Opt_or_replaceContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_or_replace`.
     * @param ctx the parse tree
     */
    exitOpt_or_replace?: (ctx: Opt_or_replaceContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.func_args`.
     * @param ctx the parse tree
     */
    enterFunc_args?: (ctx: Func_argsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.func_args`.
     * @param ctx the parse tree
     */
    exitFunc_args?: (ctx: Func_argsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.func_args_list`.
     * @param ctx the parse tree
     */
    enterFunc_args_list?: (ctx: Func_args_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.func_args_list`.
     * @param ctx the parse tree
     */
    exitFunc_args_list?: (ctx: Func_args_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.routine_with_argtypes_list`.
     * @param ctx the parse tree
     */
    enterRoutine_with_argtypes_list?: (ctx: Routine_with_argtypes_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.routine_with_argtypes_list`.
     * @param ctx the parse tree
     */
    exitRoutine_with_argtypes_list?: (ctx: Routine_with_argtypes_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.routine_with_argtypes`.
     * @param ctx the parse tree
     */
    enterRoutine_with_argtypes?: (ctx: Routine_with_argtypesContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.routine_with_argtypes`.
     * @param ctx the parse tree
     */
    exitRoutine_with_argtypes?: (ctx: Routine_with_argtypesContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.procedure_with_argtypes_list`.
     * @param ctx the parse tree
     */
    enterProcedure_with_argtypes_list?: (ctx: Procedure_with_argtypes_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.procedure_with_argtypes_list`.
     * @param ctx the parse tree
     */
    exitProcedure_with_argtypes_list?: (ctx: Procedure_with_argtypes_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.procedure_with_argtypes`.
     * @param ctx the parse tree
     */
    enterProcedure_with_argtypes?: (ctx: Procedure_with_argtypesContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.procedure_with_argtypes`.
     * @param ctx the parse tree
     */
    exitProcedure_with_argtypes?: (ctx: Procedure_with_argtypesContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.function_with_argtypes_list`.
     * @param ctx the parse tree
     */
    enterFunction_with_argtypes_list?: (ctx: Function_with_argtypes_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.function_with_argtypes_list`.
     * @param ctx the parse tree
     */
    exitFunction_with_argtypes_list?: (ctx: Function_with_argtypes_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.function_with_argtypes`.
     * @param ctx the parse tree
     */
    enterFunction_with_argtypes?: (ctx: Function_with_argtypesContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.function_with_argtypes`.
     * @param ctx the parse tree
     */
    exitFunction_with_argtypes?: (ctx: Function_with_argtypesContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.func_args_with_defaults`.
     * @param ctx the parse tree
     */
    enterFunc_args_with_defaults?: (ctx: Func_args_with_defaultsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.func_args_with_defaults`.
     * @param ctx the parse tree
     */
    exitFunc_args_with_defaults?: (ctx: Func_args_with_defaultsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.func_args_with_defaults_list`.
     * @param ctx the parse tree
     */
    enterFunc_args_with_defaults_list?: (ctx: Func_args_with_defaults_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.func_args_with_defaults_list`.
     * @param ctx the parse tree
     */
    exitFunc_args_with_defaults_list?: (ctx: Func_args_with_defaults_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.func_arg`.
     * @param ctx the parse tree
     */
    enterFunc_arg?: (ctx: Func_argContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.func_arg`.
     * @param ctx the parse tree
     */
    exitFunc_arg?: (ctx: Func_argContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.arg_class`.
     * @param ctx the parse tree
     */
    enterArg_class?: (ctx: Arg_classContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.arg_class`.
     * @param ctx the parse tree
     */
    exitArg_class?: (ctx: Arg_classContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.param_name`.
     * @param ctx the parse tree
     */
    enterParam_name?: (ctx: Param_nameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.param_name`.
     * @param ctx the parse tree
     */
    exitParam_name?: (ctx: Param_nameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.func_return`.
     * @param ctx the parse tree
     */
    enterFunc_return?: (ctx: Func_returnContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.func_return`.
     * @param ctx the parse tree
     */
    exitFunc_return?: (ctx: Func_returnContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.func_type`.
     * @param ctx the parse tree
     */
    enterFunc_type?: (ctx: Func_typeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.func_type`.
     * @param ctx the parse tree
     */
    exitFunc_type?: (ctx: Func_typeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.func_arg_with_default`.
     * @param ctx the parse tree
     */
    enterFunc_arg_with_default?: (ctx: Func_arg_with_defaultContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.func_arg_with_default`.
     * @param ctx the parse tree
     */
    exitFunc_arg_with_default?: (ctx: Func_arg_with_defaultContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.aggr_arg`.
     * @param ctx the parse tree
     */
    enterAggr_arg?: (ctx: Aggr_argContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.aggr_arg`.
     * @param ctx the parse tree
     */
    exitAggr_arg?: (ctx: Aggr_argContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.aggr_args`.
     * @param ctx the parse tree
     */
    enterAggr_args?: (ctx: Aggr_argsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.aggr_args`.
     * @param ctx the parse tree
     */
    exitAggr_args?: (ctx: Aggr_argsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.aggr_args_list`.
     * @param ctx the parse tree
     */
    enterAggr_args_list?: (ctx: Aggr_args_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.aggr_args_list`.
     * @param ctx the parse tree
     */
    exitAggr_args_list?: (ctx: Aggr_args_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.aggregate_with_argtypes`.
     * @param ctx the parse tree
     */
    enterAggregate_with_argtypes?: (ctx: Aggregate_with_argtypesContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.aggregate_with_argtypes`.
     * @param ctx the parse tree
     */
    exitAggregate_with_argtypes?: (ctx: Aggregate_with_argtypesContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.aggregate_with_argtypes_list`.
     * @param ctx the parse tree
     */
    enterAggregate_with_argtypes_list?: (ctx: Aggregate_with_argtypes_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.aggregate_with_argtypes_list`.
     * @param ctx the parse tree
     */
    exitAggregate_with_argtypes_list?: (ctx: Aggregate_with_argtypes_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.createfunc_opt_list`.
     * @param ctx the parse tree
     */
    enterCreatefunc_opt_list?: (ctx: Createfunc_opt_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.createfunc_opt_list`.
     * @param ctx the parse tree
     */
    exitCreatefunc_opt_list?: (ctx: Createfunc_opt_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.common_func_opt_item`.
     * @param ctx the parse tree
     */
    enterCommon_func_opt_item?: (ctx: Common_func_opt_itemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.common_func_opt_item`.
     * @param ctx the parse tree
     */
    exitCommon_func_opt_item?: (ctx: Common_func_opt_itemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.createfunc_opt_item`.
     * @param ctx the parse tree
     */
    enterCreatefunc_opt_item?: (ctx: Createfunc_opt_itemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.createfunc_opt_item`.
     * @param ctx the parse tree
     */
    exitCreatefunc_opt_item?: (ctx: Createfunc_opt_itemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.transform_type_list`.
     * @param ctx the parse tree
     */
    enterTransform_type_list?: (ctx: Transform_type_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.transform_type_list`.
     * @param ctx the parse tree
     */
    exitTransform_type_list?: (ctx: Transform_type_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_definition`.
     * @param ctx the parse tree
     */
    enterOpt_definition?: (ctx: Opt_definitionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_definition`.
     * @param ctx the parse tree
     */
    exitOpt_definition?: (ctx: Opt_definitionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.table_func_column`.
     * @param ctx the parse tree
     */
    enterTable_func_column?: (ctx: Table_func_columnContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.table_func_column`.
     * @param ctx the parse tree
     */
    exitTable_func_column?: (ctx: Table_func_columnContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.table_func_column_list`.
     * @param ctx the parse tree
     */
    enterTable_func_column_list?: (ctx: Table_func_column_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.table_func_column_list`.
     * @param ctx the parse tree
     */
    exitTable_func_column_list?: (ctx: Table_func_column_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alterfunctionstmt`.
     * @param ctx the parse tree
     */
    enterAlterfunctionstmt?: (ctx: AlterfunctionstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alterfunctionstmt`.
     * @param ctx the parse tree
     */
    exitAlterfunctionstmt?: (ctx: AlterfunctionstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alterFunctionTypeClause`.
     * @param ctx the parse tree
     */
    enterAlterFunctionTypeClause?: (ctx: AlterFunctionTypeClauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alterFunctionTypeClause`.
     * @param ctx the parse tree
     */
    exitAlterFunctionTypeClause?: (ctx: AlterFunctionTypeClauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alterfunc_opt_list`.
     * @param ctx the parse tree
     */
    enterAlterfunc_opt_list?: (ctx: Alterfunc_opt_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alterfunc_opt_list`.
     * @param ctx the parse tree
     */
    exitAlterfunc_opt_list?: (ctx: Alterfunc_opt_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_restrict`.
     * @param ctx the parse tree
     */
    enterOpt_restrict?: (ctx: Opt_restrictContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_restrict`.
     * @param ctx the parse tree
     */
    exitOpt_restrict?: (ctx: Opt_restrictContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.removefuncstmt`.
     * @param ctx the parse tree
     */
    enterRemovefuncstmt?: (ctx: RemovefuncstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.removefuncstmt`.
     * @param ctx the parse tree
     */
    exitRemovefuncstmt?: (ctx: RemovefuncstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.removeaggrstmt`.
     * @param ctx the parse tree
     */
    enterRemoveaggrstmt?: (ctx: RemoveaggrstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.removeaggrstmt`.
     * @param ctx the parse tree
     */
    exitRemoveaggrstmt?: (ctx: RemoveaggrstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.removeoperstmt`.
     * @param ctx the parse tree
     */
    enterRemoveoperstmt?: (ctx: RemoveoperstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.removeoperstmt`.
     * @param ctx the parse tree
     */
    exitRemoveoperstmt?: (ctx: RemoveoperstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.oper_argtypes`.
     * @param ctx the parse tree
     */
    enterOper_argtypes?: (ctx: Oper_argtypesContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.oper_argtypes`.
     * @param ctx the parse tree
     */
    exitOper_argtypes?: (ctx: Oper_argtypesContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.any_operator`.
     * @param ctx the parse tree
     */
    enterAny_operator?: (ctx: Any_operatorContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.any_operator`.
     * @param ctx the parse tree
     */
    exitAny_operator?: (ctx: Any_operatorContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.operator_with_argtypes_list`.
     * @param ctx the parse tree
     */
    enterOperator_with_argtypes_list?: (ctx: Operator_with_argtypes_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.operator_with_argtypes_list`.
     * @param ctx the parse tree
     */
    exitOperator_with_argtypes_list?: (ctx: Operator_with_argtypes_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.operator_with_argtypes`.
     * @param ctx the parse tree
     */
    enterOperator_with_argtypes?: (ctx: Operator_with_argtypesContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.operator_with_argtypes`.
     * @param ctx the parse tree
     */
    exitOperator_with_argtypes?: (ctx: Operator_with_argtypesContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.dostmt`.
     * @param ctx the parse tree
     */
    enterDostmt?: (ctx: DostmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.dostmt`.
     * @param ctx the parse tree
     */
    exitDostmt?: (ctx: DostmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.dostmt_opt_list`.
     * @param ctx the parse tree
     */
    enterDostmt_opt_list?: (ctx: Dostmt_opt_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.dostmt_opt_list`.
     * @param ctx the parse tree
     */
    exitDostmt_opt_list?: (ctx: Dostmt_opt_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.dostmt_opt_item`.
     * @param ctx the parse tree
     */
    enterDostmt_opt_item?: (ctx: Dostmt_opt_itemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.dostmt_opt_item`.
     * @param ctx the parse tree
     */
    exitDostmt_opt_item?: (ctx: Dostmt_opt_itemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.createcaststmt`.
     * @param ctx the parse tree
     */
    enterCreatecaststmt?: (ctx: CreatecaststmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.createcaststmt`.
     * @param ctx the parse tree
     */
    exitCreatecaststmt?: (ctx: CreatecaststmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.cast_context`.
     * @param ctx the parse tree
     */
    enterCast_context?: (ctx: Cast_contextContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.cast_context`.
     * @param ctx the parse tree
     */
    exitCast_context?: (ctx: Cast_contextContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_if_exists`.
     * @param ctx the parse tree
     */
    enterOpt_if_exists?: (ctx: Opt_if_existsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_if_exists`.
     * @param ctx the parse tree
     */
    exitOpt_if_exists?: (ctx: Opt_if_existsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.createtransformstmt`.
     * @param ctx the parse tree
     */
    enterCreatetransformstmt?: (ctx: CreatetransformstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.createtransformstmt`.
     * @param ctx the parse tree
     */
    exitCreatetransformstmt?: (ctx: CreatetransformstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.transform_element_list`.
     * @param ctx the parse tree
     */
    enterTransform_element_list?: (ctx: Transform_element_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.transform_element_list`.
     * @param ctx the parse tree
     */
    exitTransform_element_list?: (ctx: Transform_element_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.reindexstmt`.
     * @param ctx the parse tree
     */
    enterReindexstmt?: (ctx: ReindexstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.reindexstmt`.
     * @param ctx the parse tree
     */
    exitReindexstmt?: (ctx: ReindexstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.reindex_target_type`.
     * @param ctx the parse tree
     */
    enterReindex_target_type?: (ctx: Reindex_target_typeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.reindex_target_type`.
     * @param ctx the parse tree
     */
    exitReindex_target_type?: (ctx: Reindex_target_typeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.reindex_target_multitable`.
     * @param ctx the parse tree
     */
    enterReindex_target_multitable?: (ctx: Reindex_target_multitableContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.reindex_target_multitable`.
     * @param ctx the parse tree
     */
    exitReindex_target_multitable?: (ctx: Reindex_target_multitableContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.reindex_option_list`.
     * @param ctx the parse tree
     */
    enterReindex_option_list?: (ctx: Reindex_option_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.reindex_option_list`.
     * @param ctx the parse tree
     */
    exitReindex_option_list?: (ctx: Reindex_option_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.reindex_option_elem`.
     * @param ctx the parse tree
     */
    enterReindex_option_elem?: (ctx: Reindex_option_elemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.reindex_option_elem`.
     * @param ctx the parse tree
     */
    exitReindex_option_elem?: (ctx: Reindex_option_elemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.altertblspcstmt`.
     * @param ctx the parse tree
     */
    enterAltertblspcstmt?: (ctx: AltertblspcstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.altertblspcstmt`.
     * @param ctx the parse tree
     */
    exitAltertblspcstmt?: (ctx: AltertblspcstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.renamestmt`.
     * @param ctx the parse tree
     */
    enterRenamestmt?: (ctx: RenamestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.renamestmt`.
     * @param ctx the parse tree
     */
    exitRenamestmt?: (ctx: RenamestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_column`.
     * @param ctx the parse tree
     */
    enterOpt_column?: (ctx: Opt_columnContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_column`.
     * @param ctx the parse tree
     */
    exitOpt_column?: (ctx: Opt_columnContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_set_data`.
     * @param ctx the parse tree
     */
    enterOpt_set_data?: (ctx: Opt_set_dataContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_set_data`.
     * @param ctx the parse tree
     */
    exitOpt_set_data?: (ctx: Opt_set_dataContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alterobjectdependsstmt`.
     * @param ctx the parse tree
     */
    enterAlterobjectdependsstmt?: (ctx: AlterobjectdependsstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alterobjectdependsstmt`.
     * @param ctx the parse tree
     */
    exitAlterobjectdependsstmt?: (ctx: AlterobjectdependsstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_no`.
     * @param ctx the parse tree
     */
    enterOpt_no?: (ctx: Opt_noContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_no`.
     * @param ctx the parse tree
     */
    exitOpt_no?: (ctx: Opt_noContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alterobjectschemastmt`.
     * @param ctx the parse tree
     */
    enterAlterobjectschemastmt?: (ctx: AlterobjectschemastmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alterobjectschemastmt`.
     * @param ctx the parse tree
     */
    exitAlterobjectschemastmt?: (ctx: AlterobjectschemastmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alteroperatorstmt`.
     * @param ctx the parse tree
     */
    enterAlteroperatorstmt?: (ctx: AlteroperatorstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alteroperatorstmt`.
     * @param ctx the parse tree
     */
    exitAlteroperatorstmt?: (ctx: AlteroperatorstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.operator_def_list`.
     * @param ctx the parse tree
     */
    enterOperator_def_list?: (ctx: Operator_def_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.operator_def_list`.
     * @param ctx the parse tree
     */
    exitOperator_def_list?: (ctx: Operator_def_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.operator_def_elem`.
     * @param ctx the parse tree
     */
    enterOperator_def_elem?: (ctx: Operator_def_elemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.operator_def_elem`.
     * @param ctx the parse tree
     */
    exitOperator_def_elem?: (ctx: Operator_def_elemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.operator_def_arg`.
     * @param ctx the parse tree
     */
    enterOperator_def_arg?: (ctx: Operator_def_argContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.operator_def_arg`.
     * @param ctx the parse tree
     */
    exitOperator_def_arg?: (ctx: Operator_def_argContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.altertypestmt`.
     * @param ctx the parse tree
     */
    enterAltertypestmt?: (ctx: AltertypestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.altertypestmt`.
     * @param ctx the parse tree
     */
    exitAltertypestmt?: (ctx: AltertypestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alterownerstmt`.
     * @param ctx the parse tree
     */
    enterAlterownerstmt?: (ctx: AlterownerstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alterownerstmt`.
     * @param ctx the parse tree
     */
    exitAlterownerstmt?: (ctx: AlterownerstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.createpublicationstmt`.
     * @param ctx the parse tree
     */
    enterCreatepublicationstmt?: (ctx: CreatepublicationstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.createpublicationstmt`.
     * @param ctx the parse tree
     */
    exitCreatepublicationstmt?: (ctx: CreatepublicationstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_publication_for_tables`.
     * @param ctx the parse tree
     */
    enterOpt_publication_for_tables?: (ctx: Opt_publication_for_tablesContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_publication_for_tables`.
     * @param ctx the parse tree
     */
    exitOpt_publication_for_tables?: (ctx: Opt_publication_for_tablesContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.publication_for_tables`.
     * @param ctx the parse tree
     */
    enterPublication_for_tables?: (ctx: Publication_for_tablesContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.publication_for_tables`.
     * @param ctx the parse tree
     */
    exitPublication_for_tables?: (ctx: Publication_for_tablesContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alterpublicationstmt`.
     * @param ctx the parse tree
     */
    enterAlterpublicationstmt?: (ctx: AlterpublicationstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alterpublicationstmt`.
     * @param ctx the parse tree
     */
    exitAlterpublicationstmt?: (ctx: AlterpublicationstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.createsubscriptionstmt`.
     * @param ctx the parse tree
     */
    enterCreatesubscriptionstmt?: (ctx: CreatesubscriptionstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.createsubscriptionstmt`.
     * @param ctx the parse tree
     */
    exitCreatesubscriptionstmt?: (ctx: CreatesubscriptionstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.publication_name_list`.
     * @param ctx the parse tree
     */
    enterPublication_name_list?: (ctx: Publication_name_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.publication_name_list`.
     * @param ctx the parse tree
     */
    exitPublication_name_list?: (ctx: Publication_name_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.publication_name_item`.
     * @param ctx the parse tree
     */
    enterPublication_name_item?: (ctx: Publication_name_itemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.publication_name_item`.
     * @param ctx the parse tree
     */
    exitPublication_name_item?: (ctx: Publication_name_itemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.altersubscriptionstmt`.
     * @param ctx the parse tree
     */
    enterAltersubscriptionstmt?: (ctx: AltersubscriptionstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.altersubscriptionstmt`.
     * @param ctx the parse tree
     */
    exitAltersubscriptionstmt?: (ctx: AltersubscriptionstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.rulestmt`.
     * @param ctx the parse tree
     */
    enterRulestmt?: (ctx: RulestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.rulestmt`.
     * @param ctx the parse tree
     */
    exitRulestmt?: (ctx: RulestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.ruleactionlist`.
     * @param ctx the parse tree
     */
    enterRuleactionlist?: (ctx: RuleactionlistContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.ruleactionlist`.
     * @param ctx the parse tree
     */
    exitRuleactionlist?: (ctx: RuleactionlistContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.ruleactionmulti`.
     * @param ctx the parse tree
     */
    enterRuleactionmulti?: (ctx: RuleactionmultiContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.ruleactionmulti`.
     * @param ctx the parse tree
     */
    exitRuleactionmulti?: (ctx: RuleactionmultiContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.ruleactionstmt`.
     * @param ctx the parse tree
     */
    enterRuleactionstmt?: (ctx: RuleactionstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.ruleactionstmt`.
     * @param ctx the parse tree
     */
    exitRuleactionstmt?: (ctx: RuleactionstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.ruleactionstmtOrEmpty`.
     * @param ctx the parse tree
     */
    enterRuleactionstmtOrEmpty?: (ctx: RuleactionstmtOrEmptyContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.ruleactionstmtOrEmpty`.
     * @param ctx the parse tree
     */
    exitRuleactionstmtOrEmpty?: (ctx: RuleactionstmtOrEmptyContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.event`.
     * @param ctx the parse tree
     */
    enterEvent?: (ctx: EventContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.event`.
     * @param ctx the parse tree
     */
    exitEvent?: (ctx: EventContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_instead`.
     * @param ctx the parse tree
     */
    enterOpt_instead?: (ctx: Opt_insteadContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_instead`.
     * @param ctx the parse tree
     */
    exitOpt_instead?: (ctx: Opt_insteadContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.notifystmt`.
     * @param ctx the parse tree
     */
    enterNotifystmt?: (ctx: NotifystmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.notifystmt`.
     * @param ctx the parse tree
     */
    exitNotifystmt?: (ctx: NotifystmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.notify_payload`.
     * @param ctx the parse tree
     */
    enterNotify_payload?: (ctx: Notify_payloadContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.notify_payload`.
     * @param ctx the parse tree
     */
    exitNotify_payload?: (ctx: Notify_payloadContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.listenstmt`.
     * @param ctx the parse tree
     */
    enterListenstmt?: (ctx: ListenstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.listenstmt`.
     * @param ctx the parse tree
     */
    exitListenstmt?: (ctx: ListenstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.unlistenstmt`.
     * @param ctx the parse tree
     */
    enterUnlistenstmt?: (ctx: UnlistenstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.unlistenstmt`.
     * @param ctx the parse tree
     */
    exitUnlistenstmt?: (ctx: UnlistenstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.transactionstmt`.
     * @param ctx the parse tree
     */
    enterTransactionstmt?: (ctx: TransactionstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.transactionstmt`.
     * @param ctx the parse tree
     */
    exitTransactionstmt?: (ctx: TransactionstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_transaction`.
     * @param ctx the parse tree
     */
    enterOpt_transaction?: (ctx: Opt_transactionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_transaction`.
     * @param ctx the parse tree
     */
    exitOpt_transaction?: (ctx: Opt_transactionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.transaction_mode_item`.
     * @param ctx the parse tree
     */
    enterTransaction_mode_item?: (ctx: Transaction_mode_itemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.transaction_mode_item`.
     * @param ctx the parse tree
     */
    exitTransaction_mode_item?: (ctx: Transaction_mode_itemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.transaction_mode_list`.
     * @param ctx the parse tree
     */
    enterTransaction_mode_list?: (ctx: Transaction_mode_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.transaction_mode_list`.
     * @param ctx the parse tree
     */
    exitTransaction_mode_list?: (ctx: Transaction_mode_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.transaction_mode_list_or_empty`.
     * @param ctx the parse tree
     */
    enterTransaction_mode_list_or_empty?: (ctx: Transaction_mode_list_or_emptyContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.transaction_mode_list_or_empty`.
     * @param ctx the parse tree
     */
    exitTransaction_mode_list_or_empty?: (ctx: Transaction_mode_list_or_emptyContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_transaction_chain`.
     * @param ctx the parse tree
     */
    enterOpt_transaction_chain?: (ctx: Opt_transaction_chainContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_transaction_chain`.
     * @param ctx the parse tree
     */
    exitOpt_transaction_chain?: (ctx: Opt_transaction_chainContext) => void;
    /**
     * Enter a parse tree produced by the `createView`
     * labeled alternative in `PostgreSQLParser.viewstmt`.
     * @param ctx the parse tree
     */
    enterCreateView?: (ctx: CreateViewContext) => void;
    /**
     * Exit a parse tree produced by the `createView`
     * labeled alternative in `PostgreSQLParser.viewstmt`.
     * @param ctx the parse tree
     */
    exitCreateView?: (ctx: CreateViewContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_check_option`.
     * @param ctx the parse tree
     */
    enterOpt_check_option?: (ctx: Opt_check_optionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_check_option`.
     * @param ctx the parse tree
     */
    exitOpt_check_option?: (ctx: Opt_check_optionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.loadstmt`.
     * @param ctx the parse tree
     */
    enterLoadstmt?: (ctx: LoadstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.loadstmt`.
     * @param ctx the parse tree
     */
    exitLoadstmt?: (ctx: LoadstmtContext) => void;
    /**
     * Enter a parse tree produced by the `createDatabase`
     * labeled alternative in `PostgreSQLParser.createdbstmt`.
     * @param ctx the parse tree
     */
    enterCreateDatabase?: (ctx: CreateDatabaseContext) => void;
    /**
     * Exit a parse tree produced by the `createDatabase`
     * labeled alternative in `PostgreSQLParser.createdbstmt`.
     * @param ctx the parse tree
     */
    exitCreateDatabase?: (ctx: CreateDatabaseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.createdb_opt_list`.
     * @param ctx the parse tree
     */
    enterCreatedb_opt_list?: (ctx: Createdb_opt_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.createdb_opt_list`.
     * @param ctx the parse tree
     */
    exitCreatedb_opt_list?: (ctx: Createdb_opt_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.createdb_opt_items`.
     * @param ctx the parse tree
     */
    enterCreatedb_opt_items?: (ctx: Createdb_opt_itemsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.createdb_opt_items`.
     * @param ctx the parse tree
     */
    exitCreatedb_opt_items?: (ctx: Createdb_opt_itemsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.createdb_opt_item`.
     * @param ctx the parse tree
     */
    enterCreatedb_opt_item?: (ctx: Createdb_opt_itemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.createdb_opt_item`.
     * @param ctx the parse tree
     */
    exitCreatedb_opt_item?: (ctx: Createdb_opt_itemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.createdb_opt_name`.
     * @param ctx the parse tree
     */
    enterCreatedb_opt_name?: (ctx: Createdb_opt_nameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.createdb_opt_name`.
     * @param ctx the parse tree
     */
    exitCreatedb_opt_name?: (ctx: Createdb_opt_nameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_equal`.
     * @param ctx the parse tree
     */
    enterOpt_equal?: (ctx: Opt_equalContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_equal`.
     * @param ctx the parse tree
     */
    exitOpt_equal?: (ctx: Opt_equalContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alterdatabasestmt`.
     * @param ctx the parse tree
     */
    enterAlterdatabasestmt?: (ctx: AlterdatabasestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alterdatabasestmt`.
     * @param ctx the parse tree
     */
    exitAlterdatabasestmt?: (ctx: AlterdatabasestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alterdatabasesetstmt`.
     * @param ctx the parse tree
     */
    enterAlterdatabasesetstmt?: (ctx: AlterdatabasesetstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alterdatabasesetstmt`.
     * @param ctx the parse tree
     */
    exitAlterdatabasesetstmt?: (ctx: AlterdatabasesetstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.drop_option_list`.
     * @param ctx the parse tree
     */
    enterDrop_option_list?: (ctx: Drop_option_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.drop_option_list`.
     * @param ctx the parse tree
     */
    exitDrop_option_list?: (ctx: Drop_option_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.drop_option`.
     * @param ctx the parse tree
     */
    enterDrop_option?: (ctx: Drop_optionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.drop_option`.
     * @param ctx the parse tree
     */
    exitDrop_option?: (ctx: Drop_optionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.altercollationstmt`.
     * @param ctx the parse tree
     */
    enterAltercollationstmt?: (ctx: AltercollationstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.altercollationstmt`.
     * @param ctx the parse tree
     */
    exitAltercollationstmt?: (ctx: AltercollationstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.altersystemstmt`.
     * @param ctx the parse tree
     */
    enterAltersystemstmt?: (ctx: AltersystemstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.altersystemstmt`.
     * @param ctx the parse tree
     */
    exitAltersystemstmt?: (ctx: AltersystemstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.createdomainstmt`.
     * @param ctx the parse tree
     */
    enterCreatedomainstmt?: (ctx: CreatedomainstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.createdomainstmt`.
     * @param ctx the parse tree
     */
    exitCreatedomainstmt?: (ctx: CreatedomainstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alterdomainstmt`.
     * @param ctx the parse tree
     */
    enterAlterdomainstmt?: (ctx: AlterdomainstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alterdomainstmt`.
     * @param ctx the parse tree
     */
    exitAlterdomainstmt?: (ctx: AlterdomainstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_as`.
     * @param ctx the parse tree
     */
    enterOpt_as?: (ctx: Opt_asContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_as`.
     * @param ctx the parse tree
     */
    exitOpt_as?: (ctx: Opt_asContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.altertsdictionarystmt`.
     * @param ctx the parse tree
     */
    enterAltertsdictionarystmt?: (ctx: AltertsdictionarystmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.altertsdictionarystmt`.
     * @param ctx the parse tree
     */
    exitAltertsdictionarystmt?: (ctx: AltertsdictionarystmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.altertsconfigurationstmt`.
     * @param ctx the parse tree
     */
    enterAltertsconfigurationstmt?: (ctx: AltertsconfigurationstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.altertsconfigurationstmt`.
     * @param ctx the parse tree
     */
    exitAltertsconfigurationstmt?: (ctx: AltertsconfigurationstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.any_with`.
     * @param ctx the parse tree
     */
    enterAny_with?: (ctx: Any_withContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.any_with`.
     * @param ctx the parse tree
     */
    exitAny_with?: (ctx: Any_withContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.createconversionstmt`.
     * @param ctx the parse tree
     */
    enterCreateconversionstmt?: (ctx: CreateconversionstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.createconversionstmt`.
     * @param ctx the parse tree
     */
    exitCreateconversionstmt?: (ctx: CreateconversionstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.clusterstmt`.
     * @param ctx the parse tree
     */
    enterClusterstmt?: (ctx: ClusterstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.clusterstmt`.
     * @param ctx the parse tree
     */
    exitClusterstmt?: (ctx: ClusterstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_verbose_list`.
     * @param ctx the parse tree
     */
    enterOpt_verbose_list?: (ctx: Opt_verbose_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_verbose_list`.
     * @param ctx the parse tree
     */
    exitOpt_verbose_list?: (ctx: Opt_verbose_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.cluster_index_specification`.
     * @param ctx the parse tree
     */
    enterCluster_index_specification?: (ctx: Cluster_index_specificationContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.cluster_index_specification`.
     * @param ctx the parse tree
     */
    exitCluster_index_specification?: (ctx: Cluster_index_specificationContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.vacuumstmt`.
     * @param ctx the parse tree
     */
    enterVacuumstmt?: (ctx: VacuumstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.vacuumstmt`.
     * @param ctx the parse tree
     */
    exitVacuumstmt?: (ctx: VacuumstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.analyzestmt`.
     * @param ctx the parse tree
     */
    enterAnalyzestmt?: (ctx: AnalyzestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.analyzestmt`.
     * @param ctx the parse tree
     */
    exitAnalyzestmt?: (ctx: AnalyzestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.vac_analyze_option_list`.
     * @param ctx the parse tree
     */
    enterVac_analyze_option_list?: (ctx: Vac_analyze_option_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.vac_analyze_option_list`.
     * @param ctx the parse tree
     */
    exitVac_analyze_option_list?: (ctx: Vac_analyze_option_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.analyze_keyword`.
     * @param ctx the parse tree
     */
    enterAnalyze_keyword?: (ctx: Analyze_keywordContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.analyze_keyword`.
     * @param ctx the parse tree
     */
    exitAnalyze_keyword?: (ctx: Analyze_keywordContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.vac_analyze_option_elem`.
     * @param ctx the parse tree
     */
    enterVac_analyze_option_elem?: (ctx: Vac_analyze_option_elemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.vac_analyze_option_elem`.
     * @param ctx the parse tree
     */
    exitVac_analyze_option_elem?: (ctx: Vac_analyze_option_elemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.vac_analyze_option_name`.
     * @param ctx the parse tree
     */
    enterVac_analyze_option_name?: (ctx: Vac_analyze_option_nameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.vac_analyze_option_name`.
     * @param ctx the parse tree
     */
    exitVac_analyze_option_name?: (ctx: Vac_analyze_option_nameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.vac_analyze_option_arg`.
     * @param ctx the parse tree
     */
    enterVac_analyze_option_arg?: (ctx: Vac_analyze_option_argContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.vac_analyze_option_arg`.
     * @param ctx the parse tree
     */
    exitVac_analyze_option_arg?: (ctx: Vac_analyze_option_argContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_analyze`.
     * @param ctx the parse tree
     */
    enterOpt_analyze?: (ctx: Opt_analyzeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_analyze`.
     * @param ctx the parse tree
     */
    exitOpt_analyze?: (ctx: Opt_analyzeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.analyze_options_list`.
     * @param ctx the parse tree
     */
    enterAnalyze_options_list?: (ctx: Analyze_options_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.analyze_options_list`.
     * @param ctx the parse tree
     */
    exitAnalyze_options_list?: (ctx: Analyze_options_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.analyze_option_elem`.
     * @param ctx the parse tree
     */
    enterAnalyze_option_elem?: (ctx: Analyze_option_elemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.analyze_option_elem`.
     * @param ctx the parse tree
     */
    exitAnalyze_option_elem?: (ctx: Analyze_option_elemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_verbose`.
     * @param ctx the parse tree
     */
    enterOpt_verbose?: (ctx: Opt_verboseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_verbose`.
     * @param ctx the parse tree
     */
    exitOpt_verbose?: (ctx: Opt_verboseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_skiplock`.
     * @param ctx the parse tree
     */
    enterOpt_skiplock?: (ctx: Opt_skiplockContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_skiplock`.
     * @param ctx the parse tree
     */
    exitOpt_skiplock?: (ctx: Opt_skiplockContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_buffer_usage_limit`.
     * @param ctx the parse tree
     */
    enterOpt_buffer_usage_limit?: (ctx: Opt_buffer_usage_limitContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_buffer_usage_limit`.
     * @param ctx the parse tree
     */
    exitOpt_buffer_usage_limit?: (ctx: Opt_buffer_usage_limitContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_full`.
     * @param ctx the parse tree
     */
    enterOpt_full?: (ctx: Opt_fullContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_full`.
     * @param ctx the parse tree
     */
    exitOpt_full?: (ctx: Opt_fullContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_freeze`.
     * @param ctx the parse tree
     */
    enterOpt_freeze?: (ctx: Opt_freezeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_freeze`.
     * @param ctx the parse tree
     */
    exitOpt_freeze?: (ctx: Opt_freezeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_name_list`.
     * @param ctx the parse tree
     */
    enterOpt_name_list?: (ctx: Opt_name_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_name_list`.
     * @param ctx the parse tree
     */
    exitOpt_name_list?: (ctx: Opt_name_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.vacuum_relation`.
     * @param ctx the parse tree
     */
    enterVacuum_relation?: (ctx: Vacuum_relationContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.vacuum_relation`.
     * @param ctx the parse tree
     */
    exitVacuum_relation?: (ctx: Vacuum_relationContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.vacuum_relation_list`.
     * @param ctx the parse tree
     */
    enterVacuum_relation_list?: (ctx: Vacuum_relation_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.vacuum_relation_list`.
     * @param ctx the parse tree
     */
    exitVacuum_relation_list?: (ctx: Vacuum_relation_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_vacuum_relation_list`.
     * @param ctx the parse tree
     */
    enterOpt_vacuum_relation_list?: (ctx: Opt_vacuum_relation_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_vacuum_relation_list`.
     * @param ctx the parse tree
     */
    exitOpt_vacuum_relation_list?: (ctx: Opt_vacuum_relation_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.explainstmt`.
     * @param ctx the parse tree
     */
    enterExplainstmt?: (ctx: ExplainstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.explainstmt`.
     * @param ctx the parse tree
     */
    exitExplainstmt?: (ctx: ExplainstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.explainablestmt`.
     * @param ctx the parse tree
     */
    enterExplainablestmt?: (ctx: ExplainablestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.explainablestmt`.
     * @param ctx the parse tree
     */
    exitExplainablestmt?: (ctx: ExplainablestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.explain_option_list`.
     * @param ctx the parse tree
     */
    enterExplain_option_list?: (ctx: Explain_option_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.explain_option_list`.
     * @param ctx the parse tree
     */
    exitExplain_option_list?: (ctx: Explain_option_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.explain_option_elem`.
     * @param ctx the parse tree
     */
    enterExplain_option_elem?: (ctx: Explain_option_elemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.explain_option_elem`.
     * @param ctx the parse tree
     */
    exitExplain_option_elem?: (ctx: Explain_option_elemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.explain_option_name`.
     * @param ctx the parse tree
     */
    enterExplain_option_name?: (ctx: Explain_option_nameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.explain_option_name`.
     * @param ctx the parse tree
     */
    exitExplain_option_name?: (ctx: Explain_option_nameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.explain_option_arg`.
     * @param ctx the parse tree
     */
    enterExplain_option_arg?: (ctx: Explain_option_argContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.explain_option_arg`.
     * @param ctx the parse tree
     */
    exitExplain_option_arg?: (ctx: Explain_option_argContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.preparestmt`.
     * @param ctx the parse tree
     */
    enterPreparestmt?: (ctx: PreparestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.preparestmt`.
     * @param ctx the parse tree
     */
    exitPreparestmt?: (ctx: PreparestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.prep_type_clause`.
     * @param ctx the parse tree
     */
    enterPrep_type_clause?: (ctx: Prep_type_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.prep_type_clause`.
     * @param ctx the parse tree
     */
    exitPrep_type_clause?: (ctx: Prep_type_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.preparablestmt`.
     * @param ctx the parse tree
     */
    enterPreparablestmt?: (ctx: PreparablestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.preparablestmt`.
     * @param ctx the parse tree
     */
    exitPreparablestmt?: (ctx: PreparablestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.executestmt`.
     * @param ctx the parse tree
     */
    enterExecutestmt?: (ctx: ExecutestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.executestmt`.
     * @param ctx the parse tree
     */
    exitExecutestmt?: (ctx: ExecutestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.execute_param_clause`.
     * @param ctx the parse tree
     */
    enterExecute_param_clause?: (ctx: Execute_param_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.execute_param_clause`.
     * @param ctx the parse tree
     */
    exitExecute_param_clause?: (ctx: Execute_param_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.deallocatestmt`.
     * @param ctx the parse tree
     */
    enterDeallocatestmt?: (ctx: DeallocatestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.deallocatestmt`.
     * @param ctx the parse tree
     */
    exitDeallocatestmt?: (ctx: DeallocatestmtContext) => void;
    /**
     * Enter a parse tree produced by the `insertStatement`
     * labeled alternative in `PostgreSQLParser.insertstmt`.
     * @param ctx the parse tree
     */
    enterInsertStatement?: (ctx: InsertStatementContext) => void;
    /**
     * Exit a parse tree produced by the `insertStatement`
     * labeled alternative in `PostgreSQLParser.insertstmt`.
     * @param ctx the parse tree
     */
    exitInsertStatement?: (ctx: InsertStatementContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.insert_target`.
     * @param ctx the parse tree
     */
    enterInsert_target?: (ctx: Insert_targetContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.insert_target`.
     * @param ctx the parse tree
     */
    exitInsert_target?: (ctx: Insert_targetContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.insert_rest`.
     * @param ctx the parse tree
     */
    enterInsert_rest?: (ctx: Insert_restContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.insert_rest`.
     * @param ctx the parse tree
     */
    exitInsert_rest?: (ctx: Insert_restContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.override_kind`.
     * @param ctx the parse tree
     */
    enterOverride_kind?: (ctx: Override_kindContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.override_kind`.
     * @param ctx the parse tree
     */
    exitOverride_kind?: (ctx: Override_kindContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.insert_column_list`.
     * @param ctx the parse tree
     */
    enterInsert_column_list?: (ctx: Insert_column_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.insert_column_list`.
     * @param ctx the parse tree
     */
    exitInsert_column_list?: (ctx: Insert_column_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.insert_column_item`.
     * @param ctx the parse tree
     */
    enterInsert_column_item?: (ctx: Insert_column_itemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.insert_column_item`.
     * @param ctx the parse tree
     */
    exitInsert_column_item?: (ctx: Insert_column_itemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_on_conflict`.
     * @param ctx the parse tree
     */
    enterOpt_on_conflict?: (ctx: Opt_on_conflictContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_on_conflict`.
     * @param ctx the parse tree
     */
    exitOpt_on_conflict?: (ctx: Opt_on_conflictContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_conf_expr`.
     * @param ctx the parse tree
     */
    enterOpt_conf_expr?: (ctx: Opt_conf_exprContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_conf_expr`.
     * @param ctx the parse tree
     */
    exitOpt_conf_expr?: (ctx: Opt_conf_exprContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.returning_clause`.
     * @param ctx the parse tree
     */
    enterReturning_clause?: (ctx: Returning_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.returning_clause`.
     * @param ctx the parse tree
     */
    exitReturning_clause?: (ctx: Returning_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.deletestmt`.
     * @param ctx the parse tree
     */
    enterDeletestmt?: (ctx: DeletestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.deletestmt`.
     * @param ctx the parse tree
     */
    exitDeletestmt?: (ctx: DeletestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.using_clause`.
     * @param ctx the parse tree
     */
    enterUsing_clause?: (ctx: Using_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.using_clause`.
     * @param ctx the parse tree
     */
    exitUsing_clause?: (ctx: Using_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.lockstmt`.
     * @param ctx the parse tree
     */
    enterLockstmt?: (ctx: LockstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.lockstmt`.
     * @param ctx the parse tree
     */
    exitLockstmt?: (ctx: LockstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_lock`.
     * @param ctx the parse tree
     */
    enterOpt_lock?: (ctx: Opt_lockContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_lock`.
     * @param ctx the parse tree
     */
    exitOpt_lock?: (ctx: Opt_lockContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.lock_type`.
     * @param ctx the parse tree
     */
    enterLock_type?: (ctx: Lock_typeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.lock_type`.
     * @param ctx the parse tree
     */
    exitLock_type?: (ctx: Lock_typeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_nowait`.
     * @param ctx the parse tree
     */
    enterOpt_nowait?: (ctx: Opt_nowaitContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_nowait`.
     * @param ctx the parse tree
     */
    exitOpt_nowait?: (ctx: Opt_nowaitContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_nowait_or_skip`.
     * @param ctx the parse tree
     */
    enterOpt_nowait_or_skip?: (ctx: Opt_nowait_or_skipContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_nowait_or_skip`.
     * @param ctx the parse tree
     */
    exitOpt_nowait_or_skip?: (ctx: Opt_nowait_or_skipContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.updatestmt`.
     * @param ctx the parse tree
     */
    enterUpdatestmt?: (ctx: UpdatestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.updatestmt`.
     * @param ctx the parse tree
     */
    exitUpdatestmt?: (ctx: UpdatestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.set_clause_list`.
     * @param ctx the parse tree
     */
    enterSet_clause_list?: (ctx: Set_clause_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.set_clause_list`.
     * @param ctx the parse tree
     */
    exitSet_clause_list?: (ctx: Set_clause_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.set_clause`.
     * @param ctx the parse tree
     */
    enterSet_clause?: (ctx: Set_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.set_clause`.
     * @param ctx the parse tree
     */
    exitSet_clause?: (ctx: Set_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.set_target`.
     * @param ctx the parse tree
     */
    enterSet_target?: (ctx: Set_targetContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.set_target`.
     * @param ctx the parse tree
     */
    exitSet_target?: (ctx: Set_targetContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.set_target_list`.
     * @param ctx the parse tree
     */
    enterSet_target_list?: (ctx: Set_target_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.set_target_list`.
     * @param ctx the parse tree
     */
    exitSet_target_list?: (ctx: Set_target_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.declarecursorstmt`.
     * @param ctx the parse tree
     */
    enterDeclarecursorstmt?: (ctx: DeclarecursorstmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.declarecursorstmt`.
     * @param ctx the parse tree
     */
    exitDeclarecursorstmt?: (ctx: DeclarecursorstmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.cursor_name`.
     * @param ctx the parse tree
     */
    enterCursor_name?: (ctx: Cursor_nameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.cursor_name`.
     * @param ctx the parse tree
     */
    exitCursor_name?: (ctx: Cursor_nameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.cursor_options`.
     * @param ctx the parse tree
     */
    enterCursor_options?: (ctx: Cursor_optionsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.cursor_options`.
     * @param ctx the parse tree
     */
    exitCursor_options?: (ctx: Cursor_optionsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_hold`.
     * @param ctx the parse tree
     */
    enterOpt_hold?: (ctx: Opt_holdContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_hold`.
     * @param ctx the parse tree
     */
    exitOpt_hold?: (ctx: Opt_holdContext) => void;
    /**
     * Enter a parse tree produced by the `selectStatement`
     * labeled alternative in `PostgreSQLParser.selectstmt`.
     * @param ctx the parse tree
     */
    enterSelectStatement?: (ctx: SelectStatementContext) => void;
    /**
     * Exit a parse tree produced by the `selectStatement`
     * labeled alternative in `PostgreSQLParser.selectstmt`.
     * @param ctx the parse tree
     */
    exitSelectStatement?: (ctx: SelectStatementContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.select_with_parens`.
     * @param ctx the parse tree
     */
    enterSelect_with_parens?: (ctx: Select_with_parensContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.select_with_parens`.
     * @param ctx the parse tree
     */
    exitSelect_with_parens?: (ctx: Select_with_parensContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.select_no_parens`.
     * @param ctx the parse tree
     */
    enterSelect_no_parens?: (ctx: Select_no_parensContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.select_no_parens`.
     * @param ctx the parse tree
     */
    exitSelect_no_parens?: (ctx: Select_no_parensContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.select_clause`.
     * @param ctx the parse tree
     */
    enterSelect_clause?: (ctx: Select_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.select_clause`.
     * @param ctx the parse tree
     */
    exitSelect_clause?: (ctx: Select_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.simple_select`.
     * @param ctx the parse tree
     */
    enterSimple_select?: (ctx: Simple_selectContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.simple_select`.
     * @param ctx the parse tree
     */
    exitSimple_select?: (ctx: Simple_selectContext) => void;
    /**
     * Enter a parse tree produced by the `union`
     * labeled alternative in `PostgreSQLParser.set_operator`.
     * @param ctx the parse tree
     */
    enterUnion?: (ctx: UnionContext) => void;
    /**
     * Exit a parse tree produced by the `union`
     * labeled alternative in `PostgreSQLParser.set_operator`.
     * @param ctx the parse tree
     */
    exitUnion?: (ctx: UnionContext) => void;
    /**
     * Enter a parse tree produced by the `intersect`
     * labeled alternative in `PostgreSQLParser.set_operator`.
     * @param ctx the parse tree
     */
    enterIntersect?: (ctx: IntersectContext) => void;
    /**
     * Exit a parse tree produced by the `intersect`
     * labeled alternative in `PostgreSQLParser.set_operator`.
     * @param ctx the parse tree
     */
    exitIntersect?: (ctx: IntersectContext) => void;
    /**
     * Enter a parse tree produced by the `except`
     * labeled alternative in `PostgreSQLParser.set_operator`.
     * @param ctx the parse tree
     */
    enterExcept?: (ctx: ExceptContext) => void;
    /**
     * Exit a parse tree produced by the `except`
     * labeled alternative in `PostgreSQLParser.set_operator`.
     * @param ctx the parse tree
     */
    exitExcept?: (ctx: ExceptContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.set_operator_with_all_or_distinct`.
     * @param ctx the parse tree
     */
    enterSet_operator_with_all_or_distinct?: (ctx: Set_operator_with_all_or_distinctContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.set_operator_with_all_or_distinct`.
     * @param ctx the parse tree
     */
    exitSet_operator_with_all_or_distinct?: (ctx: Set_operator_with_all_or_distinctContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.with_clause`.
     * @param ctx the parse tree
     */
    enterWith_clause?: (ctx: With_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.with_clause`.
     * @param ctx the parse tree
     */
    exitWith_clause?: (ctx: With_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.cte_list`.
     * @param ctx the parse tree
     */
    enterCte_list?: (ctx: Cte_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.cte_list`.
     * @param ctx the parse tree
     */
    exitCte_list?: (ctx: Cte_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.common_table_expr`.
     * @param ctx the parse tree
     */
    enterCommon_table_expr?: (ctx: Common_table_exprContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.common_table_expr`.
     * @param ctx the parse tree
     */
    exitCommon_table_expr?: (ctx: Common_table_exprContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.search_cluase`.
     * @param ctx the parse tree
     */
    enterSearch_cluase?: (ctx: Search_cluaseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.search_cluase`.
     * @param ctx the parse tree
     */
    exitSearch_cluase?: (ctx: Search_cluaseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.cycle_cluase`.
     * @param ctx the parse tree
     */
    enterCycle_cluase?: (ctx: Cycle_cluaseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.cycle_cluase`.
     * @param ctx the parse tree
     */
    exitCycle_cluase?: (ctx: Cycle_cluaseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_materialized`.
     * @param ctx the parse tree
     */
    enterOpt_materialized?: (ctx: Opt_materializedContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_materialized`.
     * @param ctx the parse tree
     */
    exitOpt_materialized?: (ctx: Opt_materializedContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_with_clause`.
     * @param ctx the parse tree
     */
    enterOpt_with_clause?: (ctx: Opt_with_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_with_clause`.
     * @param ctx the parse tree
     */
    exitOpt_with_clause?: (ctx: Opt_with_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.into_clause`.
     * @param ctx the parse tree
     */
    enterInto_clause?: (ctx: Into_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.into_clause`.
     * @param ctx the parse tree
     */
    exitInto_clause?: (ctx: Into_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_strict`.
     * @param ctx the parse tree
     */
    enterOpt_strict?: (ctx: Opt_strictContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_strict`.
     * @param ctx the parse tree
     */
    exitOpt_strict?: (ctx: Opt_strictContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opttempTableName`.
     * @param ctx the parse tree
     */
    enterOpttempTableName?: (ctx: OpttempTableNameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opttempTableName`.
     * @param ctx the parse tree
     */
    exitOpttempTableName?: (ctx: OpttempTableNameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_table`.
     * @param ctx the parse tree
     */
    enterOpt_table?: (ctx: Opt_tableContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_table`.
     * @param ctx the parse tree
     */
    exitOpt_table?: (ctx: Opt_tableContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.all_or_distinct`.
     * @param ctx the parse tree
     */
    enterAll_or_distinct?: (ctx: All_or_distinctContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.all_or_distinct`.
     * @param ctx the parse tree
     */
    exitAll_or_distinct?: (ctx: All_or_distinctContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.distinct_clause`.
     * @param ctx the parse tree
     */
    enterDistinct_clause?: (ctx: Distinct_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.distinct_clause`.
     * @param ctx the parse tree
     */
    exitDistinct_clause?: (ctx: Distinct_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_all_clause`.
     * @param ctx the parse tree
     */
    enterOpt_all_clause?: (ctx: Opt_all_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_all_clause`.
     * @param ctx the parse tree
     */
    exitOpt_all_clause?: (ctx: Opt_all_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_sort_clause`.
     * @param ctx the parse tree
     */
    enterOpt_sort_clause?: (ctx: Opt_sort_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_sort_clause`.
     * @param ctx the parse tree
     */
    exitOpt_sort_clause?: (ctx: Opt_sort_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.sort_clause`.
     * @param ctx the parse tree
     */
    enterSort_clause?: (ctx: Sort_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.sort_clause`.
     * @param ctx the parse tree
     */
    exitSort_clause?: (ctx: Sort_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.sortby_list`.
     * @param ctx the parse tree
     */
    enterSortby_list?: (ctx: Sortby_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.sortby_list`.
     * @param ctx the parse tree
     */
    exitSortby_list?: (ctx: Sortby_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.sortby`.
     * @param ctx the parse tree
     */
    enterSortby?: (ctx: SortbyContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.sortby`.
     * @param ctx the parse tree
     */
    exitSortby?: (ctx: SortbyContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.select_limit`.
     * @param ctx the parse tree
     */
    enterSelect_limit?: (ctx: Select_limitContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.select_limit`.
     * @param ctx the parse tree
     */
    exitSelect_limit?: (ctx: Select_limitContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_select_limit`.
     * @param ctx the parse tree
     */
    enterOpt_select_limit?: (ctx: Opt_select_limitContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_select_limit`.
     * @param ctx the parse tree
     */
    exitOpt_select_limit?: (ctx: Opt_select_limitContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.limit_clause`.
     * @param ctx the parse tree
     */
    enterLimit_clause?: (ctx: Limit_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.limit_clause`.
     * @param ctx the parse tree
     */
    exitLimit_clause?: (ctx: Limit_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.fetch_clause`.
     * @param ctx the parse tree
     */
    enterFetch_clause?: (ctx: Fetch_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.fetch_clause`.
     * @param ctx the parse tree
     */
    exitFetch_clause?: (ctx: Fetch_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.offset_clause`.
     * @param ctx the parse tree
     */
    enterOffset_clause?: (ctx: Offset_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.offset_clause`.
     * @param ctx the parse tree
     */
    exitOffset_clause?: (ctx: Offset_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.select_limit_value`.
     * @param ctx the parse tree
     */
    enterSelect_limit_value?: (ctx: Select_limit_valueContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.select_limit_value`.
     * @param ctx the parse tree
     */
    exitSelect_limit_value?: (ctx: Select_limit_valueContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.select_offset_value`.
     * @param ctx the parse tree
     */
    enterSelect_offset_value?: (ctx: Select_offset_valueContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.select_offset_value`.
     * @param ctx the parse tree
     */
    exitSelect_offset_value?: (ctx: Select_offset_valueContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.select_fetch_first_value`.
     * @param ctx the parse tree
     */
    enterSelect_fetch_first_value?: (ctx: Select_fetch_first_valueContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.select_fetch_first_value`.
     * @param ctx the parse tree
     */
    exitSelect_fetch_first_value?: (ctx: Select_fetch_first_valueContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.i_or_f_const`.
     * @param ctx the parse tree
     */
    enterI_or_f_const?: (ctx: I_or_f_constContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.i_or_f_const`.
     * @param ctx the parse tree
     */
    exitI_or_f_const?: (ctx: I_or_f_constContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.row_or_rows`.
     * @param ctx the parse tree
     */
    enterRow_or_rows?: (ctx: Row_or_rowsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.row_or_rows`.
     * @param ctx the parse tree
     */
    exitRow_or_rows?: (ctx: Row_or_rowsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.first_or_next`.
     * @param ctx the parse tree
     */
    enterFirst_or_next?: (ctx: First_or_nextContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.first_or_next`.
     * @param ctx the parse tree
     */
    exitFirst_or_next?: (ctx: First_or_nextContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.group_clause`.
     * @param ctx the parse tree
     */
    enterGroup_clause?: (ctx: Group_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.group_clause`.
     * @param ctx the parse tree
     */
    exitGroup_clause?: (ctx: Group_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.group_by_list`.
     * @param ctx the parse tree
     */
    enterGroup_by_list?: (ctx: Group_by_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.group_by_list`.
     * @param ctx the parse tree
     */
    exitGroup_by_list?: (ctx: Group_by_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.group_by_item`.
     * @param ctx the parse tree
     */
    enterGroup_by_item?: (ctx: Group_by_itemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.group_by_item`.
     * @param ctx the parse tree
     */
    exitGroup_by_item?: (ctx: Group_by_itemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.empty_grouping_set`.
     * @param ctx the parse tree
     */
    enterEmpty_grouping_set?: (ctx: Empty_grouping_setContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.empty_grouping_set`.
     * @param ctx the parse tree
     */
    exitEmpty_grouping_set?: (ctx: Empty_grouping_setContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.rollup_clause`.
     * @param ctx the parse tree
     */
    enterRollup_clause?: (ctx: Rollup_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.rollup_clause`.
     * @param ctx the parse tree
     */
    exitRollup_clause?: (ctx: Rollup_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.cube_clause`.
     * @param ctx the parse tree
     */
    enterCube_clause?: (ctx: Cube_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.cube_clause`.
     * @param ctx the parse tree
     */
    exitCube_clause?: (ctx: Cube_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.grouping_sets_clause`.
     * @param ctx the parse tree
     */
    enterGrouping_sets_clause?: (ctx: Grouping_sets_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.grouping_sets_clause`.
     * @param ctx the parse tree
     */
    exitGrouping_sets_clause?: (ctx: Grouping_sets_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.having_clause`.
     * @param ctx the parse tree
     */
    enterHaving_clause?: (ctx: Having_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.having_clause`.
     * @param ctx the parse tree
     */
    exitHaving_clause?: (ctx: Having_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.for_locking_clause`.
     * @param ctx the parse tree
     */
    enterFor_locking_clause?: (ctx: For_locking_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.for_locking_clause`.
     * @param ctx the parse tree
     */
    exitFor_locking_clause?: (ctx: For_locking_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_for_locking_clause`.
     * @param ctx the parse tree
     */
    enterOpt_for_locking_clause?: (ctx: Opt_for_locking_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_for_locking_clause`.
     * @param ctx the parse tree
     */
    exitOpt_for_locking_clause?: (ctx: Opt_for_locking_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.for_locking_items`.
     * @param ctx the parse tree
     */
    enterFor_locking_items?: (ctx: For_locking_itemsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.for_locking_items`.
     * @param ctx the parse tree
     */
    exitFor_locking_items?: (ctx: For_locking_itemsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.for_locking_item`.
     * @param ctx the parse tree
     */
    enterFor_locking_item?: (ctx: For_locking_itemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.for_locking_item`.
     * @param ctx the parse tree
     */
    exitFor_locking_item?: (ctx: For_locking_itemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.for_locking_strength`.
     * @param ctx the parse tree
     */
    enterFor_locking_strength?: (ctx: For_locking_strengthContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.for_locking_strength`.
     * @param ctx the parse tree
     */
    exitFor_locking_strength?: (ctx: For_locking_strengthContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.locked_rels_list`.
     * @param ctx the parse tree
     */
    enterLocked_rels_list?: (ctx: Locked_rels_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.locked_rels_list`.
     * @param ctx the parse tree
     */
    exitLocked_rels_list?: (ctx: Locked_rels_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.values_clause`.
     * @param ctx the parse tree
     */
    enterValues_clause?: (ctx: Values_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.values_clause`.
     * @param ctx the parse tree
     */
    exitValues_clause?: (ctx: Values_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.from_clause`.
     * @param ctx the parse tree
     */
    enterFrom_clause?: (ctx: From_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.from_clause`.
     * @param ctx the parse tree
     */
    exitFrom_clause?: (ctx: From_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.from_list`.
     * @param ctx the parse tree
     */
    enterFrom_list?: (ctx: From_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.from_list`.
     * @param ctx the parse tree
     */
    exitFrom_list?: (ctx: From_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.table_ref`.
     * @param ctx the parse tree
     */
    enterTable_ref?: (ctx: Table_refContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.table_ref`.
     * @param ctx the parse tree
     */
    exitTable_ref?: (ctx: Table_refContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.alias_clause`.
     * @param ctx the parse tree
     */
    enterAlias_clause?: (ctx: Alias_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.alias_clause`.
     * @param ctx the parse tree
     */
    exitAlias_clause?: (ctx: Alias_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_alias_clause`.
     * @param ctx the parse tree
     */
    enterOpt_alias_clause?: (ctx: Opt_alias_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_alias_clause`.
     * @param ctx the parse tree
     */
    exitOpt_alias_clause?: (ctx: Opt_alias_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.func_alias_clause`.
     * @param ctx the parse tree
     */
    enterFunc_alias_clause?: (ctx: Func_alias_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.func_alias_clause`.
     * @param ctx the parse tree
     */
    exitFunc_alias_clause?: (ctx: Func_alias_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.join_type`.
     * @param ctx the parse tree
     */
    enterJoin_type?: (ctx: Join_typeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.join_type`.
     * @param ctx the parse tree
     */
    exitJoin_type?: (ctx: Join_typeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.join_qual`.
     * @param ctx the parse tree
     */
    enterJoin_qual?: (ctx: Join_qualContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.join_qual`.
     * @param ctx the parse tree
     */
    exitJoin_qual?: (ctx: Join_qualContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.relation_expr`.
     * @param ctx the parse tree
     */
    enterRelation_expr?: (ctx: Relation_exprContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.relation_expr`.
     * @param ctx the parse tree
     */
    exitRelation_expr?: (ctx: Relation_exprContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.view_relation_expr`.
     * @param ctx the parse tree
     */
    enterView_relation_expr?: (ctx: View_relation_exprContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.view_relation_expr`.
     * @param ctx the parse tree
     */
    exitView_relation_expr?: (ctx: View_relation_exprContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.publication_relation_expr`.
     * @param ctx the parse tree
     */
    enterPublication_relation_expr?: (ctx: Publication_relation_exprContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.publication_relation_expr`.
     * @param ctx the parse tree
     */
    exitPublication_relation_expr?: (ctx: Publication_relation_exprContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.relation_expr_list`.
     * @param ctx the parse tree
     */
    enterRelation_expr_list?: (ctx: Relation_expr_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.relation_expr_list`.
     * @param ctx the parse tree
     */
    exitRelation_expr_list?: (ctx: Relation_expr_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.publication_relation_expr_list`.
     * @param ctx the parse tree
     */
    enterPublication_relation_expr_list?: (ctx: Publication_relation_expr_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.publication_relation_expr_list`.
     * @param ctx the parse tree
     */
    exitPublication_relation_expr_list?: (ctx: Publication_relation_expr_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.relation_expr_opt_alias`.
     * @param ctx the parse tree
     */
    enterRelation_expr_opt_alias?: (ctx: Relation_expr_opt_aliasContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.relation_expr_opt_alias`.
     * @param ctx the parse tree
     */
    exitRelation_expr_opt_alias?: (ctx: Relation_expr_opt_aliasContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.tablesample_clause`.
     * @param ctx the parse tree
     */
    enterTablesample_clause?: (ctx: Tablesample_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.tablesample_clause`.
     * @param ctx the parse tree
     */
    exitTablesample_clause?: (ctx: Tablesample_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_repeatable_clause`.
     * @param ctx the parse tree
     */
    enterOpt_repeatable_clause?: (ctx: Opt_repeatable_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_repeatable_clause`.
     * @param ctx the parse tree
     */
    exitOpt_repeatable_clause?: (ctx: Opt_repeatable_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.func_table`.
     * @param ctx the parse tree
     */
    enterFunc_table?: (ctx: Func_tableContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.func_table`.
     * @param ctx the parse tree
     */
    exitFunc_table?: (ctx: Func_tableContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.rowsfrom_item`.
     * @param ctx the parse tree
     */
    enterRowsfrom_item?: (ctx: Rowsfrom_itemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.rowsfrom_item`.
     * @param ctx the parse tree
     */
    exitRowsfrom_item?: (ctx: Rowsfrom_itemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.rowsfrom_list`.
     * @param ctx the parse tree
     */
    enterRowsfrom_list?: (ctx: Rowsfrom_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.rowsfrom_list`.
     * @param ctx the parse tree
     */
    exitRowsfrom_list?: (ctx: Rowsfrom_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_col_def_list`.
     * @param ctx the parse tree
     */
    enterOpt_col_def_list?: (ctx: Opt_col_def_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_col_def_list`.
     * @param ctx the parse tree
     */
    exitOpt_col_def_list?: (ctx: Opt_col_def_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_ordinality`.
     * @param ctx the parse tree
     */
    enterOpt_ordinality?: (ctx: Opt_ordinalityContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_ordinality`.
     * @param ctx the parse tree
     */
    exitOpt_ordinality?: (ctx: Opt_ordinalityContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.where_clause`.
     * @param ctx the parse tree
     */
    enterWhere_clause?: (ctx: Where_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.where_clause`.
     * @param ctx the parse tree
     */
    exitWhere_clause?: (ctx: Where_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.where_or_current_clause`.
     * @param ctx the parse tree
     */
    enterWhere_or_current_clause?: (ctx: Where_or_current_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.where_or_current_clause`.
     * @param ctx the parse tree
     */
    exitWhere_or_current_clause?: (ctx: Where_or_current_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opttablefuncelementlist`.
     * @param ctx the parse tree
     */
    enterOpttablefuncelementlist?: (ctx: OpttablefuncelementlistContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opttablefuncelementlist`.
     * @param ctx the parse tree
     */
    exitOpttablefuncelementlist?: (ctx: OpttablefuncelementlistContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.tablefuncelementlist`.
     * @param ctx the parse tree
     */
    enterTablefuncelementlist?: (ctx: TablefuncelementlistContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.tablefuncelementlist`.
     * @param ctx the parse tree
     */
    exitTablefuncelementlist?: (ctx: TablefuncelementlistContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.tablefuncelement`.
     * @param ctx the parse tree
     */
    enterTablefuncelement?: (ctx: TablefuncelementContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.tablefuncelement`.
     * @param ctx the parse tree
     */
    exitTablefuncelement?: (ctx: TablefuncelementContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.xmltable`.
     * @param ctx the parse tree
     */
    enterXmltable?: (ctx: XmltableContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.xmltable`.
     * @param ctx the parse tree
     */
    exitXmltable?: (ctx: XmltableContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.xmltable_column_list`.
     * @param ctx the parse tree
     */
    enterXmltable_column_list?: (ctx: Xmltable_column_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.xmltable_column_list`.
     * @param ctx the parse tree
     */
    exitXmltable_column_list?: (ctx: Xmltable_column_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.xmltable_column_el`.
     * @param ctx the parse tree
     */
    enterXmltable_column_el?: (ctx: Xmltable_column_elContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.xmltable_column_el`.
     * @param ctx the parse tree
     */
    exitXmltable_column_el?: (ctx: Xmltable_column_elContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.xmltable_column_option_list`.
     * @param ctx the parse tree
     */
    enterXmltable_column_option_list?: (ctx: Xmltable_column_option_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.xmltable_column_option_list`.
     * @param ctx the parse tree
     */
    exitXmltable_column_option_list?: (ctx: Xmltable_column_option_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.xmltable_column_option_el`.
     * @param ctx the parse tree
     */
    enterXmltable_column_option_el?: (ctx: Xmltable_column_option_elContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.xmltable_column_option_el`.
     * @param ctx the parse tree
     */
    exitXmltable_column_option_el?: (ctx: Xmltable_column_option_elContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.xml_namespace_list`.
     * @param ctx the parse tree
     */
    enterXml_namespace_list?: (ctx: Xml_namespace_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.xml_namespace_list`.
     * @param ctx the parse tree
     */
    exitXml_namespace_list?: (ctx: Xml_namespace_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.xml_namespace_el`.
     * @param ctx the parse tree
     */
    enterXml_namespace_el?: (ctx: Xml_namespace_elContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.xml_namespace_el`.
     * @param ctx the parse tree
     */
    exitXml_namespace_el?: (ctx: Xml_namespace_elContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.typename`.
     * @param ctx the parse tree
     */
    enterTypename?: (ctx: TypenameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.typename`.
     * @param ctx the parse tree
     */
    exitTypename?: (ctx: TypenameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_array_bounds`.
     * @param ctx the parse tree
     */
    enterOpt_array_bounds?: (ctx: Opt_array_boundsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_array_bounds`.
     * @param ctx the parse tree
     */
    exitOpt_array_bounds?: (ctx: Opt_array_boundsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.simpletypename`.
     * @param ctx the parse tree
     */
    enterSimpletypename?: (ctx: SimpletypenameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.simpletypename`.
     * @param ctx the parse tree
     */
    exitSimpletypename?: (ctx: SimpletypenameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.consttypename`.
     * @param ctx the parse tree
     */
    enterConsttypename?: (ctx: ConsttypenameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.consttypename`.
     * @param ctx the parse tree
     */
    exitConsttypename?: (ctx: ConsttypenameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.generictype`.
     * @param ctx the parse tree
     */
    enterGenerictype?: (ctx: GenerictypeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.generictype`.
     * @param ctx the parse tree
     */
    exitGenerictype?: (ctx: GenerictypeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_type_modifiers`.
     * @param ctx the parse tree
     */
    enterOpt_type_modifiers?: (ctx: Opt_type_modifiersContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_type_modifiers`.
     * @param ctx the parse tree
     */
    exitOpt_type_modifiers?: (ctx: Opt_type_modifiersContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.numeric`.
     * @param ctx the parse tree
     */
    enterNumeric?: (ctx: NumericContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.numeric`.
     * @param ctx the parse tree
     */
    exitNumeric?: (ctx: NumericContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_float`.
     * @param ctx the parse tree
     */
    enterOpt_float?: (ctx: Opt_floatContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_float`.
     * @param ctx the parse tree
     */
    exitOpt_float?: (ctx: Opt_floatContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.bit`.
     * @param ctx the parse tree
     */
    enterBit?: (ctx: BitContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.bit`.
     * @param ctx the parse tree
     */
    exitBit?: (ctx: BitContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.constbit`.
     * @param ctx the parse tree
     */
    enterConstbit?: (ctx: ConstbitContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.constbit`.
     * @param ctx the parse tree
     */
    exitConstbit?: (ctx: ConstbitContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.bitwithlength`.
     * @param ctx the parse tree
     */
    enterBitwithlength?: (ctx: BitwithlengthContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.bitwithlength`.
     * @param ctx the parse tree
     */
    exitBitwithlength?: (ctx: BitwithlengthContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.bitwithoutlength`.
     * @param ctx the parse tree
     */
    enterBitwithoutlength?: (ctx: BitwithoutlengthContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.bitwithoutlength`.
     * @param ctx the parse tree
     */
    exitBitwithoutlength?: (ctx: BitwithoutlengthContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.character`.
     * @param ctx the parse tree
     */
    enterCharacter?: (ctx: CharacterContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.character`.
     * @param ctx the parse tree
     */
    exitCharacter?: (ctx: CharacterContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.constcharacter`.
     * @param ctx the parse tree
     */
    enterConstcharacter?: (ctx: ConstcharacterContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.constcharacter`.
     * @param ctx the parse tree
     */
    exitConstcharacter?: (ctx: ConstcharacterContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.character_c`.
     * @param ctx the parse tree
     */
    enterCharacter_c?: (ctx: Character_cContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.character_c`.
     * @param ctx the parse tree
     */
    exitCharacter_c?: (ctx: Character_cContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_varying`.
     * @param ctx the parse tree
     */
    enterOpt_varying?: (ctx: Opt_varyingContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_varying`.
     * @param ctx the parse tree
     */
    exitOpt_varying?: (ctx: Opt_varyingContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.constdatetime`.
     * @param ctx the parse tree
     */
    enterConstdatetime?: (ctx: ConstdatetimeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.constdatetime`.
     * @param ctx the parse tree
     */
    exitConstdatetime?: (ctx: ConstdatetimeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.constinterval`.
     * @param ctx the parse tree
     */
    enterConstinterval?: (ctx: ConstintervalContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.constinterval`.
     * @param ctx the parse tree
     */
    exitConstinterval?: (ctx: ConstintervalContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_timezone`.
     * @param ctx the parse tree
     */
    enterOpt_timezone?: (ctx: Opt_timezoneContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_timezone`.
     * @param ctx the parse tree
     */
    exitOpt_timezone?: (ctx: Opt_timezoneContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_interval`.
     * @param ctx the parse tree
     */
    enterOpt_interval?: (ctx: Opt_intervalContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_interval`.
     * @param ctx the parse tree
     */
    exitOpt_interval?: (ctx: Opt_intervalContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.interval_second`.
     * @param ctx the parse tree
     */
    enterInterval_second?: (ctx: Interval_secondContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.interval_second`.
     * @param ctx the parse tree
     */
    exitInterval_second?: (ctx: Interval_secondContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_escape`.
     * @param ctx the parse tree
     */
    enterOpt_escape?: (ctx: Opt_escapeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_escape`.
     * @param ctx the parse tree
     */
    exitOpt_escape?: (ctx: Opt_escapeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.a_expr`.
     * @param ctx the parse tree
     */
    enterA_expr?: (ctx: A_exprContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.a_expr`.
     * @param ctx the parse tree
     */
    exitA_expr?: (ctx: A_exprContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.a_expr_qual`.
     * @param ctx the parse tree
     */
    enterA_expr_qual?: (ctx: A_expr_qualContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.a_expr_qual`.
     * @param ctx the parse tree
     */
    exitA_expr_qual?: (ctx: A_expr_qualContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.a_expr_lessless`.
     * @param ctx the parse tree
     */
    enterA_expr_lessless?: (ctx: A_expr_lesslessContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.a_expr_lessless`.
     * @param ctx the parse tree
     */
    exitA_expr_lessless?: (ctx: A_expr_lesslessContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.a_expr_or`.
     * @param ctx the parse tree
     */
    enterA_expr_or?: (ctx: A_expr_orContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.a_expr_or`.
     * @param ctx the parse tree
     */
    exitA_expr_or?: (ctx: A_expr_orContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.a_expr_and`.
     * @param ctx the parse tree
     */
    enterA_expr_and?: (ctx: A_expr_andContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.a_expr_and`.
     * @param ctx the parse tree
     */
    exitA_expr_and?: (ctx: A_expr_andContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.a_expr_in`.
     * @param ctx the parse tree
     */
    enterA_expr_in?: (ctx: A_expr_inContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.a_expr_in`.
     * @param ctx the parse tree
     */
    exitA_expr_in?: (ctx: A_expr_inContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.a_expr_unary_not`.
     * @param ctx the parse tree
     */
    enterA_expr_unary_not?: (ctx: A_expr_unary_notContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.a_expr_unary_not`.
     * @param ctx the parse tree
     */
    exitA_expr_unary_not?: (ctx: A_expr_unary_notContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.a_expr_isnull`.
     * @param ctx the parse tree
     */
    enterA_expr_isnull?: (ctx: A_expr_isnullContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.a_expr_isnull`.
     * @param ctx the parse tree
     */
    exitA_expr_isnull?: (ctx: A_expr_isnullContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.a_expr_is_not`.
     * @param ctx the parse tree
     */
    enterA_expr_is_not?: (ctx: A_expr_is_notContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.a_expr_is_not`.
     * @param ctx the parse tree
     */
    exitA_expr_is_not?: (ctx: A_expr_is_notContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.a_expr_compare`.
     * @param ctx the parse tree
     */
    enterA_expr_compare?: (ctx: A_expr_compareContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.a_expr_compare`.
     * @param ctx the parse tree
     */
    exitA_expr_compare?: (ctx: A_expr_compareContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.a_expr_like`.
     * @param ctx the parse tree
     */
    enterA_expr_like?: (ctx: A_expr_likeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.a_expr_like`.
     * @param ctx the parse tree
     */
    exitA_expr_like?: (ctx: A_expr_likeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.a_expr_qual_op`.
     * @param ctx the parse tree
     */
    enterA_expr_qual_op?: (ctx: A_expr_qual_opContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.a_expr_qual_op`.
     * @param ctx the parse tree
     */
    exitA_expr_qual_op?: (ctx: A_expr_qual_opContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.a_expr_unary_qualop`.
     * @param ctx the parse tree
     */
    enterA_expr_unary_qualop?: (ctx: A_expr_unary_qualopContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.a_expr_unary_qualop`.
     * @param ctx the parse tree
     */
    exitA_expr_unary_qualop?: (ctx: A_expr_unary_qualopContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.a_expr_add`.
     * @param ctx the parse tree
     */
    enterA_expr_add?: (ctx: A_expr_addContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.a_expr_add`.
     * @param ctx the parse tree
     */
    exitA_expr_add?: (ctx: A_expr_addContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.a_expr_mul`.
     * @param ctx the parse tree
     */
    enterA_expr_mul?: (ctx: A_expr_mulContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.a_expr_mul`.
     * @param ctx the parse tree
     */
    exitA_expr_mul?: (ctx: A_expr_mulContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.a_expr_caret`.
     * @param ctx the parse tree
     */
    enterA_expr_caret?: (ctx: A_expr_caretContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.a_expr_caret`.
     * @param ctx the parse tree
     */
    exitA_expr_caret?: (ctx: A_expr_caretContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.a_expr_unary_sign`.
     * @param ctx the parse tree
     */
    enterA_expr_unary_sign?: (ctx: A_expr_unary_signContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.a_expr_unary_sign`.
     * @param ctx the parse tree
     */
    exitA_expr_unary_sign?: (ctx: A_expr_unary_signContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.a_expr_at_time_zone`.
     * @param ctx the parse tree
     */
    enterA_expr_at_time_zone?: (ctx: A_expr_at_time_zoneContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.a_expr_at_time_zone`.
     * @param ctx the parse tree
     */
    exitA_expr_at_time_zone?: (ctx: A_expr_at_time_zoneContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.a_expr_collate`.
     * @param ctx the parse tree
     */
    enterA_expr_collate?: (ctx: A_expr_collateContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.a_expr_collate`.
     * @param ctx the parse tree
     */
    exitA_expr_collate?: (ctx: A_expr_collateContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.a_expr_typecast`.
     * @param ctx the parse tree
     */
    enterA_expr_typecast?: (ctx: A_expr_typecastContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.a_expr_typecast`.
     * @param ctx the parse tree
     */
    exitA_expr_typecast?: (ctx: A_expr_typecastContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.b_expr`.
     * @param ctx the parse tree
     */
    enterB_expr?: (ctx: B_exprContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.b_expr`.
     * @param ctx the parse tree
     */
    exitB_expr?: (ctx: B_exprContext) => void;
    /**
     * Enter a parse tree produced by the `c_expr_exists`
     * labeled alternative in `PostgreSQLParser.c_expr`.
     * @param ctx the parse tree
     */
    enterC_expr_exists?: (ctx: C_expr_existsContext) => void;
    /**
     * Exit a parse tree produced by the `c_expr_exists`
     * labeled alternative in `PostgreSQLParser.c_expr`.
     * @param ctx the parse tree
     */
    exitC_expr_exists?: (ctx: C_expr_existsContext) => void;
    /**
     * Enter a parse tree produced by the `c_expr_expr`
     * labeled alternative in `PostgreSQLParser.c_expr`.
     * @param ctx the parse tree
     */
    enterC_expr_expr?: (ctx: C_expr_exprContext) => void;
    /**
     * Exit a parse tree produced by the `c_expr_expr`
     * labeled alternative in `PostgreSQLParser.c_expr`.
     * @param ctx the parse tree
     */
    exitC_expr_expr?: (ctx: C_expr_exprContext) => void;
    /**
     * Enter a parse tree produced by the `c_expr_case`
     * labeled alternative in `PostgreSQLParser.c_expr`.
     * @param ctx the parse tree
     */
    enterC_expr_case?: (ctx: C_expr_caseContext) => void;
    /**
     * Exit a parse tree produced by the `c_expr_case`
     * labeled alternative in `PostgreSQLParser.c_expr`.
     * @param ctx the parse tree
     */
    exitC_expr_case?: (ctx: C_expr_caseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.plsqlvariablename`.
     * @param ctx the parse tree
     */
    enterPlsqlvariablename?: (ctx: PlsqlvariablenameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.plsqlvariablename`.
     * @param ctx the parse tree
     */
    exitPlsqlvariablename?: (ctx: PlsqlvariablenameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.func_application`.
     * @param ctx the parse tree
     */
    enterFunc_application?: (ctx: Func_applicationContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.func_application`.
     * @param ctx the parse tree
     */
    exitFunc_application?: (ctx: Func_applicationContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.func_expr`.
     * @param ctx the parse tree
     */
    enterFunc_expr?: (ctx: Func_exprContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.func_expr`.
     * @param ctx the parse tree
     */
    exitFunc_expr?: (ctx: Func_exprContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.func_expr_windowless`.
     * @param ctx the parse tree
     */
    enterFunc_expr_windowless?: (ctx: Func_expr_windowlessContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.func_expr_windowless`.
     * @param ctx the parse tree
     */
    exitFunc_expr_windowless?: (ctx: Func_expr_windowlessContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.func_expr_common_subexpr`.
     * @param ctx the parse tree
     */
    enterFunc_expr_common_subexpr?: (ctx: Func_expr_common_subexprContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.func_expr_common_subexpr`.
     * @param ctx the parse tree
     */
    exitFunc_expr_common_subexpr?: (ctx: Func_expr_common_subexprContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.xml_root_version`.
     * @param ctx the parse tree
     */
    enterXml_root_version?: (ctx: Xml_root_versionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.xml_root_version`.
     * @param ctx the parse tree
     */
    exitXml_root_version?: (ctx: Xml_root_versionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_xml_root_standalone`.
     * @param ctx the parse tree
     */
    enterOpt_xml_root_standalone?: (ctx: Opt_xml_root_standaloneContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_xml_root_standalone`.
     * @param ctx the parse tree
     */
    exitOpt_xml_root_standalone?: (ctx: Opt_xml_root_standaloneContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.xml_attributes`.
     * @param ctx the parse tree
     */
    enterXml_attributes?: (ctx: Xml_attributesContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.xml_attributes`.
     * @param ctx the parse tree
     */
    exitXml_attributes?: (ctx: Xml_attributesContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.xml_attribute_list`.
     * @param ctx the parse tree
     */
    enterXml_attribute_list?: (ctx: Xml_attribute_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.xml_attribute_list`.
     * @param ctx the parse tree
     */
    exitXml_attribute_list?: (ctx: Xml_attribute_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.xml_attribute_el`.
     * @param ctx the parse tree
     */
    enterXml_attribute_el?: (ctx: Xml_attribute_elContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.xml_attribute_el`.
     * @param ctx the parse tree
     */
    exitXml_attribute_el?: (ctx: Xml_attribute_elContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.document_or_content`.
     * @param ctx the parse tree
     */
    enterDocument_or_content?: (ctx: Document_or_contentContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.document_or_content`.
     * @param ctx the parse tree
     */
    exitDocument_or_content?: (ctx: Document_or_contentContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.xml_whitespace_option`.
     * @param ctx the parse tree
     */
    enterXml_whitespace_option?: (ctx: Xml_whitespace_optionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.xml_whitespace_option`.
     * @param ctx the parse tree
     */
    exitXml_whitespace_option?: (ctx: Xml_whitespace_optionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.xmlexists_argument`.
     * @param ctx the parse tree
     */
    enterXmlexists_argument?: (ctx: Xmlexists_argumentContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.xmlexists_argument`.
     * @param ctx the parse tree
     */
    exitXmlexists_argument?: (ctx: Xmlexists_argumentContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.xml_passing_mech`.
     * @param ctx the parse tree
     */
    enterXml_passing_mech?: (ctx: Xml_passing_mechContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.xml_passing_mech`.
     * @param ctx the parse tree
     */
    exitXml_passing_mech?: (ctx: Xml_passing_mechContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.within_group_clause`.
     * @param ctx the parse tree
     */
    enterWithin_group_clause?: (ctx: Within_group_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.within_group_clause`.
     * @param ctx the parse tree
     */
    exitWithin_group_clause?: (ctx: Within_group_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.filter_clause`.
     * @param ctx the parse tree
     */
    enterFilter_clause?: (ctx: Filter_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.filter_clause`.
     * @param ctx the parse tree
     */
    exitFilter_clause?: (ctx: Filter_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.window_clause`.
     * @param ctx the parse tree
     */
    enterWindow_clause?: (ctx: Window_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.window_clause`.
     * @param ctx the parse tree
     */
    exitWindow_clause?: (ctx: Window_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.window_definition_list`.
     * @param ctx the parse tree
     */
    enterWindow_definition_list?: (ctx: Window_definition_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.window_definition_list`.
     * @param ctx the parse tree
     */
    exitWindow_definition_list?: (ctx: Window_definition_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.window_definition`.
     * @param ctx the parse tree
     */
    enterWindow_definition?: (ctx: Window_definitionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.window_definition`.
     * @param ctx the parse tree
     */
    exitWindow_definition?: (ctx: Window_definitionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.over_clause`.
     * @param ctx the parse tree
     */
    enterOver_clause?: (ctx: Over_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.over_clause`.
     * @param ctx the parse tree
     */
    exitOver_clause?: (ctx: Over_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.window_specification`.
     * @param ctx the parse tree
     */
    enterWindow_specification?: (ctx: Window_specificationContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.window_specification`.
     * @param ctx the parse tree
     */
    exitWindow_specification?: (ctx: Window_specificationContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_existing_window_name`.
     * @param ctx the parse tree
     */
    enterOpt_existing_window_name?: (ctx: Opt_existing_window_nameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_existing_window_name`.
     * @param ctx the parse tree
     */
    exitOpt_existing_window_name?: (ctx: Opt_existing_window_nameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_partition_clause`.
     * @param ctx the parse tree
     */
    enterOpt_partition_clause?: (ctx: Opt_partition_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_partition_clause`.
     * @param ctx the parse tree
     */
    exitOpt_partition_clause?: (ctx: Opt_partition_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_frame_clause`.
     * @param ctx the parse tree
     */
    enterOpt_frame_clause?: (ctx: Opt_frame_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_frame_clause`.
     * @param ctx the parse tree
     */
    exitOpt_frame_clause?: (ctx: Opt_frame_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.frame_extent`.
     * @param ctx the parse tree
     */
    enterFrame_extent?: (ctx: Frame_extentContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.frame_extent`.
     * @param ctx the parse tree
     */
    exitFrame_extent?: (ctx: Frame_extentContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.frame_bound`.
     * @param ctx the parse tree
     */
    enterFrame_bound?: (ctx: Frame_boundContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.frame_bound`.
     * @param ctx the parse tree
     */
    exitFrame_bound?: (ctx: Frame_boundContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_window_exclusion_clause`.
     * @param ctx the parse tree
     */
    enterOpt_window_exclusion_clause?: (ctx: Opt_window_exclusion_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_window_exclusion_clause`.
     * @param ctx the parse tree
     */
    exitOpt_window_exclusion_clause?: (ctx: Opt_window_exclusion_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.row`.
     * @param ctx the parse tree
     */
    enterRow?: (ctx: RowContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.row`.
     * @param ctx the parse tree
     */
    exitRow?: (ctx: RowContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.explicit_row`.
     * @param ctx the parse tree
     */
    enterExplicit_row?: (ctx: Explicit_rowContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.explicit_row`.
     * @param ctx the parse tree
     */
    exitExplicit_row?: (ctx: Explicit_rowContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.implicit_row`.
     * @param ctx the parse tree
     */
    enterImplicit_row?: (ctx: Implicit_rowContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.implicit_row`.
     * @param ctx the parse tree
     */
    exitImplicit_row?: (ctx: Implicit_rowContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.sub_type`.
     * @param ctx the parse tree
     */
    enterSub_type?: (ctx: Sub_typeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.sub_type`.
     * @param ctx the parse tree
     */
    exitSub_type?: (ctx: Sub_typeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.all_op`.
     * @param ctx the parse tree
     */
    enterAll_op?: (ctx: All_opContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.all_op`.
     * @param ctx the parse tree
     */
    exitAll_op?: (ctx: All_opContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.mathop`.
     * @param ctx the parse tree
     */
    enterMathop?: (ctx: MathopContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.mathop`.
     * @param ctx the parse tree
     */
    exitMathop?: (ctx: MathopContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.qual_op`.
     * @param ctx the parse tree
     */
    enterQual_op?: (ctx: Qual_opContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.qual_op`.
     * @param ctx the parse tree
     */
    exitQual_op?: (ctx: Qual_opContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.qual_all_op`.
     * @param ctx the parse tree
     */
    enterQual_all_op?: (ctx: Qual_all_opContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.qual_all_op`.
     * @param ctx the parse tree
     */
    exitQual_all_op?: (ctx: Qual_all_opContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.subquery_Op`.
     * @param ctx the parse tree
     */
    enterSubquery_Op?: (ctx: Subquery_OpContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.subquery_Op`.
     * @param ctx the parse tree
     */
    exitSubquery_Op?: (ctx: Subquery_OpContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.expr_list`.
     * @param ctx the parse tree
     */
    enterExpr_list?: (ctx: Expr_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.expr_list`.
     * @param ctx the parse tree
     */
    exitExpr_list?: (ctx: Expr_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.column_expr_list_noparen`.
     * @param ctx the parse tree
     */
    enterColumn_expr_list_noparen?: (ctx: Column_expr_list_noparenContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.column_expr_list_noparen`.
     * @param ctx the parse tree
     */
    exitColumn_expr_list_noparen?: (ctx: Column_expr_list_noparenContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.column_expr_list`.
     * @param ctx the parse tree
     */
    enterColumn_expr_list?: (ctx: Column_expr_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.column_expr_list`.
     * @param ctx the parse tree
     */
    exitColumn_expr_list?: (ctx: Column_expr_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.column_expr`.
     * @param ctx the parse tree
     */
    enterColumn_expr?: (ctx: Column_exprContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.column_expr`.
     * @param ctx the parse tree
     */
    exitColumn_expr?: (ctx: Column_exprContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.column_expr_noparen`.
     * @param ctx the parse tree
     */
    enterColumn_expr_noparen?: (ctx: Column_expr_noparenContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.column_expr_noparen`.
     * @param ctx the parse tree
     */
    exitColumn_expr_noparen?: (ctx: Column_expr_noparenContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.func_arg_list`.
     * @param ctx the parse tree
     */
    enterFunc_arg_list?: (ctx: Func_arg_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.func_arg_list`.
     * @param ctx the parse tree
     */
    exitFunc_arg_list?: (ctx: Func_arg_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.func_arg_expr`.
     * @param ctx the parse tree
     */
    enterFunc_arg_expr?: (ctx: Func_arg_exprContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.func_arg_expr`.
     * @param ctx the parse tree
     */
    exitFunc_arg_expr?: (ctx: Func_arg_exprContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.type_list`.
     * @param ctx the parse tree
     */
    enterType_list?: (ctx: Type_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.type_list`.
     * @param ctx the parse tree
     */
    exitType_list?: (ctx: Type_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.array_expr`.
     * @param ctx the parse tree
     */
    enterArray_expr?: (ctx: Array_exprContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.array_expr`.
     * @param ctx the parse tree
     */
    exitArray_expr?: (ctx: Array_exprContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.array_expr_list`.
     * @param ctx the parse tree
     */
    enterArray_expr_list?: (ctx: Array_expr_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.array_expr_list`.
     * @param ctx the parse tree
     */
    exitArray_expr_list?: (ctx: Array_expr_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.extract_list`.
     * @param ctx the parse tree
     */
    enterExtract_list?: (ctx: Extract_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.extract_list`.
     * @param ctx the parse tree
     */
    exitExtract_list?: (ctx: Extract_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.extract_arg`.
     * @param ctx the parse tree
     */
    enterExtract_arg?: (ctx: Extract_argContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.extract_arg`.
     * @param ctx the parse tree
     */
    exitExtract_arg?: (ctx: Extract_argContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.unicode_normal_form`.
     * @param ctx the parse tree
     */
    enterUnicode_normal_form?: (ctx: Unicode_normal_formContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.unicode_normal_form`.
     * @param ctx the parse tree
     */
    exitUnicode_normal_form?: (ctx: Unicode_normal_formContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.overlay_list`.
     * @param ctx the parse tree
     */
    enterOverlay_list?: (ctx: Overlay_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.overlay_list`.
     * @param ctx the parse tree
     */
    exitOverlay_list?: (ctx: Overlay_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.position_list`.
     * @param ctx the parse tree
     */
    enterPosition_list?: (ctx: Position_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.position_list`.
     * @param ctx the parse tree
     */
    exitPosition_list?: (ctx: Position_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.substr_list`.
     * @param ctx the parse tree
     */
    enterSubstr_list?: (ctx: Substr_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.substr_list`.
     * @param ctx the parse tree
     */
    exitSubstr_list?: (ctx: Substr_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.trim_list`.
     * @param ctx the parse tree
     */
    enterTrim_list?: (ctx: Trim_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.trim_list`.
     * @param ctx the parse tree
     */
    exitTrim_list?: (ctx: Trim_listContext) => void;
    /**
     * Enter a parse tree produced by the `in_expr_select`
     * labeled alternative in `PostgreSQLParser.in_expr`.
     * @param ctx the parse tree
     */
    enterIn_expr_select?: (ctx: In_expr_selectContext) => void;
    /**
     * Exit a parse tree produced by the `in_expr_select`
     * labeled alternative in `PostgreSQLParser.in_expr`.
     * @param ctx the parse tree
     */
    exitIn_expr_select?: (ctx: In_expr_selectContext) => void;
    /**
     * Enter a parse tree produced by the `in_expr_list`
     * labeled alternative in `PostgreSQLParser.in_expr`.
     * @param ctx the parse tree
     */
    enterIn_expr_list?: (ctx: In_expr_listContext) => void;
    /**
     * Exit a parse tree produced by the `in_expr_list`
     * labeled alternative in `PostgreSQLParser.in_expr`.
     * @param ctx the parse tree
     */
    exitIn_expr_list?: (ctx: In_expr_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.case_expr`.
     * @param ctx the parse tree
     */
    enterCase_expr?: (ctx: Case_exprContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.case_expr`.
     * @param ctx the parse tree
     */
    exitCase_expr?: (ctx: Case_exprContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.when_clause_list`.
     * @param ctx the parse tree
     */
    enterWhen_clause_list?: (ctx: When_clause_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.when_clause_list`.
     * @param ctx the parse tree
     */
    exitWhen_clause_list?: (ctx: When_clause_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.when_clause`.
     * @param ctx the parse tree
     */
    enterWhen_clause?: (ctx: When_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.when_clause`.
     * @param ctx the parse tree
     */
    exitWhen_clause?: (ctx: When_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.case_default`.
     * @param ctx the parse tree
     */
    enterCase_default?: (ctx: Case_defaultContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.case_default`.
     * @param ctx the parse tree
     */
    exitCase_default?: (ctx: Case_defaultContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.case_arg`.
     * @param ctx the parse tree
     */
    enterCase_arg?: (ctx: Case_argContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.case_arg`.
     * @param ctx the parse tree
     */
    exitCase_arg?: (ctx: Case_argContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.columnref`.
     * @param ctx the parse tree
     */
    enterColumnref?: (ctx: ColumnrefContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.columnref`.
     * @param ctx the parse tree
     */
    exitColumnref?: (ctx: ColumnrefContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.indirection_el`.
     * @param ctx the parse tree
     */
    enterIndirection_el?: (ctx: Indirection_elContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.indirection_el`.
     * @param ctx the parse tree
     */
    exitIndirection_el?: (ctx: Indirection_elContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_slice_bound`.
     * @param ctx the parse tree
     */
    enterOpt_slice_bound?: (ctx: Opt_slice_boundContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_slice_bound`.
     * @param ctx the parse tree
     */
    exitOpt_slice_bound?: (ctx: Opt_slice_boundContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.indirection`.
     * @param ctx the parse tree
     */
    enterIndirection?: (ctx: IndirectionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.indirection`.
     * @param ctx the parse tree
     */
    exitIndirection?: (ctx: IndirectionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_indirection`.
     * @param ctx the parse tree
     */
    enterOpt_indirection?: (ctx: Opt_indirectionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_indirection`.
     * @param ctx the parse tree
     */
    exitOpt_indirection?: (ctx: Opt_indirectionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_target_list`.
     * @param ctx the parse tree
     */
    enterOpt_target_list?: (ctx: Opt_target_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_target_list`.
     * @param ctx the parse tree
     */
    exitOpt_target_list?: (ctx: Opt_target_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.target_list`.
     * @param ctx the parse tree
     */
    enterTarget_list?: (ctx: Target_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.target_list`.
     * @param ctx the parse tree
     */
    exitTarget_list?: (ctx: Target_listContext) => void;
    /**
     * Enter a parse tree produced by the `target_label`
     * labeled alternative in `PostgreSQLParser.target_el`.
     * @param ctx the parse tree
     */
    enterTarget_label?: (ctx: Target_labelContext) => void;
    /**
     * Exit a parse tree produced by the `target_label`
     * labeled alternative in `PostgreSQLParser.target_el`.
     * @param ctx the parse tree
     */
    exitTarget_label?: (ctx: Target_labelContext) => void;
    /**
     * Enter a parse tree produced by the `target_star`
     * labeled alternative in `PostgreSQLParser.target_el`.
     * @param ctx the parse tree
     */
    enterTarget_star?: (ctx: Target_starContext) => void;
    /**
     * Exit a parse tree produced by the `target_star`
     * labeled alternative in `PostgreSQLParser.target_el`.
     * @param ctx the parse tree
     */
    exitTarget_star?: (ctx: Target_starContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.qualified_name_list`.
     * @param ctx the parse tree
     */
    enterQualified_name_list?: (ctx: Qualified_name_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.qualified_name_list`.
     * @param ctx the parse tree
     */
    exitQualified_name_list?: (ctx: Qualified_name_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.table_name_list`.
     * @param ctx the parse tree
     */
    enterTable_name_list?: (ctx: Table_name_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.table_name_list`.
     * @param ctx the parse tree
     */
    exitTable_name_list?: (ctx: Table_name_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.schema_name_list`.
     * @param ctx the parse tree
     */
    enterSchema_name_list?: (ctx: Schema_name_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.schema_name_list`.
     * @param ctx the parse tree
     */
    exitSchema_name_list?: (ctx: Schema_name_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.database_nameList`.
     * @param ctx the parse tree
     */
    enterDatabase_nameList?: (ctx: Database_nameListContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.database_nameList`.
     * @param ctx the parse tree
     */
    exitDatabase_nameList?: (ctx: Database_nameListContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.procedure_name_list`.
     * @param ctx the parse tree
     */
    enterProcedure_name_list?: (ctx: Procedure_name_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.procedure_name_list`.
     * @param ctx the parse tree
     */
    exitProcedure_name_list?: (ctx: Procedure_name_listContext) => void;
    /**
     * Enter a parse tree produced by the `tablespaceNameCreate`
     * labeled alternative in `PostgreSQLParser.tablespace_name_create`.
     * @param ctx the parse tree
     */
    enterTablespaceNameCreate?: (ctx: TablespaceNameCreateContext) => void;
    /**
     * Exit a parse tree produced by the `tablespaceNameCreate`
     * labeled alternative in `PostgreSQLParser.tablespace_name_create`.
     * @param ctx the parse tree
     */
    exitTablespaceNameCreate?: (ctx: TablespaceNameCreateContext) => void;
    /**
     * Enter a parse tree produced by the `tablespaceName`
     * labeled alternative in `PostgreSQLParser.tablespace_name`.
     * @param ctx the parse tree
     */
    enterTablespaceName?: (ctx: TablespaceNameContext) => void;
    /**
     * Exit a parse tree produced by the `tablespaceName`
     * labeled alternative in `PostgreSQLParser.tablespace_name`.
     * @param ctx the parse tree
     */
    exitTablespaceName?: (ctx: TablespaceNameContext) => void;
    /**
     * Enter a parse tree produced by the `tableNameCreate`
     * labeled alternative in `PostgreSQLParser.table_name_create`.
     * @param ctx the parse tree
     */
    enterTableNameCreate?: (ctx: TableNameCreateContext) => void;
    /**
     * Exit a parse tree produced by the `tableNameCreate`
     * labeled alternative in `PostgreSQLParser.table_name_create`.
     * @param ctx the parse tree
     */
    exitTableNameCreate?: (ctx: TableNameCreateContext) => void;
    /**
     * Enter a parse tree produced by the `tableName`
     * labeled alternative in `PostgreSQLParser.table_name`.
     * @param ctx the parse tree
     */
    enterTableName?: (ctx: TableNameContext) => void;
    /**
     * Exit a parse tree produced by the `tableName`
     * labeled alternative in `PostgreSQLParser.table_name`.
     * @param ctx the parse tree
     */
    exitTableName?: (ctx: TableNameContext) => void;
    /**
     * Enter a parse tree produced by the `viewNameCreate`
     * labeled alternative in `PostgreSQLParser.view_name_create`.
     * @param ctx the parse tree
     */
    enterViewNameCreate?: (ctx: ViewNameCreateContext) => void;
    /**
     * Exit a parse tree produced by the `viewNameCreate`
     * labeled alternative in `PostgreSQLParser.view_name_create`.
     * @param ctx the parse tree
     */
    exitViewNameCreate?: (ctx: ViewNameCreateContext) => void;
    /**
     * Enter a parse tree produced by the `viewName`
     * labeled alternative in `PostgreSQLParser.view_name`.
     * @param ctx the parse tree
     */
    enterViewName?: (ctx: ViewNameContext) => void;
    /**
     * Exit a parse tree produced by the `viewName`
     * labeled alternative in `PostgreSQLParser.view_name`.
     * @param ctx the parse tree
     */
    exitViewName?: (ctx: ViewNameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.qualified_name`.
     * @param ctx the parse tree
     */
    enterQualified_name?: (ctx: Qualified_nameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.qualified_name`.
     * @param ctx the parse tree
     */
    exitQualified_name?: (ctx: Qualified_nameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.tablespace_name_list`.
     * @param ctx the parse tree
     */
    enterTablespace_name_list?: (ctx: Tablespace_name_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.tablespace_name_list`.
     * @param ctx the parse tree
     */
    exitTablespace_name_list?: (ctx: Tablespace_name_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.name_list`.
     * @param ctx the parse tree
     */
    enterName_list?: (ctx: Name_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.name_list`.
     * @param ctx the parse tree
     */
    exitName_list?: (ctx: Name_listContext) => void;
    /**
     * Enter a parse tree produced by the `databaseNameCreate`
     * labeled alternative in `PostgreSQLParser.database_name_create`.
     * @param ctx the parse tree
     */
    enterDatabaseNameCreate?: (ctx: DatabaseNameCreateContext) => void;
    /**
     * Exit a parse tree produced by the `databaseNameCreate`
     * labeled alternative in `PostgreSQLParser.database_name_create`.
     * @param ctx the parse tree
     */
    exitDatabaseNameCreate?: (ctx: DatabaseNameCreateContext) => void;
    /**
     * Enter a parse tree produced by the `databaseName`
     * labeled alternative in `PostgreSQLParser.database_name`.
     * @param ctx the parse tree
     */
    enterDatabaseName?: (ctx: DatabaseNameContext) => void;
    /**
     * Exit a parse tree produced by the `databaseName`
     * labeled alternative in `PostgreSQLParser.database_name`.
     * @param ctx the parse tree
     */
    exitDatabaseName?: (ctx: DatabaseNameContext) => void;
    /**
     * Enter a parse tree produced by the `schemaName`
     * labeled alternative in `PostgreSQLParser.schema_name`.
     * @param ctx the parse tree
     */
    enterSchemaName?: (ctx: SchemaNameContext) => void;
    /**
     * Exit a parse tree produced by the `schemaName`
     * labeled alternative in `PostgreSQLParser.schema_name`.
     * @param ctx the parse tree
     */
    exitSchemaName?: (ctx: SchemaNameContext) => void;
    /**
     * Enter a parse tree produced by the `routineNameCreate`
     * labeled alternative in `PostgreSQLParser.routine_name_create`.
     * @param ctx the parse tree
     */
    enterRoutineNameCreate?: (ctx: RoutineNameCreateContext) => void;
    /**
     * Exit a parse tree produced by the `routineNameCreate`
     * labeled alternative in `PostgreSQLParser.routine_name_create`.
     * @param ctx the parse tree
     */
    exitRoutineNameCreate?: (ctx: RoutineNameCreateContext) => void;
    /**
     * Enter a parse tree produced by the `routineName`
     * labeled alternative in `PostgreSQLParser.routine_name`.
     * @param ctx the parse tree
     */
    enterRoutineName?: (ctx: RoutineNameContext) => void;
    /**
     * Exit a parse tree produced by the `routineName`
     * labeled alternative in `PostgreSQLParser.routine_name`.
     * @param ctx the parse tree
     */
    exitRoutineName?: (ctx: RoutineNameContext) => void;
    /**
     * Enter a parse tree produced by the `procedureName`
     * labeled alternative in `PostgreSQLParser.procedure_name`.
     * @param ctx the parse tree
     */
    enterProcedureName?: (ctx: ProcedureNameContext) => void;
    /**
     * Exit a parse tree produced by the `procedureName`
     * labeled alternative in `PostgreSQLParser.procedure_name`.
     * @param ctx the parse tree
     */
    exitProcedureName?: (ctx: ProcedureNameContext) => void;
    /**
     * Enter a parse tree produced by the `procedureNameCreate`
     * labeled alternative in `PostgreSQLParser.procedure_name_create`.
     * @param ctx the parse tree
     */
    enterProcedureNameCreate?: (ctx: ProcedureNameCreateContext) => void;
    /**
     * Exit a parse tree produced by the `procedureNameCreate`
     * labeled alternative in `PostgreSQLParser.procedure_name_create`.
     * @param ctx the parse tree
     */
    exitProcedureNameCreate?: (ctx: ProcedureNameCreateContext) => void;
    /**
     * Enter a parse tree produced by the `columnName`
     * labeled alternative in `PostgreSQLParser.column_name`.
     * @param ctx the parse tree
     */
    enterColumnName?: (ctx: ColumnNameContext) => void;
    /**
     * Exit a parse tree produced by the `columnName`
     * labeled alternative in `PostgreSQLParser.column_name`.
     * @param ctx the parse tree
     */
    exitColumnName?: (ctx: ColumnNameContext) => void;
    /**
     * Enter a parse tree produced by the `columnNameCreate`
     * labeled alternative in `PostgreSQLParser.column_name_create`.
     * @param ctx the parse tree
     */
    enterColumnNameCreate?: (ctx: ColumnNameCreateContext) => void;
    /**
     * Exit a parse tree produced by the `columnNameCreate`
     * labeled alternative in `PostgreSQLParser.column_name_create`.
     * @param ctx the parse tree
     */
    exitColumnNameCreate?: (ctx: ColumnNameCreateContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.name`.
     * @param ctx the parse tree
     */
    enterName?: (ctx: NameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.name`.
     * @param ctx the parse tree
     */
    exitName?: (ctx: NameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.attr_name`.
     * @param ctx the parse tree
     */
    enterAttr_name?: (ctx: Attr_nameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.attr_name`.
     * @param ctx the parse tree
     */
    exitAttr_name?: (ctx: Attr_nameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.file_name`.
     * @param ctx the parse tree
     */
    enterFile_name?: (ctx: File_nameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.file_name`.
     * @param ctx the parse tree
     */
    exitFile_name?: (ctx: File_nameContext) => void;
    /**
     * Enter a parse tree produced by the `functionNameCreate`
     * labeled alternative in `PostgreSQLParser.function_name_create`.
     * @param ctx the parse tree
     */
    enterFunctionNameCreate?: (ctx: FunctionNameCreateContext) => void;
    /**
     * Exit a parse tree produced by the `functionNameCreate`
     * labeled alternative in `PostgreSQLParser.function_name_create`.
     * @param ctx the parse tree
     */
    exitFunctionNameCreate?: (ctx: FunctionNameCreateContext) => void;
    /**
     * Enter a parse tree produced by the `functionName`
     * labeled alternative in `PostgreSQLParser.function_name`.
     * @param ctx the parse tree
     */
    enterFunctionName?: (ctx: FunctionNameContext) => void;
    /**
     * Exit a parse tree produced by the `functionName`
     * labeled alternative in `PostgreSQLParser.function_name`.
     * @param ctx the parse tree
     */
    exitFunctionName?: (ctx: FunctionNameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.usual_name`.
     * @param ctx the parse tree
     */
    enterUsual_name?: (ctx: Usual_nameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.usual_name`.
     * @param ctx the parse tree
     */
    exitUsual_name?: (ctx: Usual_nameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.aexprconst`.
     * @param ctx the parse tree
     */
    enterAexprconst?: (ctx: AexprconstContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.aexprconst`.
     * @param ctx the parse tree
     */
    exitAexprconst?: (ctx: AexprconstContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.xconst`.
     * @param ctx the parse tree
     */
    enterXconst?: (ctx: XconstContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.xconst`.
     * @param ctx the parse tree
     */
    exitXconst?: (ctx: XconstContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.bconst`.
     * @param ctx the parse tree
     */
    enterBconst?: (ctx: BconstContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.bconst`.
     * @param ctx the parse tree
     */
    exitBconst?: (ctx: BconstContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.fconst`.
     * @param ctx the parse tree
     */
    enterFconst?: (ctx: FconstContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.fconst`.
     * @param ctx the parse tree
     */
    exitFconst?: (ctx: FconstContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.iconst`.
     * @param ctx the parse tree
     */
    enterIconst?: (ctx: IconstContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.iconst`.
     * @param ctx the parse tree
     */
    exitIconst?: (ctx: IconstContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.sconst`.
     * @param ctx the parse tree
     */
    enterSconst?: (ctx: SconstContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.sconst`.
     * @param ctx the parse tree
     */
    exitSconst?: (ctx: SconstContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.anysconst`.
     * @param ctx the parse tree
     */
    enterAnysconst?: (ctx: AnysconstContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.anysconst`.
     * @param ctx the parse tree
     */
    exitAnysconst?: (ctx: AnysconstContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_uescape`.
     * @param ctx the parse tree
     */
    enterOpt_uescape?: (ctx: Opt_uescapeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_uescape`.
     * @param ctx the parse tree
     */
    exitOpt_uescape?: (ctx: Opt_uescapeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.signediconst`.
     * @param ctx the parse tree
     */
    enterSignediconst?: (ctx: SignediconstContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.signediconst`.
     * @param ctx the parse tree
     */
    exitSignediconst?: (ctx: SignediconstContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.groupname`.
     * @param ctx the parse tree
     */
    enterGroupname?: (ctx: GroupnameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.groupname`.
     * @param ctx the parse tree
     */
    exitGroupname?: (ctx: GroupnameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.roleid`.
     * @param ctx the parse tree
     */
    enterRoleid?: (ctx: RoleidContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.roleid`.
     * @param ctx the parse tree
     */
    exitRoleid?: (ctx: RoleidContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.rolespec`.
     * @param ctx the parse tree
     */
    enterRolespec?: (ctx: RolespecContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.rolespec`.
     * @param ctx the parse tree
     */
    exitRolespec?: (ctx: RolespecContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.role_list`.
     * @param ctx the parse tree
     */
    enterRole_list?: (ctx: Role_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.role_list`.
     * @param ctx the parse tree
     */
    exitRole_list?: (ctx: Role_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.colid`.
     * @param ctx the parse tree
     */
    enterColid?: (ctx: ColidContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.colid`.
     * @param ctx the parse tree
     */
    exitColid?: (ctx: ColidContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.index_method_choices`.
     * @param ctx the parse tree
     */
    enterIndex_method_choices?: (ctx: Index_method_choicesContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.index_method_choices`.
     * @param ctx the parse tree
     */
    exitIndex_method_choices?: (ctx: Index_method_choicesContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.exclude_element`.
     * @param ctx the parse tree
     */
    enterExclude_element?: (ctx: Exclude_elementContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.exclude_element`.
     * @param ctx the parse tree
     */
    exitExclude_element?: (ctx: Exclude_elementContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.index_paramenters`.
     * @param ctx the parse tree
     */
    enterIndex_paramenters?: (ctx: Index_paramentersContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.index_paramenters`.
     * @param ctx the parse tree
     */
    exitIndex_paramenters?: (ctx: Index_paramentersContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.type_function_name`.
     * @param ctx the parse tree
     */
    enterType_function_name?: (ctx: Type_function_nameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.type_function_name`.
     * @param ctx the parse tree
     */
    exitType_function_name?: (ctx: Type_function_nameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.type_usual_name`.
     * @param ctx the parse tree
     */
    enterType_usual_name?: (ctx: Type_usual_nameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.type_usual_name`.
     * @param ctx the parse tree
     */
    exitType_usual_name?: (ctx: Type_usual_nameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.nonreservedword_column`.
     * @param ctx the parse tree
     */
    enterNonreservedword_column?: (ctx: Nonreservedword_columnContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.nonreservedword_column`.
     * @param ctx the parse tree
     */
    exitNonreservedword_column?: (ctx: Nonreservedword_columnContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.nonreservedword`.
     * @param ctx the parse tree
     */
    enterNonreservedword?: (ctx: NonreservedwordContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.nonreservedword`.
     * @param ctx the parse tree
     */
    exitNonreservedword?: (ctx: NonreservedwordContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.collabel`.
     * @param ctx the parse tree
     */
    enterCollabel?: (ctx: CollabelContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.collabel`.
     * @param ctx the parse tree
     */
    exitCollabel?: (ctx: CollabelContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.identifier`.
     * @param ctx the parse tree
     */
    enterIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.identifier`.
     * @param ctx the parse tree
     */
    exitIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.plsqlidentifier`.
     * @param ctx the parse tree
     */
    enterPlsqlidentifier?: (ctx: PlsqlidentifierContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.plsqlidentifier`.
     * @param ctx the parse tree
     */
    exitPlsqlidentifier?: (ctx: PlsqlidentifierContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.unreserved_keyword`.
     * @param ctx the parse tree
     */
    enterUnreserved_keyword?: (ctx: Unreserved_keywordContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.unreserved_keyword`.
     * @param ctx the parse tree
     */
    exitUnreserved_keyword?: (ctx: Unreserved_keywordContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.col_name_keyword`.
     * @param ctx the parse tree
     */
    enterCol_name_keyword?: (ctx: Col_name_keywordContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.col_name_keyword`.
     * @param ctx the parse tree
     */
    exitCol_name_keyword?: (ctx: Col_name_keywordContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.type_func_name_keyword`.
     * @param ctx the parse tree
     */
    enterType_func_name_keyword?: (ctx: Type_func_name_keywordContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.type_func_name_keyword`.
     * @param ctx the parse tree
     */
    exitType_func_name_keyword?: (ctx: Type_func_name_keywordContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.reserved_keyword`.
     * @param ctx the parse tree
     */
    enterReserved_keyword?: (ctx: Reserved_keywordContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.reserved_keyword`.
     * @param ctx the parse tree
     */
    exitReserved_keyword?: (ctx: Reserved_keywordContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.pl_function`.
     * @param ctx the parse tree
     */
    enterPl_function?: (ctx: Pl_functionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.pl_function`.
     * @param ctx the parse tree
     */
    exitPl_function?: (ctx: Pl_functionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.comp_options`.
     * @param ctx the parse tree
     */
    enterComp_options?: (ctx: Comp_optionsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.comp_options`.
     * @param ctx the parse tree
     */
    exitComp_options?: (ctx: Comp_optionsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.comp_option`.
     * @param ctx the parse tree
     */
    enterComp_option?: (ctx: Comp_optionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.comp_option`.
     * @param ctx the parse tree
     */
    exitComp_option?: (ctx: Comp_optionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.sharp`.
     * @param ctx the parse tree
     */
    enterSharp?: (ctx: SharpContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.sharp`.
     * @param ctx the parse tree
     */
    exitSharp?: (ctx: SharpContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.option_value`.
     * @param ctx the parse tree
     */
    enterOption_value?: (ctx: Option_valueContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.option_value`.
     * @param ctx the parse tree
     */
    exitOption_value?: (ctx: Option_valueContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_semi`.
     * @param ctx the parse tree
     */
    enterOpt_semi?: (ctx: Opt_semiContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_semi`.
     * @param ctx the parse tree
     */
    exitOpt_semi?: (ctx: Opt_semiContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.pl_block`.
     * @param ctx the parse tree
     */
    enterPl_block?: (ctx: Pl_blockContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.pl_block`.
     * @param ctx the parse tree
     */
    exitPl_block?: (ctx: Pl_blockContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.decl_sect`.
     * @param ctx the parse tree
     */
    enterDecl_sect?: (ctx: Decl_sectContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.decl_sect`.
     * @param ctx the parse tree
     */
    exitDecl_sect?: (ctx: Decl_sectContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.decl_start`.
     * @param ctx the parse tree
     */
    enterDecl_start?: (ctx: Decl_startContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.decl_start`.
     * @param ctx the parse tree
     */
    exitDecl_start?: (ctx: Decl_startContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.decl_stmts`.
     * @param ctx the parse tree
     */
    enterDecl_stmts?: (ctx: Decl_stmtsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.decl_stmts`.
     * @param ctx the parse tree
     */
    exitDecl_stmts?: (ctx: Decl_stmtsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.label_decl`.
     * @param ctx the parse tree
     */
    enterLabel_decl?: (ctx: Label_declContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.label_decl`.
     * @param ctx the parse tree
     */
    exitLabel_decl?: (ctx: Label_declContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.decl_stmt`.
     * @param ctx the parse tree
     */
    enterDecl_stmt?: (ctx: Decl_stmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.decl_stmt`.
     * @param ctx the parse tree
     */
    exitDecl_stmt?: (ctx: Decl_stmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.decl_statement`.
     * @param ctx the parse tree
     */
    enterDecl_statement?: (ctx: Decl_statementContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.decl_statement`.
     * @param ctx the parse tree
     */
    exitDecl_statement?: (ctx: Decl_statementContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_scrollable`.
     * @param ctx the parse tree
     */
    enterOpt_scrollable?: (ctx: Opt_scrollableContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_scrollable`.
     * @param ctx the parse tree
     */
    exitOpt_scrollable?: (ctx: Opt_scrollableContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.decl_cursor_query`.
     * @param ctx the parse tree
     */
    enterDecl_cursor_query?: (ctx: Decl_cursor_queryContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.decl_cursor_query`.
     * @param ctx the parse tree
     */
    exitDecl_cursor_query?: (ctx: Decl_cursor_queryContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.decl_cursor_args`.
     * @param ctx the parse tree
     */
    enterDecl_cursor_args?: (ctx: Decl_cursor_argsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.decl_cursor_args`.
     * @param ctx the parse tree
     */
    exitDecl_cursor_args?: (ctx: Decl_cursor_argsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.decl_cursor_arglist`.
     * @param ctx the parse tree
     */
    enterDecl_cursor_arglist?: (ctx: Decl_cursor_arglistContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.decl_cursor_arglist`.
     * @param ctx the parse tree
     */
    exitDecl_cursor_arglist?: (ctx: Decl_cursor_arglistContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.decl_cursor_arg`.
     * @param ctx the parse tree
     */
    enterDecl_cursor_arg?: (ctx: Decl_cursor_argContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.decl_cursor_arg`.
     * @param ctx the parse tree
     */
    exitDecl_cursor_arg?: (ctx: Decl_cursor_argContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.decl_is_for`.
     * @param ctx the parse tree
     */
    enterDecl_is_for?: (ctx: Decl_is_forContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.decl_is_for`.
     * @param ctx the parse tree
     */
    exitDecl_is_for?: (ctx: Decl_is_forContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.decl_aliasitem`.
     * @param ctx the parse tree
     */
    enterDecl_aliasitem?: (ctx: Decl_aliasitemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.decl_aliasitem`.
     * @param ctx the parse tree
     */
    exitDecl_aliasitem?: (ctx: Decl_aliasitemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.decl_varname`.
     * @param ctx the parse tree
     */
    enterDecl_varname?: (ctx: Decl_varnameContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.decl_varname`.
     * @param ctx the parse tree
     */
    exitDecl_varname?: (ctx: Decl_varnameContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.decl_const`.
     * @param ctx the parse tree
     */
    enterDecl_const?: (ctx: Decl_constContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.decl_const`.
     * @param ctx the parse tree
     */
    exitDecl_const?: (ctx: Decl_constContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.decl_datatype`.
     * @param ctx the parse tree
     */
    enterDecl_datatype?: (ctx: Decl_datatypeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.decl_datatype`.
     * @param ctx the parse tree
     */
    exitDecl_datatype?: (ctx: Decl_datatypeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.decl_collate`.
     * @param ctx the parse tree
     */
    enterDecl_collate?: (ctx: Decl_collateContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.decl_collate`.
     * @param ctx the parse tree
     */
    exitDecl_collate?: (ctx: Decl_collateContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.decl_notnull`.
     * @param ctx the parse tree
     */
    enterDecl_notnull?: (ctx: Decl_notnullContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.decl_notnull`.
     * @param ctx the parse tree
     */
    exitDecl_notnull?: (ctx: Decl_notnullContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.decl_defval`.
     * @param ctx the parse tree
     */
    enterDecl_defval?: (ctx: Decl_defvalContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.decl_defval`.
     * @param ctx the parse tree
     */
    exitDecl_defval?: (ctx: Decl_defvalContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.decl_defkey`.
     * @param ctx the parse tree
     */
    enterDecl_defkey?: (ctx: Decl_defkeyContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.decl_defkey`.
     * @param ctx the parse tree
     */
    exitDecl_defkey?: (ctx: Decl_defkeyContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.assign_operator`.
     * @param ctx the parse tree
     */
    enterAssign_operator?: (ctx: Assign_operatorContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.assign_operator`.
     * @param ctx the parse tree
     */
    exitAssign_operator?: (ctx: Assign_operatorContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.proc_sect`.
     * @param ctx the parse tree
     */
    enterProc_sect?: (ctx: Proc_sectContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.proc_sect`.
     * @param ctx the parse tree
     */
    exitProc_sect?: (ctx: Proc_sectContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.proc_stmt`.
     * @param ctx the parse tree
     */
    enterProc_stmt?: (ctx: Proc_stmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.proc_stmt`.
     * @param ctx the parse tree
     */
    exitProc_stmt?: (ctx: Proc_stmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.stmt_perform`.
     * @param ctx the parse tree
     */
    enterStmt_perform?: (ctx: Stmt_performContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.stmt_perform`.
     * @param ctx the parse tree
     */
    exitStmt_perform?: (ctx: Stmt_performContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.stmt_call`.
     * @param ctx the parse tree
     */
    enterStmt_call?: (ctx: Stmt_callContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.stmt_call`.
     * @param ctx the parse tree
     */
    exitStmt_call?: (ctx: Stmt_callContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_expr_list`.
     * @param ctx the parse tree
     */
    enterOpt_expr_list?: (ctx: Opt_expr_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_expr_list`.
     * @param ctx the parse tree
     */
    exitOpt_expr_list?: (ctx: Opt_expr_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.stmt_assign`.
     * @param ctx the parse tree
     */
    enterStmt_assign?: (ctx: Stmt_assignContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.stmt_assign`.
     * @param ctx the parse tree
     */
    exitStmt_assign?: (ctx: Stmt_assignContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.stmt_getdiag`.
     * @param ctx the parse tree
     */
    enterStmt_getdiag?: (ctx: Stmt_getdiagContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.stmt_getdiag`.
     * @param ctx the parse tree
     */
    exitStmt_getdiag?: (ctx: Stmt_getdiagContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.getdiag_area_opt`.
     * @param ctx the parse tree
     */
    enterGetdiag_area_opt?: (ctx: Getdiag_area_optContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.getdiag_area_opt`.
     * @param ctx the parse tree
     */
    exitGetdiag_area_opt?: (ctx: Getdiag_area_optContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.getdiag_list`.
     * @param ctx the parse tree
     */
    enterGetdiag_list?: (ctx: Getdiag_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.getdiag_list`.
     * @param ctx the parse tree
     */
    exitGetdiag_list?: (ctx: Getdiag_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.getdiag_list_item`.
     * @param ctx the parse tree
     */
    enterGetdiag_list_item?: (ctx: Getdiag_list_itemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.getdiag_list_item`.
     * @param ctx the parse tree
     */
    exitGetdiag_list_item?: (ctx: Getdiag_list_itemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.getdiag_item`.
     * @param ctx the parse tree
     */
    enterGetdiag_item?: (ctx: Getdiag_itemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.getdiag_item`.
     * @param ctx the parse tree
     */
    exitGetdiag_item?: (ctx: Getdiag_itemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.getdiag_target`.
     * @param ctx the parse tree
     */
    enterGetdiag_target?: (ctx: Getdiag_targetContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.getdiag_target`.
     * @param ctx the parse tree
     */
    exitGetdiag_target?: (ctx: Getdiag_targetContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.assign_var`.
     * @param ctx the parse tree
     */
    enterAssign_var?: (ctx: Assign_varContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.assign_var`.
     * @param ctx the parse tree
     */
    exitAssign_var?: (ctx: Assign_varContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.stmt_if`.
     * @param ctx the parse tree
     */
    enterStmt_if?: (ctx: Stmt_ifContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.stmt_if`.
     * @param ctx the parse tree
     */
    exitStmt_if?: (ctx: Stmt_ifContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.stmt_elsifs`.
     * @param ctx the parse tree
     */
    enterStmt_elsifs?: (ctx: Stmt_elsifsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.stmt_elsifs`.
     * @param ctx the parse tree
     */
    exitStmt_elsifs?: (ctx: Stmt_elsifsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.stmt_else`.
     * @param ctx the parse tree
     */
    enterStmt_else?: (ctx: Stmt_elseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.stmt_else`.
     * @param ctx the parse tree
     */
    exitStmt_else?: (ctx: Stmt_elseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.stmt_case`.
     * @param ctx the parse tree
     */
    enterStmt_case?: (ctx: Stmt_caseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.stmt_case`.
     * @param ctx the parse tree
     */
    exitStmt_case?: (ctx: Stmt_caseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_expr_until_when`.
     * @param ctx the parse tree
     */
    enterOpt_expr_until_when?: (ctx: Opt_expr_until_whenContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_expr_until_when`.
     * @param ctx the parse tree
     */
    exitOpt_expr_until_when?: (ctx: Opt_expr_until_whenContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.case_when_list`.
     * @param ctx the parse tree
     */
    enterCase_when_list?: (ctx: Case_when_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.case_when_list`.
     * @param ctx the parse tree
     */
    exitCase_when_list?: (ctx: Case_when_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.case_when`.
     * @param ctx the parse tree
     */
    enterCase_when?: (ctx: Case_whenContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.case_when`.
     * @param ctx the parse tree
     */
    exitCase_when?: (ctx: Case_whenContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_case_else`.
     * @param ctx the parse tree
     */
    enterOpt_case_else?: (ctx: Opt_case_elseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_case_else`.
     * @param ctx the parse tree
     */
    exitOpt_case_else?: (ctx: Opt_case_elseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.stmt_loop`.
     * @param ctx the parse tree
     */
    enterStmt_loop?: (ctx: Stmt_loopContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.stmt_loop`.
     * @param ctx the parse tree
     */
    exitStmt_loop?: (ctx: Stmt_loopContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.stmt_while`.
     * @param ctx the parse tree
     */
    enterStmt_while?: (ctx: Stmt_whileContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.stmt_while`.
     * @param ctx the parse tree
     */
    exitStmt_while?: (ctx: Stmt_whileContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.stmt_for`.
     * @param ctx the parse tree
     */
    enterStmt_for?: (ctx: Stmt_forContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.stmt_for`.
     * @param ctx the parse tree
     */
    exitStmt_for?: (ctx: Stmt_forContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.for_control`.
     * @param ctx the parse tree
     */
    enterFor_control?: (ctx: For_controlContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.for_control`.
     * @param ctx the parse tree
     */
    exitFor_control?: (ctx: For_controlContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_for_using_expression`.
     * @param ctx the parse tree
     */
    enterOpt_for_using_expression?: (ctx: Opt_for_using_expressionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_for_using_expression`.
     * @param ctx the parse tree
     */
    exitOpt_for_using_expression?: (ctx: Opt_for_using_expressionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_cursor_parameters`.
     * @param ctx the parse tree
     */
    enterOpt_cursor_parameters?: (ctx: Opt_cursor_parametersContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_cursor_parameters`.
     * @param ctx the parse tree
     */
    exitOpt_cursor_parameters?: (ctx: Opt_cursor_parametersContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_reverse`.
     * @param ctx the parse tree
     */
    enterOpt_reverse?: (ctx: Opt_reverseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_reverse`.
     * @param ctx the parse tree
     */
    exitOpt_reverse?: (ctx: Opt_reverseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_by_expression`.
     * @param ctx the parse tree
     */
    enterOpt_by_expression?: (ctx: Opt_by_expressionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_by_expression`.
     * @param ctx the parse tree
     */
    exitOpt_by_expression?: (ctx: Opt_by_expressionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.for_variable`.
     * @param ctx the parse tree
     */
    enterFor_variable?: (ctx: For_variableContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.for_variable`.
     * @param ctx the parse tree
     */
    exitFor_variable?: (ctx: For_variableContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.stmt_foreach_a`.
     * @param ctx the parse tree
     */
    enterStmt_foreach_a?: (ctx: Stmt_foreach_aContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.stmt_foreach_a`.
     * @param ctx the parse tree
     */
    exitStmt_foreach_a?: (ctx: Stmt_foreach_aContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.foreach_slice`.
     * @param ctx the parse tree
     */
    enterForeach_slice?: (ctx: Foreach_sliceContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.foreach_slice`.
     * @param ctx the parse tree
     */
    exitForeach_slice?: (ctx: Foreach_sliceContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.stmt_exit`.
     * @param ctx the parse tree
     */
    enterStmt_exit?: (ctx: Stmt_exitContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.stmt_exit`.
     * @param ctx the parse tree
     */
    exitStmt_exit?: (ctx: Stmt_exitContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.exit_type`.
     * @param ctx the parse tree
     */
    enterExit_type?: (ctx: Exit_typeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.exit_type`.
     * @param ctx the parse tree
     */
    exitExit_type?: (ctx: Exit_typeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.stmt_return`.
     * @param ctx the parse tree
     */
    enterStmt_return?: (ctx: Stmt_returnContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.stmt_return`.
     * @param ctx the parse tree
     */
    exitStmt_return?: (ctx: Stmt_returnContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_return_result`.
     * @param ctx the parse tree
     */
    enterOpt_return_result?: (ctx: Opt_return_resultContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_return_result`.
     * @param ctx the parse tree
     */
    exitOpt_return_result?: (ctx: Opt_return_resultContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.stmt_raise`.
     * @param ctx the parse tree
     */
    enterStmt_raise?: (ctx: Stmt_raiseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.stmt_raise`.
     * @param ctx the parse tree
     */
    exitStmt_raise?: (ctx: Stmt_raiseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_stmt_raise_level`.
     * @param ctx the parse tree
     */
    enterOpt_stmt_raise_level?: (ctx: Opt_stmt_raise_levelContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_stmt_raise_level`.
     * @param ctx the parse tree
     */
    exitOpt_stmt_raise_level?: (ctx: Opt_stmt_raise_levelContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_raise_list`.
     * @param ctx the parse tree
     */
    enterOpt_raise_list?: (ctx: Opt_raise_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_raise_list`.
     * @param ctx the parse tree
     */
    exitOpt_raise_list?: (ctx: Opt_raise_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_raise_using`.
     * @param ctx the parse tree
     */
    enterOpt_raise_using?: (ctx: Opt_raise_usingContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_raise_using`.
     * @param ctx the parse tree
     */
    exitOpt_raise_using?: (ctx: Opt_raise_usingContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_raise_using_elem`.
     * @param ctx the parse tree
     */
    enterOpt_raise_using_elem?: (ctx: Opt_raise_using_elemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_raise_using_elem`.
     * @param ctx the parse tree
     */
    exitOpt_raise_using_elem?: (ctx: Opt_raise_using_elemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_raise_using_elem_list`.
     * @param ctx the parse tree
     */
    enterOpt_raise_using_elem_list?: (ctx: Opt_raise_using_elem_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_raise_using_elem_list`.
     * @param ctx the parse tree
     */
    exitOpt_raise_using_elem_list?: (ctx: Opt_raise_using_elem_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.stmt_assert`.
     * @param ctx the parse tree
     */
    enterStmt_assert?: (ctx: Stmt_assertContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.stmt_assert`.
     * @param ctx the parse tree
     */
    exitStmt_assert?: (ctx: Stmt_assertContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_stmt_assert_message`.
     * @param ctx the parse tree
     */
    enterOpt_stmt_assert_message?: (ctx: Opt_stmt_assert_messageContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_stmt_assert_message`.
     * @param ctx the parse tree
     */
    exitOpt_stmt_assert_message?: (ctx: Opt_stmt_assert_messageContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.loop_body`.
     * @param ctx the parse tree
     */
    enterLoop_body?: (ctx: Loop_bodyContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.loop_body`.
     * @param ctx the parse tree
     */
    exitLoop_body?: (ctx: Loop_bodyContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.stmt_execsql`.
     * @param ctx the parse tree
     */
    enterStmt_execsql?: (ctx: Stmt_execsqlContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.stmt_execsql`.
     * @param ctx the parse tree
     */
    exitStmt_execsql?: (ctx: Stmt_execsqlContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.stmt_dynexecute`.
     * @param ctx the parse tree
     */
    enterStmt_dynexecute?: (ctx: Stmt_dynexecuteContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.stmt_dynexecute`.
     * @param ctx the parse tree
     */
    exitStmt_dynexecute?: (ctx: Stmt_dynexecuteContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_execute_using`.
     * @param ctx the parse tree
     */
    enterOpt_execute_using?: (ctx: Opt_execute_usingContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_execute_using`.
     * @param ctx the parse tree
     */
    exitOpt_execute_using?: (ctx: Opt_execute_usingContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_execute_using_list`.
     * @param ctx the parse tree
     */
    enterOpt_execute_using_list?: (ctx: Opt_execute_using_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_execute_using_list`.
     * @param ctx the parse tree
     */
    exitOpt_execute_using_list?: (ctx: Opt_execute_using_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_execute_into`.
     * @param ctx the parse tree
     */
    enterOpt_execute_into?: (ctx: Opt_execute_intoContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_execute_into`.
     * @param ctx the parse tree
     */
    exitOpt_execute_into?: (ctx: Opt_execute_intoContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.stmt_open`.
     * @param ctx the parse tree
     */
    enterStmt_open?: (ctx: Stmt_openContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.stmt_open`.
     * @param ctx the parse tree
     */
    exitStmt_open?: (ctx: Stmt_openContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_open_bound_list_item`.
     * @param ctx the parse tree
     */
    enterOpt_open_bound_list_item?: (ctx: Opt_open_bound_list_itemContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_open_bound_list_item`.
     * @param ctx the parse tree
     */
    exitOpt_open_bound_list_item?: (ctx: Opt_open_bound_list_itemContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_open_bound_list`.
     * @param ctx the parse tree
     */
    enterOpt_open_bound_list?: (ctx: Opt_open_bound_listContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_open_bound_list`.
     * @param ctx the parse tree
     */
    exitOpt_open_bound_list?: (ctx: Opt_open_bound_listContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_open_using`.
     * @param ctx the parse tree
     */
    enterOpt_open_using?: (ctx: Opt_open_usingContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_open_using`.
     * @param ctx the parse tree
     */
    exitOpt_open_using?: (ctx: Opt_open_usingContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_scroll_option`.
     * @param ctx the parse tree
     */
    enterOpt_scroll_option?: (ctx: Opt_scroll_optionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_scroll_option`.
     * @param ctx the parse tree
     */
    exitOpt_scroll_option?: (ctx: Opt_scroll_optionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_scroll_option_no`.
     * @param ctx the parse tree
     */
    enterOpt_scroll_option_no?: (ctx: Opt_scroll_option_noContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_scroll_option_no`.
     * @param ctx the parse tree
     */
    exitOpt_scroll_option_no?: (ctx: Opt_scroll_option_noContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.stmt_fetch`.
     * @param ctx the parse tree
     */
    enterStmt_fetch?: (ctx: Stmt_fetchContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.stmt_fetch`.
     * @param ctx the parse tree
     */
    exitStmt_fetch?: (ctx: Stmt_fetchContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.into_target`.
     * @param ctx the parse tree
     */
    enterInto_target?: (ctx: Into_targetContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.into_target`.
     * @param ctx the parse tree
     */
    exitInto_target?: (ctx: Into_targetContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_cursor_from`.
     * @param ctx the parse tree
     */
    enterOpt_cursor_from?: (ctx: Opt_cursor_fromContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_cursor_from`.
     * @param ctx the parse tree
     */
    exitOpt_cursor_from?: (ctx: Opt_cursor_fromContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_fetch_direction`.
     * @param ctx the parse tree
     */
    enterOpt_fetch_direction?: (ctx: Opt_fetch_directionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_fetch_direction`.
     * @param ctx the parse tree
     */
    exitOpt_fetch_direction?: (ctx: Opt_fetch_directionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.stmt_move`.
     * @param ctx the parse tree
     */
    enterStmt_move?: (ctx: Stmt_moveContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.stmt_move`.
     * @param ctx the parse tree
     */
    exitStmt_move?: (ctx: Stmt_moveContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.mergestmt`.
     * @param ctx the parse tree
     */
    enterMergestmt?: (ctx: MergestmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.mergestmt`.
     * @param ctx the parse tree
     */
    exitMergestmt?: (ctx: MergestmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.data_source`.
     * @param ctx the parse tree
     */
    enterData_source?: (ctx: Data_sourceContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.data_source`.
     * @param ctx the parse tree
     */
    exitData_source?: (ctx: Data_sourceContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.join_condition`.
     * @param ctx the parse tree
     */
    enterJoin_condition?: (ctx: Join_conditionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.join_condition`.
     * @param ctx the parse tree
     */
    exitJoin_condition?: (ctx: Join_conditionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.merge_when_clause`.
     * @param ctx the parse tree
     */
    enterMerge_when_clause?: (ctx: Merge_when_clauseContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.merge_when_clause`.
     * @param ctx the parse tree
     */
    exitMerge_when_clause?: (ctx: Merge_when_clauseContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.merge_insert`.
     * @param ctx the parse tree
     */
    enterMerge_insert?: (ctx: Merge_insertContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.merge_insert`.
     * @param ctx the parse tree
     */
    exitMerge_insert?: (ctx: Merge_insertContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.merge_update`.
     * @param ctx the parse tree
     */
    enterMerge_update?: (ctx: Merge_updateContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.merge_update`.
     * @param ctx the parse tree
     */
    exitMerge_update?: (ctx: Merge_updateContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.default_values_or_values`.
     * @param ctx the parse tree
     */
    enterDefault_values_or_values?: (ctx: Default_values_or_valuesContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.default_values_or_values`.
     * @param ctx the parse tree
     */
    exitDefault_values_or_values?: (ctx: Default_values_or_valuesContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.exprofdefaultlist`.
     * @param ctx the parse tree
     */
    enterExprofdefaultlist?: (ctx: ExprofdefaultlistContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.exprofdefaultlist`.
     * @param ctx the parse tree
     */
    exitExprofdefaultlist?: (ctx: ExprofdefaultlistContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.exprofdefault`.
     * @param ctx the parse tree
     */
    enterExprofdefault?: (ctx: ExprofdefaultContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.exprofdefault`.
     * @param ctx the parse tree
     */
    exitExprofdefault?: (ctx: ExprofdefaultContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.stmt_close`.
     * @param ctx the parse tree
     */
    enterStmt_close?: (ctx: Stmt_closeContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.stmt_close`.
     * @param ctx the parse tree
     */
    exitStmt_close?: (ctx: Stmt_closeContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.stmt_null`.
     * @param ctx the parse tree
     */
    enterStmt_null?: (ctx: Stmt_nullContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.stmt_null`.
     * @param ctx the parse tree
     */
    exitStmt_null?: (ctx: Stmt_nullContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.stmt_commit`.
     * @param ctx the parse tree
     */
    enterStmt_commit?: (ctx: Stmt_commitContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.stmt_commit`.
     * @param ctx the parse tree
     */
    exitStmt_commit?: (ctx: Stmt_commitContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.stmt_rollback`.
     * @param ctx the parse tree
     */
    enterStmt_rollback?: (ctx: Stmt_rollbackContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.stmt_rollback`.
     * @param ctx the parse tree
     */
    exitStmt_rollback?: (ctx: Stmt_rollbackContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.plsql_opt_transaction_chain`.
     * @param ctx the parse tree
     */
    enterPlsql_opt_transaction_chain?: (ctx: Plsql_opt_transaction_chainContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.plsql_opt_transaction_chain`.
     * @param ctx the parse tree
     */
    exitPlsql_opt_transaction_chain?: (ctx: Plsql_opt_transaction_chainContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.stmt_set`.
     * @param ctx the parse tree
     */
    enterStmt_set?: (ctx: Stmt_setContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.stmt_set`.
     * @param ctx the parse tree
     */
    exitStmt_set?: (ctx: Stmt_setContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.cursor_variable`.
     * @param ctx the parse tree
     */
    enterCursor_variable?: (ctx: Cursor_variableContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.cursor_variable`.
     * @param ctx the parse tree
     */
    exitCursor_variable?: (ctx: Cursor_variableContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.exception_sect`.
     * @param ctx the parse tree
     */
    enterException_sect?: (ctx: Exception_sectContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.exception_sect`.
     * @param ctx the parse tree
     */
    exitException_sect?: (ctx: Exception_sectContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.proc_exceptions`.
     * @param ctx the parse tree
     */
    enterProc_exceptions?: (ctx: Proc_exceptionsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.proc_exceptions`.
     * @param ctx the parse tree
     */
    exitProc_exceptions?: (ctx: Proc_exceptionsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.proc_exception`.
     * @param ctx the parse tree
     */
    enterProc_exception?: (ctx: Proc_exceptionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.proc_exception`.
     * @param ctx the parse tree
     */
    exitProc_exception?: (ctx: Proc_exceptionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.proc_conditions`.
     * @param ctx the parse tree
     */
    enterProc_conditions?: (ctx: Proc_conditionsContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.proc_conditions`.
     * @param ctx the parse tree
     */
    exitProc_conditions?: (ctx: Proc_conditionsContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.proc_condition`.
     * @param ctx the parse tree
     */
    enterProc_condition?: (ctx: Proc_conditionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.proc_condition`.
     * @param ctx the parse tree
     */
    exitProc_condition?: (ctx: Proc_conditionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_block_label`.
     * @param ctx the parse tree
     */
    enterOpt_block_label?: (ctx: Opt_block_labelContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_block_label`.
     * @param ctx the parse tree
     */
    exitOpt_block_label?: (ctx: Opt_block_labelContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_loop_label`.
     * @param ctx the parse tree
     */
    enterOpt_loop_label?: (ctx: Opt_loop_labelContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_loop_label`.
     * @param ctx the parse tree
     */
    exitOpt_loop_label?: (ctx: Opt_loop_labelContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_label`.
     * @param ctx the parse tree
     */
    enterOpt_label?: (ctx: Opt_labelContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_label`.
     * @param ctx the parse tree
     */
    exitOpt_label?: (ctx: Opt_labelContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_exitcond`.
     * @param ctx the parse tree
     */
    enterOpt_exitcond?: (ctx: Opt_exitcondContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_exitcond`.
     * @param ctx the parse tree
     */
    exitOpt_exitcond?: (ctx: Opt_exitcondContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.any_identifier`.
     * @param ctx the parse tree
     */
    enterAny_identifier?: (ctx: Any_identifierContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.any_identifier`.
     * @param ctx the parse tree
     */
    exitAny_identifier?: (ctx: Any_identifierContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.plsql_unreserved_keyword`.
     * @param ctx the parse tree
     */
    enterPlsql_unreserved_keyword?: (ctx: Plsql_unreserved_keywordContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.plsql_unreserved_keyword`.
     * @param ctx the parse tree
     */
    exitPlsql_unreserved_keyword?: (ctx: Plsql_unreserved_keywordContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.sql_expression`.
     * @param ctx the parse tree
     */
    enterSql_expression?: (ctx: Sql_expressionContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.sql_expression`.
     * @param ctx the parse tree
     */
    exitSql_expression?: (ctx: Sql_expressionContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.expr_until_then`.
     * @param ctx the parse tree
     */
    enterExpr_until_then?: (ctx: Expr_until_thenContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.expr_until_then`.
     * @param ctx the parse tree
     */
    exitExpr_until_then?: (ctx: Expr_until_thenContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.expr_until_semi`.
     * @param ctx the parse tree
     */
    enterExpr_until_semi?: (ctx: Expr_until_semiContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.expr_until_semi`.
     * @param ctx the parse tree
     */
    exitExpr_until_semi?: (ctx: Expr_until_semiContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.expr_until_rightbracket`.
     * @param ctx the parse tree
     */
    enterExpr_until_rightbracket?: (ctx: Expr_until_rightbracketContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.expr_until_rightbracket`.
     * @param ctx the parse tree
     */
    exitExpr_until_rightbracket?: (ctx: Expr_until_rightbracketContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.expr_until_loop`.
     * @param ctx the parse tree
     */
    enterExpr_until_loop?: (ctx: Expr_until_loopContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.expr_until_loop`.
     * @param ctx the parse tree
     */
    exitExpr_until_loop?: (ctx: Expr_until_loopContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.make_execsql_stmt`.
     * @param ctx the parse tree
     */
    enterMake_execsql_stmt?: (ctx: Make_execsql_stmtContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.make_execsql_stmt`.
     * @param ctx the parse tree
     */
    exitMake_execsql_stmt?: (ctx: Make_execsql_stmtContext) => void;
    /**
     * Enter a parse tree produced by `PostgreSQLParser.opt_returning_clause_into`.
     * @param ctx the parse tree
     */
    enterOpt_returning_clause_into?: (ctx: Opt_returning_clause_intoContext) => void;
    /**
     * Exit a parse tree produced by `PostgreSQLParser.opt_returning_clause_into`.
     * @param ctx the parse tree
     */
    exitOpt_returning_clause_into?: (ctx: Opt_returning_clause_intoContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

