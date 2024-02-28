// Generated from dt-sql-parser/src/grammar/pgsql/PostgreSQLParser.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


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
import { Create_opt_column_listContext } from "./PostgreSQLParser.js";
import { Column_listContext } from "./PostgreSQLParser.js";
import { Create_column_listContext } from "./PostgreSQLParser.js";
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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PostgreSQLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class PostgreSQLParserVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `PostgreSQLParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.plsqlroot`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPlsqlroot?: (ctx: PlsqlrootContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.singleStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleStmt?: (ctx: SingleStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt?: (ctx: StmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.plsqlconsolecommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPlsqlconsolecommand?: (ctx: PlsqlconsolecommandContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.callstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCallstmt?: (ctx: CallstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.createrolestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreaterolestmt?: (ctx: CreaterolestmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_with`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_with?: (ctx: Opt_withContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.optrolelist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptrolelist?: (ctx: OptrolelistContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alteroptrolelist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlteroptrolelist?: (ctx: AlteroptrolelistContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alteroptroleelem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlteroptroleelem?: (ctx: AlteroptroleelemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.createoptroleelem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateoptroleelem?: (ctx: CreateoptroleelemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.createuserstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateuserstmt?: (ctx: CreateuserstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alterrolestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterrolestmt?: (ctx: AlterrolestmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_in_database`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_in_database?: (ctx: Opt_in_databaseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alterrolesetstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterrolesetstmt?: (ctx: AlterrolesetstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alterroutinestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterroutinestmt?: (ctx: AlterroutinestmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alter_routine_cluase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_routine_cluase?: (ctx: Alter_routine_cluaseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.routine_action_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoutine_action_list?: (ctx: Routine_action_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.routine_action`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoutine_action?: (ctx: Routine_actionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.creategroupstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreategroupstmt?: (ctx: CreategroupstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.altergroupstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAltergroupstmt?: (ctx: AltergroupstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.add_drop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd_drop?: (ctx: Add_dropContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.createschemastmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateschemastmt?: (ctx: CreateschemastmtContext) => Result;
    /**
     * Visit a parse tree produced by the `schemaNameCreate`
     * labeled alternative in `PostgreSQLParser.schema_name_create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSchemaNameCreate?: (ctx: SchemaNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.optschemaeltlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptschemaeltlist?: (ctx: OptschemaeltlistContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.schema_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSchema_stmt?: (ctx: Schema_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.variablesetstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariablesetstmt?: (ctx: VariablesetstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.set_rest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_rest?: (ctx: Set_restContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.generic_set`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneric_set?: (ctx: Generic_setContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.set_rest_more`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_rest_more?: (ctx: Set_rest_moreContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.var_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVar_name?: (ctx: Var_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.var_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVar_list?: (ctx: Var_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.var_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVar_value?: (ctx: Var_valueContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.iso_level`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIso_level?: (ctx: Iso_levelContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_boolean_or_string_column`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_boolean_or_string_column?: (ctx: Opt_boolean_or_string_columnContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_boolean_or_string`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_boolean_or_string?: (ctx: Opt_boolean_or_stringContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.zone_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitZone_value?: (ctx: Zone_valueContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_encoding`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_encoding?: (ctx: Opt_encodingContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.nonreservedword_or_sconst_column`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonreservedword_or_sconst_column?: (ctx: Nonreservedword_or_sconst_columnContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.nonreservedword_or_sconst`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonreservedword_or_sconst?: (ctx: Nonreservedword_or_sconstContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.variableresetstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableresetstmt?: (ctx: VariableresetstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.reset_rest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReset_rest?: (ctx: Reset_restContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.generic_reset`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneric_reset?: (ctx: Generic_resetContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.setresetclause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetresetclause?: (ctx: SetresetclauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.functionsetresetclause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionsetresetclause?: (ctx: FunctionsetresetclauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.variableshowstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableshowstmt?: (ctx: VariableshowstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.constraintssetstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstraintssetstmt?: (ctx: ConstraintssetstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.constraints_set_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstraints_set_list?: (ctx: Constraints_set_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.constraints_set_mode`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstraints_set_mode?: (ctx: Constraints_set_modeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.checkpointstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCheckpointstmt?: (ctx: CheckpointstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.discardstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDiscardstmt?: (ctx: DiscardstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.altertablestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAltertablestmt?: (ctx: AltertablestmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alter_table_cmds`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_table_cmds?: (ctx: Alter_table_cmdsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.partition_bound_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartition_bound_spec?: (ctx: Partition_bound_specContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.partition_bound_cluase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartition_bound_cluase?: (ctx: Partition_bound_cluaseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.partition_bound_choose`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartition_bound_choose?: (ctx: Partition_bound_chooseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.partition_with_cluase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartition_with_cluase?: (ctx: Partition_with_cluaseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.partition_cmd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartition_cmd?: (ctx: Partition_cmdContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.index_partition_cmd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_partition_cmd?: (ctx: Index_partition_cmdContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alter_table_cmd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_table_cmd?: (ctx: Alter_table_cmdContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alter_column_default`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_column_default?: (ctx: Alter_column_defaultContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_drop_behavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_drop_behavior?: (ctx: Opt_drop_behaviorContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_collate_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_collate_clause?: (ctx: Opt_collate_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alter_using`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_using?: (ctx: Alter_usingContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.replica_identity`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplica_identity?: (ctx: Replica_identityContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.reloptions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReloptions?: (ctx: ReloptionsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_reloptions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_reloptions?: (ctx: Opt_reloptionsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.reloption_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReloption_list?: (ctx: Reloption_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.reloption_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReloption_elem?: (ctx: Reloption_elemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alter_identity_column_option_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_identity_column_option_list?: (ctx: Alter_identity_column_option_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alter_identity_column_option`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_identity_column_option?: (ctx: Alter_identity_column_optionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.partitionboundspec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionboundspec?: (ctx: PartitionboundspecContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.hash_partbound_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHash_partbound_elem?: (ctx: Hash_partbound_elemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.hash_partbound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHash_partbound?: (ctx: Hash_partboundContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.altercompositetypestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAltercompositetypestmt?: (ctx: AltercompositetypestmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alter_type_cmds`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_type_cmds?: (ctx: Alter_type_cmdsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alter_type_cmd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_type_cmd?: (ctx: Alter_type_cmdContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.closeportalstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCloseportalstmt?: (ctx: CloseportalstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.copystmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopystmt?: (ctx: CopystmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.copy_from`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopy_from?: (ctx: Copy_fromContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_program?: (ctx: Opt_programContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.copy_file_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopy_file_name?: (ctx: Copy_file_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.copy_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopy_options?: (ctx: Copy_optionsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.copy_opt_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopy_opt_list?: (ctx: Copy_opt_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.copy_opt_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopy_opt_item?: (ctx: Copy_opt_itemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_binary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_binary?: (ctx: Opt_binaryContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.copy_delimiter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopy_delimiter?: (ctx: Copy_delimiterContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_using`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_using?: (ctx: Opt_usingContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.copy_generic_opt_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopy_generic_opt_list?: (ctx: Copy_generic_opt_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.copy_generic_opt_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopy_generic_opt_elem?: (ctx: Copy_generic_opt_elemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.copy_generic_opt_arg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopy_generic_opt_arg?: (ctx: Copy_generic_opt_argContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.copy_generic_opt_arg_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopy_generic_opt_arg_list?: (ctx: Copy_generic_opt_arg_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.copy_generic_opt_arg_list_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopy_generic_opt_arg_list_item?: (ctx: Copy_generic_opt_arg_list_itemContext) => Result;
    /**
     * Visit a parse tree produced by the `columnCreateTable`
     * labeled alternative in `PostgreSQLParser.createstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnCreateTable?: (ctx: ColumnCreateTableContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opttemp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpttemp?: (ctx: OpttempContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.table_column_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_column_list?: (ctx: Table_column_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opttableelementlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpttableelementlist?: (ctx: OpttableelementlistContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opttypedtableelementlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpttypedtableelementlist?: (ctx: OpttypedtableelementlistContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.tableelementlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableelementlist?: (ctx: TableelementlistContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.typedtableelementlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypedtableelementlist?: (ctx: TypedtableelementlistContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.tableelement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableelement?: (ctx: TableelementContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.typedtableelement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypedtableelement?: (ctx: TypedtableelementContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.column_def`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_def?: (ctx: Column_defContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.compressionCluase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompressionCluase?: (ctx: CompressionCluaseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.storageCluase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStorageCluase?: (ctx: StorageCluaseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.columnOptions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnOptions?: (ctx: ColumnOptionsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.colquallist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColquallist?: (ctx: ColquallistContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.colconstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColconstraint?: (ctx: ColconstraintContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.colconstraintelem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColconstraintelem?: (ctx: ColconstraintelemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.nulls_distinct`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNulls_distinct?: (ctx: Nulls_distinctContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.generated_when`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenerated_when?: (ctx: Generated_whenContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.deferrable_trigger`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeferrable_trigger?: (ctx: Deferrable_triggerContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.initially_trigger`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInitially_trigger?: (ctx: Initially_triggerContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.tablelikeclause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablelikeclause?: (ctx: TablelikeclauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.tablelikeoptionlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablelikeoptionlist?: (ctx: TablelikeoptionlistContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.tablelikeoption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablelikeoption?: (ctx: TablelikeoptionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.tableconstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableconstraint?: (ctx: TableconstraintContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.constraintelem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstraintelem?: (ctx: ConstraintelemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_no_inherit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_no_inherit?: (ctx: Opt_no_inheritContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_column_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_column_list?: (ctx: Opt_column_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.create_opt_column_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_opt_column_list?: (ctx: Create_opt_column_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.column_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_list?: (ctx: Column_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.create_column_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_column_list?: (ctx: Create_column_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_c_include`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_c_include?: (ctx: Opt_c_includeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.key_match`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKey_match?: (ctx: Key_matchContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.exclusionconstraintlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExclusionconstraintlist?: (ctx: ExclusionconstraintlistContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.exclusionconstraintelem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExclusionconstraintelem?: (ctx: ExclusionconstraintelemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.exclusionwhereclause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExclusionwhereclause?: (ctx: ExclusionwhereclauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.key_actions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKey_actions?: (ctx: Key_actionsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.key_update`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKey_update?: (ctx: Key_updateContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.key_delete`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKey_delete?: (ctx: Key_deleteContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.key_action`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKey_action?: (ctx: Key_actionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.optinherit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptinherit?: (ctx: OptinheritContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.optpartitionspec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptpartitionspec?: (ctx: OptpartitionspecContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.partitionspec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionspec?: (ctx: PartitionspecContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.part_params`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPart_params?: (ctx: Part_paramsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.part_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPart_elem?: (ctx: Part_elemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.table_access_method_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_access_method_clause?: (ctx: Table_access_method_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.optwith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptwith?: (ctx: OptwithContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.oncommitoption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOncommitoption?: (ctx: OncommitoptionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opttablespace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpttablespace?: (ctx: OpttablespaceContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.index_paramenters_create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_paramenters_create?: (ctx: Index_paramenters_createContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.optconstablespace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptconstablespace?: (ctx: OptconstablespaceContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.existingindex`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExistingindex?: (ctx: ExistingindexContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.createstatsstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatestatsstmt?: (ctx: CreatestatsstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alterstatsstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterstatsstmt?: (ctx: AlterstatsstmtContext) => Result;
    /**
     * Visit a parse tree produced by the `queryCreateTable`
     * labeled alternative in `PostgreSQLParser.createasstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryCreateTable?: (ctx: QueryCreateTableContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.create_as_target`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_as_target?: (ctx: Create_as_targetContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_with_data`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_with_data?: (ctx: Opt_with_dataContext) => Result;
    /**
     * Visit a parse tree produced by the `createMaterializedView`
     * labeled alternative in `PostgreSQLParser.creatematviewstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.create_mv_target`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_mv_target?: (ctx: Create_mv_targetContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.optnolog`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptnolog?: (ctx: OptnologContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.refreshmatviewstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefreshmatviewstmt?: (ctx: RefreshmatviewstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.createseqstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateseqstmt?: (ctx: CreateseqstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alterseqstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterseqstmt?: (ctx: AlterseqstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.optseqoptlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptseqoptlist?: (ctx: OptseqoptlistContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.optparenthesizedseqoptlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptparenthesizedseqoptlist?: (ctx: OptparenthesizedseqoptlistContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.seqoptlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSeqoptlist?: (ctx: SeqoptlistContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.seqoptelem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSeqoptelem?: (ctx: SeqoptelemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_by`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_by?: (ctx: Opt_byContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.numericonly`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumericonly?: (ctx: NumericonlyContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.numericonly_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumericonly_list?: (ctx: Numericonly_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.createplangstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateplangstmt?: (ctx: CreateplangstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_trusted`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_trusted?: (ctx: Opt_trustedContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.handler_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHandler_name?: (ctx: Handler_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_inline_handler`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_inline_handler?: (ctx: Opt_inline_handlerContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.validator_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValidator_clause?: (ctx: Validator_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_validator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_validator?: (ctx: Opt_validatorContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_procedural`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_procedural?: (ctx: Opt_proceduralContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.createtablespacestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatetablespacestmt?: (ctx: CreatetablespacestmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opttablespaceowner`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpttablespaceowner?: (ctx: OpttablespaceownerContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.createextensionstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateextensionstmt?: (ctx: CreateextensionstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.create_extension_opt_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_extension_opt_list?: (ctx: Create_extension_opt_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.create_extension_opt_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_extension_opt_item?: (ctx: Create_extension_opt_itemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alterextensionstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterextensionstmt?: (ctx: AlterextensionstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alter_extension_opt_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_extension_opt_list?: (ctx: Alter_extension_opt_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alter_extension_opt_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_extension_opt_item?: (ctx: Alter_extension_opt_itemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alterextensioncontentsstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterextensioncontentsstmt?: (ctx: AlterextensioncontentsstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.createfdwstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatefdwstmt?: (ctx: CreatefdwstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.fdw_option`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFdw_option?: (ctx: Fdw_optionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.fdw_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFdw_options?: (ctx: Fdw_optionsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_fdw_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_fdw_options?: (ctx: Opt_fdw_optionsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alterfdwstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterfdwstmt?: (ctx: AlterfdwstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.create_generic_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_generic_options?: (ctx: Create_generic_optionsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.generic_option_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneric_option_list?: (ctx: Generic_option_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alter_generic_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_generic_options?: (ctx: Alter_generic_optionsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alter_generic_option_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_generic_option_list?: (ctx: Alter_generic_option_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alter_generic_option_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_generic_option_elem?: (ctx: Alter_generic_option_elemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.generic_option_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneric_option_elem?: (ctx: Generic_option_elemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.generic_option_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneric_option_name?: (ctx: Generic_option_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.generic_option_arg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneric_option_arg?: (ctx: Generic_option_argContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.createforeignserverstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateforeignserverstmt?: (ctx: CreateforeignserverstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_type?: (ctx: Opt_typeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.foreign_server_version`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForeign_server_version?: (ctx: Foreign_server_versionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_foreign_server_version`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_foreign_server_version?: (ctx: Opt_foreign_server_versionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alterforeignserverstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterforeignserverstmt?: (ctx: AlterforeignserverstmtContext) => Result;
    /**
     * Visit a parse tree produced by the `createForeignTable`
     * labeled alternative in `PostgreSQLParser.createforeigntablestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateForeignTable?: (ctx: CreateForeignTableContext) => Result;
    /**
     * Visit a parse tree produced by the `createPartitionForeignTable`
     * labeled alternative in `PostgreSQLParser.createforeigntablestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatePartitionForeignTable?: (ctx: CreatePartitionForeignTableContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.importforeignschemastmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImportforeignschemastmt?: (ctx: ImportforeignschemastmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.import_qualification_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImport_qualification_type?: (ctx: Import_qualification_typeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.import_qualification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImport_qualification?: (ctx: Import_qualificationContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.createusermappingstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateusermappingstmt?: (ctx: CreateusermappingstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.auth_ident`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAuth_ident?: (ctx: Auth_identContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alterusermappingstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterusermappingstmt?: (ctx: AlterusermappingstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.createpolicystmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatepolicystmt?: (ctx: CreatepolicystmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alterpolicystmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterpolicystmt?: (ctx: AlterpolicystmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alterprocedurestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterprocedurestmt?: (ctx: AlterprocedurestmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.procedure_cluase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedure_cluase?: (ctx: Procedure_cluaseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.procedure_action`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedure_action?: (ctx: Procedure_actionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.rowsecurityoptionalexpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowsecurityoptionalexpr?: (ctx: RowsecurityoptionalexprContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.rowsecurityoptionalwithcheck`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowsecurityoptionalwithcheck?: (ctx: RowsecurityoptionalwithcheckContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.rowsecuritydefaulttorole`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowsecuritydefaulttorole?: (ctx: RowsecuritydefaulttoroleContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.rowsecurityoptionaltorole`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowsecurityoptionaltorole?: (ctx: RowsecurityoptionaltoroleContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.rowsecuritydefaultpermissive`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowsecuritydefaultpermissive?: (ctx: RowsecuritydefaultpermissiveContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.rowsecuritydefaultforcmd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowsecuritydefaultforcmd?: (ctx: RowsecuritydefaultforcmdContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.row_security_cmd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRow_security_cmd?: (ctx: Row_security_cmdContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.createamstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateamstmt?: (ctx: CreateamstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.am_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAm_type?: (ctx: Am_typeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.createtrigstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatetrigstmt?: (ctx: CreatetrigstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.triggeractiontime`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggeractiontime?: (ctx: TriggeractiontimeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.foreachrow`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForeachrow?: (ctx: ForeachrowContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.roworstatment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoworstatment?: (ctx: RoworstatmentContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.triggerevents`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerevents?: (ctx: TriggereventsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.triggeroneevent`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggeroneevent?: (ctx: TriggeroneeventContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.triggerreferencing`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerreferencing?: (ctx: TriggerreferencingContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.triggertransitions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggertransitions?: (ctx: TriggertransitionsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.triggertransition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggertransition?: (ctx: TriggertransitionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.transitionoldornew`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransitionoldornew?: (ctx: TransitionoldornewContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.transitionrowortable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransitionrowortable?: (ctx: TransitionrowortableContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.transitionrelname`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransitionrelname?: (ctx: TransitionrelnameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.triggerforspec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerforspec?: (ctx: TriggerforspecContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.triggerforopteach`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerforopteach?: (ctx: TriggerforopteachContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.triggerfortype`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerfortype?: (ctx: TriggerfortypeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.triggerwhen`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerwhen?: (ctx: TriggerwhenContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.function_or_procedure`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_or_procedure?: (ctx: Function_or_procedureContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.triggerfuncargs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerfuncargs?: (ctx: TriggerfuncargsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.triggerfuncarg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerfuncarg?: (ctx: TriggerfuncargContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.optconstrfromtable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptconstrfromtable?: (ctx: OptconstrfromtableContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.constraintattributespec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstraintattributespec?: (ctx: ConstraintattributespecContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.constraintattributeElem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstraintattributeElem?: (ctx: ConstraintattributeElemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.createeventtrigstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateeventtrigstmt?: (ctx: CreateeventtrigstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.event_trigger_when_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEvent_trigger_when_list?: (ctx: Event_trigger_when_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.event_trigger_when_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEvent_trigger_when_item?: (ctx: Event_trigger_when_itemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.event_trigger_value_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEvent_trigger_value_list?: (ctx: Event_trigger_value_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.altereventtrigstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAltereventtrigstmt?: (ctx: AltereventtrigstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.enable_trigger`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnable_trigger?: (ctx: Enable_triggerContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.createassertionstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateassertionstmt?: (ctx: CreateassertionstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.definestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefinestmt?: (ctx: DefinestmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.definition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefinition?: (ctx: DefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.def_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDef_list?: (ctx: Def_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.def_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDef_elem?: (ctx: Def_elemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.def_arg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDef_arg?: (ctx: Def_argContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.old_aggr_definition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOld_aggr_definition?: (ctx: Old_aggr_definitionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.old_aggr_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOld_aggr_list?: (ctx: Old_aggr_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.old_aggr_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOld_aggr_elem?: (ctx: Old_aggr_elemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_enum_val_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_enum_val_list?: (ctx: Opt_enum_val_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.enum_val_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnum_val_list?: (ctx: Enum_val_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alterenumstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterenumstmt?: (ctx: AlterenumstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_if_not_exists`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_if_not_exists?: (ctx: Opt_if_not_existsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.createopclassstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateopclassstmt?: (ctx: CreateopclassstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opclass_item_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpclass_item_list?: (ctx: Opclass_item_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opclass_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpclass_item?: (ctx: Opclass_itemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_default`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_default?: (ctx: Opt_defaultContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_opfamily`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_opfamily?: (ctx: Opt_opfamilyContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opclass_purpose`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpclass_purpose?: (ctx: Opclass_purposeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_recheck`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_recheck?: (ctx: Opt_recheckContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.createopfamilystmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateopfamilystmt?: (ctx: CreateopfamilystmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alteropfamilystmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlteropfamilystmt?: (ctx: AlteropfamilystmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opclass_drop_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpclass_drop_list?: (ctx: Opclass_drop_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opclass_drop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpclass_drop?: (ctx: Opclass_dropContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.reassignownedstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReassignownedstmt?: (ctx: ReassignownedstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.dropstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropstmt?: (ctx: DropstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.view_nameList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitView_nameList?: (ctx: View_nameListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.object_type_any_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_type_any_name?: (ctx: Object_type_any_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.object_type_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_type_name?: (ctx: Object_type_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.object_type_name_on_any_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_type_name_on_any_name?: (ctx: Object_type_name_on_any_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.any_name_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAny_name_list?: (ctx: Any_name_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.table_column_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_column_name?: (ctx: Table_column_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.relation_column_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelation_column_name?: (ctx: Relation_column_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.relation_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelation_name?: (ctx: Relation_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.any_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAny_name?: (ctx: Any_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.attrs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttrs?: (ctx: AttrsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.type_name_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_name_list?: (ctx: Type_name_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.truncatestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTruncatestmt?: (ctx: TruncatestmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_restart_seqs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_restart_seqs?: (ctx: Opt_restart_seqsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.commentstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommentstmt?: (ctx: CommentstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.comment_text`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComment_text?: (ctx: Comment_textContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.seclabelstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSeclabelstmt?: (ctx: SeclabelstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_provider`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_provider?: (ctx: Opt_providerContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.security_label`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSecurity_label?: (ctx: Security_labelContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.fetchstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFetchstmt?: (ctx: FetchstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.fetch_args`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFetch_args?: (ctx: Fetch_argsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.from_in`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrom_in?: (ctx: From_inContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_from_in`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_from_in?: (ctx: Opt_from_inContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.grantstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrantstmt?: (ctx: GrantstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.revokestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRevokestmt?: (ctx: RevokestmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.privileges`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrivileges?: (ctx: PrivilegesContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.beforeprivilegeselectlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBeforeprivilegeselectlist?: (ctx: BeforeprivilegeselectlistContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.beforeprivilegeselect`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBeforeprivilegeselect?: (ctx: BeforeprivilegeselectContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.privilege_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrivilege_list?: (ctx: Privilege_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.privilege`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrivilege?: (ctx: PrivilegeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.privilege_target`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrivilege_target?: (ctx: Privilege_targetContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.grantee_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrantee_list?: (ctx: Grantee_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.grantee`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrantee?: (ctx: GranteeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_grant_grant_option`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_grant_grant_option?: (ctx: Opt_grant_grant_optionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.grantrolestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrantrolestmt?: (ctx: GrantrolestmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.revokerolestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRevokerolestmt?: (ctx: RevokerolestmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_grant_admin_option`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_grant_admin_option?: (ctx: Opt_grant_admin_optionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_granted_by`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_granted_by?: (ctx: Opt_granted_byContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alterdefaultprivilegesstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterdefaultprivilegesstmt?: (ctx: AlterdefaultprivilegesstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.defacloptionlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefacloptionlist?: (ctx: DefacloptionlistContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.defacloption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefacloption?: (ctx: DefacloptionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.defaclaction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefaclaction?: (ctx: DefaclactionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.defacl_privilege_target`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefacl_privilege_target?: (ctx: Defacl_privilege_targetContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.indexstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndexstmt?: (ctx: IndexstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_unique`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_unique?: (ctx: Opt_uniqueContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_concurrently`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_concurrently?: (ctx: Opt_concurrentlyContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_index_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_index_name?: (ctx: Opt_index_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.access_method_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAccess_method_clause?: (ctx: Access_method_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.index_params`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_params?: (ctx: Index_paramsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.index_elem_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_elem_options?: (ctx: Index_elem_optionsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.index_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_elem?: (ctx: Index_elemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_include`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_include?: (ctx: Opt_includeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.index_including_params`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_including_params?: (ctx: Index_including_paramsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_collate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_collate?: (ctx: Opt_collateContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_class`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_class?: (ctx: Opt_classContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_asc_desc`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_asc_desc?: (ctx: Opt_asc_descContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_nulls_order`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_nulls_order?: (ctx: Opt_nulls_orderContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.createfunctionstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatefunctionstmt?: (ctx: CreatefunctionstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.attrilist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttrilist?: (ctx: AttrilistContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_or_replace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_or_replace?: (ctx: Opt_or_replaceContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.func_args`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_args?: (ctx: Func_argsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.func_args_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_args_list?: (ctx: Func_args_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.routine_with_argtypes_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoutine_with_argtypes_list?: (ctx: Routine_with_argtypes_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.routine_with_argtypes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoutine_with_argtypes?: (ctx: Routine_with_argtypesContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.procedure_with_argtypes_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedure_with_argtypes_list?: (ctx: Procedure_with_argtypes_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.procedure_with_argtypes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedure_with_argtypes?: (ctx: Procedure_with_argtypesContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.function_with_argtypes_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_with_argtypes_list?: (ctx: Function_with_argtypes_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.function_with_argtypes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_with_argtypes?: (ctx: Function_with_argtypesContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.func_args_with_defaults`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_args_with_defaults?: (ctx: Func_args_with_defaultsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.func_args_with_defaults_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_args_with_defaults_list?: (ctx: Func_args_with_defaults_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.func_arg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_arg?: (ctx: Func_argContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.arg_class`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArg_class?: (ctx: Arg_classContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.param_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParam_name?: (ctx: Param_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.func_return`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_return?: (ctx: Func_returnContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.func_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_type?: (ctx: Func_typeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.func_arg_with_default`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_arg_with_default?: (ctx: Func_arg_with_defaultContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.aggr_arg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggr_arg?: (ctx: Aggr_argContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.aggr_args`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggr_args?: (ctx: Aggr_argsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.aggr_args_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggr_args_list?: (ctx: Aggr_args_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.aggregate_with_argtypes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregate_with_argtypes?: (ctx: Aggregate_with_argtypesContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.aggregate_with_argtypes_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregate_with_argtypes_list?: (ctx: Aggregate_with_argtypes_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.createfunc_opt_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatefunc_opt_list?: (ctx: Createfunc_opt_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.common_func_opt_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommon_func_opt_item?: (ctx: Common_func_opt_itemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.createfunc_opt_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatefunc_opt_item?: (ctx: Createfunc_opt_itemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.transform_type_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransform_type_list?: (ctx: Transform_type_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_definition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_definition?: (ctx: Opt_definitionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.table_func_column`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_func_column?: (ctx: Table_func_columnContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.table_func_column_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_func_column_list?: (ctx: Table_func_column_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alterfunctionstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterfunctionstmt?: (ctx: AlterfunctionstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alterFunctionTypeClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterFunctionTypeClause?: (ctx: AlterFunctionTypeClauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alterfunc_opt_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterfunc_opt_list?: (ctx: Alterfunc_opt_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_restrict`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_restrict?: (ctx: Opt_restrictContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.removefuncstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRemovefuncstmt?: (ctx: RemovefuncstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.removeaggrstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRemoveaggrstmt?: (ctx: RemoveaggrstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.removeoperstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRemoveoperstmt?: (ctx: RemoveoperstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.oper_argtypes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOper_argtypes?: (ctx: Oper_argtypesContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.any_operator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAny_operator?: (ctx: Any_operatorContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.operator_with_argtypes_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperator_with_argtypes_list?: (ctx: Operator_with_argtypes_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.operator_with_argtypes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperator_with_argtypes?: (ctx: Operator_with_argtypesContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.dostmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDostmt?: (ctx: DostmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.dostmt_opt_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDostmt_opt_list?: (ctx: Dostmt_opt_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.dostmt_opt_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDostmt_opt_item?: (ctx: Dostmt_opt_itemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.createcaststmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatecaststmt?: (ctx: CreatecaststmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.cast_context`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCast_context?: (ctx: Cast_contextContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_if_exists`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_if_exists?: (ctx: Opt_if_existsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.createtransformstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatetransformstmt?: (ctx: CreatetransformstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.transform_element_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransform_element_list?: (ctx: Transform_element_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.reindexstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReindexstmt?: (ctx: ReindexstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.reindex_target_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReindex_target_type?: (ctx: Reindex_target_typeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.reindex_target_multitable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReindex_target_multitable?: (ctx: Reindex_target_multitableContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.reindex_option_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReindex_option_list?: (ctx: Reindex_option_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.reindex_option_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReindex_option_elem?: (ctx: Reindex_option_elemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.altertblspcstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAltertblspcstmt?: (ctx: AltertblspcstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.renamestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenamestmt?: (ctx: RenamestmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_column`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_column?: (ctx: Opt_columnContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_set_data`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_set_data?: (ctx: Opt_set_dataContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alterobjectdependsstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterobjectdependsstmt?: (ctx: AlterobjectdependsstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_no`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_no?: (ctx: Opt_noContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alterobjectschemastmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterobjectschemastmt?: (ctx: AlterobjectschemastmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alteroperatorstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlteroperatorstmt?: (ctx: AlteroperatorstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.operator_def_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperator_def_list?: (ctx: Operator_def_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.operator_def_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperator_def_elem?: (ctx: Operator_def_elemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.operator_def_arg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperator_def_arg?: (ctx: Operator_def_argContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.altertypestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAltertypestmt?: (ctx: AltertypestmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alterownerstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterownerstmt?: (ctx: AlterownerstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.createpublicationstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatepublicationstmt?: (ctx: CreatepublicationstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_publication_for_tables`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_publication_for_tables?: (ctx: Opt_publication_for_tablesContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.publication_for_tables`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPublication_for_tables?: (ctx: Publication_for_tablesContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alterpublicationstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterpublicationstmt?: (ctx: AlterpublicationstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.createsubscriptionstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatesubscriptionstmt?: (ctx: CreatesubscriptionstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.publication_name_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPublication_name_list?: (ctx: Publication_name_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.publication_name_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPublication_name_item?: (ctx: Publication_name_itemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.altersubscriptionstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAltersubscriptionstmt?: (ctx: AltersubscriptionstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.rulestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRulestmt?: (ctx: RulestmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.ruleactionlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRuleactionlist?: (ctx: RuleactionlistContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.ruleactionmulti`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRuleactionmulti?: (ctx: RuleactionmultiContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.ruleactionstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRuleactionstmt?: (ctx: RuleactionstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.ruleactionstmtOrEmpty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRuleactionstmtOrEmpty?: (ctx: RuleactionstmtOrEmptyContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.event`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEvent?: (ctx: EventContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_instead`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_instead?: (ctx: Opt_insteadContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.notifystmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotifystmt?: (ctx: NotifystmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.notify_payload`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotify_payload?: (ctx: Notify_payloadContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.listenstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListenstmt?: (ctx: ListenstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.unlistenstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnlistenstmt?: (ctx: UnlistenstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.transactionstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransactionstmt?: (ctx: TransactionstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_transaction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_transaction?: (ctx: Opt_transactionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.transaction_mode_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransaction_mode_item?: (ctx: Transaction_mode_itemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.transaction_mode_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransaction_mode_list?: (ctx: Transaction_mode_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.transaction_mode_list_or_empty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransaction_mode_list_or_empty?: (ctx: Transaction_mode_list_or_emptyContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_transaction_chain`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_transaction_chain?: (ctx: Opt_transaction_chainContext) => Result;
    /**
     * Visit a parse tree produced by the `createView`
     * labeled alternative in `PostgreSQLParser.viewstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateView?: (ctx: CreateViewContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_check_option`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_check_option?: (ctx: Opt_check_optionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.loadstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoadstmt?: (ctx: LoadstmtContext) => Result;
    /**
     * Visit a parse tree produced by the `createDatabase`
     * labeled alternative in `PostgreSQLParser.createdbstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateDatabase?: (ctx: CreateDatabaseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.createdb_opt_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatedb_opt_list?: (ctx: Createdb_opt_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.createdb_opt_items`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatedb_opt_items?: (ctx: Createdb_opt_itemsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.createdb_opt_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatedb_opt_item?: (ctx: Createdb_opt_itemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.createdb_opt_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatedb_opt_name?: (ctx: Createdb_opt_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_equal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_equal?: (ctx: Opt_equalContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alterdatabasestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterdatabasestmt?: (ctx: AlterdatabasestmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alterdatabasesetstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterdatabasesetstmt?: (ctx: AlterdatabasesetstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.drop_option_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_option_list?: (ctx: Drop_option_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.drop_option`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_option?: (ctx: Drop_optionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.altercollationstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAltercollationstmt?: (ctx: AltercollationstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.altersystemstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAltersystemstmt?: (ctx: AltersystemstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.createdomainstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatedomainstmt?: (ctx: CreatedomainstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alterdomainstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterdomainstmt?: (ctx: AlterdomainstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_as`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_as?: (ctx: Opt_asContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.altertsdictionarystmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAltertsdictionarystmt?: (ctx: AltertsdictionarystmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.altertsconfigurationstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAltertsconfigurationstmt?: (ctx: AltertsconfigurationstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.any_with`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAny_with?: (ctx: Any_withContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.createconversionstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateconversionstmt?: (ctx: CreateconversionstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.clusterstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClusterstmt?: (ctx: ClusterstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_verbose_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_verbose_list?: (ctx: Opt_verbose_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.cluster_index_specification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCluster_index_specification?: (ctx: Cluster_index_specificationContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.vacuumstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVacuumstmt?: (ctx: VacuumstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.analyzestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyzestmt?: (ctx: AnalyzestmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.vac_analyze_option_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVac_analyze_option_list?: (ctx: Vac_analyze_option_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.analyze_keyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyze_keyword?: (ctx: Analyze_keywordContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.vac_analyze_option_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVac_analyze_option_elem?: (ctx: Vac_analyze_option_elemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.vac_analyze_option_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVac_analyze_option_name?: (ctx: Vac_analyze_option_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.vac_analyze_option_arg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVac_analyze_option_arg?: (ctx: Vac_analyze_option_argContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_analyze`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_analyze?: (ctx: Opt_analyzeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.analyze_options_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyze_options_list?: (ctx: Analyze_options_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.analyze_option_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyze_option_elem?: (ctx: Analyze_option_elemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_verbose`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_verbose?: (ctx: Opt_verboseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_skiplock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_skiplock?: (ctx: Opt_skiplockContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_buffer_usage_limit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_buffer_usage_limit?: (ctx: Opt_buffer_usage_limitContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_full`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_full?: (ctx: Opt_fullContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_freeze`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_freeze?: (ctx: Opt_freezeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_name_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_name_list?: (ctx: Opt_name_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.vacuum_relation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVacuum_relation?: (ctx: Vacuum_relationContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.vacuum_relation_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVacuum_relation_list?: (ctx: Vacuum_relation_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_vacuum_relation_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_vacuum_relation_list?: (ctx: Opt_vacuum_relation_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.explainstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplainstmt?: (ctx: ExplainstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.explainablestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplainablestmt?: (ctx: ExplainablestmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.explain_option_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplain_option_list?: (ctx: Explain_option_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.explain_option_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplain_option_elem?: (ctx: Explain_option_elemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.explain_option_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplain_option_name?: (ctx: Explain_option_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.explain_option_arg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplain_option_arg?: (ctx: Explain_option_argContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.preparestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPreparestmt?: (ctx: PreparestmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.prep_type_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrep_type_clause?: (ctx: Prep_type_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.preparablestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPreparablestmt?: (ctx: PreparablestmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.executestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExecutestmt?: (ctx: ExecutestmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.execute_param_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExecute_param_clause?: (ctx: Execute_param_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.deallocatestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeallocatestmt?: (ctx: DeallocatestmtContext) => Result;
    /**
     * Visit a parse tree produced by the `insertStatement`
     * labeled alternative in `PostgreSQLParser.insertstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertStatement?: (ctx: InsertStatementContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.insert_target`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsert_target?: (ctx: Insert_targetContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.insert_rest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsert_rest?: (ctx: Insert_restContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.override_kind`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOverride_kind?: (ctx: Override_kindContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.insert_column_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsert_column_list?: (ctx: Insert_column_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.insert_column_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsert_column_item?: (ctx: Insert_column_itemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_on_conflict`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_on_conflict?: (ctx: Opt_on_conflictContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_conf_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_conf_expr?: (ctx: Opt_conf_exprContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.returning_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturning_clause?: (ctx: Returning_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.deletestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeletestmt?: (ctx: DeletestmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.using_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUsing_clause?: (ctx: Using_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.lockstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLockstmt?: (ctx: LockstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_lock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_lock?: (ctx: Opt_lockContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.lock_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLock_type?: (ctx: Lock_typeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_nowait`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_nowait?: (ctx: Opt_nowaitContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_nowait_or_skip`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_nowait_or_skip?: (ctx: Opt_nowait_or_skipContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.updatestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdatestmt?: (ctx: UpdatestmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.set_clause_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_clause_list?: (ctx: Set_clause_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.set_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_clause?: (ctx: Set_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.set_target`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_target?: (ctx: Set_targetContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.set_target_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_target_list?: (ctx: Set_target_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.declarecursorstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeclarecursorstmt?: (ctx: DeclarecursorstmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.cursor_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCursor_name?: (ctx: Cursor_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.cursor_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCursor_options?: (ctx: Cursor_optionsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_hold`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_hold?: (ctx: Opt_holdContext) => Result;
    /**
     * Visit a parse tree produced by the `selectStatement`
     * labeled alternative in `PostgreSQLParser.selectstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectStatement?: (ctx: SelectStatementContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.select_with_parens`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelect_with_parens?: (ctx: Select_with_parensContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.select_no_parens`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelect_no_parens?: (ctx: Select_no_parensContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.select_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelect_clause?: (ctx: Select_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.simple_select`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimple_select?: (ctx: Simple_selectContext) => Result;
    /**
     * Visit a parse tree produced by the `union`
     * labeled alternative in `PostgreSQLParser.set_operator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnion?: (ctx: UnionContext) => Result;
    /**
     * Visit a parse tree produced by the `intersect`
     * labeled alternative in `PostgreSQLParser.set_operator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntersect?: (ctx: IntersectContext) => Result;
    /**
     * Visit a parse tree produced by the `except`
     * labeled alternative in `PostgreSQLParser.set_operator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExcept?: (ctx: ExceptContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.set_operator_with_all_or_distinct`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_operator_with_all_or_distinct?: (ctx: Set_operator_with_all_or_distinctContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.with_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWith_clause?: (ctx: With_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.cte_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCte_list?: (ctx: Cte_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.common_table_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommon_table_expr?: (ctx: Common_table_exprContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.search_cluase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSearch_cluase?: (ctx: Search_cluaseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.cycle_cluase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCycle_cluase?: (ctx: Cycle_cluaseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_materialized`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_materialized?: (ctx: Opt_materializedContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_with_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_with_clause?: (ctx: Opt_with_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.into_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInto_clause?: (ctx: Into_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_strict`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_strict?: (ctx: Opt_strictContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opttempTableName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpttempTableName?: (ctx: OpttempTableNameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_table?: (ctx: Opt_tableContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.all_or_distinct`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAll_or_distinct?: (ctx: All_or_distinctContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.distinct_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDistinct_clause?: (ctx: Distinct_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_all_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_all_clause?: (ctx: Opt_all_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_sort_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_sort_clause?: (ctx: Opt_sort_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.sort_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSort_clause?: (ctx: Sort_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.sortby_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSortby_list?: (ctx: Sortby_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.sortby`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSortby?: (ctx: SortbyContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.select_limit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelect_limit?: (ctx: Select_limitContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_select_limit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_select_limit?: (ctx: Opt_select_limitContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.limit_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLimit_clause?: (ctx: Limit_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.fetch_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFetch_clause?: (ctx: Fetch_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.offset_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOffset_clause?: (ctx: Offset_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.select_limit_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelect_limit_value?: (ctx: Select_limit_valueContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.select_offset_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelect_offset_value?: (ctx: Select_offset_valueContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.select_fetch_first_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelect_fetch_first_value?: (ctx: Select_fetch_first_valueContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.i_or_f_const`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitI_or_f_const?: (ctx: I_or_f_constContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.row_or_rows`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRow_or_rows?: (ctx: Row_or_rowsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.first_or_next`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFirst_or_next?: (ctx: First_or_nextContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.group_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroup_clause?: (ctx: Group_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.group_by_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroup_by_list?: (ctx: Group_by_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.group_by_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroup_by_item?: (ctx: Group_by_itemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.empty_grouping_set`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEmpty_grouping_set?: (ctx: Empty_grouping_setContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.rollup_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRollup_clause?: (ctx: Rollup_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.cube_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCube_clause?: (ctx: Cube_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.grouping_sets_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrouping_sets_clause?: (ctx: Grouping_sets_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.having_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHaving_clause?: (ctx: Having_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.for_locking_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFor_locking_clause?: (ctx: For_locking_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_for_locking_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_for_locking_clause?: (ctx: Opt_for_locking_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.for_locking_items`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFor_locking_items?: (ctx: For_locking_itemsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.for_locking_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFor_locking_item?: (ctx: For_locking_itemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.for_locking_strength`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFor_locking_strength?: (ctx: For_locking_strengthContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.locked_rels_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocked_rels_list?: (ctx: Locked_rels_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.values_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValues_clause?: (ctx: Values_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.from_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrom_clause?: (ctx: From_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.from_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrom_list?: (ctx: From_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.table_ref`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_ref?: (ctx: Table_refContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.alias_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlias_clause?: (ctx: Alias_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_alias_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_alias_clause?: (ctx: Opt_alias_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.func_alias_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_alias_clause?: (ctx: Func_alias_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.join_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoin_type?: (ctx: Join_typeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.join_qual`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoin_qual?: (ctx: Join_qualContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.relation_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelation_expr?: (ctx: Relation_exprContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.view_relation_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitView_relation_expr?: (ctx: View_relation_exprContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.publication_relation_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPublication_relation_expr?: (ctx: Publication_relation_exprContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.relation_expr_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelation_expr_list?: (ctx: Relation_expr_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.publication_relation_expr_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPublication_relation_expr_list?: (ctx: Publication_relation_expr_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.relation_expr_opt_alias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelation_expr_opt_alias?: (ctx: Relation_expr_opt_aliasContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.tablesample_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablesample_clause?: (ctx: Tablesample_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_repeatable_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_repeatable_clause?: (ctx: Opt_repeatable_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.func_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_table?: (ctx: Func_tableContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.rowsfrom_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowsfrom_item?: (ctx: Rowsfrom_itemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.rowsfrom_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowsfrom_list?: (ctx: Rowsfrom_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_col_def_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_col_def_list?: (ctx: Opt_col_def_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_ordinality`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_ordinality?: (ctx: Opt_ordinalityContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.where_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhere_clause?: (ctx: Where_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.where_or_current_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhere_or_current_clause?: (ctx: Where_or_current_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opttablefuncelementlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpttablefuncelementlist?: (ctx: OpttablefuncelementlistContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.tablefuncelementlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablefuncelementlist?: (ctx: TablefuncelementlistContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.tablefuncelement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablefuncelement?: (ctx: TablefuncelementContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.xmltable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmltable?: (ctx: XmltableContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.xmltable_column_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmltable_column_list?: (ctx: Xmltable_column_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.xmltable_column_el`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmltable_column_el?: (ctx: Xmltable_column_elContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.xmltable_column_option_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmltable_column_option_list?: (ctx: Xmltable_column_option_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.xmltable_column_option_el`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmltable_column_option_el?: (ctx: Xmltable_column_option_elContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.xml_namespace_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_namespace_list?: (ctx: Xml_namespace_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.xml_namespace_el`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_namespace_el?: (ctx: Xml_namespace_elContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.typename`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypename?: (ctx: TypenameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_array_bounds`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_array_bounds?: (ctx: Opt_array_boundsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.simpletypename`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpletypename?: (ctx: SimpletypenameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.consttypename`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConsttypename?: (ctx: ConsttypenameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.generictype`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenerictype?: (ctx: GenerictypeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_type_modifiers`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_type_modifiers?: (ctx: Opt_type_modifiersContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.numeric`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumeric?: (ctx: NumericContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_float`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_float?: (ctx: Opt_floatContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.bit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBit?: (ctx: BitContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.constbit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstbit?: (ctx: ConstbitContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.bitwithlength`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBitwithlength?: (ctx: BitwithlengthContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.bitwithoutlength`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBitwithoutlength?: (ctx: BitwithoutlengthContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.character`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCharacter?: (ctx: CharacterContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.constcharacter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstcharacter?: (ctx: ConstcharacterContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.character_c`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCharacter_c?: (ctx: Character_cContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_varying`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_varying?: (ctx: Opt_varyingContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.constdatetime`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstdatetime?: (ctx: ConstdatetimeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.constinterval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstinterval?: (ctx: ConstintervalContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_timezone`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_timezone?: (ctx: Opt_timezoneContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_interval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_interval?: (ctx: Opt_intervalContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.interval_second`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterval_second?: (ctx: Interval_secondContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_escape`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_escape?: (ctx: Opt_escapeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.a_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr?: (ctx: A_exprContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.a_expr_qual`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_qual?: (ctx: A_expr_qualContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.a_expr_lessless`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_lessless?: (ctx: A_expr_lesslessContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.a_expr_or`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_or?: (ctx: A_expr_orContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.a_expr_and`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_and?: (ctx: A_expr_andContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.a_expr_in`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_in?: (ctx: A_expr_inContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.a_expr_unary_not`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_unary_not?: (ctx: A_expr_unary_notContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.a_expr_isnull`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_isnull?: (ctx: A_expr_isnullContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.a_expr_is_not`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_is_not?: (ctx: A_expr_is_notContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.a_expr_compare`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_compare?: (ctx: A_expr_compareContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.a_expr_like`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_like?: (ctx: A_expr_likeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.a_expr_qual_op`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_qual_op?: (ctx: A_expr_qual_opContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.a_expr_unary_qualop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_unary_qualop?: (ctx: A_expr_unary_qualopContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.a_expr_add`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_add?: (ctx: A_expr_addContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.a_expr_mul`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_mul?: (ctx: A_expr_mulContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.a_expr_caret`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_caret?: (ctx: A_expr_caretContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.a_expr_unary_sign`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_unary_sign?: (ctx: A_expr_unary_signContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.a_expr_at_time_zone`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_at_time_zone?: (ctx: A_expr_at_time_zoneContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.a_expr_collate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_collate?: (ctx: A_expr_collateContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.a_expr_typecast`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_typecast?: (ctx: A_expr_typecastContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.b_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitB_expr?: (ctx: B_exprContext) => Result;
    /**
     * Visit a parse tree produced by the `c_expr_exists`
     * labeled alternative in `PostgreSQLParser.c_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitC_expr_exists?: (ctx: C_expr_existsContext) => Result;
    /**
     * Visit a parse tree produced by the `c_expr_expr`
     * labeled alternative in `PostgreSQLParser.c_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitC_expr_expr?: (ctx: C_expr_exprContext) => Result;
    /**
     * Visit a parse tree produced by the `c_expr_case`
     * labeled alternative in `PostgreSQLParser.c_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitC_expr_case?: (ctx: C_expr_caseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.plsqlvariablename`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPlsqlvariablename?: (ctx: PlsqlvariablenameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.func_application`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_application?: (ctx: Func_applicationContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.func_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_expr?: (ctx: Func_exprContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.func_expr_windowless`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_expr_windowless?: (ctx: Func_expr_windowlessContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.func_expr_common_subexpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_expr_common_subexpr?: (ctx: Func_expr_common_subexprContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.xml_root_version`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_root_version?: (ctx: Xml_root_versionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_xml_root_standalone`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_xml_root_standalone?: (ctx: Opt_xml_root_standaloneContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.xml_attributes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_attributes?: (ctx: Xml_attributesContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.xml_attribute_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_attribute_list?: (ctx: Xml_attribute_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.xml_attribute_el`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_attribute_el?: (ctx: Xml_attribute_elContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.document_or_content`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDocument_or_content?: (ctx: Document_or_contentContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.xml_whitespace_option`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_whitespace_option?: (ctx: Xml_whitespace_optionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.xmlexists_argument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmlexists_argument?: (ctx: Xmlexists_argumentContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.xml_passing_mech`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_passing_mech?: (ctx: Xml_passing_mechContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.within_group_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWithin_group_clause?: (ctx: Within_group_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.filter_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFilter_clause?: (ctx: Filter_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.window_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindow_clause?: (ctx: Window_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.window_definition_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindow_definition_list?: (ctx: Window_definition_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.window_definition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindow_definition?: (ctx: Window_definitionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.over_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOver_clause?: (ctx: Over_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.window_specification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindow_specification?: (ctx: Window_specificationContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_existing_window_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_existing_window_name?: (ctx: Opt_existing_window_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_partition_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_partition_clause?: (ctx: Opt_partition_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_frame_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_frame_clause?: (ctx: Opt_frame_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.frame_extent`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrame_extent?: (ctx: Frame_extentContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.frame_bound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrame_bound?: (ctx: Frame_boundContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_window_exclusion_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_window_exclusion_clause?: (ctx: Opt_window_exclusion_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.row`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRow?: (ctx: RowContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.explicit_row`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplicit_row?: (ctx: Explicit_rowContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.implicit_row`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImplicit_row?: (ctx: Implicit_rowContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.sub_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSub_type?: (ctx: Sub_typeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.all_op`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAll_op?: (ctx: All_opContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.mathop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMathop?: (ctx: MathopContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.qual_op`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQual_op?: (ctx: Qual_opContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.qual_all_op`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQual_all_op?: (ctx: Qual_all_opContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.subquery_Op`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubquery_Op?: (ctx: Subquery_OpContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.expr_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr_list?: (ctx: Expr_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.column_expr_list_noparen`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_expr_list_noparen?: (ctx: Column_expr_list_noparenContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.column_expr_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_expr_list?: (ctx: Column_expr_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.column_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_expr?: (ctx: Column_exprContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.column_expr_noparen`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_expr_noparen?: (ctx: Column_expr_noparenContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.func_arg_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_arg_list?: (ctx: Func_arg_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.func_arg_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_arg_expr?: (ctx: Func_arg_exprContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.type_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_list?: (ctx: Type_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.array_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArray_expr?: (ctx: Array_exprContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.array_expr_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArray_expr_list?: (ctx: Array_expr_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.extract_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtract_list?: (ctx: Extract_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.extract_arg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtract_arg?: (ctx: Extract_argContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.unicode_normal_form`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnicode_normal_form?: (ctx: Unicode_normal_formContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.overlay_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOverlay_list?: (ctx: Overlay_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.position_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPosition_list?: (ctx: Position_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.substr_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubstr_list?: (ctx: Substr_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.trim_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrim_list?: (ctx: Trim_listContext) => Result;
    /**
     * Visit a parse tree produced by the `in_expr_select`
     * labeled alternative in `PostgreSQLParser.in_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIn_expr_select?: (ctx: In_expr_selectContext) => Result;
    /**
     * Visit a parse tree produced by the `in_expr_list`
     * labeled alternative in `PostgreSQLParser.in_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIn_expr_list?: (ctx: In_expr_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.case_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCase_expr?: (ctx: Case_exprContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.when_clause_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhen_clause_list?: (ctx: When_clause_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.when_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhen_clause?: (ctx: When_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.case_default`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCase_default?: (ctx: Case_defaultContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.case_arg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCase_arg?: (ctx: Case_argContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.columnref`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnref?: (ctx: ColumnrefContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.indirection_el`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndirection_el?: (ctx: Indirection_elContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_slice_bound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_slice_bound?: (ctx: Opt_slice_boundContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.indirection`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndirection?: (ctx: IndirectionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_indirection`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_indirection?: (ctx: Opt_indirectionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_target_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_target_list?: (ctx: Opt_target_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.target_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTarget_list?: (ctx: Target_listContext) => Result;
    /**
     * Visit a parse tree produced by the `target_label`
     * labeled alternative in `PostgreSQLParser.target_el`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTarget_label?: (ctx: Target_labelContext) => Result;
    /**
     * Visit a parse tree produced by the `target_star`
     * labeled alternative in `PostgreSQLParser.target_el`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTarget_star?: (ctx: Target_starContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.qualified_name_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualified_name_list?: (ctx: Qualified_name_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.table_name_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_name_list?: (ctx: Table_name_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.schema_name_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSchema_name_list?: (ctx: Schema_name_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.database_nameList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatabase_nameList?: (ctx: Database_nameListContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.procedure_name_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedure_name_list?: (ctx: Procedure_name_listContext) => Result;
    /**
     * Visit a parse tree produced by the `tablespaceNameCreate`
     * labeled alternative in `PostgreSQLParser.tablespace_name_create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablespaceNameCreate?: (ctx: TablespaceNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by the `tablespaceName`
     * labeled alternative in `PostgreSQLParser.tablespace_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablespaceName?: (ctx: TablespaceNameContext) => Result;
    /**
     * Visit a parse tree produced by the `tableNameCreate`
     * labeled alternative in `PostgreSQLParser.table_name_create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableNameCreate?: (ctx: TableNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by the `tableName`
     * labeled alternative in `PostgreSQLParser.table_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableName?: (ctx: TableNameContext) => Result;
    /**
     * Visit a parse tree produced by the `viewNameCreate`
     * labeled alternative in `PostgreSQLParser.view_name_create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewNameCreate?: (ctx: ViewNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by the `viewName`
     * labeled alternative in `PostgreSQLParser.view_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewName?: (ctx: ViewNameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.qualified_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualified_name?: (ctx: Qualified_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.tablespace_name_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablespace_name_list?: (ctx: Tablespace_name_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.name_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitName_list?: (ctx: Name_listContext) => Result;
    /**
     * Visit a parse tree produced by the `databaseNameCreate`
     * labeled alternative in `PostgreSQLParser.database_name_create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatabaseNameCreate?: (ctx: DatabaseNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by the `databaseName`
     * labeled alternative in `PostgreSQLParser.database_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatabaseName?: (ctx: DatabaseNameContext) => Result;
    /**
     * Visit a parse tree produced by the `schemaName`
     * labeled alternative in `PostgreSQLParser.schema_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSchemaName?: (ctx: SchemaNameContext) => Result;
    /**
     * Visit a parse tree produced by the `routineNameCreate`
     * labeled alternative in `PostgreSQLParser.routine_name_create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoutineNameCreate?: (ctx: RoutineNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by the `routineName`
     * labeled alternative in `PostgreSQLParser.routine_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoutineName?: (ctx: RoutineNameContext) => Result;
    /**
     * Visit a parse tree produced by the `procedureName`
     * labeled alternative in `PostgreSQLParser.procedure_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedureName?: (ctx: ProcedureNameContext) => Result;
    /**
     * Visit a parse tree produced by the `procedureNameCreate`
     * labeled alternative in `PostgreSQLParser.procedure_name_create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedureNameCreate?: (ctx: ProcedureNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by the `columnName`
     * labeled alternative in `PostgreSQLParser.column_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnName?: (ctx: ColumnNameContext) => Result;
    /**
     * Visit a parse tree produced by the `columnNameCreate`
     * labeled alternative in `PostgreSQLParser.column_name_create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameCreate?: (ctx: ColumnNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitName?: (ctx: NameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.attr_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttr_name?: (ctx: Attr_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.file_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFile_name?: (ctx: File_nameContext) => Result;
    /**
     * Visit a parse tree produced by the `functionNameCreate`
     * labeled alternative in `PostgreSQLParser.function_name_create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionNameCreate?: (ctx: FunctionNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by the `functionName`
     * labeled alternative in `PostgreSQLParser.function_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionName?: (ctx: FunctionNameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.usual_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUsual_name?: (ctx: Usual_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.aexprconst`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAexprconst?: (ctx: AexprconstContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.xconst`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXconst?: (ctx: XconstContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.bconst`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBconst?: (ctx: BconstContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.fconst`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFconst?: (ctx: FconstContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.iconst`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIconst?: (ctx: IconstContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.sconst`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSconst?: (ctx: SconstContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.anysconst`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnysconst?: (ctx: AnysconstContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_uescape`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_uescape?: (ctx: Opt_uescapeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.signediconst`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSignediconst?: (ctx: SignediconstContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.groupname`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupname?: (ctx: GroupnameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.roleid`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoleid?: (ctx: RoleidContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.rolespec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRolespec?: (ctx: RolespecContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.role_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRole_list?: (ctx: Role_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.colid`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColid?: (ctx: ColidContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.index_method_choices`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_method_choices?: (ctx: Index_method_choicesContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.exclude_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExclude_element?: (ctx: Exclude_elementContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.index_paramenters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_paramenters?: (ctx: Index_paramentersContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.type_function_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_function_name?: (ctx: Type_function_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.type_usual_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_usual_name?: (ctx: Type_usual_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.nonreservedword_column`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonreservedword_column?: (ctx: Nonreservedword_columnContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.nonreservedword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonreservedword?: (ctx: NonreservedwordContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.collabel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCollabel?: (ctx: CollabelContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifier?: (ctx: IdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.plsqlidentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPlsqlidentifier?: (ctx: PlsqlidentifierContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.unreserved_keyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnreserved_keyword?: (ctx: Unreserved_keywordContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.col_name_keyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCol_name_keyword?: (ctx: Col_name_keywordContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.type_func_name_keyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_func_name_keyword?: (ctx: Type_func_name_keywordContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.reserved_keyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReserved_keyword?: (ctx: Reserved_keywordContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.pl_function`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPl_function?: (ctx: Pl_functionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.comp_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComp_options?: (ctx: Comp_optionsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.comp_option`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComp_option?: (ctx: Comp_optionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.sharp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSharp?: (ctx: SharpContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.option_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOption_value?: (ctx: Option_valueContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_semi`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_semi?: (ctx: Opt_semiContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.pl_block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPl_block?: (ctx: Pl_blockContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.decl_sect`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_sect?: (ctx: Decl_sectContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.decl_start`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_start?: (ctx: Decl_startContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.decl_stmts`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_stmts?: (ctx: Decl_stmtsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.label_decl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLabel_decl?: (ctx: Label_declContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.decl_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_stmt?: (ctx: Decl_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.decl_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_statement?: (ctx: Decl_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_scrollable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_scrollable?: (ctx: Opt_scrollableContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.decl_cursor_query`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_cursor_query?: (ctx: Decl_cursor_queryContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.decl_cursor_args`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_cursor_args?: (ctx: Decl_cursor_argsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.decl_cursor_arglist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_cursor_arglist?: (ctx: Decl_cursor_arglistContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.decl_cursor_arg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_cursor_arg?: (ctx: Decl_cursor_argContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.decl_is_for`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_is_for?: (ctx: Decl_is_forContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.decl_aliasitem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_aliasitem?: (ctx: Decl_aliasitemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.decl_varname`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_varname?: (ctx: Decl_varnameContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.decl_const`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_const?: (ctx: Decl_constContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.decl_datatype`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_datatype?: (ctx: Decl_datatypeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.decl_collate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_collate?: (ctx: Decl_collateContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.decl_notnull`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_notnull?: (ctx: Decl_notnullContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.decl_defval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_defval?: (ctx: Decl_defvalContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.decl_defkey`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_defkey?: (ctx: Decl_defkeyContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.assign_operator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssign_operator?: (ctx: Assign_operatorContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.proc_sect`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProc_sect?: (ctx: Proc_sectContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.proc_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProc_stmt?: (ctx: Proc_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.stmt_perform`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_perform?: (ctx: Stmt_performContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.stmt_call`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_call?: (ctx: Stmt_callContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_expr_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_expr_list?: (ctx: Opt_expr_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.stmt_assign`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_assign?: (ctx: Stmt_assignContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.stmt_getdiag`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_getdiag?: (ctx: Stmt_getdiagContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.getdiag_area_opt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGetdiag_area_opt?: (ctx: Getdiag_area_optContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.getdiag_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGetdiag_list?: (ctx: Getdiag_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.getdiag_list_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGetdiag_list_item?: (ctx: Getdiag_list_itemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.getdiag_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGetdiag_item?: (ctx: Getdiag_itemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.getdiag_target`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGetdiag_target?: (ctx: Getdiag_targetContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.assign_var`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssign_var?: (ctx: Assign_varContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.stmt_if`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_if?: (ctx: Stmt_ifContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.stmt_elsifs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_elsifs?: (ctx: Stmt_elsifsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.stmt_else`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_else?: (ctx: Stmt_elseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.stmt_case`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_case?: (ctx: Stmt_caseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_expr_until_when`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_expr_until_when?: (ctx: Opt_expr_until_whenContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.case_when_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCase_when_list?: (ctx: Case_when_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.case_when`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCase_when?: (ctx: Case_whenContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_case_else`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_case_else?: (ctx: Opt_case_elseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.stmt_loop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_loop?: (ctx: Stmt_loopContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.stmt_while`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_while?: (ctx: Stmt_whileContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.stmt_for`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_for?: (ctx: Stmt_forContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.for_control`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFor_control?: (ctx: For_controlContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_for_using_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_for_using_expression?: (ctx: Opt_for_using_expressionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_cursor_parameters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_cursor_parameters?: (ctx: Opt_cursor_parametersContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_reverse`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_reverse?: (ctx: Opt_reverseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_by_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_by_expression?: (ctx: Opt_by_expressionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.for_variable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFor_variable?: (ctx: For_variableContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.stmt_foreach_a`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_foreach_a?: (ctx: Stmt_foreach_aContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.foreach_slice`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForeach_slice?: (ctx: Foreach_sliceContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.stmt_exit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_exit?: (ctx: Stmt_exitContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.exit_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExit_type?: (ctx: Exit_typeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.stmt_return`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_return?: (ctx: Stmt_returnContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_return_result`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_return_result?: (ctx: Opt_return_resultContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.stmt_raise`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_raise?: (ctx: Stmt_raiseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_stmt_raise_level`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_stmt_raise_level?: (ctx: Opt_stmt_raise_levelContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_raise_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_raise_list?: (ctx: Opt_raise_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_raise_using`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_raise_using?: (ctx: Opt_raise_usingContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_raise_using_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_raise_using_elem?: (ctx: Opt_raise_using_elemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_raise_using_elem_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_raise_using_elem_list?: (ctx: Opt_raise_using_elem_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.stmt_assert`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_assert?: (ctx: Stmt_assertContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_stmt_assert_message`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_stmt_assert_message?: (ctx: Opt_stmt_assert_messageContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.loop_body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoop_body?: (ctx: Loop_bodyContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.stmt_execsql`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_execsql?: (ctx: Stmt_execsqlContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.stmt_dynexecute`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_dynexecute?: (ctx: Stmt_dynexecuteContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_execute_using`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_execute_using?: (ctx: Opt_execute_usingContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_execute_using_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_execute_using_list?: (ctx: Opt_execute_using_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_execute_into`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_execute_into?: (ctx: Opt_execute_intoContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.stmt_open`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_open?: (ctx: Stmt_openContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_open_bound_list_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_open_bound_list_item?: (ctx: Opt_open_bound_list_itemContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_open_bound_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_open_bound_list?: (ctx: Opt_open_bound_listContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_open_using`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_open_using?: (ctx: Opt_open_usingContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_scroll_option`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_scroll_option?: (ctx: Opt_scroll_optionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_scroll_option_no`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_scroll_option_no?: (ctx: Opt_scroll_option_noContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.stmt_fetch`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_fetch?: (ctx: Stmt_fetchContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.into_target`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInto_target?: (ctx: Into_targetContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_cursor_from`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_cursor_from?: (ctx: Opt_cursor_fromContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_fetch_direction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_fetch_direction?: (ctx: Opt_fetch_directionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.stmt_move`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_move?: (ctx: Stmt_moveContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.mergestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMergestmt?: (ctx: MergestmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.data_source`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitData_source?: (ctx: Data_sourceContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.join_condition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoin_condition?: (ctx: Join_conditionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.merge_when_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMerge_when_clause?: (ctx: Merge_when_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.merge_insert`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMerge_insert?: (ctx: Merge_insertContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.merge_update`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMerge_update?: (ctx: Merge_updateContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.default_values_or_values`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefault_values_or_values?: (ctx: Default_values_or_valuesContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.exprofdefaultlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExprofdefaultlist?: (ctx: ExprofdefaultlistContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.exprofdefault`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExprofdefault?: (ctx: ExprofdefaultContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.stmt_close`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_close?: (ctx: Stmt_closeContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.stmt_null`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_null?: (ctx: Stmt_nullContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.stmt_commit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_commit?: (ctx: Stmt_commitContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.stmt_rollback`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_rollback?: (ctx: Stmt_rollbackContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.plsql_opt_transaction_chain`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPlsql_opt_transaction_chain?: (ctx: Plsql_opt_transaction_chainContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.stmt_set`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_set?: (ctx: Stmt_setContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.cursor_variable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCursor_variable?: (ctx: Cursor_variableContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.exception_sect`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitException_sect?: (ctx: Exception_sectContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.proc_exceptions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProc_exceptions?: (ctx: Proc_exceptionsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.proc_exception`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProc_exception?: (ctx: Proc_exceptionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.proc_conditions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProc_conditions?: (ctx: Proc_conditionsContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.proc_condition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProc_condition?: (ctx: Proc_conditionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_block_label`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_block_label?: (ctx: Opt_block_labelContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_loop_label`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_loop_label?: (ctx: Opt_loop_labelContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_label`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_label?: (ctx: Opt_labelContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_exitcond`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_exitcond?: (ctx: Opt_exitcondContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.any_identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAny_identifier?: (ctx: Any_identifierContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.plsql_unreserved_keyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPlsql_unreserved_keyword?: (ctx: Plsql_unreserved_keywordContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.sql_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSql_expression?: (ctx: Sql_expressionContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.expr_until_then`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr_until_then?: (ctx: Expr_until_thenContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.expr_until_semi`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr_until_semi?: (ctx: Expr_until_semiContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.expr_until_rightbracket`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr_until_rightbracket?: (ctx: Expr_until_rightbracketContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.expr_until_loop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr_until_loop?: (ctx: Expr_until_loopContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.make_execsql_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMake_execsql_stmt?: (ctx: Make_execsql_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `PostgreSQLParser.opt_returning_clause_into`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_returning_clause_into?: (ctx: Opt_returning_clause_intoContext) => Result;
}

