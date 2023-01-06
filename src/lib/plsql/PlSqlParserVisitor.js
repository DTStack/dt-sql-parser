// Generated from /Users/ziv/github.com/dt-sql-parser/src/grammar/plsql/PlSqlParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by PlSqlParser.

function PlSqlParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

PlSqlParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
PlSqlParserVisitor.prototype.constructor = PlSqlParserVisitor;

// Visit a parse tree produced by PlSqlParser#program.
PlSqlParserVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#sql_script.
PlSqlParserVisitor.prototype.visitSql_script = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#unit_statement.
PlSqlParserVisitor.prototype.visitUnit_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#drop_function.
PlSqlParserVisitor.prototype.visitDrop_function = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_function.
PlSqlParserVisitor.prototype.visitAlter_function = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#create_function_body.
PlSqlParserVisitor.prototype.visitCreate_function_body = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#parallel_enable_clause.
PlSqlParserVisitor.prototype.visitParallel_enable_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#partition_by_clause.
PlSqlParserVisitor.prototype.visitPartition_by_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#result_cache_clause.
PlSqlParserVisitor.prototype.visitResult_cache_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#relies_on_part.
PlSqlParserVisitor.prototype.visitRelies_on_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#streaming_clause.
PlSqlParserVisitor.prototype.visitStreaming_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#drop_package.
PlSqlParserVisitor.prototype.visitDrop_package = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_package.
PlSqlParserVisitor.prototype.visitAlter_package = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#create_package.
PlSqlParserVisitor.prototype.visitCreate_package = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#create_package_body.
PlSqlParserVisitor.prototype.visitCreate_package_body = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#package_obj_spec.
PlSqlParserVisitor.prototype.visitPackage_obj_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#procedure_spec.
PlSqlParserVisitor.prototype.visitProcedure_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#function_spec.
PlSqlParserVisitor.prototype.visitFunction_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#package_obj_body.
PlSqlParserVisitor.prototype.visitPackage_obj_body = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#drop_procedure.
PlSqlParserVisitor.prototype.visitDrop_procedure = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_procedure.
PlSqlParserVisitor.prototype.visitAlter_procedure = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#function_body.
PlSqlParserVisitor.prototype.visitFunction_body = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#procedure_body.
PlSqlParserVisitor.prototype.visitProcedure_body = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#create_procedure_body.
PlSqlParserVisitor.prototype.visitCreate_procedure_body = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#drop_trigger.
PlSqlParserVisitor.prototype.visitDrop_trigger = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_trigger.
PlSqlParserVisitor.prototype.visitAlter_trigger = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#create_trigger.
PlSqlParserVisitor.prototype.visitCreate_trigger = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#trigger_follows_clause.
PlSqlParserVisitor.prototype.visitTrigger_follows_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#trigger_when_clause.
PlSqlParserVisitor.prototype.visitTrigger_when_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#simple_dml_trigger.
PlSqlParserVisitor.prototype.visitSimple_dml_trigger = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#for_each_row.
PlSqlParserVisitor.prototype.visitFor_each_row = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#compound_dml_trigger.
PlSqlParserVisitor.prototype.visitCompound_dml_trigger = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#non_dml_trigger.
PlSqlParserVisitor.prototype.visitNon_dml_trigger = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#trigger_body.
PlSqlParserVisitor.prototype.visitTrigger_body = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#routine_clause.
PlSqlParserVisitor.prototype.visitRoutine_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#compound_trigger_block.
PlSqlParserVisitor.prototype.visitCompound_trigger_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#timing_point_section.
PlSqlParserVisitor.prototype.visitTiming_point_section = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#non_dml_event.
PlSqlParserVisitor.prototype.visitNon_dml_event = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#dml_event_clause.
PlSqlParserVisitor.prototype.visitDml_event_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#dml_event_element.
PlSqlParserVisitor.prototype.visitDml_event_element = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#dml_event_nested_clause.
PlSqlParserVisitor.prototype.visitDml_event_nested_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#referencing_clause.
PlSqlParserVisitor.prototype.visitReferencing_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#referencing_element.
PlSqlParserVisitor.prototype.visitReferencing_element = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#drop_type.
PlSqlParserVisitor.prototype.visitDrop_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_type.
PlSqlParserVisitor.prototype.visitAlter_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#compile_type_clause.
PlSqlParserVisitor.prototype.visitCompile_type_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#replace_type_clause.
PlSqlParserVisitor.prototype.visitReplace_type_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_method_spec.
PlSqlParserVisitor.prototype.visitAlter_method_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_method_element.
PlSqlParserVisitor.prototype.visitAlter_method_element = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_attribute_definition.
PlSqlParserVisitor.prototype.visitAlter_attribute_definition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#attribute_definition.
PlSqlParserVisitor.prototype.visitAttribute_definition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_collection_clauses.
PlSqlParserVisitor.prototype.visitAlter_collection_clauses = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#dependent_handling_clause.
PlSqlParserVisitor.prototype.visitDependent_handling_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#dependent_exceptions_part.
PlSqlParserVisitor.prototype.visitDependent_exceptions_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#create_type.
PlSqlParserVisitor.prototype.visitCreate_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#type_definition.
PlSqlParserVisitor.prototype.visitType_definition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#object_type_def.
PlSqlParserVisitor.prototype.visitObject_type_def = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#object_as_part.
PlSqlParserVisitor.prototype.visitObject_as_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#object_under_part.
PlSqlParserVisitor.prototype.visitObject_under_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#nested_table_type_def.
PlSqlParserVisitor.prototype.visitNested_table_type_def = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#sqlj_object_type.
PlSqlParserVisitor.prototype.visitSqlj_object_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#type_body.
PlSqlParserVisitor.prototype.visitType_body = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#type_body_elements.
PlSqlParserVisitor.prototype.visitType_body_elements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#map_order_func_declaration.
PlSqlParserVisitor.prototype.visitMap_order_func_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#subprog_decl_in_type.
PlSqlParserVisitor.prototype.visitSubprog_decl_in_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#proc_decl_in_type.
PlSqlParserVisitor.prototype.visitProc_decl_in_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#func_decl_in_type.
PlSqlParserVisitor.prototype.visitFunc_decl_in_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#constructor_declaration.
PlSqlParserVisitor.prototype.visitConstructor_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#modifier_clause.
PlSqlParserVisitor.prototype.visitModifier_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#object_member_spec.
PlSqlParserVisitor.prototype.visitObject_member_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#sqlj_object_type_attr.
PlSqlParserVisitor.prototype.visitSqlj_object_type_attr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#element_spec.
PlSqlParserVisitor.prototype.visitElement_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#element_spec_options.
PlSqlParserVisitor.prototype.visitElement_spec_options = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#subprogram_spec.
PlSqlParserVisitor.prototype.visitSubprogram_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#overriding_subprogram_spec.
PlSqlParserVisitor.prototype.visitOverriding_subprogram_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#overriding_function_spec.
PlSqlParserVisitor.prototype.visitOverriding_function_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#type_procedure_spec.
PlSqlParserVisitor.prototype.visitType_procedure_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#type_function_spec.
PlSqlParserVisitor.prototype.visitType_function_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#constructor_spec.
PlSqlParserVisitor.prototype.visitConstructor_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#map_order_function_spec.
PlSqlParserVisitor.prototype.visitMap_order_function_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#pragma_clause.
PlSqlParserVisitor.prototype.visitPragma_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#pragma_elements.
PlSqlParserVisitor.prototype.visitPragma_elements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#type_elements_parameter.
PlSqlParserVisitor.prototype.visitType_elements_parameter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#drop_sequence.
PlSqlParserVisitor.prototype.visitDrop_sequence = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_sequence.
PlSqlParserVisitor.prototype.visitAlter_sequence = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_session.
PlSqlParserVisitor.prototype.visitAlter_session = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_session_set_clause.
PlSqlParserVisitor.prototype.visitAlter_session_set_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#create_sequence.
PlSqlParserVisitor.prototype.visitCreate_sequence = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#sequence_spec.
PlSqlParserVisitor.prototype.visitSequence_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#sequence_start_clause.
PlSqlParserVisitor.prototype.visitSequence_start_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#create_index.
PlSqlParserVisitor.prototype.visitCreate_index = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#cluster_index_clause.
PlSqlParserVisitor.prototype.visitCluster_index_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#cluster_name.
PlSqlParserVisitor.prototype.visitCluster_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#table_index_clause.
PlSqlParserVisitor.prototype.visitTable_index_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#bitmap_join_index_clause.
PlSqlParserVisitor.prototype.visitBitmap_join_index_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#index_expr.
PlSqlParserVisitor.prototype.visitIndex_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#index_properties.
PlSqlParserVisitor.prototype.visitIndex_properties = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#domain_index_clause.
PlSqlParserVisitor.prototype.visitDomain_index_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#local_domain_index_clause.
PlSqlParserVisitor.prototype.visitLocal_domain_index_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#xmlindex_clause.
PlSqlParserVisitor.prototype.visitXmlindex_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#local_xmlindex_clause.
PlSqlParserVisitor.prototype.visitLocal_xmlindex_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#global_partitioned_index.
PlSqlParserVisitor.prototype.visitGlobal_partitioned_index = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#index_partitioning_clause.
PlSqlParserVisitor.prototype.visitIndex_partitioning_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#local_partitioned_index.
PlSqlParserVisitor.prototype.visitLocal_partitioned_index = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#on_range_partitioned_table.
PlSqlParserVisitor.prototype.visitOn_range_partitioned_table = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#on_list_partitioned_table.
PlSqlParserVisitor.prototype.visitOn_list_partitioned_table = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#partitioned_table.
PlSqlParserVisitor.prototype.visitPartitioned_table = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#on_hash_partitioned_table.
PlSqlParserVisitor.prototype.visitOn_hash_partitioned_table = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#on_hash_partitioned_clause.
PlSqlParserVisitor.prototype.visitOn_hash_partitioned_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#on_comp_partitioned_table.
PlSqlParserVisitor.prototype.visitOn_comp_partitioned_table = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#on_comp_partitioned_clause.
PlSqlParserVisitor.prototype.visitOn_comp_partitioned_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#index_subpartition_clause.
PlSqlParserVisitor.prototype.visitIndex_subpartition_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#index_subpartition_subclause.
PlSqlParserVisitor.prototype.visitIndex_subpartition_subclause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#odci_parameters.
PlSqlParserVisitor.prototype.visitOdci_parameters = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#indextype.
PlSqlParserVisitor.prototype.visitIndextype = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_index.
PlSqlParserVisitor.prototype.visitAlter_index = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_index_ops_set1.
PlSqlParserVisitor.prototype.visitAlter_index_ops_set1 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_index_ops_set2.
PlSqlParserVisitor.prototype.visitAlter_index_ops_set2 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#visible_or_invisible.
PlSqlParserVisitor.prototype.visitVisible_or_invisible = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#monitoring_nomonitoring.
PlSqlParserVisitor.prototype.visitMonitoring_nomonitoring = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#rebuild_clause.
PlSqlParserVisitor.prototype.visitRebuild_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_index_partitioning.
PlSqlParserVisitor.prototype.visitAlter_index_partitioning = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#modify_index_default_attrs.
PlSqlParserVisitor.prototype.visitModify_index_default_attrs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#add_hash_index_partition.
PlSqlParserVisitor.prototype.visitAdd_hash_index_partition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#coalesce_index_partition.
PlSqlParserVisitor.prototype.visitCoalesce_index_partition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#modify_index_partition.
PlSqlParserVisitor.prototype.visitModify_index_partition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#modify_index_partitions_ops.
PlSqlParserVisitor.prototype.visitModify_index_partitions_ops = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#rename_index_partition.
PlSqlParserVisitor.prototype.visitRename_index_partition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#drop_index_partition.
PlSqlParserVisitor.prototype.visitDrop_index_partition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#split_index_partition.
PlSqlParserVisitor.prototype.visitSplit_index_partition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#index_partition_description.
PlSqlParserVisitor.prototype.visitIndex_partition_description = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#modify_index_subpartition.
PlSqlParserVisitor.prototype.visitModify_index_subpartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#partition_name_old.
PlSqlParserVisitor.prototype.visitPartition_name_old = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#new_partition_name.
PlSqlParserVisitor.prototype.visitNew_partition_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#new_index_name.
PlSqlParserVisitor.prototype.visitNew_index_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#create_user.
PlSqlParserVisitor.prototype.visitCreate_user = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_user.
PlSqlParserVisitor.prototype.visitAlter_user = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_identified_by.
PlSqlParserVisitor.prototype.visitAlter_identified_by = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#identified_by.
PlSqlParserVisitor.prototype.visitIdentified_by = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#identified_other_clause.
PlSqlParserVisitor.prototype.visitIdentified_other_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#user_tablespace_clause.
PlSqlParserVisitor.prototype.visitUser_tablespace_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#quota_clause.
PlSqlParserVisitor.prototype.visitQuota_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#profile_clause.
PlSqlParserVisitor.prototype.visitProfile_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#role_clause.
PlSqlParserVisitor.prototype.visitRole_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#user_default_role_clause.
PlSqlParserVisitor.prototype.visitUser_default_role_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#password_expire_clause.
PlSqlParserVisitor.prototype.visitPassword_expire_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#user_lock_clause.
PlSqlParserVisitor.prototype.visitUser_lock_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#user_editions_clause.
PlSqlParserVisitor.prototype.visitUser_editions_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_user_editions_clause.
PlSqlParserVisitor.prototype.visitAlter_user_editions_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#proxy_clause.
PlSqlParserVisitor.prototype.visitProxy_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#container_names.
PlSqlParserVisitor.prototype.visitContainer_names = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#set_container_data.
PlSqlParserVisitor.prototype.visitSet_container_data = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#add_rem_container_data.
PlSqlParserVisitor.prototype.visitAdd_rem_container_data = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#container_data_clause.
PlSqlParserVisitor.prototype.visitContainer_data_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#analyze.
PlSqlParserVisitor.prototype.visitAnalyze = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#partition_extention_clause.
PlSqlParserVisitor.prototype.visitPartition_extention_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#validation_clauses.
PlSqlParserVisitor.prototype.visitValidation_clauses = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#online_or_offline.
PlSqlParserVisitor.prototype.visitOnline_or_offline = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#into_clause1.
PlSqlParserVisitor.prototype.visitInto_clause1 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#partition_key_value.
PlSqlParserVisitor.prototype.visitPartition_key_value = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#subpartition_key_value.
PlSqlParserVisitor.prototype.visitSubpartition_key_value = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#associate_statistics.
PlSqlParserVisitor.prototype.visitAssociate_statistics = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#column_association.
PlSqlParserVisitor.prototype.visitColumn_association = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#function_association.
PlSqlParserVisitor.prototype.visitFunction_association = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#indextype_name.
PlSqlParserVisitor.prototype.visitIndextype_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#using_statistics_type.
PlSqlParserVisitor.prototype.visitUsing_statistics_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#statistics_type_name.
PlSqlParserVisitor.prototype.visitStatistics_type_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#default_cost_clause.
PlSqlParserVisitor.prototype.visitDefault_cost_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#cpu_cost.
PlSqlParserVisitor.prototype.visitCpu_cost = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#io_cost.
PlSqlParserVisitor.prototype.visitIo_cost = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#network_cost.
PlSqlParserVisitor.prototype.visitNetwork_cost = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#default_selectivity_clause.
PlSqlParserVisitor.prototype.visitDefault_selectivity_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#default_selectivity.
PlSqlParserVisitor.prototype.visitDefault_selectivity = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#storage_table_clause.
PlSqlParserVisitor.prototype.visitStorage_table_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#unified_auditing.
PlSqlParserVisitor.prototype.visitUnified_auditing = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#policy_name.
PlSqlParserVisitor.prototype.visitPolicy_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#audit_traditional.
PlSqlParserVisitor.prototype.visitAudit_traditional = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#audit_direct_path.
PlSqlParserVisitor.prototype.visitAudit_direct_path = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#audit_container_clause.
PlSqlParserVisitor.prototype.visitAudit_container_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#audit_operation_clause.
PlSqlParserVisitor.prototype.visitAudit_operation_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#auditing_by_clause.
PlSqlParserVisitor.prototype.visitAuditing_by_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#audit_user.
PlSqlParserVisitor.prototype.visitAudit_user = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#audit_schema_object_clause.
PlSqlParserVisitor.prototype.visitAudit_schema_object_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#sql_operation.
PlSqlParserVisitor.prototype.visitSql_operation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#auditing_on_clause.
PlSqlParserVisitor.prototype.visitAuditing_on_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#model_name.
PlSqlParserVisitor.prototype.visitModel_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#object_name.
PlSqlParserVisitor.prototype.visitObject_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#profile_name.
PlSqlParserVisitor.prototype.visitProfile_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#sql_statement_shortcut.
PlSqlParserVisitor.prototype.visitSql_statement_shortcut = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#drop_index.
PlSqlParserVisitor.prototype.visitDrop_index = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#rename_object.
PlSqlParserVisitor.prototype.visitRename_object = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#grant_statement.
PlSqlParserVisitor.prototype.visitGrant_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#container_clause.
PlSqlParserVisitor.prototype.visitContainer_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#create_directory.
PlSqlParserVisitor.prototype.visitCreate_directory = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#directory_name.
PlSqlParserVisitor.prototype.visitDirectory_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#directory_path.
PlSqlParserVisitor.prototype.visitDirectory_path = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_library.
PlSqlParserVisitor.prototype.visitAlter_library = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#library_editionable.
PlSqlParserVisitor.prototype.visitLibrary_editionable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#library_debug.
PlSqlParserVisitor.prototype.visitLibrary_debug = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#compiler_parameters_clause.
PlSqlParserVisitor.prototype.visitCompiler_parameters_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#parameter_value.
PlSqlParserVisitor.prototype.visitParameter_value = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#library_name.
PlSqlParserVisitor.prototype.visitLibrary_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_view.
PlSqlParserVisitor.prototype.visitAlter_view = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_view_editionable.
PlSqlParserVisitor.prototype.visitAlter_view_editionable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#create_view.
PlSqlParserVisitor.prototype.visitCreate_view = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#view_options.
PlSqlParserVisitor.prototype.visitView_options = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#view_alias_constraint.
PlSqlParserVisitor.prototype.visitView_alias_constraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#object_view_clause.
PlSqlParserVisitor.prototype.visitObject_view_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#inline_constraint.
PlSqlParserVisitor.prototype.visitInline_constraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#inline_ref_constraint.
PlSqlParserVisitor.prototype.visitInline_ref_constraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#out_of_line_ref_constraint.
PlSqlParserVisitor.prototype.visitOut_of_line_ref_constraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#out_of_line_constraint.
PlSqlParserVisitor.prototype.visitOut_of_line_constraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#constraint_state.
PlSqlParserVisitor.prototype.visitConstraint_state = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_tablespace.
PlSqlParserVisitor.prototype.visitAlter_tablespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#datafile_tempfile_clauses.
PlSqlParserVisitor.prototype.visitDatafile_tempfile_clauses = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#tablespace_logging_clauses.
PlSqlParserVisitor.prototype.visitTablespace_logging_clauses = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#tablespace_group_clause.
PlSqlParserVisitor.prototype.visitTablespace_group_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#tablespace_group_name.
PlSqlParserVisitor.prototype.visitTablespace_group_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#tablespace_state_clauses.
PlSqlParserVisitor.prototype.visitTablespace_state_clauses = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#flashback_mode_clause.
PlSqlParserVisitor.prototype.visitFlashback_mode_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#new_tablespace_name.
PlSqlParserVisitor.prototype.visitNew_tablespace_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#create_tablespace.
PlSqlParserVisitor.prototype.visitCreate_tablespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#permanent_tablespace_clause.
PlSqlParserVisitor.prototype.visitPermanent_tablespace_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#tablespace_encryption_spec.
PlSqlParserVisitor.prototype.visitTablespace_encryption_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#logging_clause.
PlSqlParserVisitor.prototype.visitLogging_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#extent_management_clause.
PlSqlParserVisitor.prototype.visitExtent_management_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#segment_management_clause.
PlSqlParserVisitor.prototype.visitSegment_management_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#temporary_tablespace_clause.
PlSqlParserVisitor.prototype.visitTemporary_tablespace_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#undo_tablespace_clause.
PlSqlParserVisitor.prototype.visitUndo_tablespace_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#tablespace_retention_clause.
PlSqlParserVisitor.prototype.visitTablespace_retention_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#datafile_specification.
PlSqlParserVisitor.prototype.visitDatafile_specification = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#tempfile_specification.
PlSqlParserVisitor.prototype.visitTempfile_specification = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#datafile_tempfile_spec.
PlSqlParserVisitor.prototype.visitDatafile_tempfile_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#redo_log_file_spec.
PlSqlParserVisitor.prototype.visitRedo_log_file_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#autoextend_clause.
PlSqlParserVisitor.prototype.visitAutoextend_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#maxsize_clause.
PlSqlParserVisitor.prototype.visitMaxsize_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#build_clause.
PlSqlParserVisitor.prototype.visitBuild_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#parallel_clause.
PlSqlParserVisitor.prototype.visitParallel_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_materialized_view.
PlSqlParserVisitor.prototype.visitAlter_materialized_view = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_mv_option1.
PlSqlParserVisitor.prototype.visitAlter_mv_option1 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_mv_refresh.
PlSqlParserVisitor.prototype.visitAlter_mv_refresh = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#rollback_segment.
PlSqlParserVisitor.prototype.visitRollback_segment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#modify_mv_column_clause.
PlSqlParserVisitor.prototype.visitModify_mv_column_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_materialized_view_log.
PlSqlParserVisitor.prototype.visitAlter_materialized_view_log = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#add_mv_log_column_clause.
PlSqlParserVisitor.prototype.visitAdd_mv_log_column_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#move_mv_log_clause.
PlSqlParserVisitor.prototype.visitMove_mv_log_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#mv_log_augmentation.
PlSqlParserVisitor.prototype.visitMv_log_augmentation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#datetime_expr.
PlSqlParserVisitor.prototype.visitDatetime_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#interval_expr.
PlSqlParserVisitor.prototype.visitInterval_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#synchronous_or_asynchronous.
PlSqlParserVisitor.prototype.visitSynchronous_or_asynchronous = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#including_or_excluding.
PlSqlParserVisitor.prototype.visitIncluding_or_excluding = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#create_materialized_view_log.
PlSqlParserVisitor.prototype.visitCreate_materialized_view_log = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#new_values_clause.
PlSqlParserVisitor.prototype.visitNew_values_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#mv_log_purge_clause.
PlSqlParserVisitor.prototype.visitMv_log_purge_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#create_materialized_view.
PlSqlParserVisitor.prototype.visitCreate_materialized_view = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#create_mv_refresh.
PlSqlParserVisitor.prototype.visitCreate_mv_refresh = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#create_context.
PlSqlParserVisitor.prototype.visitCreate_context = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#oracle_namespace.
PlSqlParserVisitor.prototype.visitOracle_namespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#create_cluster.
PlSqlParserVisitor.prototype.visitCreate_cluster = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#create_table.
PlSqlParserVisitor.prototype.visitCreate_table = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#xmltype_table.
PlSqlParserVisitor.prototype.visitXmltype_table = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#xmltype_virtual_columns.
PlSqlParserVisitor.prototype.visitXmltype_virtual_columns = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#xmltype_column_properties.
PlSqlParserVisitor.prototype.visitXmltype_column_properties = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#xmltype_storage.
PlSqlParserVisitor.prototype.visitXmltype_storage = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#xmlschema_spec.
PlSqlParserVisitor.prototype.visitXmlschema_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#object_table.
PlSqlParserVisitor.prototype.visitObject_table = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#oid_index_clause.
PlSqlParserVisitor.prototype.visitOid_index_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#oid_clause.
PlSqlParserVisitor.prototype.visitOid_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#object_properties.
PlSqlParserVisitor.prototype.visitObject_properties = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#object_table_substitution.
PlSqlParserVisitor.prototype.visitObject_table_substitution = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#relational_table.
PlSqlParserVisitor.prototype.visitRelational_table = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#relational_property.
PlSqlParserVisitor.prototype.visitRelational_property = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#table_partitioning_clauses.
PlSqlParserVisitor.prototype.visitTable_partitioning_clauses = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#range_partitions.
PlSqlParserVisitor.prototype.visitRange_partitions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#list_partitions.
PlSqlParserVisitor.prototype.visitList_partitions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#hash_partitions.
PlSqlParserVisitor.prototype.visitHash_partitions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#individual_hash_partitions.
PlSqlParserVisitor.prototype.visitIndividual_hash_partitions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#hash_partitions_by_quantity.
PlSqlParserVisitor.prototype.visitHash_partitions_by_quantity = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#hash_partition_quantity.
PlSqlParserVisitor.prototype.visitHash_partition_quantity = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#composite_range_partitions.
PlSqlParserVisitor.prototype.visitComposite_range_partitions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#composite_list_partitions.
PlSqlParserVisitor.prototype.visitComposite_list_partitions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#composite_hash_partitions.
PlSqlParserVisitor.prototype.visitComposite_hash_partitions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#reference_partitioning.
PlSqlParserVisitor.prototype.visitReference_partitioning = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#reference_partition_desc.
PlSqlParserVisitor.prototype.visitReference_partition_desc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#system_partitioning.
PlSqlParserVisitor.prototype.visitSystem_partitioning = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#range_partition_desc.
PlSqlParserVisitor.prototype.visitRange_partition_desc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#list_partition_desc.
PlSqlParserVisitor.prototype.visitList_partition_desc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#subpartition_template.
PlSqlParserVisitor.prototype.visitSubpartition_template = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#hash_subpartition_quantity.
PlSqlParserVisitor.prototype.visitHash_subpartition_quantity = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#subpartition_by_range.
PlSqlParserVisitor.prototype.visitSubpartition_by_range = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#subpartition_by_list.
PlSqlParserVisitor.prototype.visitSubpartition_by_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#subpartition_by_hash.
PlSqlParserVisitor.prototype.visitSubpartition_by_hash = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#subpartition_name.
PlSqlParserVisitor.prototype.visitSubpartition_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#range_subpartition_desc.
PlSqlParserVisitor.prototype.visitRange_subpartition_desc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#list_subpartition_desc.
PlSqlParserVisitor.prototype.visitList_subpartition_desc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#individual_hash_subparts.
PlSqlParserVisitor.prototype.visitIndividual_hash_subparts = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#hash_subparts_by_quantity.
PlSqlParserVisitor.prototype.visitHash_subparts_by_quantity = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#range_values_clause.
PlSqlParserVisitor.prototype.visitRange_values_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#list_values_clause.
PlSqlParserVisitor.prototype.visitList_values_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#table_partition_description.
PlSqlParserVisitor.prototype.visitTable_partition_description = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#partitioning_storage_clause.
PlSqlParserVisitor.prototype.visitPartitioning_storage_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#lob_partitioning_storage.
PlSqlParserVisitor.prototype.visitLob_partitioning_storage = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#datatype_null_enable.
PlSqlParserVisitor.prototype.visitDatatype_null_enable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#size_clause.
PlSqlParserVisitor.prototype.visitSize_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#table_compression.
PlSqlParserVisitor.prototype.visitTable_compression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#physical_attributes_clause.
PlSqlParserVisitor.prototype.visitPhysical_attributes_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#storage_clause.
PlSqlParserVisitor.prototype.visitStorage_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#deferred_segment_creation.
PlSqlParserVisitor.prototype.visitDeferred_segment_creation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#segment_attributes_clause.
PlSqlParserVisitor.prototype.visitSegment_attributes_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#physical_properties.
PlSqlParserVisitor.prototype.visitPhysical_properties = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#row_movement_clause.
PlSqlParserVisitor.prototype.visitRow_movement_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#flashback_archive_clause.
PlSqlParserVisitor.prototype.visitFlashback_archive_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#log_grp.
PlSqlParserVisitor.prototype.visitLog_grp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#supplemental_table_logging.
PlSqlParserVisitor.prototype.visitSupplemental_table_logging = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#supplemental_log_grp_clause.
PlSqlParserVisitor.prototype.visitSupplemental_log_grp_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#supplemental_id_key_clause.
PlSqlParserVisitor.prototype.visitSupplemental_id_key_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#allocate_extent_clause.
PlSqlParserVisitor.prototype.visitAllocate_extent_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#deallocate_unused_clause.
PlSqlParserVisitor.prototype.visitDeallocate_unused_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#shrink_clause.
PlSqlParserVisitor.prototype.visitShrink_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#records_per_block_clause.
PlSqlParserVisitor.prototype.visitRecords_per_block_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#upgrade_table_clause.
PlSqlParserVisitor.prototype.visitUpgrade_table_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#drop_table.
PlSqlParserVisitor.prototype.visitDrop_table = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#drop_view.
PlSqlParserVisitor.prototype.visitDrop_view = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#comment_on_column.
PlSqlParserVisitor.prototype.visitComment_on_column = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#enable_or_disable.
PlSqlParserVisitor.prototype.visitEnable_or_disable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#allow_or_disallow.
PlSqlParserVisitor.prototype.visitAllow_or_disallow = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#create_synonym.
PlSqlParserVisitor.prototype.visitCreate_synonym = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#comment_on_table.
PlSqlParserVisitor.prototype.visitComment_on_table = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_cluster.
PlSqlParserVisitor.prototype.visitAlter_cluster = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#cache_or_nocache.
PlSqlParserVisitor.prototype.visitCache_or_nocache = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#database_name.
PlSqlParserVisitor.prototype.visitDatabase_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_database.
PlSqlParserVisitor.prototype.visitAlter_database = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#startup_clauses.
PlSqlParserVisitor.prototype.visitStartup_clauses = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#resetlogs_or_noresetlogs.
PlSqlParserVisitor.prototype.visitResetlogs_or_noresetlogs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#upgrade_or_downgrade.
PlSqlParserVisitor.prototype.visitUpgrade_or_downgrade = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#recovery_clauses.
PlSqlParserVisitor.prototype.visitRecovery_clauses = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#begin_or_end.
PlSqlParserVisitor.prototype.visitBegin_or_end = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#general_recovery.
PlSqlParserVisitor.prototype.visitGeneral_recovery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#full_database_recovery.
PlSqlParserVisitor.prototype.visitFull_database_recovery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#partial_database_recovery.
PlSqlParserVisitor.prototype.visitPartial_database_recovery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#partial_database_recovery_10g.
PlSqlParserVisitor.prototype.visitPartial_database_recovery_10g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#managed_standby_recovery.
PlSqlParserVisitor.prototype.visitManaged_standby_recovery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#db_name.
PlSqlParserVisitor.prototype.visitDb_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#database_file_clauses.
PlSqlParserVisitor.prototype.visitDatabase_file_clauses = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#create_datafile_clause.
PlSqlParserVisitor.prototype.visitCreate_datafile_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_datafile_clause.
PlSqlParserVisitor.prototype.visitAlter_datafile_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_tempfile_clause.
PlSqlParserVisitor.prototype.visitAlter_tempfile_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#logfile_clauses.
PlSqlParserVisitor.prototype.visitLogfile_clauses = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#add_logfile_clauses.
PlSqlParserVisitor.prototype.visitAdd_logfile_clauses = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#log_file_group.
PlSqlParserVisitor.prototype.visitLog_file_group = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#drop_logfile_clauses.
PlSqlParserVisitor.prototype.visitDrop_logfile_clauses = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#switch_logfile_clause.
PlSqlParserVisitor.prototype.visitSwitch_logfile_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#supplemental_db_logging.
PlSqlParserVisitor.prototype.visitSupplemental_db_logging = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#add_or_drop.
PlSqlParserVisitor.prototype.visitAdd_or_drop = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#supplemental_plsql_clause.
PlSqlParserVisitor.prototype.visitSupplemental_plsql_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#logfile_descriptor.
PlSqlParserVisitor.prototype.visitLogfile_descriptor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#controlfile_clauses.
PlSqlParserVisitor.prototype.visitControlfile_clauses = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#trace_file_clause.
PlSqlParserVisitor.prototype.visitTrace_file_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#standby_database_clauses.
PlSqlParserVisitor.prototype.visitStandby_database_clauses = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#activate_standby_db_clause.
PlSqlParserVisitor.prototype.visitActivate_standby_db_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#maximize_standby_db_clause.
PlSqlParserVisitor.prototype.visitMaximize_standby_db_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#register_logfile_clause.
PlSqlParserVisitor.prototype.visitRegister_logfile_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#commit_switchover_clause.
PlSqlParserVisitor.prototype.visitCommit_switchover_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#start_standby_clause.
PlSqlParserVisitor.prototype.visitStart_standby_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#stop_standby_clause.
PlSqlParserVisitor.prototype.visitStop_standby_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#convert_database_clause.
PlSqlParserVisitor.prototype.visitConvert_database_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#default_settings_clause.
PlSqlParserVisitor.prototype.visitDefault_settings_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#set_time_zone_clause.
PlSqlParserVisitor.prototype.visitSet_time_zone_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#instance_clauses.
PlSqlParserVisitor.prototype.visitInstance_clauses = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#security_clause.
PlSqlParserVisitor.prototype.visitSecurity_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#domain.
PlSqlParserVisitor.prototype.visitDomain = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#database.
PlSqlParserVisitor.prototype.visitDatabase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#edition_name.
PlSqlParserVisitor.prototype.visitEdition_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#filenumber.
PlSqlParserVisitor.prototype.visitFilenumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#filename.
PlSqlParserVisitor.prototype.visitFilename = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_table.
PlSqlParserVisitor.prototype.visitAlter_table = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_table_properties.
PlSqlParserVisitor.prototype.visitAlter_table_properties = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_table_properties_1.
PlSqlParserVisitor.prototype.visitAlter_table_properties_1 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_iot_clauses.
PlSqlParserVisitor.prototype.visitAlter_iot_clauses = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_mapping_table_clause.
PlSqlParserVisitor.prototype.visitAlter_mapping_table_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_overflow_clause.
PlSqlParserVisitor.prototype.visitAlter_overflow_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#add_overflow_clause.
PlSqlParserVisitor.prototype.visitAdd_overflow_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#enable_disable_clause.
PlSqlParserVisitor.prototype.visitEnable_disable_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#using_index_clause.
PlSqlParserVisitor.prototype.visitUsing_index_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#index_attributes.
PlSqlParserVisitor.prototype.visitIndex_attributes = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#sort_or_nosort.
PlSqlParserVisitor.prototype.visitSort_or_nosort = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#exceptions_clause.
PlSqlParserVisitor.prototype.visitExceptions_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#move_table_clause.
PlSqlParserVisitor.prototype.visitMove_table_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#index_org_table_clause.
PlSqlParserVisitor.prototype.visitIndex_org_table_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#mapping_table_clause.
PlSqlParserVisitor.prototype.visitMapping_table_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#key_compression.
PlSqlParserVisitor.prototype.visitKey_compression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#index_org_overflow_clause.
PlSqlParserVisitor.prototype.visitIndex_org_overflow_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#column_clauses.
PlSqlParserVisitor.prototype.visitColumn_clauses = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#modify_collection_retrieval.
PlSqlParserVisitor.prototype.visitModify_collection_retrieval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#collection_item.
PlSqlParserVisitor.prototype.visitCollection_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#rename_column_clause.
PlSqlParserVisitor.prototype.visitRename_column_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#old_column_name.
PlSqlParserVisitor.prototype.visitOld_column_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#new_column_name.
PlSqlParserVisitor.prototype.visitNew_column_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#add_modify_drop_column_clauses.
PlSqlParserVisitor.prototype.visitAdd_modify_drop_column_clauses = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#drop_column_clause.
PlSqlParserVisitor.prototype.visitDrop_column_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#modify_column_clauses.
PlSqlParserVisitor.prototype.visitModify_column_clauses = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#modify_col_properties.
PlSqlParserVisitor.prototype.visitModify_col_properties = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#modify_col_substitutable.
PlSqlParserVisitor.prototype.visitModify_col_substitutable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#add_column_clause.
PlSqlParserVisitor.prototype.visitAdd_column_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#alter_varray_col_properties.
PlSqlParserVisitor.prototype.visitAlter_varray_col_properties = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#varray_col_properties.
PlSqlParserVisitor.prototype.visitVarray_col_properties = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#varray_storage_clause.
PlSqlParserVisitor.prototype.visitVarray_storage_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#lob_segname.
PlSqlParserVisitor.prototype.visitLob_segname = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#lob_item.
PlSqlParserVisitor.prototype.visitLob_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#lob_storage_parameters.
PlSqlParserVisitor.prototype.visitLob_storage_parameters = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#lob_storage_clause.
PlSqlParserVisitor.prototype.visitLob_storage_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#modify_lob_storage_clause.
PlSqlParserVisitor.prototype.visitModify_lob_storage_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#modify_lob_parameters.
PlSqlParserVisitor.prototype.visitModify_lob_parameters = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#lob_parameters.
PlSqlParserVisitor.prototype.visitLob_parameters = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#lob_deduplicate_clause.
PlSqlParserVisitor.prototype.visitLob_deduplicate_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#lob_compression_clause.
PlSqlParserVisitor.prototype.visitLob_compression_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#lob_retention_clause.
PlSqlParserVisitor.prototype.visitLob_retention_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#encryption_spec.
PlSqlParserVisitor.prototype.visitEncryption_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#tablespace.
PlSqlParserVisitor.prototype.visitTablespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#varray_item.
PlSqlParserVisitor.prototype.visitVarray_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#column_properties.
PlSqlParserVisitor.prototype.visitColumn_properties = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#period_definition.
PlSqlParserVisitor.prototype.visitPeriod_definition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#start_time_column.
PlSqlParserVisitor.prototype.visitStart_time_column = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#end_time_column.
PlSqlParserVisitor.prototype.visitEnd_time_column = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#column_definition.
PlSqlParserVisitor.prototype.visitColumn_definition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#virtual_column_definition.
PlSqlParserVisitor.prototype.visitVirtual_column_definition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#autogenerated_sequence_definition.
PlSqlParserVisitor.prototype.visitAutogenerated_sequence_definition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#out_of_line_part_storage.
PlSqlParserVisitor.prototype.visitOut_of_line_part_storage = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#nested_table_col_properties.
PlSqlParserVisitor.prototype.visitNested_table_col_properties = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#nested_item.
PlSqlParserVisitor.prototype.visitNested_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#substitutable_column_clause.
PlSqlParserVisitor.prototype.visitSubstitutable_column_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#partition_name.
PlSqlParserVisitor.prototype.visitPartition_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#supplemental_logging_props.
PlSqlParserVisitor.prototype.visitSupplemental_logging_props = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#column_or_attribute.
PlSqlParserVisitor.prototype.visitColumn_or_attribute = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#object_type_col_properties.
PlSqlParserVisitor.prototype.visitObject_type_col_properties = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#constraint_clauses.
PlSqlParserVisitor.prototype.visitConstraint_clauses = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#old_constraint_name.
PlSqlParserVisitor.prototype.visitOld_constraint_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#new_constraint_name.
PlSqlParserVisitor.prototype.visitNew_constraint_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#drop_constraint_clause.
PlSqlParserVisitor.prototype.visitDrop_constraint_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#drop_primary_key_or_unique_or_generic_clause.
PlSqlParserVisitor.prototype.visitDrop_primary_key_or_unique_or_generic_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#add_constraint.
PlSqlParserVisitor.prototype.visitAdd_constraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#add_constraint_clause.
PlSqlParserVisitor.prototype.visitAdd_constraint_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#check_constraint.
PlSqlParserVisitor.prototype.visitCheck_constraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#drop_constraint.
PlSqlParserVisitor.prototype.visitDrop_constraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#enable_constraint.
PlSqlParserVisitor.prototype.visitEnable_constraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#disable_constraint.
PlSqlParserVisitor.prototype.visitDisable_constraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#foreign_key_clause.
PlSqlParserVisitor.prototype.visitForeign_key_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#references_clause.
PlSqlParserVisitor.prototype.visitReferences_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#on_delete_clause.
PlSqlParserVisitor.prototype.visitOn_delete_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#unique_key_clause.
PlSqlParserVisitor.prototype.visitUnique_key_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#primary_key_clause.
PlSqlParserVisitor.prototype.visitPrimary_key_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#anonymous_block.
PlSqlParserVisitor.prototype.visitAnonymous_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#invoker_rights_clause.
PlSqlParserVisitor.prototype.visitInvoker_rights_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#call_spec.
PlSqlParserVisitor.prototype.visitCall_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#java_spec.
PlSqlParserVisitor.prototype.visitJava_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#c_spec.
PlSqlParserVisitor.prototype.visitC_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#c_agent_in_clause.
PlSqlParserVisitor.prototype.visitC_agent_in_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#c_parameters_clause.
PlSqlParserVisitor.prototype.visitC_parameters_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#parameter.
PlSqlParserVisitor.prototype.visitParameter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#default_value_part.
PlSqlParserVisitor.prototype.visitDefault_value_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#seq_of_declare_specs.
PlSqlParserVisitor.prototype.visitSeq_of_declare_specs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#declare_spec.
PlSqlParserVisitor.prototype.visitDeclare_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#variable_declaration.
PlSqlParserVisitor.prototype.visitVariable_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#subtype_declaration.
PlSqlParserVisitor.prototype.visitSubtype_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#cursor_declaration.
PlSqlParserVisitor.prototype.visitCursor_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#parameter_spec.
PlSqlParserVisitor.prototype.visitParameter_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#exception_declaration.
PlSqlParserVisitor.prototype.visitException_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#pragma_declaration.
PlSqlParserVisitor.prototype.visitPragma_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#record_type_def.
PlSqlParserVisitor.prototype.visitRecord_type_def = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#field_spec.
PlSqlParserVisitor.prototype.visitField_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#ref_cursor_type_def.
PlSqlParserVisitor.prototype.visitRef_cursor_type_def = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#type_declaration.
PlSqlParserVisitor.prototype.visitType_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#table_type_def.
PlSqlParserVisitor.prototype.visitTable_type_def = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#table_indexed_by_part.
PlSqlParserVisitor.prototype.visitTable_indexed_by_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#varray_type_def.
PlSqlParserVisitor.prototype.visitVarray_type_def = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#seq_of_statements.
PlSqlParserVisitor.prototype.visitSeq_of_statements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#label_declaration.
PlSqlParserVisitor.prototype.visitLabel_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#statement.
PlSqlParserVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#swallow_to_semi.
PlSqlParserVisitor.prototype.visitSwallow_to_semi = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#assignment_statement.
PlSqlParserVisitor.prototype.visitAssignment_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#continue_statement.
PlSqlParserVisitor.prototype.visitContinue_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#exit_statement.
PlSqlParserVisitor.prototype.visitExit_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#goto_statement.
PlSqlParserVisitor.prototype.visitGoto_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#if_statement.
PlSqlParserVisitor.prototype.visitIf_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#elsif_part.
PlSqlParserVisitor.prototype.visitElsif_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#else_part.
PlSqlParserVisitor.prototype.visitElse_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#loop_statement.
PlSqlParserVisitor.prototype.visitLoop_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#cursor_loop_param.
PlSqlParserVisitor.prototype.visitCursor_loop_param = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#forall_statement.
PlSqlParserVisitor.prototype.visitForall_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#bounds_clause.
PlSqlParserVisitor.prototype.visitBounds_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#between_bound.
PlSqlParserVisitor.prototype.visitBetween_bound = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#lower_bound.
PlSqlParserVisitor.prototype.visitLower_bound = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#upper_bound.
PlSqlParserVisitor.prototype.visitUpper_bound = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#null_statement.
PlSqlParserVisitor.prototype.visitNull_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#raise_statement.
PlSqlParserVisitor.prototype.visitRaise_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#return_statement.
PlSqlParserVisitor.prototype.visitReturn_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#function_call.
PlSqlParserVisitor.prototype.visitFunction_call = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#procedure_call.
PlSqlParserVisitor.prototype.visitProcedure_call = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#pipe_row_statement.
PlSqlParserVisitor.prototype.visitPipe_row_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#body.
PlSqlParserVisitor.prototype.visitBody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#exception_handler.
PlSqlParserVisitor.prototype.visitException_handler = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#trigger_block.
PlSqlParserVisitor.prototype.visitTrigger_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#block.
PlSqlParserVisitor.prototype.visitBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#sql_statement.
PlSqlParserVisitor.prototype.visitSql_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#execute_immediate.
PlSqlParserVisitor.prototype.visitExecute_immediate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#dynamic_returning_clause.
PlSqlParserVisitor.prototype.visitDynamic_returning_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#data_manipulation_language_statements.
PlSqlParserVisitor.prototype.visitData_manipulation_language_statements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#cursor_manipulation_statements.
PlSqlParserVisitor.prototype.visitCursor_manipulation_statements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#close_statement.
PlSqlParserVisitor.prototype.visitClose_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#open_statement.
PlSqlParserVisitor.prototype.visitOpen_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#fetch_statement.
PlSqlParserVisitor.prototype.visitFetch_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#open_for_statement.
PlSqlParserVisitor.prototype.visitOpen_for_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#transaction_control_statements.
PlSqlParserVisitor.prototype.visitTransaction_control_statements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#set_transaction_command.
PlSqlParserVisitor.prototype.visitSet_transaction_command = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#set_constraint_command.
PlSqlParserVisitor.prototype.visitSet_constraint_command = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#commit_statement.
PlSqlParserVisitor.prototype.visitCommit_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#write_clause.
PlSqlParserVisitor.prototype.visitWrite_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#rollback_statement.
PlSqlParserVisitor.prototype.visitRollback_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#savepoint_statement.
PlSqlParserVisitor.prototype.visitSavepoint_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#explain_statement.
PlSqlParserVisitor.prototype.visitExplain_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#select_only_statement.
PlSqlParserVisitor.prototype.visitSelect_only_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#select_statement.
PlSqlParserVisitor.prototype.visitSelect_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#subquery_factoring_clause.
PlSqlParserVisitor.prototype.visitSubquery_factoring_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#factoring_element.
PlSqlParserVisitor.prototype.visitFactoring_element = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#search_clause.
PlSqlParserVisitor.prototype.visitSearch_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#cycle_clause.
PlSqlParserVisitor.prototype.visitCycle_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#subquery.
PlSqlParserVisitor.prototype.visitSubquery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#subquery_basic_elements.
PlSqlParserVisitor.prototype.visitSubquery_basic_elements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#subquery_operation_part.
PlSqlParserVisitor.prototype.visitSubquery_operation_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#query_block.
PlSqlParserVisitor.prototype.visitQuery_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#selected_list.
PlSqlParserVisitor.prototype.visitSelected_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#from_clause.
PlSqlParserVisitor.prototype.visitFrom_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#select_list_elements.
PlSqlParserVisitor.prototype.visitSelect_list_elements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#table_ref_list.
PlSqlParserVisitor.prototype.visitTable_ref_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#table_ref.
PlSqlParserVisitor.prototype.visitTable_ref = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#table_ref_aux.
PlSqlParserVisitor.prototype.visitTable_ref_aux = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#table_ref_aux_internal_one.
PlSqlParserVisitor.prototype.visitTable_ref_aux_internal_one = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#table_ref_aux_internal_two.
PlSqlParserVisitor.prototype.visitTable_ref_aux_internal_two = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#table_ref_aux_internal_three.
PlSqlParserVisitor.prototype.visitTable_ref_aux_internal_three = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#join_clause.
PlSqlParserVisitor.prototype.visitJoin_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#join_on_part.
PlSqlParserVisitor.prototype.visitJoin_on_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#join_using_part.
PlSqlParserVisitor.prototype.visitJoin_using_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#outer_join_type.
PlSqlParserVisitor.prototype.visitOuter_join_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#query_partition_clause.
PlSqlParserVisitor.prototype.visitQuery_partition_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#flashback_query_clause.
PlSqlParserVisitor.prototype.visitFlashback_query_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#pivot_clause.
PlSqlParserVisitor.prototype.visitPivot_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#pivot_element.
PlSqlParserVisitor.prototype.visitPivot_element = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#pivot_for_clause.
PlSqlParserVisitor.prototype.visitPivot_for_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#pivot_in_clause.
PlSqlParserVisitor.prototype.visitPivot_in_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#pivot_in_clause_element.
PlSqlParserVisitor.prototype.visitPivot_in_clause_element = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#pivot_in_clause_elements.
PlSqlParserVisitor.prototype.visitPivot_in_clause_elements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#unpivot_clause.
PlSqlParserVisitor.prototype.visitUnpivot_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#unpivot_in_clause.
PlSqlParserVisitor.prototype.visitUnpivot_in_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#unpivot_in_elements.
PlSqlParserVisitor.prototype.visitUnpivot_in_elements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#hierarchical_query_clause.
PlSqlParserVisitor.prototype.visitHierarchical_query_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#start_part.
PlSqlParserVisitor.prototype.visitStart_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#group_by_clause.
PlSqlParserVisitor.prototype.visitGroup_by_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#group_by_elements.
PlSqlParserVisitor.prototype.visitGroup_by_elements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#rollup_cube_clause.
PlSqlParserVisitor.prototype.visitRollup_cube_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#grouping_sets_clause.
PlSqlParserVisitor.prototype.visitGrouping_sets_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#grouping_sets_elements.
PlSqlParserVisitor.prototype.visitGrouping_sets_elements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#having_clause.
PlSqlParserVisitor.prototype.visitHaving_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#model_clause.
PlSqlParserVisitor.prototype.visitModel_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#cell_reference_options.
PlSqlParserVisitor.prototype.visitCell_reference_options = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#return_rows_clause.
PlSqlParserVisitor.prototype.visitReturn_rows_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#reference_model.
PlSqlParserVisitor.prototype.visitReference_model = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#main_model.
PlSqlParserVisitor.prototype.visitMain_model = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#model_column_clauses.
PlSqlParserVisitor.prototype.visitModel_column_clauses = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#model_column_partition_part.
PlSqlParserVisitor.prototype.visitModel_column_partition_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#model_column_list.
PlSqlParserVisitor.prototype.visitModel_column_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#model_column.
PlSqlParserVisitor.prototype.visitModel_column = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#model_rules_clause.
PlSqlParserVisitor.prototype.visitModel_rules_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#model_rules_part.
PlSqlParserVisitor.prototype.visitModel_rules_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#model_rules_element.
PlSqlParserVisitor.prototype.visitModel_rules_element = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#cell_assignment.
PlSqlParserVisitor.prototype.visitCell_assignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#model_iterate_clause.
PlSqlParserVisitor.prototype.visitModel_iterate_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#until_part.
PlSqlParserVisitor.prototype.visitUntil_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#order_by_clause.
PlSqlParserVisitor.prototype.visitOrder_by_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#order_by_elements.
PlSqlParserVisitor.prototype.visitOrder_by_elements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#offset_clause.
PlSqlParserVisitor.prototype.visitOffset_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#fetch_clause.
PlSqlParserVisitor.prototype.visitFetch_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#for_update_clause.
PlSqlParserVisitor.prototype.visitFor_update_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#for_update_of_part.
PlSqlParserVisitor.prototype.visitFor_update_of_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#for_update_options.
PlSqlParserVisitor.prototype.visitFor_update_options = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#update_statement.
PlSqlParserVisitor.prototype.visitUpdate_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#update_set_clause.
PlSqlParserVisitor.prototype.visitUpdate_set_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#column_based_update_set_clause.
PlSqlParserVisitor.prototype.visitColumn_based_update_set_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#delete_statement.
PlSqlParserVisitor.prototype.visitDelete_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#insert_statement.
PlSqlParserVisitor.prototype.visitInsert_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#single_table_insert.
PlSqlParserVisitor.prototype.visitSingle_table_insert = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#multi_table_insert.
PlSqlParserVisitor.prototype.visitMulti_table_insert = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#multi_table_element.
PlSqlParserVisitor.prototype.visitMulti_table_element = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#conditional_insert_clause.
PlSqlParserVisitor.prototype.visitConditional_insert_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#conditional_insert_when_part.
PlSqlParserVisitor.prototype.visitConditional_insert_when_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#conditional_insert_else_part.
PlSqlParserVisitor.prototype.visitConditional_insert_else_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#insert_into_clause.
PlSqlParserVisitor.prototype.visitInsert_into_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#values_clause.
PlSqlParserVisitor.prototype.visitValues_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#merge_statement.
PlSqlParserVisitor.prototype.visitMerge_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#merge_update_clause.
PlSqlParserVisitor.prototype.visitMerge_update_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#merge_element.
PlSqlParserVisitor.prototype.visitMerge_element = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#merge_update_delete_part.
PlSqlParserVisitor.prototype.visitMerge_update_delete_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#merge_insert_clause.
PlSqlParserVisitor.prototype.visitMerge_insert_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#selected_tableview.
PlSqlParserVisitor.prototype.visitSelected_tableview = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#lock_table_statement.
PlSqlParserVisitor.prototype.visitLock_table_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#wait_nowait_part.
PlSqlParserVisitor.prototype.visitWait_nowait_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#lock_table_element.
PlSqlParserVisitor.prototype.visitLock_table_element = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#lock_mode.
PlSqlParserVisitor.prototype.visitLock_mode = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#general_table_ref.
PlSqlParserVisitor.prototype.visitGeneral_table_ref = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#static_returning_clause.
PlSqlParserVisitor.prototype.visitStatic_returning_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#error_logging_clause.
PlSqlParserVisitor.prototype.visitError_logging_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#error_logging_into_part.
PlSqlParserVisitor.prototype.visitError_logging_into_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#error_logging_reject_part.
PlSqlParserVisitor.prototype.visitError_logging_reject_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#dml_table_expression_clause.
PlSqlParserVisitor.prototype.visitDml_table_expression_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#table_collection_expression.
PlSqlParserVisitor.prototype.visitTable_collection_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#subquery_restriction_clause.
PlSqlParserVisitor.prototype.visitSubquery_restriction_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#sample_clause.
PlSqlParserVisitor.prototype.visitSample_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#seed_part.
PlSqlParserVisitor.prototype.visitSeed_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#condition.
PlSqlParserVisitor.prototype.visitCondition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#expressions.
PlSqlParserVisitor.prototype.visitExpressions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#expression.
PlSqlParserVisitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#cursor_expression.
PlSqlParserVisitor.prototype.visitCursor_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#logical_expression.
PlSqlParserVisitor.prototype.visitLogical_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#unary_logical_expression.
PlSqlParserVisitor.prototype.visitUnary_logical_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#logical_operation.
PlSqlParserVisitor.prototype.visitLogical_operation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#multiset_expression.
PlSqlParserVisitor.prototype.visitMultiset_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#relational_expression.
PlSqlParserVisitor.prototype.visitRelational_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#compound_expression.
PlSqlParserVisitor.prototype.visitCompound_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#relational_operator.
PlSqlParserVisitor.prototype.visitRelational_operator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#in_elements.
PlSqlParserVisitor.prototype.visitIn_elements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#between_elements.
PlSqlParserVisitor.prototype.visitBetween_elements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#concatenation.
PlSqlParserVisitor.prototype.visitConcatenation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#interval_expression.
PlSqlParserVisitor.prototype.visitInterval_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#model_expression.
PlSqlParserVisitor.prototype.visitModel_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#model_expression_element.
PlSqlParserVisitor.prototype.visitModel_expression_element = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#single_column_for_loop.
PlSqlParserVisitor.prototype.visitSingle_column_for_loop = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#multi_column_for_loop.
PlSqlParserVisitor.prototype.visitMulti_column_for_loop = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#unary_expression.
PlSqlParserVisitor.prototype.visitUnary_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#case_statement.
PlSqlParserVisitor.prototype.visitCase_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#simple_case_statement.
PlSqlParserVisitor.prototype.visitSimple_case_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#simple_case_when_part.
PlSqlParserVisitor.prototype.visitSimple_case_when_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#searched_case_statement.
PlSqlParserVisitor.prototype.visitSearched_case_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#searched_case_when_part.
PlSqlParserVisitor.prototype.visitSearched_case_when_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#case_else_part.
PlSqlParserVisitor.prototype.visitCase_else_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#atom.
PlSqlParserVisitor.prototype.visitAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#quantified_expression.
PlSqlParserVisitor.prototype.visitQuantified_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#string_function.
PlSqlParserVisitor.prototype.visitString_function = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#standard_function.
PlSqlParserVisitor.prototype.visitStandard_function = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#literal.
PlSqlParserVisitor.prototype.visitLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#numeric_function_wrapper.
PlSqlParserVisitor.prototype.visitNumeric_function_wrapper = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#numeric_function.
PlSqlParserVisitor.prototype.visitNumeric_function = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#other_function.
PlSqlParserVisitor.prototype.visitOther_function = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#over_clause_keyword.
PlSqlParserVisitor.prototype.visitOver_clause_keyword = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#within_or_over_clause_keyword.
PlSqlParserVisitor.prototype.visitWithin_or_over_clause_keyword = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#standard_prediction_function_keyword.
PlSqlParserVisitor.prototype.visitStandard_prediction_function_keyword = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#over_clause.
PlSqlParserVisitor.prototype.visitOver_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#windowing_clause.
PlSqlParserVisitor.prototype.visitWindowing_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#windowing_type.
PlSqlParserVisitor.prototype.visitWindowing_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#windowing_elements.
PlSqlParserVisitor.prototype.visitWindowing_elements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#using_clause.
PlSqlParserVisitor.prototype.visitUsing_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#using_element.
PlSqlParserVisitor.prototype.visitUsing_element = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#collect_order_by_part.
PlSqlParserVisitor.prototype.visitCollect_order_by_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#within_or_over_part.
PlSqlParserVisitor.prototype.visitWithin_or_over_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#cost_matrix_clause.
PlSqlParserVisitor.prototype.visitCost_matrix_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#xml_passing_clause.
PlSqlParserVisitor.prototype.visitXml_passing_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#xml_attributes_clause.
PlSqlParserVisitor.prototype.visitXml_attributes_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#xml_namespaces_clause.
PlSqlParserVisitor.prototype.visitXml_namespaces_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#xml_table_column.
PlSqlParserVisitor.prototype.visitXml_table_column = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#xml_general_default_part.
PlSqlParserVisitor.prototype.visitXml_general_default_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#xml_multiuse_expression_element.
PlSqlParserVisitor.prototype.visitXml_multiuse_expression_element = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#xmlroot_param_version_part.
PlSqlParserVisitor.prototype.visitXmlroot_param_version_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#xmlroot_param_standalone_part.
PlSqlParserVisitor.prototype.visitXmlroot_param_standalone_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#xmlserialize_param_enconding_part.
PlSqlParserVisitor.prototype.visitXmlserialize_param_enconding_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#xmlserialize_param_version_part.
PlSqlParserVisitor.prototype.visitXmlserialize_param_version_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#xmlserialize_param_ident_part.
PlSqlParserVisitor.prototype.visitXmlserialize_param_ident_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#sql_plus_command.
PlSqlParserVisitor.prototype.visitSql_plus_command = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#whenever_command.
PlSqlParserVisitor.prototype.visitWhenever_command = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#set_command.
PlSqlParserVisitor.prototype.visitSet_command = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#partition_extension_clause.
PlSqlParserVisitor.prototype.visitPartition_extension_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#column_alias.
PlSqlParserVisitor.prototype.visitColumn_alias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#table_alias.
PlSqlParserVisitor.prototype.visitTable_alias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#where_clause.
PlSqlParserVisitor.prototype.visitWhere_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#into_clause.
PlSqlParserVisitor.prototype.visitInto_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#xml_column_name.
PlSqlParserVisitor.prototype.visitXml_column_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#cost_class_name.
PlSqlParserVisitor.prototype.visitCost_class_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#attribute_name.
PlSqlParserVisitor.prototype.visitAttribute_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#savepoint_name.
PlSqlParserVisitor.prototype.visitSavepoint_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#rollback_segment_name.
PlSqlParserVisitor.prototype.visitRollback_segment_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#table_var_name.
PlSqlParserVisitor.prototype.visitTable_var_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#schema_name.
PlSqlParserVisitor.prototype.visitSchema_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#routine_name.
PlSqlParserVisitor.prototype.visitRoutine_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#package_name.
PlSqlParserVisitor.prototype.visitPackage_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#implementation_type_name.
PlSqlParserVisitor.prototype.visitImplementation_type_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#parameter_name.
PlSqlParserVisitor.prototype.visitParameter_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#reference_model_name.
PlSqlParserVisitor.prototype.visitReference_model_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#main_model_name.
PlSqlParserVisitor.prototype.visitMain_model_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#container_tableview_name.
PlSqlParserVisitor.prototype.visitContainer_tableview_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#aggregate_function_name.
PlSqlParserVisitor.prototype.visitAggregate_function_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#query_name.
PlSqlParserVisitor.prototype.visitQuery_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#grantee_name.
PlSqlParserVisitor.prototype.visitGrantee_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#role_name.
PlSqlParserVisitor.prototype.visitRole_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#constraint_name.
PlSqlParserVisitor.prototype.visitConstraint_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#label_name.
PlSqlParserVisitor.prototype.visitLabel_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#type_name.
PlSqlParserVisitor.prototype.visitType_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#sequence_name.
PlSqlParserVisitor.prototype.visitSequence_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#exception_name.
PlSqlParserVisitor.prototype.visitException_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#function_name.
PlSqlParserVisitor.prototype.visitFunction_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#procedure_name.
PlSqlParserVisitor.prototype.visitProcedure_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#trigger_name.
PlSqlParserVisitor.prototype.visitTrigger_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#variable_name.
PlSqlParserVisitor.prototype.visitVariable_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#index_name.
PlSqlParserVisitor.prototype.visitIndex_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#cursor_name.
PlSqlParserVisitor.prototype.visitCursor_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#record_name.
PlSqlParserVisitor.prototype.visitRecord_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#collection_name.
PlSqlParserVisitor.prototype.visitCollection_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#link_name.
PlSqlParserVisitor.prototype.visitLink_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#column_name.
PlSqlParserVisitor.prototype.visitColumn_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#tableview_name.
PlSqlParserVisitor.prototype.visitTableview_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#xmltable.
PlSqlParserVisitor.prototype.visitXmltable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#char_set_name.
PlSqlParserVisitor.prototype.visitChar_set_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#synonym_name.
PlSqlParserVisitor.prototype.visitSynonym_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#schema_object_name.
PlSqlParserVisitor.prototype.visitSchema_object_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#dir_object_name.
PlSqlParserVisitor.prototype.visitDir_object_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#user_object_name.
PlSqlParserVisitor.prototype.visitUser_object_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#grant_object_name.
PlSqlParserVisitor.prototype.visitGrant_object_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#column_list.
PlSqlParserVisitor.prototype.visitColumn_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#paren_column_list.
PlSqlParserVisitor.prototype.visitParen_column_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#keep_clause.
PlSqlParserVisitor.prototype.visitKeep_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#function_argument.
PlSqlParserVisitor.prototype.visitFunction_argument = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#function_argument_analytic.
PlSqlParserVisitor.prototype.visitFunction_argument_analytic = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#function_argument_modeling.
PlSqlParserVisitor.prototype.visitFunction_argument_modeling = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#respect_or_ignore_nulls.
PlSqlParserVisitor.prototype.visitRespect_or_ignore_nulls = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#argument.
PlSqlParserVisitor.prototype.visitArgument = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#type_spec.
PlSqlParserVisitor.prototype.visitType_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#datatype.
PlSqlParserVisitor.prototype.visitDatatype = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#precision_part.
PlSqlParserVisitor.prototype.visitPrecision_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#native_datatype_element.
PlSqlParserVisitor.prototype.visitNative_datatype_element = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#bind_variable.
PlSqlParserVisitor.prototype.visitBind_variable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#general_element.
PlSqlParserVisitor.prototype.visitGeneral_element = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#general_element_part.
PlSqlParserVisitor.prototype.visitGeneral_element_part = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#table_element.
PlSqlParserVisitor.prototype.visitTable_element = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#object_privilege.
PlSqlParserVisitor.prototype.visitObject_privilege = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#system_privilege.
PlSqlParserVisitor.prototype.visitSystem_privilege = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#constant.
PlSqlParserVisitor.prototype.visitConstant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#numeric.
PlSqlParserVisitor.prototype.visitNumeric = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#numeric_negative.
PlSqlParserVisitor.prototype.visitNumeric_negative = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#quoted_string.
PlSqlParserVisitor.prototype.visitQuoted_string = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#identifier.
PlSqlParserVisitor.prototype.visitIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#id_expression.
PlSqlParserVisitor.prototype.visitId_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#outer_join_sign.
PlSqlParserVisitor.prototype.visitOuter_join_sign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#regular_id.
PlSqlParserVisitor.prototype.visitRegular_id = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#non_reserved_keywords_in_12c.
PlSqlParserVisitor.prototype.visitNon_reserved_keywords_in_12c = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#non_reserved_keywords_pre12c.
PlSqlParserVisitor.prototype.visitNon_reserved_keywords_pre12c = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#string_function_name.
PlSqlParserVisitor.prototype.visitString_function_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlSqlParser#numeric_function_name.
PlSqlParserVisitor.prototype.visitNumeric_function_name = function(ctx) {
  return this.visitChildren(ctx);
};



exports.PlSqlParserVisitor = PlSqlParserVisitor;