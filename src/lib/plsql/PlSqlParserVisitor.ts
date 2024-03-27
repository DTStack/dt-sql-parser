// Generated from dt-sql-parser/src/grammar/plsql/PlSqlParser.g4 by ANTLR 4.13.1

// @ts-nocheck

import { AbstractParseTreeVisitor } from "antlr4ng";


import { ProgramContext } from "./PlSqlParser.js";
import { Sql_scriptContext } from "./PlSqlParser.js";
import { Unit_statementContext } from "./PlSqlParser.js";
import { Drop_functionContext } from "./PlSqlParser.js";
import { Alter_functionContext } from "./PlSqlParser.js";
import { Create_function_bodyContext } from "./PlSqlParser.js";
import { Parallel_enable_clauseContext } from "./PlSqlParser.js";
import { Partition_by_clauseContext } from "./PlSqlParser.js";
import { Result_cache_clauseContext } from "./PlSqlParser.js";
import { Relies_on_partContext } from "./PlSqlParser.js";
import { Streaming_clauseContext } from "./PlSqlParser.js";
import { Drop_packageContext } from "./PlSqlParser.js";
import { Alter_packageContext } from "./PlSqlParser.js";
import { Create_packageContext } from "./PlSqlParser.js";
import { Create_package_bodyContext } from "./PlSqlParser.js";
import { Package_obj_specContext } from "./PlSqlParser.js";
import { Procedure_specContext } from "./PlSqlParser.js";
import { Function_specContext } from "./PlSqlParser.js";
import { Package_obj_bodyContext } from "./PlSqlParser.js";
import { Drop_procedureContext } from "./PlSqlParser.js";
import { Alter_procedureContext } from "./PlSqlParser.js";
import { Function_bodyContext } from "./PlSqlParser.js";
import { Procedure_bodyContext } from "./PlSqlParser.js";
import { Create_procedure_bodyContext } from "./PlSqlParser.js";
import { Drop_triggerContext } from "./PlSqlParser.js";
import { Alter_triggerContext } from "./PlSqlParser.js";
import { Create_triggerContext } from "./PlSqlParser.js";
import { Trigger_follows_clauseContext } from "./PlSqlParser.js";
import { Trigger_when_clauseContext } from "./PlSqlParser.js";
import { Simple_dml_triggerContext } from "./PlSqlParser.js";
import { For_each_rowContext } from "./PlSqlParser.js";
import { Compound_dml_triggerContext } from "./PlSqlParser.js";
import { Non_dml_triggerContext } from "./PlSqlParser.js";
import { Trigger_bodyContext } from "./PlSqlParser.js";
import { Non_dml_eventContext } from "./PlSqlParser.js";
import { Dml_event_clauseContext } from "./PlSqlParser.js";
import { Dml_event_elementContext } from "./PlSqlParser.js";
import { Dml_event_nested_clauseContext } from "./PlSqlParser.js";
import { Referencing_clauseContext } from "./PlSqlParser.js";
import { Referencing_elementContext } from "./PlSqlParser.js";
import { Drop_typeContext } from "./PlSqlParser.js";
import { Alter_typeContext } from "./PlSqlParser.js";
import { Compile_type_clauseContext } from "./PlSqlParser.js";
import { Replace_type_clauseContext } from "./PlSqlParser.js";
import { Alter_method_specContext } from "./PlSqlParser.js";
import { Alter_method_elementContext } from "./PlSqlParser.js";
import { Alter_collection_clausesContext } from "./PlSqlParser.js";
import { Dependent_handling_clauseContext } from "./PlSqlParser.js";
import { Dependent_exceptions_partContext } from "./PlSqlParser.js";
import { Create_typeContext } from "./PlSqlParser.js";
import { Type_definitionContext } from "./PlSqlParser.js";
import { Object_type_defContext } from "./PlSqlParser.js";
import { Object_as_partContext } from "./PlSqlParser.js";
import { Object_under_partContext } from "./PlSqlParser.js";
import { Nested_table_type_defContext } from "./PlSqlParser.js";
import { Sqlj_object_typeContext } from "./PlSqlParser.js";
import { Type_bodyContext } from "./PlSqlParser.js";
import { Type_body_elementsContext } from "./PlSqlParser.js";
import { Map_order_func_declarationContext } from "./PlSqlParser.js";
import { Subprog_decl_in_typeContext } from "./PlSqlParser.js";
import { Proc_decl_in_typeContext } from "./PlSqlParser.js";
import { Func_decl_in_typeContext } from "./PlSqlParser.js";
import { Constructor_declarationContext } from "./PlSqlParser.js";
import { Modifier_clauseContext } from "./PlSqlParser.js";
import { Object_member_specContext } from "./PlSqlParser.js";
import { Sqlj_object_type_attrContext } from "./PlSqlParser.js";
import { Element_specContext } from "./PlSqlParser.js";
import { Element_spec_optionsContext } from "./PlSqlParser.js";
import { Subprogram_specContext } from "./PlSqlParser.js";
import { Overriding_subprogram_specContext } from "./PlSqlParser.js";
import { Overriding_function_specContext } from "./PlSqlParser.js";
import { Type_procedure_specContext } from "./PlSqlParser.js";
import { Type_function_specContext } from "./PlSqlParser.js";
import { Constructor_specContext } from "./PlSqlParser.js";
import { Map_order_function_specContext } from "./PlSqlParser.js";
import { Pragma_clauseContext } from "./PlSqlParser.js";
import { Pragma_elementsContext } from "./PlSqlParser.js";
import { Type_elements_parameterContext } from "./PlSqlParser.js";
import { Drop_sequenceContext } from "./PlSqlParser.js";
import { Alter_sequenceContext } from "./PlSqlParser.js";
import { Alter_sessionContext } from "./PlSqlParser.js";
import { Alter_session_set_clauseContext } from "./PlSqlParser.js";
import { Create_sequenceContext } from "./PlSqlParser.js";
import { Sequence_specContext } from "./PlSqlParser.js";
import { Sequence_start_clauseContext } from "./PlSqlParser.js";
import { Create_indexContext } from "./PlSqlParser.js";
import { Cluster_index_clauseContext } from "./PlSqlParser.js";
import { Cluster_nameContext } from "./PlSqlParser.js";
import { Table_index_clauseContext } from "./PlSqlParser.js";
import { Bitmap_join_index_clauseContext } from "./PlSqlParser.js";
import { Index_exprContext } from "./PlSqlParser.js";
import { Index_propertiesContext } from "./PlSqlParser.js";
import { Domain_index_clauseContext } from "./PlSqlParser.js";
import { Local_domain_index_clauseContext } from "./PlSqlParser.js";
import { Xmlindex_clauseContext } from "./PlSqlParser.js";
import { Local_xmlindex_clauseContext } from "./PlSqlParser.js";
import { Global_partitioned_indexContext } from "./PlSqlParser.js";
import { Index_partitioning_clauseContext } from "./PlSqlParser.js";
import { Local_partitioned_indexContext } from "./PlSqlParser.js";
import { On_range_partitioned_tableContext } from "./PlSqlParser.js";
import { On_list_partitioned_tableContext } from "./PlSqlParser.js";
import { Partitioned_tableContext } from "./PlSqlParser.js";
import { On_hash_partitioned_tableContext } from "./PlSqlParser.js";
import { On_hash_partitioned_clauseContext } from "./PlSqlParser.js";
import { On_comp_partitioned_tableContext } from "./PlSqlParser.js";
import { On_comp_partitioned_clauseContext } from "./PlSqlParser.js";
import { Index_subpartition_clauseContext } from "./PlSqlParser.js";
import { Index_subpartition_subclauseContext } from "./PlSqlParser.js";
import { Odci_parametersContext } from "./PlSqlParser.js";
import { IndextypeContext } from "./PlSqlParser.js";
import { Alter_indexContext } from "./PlSqlParser.js";
import { Alter_index_ops_set1Context } from "./PlSqlParser.js";
import { Alter_index_ops_set2Context } from "./PlSqlParser.js";
import { Visible_or_invisibleContext } from "./PlSqlParser.js";
import { Monitoring_nomonitoringContext } from "./PlSqlParser.js";
import { Rebuild_clauseContext } from "./PlSqlParser.js";
import { Alter_index_partitioningContext } from "./PlSqlParser.js";
import { Modify_index_default_attrsContext } from "./PlSqlParser.js";
import { Add_hash_index_partitionContext } from "./PlSqlParser.js";
import { Coalesce_index_partitionContext } from "./PlSqlParser.js";
import { Modify_index_partitionContext } from "./PlSqlParser.js";
import { Modify_index_partitions_opsContext } from "./PlSqlParser.js";
import { Rename_index_partitionContext } from "./PlSqlParser.js";
import { Drop_index_partitionContext } from "./PlSqlParser.js";
import { Split_index_partitionContext } from "./PlSqlParser.js";
import { Index_partition_descriptionContext } from "./PlSqlParser.js";
import { Modify_index_subpartitionContext } from "./PlSqlParser.js";
import { Partition_name_oldContext } from "./PlSqlParser.js";
import { New_partition_nameContext } from "./PlSqlParser.js";
import { New_index_nameContext } from "./PlSqlParser.js";
import { Create_userContext } from "./PlSqlParser.js";
import { Alter_userContext } from "./PlSqlParser.js";
import { Alter_identified_byContext } from "./PlSqlParser.js";
import { Identified_byContext } from "./PlSqlParser.js";
import { Identified_other_clauseContext } from "./PlSqlParser.js";
import { User_tablespace_clauseContext } from "./PlSqlParser.js";
import { Quota_clauseContext } from "./PlSqlParser.js";
import { Profile_clauseContext } from "./PlSqlParser.js";
import { Role_clauseContext } from "./PlSqlParser.js";
import { User_default_role_clauseContext } from "./PlSqlParser.js";
import { Password_expire_clauseContext } from "./PlSqlParser.js";
import { User_lock_clauseContext } from "./PlSqlParser.js";
import { User_editions_clauseContext } from "./PlSqlParser.js";
import { Alter_user_editions_clauseContext } from "./PlSqlParser.js";
import { Proxy_clauseContext } from "./PlSqlParser.js";
import { Container_namesContext } from "./PlSqlParser.js";
import { Set_container_dataContext } from "./PlSqlParser.js";
import { Add_rem_container_dataContext } from "./PlSqlParser.js";
import { Container_data_clauseContext } from "./PlSqlParser.js";
import { AnalyzeContext } from "./PlSqlParser.js";
import { Partition_extention_clauseContext } from "./PlSqlParser.js";
import { Validation_clausesContext } from "./PlSqlParser.js";
import { Online_or_offlineContext } from "./PlSqlParser.js";
import { Into_clause1Context } from "./PlSqlParser.js";
import { Partition_key_valueContext } from "./PlSqlParser.js";
import { Subpartition_key_valueContext } from "./PlSqlParser.js";
import { Associate_statisticsContext } from "./PlSqlParser.js";
import { Column_associationContext } from "./PlSqlParser.js";
import { Function_associationContext } from "./PlSqlParser.js";
import { Indextype_nameContext } from "./PlSqlParser.js";
import { Using_statistics_typeContext } from "./PlSqlParser.js";
import { Statistics_type_nameContext } from "./PlSqlParser.js";
import { Default_cost_clauseContext } from "./PlSqlParser.js";
import { Cpu_costContext } from "./PlSqlParser.js";
import { Io_costContext } from "./PlSqlParser.js";
import { Network_costContext } from "./PlSqlParser.js";
import { Default_selectivity_clauseContext } from "./PlSqlParser.js";
import { Default_selectivityContext } from "./PlSqlParser.js";
import { Storage_table_clauseContext } from "./PlSqlParser.js";
import { Unified_auditingContext } from "./PlSqlParser.js";
import { Policy_nameContext } from "./PlSqlParser.js";
import { Audit_traditionalContext } from "./PlSqlParser.js";
import { Audit_direct_pathContext } from "./PlSqlParser.js";
import { Audit_container_clauseContext } from "./PlSqlParser.js";
import { Audit_operation_clauseContext } from "./PlSqlParser.js";
import { Auditing_by_clauseContext } from "./PlSqlParser.js";
import { Audit_userContext } from "./PlSqlParser.js";
import { Audit_schema_object_clauseContext } from "./PlSqlParser.js";
import { Sql_operationContext } from "./PlSqlParser.js";
import { Auditing_on_clauseContext } from "./PlSqlParser.js";
import { Model_nameContext } from "./PlSqlParser.js";
import { Object_nameContext } from "./PlSqlParser.js";
import { Profile_nameContext } from "./PlSqlParser.js";
import { Sql_statement_shortcutContext } from "./PlSqlParser.js";
import { Drop_indexContext } from "./PlSqlParser.js";
import { Rename_objectContext } from "./PlSqlParser.js";
import { Grant_statementContext } from "./PlSqlParser.js";
import { Container_clauseContext } from "./PlSqlParser.js";
import { Create_directoryContext } from "./PlSqlParser.js";
import { Directory_nameContext } from "./PlSqlParser.js";
import { Directory_pathContext } from "./PlSqlParser.js";
import { Alter_libraryContext } from "./PlSqlParser.js";
import { Library_editionableContext } from "./PlSqlParser.js";
import { Library_debugContext } from "./PlSqlParser.js";
import { Compiler_parameters_clauseContext } from "./PlSqlParser.js";
import { Parameter_valueContext } from "./PlSqlParser.js";
import { Library_nameContext } from "./PlSqlParser.js";
import { Alter_viewContext } from "./PlSqlParser.js";
import { Alter_view_editionableContext } from "./PlSqlParser.js";
import { Create_viewContext } from "./PlSqlParser.js";
import { View_optionsContext } from "./PlSqlParser.js";
import { View_alias_constraintContext } from "./PlSqlParser.js";
import { Object_view_clauseContext } from "./PlSqlParser.js";
import { Inline_constraintContext } from "./PlSqlParser.js";
import { Inline_ref_constraintContext } from "./PlSqlParser.js";
import { Out_of_line_ref_constraintContext } from "./PlSqlParser.js";
import { Out_of_line_constraintContext } from "./PlSqlParser.js";
import { Constraint_stateContext } from "./PlSqlParser.js";
import { Alter_tablespaceContext } from "./PlSqlParser.js";
import { Datafile_tempfile_clausesContext } from "./PlSqlParser.js";
import { Tablespace_logging_clausesContext } from "./PlSqlParser.js";
import { Tablespace_group_clauseContext } from "./PlSqlParser.js";
import { Tablespace_group_nameContext } from "./PlSqlParser.js";
import { Tablespace_state_clausesContext } from "./PlSqlParser.js";
import { Flashback_mode_clauseContext } from "./PlSqlParser.js";
import { New_tablespace_nameContext } from "./PlSqlParser.js";
import { Create_tablespaceContext } from "./PlSqlParser.js";
import { Permanent_tablespace_clauseContext } from "./PlSqlParser.js";
import { Tablespace_encryption_specContext } from "./PlSqlParser.js";
import { Logging_clauseContext } from "./PlSqlParser.js";
import { Extent_management_clauseContext } from "./PlSqlParser.js";
import { Segment_management_clauseContext } from "./PlSqlParser.js";
import { Temporary_tablespace_clauseContext } from "./PlSqlParser.js";
import { Undo_tablespace_clauseContext } from "./PlSqlParser.js";
import { Tablespace_retention_clauseContext } from "./PlSqlParser.js";
import { Datafile_specificationContext } from "./PlSqlParser.js";
import { Tempfile_specificationContext } from "./PlSqlParser.js";
import { Datafile_tempfile_specContext } from "./PlSqlParser.js";
import { Redo_log_file_specContext } from "./PlSqlParser.js";
import { Autoextend_clauseContext } from "./PlSqlParser.js";
import { Maxsize_clauseContext } from "./PlSqlParser.js";
import { Build_clauseContext } from "./PlSqlParser.js";
import { Parallel_clauseContext } from "./PlSqlParser.js";
import { Alter_materialized_viewContext } from "./PlSqlParser.js";
import { Alter_mv_option1Context } from "./PlSqlParser.js";
import { Alter_mv_refreshContext } from "./PlSqlParser.js";
import { Rollback_segmentContext } from "./PlSqlParser.js";
import { Modify_mv_column_clauseContext } from "./PlSqlParser.js";
import { Alter_materialized_view_logContext } from "./PlSqlParser.js";
import { Add_mv_log_column_clauseContext } from "./PlSqlParser.js";
import { Move_mv_log_clauseContext } from "./PlSqlParser.js";
import { Mv_log_augmentationContext } from "./PlSqlParser.js";
import { Create_materialized_view_logContext } from "./PlSqlParser.js";
import { New_values_clauseContext } from "./PlSqlParser.js";
import { Mv_log_purge_clauseContext } from "./PlSqlParser.js";
import { Create_materialized_viewContext } from "./PlSqlParser.js";
import { Create_mv_refreshContext } from "./PlSqlParser.js";
import { Create_contextContext } from "./PlSqlParser.js";
import { Oracle_namespaceContext } from "./PlSqlParser.js";
import { Create_clusterContext } from "./PlSqlParser.js";
import { Create_tableContext } from "./PlSqlParser.js";
import { Xmltype_tableContext } from "./PlSqlParser.js";
import { Xmltype_virtual_columnsContext } from "./PlSqlParser.js";
import { Xmltype_column_propertiesContext } from "./PlSqlParser.js";
import { Xmltype_storageContext } from "./PlSqlParser.js";
import { Xmlschema_specContext } from "./PlSqlParser.js";
import { Object_tableContext } from "./PlSqlParser.js";
import { Oid_index_clauseContext } from "./PlSqlParser.js";
import { Oid_clauseContext } from "./PlSqlParser.js";
import { Object_propertiesContext } from "./PlSqlParser.js";
import { Object_table_substitutionContext } from "./PlSqlParser.js";
import { Relational_tableContext } from "./PlSqlParser.js";
import { Relational_propertyContext } from "./PlSqlParser.js";
import { Table_partitioning_clausesContext } from "./PlSqlParser.js";
import { Range_partitionsContext } from "./PlSqlParser.js";
import { List_partitionsContext } from "./PlSqlParser.js";
import { Hash_partitionsContext } from "./PlSqlParser.js";
import { Individual_hash_partitionsContext } from "./PlSqlParser.js";
import { Hash_partitions_by_quantityContext } from "./PlSqlParser.js";
import { Hash_partition_quantityContext } from "./PlSqlParser.js";
import { Composite_range_partitionsContext } from "./PlSqlParser.js";
import { Composite_list_partitionsContext } from "./PlSqlParser.js";
import { Composite_hash_partitionsContext } from "./PlSqlParser.js";
import { Reference_partitioningContext } from "./PlSqlParser.js";
import { Reference_partition_descContext } from "./PlSqlParser.js";
import { System_partitioningContext } from "./PlSqlParser.js";
import { Range_partition_descContext } from "./PlSqlParser.js";
import { List_partition_descContext } from "./PlSqlParser.js";
import { Subpartition_templateContext } from "./PlSqlParser.js";
import { Hash_subpartition_quantityContext } from "./PlSqlParser.js";
import { Subpartition_by_rangeContext } from "./PlSqlParser.js";
import { Subpartition_by_listContext } from "./PlSqlParser.js";
import { Subpartition_by_hashContext } from "./PlSqlParser.js";
import { Subpartition_nameContext } from "./PlSqlParser.js";
import { Range_subpartition_descContext } from "./PlSqlParser.js";
import { List_subpartition_descContext } from "./PlSqlParser.js";
import { Individual_hash_subpartsContext } from "./PlSqlParser.js";
import { Hash_subparts_by_quantityContext } from "./PlSqlParser.js";
import { Range_values_clauseContext } from "./PlSqlParser.js";
import { List_values_clauseContext } from "./PlSqlParser.js";
import { Table_partition_descriptionContext } from "./PlSqlParser.js";
import { Partitioning_storage_clauseContext } from "./PlSqlParser.js";
import { Lob_partitioning_storageContext } from "./PlSqlParser.js";
import { Size_clauseContext } from "./PlSqlParser.js";
import { Table_compressionContext } from "./PlSqlParser.js";
import { Physical_attributes_clauseContext } from "./PlSqlParser.js";
import { Storage_clauseContext } from "./PlSqlParser.js";
import { Deferred_segment_creationContext } from "./PlSqlParser.js";
import { Segment_attributes_clauseContext } from "./PlSqlParser.js";
import { Physical_propertiesContext } from "./PlSqlParser.js";
import { Row_movement_clauseContext } from "./PlSqlParser.js";
import { Flashback_archive_clauseContext } from "./PlSqlParser.js";
import { Log_grpContext } from "./PlSqlParser.js";
import { Supplemental_table_loggingContext } from "./PlSqlParser.js";
import { Supplemental_log_grp_clauseContext } from "./PlSqlParser.js";
import { Supplemental_id_key_clauseContext } from "./PlSqlParser.js";
import { Allocate_extent_clauseContext } from "./PlSqlParser.js";
import { Deallocate_unused_clauseContext } from "./PlSqlParser.js";
import { Shrink_clauseContext } from "./PlSqlParser.js";
import { Records_per_block_clauseContext } from "./PlSqlParser.js";
import { Upgrade_table_clauseContext } from "./PlSqlParser.js";
import { Drop_tableContext } from "./PlSqlParser.js";
import { Drop_viewContext } from "./PlSqlParser.js";
import { Comment_on_columnContext } from "./PlSqlParser.js";
import { Enable_or_disableContext } from "./PlSqlParser.js";
import { Allow_or_disallowContext } from "./PlSqlParser.js";
import { Create_synonymContext } from "./PlSqlParser.js";
import { Comment_on_tableContext } from "./PlSqlParser.js";
import { Alter_clusterContext } from "./PlSqlParser.js";
import { Cache_or_nocacheContext } from "./PlSqlParser.js";
import { Database_nameContext } from "./PlSqlParser.js";
import { Alter_databaseContext } from "./PlSqlParser.js";
import { Startup_clausesContext } from "./PlSqlParser.js";
import { Resetlogs_or_noresetlogsContext } from "./PlSqlParser.js";
import { Upgrade_or_downgradeContext } from "./PlSqlParser.js";
import { Recovery_clausesContext } from "./PlSqlParser.js";
import { Begin_or_endContext } from "./PlSqlParser.js";
import { General_recoveryContext } from "./PlSqlParser.js";
import { Full_database_recoveryContext } from "./PlSqlParser.js";
import { Partial_database_recoveryContext } from "./PlSqlParser.js";
import { Partial_database_recovery_10gContext } from "./PlSqlParser.js";
import { Managed_standby_recoveryContext } from "./PlSqlParser.js";
import { Db_nameContext } from "./PlSqlParser.js";
import { Database_file_clausesContext } from "./PlSqlParser.js";
import { Create_datafile_clauseContext } from "./PlSqlParser.js";
import { Alter_datafile_clauseContext } from "./PlSqlParser.js";
import { Alter_tempfile_clauseContext } from "./PlSqlParser.js";
import { Logfile_clausesContext } from "./PlSqlParser.js";
import { Add_logfile_clausesContext } from "./PlSqlParser.js";
import { Log_file_groupContext } from "./PlSqlParser.js";
import { Drop_logfile_clausesContext } from "./PlSqlParser.js";
import { Switch_logfile_clauseContext } from "./PlSqlParser.js";
import { Supplemental_db_loggingContext } from "./PlSqlParser.js";
import { Add_or_dropContext } from "./PlSqlParser.js";
import { Supplemental_plsql_clauseContext } from "./PlSqlParser.js";
import { Logfile_descriptorContext } from "./PlSqlParser.js";
import { Controlfile_clausesContext } from "./PlSqlParser.js";
import { Trace_file_clauseContext } from "./PlSqlParser.js";
import { Standby_database_clausesContext } from "./PlSqlParser.js";
import { Activate_standby_db_clauseContext } from "./PlSqlParser.js";
import { Maximize_standby_db_clauseContext } from "./PlSqlParser.js";
import { Register_logfile_clauseContext } from "./PlSqlParser.js";
import { Commit_switchover_clauseContext } from "./PlSqlParser.js";
import { Start_standby_clauseContext } from "./PlSqlParser.js";
import { Stop_standby_clauseContext } from "./PlSqlParser.js";
import { Convert_database_clauseContext } from "./PlSqlParser.js";
import { Default_settings_clauseContext } from "./PlSqlParser.js";
import { Set_time_zone_clauseContext } from "./PlSqlParser.js";
import { Instance_clausesContext } from "./PlSqlParser.js";
import { Security_clauseContext } from "./PlSqlParser.js";
import { DomainContext } from "./PlSqlParser.js";
import { DatabaseContext } from "./PlSqlParser.js";
import { Edition_nameContext } from "./PlSqlParser.js";
import { FilenumberContext } from "./PlSqlParser.js";
import { FilenameContext } from "./PlSqlParser.js";
import { Alter_tableContext } from "./PlSqlParser.js";
import { Alter_table_propertiesContext } from "./PlSqlParser.js";
import { Alter_table_properties_1Context } from "./PlSqlParser.js";
import { Alter_iot_clausesContext } from "./PlSqlParser.js";
import { Alter_mapping_table_clauseContext } from "./PlSqlParser.js";
import { Alter_overflow_clauseContext } from "./PlSqlParser.js";
import { Add_overflow_clauseContext } from "./PlSqlParser.js";
import { Enable_disable_clauseContext } from "./PlSqlParser.js";
import { Using_index_clauseContext } from "./PlSqlParser.js";
import { Index_attributesContext } from "./PlSqlParser.js";
import { Sort_or_nosortContext } from "./PlSqlParser.js";
import { Exceptions_clauseContext } from "./PlSqlParser.js";
import { Move_table_clauseContext } from "./PlSqlParser.js";
import { Index_org_table_clauseContext } from "./PlSqlParser.js";
import { Mapping_table_clauseContext } from "./PlSqlParser.js";
import { Key_compressionContext } from "./PlSqlParser.js";
import { Index_org_overflow_clauseContext } from "./PlSqlParser.js";
import { Column_clausesContext } from "./PlSqlParser.js";
import { Modify_collection_retrievalContext } from "./PlSqlParser.js";
import { Collection_itemContext } from "./PlSqlParser.js";
import { Rename_column_clauseContext } from "./PlSqlParser.js";
import { Old_column_nameContext } from "./PlSqlParser.js";
import { New_column_nameContext } from "./PlSqlParser.js";
import { Add_modify_drop_column_clausesContext } from "./PlSqlParser.js";
import { Drop_column_clauseContext } from "./PlSqlParser.js";
import { Modify_column_clausesContext } from "./PlSqlParser.js";
import { Modify_col_propertiesContext } from "./PlSqlParser.js";
import { Modify_col_substitutableContext } from "./PlSqlParser.js";
import { Add_column_clauseContext } from "./PlSqlParser.js";
import { Varray_col_propertiesContext } from "./PlSqlParser.js";
import { Varray_storage_clauseContext } from "./PlSqlParser.js";
import { Lob_segnameContext } from "./PlSqlParser.js";
import { Lob_itemContext } from "./PlSqlParser.js";
import { Lob_storage_parametersContext } from "./PlSqlParser.js";
import { Lob_storage_clauseContext } from "./PlSqlParser.js";
import { Modify_lob_storage_clauseContext } from "./PlSqlParser.js";
import { Modify_lob_parametersContext } from "./PlSqlParser.js";
import { Lob_parametersContext } from "./PlSqlParser.js";
import { Lob_deduplicate_clauseContext } from "./PlSqlParser.js";
import { Lob_compression_clauseContext } from "./PlSqlParser.js";
import { Lob_retention_clauseContext } from "./PlSqlParser.js";
import { Encryption_specContext } from "./PlSqlParser.js";
import { TablespaceContext } from "./PlSqlParser.js";
import { Varray_itemContext } from "./PlSqlParser.js";
import { Column_propertiesContext } from "./PlSqlParser.js";
import { Column_definitionContext } from "./PlSqlParser.js";
import { Virtual_column_definitionContext } from "./PlSqlParser.js";
import { Autogenerated_sequence_definitionContext } from "./PlSqlParser.js";
import { Nested_table_col_propertiesContext } from "./PlSqlParser.js";
import { Nested_itemContext } from "./PlSqlParser.js";
import { Substitutable_column_clauseContext } from "./PlSqlParser.js";
import { Partition_nameContext } from "./PlSqlParser.js";
import { Supplemental_logging_propsContext } from "./PlSqlParser.js";
import { Object_type_col_propertiesContext } from "./PlSqlParser.js";
import { Constraint_clausesContext } from "./PlSqlParser.js";
import { Old_constraint_nameContext } from "./PlSqlParser.js";
import { New_constraint_nameContext } from "./PlSqlParser.js";
import { Drop_constraint_clauseContext } from "./PlSqlParser.js";
import { Drop_primary_key_or_unique_or_generic_clauseContext } from "./PlSqlParser.js";
import { Check_constraintContext } from "./PlSqlParser.js";
import { Foreign_key_clauseContext } from "./PlSqlParser.js";
import { References_clauseContext } from "./PlSqlParser.js";
import { On_delete_clauseContext } from "./PlSqlParser.js";
import { Anonymous_blockContext } from "./PlSqlParser.js";
import { Invoker_rights_clauseContext } from "./PlSqlParser.js";
import { Call_specContext } from "./PlSqlParser.js";
import { Java_specContext } from "./PlSqlParser.js";
import { C_specContext } from "./PlSqlParser.js";
import { C_agent_in_clauseContext } from "./PlSqlParser.js";
import { C_parameters_clauseContext } from "./PlSqlParser.js";
import { ParameterContext } from "./PlSqlParser.js";
import { Default_value_partContext } from "./PlSqlParser.js";
import { Seq_of_declare_specsContext } from "./PlSqlParser.js";
import { Declare_specContext } from "./PlSqlParser.js";
import { Variable_declarationContext } from "./PlSqlParser.js";
import { Subtype_declarationContext } from "./PlSqlParser.js";
import { Cursor_declarationContext } from "./PlSqlParser.js";
import { Parameter_specContext } from "./PlSqlParser.js";
import { Exception_declarationContext } from "./PlSqlParser.js";
import { Pragma_declarationContext } from "./PlSqlParser.js";
import { Record_type_defContext } from "./PlSqlParser.js";
import { Field_specContext } from "./PlSqlParser.js";
import { Ref_cursor_type_defContext } from "./PlSqlParser.js";
import { Type_declarationContext } from "./PlSqlParser.js";
import { Table_type_defContext } from "./PlSqlParser.js";
import { Table_indexed_by_partContext } from "./PlSqlParser.js";
import { Varray_type_defContext } from "./PlSqlParser.js";
import { Seq_of_statementsContext } from "./PlSqlParser.js";
import { Label_declarationContext } from "./PlSqlParser.js";
import { StatementContext } from "./PlSqlParser.js";
import { Assignment_statementContext } from "./PlSqlParser.js";
import { Continue_statementContext } from "./PlSqlParser.js";
import { Exit_statementContext } from "./PlSqlParser.js";
import { Goto_statementContext } from "./PlSqlParser.js";
import { If_statementContext } from "./PlSqlParser.js";
import { Elsif_partContext } from "./PlSqlParser.js";
import { Else_partContext } from "./PlSqlParser.js";
import { Loop_statementContext } from "./PlSqlParser.js";
import { Cursor_loop_paramContext } from "./PlSqlParser.js";
import { Forall_statementContext } from "./PlSqlParser.js";
import { Bounds_clauseContext } from "./PlSqlParser.js";
import { Between_boundContext } from "./PlSqlParser.js";
import { Lower_boundContext } from "./PlSqlParser.js";
import { Upper_boundContext } from "./PlSqlParser.js";
import { Null_statementContext } from "./PlSqlParser.js";
import { Raise_statementContext } from "./PlSqlParser.js";
import { Return_statementContext } from "./PlSqlParser.js";
import { Function_callContext } from "./PlSqlParser.js";
import { Procedure_callContext } from "./PlSqlParser.js";
import { Pipe_row_statementContext } from "./PlSqlParser.js";
import { BodyContext } from "./PlSqlParser.js";
import { Exception_handlerContext } from "./PlSqlParser.js";
import { Trigger_blockContext } from "./PlSqlParser.js";
import { BlockContext } from "./PlSqlParser.js";
import { Sql_statementContext } from "./PlSqlParser.js";
import { Execute_immediateContext } from "./PlSqlParser.js";
import { Dynamic_returning_clauseContext } from "./PlSqlParser.js";
import { Data_manipulation_language_statementsContext } from "./PlSqlParser.js";
import { Cursor_manipulation_statementsContext } from "./PlSqlParser.js";
import { Close_statementContext } from "./PlSqlParser.js";
import { Open_statementContext } from "./PlSqlParser.js";
import { Fetch_statementContext } from "./PlSqlParser.js";
import { Open_for_statementContext } from "./PlSqlParser.js";
import { Transaction_control_statementsContext } from "./PlSqlParser.js";
import { Set_transaction_commandContext } from "./PlSqlParser.js";
import { Set_constraint_commandContext } from "./PlSqlParser.js";
import { Commit_statementContext } from "./PlSqlParser.js";
import { Write_clauseContext } from "./PlSqlParser.js";
import { Rollback_statementContext } from "./PlSqlParser.js";
import { Savepoint_statementContext } from "./PlSqlParser.js";
import { Explain_statementContext } from "./PlSqlParser.js";
import { Select_only_statementContext } from "./PlSqlParser.js";
import { Select_statementContext } from "./PlSqlParser.js";
import { Subquery_factoring_clauseContext } from "./PlSqlParser.js";
import { Factoring_elementContext } from "./PlSqlParser.js";
import { Search_clauseContext } from "./PlSqlParser.js";
import { Cycle_clauseContext } from "./PlSqlParser.js";
import { SubqueryContext } from "./PlSqlParser.js";
import { Subquery_basic_elementsContext } from "./PlSqlParser.js";
import { Subquery_operation_partContext } from "./PlSqlParser.js";
import { Query_blockContext } from "./PlSqlParser.js";
import { Selected_listContext } from "./PlSqlParser.js";
import { From_clauseContext } from "./PlSqlParser.js";
import { Select_list_elementsContext } from "./PlSqlParser.js";
import { Table_ref_listContext } from "./PlSqlParser.js";
import { Table_refContext } from "./PlSqlParser.js";
import { Table_ref_auxContext } from "./PlSqlParser.js";
import { Table_ref_aux_internal_oneContext } from "./PlSqlParser.js";
import { Table_ref_aux_internal_twoContext } from "./PlSqlParser.js";
import { Table_ref_aux_internal_threeContext } from "./PlSqlParser.js";
import { Join_clauseContext } from "./PlSqlParser.js";
import { Join_on_partContext } from "./PlSqlParser.js";
import { Join_using_partContext } from "./PlSqlParser.js";
import { Outer_join_typeContext } from "./PlSqlParser.js";
import { Query_partition_clauseContext } from "./PlSqlParser.js";
import { Flashback_query_clauseContext } from "./PlSqlParser.js";
import { Pivot_clauseContext } from "./PlSqlParser.js";
import { Pivot_elementContext } from "./PlSqlParser.js";
import { Pivot_for_clauseContext } from "./PlSqlParser.js";
import { Pivot_in_clauseContext } from "./PlSqlParser.js";
import { Pivot_in_clause_elementContext } from "./PlSqlParser.js";
import { Pivot_in_clause_elementsContext } from "./PlSqlParser.js";
import { Unpivot_clauseContext } from "./PlSqlParser.js";
import { Unpivot_in_clauseContext } from "./PlSqlParser.js";
import { Unpivot_in_elementsContext } from "./PlSqlParser.js";
import { Hierarchical_query_clauseContext } from "./PlSqlParser.js";
import { Start_partContext } from "./PlSqlParser.js";
import { Group_by_clauseContext } from "./PlSqlParser.js";
import { Group_by_elementsContext } from "./PlSqlParser.js";
import { Rollup_cube_clauseContext } from "./PlSqlParser.js";
import { Grouping_sets_clauseContext } from "./PlSqlParser.js";
import { Grouping_sets_elementsContext } from "./PlSqlParser.js";
import { Having_clauseContext } from "./PlSqlParser.js";
import { Model_clauseContext } from "./PlSqlParser.js";
import { Cell_reference_optionsContext } from "./PlSqlParser.js";
import { Return_rows_clauseContext } from "./PlSqlParser.js";
import { Reference_modelContext } from "./PlSqlParser.js";
import { Main_modelContext } from "./PlSqlParser.js";
import { Model_column_clausesContext } from "./PlSqlParser.js";
import { Model_column_partition_partContext } from "./PlSqlParser.js";
import { Model_column_listContext } from "./PlSqlParser.js";
import { Model_columnContext } from "./PlSqlParser.js";
import { Model_rules_clauseContext } from "./PlSqlParser.js";
import { Model_rules_partContext } from "./PlSqlParser.js";
import { Model_rules_elementContext } from "./PlSqlParser.js";
import { Cell_assignmentContext } from "./PlSqlParser.js";
import { Model_iterate_clauseContext } from "./PlSqlParser.js";
import { Until_partContext } from "./PlSqlParser.js";
import { Order_by_clauseContext } from "./PlSqlParser.js";
import { Order_by_elementsContext } from "./PlSqlParser.js";
import { Offset_clauseContext } from "./PlSqlParser.js";
import { Fetch_clauseContext } from "./PlSqlParser.js";
import { For_update_clauseContext } from "./PlSqlParser.js";
import { For_update_of_partContext } from "./PlSqlParser.js";
import { For_update_optionsContext } from "./PlSqlParser.js";
import { Update_statementContext } from "./PlSqlParser.js";
import { Update_set_clauseContext } from "./PlSqlParser.js";
import { Column_based_update_set_clauseContext } from "./PlSqlParser.js";
import { Delete_statementContext } from "./PlSqlParser.js";
import { Insert_statementContext } from "./PlSqlParser.js";
import { Single_table_insertContext } from "./PlSqlParser.js";
import { Multi_table_insertContext } from "./PlSqlParser.js";
import { Multi_table_elementContext } from "./PlSqlParser.js";
import { Conditional_insert_clauseContext } from "./PlSqlParser.js";
import { Conditional_insert_when_partContext } from "./PlSqlParser.js";
import { Conditional_insert_else_partContext } from "./PlSqlParser.js";
import { Insert_into_clauseContext } from "./PlSqlParser.js";
import { Values_clauseContext } from "./PlSqlParser.js";
import { Merge_statementContext } from "./PlSqlParser.js";
import { Merge_update_clauseContext } from "./PlSqlParser.js";
import { Merge_elementContext } from "./PlSqlParser.js";
import { Merge_update_delete_partContext } from "./PlSqlParser.js";
import { Merge_insert_clauseContext } from "./PlSqlParser.js";
import { Selected_tableviewContext } from "./PlSqlParser.js";
import { Lock_table_statementContext } from "./PlSqlParser.js";
import { Wait_nowait_partContext } from "./PlSqlParser.js";
import { Lock_table_elementContext } from "./PlSqlParser.js";
import { Lock_modeContext } from "./PlSqlParser.js";
import { General_table_refContext } from "./PlSqlParser.js";
import { Static_returning_clauseContext } from "./PlSqlParser.js";
import { Error_logging_clauseContext } from "./PlSqlParser.js";
import { Error_logging_into_partContext } from "./PlSqlParser.js";
import { Error_logging_reject_partContext } from "./PlSqlParser.js";
import { Dml_table_expression_clauseContext } from "./PlSqlParser.js";
import { Table_collection_expressionContext } from "./PlSqlParser.js";
import { Subquery_restriction_clauseContext } from "./PlSqlParser.js";
import { Sample_clauseContext } from "./PlSqlParser.js";
import { Seed_partContext } from "./PlSqlParser.js";
import { ConditionContext } from "./PlSqlParser.js";
import { ExpressionsContext } from "./PlSqlParser.js";
import { ExpressionContext } from "./PlSqlParser.js";
import { Cursor_expressionContext } from "./PlSqlParser.js";
import { Logical_expressionContext } from "./PlSqlParser.js";
import { Unary_logical_expressionContext } from "./PlSqlParser.js";
import { Logical_operationContext } from "./PlSqlParser.js";
import { Multiset_expressionContext } from "./PlSqlParser.js";
import { Relational_expressionContext } from "./PlSqlParser.js";
import { Compound_expressionContext } from "./PlSqlParser.js";
import { Relational_operatorContext } from "./PlSqlParser.js";
import { In_elementsContext } from "./PlSqlParser.js";
import { Between_elementsContext } from "./PlSqlParser.js";
import { ConcatenationContext } from "./PlSqlParser.js";
import { Interval_expressionContext } from "./PlSqlParser.js";
import { Model_expressionContext } from "./PlSqlParser.js";
import { Model_expression_elementContext } from "./PlSqlParser.js";
import { Single_column_for_loopContext } from "./PlSqlParser.js";
import { Multi_column_for_loopContext } from "./PlSqlParser.js";
import { Unary_expressionContext } from "./PlSqlParser.js";
import { Case_statementContext } from "./PlSqlParser.js";
import { Simple_case_statementContext } from "./PlSqlParser.js";
import { Simple_case_when_partContext } from "./PlSqlParser.js";
import { Searched_case_statementContext } from "./PlSqlParser.js";
import { Searched_case_when_partContext } from "./PlSqlParser.js";
import { Case_else_partContext } from "./PlSqlParser.js";
import { AtomContext } from "./PlSqlParser.js";
import { Quantified_expressionContext } from "./PlSqlParser.js";
import { String_functionContext } from "./PlSqlParser.js";
import { Standard_functionContext } from "./PlSqlParser.js";
import { LiteralContext } from "./PlSqlParser.js";
import { Numeric_function_wrapperContext } from "./PlSqlParser.js";
import { Numeric_functionContext } from "./PlSqlParser.js";
import { Other_functionContext } from "./PlSqlParser.js";
import { Over_clause_keywordContext } from "./PlSqlParser.js";
import { Within_or_over_clause_keywordContext } from "./PlSqlParser.js";
import { Standard_prediction_function_keywordContext } from "./PlSqlParser.js";
import { Over_clauseContext } from "./PlSqlParser.js";
import { Windowing_clauseContext } from "./PlSqlParser.js";
import { Windowing_typeContext } from "./PlSqlParser.js";
import { Windowing_elementsContext } from "./PlSqlParser.js";
import { Using_clauseContext } from "./PlSqlParser.js";
import { Using_elementContext } from "./PlSqlParser.js";
import { Collect_order_by_partContext } from "./PlSqlParser.js";
import { Within_or_over_partContext } from "./PlSqlParser.js";
import { Cost_matrix_clauseContext } from "./PlSqlParser.js";
import { Xml_passing_clauseContext } from "./PlSqlParser.js";
import { Xml_attributes_clauseContext } from "./PlSqlParser.js";
import { Xml_namespaces_clauseContext } from "./PlSqlParser.js";
import { Xml_table_columnContext } from "./PlSqlParser.js";
import { Xml_general_default_partContext } from "./PlSqlParser.js";
import { Xml_multiuse_expression_elementContext } from "./PlSqlParser.js";
import { Xmlroot_param_version_partContext } from "./PlSqlParser.js";
import { Xmlroot_param_standalone_partContext } from "./PlSqlParser.js";
import { Xmlserialize_param_enconding_partContext } from "./PlSqlParser.js";
import { Xmlserialize_param_version_partContext } from "./PlSqlParser.js";
import { Xmlserialize_param_ident_partContext } from "./PlSqlParser.js";
import { Sql_plus_commandContext } from "./PlSqlParser.js";
import { Whenever_commandContext } from "./PlSqlParser.js";
import { Set_commandContext } from "./PlSqlParser.js";
import { Partition_extension_clauseContext } from "./PlSqlParser.js";
import { Column_aliasContext } from "./PlSqlParser.js";
import { Table_aliasContext } from "./PlSqlParser.js";
import { Where_clauseContext } from "./PlSqlParser.js";
import { Into_clauseContext } from "./PlSqlParser.js";
import { Xml_column_nameContext } from "./PlSqlParser.js";
import { Cost_class_nameContext } from "./PlSqlParser.js";
import { Attribute_nameContext } from "./PlSqlParser.js";
import { Savepoint_nameContext } from "./PlSqlParser.js";
import { Rollback_segment_nameContext } from "./PlSqlParser.js";
import { Schema_nameContext } from "./PlSqlParser.js";
import { Routine_nameContext } from "./PlSqlParser.js";
import { Package_nameContext } from "./PlSqlParser.js";
import { Implementation_type_nameContext } from "./PlSqlParser.js";
import { Parameter_nameContext } from "./PlSqlParser.js";
import { Reference_model_nameContext } from "./PlSqlParser.js";
import { Main_model_nameContext } from "./PlSqlParser.js";
import { Container_tableview_nameContext } from "./PlSqlParser.js";
import { Aggregate_function_nameContext } from "./PlSqlParser.js";
import { Query_nameContext } from "./PlSqlParser.js";
import { Grantee_nameContext } from "./PlSqlParser.js";
import { Role_nameContext } from "./PlSqlParser.js";
import { Constraint_nameContext } from "./PlSqlParser.js";
import { Label_nameContext } from "./PlSqlParser.js";
import { Type_nameContext } from "./PlSqlParser.js";
import { Sequence_nameContext } from "./PlSqlParser.js";
import { Exception_nameContext } from "./PlSqlParser.js";
import { Function_nameContext } from "./PlSqlParser.js";
import { Procedure_nameContext } from "./PlSqlParser.js";
import { Trigger_nameContext } from "./PlSqlParser.js";
import { Variable_nameContext } from "./PlSqlParser.js";
import { Index_nameContext } from "./PlSqlParser.js";
import { Cursor_nameContext } from "./PlSqlParser.js";
import { Record_nameContext } from "./PlSqlParser.js";
import { Collection_nameContext } from "./PlSqlParser.js";
import { Link_nameContext } from "./PlSqlParser.js";
import { Column_nameContext } from "./PlSqlParser.js";
import { Tableview_nameContext } from "./PlSqlParser.js";
import { XmltableContext } from "./PlSqlParser.js";
import { Char_set_nameContext } from "./PlSqlParser.js";
import { Synonym_nameContext } from "./PlSqlParser.js";
import { Schema_object_nameContext } from "./PlSqlParser.js";
import { Dir_object_nameContext } from "./PlSqlParser.js";
import { User_object_nameContext } from "./PlSqlParser.js";
import { Grant_object_nameContext } from "./PlSqlParser.js";
import { Column_listContext } from "./PlSqlParser.js";
import { Paren_column_listContext } from "./PlSqlParser.js";
import { Keep_clauseContext } from "./PlSqlParser.js";
import { Function_argumentContext } from "./PlSqlParser.js";
import { Function_argument_analyticContext } from "./PlSqlParser.js";
import { Function_argument_modelingContext } from "./PlSqlParser.js";
import { Respect_or_ignore_nullsContext } from "./PlSqlParser.js";
import { ArgumentContext } from "./PlSqlParser.js";
import { Type_specContext } from "./PlSqlParser.js";
import { DatatypeContext } from "./PlSqlParser.js";
import { Precision_partContext } from "./PlSqlParser.js";
import { Native_datatype_elementContext } from "./PlSqlParser.js";
import { Bind_variableContext } from "./PlSqlParser.js";
import { General_elementContext } from "./PlSqlParser.js";
import { General_element_partContext } from "./PlSqlParser.js";
import { Table_elementContext } from "./PlSqlParser.js";
import { Object_privilegeContext } from "./PlSqlParser.js";
import { System_privilegeContext } from "./PlSqlParser.js";
import { ConstantContext } from "./PlSqlParser.js";
import { NumericContext } from "./PlSqlParser.js";
import { Numeric_negativeContext } from "./PlSqlParser.js";
import { Quoted_stringContext } from "./PlSqlParser.js";
import { IdentifierContext } from "./PlSqlParser.js";
import { Id_expressionContext } from "./PlSqlParser.js";
import { Outer_join_signContext } from "./PlSqlParser.js";
import { Regular_idContext } from "./PlSqlParser.js";
import { Non_reserved_keywords_in_12cContext } from "./PlSqlParser.js";
import { Non_reserved_keywords_pre12cContext } from "./PlSqlParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PlSqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class PlSqlParserVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `PlSqlParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.sql_script`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSql_script?: (ctx: Sql_scriptContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.unit_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnit_statement?: (ctx: Unit_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_function`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_function?: (ctx: Drop_functionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_function`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_function?: (ctx: Alter_functionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_function_body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_function_body?: (ctx: Create_function_bodyContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.parallel_enable_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParallel_enable_clause?: (ctx: Parallel_enable_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.partition_by_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartition_by_clause?: (ctx: Partition_by_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.result_cache_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResult_cache_clause?: (ctx: Result_cache_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.relies_on_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelies_on_part?: (ctx: Relies_on_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.streaming_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStreaming_clause?: (ctx: Streaming_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_package`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_package?: (ctx: Drop_packageContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_package`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_package?: (ctx: Alter_packageContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_package`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_package?: (ctx: Create_packageContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_package_body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_package_body?: (ctx: Create_package_bodyContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.package_obj_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPackage_obj_spec?: (ctx: Package_obj_specContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.procedure_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedure_spec?: (ctx: Procedure_specContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.function_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_spec?: (ctx: Function_specContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.package_obj_body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPackage_obj_body?: (ctx: Package_obj_bodyContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_procedure`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_procedure?: (ctx: Drop_procedureContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_procedure`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_procedure?: (ctx: Alter_procedureContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.function_body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_body?: (ctx: Function_bodyContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.procedure_body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedure_body?: (ctx: Procedure_bodyContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_procedure_body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_procedure_body?: (ctx: Create_procedure_bodyContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_trigger`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_trigger?: (ctx: Drop_triggerContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_trigger`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_trigger?: (ctx: Alter_triggerContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_trigger`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_trigger?: (ctx: Create_triggerContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.trigger_follows_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrigger_follows_clause?: (ctx: Trigger_follows_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.trigger_when_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrigger_when_clause?: (ctx: Trigger_when_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.simple_dml_trigger`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimple_dml_trigger?: (ctx: Simple_dml_triggerContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.for_each_row`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFor_each_row?: (ctx: For_each_rowContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.compound_dml_trigger`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompound_dml_trigger?: (ctx: Compound_dml_triggerContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.non_dml_trigger`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNon_dml_trigger?: (ctx: Non_dml_triggerContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.trigger_body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrigger_body?: (ctx: Trigger_bodyContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.non_dml_event`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNon_dml_event?: (ctx: Non_dml_eventContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.dml_event_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDml_event_clause?: (ctx: Dml_event_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.dml_event_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDml_event_element?: (ctx: Dml_event_elementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.dml_event_nested_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDml_event_nested_clause?: (ctx: Dml_event_nested_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.referencing_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReferencing_clause?: (ctx: Referencing_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.referencing_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReferencing_element?: (ctx: Referencing_elementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_type?: (ctx: Drop_typeContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_type?: (ctx: Alter_typeContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.compile_type_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompile_type_clause?: (ctx: Compile_type_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.replace_type_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplace_type_clause?: (ctx: Replace_type_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_method_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_method_spec?: (ctx: Alter_method_specContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_method_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_method_element?: (ctx: Alter_method_elementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_collection_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_collection_clauses?: (ctx: Alter_collection_clausesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.dependent_handling_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDependent_handling_clause?: (ctx: Dependent_handling_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.dependent_exceptions_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDependent_exceptions_part?: (ctx: Dependent_exceptions_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_type?: (ctx: Create_typeContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.type_definition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_definition?: (ctx: Type_definitionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.object_type_def`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_type_def?: (ctx: Object_type_defContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.object_as_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_as_part?: (ctx: Object_as_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.object_under_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_under_part?: (ctx: Object_under_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.nested_table_type_def`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNested_table_type_def?: (ctx: Nested_table_type_defContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.sqlj_object_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSqlj_object_type?: (ctx: Sqlj_object_typeContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.type_body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_body?: (ctx: Type_bodyContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.type_body_elements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_body_elements?: (ctx: Type_body_elementsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.map_order_func_declaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMap_order_func_declaration?: (ctx: Map_order_func_declarationContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.subprog_decl_in_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubprog_decl_in_type?: (ctx: Subprog_decl_in_typeContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.proc_decl_in_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProc_decl_in_type?: (ctx: Proc_decl_in_typeContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.func_decl_in_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_decl_in_type?: (ctx: Func_decl_in_typeContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.constructor_declaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstructor_declaration?: (ctx: Constructor_declarationContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.modifier_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModifier_clause?: (ctx: Modifier_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.object_member_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_member_spec?: (ctx: Object_member_specContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.sqlj_object_type_attr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSqlj_object_type_attr?: (ctx: Sqlj_object_type_attrContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.element_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElement_spec?: (ctx: Element_specContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.element_spec_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElement_spec_options?: (ctx: Element_spec_optionsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.subprogram_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubprogram_spec?: (ctx: Subprogram_specContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.overriding_subprogram_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOverriding_subprogram_spec?: (ctx: Overriding_subprogram_specContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.overriding_function_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOverriding_function_spec?: (ctx: Overriding_function_specContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.type_procedure_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_procedure_spec?: (ctx: Type_procedure_specContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.type_function_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_function_spec?: (ctx: Type_function_specContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.constructor_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstructor_spec?: (ctx: Constructor_specContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.map_order_function_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMap_order_function_spec?: (ctx: Map_order_function_specContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.pragma_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPragma_clause?: (ctx: Pragma_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.pragma_elements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPragma_elements?: (ctx: Pragma_elementsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.type_elements_parameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_elements_parameter?: (ctx: Type_elements_parameterContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_sequence`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_sequence?: (ctx: Drop_sequenceContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_sequence`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_sequence?: (ctx: Alter_sequenceContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_session`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_session?: (ctx: Alter_sessionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_session_set_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_session_set_clause?: (ctx: Alter_session_set_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_sequence`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_sequence?: (ctx: Create_sequenceContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.sequence_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSequence_spec?: (ctx: Sequence_specContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.sequence_start_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSequence_start_clause?: (ctx: Sequence_start_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_index`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_index?: (ctx: Create_indexContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.cluster_index_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCluster_index_clause?: (ctx: Cluster_index_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.cluster_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCluster_name?: (ctx: Cluster_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.table_index_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_index_clause?: (ctx: Table_index_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.bitmap_join_index_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBitmap_join_index_clause?: (ctx: Bitmap_join_index_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.index_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_expr?: (ctx: Index_exprContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.index_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_properties?: (ctx: Index_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.domain_index_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDomain_index_clause?: (ctx: Domain_index_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.local_domain_index_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocal_domain_index_clause?: (ctx: Local_domain_index_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.xmlindex_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmlindex_clause?: (ctx: Xmlindex_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.local_xmlindex_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocal_xmlindex_clause?: (ctx: Local_xmlindex_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.global_partitioned_index`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGlobal_partitioned_index?: (ctx: Global_partitioned_indexContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.index_partitioning_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_partitioning_clause?: (ctx: Index_partitioning_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.local_partitioned_index`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocal_partitioned_index?: (ctx: Local_partitioned_indexContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.on_range_partitioned_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOn_range_partitioned_table?: (ctx: On_range_partitioned_tableContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.on_list_partitioned_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOn_list_partitioned_table?: (ctx: On_list_partitioned_tableContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.partitioned_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitioned_table?: (ctx: Partitioned_tableContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.on_hash_partitioned_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOn_hash_partitioned_table?: (ctx: On_hash_partitioned_tableContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.on_hash_partitioned_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOn_hash_partitioned_clause?: (ctx: On_hash_partitioned_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.on_comp_partitioned_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOn_comp_partitioned_table?: (ctx: On_comp_partitioned_tableContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.on_comp_partitioned_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOn_comp_partitioned_clause?: (ctx: On_comp_partitioned_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.index_subpartition_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_subpartition_clause?: (ctx: Index_subpartition_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.index_subpartition_subclause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_subpartition_subclause?: (ctx: Index_subpartition_subclauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.odci_parameters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOdci_parameters?: (ctx: Odci_parametersContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.indextype`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndextype?: (ctx: IndextypeContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_index`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_index?: (ctx: Alter_indexContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_index_ops_set1`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_index_ops_set1?: (ctx: Alter_index_ops_set1Context) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_index_ops_set2`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_index_ops_set2?: (ctx: Alter_index_ops_set2Context) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.visible_or_invisible`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVisible_or_invisible?: (ctx: Visible_or_invisibleContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.monitoring_nomonitoring`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMonitoring_nomonitoring?: (ctx: Monitoring_nomonitoringContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.rebuild_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRebuild_clause?: (ctx: Rebuild_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_index_partitioning`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_index_partitioning?: (ctx: Alter_index_partitioningContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.modify_index_default_attrs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModify_index_default_attrs?: (ctx: Modify_index_default_attrsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.add_hash_index_partition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd_hash_index_partition?: (ctx: Add_hash_index_partitionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.coalesce_index_partition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCoalesce_index_partition?: (ctx: Coalesce_index_partitionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.modify_index_partition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModify_index_partition?: (ctx: Modify_index_partitionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.modify_index_partitions_ops`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModify_index_partitions_ops?: (ctx: Modify_index_partitions_opsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.rename_index_partition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRename_index_partition?: (ctx: Rename_index_partitionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_index_partition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_index_partition?: (ctx: Drop_index_partitionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.split_index_partition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSplit_index_partition?: (ctx: Split_index_partitionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.index_partition_description`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_partition_description?: (ctx: Index_partition_descriptionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.modify_index_subpartition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModify_index_subpartition?: (ctx: Modify_index_subpartitionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.partition_name_old`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartition_name_old?: (ctx: Partition_name_oldContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.new_partition_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNew_partition_name?: (ctx: New_partition_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.new_index_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNew_index_name?: (ctx: New_index_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_user`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_user?: (ctx: Create_userContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_user`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_user?: (ctx: Alter_userContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_identified_by`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_identified_by?: (ctx: Alter_identified_byContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.identified_by`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentified_by?: (ctx: Identified_byContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.identified_other_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentified_other_clause?: (ctx: Identified_other_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.user_tablespace_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUser_tablespace_clause?: (ctx: User_tablespace_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.quota_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuota_clause?: (ctx: Quota_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.profile_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProfile_clause?: (ctx: Profile_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.role_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRole_clause?: (ctx: Role_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.user_default_role_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUser_default_role_clause?: (ctx: User_default_role_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.password_expire_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPassword_expire_clause?: (ctx: Password_expire_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.user_lock_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUser_lock_clause?: (ctx: User_lock_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.user_editions_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUser_editions_clause?: (ctx: User_editions_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_user_editions_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_user_editions_clause?: (ctx: Alter_user_editions_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.proxy_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProxy_clause?: (ctx: Proxy_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.container_names`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContainer_names?: (ctx: Container_namesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.set_container_data`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_container_data?: (ctx: Set_container_dataContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.add_rem_container_data`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd_rem_container_data?: (ctx: Add_rem_container_dataContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.container_data_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContainer_data_clause?: (ctx: Container_data_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.analyze`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyze?: (ctx: AnalyzeContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.partition_extention_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartition_extention_clause?: (ctx: Partition_extention_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.validation_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValidation_clauses?: (ctx: Validation_clausesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.online_or_offline`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOnline_or_offline?: (ctx: Online_or_offlineContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.into_clause1`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInto_clause1?: (ctx: Into_clause1Context) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.partition_key_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartition_key_value?: (ctx: Partition_key_valueContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.subpartition_key_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubpartition_key_value?: (ctx: Subpartition_key_valueContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.associate_statistics`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssociate_statistics?: (ctx: Associate_statisticsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.column_association`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_association?: (ctx: Column_associationContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.function_association`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_association?: (ctx: Function_associationContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.indextype_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndextype_name?: (ctx: Indextype_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.using_statistics_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUsing_statistics_type?: (ctx: Using_statistics_typeContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.statistics_type_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatistics_type_name?: (ctx: Statistics_type_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.default_cost_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefault_cost_clause?: (ctx: Default_cost_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.cpu_cost`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCpu_cost?: (ctx: Cpu_costContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.io_cost`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIo_cost?: (ctx: Io_costContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.network_cost`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNetwork_cost?: (ctx: Network_costContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.default_selectivity_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefault_selectivity_clause?: (ctx: Default_selectivity_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.default_selectivity`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefault_selectivity?: (ctx: Default_selectivityContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.storage_table_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStorage_table_clause?: (ctx: Storage_table_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.unified_auditing`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnified_auditing?: (ctx: Unified_auditingContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.policy_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPolicy_name?: (ctx: Policy_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.audit_traditional`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAudit_traditional?: (ctx: Audit_traditionalContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.audit_direct_path`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAudit_direct_path?: (ctx: Audit_direct_pathContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.audit_container_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAudit_container_clause?: (ctx: Audit_container_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.audit_operation_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAudit_operation_clause?: (ctx: Audit_operation_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.auditing_by_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAuditing_by_clause?: (ctx: Auditing_by_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.audit_user`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAudit_user?: (ctx: Audit_userContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.audit_schema_object_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAudit_schema_object_clause?: (ctx: Audit_schema_object_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.sql_operation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSql_operation?: (ctx: Sql_operationContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.auditing_on_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAuditing_on_clause?: (ctx: Auditing_on_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.model_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModel_name?: (ctx: Model_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.object_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_name?: (ctx: Object_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.profile_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProfile_name?: (ctx: Profile_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.sql_statement_shortcut`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSql_statement_shortcut?: (ctx: Sql_statement_shortcutContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_index`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_index?: (ctx: Drop_indexContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.rename_object`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRename_object?: (ctx: Rename_objectContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.grant_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrant_statement?: (ctx: Grant_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.container_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContainer_clause?: (ctx: Container_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_directory`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_directory?: (ctx: Create_directoryContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.directory_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDirectory_name?: (ctx: Directory_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.directory_path`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDirectory_path?: (ctx: Directory_pathContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_library`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_library?: (ctx: Alter_libraryContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.library_editionable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLibrary_editionable?: (ctx: Library_editionableContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.library_debug`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLibrary_debug?: (ctx: Library_debugContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.compiler_parameters_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompiler_parameters_clause?: (ctx: Compiler_parameters_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.parameter_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameter_value?: (ctx: Parameter_valueContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.library_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLibrary_name?: (ctx: Library_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_view`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_view?: (ctx: Alter_viewContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_view_editionable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_view_editionable?: (ctx: Alter_view_editionableContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_view`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_view?: (ctx: Create_viewContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.view_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitView_options?: (ctx: View_optionsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.view_alias_constraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitView_alias_constraint?: (ctx: View_alias_constraintContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.object_view_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_view_clause?: (ctx: Object_view_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.inline_constraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInline_constraint?: (ctx: Inline_constraintContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.inline_ref_constraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInline_ref_constraint?: (ctx: Inline_ref_constraintContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.out_of_line_ref_constraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOut_of_line_ref_constraint?: (ctx: Out_of_line_ref_constraintContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.out_of_line_constraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOut_of_line_constraint?: (ctx: Out_of_line_constraintContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.constraint_state`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstraint_state?: (ctx: Constraint_stateContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_tablespace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_tablespace?: (ctx: Alter_tablespaceContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.datafile_tempfile_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatafile_tempfile_clauses?: (ctx: Datafile_tempfile_clausesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.tablespace_logging_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablespace_logging_clauses?: (ctx: Tablespace_logging_clausesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.tablespace_group_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablespace_group_clause?: (ctx: Tablespace_group_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.tablespace_group_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablespace_group_name?: (ctx: Tablespace_group_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.tablespace_state_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablespace_state_clauses?: (ctx: Tablespace_state_clausesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.flashback_mode_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFlashback_mode_clause?: (ctx: Flashback_mode_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.new_tablespace_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNew_tablespace_name?: (ctx: New_tablespace_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_tablespace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_tablespace?: (ctx: Create_tablespaceContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.permanent_tablespace_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPermanent_tablespace_clause?: (ctx: Permanent_tablespace_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.tablespace_encryption_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablespace_encryption_spec?: (ctx: Tablespace_encryption_specContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.logging_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogging_clause?: (ctx: Logging_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.extent_management_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtent_management_clause?: (ctx: Extent_management_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.segment_management_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSegment_management_clause?: (ctx: Segment_management_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.temporary_tablespace_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTemporary_tablespace_clause?: (ctx: Temporary_tablespace_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.undo_tablespace_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUndo_tablespace_clause?: (ctx: Undo_tablespace_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.tablespace_retention_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablespace_retention_clause?: (ctx: Tablespace_retention_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.datafile_specification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatafile_specification?: (ctx: Datafile_specificationContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.tempfile_specification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTempfile_specification?: (ctx: Tempfile_specificationContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.datafile_tempfile_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatafile_tempfile_spec?: (ctx: Datafile_tempfile_specContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.redo_log_file_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRedo_log_file_spec?: (ctx: Redo_log_file_specContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.autoextend_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAutoextend_clause?: (ctx: Autoextend_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.maxsize_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMaxsize_clause?: (ctx: Maxsize_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.build_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBuild_clause?: (ctx: Build_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.parallel_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParallel_clause?: (ctx: Parallel_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_materialized_view`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_materialized_view?: (ctx: Alter_materialized_viewContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_mv_option1`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_mv_option1?: (ctx: Alter_mv_option1Context) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_mv_refresh`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_mv_refresh?: (ctx: Alter_mv_refreshContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.rollback_segment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRollback_segment?: (ctx: Rollback_segmentContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.modify_mv_column_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModify_mv_column_clause?: (ctx: Modify_mv_column_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_materialized_view_log`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_materialized_view_log?: (ctx: Alter_materialized_view_logContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.add_mv_log_column_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd_mv_log_column_clause?: (ctx: Add_mv_log_column_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.move_mv_log_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMove_mv_log_clause?: (ctx: Move_mv_log_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.mv_log_augmentation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMv_log_augmentation?: (ctx: Mv_log_augmentationContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_materialized_view_log`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_materialized_view_log?: (ctx: Create_materialized_view_logContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.new_values_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNew_values_clause?: (ctx: New_values_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.mv_log_purge_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMv_log_purge_clause?: (ctx: Mv_log_purge_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_materialized_view`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_materialized_view?: (ctx: Create_materialized_viewContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_mv_refresh`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_mv_refresh?: (ctx: Create_mv_refreshContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_context`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_context?: (ctx: Create_contextContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.oracle_namespace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOracle_namespace?: (ctx: Oracle_namespaceContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_cluster`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_cluster?: (ctx: Create_clusterContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_table?: (ctx: Create_tableContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.xmltype_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmltype_table?: (ctx: Xmltype_tableContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.xmltype_virtual_columns`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmltype_virtual_columns?: (ctx: Xmltype_virtual_columnsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.xmltype_column_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmltype_column_properties?: (ctx: Xmltype_column_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.xmltype_storage`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmltype_storage?: (ctx: Xmltype_storageContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.xmlschema_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmlschema_spec?: (ctx: Xmlschema_specContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.object_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_table?: (ctx: Object_tableContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.oid_index_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOid_index_clause?: (ctx: Oid_index_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.oid_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOid_clause?: (ctx: Oid_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.object_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_properties?: (ctx: Object_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.object_table_substitution`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_table_substitution?: (ctx: Object_table_substitutionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.relational_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelational_table?: (ctx: Relational_tableContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.relational_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelational_property?: (ctx: Relational_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.table_partitioning_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_partitioning_clauses?: (ctx: Table_partitioning_clausesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.range_partitions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRange_partitions?: (ctx: Range_partitionsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.list_partitions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitList_partitions?: (ctx: List_partitionsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.hash_partitions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHash_partitions?: (ctx: Hash_partitionsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.individual_hash_partitions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndividual_hash_partitions?: (ctx: Individual_hash_partitionsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.hash_partitions_by_quantity`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHash_partitions_by_quantity?: (ctx: Hash_partitions_by_quantityContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.hash_partition_quantity`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHash_partition_quantity?: (ctx: Hash_partition_quantityContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.composite_range_partitions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComposite_range_partitions?: (ctx: Composite_range_partitionsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.composite_list_partitions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComposite_list_partitions?: (ctx: Composite_list_partitionsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.composite_hash_partitions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComposite_hash_partitions?: (ctx: Composite_hash_partitionsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.reference_partitioning`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReference_partitioning?: (ctx: Reference_partitioningContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.reference_partition_desc`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReference_partition_desc?: (ctx: Reference_partition_descContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.system_partitioning`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSystem_partitioning?: (ctx: System_partitioningContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.range_partition_desc`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRange_partition_desc?: (ctx: Range_partition_descContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.list_partition_desc`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitList_partition_desc?: (ctx: List_partition_descContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.subpartition_template`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubpartition_template?: (ctx: Subpartition_templateContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.hash_subpartition_quantity`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHash_subpartition_quantity?: (ctx: Hash_subpartition_quantityContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.subpartition_by_range`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubpartition_by_range?: (ctx: Subpartition_by_rangeContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.subpartition_by_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubpartition_by_list?: (ctx: Subpartition_by_listContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.subpartition_by_hash`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubpartition_by_hash?: (ctx: Subpartition_by_hashContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.subpartition_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubpartition_name?: (ctx: Subpartition_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.range_subpartition_desc`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRange_subpartition_desc?: (ctx: Range_subpartition_descContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.list_subpartition_desc`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitList_subpartition_desc?: (ctx: List_subpartition_descContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.individual_hash_subparts`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndividual_hash_subparts?: (ctx: Individual_hash_subpartsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.hash_subparts_by_quantity`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHash_subparts_by_quantity?: (ctx: Hash_subparts_by_quantityContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.range_values_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRange_values_clause?: (ctx: Range_values_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.list_values_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitList_values_clause?: (ctx: List_values_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.table_partition_description`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_partition_description?: (ctx: Table_partition_descriptionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.partitioning_storage_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitioning_storage_clause?: (ctx: Partitioning_storage_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.lob_partitioning_storage`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLob_partitioning_storage?: (ctx: Lob_partitioning_storageContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.size_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSize_clause?: (ctx: Size_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.table_compression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_compression?: (ctx: Table_compressionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.physical_attributes_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPhysical_attributes_clause?: (ctx: Physical_attributes_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.storage_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStorage_clause?: (ctx: Storage_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.deferred_segment_creation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeferred_segment_creation?: (ctx: Deferred_segment_creationContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.segment_attributes_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSegment_attributes_clause?: (ctx: Segment_attributes_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.physical_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPhysical_properties?: (ctx: Physical_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.row_movement_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRow_movement_clause?: (ctx: Row_movement_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.flashback_archive_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFlashback_archive_clause?: (ctx: Flashback_archive_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.log_grp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLog_grp?: (ctx: Log_grpContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.supplemental_table_logging`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSupplemental_table_logging?: (ctx: Supplemental_table_loggingContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.supplemental_log_grp_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSupplemental_log_grp_clause?: (ctx: Supplemental_log_grp_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.supplemental_id_key_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSupplemental_id_key_clause?: (ctx: Supplemental_id_key_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.allocate_extent_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAllocate_extent_clause?: (ctx: Allocate_extent_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.deallocate_unused_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeallocate_unused_clause?: (ctx: Deallocate_unused_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.shrink_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShrink_clause?: (ctx: Shrink_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.records_per_block_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRecords_per_block_clause?: (ctx: Records_per_block_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.upgrade_table_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpgrade_table_clause?: (ctx: Upgrade_table_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_table?: (ctx: Drop_tableContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_view`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_view?: (ctx: Drop_viewContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.comment_on_column`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComment_on_column?: (ctx: Comment_on_columnContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.enable_or_disable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnable_or_disable?: (ctx: Enable_or_disableContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.allow_or_disallow`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAllow_or_disallow?: (ctx: Allow_or_disallowContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_synonym`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_synonym?: (ctx: Create_synonymContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.comment_on_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComment_on_table?: (ctx: Comment_on_tableContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_cluster`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_cluster?: (ctx: Alter_clusterContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.cache_or_nocache`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCache_or_nocache?: (ctx: Cache_or_nocacheContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.database_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatabase_name?: (ctx: Database_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_database`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_database?: (ctx: Alter_databaseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.startup_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStartup_clauses?: (ctx: Startup_clausesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.resetlogs_or_noresetlogs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResetlogs_or_noresetlogs?: (ctx: Resetlogs_or_noresetlogsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.upgrade_or_downgrade`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpgrade_or_downgrade?: (ctx: Upgrade_or_downgradeContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.recovery_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRecovery_clauses?: (ctx: Recovery_clausesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.begin_or_end`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBegin_or_end?: (ctx: Begin_or_endContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.general_recovery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneral_recovery?: (ctx: General_recoveryContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.full_database_recovery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFull_database_recovery?: (ctx: Full_database_recoveryContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.partial_database_recovery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartial_database_recovery?: (ctx: Partial_database_recoveryContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.partial_database_recovery_10g`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartial_database_recovery_10g?: (ctx: Partial_database_recovery_10gContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.managed_standby_recovery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitManaged_standby_recovery?: (ctx: Managed_standby_recoveryContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.db_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDb_name?: (ctx: Db_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.database_file_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatabase_file_clauses?: (ctx: Database_file_clausesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.create_datafile_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_datafile_clause?: (ctx: Create_datafile_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_datafile_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_datafile_clause?: (ctx: Alter_datafile_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_tempfile_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_tempfile_clause?: (ctx: Alter_tempfile_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.logfile_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogfile_clauses?: (ctx: Logfile_clausesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.add_logfile_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd_logfile_clauses?: (ctx: Add_logfile_clausesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.log_file_group`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLog_file_group?: (ctx: Log_file_groupContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_logfile_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_logfile_clauses?: (ctx: Drop_logfile_clausesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.switch_logfile_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSwitch_logfile_clause?: (ctx: Switch_logfile_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.supplemental_db_logging`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSupplemental_db_logging?: (ctx: Supplemental_db_loggingContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.add_or_drop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd_or_drop?: (ctx: Add_or_dropContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.supplemental_plsql_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSupplemental_plsql_clause?: (ctx: Supplemental_plsql_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.logfile_descriptor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogfile_descriptor?: (ctx: Logfile_descriptorContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.controlfile_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitControlfile_clauses?: (ctx: Controlfile_clausesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.trace_file_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrace_file_clause?: (ctx: Trace_file_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.standby_database_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStandby_database_clauses?: (ctx: Standby_database_clausesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.activate_standby_db_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitActivate_standby_db_clause?: (ctx: Activate_standby_db_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.maximize_standby_db_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMaximize_standby_db_clause?: (ctx: Maximize_standby_db_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.register_logfile_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRegister_logfile_clause?: (ctx: Register_logfile_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.commit_switchover_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommit_switchover_clause?: (ctx: Commit_switchover_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.start_standby_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStart_standby_clause?: (ctx: Start_standby_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.stop_standby_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStop_standby_clause?: (ctx: Stop_standby_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.convert_database_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConvert_database_clause?: (ctx: Convert_database_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.default_settings_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefault_settings_clause?: (ctx: Default_settings_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.set_time_zone_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_time_zone_clause?: (ctx: Set_time_zone_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.instance_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInstance_clauses?: (ctx: Instance_clausesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.security_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSecurity_clause?: (ctx: Security_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.domain`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDomain?: (ctx: DomainContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.database`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatabase?: (ctx: DatabaseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.edition_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEdition_name?: (ctx: Edition_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.filenumber`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFilenumber?: (ctx: FilenumberContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.filename`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFilename?: (ctx: FilenameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_table?: (ctx: Alter_tableContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_table_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_table_properties?: (ctx: Alter_table_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_table_properties_1`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_table_properties_1?: (ctx: Alter_table_properties_1Context) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_iot_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_iot_clauses?: (ctx: Alter_iot_clausesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_mapping_table_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_mapping_table_clause?: (ctx: Alter_mapping_table_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.alter_overflow_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_overflow_clause?: (ctx: Alter_overflow_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.add_overflow_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd_overflow_clause?: (ctx: Add_overflow_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.enable_disable_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnable_disable_clause?: (ctx: Enable_disable_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.using_index_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUsing_index_clause?: (ctx: Using_index_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.index_attributes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_attributes?: (ctx: Index_attributesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.sort_or_nosort`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSort_or_nosort?: (ctx: Sort_or_nosortContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.exceptions_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExceptions_clause?: (ctx: Exceptions_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.move_table_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMove_table_clause?: (ctx: Move_table_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.index_org_table_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_org_table_clause?: (ctx: Index_org_table_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.mapping_table_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMapping_table_clause?: (ctx: Mapping_table_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.key_compression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKey_compression?: (ctx: Key_compressionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.index_org_overflow_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_org_overflow_clause?: (ctx: Index_org_overflow_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.column_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_clauses?: (ctx: Column_clausesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.modify_collection_retrieval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModify_collection_retrieval?: (ctx: Modify_collection_retrievalContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.collection_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCollection_item?: (ctx: Collection_itemContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.rename_column_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRename_column_clause?: (ctx: Rename_column_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.old_column_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOld_column_name?: (ctx: Old_column_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.new_column_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNew_column_name?: (ctx: New_column_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.add_modify_drop_column_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd_modify_drop_column_clauses?: (ctx: Add_modify_drop_column_clausesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_column_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_column_clause?: (ctx: Drop_column_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.modify_column_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModify_column_clauses?: (ctx: Modify_column_clausesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.modify_col_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModify_col_properties?: (ctx: Modify_col_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.modify_col_substitutable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModify_col_substitutable?: (ctx: Modify_col_substitutableContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.add_column_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd_column_clause?: (ctx: Add_column_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.varray_col_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVarray_col_properties?: (ctx: Varray_col_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.varray_storage_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVarray_storage_clause?: (ctx: Varray_storage_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.lob_segname`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLob_segname?: (ctx: Lob_segnameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.lob_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLob_item?: (ctx: Lob_itemContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.lob_storage_parameters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLob_storage_parameters?: (ctx: Lob_storage_parametersContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.lob_storage_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLob_storage_clause?: (ctx: Lob_storage_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.modify_lob_storage_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModify_lob_storage_clause?: (ctx: Modify_lob_storage_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.modify_lob_parameters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModify_lob_parameters?: (ctx: Modify_lob_parametersContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.lob_parameters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLob_parameters?: (ctx: Lob_parametersContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.lob_deduplicate_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLob_deduplicate_clause?: (ctx: Lob_deduplicate_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.lob_compression_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLob_compression_clause?: (ctx: Lob_compression_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.lob_retention_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLob_retention_clause?: (ctx: Lob_retention_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.encryption_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEncryption_spec?: (ctx: Encryption_specContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.tablespace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablespace?: (ctx: TablespaceContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.varray_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVarray_item?: (ctx: Varray_itemContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.column_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_properties?: (ctx: Column_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.column_definition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_definition?: (ctx: Column_definitionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.virtual_column_definition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVirtual_column_definition?: (ctx: Virtual_column_definitionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.autogenerated_sequence_definition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAutogenerated_sequence_definition?: (ctx: Autogenerated_sequence_definitionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.nested_table_col_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNested_table_col_properties?: (ctx: Nested_table_col_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.nested_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNested_item?: (ctx: Nested_itemContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.substitutable_column_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubstitutable_column_clause?: (ctx: Substitutable_column_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.partition_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartition_name?: (ctx: Partition_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.supplemental_logging_props`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSupplemental_logging_props?: (ctx: Supplemental_logging_propsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.object_type_col_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_type_col_properties?: (ctx: Object_type_col_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.constraint_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstraint_clauses?: (ctx: Constraint_clausesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.old_constraint_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOld_constraint_name?: (ctx: Old_constraint_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.new_constraint_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNew_constraint_name?: (ctx: New_constraint_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_constraint_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_constraint_clause?: (ctx: Drop_constraint_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.drop_primary_key_or_unique_or_generic_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_primary_key_or_unique_or_generic_clause?: (ctx: Drop_primary_key_or_unique_or_generic_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.check_constraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCheck_constraint?: (ctx: Check_constraintContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.foreign_key_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForeign_key_clause?: (ctx: Foreign_key_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.references_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReferences_clause?: (ctx: References_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.on_delete_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOn_delete_clause?: (ctx: On_delete_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.anonymous_block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnonymous_block?: (ctx: Anonymous_blockContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.invoker_rights_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInvoker_rights_clause?: (ctx: Invoker_rights_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.call_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCall_spec?: (ctx: Call_specContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.java_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJava_spec?: (ctx: Java_specContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.c_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitC_spec?: (ctx: C_specContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.c_agent_in_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitC_agent_in_clause?: (ctx: C_agent_in_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.c_parameters_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitC_parameters_clause?: (ctx: C_parameters_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.parameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameter?: (ctx: ParameterContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.default_value_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefault_value_part?: (ctx: Default_value_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.seq_of_declare_specs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSeq_of_declare_specs?: (ctx: Seq_of_declare_specsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.declare_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeclare_spec?: (ctx: Declare_specContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.variable_declaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariable_declaration?: (ctx: Variable_declarationContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.subtype_declaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubtype_declaration?: (ctx: Subtype_declarationContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.cursor_declaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCursor_declaration?: (ctx: Cursor_declarationContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.parameter_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameter_spec?: (ctx: Parameter_specContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.exception_declaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitException_declaration?: (ctx: Exception_declarationContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.pragma_declaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPragma_declaration?: (ctx: Pragma_declarationContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.record_type_def`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRecord_type_def?: (ctx: Record_type_defContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.field_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitField_spec?: (ctx: Field_specContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.ref_cursor_type_def`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRef_cursor_type_def?: (ctx: Ref_cursor_type_defContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.type_declaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_declaration?: (ctx: Type_declarationContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.table_type_def`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_type_def?: (ctx: Table_type_defContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.table_indexed_by_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_indexed_by_part?: (ctx: Table_indexed_by_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.varray_type_def`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVarray_type_def?: (ctx: Varray_type_defContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.seq_of_statements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSeq_of_statements?: (ctx: Seq_of_statementsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.label_declaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLabel_declaration?: (ctx: Label_declarationContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.assignment_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignment_statement?: (ctx: Assignment_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.continue_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContinue_statement?: (ctx: Continue_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.exit_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExit_statement?: (ctx: Exit_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.goto_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGoto_statement?: (ctx: Goto_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.if_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIf_statement?: (ctx: If_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.elsif_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElsif_part?: (ctx: Elsif_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.else_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElse_part?: (ctx: Else_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.loop_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoop_statement?: (ctx: Loop_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.cursor_loop_param`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCursor_loop_param?: (ctx: Cursor_loop_paramContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.forall_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForall_statement?: (ctx: Forall_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.bounds_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBounds_clause?: (ctx: Bounds_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.between_bound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBetween_bound?: (ctx: Between_boundContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.lower_bound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLower_bound?: (ctx: Lower_boundContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.upper_bound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpper_bound?: (ctx: Upper_boundContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.null_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNull_statement?: (ctx: Null_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.raise_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRaise_statement?: (ctx: Raise_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.return_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturn_statement?: (ctx: Return_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.function_call`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_call?: (ctx: Function_callContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.procedure_call`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedure_call?: (ctx: Procedure_callContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.pipe_row_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPipe_row_statement?: (ctx: Pipe_row_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBody?: (ctx: BodyContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.exception_handler`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitException_handler?: (ctx: Exception_handlerContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.trigger_block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrigger_block?: (ctx: Trigger_blockContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlock?: (ctx: BlockContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.sql_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSql_statement?: (ctx: Sql_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.execute_immediate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExecute_immediate?: (ctx: Execute_immediateContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.dynamic_returning_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDynamic_returning_clause?: (ctx: Dynamic_returning_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.data_manipulation_language_statements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitData_manipulation_language_statements?: (ctx: Data_manipulation_language_statementsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.cursor_manipulation_statements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCursor_manipulation_statements?: (ctx: Cursor_manipulation_statementsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.close_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClose_statement?: (ctx: Close_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.open_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpen_statement?: (ctx: Open_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.fetch_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFetch_statement?: (ctx: Fetch_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.open_for_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpen_for_statement?: (ctx: Open_for_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.transaction_control_statements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransaction_control_statements?: (ctx: Transaction_control_statementsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.set_transaction_command`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_transaction_command?: (ctx: Set_transaction_commandContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.set_constraint_command`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_constraint_command?: (ctx: Set_constraint_commandContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.commit_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommit_statement?: (ctx: Commit_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.write_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWrite_clause?: (ctx: Write_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.rollback_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRollback_statement?: (ctx: Rollback_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.savepoint_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSavepoint_statement?: (ctx: Savepoint_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.explain_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplain_statement?: (ctx: Explain_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.select_only_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelect_only_statement?: (ctx: Select_only_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.select_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelect_statement?: (ctx: Select_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.subquery_factoring_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubquery_factoring_clause?: (ctx: Subquery_factoring_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.factoring_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFactoring_element?: (ctx: Factoring_elementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.search_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSearch_clause?: (ctx: Search_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.cycle_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCycle_clause?: (ctx: Cycle_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.subquery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubquery?: (ctx: SubqueryContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.subquery_basic_elements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubquery_basic_elements?: (ctx: Subquery_basic_elementsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.subquery_operation_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubquery_operation_part?: (ctx: Subquery_operation_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.query_block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuery_block?: (ctx: Query_blockContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.selected_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelected_list?: (ctx: Selected_listContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.from_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrom_clause?: (ctx: From_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.select_list_elements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelect_list_elements?: (ctx: Select_list_elementsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.table_ref_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_ref_list?: (ctx: Table_ref_listContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.table_ref`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_ref?: (ctx: Table_refContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.table_ref_aux`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_ref_aux?: (ctx: Table_ref_auxContext) => Result;
    /**
     * Visit a parse tree produced by the `table_ref_aux_internal_one`
     * labeled alternative in `PlSqlParser.table_ref_aux_internal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_ref_aux_internal_one?: (ctx: Table_ref_aux_internal_oneContext) => Result;
    /**
     * Visit a parse tree produced by the `table_ref_aux_internal_two`
     * labeled alternative in `PlSqlParser.table_ref_aux_internal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_ref_aux_internal_two?: (ctx: Table_ref_aux_internal_twoContext) => Result;
    /**
     * Visit a parse tree produced by the `table_ref_aux_internal_three`
     * labeled alternative in `PlSqlParser.table_ref_aux_internal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_ref_aux_internal_three?: (ctx: Table_ref_aux_internal_threeContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.join_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoin_clause?: (ctx: Join_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.join_on_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoin_on_part?: (ctx: Join_on_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.join_using_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoin_using_part?: (ctx: Join_using_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.outer_join_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOuter_join_type?: (ctx: Outer_join_typeContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.query_partition_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuery_partition_clause?: (ctx: Query_partition_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.flashback_query_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFlashback_query_clause?: (ctx: Flashback_query_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.pivot_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPivot_clause?: (ctx: Pivot_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.pivot_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPivot_element?: (ctx: Pivot_elementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.pivot_for_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPivot_for_clause?: (ctx: Pivot_for_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.pivot_in_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPivot_in_clause?: (ctx: Pivot_in_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.pivot_in_clause_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPivot_in_clause_element?: (ctx: Pivot_in_clause_elementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.pivot_in_clause_elements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPivot_in_clause_elements?: (ctx: Pivot_in_clause_elementsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.unpivot_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivot_clause?: (ctx: Unpivot_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.unpivot_in_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivot_in_clause?: (ctx: Unpivot_in_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.unpivot_in_elements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivot_in_elements?: (ctx: Unpivot_in_elementsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.hierarchical_query_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHierarchical_query_clause?: (ctx: Hierarchical_query_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.start_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStart_part?: (ctx: Start_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.group_by_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroup_by_clause?: (ctx: Group_by_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.group_by_elements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroup_by_elements?: (ctx: Group_by_elementsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.rollup_cube_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRollup_cube_clause?: (ctx: Rollup_cube_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.grouping_sets_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrouping_sets_clause?: (ctx: Grouping_sets_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.grouping_sets_elements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrouping_sets_elements?: (ctx: Grouping_sets_elementsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.having_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHaving_clause?: (ctx: Having_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.model_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModel_clause?: (ctx: Model_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.cell_reference_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCell_reference_options?: (ctx: Cell_reference_optionsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.return_rows_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturn_rows_clause?: (ctx: Return_rows_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.reference_model`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReference_model?: (ctx: Reference_modelContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.main_model`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMain_model?: (ctx: Main_modelContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.model_column_clauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModel_column_clauses?: (ctx: Model_column_clausesContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.model_column_partition_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModel_column_partition_part?: (ctx: Model_column_partition_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.model_column_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModel_column_list?: (ctx: Model_column_listContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.model_column`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModel_column?: (ctx: Model_columnContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.model_rules_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModel_rules_clause?: (ctx: Model_rules_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.model_rules_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModel_rules_part?: (ctx: Model_rules_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.model_rules_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModel_rules_element?: (ctx: Model_rules_elementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.cell_assignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCell_assignment?: (ctx: Cell_assignmentContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.model_iterate_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModel_iterate_clause?: (ctx: Model_iterate_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.until_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUntil_part?: (ctx: Until_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.order_by_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrder_by_clause?: (ctx: Order_by_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.order_by_elements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrder_by_elements?: (ctx: Order_by_elementsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.offset_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOffset_clause?: (ctx: Offset_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.fetch_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFetch_clause?: (ctx: Fetch_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.for_update_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFor_update_clause?: (ctx: For_update_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.for_update_of_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFor_update_of_part?: (ctx: For_update_of_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.for_update_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFor_update_options?: (ctx: For_update_optionsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.update_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdate_statement?: (ctx: Update_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.update_set_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdate_set_clause?: (ctx: Update_set_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.column_based_update_set_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_based_update_set_clause?: (ctx: Column_based_update_set_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.delete_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDelete_statement?: (ctx: Delete_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.insert_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsert_statement?: (ctx: Insert_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.single_table_insert`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingle_table_insert?: (ctx: Single_table_insertContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.multi_table_insert`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMulti_table_insert?: (ctx: Multi_table_insertContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.multi_table_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMulti_table_element?: (ctx: Multi_table_elementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.conditional_insert_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConditional_insert_clause?: (ctx: Conditional_insert_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.conditional_insert_when_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConditional_insert_when_part?: (ctx: Conditional_insert_when_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.conditional_insert_else_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConditional_insert_else_part?: (ctx: Conditional_insert_else_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.insert_into_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsert_into_clause?: (ctx: Insert_into_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.values_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValues_clause?: (ctx: Values_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.merge_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMerge_statement?: (ctx: Merge_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.merge_update_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMerge_update_clause?: (ctx: Merge_update_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.merge_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMerge_element?: (ctx: Merge_elementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.merge_update_delete_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMerge_update_delete_part?: (ctx: Merge_update_delete_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.merge_insert_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMerge_insert_clause?: (ctx: Merge_insert_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.selected_tableview`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelected_tableview?: (ctx: Selected_tableviewContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.lock_table_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLock_table_statement?: (ctx: Lock_table_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.wait_nowait_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWait_nowait_part?: (ctx: Wait_nowait_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.lock_table_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLock_table_element?: (ctx: Lock_table_elementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.lock_mode`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLock_mode?: (ctx: Lock_modeContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.general_table_ref`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneral_table_ref?: (ctx: General_table_refContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.static_returning_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatic_returning_clause?: (ctx: Static_returning_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.error_logging_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitError_logging_clause?: (ctx: Error_logging_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.error_logging_into_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitError_logging_into_part?: (ctx: Error_logging_into_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.error_logging_reject_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitError_logging_reject_part?: (ctx: Error_logging_reject_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.dml_table_expression_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDml_table_expression_clause?: (ctx: Dml_table_expression_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.table_collection_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_collection_expression?: (ctx: Table_collection_expressionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.subquery_restriction_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubquery_restriction_clause?: (ctx: Subquery_restriction_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.sample_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSample_clause?: (ctx: Sample_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.seed_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSeed_part?: (ctx: Seed_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.condition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCondition?: (ctx: ConditionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.expressions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressions?: (ctx: ExpressionsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.cursor_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCursor_expression?: (ctx: Cursor_expressionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.logical_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogical_expression?: (ctx: Logical_expressionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.unary_logical_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnary_logical_expression?: (ctx: Unary_logical_expressionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.logical_operation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogical_operation?: (ctx: Logical_operationContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.multiset_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiset_expression?: (ctx: Multiset_expressionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.relational_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelational_expression?: (ctx: Relational_expressionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.compound_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompound_expression?: (ctx: Compound_expressionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.relational_operator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelational_operator?: (ctx: Relational_operatorContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.in_elements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIn_elements?: (ctx: In_elementsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.between_elements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBetween_elements?: (ctx: Between_elementsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.concatenation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConcatenation?: (ctx: ConcatenationContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.interval_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterval_expression?: (ctx: Interval_expressionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.model_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModel_expression?: (ctx: Model_expressionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.model_expression_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModel_expression_element?: (ctx: Model_expression_elementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.single_column_for_loop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingle_column_for_loop?: (ctx: Single_column_for_loopContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.multi_column_for_loop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMulti_column_for_loop?: (ctx: Multi_column_for_loopContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.unary_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnary_expression?: (ctx: Unary_expressionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.case_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCase_statement?: (ctx: Case_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.simple_case_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimple_case_statement?: (ctx: Simple_case_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.simple_case_when_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimple_case_when_part?: (ctx: Simple_case_when_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.searched_case_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSearched_case_statement?: (ctx: Searched_case_statementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.searched_case_when_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSearched_case_when_part?: (ctx: Searched_case_when_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.case_else_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCase_else_part?: (ctx: Case_else_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.atom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAtom?: (ctx: AtomContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.quantified_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuantified_expression?: (ctx: Quantified_expressionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.string_function`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitString_function?: (ctx: String_functionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.standard_function`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStandard_function?: (ctx: Standard_functionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteral?: (ctx: LiteralContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.numeric_function_wrapper`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumeric_function_wrapper?: (ctx: Numeric_function_wrapperContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.numeric_function`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumeric_function?: (ctx: Numeric_functionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.other_function`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOther_function?: (ctx: Other_functionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.over_clause_keyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOver_clause_keyword?: (ctx: Over_clause_keywordContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.within_or_over_clause_keyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWithin_or_over_clause_keyword?: (ctx: Within_or_over_clause_keywordContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.standard_prediction_function_keyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStandard_prediction_function_keyword?: (ctx: Standard_prediction_function_keywordContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.over_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOver_clause?: (ctx: Over_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.windowing_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowing_clause?: (ctx: Windowing_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.windowing_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowing_type?: (ctx: Windowing_typeContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.windowing_elements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowing_elements?: (ctx: Windowing_elementsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.using_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUsing_clause?: (ctx: Using_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.using_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUsing_element?: (ctx: Using_elementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.collect_order_by_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCollect_order_by_part?: (ctx: Collect_order_by_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.within_or_over_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWithin_or_over_part?: (ctx: Within_or_over_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.cost_matrix_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCost_matrix_clause?: (ctx: Cost_matrix_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.xml_passing_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_passing_clause?: (ctx: Xml_passing_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.xml_attributes_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_attributes_clause?: (ctx: Xml_attributes_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.xml_namespaces_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_namespaces_clause?: (ctx: Xml_namespaces_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.xml_table_column`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_table_column?: (ctx: Xml_table_columnContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.xml_general_default_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_general_default_part?: (ctx: Xml_general_default_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.xml_multiuse_expression_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_multiuse_expression_element?: (ctx: Xml_multiuse_expression_elementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.xmlroot_param_version_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmlroot_param_version_part?: (ctx: Xmlroot_param_version_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.xmlroot_param_standalone_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmlroot_param_standalone_part?: (ctx: Xmlroot_param_standalone_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.xmlserialize_param_enconding_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmlserialize_param_enconding_part?: (ctx: Xmlserialize_param_enconding_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.xmlserialize_param_version_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmlserialize_param_version_part?: (ctx: Xmlserialize_param_version_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.xmlserialize_param_ident_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmlserialize_param_ident_part?: (ctx: Xmlserialize_param_ident_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.sql_plus_command`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSql_plus_command?: (ctx: Sql_plus_commandContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.whenever_command`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhenever_command?: (ctx: Whenever_commandContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.set_command`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_command?: (ctx: Set_commandContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.partition_extension_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartition_extension_clause?: (ctx: Partition_extension_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.column_alias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_alias?: (ctx: Column_aliasContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.table_alias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_alias?: (ctx: Table_aliasContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.where_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhere_clause?: (ctx: Where_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.into_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInto_clause?: (ctx: Into_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.xml_column_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_column_name?: (ctx: Xml_column_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.cost_class_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCost_class_name?: (ctx: Cost_class_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.attribute_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttribute_name?: (ctx: Attribute_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.savepoint_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSavepoint_name?: (ctx: Savepoint_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.rollback_segment_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRollback_segment_name?: (ctx: Rollback_segment_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.schema_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSchema_name?: (ctx: Schema_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.routine_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoutine_name?: (ctx: Routine_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.package_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPackage_name?: (ctx: Package_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.implementation_type_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImplementation_type_name?: (ctx: Implementation_type_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.parameter_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameter_name?: (ctx: Parameter_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.reference_model_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReference_model_name?: (ctx: Reference_model_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.main_model_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMain_model_name?: (ctx: Main_model_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.container_tableview_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContainer_tableview_name?: (ctx: Container_tableview_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.aggregate_function_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregate_function_name?: (ctx: Aggregate_function_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.query_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuery_name?: (ctx: Query_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.grantee_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrantee_name?: (ctx: Grantee_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.role_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRole_name?: (ctx: Role_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.constraint_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstraint_name?: (ctx: Constraint_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.label_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLabel_name?: (ctx: Label_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.type_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_name?: (ctx: Type_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.sequence_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSequence_name?: (ctx: Sequence_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.exception_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitException_name?: (ctx: Exception_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.function_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_name?: (ctx: Function_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.procedure_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedure_name?: (ctx: Procedure_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.trigger_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrigger_name?: (ctx: Trigger_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.variable_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariable_name?: (ctx: Variable_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.index_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_name?: (ctx: Index_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.cursor_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCursor_name?: (ctx: Cursor_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.record_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRecord_name?: (ctx: Record_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.collection_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCollection_name?: (ctx: Collection_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.link_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLink_name?: (ctx: Link_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.column_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_name?: (ctx: Column_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.tableview_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableview_name?: (ctx: Tableview_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.xmltable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmltable?: (ctx: XmltableContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.char_set_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitChar_set_name?: (ctx: Char_set_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.synonym_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSynonym_name?: (ctx: Synonym_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.schema_object_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSchema_object_name?: (ctx: Schema_object_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.dir_object_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDir_object_name?: (ctx: Dir_object_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.user_object_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUser_object_name?: (ctx: User_object_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.grant_object_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrant_object_name?: (ctx: Grant_object_nameContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.column_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_list?: (ctx: Column_listContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.paren_column_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParen_column_list?: (ctx: Paren_column_listContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.keep_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKeep_clause?: (ctx: Keep_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.function_argument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_argument?: (ctx: Function_argumentContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.function_argument_analytic`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_argument_analytic?: (ctx: Function_argument_analyticContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.function_argument_modeling`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_argument_modeling?: (ctx: Function_argument_modelingContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.respect_or_ignore_nulls`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRespect_or_ignore_nulls?: (ctx: Respect_or_ignore_nullsContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.argument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArgument?: (ctx: ArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.type_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_spec?: (ctx: Type_specContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.datatype`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatatype?: (ctx: DatatypeContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.precision_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecision_part?: (ctx: Precision_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.native_datatype_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNative_datatype_element?: (ctx: Native_datatype_elementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.bind_variable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBind_variable?: (ctx: Bind_variableContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.general_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneral_element?: (ctx: General_elementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.general_element_part`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneral_element_part?: (ctx: General_element_partContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.table_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_element?: (ctx: Table_elementContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.object_privilege`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_privilege?: (ctx: Object_privilegeContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.system_privilege`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSystem_privilege?: (ctx: System_privilegeContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.constant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstant?: (ctx: ConstantContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.numeric`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumeric?: (ctx: NumericContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.numeric_negative`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumeric_negative?: (ctx: Numeric_negativeContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.quoted_string`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuoted_string?: (ctx: Quoted_stringContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifier?: (ctx: IdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.id_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitId_expression?: (ctx: Id_expressionContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.outer_join_sign`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOuter_join_sign?: (ctx: Outer_join_signContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.regular_id`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRegular_id?: (ctx: Regular_idContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.non_reserved_keywords_in_12c`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNon_reserved_keywords_in_12c?: (ctx: Non_reserved_keywords_in_12cContext) => Result;
    /**
     * Visit a parse tree produced by `PlSqlParser.non_reserved_keywords_pre12c`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNon_reserved_keywords_pre12c?: (ctx: Non_reserved_keywords_pre12cContext) => Result;
}

