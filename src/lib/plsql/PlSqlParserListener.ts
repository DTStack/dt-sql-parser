// Generated from /Users/ziv/github.com/dt-sql-parser/src/grammar/plsql/PlSqlParser.g4 by ANTLR 4.12.0

import {ParseTreeListener} from "antlr4";


import { ProgramContext } from "./PlSqlParser";
import { Sql_scriptContext } from "./PlSqlParser";
import { Unit_statementContext } from "./PlSqlParser";
import { Drop_functionContext } from "./PlSqlParser";
import { Alter_functionContext } from "./PlSqlParser";
import { Create_function_bodyContext } from "./PlSqlParser";
import { Parallel_enable_clauseContext } from "./PlSqlParser";
import { Partition_by_clauseContext } from "./PlSqlParser";
import { Result_cache_clauseContext } from "./PlSqlParser";
import { Relies_on_partContext } from "./PlSqlParser";
import { Streaming_clauseContext } from "./PlSqlParser";
import { Drop_packageContext } from "./PlSqlParser";
import { Alter_packageContext } from "./PlSqlParser";
import { Create_packageContext } from "./PlSqlParser";
import { Create_package_bodyContext } from "./PlSqlParser";
import { Package_obj_specContext } from "./PlSqlParser";
import { Procedure_specContext } from "./PlSqlParser";
import { Function_specContext } from "./PlSqlParser";
import { Package_obj_bodyContext } from "./PlSqlParser";
import { Drop_procedureContext } from "./PlSqlParser";
import { Alter_procedureContext } from "./PlSqlParser";
import { Function_bodyContext } from "./PlSqlParser";
import { Procedure_bodyContext } from "./PlSqlParser";
import { Create_procedure_bodyContext } from "./PlSqlParser";
import { Drop_triggerContext } from "./PlSqlParser";
import { Alter_triggerContext } from "./PlSqlParser";
import { Create_triggerContext } from "./PlSqlParser";
import { Trigger_follows_clauseContext } from "./PlSqlParser";
import { Trigger_when_clauseContext } from "./PlSqlParser";
import { Simple_dml_triggerContext } from "./PlSqlParser";
import { For_each_rowContext } from "./PlSqlParser";
import { Compound_dml_triggerContext } from "./PlSqlParser";
import { Non_dml_triggerContext } from "./PlSqlParser";
import { Trigger_bodyContext } from "./PlSqlParser";
import { Routine_clauseContext } from "./PlSqlParser";
import { Compound_trigger_blockContext } from "./PlSqlParser";
import { Timing_point_sectionContext } from "./PlSqlParser";
import { Non_dml_eventContext } from "./PlSqlParser";
import { Dml_event_clauseContext } from "./PlSqlParser";
import { Dml_event_elementContext } from "./PlSqlParser";
import { Dml_event_nested_clauseContext } from "./PlSqlParser";
import { Referencing_clauseContext } from "./PlSqlParser";
import { Referencing_elementContext } from "./PlSqlParser";
import { Drop_typeContext } from "./PlSqlParser";
import { Alter_typeContext } from "./PlSqlParser";
import { Compile_type_clauseContext } from "./PlSqlParser";
import { Replace_type_clauseContext } from "./PlSqlParser";
import { Alter_method_specContext } from "./PlSqlParser";
import { Alter_method_elementContext } from "./PlSqlParser";
import { Alter_attribute_definitionContext } from "./PlSqlParser";
import { Attribute_definitionContext } from "./PlSqlParser";
import { Alter_collection_clausesContext } from "./PlSqlParser";
import { Dependent_handling_clauseContext } from "./PlSqlParser";
import { Dependent_exceptions_partContext } from "./PlSqlParser";
import { Create_typeContext } from "./PlSqlParser";
import { Type_definitionContext } from "./PlSqlParser";
import { Object_type_defContext } from "./PlSqlParser";
import { Object_as_partContext } from "./PlSqlParser";
import { Object_under_partContext } from "./PlSqlParser";
import { Nested_table_type_defContext } from "./PlSqlParser";
import { Sqlj_object_typeContext } from "./PlSqlParser";
import { Type_bodyContext } from "./PlSqlParser";
import { Type_body_elementsContext } from "./PlSqlParser";
import { Map_order_func_declarationContext } from "./PlSqlParser";
import { Subprog_decl_in_typeContext } from "./PlSqlParser";
import { Proc_decl_in_typeContext } from "./PlSqlParser";
import { Func_decl_in_typeContext } from "./PlSqlParser";
import { Constructor_declarationContext } from "./PlSqlParser";
import { Modifier_clauseContext } from "./PlSqlParser";
import { Object_member_specContext } from "./PlSqlParser";
import { Sqlj_object_type_attrContext } from "./PlSqlParser";
import { Element_specContext } from "./PlSqlParser";
import { Element_spec_optionsContext } from "./PlSqlParser";
import { Subprogram_specContext } from "./PlSqlParser";
import { Overriding_subprogram_specContext } from "./PlSqlParser";
import { Overriding_function_specContext } from "./PlSqlParser";
import { Type_procedure_specContext } from "./PlSqlParser";
import { Type_function_specContext } from "./PlSqlParser";
import { Constructor_specContext } from "./PlSqlParser";
import { Map_order_function_specContext } from "./PlSqlParser";
import { Pragma_clauseContext } from "./PlSqlParser";
import { Pragma_elementsContext } from "./PlSqlParser";
import { Type_elements_parameterContext } from "./PlSqlParser";
import { Drop_sequenceContext } from "./PlSqlParser";
import { Alter_sequenceContext } from "./PlSqlParser";
import { Alter_sessionContext } from "./PlSqlParser";
import { Alter_session_set_clauseContext } from "./PlSqlParser";
import { Create_sequenceContext } from "./PlSqlParser";
import { Sequence_specContext } from "./PlSqlParser";
import { Sequence_start_clauseContext } from "./PlSqlParser";
import { Create_indexContext } from "./PlSqlParser";
import { Cluster_index_clauseContext } from "./PlSqlParser";
import { Cluster_nameContext } from "./PlSqlParser";
import { Table_index_clauseContext } from "./PlSqlParser";
import { Bitmap_join_index_clauseContext } from "./PlSqlParser";
import { Index_exprContext } from "./PlSqlParser";
import { Index_propertiesContext } from "./PlSqlParser";
import { Domain_index_clauseContext } from "./PlSqlParser";
import { Local_domain_index_clauseContext } from "./PlSqlParser";
import { Xmlindex_clauseContext } from "./PlSqlParser";
import { Local_xmlindex_clauseContext } from "./PlSqlParser";
import { Global_partitioned_indexContext } from "./PlSqlParser";
import { Index_partitioning_clauseContext } from "./PlSqlParser";
import { Local_partitioned_indexContext } from "./PlSqlParser";
import { On_range_partitioned_tableContext } from "./PlSqlParser";
import { On_list_partitioned_tableContext } from "./PlSqlParser";
import { Partitioned_tableContext } from "./PlSqlParser";
import { On_hash_partitioned_tableContext } from "./PlSqlParser";
import { On_hash_partitioned_clauseContext } from "./PlSqlParser";
import { On_comp_partitioned_tableContext } from "./PlSqlParser";
import { On_comp_partitioned_clauseContext } from "./PlSqlParser";
import { Index_subpartition_clauseContext } from "./PlSqlParser";
import { Index_subpartition_subclauseContext } from "./PlSqlParser";
import { Odci_parametersContext } from "./PlSqlParser";
import { IndextypeContext } from "./PlSqlParser";
import { Alter_indexContext } from "./PlSqlParser";
import { Alter_index_ops_set1Context } from "./PlSqlParser";
import { Alter_index_ops_set2Context } from "./PlSqlParser";
import { Visible_or_invisibleContext } from "./PlSqlParser";
import { Monitoring_nomonitoringContext } from "./PlSqlParser";
import { Rebuild_clauseContext } from "./PlSqlParser";
import { Alter_index_partitioningContext } from "./PlSqlParser";
import { Modify_index_default_attrsContext } from "./PlSqlParser";
import { Add_hash_index_partitionContext } from "./PlSqlParser";
import { Coalesce_index_partitionContext } from "./PlSqlParser";
import { Modify_index_partitionContext } from "./PlSqlParser";
import { Modify_index_partitions_opsContext } from "./PlSqlParser";
import { Rename_index_partitionContext } from "./PlSqlParser";
import { Drop_index_partitionContext } from "./PlSqlParser";
import { Split_index_partitionContext } from "./PlSqlParser";
import { Index_partition_descriptionContext } from "./PlSqlParser";
import { Modify_index_subpartitionContext } from "./PlSqlParser";
import { Partition_name_oldContext } from "./PlSqlParser";
import { New_partition_nameContext } from "./PlSqlParser";
import { New_index_nameContext } from "./PlSqlParser";
import { Create_userContext } from "./PlSqlParser";
import { Alter_userContext } from "./PlSqlParser";
import { Alter_identified_byContext } from "./PlSqlParser";
import { Identified_byContext } from "./PlSqlParser";
import { Identified_other_clauseContext } from "./PlSqlParser";
import { User_tablespace_clauseContext } from "./PlSqlParser";
import { Quota_clauseContext } from "./PlSqlParser";
import { Profile_clauseContext } from "./PlSqlParser";
import { Role_clauseContext } from "./PlSqlParser";
import { User_default_role_clauseContext } from "./PlSqlParser";
import { Password_expire_clauseContext } from "./PlSqlParser";
import { User_lock_clauseContext } from "./PlSqlParser";
import { User_editions_clauseContext } from "./PlSqlParser";
import { Alter_user_editions_clauseContext } from "./PlSqlParser";
import { Proxy_clauseContext } from "./PlSqlParser";
import { Container_namesContext } from "./PlSqlParser";
import { Set_container_dataContext } from "./PlSqlParser";
import { Add_rem_container_dataContext } from "./PlSqlParser";
import { Container_data_clauseContext } from "./PlSqlParser";
import { AnalyzeContext } from "./PlSqlParser";
import { Partition_extention_clauseContext } from "./PlSqlParser";
import { Validation_clausesContext } from "./PlSqlParser";
import { Online_or_offlineContext } from "./PlSqlParser";
import { Into_clause1Context } from "./PlSqlParser";
import { Partition_key_valueContext } from "./PlSqlParser";
import { Subpartition_key_valueContext } from "./PlSqlParser";
import { Associate_statisticsContext } from "./PlSqlParser";
import { Column_associationContext } from "./PlSqlParser";
import { Function_associationContext } from "./PlSqlParser";
import { Indextype_nameContext } from "./PlSqlParser";
import { Using_statistics_typeContext } from "./PlSqlParser";
import { Statistics_type_nameContext } from "./PlSqlParser";
import { Default_cost_clauseContext } from "./PlSqlParser";
import { Cpu_costContext } from "./PlSqlParser";
import { Io_costContext } from "./PlSqlParser";
import { Network_costContext } from "./PlSqlParser";
import { Default_selectivity_clauseContext } from "./PlSqlParser";
import { Default_selectivityContext } from "./PlSqlParser";
import { Storage_table_clauseContext } from "./PlSqlParser";
import { Unified_auditingContext } from "./PlSqlParser";
import { Policy_nameContext } from "./PlSqlParser";
import { Audit_traditionalContext } from "./PlSqlParser";
import { Audit_direct_pathContext } from "./PlSqlParser";
import { Audit_container_clauseContext } from "./PlSqlParser";
import { Audit_operation_clauseContext } from "./PlSqlParser";
import { Auditing_by_clauseContext } from "./PlSqlParser";
import { Audit_userContext } from "./PlSqlParser";
import { Audit_schema_object_clauseContext } from "./PlSqlParser";
import { Sql_operationContext } from "./PlSqlParser";
import { Auditing_on_clauseContext } from "./PlSqlParser";
import { Model_nameContext } from "./PlSqlParser";
import { Object_nameContext } from "./PlSqlParser";
import { Profile_nameContext } from "./PlSqlParser";
import { Sql_statement_shortcutContext } from "./PlSqlParser";
import { Drop_indexContext } from "./PlSqlParser";
import { Rename_objectContext } from "./PlSqlParser";
import { Grant_statementContext } from "./PlSqlParser";
import { Container_clauseContext } from "./PlSqlParser";
import { Create_directoryContext } from "./PlSqlParser";
import { Directory_nameContext } from "./PlSqlParser";
import { Directory_pathContext } from "./PlSqlParser";
import { Alter_libraryContext } from "./PlSqlParser";
import { Library_editionableContext } from "./PlSqlParser";
import { Library_debugContext } from "./PlSqlParser";
import { Compiler_parameters_clauseContext } from "./PlSqlParser";
import { Parameter_valueContext } from "./PlSqlParser";
import { Library_nameContext } from "./PlSqlParser";
import { Alter_viewContext } from "./PlSqlParser";
import { Alter_view_editionableContext } from "./PlSqlParser";
import { Create_viewContext } from "./PlSqlParser";
import { View_optionsContext } from "./PlSqlParser";
import { View_alias_constraintContext } from "./PlSqlParser";
import { Object_view_clauseContext } from "./PlSqlParser";
import { Inline_constraintContext } from "./PlSqlParser";
import { Inline_ref_constraintContext } from "./PlSqlParser";
import { Out_of_line_ref_constraintContext } from "./PlSqlParser";
import { Out_of_line_constraintContext } from "./PlSqlParser";
import { Constraint_stateContext } from "./PlSqlParser";
import { Alter_tablespaceContext } from "./PlSqlParser";
import { Datafile_tempfile_clausesContext } from "./PlSqlParser";
import { Tablespace_logging_clausesContext } from "./PlSqlParser";
import { Tablespace_group_clauseContext } from "./PlSqlParser";
import { Tablespace_group_nameContext } from "./PlSqlParser";
import { Tablespace_state_clausesContext } from "./PlSqlParser";
import { Flashback_mode_clauseContext } from "./PlSqlParser";
import { New_tablespace_nameContext } from "./PlSqlParser";
import { Create_tablespaceContext } from "./PlSqlParser";
import { Permanent_tablespace_clauseContext } from "./PlSqlParser";
import { Tablespace_encryption_specContext } from "./PlSqlParser";
import { Logging_clauseContext } from "./PlSqlParser";
import { Extent_management_clauseContext } from "./PlSqlParser";
import { Segment_management_clauseContext } from "./PlSqlParser";
import { Temporary_tablespace_clauseContext } from "./PlSqlParser";
import { Undo_tablespace_clauseContext } from "./PlSqlParser";
import { Tablespace_retention_clauseContext } from "./PlSqlParser";
import { Datafile_specificationContext } from "./PlSqlParser";
import { Tempfile_specificationContext } from "./PlSqlParser";
import { Datafile_tempfile_specContext } from "./PlSqlParser";
import { Redo_log_file_specContext } from "./PlSqlParser";
import { Autoextend_clauseContext } from "./PlSqlParser";
import { Maxsize_clauseContext } from "./PlSqlParser";
import { Build_clauseContext } from "./PlSqlParser";
import { Parallel_clauseContext } from "./PlSqlParser";
import { Alter_materialized_viewContext } from "./PlSqlParser";
import { Alter_mv_option1Context } from "./PlSqlParser";
import { Alter_mv_refreshContext } from "./PlSqlParser";
import { Rollback_segmentContext } from "./PlSqlParser";
import { Modify_mv_column_clauseContext } from "./PlSqlParser";
import { Alter_materialized_view_logContext } from "./PlSqlParser";
import { Add_mv_log_column_clauseContext } from "./PlSqlParser";
import { Move_mv_log_clauseContext } from "./PlSqlParser";
import { Mv_log_augmentationContext } from "./PlSqlParser";
import { Datetime_exprContext } from "./PlSqlParser";
import { Interval_exprContext } from "./PlSqlParser";
import { Synchronous_or_asynchronousContext } from "./PlSqlParser";
import { Including_or_excludingContext } from "./PlSqlParser";
import { Create_materialized_view_logContext } from "./PlSqlParser";
import { New_values_clauseContext } from "./PlSqlParser";
import { Mv_log_purge_clauseContext } from "./PlSqlParser";
import { Create_materialized_viewContext } from "./PlSqlParser";
import { Create_mv_refreshContext } from "./PlSqlParser";
import { Create_contextContext } from "./PlSqlParser";
import { Oracle_namespaceContext } from "./PlSqlParser";
import { Create_clusterContext } from "./PlSqlParser";
import { Create_tableContext } from "./PlSqlParser";
import { Xmltype_tableContext } from "./PlSqlParser";
import { Xmltype_virtual_columnsContext } from "./PlSqlParser";
import { Xmltype_column_propertiesContext } from "./PlSqlParser";
import { Xmltype_storageContext } from "./PlSqlParser";
import { Xmlschema_specContext } from "./PlSqlParser";
import { Object_tableContext } from "./PlSqlParser";
import { Oid_index_clauseContext } from "./PlSqlParser";
import { Oid_clauseContext } from "./PlSqlParser";
import { Object_propertiesContext } from "./PlSqlParser";
import { Object_table_substitutionContext } from "./PlSqlParser";
import { Relational_tableContext } from "./PlSqlParser";
import { Relational_propertyContext } from "./PlSqlParser";
import { Table_partitioning_clausesContext } from "./PlSqlParser";
import { Range_partitionsContext } from "./PlSqlParser";
import { List_partitionsContext } from "./PlSqlParser";
import { Hash_partitionsContext } from "./PlSqlParser";
import { Individual_hash_partitionsContext } from "./PlSqlParser";
import { Hash_partitions_by_quantityContext } from "./PlSqlParser";
import { Hash_partition_quantityContext } from "./PlSqlParser";
import { Composite_range_partitionsContext } from "./PlSqlParser";
import { Composite_list_partitionsContext } from "./PlSqlParser";
import { Composite_hash_partitionsContext } from "./PlSqlParser";
import { Reference_partitioningContext } from "./PlSqlParser";
import { Reference_partition_descContext } from "./PlSqlParser";
import { System_partitioningContext } from "./PlSqlParser";
import { Range_partition_descContext } from "./PlSqlParser";
import { List_partition_descContext } from "./PlSqlParser";
import { Subpartition_templateContext } from "./PlSqlParser";
import { Hash_subpartition_quantityContext } from "./PlSqlParser";
import { Subpartition_by_rangeContext } from "./PlSqlParser";
import { Subpartition_by_listContext } from "./PlSqlParser";
import { Subpartition_by_hashContext } from "./PlSqlParser";
import { Subpartition_nameContext } from "./PlSqlParser";
import { Range_subpartition_descContext } from "./PlSqlParser";
import { List_subpartition_descContext } from "./PlSqlParser";
import { Individual_hash_subpartsContext } from "./PlSqlParser";
import { Hash_subparts_by_quantityContext } from "./PlSqlParser";
import { Range_values_clauseContext } from "./PlSqlParser";
import { List_values_clauseContext } from "./PlSqlParser";
import { Table_partition_descriptionContext } from "./PlSqlParser";
import { Partitioning_storage_clauseContext } from "./PlSqlParser";
import { Lob_partitioning_storageContext } from "./PlSqlParser";
import { Datatype_null_enableContext } from "./PlSqlParser";
import { Size_clauseContext } from "./PlSqlParser";
import { Table_compressionContext } from "./PlSqlParser";
import { Physical_attributes_clauseContext } from "./PlSqlParser";
import { Storage_clauseContext } from "./PlSqlParser";
import { Deferred_segment_creationContext } from "./PlSqlParser";
import { Segment_attributes_clauseContext } from "./PlSqlParser";
import { Physical_propertiesContext } from "./PlSqlParser";
import { Row_movement_clauseContext } from "./PlSqlParser";
import { Flashback_archive_clauseContext } from "./PlSqlParser";
import { Log_grpContext } from "./PlSqlParser";
import { Supplemental_table_loggingContext } from "./PlSqlParser";
import { Supplemental_log_grp_clauseContext } from "./PlSqlParser";
import { Supplemental_id_key_clauseContext } from "./PlSqlParser";
import { Allocate_extent_clauseContext } from "./PlSqlParser";
import { Deallocate_unused_clauseContext } from "./PlSqlParser";
import { Shrink_clauseContext } from "./PlSqlParser";
import { Records_per_block_clauseContext } from "./PlSqlParser";
import { Upgrade_table_clauseContext } from "./PlSqlParser";
import { Drop_tableContext } from "./PlSqlParser";
import { Drop_viewContext } from "./PlSqlParser";
import { Comment_on_columnContext } from "./PlSqlParser";
import { Enable_or_disableContext } from "./PlSqlParser";
import { Allow_or_disallowContext } from "./PlSqlParser";
import { Create_synonymContext } from "./PlSqlParser";
import { Comment_on_tableContext } from "./PlSqlParser";
import { Alter_clusterContext } from "./PlSqlParser";
import { Cache_or_nocacheContext } from "./PlSqlParser";
import { Database_nameContext } from "./PlSqlParser";
import { Alter_databaseContext } from "./PlSqlParser";
import { Startup_clausesContext } from "./PlSqlParser";
import { Resetlogs_or_noresetlogsContext } from "./PlSqlParser";
import { Upgrade_or_downgradeContext } from "./PlSqlParser";
import { Recovery_clausesContext } from "./PlSqlParser";
import { Begin_or_endContext } from "./PlSqlParser";
import { General_recoveryContext } from "./PlSqlParser";
import { Full_database_recoveryContext } from "./PlSqlParser";
import { Partial_database_recoveryContext } from "./PlSqlParser";
import { Partial_database_recovery_10gContext } from "./PlSqlParser";
import { Managed_standby_recoveryContext } from "./PlSqlParser";
import { Db_nameContext } from "./PlSqlParser";
import { Database_file_clausesContext } from "./PlSqlParser";
import { Create_datafile_clauseContext } from "./PlSqlParser";
import { Alter_datafile_clauseContext } from "./PlSqlParser";
import { Alter_tempfile_clauseContext } from "./PlSqlParser";
import { Logfile_clausesContext } from "./PlSqlParser";
import { Add_logfile_clausesContext } from "./PlSqlParser";
import { Log_file_groupContext } from "./PlSqlParser";
import { Drop_logfile_clausesContext } from "./PlSqlParser";
import { Switch_logfile_clauseContext } from "./PlSqlParser";
import { Supplemental_db_loggingContext } from "./PlSqlParser";
import { Add_or_dropContext } from "./PlSqlParser";
import { Supplemental_plsql_clauseContext } from "./PlSqlParser";
import { Logfile_descriptorContext } from "./PlSqlParser";
import { Controlfile_clausesContext } from "./PlSqlParser";
import { Trace_file_clauseContext } from "./PlSqlParser";
import { Standby_database_clausesContext } from "./PlSqlParser";
import { Activate_standby_db_clauseContext } from "./PlSqlParser";
import { Maximize_standby_db_clauseContext } from "./PlSqlParser";
import { Register_logfile_clauseContext } from "./PlSqlParser";
import { Commit_switchover_clauseContext } from "./PlSqlParser";
import { Start_standby_clauseContext } from "./PlSqlParser";
import { Stop_standby_clauseContext } from "./PlSqlParser";
import { Convert_database_clauseContext } from "./PlSqlParser";
import { Default_settings_clauseContext } from "./PlSqlParser";
import { Set_time_zone_clauseContext } from "./PlSqlParser";
import { Instance_clausesContext } from "./PlSqlParser";
import { Security_clauseContext } from "./PlSqlParser";
import { DomainContext } from "./PlSqlParser";
import { DatabaseContext } from "./PlSqlParser";
import { Edition_nameContext } from "./PlSqlParser";
import { FilenumberContext } from "./PlSqlParser";
import { FilenameContext } from "./PlSqlParser";
import { Alter_tableContext } from "./PlSqlParser";
import { Alter_table_propertiesContext } from "./PlSqlParser";
import { Alter_table_properties_1Context } from "./PlSqlParser";
import { Alter_iot_clausesContext } from "./PlSqlParser";
import { Alter_mapping_table_clauseContext } from "./PlSqlParser";
import { Alter_overflow_clauseContext } from "./PlSqlParser";
import { Add_overflow_clauseContext } from "./PlSqlParser";
import { Enable_disable_clauseContext } from "./PlSqlParser";
import { Using_index_clauseContext } from "./PlSqlParser";
import { Index_attributesContext } from "./PlSqlParser";
import { Sort_or_nosortContext } from "./PlSqlParser";
import { Exceptions_clauseContext } from "./PlSqlParser";
import { Move_table_clauseContext } from "./PlSqlParser";
import { Index_org_table_clauseContext } from "./PlSqlParser";
import { Mapping_table_clauseContext } from "./PlSqlParser";
import { Key_compressionContext } from "./PlSqlParser";
import { Index_org_overflow_clauseContext } from "./PlSqlParser";
import { Column_clausesContext } from "./PlSqlParser";
import { Modify_collection_retrievalContext } from "./PlSqlParser";
import { Collection_itemContext } from "./PlSqlParser";
import { Rename_column_clauseContext } from "./PlSqlParser";
import { Old_column_nameContext } from "./PlSqlParser";
import { New_column_nameContext } from "./PlSqlParser";
import { Add_modify_drop_column_clausesContext } from "./PlSqlParser";
import { Drop_column_clauseContext } from "./PlSqlParser";
import { Modify_column_clausesContext } from "./PlSqlParser";
import { Modify_col_propertiesContext } from "./PlSqlParser";
import { Modify_col_substitutableContext } from "./PlSqlParser";
import { Add_column_clauseContext } from "./PlSqlParser";
import { Alter_varray_col_propertiesContext } from "./PlSqlParser";
import { Varray_col_propertiesContext } from "./PlSqlParser";
import { Varray_storage_clauseContext } from "./PlSqlParser";
import { Lob_segnameContext } from "./PlSqlParser";
import { Lob_itemContext } from "./PlSqlParser";
import { Lob_storage_parametersContext } from "./PlSqlParser";
import { Lob_storage_clauseContext } from "./PlSqlParser";
import { Modify_lob_storage_clauseContext } from "./PlSqlParser";
import { Modify_lob_parametersContext } from "./PlSqlParser";
import { Lob_parametersContext } from "./PlSqlParser";
import { Lob_deduplicate_clauseContext } from "./PlSqlParser";
import { Lob_compression_clauseContext } from "./PlSqlParser";
import { Lob_retention_clauseContext } from "./PlSqlParser";
import { Encryption_specContext } from "./PlSqlParser";
import { TablespaceContext } from "./PlSqlParser";
import { Varray_itemContext } from "./PlSqlParser";
import { Column_propertiesContext } from "./PlSqlParser";
import { Period_definitionContext } from "./PlSqlParser";
import { Start_time_columnContext } from "./PlSqlParser";
import { End_time_columnContext } from "./PlSqlParser";
import { Column_definitionContext } from "./PlSqlParser";
import { Virtual_column_definitionContext } from "./PlSqlParser";
import { Autogenerated_sequence_definitionContext } from "./PlSqlParser";
import { Out_of_line_part_storageContext } from "./PlSqlParser";
import { Nested_table_col_propertiesContext } from "./PlSqlParser";
import { Nested_itemContext } from "./PlSqlParser";
import { Substitutable_column_clauseContext } from "./PlSqlParser";
import { Partition_nameContext } from "./PlSqlParser";
import { Supplemental_logging_propsContext } from "./PlSqlParser";
import { Column_or_attributeContext } from "./PlSqlParser";
import { Object_type_col_propertiesContext } from "./PlSqlParser";
import { Constraint_clausesContext } from "./PlSqlParser";
import { Old_constraint_nameContext } from "./PlSqlParser";
import { New_constraint_nameContext } from "./PlSqlParser";
import { Drop_constraint_clauseContext } from "./PlSqlParser";
import { Drop_primary_key_or_unique_or_generic_clauseContext } from "./PlSqlParser";
import { Add_constraintContext } from "./PlSqlParser";
import { Add_constraint_clauseContext } from "./PlSqlParser";
import { Check_constraintContext } from "./PlSqlParser";
import { Drop_constraintContext } from "./PlSqlParser";
import { Enable_constraintContext } from "./PlSqlParser";
import { Disable_constraintContext } from "./PlSqlParser";
import { Foreign_key_clauseContext } from "./PlSqlParser";
import { References_clauseContext } from "./PlSqlParser";
import { On_delete_clauseContext } from "./PlSqlParser";
import { Unique_key_clauseContext } from "./PlSqlParser";
import { Primary_key_clauseContext } from "./PlSqlParser";
import { Anonymous_blockContext } from "./PlSqlParser";
import { Invoker_rights_clauseContext } from "./PlSqlParser";
import { Call_specContext } from "./PlSqlParser";
import { Java_specContext } from "./PlSqlParser";
import { C_specContext } from "./PlSqlParser";
import { C_agent_in_clauseContext } from "./PlSqlParser";
import { C_parameters_clauseContext } from "./PlSqlParser";
import { ParameterContext } from "./PlSqlParser";
import { Default_value_partContext } from "./PlSqlParser";
import { Seq_of_declare_specsContext } from "./PlSqlParser";
import { Declare_specContext } from "./PlSqlParser";
import { Variable_declarationContext } from "./PlSqlParser";
import { Subtype_declarationContext } from "./PlSqlParser";
import { Cursor_declarationContext } from "./PlSqlParser";
import { Parameter_specContext } from "./PlSqlParser";
import { Exception_declarationContext } from "./PlSqlParser";
import { Pragma_declarationContext } from "./PlSqlParser";
import { Record_type_defContext } from "./PlSqlParser";
import { Field_specContext } from "./PlSqlParser";
import { Ref_cursor_type_defContext } from "./PlSqlParser";
import { Type_declarationContext } from "./PlSqlParser";
import { Table_type_defContext } from "./PlSqlParser";
import { Table_indexed_by_partContext } from "./PlSqlParser";
import { Varray_type_defContext } from "./PlSqlParser";
import { Seq_of_statementsContext } from "./PlSqlParser";
import { Label_declarationContext } from "./PlSqlParser";
import { StatementContext } from "./PlSqlParser";
import { Swallow_to_semiContext } from "./PlSqlParser";
import { Assignment_statementContext } from "./PlSqlParser";
import { Continue_statementContext } from "./PlSqlParser";
import { Exit_statementContext } from "./PlSqlParser";
import { Goto_statementContext } from "./PlSqlParser";
import { If_statementContext } from "./PlSqlParser";
import { Elsif_partContext } from "./PlSqlParser";
import { Else_partContext } from "./PlSqlParser";
import { Loop_statementContext } from "./PlSqlParser";
import { Cursor_loop_paramContext } from "./PlSqlParser";
import { Forall_statementContext } from "./PlSqlParser";
import { Bounds_clauseContext } from "./PlSqlParser";
import { Between_boundContext } from "./PlSqlParser";
import { Lower_boundContext } from "./PlSqlParser";
import { Upper_boundContext } from "./PlSqlParser";
import { Null_statementContext } from "./PlSqlParser";
import { Raise_statementContext } from "./PlSqlParser";
import { Return_statementContext } from "./PlSqlParser";
import { Function_callContext } from "./PlSqlParser";
import { Procedure_callContext } from "./PlSqlParser";
import { Pipe_row_statementContext } from "./PlSqlParser";
import { BodyContext } from "./PlSqlParser";
import { Exception_handlerContext } from "./PlSqlParser";
import { Trigger_blockContext } from "./PlSqlParser";
import { BlockContext } from "./PlSqlParser";
import { Sql_statementContext } from "./PlSqlParser";
import { Execute_immediateContext } from "./PlSqlParser";
import { Dynamic_returning_clauseContext } from "./PlSqlParser";
import { Data_manipulation_language_statementsContext } from "./PlSqlParser";
import { Cursor_manipulation_statementsContext } from "./PlSqlParser";
import { Close_statementContext } from "./PlSqlParser";
import { Open_statementContext } from "./PlSqlParser";
import { Fetch_statementContext } from "./PlSqlParser";
import { Open_for_statementContext } from "./PlSqlParser";
import { Transaction_control_statementsContext } from "./PlSqlParser";
import { Set_transaction_commandContext } from "./PlSqlParser";
import { Set_constraint_commandContext } from "./PlSqlParser";
import { Commit_statementContext } from "./PlSqlParser";
import { Write_clauseContext } from "./PlSqlParser";
import { Rollback_statementContext } from "./PlSqlParser";
import { Savepoint_statementContext } from "./PlSqlParser";
import { Explain_statementContext } from "./PlSqlParser";
import { Select_only_statementContext } from "./PlSqlParser";
import { Select_statementContext } from "./PlSqlParser";
import { Subquery_factoring_clauseContext } from "./PlSqlParser";
import { Factoring_elementContext } from "./PlSqlParser";
import { Search_clauseContext } from "./PlSqlParser";
import { Cycle_clauseContext } from "./PlSqlParser";
import { SubqueryContext } from "./PlSqlParser";
import { Subquery_basic_elementsContext } from "./PlSqlParser";
import { Subquery_operation_partContext } from "./PlSqlParser";
import { Query_blockContext } from "./PlSqlParser";
import { Selected_listContext } from "./PlSqlParser";
import { From_clauseContext } from "./PlSqlParser";
import { Select_list_elementsContext } from "./PlSqlParser";
import { Table_ref_listContext } from "./PlSqlParser";
import { Table_refContext } from "./PlSqlParser";
import { Table_ref_auxContext } from "./PlSqlParser";
import { Table_ref_aux_internal_oneContext } from "./PlSqlParser";
import { Table_ref_aux_internal_twoContext } from "./PlSqlParser";
import { Table_ref_aux_internal_threeContext } from "./PlSqlParser";
import { Join_clauseContext } from "./PlSqlParser";
import { Join_on_partContext } from "./PlSqlParser";
import { Join_using_partContext } from "./PlSqlParser";
import { Outer_join_typeContext } from "./PlSqlParser";
import { Query_partition_clauseContext } from "./PlSqlParser";
import { Flashback_query_clauseContext } from "./PlSqlParser";
import { Pivot_clauseContext } from "./PlSqlParser";
import { Pivot_elementContext } from "./PlSqlParser";
import { Pivot_for_clauseContext } from "./PlSqlParser";
import { Pivot_in_clauseContext } from "./PlSqlParser";
import { Pivot_in_clause_elementContext } from "./PlSqlParser";
import { Pivot_in_clause_elementsContext } from "./PlSqlParser";
import { Unpivot_clauseContext } from "./PlSqlParser";
import { Unpivot_in_clauseContext } from "./PlSqlParser";
import { Unpivot_in_elementsContext } from "./PlSqlParser";
import { Hierarchical_query_clauseContext } from "./PlSqlParser";
import { Start_partContext } from "./PlSqlParser";
import { Group_by_clauseContext } from "./PlSqlParser";
import { Group_by_elementsContext } from "./PlSqlParser";
import { Rollup_cube_clauseContext } from "./PlSqlParser";
import { Grouping_sets_clauseContext } from "./PlSqlParser";
import { Grouping_sets_elementsContext } from "./PlSqlParser";
import { Having_clauseContext } from "./PlSqlParser";
import { Model_clauseContext } from "./PlSqlParser";
import { Cell_reference_optionsContext } from "./PlSqlParser";
import { Return_rows_clauseContext } from "./PlSqlParser";
import { Reference_modelContext } from "./PlSqlParser";
import { Main_modelContext } from "./PlSqlParser";
import { Model_column_clausesContext } from "./PlSqlParser";
import { Model_column_partition_partContext } from "./PlSqlParser";
import { Model_column_listContext } from "./PlSqlParser";
import { Model_columnContext } from "./PlSqlParser";
import { Model_rules_clauseContext } from "./PlSqlParser";
import { Model_rules_partContext } from "./PlSqlParser";
import { Model_rules_elementContext } from "./PlSqlParser";
import { Cell_assignmentContext } from "./PlSqlParser";
import { Model_iterate_clauseContext } from "./PlSqlParser";
import { Until_partContext } from "./PlSqlParser";
import { Order_by_clauseContext } from "./PlSqlParser";
import { Order_by_elementsContext } from "./PlSqlParser";
import { Offset_clauseContext } from "./PlSqlParser";
import { Fetch_clauseContext } from "./PlSqlParser";
import { For_update_clauseContext } from "./PlSqlParser";
import { For_update_of_partContext } from "./PlSqlParser";
import { For_update_optionsContext } from "./PlSqlParser";
import { Update_statementContext } from "./PlSqlParser";
import { Update_set_clauseContext } from "./PlSqlParser";
import { Column_based_update_set_clauseContext } from "./PlSqlParser";
import { Delete_statementContext } from "./PlSqlParser";
import { Insert_statementContext } from "./PlSqlParser";
import { Single_table_insertContext } from "./PlSqlParser";
import { Multi_table_insertContext } from "./PlSqlParser";
import { Multi_table_elementContext } from "./PlSqlParser";
import { Conditional_insert_clauseContext } from "./PlSqlParser";
import { Conditional_insert_when_partContext } from "./PlSqlParser";
import { Conditional_insert_else_partContext } from "./PlSqlParser";
import { Insert_into_clauseContext } from "./PlSqlParser";
import { Values_clauseContext } from "./PlSqlParser";
import { Merge_statementContext } from "./PlSqlParser";
import { Merge_update_clauseContext } from "./PlSqlParser";
import { Merge_elementContext } from "./PlSqlParser";
import { Merge_update_delete_partContext } from "./PlSqlParser";
import { Merge_insert_clauseContext } from "./PlSqlParser";
import { Selected_tableviewContext } from "./PlSqlParser";
import { Lock_table_statementContext } from "./PlSqlParser";
import { Wait_nowait_partContext } from "./PlSqlParser";
import { Lock_table_elementContext } from "./PlSqlParser";
import { Lock_modeContext } from "./PlSqlParser";
import { General_table_refContext } from "./PlSqlParser";
import { Static_returning_clauseContext } from "./PlSqlParser";
import { Error_logging_clauseContext } from "./PlSqlParser";
import { Error_logging_into_partContext } from "./PlSqlParser";
import { Error_logging_reject_partContext } from "./PlSqlParser";
import { Dml_table_expression_clauseContext } from "./PlSqlParser";
import { Table_collection_expressionContext } from "./PlSqlParser";
import { Subquery_restriction_clauseContext } from "./PlSqlParser";
import { Sample_clauseContext } from "./PlSqlParser";
import { Seed_partContext } from "./PlSqlParser";
import { ConditionContext } from "./PlSqlParser";
import { ExpressionsContext } from "./PlSqlParser";
import { ExpressionContext } from "./PlSqlParser";
import { Cursor_expressionContext } from "./PlSqlParser";
import { Logical_expressionContext } from "./PlSqlParser";
import { Unary_logical_expressionContext } from "./PlSqlParser";
import { Logical_operationContext } from "./PlSqlParser";
import { Multiset_expressionContext } from "./PlSqlParser";
import { Relational_expressionContext } from "./PlSqlParser";
import { Compound_expressionContext } from "./PlSqlParser";
import { Relational_operatorContext } from "./PlSqlParser";
import { In_elementsContext } from "./PlSqlParser";
import { Between_elementsContext } from "./PlSqlParser";
import { ConcatenationContext } from "./PlSqlParser";
import { Interval_expressionContext } from "./PlSqlParser";
import { Model_expressionContext } from "./PlSqlParser";
import { Model_expression_elementContext } from "./PlSqlParser";
import { Single_column_for_loopContext } from "./PlSqlParser";
import { Multi_column_for_loopContext } from "./PlSqlParser";
import { Unary_expressionContext } from "./PlSqlParser";
import { Case_statementContext } from "./PlSqlParser";
import { Simple_case_statementContext } from "./PlSqlParser";
import { Simple_case_when_partContext } from "./PlSqlParser";
import { Searched_case_statementContext } from "./PlSqlParser";
import { Searched_case_when_partContext } from "./PlSqlParser";
import { Case_else_partContext } from "./PlSqlParser";
import { AtomContext } from "./PlSqlParser";
import { Quantified_expressionContext } from "./PlSqlParser";
import { String_functionContext } from "./PlSqlParser";
import { Standard_functionContext } from "./PlSqlParser";
import { LiteralContext } from "./PlSqlParser";
import { Numeric_function_wrapperContext } from "./PlSqlParser";
import { Numeric_functionContext } from "./PlSqlParser";
import { Other_functionContext } from "./PlSqlParser";
import { Over_clause_keywordContext } from "./PlSqlParser";
import { Within_or_over_clause_keywordContext } from "./PlSqlParser";
import { Standard_prediction_function_keywordContext } from "./PlSqlParser";
import { Over_clauseContext } from "./PlSqlParser";
import { Windowing_clauseContext } from "./PlSqlParser";
import { Windowing_typeContext } from "./PlSqlParser";
import { Windowing_elementsContext } from "./PlSqlParser";
import { Using_clauseContext } from "./PlSqlParser";
import { Using_elementContext } from "./PlSqlParser";
import { Collect_order_by_partContext } from "./PlSqlParser";
import { Within_or_over_partContext } from "./PlSqlParser";
import { Cost_matrix_clauseContext } from "./PlSqlParser";
import { Xml_passing_clauseContext } from "./PlSqlParser";
import { Xml_attributes_clauseContext } from "./PlSqlParser";
import { Xml_namespaces_clauseContext } from "./PlSqlParser";
import { Xml_table_columnContext } from "./PlSqlParser";
import { Xml_general_default_partContext } from "./PlSqlParser";
import { Xml_multiuse_expression_elementContext } from "./PlSqlParser";
import { Xmlroot_param_version_partContext } from "./PlSqlParser";
import { Xmlroot_param_standalone_partContext } from "./PlSqlParser";
import { Xmlserialize_param_enconding_partContext } from "./PlSqlParser";
import { Xmlserialize_param_version_partContext } from "./PlSqlParser";
import { Xmlserialize_param_ident_partContext } from "./PlSqlParser";
import { Sql_plus_commandContext } from "./PlSqlParser";
import { Whenever_commandContext } from "./PlSqlParser";
import { Set_commandContext } from "./PlSqlParser";
import { Partition_extension_clauseContext } from "./PlSqlParser";
import { Column_aliasContext } from "./PlSqlParser";
import { Table_aliasContext } from "./PlSqlParser";
import { Where_clauseContext } from "./PlSqlParser";
import { Into_clauseContext } from "./PlSqlParser";
import { Xml_column_nameContext } from "./PlSqlParser";
import { Cost_class_nameContext } from "./PlSqlParser";
import { Attribute_nameContext } from "./PlSqlParser";
import { Savepoint_nameContext } from "./PlSqlParser";
import { Rollback_segment_nameContext } from "./PlSqlParser";
import { Table_var_nameContext } from "./PlSqlParser";
import { Schema_nameContext } from "./PlSqlParser";
import { Routine_nameContext } from "./PlSqlParser";
import { Package_nameContext } from "./PlSqlParser";
import { Implementation_type_nameContext } from "./PlSqlParser";
import { Parameter_nameContext } from "./PlSqlParser";
import { Reference_model_nameContext } from "./PlSqlParser";
import { Main_model_nameContext } from "./PlSqlParser";
import { Container_tableview_nameContext } from "./PlSqlParser";
import { Aggregate_function_nameContext } from "./PlSqlParser";
import { Query_nameContext } from "./PlSqlParser";
import { Grantee_nameContext } from "./PlSqlParser";
import { Role_nameContext } from "./PlSqlParser";
import { Constraint_nameContext } from "./PlSqlParser";
import { Label_nameContext } from "./PlSqlParser";
import { Type_nameContext } from "./PlSqlParser";
import { Sequence_nameContext } from "./PlSqlParser";
import { Exception_nameContext } from "./PlSqlParser";
import { Function_nameContext } from "./PlSqlParser";
import { Procedure_nameContext } from "./PlSqlParser";
import { Trigger_nameContext } from "./PlSqlParser";
import { Variable_nameContext } from "./PlSqlParser";
import { Index_nameContext } from "./PlSqlParser";
import { Cursor_nameContext } from "./PlSqlParser";
import { Record_nameContext } from "./PlSqlParser";
import { Collection_nameContext } from "./PlSqlParser";
import { Link_nameContext } from "./PlSqlParser";
import { Column_nameContext } from "./PlSqlParser";
import { Tableview_nameContext } from "./PlSqlParser";
import { XmltableContext } from "./PlSqlParser";
import { Char_set_nameContext } from "./PlSqlParser";
import { Synonym_nameContext } from "./PlSqlParser";
import { Schema_object_nameContext } from "./PlSqlParser";
import { Dir_object_nameContext } from "./PlSqlParser";
import { User_object_nameContext } from "./PlSqlParser";
import { Grant_object_nameContext } from "./PlSqlParser";
import { Column_listContext } from "./PlSqlParser";
import { Paren_column_listContext } from "./PlSqlParser";
import { Keep_clauseContext } from "./PlSqlParser";
import { Function_argumentContext } from "./PlSqlParser";
import { Function_argument_analyticContext } from "./PlSqlParser";
import { Function_argument_modelingContext } from "./PlSqlParser";
import { Respect_or_ignore_nullsContext } from "./PlSqlParser";
import { ArgumentContext } from "./PlSqlParser";
import { Type_specContext } from "./PlSqlParser";
import { DatatypeContext } from "./PlSqlParser";
import { Precision_partContext } from "./PlSqlParser";
import { Native_datatype_elementContext } from "./PlSqlParser";
import { Bind_variableContext } from "./PlSqlParser";
import { General_elementContext } from "./PlSqlParser";
import { General_element_partContext } from "./PlSqlParser";
import { Table_elementContext } from "./PlSqlParser";
import { Object_privilegeContext } from "./PlSqlParser";
import { System_privilegeContext } from "./PlSqlParser";
import { ConstantContext } from "./PlSqlParser";
import { NumericContext } from "./PlSqlParser";
import { Numeric_negativeContext } from "./PlSqlParser";
import { Quoted_stringContext } from "./PlSqlParser";
import { IdentifierContext } from "./PlSqlParser";
import { Id_expressionContext } from "./PlSqlParser";
import { Outer_join_signContext } from "./PlSqlParser";
import { Regular_idContext } from "./PlSqlParser";
import { Non_reserved_keywords_in_12cContext } from "./PlSqlParser";
import { Non_reserved_keywords_pre12cContext } from "./PlSqlParser";
import { String_function_nameContext } from "./PlSqlParser";
import { Numeric_function_nameContext } from "./PlSqlParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `PlSqlParser`.
 */
export default class PlSqlParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `PlSqlParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.sql_script`.
	 * @param ctx the parse tree
	 */
	enterSql_script?: (ctx: Sql_scriptContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.sql_script`.
	 * @param ctx the parse tree
	 */
	exitSql_script?: (ctx: Sql_scriptContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.unit_statement`.
	 * @param ctx the parse tree
	 */
	enterUnit_statement?: (ctx: Unit_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.unit_statement`.
	 * @param ctx the parse tree
	 */
	exitUnit_statement?: (ctx: Unit_statementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.drop_function`.
	 * @param ctx the parse tree
	 */
	enterDrop_function?: (ctx: Drop_functionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.drop_function`.
	 * @param ctx the parse tree
	 */
	exitDrop_function?: (ctx: Drop_functionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_function`.
	 * @param ctx the parse tree
	 */
	enterAlter_function?: (ctx: Alter_functionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_function`.
	 * @param ctx the parse tree
	 */
	exitAlter_function?: (ctx: Alter_functionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.create_function_body`.
	 * @param ctx the parse tree
	 */
	enterCreate_function_body?: (ctx: Create_function_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.create_function_body`.
	 * @param ctx the parse tree
	 */
	exitCreate_function_body?: (ctx: Create_function_bodyContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.parallel_enable_clause`.
	 * @param ctx the parse tree
	 */
	enterParallel_enable_clause?: (ctx: Parallel_enable_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.parallel_enable_clause`.
	 * @param ctx the parse tree
	 */
	exitParallel_enable_clause?: (ctx: Parallel_enable_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.partition_by_clause`.
	 * @param ctx the parse tree
	 */
	enterPartition_by_clause?: (ctx: Partition_by_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.partition_by_clause`.
	 * @param ctx the parse tree
	 */
	exitPartition_by_clause?: (ctx: Partition_by_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.result_cache_clause`.
	 * @param ctx the parse tree
	 */
	enterResult_cache_clause?: (ctx: Result_cache_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.result_cache_clause`.
	 * @param ctx the parse tree
	 */
	exitResult_cache_clause?: (ctx: Result_cache_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.relies_on_part`.
	 * @param ctx the parse tree
	 */
	enterRelies_on_part?: (ctx: Relies_on_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.relies_on_part`.
	 * @param ctx the parse tree
	 */
	exitRelies_on_part?: (ctx: Relies_on_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.streaming_clause`.
	 * @param ctx the parse tree
	 */
	enterStreaming_clause?: (ctx: Streaming_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.streaming_clause`.
	 * @param ctx the parse tree
	 */
	exitStreaming_clause?: (ctx: Streaming_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.drop_package`.
	 * @param ctx the parse tree
	 */
	enterDrop_package?: (ctx: Drop_packageContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.drop_package`.
	 * @param ctx the parse tree
	 */
	exitDrop_package?: (ctx: Drop_packageContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_package`.
	 * @param ctx the parse tree
	 */
	enterAlter_package?: (ctx: Alter_packageContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_package`.
	 * @param ctx the parse tree
	 */
	exitAlter_package?: (ctx: Alter_packageContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.create_package`.
	 * @param ctx the parse tree
	 */
	enterCreate_package?: (ctx: Create_packageContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.create_package`.
	 * @param ctx the parse tree
	 */
	exitCreate_package?: (ctx: Create_packageContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.create_package_body`.
	 * @param ctx the parse tree
	 */
	enterCreate_package_body?: (ctx: Create_package_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.create_package_body`.
	 * @param ctx the parse tree
	 */
	exitCreate_package_body?: (ctx: Create_package_bodyContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.package_obj_spec`.
	 * @param ctx the parse tree
	 */
	enterPackage_obj_spec?: (ctx: Package_obj_specContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.package_obj_spec`.
	 * @param ctx the parse tree
	 */
	exitPackage_obj_spec?: (ctx: Package_obj_specContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.procedure_spec`.
	 * @param ctx the parse tree
	 */
	enterProcedure_spec?: (ctx: Procedure_specContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.procedure_spec`.
	 * @param ctx the parse tree
	 */
	exitProcedure_spec?: (ctx: Procedure_specContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.function_spec`.
	 * @param ctx the parse tree
	 */
	enterFunction_spec?: (ctx: Function_specContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.function_spec`.
	 * @param ctx the parse tree
	 */
	exitFunction_spec?: (ctx: Function_specContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.package_obj_body`.
	 * @param ctx the parse tree
	 */
	enterPackage_obj_body?: (ctx: Package_obj_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.package_obj_body`.
	 * @param ctx the parse tree
	 */
	exitPackage_obj_body?: (ctx: Package_obj_bodyContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.drop_procedure`.
	 * @param ctx the parse tree
	 */
	enterDrop_procedure?: (ctx: Drop_procedureContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.drop_procedure`.
	 * @param ctx the parse tree
	 */
	exitDrop_procedure?: (ctx: Drop_procedureContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_procedure`.
	 * @param ctx the parse tree
	 */
	enterAlter_procedure?: (ctx: Alter_procedureContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_procedure`.
	 * @param ctx the parse tree
	 */
	exitAlter_procedure?: (ctx: Alter_procedureContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.function_body`.
	 * @param ctx the parse tree
	 */
	enterFunction_body?: (ctx: Function_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.function_body`.
	 * @param ctx the parse tree
	 */
	exitFunction_body?: (ctx: Function_bodyContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.procedure_body`.
	 * @param ctx the parse tree
	 */
	enterProcedure_body?: (ctx: Procedure_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.procedure_body`.
	 * @param ctx the parse tree
	 */
	exitProcedure_body?: (ctx: Procedure_bodyContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.create_procedure_body`.
	 * @param ctx the parse tree
	 */
	enterCreate_procedure_body?: (ctx: Create_procedure_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.create_procedure_body`.
	 * @param ctx the parse tree
	 */
	exitCreate_procedure_body?: (ctx: Create_procedure_bodyContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.drop_trigger`.
	 * @param ctx the parse tree
	 */
	enterDrop_trigger?: (ctx: Drop_triggerContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.drop_trigger`.
	 * @param ctx the parse tree
	 */
	exitDrop_trigger?: (ctx: Drop_triggerContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_trigger`.
	 * @param ctx the parse tree
	 */
	enterAlter_trigger?: (ctx: Alter_triggerContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_trigger`.
	 * @param ctx the parse tree
	 */
	exitAlter_trigger?: (ctx: Alter_triggerContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.create_trigger`.
	 * @param ctx the parse tree
	 */
	enterCreate_trigger?: (ctx: Create_triggerContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.create_trigger`.
	 * @param ctx the parse tree
	 */
	exitCreate_trigger?: (ctx: Create_triggerContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.trigger_follows_clause`.
	 * @param ctx the parse tree
	 */
	enterTrigger_follows_clause?: (ctx: Trigger_follows_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.trigger_follows_clause`.
	 * @param ctx the parse tree
	 */
	exitTrigger_follows_clause?: (ctx: Trigger_follows_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.trigger_when_clause`.
	 * @param ctx the parse tree
	 */
	enterTrigger_when_clause?: (ctx: Trigger_when_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.trigger_when_clause`.
	 * @param ctx the parse tree
	 */
	exitTrigger_when_clause?: (ctx: Trigger_when_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.simple_dml_trigger`.
	 * @param ctx the parse tree
	 */
	enterSimple_dml_trigger?: (ctx: Simple_dml_triggerContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.simple_dml_trigger`.
	 * @param ctx the parse tree
	 */
	exitSimple_dml_trigger?: (ctx: Simple_dml_triggerContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.for_each_row`.
	 * @param ctx the parse tree
	 */
	enterFor_each_row?: (ctx: For_each_rowContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.for_each_row`.
	 * @param ctx the parse tree
	 */
	exitFor_each_row?: (ctx: For_each_rowContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.compound_dml_trigger`.
	 * @param ctx the parse tree
	 */
	enterCompound_dml_trigger?: (ctx: Compound_dml_triggerContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.compound_dml_trigger`.
	 * @param ctx the parse tree
	 */
	exitCompound_dml_trigger?: (ctx: Compound_dml_triggerContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.non_dml_trigger`.
	 * @param ctx the parse tree
	 */
	enterNon_dml_trigger?: (ctx: Non_dml_triggerContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.non_dml_trigger`.
	 * @param ctx the parse tree
	 */
	exitNon_dml_trigger?: (ctx: Non_dml_triggerContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.trigger_body`.
	 * @param ctx the parse tree
	 */
	enterTrigger_body?: (ctx: Trigger_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.trigger_body`.
	 * @param ctx the parse tree
	 */
	exitTrigger_body?: (ctx: Trigger_bodyContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.routine_clause`.
	 * @param ctx the parse tree
	 */
	enterRoutine_clause?: (ctx: Routine_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.routine_clause`.
	 * @param ctx the parse tree
	 */
	exitRoutine_clause?: (ctx: Routine_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.compound_trigger_block`.
	 * @param ctx the parse tree
	 */
	enterCompound_trigger_block?: (ctx: Compound_trigger_blockContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.compound_trigger_block`.
	 * @param ctx the parse tree
	 */
	exitCompound_trigger_block?: (ctx: Compound_trigger_blockContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.timing_point_section`.
	 * @param ctx the parse tree
	 */
	enterTiming_point_section?: (ctx: Timing_point_sectionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.timing_point_section`.
	 * @param ctx the parse tree
	 */
	exitTiming_point_section?: (ctx: Timing_point_sectionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.non_dml_event`.
	 * @param ctx the parse tree
	 */
	enterNon_dml_event?: (ctx: Non_dml_eventContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.non_dml_event`.
	 * @param ctx the parse tree
	 */
	exitNon_dml_event?: (ctx: Non_dml_eventContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.dml_event_clause`.
	 * @param ctx the parse tree
	 */
	enterDml_event_clause?: (ctx: Dml_event_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.dml_event_clause`.
	 * @param ctx the parse tree
	 */
	exitDml_event_clause?: (ctx: Dml_event_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.dml_event_element`.
	 * @param ctx the parse tree
	 */
	enterDml_event_element?: (ctx: Dml_event_elementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.dml_event_element`.
	 * @param ctx the parse tree
	 */
	exitDml_event_element?: (ctx: Dml_event_elementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.dml_event_nested_clause`.
	 * @param ctx the parse tree
	 */
	enterDml_event_nested_clause?: (ctx: Dml_event_nested_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.dml_event_nested_clause`.
	 * @param ctx the parse tree
	 */
	exitDml_event_nested_clause?: (ctx: Dml_event_nested_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.referencing_clause`.
	 * @param ctx the parse tree
	 */
	enterReferencing_clause?: (ctx: Referencing_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.referencing_clause`.
	 * @param ctx the parse tree
	 */
	exitReferencing_clause?: (ctx: Referencing_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.referencing_element`.
	 * @param ctx the parse tree
	 */
	enterReferencing_element?: (ctx: Referencing_elementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.referencing_element`.
	 * @param ctx the parse tree
	 */
	exitReferencing_element?: (ctx: Referencing_elementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.drop_type`.
	 * @param ctx the parse tree
	 */
	enterDrop_type?: (ctx: Drop_typeContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.drop_type`.
	 * @param ctx the parse tree
	 */
	exitDrop_type?: (ctx: Drop_typeContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_type`.
	 * @param ctx the parse tree
	 */
	enterAlter_type?: (ctx: Alter_typeContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_type`.
	 * @param ctx the parse tree
	 */
	exitAlter_type?: (ctx: Alter_typeContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.compile_type_clause`.
	 * @param ctx the parse tree
	 */
	enterCompile_type_clause?: (ctx: Compile_type_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.compile_type_clause`.
	 * @param ctx the parse tree
	 */
	exitCompile_type_clause?: (ctx: Compile_type_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.replace_type_clause`.
	 * @param ctx the parse tree
	 */
	enterReplace_type_clause?: (ctx: Replace_type_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.replace_type_clause`.
	 * @param ctx the parse tree
	 */
	exitReplace_type_clause?: (ctx: Replace_type_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_method_spec`.
	 * @param ctx the parse tree
	 */
	enterAlter_method_spec?: (ctx: Alter_method_specContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_method_spec`.
	 * @param ctx the parse tree
	 */
	exitAlter_method_spec?: (ctx: Alter_method_specContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_method_element`.
	 * @param ctx the parse tree
	 */
	enterAlter_method_element?: (ctx: Alter_method_elementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_method_element`.
	 * @param ctx the parse tree
	 */
	exitAlter_method_element?: (ctx: Alter_method_elementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_attribute_definition`.
	 * @param ctx the parse tree
	 */
	enterAlter_attribute_definition?: (ctx: Alter_attribute_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_attribute_definition`.
	 * @param ctx the parse tree
	 */
	exitAlter_attribute_definition?: (ctx: Alter_attribute_definitionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.attribute_definition`.
	 * @param ctx the parse tree
	 */
	enterAttribute_definition?: (ctx: Attribute_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.attribute_definition`.
	 * @param ctx the parse tree
	 */
	exitAttribute_definition?: (ctx: Attribute_definitionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_collection_clauses`.
	 * @param ctx the parse tree
	 */
	enterAlter_collection_clauses?: (ctx: Alter_collection_clausesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_collection_clauses`.
	 * @param ctx the parse tree
	 */
	exitAlter_collection_clauses?: (ctx: Alter_collection_clausesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.dependent_handling_clause`.
	 * @param ctx the parse tree
	 */
	enterDependent_handling_clause?: (ctx: Dependent_handling_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.dependent_handling_clause`.
	 * @param ctx the parse tree
	 */
	exitDependent_handling_clause?: (ctx: Dependent_handling_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.dependent_exceptions_part`.
	 * @param ctx the parse tree
	 */
	enterDependent_exceptions_part?: (ctx: Dependent_exceptions_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.dependent_exceptions_part`.
	 * @param ctx the parse tree
	 */
	exitDependent_exceptions_part?: (ctx: Dependent_exceptions_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.create_type`.
	 * @param ctx the parse tree
	 */
	enterCreate_type?: (ctx: Create_typeContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.create_type`.
	 * @param ctx the parse tree
	 */
	exitCreate_type?: (ctx: Create_typeContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.type_definition`.
	 * @param ctx the parse tree
	 */
	enterType_definition?: (ctx: Type_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.type_definition`.
	 * @param ctx the parse tree
	 */
	exitType_definition?: (ctx: Type_definitionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.object_type_def`.
	 * @param ctx the parse tree
	 */
	enterObject_type_def?: (ctx: Object_type_defContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.object_type_def`.
	 * @param ctx the parse tree
	 */
	exitObject_type_def?: (ctx: Object_type_defContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.object_as_part`.
	 * @param ctx the parse tree
	 */
	enterObject_as_part?: (ctx: Object_as_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.object_as_part`.
	 * @param ctx the parse tree
	 */
	exitObject_as_part?: (ctx: Object_as_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.object_under_part`.
	 * @param ctx the parse tree
	 */
	enterObject_under_part?: (ctx: Object_under_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.object_under_part`.
	 * @param ctx the parse tree
	 */
	exitObject_under_part?: (ctx: Object_under_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.nested_table_type_def`.
	 * @param ctx the parse tree
	 */
	enterNested_table_type_def?: (ctx: Nested_table_type_defContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.nested_table_type_def`.
	 * @param ctx the parse tree
	 */
	exitNested_table_type_def?: (ctx: Nested_table_type_defContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.sqlj_object_type`.
	 * @param ctx the parse tree
	 */
	enterSqlj_object_type?: (ctx: Sqlj_object_typeContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.sqlj_object_type`.
	 * @param ctx the parse tree
	 */
	exitSqlj_object_type?: (ctx: Sqlj_object_typeContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.type_body`.
	 * @param ctx the parse tree
	 */
	enterType_body?: (ctx: Type_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.type_body`.
	 * @param ctx the parse tree
	 */
	exitType_body?: (ctx: Type_bodyContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.type_body_elements`.
	 * @param ctx the parse tree
	 */
	enterType_body_elements?: (ctx: Type_body_elementsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.type_body_elements`.
	 * @param ctx the parse tree
	 */
	exitType_body_elements?: (ctx: Type_body_elementsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.map_order_func_declaration`.
	 * @param ctx the parse tree
	 */
	enterMap_order_func_declaration?: (ctx: Map_order_func_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.map_order_func_declaration`.
	 * @param ctx the parse tree
	 */
	exitMap_order_func_declaration?: (ctx: Map_order_func_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.subprog_decl_in_type`.
	 * @param ctx the parse tree
	 */
	enterSubprog_decl_in_type?: (ctx: Subprog_decl_in_typeContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.subprog_decl_in_type`.
	 * @param ctx the parse tree
	 */
	exitSubprog_decl_in_type?: (ctx: Subprog_decl_in_typeContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.proc_decl_in_type`.
	 * @param ctx the parse tree
	 */
	enterProc_decl_in_type?: (ctx: Proc_decl_in_typeContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.proc_decl_in_type`.
	 * @param ctx the parse tree
	 */
	exitProc_decl_in_type?: (ctx: Proc_decl_in_typeContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.func_decl_in_type`.
	 * @param ctx the parse tree
	 */
	enterFunc_decl_in_type?: (ctx: Func_decl_in_typeContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.func_decl_in_type`.
	 * @param ctx the parse tree
	 */
	exitFunc_decl_in_type?: (ctx: Func_decl_in_typeContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.constructor_declaration`.
	 * @param ctx the parse tree
	 */
	enterConstructor_declaration?: (ctx: Constructor_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.constructor_declaration`.
	 * @param ctx the parse tree
	 */
	exitConstructor_declaration?: (ctx: Constructor_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.modifier_clause`.
	 * @param ctx the parse tree
	 */
	enterModifier_clause?: (ctx: Modifier_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.modifier_clause`.
	 * @param ctx the parse tree
	 */
	exitModifier_clause?: (ctx: Modifier_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.object_member_spec`.
	 * @param ctx the parse tree
	 */
	enterObject_member_spec?: (ctx: Object_member_specContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.object_member_spec`.
	 * @param ctx the parse tree
	 */
	exitObject_member_spec?: (ctx: Object_member_specContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.sqlj_object_type_attr`.
	 * @param ctx the parse tree
	 */
	enterSqlj_object_type_attr?: (ctx: Sqlj_object_type_attrContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.sqlj_object_type_attr`.
	 * @param ctx the parse tree
	 */
	exitSqlj_object_type_attr?: (ctx: Sqlj_object_type_attrContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.element_spec`.
	 * @param ctx the parse tree
	 */
	enterElement_spec?: (ctx: Element_specContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.element_spec`.
	 * @param ctx the parse tree
	 */
	exitElement_spec?: (ctx: Element_specContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.element_spec_options`.
	 * @param ctx the parse tree
	 */
	enterElement_spec_options?: (ctx: Element_spec_optionsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.element_spec_options`.
	 * @param ctx the parse tree
	 */
	exitElement_spec_options?: (ctx: Element_spec_optionsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.subprogram_spec`.
	 * @param ctx the parse tree
	 */
	enterSubprogram_spec?: (ctx: Subprogram_specContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.subprogram_spec`.
	 * @param ctx the parse tree
	 */
	exitSubprogram_spec?: (ctx: Subprogram_specContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.overriding_subprogram_spec`.
	 * @param ctx the parse tree
	 */
	enterOverriding_subprogram_spec?: (ctx: Overriding_subprogram_specContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.overriding_subprogram_spec`.
	 * @param ctx the parse tree
	 */
	exitOverriding_subprogram_spec?: (ctx: Overriding_subprogram_specContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.overriding_function_spec`.
	 * @param ctx the parse tree
	 */
	enterOverriding_function_spec?: (ctx: Overriding_function_specContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.overriding_function_spec`.
	 * @param ctx the parse tree
	 */
	exitOverriding_function_spec?: (ctx: Overriding_function_specContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.type_procedure_spec`.
	 * @param ctx the parse tree
	 */
	enterType_procedure_spec?: (ctx: Type_procedure_specContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.type_procedure_spec`.
	 * @param ctx the parse tree
	 */
	exitType_procedure_spec?: (ctx: Type_procedure_specContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.type_function_spec`.
	 * @param ctx the parse tree
	 */
	enterType_function_spec?: (ctx: Type_function_specContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.type_function_spec`.
	 * @param ctx the parse tree
	 */
	exitType_function_spec?: (ctx: Type_function_specContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.constructor_spec`.
	 * @param ctx the parse tree
	 */
	enterConstructor_spec?: (ctx: Constructor_specContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.constructor_spec`.
	 * @param ctx the parse tree
	 */
	exitConstructor_spec?: (ctx: Constructor_specContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.map_order_function_spec`.
	 * @param ctx the parse tree
	 */
	enterMap_order_function_spec?: (ctx: Map_order_function_specContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.map_order_function_spec`.
	 * @param ctx the parse tree
	 */
	exitMap_order_function_spec?: (ctx: Map_order_function_specContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.pragma_clause`.
	 * @param ctx the parse tree
	 */
	enterPragma_clause?: (ctx: Pragma_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.pragma_clause`.
	 * @param ctx the parse tree
	 */
	exitPragma_clause?: (ctx: Pragma_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.pragma_elements`.
	 * @param ctx the parse tree
	 */
	enterPragma_elements?: (ctx: Pragma_elementsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.pragma_elements`.
	 * @param ctx the parse tree
	 */
	exitPragma_elements?: (ctx: Pragma_elementsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.type_elements_parameter`.
	 * @param ctx the parse tree
	 */
	enterType_elements_parameter?: (ctx: Type_elements_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.type_elements_parameter`.
	 * @param ctx the parse tree
	 */
	exitType_elements_parameter?: (ctx: Type_elements_parameterContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.drop_sequence`.
	 * @param ctx the parse tree
	 */
	enterDrop_sequence?: (ctx: Drop_sequenceContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.drop_sequence`.
	 * @param ctx the parse tree
	 */
	exitDrop_sequence?: (ctx: Drop_sequenceContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_sequence`.
	 * @param ctx the parse tree
	 */
	enterAlter_sequence?: (ctx: Alter_sequenceContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_sequence`.
	 * @param ctx the parse tree
	 */
	exitAlter_sequence?: (ctx: Alter_sequenceContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_session`.
	 * @param ctx the parse tree
	 */
	enterAlter_session?: (ctx: Alter_sessionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_session`.
	 * @param ctx the parse tree
	 */
	exitAlter_session?: (ctx: Alter_sessionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_session_set_clause`.
	 * @param ctx the parse tree
	 */
	enterAlter_session_set_clause?: (ctx: Alter_session_set_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_session_set_clause`.
	 * @param ctx the parse tree
	 */
	exitAlter_session_set_clause?: (ctx: Alter_session_set_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.create_sequence`.
	 * @param ctx the parse tree
	 */
	enterCreate_sequence?: (ctx: Create_sequenceContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.create_sequence`.
	 * @param ctx the parse tree
	 */
	exitCreate_sequence?: (ctx: Create_sequenceContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.sequence_spec`.
	 * @param ctx the parse tree
	 */
	enterSequence_spec?: (ctx: Sequence_specContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.sequence_spec`.
	 * @param ctx the parse tree
	 */
	exitSequence_spec?: (ctx: Sequence_specContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.sequence_start_clause`.
	 * @param ctx the parse tree
	 */
	enterSequence_start_clause?: (ctx: Sequence_start_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.sequence_start_clause`.
	 * @param ctx the parse tree
	 */
	exitSequence_start_clause?: (ctx: Sequence_start_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.create_index`.
	 * @param ctx the parse tree
	 */
	enterCreate_index?: (ctx: Create_indexContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.create_index`.
	 * @param ctx the parse tree
	 */
	exitCreate_index?: (ctx: Create_indexContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.cluster_index_clause`.
	 * @param ctx the parse tree
	 */
	enterCluster_index_clause?: (ctx: Cluster_index_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.cluster_index_clause`.
	 * @param ctx the parse tree
	 */
	exitCluster_index_clause?: (ctx: Cluster_index_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.cluster_name`.
	 * @param ctx the parse tree
	 */
	enterCluster_name?: (ctx: Cluster_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.cluster_name`.
	 * @param ctx the parse tree
	 */
	exitCluster_name?: (ctx: Cluster_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.table_index_clause`.
	 * @param ctx the parse tree
	 */
	enterTable_index_clause?: (ctx: Table_index_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.table_index_clause`.
	 * @param ctx the parse tree
	 */
	exitTable_index_clause?: (ctx: Table_index_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.bitmap_join_index_clause`.
	 * @param ctx the parse tree
	 */
	enterBitmap_join_index_clause?: (ctx: Bitmap_join_index_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.bitmap_join_index_clause`.
	 * @param ctx the parse tree
	 */
	exitBitmap_join_index_clause?: (ctx: Bitmap_join_index_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.index_expr`.
	 * @param ctx the parse tree
	 */
	enterIndex_expr?: (ctx: Index_exprContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.index_expr`.
	 * @param ctx the parse tree
	 */
	exitIndex_expr?: (ctx: Index_exprContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.index_properties`.
	 * @param ctx the parse tree
	 */
	enterIndex_properties?: (ctx: Index_propertiesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.index_properties`.
	 * @param ctx the parse tree
	 */
	exitIndex_properties?: (ctx: Index_propertiesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.domain_index_clause`.
	 * @param ctx the parse tree
	 */
	enterDomain_index_clause?: (ctx: Domain_index_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.domain_index_clause`.
	 * @param ctx the parse tree
	 */
	exitDomain_index_clause?: (ctx: Domain_index_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.local_domain_index_clause`.
	 * @param ctx the parse tree
	 */
	enterLocal_domain_index_clause?: (ctx: Local_domain_index_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.local_domain_index_clause`.
	 * @param ctx the parse tree
	 */
	exitLocal_domain_index_clause?: (ctx: Local_domain_index_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.xmlindex_clause`.
	 * @param ctx the parse tree
	 */
	enterXmlindex_clause?: (ctx: Xmlindex_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.xmlindex_clause`.
	 * @param ctx the parse tree
	 */
	exitXmlindex_clause?: (ctx: Xmlindex_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.local_xmlindex_clause`.
	 * @param ctx the parse tree
	 */
	enterLocal_xmlindex_clause?: (ctx: Local_xmlindex_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.local_xmlindex_clause`.
	 * @param ctx the parse tree
	 */
	exitLocal_xmlindex_clause?: (ctx: Local_xmlindex_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.global_partitioned_index`.
	 * @param ctx the parse tree
	 */
	enterGlobal_partitioned_index?: (ctx: Global_partitioned_indexContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.global_partitioned_index`.
	 * @param ctx the parse tree
	 */
	exitGlobal_partitioned_index?: (ctx: Global_partitioned_indexContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.index_partitioning_clause`.
	 * @param ctx the parse tree
	 */
	enterIndex_partitioning_clause?: (ctx: Index_partitioning_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.index_partitioning_clause`.
	 * @param ctx the parse tree
	 */
	exitIndex_partitioning_clause?: (ctx: Index_partitioning_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.local_partitioned_index`.
	 * @param ctx the parse tree
	 */
	enterLocal_partitioned_index?: (ctx: Local_partitioned_indexContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.local_partitioned_index`.
	 * @param ctx the parse tree
	 */
	exitLocal_partitioned_index?: (ctx: Local_partitioned_indexContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.on_range_partitioned_table`.
	 * @param ctx the parse tree
	 */
	enterOn_range_partitioned_table?: (ctx: On_range_partitioned_tableContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.on_range_partitioned_table`.
	 * @param ctx the parse tree
	 */
	exitOn_range_partitioned_table?: (ctx: On_range_partitioned_tableContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.on_list_partitioned_table`.
	 * @param ctx the parse tree
	 */
	enterOn_list_partitioned_table?: (ctx: On_list_partitioned_tableContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.on_list_partitioned_table`.
	 * @param ctx the parse tree
	 */
	exitOn_list_partitioned_table?: (ctx: On_list_partitioned_tableContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.partitioned_table`.
	 * @param ctx the parse tree
	 */
	enterPartitioned_table?: (ctx: Partitioned_tableContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.partitioned_table`.
	 * @param ctx the parse tree
	 */
	exitPartitioned_table?: (ctx: Partitioned_tableContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.on_hash_partitioned_table`.
	 * @param ctx the parse tree
	 */
	enterOn_hash_partitioned_table?: (ctx: On_hash_partitioned_tableContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.on_hash_partitioned_table`.
	 * @param ctx the parse tree
	 */
	exitOn_hash_partitioned_table?: (ctx: On_hash_partitioned_tableContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.on_hash_partitioned_clause`.
	 * @param ctx the parse tree
	 */
	enterOn_hash_partitioned_clause?: (ctx: On_hash_partitioned_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.on_hash_partitioned_clause`.
	 * @param ctx the parse tree
	 */
	exitOn_hash_partitioned_clause?: (ctx: On_hash_partitioned_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.on_comp_partitioned_table`.
	 * @param ctx the parse tree
	 */
	enterOn_comp_partitioned_table?: (ctx: On_comp_partitioned_tableContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.on_comp_partitioned_table`.
	 * @param ctx the parse tree
	 */
	exitOn_comp_partitioned_table?: (ctx: On_comp_partitioned_tableContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.on_comp_partitioned_clause`.
	 * @param ctx the parse tree
	 */
	enterOn_comp_partitioned_clause?: (ctx: On_comp_partitioned_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.on_comp_partitioned_clause`.
	 * @param ctx the parse tree
	 */
	exitOn_comp_partitioned_clause?: (ctx: On_comp_partitioned_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.index_subpartition_clause`.
	 * @param ctx the parse tree
	 */
	enterIndex_subpartition_clause?: (ctx: Index_subpartition_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.index_subpartition_clause`.
	 * @param ctx the parse tree
	 */
	exitIndex_subpartition_clause?: (ctx: Index_subpartition_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.index_subpartition_subclause`.
	 * @param ctx the parse tree
	 */
	enterIndex_subpartition_subclause?: (ctx: Index_subpartition_subclauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.index_subpartition_subclause`.
	 * @param ctx the parse tree
	 */
	exitIndex_subpartition_subclause?: (ctx: Index_subpartition_subclauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.odci_parameters`.
	 * @param ctx the parse tree
	 */
	enterOdci_parameters?: (ctx: Odci_parametersContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.odci_parameters`.
	 * @param ctx the parse tree
	 */
	exitOdci_parameters?: (ctx: Odci_parametersContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.indextype`.
	 * @param ctx the parse tree
	 */
	enterIndextype?: (ctx: IndextypeContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.indextype`.
	 * @param ctx the parse tree
	 */
	exitIndextype?: (ctx: IndextypeContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_index`.
	 * @param ctx the parse tree
	 */
	enterAlter_index?: (ctx: Alter_indexContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_index`.
	 * @param ctx the parse tree
	 */
	exitAlter_index?: (ctx: Alter_indexContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_index_ops_set1`.
	 * @param ctx the parse tree
	 */
	enterAlter_index_ops_set1?: (ctx: Alter_index_ops_set1Context) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_index_ops_set1`.
	 * @param ctx the parse tree
	 */
	exitAlter_index_ops_set1?: (ctx: Alter_index_ops_set1Context) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_index_ops_set2`.
	 * @param ctx the parse tree
	 */
	enterAlter_index_ops_set2?: (ctx: Alter_index_ops_set2Context) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_index_ops_set2`.
	 * @param ctx the parse tree
	 */
	exitAlter_index_ops_set2?: (ctx: Alter_index_ops_set2Context) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.visible_or_invisible`.
	 * @param ctx the parse tree
	 */
	enterVisible_or_invisible?: (ctx: Visible_or_invisibleContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.visible_or_invisible`.
	 * @param ctx the parse tree
	 */
	exitVisible_or_invisible?: (ctx: Visible_or_invisibleContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.monitoring_nomonitoring`.
	 * @param ctx the parse tree
	 */
	enterMonitoring_nomonitoring?: (ctx: Monitoring_nomonitoringContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.monitoring_nomonitoring`.
	 * @param ctx the parse tree
	 */
	exitMonitoring_nomonitoring?: (ctx: Monitoring_nomonitoringContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.rebuild_clause`.
	 * @param ctx the parse tree
	 */
	enterRebuild_clause?: (ctx: Rebuild_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.rebuild_clause`.
	 * @param ctx the parse tree
	 */
	exitRebuild_clause?: (ctx: Rebuild_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_index_partitioning`.
	 * @param ctx the parse tree
	 */
	enterAlter_index_partitioning?: (ctx: Alter_index_partitioningContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_index_partitioning`.
	 * @param ctx the parse tree
	 */
	exitAlter_index_partitioning?: (ctx: Alter_index_partitioningContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.modify_index_default_attrs`.
	 * @param ctx the parse tree
	 */
	enterModify_index_default_attrs?: (ctx: Modify_index_default_attrsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.modify_index_default_attrs`.
	 * @param ctx the parse tree
	 */
	exitModify_index_default_attrs?: (ctx: Modify_index_default_attrsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.add_hash_index_partition`.
	 * @param ctx the parse tree
	 */
	enterAdd_hash_index_partition?: (ctx: Add_hash_index_partitionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.add_hash_index_partition`.
	 * @param ctx the parse tree
	 */
	exitAdd_hash_index_partition?: (ctx: Add_hash_index_partitionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.coalesce_index_partition`.
	 * @param ctx the parse tree
	 */
	enterCoalesce_index_partition?: (ctx: Coalesce_index_partitionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.coalesce_index_partition`.
	 * @param ctx the parse tree
	 */
	exitCoalesce_index_partition?: (ctx: Coalesce_index_partitionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.modify_index_partition`.
	 * @param ctx the parse tree
	 */
	enterModify_index_partition?: (ctx: Modify_index_partitionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.modify_index_partition`.
	 * @param ctx the parse tree
	 */
	exitModify_index_partition?: (ctx: Modify_index_partitionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.modify_index_partitions_ops`.
	 * @param ctx the parse tree
	 */
	enterModify_index_partitions_ops?: (ctx: Modify_index_partitions_opsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.modify_index_partitions_ops`.
	 * @param ctx the parse tree
	 */
	exitModify_index_partitions_ops?: (ctx: Modify_index_partitions_opsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.rename_index_partition`.
	 * @param ctx the parse tree
	 */
	enterRename_index_partition?: (ctx: Rename_index_partitionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.rename_index_partition`.
	 * @param ctx the parse tree
	 */
	exitRename_index_partition?: (ctx: Rename_index_partitionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.drop_index_partition`.
	 * @param ctx the parse tree
	 */
	enterDrop_index_partition?: (ctx: Drop_index_partitionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.drop_index_partition`.
	 * @param ctx the parse tree
	 */
	exitDrop_index_partition?: (ctx: Drop_index_partitionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.split_index_partition`.
	 * @param ctx the parse tree
	 */
	enterSplit_index_partition?: (ctx: Split_index_partitionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.split_index_partition`.
	 * @param ctx the parse tree
	 */
	exitSplit_index_partition?: (ctx: Split_index_partitionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.index_partition_description`.
	 * @param ctx the parse tree
	 */
	enterIndex_partition_description?: (ctx: Index_partition_descriptionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.index_partition_description`.
	 * @param ctx the parse tree
	 */
	exitIndex_partition_description?: (ctx: Index_partition_descriptionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.modify_index_subpartition`.
	 * @param ctx the parse tree
	 */
	enterModify_index_subpartition?: (ctx: Modify_index_subpartitionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.modify_index_subpartition`.
	 * @param ctx the parse tree
	 */
	exitModify_index_subpartition?: (ctx: Modify_index_subpartitionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.partition_name_old`.
	 * @param ctx the parse tree
	 */
	enterPartition_name_old?: (ctx: Partition_name_oldContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.partition_name_old`.
	 * @param ctx the parse tree
	 */
	exitPartition_name_old?: (ctx: Partition_name_oldContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.new_partition_name`.
	 * @param ctx the parse tree
	 */
	enterNew_partition_name?: (ctx: New_partition_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.new_partition_name`.
	 * @param ctx the parse tree
	 */
	exitNew_partition_name?: (ctx: New_partition_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.new_index_name`.
	 * @param ctx the parse tree
	 */
	enterNew_index_name?: (ctx: New_index_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.new_index_name`.
	 * @param ctx the parse tree
	 */
	exitNew_index_name?: (ctx: New_index_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.create_user`.
	 * @param ctx the parse tree
	 */
	enterCreate_user?: (ctx: Create_userContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.create_user`.
	 * @param ctx the parse tree
	 */
	exitCreate_user?: (ctx: Create_userContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_user`.
	 * @param ctx the parse tree
	 */
	enterAlter_user?: (ctx: Alter_userContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_user`.
	 * @param ctx the parse tree
	 */
	exitAlter_user?: (ctx: Alter_userContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_identified_by`.
	 * @param ctx the parse tree
	 */
	enterAlter_identified_by?: (ctx: Alter_identified_byContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_identified_by`.
	 * @param ctx the parse tree
	 */
	exitAlter_identified_by?: (ctx: Alter_identified_byContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.identified_by`.
	 * @param ctx the parse tree
	 */
	enterIdentified_by?: (ctx: Identified_byContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.identified_by`.
	 * @param ctx the parse tree
	 */
	exitIdentified_by?: (ctx: Identified_byContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.identified_other_clause`.
	 * @param ctx the parse tree
	 */
	enterIdentified_other_clause?: (ctx: Identified_other_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.identified_other_clause`.
	 * @param ctx the parse tree
	 */
	exitIdentified_other_clause?: (ctx: Identified_other_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.user_tablespace_clause`.
	 * @param ctx the parse tree
	 */
	enterUser_tablespace_clause?: (ctx: User_tablespace_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.user_tablespace_clause`.
	 * @param ctx the parse tree
	 */
	exitUser_tablespace_clause?: (ctx: User_tablespace_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.quota_clause`.
	 * @param ctx the parse tree
	 */
	enterQuota_clause?: (ctx: Quota_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.quota_clause`.
	 * @param ctx the parse tree
	 */
	exitQuota_clause?: (ctx: Quota_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.profile_clause`.
	 * @param ctx the parse tree
	 */
	enterProfile_clause?: (ctx: Profile_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.profile_clause`.
	 * @param ctx the parse tree
	 */
	exitProfile_clause?: (ctx: Profile_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.role_clause`.
	 * @param ctx the parse tree
	 */
	enterRole_clause?: (ctx: Role_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.role_clause`.
	 * @param ctx the parse tree
	 */
	exitRole_clause?: (ctx: Role_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.user_default_role_clause`.
	 * @param ctx the parse tree
	 */
	enterUser_default_role_clause?: (ctx: User_default_role_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.user_default_role_clause`.
	 * @param ctx the parse tree
	 */
	exitUser_default_role_clause?: (ctx: User_default_role_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.password_expire_clause`.
	 * @param ctx the parse tree
	 */
	enterPassword_expire_clause?: (ctx: Password_expire_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.password_expire_clause`.
	 * @param ctx the parse tree
	 */
	exitPassword_expire_clause?: (ctx: Password_expire_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.user_lock_clause`.
	 * @param ctx the parse tree
	 */
	enterUser_lock_clause?: (ctx: User_lock_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.user_lock_clause`.
	 * @param ctx the parse tree
	 */
	exitUser_lock_clause?: (ctx: User_lock_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.user_editions_clause`.
	 * @param ctx the parse tree
	 */
	enterUser_editions_clause?: (ctx: User_editions_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.user_editions_clause`.
	 * @param ctx the parse tree
	 */
	exitUser_editions_clause?: (ctx: User_editions_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_user_editions_clause`.
	 * @param ctx the parse tree
	 */
	enterAlter_user_editions_clause?: (ctx: Alter_user_editions_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_user_editions_clause`.
	 * @param ctx the parse tree
	 */
	exitAlter_user_editions_clause?: (ctx: Alter_user_editions_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.proxy_clause`.
	 * @param ctx the parse tree
	 */
	enterProxy_clause?: (ctx: Proxy_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.proxy_clause`.
	 * @param ctx the parse tree
	 */
	exitProxy_clause?: (ctx: Proxy_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.container_names`.
	 * @param ctx the parse tree
	 */
	enterContainer_names?: (ctx: Container_namesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.container_names`.
	 * @param ctx the parse tree
	 */
	exitContainer_names?: (ctx: Container_namesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.set_container_data`.
	 * @param ctx the parse tree
	 */
	enterSet_container_data?: (ctx: Set_container_dataContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.set_container_data`.
	 * @param ctx the parse tree
	 */
	exitSet_container_data?: (ctx: Set_container_dataContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.add_rem_container_data`.
	 * @param ctx the parse tree
	 */
	enterAdd_rem_container_data?: (ctx: Add_rem_container_dataContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.add_rem_container_data`.
	 * @param ctx the parse tree
	 */
	exitAdd_rem_container_data?: (ctx: Add_rem_container_dataContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.container_data_clause`.
	 * @param ctx the parse tree
	 */
	enterContainer_data_clause?: (ctx: Container_data_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.container_data_clause`.
	 * @param ctx the parse tree
	 */
	exitContainer_data_clause?: (ctx: Container_data_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.analyze`.
	 * @param ctx the parse tree
	 */
	enterAnalyze?: (ctx: AnalyzeContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.analyze`.
	 * @param ctx the parse tree
	 */
	exitAnalyze?: (ctx: AnalyzeContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.partition_extention_clause`.
	 * @param ctx the parse tree
	 */
	enterPartition_extention_clause?: (ctx: Partition_extention_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.partition_extention_clause`.
	 * @param ctx the parse tree
	 */
	exitPartition_extention_clause?: (ctx: Partition_extention_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.validation_clauses`.
	 * @param ctx the parse tree
	 */
	enterValidation_clauses?: (ctx: Validation_clausesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.validation_clauses`.
	 * @param ctx the parse tree
	 */
	exitValidation_clauses?: (ctx: Validation_clausesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.online_or_offline`.
	 * @param ctx the parse tree
	 */
	enterOnline_or_offline?: (ctx: Online_or_offlineContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.online_or_offline`.
	 * @param ctx the parse tree
	 */
	exitOnline_or_offline?: (ctx: Online_or_offlineContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.into_clause1`.
	 * @param ctx the parse tree
	 */
	enterInto_clause1?: (ctx: Into_clause1Context) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.into_clause1`.
	 * @param ctx the parse tree
	 */
	exitInto_clause1?: (ctx: Into_clause1Context) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.partition_key_value`.
	 * @param ctx the parse tree
	 */
	enterPartition_key_value?: (ctx: Partition_key_valueContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.partition_key_value`.
	 * @param ctx the parse tree
	 */
	exitPartition_key_value?: (ctx: Partition_key_valueContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.subpartition_key_value`.
	 * @param ctx the parse tree
	 */
	enterSubpartition_key_value?: (ctx: Subpartition_key_valueContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.subpartition_key_value`.
	 * @param ctx the parse tree
	 */
	exitSubpartition_key_value?: (ctx: Subpartition_key_valueContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.associate_statistics`.
	 * @param ctx the parse tree
	 */
	enterAssociate_statistics?: (ctx: Associate_statisticsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.associate_statistics`.
	 * @param ctx the parse tree
	 */
	exitAssociate_statistics?: (ctx: Associate_statisticsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.column_association`.
	 * @param ctx the parse tree
	 */
	enterColumn_association?: (ctx: Column_associationContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.column_association`.
	 * @param ctx the parse tree
	 */
	exitColumn_association?: (ctx: Column_associationContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.function_association`.
	 * @param ctx the parse tree
	 */
	enterFunction_association?: (ctx: Function_associationContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.function_association`.
	 * @param ctx the parse tree
	 */
	exitFunction_association?: (ctx: Function_associationContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.indextype_name`.
	 * @param ctx the parse tree
	 */
	enterIndextype_name?: (ctx: Indextype_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.indextype_name`.
	 * @param ctx the parse tree
	 */
	exitIndextype_name?: (ctx: Indextype_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.using_statistics_type`.
	 * @param ctx the parse tree
	 */
	enterUsing_statistics_type?: (ctx: Using_statistics_typeContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.using_statistics_type`.
	 * @param ctx the parse tree
	 */
	exitUsing_statistics_type?: (ctx: Using_statistics_typeContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.statistics_type_name`.
	 * @param ctx the parse tree
	 */
	enterStatistics_type_name?: (ctx: Statistics_type_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.statistics_type_name`.
	 * @param ctx the parse tree
	 */
	exitStatistics_type_name?: (ctx: Statistics_type_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.default_cost_clause`.
	 * @param ctx the parse tree
	 */
	enterDefault_cost_clause?: (ctx: Default_cost_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.default_cost_clause`.
	 * @param ctx the parse tree
	 */
	exitDefault_cost_clause?: (ctx: Default_cost_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.cpu_cost`.
	 * @param ctx the parse tree
	 */
	enterCpu_cost?: (ctx: Cpu_costContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.cpu_cost`.
	 * @param ctx the parse tree
	 */
	exitCpu_cost?: (ctx: Cpu_costContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.io_cost`.
	 * @param ctx the parse tree
	 */
	enterIo_cost?: (ctx: Io_costContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.io_cost`.
	 * @param ctx the parse tree
	 */
	exitIo_cost?: (ctx: Io_costContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.network_cost`.
	 * @param ctx the parse tree
	 */
	enterNetwork_cost?: (ctx: Network_costContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.network_cost`.
	 * @param ctx the parse tree
	 */
	exitNetwork_cost?: (ctx: Network_costContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.default_selectivity_clause`.
	 * @param ctx the parse tree
	 */
	enterDefault_selectivity_clause?: (ctx: Default_selectivity_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.default_selectivity_clause`.
	 * @param ctx the parse tree
	 */
	exitDefault_selectivity_clause?: (ctx: Default_selectivity_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.default_selectivity`.
	 * @param ctx the parse tree
	 */
	enterDefault_selectivity?: (ctx: Default_selectivityContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.default_selectivity`.
	 * @param ctx the parse tree
	 */
	exitDefault_selectivity?: (ctx: Default_selectivityContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.storage_table_clause`.
	 * @param ctx the parse tree
	 */
	enterStorage_table_clause?: (ctx: Storage_table_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.storage_table_clause`.
	 * @param ctx the parse tree
	 */
	exitStorage_table_clause?: (ctx: Storage_table_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.unified_auditing`.
	 * @param ctx the parse tree
	 */
	enterUnified_auditing?: (ctx: Unified_auditingContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.unified_auditing`.
	 * @param ctx the parse tree
	 */
	exitUnified_auditing?: (ctx: Unified_auditingContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.policy_name`.
	 * @param ctx the parse tree
	 */
	enterPolicy_name?: (ctx: Policy_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.policy_name`.
	 * @param ctx the parse tree
	 */
	exitPolicy_name?: (ctx: Policy_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.audit_traditional`.
	 * @param ctx the parse tree
	 */
	enterAudit_traditional?: (ctx: Audit_traditionalContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.audit_traditional`.
	 * @param ctx the parse tree
	 */
	exitAudit_traditional?: (ctx: Audit_traditionalContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.audit_direct_path`.
	 * @param ctx the parse tree
	 */
	enterAudit_direct_path?: (ctx: Audit_direct_pathContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.audit_direct_path`.
	 * @param ctx the parse tree
	 */
	exitAudit_direct_path?: (ctx: Audit_direct_pathContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.audit_container_clause`.
	 * @param ctx the parse tree
	 */
	enterAudit_container_clause?: (ctx: Audit_container_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.audit_container_clause`.
	 * @param ctx the parse tree
	 */
	exitAudit_container_clause?: (ctx: Audit_container_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.audit_operation_clause`.
	 * @param ctx the parse tree
	 */
	enterAudit_operation_clause?: (ctx: Audit_operation_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.audit_operation_clause`.
	 * @param ctx the parse tree
	 */
	exitAudit_operation_clause?: (ctx: Audit_operation_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.auditing_by_clause`.
	 * @param ctx the parse tree
	 */
	enterAuditing_by_clause?: (ctx: Auditing_by_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.auditing_by_clause`.
	 * @param ctx the parse tree
	 */
	exitAuditing_by_clause?: (ctx: Auditing_by_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.audit_user`.
	 * @param ctx the parse tree
	 */
	enterAudit_user?: (ctx: Audit_userContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.audit_user`.
	 * @param ctx the parse tree
	 */
	exitAudit_user?: (ctx: Audit_userContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.audit_schema_object_clause`.
	 * @param ctx the parse tree
	 */
	enterAudit_schema_object_clause?: (ctx: Audit_schema_object_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.audit_schema_object_clause`.
	 * @param ctx the parse tree
	 */
	exitAudit_schema_object_clause?: (ctx: Audit_schema_object_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.sql_operation`.
	 * @param ctx the parse tree
	 */
	enterSql_operation?: (ctx: Sql_operationContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.sql_operation`.
	 * @param ctx the parse tree
	 */
	exitSql_operation?: (ctx: Sql_operationContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.auditing_on_clause`.
	 * @param ctx the parse tree
	 */
	enterAuditing_on_clause?: (ctx: Auditing_on_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.auditing_on_clause`.
	 * @param ctx the parse tree
	 */
	exitAuditing_on_clause?: (ctx: Auditing_on_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.model_name`.
	 * @param ctx the parse tree
	 */
	enterModel_name?: (ctx: Model_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.model_name`.
	 * @param ctx the parse tree
	 */
	exitModel_name?: (ctx: Model_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.object_name`.
	 * @param ctx the parse tree
	 */
	enterObject_name?: (ctx: Object_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.object_name`.
	 * @param ctx the parse tree
	 */
	exitObject_name?: (ctx: Object_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.profile_name`.
	 * @param ctx the parse tree
	 */
	enterProfile_name?: (ctx: Profile_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.profile_name`.
	 * @param ctx the parse tree
	 */
	exitProfile_name?: (ctx: Profile_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.sql_statement_shortcut`.
	 * @param ctx the parse tree
	 */
	enterSql_statement_shortcut?: (ctx: Sql_statement_shortcutContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.sql_statement_shortcut`.
	 * @param ctx the parse tree
	 */
	exitSql_statement_shortcut?: (ctx: Sql_statement_shortcutContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.drop_index`.
	 * @param ctx the parse tree
	 */
	enterDrop_index?: (ctx: Drop_indexContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.drop_index`.
	 * @param ctx the parse tree
	 */
	exitDrop_index?: (ctx: Drop_indexContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.rename_object`.
	 * @param ctx the parse tree
	 */
	enterRename_object?: (ctx: Rename_objectContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.rename_object`.
	 * @param ctx the parse tree
	 */
	exitRename_object?: (ctx: Rename_objectContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.grant_statement`.
	 * @param ctx the parse tree
	 */
	enterGrant_statement?: (ctx: Grant_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.grant_statement`.
	 * @param ctx the parse tree
	 */
	exitGrant_statement?: (ctx: Grant_statementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.container_clause`.
	 * @param ctx the parse tree
	 */
	enterContainer_clause?: (ctx: Container_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.container_clause`.
	 * @param ctx the parse tree
	 */
	exitContainer_clause?: (ctx: Container_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.create_directory`.
	 * @param ctx the parse tree
	 */
	enterCreate_directory?: (ctx: Create_directoryContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.create_directory`.
	 * @param ctx the parse tree
	 */
	exitCreate_directory?: (ctx: Create_directoryContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.directory_name`.
	 * @param ctx the parse tree
	 */
	enterDirectory_name?: (ctx: Directory_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.directory_name`.
	 * @param ctx the parse tree
	 */
	exitDirectory_name?: (ctx: Directory_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.directory_path`.
	 * @param ctx the parse tree
	 */
	enterDirectory_path?: (ctx: Directory_pathContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.directory_path`.
	 * @param ctx the parse tree
	 */
	exitDirectory_path?: (ctx: Directory_pathContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_library`.
	 * @param ctx the parse tree
	 */
	enterAlter_library?: (ctx: Alter_libraryContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_library`.
	 * @param ctx the parse tree
	 */
	exitAlter_library?: (ctx: Alter_libraryContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.library_editionable`.
	 * @param ctx the parse tree
	 */
	enterLibrary_editionable?: (ctx: Library_editionableContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.library_editionable`.
	 * @param ctx the parse tree
	 */
	exitLibrary_editionable?: (ctx: Library_editionableContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.library_debug`.
	 * @param ctx the parse tree
	 */
	enterLibrary_debug?: (ctx: Library_debugContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.library_debug`.
	 * @param ctx the parse tree
	 */
	exitLibrary_debug?: (ctx: Library_debugContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.compiler_parameters_clause`.
	 * @param ctx the parse tree
	 */
	enterCompiler_parameters_clause?: (ctx: Compiler_parameters_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.compiler_parameters_clause`.
	 * @param ctx the parse tree
	 */
	exitCompiler_parameters_clause?: (ctx: Compiler_parameters_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.parameter_value`.
	 * @param ctx the parse tree
	 */
	enterParameter_value?: (ctx: Parameter_valueContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.parameter_value`.
	 * @param ctx the parse tree
	 */
	exitParameter_value?: (ctx: Parameter_valueContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.library_name`.
	 * @param ctx the parse tree
	 */
	enterLibrary_name?: (ctx: Library_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.library_name`.
	 * @param ctx the parse tree
	 */
	exitLibrary_name?: (ctx: Library_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_view`.
	 * @param ctx the parse tree
	 */
	enterAlter_view?: (ctx: Alter_viewContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_view`.
	 * @param ctx the parse tree
	 */
	exitAlter_view?: (ctx: Alter_viewContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_view_editionable`.
	 * @param ctx the parse tree
	 */
	enterAlter_view_editionable?: (ctx: Alter_view_editionableContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_view_editionable`.
	 * @param ctx the parse tree
	 */
	exitAlter_view_editionable?: (ctx: Alter_view_editionableContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.create_view`.
	 * @param ctx the parse tree
	 */
	enterCreate_view?: (ctx: Create_viewContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.create_view`.
	 * @param ctx the parse tree
	 */
	exitCreate_view?: (ctx: Create_viewContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.view_options`.
	 * @param ctx the parse tree
	 */
	enterView_options?: (ctx: View_optionsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.view_options`.
	 * @param ctx the parse tree
	 */
	exitView_options?: (ctx: View_optionsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.view_alias_constraint`.
	 * @param ctx the parse tree
	 */
	enterView_alias_constraint?: (ctx: View_alias_constraintContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.view_alias_constraint`.
	 * @param ctx the parse tree
	 */
	exitView_alias_constraint?: (ctx: View_alias_constraintContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.object_view_clause`.
	 * @param ctx the parse tree
	 */
	enterObject_view_clause?: (ctx: Object_view_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.object_view_clause`.
	 * @param ctx the parse tree
	 */
	exitObject_view_clause?: (ctx: Object_view_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.inline_constraint`.
	 * @param ctx the parse tree
	 */
	enterInline_constraint?: (ctx: Inline_constraintContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.inline_constraint`.
	 * @param ctx the parse tree
	 */
	exitInline_constraint?: (ctx: Inline_constraintContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.inline_ref_constraint`.
	 * @param ctx the parse tree
	 */
	enterInline_ref_constraint?: (ctx: Inline_ref_constraintContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.inline_ref_constraint`.
	 * @param ctx the parse tree
	 */
	exitInline_ref_constraint?: (ctx: Inline_ref_constraintContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.out_of_line_ref_constraint`.
	 * @param ctx the parse tree
	 */
	enterOut_of_line_ref_constraint?: (ctx: Out_of_line_ref_constraintContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.out_of_line_ref_constraint`.
	 * @param ctx the parse tree
	 */
	exitOut_of_line_ref_constraint?: (ctx: Out_of_line_ref_constraintContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.out_of_line_constraint`.
	 * @param ctx the parse tree
	 */
	enterOut_of_line_constraint?: (ctx: Out_of_line_constraintContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.out_of_line_constraint`.
	 * @param ctx the parse tree
	 */
	exitOut_of_line_constraint?: (ctx: Out_of_line_constraintContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.constraint_state`.
	 * @param ctx the parse tree
	 */
	enterConstraint_state?: (ctx: Constraint_stateContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.constraint_state`.
	 * @param ctx the parse tree
	 */
	exitConstraint_state?: (ctx: Constraint_stateContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_tablespace`.
	 * @param ctx the parse tree
	 */
	enterAlter_tablespace?: (ctx: Alter_tablespaceContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_tablespace`.
	 * @param ctx the parse tree
	 */
	exitAlter_tablespace?: (ctx: Alter_tablespaceContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.datafile_tempfile_clauses`.
	 * @param ctx the parse tree
	 */
	enterDatafile_tempfile_clauses?: (ctx: Datafile_tempfile_clausesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.datafile_tempfile_clauses`.
	 * @param ctx the parse tree
	 */
	exitDatafile_tempfile_clauses?: (ctx: Datafile_tempfile_clausesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.tablespace_logging_clauses`.
	 * @param ctx the parse tree
	 */
	enterTablespace_logging_clauses?: (ctx: Tablespace_logging_clausesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.tablespace_logging_clauses`.
	 * @param ctx the parse tree
	 */
	exitTablespace_logging_clauses?: (ctx: Tablespace_logging_clausesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.tablespace_group_clause`.
	 * @param ctx the parse tree
	 */
	enterTablespace_group_clause?: (ctx: Tablespace_group_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.tablespace_group_clause`.
	 * @param ctx the parse tree
	 */
	exitTablespace_group_clause?: (ctx: Tablespace_group_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.tablespace_group_name`.
	 * @param ctx the parse tree
	 */
	enterTablespace_group_name?: (ctx: Tablespace_group_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.tablespace_group_name`.
	 * @param ctx the parse tree
	 */
	exitTablespace_group_name?: (ctx: Tablespace_group_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.tablespace_state_clauses`.
	 * @param ctx the parse tree
	 */
	enterTablespace_state_clauses?: (ctx: Tablespace_state_clausesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.tablespace_state_clauses`.
	 * @param ctx the parse tree
	 */
	exitTablespace_state_clauses?: (ctx: Tablespace_state_clausesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.flashback_mode_clause`.
	 * @param ctx the parse tree
	 */
	enterFlashback_mode_clause?: (ctx: Flashback_mode_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.flashback_mode_clause`.
	 * @param ctx the parse tree
	 */
	exitFlashback_mode_clause?: (ctx: Flashback_mode_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.new_tablespace_name`.
	 * @param ctx the parse tree
	 */
	enterNew_tablespace_name?: (ctx: New_tablespace_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.new_tablespace_name`.
	 * @param ctx the parse tree
	 */
	exitNew_tablespace_name?: (ctx: New_tablespace_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.create_tablespace`.
	 * @param ctx the parse tree
	 */
	enterCreate_tablespace?: (ctx: Create_tablespaceContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.create_tablespace`.
	 * @param ctx the parse tree
	 */
	exitCreate_tablespace?: (ctx: Create_tablespaceContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.permanent_tablespace_clause`.
	 * @param ctx the parse tree
	 */
	enterPermanent_tablespace_clause?: (ctx: Permanent_tablespace_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.permanent_tablespace_clause`.
	 * @param ctx the parse tree
	 */
	exitPermanent_tablespace_clause?: (ctx: Permanent_tablespace_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.tablespace_encryption_spec`.
	 * @param ctx the parse tree
	 */
	enterTablespace_encryption_spec?: (ctx: Tablespace_encryption_specContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.tablespace_encryption_spec`.
	 * @param ctx the parse tree
	 */
	exitTablespace_encryption_spec?: (ctx: Tablespace_encryption_specContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.logging_clause`.
	 * @param ctx the parse tree
	 */
	enterLogging_clause?: (ctx: Logging_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.logging_clause`.
	 * @param ctx the parse tree
	 */
	exitLogging_clause?: (ctx: Logging_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.extent_management_clause`.
	 * @param ctx the parse tree
	 */
	enterExtent_management_clause?: (ctx: Extent_management_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.extent_management_clause`.
	 * @param ctx the parse tree
	 */
	exitExtent_management_clause?: (ctx: Extent_management_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.segment_management_clause`.
	 * @param ctx the parse tree
	 */
	enterSegment_management_clause?: (ctx: Segment_management_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.segment_management_clause`.
	 * @param ctx the parse tree
	 */
	exitSegment_management_clause?: (ctx: Segment_management_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.temporary_tablespace_clause`.
	 * @param ctx the parse tree
	 */
	enterTemporary_tablespace_clause?: (ctx: Temporary_tablespace_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.temporary_tablespace_clause`.
	 * @param ctx the parse tree
	 */
	exitTemporary_tablespace_clause?: (ctx: Temporary_tablespace_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.undo_tablespace_clause`.
	 * @param ctx the parse tree
	 */
	enterUndo_tablespace_clause?: (ctx: Undo_tablespace_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.undo_tablespace_clause`.
	 * @param ctx the parse tree
	 */
	exitUndo_tablespace_clause?: (ctx: Undo_tablespace_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.tablespace_retention_clause`.
	 * @param ctx the parse tree
	 */
	enterTablespace_retention_clause?: (ctx: Tablespace_retention_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.tablespace_retention_clause`.
	 * @param ctx the parse tree
	 */
	exitTablespace_retention_clause?: (ctx: Tablespace_retention_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.datafile_specification`.
	 * @param ctx the parse tree
	 */
	enterDatafile_specification?: (ctx: Datafile_specificationContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.datafile_specification`.
	 * @param ctx the parse tree
	 */
	exitDatafile_specification?: (ctx: Datafile_specificationContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.tempfile_specification`.
	 * @param ctx the parse tree
	 */
	enterTempfile_specification?: (ctx: Tempfile_specificationContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.tempfile_specification`.
	 * @param ctx the parse tree
	 */
	exitTempfile_specification?: (ctx: Tempfile_specificationContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.datafile_tempfile_spec`.
	 * @param ctx the parse tree
	 */
	enterDatafile_tempfile_spec?: (ctx: Datafile_tempfile_specContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.datafile_tempfile_spec`.
	 * @param ctx the parse tree
	 */
	exitDatafile_tempfile_spec?: (ctx: Datafile_tempfile_specContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.redo_log_file_spec`.
	 * @param ctx the parse tree
	 */
	enterRedo_log_file_spec?: (ctx: Redo_log_file_specContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.redo_log_file_spec`.
	 * @param ctx the parse tree
	 */
	exitRedo_log_file_spec?: (ctx: Redo_log_file_specContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.autoextend_clause`.
	 * @param ctx the parse tree
	 */
	enterAutoextend_clause?: (ctx: Autoextend_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.autoextend_clause`.
	 * @param ctx the parse tree
	 */
	exitAutoextend_clause?: (ctx: Autoextend_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.maxsize_clause`.
	 * @param ctx the parse tree
	 */
	enterMaxsize_clause?: (ctx: Maxsize_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.maxsize_clause`.
	 * @param ctx the parse tree
	 */
	exitMaxsize_clause?: (ctx: Maxsize_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.build_clause`.
	 * @param ctx the parse tree
	 */
	enterBuild_clause?: (ctx: Build_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.build_clause`.
	 * @param ctx the parse tree
	 */
	exitBuild_clause?: (ctx: Build_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.parallel_clause`.
	 * @param ctx the parse tree
	 */
	enterParallel_clause?: (ctx: Parallel_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.parallel_clause`.
	 * @param ctx the parse tree
	 */
	exitParallel_clause?: (ctx: Parallel_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_materialized_view`.
	 * @param ctx the parse tree
	 */
	enterAlter_materialized_view?: (ctx: Alter_materialized_viewContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_materialized_view`.
	 * @param ctx the parse tree
	 */
	exitAlter_materialized_view?: (ctx: Alter_materialized_viewContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_mv_option1`.
	 * @param ctx the parse tree
	 */
	enterAlter_mv_option1?: (ctx: Alter_mv_option1Context) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_mv_option1`.
	 * @param ctx the parse tree
	 */
	exitAlter_mv_option1?: (ctx: Alter_mv_option1Context) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_mv_refresh`.
	 * @param ctx the parse tree
	 */
	enterAlter_mv_refresh?: (ctx: Alter_mv_refreshContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_mv_refresh`.
	 * @param ctx the parse tree
	 */
	exitAlter_mv_refresh?: (ctx: Alter_mv_refreshContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.rollback_segment`.
	 * @param ctx the parse tree
	 */
	enterRollback_segment?: (ctx: Rollback_segmentContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.rollback_segment`.
	 * @param ctx the parse tree
	 */
	exitRollback_segment?: (ctx: Rollback_segmentContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.modify_mv_column_clause`.
	 * @param ctx the parse tree
	 */
	enterModify_mv_column_clause?: (ctx: Modify_mv_column_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.modify_mv_column_clause`.
	 * @param ctx the parse tree
	 */
	exitModify_mv_column_clause?: (ctx: Modify_mv_column_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_materialized_view_log`.
	 * @param ctx the parse tree
	 */
	enterAlter_materialized_view_log?: (ctx: Alter_materialized_view_logContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_materialized_view_log`.
	 * @param ctx the parse tree
	 */
	exitAlter_materialized_view_log?: (ctx: Alter_materialized_view_logContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.add_mv_log_column_clause`.
	 * @param ctx the parse tree
	 */
	enterAdd_mv_log_column_clause?: (ctx: Add_mv_log_column_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.add_mv_log_column_clause`.
	 * @param ctx the parse tree
	 */
	exitAdd_mv_log_column_clause?: (ctx: Add_mv_log_column_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.move_mv_log_clause`.
	 * @param ctx the parse tree
	 */
	enterMove_mv_log_clause?: (ctx: Move_mv_log_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.move_mv_log_clause`.
	 * @param ctx the parse tree
	 */
	exitMove_mv_log_clause?: (ctx: Move_mv_log_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.mv_log_augmentation`.
	 * @param ctx the parse tree
	 */
	enterMv_log_augmentation?: (ctx: Mv_log_augmentationContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.mv_log_augmentation`.
	 * @param ctx the parse tree
	 */
	exitMv_log_augmentation?: (ctx: Mv_log_augmentationContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.datetime_expr`.
	 * @param ctx the parse tree
	 */
	enterDatetime_expr?: (ctx: Datetime_exprContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.datetime_expr`.
	 * @param ctx the parse tree
	 */
	exitDatetime_expr?: (ctx: Datetime_exprContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.interval_expr`.
	 * @param ctx the parse tree
	 */
	enterInterval_expr?: (ctx: Interval_exprContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.interval_expr`.
	 * @param ctx the parse tree
	 */
	exitInterval_expr?: (ctx: Interval_exprContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.synchronous_or_asynchronous`.
	 * @param ctx the parse tree
	 */
	enterSynchronous_or_asynchronous?: (ctx: Synchronous_or_asynchronousContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.synchronous_or_asynchronous`.
	 * @param ctx the parse tree
	 */
	exitSynchronous_or_asynchronous?: (ctx: Synchronous_or_asynchronousContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.including_or_excluding`.
	 * @param ctx the parse tree
	 */
	enterIncluding_or_excluding?: (ctx: Including_or_excludingContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.including_or_excluding`.
	 * @param ctx the parse tree
	 */
	exitIncluding_or_excluding?: (ctx: Including_or_excludingContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.create_materialized_view_log`.
	 * @param ctx the parse tree
	 */
	enterCreate_materialized_view_log?: (ctx: Create_materialized_view_logContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.create_materialized_view_log`.
	 * @param ctx the parse tree
	 */
	exitCreate_materialized_view_log?: (ctx: Create_materialized_view_logContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.new_values_clause`.
	 * @param ctx the parse tree
	 */
	enterNew_values_clause?: (ctx: New_values_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.new_values_clause`.
	 * @param ctx the parse tree
	 */
	exitNew_values_clause?: (ctx: New_values_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.mv_log_purge_clause`.
	 * @param ctx the parse tree
	 */
	enterMv_log_purge_clause?: (ctx: Mv_log_purge_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.mv_log_purge_clause`.
	 * @param ctx the parse tree
	 */
	exitMv_log_purge_clause?: (ctx: Mv_log_purge_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.create_materialized_view`.
	 * @param ctx the parse tree
	 */
	enterCreate_materialized_view?: (ctx: Create_materialized_viewContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.create_materialized_view`.
	 * @param ctx the parse tree
	 */
	exitCreate_materialized_view?: (ctx: Create_materialized_viewContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.create_mv_refresh`.
	 * @param ctx the parse tree
	 */
	enterCreate_mv_refresh?: (ctx: Create_mv_refreshContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.create_mv_refresh`.
	 * @param ctx the parse tree
	 */
	exitCreate_mv_refresh?: (ctx: Create_mv_refreshContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.create_context`.
	 * @param ctx the parse tree
	 */
	enterCreate_context?: (ctx: Create_contextContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.create_context`.
	 * @param ctx the parse tree
	 */
	exitCreate_context?: (ctx: Create_contextContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.oracle_namespace`.
	 * @param ctx the parse tree
	 */
	enterOracle_namespace?: (ctx: Oracle_namespaceContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.oracle_namespace`.
	 * @param ctx the parse tree
	 */
	exitOracle_namespace?: (ctx: Oracle_namespaceContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.create_cluster`.
	 * @param ctx the parse tree
	 */
	enterCreate_cluster?: (ctx: Create_clusterContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.create_cluster`.
	 * @param ctx the parse tree
	 */
	exitCreate_cluster?: (ctx: Create_clusterContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.create_table`.
	 * @param ctx the parse tree
	 */
	enterCreate_table?: (ctx: Create_tableContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.create_table`.
	 * @param ctx the parse tree
	 */
	exitCreate_table?: (ctx: Create_tableContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.xmltype_table`.
	 * @param ctx the parse tree
	 */
	enterXmltype_table?: (ctx: Xmltype_tableContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.xmltype_table`.
	 * @param ctx the parse tree
	 */
	exitXmltype_table?: (ctx: Xmltype_tableContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.xmltype_virtual_columns`.
	 * @param ctx the parse tree
	 */
	enterXmltype_virtual_columns?: (ctx: Xmltype_virtual_columnsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.xmltype_virtual_columns`.
	 * @param ctx the parse tree
	 */
	exitXmltype_virtual_columns?: (ctx: Xmltype_virtual_columnsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.xmltype_column_properties`.
	 * @param ctx the parse tree
	 */
	enterXmltype_column_properties?: (ctx: Xmltype_column_propertiesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.xmltype_column_properties`.
	 * @param ctx the parse tree
	 */
	exitXmltype_column_properties?: (ctx: Xmltype_column_propertiesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.xmltype_storage`.
	 * @param ctx the parse tree
	 */
	enterXmltype_storage?: (ctx: Xmltype_storageContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.xmltype_storage`.
	 * @param ctx the parse tree
	 */
	exitXmltype_storage?: (ctx: Xmltype_storageContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.xmlschema_spec`.
	 * @param ctx the parse tree
	 */
	enterXmlschema_spec?: (ctx: Xmlschema_specContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.xmlschema_spec`.
	 * @param ctx the parse tree
	 */
	exitXmlschema_spec?: (ctx: Xmlschema_specContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.object_table`.
	 * @param ctx the parse tree
	 */
	enterObject_table?: (ctx: Object_tableContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.object_table`.
	 * @param ctx the parse tree
	 */
	exitObject_table?: (ctx: Object_tableContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.oid_index_clause`.
	 * @param ctx the parse tree
	 */
	enterOid_index_clause?: (ctx: Oid_index_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.oid_index_clause`.
	 * @param ctx the parse tree
	 */
	exitOid_index_clause?: (ctx: Oid_index_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.oid_clause`.
	 * @param ctx the parse tree
	 */
	enterOid_clause?: (ctx: Oid_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.oid_clause`.
	 * @param ctx the parse tree
	 */
	exitOid_clause?: (ctx: Oid_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.object_properties`.
	 * @param ctx the parse tree
	 */
	enterObject_properties?: (ctx: Object_propertiesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.object_properties`.
	 * @param ctx the parse tree
	 */
	exitObject_properties?: (ctx: Object_propertiesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.object_table_substitution`.
	 * @param ctx the parse tree
	 */
	enterObject_table_substitution?: (ctx: Object_table_substitutionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.object_table_substitution`.
	 * @param ctx the parse tree
	 */
	exitObject_table_substitution?: (ctx: Object_table_substitutionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.relational_table`.
	 * @param ctx the parse tree
	 */
	enterRelational_table?: (ctx: Relational_tableContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.relational_table`.
	 * @param ctx the parse tree
	 */
	exitRelational_table?: (ctx: Relational_tableContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.relational_property`.
	 * @param ctx the parse tree
	 */
	enterRelational_property?: (ctx: Relational_propertyContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.relational_property`.
	 * @param ctx the parse tree
	 */
	exitRelational_property?: (ctx: Relational_propertyContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.table_partitioning_clauses`.
	 * @param ctx the parse tree
	 */
	enterTable_partitioning_clauses?: (ctx: Table_partitioning_clausesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.table_partitioning_clauses`.
	 * @param ctx the parse tree
	 */
	exitTable_partitioning_clauses?: (ctx: Table_partitioning_clausesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.range_partitions`.
	 * @param ctx the parse tree
	 */
	enterRange_partitions?: (ctx: Range_partitionsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.range_partitions`.
	 * @param ctx the parse tree
	 */
	exitRange_partitions?: (ctx: Range_partitionsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.list_partitions`.
	 * @param ctx the parse tree
	 */
	enterList_partitions?: (ctx: List_partitionsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.list_partitions`.
	 * @param ctx the parse tree
	 */
	exitList_partitions?: (ctx: List_partitionsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.hash_partitions`.
	 * @param ctx the parse tree
	 */
	enterHash_partitions?: (ctx: Hash_partitionsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.hash_partitions`.
	 * @param ctx the parse tree
	 */
	exitHash_partitions?: (ctx: Hash_partitionsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.individual_hash_partitions`.
	 * @param ctx the parse tree
	 */
	enterIndividual_hash_partitions?: (ctx: Individual_hash_partitionsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.individual_hash_partitions`.
	 * @param ctx the parse tree
	 */
	exitIndividual_hash_partitions?: (ctx: Individual_hash_partitionsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.hash_partitions_by_quantity`.
	 * @param ctx the parse tree
	 */
	enterHash_partitions_by_quantity?: (ctx: Hash_partitions_by_quantityContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.hash_partitions_by_quantity`.
	 * @param ctx the parse tree
	 */
	exitHash_partitions_by_quantity?: (ctx: Hash_partitions_by_quantityContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.hash_partition_quantity`.
	 * @param ctx the parse tree
	 */
	enterHash_partition_quantity?: (ctx: Hash_partition_quantityContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.hash_partition_quantity`.
	 * @param ctx the parse tree
	 */
	exitHash_partition_quantity?: (ctx: Hash_partition_quantityContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.composite_range_partitions`.
	 * @param ctx the parse tree
	 */
	enterComposite_range_partitions?: (ctx: Composite_range_partitionsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.composite_range_partitions`.
	 * @param ctx the parse tree
	 */
	exitComposite_range_partitions?: (ctx: Composite_range_partitionsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.composite_list_partitions`.
	 * @param ctx the parse tree
	 */
	enterComposite_list_partitions?: (ctx: Composite_list_partitionsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.composite_list_partitions`.
	 * @param ctx the parse tree
	 */
	exitComposite_list_partitions?: (ctx: Composite_list_partitionsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.composite_hash_partitions`.
	 * @param ctx the parse tree
	 */
	enterComposite_hash_partitions?: (ctx: Composite_hash_partitionsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.composite_hash_partitions`.
	 * @param ctx the parse tree
	 */
	exitComposite_hash_partitions?: (ctx: Composite_hash_partitionsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.reference_partitioning`.
	 * @param ctx the parse tree
	 */
	enterReference_partitioning?: (ctx: Reference_partitioningContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.reference_partitioning`.
	 * @param ctx the parse tree
	 */
	exitReference_partitioning?: (ctx: Reference_partitioningContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.reference_partition_desc`.
	 * @param ctx the parse tree
	 */
	enterReference_partition_desc?: (ctx: Reference_partition_descContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.reference_partition_desc`.
	 * @param ctx the parse tree
	 */
	exitReference_partition_desc?: (ctx: Reference_partition_descContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.system_partitioning`.
	 * @param ctx the parse tree
	 */
	enterSystem_partitioning?: (ctx: System_partitioningContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.system_partitioning`.
	 * @param ctx the parse tree
	 */
	exitSystem_partitioning?: (ctx: System_partitioningContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.range_partition_desc`.
	 * @param ctx the parse tree
	 */
	enterRange_partition_desc?: (ctx: Range_partition_descContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.range_partition_desc`.
	 * @param ctx the parse tree
	 */
	exitRange_partition_desc?: (ctx: Range_partition_descContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.list_partition_desc`.
	 * @param ctx the parse tree
	 */
	enterList_partition_desc?: (ctx: List_partition_descContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.list_partition_desc`.
	 * @param ctx the parse tree
	 */
	exitList_partition_desc?: (ctx: List_partition_descContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.subpartition_template`.
	 * @param ctx the parse tree
	 */
	enterSubpartition_template?: (ctx: Subpartition_templateContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.subpartition_template`.
	 * @param ctx the parse tree
	 */
	exitSubpartition_template?: (ctx: Subpartition_templateContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.hash_subpartition_quantity`.
	 * @param ctx the parse tree
	 */
	enterHash_subpartition_quantity?: (ctx: Hash_subpartition_quantityContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.hash_subpartition_quantity`.
	 * @param ctx the parse tree
	 */
	exitHash_subpartition_quantity?: (ctx: Hash_subpartition_quantityContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.subpartition_by_range`.
	 * @param ctx the parse tree
	 */
	enterSubpartition_by_range?: (ctx: Subpartition_by_rangeContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.subpartition_by_range`.
	 * @param ctx the parse tree
	 */
	exitSubpartition_by_range?: (ctx: Subpartition_by_rangeContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.subpartition_by_list`.
	 * @param ctx the parse tree
	 */
	enterSubpartition_by_list?: (ctx: Subpartition_by_listContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.subpartition_by_list`.
	 * @param ctx the parse tree
	 */
	exitSubpartition_by_list?: (ctx: Subpartition_by_listContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.subpartition_by_hash`.
	 * @param ctx the parse tree
	 */
	enterSubpartition_by_hash?: (ctx: Subpartition_by_hashContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.subpartition_by_hash`.
	 * @param ctx the parse tree
	 */
	exitSubpartition_by_hash?: (ctx: Subpartition_by_hashContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.subpartition_name`.
	 * @param ctx the parse tree
	 */
	enterSubpartition_name?: (ctx: Subpartition_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.subpartition_name`.
	 * @param ctx the parse tree
	 */
	exitSubpartition_name?: (ctx: Subpartition_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.range_subpartition_desc`.
	 * @param ctx the parse tree
	 */
	enterRange_subpartition_desc?: (ctx: Range_subpartition_descContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.range_subpartition_desc`.
	 * @param ctx the parse tree
	 */
	exitRange_subpartition_desc?: (ctx: Range_subpartition_descContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.list_subpartition_desc`.
	 * @param ctx the parse tree
	 */
	enterList_subpartition_desc?: (ctx: List_subpartition_descContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.list_subpartition_desc`.
	 * @param ctx the parse tree
	 */
	exitList_subpartition_desc?: (ctx: List_subpartition_descContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.individual_hash_subparts`.
	 * @param ctx the parse tree
	 */
	enterIndividual_hash_subparts?: (ctx: Individual_hash_subpartsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.individual_hash_subparts`.
	 * @param ctx the parse tree
	 */
	exitIndividual_hash_subparts?: (ctx: Individual_hash_subpartsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.hash_subparts_by_quantity`.
	 * @param ctx the parse tree
	 */
	enterHash_subparts_by_quantity?: (ctx: Hash_subparts_by_quantityContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.hash_subparts_by_quantity`.
	 * @param ctx the parse tree
	 */
	exitHash_subparts_by_quantity?: (ctx: Hash_subparts_by_quantityContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.range_values_clause`.
	 * @param ctx the parse tree
	 */
	enterRange_values_clause?: (ctx: Range_values_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.range_values_clause`.
	 * @param ctx the parse tree
	 */
	exitRange_values_clause?: (ctx: Range_values_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.list_values_clause`.
	 * @param ctx the parse tree
	 */
	enterList_values_clause?: (ctx: List_values_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.list_values_clause`.
	 * @param ctx the parse tree
	 */
	exitList_values_clause?: (ctx: List_values_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.table_partition_description`.
	 * @param ctx the parse tree
	 */
	enterTable_partition_description?: (ctx: Table_partition_descriptionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.table_partition_description`.
	 * @param ctx the parse tree
	 */
	exitTable_partition_description?: (ctx: Table_partition_descriptionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.partitioning_storage_clause`.
	 * @param ctx the parse tree
	 */
	enterPartitioning_storage_clause?: (ctx: Partitioning_storage_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.partitioning_storage_clause`.
	 * @param ctx the parse tree
	 */
	exitPartitioning_storage_clause?: (ctx: Partitioning_storage_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.lob_partitioning_storage`.
	 * @param ctx the parse tree
	 */
	enterLob_partitioning_storage?: (ctx: Lob_partitioning_storageContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.lob_partitioning_storage`.
	 * @param ctx the parse tree
	 */
	exitLob_partitioning_storage?: (ctx: Lob_partitioning_storageContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.datatype_null_enable`.
	 * @param ctx the parse tree
	 */
	enterDatatype_null_enable?: (ctx: Datatype_null_enableContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.datatype_null_enable`.
	 * @param ctx the parse tree
	 */
	exitDatatype_null_enable?: (ctx: Datatype_null_enableContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.size_clause`.
	 * @param ctx the parse tree
	 */
	enterSize_clause?: (ctx: Size_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.size_clause`.
	 * @param ctx the parse tree
	 */
	exitSize_clause?: (ctx: Size_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.table_compression`.
	 * @param ctx the parse tree
	 */
	enterTable_compression?: (ctx: Table_compressionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.table_compression`.
	 * @param ctx the parse tree
	 */
	exitTable_compression?: (ctx: Table_compressionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.physical_attributes_clause`.
	 * @param ctx the parse tree
	 */
	enterPhysical_attributes_clause?: (ctx: Physical_attributes_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.physical_attributes_clause`.
	 * @param ctx the parse tree
	 */
	exitPhysical_attributes_clause?: (ctx: Physical_attributes_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.storage_clause`.
	 * @param ctx the parse tree
	 */
	enterStorage_clause?: (ctx: Storage_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.storage_clause`.
	 * @param ctx the parse tree
	 */
	exitStorage_clause?: (ctx: Storage_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.deferred_segment_creation`.
	 * @param ctx the parse tree
	 */
	enterDeferred_segment_creation?: (ctx: Deferred_segment_creationContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.deferred_segment_creation`.
	 * @param ctx the parse tree
	 */
	exitDeferred_segment_creation?: (ctx: Deferred_segment_creationContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.segment_attributes_clause`.
	 * @param ctx the parse tree
	 */
	enterSegment_attributes_clause?: (ctx: Segment_attributes_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.segment_attributes_clause`.
	 * @param ctx the parse tree
	 */
	exitSegment_attributes_clause?: (ctx: Segment_attributes_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.physical_properties`.
	 * @param ctx the parse tree
	 */
	enterPhysical_properties?: (ctx: Physical_propertiesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.physical_properties`.
	 * @param ctx the parse tree
	 */
	exitPhysical_properties?: (ctx: Physical_propertiesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.row_movement_clause`.
	 * @param ctx the parse tree
	 */
	enterRow_movement_clause?: (ctx: Row_movement_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.row_movement_clause`.
	 * @param ctx the parse tree
	 */
	exitRow_movement_clause?: (ctx: Row_movement_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.flashback_archive_clause`.
	 * @param ctx the parse tree
	 */
	enterFlashback_archive_clause?: (ctx: Flashback_archive_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.flashback_archive_clause`.
	 * @param ctx the parse tree
	 */
	exitFlashback_archive_clause?: (ctx: Flashback_archive_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.log_grp`.
	 * @param ctx the parse tree
	 */
	enterLog_grp?: (ctx: Log_grpContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.log_grp`.
	 * @param ctx the parse tree
	 */
	exitLog_grp?: (ctx: Log_grpContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.supplemental_table_logging`.
	 * @param ctx the parse tree
	 */
	enterSupplemental_table_logging?: (ctx: Supplemental_table_loggingContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.supplemental_table_logging`.
	 * @param ctx the parse tree
	 */
	exitSupplemental_table_logging?: (ctx: Supplemental_table_loggingContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.supplemental_log_grp_clause`.
	 * @param ctx the parse tree
	 */
	enterSupplemental_log_grp_clause?: (ctx: Supplemental_log_grp_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.supplemental_log_grp_clause`.
	 * @param ctx the parse tree
	 */
	exitSupplemental_log_grp_clause?: (ctx: Supplemental_log_grp_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.supplemental_id_key_clause`.
	 * @param ctx the parse tree
	 */
	enterSupplemental_id_key_clause?: (ctx: Supplemental_id_key_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.supplemental_id_key_clause`.
	 * @param ctx the parse tree
	 */
	exitSupplemental_id_key_clause?: (ctx: Supplemental_id_key_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.allocate_extent_clause`.
	 * @param ctx the parse tree
	 */
	enterAllocate_extent_clause?: (ctx: Allocate_extent_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.allocate_extent_clause`.
	 * @param ctx the parse tree
	 */
	exitAllocate_extent_clause?: (ctx: Allocate_extent_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.deallocate_unused_clause`.
	 * @param ctx the parse tree
	 */
	enterDeallocate_unused_clause?: (ctx: Deallocate_unused_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.deallocate_unused_clause`.
	 * @param ctx the parse tree
	 */
	exitDeallocate_unused_clause?: (ctx: Deallocate_unused_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.shrink_clause`.
	 * @param ctx the parse tree
	 */
	enterShrink_clause?: (ctx: Shrink_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.shrink_clause`.
	 * @param ctx the parse tree
	 */
	exitShrink_clause?: (ctx: Shrink_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.records_per_block_clause`.
	 * @param ctx the parse tree
	 */
	enterRecords_per_block_clause?: (ctx: Records_per_block_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.records_per_block_clause`.
	 * @param ctx the parse tree
	 */
	exitRecords_per_block_clause?: (ctx: Records_per_block_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.upgrade_table_clause`.
	 * @param ctx the parse tree
	 */
	enterUpgrade_table_clause?: (ctx: Upgrade_table_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.upgrade_table_clause`.
	 * @param ctx the parse tree
	 */
	exitUpgrade_table_clause?: (ctx: Upgrade_table_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.drop_table`.
	 * @param ctx the parse tree
	 */
	enterDrop_table?: (ctx: Drop_tableContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.drop_table`.
	 * @param ctx the parse tree
	 */
	exitDrop_table?: (ctx: Drop_tableContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.drop_view`.
	 * @param ctx the parse tree
	 */
	enterDrop_view?: (ctx: Drop_viewContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.drop_view`.
	 * @param ctx the parse tree
	 */
	exitDrop_view?: (ctx: Drop_viewContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.comment_on_column`.
	 * @param ctx the parse tree
	 */
	enterComment_on_column?: (ctx: Comment_on_columnContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.comment_on_column`.
	 * @param ctx the parse tree
	 */
	exitComment_on_column?: (ctx: Comment_on_columnContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.enable_or_disable`.
	 * @param ctx the parse tree
	 */
	enterEnable_or_disable?: (ctx: Enable_or_disableContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.enable_or_disable`.
	 * @param ctx the parse tree
	 */
	exitEnable_or_disable?: (ctx: Enable_or_disableContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.allow_or_disallow`.
	 * @param ctx the parse tree
	 */
	enterAllow_or_disallow?: (ctx: Allow_or_disallowContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.allow_or_disallow`.
	 * @param ctx the parse tree
	 */
	exitAllow_or_disallow?: (ctx: Allow_or_disallowContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.create_synonym`.
	 * @param ctx the parse tree
	 */
	enterCreate_synonym?: (ctx: Create_synonymContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.create_synonym`.
	 * @param ctx the parse tree
	 */
	exitCreate_synonym?: (ctx: Create_synonymContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.comment_on_table`.
	 * @param ctx the parse tree
	 */
	enterComment_on_table?: (ctx: Comment_on_tableContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.comment_on_table`.
	 * @param ctx the parse tree
	 */
	exitComment_on_table?: (ctx: Comment_on_tableContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_cluster`.
	 * @param ctx the parse tree
	 */
	enterAlter_cluster?: (ctx: Alter_clusterContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_cluster`.
	 * @param ctx the parse tree
	 */
	exitAlter_cluster?: (ctx: Alter_clusterContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.cache_or_nocache`.
	 * @param ctx the parse tree
	 */
	enterCache_or_nocache?: (ctx: Cache_or_nocacheContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.cache_or_nocache`.
	 * @param ctx the parse tree
	 */
	exitCache_or_nocache?: (ctx: Cache_or_nocacheContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.database_name`.
	 * @param ctx the parse tree
	 */
	enterDatabase_name?: (ctx: Database_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.database_name`.
	 * @param ctx the parse tree
	 */
	exitDatabase_name?: (ctx: Database_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_database`.
	 * @param ctx the parse tree
	 */
	enterAlter_database?: (ctx: Alter_databaseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_database`.
	 * @param ctx the parse tree
	 */
	exitAlter_database?: (ctx: Alter_databaseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.startup_clauses`.
	 * @param ctx the parse tree
	 */
	enterStartup_clauses?: (ctx: Startup_clausesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.startup_clauses`.
	 * @param ctx the parse tree
	 */
	exitStartup_clauses?: (ctx: Startup_clausesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.resetlogs_or_noresetlogs`.
	 * @param ctx the parse tree
	 */
	enterResetlogs_or_noresetlogs?: (ctx: Resetlogs_or_noresetlogsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.resetlogs_or_noresetlogs`.
	 * @param ctx the parse tree
	 */
	exitResetlogs_or_noresetlogs?: (ctx: Resetlogs_or_noresetlogsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.upgrade_or_downgrade`.
	 * @param ctx the parse tree
	 */
	enterUpgrade_or_downgrade?: (ctx: Upgrade_or_downgradeContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.upgrade_or_downgrade`.
	 * @param ctx the parse tree
	 */
	exitUpgrade_or_downgrade?: (ctx: Upgrade_or_downgradeContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.recovery_clauses`.
	 * @param ctx the parse tree
	 */
	enterRecovery_clauses?: (ctx: Recovery_clausesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.recovery_clauses`.
	 * @param ctx the parse tree
	 */
	exitRecovery_clauses?: (ctx: Recovery_clausesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.begin_or_end`.
	 * @param ctx the parse tree
	 */
	enterBegin_or_end?: (ctx: Begin_or_endContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.begin_or_end`.
	 * @param ctx the parse tree
	 */
	exitBegin_or_end?: (ctx: Begin_or_endContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.general_recovery`.
	 * @param ctx the parse tree
	 */
	enterGeneral_recovery?: (ctx: General_recoveryContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.general_recovery`.
	 * @param ctx the parse tree
	 */
	exitGeneral_recovery?: (ctx: General_recoveryContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.full_database_recovery`.
	 * @param ctx the parse tree
	 */
	enterFull_database_recovery?: (ctx: Full_database_recoveryContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.full_database_recovery`.
	 * @param ctx the parse tree
	 */
	exitFull_database_recovery?: (ctx: Full_database_recoveryContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.partial_database_recovery`.
	 * @param ctx the parse tree
	 */
	enterPartial_database_recovery?: (ctx: Partial_database_recoveryContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.partial_database_recovery`.
	 * @param ctx the parse tree
	 */
	exitPartial_database_recovery?: (ctx: Partial_database_recoveryContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.partial_database_recovery_10g`.
	 * @param ctx the parse tree
	 */
	enterPartial_database_recovery_10g?: (ctx: Partial_database_recovery_10gContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.partial_database_recovery_10g`.
	 * @param ctx the parse tree
	 */
	exitPartial_database_recovery_10g?: (ctx: Partial_database_recovery_10gContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.managed_standby_recovery`.
	 * @param ctx the parse tree
	 */
	enterManaged_standby_recovery?: (ctx: Managed_standby_recoveryContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.managed_standby_recovery`.
	 * @param ctx the parse tree
	 */
	exitManaged_standby_recovery?: (ctx: Managed_standby_recoveryContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.db_name`.
	 * @param ctx the parse tree
	 */
	enterDb_name?: (ctx: Db_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.db_name`.
	 * @param ctx the parse tree
	 */
	exitDb_name?: (ctx: Db_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.database_file_clauses`.
	 * @param ctx the parse tree
	 */
	enterDatabase_file_clauses?: (ctx: Database_file_clausesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.database_file_clauses`.
	 * @param ctx the parse tree
	 */
	exitDatabase_file_clauses?: (ctx: Database_file_clausesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.create_datafile_clause`.
	 * @param ctx the parse tree
	 */
	enterCreate_datafile_clause?: (ctx: Create_datafile_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.create_datafile_clause`.
	 * @param ctx the parse tree
	 */
	exitCreate_datafile_clause?: (ctx: Create_datafile_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_datafile_clause`.
	 * @param ctx the parse tree
	 */
	enterAlter_datafile_clause?: (ctx: Alter_datafile_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_datafile_clause`.
	 * @param ctx the parse tree
	 */
	exitAlter_datafile_clause?: (ctx: Alter_datafile_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_tempfile_clause`.
	 * @param ctx the parse tree
	 */
	enterAlter_tempfile_clause?: (ctx: Alter_tempfile_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_tempfile_clause`.
	 * @param ctx the parse tree
	 */
	exitAlter_tempfile_clause?: (ctx: Alter_tempfile_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.logfile_clauses`.
	 * @param ctx the parse tree
	 */
	enterLogfile_clauses?: (ctx: Logfile_clausesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.logfile_clauses`.
	 * @param ctx the parse tree
	 */
	exitLogfile_clauses?: (ctx: Logfile_clausesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.add_logfile_clauses`.
	 * @param ctx the parse tree
	 */
	enterAdd_logfile_clauses?: (ctx: Add_logfile_clausesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.add_logfile_clauses`.
	 * @param ctx the parse tree
	 */
	exitAdd_logfile_clauses?: (ctx: Add_logfile_clausesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.log_file_group`.
	 * @param ctx the parse tree
	 */
	enterLog_file_group?: (ctx: Log_file_groupContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.log_file_group`.
	 * @param ctx the parse tree
	 */
	exitLog_file_group?: (ctx: Log_file_groupContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.drop_logfile_clauses`.
	 * @param ctx the parse tree
	 */
	enterDrop_logfile_clauses?: (ctx: Drop_logfile_clausesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.drop_logfile_clauses`.
	 * @param ctx the parse tree
	 */
	exitDrop_logfile_clauses?: (ctx: Drop_logfile_clausesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.switch_logfile_clause`.
	 * @param ctx the parse tree
	 */
	enterSwitch_logfile_clause?: (ctx: Switch_logfile_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.switch_logfile_clause`.
	 * @param ctx the parse tree
	 */
	exitSwitch_logfile_clause?: (ctx: Switch_logfile_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.supplemental_db_logging`.
	 * @param ctx the parse tree
	 */
	enterSupplemental_db_logging?: (ctx: Supplemental_db_loggingContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.supplemental_db_logging`.
	 * @param ctx the parse tree
	 */
	exitSupplemental_db_logging?: (ctx: Supplemental_db_loggingContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.add_or_drop`.
	 * @param ctx the parse tree
	 */
	enterAdd_or_drop?: (ctx: Add_or_dropContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.add_or_drop`.
	 * @param ctx the parse tree
	 */
	exitAdd_or_drop?: (ctx: Add_or_dropContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.supplemental_plsql_clause`.
	 * @param ctx the parse tree
	 */
	enterSupplemental_plsql_clause?: (ctx: Supplemental_plsql_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.supplemental_plsql_clause`.
	 * @param ctx the parse tree
	 */
	exitSupplemental_plsql_clause?: (ctx: Supplemental_plsql_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.logfile_descriptor`.
	 * @param ctx the parse tree
	 */
	enterLogfile_descriptor?: (ctx: Logfile_descriptorContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.logfile_descriptor`.
	 * @param ctx the parse tree
	 */
	exitLogfile_descriptor?: (ctx: Logfile_descriptorContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.controlfile_clauses`.
	 * @param ctx the parse tree
	 */
	enterControlfile_clauses?: (ctx: Controlfile_clausesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.controlfile_clauses`.
	 * @param ctx the parse tree
	 */
	exitControlfile_clauses?: (ctx: Controlfile_clausesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.trace_file_clause`.
	 * @param ctx the parse tree
	 */
	enterTrace_file_clause?: (ctx: Trace_file_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.trace_file_clause`.
	 * @param ctx the parse tree
	 */
	exitTrace_file_clause?: (ctx: Trace_file_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.standby_database_clauses`.
	 * @param ctx the parse tree
	 */
	enterStandby_database_clauses?: (ctx: Standby_database_clausesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.standby_database_clauses`.
	 * @param ctx the parse tree
	 */
	exitStandby_database_clauses?: (ctx: Standby_database_clausesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.activate_standby_db_clause`.
	 * @param ctx the parse tree
	 */
	enterActivate_standby_db_clause?: (ctx: Activate_standby_db_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.activate_standby_db_clause`.
	 * @param ctx the parse tree
	 */
	exitActivate_standby_db_clause?: (ctx: Activate_standby_db_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.maximize_standby_db_clause`.
	 * @param ctx the parse tree
	 */
	enterMaximize_standby_db_clause?: (ctx: Maximize_standby_db_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.maximize_standby_db_clause`.
	 * @param ctx the parse tree
	 */
	exitMaximize_standby_db_clause?: (ctx: Maximize_standby_db_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.register_logfile_clause`.
	 * @param ctx the parse tree
	 */
	enterRegister_logfile_clause?: (ctx: Register_logfile_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.register_logfile_clause`.
	 * @param ctx the parse tree
	 */
	exitRegister_logfile_clause?: (ctx: Register_logfile_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.commit_switchover_clause`.
	 * @param ctx the parse tree
	 */
	enterCommit_switchover_clause?: (ctx: Commit_switchover_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.commit_switchover_clause`.
	 * @param ctx the parse tree
	 */
	exitCommit_switchover_clause?: (ctx: Commit_switchover_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.start_standby_clause`.
	 * @param ctx the parse tree
	 */
	enterStart_standby_clause?: (ctx: Start_standby_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.start_standby_clause`.
	 * @param ctx the parse tree
	 */
	exitStart_standby_clause?: (ctx: Start_standby_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.stop_standby_clause`.
	 * @param ctx the parse tree
	 */
	enterStop_standby_clause?: (ctx: Stop_standby_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.stop_standby_clause`.
	 * @param ctx the parse tree
	 */
	exitStop_standby_clause?: (ctx: Stop_standby_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.convert_database_clause`.
	 * @param ctx the parse tree
	 */
	enterConvert_database_clause?: (ctx: Convert_database_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.convert_database_clause`.
	 * @param ctx the parse tree
	 */
	exitConvert_database_clause?: (ctx: Convert_database_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.default_settings_clause`.
	 * @param ctx the parse tree
	 */
	enterDefault_settings_clause?: (ctx: Default_settings_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.default_settings_clause`.
	 * @param ctx the parse tree
	 */
	exitDefault_settings_clause?: (ctx: Default_settings_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.set_time_zone_clause`.
	 * @param ctx the parse tree
	 */
	enterSet_time_zone_clause?: (ctx: Set_time_zone_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.set_time_zone_clause`.
	 * @param ctx the parse tree
	 */
	exitSet_time_zone_clause?: (ctx: Set_time_zone_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.instance_clauses`.
	 * @param ctx the parse tree
	 */
	enterInstance_clauses?: (ctx: Instance_clausesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.instance_clauses`.
	 * @param ctx the parse tree
	 */
	exitInstance_clauses?: (ctx: Instance_clausesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.security_clause`.
	 * @param ctx the parse tree
	 */
	enterSecurity_clause?: (ctx: Security_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.security_clause`.
	 * @param ctx the parse tree
	 */
	exitSecurity_clause?: (ctx: Security_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.domain`.
	 * @param ctx the parse tree
	 */
	enterDomain?: (ctx: DomainContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.domain`.
	 * @param ctx the parse tree
	 */
	exitDomain?: (ctx: DomainContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.database`.
	 * @param ctx the parse tree
	 */
	enterDatabase?: (ctx: DatabaseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.database`.
	 * @param ctx the parse tree
	 */
	exitDatabase?: (ctx: DatabaseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.edition_name`.
	 * @param ctx the parse tree
	 */
	enterEdition_name?: (ctx: Edition_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.edition_name`.
	 * @param ctx the parse tree
	 */
	exitEdition_name?: (ctx: Edition_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.filenumber`.
	 * @param ctx the parse tree
	 */
	enterFilenumber?: (ctx: FilenumberContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.filenumber`.
	 * @param ctx the parse tree
	 */
	exitFilenumber?: (ctx: FilenumberContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.filename`.
	 * @param ctx the parse tree
	 */
	enterFilename?: (ctx: FilenameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.filename`.
	 * @param ctx the parse tree
	 */
	exitFilename?: (ctx: FilenameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_table`.
	 * @param ctx the parse tree
	 */
	enterAlter_table?: (ctx: Alter_tableContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_table`.
	 * @param ctx the parse tree
	 */
	exitAlter_table?: (ctx: Alter_tableContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_table_properties`.
	 * @param ctx the parse tree
	 */
	enterAlter_table_properties?: (ctx: Alter_table_propertiesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_table_properties`.
	 * @param ctx the parse tree
	 */
	exitAlter_table_properties?: (ctx: Alter_table_propertiesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_table_properties_1`.
	 * @param ctx the parse tree
	 */
	enterAlter_table_properties_1?: (ctx: Alter_table_properties_1Context) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_table_properties_1`.
	 * @param ctx the parse tree
	 */
	exitAlter_table_properties_1?: (ctx: Alter_table_properties_1Context) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_iot_clauses`.
	 * @param ctx the parse tree
	 */
	enterAlter_iot_clauses?: (ctx: Alter_iot_clausesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_iot_clauses`.
	 * @param ctx the parse tree
	 */
	exitAlter_iot_clauses?: (ctx: Alter_iot_clausesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_mapping_table_clause`.
	 * @param ctx the parse tree
	 */
	enterAlter_mapping_table_clause?: (ctx: Alter_mapping_table_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_mapping_table_clause`.
	 * @param ctx the parse tree
	 */
	exitAlter_mapping_table_clause?: (ctx: Alter_mapping_table_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_overflow_clause`.
	 * @param ctx the parse tree
	 */
	enterAlter_overflow_clause?: (ctx: Alter_overflow_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_overflow_clause`.
	 * @param ctx the parse tree
	 */
	exitAlter_overflow_clause?: (ctx: Alter_overflow_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.add_overflow_clause`.
	 * @param ctx the parse tree
	 */
	enterAdd_overflow_clause?: (ctx: Add_overflow_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.add_overflow_clause`.
	 * @param ctx the parse tree
	 */
	exitAdd_overflow_clause?: (ctx: Add_overflow_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.enable_disable_clause`.
	 * @param ctx the parse tree
	 */
	enterEnable_disable_clause?: (ctx: Enable_disable_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.enable_disable_clause`.
	 * @param ctx the parse tree
	 */
	exitEnable_disable_clause?: (ctx: Enable_disable_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.using_index_clause`.
	 * @param ctx the parse tree
	 */
	enterUsing_index_clause?: (ctx: Using_index_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.using_index_clause`.
	 * @param ctx the parse tree
	 */
	exitUsing_index_clause?: (ctx: Using_index_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.index_attributes`.
	 * @param ctx the parse tree
	 */
	enterIndex_attributes?: (ctx: Index_attributesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.index_attributes`.
	 * @param ctx the parse tree
	 */
	exitIndex_attributes?: (ctx: Index_attributesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.sort_or_nosort`.
	 * @param ctx the parse tree
	 */
	enterSort_or_nosort?: (ctx: Sort_or_nosortContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.sort_or_nosort`.
	 * @param ctx the parse tree
	 */
	exitSort_or_nosort?: (ctx: Sort_or_nosortContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.exceptions_clause`.
	 * @param ctx the parse tree
	 */
	enterExceptions_clause?: (ctx: Exceptions_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.exceptions_clause`.
	 * @param ctx the parse tree
	 */
	exitExceptions_clause?: (ctx: Exceptions_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.move_table_clause`.
	 * @param ctx the parse tree
	 */
	enterMove_table_clause?: (ctx: Move_table_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.move_table_clause`.
	 * @param ctx the parse tree
	 */
	exitMove_table_clause?: (ctx: Move_table_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.index_org_table_clause`.
	 * @param ctx the parse tree
	 */
	enterIndex_org_table_clause?: (ctx: Index_org_table_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.index_org_table_clause`.
	 * @param ctx the parse tree
	 */
	exitIndex_org_table_clause?: (ctx: Index_org_table_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.mapping_table_clause`.
	 * @param ctx the parse tree
	 */
	enterMapping_table_clause?: (ctx: Mapping_table_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.mapping_table_clause`.
	 * @param ctx the parse tree
	 */
	exitMapping_table_clause?: (ctx: Mapping_table_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.key_compression`.
	 * @param ctx the parse tree
	 */
	enterKey_compression?: (ctx: Key_compressionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.key_compression`.
	 * @param ctx the parse tree
	 */
	exitKey_compression?: (ctx: Key_compressionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.index_org_overflow_clause`.
	 * @param ctx the parse tree
	 */
	enterIndex_org_overflow_clause?: (ctx: Index_org_overflow_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.index_org_overflow_clause`.
	 * @param ctx the parse tree
	 */
	exitIndex_org_overflow_clause?: (ctx: Index_org_overflow_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.column_clauses`.
	 * @param ctx the parse tree
	 */
	enterColumn_clauses?: (ctx: Column_clausesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.column_clauses`.
	 * @param ctx the parse tree
	 */
	exitColumn_clauses?: (ctx: Column_clausesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.modify_collection_retrieval`.
	 * @param ctx the parse tree
	 */
	enterModify_collection_retrieval?: (ctx: Modify_collection_retrievalContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.modify_collection_retrieval`.
	 * @param ctx the parse tree
	 */
	exitModify_collection_retrieval?: (ctx: Modify_collection_retrievalContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.collection_item`.
	 * @param ctx the parse tree
	 */
	enterCollection_item?: (ctx: Collection_itemContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.collection_item`.
	 * @param ctx the parse tree
	 */
	exitCollection_item?: (ctx: Collection_itemContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.rename_column_clause`.
	 * @param ctx the parse tree
	 */
	enterRename_column_clause?: (ctx: Rename_column_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.rename_column_clause`.
	 * @param ctx the parse tree
	 */
	exitRename_column_clause?: (ctx: Rename_column_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.old_column_name`.
	 * @param ctx the parse tree
	 */
	enterOld_column_name?: (ctx: Old_column_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.old_column_name`.
	 * @param ctx the parse tree
	 */
	exitOld_column_name?: (ctx: Old_column_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.new_column_name`.
	 * @param ctx the parse tree
	 */
	enterNew_column_name?: (ctx: New_column_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.new_column_name`.
	 * @param ctx the parse tree
	 */
	exitNew_column_name?: (ctx: New_column_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.add_modify_drop_column_clauses`.
	 * @param ctx the parse tree
	 */
	enterAdd_modify_drop_column_clauses?: (ctx: Add_modify_drop_column_clausesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.add_modify_drop_column_clauses`.
	 * @param ctx the parse tree
	 */
	exitAdd_modify_drop_column_clauses?: (ctx: Add_modify_drop_column_clausesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.drop_column_clause`.
	 * @param ctx the parse tree
	 */
	enterDrop_column_clause?: (ctx: Drop_column_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.drop_column_clause`.
	 * @param ctx the parse tree
	 */
	exitDrop_column_clause?: (ctx: Drop_column_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.modify_column_clauses`.
	 * @param ctx the parse tree
	 */
	enterModify_column_clauses?: (ctx: Modify_column_clausesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.modify_column_clauses`.
	 * @param ctx the parse tree
	 */
	exitModify_column_clauses?: (ctx: Modify_column_clausesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.modify_col_properties`.
	 * @param ctx the parse tree
	 */
	enterModify_col_properties?: (ctx: Modify_col_propertiesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.modify_col_properties`.
	 * @param ctx the parse tree
	 */
	exitModify_col_properties?: (ctx: Modify_col_propertiesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.modify_col_substitutable`.
	 * @param ctx the parse tree
	 */
	enterModify_col_substitutable?: (ctx: Modify_col_substitutableContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.modify_col_substitutable`.
	 * @param ctx the parse tree
	 */
	exitModify_col_substitutable?: (ctx: Modify_col_substitutableContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.add_column_clause`.
	 * @param ctx the parse tree
	 */
	enterAdd_column_clause?: (ctx: Add_column_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.add_column_clause`.
	 * @param ctx the parse tree
	 */
	exitAdd_column_clause?: (ctx: Add_column_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.alter_varray_col_properties`.
	 * @param ctx the parse tree
	 */
	enterAlter_varray_col_properties?: (ctx: Alter_varray_col_propertiesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.alter_varray_col_properties`.
	 * @param ctx the parse tree
	 */
	exitAlter_varray_col_properties?: (ctx: Alter_varray_col_propertiesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.varray_col_properties`.
	 * @param ctx the parse tree
	 */
	enterVarray_col_properties?: (ctx: Varray_col_propertiesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.varray_col_properties`.
	 * @param ctx the parse tree
	 */
	exitVarray_col_properties?: (ctx: Varray_col_propertiesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.varray_storage_clause`.
	 * @param ctx the parse tree
	 */
	enterVarray_storage_clause?: (ctx: Varray_storage_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.varray_storage_clause`.
	 * @param ctx the parse tree
	 */
	exitVarray_storage_clause?: (ctx: Varray_storage_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.lob_segname`.
	 * @param ctx the parse tree
	 */
	enterLob_segname?: (ctx: Lob_segnameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.lob_segname`.
	 * @param ctx the parse tree
	 */
	exitLob_segname?: (ctx: Lob_segnameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.lob_item`.
	 * @param ctx the parse tree
	 */
	enterLob_item?: (ctx: Lob_itemContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.lob_item`.
	 * @param ctx the parse tree
	 */
	exitLob_item?: (ctx: Lob_itemContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.lob_storage_parameters`.
	 * @param ctx the parse tree
	 */
	enterLob_storage_parameters?: (ctx: Lob_storage_parametersContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.lob_storage_parameters`.
	 * @param ctx the parse tree
	 */
	exitLob_storage_parameters?: (ctx: Lob_storage_parametersContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.lob_storage_clause`.
	 * @param ctx the parse tree
	 */
	enterLob_storage_clause?: (ctx: Lob_storage_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.lob_storage_clause`.
	 * @param ctx the parse tree
	 */
	exitLob_storage_clause?: (ctx: Lob_storage_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.modify_lob_storage_clause`.
	 * @param ctx the parse tree
	 */
	enterModify_lob_storage_clause?: (ctx: Modify_lob_storage_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.modify_lob_storage_clause`.
	 * @param ctx the parse tree
	 */
	exitModify_lob_storage_clause?: (ctx: Modify_lob_storage_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.modify_lob_parameters`.
	 * @param ctx the parse tree
	 */
	enterModify_lob_parameters?: (ctx: Modify_lob_parametersContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.modify_lob_parameters`.
	 * @param ctx the parse tree
	 */
	exitModify_lob_parameters?: (ctx: Modify_lob_parametersContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.lob_parameters`.
	 * @param ctx the parse tree
	 */
	enterLob_parameters?: (ctx: Lob_parametersContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.lob_parameters`.
	 * @param ctx the parse tree
	 */
	exitLob_parameters?: (ctx: Lob_parametersContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.lob_deduplicate_clause`.
	 * @param ctx the parse tree
	 */
	enterLob_deduplicate_clause?: (ctx: Lob_deduplicate_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.lob_deduplicate_clause`.
	 * @param ctx the parse tree
	 */
	exitLob_deduplicate_clause?: (ctx: Lob_deduplicate_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.lob_compression_clause`.
	 * @param ctx the parse tree
	 */
	enterLob_compression_clause?: (ctx: Lob_compression_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.lob_compression_clause`.
	 * @param ctx the parse tree
	 */
	exitLob_compression_clause?: (ctx: Lob_compression_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.lob_retention_clause`.
	 * @param ctx the parse tree
	 */
	enterLob_retention_clause?: (ctx: Lob_retention_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.lob_retention_clause`.
	 * @param ctx the parse tree
	 */
	exitLob_retention_clause?: (ctx: Lob_retention_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.encryption_spec`.
	 * @param ctx the parse tree
	 */
	enterEncryption_spec?: (ctx: Encryption_specContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.encryption_spec`.
	 * @param ctx the parse tree
	 */
	exitEncryption_spec?: (ctx: Encryption_specContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.tablespace`.
	 * @param ctx the parse tree
	 */
	enterTablespace?: (ctx: TablespaceContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.tablespace`.
	 * @param ctx the parse tree
	 */
	exitTablespace?: (ctx: TablespaceContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.varray_item`.
	 * @param ctx the parse tree
	 */
	enterVarray_item?: (ctx: Varray_itemContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.varray_item`.
	 * @param ctx the parse tree
	 */
	exitVarray_item?: (ctx: Varray_itemContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.column_properties`.
	 * @param ctx the parse tree
	 */
	enterColumn_properties?: (ctx: Column_propertiesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.column_properties`.
	 * @param ctx the parse tree
	 */
	exitColumn_properties?: (ctx: Column_propertiesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.period_definition`.
	 * @param ctx the parse tree
	 */
	enterPeriod_definition?: (ctx: Period_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.period_definition`.
	 * @param ctx the parse tree
	 */
	exitPeriod_definition?: (ctx: Period_definitionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.start_time_column`.
	 * @param ctx the parse tree
	 */
	enterStart_time_column?: (ctx: Start_time_columnContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.start_time_column`.
	 * @param ctx the parse tree
	 */
	exitStart_time_column?: (ctx: Start_time_columnContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.end_time_column`.
	 * @param ctx the parse tree
	 */
	enterEnd_time_column?: (ctx: End_time_columnContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.end_time_column`.
	 * @param ctx the parse tree
	 */
	exitEnd_time_column?: (ctx: End_time_columnContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.column_definition`.
	 * @param ctx the parse tree
	 */
	enterColumn_definition?: (ctx: Column_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.column_definition`.
	 * @param ctx the parse tree
	 */
	exitColumn_definition?: (ctx: Column_definitionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.virtual_column_definition`.
	 * @param ctx the parse tree
	 */
	enterVirtual_column_definition?: (ctx: Virtual_column_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.virtual_column_definition`.
	 * @param ctx the parse tree
	 */
	exitVirtual_column_definition?: (ctx: Virtual_column_definitionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.autogenerated_sequence_definition`.
	 * @param ctx the parse tree
	 */
	enterAutogenerated_sequence_definition?: (ctx: Autogenerated_sequence_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.autogenerated_sequence_definition`.
	 * @param ctx the parse tree
	 */
	exitAutogenerated_sequence_definition?: (ctx: Autogenerated_sequence_definitionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.out_of_line_part_storage`.
	 * @param ctx the parse tree
	 */
	enterOut_of_line_part_storage?: (ctx: Out_of_line_part_storageContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.out_of_line_part_storage`.
	 * @param ctx the parse tree
	 */
	exitOut_of_line_part_storage?: (ctx: Out_of_line_part_storageContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.nested_table_col_properties`.
	 * @param ctx the parse tree
	 */
	enterNested_table_col_properties?: (ctx: Nested_table_col_propertiesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.nested_table_col_properties`.
	 * @param ctx the parse tree
	 */
	exitNested_table_col_properties?: (ctx: Nested_table_col_propertiesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.nested_item`.
	 * @param ctx the parse tree
	 */
	enterNested_item?: (ctx: Nested_itemContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.nested_item`.
	 * @param ctx the parse tree
	 */
	exitNested_item?: (ctx: Nested_itemContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.substitutable_column_clause`.
	 * @param ctx the parse tree
	 */
	enterSubstitutable_column_clause?: (ctx: Substitutable_column_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.substitutable_column_clause`.
	 * @param ctx the parse tree
	 */
	exitSubstitutable_column_clause?: (ctx: Substitutable_column_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.partition_name`.
	 * @param ctx the parse tree
	 */
	enterPartition_name?: (ctx: Partition_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.partition_name`.
	 * @param ctx the parse tree
	 */
	exitPartition_name?: (ctx: Partition_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.supplemental_logging_props`.
	 * @param ctx the parse tree
	 */
	enterSupplemental_logging_props?: (ctx: Supplemental_logging_propsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.supplemental_logging_props`.
	 * @param ctx the parse tree
	 */
	exitSupplemental_logging_props?: (ctx: Supplemental_logging_propsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.column_or_attribute`.
	 * @param ctx the parse tree
	 */
	enterColumn_or_attribute?: (ctx: Column_or_attributeContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.column_or_attribute`.
	 * @param ctx the parse tree
	 */
	exitColumn_or_attribute?: (ctx: Column_or_attributeContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.object_type_col_properties`.
	 * @param ctx the parse tree
	 */
	enterObject_type_col_properties?: (ctx: Object_type_col_propertiesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.object_type_col_properties`.
	 * @param ctx the parse tree
	 */
	exitObject_type_col_properties?: (ctx: Object_type_col_propertiesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.constraint_clauses`.
	 * @param ctx the parse tree
	 */
	enterConstraint_clauses?: (ctx: Constraint_clausesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.constraint_clauses`.
	 * @param ctx the parse tree
	 */
	exitConstraint_clauses?: (ctx: Constraint_clausesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.old_constraint_name`.
	 * @param ctx the parse tree
	 */
	enterOld_constraint_name?: (ctx: Old_constraint_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.old_constraint_name`.
	 * @param ctx the parse tree
	 */
	exitOld_constraint_name?: (ctx: Old_constraint_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.new_constraint_name`.
	 * @param ctx the parse tree
	 */
	enterNew_constraint_name?: (ctx: New_constraint_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.new_constraint_name`.
	 * @param ctx the parse tree
	 */
	exitNew_constraint_name?: (ctx: New_constraint_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.drop_constraint_clause`.
	 * @param ctx the parse tree
	 */
	enterDrop_constraint_clause?: (ctx: Drop_constraint_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.drop_constraint_clause`.
	 * @param ctx the parse tree
	 */
	exitDrop_constraint_clause?: (ctx: Drop_constraint_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.drop_primary_key_or_unique_or_generic_clause`.
	 * @param ctx the parse tree
	 */
	enterDrop_primary_key_or_unique_or_generic_clause?: (ctx: Drop_primary_key_or_unique_or_generic_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.drop_primary_key_or_unique_or_generic_clause`.
	 * @param ctx the parse tree
	 */
	exitDrop_primary_key_or_unique_or_generic_clause?: (ctx: Drop_primary_key_or_unique_or_generic_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.add_constraint`.
	 * @param ctx the parse tree
	 */
	enterAdd_constraint?: (ctx: Add_constraintContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.add_constraint`.
	 * @param ctx the parse tree
	 */
	exitAdd_constraint?: (ctx: Add_constraintContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.add_constraint_clause`.
	 * @param ctx the parse tree
	 */
	enterAdd_constraint_clause?: (ctx: Add_constraint_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.add_constraint_clause`.
	 * @param ctx the parse tree
	 */
	exitAdd_constraint_clause?: (ctx: Add_constraint_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.check_constraint`.
	 * @param ctx the parse tree
	 */
	enterCheck_constraint?: (ctx: Check_constraintContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.check_constraint`.
	 * @param ctx the parse tree
	 */
	exitCheck_constraint?: (ctx: Check_constraintContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.drop_constraint`.
	 * @param ctx the parse tree
	 */
	enterDrop_constraint?: (ctx: Drop_constraintContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.drop_constraint`.
	 * @param ctx the parse tree
	 */
	exitDrop_constraint?: (ctx: Drop_constraintContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.enable_constraint`.
	 * @param ctx the parse tree
	 */
	enterEnable_constraint?: (ctx: Enable_constraintContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.enable_constraint`.
	 * @param ctx the parse tree
	 */
	exitEnable_constraint?: (ctx: Enable_constraintContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.disable_constraint`.
	 * @param ctx the parse tree
	 */
	enterDisable_constraint?: (ctx: Disable_constraintContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.disable_constraint`.
	 * @param ctx the parse tree
	 */
	exitDisable_constraint?: (ctx: Disable_constraintContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.foreign_key_clause`.
	 * @param ctx the parse tree
	 */
	enterForeign_key_clause?: (ctx: Foreign_key_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.foreign_key_clause`.
	 * @param ctx the parse tree
	 */
	exitForeign_key_clause?: (ctx: Foreign_key_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.references_clause`.
	 * @param ctx the parse tree
	 */
	enterReferences_clause?: (ctx: References_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.references_clause`.
	 * @param ctx the parse tree
	 */
	exitReferences_clause?: (ctx: References_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.on_delete_clause`.
	 * @param ctx the parse tree
	 */
	enterOn_delete_clause?: (ctx: On_delete_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.on_delete_clause`.
	 * @param ctx the parse tree
	 */
	exitOn_delete_clause?: (ctx: On_delete_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.unique_key_clause`.
	 * @param ctx the parse tree
	 */
	enterUnique_key_clause?: (ctx: Unique_key_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.unique_key_clause`.
	 * @param ctx the parse tree
	 */
	exitUnique_key_clause?: (ctx: Unique_key_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.primary_key_clause`.
	 * @param ctx the parse tree
	 */
	enterPrimary_key_clause?: (ctx: Primary_key_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.primary_key_clause`.
	 * @param ctx the parse tree
	 */
	exitPrimary_key_clause?: (ctx: Primary_key_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.anonymous_block`.
	 * @param ctx the parse tree
	 */
	enterAnonymous_block?: (ctx: Anonymous_blockContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.anonymous_block`.
	 * @param ctx the parse tree
	 */
	exitAnonymous_block?: (ctx: Anonymous_blockContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.invoker_rights_clause`.
	 * @param ctx the parse tree
	 */
	enterInvoker_rights_clause?: (ctx: Invoker_rights_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.invoker_rights_clause`.
	 * @param ctx the parse tree
	 */
	exitInvoker_rights_clause?: (ctx: Invoker_rights_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.call_spec`.
	 * @param ctx the parse tree
	 */
	enterCall_spec?: (ctx: Call_specContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.call_spec`.
	 * @param ctx the parse tree
	 */
	exitCall_spec?: (ctx: Call_specContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.java_spec`.
	 * @param ctx the parse tree
	 */
	enterJava_spec?: (ctx: Java_specContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.java_spec`.
	 * @param ctx the parse tree
	 */
	exitJava_spec?: (ctx: Java_specContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.c_spec`.
	 * @param ctx the parse tree
	 */
	enterC_spec?: (ctx: C_specContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.c_spec`.
	 * @param ctx the parse tree
	 */
	exitC_spec?: (ctx: C_specContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.c_agent_in_clause`.
	 * @param ctx the parse tree
	 */
	enterC_agent_in_clause?: (ctx: C_agent_in_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.c_agent_in_clause`.
	 * @param ctx the parse tree
	 */
	exitC_agent_in_clause?: (ctx: C_agent_in_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.c_parameters_clause`.
	 * @param ctx the parse tree
	 */
	enterC_parameters_clause?: (ctx: C_parameters_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.c_parameters_clause`.
	 * @param ctx the parse tree
	 */
	exitC_parameters_clause?: (ctx: C_parameters_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.default_value_part`.
	 * @param ctx the parse tree
	 */
	enterDefault_value_part?: (ctx: Default_value_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.default_value_part`.
	 * @param ctx the parse tree
	 */
	exitDefault_value_part?: (ctx: Default_value_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.seq_of_declare_specs`.
	 * @param ctx the parse tree
	 */
	enterSeq_of_declare_specs?: (ctx: Seq_of_declare_specsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.seq_of_declare_specs`.
	 * @param ctx the parse tree
	 */
	exitSeq_of_declare_specs?: (ctx: Seq_of_declare_specsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.declare_spec`.
	 * @param ctx the parse tree
	 */
	enterDeclare_spec?: (ctx: Declare_specContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.declare_spec`.
	 * @param ctx the parse tree
	 */
	exitDeclare_spec?: (ctx: Declare_specContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.variable_declaration`.
	 * @param ctx the parse tree
	 */
	enterVariable_declaration?: (ctx: Variable_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.variable_declaration`.
	 * @param ctx the parse tree
	 */
	exitVariable_declaration?: (ctx: Variable_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.subtype_declaration`.
	 * @param ctx the parse tree
	 */
	enterSubtype_declaration?: (ctx: Subtype_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.subtype_declaration`.
	 * @param ctx the parse tree
	 */
	exitSubtype_declaration?: (ctx: Subtype_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.cursor_declaration`.
	 * @param ctx the parse tree
	 */
	enterCursor_declaration?: (ctx: Cursor_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.cursor_declaration`.
	 * @param ctx the parse tree
	 */
	exitCursor_declaration?: (ctx: Cursor_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.parameter_spec`.
	 * @param ctx the parse tree
	 */
	enterParameter_spec?: (ctx: Parameter_specContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.parameter_spec`.
	 * @param ctx the parse tree
	 */
	exitParameter_spec?: (ctx: Parameter_specContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.exception_declaration`.
	 * @param ctx the parse tree
	 */
	enterException_declaration?: (ctx: Exception_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.exception_declaration`.
	 * @param ctx the parse tree
	 */
	exitException_declaration?: (ctx: Exception_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.pragma_declaration`.
	 * @param ctx the parse tree
	 */
	enterPragma_declaration?: (ctx: Pragma_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.pragma_declaration`.
	 * @param ctx the parse tree
	 */
	exitPragma_declaration?: (ctx: Pragma_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.record_type_def`.
	 * @param ctx the parse tree
	 */
	enterRecord_type_def?: (ctx: Record_type_defContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.record_type_def`.
	 * @param ctx the parse tree
	 */
	exitRecord_type_def?: (ctx: Record_type_defContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.field_spec`.
	 * @param ctx the parse tree
	 */
	enterField_spec?: (ctx: Field_specContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.field_spec`.
	 * @param ctx the parse tree
	 */
	exitField_spec?: (ctx: Field_specContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.ref_cursor_type_def`.
	 * @param ctx the parse tree
	 */
	enterRef_cursor_type_def?: (ctx: Ref_cursor_type_defContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.ref_cursor_type_def`.
	 * @param ctx the parse tree
	 */
	exitRef_cursor_type_def?: (ctx: Ref_cursor_type_defContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.type_declaration`.
	 * @param ctx the parse tree
	 */
	enterType_declaration?: (ctx: Type_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.type_declaration`.
	 * @param ctx the parse tree
	 */
	exitType_declaration?: (ctx: Type_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.table_type_def`.
	 * @param ctx the parse tree
	 */
	enterTable_type_def?: (ctx: Table_type_defContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.table_type_def`.
	 * @param ctx the parse tree
	 */
	exitTable_type_def?: (ctx: Table_type_defContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.table_indexed_by_part`.
	 * @param ctx the parse tree
	 */
	enterTable_indexed_by_part?: (ctx: Table_indexed_by_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.table_indexed_by_part`.
	 * @param ctx the parse tree
	 */
	exitTable_indexed_by_part?: (ctx: Table_indexed_by_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.varray_type_def`.
	 * @param ctx the parse tree
	 */
	enterVarray_type_def?: (ctx: Varray_type_defContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.varray_type_def`.
	 * @param ctx the parse tree
	 */
	exitVarray_type_def?: (ctx: Varray_type_defContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.seq_of_statements`.
	 * @param ctx the parse tree
	 */
	enterSeq_of_statements?: (ctx: Seq_of_statementsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.seq_of_statements`.
	 * @param ctx the parse tree
	 */
	exitSeq_of_statements?: (ctx: Seq_of_statementsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.label_declaration`.
	 * @param ctx the parse tree
	 */
	enterLabel_declaration?: (ctx: Label_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.label_declaration`.
	 * @param ctx the parse tree
	 */
	exitLabel_declaration?: (ctx: Label_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.swallow_to_semi`.
	 * @param ctx the parse tree
	 */
	enterSwallow_to_semi?: (ctx: Swallow_to_semiContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.swallow_to_semi`.
	 * @param ctx the parse tree
	 */
	exitSwallow_to_semi?: (ctx: Swallow_to_semiContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.assignment_statement`.
	 * @param ctx the parse tree
	 */
	enterAssignment_statement?: (ctx: Assignment_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.assignment_statement`.
	 * @param ctx the parse tree
	 */
	exitAssignment_statement?: (ctx: Assignment_statementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.continue_statement`.
	 * @param ctx the parse tree
	 */
	enterContinue_statement?: (ctx: Continue_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.continue_statement`.
	 * @param ctx the parse tree
	 */
	exitContinue_statement?: (ctx: Continue_statementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.exit_statement`.
	 * @param ctx the parse tree
	 */
	enterExit_statement?: (ctx: Exit_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.exit_statement`.
	 * @param ctx the parse tree
	 */
	exitExit_statement?: (ctx: Exit_statementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.goto_statement`.
	 * @param ctx the parse tree
	 */
	enterGoto_statement?: (ctx: Goto_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.goto_statement`.
	 * @param ctx the parse tree
	 */
	exitGoto_statement?: (ctx: Goto_statementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.if_statement`.
	 * @param ctx the parse tree
	 */
	enterIf_statement?: (ctx: If_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.if_statement`.
	 * @param ctx the parse tree
	 */
	exitIf_statement?: (ctx: If_statementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.elsif_part`.
	 * @param ctx the parse tree
	 */
	enterElsif_part?: (ctx: Elsif_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.elsif_part`.
	 * @param ctx the parse tree
	 */
	exitElsif_part?: (ctx: Elsif_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.else_part`.
	 * @param ctx the parse tree
	 */
	enterElse_part?: (ctx: Else_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.else_part`.
	 * @param ctx the parse tree
	 */
	exitElse_part?: (ctx: Else_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.loop_statement`.
	 * @param ctx the parse tree
	 */
	enterLoop_statement?: (ctx: Loop_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.loop_statement`.
	 * @param ctx the parse tree
	 */
	exitLoop_statement?: (ctx: Loop_statementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.cursor_loop_param`.
	 * @param ctx the parse tree
	 */
	enterCursor_loop_param?: (ctx: Cursor_loop_paramContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.cursor_loop_param`.
	 * @param ctx the parse tree
	 */
	exitCursor_loop_param?: (ctx: Cursor_loop_paramContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.forall_statement`.
	 * @param ctx the parse tree
	 */
	enterForall_statement?: (ctx: Forall_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.forall_statement`.
	 * @param ctx the parse tree
	 */
	exitForall_statement?: (ctx: Forall_statementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.bounds_clause`.
	 * @param ctx the parse tree
	 */
	enterBounds_clause?: (ctx: Bounds_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.bounds_clause`.
	 * @param ctx the parse tree
	 */
	exitBounds_clause?: (ctx: Bounds_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.between_bound`.
	 * @param ctx the parse tree
	 */
	enterBetween_bound?: (ctx: Between_boundContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.between_bound`.
	 * @param ctx the parse tree
	 */
	exitBetween_bound?: (ctx: Between_boundContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.lower_bound`.
	 * @param ctx the parse tree
	 */
	enterLower_bound?: (ctx: Lower_boundContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.lower_bound`.
	 * @param ctx the parse tree
	 */
	exitLower_bound?: (ctx: Lower_boundContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.upper_bound`.
	 * @param ctx the parse tree
	 */
	enterUpper_bound?: (ctx: Upper_boundContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.upper_bound`.
	 * @param ctx the parse tree
	 */
	exitUpper_bound?: (ctx: Upper_boundContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.null_statement`.
	 * @param ctx the parse tree
	 */
	enterNull_statement?: (ctx: Null_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.null_statement`.
	 * @param ctx the parse tree
	 */
	exitNull_statement?: (ctx: Null_statementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.raise_statement`.
	 * @param ctx the parse tree
	 */
	enterRaise_statement?: (ctx: Raise_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.raise_statement`.
	 * @param ctx the parse tree
	 */
	exitRaise_statement?: (ctx: Raise_statementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.return_statement`.
	 * @param ctx the parse tree
	 */
	enterReturn_statement?: (ctx: Return_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.return_statement`.
	 * @param ctx the parse tree
	 */
	exitReturn_statement?: (ctx: Return_statementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterFunction_call?: (ctx: Function_callContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitFunction_call?: (ctx: Function_callContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.procedure_call`.
	 * @param ctx the parse tree
	 */
	enterProcedure_call?: (ctx: Procedure_callContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.procedure_call`.
	 * @param ctx the parse tree
	 */
	exitProcedure_call?: (ctx: Procedure_callContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.pipe_row_statement`.
	 * @param ctx the parse tree
	 */
	enterPipe_row_statement?: (ctx: Pipe_row_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.pipe_row_statement`.
	 * @param ctx the parse tree
	 */
	exitPipe_row_statement?: (ctx: Pipe_row_statementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.body`.
	 * @param ctx the parse tree
	 */
	enterBody?: (ctx: BodyContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.body`.
	 * @param ctx the parse tree
	 */
	exitBody?: (ctx: BodyContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.exception_handler`.
	 * @param ctx the parse tree
	 */
	enterException_handler?: (ctx: Exception_handlerContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.exception_handler`.
	 * @param ctx the parse tree
	 */
	exitException_handler?: (ctx: Exception_handlerContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.trigger_block`.
	 * @param ctx the parse tree
	 */
	enterTrigger_block?: (ctx: Trigger_blockContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.trigger_block`.
	 * @param ctx the parse tree
	 */
	exitTrigger_block?: (ctx: Trigger_blockContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.sql_statement`.
	 * @param ctx the parse tree
	 */
	enterSql_statement?: (ctx: Sql_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.sql_statement`.
	 * @param ctx the parse tree
	 */
	exitSql_statement?: (ctx: Sql_statementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.execute_immediate`.
	 * @param ctx the parse tree
	 */
	enterExecute_immediate?: (ctx: Execute_immediateContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.execute_immediate`.
	 * @param ctx the parse tree
	 */
	exitExecute_immediate?: (ctx: Execute_immediateContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.dynamic_returning_clause`.
	 * @param ctx the parse tree
	 */
	enterDynamic_returning_clause?: (ctx: Dynamic_returning_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.dynamic_returning_clause`.
	 * @param ctx the parse tree
	 */
	exitDynamic_returning_clause?: (ctx: Dynamic_returning_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.data_manipulation_language_statements`.
	 * @param ctx the parse tree
	 */
	enterData_manipulation_language_statements?: (ctx: Data_manipulation_language_statementsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.data_manipulation_language_statements`.
	 * @param ctx the parse tree
	 */
	exitData_manipulation_language_statements?: (ctx: Data_manipulation_language_statementsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.cursor_manipulation_statements`.
	 * @param ctx the parse tree
	 */
	enterCursor_manipulation_statements?: (ctx: Cursor_manipulation_statementsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.cursor_manipulation_statements`.
	 * @param ctx the parse tree
	 */
	exitCursor_manipulation_statements?: (ctx: Cursor_manipulation_statementsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.close_statement`.
	 * @param ctx the parse tree
	 */
	enterClose_statement?: (ctx: Close_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.close_statement`.
	 * @param ctx the parse tree
	 */
	exitClose_statement?: (ctx: Close_statementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.open_statement`.
	 * @param ctx the parse tree
	 */
	enterOpen_statement?: (ctx: Open_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.open_statement`.
	 * @param ctx the parse tree
	 */
	exitOpen_statement?: (ctx: Open_statementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.fetch_statement`.
	 * @param ctx the parse tree
	 */
	enterFetch_statement?: (ctx: Fetch_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.fetch_statement`.
	 * @param ctx the parse tree
	 */
	exitFetch_statement?: (ctx: Fetch_statementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.open_for_statement`.
	 * @param ctx the parse tree
	 */
	enterOpen_for_statement?: (ctx: Open_for_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.open_for_statement`.
	 * @param ctx the parse tree
	 */
	exitOpen_for_statement?: (ctx: Open_for_statementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.transaction_control_statements`.
	 * @param ctx the parse tree
	 */
	enterTransaction_control_statements?: (ctx: Transaction_control_statementsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.transaction_control_statements`.
	 * @param ctx the parse tree
	 */
	exitTransaction_control_statements?: (ctx: Transaction_control_statementsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.set_transaction_command`.
	 * @param ctx the parse tree
	 */
	enterSet_transaction_command?: (ctx: Set_transaction_commandContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.set_transaction_command`.
	 * @param ctx the parse tree
	 */
	exitSet_transaction_command?: (ctx: Set_transaction_commandContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.set_constraint_command`.
	 * @param ctx the parse tree
	 */
	enterSet_constraint_command?: (ctx: Set_constraint_commandContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.set_constraint_command`.
	 * @param ctx the parse tree
	 */
	exitSet_constraint_command?: (ctx: Set_constraint_commandContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.commit_statement`.
	 * @param ctx the parse tree
	 */
	enterCommit_statement?: (ctx: Commit_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.commit_statement`.
	 * @param ctx the parse tree
	 */
	exitCommit_statement?: (ctx: Commit_statementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.write_clause`.
	 * @param ctx the parse tree
	 */
	enterWrite_clause?: (ctx: Write_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.write_clause`.
	 * @param ctx the parse tree
	 */
	exitWrite_clause?: (ctx: Write_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.rollback_statement`.
	 * @param ctx the parse tree
	 */
	enterRollback_statement?: (ctx: Rollback_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.rollback_statement`.
	 * @param ctx the parse tree
	 */
	exitRollback_statement?: (ctx: Rollback_statementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.savepoint_statement`.
	 * @param ctx the parse tree
	 */
	enterSavepoint_statement?: (ctx: Savepoint_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.savepoint_statement`.
	 * @param ctx the parse tree
	 */
	exitSavepoint_statement?: (ctx: Savepoint_statementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.explain_statement`.
	 * @param ctx the parse tree
	 */
	enterExplain_statement?: (ctx: Explain_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.explain_statement`.
	 * @param ctx the parse tree
	 */
	exitExplain_statement?: (ctx: Explain_statementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.select_only_statement`.
	 * @param ctx the parse tree
	 */
	enterSelect_only_statement?: (ctx: Select_only_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.select_only_statement`.
	 * @param ctx the parse tree
	 */
	exitSelect_only_statement?: (ctx: Select_only_statementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.select_statement`.
	 * @param ctx the parse tree
	 */
	enterSelect_statement?: (ctx: Select_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.select_statement`.
	 * @param ctx the parse tree
	 */
	exitSelect_statement?: (ctx: Select_statementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.subquery_factoring_clause`.
	 * @param ctx the parse tree
	 */
	enterSubquery_factoring_clause?: (ctx: Subquery_factoring_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.subquery_factoring_clause`.
	 * @param ctx the parse tree
	 */
	exitSubquery_factoring_clause?: (ctx: Subquery_factoring_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.factoring_element`.
	 * @param ctx the parse tree
	 */
	enterFactoring_element?: (ctx: Factoring_elementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.factoring_element`.
	 * @param ctx the parse tree
	 */
	exitFactoring_element?: (ctx: Factoring_elementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.search_clause`.
	 * @param ctx the parse tree
	 */
	enterSearch_clause?: (ctx: Search_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.search_clause`.
	 * @param ctx the parse tree
	 */
	exitSearch_clause?: (ctx: Search_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.cycle_clause`.
	 * @param ctx the parse tree
	 */
	enterCycle_clause?: (ctx: Cycle_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.cycle_clause`.
	 * @param ctx the parse tree
	 */
	exitCycle_clause?: (ctx: Cycle_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.subquery`.
	 * @param ctx the parse tree
	 */
	enterSubquery?: (ctx: SubqueryContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.subquery`.
	 * @param ctx the parse tree
	 */
	exitSubquery?: (ctx: SubqueryContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.subquery_basic_elements`.
	 * @param ctx the parse tree
	 */
	enterSubquery_basic_elements?: (ctx: Subquery_basic_elementsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.subquery_basic_elements`.
	 * @param ctx the parse tree
	 */
	exitSubquery_basic_elements?: (ctx: Subquery_basic_elementsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.subquery_operation_part`.
	 * @param ctx the parse tree
	 */
	enterSubquery_operation_part?: (ctx: Subquery_operation_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.subquery_operation_part`.
	 * @param ctx the parse tree
	 */
	exitSubquery_operation_part?: (ctx: Subquery_operation_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.query_block`.
	 * @param ctx the parse tree
	 */
	enterQuery_block?: (ctx: Query_blockContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.query_block`.
	 * @param ctx the parse tree
	 */
	exitQuery_block?: (ctx: Query_blockContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.selected_list`.
	 * @param ctx the parse tree
	 */
	enterSelected_list?: (ctx: Selected_listContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.selected_list`.
	 * @param ctx the parse tree
	 */
	exitSelected_list?: (ctx: Selected_listContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.from_clause`.
	 * @param ctx the parse tree
	 */
	enterFrom_clause?: (ctx: From_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.from_clause`.
	 * @param ctx the parse tree
	 */
	exitFrom_clause?: (ctx: From_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.select_list_elements`.
	 * @param ctx the parse tree
	 */
	enterSelect_list_elements?: (ctx: Select_list_elementsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.select_list_elements`.
	 * @param ctx the parse tree
	 */
	exitSelect_list_elements?: (ctx: Select_list_elementsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.table_ref_list`.
	 * @param ctx the parse tree
	 */
	enterTable_ref_list?: (ctx: Table_ref_listContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.table_ref_list`.
	 * @param ctx the parse tree
	 */
	exitTable_ref_list?: (ctx: Table_ref_listContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.table_ref`.
	 * @param ctx the parse tree
	 */
	enterTable_ref?: (ctx: Table_refContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.table_ref`.
	 * @param ctx the parse tree
	 */
	exitTable_ref?: (ctx: Table_refContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.table_ref_aux`.
	 * @param ctx the parse tree
	 */
	enterTable_ref_aux?: (ctx: Table_ref_auxContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.table_ref_aux`.
	 * @param ctx the parse tree
	 */
	exitTable_ref_aux?: (ctx: Table_ref_auxContext) => void;
	/**
	 * Enter a parse tree produced by the `table_ref_aux_internal_one`
	 * labeled alternative in `PlSqlParser.table_ref_aux_internal`.
	 * @param ctx the parse tree
	 */
	enterTable_ref_aux_internal_one?: (ctx: Table_ref_aux_internal_oneContext) => void;
	/**
	 * Exit a parse tree produced by the `table_ref_aux_internal_one`
	 * labeled alternative in `PlSqlParser.table_ref_aux_internal`.
	 * @param ctx the parse tree
	 */
	exitTable_ref_aux_internal_one?: (ctx: Table_ref_aux_internal_oneContext) => void;
	/**
	 * Enter a parse tree produced by the `table_ref_aux_internal_two`
	 * labeled alternative in `PlSqlParser.table_ref_aux_internal`.
	 * @param ctx the parse tree
	 */
	enterTable_ref_aux_internal_two?: (ctx: Table_ref_aux_internal_twoContext) => void;
	/**
	 * Exit a parse tree produced by the `table_ref_aux_internal_two`
	 * labeled alternative in `PlSqlParser.table_ref_aux_internal`.
	 * @param ctx the parse tree
	 */
	exitTable_ref_aux_internal_two?: (ctx: Table_ref_aux_internal_twoContext) => void;
	/**
	 * Enter a parse tree produced by the `table_ref_aux_internal_three`
	 * labeled alternative in `PlSqlParser.table_ref_aux_internal`.
	 * @param ctx the parse tree
	 */
	enterTable_ref_aux_internal_three?: (ctx: Table_ref_aux_internal_threeContext) => void;
	/**
	 * Exit a parse tree produced by the `table_ref_aux_internal_three`
	 * labeled alternative in `PlSqlParser.table_ref_aux_internal`.
	 * @param ctx the parse tree
	 */
	exitTable_ref_aux_internal_three?: (ctx: Table_ref_aux_internal_threeContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.join_clause`.
	 * @param ctx the parse tree
	 */
	enterJoin_clause?: (ctx: Join_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.join_clause`.
	 * @param ctx the parse tree
	 */
	exitJoin_clause?: (ctx: Join_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.join_on_part`.
	 * @param ctx the parse tree
	 */
	enterJoin_on_part?: (ctx: Join_on_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.join_on_part`.
	 * @param ctx the parse tree
	 */
	exitJoin_on_part?: (ctx: Join_on_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.join_using_part`.
	 * @param ctx the parse tree
	 */
	enterJoin_using_part?: (ctx: Join_using_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.join_using_part`.
	 * @param ctx the parse tree
	 */
	exitJoin_using_part?: (ctx: Join_using_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.outer_join_type`.
	 * @param ctx the parse tree
	 */
	enterOuter_join_type?: (ctx: Outer_join_typeContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.outer_join_type`.
	 * @param ctx the parse tree
	 */
	exitOuter_join_type?: (ctx: Outer_join_typeContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.query_partition_clause`.
	 * @param ctx the parse tree
	 */
	enterQuery_partition_clause?: (ctx: Query_partition_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.query_partition_clause`.
	 * @param ctx the parse tree
	 */
	exitQuery_partition_clause?: (ctx: Query_partition_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.flashback_query_clause`.
	 * @param ctx the parse tree
	 */
	enterFlashback_query_clause?: (ctx: Flashback_query_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.flashback_query_clause`.
	 * @param ctx the parse tree
	 */
	exitFlashback_query_clause?: (ctx: Flashback_query_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.pivot_clause`.
	 * @param ctx the parse tree
	 */
	enterPivot_clause?: (ctx: Pivot_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.pivot_clause`.
	 * @param ctx the parse tree
	 */
	exitPivot_clause?: (ctx: Pivot_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.pivot_element`.
	 * @param ctx the parse tree
	 */
	enterPivot_element?: (ctx: Pivot_elementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.pivot_element`.
	 * @param ctx the parse tree
	 */
	exitPivot_element?: (ctx: Pivot_elementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.pivot_for_clause`.
	 * @param ctx the parse tree
	 */
	enterPivot_for_clause?: (ctx: Pivot_for_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.pivot_for_clause`.
	 * @param ctx the parse tree
	 */
	exitPivot_for_clause?: (ctx: Pivot_for_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.pivot_in_clause`.
	 * @param ctx the parse tree
	 */
	enterPivot_in_clause?: (ctx: Pivot_in_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.pivot_in_clause`.
	 * @param ctx the parse tree
	 */
	exitPivot_in_clause?: (ctx: Pivot_in_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.pivot_in_clause_element`.
	 * @param ctx the parse tree
	 */
	enterPivot_in_clause_element?: (ctx: Pivot_in_clause_elementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.pivot_in_clause_element`.
	 * @param ctx the parse tree
	 */
	exitPivot_in_clause_element?: (ctx: Pivot_in_clause_elementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.pivot_in_clause_elements`.
	 * @param ctx the parse tree
	 */
	enterPivot_in_clause_elements?: (ctx: Pivot_in_clause_elementsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.pivot_in_clause_elements`.
	 * @param ctx the parse tree
	 */
	exitPivot_in_clause_elements?: (ctx: Pivot_in_clause_elementsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.unpivot_clause`.
	 * @param ctx the parse tree
	 */
	enterUnpivot_clause?: (ctx: Unpivot_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.unpivot_clause`.
	 * @param ctx the parse tree
	 */
	exitUnpivot_clause?: (ctx: Unpivot_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.unpivot_in_clause`.
	 * @param ctx the parse tree
	 */
	enterUnpivot_in_clause?: (ctx: Unpivot_in_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.unpivot_in_clause`.
	 * @param ctx the parse tree
	 */
	exitUnpivot_in_clause?: (ctx: Unpivot_in_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.unpivot_in_elements`.
	 * @param ctx the parse tree
	 */
	enterUnpivot_in_elements?: (ctx: Unpivot_in_elementsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.unpivot_in_elements`.
	 * @param ctx the parse tree
	 */
	exitUnpivot_in_elements?: (ctx: Unpivot_in_elementsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.hierarchical_query_clause`.
	 * @param ctx the parse tree
	 */
	enterHierarchical_query_clause?: (ctx: Hierarchical_query_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.hierarchical_query_clause`.
	 * @param ctx the parse tree
	 */
	exitHierarchical_query_clause?: (ctx: Hierarchical_query_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.start_part`.
	 * @param ctx the parse tree
	 */
	enterStart_part?: (ctx: Start_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.start_part`.
	 * @param ctx the parse tree
	 */
	exitStart_part?: (ctx: Start_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.group_by_clause`.
	 * @param ctx the parse tree
	 */
	enterGroup_by_clause?: (ctx: Group_by_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.group_by_clause`.
	 * @param ctx the parse tree
	 */
	exitGroup_by_clause?: (ctx: Group_by_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.group_by_elements`.
	 * @param ctx the parse tree
	 */
	enterGroup_by_elements?: (ctx: Group_by_elementsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.group_by_elements`.
	 * @param ctx the parse tree
	 */
	exitGroup_by_elements?: (ctx: Group_by_elementsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.rollup_cube_clause`.
	 * @param ctx the parse tree
	 */
	enterRollup_cube_clause?: (ctx: Rollup_cube_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.rollup_cube_clause`.
	 * @param ctx the parse tree
	 */
	exitRollup_cube_clause?: (ctx: Rollup_cube_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.grouping_sets_clause`.
	 * @param ctx the parse tree
	 */
	enterGrouping_sets_clause?: (ctx: Grouping_sets_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.grouping_sets_clause`.
	 * @param ctx the parse tree
	 */
	exitGrouping_sets_clause?: (ctx: Grouping_sets_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.grouping_sets_elements`.
	 * @param ctx the parse tree
	 */
	enterGrouping_sets_elements?: (ctx: Grouping_sets_elementsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.grouping_sets_elements`.
	 * @param ctx the parse tree
	 */
	exitGrouping_sets_elements?: (ctx: Grouping_sets_elementsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.having_clause`.
	 * @param ctx the parse tree
	 */
	enterHaving_clause?: (ctx: Having_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.having_clause`.
	 * @param ctx the parse tree
	 */
	exitHaving_clause?: (ctx: Having_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.model_clause`.
	 * @param ctx the parse tree
	 */
	enterModel_clause?: (ctx: Model_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.model_clause`.
	 * @param ctx the parse tree
	 */
	exitModel_clause?: (ctx: Model_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.cell_reference_options`.
	 * @param ctx the parse tree
	 */
	enterCell_reference_options?: (ctx: Cell_reference_optionsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.cell_reference_options`.
	 * @param ctx the parse tree
	 */
	exitCell_reference_options?: (ctx: Cell_reference_optionsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.return_rows_clause`.
	 * @param ctx the parse tree
	 */
	enterReturn_rows_clause?: (ctx: Return_rows_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.return_rows_clause`.
	 * @param ctx the parse tree
	 */
	exitReturn_rows_clause?: (ctx: Return_rows_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.reference_model`.
	 * @param ctx the parse tree
	 */
	enterReference_model?: (ctx: Reference_modelContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.reference_model`.
	 * @param ctx the parse tree
	 */
	exitReference_model?: (ctx: Reference_modelContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.main_model`.
	 * @param ctx the parse tree
	 */
	enterMain_model?: (ctx: Main_modelContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.main_model`.
	 * @param ctx the parse tree
	 */
	exitMain_model?: (ctx: Main_modelContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.model_column_clauses`.
	 * @param ctx the parse tree
	 */
	enterModel_column_clauses?: (ctx: Model_column_clausesContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.model_column_clauses`.
	 * @param ctx the parse tree
	 */
	exitModel_column_clauses?: (ctx: Model_column_clausesContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.model_column_partition_part`.
	 * @param ctx the parse tree
	 */
	enterModel_column_partition_part?: (ctx: Model_column_partition_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.model_column_partition_part`.
	 * @param ctx the parse tree
	 */
	exitModel_column_partition_part?: (ctx: Model_column_partition_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.model_column_list`.
	 * @param ctx the parse tree
	 */
	enterModel_column_list?: (ctx: Model_column_listContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.model_column_list`.
	 * @param ctx the parse tree
	 */
	exitModel_column_list?: (ctx: Model_column_listContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.model_column`.
	 * @param ctx the parse tree
	 */
	enterModel_column?: (ctx: Model_columnContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.model_column`.
	 * @param ctx the parse tree
	 */
	exitModel_column?: (ctx: Model_columnContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.model_rules_clause`.
	 * @param ctx the parse tree
	 */
	enterModel_rules_clause?: (ctx: Model_rules_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.model_rules_clause`.
	 * @param ctx the parse tree
	 */
	exitModel_rules_clause?: (ctx: Model_rules_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.model_rules_part`.
	 * @param ctx the parse tree
	 */
	enterModel_rules_part?: (ctx: Model_rules_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.model_rules_part`.
	 * @param ctx the parse tree
	 */
	exitModel_rules_part?: (ctx: Model_rules_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.model_rules_element`.
	 * @param ctx the parse tree
	 */
	enterModel_rules_element?: (ctx: Model_rules_elementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.model_rules_element`.
	 * @param ctx the parse tree
	 */
	exitModel_rules_element?: (ctx: Model_rules_elementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.cell_assignment`.
	 * @param ctx the parse tree
	 */
	enterCell_assignment?: (ctx: Cell_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.cell_assignment`.
	 * @param ctx the parse tree
	 */
	exitCell_assignment?: (ctx: Cell_assignmentContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.model_iterate_clause`.
	 * @param ctx the parse tree
	 */
	enterModel_iterate_clause?: (ctx: Model_iterate_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.model_iterate_clause`.
	 * @param ctx the parse tree
	 */
	exitModel_iterate_clause?: (ctx: Model_iterate_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.until_part`.
	 * @param ctx the parse tree
	 */
	enterUntil_part?: (ctx: Until_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.until_part`.
	 * @param ctx the parse tree
	 */
	exitUntil_part?: (ctx: Until_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.order_by_clause`.
	 * @param ctx the parse tree
	 */
	enterOrder_by_clause?: (ctx: Order_by_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.order_by_clause`.
	 * @param ctx the parse tree
	 */
	exitOrder_by_clause?: (ctx: Order_by_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.order_by_elements`.
	 * @param ctx the parse tree
	 */
	enterOrder_by_elements?: (ctx: Order_by_elementsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.order_by_elements`.
	 * @param ctx the parse tree
	 */
	exitOrder_by_elements?: (ctx: Order_by_elementsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.offset_clause`.
	 * @param ctx the parse tree
	 */
	enterOffset_clause?: (ctx: Offset_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.offset_clause`.
	 * @param ctx the parse tree
	 */
	exitOffset_clause?: (ctx: Offset_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.fetch_clause`.
	 * @param ctx the parse tree
	 */
	enterFetch_clause?: (ctx: Fetch_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.fetch_clause`.
	 * @param ctx the parse tree
	 */
	exitFetch_clause?: (ctx: Fetch_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.for_update_clause`.
	 * @param ctx the parse tree
	 */
	enterFor_update_clause?: (ctx: For_update_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.for_update_clause`.
	 * @param ctx the parse tree
	 */
	exitFor_update_clause?: (ctx: For_update_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.for_update_of_part`.
	 * @param ctx the parse tree
	 */
	enterFor_update_of_part?: (ctx: For_update_of_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.for_update_of_part`.
	 * @param ctx the parse tree
	 */
	exitFor_update_of_part?: (ctx: For_update_of_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.for_update_options`.
	 * @param ctx the parse tree
	 */
	enterFor_update_options?: (ctx: For_update_optionsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.for_update_options`.
	 * @param ctx the parse tree
	 */
	exitFor_update_options?: (ctx: For_update_optionsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.update_statement`.
	 * @param ctx the parse tree
	 */
	enterUpdate_statement?: (ctx: Update_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.update_statement`.
	 * @param ctx the parse tree
	 */
	exitUpdate_statement?: (ctx: Update_statementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.update_set_clause`.
	 * @param ctx the parse tree
	 */
	enterUpdate_set_clause?: (ctx: Update_set_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.update_set_clause`.
	 * @param ctx the parse tree
	 */
	exitUpdate_set_clause?: (ctx: Update_set_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.column_based_update_set_clause`.
	 * @param ctx the parse tree
	 */
	enterColumn_based_update_set_clause?: (ctx: Column_based_update_set_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.column_based_update_set_clause`.
	 * @param ctx the parse tree
	 */
	exitColumn_based_update_set_clause?: (ctx: Column_based_update_set_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.delete_statement`.
	 * @param ctx the parse tree
	 */
	enterDelete_statement?: (ctx: Delete_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.delete_statement`.
	 * @param ctx the parse tree
	 */
	exitDelete_statement?: (ctx: Delete_statementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.insert_statement`.
	 * @param ctx the parse tree
	 */
	enterInsert_statement?: (ctx: Insert_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.insert_statement`.
	 * @param ctx the parse tree
	 */
	exitInsert_statement?: (ctx: Insert_statementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.single_table_insert`.
	 * @param ctx the parse tree
	 */
	enterSingle_table_insert?: (ctx: Single_table_insertContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.single_table_insert`.
	 * @param ctx the parse tree
	 */
	exitSingle_table_insert?: (ctx: Single_table_insertContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.multi_table_insert`.
	 * @param ctx the parse tree
	 */
	enterMulti_table_insert?: (ctx: Multi_table_insertContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.multi_table_insert`.
	 * @param ctx the parse tree
	 */
	exitMulti_table_insert?: (ctx: Multi_table_insertContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.multi_table_element`.
	 * @param ctx the parse tree
	 */
	enterMulti_table_element?: (ctx: Multi_table_elementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.multi_table_element`.
	 * @param ctx the parse tree
	 */
	exitMulti_table_element?: (ctx: Multi_table_elementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.conditional_insert_clause`.
	 * @param ctx the parse tree
	 */
	enterConditional_insert_clause?: (ctx: Conditional_insert_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.conditional_insert_clause`.
	 * @param ctx the parse tree
	 */
	exitConditional_insert_clause?: (ctx: Conditional_insert_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.conditional_insert_when_part`.
	 * @param ctx the parse tree
	 */
	enterConditional_insert_when_part?: (ctx: Conditional_insert_when_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.conditional_insert_when_part`.
	 * @param ctx the parse tree
	 */
	exitConditional_insert_when_part?: (ctx: Conditional_insert_when_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.conditional_insert_else_part`.
	 * @param ctx the parse tree
	 */
	enterConditional_insert_else_part?: (ctx: Conditional_insert_else_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.conditional_insert_else_part`.
	 * @param ctx the parse tree
	 */
	exitConditional_insert_else_part?: (ctx: Conditional_insert_else_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.insert_into_clause`.
	 * @param ctx the parse tree
	 */
	enterInsert_into_clause?: (ctx: Insert_into_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.insert_into_clause`.
	 * @param ctx the parse tree
	 */
	exitInsert_into_clause?: (ctx: Insert_into_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.values_clause`.
	 * @param ctx the parse tree
	 */
	enterValues_clause?: (ctx: Values_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.values_clause`.
	 * @param ctx the parse tree
	 */
	exitValues_clause?: (ctx: Values_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.merge_statement`.
	 * @param ctx the parse tree
	 */
	enterMerge_statement?: (ctx: Merge_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.merge_statement`.
	 * @param ctx the parse tree
	 */
	exitMerge_statement?: (ctx: Merge_statementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.merge_update_clause`.
	 * @param ctx the parse tree
	 */
	enterMerge_update_clause?: (ctx: Merge_update_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.merge_update_clause`.
	 * @param ctx the parse tree
	 */
	exitMerge_update_clause?: (ctx: Merge_update_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.merge_element`.
	 * @param ctx the parse tree
	 */
	enterMerge_element?: (ctx: Merge_elementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.merge_element`.
	 * @param ctx the parse tree
	 */
	exitMerge_element?: (ctx: Merge_elementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.merge_update_delete_part`.
	 * @param ctx the parse tree
	 */
	enterMerge_update_delete_part?: (ctx: Merge_update_delete_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.merge_update_delete_part`.
	 * @param ctx the parse tree
	 */
	exitMerge_update_delete_part?: (ctx: Merge_update_delete_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.merge_insert_clause`.
	 * @param ctx the parse tree
	 */
	enterMerge_insert_clause?: (ctx: Merge_insert_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.merge_insert_clause`.
	 * @param ctx the parse tree
	 */
	exitMerge_insert_clause?: (ctx: Merge_insert_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.selected_tableview`.
	 * @param ctx the parse tree
	 */
	enterSelected_tableview?: (ctx: Selected_tableviewContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.selected_tableview`.
	 * @param ctx the parse tree
	 */
	exitSelected_tableview?: (ctx: Selected_tableviewContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.lock_table_statement`.
	 * @param ctx the parse tree
	 */
	enterLock_table_statement?: (ctx: Lock_table_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.lock_table_statement`.
	 * @param ctx the parse tree
	 */
	exitLock_table_statement?: (ctx: Lock_table_statementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.wait_nowait_part`.
	 * @param ctx the parse tree
	 */
	enterWait_nowait_part?: (ctx: Wait_nowait_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.wait_nowait_part`.
	 * @param ctx the parse tree
	 */
	exitWait_nowait_part?: (ctx: Wait_nowait_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.lock_table_element`.
	 * @param ctx the parse tree
	 */
	enterLock_table_element?: (ctx: Lock_table_elementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.lock_table_element`.
	 * @param ctx the parse tree
	 */
	exitLock_table_element?: (ctx: Lock_table_elementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.lock_mode`.
	 * @param ctx the parse tree
	 */
	enterLock_mode?: (ctx: Lock_modeContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.lock_mode`.
	 * @param ctx the parse tree
	 */
	exitLock_mode?: (ctx: Lock_modeContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.general_table_ref`.
	 * @param ctx the parse tree
	 */
	enterGeneral_table_ref?: (ctx: General_table_refContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.general_table_ref`.
	 * @param ctx the parse tree
	 */
	exitGeneral_table_ref?: (ctx: General_table_refContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.static_returning_clause`.
	 * @param ctx the parse tree
	 */
	enterStatic_returning_clause?: (ctx: Static_returning_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.static_returning_clause`.
	 * @param ctx the parse tree
	 */
	exitStatic_returning_clause?: (ctx: Static_returning_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.error_logging_clause`.
	 * @param ctx the parse tree
	 */
	enterError_logging_clause?: (ctx: Error_logging_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.error_logging_clause`.
	 * @param ctx the parse tree
	 */
	exitError_logging_clause?: (ctx: Error_logging_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.error_logging_into_part`.
	 * @param ctx the parse tree
	 */
	enterError_logging_into_part?: (ctx: Error_logging_into_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.error_logging_into_part`.
	 * @param ctx the parse tree
	 */
	exitError_logging_into_part?: (ctx: Error_logging_into_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.error_logging_reject_part`.
	 * @param ctx the parse tree
	 */
	enterError_logging_reject_part?: (ctx: Error_logging_reject_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.error_logging_reject_part`.
	 * @param ctx the parse tree
	 */
	exitError_logging_reject_part?: (ctx: Error_logging_reject_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.dml_table_expression_clause`.
	 * @param ctx the parse tree
	 */
	enterDml_table_expression_clause?: (ctx: Dml_table_expression_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.dml_table_expression_clause`.
	 * @param ctx the parse tree
	 */
	exitDml_table_expression_clause?: (ctx: Dml_table_expression_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.table_collection_expression`.
	 * @param ctx the parse tree
	 */
	enterTable_collection_expression?: (ctx: Table_collection_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.table_collection_expression`.
	 * @param ctx the parse tree
	 */
	exitTable_collection_expression?: (ctx: Table_collection_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.subquery_restriction_clause`.
	 * @param ctx the parse tree
	 */
	enterSubquery_restriction_clause?: (ctx: Subquery_restriction_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.subquery_restriction_clause`.
	 * @param ctx the parse tree
	 */
	exitSubquery_restriction_clause?: (ctx: Subquery_restriction_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.sample_clause`.
	 * @param ctx the parse tree
	 */
	enterSample_clause?: (ctx: Sample_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.sample_clause`.
	 * @param ctx the parse tree
	 */
	exitSample_clause?: (ctx: Sample_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.seed_part`.
	 * @param ctx the parse tree
	 */
	enterSeed_part?: (ctx: Seed_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.seed_part`.
	 * @param ctx the parse tree
	 */
	exitSeed_part?: (ctx: Seed_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.expressions`.
	 * @param ctx the parse tree
	 */
	enterExpressions?: (ctx: ExpressionsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.expressions`.
	 * @param ctx the parse tree
	 */
	exitExpressions?: (ctx: ExpressionsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.cursor_expression`.
	 * @param ctx the parse tree
	 */
	enterCursor_expression?: (ctx: Cursor_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.cursor_expression`.
	 * @param ctx the parse tree
	 */
	exitCursor_expression?: (ctx: Cursor_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.logical_expression`.
	 * @param ctx the parse tree
	 */
	enterLogical_expression?: (ctx: Logical_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.logical_expression`.
	 * @param ctx the parse tree
	 */
	exitLogical_expression?: (ctx: Logical_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.unary_logical_expression`.
	 * @param ctx the parse tree
	 */
	enterUnary_logical_expression?: (ctx: Unary_logical_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.unary_logical_expression`.
	 * @param ctx the parse tree
	 */
	exitUnary_logical_expression?: (ctx: Unary_logical_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.logical_operation`.
	 * @param ctx the parse tree
	 */
	enterLogical_operation?: (ctx: Logical_operationContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.logical_operation`.
	 * @param ctx the parse tree
	 */
	exitLogical_operation?: (ctx: Logical_operationContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.multiset_expression`.
	 * @param ctx the parse tree
	 */
	enterMultiset_expression?: (ctx: Multiset_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.multiset_expression`.
	 * @param ctx the parse tree
	 */
	exitMultiset_expression?: (ctx: Multiset_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.relational_expression`.
	 * @param ctx the parse tree
	 */
	enterRelational_expression?: (ctx: Relational_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.relational_expression`.
	 * @param ctx the parse tree
	 */
	exitRelational_expression?: (ctx: Relational_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.compound_expression`.
	 * @param ctx the parse tree
	 */
	enterCompound_expression?: (ctx: Compound_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.compound_expression`.
	 * @param ctx the parse tree
	 */
	exitCompound_expression?: (ctx: Compound_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.relational_operator`.
	 * @param ctx the parse tree
	 */
	enterRelational_operator?: (ctx: Relational_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.relational_operator`.
	 * @param ctx the parse tree
	 */
	exitRelational_operator?: (ctx: Relational_operatorContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.in_elements`.
	 * @param ctx the parse tree
	 */
	enterIn_elements?: (ctx: In_elementsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.in_elements`.
	 * @param ctx the parse tree
	 */
	exitIn_elements?: (ctx: In_elementsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.between_elements`.
	 * @param ctx the parse tree
	 */
	enterBetween_elements?: (ctx: Between_elementsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.between_elements`.
	 * @param ctx the parse tree
	 */
	exitBetween_elements?: (ctx: Between_elementsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.concatenation`.
	 * @param ctx the parse tree
	 */
	enterConcatenation?: (ctx: ConcatenationContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.concatenation`.
	 * @param ctx the parse tree
	 */
	exitConcatenation?: (ctx: ConcatenationContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.interval_expression`.
	 * @param ctx the parse tree
	 */
	enterInterval_expression?: (ctx: Interval_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.interval_expression`.
	 * @param ctx the parse tree
	 */
	exitInterval_expression?: (ctx: Interval_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.model_expression`.
	 * @param ctx the parse tree
	 */
	enterModel_expression?: (ctx: Model_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.model_expression`.
	 * @param ctx the parse tree
	 */
	exitModel_expression?: (ctx: Model_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.model_expression_element`.
	 * @param ctx the parse tree
	 */
	enterModel_expression_element?: (ctx: Model_expression_elementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.model_expression_element`.
	 * @param ctx the parse tree
	 */
	exitModel_expression_element?: (ctx: Model_expression_elementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.single_column_for_loop`.
	 * @param ctx the parse tree
	 */
	enterSingle_column_for_loop?: (ctx: Single_column_for_loopContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.single_column_for_loop`.
	 * @param ctx the parse tree
	 */
	exitSingle_column_for_loop?: (ctx: Single_column_for_loopContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.multi_column_for_loop`.
	 * @param ctx the parse tree
	 */
	enterMulti_column_for_loop?: (ctx: Multi_column_for_loopContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.multi_column_for_loop`.
	 * @param ctx the parse tree
	 */
	exitMulti_column_for_loop?: (ctx: Multi_column_for_loopContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.unary_expression`.
	 * @param ctx the parse tree
	 */
	enterUnary_expression?: (ctx: Unary_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.unary_expression`.
	 * @param ctx the parse tree
	 */
	exitUnary_expression?: (ctx: Unary_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.case_statement`.
	 * @param ctx the parse tree
	 */
	enterCase_statement?: (ctx: Case_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.case_statement`.
	 * @param ctx the parse tree
	 */
	exitCase_statement?: (ctx: Case_statementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.simple_case_statement`.
	 * @param ctx the parse tree
	 */
	enterSimple_case_statement?: (ctx: Simple_case_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.simple_case_statement`.
	 * @param ctx the parse tree
	 */
	exitSimple_case_statement?: (ctx: Simple_case_statementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.simple_case_when_part`.
	 * @param ctx the parse tree
	 */
	enterSimple_case_when_part?: (ctx: Simple_case_when_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.simple_case_when_part`.
	 * @param ctx the parse tree
	 */
	exitSimple_case_when_part?: (ctx: Simple_case_when_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.searched_case_statement`.
	 * @param ctx the parse tree
	 */
	enterSearched_case_statement?: (ctx: Searched_case_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.searched_case_statement`.
	 * @param ctx the parse tree
	 */
	exitSearched_case_statement?: (ctx: Searched_case_statementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.searched_case_when_part`.
	 * @param ctx the parse tree
	 */
	enterSearched_case_when_part?: (ctx: Searched_case_when_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.searched_case_when_part`.
	 * @param ctx the parse tree
	 */
	exitSearched_case_when_part?: (ctx: Searched_case_when_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.case_else_part`.
	 * @param ctx the parse tree
	 */
	enterCase_else_part?: (ctx: Case_else_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.case_else_part`.
	 * @param ctx the parse tree
	 */
	exitCase_else_part?: (ctx: Case_else_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.quantified_expression`.
	 * @param ctx the parse tree
	 */
	enterQuantified_expression?: (ctx: Quantified_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.quantified_expression`.
	 * @param ctx the parse tree
	 */
	exitQuantified_expression?: (ctx: Quantified_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.string_function`.
	 * @param ctx the parse tree
	 */
	enterString_function?: (ctx: String_functionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.string_function`.
	 * @param ctx the parse tree
	 */
	exitString_function?: (ctx: String_functionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.standard_function`.
	 * @param ctx the parse tree
	 */
	enterStandard_function?: (ctx: Standard_functionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.standard_function`.
	 * @param ctx the parse tree
	 */
	exitStandard_function?: (ctx: Standard_functionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.numeric_function_wrapper`.
	 * @param ctx the parse tree
	 */
	enterNumeric_function_wrapper?: (ctx: Numeric_function_wrapperContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.numeric_function_wrapper`.
	 * @param ctx the parse tree
	 */
	exitNumeric_function_wrapper?: (ctx: Numeric_function_wrapperContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.numeric_function`.
	 * @param ctx the parse tree
	 */
	enterNumeric_function?: (ctx: Numeric_functionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.numeric_function`.
	 * @param ctx the parse tree
	 */
	exitNumeric_function?: (ctx: Numeric_functionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.other_function`.
	 * @param ctx the parse tree
	 */
	enterOther_function?: (ctx: Other_functionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.other_function`.
	 * @param ctx the parse tree
	 */
	exitOther_function?: (ctx: Other_functionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.over_clause_keyword`.
	 * @param ctx the parse tree
	 */
	enterOver_clause_keyword?: (ctx: Over_clause_keywordContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.over_clause_keyword`.
	 * @param ctx the parse tree
	 */
	exitOver_clause_keyword?: (ctx: Over_clause_keywordContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.within_or_over_clause_keyword`.
	 * @param ctx the parse tree
	 */
	enterWithin_or_over_clause_keyword?: (ctx: Within_or_over_clause_keywordContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.within_or_over_clause_keyword`.
	 * @param ctx the parse tree
	 */
	exitWithin_or_over_clause_keyword?: (ctx: Within_or_over_clause_keywordContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.standard_prediction_function_keyword`.
	 * @param ctx the parse tree
	 */
	enterStandard_prediction_function_keyword?: (ctx: Standard_prediction_function_keywordContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.standard_prediction_function_keyword`.
	 * @param ctx the parse tree
	 */
	exitStandard_prediction_function_keyword?: (ctx: Standard_prediction_function_keywordContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.over_clause`.
	 * @param ctx the parse tree
	 */
	enterOver_clause?: (ctx: Over_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.over_clause`.
	 * @param ctx the parse tree
	 */
	exitOver_clause?: (ctx: Over_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.windowing_clause`.
	 * @param ctx the parse tree
	 */
	enterWindowing_clause?: (ctx: Windowing_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.windowing_clause`.
	 * @param ctx the parse tree
	 */
	exitWindowing_clause?: (ctx: Windowing_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.windowing_type`.
	 * @param ctx the parse tree
	 */
	enterWindowing_type?: (ctx: Windowing_typeContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.windowing_type`.
	 * @param ctx the parse tree
	 */
	exitWindowing_type?: (ctx: Windowing_typeContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.windowing_elements`.
	 * @param ctx the parse tree
	 */
	enterWindowing_elements?: (ctx: Windowing_elementsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.windowing_elements`.
	 * @param ctx the parse tree
	 */
	exitWindowing_elements?: (ctx: Windowing_elementsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.using_clause`.
	 * @param ctx the parse tree
	 */
	enterUsing_clause?: (ctx: Using_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.using_clause`.
	 * @param ctx the parse tree
	 */
	exitUsing_clause?: (ctx: Using_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.using_element`.
	 * @param ctx the parse tree
	 */
	enterUsing_element?: (ctx: Using_elementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.using_element`.
	 * @param ctx the parse tree
	 */
	exitUsing_element?: (ctx: Using_elementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.collect_order_by_part`.
	 * @param ctx the parse tree
	 */
	enterCollect_order_by_part?: (ctx: Collect_order_by_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.collect_order_by_part`.
	 * @param ctx the parse tree
	 */
	exitCollect_order_by_part?: (ctx: Collect_order_by_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.within_or_over_part`.
	 * @param ctx the parse tree
	 */
	enterWithin_or_over_part?: (ctx: Within_or_over_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.within_or_over_part`.
	 * @param ctx the parse tree
	 */
	exitWithin_or_over_part?: (ctx: Within_or_over_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.cost_matrix_clause`.
	 * @param ctx the parse tree
	 */
	enterCost_matrix_clause?: (ctx: Cost_matrix_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.cost_matrix_clause`.
	 * @param ctx the parse tree
	 */
	exitCost_matrix_clause?: (ctx: Cost_matrix_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.xml_passing_clause`.
	 * @param ctx the parse tree
	 */
	enterXml_passing_clause?: (ctx: Xml_passing_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.xml_passing_clause`.
	 * @param ctx the parse tree
	 */
	exitXml_passing_clause?: (ctx: Xml_passing_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.xml_attributes_clause`.
	 * @param ctx the parse tree
	 */
	enterXml_attributes_clause?: (ctx: Xml_attributes_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.xml_attributes_clause`.
	 * @param ctx the parse tree
	 */
	exitXml_attributes_clause?: (ctx: Xml_attributes_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.xml_namespaces_clause`.
	 * @param ctx the parse tree
	 */
	enterXml_namespaces_clause?: (ctx: Xml_namespaces_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.xml_namespaces_clause`.
	 * @param ctx the parse tree
	 */
	exitXml_namespaces_clause?: (ctx: Xml_namespaces_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.xml_table_column`.
	 * @param ctx the parse tree
	 */
	enterXml_table_column?: (ctx: Xml_table_columnContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.xml_table_column`.
	 * @param ctx the parse tree
	 */
	exitXml_table_column?: (ctx: Xml_table_columnContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.xml_general_default_part`.
	 * @param ctx the parse tree
	 */
	enterXml_general_default_part?: (ctx: Xml_general_default_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.xml_general_default_part`.
	 * @param ctx the parse tree
	 */
	exitXml_general_default_part?: (ctx: Xml_general_default_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.xml_multiuse_expression_element`.
	 * @param ctx the parse tree
	 */
	enterXml_multiuse_expression_element?: (ctx: Xml_multiuse_expression_elementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.xml_multiuse_expression_element`.
	 * @param ctx the parse tree
	 */
	exitXml_multiuse_expression_element?: (ctx: Xml_multiuse_expression_elementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.xmlroot_param_version_part`.
	 * @param ctx the parse tree
	 */
	enterXmlroot_param_version_part?: (ctx: Xmlroot_param_version_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.xmlroot_param_version_part`.
	 * @param ctx the parse tree
	 */
	exitXmlroot_param_version_part?: (ctx: Xmlroot_param_version_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.xmlroot_param_standalone_part`.
	 * @param ctx the parse tree
	 */
	enterXmlroot_param_standalone_part?: (ctx: Xmlroot_param_standalone_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.xmlroot_param_standalone_part`.
	 * @param ctx the parse tree
	 */
	exitXmlroot_param_standalone_part?: (ctx: Xmlroot_param_standalone_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.xmlserialize_param_enconding_part`.
	 * @param ctx the parse tree
	 */
	enterXmlserialize_param_enconding_part?: (ctx: Xmlserialize_param_enconding_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.xmlserialize_param_enconding_part`.
	 * @param ctx the parse tree
	 */
	exitXmlserialize_param_enconding_part?: (ctx: Xmlserialize_param_enconding_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.xmlserialize_param_version_part`.
	 * @param ctx the parse tree
	 */
	enterXmlserialize_param_version_part?: (ctx: Xmlserialize_param_version_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.xmlserialize_param_version_part`.
	 * @param ctx the parse tree
	 */
	exitXmlserialize_param_version_part?: (ctx: Xmlserialize_param_version_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.xmlserialize_param_ident_part`.
	 * @param ctx the parse tree
	 */
	enterXmlserialize_param_ident_part?: (ctx: Xmlserialize_param_ident_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.xmlserialize_param_ident_part`.
	 * @param ctx the parse tree
	 */
	exitXmlserialize_param_ident_part?: (ctx: Xmlserialize_param_ident_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.sql_plus_command`.
	 * @param ctx the parse tree
	 */
	enterSql_plus_command?: (ctx: Sql_plus_commandContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.sql_plus_command`.
	 * @param ctx the parse tree
	 */
	exitSql_plus_command?: (ctx: Sql_plus_commandContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.whenever_command`.
	 * @param ctx the parse tree
	 */
	enterWhenever_command?: (ctx: Whenever_commandContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.whenever_command`.
	 * @param ctx the parse tree
	 */
	exitWhenever_command?: (ctx: Whenever_commandContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.set_command`.
	 * @param ctx the parse tree
	 */
	enterSet_command?: (ctx: Set_commandContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.set_command`.
	 * @param ctx the parse tree
	 */
	exitSet_command?: (ctx: Set_commandContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.partition_extension_clause`.
	 * @param ctx the parse tree
	 */
	enterPartition_extension_clause?: (ctx: Partition_extension_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.partition_extension_clause`.
	 * @param ctx the parse tree
	 */
	exitPartition_extension_clause?: (ctx: Partition_extension_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.column_alias`.
	 * @param ctx the parse tree
	 */
	enterColumn_alias?: (ctx: Column_aliasContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.column_alias`.
	 * @param ctx the parse tree
	 */
	exitColumn_alias?: (ctx: Column_aliasContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.table_alias`.
	 * @param ctx the parse tree
	 */
	enterTable_alias?: (ctx: Table_aliasContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.table_alias`.
	 * @param ctx the parse tree
	 */
	exitTable_alias?: (ctx: Table_aliasContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.where_clause`.
	 * @param ctx the parse tree
	 */
	enterWhere_clause?: (ctx: Where_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.where_clause`.
	 * @param ctx the parse tree
	 */
	exitWhere_clause?: (ctx: Where_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.into_clause`.
	 * @param ctx the parse tree
	 */
	enterInto_clause?: (ctx: Into_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.into_clause`.
	 * @param ctx the parse tree
	 */
	exitInto_clause?: (ctx: Into_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.xml_column_name`.
	 * @param ctx the parse tree
	 */
	enterXml_column_name?: (ctx: Xml_column_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.xml_column_name`.
	 * @param ctx the parse tree
	 */
	exitXml_column_name?: (ctx: Xml_column_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.cost_class_name`.
	 * @param ctx the parse tree
	 */
	enterCost_class_name?: (ctx: Cost_class_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.cost_class_name`.
	 * @param ctx the parse tree
	 */
	exitCost_class_name?: (ctx: Cost_class_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.attribute_name`.
	 * @param ctx the parse tree
	 */
	enterAttribute_name?: (ctx: Attribute_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.attribute_name`.
	 * @param ctx the parse tree
	 */
	exitAttribute_name?: (ctx: Attribute_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.savepoint_name`.
	 * @param ctx the parse tree
	 */
	enterSavepoint_name?: (ctx: Savepoint_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.savepoint_name`.
	 * @param ctx the parse tree
	 */
	exitSavepoint_name?: (ctx: Savepoint_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.rollback_segment_name`.
	 * @param ctx the parse tree
	 */
	enterRollback_segment_name?: (ctx: Rollback_segment_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.rollback_segment_name`.
	 * @param ctx the parse tree
	 */
	exitRollback_segment_name?: (ctx: Rollback_segment_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.table_var_name`.
	 * @param ctx the parse tree
	 */
	enterTable_var_name?: (ctx: Table_var_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.table_var_name`.
	 * @param ctx the parse tree
	 */
	exitTable_var_name?: (ctx: Table_var_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.schema_name`.
	 * @param ctx the parse tree
	 */
	enterSchema_name?: (ctx: Schema_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.schema_name`.
	 * @param ctx the parse tree
	 */
	exitSchema_name?: (ctx: Schema_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.routine_name`.
	 * @param ctx the parse tree
	 */
	enterRoutine_name?: (ctx: Routine_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.routine_name`.
	 * @param ctx the parse tree
	 */
	exitRoutine_name?: (ctx: Routine_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.package_name`.
	 * @param ctx the parse tree
	 */
	enterPackage_name?: (ctx: Package_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.package_name`.
	 * @param ctx the parse tree
	 */
	exitPackage_name?: (ctx: Package_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.implementation_type_name`.
	 * @param ctx the parse tree
	 */
	enterImplementation_type_name?: (ctx: Implementation_type_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.implementation_type_name`.
	 * @param ctx the parse tree
	 */
	exitImplementation_type_name?: (ctx: Implementation_type_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.parameter_name`.
	 * @param ctx the parse tree
	 */
	enterParameter_name?: (ctx: Parameter_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.parameter_name`.
	 * @param ctx the parse tree
	 */
	exitParameter_name?: (ctx: Parameter_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.reference_model_name`.
	 * @param ctx the parse tree
	 */
	enterReference_model_name?: (ctx: Reference_model_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.reference_model_name`.
	 * @param ctx the parse tree
	 */
	exitReference_model_name?: (ctx: Reference_model_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.main_model_name`.
	 * @param ctx the parse tree
	 */
	enterMain_model_name?: (ctx: Main_model_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.main_model_name`.
	 * @param ctx the parse tree
	 */
	exitMain_model_name?: (ctx: Main_model_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.container_tableview_name`.
	 * @param ctx the parse tree
	 */
	enterContainer_tableview_name?: (ctx: Container_tableview_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.container_tableview_name`.
	 * @param ctx the parse tree
	 */
	exitContainer_tableview_name?: (ctx: Container_tableview_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.aggregate_function_name`.
	 * @param ctx the parse tree
	 */
	enterAggregate_function_name?: (ctx: Aggregate_function_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.aggregate_function_name`.
	 * @param ctx the parse tree
	 */
	exitAggregate_function_name?: (ctx: Aggregate_function_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.query_name`.
	 * @param ctx the parse tree
	 */
	enterQuery_name?: (ctx: Query_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.query_name`.
	 * @param ctx the parse tree
	 */
	exitQuery_name?: (ctx: Query_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.grantee_name`.
	 * @param ctx the parse tree
	 */
	enterGrantee_name?: (ctx: Grantee_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.grantee_name`.
	 * @param ctx the parse tree
	 */
	exitGrantee_name?: (ctx: Grantee_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.role_name`.
	 * @param ctx the parse tree
	 */
	enterRole_name?: (ctx: Role_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.role_name`.
	 * @param ctx the parse tree
	 */
	exitRole_name?: (ctx: Role_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.constraint_name`.
	 * @param ctx the parse tree
	 */
	enterConstraint_name?: (ctx: Constraint_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.constraint_name`.
	 * @param ctx the parse tree
	 */
	exitConstraint_name?: (ctx: Constraint_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.label_name`.
	 * @param ctx the parse tree
	 */
	enterLabel_name?: (ctx: Label_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.label_name`.
	 * @param ctx the parse tree
	 */
	exitLabel_name?: (ctx: Label_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.type_name`.
	 * @param ctx the parse tree
	 */
	enterType_name?: (ctx: Type_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.type_name`.
	 * @param ctx the parse tree
	 */
	exitType_name?: (ctx: Type_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.sequence_name`.
	 * @param ctx the parse tree
	 */
	enterSequence_name?: (ctx: Sequence_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.sequence_name`.
	 * @param ctx the parse tree
	 */
	exitSequence_name?: (ctx: Sequence_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.exception_name`.
	 * @param ctx the parse tree
	 */
	enterException_name?: (ctx: Exception_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.exception_name`.
	 * @param ctx the parse tree
	 */
	exitException_name?: (ctx: Exception_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.function_name`.
	 * @param ctx the parse tree
	 */
	enterFunction_name?: (ctx: Function_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.function_name`.
	 * @param ctx the parse tree
	 */
	exitFunction_name?: (ctx: Function_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.procedure_name`.
	 * @param ctx the parse tree
	 */
	enterProcedure_name?: (ctx: Procedure_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.procedure_name`.
	 * @param ctx the parse tree
	 */
	exitProcedure_name?: (ctx: Procedure_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.trigger_name`.
	 * @param ctx the parse tree
	 */
	enterTrigger_name?: (ctx: Trigger_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.trigger_name`.
	 * @param ctx the parse tree
	 */
	exitTrigger_name?: (ctx: Trigger_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.variable_name`.
	 * @param ctx the parse tree
	 */
	enterVariable_name?: (ctx: Variable_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.variable_name`.
	 * @param ctx the parse tree
	 */
	exitVariable_name?: (ctx: Variable_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.index_name`.
	 * @param ctx the parse tree
	 */
	enterIndex_name?: (ctx: Index_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.index_name`.
	 * @param ctx the parse tree
	 */
	exitIndex_name?: (ctx: Index_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.cursor_name`.
	 * @param ctx the parse tree
	 */
	enterCursor_name?: (ctx: Cursor_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.cursor_name`.
	 * @param ctx the parse tree
	 */
	exitCursor_name?: (ctx: Cursor_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.record_name`.
	 * @param ctx the parse tree
	 */
	enterRecord_name?: (ctx: Record_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.record_name`.
	 * @param ctx the parse tree
	 */
	exitRecord_name?: (ctx: Record_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.collection_name`.
	 * @param ctx the parse tree
	 */
	enterCollection_name?: (ctx: Collection_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.collection_name`.
	 * @param ctx the parse tree
	 */
	exitCollection_name?: (ctx: Collection_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.link_name`.
	 * @param ctx the parse tree
	 */
	enterLink_name?: (ctx: Link_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.link_name`.
	 * @param ctx the parse tree
	 */
	exitLink_name?: (ctx: Link_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.column_name`.
	 * @param ctx the parse tree
	 */
	enterColumn_name?: (ctx: Column_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.column_name`.
	 * @param ctx the parse tree
	 */
	exitColumn_name?: (ctx: Column_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.tableview_name`.
	 * @param ctx the parse tree
	 */
	enterTableview_name?: (ctx: Tableview_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.tableview_name`.
	 * @param ctx the parse tree
	 */
	exitTableview_name?: (ctx: Tableview_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.xmltable`.
	 * @param ctx the parse tree
	 */
	enterXmltable?: (ctx: XmltableContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.xmltable`.
	 * @param ctx the parse tree
	 */
	exitXmltable?: (ctx: XmltableContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.char_set_name`.
	 * @param ctx the parse tree
	 */
	enterChar_set_name?: (ctx: Char_set_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.char_set_name`.
	 * @param ctx the parse tree
	 */
	exitChar_set_name?: (ctx: Char_set_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.synonym_name`.
	 * @param ctx the parse tree
	 */
	enterSynonym_name?: (ctx: Synonym_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.synonym_name`.
	 * @param ctx the parse tree
	 */
	exitSynonym_name?: (ctx: Synonym_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.schema_object_name`.
	 * @param ctx the parse tree
	 */
	enterSchema_object_name?: (ctx: Schema_object_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.schema_object_name`.
	 * @param ctx the parse tree
	 */
	exitSchema_object_name?: (ctx: Schema_object_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.dir_object_name`.
	 * @param ctx the parse tree
	 */
	enterDir_object_name?: (ctx: Dir_object_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.dir_object_name`.
	 * @param ctx the parse tree
	 */
	exitDir_object_name?: (ctx: Dir_object_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.user_object_name`.
	 * @param ctx the parse tree
	 */
	enterUser_object_name?: (ctx: User_object_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.user_object_name`.
	 * @param ctx the parse tree
	 */
	exitUser_object_name?: (ctx: User_object_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.grant_object_name`.
	 * @param ctx the parse tree
	 */
	enterGrant_object_name?: (ctx: Grant_object_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.grant_object_name`.
	 * @param ctx the parse tree
	 */
	exitGrant_object_name?: (ctx: Grant_object_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.column_list`.
	 * @param ctx the parse tree
	 */
	enterColumn_list?: (ctx: Column_listContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.column_list`.
	 * @param ctx the parse tree
	 */
	exitColumn_list?: (ctx: Column_listContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.paren_column_list`.
	 * @param ctx the parse tree
	 */
	enterParen_column_list?: (ctx: Paren_column_listContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.paren_column_list`.
	 * @param ctx the parse tree
	 */
	exitParen_column_list?: (ctx: Paren_column_listContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.keep_clause`.
	 * @param ctx the parse tree
	 */
	enterKeep_clause?: (ctx: Keep_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.keep_clause`.
	 * @param ctx the parse tree
	 */
	exitKeep_clause?: (ctx: Keep_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.function_argument`.
	 * @param ctx the parse tree
	 */
	enterFunction_argument?: (ctx: Function_argumentContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.function_argument`.
	 * @param ctx the parse tree
	 */
	exitFunction_argument?: (ctx: Function_argumentContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.function_argument_analytic`.
	 * @param ctx the parse tree
	 */
	enterFunction_argument_analytic?: (ctx: Function_argument_analyticContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.function_argument_analytic`.
	 * @param ctx the parse tree
	 */
	exitFunction_argument_analytic?: (ctx: Function_argument_analyticContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.function_argument_modeling`.
	 * @param ctx the parse tree
	 */
	enterFunction_argument_modeling?: (ctx: Function_argument_modelingContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.function_argument_modeling`.
	 * @param ctx the parse tree
	 */
	exitFunction_argument_modeling?: (ctx: Function_argument_modelingContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.respect_or_ignore_nulls`.
	 * @param ctx the parse tree
	 */
	enterRespect_or_ignore_nulls?: (ctx: Respect_or_ignore_nullsContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.respect_or_ignore_nulls`.
	 * @param ctx the parse tree
	 */
	exitRespect_or_ignore_nulls?: (ctx: Respect_or_ignore_nullsContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.type_spec`.
	 * @param ctx the parse tree
	 */
	enterType_spec?: (ctx: Type_specContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.type_spec`.
	 * @param ctx the parse tree
	 */
	exitType_spec?: (ctx: Type_specContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.datatype`.
	 * @param ctx the parse tree
	 */
	enterDatatype?: (ctx: DatatypeContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.datatype`.
	 * @param ctx the parse tree
	 */
	exitDatatype?: (ctx: DatatypeContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.precision_part`.
	 * @param ctx the parse tree
	 */
	enterPrecision_part?: (ctx: Precision_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.precision_part`.
	 * @param ctx the parse tree
	 */
	exitPrecision_part?: (ctx: Precision_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.native_datatype_element`.
	 * @param ctx the parse tree
	 */
	enterNative_datatype_element?: (ctx: Native_datatype_elementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.native_datatype_element`.
	 * @param ctx the parse tree
	 */
	exitNative_datatype_element?: (ctx: Native_datatype_elementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.bind_variable`.
	 * @param ctx the parse tree
	 */
	enterBind_variable?: (ctx: Bind_variableContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.bind_variable`.
	 * @param ctx the parse tree
	 */
	exitBind_variable?: (ctx: Bind_variableContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.general_element`.
	 * @param ctx the parse tree
	 */
	enterGeneral_element?: (ctx: General_elementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.general_element`.
	 * @param ctx the parse tree
	 */
	exitGeneral_element?: (ctx: General_elementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.general_element_part`.
	 * @param ctx the parse tree
	 */
	enterGeneral_element_part?: (ctx: General_element_partContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.general_element_part`.
	 * @param ctx the parse tree
	 */
	exitGeneral_element_part?: (ctx: General_element_partContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.table_element`.
	 * @param ctx the parse tree
	 */
	enterTable_element?: (ctx: Table_elementContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.table_element`.
	 * @param ctx the parse tree
	 */
	exitTable_element?: (ctx: Table_elementContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.object_privilege`.
	 * @param ctx the parse tree
	 */
	enterObject_privilege?: (ctx: Object_privilegeContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.object_privilege`.
	 * @param ctx the parse tree
	 */
	exitObject_privilege?: (ctx: Object_privilegeContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.system_privilege`.
	 * @param ctx the parse tree
	 */
	enterSystem_privilege?: (ctx: System_privilegeContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.system_privilege`.
	 * @param ctx the parse tree
	 */
	exitSystem_privilege?: (ctx: System_privilegeContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.numeric`.
	 * @param ctx the parse tree
	 */
	enterNumeric?: (ctx: NumericContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.numeric`.
	 * @param ctx the parse tree
	 */
	exitNumeric?: (ctx: NumericContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.numeric_negative`.
	 * @param ctx the parse tree
	 */
	enterNumeric_negative?: (ctx: Numeric_negativeContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.numeric_negative`.
	 * @param ctx the parse tree
	 */
	exitNumeric_negative?: (ctx: Numeric_negativeContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.quoted_string`.
	 * @param ctx the parse tree
	 */
	enterQuoted_string?: (ctx: Quoted_stringContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.quoted_string`.
	 * @param ctx the parse tree
	 */
	exitQuoted_string?: (ctx: Quoted_stringContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.id_expression`.
	 * @param ctx the parse tree
	 */
	enterId_expression?: (ctx: Id_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.id_expression`.
	 * @param ctx the parse tree
	 */
	exitId_expression?: (ctx: Id_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.outer_join_sign`.
	 * @param ctx the parse tree
	 */
	enterOuter_join_sign?: (ctx: Outer_join_signContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.outer_join_sign`.
	 * @param ctx the parse tree
	 */
	exitOuter_join_sign?: (ctx: Outer_join_signContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.regular_id`.
	 * @param ctx the parse tree
	 */
	enterRegular_id?: (ctx: Regular_idContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.regular_id`.
	 * @param ctx the parse tree
	 */
	exitRegular_id?: (ctx: Regular_idContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.non_reserved_keywords_in_12c`.
	 * @param ctx the parse tree
	 */
	enterNon_reserved_keywords_in_12c?: (ctx: Non_reserved_keywords_in_12cContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.non_reserved_keywords_in_12c`.
	 * @param ctx the parse tree
	 */
	exitNon_reserved_keywords_in_12c?: (ctx: Non_reserved_keywords_in_12cContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.non_reserved_keywords_pre12c`.
	 * @param ctx the parse tree
	 */
	enterNon_reserved_keywords_pre12c?: (ctx: Non_reserved_keywords_pre12cContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.non_reserved_keywords_pre12c`.
	 * @param ctx the parse tree
	 */
	exitNon_reserved_keywords_pre12c?: (ctx: Non_reserved_keywords_pre12cContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.string_function_name`.
	 * @param ctx the parse tree
	 */
	enterString_function_name?: (ctx: String_function_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.string_function_name`.
	 * @param ctx the parse tree
	 */
	exitString_function_name?: (ctx: String_function_nameContext) => void;
	/**
	 * Enter a parse tree produced by `PlSqlParser.numeric_function_name`.
	 * @param ctx the parse tree
	 */
	enterNumeric_function_name?: (ctx: Numeric_function_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PlSqlParser.numeric_function_name`.
	 * @param ctx the parse tree
	 */
	exitNumeric_function_name?: (ctx: Numeric_function_nameContext) => void;
}

